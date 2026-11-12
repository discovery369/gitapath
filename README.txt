GitaPath v41 — sticky verse layout repair

Changes:
- Removed overflow-x:hidden from the detail view (it can create an unintended scrolling ancestor and prevent position:sticky from following the page scroll).
- Removed the 3D transform/will-change from the detail content wrapper, which was an ancestor of the sticky image and navigation.
- Kept a subtle fade transition when changing verses instead of transforming the entire content wrapper.
- Adjusted sticky offsets to sit below the app header.
- Bumped the service-worker cache version to v41.

Install:
1. Extract this ZIP.
2. In the GitHub repository root, replace index.html and sw.js with these two files.
3. Keep the existing assets/ folder unchanged.
4. Commit/push to main.
5. On Android Chrome, reload the site. If the old layout remains, clear the site's cached data once or wait for the service-worker update.

Validation:
- This package was checked for JavaScript syntax where possible.
- Sticky behavior still needs confirmation in Chrome on the actual phone; it cannot be fully verified from screenshots alone.
