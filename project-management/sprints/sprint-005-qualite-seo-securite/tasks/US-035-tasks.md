# Taches - US-035 : Performance Lighthouse >= 90

## Informations US

- **Epic** : EPIC-005
- **Persona** : P-001 - Claire (Dirigeante PME)
- **Story Points** : 5
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** dirigeante PME,
**Je veux** que le site charge en moins de 2.5 secondes,
**Afin de** ne pas abandonner avant d'avoir vu les offres.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-035-01 | [FE-WEB] | Optimisation images (next/image, WebP, priority, sizes) | 2h | - | 🔲 |
| T-035-02 | [FE-WEB] | Optimisation fonts (preload, font-display swap, subset) | 1h | - | 🔲 |
| T-035-03 | [FE-WEB] | Lazy loading sections below fold (dynamic imports) | 2h | - | 🔲 |
| T-035-04 | [FE-WEB] | Next.js config optimisation (compression, headers cache) | 1h | - | 🔲 |
| T-035-05 | [OPS] | Lighthouse CI bloquant dans GitHub Actions | 2h | T-TECH-01 | 🔲 |
| T-035-06 | [TEST] | Tests performance + validation Core Web Vitals | 1h | T-035-01..04 | 🔲 |

**Total estime** : 9h

---

## Detail des taches

### T-035-01 : Optimisation images

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Auditer et optimiser toutes les images du site avec next/image.

**Actions** :
- Remplacer `<img>` par `<Image>` partout
- Ajouter `priority` aux images above-the-fold (hero)
- Configurer `sizes` pour responsive (eviter surdimensionnement)
- Verifier format WebP/AVIF automatique via Next.js
- Ajouter `placeholder="blur"` si images statiques

**Fichiers a modifier** :
- `src/components/sections/hero.tsx`
- `src/components/services/service-hero.tsx`
- `src/components/blog/blog-card.tsx`
- Tout composant avec images

**Criteres** :
- [ ] Toutes images utilisent next/image
- [ ] Hero images marquees `priority`
- [ ] Attribut `sizes` present
- [ ] LCP < 2.5s

---

### T-035-02 : Optimisation fonts

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : -

**Description** :
Optimiser le chargement des polices Inter et Space Grotesk.

**Actions** :
- Verifier `font-display: swap` (Next.js fonts le fait par defaut)
- Limiter les subsets charges (latin uniquement)
- Preload font critique (Inter regular)
- Verifier pas de FOIT/FOUT visible

**Fichiers a modifier** :
- `src/app/layout.tsx` (configuration fonts)

**Criteres** :
- [ ] font-display: swap actif
- [ ] Subset latin uniquement
- [ ] Pas de layout shift au chargement fonts

---

### T-035-03 : Lazy loading sections below fold

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Charger dynamiquement les sections non visibles au premier affichage.

**Actions** :
- Identifier sections below fold sur homepage
- `dynamic(() => import(...), { ssr: true })` pour sections lourdes
- Lazy-load Framer Motion animations (ne pas charger si non visible)
- Verifier que SSR est preserve (pas de flash)

**Fichiers a modifier** :
- `src/app/page.tsx` (homepage)
- Sections avec animations lourdes

**Criteres** :
- [ ] Bundle JS initial < 200 KB
- [ ] Sections below fold chargees en lazy
- [ ] Pas de flash au chargement

---

### T-035-04 : Next.js config optimisation

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : -

**Description** :
Optimiser la configuration Next.js pour la performance.

**Actions** :
- Ajouter headers Cache-Control (assets statiques : 1 an, pages : revalidate)
- Verifier compression gzip/brotli (Cloudflare le fait par defaut)
- Configurer `images.formats` pour WebP/AVIF
- Verifier tree-shaking et bundle analysis

**Fichiers a modifier** :
- `next.config.ts`

**Criteres** :
- [ ] Cache-Control headers configures
- [ ] Images optimisees automatiquement
- [ ] Build size raisonnable

---

### T-035-05 : Lighthouse CI bloquant

- **Type** : [OPS]
- **Estimation** : 2h
- **Depend de** : T-TECH-01

**Description** :
Configurer Lighthouse CI dans GitHub Actions avec seuils bloquants.

**Actions** :
- Ajouter step Lighthouse dans CI workflow
- Seuils : perf >= 90, a11y >= 90, SEO >= 95, best-practices >= 90
- Mode "error" (pas "warn") — bloque la PR si score insuffisant
- Upload rapport Lighthouse comme artifact

**Fichiers a creer/modifier** :
- `.github/workflows/ci.yml` (ajouter step)
- `lighthouserc.json` (configuration seuils)

**Criteres** :
- [ ] CI echoue si Lighthouse < seuils
- [ ] Rapport accessible dans artifacts PR
- [ ] Seuils : perf 90, a11y 90, SEO 95

---

### T-035-06 : Tests performance

- **Type** : [TEST]
- **Estimation** : 1h
- **Depend de** : T-035-01..04

**Description** :
Valider les optimisations performance.

**Actions** :
- Test que les images critiques ont `priority`
- Test que les fonts utilisent swap
- Verifier bundle size dans CI
- Documenter les scores Lighthouse obtenus

**Fichiers a creer** :
- `src/app/__tests__/performance.test.tsx`

**Criteres** :
- [ ] Tests passent
- [ ] Scores Lighthouse documentes
