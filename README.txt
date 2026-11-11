GitaPath search and compact chapter artwork controls — v34

Replace index.html and sw.js in the GitHub repository root.
Keep the existing assets/ folder and all 18 chapter-XX.webp images.

Changes:
- Removed the magnifying-glass search control from the chapter image toolbar.
- Added a chapter search field to the Chapters page.
- Added search fields to Saved/Favourites and Notes pages.
- Search results update as the user types; clear buttons are included.
- Reduced the chapter selector and image toolbar height to approximately half of v33.
- Reduced icon sizes and spacing to match the compact toolbar.
- Chapter artwork now uses the same 16:9 contain presentation as the opened-verse detail image, rather than cropping with cover.
- Service-worker cache bumped to v34.

JavaScript syntax check passed for the app script.
