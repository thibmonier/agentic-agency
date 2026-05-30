import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies | Agentic Agency",
  description: "Politique d'utilisation des cookies sur le site Agentic Agency.",
  openGraph: {
    title: "Politique de cookies | Agentic Agency",
    description: "Politique d'utilisation des cookies sur le site Agentic Agency.",
  },
};

export default function CookiesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#1e3a5f] sm:text-5xl">
            Politique de cookies
          </h1>

          <div className="mt-10 space-y-8 text-gray-600">
            {/* Introduction */}
            <section>
              <p>
                Ce site utilise des cookies pour améliorer votre expérience de navigation et
                analyser l&apos;utilisation du site.
              </p>
            </section>

            {/* Cookies essentiels */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Cookies essentiels</h2>
              <p>
                Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être
                désactivés :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Cookies de session (authentification si applicable)</li>
                <li>Cookies de préférences utilisateur (langue, thème)</li>
                <li>Cookies de sécurité (protection CSRF)</li>
              </ul>
            </section>

            {/* Cookies optionnels */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Cookies analytics (optionnels)
              </h2>
              <p>
                Ces cookies nous aident à comprendre comment les visiteurs utilisent le site. Ils
                collectent des informations anonymes telles que :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Pages visitées</li>
                <li>Temps passé sur le site</li>
                <li>Type d&apos;appareil utilisé</li>
                <li>Source de trafic</li>
              </ul>
              <p className="mt-4">
                Ces cookies nécessitent votre consentement et peuvent être désactivés à tout moment.
              </p>
            </section>

            {/* Durées */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">Durée de conservation</h2>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Cookies de session : jusqu&apos;à la fermeture du navigateur</li>
                <li>Cookies de préférences : 12 mois</li>
                <li>Cookies analytics : 24 mois</li>
              </ul>
            </section>

            {/* Comment désactiver */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-4">
                Comment gérer vos cookies
              </h2>
              <p>Vous pouvez gérer ou désactiver les cookies de plusieurs façons :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Via votre navigateur :</strong> La plupart des navigateurs vous permettent
                  de refuser ou supprimer les cookies via les paramètres.
                </li>
                <li>
                  <strong>Via notre bandeau cookies :</strong> Lors de votre première visite, vous
                  pouvez choisir d&apos;accepter ou refuser les cookies non essentiels.
                </li>
                <li>
                  <strong>En nous contactant :</strong> Pour toute question, écrivez-nous à{" "}
                  <a
                    href="mailto:contact@agentic-agency.fr"
                    className="text-[#1e3a5f] hover:underline"
                  >
                    contact@agentic-agency.fr
                  </a>
                </li>
              </ul>
              <p className="mt-4">
                <strong>Note :</strong> La désactivation de certains cookies peut affecter le
                fonctionnement du site.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
