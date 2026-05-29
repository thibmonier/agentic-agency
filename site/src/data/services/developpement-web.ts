import type { ServicePageData } from "./types";

export const devWebData: ServicePageData = {
  slug: "developpement-web",
  title: "Développement web",
  description:
    "Sites vitrines, plateformes SaaS et portails métier avec les frameworks les plus robustes.",
  metaTitle: "Développement web sur mesure | Agentic Agency",
  metaDescription:
    "Développement de sites vitrines, plateformes SaaS et applications web sur mesure avec Symfony, Laravel, React et Next.js. Solutions performantes et évolutives.",
  hero: {
    title: "Développement web sur mesure",
    subtitle:
      "Des solutions web performantes, évolutives et adaptées à vos besoins métier. De la vitrine corporate à la plateforme SaaS complexe.",
    ctaText: "Discuter de votre projet",
  },
  problems: {
    title: "Vous faites face à ces défis ?",
    items: [
      {
        title: "Site web obsolète",
        description:
          "Votre site actuel ne reflète plus votre image, les performances sont médiocres et le code est difficile à maintenir.",
      },
      {
        title: "Refonte complexe",
        description:
          "Vous devez migrer vers une stack moderne sans casser l&apos;existant ni perdre vos données et votre référencement.",
      },
      {
        title: "Performance insuffisante",
        description:
          "Temps de chargement lents, mauvais score SEO, expérience utilisateur dégradée qui impacte vos conversions.",
      },
      {
        title: "Intégrations multiples",
        description:
          "Vous devez connecter votre site à des systèmes tiers : CRM, ERP, paiement, logistique, marketing automation.",
      },
    ],
  },
  offers: [
    {
      title: "Sites vitrines & corporate",
      description:
        "Un site performant, accessible et optimisé SEO qui reflète votre image de marque et convertit vos visiteurs.",
      features: [
        "Design moderne et responsive",
        "Optimisation SEO technique et contenu",
        "Performance et accessibilité (WCAG)",
        "CMS headless ou intégré (Strapi, Payload, WordPress)",
        "Analytics et tracking",
      ],
    },
    {
      title: "Plateformes métier & SaaS",
      description:
        "Des applications web complexes, robustes et scalables pour vos produits logiciels et outils internes.",
      features: [
        "Architecture multi-tenant",
        "Authentification & autorisation avancée",
        "API REST ou GraphQL",
        "Tableaux de bord et reporting",
        "Intégrations tierces (paiement, email, etc.)",
      ],
    },
    {
      title: "Refonte & modernisation",
      description:
        "Reprise de projets existants, migration de stack technique et refactoring progressif pour éliminer la dette.",
      features: [
        "Audit technique complet",
        "Migration de données sécurisée",
        "Refactoring incrémental",
        "Formation de vos équipes",
        "Documentation technique",
      ],
    },
    {
      title: "Intégrations & APIs",
      description:
        "Connexion fluide entre vos outils métier : ERP, CRM, facturation, logistique, marketing automation.",
      features: [
        "API REST & GraphQL",
        "Webhooks et événements temps réel",
        "Authentification OAuth2 / JWT",
        "Documentation OpenAPI",
        "Monitoring et logs centralisés",
      ],
    },
  ],
  process: {
    title: "Notre processus de développement",
    steps: [
      {
        number: 1,
        title: "Découverte",
        description:
          "Atelier de cadrage pour comprendre vos objectifs métier, vos contraintes techniques et définir le scope du projet.",
      },
      {
        number: 2,
        title: "Conception",
        description:
          "Maquettes UI/UX, architecture technique, choix de stack et planification des sprints avec votre équipe.",
      },
      {
        number: 3,
        title: "Développement",
        description:
          "Sprints agiles de 2 semaines, code review systématique, tests automatisés et livraisons continues.",
      },
      {
        number: 4,
        title: "Tests & recette",
        description:
          "Tests fonctionnels, performance, sécurité et accessibilité. Recette utilisateur avant mise en production.",
      },
      {
        number: 5,
        title: "Mise en production",
        description:
          "Déploiement progressif, monitoring temps réel, formation utilisateurs et documentation technique complète.",
      },
    ],
  },
  technologies: [
    "Symfony",
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "PostgreSQL",
  ],
  faq: [
    {
      question: "Quel framework choisir pour mon projet web ?",
      answer:
        "Le choix dépend de vos besoins spécifiques. Pour une plateforme métier complexe avec beaucoup de logique métier, nous recommandons Symfony (PHP) ou Laravel. Pour un site vitrine performant avec un bon SEO, Next.js (React) ou Nuxt (Vue) sont excellents. Nous vous accompagnons dans ce choix lors de l&apos;atelier de cadrage.",
    },
    {
      question: "Quel est le délai moyen pour développer un site web ?",
      answer:
        "Un site vitrine simple peut être livré en 4 à 6 semaines. Une plateforme SaaS ou un portail métier prend généralement 3 à 6 mois selon la complexité des fonctionnalités. Nous travaillons en sprints de 2 semaines avec des livraisons continues pour que vous puissiez voir l&apos;avancement régulièrement.",
    },
    {
      question: "Proposez-vous la maintenance après la livraison ?",
      answer:
        "Oui, nous proposons des contrats de maintenance incluant les mises à jour de sécurité, les évolutions mineures, le monitoring et le support technique. Nous pouvons également former vos équipes pour qu&apos;elles prennent le relais en autonomie.",
    },
    {
      question: "Quel est le budget moyen pour un projet web ?",
      answer:
        "Un site vitrine démarre à partir de 8 000 €. Une plateforme SaaS ou une application métier se situe généralement entre 30 000 € et 100 000 € selon la complexité. Nous vous fournissons un devis détaillé après l&apos;atelier de cadrage pour que vous ayez une vision claire des coûts.",
    },
    {
      question: "Comment se passe la collaboration pendant le projet ?",
      answer:
        "Nous travaillons en mode agile avec des sprints de 2 semaines. Vous avez accès à un outil de suivi de projet (Jira, Linear, etc.), participez aux réunions de sprint planning et de démonstration, et pouvez tester les fonctionnalités au fur et à mesure. Nous privilégions la transparence et l&apos;échange régulier.",
    },
  ],
};
