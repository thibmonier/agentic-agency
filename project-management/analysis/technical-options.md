# Évaluation Technique — Site Vitrine Agentic Agency

**Date :** 29 mai 2026
**Phase :** Analyse (Enterprise)

---

## Recommandation Principale

**Next.js 15 (App Router) + Sanity CMS + Cloudflare Pages**

Score global : **92/100** — meilleur compromis SEO/GEO, autonomie CMS, coût, conformité RGPD.

---

## 1. Comparaison Stacks

| Critère | Next.js + Sanity + Cloudflare | Next.js + Contentful + Vercel | Astro + MDX + Cloudflare |
|---------|-------------------------------|-------------------------------|--------------------------|
| **Performance** | ⭐⭐⭐⭐ (Lighthouse 95+) | ⭐⭐⭐⭐ (95+) | ⭐⭐⭐⭐⭐ (100) |
| **SEO/ISR** | ⭐⭐⭐⭐⭐ SSR + ISR natif | ⭐⭐⭐⭐⭐ idem | ⭐⭐⭐⭐ SSG uniquement |
| **Blog sans redéploiement** | ⭐⭐⭐⭐⭐ webhook → ISR | ⭐⭐⭐⭐⭐ idem | ❌ redéploiement requis |
| **Coût CMS** | Gratuit (3 éditeurs) | 300$/mois (Team) | N/A |
| **Coût hébergement** | Gratuit | 20$/mois (Pro) | Gratuit |
| **RGPD** | ⭐⭐⭐⭐⭐ Edge EU | ⚠️ USA (DPF) | ⭐⭐⭐⭐⭐ Edge EU |
| **Formulaire SSR** | ⭐⭐⭐⭐⭐ natif | ⭐⭐⭐⭐⭐ natif | ⭐⭐⭐ API externe |
| **Évolutivité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ limité |
| **DX (next-sanity)** | ⭐⭐⭐⭐⭐ officiel | ⭐⭐⭐⭐ SDK | ⭐⭐⭐⭐ |

---

## 2. Comparaison CMS

### Sanity (recommandé)

- **Prix :** Gratuit jusqu'à 3 éditeurs, Growth 19$/mois
- **Forces :** Schéma 100% custom, collaboration temps réel, Presentation Tool (preview live), package `next-sanity` officiel
- **Faiblesses :** Hébergé (pas self-hosted), GROQ à apprendre
- **Verdict :** Optimal pour agence solo avec blog 3 catégories

### Contentful

- **Prix :** 300$/mois (Team) — prohibitif pour site vitrine
- **Forces :** Interface mature, GraphQL/REST
- **Faiblesses :** Schéma moins flexible, pas de collaboration temps réel
- **Verdict :** Trop cher pour le besoin

### MDX (fichiers Git)

- **Prix :** Gratuit
- **Forces :** Aucune dépendance externe, performance maximale
- **Faiblesses :** Redéploiement obligatoire pour publier, pas d'interface non-tech
- **Verdict :** Uniquement si équipe 100% dev et aucune autonomie client requise

### Strapi (open-source, self-hosted)

- **Prix :** Gratuit (self-hosted OVH ~15€/mois)
- **Forces :** Pas de vendor lock-in, REST/GraphQL, interface admin
- **Faiblesses :** Maintenance serveur, moins intégré Next.js
- **Verdict :** Plan de contingence si dépassement budget Sanity

---

## 3. État de l'Art GEO (Generative Engine Optimization)

### Implémentations requises

| Élément | Description | Priorité |
|---------|-------------|----------|
| **llms.txt** | Fichier décrivant l'agence pour les crawlers IA (950+ domaines adoptants) | Must |
| **Structured Data enrichies** | Schema.org : Organization, Service, BlogPosting, FAQ | Must |
| **Format "answer-first"** | Articles blog ouvrant par la réponse directe avant développement | Must |
| **FAQ systématique** | Sur pages services + articles → featured snippets + citations IA | Must |
| **Citations sources** | Référencer sources externes dans articles → crédibilité IA | Should |

### Impact mesuré

- Citations directes : **+27-41% visibilité** dans réponses IA
- Structured data FAQ/HowTo : **+20-30%**
- Délai résultats : 2-4 semaines (technique), 8-12 semaines (citations)

---

## 4. Hébergement & RGPD

| Hébergeur | Localisation | RGPD | Coût | Recommandation |
|-----------|-------------|------|------|----------------|
| **Cloudflare Pages** | 🇪🇺 Edge EU | ✅ ISO 27001, DPA | Gratuit | **Recommandé** |
| **Vercel** | 🇺🇸 USA | ⚠️ DPF + SCC | 20$/mois Pro | Acceptable |
| **OVH** | 🇫🇷 France | ✅ 100% EU | ~15€/mois VPS | Fallback RGPD strict |
| **Netlify** | 🇺🇸 USA | ⚠️ DPF + SCC | Gratuit | Acceptable |

---

## 5. Architecture Rendu Recommandée

| Page | Stratégie | Revalidation |
|------|-----------|-------------|
| Accueil (13 sections) | SSG (`force-static`) | Build time |
| Pages services (×4) | SSG | Build time |
| Blog liste | ISR | 1h |
| Blog article | ISR | 1h |
| Contact | SSR | Temps réel |
| Pages légales | SSG | Build time |

### Flux publication blog

```
Éditeur → Sanity Studio → Webhook → API Route Next.js
→ revalidateTag('blog') → ISR régénère HTML → CDN sert (< 2s)
```

---

## 6. Stack Outillage Complète

```yaml
Framework:     Next.js 15.5.15+ (App Router, TypeScript)
Styles:        Tailwind CSS 4
CMS:           Sanity (plan gratuit → Growth 19$/mois)
Hébergement:   Cloudflare Pages (gratuit, EU edge)
Email:         Resend (gratuit 100 emails/jour)
Analytics:     Plausible Cloud (9€/mois, EU, cookieless)
Consentement:  Tarteaucitron.js (open-source)
Accessibilité: Radix UI (headless, ARIA natif)
Animations:    Framer Motion
i18n (Lot 2):  next-intl (préparé mais désactivé)
Tests E2E:     Playwright
```

**Budget annuel estimé : ~470€/an** (Sanity Growth + Plausible)

---

## 7. Décisions à Prendre (ADR)

| Décision | Options | Recommandation | Quand |
|----------|---------|----------------|-------|
| CMS | Sanity vs Contentful vs Strapi | Sanity | Phase Conception |
| Hébergement | Cloudflare vs Vercel vs OVH | Cloudflare Pages | Phase Conception |
| Analytics | Plausible vs GA4 | Plausible (cookieless) | Phase Conception |
| Cookies | Tarteaucitron vs Axeptio | Tarteaucitron (gratuit) | Phase Implémentation |
| Composants UI | Radix UI vs shadcn/ui | Radix UI + Tailwind | Phase Conception |
