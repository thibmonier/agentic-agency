# Taches Techniques Transverses — Sprint 003

## T-TECH-01 : Creer .env.example + .gitignore update
- **Type** : [OPS]
- **Estimation** : 0.5h

**Fichiers a creer/modifier** :
- `site/.env.example`
- `site/.gitignore` (verifier .env.local ignore)

**Variables** :
```env
# Resend (email transactionnel)
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL_TO=contact@agentic-agency.fr
CONTACT_EMAIL_FROM=onboarding@resend.dev

# Cloudflare Turnstile (anti-spam)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x0000000000
TURNSTILE_SECRET_KEY=0x0000000000
```

---

## T-TECH-02 : Tests E2E parcours contact (Playwright)
- **Type** : [TEST]
- **Estimation** : 2.5h

**Fichiers a creer** :
- `tests/e2e/contact.spec.ts`

**Scenarios** :
1. Accueil → scroll #contact → formulaire visible
2. Remplir formulaire → soumettre → confirmation
3. Champs invalides → messages erreur
4. /contact → formulaire identique
5. /contact?sujet=developpement-web → sujet pre-rempli
6. Pages legales accessibles depuis footer
7. Page /services/developpement-web → navigation + CTA

---

## T-TECH-03 : MAJ homepage.spec.ts (E2E existant)
- **Type** : [TEST]
- **Estimation** : 0.5h

**Fichiers a modifier** :
- `tests/e2e/homepage.spec.ts`

**Specs** :
- Ajouter test section blog preview visible
- Ajouter test section contact visible (plus placeholder)
- Mettre a jour test ordre des sections (11 → 12)

---

## T-TECH-04 : MAJ IMPLEMENTATION.md
- **Type** : [DOC]
- **Estimation** : 0.5h

**Fichiers a modifier** :
- `site/IMPLEMENTATION.md`

**Contenu** :
- Section Sprint 3 avec US completees
- Nouvelles deps (react-hook-form, zod, resend)
- Fichiers crees
