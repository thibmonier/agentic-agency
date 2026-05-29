import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { conseilData } from "@/data/services/conseil";

export const metadata: Metadata = {
  title: conseilData.metaTitle,
  description: conseilData.metaDescription,
};

export default function ConseilPage() {
  return <ServicePageTemplate data={conseilData} />;
}
