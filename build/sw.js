importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

// Custom adjust

// Cacher vores api
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

// Cacher vores routes
workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "bb5c5e249467c6a646c23031d247b26d"
  },
  {
    "url": "index.html",
    "revision": "4e824d481b4654f08c49ccab57d904b3"
  },
  {
    "url": "js/app.js",
    "revision": "f7b5d365f73587d7774937b5f54485be"
  }
]);