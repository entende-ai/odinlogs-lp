# Odinlogs Landing Page

A responsive, single-page marketing website for Odinlogs.

## Files

- `index.html` — production-ready static landing page
- `odinlogs-mark.png` — transparent Odinlogs brand mark
- `preview.png` — desktop preview

## Run locally

Open `index.html` directly in your browser, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

The folder can be deployed as-is to Cloudflare Pages, Vercel, Netlify, GitHub Pages, an S3-compatible bucket, or any conventional web server.

## Integration notes

The early-access form currently demonstrates the front-end success state only. Connect the submit handler to your preferred form endpoint, CRM, or API before production use.

## Deploy

Hosted on Cloudflare Workers (static assets) at `odinlogs.com`; `www` redirects to the apex.

```bash
npx wrangler deploy
```
