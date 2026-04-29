self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // Left mostly blank because WebRTC relies on an active internet connection.
    // This file just validates the PWA requirements.
});