// (2) Service worker – cache des fichiers de l'application
const staticDevMap = "dev-map-site-v2";      // changer le nom pour forcer la mise à jour
const assets = [
  "./",                      // chemins RELATIFS : l'application est dans un sous-dossier
  "./index.html",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png"
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevMap).then((cache) => cache.addAll(assets))   // « return » implicite
  );
});

self.addEventListener("activate", (event) => {
  // supprime les anciennes versions du cache
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== staticDevMap).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  // stratégie « cache d'abord, réseau ensuite »
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => res || fetch(fetchEvent.request))
  );
});
