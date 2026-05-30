"use client";

import { motion } from "framer-motion";
import { testimonials, type Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  items?: Testimonial[];
}

export function TestimonialsSection({ items }: TestimonialsSectionProps = {}) {
  const data = items ?? testimonials;

  if (data.length < 3) {
    return null;
  }

  return (
    <section id="temoignages" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des résultats concrets pour des entreprises ambitieuses
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none md:pb-0">
            {data.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] flex-shrink-0 snap-center rounded-2xl bg-white p-8 shadow-sm md:min-w-0 md:flex-shrink"
              >
                <div className="font-serif text-5xl leading-none text-[#4a7bb7]/20">«</div>
                <p className="mt-4 italic text-gray-700">{testimonial.quote}</p>

                <div className="mt-6 border-t border-gray-100 pt-6">
                  <p className="font-semibold text-[#1e3a5f]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-[#1e3a5f]/5 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
