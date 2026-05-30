import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { conseilData } from "@/data/services/conseil";

export const metadata: Metadata = {
  title: conseilData.metaTitle,
  description: conseilData.metaDescription,
  openGraph: {
    title: conseilData.metaTitle,
    description: conseilData.metaDescription,
  },
};

export default function ConseilPage() {
  const breadcrumbItems = [{ name: "Accueil", href: "/" }, { name: conseilData.title }];

  return (
    <>
      <ServicePageTemplate data={conseilData} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
    </>
  );
}
