# Taches - US-007 : Section contact accueil

## Informations US
- **Epic** : EPIC-001
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 5
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** remplir un formulaire de contact directement sur la page d'accueil
**Afin de** demander un devis ou un echange sans quitter la page

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-007-01 | [FE] | Composant ContactSection (2 colonnes) | 3h | T-025-03 | 🔲 |
| T-007-02 | [FE] | Bloc alternatives (RDV, LinkedIn, email) | 1.5h | - | 🔲 |
| T-007-03 | [FE] | Remplacer placeholder dans page.tsx | 0.5h | T-007-01, T-007-02 | 🔲 |
| T-007-04 | [FE] | Responsive + a11y | 1h | T-007-03 | 🔲 |
| T-007-05 | [TEST] | Tests unitaires ContactSection | 1.5h | T-007-01 | 🔲 |

**Total estime** : 7.5h

---

## Detail des taches

### T-007-01 : Composant ContactSection (2 colonnes)
- **Type** : [FE]
- **Estimation** : 3h

**Fichiers a creer** :
- `src/components/sections/contact-section.tsx`

**Specs** :
- id="contact" (ancre existante dans header/footer/CTAs)
- 2 colonnes : formulaire (gauche) + alternatives (droite)
- Titre H2 "Parlons de votre projet"
- Sous-titre "Reponse sous 24-48h ouvrees"
- Reutilise ContactForm de US-025
- Background bg-white, section padding standard py-24 sm:py-32

---

### T-007-02 : Bloc alternatives (RDV, LinkedIn, email)
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/components/sections/contact-alternatives.tsx`

**Specs** :
- Titre "Ou directement"
- Lien RDV (Calendly/Cal.com) avec icone calendrier
- Lien LinkedIn avec icone
- Email cliquable (mailto:contact@agentic-agency.fr)
- Icones SVG inline (coherent design system)

---

### T-007-03 : Remplacer placeholder dans page.tsx
- **Type** : [FE]
- **Estimation** : 0.5h

**Fichiers a modifier** :
- `src/app/page.tsx`

**Specs** :
- Supprimer section placeholder "A venir"
- Importer et inserer ContactSection
- Verifier ancre #contact fonctionne toujours

---

### T-007-04 : Responsive + a11y
- **Type** : [FE]
- **Estimation** : 1h

**Specs** :
- Mobile : colonnes empilees (form puis alternatives)
- Focus visible sur tous les elements interactifs
- Labels accessibles (aria-label si necessaire)
- Contraste WCAG AA

---

### T-007-05 : Tests unitaires ContactSection
- **Type** : [TEST]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/components/sections/__tests__/contact-section.test.tsx`

**Tests** :
- Rendu titre et sous-titre
- Presence du formulaire contact
- Presence du bloc alternatives (liens RDV, LinkedIn, email)
- Ancre id="contact" presente
