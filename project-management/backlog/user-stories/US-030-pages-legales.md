# US-030 : Pages légales (mentions, confidentialité, cookies)

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **accéder aux mentions légales et politiques de confidentialité** afin de **connaître mes droits et les informations légales de l'agence**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite le footer du site
WHEN je clique sur "Mentions légales"
THEN je suis redirigé vers /mentions-legales
AND je vois : éditeur (nom société, SIRET), hébergeur, directeur publication, contact
AND la page est accessible et indexable (pas de noindex)
```

### Scénario alternatif 1 - Politique confidentialité
```gherkin
GIVEN je visite /confidentialite
WHEN la page se charge
THEN je vois les finalités de traitement des données (formulaire contact, analytics)
AND je vois mes droits RGPD : accès, rectification, suppression, opposition
AND je vois les durées de conservation (12 mois formulaire, 24 mois analytics)
AND un email de contact pour exercer mes droits est affiché
```

### Scénario alternatif 2 - Politique cookies
```gherkin
GIVEN je visite /cookies
WHEN la page se charge
THEN je vois la liste des cookies utilisés (essentiels + optionnels)
AND je vois comment les désactiver (paramètres navigateur, Tarteaucitron)
AND un lien vers Tarteaucitron (réouvrir bandeau) est présent
```

### Scénario d'erreur 1 - Contenu obsolète
```gherkin
GIVEN les contenus légaux ne sont pas à jour (SIRET manquant, hébergeur incorrect)
WHEN la page se charge
THEN une erreur de conformité légale existe
AND le contenu doit être corrigé avant go-live
```

### Scénario d'erreur 2 - Lien cassé depuis footer
```gherkin
GIVEN un lien footer vers /mentions-legales est cassé
WHEN je clique dessus
THEN une erreur 404 est affichée
AND le lien doit être corrigé immédiatement
```

## Conversation
- Aligné avec section F05 du PRD
- 3 pages obligatoires :

**1. /mentions-legales :**
- Éditeur : Agentic Agency (nom société, SIRET, adresse siège)
- Directeur publication : [Nom dirigeant]
- Hébergeur : Cloudflare Pages, Inc. (adresse USA ou EU selon datacenter)
- Contact : contact@agentic-agency.fr
- CNIL : pas de déclaration obligatoire si pas de données sensibles stockées en base

**2. /confidentialite :**
- Responsable traitement : Agentic Agency
- Finalités : traitement formulaire contact, analytics site (Plausible)
- Données collectées : formulaire (nom, email, société, message), analytics (IP anonymisée, pages visitées)
- Base légale : intérêt légitime (analytics), consentement (formulaire contact)
- Durées conservation : 12 mois (données formulaire), 24 mois (analytics)
- Droits RGPD : accès, rectification, suppression, opposition, portabilité
- Contact DPO/responsable : contact@agentic-agency.fr
- Transferts hors UE : Plausible (UE), Resend (USA avec clauses contractuelles)

**3. /cookies :**
- Liste cookies essentiels : tarteaucitron (choix), __previewmode (Sanity)
- Liste cookies optionnels : futurs analytics/marketing si ajoutés
- Durées : 12 mois (tarteaucitron)
- Désactivation : paramètres navigateur, réouvrir Tarteaucitron
- Lien : réouvrir bandeau Tarteaucitron

**Accessibilité footer :**
- Liens visibles dans footer : Mentions légales, Confidentialité, Cookies
- Lien depuis formulaire (consentement RGPD) : Confidentialité
- Lien depuis bandeau Tarteaucitron : Confidentialité

**Validation juridique :**
- Contenu à valider par client ou conseiller juridique
- Templates disponibles (CNIL, générateurs en ligne) adaptés

## Dépendances
- US-029 (Bandeau cookies) pour liens croisés

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
