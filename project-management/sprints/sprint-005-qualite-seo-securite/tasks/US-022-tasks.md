# Taches - US-022 : Partage LinkedIn + OG blog

## Informations US

- **Epic** : EPIC-003
- **Persona** : P-005 - Julien (Developpeur Freelance)
- **Story Points** : 3
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** developpeur freelance,
**Je veux** partager facilement les articles sur LinkedIn avec un apercu optimise,
**Afin de** recommander a mon reseau professionnel.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-022-01 | [FE-WEB] | Composant ShareButton (LinkedIn + copier lien) | 2h | - | 🔲 |
| T-022-02 | [FE-WEB] | Integration boutons dans page article blog | 1h | T-022-01 | 🔲 |
| T-022-03 | [FE-WEB] | UTM parameters + tracking Plausible | 1h | T-022-02 | 🔲 |
| T-022-04 | [TEST] | Tests composant ShareButton | 1h | T-022-01 | 🔲 |

**Total estime** : 5h

---

## Detail des taches

### T-022-01 : Composant ShareButton

- **Type** : [FE-WEB]
- **Estimation** : 2h
- **Depend de** : -

**Description** :
Creer un composant de partage reutilisable.

**Actions** :
- Bouton "Partager sur LinkedIn" avec icone LinkedIn SVG
- Action : ouvre popup LinkedIn share (`https://www.linkedin.com/sharing/share-offsite/?url=`)
- Bouton "Copier le lien" avec icone copier
- Action : `navigator.clipboard.writeText()` + toast confirmation
- Toast : "Lien copie !" visible 2s
- Props : url, title (pour le share)
- Client component ("use client")

**Fichiers a creer** :
- `src/components/blog/share-button.tsx`

**Criteres** :
- [ ] Bouton LinkedIn ouvre popup (target="_blank", rel="noopener")
- [ ] Bouton copier fonctionne + toast
- [ ] Accessible (aria-label)
- [ ] Design coherent avec le site

---

### T-022-02 : Integration dans page article

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : T-022-01

**Description** :
Integrer les boutons de partage dans la page article blog.

**Actions** :
- Placer sous le titre de l'article
- Optionnel : repeter en fin d'article
- Passer l'URL canonique + titre de l'article
- Responsive : inline sur desktop, stack sur mobile

**Fichiers a modifier** :
- `src/app/blog/[slug]/page.tsx`

**Criteres** :
- [ ] Boutons visibles sous le titre
- [ ] URL correcte passee au composant
- [ ] Responsive

---

### T-022-03 : UTM parameters + tracking

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : T-022-02

**Description** :
Ajouter les UTM parameters et le tracking analytics.

**Actions** :
- URL partagee inclut : `?utm_source=linkedin&utm_medium=social&utm_campaign=blog`
- Appeler `trackEvent('share', { platform: 'linkedin', article: slug })` au clic
- Appeler `trackEvent('copy_link', { article: slug })` au clic copier

**Fichiers a modifier** :
- `src/components/blog/share-button.tsx` (UTM + tracking)

**Criteres** :
- [ ] UTM parameters dans l'URL partagee
- [ ] Events trackes dans Plausible
- [ ] URL finale correcte et valide

---

### T-022-04 : Tests ShareButton

- **Type** : [TEST]
- **Estimation** : 1h
- **Depend de** : T-022-01

**Description** :
Tests unitaires du composant ShareButton.

**Actions** :
- Test render avec props
- Test clic LinkedIn ouvre fenetre (mock window.open)
- Test clic copier appelle clipboard API
- Test toast apparait apres copie
- Test aria-labels presents

**Fichiers a creer** :
- `src/components/blog/__tests__/share-button.test.tsx`

**Criteres** :
- [ ] Tests couvrent tous les scenarios
- [ ] Mocks corrects (window.open, clipboard)
