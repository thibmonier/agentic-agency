# US-035 : Performance Lighthouse ≥ 90

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **que le site se charge rapidement (< 2,5s)** afin de **ne pas perdre patience et quitter le site**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je lance un audit Lighthouse sur la page d'accueil
WHEN l'audit se termine
THEN le score Performance est ≥ 90 (desktop)
AND le score Performance est ≥ 85 (mobile, acceptable ≥ 80)
AND les Core Web Vitals sont "Good" : LCP < 2,5s, FID < 100ms, CLS < 0,1
```

### Scénario alternatif 1 - Pages blog
```gherkin
GIVEN je lance un audit Lighthouse sur un article blog
WHEN l'audit se termine
THEN le score Performance est ≥ 85 (desktop et mobile)
AND LCP < 2,5s malgré coverImage et contenu rich text
AND les images sont lazy-loaded et optimisées WebP/AVIF
```

### Scénario alternatif 2 - CI/CD Lighthouse
```gherkin
GIVEN un PR modifie du code frontend
WHEN le pipeline CI/CD s'exécute
THEN un audit Lighthouse est lancé automatiquement
AND le PR est bloqué si score Performance < 80
AND un commentaire GitHub affiche les métriques Lighthouse
```

### Scénario d'erreur 1 - Lighthouse < 80
```gherkin
GIVEN le score Lighthouse tombe à 75
WHEN l'audit est lancé
THEN une alerte est levée (CI/CD fail)
AND les opportunités d'optimisation sont listées (images, JS, CSS)
AND le code doit être corrigé avant merge
```

### Scénario d'erreur 2 - LCP > 2,5s
```gherkin
GIVEN le LCP dépasse 2,5s
WHEN l'audit Lighthouse est lancé
THEN une opportunité "Reduce initial server response time" ou "Optimize images" est remontée
AND le hero image doit être optimisé (priority, formats modernes)
```

## Conversation
- Aligné avec section NF01 du PRD
- Cibles :
  - Lighthouse Performance : ≥ 95 (idéal), ≥ 90 (acceptable)
  - LCP (Largest Contentful Paint) : < 2s (idéal), < 2,5s (acceptable)
  - FID (First Input Delay) : < 50ms (idéal), < 100ms (acceptable)
  - CLS (Cumulative Layout Shift) : < 0,05 (idéal), < 0,1 (acceptable)
  - TTFB (Time to First Byte) : < 500ms (idéal), < 800ms (acceptable)

**Stratégies d'optimisation (toutes à implémenter) :**

1. **SSG/ISR Next.js :**
   - Accueil + pages services : SSG force-static
   - Blog liste + articles : ISR (revalidation 1h)

2. **next/image :**
   - Optimisation automatique WebP/AVIF
   - Lazy-load images hors viewport
   - Hero image avec priority
   - srcset responsive

3. **Lazy-load sections basses :**
   - Sections accueil après hero : lazy-load avec Intersection Observer
   - Témoignages, réalisations, technologies chargés au scroll

4. **CDN Cloudflare :**
   - Edge caching EU
   - Compression gzip/brotli

5. **Font optimization :**
   - font-display: swap
   - Préchargement fonts critiques
   - Subset fonts (caractères utilisés uniquement)

6. **Code splitting :**
   - Dynamic imports pour composants lourds (carousel, modals)
   - Taille bundles JS < 200 KB (total)

7. **CSS optimization :**
   - Tailwind CSS purge (unused styles supprimés)
   - Critical CSS inline pour above-the-fold

8. **Monitoring continu :**
   - Lighthouse CI intégré pipeline GitHub Actions
   - Budget performance : bloquer PR si régression > 5 points
   - Core Web Vitals GSC : suivi mensuel

## Dépendances
- US-038 (Setup Next.js) pour optimisations natives
- US-040 (CI/CD) pour Lighthouse automatique

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
