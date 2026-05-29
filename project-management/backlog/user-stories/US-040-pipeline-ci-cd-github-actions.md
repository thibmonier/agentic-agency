# US-040 : Pipeline CI/CD GitHub Actions

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **un pipeline CI/CD automatisé qui exécute tests, linting et audits qualité** afin de **garantir qu'aucun code défaillant n'arrive en production**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je crée une Pull Request sur GitHub
WHEN le pipeline CI/CD se déclenche
THEN les étapes suivantes s'exécutent : Lint (ESLint), Type Check (TypeScript), Tests (Jest/Playwright), Lighthouse CI
AND si toutes les étapes passent, la PR est marquée "Checks passed"
AND si une étape échoue, la PR est bloquée avec détails erreur
```

### Scénario alternatif 1 - Lint échoue
```gherkin
GIVEN mon code contient une erreur ESLint (ex: variable non utilisée)
WHEN le pipeline CI/CD s'exécute
THEN l'étape Lint échoue avec message d'erreur détaillé
AND la PR est bloquée (status check failed)
AND je dois corriger l'erreur ESLint avant de merger
```

### Scénario alternatif 2 - Lighthouse CI régression
```gherkin
GIVEN ma modification baisse le score Performance de 95 à 85
WHEN le pipeline Lighthouse CI s'exécute
THEN un commentaire GitHub s'affiche avec rapport Lighthouse
AND un warning "Performance dropped by 10 points" est affiché
AND la PR peut être mergée mais avec attention (non bloquant)
```

### Scénario d'erreur 1 - Tests unitaires échouent
```gherkin
GIVEN un test unitaire échoue (assertion failed)
WHEN le pipeline CI/CD s'exécute
THEN l'étape Tests échoue avec logs détaillés
AND la PR est bloquée
AND le développeur doit corriger le test ou le code avant merge
```

### Scénario d'erreur 2 - Build Next.js échoue
```gherkin
GIVEN une erreur TypeScript existe dans le code
WHEN le pipeline Build s'exécute
THEN la build échoue avec erreur TypeScript
AND la PR est bloquée
AND le message d'erreur indique le fichier et ligne concernés
```

## Conversation
- Aligné avec section § 6.4 Outils dev du PRD
- CI/CD : GitHub Actions (gratuit pour repos publics, 2000 min/mois privés)

**Pipeline CI/CD (.github/workflows/ci.yml) :**

**Étapes obligatoires :**
1. **Install dependencies** : npm ci (lockfile strict)
2. **Lint** : npm run lint (ESLint)
3. **Type Check** : npm run type-check (tsc --noEmit)
4. **Format Check** : npm run format:check (Prettier)
5. **Tests unitaires** : npm run test (Jest)
6. **Build** : npm run build (Next.js)
7. **Lighthouse CI** : lhci autorun (audit pages clés)

**Étapes optionnelles (Should) :**
8. **Tests E2E** : npm run test:e2e (Playwright sur pages critiques)
9. **Accessibility audit** : axe-core via Pa11y

**Configuration Lighthouse CI (.lighthouserc.json) :**
```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/services/applications-metier",
        "http://localhost:3000/blog"
      ],
      "startServerCommand": "npm run start"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["warn", { "minScore": 0.95 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

**Outils qualité :**
- **ESLint** : next/core-web-vitals config
- **Prettier** : formatage automatique
- **TypeScript** : strict mode
- **Jest** : tests unitaires composants/utils
- **Playwright** : tests E2E (formulaire, navigation)
- **Lighthouse CI** : audits performance/a11y

**Branch protection rules (GitHub) :**
- Require status checks to pass before merging
- Require branches to be up to date
- Status checks required : Lint, Type Check, Tests, Build
- Lighthouse CI : warning only (non bloquant)

**Notifications :**
- Slack/Discord : échecs build (optionnel)
- Email : échecs sur main (critique)

## Dépendances
- US-038 (Setup Next.js) pour scripts npm

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
