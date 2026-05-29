import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { appsMobilesData } from "@/data/services/applications-mobiles";

export const metadata: Metadata = {
  title: appsMobilesData.metaTitle,
  description: appsMobilesData.metaDescription,
};

export default function ApplicationsMobilesPage() {
  return <ServicePageTemplate data={appsMobilesData} />;
}
