# US-022 : Bouton partage LinkedIn et Open Graph

## Informations
- **EPIC :** EPIC-003
- **Persona :** P-005
- **Priorité :** Must
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-005 — Développeur Freelance**, je veux **partager facilement un article sur LinkedIn avec une preview optimisée** afin de **recommander l'article à mon réseau professionnel**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je lis un article sur /blog/[slug]
WHEN je clique sur "Partager sur LinkedIn"
THEN une nouvelle fenêtre s'ouvre vers https://www.linkedin.com/sharing/share-offsite/?url={URL_ENCODED}
AND l'URL partagée contient les UTM : ?utm_source=linkedin&utm_medium=social&utm_campaign=blog
AND la preview LinkedIn affiche : titre (seoTitle), description (seoDescription), image OG (1200×627)
```

### Scénario alternatif 1 - Copier le lien
```gherkin
GIVEN je clique sur "Copier le lien" (bouton secondaire)
WHEN le lien est copié dans le presse-papier
THEN une confirmation visuelle "Lien copié !" s'affiche pendant 2s
AND le lien copié contient l'URL complète avec UTM
```

### Scénario alternatif 2 - Preview OG validée
```gherkin
GIVEN je teste la preview avec LinkedIn Post Inspector
WHEN je colle l'URL de l'article
THEN la preview affiche correctement : titre, description, image 1200×627
AND aucune erreur OG n'est remontée
AND l'image OG est chargée en < 3s
```

### Scénario d'erreur 1 - Image OG manquante
```gherkin
GIVEN un article n'a pas d'ogImage renseignée
WHEN je partage sur LinkedIn
THEN la coverImage est utilisée par défaut
OR une image OG générique Agentic Agency est affichée
```

### Scénario d'erreur 2 - UTM cassés
```gherkin
GIVEN les UTM ne sont pas correctement ajoutés à l'URL
WHEN je partage l'article
THEN l'URL partagée fonctionne quand même (sans UTM)
AND un log d'erreur côté serveur est enregistré
```

## Conversation
- Aligné avec section F09 du PRD
- Bouton LinkedIn sous titre article + fin article (sticky optionnel desktop)
- Libellé : "Partager sur LinkedIn" + icône LinkedIn
- Action : ouvre popup LinkedIn partage (target="_blank", rel="noopener")
- URL avec UTM : ?utm_source=linkedin&utm_medium=social&utm_campaign=blog
- Bouton secondaire : "Copier le lien" avec feedback visuel (toast)
- Open Graph obligatoire (cf. PRD F09) :
  - og:type = "article"
  - og:title = seoTitle (ou title si vide)
  - og:description = seoDescription (ou excerpt si vide)
  - og:url = URL canonique HTTPS
  - og:image = ogImage (1200×627, < 5 Mo, JPG/PNG)
  - og:image:width = 1200
  - og:image:height = 627
  - article:published_time = publishedAt ISO 8601
  - article:author = auteur name
  - twitter:card = "summary_large_image"
- Image OG : uploadée par article dans Sanity, dimensions 1200×627 validées, texte lisible sur vignette
- Validation preview : LinkedIn Post Inspector avant go-live (3 articles minimum)
- Analytics tracking UTM dans Plausible

## Dépendances
- US-021 (Page article) pour emplacement bouton
- US-028 (Analytics Plausible) pour tracking UTM

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
