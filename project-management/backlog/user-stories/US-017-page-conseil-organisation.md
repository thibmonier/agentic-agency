# US-017 : Page Conseil et organisation

## Informations
- **EPIC :** EPIC-002
- **Persona :** P-004
- **Priorité :** Should
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-004 — Directeur Transformation**, je veux **consulter une page dédiée au conseil et à l'accompagnement organisationnel** afin de **comprendre comment l'agence peut m'aider à structurer mes équipes IT et moderniser nos pratiques**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /services/conseil-organisation
WHEN la page se charge
THEN je vois la structure complète : Hero, Problèmes clients, Cartes offre, Processus, Technologies, Réalisations, Articles blog, FAQ, CTA
AND le meta title unique est "Conseil IT & transformation Agile | Agentic Agency"
AND je vois un schema FAQPage valide
```

### Scénario alternatif 1 - CTA avec sujet pré-rempli
```gherkin
GIVEN je clique sur "Discuter de ma transformation"
WHEN le lien est activé
THEN je suis redirigé vers /contact?sujet=conseil
AND le champ Sujet est pré-rempli avec "Conseil — audit / équipe / formation"
```

### Scénario alternatif 2 - Articles Process
```gherkin
GIVEN 2+ articles blog catégorie "Process" parlent de transformation, Agile, DevOps
WHEN la section "Articles liés" s'affiche
THEN je vois 2-3 articles Process pertinents
AND les articles parlent de méthode, rituels, gouvernance
```

### Scénario d'erreur 1 - Pas de technologies
```gherkin
GIVEN la section Technologies est affichée mais conseil n'a pas de technos spécifiques
WHEN la page se charge
THEN la section Technologies est masquée
OR une mention "Outils & pratiques" remplace Technologies (Jira, GitLab CI/CD, etc.)
```

### Scénario d'erreur 2 - Réalisations non applicables
```gherkin
GIVEN aucune réalisation n'est taguée "conseil"
WHEN la section Réalisations devrait s'afficher
THEN la section est masquée
OR des témoignages transformation sont affichés à la place
```

## Conversation
- Aligné avec section F02 du PRD
- URL : /services/conseil-organisation
- Problèmes clients : équipes en silos, pas de culture qualité, turnover élevé, projets en retard chronique
- Cartes offre : Audit & diagnostic, Structuration équipes IT, Formation & coaching, Accompagnement transformation
- Processus : diagnostic maturité, plan d'action, coaching d'équipes, suivi indicateurs
- Technologies : section remplacée par "Outils & pratiques" (Scrum, Kanban, CI/CD, TDD)
- Réalisations : témoignages transformations OU projets conseil
- Articles blog : focus Process (transformation, Agile, DevOps)
- FAQ : 3-5 questions (ex: "Durée moyenne accompagnement ?", "Comment mesurer progression ?", "Formation sur mesure ?")
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
