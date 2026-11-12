GitaPath v44 — pin the verse image while scrolling

Fix:
- v43 forced the chapter image wrapper to position:relative!important. That prevented the image from remaining pinned.
- v44 changes the image wrapper to position:sticky!important with a top offset below the app header and the All verses control row.
- Previous/Next controls remain absolutely overlaid at the bottom edge of the image.
- Service-worker cache is explicitly gitapath-offline-v44.

Install:
Replace index.html and sw.js in the GitHub repository root (main branch). Keep assets/ unchanged. Commit both files directly to main.

After deployment, clear site data once if the old cached version remains.

Validation:
The exact v43 CSS conflict was located and patched. JavaScript was not changed. Actual sticky positioning still needs confirmation in Chrome Android because the browser's scroll container and header geometry affect sticky offsets.
