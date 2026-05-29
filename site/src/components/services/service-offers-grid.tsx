interface ServiceOffer {
  title: string;
  description: string;
  features: string[];
}

interface ServiceOffersGridProps {
  offers: ServiceOffer[];
}

export function ServiceOffersGrid({ offers }: ServiceOffersGridProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Nos solutions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des offres adaptées à chaque besoin
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-gray-50 p-8 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#1e3a5f]">{offer.title}</h3>
              <p className="mt-4 text-gray-600 leading-7">{offer.description}</p>

              <ul className="mt-8 space-y-3 flex-1">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-[#4a7bb7]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
