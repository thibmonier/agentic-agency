# Taches - US-009 : Apercu blog (3 derniers articles)

## Informations US
- **Epic** : EPIC-001
- **Persona** : P-002 — DSI/CTO
- **Story Points** : 3
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-002
**Je veux** voir les 3 derniers articles du blog technique sur la page d'accueil
**Afin de** evaluer rapidement le niveau d'expertise technique de l'agence

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-009-01 | [FE] | Composant BlogPreviewSection | 2.5h | - | 🔲 |
| T-009-02 | [FE] | Integrer dans page.tsx (avant contact) | 0.5h | T-009-01 | 🔲 |
| T-009-03 | [TEST] | Tests unitaires BlogPreviewSection | 1h | T-009-01 | 🔲 |

**Total estime** : 4h

---

## Detail des taches

### T-009-01 : Composant BlogPreviewSection
- **Type** : [FE]
- **Estimation** : 2.5h

**Fichiers a creer** :
- `src/components/sections/blog-preview-section.tsx`

**Specs** :
- Server component (appelle getAllPosts() cote serveur)
- Titre H2 "Notes de terrain"
- Sous-titre "Retours d'experience et reflexions techniques"
- 3 derniers articles (tri par date DESC)
- Reutilise BlogCard existant (`src/components/blog/blog-card.tsx`)
- Lien "Tous les articles →" vers /blog
- Grille responsive : 1 col mobile, 3 cols desktop
- Si < 3 articles : affiche ceux disponibles, layout adapte
- Background bg-white, section padding standard

---

### T-009-02 : Integrer dans page.tsx
- **Type** : [FE]
- **Estimation** : 0.5h

**Fichiers a modifier** :
- `src/app/page.tsx`

**Specs** :
- Importer BlogPreviewSection
- Inserer entre ApproachTimeline et ContactSection
- Ordre final sections :
  1. Hero
  2. Stats
  3. TrustSection
  4. DeliverySection
  5. OffersSection
  6. CtaBanner
  7. TechnologiesSection
  8. ValuesSection
  9. ApproachTimeline
  10. **BlogPreviewSection** (nouveau)
  11. ContactSection (remplace placeholder)

---

### T-009-03 : Tests unitaires BlogPreviewSection
- **Type** : [TEST]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/components/sections/__tests__/blog-preview-section.test.tsx`

**Tests** :
- Rendu titre "Notes de terrain"
- Affichage de 3 cartes articles (mock getAllPosts)
- Lien "Tous les articles" vers /blog
- Gestion 0 articles (section masquee ou message)
