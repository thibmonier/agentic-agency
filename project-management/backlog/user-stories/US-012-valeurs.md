# US-012 : Section valeurs (4 piliers)

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Should
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **comprendre les valeurs de l'agence** afin de **valider qu'elles correspondent à ma culture d'entreprise et mes attentes**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section valeurs
WHEN la section devient visible
THEN je vois 4 cartes valeurs avec icône
AND les 4 valeurs sont : Fiabilité, Rigueur, Partenariat, Pragmatisme
AND chaque carte contient un titre + description courte (2-3 lignes)
AND je vois un CTA "Parler de votre projet" vers #contact
```

### Scénario alternatif 1 - Desktop grille
```gherkin
GIVEN je visite depuis un desktop
WHEN la section valeurs s'affiche
THEN les 4 cartes sont affichées en grille 2×2
AND l'espacement est uniforme
```

### Scénario alternatif 2 - Mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section valeurs s'affiche
THEN les 4 cartes sont empilées verticalement
AND chaque carte reste lisible
```

### Scénario d'erreur 1 - Icône manquante
```gherkin
GIVEN une icône valeur est manquante ou cassée
WHEN la section valeurs s'affiche
THEN un placeholder avec couleur de fond est affiché
OR l'icône est masquée et seul le texte est affiché
```

### Scénario d'erreur 2 - Description trop longue
```gherkin
GIVEN une description dépasse 3 lignes
WHEN la section valeurs s'affiche
THEN le texte est tronqué avec "..."
OR la hauteur de carte s'adapte (layout flexible)
```

## Conversation
- Aligné avec section S12 du PRD
- 4 valeurs obligatoires :
  - Fiabilité : Code maintenable, MEP maîtrisées
  - Rigueur : Tests, revues, critères acceptation
  - Partenariat : Extension équipe, pas boîte noire
  - Pragmatisme : Pas sur-ingénierie, valeur métier d'abord
- Icônes illustratives (SVG optimisé)
- CTA pointe vers #contact
- Valeurs éditables depuis CMS Sanity

## Dépendances
- US-007 (Section contact) pour lien CTA

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
