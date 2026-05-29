import { z } from "zod";

export const contactSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().email("Adresse email invalide"),
  societe: z.string().min(2, "Le nom de société doit contenir au moins 2 caractères").max(100),
  sujet: z.enum(["developpement-web", "application-metier", "mobile", "conseil", "autre"], {
    error: "Veuillez sélectionner un sujet",
  }),
  message: z.string().min(50, "Le message doit contenir au moins 50 caractères").max(5000),
  telephone: z.string().optional().or(z.literal("")),
  budget: z.enum(["<25k", "25-50k", "50-100k", "100-200k", ">200k"]).optional().or(z.literal("")),
  delai: z.enum(["<3-mois", "3-6-mois", ">6-mois"]).optional().or(z.literal("")),
  source: z.enum(["google", "linkedin", "recommandation", "autre"]).optional().or(z.literal("")),
  consentement: z.literal(true, { error: "Vous devez accepter la politique de confidentialité" }),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const sujetLabels: Record<string, string> = {
  "developpement-web": "Développement web — site / plateforme / refonte",
  "application-metier": "Application métier — greenfield / évolution / intégration",
  mobile: "Mobile — Flutter / React Native / MVP",
  conseil: "Conseil — audit / équipe / formation",
  autre: "Autre",
};

export const budgetLabels: Record<string, string> = {
  "<25k": "Moins de 25 000 €",
  "25-50k": "25 000 € - 50 000 €",
  "50-100k": "50 000 € - 100 000 €",
  "100-200k": "100 000 € - 200 000 €",
  ">200k": "Plus de 200 000 €",
};

export const delaiLabels: Record<string, string> = {
  "<3-mois": "Moins de 3 mois",
  "3-6-mois": "3 à 6 mois",
  ">6-mois": "Plus de 6 mois",
};

export const sourceLabels: Record<string, string> = {
  google: "Recherche Google",
  linkedin: "LinkedIn",
  recommandation: "Recommandation",
  autre: "Autre",
};
