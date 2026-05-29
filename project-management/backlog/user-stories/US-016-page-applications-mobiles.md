# US-016 : Page Applications mobiles

## Informations
- **EPIC :** EPIC-002
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **consulter une page dédiée aux applications mobiles** afin de **comprendre les offres (Flutter, React Native) et le processus de développement mobile**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /services/applications-mobiles
WHEN la page se charge
THEN je vois la structure complète : Hero, Problèmes clients, Cartes offre, Processus, Technologies, Réalisations, Articles blog, FAQ, CTA
AND le meta title unique est "Applications mobiles iOS & Android | Agentic Agency"
AND je vois un schema FAQPage valide
AND les technologies affichées incluent : Flutter, React Native, Dart
```

### Scénario alternatif 1 - CTA avec sujet pré-rempli
```gherkin
GIVEN je clique sur "Discuter de mon app mobile"
WHEN le lien est activé
THEN je suis redirigé vers /contact?sujet=mobile
AND le champ Sujet est pré-rempli avec "Mobile — Flutter / React Native / MVP"
```

### Scénario alternatif 2 - Articles liés
```gherkin
GIVEN 2+ articles blog mentionnent "Flutter" ou "React Native" ou tags "mobile"
WHEN la section "Articles liés" s'affiche
THEN je vois 2-3 articles pertinents sur le mobile
AND les articles parlent de Flutter, React Native ou bonnes pratiques mobile
```

### Scénario d'erreur 1 - Technologies mobiles manquantes
```gherkin
GIVEN aucune techno mobile n'est renseignée dans le CMS
WHEN la section Technologies devrait s'afficher
THEN Flutter et React Native sont affichés par défaut
AND les versions sont celles du PRD (Flutter 3.41, RN 0.85)
```

### Scénario d'erreur 2 - FAQ mobile manquante
```gherkin
GIVEN aucune FAQ spécifique mobile n'est renseignée
WHEN la section FAQ devrait s'afficher
THEN 3 questions génériques mobile sont affichées par défaut
AND le schema FAQPage reste valide
```

## Conversation
- Aligné avec section F02 du PRD
- URL : /services/applications-mobiles
- Problèmes clients : coût développement double (iOS+Android), maintenance complexe, app obsolète
- Cartes offre : MVP mobile, Application native cross-platform, Évolution app existante
- Processus : prototype interactif, développement itératif, tests devices, publication stores
- Technologies filtrées : Flutter, React Native, Dart
- Réalisations filtrées par tag "mobile"
- Articles blog : focus Flutter, React Native, bonnes pratiques mobile
- FAQ : 3-5 questions (ex: "Flutter vs React Native ?", "Délai moyen MVP ?", "Publication stores incluse ?")
- Meta unique + schema FAQPage

## Dépendances
- US-014 (Template page service) pour réutilisation
- US-018 (CMS Sanity) pour contenu

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
