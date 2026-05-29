# PRD — Site Vitrine Agentic Agency

**Version :** 1.0  
**Date :** 29 mai 2026  
**Statut :** Validé  
**Source :** Cahier des charges v2.2

---

## Table des matières

1. [Vision & Objectifs](#1-vision--objectifs)
2. [Personas](#2-personas)
3. [Périmètre](#3-périmètre)
4. [Exigences Fonctionnelles](#4-exigences-fonctionnelles)
5. [Exigences Non Fonctionnelles](#5-exigences-non-fonctionnelles)
6. [Stack Technique](#6-stack-technique)
7. [Architecture du Site](#7-architecture-du-site)
8. [Intégrations](#8-intégrations)
9. [Contraintes](#9-contraintes)
10. [Risques](#10-risques)
11. [Planning](#11-planning)
12. [Critères de Succès](#12-critères-de-succès)

---

## 1. Vision & Objectifs

### 1.1 Vision produit

> Créer un site vitrine générant des leads qualifiés en démontrant l'expertise technique de l'agence et son approche moderne du delivery, tout en positionnant le blog comme moteur SEO et GEO pour devenir une référence du développement web professionnel francophone.

**Positionnement unique :**
- Agence de développement web, applications métier et mobiles
- Pratiques de delivery modernes (automatisation intelligente, qualité, cycles courts)
- 11 stacks maîtrisées (Symfony, Laravel, React, Vue.js, Angular, Flutter, React Native, Python, C#/.NET, Paperclip)
- Blog technique actif (3 catégories : Avis, Tests, Process)

**Différenciation vs concurrence :**
- Seule agence française avec stratégie GEO (Generative Engine Optimization) early adopter
- Blog technique structuré vs concurrents sans blog (Akaru, Lucyan) ou blog abandonné
- Processus transparent (timeline 5 étapes) vs discours marketing vague
- Métriques portfolio (résultats business) vs vanity metrics

### 1.2 Objectifs business (SMART)

| Objectif | Indicateur | Cible | Échéance |
|----------|-----------|-------|----------|
| **Génération de leads** | Formulaires contact remplis | 10/mois | M+3 |
| **Crédibilité technique** | Temps moyen sur pages services | > 2 min | M+1 |
| **Thought leadership** | Articles publiés | 2/mois | M+1 à M+∞ |
| **Visibilité SEO** | Pages indexées Google | 100% | M+1 |
| **Visibilité GEO** | Citations dans IA (Perplexity, ChatGPT) | Suivi qualitatif | M+3 |
| **Trafic organique blog** | Sessions blog | +20% trim. | M+3 |
| **Partages LinkedIn** | Partages/article | ≥ 1 | Par article |

### 1.3 Métriques de succès (KPI)

#### Acquisition
- Trafic organique : +20% trimestriel
- Impressions Google (GSC) : croissance mensuelle
- Position moyenne 10 requêtes cibles : amélioration trimestrielle
- Clics `utm_source=linkedin` : suivi par article

#### Conversion
- Taux formulaires remplis : ≥ 2% visiteurs uniques
- Taux rebond pages services : < 60%
- Clics CTA blog → contact : suivi

#### Engagement
- Temps moyen sur article : > 2 min
- Pages/session : > 2,5
- Partages LinkedIn/article : ≥ 1 équipe + suivi organique

#### Technique
- Lighthouse Performance : ≥ 90
- Core Web Vitals : LCP < 2,5s, FID < 100ms, CLS < 0,1
- Disponibilité : 99,5%

---

## 2. Personas

### P-01 : Claire, Dirigeante PME scale-up

**Profil :**
- Âge : 38 ans
- Fonction : CEO scale-up FinTech (25 personnes)
- Budget : 50-150k€ projet
- Zone : France, Île-de-France

**Citation :**
> "Je veux un partenaire qui comprenne les enjeux métier, pas juste un prestataire qui code."

**Objectifs :**
- Lancer un produit numérique MVP en 3-4 mois
- ROI mesurable rapidement
- Éviter la dette technique

**Frustrations :**
- Agences qui promettent tout mais ne livrent pas
- Manque de transparence sur les délais réels
- Code non maintenable livré

**Scénario d'utilisation :**
Cherche "agence développement MVP application métier" → Accueil → #offres Applications métier → Page service → #contact → Formulaire rempli

**Message clé site :**
ROI, simplicité, accompagnement, livraison incrémentale, propriété du code

---

### P-02 : Thomas, DSI / CTO

**Profil :**
- Âge : 42 ans
- Fonction : CTO scale-up / DSI PME (100-500 personnes)
- Budget : 100-300k€ projet
- Zone : France, Europe francophone

**Citation :**
> "Je veux des développeurs qui comprennent l'architecture, la sécurité et la maintenabilité. Pas du code jetable."

**Objectifs :**
- Intégrer une application métier au SI existant
- Garantir qualité, sécurité, tests
- Équipe technique compétente et réactive

**Frustrations :**
- Prestataires juniors non autonomes
- Architecture non scalable
- Pas de tests automatisés

**Scénario d'utilisation :**
Recommandation LinkedIn → Article blog (Tests) → #approche → Page service Applications métier → #contact

**Message clé site :**
Architecture, sécurité, maintenabilité, tests, revue de code, accompagnement équipe

---

### P-03 : Sophie, Product Owner

**Profil :**
- Âge : 35 ans
- Fonction : Product Owner / Chef de projet
- Budget : Délégué par direction
- Zone : France

**Citation :**
> "J'ai besoin de comprendre ce qu'on livre, sprint par sprint, sans jargon technique."

**Objectifs :**
- Application métier adoptée par les utilisateurs finaux
- Livraison incrémentale avec feedback continu
- Transparence sur l'avancement

**Frustrations :**
- Équipes dev qui ne comprennent pas le métier
- Effet tunnel (pas de visibilité pendant des mois)
- Fonctionnalités livrées inutilisables

**Scénario d'utilisation :**
Google "agence développement agile symfony" → Page service → #approche Timeline → Articles blog Process → #contact

**Message clé site :**
Compréhension métier, livraison incrémentale, rituels agiles, formation

---

### P-04 : Marc, Directeur Transformation / RH Tech

**Profil :**
- Âge : 45 ans
- Fonction : Directeur Transformation Digitale / RH Tech
- Budget : Conseil + accompagnement équipe
- Zone : France, groupes multi-sites

**Citation :**
> "Comment structurer mes équipes IT et moderniser nos pratiques sans tout casser ?"

**Objectifs :**
- Structurer équipes IT (roles, rituels, outils)
- Adopter pratiques modernes (CI/CD, tests, revue)
- Réduire time-to-market et dette technique

**Frustrations :**
- Équipes en silos, pas de transversalité
- Pas de culture qualité ni tests
- Turnover élevé faute de pratiques modernes

**Scénario d'utilisation :**
LinkedIn → Article blog Process "Notre checklist avant une MEP" → Page Conseil & organisation → #contact

**Message clé site :**
Méthode, montée en compétence, gouvernance, rituels, accompagnement équipe

---

## 3. Périmètre

### 3.1 Lot 1 — MVP (Must Have)

#### Pages principales
- **Page d'accueil longue** (13 sections ancrées) :
  - S01 Hero (proposition de valeur + 2 CTAs)
  - S02 Indicateurs chiffrés (4 KPIs)
  - S03 Confiance (logos secteurs/clients)
  - S04 Delivery moderne (valeur, pas IA hype)
  - S05 Offres (4 piliers × cartes)
  - S06 CTA milieu
  - S07 Contact (formulaire + alternatives)
  - S08 Témoignages (3 min)
  - S09 Blog (3 derniers articles)
  - S10 Réalisations (3-6 cas)
  - S11 Technologies (11 stacks)
  - S12 Valeurs (4 piliers)
  - S13 Approche (timeline 5 étapes)
  - Footer

- **4 pages services** :
  - /services/developpement-web
  - /services/applications-metier
  - /services/applications-mobiles
  - /services/conseil-organisation

- **Zone blog complète** :
  - Liste `/blog` (filtrable par catégorie)
  - 3 pages catégories : `/blog/avis`, `/blog/tests`, `/blog/process`
  - Pages articles `/blog/[slug]`
  - 3 articles de lancement (1 par catégorie)

- **Page contact** `/contact` (miroir section accueil)

- **Pages légales** :
  - Mentions légales
  - Politique de confidentialité
  - Cookies

#### Fonctionnalités obligatoires
- Design responsive mobile-first (320px → 1440px+)
- Navigation sticky + scroll smooth vers ancres
- SEO technique (meta, sitemap, robots, canonical)
- **GEO** (llms.txt, structured data, format answer-first)
- **Partage LinkedIn natif** sur chaque article + Open Graph optimisé
- Analytics + bandeau consentement cookies (RGPD)
- Formulaire contact + anti-spam
- CMS headless pour blog (autonomie publication)
- Prévisualisation brouillons CMS

#### Contenus minimum
- 3 témoignages clients
- 3 réalisations (accueil + page dédiée)
- 3 articles blog (1 Avis, 1 Tests, 1 Process)
- Textes 13 sections accueil + 4 pages services
- Chiffres section `#stats` sourcés
- Grille 11 stacks (nom + versions visibles)

### 3.2 Lot 2 — Enrichissement (Should / Could)

| Fonctionnalité | Priorité | Lot | Effort estimé |
|----------------|----------|-----|---------------|
| Page `/realisations` + fiches projet | Should | 1.1 | 2 jours |
| Prise de RDV en ligne (Calendrier) | Should | 1.1 | 1 jour |
| Témoignages carousel accueil | Should | 1 | 1 jour |
| Version anglaise (i18n) | Should | 1.2 | 5 jours |
| Téléchargement plaquette PDF | Could | 1.2 | 1 jour |
| Intégration CRM (webhook) | Should | 1.1 | 2 jours |
| Page `/technologies` détaillée | Could | 1.2 | 1 jour |
| Flux RSS `/blog/rss.xml` | Could | 1.1 | 0,5 jour |

### 3.3 Hors périmètre V1

- Espace client / portail projet
- Facturation en ligne
- Marketplace produits
- Module recrutement (ATS)
- Application mobile dédiée
- Commentaires publics blog
- Newsletter intégrée (mailchimp)
- Paywall articles
- Multi-auteurs avancé blog

---

## 4. Exigences Fonctionnelles

### F01 — Page d'accueil (13 sections ancrées)

**Description :** Page longue scroll unique concentrant le discours principal.

**Spécifications :**
- 13 sections avec `id` d'ancre stable (`#hero`, `#stats`...)
- Scroll smooth depuis navigation + CTAs
- Performance : SSG force-static, next/image, lazy-load sections basses
- Chaque section = bloc Sanity CMS éditable (titre, texte, images)

**Critères d'acceptation :**
- [ ] 13 sections visibles et accessibles via ancres
- [ ] Navigation sticky fonctionne desktop + mobile
- [ ] Lighthouse Performance ≥ 90
- [ ] Temps de chargement LCP < 2,5s

---

### F02 — Pages services (×4)

**Description :** Pages approfondissant chaque pilier d'offre (SEO + conversion).

**URL :**
- `/services/developpement-web`
- `/services/applications-metier`
- `/services/applications-mobiles`
- `/services/conseil-organisation`

**Structure page service :**
1. Hero court + CTA
2. Problèmes clients (3-4 bullets)
3. Cartes offre détaillées (mêmes que accueil, textes enrichis)
4. Processus spécifique au service
5. Technologies (sous-ensemble 11 stacks § 5.5 CdC)
6. Réalisations filtrées (2-3 liens)
7. Articles blog liés (auto ou sélection CMS)
8. FAQ (3-5 questions)
9. CTA → `/contact?sujet=...`

**Critères d'acceptation :**
- [ ] 4 pages services live avec structure complète
- [ ] Chaque page : meta title/description unique
- [ ] FAQ avec schema FAQPage
- [ ] Liens internes vers blog (2+ par page)

---

### F03 — Blog complet (CMS)

**Description :** Zone blog complète avec 3 catégories éditoriales.

#### F03.1 — Pages blog

| Page | URL | Fonction |
|------|-----|----------|
| Liste | `/blog` | Grille articles, filtres par catégorie, pagination |
| Catégories | `/blog/avis`, `/blog/tests`, `/blog/process` | Liste filtrée + intro catégorie |
| Article | `/blog/[slug]` | Fiche article complète |

#### F03.2 — Modèle de données article

| Champ | Type | Obligatoire | Notes |
|-------|------|-------------|-------|
| `title` | string | Oui | Titre affiché |
| `slug` | string | Oui | URL unique |
| `category` | enum | Oui | `avis` \| `tests` \| `process` |
| `excerpt` | text | Oui | 150-200 caractères |
| `body` | rich text | Oui | Markdown/Portable Text |
| `coverImage` | image | Oui | 16:9, alt obligatoire |
| `author` | référence | Oui | Nom, rôle, photo |
| `publishedAt` | datetime | Oui | Date publication |
| `readingTime` | number | Auto | Calculé |
| `seoTitle` | string | Non | Sinon = title |
| `seoDescription` | string | Non | Sinon = excerpt |
| `ogImage` | image | Oui | 1200×627, optimisée LinkedIn |
| `linkedinTeaser` | text | Non | ≤ 300 car. |
| `keyTakeaways` | text | Non | 3-5 bullets (GEO) |
| `status` | enum | Oui | `draft` \| `published` |
| `featured` | boolean | Non | Affichage prioritaire |

#### F03.3 — Page article

**Éléments obligatoires :**
- En-tête : catégorie (lien), titre H1, date, temps lecture, auteur
- Corps : rich text (H2/H3, listes, quotes, code, images)
- Sommaire auto-généré si ≥ 3 H2 (Should)
- CTA milieu/fin : « Un sujet similaire ? » → contact
- Articles liés (2-3 même catégorie)
- **Bouton LinkedIn** : "Partager sur LinkedIn" + copier lien
- Meta OG complètes (title, description, image 1200×627)

**Critères d'acceptation :**
- [ ] 3 articles de lancement publiés (1/catégorie)
- [ ] Bouton LinkedIn fonctionnel, preview OG validée (Post Inspector)
- [ ] Schema BlogPosting valide (Rich Results Test)
- [ ] Temps de lecture calculé automatiquement
- [ ] CMS : création brouillon, preview, publication sans dev

---

### F04 — Formulaire contact

**Localisation :**
- Section `#contact` sur l'accueil
- Page `/contact` (identique)

**Champs obligatoires :**
- Nom (texte, requis)
- Email (email, requis, format validé)
- Société (texte, requis)
- **Sujet** (select, requis — aligné cartes offre)
- Message (textarea, requis, min 50 caractères)
- Consentement RGPD (checkbox, requis)

**Champs optionnels :**
- Téléphone (tel)
- Budget indicatif (select fourchettes)
- Délai souhaité (select)
- Comment nous avez-vous connus ? (select)

**Valeurs Sujet (alignées § 5.6 CdC) :**
- Développement web — site / plateforme / refonte
- Application métier — greenfield / évolution / intégration
- Mobile — Flutter / React Native / MVP
- Conseil — audit / équipe / formation
- Autre

**Comportement :**
- Message confirmation écran après envoi
- Email notification vers boîte métier
- Email accusé réception automatique au demandeur (option)
- Anti-spam : honeypot + reCAPTCHA invisible (F03)
- Pas de stockage données en base (traitement email/CRM uniquement)

**Critères d'acceptation :**
- [ ] Formulaire identique sur accueil et page `/contact`
- [ ] Validation côté client + serveur
- [ ] Email reçu en boîte métier (< 1 min)
- [ ] Message confirmation affiché
- [ ] Anti-spam opérationnel (test soumissions multiples)

---

### F05 — Pages légales

**Pages requises :**
- `/mentions-legales` : éditeur, hébergeur, directeur publication, SIRET
- `/confidentialite` : finalités données, droits RGPD, durées conservation
- `/cookies` : liste cookies, consentement, désactivation

**Critères d'acceptation :**
- [ ] 3 pages légales présentes et accessibles footer
- [ ] Liens depuis bandeau cookies + formulaire
- [ ] Contenus validés juridique

---

### F06 — Navigation & responsive

**Navigation sticky :**
- Logo (lien `/`)
- Ancres accueil : Offres · Réalisations · Blog · Contact
- CTA header : « Échanger sur votre projet » → `#contact`
- Menu mobile : drawer avec mêmes liens + pages services en sous-liste

**Responsive :**
- Mobile-first : 320px → 1440px+
- Breakpoints : mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Tests obligatoires : iPhone SE, iPad, desktop 1440px

**Critères d'acceptation :**
- [ ] Navigation sticky desktop + mobile
- [ ] Menu mobile drawer fonctionnel
- [ ] Scroll smooth vers ancres
- [ ] Responsive validé sur 3 devices minimum

---

### F07 — SEO technique

**Éléments obligatoires :**
- `title` unique par page (50-60 chars), mot-clé principal en tête
- `meta description` unique (140-160 chars), incitative
- `link rel="canonical"` sur toutes pages
- Un seul H1 par page, hiérarchie H2→H3
- HTML sémantique : `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`
- `lang="fr"` (+ `hreflang` si version EN)
- `sitemap.xml` dynamique : accueil, services, blog, réalisations, contact, légal
- `robots.txt` : autoriser public, bloquer `/api`, brouillons
- Images : `alt` descriptifs, `srcset` responsive, formats WebP/AVIF
- Maillage interne : 2-3 liens par article vers pages services ou accueil

**Structured Data (Schema.org JSON-LD) :**
- `Organization` : accueil/footer (name, url, logo, sameAs LinkedIn)
- `ProfessionalService` : accueil ou services
- `BlogPosting` : articles blog (headline, author, datePublished, image)
- `BreadcrumbList` : articles, services
- `FAQPage` : pages services si FAQ

**Critères d'acceptation :**
- [ ] `sitemap.xml` inclut tous articles publiés
- [ ] Schema.org valides (Rich Results Test 0 erreur)
- [ ] Google Search Console configurée + sitemap soumis
- [ ] Audit SEO technique validé (checklist § 12.6 CdC)

---

### F08 — GEO (Generative Engine Optimization)

**Objectif :** Visibilité dans moteurs génératifs (ChatGPT, Perplexity, Gemini, Copilot).

**Implémentations :**
- **Format answer-first** : articles ouvrent par réponse directe avant développement
- **Key takeaways** : 3-5 bullets intro article (champ CMS `keyTakeaways`)
- **Structure prévisible** : H2 = sous-questions, listes numérotées process, tableaux comparatifs
- **Entités nommées** : technologies, méthodes, rôles cohérents tout le site
- **FAQ intégrées** : sections FAQ pages services + schema FAQPage
- **Citations factuelles** : chiffres sourcés, limites assumées (crédibilité)
- **Fichier `/llms.txt`** (Should) : résumé site, URLs clés, politique citation (format émergent)
- **HTML SSR** : contenu texte dans HTML initial (pas JS uniquement)
- **RSS** `/blog/rss.xml` (Could) : syndication

**Critères d'acceptation :**
- [ ] Chaque article : intro answer-first ou `keyTakeaways`
- [ ] H2 structurés en sous-questions
- [ ] FAQ sur 4 pages services
- [ ] `/llms.txt` présent (si retenu en phase conception)
- [ ] Contenu HTML server-rendered (SSR/SSG)

---

### F09 — Partage LinkedIn

**Bouton partage :**
- Emplacement : sous titre article + fin article (sticky optionnel desktop)
- Libellé : « Partager sur LinkedIn » + icône LinkedIn
- Action : ouvre `https://www.linkedin.com/sharing/share-offsite/?url={URL_ENCODED}` nouvel onglet
- URL partagée : canonique HTTPS article
- UTM : ajouter `?utm_source=linkedin&utm_medium=social&utm_campaign=blog` (Should)
- Bouton secondaire : « Copier le lien » avec confirmation visuelle

**Open Graph (obligatoire LinkedIn) :**
```html
<meta property="og:type" content="article" />
<meta property="og:title" content="[seoTitle ou title]" />
<meta property="og:description" content="[seoDescription ou excerpt]" />
<meta property="og:url" content="[URL canonique]" />
<meta property="og:image" content="[URL absolue ogImage]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="627" />
<meta property="article:published_time" content="[ISO 8601]" />
<meta property="article:author" content="[Nom auteur]" />
<meta name="twitter:card" content="summary_large_image" />
```

**Image OG :**
- Dimensions : 1200 × 627 px (ratio 1.91:1)
- Format : JPG ou PNG, < 5 Mo
- Texte lisible sur vignette (titre court ou catégorie)

**Critères d'acceptation :**
- [ ] Bouton LinkedIn fonctionnel chaque article
- [ ] Preview OG validée sur 3 articles (LinkedIn Post Inspector)
- [ ] Image OG 1200×627 uploadée par article
- [ ] UTM tracking fonctionnel (analytics)

---

### F10 — Analytics & consentement cookies

**Analytics :**
- **Recommandé :** Plausible Cloud (9€/mois, EU, cookieless → pas de consentement requis)
- **Alternative :** GA4 (gratuit, mais consentement obligatoire)

**Consentement cookies :**
- **Recommandé :** Tarteaucitron.js (open-source, gratuit)
- **Alternative :** Axeptio (payant)
- Bandeau avec choix granulaire (accepter tout / refuser tout / personnaliser)
- Pas de dépôt cookies avant consentement (sauf essentiels : session)
- Lien vers politique confidentialité

**Critères d'acceptation :**
- [ ] Analytics configuré et reçoit événements
- [ ] Bandeau cookies conforme RGPD
- [ ] Lien politique confidentialité depuis bandeau
- [ ] Test : refuser cookies → aucun cookie non essentiel déposé

---

## 5. Exigences Non Fonctionnelles

### NF01 — Performance

| Critère | Cible | Seuil acceptable |
|---------|-------|------------------|
| **Lighthouse Performance** | ≥ 95 | ≥ 90 |
| **LCP** (Largest Contentful Paint) | < 2s | < 2,5s |
| **FID** (First Input Delay) | < 50ms | < 100ms |
| **CLS** (Cumulative Layout Shift) | < 0,05 | < 0,1 |
| **Time to First Byte** | < 500ms | < 800ms |

**Stratégies :**
- SSG (Static Site Generation) pour accueil + pages services
- ISR (Incremental Static Regeneration) pour blog (revalidation 1h)
- next/image avec optimisation automatique WebP/AVIF
- Lazy-load sections basses accueil (Intersection Observer)
- CDN Cloudflare (edge caching EU)
- Font optimization (font-display: swap)
- Compression gzip/brotli

**Critères d'acceptation :**
- [ ] Lighthouse Performance ≥ 90 (desktop + mobile)
- [ ] Core Web Vitals "Good" (GSC)
- [ ] Audit CI/CD Lighthouse intégré

---

### NF02 — Accessibilité (WCAG 2.1 AA)

| Critère | Spécification |
|---------|---------------|
| **Contraste** | Ratio ≥ 4.5:1 texte normal, ≥ 3:1 texte large |
| **Navigation clavier** | Tous éléments interactifs accessibles Tab/Enter/Espace |
| **Labels formulaires** | `<label for>` associés, messages erreur explicites |
| **Images** | `alt` descriptifs, décoratif `alt=""` |
| **HTML sémantique** | `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` |
| **Landmarks ARIA** | `role="navigation"`, `aria-label` si nécessaire |
| **Focus visible** | Outline visible sur focus clavier |
| **Titre hiérarchie** | H1→H2→H3 sans saut |

**Outils validation :**
- axe DevTools
- Lighthouse Accessibility
- Tests manuels clavier

**Critères d'acceptation :**
- [ ] Lighthouse Accessibility ≥ 95
- [ ] axe-core 0 erreur critique
- [ ] Navigation clavier complète testée
- [ ] Contraste validé (outil WebAIM)

---

### NF03 — Sécurité & RGPD

#### Sécurité

| Élément | Spécification |
|---------|---------------|
| **HTTPS** | Certificat SSL actif, redirection HTTP → HTTPS |
| **Headers** | CSP, X-Frame-Options, X-Content-Type-Options |
| **Dépendances** | Audit npm/yarn, patches automatiques (Dependabot) |
| **Formulaire** | Validation côté serveur, protection XSS/CSRF |
| **API keys** | Stockées variables environnement, jamais côté client |
| **Rate limiting** | Protection brute-force formulaire (10 req/min/IP) |

#### RGPD

| Élément | Spécification |
|---------|---------------|
| **Mentions légales** | Éditeur, hébergeur, directeur publication, SIRET |
| **Politique confidentialité** | Finalités, droits, durées conservation (12 mois formulaire) |
| **Consentement cookies** | Banner granulaire, pas de dépôt avant consentement |
| **Formulaire** | Case consentement explicite, lien politique |
| **Hébergement** | DPA signé (Cloudflare/Vercel), localisation EU prioritaire |
| **Analytics** | Plausible cookieless (recommandé) ou GA4 + consentement |

**Critères d'acceptation :**
- [ ] HTTPS actif, certificat valide
- [ ] Headers sécurité configurés
- [ ] Formulaire : validation serveur, anti-spam
- [ ] 3 pages légales présentes
- [ ] Bandeau cookies conforme RGPD
- [ ] DPA hébergeur signé

---

### NF04 — SEO technique

**Référentiel :** Google Search Essentials + structured data guidelines

| Critère | Cible |
|---------|-------|
| **Indexation** | 100% pages publiques indexées sous 7 jours |
| **Sitemap** | Dynamique, soumis GSC |
| **Canonical URLs** | 100% pages, sans doublons |
| **Meta tags** | title + description uniques 100% pages |
| **Schema.org** | Validés Rich Results Test |
| **Mobile-friendly** | Test Google réussi |

**Critères d'acceptation :**
- [ ] Sitemap.xml généré et soumis GSC
- [ ] Canonical URLs sur toutes pages
- [ ] Schema.org 0 erreur Rich Results Test
- [ ] Mobile-friendly test Google réussi

---

### NF05 — Compatibilité navigateurs

**Navigateurs supportés (2 dernières versions majeures) :**
- Chrome / Edge Chromium (Windows, macOS, Linux)
- Firefox (Windows, macOS, Linux)
- Safari (macOS, iOS)
- Chrome Android
- Safari iOS

**Dégradation gracieuse acceptable pour :**
- Internet Explorer (hors support)
- Versions obsolètes (> 2 ans)

**Critères d'acceptation :**
- [ ] Tests manuels sur Chrome, Firefox, Safari
- [ ] Tests mobiles sur iOS Safari + Chrome Android
- [ ] Rendu acceptable (pas pixel-perfect) sur navigateurs obsolètes

---

## 6. Stack Technique

**Recommandation validée :** Next.js 15 + Sanity CMS + Cloudflare Pages

### 6.1 Frontend

| Couche | Technologie | Version | Justification |
|--------|-------------|---------|---------------|
| **Framework** | Next.js (App Router) | ≥ 15.5.15 | SSR/ISR, SEO, patches CVE critiques |
| **Langage** | TypeScript | 5.x | Type safety, maintenabilité |
| **Styles** | Tailwind CSS | 4.x | Productivité, design system |
| **Composants UI** | Radix UI | — | Headless, ARIA natif, accessibilité |
| **Animations** | Framer Motion | — | Performance, API déclarative |

### 6.2 Backend & CMS

| Couche | Technologie | Version | Justification |
|--------|-------------|---------|---------------|
| **CMS** | Sanity | — | Gratuit 3 éditeurs, collaboration temps réel, preview live |
| **SDK CMS** | next-sanity | — | Intégration officielle Next.js |
| **Formulaire** | Resend + API Route | — | 100 emails/jour gratuit, DX moderne |
| **Email** | Resend | — | Transactionnel, templates React |

### 6.3 Hébergement & infra

| Service | Choix | Coût | Justification |
|---------|-------|------|---------------|
| **Hébergement** | Cloudflare Pages | Gratuit | Edge EU, RGPD, performance |
| **DNS** | Cloudflare | Gratuit | DDoS protection, edge cache |
| **Analytics** | Plausible Cloud | 9€/mois | Cookieless, EU, privacy-first |
| **Consentement** | Tarteaucitron.js | Gratuit | Open-source, RGPD compliant |

**Coût annuel estimé : ~470€/an** (Sanity Growth 19€/mois si > 3 éditeurs + Plausible 9€/mois)

### 6.4 Outils dev

| Outil | Usage |
|-------|-------|
| **Tests E2E** | Playwright |
| **CI/CD** | GitHub Actions |
| **Quality** | ESLint, Prettier, TypeScript strict |
| **Lighthouse CI** | Performance monitoring |
| **axe-core** | Accessibilité tests |

### 6.5 Alternatives

| Option | Avantages | Inconvénients | Verdict |
|--------|-----------|---------------|---------|
| **Vercel** (hébergement) | DX optimal, ISR mature | USA-based, 20$/mois Pro | Acceptable si RGPD OK |
| **Contentful** (CMS) | Interface mature, GraphQL | 300$/mois (Team) | Trop cher |
| **Strapi** (CMS) | Self-hosted, gratuit | Maintenance serveur | Plan B si budget CMS |
| **MDX + Git** (CMS) | Performance max, gratuit | Redéploiement obligatoire | Uniquement si équipe 100% dev |

---

## 7. Architecture du Site

### 7.1 Plan du site (URLs)

```
/                          # Accueil (13 sections)
├── #hero                  # Hero + CTAs
├── #stats                 # 4 indicateurs
├── #confiance             # Logos clients/secteurs
├── #delivery-moderne      # Valeur delivery
├── #offres                # 4 piliers offres
├── #cta-milieu            # Bandeau CTA
├── #contact               # Formulaire
├── #temoignages           # 3 témoignages
├── #blog                  # 3 derniers articles
├── #realisations          # 3-6 cas
├── #technologies          # 11 stacks
├── #valeurs               # 4 valeurs
└── #approche              # Timeline 5 étapes

/services/
├── developpement-web      # Page service 1
├── applications-metier    # Page service 2
├── applications-mobiles   # Page service 3
└── conseil-organisation   # Page service 4

/blog/
├── /                      # Liste tous articles
├── /avis                  # Catégorie Avis
├── /tests                 # Catégorie Tests
├── /process               # Catégorie Process
└── /[slug]                # Article

/realisations/             # Lot 1.1
├── /                      # Liste réalisations
└── /[slug]                # Fiche réalisation

/contact                   # Page contact (miroir accueil)

/mentions-legales          # Mentions légales
/confidentialite           # Politique confidentialité
/cookies                   # Cookies

/technologies              # Could — détail 11 stacks

/llms.txt                  # GEO (Should)
/sitemap.xml               # SEO
/robots.txt                # SEO
/rss.xml                   # Could
```

### 7.2 Navigation

#### Header sticky

| Élément | Comportement |
|---------|--------------|
| Logo | Lien vers `/` |
| Ancres accueil | Offres · Réalisations · Blog · Contact (scroll smooth) |
| CTA header | « Échanger sur votre projet » → `#contact` |
| Menu mobile | Drawer : mêmes liens + pages services sous-liste |

**Sur pages internes :** ancres pointent vers `/#section`

#### Footer

- Rappel 4 piliers services (liens)
- Blog (liste + 3 catégories)
- Légal · Contact · LinkedIn
- Pas de citation site de référence (confidentiel)

### 7.3 Structure page d'accueil (détail sections)

#### S01 — Hero

| Élément | Contenu |
|---------|---------|
| H1 | Proposition de valeur (« Livrez plus vite. Sans sacrifier la qualité. ») |
| Sous-titre | 1-2 lignes : qui, quels services, stacks clés |
| CTA primaire | « Réserver un échange » → `#contact` |
| CTA secondaire | « Découvrir nos offres » → `#offres` |
| Visuel | Illustration produit / interface ou extrait code stylisé (qualité, tests) |

#### S02 — Indicateurs (4 KPIs chiffrés)

Exemples à définir par client :
- XX% dette technique réduite
- XX+ années expérience cumulée équipe
- 11 stacks maîtrisées
- XX+ projets accompagnés

#### S03 — Confiance (logos clients/secteurs)

- 6-10 logos clients OU secteurs (Fintech, Santé, Industrie...)
- Grayscale, hover optionnel

#### S04 — Delivery moderne

| Élément | Contenu |
|---------|---------|
| Titre H2 | Le delivery moderne comme avantage |
| Corps | 2 paragraphes : cycles courts, revues, automatisation au service qualité |
| Preuve | Lien article blog Process ou Tests |
| CTA | « Lire nos retours d'expérience » → `/blog` |

#### S05 — Offres (4 piliers × cartes)

Chaque pilier :
- Titre H2 + description courte
- 2-3 cartes offre (titre, description, fourchette prix optionnelle, CTA)
- Lien « En savoir plus » → page service

**Exemple pilier Applications métier :**
- Application métier sur mesure → CTA « Décrire mon projet »
- Évolution & dette technique → CTA « Discuter refonte »
- Intégration SI & APIs → CTA « Échanger »

#### S06 — CTA milieu

Bandeau fond contrasté : « Prêt à accélérer votre produit ? » → CTA `#contact`

#### S07 — Contact

- Formulaire complet (F04)
- Bloc « Ou directement » : RDV (Calendly/Cal.com), LinkedIn, email
- Mention délai réponse (24-48h ouvrées)

#### S08 — Témoignages

- 3 témoignages minimum (sinon section masquée)
- Format : citation, prénom + fonction, tag offre (« Application métier »)
- Carousel mobile / grille desktop

#### S09 — Blog (aperçu)

- Titre H2 « Notes de terrain »
- 3 derniers articles (card : image, catégorie, titre, extrait)
- Lien « Tous les articles » → `/blog`

#### S10 — Réalisations (aperçu)

- 3 cartes minimum
- Card : secteur, titre mission, impact 1 ligne, tags technos
- Lien « Toutes les réalisations » → `/realisations`

#### S11 — Technologies (11 stacks)

Grille responsive 11 items :
- Symfony 8.0 / PHP 8.5
- Laravel 13 / PHP 8.5
- PHP 8.5
- React 19.2 + Compiler 1.0
- Vue.js 3.5+ (3.6 beta Vapor)
- Angular 20 LTS
- Flutter 3.41 / Dart 3.11
- React Native 0.85 (New Architecture)
- Python 3.14+ / FastAPI
- C# 14 / .NET 10 LTS
- Paperclip 2026.403.0

**Affichage :** nom + version (hover ou modal détail)

#### S12 — Valeurs (4 piliers)

4 cartes icône :
- Fiabilité : Code maintenable, MEP maîtrisées
- Rigueur : Tests, revues, critères acceptation
- Partenariat : Extension équipe, pas boîte noire
- Pragmatisme : Pas sur-ingénierie, valeur métier d'abord

CTA : « Parler de votre projet » → `#contact`

#### S13 — Approche (timeline 5 étapes)

Timeline horizontale (desktop) / verticale (mobile) :
1. **Discovery** : cadrage, personas, processus
2. **Conception** : wireframes, architecture, specs techniques
3. **Développement itératif** : sprints 2 semaines, démos
4. **Recette** : tests, formation, docs
5. **Transfert** : MEP, monitoring, handover équipe client

### 7.4 Stratégie rendu Next.js

| Page/section | Stratégie | Revalidation | Justification |
|--------------|-----------|--------------|---------------|
| Accueil (13 sections) | SSG `force-static` | Build time | Contenu stable, performance max |
| Pages services (×4) | SSG | Build time | Contenu stable |
| Blog liste `/blog` | ISR | 1h | Nouveaux articles sans redéploiement |
| Blog catégorie | ISR | 1h | idem |
| Blog article `/blog/[slug]` | ISR | 1h | Publication autonome CMS |
| Contact `/contact` | SSR | Temps réel | Formulaire dynamique |
| Pages légales | SSG | Build time | Contenu rare évolution |

**Flux publication blog :**
```
Éditeur Sanity → Webhook → API Route Next.js
→ revalidateTag('blog') → ISR régénère HTML (< 2s)
→ CDN Cloudflare sert version fraîche
```

---

## 8. Intégrations

| Service | Usage | Priorité | Coût estimé |
|---------|-------|----------|-------------|
| **Resend** | Email transactionnel formulaire | Must | Gratuit (100/jour) |
| **Plausible** | Analytics cookieless | Must | 9€/mois |
| **Tarteaucitron** | Consentement cookies | Must | Gratuit (open-source) |
| **Sanity** | CMS blog | Must | Gratuit (3 éditeurs) ou 19€/mois (Growth) |
| **LinkedIn** | Bouton partage + page société | Must | Gratuit |
| **Google Search Console** | Indexation, requêtes, erreurs | Must | Gratuit |
| **Cal.com / Calendly** | Prise RDV | Could | Gratuit (Cal.com self-hosted) ou 12$/mois |
| **HubSpot / Pipedrive** | CRM webhook formulaire | Should | Variable (HubSpot gratuit, Pipedrive 14€/mois) |

---

## 9. Contraintes

### 9.1 Contraintes techniques non négociables

| ID | Contrainte | Impact | Mitigation |
|----|------------|--------|------------|
| CT-01 | **Next.js ≥ 15.5.15** | Bloquant | Patches CVE-2025-55182 (RCE) et CVE-2026-23869 (DoS) |
| CT-02 | **Lighthouse ≥ 90** | Élevé | SSG, next/image, lazy-load, audit CI |
| CT-03 | **WCAG 2.1 AA** | Élevé | Radix UI, axe-core CI, tests clavier |
| CT-04 | **Publication blog sans redéploiement** | Élevé | ISR Next.js + webhook Sanity |
| CT-05 | **SSR/ISR natif** | Moyen | Next.js App Router |

### 9.2 Contraintes business

| ID | Contrainte | Impact | Mitigation |
|----|------------|--------|------------|
| CB-01 | **Délai 7-9 semaines** | Élevé | Buffer 20%, scope MVP strict, weekly demos |
| CB-02 | **Développeur solo** | Élevé | Templates UI, freelance contingence |
| CB-03 | **Budget hébergement < 500€/an** | Faible | Cloudflare gratuit, Sanity free tier |
| CB-04 | **Contenus fournis client J+7** | Élevé | Brief J0, deadline contractuelle, placeholders |
| CB-05 | **3 articles blog go-live** | Moyen | Calendrier édito Sprint 3-4 |

### 9.3 Contraintes réglementaires

| ID | Contrainte | Impact | Mitigation |
|----|------------|--------|------------|
| CR-01 | **RGPD formulaire** | Élevé | Mentions, base légale, conservation 12 mois |
| CR-02 | **Consentement cookies** | Élevé | Tarteaucitron, choix granulaire |
| CR-03 | **Mentions légales** | Moyen | Template validé juridique |
| CR-04 | **DPA hébergeur** | Faible | Cloudflare/Vercel DPA signé |

### 9.4 Contraintes SEO/GEO

| ID | Contrainte | Impact | Mitigation |
|----|------------|--------|------------|
| CS-01 | **Title unique** 50-60 chars | Moyen | Template CMS, validation |
| CS-02 | **Meta description** 140-160 chars | Moyen | idem |
| CS-06 | **Schema.org** | Moyen | next-seo, validation Rich Results |
| CS-08 | **Google Search Console** | Moyen | Config J+1 go-live |
| CS-09 | **OpenGraph LinkedIn** | Moyen | Preview validée 3 articles |

---

## 10. Risques

### 10.1 Risques critiques (score ≥ 9)

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| TECH-01 | **CVE Next.js** (RCE, DoS) | 4 | 3 | **12** 🔴 | Next.js ≥ 15.5.15, CI scan vulnérabilités |
| TECH-02 | **Fuites mémoire** Next.js Docker/K8s | 3 | 3 | **9** 🟠 | Serverless (Cloudflare/Vercel), monitoring |
| BUS-01 | **Dépassement délai** (solo dev) | 3 | 3 | **9** 🟠 | Buffer 20%, scope MVP, weekly demos |
| BUS-02 | **Dépendance contenus** client | 2 | 4 | **8** 🟠 | Brief J0, deadline J+7, placeholders, clause |

### 10.2 Risques modérés (score 4-8)

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| TECH-03 | **Performance accueil 13 sections** | 3 | 2 | **6** 🟡 | SSG, lazy-load, Lighthouse CI |
| TECH-05 | **Compatibilité React 19** | 2 | 3 | **6** 🟡 | Audit deps, alternatives, fallback Next.js 14 |
| TECH-06 | **SEO/GEO peu recul** | 3 | 2 | **6** 🟡 | Prioriser SEO 80%, budget R&D GEO 10-15% |
| REG-02 | **WCAG 2.1 AA** | 3 | 2 | **6** 🟡 | Radix UI, axe-core CI, tests clavier |
| ORG-01 | **Autonomie blog client** | 2 | 3 | **6** 🟡 | Sanity Studio, formation 1h, templates |
| ORG-02 | **Maintenance long terme** | 3 | 2 | **6** 🟡 | Contrat maintenance, tests E2E, doc |

### 10.3 Plan mitigation prioritaire

| Priorité | Risque | Action immédiate | Échéance |
|----------|--------|------------------|----------|
| 🔴 P0 | TECH-01 CVE | Vérifier Next.js ≥ 15.5.15, CI scan | Sprint 0 |
| 🟠 P1 | BUS-01 Délai | Buffer 20%, scope strict, demos | Sprint 0 |
| 🟠 P1 | BUS-02 Contenus | Brief client J0, deadline J+7 | Sprint 0 |
| 🟠 P1 | TECH-02 Fuites | Choisir serverless | Sprint 0 |
| 🟡 P2 | TECH-03 Performance | Architecture SSG, Lighthouse CI | Sprint 1 |
| 🟡 P2 | REG-02 WCAG | Radix UI, axe-core CI | Sprint 1 |

---

## 11. Planning

### 11.1 Phases et jalons

| Phase | Durée | Livrables | Jalon validation |
|-------|-------|-----------|------------------|
| **0. Cadrage** | 1 sem | CdC validé, cartes offre, recherche mots-clés, ligne éditoriale | J1 — CdC signé |
| **1. Design** | 2-3 sem | Wireframes (accueil 13 sections, services, blog), maquettes desktop+mobile, design system | J2 — Maquettes validées |
| **2. Contenus** | 2 sem (parallèle) | Textes accueil + 4 services, 3 articles blog, témoignages, réalisations | J3 — Contenus gelés |
| **3. Développement** | 3-4 sem | Site staging fonctionnel, CMS configuré, blog opérationnel | J4 — CMS formé |
| **4. Recette** | 1 sem | Corrections, tests perf/a11y, SEO/GEO/LinkedIn | J5 — Staging validé |
| **5. Go-live** | — | Production, DNS, analytics, 3 articles live, formation CMS | J6 — Go-live |

**Durée totale estimée :** 7 à 9 semaines

### 11.2 Critères d'acceptation par phase

#### Phase 0 — Cadrage
- [ ] CdC v2.2 signé
- [ ] Cartes offre (4 piliers × 2-3) validées métier
- [ ] Recherche mots-clés (annexe D CdC) complétée
- [ ] Ligne éditoriale blog définie (3 catégories, fréquence)
- [ ] Stack technique validée (Next.js + Sanity + Cloudflare)

#### Phase 1 — Design
- [ ] Wireframes accueil 13 sections validés
- [ ] Wireframes page service + blog (liste, article) validés
- [ ] Maquettes desktop (1440px) + mobile (375px) validées
- [ ] Design system (couleurs, typo, composants) livré Figma
- [ ] Audit référence design (§9.5 CdC) documenté

#### Phase 2 — Contenus (parallèle phase 1)
- [ ] Textes 13 sections accueil rédigés et validés
- [ ] Textes 4 pages services rédigés et validés
- [ ] 3 articles blog prêts (1 Avis, 1 Tests, 1 Process)
- [ ] 3 témoignages collectés avec photos
- [ ] 3 réalisations rédigées (secteur, impact, stack)
- [ ] Chiffres section `#stats` sourcés validés client
- [ ] Données 11 stacks (noms, versions, logos) préparées

#### Phase 3 — Développement
- [ ] Environnement staging accessible (URL temporaire)
- [ ] Accueil 13 sections fonctionnel desktop + mobile
- [ ] 4 pages services complètes
- [ ] Blog : liste, 3 catégories, articles, filtres
- [ ] CMS Sanity Studio configuré (schéma article, auteur, stack)
- [ ] Formulaire contact envoi email opérationnel
- [ ] 3 articles publiés via CMS (brouillon → preview → publication)
- [ ] Navigation sticky + scroll smooth
- [ ] Pages légales (mentions, confidentialité, cookies)

#### Phase 4 — Recette
- [ ] **Recette fonctionnelle** (§15.1 CdC) : 11 checkpoints validés
- [ ] **Recette technique** (§15.2 CdC) : Lighthouse ≥ 90, WCAG AA, HTTPS, sitemap, Schema.org, LinkedIn preview
- [ ] **Recette éditoriale** (§15.3 CdC) : 11 stacks visibles, pas de mention site référence, articles conformes charte
- [ ] Formation CMS (1h, enregistrée)
- [ ] Google Search Console configurée + sitemap soumis
- [ ] Tests navigateurs (Chrome, Firefox, Safari, mobile iOS/Android)

#### Phase 5 — Go-live
- [ ] DNS configuré et propagé
- [ ] Certificat SSL actif
- [ ] 3 articles blog live et indexables
- [ ] Analytics recevant événements
- [ ] Bandeau cookies fonctionnel
- [ ] Plan rollback documenté
- [ ] Support J+30 documenté

### 11.3 Indicateurs d'alerte

| Sprint | Signal alerte | Action corrective |
|--------|---------------|-------------------|
| Sprint 1 (sem 1-2) | < 2 pages fonctionnelles | Réduire scope, recruter freelance |
| Sprint 2 (sem 3-4) | Blog non opérationnel | Revoir priorité CMS |
| Sprint 3 (sem 5-6) | Tests accessibilité non démarrés | WCAG AA risque non atteint |
| Sprint 4 (sem 7-8) | Contenus client non fournis | Déployer avec placeholders |

### 11.4 Calendrier éditorial (post go-live)

| Mois | Avis | Tests | Process | Total |
|------|------|-------|---------|-------|
| M+1 | 1 | 1 | — | 2 |
| M+2 | — | 1 | 1 | 2 |
| M+3 | 1 | — | 1 | 2 |

**Objectif récurrent :** 2 articles/mois minimum, rotation équilibrée 3 catégories.

---

## 12. Critères de Succès

### 12.1 Critères go-live (bloquants)

#### Fonctionnel
- [ ] Accueil : 13 sections présentes, ancres scroll OK
- [ ] `#offres` : 4 piliers, min 8 cartes offre, CTAs fonctionnels
- [ ] Formulaire contact : envoi email + confirmation écran
- [ ] Blog : liste, 3 catégories, 3 articles publiés, filtres
- [ ] CMS : création brouillon, preview, publication sans dev
- [ ] Navigation cohérente desktop + mobile
- [ ] Anti-spam opérationnel
- [ ] Pages légales présentes (3)

#### Technique
- [ ] Lighthouse Performance ≥ 90
- [ ] WCAG 2.1 AA vérifié (axe-core + tests clavier)
- [ ] HTTPS actif, certificat valide
- [ ] Sitemap.xml inclut blog, soumis GSC
- [ ] Schema.org valides (Rich Results Test)
- [ ] Bouton LinkedIn fonctionnel, preview OG validée sur 3 articles
- [ ] Analytics + cookies RGPD conformes
- [ ] Tests navigateurs (Chrome, Firefox, Safari, mobile)

#### Éditorial
- [ ] Aucune promesse trompeuse IA/agentique
- [ ] 11 stacks visibles `#technologies` avec versions
- [ ] Aucune mention site référence §9.5 CdC
- [ ] Identité visuelle distincte référence (logo, couleurs, typos propres)
- [ ] 3 articles blog conformes charte (catégorie, longueur, ton)
- [ ] Chaque article : cover, extrait, seoTitle, seoDescription, ogImage 1200×627
- [ ] Intro answer-first ou keyTakeaways sur articles lancement

### 12.2 Métriques post-lancement (M+1, M+3, M+6)

| Métrique | M+1 | M+3 | M+6 | Source |
|----------|-----|-----|-----|--------|
| **Trafic organique** | Baseline | +20% | +50% | Plausible |
| **Pages indexées** | 100% | 100% | 100% | GSC |
| **Formulaires contact** | 5 | 10 | 15 | Email/CRM |
| **Articles publiés** | 3 | 9 (2/mois) | 15 | CMS |
| **Temps moyen blog** | > 2 min | > 2 min | > 2,5 min | Plausible |
| **Clics LinkedIn** | Suivi | +20% | +50% | Analytics (UTM) |
| **Lighthouse Perf** | ≥ 90 | ≥ 90 | ≥ 90 | CI |
| **Core Web Vitals** | Good | Good | Good | GSC |

### 12.3 Opportunités exploitées

| Opportunité | Valeur | Statut |
|-------------|--------|--------|
| **GEO early adopter** | ⭐⭐⭐ Élevée | ✅ Implémenté (llms.txt, answer-first, FAQ structurées) |
| **Blog technique actif** | ⭐⭐⭐ Élevée | ✅ 3 catégories, 2 articles/mois minimum |
| **Architecture Lot 2** | ⭐⭐⭐ Élevée | ✅ i18n préparé, réalisations, RDV prêts |
| **Coût quasi-nul** | ⭐⭐ Moyenne | ✅ 470€/an (Sanity + Plausible) |
| **WCAG AA anticipé** | ⭐⭐ Moyenne | ✅ Radix UI + axe-core CI |

### 12.4 Différenciateurs vs concurrence

| Différenciateur | Agentic Agency | Concurrent type | Avantage |
|-----------------|----------------|-----------------|----------|
| **GEO optimisé** | ✅ llms.txt, answer-first, FAQ | ❌ Aucun concurrent FR | Early adopter, visibilité IA |
| **Blog actif** | ✅ 3 catégories, 2/mois | ❌ Akaru, Lucyan sans blog | Autorité SEO, thought leadership |
| **Processus transparent** | ✅ Timeline 5 étapes | ⚠️ Discours vague | Rassurance client |
| **Métriques portfolio** | ✅ Résultats business | ⚠️ Vanity metrics | Crédibilité ROI |
| **Tarification indicative** | ⚠️ Fourchettes (Could) | ❌ Rare (sauf ALEO) | Réduction friction |

---

## Validation du document

| Rôle | Nom | Date | Signature |
|------|-----|------|-----------|
| **Product Owner** | | | |
| **Commanditaire** | | | |
| **Tech Lead** | | | |

---

**Document PRD v1.0 — Site Vitrine Agentic Agency**  
**Généré depuis Cahier des charges v2.2**
