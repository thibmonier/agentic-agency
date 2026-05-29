# Taches Techniques Transverses - Sprint 004

## Action Retro S-003

### T-TECH-01 : Pre-commit hook Prettier (husky + lint-staged)
- **Type** : [OPS]
- **Estimation** : 1.5h
- **Depend de** : -
- **Priorite** : Haute (action retro recurrente — 3 sprints d'echecs CI format)

**Commandes** :
```bash
npm install --save-dev husky lint-staged
npx husky init
```

**Fichiers a creer/modifier** :
- `.husky/pre-commit` — execute lint-staged
- `package.json` — ajouter config lint-staged

**Configuration lint-staged** :
```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx,json,css,md}": ["prettier --write"]
  }
}
```

**Criteres** :
- [ ] `npm run format:check` ne peut plus echouer en CI
- [ ] Hook se declenche a chaque commit
- [ ] Formate uniquement les fichiers stages (pas tout le repo)

---

### T-TECH-02 : Script build check + documentation
- **Type** : [OPS]
- **Estimation** : 1h
- **Depend de** : T-TECH-01

**Description** :
Ajouter un script npm pour verifier le build localement avant push.
Documenter dans CONTRIBUTING.md ou README.

**Fichiers a modifier** :
- `package.json` — ajouter script `"check": "npm run lint && npm run typecheck && npm run format:check && npm run build"`

**Optionnel** : hook pre-push qui execute `npm run check`

**Criteres** :
- [ ] `npm run check` execute lint + typecheck + format + build
- [ ] Erreur type "Resend missing API key" detectee localement
- [ ] Documente dans README ou CONTRIBUTING

---

### T-TECH-03 : Installer dependance feed (RSS)
- **Type** : [OPS]
- **Estimation** : 0.5h
- **Depend de** : -

**Commande** :
```bash
npm install feed
```

**Ou** : generer le XML manuellement si RSS 2.0 simple suffit (evite une dep).

**Decision** : a prendre lors de T-024-01. Si RSS 2.0 simple → pas besoin de package.

---

## Resume

| ID | Type | Tache | Estimation |
|----|------|-------|------------|
| T-TECH-01 | [OPS] | Pre-commit hook Prettier | 1.5h |
| T-TECH-02 | [OPS] | Script build check | 1h |
| T-TECH-03 | [OPS] | Dep RSS (optionnel) | 0.5h |
| **Total** | | | **3h** |
