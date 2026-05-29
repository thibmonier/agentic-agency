# US-004 : Section delivery moderne

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **comprendre l'approche delivery de l'agence (cycles courts, revues, automatisation)** afin de **valider qu'ils travaillent de manière agile et moderne**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section delivery moderne
WHEN la section devient visible
THEN je vois un titre H2 "Le delivery moderne comme avantage"
AND je vois 2 paragraphes expliquant cycles courts, revues, automatisation
AND je vois un CTA "Lire nos retours d'expérience" vers /blog
```

### Scénario alternatif 1 - Lien vers article
```gherkin
GIVEN je clique sur le CTA "Lire nos retours d'expérience"
WHEN le lien est activé
THEN je suis redirigé vers /blog OU un article spécifique Process/Tests
AND le lien s'ouvre dans le même onglet
```

### Scénario alternatif 2 - Visuel illustratif
```gherkin
GIVEN un visuel illustrant le delivery moderne est présent
WHEN la section s'affiche
THEN le visuel est affiché à côté du texte (desktop)
OR en dessous du texte (mobile)
AND le visuel a un alt descriptif
```

### Scénario d'erreur 1 - Lien blog cassé
```gherkin
GIVEN le lien vers /blog est invalide
WHEN je clique sur le CTA
THEN je suis redirigé vers /blog (page liste)
OR un message d'erreur 404 stylisé est affiché
```

### Scénario d'erreur 2 - Contenu trop long
```gherkin
GIVEN le texte dépasse 2 paragraphes
WHEN la section s'affiche en mobile
THEN le texte reste lisible sans scroll horizontal
AND un lien "Lire la suite" tronque le texte (optionnel)
```

## Conversation
- Aligné avec section S04 du PRD
- Focus : delivery moderne comme avantage, PAS hype IA
- Texte à valider par client (section Contenus PRD)
- Lien vers article blog Process ou Tests existant
- Visuel optionnel (timeline, diagramme, code review)

## Dépendances
- US-019 (Page liste blog) pour lien CTA

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
