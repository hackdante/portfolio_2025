# AI Coding Agent Instructions for KENSAI Portfolio 2025

## Project Overview
This is a Next.js 16 immersive 3D portfolio using React 19, TypeScript (strict mode), Tailwind CSS 4, Three.js (React Three Fiber), GSAP animations, and pnpm. It features interactive 3D scenes, character animations, and a dashboard.

## Architecture & Structure
- **App Router**: Pages in `app/` (e.g., `app/page.tsx` renders `WebHomePage` from `shared/views/web-pages/home/`).
- **Shared Components**: Organized in `shared/components/` with `base/` (reusable), `composite/` (complex), `patterns/` (page sections like `MainHero`), and `portfolio/` (3D-specific).
- **Types**: Defined in `shared/types/global/` (e.g., `CharacterAnimationType` in `3d.ts` for animations like '000_Awake', 'Bow').
- **Hooks**: Custom hooks in `shared/hooks/` (e.g., `useLoopAudio`, `useScreen`).
- **Constants**: Feature data in `shared/constants/web-page/home.ts` (e.g., `HOME_FEATURES` array).
- **Absolute Imports**: Use `@/` prefix (maps to root via `tsconfig.json` paths).

## Key Patterns & Conventions
- **Component Naming**: PascalCase (e.g., `MainHero`, `SpeedDial`).
- **File Organization**: Barrel exports in `index.ts` files, but avoid `@/` aliases in internal barrels (ESLint rule).
- **3D Integration**: Use `MainScene3D` component for Three.js scenes; pass `animation` prop for character states.
- **Animations**: GSAP with `useGSAP` hook; coordinate with Three.js for smooth transitions.
- **Theming**: `next-themes` with `ThemeProviderSwitch`; CSS variables for gradients (e.g., `--hero-gradient-start`).
- **Responsive**: Use `useScreen` hook for device detection; adjust 3D settings accordingly.
- **Icons**: React Icons (e.g., `FaUserPlus` from `react-icons/fa6`).

## Development Workflow
- **Package Manager**: pnpm (install with `pnpm install`, dev with `pnpm dev --turbo`).
- **Build & Lint**: `pnpm prebuild` runs `lint` and `typecheck`; `pnpm build` for production.
- **Pre-commit**: Husky enforces linting and TypeScript checks.
- **Docker**: Dockerfile for deployment; build with `docker build -t kensai-portfolio .`.

## Examples
- **Adding a new animation**: Update `CharacterAnimationType` in `shared/types/global/3d.ts`, add icon in `MainHero.tsx` menu array, handle in `MainScene3D`.
- **New component**: Place in appropriate `shared/components/` subfolder, export via `index.ts`, import with `@/shared/components/...`.
- **3D feature**: Use `@react-three/drei` for helpers, `@react-three/postprocessing` for effects like bloom.

## Critical Notes
- Strict TypeScript: No `any`, explicit types for props/returns; validate data before use.
- Accessibility: Semantic HTML, ARIA when needed, keyboard nav, focus states, theme-aware styles.
- Performance: Memoize 3D components, optimize assets, use instanced meshes for repetition.
- No console logs: ESLint error for `console.log` (allow `warn`/`error`).