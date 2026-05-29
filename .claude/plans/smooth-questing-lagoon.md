# Plan : Sprint 003 — Contact + Legal + Services

## Contexte

Sprint 003 demarre le 2026-05-30. 7 US, 26 points, 2 semaines.
Sprint 2 termine a 100% (26 pts). Velocite confirmee : 26 pts.
Focus : EPIC-004 (formulaire contact) + fin EPIC-001 (homepage) + debut EPIC-002 (services).

## Sprint Backlog (26 pts)

| US | Titre | Pts | Taches | Heures |
|----|-------|-----|--------|--------|
| US-030 | Pages legales | 2 | 5 | 5h |
| US-025 | Formulaire contact validation | 5 | 6 | 10h |
| US-026 | Envoi email Resend | 3 | 6 | 7h |
| US-027 | Anti-spam (Turnstile) | 3 | 5 | 6.5h |
| US-007 | Section contact accueil | 5 | 5 | 7.5h |
| US-009 | Apercu blog accueil | 3 | 3 | 4h |
| US-014 | Page Dev web (template) | 5 | 6 | 9.5h |
| TECH | Transverses | - | 4 | 4h |
| **TOTAL** | | **26** | **40** | **53.5h** |

## Ordre d'implementation

1. US-030 + US-009 (paralleles, pas de deps)
2. US-025 (apres US-030 pour lien /confidentialite)
3. US-026 + US-027 (paralleles, apres US-025)
4. US-007 (apres US-026 + US-027)
5. US-014 (independant, parallele phases 2-4)
6. T-TECH (E2E, docs)

## Decisions techniques

- Turnstile (Cloudflare) au lieu de reCAPTCHA
- react-hook-form + zod pour formulaire
- Resend pour email transactionnel
- Pages legales en React statique (pas MDX)
- Footer : /cgv → /cookies
