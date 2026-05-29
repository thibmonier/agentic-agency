export function Stats() {
  const stats = [
    { id: 1, name: "Stacks maîtrisées", value: "11" },
    { id: 2, name: "Code auditable", value: "100%" },
    { id: 3, name: "Années d'expérience", value: "+10" },
    { id: 4, name: "Délai de réponse", value: "24-48h" },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
              Des chiffres qui parlent
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Notre expertise au service de vos projets
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-50 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#1e3a5f]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
