# US-039 : Configuration Cloudflare Pages

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **que le site soit hébergé sur Cloudflare Pages** afin de **bénéficier de performances edge EU, gratuité et conformité RGPD**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN le projet Next.js est configuré dans un dépôt GitHub
WHEN je connecte le dépôt à Cloudflare Pages
THEN chaque push sur la branche main déclenche un déploiement automatique
AND le site est accessible via URL temporaire Cloudflare (ex: agentic-agency.pages.dev)
AND les logs de build sont visibles dans Cloudflare dashboard
```

### Scénario alternatif 1 - Build réussi
```gherkin
GIVEN je push du code sur la branche main
WHEN le build Cloudflare Pages s'exécute
THEN la commande npm run build réussit sans erreur
AND les assets statiques sont uploadés vers Cloudflare Edge
AND le site est déployé et accessible en < 2 min
```

### Scénario alternatif 2 - Variables d'environnement
```gherkin
GIVEN je configure les variables d'environnement dans Cloudflare Pages
WHEN je définis SANITY_PROJECT_ID, SANITY_DATASET, RESEND_API_KEY, etc.
THEN les variables sont disponibles côté serveur (API Routes)
AND les secrets ne sont PAS visibles dans les logs publics
```

### Scénario d'erreur 1 - Build échoue
```gherkin
GIVEN une erreur TypeScript existe dans le code
WHEN le build Cloudflare Pages s'exécute
THEN la build échoue avec logs d'erreur TypeScript
AND le déploiement est annulé
AND le site reste sur la version précédente fonctionnelle
```

### Scénario d'erreur 2 - Variables env manquantes
```gherkin
GIVEN RESEND_API_KEY n'est pas configuré dans Cloudflare
WHEN l'API Route /api/contact tente d'envoyer un email
THEN une erreur "Missing RESEND_API_KEY" est levée
AND l'envoi email échoue
AND un log d'erreur est visible dans Cloudflare Functions logs
```

## Conversation
- Aligné avec section § 6.3 Hébergement du PRD
- Hébergeur : Cloudflare Pages (gratuit, edge EU, RGPD conforme)
- Alternative Vercel acceptable mais USA-based (RGPD à valider)

**Configuration Cloudflare Pages :**
1. Connecter dépôt GitHub à Cloudflare Pages
2. Build settings :
   - Framework preset : Next.js
   - Build command : `npm run build`
   - Output directory : `.next` (Next.js automatique)
   - Node version : 20.x
3. Variables d'environnement (production) :
   - `SANITY_PROJECT_ID` : ID projet Sanity
   - `SANITY_DATASET` : production
   - `SANITY_API_TOKEN` : token read-only
   - `SANITY_PREVIEW_SECRET` : secret preview (généré aléatoire)
   - `RESEND_API_KEY` : clé API Resend
   - `RECAPTCHA_SECRET_KEY` : clé Google reCAPTCHA
   - `NEXT_PUBLIC_SITE_URL` : https://agentic-agency.fr
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : agentic-agency.fr
4. Environnements :
   - Production : branche `main`
   - Preview : branches feature/* (optionnel)

**Avantages Cloudflare Pages :**
- Gratuit (bande passante illimitée)
- Edge caching EU (RGPD conforme)
- HTTPS automatique (certificat SSL)
- DDoS protection incluse
- Déploiements instantanés (< 2 min)
- Rollback facile (historique déploiements)
- Functions (API Routes Next.js) incluses

**DPA (Data Processing Agreement) :**
- Cloudflare DPA à signer pour conformité RGPD
- Datacenter EU pour hébergement

**Monitoring :**
- Logs déploiements : Cloudflare Pages dashboard
- Logs runtime (API Routes) : Cloudflare Functions logs
- Analytics : Cloudflare Web Analytics (optionnel, en plus de Plausible)

## Dépendances
- US-038 (Setup Next.js) pour projet à déployer
- US-041 (Domaine DNS) pour domaine custom

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
