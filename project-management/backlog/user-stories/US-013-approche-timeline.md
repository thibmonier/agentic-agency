# US-013 : Section approche (timeline 5 étapes)

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **comprendre le processus de travail de l'agence étape par étape** afin de **savoir à quoi m'attendre tout au long du projet**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section approche
WHEN la section devient visible
THEN je vois une timeline avec 5 étapes numérotées
AND les 5 étapes sont : Discovery, Conception, Développement itératif, Recette, Transfert
AND chaque étape contient un titre + description courte (1-2 lignes)
```

### Scénario alternatif 1 - Desktop horizontal
```gherkin
GIVEN je visite depuis un desktop
WHEN la section approche s'affiche
THEN la timeline est affichée horizontalement
AND une ligne connecte les 5 étapes visuellement
```

### Scénario alternatif 2 - Mobile vertical
```gherkin
GIVEN je visite depuis un mobile
WHEN la section approche s'affiche
THEN la timeline est affichée verticalement
AND chaque étape est empilée avec numéro visible
```

### Scénario d'erreur 1 - Texte étape trop long
```gherkin
GIVEN une description étape dépasse 2 lignes
WHEN la section approche s'affiche
THEN le texte est tronqué avec "..."
OR un bouton "En savoir plus" développe le texte (optionnel)
```

### Scénario d'erreur 2 - Responsive intermédiaire
```gherkin
GIVEN je visite depuis une tablette (768-1024px)
WHEN la section approche s'affiche
THEN la timeline s'adapte en grille 2×3 ou reste horizontale
AND la lisibilité est préservée
```

## Conversation
- Aligné avec section S13 du PRD
- 5 étapes obligatoires (cf. PRD § 7.3) :
  1. Discovery : cadrage, personas, processus
  2. Conception : wireframes, architecture, specs techniques
  3. Développement itératif : sprints 2 semaines, démos
  4. Recette : tests, formation, docs
  5. Transfert : MEP, monitoring, handover équipe client
- Timeline horizontale (desktop) / verticale (mobile)
- Numérotation visible (1 à 5)
- Ligne de connexion visuelle entre étapes
- Contenu éditable depuis CMS Sanity

## Dépendances
- US-018 (CMS Sanity) pour édition étapes

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
