# CMDHD Monorepo (Turborepo)

Monorepo for Central Michigan District Health Department projects. Managed with PNPM and Turborepo.

- Apps live in `apps/`
- Shared packages live in `packages/`
- Uses Next.js 14, React 18, TypeScript (strict), Tailwind, and ShadCN patterns
- Centralized environment via root `.env` loaded into all tasks

## Quickstart

```bash
pnpm i
pnpm dev
```

## Structure

- `apps/boundaries`: Professional Boundaries training app (light/dark mode)
- `packages/ui`: Shared UI components (ShadCN-style)
- `packages/utils`: Common utilities
- `packages/config`: ESLint/Prettier configs
- `packages/env`: Zod-validated env helper

## CI
GitHub Actions runs lint, typecheck, and tests on PRs.
