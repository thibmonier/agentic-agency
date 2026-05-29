# US-038 : Setup Next.js 15 + TypeScript + Tailwind

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **un projet Next.js 15+ configuré avec TypeScript strict et Tailwind** afin de **garantir la maintenabilité, la type safety et la productivité du développement**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je clone le dépôt Git
WHEN j'exécute npm install && npm run dev
THEN le serveur Next.js démarre sur http://localhost:3000
AND la page d'accueil placeholder s'affiche sans erreur
AND TypeScript strict mode est activé
AND Tailwind CSS est configuré et fonctionnel
```

### Scénario alternatif 1 - Structure projet
```gherkin
GIVEN le projet est initialisé
WHEN j'inspecte l'arborescence
THEN je vois la structure App Router : app/, components/, lib/, public/
AND je vois les fichiers config : tsconfig.json, tailwind.config.ts, next.config.ts
AND je vois un fichier .env.example avec variables requises
```

### Scénario alternatif 2 - TypeScript strict
```gherkin
GIVEN je crée un composant avec erreur de typage
WHEN je lance npm run build
THEN la build échoue avec erreur TypeScript explicite
AND je dois corriger l'erreur avant de pouvoir build
```

### Scénario d'erreur 1 - Version Next.js < 15.5.15
```gherkin
GIVEN le package.json spécifie Next.js < 15.5.15
WHEN j'exécute npm install
THEN un warning s'affiche "Version Next.js obsolète, CVE critiques"
AND la version doit être upgradée à ≥ 15.5.15
```

### Scénario d'erreur 2 - Tailwind non configuré
```gherkin
GIVEN Tailwind CSS n'est pas configuré correctement
WHEN j'utilise une classe Tailwind (ex: bg-blue-500)
THEN la classe n'est pas appliquée
AND aucun style n'apparaît
AND la configuration tailwind.config.ts doit être corrigée
```

## Conversation
- Aligné avec section § 6 Stack Technique du PRD
- Version Next.js : ≥ 15.5.15 (patches CVE-2025-55182 RCE, CVE-2026-23869 DoS)
- TypeScript : 5.x avec strict mode (noImplicitAny, strictNullChecks)
- Tailwind CSS : 4.x avec purge configuré

**Stack frontend :**
- Next.js 15+ (App Router obligatoire)
- TypeScript 5.x (strict mode)
- Tailwind CSS 4.x
- Radix UI (composants headless accessibles)
- Framer Motion (animations, optionnel)

**Structure projet recommandée :**
```
agentic-agency/
├── app/                      # App Router Next.js 15
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Page accueil
│   ├── services/             # Pages services
│   ├── blog/                 # Pages blog
│   ├── contact/              # Page contact
│   └── api/                  # API Routes (preview, contact)
├── components/               # Composants React réutilisables
│   ├── ui/                   # Composants Radix UI stylisés
│   ├── sections/             # Sections accueil (Hero, Stats, etc.)
│   └── layout/               # Header, Footer, Navigation
├── lib/                      # Utilities, helpers
│   ├── sanity.ts             # Client Sanity
│   ├── utils.ts              # Helpers génériques
│   └── validations/          # Schemas validation zod
├── public/                   # Assets statiques
│   ├── images/               # Images, logos
│   └── og/                   # Images Open Graph
├── styles/                   # Styles globaux
│   └── globals.css           # Tailwind imports
├── .env.example              # Variables env (template)
├── .env.local                # Variables env (local, gitignore)
├── next.config.ts            # Config Next.js
├── tailwind.config.ts        # Config Tailwind
├── tsconfig.json             # Config TypeScript strict
└── package.json              # Dependencies
```

**Configuration TypeScript strict (tsconfig.json) :**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**Configuration Tailwind (tailwind.config.ts) :**
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Couleurs, fonts personnalisées
    },
  },
  plugins: [],
}
export default config
```

**Dependencies principales :**
- next ≥ 15.5.15
- react 19.x
- typescript ~5.x
- tailwindcss 4.x
- @sanity/client, next-sanity
- @radix-ui/* (Dialog, DropdownMenu, etc.)
- zod (validation)
- resend (email)

## Dépendances
- Aucune (US de base infrastructure)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
