# US-021 : Page article avec structure complète

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-002
- **Priorité :** Must
- **Points :** 5
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **lire un article de blog complet avec structure claire et navigation contextuelle** afin de **approfondir un sujet technique et découvrir des articles liés**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /blog/[slug]
WHEN la page se charge
THEN je vois l'en-tête : catégorie (lien), titre H1, date, temps lecture, auteur
AND je vois le corps : rich text avec H2/H3, listes, quotes, code, images
AND je vois un CTA milieu/fin "Un sujet similaire ?" vers /contact
AND je vois 2-3 articles liés (même catégorie)
AND je vois le bouton "Partager sur LinkedIn"
```

### Scénario alternatif 1 - Sommaire auto-généré
```gherkin
GIVEN l'article contient ≥ 3 H2
WHEN la page se charge
THEN un sommaire fixe (sticky desktop) est affiché
AND le sommaire liste tous les H2 avec ancres cliquables
AND le sommaire scroll vers le H2 correspondant
```

### Scénario alternatif 2 - Code syntax highlighting
```gherkin
GIVEN l'article contient des blocs code
WHEN le corps s'affiche
THEN les blocs code ont syntax highlighting (ex: Prism.js)
AND un bouton "Copier" est affiché sur chaque bloc
AND le langage est détecté automatiquement
```

### Scénario d'erreur 1 - Slug invalide
```gherkin
GIVEN je visite /blog/article-inexistant
WHEN la page devrait se charger
THEN une erreur 404 stylisée est affichée
AND un lien "Retour au blog" pointe vers /blog
```

### Scénario d'erreur 2 - Articles liés manquants
```gherkin
GIVEN aucun autre article n'existe dans la même catégorie
WHEN la section "Articles liés" devrait s'afficher
THEN 2-3 articles récents (toutes catégories) sont affichés
OR la section est masquée
```

## Conversation
- Aligné avec section F03.3 du PRD
- URL : /blog/[slug]
- En-tête : catégorie (lien filtré), titre H1, date relative, temps lecture (auto), auteur (nom + rôle + photo optionnelle)
- Corps : Portable Text rendu avec composants React custom (H2/H3, paragraphes, listes, blockquote, code avec Prism.js, images avec next/image, liens externes target="_blank")
- Sommaire auto-généré si ≥ 3 H2 (sticky desktop, collapse mobile)
- CTA milieu (après 50% contenu) + fin : "Un sujet similaire ? Parlons-en" → /contact
- Articles liés : 2-3 articles même catégorie (par date DESC, excluant article actuel)
- Bouton LinkedIn géré par US-022
- Meta : seoTitle (ou title), seoDescription (ou excerpt), canonical
- Schema BlogPosting : headline, author, datePublished, dateModified, image, publisher
- ISR Next.js avec revalidation 1h
- Breadcrumb : Accueil > Blog > [Catégorie] > [Titre]

## Dépendances
- US-018 (CMS Sanity articles)
- US-022 (Bouton LinkedIn)

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
