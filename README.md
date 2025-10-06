# Meditrack Frontend

React + Vite + TypeScript app for managing patient information.

## Local Development

Requirements:
- Node.js 18+ (Node 20 recommended)

Install and run:

```bash
npm ci
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

## Configuration

Backend API base URL is resolved in this order:
1. `VITE_API_BASE_URL` at build time (Vite env var)
2. `window.__API_BASE_URL__` at runtime (optional override)
3. Default hardcoded URL in `src/config.ts`

To set via build-time env locally, create a `.env` file:

```bash
VITE_API_BASE_URL=https://your-backend.example.com
```

Or override at runtime (e.g., static hosting):

```html
<script>
  window.__API_BASE_URL__ = 'https://your-backend.example.com';
</script>
```

## GitHub Pages Deployment

This repo is configured to deploy with GitHub Actions to GitHub Pages.

- Vite `base` is set to `/Meditrack_Frontend/` in `vite.config.ts`.
- SPA fallback `public/404.html` is included.
- Workflow file: `.github/workflows/deploy.yml`.

### Steps
1. Push to `master` to trigger the workflow.
2. In GitHub repo Settings → Pages, set Source to "GitHub Actions" (if not already).
3. Your site will be available at:
   - `https://<your-username>.github.io/Meditrack_Frontend/`

### Optional secret variable
If your backend URL differs per environment, add a repository secret and the workflow will inject it during build:

- Secret name: `VITE_API_BASE_URL`
- Value: your backend base URL, e.g. `https://api.example.com`

Add it under: GitHub → Repo → Settings → Secrets and variables → Actions → New repository secret.

The workflow passes this secret to the Vite build so `import.meta.env.VITE_API_BASE_URL` is set.

## Project Scripts

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

## Tech Stack
- React 19
- Vite 7
- TypeScript 5
- Tailwind CSS 4


