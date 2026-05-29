export type ApproachStep = {
  number: number;
  title: string;
  description: string;
};

export const approachSteps: ApproachStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "Cadrage du besoin, identification des personas et cartographie des processus métier.",
  },
  {
    number: 2,
    title: "Conception",
    description: "Wireframes, architecture technique et spécifications fonctionnelles détaillées.",
  },
  {
    number: 3,
    title: "Développement itératif",
    description: "Sprints de 2 semaines avec démos régulières. Feedback continu et ajustements.",
  },
  {
    number: 4,
    title: "Recette",
    description: "Tests d'acceptation, formation utilisateurs et documentation complète.",
  },
  {
    number: 5,
    title: "Transfert",
    description: "Mise en production, monitoring et transfert de compétences à votre équipe.",
  },
];
