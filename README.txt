GitaPath — Language Selector Freeze + Random Wisdom Fix

Fixes
1. Language selector freeze: the localization MutationObserver previously rewrote already-translated text nodes, triggering itself repeatedly. The renderer now writes only when text actually changes.
2. Random translated verse: the hero now prefers Krishna-spoken verses that have an actual translation in the selected language. Telugu Batch 1 includes Krishna-spoken verses 2.2 and 2.3, so these are used for the Telugu hero until later batches add more.
3. Initial display: a random wisdom verse is rendered immediately at startup, not only after the visibility observer callback.
4. Offline cache: service-worker cache version bumped to v8.

Install
- Back up your current repository files.
- Extract this ZIP and replace repository-root index.html and sw.js.
- Commit and push to the main branch.
- Open the site online once, wait for the cache update, then close and reopen the installed app.
- If the old version remains, clear the site's cached data in Chrome and reopen.

Telugu verse translations remain machine-generated drafts and should be reviewed by a fluent Telugu/Sanskrit reviewer. This hotfix fixes the freeze and hero display; it does not add more translated verses.
