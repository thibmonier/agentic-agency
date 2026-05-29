# US-029 : Bandeau cookies Tarteaucitron RGPD

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **voir un bandeau cookies conforme RGPD à ma première visite** afin de **donner ou refuser mon consentement de manière éclairée**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite le site pour la première fois (aucun cookie consent)
WHEN la page se charge
THEN un bandeau Tarteaucitron s'affiche en bas de page
AND le bandeau propose 3 actions : "Accepter tout", "Refuser tout", "Personnaliser"
AND un lien vers /confidentialite est visible
AND aucun cookie non essentiel n'est déposé avant mon choix
```

### Scénario alternatif 1 - Accepter tout
```gherkin
GIVEN je clique sur "Accepter tout"
WHEN mon choix est enregistré
THEN le bandeau disparaît
AND un cookie "tarteaucitron" est créé avec consentement=true
AND Plausible commence à tracker (si considéré opt-in, sinon déjà actif)
AND les autres services autorisés sont activés
```

### Scénario alternatif 2 - Refuser tout
```gherkin
GIVEN je clique sur "Refuser tout"
WHEN mon choix est enregistré
THEN le bandeau disparaît
AND un cookie "tarteaucitron" est créé avec consentement=false
AND seuls les cookies essentiels (session Next.js) sont déposés
AND Plausible continue si cookieless (sinon bloqué)
```

### Scénario d'erreur 1 - Cookies déjà déposés avant consentement
```gherkin
GIVEN des cookies non essentiels sont déposés avant mon choix
WHEN je visite le site
THEN une erreur de conformité RGPD est détectée
AND le site doit corriger : bloquer cookies avant consentement
```

### Scénario d'erreur 2 - Bandeau non affiché
```gherkin
GIVEN le script Tarteaucitron ne charge pas (erreur réseau)
WHEN la page se charge
THEN le site fonctionne normalement
AND aucun cookie non essentiel n'est déposé (fallback sécurisé)
AND un log d'erreur est enregistré côté client
```

## Conversation
- Aligné avec section F10 du PRD
- Service : Tarteaucitron.js (open-source, gratuit)
- Alternative Axeptio rejetée (payant)
- Positionnement : bandeau fixe en bas de page (non intrusif)
- 3 actions : Accepter tout, Refuser tout, Personnaliser
- Personnaliser : modal avec liste services (Plausible, futurs services)
- Lien vers politique confidentialité : /confidentialite
- Cookies essentiels (pas de consentement requis) :
  - __previewmode (Sanity preview, session)
  - next-auth.* (si authentification future)
  - tarteaucitron (choix utilisateur)
- Cookies optionnels (consentement requis) :
  - Plausible : cookieless donc pas de consentement requis, mais mentionné par transparence
  - Futurs services analytics/marketing si ajoutés (GA4, Meta Pixel, etc.)
- Configuration Tarteaucitron :
  - Liste services : Plausible (cookieless), futurs services
  - Durée conservation choix : 12 mois
  - Langue : français
  - Position : bottom
  - High privacy mode : true (bloque avant consentement)
- Script Tarteaucitron chargé dans _app.tsx ou layout.tsx
- Test conformité : vérifier qu'aucun cookie non essentiel n'est déposé avant clic

## Dépendances
- US-030 (Pages légales) pour lien politique confidentialité

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
