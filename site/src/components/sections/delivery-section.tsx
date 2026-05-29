import Link from "next/link";

export function DeliverySection() {
  return (
    <section id="delivery" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content - Left side */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              Le delivery moderne comme avantage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nous pratiquons l&apos;agilité au quotidien : cycles courts, intégration continue et
              feedback rapide. Chaque sprint apporte de la valeur mesurable à votre produit.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tests automatisés, revues de code systématiques et démos de sprint régulières
              garantissent la qualité et la transparence tout au long du développement.
            </p>
            <div className="mt-8">
              <Link
                href="/blog"
                className="text-lg font-semibold text-[#1e3a5f] hover:text-[#4a7bb7]"
              >
                Lire nos retours d&apos;expérience →
              </Link>
            </div>
          </div>

          {/* Visual - Right side */}
          <div className="relative">
            <div className="rounded-2xl bg-gray-50 p-8 lg:p-12">
              <div className="space-y-8">
                {/* Sprint */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1e3a5f] text-white font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f]">Sprint</h3>
                    <p className="text-sm text-gray-600">Développement itératif 2 semaines</p>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="ml-6 border-l-2 border-[#1e3a5f] h-8 opacity-30"></div>

                {/* Review */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4a7bb7] text-white font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f]">Review</h3>
                    <p className="text-sm text-gray-600">Démo et validation avec le métier</p>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="ml-6 border-l-2 border-[#1e3a5f] h-8 opacity-30"></div>

                {/* Deploy */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6b9bd6] text-white font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f]">Deploy</h3>
                    <p className="text-sm text-gray-600">Livraison automatisée et continue</p>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="ml-6 border-l-2 border-[#1e3a5f] h-8 opacity-30"></div>

                {/* Monitor */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#8fb8e8] text-white font-bold text-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f]">Monitor</h3>
                    <p className="text-sm text-gray-600">Surveillance et amélioration continue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
