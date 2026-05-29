# Sprint 004 : Services + SEO + RGPD

## Informations

| Attribut | Valeur |
|----------|--------|
| Numero | 004 |
| Debut | 2026-05-29 |
| Fin | 2026-06-12 |
| Duree | 10 jours |
| Capacite | 26 points |

## Sprint Goal

> "Les 4 pages services sont completes, le site est RGPD-conforme avec analytics cookieless, et le SEO technique de base est en place."

## Definition of Done (Rappel)

- [ ] Tests unitaires (couverture >= 80%)
- [ ] CI verte (lint, types, format, tests, build)
- [ ] Lighthouse >= 90 (perf, a11y, SEO)
- [ ] Responsive mobile/desktop
- [ ] Deployable sur Cloudflare Workers

## Sprint Backlog

| ID | Titre | Points | Epic | Status |
|----|-------|--------|------|--------|
| US-015 | Page Applications metier | 5 | EPIC-002 | 🔵 To Do |
| US-016 | Page Applications mobiles | 5 | EPIC-002 | 🔵 To Do |
| US-017 | Page Conseil et organisation | 5 | EPIC-002 | 🔵 To Do |
| US-028 | Analytics Plausible Cloud | 2 | EPIC-004 | 🔵 To Do |
| US-029 | Bandeau cookies RGPD | 3 | EPIC-004 | 🔵 To Do |
| US-031 | SEO technique (meta, sitemap, canonical) | 3 | EPIC-005 | 🔵 To Do |
| US-020 | Pages categories blog | 2 | EPIC-003 | 🔵 To Do |
| US-024 | Flux RSS blog | 1 | EPIC-003 | 🔵 To Do |

**Total engage : 26 points**

## Actions Retro S-003 (a integrer)

| Action | Priorite | Integree dans |
|--------|----------|---------------|
| Pre-commit hook Prettier (husky + lint-staged) | Haute | T-TECH-01 |
| Build local check before push | Moyenne | T-TECH-02 |
| Convention lazy-init services externes | Moyenne | Documentation |

## Dependances

| US | Depend de | Status |
|----|-----------|--------|
| US-015 | US-014 (template service) | ✅ Done (S-003) |
| US-016 | US-014 (template service) | ✅ Done (S-003) |
| US-017 | US-014 (template service) | ✅ Done (S-003) |
| US-029 | US-030 (page /confidentialite) | ✅ Done (S-003) |
| US-031 | US-018 (MDX setup) | ✅ Done (S-001) |
| US-020 | US-019 (page /blog) | ✅ Done (S-001) |
| US-024 | US-018 (MDX setup) | ✅ Done (S-001) |

## Risques Identifies

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| Compte Plausible non cree | Moyenne | Faible | Script prepare, activer plus tard |
| Tarteaucitron SSR conflict | Faible | Moyen | Charger client-side only |
| 3 pages services = repetitif | Faible | Faible | Template US-014 existant, variation contenu |

## Notes

- Les 3 pages services reutilisent le template cree en US-014 (Sprint 003)
- Plausible est cookieless → pas de conflit strict avec RGPD, mais transparence via bandeau
- US-033 (Google Search Console) reportee : depend du domaine final (differe v1.0.0)
- US-024 (RSS) ajoutee pour completer les features blog avant SEO
