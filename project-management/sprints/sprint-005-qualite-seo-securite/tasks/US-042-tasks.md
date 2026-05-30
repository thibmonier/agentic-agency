# Taches - US-042 : Headers securite (CSP, HSTS, etc.)

## Informations US

- **Epic** : EPIC-006
- **Persona** : P-002 - Thomas (DSI/CTO)
- **Story Points** : 2
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** DSI/CTO,
**Je veux** que le site envoie des headers HTTP de securite,
**Afin de** proteger contre les vulnerabilites courantes (XSS, clickjacking).

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-042-01 | [FE-WEB] | Headers securite dans next.config.ts | 1.5h | - | 🔲 |
| T-042-02 | [FE-WEB] | Politique CSP (whitelist Plausible, Turnstile) | 1.5h | T-042-01 | 🔲 |
| T-042-03 | [TEST] | Tests validation headers securite | 1h | T-042-02 | 🔲 |

**Total estime** : 4h

---

## Detail des taches

### T-042-01 : Headers securite dans next.config.ts

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Configurer les headers de securite HTTP dans Next.js.

**Actions** :
- Ajouter section `headers()` dans next.config.ts
- Headers a configurer :
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: geolocation=(), camera=(), microphone=()`

**Fichiers a modifier** :
- `next.config.ts`

**Criteres** :
- [ ] Tous les headers envoyes sur chaque reponse
- [ ] HSTS actif avec max-age 1 an
- [ ] X-Frame-Options bloque les iframes

---

### T-042-02 : Politique CSP

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : T-042-01

**Description** :
Configurer Content-Security-Policy avec whitelist des domaines tiers.

**Actions** :
- CSP baseline restrictive : `default-src 'self'`
- Whitelist script-src : `'self'`, `plausible.io` (analytics)
- Whitelist script-src : `challenges.cloudflare.com` (Turnstile)
- Whitelist connect-src : `plausible.io`
- Whitelist frame-src : `challenges.cloudflare.com` (Turnstile iframe)
- Whitelist style-src : `'self' 'unsafe-inline'` (Tailwind necessaire)
- Whitelist img-src : `'self' data:` (images inline SVG)
- Whitelist font-src : `'self'`
- frame-ancestors : `'none'`
- Tester que le site fonctionne avec CSP actif (pas de breakage)

**Fichiers a modifier** :
- `next.config.ts` (ajout CSP dans headers)

**Criteres** :
- [ ] CSP ne bloque pas Plausible
- [ ] CSP ne bloque pas Turnstile
- [ ] CSP ne bloque pas les styles Tailwind
- [ ] securityheaders.com : score A minimum

---

### T-042-03 : Tests validation headers

- **Type** : [TEST]
- **Estimation** : 1h
- **Depend de** : T-042-02

**Description** :
Verifier que les headers de securite sont bien envoyes.

**Actions** :
- Test E2E ou integration : faire une requete et verifier les headers
- Verifier presence de chaque header attendu
- Verifier que CSP n'est pas trop permissive

**Fichiers a creer** :
- `src/app/__tests__/security-headers.test.ts`

**Criteres** :
- [ ] Chaque header de securite verifie
- [ ] CSP valide
