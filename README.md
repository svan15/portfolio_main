# Minimal Developer Portfolio UI

SvelteKit 2 + Svelte 5 + Tailwind CSS 4. Static-site ready.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite displays (usually http://localhost:5173).

## Personalize

- Update placeholder text, project data, skills, links, and email in `src/routes/+page.svelte`.
- Replace `static/profile-placeholder.svg` with your own photo, then update the `<img src>` in `src/routes/+page.svelte` to `/your-photo.jpg`.
- Update your document title and meta description.
- Project cards currently use illustrative typography rather than real screenshots. Replace with your own when ready.

## GitHub Pages (later)

This project uses adapter-static and prerendering. For a repository-based GitHub Pages URL, build with `BASE_PATH=/repository-name npm run build` on a Unix-like shell or set `BASE_PATH` in your GitHub Actions workflow. A custom domain or `username.github.io` repository can use an empty base path. GitHub Actions publishing can be configured after content is finalized.

Note: All social links and email addresses are placeholders. There is no backend or contact form.
