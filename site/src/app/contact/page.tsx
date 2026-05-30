import { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact | Agentic Agency",
  description: "Contactez Agentic Agency pour discuter de votre projet digital.",
  openGraph: {
    title: "Contact | Agentic Agency",
    description: "Contactez Agentic Agency pour discuter de votre projet digital.",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sujet?: string }>;
}) {
  const params = await searchParams;
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Décrivez votre projet et nous vous répondons sous 24-48h ouvrées.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <ContactForm defaultSubject={params.sujet} />
        </div>
      </div>
    </section>
  );
}
