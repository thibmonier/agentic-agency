import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { devWebData } from "@/data/services/developpement-web";

export const metadata: Metadata = {
  title: devWebData.metaTitle,
  description: devWebData.metaDescription,
  openGraph: {
    title: devWebData.metaTitle,
    description: devWebData.metaDescription,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(devWebData.title)}&type=service`,
        width: 1200,
        height: 627,
      },
    ],
  },
};

export default function DeveloppementWebPage() {
  const breadcrumbItems = [{ name: "Accueil", href: "/" }, { name: devWebData.title }];

  return (
    <>
      <ServicePageTemplate data={devWebData} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
    </>
  );
}
