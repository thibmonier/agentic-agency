# US-002 : Section indicateurs chiffrés

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir des chiffres concrets démontrant l'expertise de l'agence** afin de **rassurer sur la crédibilité et l'expérience**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section stats
WHEN la section devient visible
THEN je vois 4 indicateurs chiffrés affichés clairement
AND chaque indicateur a un chiffre proéminent et un libellé explicite
AND les chiffres incluent "11 stacks maîtrisées"
```

### Scénario alternatif 1 - Desktop
```gherkin
GIVEN je visite depuis un desktop
WHEN la section stats s'affiche
THEN les 4 indicateurs sont affichés en ligne horizontale
AND l'espacement est uniforme
```

### Scénario alternatif 2 - Mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section stats s'affiche
THEN les 4 indicateurs sont affichés en grille 2×2
AND chaque indicateur reste lisible
```

### Scénario d'erreur 1 - Chiffres trop longs
```gherkin
GIVEN un indicateur a un texte très long
WHEN la section s'affiche en mobile
THEN le texte s'adapte sans déborder du conteneur
AND reste lisible sans scroll horizontal
```

### Scénario d'erreur 2 - Données CMS manquantes
```gherkin
GIVEN un indicateur n'a pas de valeur dans le CMS
WHEN la section stats s'affiche
THEN seuls les indicateurs avec valeurs sont affichés
OR un placeholder "En cours" est affiché
```

## Conversation
- Aligné avec section S02 du PRD
- Chiffres à définir par le client (section Contenus du PRD)
- Exemples suggérés : XX% dette technique réduite, XX+ années expérience, 11 stacks, XX+ projets
- Animation optionnelle au scroll (compteur animé)
- Chiffres éditables depuis Sanity CMS

## Dépendances
- US-018 (CMS Sanity) pour édition

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
