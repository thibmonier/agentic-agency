# Task Board — Sprint 002 Accueil Complet + Infra

> Derniere mise a jour : 2026-05-29

## Legende
- 🔲 A faire
- 🔄 En cours
- 👀 En review
- ✅ Termine
- 🚫 Bloque

---

## 🔲 A Faire

### Priorite 1 — Infra

| ID | US | Tache | Type | Estimation | Assigné |
|----|-----|-------|------|------------|---------|
| T-039-01 | US-039 | Creer repo GitHub + push code | [OPS] | 1h | - |
| T-039-02 | US-039 | Connecter Cloudflare Pages + config build | [OPS] | 2h | - |
| T-039-03 | US-039 | Variables env + premier deploy | [OPS] | 1.5h | - |
| T-039-04 | US-039 | Verifier deploy + rollback | [TEST] | 1h | - |
| T-039-05 | US-039 | Documenter process deploy | [DOC] | 0.5h | - |
| T-040-04 | US-040 | Configurer Lighthouse CI | [OPS] | 1.5h | - |
| T-040-05 | US-040 | Branch protection rules | [OPS] | 1h | - |
| T-040-06 | US-040 | Valider pipeline (PR test) | [TEST] | 1h | - |

### Sections — Tests restants

| ID | US | Tache | Type | Estimation | Assigné |
|----|-----|-------|------|------------|---------|
| T-005-05 | US-005 | Tests unitaires offres | [TEST] | 2h | - |
| T-004-03 | US-004 | Tests unitaires delivery | [TEST] | 1.5h | - |
| T-011-03 | US-011 | Tests unitaires technologies | [TEST] | 0.5h | - |
| T-012-03 | US-012 | Tests unitaires valeurs | [TEST] | 1h | - |
| T-013-03 | US-013 | Tests unitaires approche | [TEST] | 1.5h | - |
| T-006-02 | US-006 | Tests unitaires CTA | [TEST] | 0.5h | - |
| T-003-03 | US-003 | Tests unitaires confiance | [TEST] | 1h | - |

### Transverses

| ID | US | Tache | Type | Estimation | Assigné |
|----|-----|-------|------|------------|---------|
| T-TECH-02 | - | Tests E2E Playwright | [TEST] | 2h | - |
| T-TECH-03 | - | MAJ README + IMPLEMENTATION | [DOC] | 1h | - |

---

## 🔄 En Cours

_Aucune_

---

## 👀 En Review

_Aucune_

---

## ✅ Termine

| ID | US | Tache | Reel | Termine |
|----|-----|-------|------|---------|
| T-040-01 | US-040 | Workflow .github/workflows/ci.yml | - | 2026-05-29 |
| T-040-02 | US-040 | Scripts npm manquants | - | 2026-05-29 |
| T-040-03 | US-040 | Configurer Jest + RTL | - | 2026-05-29 |
| T-005-01 | US-005 | Composant OfferCard | - | 2026-05-29 |
| T-005-02 | US-005 | Composant OffersSection | - | 2026-05-29 |
| T-005-03 | US-005 | Donnees contenu offres | - | 2026-05-29 |
| T-005-04 | US-005 | Responsive + hover | - | 2026-05-29 |
| T-004-01 | US-004 | Composant DeliverySection | - | 2026-05-29 |
| T-004-02 | US-004 | Visuel + responsive | - | 2026-05-29 |
| T-011-01 | US-011 | Composant TechnologiesSection | - | 2026-05-29 |
| T-011-02 | US-011 | Logos SVG + donnees stacks | - | 2026-05-29 |
| T-012-01 | US-012 | Composant ValuesSection | - | 2026-05-29 |
| T-012-02 | US-012 | Donnees valeurs + icones | - | 2026-05-29 |
| T-013-01 | US-013 | Composant ApproachTimeline | - | 2026-05-29 |
| T-013-02 | US-013 | Donnees 5 etapes | - | 2026-05-29 |
| T-006-01 | US-006 | Composant CTABanner | - | 2026-05-29 |
| T-003-01 | US-003 | Composant TrustSection | - | 2026-05-29 |
| T-003-02 | US-003 | Donnees logos/secteurs | - | 2026-05-29 |
| T-TECH-01 | - | Integrer sections page.tsx | - | 2026-05-29 |

---

## 🚫 Bloque

| ID | US | Raison | Action |
|----|-----|--------|--------|
| T-039-* | US-039 | Repo GitHub non cree + compte Cloudflare | Action manuelle requise |

---

## Metriques

- **Taches** : 36 total | 19 terminees (53%)
- **Heures** : 57h estimees | ~30h consommees | ~27h restantes
- **Points** : 26 total | ~17 impl. (composants done, tests restants)

## Burndown

| Jour | Taches restantes | Heures restantes |
|------|-----------------|------------------|
| J1 (29/05) | 36 | 57h |
| J1 (29/05) soir | 17 | ~27h |
