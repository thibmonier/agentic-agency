# US-007 : Section contact avec formulaire

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **remplir un formulaire de contact directement sur la page d'accueil** afin de **demander un devis ou un échange sans quitter la page**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section #contact
WHEN la section devient visible
THEN je vois un formulaire avec champs : Nom, Email, Société, Sujet, Message
AND je vois un bloc "Ou directement" avec RDV, LinkedIn, email
AND je vois une mention délai réponse "24-48h ouvrées"
```

### Scénario alternatif 1 - Soumission réussie
```gherkin
GIVEN je remplis tous les champs obligatoires
WHEN je clique sur "Envoyer"
THEN le formulaire est validé côté client et serveur
AND un message de confirmation s'affiche à l'écran
AND un email est envoyé à la boîte métier (< 1 min)
AND le formulaire est réinitialisé
```

### Scénario alternatif 2 - Contact alternatif
```gherkin
GIVEN je préfère ne pas remplir le formulaire
WHEN je consulte le bloc "Ou directement"
THEN je vois un lien RDV (Calendly/Cal.com)
AND je vois un lien LinkedIn de l'agence
AND je vois une adresse email cliquable (mailto:)
```

### Scénario d'erreur 1 - Champs manquants
```gherkin
GIVEN je soumets le formulaire sans remplir les champs obligatoires
WHEN je clique sur "Envoyer"
THEN des messages d'erreur s'affichent sous chaque champ manquant
AND le formulaire n'est pas soumis
AND le focus est mis sur le premier champ en erreur
```

### Scénario d'erreur 2 - Email invalide
```gherkin
GIVEN je saisis un email invalide (ex: "test@")
WHEN je clique sur "Envoyer"
THEN un message d'erreur "Email invalide" s'affiche
AND le formulaire n'est pas soumis
AND le champ email est mis en focus
```

## Conversation
- Aligné avec section S07 du PRD
- Identique à la page /contact (réutilisation du composant)
- Champs obligatoires : Nom, Email, Société, Sujet, Message
- Champs optionnels : Téléphone, Budget, Délai, Source
- Validation côté client + serveur
- Anti-spam géré par US-027
- Envoi email géré par US-026
- RGPD géré par US-029

## Dépendances
- US-025 (Formulaire validation)
- US-026 (Envoi email Resend)
- US-027 (Anti-spam)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
