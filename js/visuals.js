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
/* Pembantu diagram generik */
function vEsc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
function vWrap(text, maxChars) {
  const words = String(text).split(" ");
  const lines = [];
  let cur = "";
  words.forEach((w) => {
    if (cur && (cur + " " + w).length > maxChars) { lines.push(cur); cur = w; }
    else { cur = cur ? cur + " " + w : w; }
  });
  if (cur) lines.push(cur);
  return lines.slice(0, 3);
}
function vFigure(caption, svgMarkup) {
  const cap = caption ? `<figcaption>${vEsc(caption)}</figcaption>` : "";
  return `<figure class="viz">${cap}${svgMarkup}</figure>`;
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

  /* ---------- Diagram generik (dipakai ulang lewat atribut data-*) ---------- */

  /* <div data-diagram="flow" data-steps="A|B|C" data-caption="..."></div> */
  flow: (ds) => {
    const steps = (ds.steps || "").split("|").map((s) => s.trim()).filter(Boolean);
    const n = Math.max(1, steps.length);
    const W = 520, gap = 16;
    const boxW = Math.max(64, Math.min(150, (W - 24 - gap * (n - 1)) / n));
    const boxH = 68;
    let x = (W - (boxW * n + gap * (n - 1))) / 2;
    let body = "";
    steps.forEach((s, i) => {
      const lines = vWrap(s, Math.max(8, Math.floor(boxW / 5.4)));
      const startY = 42 + boxH / 2 - (lines.length - 1) * 7 - 2;
      body += `<rect x="${x}" y="42" width="${boxW}" height="${boxH}" rx="10" class="vbox accent"/>`;
      lines.forEach((ln, li) => {
        body += `<text x="${x + boxW / 2}" y="${startY + li * 14}" text-anchor="middle" class="vt-sm">${vEsc(ln)}</text>`;
      });
      if (i !== n - 1) body += `<text x="${x + boxW + gap / 2}" y="${42 + boxH / 2 + 5}" text-anchor="middle" class="vt">→</text>`;
      x += boxW + gap;
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 ${W} 132" class="viz-svg" role="img" aria-label="Diagram alur">${body}</svg>`);
  },

  /* <div data-diagram="vs" data-left="Judul::poin::poin" data-right="Judul::poin::poin"></div> */
  vs: (ds) => {
    const L = (ds.left || "").split("::").map((s) => s.trim()).filter(Boolean);
    const R = (ds.right || "").split("::").map((s) => s.trim()).filter(Boolean);
    const rows = Math.max(L.length, R.length);
    const H = 54 + rows * 20;
    const box = (x, arr, cls) => {
      let s = `<rect x="${x}" y="26" width="222" height="${H - 40}" rx="12" class="vbox ${cls}"/>`;
      arr.forEach((t, i) => {
        const y = 52 + i * 20;
        s += `<text x="${x + 111}" y="${y}" text-anchor="middle" class="${i === 0 ? "vt-bold" : "vt-sm"}">${vEsc(t)}</text>`;
      });
      return s;
    };
    const body = box(14, L, "accent") + `<text x="260" y="${H / 2 + 8}" text-anchor="middle" class="vt-bold">vs</text>` + box(284, R, "accent2");
    return vFigure(ds.caption, `<svg viewBox="0 0 520 ${H}" class="viz-svg" role="img" aria-label="Diagram perbandingan">${body}</svg>`);
  },

  /* <div data-diagram="layers" data-items="Paling atas|Tengah|Dasar"></div> */
  layers: (ds) => {
    const items = (ds.items || "").split("|").map((s) => s.trim()).filter(Boolean);
    const n = Math.max(1, items.length);
    const H = 26 + n * 44;
    let body = "";
    items.forEach((t, i) => {
      const w = 200 + i * 70;
      const x = (520 - w) / 2;
      const y = 18 + i * 44;
      body += `<rect x="${x}" y="${y}" width="${w}" height="36" rx="8" class="vbox ${i === 0 ? "ok" : "accent"}"/>`;
      body += `<text x="260" y="${y + 23}" text-anchor="middle" class="vt-sm">${vEsc(t)}</text>`;
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 520 ${H}" class="viz-svg" role="img" aria-label="Diagram lapisan">${body}</svg>`);
  },

  /* <div data-diagram="scale" data-zones="Rawan|Abu-abu|Aman" data-marks="1,81|2,99"></div> */
  scale: (ds) => {
    const zones = (ds.zones || "").split("|").map((s) => s.trim()).filter(Boolean);
    const marks = (ds.marks || "").split("|").map((s) => s.trim()).filter(Boolean);
    const n = Math.max(1, zones.length);
    const W = 520, pad = 20;
    const segW = (W - pad * 2) / n;
    const cls = ["bad", "accent", "ok"];
    let body = "";
    zones.forEach((z, i) => {
      const x = pad + i * segW;
      body += `<rect x="${x}" y="34" width="${segW}" height="40" rx="6" class="vbox ${cls[i] || "accent"}"/>`;
      body += `<text x="${x + segW / 2}" y="${59}" text-anchor="middle" class="vt-sm">${vEsc(z)}</text>`;
      if (i !== n - 1 && marks[i]) {
        body += `<text x="${x + segW}" y="90" text-anchor="middle" class="vt-sm">${vEsc(marks[i])}</text>`;
      }
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 ${W} 104" class="viz-svg" role="img" aria-label="Diagram rentang">${body}</svg>`);
  },

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

  /* ---------- Generator generik tambahan ---------- */

  /* Pohon keputusan 2 tingkat.
     <div data-diagram="tree" data-nodes="Berbulu?::Menggonggong?::Bisa terbang?"
          data-leaves="Anjing|Kucing|Burung|Ikan"></div> */
  tree: (ds) => {
    const q = (ds.nodes || "").split("::").map((s) => s.trim()).filter(Boolean);
    const leaves = (ds.leaves || "").split("|").map((s) => s.trim()).filter(Boolean);
    const yes = ds.yes || "Ya";
    const no = ds.no || "Tidak";
    const lw = 110, lgap = 26;
    const lx = (i) => 1 + i * (lw + lgap);
    const lc = (i) => lx(i) + lw / 2;
    let body = "";
    // daun
    leaves.slice(0, 4).forEach((t, i) => {
      body += `<rect x="${lx(i)}" y="164" width="${lw}" height="38" rx="9" class="vbox ok"/>`;
      vWrap(t, 16).forEach((ln, li) => {
        body += `<text x="${lc(i)}" y="${(leaves[i] && vWrap(t, 16).length > 1 ? 181 : 188) + li * 13}" text-anchor="middle" class="vt-sm">${vEsc(ln)}</text>`;
      });
    });
    // simpul tingkat 2
    const midC = [(lc(0) + lc(1)) / 2, (lc(2) + lc(3)) / 2];
    [q[1], q[2]].forEach((t, i) => {
      if (!t) return;
      body += `<rect x="${midC[i] - 75}" y="86" width="150" height="38" rx="9" class="vbox accent"/>`;
      body += `<text x="${midC[i]}" y="110" text-anchor="middle" class="vt-sm">${vEsc(t)}</text>`;
      body += `<line x1="${midC[i]}" y1="124" x2="${lc(i * 2)}" y2="164" class="vline"/>`;
      body += `<line x1="${midC[i]}" y1="124" x2="${lc(i * 2 + 1)}" y2="164" class="vline"/>`;
      body += `<text x="${(midC[i] + lc(i * 2)) / 2 - 12}" y="150" text-anchor="middle" class="vt-xs">${vEsc(yes)}</text>`;
      body += `<text x="${(midC[i] + lc(i * 2 + 1)) / 2 + 12}" y="150" text-anchor="middle" class="vt-xs">${vEsc(no)}</text>`;
    });
    // akar
    const rootC = (midC[0] + midC[1]) / 2;
    body += `<line x1="${rootC}" y1="46" x2="${midC[0]}" y2="86" class="vline"/>`;
    body += `<line x1="${rootC}" y1="46" x2="${midC[1]}" y2="86" class="vline"/>`;
    body += `<text x="${(rootC + midC[0]) / 2 - 12}" y="72" text-anchor="middle" class="vt-xs">${vEsc(yes)}</text>`;
    body += `<text x="${(rootC + midC[1]) / 2 + 12}" y="72" text-anchor="middle" class="vt-xs">${vEsc(no)}</text>`;
    body += `<rect x="${rootC - 80}" y="8" width="160" height="38" rx="9" class="vbox accent2"/>`;
    body += `<text x="${rootC}" y="32" text-anchor="middle" class="vt-bold" style="font-size:12px">${vEsc(q[0] || "Pertanyaan")}</text>`;
    return vFigure(ds.caption, `<svg viewBox="0 0 520 212" class="viz-svg" role="img" aria-label="Diagram pohon keputusan">${body}</svg>`);
  },

  /* Siklus berulang. <div data-diagram="cycle" data-steps="A|B|C|D"></div> */
  cycle: (ds) => {
    const steps = (ds.steps || "").split("|").map((s) => s.trim()).filter(Boolean);
    const n = Math.max(1, steps.length);
    const cx = 260, cy = 132, R = 92;
    let body = `<circle cx="${cx}" cy="${cy}" r="${R}" class="vring"/>`;
    steps.forEach((s, i) => {
      const a = (-90 + (i * 360) / n) * (Math.PI / 180);
      const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      const lines = vWrap(s, 15);
      body += `<rect x="${x - 62}" y="${y - 20}" width="124" height="40" rx="10" class="vbox accent"/>`;
      lines.forEach((ln, li) => {
        body += `<text x="${x}" y="${y + 4 - (lines.length - 1) * 6 + li * 12}" text-anchor="middle" class="vt-xs">${vEsc(ln)}</text>`;
      });
      // panah di antara dua langkah
      const am = (-90 + ((i + 0.5) * 360) / n) * (Math.PI / 180);
      const ax = cx + R * Math.cos(am), ay = cy + R * Math.sin(am);
      const deg = (am * 180) / Math.PI + 90;
      body += `<path d="M -7 -6 L 7 0 L -7 6 Z" class="varrow" transform="translate(${ax.toFixed(1)},${ay.toFixed(1)}) rotate(${deg.toFixed(1)})"/>`;
    });
    if (ds.center) body += `<text x="${cx}" y="${cy + 4}" text-anchor="middle" class="vt-bold" style="font-size:12px">${vEsc(ds.center)}</text>`;
    return vFigure(ds.caption, `<svg viewBox="0 0 520 270" class="viz-svg" role="img" aria-label="Diagram siklus">${body}</svg>`);
  },

  /* Garis waktu. <div data-diagram="timeline" data-events="2009::Bitcoin lahir|2012::Halving 1"></div> */
  timeline: (ds) => {
    const ev = (ds.events || "").split("|").map((s) => s.split("::").map((t) => t.trim())).filter((a) => a[0]);
    const n = Math.max(1, ev.length);
    const pad = 46, W = 520;
    const step = n > 1 ? (W - pad * 2) / (n - 1) : 0;
    let body = `<line x1="${pad - 20}" y1="86" x2="${W - pad + 20}" y2="86" class="vaxis"/>`;
    ev.forEach((e, i) => {
      const x = pad + i * step;
      const atas = i % 2 === 0;
      body += `<circle cx="${x}" cy="86" r="7" class="vdot"/>`;
      body += `<text x="${x}" y="${atas ? 74 : 106}" text-anchor="middle" class="vt-bold" style="font-size:12px">${vEsc(e[0])}</text>`;
      vWrap(e[1] || "", 16).forEach((ln, li) => {
        body += `<text x="${x}" y="${(atas ? 40 : 122) + li * 12}" text-anchor="middle" class="vt-xs">${vEsc(ln)}</text>`;
      });
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 ${W} 160" class="viz-svg" role="img" aria-label="Garis waktu">${body}</svg>`);
  },

  /* Kuadran 2x2. <div data-diagram="matrix" data-xlabel="Risiko" data-ylabel="Imbal hasil"
       data-cells="Kiri-atas|Kanan-atas|Kiri-bawah|Kanan-bawah"></div> */
  matrix: (ds) => {
    const c = (ds.cells || "").split("|").map((s) => s.trim());
    const cls = ["accent", "ok", "bad", "accent2"];
    let body = "";
    const bx = [56, 288], by = [24, 122];
    for (let i = 0; i < 4; i++) {
      const x = bx[i % 2], y = by[Math.floor(i / 2)];
      body += `<rect x="${x}" y="${y}" width="176" height="90" rx="10" class="vbox ${cls[i]}"/>`;
      vWrap(c[i] || "", 20).forEach((ln, li) => {
        body += `<text x="${x + 88}" y="${y + 48 - (vWrap(c[i] || "", 20).length - 1) * 7 + li * 14}" text-anchor="middle" class="vt-xs">${vEsc(ln)}</text>`;
      });
    }
    if (ds.ylabel) body += `<text x="16" y="118" text-anchor="middle" class="vt-sm" transform="rotate(-90 16 118)">${vEsc(ds.ylabel)} →</text>`;
    if (ds.xlabel) body += `<text x="260" y="234" text-anchor="middle" class="vt-sm">${vEsc(ds.xlabel)} →</text>`;
    return vFigure(ds.caption, `<svg viewBox="0 0 520 244" class="viz-svg" role="img" aria-label="Diagram kuadran">${body}</svg>`);
  },

  /* Grafik batang. <div data-diagram="bar" data-bars="Perusahaan A:15|Perusahaan B:22" data-unit="x"></div> */
  bar: (ds) => {
    const items = (ds.bars || "").split("|").map((s) => {
      const i = s.lastIndexOf(":");
      let label = s.slice(0, i).trim();
      // jaga agar label tidak meluber keluar bingkai (ruang label ~130px @11px)
      if (label.length > 24) label = label.slice(0, 23).trimEnd() + "…";
      return { label: label, val: parseFloat(s.slice(i + 1)) || 0 };
    }).filter((d) => d.label);
    const unit = ds.unit || "";
    const max = Math.max(1, ...items.map((d) => Math.abs(d.val)));
    const labW = 130, barX = labW + 10, barMax = 300;
    const H = 16 + items.length * 34;
    let body = "";
    items.forEach((d, i) => {
      const y = 12 + i * 34;
      const w = Math.max(2, (Math.abs(d.val) / max) * barMax);
      body += `<text x="${labW}" y="${y + 17}" text-anchor="end" class="vt-xs">${vEsc(d.label)}</text>`;
      body += `<rect x="${barX}" y="${y}" width="${w.toFixed(1)}" height="24" rx="5" class="vfill ${d.val < 0 ? "neg" : ""}"/>`;
      body += `<text x="${barX + w + 8}" y="${y + 17}" class="vt-xs">${vEsc(d.val + unit)}</text>`;
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 520 ${H}" class="viz-svg" role="img" aria-label="Grafik batang">${body}</svg>`);
  },

  /* Jaringan pusat-cabang. <div data-diagram="network" data-center="Blockchain" data-nodes="A|B|C|D|E"></div> */
  network: (ds) => {
    const nodes = (ds.nodes || "").split("|").map((s) => s.trim()).filter(Boolean);
    const n = Math.max(1, nodes.length);
    const cx = 260, cy = 128, R = 96;
    const punyaPusat = !!ds.center;
    let lines = "", boxes = "";
    const pos = nodes.map((_, i) => {
      const a = (-90 + (i * 360) / n) * (Math.PI / 180);
      return [cx + R * Math.cos(a) * 1.55, cy + R * Math.sin(a)];
    });
    if (punyaPusat) {
      pos.forEach((p) => (lines += `<line x1="${cx}" y1="${cy}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" class="vline"/>`));
    } else {
      for (let i = 0; i < pos.length; i++)
        for (let j = i + 1; j < pos.length; j++)
          lines += `<line x1="${pos[i][0].toFixed(1)}" y1="${pos[i][1].toFixed(1)}" x2="${pos[j][0].toFixed(1)}" y2="${pos[j][1].toFixed(1)}" class="vline dim"/>`;
    }
    pos.forEach((p, i) => {
      boxes += `<rect x="${(p[0] - 52).toFixed(1)}" y="${(p[1] - 17).toFixed(1)}" width="104" height="34" rx="17" class="vbox accent"/>`;
      boxes += `<text x="${p[0].toFixed(1)}" y="${(p[1] + 4).toFixed(1)}" text-anchor="middle" class="vt-xs">${vEsc(nodes[i])}</text>`;
    });
    let center = "";
    if (punyaPusat) {
      center = `<circle cx="${cx}" cy="${cy}" r="42" class="vbox accent2"/><text x="${cx}" y="${cy + 4}" text-anchor="middle" class="vt-xs">${vEsc(ds.center)}</text>`;
    }
    return vFigure(ds.caption, `<svg viewBox="0 0 520 256" class="viz-svg" role="img" aria-label="Diagram jaringan">${lines}${center}${boxes}</svg>`);
  },

  /* Proporsi bertumpuk. <div data-diagram="stack" data-parts="Bahan:40|Gaji:30|Sewa:20|Lain:10"></div> */
  stack: (ds) => {
    const parts = (ds.parts || "").split("|").map((s) => {
      const i = s.lastIndexOf(":");
      return { label: s.slice(0, i).trim(), val: parseFloat(s.slice(i + 1)) || 0 };
    }).filter((d) => d.label);
    const total = parts.reduce((a, d) => a + d.val, 0) || 1;
    const W = 480, X0 = 20;
    const cls = ["accent", "accent2", "ok", "bad", "accent"];
    let bar = "", legend = "";
    let x = X0;
    parts.forEach((d, i) => {
      const w = (d.val / total) * W;
      bar += `<rect x="${x.toFixed(1)}" y="26" width="${w.toFixed(1)}" height="44" class="vfill s${i % 5}"/>`;
      if (w > 34) bar += `<text x="${(x + w / 2).toFixed(1)}" y="53" text-anchor="middle" class="vt-xs" style="fill:#fff">${((d.val / total) * 100).toFixed(0)}%</text>`;
      const ly = 92 + Math.floor(i / 2) * 22, lxp = 24 + (i % 2) * 250;
      legend += `<rect x="${lxp}" y="${ly - 9}" width="12" height="12" rx="3" class="vfill s${i % 5}"/>`;
      legend += `<text x="${lxp + 19}" y="${ly + 1}" class="vt-xs">${vEsc(d.label)} — ${((d.val / total) * 100).toFixed(0)}%</text>`;
      x += w;
    });
    const H = 92 + Math.ceil(parts.length / 2) * 22;
    return vFigure(ds.caption, `<svg viewBox="0 0 520 ${H}" class="viz-svg" role="img" aria-label="Diagram proporsi">${bar}${legend}</svg>`);
  },

  /* Tahapan berlabel. <div data-diagram="pipeline" data-stages="Judul::keterangan|Judul::keterangan"></div> */
  pipeline: (ds) => {
    const st = (ds.stages || "").split("|").map((s) => s.split("::").map((t) => t.trim())).filter((a) => a[0]);
    const n = Math.max(1, st.length);
    const W = 520, gap = 14;
    const bw = (W - 20 - gap * (n - 1)) / n;
    let body = "";
    let x = 10;
    st.forEach((s, i) => {
      body += `<rect x="${x.toFixed(1)}" y="22" width="${bw.toFixed(1)}" height="46" rx="9" class="vbox accent"/>`;
      body += `<text x="${(x + bw / 2).toFixed(1)}" y="50" text-anchor="middle" class="vt-bold" style="font-size:12px">${vEsc(s[0])}</text>`;
      vWrap(s[1] || "", Math.max(10, Math.floor(bw / 5))).forEach((ln, li) => {
        body += `<text x="${(x + bw / 2).toFixed(1)}" y="${86 + li * 13}" text-anchor="middle" class="vt-xs">${vEsc(ln)}</text>`;
      });
      if (i !== n - 1) body += `<text x="${(x + bw + gap / 2).toFixed(1)}" y="51" text-anchor="middle" class="vt">→</text>`;
      x += bw + gap;
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 ${W} 132" class="viz-svg" role="img" aria-label="Diagram tahapan">${body}</svg>`);
  },

  /* Banding 3 kolom. <div data-diagram="compare3" data-cols="Judul::a::b|Judul::a::b|Judul::a::b"></div> */
  compare3: (ds) => {
    const cols = (ds.cols || "").split("|").map((s) => s.split("::").map((t) => t.trim())).filter((a) => a[0]);
    const n = Math.max(1, cols.length);
    const rows = Math.max(...cols.map((c) => c.length), 1);
    const H = 30 + rows * 20;
    const cw = (520 - 20 - (n - 1) * 10) / n;
    const cls = ["accent", "accent2", "ok"];
    let body = "";
    cols.forEach((c, i) => {
      const x = 10 + i * (cw + 10);
      body += `<rect x="${x.toFixed(1)}" y="12" width="${cw.toFixed(1)}" height="${H - 22}" rx="10" class="vbox ${cls[i % 3]}"/>`;
      c.forEach((t, j) => {
        body += `<text x="${(x + cw / 2).toFixed(1)}" y="${34 + j * 20}" text-anchor="middle" class="${j === 0 ? "vt-bold" : "vt-xs"}" style="${j === 0 ? "font-size:12px" : ""}">${vEsc(t)}</text>`;
      });
    });
    return vFigure(ds.caption, `<svg viewBox="0 0 520 ${H}" class="viz-svg" role="img" aria-label="Diagram perbandingan tiga kolom">${body}</svg>`);
  },

  /* Tanda tangan digital: kunci privat menandatangani, kunci publik memverifikasi */
  sign: () => `
  <figure class="viz">
    <figcaption>Kunci privat membuat tanda tangan; siapa pun bisa memeriksanya dengan kunci publik — tanpa pernah melihat kunci privatnya.</figcaption>
    <svg viewBox="0 0 520 236" class="viz-svg" role="img" aria-label="Alur tanda tangan digital">
      <text x="130" y="16" text-anchor="middle" class="vt-bold" style="font-size:12px">PENGIRIM</text>
      <text x="390" y="16" text-anchor="middle" class="vt-bold" style="font-size:12px">SIAPA PUN</text>
      <line x1="260" y1="24" x2="260" y2="212" class="vline dim"/>

      <rect x="34" y="30" width="192" height="34" rx="8" class="vbox"/>
      <text x="130" y="52" text-anchor="middle" class="vt-xs">Pesan: "Kirim 2 BTC ke Budi"</text>

      <rect x="34" y="84" width="192" height="34" rx="8" class="vbox bad"/>
      <text x="130" y="106" text-anchor="middle" class="vt-xs">🔒 Kunci privat (rahasia)</text>

      <text x="130" y="136" text-anchor="middle" class="vt-xs">tanda tangani ↓</text>

      <rect x="34" y="146" width="192" height="34" rx="8" class="vbox accent2"/>
      <text x="130" y="168" text-anchor="middle" class="vt-xs">✍️ Tanda tangan digital</text>

      <path d="M 226 163 L 300 163" class="vline"/>
      <path d="M -6 -5 L 6 0 L -6 5 Z" class="varrow" transform="translate(302,163)"/>

      <rect x="300" y="30" width="186" height="34" rx="8" class="vbox"/>
      <text x="393" y="52" text-anchor="middle" class="vt-xs">Pesan yang sama</text>

      <rect x="300" y="84" width="186" height="34" rx="8" class="vbox ok"/>
      <text x="393" y="106" text-anchor="middle" class="vt-xs">🔓 Kunci publik (terbuka)</text>

      <text x="393" y="136" text-anchor="middle" class="vt-xs">periksa ↓</text>

      <rect x="300" y="146" width="186" height="34" rx="8" class="vbox ok"/>
      <text x="393" y="168" text-anchor="middle" class="vt-xs">✅ Asli &amp; belum diubah</text>

      <text x="260" y="206" text-anchor="middle" class="vt-xs">Kunci privat tidak pernah dikirim ke mana pun</text>
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

/* ---------- Demo: Pohon Keputusan (klasifikasi hewan) ---------- */
DEMOS["decision-tree"] = function (root) {
  const state = { berbulu: true, gonggong: true, terbang: false };
  const viz = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });

  function tombol(key, label) {
    const b = h("button", { type: "button" });
    b.onclick = () => { state[key] = !state[key]; sync(); draw(); };
    function sync() {
      b.textContent = (state[key] ? "✅ " : "⬜ ") + label;
      b.className = "btn " + (state[key] ? "primary" : "ghost");
    }
    b.sync = sync;
    sync();
    return b;
  }
  const tb = [tombol("berbulu", "Berbulu"), tombol("gonggong", "Menggonggong"), tombol("terbang", "Bisa terbang")];
  function sync() { tb.forEach((b) => b.sync()); }

  function draw() {
    const kiri = state.berbulu;
    const cabang = kiri ? "n1" : "n2";
    const daunIdx = kiri ? (state.gonggong ? 0 : 1) : (state.terbang ? 2 : 3);
    const dipakai = kiri ? ["Berbulu?", "Menggonggong?"] : ["Berbulu?", "Bisa terbang?"];
    const jawab = kiri ? [state.berbulu, state.gonggong] : [state.berbulu, state.terbang];
    const namaDaun = ["Anjing 🐶", "Kucing 🐱", "Burung 🐦", "Ikan 🐟"];
    const dc = [56, 192, 328, 464];
    const on = (c) => (c ? " aktif" : "");
    let s = `<svg viewBox="0 0 520 212" class="viz-svg">`;
    s += `<line x1="260" y1="46" x2="124" y2="86" class="vline${on(kiri)}"/>`;
    s += `<line x1="260" y1="46" x2="396" y2="86" class="vline${on(!kiri)}"/>`;
    s += `<text x="180" y="72" text-anchor="middle" class="vt-xs">Ya</text>`;
    s += `<text x="340" y="72" text-anchor="middle" class="vt-xs">Tidak</text>`;
    [0, 1].forEach((i) => {
      const aktif = kiri ? i === 0 : i === 1;
      const cx = i === 0 ? 124 : 396;
      const kiriDaun = i * 2, kananDaun = i * 2 + 1;
      const pilihKiri = i === 0 ? state.gonggong : state.terbang;
      s += `<line x1="${cx}" y1="124" x2="${dc[kiriDaun]}" y2="164" class="vline${on(aktif && pilihKiri)}"/>`;
      s += `<line x1="${cx}" y1="124" x2="${dc[kananDaun]}" y2="164" class="vline${on(aktif && !pilihKiri)}"/>`;
      s += `<rect x="${cx - 75}" y="86" width="150" height="38" rx="9" class="vbox accent${on(aktif)}"/>`;
      s += `<text x="${cx}" y="110" text-anchor="middle" class="vt-xs">${i === 0 ? "Menggonggong?" : "Bisa terbang?"}</text>`;
    });
    namaDaun.forEach((t, i) => {
      s += `<rect x="${dc[i] - 55}" y="164" width="110" height="38" rx="9" class="vbox ok${on(i === daunIdx)}"/>`;
      s += `<text x="${dc[i]}" y="188" text-anchor="middle" class="vt-xs">${t}</text>`;
    });
    s += `<rect x="180" y="8" width="160" height="38" rx="9" class="vbox accent2 aktif"/>`;
    s += `<text x="260" y="32" text-anchor="middle" class="vt-xs">Berbulu?</text>`;
    s += `</svg>`;
    viz.innerHTML = s;
    out.innerHTML =
      `<div class="dm-line teks"><span>Pertanyaan yang ditanyakan</span><b>${dipakai.map((q, i) => q + " → " + (jawab[i] ? "Ya" : "Tidak")).join("  |  ")}</b></div>` +
      `<div class="dm-line"><span>Pertanyaan yang <i>dilewati</i></span><b>1 dari 3</b></div>` +
      `<div class="dm-line big good"><span>Prediksi pohon</span><b>${namaDaun[daunIdx]}</b></div>`;
  }

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌳 <b>Demo: pohon keputusan bekerja</b>" }),
    h("p", { class: "demo-hint", text: "Nyalakan/matikan ciri-cirinya, lalu lihat jalur mana yang menyala sampai ke jawaban. Perhatikan: pohon tidak pernah menanyakan semua ciri — itulah sebabnya ia cepat." }),
    h("div", { class: "demo-controls" }, tb),
    viz,
    out,
  ]));
  draw();
};

/* ---------- Demo: Double-spending (kenapa perlu blockchain) ---------- */
DEMOS["double-spend"] = function (root) {
  let pakaiBlockchain = true;
  const out = h("div", { class: "dm-log" });
  const sw = h("button", { class: "btn primary", type: "button" });
  function syncSw() { sw.textContent = pakaiBlockchain ? "⛓️ Dengan blockchain" : "📄 Tanpa blockchain (file biasa)"; sw.className = "btn " + (pakaiBlockchain ? "primary" : "ghost"); }
  sw.onclick = () => { pakaiBlockchain = !pakaiBlockchain; syncSw(); out.innerHTML = '<div class="dm-li">Mode diubah. Klik "Belanjakan koin yang sama 2×".</div>'; };
  syncSw();

  const jalan = h("button", { class: "btn ghost", type: "button", text: "💸 Belanjakan koin yang sama 2×" });
  jalan.onclick = function () {
    const baris = [];
    const push = (t, k) => baris.push(`<div class="dm-li ${k || ""}">${t}</div>`);
    push("Budi punya <b>1 koin</b>. Ia mengirimnya ke Toko A dan Toko B <b>pada detik yang sama</b>.");
    if (!pakaiBlockchain) {
      push("📄 Toko A memeriksa catatannya sendiri → saldo Budi 1 koin → <b>diterima</b>.", "ok");
      push("📄 Toko B memeriksa catatannya sendiri → saldo Budi 1 koin → <b>diterima</b>.", "ok");
      push("❌ <b>PENIPUAN BERHASIL.</b> Satu koin terpakai dua kali karena tidak ada catatan bersama. Inilah masalah <i>double-spending</i>.", "bad");
    } else {
      push("⛓️ Kedua transaksi masuk ke antrean jaringan (mempool).");
      const menang = Math.random() < 0.5 ? "A" : "B";
      const kalah = menang === "A" ? "B" : "A";
      push(`⛏️ Penambang menyusun blok berikutnya. Transaksi ke <b>Toko ${menang}</b> masuk lebih dulu.`);
      push(`✅ Transaksi ke Toko ${menang} <b>tercatat permanen</b> — koin Budi kini milik Toko ${menang}.`, "ok");
      push(`🚫 Transaksi ke Toko ${kalah} <b>DITOLAK</b> — jaringan melihat koin itu sudah terpakai.`, "bad");
      push("🎉 <b>Penipuan gagal.</b> Bukan karena ada polisi, tapi karena semua orang memegang catatan yang sama.", "ok");
    }
    out.innerHTML = baris.join("");
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🪙 <b>Demo: masalah salinan digital (double-spending)</b>" }),
    h("p", { class: "demo-hint", text: "Coba jalankan dua kali: sekali tanpa blockchain, sekali dengan blockchain. Bandingkan hasilnya." }),
    h("div", { class: "demo-controls" }, [sw, jalan]),
    out,
  ]));
  out.innerHTML = '<div class="dm-li">Klik "Belanjakan koin yang sama 2×" untuk mulai.</div>';
};

/* ---------- Demo: Simulasi penambangan (mining) ---------- */
DEMOS["mining-sim"] = function (root) {
  let diff = 2, running = false;
  const data = "Blok #1 — Ani kirim 5 koin ke Budi";
  const out = h("div", { class: "dm-out" });
  const slider = h("input", { type: "range", min: "1", max: "4", value: "2", class: "dm-range" });
  const dlabel = h("b", { text: "2 nol" });
  slider.oninput = () => { diff = parseInt(slider.value, 10); dlabel.textContent = diff + " nol"; tampil("(siap)", 0, 0, 0, null); };

  const btn = h("button", { class: "btn primary", type: "button", text: "⛏️ Tambang blok ini" });

  function tampil(hsh, nonce, attempts, ms, ok) {
    const perlu = Math.pow(16, diff);
    out.innerHTML =
      `<div class="dm-line"><span>Target</span><b>hash harus diawali ${"0".repeat(diff)}</b></div>` +
      `<div class="dm-line"><span>Percobaan (nonce)</span><b>${attempts.toLocaleString("id-ID")}</b></div>` +
      `<div class="dm-line"><span>Rata-rata dibutuhkan</span><b>~${perlu.toLocaleString("id-ID")} percobaan</b></div>` +
      `<div class="dm-line"><span>Waktu</span><b>${(ms / 1000).toFixed(2)} detik</b></div>` +
      `<div class="dm-hash ${ok === true ? "good" : ok === false ? "warn" : ""}">${hsh}</div>` +
      (ok === true ? `<div class="dm-line big good"><span>✅ Blok ditemukan!</span><b>nonce = ${nonce.toLocaleString("id-ID")}</b></div>` : "");
  }

  btn.onclick = function () {
    if (running) return;
    running = true;
    btn.disabled = true;
    btn.textContent = "⏳ Menambang...";
    let nonce = 0, attempts = 0;
    const target = "0".repeat(diff);
    const t0 = Date.now();
    function chunk() {
      let n = 0;
      while (n < 4000) {
        const hsh = demoHash(data + nonce);
        attempts++;
        if (hsh.slice(0, diff) === target) {
          running = false;
          btn.disabled = false;
          btn.textContent = "⛏️ Tambang lagi";
          tampil(hsh, nonce, attempts, Date.now() - t0, true);
          return;
        }
        nonce++; n++;
      }
      tampil(demoHash(data + nonce), nonce, attempts, Date.now() - t0, false);
      setTimeout(chunk, 0);
    }
    chunk();
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "⛏️ <b>Demo: bagaimana penambangan sebenarnya bekerja</b>" }),
    h("p", { class: "demo-hint", text: "Menambang bukan 'memecahkan teka-teki pintar' — ini menebak angka (nonce) berulang kali sampai hash-nya kebetulan diawali sejumlah nol. Naikkan kesulitan dan rasakan bedanya." }),
    h("label", { class: "dm-row" }, [h("span", { text: "Kesulitan: " }), slider, dlabel]),
    h("div", { class: "demo-controls" }, [btn]),
    out,
  ]));
  tampil("(belum ditambang)", 0, 0, 0, null);
};

/* ---------- Demo: Zero-Knowledge Proof (gua Ali Baba) ---------- */
DEMOS["zkp-cave"] = function (root) {
  let ronde = 0, gagal = false, tahu = true;
  const out = h("div", { class: "dm-log" });
  const ring = h("div", { class: "dm-out" });

  const sw = h("button", { class: "btn primary", type: "button" });
  function syncSw() { sw.textContent = tahu ? "🔑 Pembuktinya ASLI (tahu kata sandi)" : "🎭 Pembuktinya PENIPU (tidak tahu)"; sw.className = "btn " + (tahu ? "primary" : "ghost"); }
  sw.onclick = () => { tahu = !tahu; syncSw(); reset(); };
  syncSw();

  function ringkas() {
    const peluang = Math.pow(0.5, ronde) * 100;
    ring.innerHTML =
      `<div class="dm-line"><span>Ronde dijalankan</span><b>${ronde}</b></div>` +
      `<div class="dm-line"><span>Peluang penipu lolos semua</span><b>1 / ${Math.pow(2, ronde)} = ${peluang.toFixed(ronde > 6 ? 3 : 1)}%</b></div>` +
      (gagal
        ? `<div class="dm-line big bad"><span>🚨 Ketahuan!</span><b>Penipu gagal di ronde ${ronde}</b></div>`
        : ronde >= 10
        ? `<div class="dm-line big good"><span>✅ Terbukti</span><b>Praktis mustahil menebak ${ronde}× berturut-turut</b></div>`
        : "");
  }

  const btn = h("button", { class: "btn ghost", type: "button", text: "▶ Jalankan 1 ronde" });
  btn.onclick = function () {
    if (gagal) return;
    ronde++;
    const minta = Math.random() < 0.5 ? "A" : "B";
    let sukses;
    if (tahu) sukses = true;
    else sukses = Math.random() < 0.5;
    const li = sukses
      ? `<div class="dm-li ok">Ronde ${ronde}: penjaga minta keluar dari <b>lorong ${minta}</b> → ✅ berhasil</div>`
      : `<div class="dm-li bad">Ronde ${ronde}: penjaga minta keluar dari <b>lorong ${minta}</b> → ❌ GAGAL, tertangkap!</div>`;
    out.insertAdjacentHTML("afterbegin", li);
    if (!sukses) { gagal = true; btn.disabled = true; }
    ringkas();
  };

  function reset() {
    ronde = 0; gagal = false; btn.disabled = false;
    out.innerHTML = '<div class="dm-li">Belum ada ronde. Klik tombol di atas.</div>';
    ringkas();
  }
  const rs = h("button", { class: "btn ghost", type: "button", text: "↺ Ulangi", onclick: reset });

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🕳️ <b>Demo: membuktikan tanpa membocorkan (Zero-Knowledge)</b>" }),
    h("p", { class: "demo-hint", text: "Sebuah gua bercabang dua (lorong A dan B) yang tersambung oleh pintu berkata sandi. Pembukti masuk, lalu penjaga minta ia keluar dari lorong tertentu. Yang tahu kata sandi selalu bisa; penipu hanya bisa menebak 50:50. Kata sandinya sendiri tidak pernah diucapkan." }),
    h("div", { class: "demo-controls" }, [sw, btn, rs]),
    ring,
    out,
  ]));
  reset();
};

/* ---------- Demo: Penjelajah rasio keuangan ---------- */
DEMOS["ratio-explorer"] = function (root) {
  const f = [
    { k: "pendapatan", l: "Pendapatan", v: 500 },
    { k: "labaBersih", l: "Laba bersih", v: 50 },
    { k: "aset", l: "Total aset", v: 400 },
    { k: "ekuitas", l: "Ekuitas (modal sendiri)", v: 250 },
    { k: "utang", l: "Total utang", v: 150 },
  ];
  const s = {};
  const rows = f.map((d) => {
    s[d.k] = d.v;
    const inp = h("input", { class: "pc-input", type: "number", value: String(d.v) });
    inp.addEventListener("input", () => { s[d.k] = parseFloat(inp.value) || 0; draw(); });
    return h("label", { class: "pc-row" }, [h("span", { text: d.l }), h("span", { class: "pc-inwrap" }, [h("span", { class: "pc-rp", text: "Rp" }), inp, h("span", { class: "pc-jt", text: "jt" })])]);
  });
  const out = h("div", { class: "dm-out" });

  function nilai(x, baik, sedang) {
    if (x >= baik) return "good";
    if (x >= sedang) return "";
    return "bad";
  }
  function draw() {
    const margin = s.pendapatan ? (s.labaBersih / s.pendapatan) * 100 : 0;
    const roe = s.ekuitas ? (s.labaBersih / s.ekuitas) * 100 : 0;
    const roa = s.aset ? (s.labaBersih / s.aset) * 100 : 0;
    const der = s.ekuitas ? s.utang / s.ekuitas : 0;
    const perputaran = s.aset ? s.pendapatan / s.aset : 0;
    const baris = (label, val, rumus, kelas) =>
      `<div class="dm-line ${kelas}"><span>${label}<br><i class="dm-sub">${rumus}</i></span><b>${val}</b></div>`;
    out.innerHTML =
      baris("Margin laba bersih", margin.toFixed(1) + "%", "Laba bersih ÷ Pendapatan", nilai(margin, 10, 5)) +
      baris("ROE", roe.toFixed(1) + "%", "Laba bersih ÷ Ekuitas", nilai(roe, 15, 8)) +
      baris("ROA", roa.toFixed(1) + "%", "Laba bersih ÷ Total aset", nilai(roa, 8, 4)) +
      baris("DER (utang ÷ modal)", der.toFixed(2) + "×", "Total utang ÷ Ekuitas", der <= 1 ? "good" : der <= 2 ? "" : "bad") +
      baris("Perputaran aset", perputaran.toFixed(2) + "×", "Pendapatan ÷ Total aset", nilai(perputaran, 1, 0.5)) +
      `<div class="dm-note">💡 <b>ROE lebih tinggi dari ROA</b> berarti perusahaan memakai utang untuk mengungkit hasil. Menguntungkan saat bisnis lancar — berbahaya saat penjualan turun. Coba naikkan utang &amp; turunkan ekuitas, lalu perhatikan ROE melonjak padahal labanya tidak berubah.</div>`;
  }

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📊 <b>Demo: penjelajah rasio keuangan</b>" }),
    h("p", { class: "demo-hint", text: "Ubah angka laporan keuangan (dalam juta Rupiah) dan lihat kelima rasio bergerak. Hijau = sehat, merah = perlu diwaspadai." }),
    h("div", { class: "pc-form" }, rows),
    out,
  ]));
  draw();
};

/* ---------- Demo: Kalkulator ROI ---------- */
DEMOS["roi-calc"] = function (root) {
  const s = { modal: 100, hasil: 130, tahun: 2 };
  function num(key, label, satuan) {
    const inp = h("input", { class: "pc-input", type: "number", value: String(s[key]) });
    inp.addEventListener("input", () => { s[key] = parseFloat(inp.value) || 0; draw(); });
    return h("label", { class: "pc-row" }, [h("span", { text: label }), h("span", { class: "pc-inwrap" }, [inp, h("span", { class: "pc-jt", text: satuan })])]);
  }
  const out = h("div", { class: "dm-out" });
  function draw() {
    const untung = s.hasil - s.modal;
    const roi = s.modal ? (untung / s.modal) * 100 : 0;
    const tahunan = s.tahun > 0 && s.modal > 0 && s.hasil > 0 ? (Math.pow(s.hasil / s.modal, 1 / s.tahun) - 1) * 100 : 0;
    const balik = untung > 0 && s.tahun > 0 ? s.modal / (untung / s.tahun) : Infinity;
    out.innerHTML =
      `<div class="dm-line"><span>Keuntungan bersih<br><i class="dm-sub">Hasil − Modal</i></span><b>Rp${untung.toFixed(0)} jt</b></div>` +
      `<div class="dm-line ${roi >= 0 ? "good" : "bad"}"><span>ROI total<br><i class="dm-sub">Keuntungan ÷ Modal</i></span><b>${roi.toFixed(1)}%</b></div>` +
      `<div class="dm-line big ${tahunan >= 10 ? "good" : tahunan >= 0 ? "" : "bad"}"><span>ROI per tahun<br><i class="dm-sub">yang sebenarnya penting</i></span><b>${tahunan.toFixed(1)}% / tahun</b></div>` +
      `<div class="dm-line"><span>Balik modal (payback)</span><b>${isFinite(balik) ? balik.toFixed(1) + " tahun" : "tidak pernah"}</b></div>` +
      `<div class="dm-note">⚠️ <b>Jebakan terbesar ROI:</b> angka total menyesatkan tanpa waktu. ROI 30% terdengar bagus — tapi 30% dalam 1 tahun jauh berbeda dari 30% dalam 10 tahun. Coba ubah jumlah tahunnya sambil membiarkan modal &amp; hasil tetap.</div>`;
  }
  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "💰 <b>Demo: kalkulator ROI</b>" }),
    h("p", { class: "demo-hint", text: "Masukkan modal, hasil akhir, dan lamanya. Perhatikan bedanya ROI total dan ROI per tahun." }),
    h("div", { class: "pc-form" }, [num("modal", "Modal awal", "jt"), num("hasil", "Nilai akhir", "jt"), num("tahun", "Lama investasi", "tahun")]),
    out,
  ]));
  draw();
};

/* ---------- Demo: Diffusion (dari noise jadi gambar) ---------- */
DEMOS["diffusion"] = function (root) {
  const N = 16;
  const POLA = [
    "................", "....########....", "..##........##..", ".#............#.",
    ".#............#.", "#....##..##....#", "#....##..##....#", "#..............#",
    "#..............#", "#..#........#..#", "#...##....##...#", ".#....####....#.",
    ".#............#.", "..##........##..", "....########....", "................",
  ];
  const target = [];
  POLA.forEach((r) => { for (let i = 0; i < N; i++) target.push(r[i] === "#" ? 1 : 0); });
  let thr = [], noise = [];
  function acak() {
    thr = []; noise = [];
    for (let i = 0; i < N * N; i++) { thr.push(Math.random()); noise.push(Math.random() < 0.5 ? 1 : 0); }
  }
  acak();

  const grid = h("div", { class: "dm-grid16" });
  const cells = [];
  for (let i = 0; i < N * N; i++) { const c = h("div", { class: "dm-px" }); cells.push(c); grid.appendChild(c); }

  const slider = h("input", { type: "range", min: "0", max: "100", value: "0", class: "dm-range" });
  const lbl = h("b", { text: "langkah 0 / 100" });
  const out = h("div", { class: "dm-out" });

  function draw() {
    const t = parseInt(slider.value, 10) / 100;
    lbl.textContent = "langkah " + slider.value + " / 100";
    let bersih = 0;
    for (let i = 0; i < N * N; i++) {
      const sudah = t >= thr[i];
      if (sudah) bersih++;
      cells[i].className = "dm-px" + ((sudah ? target[i] : noise[i]) ? " on" : "") + (sudah ? " tenang" : "");
    }
    const pct = ((bersih / (N * N)) * 100).toFixed(0);
    out.innerHTML =
      `<div class="dm-line"><span>Piksel yang sudah dibersihkan</span><b>${pct}%</b></div>` +
      `<div class="dm-note">${t === 0 ? "Ini titik awal: <b>noise murni</b> — sama sekali acak, tanpa informasi." : t >= 1 ? "Selesai. Gambar muncul <b>bukan karena digambar</b>, tapi karena noise dihapus bertahap." : "Model menebak: <i>bagian mana dari sini yang noise?</i> lalu menghapusnya sedikit — berulang kali."}</div>`;
  }
  slider.oninput = draw;

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌫️ <b>Demo: bagaimana AI gambar (diffusion) bekerja</b>" }),
    h("p", { class: "demo-hint", text: "Geser dari kiri ke kanan. Model tidak 'melukis' — ia mulai dari noise acak lalu menghapus noise sedikit demi sedikit sampai gambar muncul." }),
    grid,
    h("label", { class: "dm-row" }, [slider, lbl]),
    h("div", { class: "demo-controls" }, [h("button", { class: "btn ghost", type: "button", text: "🎲 Acak ulang noise", onclick: () => { acak(); draw(); } })]),
    out,
  ]));
  draw();
};

/* ---------- Demo: Struktur biaya & titik impas ---------- */
DEMOS["cost-structure"] = function (root) {
  const s = { tetap: 30, variabel: 15, harga: 25, volume: 3000 };
  function num(key, label, satuan) {
    const inp = h("input", { class: "pc-input", type: "number", value: String(s[key]) });
    inp.addEventListener("input", () => { s[key] = parseFloat(inp.value) || 0; draw(); });
    return h("label", { class: "pc-row" }, [h("span", { text: label }), h("span", { class: "pc-inwrap" }, [inp, h("span", { class: "pc-jt", text: satuan })])]);
  }
  const slider = h("input", { type: "range", min: "0", max: "8000", step: "100", value: "3000", class: "dm-range" });
  const vlbl = h("b", { text: "3.000 unit" });
  slider.oninput = () => { s.volume = parseInt(slider.value, 10); vlbl.textContent = s.volume.toLocaleString("id-ID") + " unit"; draw(); };
  const out = h("div", { class: "dm-out" });

  function draw() {
    const marginUnit = s.harga - s.variabel;
    const bep = marginUnit > 0 ? (s.tetap * 1000) / marginUnit : Infinity;
    const omzet = (s.volume * s.harga) / 1000;
    const biaya = s.tetap + (s.volume * s.variabel) / 1000;
    const laba = omzet - biaya;
    const maxV = Math.max(omzet, biaya, 1);
    const bar = (label, val, cls) =>
      `<div class="dm-bar"><span>${label}</span><div class="dm-track"><div class="dm-fill ${cls}" style="width:${Math.max(1, (val / maxV) * 100).toFixed(1)}%"></div></div><b>Rp${val.toFixed(0)} jt</b></div>`;
    out.innerHTML =
      `<div class="dm-line"><span>Margin kontribusi per unit<br><i class="dm-sub">Harga − Biaya variabel</i></span><b>Rp${marginUnit.toFixed(0)} rb</b></div>` +
      `<div class="dm-line big ${isFinite(bep) ? "" : "bad"}"><span>Titik impas (BEP)<br><i class="dm-sub">Biaya tetap ÷ Margin per unit</i></span><b>${isFinite(bep) ? Math.ceil(bep).toLocaleString("id-ID") + " unit" : "tidak tercapai"}</b></div>` +
      bar("Omzet", omzet, "ok") + bar("Total biaya", biaya, "bad") +
      `<div class="dm-line big ${laba >= 0 ? "good" : "bad"}"><span>${laba >= 0 ? "Laba" : "Rugi"} pada ${s.volume.toLocaleString("id-ID")} unit</span><b>Rp${laba.toFixed(1)} jt</b></div>` +
      `<div class="dm-note">💡 Di bawah BEP, <b>menjual lebih banyak tetap rugi</b> — biaya tetap belum tertutup. Di atas BEP, tiap unit tambahan menyumbang penuh Rp${marginUnit.toFixed(0)} rb ke laba. Itulah kenapa bisnis berbiaya tetap tinggi terasa berat di awal lalu melesat.</div>`;
  }

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🏭 <b>Demo: biaya tetap, biaya variabel &amp; titik impas</b>" }),
    h("p", { class: "demo-hint", text: "Atur biaya dan harga jual, lalu geser volume penjualan. Cari titik di mana rugi berubah jadi laba." }),
    h("div", { class: "pc-form" }, [num("tetap", "Biaya tetap per bulan", "jt"), num("variabel", "Biaya variabel per unit", "rb"), num("harga", "Harga jual per unit", "rb")]),
    h("label", { class: "dm-row" }, [h("span", { text: "Volume: " }), slider, vlbl]),
    out,
  ]));
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
