# Sprint Review — Sprint 001 Walking Skeleton

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-29 |
| Sprint Goal | "Un visiteur peut voir la page d'accueil skeleton et lire 1 article de blog déployé sur Cloudflare Pages." |
| Track | Enterprise |

---

## Sprint Goal

> Un visiteur peut voir la page d'accueil skeleton et lire 1 article de blog.

**Atteint : ⚠️ PARTIELLEMENT**

Le site est fonctionnel localement (accueil + blog). Le déploiement Cloudflare et le CI/CD restent à configurer (nécessitent repo GitHub + compte Cloudflare).

---

## User Stories Livrées

| ID | Titre | Points | Statut |
|----|-------|--------|--------|
| US-038 | Setup Next.js 16 + TypeScript + Tailwind 4 | 2 | ✅ Livré |
| US-001 | Hero section accueil | 3 | ✅ Livré |
| US-002 | Section indicateurs chiffrés | 2 | ✅ Livré |
| US-018 | Setup MDX + 1 article exemple | 3 | ✅ Livré |
| US-019 | Page liste blog (filtres catégories) | 2 | ✅ Livré |
| US-021 | Page article /blog/[slug] (SSG + metadata) | 3 | ✅ Livré |

**Livré : 15/20 points (75%)**

## User Stories Non Terminées

| ID | Titre | Points | Raison |
|----|-------|--------|--------|
| US-039 | Cloudflare Pages + deploy | 2 | Nécessite repo GitHub + compte Cloudflare |
| US-040 | CI/CD GitHub Actions | 3 | Dépend de US-039 |

**Action :** Reporter au début Sprint 2 (bloquant infra).

---

## Démonstration

### 1. Page d'accueil (US-001 + US-002)

**Routes :** `/`

**Ce qui fonctionne :**
- Header sticky avec navigation desktop + menu mobile (Radix Dialog)
- Hero section : H1 "Livrez plus vite. Sans sacrifier la qualité." + 2 CTAs
- Section Stats : 4 indicateurs (11 Stacks, 100% Auditable, +10 ans, 24-48h)
- Footer 4 colonnes (Services, Blog, Légal, Contact)
- Responsive mobile-first (testé iPhone SE → Desktop)
- Fonts : Inter (body) + Space Grotesk (display) via next/font

### 2. Blog MDX (US-018 + US-019 + US-021)

**Routes :** `/blog` · `/blog/premiere-experience-delivery-moderne`

**Ce qui fonctionne :**
- Système MDX fonctionnel : frontmatter (gray-matter) + reading-time
- Page liste blog avec cards (titre, description, catégorie, date, temps lecture)
- Filtres par catégorie (Tous, Process, Avis, Tests)
- Page article dynamique avec generateMetadata + generateStaticParams
- 1 article exemple "Notre première expérience avec le delivery moderne"
- Styles prose pour le contenu MDX

---

## Métriques Techniques

| Métrique | Valeur |
|----------|--------|
| **Build** | ✅ 0 erreurs TypeScript |
| **Lint** | ✅ 0 erreurs, 0 warnings |
| **Routes** | 4 (`/`, `/blog`, `/blog/[slug]`, `/_not-found`) |
| **Fichiers source** | 13 (.tsx, .ts, .mdx, .css) |
| **Lignes de code** | ~755 (hors config) |
| **Dépendances** | 521 packages installés |
| **Temps build** | ~3s (Turbopack) |

### Stack vérifiée

| Composant | Version | Statut |
|-----------|---------|--------|
| Next.js | 16.2.6 | ✅ |
| React | 19.2.4 | ✅ |
| TypeScript | 5.x | ✅ |
| Tailwind CSS | 4.x | ✅ |
| Radix UI | Latest | ✅ |
| Framer Motion | Latest | ✅ |
| @next/mdx | Latest | ✅ |

---

## Décisions Prises Ce Sprint

| Décision | Raison |
|----------|--------|
| MDX + Git (pas Sanity) | Client veut limiter SaaS, besoin simple |
| Cloudflare Pages (pas Vercel) | Gratuit, EU edge, RGPD |
| Plausible (pas GA4) | Cookieless, pas de bannière cookies |
| Code dans `site/` (pas racine) | Séparer code du project-management |
| Next.js 16 (pas 15) | Version installée par create-next-app, API compatible |

---

## Points d'Attention

### Risques identifiés
- ⚠️ **Next.js 16** installé au lieu de 15.5.15+ prévu dans la tech spec. Version plus récente, patches CVE inclus.
- ⚠️ **US-039/US-040** bloquées — infra non déployée. Impact : pas de validation en conditions réelles.

### Qualité
- ✅ TypeScript strict, pas de `any`
- ✅ Composants Server par défaut, `"use client"` uniquement Header (menu mobile)
- ✅ `lang="fr"` sur HTML
- ✅ Accessible : ARIA labels, Radix UI headless

---

## Burndown

```
Points |
  20   |●
  18   |
  15   |                                      ●
  13   |
  10   |
   8   |
   5   |                                  (idéal: 0)
   3   |
   0   |________________________________________
       J1                                    J1
       (Sprint compressé en 1 session)
```

Sprint compressé : développement réalisé en une session unique (pas de sprints journaliers classiques).

---

## Impact Backlog

| Action | Élément | Description |
|--------|---------|-------------|
| Reporter | US-039 | Cloudflare deploy → Sprint 2 début |
| Reporter | US-040 | CI/CD GitHub Actions → Sprint 2 début |
| Noter | — | Next.js 16 au lieu de 15 → mettre à jour tech-spec |

---

## Prochaines Étapes

1. **Configurer repo GitHub** + push du code
2. **US-039 + US-040** (Cloudflare + CI/CD) en début Sprint 2
3. **Sprint 2** : EPIC-001 complet (13 sections accueil)
4. **Tester en local** : `cd site && npm run dev` → http://localhost:3000

---

## Commandes

```bash
# Tester localement
cd /Users/tmonier/Projects/agentic-agency/site
npm run dev
# → http://localhost:3000
# → http://localhost:3000/blog
# → http://localhost:3000/blog/premiere-experience-delivery-moderne
```
