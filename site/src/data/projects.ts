export interface Project {
  title: string;
  sector: string;
  impact: string;
  technologies: string[];
  service: string;
}

export const projects: Project[] = [
  {
    title: "Plateforme logistique temps réel",
    sector: "Pharmacie",
    impact: "Réduction de 40% des délais de livraison",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    service: "Application métier",
  },
  {
    title: "Refonte e-commerce B2B",
    sector: "Agroalimentaire",
    impact: "Augmentation de 60% du taux de conversion",
    technologies: ["Symfony", "API Platform", "React", "Tailwind CSS"],
    service: "Développement web",
  },
  {
    title: "Application mobile de suivi terrain",
    sector: "Industrie",
    impact: "Déploiement 3x plus rapide des mises à jour",
    technologies: ["Flutter", "Dart", "Firebase", "CI/CD"],
    service: "Application mobile",
  },
  {
    title: "Transformation Agile DSI",
    sector: "Fintech",
    impact: "Vélocité équipe multipliée par 2 en 6 mois",
    technologies: ["Scrum", "Kanban", "CI/CD", "TDD"],
    service: "Conseil",
  },
];
