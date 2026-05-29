# US-019 : Page liste blog avec filtres catégories

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **consulter la liste de tous les articles du blog avec possibilité de filtrer par catégorie** afin de **trouver rapidement les articles techniques qui m'intéressent**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /blog
WHEN la page se charge
THEN je vois une grille d'articles (3 colonnes desktop, 1 mobile)
AND chaque card contient : coverImage, catégorie (badge), titre, extrait, date, temps lecture
AND je vois des filtres par catégorie : Tous, Avis, Tests, Process
AND je vois une pagination si > 12 articles
```

### Scénario alternatif 1 - Filtre par catégorie
```gherkin
GIVEN je clique sur le filtre "Tests"
WHEN le filtre est activé
THEN seuls les articles catégorie "tests" sont affichés
AND l'URL devient /blog?category=tests (optionnel)
AND le nombre total d'articles filtrés est affiché
```

### Scénario alternatif 2 - Pagination
```gherkin
GIVEN il y a 25 articles publiés
WHEN la page liste s'affiche
THEN je vois les 12 premiers articles
AND je vois une pagination : 1 [2] 3 Suivant
AND je peux cliquer sur page 2 pour voir articles 13-24
```

### Scénario d'erreur 1 - Aucun article publié
```gherkin
GIVEN aucun article n'a status "published"
WHEN je visite /blog
THEN un message "Aucun article publié pour le moment" s'affiche
AND aucune erreur 404 n'est levée
```

### Scénario d'erreur 2 - Image article manquante
```gherkin
GIVEN un article n'a pas de coverImage
WHEN la card article s'affiche
THEN un placeholder avec couleur catégorie est affiché
AND le reste de la card (titre, extrait) reste fonctionnel
```

## Conversation
- Aligné avec section F03.1 du PRD
- URL : /blog
- Grille responsive : 3 colonnes desktop (>1024px), 2 tablette (768-1024px), 1 mobile (<768px)
- Card article : coverImage 16:9, badge catégorie, titre, extrait (150-200 car.), date relative (ex: "Il y a 3 jours"), temps lecture
- Filtres : Tous (par défaut), Avis, Tests, Process
- Pagination : 12 articles par page
- ISR Next.js avec revalidation 1h
- Meta title : "Blog technique Agentic Agency | Avis, Tests, Process"
- Meta description : "Articles techniques sur le développement web, mobile et les bonnes pratiques de delivery."
- Requête Sanity : articles status=published, triés par publishedAt DESC

## Dépendances
- US-018 (CMS Sanity articles)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
