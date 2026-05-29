# US-033 : Google Search Console configuration

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 1
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **que Google Search Console soit configuré dès le go-live** afin de **suivre l'indexation, les erreurs et les performances SEO du site**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN le site est en production sur le domaine final
WHEN je configure GSC
THEN je peux ajouter la propriété "agentic-agency.fr" dans GSC
AND je valide la propriété via méthode DNS (TXT record) ou balise HTML
AND le sitemap /sitemap.xml est soumis dans GSC
AND les premières données apparaissent dans GSC sous 48h
```

### Scénario alternatif 1 - Validation DNS
```gherkin
GIVEN je choisis la méthode de validation DNS
WHEN j'ajoute l'enregistrement TXT fourni par GSC chez Cloudflare
THEN la validation GSC réussit après propagation DNS (< 1h)
AND la propriété devient active dans GSC
```

### Scénario alternatif 2 - Suivi indexation
```gherkin
GIVEN GSC est configuré depuis J+1
WHEN je consulte le rapport "Indexation"
THEN je vois le nombre de pages indexées (cible : 100%)
AND je vois les éventuelles erreurs (404, canoniques, etc.)
AND je peux soumettre des URLs individuelles pour réindexation
```

### Scénario d'erreur 1 - Validation échoue
```gherkin
GIVEN la validation DNS ou HTML échoue
WHEN je tente de valider la propriété GSC
THEN un message d'erreur indique la cause (TXT manquant, balise incorrecte)
AND je dois corriger la configuration et retenter
```

### Scénario d'erreur 2 - Sitemap non détecté
```gherkin
GIVEN le sitemap est soumis mais non détecté par GSC
WHEN je consulte l'état du sitemap
THEN un message "Sitemap introuvable" ou "Erreur XML" apparaît
AND je dois vérifier l'URL /sitemap.xml et corriger les erreurs
```

## Conversation
- Aligné avec section F07 et § 11 Planning du PRD
- Configuration GSC obligatoire J+1 après go-live
- Propriété : agentic-agency.fr (domaine racine)
- Validation : méthode DNS (TXT record) recommandée (plus pérenne que balise HTML)
- Sitemap soumis : https://agentic-agency.fr/sitemap.xml
- Rapports GSC à suivre :
  - Indexation : pages indexées, erreurs, exclusions
  - Performances : requêtes, clics, impressions, position moyenne
  - Expérience : Core Web Vitals, Mobile-friendly
  - Rich Results : status des schemas (Organization, BlogPosting, FAQPage)
  - Erreurs : 404, 500, canoniques, redirections
- Alertes : configurer notifications email pour erreurs critiques (pic 404, chute indexation)
- Utilisateurs : ajouter compte client (thibaut.monier@gmail.com ou email agence)
- Documentation : note pour client avec accès GSC et interprétation rapports
- Délai indexation : premières pages sous 48h, blog complet sous 7 jours
- Actions post-go-live :
  - Soumettre sitemap J+1
  - Vérifier indexation J+7
  - Requêtes "Agentic Agency" J+14

## Dépendances
- US-031 (Sitemap) pour URL à soumettre
- US-041 (Domaine DNS) pour validation

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
