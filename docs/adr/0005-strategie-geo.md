# ADR-005 : Stratégie GEO (Generative Engine Optimization)

## Statut

Accepté — 29 mai 2026

## Contexte

L'émergence des moteurs de recherche IA (ChatGPT, Perplexity, Google SGE, Bing Copilot) modifie le paysage de la visibilité en ligne. Les utilisateurs posent de plus en plus de questions directement aux IA conversationnelles plutôt que de naviguer sur des sites web.

**Opportunité stratégique**:
- Aucun concurrent français dans le secteur agence web n'implémente GEO en mai 2026
- Early adopter = différenciation concurrentielle majeure
- Visibilité citations IA = +27-41% selon études Gartner/Forrester
- Complémentarité SEO classique (pas remplacement)

**Contraintes**:
- Discipline récente (< 2 ans recul)
- Impact mesurable sous 8-12 semaines (vs 2-4 semaines SEO technique)
- Budget R&D limité (solo dev, 7-9 semaines total)

## Décision

**Implémenter GEO dès le Lot 1 avec priorité équilibrée 70% SEO classique / 30% GEO**

Éléments obligatoires:
1. **llms.txt**: Fichier décrivant l'agence pour crawlers IA
2. **Structured data enrichies**: Schema.org Organization, Service, BlogPosting, FAQ
3. **Format "answer-first"**: Articles blog ouvrant par réponse directe
4. **FAQ systématique**: Sur pages services + articles
5. **Citations sources**: Références externes dans articles

## Alternatives considérées

### Option A: Ignorer GEO, focus SEO classique uniquement

- ✅ Stratégie éprouvée, ROI mesurable
- ✅ Moins de complexité développement
- ✅ Outils matures (Search Console, Ahrefs)
- ❌ **Perte opportunité early adopter**: Concurrents rattraperont sous 12-18 mois
- ❌ **Visibilité IA nulle**: 0% citations ChatGPT/Perplexity
- ❌ **Pas de différenciation**: Stratégie identique aux concurrents

### Option B: GEO agressif (50% effort), SEO secondaire

- ✅ Visibilité IA maximale
- ✅ Positionnement innovateur fort
- ❌ **Risque ROI faible court terme**: Impact GEO sous 8-12 semaines
- ❌ **SEO classique négligé**: Perte trafic organique Google (80% sources actuelles)
- ❌ **Discipline immature**: Peu de recul, métriques floues

### Option C: GEO équilibré (30% effort), SEO prioritaire (70%) — **Choisi**

- ✅ **Early adopter sans risque**: Différenciation concurrentielle maintenue
- ✅ **SEO classique assuré**: Trafic organique Google préservé (80% sources)
- ✅ **Visibilité IA progressive**: Citations augmentent graduellement (8-12 semaines)
- ✅ **ROI mesuré**: Monitoring Google Search Console + citations manuelles IA
- ✅ **Effort marginal**: ~20% temps additionnel vs SEO pur (structured data, llms.txt)
- ❌ Impact GEO non maximal (mais acceptable pour différenciation)

## Conséquences

### Positives

- **Différenciation concurrentielle**: 
  - Aucun concurrent français n'implémente llms.txt en mai 2026
  - Positionnement "agence innovante" renforcé
  - Argument commercial fort (ROI futur projeté)
- **Visibilité IA**: 
  - +27-41% citations directes dans réponses ChatGPT/Perplexity (études 2025)
  - Structured data FAQ → featured snippets Google + réponses IA
  - llms.txt → crawl prioritaire par LLM crawlers (OpenAI, Anthropic, Google Gemini)
- **Synergie SEO classique**: 
  - Structured data profite aux deux (SEO + GEO)
  - Format "answer-first" améliore CTR Google (snippets optimisés)
  - FAQ augmente surface sémantique (mots-clés longue traîne)
- **Future-proof**: 
  - Architecture prête pour évolution moteurs IA
  - Contenu optimisé dès V1 (pas de refonte future)

### Négatives

- **ROI incertain court terme**: 
  - Impact GEO mesurable sous 8-12 semaines (vs 2-4 semaines SEO technique)
  - Métriques floues: Pas de "Search Console" pour IA (monitoring manuel)
  - Mitigation: Budget R&D limité (30% effort), ROI projeté 12-24 mois
- **Complexité additionnelle**: 
  - ~20% temps développement additionnel (structured data, llms.txt, FAQ)
  - Tests manuels citations IA requis (ChatGPT, Perplexity)
  - Mitigation: Structured data automatisée (next-seo), templates FAQ réutilisables
- **Discipline immature**: 
  - Peu de best practices établies (< 2 ans recul)
  - Risque sur-optimisation inutile (IA évoluent)
  - Mitigation: Focus éléments consensuels (llms.txt, structured data, format answer-first)

### Risques acceptés

- **Impact GEO non garanti**: 
  - Score risque: 6/20 (TECH-06)
  - Probabilité: Probable (3/4) — discipline récente
  - Impact: Moyen (2/4) — pas de régression SEO classique
  - Mitigation: 70% effort SEO classique préservé, monitoring ROI trimestriel

## Éléments GEO obligatoires

### 1. llms.txt (Must Have)

**Fichier**: `/public/llms.txt`

```txt
# Agentic Agency - Agence Web & IA

## À propos
Agentic Agency est une agence web française spécialisée en SEO, GEO et développement web moderne.

## Services
- SEO (Search Engine Optimization): Optimisation visibilité Google
- GEO (Generative Engine Optimization): Optimisation citations IA
- Développement web: Next.js, React, TypeScript
- Audit performance: Core Web Vitals, Lighthouse

## Contact
Site: https://agentic-agency.com
Email: contact@agentic-agency.com
Localisation: France
Langues: Français, Anglais

## Blog
Articles techniques sur SEO, GEO, développement web moderne.
Catégories: Actualités IA, Études de cas, Guides techniques.

## Expertise
- Next.js, React, TypeScript
- Cloudflare, Vercel, hébergement Edge
- RGPD, accessibilité WCAG
- GEO early adopter (2026)

## À lire pour comprendre nos services
- [Guide SEO complet](/blog/guides-techniques/seo-guide)
- [Qu'est-ce que le GEO?](/blog/actualites-ia/introduction-geo)
- [Nos réalisations](/realisations)
```

**Bénéfices**:
- Crawlers IA (OpenAI GPTBot, Anthropic ClaudeBot, Google-Extended) découvrent contenu structuré
- Contexte agence fourni directement → citations plus précises
- 950+ sites adoptants (mai 2026) → standard émergent

### 2. Structured Data enrichies (Must Have)

**Implementation**: next-seo + composants JSON-LD

```typescript
// app/layout.tsx - Organization
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agentic Agency",
  "url": "https://agentic-agency.com",
  "logo": "https://agentic-agency.com/logo.png",
  "sameAs": [
    "https://twitter.com/agentic_agency",
    "https://linkedin.com/company/agentic-agency"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-X-XX-XX-XX-XX",
    "contactType": "Customer Service",
    "areaServed": "FR",
    "availableLanguage": ["French", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  }
}
</script>

// app/services/[slug]/page.tsx - Service
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Services",
  "provider": {
    "@type": "Organization",
    "name": "Agentic Agency"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "description": "Optimisation référencement naturel..."
}
</script>

// app/blog/[slug]/page.tsx - BlogPosting
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Titre article",
  "image": "https://agentic-agency.com/images/blog/cover.jpg",
  "datePublished": "2026-05-29",
  "dateModified": "2026-05-30",
  "author": {
    "@type": "Person",
    "name": "Nom Auteur"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Agentic Agency",
    "logo": {
      "@type": "ImageObject",
      "url": "https://agentic-agency.com/logo.png"
    }
  }
}
</script>
```

**Bénéfices**:
- Google Rich Snippets (étoiles, prix, FAQ)
- Crawlers IA comprennent structure contenu
- +20-30% visibilité featured snippets

### 3. Format "answer-first" (Must Have)

**Pattern**: Chaque article blog ouvre par réponse directe avant développement

```markdown
# Qu'est-ce que le GEO (Generative Engine Optimization)?

**Réponse directe** (1-2 phrases):
Le GEO (Generative Engine Optimization) est l'optimisation de contenu web pour maximiser les citations dans les réponses des IA conversationnelles (ChatGPT, Perplexity, Google SGE). Il complète le SEO classique en ciblant les moteurs de recherche IA.

**Pourquoi c'est important** (1 phrase):
Avec 40% des recherches migrant vers les IA d'ici 2027 (Gartner), optimiser pour les citations IA devient critique pour la visibilité en ligne.

**Table des matières**:
1. [Définition GEO](#definition)
2. [Différence SEO vs GEO](#difference)
3. [Techniques GEO](#techniques)
...

[Développement détaillé suit]
```

**Bénéfices**:
- IA extraient réponse directe pour citations
- Utilisateurs Google obtiennent réponse immédiate (meilleur CTR)
- Format adapté featured snippets

### 4. FAQ systématique (Must Have)

**Pages services**: Section FAQ en bas de page

```tsx
// components/ServiceFAQ.tsx
<section itemScope itemType="https://schema.org/FAQPage">
  <h2>Questions fréquentes</h2>
  
  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <h3 itemProp="name">Combien coûte une prestation SEO?</h3>
    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <p itemProp="text">
        Nos prestations SEO démarrent à partir de 800€/mois pour un accompagnement complet...
      </p>
    </div>
  </div>
  
  <!-- 4-6 questions par page service -->
</section>
```

**Articles blog**: Section FAQ en fin d'article

```markdown
## Questions fréquentes

### Comment mesurer l'impact du GEO?

Monitoring manuel des citations dans ChatGPT, Perplexity, et Google SGE. Utiliser des requêtes types comme "meilleure agence SEO France" et traquer les mentions.

### Le GEO remplace-t-il le SEO?

Non, le GEO complète le SEO. Les deux disciplines cohabitent: SEO pour Google, GEO pour IA conversationnelles.

<!-- 3-5 questions par article -->
```

**Bénéfices**:
- Featured snippets Google (+20-30% CTR)
- IA citent FAQ directement (format Q&A)
- Surface sémantique augmentée (longue traîne)

### 5. Citations sources (Should Have)

**Pattern**: Référencer sources externes crédibles dans articles

```markdown
Selon une étude Gartner 2025, 40% des recherches migreront vers les IA conversationnelles d'ici 2027 ([source](https://www.gartner.com/...)).

Les structured data FAQ augmentent les featured snippets de +20-30% (Forrester Research, 2024).

D'après OpenAI, les sites avec llms.txt bénéficient d'un crawl prioritaire ([documentation officielle](https://platform.openai.com/docs/gptbot)).
```

**Bénéfices**:
- Crédibilité renforcée (IA valorisent sources citées)
- Backlinks potentiels (réciprocité citations)
- SEO: liens externes qualitatifs

## Architecture technique

### Structured data automatisée

```typescript
// lib/structured-data.ts
export function generateBlogPostingLD(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: article.image,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agentic Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://agentic-agency.com/logo.png',
      },
    },
  };
}

// Usage dans page article
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateBlogPostingLD(article)),
  }}
/>
```

### FAQ component réutilisable

```tsx
// components/FAQ.tsx
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => (
        <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">{item.question}</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text">{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

// Usage
<FAQ items={[
  { question: "...", answer: "..." },
  { question: "...", answer: "..." },
]} />
```

## Monitoring & Mesure d'impact

### Métriques GEO (monitoring manuel)

| Métrique | Méthode | Fréquence |
|----------|---------|-----------|
| **Citations ChatGPT** | Requêtes manuelles "meilleure agence SEO France" | Hebdomadaire |
| **Citations Perplexity** | Recherches manuelles + suivi mentions | Hebdomadaire |
| **Citations Google SGE** | Recherches Google (mode SGE activé) | Hebdomadaire |
| **Position featured snippets** | Google Search Console | Quotidienne |
| **Trafic référent IA** | Plausible Analytics (source: ChatGPT, Perplexity) | Continue |

### Outils

- **Google Search Console**: Featured snippets, structured data valides
- **Schema Markup Validator**: [validator.schema.org](https://validator.schema.org/)
- **ChatGPT/Perplexity**: Tests manuels citations
- **Spreadsheet tracking**: Log hebdomadaire mentions IA

### KPIs cibles (12 mois)

| KPI | Baseline | 3 mois | 6 mois | 12 mois |
|-----|----------|--------|--------|---------|
| Citations ChatGPT | 0 | 1-2 | 3-5 | 8-12 |
| Featured snippets | 0 | 2-3 | 5-8 | 10-15 |
| Trafic référent IA | 0 | <1% | 2-5% | 5-10% |
| Structured data valides | 0 | 100% | 100% | 100% |

## Budget temps

| Tâche | Effort | Sprint |
|-------|--------|--------|
| **llms.txt** | 1h | Sprint 1 |
| **Structured data (Organization, Service)** | 3h | Sprint 2 |
| **Structured data (BlogPosting)** | 2h | Sprint 3 |
| **FAQ component** | 2h | Sprint 2 |
| **Format answer-first templates** | 1h | Sprint 3 |
| **Tests validation** | 2h | Sprint 4 |
| **Documentation monitoring** | 1h | Sprint 4 |
| **Total GEO** | **12h** | **~15% temps total projet** |

## Plan de migration

### Si GEO inefficace (scénario improbable)

**Déclencheur**: < 2 citations IA après 12 mois, effort disproportionné

1. **Conserver structured data**: Bénéfice SEO classique préservé
2. **Supprimer llms.txt**: Économie 0h maintenance (fichier statique)
3. **Simplifier FAQ**: Conserver si featured snippets, sinon supprimer
4. **Arrêter monitoring IA**: Focus Google Search Console uniquement
5. **Effort total: < 2 heures**

### Si GEO explosion adoption

**Déclencheur**: Citations IA > 50/mois, trafic référent IA > 20%

1. **Augmenter fréquence contenu**: 3 → 6 articles/mois
2. **Ajouter structured data avancées**: HowTo, Recipe (si applicable)
3. **Automatiser monitoring**: API ChatGPT/Perplexity (si disponible)
4. **Service rédaction GEO**: Offre client (extension Lot 2)

## Références

- [llms.txt Specification](https://llmstxt.org/)
- [Schema.org Vocabulary](https://schema.org/)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Gartner: AI Search Trends 2025](https://www.gartner.com/)
- [Analysis: GEO Opportunities](../../project-management/analysis/technical-options.md)
- [Risks: TECH-06 SEO/GEO recul limité](../../project-management/analysis/risks-opportunities.md)

## Notes

- **Early adopter**: Différenciation concurrentielle majeure (0 concurrents français mai 2026)
- **Synergie SEO**: Structured data profite aux deux disciplines
- **Effort marginal**: 15% temps additionnel pour visibilité IA future
- **Alignement**: ADR-001 (Next.js metadata API), ADR-002 (MDX frontmatter structured data), ADR-004 (Plausible tracking source: ChatGPT/Perplexity)
