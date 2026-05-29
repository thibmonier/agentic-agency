import Link from "next/link";
import type { Offer } from "@/data/offers";

interface OfferCardProps {
  offer: Offer;
}

export function OfferCard({ offer }: OfferCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md">
      <h4 className="text-xl font-semibold text-[#1e3a5f]">{offer.title}</h4>
      <p className="mt-4 flex-1 text-gray-600 line-clamp-3">{offer.description}</p>
      <Link
        href={offer.href}
        className="mt-6 inline-flex items-center text-[#1e3a5f] font-medium hover:text-[#152e4d] transition-colors"
      >
        En savoir plus
        <svg
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
