# Claude-Craft Rules Index - Symfony

> Condensed reference for Symfony 7+, PHP 8.3+, Doctrine ORM, API Platform, Messenger

## Architecture Quick Reference

```
src/
├── Domain/           # Business logic, entities
│   ├── Entity/       # Domain entities (Doctrine)
│   ├── ValueObject/  # Immutable value types
│   ├── Event/        # Domain events
│   └── Repository/   # Repository interfaces only
├── Application/      # Use cases, handlers
│   ├── Command/      # Write operations (CQRS)
│   ├── Query/        # Read operations (CQRS)
│   └── Service/      # Application services
├── Infrastructure/   # Technical implementations
│   ├── Persistence/  # Doctrine repositories
│   ├── Messenger/    # Message handlers
│   └── Api/          # API Platform resources
└── UI/               # User interface layer
    ├── Controller/   # HTTP controllers
    └── Console/      # CLI commands
```

**Dependency Rule**: UI/Infrastructure -> Application -> Domain (INWARD ONLY)

## Coding Standards

| Element | Convention | Example |
|---------|-----------|---------|
| Classes | PascalCase | `UserService` |
| Methods | camelCase | `getUserById()` |
| Constants | UPPER_SNAKE | `MAX_RETRIES` |
| Properties | camelCase | `\$firstName` |

**Always**: PSR-12, PHP 8.3+ attributes, strict types, final classes.

## Testing Quick Reference

**TDD Cycle**: RED → GREEN → REFACTOR

**Symfony Stack**: PHPUnit + Codeception + Behat + Infection (mutation testing)

**Coverage Target**: ≥80% | **Key Metrics**: Branch, Statement, Integration

## Security Essentials

- **Input Validation**: ALWAYS validate at boundaries
- **No Secrets in Code**: Use environment variables
- **Parameterized Queries**: Never concatenate SQL
- **OWASP Top 10**: Be aware of common vulnerabilities

## Universal Principles

| Principle | Key Points |
|-----------|------------|
| **SOLID** | Single responsibility, Open/closed, Liskov, Interface segregation, Dependency inversion |
| **KISS** | Keep it simple, avoid over-engineering |
| **DRY** | Don't repeat yourself, extract common logic |
| **YAGNI** | Don't add functionality until needed |

## Full Reference Documentation

### Base (Universal)
- `base/solid-principles.md` - SOLID principles in depth
- `base/kiss-dry-yagni.md` - Simplicity principles
- `base/workflow-analysis.md` - Development workflow
- `base/git-workflow.md` - Git best practices
- `base/documentation.md` - Documentation standards

### Symfony Specific
- `symfony/architecture.md` - Clean Architecture + DDD
- `symfony/coding-standards.md` - PSR-12 & PHP 8.3+
- `symfony/testing.md` - PHPUnit, Behat, Infection
- `symfony/quality-tools.md` - PHPStan, Psalm, PHP-CS-Fixer
- `symfony/security.md` - Symfony security, OWASP
- `symfony/ddd-patterns.md` - DDD tactical patterns
- `symfony/cqrs.md` - CQRS with Messenger
- `symfony/docker.md` - Docker & Hadolint
