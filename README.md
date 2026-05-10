# E-Portfolio — Eziuche Emmanuel

**MSc Artificial Intelligence**, University of Essex — academic portfolio for GitHub **Pages** (static HTML, no build step). The visual design is **[Forty](https://html5up.net/forty)** by [HTML5 UP](https://html5up.net), used under the [CCA 3.0 licence](https://html5up.net/license). See `LICENSE.html5up-forty.txt` in this folder for the template licence text.

## Site structure

| Path | Purpose |
|------|---------|
| `index.html` | Home (Forty banner + tiles) |
| `about.html` | About Me / CV-style sections |
| `modules/index.html` | Module hub (Forty tile grid like home — add a tile per module) |
| `modules/launch-into-computing.html` | Your current module portfolio page |
| `modules/module-template.html` | Blank module page — duplicate for each new module |
| `modules/module-example.html` | Example content (optional reference) |
| `modules/artefacts/*.html` | One **detail page per artefact** (linked from the module table) |
| `modules/artefacts/artefact-template.html` | Copy when you add a new artefact page |
| `assets/css/main.css` | Forty theme (imports Font Awesome) |
| `assets/css/portfolio.css` | Small overrides (skip link, tables) |
| `assets/js/*.js` | Forty behaviour (menu, scroll, breakpoints) |
| `assets/js/menu-drawer.js` | Slide-out menu items: edit the `MODULES` array when you add a module page |
| `assets/webfonts/*.woff2` | Font Awesome webfonts (icons) |
| `images/` | Banner and tile images (`banner.jpg`, `pic01.jpg`, …) — replace with your own if you prefer |
| `artefacts/` | Optional PDFs or files linked from module pages |
| `tools/visual-editor.html` | Optional **drag-and-drop** HTML builder (open in browser; needs internet for CDN) |

Each module page includes: learning outcomes, artefacts (with feedback), reflection, meeting notes, and a professional skills matrix with an action plan.

## Publish on GitHub Pages

1. Create a new repository on GitHub and push this folder (or use “Upload files”).
2. In the repository on GitHub: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** (or **master**) and folder **`/ (root)`**, then save.

After a minute or two, your site will be available at:

`https://<your-username>.github.io/<repository-name>/`

If the site looks unstyled, confirm `assets/css/main.css` is on the default branch and the URL includes your repository name in the path.

## Customising

- Replace placeholder text in `about.html` and on each module page.
- On `modules/index.html`, copy an existing **tile** (`<article>…</article>`) per module and set the link and text to your new HTML file.
- Duplicate `modules/module-template.html`, rename it (e.g. `nlp.html`), update the `<title>` and `<h1>`, add a tile on `modules/index.html`, and add an entry to the `MODULES` array in `assets/js/menu-drawer.js` so the new module appears in the slide-out **Menu**.
- **Artefacts:** copy `modules/artefacts/artefact-template.html`, save as a new file in `modules/artefacts/`, fill in the content, then in the module’s **Artefacts** table use `<a href="artefacts/your-file.html">Visible title</a>` in the first column.
- Swap images in `images/` for your own (keep filenames or update `src` in `index.html` / `about.html`). Placeholder images were downloaded from [Picsum Photos](https://picsum.photos).

## Academic integrity

Only publish artefacts, feedback, and meeting content you are **permitted** to share. When in doubt, ask your tutor or programme handbook.
