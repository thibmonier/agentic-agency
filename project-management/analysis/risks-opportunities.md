# Risques et Opportunités — Site Vitrine Agentic Agency

**Date :** 29 mai 2026
**Phase :** Analyse (Enterprise)
**Score de risque global : 5,8/10 (Modéré)**

---

## 1. Matrice des Risques

### Légende

- **Impact :** Faible (1) | Moyen (2) | Élevé (3) | Critique (4)
- **Probabilité :** Rare (1) | Peu probable (2) | Probable (3) | Très probable (4)
- **Score :** Impact × Probabilité

### Risques Techniques

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| TECH-01 | **CVE Next.js App Router** (CVE-2025-55182 RCE CVSS 10.0, CVE-2026-23869 DoS) | 4 | 3 | **12** 🔴 | Next.js ≥ 15.5.15, CI/CD scan vulnérabilités, ne pas se reposer sur middleware seul pour auth |
| TECH-02 | **Fuites mémoire Next.js** en Docker/K8s | 3 | 3 | **9** 🟠 | Héberger sur Vercel/Cloudflare serverless (évite Docker), monitoring mémoire si migration future |
| TECH-03 | **Performance accueil 13 sections** (Core Web Vitals) | 3 | 2 | **6** 🟡 | SSG force-static, next/image, lazy load sections, Intersection Observer animations, audit Lighthouse CI |
| TECH-04 | **Vendor lock-in CMS** Sanity | 2 | 2 | **4** 🟢 | Pattern Repository (abstraction CMS), export JSON périodique, fallback Strapi self-hosted |
| TECH-05 | **Compatibilité React 19** bibliothèques | 2 | 3 | **6** 🟡 | Audit deps avant intégration, alternatives compatibles, fallback Next.js 14 + React 18 |
| TECH-06 | **SEO/GEO peu de recul** (discipline récente) | 3 | 2 | **6** 🟡 | Prioriser SEO classique (80% couverture), budget R&D GEO 10-15%, monitoring positions IA |

### Risques Business

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| BUS-01 | **Dépassement délai 7-9 sem** (solo dev) | 3 | 3 | **9** 🟠 | Buffer 20% (viser 7, annoncer 9), découpage strict MVP, weekly demos, templates UI |
| BUS-02 | **Dépendance contenus** (textes, images, témoignages) | 2 | 4 | **8** 🟠 | Brief contenus J0, deadline J+7, placeholders IA, CMS accessible Sprint 2, clause contractuelle |
| BUS-03 | **Coûts hébergement** explosion | 2 | 2 | **4** 🟢 | Cache ISR agressif, Cloudflare gratuit, monitoring billing, fallback OVH VPS 15€/mois |

### Risques Réglementaires

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| REG-01 | **Non-conformité RGPD** (formulaire, analytics, cookies) | 4 | 1 | **4** 🟢 | Plausible cookieless, Tarteaucitron, politique confidentialité CNIL, DPA Vercel/Cloudflare |
| REG-02 | **Accessibilité WCAG 2.1 AA** (obligation imminente) | 3 | 2 | **6** 🟡 | Radix UI (ARIA natif), axe-core CI, tests clavier, checklist WCAG en code review |

### Risques Organisationnels

| ID | Risque | Impact | Proba | Score | Mitigation |
|----|--------|--------|-------|-------|------------|
| ORG-01 | **Autonomie blog** insuffisante client | 2 | 3 | **6** 🟡 | Sanity Studio intuitif, formation 1h Sprint 4, templates articles, preview draft, support 1 mois |
| ORG-02 | **Maintenance long terme** (updates Next.js) | 3 | 2 | **6** 🟡 | Contrat maintenance 100-200€/mois, tests E2E Playwright, lock versions npm, doc technique |
| ORG-03 | **Évolutivité Lot 2** | 2 | 2 | **4** 🟢 | Architecture modulaire, i18n next-intl préparé, schéma CMS évolutif, feature flags |

---

## 2. Carte de Chaleur

```
              Probabilité →
              Rare    Peu prob.  Probable   Très prob.
            ┌─────────┬─────────┬──────────┬──────────┐
Critique  4 │ REG-01  │         │ TECH-01  │          │
            │   4     │         │   12 🔴  │          │
            ├─────────┼─────────┼──────────┼──────────┤
Élevé     3 │         │ TECH-03 │ TECH-02  │          │
            │         │ TECH-06 │ BUS-01   │          │
            │         │ REG-02  │   9 🟠   │          │
            │         │ ORG-02  │          │          │
            │         │   6 🟡  │          │          │
            ├─────────┼─────────┼──────────┼──────────┤
Moyen     2 │         │ TECH-04 │ TECH-05  │ BUS-02   │
            │         │ BUS-03  │ ORG-01   │   8 🟠   │
            │         │ ORG-03  │   6 🟡   │          │
            │         │   4 🟢  │          │          │
            ├─────────┼─────────┼──────────┼──────────┤
Faible    1 │         │         │          │          │
            └─────────┴─────────┴──────────┴──────────┘
```

---

## 3. Plan de Mitigation Prioritaire

| Priorité | Risque | Action immédiate | Échéance |
|----------|--------|------------------|----------|
| 🔴 P0 | TECH-01 CVE Next.js | Vérifier Next.js ≥ 15.5.15, setup CI scan | Sprint 0 |
| 🟠 P1 | BUS-01 Délai | Buffer 20%, scope MVP strict, weekly demos | Sprint 0 |
| 🟠 P1 | BUS-02 Contenus | Brief client J0, template Notion, deadline J+7 | Sprint 0 |
| 🟠 P1 | TECH-02 Fuites mémoire | Choisir serverless (Cloudflare/Vercel) | Sprint 0 |
| 🟡 P2 | TECH-03 Performance | Architecture SSG, audit Lighthouse CI | Sprint 1 |
| 🟡 P2 | REG-02 Accessibilité | Radix UI, axe-core CI | Sprint 1 |
| 🟡 P2 | ORG-01 Autonomie blog | Sanity Studio + formation | Sprint 4 |

---

## 4. Opportunités

| Opportunité | Description | Valeur | Effort |
|-------------|-------------|--------|--------|
| **GEO early adopter** | Aucun concurrent français n'implémente GEO → différenciation | ⭐⭐⭐ Élevée | Moyen |
| **Blog technique actif** | Concurrents sans blog = opportunité SEO massive | ⭐⭐⭐ Élevée | Élevé (récurrent) |
| **Architecture Lot 2** | i18n + réalisations + RDV préparés → upsell facilité | ⭐⭐⭐ Élevée | Faible |
| **Coût quasi-nul** | Cloudflare + Sanity free + Plausible ≈ 470€/an | ⭐⭐ Moyenne | Nul |
| **WCAG AA anticipé** | Obligation probable 2027-2028 → conformité en avance | ⭐⭐ Moyenne | Moyen |
| **Autonomie client CMS** | Réduction coûts maintenance récurrents | ⭐⭐ Moyenne | Faible |
| **Service rédaction** | Extension offre (contenus IA + humain) | ⭐⭐ Moyenne | Variable |

---

## 5. Indicateurs d'Alerte

| Sprint | Signal d'alerte | Action |
|--------|-----------------|--------|
| Sprint 1 (sem 1-2) | < 2 pages fonctionnelles | Réduire scope, recruter freelance |
| Sprint 2 (sem 3-4) | Blog non opérationnel | Revoir priorité CMS |
| Sprint 3 (sem 5-6) | Tests accessibilité non démarrés | WCAG AA impossible à atteindre |
| Sprint 4 (sem 7-8) | Contenus client non fournis | Déployer avec placeholders |

---

## 6. Conclusion

Projet **réalisable** (risque modéré 5,8/10) sous 3 conditions :

1. **Next.js ≥ 15.5.15** patchant les CVE critiques
2. **Contenus client fournis J+7** (clause contractuelle)
3. **Scope MVP Lot 1 strict** (Lot 2 différé)

Risques critiques maîtrisés. Opportunités GEO + blog = avantage concurrentiel fort.
