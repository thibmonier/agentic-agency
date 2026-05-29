export type Value = {
  title: string;
  description: string;
  icon: string;
};

export const values: Value[] = [
  {
    title: "Fiabilité",
    description:
      "Code maintenable, mises en production maîtrisées. Chaque livraison est testée, documentée et réversible.",
    icon: "shield",
  },
  {
    title: "Rigueur",
    description:
      "Tests automatisés, revues de code systématiques, critères d'acceptation vérifiables. Pas de raccourcis.",
    icon: "check-circle",
  },
  {
    title: "Partenariat",
    description:
      "Extension de votre équipe, pas une boîte noire. Transparence totale sur l'avancement et les décisions.",
    icon: "users",
  },
  {
    title: "Pragmatisme",
    description:
      "Pas de sur-ingénierie. La valeur métier guide chaque choix technique. Le bon outil pour le bon problème.",
    icon: "target",
  },
];
