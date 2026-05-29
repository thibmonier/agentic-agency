import Link from "next/link";
import type { BlogPostMetadata } from "@/lib/mdx";

interface BlogCardProps {
  post: BlogPostMetadata;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex flex-col items-start justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date} className="text-gray-500">
          {new Date(post.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
          {post.category}
        </span>
      </div>
      <div className="group relative mt-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#1e3a5f]">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            {post.author}
          </p>
          <p className="text-gray-600">
            {Math.ceil(post.readingTime)} min de lecture
          </p>
        </div>
      </div>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
