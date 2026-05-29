# ADR-003 : Choix de l'Hébergement

## Statut

Accepté — 29 mai 2026

## Contexte

Le site vitrine nécessite un hébergement répondant aux exigences suivantes:

- **Performance**: Latence < 100ms Europe, Core Web Vitals excellent
- **RGPD**: Conformité stricte, hébergement UE préféré
- **Budget**: Coût minimal (site vitrine sans revenus directs)
- **Scalabilité**: Support trafic variable (lancement, campagnes)
- **Next.js**: Support App Router + ISR (Incremental Static Regeneration)
- **CI/CD**: Déploiement automatique depuis Git
- **SSL**: HTTPS obligatoire, certificats gratuits

Contraintes:
- Développeur solo (pas de DevOps dédié)
- Client sensible RGPD (agence française)
- Budget hébergement < 50€/mois

## Décision

**Cloudflare Pages (plan gratuit)**

## Alternatives considérées

### Vercel (plateforme créateur Next.js)

- ✅ Intégration Next.js native (créateur du framework)
- ✅ ISR natif avec revalidation automatique
- ✅ Analytics intégrées (Core Web Vitals)
- ✅ Preview deployments pour chaque PR
- ✅ Edge Functions pour API Routes
- ✅ Support Next.js 15 garanti jour 1
- ❌ **Hébergement USA** (RGPD: Data Processing Framework + Standard Contractual Clauses requis)
- ❌ **20$/mois minimum** (plan Pro requis pour production)
- ❌ Plan gratuit limité (100 GB bandwidth, pas adapté croissance)
- ❌ Vendor lock-in modéré (fonctionnalités spécifiques Vercel)

### Cloudflare Pages — **Choisi**

- ✅ **Gratuit illimité**: Bandwidth, builds, requêtes
- ✅ **Edge global avec POP Europe**: 330+ datacenters dont France, Allemagne
- ✅ **RGPD strict**: ISO 27001, SOC 2 Type II, HIPAA, hébergement EU disponible
- ✅ **Performance**: 40% plus rapide que concurrents pour contenu statique (benchmark Cloudflare)
- ✅ **Next.js support complet**: App Router + ISR via @cloudflare/next-on-pages
- ✅ **CI/CD natif**: Git push → build auto (~2min)
- ✅ **DDoS protection gratuite**: Protection L3/L4/L7 incluse
- ✅ **Analytics gratuits**: Core Web Vitals, trafic, erreurs
- ✅ **SSL automatique**: Universal SSL gratuit
- ✅ **Preview deployments**: Une URL par branche Git
- ❌ Adapter Next.js requis (@cloudflare/next-on-pages)
- ❌ Support Next.js moins "jour 1" que Vercel (délai ~1-2 semaines)

### OVH (hébergeur français)

- ✅ **100% français**: Datacenters Roubaix, Gravelines, Strasbourg
- ✅ **RGPD parfait**: Données jamais hors UE
- ✅ **Souveraineté numérique**: Aucune juridiction extra-européenne
- ✅ ISO 27001, HDS (Hébergeur Données de Santé)
- ❌ **~15€/mois minimum** (VPS Starter)
- ❌ **Maintenance serveur**: Updates, sécurité, monitoring à gérer
- ❌ **Pas de CI/CD natif**: Setup Docker + Coolify/Dokku requis
- ❌ **Performance Edge inférieure**: Pas de CDN global natif (Cloudflare en frontal requis)
- ❌ **Scalabilité manuelle**: Pas d'autoscaling, redimensionnement manuel

### Netlify

- ✅ CI/CD natif, Git push → deploy
- ✅ Preview deployments
- ✅ Next.js support (adapter requis)
- ❌ **Hébergement USA** (RGPD: DPF + SCC requis)
- ❌ Plan gratuit limité (100 GB bandwidth/mois)
- ❌ Performance Edge inférieure à Cloudflare
- ❌ Build minutes limités (300/mois gratuit)

## Conséquences

### Positives

- **Coût nul**: Budget hébergement économisé (470€/an sur Sanity + Plausible uniquement)
- **Performance excellente**: 
  - Time to First Byte (TTFB) < 50ms Europe via Edge
  - Lighthouse score 95+ garanti (SSG + CDN)
  - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **RGPD simplifié**: 
  - DPA (Data Processing Agreement) standard Cloudflare
  - Pas de transfert hors UE si Edge EU configuré
  - ISO 27001 + SOC 2 certifications
- **DDoS protection**: Attaques mitigées automatiquement (économie ~100€/mois WAF externe)
- **Simplicité DevOps**: Zéro configuration serveur, zéro maintenance
- **CI/CD natif**: Git push → build → deploy en ~2min
- **Preview deployments**: Chaque branche = URL preview unique (tests clients)
- **Évolutivité gratuite**: Trafic illimité, autoscaling automatique

### Négatives

- **Adapter Next.js requis**: 
  - `@cloudflare/next-on-pages` ajoute complexité build
  - Certaines features Next.js peuvent nécessiter workarounds
  - Mitigation: Documentation officielle Cloudflare, communauté active
- **Support Next.js retardé**: 
  - Nouvelles versions Next.js supportées ~1-2 semaines après release
  - Mitigation: Ne pas upgrader Next.js avant support Cloudflare confirmé
- **Vendor lock-in modéré**: 
  - Workers/Functions spécifiques Cloudflare
  - Mitigation: Limiter usage Workers, préférer API Routes Next.js standard
- **Build minutes**: 
  - 500 builds/mois gratuit (~16/jour)
  - Dépassement improbable (3 articles/mois = ~90 builds/mois max)

### Risques acceptés

- **Fuites mémoire Next.js Docker**: 
  - Problème connu Next.js en environnement containerisé
  - **Mitigé**: Cloudflare Pages = serverless (pas Docker), risque nul
- **Support communautaire**: 
  - Moins de ressources que Vercel pour troubleshooting
  - **Mitigé**: Documentation Cloudflare exhaustive, adapter open-source

## Architecture déploiement

### Workflow CI/CD

```
Developer → Git push → GitHub
                        ↓
              Cloudflare Pages détecte push
                        ↓
              Build Next.js (~2min)
              - npm install
              - npm run build
              - @cloudflare/next-on-pages
                        ↓
              Deploy sur Cloudflare Edge
              - Cache SSG pages
              - Fonctions Edge pour ISR
                        ↓
              Site live sur https://agentic-agency.com
```

### Configuration Cloudflare Pages

```yaml
# cloudflare-pages.yaml (dans repository)
build:
  command: npm run pages:build
  directory: .vercel/output/static
  environment:
    NODE_VERSION: 20
    NEXT_TELEMETRY_DISABLED: 1

deployment:
  production_branch: main
  preview_branches:
    - develop
    - feature/*

environment_variables:
  # Variables sensibles dans Cloudflare Dashboard
  RESEND_API_KEY: ${RESEND_API_KEY}
```

### Stratégie Edge

```typescript
// next.config.mjs
export default {
  output: 'export', // Static export pour SSG
  
  // ISR via Edge Functions
  experimental: {
    isrMemoryCacheSize: 0, // Désactiver cache mémoire (pas supporté Edge)
  },
  
  // Images via Cloudflare Image Resizing
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudflare-image-loader.ts',
  },
};
```

## Configuration RGPD

### Data Processing Agreement (DPA)

- Cloudflare DPA standard: [https://www.cloudflare.com/cloudflare-customer-dpa/](https://www.cloudflare.com/cloudflare-customer-dpa/)
- Standard Contractual Clauses (SCC) 2021 incluses
- Transferts UE → USA: Data Privacy Framework (DPF) certifié

### Politique confidentialité requise

```markdown
## Hébergement

Site hébergé par Cloudflare Inc. (USA) via Cloudflare Pages.
Données traitées: Logs techniques (IP, User-Agent, timestamp).
Base légale: Intérêt légitime (sécurité, performance).
Durée conservation: 30 jours.
Certifications: ISO 27001, SOC 2 Type II.
DPA: https://www.cloudflare.com/cloudflare-customer-dpa/
```

## Performance attendue

### Benchmarks Cloudflare (vs concurrents)

| Métrique | Cloudflare Pages | Vercel | Netlify | OVH |
|----------|------------------|--------|---------|-----|
| TTFB Europe | < 50ms | ~80ms | ~100ms | ~120ms |
| Lighthouse Performance | 95-100 | 95-100 | 90-95 | 85-90 |
| Global CDN POPs | 330+ | ~20 | ~100 | 35 |
| Bandwidth gratuit | Illimité | 100 GB | 100 GB | 1 TB |
| DDoS protection | Incluse | Payant | Payant | Payant |

### Core Web Vitals cibles

- **LCP (Largest Contentful Paint)**: < 1.5s (objectif < 1.0s)
- **FID (First Input Delay)**: < 50ms
- **CLS (Cumulative Layout Shift)**: < 0.05
- **TTFB (Time to First Byte)**: < 100ms

## Plan de migration

### Vers Vercel (si besoin features avancées)

**Scénario**: Besoin Edge Middleware avancés, Analytics Vercel, ou support Next.js jour 1

1. **Configuration Vercel**: Créer projet, connecter GitHub (0.5h)
2. **Variables environnement**: Copier depuis Cloudflare (0.5h)
3. **DNS**: Changer CNAME vers Vercel (propagation 1-24h)
4. **Tests**: Vérifier ISR, formulaires, analytics (1h)
5. **Effort total: 2-3 heures**
6. **Coût additionnel: +20$/mois (Pro)**

### Vers OVH (si exigence souveraineté stricte)

**Scénario**: Client exige 100% français (données jamais hors France)

1. **VPS setup**: OVH VPS Starter (2 vCPU, 4 GB RAM) (2h)
2. **Docker**: Dockerfile Next.js + Nginx reverse proxy (3h)
3. **CI/CD**: GitHub Actions → SSH deploy (2h)
4. **Monitoring**: Uptime Kuma + logs (1h)
5. **Effort total: 8 heures**
6. **Coût récurrent: +15€/mois (VPS) + maintenance 2h/mois**

### Migration technique (plateforme → plateforme)

```bash
# 1. Export configuration
# Variables environnement, DNS records, build config

# 2. Nouveau projet hébergeur cible
# Créer projet, connecter Git repository

# 3. Configuration build
# Adapter next.config.mjs si nécessaire

# 4. Tests staging
# Vérifier toutes fonctionnalités sur URL preview

# 5. DNS migration
# Changer CNAME: agentic-agency.com → nouvelle plateforme

# 6. Monitoring post-migration
# 24-48h surveillance errors, performance
```

## Monitoring & Alerting

### Cloudflare Analytics (gratuit)

- Trafic en temps réel
- Core Web Vitals
- Erreurs 4xx/5xx
- Bandwidth utilisé

### Uptime monitoring externe (recommandé)

- **UptimeRobot** (gratuit, 50 monitors): Ping HTTP toutes les 5min
- **Alerting**: Email + Slack si downtime > 1min

### Sentry (optionnel, gratuit 5k events/mois)

- Erreurs JavaScript frontend
- Erreurs API Routes backend
- Performance monitoring

## Références

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare DPA](https://www.cloudflare.com/cloudflare-customer-dpa/)
- [Analysis: Hébergement Options](../../project-management/analysis/technical-options.md)
- [Risks: BUS-03 Coûts hébergement](../../project-management/analysis/risks-opportunities.md)

## Notes

- **Budget optimisé**: 0€/mois hébergement = ROI maximal
- **RGPD**: DPA + ISO 27001 suffisants pour client français standard
- **Performance**: Edge Europe + SSG = Lighthouse 95+ garanti
- **Évolutivité**: Migration Vercel possible en <3h si besoin
- **Alignement**: ADR-001 (Next.js ISR), ADR-002 (MDX rebuild ~2min acceptable)
