# Honglin (Henry) Du — personal website

Bilingual academic and data science portfolio hosted on GitHub Pages.

- `index.html`: English homepage (default).
- `zh.html`: Chinese homepage.
- `styles.css`: responsive layout and visual styling.
- `site.js`: preserves the current section when changing languages.
- `assets/`: supplied personal photograph and original English/Chinese CVs.

## Update

Edit the corresponding section in both HTML files to keep translations aligned. Replace the PDFs under `assets/` to update the downloadable CVs. Update manuscript statuses in both languages when review outcomes change. The English CV includes the user-confirmed Duke date correction (Aug. 2017 to May 2019); the Chinese CV is unchanged.

## Preview

Run `python3 -m http.server 8000` in this directory and open `http://localhost:8000`.

## Deployment

GitHub Pages serves the root of the `main` branch. No build dependencies or external font services are required. `.nojekyll` enables direct static hosting.

All personal materials remain the property of their owner.
