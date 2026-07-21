/* ============================================================
   VISUALS.JS — Diagram SVG statis + Demo interaktif
   Dipakai dengan menaruh penanda di dalam materi:
     <div data-diagram="nama-diagram"></div>
     <div data-demo="nama-demo"></div>
   app.js akan mengisi diagram & memasang demo otomatis.
   ============================================================ */

/* ---------- Util ---------- */
const SVGNS = "http://www.w3.org/2000/svg";
function svg(tag, attrs, children) {
  const e = document.createElementNS(SVGNS, tag);
  if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (children) (Array.isArray(children) ? children : [children]).forEach((c) => e.appendChild(c));
  return e;
}
function h(tag, attrs, children) {
  const e = document.createElement(tag);
  if (attrs)
    for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
  if (children != null) (Array.isArray(children) ? children : [children]).forEach((c) => e.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return e;
}
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}
// Hash sederhana untuk DEMO (bukan kriptografi sungguhan) -> 16 karakter heksadesimal
function demoHash(str) {
  let h1 = 0xdeadbeef,
    h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return ((h2 >>> 0).toString(16).padStart(8, "0") + (h1 >>> 0).toString(16).padStart(8, "0"));
}

/* ============================================================
   DIAGRAM STATIS  (dikembalikan sebagai string SVG)
   ============================================================ */
const DIAGRAMS = {
  /* Perbandingan program biasa vs AI */
  "ai-vs-program": () => `
  <figure class="viz">
    <figcaption>Program biasa mengikuti aturan tetap; AI belajar pola dari banyak contoh.</figcaption>
    <svg viewBox="0 0 520 230" class="viz-svg" role="img" aria-label="Perbandingan program biasa dan AI">
      <text x="260" y="24" text-anchor="middle" class="vt-bold">PROGRAM BIASA</text>
      <rect x="20" y="40" width="100" height="46" rx="8" class="vbox"/><text x="70" y="68" text-anchor="middle" class="vt">Input</text>
      <text x="130" y="69" class="vt">→</text>
      <rect x="150" y="40" width="130" height="46" rx="8" class="vbox accent"/><text x="215" y="62" text-anchor="middle" class="vt-sm">Aturan tetap</text><text x="215" y="77" text-anchor="middle" class="vt-sm">(ditulis manusia)</text>
      <text x="290" y="69" class="vt">→</text>
      <rect x="310" y="40" width="100" height="46" rx="8" class="vbox ok"/><text x="360" y="68" text-anchor="middle" class="vt">Output</text>

      <text x="260" y="130" text-anchor="middle" class="vt-bold">KECERDASAN BUATAN</text>
      <rect x="14" y="146" width="110" height="46" rx="8" class="vbox"/><text x="69" y="167" text-anchor="middle" class="vt-sm">Banyak contoh</text><text x="69" y="182" text-anchor="middle" class="vt-sm">(data)</text>
      <text x="130" y="175" class="vt">→</text>
      <rect x="150" y="146" width="120" height="46" rx="8" class="vbox accent2"/><text x="210" y="167" text-anchor="middle" class="vt-sm">Temukan pola</text><text x="210" y="182" text-anchor="middle" class="vt-sm">(belajar sendiri)</text>
      <text x="278" y="175" class="vt">→</text>
      <rect x="298" y="146" width="120" height="46" rx="8" class="vbox ok"/><text x="358" y="167" text-anchor="middle" class="vt-sm">Model pintar</text><text x="358" y="182" text-anchor="middle" class="vt-sm">(bisa menebak)</text>
    </svg>
  </figure>`,

  /* Kunci publik & privat */
  keys: () => `
  <figure class="viz">
    <figcaption>Private key (rahasia) bisa membuat public key/alamat — tapi tidak bisa dibalik.</figcaption>
    <svg viewBox="0 0 520 170" class="viz-svg" role="img" aria-label="Hubungan private key dan public key">
      <rect x="20" y="45" width="170" height="80" rx="12" class="vbox bad"/>
      <text x="105" y="72" text-anchor="middle" class="vt-bold">🔑 Private key</text>
      <text x="105" y="95" text-anchor="middle" class="vt-sm">RAHASIA — jangan</text>
      <text x="105" y="110" text-anchor="middle" class="vt-sm">dibagikan ke siapa pun</text>

      <line x1="195" y1="85" x2="320" y2="85" class="vline"/>
      <polygon points="320,85 308,79 308,91" class="vfill-text"/>
      <text x="257" y="76" text-anchor="middle" class="vt-sm">satu arah</text>
      <text x="257" y="105" text-anchor="middle" class="vt-sm">(tak bisa dibalik)</text>

      <rect x="330" y="45" width="170" height="80" rx="12" class="vbox ok"/>
      <text x="415" y="72" text-anchor="middle" class="vt-bold">📬 Public key</text>
      <text x="415" y="95" text-anchor="middle" class="vt-sm">= alamat dompet,</text>
      <text x="415" y="110" text-anchor="middle" class="vt-sm">boleh dibagikan</text>
    </svg>
  </figure>`,

  /* PoW vs PoS */
  "pow-vs-pos": () => `
  <figure class="viz">
    <figcaption>Dua cara jaringan sepakat: lomba komputasi (PoW) vs jaminan koin (PoS).</figcaption>
    <svg viewBox="0 0 520 210" class="viz-svg" role="img" aria-label="Perbandingan Proof of Work dan Proof of Stake">
      <rect x="15" y="20" width="230" height="175" rx="12" class="vbox"/>
      <text x="130" y="45" text-anchor="middle" class="vt-bold">⛏️ Proof of Work</text>
      <text x="130" y="72" text-anchor="middle" class="vt-sm">Penambang berlomba</text>
      <text x="130" y="88" text-anchor="middle" class="vt-sm">memecahkan teka-teki</text>
      <text x="130" y="120" text-anchor="middle" style="font-size:30px">🖥️⚡🖥️⚡🖥️</text>
      <text x="130" y="155" text-anchor="middle" class="vt-sm ok-t">👍 Sangat aman</text>
      <text x="130" y="175" text-anchor="middle" class="vt-sm bad-t">👎 Boros energi</text>

      <rect x="275" y="20" width="230" height="175" rx="12" class="vbox"/>
      <text x="390" y="45" text-anchor="middle" class="vt-bold">🔒 Proof of Stake</text>
      <text x="390" y="72" text-anchor="middle" class="vt-sm">Validator mengunci koin</text>
      <text x="390" y="88" text-anchor="middle" class="vt-sm">sebagai jaminan</text>
      <text x="390" y="120" text-anchor="middle" style="font-size:30px">🪙🔒👤</text>
      <text x="390" y="155" text-anchor="middle" class="vt-sm ok-t">👍 Hemat energi</text>
      <text x="390" y="175" text-anchor="middle" class="vt-sm bad-t">👎 Untungkan pemodal besar</text>
    </svg>
  </figure>`,

  /* Persamaan dasar akuntansi */
  "accounting-equation": () => `
  <figure class="viz">
    <figcaption>Persamaan dasar akuntansi — kedua sisi selalu seimbang.</figcaption>
    <svg viewBox="0 0 520 170" class="viz-svg" role="img" aria-label="Aset sama dengan Kewajiban tambah Ekuitas">
      <rect x="20" y="40" width="180" height="90" rx="12" class="vbox ok"/>
      <text x="110" y="80" text-anchor="middle" class="vt-bold">ASET</text>
      <text x="110" y="100" text-anchor="middle" class="vt-sm">Harta — yang dimiliki</text>

      <text x="218" y="92" text-anchor="middle" class="vt-bold" style="font-size:22px">=</text>

      <rect x="240" y="40" width="260" height="40" rx="10" class="vbox bad"/>
      <text x="370" y="65" text-anchor="middle" class="vt-bold">KEWAJIBAN <tspan class="vt-sm">(Utang)</tspan></text>

      <text x="370" y="98" text-anchor="middle" class="vt-bold" style="font-size:20px">+</text>

      <rect x="240" y="105" width="260" height="40" rx="10" class="vbox accent"/>
      <text x="370" y="130" text-anchor="middle" class="vt-bold">EKUITAS <tspan class="vt-sm">(Modal)</tspan></text>
    </svg>
  </figure>`,
};

/* ============================================================
   DEMO INTERAKTIF  (fungsi(container) yang membangun UI)
   ============================================================ */
const DEMOS = {};

/* ---------- Demo: Neural Network (forward pass) ---------- */
DEMOS["neural-net"] = function (root) {
  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧠 <b>Demo: satu jaringan saraf kecil</b>" }),
    h("p", { class: "demo-hint", text: "Klik tombol ciri-ciri di bawah. Lihat sinyal mengalir & neuron menyala menentukan: kucing atau bukan." }),
  ]);

  const features = [
    { label: "Berkumis 🐱", on: false },
    { label: "Telinga runcing", on: false },
    { label: "Menggonggong 🐶", on: false },
  ];

  // SVG jaringan
  const W = 460,
    H = 220;
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-svg nn-svg" });
  const ix = 70,
    hx = 230,
    ox = 390;
  const iy = [50, 110, 170],
    hy = [80, 150],
    oy = 110;

  // definisi edge: [dariX,dariY,keX,keY,bobot]
  const edges = [
    [ix, iy[0], hx, hy[0], 2],
    [ix, iy[1], hx, hy[0], 2],
    [ix, iy[2], hx, hy[1], 3],
    [hx, hy[0], ox, oy, 3],
    [hx, hy[1], ox, oy, -3],
  ];
  edges.forEach((e) => {
    const line = svg("line", {
      x1: e[0], y1: e[1], x2: e[2], y2: e[3],
      class: "nn-edge " + (e[4] >= 0 ? "pos" : "neg"),
      "stroke-width": Math.abs(e[4]),
    });
    s.appendChild(line);
  });

  function node(x, y, r) {
    const c = svg("circle", { cx: x, cy: y, r: r, class: "nn-node" });
    s.appendChild(c);
    return c;
  }
  function label(x, y, text, cls) {
    const t = svg("text", { x: x, y: y, "text-anchor": "middle", class: cls || "vt-sm" });
    t.textContent = text;
    s.appendChild(t);
    return t;
  }

  const inNodes = iy.map((y) => node(ix, y, 18));
  const hNodes = hy.map((y) => node(hx, y, 20));
  const outNode = node(ox, oy, 26);
  label(hx, hy[0] - 26, "ciri kucing");
  label(hx, hy[1] + 34, "ciri anjing");
  const outLabel = label(ox, oy + 3, "?", "nn-out-text");
  label(ox, oy - 34, "Kucing?");

  function recompute() {
    const x = features.map((f) => (f.on ? 1 : 0));
    const h1 = sigmoid(2 * x[0] + 2 * x[1] - 1);
    const h2 = sigmoid(3 * x[2] - 1);
    const out = sigmoid(3 * h1 - 3 * h2 - 0.5);
    const acts = [x[0], x[1], x[2]];
    inNodes.forEach((n, i) => n.style.fillOpacity = 0.15 + 0.85 * acts[i]);
    hNodes[0].style.fillOpacity = 0.15 + 0.85 * h1;
    hNodes[1].style.fillOpacity = 0.15 + 0.85 * h2;
    outNode.style.fillOpacity = 0.15 + 0.85 * out;
    const pct = Math.round(out * 100);
    outLabel.textContent = pct + "%";
    verdict.textContent = out >= 0.5 ? `🐱 Kemungkinan KUCING (${pct}%)` : `❌ Mungkin BUKAN kucing (${pct}%)`;
    verdict.className = "nn-verdict " + (out >= 0.5 ? "good" : "bad");
  }

  const btnRow = h("div", { class: "nn-inputs" });
  features.forEach((f, i) => {
    const b = h("button", {
      class: "btn ghost nn-toggle",
      text: f.label,
      onclick: () => {
        f.on = !f.on;
        b.classList.toggle("on", f.on);
        // animasi sinyal sederhana
        s.classList.remove("pulse");
        void s.offsetWidth;
        s.classList.add("pulse");
        recompute();
      },
    });
    btnRow.appendChild(b);
  });

  const verdict = h("div", { class: "nn-verdict" });
  box.appendChild(s);
  box.appendChild(btnRow);
  box.appendChild(verdict);
  root.appendChild(box);
  recompute();
};

/* ---------- Demo: AI belajar (regresi garis) ---------- */
DEMOS["learning-loop"] = function (root) {
  const pts = [
    [0.08, 0.12], [0.2, 0.22], [0.32, 0.28], [0.45, 0.48],
    [0.55, 0.46], [0.68, 0.66], [0.82, 0.78], [0.92, 0.88],
  ];
  let m = 0, b = 0.45, step = 0, timer = null;
  const lr = 0.35;

  const W = 320, H = 230;
  const px = (x) => 45 + x * 240;
  const py = (y) => 195 - y * 165;

  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-svg ll-svg" });
  s.appendChild(svg("line", { x1: 45, y1: 30, x2: 45, y2: 195, class: "ll-axis" }));
  s.appendChild(svg("line", { x1: 45, y1: 195, x2: 295, y2: 195, class: "ll-axis" }));
  const line = svg("line", { x1: px(0), y1: py(b), x2: px(1), y2: py(m + b), class: "ll-line" });
  s.appendChild(line);
  pts.forEach((p) => s.appendChild(svg("circle", { cx: px(p[0]), cy: py(p[1]), r: 5, class: "ll-point" })));

  function loss() {
    let e = 0;
    pts.forEach((p) => { const d = m * p[0] + b - p[1]; e += d * d; });
    return e / pts.length;
  }
  function draw() {
    line.setAttribute("y1", py(b));
    line.setAttribute("y2", py(m + b));
    const L = loss();
    lossText.textContent = "Kesalahan (loss): " + L.toFixed(4) + "  •  langkah: " + step;
    lossFill.style.width = Math.min(100, L * 600) + "%";
  }
  function train() {
    let gm = 0, gb = 0;
    pts.forEach((p) => { const d = m * p[0] + b - p[1]; gm += d * p[0]; gb += d; });
    m -= lr * (2 * gm / pts.length);
    b -= lr * (2 * gb / pts.length);
    step++;
    draw();
  }

  const lossText = h("div", { class: "ll-loss-text" });
  const lossBar = h("div", { class: "ll-bar" }, [h("div", { class: "ll-bar-fill" })]);
  const lossFill = lossBar.firstChild;

  const auto = h("button", { class: "btn primary" }, "▶ Latih otomatis");
  auto.onclick = () => {
    if (timer) {
      clearInterval(timer); timer = null; auto.textContent = "▶ Latih otomatis";
      return;
    }
    auto.textContent = "⏸ Berhenti";
    timer = setInterval(() => {
      if (!document.body.contains(s)) { clearInterval(timer); return; } // bersihkan jika pindah halaman
      train();
      if (loss() < 0.0008 || step > 300) { clearInterval(timer); timer = null; auto.textContent = "✓ Selesai dilatih"; }
    }, 120);
  };
  const once = h("button", { class: "btn", onclick: train }, "Latih 1×");
  const reset = h("button", {
    class: "btn ghost",
    onclick: () => { if (timer) { clearInterval(timer); timer = null; } m = 0; b = 0.45; step = 0; auto.textContent = "▶ Latih otomatis"; draw(); },
  }, "↺ Reset");

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📉 <b>Demo: AI belajar mengurangi kesalahan</b>" }),
    h("p", { class: "demo-hint", text: "Garis = tebakan AI, titik = data nyata. Tiap latihan, AI menggeser garis agar kesalahannya makin kecil — persis cara model belajar." }),
    s, lossText, lossBar,
    h("div", { class: "demo-controls" }, [auto, once, reset]),
  ]);
  root.appendChild(box);
  draw();
};

/* ---------- Demo: Gambar = angka (computer vision) ---------- */
DEMOS["pixel-grid"] = function (root) {
  const N = 10;
  const grid = new Array(N * N).fill(0);
  let painting = false, paintVal = 1;

  const gridEl = h("div", { class: "px-grid" });
  const numsEl = h("pre", { class: "px-nums" });

  function refreshNums() {
    let out = "";
    for (let r = 0; r < N; r++) {
      out += grid.slice(r * N, r * N + N).join(" ") + "\n";
    }
    numsEl.textContent = out;
  }
  function setCell(i, v) {
    grid[i] = v;
    cells[i].classList.toggle("on", !!v);
    refreshNums();
  }
  const cells = [];
  for (let i = 0; i < N * N; i++) {
    const c = h("div", { class: "px-cell" });
    c.addEventListener("mousedown", (e) => { e.preventDefault(); painting = true; paintVal = grid[i] ? 0 : 1; setCell(i, paintVal); });
    c.addEventListener("mouseover", () => { if (painting) setCell(i, paintVal); });
    cells.push(c);
    gridEl.appendChild(c);
  }
  document.addEventListener("mouseup", () => (painting = false));

  const clear = h("button", { class: "btn ghost", onclick: () => { grid.fill(0); cells.forEach((c) => c.classList.remove("on")); refreshNums(); } }, "🧹 Bersihkan");

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🔢 <b>Demo: bagaimana komputer 'melihat' gambar</b>" }),
    h("p", { class: "demo-hint", text: "Gambar angka/bentuk dengan menyeret mouse di kotak kiri. Di kanan, lihat: bagi komputer, gambar hanyalah deretan angka (0 dan 1)." }),
    h("div", { class: "px-wrap" }, [gridEl, numsEl]),
    h("div", { class: "demo-controls" }, [clear]),
  ]);
  root.appendChild(box);
  refreshNums();
};

/* ---------- Demo: Penebak kata berikutnya (LLM) ---------- */
DEMOS["next-word"] = function (root) {
  const MAP = {
    Hari: [["ini", 0.7], ["Minggu", 0.3]],
    ini: [["saya", 0.4], ["cuaca", 0.35], ["sangat", 0.25]],
    saya: [["suka", 0.5], ["mau", 0.3], ["sedang", 0.2]],
    suka: [["belajar", 0.5], ["makan", 0.3], ["membaca", 0.2]],
    sedang: [["belajar", 0.6], ["makan", 0.4]],
    mau: [["belajar", 0.5], ["pergi", 0.5]],
    belajar: [["AI", 0.45], ["blockchain", 0.35], ["bersama", 0.2]],
    blockchain: [["itu", 0.5], ["sangat", 0.3], ["dan", 0.2]],
    AI: [["sangat", 0.45], ["itu", 0.35], ["dan", 0.2]],
    dan: [["blockchain", 0.5], ["AI", 0.5]],
    itu: [["sangat", 0.6], ["memang", 0.4]],
    memang: [["menarik", 0.6], ["seru", 0.4]],
    sangat: [["menarik", 0.4], ["seru", 0.35], ["penting", 0.25]],
    menarik: [["sekali", 0.5], [".", 0.5]],
    seru: [["sekali", 0.5], [".", 0.5]],
    penting: [["sekali", 0.4], [".", 0.6]],
    sekali: [[".", 1]],
    cuaca: [["hari", 0.5], ["sangat", 0.5]],
    hari: [["ini", 1]],
    Minggu: [["saya", 0.6], ["cuaca", 0.4]],
    pergi: [["belajar", 0.5], ["ke", 0.5]],
    ke: [["sekolah", 0.6], ["kampus", 0.4]],
    sekolah: [[".", 1]],
    kampus: [[".", 1]],
    makan: [["nasi", 0.6], [".", 0.4]],
    nasi: [[".", 1]],
    membaca: [["buku", 1]],
    buku: [["AI", 0.5], [".", 0.5]],
    bersama: [["teman", 1]],
    teman: [[".", 1]],
  };
  let words = ["Hari"];

  const sentenceEl = h("div", { class: "nw-sentence" });
  const choicesEl = h("div", { class: "nw-choices" });

  function render() {
    sentenceEl.textContent = words.join(" ").replace(/ \.$/, ".");
    choicesEl.innerHTML = "";
    const last = words[words.length - 1];
    const next = MAP[last];
    if (last === "." || !next) {
      choicesEl.appendChild(h("div", { class: "nw-done", text: "✓ Kalimat selesai. LLM bekerja persis begini: memilih kata berikutnya, satu per satu." }));
      return;
    }
    const max = Math.max.apply(null, next.map((n) => n[1]));
    next.forEach(([w, p]) => {
      const btn = h("button", { class: "btn nw-word" + (p === max ? " top" : "") }, [
        h("span", { class: "nw-w", text: w === "." ? "(selesai)" : w }),
        h("span", { class: "nw-p", text: Math.round(p * 100) + "%" }),
      ]);
      btn.onclick = () => { words.push(w); render(); };
      choicesEl.appendChild(btn);
    });
  }
  const reset = h("button", { class: "btn ghost", onclick: () => { words = ["Hari"]; render(); } }, "↺ Mulai lagi");

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "💬 <b>Demo: cara ChatGPT menyusun kalimat</b>" }),
    h("p", { class: "demo-hint", text: "Klik kata berikutnya (angka = perkiraan kemungkinan). Lihat — model bahasa tidak 'berpikir', ia hanya menebak kata demi kata. Yang tertebal = paling mungkin." }),
    sentenceEl, choicesEl,
    h("div", { class: "demo-controls" }, [reset]),
  ]);
  root.appendChild(box);
  render();
};

/* ---------- Demo: Hash (sidik jari digital) ---------- */
DEMOS["hash-demo"] = function (root) {
  const input = h("input", { class: "search hash-in", type: "text", value: "Halo Blockchain" });
  const out = h("div", { class: "hash-out" });
  function update() {
    out.textContent = demoHash(input.value);
  }
  input.addEventListener("input", update);
  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "#️⃣ <b>Demo: hash (sidik jari digital)</b>" }),
    h("p", { class: "demo-hint", text: "Ketik apa saja. 'Hash' mengubahnya jadi kode unik. Ubah satu huruf saja → kodenya berubah total. Inilah yang mengunci blok-blok blockchain." }),
    input, out,
  ]);
  root.appendChild(box);
  update();
};

/* ---------- Demo: Blockchain interaktif (anti-curang) ---------- */
DEMOS["blockchain-builder"] = function (root) {
  const DIFF = "00"; // hash dianggap sah jika diawali "00" (mirip "tingkat kesulitan" penambangan)
  const blocks = [
    { data: "Andi → Budi: 5 koin", nonce: 0 },
    { data: "Budi → Cici: 2 koin", nonce: 0 },
    { data: "Cici → Deni: 1 koin", nonce: 0 },
  ];

  function hashOf(i) {
    const prev = i === 0 ? "0000000000000000" : blocks[i - 1].hash;
    return demoHash(i + "|" + blocks[i].nonce + "|" + blocks[i].data + "|" + prev);
  }
  function recompute() {
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].prev = i === 0 ? "0000000000000000" : blocks[i - 1].hash;
      blocks[i].hash = hashOf(i);
      blocks[i].valid = blocks[i].hash.startsWith(DIFF);
    }
  }
  function mine(i) {
    blocks[i].prev = i === 0 ? "0000000000000000" : blocks[i - 1].hash;
    let n = 0;
    while (true) {
      const hsh = demoHash(i + "|" + n + "|" + blocks[i].data + "|" + blocks[i].prev);
      if (hsh.startsWith(DIFF)) break;
      n++;
      if (n > 200000) break;
    }
    blocks[i].nonce = n;
    recompute();
    render();
  }
  const chain = h("div", { class: "bc-chain" });
  function render() {
    chain.innerHTML = "";
    blocks.forEach((bl, i) => {
      const card = h("div", { class: "bc-block " + (bl.valid ? "valid" : "invalid") });
      const dataIn = h("input", { class: "bc-data", value: bl.data });
      dataIn.addEventListener("input", () => { bl.data = dataIn.value; recompute(); paint(); });
      card.appendChild(h("div", { class: "bc-row bc-num", html: "Blok #" + (i + 1) + " <span class='bc-status'>" + (bl.valid ? "✓ sah" : "✗ rusak") + "</span>" }));
      card.appendChild(h("label", { class: "bc-lbl", text: "Data:" }));
      card.appendChild(dataIn);
      card.appendChild(h("div", { class: "bc-field", html: "<span>Nonce:</span> " + bl.nonce }));
      card.appendChild(h("div", { class: "bc-field bc-hash", html: "<span>Prev:</span> " + bl.prev }));
      card.appendChild(h("div", { class: "bc-field bc-hash", html: "<span>Hash:</span> " + bl.hash }));
      card.appendChild(h("button", { class: "btn primary bc-mine", onclick: () => mine(i) }, "⛏️ Tambang ulang"));
      chain.appendChild(card);
      if (i < blocks.length - 1) chain.appendChild(h("div", { class: "bc-link", text: "🔗" }));
    });
  }
  function paint() {
    // perbarui hanya status & kelas tanpa kehilangan fokus input
    Array.from(chain.querySelectorAll(".bc-block")).forEach((card, i) => {
      const bl = blocks[i];
      card.className = "bc-block " + (bl.valid ? "valid" : "invalid");
      card.querySelector(".bc-status").textContent = bl.valid ? "✓ sah" : "✗ rusak";
      const fields = card.querySelectorAll(".bc-field");
      fields[0].innerHTML = "<span>Nonce:</span> " + bl.nonce;
      fields[1].innerHTML = "<span>Prev:</span> " + bl.prev;
      fields[2].innerHTML = "<span>Hash:</span> " + bl.hash;
    });
  }

  // tambang awal agar semua blok sah (hijau)
  recompute();
  for (let i = 0; i < blocks.length; i++) mine(i);

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🔗 <b>Demo: kenapa blockchain anti-curang</b>" }),
    h("p", { class: "demo-hint", html: "Tiap blok terkunci ke blok sebelumnya lewat hash. <b>Coba ubah data blok mana pun</b> → blok itu & semua blok sesudahnya langsung jadi <b>rusak (merah)</b>. Untuk memperbaikinya harus 'menambang ulang' satu per satu — itulah yang membuat pemalsuan hampir mustahil." }),
    chain,
  ]);
  root.appendChild(box);
  render();
};

/* ---------- Demo: Alur transaksi (stepper) ---------- */
DEMOS["tx-flow"] = function (root) {
  const steps = [
    ["📝", "Buat transaksi", "Kamu tentukan tujuan & jumlah."],
    ["✍️", "Tanda tangan", "Wallet menandatangani dengan private key."],
    ["📡", "Disebar", "Transaksi dikirim ke jaringan node."],
    ["🔍", "Diverifikasi", "Node mengecek saldo & keabsahan."],
    ["📦", "Masuk blok", "Transaksi sah dikumpulkan jadi blok."],
    ["✅", "Dikonfirmasi", "Blok ditambahkan — transaksi permanen."],
  ];
  let cur = -1, timer = null;

  const track = h("div", { class: "tx-track" });
  const nodes = steps.map((st, i) => {
    const n = h("div", { class: "tx-step" }, [
      h("div", { class: "tx-icon", text: st[0] }),
      h("div", { class: "tx-name", text: st[1] }),
    ]);
    track.appendChild(n);
    if (i < steps.length - 1) track.appendChild(h("div", { class: "tx-arrow", text: "→" }));
    return n;
  });
  const desc = h("div", { class: "tx-desc", text: "Klik ▶ untuk melihat perjalanan sebuah transaksi." });

  function show(i) {
    nodes.forEach((n, k) => { n.classList.toggle("active", k === i); n.classList.toggle("past", k < i); });
    if (i >= 0) desc.innerHTML = "<b>" + steps[i][1] + ":</b> " + steps[i][2];
  }
  const play = h("button", { class: "btn primary" }, "▶ Putar alur");
  play.onclick = () => {
    if (timer) return;
    cur = -1;
    timer = setInterval(() => {
      if (!document.body.contains(track)) { clearInterval(timer); return; }
      cur++;
      if (cur >= steps.length) { clearInterval(timer); timer = null; return; }
      show(cur);
    }, 900);
  };

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📡 <b>Demo: perjalanan sebuah transaksi</b>" }),
    track, desc,
    h("div", { class: "demo-controls" }, [play]),
  ]);
  root.appendChild(box);
};

/* ---------- Demo: Simulator Persamaan Akuntansi ---------- */
DEMOS["equation-sim"] = function (root) {
  let A = 0, K = 0, E = 0;
  const txs = [
    { label: "💰 Pemilik setor modal Rp50jt", a: 50, k: 0, e: 50 },
    { label: "🏦 Pinjam bank Rp30jt", a: 30, k: 30, e: 0 },
    { label: "🖥️ Beli peralatan tunai Rp20jt", a: 0, k: 0, e: 0 },
    { label: "🧾 Terima pendapatan tunai Rp10jt", a: 10, k: 0, e: 10 },
    { label: "💸 Bayar beban gaji Rp4jt", a: -4, k: 0, e: -4 },
    { label: "📉 Bayar utang ke bank Rp10jt", a: -10, k: -10, e: 0 },
  ];
  const rp = (n) => "Rp" + n + " jt";

  const cardA = h("div", { class: "eqs-card a" }, [h("span", { class: "eqs-lbl", text: "ASET" }), h("span", { class: "eqs-val" })]);
  const cardK = h("div", { class: "eqs-card k" }, [h("span", { class: "eqs-lbl", text: "KEWAJIBAN" }), h("span", { class: "eqs-val" })]);
  const cardE = h("div", { class: "eqs-card e" }, [h("span", { class: "eqs-lbl", text: "EKUITAS" }), h("span", { class: "eqs-val" })]);
  const eqLine = h("div", { class: "eqs-eq" });

  function draw() {
    cardA.querySelector(".eqs-val").textContent = rp(A);
    cardK.querySelector(".eqs-val").textContent = rp(K);
    cardE.querySelector(".eqs-val").textContent = rp(E);
    const balanced = A === K + E;
    eqLine.innerHTML = `<b>${rp(A)}</b> = <b>${rp(K)}</b> + <b>${rp(E)}</b> <span class="eqs-ok">${balanced ? "✓ Seimbang" : "✗"}</span>`;
  }

  const btnRow = h("div", { class: "eqs-btns" });
  txs.forEach((t) => {
    btnRow.appendChild(h("button", {
      class: "btn", text: t.label,
      onclick: () => { A += t.a; K += t.k; E += t.e; draw(); },
    }));
  });
  const reset = h("button", { class: "btn ghost", onclick: () => { A = K = E = 0; draw(); } }, "↺ Reset");

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "⚖️ <b>Demo: persamaan akuntansi selalu seimbang</b>" }),
    h("p", { class: "demo-hint", text: "Klik transaksi di bawah. Perhatikan: sisi kiri (Aset) SELALU sama dengan sisi kanan (Kewajiban + Ekuitas), berapa pun transaksinya." }),
    h("div", { class: "eqs-cards" }, [cardA, cardK, cardE]),
    eqLine,
    btnRow,
    h("div", { class: "demo-controls" }, [reset]),
  ]);
  root.appendChild(box);
  draw();
};

/* ---------- Demo: Latihan Debit / Kredit ---------- */
DEMOS["debit-credit"] = function (root) {
  const accounts = [
    ["Kas", "Aset", "debit"], ["Persediaan", "Aset", "debit"], ["Peralatan", "Aset", "debit"],
    ["Beban Gaji", "Beban", "debit"], ["Beban Sewa", "Beban", "debit"],
    ["Utang Bank", "Kewajiban", "kredit"], ["Utang Usaha", "Kewajiban", "kredit"],
    ["Modal Pemilik", "Ekuitas", "kredit"], ["Pendapatan Jasa", "Pendapatan", "kredit"], ["Penjualan", "Pendapatan", "kredit"],
  ];
  let correct = 0, total = 0, cur = null;

  const q = h("div", { class: "dc-q" });
  const btnRow = h("div", { class: "dc-btns" });
  const fb = h("div", { class: "dc-fb", hidden: "" });
  const score = h("div", { class: "dc-score" });

  function ask() {
    cur = accounts[Math.floor(Math.random() * accounts.length)];
    q.innerHTML = `Untuk <b>MENAMBAH</b> akun ini, dicatat di sisi mana?<br><span class="dc-acct">${cur[0]} <span class="dc-type">(${cur[1]})</span></span>`;
    fb.hidden = true;
    btnRow.innerHTML = "";
    ["Debit", "Kredit"].forEach((side) => {
      btnRow.appendChild(h("button", { class: "btn dc-pick", text: side, onclick: () => answer(side.toLowerCase()) }));
    });
  }
  function answer(side) {
    total++;
    const ok = side === cur[2];
    if (ok) correct++;
    fb.hidden = false;
    fb.className = "dc-fb " + (ok ? "ok" : "no");
    fb.innerHTML = `${ok ? "✓ Benar!" : "✗ Kurang tepat."} <b>${cur[0]}</b> (${cur[1]}) bertambah di sisi <b>${cur[2] === "debit" ? "Debit" : "Kredit"}</b>. ` +
      `<span class="dc-rule">${cur[2] === "debit" ? "Ingat: Beban & Aset bertambah di Debit." : "Ingat: Kewajiban, Ekuitas, & Pendapatan bertambah di Kredit."}</span>`;
    score.textContent = `Skor: ${correct}/${total} benar`;
    btnRow.querySelectorAll(".dc-pick").forEach((b) => (b.disabled = true));
    btnRow.appendChild(h("button", { class: "btn primary", text: "Soal berikutnya →", onclick: ask }));
  }

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🎯 <b>Demo: latihan Debit atau Kredit</b>" }),
    h("p", { class: "demo-hint", text: "Tebak: untuk menambah akun yang muncul, dicatat di Debit atau Kredit? Aturan: Beban & Aset → Debit; Kewajiban, Ekuitas, Pendapatan → Kredit." }),
    q, btnRow, fb, score,
  ]);
  root.appendChild(box);
  ask();
};

/* ---------- Demo: Kalkulator Laba Rugi ---------- */
DEMOS["profit-calc"] = function (root) {
  const fields = [
    { key: "pendapatan", label: "Pendapatan (penjualan)", val: 200 },
    { key: "hpp", label: "Harga Pokok Penjualan (HPP)", val: 120 },
    { key: "gaji", label: "Beban gaji", val: 30 },
    { key: "sewa", label: "Beban sewa", val: 15 },
    { key: "lain", label: "Beban lain-lain", val: 5 },
  ];
  const state = {};
  const inputs = {};
  const rows = fields.map((f) => {
    state[f.key] = f.val;
    const inp = h("input", { class: "pc-input", type: "number", min: "0", value: String(f.val) });
    inp.addEventListener("input", () => { state[f.key] = parseFloat(inp.value) || 0; draw(); });
    inputs[f.key] = inp;
    return h("label", { class: "pc-row" }, [h("span", { text: f.label }), h("span", { class: "pc-inwrap" }, [h("span", { class: "pc-rp", text: "Rp" }), inp, h("span", { class: "pc-jt", text: "jt" })])]);
  });

  const out = h("div", { class: "pc-out" });
  function draw() {
    const labaKotor = state.pendapatan - state.hpp;
    const beban = state.gaji + state.sewa + state.lain;
    const labaBersih = labaKotor - beban;
    const margin = state.pendapatan ? (labaBersih / state.pendapatan) * 100 : 0;
    out.innerHTML =
      `<div class="pc-line"><span>Laba Kotor (Pendapatan − HPP)</span><b>Rp${labaKotor} jt</b></div>` +
      `<div class="pc-line"><span>Total Beban Operasional</span><b>Rp${beban} jt</b></div>` +
      `<div class="pc-line pc-net ${labaBersih >= 0 ? "good" : "bad"}"><span>${labaBersih >= 0 ? "LABA BERSIH 🎉" : "RUGI BERSIH ⚠️"}</span><b>Rp${labaBersih} jt</b></div>` +
      `<div class="pc-margin">Margin laba bersih: <b>${margin.toFixed(1)}%</b> — tiap Rp100 penjualan menghasilkan Rp${(margin).toFixed(0)} laba.</div>`;
  }

  const box = h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧮 <b>Demo: kalkulator laba rugi</b>" }),
    h("p", { class: "demo-hint", text: "Ubah angka-angka (dalam juta Rupiah) dan lihat laba bersih serta marginnya berubah langsung." }),
    h("div", { class: "pc-form" }, rows),
    out,
  ]);
  root.appendChild(box);
  draw();
};

/* ---------- Playground JavaScript (jalankan kode di browser) ---------- */
function pgFormat(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  }
  return String(v);
}
function pgRun(code, outEl) {
  const logs = [];
  const orig = { log: console.log, error: console.error, warn: console.warn };
  console.log = function () { logs.push(Array.prototype.map.call(arguments, pgFormat).join(" ")); };
  console.error = function () { logs.push("⚠ " + Array.prototype.map.call(arguments, pgFormat).join(" ")); };
  console.warn = console.error;
  try {
    new Function('"use strict";\n' + code)();
  } catch (e) {
    logs.push("❌ Error: " + e.message);
  } finally {
    console.log = orig.log;
    console.error = orig.error;
    console.warn = orig.warn;
  }
  outEl.textContent = logs.length ? logs.join("\n") : "(Tidak ada output. Gunakan console.log(...) untuk menampilkan hasil.)";
}
function buildPlayground(host, initialCode) {
  const ta = h("textarea", { class: "pg-code", spellcheck: "false" });
  ta.value = initialCode || "";
  const out = h("pre", { class: "pg-output", text: "(Klik ▶ Jalankan untuk melihat hasil)" });
  const runBtn = h("button", { class: "btn primary", text: "▶ Jalankan" });
  const resetBtn = h("button", { class: "btn ghost", text: "↺ Reset" });
  runBtn.onclick = function () { pgRun(ta.value, out); };
  resetBtn.onclick = function () { ta.value = initialCode || ""; out.textContent = "(Klik ▶ Jalankan untuk melihat hasil)"; };
  // Tombol Tab menyisipkan spasi, bukan pindah fokus
  ta.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const s = ta.selectionStart;
      ta.value = ta.value.slice(0, s) + "  " + ta.value.slice(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = s + 2;
    }
  });
  const box = h("div", { class: "demo pg" }, [
    h("div", { class: "demo-head", html: "🧪 <b>Coba kode ini — jalankan langsung di browser</b>" }),
    h("p", { class: "demo-hint", text: "Ubah kodenya sesukamu, lalu klik Jalankan. Semua berjalan offline & aman di perangkatmu." }),
    ta,
    h("div", { class: "demo-controls" }, [runBtn, resetBtn]),
    h("span", { class: "pg-out-label", text: "Output:" }),
    out,
  ]);
  host.appendChild(box);
  return ta;
}
DEMOS["js-playground"] = function (root) {
  const init = (root.textContent || "").trim();
  root.textContent = "";
  buildPlayground(root, init || 'console.log("Halo dari playground!");');
};
