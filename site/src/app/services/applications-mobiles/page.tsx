import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { appsMobilesData } from "@/data/services/applications-mobiles";

export const metadata: Metadata = {
  title: appsMobilesData.metaTitle,
  description: appsMobilesData.metaDescription,
  openGraph: {
    title: appsMobilesData.metaTitle,
    description: appsMobilesData.metaDescription,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(appsMobilesData.title)}&type=service`,
        width: 1200,
        height: 627,
      },
    ],
  },
};

export default function ApplicationsMobilesPage() {
  const breadcrumbItems = [{ name: "Accueil", href: "/" }, { name: appsMobilesData.title }];

  return (
    <>
      <ServicePageTemplate data={appsMobilesData} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
    </>
  );
}
