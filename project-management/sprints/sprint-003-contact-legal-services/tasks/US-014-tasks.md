# Taches - US-014 : Page Developpement web

## Informations US
- **Epic** : EPIC-002
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 5
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** consulter une page dediee au developpement web
**Afin de** comprendre les services, processus et technologies specifiques a ce pilier

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-014-01 | [FE] | Template ServicePage reutilisable | 3h | - | 🔲 |
| T-014-02 | [FE] | Donnees page dev web (contenu + FAQ) | 1.5h | - | 🔲 |
| T-014-03 | [FE] | Page /services/developpement-web | 1.5h | T-014-01, T-014-02 | 🔲 |
| T-014-04 | [FE] | Schema FAQPage structured data | 1h | T-014-02 | 🔲 |
| T-014-05 | [FE] | Navigation header + offres cards links | 1h | T-014-03 | 🔲 |
| T-014-06 | [TEST] | Tests unitaires page service | 1.5h | T-014-03 | 🔲 |

**Total estime** : 9.5h

---

## Detail des taches

### T-014-01 : Template ServicePage reutilisable
- **Type** : [FE]
- **Estimation** : 3h

**Fichiers a creer** :
- `src/components/services/service-page-template.tsx`
- `src/components/services/service-hero.tsx`
- `src/components/services/service-problems.tsx`
- `src/components/services/service-offers.tsx`
- `src/components/services/service-process.tsx`
- `src/components/services/service-faq.tsx`

**Specs** :
- Template compose de sections reutilisables
- Props typees : ServicePageData (hero, problems, offers, process, techs, faq, cta)
- Sections :
  1. Hero court (titre, description, CTA)
  2. Problemes clients (3-4 bullets)
  3. Cartes offre (sous-services)
  4. Processus specifique (etapes)
  5. Technologies filtrees (reutilise TechnologiesSection avec filtre)
  6. FAQ (accordion)
  7. CTA contact avec sujet pre-rempli

---

### T-014-02 : Donnees page dev web
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/data/services/developpement-web.ts`
- `src/data/services/types.ts`

**Contenu** :
- Hero : "Developpement web sur mesure"
- Problemes : site obsolete, refonte complexe, performance, scalabilite
- Offres : sites vitrines, plateformes metier, refonte, integrations
- Processus : decouverte, maquettes, dev, tests, MEP
- Technologies filtrees : Symfony, Laravel, PHP, React, Vue.js, Angular, Next.js
- FAQ : 5 questions ("Quel framework choisir ?", "Delai moyen ?", etc.)
- CTA : "Discuter de mon projet" → /contact?sujet=developpement-web

---

### T-014-03 : Page /services/developpement-web
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/app/services/developpement-web/page.tsx`

**Specs** :
- Import ServicePageTemplate + donnees dev web
- generateMetadata() : title, description uniques
- Server component

---

### T-014-04 : Schema FAQPage structured data
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/components/services/faq-schema.tsx`

**Specs** :
- JSON-LD FAQPage schema
- Injecte dans <head> via Next.js metadata
- Questions/reponses depuis les donnees FAQ

---

### T-014-05 : Navigation header + offres cards links
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a modifier** :
- `src/components/layout/header.tsx` (ajouter lien Services ou sous-menu)
- `src/components/sections/offers/offer-card.tsx` (lien "En savoir plus" → /services/xxx)

---

### T-014-06 : Tests unitaires page service
- **Type** : [TEST]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/components/services/__tests__/service-page-template.test.tsx`

**Tests** :
- Rendu toutes les sections (hero, problems, offers, process, faq, cta)
- FAQ accordion ouvre/ferme
- Schema FAQPage JSON-LD present
- CTA lien vers /contact?sujet=developpement-web
- Meta title correct
