# Plan : Décomposition Sprint 002 — Accueil Complet + Infra

## Contexte

Sprint 002 démarre le 2026-05-29. 9 US, 26 points, 2 semaines.
Le projet est un **site Next.js 16 + React 19 + TypeScript + Tailwind 4** (pas Symfony/Flutter).
Composants existants : `hero`, `stats`, `blog-card`, `header`, `footer`, `button`.
Les types de tâches du template Symfony/Flutter sont **inadaptés** — adaptation au stack réel.

## Types de tâches adaptés

| Type | Préfixe | Exemples |
|------|---------|----------|
| Frontend | `[FE]` | Composant React, page, data, responsive |
| Tests | `[TEST]` | Jest unit, Playwright E2E, Lighthouse |
| Ops/Infra | `[OPS]` | Cloudflare, CI/CD, GitHub Actions |
| Documentation | `[DOC]` | README, process |
| Review | `[REV]` | Code review |

Pas de `[DB]`, `[BE]`, `[FE-MOB]` — projet statique frontend only.

## Fichiers à créer

```
project-management/sprints/sprint-002-accueil-complet/
├── sprint-goal.md                    (existe)
├── sprint-dependencies.md            (à créer)
├── tasks/
│   ├── README.md                     (vue d'ensemble)
│   ├── US-039-tasks.md               (Cloudflare Pages)
│   ├── US-040-tasks.md               (CI/CD GitHub Actions)
│   ├── US-005-tasks.md               (Offres 4 piliers)
│   ├── US-004-tasks.md               (Delivery moderne)
│   ├── US-011-tasks.md               (Technologies 11 stacks)
│   ├── US-012-tasks.md               (Valeurs 4 piliers)
│   ├── US-013-tasks.md               (Approche timeline)
│   ├── US-006-tasks.md               (CTA milieu)
│   ├── US-003-tasks.md               (Confiance clients)
│   └── technical-tasks.md            (tâches transverses)
└── task-board.md                     (remplace board.md existant)
```

## Estimation par US

| US | Titre | Pts | Tâches | Heures |
|----|-------|-----|--------|--------|
| US-039 | Cloudflare Pages | 3 | 5 | 6h |
| US-040 | CI/CD GitHub Actions | 5 | 6 | 10h |
| US-005 | Offres 4 piliers | 5 | 5 | 10h |
| US-004 | Delivery moderne | 3 | 3 | 6h |
| US-011 | Technologies 11 stacks | 2 | 3 | 4h |
| US-012 | Valeurs 4 piliers | 2 | 3 | 4h |
| US-013 | Approche timeline | 3 | 3 | 6h |
| US-006 | CTA milieu | 1 | 2 | 2h |
| US-003 | Confiance clients | 2 | 3 | 4h |
| TECH | Transverses | - | 3 | 5h |
| **TOTAL** | | **26** | **36** | **57h** |

Ratio : ~2.2h/point. Capacité 2 semaines : ~60h. Réaliste.

## Ordre d'implémentation

1. US-039 → US-040 (infra bloquante)
2. US-005 → US-004 → US-011 → US-012 (sections complexes d'abord)
3. US-013 → US-006 → US-003 (sections restantes)
4. T-TECH (intégration + E2E)

## Vérification

- Chaque composant testable via `npm run dev`
- CI/CD validée par PR test
- Deploy Cloudflare vérifié manuellement
- Task board mis à jour à chaque avancement
