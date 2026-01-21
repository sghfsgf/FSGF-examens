const CACHE_NAME = 'examens-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './examens.html',
  './surveillances.html',
  './reclamations.html',
  './ressources.html',
  './styles.css',
  './logo_ecole.png',

  // PDF Examens
  './examens_L1.pdf',
  './examens_L2.pdf',
  './examens_L3.pdf',
  './examens_masters.pdf',
  './examens_complet.pdf',
  './reglement_examens.pdf',

  // PDF & Excel Surveillances / Ressources
  './liste_enseignants.pdf',
  './Dep_SV.xlsx',
  './Dep_ST.xlsx',
  './Dep_INFO.xlsx',
  './Dep_CH.xlsx',
  './Dep_PHYS.xlsx',
  './Dep_FT.xlsx',
  './Dep_MATHS.xlsx'
];

// Installer le service worker et mettre en cache tous les fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activer le service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Intercepter les requêtes et servir depuis le cache si disponible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
