import Link from "next/link";
import { Button } from "@/components/ui/button";
import { values } from "@/data/values";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2.25c-1.5 0-3 .75-4.5 1.5-1.5.75-3 1.5-4.5 1.5v6c0 4.5 3 8.25 9 11.25 6-3 9-6.75 9-11.25v-6c-1.5 0-3-.75-4.5-1.5-1.5-.75-3-1.5-4.5-1.5z"
      />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-5" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 9.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM20.25 18a5.25 5.25 0 00-7.5-4.74"
      />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

const iconMap = {
  shield: ShieldIcon,
  "check-circle": CheckCircleIcon,
  users: UsersIcon,
  target: TargetIcon,
};

export function ValuesSection() {
  return (
    <section id="valeurs" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1e3a5f] sm:text-4xl">
            Nos valeurs
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Les principes qui guident chaque projet
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div key={value.title} className="rounded-2xl bg-gray-50 p-8">
                  <IconComponent className="h-10 w-10 text-[#1e3a5f]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#1e3a5f]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Parler de votre projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
