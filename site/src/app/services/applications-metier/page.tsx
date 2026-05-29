import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { appsMetierData } from "@/data/services/applications-metier";

export const metadata: Metadata = {
  title: appsMetierData.metaTitle,
  description: appsMetierData.metaDescription,
};

export default function ApplicationsMetierPage() {
  return <ServicePageTemplate data={appsMetierData} />;
}
