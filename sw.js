/* ============================================================
   SERVICE WORKER — membuat Akademi bisa dibuka TANPA INTERNET.

   Cara kerjanya: saat pertama dibuka secara online, semua berkas
   materi disalin ke penyimpanan browser. Kunjungan berikutnya
   dilayani dari salinan itu, jadi tetap jalan walau offline.

   PENTING saat memperbarui materi: naikkan angka VERSI di bawah.
   Tanpa itu, pengguna lama akan tetap melihat materi versi lama.
   ============================================================ */

const VERSI = "akademi-v8";

const BERKAS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/data/ai-course.js",
  "./js/data/blockchain-course.js",
  "./js/data/accounting-course.js",
  "./js/visuals.js",
  "./js/app.js",
  "./js/sesi.js",
  "./js/pwa.js",
  "./js/tampilan.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
];

/* Pasang: simpan semua berkas ke cache */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(VERSI)
      // addAll gagal total bila satu berkas meleset, jadi disimpan satu per satu
      .then((cache) =>
        Promise.all(
          BERKAS.map((url) =>
            cache.add(new Request(url, { cache: "reload" })).catch(() => null)
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

/* Aktif: buang cache versi lama */
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((nama) => Promise.all(nama.filter((n) => n !== VERSI).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* Ambil berkas: utamakan cache, lalu jaringan */
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Permintaan membuka halaman: coba jaringan dulu (agar dapat versi baru),
  // kalau gagal (offline) pakai index.html yang tersimpan.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const salinan = res.clone();
          caches.open(VERSI).then((c) => c.put("./index.html", salinan));
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((tersimpan) => {
      if (tersimpan) return tersimpan;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const salinan = res.clone();
            caches.open(VERSI).then((c) => c.put(req, salinan));
          }
          return res;
        })
        .catch(() => tersimpan);
    })
  );
});

/* Halaman bisa meminta pembaruan segera */
self.addEventListener("message", (e) => {
  if (e.data === "perbarui-sekarang") self.skipWaiting();
});
