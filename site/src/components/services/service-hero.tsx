import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  slug: string;
}

export function ServiceHero({ title, subtitle, ctaText, slug }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href={`/contact?sujet=${slug}`}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
