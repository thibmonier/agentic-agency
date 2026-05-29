import { render, screen } from "@testing-library/react";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import type { BlogPostMetadata } from "@/lib/mdx";

// Mock the mdx module
jest.mock("@/lib/mdx", () => ({
  getAllPosts: jest.fn(),
}));

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

import { getAllPosts } from "@/lib/mdx";

const mockPosts: BlogPostMetadata[] = [
  {
    slug: "post-1",
    title: "Article 1",
    description: "Description de l'article 1",
    date: "2026-01-03",
    category: "Process",
    author: "Auteur 1",
    readingTime: 5,
    tags: ["tag1"],
  },
  {
    slug: "post-2",
    title: "Article 2",
    description: "Description de l'article 2",
    date: "2026-01-02",
    category: "Avis",
    author: "Auteur 2",
    readingTime: 3,
    tags: ["tag2"],
  },
  {
    slug: "post-3",
    title: "Article 3",
    description: "Description de l'article 3",
    date: "2026-01-01",
    category: "Tests",
    author: "Auteur 3",
    readingTime: 4,
    tags: [],
  },
];

describe("BlogPreviewSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders blog preview with 3 posts", async () => {
    (getAllPosts as jest.Mock).mockResolvedValue(mockPosts);

    const Component = await BlogPreviewSection();
    render(Component);

    expect(
      screen.getByRole("heading", { level: 2, name: /notes de terrain/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(screen.getByText("Article 3")).toBeInTheDocument();
  });

  it("renders link to all articles", async () => {
    (getAllPosts as jest.Mock).mockResolvedValue(mockPosts);

    const Component = await BlogPreviewSection();
    render(Component);

    const link = screen.getByRole("link", { name: /tous les articles/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/blog");
  });

  it("renders nothing when no posts", async () => {
    (getAllPosts as jest.Mock).mockResolvedValue([]);

    const Component = await BlogPreviewSection();
    const { container } = render(Component);

    expect(container.firstChild).toBeNull();
  });

  it("renders section with correct id", async () => {
    (getAllPosts as jest.Mock).mockResolvedValue(mockPosts);

    const Component = await BlogPreviewSection();
    render(Component);

    expect(document.getElementById("blog")).toBeInTheDocument();
  });

  it("only displays first 3 posts when more are available", async () => {
    const manyPosts = [
      ...mockPosts,
      {
        slug: "post-4",
        title: "Article 4",
        description: "Description 4",
        date: "2025-12-31",
        category: "Process",
        author: "Auteur 4",
        readingTime: 2,
        tags: [],
      },
      {
        slug: "post-5",
        title: "Article 5",
        description: "Description 5",
        date: "2025-12-30",
        category: "Avis",
        author: "Auteur 5",
        readingTime: 6,
        tags: [],
      },
    ];

    (getAllPosts as jest.Mock).mockResolvedValue(manyPosts);

    const Component = await BlogPreviewSection();
    render(Component);

    expect(screen.getByText("Article 1")).toBeInTheDocument();
    expect(screen.getByText("Article 2")).toBeInTheDocument();
    expect(screen.getByText("Article 3")).toBeInTheDocument();
    expect(screen.queryByText("Article 4")).not.toBeInTheDocument();
    expect(screen.queryByText("Article 5")).not.toBeInTheDocument();
  });
});
