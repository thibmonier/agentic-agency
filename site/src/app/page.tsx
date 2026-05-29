import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TrustSection } from "@/components/sections/trust-section";
import { DeliverySection } from "@/components/sections/delivery-section";
import { OffersSection } from "@/components/sections/offers";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { ValuesSection } from "@/components/sections/values-section";
import { ApproachTimeline } from "@/components/sections/approach-timeline";

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

      {/* Section Contact (placeholder — Sprint 3, EPIC-004) */}
      <section id="contact" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              Contactez-nous
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              À venir : formulaire de contact pour échanger sur votre projet
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
