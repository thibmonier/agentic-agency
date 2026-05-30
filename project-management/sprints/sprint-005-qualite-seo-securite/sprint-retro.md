# Retrospective — Sprint 005

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-30 |
| Format | 4L (Liked, Learned, Lacked, Longed for) |
| Sprint | 005 - Qualite + SEO avance + Securite |
| Velocite | 26 pts (100%) |

## Directive Fondamentale

> "Peu importe ce que nous decouvrons, nous comprenons et croyons sincerement
> que chacun a fait du mieux qu'il pouvait, compte tenu de ce qu'il savait
> a ce moment-la, de ses competences et capacites, des ressources disponibles,
> et de la situation."

---

## 4L

### ❤️ LIKED (Ce que j'ai aime)

- **3 agents paralleles sans conflits** — le decoupage par ownership de fichiers (Infra / SEO+A11y / Contenu) a evite tout conflit de merge malgre 50 fichiers modifies simultanement
- **Composant JsonLd reutilisable** — un seul composant generique pour Organization, BlogPosting, BreadcrumbList. Pattern propre et extensible (OCP)
- **CSS scroll-snap natif pour le carousel** — zero dependance Swiper.js, accessible au clavier, performant. Le browser gere le snapping nativement
- **jest-axe pour l'accessibilite** — detecte les violations WCAG automatiquement, integre sans friction dans les tests existants. 0 violations critiques
- **5 sprints a 100%** — 119 points livres sur 119 planifies, stabilite remarquable

### 📚 LEARNED (Ce que j'ai appris)

- **Response mock incomplet** — Agent 3 a ajoute un mock global Response dans jest.setup.ts pour les route handlers, mais a oublie la methode instance `json()`. Resultat : 8 tests pre-existants casses (contact API). Fix rapide (4 lignes) mais aurait du etre detecte par l'agent
- **#4a7bb7 ratio contraste 3.16:1** — la couleur accent echoue WCAG AA pour texte normal (minimum 4.5:1). Acceptable pour focus rings et decoratif (3:1 suffisant pour UI components), mais attention a ne jamais l'utiliser pour du texte de lecture
- **CSP 'unsafe-inline' necessaire** — Tailwind CSS injecte des styles inline, ce qui rend impossible une CSP sans 'unsafe-inline' pour style-src. Trade-off acceptable, mais a surveiller si on migre vers CSS modules
- **Next.js metadataBase** — indispensable pour que les URLs relatives OG soient resolues en URLs absolues. Sans ca, les previews LinkedIn ne fonctionnent pas
- **llms.txt format emergent** — pas encore de standard officiel, mais adopte par plusieurs sites tech. Investissement minimal (1 route handler) pour un potentiel GEO significatif

### ❌ LACKED (Ce qui a manque)

- **Image OG reelle** — le placeholder `.gitkeep` ne genere pas de previews LinkedIn fonctionnelles. Une vraie image 1200x627 est necessaire avant le launch
- **Validation navigateur** — skip link, focus styles, carousel mobile, boutons partage n'ont pas ete testes dans un navigateur reel. Les tests unitaires valident la structure, pas l'experience utilisateur
- **Contraste audit complet** — on a verifie #4a7bb7 mais pas audite systematiquement toutes les combinaisons couleur/fond du site. Un outil comme axe DevTools en browser serait plus exhaustif
- **E2E scenarios** — le job CI Playwright est configure mais les scenarios E2E specifiques a S-005 (skip link, share button, carousel) n'existent pas encore

### 🌟 LONGED FOR (Ce que j'aurais aime avoir)

- **Vraie image OG generee dynamiquement** — Next.js OG Image API (`ImageResponse`) pour generer des previews par page sans designer chaque image manuellement
- **Lighthouse CI sur mobile** — les seuils actuels sont pour desktop seulement. Le score mobile est generalement 10-20 points plus bas
- **Audit accessibilite avec lecteur d'ecran** — axe-core detecte les violations techniques mais pas les problemes d'experience reelle (VoiceOver, NVDA)
- **Schema.org validation automatique** — un test E2E qui valide les schemas JSON-LD contre Google Rich Results Test API

---

## Suivi Actions Sprints Precedents

| Sprint | Action | Status |
|--------|--------|--------|
| S-004 | E2E Playwright dans CI | ✅ Fait — job e2e dans GitHub Actions |
| S-004 | Lighthouse score bloquant | ✅ Fait — lighthouserc.json, seuils error |
| S-004 | Preview deployments | ⏳ Reporte v1.0.0 |
| S-003 | Pre-commit hook Prettier | ✅ Fait (S-004) |
| S-003 | Script build check local | ✅ Fait (S-004) |
| S-003 | Convention lazy-init | ✅ Respectee |
| S-002 | Branch protection rules | ✅ Fait |

---

## Actions Sprint 006 (ou pre-launch)

### Action 1 : Designer image OG reelle

| Attribut | Valeur |
|----------|--------|
| Description | Creer une image OG 1200x627 avec logo, baseline et couleurs Agentic Agency. Remplacer public/og/.gitkeep par le fichier PNG reel |
| Deadline | Avant launch v1.0.0 |
| DoD | Image presente, LinkedIn Post Inspector valide l'apercu |
| Priorite | Haute |

### Action 2 : Lighthouse CI mobile

| Attribut | Valeur |
|----------|--------|
| Description | Ajouter un run Lighthouse mobile dans lighthouserc.json (settings preset "perf" au lieu de "desktop"). Seuils mobile : perf >= 85, a11y >= 90 |
| Deadline | Sprint 006 |
| DoD | CI execute desktop + mobile, seuils respectes |
| Priorite | Moyenne |

### Action 3 : Scenarios E2E accessibilite

| Attribut | Valeur |
|----------|--------|
| Description | Ajouter des scenarios Playwright pour : skip link navigation, carousel temoignages swipe, bouton partage LinkedIn, navigation clavier complete |
| Deadline | Sprint 006 |
| DoD | `npm run test:e2e` execute >= 5 scenarios a11y |
| Priorite | Moyenne |

---

## Metriques Cles

| Metrique | S-001 | S-002 | S-003 | S-004 | S-005 | Tendance |
|----------|-------|-------|-------|-------|-------|----------|
| Velocite | 15 | 26 | 26 | 26 | 26 | → stable |
| Taux completion | 100% | 100% | 100% | 100% | 100% | → stable |
| Tests | 34 | 34 | 100 | 130 | 170 | ↗ +31% |
| CI runs/PR | 1 | 3 | 4 | 1 | TBD | - |
| Nouvelles routes | 3 | 0 | 7 | 9 | 1 | ↘ (mature) |
| EPICs completes | 0 | 0 | 0 | 2 | 2 | → |

---

## Ce que j'emporte

- Le decoupage par ownership de fichiers est la cle pour paralleliser sans conflits — mieux que des worktrees pour ce type de sprint
- Les tests d'accessibilite automatises (jest-axe) sont un investissement minimal pour un retour enorme : ils empechent les regressions a11y de passer inapercues
- Le site approche la maturite v1.0.0 : 119 points livres, 22 routes, 170 tests, 5 sprints parfaits
- Les US restantes (~10 pts) dependent de facteurs externes (contenu client, domaine, CMS) — le code est pret
- La prochaine etape critique n'est pas technique : c'est le contenu (vrais temoignages, vraie image OG, vrai domaine)
