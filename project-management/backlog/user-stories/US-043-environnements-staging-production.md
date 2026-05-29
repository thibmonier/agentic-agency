# US-043 : Environnements staging/production

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-003
- **Priorité :** Should
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **un environnement staging pour tester avant production** afin de **valider les nouvelles fonctionnalités sans risque pour les utilisateurs finaux**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je push sur la branche staging
WHEN le déploiement Cloudflare Pages s'exécute
THEN le site staging est accessible sur staging.agentic-agency.fr (ou URL Cloudflare)
AND les variables d'environnement staging sont utilisées (SANITY_DATASET=staging)
AND je peux tester les nouvelles fonctionnalités sans impacter production
```

### Scénario alternatif 1 - Différences staging/production
```gherkin
GIVEN je compare staging et production
WHEN j'inspecte les configurations
THEN staging utilise : SANITY_DATASET=staging, RESEND sandbox mode (optionnel), analytics désactivé (optionnel)
AND production utilise : SANITY_DATASET=production, RESEND production, analytics actif
```

### Scénario alternatif 2 - Preview branches
```gherkin
GIVEN je crée une PR sur GitHub
WHEN Cloudflare Pages détecte la PR
THEN un déploiement preview est créé automatiquement
AND l'URL preview est ajoutée en commentaire GitHub (ex: pr-123.agentic-agency.pages.dev)
AND je peux tester la PR avant merge
```

### Scénario d'erreur 1 - Données staging polluent production
```gherkin
GIVEN staging et production partagent le même SANITY_DATASET
WHEN je crée un article test en staging
THEN l'article apparaît en production (erreur grave)
AND les environnements doivent être strictement séparés
```

### Scénario d'erreur 2 - Variables env non isolées
```gherkin
GIVEN RESEND_API_KEY est partagé entre staging et production
WHEN staging envoie un email de test
ALORS l'email est envoyé depuis la production (mauvais)
AND des API keys distinctes doivent être utilisées
```

## Conversation
- Aligné avec section § 6.3 Hébergement et § 11 Planning du PRD
- Environnements recommandés : staging + production
- Environnements optionnels : preview branches (PR)

**Configuration Cloudflare Pages :**

**1. Production (branche main) :**
- Branche : `main`
- URL : https://agentic-agency.fr
- Variables env :
  - `SANITY_DATASET=production`
  - `RESEND_API_KEY` : clé production
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=agentic-agency.fr`

**2. Staging (branche staging) :**
- Branche : `staging`
- URL : https://staging.agentic-agency.fr (custom domain)
  - OU : https://staging.agentic-agency.pages.dev (sous-domaine Cloudflare)
- Variables env :
  - `SANITY_DATASET=staging`
  - `RESEND_API_KEY` : clé sandbox Resend (emails test)
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=` (vide, désactiver analytics)
  - `ROBOTS=noindex` (empêcher indexation Google)

**3. Preview branches (PRs) :**
- Branche : toutes sauf main et staging
- URL : https://pr-123.agentic-agency.pages.dev (auto-généré)
- Variables env : héritées de staging
- Suppression auto après merge PR

**Workflow recommandé :**
```
feature/nouvelle-us
  ↓ (PR)
staging (test validation fonctionnelle)
  ↓ (PR après validation)
main (production)
```

**Sanity datasets :**
- 2 datasets Sanity obligatoires : `production` et `staging`
- Staging : articles brouillon, tests, données factices
- Production : contenu final publié

**Robots.txt staging :**
```
# /public/robots.txt (conditionnel via env var)
User-agent: *
Disallow: / # Si ROBOTS=noindex
```

**Avantages :**
- Tests recette sur staging avant prod
- Validation client sur staging
- Réduction risques bugs production
- Rollback facile (historique Cloudflare Pages)

## Dépendances
- US-039 (Cloudflare Pages) pour configuration environnements

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
