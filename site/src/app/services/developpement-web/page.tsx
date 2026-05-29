import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { devWebData } from "@/data/services/developpement-web";

export const metadata: Metadata = {
  title: devWebData.metaTitle,
  description: devWebData.metaDescription,
};

export default function DeveloppementWebPage() {
  return <ServicePageTemplate data={devWebData} />;
}
