# Taches - US-010 : Section realisations clients

## Informations US

- **Epic** : EPIC-001
- **Persona** : P-001 - Claire (Dirigeante PME)
- **Story Points** : 2
- **Sprint** : sprint-006-polish-pre-launch

## Resume

**En tant que** dirigeante PME,
**Je veux** voir des exemples de projets realises,
**Afin de** evaluer la pertinence de l'agence pour mon besoin.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-010-01 | [FE-WEB] | Donnees realisations + types TypeScript | 1h | - | 🔲 |
| T-010-02 | [FE-WEB] | Composant ProjectsSection (grille + cartes) | 2.5h | T-010-01 | 🔲 |
| T-010-03 | [FE-WEB] | Integration section dans homepage | 0.5h | T-010-02 | 🔲 |
| T-010-04 | [TEST] | Tests composant realisations | 1.5h | T-010-02 | 🔲 |

**Total estime** : 5.5h

---

## Detail des taches

### T-010-01 : Donnees realisations + types

- **Type** : [FE-WEB]
- **Estimation** : 1h

**Description** :
Creer fichier donnees et types pour les projets realises.

**Types** :
```ts
interface Project {
  title: string;
  sector: string;
  impact: string;
  technologies: string[];
  service: string;
}
```

**Actions** :
- Creer `src/data/projects.ts`
- 3-4 projets placeholder credibles (pas de lorem ipsum)
- Secteurs varies : pharma, e-commerce, fintech, industrie
- Tags technos : Next.js, Symfony, Flutter, etc.
- Impact en une phrase mesurable ("40% de gain de performance", "Deploiement 3x plus rapide")

**Criteres** :
- [ ] Interface TypeScript definie
- [ ] Minimum 3 projets placeholder
- [ ] Contenu credible et realiste

---

### T-010-02 : Composant ProjectsSection

- **Type** : [FE-WEB]
- **Estimation** : 2.5h

**Description** :
Section realisations pour homepage. Pattern similaire a TestimonialsSection.

**Design** :
- Fond blanc, py-24 sm:py-32
- Titre : "Nos realisations" — h2 navy, text-center
- Sous-titre : "Des projets concrets, des resultats mesurables"
- Grille : grid cols-1 md:cols-2 lg:cols-3 gap-8
- Chaque carte :
  - Badge secteur (rounded-full, bg coloree selon secteur)
  - Titre projet (font-semibold, navy)
  - Impact (text-gray-600, italic)
  - Tags technos (flex wrap, bg-gray-100 px-2 py-1 rounded text-xs)
  - Tag service (similaire temoignages)
- Framer Motion : fade-in + stagger
- Section cachee si < 3 projets

**Fichiers a creer** :
- `src/components/sections/projects-section.tsx`

**Criteres** :
- [ ] Grille responsive 1/2/3 colonnes
- [ ] Badge secteur colore
- [ ] Tags technos
- [ ] Fade-in animations
- [ ] Section cachee si < 3

---

### T-010-03 : Integration homepage

- **Type** : [FE-WEB]
- **Estimation** : 0.5h

**Description** :
Ajouter la section realisations dans la homepage.

**Actions** :
- Placer entre TestimonialsSection et BlogPreviewSection
- Import du composant

**Fichiers a modifier** :
- `src/app/page.tsx`

**Criteres** :
- [ ] Section visible sur homepage
- [ ] Position coherente

---

### T-010-04 : Tests realisations

- **Type** : [TEST]
- **Estimation** : 1.5h

**Description** :
Tests unitaires composant ProjectsSection.

**Actions** :
- Test render 3+ projets
- Test section cachee si < 3
- Test contenu affiche (titre, impact, technos, secteur)
- Test props override pour testabilite

**Fichiers a creer** :
- `src/components/sections/__tests__/projects-section.test.tsx`

**Criteres** :
- [ ] Render normal + cas < 3
- [ ] Contenu verifie
