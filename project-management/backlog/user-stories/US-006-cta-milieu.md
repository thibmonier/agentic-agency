# US-006 : Bandeau CTA milieu page

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Should
- **Points :** 1
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir un appel à l'action visible au milieu de la page** afin de **pouvoir contacter l'agence facilement sans scroller jusqu'en bas**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers le milieu de la page d'accueil
WHEN la section CTA milieu devient visible
THEN je vois un bandeau avec fond contrasté
AND je vois le texte "Prêt à accélérer votre produit ?"
AND je vois un CTA "Échanger sur votre projet" qui scroll vers #contact
```

### Scénario alternatif 1 - Clic CTA
```gherkin
GIVEN je clique sur le CTA "Échanger sur votre projet"
WHEN le lien est activé
THEN la page scroll smoothly vers la section #contact
AND le focus est mis sur le premier champ du formulaire
```

### Scénario alternatif 2 - Mobile
```gherkin
GIVEN je visite depuis un mobile
WHEN la section CTA milieu s'affiche
THEN le bandeau occupe toute la largeur
AND le texte et le CTA sont empilés verticalement si nécessaire
AND le CTA reste facilement cliquable (min 44×44px)
```

### Scénario d'erreur 1 - Scroll vers section manquante
```gherkin
GIVEN la section #contact n'existe pas ou est masquée
WHEN je clique sur le CTA
THEN je suis redirigé vers /contact (page dédiée)
OR un message d'erreur est affiché
```

### Scénario d'erreur 2 - Contraste insuffisant
```gherkin
GIVEN le bandeau a un contraste insuffisant (< 4.5:1)
WHEN un utilisateur malvoyant visite la page
THEN le texte reste lisible avec contraste ≥ 4.5:1
AND l'accessibilité WCAG AA est respectée
```

## Conversation
- Aligné avec section S06 du PRD
- Bandeau simple avec fond contrasté
- Texte court et incitatif
- CTA pointe vers #contact (section formulaire)
- Alternative : pointer vers /contact si formulaire non présent sur accueil

## Dépendances
- US-007 (Section contact) pour lien

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
