GitaPath v43 — image overlay and refresh restoration

Fixes:
1. Previous/Next Description controls are forced to render as an overlay inside the chapter image at its bottom edge. The image wrapper is explicitly a positioned, clipped 16:9 block and the navigation is absolutely positioned within it.
2. The app saves the active view, verse ID, and page scroll position in sessionStorage. Refreshing the same browser tab restores the open verse and approximate reading position instead of returning to Home.
3. Cache version bumped to v43.

Install:
- Replace index.html and sw.js in the GitHub repository root.
- Keep assets/ unchanged.
- Commit/push to main, then reload the site. If an older cached build persists, clear the site's cached data once.

Notes:
- Session restoration is per browser tab/session on the same device. It does not sync between devices.
- Syntax/markup checks are performed on the package; final visual behaviour must be confirmed in Chrome on your phone.
