'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "20b41371cbe6a546bdfd74a1e73ecb78",
"version.json": "c3514585085b99bb528d4a42b3f2ed10",
"index.html": "eb183ae98a89a6bf4bf45ada6088c212",
"/": "eb183ae98a89a6bf4bf45ada6088c212",
"main.dart.js": "f1c771a62a3cb5cd53c45e3b70e71bbf",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "768cfdf60f39aec1ca396dd7d9fda015",
"icons/Icon-192.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/Icon-maskable-192.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/Assets.xcassets/AppIcon.appiconset/1024.png": "ac36f92d39f610e09e7d93ed08424dd6",
"icons/Assets.xcassets/AppIcon.appiconset/76.png": "e8daa4d5318f9b6e986bcd444a09cd74",
"icons/Assets.xcassets/AppIcon.appiconset/60.png": "a6bd9431c87fb687a57e6c7174b5daac",
"icons/Assets.xcassets/AppIcon.appiconset/58.png": "61277e1a046a7b8ce84d0ae421de92ae",
"icons/Assets.xcassets/AppIcon.appiconset/167.png": "e578f74ab245aeb822d141da398c8516",
"icons/Assets.xcassets/AppIcon.appiconset/72.png": "97fa22fdcea067c8afec5aa1fcacf647",
"icons/Assets.xcassets/AppIcon.appiconset/29.png": "9d75f421515e2e54dfca24957dde44cd",
"icons/Assets.xcassets/AppIcon.appiconset/100.png": "552e9309594a39741de99a137fb199fc",
"icons/Assets.xcassets/AppIcon.appiconset/114.png": "a71edd9395882e66149f88b516097e14",
"icons/Assets.xcassets/AppIcon.appiconset/120.png": "da65a44c711f966cf6dbd950a0a43306",
"icons/Assets.xcassets/AppIcon.appiconset/20.png": "78b45378866396ddec5945819cb9d685",
"icons/Assets.xcassets/AppIcon.appiconset/Contents.json": "5b576dd1f8d164cea7a1804348317e76",
"icons/Assets.xcassets/AppIcon.appiconset/180.png": "22329a40a40694a9301295eb43c4f55c",
"icons/Assets.xcassets/AppIcon.appiconset/57.png": "66255e4bea16b019c6e20796edf268e3",
"icons/Assets.xcassets/AppIcon.appiconset/80.png": "cdfdaa292a46a48e221a0a3c291b9c01",
"icons/Assets.xcassets/AppIcon.appiconset/40.png": "0b541e000821aba5676c9f385041bd61",
"icons/Assets.xcassets/AppIcon.appiconset/87.png": "bd136e19e4eb099fe631cec9890f050b",
"icons/Assets.xcassets/AppIcon.appiconset/50.png": "5940ff4e268a93e98ff05391a7bc58ec",
"icons/Assets.xcassets/AppIcon.appiconset/144.png": "897d25d24245cbcd54d95d660c0fcf06",
"icons/Assets.xcassets/AppIcon.appiconset/152.png": "d48a8171fe1284dee14d10a14391f895",
"icons/appstore.png": "ac36f92d39f610e09e7d93ed08424dd6",
"icons/README.md": "04439d76271e5b72820abf20309b3c3b",
"icons/AppIcon.icon/icon.json": "e180133c2e808dcf1d9555afc0bbcbad",
"icons/AppIcon.icon/Assets/icon.png": "9b670ea7510dd04dd915b4faf87e52cb",
"icons/android/mipmap-mdpi/ic_launcher.png": "b6a6cc20d5b88901e7ca3a009967cfd1",
"icons/android/mipmap-hdpi/ic_launcher.png": "5cfa7b42a496dad542310261165ab8f9",
"icons/android/mipmap-xxxhdpi/ic_launcher.png": "32f2377186264d44a63e0c5d9fc9e564",
"icons/android/mipmap-xxhdpi/ic_launcher.png": "e7ba104cc847bc841c6088be5695ce0b",
"icons/android/adaptive-foreground.png": "56fd88c4a5a604522c12c7d41d285b30",
"icons/android/mipmap-xhdpi/ic_launcher.png": "5f7be3edf44e1602577d0133295111c3",
"icons/playstore.png": "768cfdf60f39aec1ca396dd7d9fda015",
"icons/Icon-maskable-512.png": "32f2377186264d44a63e0c5d9fc9e564",
"icons/Icon-512.png": "32f2377186264d44a63e0c5d9fc9e564",
"manifest.json": "b74eb08fab60964671c723ea64699067",
"assets/NOTICES": "9ba357bcbbe08702ef9eb441b2f6851c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e261d55eb378164e9cd9b761c874fd61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "134b1891f3577ceadb58d34b3dd5d530",
"assets/fonts/MaterialIcons-Regular.otf": "404ccb46bf5f1af9d16bc2d4f16042bc",
"assets/assets/sounds/clear-announce-tones-2861.wav": "65a2df7ab7e7c9f59bf0fa6a20ff2a11",
"assets/assets/icon/no-bg.png": "1d1ba227b1beb7904b1895cb080cd129",
"assets/assets/icon/app_icon.png": "9b670ea7510dd04dd915b4faf87e52cb",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
