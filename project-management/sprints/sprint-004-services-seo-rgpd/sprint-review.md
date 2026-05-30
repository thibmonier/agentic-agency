# Sprint Review — Sprint 004

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-29 |
| Sprint | 004 - Services + SEO + RGPD |
| Duree | 1 jour (sur 14 prevus) |

## Sprint Goal

> "Les 4 pages services sont completes, le site est RGPD-conforme avec analytics cookieless, et le SEO technique de base est en place."

**Atteint : ✅ OUI**

---

## User Stories Livrees

| ID | Titre | Pts | PR | Statut |
|----|-------|-----|-----|--------|
| US-015 | Page Applications metier | 5 | #3 | ✅ Livre |
| US-016 | Page Applications mobiles | 5 | #3 | ✅ Livre |
| US-017 | Page Conseil et organisation | 5 | #3 | ✅ Livre |
| US-028 | Analytics Plausible Cloud | 2 | #3 | ✅ Livre |
| US-029 | Bandeau cookies RGPD | 3 | #3 | ✅ Livre |
| US-031 | SEO technique (meta, sitemap, canonical) | 3 | #3 | ✅ Livre |
| US-020 | Pages categories blog | 2 | #3 | ✅ Livre |
| US-024 | Flux RSS blog | 1 | #3 | ✅ Livre |

**Livre : 26/26 points (100%)**

## User Stories Non Terminees

Aucune.

---

## Demonstration

### 1. Pages services (US-015 + US-016 + US-017) — 8 min

**Applications metier** /services/applications-metier
- Hero : "Applications metier sur mesure"
- 4 problemes clients (dette technique, SI obsolete, integration, scalabilite)
- 3 offres (sur mesure, evolution, integration SI)
- FAQ 5 questions avec accordion natif + schema JSON-LD FAQPage
- CTA → /contact?sujet=applications-metier

**Applications mobiles** /services/applications-mobiles
- Hero : "Applications mobiles iOS & Android"
- 4 problemes clients (cout double, maintenance, app obsolete, time-to-market)
- 3 offres (MVP mobile, cross-platform, evolution)
- Technologies : Flutter, React Native, Dart
- CTA → /contact?sujet=applications-mobiles

**Conseil et organisation** /services/conseil
- Hero : "Conseil IT & transformation Agile"
- 4 problemes clients (silos, qualite, turnover, retards)
- 4 offres (audit, structuration, formation, accompagnement)
- Section "Outils & pratiques" au lieu de "Technologies" (Scrum, Kanban, CI/CD, TDD)
- Nouveau champ `technologiesLabel` dans ServicePageData type
- CTA → /contact?sujet=conseil

**Footer mis a jour** : liens reels vers les 4 pages services + lien "Conseil"

### 2. SEO technique (US-031) — 3 min

- /sitemap.xml : toutes les pages statiques + articles blog dynamiques
  - Priorites : accueil 1.0, services 0.8, blog 0.7, legal 0.3
- /robots.txt : Allow /, Disallow /api/, lien sitemap
- Metadata complete sur toutes les pages (title 50-60 chars, description 140-160 chars)
- HTML semantique verifie (h1 unique par page)

### 3. Categories blog (US-020) — 2 min

- /blog/category/avis — filtrage articles "Avis" + intro contextuelle
- /blog/category/tests — filtrage articles "Tests" + intro contextuelle
- /blog/category/process — filtrage articles "Process" + intro contextuelle
- Navigation entre categories avec etat actif
- Message "Aucun article" si categorie vide + lien retour /blog
- Footer mis a jour : liens directs /blog/category/X

**Note** : URLs finales `/blog/category/[name]` au lieu de `/blog/[name]` — conflit route Next.js avec `/blog/[slug]` resolu par sous-route.

### 4. Flux RSS (US-024) — 1 min

- /blog/rss.xml : RSS 2.0 valide
- Max 50 articles, tri reverse chronologique
- Chaque item : title, link, description, pubDate RFC 822, guid, category
- Link rel="alternate" dans le head de /blog
- Cache-Control: public, max-age=3600

### 5. Bandeau cookies RGPD (US-029) — 2 min

- Bandeau fixe en bas de page, premiere visite
- 3 actions : "Accepter tout", "Refuser tout"
- Lien vers /confidentialite
- Consent stocke dans localStorage
- Ne reapparait pas apres choix
- Plausible mentionne comme cookieless (transparent)

### 6. Analytics Plausible (US-028) — 1 min

- Script conditionnel sur NEXT_PUBLIC_PLAUSIBLE_DOMAIN
- Pas de script en dev (graceful degradation)
- Utilitaire `trackEvent(name, props)` pour custom events
- Types TypeScript pour window.plausible
- Cookieless → fonctionne meme si refus cookies

---

## Metriques

| Metrique | Valeur | Tendance |
|----------|--------|----------|
| Points planifies | 26 | = |
| Points livres | 26 | = |
| Velocite | 26 | → (stable vs S3) |
| Taux completion | 100% | = |
| Tests unitaires | 130 | ↗ (+30 vs S3) |
| Suites de tests | 27 | ↗ (+8 vs S3) |
| Nouvelles routes | 9 | ↗ |
| CI runs/PR | 1 | ↘ (amelioration vs 4 en S3) |
| Fichiers modifies | 43 | - |
| Lignes ajoutees | 3321 | - |

### Velocite cumulee

| Sprint | Planifie | Livre | Taux |
|--------|----------|-------|------|
| S-001 | 15 | 15 | 100% |
| S-002 | 26 | 26 | 100% |
| S-003 | 26 | 26 | 100% |
| S-004 | 26 | 26 | 100% |
| **Cumul** | **93** | **93** | **100%** |

---

## Nouvelles dependances ajoutees

| Package | Version | Usage |
|---------|---------|-------|
| husky | ^9.1.7 | Git hooks pre-commit |
| lint-staged | ^16.4.0 | Formater fichiers stages |

Note : tarteaucitronjs non installe finalement — bandeau cookies custom plus leger et sans SSR issues.

---

## Nouvelles routes

| Route | Type | Description |
|-------|------|-------------|
| /services/applications-metier | SSG | Page service apps metier |
| /services/applications-mobiles | SSG | Page service apps mobiles |
| /services/conseil | SSG | Page service conseil IT |
| /blog/category/avis | SSG | Categorie blog Avis |
| /blog/category/tests | SSG | Categorie blog Tests |
| /blog/category/process | SSG | Categorie blog Process |
| /blog/rss.xml | Dynamique | Flux RSS 2.0 |
| /sitemap.xml | SSG | Sitemap XML |
| /robots.txt | SSG | Robots exclusion |

Total routes site : 21

---

## CI/CD

- PR #3 mergee (squash) sur main
- 1 seul run CI (vs 4 en S-003) → pre-commit hook Prettier fonctionne
- 4/4 checks : quality, lighthouse, GitGuardian, Workers Builds
- Deploy automatique Cloudflare Workers apres merge

---

## Actions Retro S-003 — Suivi

| Action | Status | Resultat |
|--------|--------|----------|
| Pre-commit hook Prettier | ✅ Fait | husky + lint-staged, 1 CI run au lieu de 4 |
| Script build check | ✅ Fait | `npm run check` (lint + types + format + build) |
| Convention lazy-init | ✅ Respectee | Pas de new Service() au top-level |

---

## Feedback a collecter

1. Le contenu des pages services est-il suffisamment detaille ?
2. Les FAQs couvrent-elles les bonnes questions ?
3. Les URLs /blog/category/X sont-elles acceptables (vs /blog/X) ?
4. Priorites Sprint 005 : SEO avance, perf, a11y ou temoignages/realisations ?

---

## Impact sur le Backlog

| Action | Description |
|--------|-------------|
| EPIC-002 | ✅ COMPLET — 4/4 pages services livrees |
| EPIC-004 | ✅ COMPLET — Contact + analytics + cookies |
| EPIC-003 | 5/7 US done (manque partage LinkedIn + preview brouillons) |
| EPIC-005 | 1/7 US done (SEO technique base fait, reste avance) |
| EPIC-001 | 11/13 US done (manque temoignages + realisations — depend contenu client) |

## Prochaines etapes

1. Sprint 005 : SEO avance (structured data, GEO) + performance + accessibilite
2. Configurer compte Plausible Cloud (production)
3. Contenus temoignages et realisations (depend client)
4. Domaine custom + headers securite (differe v1.0.0)
