# Taches - US-030 : Pages legales (mentions, confidentialite, cookies)

## Informations US
- **Epic** : EPIC-004
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 2
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** acceder aux mentions legales et politiques de confidentialite
**Afin de** connaitre mes droits et les informations legales de l'agence

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-030-01 | [FE] | Page /mentions-legales | 1h | - | 🔲 |
| T-030-02 | [FE] | Page /confidentialite | 1.5h | - | 🔲 |
| T-030-03 | [FE] | Page /cookies | 1h | - | 🔲 |
| T-030-04 | [FE] | Corriger lien footer /cgv → /cookies | 0.5h | T-030-03 | 🔲 |
| T-030-05 | [TEST] | Tests unitaires pages legales | 1h | T-030-01, T-030-02, T-030-03 | 🔲 |

**Total estime** : 5h

---

## Detail des taches

### T-030-01 : Page /mentions-legales
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/app/mentions-legales/page.tsx`

**Contenu** :
- Editeur : Agentic Agency (nom, SIRET, adresse)
- Directeur publication
- Hebergeur : Cloudflare, Inc.
- Contact : contact@agentic-agency.fr

**Criteres** :
- [ ] Page accessible /mentions-legales
- [ ] Lien footer fonctionne
- [ ] Meta title/description uniques
- [ ] Layout coherent avec le reste du site

---

### T-030-02 : Page /confidentialite
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/app/confidentialite/page.tsx`

**Contenu** :
- Responsable traitement
- Finalites (formulaire contact, analytics)
- Donnees collectees
- Base legale
- Durees conservation (12 mois formulaire, 24 mois analytics)
- Droits RGPD (acces, rectification, suppression, opposition, portabilite)
- Contact DPO
- Transferts hors UE

**Criteres** :
- [ ] Page accessible /confidentialite
- [ ] Lien footer fonctionne
- [ ] Referable depuis formulaire contact (checkbox RGPD)

---

### T-030-03 : Page /cookies
- **Type** : [FE]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/app/cookies/page.tsx`

**Contenu** :
- Cookies essentiels
- Cookies optionnels (analytics futurs)
- Comment desactiver
- Durees

---

### T-030-04 : Corriger lien footer /cgv → /cookies
- **Type** : [FE]
- **Estimation** : 0.5h

**Fichiers a modifier** :
- `src/components/layout/footer.tsx` (remplacer /cgv par /cookies, label "Cookies")

---

### T-030-05 : Tests unitaires pages legales
- **Type** : [TEST]
- **Estimation** : 1h

**Fichiers a creer** :
- `src/app/mentions-legales/__tests__/page.test.tsx`
- `src/app/confidentialite/__tests__/page.test.tsx`
- `src/app/cookies/__tests__/page.test.tsx`

**Tests** :
- Rendu sans erreur
- Titre H1 present
- Contenu cle present (SIRET, droits RGPD, etc.)
