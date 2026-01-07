const CACHE_NAME = 'examens-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/documents.html',
  '/styles.css',
  '/logo_ecole.png'
];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepter les requêtes et servir depuis le cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
