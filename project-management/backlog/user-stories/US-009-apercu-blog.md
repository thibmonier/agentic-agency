# US-009 : Aperçu blog (3 derniers articles)

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **voir les 3 derniers articles du blog technique sur la page d'accueil** afin de **évaluer rapidement le niveau d'expertise technique de l'agence**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section blog
WHEN la section devient visible
THEN je vois le titre H2 "Notes de terrain"
AND je vois 3 cartes articles (image, catégorie, titre, extrait)
AND je vois un lien "Tous les articles" vers /blog
```

### Scénario alternatif 1 - Clic sur article
```gherkin
GIVEN je clique sur une carte article
WHEN le lien est activé
THEN je suis redirigé vers /blog/[slug] de l'article
AND l'article s'ouvre dans le même onglet
```

### Scénario alternatif 2 - Responsive mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section blog s'affiche
THEN les 3 cartes sont empilées verticalement
OR un carousel horizontal avec swipe est affiché
AND chaque carte reste lisible
```

### Scénario d'erreur 1 - Moins de 3 articles publiés
```gherkin
GIVEN moins de 3 articles sont publiés dans le blog
WHEN la section blog devrait s'afficher
THEN seuls les articles disponibles sont affichés
AND la mise en page s'adapte (centrage, espacement)
```

### Scénario d'erreur 2 - Image article manquante
```gherkin
GIVEN un article n'a pas d'image de couverture
WHEN la section blog s'affiche
THEN un placeholder avec couleur de la catégorie est affiché
AND le reste de la carte (titre, extrait) reste fonctionnel
```

## Conversation
- Aligné avec section S09 du PRD
- Affiche les 3 derniers articles publiés (par date DESC)
- Card : image 16:9, catégorie (badge), titre, extrait (150-200 car.)
- Lien "Tous les articles" vers /blog
- Données chargées depuis Sanity CMS avec filtre published=true
- next/image avec lazy loading pour les images articles

## Dépendances
- US-018 (CMS Sanity articles)
- US-019 (Page liste blog) pour lien

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
