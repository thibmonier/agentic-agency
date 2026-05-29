# Taches - US-026 : Envoi email Resend

## Informations US
- **Epic** : EPIC-004
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 3
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** recevoir une confirmation ecran et un email apres soumission du formulaire
**Afin de** savoir que ma demande a bien ete prise en compte

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-026-01 | [OPS] | Installer resend + react-email | 0.5h | - | 🔲 |
| T-026-02 | [OPS] | Config env vars (RESEND_API_KEY, etc.) | 0.5h | T-026-01 | 🔲 |
| T-026-03 | [FE] | API Route /api/contact (POST) | 2h | T-026-01, T-025-02 | 🔲 |
| T-026-04 | [FE] | Template email react-email | 1.5h | T-026-01 | 🔲 |
| T-026-05 | [FE] | Connecter ContactForm → API Route | 1h | T-026-03, T-025-03 | 🔲 |
| T-026-06 | [TEST] | Tests API Route contact | 1.5h | T-026-03 | 🔲 |

**Total estime** : 7h

---

## Detail des taches

### T-026-01 : Installer resend + react-email
- **Type** : [OPS]
- **Estimation** : 0.5h

**Commandes** :
```bash
npm install resend @react-email/components
```

---

### T-026-02 : Config env vars
- **Type** : [OPS]
- **Estimation** : 0.5h

**Fichiers a creer** :
- `.env.example` (template)
- `.env.local` (valeurs reelles, gitignore)

**Variables** :
```env
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL_TO=contact@agentic-agency.fr
CONTACT_EMAIL_FROM=onboarding@resend.dev
```

**Cloudflare** : Ajouter env vars dans dashboard Workers

---

### T-026-03 : API Route /api/contact (POST)
- **Type** : [FE]
- **Estimation** : 2h

**Fichiers a creer** :
- `src/app/api/contact/route.ts`

**Specs** :
- Validation serveur avec zod schema (reutilise de T-025-02)
- Verification honeypot
- Appel Resend API pour envoi email
- Reponse JSON : { success: true } ou { error: "..." }
- Logging erreurs
- Gestion quota Resend depasse (fallback message)

---

### T-026-04 : Template email react-email
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/emails/contact-notification.tsx`

**Specs** :
- Template HTML avec react-email components
- Sujet : "[Contact] {Sujet} - {Nom} {Societe}"
- Corps : tous les champs du formulaire
- Lien "Repondre" vers email du demandeur
- Style professionnel et lisible

---

### T-026-05 : Connecter ContactForm → API Route
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a modifier** :
- `src/components/forms/contact-form.tsx`

**Specs** :
- fetch POST /api/contact avec FormData
- Gestion etats (submitting, success, error)
- Message confirmation apres succes
- Message erreur si API echoue
- Formulaire reinitialise apres succes

---

### T-026-06 : Tests API Route contact
- **Type** : [TEST]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/app/api/contact/__tests__/route.test.ts`

**Tests** :
- POST valide → 200 + email envoye (mock Resend)
- POST invalide (champs manquants) → 400
- POST honeypot rempli → 400 silencieux
- Resend API echoue → 500 avec message
