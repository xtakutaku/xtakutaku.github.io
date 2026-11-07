# Housebets sportsbook

A static, clickable sportsbook prototype. All events, odds and balances are demonstration data. No login, backend, npm installation or build step is required.

## Publish on GitHub Pages

1. Upload the contents of this folder to your GitHub repository. Keep `index.html` at the repository root, alongside the JavaScript, CSS and `assets` folder. Include `.nojekyll` when using Git.
2. Open **Settings > Pages** in the repository.
3. Choose **Deploy from a branch**, select your uploaded branch (usually `main`) and **/(root)**, then save.
4. Open the published URL shown by GitHub once deployment finishes.

The relative asset paths and hash-based navigation support both `username.github.io` and `username.github.io/repository-name/`. No custom routing or GitHub Actions workflow is needed.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

From this folder, run `python -m http.server 4173`, then open `http://localhost:4173`. JavaScript modules require HTTP; opening `index.html` directly as a local file is not supported.

## Files

- `index.html`: page entry point.
- `app.js`, `data.js`, `motion.js`: interface, sample fixtures and motion.
- `ui.css`, `site.css`, `experience.css`: compiled controls and site styling.
- `assets/`: required images, club crests, local Manrope font and license notices.
- `.nojekyll`: serves the site as static files.

Keep the assets and license notices together with the site. Git metadata is local repository history and is not part of a file upload. Demo bets and preferences are stored in each visitor's browser.
