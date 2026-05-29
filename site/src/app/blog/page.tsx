import { getAllPosts } from "@/lib/mdx";
import { BlogList } from "@/components/blog/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Agentic Agency",
  description:
    "Découvrez nos articles sur le delivery moderne, les bonnes pratiques de développement et nos retours d'expérience.",
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            Notre Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez nos articles sur le delivery moderne et les bonnes
            pratiques de développement
          </p>
        </div>
        <BlogList posts={allPosts} />
      </div>
    </div>
  );
}
