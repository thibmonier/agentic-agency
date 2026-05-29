# Taches - US-027 : Anti-spam (honeypot + Turnstile)

## Informations US
- **Epic** : EPIC-004
- **Persona** : P-001 — Dirigeante PME
- **Story Points** : 3
- **Sprint** : sprint-003-contact-legal-services

## Resume de la US
**En tant que** P-001
**Je veux** que le formulaire soit protege contre le spam
**Afin de** ne recevoir que des demandes legitimes

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-027-01 | [OPS] | Creer site Cloudflare Turnstile + keys | 0.5h | - | 🔲 |
| T-027-02 | [FE] | Composant TurnstileWidget (client) | 1.5h | T-027-01 | 🔲 |
| T-027-03 | [FE] | Verification token Turnstile cote serveur | 1.5h | T-027-01, T-026-03 | 🔲 |
| T-027-04 | [FE] | Rate limiting API Route (10 req/min/IP) | 1.5h | T-026-03 | 🔲 |
| T-027-05 | [TEST] | Tests anti-spam (honeypot + Turnstile + rate limit) | 1.5h | T-027-03, T-027-04 | 🔲 |

**Total estime** : 6.5h

---

## Detail des taches

### T-027-01 : Creer site Cloudflare Turnstile + keys
- **Type** : [OPS]
- **Estimation** : 0.5h

**Actions** :
- Dashboard Cloudflare → Turnstile → Add site
- Recuperer TURNSTILE_SITE_KEY (public) et TURNSTILE_SECRET_KEY
- Ajouter dans .env.local et .env.example
- Ajouter dans Cloudflare Workers env vars

---

### T-027-02 : Composant TurnstileWidget (client)
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/components/forms/turnstile-widget.tsx` ("use client")

**Specs** :
- Script Cloudflare Turnstile charge dynamiquement
- Widget invisible (managed mode) ou visible selon config
- Callback onVerify fournit le token au formulaire parent
- Fallback si widget echoue (permettre soumission sans Turnstile)

---

### T-027-03 : Verification token Turnstile cote serveur
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a modifier** :
- `src/app/api/contact/route.ts`

**Specs** :
- POST https://challenges.cloudflare.com/turnstile/v0/siteverify
- Body : secret + response token + remoteip
- Si success=false → rejeter silencieusement
- Si API echoue → fallback : autoriser (eviter faux positifs)

---

### T-027-04 : Rate limiting API Route
- **Type** : [FE]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/lib/rate-limit.ts`

**Specs** :
- In-memory Map (IP → timestamps[])
- 10 requetes max par IP par minute
- Reponse 429 si depasse
- Headers : X-RateLimit-Limit, X-RateLimit-Remaining
- Note : in-memory = reset au redeploy (acceptable pour MVP)

---

### T-027-05 : Tests anti-spam
- **Type** : [TEST]
- **Estimation** : 1.5h

**Fichiers a creer** :
- `src/lib/__tests__/rate-limit.test.ts`
- Mise a jour `src/app/api/contact/__tests__/route.test.ts`

**Tests** :
- Honeypot rempli → rejete
- Turnstile token invalide → rejete (mock API)
- Turnstile API echoue → autorise (fallback)
- Rate limit depasse → 429
- Rate limit non depasse → autorise
