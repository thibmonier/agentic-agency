# US-023 : Prévisualisation brouillons CMS

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-003
- **Priorité :** Should
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **prévisualiser un article brouillon avant publication** afin de **valider la mise en forme et le contenu sans le rendre visible publiquement**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je crée un article avec status "draft" dans Sanity
WHEN je clique sur "Preview" dans Sanity Studio
THEN une nouvelle fenêtre s'ouvre avec l'article rendu
AND l'URL est /api/preview?slug=[slug]&secret=[TOKEN]
AND l'article s'affiche exactement comme s'il était publié
AND un bandeau "Mode Preview" est visible en haut de page
```

### Scénario alternatif 1 - Sortir du mode preview
```gherkin
GIVEN je suis en mode preview
WHEN je clique sur "Quitter la preview" dans le bandeau
THEN le mode preview est désactivé (cookie supprimé)
AND je suis redirigé vers /blog
```

### Scénario alternatif 2 - Preview d'un article modifié
```gherkin
GIVEN je modifie un article publié existant
WHEN je clique sur "Preview" sans sauvegarder
THEN la preview affiche les modifications en temps réel
AND l'article publié reste inchangé pour les visiteurs
```

### Scénario d'erreur 1 - Token secret invalide
```gherkin
GIVEN je tente d'accéder à /api/preview?slug=test&secret=wrong
WHEN la route preview est appelée
THEN une erreur 401 Unauthorized est retournée
AND un message "Token invalide" s'affiche
```

### Scénario d'erreur 2 - Slug article inexistant
```gherkin
GIVEN je prévisualise un article avec slug inexistant
WHEN la route preview est appelée avec slug invalide
THEN une erreur 404 stylisée est affichée en mode preview
AND le bandeau "Mode Preview" reste visible
```

## Conversation
- Aligné avec section F03.3 du PRD
- Mode preview Sanity avec next-sanity
- Route API Next.js : /api/preview (secret token en env var)
- Bandeau sticky "Mode Preview" en haut de page avec CTA "Quitter"
- Cookie __previewMode activé pour la session
- Requête Sanity en mode preview (articles draft + published)
- Preview temps réel optionnel avec Sanity Presentation Tool (Should)
- Token secret : généré aléatoirement, stocké en SANITY_PREVIEW_SECRET env var
- Sécurité : token validé côté serveur, timeout session 1h
- Lien preview accessible depuis Sanity Studio (bouton custom)

## Dépendances
- US-018 (CMS Sanity configuration)
- US-021 (Page article) pour rendu

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
