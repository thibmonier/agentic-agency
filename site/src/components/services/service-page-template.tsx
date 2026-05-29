import Link from "next/link";
import type { ServicePageData } from "@/data/services/types";
import { ServiceHero } from "./service-hero";
import { ServiceProblems } from "./service-problems";
import { ServiceOffersGrid } from "./service-offers-grid";
import { ServiceProcess } from "./service-process";
import { ServiceFaq } from "./service-faq";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <>
      <ServiceHero {...data.hero} slug={data.slug} />
      <ServiceProblems {...data.problems} />
      <ServiceOffersGrid offers={data.offers} />
      <ServiceProcess {...data.process} />
      <ServiceFaq faq={data.faq} />

      {/* CTA Banner */}
      <section className="bg-[#1e3a5f] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à lancer votre projet ?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Discutons de vos besoins et construisons ensemble la solution adaptée.
            </p>
            <div className="mt-10">
              <Link
                href={`/contact?sujet=${data.slug}`}
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#1e3a5f] transition-colors hover:bg-gray-100"
              >
                Réserver un échange
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
