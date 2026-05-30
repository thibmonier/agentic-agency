export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "L'équipe a transformé notre processus métier en une application fluide et intuitive. Le delivery en sprints courts nous a permis de voir des résultats concrets dès les premières semaines.",
    name: "Sophie M.",
    role: "Directrice des opérations",
    company: "LogiPharma",
    service: "Application métier",
  },
  {
    quote:
      "Notre site e-commerce a gagné 40% de performance après la refonte. L'approche TDD et les tests automatisés nous donnent une confiance totale lors des mises en production.",
    name: "Marc D.",
    role: "CTO",
    company: "FoodMarket",
    service: "Développement web",
  },
  {
    quote:
      "L'accompagnement Agile a changé notre façon de travailler. Les équipes sont plus autonomes, les livraisons plus fréquentes, et la qualité a significativement augmenté.",
    name: "Julie R.",
    role: "VP Engineering",
    company: "DataScale",
    service: "Conseil",
  },
];
