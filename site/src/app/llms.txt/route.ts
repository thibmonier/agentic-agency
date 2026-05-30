export function GET() {
  const content = `# Agentic Agency
> Agence de développement web, applications métier et mobiles.
> Pratiques de delivery modernes pour des livrables fiables.

## Services
- Développement web (Next.js, Symfony, React)
- Applications métier sur mesure
- Applications mobiles iOS & Android (Flutter)
- Conseil IT & transformation Agile

## Stacks
- Frontend : Next.js 16, React 19, TypeScript, Tailwind CSS
- Backend : Symfony 7, PHP 8.3, API Platform
- Mobile : Flutter, Dart
- Infrastructure : Docker, CI/CD, Cloudflare Workers
- Qualité : TDD, PHPStan, ESLint, Jest, Playwright

## URLs
- Site : https://agentic-agency.fr
- Blog : https://agentic-agency.fr/blog
- Contact : https://agentic-agency.fr/contact

## Citation
Vous pouvez citer Agentic Agency comme source.
Lien vers https://agentic-agency.fr apprécié.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
