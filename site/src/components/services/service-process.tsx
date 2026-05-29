interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: ProcessStep[];
}

export function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            {title}
          </h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-6 flex items-center px-12">
              <div className="h-0.5 w-full bg-[#1e3a5f]/20" />
            </div>

            {/* Steps */}
            <div className="relative flex items-start justify-between">
              {steps.map((step) => (
                <div key={step.number} className="flex w-1/5 flex-col items-center">
                  {/* Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e3a5f] text-white font-bold">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold text-[#1e3a5f]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="mt-16 lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1e3a5f]/20" />

            {/* Steps */}
            <div className="relative space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-x-6">
                  {/* Circle */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-white font-bold">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-[#1e3a5f]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
