# US-015 : Page Applications métier

## Informations
- **EPIC :** EPIC-002
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **consulter une page dédiée aux applications métier** afin de **comprendre l'expertise de l'agence sur les applications complexes, l'intégration SI et la qualité du code**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /services/applications-metier
WHEN la page se charge
THEN je vois la structure complète : Hero, Problèmes clients, Cartes offre, Processus, Technologies, Réalisations, Articles blog, FAQ, CTA
AND le meta title unique est "Applications métier sur mesure | Agentic Agency"
AND je vois un schema FAQPage valide
AND les technologies affichées incluent : Symfony, API Platform, PostgreSQL, Docker
```

### Scénario alternatif 1 - CTA avec sujet pré-rempli
```gherkin
GIVEN je clique sur "Décrire mon projet"
WHEN le lien est activé
THEN je suis redirigé vers /contact?sujet=application-metier
AND le champ Sujet est pré-rempli avec "Application métier — greenfield / évolution / intégration"
```

### Scénario alternatif 2 - Articles techniques
```gherkin
GIVEN 2+ articles blog catégorie "Tests" ou "Process" mentionnent applications métier
WHEN la section "Articles liés" s'affiche
THEN je vois 2-3 articles techniques pertinents
AND au moins 1 article parle de tests ou architecture
```

### Scénario d'erreur 1 - Réalisations manquantes
```gherkin
GIVEN aucune réalisation n'est taguée "application métier"
WHEN la section Réalisations devrait s'afficher
THEN la section est masquée
OR 2 réalisations génériques sont affichées par défaut
```

### Scénario d'erreur 2 - FAQ incomplète
```gherkin
GIVEN moins de 3 questions FAQ sont renseignées
WHEN la section FAQ s'affiche
THEN seules les questions disponibles sont affichées
AND le schema FAQPage reste valide
```

## Conversation
- Aligné avec section F02 du PRD
- Page phare de l'agence (offre principale)
- URL : /services/applications-metier
- Problèmes clients : dette technique, SI obsolète, intégration complexe, scalabilité
- Cartes offre : Application sur mesure, Évolution & dette technique, Intégration SI & APIs
- Processus : découverte métier, architecture, sprints Agile, tests, passation
- Technologies filtrées : Symfony, Laravel, API Platform, PostgreSQL, Docker
- Réalisations filtrées par tag "application-metier"
- Articles blog : focus Tests, Process, architecture
- FAQ : 3-5 questions (ex: "Comment garantir la maintenabilité ?", "Intégration SI existant ?", "Coût vs ERP standard ?")
- Meta unique + schema FAQPage

## Dépendances
- US-005 (Cartes offre accueil) pour cohérence
- US-014 (Template page service) pour réutilisation
- US-018 (CMS Sanity) pour contenu

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
