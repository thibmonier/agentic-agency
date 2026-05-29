# Taches - US-025 : Formulaire contact avec validation

## Informations US
- **Epic** : EPIC-004
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 5
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** remplir un formulaire de contact avec validation claire des champs
**Afin de** etre guidee et eviter les erreurs de saisie

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-025-01 | [OPS] | Installer react-hook-form + zod | 0.5h | - | 🔲 |
| T-025-02 | [FE] | Schema zod validation contact | 1.5h | T-025-01 | 🔲 |
| T-025-03 | [FE] | Composant ContactForm (client) | 4h | T-025-02 | 🔲 |
| T-025-04 | [FE] | Page /contact avec ContactForm | 1h | T-025-03 | 🔲 |
| T-025-05 | [FE] | Pre-remplissage sujet via URL param | 1h | T-025-03 | 🔲 |
| T-025-06 | [TEST] | Tests unitaires ContactForm | 2h | T-025-03 | 🔲 |

**Total estime** : 10h

---

## Detail des taches

### T-025-01 : Installer react-hook-form + zod
- **Type** : [OPS]
- **Estimation** : 0.5h

**Commandes** :
```bash
npm install react-hook-form zod @hookform/resolvers
```

---

### T-025-02 : Schema zod validation contact
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/lib/schemas/contact.ts`

**Schema** :
- nom : string min(2) max(100) required
- email : string email() required
- societe : string min(2) max(100) required
- sujet : enum("developpement-web", "application-metier", "mobile", "conseil", "autre") required
- message : string min(50) max(5000) required
- telephone : string optional
- budget : enum("<25k", "25-50k", "50-100k", "100-200k", ">200k") optional
- delai : enum("<3-mois", "3-6-mois", ">6-mois") optional
- source : enum("google", "linkedin", "recommandation", "autre") optional
- consentement : boolean refine(v => v === true) required
- honeypot : string max(0) (champ cache anti-spam)

**Export** : schema + type inferred ContactFormData

---

### T-025-03 : Composant ContactForm (client)
- **Type** : [FE]
- **Estimation** : 4h

**Fichiers a creer** :
- `src/components/forms/contact-form.tsx` ("use client")

**Specs** :
- react-hook-form avec zodResolver
- Champs obligatoires avec indicateur visuel (*)
- Validation temps reel (onBlur)
- Messages erreur contextuels sous chaque champ
- Focus sur premier champ en erreur
- Etats : idle, submitting, success, error
- Message confirmation apres envoi reussi
- Honeypot field (CSS display:none)
- Checkbox RGPD avec lien /confidentialite
- Sujet select aligne avec cartes offre :
  1. Developpement web
  2. Application metier
  3. Mobile
  4. Conseil
  5. Autre

**Design** :
- Styles Tailwind coherents (navy #1e3a5f, accent #4a7bb7)
- Responsive mobile
- Focus visible (a11y)

---

### T-025-04 : Page /contact avec ContactForm
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/app/contact/page.tsx`

**Specs** :
- Layout pleine page avec ContactForm
- Meta title "Contact | Agentic Agency"
- Bloc alternatives (Calendly, LinkedIn, email)

---

### T-025-05 : Pre-remplissage sujet via URL param
- **Type** : [FE]
- **Estimation** : 1h

**Specs** :
- /contact?sujet=developpement-web pre-selectionne le sujet
- Utiliser useSearchParams() dans composant client

---

### T-025-06 : Tests unitaires ContactForm
- **Type** : [TEST]
- **Estimation** : 2h

**Fichiers a creer** :
- `src/components/forms/__tests__/contact-form.test.tsx`

**Tests** :
- Rendu tous les champs
- Validation champs obligatoires (soumission vide)
- Validation email invalide
- Validation message trop court (< 50 car)
- Soumission reussie (mock fetch)
- Honeypot rempli → pas de soumission
- Pre-remplissage sujet
- Message confirmation affiche apres succes
