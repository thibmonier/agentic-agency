import Link from "next/link";

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 3.75h-16.5A.75.75 0 0 0 3 4.5v15a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75v-15a.75.75 0 0 0-.75-.75zM9 9.75v7.5M9 7.5v.375M15 13.5v3.75m0-6.75c0-1.5-1.125-2.25-2.25-2.25S10.5 9 10.5 10.5"
      />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function ContactAlternatives() {
  return (
    <div className="space-y-6 rounded-2xl bg-gray-50 p-8">
      <h3 className="text-lg font-semibold text-[#1e3a5f]">Ou directement</h3>

      {/* Calendly/Cal.com booking */}
      <div className="flex items-start space-x-3">
        <CalendarIcon className="h-6 w-6 flex-shrink-0 text-[#1e3a5f]" />
        <div>
          <Link href="#" className="font-medium text-[#1e3a5f] hover:text-[#4a7bb7]">
            Réserver un créneau
          </Link>
          <p className="mt-1 text-sm text-gray-600">Discutons de votre projet en visio</p>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-start space-x-3">
        <LinkedInIcon className="h-6 w-6 flex-shrink-0 text-[#1e3a5f]" />
        <div>
          <Link
            href="https://linkedin.com/company/agentic-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1e3a5f] hover:text-[#4a7bb7]"
          >
            Nous suivre sur LinkedIn
          </Link>
          <p className="mt-1 text-sm text-gray-600">Actualités et conseils tech</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start space-x-3">
        <EmailIcon className="h-6 w-6 flex-shrink-0 text-[#1e3a5f]" />
        <div>
          <Link
            href="mailto:contact@agentic-agency.fr"
            className="font-medium text-[#1e3a5f] hover:text-[#4a7bb7]"
          >
            contact@agentic-agency.fr
          </Link>
          <p className="mt-1 text-sm text-gray-600">Pour toute question directe</p>
        </div>
      </div>

      {/* Response time */}
      <p className="mt-8 text-sm text-gray-500">Réponse sous 24-48h ouvrées</p>
    </div>
  );
}
