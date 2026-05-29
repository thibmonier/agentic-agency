# US-041 : Domaine + DNS + HTTPS

## Informations
- **EPIC :** EPIC-006
- **Persona :** P-001
- **Priorité :** Must
- **Points :** 2
- **Sprint :** (vide pour l'instant)
- **Statut :** 🔴 To Do

## User Story
En tant que **P-001 — Dirigeante PME**, je veux **que le site soit accessible sur mon domaine avec HTTPS** afin de **inspirer confiance et respecter les standards web modernes**.

## Critères d'acceptation (Gherkin)

### Scénario nominal
```gherkin
GIVEN le domaine agentic-agency.fr est enregistré
WHEN je configure DNS vers Cloudflare Pages
THEN le site est accessible sur https://agentic-agency.fr
AND un certificat SSL valide est actif (cadenas vert navigateur)
AND http://agentic-agency.fr redirige automatiquement vers https://
```

### Scénario alternatif 1 - DNS propagation
```gherkin
GIVEN je configure les enregistrements DNS chez Cloudflare
WHEN j'attends la propagation DNS (< 1h)
THEN le domaine pointe vers Cloudflare Pages
AND le site est accessible sans erreur DNS
AND je peux vérifier avec dig ou nslookup
```

### Scénario alternatif 2 - WWW redirect
```gherkin
GIVEN je visite www.agentic-agency.fr
WHEN la requête arrive
ALORS je suis automatiquement redirigé vers https://agentic-agency.fr (sans www)
AND la redirection est permanente (301)
```

### Scénario d'erreur 1 - Certificat SSL invalide
```gherkin
GIVEN le certificat SSL n'est pas correctement configuré
WHEN je visite https://agentic-agency.fr
THEN une erreur "Connexion non sécurisée" s'affiche
AND le certificat doit être corrigé dans Cloudflare
```

### Scénario d'erreur 2 - DNS mal configuré
```gherkin
GIVEN les enregistrements DNS pointent vers une mauvaise adresse
WHEN je visite agentic-agency.fr
THEN une erreur "Site inaccessible" ou timeout s'affiche
AND les enregistrements DNS doivent être corrigés
```

## Conversation
- Aligné avec section § 9 Contraintes du PRD
- Domaine : agentic-agency.fr (à acheter si pas encore fait)
- Registrar : client libre (OVH, Gandi, Cloudflare Registrar, etc.)
- DNS : Cloudflare DNS (recommandé, gratuit, rapide propagation)
- HTTPS : certificat SSL automatique Cloudflare (Let's Encrypt)

**Configuration DNS chez Cloudflare :**
1. Ajouter domaine agentic-agency.fr à Cloudflare
2. Pointer nameservers registrar vers Cloudflare
3. Ajouter enregistrements DNS :
   - `A` : agentic-agency.fr → IP Cloudflare Pages (ou CNAME)
   - `CNAME` : www.agentic-agency.fr → agentic-agency.fr
   - `TXT` : validation Google Search Console (si GSC validation DNS)
   - `MX` (optionnel) : si email custom (ex: contact@agentic-agency.fr via Google Workspace/ProtonMail)

**Configuration Cloudflare Pages custom domain :**
1. Aller dans Cloudflare Pages dashboard > projet > Custom domains
2. Ajouter domaine : agentic-agency.fr
3. Cloudflare configure automatiquement DNS + SSL
4. Certificat SSL activé sous 5-10 min

**HTTPS obligatoire :**
- SSL/TLS mode : Full (strict) recommandé
- Always Use HTTPS : activé (redirection HTTP → HTTPS)
- HSTS : activé (Strict-Transport-Security header)
- HTTP/2 : activé par défaut
- TLS version : 1.3 minimum

**Redirections :**
- http://agentic-agency.fr → https://agentic-agency.fr (301)
- https://www.agentic-agency.fr → https://agentic-agency.fr (301, sans www)

**Vérifications post-configuration :**
- SSL Labs test : score A+ (https://www.ssllabs.com/ssltest/)
- Certificat valide : cadenas vert navigateur
- Redirection HTTP → HTTPS : fonctionnelle
- Propagation DNS : dig agentic-agency.fr (< 1h)

## Dépendances
- US-039 (Cloudflare Pages) pour hébergement cible

## Validation INVEST
- [x] Independent
- [x] Negotiable
- [x] Valuable
- [x] Estimable
- [x] Sized ≤ 8 points
- [x] Testable
