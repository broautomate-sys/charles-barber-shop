# Charles Barber Shop — organized project

Static vanilla HTML/CSS/JS project reconstructed from the supplied single-file HTML export.

## Structure

- `index.html` — page markup and content
- `assets/css/styles.css` — extracted page styles
- `assets/js/app.js` — extracted inline JavaScript
- `assets/images/` — local copies of every embedded base64 image found in the source
- `assets/data/schema.json` — extracted Schema.org JSON-LD
- `assets/data/images-manifest.json` — image inventory with dimensions and hashes

## Run

Open `index.html` directly in a browser, or serve this folder with any static web server.

The original page uses Google Fonts and Lenis from CDNs; those references are intentionally preserved in `index.html`.
