# Sprint 005 : Qualite + SEO avance + Securite

## Informations

| Attribut | Valeur |
|----------|--------|
| Numero | 005 |
| Debut | 2026-05-29 |
| Fin | 2026-06-12 |
| Duree | 10 jours |
| Capacite | 26 points |

## Sprint Goal

> "Le site atteint les standards de qualite production : Lighthouse >= 90, WCAG 2.1 AA, donnees structurees Schema.org, headers securite et partage LinkedIn optimise."

## Definition of Done (Rappel)

- [ ] Tests unitaires (couverture >= 80%)
- [ ] CI verte (lint, types, format, tests, build)
- [ ] Lighthouse >= 90 (perf, a11y, SEO)
- [ ] Responsive mobile/desktop
- [ ] Deployable sur Cloudflare Workers

## Sprint Backlog

| ID | Titre | Points | Epic | Status |
|----|-------|--------|------|--------|
| US-035 | Performance Lighthouse >= 90 | 5 | EPIC-005 | 🔵 To Do |
| US-036 | Accessibilite WCAG 2.1 AA | 5 | EPIC-005 | 🔵 To Do |
| US-032 | Structured data Schema.org | 3 | EPIC-005 | 🔵 To Do |
| US-037 | Open Graph optimise LinkedIn (toutes pages) | 2 | EPIC-005 | 🔵 To Do |
| US-022 | Bouton partage LinkedIn + OG blog | 3 | EPIC-003 | 🔵 To Do |
| US-042 | Headers securite (CSP, HSTS, etc.) | 2 | EPIC-006 | 🔵 To Do |
| US-034 | GEO - llms.txt et answer-first | 3 | EPIC-005 | 🔵 To Do |
| US-008 | Section temoignages clients | 3 | EPIC-001 | 🔵 To Do |

**Total engage : 26 points**

## Actions Retro S-004 (a integrer)

| Action | Priorite | Integree dans |
|--------|----------|---------------|
| E2E Playwright dans CI | Haute | T-TECH-01 |
| Lighthouse score bloquant en CI | Moyenne | US-035 + T-TECH-02 |
| Preview deployments sur PR | Basse | Reporte (v1.0.0) |

## Dependances

| US | Depend de | Status |
|----|-----------|--------|
| US-035 | US-038 (Setup Next.js) | ✅ Done (S-001) |
| US-036 | US-038 (Setup Next.js) | ✅ Done (S-001) |
| US-032 | US-031 (SEO technique) | ✅ Done (S-004) |
| US-037 | US-031 (Meta tags) | ✅ Done (S-004) |
| US-022 | US-021 (Page article), US-028 (Plausible) | ✅ Done (S-001, S-004) |
| US-042 | US-038 (Setup Next.js) | ✅ Done (S-001) |
| US-034 | US-014-017 (Pages services) | ✅ Done (S-003, S-004) |
| US-008 | Contenu client (placeholder OK) | ⚠️ Placeholder |

## Risques Identifies

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| Lighthouse score mobile < 85 | Moyenne | Moyen | Optimiser images, lazy-load, prefetch |
| CSP bloque scripts tiers (Plausible, Turnstile) | Moyenne | Moyen | Whitelist domaines dans CSP |
| Temoignages sans contenu reel | Haute | Faible | Utiliser placeholder credibles, remplacer plus tard |
| axe-core violations inattendues | Faible | Moyen | Audit progressif, corriger page par page |

## Notes

- US-008 (temoignages) utilise du contenu placeholder en attendant les vrais temoignages clients
- US-033 (Google Search Console) et US-041 (domaine) reportees — dependent du domaine final (differe v1.0.0)
- US-023 (preview brouillons CMS) reportee — pas de CMS Sanity, blog MDX statique
- US-037 (OG toutes pages) et US-022 (OG blog + share button) sont complementaires
- Preview deployments (action retro) reporte — Cloudflare Workers natif suffit pour le moment
