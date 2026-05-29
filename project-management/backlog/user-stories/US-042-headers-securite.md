# US-042 : Headers sécurité (CSP, HSTS, etc.)

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **que le site envoie des headers de sécurité HTTP** afin de **protéger contre les vulnérabilités courantes (XSS, clickjacking, CSRF)**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite n'importe quelle page du site
WHEN j'inspecte les headers HTTP de réponse
THEN je vois les headers sécurité : Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security, Referrer-Policy, Permissions-Policy
AND le site obtient un score A sur securityheaders.com
```

### Scénario alternatif 1 - CSP bloque scripts inline
```gherkin
GIVEN un attaquant tente d'injecter un <script> inline malveillant
WHEN le navigateur charge la page
THEN le script est bloqué par Content-Security-Policy
AND une erreur CSP apparaît dans la console navigateur
AND aucun code malveillant ne s'exécute
```

### Scénario alternatif 2 - X-Frame-Options bloque iframe
```gherkin
GIVEN un attaquant tente d'intégrer le site dans une iframe malveillante
WHEN le navigateur charge l'iframe
THEN X-Frame-Options: DENY bloque l'affichage
AND une erreur "Refused to display in a frame" apparaît
```

### Scénario d'erreur 1 - CSP trop restrictif
```gherkin
GIVEN CSP bloque les scripts légitimes (Plausible, Tarteaucitron)
WHEN la page se charge
THEN des erreurs CSP apparaissent dans la console
AND les services légitimes ne fonctionnent pas
AND la CSP doit être assouplie (whitelist domaines autorisés)
```

### Scénario d'erreur 2 - Headers manquants
```gherkin
GIVEN je teste le site sur securityheaders.com
WHEN le scan s'exécute
THEN un score < A est retourné avec warnings headers manquants
AND les headers manquants doivent être ajoutés dans next.config.ts
```

## Conversation
- Aligné avec section NF03 Sécurité du PRD
- Configuration dans next.config.ts (Next.js 15 Headers)

**Headers sécurité obligatoires :**

```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=()',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' plausible.io tarteaucitron.io google.com gstatic.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https: cdn.sanity.io;
              font-src 'self' data:;
              connect-src 'self' plausible.io *.sanity.io;
              frame-ancestors 'none';
            `.replace(/\\n/g, ' ').trim(),
          },
        ],
      },
    ]
  },
}
```

**Détail headers :**

1. **Content-Security-Policy (CSP)** :
   - Protection XSS
   - Whitelist domaines autorisés : Plausible, Sanity, Tarteaucitron, reCAPTCHA
   - `unsafe-inline` pour Tailwind (styles inline), à retirer si possible
   - `unsafe-eval` pour reCAPTCHA

2. **X-Content-Type-Options: nosniff** :
   - Empêche MIME type sniffing

3. **X-Frame-Options: DENY** :
   - Protection clickjacking (empêche iframe)

4. **X-XSS-Protection: 1; mode=block** :
   - Protection XSS navigateurs anciens

5. **Strict-Transport-Security (HSTS)** :
   - Force HTTPS pendant 1 an
   - includeSubDomains : sous-domaines également

6. **Referrer-Policy: strict-origin-when-cross-origin** :
   - Contrôle infos envoyées via Referer header

7. **Permissions-Policy** :
   - Désactive APIs non utilisées (geolocation, camera, etc.)

**Validation :**
- securityheaders.com : score A (idéal A+)
- Mozilla Observatory : score A
- CSP Evaluator : 0 warning critique

**Monitoring :**
- CSP violations : loggées côté serveur (optionnel)
- Alertes si pic violations CSP (attaque potentielle)

## Dépendances
- US-038 (Setup Next.js) pour next.config.ts
- US-041 (HTTPS) pour HSTS

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
