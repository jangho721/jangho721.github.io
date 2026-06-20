# jangho721.github.io

Personal portfolio site. A single-page static site built with plain HTML
and Tailwind CSS, deployed on GitHub Pages.

## Stack

- HTML + [Tailwind CSS](https://tailwindcss.com/) v4
- GitHub Actions for build & deploy

## Development

```sh
npm install
npm run watch   # rebuild assets/css/style.css on change
```

Serve `index.html` with any static file server, e.g.:

```sh
python3 -m http.server
```

## Build

```sh
npm run build
```

Compiles `src/input.css` into `assets/css/style.css`.

## Local checks

`npm install` sets `core.hooksPath` to `.githooks/`, so a `pre-push` hook
runs automatically before every push: it rebuilds the CSS and runs the
same [lychee](https://github.com/lycheeverse/lychee-action) broken-link
check used in CI (`.github/workflows/broken-links.yml`), so failures are
caught locally first. Install lychee with `brew install lychee` for the
link check to run (it's skipped with a warning if missing).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs
dependencies, builds the CSS, assembles a clean `dist/` (`index.html`,
`robots.txt`, `assets/`), and publishes it via GitHub Pages.

Requires the repo's **Settings → Pages → Source** to be set to
**GitHub Actions**.

## Project structure

- `index.html` — the site
- `src/input.css` — Tailwind entry point and theme tokens
- `assets/` — images, compiled CSS, PDFs
- `content-reference/` — archived content from the previous Jekyll/al-folio
  version of this site, kept for reference only (not deployed)
