import sitemap from "../sitemap";

jest.mock("@/lib/mdx", () => ({
  getAllPosts: jest.fn().mockResolvedValue([
    {
      slug: "test-article",
      date: "2024-01-01",
      title: "Test",
      description: "Test",
      category: "tests",
      author: "Author",
      readingTime: 5,
      tags: [],
    },
  ]),
}));

describe("sitemap", () => {
  it("returns all static pages", async () => {
    const result = await sitemap();
    const urls = result.map((entry) => entry.url);
    expect(urls).toContain("https://agentic-agency.fr");
    expect(urls).toContain("https://agentic-agency.fr/services/developpement-web");
    expect(urls).toContain("https://agentic-agency.fr/contact");
    expect(urls).toContain("https://agentic-agency.fr/blog");
    expect(urls).toContain("https://agentic-agency.fr/mentions-legales");
    expect(urls).toContain("https://agentic-agency.fr/confidentialite");
    expect(urls).toContain("https://agentic-agency.fr/cookies");
  });

  it("includes blog posts", async () => {
    const result = await sitemap();
    const urls = result.map((entry) => entry.url);
    expect(urls).toContain("https://agentic-agency.fr/blog/test-article");
  });

  it("has correct priorities", async () => {
    const result = await sitemap();
    const homepage = result.find((e) => e.url === "https://agentic-agency.fr");
    expect(homepage?.priority).toBe(1);

    const service = result.find(
      (e) => e.url === "https://agentic-agency.fr/services/developpement-web"
    );
    expect(service?.priority).toBe(0.8);

    const blog = result.find((e) => e.url === "https://agentic-agency.fr/blog");
    expect(blog?.priority).toBe(0.7);
  });

  it("has correct change frequencies", async () => {
    const result = await sitemap();
    const homepage = result.find((e) => e.url === "https://agentic-agency.fr");
    expect(homepage?.changeFrequency).toBe("monthly");

    const legal = result.find((e) => e.url === "https://agentic-agency.fr/mentions-legales");
    expect(legal?.changeFrequency).toBe("yearly");
  });
});
