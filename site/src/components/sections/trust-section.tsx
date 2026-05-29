import { trustItems } from "@/data/trust";

export function TrustSection() {
  return (
    <section id="confiance" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Des secteurs variés, une même exigence de qualité
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.sector}
                className="flex flex-col items-center rounded-xl bg-gray-50 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1e3a5f]/10 text-lg font-bold text-[#1e3a5f]">
                  {item.name.charAt(0)}
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1e3a5f]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
