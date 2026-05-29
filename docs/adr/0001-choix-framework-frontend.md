# ADR-001 : Choix du Framework Frontend

## Statut

Accepté — 29 mai 2026

## Contexte

Le site vitrine Agentic Agency nécessite un framework frontend capable de répondre aux exigences suivantes:

- **SEO critique**: Indexation parfaite des pages services et articles de blog
- **Performance élevée**: Core Web Vitals excellent (Lighthouse 95+)
- **Blog dynamique**: Publication d'articles sans redéploiement complet
- **Formulaire de contact SSR**: Traitement côté serveur sécurisé
- **Évolutivité**: Architecture prête pour le Lot 2 (i18n, réalisations, prise de RDV)
- **GEO (Generative Engine Optimization)**: Support des structured data et optimisation pour moteurs IA

Contraintes:
- Budget limité pour l'hébergement
- Développeur solo avec expertise TypeScript/React
- Deadline 7-9 semaines

## Décision

**Next.js 15 (App Router) avec TypeScript**

## Alternatives considérées

### Astro + MDX

- ✅ Performance maximale (Lighthouse 100)
- ✅ SSG natif optimal pour contenu statique
- ✅ Simplicité pour un site vitrine
- ❌ SSG uniquement = redéploiement obligatoire pour chaque article blog
- ❌ Formulaires nécessitent API externe ou serverless séparé
- ❌ Moins adapté pour évolutivité Lot 2 (dashboard client)
- ❌ Écosystème moins mature pour intégrations CMS

### Remix

- ✅ SSR performant
- ✅ Excellente gestion formulaires
- ✅ Progressive enhancement natif
- ❌ Écosystème moins mature que Next.js
- ❌ Pas d'ISR natif (Incremental Static Regeneration)
- ❌ Moins d'exemples d'intégration CMS headless
- ❌ Hébergement Edge moins standardisé

### Next.js 15 (App Router) — Choisi

- ✅ SSG, SSR et ISR natifs selon les besoins par page
- ✅ Incremental Static Regeneration (ISR): publication blog sans redéploiement complet
- ✅ Écosystème mature: intégrations CMS officielles (next-sanity, etc.)
- ✅ TypeScript first avec excellent support type-safety
- ✅ Server Components React 19 pour performance optimale
- ✅ API Routes pour formulaire de contact sécurisé
- ✅ Évolutivité prouvée: dashboard client, authentification, paiements
- ✅ Hébergement Edge standardisé (Cloudflare Pages, Vercel)
- ✅ next/image pour optimisation automatique images (Core Web Vitals)

## Conséquences

### Positives

- **Publication blog en < 2 secondes**: Webhook CMS → API Route → revalidateTag → ISR régénère HTML → CDN sert
- **SEO optimal**: SSG pour pages statiques (services, légales), ISR pour blog (fraîcheur), SSR pour contact (formulaire)
- **Core Web Vitals**: next/image + SSG force-static pour accueil = Lighthouse 95+
- **Évolutivité Lot 2**: Architecture prête pour dashboard client, authentification, i18n (next-intl)
- **Structured data**: Support natif via metadata API pour GEO
- **Developer Experience**: TypeScript strict, hot reload, error overlay
- **Écosystème**: Composants UI (Radix, shadcn/ui), animations (Framer Motion), tests (Playwright)

### Négatives

- **Complexité initiale**: App Router plus complexe que Pages Router (courbe d'apprentissage)
- **Risque CVE**: Next.js 15 a connu des CVE critiques (TECH-01: CVE-2025-55182 RCE CVSS 10.0)
  - **Mitigation**: Bloquer la version ≥ 15.5.15 dans package.json, CI/CD scan vulnérabilités
- **Fuites mémoire Docker**: Problèmes connus en environnement containerisé
  - **Mitigation**: Hébergement serverless (Cloudflare Pages/Vercel) évite ce risque
- **Vendor lock-in partiel**: Fonctionnalités spécifiques Next.js difficiles à porter
  - **Mitigation**: Code métier découplé dans /lib, UI dans /components réutilisable

### Risques acceptés

- **Compatibilité React 19**: Certaines bibliothèques peuvent ne pas être compatibles
  - **Fallback**: Next.js 14 + React 18 si bloquants critiques (score risque: 6/20)

## Architecture de rendu choisie

| Page | Stratégie | Revalidation | Justification |
|------|-----------|-------------|---------------|
| Accueil (13 sections) | SSG (`force-static`) | Build time | Contenu fixe, performance maximale |
| Pages services (×4) | SSG | Build time | Contenu fixe, SEO maximal |
| Blog liste | ISR | 1 heure | Fraîcheur + performance |
| Blog article | ISR | 1 heure | Publication sans redéploiement |
| Contact | SSR | Temps réel | Formulaire avec validation serveur |
| Pages légales | SSG | Build time | Contenu fixe |

## Plan de migration

Si la décision devait changer (scénario improbable mais documenté):

### Vers Astro (si blog abandonné)

1. Migration pages statiques: Script conversion components Next → Astro (2j)
2. Build pipeline: Adapter scripts deployment (0.5j)
3. Formulaire: API Route Next → Cloudflare Workers (1j)
4. **Effort total estimé: 3-4 jours**

### Vers Remix (si focus SSR/formulaires)

1. Migration routes: App Router → Remix file-based routes (3j)
2. Data loading: Server Components → loaders (2j)
3. Formulaires: Server Actions → Remix actions (1j)
4. **Effort total estimé: 6-7 jours**

## Références

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Analysis: `/project-management/analysis/technical-options.md`](../../project-management/analysis/technical-options.md)
- [Risks: TECH-01 CVE Next.js](../../project-management/analysis/risks-opportunities.md)
- [Performance: Core Web Vitals](https://web.dev/vitals/)

## Notes

Decision alignée avec les ADR suivants:
- ADR-002: Choix CMS (next-sanity officiel)
- ADR-003: Hébergement (Edge + ISR)
