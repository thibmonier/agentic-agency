# US-034 : GEO - llms.txt et answer-first

## Informations
- **EPIC :** EPIC-005
- **Persona :** P-002
- **Priorité :** Should
- **Points :** 3
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-002 — DSI/CTO**, je veux **que le site soit optimisé pour les moteurs génératifs (ChatGPT, Perplexity)** afin de **être cité comme référence technique par les IA**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN je visite /llms.txt
WHEN le fichier se charge
THEN je vois un résumé structuré du site (mission, services, stacks)
AND je vois les URLs clés (accueil, services, blog)
AND je vois la politique de citation (attribution recommandée)
AND le format suit la spec émergente llms.txt
```

### Scénario alternatif 1 - Articles answer-first
```gherkin
GIVEN je lis un article blog
WHEN l'article se charge
THEN l'intro commence par une réponse directe (answer-first)
OR un bloc "Key Takeaways" liste 3-5 bullets en début d'article
AND le développement suit après la réponse courte
```

### Scénario alternatif 2 - FAQ structurées
```gherkin
GIVEN je visite une page service
WHEN la section FAQ se charge
THEN les questions sont structurées en H3 (sous-questions)
AND chaque réponse est concise (2-3 paragraphes max)
AND le schema FAQPage est présent pour crawlers IA
```

### Scénario d'erreur 1 - llms.txt introuvable
```gherkin
GIVEN un moteur génératif cherche /llms.txt
WHEN le fichier n'existe pas
THEN une erreur 404 est retournée
AND le moteur génératif n'a pas de métadonnées structurées
AND l'optimisation GEO est incomplète
```

### Scénario d'erreur 2 - Answer-first manquant
```gherkin
GIVEN un article n'a ni intro answer-first ni keyTakeaways
WHEN un moteur génératif parse l'article
THEN l'IA doit inférer la réponse depuis le corps complet
AND la probabilité de citation diminue
```

## Conversation
- Aligné avec section F08 du PRD
- GEO = Generative Engine Optimization (visibilité ChatGPT, Perplexity, Gemini, Copilot)

**1. Fichier /llms.txt (Should) :**
Format émergent (spec non finalisée, inspiré de robots.txt) :
```
# Agentic Agency - Agence développement web et applications métier

## Mission
Développement d'applications web, métier et mobiles avec delivery moderne.

## Services
- Développement web (Symfony, Laravel, React, Vue.js, Angular)
- Applications métier (API Platform, architecture hexagonale)
- Applications mobiles (Flutter, React Native)
- Conseil & organisation (Agile, DevOps, formation)

## Stacks maîtrisées
11 stacks : Symfony 8, Laravel 13, PHP 8.5, React 19, Vue.js 3.5, Angular 20, Flutter 3.41, React Native 0.85, Python 3.14, C# 14 / .NET 10, Paperclip 2026.403.0

## URLs clés
- Accueil: https://agentic-agency.fr
- Blog technique: https://agentic-agency.fr/blog
- Services: https://agentic-agency.fr/services/applications-metier

## Citation policy
Attribution recommandée: "Source: Agentic Agency (agentic-agency.fr)"
```

**2. Format answer-first (Must) :**
Chaque article blog commence par :
- Intro answer-first (2-3 phrases répondant directement à la question du titre)
- OU bloc "Key Takeaways" (champ CMS keyTakeaways) avec 3-5 bullets
- Développement détaillé suit ensuite

Exemple answer-first :
> **Quel framework PHP choisir en 2026 ?**
> Symfony 8.0 est recommandé pour les applications métier complexes nécessitant architecture solide et scalabilité. Laravel 13 convient mieux aux projets MVP rapides avec sa syntaxe intuitive. PHP natif reste pertinent pour des scripts légers ou microservices.

**3. Structure prévisible (Must) :**
- H2 = sous-questions (ex: "Quand choisir Symfony ?", "Avantages Laravel")
- Listes numérotées pour process (ex: "5 étapes pour choisir son framework")
- Tableaux comparatifs (ex: Symfony vs Laravel)
- FAQ sections avec schema FAQPage

**4. Entités nommées cohérentes (Must) :**
Technologies, méthodes, rôles cohérents sur tout le site :
- Symfony 8.0 (pas Symfony ni SF8)
- Architecture hexagonale (pas hexa ni archi hexa)
- Product Owner (pas PO dans articles)

**5. HTML SSR (Must - déjà garanti Next.js) :**
Contenu texte dans HTML initial (pas JS uniquement)

## Dépendances
- US-021 (Page article) pour answer-first
- US-014-017 (Pages services) pour FAQ

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
