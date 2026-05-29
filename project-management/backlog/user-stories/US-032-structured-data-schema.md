# US-032 : Structured data Schema.org

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **que toutes les pages importantes aient des données structurées Schema.org** afin de **améliorer l'affichage dans les résultats de recherche Google (rich snippets)**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite une page du site
WHEN j'inspecte le <head> ou le <body>
THEN je vois un ou plusieurs blocs <script type="application/ld+json">
AND les données structurées sont valides JSON-LD
AND le type de schema correspond à la page (Organization, BlogPosting, FAQPage, etc.)
```

### Scénario alternatif 1 - Page accueil Organization
```gherkin
GIVEN je visite la page d'accueil
WHEN je teste avec Rich Results Test
THEN le schema Organization est détecté
AND les champs obligatoires sont présents : name, url, logo
AND les champs optionnels sont présents : sameAs (LinkedIn), contactPoint
```

### Scénario alternatif 2 - Article BlogPosting
```gherkin
GIVEN je visite un article blog /blog/[slug]
WHEN je teste avec Rich Results Test
THEN le schema BlogPosting est détecté
AND les champs obligatoires sont présents : headline, author, datePublished, image
AND les champs optionnels sont présents : dateModified, publisher
```

### Scénario d'erreur 1 - Schema invalide
```gherkin
GIVEN un schema JSON-LD contient une erreur de syntaxe
WHEN je teste avec Rich Results Test
THEN une erreur "Invalid JSON-LD" est remontée
AND le schema doit être corrigé pour respecter la spec Schema.org
```

### Scénario d'erreur 2 - Champs obligatoires manquants
```gherkin
GIVEN un article n'a pas de coverImage
WHEN le schema BlogPosting est généré
THEN le champ "image" est manquant
AND Rich Results Test remonte un warning "Missing required field: image"
AND l'article doit avoir une coverImage pour être valide
```

## Conversation
- Aligné avec section F07 du PRD
- Schemas obligatoires (JSON-LD dans <head> ou <body>) :

**1. Organization (accueil, footer) :**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agentic Agency",
  "url": "https://agentic-agency.fr",
  "logo": "https://agentic-agency.fr/logo.png",
  "sameAs": ["https://www.linkedin.com/company/agentic-agency"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "contact@agentic-agency.fr"
  }
}
```

**2. ProfessionalService (accueil ou pages services) :**
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Agentic Agency",
  "serviceType": "Développement web et applications métier",
  "areaServed": "FR"
}
```

**3. BlogPosting (articles blog) :**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article title",
  "author": {
    "@type": "Person",
    "name": "Author name"
  },
  "datePublished": "2026-05-29T10:00:00Z",
  "dateModified": "2026-05-30T12:00:00Z",
  "image": "https://agentic-agency.fr/blog/article-cover.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Agentic Agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://agentic-agency.fr/logo.png"
    }
  }
}
```

**4. BreadcrumbList (articles, services) :**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://agentic-agency.fr" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://agentic-agency.fr/blog" },
    { "@type": "ListItem", "position": 3, "name": "Article title", "item": "https://agentic-agency.fr/blog/article-slug" }
  ]
}
```

**5. FAQPage (pages services) :**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question 1 ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Réponse 1..."
      }
    }
  ]
}
```

- Validation : Rich Results Test Google (0 erreur critique)
- Librairie : next-seo (Next.js) pour génération automatique
- Données dynamiques depuis Sanity (articles, auteurs, FAQ)

## Dépendances
- US-031 (SEO technique) pour meta tags
- US-033 (GSC) pour validation Rich Results

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
