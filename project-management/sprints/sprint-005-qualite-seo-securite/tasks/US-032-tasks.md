# Taches - US-032 : Structured Data Schema.org

## Informations US

- **Epic** : EPIC-005
- **Persona** : P-002 - Thomas (DSI/CTO)
- **Story Points** : 3
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** DSI/CTO,
**Je veux** que les pages du site contiennent des donnees structurees Schema.org,
**Afin de** ameliorer l'affichage dans les resultats Google (rich snippets).

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-032-01 | [FE-WEB] | Organization + WebSite JSON-LD (layout) | 1.5h | - | 🔲 |
| T-032-02 | [FE-WEB] | BlogPosting JSON-LD (articles blog) | 2h | - | 🔲 |
| T-032-03 | [FE-WEB] | BreadcrumbList JSON-LD (services + blog) | 1.5h | - | 🔲 |
| T-032-04 | [TEST] | Tests structured data validation | 1h | T-032-01..03 | 🔲 |

**Total estime** : 6h

Note : FAQPage JSON-LD deja implemente dans service-faq.tsx (S-003).

---

## Detail des taches

### T-032-01 : Organization + WebSite JSON-LD

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Ajouter les schemas Organization et WebSite sur toutes les pages.

**Actions** :
- Creer composant `JsonLd` reutilisable (ou helper function)
- Schema Organization : name, url, logo, description, sameAs (LinkedIn), contactPoint
- Schema WebSite : name, url, potentialAction (SearchAction optionnel)
- Injecter dans layout.tsx (present sur toutes les pages)

**Schema Organization** :
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Agentic Agency",
  "url": "https://agentic-agency.fr",
  "logo": "https://agentic-agency.fr/logo.png",
  "description": "Agence de developpement web, applications metier et mobiles",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@agentic-agency.com"
  }
}
```

**Fichiers a creer/modifier** :
- `src/components/seo/json-ld.tsx` (composant reutilisable)
- `src/app/layout.tsx` (injection Organization + WebSite)

**Criteres** :
- [ ] Schema Organization valide (Rich Results Test)
- [ ] Schema WebSite valide
- [ ] Present sur toutes les pages

---

### T-032-02 : BlogPosting JSON-LD

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Ajouter le schema BlogPosting sur chaque article de blog.

**Actions** :
- Schema BlogPosting : headline, author, datePublished, dateModified, description, publisher, image
- Generer depuis les metadata MDX (frontmatter)
- Author : Organization (Agentic Agency)
- Publisher : Organization (meme)
- image : coverImage du frontmatter ou image par defaut

**Schema BlogPosting** :
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[title]",
  "description": "[excerpt]",
  "datePublished": "[date]",
  "author": { "@type": "Organization", "name": "Agentic Agency" },
  "publisher": { "@type": "Organization", "name": "Agentic Agency" },
  "mainEntityOfPage": "[url]"
}
```

**Fichiers a modifier** :
- `src/app/blog/[slug]/page.tsx` (injection BlogPosting)

**Criteres** :
- [ ] Schema BlogPosting valide par article
- [ ] Donnees dynamiques depuis frontmatter
- [ ] Rich Results Test : 0 erreurs

---

### T-032-03 : BreadcrumbList JSON-LD

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Ajouter le schema BreadcrumbList sur les pages services et blog.

**Actions** :
- Services : Accueil > Services > [Nom service]
- Blog : Accueil > Blog > [Titre article]
- Categories : Accueil > Blog > [Categorie]
- Generer dynamiquement depuis le path

**Schema BreadcrumbList** :
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://agentic-agency.fr" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://agentic-agency.fr/blog" },
    { "@type": "ListItem", "position": 3, "name": "[Titre]" }
  ]
}
```

**Fichiers a creer/modifier** :
- `src/components/seo/breadcrumb-jsonld.tsx` (composant)
- `src/app/services/*/page.tsx` (injection)
- `src/app/blog/[slug]/page.tsx` (injection)
- `src/app/blog/category/[name]/page.tsx` (injection)

**Criteres** :
- [ ] Breadcrumb valide sur pages services
- [ ] Breadcrumb valide sur articles blog
- [ ] Breadcrumb valide sur categories

---

### T-032-04 : Tests structured data

- **Type** : [TEST]
- **Estimation** : 1h
- **Depend de** : T-032-01..03

**Description** :
Valider les schemas JSON-LD dans les tests.

**Actions** :
- Tester presence Organization schema dans layout
- Tester BlogPosting schema avec donnees correctes
- Tester BreadcrumbList avec hierarchie correcte
- Verifier format JSON-LD valide

**Fichiers a creer** :
- `src/components/seo/__tests__/json-ld.test.tsx`

**Criteres** :
- [ ] Tests couvrent tous les schemas
- [ ] Donnees dynamiques verifiees
