# US-011 : Section technologies (11 stacks)

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **voir les 11 stacks maîtrisées par l'agence avec versions** afin de **valider qu'ils ont l'expertise technique sur les technologies qui m'intéressent**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section technologies
WHEN la section devient visible
THEN je vois une grille responsive avec 11 items technos
AND chaque item affiche : nom + version (ex: "Symfony 8.0 / PHP 8.5")
AND les 11 stacks sont : Symfony, Laravel, PHP, React, Vue.js, Angular, Flutter, React Native, Python, C#/.NET, Paperclip
```

### Scénario alternatif 1 - Hover desktop
```gherkin
GIVEN je survole une techno avec la souris (desktop)
WHEN le hover est actif
THEN un effet visuel (scale, border) est visible
OR une modal avec détails s'affiche (optionnel)
```

### Scénario alternatif 2 - Responsive mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section technologies s'affiche
THEN la grille s'adapte en 2 ou 3 colonnes
AND chaque item reste lisible sans zoom
```

### Scénario d'erreur 1 - Logo manquant
```gherkin
GIVEN un logo techno est manquant ou cassé
WHEN la section technologies s'affiche
THEN le nom de la techno s'affiche en texte seul
OR un placeholder avec initiales est affiché
```

### Scénario d'erreur 2 - Version non renseignée
```gherkin
GIVEN une techno n'a pas de version dans le CMS
WHEN la section technologies s'affiche
THEN seul le nom de la techno est affiché
OR la mention "Dernière version" est affichée
```

## Conversation
- Aligné avec section S11 du PRD
- 11 stacks obligatoires avec versions (cf. PRD section S11)
- Affichage : nom + version (hover ou modal détail optionnel)
- Logos technos en SVG optimisé
- Versions éditables depuis CMS Sanity
- Lien optionnel vers /technologies (page détaillée, Could)

## Dépendances
- US-018 (CMS Sanity) pour gestion stacks

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
