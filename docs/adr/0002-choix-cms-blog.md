# ADR-002 : Choix du CMS Blog

## Statut

Accepté — 29 mai 2026

## Contexte

Le site vitrine nécessite un système de gestion de contenu pour le blog avec les exigences suivantes:

- **3 catégories**: Actualités IA, Études de cas, Guides techniques
- **Fréquence**: ~3 articles/mois
- **Éditeurs**: 1 éditeur principal (fondateur), potentiellement +1-2 contributeurs futurs
- **Autonomie**: Idéalement publication sans intervention développeur
- **Contrainte client MAJEURE**: Volonté de limiter les dépendances SaaS externes

Contraintes:
- Budget limité (<100€/mois pour le CMS)
- Pas de serveur à maintenir (solo dev)
- Intégration Next.js souhaitée
- RGPD: Données hébergées EU si possible

## Décision

**MDX + Fichiers Git (versionnés dans le repository)**

Cette décision reflète le choix du client de privilégier l'autonomie et la réduction des dépendances externes, malgré les limitations en termes d'interface d'édition.

## Alternatives considérées

### Sanity (Headless CMS SaaS) — Recommandation technique initiale

- ✅ Interface intuitive pour non-développeurs
- ✅ Collaboration temps réel entre éditeurs
- ✅ Package `next-sanity` officiel avec ISR natif
- ✅ Schéma 100% custom (TypeScript type-safe)
- ✅ Presentation Tool: preview live des articles avant publication
- ✅ Gratuit jusqu'à 3 éditeurs (Growth 19$/mois au-delà)
- ✅ Webhook → revalidation Next.js → Publication en < 2s
- ❌ **Dépendance SaaS externe** (vendor lock-in)
- ❌ Hébergé USA (RGPD: DPF + Standard Contractual Clauses)
- ❌ GROQ query language à apprendre
- ❌ **Refusé par le client** (volonté de limiter SaaS)

### Contentful (Headless CMS SaaS)

- ✅ Interface mature, GraphQL/REST
- ✅ Écosystème établi
- ❌ **300$/mois minimum** (Team plan) — prohibitif
- ❌ Schéma moins flexible que Sanity
- ❌ Pas de collaboration temps réel
- ❌ **Dépendance SaaS externe**

### MDX + Fichiers Git — **Choisi**

- ✅ **Zéro dépendance externe**: Contenu versionné avec le code
- ✅ **Gratuit**: Aucun coût récurrent
- ✅ **Simplicité**: Markdown enrichi avec React components
- ✅ **Versioning Git**: Historique complet, rollback facile
- ✅ **Type-safe**: Frontmatter validé avec Zod
- ✅ **SEO optimal**: next-mdx-remote pour SSG/ISR
- ✅ **Ownership total**: Pas de vendor lock-in
- ✅ **Performance**: Aucune latence réseau API externe
- ❌ **Pas d'interface WYSIWYG**: Édition en Markdown (VS Code, Typora, etc.)
- ❌ **Publication = redéploiement**: Commit + push → rebuild (~2min Cloudflare Pages)
- ❌ **Pas adapté pour éditeurs non-techniques**: Nécessite connaissance Markdown + Git

### Keystatic (Open-source par Thinkmill)

- ✅ Interface admin graphique locale
- ✅ Contenu stocké en Markdown dans Git
- ✅ Gratuit et open-source
- ✅ Preview live
- ❌ Projet récent (stabilité incertaine)
- ❌ Intégration Next.js App Router expérimentale
- ❌ Écosystème limité vs Sanity
- **Note**: Possible migration future si besoin éditeur graphique

### Strapi (Open-source, self-hosted)

- ✅ Pas de vendor lock-in
- ✅ Interface admin complète
- ✅ REST/GraphQL
- ✅ Gratuit (self-hosted)
- ❌ **Serveur à maintenir** (OVH VPS ~15€/mois)
- ❌ Moins intégré Next.js que Sanity
- ❌ Maintenance serveur (updates, backups, sécurité)
- **Note**: Plan de contingence si MDX devient bloquant

## Conséquences

### Positives

- **Contrôle total**: Contenu versionné avec le code, aucune dépendance externe
- **Coût nul**: Pas de frais récurrents CMS
- **Simplicité architecture**: Pas d'API externe à sécuriser/monitorer
- **Performance**: next-mdx-remote compile MDX en React Components (SSG/ISR)
- **Versioning Git**: Historique complet, branches pour drafts, rollback instantané
- **Developer-friendly**: Édition dans VS Code avec preview, snippets, linting
- **SEO optimal**: SSG/ISR natif, structured data dans frontmatter
- **Ownership**: Migration facile vers autre solution (export MD standard)

### Négatives

- **Publication lente**: Commit → push → rebuild (~2min) vs webhook instantané Sanity
- **Pas d'interface non-dev**: Éditeur doit connaître Markdown + Git (VS Code, GitHub UI, ou Typora)
- **Pas de preview live**: Nécessite build local ou Cloudflare Preview Deploy
- **Pas de collaboration temps réel**: Git flow classique (branches, PRs)
- **Gestion images**: Optimisation manuelle ou via next/image (pas d'upload UI)
- **Workflow client**: Nécessite formation Git/Markdown ou accès GitHub UI

### Risques acceptés

- **Autonomie réduite V1**: Client devra commiter via GitHub UI ou transmettre articles
  - **Mitigation**: Documentation workflow, GitHub UI simplifié, ou éditeur Markdown en ligne (StackEdit)
- **Scaling éditeurs**: Si >3 éditeurs, MDX + Git devient limitant
  - **Fallback**: Migration vers Keystatic (contenu déjà en Markdown) ou Sanity (export JSON)

## Architecture technique

### Structure des fichiers

```
/content/
  blog/
    actualites-ia/
      2026-05-article-1.mdx
      2026-05-article-2.mdx
    etudes-de-cas/
      projet-client-x.mdx
    guides-techniques/
      guide-nextjs.mdx
```

### Frontmatter (validé avec Zod)

```yaml
---
title: "Titre de l'article"
slug: "titre-article"
description: "Description SEO"
category: "actualites-ia" | "etudes-de-cas" | "guides-techniques"
publishedAt: "2026-05-29"
updatedAt: "2026-05-30"
author:
  name: "Nom Auteur"
  avatar: "/images/authors/avatar.jpg"
image: "/images/blog/cover.jpg"
tags: ["nextjs", "seo", "geo"]
draft: false
---
```

### Stack technique

```typescript
// next-mdx-remote: Compile MDX en React Components
import { MDXRemote } from 'next-mdx-remote/rsc';
import { compileMDX } from 'next-mdx-remote/rsc';
import { z } from 'zod';

// Validation frontmatter
const FrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  category: z.enum(['actualites-ia', 'etudes-de-cas', 'guides-techniques']),
  publishedAt: z.string(),
  // ...
});

// ISR: Revalidation 1h
export const revalidate = 3600;
```

## Workflow publication

### Pour le développeur

```bash
# 1. Créer l'article
touch content/blog/actualites-ia/nouvel-article.mdx

# 2. Rédiger (VS Code + extension MDX)
# Frontmatter + contenu Markdown

# 3. Preview local
npm run dev
# http://localhost:3000/blog/nouvel-article

# 4. Commit + push
git add content/blog/actualites-ia/nouvel-article.mdx
git commit -m "feat(blog): add new article about AI trends"
git push origin main

# 5. Déploiement automatique Cloudflare Pages (~2min)
```

### Pour le client (options)

#### Option A: GitHub UI (simple)

1. Naviguer vers `content/blog/<catégorie>/`
2. Cliquer "Add file" → "Create new file"
3. Rédiger en Markdown (preview GitHub)
4. Commit directly to main → Déploiement auto

#### Option B: Éditeur Markdown externe

1. Rédiger dans Typora/StackEdit/Obsidian
2. Envoyer le fichier .mdx au dev
3. Dev commit + push

#### Option C: Migration future Keystatic

1. Interface admin graphique locale
2. Contenu sauvegardé en Markdown dans Git
3. Commit + push automatique

## Plan de migration

### Vers Sanity (si autonomie client critique)

1. **Export MDX → JSON**: Script conversion frontmatter + body (1j)
2. **Schéma Sanity**: Définir document types (0.5j)
3. **Import**: API Sanity bulk import (0.5j)
4. **Code**: next-sanity + ISR (1j)
5. **Effort total estimé: 3 jours**
6. **Coût**: 0-19$/mois (3 éditeurs gratuit)

### Vers Keystatic (si interface graphique souhaitée)

1. **Configuration Keystatic**: `keystatic.config.ts` (0.5j)
2. **Migration**: Contenu déjà en Markdown (aucune migration)
3. **Interface admin**: Route `/keystatic` (0.5j)
4. **Effort total estimé: 1 jour**
5. **Coût**: Gratuit

### Vers Strapi (si besoin API REST externe)

1. **Export MDX → Strapi**: API REST bulk import (1j)
2. **VPS setup**: OVH VPS + PostgreSQL (1j)
3. **Code**: Strapi SDK (1j)
4. **Effort total estimé: 3 jours**
5. **Coût récurrent**: 15€/mois (VPS)

## Pattern Repository (abstraction CMS)

Pour faciliter migration future, abstraction via pattern Repository:

```typescript
// /lib/blog/repository.interface.ts
export interface BlogRepository {
  getArticles(): Promise<Article[]>;
  getArticle(slug: string): Promise<Article | null>;
  getArticlesByCategory(category: string): Promise<Article[]>;
}

// /lib/blog/mdx.repository.ts
export class MdxBlogRepository implements BlogRepository {
  // Implémentation MDX
}

// Si migration Sanity:
// /lib/blog/sanity.repository.ts
export class SanityBlogRepository implements BlogRepository {
  // Implémentation Sanity
}
```

## Références

- [next-mdx-remote Documentation](https://github.com/hashicorp/next-mdx-remote)
- [Keystatic](https://keystatic.com/)
- [Analysis: CMS Options](../../project-management/analysis/technical-options.md)
- [Risks: ORG-01 Autonomie blog](../../project-management/analysis/risks-opportunities.md)

## Notes

- **Décision client**: Privilégier zéro SaaS externe même si Sanity techniquement supérieur
- **Évolutivité**: Architecture Repository permet migration future sans refonte
- **Formation**: Documentation workflow GitHub UI pour client (Sprint 4)
- **Alignement**: ADR-001 (Next.js ISR), ADR-003 (Cloudflare rebuild ~2min)
