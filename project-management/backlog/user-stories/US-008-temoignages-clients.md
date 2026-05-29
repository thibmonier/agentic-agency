# US-008 : Section témoignages clients

## Informations
- **EPIC :** EPIC-001
- **Persona :** P-001
- **Priorité :** Should
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **lire des témoignages de clients satisfaits** afin de **me rassurer sur la qualité du service et l'expérience client**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je scroll vers la section témoignages
WHEN la section devient visible
THEN je vois au moins 3 témoignages clients
AND chaque témoignage contient : citation, prénom + fonction, tag offre
AND les témoignages sont affichés en grille (desktop) ou carousel (mobile)
```

### Scénario alternatif 1 - Desktop grille
```gherkin
GIVEN je visite depuis un desktop
WHEN la section témoignages s'affiche
THEN les 3 témoignages sont affichés en ligne horizontale
AND l'espacement est uniforme
AND chaque témoignage a la même hauteur
```

### Scénario alternatif 2 - Mobile carousel
```gherkin
GIVEN je visite depuis un mobile
WHEN la section témoignages s'affiche
THEN un témoignage est visible à la fois
AND je peux swiper horizontalement pour voir les suivants
AND des indicateurs de navigation (dots) sont visibles
```

### Scénario d'erreur 1 - Moins de 3 témoignages
```gherkin
GIVEN moins de 3 témoignages sont disponibles dans le CMS
WHEN la section témoignages devrait s'afficher
THEN la section est masquée complètement
OR les témoignages disponibles sont centrés avec espacement adapté
```

### Scénario d'erreur 2 - Citation trop longue
```gherkin
GIVEN une citation dépasse 200 caractères
WHEN le témoignage s'affiche
THEN le texte est tronqué après 3 lignes avec "..."
OR un bouton "Lire plus" développe le texte (optionnel)
```

## Conversation
- Aligné avec section S08 du PRD
- Minimum 3 témoignages requis (sinon section masquée)
- Format : citation, prénom + fonction, tag offre (ex: "Application métier")
- Carousel mobile avec swipe natif ou librairie (Swiper.js)
- Témoignages éditables depuis CMS Sanity
- Photos clients optionnelles (avec accord)

## Dépendances
- US-018 (CMS Sanity) pour gestion témoignages

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
