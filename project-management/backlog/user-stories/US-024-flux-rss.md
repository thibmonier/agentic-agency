# US-024 : Flux RSS blog

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-005
- **Priorité :** Could
- **Points :** 1
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-005 — Développeur Freelance**, je veux **m'abonner au flux RSS du blog** afin de **être notifié automatiquement des nouveaux articles sans visiter le site**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /blog/rss.xml
WHEN le flux RSS se charge
THEN je vois un XML valide au format RSS 2.0 ou Atom
AND le flux contient tous les articles publiés (max 50 derniers)
AND chaque item contient : title, link, description (excerpt), pubDate, guid
```

### Scénario alternatif 1 - Lecteur RSS
```gherkin
GIVEN j'utilise Feedly, Inoreader ou NetNewsWire
WHEN j'ajoute l'URL /blog/rss.xml
THEN le flux est détecté et parsé correctement
AND les articles s'affichent avec titre, extrait, date
AND je peux cliquer sur un article pour ouvrir /blog/[slug]
```

### Scénario alternatif 2 - Lien découvrable
```gherkin
GIVEN je visite /blog
WHEN un lecteur RSS automatique (navigateur, extension) cherche le flux
THEN le lien <link rel="alternate" type="application/rss+xml"> est détecté dans le <head>
AND l'icône RSS s'affiche dans le navigateur/extension
```

### Scénario d'erreur 1 - Aucun article publié
```gherkin
GIVEN aucun article n'a status "published"
WHEN je visite /blog/rss.xml
THEN un flux RSS vide valide est retourné
AND le <channel> contient uniquement metadata (title, description, link)
```

### Scénario d'erreur 2 - Validation XML échouée
```gherkin
GIVEN le flux RSS est malformé (XML invalide)
WHEN un lecteur RSS tente de parser
THEN une erreur de parsing est levée
AND le flux doit être corrigé pour respecter la spec RSS 2.0
```

## Conversation
- Aligné avec section Lot 2 du PRD (Could)
- URL : /blog/rss.xml
- Format : RSS 2.0 (plus simple) ou Atom 1.0
- Contenu par item :
  - title : article title
  - link : URL complète HTTPS vers /blog/[slug]
  - description : excerpt (150-200 car.) ou début body
  - pubDate : publishedAt au format RFC 822
  - guid : slug ou URL (isPermaLink=true)
  - category : catégorie article (optionnel)
  - enclosure : coverImage URL (optionnel)
- Limite : 50 derniers articles publiés (ordre chronologique inverse)
- Lien découvrable dans <head> de /blog : <link rel="alternate" type="application/rss+xml" href="/blog/rss.xml" title="Blog Agentic Agency" />
- Génération : route API Next.js ou librairie feed (npm)
- Cache : ISR ou route statique régénérée à chaque build
- Validation : W3C Feed Validator

## Dépendances
- US-019 (Page liste blog) pour lien découvrable

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
