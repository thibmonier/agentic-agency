# Dependances — Sprint 005

## Graphe de dependances

```mermaid
graph TD
    subgraph "Sprints precedents (Done)"
        US031[US-031: SEO technique]
        US038[US-038: Setup Next.js]
        US021[US-021: Page article]
        US028[US-028: Plausible]
        US014[US-014-017: Pages services]
    end

    subgraph "Sprint 005 - Phase 1 (parallelisable)"
        US035[US-035: Performance Lighthouse 5pts]
        US036[US-036: Accessibilite WCAG 5pts]
        US042[US-042: Headers securite 2pts]
        US034[US-034: GEO llms.txt 3pts]
        US008[US-008: Temoignages 3pts]
        TECH[T-TECH: E2E Playwright CI]
    end

    subgraph "Sprint 005 - Phase 2"
        US032[US-032: Structured data 3pts]
        US022[US-022: Partage LinkedIn 3pts]
    end

    subgraph "Sprint 005 - Phase 3"
        US037[US-037: OG toutes pages 2pts]
    end

    US038 --> US035
    US038 --> US036
    US038 --> US042
    US031 --> US032
    US021 --> US022
    US028 --> US022
    US014 --> US034
    US022 --> US037
    US031 --> US037

    style US035 fill:#e74c3c,color:#fff
    style US036 fill:#e74c3c,color:#fff
    style US032 fill:#3498db,color:#fff
    style US037 fill:#3498db,color:#fff
    style US022 fill:#3498db,color:#fff
    style US042 fill:#2ecc71,color:#fff
    style US034 fill:#9b59b6,color:#fff
    style US008 fill:#f39c12,color:#fff
```

## Ordre d'execution recommande

### Phase 1 — Parallelisable (pas de deps internes)

| US | Titre | Pts | Parallelisable avec |
|----|-------|-----|---------------------|
| US-035 | Performance Lighthouse | 5 | Tout |
| US-036 | Accessibilite WCAG | 5 | Tout |
| US-042 | Headers securite | 2 | Tout |
| US-034 | GEO llms.txt | 3 | Tout |
| US-008 | Temoignages | 3 | Tout |
| T-TECH | E2E Playwright CI | - | Tout |

### Phase 2 — Apres Phase 1

| US | Titre | Pts | Depend de |
|----|-------|-----|-----------|
| US-032 | Structured data | 3 | US-031 (done) |
| US-022 | Partage LinkedIn | 3 | US-021 + US-028 (done) |

Note : US-032 et US-022 n'ont pas de deps internes au sprint, peuvent demarrer en Phase 1 aussi.

### Phase 3 — Apres US-022

| US | Titre | Pts | Depend de |
|----|-------|-----|-----------|
| US-037 | OG toutes pages | 2 | US-022 (share button + OG blog) |

## Opportunites de parallelisme

- **Maximum** : 8 US + tech en parallele (toutes deps externes resolues)
- **Chemin critique** : US-022 → US-037 (5h environ)
- **US-035 et US-036** sont les plus lourdes (5 pts chacune) mais independantes
