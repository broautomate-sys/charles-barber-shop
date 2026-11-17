# Charles Barber Shop Mannheim

Organized local project extracted from the supplied single-file HTML website.

## Project structure

```text
charles-barber-shop-project/
├── index.html                 # Website entry point
├── README.md                  # Project notes and run instructions
├── original/
│   └── source.html            # Untouched uploaded source
└── assets/
    ├── css/
    │   └── styles.css         # Extracted CSS, kept in original cascade order
    ├── js/
    │   ├── inline-01.js       # Extracted inline scripts in source order
    │   └── ...
    └── images/
        ├── image-001.png      # Extracted embedded images
        ├── ...
        └── manifest.json     # Image dimensions, format, and hashes
```

## Run locally

Open `index.html` in a modern browser, or serve this folder with a local HTTP server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Notes

- The original HTML is preserved in `original/source.html`.
- Embedded base64 raster images were extracted into `assets/images/` and references in the working HTML were rewritten to local paths.
- Repeated identical image payloads are stored once; `manifest.json` records the number of occurrences and unique files.
- The site still references Google Fonts and external destinations (such as Google Maps, WhatsApp, and social profiles), so those features may require an internet connection.
- No visual redesign was applied. CSS blocks and JavaScript blocks were separated while preserving their source order.
