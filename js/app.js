/* ============================================================
   APLIKASI PLATFORM BELAJAR  (vanilla JS, tanpa framework)
   - Router sederhana berbasis hash (#)
   - Render kursus, modul, pelajaran, kuis
   - Pelacak kemajuan via localStorage
   ============================================================ */

const COURSES = [AI_COURSE, BLOCKCHAIN_COURSE, ACCOUNTING_COURSE];

/* ---------- Urutan Belajar ----------
   Modul ditulis di file data sesuai waktu pembuatannya. Daftar di bawah menata
   ulang urutannya menjadi alur belajar yang logis:
   konsep → fundamental → matematika → variasi → penerapan → alat → bangun → bisnis. */
const MODULE_ORDER = [
  // 🤖 AI
  "ai-dasar", "ai-pemula", "ai-menengah", "ai-fundamental", "ai-matematika",
  "ai-tools", "ai-pendalaman", "ai-algoritma", "ai-ensemble", "ai-arsitektur", "ai-rl",
  "ai-mahir", "ai-lanjutan", "ai-proyek", "ai-terapan", "ai-ekonomi", "ai-arah",
  // ⛓️ Blockchain
  "bc-dasar", "bc-pemula", "bc-fundamental", "bc-pendalaman", "bc-matematika",
  "bc-kriptografi", "bc-menengah", "bc-terapan", "bc-lanjutan", "bc-proyek",
  "bc-forensik", "bc-pelengkap", "bc-ekonomi", "bc-arah",
  // 📊 Akuntansi
  "acc-dasar", "acc-pemula", "acc-menengah", "acc-pendalaman", "acc-fundamental",
  "acc-mikro", "acc-terapan", "acc-audit", "acc-matematika", "acc-lanjutan", "acc-kualitas",
  "acc-bank", "acc-prospek", "acc-proyek", "acc-investasi", "acc-makro", "acc-arah",
];
(function urutkanModul() {
  const pos = (id) => {
    const i = MODULE_ORDER.indexOf(id);
    return i === -1 ? 999 : i; // modul baru yang belum terdaftar diletakkan di akhir
  };
  COURSES.forEach((c) => c.modules.sort((a, b) => pos(a.id) - pos(b.id)));
})();

/* Mengacak urutan pilihan jawaban kuis & latihan.
   Masalah yang diperbaiki: dulu 93,7% jawaban benar berada di posisi ke-2
   dan posisi ke-4 tidak pernah dipakai sama sekali — sehingga soal bisa
   ditebak tanpa memahami materinya.
   Pengacakan memakai benih tetap dari id pelajaran + nomor soal, jadi
   urutannya konsisten setiap kali pelajaran yang sama dibuka. */
(function acakPilihan() {
  const benih = (s) => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0) || 1;
  };
  const pengacak = (n) => {
    let x = n;
    return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; };
  };
  const kocok = (item, kunci) => {
    if (!item || !Array.isArray(item.options) || typeof item.answer !== "number") return;
    const lama = item.options.slice();
    const urut = lama.map((_, i) => i);
    const rnd = pengacak(benih(kunci));
    for (let i = urut.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = urut[i]; urut[i] = urut[j]; urut[j] = t;
    }
    item.options = urut.map((i) => lama[i]);
    item.answer = urut.indexOf(item.answer); // posisi baru dari jawaban benar
  };
  COURSES.forEach((c) => c.modules.forEach((m) => m.lessons.forEach((l) => {
    (l.quiz || []).forEach((q, i) => kocok(q, l.id + ":q" + i));
    (l.practice || []).forEach((p, i) => { if (p.type === "choice") kocok(p, l.id + ":p" + i); });
  })));
})();
const STORE_KEY = "belajar_ai_blockchain_progress_v1";

/* ---------- Penyimpanan Kemajuan ---------- */
const Progress = {
  data: {},
  load() {
    try {
      this.data = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch (e) {
      this.data = {};
    }
    if (!this.data.completed) this.data.completed = {}; // {lessonId: true}
    if (!this.data.scores) this.data.scores = {};       // {lessonId: {correct,total}}
    if (!this.data.hari) this.data.hari = {};           // {"2026-09-13": {b:dibuka, s:selesai}}
    if (!this.data.target) this.data.target = 1;        // pelajaran diselesaikan per hari
    if (!this.data.runtunTerbaik) this.data.runtunTerbaik = 0;
    if (!this.data.ulangan) this.data.ulangan = {};     // {"idPelajaran|nomor": {jatuh, tingkat}}
    if (typeof this.data.perisai !== "number") this.data.perisai = 0;
    if (!this.data.perisaiPakai) this.data.perisaiPakai = {}; // hari yang diselamatkan perisai
    if (typeof this.data.perisaiDiberiPada !== "number") this.data.perisaiDiberiPada = 0;
    if (!this.data.tonggak) this.data.tonggak = [];     // tonggak runtun yang sudah dirayakan
    if (typeof this.data.xp !== "number") this.data.xp = 0;
    if (typeof this.data.kunciKuis !== "boolean") this.data.kunciKuis = true; // kunci tombol Berikutnya sampai kuis benar semua
  },
  save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(this.data));
  },
  isDone(lessonId) {
    return !!this.data.completed[lessonId];
  },
  // Simpan skor percobaan kuis tanpa menandai pelajaran selesai
  simpanSkor(lessonId, score) {
    this.data.scores[lessonId] = score;
    this.save();
  },
  setKunciKuis(v) {
    this.data.kunciKuis = !!v;
    this.save();
  },
  // Pelajaran berkuis baru terbuka bila kuisnya sudah benar semua (tersimpan sebagai selesai)
  kuisLulus(lessonId) {
    return !!this.data.completed[lessonId];
  },
  markDone(lessonId, score) {
    const baru = !this.data.completed[lessonId];
    this.data.completed[lessonId] = true;
    if (score) this.data.scores[lessonId] = score;
    if (baru) {
      this.catatHari("s"); // hanya dihitung sekali per pelajaran
      // Soal pelajaran ini masuk antrean ulangan berjarak, jatuh tempo besok.
      if (typeof Ulangan !== "undefined") Ulangan.tanam(lessonId);
    }
    this.save();
  },
  // Catat pelajaran terakhir yang dibuka + waktunya
  touch(lessonId) {
    this.data.last = lessonId;
    this.data.lastAt = Date.now();
    this.catatHari("b");
    this.save();
  },

  /* ---------- Disiplin harian ---------- */
  // Kunci tanggal memakai waktu LOKAL, bukan UTC, supaya pergantian hari
  // terasa benar bagi pengguna (tengah malam di zona waktunya sendiri).
  kunciHari(d) {
    const t = d || new Date();
    const p = (n) => String(n).padStart(2, "0");
    return t.getFullYear() + "-" + p(t.getMonth() + 1) + "-" + p(t.getDate());
  },
  catatHari(jenis) {
    if (!this.data.hari) this.data.hari = {};
    const k = this.kunciHari();
    const h = this.data.hari[k] || { b: 0, s: 0 };
    h[jenis] = (h[jenis] || 0) + 1;
    this.data.hari[k] = h;
    const r = this.runtun();
    if (r > (this.data.runtunTerbaik || 0)) this.data.runtunTerbaik = r;
  },
  aktivitasHari(d) {
    return (this.data.hari || {})[this.kunciHari(d)] || null;
  },
  // Runtun = jumlah hari berturut-turut dengan aktivitas.
  // Kalau hari ini belum ada aktivitas, hitungan dimulai dari kemarin —
  // supaya runtun tidak terlihat "putus" sebelum harinya berakhir.
  // Hari dianggap "terisi" bila ada aktivitas ATAU diselamatkan perisai.
  hariTerisi(d) {
    const k = this.kunciHari(d);
    return !!(this.data.hari || {})[k] || !!(this.data.perisaiPakai || {})[k];
  },
  runtun() {
    const d = new Date();
    if (!this.hariTerisi(d)) d.setDate(d.getDate() - 1);
    let n = 0;
    while (this.hariTerisi(d)) {
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  },
  targetTercapai() {
    const h = this.aktivitasHari();
    return !!h && (h.s || 0) >= (this.data.target || 1);
  },
  setTarget(n) {
    this.data.target = Math.max(1, Math.min(10, parseInt(n, 10) || 1));
    this.save();
  },
  // Tentukan pelajaran untuk tombol "Lanjutkan Belajar":
  // pelajaran terakhir yang belum selesai, atau pelajaran pertama yang belum selesai.
  resumeLessonId() {
    const seq = lessonSequence();
    const last = this.data.last;
    if (last && seq.includes(last) && !this.isDone(last)) return last;
    return seq.find((id) => !this.isDone(id)) || null;
  },
  // Backup & restore (untuk pindah browser/komputer)
  exportJSON() {
    return JSON.stringify(this.data, null, 2);
  },
  importJSON(text) {
    const obj = JSON.parse(text);
    this.data = obj && typeof obj === "object" ? obj : {};
    if (!this.data.completed) this.data.completed = {};
    if (!this.data.scores) this.data.scores = {};
    if (!this.data.hari) this.data.hari = {};
    if (!this.data.target) this.data.target = 1;
    if (!this.data.runtunTerbaik) this.data.runtunTerbaik = 0;
    if (!this.data.ulangan) this.data.ulangan = {};
    if (typeof this.data.perisai !== "number") this.data.perisai = 0;
    if (!this.data.perisaiPakai) this.data.perisaiPakai = {};
    if (typeof this.data.perisaiDiberiPada !== "number") this.data.perisaiDiberiPada = 0;
    if (!this.data.tonggak) this.data.tonggak = [];
    if (typeof this.data.xp !== "number") this.data.xp = 0;
    if (typeof this.data.kunciKuis !== "boolean") this.data.kunciKuis = true;
    this.save();
  },
  reset() {
    this.data = {
      completed: {}, scores: {}, hari: {}, target: 1, runtunTerbaik: 0,
      ulangan: {}, perisai: 0, perisaiPakai: {}, perisaiDiberiPada: 0, tonggak: [], xp: 0, kunciKuis: true,
    };
    this.save();
  },
};

/* ---------- Util ---------- */
function allLessons(course) {
  // course.modules sudah diurutkan sekali di awal oleh urutkanModul() (MODULE_ORDER)
  return course.modules.flatMap((m) => m.lessons);
}
function courseProgress(course) {
  const lessons = allLessons(course);
  const done = lessons.filter((l) => Progress.isDone(l.id)).length;
  return { done, total: lessons.length, pct: lessons.length ? Math.round((done / lessons.length) * 100) : 0 };
}
function courseResumeId(course) {
  const ids = allLessons(course).map((l) => l.id);
  const last = Progress.data.last;
  if (last && ids.includes(last) && !Progress.isDone(last)) return last;
  return ids.find((id) => !Progress.isDone(id)) || null;
}
function timeAgo(ts) {
  const min = Math.floor((Date.now() - ts) / 60000);
  if (min < 1) return "baru saja";
  if (min < 60) return min + " menit lalu";
  const hr = Math.floor(min / 60);
  if (hr < 24) return hr + " jam lalu";
  const day = Math.floor(hr / 24);
  if (day === 1) return "kemarin";
  if (day < 7) return day + " hari lalu";
  return new Date(ts).toLocaleDateString("id-ID");
}
function findLesson(lessonId) {
  for (const c of COURSES) {
    for (const m of c.modules) {
      const l = m.lessons.find((x) => x.id === lessonId);
      if (l) return { course: c, module: m, lesson: l };
    }
  }
  return null;
}
function lessonSequence() {
  // urutan datar semua pelajaran (untuk tombol Berikutnya)
  return COURSES.flatMap((c) => allLessons(c).map((l) => l.id));
}
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  // Jika ada beberapa elemen sejajar, kembalikan fragmen agar semuanya terpakai.
  return t.content.children.length === 1 ? t.content.firstElementChild : t.content;
}
function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function stripHTML(html) {
  const d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent || "").replace(/\s+/g, " ").trim();
}

/* ---------- Tooltip Glosarium Otomatis ----------
   Menandai istilah sulit di dalam materi agar bisa diklik & dilihat artinya,
   tanpa perlu meninggalkan halaman pelajaran. */
function escRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const GLOSS_SKIP_TAGS = {
  PRE: 1, CODE: 1, A: 1, TEXTAREA: 1, BUTTON: 1, SELECT: 1, OPTION: 1,
  H1: 1, H2: 1, H3: 1, H4: 1, TH: 1,
};
function applyGlossary(root, maxTerms) {
  if (typeof GLOSSARY === "undefined" || !root) return 0;
  const limit = maxTerms || 12;
  // Istilah terpanjang didahulukan agar "Free Cash Flow" menang atas "Cash Flow"
  const terms = GLOSSARY.slice().sort((a, b) => b[0].length - a[0].length);
  const used = new Set();
  let count = 0;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || node.nodeValue.trim().length < 3) return NodeFilter.FILTER_REJECT;
      let p = node.parentElement;
      while (p && p !== root) {
        if (GLOSS_SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
        if (p.classList && (p.classList.contains("gloss-term") || p.classList.contains("demo"))) return NodeFilter.FILTER_REJECT;
        if (p.hasAttribute && (p.hasAttribute("data-demo") || p.hasAttribute("data-diagram"))) return NodeFilter.FILTER_REJECT;
        p = p.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  let nd;
  while ((nd = walker.nextNode())) nodes.push(nd);

  nodes.forEach((node) => {
    if (count >= limit) return;
    for (let i = 0; i < terms.length && count < limit; i++) {
      const term = terms[i][0];
      const key = term.toLowerCase();
      if (used.has(key) || !node.nodeValue) continue;
      const re = new RegExp("(^|[^0-9A-Za-zÀ-ÿ-])(" + escRegExp(term) + ")(?![0-9A-Za-zÀ-ÿ-])", "i");
      const m = re.exec(node.nodeValue);
      if (!m) continue;
      const tail = node.splitText(m.index + m[1].length);
      tail.splitText(term.length);
      const span = document.createElement("span");
      span.className = "gloss-term";
      span.title = term + " — " + terms[i][1];
      span.dataset.term = term;
      span.dataset.def = terms[i][1];
      tail.parentNode.insertBefore(span, tail);
      span.appendChild(tail);
      used.add(key);
      count++;
    }
  });
  return count;
}

/* ---------- Narasi Suara (Text-to-Speech) ---------- */
const Speech = {
  supported: typeof window !== "undefined" && "speechSynthesis" in window,
  speaking: false,
  stop() {
    if (this.supported) window.speechSynthesis.cancel();
    this.speaking = false;
  },
  // Cari suara Bahasa Indonesia asli; null jika tak ada (jangan paksa suara asing).
  indoVoice() {
    if (!this.supported) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    return voices.find((v) => /^id([-_]|$)/i.test(v.lang) || /indones/i.test(v.lang) || /indones/i.test(v.name)) || null;
  },
  speak(text, onend) {
    if (!this.supported) return;
    this.stop();
    const idVoice = this.indoVoice();
    // Pecah jadi potongan kalimat — lebih stabil untuk teks panjang.
    const chunks = text.match(/[^.!?]+[.!?]+|\S+$/g) || [text];
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c.trim());
      u.lang = "id-ID";
      if (idVoice) u.voice = idVoice;
      u.rate = 0.97;
      if (i === chunks.length - 1)
        u.onend = () => { this.speaking = false; if (onend) onend(); };
      window.speechSynthesis.speak(u);
    });
    this.speaking = true;
  },
};
function lessonNarration(lesson) {
  let t = lesson.title + ". " + stripHTML(lesson.content);
  if (lesson.keyPoints && lesson.keyPoints.length)
    t += " Poin penting. " + lesson.keyPoints.join(". ") + ".";
  return t;
}

/* ---------- Data Flashcard (dibangun dari kuis + glosarium) ---------- */
function buildFlashcards(filter) {
  const cards = [];
  COURSES.forEach((c) => {
    if (filter === "all" || filter === c.id) {
      allLessons(c).forEach((l) => {
        (l.quiz || []).forEach((q) => {
          cards.push({
            front: q.q,
            back: q.options[q.answer] + (q.explain ? " — " + q.explain : ""),
            tag: c.title,
          });
        });
      });
    }
  });
  if (filter === "all" || filter === "glossary") {
    GLOSSARY.forEach(([term, def]) => cards.push({ front: "Apa itu " + term + "?", back: def, tag: "Glosarium" }));
  }
  return cards;
}

/* ---------- Router ---------- */
function router() {
  const hash = location.hash.slice(1) || "/";
  const [, type, id] = hash.split("/"); // contoh: #/course/ai , #/lesson/ai-p-1
  const root = document.getElementById("app");
  window.scrollTo(0, 0);
  Speech.stop(); // hentikan narasi saat pindah halaman

  if (hash.startsWith("/course/")) {
    const course = COURSES.find((c) => c.id === id);
    root.innerHTML = "";
    root.appendChild(course ? renderCourse(course) : renderHome());
  } else if (hash.startsWith("/lesson/")) {
    const found = findLesson(id);
    root.innerHTML = "";
    root.appendChild(found ? renderLesson(found) : renderHome());
  } else if (hash.startsWith("/glossary")) {
    root.innerHTML = "";
    root.appendChild(renderGlossary());
  } else if (hash.startsWith("/sesi")) {
    root.innerHTML = "";
    root.appendChild(renderSesi());
  } else if (hash.startsWith("/flashcards")) {
    root.innerHTML = "";
    root.appendChild(renderFlashcards());
  } else if (hash.startsWith("/search")) {
    root.innerHTML = "";
    root.appendChild(renderSearch());
  } else if (hash.startsWith("/playground")) {
    root.innerHTML = "";
    root.appendChild(renderPlayground());
  } else {
    root.innerHTML = "";
    root.appendChild(renderHome());
  }
  renderSidebar();
}

/* ---------- Halaman: Beranda ---------- */
/* ---------- Kartu disiplin harian ----------
   Menampilkan runtun (streak), capaian hari ini, rekor terbaik,
   dan kalender aktivitas 12 minggu terakhir. */
function kartuDisiplin() {
  const target = Progress.data.target || 1;
  const hariIni = Progress.aktivitasHari() || { b: 0, s: 0 };
  const runtun = Progress.runtun();
  const rekor = Math.max(Progress.data.runtunTerbaik || 0, Progress.runtun());
  const tercapai = Progress.targetTercapai();
  const sisa = Math.max(0, target - (hariIni.s || 0));

  // --- kalender 12 minggu, dimulai hari Senin ---
  const mulai = new Date();
  mulai.setHours(0, 0, 0, 0);
  mulai.setDate(mulai.getDate() - 83);
  mulai.setDate(mulai.getDate() - ((mulai.getDay() + 6) % 7)); // mundur ke Senin
  const akhir = new Date();
  akhir.setHours(0, 0, 0, 0);
  const NAMA_BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  let sel = "";
  for (let d = new Date(mulai); d <= akhir; d.setDate(d.getDate() + 1)) {
    const a = Progress.aktivitasHari(d);
    const s = a ? a.s || 0 : 0;
    let tingkat = 0;
    if (a) tingkat = s >= target * 2 ? 4 : s >= target ? 3 : s >= 1 ? 2 : 1;
    const tgl = d.getDate() + " " + NAMA_BULAN[d.getMonth()];
    const ket = !a ? "tidak belajar" : s > 0 ? s + " pelajaran selesai" : "membuka materi";
    sel += `<i class="kal-sel t${tingkat}" title="${tgl} — ${ket}"></i>`;
  }

  const perisai = Progress.data.perisai || 0;
  const jatuhTempo = typeof Ulangan !== "undefined" ? Ulangan.ringkas().jatuhTempo : 0;
  const tonggakPerisai = (Math.floor(runtun / 7) + 1) * 7;

  // Kabar sekali-tampil: tonggak tercapai, perisai didapat, atau perisai terpakai.
  let kabar = "";
  const tCapai = typeof Tonggak !== "undefined" ? Tonggak.baru() : null;
  if (tCapai) {
    kabar += `<div class="dis-kabar rayakan">🎉 <b>Tonggak ${tCapai} hari tercapai!</b> ${Tonggak.PESAN[tCapai]}</div>`;
    Tonggak.tandai(tCapai);
  }
  if (Progress.data.perisaiTerpakaiBaru) {
    kabar += `<div class="dis-kabar selamat">🛡️ <b>Satu perisai terpakai.</b> Kemarin kamu absen, tapi runtunmu selamat. Perisai tersisa: ${perisai}.</div>`;
    delete Progress.data.perisaiTerpakaiBaru;
    Progress.save();
  }
  if (Progress.data.perisaiBaru) {
    kabar += `<div class="dis-kabar hadiah">🛡️ <b>Kamu mendapat satu perisai!</b> Simpan untuk hari yang benar-benar sibuk.</div>`;
    delete Progress.data.perisaiBaru;
    Progress.save();
  }

  const pesan = tercapai
    ? `🎉 <b>Target hari ini tercapai!</b> Sampai jumpa besok.`
    : runtun > 0
    ? `Tinggal <b>${sisa} pelajaran</b> lagi untuk menjaga runtunmu hari ini.`
    : `Selesaikan <b>${target} pelajaran</b> hari ini untuk memulai runtun.`;

  const kartu = el(`
    <section class="disiplin ${tercapai ? "selesai" : ""}">
      <div class="dis-atas">
        <div class="dis-api">
          <span class="dis-emoji">${runtun > 0 ? "🔥" : "🌱"}</span>
          <span class="dis-angka">${runtun}</span>
          <span class="dis-label">hari berturut-turut</span>
        </div>
        <div class="dis-kanan">
          <div class="dis-hari">
            <span>Hari ini</span>
            <b>${hariIni.s || 0} / ${target}</b>
          </div>
          <div class="dis-bar"><i style="width:${Math.min(100, ((hariIni.s || 0) / target) * 100)}%"></i></div>
          <div class="dis-rekor">Rekor terpanjang: <b>${rekor} hari</b></div>
        </div>
      </div>
      <p class="dis-pesan">${pesan}</p>
      ${kabar}
      <div class="dis-alat">
        <span class="dis-perisai" title="Perisai menyelamatkan runtunmu bila satu hari terlewat">
          🛡️ <b>${perisai}</b> perisai${perisai < 2 ? ` <small>(berikutnya di hari ${tonggakPerisai})</small>` : ""}
        </span>
        <span class="dis-xp">⭐ <b>${Progress.data.xp || 0}</b> XP</span>
        <a class="btn primary dis-sesi" href="#/sesi">⚡ Sesi Harian${jatuhTempo ? ` · ${jatuhTempo} soal` : ""}</a>
      </div>
      <div class="kal" aria-label="Kalender aktivitas 12 minggu terakhir">${sel}</div>
      <div class="kal-ket">
        <span>12 minggu terakhir</span>
        <span class="kal-skala">Sedikit <i class="kal-sel t0"></i><i class="kal-sel t1"></i><i class="kal-sel t2"></i><i class="kal-sel t3"></i><i class="kal-sel t4"></i> Banyak</span>
      </div>
      <div class="dis-atur">
        <label>Target harian
          <select class="dis-target">
            ${[1, 2, 3, 5].map((n) => `<option value="${n}" ${n === target ? "selected" : ""}>${n} pelajaran/hari</option>`).join("")}
          </select>
        </label>
        <label>Ingatkan pukul <input type="time" class="dis-jam" value="19:00"></label>
        <button class="btn ghost dis-ics" type="button">📅 Pasang pengingat</button>
        <label class="dis-kunci"><input type="checkbox" class="dis-kunci-kuis" ${Progress.data.kunciKuis ? "checked" : ""}> 🔒 Kunci tombol "Berikutnya" sampai kuis benar semua</label>
      </div>
      <p class="dis-catatan">Pengingat dipasang sebagai acara harian berulang di aplikasi kalender HP-mu — cara yang paling andal, karena situs ini berjalan tanpa server.</p>
    </section>
  `);

  kartu.querySelector(".dis-target").onchange = (e) => {
    Progress.setTarget(e.target.value);
    router();
  };
  kartu.querySelector(".dis-kunci-kuis").onchange = (e) => {
    Progress.setKunciKuis(e.target.checked);
  };
  kartu.querySelector(".dis-ics").onclick = () => {
    const jam = (kartu.querySelector(".dis-jam").value || "19:00").split(":");
    const d = new Date();
    d.setDate(d.getDate() + 1);
    const p = (n) => String(n).padStart(2, "0");
    const tgl = d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate());
    const cap = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Akademi AI Blockchain//ID", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:akademi-belajar-harian@akademi",
      "DTSTAMP:" + cap,
      "DTSTART:" + tgl + "T" + p(jam[0]) + p(jam[1]) + "00",
      "RRULE:FREQ=DAILY",
      "SUMMARY:Belajar di Akademi AI & Blockchain",
      "DESCRIPTION:Buka aplikasinya dan selesaikan target hari ini.",
      "BEGIN:VALARM", "TRIGGER:PT0M", "ACTION:DISPLAY", "DESCRIPTION:Waktunya belajar", "END:VALARM",
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "pengingat-belajar-harian.ics";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  };
  return kartu;
}

function renderHome() {
  const wrap = el(`<div class="page"></div>`);

  const totalLessons = COURSES.reduce((n, c) => n + allLessons(c).length, 0);
  const totalDone = COURSES.reduce((n, c) => n + courseProgress(c).done, 0);
  const overall = totalLessons ? Math.round((totalDone / totalLessons) * 100) : 0;

  wrap.appendChild(el(`
    <section class="hero">
      <h1>Selamat datang di <span class="grad">Akademi AI &amp; Blockchain</span> 🎓</h1>
      <p class="lead">Belajar Kecerdasan Buatan dan Crypto &amp; Blockchain dari <b>dasar hingga mahir</b>,
      dengan bahasa Indonesia yang sederhana, contoh nyata, dan kuis di setiap pelajaran.</p>
      <div class="ring-wrap">
        <svg class="ring" viewBox="0 0 120 120" role="img" aria-label="${overall}% materi selesai">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#6366f1"/>
              <stop offset="1" stop-color="#f59e0b"/>
            </linearGradient>
          </defs>
          <circle class="ring-alur" cx="60" cy="60" r="50"/>
          <circle class="ring-isi" cx="60" cy="60" r="50" transform="rotate(-90 60 60)"
                  stroke-dasharray="314.16" stroke-dashoffset="314.16"/>
          <text x="60" y="68" text-anchor="middle">${overall}%</text>
        </svg>
        <div class="ring-info">
          <b>${totalDone} dari ${totalLessons} pelajaran</b><br>
          ${totalDone === 0 ? "Belum ada yang diselesaikan — mulai dari mana saja." :
            overall >= 100 ? "Semuanya selesai. Luar biasa! 🎉" :
            "Terus lanjut, sedikit demi sedikit."}
        </div>
      </div>
    </section>
  `));

  // Isi cincin diisi sesaat setelah dipasang agar transisinya terlihat.
  // Sengaja memakai setTimeout, bukan requestAnimationFrame: rAF tidak
  // berjalan saat tab berada di latar belakang, sehingga cincinnya bisa
  // tertinggal kosong padahal persentasenya sudah benar.
  setTimeout(() => {
    const isi = wrap.querySelector(".ring-isi");
    if (isi) isi.style.strokeDashoffset = (314.16 * (1 - overall / 100)).toFixed(2);
  }, 50);

  // Kartu disiplin harian — runtun, target hari ini, & kalender aktivitas
  wrap.appendChild(kartuDisiplin());

  // Kartu "Lanjutkan Belajar" — tahu sampai mana progres belajarmu
  const resumeId = Progress.resumeLessonId();
  if (resumeId) {
    const f = findLesson(resumeId);
    const started = totalDone > 0;
    const lastNote = Progress.data.lastAt
      ? `<span class="resume-note">🕘 Terakhir belajar ${timeAgo(Progress.data.lastAt)}</span>` : "";
    wrap.appendChild(el(`
      <a class="resume-card" href="#/lesson/${resumeId}" style="--accent:${f.course.color}">
        <span class="resume-info">
          <span class="resume-label">${started ? "Lanjutkan dari sini" : "Ayo mulai dari sini"}</span>
          <span class="resume-title">${f.course.emoji} ${esc(f.lesson.title)}</span>
          <span class="resume-sub"><span class="lvl-badge lvl-${f.module.level.toLowerCase()}">${esc(f.module.level)}</span> ${esc(f.course.title)}</span>
          ${lastNote}
        </span>
        <span class="resume-btn">${started ? "Lanjutkan Belajar →" : "Mulai Belajar →"}</span>
      </a>
    `));
  } else if (totalLessons > 0) {
    wrap.appendChild(el(`
      <div class="resume-card done">
        <span class="resume-info">
          <span class="resume-title">🎉 Selamat! Semua pelajaran sudah selesai.</span>
          <span class="resume-sub">Kamu bisa mengulang materi atau menguji ulang kuis kapan saja.</span>
        </span>
      </div>
    `));
  }

  const grid = el(`<div class="card-grid"></div>`);
  COURSES.forEach((c) => {
    const p = courseProgress(c);
    const card = el(`
      <a class="course-card" href="#/course/${c.id}" style="--accent:${c.color}">
        <div class="cc-emoji">${c.emoji}</div>
        <h2>${esc(c.title)}</h2>
        <p>${esc(c.tagline)}</p>
        <div class="cc-meta">
          <span>${c.modules.length} modul • ${allLessons(c).length} pelajaran</span>
        </div>
        <div class="progress"><div class="progress-fill" style="width:${p.pct}%;background:${c.color}"></div></div>
        <div class="cc-foot"><span>${p.done}/${p.total} selesai</span><span class="cc-go">Mulai belajar →</span></div>
      </a>
    `);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  wrap.appendChild(el(`
    <section class="how">
      <h3>Cara memakai platform ini</h3>
      <ol>
        <li>Pilih salah satu jalur belajar di atas.</li>
        <li>Ikuti pelajaran berurutan dari level <b>Pemula</b> → <b>Menengah</b> → <b>Mahir</b>.</li>
        <li>Kerjakan kuis di akhir tiap pelajaran untuk menandainya selesai.</li>
        <li>Kemajuanmu tersimpan otomatis. Pakai tombol <b>Lanjutkan Belajar</b> untuk meneruskan dari pelajaran terakhir.</li>
        <li>Mau pindah browser/komputer? Klik <b>Cadangkan</b> di samping untuk mengunduh file simpanan, lalu <b>Pulihkan</b> di perangkat lain.</li>
      </ol>
    </section>
  `));

  return wrap;
}

/* ---------- Halaman: Detail Kursus ---------- */
function renderCourse(course) {
  const wrap = el(`<div class="page"></div>`);
  const p = courseProgress(course);

  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> / <span>${esc(course.title)}</span></div>
    <header class="course-head" style="--accent:${course.color}">
      <div class="ch-emoji">${course.emoji}</div>
      <div>
        <h1>${esc(course.title)}</h1>
        <p>${esc(course.description)}</p>
        <div class="progress big"><div class="progress-fill" style="width:${p.pct}%;background:${course.color}"></div></div>
        <small>${p.done}/${p.total} pelajaran selesai (${p.pct}%)</small>
        ${
          courseResumeId(course)
            ? `<a class="btn primary course-resume" href="#/lesson/${courseResumeId(course)}">${p.done > 0 ? "Lanjutkan kursus" : "Mulai kursus"} →</a>`
            : `<span class="course-done">🎉 Kursus ini selesai!</span>`
        }
      </div>
    </header>
  `));

  wrap.appendChild(el(`
    <p class="course-order-hint">📚 <b>Ikuti modul 1 → ${course.modules.length} secara berurutan.</b>
    Materi disusun bertahap: konsep dasar → fundamental → matematika → penerapan → membangun.
    Setiap modul memakai bekal dari modul sebelumnya.</p>
  `));

  course.modules.forEach((m, mi) => {
    const mod = el(`<section class="module"></section>`);
    mod.appendChild(el(`
      <div class="module-head">
        <span class="mod-num">Modul ${mi + 1} dari ${course.modules.length}</span>
        <span class="lvl-badge lvl-${m.level.toLowerCase()}">${esc(m.level)}</span>
        <h2>${esc(m.title)}</h2>
        <p>${esc(m.summary)}</p>
      </div>
    `));
    const list = el(`<ol class="lesson-list"></ol>`);
    m.lessons.forEach((l, li) => {
      const done = Progress.isDone(l.id);
      list.appendChild(el(`
        <li>
          <a class="lesson-row ${done ? "done" : ""}" href="#/lesson/${l.id}">
            <span class="lr-check">${done ? "✓" : mi + 1 + "." + (li + 1)}</span>
            <span class="lr-title">${esc(l.title)}</span>
            <span class="lr-dur">${esc(l.duration)}</span>
          </a>
        </li>
      `));
    });
    mod.appendChild(list);
    wrap.appendChild(mod);
  });

  return wrap;
}

/* ---------- Halaman: Pelajaran ---------- */
function renderLesson({ course, module, lesson }) {
  const wrap = el(`<div class="page lesson-page"></div>`);
  // Sebelumnya/Berikutnya tetap di dalam satu jalur — tidak melompat ke jalur lain
  const seq = allLessons(course);
  const idx = seq.findIndex((l) => l.id === lesson.id);
  const prevLesson = idx > 0 ? seq[idx - 1] : null;
  const nextLesson = idx < seq.length - 1 ? seq[idx + 1] : null;
  const mi = course.modules.indexOf(module);
  const li = module.lessons.indexOf(lesson);
  const modulSebelum = mi > 0 ? course.modules[mi - 1] : null;
  const modulBerikut = mi < course.modules.length - 1 ? course.modules[mi + 1] : null;
  const done = Progress.isDone(lesson.id);
  let bukaKunci = null; // diisi saat tombol navigasi dibuat; dipanggil bila kuis lulus
  Progress.touch(lesson.id); // ingat pelajaran terakhir yang dibuka

  wrap.appendChild(el(`
    <div class="crumb">
      <a href="#/">Beranda</a> / <a href="#/course/${course.id}">${esc(course.title)}</a> / <span>${esc(lesson.title)}</span>
    </div>
    <header class="lesson-head" style="--accent:${course.color}">
      <span class="lvl-badge lvl-${module.level.toLowerCase()}">${esc(module.level)}</span>
      <h1>${esc(lesson.title)}</h1>
      <small>⏱ ${esc(lesson.duration)} ${done ? '• <span class="ok">✓ Selesai</span>' : ""}</small>
      <span class="lesson-pos">Modul ${mi + 1} dari ${course.modules.length} · ${esc(module.title)} · Pelajaran ${li + 1} dari ${module.lessons.length}</span>
    </header>
  `));

  // Jembatan di awal modul: apa isi modul ini & dari mana kita datang
  if (li === 0) {
    wrap.appendChild(el(`
      <aside class="modul-jembatan masuk">
        <b>📘 Awal Modul ${mi + 1}: ${esc(module.title)}</b>
        <p>${esc(module.summary)}</p>
        ${modulSebelum ? `<small>Sebelumnya kamu menuntaskan Modul ${mi}: ${esc(modulSebelum.title)}.</small>` : ""}
      </aside>
    `));
  }

  // Tombol "Dengarkan" — hanya muncul bila ada suara Bahasa Indonesia asli di perangkat.
  if (Speech.supported && Speech.indoVoice()) {
    const ttsBtn = el(`<button class="btn ghost tts-btn">🔊 Dengarkan materi</button>`);
    ttsBtn.onclick = () => {
      if (Speech.speaking) {
        Speech.stop();
        ttsBtn.innerHTML = "🔊 Dengarkan materi";
        ttsBtn.classList.remove("playing");
      } else {
        Speech.speak(lessonNarration(lesson), () => {
          ttsBtn.innerHTML = "🔊 Dengarkan materi";
          ttsBtn.classList.remove("playing");
        });
        ttsBtn.innerHTML = "⏹ Hentikan suara";
        ttsBtn.classList.add("playing");
      }
    };
    wrap.appendChild(ttsBtn);
  }

  // Peta singkat SEBELUM materi: pembaca tahu dulu apa yang akan dipelajari
  if (lesson.keyPoints && lesson.keyPoints.length) {
    const pre = el(`<aside class="lesson-preview"><h3>🎯 Yang akan kamu pelajari</h3><ul></ul></aside>`);
    const ulp = pre.querySelector("ul");
    lesson.keyPoints.slice(0, 4).forEach((k) => ulp.appendChild(el(`<li>${esc(k)}</li>`)));
    wrap.appendChild(pre);
  }

  const body = el(`<article class="lesson-body"></article>`);
  body.innerHTML = lesson.content;
  wrap.appendChild(body);

  // Isi diagram statis (SVG) pada penanda <div data-diagram="...">
  body.querySelectorAll("[data-diagram]").forEach((node) => {
    const fn = typeof DIAGRAMS !== "undefined" && DIAGRAMS[node.dataset.diagram];
    if (fn) node.innerHTML = fn(node.dataset); // dataset dipakai diagram generik (flow/vs/layers/scale)
  });
  // Pasang demo interaktif pada penanda <div data-demo="...">
  body.querySelectorAll("[data-demo]").forEach((node) => {
    const fn = typeof DEMOS !== "undefined" && DEMOS[node.dataset.demo];
    if (fn) fn(node);
  });
  // Tabel lebar dibungkus agar bisa digeser sendiri di layar HP,
  // sehingga halamannya tidak ikut meleber ke samping.
  body.querySelectorAll("table").forEach((tbl) => {
    if (tbl.parentElement && tbl.parentElement.classList.contains("table-scroll")) return;
    const box = document.createElement("div");
    box.className = "table-scroll";
    tbl.parentNode.insertBefore(box, tbl);
    box.appendChild(tbl);
  });

  // Tandai istilah sulit agar bisa diklik untuk melihat artinya
  applyGlossary(body, 12);
  body.addEventListener("click", (e) => {
    const t = e.target.closest ? e.target.closest(".gloss-term") : null;
    body.querySelectorAll(".gloss-pop").forEach((p) => p.remove());
    if (!t) return;
    e.stopPropagation();
    t.appendChild(el(`<span class="gloss-pop"><b>${esc(t.dataset.term)}</b> — ${esc(t.dataset.def)}</span>`));
  });

  if (lesson.keyPoints && lesson.keyPoints.length) {
    const kp = el(`<aside class="keypoints"><h3>💡 Poin Penting</h3><ul></ul></aside>`);
    const ul = kp.querySelector("ul");
    lesson.keyPoints.forEach((k) => ul.appendChild(el(`<li>${esc(k)}</li>`)));
    wrap.appendChild(kp);
  }

  if (lesson.practice && lesson.practice.length) {
    wrap.appendChild(renderPractice(lesson));
  }

  if (lesson.quiz && lesson.quiz.length) {
    wrap.appendChild(renderQuiz(lesson, () => { if (bukaKunci) bukaKunci(); }));
  } else {
    const btn = el(`<button class="btn primary">Tandai Selesai ✓</button>`);
    btn.onclick = () => {
      Progress.markDone(lesson.id);
      router();
    };
    wrap.appendChild(btn);
  }

  // Jembatan di akhir modul: rangkuman & modul yang menyusul
  if (li === module.lessons.length - 1) {
    wrap.appendChild(el(`
      <aside class="modul-jembatan keluar">
        <b>🎓 Akhir Modul ${mi + 1}: ${esc(module.title)}</b>
        <p>Ringkasan modul ini: ${esc(module.summary)}</p>
        ${
          modulBerikut
            ? `<p class="mj-lanjut">Berikutnya — <b>Modul ${mi + 2}: ${esc(modulBerikut.title)}</b><br>${esc(modulBerikut.summary)}</p>`
            : `<p class="mj-lanjut">Ini modul terakhir jalur <b>${esc(course.title)}</b>. 🎉</p>`
        }
      </aside>
    `));
  }

  const nav = el(`<div class="lesson-nav"></div>`);
  if (prevLesson) nav.appendChild(el(`<a class="btn ghost nav-lesson" href="#/lesson/${prevLesson.id}"><small>← Sebelumnya</small><span>${esc(prevLesson.title)}</span></a>`));
  else nav.appendChild(el(`<span></span>`));
  let tombolNext = null;
  if (nextLesson) {
    tombolNext = el(`<a class="btn nav-lesson nav-next" href="#/lesson/${nextLesson.id}"><small>Berikutnya →</small><span>${esc(nextLesson.title)}</span></a>`);
    nav.appendChild(tombolNext);
  } else nav.appendChild(el(`<a class="btn" href="#/course/${course.id}">Kembali ke kursus</a>`));

  // Kunci tombol "Berikutnya" sampai kuis pelajaran ini benar semua
  const perluKuis = !!(lesson.quiz && lesson.quiz.length) && Progress.data.kunciKuis && !Progress.kuisLulus(lesson.id);
  const gembok = el(`
    <p class="nav-kunci"${perluKuis ? "" : " hidden"}>🔒 Jawab <b>semua soal kuis dengan benar</b> untuk membuka pelajaran berikutnya.
    Masih bisa melompat lewat daftar pelajaran di halaman kursus.</p>
  `);
  function kunciNav(kunci) {
    if (!tombolNext) return;
    tombolNext.classList.toggle("terkunci", kunci);
    if (kunci) tombolNext.setAttribute("aria-disabled", "true");
    else tombolNext.removeAttribute("aria-disabled");
    gembok.hidden = !kunci;
  }
  if (tombolNext) {
    kunciNav(perluKuis);
    tombolNext.addEventListener("click", (e) => {
      if (tombolNext.classList.contains("terkunci")) {
        e.preventDefault();
        const kuisEl = wrap.querySelector(".quiz");
        if (kuisEl) kuisEl.scrollIntoView({ behavior: "smooth", block: "center" });
        gembok.classList.add("goyang");
        setTimeout(() => gembok.classList.remove("goyang"), 600);
      }
    });
  }
  bukaKunci = () => kunciNav(false);
  wrap.appendChild(gembok);
  wrap.appendChild(nav);

  return wrap;
}

/* ---------- Komponen: Kuis ---------- */
function renderQuiz(lesson, onLulus) {
  const box = el(`
    <section class="quiz">
      <h3>📝 Kuis — uji pemahamanmu</h3>
      <div class="quiz-questions"></div>
      <button class="btn primary quiz-submit">Periksa Jawaban</button>
      <div class="quiz-result" hidden></div>
    </section>
  `);
  const qWrap = box.querySelector(".quiz-questions");
  const chosen = new Array(lesson.quiz.length).fill(null);

  lesson.quiz.forEach((q, qi) => {
    const qEl = el(`<div class="q"><p class="q-text"><b>${qi + 1}.</b> ${esc(q.q)}</p><div class="opts"></div><div class="explain" hidden></div></div>`);
    const opts = qEl.querySelector(".opts");
    // Urutan pilihan diacak ulang setiap percobaan, supaya mengulang kuis tidak bisa
    // diselesaikan hanya dengan mengingat POSISI jawaban yang tadi ditandai benar.
    const urutan = q.options.map((_, i) => i);
    for (let i = urutan.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [urutan[i], urutan[j]] = [urutan[j], urutan[i]];
    }
    urutan.forEach((oi) => {
      const o = el(`<button class="opt" data-qi="${qi}" data-oi="${oi}">${esc(q.options[oi])}</button>`);
      o.onclick = () => {
        if (box.classList.contains("locked")) return;
        chosen[qi] = oi;
        opts.querySelectorAll(".opt").forEach((b) => b.classList.remove("sel"));
        o.classList.add("sel");
      };
      opts.appendChild(o);
    });
    qWrap.appendChild(qEl);
  });

  box.querySelector(".quiz-submit").onclick = () => {
    if (chosen.includes(null)) {
      alert("Jawab semua pertanyaan dulu ya 🙂");
      return;
    }
    box.classList.add("locked");
    let correct = 0;
    const qEls = qWrap.querySelectorAll(".q");
    lesson.quiz.forEach((q, qi) => {
      const opts = qEls[qi].querySelectorAll(".opt");
      opts.forEach((b) => {
        const oi = parseInt(b.dataset.oi, 10);
        if (oi === q.answer) b.classList.add("correct");
        else if (oi === chosen[qi]) b.classList.add("wrong");
        b.disabled = true;
      });
      if (chosen[qi] === q.answer) correct++;
      const ex = qEls[qi].querySelector(".explain");
      ex.hidden = false;
      ex.innerHTML = `<b>${chosen[qi] === q.answer ? "✓ Benar." : "✗ Kurang tepat."}</b> ${esc(q.explain)}`;
      ex.classList.add(chosen[qi] === q.answer ? "ex-ok" : "ex-no");
    });

    const total = lesson.quiz.length;
    const lulus = correct === total;
    if (lulus) Progress.markDone(lesson.id, { correct, total });
    else Progress.simpanSkor(lesson.id, { correct, total });
    if (lulus && typeof onLulus === "function") onLulus();

    const res = box.querySelector(".quiz-result");
    res.hidden = false;
    res.className = "quiz-result " + (lulus ? "good" : "meh");
    res.innerHTML = `
      <b>Skor: ${correct}/${total}.</b>
      ${
        lulus
          ? "Semua benar! Pelajaran ini ditandai selesai ✓ dan tombol <b>Berikutnya</b> sudah terbuka."
          : `Kurang ${total - correct} lagi. Baca penjelasan di tiap soal, lalu ulangi — <b>semua soal harus benar</b> agar pelajaran ini dihitung selesai.`
      }
      <br><button class="btn ghost retry">Ulangi Kuis</button>
    `;
    res.querySelector(".retry").onclick = () => {
      const found = findLesson(lesson.id);
      const fresh = renderLesson(found);
      box.closest(".page").replaceWith(fresh);
      window.scrollTo(0, 0);
    };
    box.querySelector(".quiz-submit").hidden = true;
    res.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return box;
}

/* ---------- Komponen: Latihan Praktik ---------- */
function renderPractice(lesson) {
  const box = el(`<section class="practice"><h3>✍️ Latihan</h3><p class="pr-sub">Kerjakan dulu, baru periksa. Ada petunjuk kalau buntu.</p></section>`);

  lesson.practice.forEach((p, pi) => {
    const item = el(`<div class="pr-item"></div>`);
    item.appendChild(el(`<p class="pr-q"><b>${pi + 1}.</b> ${esc(p.q)}</p>`));
    const fb = el(`<div class="pr-fb" hidden></div>`);
    let getAnswer;

    if (p.type === "choice") {
      const opts = el(`<div class="pr-opts"></div>`);
      let chosen = null;
      p.options.forEach((opt, oi) => {
        const o = el(`<button class="opt pr-opt">${esc(opt)}</button>`);
        o.onclick = () => {
          if (item.classList.contains("answered")) return;
          chosen = oi;
          opts.querySelectorAll(".pr-opt").forEach((b) => b.classList.remove("sel"));
          o.classList.add("sel");
        };
        opts.appendChild(o);
      });
      item.appendChild(opts);
      getAnswer = () => chosen;
    } else {
      const inWrap = el(`<div class="pr-inwrap"></div>`);
      const inp = el(`<input class="pr-input" type="number" placeholder="jawabanmu" step="any">`);
      inWrap.appendChild(inp);
      if (p.unit) inWrap.appendChild(el(`<span class="pr-unit">${esc(p.unit)}</span>`));
      item.appendChild(inWrap);
      getAnswer = () => (inp.value === "" ? null : parseFloat(inp.value));
    }

    const check = el(`<button class="btn primary pr-check">Periksa</button>`);
    const hintBtn = el(`<button class="btn ghost pr-hint-btn">💡 Petunjuk</button>`);
    const hintBox = el(`<div class="pr-hint" hidden></div>`);
    if (p.hint) {
      hintBox.textContent = "💡 " + p.hint;
      hintBtn.onclick = () => (hintBox.hidden = !hintBox.hidden);
    } else {
      hintBtn.style.display = "none";
    }

    check.onclick = () => {
      const a = getAnswer();
      if (a === null || (typeof a === "number" && isNaN(a))) {
        alert("Isi jawabanmu dulu ya 🙂");
        return;
      }
      const correct = p.type === "choice" ? a === p.answer : Math.abs(a - p.answer) < (p.tol || 0.001);
      item.classList.add("answered");
      fb.hidden = false;
      fb.className = "pr-fb " + (correct ? "ok" : "no");
      fb.innerHTML = `<b>${correct ? "✓ Benar!" : "✗ Belum tepat."}</b> ${p.solution ? esc(p.solution) : ""}`;
      if (p.type === "choice") {
        item.querySelectorAll(".pr-opt").forEach((b, oi) => {
          if (oi === p.answer) b.classList.add("correct");
          else if (oi === a) b.classList.add("wrong");
          b.disabled = true;
        });
      }
    };

    const controls = el(`<div class="pr-controls"></div>`);
    controls.appendChild(check);
    controls.appendChild(hintBtn);
    item.appendChild(controls);
    item.appendChild(hintBox);
    item.appendChild(fb);
    box.appendChild(item);
  });
  return box;
}

/* ---------- Halaman: Glosarium ---------- */
const GLOSSARY = [
  ["Algoritma", "Langkah-langkah/aturan yang diikuti komputer untuk menyelesaikan tugas."],
  ["API", "Jembatan yang memungkinkan satu aplikasi memakai layanan/aplikasi lain lewat kode."],
  ["Bias (AI)", "Kecenderungan tidak adil pada AI akibat data latih yang berat sebelah."],
  ["Bitcoin", "Cryptocurrency pertama (2009), aplikasi pertama teknologi blockchain."],
  ["Blockchain", "Buku besar digital yang tersebar, transparan, dan sulit diubah."],
  ["Cold wallet", "Dompet crypto offline (perangkat keras), lebih aman untuk dana besar."],
  ["DApp", "Aplikasi terdesentralisasi yang backend-nya berjalan di smart contract."],
  ["DeFi", "Layanan keuangan (pinjam, tukar, bunga) tanpa bank, lewat smart contract."],
  ["Deep Learning", "Neural network dengan banyak lapisan untuk menangkap pola rumit."],
  ["EVM", "Ethereum Virtual Machine — mesin yang menjalankan smart contract Ethereum."],
  ["Ethereum", "Blockchain yang bisa menjalankan program (smart contract); koinnya ETH."],
  ["Gas / Fee", "Biaya yang dibayar untuk memproses transaksi di blockchain."],
  ["Halusinasi", "Saat AI mengarang informasi yang terdengar benar padahal salah."],
  ["Inference", "Memakai model AI yang sudah dilatih untuk menghasilkan jawaban."],
  ["LLM", "Large Language Model — AI bahasa besar seperti ChatGPT/Claude."],
  ["Machine Learning", "Cabang AI yang membuat mesin belajar pola dari data."],
  ["Neural Network", "Jaringan 'neuron' buatan berlapis yang terinspirasi otak."],
  ["NFT", "Token unik (ERC-721) untuk membuktikan kepemilikan barang digital."],
  ["Overfitting", "Model menghafal data latih sehingga gagal pada data baru."],
  ["Private key", "Kunci rahasia yang membuktikan kepemilikan & menandatangani transaksi."],
  ["Prompt", "Instruksi/pertanyaan yang diberikan ke AI."],
  ["Proof of Stake", "Konsensus dengan mengunci koin sebagai jaminan (hemat energi)."],
  ["Proof of Work", "Konsensus dengan lomba komputasi (dipakai Bitcoin, boros energi)."],
  ["RAG", "Teknik menyelipkan dokumen relevan ke prompt agar jawaban AI lebih akurat."],
  ["Seed phrase", "12-24 kata pemulihan dompet crypto; wajib dirahasiakan."],
  ["Smart contract", "Program otomatis 'JIKA-MAKA' yang berjalan di blockchain."],
  ["Solidity", "Bahasa pemrograman utama untuk menulis smart contract Ethereum."],
  ["Stablecoin", "Cryptocurrency yang nilainya dipatok stabil ke aset seperti dolar."],
  ["Token", "Aset digital yang dibuat di atas blockchain lewat smart contract."],
  ["Training", "Proses melatih model AI dari banyak contoh secara berulang."],
  ["Transformer", "Arsitektur AI (2017) di balik LLM modern; pakai mekanisme attention."],
  ["Wallet", "Dompet digital yang menyimpan kunci untuk mengakses crypto-mu."],
  ["Web3", "Visi internet terdesentralisasi di mana pengguna memiliki data & asetnya."],
  // --- Akuntansi ---
  ["Akrual", "Basis pencatatan saat transaksi terjadi, bukan saat uang berpindah (standar akuntansi)."],
  ["Arus Kas", "Laporan keuangan yang melacak uang tunai masuk & keluar (operasi, investasi, pendanaan)."],
  ["Aset", "Segala sesuatu yang dimiliki bisnis: kas, persediaan, peralatan, gedung."],
  ["Buku Besar", "Kumpulan semua akun beserta saldonya (hasil posting dari jurnal)."],
  ["Debit", "Sisi kiri sebuah akun; menambah Aset & Beban."],
  ["Ekuitas", "Bagian milik pemilik = Aset − Kewajiban (modal)."],
  ["HPP", "Harga Pokok Penjualan — biaya langsung barang yang terjual."],
  ["Jurnal", "Catatan transaksi secara kronologis (urut waktu) berisi debit & kredit."],
  ["Kewajiban", "Utang bisnis kepada pihak lain (utang bank, utang usaha)."],
  ["Kredit", "Sisi kanan sebuah akun; menambah Kewajiban, Ekuitas, & Pendapatan."],
  ["Laba Rugi", "Laporan kinerja satu periode: Pendapatan − Beban = laba/rugi bersih."],
  ["Likuiditas", "Kemampuan bisnis membayar kewajiban jangka pendek (mis. current ratio)."],
  ["Modal Kerja", "Aset Lancar − Kewajiban Lancar; napas operasional jangka pendek."],
  ["Neraca", "Laporan posisi keuangan pada satu tanggal: Aset = Kewajiban + Ekuitas."],
  ["Penyusutan", "Penyebaran biaya aset jangka panjang selama masa manfaatnya (depresiasi)."],
  ["Titik Impas", "Break-even: jumlah penjualan saat tidak untung & tidak rugi."],
  // --- Produksi / lanjutan ---
  ["Embedding", "Mengubah teks menjadi vektor angka agar kemiripan makna bisa dihitung (dipakai di RAG)."],
  ["LangChain", "Framework dengan blok siap pakai (chain, memory, retriever, agent) untuk membangun aplikasi LLM."],
  ["ethers.js", "Library JavaScript untuk menghubungkan aplikasi web ke smart contract blockchain."],
  ["MetaMask", "Dompet crypto berbentuk ekstensi browser; juga berfungsi sebagai login Web3."],
  ["Testnet", "Jaringan blockchain uji coba gratis untuk berlatih tanpa risiko uang sungguhan."],
  ["OpenZeppelin", "Pustaka smart contract teruji & standar industri untuk membangun token dengan aman."],
  ["EPS", "Earnings Per Share — laba bersih dibagi jumlah saham (laba per lembar saham)."],
  ["P/E", "Price-to-Earnings — harga saham dibagi EPS; ukuran 'mahal/murah' relatif terhadap laba."],
  ["ROE", "Return on Equity — laba bersih dibagi ekuitas; imbal hasil bagi modal pemilik."],
  ["TVL", "Total Value Locked — total dana yang dikunci di protokol DeFi; ukuran adopsi."],
  ["Tokenomics", "Desain ekonomi sebuah token: pasokan, distribusi, dan jadwal pelepasan (vesting)."],
  ["Runway", "Berapa bulan bisnis bisa bertahan dengan kas yang ada (Kas ÷ pengeluaran bulanan)."],
  ["Unit Economics", "Untung/rugi per satu unit atau pelanggan; harus positif sebelum menskalakan."],
  // --- Metrik & fundamental ---
  ["Net Profit", "Laba Bersih — sisa uang setelah semua beban, bunga & pajak (bottom line)."],
  ["Free Cash Flow", "FCF — kas bebas yang tersisa: Arus Kas Operasi − Belanja Modal (CapEx)."],
  ["ROI", "Return on Investment — (Keuntungan − Biaya) ÷ Biaya × 100%; imbal hasil sebuah investasi."],
  ["ROA", "Return on Assets — Laba Bersih ÷ Total Aset; efisiensi aset menghasilkan laba."],
  ["ROIC", "Return on Invested Capital — laba operasi bersih ÷ modal diinvestasikan (utang + ekuitas)."],
  ["EBITDA", "Laba sebelum bunga, pajak, depresiasi & amortisasi; proksi kas operasional."],
  ["RAB", "Rencana Anggaran Biaya — perkiraan rinci semua biaya proyek sebelum dijalankan."],
  ["ROTI", "Return on Time Invested — imbal hasil atas waktu/usaha; alat produktivitas (bukan rasio laporan keuangan)."],
  ["Precision", "Dari yang diprediksi positif, berapa % benar: TP ÷ (TP + FP)."],
  ["Recall", "Dari yang benar-benar positif, berapa % tertangkap: TP ÷ (TP + FN)."],
  ["Gradient Descent", "Cara model belajar: melangkah berlawanan arah gradien untuk mengecilkan loss."],
  ["Loss", "Angka yang mengukur seberapa salah model; training berusaha meminimalkannya."],
  ["Parameter", "'Kenop' angka yang dipelajari model; makin banyak makin berkapasitas (LLM: miliaran)."],
  ["Merkle Tree", "Pohon hash yang meringkas semua transaksi blok jadi satu Merkle root."],
  ["Fungsi Hash", "Mengubah data apa pun jadi sidik jari berukuran tetap; satu arah & efek avalanche."],
  ["Gas", "Satuan kerja komputasi di blockchain; biaya = gas dipakai × harga gas."],
  // --- Lanjutan (valuasi, tools, Web3) ---
  ["PBV", "Price to Book Value — Harga Saham ÷ Nilai Buku per Saham; membandingkan harga dengan nilai buku."],
  ["Nilai Buku", "Book Value — Total Ekuitas (Aset − Kewajiban); nilai bersih menurut catatan."],
  ["PEG", "Price/Earnings to Growth — PER ÷ pertumbuhan laba (%); menilai harga relatif terhadap pertumbuhan."],
  ["Enterprise Value", "EV = Kapitalisasi Pasar + Total Utang − Kas; harga mengambil alih perusahaan utuh."],
  ["EV/EBITDA", "Valuasi netral struktur modal & pajak; Enterprise Value dibagi EBITDA."],
  ["Quick Ratio", "Acid test — (Aset Lancar − Persediaan) ÷ Kewajiban Lancar; likuiditas versi ketat."],
  ["CrewAI", "Framework untuk merakit & mengorkestrasi 'kru' beberapa agen AI berperan (multi-agent)."],
  ["Multi-Agent", "Beberapa agen AI dengan peran berbeda yang berkolaborasi menyelesaikan tugas."],
  ["Vector Database", "Basis data yang menyimpan embedding & mencari vektor termirip dengan cepat (infrastruktur RAG)."],
  ["Fine-tuning", "Melatih ulang model dengan datamu untuk mengubah gaya/perilaku keluarannya."],
  ["Hugging Face", "Pusat komunitas berisi ribuan model AI open-source & dataset."],
  ["MCP", "Model Context Protocol — standar menghubungkan AI ke alat & data secara seragam & aman."],
  ["Layer 2", "Jaringan di atas blockchain utama (L1) yang memproses transaksi murah & cepat, mewarisi keamanan L1."],
  ["Rollup", "Teknik Layer 2 yang menggabungkan banyak transaksi lalu menyetor buktinya ke L1 (Optimistic / ZK)."],
  ["Oracle", "Jembatan tepercaya yang membawa data dunia nyata (harga, cuaca) ke smart contract (mis. Chainlink)."],
  ["DAO", "Decentralized Autonomous Organization — organisasi yang dikelola komunitas lewat voting token & smart contract."],
  ["Zero-Knowledge Proof", "ZKP — membuktikan sesuatu benar tanpa mengungkap datanya; dipakai untuk privasi & ZK-Rollup."],
  // --- Terapan (biaya, generatif, DeFi) ---
  ["CapEx", "Capital Expenditure / Belanja Modal — uang untuk aset jangka panjang; dicatat sebagai aset & disusutkan."],
  ["OpEx", "Operating Expenditure / Belanja Operasional — biaya menjalankan bisnis harian; langsung jadi beban."],
  ["Overhead", "Biaya tidak langsung yang tak bisa dilacak ke satu produk (listrik pabrik, sewa, supervisor)."],
  ["PPN", "Pajak Pertambahan Nilai — pajak konsumsi (umumnya 11%) yang dipungut dari pelanggan & disetor ke negara."],
  ["PPh", "Pajak Penghasilan — pajak atas penghasilan/laba (PPh Final UMKM, PPh Badan, PPh 21)."],
  ["Diffusion Model", "Model AI pembuat gambar: mengubah noise acak jadi gambar bertahap, diarahkan teks prompt."],
  ["RLHF", "Reinforcement Learning from Human Feedback — melatih AI dengan peringkat manusia agar lebih membantu & aman."],
  ["Alignment", "Menyelaraskan perilaku AI dengan nilai & niat manusia (aman & benar)."],
  ["MLOps", "Praktik men-deploy, memantau, & memelihara model AI di produksi."],
  ["Data Drift", "Pergeseran pola data seiring waktu yang membuat model lama makin tidak akurat."],
  ["Sistem Rekomendasi", "AI yang memprediksi yang kamu suka (collaborative filtering & content-based)."],
  ["AMM", "Automated Market Maker — DEX yang memakai rumus pada liquidity pool (x×y=k), bukan order book."],
  ["Liquidity Pool", "Kolam pasangan token yang disetor LP; sumber likuiditas untuk pertukaran di AMM."],
  ["Impermanent Loss", "Kerugian potensial Liquidity Provider saat harga token dalam pool bergerak jauh."],
  ["Bridge", "Jembatan yang memindahkan aset/data antar-blockchain berbeda; sering jadi target peretasan besar."],
  ["Depeg", "Saat stablecoin kehilangan patokan nilainya (mis. tak lagi ≈ 1 USD)."],
  // --- Dasar & pendalaman ---
  ["Rata-rata", "Mean — jumlahkan semua nilai lalu bagi banyaknya data."],
  ["Peluang", "Kemungkinan sesuatu terjadi, dari 0% (mustahil) sampai 100% (pasti); dasar cara AI menjawab."],
  ["Desentralisasi", "Kendali & data tersebar ke banyak pihak setara, bukan satu pusat."],
  ["Kekayaan Bersih", "Ekuitas — bagian yang benar-benar milikmu = Aset − Utang."],
  ["Decision Tree", "Pohon Keputusan — serangkaian pertanyaan ya/tidak yang menuntun ke keputusan."],
  ["Random Forest", "Gabungan banyak Decision Tree (ensemble) agar lebih akurat & tahan overfitting."],
  ["k-NN", "k-Nearest Neighbors — mengklasifikasi berdasarkan tetangga terdekat ('hal mirip berdekatan')."],
  ["Clustering", "Mengelompokkan data yang saling mirip tanpa label (mis. k-Means); unsupervised."],
  ["Halving", "Aturan Bitcoin: imbalan penambang dibagi dua tiap ~4 tahun, memperlambat pasokan baru."],
  ["Mining", "Penambangan — lomba menebak angka (nonce) agar hash blok memenuhi syarat (Proof of Work)."],
  ["Cold Wallet", "Dompet crypto offline (mis. hardware wallet); paling aman untuk simpanan besar."],
  ["Neraca Saldo", "Trial balance — daftar saldo akun untuk memastikan total debit = total kredit."],
  ["FIFO", "First In First Out — stok yang masuk duluan dianggap terjual duluan."],
  ["LIFO", "Last In First Out — stok yang masuk terakhir dianggap terjual duluan (dilarang di PSAK/IFRS)."],
  ["DCF", "Discounted Cash Flow — menilai bisnis dari total arus kas masa depan yang didiskon ke nilai sekarang."],
  ["Nilai Waktu Uang", "Uang sekarang lebih berharga daripada uang di masa depan (bisa diinvestasikan & bertumbuh)."],
  // --- Prospek & risiko masa depan ---
  ["Altman Z-Score", "Model (1968) yang memperkirakan risiko KEBANGKRUTAN perusahaan ~2 tahun ke depan; di atas 2,99 aman, di bawah 1,81 rawan."],
  ["Piotroski F-Score", "Checklist 9 poin kekuatan fundamental (profitabilitas, utang/likuiditas, efisiensi); 8–9 kuat, 0–3 lemah."],
  ["Expected Value", "Nilai Harapan — jumlah dari (peluang × hasil) tiap skenario; rata-rata tertimbang semua kemungkinan."],
  ["Analisis Skenario", "Menyusun beberapa versi masa depan (terbaik/tengah/terburuk) beserta peluangnya."],
  ["Analisis Sensitivitas", "Menguji seberapa besar hasil berubah bila satu asumsi digeser; hasil yang mudah berubah = penilaian rapuh."],
  ["Margin of Safety", "Ruang aman: (Nilai Wajar − Harga) ÷ Nilai Wajar × 100%; bantalan bila analisis meleset."],
  // --- Kualitas bisnis & keunggulan kompetitif ---
  ["Alokasi Modal", "Capital allocation — keputusan memakai kas perusahaan: ekspansi, R&D/iklan, akuisisi, atau buyback/dividen."],
  ["Economic Moat", "Parit ekonomi — keunggulan yang melindungi laba dari pesaing (merek, network effect, switching cost, skala, paten)."],
  ["Switching Cost", "Biaya/kerepotan pelanggan bila berpindah ke pesaing; salah satu jenis moat terkuat."],
  ["Network Effect", "Makin banyak pengguna, makin bernilai produk bagi tiap pengguna (marketplace, media sosial)."],
  ["Pricing Power", "Kemampuan menaikkan harga tanpa kehilangan pelanggan; tanda merek & parit yang kuat."],
  ["Asset Light", "Bisnis yang butuh sedikit aset untuk tumbuh → return on capital tinggi & kas bebas besar."],
  ["Share Buyback", "Perusahaan membeli kembali sahamnya; hanya menambah nilai bila harganya di bawah nilai wajar."],
  ["Skin in the Game", "Manajemen ikut memiliki saham sehingga kepentingannya sejalan dengan pemegang saham lain."],
  ["Risiko Konsentrasi", "Ketergantungan berlebihan pada satu pelanggan, pemasok, produk, atau regulasi."],
  // --- Ekonomi AI & protokol (jembatan antar-jalur) ---
  ["Biaya Inferensi", "Biaya komputasi tiap kali model AI dipakai; ini biaya variabel yang menipiskan margin produk AI."],
  ["Thin Wrapper", "Aplikasi berupa lapisan tipis di atas API model orang lain tanpa keunggulan lain — mudah ditiru, tanpa moat."],
  ["Build vs Buy", "Pilihan melatih/host model sendiri (CapEx) atau memakai API (OpEx)."],
  ["Fee Protokol", "Pendapatan nyata sebuah protokol crypto dari biaya yang dibayar pengguna (gas, biaya swap, dll)."],
  ["Treasury DAO", "Kas protokol yang dialokasikan lewat voting: pengembangan, grants, buyback-burn, atau bagi hasil."],
  ["Buyback & Burn", "Protokol membeli tokennya lalu membakarnya (mengurangi pasokan) — padanan share buyback."],
  ["Real Yield", "Imbal hasil yang didanai fee/pendapatan nyata, bukan dari mencetak token baru (emisi)."],
  ["Emisi Token", "Pencetakan token baru sebagai insentif; setara penerbitan saham baru — mengencerkan kepemilikan (dilusi)."],
  ["FDV", "Fully Diluted Valuation — nilai proyek bila SELURUH token sudah beredar; penanda tekanan pasokan masa depan."],
  ["Mercenary Capital", "Pengguna/dana yang datang hanya karena insentif token & pergi saat insentif berhenti — bukan moat."],
  // --- Dunia investasi & pengelolaan dana ---
  ["Indeks", "Sekumpulan saham sebagai tolok ukur kinerja pasar (mis. IHSG, S&P 500)."],
  ["Reksa Dana", "Dana patungan yang dikelola manajer investasi; dibeli/dijual pada harga akhir hari (NAB)."],
  ["ETF", "Exchange Traded Fund — mirip reksa dana tapi diperdagangkan di bursa seperti saham; ETF indeks umumnya berbiaya rendah."],
  ["Expense Ratio", "Biaya tahunan sebuah reksa dana/ETF; kecil di kertas, berdampak besar dalam jangka panjang."],
  ["Pengelolaan Aktif", "Manajer memilih saham demi mengalahkan indeks; biayanya lebih tinggi."],
  ["Pengelolaan Pasif", "Meniru indeks dengan biaya rendah; tidak berusaha mengalahkan pasar."],
  ["Hedge Fund", "Dana kelolaan dengan kebebasan strategi luas (leverage, short, derivatif); hanya untuk investor terkualifikasi."],
  ["2 dan 20", "Struktur biaya hedge fund: ~2% dari dana kelolaan per tahun + ~20% dari keuntungan."],
  ["High-Water Mark", "Manajer baru boleh memungut performance fee setelah menutup kerugian sebelumnya."],
  ["Private Equity", "Membeli perusahaan tertutup (sering lewat LBO), memperbaikinya, lalu menjual kembali."],
  ["LBO", "Leveraged Buyout — akuisisi dibiayai utang besar; utangnya ditanggung perusahaan yang dibeli."],
  ["Venture Capital", "Pendanaan startup tahap awal; hasilnya mengikuti power law (mayoritas gagal, satu pemenang besar)."],
  ["Survivorship Bias", "Data hanya memuat yang 'selamat' — dana gagal sudah ditutup & hilang, membuat kinerja tampak lebih baik."],
  ["Diversifikasi", "Menyebar dana ke banyak aset agar kegagalan satu tidak menghancurkan seluruh portofolio."],
  // --- Pelengkap (suara, peramalan, regulasi, CBDC, RWA, GameFi) ---
  ["ASR", "Automatic Speech Recognition — mengubah suara menjadi teks (speech-to-text)."],
  ["TTS", "Text-to-Speech — mengubah teks menjadi suara."],
  ["Voice Cloning", "Meniru suara seseorang dengan AI; berguna untuk dubbing, tapi rawan disalahgunakan untuk penipuan."],
  ["Deret Waktu", "Time series — data yang terikat urutan waktu; unsurnya tren, musiman, & noise."],
  ["Rata-rata Bergerak", "Moving average — meredam naik-turun acak untuk menyoroti arah tren."],
  ["EU AI Act", "Regulasi AI Uni Eropa berbasis tingkat risiko: dilarang, risiko tinggi, terbatas, minimal."],
  ["UU PDP", "Undang-Undang Perlindungan Data Pribadi di Indonesia yang mengatur pemakaian data orang."],
  ["CBDC", "Central Bank Digital Currency — uang resmi negara dalam bentuk digital, diterbitkan bank sentral (terpusat)."],
  ["Rupiah Digital", "CBDC Indonesia yang dikembangkan Bank Indonesia (dikenal lewat Proyek Garuda), dimulai dari sisi wholesale."],
  ["RWA", "Real World Assets — tokenisasi aset nyata (properti, obligasi, emas) menjadi token di blockchain."],
  ["Kepemilikan Pecahan", "Memecah aset besar jadi bagian kecil sehingga lebih terjangkau (mis. lewat tokenisasi)."],
  ["GameFi", "Game dengan ekonomi token (play-to-earn); rawan runtuh bila hadiah didanai emisi & pemain baru."],
  ["Token Sink", "Mekanisme menghabiskan/membakar token agar pasokan tidak membanjir & harga tidak jatuh."],
  // --- Matematika ---
  ["Vektor", "Deretan angka yang mewakili sesuatu; embedding adalah vektor makna."],
  ["Dot Product", "Kalikan pasangan angka seposisi lalu jumlahkan; dasar perhitungan neuron & kemiripan."],
  ["Cosine Similarity", "(a·b) ÷ (|a|×|b|) — mengukur kemiripan arah/makna dua vektor, nilainya −1 sampai 1."],
  ["Turunan", "Kemiringan sebuah fungsi: seberapa cepat hasilnya berubah saat inputnya digeser sedikit."],
  ["Chain Rule", "Aturan rantai (f(g(x)))' = f'(g(x))×g'(x); jantung backpropagation."],
  ["Learning Rate", "α — besar langkah pada gradient descent; terlalu besar melompati, terlalu kecil lambat."],
  ["Sigmoid", "σ(x) = 1 ÷ (1+e⁻ˣ); mengubah angka jadi nilai 0–1 (peluang)."],
  ["ReLU", "max(0, x) — fungsi aktivasi paling umum di lapisan tersembunyi."],
  ["Softmax", "eᶻⁱ ÷ Σeᶻʲ — mengubah skor mentah jadi peluang yang totalnya 100%."],
  ["Cross-Entropy", "Fungsi loss untuk klasifikasi & LLM: −Σ y·log(ŷ)."],
  ["MSE", "Mean Squared Error — rata-rata kuadrat selisih; loss untuk regresi."],
  ["Teorema Bayes", "P(A|B) = P(B|A)×P(A) ÷ P(B) — memperbarui keyakinan setelah melihat bukti."],
  ["Base Rate Fallacy", "Salah nalar saat kejadian langka: tes 99% akurat bisa menghasilkan positif yang mayoritas salah-alarm."],
  ["Temperature", "Pembagi skor sebelum softmax pada LLM; rendah = konsisten, tinggi = bervariasi."],
  ["CAGR", "(Akhir ÷ Awal)^(1/tahun) − 1 — pertumbuhan majemuk rata-rata per tahun."],
  ["Future Value", "FV = PV × (1+r)ⁿ — nilai uang sekarang bila ditumbuhkan ke masa depan."],
  ["Present Value", "PV = FV ÷ (1+r)ⁿ — nilai uang masa depan bila dibawa ke masa kini."],
  ["Aturan 72", "Perkiraan cepat waktu uang berlipat ganda: 72 ÷ persen bunga."],
  ["NPV", "Net Present Value = Σ[CFt ÷ (1+r)^t] − investasi awal; positif berarti layak."],
  ["IRR", "Internal Rate of Return — tingkat diskon yang membuat NPV = 0."],
  ["Anuitas", "Pembayaran tetap selama n periode; PV = PMT × [1−(1+r)⁻ⁿ] ÷ r (dasar cicilan)."],
  ["Perpetuitas", "Pembayaran tetap selamanya; PV = PMT ÷ r."],
  ["Gordon Growth", "PV = CF(1+g) ÷ (r−g) — dasar Terminal Value pada DCF; berbahaya bila g mendekati r."],
  ["Modulo", "Sisa pembagian ('matematika jam'); dasar kriptografi kunci publik."],
  ["Logaritma Diskret", "Masalah membalik g^x mod p untuk menemukan x — praktis mustahil, dasar keamanan kunci."],
  ["Slippage", "Selisih harga awal dengan harga efektif yang didapat; membesar bila transaksi besar di kolam kecil."],
  // --- Arsitektur ML/DL & Gen AI ---
  ["Feature Engineering", "Mengolah data mentah jadi fitur bermakna; sering lebih berpengaruh daripada mengganti algoritma."],
  ["Penskalaan", "Menyamakan rentang antar-fitur (mis. jadi 0–1) agar tidak ada fitur menang hanya karena angkanya besar."],
  ["Validation Set", "Bagian data untuk menyetel model; test set hanya dipakai sekali di akhir sebagai ujian."],
  ["Cross-Validation", "Data dibagi k bagian yang bergantian jadi penguji, hasilnya dirata-rata — penilaian lebih stabil."],
  ["Hyperparameter", "Pengaturan yang ditentukan manusia sebelum training (learning rate, jumlah lapisan) — beda dari parameter yang dipelajari model."],
  ["Regularisasi", "Teknik menghukum model yang terlalu rumit (L1/L2, dropout, early stopping) agar tidak menghafal."],
  ["Dropout", "Mematikan sebagian neuron secara acak saat training agar model tidak bergantung pada satu jalur."],
  ["Boosting", "Melatih model berurutan; tiap model memperbaiki kesalahan model sebelumnya (mis. XGBoost)."],
  ["XGBoost", "Pustaka gradient boosting yang sangat akurat untuk data tabel; sering mengalahkan deep learning di data terstruktur."],
  ["CNN", "Convolutional Neural Network — menggeser filter kecil ke seluruh gambar untuk mendeteksi pola bertingkat."],
  ["Pooling", "Lapisan CNN yang merangkum & mengecilkan ukuran, mengambil nilai paling menonjol."],
  ["Transfer Learning", "Memakai model yang sudah terlatih lalu menyetelnya untuk tugas baru — cukup sedikit data."],
  ["RNN", "Recurrent Neural Network — memproses urutan sambil membawa ingatan; ingatannya memudar untuk jarak jauh."],
  ["LSTM", "Varian RNN dengan gerbang pengatur apa yang diingat/dilupakan sehingga ingatan bertahan lebih lama."],
  ["Attention", "Mekanisme yang memberi bobot: kata lain mana yang paling membantu memahami sebuah kata."],
  ["GAN", "Generative Adversarial Network — generator (pemalsu) melawan discriminator (polisi) hingga hasilnya meyakinkan."],
  ["Quantization", "Menyimpan angka model dengan presisi lebih rendah agar ukurannya menyusut & muat di perangkat kecil."],
  ["Distillation", "Model besar (guru) melatih model kecil (murid) agar ringan dengan kemampuan mendekati gurunya."],
  ["Mixture of Experts", "MoE — model dibagi jadi banyak 'ahli'; tiap permintaan hanya mengaktifkan sebagian."],
  // --- Kriptografi & era kuantum ---
  ["Kriptografi Simetris", "Satu kunci untuk mengunci & membuka (mis. AES) — cepat, tapi sulit mengirim kuncinya dengan aman."],
  ["Kriptografi Asimetris", "Sepasang kunci publik-privat (mis. RSA, ECC) — memecahkan masalah pengiriman kunci."],
  ["AES", "Advanced Encryption Standard — standar enkripsi simetris dunia (AES-128/256)."],
  ["ECDSA", "Algoritma tanda tangan digital berbasis kurva eliptik yang dipakai Bitcoin & Ethereum."],
  ["Nonce (ECDSA)", "Angka acak sekali pakai saat menandatangani; bila berulang/ditebak, kunci privat bisa dihitung."],
  ["Schnorr", "Skema tanda tangan penerus ECDSA (Taproot) yang bisa digabung — lebih hemat & privat."],
  ["Qubit", "Satuan komputer kuantum yang bisa berada dalam gabungan 0 dan 1 sekaligus (superposisi)."],
  ["Algoritma Shor", "Algoritma kuantum yang memecahkan RSA & ECC secara total — kunci privat bisa dihitung dari kunci publik."],
  ["Algoritma Grover", "Algoritma kuantum yang memangkas separuh kekuatan kriptografi simetris & hash — diatasi dengan memperbesar kunci."],
  ["PQC", "Post-Quantum Cryptography — kriptografi tahan kuantum yang tetap berjalan di komputer biasa."],
  ["ML-DSA", "Standar NIST (FIPS 204, dari Dilithium) untuk tanda tangan digital pasca-kuantum — calon pengganti ECDSA."],
  ["Harvest Now Decrypt Later", "Menyimpan data terenkripsi hari ini untuk dibuka kemudian saat komputer kuantum matang."],
  // --- Audit, biaya & kecurangan ---
  ["Activity-Based Costing", "ABC — membagi overhead berdasarkan aktivitas & pemicu biaya yang benar-benar dipakai tiap produk."],
  ["Cost Driver", "Pemicu biaya — ukuran yang menentukan besarnya biaya aktivitas (mis. jumlah penyetelan mesin)."],
  ["Varians", "Selisih realisasi dengan anggaran; menguntungkan/merugikan tergantung jenis posnya."],
  ["Anggaran Fleksibel", "Anggaran yang disesuaikan dulu ke tingkat aktivitas nyata sebelum dibandingkan dengan realisasi."],
  ["Segitiga Kecurangan", "Fraud triangle — tekanan + kesempatan + pembenaran; kesempatan paling bisa dikendalikan perusahaan."],
  ["Pemisahan Tugas", "Kontrol utama: yang menyetujui, mencatat, & memegang aset harus orang berbeda."],
  ["Earnings Management", "Memanfaatkan celah aturan agar laba terlihat mulus — legal tapi menyesatkan."],
  ["Hukum Benford", "Pada data alami, digit pertama '1' muncul ~30% dan '9' ~4,6%; penyimpangan jadi alat penyaring forensik."],
  ["Materialitas", "Batas nilai salah saji yang dianggap cukup besar untuk memengaruhi keputusan pembaca laporan."],
  ["Opini Auditor", "Pernyataan kewajaran laporan: wajar tanpa pengecualian, dengan pengecualian, tidak wajar, atau tidak menyatakan pendapat."],
  // --- Ekonomi makro ---
  ["Ekonomi Makro", "Cabang ekonomi yang melihat keseluruhan negara (PDB, inflasi, pengangguran), bukan satu perusahaan."],
  ["PDB", "Produk Domestik Bruto — total nilai semua barang & jasa yang dihasilkan negara dalam satu periode."],
  ["PDB Riil", "PDB yang sudah dibersihkan dari efek inflasi, menunjukkan pertumbuhan sesungguhnya."],
  ["Inflasi", "Kenaikan harga barang & jasa secara umum; sisi lainnya, nilai uang menurun."],
  ["Deflasi", "Penurunan harga secara umum; berbahaya karena orang menunda belanja sehingga ekonomi mandek."],
  ["IHK", "Indeks Harga Konsumen — alat ukur inflasi di Indonesia yang dihitung BPS."],
  ["Bunga Riil", "Bunga nominal dikurangi inflasi; bisa negatif walau saldo bertambah."],
  ["Kebijakan Moneter", "Kebijakan bank sentral (BI) mengatur jumlah uang beredar & suku bunga demi stabilitas nilai rupiah."],
  ["Suku Bunga Acuan", "BI-Rate — patokan bunga yang diikuti bunga kredit & deposito di seluruh sistem keuangan."],
  ["Kebijakan Fiskal", "Kebijakan pemerintah soal pajak (penerimaan) & belanja negara, dituangkan dalam APBN."],
  ["APBN", "Anggaran Pendapatan dan Belanja Negara — 'RAB'-nya sebuah negara."],
  ["Defisit Anggaran", "Belanja negara melebihi penerimaan; selisihnya ditutup utang (di Indonesia dibatasi 3% PDB)."],
  ["Tax Ratio", "(Penerimaan Pajak ÷ PDB) × 100% — porsi ekonomi yang berhasil dipungut jadi pajak."],
  ["PNBP", "Penerimaan Negara Bukan Pajak — mis. sumber daya alam, dividen BUMN, layanan pemerintah."],
  ["Kurs", "Nilai tukar — harga mata uang terhadap mata uang lain (mis. USD/IDR 16.000)."],
  ["Depresiasi (Kurs)", "Mata uang melemah — butuh lebih banyak rupiah untuk 1 dolar."],
  ["Currency Mismatch", "Utang dalam mata uang berbeda dari mata uang pemasukan — beban utang melonjak saat kurs bergerak."],
  ["Hedging", "Lindung nilai — mengunci harga/kurs di masa depan untuk mengurangi risiko."],
  ["Resesi", "Kemerosotan ekonomi; sering didefinisikan sebagai PDB riil menyusut dua kuartal berturut-turut."],
  ["Bisnis Siklikal", "Bisnis yang naik-turun tajam mengikuti siklus ekonomi (properti, otomotif, barang mewah)."],
  ["Bisnis Defensif", "Bisnis yang relatif stabil di segala kondisi (makanan pokok, obat, listrik)."],
  ["Konvergen", "Saat latihan model mengerucut dan berhenti di satu titik: melanjutkan latihan hampir tidak lagi menurunkan loss. Konvergen belum tentu bagus — bisa ke titik yang buruk atau sambil menghafal."],
  ["SHA-256", "Fungsi hash yang dipakai Bitcoin: mengubah data apa pun menjadi 64 karakter heksadesimal (256 bit)."],
  ["Heksadesimal", "Sistem angka dengan 16 simbol (0–9 dan a–f); satu karakter mewakili 4 bit."],
  ["Efek Longsor", "Sifat hash: mengubah sedikit saja data membuat sekitar separuh hash berubah (avalanche effect)."],
  ["Kunci Privat", "Angka acak raksasa yang rahasia; dipakai menandatangani transaksi. Siapa yang memegangnya menguasai dananya."],
  ["Kunci Publik", "Dihitung satu arah dari kunci privat; boleh diketahui orang dan dipakai untuk memeriksa tanda tangan."],
  ["Tanda Tangan Digital", "Bukti matematis bahwa pesan dibuat pemegang kunci privat dan tidak diubah; berbeda untuk setiap pesan."],
  ["Merkle Root", "Satu hash di header blok yang mewakili semua transaksi di dalam blok."],
  ["ID Transaksi", "Hash dari isi transaksi (txid), dipakai seperti nomor resi di block explorer."],
  ["Salt", "Teks acak yang dicampurkan ke password sebelum di-hash agar password sama menghasilkan hash berbeda."],
  ["Brain Wallet", "Dompet yang kuncinya dibuat dari kalimat pilihan sendiri — mudah ditebak dan sering dikuras."],
  ["Keccak-256", "Fungsi hash yang dipakai Ethereum, antara lain untuk membuat alamat dari kunci publik."],
  ["UTXO", "Cara Bitcoin mencatat dana sebagai koin-koin terpisah yang dibelanjakan utuh; sisanya menjadi kembalian."],
  ["Permintaan", "Banyaknya barang yang ingin dan mampu dibeli pada setiap tingkat harga."],
  ["Penawaran", "Banyaknya barang yang ingin dijual penjual pada setiap tingkat harga."],
  ["Harga Keseimbangan", "Harga ketika jumlah yang diminta sama dengan jumlah yang ditawarkan."],
  ["Ceteris Paribus", "Syarat \"hal lain dianggap tetap\" — hanya satu faktor yang diubah saat menganalisis."],
  ["Surplus", "Kelebihan pasokan: pada harga tertentu barang yang ditawarkan melebihi yang diminta."],
  ["Elastisitas Harga", "Persentase perubahan jumlah dibeli dibagi persentase perubahan harga; di atas 1 elastis, di bawah 1 inelastis."],
  ["HET", "Harga Eceran Tertinggi — batas harga maksimum yang ditetapkan pemerintah."],
  ["Inflasi Inti", "Komponen inflasi di luar harga pangan bergejolak dan harga yang diatur pemerintah; paling mencerminkan tekanan permintaan."],
  ["Shrinkflation", "Kenaikan harga tersembunyi: harga kemasan tetap, tetapi isinya dikurangi."],
  ["Hiperinflasi", "Inflasi ekstrem, sering didefinisikan sebagai kenaikan harga lebih dari 50% per bulan."],
  ["Imbal Hasil Riil", "Imbal hasil setelah memperhitungkan inflasi: (1 + hasil bersih) ÷ (1 + inflasi) − 1."],
  ["Sanering", "Pemotongan nilai uang oleh negara, misalnya uang Rp1.000 lama ditetapkan setara Rp1 baru pada 1965."],
  ["Reward", "Angka hadiah atau hukuman yang diterima agen reinforcement learning setelah bertindak."],
  ["Reward Hacking", "Saat agen menemukan cara mendapat reward tinggi tanpa melakukan hal yang sebenarnya diinginkan perancangnya."],
  ["Multi-Armed Bandit", "Masalah memilih berulang di antara beberapa pilihan yang nilainya belum diketahui, sambil menyeimbangkan eksplorasi dan eksploitasi."],
  ["ε-greedy", "Aturan memilih: dengan peluang ε mencoba aksi acak (eksplorasi), selebihnya memilih aksi yang perkiraannya terbaik."],
  ["Faktor Diskon", "Angka γ antara 0 dan 1 yang mengecilkan bobot reward masa depan dalam reinforcement learning."],
  ["Q-Learning", "Algoritma RL yang memperbarui tabel nilai aksi: Q baru = Q lama + α × (reward + γ × Q terbaik berikutnya − Q lama)."],
  ["Nilai Q", "Perkiraan seberapa bagus sebuah aksi dari keadaan tertentu, termasuk semua reward masa depan yang didiskon."],
  ["SARSA", "Varian Q-learning yang ikut memperhitungkan langkah acak agen sendiri, sehingga cenderung memilih jalan lebih aman."],
  ["DQN", "Deep Q-Network: neural network yang menggantikan tabel Q; terkenal karena belajar puluhan game Atari dari piksel layar."],
  ["PPO", "Proximal Policy Optimization: algoritma RL berbasis kebijakan yang banyak dipakai, termasuk dalam RLHF."],
  ["Self-Play", "Cara berlatih dengan melawan salinan diri sendiri, seperti yang dipakai AlphaZero."],
  ["Model Penilai", "Model yang dilatih dari peringkat buatan manusia untuk memberi skor jawaban; menjadi sumber reward dalam RLHF."],
  ["Rata-rata Harmonik", "Rata-rata yang berpihak pada angka kecil: balik tiap angka, rata-ratakan, lalu balik lagi. Dipakai F1; hanya tinggi bila semua angkanya tinggi."],
  ["F1", "Rata-rata harmonik dari precision dan recall; hanya tinggi bila keduanya sama-sama tinggi."],
];

function renderGlossary() {
  const wrap = el(`<div class="page"></div>`);
  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> / <span>Glosarium</span></div>
    <h1>📖 Glosarium Istilah</h1>
    <p class="lead">Kamus singkat istilah AI &amp; Blockchain. Ketik untuk mencari.</p>
    <input class="search" type="search" placeholder="Cari istilah... (mis. blockchain, LLM, wallet)">
  `));
  const dl = el(`<dl class="glossary"></dl>`);
  GLOSSARY.slice()
    .sort((a, b) => a[0].localeCompare(b[0], "id"))
    .forEach(([term, def]) => {
    dl.appendChild(el(`<div class="g-item"><dt>${esc(term)}</dt><dd>${esc(def)}</dd></div>`));
  });
  wrap.appendChild(dl);

  wrap.querySelector(".search").addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    dl.querySelectorAll(".g-item").forEach((item) => {
      item.style.display = item.textContent.toLowerCase().includes(q) ? "" : "none";
    });
  });
  return wrap;
}

/* ---------- Halaman: Flashcard (Ulasan) ---------- */
function renderFlashcards() {
  const wrap = el(`<div class="page"></div>`);
  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> / <span>Flashcard</span></div>
    <h1>🃏 Flashcard — Ulasan Cepat</h1>
    <p class="lead">Uji ingatanmu. Klik kartu untuk membaliknya & lihat jawaban, lalu lanjut ke kartu berikutnya.</p>
  `));

  const filters = [
    ["all", "Semua"], ["ai", "🤖 AI"], ["blockchain", "⛓️ Blockchain"],
    ["accounting", "📊 Akuntansi"], ["glossary", "📖 Glosarium"],
  ];
  let filter = "all", deck = [], idx = 0, flipped = false;

  const filterRow = el(`<div class="fc-filters"></div>`);
  filters.forEach(([val, label]) => {
    const b = el(`<button class="btn ghost fc-filter">${label}</button>`);
    b.dataset.val = val;
    b.onclick = () => { filter = val; rebuild(); };
    filterRow.appendChild(b);
  });
  wrap.appendChild(filterRow);

  const counter = el(`<div class="fc-counter"></div>`);
  const card = el(`<div class="fc-card"><div class="fc-inner"></div></div>`);
  const controls = el(`<div class="fc-controls"></div>`);
  const prev = el(`<button class="btn ghost">← Sebelumnya</button>`);
  const shuffle = el(`<button class="btn ghost">🔀 Acak</button>`);
  const next = el(`<button class="btn">Berikutnya →</button>`);
  controls.appendChild(prev);
  controls.appendChild(shuffle);
  controls.appendChild(next);

  function draw() {
    filterRow.querySelectorAll(".fc-filter").forEach((b) => b.classList.toggle("active", b.dataset.val === filter));
    if (!deck.length) {
      card.querySelector(".fc-inner").innerHTML = `<div class="fc-text">Tidak ada kartu.</div>`;
      counter.textContent = "";
      return;
    }
    const c = deck[idx];
    card.classList.toggle("flipped", flipped);
    card.querySelector(".fc-inner").innerHTML = flipped
      ? `<span class="fc-side">JAWABAN</span><div class="fc-text">${esc(c.back)}</div>`
      : `<span class="fc-side">PERTANYAAN</span><div class="fc-text">${esc(c.front)}</div><span class="fc-tap">👆 klik untuk lihat jawaban</span>`;
    counter.innerHTML = `Kartu <b>${idx + 1}</b> dari <b>${deck.length}</b> &nbsp;•&nbsp; <span class="fc-tag">${esc(c.tag)}</span>`;
  }
  function rebuild() {
    deck = buildFlashcards(filter);
    idx = 0; flipped = false;
    draw();
  }
  card.onclick = () => { flipped = !flipped; draw(); };
  prev.onclick = () => { if (!deck.length) return; idx = (idx - 1 + deck.length) % deck.length; flipped = false; draw(); };
  next.onclick = () => { if (!deck.length) return; idx = (idx + 1) % deck.length; flipped = false; draw(); };
  shuffle.onclick = () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    idx = 0; flipped = false; draw();
  };

  wrap.appendChild(counter);
  wrap.appendChild(card);
  wrap.appendChild(controls);
  rebuild();
  return wrap;
}

/* ---------- Halaman: Pencarian seluruh materi ---------- */
function buildSearchIndex() {
  const idx = [];
  COURSES.forEach((c) => {
    c.modules.forEach((m) => {
      m.lessons.forEach((l) => {
        const text = stripHTML(l.content);
        idx.push({
          kind: "lesson",
          id: l.id,
          title: l.title,
          course: c.title,
          emoji: c.emoji,
          level: m.level,
          source: text,
          hay: (l.title + " " + text + " " + (l.keyPoints || []).join(" ")).toLowerCase(),
        });
      });
    });
  });
  GLOSSARY.forEach((g) => idx.push({ kind: "term", title: g[0], def: g[1], hay: (g[0] + " " + g[1]).toLowerCase() }));
  return idx;
}
function renderSearch() {
  const wrap = el(`<div class="page"></div>`);
  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> / <span>Cari</span></div>
    <h1>🔎 Cari Materi</h1>
    <p class="lead">Cari ke seluruh pelajaran &amp; glosarium sekaligus.</p>
    <input class="search" type="search" placeholder="Ketik kata kunci... (mis. RAG, smart contract, laba)">
  `));
  const results = el(`<div class="sr-results"></div>`);
  wrap.appendChild(results);
  const index = buildSearchIndex();
  const input = wrap.querySelector(".search");

  function snippet(text, q) {
    const i = text.toLowerCase().indexOf(q);
    if (i < 0) return text.slice(0, 140) + "…";
    const start = Math.max(0, i - 50);
    return (start > 0 ? "…" : "") + text.slice(start, i + q.length + 90).trim() + "…";
  }
  function run() {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = "";
    if (q.length < 2) {
      results.appendChild(el(`<p class="sr-hint">Ketik minimal 2 huruf untuk mulai mencari.</p>`));
      return;
    }
    const hits = index.filter((it) => it.hay.indexOf(q) > -1).slice(0, 40);
    if (!hits.length) {
      results.appendChild(el(`<p class="sr-hint">Tidak ada hasil untuk "${esc(q)}".</p>`));
      return;
    }
    results.appendChild(el(`<p class="sr-count">${hits.length} hasil</p>`));
    hits.forEach((it) => {
      if (it.kind === "lesson") {
        results.appendChild(el(`
          <a class="sr-item" href="#/lesson/${it.id}">
            <div class="sr-top"><span class="sr-title">${it.emoji} ${esc(it.title)}</span><span class="lvl-badge lvl-${it.level.toLowerCase()}">${esc(it.level)}</span></div>
            <div class="sr-course">${esc(it.course)}</div>
            <div class="sr-snip">${esc(snippet(it.source, q))}</div>
          </a>
        `));
      } else {
        results.appendChild(el(`
          <a class="sr-item" href="#/glossary">
            <div class="sr-top"><span class="sr-title">📖 ${esc(it.title)}</span><span class="sr-tag">Glosarium</span></div>
            <div class="sr-snip">${esc(it.def)}</div>
          </a>
        `));
      }
    });
  }
  input.addEventListener("input", run);
  run();
  return wrap;
}

/* ---------- Halaman: Playground Kode ---------- */
const PLAYGROUND_EXAMPLES = [
  {
    label: "Dasar: variabel & teks",
    code: `// Variabel & operasi dasar\nlet nama = "Andi";\nlet umur = 20;\nconsole.log("Halo " + nama + ", umur " + umur);\nconsole.log("Tahun depan:", umur + 1);`,
  },
  {
    label: "AI: kemiripan vektor (inti RAG)",
    code: `// Inti RAG: ukur kemiripan makna dua "embedding" (vektor)\nfunction cosine(a, b) {\n  let dot = 0, na = 0, nb = 0;\n  for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }\n  return dot / (Math.sqrt(na) * Math.sqrt(nb));\n}\nconst pertanyaan = [0.9, 0.1, 0.0];\nconst dokA = [0.8, 0.2, 0.1];   // mirip\nconst dokB = [0.0, 0.1, 0.9];   // beda\nconsole.log("Skor mirip dgn A:", cosine(pertanyaan, dokA).toFixed(3));\nconsole.log("Skor mirip dgn B:", cosine(pertanyaan, dokB).toFixed(3));\nconsole.log("=> RAG memilih dokumen dengan skor tertinggi.");`,
  },
  {
    label: "AI: penebak kata (bigram)",
    code: `const MAP = { saya:["suka","mau"], suka:["belajar","makan"], mau:["belajar","pergi"], belajar:["AI","blockchain"], AI:["."], blockchain:["."] };\nlet kata = "saya", kalimat = [kata];\nfor (let i = 0; i < 6; i++) {\n  const next = MAP[kata];\n  if (!next) break;\n  kata = next[Math.floor(Math.random()*next.length)];\n  kalimat.push(kata);\n}\nconsole.log(kalimat.join(" "));`,
  },
  {
    label: "Blockchain: hash & validasi rantai",
    code: `// Hash sederhana (bukan kriptografi nyata)\nfunction hash(s){ let h=0; for(let i=0;i<s.length;i++){ h=(h*31+s.charCodeAt(i))>>>0; } return h.toString(16); }\nconst blocks = [];\nfunction tambah(data){ const prev = blocks.length ? blocks[blocks.length-1].hash : "0"; const b = { data, prev }; b.hash = hash(prev+data); blocks.push(b); }\ntambah("Andi->Budi: 5"); tambah("Budi->Cici: 2"); tambah("Cici->Deni: 1");\nfunction sah(){ return blocks.every((b,i)=>{ const prev = i? blocks[i-1].hash : "0"; return b.prev===prev && b.hash===hash(prev+b.data); }); }\nconsole.log("Rantai sah?", sah());\nblocks[0].data = "CURANG: Andi->Andi: 1000";\nconsole.log("Setelah blok 0 diubah, sah?", sah());`,
  },
  {
    label: "Akuntansi: laba, margin & titik impas",
    code: `const pendapatan = 200, hpp = 120, bebanOps = 50;  // dalam juta\nconst labaKotor = pendapatan - hpp;\nconst labaBersih = labaKotor - bebanOps;\nconsole.log("Laba kotor: Rp" + labaKotor + " jt");\nconsole.log("Laba bersih: Rp" + labaBersih + " jt");\nconsole.log("Margin bersih: " + (labaBersih/pendapatan*100).toFixed(1) + "%");\nconst biayaTetap = 10000000, marginKontribusi = 20000;\nconsole.log("Titik impas: " + (biayaTetap/marginKontribusi) + " unit");`,
  },
  {
    label: "Akuntansi: bunga majemuk (5 tahun)",
    code: `let modal = 1000000;   // Rp1 juta\nconst bunga = 0.10;    // 10% per tahun\nfor (let tahun = 1; tahun <= 5; tahun++) {\n  modal = modal * (1 + bunga);\n  console.log("Tahun " + tahun + ": Rp" + Math.round(modal).toLocaleString("id-ID"));\n}`,
  },
];
function renderPlayground() {
  const wrap = el(`<div class="page"></div>`);
  wrap.appendChild(el(`
    <div class="crumb"><a href="#/">Beranda</a> / <span>Playground</span></div>
    <h1>🧪 Playground Kode</h1>
    <p class="lead">Tulis &amp; jalankan JavaScript langsung di browser — tanpa instalasi. Pilih contoh, ubah kodenya, lalu Jalankan.</p>
    <label class="pg-ex-label">Contoh siap pakai:</label>
  `));
  const sel = el(`<select class="pg-examples"></select>`);
  PLAYGROUND_EXAMPLES.forEach((ex, i) => {
    const o = document.createElement("option");
    o.value = i;
    o.textContent = ex.label;
    sel.appendChild(o);
  });
  wrap.appendChild(sel);
  const host = el(`<div class="pg-host"></div>`);
  wrap.appendChild(host);
  const ta = buildPlayground(host, PLAYGROUND_EXAMPLES[0].code);
  sel.onchange = () => { ta.value = PLAYGROUND_EXAMPLES[sel.value].code; };
  return wrap;
}

/* ---------- Sidebar ---------- */
function renderSidebar() {
  const nav = document.getElementById("sidebar-nav");
  if (!nav) return;
  const curHash = location.hash.slice(1) || "/";
  let html = `<a class="side-link ${curHash === "/" ? "active" : ""}" href="#/">🏠 Beranda</a>`;
  COURSES.forEach((c) => {
    const p = courseProgress(c);
    const open = curHash.includes("/course/" + c.id) || allLessons(c).some((l) => curHash === "/lesson/" + l.id);
    html += `<a class="side-link ${curHash === "/course/" + c.id ? "active" : ""}" href="#/course/${c.id}">${c.emoji} ${esc(c.title)} <small>${p.pct}%</small></a>`;
    if (open) {
      c.modules.forEach((m, mi) => {
        html += `<div class="side-mod">${mi + 1}. ${esc(m.level)}</div>`;
        m.lessons.forEach((l) => {
          const done = Progress.isDone(l.id);
          const active = curHash === "/lesson/" + l.id;
          html += `<a class="side-lesson ${active ? "active" : ""}" href="#/lesson/${l.id}">${done ? "✓" : "○"} ${esc(l.title)}</a>`;
        });
      });
    }
  });
  html += `<a class="side-link ${curHash.includes("/search") ? "active" : ""}" href="#/search">🔎 Cari Materi</a>`;
  html += `<a class="side-link ${curHash.includes("/playground") ? "active" : ""}" href="#/playground">🧪 Playground</a>`;
  const jt = typeof Ulangan !== "undefined" ? Ulangan.ringkas().jatuhTempo : 0;
  html += `<a class="side-link ${curHash.includes("/sesi") ? "active" : ""}" href="#/sesi">⚡ Sesi Harian${jt ? ` <small>${jt} siap</small>` : ""}</a>`;
  html += `<a class="side-link ${curHash.includes("/flashcards") ? "active" : ""}" href="#/flashcards">🃏 Flashcard</a>`;
  html += `<a class="side-link ${curHash.includes("/glossary") ? "active" : ""}" href="#/glossary">📖 Glosarium</a>`;
  html += `<div class="side-mod">Simpanan Kemajuan</div>`;
  html += `<button class="side-link save" id="backup-btn">💾 Cadangkan (unduh file)</button>`;
  html += `<button class="side-link save" id="restore-btn">📂 Pulihkan dari file</button>`;
  html += `<button class="side-link reset" id="reset-btn">↺ Reset kemajuan</button>`;
  nav.innerHTML = html;

  const rb = document.getElementById("reset-btn");
  if (rb)
    rb.onclick = () => {
      if (confirm("Hapus semua kemajuan belajarmu? Tindakan ini tidak bisa dibatalkan.")) {
        Progress.reset();
        router();
      }
    };

  const bb = document.getElementById("backup-btn");
  if (bb)
    bb.onclick = () => {
      const blob = new Blob([Progress.exportJSON()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "kemajuan-akademi-ai-blockchain.json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    };

  const rsb = document.getElementById("restore-btn");
  if (rsb)
    rsb.onclick = () => {
      const inp = document.createElement("input");
      inp.type = "file";
      inp.accept = "application/json,.json";
      inp.onchange = () => {
        const file = inp.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            Progress.importJSON(reader.result);
            router();
            alert("Kemajuan berhasil dipulihkan ✓");
          } catch (e) {
            alert("File tidak valid. Pastikan ini file cadangan dari platform ini.");
          }
        };
        reader.readAsText(file);
      };
      inp.click();
    };
}

/* ---------- Init ---------- */
function init() {
  Progress.load();
  // Muat daftar suara lebih awal agar deteksi suara Bahasa Indonesia akurat.
  if (Speech.supported) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      // Bila suara baru termuat saat membuka pelajaran, render ulang agar tombol muncul/hilang sesuai.
      if (location.hash.startsWith("#/lesson/")) router();
    });
  }
  // Perisai runtun diperiksa sekali saat aplikasi dibuka:
  // memberi hadiah tiap 7 hari runtun, dan menyelamatkan satu hari yang terlewat.
  if (typeof Perisai !== "undefined") Perisai.perbarui();
  window.addEventListener("hashchange", router);
  document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("sidebar").classList.toggle("open");
  };
  // tutup sidebar saat klik link (mobile)
  document.getElementById("sidebar").addEventListener("click", (e) => {
    if (e.target.closest("a")) document.getElementById("sidebar").classList.remove("open");
  });
  router();
}

document.addEventListener("DOMContentLoaded", init);
