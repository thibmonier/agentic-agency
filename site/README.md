# Agentic Agency - Site Web

Site vitrine de l'agence Agentic Agency, construit avec Next.js 16, TypeScript et Tailwind CSS.

## Stack Technique

- **Framework**: Next.js 16.2.6 (App Router)
- **React**: 19.2.4
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (body) + Space Grotesk (display)
- **UI Components**: Radix UI (Dialog, Navigation Menu, Visually Hidden, Slot)
- **Animations**: Framer Motion
- **MDX**: @next/mdx pour les articles de blog
- **Metadata**: gray-matter + reading-time

## Fonctionnalités Implémentées (Sprint 1 - Walking Skeleton)

### Page d'accueil
- ✅ Section Hero avec H1 et CTAs
- ✅ Section indicateurs chiffrés (4 stats)
- ✅ Header sticky avec navigation et menu mobile
- ✅ Footer avec 4 colonnes (Services, Blog, Légal, Contact)
- ✅ Placeholders pour sections Offres et Contact (prochains sprints)

### Blog
- ✅ Configuration MDX avec support des articles
- ✅ Page liste des articles (`/blog`)
- ✅ Filtres par catégorie (Tous, Process, Avis, Tests)
- ✅ Page article dynamique (`/blog/[slug]`)
- ✅ Metadata dynamique pour le SEO
- ✅ Article exemple : "Notre première expérience avec le delivery moderne"

## Structure du Projet

```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout avec Header/Footer
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── globals.css          # Styles globaux + Tailwind
│   │   └── blog/
│   │       ├── page.tsx         # Liste des articles
│   │       └── [slug]/
│   │           └── page.tsx     # Article dynamique
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx       # Header sticky + menu mobile
│   │   │   └── footer.tsx       # Footer 4 colonnes
│   │   ├── sections/
│   │   │   ├── hero.tsx         # Section Hero page accueil
│   │   │   └── stats.tsx        # Section indicateurs chiffrés
│   │   ├── ui/
│   │   │   └── button.tsx       # Bouton réutilisable (3 variants)
│   │   └── blog/
│   │       └── blog-card.tsx    # Card article blog
│   ├── content/
│   │   └── blog/
│   │       └── premiere-experience-delivery-moderne.mdx
│   └── lib/
│       └── mdx.ts               # Fonctions lecture MDX
├── mdx-components.tsx           # Composants MDX personnalisés
├── next.config.ts               # Config Next.js + MDX
├── tailwind.config.ts           # Config Tailwind
└── tsconfig.json                # Config TypeScript
```

## Démarrage Rapide

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

### Build de Production

```bash
npm run build
npm start
```

### Linter

```bash
npm run lint
```

## Routes Disponibles

- `/` - Page d'accueil
- `/blog` - Liste des articles
- `/blog/premiere-experience-delivery-moderne` - Article exemple
- `/#offres` - Section Offres (placeholder)
- `/#contact` - Section Contact (placeholder)

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
- **Server Components** par défaut
- **"use client"** uniquement quand nécessaire (Header, animations)
- **Composants UI** réutilisables dans `src/components/ui/`
- **Sections** page d'accueil dans `src/components/sections/`
- **Mobile-first** responsive design
- **Accessibilité** : `lang="fr"`, ARIA labels, Radix UI primitives

## Couleurs du Projet

- **Primaire** : `#1e3a5f` (bleu profond)
- **Primaire hover** : `#152e4d`
- **Fond** : `#ffffff` (blanc)
- **Texte** : `#171717` (noir)
- **Texte secondaire** : `#6b7280` (gris)

## Prochains Sprints

- [ ] Section Offres détaillée
- [ ] Formulaire de contact fonctionnel
- [ ] Pages légales (Mentions légales, Confidentialité, CGV)
- [ ] SEO avancé (sitemap, robots.txt, OG images)
- [ ] Analytics
- [ ] Newsletter
- [ ] Plus d'articles de blog

## Licence

Tous droits réservés - Agentic Agency 2026
