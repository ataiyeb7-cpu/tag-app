/* sw.js — GitHub Pages-friendly service worker
   Key idea: NEVER serve a stale cached index.html after a deploy.
   - Navigation requests (HTML) are network-first (fallback to cache if offline)
   - Other assets are cache-first (for offline + speed)
*/

const VERSION = 'v20251228_1';
const STATIC_CACHE = `tagapp-static-${VERSION}`;

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(STATIC_ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k.startsWith('tagapp-static-') && k !== STATIC_CACHE) ? caches.delete(k) : Promise.resolve()));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Treat navigations / HTML as "app shell" — network-first
  const isNavigation = req.mode === 'navigate'
    || (req.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        const cache = await caches.open(STATIC_CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (err) {
        const cached = await caches.match(req);
        return cached || caches.match('./index.html');
      }
    })());
    return;
  }

  // For other same-origin assets: cache-first, then network
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      const cache = await caches.open(STATIC_CACHE);
      cache.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      return cached; // might be undefined
    }
  })());
});
