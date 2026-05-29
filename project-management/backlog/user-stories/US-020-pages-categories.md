# US-020 : Pages catégories (Avis, Tests, Process)

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **accéder à des pages dédiées par catégorie blog** afin de **consulter uniquement les articles d'une catégorie spécifique avec une introduction contextuelle**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /blog/tests
WHEN la page se charge
THEN je vois une intro catégorie "Tests" (2-3 lignes)
AND je vois la liste filtrée des articles catégorie "tests"
AND la structure est identique à /blog (grille + pagination)
AND le meta title est "Tests | Blog Agentic Agency"
```

### Scénario alternatif 1 - Navigation entre catégories
```gherkin
GIVEN je suis sur /blog/avis
WHEN je clique sur le filtre "Process"
THEN je suis redirigé vers /blog/process
AND seuls les articles Process sont affichés
```

### Scénario alternatif 2 - Catégorie vide
```gherkin
GIVEN aucun article n'est publié dans catégorie "avis"
WHEN je visite /blog/avis
THEN un message "Aucun article dans cette catégorie" s'affiche
AND l'intro catégorie reste visible
AND un lien "Voir tous les articles" pointe vers /blog
```

### Scénario d'erreur 1 - Catégorie invalide
```gherkin
GIVEN je visite /blog/invalid-category
WHEN la page devrait se charger
THEN une erreur 404 stylisée est affichée
AND un lien "Retour au blog" pointe vers /blog
```

### Scénario d'erreur 2 - Intro catégorie manquante
```gherkin
GIVEN l'intro catégorie n'est pas renseignée dans le CMS
WHEN la page catégorie se charge
THEN aucune intro n'est affichée
OR une intro par défaut est générée automatiquement
```

## Conversation
- Aligné avec section F03.1 du PRD
- 3 pages catégories : /blog/avis, /blog/tests, /blog/process
- Intro catégorie éditable depuis Sanity (modèle Catégorie)
- Exemples intro :
  - Avis : "Notre avis sur les frameworks, outils et pratiques du développement moderne."
  - Tests : "Retours d'expérience et comparatifs techniques pour vous aider à choisir."
  - Process : "Nos méthodes de travail, rituels et bonnes pratiques de delivery."
- Structure identique à /blog : grille articles, pagination
- Filtres visibles mais catégorie active désactivée (grisée)
- Meta title unique par catégorie
- Meta description unique par catégorie
- ISR Next.js avec revalidation 1h

## Dépendances
- US-019 (Page liste blog) pour template réutilisé

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
