interface ServiceProblemsProps {
  title: string;
  items: Array<{ title: string; description: string }>;
}

export function ServiceProblems({ title, items }: ServiceProblemsProps) {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">{title}</h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e3a5f] text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f]">{item.title}</h3>
              </div>
              <p className="mt-4 text-gray-600 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
