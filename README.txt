GitaPath — Telugu review + reading-progress controls hotfix

This package is based on the corrected Batch 10 source (650 Telugu verse records).

Changes in this hotfix:
- Added a Mark read / Mark unread control for the currently open verse and for each verse card.
- Added Mark unread for each chapter in the Chapters screen.
- Added Mark all chapters unread, which clears read markers for all 700 verse records. Notes, attachments and favourites are preserved.
- Improved IAST-to-Telugu-script transliteration handling for Sanskrit aspirates, retroflex consonants, long vowels, anusvāra, visarga, avagraha and danda punctuation.
- Bumped the offline service-worker cache to v16.

Translation coverage remains 650/700. The 100 Telugu entries added in Batch 10 cover the records through 18.28. The final 50 entries (18.29–18.78) still need the next translation batch. The Telugu translations are machine-generated drafts and need fluent Telugu and Bhagavad-gita subject review; this hotfix does not claim scholarly verification.

Install: replace index.html and sw.js in the GitHub Pages repository root, commit and push to main, open the site online once, then close and reopen the installed PWA.
