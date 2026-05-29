# US-010 : Aperçu réalisations

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Should
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir quelques réalisations concrètes de l'agence** afin de **comprendre le type de projets qu'ils ont déjà livrés**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section réalisations
WHEN la section devient visible
THEN je vois 3 à 6 cartes réalisations
AND chaque carte contient : secteur, titre mission, impact 1 ligne, tags technos
AND je vois un lien "Toutes les réalisations" vers /realisations
```

### Scénario alternatif 1 - Clic sur réalisation
```gherkin
GIVEN je clique sur une carte réalisation
WHEN le lien est activé
THEN je suis redirigé vers /realisations/[slug] (si page dédiée existe)
OR la carte s'agrandit pour afficher plus de détails (modal optionnel)
```

### Scénario alternatif 2 - Responsive mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section réalisations s'affiche
THEN les cartes sont empilées verticalement
OR un carousel horizontal avec swipe est affiché
AND les tags technos restent lisibles
```

### Scénario d'erreur 1 - Moins de 3 réalisations
```gherkin
GIVEN moins de 3 réalisations sont disponibles
WHEN la section réalisations devrait s'afficher
THEN seules les réalisations disponibles sont affichées
OR la section est masquée si aucune réalisation
```

### Scénario d'erreur 2 - Texte impact trop long
```gherkin
GIVEN le texte impact dépasse 100 caractères
WHEN la section réalisations s'affiche
THEN le texte est tronqué après 2 lignes avec "..."
AND la mise en page reste cohérente
```

## Conversation
- Aligné avec section S10 du PRD
- Card : secteur (badge), titre mission, impact 1 ligne, tags technos (2-4)
- Lien "Toutes les réalisations" vers /realisations (Lot 1.1)
- Confidentialité : pas de nom client si confidentiel
- Réalisations éditables depuis CMS Sanity
- Tags technos filtrés parmi les 11 stacks officielles

## Dépendances
- US-018 (CMS Sanity) pour gestion réalisations
- (Future) Page /realisations complète (Lot 1.1)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
