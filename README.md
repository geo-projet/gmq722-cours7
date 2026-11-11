# GMQ 722 – Cours 7 : exemples de cartographie web

Exemples de code du cours **GMQ 722 – Géovisualisation et géopositionnement** (Université de Sherbrooke, automne 2026), cours 7 « La cartographie web, partie 3 ».

**Page d'accès :** https://geo-projet.github.io/gmq722-cours7/

| Dossier | Contenu |
|---|---|
| `googlemaps/` | Maps JavaScript API (chargement `importLibrary`, `AdvancedMarkerElement`, couche Data + GeoJSON) |
| `openlayers/` | OpenLayers 10.11 : fonds de carte, WMS, WFS, projections, contrôles, interactions, GeoJSON |
| `pwa/apps1`, `pwa/apps2` | Applications web progressives (manifeste, service worker, géolocalisation) |
| `autres/` | La même carte avec Leaflet 1.9.4 et MapLibre GL JS 5 |
| `iag/` | Page générée avec l'IA générative et l'invite utilisée |

## Utiliser les exemples sur votre poste

```bash
python -m http.server
# puis ouvrir http://localhost:8000
```

En `file://`, les fichiers GeoJSON et les service workers ne se chargent pas. Les PWA et la géolocalisation exigent HTTPS (ou `localhost`).

## Services et données

- WMS de RNCan (GéoGratis) : `https://cartes.geogratis.gc.ca/wms/roads_fr`, `hydro_network_fr`
- WMS/WFS de Transports Québec : `https://ws.mapserver.transports.gouv.qc.ca/swtq` (couche `ms:villagerelais`)
- Fonds : © contributeurs OpenStreetMap · Stamen / Stadia Maps · Sentinel-2 cloudless – s2maps.eu (EOX, CC BY-NC-SA 4.0) · OpenFreeMap

## Clé Google Maps

Les exemples Google Maps contiennent une clé API de démonstration. Une clé Maps JavaScript est toujours visible dans le code d'une page web : elle doit être **restreinte par référent HTTP** (console Google Cloud) aux domaines autorisés. Pour vos propres travaux, créez votre clé.

Mickaël Germain — Département de géomatique appliquée, FLSH / CARTEL, Université de Sherbrooke.
