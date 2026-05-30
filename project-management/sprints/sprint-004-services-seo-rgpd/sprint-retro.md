# Retrospective — Sprint 004

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-29 |
| Format | 4L (Liked, Learned, Lacked, Longed for) |
| Sprint | 004 - Services + SEO + RGPD |
| Velocite | 26 pts (100%) |

## Directive Fondamentale

> "Peu importe ce que nous decouvrons, nous comprenons et croyons sincerement
> que chacun a fait du mieux qu'il pouvait, compte tenu de ce qu'il savait
> a ce moment-la, de ses competences et capacites, des ressources disponibles,
> et de la situation."

---

## 4L

### ❤️ LIKED (Ce que j'ai aime)

- **1 seul CI run** pour la PR — le pre-commit hook Prettier a elimine les echecs formatage recurrents (4 → 1 run, amelioration massive)
- **Template service reutilisable** — creer 3 pages services en parallele avec le meme pattern de 12 lignes est tres efficace
- **Pas de tarteaucitronjs** — le bandeau cookies custom est plus leger, pas de SSR issues, pas de dependance externe complexe
- **4 agents paralleles** — chaque domaine (services, SEO, blog, RGPD) traite independamment sans conflits

### 📚 LEARNED (Ce que j'ai appris)

- **Conflit routes dynamiques Next.js** — deux segments dynamiques au meme niveau (`[slug]` et `[category]`) creent un conflit "Ambiguous app routes". Resolution : sous-route `/blog/category/[name]`
- **husky en monorepo** — quand git root ≠ npm root, il faut `cd .. && husky site/.husky` dans le script `prepare` et le hook `pre-commit` doit faire `cd site && npx lint-staged`
- **ServicePageData extensible** — ajouter un champ optionnel (`technologiesLabel?`) est backward-compatible et permet de varier le template sans casser les pages existantes
- **RSS 2.0 simple** — pas besoin du package `feed`, la generation XML manuelle est suffisante pour un flux basique

### ❌ LACKED (Ce qui a manque)

- **Test E2E Playwright** — toujours pas dans CI, les 130 tests sont tous des tests unitaires Jest. Les parcours utilisateur complets ne sont pas verifies automatiquement
- **Verification navigateur** — les pages services et le bandeau cookies n'ont pas ete testes manuellement dans un navigateur avant le merge
- **Contenu client** — les FAQs et descriptions sont du contenu placeholder generique. Pas de validation metier du contenu des pages services

### 🌟 LONGED FOR (Ce que j'aurais aime avoir)

- **Storybook ou preview components** — pouvoir voir chaque section isolement avant de les assembler
- **Lighthouse dans la PR** — le check Lighthouse est en CI mais en mode "warn", pas bloquant. Avoir un score minimum obligatoire serait plus sur
- **Preview deployments** — voir la PR deployee sur un sous-domaine temporaire avant merge (Cloudflare Pages preview)

---

## Suivi Actions Sprints Precedents

| Sprint | Action | Status |
|--------|--------|--------|
| S-003 | Pre-commit hook Prettier (husky + lint-staged) | ✅ Fait — 1 CI run au lieu de 4 |
| S-003 | Script build check local | ✅ Fait — `npm run check` |
| S-003 | Convention lazy-init services externes | ✅ Respectee |
| S-002 | Configurer Lighthouse CI | ✅ Fait (warn-level) |
| S-002 | Branch protection rules | ✅ Fait |
| S-001 | MAJ tech-spec pour Next.js 16 | ⚠️ Partiel |

---

## Actions Sprint 005

### Action 1 : Ajouter E2E Playwright dans CI

| Attribut | Valeur |
|----------|--------|
| Description | Configurer Playwright dans GitHub Actions pour tester les parcours cles (homepage → service → contact) |
| Deadline | Debut Sprint 005 |
| DoD | `npm run test:e2e` execute dans CI, au moins 3 scenarios couverts |
| Priorite | Haute |

### Action 2 : Lighthouse score minimum bloquant

| Attribut | Valeur |
|----------|--------|
| Description | Passer Lighthouse CI de "warn" a "error" avec seuils : perf >= 90, a11y >= 90, SEO >= 95 |
| Deadline | Sprint 005 |
| DoD | CI echoue si score en dessous des seuils |
| Priorite | Moyenne |

### Action 3 : Preview deployments sur PR

| Attribut | Valeur |
|----------|--------|
| Description | Configurer Cloudflare Pages preview ou Vercel preview pour voir les PR avant merge |
| Deadline | Sprint 005 |
| DoD | Chaque PR a un lien preview dans les comments GitHub |
| Priorite | Basse |

---

## Metriques Cles

| Metrique | S-001 | S-002 | S-003 | S-004 | Tendance |
|----------|-------|-------|-------|-------|----------|
| Velocite | 15 | 26 | 26 | 26 | → stable |
| Taux completion | 100% | 100% | 100% | 100% | → stable |
| Tests | 34 | 34 | 100 | 130 | ↗ +30% |
| CI runs/PR | 1 | 3 | 4 | 1 | ↘ ameliore |
| Nouvelles routes | 3 | 0 | 7 | 9 | ↗ |
| EPICs completes | 0 | 0 | 0 | 2 | ↗ |

---

## Ce que j'emporte

- Le pre-commit hook est le meilleur investissement DX de ce sprint — ROI immediat
- La strategie "template + data file" pour les pages services est un pattern a replique
- Les conflits de routes Next.js dynamiques sont un piege : toujours verifier qu'il n'y a pas deux segments dynamiques au meme niveau
- 2 EPICs completees (EPIC-002 + EPIC-004) — le projet avance bien vers la v1.0.0
- ~36 pts restants dans le backlog → 1.5 sprints pour finir
