// Yaap push service worker.
//
// SCOPE WARNING — do not "simplify" this by registering at the root.
// Flutter registers its own `flutter_service_worker.js` at scope `/` (see the
// `serviceWorkerSettings` block in flutter_bootstrap.js). Two workers cannot
// own one scope: registering this file at `/` would REPLACE Flutter's
// registration and break its asset caching / offline load. So the Dart side
// registers this worker at the narrower scope `push/`, which nothing else
// claims. A push subscription belongs to a *registration*, not to whichever
// worker controls the page, so a non-controlling worker at a sub-scope still
// receives push events perfectly well.

self.addEventListener("install", () => {
  // Don't sit in `waiting` behind a previous version — a vendor should never
  // miss an order because an old worker is still parked.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  // iOS enforces userVisibleOnly strictly: every push MUST result in a shown
  // notification or Safari revokes the subscription after a few violations.
  // So there is no early return in here — every branch ends in
  // showNotification(), including the malformed-payload one.
  let payload = {};
  if (event.data) {
    try {
      payload = event.data.json();
    } catch (_) {
      payload = { title: "Yaap", body: event.data.text() };
    }
  }

  const title = payload.title || "New order";
  const options = {
    body: payload.body || "",
    icon: payload.icon || "icons/Icon-192.png",
    badge: payload.badge || "icons/Icon-192.png",
    // A tag collapses repeats for the same order into one notification
    // instead of stacking; renotify re-alerts the device even when collapsing.
    tag: payload.tag || "yaap-order",
    renotify: true,
    // Ignored on iOS, honoured on desktop Chrome — keeps the order visible
    // until the vendor actually deals with it.
    requireInteraction: true,
    data: {
      url: payload.url || "/",
      orderId: payload.orderId || null,
    },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const data = event.notification.data || {};
  const target = new URL(data.url || "/", self.location.origin).href;

  event.waitUntil(
    (async () => {
      // Prefer surfacing the tab/PWA window that is already open — opening a
      // second window would cold-start Flutter and drop the vendor's place in
      // the app. includeUncontrolled is required: this worker deliberately
      // does not control the page (see the scope note above), so without it
      // matchAll() returns nothing and every tap would open a new window.
      const clientList = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      for (const client of clientList) {
        if ("focus" in client) {
          await client.focus();
          if ("navigate" in client) {
            try {
              await client.navigate(target);
            } catch (_) {
              // Cross-origin or otherwise refused — focusing was the important
              // part, so swallow and leave the client where it was.
            }
          }
          return;
        }
      }

      if (self.clients.openWindow) {
        await self.clients.openWindow(target);
      }
    })(),
  );
});

// The push service can rotate an endpoint out from under us. The old
// subscription is dead at that point and the row in `push_subscriptions` is
// stale, so tell any open client to re-subscribe and re-upsert. If nothing is
// open, PushService.syncExisting() repairs it on next launch.
self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    (async () => {
      const clientList = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const client of clientList) {
        client.postMessage({ type: "yaap-push-resubscribe" });
      }
    })(),
  );
});
