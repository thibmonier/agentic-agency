interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  faq: FaqItem[];
}

export function ServiceFaq({ faq }: ServiceFaqProps) {
  // JSON-LD schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-6">
            {faq.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-gray-50 p-6 transition-all hover:bg-gray-100"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#1e3a5f] list-none">
                  <span>{item.question}</span>
                  <svg
                    className="h-5 w-5 flex-none transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="mt-4 text-gray-700 leading-7">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
