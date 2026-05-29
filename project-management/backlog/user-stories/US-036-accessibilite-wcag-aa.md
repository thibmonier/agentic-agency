# US-036 : Accessibilité WCAG 2.1 AA

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **que le site soit accessible aux personnes en situation de handicap** afin de **respecter la loi et élargir mon audience**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je lance un audit Lighthouse Accessibility
WHEN l'audit se termine
THEN le score Accessibility est ≥ 95
AND je lance axe DevTools sans erreur critique
AND je navigue au clavier (Tab/Enter/Espace) sur toutes les pages sans blocage
```

### Scénario alternatif 1 - Contraste couleurs
```gherkin
GIVEN je vérifie le contraste avec WebAIM Contrast Checker
WHEN je teste texte normal et texte large
THEN le ratio est ≥ 4.5:1 (texte normal) et ≥ 3:1 (texte large)
AND tous les CTAs, liens, labels ont un contraste conforme
```

### Scénario alternatif 2 - Navigation clavier
```gherkin
GIVEN je navigue au clavier uniquement (sans souris)
WHEN j'appuie sur Tab pour avancer, Shift+Tab pour reculer
THEN tous les éléments interactifs sont accessibles (liens, boutons, formulaire)
AND un outline visible indique le focus clavier
AND je peux soumettre le formulaire avec Enter
AND je peux fermer les modals avec Esc
```

### Scénario d'erreur 1 - axe-core erreur critique
```gherkin
GIVEN je lance axe-core sur une page
WHEN des erreurs critiques sont détectées (ex: images sans alt, labels manquants)
THEN le pipeline CI/CD échoue
AND un rapport liste les erreurs à corriger
AND le code doit être corrigé avant merge
```

### Scénario d'erreur 2 - Focus piège clavier
```gherkin
GIVEN je navigue au clavier dans un modal ouvert
WHEN j'appuie sur Tab plusieurs fois
THEN le focus reste dans le modal (focus trap)
AND je peux sortir avec Esc ou bouton "Fermer"
AND le focus ne saute pas hors du modal (erreur WCAG 2.4.3)
```

## Conversation
- Aligné avec section NF02 du PRD
- Niveau cible : WCAG 2.1 AA (niveau légal France, RGAA)

**Critères WCAG 2.1 AA obligatoires :**

1. **Contraste (1.4.3) :**
   - Ratio ≥ 4.5:1 texte normal (< 24px)
   - Ratio ≥ 3:1 texte large (≥ 24px)
   - Vérifier : texte/fond, CTAs, liens, labels formulaire

2. **Navigation clavier (2.1.1) :**
   - Tous éléments interactifs accessibles Tab/Enter/Espace
   - Pas de piège clavier
   - Ordre de tabulation logique
   - Focus visible (2.4.7)

3. **Labels formulaires (3.3.2) :**
   - Chaque input a un <label for> associé
   - Messages erreur explicites et liés à l'input (aria-describedby)

4. **Images (1.1.1) :**
   - alt descriptifs (pas "image1.jpg")
   - Images décoratives : alt=""

5. **HTML sémantique (1.3.1) :**
   - <header>, <nav>, <main>, <article>, <footer>
   - Landmarks ARIA si nécessaire (role="navigation", aria-label)

6. **Focus visible (2.4.7) :**
   - Outline visible sur focus clavier
   - Pas de outline: none sans remplacement

7. **Hiérarchie titres (1.3.1) :**
   - H1 unique > H2 > H3 (pas de saut)

**Outils validation :**
- **Lighthouse Accessibility** : score ≥ 95 (automatique CI/CD)
- **axe DevTools** : 0 erreur critique, warnings acceptables
- **Tests clavier manuels** : navigation complète sans souris
- **WebAIM Contrast Checker** : tous contrastes validés
- **NVDA/JAWS** (optionnel) : tests lecteur d'écran

**Implémentation :**
- **Radix UI** : composants headless avec ARIA natif (recommandé)
- **Focus trap** : librairie focus-trap-react pour modals
- **Skip links** : lien "Aller au contenu principal" (masqué jusqu'au focus)
- **aria-label/aria-labelledby** : pour éléments sans label visible
- **aria-live** : pour notifications dynamiques (formulaire soumis, erreurs)

**CI/CD validation :**
- Lighthouse Accessibility ≥ 95
- axe-core 0 erreur critique
- Pa11y ou jest-axe pour tests automatisés

## Dépendances
- US-038 (Setup Next.js) pour composants accessibles

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
