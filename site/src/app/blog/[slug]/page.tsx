import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MDXRemote } from "next-mdx-remote/rsc";
import { JsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ShareButton } from "@/components/blog/share-button";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${post.title} - Blog Agentic Agency`,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Agentic Agency",
    },
    publisher: {
      "@type": "Organization",
      name: "Agentic Agency",
      url: "https://agentic-agency.fr",
    },
    mainEntityOfPage: `https://agentic-agency.fr/blog/${slug}`,
  };

  const breadcrumbItems = [
    { name: "Accueil", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];

  return (
    <article className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center gap-x-4 text-sm mb-6">
            <time dateTime={post.date} className="text-gray-500">
              {new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl mb-6">
            {post.title}
          </h1>

          <p className="text-xl leading-8 text-gray-600 mb-6">{post.description}</p>

          <div className="flex items-center gap-x-4 text-sm border-t border-gray-200 pt-6">
            <span className="font-semibold text-gray-900">{post.author}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{Math.ceil(post.readingTime)} min de lecture</span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <ShareButton url={`https://agentic-agency.fr/blog/${slug}`} title={post.title} />
          </div>
        </header>

        <div className="prose prose-lg prose-gray max-w-none">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200 flex items-center justify-between">
          <Button asChild variant="ghost">
            <Link href="/blog">← Retour au blog</Link>
          </Button>
          <ShareButton url={`https://agentic-agency.fr/blog/${slug}`} title={post.title} />
        </div>
      </div>

      <JsonLd data={blogPostingSchema} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
    </article>
  );
}
