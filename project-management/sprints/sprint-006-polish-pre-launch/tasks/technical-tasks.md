# Taches Techniques — Sprint 006 (Actions Retro S-005)

---

## T-RETRO-01 : Image OG reelle 1200x627 (2 pts)

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-R01-01 | [FE-WEB] | Generer image OG statique (canvas/SVG) | 2h | - | 🔲 |
| T-R01-02 | [SEO] | Valider preview LinkedIn Post Inspector | 1h | T-R01-01 | 🔲 |

### T-R01-01 : Generer image OG statique

- **Type** : [FE-WEB]
- **Estimation** : 2h

**Description** :
Creer une image OG 1200x627 pour les previews LinkedIn/social.

**Actions** :
- Design : fond navy (#1e3a5f), texte blanc "Agentic Agency", baseline, motif geometrique subtil
- Format : PNG, < 1 MB
- Generer via script Node.js (`@vercel/og` ou canvas) ou outil design
- Sauvegarder dans `public/og/default.png`
- Remplacer le `.gitkeep` existant

**Criteres** :
- [ ] Image 1200x627 PNG
- [ ] Texte lisible en thumbnail
- [ ] < 1 MB
- [ ] Coherent avec charte graphique

### T-R01-02 : Valider preview LinkedIn

- **Type** : [SEO]
- **Estimation** : 1h

**Description** :
Verifier que l'image s'affiche correctement dans LinkedIn Post Inspector.

**Criteres** :
- [ ] LinkedIn Post Inspector : 0 erreurs
- [ ] Image s'affiche sans coupure
- [ ] Titre et description lisibles

---

## T-RETRO-02 : Lighthouse CI mobile (2 pts)

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-R02-01 | [OPS] | Ajouter config mobile dans lighthouserc.json | 1.5h | - | 🔲 |
| T-R02-02 | [TEST] | Valider scores mobile localement | 1.5h | T-R02-01 | 🔲 |

### T-R02-01 : Config mobile Lighthouse CI

- **Type** : [OPS]
- **Estimation** : 1.5h

**Description** :
Ajouter un run Lighthouse mobile dans la CI.

**Actions** :
- Modifier `lighthouserc.json` : ajouter un second collect avec `settings.preset: "perf"` (mobile)
- Seuils mobile : perf >= 85, a11y >= 90, SEO >= 95
- Garder le run desktop existant (seuils inchanges)
- Mettre a jour `.github/workflows/ci.yml` si necessaire

**Criteres** :
- [ ] CI execute desktop + mobile
- [ ] Seuils mobile : perf 85, a11y 90, SEO 95
- [ ] Seuils desktop inchanges (90/90/95)

### T-R02-02 : Valider scores mobile

- **Type** : [TEST]
- **Estimation** : 1.5h

**Description** :
Executer Lighthouse localement en mode mobile et corriger si score < 85.

**Actions** :
- `npx lhci autorun` avec config mobile
- Si perf < 85 : optimiser (lazy load, reduire JS, preconnect)
- Documenter scores obtenus

**Criteres** :
- [ ] Score perf mobile >= 85
- [ ] Score a11y mobile >= 90

---

## T-RETRO-03 : E2E scenarios accessibilite (3 pts)

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-R03-01 | [TEST] | Ecrire scenarios E2E Playwright accessibilite | 3h | - | 🔲 |
| T-R03-02 | [OPS] | Verifier execution dans CI | 1h | T-R03-01 | 🔲 |

### T-R03-01 : Scenarios E2E accessibilite

- **Type** : [TEST]
- **Estimation** : 3h

**Description** :
Ajouter des scenarios Playwright pour valider l'accessibilite.

**Scenarios minimum (>= 5)** :
1. Skip link : Tab → "Aller au contenu principal" visible → Enter → focus sur main
2. Navigation clavier homepage : Tab parcourt tous les liens header sans piege
3. Formulaire contact : Tab through inputs → soumission erreur → messages d'erreur annonces
4. Carousel temoignages mobile : viewport mobile → scroll horizontal fonctionne
5. Bouton partage LinkedIn : clic ouvre popup (mock window.open)
6. Accordion FAQ service : Enter/Space toggle open/close

**Fichiers a creer** :
- `tests/e2e/accessibility.spec.ts`

**Criteres** :
- [ ] >= 5 scenarios
- [ ] Tests passent en CI
- [ ] Pas de piege clavier

### T-R03-02 : Verifier CI

- **Type** : [OPS]
- **Estimation** : 1h

**Description** :
Verifier que les nouveaux E2E passent dans GitHub Actions.

**Criteres** :
- [ ] Job e2e execute les scenarios a11y
- [ ] Pas de timeout

---

## T-RETRO-04 : OG Image API dynamique (3 pts)

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-R04-01 | [FE-WEB] | Route OG Image API (Next.js ImageResponse) | 3h | T-R01-01 | 🔲 |
| T-R04-02 | [FE-WEB] | Integrer dans metadata des pages | 1.5h | T-R04-01 | 🔲 |
| T-R04-03 | [SEO] | Valider rendu + compatibilite Cloudflare | 0.5h | T-R04-02 | 🔲 |

### T-R04-01 : Route OG Image API

- **Type** : [FE-WEB]
- **Estimation** : 3h

**Description** :
Creer une route API qui genere des images OG dynamiquement.

**Actions** :
- Creer `src/app/api/og/route.tsx` avec `ImageResponse` de `next/og`
- Parametres query : `?title=X&subtitle=Y&type=service|article|default`
- Design : fond navy, titre blanc, baseline, badge type
- Dimensions : 1200x627
- Verifier compatibilite edge runtime (Cloudflare Workers)

**Fallback** : Si incompatible Cloudflare Workers, garder images statiques (T-R01-01).

**Fichiers a creer** :
- `src/app/api/og/route.tsx`

**Criteres** :
- [ ] Genere image 1200x627 PNG
- [ ] Parametres dynamiques (titre, type)
- [ ] Compatible edge runtime

### T-R04-02 : Integrer dans metadata

- **Type** : [FE-WEB]
- **Estimation** : 1.5h

**Description** :
Remplacer l'image OG statique par l'URL dynamique dans les metadata.

**Actions** :
- Services : `/api/og?title=${data.title}&type=service`
- Blog : `/api/og?title=${post.title}&type=article`
- Default : `/api/og?type=default`
- Garder fallback statique si API echoue

**Fichiers a modifier** :
- `src/app/layout.tsx` (default)
- `src/app/services/*/page.tsx` (4 pages)
- `src/app/blog/[slug]/page.tsx`

**Criteres** :
- [ ] OG image URL dynamique
- [ ] Fallback statique

### T-R04-03 : Valider rendu

- **Type** : [SEO]
- **Estimation** : 0.5h

**Description** :
Tester le rendu OG dynamique et la compatibilite Cloudflare.

**Criteres** :
- [ ] Image generee correctement
- [ ] Compatible Cloudflare Workers
- [ ] LinkedIn Post Inspector OK

---

## Resume

| Item | Taches | Heures |
|------|--------|--------|
| T-RETRO-01 Image OG | 2 | 3h |
| T-RETRO-02 LH mobile | 2 | 3h |
| T-RETRO-03 E2E a11y | 2 | 4h |
| T-RETRO-04 OG API | 3 | 5h |
| **Total** | **9** | **15h** |
