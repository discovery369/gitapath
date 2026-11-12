GitaPath polished interactions and navigation — v39

Replace index.html and sw.js in the GitHub repository root.
Keep the existing assets/ folder and all 18 chapter-XX.webp images.

Changes:
- Chapter selector shell and native dropdown now use translucent glass styling; dropdown options use a dark green readable menu palette where supported by the browser.
- Ask Krishna floating button now displays a custom peacock-feather SVG icon.
- Verse description pages now have previous and next navigation controls.
- At a chapter's final verse, the right side shows an END OF [CHAPTER NAME] marker and a CONTINUE TO Chapter [number] · [name] action.
- At the final verse of the Gita, the right side clearly indicates the end of the Bhagavad-Gita.
- Continue reading was moved next to the chapter selector on the chapter image, using matching translucent glass styling.
- Added restrained translucent glass surfaces to key app cards and navigation/detail elements.
- Adjusted control dimensions and typography to avoid overlap on narrow screens.
- Service-worker cache bumped to v39.

Validation:
- The main application JavaScript passed Node syntax validation.
- Live browser/PWA interaction and visual testing on Android remains to be done.
