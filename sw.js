self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // We leave this mostly blank because WebRTC needs a live internet connection anyway.
});