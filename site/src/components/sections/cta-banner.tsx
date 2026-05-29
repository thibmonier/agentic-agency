import Link from "next/link";

export function CtaBanner() {
  return (
    <section id="cta-milieu" className="bg-[#1e3a5f] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Prêt à accélérer votre produit ?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Échangeons sur votre projet et vos enjeux techniques.
          </p>
          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-lg font-semibold text-[#1e3a5f] transition-colors hover:bg-gray-100"
            >
              Réserver un échange
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
