self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('staticAssetsCache').then(function(cache) {
      return cache.addAll(
        [
          '/index.js',
          '/index.html',
          '/style.css',
        ]
      );
    })
  );
});
