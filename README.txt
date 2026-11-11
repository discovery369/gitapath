GitaPath cache refresh — v27

Upload/replace these two files in the ROOT of your GitHub repository (main branch):
  index.html
  sw.js

Keep your existing assets folder and its images unchanged. The app expects:
  assets/chapter-01.webp through assets/chapter-18.webp

The index.html is included unchanged from the supplied v26 project because its
chapter image paths already match the filenames shown in your GitHub screenshot.
The actual fix is in sw.js: cache version v27 and a forced fresh fetch of the
app shell and all 18 illustrations during service-worker installation.

After committing both files, wait for GitHub Pages deployment to finish. Then
open the site in Chrome and refresh. If the old artwork remains, close all
GitaPath tabs, reopen the site, and refresh once more so the v27 service worker
can take control. The next successful load should also have the artwork cached
for offline use.
