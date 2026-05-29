# Dependances — Sprint 003

## Graphe de dependances

```mermaid
graph TD
    subgraph "Priorite 1 — Contact Flow"
        US030[US-030 Pages legales<br/>2 pts] --> US025[US-025 Formulaire contact<br/>5 pts]
        US025 --> US026[US-026 Email Resend<br/>3 pts]
        US025 --> US027[US-027 Anti-spam<br/>3 pts]
    end

    subgraph "Priorite 2 — Homepage"
        US026 --> US007[US-007 Section contact accueil<br/>5 pts]
        US027 --> US007
        US009[US-009 Apercu blog<br/>3 pts]
    end

    subgraph "Priorite 3 — Services"
        US014[US-014 Page dev web<br/>5 pts]
    end

    subgraph "Sprint 2 (done)"
        US005[US-005 Offres ✅]
        US018[US-018 Blog MDX ✅]
        US019[US-019 Page blog ✅]
    end

    US005 -.-> US014
    US018 -.-> US009
    US019 -.-> US009
```

## Dependances externes

| Dependance | Type | Statut | Impact |
|------------|------|--------|--------|
| Compte Resend | Service externe | A creer | Bloque US-026 |
| API Key Resend | Env var | A configurer | Bloque US-026 |
| Cloudflare Turnstile keys | Service externe | A creer (dashboard CF) | Bloque US-027 |
| Domaine email verifie (Resend) | Config | Optionnel (onboarding@ dispo) | Non bloquant |

## Parallelisation

| Phase | US paralleles | Condition |
|-------|---------------|-----------|
| Phase 1 | US-030 + US-009 | Independantes |
| Phase 2 | US-025 | Apres US-030 |
| Phase 3 | US-026 + US-027 | Apres US-025, paralleles entre eux |
| Phase 4 | US-007 | Apres US-026 + US-027 |
| Phase 5 | US-014 | Independante (parallele phase 2-4) |
