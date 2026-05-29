# US-025 : Formulaire contact avec validation

## Informations
- **EPIC :** EPIC-004
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **remplir un formulaire de contact avec validation claire des champs** afin de **être guidée et éviter les erreurs de saisie**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite la section #contact sur l'accueil OU /contact
WHEN je vois le formulaire
THEN je vois tous les champs : Nom, Email, Société (obligatoires), Sujet (select obligatoire), Message (obligatoire), Téléphone, Budget, Délai, Source (optionnels), Consentement RGPD (checkbox obligatoire)
AND chaque champ obligatoire a un indicateur visuel (*)
AND le champ Sujet propose 5 options alignées avec les cartes offre
```

### Scénario alternatif 1 - Validation en temps réel
```gherkin
GIVEN je remplis le champ Email
WHEN je saisis "test@invalid"
THEN un message "Email invalide" s'affiche en temps réel sous le champ
AND le champ est entouré d'une bordure rouge
AND le bouton "Envoyer" reste cliquable mais la soumission sera bloquée
```

### Scénario alternatif 2 - Sujet pré-rempli depuis URL
```gherkin
GIVEN je visite /contact?sujet=application-metier
WHEN le formulaire se charge
THEN le champ Sujet est pré-sélectionné sur "Application métier — greenfield / évolution / intégration"
AND les autres champs sont vides et prêts à remplir
```

### Scénario d'erreur 1 - Soumission champs manquants
```gherkin
GIVEN je clique sur "Envoyer" sans remplir les champs obligatoires
WHEN le formulaire est soumis
THEN la soumission est bloquée côté client
AND des messages d'erreur s'affichent sous chaque champ manquant
AND le focus est mis sur le premier champ en erreur
AND aucun appel API n'est effectué
```

### Scénario d'erreur 2 - Message trop court
```gherkin
GIVEN je remplis le champ Message avec < 50 caractères
WHEN je clique sur "Envoyer"
THEN un message "Message trop court (min 50 caractères)" s'affiche
AND la soumission est bloquée
```

## Conversation
- Aligné avec section F04 du PRD
- Présent sur 2 pages : section #contact accueil + page /contact (composant réutilisé)
- Champs obligatoires : Nom (text), Email (email validé regex), Société (text), Sujet (select), Message (textarea min 50 car.), Consentement RGPD (checkbox)
- Champs optionnels : Téléphone (tel), Budget (select fourchettes : <25k, 25-50k, 50-100k, 100-200k, >200k), Délai (select : <3 mois, 3-6 mois, >6 mois), Source (select : Google, LinkedIn, Recommandation, Autre)
- Valeurs Sujet (alignées avec cartes offre) :
  1. Développement web — site / plateforme / refonte
  2. Application métier — greenfield / évolution / intégration
  3. Mobile — Flutter / React Native / MVP
  4. Conseil — audit / équipe / formation
  5. Autre
- Validation côté client : HTML5 + JavaScript (React Hook Form recommandé)
- Validation côté serveur : API Route Next.js avec zod
- Messages d'erreur clairs et contextuels
- Consentement RGPD : checkbox avec lien vers /confidentialite
- Pas de stockage base de données (traitement email uniquement)
- Envoi géré par US-026

## Dépendances
- US-030 (Pages légales) pour lien politique confidentialité

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
