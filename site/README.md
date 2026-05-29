# Agentic Agency - Site Web

Site vitrine de l'agence Agentic Agency, construit avec Next.js 16, TypeScript et Tailwind CSS.

## Stack Technique

- **Framework**: Next.js 16.2.6 (App Router, Static Export)
- **React**: 19.2.4
- **TypeScript**: 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (body) + Space Grotesk (display)
- **UI Components**: Radix UI (Dialog, Navigation Menu, Visually Hidden, Slot)
- **Animations**: Framer Motion
- **MDX**: @next/mdx pour les articles de blog
- **CI/CD**: GitHub Actions (lint, type-check, tests, build)
- **Hébergement**: Cloudflare Pages (static export)

## Sections Page d'Accueil

| # | Section | Composant | Statut |
|---|---------|-----------|--------|
| 1 | Hero | `hero.tsx` | ✅ Sprint 1 |
| 2 | Stats | `stats.tsx` | ✅ Sprint 1 |
| 3 | Confiance | `trust-section.tsx` | ✅ Sprint 2 |
| 4 | Delivery | `delivery-section.tsx` | ✅ Sprint 2 |
| 5 | Offres | `offers/offers-section.tsx` | ✅ Sprint 2 |
| 6 | CTA milieu | `cta-banner.tsx` | ✅ Sprint 2 |
| 7 | Technologies | `technologies-section.tsx` | ✅ Sprint 2 |
| 8 | Valeurs | `values-section.tsx` | ✅ Sprint 2 |
| 9 | Approche | `approach-timeline.tsx` | ✅ Sprint 2 |
| 10 | Contact | placeholder | 🔲 Sprint 3 |

## Démarrage Rapide

### Développement

```bash
cd site
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build de Production

```bash
npm run build
```

Le site statique est généré dans `out/`.

### Qualité

```bash
npm run lint          # ESLint
npm run type-check    # TypeScript strict
npm run format:check  # Prettier
npm run test          # Jest + React Testing Library
npm run test:ci       # Tests + couverture
```

## Déploiement (Cloudflare Pages)

### Configuration

Le site utilise `output: 'export'` (static export). Cloudflare Pages sert les fichiers du dossier `out/`.

### Setup Cloudflare Pages (première fois)

1. **Connecter le repo GitHub** dans le dashboard Cloudflare Pages
2. **Build settings** :
   - Framework preset : `None` (static export, pas SSR)
   - Build command : `npm run build`
   - Build output directory : `out`
   - Root directory : `site`
   - Node version : `20`
3. **Environnements** :
   - Production : branche `main`
   - Preview : branches `feature/*`
4. **Variables d'environnement** (optionnel pour l'instant) :
   - `NEXT_PUBLIC_SITE_URL` : URL de production
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : domaine Plausible

### Déploiement automatique

Chaque push sur `main` déclenche un build + deploy automatique.

### Rollback

Dans le dashboard Cloudflare Pages > Deployments > cliquer "Rollback" sur une version précédente.

### CI/CD GitHub Actions

Le pipeline `.github/workflows/ci.yml` s'exécute sur chaque PR :
1. Install (npm ci)
2. Lint (ESLint)
3. Type Check (tsc --noEmit)
4. Format Check (Prettier)
5. Tests (Jest)
6. Build (Next.js static export)

## Structure du Projet

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout avec Header/Footer
│   │   ├── page.tsx             # Page d'accueil (9 sections)
│   │   ├── globals.css          # Styles globaux + Tailwind
│   │   └── blog/
│   │       ├── page.tsx         # Liste des articles
│   │       └── [slug]/page.tsx  # Article dynamique
│   ├── components/
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Sections page d'accueil
│   │   │   ├── hero.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── trust-section.tsx
│   │   │   ├── delivery-section.tsx
│   │   │   ├── offers/          # 4 piliers + cartes
│   │   │   ├── cta-banner.tsx
│   │   │   ├── technologies-section.tsx
│   │   │   ├── values-section.tsx
│   │   │   └── approach-timeline.tsx
│   │   ├── ui/                  # Composants réutilisables
│   │   └── blog/                # Composants blog
│   ├── data/                    # Données statiques TypeScript
│   ├── content/blog/            # Articles MDX
│   └── lib/                     # Utilitaires
├── jest.config.ts
├── next.config.ts
└── tsconfig.json
```

## Routes Disponibles

- `/` - Page d'accueil (9 sections + placeholder contact)
- `/blog` - Liste des articles avec filtres
- `/blog/[slug]` - Article de blog
- `/#offres`, `/#delivery`, `/#technologies`, etc. - Ancres sections

## Ajouter un Article de Blog

1. Créer un fichier `.mdx` dans `src/content/blog/`
2. Ajouter le frontmatter :

```yaml
---
title: "Titre de l'article"
description: "Description courte"
date: "2026-05-29"
category: "Process"  # ou "Avis", "Tests"
author: "Agentic Agency"
readingTime: 5
tags: ["tag1", "tag2"]
---
```

3. Écrire le contenu en Markdown/MDX
4. L'article sera automatiquement disponible sur `/blog/nom-du-fichier`

## Conventions de Code

- **TypeScript strict** : Pas de `any`, typage explicite
- **Server Components** par défaut, `"use client"` uniquement quand nécessaire
- **Named exports** : `export function Component() {}`
- **Tailwind CSS** : classes inline, responsive mobile-first
- **Accessibilité** : `lang="fr"`, ARIA labels, contraste WCAG AA

## Couleurs

| Token | Hex | Usage |
|-------|-----|-------|
| Primaire | `#1e3a5f` | Titres, boutons, CTA |
| Primaire hover | `#152e4d` | États hover |
| Accent | `#4a7bb7` | Éléments secondaires |
| Fond | `#ffffff` / `#f9fafb` | Sections alternées |
| Texte | `#4b5563` | Corps de texte |

## Licence

Tous droits réservés - Agentic Agency 2026
