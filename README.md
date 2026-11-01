# Zerango

Zerango is a frontend architecture showcase built with Next.js App Router and TypeScript. The sample application is a Persian, right-to-left learning platform with courses, a blog, and authentication flows.

## Structure

```text
src/
  app/         Routes, layouts, shared UI, and route-specific components
  actions/     Server actions
  core/        HTTP service and error handling
  providers/   Authentication and React Query providers
  stores/      Zustand notification state
  types/       Shared TypeScript types
  configs/     Application configuration
  tailwind/    Shared component styles
```

## Local development

```bash
npm ci
```

Create `.env.local` with your local configuration:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:4000/api
AUTH_SECRET=replace-with-your-own-local-secret
```

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000). A separate backend is required at `http://localhost:4000/api`; this repository contains the frontend. Set `NEXT_PUBLIC_API_URL` to use another backend. Remote image permissions follow the configured API origin.

Some routes, including parts of the student area and the course listing, are placeholders.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npm test` | Jest tests |
| `npm run storybook` | Shared UI component explorer |
