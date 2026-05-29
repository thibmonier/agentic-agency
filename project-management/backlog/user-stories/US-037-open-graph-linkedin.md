# US-037 : Open Graph optimisé LinkedIn

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-005
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-005 — Développeur Freelance**, je veux **que les liens partagés sur LinkedIn aient une preview optimisée** afin de **attirer l'attention de mon réseau avec un visuel professionnel**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je partage un lien du site sur LinkedIn
WHEN la preview se génère
THEN l'image OG (1200×627) s'affiche correctement
AND le titre (seoTitle ou title) s'affiche complet
AND la description (seoDescription ou excerpt) s'affiche tronquée à 200 caractères
AND la preview est validée LinkedIn Post Inspector 0 erreur
```

### Scénario alternatif 1 - Page accueil
```gherkin
GIVEN je partage https://agentic-agency.fr
WHEN la preview se génère
THEN l'image OG générique Agentic Agency s'affiche (logo + baseline)
AND le titre est "Livrez plus vite. Sans sacrifier la qualité. | Agentic Agency"
AND la description est "Développement web, applications métier et mobiles. 11 stacks maîtrisées."
```

### Scénario alternatif 2 - Article blog
```gherkin
GIVEN je partage un article /blog/[slug]
WHEN la preview se génère
THEN l'image OG spécifique article (1200×627) s'affiche
AND le titre est le seoTitle de l'article
AND la description est le seoDescription de l'article
```

### Scénario d'erreur 1 - Image OG manquante
```gherkin
GIVEN une page n'a pas d'image OG définie
WHEN la preview LinkedIn se génère
THEN l'image OG générique Agentic Agency est utilisée par défaut
OR l'image du logo est affichée (fallback)
```

### Scénario d'erreur 2 - Image OG trop lourde
```gherkin
GIVEN une image OG dépasse 5 Mo
WHEN LinkedIn tente de charger la preview
THEN l'image ne s'affiche pas ou charge lentement
AND l'image doit être compressée < 5 Mo (idéalement < 1 Mo)
```

## Conversation
- Aligné avec section F09 du PRD (déjà traité dans US-022 pour articles)
- Extension à TOUTES les pages du site (pas que blog)

**Meta OG obligatoires (toutes pages) :**
```html
<meta property="og:type" content="website" /> <!-- ou "article" pour blog -->
<meta property="og:title" content="[seoTitle ou title]" />
<meta property="og:description" content="[seoDescription ou excerpt]" />
<meta property="og:url" content="[URL canonique HTTPS]" />
<meta property="og:image" content="[URL absolue image OG]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta property="og:site_name" content="Agentic Agency" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="[URL absolue image OG]" />
```

**Images OG par page :**
- Accueil : image générique Agentic Agency (logo + baseline + couleur)
- Pages services : image générique par service (icône + titre service)
- Articles blog : image spécifique article (coverImage ou ogImage dédiée)
- Pages légales : image générique Agentic Agency

**Dimensions images OG :**
- 1200 × 627 px (ratio 1.91:1)
- Format : JPG ou PNG
- Poids : < 1 Mo (max 5 Mo)
- Texte lisible sur vignette (éviter trop petit)

**Validation :**
- LinkedIn Post Inspector : https://www.linkedin.com/post-inspector/
- Tester 5 URLs minimum : accueil, 1 service, 3 articles blog
- 0 erreur OG

**Génération images OG :**
- Articles : uploadées manuellement dans Sanity (champ ogImage)
- Pages statiques : créées avec Figma ou Canva, stockées dans /public/og/
- Alternative : génération dynamique avec Vercel OG Image (Should)

## Dépendances
- US-022 (Partage LinkedIn articles) pour cohérence
- US-031 (Meta tags) pour intégration

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
