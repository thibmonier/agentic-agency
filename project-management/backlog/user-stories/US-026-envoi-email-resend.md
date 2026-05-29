# US-026 : Envoi email Resend

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **recevoir une confirmation écran et un email après soumission du formulaire** afin de **savoir que ma demande a bien été prise en compte**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je remplis et soumets le formulaire contact
WHEN la soumission est validée
THEN un email est envoyé à la boîte métier (contact@agentic-agency.fr) en < 1 min
AND un message de confirmation s'affiche à l'écran : "Merci ! Nous vous répondons sous 24-48h ouvrées."
AND le formulaire est réinitialisé (tous champs vidés)
AND un email accusé réception est envoyé au demandeur (optionnel)
```

### Scénario alternatif 1 - Email boîte métier
```gherkin
GIVEN l'email est envoyé vers la boîte métier
WHEN l'email arrive
THEN le sujet est "[Contact] [Sujet] - Nom Société"
AND le corps contient tous les champs : Nom, Email, Société, Sujet, Message, Téléphone, Budget, Délai, Source
AND l'email est formaté en HTML lisible
AND un lien "Répondre" ouvre l'email du demandeur
```

### Scénario alternatif 2 - Email accusé réception
```gherkin
GIVEN un accusé réception automatique est configuré (optionnel)
WHEN le formulaire est soumis avec succès
THEN un email est envoyé au demandeur (email saisi)
AND le sujet est "Votre demande a bien été reçue | Agentic Agency"
AND le corps confirme la réception et annonce délai réponse 24-48h
```

### Scénario d'erreur 1 - API Resend échoue
```gherkin
GIVEN l'API Resend retourne une erreur (500, quota dépassé, etc.)
WHEN le formulaire est soumis
THEN un message d'erreur s'affiche : "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement."
AND les données du formulaire restent remplies (pas de réinitialisation)
AND une erreur est loggée côté serveur avec détails
```

### Scénario d'erreur 2 - Quota Resend dépassé
```gherkin
GIVEN le quota gratuit Resend (100 emails/jour) est dépassé
WHEN le formulaire est soumis
THEN un message d'erreur générique s'affiche
AND une alerte est envoyée à l'équipe technique (log, Slack, etc.)
AND le demandeur peut voir les moyens de contact alternatifs (email direct, LinkedIn)
```

## Conversation
- Aligné avec section F04 du PRD
- Service : Resend (gratuit 100 emails/jour, 19$/mois au-delà)
- API Route Next.js : /api/contact (POST)
- Email boîte métier : contact@agentic-agency.fr (à configurer Resend)
- Sujet email : "[Contact] [Sujet sélectionné] - [Nom] [Société]"
- Corps email HTML : template React avec react-email (recommandé Resend)
- Contenu email : tous champs formulaire + timestamp + IP (optionnel pour anti-spam)
- Accusé réception optionnel (Should) : template React distinct
- API key Resend : stockée en env var RESEND_API_KEY
- Rate limiting : géré par US-027
- Validation côté serveur : zod schema avant envoi
- Logging : succès + erreurs dans logs serveur (Vercel/Cloudflare)
- Monitoring : alertes si taux erreur > 10% ou quota proche

## Dépendances
- US-025 (Formulaire validation) pour données

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
