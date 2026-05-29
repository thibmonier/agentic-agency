import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import Link from "next/link";

export async function BlogPreviewSection() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Notes de terrain
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Retours d&apos;expérience et réflexions techniques
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="text-[#1e3a5f] hover:text-[#4a7bb7] font-semibold">
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
