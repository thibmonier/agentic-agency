# Taches - US-008 : Section temoignages clients

## Informations US

- **Epic** : EPIC-001
- **Persona** : P-001 - Claire (Dirigeante PME)
- **Story Points** : 3
- **Sprint** : sprint-005-qualite-seo-securite

## Resume

**En tant que** dirigeante PME,
**Je veux** lire des temoignages de clients satisfaits,
**Afin de** etre rassuree sur la qualite des services et l'experience client.

## Vue d'ensemble des taches

| ID | Type | Tache | Estimation | Depend de | Statut |
|----|------|-------|------------|-----------|--------|
| T-008-01 | [FE-WEB] | Fichier donnees temoignages + types TypeScript | 1h | - | 🔲 |
| T-008-02 | [FE-WEB] | Composant TestimonialsSection (grille + carousel mobile) | 3h | T-008-01 | 🔲 |
| T-008-03 | [FE-WEB] | Integration section dans homepage | 0.5h | T-008-02 | 🔲 |
| T-008-04 | [TEST] | Tests composant temoignages | 1h | T-008-02 | 🔲 |

**Total estime** : 5.5h

---

## Detail des taches

### T-008-01 : Donnees temoignages + types

- **Type** : [FE-WEB]
- **Estimation** : 1h
- **Depend de** : -

**Description** :
Creer le fichier de donnees et les types pour les temoignages.

**Actions** :
- Interface Testimonial : quote, name, role, company (optionnel), service tag
- Creer 3 temoignages placeholder credibles
- Service tags : "Developpement web", "Application metier", "Conseil", "Application mobile"
- Contenu placeholder realiste (pas de lorem ipsum)

**Types** :
```ts
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  service: string;
}
```

**Fichiers a creer** :
- `src/data/testimonials.ts`

**Criteres** :
- [ ] Interface TypeScript definie
- [ ] Minimum 3 temoignages placeholder
- [ ] Contenu credible et realiste

---

### T-008-02 : Composant TestimonialsSection

- **Type** : [FE-WEB]
- **Estimation** : 3h
- **Depend de** : T-008-01

**Description** :
Creer la section temoignages avec grille desktop et carousel mobile.

**Actions** :
- Desktop : grille 3 colonnes (grid cols-1 md:cols-3)
- Mobile : carousel horizontal avec swipe natif (CSS scroll-snap)
- Chaque carte : guillemets, citation, nom, role, tag service
- Style coherent : fond gray-50, cartes blanches avec ombre
- Si < 3 temoignages : section cachee
- Animation Framer Motion subtile (fade-in au scroll)
- Indicateurs de navigation mobile (dots)
- Pas de dependance Swiper.js — CSS scroll-snap natif suffit

**Fichiers a creer** :
- `src/components/sections/testimonials-section.tsx`

**Criteres** :
- [ ] Grille 3 colonnes desktop
- [ ] Carousel swipe mobile (scroll-snap)
- [ ] Indicateurs de pagination mobile
- [ ] Section cachee si < 3 temoignages
- [ ] Animation fade-in au scroll
- [ ] Accessible (aria-label, role="list")

---

### T-008-03 : Integration homepage

- **Type** : [FE-WEB]
- **Estimation** : 0.5h
- **Depend de** : T-008-02

**Description** :
Ajouter la section temoignages dans la homepage.

**Actions** :
- Placer entre la section "Approche" et la section CTA
- Import dynamique si pertinent
- Verifier le rendu responsive

**Fichiers a modifier** :
- `src/app/page.tsx`

**Criteres** :
- [ ] Section visible sur homepage
- [ ] Position coherente dans le flow
- [ ] Responsive OK

---

### T-008-04 : Tests temoignages

- **Type** : [TEST]
- **Estimation** : 1h
- **Depend de** : T-008-02

**Description** :
Tests unitaires du composant temoignages.

**Actions** :
- Test render avec 3 temoignages
- Test section cachee avec < 3 temoignages
- Test contenu affiche (quote, name, role, service)
- Test accessibilite (aria-labels)

**Fichiers a creer** :
- `src/components/sections/__tests__/testimonials-section.test.tsx`

**Criteres** :
- [ ] Tests couvrent rendu normal et cas < 3
- [ ] Contenu verifie
