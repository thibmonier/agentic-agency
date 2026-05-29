export type Offer = {
  title: string;
  description: string;
  href: string;
};

export type OfferPillar = {
  title: string;
  description: string;
  offers: Offer[];
};

export const offerPillars: OfferPillar[] = [
  {
    title: "Développement web",
    description:
      "Sites vitrines, plateformes SaaS et portails métier avec les frameworks les plus robustes.",
    offers: [
      {
        title: "Site vitrine & corporate",
        description:
          "Un site performant, accessible et optimisé SEO qui reflète votre image de marque.",
        href: "/services/developpement-web",
      },
      {
        title: "Plateforme SaaS",
        description:
          "Architecture multi-tenant, scalable et sécurisée pour votre produit logiciel.",
        href: "/services/developpement-web",
      },
    ],
  },
  {
    title: "Applications métier",
    description:
      "Digitalisation de vos processus avec des applications sur mesure, robustes et évolutives.",
    offers: [
      {
        title: "Application sur mesure",
        description:
          "Un outil taillé pour vos processus, pas un template générique adapté à la marge.",
        href: "/services/applications-metier",
      },
      {
        title: "Évolution & dette technique",
        description:
          "Reprise d'applications existantes, refactoring progressif et modernisation de stack.",
        href: "/services/applications-metier",
      },
      {
        title: "Intégration SI & APIs",
        description: "Connexion fluide entre vos outils : ERP, CRM, facturation, logistique.",
        href: "/services/applications-metier",
      },
    ],
  },
  {
    title: "Applications mobiles",
    description: "Applications natives et cross-platform pour iOS et Android.",
    offers: [
      {
        title: "Application mobile native",
        description: "Performances optimales avec Flutter ou React Native pour iOS et Android.",
        href: "/services/applications-mobiles",
      },
      {
        title: "PWA & applications hybrides",
        description: "Une seule codebase, une expérience proche du natif sur tous les appareils.",
        href: "/services/applications-mobiles",
      },
    ],
  },
  {
    title: "Conseil & accompagnement",
    description: "Expertise technique pour structurer vos choix et accélérer vos équipes.",
    offers: [
      {
        title: "Audit & architecture",
        description:
          "Diagnostic de votre SI, recommandations d'architecture et feuille de route technique.",
        href: "/services/conseil",
      },
      {
        title: "Renfort d'équipe",
        description: "Développeurs seniors intégrés à votre équipe pour accélérer vos sprints.",
        href: "/services/conseil",
      },
    ],
  },
];
