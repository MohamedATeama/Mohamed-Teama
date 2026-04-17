# Mohamed Teama — Portfolio

A single-page portfolio site for **Mohamed Teama**, full stack developer. It presents work, skills, and a contact channel in a fast, accessible layout with smooth motion and a cohesive visual system.

## Highlights

- **Single-page layout** with anchored navigation: Hero, About, Skills, Projects, and Contact
- **Responsive design** built with Tailwind CSS and a component library pattern (Radix UI primitives)
- **Motion** via Framer Motion for section reveals and subtle interaction feedback
- **Contact form** powered by [EmailJS](https://www.emailjs.com/) (configure your own service, template, and public key in the contact component)
- **Client data fetching** ready with TanStack Query for future API use
- **Type-safe** codebase with TypeScript and ESLint

## Tech stack

| Area        | Choices |
|------------|---------|
| Runtime    | [React 18](https://react.dev/) |
| Language   | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 5](https://vitejs.dev/) with [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) |
| Styling    | [Tailwind CSS](https://tailwindcss.com/), [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate), [class-variance-authority](https://cva.style/docs) |
| UI         | [Radix UI](https://www.radix-ui.com/), custom components under `src/components/ui` |
| Routing    | [React Router](https://reactrouter.com/) v6 |
| Forms      | [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) (via `@hookform/resolvers`) where applicable |
| Animation  | [Framer Motion](https://www.framer.com/motion/) |
| Icons      | [Lucide React](https://lucide.dev/) |
| Notifications | Sonner + project toast utilities |

## Prerequisites

- [Node.js](https://nodejs.org/) **18** or newer (LTS recommended)
- npm, pnpm, or yarn

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (default: http://localhost:8080)
npm run dev
```

The dev server is configured in `vite.config.ts` to listen on host `::` and port **8080**.

## Scripts

| Command        | Description |
|----------------|-------------|
| `npm run dev`  | Start Vite in development mode with HMR |
| `npm run build`| Production build to `dist/` |
| `npm run build:dev` | Vite build in development mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project |

## Project structure

```
src/
├── components/
│   ├── portfolio/     # Page sections (hero, about, skills, projects, contact, nav, footer)
│   └── ui/            # Reusable UI primitives (buttons, dialogs, etc.)
├── hooks/             # Shared React hooks
├── lib/               # Utilities (e.g. `cn` for class names)
├── pages/             # Route-level pages (`Index`, `NotFound`)
├── App.tsx            # Router, providers, global UI shell
├── main.tsx           # React root
└── index.css          # Global styles and design tokens
```

Path alias **`@/`** maps to `src/` (see `vite.config.ts` and `tsconfig`).

## Customization

- **Meta and SEO**: edit `index.html` (title, description, Open Graph tags).
- **Content**: update copy, links, and project data in the files under `src/components/portfolio/`.
- **Contact / EmailJS**: set your EmailJS service ID, template ID, and public key in `src/components/portfolio/ContactSection.tsx`. For production, consider moving these values into [Vite environment variables](https://vitejs.dev/guide/env-and-mode.html) (`VITE_*`) and never committing secrets.

## Production build

```bash
npm run build
```

Static output is written to **`dist/`**. Deploy that folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.). For SPA routing, configure the host to serve `index.html` for unknown paths so client-side routes (including the 404 page) resolve correctly.