# Sprint 006 : Polish + Pre-launch

## Informations

| Attribut | Valeur |
|----------|--------|
| Numero | 006 |
| Debut | 2026-06-12 |
| Fin | 2026-06-26 |
| Duree | 10 jours |
| Capacite | 12 points |

## Sprint Goal

> "Le site est pret pour le launch : image OG designee, realisations clients avec placeholders, Lighthouse mobile valide, et scenarios E2E accessibilite couverts."

## Definition of Done (Rappel)

- [ ] Tests unitaires (couverture >= 80%)
- [ ] CI verte (lint, types, format, tests, build, e2e, lighthouse)
- [ ] Lighthouse >= 90 desktop, >= 85 mobile
- [ ] Responsive mobile/desktop
- [ ] Deployable sur Cloudflare Workers

## Sprint Backlog

| ID | Titre | Points | Epic | Status |
|----|-------|--------|------|--------|
| US-010 | Section realisations clients (placeholders) | 2 | EPIC-001 | 🔵 To Do |
| T-RETRO-01 | Image OG reelle 1200x627 | 2 | EPIC-005 | 🔵 To Do |
| T-RETRO-02 | Lighthouse CI mobile (>= 85) | 2 | EPIC-005 | 🔵 To Do |
| T-RETRO-03 | Scenarios E2E accessibilite (>= 5) | 3 | EPIC-005 | 🔵 To Do |
| T-RETRO-04 | OG Image API dynamique (Next.js ImageResponse) | 3 | EPIC-005 | 🔵 To Do |

**Total engage : 12 points**

## Actions Retro S-005 (a integrer)

| Action | Priorite | Integree dans |
|--------|----------|---------------|
| Image OG reelle | Haute | T-RETRO-01 |
| Lighthouse CI mobile | Moyenne | T-RETRO-02 |
| Scenarios E2E a11y | Moyenne | T-RETRO-03 |
| OG Image API dynamique | Basse | T-RETRO-04 |

## Dependances

| Item | Depend de | Status |
|------|-----------|--------|
| US-010 | Contenu client (placeholder OK) | ⚠️ Placeholder |
| T-RETRO-01 | Design logo/baseline | ⚠️ Generable |
| T-RETRO-02 | T-TECH-01 (Playwright CI) | ✅ Done (S-005) |
| T-RETRO-03 | T-TECH-01 (Playwright CI) | ✅ Done (S-005) |
| T-RETRO-04 | US-037 (OG metadata) | ✅ Done (S-005) |

## Risques Identifies

| Risque | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| Lighthouse mobile < 85 | Moyenne | Moyen | Optimiser images, reduire JS |
| OG Image API incompatible Cloudflare Workers | Moyenne | Faible | Fallback image statique |
| Realisations sans contenu reel | Haute | Faible | Placeholders credibles (meme approche temoignages) |

## Notes

- Sprint leger (12 pts vs 26 habituels) — focus qualite, pas features
- US-010 utilise des placeholders comme US-008 (temoignages) en S-005
- T-RETRO-04 (OG dynamique) est optionnel — si trop complexe avec Cloudflare Workers, garder images statiques
- Derniers 5 US du backlog (US-023, US-033, US-041, US-043) restent bloquees par deps externes
- Ce sprint est potentiellement le dernier avant v1.0.0
