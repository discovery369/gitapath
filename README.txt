GitaPath pinned verse description navigation — v40

Replace index.html and sw.js in the GitHub repository root.
Keep the existing assets/ folder and all 18 chapter-XX.webp images.

Changes:
- On the verse description screen, the back/action navigation row stays sticky below the app header.
- The chapter artwork stays pinned below that row while scrolling.
- Previous/next verse navigation stays pinned immediately below the artwork.
- The Sanskrit, translation, meaning, notes and attachments continue scrolling underneath.
- Translucent backgrounds, blur and subtle shadows keep pinned controls readable.
- Service-worker cache bumped to v40.

This uses CSS sticky positioning; behavior depends on the app's scroll container and should be checked in Chrome Android after deployment.
