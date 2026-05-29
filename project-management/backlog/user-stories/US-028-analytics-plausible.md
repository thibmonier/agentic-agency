# US-028 : Analytics Plausible Cloud

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-003
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-003 — Product Owner**, je veux **suivre le trafic du site et les événements clés (formulaires, clics CTA)** afin de **mesurer l'efficacité du site et ajuster la stratégie éditoriale**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN Plausible Cloud est configuré pour le domaine
WHEN je visite une page du site
THEN un pageview est enregistré dans Plausible
AND aucune popup consentement n'est affichée (cookieless)
AND les données apparaissent dans le dashboard Plausible en < 1 min
```

### Scénario alternatif 1 - Événements personnalisés
```gherkin
GIVEN je clique sur un CTA "Réserver un échange"
WHEN l'événement est déclenché
THEN un événement "CTA Clicked" avec props { location: "hero", destination: "#contact" } est enregistré
AND l'événement apparaît dans Plausible sous "Goal Conversions"
```

### Scénario alternatif 2 - UTM tracking
```gherkin
GIVEN je visite le site via un lien LinkedIn avec UTM : ?utm_source=linkedin&utm_medium=social&utm_campaign=blog
WHEN le pageview est enregistré
THEN les paramètres UTM sont capturés dans Plausible
AND je peux filtrer le trafic par source "linkedin" dans le dashboard
```

### Scénario d'erreur 1 - Script Plausible bloqué
```gherkin
GIVEN un utilisateur a un adblocker bloquant Plausible
WHEN il visite le site
THEN aucun pageview n'est enregistré
AND le site fonctionne normalement (pas d'erreur JS)
AND les statistiques sous-estiment légèrement le trafic
```

### Scénario d'erreur 2 - Domaine non configuré
```gherkin
GIVEN le domaine n'est pas configuré dans Plausible
WHEN le script Plausible s'exécute
THEN aucun événement n'est enregistré
AND une erreur apparaît dans les logs Plausible
AND un message d'alerte est envoyé à l'équipe technique
```

## Conversation
- Aligné avec section F10 du PRD
- Service : Plausible Cloud (9€/mois, EU, cookieless)
- Avantage : pas de consentement RGPD requis (pas de cookies)
- Script : <script defer data-domain="agentic-agency.fr" src="https://plausible.io/js/script.js"></script>
- Événements personnalisés à tracker :
  - CTA cliqués (hero, milieu, fin, pages services)
  - Formulaire contact soumis (succès/erreur)
  - Partage LinkedIn (articles blog)
  - Clics articles blog (depuis accueil, liste, articles liés)
  - Téléchargements futurs (plaquette PDF, Lot 2)
- Props événements : location (hero, services, blog, etc.), destination, category, etc.
- UTM tracking automatique (Plausible capture utm_source, utm_medium, utm_campaign)
- Dashboard Plausible : accessible via compte (thibaut.monier@gmail.com ou compte agence)
- Métriques clés :
  - Pageviews, Visitors uniques, Bounce rate
  - Pages populaires, Sources de trafic (UTM)
  - Goals : formulaires soumis, CTA cliqués, partages LinkedIn
- Alternative GA4 rejetée (cookies, RGPD, complexité)
- Configuration : data-domain en variable selon environnement (staging vs prod)

## Dépendances
- US-029 (Bandeau cookies) pour mention Plausible (même si pas obligatoire)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
