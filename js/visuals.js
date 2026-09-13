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
    const cols = (ds.cols || "").split("|").map((s) =>
      // potong baris yang terlalu panjang agar tidak meluber keluar kolomnya
      s.split("::").map((t) => { t = t.trim(); return t.length > 26 ? t.slice(0, 25).trimEnd() + "…" : t; })
    ).filter((a) => a[0]);
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

/* ---------- Pembantu: baris input angka untuk demo kalkulator ---------- */
function dmAngka(state, key, label, satuan, onUbah) {
  const inp = h("input", { class: "pc-input", type: "number", step: "any", value: String(state[key]) });
  inp.addEventListener("input", () => {
    state[key] = parseFloat(inp.value);
    if (isNaN(state[key])) state[key] = 0;
    onUbah();
  });
  return h("label", { class: "pc-row" }, [
    h("span", { html: label }),
    h("span", { class: "pc-inwrap" }, [inp, h("span", { class: "pc-jt", text: satuan })]),
  ]);
}

/* ---------- Demo: CASA, biaya dana & NIM sebuah bank ---------- */
DEMOS["casa-nim"] = function (root) {
  const s = {
    giro: 25, bungaGiro: 1,
    tabungan: 40, bungaTab: 1.5,
    deposito: 35, bungaDep: 5.5,
    bungaKredit: 10, ldr: 85,
  };
  const IMBAL_SB = 5; // asumsi: dana yang tidak disalurkan jadi kredit ditaruh di surat berharga
  const out = h("div", { class: "dm-out" });

  function draw() {
    const dpk = s.giro + s.tabungan + s.deposito;
    if (dpk <= 0) { out.innerHTML = '<div class="dm-note">Masukkan jumlah dana dulu.</div>'; return; }
    const casa = ((s.giro + s.tabungan) / dpk) * 100;
    const bebanBunga = (s.giro * s.bungaGiro + s.tabungan * s.bungaTab + s.deposito * s.bungaDep) / 100;
    const biayaDana = (bebanBunga / dpk) * 100;
    const kredit = dpk * (s.ldr / 100);
    const suratBerharga = dpk - kredit;
    const pendapatan = (kredit * s.bungaKredit) / 100 + (suratBerharga * IMBAL_SB) / 100;
    const nim = ((pendapatan - bebanBunga) / dpk) * 100;
    const labaBunga = pendapatan - bebanBunga;

    const warnaCasa = casa >= 65 ? "good" : casa >= 50 ? "" : "bad";
    const warnaNim = nim >= 5 ? "good" : nim >= 3.5 ? "" : "bad";
    const baris = (l, v, sub, k) =>
      `<div class="dm-line ${k || ""}"><span>${l}${sub ? '<br><i class="dm-sub">' + sub + "</i>" : ""}</span><b>${v}</b></div>`;

    out.innerHTML =
      baris("Total DPK", "Rp" + dpk.toFixed(1) + " T", "Giro + Tabungan + Deposito") +
      baris("Rasio CASA", casa.toFixed(1) + "%", "(Giro + Tabungan) ÷ DPK", warnaCasa) +
      baris("Biaya dana (cost of funds)", biayaDana.toFixed(2) + "%", "Beban bunga ÷ DPK", biayaDana <= 3 ? "good" : biayaDana <= 4.5 ? "" : "bad") +
      `<div class="dm-bar"><span>Kredit</span><div class="dm-track"><div class="dm-fill ok" style="width:${s.ldr.toFixed(0)}%"></div></div><b>Rp${kredit.toFixed(1)} T</b></div>` +
      `<div class="dm-bar"><span>Surat berharga</span><div class="dm-track"><div class="dm-fill" style="width:${(100 - s.ldr).toFixed(0)}%"></div></div><b>Rp${suratBerharga.toFixed(1)} T</b></div>` +
      baris("Laba bunga bersih", "Rp" + labaBunga.toFixed(2) + " T", "Pendapatan bunga − Beban bunga") +
      baris("NIM (Net Interest Margin)", nim.toFixed(2) + "%", "Laba bunga bersih ÷ Aset produktif", "big " + warnaNim) +
      `<div class="dm-note">💡 <b>Coba ini:</b> pindahkan Rp25 T dari <b>Tabungan</b> ke <b>Deposito</b>. Jumlah dananya sama persis, tapi CASA anjlok, biaya dana melonjak, dan NIM ikut turun — padahal bank itu tidak melakukan kesalahan apa pun. Itulah kenapa CASA sangat diperebutkan.<br><br><i>Asumsi penyederhanaan: dana yang tidak disalurkan jadi kredit ditempatkan di surat berharga dengan imbal hasil ${IMBAL_SB}%.</i></div>`;
  }

  const kolom = [
    dmAngka(s, "giro", "Giro <i class='dm-sub'>(murah)</i>", "T", draw),
    dmAngka(s, "bungaGiro", "&nbsp;&nbsp;↳ bunga giro", "%", draw),
    dmAngka(s, "tabungan", "Tabungan <i class='dm-sub'>(murah)</i>", "T", draw),
    dmAngka(s, "bungaTab", "&nbsp;&nbsp;↳ bunga tabungan", "%", draw),
    dmAngka(s, "deposito", "Deposito <i class='dm-sub'>(mahal)</i>", "T", draw),
    dmAngka(s, "bungaDep", "&nbsp;&nbsp;↳ bunga deposito", "%", draw),
    dmAngka(s, "bungaKredit", "Bunga kredit yang ditagih", "%", draw),
    dmAngka(s, "ldr", "LDR (kredit ÷ DPK)", "%", draw),
  ];

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🏦 <b>Demo: CASA, biaya dana &amp; NIM sebuah bank</b>" }),
    h("p", { class: "demo-hint", text: "Angka dalam triliun Rupiah. Ubah komposisi dananya dan lihat bagaimana biaya dana serta NIM bergerak — inilah yang sebenarnya dinilai analis saat melihat bank." }),
    h("div", { class: "pc-form" }, kolom),
    out,
  ]));
  draw();
};

/* ---------- Demo: Free Cash Flow, owner earnings, margin & yield ---------- */
DEMOS["fcf-calc"] = function (root) {
  const s = { opcf: 500, capexRawat: 150, capexTumbuh: 200, pendapatan: 2000, kapitalisasi: 6000 };
  const out = h("div", { class: "dm-out" });

  function draw() {
    const capexTotal = s.capexRawat + s.capexTumbuh;
    const fcf = s.opcf - capexTotal;
    const owner = s.opcf - s.capexRawat;
    const marginFcf = s.pendapatan ? (fcf / s.pendapatan) * 100 : 0;
    const marginOwner = s.pendapatan ? (owner / s.pendapatan) * 100 : 0;
    const yieldFcf = s.kapitalisasi ? (fcf / s.kapitalisasi) * 100 : 0;
    const yieldOwner = s.kapitalisasi ? (owner / s.kapitalisasi) * 100 : 0;
    const baris = (l, v, sub, k) =>
      `<div class="dm-line ${k || ""}"><span>${l}${sub ? '<br><i class="dm-sub">' + sub + "</i>" : ""}</span><b>${v}</b></div>`;
    const rp = (x) => "Rp" + Math.round(x).toLocaleString("id-ID") + " M";

    out.innerHTML =
      baris("CapEx total", rp(capexTotal), "Pemeliharaan + Pertumbuhan") +
      baris("FCF (cara standar)", rp(fcf), "Arus kas operasi − CapEx total", "big " + (fcf >= 0 ? "good" : "bad")) +
      baris("Owner earnings", rp(owner), "Arus kas operasi − CapEx pemeliharaan saja", "big " + (owner >= 0 ? "good" : "bad")) +
      baris("Margin FCF", marginFcf.toFixed(1) + "%", "FCF ÷ Pendapatan", marginFcf >= 10 ? "good" : marginFcf >= 5 ? "" : "bad") +
      baris("Margin owner earnings", marginOwner.toFixed(1) + "%", "Owner earnings ÷ Pendapatan") +
      baris("FCF yield", yieldFcf.toFixed(2) + "%", "FCF ÷ Kapitalisasi pasar", yieldFcf >= 6 ? "good" : yieldFcf >= 3 ? "" : "bad") +
      baris("Owner earnings yield", yieldOwner.toFixed(2) + "%", "Owner earnings ÷ Kapitalisasi pasar") +
      `<div class="dm-note">💡 <b>Perhatikan selisih dua angka besar di atas.</b> Perusahaan yang sedang berekspansi terlihat <b>tipis</b> pada FCF standar, padahal CapEx pertumbuhan itu <b>pilihan</b> — bisa dihentikan kapan saja. Owner earnings menunjukkan kas yang benar-benar bisa diambil pemilik jika perusahaan berhenti tumbuh.<br><br>⚠️ <b>Tapi hati-hati:</b> manajemen bisa menyebut CapEx pemeliharaan sebagai "pertumbuhan" agar angkanya terlihat bagus. Bandingkan CapEx dengan <b>beban penyusutan</b> — kalau CapEx pemeliharaan jauh di bawah penyusutan bertahun-tahun, kemungkinan asetnya sedang dibiarkan menua.</div>`;
  }

  const kolom = [
    dmAngka(s, "opcf", "Arus kas operasi", "M", draw),
    dmAngka(s, "capexRawat", "CapEx <b>pemeliharaan</b>", "M", draw),
    dmAngka(s, "capexTumbuh", "CapEx <b>pertumbuhan</b>", "M", draw),
    dmAngka(s, "pendapatan", "Pendapatan", "M", draw),
    dmAngka(s, "kapitalisasi", "Kapitalisasi pasar", "M", draw),
  ];

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "💵 <b>Demo: kalkulator Free Cash Flow</b>" }),
    h("p", { class: "demo-hint", text: "Angka dalam miliar Rupiah. Pisahkan CapEx pemeliharaan (wajib, sekadar menjaga aset) dari CapEx pertumbuhan (pilihan, untuk memperbesar bisnis) — lalu lihat betapa berbedanya kesimpulannya." }),
    h("div", { class: "pc-form" }, kolom),
    out,
  ]));
  draw();
};

/* ---------- Demo: Biaya modal (WACC) & hurdle rate ---------- */
DEMOS["hurdle-rate"] = function (root) {
  const s = { bebasRisiko: 6.5, premiRisiko: 5.5, bungaUtang: 9, pajak: 22, porsiUtang: 30, roicProyek: 14 };
  const out = h("div", { class: "dm-out" });

  function draw() {
    const pUtang = Math.min(100, Math.max(0, s.porsiUtang));
    const pEkuitas = 100 - pUtang;
    const biayaEkuitas = s.bebasRisiko + s.premiRisiko;
    const utangSetelahPajak = s.bungaUtang * (1 - s.pajak / 100);
    const wacc = (pUtang / 100) * utangSetelahPajak + (pEkuitas / 100) * biayaEkuitas;
    const spread = s.roicProyek - wacc;
    const baris = (l, v, sub, k) =>
      `<div class="dm-line ${k || ""}"><span>${l}${sub ? '<br><i class="dm-sub">' + sub + "</i>" : ""}</span><b>${v}</b></div>`;

    out.innerHTML =
      baris("Biaya ekuitas", biayaEkuitas.toFixed(2) + "%", "Bunga bebas risiko + premi risiko") +
      baris("Biaya utang setelah pajak", utangSetelahPajak.toFixed(2) + "%", "Bunga × (1 − tarif pajak)") +
      baris("Bauran modal", pUtang + "% utang / " + pEkuitas + "% ekuitas", "penimbang WACC") +
      baris("WACC — ambang minimal (hurdle rate)", wacc.toFixed(2) + "%", "Rata-rata tertimbang biaya modal", "big") +
      baris("ROIC proyek", s.roicProyek.toFixed(2) + "%", "Hasil yang diharapkan dari proyek") +
      `<div class="dm-line big ${spread > 0 ? "good" : "bad"}"><span>${spread > 0 ? "✅ MENCIPTAKAN nilai" : "❌ MENGHANCURKAN nilai"}<br><i class="dm-sub">ROIC − WACC</i></span><b>${spread > 0 ? "+" : ""}${spread.toFixed(2)}%</b></div>` +
      `<div class="dm-note">💡 <b>Inilah ambang yang sering dilupakan.</b> Proyek dengan hasil 14% terdengar bagus — tapi kalau biaya modalnya 15%, proyek itu <b>merugikan pemilik</b> meski laporan labanya positif.<br><br>Coba naikkan <b>porsi utang</b>: WACC turun karena bunga utang bisa mengurangi pajak. Tapi utang berlebihan menaikkan risiko kebangkrutan — dan pada titik tertentu pemberi pinjaman menuntut bunga lebih tinggi. Jangan tergoda mengejar WACC serendah-rendahnya.<br><br><i>Catatan: ini versi sederhana. Biaya ekuitas sungguhan biasanya memakai CAPM dengan beta.</i></div>`;
  }

  const kolom = [
    dmAngka(s, "bebasRisiko", "Bunga bebas risiko <i class='dm-sub'>(SBN 10 th)</i>", "%", draw),
    dmAngka(s, "premiRisiko", "Premi risiko ekuitas", "%", draw),
    dmAngka(s, "bungaUtang", "Bunga pinjaman", "%", draw),
    dmAngka(s, "pajak", "Tarif pajak", "%", draw),
    dmAngka(s, "porsiUtang", "Porsi utang dalam modal", "%", draw),
    dmAngka(s, "roicProyek", "ROIC proyek yang dinilai", "%", draw),
  ];

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🎯 <b>Demo: biaya modal &amp; ambang kelayakan (hurdle rate)</b>" }),
    h("p", { class: "demo-hint", text: "Berapa hasil minimal yang harus dicapai sebuah proyek agar layak dijalankan? Jawabannya bukan nol — melainkan biaya modalnya sendiri." }),
    h("div", { class: "pc-form" }, kolom),
    out,
  ]));
  draw();
};

/* ---------- Demo: Kuartet Anscombe (kenapa data WAJIB digambar) ---------- */
DEMOS["anscombe"] = function (root) {
  const X1 = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5];
  const SET = [
    { nama: "Data I", x: X1, y: [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68] },
    { nama: "Data II", x: X1, y: [9.14, 8.14, 8.74, 8.77, 9.26, 8.1, 6.13, 3.1, 9.13, 7.26, 4.74] },
    { nama: "Data III", x: X1, y: [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73] },
    { nama: "Data IV", x: [8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], y: [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.5, 5.56, 7.91, 6.89] },
  ];
  let garis = true;

  function statistik(d) {
    const n = d.x.length;
    const mx = d.x.reduce((a, b) => a + b, 0) / n;
    const my = d.y.reduce((a, b) => a + b, 0) / n;
    let sxy = 0, sxx = 0, syy = 0;
    for (let i = 0; i < n; i++) {
      sxy += (d.x[i] - mx) * (d.y[i] - my);
      sxx += (d.x[i] - mx) * (d.x[i] - mx);
      syy += (d.y[i] - my) * (d.y[i] - my);
    }
    const kemiringan = sxy / sxx;
    return { mx: mx, my: my, r: sxy / Math.sqrt(sxx * syy), b: kemiringan, a: my - kemiringan * mx };
  }

  const petak = h("div", { class: "dm-quad" });
  const tabel = h("div", { class: "dm-out" });

  function gambar() {
    petak.innerHTML = SET.map((d) => {
      const s = statistik(d);
      const px = (v) => (14 + ((v - 2) / 18) * 104).toFixed(1);
      const py = (v) => (92 - ((v - 2) / 11) * 78).toFixed(1);
      let titik = "";
      for (let i = 0; i < d.x.length; i++) titik += '<circle cx="' + px(d.x[i]) + '" cy="' + py(d.y[i]) + '" r="3.4" class="vdot"/>';
      const gx1 = 3, gx2 = 20;
      const g = garis
        ? '<line x1="' + px(gx1) + '" y1="' + py(s.a + s.b * gx1) + '" x2="' + px(gx2) + '" y2="' + py(s.a + s.b * gx2) + '" class="vline aktif"/>'
        : "";
      return (
        '<figure class="dm-mini"><figcaption>' + d.nama + "</figcaption>" +
        '<svg viewBox="0 0 128 100" class="viz-svg">' +
        '<line x1="12" y1="92" x2="126" y2="92" class="vaxis"/><line x1="12" y1="6" x2="12" y2="92" class="vaxis"/>' +
        g + titik + "</svg></figure>"
      );
    }).join("");

    const s = SET.map(statistik);
    // kelas "teks" agar isinya boleh membungkus — tanpa itu baris ini
    // melebar melewati layar HP
    const baris = (label, ambil) =>
      '<div class="dm-line teks"><span>' + label + "</span><b>" + s.map(ambil).join(" · ") + "</b></div>";
    tabel.innerHTML =
      baris("Rata-rata x", (v) => v.mx.toFixed(2)) +
      baris("Rata-rata y", (v) => v.my.toFixed(2)) +
      baris("Korelasi", (v) => v.r.toFixed(3)) +
      baris("Garis regresi", (v) => "y=" + v.a.toFixed(2) + "+" + v.b.toFixed(2) + "x") +
      '<div class="dm-note">😲 <b>Keempat kumpulan data ini punya statistik yang nyaris sama persis</b> — rata-rata, korelasi, dan garis regresinya identik. Tapi bentuknya benar-benar berbeda: satu lurus, satu melengkung, satu punya pencilan tunggal, satu bahkan hanya berupa garis tegak.<br><br>Kalau kamu hanya melihat angka ringkasannya, kamu akan menyimpulkan keempatnya sama. <b>Inilah alasan data wajib digambar sebelum dimodelkan</b> — dan alasan matplotlib &amp; seaborn ada.</div>';
  }

  const tg = h("button", { class: "btn ghost", type: "button" });
  function sync() { tg.textContent = garis ? "📉 Sembunyikan garis regresi" : "📈 Tampilkan garis regresi"; }
  tg.onclick = () => { garis = !garis; sync(); gambar(); };
  sync();

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "👀 <b>Demo: kenapa data wajib digambar dulu</b>" }),
    h("p", { class: "demo-hint", text: "Empat kumpulan data di bawah ini punya statistik ringkasan yang sama. Perhatikan bentuknya." }),
    petak,
    h("div", { class: "demo-controls" }, [tg]),
    tabel,
  ]));
  gambar();
};

/* ---------- Demo: kenapa fitur harus diskalakan ---------- */
DEMOS["skala-fitur"] = function (root) {
  // dua karyawan contoh yang sudah berlabel
  const A = { nama: "Karyawan A", gaji: 8, peng: 1, label: "Junior" };
  const B = { nama: "Karyawan B", gaji: 12, peng: 12, label: "Senior" };
  const RG = [5, 20], RP = [0, 15]; // rentang untuk penskalaan
  const s = { gaji: 8.3, peng: 11 };
  const out = h("div", { class: "dm-out" });

  function jarak(dx, dy) { return Math.sqrt(dx * dx + dy * dy); }

  function draw() {
    // TANPA skala — gaji dalam rupiah penuh, pengalaman dalam tahun
    const gA = Math.abs(s.gaji - A.gaji) * 1000000, pA = Math.abs(s.peng - A.peng);
    const gB = Math.abs(s.gaji - B.gaji) * 1000000, pB = Math.abs(s.peng - B.peng);
    const dA = jarak(gA, pA), dB = jarak(gB, pB);
    const tanpaSkala = dA < dB ? A : B;

    // DENGAN skala min-max 0..1
    const sk = (v, r) => (v - r[0]) / (r[1] - r[0]);
    const qg = sk(s.gaji, RG), qp = sk(s.peng, RP);
    const dAs = jarak(qg - sk(A.gaji, RG), qp - sk(A.peng, RP));
    const dBs = jarak(qg - sk(B.gaji, RG), qp - sk(B.peng, RP));
    const denganSkala = dAs < dBs ? A : B;

    const beda = tanpaSkala.label !== denganSkala.label;
    out.innerHTML =
      '<div class="dm-line"><span>Yang dinilai</span><b>Gaji Rp' + s.gaji.toFixed(1) + " jt, pengalaman " + s.peng + " th</b></div>" +
      '<div class="dm-line"><span>TANPA penskalaan<br><i class="dm-sub">jarak ke A ' + Math.round(dA).toLocaleString("id-ID") + " &nbsp;vs&nbsp; ke B " + Math.round(dB).toLocaleString("id-ID") + '</i></span><b class="' + (beda ? "dm-merah" : "") + '">' + tanpaSkala.label + "</b></div>" +
      '<div class="dm-line good"><span>DENGAN penskalaan<br><i class="dm-sub">jarak ke A ' + dAs.toFixed(3) + " &nbsp;vs&nbsp; ke B " + dBs.toFixed(3) + "</i></span><b>" + denganSkala.label + "</b></div>" +
      (beda
        ? '<div class="dm-line big bad"><span>⚠️ Jawabannya BERBEDA</span><b>' + tanpaSkala.label + " → " + denganSkala.label + "</b></div>"
        : '<div class="dm-line big good"><span>✅ Jawabannya sama</span><b>' + denganSkala.label + "</b></div>") +
      '<div class="dm-note">Gaji diukur dalam <b>jutaan</b>, pengalaman dalam <b>satuan tahun</b>. Tanpa penskalaan, selisih gaji Rp300.000 sudah <b>ratusan ribu kali lebih besar</b> daripada selisih 10 tahun pengalaman — sehingga model jarak seperti k-NN praktis <b>hanya melihat gaji</b> dan mengabaikan pengalaman sepenuhnya.<br><br>Di scikit-learn ini diperbaiki dengan <b>StandardScaler</b> atau <b>MinMaxScaler</b>, dan wajib dipasang di dalam <b>Pipeline</b> agar tidak bocor ke data uji.<br><br><i>Acuan: A = Junior (gaji 8 jt, 1 th) · B = Senior (gaji 12 jt, 12 th).</i></div>';
  }

  const sg = h("input", { type: "range", min: "5", max: "20", step: "0.1", value: "8.3", class: "dm-range" });
  const lg = h("b", { text: "Rp8,3 jt" });
  sg.oninput = () => { s.gaji = parseFloat(sg.value); lg.textContent = "Rp" + s.gaji.toFixed(1).replace(".", ",") + " jt"; draw(); };
  const sp = h("input", { type: "range", min: "0", max: "15", step: "1", value: "11", class: "dm-range" });
  const lp = h("b", { text: "11 tahun" });
  sp.oninput = () => { s.peng = parseInt(sp.value, 10); lp.textContent = s.peng + " tahun"; draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "⚖️ <b>Demo: kenapa fitur harus diskalakan dulu</b>" }),
    h("p", { class: "demo-hint", text: "Model menebak Junior/Senior dengan mencari karyawan termirip (k-NN). Geser nilainya dan perhatikan: tanpa penskalaan, jawabannya bisa keliru." }),
    h("label", { class: "dm-row" }, [h("span", { text: "Gaji: " }), sg, lg]),
    h("label", { class: "dm-row" }, [h("span", { text: "Pengalaman: " }), sp, lp]),
    out,
  ]));
  draw();
};

/* ---------- Demo: menelusuri aliran dana (pola peeling chain) ---------- */
DEMOS["lacak-dana"] = function (root) {
  const AWAL = 100;
  const LANGKAH = [
    { kupas: 2.0, tujuan: "Bursa A", kyc: true },
    { kupas: 1.5, tujuan: "Dompet pribadi", kyc: false },
    { kupas: 3.0, tujuan: "Bursa B", kyc: true },
    { kupas: 1.2, tujuan: "Layanan mixer", kyc: false },
    { kupas: 2.5, tujuan: "Bursa C", kyc: true },
    { kupas: 1.8, tujuan: "Dompet pribadi", kyc: false },
    { kupas: 4.0, tujuan: "Bursa D", kyc: true },
  ];
  let hop = 0;
  const log = h("div", { class: "dm-log" });
  const ring = h("div", { class: "dm-out" });

  function ringkas() {
    const sisa = AWAL - LANGKAH.slice(0, hop).reduce((a, b) => a + b.kupas, 0);
    const titik = LANGKAH.slice(0, hop).filter((x) => x.kyc).length;
    ring.innerHTML =
      '<div class="dm-line"><span>Hop yang sudah ditelusuri</span><b>' + hop + " dari " + LANGKAH.length + "</b></div>" +
      '<div class="dm-line"><span>Dana yang masih bergerak</span><b>' + sisa.toFixed(1) + " BTC</b></div>" +
      '<div class="dm-line ' + (titik ? "good" : "") + '"><span>Titik ber-KYC yang tersentuh<br><i class="dm-sub">tempat identitas bisa diminta lewat jalur hukum</i></span><b>' + titik + "</b></div>" +
      (hop >= LANGKAH.length
        ? '<div class="dm-line big good"><span>✅ Penelusuran selesai</span><b>' + titik + " titik identitas</b></div>" +
          '<div class="dm-note">Perhatikan polanya: pelaku memindahkan dana berkali-kali, tapi <b>setiap kali ingin mencairkannya jadi rupiah, ia harus menyentuh bursa yang wajib memverifikasi identitas</b>.<br><br>Di sinilah penelusuran on-chain berhenti dan proses hukum dimulai — penyidik tidak "meretas" apa pun, mereka <b>mengirim permintaan resmi ke bursa</b>. Itulah kenapa blockchain yang terbuka justru sering memudahkan pelacakan, bukan menyulitkan.</div>'
        : '<div class="dm-note">Pola ini disebut <b>peeling chain</b>: dana besar terus berpindah, sambil sedikit demi sedikit "dikupas" ke berbagai tujuan agar sulit diikuti. Klik terus untuk melihat ke mana ujungnya.</div>');
  }

  const btn = h("button", { class: "btn primary", type: "button", text: "🔍 Telusuri satu hop" });
  btn.onclick = function () {
    if (hop >= LANGKAH.length) return;
    const L = LANGKAH[hop];
    hop++;
    const sisa = AWAL - LANGKAH.slice(0, hop).reduce((a, b) => a + b.kupas, 0);
    log.insertAdjacentHTML("beforeend",
      '<div class="dm-li ' + (L.kyc ? "ok" : "") + '"><b>Hop ' + hop + "</b> — " + L.kupas.toFixed(1) +
      " BTC dikupas ke <b>" + L.tujuan + "</b>" + (L.kyc ? " 🪪 <i>(wajib KYC — identitas bisa diminta)</i>" : " <i>(belum teridentifikasi)</i>") +
      "<br><span class='dm-sub'>Sisa " + sisa.toFixed(1) + " BTC lanjut ke alamat berikutnya</span></div>");
    if (hop >= LANGKAH.length) { btn.disabled = true; btn.textContent = "Penelusuran selesai"; }
    ringkas();
  };
  const rs = h("button", { class: "btn ghost", type: "button", text: "↺ Ulangi" });
  rs.onclick = function () {
    hop = 0; btn.disabled = false; btn.textContent = "🔍 Telusuri satu hop";
    log.innerHTML = '<div class="dm-li">Dana hasil pencurian: <b>' + AWAL + " BTC</b>. Klik tombol di atas untuk mengikutinya.</div>";
    ringkas();
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🕵️ <b>Demo: mengikuti aliran dana curian</b>" }),
    h("p", { class: "demo-hint", text: "Semua transaksi blockchain tercatat permanen dan terbuka. Ikuti ke mana dana bergerak, dan perhatikan di titik mana jejaknya bertemu dunia nyata." }),
    h("div", { class: "demo-controls" }, [btn, rs]),
    ring,
    log,
  ]));
  rs.onclick();
};

/* ---------- Demo: heuristik klasterisasi alamat ---------- */
DEMOS["klaster-alamat"] = function (root) {
  const ALAMAT = ["1A3f…9k", "1B7c…2m", "1C4d…8p", "1D9e…5r", "1E2f…7t", "1F6g…3v", "1G8h…1w", "1H5j…4x"];
  const TX = [
    { nama: "Tx #1", masuk: [0, 1] },
    { nama: "Tx #2", masuk: [1, 2] },
    { nama: "Tx #3", masuk: [4, 5] },
    { nama: "Tx #4", masuk: [5, 6] },
    { nama: "Tx #5", masuk: [3] },
    { nama: "Tx #6", masuk: [7] },
  ];
  let tahap = 0; // 0 = terpisah, 1 = sudah diklaster, 2 = sudah teridentifikasi
  const petak = h("div", { class: "dm-addr" });
  const ring = h("div", { class: "dm-out" });

  function klaster() {
    const induk = ALAMAT.map((_, i) => i);
    const cari = (x) => (induk[x] === x ? x : (induk[x] = cari(induk[x])));
    TX.forEach((t) => {
      for (let i = 1; i < t.masuk.length; i++) induk[cari(t.masuk[i])] = cari(t.masuk[0]);
    });
    return ALAMAT.map((_, i) => cari(i));
  }

  function gambar() {
    const k = tahap === 0 ? ALAMAT.map((_, i) => i) : klaster();
    const warna = {}; let n = 0;
    k.forEach((c) => { if (warna[c] === undefined) warna[c] = n++; });
    const kenaLabel = tahap === 2 ? k[2] : -1; // alamat ke-3 menyetor ke bursa
    petak.innerHTML = ALAMAT.map((a, i) =>
      '<div class="dm-chip s' + (warna[k[i]] % 5) + (k[i] === kenaLabel ? " tertandai" : "") + '">' +
      a + (k[i] === kenaLabel ? '<span class="dm-tag">🪪 Budi S.</span>' : "") + "</div>"
    ).join("");

    const jml = Object.keys(warna).length;
    const anggota = k.filter((x) => x === k[2]).length;
    ring.innerHTML =
      '<div class="dm-line"><span>Alamat yang terlihat</span><b>' + ALAMAT.length + "</b></div>" +
      '<div class="dm-line"><span>Pemilik berbeda yang tersisa</span><b>' + jml + "</b></div>" +
      (tahap === 0
        ? '<div class="dm-note">Awalnya tampak seperti <b>8 orang berbeda</b>. Blockchain tidak mencantumkan nama — hanya alamat.</div>'
        : tahap === 1
        ? '<div class="dm-note"><b>Heuristik kepemilikan masukan bersama:</b> bila satu transaksi membelanjakan dana dari beberapa alamat sekaligus, maka pengirimnya harus memegang kunci privat <b>semua</b> alamat itu — artinya alamat-alamat tersebut <b>satu pemilik</b>.<br><br>Hanya dengan aturan sederhana ini, 8 alamat menyusut menjadi <b>' + jml + " pemilik</b>. Tidak ada peretasan sama sekali — semua datanya memang terbuka.</div>"
        : '<div class="dm-line big good"><span>🪪 Satu klaster teridentifikasi</span><b>' + anggota + " alamat sekaligus</b></div>" +
          '<div class="dm-note">Cukup <b>satu</b> alamat dalam klaster itu menyetor ke bursa ber-KYC, dan <b>seluruh anggota klaster</b> ikut terhubung ke identitas yang sama — termasuk transaksi bertahun-tahun sebelumnya.<br><br>Inilah sebabnya privasi di blockchain bersifat <b>rapuh dan tidak bisa ditarik kembali</b>: satu kebocoran berlaku surut ke seluruh riwayat.</div>');
  }

  const b1 = h("button", { class: "btn primary", type: "button", text: "① Terapkan heuristik klaster" });
  const b2 = h("button", { class: "btn ghost", type: "button", text: "② Satu alamat menyetor ke bursa" });
  b1.onclick = () => { tahap = Math.max(tahap, 1); gambar(); };
  b2.onclick = () => { tahap = 2; gambar(); };
  const rs = h("button", { class: "btn ghost", type: "button", text: "↺ Ulangi" });
  rs.onclick = () => { tahap = 0; gambar(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧩 <b>Demo: bagaimana alamat-alamat disatukan</b>" }),
    h("p", { class: "demo-hint", text: "Delapan alamat yang tampak tak berhubungan. Terapkan satu aturan sederhana, lalu lihat berapa banyak yang sebenarnya dimiliki orang yang sama." }),
    petak,
    h("div", { class: "dm-tx" }, [h("span", { html: "Transaksi yang terlihat di blockchain: " + TX.map((t) => "<b>" + t.nama + "</b> (dari " + t.masuk.map((i) => ALAMAT[i]).join(" + ") + ")").join(" · ") })]),
    h("div", { class: "demo-controls" }, [b1, b2, rs]),
    ring,
  ]));
  gambar();
};

/* ---------- Demo: tiga operasi kriptografi pada pesan yang sama ---------- */
DEMOS["tiga-operasi"] = function (root) {
  const s = { pesan: "Kirim 5 BTC ke Budi", kunci: "rahasia123", kunciBuka: "rahasia123" };

  // XOR sederhana — hanya untuk memperagakan sifat "bisa dibalik",
  // BUKAN enkripsi yang layak dipakai sungguhan.
  function xorHex(teks, kunci) {
    let h = "";
    for (let i = 0; i < teks.length; i++) {
      const c = teks.charCodeAt(i) ^ kunci.charCodeAt(i % kunci.length);
      h += c.toString(16).padStart(2, "0");
    }
    return h;
  }
  function xorBalik(hex, kunci) {
    let t = "";
    for (let i = 0; i < hex.length; i += 2) {
      const c = parseInt(hex.substr(i, 2), 16) ^ kunci.charCodeAt((i / 2) % kunci.length);
      t += String.fromCharCode(c);
    }
    return t;
  }
  const bisaDibaca = (t) => /^[\x20-\x7E\s]*$/.test(t);

  const out = h("div", { class: "dm-out" });

  function draw() {
    const sandi = xorHex(s.pesan, s.kunci || " ");
    const dibuka = xorBalik(sandi, s.kunciBuka || " ");
    const cocok = dibuka === s.pesan;
    const sidik = demoHash(s.pesan);
    const ttd = demoHash(s.pesan + "|" + s.kunci);

    out.innerHTML =
      '<div class="krip-blok"><div class="krip-judul">🔒 ENKRIPSI — menyembunyikan</div>' +
      '<div class="krip-hasil sandi">' + sandi.slice(0, 72) + (sandi.length > 72 ? "…" : "") + "</div>" +
      '<div class="dm-sub">Dibuka dengan kunci "' + (s.kunciBuka || "(kosong)") + '":</div>' +
      '<div class="krip-hasil ' + (cocok ? "ok" : "bad") + '">' +
      (bisaDibaca(dibuka) ? dibuka : dibuka.replace(/[^\x20-\x7E]/g, "�")) + "</div>" +
      '<div class="dm-sub">' + (cocok ? "✅ Kunci cocok — pesan kembali utuh." : "❌ Kunci salah — hasilnya jadi sampah. Tak ada petunjuk seberapa dekat tebakanmu.") + "</div></div>" +

      '<div class="krip-blok"><div class="krip-judul">🔑 HASH — menyegel, satu arah</div>' +
      '<div class="krip-hasil sidik">' + sidik + "</div>" +
      '<div class="dm-sub">Panjangnya selalu sama, apa pun panjang pesannya. <b>Tidak ada kunci</b> dan <b>tidak bisa dibalik</b> — tak ada cara mendapatkan pesan asli dari deretan ini.</div></div>' +

      '<div class="krip-blok"><div class="krip-judul">✍️ TANDA TANGAN — membuktikan, bukan menyembunyikan</div>' +
      '<div class="krip-hasil biasa">' + s.pesan + "</div>" +
      '<div class="dm-sub">Pesannya <b>tetap terbaca siapa saja</b>. Yang ditambahkan hanyalah:</div>' +
      '<div class="krip-hasil ttd">' + ttd + "</div>" +
      '<div class="dm-sub">Siapa pun bisa memeriksa tanda tangan ini sah, tanpa bisa memalsukannya.</div></div>' +

      '<div class="dm-note">⚠️ <b>Perhatikan baris ketiga.</b> Tanda tangan digital <b>tidak menyembunyikan apa pun</b> — pesannya tetap terbuka. Inilah yang dipakai blockchain.<br><br>Karena itu kalimat "data blockchain dienkripsi" <b>keliru</b>: yang dipakai blockchain adalah <b>hash</b> dan <b>tanda tangan</b>, bukan enkripsi. Justru seluruh isinya sengaja dibuat terbuka agar semua orang bisa memeriksanya.<br><br><i>Catatan: enkripsi di demo ini memakai XOR sederhana supaya sifat "bisa dibalik" terlihat. Enkripsi sungguhan jauh lebih rumit.</i></div>';
  }

  function isian(kunci, label) {
    const inp = h("input", { class: "pc-input lebar", type: "text", value: s[kunci] });
    inp.addEventListener("input", () => { s[kunci] = inp.value; draw(); });
    return h("label", { class: "pc-row" }, [h("span", { text: label }), inp]);
  }

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧪 <b>Demo: tiga operasi yang sering tertukar</b>" }),
    h("p", { class: "demo-hint", text: "Pesan yang sama dilewatkan tiga operasi berbeda. Ubah kunci pembukanya menjadi salah, lalu perhatikan apa yang terjadi." }),
    h("div", { class: "pc-form" }, [
      isian("pesan", "Pesan"),
      isian("kunci", "Kunci rahasia"),
      isian("kunciBuka", "Kunci untuk membuka"),
    ]),
    out,
  ]));
  draw();
};

/* ---------- Demo: pertukaran kunci Diffie-Hellman ---------- */
DEMOS["tukar-kunci"] = function (root) {
  const G = 5, P = 23; // angka kecil sengaja dipilih agar bisa diikuti manual
  const s = { a: 6, b: 15 };
  const out = h("div", { class: "dm-out" });

  const pangkatMod = (basis, pangkat, mod) => {
    let h2 = 1;
    for (let i = 0; i < pangkat; i++) h2 = (h2 * basis) % mod;
    return h2;
  };
  const warna = (n) => "hsl(" + Math.round((n / P) * 360) + ", 70%, 55%)";

  function draw() {
    const A = pangkatMod(G, s.a, P);       // dikirim Ani, terlihat umum
    const B = pangkatMod(G, s.b, P);       // dikirim Budi, terlihat umum
    const rahasiaAni = pangkatMod(B, s.a, P);
    const rahasiaBudi = pangkatMod(A, s.b, P);
    const sama = rahasiaAni === rahasiaBudi;

    out.innerHTML =
      '<div class="dm-line"><span>Diketahui umum</span><b>g = ' + G + ", p = " + P + "</b></div>" +
      '<div class="dm-line"><span>Ani kirim ke Budi<br><i class="dm-sub">' + G + "^" + s.a + " mod " + P + '</i></span><b>' + A + "</b></div>" +
      '<div class="dm-line"><span>Budi kirim ke Ani<br><i class="dm-sub">' + G + "^" + s.b + " mod " + P + '</i></span><b>' + B + "</b></div>" +
      '<div class="krip-hasil biasa">👂 Penyadap mendengar semuanya: g=' + G + ", p=" + P + ", " + A + ", " + B + "</div>" +
      '<div class="dm-line good"><span>Ani hitung<br><i class="dm-sub">' + B + "^" + s.a + " mod " + P + '</i></span><b>' + rahasiaAni + "</b></div>" +
      '<div class="dm-line good"><span>Budi hitung<br><i class="dm-sub">' + A + "^" + s.b + " mod " + P + '</i></span><b>' + rahasiaBudi + "</b></div>" +
      '<div class="krip-warna"><i style="background:' + warna(rahasiaAni) + '"></i><i style="background:' + warna(rahasiaBudi) + '"></i></div>' +
      '<div class="dm-line big ' + (sama ? "good" : "bad") + '"><span>' + (sama ? "🤝 Keduanya tiba di angka yang SAMA" : "Tidak cocok") + "</span><b>" + rahasiaAni + "</b></div>" +
      '<div class="dm-note">Ani dan Budi kini punya rahasia bersama <b>' + rahasiaAni + "</b> — padahal angka itu <b>tidak pernah dikirim</b> lewat jalur mana pun.<br><br>Penyadap mendengar seluruh percakapan (" + G + ", " + P + ", " + A + ", " + B + ") tetapi untuk mendapatkan " + rahasiaAni + " ia harus menemukan <b>a</b> atau <b>b</b> dari " + G + "^x mod " + P + " — persoalan yang dengan bilangan sungguhan berukuran ratusan digit <b>praktis mustahil</b>.<br><br>Inilah yang terjadi diam-diam setiap kali kamu membuka situs berawalan https.</div>";
  }

  const sl = (kunci, label) => {
    const r = h("input", { type: "range", min: "2", max: "20", value: String(s[kunci]), class: "dm-range" });
    const b = h("b", { text: String(s[kunci]) });
    r.oninput = () => { s[kunci] = parseInt(r.value, 10); b.textContent = r.value; draw(); };
    return h("label", { class: "dm-row" }, [h("span", { text: label }), r, b]);
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🤝 <b>Demo: menyepakati kunci rahasia di jalur terbuka</b>" }),
    h("p", { class: "demo-hint", text: "Ani dan Budi belum pernah bertemu dan semua percakapannya disadap. Anehnya mereka tetap bisa menyepakati satu angka rahasia. Geser angka rahasia masing-masing dan perhatikan hasil akhirnya." }),
    sl("a", "Rahasia Ani (a): "),
    sl("b", "Rahasia Budi (b): "),
    out,
  ]));
  draw();
};

/* ---------- Demo: regresi linear (cari garis terbaik) ---------- */
DEMOS["regresi-linear"] = function (root) {
  const X = [36, 45, 54, 60, 72, 80, 90, 100, 120, 140];
  const Y = [520, 560, 650, 700, 760, 850, 900, 1000, 1150, 1330];
  const PENCILAN = { x: 70, y: 1900 };
  const s = { a: 5, b: 300, pencilan: false };
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });

  const data = () => (s.pencilan ? { x: X.concat([PENCILAN.x]), y: Y.concat([PENCILAN.y]) } : { x: X, y: Y });
  function kuadratTerkecil(d) {
    const n = d.x.length;
    const mx = d.x.reduce((p, q) => p + q, 0) / n;
    const my = d.y.reduce((p, q) => p + q, 0) / n;
    let sxy = 0, sxx = 0;
    for (let i = 0; i < n; i++) { sxy += (d.x[i] - mx) * (d.y[i] - my); sxx += (d.x[i] - mx) * (d.x[i] - mx); }
    const a = sxy / sxx;
    return { a: a, b: my - a * mx };
  }
  function rmse(d, a, b) {
    let t = 0;
    for (let i = 0; i < d.x.length; i++) { const e = d.y[i] - (a * d.x[i] + b); t += e * e; }
    return Math.sqrt(t / d.x.length);
  }
  const px = (x) => 40 + ((x - 20) / 140) * 460;
  const py = (y) => 240 - (y / 2000) * 220;
  // potong garis agar tetap di dalam area grafik (y antara 0 dan 2000)
  // Kemiringan a selalu >= 0 di demo ini, jadi cukup cari rentang x
  // tempat 0 <= a·x + b <= 2000, lalu irisan dengan rentang grafik 20..160.
  function segmen(a, b) {
    let x1 = 20, x2 = 160;
    if (a > 0) {
      x1 = Math.max(20, -b / a);
      x2 = Math.min(160, (2000 - b) / a);
    }
    if (x1 > x2) x2 = x1; // garis sepenuhnya di luar area: jadikan titik
    const yj = (x) => Math.min(2000, Math.max(0, a * x + b));
    return [px(x1), py(yj(x1)), px(x2), py(yj(x2))].map((v) => v.toFixed(1));
  }

  function draw() {
    const d = data();
    const best = kuadratTerkecil(d);
    const eKamu = rmse(d, s.a, s.b), eBest = rmse(d, best.a, best.b);
    const g1 = segmen(best.a, best.b), g2 = segmen(s.a, s.b);
    let g = '<svg viewBox="0 0 520 270" class="viz-svg" role="img" aria-label="Grafik regresi linear">';
    g += '<line x1="40" y1="240" x2="505" y2="240" class="vaxis"/><line x1="40" y1="15" x2="40" y2="240" class="vaxis"/>';
    g += '<text x="272" y="264" text-anchor="middle" class="vt-xs">Luas rumah (m²)</text>';
    g += '<text x="14" y="128" text-anchor="middle" class="vt-xs" transform="rotate(-90 14 128)">Harga (juta)</text>';
    for (let i = 0; i < d.x.length; i++) {
      const yGaris = Math.min(2000, Math.max(0, s.a * d.x[i] + s.b));
      g += '<line x1="' + px(d.x[i]).toFixed(1) + '" y1="' + py(d.y[i]).toFixed(1) + '" x2="' + px(d.x[i]).toFixed(1) + '" y2="' + py(yGaris).toFixed(1) + '" class="vline dim"/>';
    }
    g += '<line x1="' + g1[0] + '" y1="' + g1[1] + '" x2="' + g1[2] + '" y2="' + g1[3] + '" class="garis-terbaik"/>';
    g += '<line x1="' + g2[0] + '" y1="' + g2[1] + '" x2="' + g2[2] + '" y2="' + g2[3] + '" class="vline aktif"/>';
    for (let i = 0; i < d.x.length; i++) {
      const pencil = s.pencilan && i === d.x.length - 1;
      g += '<circle cx="' + px(d.x[i]).toFixed(1) + '" cy="' + py(d.y[i]).toFixed(1) + '" r="5" class="' + (pencil ? "titik-pencilan" : "vdot") + '"/>';
    }
    g += "</svg>";
    kanvas.innerHTML = g;

    const f = (v, n) => v.toLocaleString("id-ID", { maximumFractionDigits: n });
    out.innerHTML =
      '<div class="dm-line"><span>Garis kamu <i class="dm-sub">(biru tebal)</i><br><i class="dm-sub">harga = ' + f(s.a, 1) + " × luas + " + f(s.b, 0) + '</i></span><b>meleset ±Rp' + f(eKamu, 0) + " jt</b></div>" +
      '<div class="dm-line good"><span>Garis terbaik <i class="dm-sub">(hijau putus-putus)</i><br><i class="dm-sub">harga = ' + f(best.a, 2) + " × luas + " + f(best.b, 0) + '</i></span><b>meleset ±Rp' + f(eBest, 0) + " jt</b></div>" +
      '<div class="dm-line teks"><span>Arti kemiringannya</span><b>Tiap tambah 1 m², harga naik sekitar Rp' + f(best.a, 1) + " juta</b></div>" +
      '<div class="dm-note">' +
      (s.pencilan
        ? "⚠️ <b>Satu pencilan saja</b> (rumah 70 m² seharga Rp1,9 miliar) menarik garis terbaik ke atas dan membuat tebakan untuk rumah-rumah lain ikut memburuk. Regresi linear sangat peka terhadap pencilan — karena selisih dikuadratkan, satu titik yang meleset jauh punya pengaruh sangat besar."
        : "Geser kedua penggeser dan coba kalahkan garis hijau. Kamu tidak akan bisa: garis hijau adalah garis yang <b>jumlah kuadrat selisihnya paling kecil</b> — itulah arti 'garis terbaik' pada regresi linear. Garis putus-putus abu-abu menunjukkan seberapa jauh tiap titik dari garismu.") +
      "</div>";
  }

  const slA = h("input", { type: "range", min: "0", max: "14", step: "0.1", value: String(s.a), class: "dm-range" });
  const lbA = h("b", { text: "5,0" });
  slA.oninput = () => { s.a = parseFloat(slA.value); lbA.textContent = s.a.toFixed(1).replace(".", ","); draw(); };
  const slB = h("input", { type: "range", min: "-300", max: "900", step: "10", value: String(s.b), class: "dm-range" });
  const lbB = h("b", { text: "300" });
  slB.oninput = () => { s.b = parseInt(slB.value, 10); lbB.textContent = String(s.b); draw(); };

  const tPas = h("button", { class: "btn primary", type: "button", text: "✨ Pasang garis terbaik" });
  tPas.onclick = () => {
    const best = kuadratTerkecil(data());
    s.a = Math.round(best.a * 10) / 10; s.b = Math.round(best.b / 10) * 10;
    slA.value = s.a; slB.value = s.b; lbA.textContent = s.a.toFixed(1).replace(".", ","); lbB.textContent = String(s.b);
    draw();
  };
  const tPen = h("button", { class: "btn ghost", type: "button" });
  const syncPen = () => { tPen.textContent = s.pencilan ? "↺ Hapus pencilan" : "⚠️ Tambah satu pencilan"; };
  tPen.onclick = () => { s.pencilan = !s.pencilan; syncPen(); draw(); };
  syncPen();

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📈 <b>Demo: mencari garis terbaik</b>" }),
    h("p", { class: "demo-hint", text: "Sepuluh rumah dengan luas dan harganya. Atur kemiringan dan titik awal garis biru agar sedekat mungkin dengan semua titik." }),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Kemiringan (a): " }), slA, lbA]),
    h("label", { class: "dm-row" }, [h("span", { text: "Titik awal (b): " }), slB, lbB]),
    h("div", { class: "demo-controls" }, [tPas, tPen]),
    out,
  ]));
  draw();
};

/* ---------- Demo: regresi logistik & ambang keputusan ---------- */
DEMOS["ambang-logistik"] = function (root) {
  // [peluang gagal bayar menurut model, kenyataan: 1 = benar-benar gagal bayar]
  const DATA = [[0.03, 0], [0.07, 0], [0.12, 0], [0.15, 0], [0.22, 1], [0.25, 0], [0.31, 0], [0.36, 0], [0.42, 1], [0.45, 0],
    [0.51, 0], [0.55, 1], [0.61, 0], [0.66, 1], [0.72, 1], [0.78, 0], [0.83, 1], [0.88, 1], [0.93, 1], [0.97, 1]];
  let ambang = 0.5;
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const px = (z) => 40 + ((z + 5) / 10) * 460;
  const py = (p) => 230 - p * 210;
  const logit = (p) => Math.log(p / (1 - p));

  function draw() {
    let tp = 0, fp = 0, fn = 0, tn = 0;
    DATA.forEach((d) => {
      const tebak = d[0] >= ambang ? 1 : 0;
      if (tebak === 1 && d[1] === 1) tp++;
      else if (tebak === 1 && d[1] === 0) fp++;
      else if (tebak === 0 && d[1] === 1) fn++;
      else tn++;
    });
    const presisi = tp + fp ? (tp / (tp + fp)) * 100 : 0;
    const recall = tp + fn ? (tp / (tp + fn)) * 100 : 0;

    let g = '<svg viewBox="0 0 520 262" class="viz-svg" role="img" aria-label="Kurva sigmoid dan ambang keputusan">';
    g += '<line x1="40" y1="230" x2="505" y2="230" class="vaxis"/><line x1="40" y1="15" x2="40" y2="230" class="vaxis"/>';
    let jalur = "";
    for (let z = -5; z <= 5.001; z += 0.25) jalur += (z === -5 ? "M" : "L") + px(z).toFixed(1) + " " + py(1 / (1 + Math.exp(-z))).toFixed(1) + " ";
    g += '<path d="' + jalur + '" class="vring"/>';
    g += '<line x1="40" y1="' + py(ambang).toFixed(1) + '" x2="505" y2="' + py(ambang).toFixed(1) + '" class="garis-ambang"/>';
    g += '<text x="500" y="' + (py(ambang) - 6).toFixed(1) + '" text-anchor="end" class="vt-xs">ambang ' + ambang.toFixed(2).replace(".", ",") + "</text>";
    g += '<text x="272" y="254" text-anchor="middle" class="vt-xs">Skor risiko dari model (makin kanan makin berisiko)</text>';
    g += '<text x="14" y="122" text-anchor="middle" class="vt-xs" transform="rotate(-90 14 122)">Peluang gagal bayar</text>';
    DATA.forEach((d) => {
      g += '<circle cx="' + px(logit(d[0])).toFixed(1) + '" cy="' + py(d[0]).toFixed(1) + '" r="6" class="' + (d[1] ? "titik-pencilan" : "titik-lancar") + '"/>';
    });
    g += "</svg>";
    kanvas.innerHTML = g;

    out.innerHTML =
      '<div class="cm-grid">' +
      '<div class="cm-sel ok"><b>' + tp + '</b><span>Gagal bayar yang tertangkap</span></div>' +
      '<div class="cm-sel bad"><b>' + fp + '</b><span>Nasabah baik yang ikut ditolak</span></div>' +
      '<div class="cm-sel bad"><b>' + fn + '</b><span>Gagal bayar yang lolos</span></div>' +
      '<div class="cm-sel ok"><b>' + tn + '</b><span>Nasabah baik yang diterima</span></div>' +
      "</div>" +
      '<div class="dm-line"><span>Presisi<br><i class="dm-sub">dari yang ditolak, berapa yang memang berisiko</i></span><b>' + presisi.toFixed(0) + "%</b></div>" +
      '<div class="dm-line"><span>Recall<br><i class="dm-sub">dari semua yang gagal bayar, berapa yang tertangkap</i></span><b>' + recall.toFixed(0) + "%</b></div>" +
      '<div class="dm-note">Merah = kenyataannya gagal bayar, hijau = lancar. Semua titik <b>di atas garis ambang</b> ditolak.<br><br>Turunkan ambang: lebih banyak penunggak tertangkap, tapi lebih banyak nasabah baik ikut ditolak. Naikkan ambang: sebaliknya. <b>Modelnya sama persis — yang berubah hanya keputusan bisnis soal kesalahan mana yang lebih mahal.</b></div>';
  }

  const sl = h("input", { type: "range", min: "0.05", max: "0.95", step: "0.05", value: "0.5", class: "dm-range" });
  const lb = h("b", { text: "0,50" });
  sl.oninput = () => { ambang = parseFloat(sl.value); lb.textContent = ambang.toFixed(2).replace(".", ","); draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🎚️ <b>Demo: model memberi peluang, manusia memilih ambang</b>" }),
    h("p", { class: "demo-hint", text: "Dua puluh pemohon kredit. Model regresi logistik menaksir peluang tiap orang gagal bayar. Geser ambangnya dan lihat siapa yang ditolak." }),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Ambang penolakan: " }), sl, lb]),
    out,
  ]));
  draw();
};

/* ---------- Demo: Isolation Forest ---------- */
DEMOS["isolasi-anomali"] = function (root) {
  function pengacak(benih) {
    let a = benih >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  // transaksi kartu: x = jam, y = nominal (juta rupiah)
  const titik = [];
  const rData = pengacak(7);
  for (let i = 0; i < 26; i++) titik.push({ x: 8 + rData() * 13, y: 0.05 + rData() * 0.9, jenis: "normal" });
  titik.push({ x: 13.5, y: 8.6, jenis: "nominal janggal" });
  titik.push({ x: 2.5, y: 0.4, jenis: "jam janggal" });
  titik.push({ x: 3.4, y: 5.2, jenis: "jam & nominal janggal" });

  let benih = 11, ambang = 0.6;
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });

  const n = titik.length;
  const H = (i) => Math.log(i) + 0.5772156649;
  const cN = 2 * H(n - 1) - (2 * (n - 1)) / n;

  function kedalaman(p, rnd) {
    let S = titik.map((_, i) => i);
    let d = 0;
    while (S.length > 1 && d < 40) {
      let sumbu = rnd() < 0.5 ? "x" : "y";
      let min = Infinity, max = -Infinity;
      S.forEach((i) => { const v = titik[i][sumbu]; if (v < min) min = v; if (v > max) max = v; });
      if (max === min) {
        sumbu = sumbu === "x" ? "y" : "x"; min = Infinity; max = -Infinity;
        S.forEach((i) => { const v = titik[i][sumbu]; if (v < min) min = v; if (v > max) max = v; });
        if (max === min) break;
      }
      const potong = min + rnd() * (max - min);
      const kiri = titik[p][sumbu] < potong;
      S = S.filter((i) => (titik[i][sumbu] < potong) === kiri);
      d++;
    }
    return d;
  }

  function hitung() {
    const rnd = pengacak(benih);
    const POHON = 150;
    return titik.map((_, i) => {
      let total = 0;
      for (let t = 0; t < POHON; t++) total += kedalaman(i, rnd);
      const rata = total / POHON;
      return { i: i, rata: rata, skor: Math.pow(2, -rata / cN) };
    });
  }

  const px = (x) => 40 + (x / 24) * 460;
  const py = (y) => 230 - (y / 10) * 210;

  function draw() {
    const hasil = hitung();
    let g = '<svg viewBox="0 0 520 262" class="viz-svg" role="img" aria-label="Sebaran transaksi dan skor anomali">';
    g += '<line x1="40" y1="230" x2="505" y2="230" class="vaxis"/><line x1="40" y1="15" x2="40" y2="230" class="vaxis"/>';
    g += '<text x="272" y="254" text-anchor="middle" class="vt-xs">Jam transaksi (0–24)</text>';
    g += '<text x="14" y="122" text-anchor="middle" class="vt-xs" transform="rotate(-90 14 122)">Nominal (juta)</text>';
    hasil.forEach((r) => {
      const t = titik[r.i];
      const anomali = r.skor >= ambang;
      g += '<circle cx="' + px(t.x).toFixed(1) + '" cy="' + py(t.y).toFixed(1) + '" r="' + (anomali ? 8 : 5) + '" class="' + (anomali ? "titik-pencilan" : "titik-lancar") + '"/>';
    });
    g += "</svg>";
    kanvas.innerHTML = g;

    const urut = hasil.slice().sort((a, b) => b.skor - a.skor);
    const normal = hasil.filter((r) => titik[r.i].jenis === "normal");
    const rataNormal = normal.reduce((a, r) => a + r.rata, 0) / normal.length;
    const ditandai = hasil.filter((r) => r.skor >= ambang).length;
    const fmt = (v) => v.toFixed(1).replace(".", ",");

    out.innerHTML =
      urut.slice(0, 4).map((r, k) => {
        const t = titik[r.i];
        const label = t.jenis === "normal" ? "transaksi biasa" : t.jenis;
        return '<div class="dm-line ' + (r.skor >= ambang ? "bad" : "") + '"><span>#' + (k + 1) + " — " + label +
          '<br><i class="dm-sub">jam ' + fmt(t.x) + ", Rp" + fmt(t.y) + " jt · rata-rata terisolasi dalam " + fmt(r.rata) + ' potongan</i></span><b>skor ' + r.skor.toFixed(2).replace(".", ",") + "</b></div>";
      }).join("") +
      '<div class="dm-line"><span>Transaksi biasa rata-rata butuh</span><b>' + fmt(rataNormal) + " potongan</b></div>" +
      '<div class="dm-line"><span>Ditandai anomali pada ambang ini</span><b>' + ditandai + " dari " + n + "</b></div>" +
      '<div class="dm-note">Setiap "pohon" memotong data secara <b>acak</b> — memilih sumbu acak lalu titik potong acak — sampai satu transaksi terisolasi sendirian. Transaksi yang janggal <b>cepat terisolasi</b> karena letaknya jauh dari kerumunan; transaksi biasa tersembunyi di tengah kerumunan sehingga butuh banyak potongan.<br><br>Perhatikan transaksi <b>jam 2 dini hari bernominal kecil</b>: nominalnya wajar, tapi jamnya tidak — dan tetap tertangkap. Anomali tidak harus ekstrem di semua kolom.<br><br><i>Skor mendekati 1 = sangat janggal; sekitar 0,5 ke bawah = biasa. Tiap kali "acak ulang", angkanya sedikit berubah tapi urutan teratasnya tetap sama.</i></div>';
  }

  const sl = h("input", { type: "range", min: "0.45", max: "0.8", step: "0.01", value: "0.6", class: "dm-range" });
  const lb = h("b", { text: "0,60" });
  sl.oninput = () => { ambang = parseFloat(sl.value); lb.textContent = ambang.toFixed(2).replace(".", ","); draw(); };
  const acak = h("button", { class: "btn ghost", type: "button", text: "🎲 Acak ulang hutan" });
  acak.onclick = () => { benih = Math.floor(Math.random() * 100000); draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌲 <b>Demo: Isolation Forest menemukan transaksi janggal</b>" }),
    h("p", { class: "demo-hint", text: "29 transaksi kartu tanpa label mana yang penipuan. Model tidak diberi tahu apa pun — ia hanya mengukur seberapa mudah tiap transaksi dipisahkan dari yang lain." }),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Ambang skor anomali: " }), sl, lb]),
    h("div", { class: "demo-controls" }, [acak]),
    out,
  ]));
  draw();
};

/* ---------- Demo: kenapa pohon dalam hutan harus berbeda-beda ---------- */
DEMOS["hutan-korelasi"] = function (root) {
  // distribusi normal baku (pendekatan Abramowitz–Stegun) dan kebalikannya (bagi dua)
  const Phi = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    const q = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - q : q;
  };
  const PhiInv = (p) => { let lo = -8, hi = 8; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (Phi(m) < p) lo = m; else hi = m; } return (lo + hi) / 2; };

  let p = 0.65, n = 25, rho = 0.2;
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const akurasi = (k) => Phi(PhiInv(p) / Math.sqrt(rho + (1 - rho) / k));
  const batas = () => (rho === 0 ? 1 : Phi(PhiInv(p) / Math.sqrt(rho)));
  const px = (k) => 50 + ((k - 1) / 199) * 450;
  const py = (a) => 225 - ((a - 0.5) / 0.5) * 205;
  const pct = (v) => (v * 100).toFixed(1).replace(".", ",") + "%";

  function draw() {
    let g = '<svg viewBox="0 0 520 262" class="viz-svg" role="img" aria-label="Akurasi hutan terhadap jumlah pohon">';
    g += '<line x1="50" y1="225" x2="505" y2="225" class="vaxis"/><line x1="50" y1="15" x2="50" y2="225" class="vaxis"/>';
    [0.5, 0.75, 1].forEach((a) => { g += '<text x="44" y="' + (py(a) + 4).toFixed(1) + '" text-anchor="end" class="vt-xs">' + Math.round(a * 100) + "%</text>"; });
    g += '<line x1="50" y1="' + py(batas()).toFixed(1) + '" x2="505" y2="' + py(batas()).toFixed(1) + '" class="garis-terbaik"/>';
    g += '<text x="500" y="' + (py(batas()) + (batas() > 0.95 ? 16 : -6)).toFixed(1) + '" text-anchor="end" class="vt-xs">batas atas ' + pct(batas()) + "</text>";
    g += '<line x1="50" y1="' + py(p).toFixed(1) + '" x2="505" y2="' + py(p).toFixed(1) + '" class="garis-ambang"/>';
    g += '<text x="500" y="' + (py(p) + 16).toFixed(1) + '" text-anchor="end" class="vt-xs">satu pohon ' + pct(p) + "</text>";
    let jalur = "";
    for (let k = 1; k <= 200; k++) jalur += (k === 1 ? "M" : "L") + px(k).toFixed(1) + " " + py(akurasi(k)).toFixed(1) + " ";
    g += '<path d="' + jalur + '" class="vline aktif"/>';
    g += '<circle cx="' + px(n).toFixed(1) + '" cy="' + py(akurasi(n)).toFixed(1) + '" r="7" class="titik-lancar"/>';
    g += '<text x="277" y="252" text-anchor="middle" class="vt-xs">Jumlah pohon (1–200)</text>';
    g += "</svg>";
    kanvas.innerHTML = g;

    const sisa = rho + (1 - rho) / n;
    out.innerHTML =
      '<div class="dm-line"><span>Akurasi satu pohon</span><b>' + pct(p) + "</b></div>" +
      '<div class="dm-line big good"><span>Akurasi hutan ' + n + " pohon</span><b>" + pct(akurasi(n)) + "</b></div>" +
      '<div class="dm-line"><span>Batas atas, walau pohonnya tak terhingga</span><b>' + pct(batas()) + "</b></div>" +
      '<div class="dm-line teks"><span>Keraguan yang tersisa<br><i class="dm-sub">ρ + (1 − ρ) ÷ n — bagian kiri tidak bisa dihapus dengan menambah pohon</i></span><b>' +
      rho.toFixed(2).replace(".", ",") + " + " + ((1 - rho) / n).toFixed(3).replace(".", ",") + " = " + sisa.toFixed(3).replace(".", ",") + "</b></div>" +
      '<div class="dm-note">' +
      (rho >= 0.99
        ? "<b>Pohon kembar:</b> semua pohon membuat kesalahan yang sama persis, jadi seribu pohon pun sama saja dengan satu pohon. Voting tidak ada gunanya kalau semua pemilih berpendapat sama."
        : "Menambah pohon menghapus bagian <b>(1 − ρ) ÷ n</b> — itu sebabnya kurva cepat naik lalu mendatar. Tapi bagian <b>ρ</b> (kesalahan yang dibuat bersama oleh semua pohon) tidak bisa dihapus dengan cara apa pun kecuali <b>membuat pohonnya lebih berbeda</b>. Itulah tugas bootstrap dan pemilihan fitur acak.") +
      "<br><br><i>Model sederhana untuk ilustrasi (rata-rata keyakinan pohon); nilai ρ pada tombol adalah perkiraan, bukan hasil pengukuran.</i></div>";
  }

  const rentang = (label, attrs, ubah, tampil) => {
    const sl = h("input", Object.assign({ type: "range", class: "dm-range" }, attrs));
    const lb = h("b", { text: tampil(parseFloat(attrs.value)) });
    sl.oninput = () => { const v = parseFloat(sl.value); ubah(v); lb.textContent = tampil(v); draw(); };
    return { el: h("label", { class: "dm-row" }, [h("span", { text: label }), sl, lb]), sl: sl, lb: lb, tampil: tampil };
  };
  const rP = rentang("Akurasi tiap pohon: ", { min: "55", max: "80", step: "1", value: "65" }, (v) => { p = v / 100; }, (v) => v + "%");
  const rN = rentang("Jumlah pohon: ", { min: "1", max: "200", step: "1", value: "25" }, (v) => { n = v; }, (v) => String(v));
  const rR = rentang("Kemiripan antar-pohon (ρ): ", { min: "0", max: "100", step: "5", value: "20" }, (v) => { rho = v / 100; }, (v) => v + "%");
  const preset = (teks, nilai) => {
    const b = h("button", { class: "btn ghost", type: "button", text: teks });
    b.onclick = () => { rho = nilai / 100; rR.sl.value = String(nilai); rR.lb.textContent = rR.tampil(nilai); draw(); };
    return b;
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌳 <b>Demo: hutan hanya pintar kalau pohonnya berbeda-beda</b>" }),
    h("p", { class: "demo-hint", text: "Tiap pohon benar 65% dari waktu. Tambah jumlah pohon, lalu ubah seberapa mirip kesalahan antar-pohon — dan lihat batas yang tidak bisa ditembus." }),
    kanvas,
    rN.el, rR.el, rP.el,
    h("div", { class: "demo-controls" }, [preset("👯 Pohon kembar", 100), preset("🎒 Bootstrap saja", 50), preset("🎲 Bootstrap + fitur acak", 20)]),
    out,
  ]));
  draw();
};

/* ---------- Demo: pertumbuhan pohon level-wise vs leaf-wise ---------- */
DEMOS["tumbuh-daun"] = function (root) {
  // nomor simpul gaya heap: anak dari i adalah 2i dan 2i+1. G = penurunan kesalahan bila simpul dipecah (ilustrasi)
  const G = { 1: 40, 2: 28, 3: 3, 4: 14, 5: 2, 6: 1.5, 7: 1, 8: 12, 9: 2, 10: 1, 11: 1, 12: 0.5, 13: 0.5, 14: 0.5, 15: 0.5 };
  const BARIS = { 1: 1000, 2: 640, 3: 360, 4: 420, 5: 220, 6: 200, 7: 160, 8: 90, 9: 330, 10: 120, 11: 100, 12: 110, 13: 90, 14: 100, 15: 60,
    16: 30, 17: 60, 18: 180, 19: 150, 20: 70, 21: 50, 22: 60, 23: 40, 24: 60, 25: 50, 26: 50, 27: 40, 28: 50, 29: 50, 30: 30, 31: 30 };
  const AWAL = 110;
  const kedalaman = (i) => Math.floor(Math.log2(i));
  let k = 4;

  function tumbuh(mode) {
    const pecah = [];
    let daun = [1];
    for (let s = 0; s < k; s++) {
      const calon = daun.filter((i) => kedalaman(i) <= 3);
      if (!calon.length) break;
      const pilih = calon.reduce((a, b) => {
        if (mode === "level") return kedalaman(a) < kedalaman(b) || (kedalaman(a) === kedalaman(b) && a < b) ? a : b;
        return G[a] > G[b] || (G[a] === G[b] && a < b) ? a : b;
      });
      pecah.push(pilih);
      daun = daun.filter((i) => i !== pilih).concat([2 * pilih, 2 * pilih + 1]);
    }
    return { pecah: pecah, daun: daun };
  }

  function panel(hasil) {
    const pos = (i) => { const d = kedalaman(i), slot = i - Math.pow(2, d); return [((slot + 0.5) * 520) / Math.pow(2, d), 22 + d * 40]; };
    let garis = "", simpul = "";
    hasil.pecah.forEach((i, urut) => {
      const [x, y] = pos(i);
      [2 * i, 2 * i + 1].forEach((c) => { const [cx, cy] = pos(c); garis += '<line x1="' + x.toFixed(1) + '" y1="' + y + '" x2="' + cx.toFixed(1) + '" y2="' + cy + '" class="vline"/>'; });
      simpul += '<circle cx="' + x.toFixed(1) + '" cy="' + y + '" r="11" class="vbox accent aktif"/><text x="' + x.toFixed(1) + '" y="' + (y + 4) + '" text-anchor="middle" class="vt-xs">' + (urut + 1) + "</text>";
    });
    hasil.daun.forEach((i) => {
      const [x, y] = pos(i);
      simpul += '<circle cx="' + x.toFixed(1) + '" cy="' + y + '" r="8" class="vbox ok"/><text x="' + x.toFixed(1) + '" y="' + (y + 22) + '" text-anchor="middle" class="vt-xs" style="font-size:9.5px">' + BARIS[i] + "</text>";
    });
    return '<svg viewBox="0 0 520 212" class="viz-svg" role="img" aria-label="Bentuk pohon">' + garis + simpul + "</svg>";
  }

  function ringkas(hasil) {
    const sisa = AWAL - hasil.pecah.reduce((t, i) => t + G[i], 0);
    return {
      sisa: sisa,
      dalam: Math.max.apply(null, hasil.daun.map(kedalaman)),
      kecil: Math.min.apply(null, hasil.daun.map((i) => BARIS[i])),
    };
  }

  const wadah = h("div");
  function draw() {
    const A = tumbuh("level"), B = tumbuh("leaf");
    const a = ringkas(A), b = ringkas(B);
    const baris = (r, lawan) =>
      '<div class="dm-line ' + (r.sisa < lawan.sisa ? "good" : "") + '"><span>Kesalahan pada data latih tersisa</span><b>' + String(r.sisa).replace(".", ",") + "</b></div>" +
      '<div class="dm-line"><span>Kedalaman terdalam</span><b>' + r.dalam + "</b></div>" +
      '<div class="dm-line ' + (r.kecil < 60 ? "bad" : "") + '"><span>Daun terkecil (baris data)</span><b>' + r.kecil + "</b></div>";
    wadah.innerHTML =
      '<div class="dm-out"><div class="dm-line big"><span>📶 Level-wise <i class="dm-sub">— pola bawaan XGBoost: habiskan satu tingkat dulu</i></span></div>' + panel(A) + baris(a, b) + "</div>" +
      '<div class="dm-out"><div class="dm-line big"><span>🍃 Leaf-wise <i class="dm-sub">— pola LightGBM: pecah daun yang paling menguntungkan</i></span></div>' + panel(B) + baris(b, a) + "</div>" +
      '<div class="dm-note">Kedua pohon punya <b>jumlah daun yang sama (' + (k + 1) + ")</b>. Angka di lingkaran biru = urutan pemecahan; angka di bawah daun hijau = jumlah baris data di daun itu.<br><br>" +
      (b.sisa < a.sisa
        ? "Leaf-wise menurunkan kesalahan lebih cepat karena tidak membuang jatah pemecahan untuk cabang yang hampir tak berguna. Harganya: cabangnya menjorok dalam dan daun terkecilnya hanya berisi <b>" + b.kecil + " baris</b>. Keputusan yang diambil dari sedikit data mudah berubah jadi hafalan — karena itu di LightGBM <b>num_leaves</b> dan <b>min_child_samples</b> adalah rem utamanya."
        : "Pada pemecahan awal kedua cara masih memilih simpul yang sama. Tambah jumlah pemecahan untuk melihat keduanya berpisah jalan.") +
      "<br><br><i>Nilai penurunan kesalahan tiap pemecahan adalah ilustrasi.</i></div>";
  }

  const sl = h("input", { type: "range", min: "1", max: "7", step: "1", value: "4", class: "dm-range" });
  const lb = h("b", { text: "4" });
  sl.oninput = () => { k = parseInt(sl.value, 10); lb.textContent = sl.value; draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌿 <b>Demo: dua cara menumbuhkan pohon dengan jatah yang sama</b>" }),
    h("p", { class: "demo-hint", text: "Data latih 1.000 baris. Setiap pemecahan menurunkan kesalahan dengan besar yang berbeda-beda. Geser jatah pemecahannya." }),
    h("label", { class: "dm-row" }, [h("span", { text: "Jatah pemecahan: " }), sl, lb]),
    wadah,
  ]));
  draw();
};

/* ---------- Demo: melatih neural network kecil untuk XOR ---------- */
DEMOS["latih-xor"] = function (root) {
  function pengacak(benih) {
    let a = benih >>> 0;
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const X = [[0, 0], [0, 1], [1, 0], [1, 1]], Y = [0, 1, 1, 0];
  const TERSEMBUNYI = 4, LR = 0.8;
  let benih = 1, linear = false, jaringan, langkahKe, riwayat, pemutar = null;

  function buat() {
    const r = pengacak(benih), s = () => r() * 2 - 1;
    jaringan = {
      W1: Array.from({ length: TERSEMBUNYI }, () => [s(), s()]),
      b1: Array.from({ length: TERSEMBUNYI }, () => s() * 0.5),
      W2: Array.from({ length: TERSEMBUNYI }, () => s()),
      b2: 0,
    };
    langkahKe = 0; riwayat = [];
  }
  function maju(x) {
    const a1 = jaringan.W1.map((w, j) => { const z = w[0] * x[0] + w[1] * x[1] + jaringan.b1[j]; return linear ? z : Math.tanh(z); });
    let z2 = jaringan.b2;
    a1.forEach((a, j) => { z2 += jaringan.W2[j] * a; });
    return { a1: a1, y: 1 / (1 + Math.exp(-z2)) };
  }
  // satu langkah: maju, hitung loss, mundur (aturan rantai), perbarui bobot
  function langkah() {
    const gW1 = jaringan.W1.map(() => [0, 0]), gb1 = jaringan.b1.map(() => 0), gW2 = jaringan.W2.map(() => 0);
    let gb2 = 0, L = 0;
    X.forEach((x, i) => {
      const f = maju(x);
      const yy = Math.min(1 - 1e-9, Math.max(1e-9, f.y));
      L -= Y[i] * Math.log(yy) + (1 - Y[i]) * Math.log(1 - yy);
      const d2 = f.y - Y[i];
      gb2 += d2;
      f.a1.forEach((a, j) => {
        gW2[j] += d2 * a;
        const d1 = d2 * jaringan.W2[j] * (linear ? 1 : 1 - a * a);
        gW1[j][0] += d1 * x[0]; gW1[j][1] += d1 * x[1]; gb1[j] += d1;
      });
    });
    const m = X.length;
    jaringan.W1.forEach((w, j) => {
      w[0] -= (LR * gW1[j][0]) / m; w[1] -= (LR * gW1[j][1]) / m;
      jaringan.b1[j] -= (LR * gb1[j]) / m; jaringan.W2[j] -= (LR * gW2[j]) / m;
    });
    jaringan.b2 -= (LR * gb2) / m;
    langkahKe++;
    riwayat.push(L / m);
  }

  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const koma = (v, d) => v.toFixed(d).replace(".", ",");

  function draw() {
    const SEL = 20, UK = 12, X0 = 12, Y0 = 12;
    const ke = (v) => X0 + ((v + 0.25) / 1.5) * SEL * UK;
    let g = '<svg viewBox="0 0 520 272" class="viz-svg" role="img" aria-label="Wilayah keputusan jaringan dan grafik loss">';
    for (let r = 0; r < SEL; r++) {
      for (let c = 0; c < SEL; c++) {
        const u = -0.25 + ((c + 0.5) * 1.5) / SEL, v = 1.25 - ((r + 0.5) * 1.5) / SEL;
        const pr = maju([u, v]).y;
        g += '<rect x="' + (X0 + c * UK) + '" y="' + (Y0 + r * UK) + '" width="' + UK + '" height="' + UK + '" class="' + (pr >= 0.5 ? "sel-satu" : "sel-nol") + '" fill-opacity="' + (Math.abs(pr - 0.5) * 1.5).toFixed(2) + '"/>';
      }
    }
    X.forEach((x, i) => {
      g += '<circle cx="' + ke(x[0]).toFixed(1) + '" cy="' + (Y0 + SEL * UK - (ke(x[1]) - X0)).toFixed(1) + '" r="11" class="' + (Y[i] ? "titik-pencilan" : "titik-lancar") + '" style="stroke-width:3"/>';
    });
    g += '<text x="132" y="266" text-anchor="middle" class="vt-xs">merah = jawab 1 · hijau = jawab 0</text>';

    // grafik loss
    const GX0 = 300, GX1 = 508, GY0 = 20, GY1 = 230;
    const LMAX = 0.8, jumlah = Math.max(riwayat.length, 200);
    const gx = (t) => GX0 + (t / jumlah) * (GX1 - GX0);
    const gy = (L) => GY1 - (Math.min(L, LMAX) / LMAX) * (GY1 - GY0);
    g += '<line x1="' + GX0 + '" y1="' + GY1 + '" x2="' + GX1 + '" y2="' + GY1 + '" class="vaxis"/><line x1="' + GX0 + '" y1="' + GY0 + '" x2="' + GX0 + '" y2="' + GY1 + '" class="vaxis"/>';
    g += '<line x1="' + GX0 + '" y1="' + gy(Math.LN2).toFixed(1) + '" x2="' + GX1 + '" y2="' + gy(Math.LN2).toFixed(1) + '" class="garis-ambang"/>';
    g += '<text x="' + GX1 + '" y="' + (gy(Math.LN2) - 6).toFixed(1) + '" text-anchor="end" class="vt-xs">0,69 = tebak 50:50</text>';
    if (riwayat.length) {
      const lompat = Math.max(1, Math.ceil(riwayat.length / 200));
      let jalur = "M" + gx(1).toFixed(1) + " " + gy(riwayat[0]).toFixed(1);
      for (let t = lompat; t < riwayat.length; t += lompat) jalur += " L" + gx(t + 1).toFixed(1) + " " + gy(riwayat[t]).toFixed(1);
      g += '<path d="' + jalur + '" class="vline aktif"/>';
    }
    g += '<text x="404" y="252" text-anchor="middle" class="vt-xs">langkah latihan →</text>';
    g += '<text x="290" y="125" text-anchor="middle" class="vt-xs" transform="rotate(-90 290 125)">loss</text>';
    g += "</svg>";
    kanvas.innerHTML = g;

    const hasil = X.map((x) => maju(x).y);
    const benar = hasil.filter((pr, i) => (pr >= 0.5 ? 1 : 0) === Y[i]).length;
    const L = riwayat.length ? riwayat[riwayat.length - 1] : null;
    let catatan;
    if (langkahKe === 0) catatan = "Bobot masih acak, jadi wilayah warnanya asal-asalan. Tekan <b>Latih</b> dan perhatikan loss turun sementara warna menyesuaikan diri dengan keempat titik.";
    else if (linear && langkahKe >= 150) catatan = "<b>Macet di 0,69 — dan akan macet selamanya.</b> Tanpa fungsi aktivasi, sebanyak apa pun neuron dan lapisannya, seluruh jaringan tetap setara dengan <b>satu garis lurus</b>. XOR butuh dua garis, jadi pilihan terbaiknya menebak 50:50 untuk semua. Inilah alasan fungsi aktivasi wajib ada.";
    else if (benar === 4 && L < 0.1) catatan = "<b>Berhasil.</b> Jaringan menemukan sendiri cara memisahkan XOR — perhatikan wilayah merahnya berbentuk pita diagonal, sesuatu yang mustahil dibuat satu garis lurus. Tidak ada yang memprogram aturan ini; semuanya hasil ribuan koreksi kecil pada " + (TERSEMBUNYI * 3 + TERSEMBUNYI + 1) + " bobot.";
    else catatan = "Sedang belajar. Setiap langkah: <b>maju</b> (tebak), hitung <b>loss</b>, <b>mundur</b> (cari andil tiap bobot dengan aturan rantai), lalu geser bobot sedikit ke arah yang menurunkan loss.";

    out.innerHTML =
      '<div class="dm-line"><span>Langkah latihan</span><b>' + langkahKe + "</b></div>" +
      '<div class="dm-line ' + (L !== null && L < 0.1 ? "good" : "") + '"><span>Loss saat ini</span><b>' + (L === null ? "—" : koma(L, 3)) + "</b></div>" +
      X.map((x, i) => '<div class="dm-line ' + ((hasil[i] >= 0.5 ? 1 : 0) === Y[i] ? "good" : "bad") + '"><span>Input (' + x.join(", ") + ') <i class="dm-sub">jawaban benar ' + Y[i] + "</i></span><b>" + koma(hasil[i] * 100, 0) + "% yakin 1</b></div>").join("") +
      '<div class="dm-note">' + catatan + "</div>";
  }

  function berhenti() { if (pemutar) { clearInterval(pemutar); pemutar = null; } tPutar.textContent = "▶ Latih"; }
  const tPutar = h("button", { class: "btn", type: "button", text: "▶ Latih" });
  tPutar.onclick = () => {
    if (pemutar) { berhenti(); return; }
    tPutar.textContent = "⏸ Jeda";
    pemutar = setInterval(() => {
      if (!root.isConnected) { berhenti(); return; }
      for (let i = 0; i < 8; i++) langkah();
      draw();
      const L = riwayat[riwayat.length - 1];
      if (langkahKe >= 1200 || (!linear && L < 0.02)) berhenti();
    }, 70);
  };
  const tSatu = h("button", { class: "btn ghost", type: "button", text: "+10 langkah" });
  tSatu.onclick = () => { for (let i = 0; i < 10; i++) langkah(); draw(); };
  const tAcak = h("button", { class: "btn ghost", type: "button", text: "🎲 Bobot acak baru" });
  tAcak.onclick = () => { berhenti(); benih = 1 + Math.floor(Math.random() * 100000); buat(); draw(); };
  const cek = h("input", { type: "checkbox" });
  cek.onchange = () => { berhenti(); linear = cek.checked; buat(); draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧠 <b>Demo: latih neural network sungguhan di browsermu</b>" }),
    h("p", { class: "demo-hint", text: "Soal XOR: jawab 1 hanya bila kedua input berbeda. Jaringan 2 input → 4 neuron tersembunyi → 1 output, mulai dari bobot acak." }),
    kanvas,
    h("div", { class: "demo-controls" }, [tPutar, tSatu, tAcak]),
    h("label", { class: "dm-row" }, [cek, h("span", { text: " Hapus fungsi aktivasi (jaringan jadi linear)" })]),
    out,
  ]));
  buat();
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
