# US-005 : Section offres (4 piliers cartes)

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir les 4 piliers d'offres de l'agence avec des cartes détaillées** afin de **identifier rapidement le service qui correspond à mon besoin**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section offres
WHEN la section devient visible
THEN je vois 4 piliers : Développement web, Applications métier, Applications mobiles, Conseil
AND chaque pilier a un titre H2 + description courte
AND chaque pilier contient 2-3 cartes offre (titre, description, CTA)
AND chaque carte a un lien "En savoir plus" vers la page service
```

### Scénario alternatif 1 - Clic sur carte
```gherkin
GIVEN je clique sur une carte offre
WHEN le lien est activé
THEN je suis redirigé vers la page service correspondante
AND l'ancre scroll vers la section offre spécifique (optionnel)
```

### Scénario alternatif 2 - Responsive mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section offres s'affiche
THEN les cartes sont empilées verticalement
AND chaque carte reste lisible sans scroll horizontal
AND les CTAs sont accessibles facilement
```

### Scénario d'erreur 1 - Texte trop long
```gherkin
GIVEN une description de carte dépasse 150 caractères
WHEN la section offres s'affiche
THEN le texte est tronqué avec "..." après 3 lignes
OR un bouton "Voir plus" développe le texte
```

### Scénario d'erreur 2 - Lien page service cassé
```gherkin
GIVEN le lien vers une page service est invalide
WHEN je clique sur "En savoir plus"
THEN je suis redirigé vers /services (page générale)
OR un message d'erreur 404 stylisé est affiché
```

## Conversation
- Aligné avec section S05 du PRD
- 4 piliers : Développement web, Applications métier (phare), Applications mobiles, Conseil
- Minimum 8 cartes offre au total (2-3 par pilier)
- Exemple pilier Applications métier : "Application sur mesure", "Évolution & dette technique", "Intégration SI & APIs"
- Fourchettes prix optionnelles (Could)
- Cartes éditables depuis CMS Sanity

## Dépendances
- US-014, US-015, US-016, US-017 (Pages services) pour liens

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
