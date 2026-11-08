GitaPath — Ask Krishna update

Files to replace in the root of the GitHub Pages repository:
- index.html
- sw.js

Upload both files to the repository root, replacing the existing versions, then commit the changes. The service worker cache version is bumped so the updated app shell is fetched on the next visit.

Ask Krishna works offline. It matches the user's question against a curated set of themes and selects a Krishna-spoken verse, an explanation, a Gita example, and (where relevant) an explanation of how Arjuna faced a related question. It does not call an AI service or send the question anywhere. For a question outside the curated themes, it offers a general teaching on steadiness.
