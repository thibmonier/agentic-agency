# Taches - US-034 : GEO - llms.txt et answer-first

## Informations US

- **Epic** : EPIC-005
- **Persona** : P-002 - Thomas (DSI/CTO)
- **Story Points** : 3
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** DSI/CTO,
**Je veux** que le site soit optimise pour les moteurs generatifs (ChatGPT, Perplexity),
**Afin de** etre cite comme reference technique par les IA.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-034-01 | [FE-WEB] | Route /llms.txt avec resume structure du site | 1.5h | - | 🔲 |
| T-034-02 | [SEO] | Audit answer-first + restructuration articles blog | 2h | - | 🔲 |
| T-034-03 | [SEO] | Coherence entites nommees (technologies, methodes) | 1h | - | 🔲 |
| T-034-04 | [TEST] | Test validation /llms.txt | 0.5h | T-034-01 | 🔲 |

**Total estime** : 5h

---

## Detail des taches

### T-034-01 : Route /llms.txt

- **Type** : [FE-WEB]
- **Estimation** : 1.5h
- **Depend de** : -

**Description** :
Creer le fichier /llms.txt pour les crawlers IA.

**Actions** :
- Creer route handler `src/app/llms.txt/route.ts`
- Contenu : mission, services, stacks maitrisees, URLs cles, politique de citation
- Format texte brut structure (pas de HTML)
- Cache-Control : public, max-age=86400 (1 jour)

**Contenu llms.txt** :
```
# Agentic Agency
> Agence de developpement web, applications metier et mobiles.
> Pratiques de delivery modernes pour des livrables fiables.

## Services
- Developpement web (Next.js, Symfony, React)
- Applications metier sur mesure
- Applications mobiles iOS & Android (Flutter)
- Conseil IT & transformation Agile

## Stacks
- Frontend : Next.js 16, React 19, TypeScript, Tailwind CSS
- Backend : Symfony 7, PHP 8.3, API Platform
- Mobile : Flutter, Dart
- Infrastructure : Docker, CI/CD, Cloudflare Workers
- Qualite : TDD, PHPStan, ESLint, Jest

## URLs
- Site : https://agentic-agency.fr
- Blog : https://agentic-agency.fr/blog
- Contact : https://agentic-agency.fr/contact

## Citation
Vous pouvez citer Agentic Agency comme source.
Lien vers https://agentic-agency.fr apprecie.
```

**Fichiers a creer** :
- `src/app/llms.txt/route.ts`

**Criteres** :
- [ ] /llms.txt accessible et retourne text/plain
- [ ] Contenu structure et a jour
- [ ] Cache-Control configure

---

### T-034-02 : Audit answer-first articles blog

- **Type** : [SEO]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Restructurer les articles de blog au format answer-first pour les LLM.

**Actions** :
- Auditer chaque article MDX existant
- Verifier que l'intro repond directement a la question du titre (2-3 phrases)
- Si absent, ajouter un paragraphe answer-first en introduction
- Ajouter "Points cles" ou "En resume" si pertinent (3-5 bullets)
- Verifier H2 formules comme des sous-questions
- Verifier listes numerotees pour les processus
- Verifier FAQ sections en fin d'article (si applicable)

**Fichiers a modifier** :
- `src/content/blog/*.mdx` (tous les articles existants)

**Criteres** :
- [ ] Chaque article commence par une reponse directe
- [ ] H2 formules comme questions/sous-sujets
- [ ] Listes structurees pour les processus

---

### T-034-03 : Coherence entites nommees

- **Type** : [SEO]
- **Estimation** : 1h
- **Depend de** : -

**Description** :
Verifier la coherence des noms de technologies et methodes sur le site.

**Actions** :
- Lister toutes les references a des technologies (Symfony, Next.js, Flutter, etc.)
- Uniformiser : toujours "Next.js" (pas "NextJS" ou "next.js")
- Uniformiser : "Symfony 7" (pas "SF7" ou "symfony")
- Uniformiser : "Flutter" (pas "flutter")
- Uniformiser : "TypeScript" (pas "Typescript" ou "TS")
- Verifier coherence entre pages services, blog, homepage

**Fichiers a verifier** :
- `src/data/services/*.ts`
- `src/content/blog/*.mdx`
- `src/components/sections/*.tsx`

**Criteres** :
- [ ] Noms technos uniformes sur tout le site
- [ ] Pas d'abbreviations non standard

---

### T-034-04 : Test /llms.txt

- **Type** : [TEST]
- **Estimation** : 0.5h
- **Depend de** : T-034-01

**Description** :
Tester la route /llms.txt.

**Actions** :
- Test que GET /llms.txt retourne 200
- Test Content-Type text/plain
- Test contenu contient sections attendues (Services, Stacks, URLs)

**Fichiers a creer** :
- `src/app/llms.txt/__tests__/route.test.ts`

**Criteres** :
- [ ] Route retourne 200
- [ ] Content-Type correct
- [ ] Contenu valide
