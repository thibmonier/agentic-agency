import { ContactForm } from "@/components/forms/contact-form";
import { ContactAlternatives } from "./contact-alternatives";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Décrivez votre besoin et nous vous répondons sous 24-48h ouvrées.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form - takes 3/5 */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Alternatives - takes 2/5 */}
          <div className="lg:col-span-2">
            <ContactAlternatives />
          </div>
        </div>
      </div>
    </section>
  );
}
