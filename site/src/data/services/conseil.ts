import type { ServicePageData } from "./types";

export const conseilData: ServicePageData = {
  slug: "conseil",
  title: "Conseil & accompagnement",
  description:
    "Conseil IT et accompagnement dans votre transformation Agile pour structurer vos équipes et améliorer vos pratiques.",
  metaTitle: "Conseil IT & transformation Agile | Agentic Agency",
  metaDescription:
    "Conseil IT et accompagnement transformation Agile. Audit technique, structuration d'équipes, formation et coaching pour améliorer vos pratiques de développement.",
  hero: {
    title: "Conseil IT & transformation Agile",
    subtitle:
      "Accompagnement stratégique pour structurer vos équipes de développement, améliorer vos pratiques et accélérer votre transformation Agile.",
    ctaText: "Discuter de ma transformation",
  },
  problems: {
    title: "Vous faites face à ces défis ?",
    items: [
      {
        title: "Équipes en silos",
        description:
          "Vos équipes techniques ne communiquent pas. Les développeurs, les QA et les ops travaillent chacun de leur côté, ce qui génère des frictions et ralentit les livraisons.",
      },
      {
        title: "Absence de culture qualité",
        description:
          "Pas de tests automatisés, pas de code review, pas de CI/CD. La dette technique s'accumule et chaque livraison génère des régressions.",
      },
      {
        title: "Turnover élevé",
        description:
          "Vos développeurs partent régulièrement. Le manque de process, de documentation et de vision technique rend le projet difficile à maintenir.",
      },
      {
        title: "Projets en retard chronique",
        description:
          "Vos projets dépassent systématiquement les deadlines. Les estimations sont erronées et vous n'avez aucune visibilité sur l'avancement réel.",
      },
    ],
  },
  offers: [
    {
      title: "Audit & diagnostic",
      description:
        "Évaluation complète de votre organisation technique, de vos pratiques et de votre code pour identifier les points de friction et les axes d'amélioration.",
      features: [
        "Audit de code et dette technique",
        "Analyse des processus de développement",
        "Évaluation de la maturité Agile",
        "Identification des quick-wins",
        "Roadmap de transformation priorisée",
      ],
    },
    {
      title: "Structuration équipes IT",
      description:
        "Aide à la construction et à l'organisation de vos équipes de développement pour gagner en efficacité et en autonomie.",
      features: [
        "Définition des rôles et responsabilités",
        "Mise en place de squads cross-fonctionnelles",
        "Organisation Agile (Scrum, Kanban)",
        "Recrutement et onboarding",
        "KPIs et mesure de performance",
      ],
    },
    {
      title: "Formation & coaching",
      description:
        "Montée en compétences de vos équipes sur les pratiques modernes de développement logiciel et les méthodologies Agiles.",
      features: [
        "Formation TDD, BDD, pair programming",
        "Ateliers CI/CD et DevOps",
        "Coaching Scrum Master et Product Owner",
        "Code review et best practices",
        "Architecture logicielle (DDD, Clean Architecture)",
      ],
    },
    {
      title: "Accompagnement transformation",
      description:
        "Accompagnement dans la durée pour piloter votre transformation Agile et ancrer les nouvelles pratiques dans votre organisation.",
      features: [
        "Coaching d'équipe embarqué",
        "Facilitation des cérémonies Agile",
        "Accompagnement du management",
        "Mise en place des outils (Jira, GitLab, etc.)",
        "Suivi des métriques et amélioration continue",
      ],
    },
  ],
  process: {
    title: "Notre processus d'accompagnement",
    steps: [
      {
        number: 1,
        title: "Audit initial",
        description:
          "Évaluation de votre organisation, de vos pratiques et de votre code pour identifier les points de friction et les opportunités d'amélioration.",
      },
      {
        number: 2,
        title: "Plan de transformation",
        description:
          "Construction d'une roadmap de transformation priorisée avec des objectifs mesurables et un plan d'action concret adapté à votre contexte.",
      },
      {
        number: 3,
        title: "Coaching & formation",
        description:
          "Montée en compétences de vos équipes à travers des formations, des ateliers pratiques et du coaching embarqué sur vos projets réels.",
      },
      {
        number: 4,
        title: "Déploiement progressif",
        description:
          "Mise en place progressive des nouvelles pratiques et des nouveaux outils avec accompagnement rapproché pour ancrer les changements.",
      },
      {
        number: 5,
        title: "Suivi & amélioration",
        description:
          "Mesure des résultats via des KPIs, rétrospectives régulières et ajustements pour garantir l'ancrage des pratiques dans la durée.",
      },
    ],
  },
  technologies: ["Scrum", "Kanban", "CI/CD", "TDD", "Git Flow", "SonarQube"],
  technologiesLabel: "Outils & pratiques",
  faq: [
    {
      question: "Combien de temps dure un accompagnement transformation Agile ?",
      answer:
        "Un accompagnement efficace se mesure en mois, pas en semaines. Une transformation Agile prend généralement 6 à 12 mois pour être ancrée. Nous commençons par une mission courte de 2-3 mois pour lancer la dynamique, puis nous poursuivons avec un accompagnement allégé pour garantir la pérennité des changements.",
    },
    {
      question: "Quel est le ROI d'une transformation Agile ?",
      answer:
        "Les organisations Agiles matures livrent 2 à 3 fois plus vite avec moins de bugs. Nous mesurons le ROI via plusieurs indicateurs : réduction du time-to-market, baisse du taux de défauts en production, amélioration de la satisfaction des équipes et réduction du turnover. Les gains se constatent généralement dès les 3 premiers mois.",
    },
    {
      question: "Travaillez-vous en remote ou sur site ?",
      answer:
        "Nous nous adaptons à votre organisation. Pour le coaching d'équipe, nous privilégions un format hybride : présence sur site 2-3 jours par semaine lors des premiers mois, puis suivi remote. Pour les formations et les audits, le remote fonctionne très bien. Nous définissons ensemble le format optimal.",
    },
    {
      question: "Combien de personnes peuvent être accompagnées ?",
      answer:
        "Nous accompagnons aussi bien des petites équipes de 5 personnes que des organisations de plusieurs dizaines de développeurs. Pour les grandes structures, nous formons des relais internes (Scrum Masters, tech leads) qui démultiplient ensuite l'accompagnement. Le format s'adapte à votre taille.",
    },
    {
      question: "Agile vs méthodes traditionnelles : comment choisir ?",
      answer:
        "L'Agile n'est pas une fin en soi. Nous vous accompagnons pour identifier les pratiques adaptées à votre contexte : Scrum pour les équipes produit, Kanban pour la maintenance, méthodes hybrides pour les projets sous contraintes réglementaires. L'objectif est de gagner en efficacité, pas de suivre un dogme.",
    },
  ],
};
