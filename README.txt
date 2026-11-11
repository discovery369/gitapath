GitaPath home chapter image sizing correction — v35

Replace index.html and sw.js in the GitHub repository root.
Keep the existing assets/ folder and all 18 chapter-XX.webp images.

Change:
- Home-page chapter image now uses the same sizing rules as the verse-detail image:
  width: 100% of the content column, 16:9 aspect ratio, 18px rounded corners,
  neutral background, and object-fit: contain.
- Removed the full-viewport bleed from the home-page image so it no longer appears
  substantially wider/larger than the image on the opened verse page.
- Chapter selector and four remaining translucent toolbar icons stay overlaid.
- Service-worker cache bumped to v35.

The app JavaScript is unchanged in this update.
