import type { ServicePageData } from "./types";

export const appsMobilesData: ServicePageData = {
  slug: "applications-mobiles",
  title: "Applications mobiles",
  description:
    "Applications iOS et Android natives avec Flutter ou React Native pour un time-to-market optimal.",
  metaTitle: "Applications mobiles iOS & Android | Agentic Agency",
  metaDescription:
    "Développement d'applications mobiles iOS et Android avec Flutter et React Native. Solutions cross-platform performantes et expérience utilisateur native.",
  hero: {
    title: "Applications mobiles iOS & Android",
    subtitle:
      "Des applications mobiles performantes et évolutives, développées avec les technologies cross-platform modernes pour un déploiement rapide sur iOS et Android.",
    ctaText: "Discuter de mon app mobile",
  },
  problems: {
    title: "Vous faites face à ces défis ?",
    items: [
      {
        title: "Coût de développement double",
        description:
          "Développer nativement pour iOS et Android nécessite deux équipes et double le budget. Vous cherchez une alternative plus économique sans sacrifier la qualité.",
      },
      {
        title: "Maintenance complexe",
        description:
          "Votre application mobile existante est difficile à maintenir. Chaque correctif ou évolution nécessite des interventions séparées sur iOS et Android.",
      },
      {
        title: "Application obsolète",
        description:
          "Votre app mobile ne suit plus les standards actuels d'UX, les performances sont médiocres et les utilisateurs se plaignent de bugs récurrents.",
      },
      {
        title: "Time-to-market trop long",
        description:
          "Vous devez lancer rapidement votre MVP mobile pour tester le marché, mais les délais de développement natif sont trop longs et coûteux.",
      },
    ],
  },
  offers: [
    {
      title: "MVP mobile",
      description:
        "Développement rapide d'un MVP fonctionnel pour valider votre concept auprès des utilisateurs et itérer selon les retours terrain.",
      features: [
        "Conception UX optimisée mobile",
        "Fonctionnalités essentielles priorisées",
        "Déploiement sur App Store et Play Store",
        "Analytics et tracking utilisateur",
        "Itérations rapides selon les retours",
      ],
    },
    {
      title: "Application native cross-platform",
      description:
        "Une application complète développée avec Flutter ou React Native, offrant une expérience native sur iOS et Android avec une seule codebase.",
      features: [
        "UI/UX native sur iOS et Android",
        "Performance optimale et offline-first",
        "Intégration des APIs natives (caméra, GPS, etc.)",
        "Push notifications et deep linking",
        "Tests automatisés sur les deux plateformes",
      ],
    },
    {
      title: "Évolution app existante",
      description:
        "Reprise et modernisation de votre application mobile existante pour améliorer les performances, corriger les bugs et ajouter de nouvelles fonctionnalités.",
      features: [
        "Audit technique de l'existant",
        "Migration vers Flutter ou React Native si pertinent",
        "Refactoring et optimisation des performances",
        "Ajout de nouvelles fonctionnalités",
        "Formation de vos équipes",
      ],
    },
  ],
  process: {
    title: "Notre processus de développement",
    steps: [
      {
        number: 1,
        title: "Découverte & UX",
        description:
          "Ateliers de cadrage pour définir les parcours utilisateur, les fonctionnalités clés et concevoir les maquettes UX optimisées mobile.",
      },
      {
        number: 2,
        title: "Choix technologique",
        description:
          "Nous choisissons ensemble la stack (Flutter ou React Native) en fonction de vos contraintes techniques, de votre écosystème et de vos objectifs.",
      },
      {
        number: 3,
        title: "Développement itératif",
        description:
          "Sprints agiles de 2 semaines avec livraisons régulières sur TestFlight (iOS) et Firebase App Distribution (Android) pour que vous puissiez tester.",
      },
      {
        number: 4,
        title: "Tests & optimisation",
        description:
          "Tests fonctionnels sur devices réels (iOS et Android), optimisation des performances, accessibilité et validation sur différentes tailles d'écran.",
      },
      {
        number: 5,
        title: "Déploiement stores",
        description:
          "Soumission sur App Store et Play Store, gestion du processus de validation, formation utilisateurs et support post-lancement.",
      },
    ],
  },
  technologies: ["Flutter", "React Native", "Dart", "TypeScript", "Firebase"],
  faq: [
    {
      question: "Flutter ou React Native : comment choisir ?",
      answer:
        "Flutter excelle pour les interfaces complexes et les animations fluides. React Native est idéal si vous avez déjà une équipe JavaScript/TypeScript. Les deux offrent d'excellentes performances. Nous vous accompagnons dans ce choix selon votre écosystème technique, vos compétences internes et vos objectifs de time-to-market.",
    },
    {
      question: "Quel est le coût d'une application mobile ?",
      answer:
        "Un MVP mobile simple démarre autour de 20 000 €. Une application complète avec backend, authentification et fonctionnalités avancées se situe entre 40 000 € et 100 000 € selon la complexité. L'approche cross-platform réduit les coûts de 30 à 50 % par rapport au développement natif double.",
    },
    {
      question: "Gérez-vous la publication sur les stores ?",
      answer:
        "Oui, nous gérons l'intégralité du processus : création des comptes développeur (Apple Developer, Google Play Console), préparation des assets (icônes, screenshots), rédaction des descriptions et soumission. Nous suivons les retours des équipes de validation et gérons les éventuelles corrections nécessaires.",
    },
    {
      question: "Quel est le délai pour développer une app mobile ?",
      answer:
        "Un MVP fonctionnel peut être livré en 6 à 8 semaines. Une application complète prend généralement 3 à 5 mois selon les fonctionnalités. Nous travaillons en sprints de 2 semaines avec des livraisons régulières sur TestFlight et Firebase pour que vous puissiez tester sur device dès le début.",
    },
    {
      question: "L'application fonctionne-t-elle hors ligne ?",
      answer:
        "Oui, nous développons des stratégies offline-first quand c'est pertinent. Les données sont stockées localement et synchronisées automatiquement quand la connexion revient. C'est particulièrement utile pour les apps terrain ou dans les zones à faible connectivité. Nous définissons ensemble le niveau d'offline nécessaire.",
    },
  ],
};
