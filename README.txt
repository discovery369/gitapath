GitaPath repair update — v32

Replace index.html and sw.js in the GitHub repository root.
Keep the existing assets/ folder and all 18 chapter-XX.webp images.

Repair:
- The v31 layout removed the progress-statistics elements and Explore heading, but existing JavaScript still expected some of those elements to exist.
- That caused a startup exception, which stopped verse rendering and left the chapter selector/event wiring incomplete.
- v32 makes the removed progress elements optional and safely skips the removed Chapters heading button.
- Verse list rendering and chapter selector initialization can now continue without those removed elements.
- Search/filter controls and the chapter selector remain in their requested positions.
- Service-worker cache bumped to v32.

After committing both files, wait for GitHub Pages deployment. Then close the installed PWA/browser tab and reopen the site. If an old screen remains, refresh once more after the new service worker activates.
