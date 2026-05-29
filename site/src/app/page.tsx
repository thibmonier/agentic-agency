import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TrustSection } from "@/components/sections/trust-section";
import { DeliverySection } from "@/components/sections/delivery-section";
import { OffersSection } from "@/components/sections/offers";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { ValuesSection } from "@/components/sections/values-section";
import { ApproachTimeline } from "@/components/sections/approach-timeline";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustSection />
      <DeliverySection />
      <OffersSection />
      <CtaBanner />
      <TechnologiesSection />
      <ValuesSection />
      <ApproachTimeline />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
