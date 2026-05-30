# Dependances — Sprint 006

## Graphe de dependances

```mermaid
graph TD
    subgraph "Sprints precedents (Done)"
        US037[US-037: OG metadata]
        US035[US-035: Performance]
        TECH01[T-TECH-01: Playwright CI]
        US008[US-008: Temoignages]
    end

    subgraph "Sprint 006 - Phase 1 (parallelisable)"
        US010[US-010: Realisations 2pts]
        RETRO01[T-RETRO-01: Image OG 2pts]
        RETRO02[T-RETRO-02: LH mobile 2pts]
        RETRO03[T-RETRO-03: E2E a11y 3pts]
    end

    subgraph "Sprint 006 - Phase 2"
        RETRO04[T-RETRO-04: OG Image API 3pts]
    end

    US008 --> US010
    US037 --> RETRO01
    US035 --> RETRO02
    TECH01 --> RETRO03
    RETRO01 --> RETRO04

    style US010 fill:#f39c12,color:#fff
    style RETRO01 fill:#e74c3c,color:#fff
    style RETRO02 fill:#3498db,color:#fff
    style RETRO03 fill:#3498db,color:#fff
    style RETRO04 fill:#9b59b6,color:#fff
```

## Ordre d'execution recommande

### Phase 1 — Parallelisable (pas de deps internes)

| Item | Titre | Pts | Parallelisable avec |
|------|-------|-----|---------------------|
| US-010 | Realisations clients | 2 | Tout |
| T-RETRO-01 | Image OG reelle | 2 | Tout |
| T-RETRO-02 | Lighthouse CI mobile | 2 | Tout |
| T-RETRO-03 | E2E a11y scenarios | 3 | Tout |

### Phase 2 — Apres T-RETRO-01

| Item | Titre | Pts | Depend de |
|------|-------|-----|-----------|
| T-RETRO-04 | OG Image API dynamique | 3 | T-RETRO-01 (image de base) |

## Opportunites de parallelisme

- **Maximum** : 4 items en parallele (Phase 1)
- **Chemin critique** : T-RETRO-01 → T-RETRO-04 (5h environ)
- Sprint court : 12 pts sur capacite 26 → marge confortable
