import type { OfferPillar as OfferPillarType } from "@/data/offers";
import { OfferCard } from "./offer-card";

interface OfferPillarProps {
  pillar: OfferPillarType;
}

export function OfferPillar({ pillar }: OfferPillarProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#1e3a5f]">{pillar.title}</h3>
        <p className="mt-2 text-lg text-gray-600">{pillar.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillar.offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
    </div>
  );
}
