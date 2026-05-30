# Taches - US-037 : Open Graph optimise LinkedIn (toutes pages)

## Informations US

- **Epic** : EPIC-005
- **Persona** : P-005 - Julien (Developpeur Freelance)
- **Story Points** : 2
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** developpeur freelance,
**Je veux** que les liens partages sur LinkedIn aient des previews optimisees,
**Afin de** attirer l'attention de mon reseau professionnel.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-037-01 | [FE-WEB] | OG metadata defaults + image par defaut | 1.5h | - | 🔲 |
| T-037-02 | [FE-WEB] | OG tags toutes pages (home, services, blog, legal) | 2h | T-037-01 | 🔲 |
| T-037-03 | [TEST] | Tests OG metadata validation | 0.5h | T-037-02 | 🔲 |

**Total estime** : 4h

Note : US-037 depend de US-022 pour OG blog articles, mais les OG de base (home, services, legal) sont independants.

---

## Detail des taches

### T-037-01 : OG metadata defaults + image

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Configurer les metadata Open Graph par defaut dans le layout.

**Actions** :
- Creer image OG par defaut (1200x627) : logo + baseline + couleur navy
- Configurer metadata OG dans layout.tsx (defaults pour toutes pages)
- og:site_name, og:locale, og:type
- twitter:card = summary_large_image
- Stocker image dans `public/og/` ou generer via Next.js OG Image API

**OG Tags par defaut** :
```ts
openGraph: {
  type: 'website',
  locale: 'fr_FR',
  siteName: 'Agentic Agency',
  images: [{ url: '/og/default.png', width: 1200, height: 627 }],
}
```

**Fichiers a creer/modifier** :
- `public/og/default.png` (image OG par defaut)
- `src/app/layout.tsx` (metadata defaults)

**Criteres** :
- [ ] Image OG 1200x627 presente
- [ ] Metadata OG par defaut dans layout
- [ ] twitter:card configure

---

### T-037-02 : OG tags toutes pages

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : T-037-01

**Description** :
Ajouter OG metadata specifiques a chaque page.

**Actions** :
- Homepage : og:title, og:description specifiques, image hero
- Pages services : og:title = titre service, og:description = meta description service
- Pages blog : og:type = "article", og:title, og:description, og:image (coverImage)
- Pages legales : titre + description, image par defaut
- Page contact : titre + description, image par defaut
- Categories blog : titre + description categorie

**Fichiers a modifier** :
- `src/app/page.tsx` (homepage)
- `src/app/services/*/page.tsx` (4 pages services)
- `src/app/blog/[slug]/page.tsx` (articles)
- `src/app/blog/page.tsx` (listing blog)
- `src/app/blog/category/[name]/page.tsx` (categories)
- `src/app/contact/page.tsx`
- `src/app/mentions-legales/page.tsx`
- `src/app/confidentialite/page.tsx`
- `src/app/cookies/page.tsx`

**Criteres** :
- [ ] Chaque page a og:title et og:description uniques
- [ ] Articles blog ont og:type = "article"
- [ ] LinkedIn Post Inspector : 0 erreurs

---

### T-037-03 : Tests OG metadata

- **Type** : [TEST]
- **Estimation** : 0.5h
- **Depend de** : T-037-02

**Description** :
Verifier la presence des OG tags dans les tests.

**Actions** :
- Tester que generateMetadata() retourne openGraph
- Verifier og:title, og:description, og:image presents
- Verifier og:type "article" pour blog posts

**Fichiers a creer** :
- Tests dans les fichiers existants (ajouter assertions OG)

**Criteres** :
- [ ] Tests couvrent homepage, service, blog
