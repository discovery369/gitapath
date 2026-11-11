GitaPath image-overlay controls update — v30

Replace these files in the GitHub repository root:
- index.html
- sw.js

Keep the existing assets/ folder and all chapter-01.webp through chapter-18.webp files.

Changes:
- The chapter selector stays above the full-width chapter image.
- Five translucent controls are overlaid at the bottom-right of the image:
  1. Closed book: all verses
  2. Open book with green left page: read verses
  3. Open book with clear pages: unread verses
  4. Heart: favourites
  5. Magnifier: reveal the search field
- The icons use a translucent glass-like background so the artwork remains visible.
- The old separate filter buttons are hidden; the existing filter logic is reused.
- Service-worker cache is bumped to gitapath-offline-v30.

After committing index.html and sw.js, wait for GitHub Pages to deploy, then refresh the app.
