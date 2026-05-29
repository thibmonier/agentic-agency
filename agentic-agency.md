# Cahier des charges — Site web Agentic Agency

| Champ | Valeur |
|-------|--------|
| **Projet** | Site vitrine — Agentic Agency (nom provisoire) |
| **Version** | 2.2 |
| **Date** | 29 mai 2026 |
| **Statut** | Brouillon — à valider |

---

## Table des matières

1. [Contexte et objectifs](#1-contexte-et-objectifs)
2. [Positionnement et discours](#2-positionnement-et-discours)
3. [Cibles et personas](#3-cibles-et-personas)
4. [Périmètre fonctionnel](#4-périmètre-fonctionnel)
5. [Architecture du site et contenus](#5-architecture-du-site-et-contenus)
6. [Zone Blog — avis, tests, process](#6-zone-blog--avis-tests-process)
7. [Exigences fonctionnelles](#7-exigences-fonctionnelles)
8. [Exigences non fonctionnelles](#8-exigences-non-fonctionnelles)
9. [Identité visuelle et UX](#9-identité-visuelle-et-ux)
10. [Stack technique du site web](#10-stack-technique-du-site-web)
11. [Intégrations](#11-intégrations)
12. [SEO, GEO et conformité](#12-seo-geo-et-conformité)
13. [Planning et jalons](#13-planning-et-jalons)
14. [Budget et ressources](#14-budget-et-ressources)
15. [Critères d'acceptation](#15-critères-dacceptation)
16. [Risques et mitigations](#16-risques-et-mitigations)
17. [Annexes](#17-annexes)

---

## 1. Contexte et objectifs

### 1.1 Contexte

Agentic Agency est une agence web (nom provisoire) proposant :

- le **développement web** (sites, plateformes, interfaces) ;
- le **développement d'applications métier** ;
- le **développement d'applications mobiles** ;
- le **conseil** autour de l'organisation d'équipes informatiques et des pratiques de delivery modernes.

L'agence maîtrise **11 stacks** documentées (versions et commandes d'installation : § 5.5) : Symfony, Laravel, PHP, React, Vue.js, Angular, Flutter, React Native, Python, C# / .NET et Paperclip.

L'agence s'appuie en interne sur des **pratiques de développement agentique** (automatisation intelligente, cycles courts, revues systématiques). Ce levier n'est **pas le message principal** du site : il est présenté comme un **modèle de développement moderne**, centré sur la qualité, la vitesse maîtrisée et la fiabilité des livrables.

### 1.2 Objectifs business

| Objectif | Description | Indicateur (à définir) |
|----------|-------------|------------------------|
| Génération de leads | Attirer des prospects qualifiés | Nombre de formulaires / RDV par mois |
| Crédibilité | Démontrer l'expertise et la méthode | Temps sur site, pages services, retours |
| Thought leadership | Publier avis, retours d'expérience et process | Articles publiés / mois, trafic blog, partages LinkedIn |
| **Visibilité SEO / GEO** | Être trouvé sur Google **et** dans les moteurs génératifs (ChatGPT, Perplexity, etc.) | Positions mots-clés, impressions, citations IA (qualitatif) |
| Clarification de l'offre | Rendre les 4 piliers lisibles | Taux de conversion accueil → contact |
| Partenariats / recrutement | Canal secondaire | Demandes entrantes dédiées |

### 1.3 Objectifs du site

- Expliquer **à qui** l'agence s'adresse, **quels services** elle propose et **comment** elle travaille.
- Rassurer sur la **qualité technique**, la **sécurité**, la **maintenabilité** et la **gouvernance** des projets.
- Convertir les visiteurs via un **parcours simple** vers la prise de contact ou la réservation d'un échange.
- Alimenter une **zone blog** pour partager avis d'expert, tests terrain et processus — levier **SEO + GEO** et diffusion **LinkedIn**.
- Faire du référencement (**SEO classique + GEO**) un **axe prioritaire** du projet, pas un habillage de fin de chantier (§ 12).

### 1.4 Hors périmètre (V1)

- Espace client / portail projet
- Facturation en ligne
- Marketplace ou catalogue produits
- Module recrutement avancé (ATS)
- Application mobile dédiée à l'agence

---

## 2. Positionnement et discours

### 2.1 Proposition de valeur

> Nous concevons et livrons des produits numériques fiables — sites web, applications métier et mobiles — en accompagnant les équipes sur l'organisation et les pratiques de delivery adaptées aux exigences actuelles : itérations courtes, qualité mesurable et alignement métier.

### 2.2 Différenciation

| Ce que le site met en avant | Ce que le site évite |
|-----------------------------|----------------------|
| Résultats métier, délais, qualité, accompagnement | Jargon « IA partout » ou discours hype |
| Méthode moderne, tests, revue de code, industrialisation | Promesses non vérifiables (« 10× plus vite ») |
| Transparence sur processus et livrables | Détail des outils agentiques en vitrine |
| Sécurité, conformité, propriété du code | Message « remplacement des développeurs » |

### 2.3 Discours sur le développement agentique

**Message public recommandé :**

> Nous intégrons les pratiques de développement les plus récentes — automatisation intelligente, revues systématiques et cycles courts — pour accélérer la livraison sans sacrifier la robustesse. Votre équipe conserve la maîtrise du produit et du code.

**Principes internes (non exposés en détail sur le site) :**

- Usage agentique pour accélérer : spécifications, implémentation, tests, documentation, refacto.
- Garde-fous obligatoires : revue humaine, standards sécurité, traçabilité, aucun code non audité en production.
- Le client achète un **résultat** et une **méthode**, pas une « stack IA ».

### 2.4 Ton éditorial

- Professionnel, concret, orienté résultats.
- Français comme langue principale ; anglais en option si cible internationale.
- Éviter les superlatifs creux et le vocabulaire buzzword sans substance.

---

## 3. Cibles et personas

### 3.1 Personas principaux

| Persona | Besoin | Message clé |
|---------|--------|-------------|
| **Dirigeant PME / scale-up** | Produit numérique, budget, délais | ROI, simplicité, accompagnement |
| **DSI / CTO** | Qualité, intégration SI, équipe | Architecture, sécurité, maintenabilité |
| **Product owner / responsable métier** | Application métier, adoption | Compréhension métier, livraison incrémentale |
| **Directeur transformation / RH tech** | Organisation des équipes | Méthode, montée en compétence, gouvernance |

### 3.2 Zone géographique et langues

- **Zone principale :** à définir (ex. France, francophonie, Europe)
- **Langue V1 :** français
- **Langue V2 (option) :** anglais — voir exigence F07 (§ 7.1)

---

## 4. Périmètre fonctionnel

### 4.1 Lot 1 — MVP (Must have)

- **Page d'accueil longue** (sections ancrées, parcours conversion principal) — voir § 5.2
- **4 pages services** (détail SEO + approfondissement depuis l'accueil)
- **Zone blog** complète (liste, catégories, articles, CMS) — voir § 6
- **Section contact** sur l'accueil + page `/contact` (formulaire identique)
- Pages légales (mentions légales, confidentialité, cookies)
- Design responsive mobile-first, navigation sticky + ancres
- **SEO + GEO** intégrés dès la conception (§ 12) — pages, blog, données structurées
- Partage **LinkedIn** natif sur chaque article de blog (§ 12.4, § 6.3)
- Analytics avec consentement cookies

> **Choix d'architecture (v2)** : l'accueil concentre l'essentiel du discours (inspiré structurellement d'un site de référence interne § 9.5). Les pages internes complètent pour le SEO et les liens entrants, sans dupliquer inutilement tout le contenu.

### 4.2 Lot 2 — Enrichissement (Should / Could)

| Fonctionnalité | Priorité | Lot |
|----------------|----------|-----|
| Page `/realisations` + fiches projet | Should | 1 |
| Prise de RDV en ligne (Calendrier) | Should | 1.1 |
| Témoignages clients (carousel accueil) | Should | 1 |
| Version anglaise | Should | 1.2 |
| Téléchargement plaquette PDF | Could | 1.2 |
| Intégration CRM (webhook) | Should | 1.1 |

---

## 5. Architecture du site et contenus

> Structure optimisée d'après un **site de référence interne** (§ 9.5) : page d'accueil riche en sections verticales, preuves sociales rapprochées, offres en cartes actionnables, contact sans friction. **Identité, textes et visuels = Agentic Agency uniquement.**

### 5.1 Modèle global

| Type | Rôle | URLs |
|------|------|------|
| **Landing principale** | Conversion, vision d'ensemble | `/` (sections `#hero` … `#contact`) |
| **Pages services** | Détail, SEO, partage ciblé | `/services/developpement-web`, etc. |
| **Blog** | Expertise, SEO long terme | `/blog`, `/blog/[slug]`, `/blog/avis` … |
| **Technologies** | Détail stacks, versions, CLI | `/technologies` (Could — sinon modal depuis `#technologies`) |
| **Réalisations** | Portfolio | `/realisations`, `/realisations/[slug]` |
| **Contact** | Formulaire + RDV (miroir accueil) | `/contact` |
| **Légal** | Conformité | `/mentions-legales`, `/confidentialite` |

**Pages supprimées en tant que pages isolées V1** (contenu intégré à l'accueil) :

- ~~Notre approche~~ → section `#approche` + rappel sur pages services
- ~~À propos~~ → section `#valeurs` sur l'accueil

### 5.2 Navigation

#### Header sticky (desktop + mobile)

| Élément | Comportement |
|---------|--------------|
| Logo | Lien vers `/` |
| Ancres accueil | Offres · Réalisations · Blog · Contact (scroll smooth) |
| CTA header | « Échanger sur votre projet » → `#contact` |
| Menu mobile | Drawer avec mêmes liens + pages services en sous-liste |

Sur les **pages internes** : mêmes liens, ancres pointent vers `/#section` sur l'accueil.

#### Footer

- Rappel des 4 piliers services (liens)
- Blog (liste + catégories)
- Légal · Contact · LinkedIn
- Pas de citation du site de référence

### 5.3 Page d'accueil — sections (ordre optimisé)

Chaque section a un `id` d'ancre stable pour la nav et le partage (`/#offres`, etc.).

| # | Ancre | Titre éditorial (ex.) | Rôle | Priorité |
|---|-------|----------------------|------|----------|
| S01 | `#hero` | Livrez plus vite. Sans sacrifier la qualité. | Accroche + sous-titre + CTA principal + visuel | Must |
| S02 | `#stats` | — | 4 indicateurs chiffrés (crédibilité immédiate) | Must |
| S03 | `#confiance` | Ils nous font confiance | Logos clients ou **secteurs** (Fintech, Santé, Industrie…) | Should |
| S04 | `#delivery-moderne` | Le delivery moderne, sans compromis | Valeur : pratiques récentes, qualité, reprise en main client — **pas** discours IA | Must |
| S05 | `#offres` | Nos offres — 4 piliers d'expertise | Cœur commercial : 4 colonnes + cartes offre (§ 5.6) | Must |
| S06 | `#cta-milieu` | Prêt à accélérer votre produit ? | Bandeau CTA court → `#contact` | Must |
| S07 | `#contact` | Contactez-nous | Formulaire + alternatives (email, RDV, LinkedIn) | Must |
| S08 | `#temoignages` | Ce que disent nos clients | 3 cartes citation (service tagué) | Should |
| S09 | `#blog` | Notes de terrain | 3 derniers articles + lien `/blog` | Must |
| S10 | `#realisations` | Missions & réalisations | 3 à 6 cartes cas (secteur, impact, stack) | Should |
| S11 | `#technologies` | Technologies maîtrisées | Grille 11 stacks § 5.5 (nom + version) | Must |
| S12 | `#valeurs` | Notre façon de travailler | Texte + 4 piliers valeurs (cartes icône) | Must |
| S13 | `#approche` | Comment nous livrons | Timeline 5 étapes (discovery → transfert) | Must |
| — | Footer | — | Liens, légal | Must |

#### S01 — Hero

| Élément | Spécification |
|---------|---------------|
| H1 | Proposition de valeur (§ 2.1), ton direct |
| Sous-titre | 1–2 lignes : qui vous aidez + stacks clés (Symfony, React, Flutter…) sans liste exhaustive |
| CTA primaire | « Réserver un échange » ou « Décrire mon projet » → `#contact` |
| CTA secondaire | « Découvrir nos offres » → `#offres` |
| Visuel | **Option A** : illustration produit / interface · **Option B** : extrait code stylisé (qualité, tests) — **pas** copie du snippet du site de référence |

**Exemple de ligne éditoriale (à valider) :**

> Agence de développement web, applications métier et mobiles. Nous structurons, accélérons et sécurisons vos livraisons grâce à des pratiques de delivery modernes.

#### S02 — Indicateurs (stats)

4 blocs alignés (comme bandeau KPI du site de référence, **chiffres Agentic** à définir) :

| Indicateur (exemple) | Libellé | Notes |
|----------------------|---------|-------|
| XX % | Dette technique réduite (moyenne projets) | Ou métrique qualité vérifiable |
| XX+ | Années d'expérience cumulée équipe | |
| 7 | Stacks maîtrisées | Renvoi § 5.5 |
| XX+ | Projets accompagnés | |

*Ne pas afficher de chiffres non sourcés — prévoir « à valider » en recette.*

#### S04 — Delivery moderne

| Élément | Contenu |
|---------|---------|
| Titre H2 | Le delivery moderne comme avantage — pas « l'IA » en titre |
| Corps | 2 paragraphes : cycles courts, revues, automatisation intelligente **au service de la qualité** |
| Preuve | Lien blog (article Process ou Tests) + option « Voir notre approche » → `#approche` |
| CTA | « Lire nos retours d'expérience » → `/blog` |

#### S05 — Offres (structure en 4 piliers)

Voir § 5.6 pour le détail des cartes. Chaque pilier :

- Titre H2 + courte description
- 2 à 3 **cartes offre** (titre, description, fourchette prix **optionnelle**, CTA)
- Lien « En savoir plus » → page service dédiée

#### S07 — Contact (sur accueil)

- Formulaire § 7.2 avec **liste Sujet** alignée sur les offres (§ 5.6)
- Mention délai de réponse (ex. sous 24–48 h ouvrées)
- Bloc **Ou directement** : prise de RDV (Calendly/Cal.com), LinkedIn, email
- Ancre cible des CTAs du site entier

#### S08 — Témoignages

- 3 témoignages minimum au go-live (sinon section masquée jusqu'à disponibilité)
- Format : citation, prénom + fonction, **tag offre** (ex. « Application métier »)
- Carousel mobile / grille desktop

#### S10 — Réalisations (aperçu)

- 3 cartes minimum sur l'accueil ; lien « Toutes les réalisations » → `/realisations`
- Carte : secteur, titre mission, impact en 1 ligne, tags technos (§ 5.5)

#### S12 — Valeurs (équivalent « esprit » / manifeste)

4 cartes, ex. :

| Valeur | Message |
|--------|---------|
| **Fiabilité** | Code maintenable, MEP maîtrisées |
| **Rigueur** | Tests, revues, critères d'acceptation |
| **Partenariat** | Extension de votre équipe, pas boîte noire |
| **Pragmatisme** | Pas de sur-ingénierie — valeur métier d'abord |

CTA : « Parler de votre projet » → `#contact`

### 5.4 Pages services (×4) — rôle complémentaire

URLs proposées :

- `/services/developpement-web`
- `/services/applications-metier`
- `/services/applications-mobiles`
- `/services/conseil-organisation`

Chaque page reprend et **approfondit** le pilier correspondant de `#offres` :

1. Hero court + CTA
2. Problèmes clients
3. Cartes offre détaillées (mêmes que l'accueil, textes enrichis)
4. Processus spécifique au service
5. Technologies (sous-ensemble § 5.5)
6. Réalisations filtrées (2–3 liens)
7. Articles blog liés (auto ou sélection CMS)
8. FAQ
9. CTA → `/contact?sujet=…` (pré-remplissage optionnel)

### 5.5 Technologies et expertises de l'agence

Le site doit **expliciter les technologies que l'agence propose** aux clients. Offre technique métier (projets clients), distincte de la stack du site vitrine (§ 10).

#### Supported Technologies — liste officielle (source de vérité)

| Stack | Version | Commande d'installation | Usage typique |
|-------|---------|-------------------------|---------------|
| **Symfony** / PHP | Symfony **8.0** / PHP **8.4+** | `--tech=symfony` | APIs, applications métier, plateformes web robustes |
| **Laravel** | **13.x** / PHP **8.5** | `--tech=laravel` | Applications web et métier, time-to-market |
| **PHP** | **8.5** | `--tech=php` | Backends PHP, maintenance legacy, briques métier |
| **React** | **19.2** + Compiler **1.0** | `--tech=react` | Interfaces web, SPA, design systems |
| **Vue.js** | **3.5+** (3.6 beta Vapor) | `--tech=vuejs` | Frontends progressifs, apps métier légères |
| **Angular** | **20 LTS** (ou 21) | `--tech=angular` | Applications web structurées, contexte entreprise |
| **Flutter** / Dart | **3.41** / Dart **3.11** | `--tech=flutter` | Apps iOS & Android cross-platform |
| **React Native** | **0.85** (New Architecture) | `--tech=reactnative` | Apps mobiles écosystème React |
| **Python** | **3.14+** / **FastAPI** | `--tech=python` | APIs, data, automatisation, intégrations |
| **C#** / **.NET** | **.NET 10 LTS** / C# **14** | `--tech=csharp` | Applications métier Microsoft, APIs, cloud Azure |
| **Paperclip** | **2026.403.0** | `--tech=paperclip` | Stack outillage / delivery (projets agentiques internes) |

> Les commandes `--tech=*` correspondent au **CLI de scaffolding interne** de l'agence (initialisation projet). Affichage public : **optionnel** (voir ci-dessous) — au minimum **nom + version** sur le site.

#### Répartition par page service

| Page service | Stacks à mettre en avant |
|--------------|-------------------------|
| **Développement web** | Symfony, Laravel, PHP, React, Vue.js, Angular, Python, C# / .NET |
| **Applications métier** | Symfony, Laravel, PHP, Python, FastAPI, React, Angular, Vue.js, C# / .NET |
| **Applications mobiles** | Flutter, React Native |
| **Conseil & organisation** | Vue transversale des 11 stacks ; mention de Paperclip dans le cadre des **pratiques de delivery modernes** (sans détail technique excessif) |

#### Règles de présentation sur le site

| Niveau | Contenu affiché | Où |
|--------|-----------------|-----|
| **Bandeau** | Logo ou badge + **nom de la stack** | `#technologies` (accueil) — grille responsive 11 items |
| **Carte détail** (au clic / hover) | **Version** exacte (colonne Version du tableau) | Modal, tooltip ou page `/technologies` (Should) |
| **Commande `--tech`** | Texte copiable, style `monospace` | Page `/technologies` ou section « Pour les équipes techniques » — **Could V1** ; toujours documentée dans le CMS |

- **Accueil `#technologies`** : les **11 stacks** sont nommées ; versions visibles au survol ou via lien « Voir le détail des stacks ».
- **Pages services** : sous-ensemble pertinent (tableau ci-dessus), pas la liste complète sauf lien vers `/technologies`.
- **CMS** : une entrée par stack (nom, version, commande, logo, ordre d'affichage, pages services associées).
- **Pas de guerre de stacks** : ton neutre ; ne pas dénigrer d'autres technologies.
- **Hors liste** : autres stacks possibles au cas par cas — FAQ dédiée.
- **Blog** : articles Tests / Avis peuvent référencer versions précises (ex. « Symfony 8.0 »).

#### Modèle de données CMS — stack (Should)

| Champ | Type | Notes |
|-------|------|-------|
| `name` | string | ex. « React » |
| `slug` | string | ex. `react` |
| `versionLabel` | string | ex. « 19.2 + Compiler 1.0 » |
| `installCommand` | string | ex. `--tech=react` |
| `category` | enum | `backend` \| `frontend` \| `mobile` \| `tooling` |
| `logo` | image | `alt` = nom stack |
| `sortOrder` | number | Ordre d'affichage grille |

#### FAQ type — choix de technologie

1. **Symfony ou Laravel ?** — Existant PHP, écosystème, profil équipe, contraintes hébergement.  
2. **PHP seul vs framework ?** — Scripts ciblés, legacy, microservices légers vs produit structuré.  
3. **React, Vue.js ou Angular ?** — Taille projet, structure imposée, compétences internes, perf (Vapor Vue en beta).  
4. **Flutter ou React Native ?** — Modules natifs, équipe React existante, New Architecture RN 0.85.  
5. **Python / FastAPI ?** — APIs, data, intégrations, prototypage rapide.  
6. **C# / .NET 10 ?** — SI Microsoft, Azure, applications métier entreprise.  
7. **Qu'est-ce que Paperclip ?** — Outil de delivery / stack interne pour industrialiser nos pratiques modernes (réponse orientée client, pas doc produit).  
8. **Imposez-vous une stack unique ?** — Non ; choix en discovery parmi les stacks maîtrisées.

#### Exigence contenu (Must)

- Les **11 stacks** du tableau sont visibles sur `#technologies` (accueil).
- **Versions** affichées quelque part sur le parcours public (carte détail ou `/technologies`).
- Libellés homogènes : **Vue.js** (pas « Vue » seul en titre), **C# / .NET**, **React Native**, **FastAPI** mentionné avec Python quand pertinent.
- Orthographe : **Flutter** (pas « Fluter »).

### 5.6 Cartes offre — 4 piliers (détail)

Structure inspirée du site de référence (piliers → cartes produit), **adaptée à 4 piliers Agentic**. Chaque carte :

| Champ | Spécification |
|-------|---------------|
| Titre | Nom de l'offre |
| Description | 2–4 lignes, bénéfice client |
| Fourchette prix | Optionnelle V1 (« Sur devis » accepté) |
| CTA | Verbe d'action → `#contact` ou page service |
| `sujet` formulaire | Valeur select alignée (§ 7.2) |

#### Pilier 1 — Développement web

| Carte offre (exemple) | Sujet formulaire |
|-----------------------|------------------|
| Site vitrine & corporate | Développement web — site |
| Plateforme web & portail | Développement web — plateforme |
| Refonte & modernisation | Développement web — refonte |

#### Pilier 2 — Applications métier

| Carte offre (exemple) | Sujet formulaire |
|-----------------------|------------------|
| Application métier sur mesure | Application métier — greenfield |
| Évolution & dette technique | Application métier — évolution |
| Intégration SI & APIs | Application métier — intégration |

#### Pilier 3 — Applications mobiles

| Carte offre (exemple) | Sujet formulaire |
|-----------------------|------------------|
| App iOS & Android (Flutter) | Mobile — Flutter |
| App React Native | Mobile — React Native |
| MVP mobile | Mobile — MVP |

#### Pilier 4 — Conseil & organisation

| Carte offre (exemple) | Sujet formulaire |
|-----------------------|------------------|
| Audit organisation & delivery | Conseil — audit |
| Accompagnement équipe & rituels | Conseil — équipe |
| Montée en compétence pratiques modernes | Conseil — formation |

*Les intitulés exacts et prix sont à valider en atelier contenu.*

### 5.7 Page `/realisations`

| Élément | Spécification |
|---------|---------------|
| Liste | Grille filtrable : Web · Métier · Mobile · Conseil |
| Carte | Secteur, titre, impact, tags technos |
| Fiche | Gabarit annexe A |
| Lien | Depuis `#realisations` accueil et pages services |

### 5.8 Page `/contact`

- Même formulaire et bloc « Ou directement » que `#contact` sur l'accueil
- Permet partage URL directe et campagnes ads
- Paramètre URL `?sujet=` pour pré-sélection (option Should)

### 5.9 Contenus à produire

| Contenu | Responsable | Échéance cible |
|---------|-------------|----------------|
| Textes 13 sections accueil | Client / rédacteur | S-4 |
| Cartes offre (4 × 2–3) | Métier | S-4 |
| Textes 4 pages services | Client / rédacteur | S-4 |
| Chiffres section `#stats` (sourcés) | Métier | S-3 |
| 2 à 3 témoignages | Client | S-2 |
| 3 réalisations (accueil + page) | Agence | S-2 |
| 3 articles blog (1 / catégorie) | Agence | S-2 |
| Visuels hero + icônes valeurs | Design | S-3 |
| Logos technologies (×11) | Design | S-3 |
| Données CMS 11 stacks (§ 5.5) | Métier / dev | S-4 |
| Mentions légales | Juridique | S-1 |
| FAQ par service | Métier | S-3 |

---

## 6. Zone Blog — avis, tests, process

### 6.1 Rôle du blog

Le blog est un **pilier du site V1**, pas un ajout optionnel. Il sert à :

- **Démontrer l'expertise** par des contenus concrets (retours d'expérience, méthode, veille outillée).
- **Attirer du trafic organique** (SEO + GEO, partages LinkedIn — § 12).
- **Nourrir la confiance** avant la prise de contact — le lecteur comprend *comment* l'agence pense et travaille.
- **Documenter l'évolution** des pratiques modernes de delivery sans en faire un argument marketing frontal.

Le blog **complète** la section `#approche` sur l'accueil : l'approche = référence stable ; le blog = flux vivant (avis, tests, process).

### 6.2 Rubriques éditoriales

Trois catégories obligatoires, visibles dans la navigation et filtrables sur la liste des articles.

| Catégorie | Slug | Objectif | Exemples de sujets |
|-----------|------|----------|-------------------|
| **Avis** | `avis` | Point de vue argumenté, veille, choix d'architecture ou d'organisation | « Pourquoi nous structurons les specs avant le code », « Ce que nous pensons du no-code en contexte métier » |
| **Tests** | `tests` | Retours d'expérience terrain, benchmarks, essais d'outils ou de méthodes | « 30 jours avec [outil X] sur un vrai backlog », « Mesurer le gain d'une revue systématique » |
| **Process** | `process` | Méthode, rituels, organisation d'équipe, delivery | « Notre checklist avant une mise en prod », « Comment on cadre un sprint discovery » |

**Règles éditoriales :**

- Chaque article appartient à **une catégorie principale** (pas de multi-catégorie en V1).
- Ton : expert accessible, factuel, **montrer plutôt qu'affirmer** (données, captures, étapes).
- Longueur cible : **800 à 2 000 mots** (hors séries éventuelles).
- Fréquence cible post-lancement : **2 articles / mois minimum** (mix des 3 catégories).
- Pas de contenu « IA hype » : les tests et process peuvent mentionner l'automatisation intelligente **dans le cadre d'une expérience réelle**.

### 6.3 Pages et écrans blog

#### Page liste — `/blog`

| Élément | Spécification |
|---------|---------------|
| Titre H1 | Blog (ou « Insights », « Notes de terrain » — à valider) |
| Introduction | 1–2 phrases sur ce que le lecteur y trouve |
| Filtres | Onglets ou pills : Tous · Avis · Tests · Process |
| Grille / liste | Cartes article : image, catégorie, titre, extrait, date, temps de lecture |
| Tri | Par date de publication (défaut, décroissant) |
| Pagination | 9 articles par page (ou scroll « charger plus ») |
| État vide | Message + CTA contact si aucun article |

#### Page catégorie — `/blog/avis`, `/blog/tests`, `/blog/process`

- Même mise en page que la liste, **filtre pré-appliqué**.
- Titre H1 et meta description **spécifiques à la catégorie**.
- Texte d'intro court par catégorie (2–3 phrases, éditable via CMS).

#### Page article — `/blog/[slug]`

| Élément | Spécification |
|---------|---------------|
| En-tête | Catégorie (lien), titre H1, date, temps de lecture, auteur |
| Corps | Markdown / rich text : titres H2/H3, listes, citations, code, images |
| Sommaire | Auto-généré à partir des H2 (si ≥ 3 sections) — option Should |
| CTA milieu / fin | Encart discret : « Un sujet similaire sur votre projet ? » → Contact |
| Articles liés | 2 à 3 articles même catégorie ou tags proches |
| Partage social | Bouton **Partager sur LinkedIn** (Must) + copier le lien — voir § 12.4 |
| SEO / GEO | Champs dédiés CMS : title, description, OG image, résumé « answer-first » — § 12 |

### 6.4 Modèle de données article (CMS)

| Champ | Type | Obligatoire | Notes |
|-------|------|-------------|-------|
| `title` | string | oui | Titre affiché |
| `slug` | string | oui | URL, unique, généré depuis titre modifiable |
| `category` | enum | oui | `avis` \| `tests` \| `process` |
| `excerpt` | text | oui | 150–200 caractères, liste + meta |
| `body` | rich text / MDX | oui | Contenu principal |
| `coverImage` | image | oui | Ratio 16:9, alt obligatoire |
| `author` | référence | oui | Nom, rôle, photo optionnelle |
| `publishedAt` | datetime | oui | Date de publication |
| `updatedAt` | datetime | non | Affichée si différente de `publishedAt` |
| `readingTime` | number | auto | Calculé depuis le corps |
| `seoTitle` | string | non | Sinon = `title` |
| `seoDescription` | string | non | Sinon = `excerpt` |
| `ogImage` | image | oui | 1200×627 min., optimisée LinkedIn — sinon = `coverImage` |
| `linkedinTeaser` | text | non | Accroche ≤ 300 car. pour partage manuel (sinon = `excerpt`) |
| `keyTakeaways` | text | non | 3–5 bullets en tête d'article — **recommandé GEO** |
| `status` | enum | oui | `draft` \| `published` |
| `featured` | boolean | non | Affichage prioritaire accueil |

**Hors scope V1 :** commentaires publics, newsletter intégrée, paywall, multi-auteurs avancé.

### 6.5 Back-office et workflow publication

- Édition via **CMS headless** (Sanity, Contentful, ou MDX + Git pour profils techniques).
- Workflow : brouillon → relecture interne → publication (pas de validation client externe requise).
- **Prévisualisation** du brouillon avant publication (Must).
- Formation courte (30 min) pour publier sans développeur.
- Images : upload CMS, formats WebP/AVIF dérivés si possible.
- **Après publication** : checklist SEO/GEO/LinkedIn § 12.6 + partage LinkedIn § 12.4.

### 6.6 Contenus de lancement

Minimum à la mise en ligne :

| # | Catégorie | Sujet (exemple) | Statut |
|---|-----------|-----------------|--------|
| 1 | Process | Présentation de notre cycle discovery → livraison | À rédiger |
| 2 | Tests | Retour d'expérience sur un outil ou une pratique testée en interne | À rédiger |
| 3 | Avis | Point de vue sur une tendance du delivery moderne (sans jargon IA) | À rédiger |

### 6.7 KPIs blog (post-lancement)

| Indicateur | Cible indicative |
|------------|------------------|
| Articles publiés | ≥ 2 / mois |
| Trafic organique pages blog | Croissance trimestrielle |
| Temps moyen sur article | > 2 min |
| Clics CTA blog → contact | Suivi via analytics |
| Partages LinkedIn / article | ≥ 1 partage équipe par article publié |
| Impressions organiques (GSC) | Croissance trimestrielle |
| Pages indexées | 100 % pages publiées dans sitemap |

---

## 7. Exigences fonctionnelles

### 7.1 Matrice des exigences

| ID | Exigence | Priorité | Lot |
|----|----------|----------|-----|
| F01 | Pages statiques ou SSR performantes | Must | 1 |
| F02 | Formulaire contact + notification email | Must | 1 |
| F03 | Protection anti-spam (honeypot et/ou reCAPTCHA) | Must | 1 |
| F04 | SEO technique (meta, sitemap, robots, canonical) — § 12.2 | Must | 1 |
| F05 | Analytics + bandeau consentement cookies (RGPD) | Must | 1 |
| F06 | Responsive mobile-first (320px → 1440px+) | Must | 1 |
| F07 | Multilingue FR / EN | Should | 1.2 |
| F08 | CMS headless pour le blog | Must | 1 |
| F09 | Prise de RDV en ligne | Could | 1.1 |
| F10 | Téléchargement plaquette PDF | Could | 1.2 |
| F11 | Webhook vers CRM sur soumission formulaire | Should | 1.1 |
| F12 | Page réalisations avec filtres | Should | 1.1 |
| F13 | Page liste blog avec filtres par catégorie | Must | 1 |
| F14 | Pages catégorie `/blog/avis`, `/blog/tests`, `/blog/process` | Must | 1 |
| F15 | Page article avec slug unique, métadonnées et OG | Must | 1 |
| F16 | Statuts brouillon / publié + prévisualisation | Must | 1 |
| F17 | Bloc « derniers articles » sur l'accueil | Must | 1 |
| F18 | Articles liés en bas de fiche article | Must | 1 |
| F19 | CTA contact contextualisé sur les articles | Must | 1 |
| F20 | Temps de lecture calculé automatiquement | Must | 1 |
| F21 | Sommaire auto (H2) sur articles longs | Should | 1 |
| F22 | Flux RSS `/blog/rss.xml` | Could | 1.1 |
| F23 | Grille `#technologies` — 11 stacks + versions (§ 5.5) | Must | 1 |
| F41 | CMS stacks (nom, version, commande, logo) | Should | 1 |
| F42 | Page `/technologies` détail (tableau complet) | Could | 1 |
| F24 | Bloc technologies par page service (sous-ensemble § 5.5) | Must | 1 |
| F25 | Accueil long-scroll avec ancres `#hero` … `#contact` | Must | 1 |
| F26 | Navigation sticky + scroll smooth vers ancres | Must | 1 |
| F27 | Section `#offres` : 4 piliers × cartes offre (§ 5.6) | Must | 1 |
| F28 | Section `#stats` (4 KPIs éditables CMS ou config) | Must | 1 |
| F29 | Section `#contact` sur accueil + page `/contact` | Must | 1 |
| F30 | Champ formulaire **Sujet** aligné cartes offre | Must | 1 |
| F31 | Section `#temoignages` (masquable si vide) | Should | 1 |
| F32 | Section `#realisations` aperçu + page liste | Should | 1 |
| F33 | Pré-remplissage `?sujet=` sur `/contact` | Should | 1 |
| F34 | Données structurées Schema.org (Organization, BlogPosting, FAQ) | Must | 1 |
| F35 | Fichier `llms.txt` + page résumé site pour crawlers IA | Should | 1 |
| F36 | Bouton « Partager sur LinkedIn » sur chaque article blog | Must | 1 |
| F37 | Meta Open Graph / Twitter Card complètes par page et article | Must | 1 |
| F38 | URLs canoniques + hreflang si multilingue | Must / Should | 1 / 1.2 |
| F39 | UTM automatiques sur liens partage LinkedIn (`utm_source=linkedin`) | Should | 1 |
| F40 | Outil prévisualisation partage (debug OG) documenté pour la recette | Must | 1 |

### 7.2 Formulaire de contact

**Champs obligatoires :**

| Champ | Type | Validation |
|-------|------|------------|
| Nom | texte | requis |
| Email | email | requis, format valide |
| Société | texte | requis |
| Sujet | select | requis — valeurs § 5.6 |
| Message | textarea | requis, min. 50 caractères |
| Consentement RGPD | checkbox | requis |

**Champs optionnels :**

| Champ | Type |
|-------|------|
| Téléphone | tel |
| Budget indicatif | select (fourchettes) |
| Délai souhaité | select |
| Comment nous avez-vous connus ? | select |

**Valeurs « Sujet »** (alignées sur les cartes offre § 5.6) :

- Développement web — site / plateforme / refonte
- Application métier — greenfield / évolution / intégration
- Mobile — Flutter / React Native / MVP
- Conseil — audit / équipe / formation
- Autre

*Regroupement possible en optgroups par pilier dans le select.*

**Comportement attendu :**

- Message de confirmation à l'écran après envoi
- Email de notification vers boîte métier
- Email d'accusé de réception automatique au demandeur (option)
- Stockage : aucune donnée sensible en base sur le site V1 (traitement par email / CRM uniquement)

### 7.3 Parcours utilisateur prioritaires

```
Parcours 1 — Conversion rapide (principal)
Hero → #offres → carte CTA → #contact → envoi

Parcours 2 — Réassurance
Hero → #stats → #realisations → #temoignages → #contact

Parcours 3 — Expertise
LinkedIn / SEO → /blog/article → #approche (accueil) → #contact

Parcours 4 — Service ciblé
SEO → /services/applications-metier → #contact

Parcours 5 — Mobile
Accueil → #technologies → page Mobile → #contact
```

---

## 8. Exigences non fonctionnelles

### 8.1 Performance

| Critère | Cible |
|---------|-------|
| Lighthouse Performance | ≥ 90 |
| Largest Contentful Paint (LCP) | < 2,5 s (connexion moyenne) |
| First Input Delay | < 100 ms |
| Cumulative Layout Shift | < 0,1 |

### 8.2 Accessibilité

| Critère | Cible |
|---------|-------|
| Référentiel | WCAG 2.1 niveau AA |
| Contraste | Conforme AA |
| Navigation | Clavier complète |
| Images | Attributs `alt` descriptifs |
| Formulaires | Labels associés, messages d'erreur explicites |

### 8.3 Sécurité

- HTTPS obligatoire
- Headers de sécurité (CSP, X-Frame-Options, etc. — à affiner selon hébergeur)
- Dépendances maintenues à jour (politique de patch)
- Aucune clé API exposée côté client
- Données formulaire : chiffrement en transit (TLS)

### 8.4 Disponibilité et maintenance

| Élément | Cible |
|---------|-------|
| Disponibilité | 99,5 % (hébergement managé) |
| Sauvegardes | Selon hébergeur |
| Maintenance corrective | À définir (contrat optionnel) |

### 8.5 Compatibilité navigateurs

- Dernières versions : Chrome, Firefox, Safari, Edge
- Safari iOS et Chrome Android (2 dernières versions majeures)
- Dégradation gracieuse acceptable pour navigateurs obsolètes

### 8.6 Performance blog

- Pages article : LCP < 2,5 s malgré images (lazy-load, formats modernes).
- Images blog servies en responsive (`srcset`) avec `alt` obligatoire.

---

## 9. Identité visuelle et UX

### 9.1 Direction créative

- **Ambiance :** moderne, sobre, professionnelle — confiance plutôt que « startup IA »
- **Rythme :** sections pleine largeur alternées (fond clair / foncé), espacements généreux — inspiré du site de référence § 9.5, **charte Agentic propre**
- **Éviter :** esthétique générique « tech IA » (violet néon, visuels robots, mascotte « ours », etc.)
- **Priorité :** lisibilité, hiérarchie claire, CTAs répétés mais non agressifs

### 9.2 Charte (à définir en phase design)

| Élément | Spécification |
|---------|---------------|
| Logo | À créer ou adapter |
| Couleurs | 1 couleur principale + palette neutres |
| Typographie | 1 famille titres + 1 famille corps (web fonts) |
| Iconographie | Style cohérent (ligne ou plat) |
| Photographies | Équipe réelle ou banque sobre (pas stock « poignée de main ») |

### 9.3 Composants UI

- Header sticky : logo, ancres, CTA
- Hero split (texte + visuel)
- **Bandeau KPI** (4 colonnes)
- Logos secteurs / clients (grayscale, hover optionnel)
- **Bloc 4 piliers offres** : titre pilier + grille cartes (prix, CTA)
- Bandeau CTA intermédiaire (fond contrasté)
- **Formulaire contact** + liens RDV / LinkedIn
- Carousel ou grille **témoignages**
- Grille **articles blog** (3 cartes)
- Grille **réalisations** (tags secteur + stack)
- Grille **technologies** (11 stacks, versions au détail)
- Grille **valeurs** (4 icônes)
- **Timeline** processus (5 étapes)
- Cartes offre réutilisables (accueil + pages services)
- Template blog (liste, catégorie, article)
- Footer riche

### 9.4 Livrables design

| Livrable | Description |
|----------|-------------|
| Wireframes | Accueil scroll complet (13 sections) + 1 page service + blog liste + article |
| Maquettes | Desktop + mobile (Figma ou équivalent) |
| Design system minimal | Couleurs, typo, boutons, espacements, états |
| Prototype cliquable | Optionnel |
| Audit référence design (§ 9.5) | Capture structure + liste des patterns à reprendre |

### 9.5 Référence design interne (confidentiel)

| Champ | Valeur |
|-------|--------|
| **URL** | https://the-bearded-bear.com |
| **Intégration CdC** | Structure reprise et optimisée en **§ 5.3** (sections accueil) et **§ 5.6** (cartes offre) |
| **Citation publique** | **Interdite** |

**Correspondance structurelle (référence → Agentic optimisé) :**

| Référence | Agentic Agency |
|----------|----------------|
| Hero + CTA + visuel code | S01 `#hero` — visuel propre Agentic |
| Bandeau KPI chiffré | S02 `#stats` |
| Logos secteurs clients | S03 `#confiance` |
| Section « IA / multiplicateur » | S04 `#delivery-moderne` — **sans** centrage Claude Code / IA |
| 3 piliers × cartes produit + prix | S05 `#offres` — **4 piliers** § 5.6 |
| CTA milieu de page | S06 `#cta-milieu` |
| Formulaire contact + RDV + LinkedIn | S07 `#contact` |
| Témoignages | S08 `#temoignages` |
| Lead magnet / newsletter | **Non repris V1** — remplacé par S09 `#blog` |
| Produits open source | **Non repris** — hors positionnement agence |
| Réalisations / missions | S10 `#realisations` |
| Technologies maîtrisées | S11 `#technologies` |
| Manifeste / esprit / valeurs | S12 `#valeurs` + S13 `#approche` |

**Ne jamais copier :** nom, ours, palette, textes, offres nommées (Bear Scan, etc.), prix, témoignages du site source.

---

## 10. Stack technique du site web

> Cette section concerne **uniquement la réalisation du site vitrine** (CMS, hébergement, front du site). Les technologies proposées aux **clients** pour leurs projets sont définies en § 5.5.

### 10.1 Recommandation (à valider)

| Couche | Technologie proposée |
|--------|----------------------|
| Framework | **Next.js** (App Router) — recommandé si blog + SEO |
| Langage | TypeScript |
| Styles | Tailwind CSS ou CSS Modules |
| CMS blog | **Sanity** ou **Contentful** (priorité édition non-tech) ; MDX + Git si équipe 100 % dev |
| Formulaire | API Route + Resend / SendGrid |
| Hébergement | Vercel, Netlify ou OVH (selon contraintes RGPD) |
| Domaine | À registrar — redirection www |

### 10.2 Alternatives

| Option | Avantages | Inconvénients |
|--------|-----------|---------------|
| Next.js + headless CMS | SEO, évolutif, écosystème riche | Coût CMS possible |
| Astro + MDX | Performance maximale, simplicité V1 | CMS moins flexible |
| WordPress sur mesure | Édition facile pour non-tech | Perf, maintenance |

### 10.3 Critères de choix stack

- Performance et SEO natifs (articles indexables, SSR/ISR)
- **Publication autonome** des articles sans redéploiement (CMS headless)
- Facilité de mise à jour contenus (blog, réalisations)
- Conformité RGPD hébergement
- Compétences équipe projet

---

## 11. Intégrations

| Service | Usage | Priorité |
|---------|-------|----------|
| **Email transactionnel** | Resend, SendGrid ou SMTP pro | Must |
| **Analytics** | Plausible (privacy-first) ou GA4 | Must |
| **Consentement cookies** | Axeptio, Tarteaucitron ou équivalent | Must |
| **CMS blog** | Sanity / Contentful / MDX | Must |
| **CRM** | HubSpot, Pipedrive, Notion — webhook formulaire | Should |
| **Calendrier** | Cal.com ou Calendly | Could |
| **LinkedIn** | Bouton partage article + page société + UTM analytics | Must |
| **Flux RSS** | Syndication blog (option) | Could |

---

## 12. SEO, GEO et conformité

> Pour une agence dont le site est un **outil d'acquisition**, le référencement n'est pas optionnel. Le trafic attendu provient de trois canaux complémentaires : **recherche Google (SEO)**, **moteurs génératifs / IA (GEO)**, **réseau LinkedIn** (partage des articles). Ces trois leviers sont **primordiaux** et traités dès la phase cadrage contenu.

### 12.1 Stratégie globale SEO + GEO + LinkedIn

| Levier | Objectif | Contenus porteurs |
|--------|----------|-------------------|
| **SEO** | Capter l'intention de recherche (services, stacks, problèmes métier) | Pages services, accueil (sections indexables), blog |
| **GEO** | Être cité / recommandé dans les réponses des IA (ChatGPT, Perplexity, Gemini, Copilot…) | Articles structurés « answer-first », FAQ, entité agence claire |
| **LinkedIn** | Amplifier chaque publication blog auprès des décideurs et profils tech | Bouton partage, visuels OG, calendrier de diffusion |

**Principes transverses :**

- Chaque URL publiée = **une intention** claire + un titre unique + une meta description rédigée à la main.
- Le **blog** est le moteur SEO/GEO long terme ; les pages services captent la conversion ; l'accueil ancre la marque.
- Mesure : **Google Search Console** (obligatoire), analytics (§ 11), suivi manuel des partages LinkedIn.

### 12.2 SEO technique (Must)

#### Balises et structure

- `title` unique par page (50–60 caractères), mot-clé principal en tête si naturel.
- `meta description` unique (140–160 caractères), incitative sans sur-optimisation.
- `link rel="canonical"` sur toutes les pages (éviter doublons www / trailing slash).
- Un seul **H1** par page ; hiérarchie H2 → H3 sans saut.
- HTML sémantique : `<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`.
- Attributs `lang="fr"` (et `hreflang` si version EN).

#### Indexation

- `sitemap.xml` dynamique : accueil, services, blog (articles + catégories), réalisations, contact, légal.
- `robots.txt` : autoriser l'indexation du contenu public ; bloquer `/api`, brouillons, prévisualisations.
- Soumission sitemap dans **Google Search Console** à J+1 du go-live.
- Temps de chargement et Core Web Vitals (§ 8) — facteur SEO indirect.

#### URLs

- Slugs français, lisibles, stables : `/blog/process/notre-checklist-pre-prod`.
- Pas de paramètres d'ID seuls dans les URLs publiques.
- Redirections 301 documentées en cas de changement de slug.

#### Données structurées (Schema.org JSON-LD)

| Type | Page | Champs clés |
|------|------|-------------|
| `Organization` | Accueil / footer | name, url, logo, sameAs (LinkedIn) |
| `ProfessionalService` | Accueil ou services | areaServed, serviceType |
| `BlogPosting` | Article blog | headline, author, datePublished, image, articleSection |
| `BreadcrumbList` | Articles, services | itemListElement |
| `FAQPage` | Pages services (si FAQ) | Question / Answer |

Validation : [Rich Results Test](https://search.google.com/test/rich-results) sans erreur bloquante.

#### Maillage interne

- Chaque article : 2–3 liens vers pages services ou `/#approche` pertinents.
- Pages services : liens vers articles blog de la même thématique.
- Footer : liens vers piliers services + catégories blog.
- Fil d'Ariane visible : Accueil > Blog > [Catégorie] > [Titre].

#### Mots-clés

- Recherche initiale par page (annexe D) : intention informationnelle (blog) vs transactionnelle (services).
- Ciblage longue traîne : stacks (Symfony, Laravel…), types de projet (MVP, refonte, app métier).

### 12.3 GEO — Generative Engine Optimization (Must / Should)

Le **GEO** vise la visibilité dans les moteurs de réponse IA, qui synthétisent des sources web plutôt que d'afficher une liste de liens.

#### Bonnes pratiques éditoriales (blog + pages services)

| Pratique | Détail |
|----------|--------|
| **Answer-first** | Répondre à une question claire dès les 100 premiers mots (titre = question ou promesse explicite). |
| **Key takeaways** | 3–5 bullets en introduction (`keyTakeaways` CMS) — facilite l'extraction par les IA. |
| **Structure prévisible** | H2 = sous-questions ; listes numérotées pour les process ; tableaux pour les comparatifs. |
| **Entités nommées** | Technologies, méthodes, rôles (CTO, PO) — vocabulaire cohérent sur tout le site. |
| **E-E-A-T** | Auteur nommé, rôle, date, mise à jour ; éviter le contenu générique sans expérience terrain. |
| **FAQ intégrées** | Sections FAQ sur services + schema `FAQPage` quand pertinent. |
| **Citations factuelles** | Chiffres sourcés ; limites assumées (renforce la crédibilité pour humains et IA). |

#### Signaux techniques GEO

| Élément | Priorité | Description |
|---------|----------|-------------|
| Contenu en **HTML server-rendered** (SSR/SSG) | Must | Le texte utile est dans le HTML initial, pas chargé uniquement en JS |
| Fichier **`/llms.txt`** | Should | Résumé du site, URLs clés, politique de citation — format émergent pour crawlers IA |
| Page **`/a-propos` ou bloc Organization** riche | Must | Qui sommes-nous, services, zone, stacks — clarté d'entité |
| Pas de `noindex` sur le blog | Must | |
| RSS `/blog/rss.xml` | Could | Facilite la syndication et la découverte |

#### Ce qu'on ne promet pas

- Pas de garantie de citation dans ChatGPT ou Perplexity — le GEO est un travail de probabilité et de qualité, pas un levier payant type Ads.
- Réévaluation trimestrielle des contenus les plus cités / performants.

### 12.4 Partage LinkedIn des articles (Must)

Le blog est conçu pour être **diffusé sur LinkedIn** — canal prioritaire B2B de l'agence.

#### Bouton et comportement

| Exigence | Spécification |
|----------|---------------|
| Emplacement | Visible sur chaque article : sous le titre ou en fin d'article (sticky optionnel desktop) |
| Libellé | « Partager sur LinkedIn » (+ icône LinkedIn) |
| Action | Ouvre `https://www.linkedin.com/sharing/share-offsite/?url={URL_ENCODED}` dans un nouvel onglet |
| URL partagée | URL canonique de l'article (HTTPS, sans fragment) |
| UTM | Ajouter `?utm_source=linkedin&utm_medium=social&utm_campaign=blog` (Should — F39) |
| Copier le lien | Bouton secondaire avec confirmation visuelle |

#### Open Graph (obligatoire pour un rendu LinkedIn correct)

Chaque article doit exposer :

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
```

**Image OG :**

- Dimensions recommandées : **1200 × 627 px** (ratio ~1.91:1).
- Texte lisible sur la vignette (titre court ou catégorie).
- Format JPG ou PNG, < 5 Mo.
- Même visuel utilisable comme `coverImage` blog si cohérent.

#### Twitter Card (fallback)

```html
<meta name="twitter:card" content="summary_large_image" />
```

Certains outils de preview s'en servent ; configuration miroir des champs OG.

#### Workflow publication LinkedIn (process équipe)

1. Publier l'article sur le site (URL finale active).
2. **Tester le rendu** avec [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) (ou équivalent) — cache OG rafraîchi si besoin.
3. Partager via le bouton du site ou rédiger un post LinkedIn manuel :
   - Accroche 1–3 lignes (champ `linkedinTeaser` ou `excerpt`).
   - Lien vers l'article.
   - Hashtags ciblés (3–5 max) : ex. `#Symfony` `#Delivery` `#DevOps` — à définir par ligne éditoriale.
4. Répondre aux commentaires sous 48 h si possible.

#### Pages non-blog

- Pages services : bouton LinkedIn optionnel (partage de la page service).
- Pas de partage requis sur mentions légales.

### 12.5 Outils et suivi (Must)

| Outil | Usage |
|-------|--------|
| **Google Search Console** | Indexation, requêtes, erreurs |
| **Google Analytics / Plausible** | Trafic, conversions, UTM LinkedIn |
| **LinkedIn Post Inspector** | Validation OG avant partage |
| **Rich Results Test** | Validation Schema.org |

**KPIs SEO/GEO/LinkedIn (trimestriel) :**

| KPI | Source |
|-----|--------|
| Pages indexées | Search Console |
| Impressions / clics organiques | Search Console |
| Position moyenne sur 10 requêtes cibles | Search Console |
| Trafic blog organique | Analytics |
| Clics `utm_source=linkedin` | Analytics |
| Nombre de partages LinkedIn / article | Manuel ou social listening |

### 12.6 Checklist SEO avant publication (chaque article)

- [ ] `seoTitle` et `seoDescription` renseignés et uniques
- [ ] `ogImage` 1200×627 uploadée
- [ ] Slug URL définitif validé
- [ ] H1 = titre article ; structure H2 logique
- [ ] `keyTakeaways` ou intro answer-first rédigée
- [ ] 2+ liens internes vers services / accueil
- [ ] Schema `BlogPosting` généré
- [ ] Preview LinkedIn OK (Post Inspector)
- [ ] Bouton partage LinkedIn fonctionnel en staging

### 12.7 RGPD

- Mentions légales (éditeur, hébergeur, contact DPO si applicable)
- Politique de confidentialité
- Bandeau cookies avec consentement préalable pour traceurs non essentiels
- Formulaire : case consentement explicite + lien politique
- Hébergement : priorité UE si clients européens

### 12.8 Propriété intellectuelle

- Code source du site : propriété à définir (client / prestataire)
- Contenus rédactionnels : propriété client
- Polices et assets : licences vérifiées

---

## 13. Planning et jalons

### 13.1 Phases projet

| Phase | Durée estimée | Livrables |
|-------|---------------|-----------|
| **0. Cadrage** | 1 semaine | CdC validé, cartes offre, **recherche mots-clés** annexe D, ligne éditoriale LinkedIn |
| **1. Design** | 2–3 semaines | Wireframe accueil 13 sections, pages service, blog, design system |
| **2. Contenus** | 2 semaines (en parallèle) | Textes accueil + services, 3 articles, témoignages / réalisations |
| **3. Développement** | 3 à 4 semaines | Site staging + CMS blog configuré |
| **4. Recette** | 1 semaine | Corrections, perf/a11y, **recette SEO/GEO/LinkedIn** § 12.6 |
| **5. Mise en production** | — | Go-live, 3 articles live, monitoring, handover CMS |

**Durée totale estimée :** 7 à 9 semaines (selon disponibilité contenus et articles)

### 13.2 Jalons de validation

| Jalon | Critère de passage |
|-------|-------------------|
| J1 — CdC signé | Périmètre et priorités validés |
| J2 — Maquettes validées | Design desktop + mobile approuvé |
| J3 — Contenus gelés | Textes V1 + 3 articles blog prêts |
| J4 — CMS formé | Équipe capable de publier un article seule |
| J5 — Staging validé | Recette fonctionnelle OK (incl. blog) |
| J6 — Go-live | Production + DNS + analytics + articles publiés |

### 13.3 Calendrier éditorial (post go-live)

| Mois | Avis | Tests | Process |
|------|------|-------|---------|
| M+1 | 1 | 1 | — |
| M+2 | — | 1 | 1 |
| M+3 | 1 | — | 1 |

*À adapter — objectif : rotation équilibrée des 3 catégories.*

---

## 14. Budget et ressources

> Section à compléter par le commanditaire.

| Poste | Estimation | Notes |
|-------|------------|-------|
| Cadrage et CdC | | |
| Design UX/UI | | |
| Développement Lot 1 (incl. blog + CMS) | | |
| Rédaction contenus site | | |
| Rédaction blog (lancement + calendrier) | | |
| SEO / GEO (audit, schema, GSC, llms.txt) | | |
| Lot 1.1 (réalisations, CRM) | | |
| Hébergement + domaine (an 1) | | |
| Outils (CMS, email, analytics) | | |
| Maintenance mensuelle (option) | | |
| **Total** | | |

### 14.1 Équipe projet

| Rôle | Responsabilité |
|------|----------------|
| Commanditaire / Product Owner | Validation périmètre, contenus, recette |
| UX/UI Designer | Wireframes, maquettes (incl. templates blog) |
| Développeur front / fullstack | Intégration, CMS, déploiement |
| Rédacteur / auteur blog | Articles, charte éditoriale, calendrier |
| Référent juridique | Mentions légales, RGPD |

---

## 15. Critères d'acceptation

### 15.1 Recette fonctionnelle

- [ ] Accueil : 13 sections § 5.3 présentes, ancres et scroll OK
- [ ] `#offres` : 4 piliers, min. 8 cartes offre avec CTA fonctionnels
- [ ] Formulaire sur `#contact` et `/contact` identiques
- [ ] Blog : liste, 3 catégories, fiches article, filtres
- [ ] CMS : création brouillon, prévisualisation, publication sans dev
- [ ] 3 articles de lancement publiés (1 Avis, 1 Tests, 1 Process)
- [ ] Bloc derniers articles visible sur l'accueil
- [ ] Navigation cohérente desktop et mobile
- [ ] Formulaire contact : envoi email + message de confirmation
- [ ] Anti-spam opérationnel
- [ ] Liens internes et externes vérifiés (pas de 404)
- [ ] Pages légales présentes et à jour

### 15.2 Recette technique

- [ ] Scores Lighthouse Performance ≥ 90
- [ ] Accessibilité WCAG 2.1 AA vérifiée (audit manuel + outil)
- [ ] HTTPS actif, certificat valide
- [ ] `sitemap.xml` inclut les articles blog ; `robots.txt` en place
- [ ] Schema `BlogPosting` + `Organization` valides (Rich Results Test)
- [ ] Google Search Console configurée + sitemap soumis
- [ ] Bouton LinkedIn fonctionnel ; preview OG validée sur 3 articles (Post Inspector)
- [ ] Checklist § 12.6 passée sur les 3 articles de lancement
- [ ] Analytics et bandeau cookies conformes RGPD
- [ ] Test sur Chrome, Firefox, Safari, mobile iOS/Android

### 15.3 Recette éditoriale

- [ ] Aucune promesse trompeuse sur l'IA ou l'agentique
- [ ] Orthographe et cohérence tonale validées
- [ ] CTAs clairs sur chaque page stratégique
- [ ] Les **11 stacks** (§ 5.5) visibles sur `#technologies` avec versions accessibles
- [ ] KPIs `#stats` sourcés ou marqués « indicatif » validés par le client
- [ ] Versions conformes au tableau Supported Technologies (§ 5.5)
- [ ] Libellés corrects : Flutter, Vue.js, C# / .NET, React Native, etc.
- [ ] **Aucune mention** du site de référence § 9.5 sur le site public (URL, nom, crédit)
- [ ] Identité visuelle distincte de la référence (logo, couleurs, typos propres)
- [ ] Articles blog conformes à la charte (catégorie, longueur, ton)
- [ ] Chaque article : cover, extrait, `seoTitle`, `seoDescription`, `ogImage` 1200×627
- [ ] Intro answer-first ou `keyTakeaways` sur les articles de lancement

---

## 16. Risques et mitigations

| Risque | Impact | Probabilité | Mitigation |
|--------|--------|-------------|------------|
| Message trop centré « IA » | Confiance DSI | Moyenne | Valider copy avec persona technique |
| Peu de références au lancement | Crédibilité | Élevée | Études de cas format « type de projet » |
| Blog vide ou abandonné après go-live | SEO, crédibilité | Élevée | 3 articles au lancement + calendrier éditorial |
| OG LinkedIn incorrect (image manquante) | Diffusion blog faible | Moyenne | `ogImage` obligatoire CMS + Post Inspector en recette |
| Contenu non extractible par les IA (GEO) | Visibilité GEO nulle | Moyenne | SSR, structure answer-first, llms.txt |
| Sur-optimisation mots-clés | Pénalité perception / SEO | Faible | Ton naturel, annexe D, relecture |
| Retard livraison contenus | Planning | Élevée | Planning contenus en amont, textes pilote |
| Promesses de délai floues | Insatisfaction | Moyenne | Fourchettes + processus transparent |
| Crainte qualité code « automatisé » | Objections commerciales | Moyenne | Sections `#approche` et `#delivery-moderne` : revue humaine, tests |
| Page d'accueil trop longue (mobile) | UX | Moyenne | Sommaire sticky optionnel, ancres, perf images |
| Dette technique site | Maintenance | Faible | Stack standard, documentation handover |
| Proximité visuelle excessive avec la référence | Image de marque / juridique | Moyenne | Identité propre, audit design, pas de reprise logo/couleurs/textes |

---

## 17. Annexes

### Annexe A — Gabarit étude de cas

```markdown
# [Nom du projet ou « Projet secteur X »]

**Client :** [Nom ou « Confidentiel »]
**Secteur :** [ex. Santé, Industrie, Services]
**Type :** Web / Métier / Mobile / Conseil
**Durée :** [ex. 4 mois]

## Contexte
[2-3 phrases sur la situation initiale]

## Enjeu
[Problème métier à résoudre]

## Solution
[Ce qui a été livré — fonctionnel, pas technique uniquement]

## Résultats
- [Indicateur 1]
- [Indicateur 2]
- [Bénéfice qualitatif]

## Technologies
[Cocher : Symfony, Laravel, PHP, React, Vue.js, Angular, Flutter, React Native, Python, C# / .NET, Paperclip — préciser versions § 5.5]

## Témoignage
> « … » — [Prénom], [Fonction]
```

### Annexe B — FAQ type (par service)

1. **Quels sont vos délais typiques ?**  
   [Fourchette selon complexité — à personnaliser]

2. **Qui possède le code source ?**  
   Le client est propriétaire du code livré, sauf composants open source et licences tierces documentées.

3. **Proposez-vous la maintenance ?**  
   Oui, contrats de maintenance évolutive et corrective — modalités sur devis.

4. **Comment garantissez-vous la qualité ?**  
   Tests automatisés, revue de code, critères d'acceptation définis en amont, livraisons incrémentales.

5. **Travaillez-vous avec nos équipes internes ?**  
   Oui — modèles d'accompagnement, renfort ou delivery complet selon le besoin.

6. **Êtes-vous conformes RGPD ?**  
   Bonnes pratiques par défaut ; audit ou DPO selon criticité du projet.

### Annexe C — Glossaire interne (ne pas publier tel quel)

| Terme interne | Terme client (site) |
|---------------|---------------------|
| Développement agentique | Pratiques de développement modernes |
| Agents IA | Automatisation intelligente (si mentionné) |
| Prompting / orchestration | Industrialisation du delivery |
| LLM | Non exposé |

### Annexe D — Mots-clés SEO (à compléter)

| Page | Mots-clés principaux | Mots-clés secondaires |
|------|----------------------|------------------------|
| Accueil | | |
| Développement web | | |
| Applications métier | | |
| Applications mobiles | | |
| Conseil équipes | | |
| Blog (liste) | | |
| Blog / Avis | | |
| Blog / Tests | | |
| Blog / Process | | |
| Technologies (accueil) | agence Symfony Laravel React Vue Angular | Flutter React Native Python .NET FastAPI |
| Page /technologies | stacks versions Symfony 8 Laravel 13 React 19 | Vue 3 Flutter 3.41 Paperclip |

### Annexe E — Gabarits articles blog

#### Gabarit — Avis

```markdown
---
category: avis
title: [Titre clair, opinion assumée]
excerpt: [150–200 caractères]
---

## Contexte
[Pourquoi ce sujet maintenant — 2–3 phrases]

## Notre position
[Argument structuré en 2–4 points]

## Ce que ça implique pour vous
[Application concrète côté client / équipe]

## En résumé
[3 bullets maximum]
```

#### Gabarit — Tests

```markdown
---
category: tests
title: [Ce qu'on a testé + durée ou périmètre]
excerpt: [150–200 caractères]
---

## Hypothèse
[Ce qu'on voulait vérifier]

## Protocole
[Méthode, durée, contexte — sans jargon]

## Résultats
[Faits, métriques si disponibles, captures]

## Limites
[Ce que le test ne prouve pas — honnêteté = crédibilité]

## Recommandation
[Pour qui / quand appliquer ou non]
```

#### Gabarit — Process

```markdown
---
category: process
title: [Nom du process ou du rituel]
excerpt: [150–200 caractères]
---

## Objectif
[Quel problème ce process résout]

## Quand l'utiliser
[Déclencheurs, prérequis]

## Étapes
1. …
2. …
3. …

## Livrables
[Ce qui doit exister en sortie]

## Erreurs fréquentes
[2–3 pièges à éviter]
```

### Annexe F — Gabarit `llms.txt` (GEO)

Fichier à la racine du domaine : `https://[domaine]/llms.txt`

```text
# Agentic Agency

> Agence de développement web, applications métier et mobiles.
> Stacks : Symfony 8, Laravel 13, PHP 8.5, React 19, Vue.js 3.5+, Angular 20, Flutter 3.41, React Native 0.85, Python 3.14 / FastAPI, .NET 10, Paperclip.

## Pages principales
- Accueil : /
- Services : /services/developpement-web, /services/applications-metier, ...
- Blog : /blog
- Contact : /contact

## Blog (catégories)
- Avis : /blog/avis
- Tests : /blog/tests
- Process : /blog/process

## Contact
- Formulaire : /contact
- LinkedIn : [URL page société]

## Préférence de citation
Citer le titre de l'article et lier vers l'URL canonique.
```

*Format évolutif — adapter selon les bonnes pratiques du secteur.*

### Annexe G — Checklist go-live

- [ ] DNS configuré et propagé
- [ ] Certificat SSL actif
- [ ] Redirections www / non-www
- [ ] Favicon et meta OG
- [ ] Formulaire testé en production
- [ ] Analytics recevant les événements
- [ ] Bandeau cookies fonctionnel
- [ ] Sauvegarde et accès admin documentés
- [ ] Plan de rollback défini
- [ ] 3 articles blog publiés et indexables
- [ ] Formation CMS documentée (PDF ou vidéo courte)
- [ ] Calendrier éditorial M+1 à M+3 validé
- [ ] Google Search Console + sitemap soumis
- [ ] `llms.txt` publié (si retenu)
- [ ] Test partage LinkedIn sur 1 article en production

---

## Validation du document

| Rôle | Nom | Date | Signature |
|------|-----|------|-----------|
| Commanditaire | | | |
| Chef de projet | | | |
| Prestataire | | | |

---

*Document v2.2 — Supported Technologies : 11 stacks (§ 5.5).*
