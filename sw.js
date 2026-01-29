self.addEventListener('install', (e) => {
  console.log('[Service Worker] Honorarios Instalado');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});