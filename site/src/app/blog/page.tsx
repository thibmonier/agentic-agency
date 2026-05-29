import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Agentic Agency",
  description:
    "Découvrez nos articles sur le delivery moderne, les bonnes pratiques de développement et nos retours d'expérience.",
  alternates: {
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const allPosts = await getAllPosts();

  const filteredPosts = category
    ? allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    : allPosts;

  const categories = ["Tous", "Process", "Avis", "Tests"];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            Notre Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez nos articles sur le delivery moderne et les bonnes pratiques de développement
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => {
            const isActive =
              (!category && cat === "Tous") || category?.toLowerCase() === cat.toLowerCase();
            return (
              <a
                key={cat}
                href={cat === "Tous" ? "/blog" : `/blog?category=${cat.toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </a>
            );
          })}
        </div>

        {/* Liste des articles */}
        {filteredPosts.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">Aucun article trouvé pour cette catégorie.</p>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
