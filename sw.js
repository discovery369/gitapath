/* GitaPath service worker — v40
 * Forces a fresh fetch of the app shell and all 18 chapter illustrations
 * during installation, then keeps them available for offline use.
 */
const CACHE_NAME = 'gitapath-offline-v44';
const CHAPTER_ART = Array.from(
  { length: 18 },
  (_, i) => `./assets/chapter-${String(i + 1).padStart(2, '0')}.webp`
);
const APP_SHELL = ['./', './index.html', ...CHAPTER_ART];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // cache: 'reload' bypasses the browser's ordinary HTTP cache so updated
    // GitHub Pages images are fetched instead of reusing old image responses.
    await Promise.all(APP_SHELL.map(async path => {
      const request = new Request(path, { cache: 'reload' });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`Could not precache ${path}: ${response.status}`);
      await cache.put(request, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('gitapath-offline-') && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch (error) {
      if (event.request.mode === 'navigate') {
        return (await cache.match('./index.html')) || Response.error();
      }
      return Response.error();
    }
  })());
});
