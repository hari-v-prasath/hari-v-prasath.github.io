# Hari Prasath — Portfolio Site

A single-page developer portfolio built with plain HTML/CSS/JS (no build step, no
dependencies beyond two Google Fonts). Designed to deploy directly on GitHub Pages.

## Files

- `index.html` — all content (summary, experience, projects, stack, system design, contact)
- `style.css` — design system (navy/amber/teal palette, JetBrains Mono + Inter)
- `script.js` — live IST clock in the status bar + scroll-reveal animation
- `resume.pdf` — downloadable resume (linked from the nav bar)

## Deploy to GitHub Pages — Option A (recommended): user site

This gives you the cleanest possible URL: `https://hariprasath596.github.io`

1. On GitHub, create a **new repository** named exactly: `hariprasath596.github.io`
   (must match your username exactly, including case)
2. Do **not** initialize it with a README (keep it empty)
3. On your computer, open a terminal in this folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/hariprasath596/hariprasath596.github.io.git
   git push -u origin main
   ```

4. Go to the repo on GitHub → **Settings → Pages**
5. Under "Build and deployment", Source should already be set to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Click **Save** if it wasn't already set.
6. Wait 1–2 minutes, then visit **https://hariprasath596.github.io**

No further Pages configuration is needed for a repo named `<username>.github.io` — GitHub
auto-publishes it from the `main` branch root.

## Deploy to GitHub Pages — Option B: project site

If you'd rather keep this in a repo called something else, e.g. `portfolio`:

1. Create a repo named `portfolio` (or any name you like)
2. Push these files to it the same way as above, but with that repo's URL
3. Go to **Settings → Pages** → under Source, choose branch `main`, folder `/ (root)` → **Save**
4. Your site will be live at **https://hariprasath596.github.io/portfolio**

## Updating the site later

Whenever you want to change content (new project, updated role, etc.), edit `index.html`
directly, then:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Pages redeploys automatically within a minute or two of every push.

## Replacing the resume PDF

If you update your resume, just replace `resume.pdf` in this folder with the new file
(keep the same filename) and push again — the download link in the nav bar will pick up
the new file automatically.

## Notes

- The GitHub link in the hero buttons points to `https://github.com/hariprasath596` —
  double check this is correct, or update it in `index.html` if your profile URL differs.
- The site has no analytics, tracking, or external services beyond Google Fonts — nothing
  to configure, no API keys, no privacy policy needed.
- Fully responsive down to mobile; tested layout collapses gracefully under ~640px.
