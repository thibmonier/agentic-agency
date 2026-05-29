import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Agentic Agency",
  description:
    "Mentions légales de Agentic Agency, agence de développement web et applications métier.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            Mentions légales
          </h1>

          <div className="mt-10 space-y-8 text-gray-600">
            {/* Éditeur */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Éditeur du site</h2>
              <p>
                <strong>Raison sociale :</strong> Agentic Agency
                <br />
                <strong>SIRET :</strong> À compléter
                <br />
                <strong>Adresse :</strong> À compléter
                <br />
                <strong>Email :</strong>{" "}
                <a
                  href="mailto:contact@agentic-agency.fr"
                  className="text-[#1e3a5f] hover:underline"
                >
                  contact@agentic-agency.fr
                </a>
              </p>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site est le représentant légal de Agentic Agency.
              </p>
            </section>

            {/* Hébergeur */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Hébergement</h2>
              <p>
                <strong>Hébergeur :</strong> Cloudflare, Inc.
                <br />
                <strong>Siège social :</strong> 101 Townsend St, San Francisco, CA 94107, USA
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Contact</h2>
              <p>
                Pour toute question concernant le site, vous pouvez nous contacter à l&apos;adresse
                :{" "}
                <a
                  href="mailto:contact@agentic-agency.fr"
                  className="text-[#1e3a5f] hover:underline"
                >
                  contact@agentic-agency.fr
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
