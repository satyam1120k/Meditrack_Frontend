# Meditrack Frontend

React + TypeScript + TailwindCSS app for managing patients. Connects to a FastAPI backend and is deployable on GitHub Pages.

## Backend

- Default backend: `https://meditrack-backend-las5le3co-satyam-patels-projects-94c2bcfa.vercel.app`
- Configure via env at build time: set `VITE_API_BASE_URL`.

## Local development

```
npm ci
npm run dev
```

Optionally add a `.env`:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

## Build

```
npm run build
npm run preview
```

## Deployment (GitHub Pages)

This repo is prepared for GitHub Pages:

- `vite.config.ts` sets `base` to `/Meditrack_Frontend/`.
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to Pages on pushes to `master`.
- SPA fallback is added by copying `dist/index.html` to `dist/404.html`.

To configure the backend URL for production, set a repository variable `VITE_API_BASE_URL` (Settings → Secrets and variables → Actions → Variables). The workflow writes it into `.env` at build time.

## Links

- Frontend repo: [`samir1120k/Meditrack_Frontend`](https://github.com/samir1120k/Meditrack_Frontend)
- Backend (deployed): `https://meditrack-backend-las5le3co-satyam-patels-projects-94c2bcfa.vercel.app`
