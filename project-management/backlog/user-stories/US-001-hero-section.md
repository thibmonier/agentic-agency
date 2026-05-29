# US-001 : Hero avec proposition valeur et CTAs

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir immédiatement la proposition de valeur de l'agence et pouvoir contacter rapidement** afin de **décider en moins de 10 secondes si cette agence correspond à mes besoins**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite la page d'accueil
WHEN la page se charge
THEN je vois le titre H1 "Livrez plus vite. Sans sacrifier la qualité."
AND je vois un sous-titre expliquant les services en 1-2 lignes
AND je vois 2 CTAs : "Réserver un échange" (primaire) et "Découvrir nos offres" (secondaire)
AND je vois un visuel illustrant la qualité/tests
```

### Scénario alternatif 1 - Desktop
```gherkin
GIVEN je visite depuis un desktop (> 1024px)
WHEN la section hero se charge
THEN le visuel est affiché à droite du texte
AND les 2 CTAs sont affichés horizontalement
```

### Scénario alternatif 2 - Mobile
```gherkin
GIVEN je visite depuis un mobile (< 768px)
WHEN la section hero se charge
THEN le visuel est affiché en dessous du texte
AND les 2 CTAs sont empilés verticalement
AND le texte reste lisible sans zoom
```

### Scénario d'erreur 1 - Chargement lent image
```gherkin
GIVEN je visite avec une connexion lente
WHEN l'image hero tarde à charger
THEN un placeholder avec dimensions correctes est affiché
AND le texte et les CTAs sont visibles immédiatement
AND le LCP reste < 2,5s
```

### Scénario d'erreur 2 - Image manquante
```gherkin
GIVEN l'image hero est indisponible
WHEN la section hero se charge
THEN un visuel de fallback ou couleur de fond est affiché
AND le texte et CTAs restent fonctionnels
```

## Conversation
- Aligné avec section S01 du PRD
- CTAs doivent être visuellement distincts (primaire vs secondaire)
- next/image obligatoire avec priority pour le hero
- Alt descriptif pour accessibilité
- Visuel doit illustrer la qualité (code, tests) sans être générique

## Dépendances
- Aucune

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
