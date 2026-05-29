# Contraintes Identifiées — Site Vitrine Agentic Agency

**Date :** 29 mai 2026
**Phase :** Analyse (Enterprise)

---

## 1. Contraintes Techniques

| ID | Contrainte | Description | Impact | Négociable |
|----|------------|-------------|--------|------------|
| CT-01 | **Next.js ≥ 15.5.15** | Version minimale pour patches CVE-2025-55182 (RCE) et CVE-2026-23869 (DoS) | Bloquant | Non |
| CT-02 | **Lighthouse ≥ 90** | Objectif performance imposé par CdC (§15.2) | Élevé | Non |
| CT-03 | **WCAG 2.1 AA** | Accessibilité standard imposée par CdC (§15.2) | Élevé | Non |
| CT-04 | **Publication sans redéploiement** | Blog publiable via CMS sans intervention dev | Élevé | Non |
| CT-05 | **SSR/ISR natif** | Nécessaire pour SEO + revalidation blog | Moyen | Non |
| CT-06 | **React 19** | Imposé par Next.js 15 → compatibilité libs limitée | Moyen | Oui (fallback Next.js 14) |
| CT-07 | **13 sections accueil** | Page longue → performance et UX à surveiller | Moyen | Oui (réductible à 8-10) |

---

## 2. Contraintes Business

| ID | Contrainte | Description | Impact | Négociable |
|----|------------|-------------|--------|------------|
| CB-01 | **Délai 7-9 semaines** | Planning imposé (CdC §13.1) | Élevé | Limité (buffer 20%) |
| CB-02 | **Développeur solo** | Pas d'équipe, goulot d'étranglement | Élevé | Oui (freelance contingence) |
| CB-03 | **Budget hébergement < 500€/an** | Coûts opérationnels limités | Faible | Oui |
| CB-04 | **Contenus fournis par client** | Textes, images, témoignages → dépendance externe | Élevé | Non (clause J+7) |
| CB-05 | **3 articles blog au go-live** | Minimum requis (CdC §15.1) | Moyen | Non |
| CB-06 | **4 pages services dédiées** | /services/developpement-web, /applications-metier, /applications-mobiles, /conseil-organisation | Moyen | Non |

---

## 3. Contraintes Réglementaires

| ID | Contrainte | Description | Impact | Négociable |
|----|------------|-------------|--------|------------|
| CR-01 | **RGPD formulaire contact** | Mentions obligatoires, base légale (intérêt légitime), durée conservation 12 mois | Élevé | Non |
| CR-02 | **Consentement cookies** | Banner avec choix granulaire, pas de dépôt avant consentement | Élevé | Non |
| CR-03 | **Mentions légales** | Éditeur, hébergeur, directeur publication, SIRET | Moyen | Non |
| CR-04 | **Politique confidentialité** | Page dédiée avec finalités, droits, durées | Moyen | Non |
| CR-05 | **DPA hébergeur** | Data Processing Agreement signé (Vercel/Cloudflare) | Faible | Non |
| CR-06 | **Analytics cookieless** | Si Plausible → pas de consentement requis. Si GA4 → consentement obligatoire | Moyen | Oui (choix outil) |

---

## 4. Contraintes Ressources

| ID | Contrainte | Description | Impact | Négociable |
|----|------------|-------------|--------|------------|
| CRE-01 | **40h/semaine dev** | Capacité maximale solo, pas d'overtime | Élevé | Non |
| CRE-02 | **Formation CMS client** | 1h minimum pour autonomie publication blog | Moyen | Non |
| CRE-03 | **Support post-livraison** | 5h incluses (estimation) | Faible | Oui |

---

## 5. Contraintes SEO/GEO (CdC §12)

| ID | Contrainte | Description | Impact | Négociable |
|----|------------|-------------|--------|------------|
| CS-01 | **Title unique** par page (50-60 chars) | SEO technique obligatoire | Moyen | Non |
| CS-02 | **Meta description** unique (140-160 chars) | SEO technique obligatoire | Moyen | Non |
| CS-03 | **Canonical URLs** | Éviter doublons www/trailing slash | Moyen | Non |
| CS-04 | **Un seul H1** par page | Hiérarchie H2→H3 sans saut | Faible | Non |
| CS-05 | **HTML sémantique** | header, main, article, nav, footer | Faible | Non |
| CS-06 | **Schema.org** | BlogPosting + Organization (Rich Results Test) | Moyen | Non |
| CS-07 | **Sitemap.xml** | Inclut articles blog | Moyen | Non |
| CS-08 | **Google Search Console** | Configurée + sitemap soumis | Moyen | Non |
| CS-09 | **OpenGraph LinkedIn** | Preview validée sur 3 articles | Moyen | Non |
| CS-10 | **llms.txt** | Fichier GEO pour crawlers IA | Faible | Oui |

---

## 6. Synthèse

### Contraintes non négociables (bloquantes)

- Next.js ≥ 15.5.15 (sécurité)
- Lighthouse ≥ 90 (performance)
- WCAG 2.1 AA (accessibilité)
- RGPD compliant (réglementaire)
- Blog sans redéploiement (autonomie)
- 3 articles au go-live
- Contenus client fournis J+7

### Contraintes négociables (flexibles)

- Nombre de sections accueil (13 → 8-10 si délai)
- Version React (19 → 18 si compat)
- Budget hébergement
- Choix analytics (Plausible vs GA4)
- llms.txt (nice-to-have GEO)
- Support post-livraison (durée)
