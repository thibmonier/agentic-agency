# Taches - US-036 : Accessibilite WCAG 2.1 AA

## Informations US

- **Epic** : EPIC-005
- **Persona** : P-001 - Claire (Dirigeante PME)
- **Story Points** : 5
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** dirigeante PME,
**Je veux** que le site soit accessible aux personnes en situation de handicap,
**Afin de** respecter la loi et elargir mon audience.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-036-01 | [FE-WEB] | Skip link + landmarks + audit HTML semantique | 2h | - | 🔲 |
| T-036-02 | [FE-WEB] | Navigation clavier + gestion du focus | 2h | - | 🔲 |
| T-036-03 | [FE-WEB] | Audit contraste couleurs + corrections | 1.5h | - | 🔲 |
| T-036-04 | [FE-WEB] | Accessibilite formulaires (labels, erreurs, aria) | 1.5h | - | 🔲 |
| T-036-05 | [FE-WEB] | Audit alt text images + attributs aria | 1h | - | 🔲 |
| T-036-06 | [TEST] | Tests accessibilite axe-core | 2h | T-036-01..05 | 🔲 |

**Total estime** : 10h

---

## Detail des taches

### T-036-01 : Skip link + landmarks + HTML semantique

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Ajouter skip link et verifier la structure semantique HTML.

**Actions** :
- Ajouter "Aller au contenu principal" (skip link) visible au focus
- Verifier landmarks : `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<aside>`
- Verifier hierarchie headings : un seul `<h1>` par page, progression logique h2 > h3
- Ajouter `role="navigation"` et `aria-label` aux nav multiples
- Verifier `lang="fr"` sur `<html>`

**Fichiers a modifier** :
- `src/app/layout.tsx` (skip link)
- `src/components/layout/header.tsx` (aria-label nav)
- `src/components/layout/footer.tsx` (aria-label nav)
- Pages avec headings incorrects

**Criteres** :
- [ ] Skip link fonctionnel (visible au Tab)
- [ ] Tous landmarks presents
- [ ] Un seul h1 par page
- [ ] Hierarchie headings logique

---

### T-036-02 : Navigation clavier + focus

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Garantir navigation complete au clavier sans pieges.

**Actions** :
- Verifier tab order logique sur toutes les pages
- Focus visible (outline) sur tous les elements interactifs
- Pas de focus trap (sauf modales — Radix Dialog gere deja)
- Elements interactifs accessibles : boutons, liens, accordion FAQ
- Mobile menu : focus trap dans Radix Dialog (deja gere)
- Accordion FAQ : `<details>/<summary>` natif (deja accessible)

**Fichiers a modifier** :
- `src/app/globals.css` (focus styles)
- Composants interactifs si focus manquant

**Criteres** :
- [ ] Tab parcourt tous elements interactifs
- [ ] Focus visible avec outline
- [ ] Pas de piege clavier
- [ ] Enter/Space activent boutons

---

### T-036-03 : Audit contraste couleurs

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Verifier et corriger les ratios de contraste.

**Actions** :
- Verifier contraste texte/fond : ratio >= 4.5:1 (normal), >= 3:1 (large)
- Navy #1e3a5f sur blanc : ratio 8.2:1 OK
- Accent #4a7bb7 sur blanc : verifier ratio (potentiellement insuffisant)
- Gris texte (gray-600 #4b5563) sur blanc : ratio 5.9:1 OK
- Gris texte sur gray-50 : verifier
- Boutons : texte blanc sur navy — verifier
- Corriger les couleurs insuffisantes

**Fichiers a modifier** :
- `src/app/globals.css` (variables couleur si besoin)
- Composants avec contraste insuffisant

**Criteres** :
- [ ] Ratio >= 4.5:1 pour texte normal
- [ ] Ratio >= 3:1 pour texte large (>= 18px)
- [ ] Tous les etats (hover, focus, disabled) conformes

---

### T-036-04 : Accessibilite formulaires

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Rendre le formulaire de contact pleinement accessible.

**Actions** :
- Verifier que chaque input a un `<label>` associe (htmlFor)
- Messages d'erreur lies par `aria-describedby`
- `aria-invalid="true"` sur champs en erreur
- `aria-required="true"` sur champs obligatoires
- `aria-live="polite"` pour messages de succes/erreur du formulaire
- Turnstile widget : verifier accessibilite (ou ajouter aria-label)

**Fichiers a modifier** :
- `src/components/forms/contact-form.tsx`
- `src/components/forms/turnstile-widget.tsx`

**Criteres** :
- [ ] Tous inputs ont des labels
- [ ] Erreurs liees par aria-describedby
- [ ] Messages dynamiques annonces par aria-live
- [ ] Navigation clavier fluide dans le formulaire

---

### T-036-05 : Audit alt text + aria

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : -

**Description** :
Verifier les textes alternatifs et attributs ARIA.

**Actions** :
- Images informatives : alt descriptif
- Images decoratives : `alt=""`
- Icones interactives : `aria-label`
- Liens avec icone seule : `aria-label` ou texte masque
- SVG : `role="img"` + `aria-label`

**Fichiers a modifier** :
- Composants avec images/icones

**Criteres** :
- [ ] Toutes images informatives ont un alt
- [ ] Images decoratives ont alt=""
- [ ] Icones interactives ont aria-label

---

### T-036-06 : Tests accessibilite axe-core

- **Type** : [TEST]
- **Estimation** : 2h
- **Depend de** : T-036-01..05

**Description** :
Integrer axe-core dans les tests pour valider l'accessibilite.

**Actions** :
- Installer `@axe-core/react` ou `jest-axe`
- Ajouter tests axe sur pages principales (home, service, blog, contact)
- Verifier 0 violations critiques
- Ajouter dans CI si pas deja fait

**Fichiers a creer** :
- `src/app/__tests__/accessibility.test.tsx`

**Dependances** :
- `jest-axe` (devDependency)

**Criteres** :
- [ ] 0 violations critiques axe-core
- [ ] Tests sur home, service, blog, contact
- [ ] Integre dans CI
