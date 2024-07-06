self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('staticAssetsCache').then(function(cache) {
      return cache.addAll(
        [
          'index.js',
          'index.html',
          'style.css',
          'ball.svg',
          'button.svg',
          'ring.svg',
          'shell.svg',
          'star.svg',
        ]
      );
    })
  );
});
