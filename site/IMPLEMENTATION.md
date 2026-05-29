# Implémentation Sprint 1 & 2

## Sprint 2 — Accueil Complet + Infra

**Date** : 2026-05-29
**Objectif** : La page d'accueil affiche les 13 sections complètes et le site est déployé sur Cloudflare Pages avec CI/CD.

### US Complétées

#### ✅ US-039 : Configuration Cloudflare Pages (3 pts)
- Repo GitHub public : `thibmonier/agentic-agency`
- Deploy via OpenNext Cloudflare adapter
- URL : https://agentic-agency.thibaut-monier.workers.dev/
- `wrangler.jsonc` + `open-next.config.ts` configurés
- Deploy automatique sur push main

#### ✅ US-040 : Pipeline CI/CD GitHub Actions (5 pts)
- `.github/workflows/ci.yml` avec : lint, type-check, format-check, tests, build
- Jest + React Testing Library configurés
- Prettier configuré (`.prettierrc` + `.prettierignore`)
- Lighthouse CI (warn-level, non-bloquant)
- Branch protection rules sur main (PR obligatoire)

#### ✅ US-005 : Section Offres — 4 piliers (5 pts)
- `offers/offers-section.tsx` + `offer-pillar.tsx` + `offer-card.tsx`
- 4 piliers : Dev web, Apps métier, Apps mobiles, Conseil
- 10 cartes offre avec CTA "En savoir plus"
- `src/data/offers.ts` données typées

#### ✅ US-004 : Section Delivery Moderne (3 pts)
- `delivery-section.tsx` 2 colonnes (texte + visuel)
- Timeline visuelle : Sprint → Review → Deploy → Monitor
- CTA vers /blog

#### ✅ US-011 : Section Technologies — 11 stacks (2 pts)
- `technologies-section.tsx` grille responsive
- 11 stacks avec versions (Symfony 8.0, React 19, etc.)
- Avatars couleur par catégorie (backend/frontend/mobile)
- `src/data/technologies.ts`

#### ✅ US-012 : Section Valeurs — 4 piliers (2 pts)
- `values-section.tsx` grille 2×2
- 4 valeurs : Fiabilité, Rigueur, Partenariat, Pragmatisme
- Icônes SVG inline (shield, check-circle, users, target)
- CTA "Parler de votre projet" → #contact

#### ✅ US-013 : Section Approche — Timeline 5 étapes (3 pts)
- `approach-timeline.tsx` horizontal (desktop) / vertical (mobile)
- 5 étapes : Discovery, Conception, Dev itératif, Recette, Transfert
- CSS-only responsive (pas de JS)
- Ligne de connexion visuelle

#### ✅ US-006 : Bandeau CTA Milieu (1 pt)
- `cta-banner.tsx` fond navy `#1e3a5f`
- "Prêt à accélérer votre produit ?" + CTA blanc
- Contraste WCAG AA

#### ✅ US-003 : Section Confiance Clients (2 pts)
- `trust-section.tsx` 8 secteurs en badges
- Fintech, Santé, Industrie, Retail, Logistique, Éducation, Immobilier, Assurance
- Avatars première lettre

### Tests

| Type | Suites | Tests | Statut |
|------|--------|-------|--------|
| Unit (Jest) | 8 | 34 | ✅ |
| E2E (Playwright) | 1 | 7 | ✅ |
| Lighthouse CI | - | 4 audits | ✅ (warn) |

### Fichiers Créés (Sprint 2)

#### Composants sections
- `src/components/sections/trust-section.tsx`
- `src/components/sections/delivery-section.tsx`
- `src/components/sections/offers/` (4 fichiers)
- `src/components/sections/cta-banner.tsx`
- `src/components/sections/technologies-section.tsx`
- `src/components/sections/values-section.tsx`
- `src/components/sections/approach-timeline.tsx`

#### Données
- `src/data/offers.ts`
- `src/data/technologies.ts`
- `src/data/values.ts`
- `src/data/approach.ts`
- `src/data/trust.ts`

#### Tests
- `src/components/sections/__tests__/` (6 fichiers)
- `src/components/sections/offers/__tests__/offers-section.test.tsx`
- `tests/e2e/homepage.spec.ts`

#### Configuration
- `.github/workflows/ci.yml`
- `wrangler.jsonc`
- `open-next.config.ts`
- `.lighthouserc.json`
- `.prettierrc` + `.prettierignore`
- `jest.config.ts` + `jest.setup.ts`
- `playwright.config.ts`

### Sections Page Accueil (ordre)

1. Hero ← Sprint 1
2. Stats ← Sprint 1
3. Confiance (US-003)
4. Delivery (US-004)
5. Offres (US-005)
6. CTA milieu (US-006)
7. Technologies (US-011)
8. Valeurs (US-012)
9. Approche (US-013)
10. Contact (placeholder → Sprint 3)

---

## Sprint 1 — Walking Skeleton

**Date** : 2026-05-29
**Objectif** : Flux minimal complet de bout en bout.

### US Complétées

- ✅ US-038 : Setup Next.js 16 + TypeScript + Tailwind 4
- ✅ US-001 : Hero section avec CTAs
- ✅ US-002 : Section stats (4 indicateurs)
- ✅ Header sticky + menu mobile (Radix UI Dialog)
- ✅ Footer 4 colonnes
- ✅ US-018 : MDX + article exemple
- ✅ US-019 : Page liste blog avec filtres
- ✅ US-021 : Page article dynamique /blog/[slug]

### Technologies

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | 16.2.6 | Framework (App Router, OpenNext) |
| React | 19.2.4 | UI |
| TypeScript | 5 | Type safety (strict) |
| Tailwind CSS | 4 | Styles |
| Radix UI | latest | Primitives a11y |
| Framer Motion | latest | Animations |
| Jest | 30 | Tests unitaires |
| Playwright | latest | Tests E2E |
| OpenNext | 1.19.11 | Cloudflare adapter |

**Statut** : ✅ TERMINÉ
