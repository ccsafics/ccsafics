// Service worker mínimo: solo habilita que la app sea instalable.
// No cachea nada de forma agresiva para que los mensajes y respuestas
// siempre se vean actualizados (vienen de Firestore, no de caché).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Passthrough: deja que todo se pida normal a la red.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
