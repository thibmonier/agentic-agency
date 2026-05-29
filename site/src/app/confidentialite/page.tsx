import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Agentic Agency",
  description:
    "Politique de confidentialité et protection des données personnelles de Agentic Agency.",
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            Politique de confidentialité
          </h1>

          <div className="mt-10 space-y-8 text-gray-600">
            {/* Responsable */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Responsable du traitement
              </h2>
              <p>
                Agentic Agency est le responsable du traitement de vos données personnelles
                collectées via ce site web.
              </p>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Finalités du traitement
              </h2>
              <p>
                Nous collectons et traitons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Traitement des demandes de contact via le formulaire</li>
                <li>Amélioration de l&apos;expérience utilisateur (analytics)</li>
              </ul>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Données collectées</h2>
              <p>Les données personnelles que nous collectons incluent :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Entreprise</li>
                <li>Message de contact</li>
                <li>Données de navigation (pages visitées, durée, appareil)</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Base légale</h2>
              <p>
                Le traitement de vos données est fondé sur votre consentement (formulaire de
                contact) et notre intérêt légitime (analytics pour améliorer le site).
              </p>
            </section>

            {/* Durées de conservation */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Durées de conservation</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Données du formulaire de contact : 12 mois</li>
                <li>Données analytics : 24 mois</li>
              </ul>
            </section>

            {/* Droits RGPD */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous
                disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l&apos;effacement de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit de limitation du traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à l&apos;adresse :{" "}
                <a
                  href="mailto:contact@agentic-agency.fr"
                  className="text-[#1e3a5f] hover:underline"
                >
                  contact@agentic-agency.fr
                </a>
              </p>
            </section>

            {/* Contact DPO */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Contact du Délégué à la Protection des Données
              </h2>
              <p>
                Pour toute question relative à la protection de vos données personnelles, vous
                pouvez nous contacter à :{" "}
                <a
                  href="mailto:contact@agentic-agency.fr"
                  className="text-[#1e3a5f] hover:underline"
                >
                  contact@agentic-agency.fr
                </a>
              </p>
            </section>

            {/* Transferts hors UE */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Transferts de données hors UE
              </h2>
              <p>
                Certains de nos prestataires (hébergement, analytics) peuvent être situés hors de
                l&apos;Union Européenne. Dans ce cas, nous nous assurons que des garanties
                appropriées sont mises en place conformément au RGPD.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
