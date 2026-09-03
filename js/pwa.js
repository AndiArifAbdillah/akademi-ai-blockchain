/* ============================================================
   PWA.JS — mendaftarkan service worker, tombol "Pasang aplikasi",
   dan penanda saat sedang offline.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Daftarkan service worker (agar bisa offline) ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {
        /* Dibuka lewat file:// atau browser lama — abaikan, situs tetap jalan. */
      });
    });
  }

  /* ---------- 2. Tombol pasang aplikasi ---------- */
  var TERTUNDA = null;
  var KUNCI_TOLAK = "akademi_tolak_pasang";

  function buatBanner() {
    var box = document.createElement("div");
    box.className = "pwa-banner";
    box.innerHTML =
      '<span class="pwa-ikon">📲</span>' +
      '<span class="pwa-teks"><b>Pasang sebagai aplikasi</b><br>' +
      "Ada ikon di layar utama &amp; bisa dibuka tanpa internet.</span>";

    var pasang = document.createElement("button");
    pasang.className = "btn primary";
    pasang.type = "button";
    pasang.textContent = "Pasang";
    pasang.onclick = function () {
      if (!TERTUNDA) return;
      TERTUNDA.prompt();
      TERTUNDA.userChoice.then(function () {
        TERTUNDA = null;
        box.remove();
      });
    };

    var nanti = document.createElement("button");
    nanti.className = "btn ghost";
    nanti.type = "button";
    nanti.textContent = "Nanti";
    nanti.onclick = function () {
      try {
        localStorage.setItem(KUNCI_TOLAK, "1");
      } catch (e) {
        /* mode penyamaran — abaikan */
      }
      box.remove();
    };

    var aksi = document.createElement("div");
    aksi.className = "pwa-aksi";
    aksi.appendChild(pasang);
    aksi.appendChild(nanti);
    box.appendChild(aksi);
    return box;
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    TERTUNDA = e;
    var ditolak = false;
    try {
      ditolak = localStorage.getItem(KUNCI_TOLAK) === "1";
    } catch (err) {
      /* abaikan */
    }
    if (ditolak) return;
    // beri jeda supaya tidak mengganggu saat halaman baru dibuka
    setTimeout(function () {
      if (TERTUNDA && document.body) document.body.appendChild(buatBanner());
    }, 2500);
  });

  window.addEventListener("appinstalled", function () {
    TERTUNDA = null;
    var b = document.querySelector(".pwa-banner");
    if (b) b.remove();
  });

  /* ---------- 3. Penanda offline ---------- */
  function tandaOffline() {
    var ada = document.querySelector(".pwa-offline");
    if (navigator.onLine) {
      if (ada) ada.remove();
      return;
    }
    if (ada || !document.body) return;
    var t = document.createElement("div");
    t.className = "pwa-offline";
    t.textContent = "📴 Mode offline — materi dibaca dari penyimpanan HP";
    document.body.appendChild(t);
  }
  window.addEventListener("online", tandaOffline);
  window.addEventListener("offline", tandaOffline);
  window.addEventListener("load", tandaOffline);
})();
