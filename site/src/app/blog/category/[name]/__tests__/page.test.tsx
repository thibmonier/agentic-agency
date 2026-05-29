import { render, screen } from "@testing-library/react";
import CategoryPage, { generateStaticParams, generateMetadata } from "../page";

jest.mock("@/lib/mdx", () => ({
  getPostsByCategory: jest.fn(),
}));

const mockGetPostsByCategory = jest.requireMock("@/lib/mdx").getPostsByCategory;

describe("CategoryPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders category title and intro", async () => {
    mockGetPostsByCategory.mockResolvedValue([]);

    const component = await CategoryPage({
      params: Promise.resolve({ name: "avis" }),
    });

    render(component);

    expect(screen.getByRole("heading", { name: "Avis" })).toBeInTheDocument();
    expect(screen.getByText(/Retours d'expérience sur les outils/)).toBeInTheDocument();
  });

  it("renders blog posts when available", async () => {
    const mockPosts = [
      {
        slug: "test-post-1",
        title: "Test Post 1",
        description: "Description 1",
        date: "2024-01-15",
        category: "avis",
        author: "Author 1",
        readingTime: 5,
        tags: ["test"],
      },
    ];

    mockGetPostsByCategory.mockResolvedValue(mockPosts);

    const component = await CategoryPage({
      params: Promise.resolve({ name: "avis" }),
    });

    render(component);

    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
  });

  it("shows empty state when no posts", async () => {
    mockGetPostsByCategory.mockResolvedValue([]);

    const component = await CategoryPage({
      params: Promise.resolve({ name: "tests" }),
    });

    render(component);

    expect(screen.getByText("Aucun article dans cette catégorie.")).toBeInTheDocument();
    expect(screen.getByText("Voir tous les articles")).toBeInTheDocument();
  });

  it("generates static params for all categories", async () => {
    const params = await generateStaticParams();

    expect(params).toEqual([{ name: "avis" }, { name: "tests" }, { name: "process" }]);
  });

  it("generates metadata correctly", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ name: "tests" }),
    });

    expect(metadata.title).toBe("Tests | Blog Agentic Agency");
    expect(metadata.description).toContain("Stratégies de test");
  });
});
