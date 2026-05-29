import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import Link from "next/link";
import { notFound } from "next/navigation";

const CATEGORIES: Record<string, { title: string; description: string; intro: string }> = {
  avis: {
    title: "Avis",
    description:
      "Retours d'expérience sur les outils, frameworks et services du marché. Analyses techniques sans concession.",
    intro:
      "Retours d'expérience sur les outils, frameworks et services que nous utilisons au quotidien. Analyses techniques, comparatifs et recommandations sans concession.",
  },
  tests: {
    title: "Tests",
    description:
      "Stratégies de test, TDD, couverture et qualité logicielle. Bonnes pratiques et retours terrain.",
    intro:
      "Stratégies de test, TDD, couverture et qualité logicielle. Comment écrire des tests utiles, maintenir la confiance dans le code et livrer sereinement.",
  },
  process: {
    title: "Process",
    description:
      "Méthodologies agiles, organisation d'équipe et livraison continue. Du stand-up au déploiement.",
    intro:
      "Méthodologies agiles, organisation d'équipe et livraison continue. Comment structurer le travail, les rituels et les outils pour livrer plus souvent et mieux.",
  },
};

const validCategories = Object.keys(CATEGORIES);

interface CategoryPageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return validCategories.map((name) => ({ name }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { name } = await params;
  const cat = CATEGORIES[name];
  if (!cat) return {};
  return {
    title: `${cat.title} | Blog Agentic Agency`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = await params;

  if (!validCategories.includes(name)) {
    notFound();
  }

  const cat = CATEGORIES[name];
  const posts = await getPostsByCategory(name);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            {cat.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">{cat.intro}</p>
        </div>

        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          <Link
            href="/blog"
            className="rounded-full px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Tous
          </Link>
          {validCategories.map((c) => (
            <Link
              key={c}
              href={`/blog/category/${c}`}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                c === name
                  ? "bg-[#1e3a5f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {CATEGORIES[c].title}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600">Aucun article dans cette catégorie.</p>
            <Link href="/blog" className="mt-4 inline-block text-[#4a7bb7] hover:underline">
              Voir tous les articles
            </Link>
          </div>
        ) : (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
