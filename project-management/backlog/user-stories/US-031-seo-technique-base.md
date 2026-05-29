# US-031 : SEO technique (meta, sitemap, canonical)

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **que toutes les pages aient des meta tags uniques et un sitemap dynamique** afin de **garantir une indexation optimale par Google**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite n'importe quelle page du site
WHEN j'inspecte le <head>
THEN je vois un <title> unique (50-60 caractères)
AND je vois une <meta name="description"> unique (140-160 caractères)
AND je vois une <link rel="canonical"> pointant vers l'URL canonique
AND je vois un <html lang="fr">
AND je vois un seul <h1> par page
```

### Scénario alternatif 1 - Sitemap dynamique
```gherkin
GIVEN je visite /sitemap.xml
WHEN le sitemap se charge
THEN je vois toutes les pages publiques : accueil, services (×4), blog (liste + catégories + articles publiés), contact, légal (×3)
AND chaque URL est absolue HTTPS (https://agentic-agency.fr/...)
AND la priorité et lastmod sont renseignées
AND le sitemap est valide XML
```

### Scénario alternatif 2 - Images optimisées
```gherkin
GIVEN une page contient des images
WHEN j'inspecte les <img>
THEN chaque image a un alt descriptif
AND les images utilisent next/image avec srcset responsive
AND les formats WebP/AVIF sont servis (si supportés par navigateur)
```

### Scénario d'erreur 1 - Meta dupliquées
```gherkin
GIVEN 2 pages ont le même <title>
WHEN Google indexe le site
THEN un problème "Duplicate titles" est remonté dans GSC
AND les pages doivent avoir des titles uniques
```

### Scénario d'erreur 2 - Sitemap article brouillon
```gherkin
GIVEN un article a status "draft"
WHEN le sitemap se génère
THEN l'article brouillon n'apparaît PAS dans le sitemap
AND seuls les articles published=true sont inclus
```

## Conversation
- Aligné avec section F07 du PRD
- Meta tags uniques par page :
  - title : 50-60 caractères, mot-clé principal en tête
  - description : 140-160 caractères, incitative
  - canonical : URL absolue HTTPS
- HTML sémantique : <header>, <main>, <article>, <nav>, <footer>
- Hiérarchie titres : H1 unique > H2 > H3 (pas de saut)
- lang="fr" (hreflang="en" si version anglaise future)
- Sitemap.xml dynamique :
  - Accueil, pages services (×4), blog (liste + catégories), articles (published), contact, légal (×3)
  - URL absolues HTTPS
  - lastmod : date dernière modification (articles : publishedAt, pages : build time)
  - priority : accueil 1.0, services 0.8, articles 0.7, légal 0.3
  - Généré automatiquement par Next.js (sitemap.ts) ou librairie (next-sitemap)
- robots.txt :
  - Allow: / (tout public)
  - Disallow: /api (routes API)
  - Disallow: /studio (Sanity Studio)
  - Sitemap: https://agentic-agency.fr/sitemap.xml
- Images :
  - alt descriptifs (pas "image1.jpg")
  - next/image avec optimisation automatique
  - srcset responsive (320w, 640w, 1024w, 1440w)
  - formats WebP/AVIF servis automatiquement
- Maillage interne :
  - 2-3 liens par article vers pages services ou accueil
  - Liens contextuels (pas footer uniquement)

## Dépendances
- US-018 (CMS Sanity) pour articles publiés

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
