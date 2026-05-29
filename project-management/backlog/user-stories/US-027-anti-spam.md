# US-027 : Anti-spam (honeypot + reCAPTCHA)

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **que le formulaire soit protégé contre le spam** afin de **ne recevoir que des demandes légitimes sans être inondée de spam**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je remplis le formulaire contact de manière normale
WHEN je soumets le formulaire
THEN le honeypot est vide (non rempli par moi)
AND le reCAPTCHA invisible valide automatiquement (score > 0.5)
AND le formulaire est soumis avec succès
```

### Scénario alternatif 1 - Honeypot détecté
```gherkin
GIVEN un bot remplit le champ honeypot caché
WHEN le formulaire est soumis
THEN la soumission est bloquée silencieusement côté serveur
AND aucun email n'est envoyé
AND aucun message d'erreur n'est affiché au bot
AND un log "Spam détecté (honeypot)" est enregistré
```

### Scénario alternatif 2 - reCAPTCHA score faible
```gherkin
GIVEN reCAPTCHA invisible retourne un score < 0.5 (suspect)
WHEN le formulaire est soumis
THEN un challenge reCAPTCHA visible est affiché ("Je ne suis pas un robot")
AND l'utilisateur doit résoudre le challenge
AND la soumission est bloquée jusqu'à validation
```

### Scénario d'erreur 1 - reCAPTCHA API échoue
```gherkin
GIVEN l'API reCAPTCHA est indisponible ou retourne une erreur
WHEN le formulaire est soumis
THEN la soumission est autorisée sans vérification (fallback)
OR un message d'erreur technique s'affiche
AND un log d'erreur est enregistré côté serveur
```

### Scénario d'erreur 2 - Rate limiting dépassé
```gherkin
GIVEN la même IP soumet > 10 formulaires en 1 minute
WHEN le formulaire est soumis à nouveau
THEN la soumission est bloquée avec message "Trop de tentatives. Veuillez réessayer dans quelques minutes."
AND aucun email n'est envoyé
AND un log "Rate limit dépassé" est enregistré
```

## Conversation
- Aligné avec section F04 du PRD
- Protection double : honeypot (simple) + reCAPTCHA invisible (avancé)

**Honeypot :**
- Champ caché avec CSS (display: none) et attribut autocomplete="off"
- Nom non évident (ex: "website", "url", "promo_code")
- Si rempli → soumission bloquée silencieusement côté serveur
- Pas de message d'erreur au bot (éviter détection)

**reCAPTCHA v3 invisible :**
- Google reCAPTCHA v3 (score-based, pas de challenge pour utilisateurs normaux)
- Intégration côté client : script Google + token généré à la soumission
- Validation côté serveur : appel API Google avec secret key
- Seuil : score > 0.5 autorisé, < 0.5 challenge v2 affiché
- Fallback si API échoue : autoriser soumission (éviter faux positifs)

**Rate limiting :**
- 10 soumissions max par IP par minute (ajustable)
- Implémentation : middleware Next.js ou librairie (ex: rate-limiter-flexible)
- Stockage : mémoire (simple) ou Redis (production)
- Réponse : 429 Too Many Requests avec message clair

**Configuration :**
- Clés reCAPTCHA : RECAPTCHA_SITE_KEY (public), RECAPTCHA_SECRET_KEY (env var)
- Honeypot : aucune config, hardcodé dans formulaire
- Rate limiting : seuils en env var ou constantes

**Logging :**
- Spam détecté (honeypot)
- reCAPTCHA score faible
- Rate limit dépassé
- Erreurs API reCAPTCHA

## Dépendances
- US-025 (Formulaire validation)
- US-026 (Envoi email) pour bloquer spam avant envoi

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
