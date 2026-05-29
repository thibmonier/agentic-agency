# Retrospective — Sprint 003

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-29 |
| Format | Starfish |
| Sprint | 003 - Contact + Legal + Services |
| Velocite | 26 pts (100%) |

## Directive Fondamentale

> "Peu importe ce que nous decouvrons, nous comprenons et croyons sincerement
> que chacun a fait du mieux qu'il pouvait, compte tenu de ce qu'il savait
> a ce moment-la, de ses competences et capacites, des ressources disponibles,
> et de la situation."

---

## Starfish

### 🟢 CONTINUER

- **Agents paralleles** pour implementer des US independantes simultanement → gain de temps massif
- **TDD** : ecrire tests avec chaque composant (100 tests cumulatifs)
- **Squash merge** avec PR : historique propre, CI validee avant merge
- **Types de taches adaptes** [FE]/[TEST]/[OPS] au lieu du template Symfony/Flutter

### 🟡 COMMENCER

- **Prettier en pre-commit hook** : 2 CI echoues a cause du formatage (Sprint 2 aussi)
- **Verification build locale avant push** : erreur Resend init au build aurait pu etre detectee localement
- **E2E Playwright dans CI** : actuellement seuls les tests Jest tournent, pas les tests E2E
- **.env.example verifiee au CI** : s'assurer que les env vars requises sont documentees

### 🔴 ARRETER

- **Pousser sans `prettier --write`** : 3e sprint consecutif avec echec CI prettier
- **Instanciation globale de services API** (Resend `new Resend()` au top-level) : casse le build sans env vars

### ⬆️ PLUS DE

- **Tests edge cases** : formulaire contact a beaucoup de cas limites (rate limit, Turnstile down, honeypot)
- **Validation en navigateur** : dev server + test manuel avant chaque PR (pas fait systematiquement)
- **Documentation inline** : les schemas zod servent aussi de documentation des APIs

### ⬇️ MOINS DE

- **Iterations CI** : 4 runs pour 1 PR (vs 3 pour Sprint 2). Objectif : 2 max
- **Corrections post-merge** : les lint fixes et format fixes devraient etre dans le commit initial

---

## Suivi Actions Sprints Precedents

| Sprint | Action | Status |
|--------|--------|--------|
| S-002 | Configurer Lighthouse CI | ✅ Fait (warn-level) |
| S-002 | Branch protection rules | ✅ Fait |
| S-002 | Ajouter Prettier au CI | ✅ Fait (mais encore des echecs) |
| S-001 | MAJ tech-spec pour Next.js 16 | ⚠️ Partiel (IMPLEMENTATION.md) |

---

## Actions Sprint 004

### Action 1 : Ajouter hook pre-commit Prettier

| Attribut | Valeur |
|----------|--------|
| Description | Configurer lint-staged + husky pour formater avant commit |
| Deadline | Debut Sprint 004 |
| DoD | `npm run format:check` ne peut plus echouer en CI |
| Priorite | Haute |

### Action 2 : Build local obligatoire avant push

| Attribut | Valeur |
|----------|--------|
| Description | Ajouter `npm run build` au script pre-push ou documenter dans CONTRIBUTING |
| Deadline | Sprint 004 |
| DoD | Erreur type "Resend missing API key" detectee localement |
| Priorite | Moyenne |

### Action 3 : Lazy-init pattern pour tous les services externes

| Attribut | Valeur |
|----------|--------|
| Description | Ne jamais instancier de client API au top-level module scope |
| Deadline | Permanent (convention) |
| DoD | Ajouter a CLAUDE.md ou regles projet |
| Priorite | Moyenne |

---

## Metriques Cles

| Metrique | S-001 | S-002 | S-003 | Tendance |
|----------|-------|-------|-------|----------|
| Velocite | 15 | 26 | 26 | → stable |
| Taux completion | 100% | 100% | 100% | → stable |
| Tests | 34 | 34 | 100 | ↗ +194% |
| CI runs/PR | 1 | 3 | 4 | ↗ (a reduire) |
| Nouvelles routes | 3 | 0 | 7 | ↗ |

---

## Ce que j'emporte

- La velocite 26 pts est soutenable et reproductible
- Le pattern "agents paralleles + CI gate + squash merge" fonctionne
- Le formulaire contact + email + anti-spam est un bon exemple de vertical slice
- Les echecs CI repetitifs sur prettier sont un signal fort : besoin d'automatisation pre-commit
