# ADR-004 : Choix Analytics

## Statut

Accepté — 29 mai 2026

## Contexte

Le site vitrine nécessite un outil d'analytics pour mesurer:

- **Trafic**: Visiteurs, pages vues, durée sessions
- **Acquisition**: Sources de trafic (organique, direct, référent)
- **Comportement**: Pages populaires, parcours utilisateur, taux rebond
- **Conversions**: Formulaire contact, clics CTA, engagement blog

Contraintes:
- **RGPD strict**: Client français sensible à la conformité
- **Bannière cookies**: Souhait d'éviter si possible (friction utilisateur)
- **Budget**: < 20€/mois
- **Simplicité**: Solo dev, pas de temps pour configuration complexe
- **Performance**: Impact minimal sur Core Web Vitals

## Décision

**Plausible Analytics Cloud (9€/mois, plan 10k pageviews)**

Solution cookieless hébergée EU, conforme RGPD sans consentement.

## Alternatives considérées

### Google Analytics 4 (GA4)

- ✅ Gratuit
- ✅ Fonctionnalités avancées (funnels, cohortes, prédictions)
- ✅ Intégration Google Ads, Search Console
- ✅ Écosystème mature, documentation exhaustive
- ❌ **Cookies = bannière consentement obligatoire** (friction utilisateur)
- ❌ **RGPD complexe**: Transferts USA, configuration anonymisation IP requise
- ❌ **Complexité**: Courbe apprentissage élevée (GA4 vs Universal Analytics)
- ❌ **Tracking invasif**: Empreinte numérique, profilage publicitaire
- ❌ **Performance**: Script ~50 KB, impact Core Web Vitals
- ❌ **UI surchargée**: Interface complexe pour besoins simples

### Matomo (open-source, self-hosted)

- ✅ **100% propriété données**: Hébergement propre serveur
- ✅ **RGPD parfait**: Pas de transfert tiers, configuration totale
- ✅ Cookieless possible (avec limitations)
- ✅ Alternative crédible à GA4 (fonctionnalités similaires)
- ❌ **Serveur à maintenir**: VPS OVH ~15€/mois + maintenance
- ❌ **Setup complexe**: Installation, configuration, updates, backups
- ❌ **Performance serveur**: Base de données MySQL, requêtes lourdes
- ❌ **Temps développeur**: Configuration initiale ~4-6h, maintenance ~2h/mois
- ❌ **Pas de support**: Documentation communautaire uniquement

### Matomo Cloud (SaaS)

- ✅ Pas de serveur à gérer
- ✅ RGPD EU (hébergement Allemagne)
- ❌ **19€/mois minimum** (50k hits/mois) — 2× prix Plausible
- ❌ Cookies = bannière consentement (sauf mode cookieless limité)
- ❌ Interface complexe (legacy UI)

### Plausible Analytics Cloud — **Choisi**

- ✅ **Cookieless natif**: Pas de bannière consentement requise (RGPD Article 6.1.f)
- ✅ **RGPD strict**: Hébergé EU (Allemagne), ISO 27001, GDPR-compliant by design
- ✅ **9€/mois**: Plan 10k pageviews/mois (suffisant site vitrine ~3k/mois estimé)
- ✅ **Script léger**: < 1 KB (45× plus petit que GA4), zéro impact Core Web Vitals
- ✅ **UI simple**: Dashboard minimaliste, métriques essentielles uniquement
- ✅ **Open-source**: Code auditable, communauté active
- ✅ **Privacy-first**: Pas de cookies, pas d'empreinte numérique, pas de tracking cross-site
- ✅ **Conformité sans config**: Anonymisation IP automatique, pas de données personnelles
- ✅ **API**: Export données, webhooks, intégrations
- ✅ **Support email**: Réponse <24h (testé communauté)
- ❌ Moins de fonctionnalités que GA4 (pas de funnels complexes, prédictions)
- ❌ Historique limité selon plan (12 mois pour plan 10k)

### Fathom Analytics

- ✅ Cookieless, RGPD, hébergé EU
- ✅ UI simple
- ❌ **14$/mois minimum** (~13€) — 44% plus cher que Plausible
- ❌ Moins open-source (code partiellement fermé)
- ❌ Écosystème plus petit

### Simple Analytics

- ✅ Cookieless, RGPD, hébergé EU
- ✅ UI minimaliste
- ❌ **19€/mois minimum** — 2× prix Plausible
- ❌ Moins de fonctionnalités que Plausible

## Conséquences

### Positives

- **Pas de bannière cookies analytics**: Cookieless = conformité RGPD Article 6.1.f (intérêt légitime)
  - Seule bannière: Tarteaucitron pour cookies marketing/vidéos (si ajoutés plus tard)
  - Friction réduite: +15-20% sessions mesurées vs GA4 avec consentement requis
- **RGPD simplifié**: 
  - Hébergement Allemagne (Hetzner)
  - Pas de transfert hors UE
  - Anonymisation automatique IP
  - DPA disponible: [plausible.io/dpa](https://plausible.io/dpa)
- **Performance excellente**:
  - Script 1 KB vs 50 KB GA4 (98% plus léger)
  - Zéro impact Core Web Vitals (validation Lighthouse)
  - Chargement asynchrone, pas de blocage render
- **Simplicité développeur**:
  - Installation: 1 ligne de code dans layout.tsx
  - Configuration: 5min setup
  - Maintenance: Zéro (SaaS)
- **UI claire**:
  - Dashboard une page (pas de navigation complexe)
  - Métriques essentielles: pages vues, sources, devices, pays
  - Partage client possible (lien public ou accès restreint)
- **Open-source auditable**:
  - Code sur GitHub: [plausible/analytics](https://github.com/plausible/analytics)
  - Self-hosted possible (fallback si budget futur contraint)

### Négatives

- **9€/mois récurrent**: Budget annuel 108€
  - Mitigation: Valeur acceptable vs conformité RGPD + temps économisé
- **Fonctionnalités limitées vs GA4**:
  - Pas de funnels conversions complexes
  - Pas de segments utilisateurs avancés
  - Pas d'intégration Google Ads
  - Mitigation: Besoins site vitrine couverts à 100%
- **Historique 12 mois**: Plan 10k limite rétention données
  - Mitigation: Export CSV mensuel via API pour archivage long terme
- **Vendor lock-in modéré**:
  - Données exportables (CSV, API)
  - Fallback: Self-hosted Plausible possible (Docker)

### Risques acceptés

- **Dépassement 10k pageviews/mois**: 
  - Plan suivant 19€/mois (50k pageviews)
  - Probabilité faible: Site vitrine ~3k pageviews/mois estimé (croissance organique lente)
  - Monitoring: Alerte si >8k pageviews/mois

## Architecture technique

### Installation

```tsx
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-domain="agentic-agency.com"
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Configuration avancée

```tsx
// Suivi events personnalisés (optionnel)
<Script
  defer
  data-domain="agentic-agency.com"
  src="https://plausible.io/js/script.outbound-links.js"
/>

// Suivi conversions (formulaire contact)
declare global {
  interface Window {
    plausible: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

// Usage dans composant Contact
const handleSubmit = async () => {
  // ... envoi formulaire
  window.plausible('Contact Form', { props: { service: 'SEO' } });
};
```

### Exclusion pages admin (futur Lot 2)

```tsx
<Script
  defer
  data-domain="agentic-agency.com"
  data-exclude="/admin/*"
  src="https://plausible.io/js/script.js"
/>
```

## Configuration RGPD

### Politique de confidentialité

```markdown
## Analytics

Nous utilisons Plausible Analytics, un outil d'analyse web respectueux de la vie privée.

**Données collectées** (anonymes, agrégées):
- Pages visitées
- Durée de visite
- Source de trafic (Google, direct, etc.)
- Pays, appareil, navigateur (sans identification personnelle)

**Pas de cookies**: Plausible ne stocke aucun cookie sur votre appareil.

**Base légale**: Intérêt légitime (Article 6.1.f RGPD).

**Hébergement**: Données hébergées en Allemagne (Hetzner), conformes RGPG.

**Anonymisation**: Adresses IP anonymisées automatiquement.

**Durée conservation**: 12 mois.

**Vos droits**: Accès, rectification, suppression via contact@agentic-agency.com.

**Plus d'infos**: [Plausible Privacy Policy](https://plausible.io/privacy)
```

### Pas de bannière cookies requise

- **Article 6.1.f RGPG**: Intérêt légitime si cookieless + anonymisation IP
- **CNIL**: Analytics cookieless exemptés de consentement (source: [cnil.fr/cookies-analytics](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience))
- **Transparence**: Mention dans politique de confidentialité suffisante

## Métriques suivies

### Dashboard Plausible (par défaut)

| Métrique | Description |
|----------|-------------|
| **Visiteurs uniques** | Nombre de visiteurs (IP anonymisées) |
| **Pages vues** | Total vues de pages |
| **Durée visite** | Temps moyen sur site |
| **Taux rebond** | % visiteurs 1 page uniquement |
| **Sources trafic** | Google, direct, référents, réseaux sociaux |
| **Pages populaires** | Top pages par vues |
| **Pays** | Géolocalisation pays (pas ville) |
| **Devices** | Desktop, mobile, tablet |
| **Navigateurs** | Chrome, Safari, Firefox, etc. |

### Events personnalisés (Lot 1)

```typescript
// Suivi conversions formulaire contact
window.plausible('Contact Form Submitted', {
  props: { service: 'SEO', source: 'Blog Article' },
});

// Clics CTA
window.plausible('CTA Clicked', {
  props: { cta: 'Demander un devis', page: 'Services SEO' },
});

// Téléchargement resources (si applicable)
window.plausible('Resource Downloaded', {
  props: { resource: 'Guide SEO PDF' },
});
```

### Goals (objectifs)

Configuration dashboard Plausible:
- `/contact-success` → Conversion formulaire
- Event: `Contact Form Submitted` → Goal
- Event: `CTA Clicked` → Engagement

## Budget & Scaling

### Estimation trafic

| Mois | Pageviews estimées | Plan requis | Coût |
|------|-------------------|-------------|------|
| **Mois 1-3** (lancement) | 1-2k | 10k | 9€/mois |
| **Mois 4-12** (SEO organique) | 3-5k | 10k | 9€/mois |
| **Année 2** (blog actif + SEO mature) | 8-12k | 10k → 50k | 9-19€/mois |
| **Année 3+** (GEO citations + backlinks) | 15-30k | 50k | 19€/mois |

### Plan upgrade (si dépassement)

- **10k → 50k pageviews**: 19€/mois (+10€)
- **50k → 100k pageviews**: 29€/mois (+10€)
- **> 100k**: Plans entreprise custom

## Plan de migration

### Vers GA4 (si besoins avancés)

**Scénario**: Client demande funnels avancés, intégration Google Ads, prédictions ML

1. **Setup GA4**: Créer propriété, configurer data streams (2h)
2. **Double tracking temporaire**: Plausible + GA4 en parallèle (1 mois)
3. **Configuration RGPG**: Anonymisation IP, consentement cookies, DPA Google (3h)
4. **Bannière cookies**: Tarteaucitron + catégorie Analytics (2h)
5. **Migration goals**: Reconfigurer conversions dans GA4 (2h)
6. **Effort total: 9 heures**
7. **Coût additionnel: Gratuit (GA4) mais bannière cookies = -15-20% mesure**

### Vers Matomo self-hosted (si budget contraint)

**Scénario**: Budget 9€/mois trop élevé, volonté ownership total données

1. **VPS setup**: OVH VPS Starter + MySQL (2h)
2. **Installation Matomo**: Docker Compose (2h)
3. **Configuration**: Sites, goals, anonymisation (1h)
4. **Migration historique**: Export CSV Plausible → import Matomo (1h)
5. **Effort total: 6 heures**
6. **Coût récurrent: 15€/mois VPS (+ maintenance 1-2h/mois)**

### Export données (continuité)

```bash
# API Plausible: Export CSV mensuel
curl "https://plausible.io/api/v1/stats/aggregate?site_id=agentic-agency.com&period=month" \
  -H "Authorization: Bearer ${PLAUSIBLE_API_KEY}" \
  > analytics-2026-05.json

# Archivage long terme (Google Sheets, BigQuery, etc.)
```

## Monitoring & Alerting

### Surveillance quotas

- **Plausible dashboard**: Pageviews utilisées / limite plan
- **Alerte si > 80%**: Email si approche limite (8k/10k)
- **Upgrade préventif**: Passer plan supérieur avant dépassement

### Performance script

- **Lighthouse CI**: Vérifier impact script Plausible sur scores
- **Core Web Vitals**: Monitoring Cloudflare Analytics (aucun impact attendu)

## Références

- [Plausible Analytics](https://plausible.io/)
- [Plausible Privacy Policy](https://plausible.io/privacy)
- [Plausible DPA](https://plausible.io/dpa)
- [CNIL: Cookies Analytics](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience)
- [Analysis: Analytics Options](../../project-management/analysis/technical-options.md)
- [RGPD: REG-01](../../project-management/analysis/risks-opportunities.md)

## Notes

- **Cookieless = différenciateur**: Aucune bannière cookies pour analytics (friction UX réduite)
- **RGPD simplifié**: Hébergement EU + anonymisation automatique = conformité native
- **Budget optimisé**: 9€/mois acceptable vs valeur conformité + temps économisé configuration
- **Alignement**: ADR-003 (Cloudflare Analytics basique, Plausible pour détails), ADR-005 (tracking citations GEO via UTM)
