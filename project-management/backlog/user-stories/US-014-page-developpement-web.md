# US-014 : Page Développement web

## Informations
- **EPIC :** EPIC-002
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **consulter une page dédiée au développement web** afin de **comprendre les services, processus et technologies spécifiques à ce pilier**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /services/developpement-web
WHEN la page se charge
THEN je vois la structure complète : Hero, Problèmes clients, Cartes offre, Processus, Technologies, Réalisations, Articles blog, FAQ, CTA
AND le meta title unique est "Développement web sur mesure | Agentic Agency"
AND je vois un schema FAQPage valide
```

### Scénario alternatif 1 - Clic CTA contact
```gherkin
GIVEN je clique sur un CTA "Discuter de mon projet"
WHEN le lien est activé
THEN je suis redirigé vers /contact?sujet=developpement-web
AND le champ Sujet est pré-rempli avec "Développement web"
```

### Scénario alternatif 2 - Articles liés
```gherkin
GIVEN 2+ articles blog mentionnent "développement web" ou tags associés
WHEN la section "Articles liés" s'affiche
THEN je vois 2-3 articles pertinents
AND chaque article a un lien vers /blog/[slug]
```

### Scénario d'erreur 1 - FAQ manquante
```gherkin
GIVEN aucune FAQ n'est renseignée dans le CMS
WHEN la page devrait afficher la FAQ
THEN la section FAQ est masquée
OR 3 questions génériques par défaut sont affichées
```

### Scénario d'erreur 2 - Technologies non filtrées
```gherkin
GIVEN aucune techno n'est associée à ce service dans le CMS
WHEN la section Technologies devrait s'afficher
THEN les 11 stacks sont affichées par défaut
OR seules les technologies web (Symfony, Laravel, React, Vue, Angular) sont affichées
```

## Conversation
- Aligné avec section F02 du PRD
- Structure canonique réutilisable pour les 4 pages services
- URL : /services/developpement-web
- Hero court + CTA
- Problèmes clients : 3-4 bullets (ex: site obsolète, refonte complexe, performance)
- Cartes offre : sites vitrines, plateformes métier, refonte, intégrations
- Processus spécifique : découverte, maquettes, développement, tests, MEP
- Technologies filtrées : Symfony, Laravel, PHP, React, Vue.js, Angular
- Réalisations filtrées par tag "web"
- Articles blog liés : auto ou sélection CMS
- FAQ : 3-5 questions (ex: "Quel framework choisir ?", "Délai moyen ?")
- Meta unique + schema FAQPage

## Dépendances
- US-005 (Cartes offre accueil) pour cohérence
- US-018 (CMS Sanity) pour contenu
- US-025 (Formulaire) pour CTA

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
