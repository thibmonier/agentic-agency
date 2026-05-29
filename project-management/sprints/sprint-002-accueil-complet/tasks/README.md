# Taches — Sprint 002 Accueil Complet + Infra

## Vue d'ensemble

| US | Titre | Points | Taches | Heures | Statut |
|----|-------|--------|--------|--------|--------|
| US-039 | Cloudflare Pages | 3 | 5 | 6h | 🔲 |
| US-040 | CI/CD GitHub Actions | 5 | 6 | 10h | 🔲 |
| US-005 | Offres 4 piliers | 5 | 5 | 10h | 🔲 |
| US-004 | Delivery moderne | 3 | 3 | 6h | 🔲 |
| US-011 | Technologies 11 stacks | 2 | 3 | 4h | 🔲 |
| US-012 | Valeurs 4 piliers | 2 | 3 | 4h | 🔲 |
| US-013 | Approche timeline | 3 | 3 | 6h | 🔲 |
| US-006 | CTA milieu | 1 | 2 | 2h | 🔲 |
| US-003 | Confiance clients | 2 | 3 | 4h | 🔲 |
| TECH | Transverses | - | 3 | 5h | 🔲 |

**Total** : 36 taches | 57h | 26 points

## Repartition par type

| Type | Taches | Heures | % |
|------|--------|--------|---|
| [FE] | 18 | 32h | 56% |
| [OPS] | 9 | 14.5h | 25% |
| [TEST] | 7 | 8.5h | 15% |
| [DOC] | 2 | 1.5h | 3% |

## Fichiers

### Priorite 1 — Infra (bloquant)
- [US-039 — Cloudflare Pages](./US-039-tasks.md)
- [US-040 — CI/CD GitHub Actions](./US-040-tasks.md)

### Priorite 2 — Sections accueil
- [US-005 — Offres 4 piliers](./US-005-tasks.md)
- [US-004 — Delivery moderne](./US-004-tasks.md)
- [US-011 — Technologies 11 stacks](./US-011-tasks.md)
- [US-012 — Valeurs 4 piliers](./US-012-tasks.md)
- [US-013 — Approche timeline](./US-013-tasks.md)
- [US-006 — CTA milieu](./US-006-tasks.md)
- [US-003 — Confiance clients](./US-003-tasks.md)

### Transverses
- [Taches techniques](./technical-tasks.md)

## Conventions

- **ID** : T-[US]-[Numero] (ex: T-005-01) ou T-TECH-[Numero]
- **Taille** : 0.5h - 8h max
- **Statuts** : 🔲 A faire | 🔄 En cours | 👀 Review | ✅ Done | 🚫 Bloque
- **Types** : [FE] Frontend | [OPS] Infra | [TEST] Tests | [DOC] Documentation | [REV] Review

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 + React 19 |
| Langage | TypeScript (strict) |
| Styles | Tailwind CSS 4 |
| Animations | Framer Motion |
| UI | Radix UI |
| Tests | Jest + React Testing Library + Playwright |
| CI/CD | GitHub Actions |
| Hebergement | Cloudflare Pages |
