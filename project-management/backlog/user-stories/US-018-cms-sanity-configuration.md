# US-018 : CMS Sanity - Configuration et modèle données

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **un CMS Sanity configuré avec tous les modèles de données nécessaires** afin de **pouvoir gérer de manière autonome le contenu du site et du blog sans intervention développeur**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN Sanity Studio est configuré et accessible
WHEN je me connecte à l'interface CMS
THEN je vois tous les types de documents : Article, Auteur, Catégorie, Réalisation, Technologie, Témoignage, FAQ
AND chaque type a tous les champs obligatoires (cf. PRD F03.2)
AND je peux créer un brouillon article sans erreur
```

### Scénario alternatif 1 - Création article
```gherkin
GIVEN je crée un nouvel article dans Sanity
WHEN je remplis tous les champs obligatoires (title, slug, category, body, coverImage, author, publishedAt)
AND je sauvegarde en brouillon
THEN l'article est créé avec status "draft"
AND le temps de lecture est calculé automatiquement
AND je peux prévisualiser l'article avant publication
```

### Scénario alternatif 2 - Validation champs
```gherkin
GIVEN je tente de créer un article sans champs obligatoires
WHEN je clique sur "Publish"
THEN des messages d'erreur apparaissent sous chaque champ manquant
AND l'article n'est pas publié
AND je peux corriger et republier
```

### Scénario d'erreur 1 - Slug déjà existant
```gherkin
GIVEN je crée un article avec un slug déjà utilisé
WHEN je tente de sauvegarder
THEN un message d'erreur "Slug déjà utilisé" s'affiche
AND je dois choisir un nouveau slug unique
```

### Scénario d'erreur 2 - Image trop lourde
```gherkin
GIVEN je télécharge une coverImage > 5 Mo
WHEN je sauvegarde l'article
THEN un message d'erreur "Image trop lourde (max 5 Mo)" s'affiche
OR Sanity compresse automatiquement l'image
```

## Conversation
- Aligné avec section F03.2 du PRD
- Modèle Article complet : title, slug, category, excerpt, body (Portable Text), coverImage, author, publishedAt, readingTime (auto), seoTitle, seoDescription, ogImage, linkedinTeaser, keyTakeaways, status, featured
- Modèle Auteur : name, slug, bio, photo, role
- Modèle Catégorie : name (enum: avis, tests, process), description, slug
- Modèle Réalisation : title, slug, sector, mission, impact, technologies (références), coverImage, featured
- Modèle Technologie : name, version, logo, category (web/mobile/backend/etc.)
- Modèle Témoignage : quote, author, role, company, offerTag
- Modèle FAQ : question, answer, service (enum), order
- Relations : Article → Auteur, Article → Catégorie, Réalisation → Technologies
- Validation slug unique par type
- Temps de lecture calculé automatiquement (250 mots/min)
- Interface Sanity Studio accessible via /studio ou URL dédiée
- 3 éditeurs gratuits (plan free), upgrade à Growth 19€/mois si > 3

## Dépendances
- US-038 (Setup Next.js) pour intégration next-sanity

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
