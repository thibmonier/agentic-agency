import { offerPillars } from "@/data/offers";
import { OfferPillar } from "./offer-pillar";

export function OffersSection() {
  return (
    <section id="offres" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Nos offres
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des solutions adaptées à chaque besoin, de la conception à la livraison
          </p>
        </div>
        <div className="mt-16 space-y-20">
          {offerPillars.map((pillar) => (
            <OfferPillar key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
