// the cache version gets updated every time there is a new deployment
const CACHE_VERSION = 1;
const CURRENT_CACHE = `spaceXerz-${CACHE_VERSION}`;

// these are the routes we are going to cache for offline support
const cacheFiles = [
  '/',
  './index.html',
  '/public/images/TheNXTfrontier.png',
  '/public/images/xlogo.png',
  '/src/component/App/App.js',
  '/src/component/App/App.css',
  '/src/component/Error/Error.js',
  '/src/component/Error/Error.css',
  '/src/component/Header/Header.js',
  '/src/component/Header/Header.css',
  '/src/component/HistoricalCards/HistoricalCards.js',
  '/src/component/HistoricalCards/HistoricalCards.css',
  '/src/component/HistoricalContainer/HistoricalContainer.js',
  '/src/component/HistoricalContainer/HistoricalContainer.css',
  '/src/component/HomePage/HomePage.js',
  '/src/component/HomePage/HomePage.css',
  '/src/component/RocketCards/RocketCards.js',
  '/src/component/RocketCards/RocketCards.css',
  '/src/component/RocketContainer/RocketContainer.js',
  '/src/component/RocketContainer/RocketContainer.css',
  '/src/images/rocket.png',
  '/src/images/star1.png',
  '/src/images/croppedcloud.png',
  '/src/images/twoPuffyStuffs.png',
  '/src/images/unsaved-purple.png',
  '/src/images/saved-purple.png',
];

// on activation we clean up the previously registered service workers
self.addEventListener('activate', evt =>
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
);

// on install we download the routes we want to cache for offline
self.addEventListener('install', evt =>
  evt.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll(cacheFiles);
    })
  )
);

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
      update(request);
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || cache.match('/offline/'))
    );

// cache the current page to make it available for offline
const update = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fromNetwork(evt.request, 10000).catch(() => fromCache(evt.request))
  );
  evt.waitUntil(update(evt.request));
});











// ___________OG SERVICE WORKER________



// let CACHE_NAME = 'Space-Xr';
// const urlsToCache = [
//   '/',
//   './index.html',
//   './offline.html',
//   '/public/images/TheNXTfrontier.png',
//   '/public/images/xlogo.png',
//   '/src/component/App/App.js',
//   '/src/component/App/App.css',
//   '/src/component/Error/Error.js',
//   '/src/component/Error/Error.css',
//   '/src/component/Header/Header.js',
//   '/src/component/Header/Header.css',
//   '/src/component/HistoricalCards/HistoricalCards.js',
//   '/src/component/HistoricalCards/HistoricalCards.css',
//   '/src/component/HistoricalContainer/HistoricalContainer.js',
//   '/src/component/HistoricalContainer/HistoricalContainer.css',
//   '/src/component/HomePage/HomePage.js',
//   '/src/component/HomePage/HomePage.css',
//   '/src/component/RocketCards/RocketCards.js',
//   '/src/component/RocketCards/RocketCards.css',
//   '/src/component/RocketContainer/RocketContainer.js',
//   '/src/component/RocketContainer/RocketContainer.css',
//   '/src/images/rocket.png',
//   '/src/images/star1.png',
//   '/src/images/croppedcloud.png',
//   '/src/images/twoPuffyStuffs.png',
//   '/src/images/unsaved-purple.png',
//   '/src/images/saved-purple.png',
// ];

//     const self = this;

//     self.addEventListener('install', function(event) {
//       event.waitUntil(
//         caches.open(CACHE_NAME)
//           .then(function(cache) {
//             console.log('Opened cache');
//             return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//       caches.match(event.request)
//         .then(() => {
//           return fetch(event.request)
//             .catch(() => caches.match('offline.html'))
//       })
//     );
//   });

//   self.addEventListener('activate', (event) => {
//     const cacheWhiteList = []
//     cacheWhiteList.push(CACHE_NAME)

//     event.waitUntil(
//       caches.keys()
//         .then((cacheNames) => Promise.all(
//           cacheNames.map((cacheName) => {
//             if(!cacheWhiteList.includes(cacheName))
//               return caches.delete(cacheName)
//           })
//         ))
//     )
//   })


