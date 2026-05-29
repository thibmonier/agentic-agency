import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#1e3a5f]">
              Services
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/#offres"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Nos offres
                </Link>
              </li>
              <li>
                <Link
                  href="/#offres"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Développement web
                </Link>
              </li>
              <li>
                <Link
                  href="/#offres"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Applications métier
                </Link>
              </li>
              <li>
                <Link
                  href="/#offres"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Applications mobiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#1e3a5f]">
              Blog
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Tous les articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=process"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=avis"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Avis
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?category=tests"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#1e3a5f]">
              Légal
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#1e3a5f]">
              Contact
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/#contact"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  Nous contacter
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@agentic-agency.com"
                  className="text-sm leading-6 text-gray-600 hover:text-[#1e3a5f] transition-colors"
                >
                  contact@agentic-agency.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm leading-6 text-gray-600">
            &copy; {currentYear} Agentic Agency. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
