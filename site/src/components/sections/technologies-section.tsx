import { technologies } from "@/data/technologies";

const categoryColors = {
  backend: "bg-[#1e3a5f] text-white",
  frontend: "bg-blue-400 text-white",
  mobile: "bg-emerald-500 text-white",
  other: "bg-gray-500 text-white",
} as const;

export function TechnologiesSection() {
  return (
    <section id="technologies" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Notre expertise technique
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            11 stacks maîtrisées, versions à jour
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${categoryColors[tech.category]}`}
              >
                {tech.name.charAt(0)}
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-[#1e3a5f]">
                  {tech.name}
                </div>
                <div className="mt-1 text-xs text-gray-500">v{tech.version}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
