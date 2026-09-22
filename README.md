# Frank Solomon Marvelous Portfolio

A Vite-powered vanilla JavaScript portfolio site, ready to deploy to Vercel.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

The repository includes `vercel.json` with the following deployment settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Dashboard

Import the repository in Vercel and deploy with the detected settings. No environment variables are required.

### Vercel CLI

```bash
npm install --global vercel
vercel
vercel --prod
```
