# Rétrospective — Sprint 001 Walking Skeleton

## Informations

| Attribut | Valeur |
|----------|--------|
| Date | 2026-05-29 |
| Format | Sailboat (Voilier) |
| Sprint Goal | "Accueil skeleton + 1 article blog déployé" |
| Résultat | ⚠️ Partiellement atteint (75% — 15/20 pts) |

## Directive Fondamentale

> "Peu importe ce que nous découvrons, nous comprenons et croyons sincèrement
> que chacun a fait du mieux qu'il pouvait, compte tenu de ce qu'il savait
> à ce moment-là, de ses compétences et capacités, des ressources disponibles,
> et de la situation."
> — Norman Kerth

---

## Rétrospective Sailboat

```
                    🏝️ Sprint 2 : Accueil complet (13 sections)
                         │
    💨 Vent ─────────────┼───────────── ⚓ Ancre
    (Ce qui nous         │              (Ce qui nous
     a poussé)           │               a freiné)
                         │
                    🪨 Récifs
               (Risques à éviter)
```

### 🏝️ ÎLE — Destination Sprint 2

- Accueil complet (13 sections) déployé sur Cloudflare Pages
- CI/CD opérationnel (lint + build + deploy automatique)
- 2-3 articles blog publiés

### 💨 VENT — Ce qui nous a poussé

- **Stack moderne bien choisie** : Next.js 16 + Tailwind 4 + MDX fonctionne bien ensemble
- **Approche Enterprise structurée** : Analyse → PRD → Tech Spec → Dev = zéro improvisation
- **Décision MDX au lieu de SaaS** : simplification massive, 0 dépendance externe pour le blog
- **Documentation exhaustive** : 5 ADR, tech spec 4400 lignes, PRD 1224 lignes — fondations solides
- **Build rapide** : Turbopack ~3s, feedback loop court
- **Composants Radix UI** : Header mobile drawer fonctionnel rapidement

### ⚓ ANCRE — Ce qui nous a freiné

- **Frontmatter MDX non strippé** : Bug découvert en recette — `@next/mdx` import dynamique ne gère pas le frontmatter YAML. Corrigé en switchant vers `next-mdx-remote/rsc`
- **Plugin remark incompatible Turbopack** : `remark-frontmatter` non sérialisable avec Turbopack — bloquant, obligé de changer d'approche
- **npm/nvm lazy loading** : Shell hooks interférent avec `npx create-next-app`, nécessité de charger nvm manuellement
- **Next.js 16 au lieu de 15** : `create-next-app@latest` installe v16, pas v15 prévue dans la tech spec. API compatible, mais documentation à mettre à jour
- **Infra non déployée** : US-039 (Cloudflare) et US-040 (CI/CD) bloquées par absence de repo GitHub — 25% du sprint non livré

### 🪨 RÉCIFS — Risques Sprint 2

- **Scope 13 sections accueil** : 13 sections = volume important. Risque de ne pas tout finir en 1 sprint
- **Contenus placeholder** : Textes et chiffres à valider avec client — risque de blocage rédaction
- **Performance accueil long-scroll** : 13 sections = LCP potentiellement dégradé. Tester Lighthouse tôt
- **Tailwind CSS 4 prose** : Classe `prose` non incluse par défaut dans Tailwind 4 — vérifier @tailwindcss/typography compatibilité

---

## Analyse des Problèmes

### Problème 1 : Frontmatter rendu comme texte

**5 Pourquoi :**
1. Pourquoi le frontmatter s'affiche ? → `@next/mdx` compile le .mdx tel quel
2. Pourquoi tel quel ? → Import dynamique `import(@/content/blog/${slug}.mdx)` traite le YAML comme du texte
3. Pourquoi pas strippé ? → Pas de plugin remark-frontmatter configuré
4. Pourquoi pas configuré ? → Incompatible Turbopack (non sérialisable)
5. **Cause racine** → Mauvais choix d'approche : import dynamique MDX n'est pas adapté quand on a du frontmatter. `next-mdx-remote/rsc` avec `gray-matter` est la bonne solution

**Leçon :** Pour du contenu MDX avec frontmatter, toujours utiliser `next-mdx-remote` côté serveur, pas l'import natif `@next/mdx`.

### Problème 2 : Infra non déployée (25% sprint)

**Cause racine :** Sprint 1 planifié avec US infra (Cloudflare + CI/CD) sans vérifier que les prérequis (repo GitHub, compte Cloudflare) étaient prêts.

**Leçon :** Vérifier les prérequis externes AVANT le sprint planning. Les US avec dépendances externes (comptes, accès) doivent être flaggées.

---

## Actions Sprint 2

### Action 1 : Créer repo GitHub + deploy Cloudflare

| Attribut | Valeur |
|----------|--------|
| Description | Initialiser repo GitHub, push code, configurer Cloudflare Pages, CI/CD GitHub Actions |
| Priorité | **Bloquante** — première chose Sprint 2 |
| DoD | Site accessible sur URL Cloudflare, CI lint+build passe sur chaque push |

### Action 2 : Mettre à jour tech-spec pour Next.js 16

| Attribut | Valeur |
|----------|--------|
| Description | Remplacer références Next.js 15 par 16 dans tech-spec.md. Documenter le switch MDXRemote |
| Priorité | Moyenne |
| DoD | Tech spec reflète stack réelle installée |

### Action 3 : Vérifier @tailwindcss/typography pour prose

| Attribut | Valeur |
|----------|--------|
| Description | Installer et configurer @tailwindcss/typography pour les styles prose dans les articles MDX |
| Priorité | Haute — impact visuel blog |
| DoD | Articles MDX rendus avec styles prose corrects (h2, listes, code blocks, liens) |

### Action 4 : Tester Lighthouse dès Sprint 2

| Attribut | Valeur |
|----------|--------|
| Description | Ajouter test Lighthouse CI dans le pipeline. Seuil ≥80 Sprint 2, ≥90 Sprint 5 |
| Priorité | Moyenne |
| DoD | Score Lighthouse visible dans CI à chaque PR |

---

## Métriques Sprint 1

| Métrique | Valeur |
|----------|--------|
| Points planifiés | 20 |
| Points livrés | 15 |
| Taux complétion | 75% |
| Vélocité | 15 pts |
| Bugs découverts | 1 (frontmatter) |
| Bugs corrigés | 1 (frontmatter → MDXRemote) |
| Fichiers créés | 13 |
| Lignes de code | ~755 |

---

## Ce qu'on emporte

1. **MDX + gray-matter + next-mdx-remote** = combo fiable pour blog statique avec frontmatter
2. **Turbopack** a des limites avec les plugins remark non sérialisables — tester avant de s'engager
3. **Phase d'analyse Enterprise** a payé : stack bien choisie, 0 surprise majeure sur l'architecture
4. **MDX au lieu de SaaS** confirmé bon choix : simple, rapide, budget 108€/an vs 470€/an

---

## Prochaine Étape

Sprint 2 : EPIC-001 (13 sections accueil) + US-039/040 (infra)

```
/workflow:implement 2    — Démarrer Sprint 2
/sprint:dev US-039       — Cloudflare Pages (priorité 1)
```
