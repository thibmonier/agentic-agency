import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { appsMetierData } from "@/data/services/applications-metier";

export const metadata: Metadata = {
  title: appsMetierData.metaTitle,
  description: appsMetierData.metaDescription,
  openGraph: {
    title: appsMetierData.metaTitle,
    description: appsMetierData.metaDescription,
  },
};

export default function ApplicationsMetierPage() {
  const breadcrumbItems = [{ name: "Accueil", href: "/" }, { name: appsMetierData.title }];

  return (
    <>
      <ServicePageTemplate data={appsMetierData} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
    </>
  );
}
