import type { ServicePageData } from "./types";

export const appsMetierData: ServicePageData = {
  slug: "applications-metier",
  title: "Applications métier",
  description:
    "Applications métier sur mesure pour digitaliser vos processus et optimiser votre SI.",
  metaTitle: "Applications métier sur mesure | Agentic Agency",
  metaDescription:
    "Développement d'applications métier sur mesure avec Symfony, Laravel et API Platform. Solutions évolutives intégrées à votre SI pour optimiser vos processus.",
  hero: {
    title: "Applications métier sur mesure",
    subtitle:
      "Des solutions logicielles robustes et évolutives pour digitaliser vos processus métier et s'intégrer parfaitement à votre système d'information.",
    ctaText: "Décrire mon projet",
  },
  problems: {
    title: "Vous faites face à ces défis ?",
    items: [
      {
        title: "Dette technique accumulée",
        description:
          "Votre application métier est devenue difficile à maintenir. Chaque nouvelle évolution prend des semaines et génère des bugs en cascade.",
      },
      {
        title: "Système d'information obsolète",
        description:
          "Vos outils métier datent de plusieurs années, ne communiquent pas entre eux et freinent la productivité de vos équipes.",
      },
      {
        title: "Intégrations complexes",
        description:
          "Vous devez connecter de multiples systèmes : ERP, CRM, facturation, logistique. Les données ne circulent pas et les processus sont cassés.",
      },
      {
        title: "Problèmes de scalabilité",
        description:
          "Votre application ne suit plus la croissance de votre activité. Les performances se dégradent et les temps de réponse explosent.",
      },
    ],
  },
  offers: [
    {
      title: "Application sur mesure",
      description:
        "Développement d'une solution métier complète, adaptée à vos processus spécifiques et conçue pour évoluer avec votre entreprise.",
      features: [
        "Analyse des besoins et modélisation métier",
        "Architecture hexagonale et DDD",
        "Interface web responsive et intuitive",
        "API REST documentée",
        "Tests automatisés et CI/CD",
      ],
    },
    {
      title: "Évolution & dette technique",
      description:
        "Reprise et modernisation de votre application existante pour éliminer la dette technique et faciliter les évolutions futures.",
      features: [
        "Audit technique complet",
        "Refactoring progressif sans interruption",
        "Migration de stack si nécessaire",
        "Formation de vos équipes",
        "Documentation technique à jour",
      ],
    },
    {
      title: "Intégration SI & APIs",
      description:
        "Connexion fluide entre tous vos outils métier pour automatiser les flux de données et éliminer les saisies manuelles.",
      features: [
        "APIs REST & GraphQL robustes",
        "Connecteurs ERP, CRM, facturation",
        "Synchronisation temps réel ou batch",
        "Gestion des erreurs et retry automatique",
        "Monitoring et alerting",
      ],
    },
  ],
  process: {
    title: "Notre processus de développement",
    steps: [
      {
        number: 1,
        title: "Analyse métier",
        description:
          "Ateliers de découverte pour comprendre vos processus, identifier les points de friction et définir les gains attendus.",
      },
      {
        number: 2,
        title: "Conception technique",
        description:
          "Modélisation du domaine métier, architecture logicielle, choix des technologies et planification des sprints.",
      },
      {
        number: 3,
        title: "Développement itératif",
        description:
          "Sprints agiles de 2 semaines avec démonstrations régulières. Vous testez les fonctionnalités au fur et à mesure.",
      },
      {
        number: 4,
        title: "Intégration & tests",
        description:
          "Connexion avec vos systèmes existants, tests fonctionnels et de charge, validation utilisateur en conditions réelles.",
      },
      {
        number: 5,
        title: "Déploiement & accompagnement",
        description:
          "Mise en production progressive, formation des utilisateurs, documentation complète et support post-lancement.",
      },
    ],
  },
  technologies: ["Symfony", "API Platform", "PostgreSQL", "Docker", "Laravel", "PHP"],
  faq: [
    {
      question: "Quel est le coût d'une application métier sur mesure ?",
      answer:
        "Le budget dépend de la complexité de vos processus et du périmètre fonctionnel. Une application métier démarre généralement autour de 40 000 € pour un MVP fonctionnel. Les projets plus complexes avec intégrations multiples se situent entre 80 000 € et 200 000 €. Nous vous fournissons un chiffrage détaillé après l'atelier de cadrage.",
    },
    {
      question: "Quel est le délai pour développer une application métier ?",
      answer:
        "Un MVP avec les fonctionnalités essentielles peut être livré en 3 à 4 mois. Une application complète avec intégrations SI prend généralement 6 à 12 mois selon la complexité. Nous travaillons en sprints de 2 semaines pour que vous puissiez valider l'avancement régulièrement.",
    },
    {
      question: "Comment gérez-vous l'intégration avec notre SI existant ?",
      answer:
        "Nous commençons par un audit de votre écosystème technique pour identifier les systèmes à connecter (ERP, CRM, etc.). Nous développons ensuite des APIs robustes avec gestion d'erreurs, retry automatique et monitoring. Les données sont synchronisées en temps réel ou en batch selon vos besoins. Nous testons chaque intégration en conditions réelles avant la mise en production.",
    },
    {
      question: "Proposez-vous la maintenance après la livraison ?",
      answer:
        "Oui, nous proposons des contrats de TMA (Tierce Maintenance Applicative) incluant les correctifs, les évolutions mineures, le monitoring et le support technique. Nous pouvons également former vos équipes pour qu'elles prennent le relais en autonomie si vous avez des développeurs en interne.",
    },
    {
      question: "Comment gérez-vous les applications legacy à reprendre ?",
      answer:
        "Nous commençons par un audit technique complet pour évaluer la dette et les risques. Ensuite, nous appliquons une stratégie de refactoring progressif : nous ajoutons des tests, nous isolons les modules critiques et nous modernisons le code par couches sans casser l'existant. L'application continue de fonctionner pendant toute la migration.",
    },
  ],
};
