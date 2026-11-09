GitaPath v25 — 18 Chapter Illustrations

This package builds on GitaPath v24 and adds one original, chapter-specific illustration for each of the Bhagavad-gita's 18 chapters.

What changed:
- Added 18 separate optimized WebP images in assets/ (chapter-01.webp through chapter-18.webp).
- Each chapter tile in the Chapters view displays its own illustration.
- Every verse detail view displays the illustration for that verse's chapter, so all verses in the same chapter share the same chapter art.
- Accurate chapter names remain rendered by the app; generated lettering from the artwork has been cropped out.
- Updated the service worker to v25 and precaches all 18 images for offline use.
- Existing verse data, translations, Ask Krishna, favourites, notes, attachments, reading progress and language features are preserved from v24.

Install/update:
1. Extract this ZIP.
2. Upload/replace index.html and sw.js in the root of the GitHub Pages repository.
3. Upload the entire assets folder (including all 18 WebP files) to the repository root, keeping the folder name exactly "assets".
4. Commit and push to the main branch.
5. Open the website online once and allow the new service worker to install, then close and reopen the installed PWA.

Offline note: all 18 images are included in the service-worker precache list. The initial update requires an internet connection so the new assets can be downloaded.

Validation performed: all 18 image files exist and are referenced by the app; all 700 verse records are retained; JavaScript syntax and ZIP integrity are checked. This package has not been deployed to GitHub Pages or tested on a physical Android device.
