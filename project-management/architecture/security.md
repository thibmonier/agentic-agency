# Architecture de Sécurité — Agentic Agency

**Version :** 1.0  
**Date :** 29 mai 2026  
**Statut :** Validé  
**Source :** PRD v1.0 (§9 Sécurité) + CdC v2.2 (§8.3 Sécurité, §12.7 RGPD) + Règles sécurité `.claude/rules/11-security.md`

---

## Table des matières

1. [Modèle de Menaces](#1-modèle-de-menaces)
2. [Headers de Sécurité](#2-headers-de-sécurité)
3. [Formulaire Contact](#3-formulaire-contact)
4. [RGPD & Conformité](#4-rgpd--conformité)
5. [Dépendances](#5-dépendances)
6. [Infrastructure](#6-infrastructure)
7. [Checklist Sécurité Pré-Livraison](#7-checklist-sécurité-pré-livraison)

---

## 1. Modèle de Menaces

### 1.1 Surface d'Attaque

Le site vitrine Agentic Agency présente une **surface d'attaque limitée** :

| Composant | Exposition | Niveau de risque |
|-----------|-----------|------------------|
| **Formulaire contact** | Public, sans authentification | 🟠 Moyen |
| **API Routes Next.js** | Publics (envoi email formulaire) | 🟠 Moyen |
| **Assets statiques** | Public (images, CSS, JS) | 🟢 Faible |
| **CMS headless (Sanity)** | Privé, authentification séparée | 🟢 Faible |
| **Blog (SSG/ISR)** | Public, lecture seule | 🟢 Faible |

**Pas d'espace client, pas de paiement, pas de données sensibles stockées** → risque intrinsèque faible.

### 1.2 Menaces OWASP Pertinentes

| Menace OWASP Top 10 | Pertinence | Impact | Mitigation |
|---------------------|-----------|--------|------------|
| **A01 — Broken Access Control** | 🟢 Faible | Aucun contenu restreint côté public | N/A — site public uniquement |
| **A02 — Cryptographic Failures** | 🟢 Faible | Pas de données sensibles stockées | HTTPS obligatoire (§6.1) |
| **A03 — Injection** | 🟠 Moyen | Formulaire → email, contenu blog | Validation Zod côté serveur (§3.1), pas de SQL direct |
| **A04 — Insecure Design** | 🟢 Faible | Pas de fonctionnalité sensible | Rate limiting formulaire (§3.3) |
| **A05 — Security Misconfiguration** | 🟠 Moyen | Headers, Next.js, Cloudflare | Configuration stricte headers (§2) |
| **A06 — Vulnerable Components** | 🟠 Moyen | Dépendances npm, Next.js | Audit npm, Dependabot, Next.js ≥ 15.5.15 (§5) |
| **A07 — Authentication Failures** | 🟢 Faible | Pas d'authentification publique | N/A — CMS séparé |
| **A08 — Data Integrity Failures** | 🟢 Faible | CI/CD sécurisé | Signature commits, CI trusted |
| **A09 — Logging & Monitoring Failures** | 🟡 Moyen | Analytics, monitoring erreurs | Plausible + Cloudflare logs (§6.3) |
| **A10 — SSRF** | 🟢 Faible | Pas d'URLs utilisateur | N/A — pas de fetch dynamique côté serveur |

---

## 2. Headers de Sécurité

### 2.1 Configuration Complète

Les headers de sécurité sont configurés dans `next.config.ts` ET renforcés via Cloudflare Pages.

#### next.config.ts

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content-Security-Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.sanity.io https://plausible.io", // unsafe-inline pour Next.js dev, à retirer en prod si possible
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self'",
              "connect-src 'self' https://cdn.sanity.io https://plausible.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // X-Content-Type-Options
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // X-Frame-Options
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Strict-Transport-Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Referrer-Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions-Policy
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=()',
          },
          // X-XSS-Protection (legacy, mais encore utile)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },

  // Autres configurations
  images: {
    domains: ['cdn.sanity.io'], // Domaines autorisés pour next/image
    formats: ['image/avif', 'image/webp'],
  },

  // Next.js 15 : force-static pour accueil et services
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
```

### 2.2 Détail des Headers

#### Content-Security-Policy (CSP)

**Objectif :** Prévenir XSS en limitant les sources autorisées.

| Directive | Valeur | Justification |
|-----------|--------|---------------|
| `default-src 'self'` | Origine uniquement | Base restrictive |
| `script-src` | `'self'` + CDN Sanity + Plausible | Scripts nécessaires uniquement |
| `style-src` | `'self'` + Google Fonts | Styles inline Tailwind + fonts externes |
| `font-src` | `'self'` + Google Fonts | Polices next/font |
| `img-src` | `'self' data: https: blob:` | Images Sanity CMS, next/image |
| `connect-src` | `'self'` + Sanity + Plausible | API Sanity, analytics |
| `frame-ancestors 'none'` | Interdit iframe | Protection clickjacking |
| `upgrade-insecure-requests` | Force HTTPS | Toutes ressources en HTTPS |

**Note :** `'unsafe-inline'` pour `script-src` en **dev uniquement**. En production, utiliser des nonces ou hashes si possible (Next.js 15 supporte les nonces).

**Exemple avec nonce (Next.js 15+) :**

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import crypto from 'crypto'

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://cdn.sanity.io;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    ...
  `.replace(/\s+/g, ' ').trim()

  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', cspHeader)
  response.headers.set('x-nonce', nonce)

  return response
}
```

#### X-Content-Type-Options

**Valeur :** `nosniff`

Empêche le navigateur de « deviner » le type MIME → protection contre certains XSS.

#### X-Frame-Options

**Valeur :** `DENY`

Interdit l'affichage du site dans une iframe → protection clickjacking.

**Alternative moderne :** `frame-ancestors 'none'` dans CSP (déjà configuré).

#### Strict-Transport-Security (HSTS)

**Valeur :** `max-age=31536000; includeSubDomains; preload`

Force HTTPS pendant 1 an, y compris sous-domaines. Inscription liste preload (optionnel) : [hstspreload.org](https://hstspreload.org/).

#### Referrer-Policy

**Valeur :** `strict-origin-when-cross-origin`

Envoie l'origine complète aux URLs même origine, uniquement l'origine (sans path) en cross-origin.

#### Permissions-Policy

**Valeur :** `geolocation=(), microphone=(), camera=(), payment=()`

Désactive les APIs navigateur non utilisées.

### 2.3 Validation Headers

**Outil de test :** [securityheaders.com](https://securityheaders.com/)

**Cible :** Score **A** minimum.

---

## 3. Formulaire Contact

### 3.1 Validation (Zod client + serveur)

**Principe :** Validation côté client pour UX, **obligatoire côté serveur** pour sécurité.

#### Schéma Zod

```typescript
// lib/validations/contact.ts
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom contient des caractères invalides'),

  email: z.string()
    .email('Email invalide')
    .max(255, 'Email trop long'),

  company: z.string()
    .min(2, 'Le nom de société doit contenir au moins 2 caractères')
    .max(100, 'Le nom de société ne peut pas dépasser 100 caractères'),

  subject: z.enum([
    'web-site',
    'web-platform',
    'web-refonte',
    'metier-greenfield',
    'metier-evolution',
    'metier-integration',
    'mobile-flutter',
    'mobile-reactnative',
    'mobile-mvp',
    'conseil-audit',
    'conseil-equipe',
    'conseil-formation',
    'autre',
  ], {
    errorMap: () => ({ message: 'Veuillez sélectionner un sujet' })
  }),

  message: z.string()
    .min(50, 'Le message doit contenir au moins 50 caractères')
    .max(2000, 'Le message ne peut pas dépasser 2000 caractères'),

  phone: z.string()
    .regex(/^[0-9+\s()-]{0,20}$/, 'Numéro de téléphone invalide')
    .optional()
    .or(z.literal('')),

  budget: z.enum(['< 25k', '25-50k', '50-100k', '100-200k', '> 200k', 'non-defini'])
    .optional(),

  deadline: z.enum(['urgent', '1-3-mois', '3-6-mois', '> 6-mois', 'non-defini'])
    .optional(),

  source: z.enum(['google', 'linkedin', 'recommandation', 'autre'])
    .optional(),

  consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' })
  }),

  // Honeypot anti-spam (invisible pour humains)
  website: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

#### Validation côté client (React Hook Form)

```tsx
// components/forms/contact-form.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot caché */}
      <input
        type="text"
        {...register('website')}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Champs visibles */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nom <span className="text-error-500">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-error-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* ... autres champs ... */}

      <div>
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-1"
          />
          <span className="text-sm">
            J'accepte que mes données soient utilisées pour traiter ma demande de contact.{' '}
            <a href="/confidentialite" className="text-primary-600 underline">
              Politique de confidentialité
            </a>
            <span className="text-error-500"> *</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-error-500 text-sm mt-1">
            {errors.consent.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </Button>

      {submitStatus === 'success' && (
        <div className="bg-success-50 text-success-700 p-4 rounded-lg">
          <p className="font-medium">Message envoyé avec succès !</p>
          <p className="text-sm mt-1">Nous vous répondrons sous 24-48h ouvrées.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-error-50 text-error-700 p-4 rounded-lg">
          <p className="font-medium">Une erreur est survenue.</p>
          <p className="text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
        </div>
      )}
    </form>
  )
}
```

#### Validation côté serveur (API Route)

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { rateLimit } from '@/lib/rate-limit'
import { sendContactEmail } from '@/lib/email'

// Rate limiter : 10 requêtes par IP par 10 minutes
const limiter = rateLimit({
  interval: 10 * 60 * 1000, // 10 minutes
  uniqueTokenPerInterval: 500, // Max 500 IPs trackées
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown'
    const { success, remaining } = await limiter.check(ip, 10)

    if (!success) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans quelques minutes.' },
        { status: 429 }
      )
    }

    // Parse body
    const body = await request.json()

    // Validation Zod
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    // Honeypot check
    if (data.website && data.website.length > 0) {
      // Bot détecté → fail silencieux (status 200 mais pas d'email)
      console.warn('[Honeypot] Bot détecté:', ip)
      return NextResponse.json({ success: true })
    }

    // Sanitization (contre XSS si affichage dans email HTML)
    const sanitizedData = {
      ...data,
      name: sanitizeHtml(data.name),
      company: sanitizeHtml(data.company),
      message: sanitizeHtml(data.message),
    }

    // Envoi email
    await sendContactEmail(sanitizedData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

// Fonction sanitization basique (ou utiliser library 'sanitize-html')
function sanitizeHtml(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}
```

### 3.2 Anti-spam (honeypot + rate limiting)

#### Honeypot

**Principe :** Champ caché invisible pour humains, rempli uniquement par bots.

```tsx
// Dans ContactForm
<input
  type="text"
  {...register('website')}
  style={{ position: 'absolute', left: '-9999px' }}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>
```

**Vérification côté serveur :** si `website` non vide → rejeter silencieusement (status 200 mais pas d'email).

#### Rate Limiting

**Implémentation :**

```typescript
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache'

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

export function rateLimit(options: Options = {}) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  })

  return {
    check: async (token: string, limit: number) => {
      const tokenCount = (tokenCache.get(token) as number) || 0

      if (tokenCount >= limit) {
        return { success: false, remaining: 0 }
      }

      tokenCache.set(token, tokenCount + 1)
      return { success: true, remaining: limit - (tokenCount + 1) }
    },
  }
}
```

**Seuils recommandés :**

- **10 requêtes** par IP par **10 minutes**
- Cloudflare Rate Limiting en backup (WAF)

### 3.3 Sanitization

**Objectif :** Éviter XSS si données affichées dans email HTML ou réutilisées.

**Stratégie :**

1. **Validation stricte Zod** (types, longueurs, regex)
2. **Échappement HTML** avant insertion dans email HTML (fonction `sanitizeHtml` ci-dessus)
3. **Pas de `eval()` ou `dangerouslySetInnerHTML`** côté front

**Library recommandée :** `sanitize-html` (npm) pour sanitization avancée.

```bash
npm install sanitize-html
npm install -D @types/sanitize-html
```

```typescript
import sanitizeHtml from 'sanitize-html'

const cleanMessage = sanitizeHtml(data.message, {
  allowedTags: [],
  allowedAttributes: {},
})
```

### 3.4 CSRF Protection

**Next.js App Router :** CSRF protection native via **SameSite cookies** et **origin check**.

**Configuration :**

- Cookies `SameSite=Lax` ou `Strict` (défaut Next.js)
- Vérifier `Origin` ou `Referer` header dans API Route si nécessaire

**Exemple :**

```typescript
// app/api/contact/route.ts
export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const allowedOrigins = [process.env.NEXT_PUBLIC_SITE_URL]

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // ... suite
}
```

---

## 4. RGPD & Conformité

### 4.1 Données Collectées

| Donnée | Finalité | Base légale | Durée conservation |
|--------|----------|-------------|-------------------|
| **Formulaire contact** | Réponse à demande de contact | Consentement (checkbox) | 12 mois max |
| **Analytics (Plausible)** | Statistiques anonymes | Intérêt légitime | Agrégées, pas de données perso |
| **Logs serveur (Cloudflare)** | Sécurité, debug | Intérêt légitime | 30 jours |

**Pas de données sensibles (art. 9 RGPD) :** pas de santé, religion, orientation, etc.

### 4.2 Base Légale

| Traitement | Base légale RGPD |
|-----------|------------------|
| Contact client | **Consentement** (art. 6.1.a) — checkbox obligatoire |
| Analytics cookieless | **Intérêt légitime** (art. 6.1.f) — pas de consentement requis si cookieless |
| Logs sécurité | **Intérêt légitime** (art. 6.1.f) — protection des systèmes |

### 4.3 Durée Conservation

**Formulaire contact :**

- Emails conservés **12 mois** max dans boîte métier
- Aucune donnée stockée en base de données publique
- CRM (si webhook) : selon politique CRM (Pipedrive, HubSpot)

**Analytics :**

- Plausible : agrégées, pas de données perso identifiables
- Retention : 24 mois (configurable)

**Logs :**

- Cloudflare : 30 jours
- Next.js logs : rotation automatique

### 4.4 Droits Utilisateurs (RGPD)

Les visiteurs ont droit à :

| Droit | Action |
|-------|--------|
| **Accès** (art. 15) | Demande par email → envoi copie données contact |
| **Rectification** (art. 16) | Correction données erronées |
| **Effacement** (art. 17) | Suppression email + CRM sur demande |
| **Opposition** (art. 21) | Refus analytics (bandeau cookies) |
| **Portabilité** (art. 20) | Export données (email JSON si demande) |

**Formulaire de demande :** page `/confidentialite` avec lien email dédiée (ex: `privacy@agentic-agency.com`).

### 4.5 Politique Cookies

**Site Agentic Agency :** cookies **cookieless analytics recommandé** (Plausible).

#### Cookies déposés

| Cookie | Type | Durée | Consentement |
|--------|------|-------|--------------|
| Plausible (si cookieless) | Analytics | Session | ❌ Non requis (pas de données perso) |
| Tarteaucitron | Consentement | 13 mois | ❌ Essentiel |

#### Bandeau consentement (Tarteaucitron)

```html
<!-- Dans app/layout.tsx -->
<Script
  id="tarteaucitron"
  src="https://cdn.jsdelivr.net/npm/tarteaucitron@latest/tarteaucitron.js"
  strategy="afterInteractive"
/>
<Script id="tarteaucitron-init" strategy="afterInteractive">
  {`
    tarteaucitron.init({
      "privacyUrl": "/confidentialite",
      "hashtag": "#tarteaucitron",
      "cookieName": "tarteaucitron",
      "orientation": "bottom",
      "groupServices": false,
      "showAlertSmall": true,
      "cookieslist": true,
      "closePopup": false,
      "showIcon": true,
      "iconPosition": "BottomRight",
      "adblocker": false,
      "DenyAllCta": true,
      "AcceptAllCta": true,
      "highPrivacy": true,
      "handleBrowserDNTRequest": false,
      "removeCredit": false,
      "moreInfoLink": true,
      "useExternalCss": false,
      "readmoreLink": "/cookies"
    });

    // Si analytics nécessite consentement (GA4)
    // tarteaucitron.user.analyticsUa = 'G-XXXXXXXXXX';
    // (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
  `}
</Script>
```

**Plausible cookieless :** pas besoin de tarteaucitron si aucun cookie déposé.

### 4.6 DPA (Data Processing Agreement)

**Cloudflare Pages :**

- DPA disponible : [cloudflare.com/cloudflare-customer-dpa](https://www.cloudflare.com/cloudflare-customer-dpa/)
- Serveurs UE : configurer région EU (Cloudflare Workers EU)

**Sanity CMS :**

- DPA disponible : [sanity.io/legal/dpa](https://www.sanity.io/legal/dpa)
- Serveurs UE : projet EU region (configurable)

**Resend (email) :**

- DPA disponible : [resend.com/legal/dpa](https://resend.com/legal/dpa)
- Serveurs UE : oui

**Action :** Signer les DPA avant go-live.

---

## 5. Dépendances

### 5.1 Audit npm

**Commande :**

```bash
npm audit
npm audit fix
```

**CI/CD :** intégrer audit dans pipeline GitHub Actions.

```yaml
# .github/workflows/security.yml
name: Security Audit

on: [push, pull_request]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm audit --audit-level=moderate
```

**Seuil bloquant :** vulnérabilités **high** ou **critical**.

### 5.2 Supply Chain Security

**Dependabot (GitHub) :**

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    reviewers:
      - "tech-lead"
    labels:
      - "dependencies"
      - "security"
```

**Package lock :**

- `package-lock.json` commité
- `npm ci` en CI/CD (pas `npm install`)

**Signature commits :**

- GPG signing recommandé
- GitHub vigilant mode activé

### 5.3 Next.js CVE Tracking

**Version minimale obligatoire :** Next.js **≥ 15.5.15**

**CVE patchés :**

- **CVE-2025-55182** (RCE) — Next.js 15.5.15
- **CVE-2026-23869** (DoS) — Next.js 15.5.15

**Vérification :**

```bash
npm list next
# Sortie attendue : next@15.5.15 ou supérieur
```

**Mise à jour :**

```bash
npm update next
npm audit
```

---

## 6. Infrastructure

### 6.1 HTTPS

**Cloudflare Pages :**

- HTTPS automatique (Let's Encrypt)
- Certificat gratuit, renouvellement auto
- Redirection HTTP → HTTPS (configurable)

**Configuration Cloudflare :**

- SSL/TLS : **Full (strict)**
- Always Use HTTPS : **On**
- Automatic HTTPS Rewrites : **On**
- Opportunistic Encryption : **On**
- TLS 1.3 : **Enabled**

### 6.2 DDoS Protection

**Cloudflare :**

- Protection DDoS automatique (gratuit)
- WAF (Web Application Firewall) : règles OWASP
- Rate Limiting : configurable par endpoint

**Configuration WAF :**

```
Règles OWASP :
- SQL Injection : On
- XSS : On
- File Inclusion : On
- Command Injection : On
```

**Rate Limiting API Route `/api/contact` :**

- Limite : 10 req / 10 min / IP
- Action : Block + code 429

### 6.3 Environnements Séparés

| Environnement | URL | Branch | Usage |
|---------------|-----|--------|-------|
| **Production** | `agentic-agency.com` | `main` | Site live |
| **Staging** | `staging.agentic-agency.com` | `staging` | Pré-prod, tests QA |
| **Preview** | `pr-123.agentic-agency.com` | PR branches | Review PRs |

**Variables d'environnement :**

- `.env.local` (dev local, gitignored)
- `.env.production` (Cloudflare Pages, secrets)

**Secrets gérés via Cloudflare Pages Environment Variables :**

- `SANITY_API_TOKEN`
- `RESEND_API_KEY`
- `PLAUSIBLE_API_KEY`

**Pas de secrets dans le code :** audit pre-commit avec `git-secrets` ou `trufflehog`.

---

## 7. Checklist Sécurité Pré-Livraison

### 7.1 Configuration

- [ ] HTTPS actif, certificat valide (test sur ssllabs.com)
- [ ] Redirection HTTP → HTTPS fonctionnelle
- [ ] Headers sécurité configurés (score A sur securityheaders.com)
- [ ] CSP sans erreurs dans console navigateur
- [ ] HSTS header présent (max-age 31536000)
- [ ] next.config.ts headers validés
- [ ] Cloudflare SSL/TLS mode: Full (strict)
- [ ] TLS 1.3 activé

### 7.2 Formulaire

- [ ] Validation Zod côté client + serveur
- [ ] Messages d'erreur explicites mais pas trop verbeux
- [ ] Honeypot invisible implémenté
- [ ] Rate limiting 10 req/10min testé
- [ ] Sanitization HTML avant envoi email
- [ ] CSRF protection vérifiée (origin check)
- [ ] Test soumissions multiples → bloqué après 10
- [ ] Checkbox consentement RGPD obligatoire
- [ ] Lien politique confidentialité présent

### 7.3 Dépendances

- [ ] `npm audit` : 0 vulnérabilité high/critical
- [ ] Next.js ≥ 15.5.15 (vérifier `npm list next`)
- [ ] Dependabot activé
- [ ] `package-lock.json` commité
- [ ] Pas de secrets dans code (audit trufflehog)

### 7.4 RGPD

- [ ] Mentions légales : éditeur, hébergeur, SIRET, directeur publication
- [ ] Politique confidentialité : finalités, droits, durées conservation
- [ ] Page cookies : liste cookies, consentement, désactivation
- [ ] Bandeau Tarteaucitron fonctionnel (si cookies)
- [ ] DPA Cloudflare signé
- [ ] DPA Sanity signé
- [ ] DPA Resend signé
- [ ] Formulaire contact : case consentement + lien politique
- [ ] Email conservation : 12 mois max documenté
- [ ] Droits RGPD : email contact privacy mentionné

### 7.5 Infrastructure

- [ ] Cloudflare DDoS protection activée
- [ ] WAF OWASP rules activées
- [ ] Rate limiting API `/api/contact` configuré
- [ ] Environnements séparés (prod, staging, preview)
- [ ] Variables d'environnement sécurisées (Cloudflare)
- [ ] Logs serveur retention 30 jours max
- [ ] Backup stratégie définie (Sanity, repo Git)

### 7.6 Tests Pénétration (optionnel, recommandé)

- [ ] Scan vulnérabilités automatique (OWASP ZAP, Burp Suite)
- [ ] Test injection SQL (formulaire) → échec attendu
- [ ] Test XSS (formulaire) → échappement HTML OK
- [ ] Test CSRF (sans origin header) → rejeté
- [ ] Test rate limiting (> 10 req) → HTTP 429
- [ ] Test honeypot (remplir champ caché) → fail silencieux

### 7.7 Monitoring

- [ ] Plausible Analytics configuré
- [ ] Cloudflare Analytics activé
- [ ] Alerting erreurs 500 configuré (Sentry ou équivalent, optionnel)
- [ ] Logs Cloudflare accessibles
- [ ] Plan incident response documenté

---

## Références

- **OWASP Top 10 2021 :** [owasp.org/Top10](https://owasp.org/www-project-top-ten/)
- **OWASP Cheat Sheets :** [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/)
- **RGPD :** [cnil.fr](https://www.cnil.fr/)
- **Next.js Security :** [nextjs.org/docs/app/building-your-application/deploying/production-checklist](https://nextjs.org/docs/app/building-your-application/deploying/production-checklist)
- **Cloudflare Security :** [developers.cloudflare.com/security](https://developers.cloudflare.com/security/)
- **WCAG 2.1 AA :** [w3.org/WAI/WCAG21/quickref](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Date de dernière mise à jour :** 29 mai 2026  
**Version :** 1.0
