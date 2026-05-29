# Dependances — Sprint 004

## Graphe de dependances

```mermaid
graph TD
    subgraph "Sprint 003 (Done)"
        US014[US-014: Template service page]
        US030[US-030: Pages legales]
        US025[US-025: Formulaire contact]
    end

    subgraph "Sprint 001 (Done)"
        US018[US-018: MDX setup]
        US019[US-019: Page /blog]
    end

    subgraph "Sprint 004 - Phase 1 (sans deps internes)"
        US015[US-015: Applications metier 5pts]
        US016[US-016: Applications mobiles 5pts]
        US017[US-017: Conseil organisation 5pts]
        US020[US-020: Categories blog 2pts]
        US031[US-031: SEO technique 3pts]
        US024[US-024: Flux RSS 1pt]
        TECH[T-TECH: Pre-commit + build check]
    end

    subgraph "Sprint 004 - Phase 2 (deps internes)"
        US028[US-028: Analytics Plausible 2pts]
        US029[US-029: Bandeau cookies RGPD 3pts]
    end

    US014 --> US015
    US014 --> US016
    US014 --> US017
    US030 --> US029
    US018 --> US031
    US019 --> US020
    US018 --> US024
    US029 --> US028

    style US015 fill:#4a7bb7,color:#fff
    style US016 fill:#4a7bb7,color:#fff
    style US017 fill:#4a7bb7,color:#fff
    style US028 fill:#e8a838,color:#fff
    style US029 fill:#e8a838,color:#fff
    style US031 fill:#6b9e4f,color:#fff
    style US020 fill:#9b6bb7,color:#fff
    style US024 fill:#9b6bb7,color:#fff
```

## Ordre d'execution recommande

### Phase 1 — Parallelisable (pas de deps internes)

| US | Titre | Pts | Parallelisable avec |
|----|-------|-----|---------------------|
| US-015 | Applications metier | 5 | US-016, US-017, US-020, US-031, US-024 |
| US-016 | Applications mobiles | 5 | US-015, US-017, US-020, US-031, US-024 |
| US-017 | Conseil organisation | 5 | US-015, US-016, US-020, US-031, US-024 |
| US-020 | Categories blog | 2 | US-015, US-016, US-017, US-031, US-024 |
| US-031 | SEO technique | 3 | US-015, US-016, US-017, US-020, US-024 |
| US-024 | Flux RSS | 1 | Tout |
| T-TECH | Pre-commit + build check | - | Tout (debut sprint) |

### Phase 2 — Apres Phase 1

| US | Titre | Pts | Depend de |
|----|-------|-----|-----------|
| US-029 | Bandeau cookies RGPD | 3 | US-030 (done) |
| US-028 | Analytics Plausible | 2 | US-029 (consent manager) |

**Note** : US-029 peut demarrer en Phase 1 car sa seule dependance (US-030) est done.
US-028 depend de US-029 pour integration dans le consent manager.

## Opportunites de parallelisme

- **Maximum** : 7 US + tech tasks en parallele (Phase 1)
- **Chemin critique** : T-TECH → US-029 → US-028 (5h environ)
- **3 pages services** : 100% independantes, reutilisent meme template
