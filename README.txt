GitaPath chapter spotlight update — v28

Files to replace in the GitHub repository root:
- index.html
- sw.js

What changed:
- Explore the verses now displays only one selected chapter at a time.
- A chapter dropdown replaces the horizontal row of all chapter chips.
- The selected chapter's 16:9 artwork is shown in a sticky panel.
- The artwork panel stays pinned below the app header while the verse list scrolls.
- Selecting a different chapter updates the artwork, title, and verse list.
- Service-worker cache version is bumped to v28.

Keep the existing assets folder and all 18 chapter-XX.webp files in place.
Do not upload the empty assets folder from this ZIP over your existing assets.
After committing index.html and sw.js, wait for GitHub Pages deployment, then refresh the site.
