# US-003 : Section confiance clients/secteurs

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Should
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir des logos de clients ou secteurs reconnus** afin de **me rassurer que l'agence a de l'expérience avec des entreprises similaires**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section confiance
WHEN la section devient visible
THEN je vois 6-10 logos de clients OU secteurs (Fintech, Santé, Industrie)
AND les logos sont affichés en grayscale
AND les logos sont cliquables (hover optionnel)
```

### Scénario alternatif 1 - Logos clients
```gherkin
GIVEN des logos clients sont disponibles
WHEN la section confiance s'affiche
THEN les logos clients sont affichés avec leur nom en alt
AND les logos respectent la confidentialité (accord client)
```

### Scénario alternatif 2 - Logos secteurs
```gherkin
GIVEN aucun logo client n'est disponible
WHEN la section confiance s'affiche
THEN des icônes secteurs sont affichés (Fintech, Santé, Industrie, etc.)
AND chaque secteur a un libellé explicite
```

### Scénario d'erreur 1 - Images manquantes
```gherkin
GIVEN un logo est manquant ou cassé
WHEN la section confiance s'affiche
THEN un placeholder ou initiales est affiché
AND la mise en page reste cohérente
```

### Scénario d'erreur 2 - Trop peu de logos
```gherkin
GIVEN moins de 6 logos sont disponibles
WHEN la section confiance s'affiche
THEN la section est masquée OU affichée avec centrage adapté
AND aucun espace vide disgracieux n'est visible
```

## Conversation
- Aligné avec section S03 du PRD
- Logos clients soumis à accord de confidentialité
- Si aucun logo client : utiliser icônes secteurs génériques
- Format : SVG ou WebP optimisé
- Alt obligatoire pour accessibilité
- Pas de lien externe (sauf accord client)

## Dépendances
- US-018 (CMS Sanity) pour gestion logos

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
