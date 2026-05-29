/**
 * @jest-environment node
 */

import { GET } from "../route";

jest.mock("@/lib/mdx", () => ({
  getAllPosts: jest.fn().mockResolvedValue([
    {
      slug: "test-article",
      title: "Test Article",
      description: "A test article description",
      date: "2024-01-15",
      category: "tests",
      author: "Author",
      readingTime: 5,
      tags: ["test"],
    },
    {
      slug: "another-article",
      title: "Another Article",
      description: "Another description",
      date: "2024-01-16",
      category: "avis",
      author: "Author 2",
      readingTime: 3,
      tags: ["avis"],
    },
  ]),
}));

describe("RSS Feed", () => {
  it("returns XML with correct content type", async () => {
    const response = await GET();
    expect(response.headers.get("Content-Type")).toBe("application/xml");
  });

  it("sets cache control header", async () => {
    const response = await GET();
    expect(response.headers.get("Cache-Control")).toBe("public, max-age=3600");
  });

  it("contains RSS 2.0 header", async () => {
    const response = await GET();
    const text = await response.text();
    expect(text).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(text).toContain('<rss version="2.0"');
  });

  it("includes channel metadata", async () => {
    const response = await GET();
    const text = await response.text();
    expect(text).toContain("<title>Blog Agentic Agency</title>");
    expect(text).toContain("<link>https://agentic-agency.fr/blog</link>");
    expect(text).toContain("<language>fr</language>");
  });

  it("includes blog posts", async () => {
    const response = await GET();
    const text = await response.text();
    expect(text).toContain("Test Article");
    expect(text).toContain("/blog/test-article");
    expect(text).toContain("A test article description");
  });

  it("includes post categories", async () => {
    const response = await GET();
    const text = await response.text();
    expect(text).toContain("<category>tests</category>");
    expect(text).toContain("<category>avis</category>");
  });

  it("formats dates as RFC 822", async () => {
    const response = await GET();
    const text = await response.text();
    // Date should be in RFC 822 format (UTC string)
    expect(text).toMatch(/<pubDate>.*GMT<\/pubDate>/);
  });

  it("includes atom self-link", async () => {
    const response = await GET();
    const text = await response.text();
    expect(text).toContain('xmlns:atom="http://www.w3.org/2005/Atom"');
    expect(text).toContain('atom:link href="https://agentic-agency.fr/blog/rss.xml"');
  });
});
