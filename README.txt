GitaPath — Telugu App Localization + Verse Batch 1

This update builds on the latest GitaPath Telugu Batch 3 package and retains its offline PWA shell, Ask Krishna feature, notes/attachments, swipe navigation and page-turn animation.

Included in this release
- Central language/localization layer used by static and dynamically rendered app text.
- Telugu interface translations for the available common labels, navigation items, reading controls, notes/attachments and Ask Krishna interface. Untranslated interface strings remain in English rather than being guessed.
- Telugu verse translation drafts for 50 actual verse records: Bhagavad-gita 1.1–1.45 and 2.1–2.5. The edition's 1.46 item is chapter-level commentary, not a verse, so it is not counted in the 50.
- Telugu-script rendering of the Roman Sanskrit transliteration for Telugu selection. Original Sanskrit data and English source translations remain unchanged.
- English remains the default. Other languages remain selectable, but until their packs are added they use English fallback. Existing Hindi draft data (20 records) is retained, but this release's new batch is Telugu-first.
- Notes, favourites, reading progress and attachments remain stored locally and are not cleared by language switching.
- Offline service-worker cache updated to v7.

Important translation note
Telugu verse and interface translations are machine-generated drafts and should be reviewed by a fluent Telugu/Sanskrit reviewer before scholarly or publication use. This package does not claim that all 700 verses or every app string have been translated. Missing translations visibly fall back to English.

Install/update
1. Back up the current repository files.
2. Extract this ZIP.
3. Replace the repository-root index.html and sw.js with the included files.
4. Commit and push to the GitHub Pages main branch.
5. Open the site once online so the updated service worker installs; if an old cached screen remains, close and reopen the PWA after the cache refresh.
