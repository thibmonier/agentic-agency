"use client";

import { useState } from "react";
import { BlogCard } from "./blog-card";
import type { BlogPostMetadata } from "@/lib/mdx";

const categories = ["Tous", "Process", "Avis", "Tests"];

interface BlogListProps {
  posts: BlogPostMetadata[];
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredPosts =
    activeCategory === "Tous"
      ? posts
      : posts.filter((post) => post.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <div className="mt-16 flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#1e3a5f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

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
    </>
  );
}
