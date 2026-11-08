GitaPath language-selector foundation

Files:
- index.html: complete current GitaPath app with embedded 700-verse data and the language selector.
- sw.js: offline app-shell service worker.

Language selector:
- English is the default.
- Includes Indian, major world, Nordic, Dutch, Icelandic, and African languages.
- Selection is saved on the device.
- Until each translation pack is completed and bundled, English source translations remain visible and the app clearly says so. No English text is mislabeled as a translation.

Important:
This update establishes the language-selection and offline-pack foundation. It does NOT yet contain the full 700-verse Telugu, Hindi, or other-language translations, nor script-converted transliterations. Those need to be generated, reviewed in batches, and added as local language packs.

To update the GitHub Pages app:
1. Replace the repository's root index.html with this index.html.
2. Add/replace the root sw.js with this sw.js.
3. Commit and push to the main branch.
4. Open the website once online so the new app shell is cached. Then it can reopen offline.
5. If an older version remains, clear the site's cached data or refresh after the service worker updates.
