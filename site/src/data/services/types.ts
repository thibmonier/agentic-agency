export interface ServicePageData {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  problems: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  offers: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  process: {
    title: string;
    steps: Array<{ number: number; title: string; description: string }>;
  };
  technologies: string[];
  technologiesLabel?: string;
  faq: Array<{ question: string; answer: string }>;
}
