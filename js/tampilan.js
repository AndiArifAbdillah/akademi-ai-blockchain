/* ============================================================
   TAMPILAN.JS — penyempurnaan antarmuka yang berdiri sendiri:
   1. Tombol tema (ikut sistem / terang / gelap)
   2. Bilah kemajuan membaca di halaman pelajaran
   Keduanya sengaja dipisah dari app.js agar tidak mengganggu
   logika materi & penyimpanan progres.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Tema ---------- */
  var KUNCI = "akademi_tema";
  var URUT = ["sistem", "terang", "gelap"];
  var IKON = { sistem: "🖥️", terang: "☀️", gelap: "🌙" };
  var NAMA = { sistem: "Ikut perangkat", terang: "Mode terang", gelap: "Mode gelap" };

  function baca() {
    try {
      var v = localStorage.getItem(KUNCI);
      return URUT.indexOf(v) !== -1 ? v : "sistem";
    } catch (e) { return "sistem"; }
  }
  function simpan(v) {
    try { localStorage.setItem(KUNCI, v); } catch (e) { /* mode penyamaran */ }
  }
  function terapkan(v) {
    var akar = document.documentElement;
    if (v === "sistem") akar.removeAttribute("data-theme");
    else akar.setAttribute("data-theme", v === "gelap" ? "dark" : "light");
    // samakan warna bilah status browser dengan latar yang sedang dipakai
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      var gelap = v === "gelap" || (v === "sistem" && window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
      meta.setAttribute("content", gelap ? "#0f1117" : "#6366f1");
    }
  }

  var pilihan = baca();
  terapkan(pilihan); // dijalankan sedini mungkin agar tidak ada kedipan

  function pasangTombol() {
    var bar = document.querySelector(".topbar");
    if (!bar || document.getElementById("tema-toggle")) return;
    var b = document.createElement("button");
    b.id = "tema-toggle";
    b.type = "button";
    function sync() {
      b.textContent = IKON[pilihan];
      b.title = NAMA[pilihan] + " — klik untuk mengganti";
      b.setAttribute("aria-label", NAMA[pilihan]);
    }
    b.onclick = function () {
      pilihan = URUT[(URUT.indexOf(pilihan) + 1) % URUT.length];
      simpan(pilihan);
      terapkan(pilihan);
      sync();
    };
    sync();
    bar.appendChild(b);
  }

  /* ---------- 2. Bilah kemajuan membaca ---------- */
  var bilah, isi;
  function pasangBilah() {
    if (bilah) return;
    bilah = document.createElement("div");
    bilah.className = "baca-progress";
    isi = document.createElement("i");
    bilah.appendChild(isi);
    document.body.appendChild(bilah);
  }
  function perbarui() {
    if (!isi) return;
    var diPelajaran = /^#\/lesson\//.test(location.hash);
    if (!diPelajaran) { isi.style.width = "0"; return; }
    var tinggi = document.documentElement.scrollHeight - window.innerHeight;
    var persen = tinggi > 40 ? (window.scrollY / tinggi) * 100 : 0;
    isi.style.width = Math.min(100, Math.max(0, persen)).toFixed(1) + "%";
  }

  function mulai() {
    pasangTombol();
    pasangBilah();
    perbarui();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mulai);
  else mulai();

  window.addEventListener("scroll", perbarui, { passive: true });
  window.addEventListener("resize", perbarui);
  window.addEventListener("hashchange", function () { setTimeout(perbarui, 60); });
})();
