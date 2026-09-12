/* ============================================================
   SESI.JS — empat hal yang membuat kebiasaan belajar bertahan:
     1. Ulangan berjarak  — mengulang tepat sebelum kamu lupa
     2. Sesi Harian       — pintu masuk kecil, sekitar 5 menit
     3. Perisai runtun    — satu hari terlewat tidak menghancurkan runtun
     4. Tonggak           — perayaan di 3, 7, 14, 30, 60, 100, 200, 365 hari
   Bergantung pada Progress & COURSES dari app.js.
   ============================================================ */

/* ---------- 1. Ulangan berjarak ---------- */
const Ulangan = {
  // Jarak hari untuk tiap tingkat penguasaan. Tiap kali benar, naik satu
  // tingkat sehingga jeda berikutnya makin panjang.
  JARAK: [1, 3, 7, 16, 35, 90],

  kunci(idPelajaran, nomor) {
    return idPelajaran + "|" + nomor;
  },
  tanggalPlus(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return Progress.kunciHari(d);
  },
  // Menanam seluruh soal sebuah pelajaran ke antrean (dipanggil saat selesai)
  tanam(idPelajaran) {
    const f = findLesson(idPelajaran);
    if (!f || !f.lesson.quiz) return;
    const u = Progress.data.ulangan;
    f.lesson.quiz.forEach((_, i) => {
      const k = this.kunci(idPelajaran, i);
      if (!u[k]) u[k] = { jatuh: this.tanggalPlus(1), tingkat: 0 };
    });
  },
  // Soal yang sudah jatuh tempo hari ini atau sebelumnya
  jatuhTempo() {
    const hariIni = Progress.kunciHari();
    const u = Progress.data.ulangan || {};
    return Object.keys(u)
      .filter((k) => u[k].jatuh <= hariIni)
      .sort((a, b) => (u[a].jatuh < u[b].jatuh ? -1 : 1));
  },
  // Ambil objek soal dari kuncinya
  soal(k) {
    const bagi = k.split("|");
    const f = findLesson(bagi[0]);
    if (!f || !f.lesson.quiz) return null;
    const q = f.lesson.quiz[parseInt(bagi[1], 10)];
    return q ? { q: q, pelajaran: f.lesson, kursus: f.course, kunci: k } : null;
  },
  // Catat hasil jawaban & jadwalkan ulang
  jawab(k, benar) {
    const u = Progress.data.ulangan;
    if (!u[k]) u[k] = { jatuh: this.tanggalPlus(1), tingkat: 0 };
    if (benar) {
      u[k].tingkat = Math.min(this.JARAK.length - 1, u[k].tingkat + 1);
      u[k].jatuh = this.tanggalPlus(this.JARAK[u[k].tingkat]);
    } else {
      // Salah: mundur satu tingkat dan diulang besok.
      u[k].tingkat = Math.max(0, u[k].tingkat - 1);
      u[k].jatuh = this.tanggalPlus(1);
    }
    Progress.save();
  },
  ringkas() {
    const u = Progress.data.ulangan || {};
    const total = Object.keys(u).length;
    const kuat = Object.keys(u).filter((k) => u[k].tingkat >= 3).length;
    return { total: total, jatuhTempo: this.jatuhTempo().length, kuat: kuat };
  },
};

/* ---------- 2. Perisai runtun ---------- */
const Perisai = {
  MAKS: 2,
  TIAP: 7, // satu perisai untuk tiap 7 hari runtun

  // Dipanggil sekali saat aplikasi dimuat.
  perbarui() {
    this.beriHadiah();
    this.selamatkan();
  },
  beriHadiah() {
    const r = Progress.runtun();
    const ambang = Math.floor(r / this.TIAP) * this.TIAP;
    if (ambang >= this.TIAP && ambang > (Progress.data.perisaiDiberiPada || 0)) {
      Progress.data.perisaiDiberiPada = ambang;
      if (Progress.data.perisai < this.MAKS) {
        Progress.data.perisai++;
        Progress.data.perisaiBaru = true; // dipakai untuk memberi tahu di beranda
      }
      Progress.save();
    }
  },
  // Bila KEMARIN kosong padahal sebelumnya ada runtun, pakai satu perisai.
  // Sengaja hanya menyelamatkan satu hari: dua hari berturut terlewat
  // memang seharusnya memutus runtun.
  selamatkan() {
    if ((Progress.data.perisai || 0) <= 0) return;
    const kemarin = new Date();
    kemarin.setDate(kemarin.getDate() - 1);
    if (Progress.hariTerisi(kemarin)) return; // kemarin sudah aman

    const lusa = new Date();
    lusa.setDate(lusa.getDate() - 2);
    if (!Progress.hariTerisi(lusa)) return; // tak ada runtun yang perlu diselamatkan

    Progress.data.perisai--;
    Progress.data.perisaiPakai[Progress.kunciHari(kemarin)] = true;
    Progress.data.perisaiTerpakaiBaru = Progress.kunciHari(kemarin);
    Progress.save();
  },
};

/* ---------- 3. Tonggak runtun ---------- */
const Tonggak = {
  DAFTAR: [3, 7, 14, 30, 60, 100, 200, 365],
  PESAN: {
    3: "Tiga hari berturut-turut. Awal yang paling sulit sudah lewat.",
    7: "Satu minggu penuh! Kebiasaan mulai terbentuk.",
    14: "Dua minggu. Ini bukan kebetulan lagi.",
    30: "Sebulan penuh. Kamu sudah jadi orang yang berbeda dari sebulan lalu.",
    60: "Dua bulan. Konsistensi setingkat ini jarang dimiliki orang.",
    100: "Seratus hari. Luar biasa.",
    200: "Dua ratus hari. Hampir tidak ada yang sampai sejauh ini.",
    365: "Satu tahun penuh. Selamat.",
  },
  // Tonggak yang baru saja tercapai & belum dirayakan
  baru() {
    const r = Progress.runtun();
    const sudah = Progress.data.tonggak || [];
    const capai = this.DAFTAR.filter((t) => r >= t && sudah.indexOf(t) === -1);
    return capai.length ? capai[capai.length - 1] : null;
  },
  tandai(t) {
    if (!Progress.data.tonggak) Progress.data.tonggak = [];
    this.DAFTAR.filter((x) => x <= t).forEach((x) => {
      if (Progress.data.tonggak.indexOf(x) === -1) Progress.data.tonggak.push(x);
    });
    Progress.save();
  },
  berikutnya() {
    const r = Progress.runtun();
    return this.DAFTAR.find((t) => t > r) || null;
  },
};

/* ---------- 4. Halaman Sesi Harian ---------- */
function renderSesi() {
  const wrap = el(`<div class="page"></div>`);
  const JUMLAH = 5;

  // Susun soal: yang jatuh tempo lebih dulu, lalu yang paling dekat jatuh temponya
  let kunci = Ulangan.jatuhTempo().slice(0, JUMLAH);
  if (kunci.length < JUMLAH) {
    const u = Progress.data.ulangan || {};
    const sisa = Object.keys(u)
      .filter((k) => kunci.indexOf(k) === -1)
      .sort((a, b) => (u[a].jatuh < u[b].jatuh ? -1 : 1));
    kunci = kunci.concat(sisa.slice(0, JUMLAH - kunci.length));
  }
  const daftar = kunci.map((k) => Ulangan.soal(k)).filter(Boolean);

  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> › <span>Sesi Harian</span></div>
  `));

  if (!daftar.length) {
    const lanjut = Progress.resumeLessonId();
    wrap.appendChild(el(`
      <section class="sesi-kosong">
        <div class="sesi-ikon">🌱</div>
        <h1>Belum ada yang bisa diulang</h1>
        <p class="lead">Soal ulangan muncul setelah kamu <b>menyelesaikan</b> sebuah pelajaran.
        Selesaikan satu pelajaran dulu, lalu besok sesi harianmu siap.</p>
        ${lanjut ? `<a class="btn primary besar" href="#/lesson/${lanjut}">Mulai pelajaran →</a>` : ""}
      </section>
    `));
    return wrap;
  }

  let ke = 0, benar = 0;
  const panggung = el(`<section class="sesi"></section>`);
  wrap.appendChild(panggung);

  function gambarSoal() {
    const s = daftar[ke];
    panggung.innerHTML = `
      <div class="sesi-atas">
        <span class="sesi-hitung">Soal ${ke + 1} dari ${daftar.length}</span>
        <div class="sesi-bar"><i style="width:${(ke / daftar.length) * 100}%"></i></div>
      </div>
      <p class="sesi-asal">${s.kursus.emoji} ${esc(s.pelajaran.title)}</p>
      <h2 class="sesi-tanya">${esc(s.q.q)}</h2>
      <div class="sesi-pilihan"></div>
      <div class="sesi-balas" hidden></div>
    `;
    const kotak = panggung.querySelector(".sesi-pilihan");
    s.q.options.forEach((o, i) => {
      const b = el(`<button class="sesi-opsi" type="button">${esc(o)}</button>`);
      b.onclick = () => pilih(i, b);
      kotak.appendChild(b);
    });
  }

  function pilih(i, tombol) {
    const s = daftar[ke];
    const tepat = i === s.q.answer;
    if (tepat) benar++;
    Ulangan.jawab(s.kunci, tepat);

    panggung.querySelectorAll(".sesi-opsi").forEach((b, j) => {
      b.disabled = true;
      if (j === s.q.answer) b.classList.add("tepat");
    });
    if (!tepat) tombol.classList.add("keliru");

    const balas = panggung.querySelector(".sesi-balas");
    balas.hidden = false;
    balas.className = "sesi-balas " + (tepat ? "ok" : "no");
    balas.innerHTML =
      `<b>${tepat ? "✓ Benar." : "✗ Kurang tepat."}</b> ${esc(s.q.explain || "")}
       <div class="sesi-jadwal">${tepat
         ? "Soal ini akan muncul lagi dalam " + Ulangan.JARAK[Progress.data.ulangan[s.kunci].tingkat] + " hari."
         : "Soal ini diulang besok."}</div>
       <button class="btn primary sesi-lanjut" type="button">${ke + 1 < daftar.length ? "Lanjut →" : "Lihat hasil →"}</button>`;
    balas.querySelector(".sesi-lanjut").onclick = () => {
      ke++;
      if (ke < daftar.length) gambarSoal();
      else selesai();
    };
  }

  function selesai() {
    const xp = benar * 10 + 5;
    Progress.data.xp = (Progress.data.xp || 0) + xp;
    Progress.catatHari("b"); // sesi juga menjaga runtun
    Progress.save();
    const r = Progress.runtun();
    const t = Tonggak.baru();
    if (t) Tonggak.tandai(t);

    panggung.innerHTML = `
      <div class="sesi-hasil">
        <div class="sesi-ikon">${benar === daftar.length ? "🏆" : benar >= daftar.length / 2 ? "👏" : "💪"}</div>
        <h1>${benar} dari ${daftar.length} benar</h1>
        <p class="sesi-xp">+${xp} XP &nbsp;·&nbsp; total ${Progress.data.xp} XP</p>
        <p class="lead">🔥 Runtun <b>${r} hari</b>${Tonggak.berikutnya() ? ` — tonggak berikutnya di hari ${Tonggak.berikutnya()}` : ""}</p>
        ${t ? `<div class="tonggak-rayakan">🎉 <b>Tonggak ${t} hari tercapai!</b><br>${Tonggak.PESAN[t]}</div>` : ""}
        <div class="sesi-aksi">
          <a class="btn primary besar" href="#/">Kembali ke beranda</a>
          ${Progress.resumeLessonId() ? `<a class="btn ghost besar" href="#/lesson/${Progress.resumeLessonId()}">Lanjut belajar →</a>` : ""}
        </div>
      </div>`;
  }

  gambarSoal();
  return wrap;
}
