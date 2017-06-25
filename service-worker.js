/**
 * Created by etienne on 14/05/2017.
 */
var CACHE_NAME = 'my-cache-v1';
var urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/dist/build.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }

                    // use the network to fetch request
                    return fetch(event.request);


                }
            )
    );
});

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    return false;
});

btnSave.addEventListener('click', function() {
    if(deferredPrompt !== undefined) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(function(choiceResult) {
            if(choiceResult.outcome == 'accepted') {
                console.log('App added to home screen');
            } else {
                console.log('User cancelled home screen install');
            }

            deferredPrompt = null;
        });
    }
});