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

/* ---------- Kripto mini: SHA-256 & ECDSA secp256k1 sungguhan (untuk demo edukasi) ---------- */
const KriptoMini = (function () {
  // Konstanta SHA-256: 32 bit pertama pecahan akar pangkat tiga 64 bilangan prima pertama
  const K = [];
  (function () {
    let n = 2;
    while (K.length < 64) {
      let prima = true;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) { prima = false; break; }
      if (prima) { const x = Math.cbrt(n); K.push(((x - Math.floor(x)) * 4294967296) >>> 0); }
      n++;
    }
  })();
  function sha256Bytes(bytes) {
    const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const len = bytes.length;
    const total = ((len + 9 + 63) >> 6) << 6;
    const m = new Uint8Array(total);
    m.set(bytes);
    m[len] = 0x80;
    const bitLen = len * 8;
    m[total - 4] = (bitLen >>> 24) & 255; m[total - 3] = (bitLen >>> 16) & 255;
    m[total - 2] = (bitLen >>> 8) & 255; m[total - 1] = bitLen & 255;
    m[total - 5] = Math.floor(bitLen / 4294967296) & 255;
    const w = new Array(64);
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < total; o += 64) {
      for (let i = 0; i < 16; i++) w[i] = (m[o + 4 * i] << 24) | (m[o + 4 * i + 1] << 16) | (m[o + 4 * i + 2] << 8) | m[o + 4 * i + 3];
      for (let i = 16; i < 64; i++) {
        const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        const s2 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        w[i] = (s1 + w[i - 7] + s2 + w[i - 16]) | 0;
      }
      let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], hh = H[7];
      for (let i = 0; i < 64; i++) {
        const t1 = (hh + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
        const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        hh = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + hh) | 0;
    }
    return H.map((x) => (x >>> 0).toString(16).padStart(8, "0")).join("");
  }
  const sha256 = (teks) => sha256Bytes(new TextEncoder().encode(String(teks)));

  // Keccak-256 (varian Ethereum, padding 0x01) — jalur 64 bit memakai BigInt
  const M64 = (1n << 64n) - 1n;
  const RC = [];
  (function () {
    let R = 1;
    for (let i = 0; i < 24; i++) {
      let rc = 0n;
      for (let j = 0; j < 7; j++) {
        R = ((R << 1) ^ ((R >> 7) * 0x71)) % 256;
        if (R & 2) rc ^= 1n << BigInt((1 << j) - 1);
      }
      RC.push(rc);
    }
  })();
  function keccak256Bytes(bytes) {
    const rotl = (x, n) => (n === 0n ? x : ((x << n) | (x >> (64n - n))) & M64);
    const L = Array.from({ length: 5 }, () => [0n, 0n, 0n, 0n, 0n]); // L[x][y]
    const RATE = 136;
    const pad = new Uint8Array(Math.floor(bytes.length / RATE) * RATE + RATE);
    pad.set(bytes);
    pad[bytes.length] ^= 0x01;
    pad[pad.length - 1] ^= 0x80;
    for (let o = 0; o < pad.length; o += RATE) {
      for (let i = 0; i < RATE / 8; i++) {
        let v = 0n;
        for (let b = 7; b >= 0; b--) v = (v << 8n) | BigInt(pad[o + i * 8 + b]);
        L[i % 5][Math.floor(i / 5)] ^= v;
      }
      for (let r = 0; r < 24; r++) {
        const C = L.map((kol) => kol[0] ^ kol[1] ^ kol[2] ^ kol[3] ^ kol[4]);
        const D = C.map((_, x) => C[(x + 4) % 5] ^ rotl(C[(x + 1) % 5], 1n));
        for (let x = 0; x < 5; x++) for (let y = 0; y < 5; y++) L[x][y] ^= D[x];
        let x = 1, y = 0, kini = L[x][y];
        for (let t = 0; t < 24; t++) {
          const xb = y, yb = (2 * x + 3 * y) % 5;
          x = xb; y = yb;
          const simpan = L[x][y];
          L[x][y] = rotl(kini, BigInt(((t + 1) * (t + 2)) / 2 % 64));
          kini = simpan;
        }
        for (let yy = 0; yy < 5; yy++) {
          const T = [0, 1, 2, 3, 4].map((xx) => L[xx][yy]);
          for (let xx = 0; xx < 5; xx++) L[xx][yy] = T[xx] ^ (~T[(xx + 1) % 5] & M64 & T[(xx + 2) % 5]);
        }
        L[0][0] ^= RC[r];
      }
    }
    let keluar = "";
    for (let i = 0; i < 4; i++) {
      let v = L[i % 5][Math.floor(i / 5)];
      for (let b = 0; b < 8; b++) { keluar += (v & 255n).toString(16).padStart(2, "0"); v >>= 8n; }
    }
    return keluar;
  }
  const hexKeBytes = (hx) => Uint8Array.from(hx.match(/../g).map((p) => parseInt(p, 16)));
  // alamat Ethereum: 20 byte terakhir Keccak-256(kunci publik 64 byte), dengan huruf besar-kecil sebagai checksum (EIP-55)
  function alamatEthereum(Q) {
    const polos = keccak256Bytes(hexKeBytes(hex(Q[0]) + hex(Q[1]))).slice(-40);
    const cek = keccak256Bytes(new TextEncoder().encode(polos));
    return "0x" + polos.split("").map((ch, i) => (parseInt(cek[i], 16) >= 8 ? ch.toUpperCase() : ch)).join("");
  }

  // secp256k1: y² = x³ + 7 (mod p) — kurva yang dipakai Bitcoin & Ethereum
  const P = 2n ** 256n - 2n ** 32n - 977n;
  const N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;
  const G = [0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n, 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n];
  const mod = (a, m) => { const r = a % m; return r >= 0n ? r : r + m; };
  function inv(a, m) {
    let r0 = mod(a, m), r1 = m, s0 = 1n, s1 = 0n;
    while (r1 !== 0n) { const q = r0 / r1; [r0, r1] = [r1, r0 - q * r1]; [s0, s1] = [s1, s0 - q * s1]; }
    return mod(s0, m);
  }
  // koordinat Jacobian [X, Y, Z]; Z = 0 berarti titik tak hingga
  function dbl(pt) {
    const X = pt[0], Y = pt[1], Z = pt[2];
    if (Z === 0n || Y === 0n) return [0n, 1n, 0n];
    const S = mod(4n * X * Y * Y, P), M = mod(3n * X * X, P);
    const X3 = mod(M * M - 2n * S, P);
    return [X3, mod(M * (S - X3) - 8n * Y * Y * Y * Y, P), mod(2n * Y * Z, P)];
  }
  function add(p1, p2) {
    if (p1[2] === 0n) return p2;
    if (p2[2] === 0n) return p1;
    const Z1s = mod(p1[2] * p1[2], P), Z2s = mod(p2[2] * p2[2], P);
    const U1 = mod(p1[0] * Z2s, P), U2 = mod(p2[0] * Z1s, P);
    const S1 = mod(p1[1] * Z2s * p2[2], P), S2 = mod(p2[1] * Z1s * p1[2], P);
    if (U1 === U2) return S1 === S2 ? dbl(p1) : [0n, 1n, 0n];
    const Hh = mod(U2 - U1, P), R = mod(S2 - S1, P);
    const H2 = mod(Hh * Hh, P), H3 = mod(H2 * Hh, P);
    const X3 = mod(R * R - H3 - 2n * U1 * H2, P);
    return [X3, mod(R * (U1 * H2 - X3) - S1 * H3, P), mod(Hh * p1[2] * p2[2], P)];
  }
  function kali(k, titik) {
    let hasil = [0n, 1n, 0n], tambah = [titik[0], titik[1], 1n];
    while (k > 0n) { if (k & 1n) hasil = add(hasil, tambah); tambah = dbl(tambah); k >>= 1n; }
    return hasil;
  }
  function afin(pt) {
    if (pt[2] === 0n) return null;
    const zi = inv(pt[2], P), zi2 = mod(zi * zi, P);
    return [mod(pt[0] * zi2, P), mod(pt[1] * zi2 * zi, P)];
  }
  const hex = (n, pj) => n.toString(16).padStart(pj || 64, "0");
  function acakKunci() {
    const b = new Uint8Array(32);
    crypto.getRandomValues(b);
    return mod(BigInt("0x" + Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("")), N - 1n) + 1n;
  }
  const kunciPublik = (priv) => afin(kali(priv, G));
  const publikHex = (Q) => "04" + hex(Q[0]) + hex(Q[1]);
  function tandaTangani(pesan, priv) {
    const z = BigInt("0x" + sha256(pesan)) % N;
    for (;;) {
      const k = acakKunci(); // angka sekali pakai: wajib acak & rahasia
      const R = afin(kali(k, G));
      const r = R[0] % N;
      if (r === 0n) continue;
      let s = mod(inv(k, N) * (z + r * priv), N);
      if (s === 0n) continue;
      if (s > N / 2n) s = N - s; // bentuk "low-s" seperti aturan Bitcoin
      return { r: r, s: s };
    }
  }
  function periksa(pesan, sig, Q) {
    const r = sig.r, s = sig.s;
    if (!(r > 0n && r < N && s > 0n && s < N)) return false;
    const z = BigInt("0x" + sha256(pesan)) % N;
    const w = inv(s, N);
    const X = afin(add(kali(mod(z * w, N), G), kali(mod(r * w, N), [Q[0], Q[1]])));
    return !!X && X[0] % N === r;
  }
  return { keccak256: (teks) => keccak256Bytes(new TextEncoder().encode(String(teks))), alamatEthereum: alamatEthereum, sha256: sha256, acakKunci: acakKunci, kunciPublik: kunciPublik, publikHex: publikHex, tandaTangani: tandaTangani, periksa: periksa, hex: hex };
})();

/* Pembantu tampilan untuk demo kripto */
const kripPendek = (hx, n) => (hx.length > n * 2 + 1 ? hx.slice(0, n) + "…" + hx.slice(-n) : hx);
const kripEsc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- Demo: SHA-256 sungguhan & efek longsor ---------- */
DEMOS["hash-sungguhan"] = function (root) {
  const a = h("textarea", { class: "krip-teks", rows: "2", "aria-label": "Teks A" });
  const b = h("textarea", { class: "krip-teks", rows: "2", "aria-label": "Teks B" });
  a.value = "Andi mengirim 5 koin ke Budi";
  b.value = "Andi mengirim 6 koin ke Budi";
  const out = h("div", { class: "dm-out" });

  const bitBeda = (x, y) => {
    let n = 0;
    for (let i = 0; i < x.length; i++) { let v = parseInt(x[i], 16) ^ parseInt(y[i], 16); while (v) { n += v & 1; v >>= 1; } }
    return n;
  };
  const warnai = (hx, lawan) => hx.split("").map((c, i) => (c === lawan[i] ? '<span class="hx-sama">' + c + "</span>" : '<span class="hx-beda">' + c + "</span>")).join("");

  function draw() {
    const ha = KriptoMini.sha256(a.value), hb = KriptoMini.sha256(b.value);
    let karBeda = 0;
    for (let i = 0; i < 64; i++) if (ha[i] !== hb[i]) karBeda++;
    const bit = bitBeda(ha, hb);
    let catatan;
    if (a.value === b.value) catatan = "<b>Teks A dan B sama persis → hash-nya sama persis.</b> Inilah sifat <i>deterministik</i>: siapa pun, di komputer mana pun, di negara mana pun, akan mendapat 64 karakter yang sama. Karena itu ribuan komputer di jaringan blockchain bisa saling memeriksa tanpa perlu saling percaya.";
    else catatan = "Teks A dan B hanya berbeda sedikit, tapi <b>sekitar separuh bit hash-nya berubah</b> — tidak ada pola yang bisa dilihat. Inilah <i>efek longsor</i>: siapa pun yang mengubah satu angka saja di sebuah transaksi akan langsung ketahuan, karena sidik jarinya tidak lagi cocok.";

    out.innerHTML =
      '<div class="krip-judul">SIDIK JARI TEKS A · ' + a.value.length + " karakter masuk</div>" +
      '<div class="krip-hasil sidik">' + warnai(ha, hb) + "</div>" +
      '<div class="krip-judul">SIDIK JARI TEKS B · ' + b.value.length + " karakter masuk</div>" +
      '<div class="krip-hasil sidik">' + warnai(hb, ha) + "</div>" +
      '<div class="dm-line"><span>Panjang sidik jari</span><b>selalu 64 karakter</b></div>' +
      '<div class="dm-line"><span>Karakter yang berbeda <i class="dm-sub">(merah)</i></span><b>' + karBeda + " dari 64</b></div>" +
      '<div class="dm-line"><span>Bit yang berubah</span><b>' + bit + " dari 256 (" + Math.round((bit / 256) * 100) + "%)</b></div>" +
      '<div class="dm-note">' + catatan + '<br><br><i>Ini SHA-256 sungguhan — fungsi yang sama dengan yang dipakai Bitcoin — dihitung langsung di browsermu.</i></div>';
  }
  a.addEventListener("input", draw);
  b.addEventListener("input", draw);

  const tombol = (teks, aksi) => { const t = h("button", { class: "btn ghost", type: "button", text: teks }); t.onclick = () => { aksi(); draw(); }; return t; };
  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "#️⃣ <b>Demo: sidik jari SHA-256 sungguhan</b>" }),
    h("p", { class: "demo-hint", text: "Ketik apa saja di kedua kotak. Coba ubah satu huruf, satu angka, atau hanya satu spasi — lalu lihat berapa banyak sidik jarinya berubah." }),
    h("label", { class: "krip-label", text: "Teks A" }), a,
    h("label", { class: "krip-label", text: "Teks B" }), b,
    h("div", { class: "demo-controls" }, [
      tombol("🟰 Samakan B dengan A", () => { b.value = a.value; }),
      tombol("✏️ Tambah titik di B", () => { b.value = a.value + "."; }),
      tombol("📚 Coba teks panjang", () => {
        a.value = "Blockchain adalah buku catatan bersama yang salinannya dipegang ribuan komputer. Setiap halaman berisi sidik jari halaman sebelumnya, sehingga mengubah satu catatan lama akan merusak semua halaman sesudahnya dan langsung ketahuan oleh semua pemegang salinan.";
        b.value = a.value.replace("ribuan", "ratusan");
      }),
    ]),
    out,
  ]));
  draw();
};

/* ---------- Demo: menebak PIN dari hash-nya (serangan coba-semua) ---------- */
DEMOS["tebak-pin"] = function (root) {
  const pin = h("input", { class: "pc-input", type: "text", inputmode: "numeric", maxlength: "6", value: "4821", "aria-label": "PIN rahasia" });
  const out = h("div", { class: "dm-out" });
  const hasil = h("div");
  let berjalan = false, kecepatan = 0;

  const bersih = () => pin.value.replace(/\D/g, "").slice(0, 6);
  const angka = (n) => Math.round(n).toLocaleString("id-ID");

  function durasi(detik) {
    if (detik < 1) return "seketika";
    if (detik < 60) return angka(detik) + " detik";
    if (detik < 3600) return (detik / 60).toFixed(1).replace(".", ",") + " menit";
    if (detik < 86400) return (detik / 3600).toFixed(1).replace(".", ",") + " jam";
    const tahun = detik / 31557600;
    if (tahun < 1) return angka(detik / 86400) + " hari";
    if (tahun < 1e6) return angka(tahun) + " tahun";
    if (tahun < 1e9) return (tahun / 1e6).toFixed(0) + " juta tahun";
    const kaliAlamSemesta = tahun / 1.38e10;
    if (kaliAlamSemesta < 1) return (tahun / 1e9).toFixed(1).replace(".", ",") + " miliar tahun";
    return "≈ " + (kaliAlamSemesta >= 1e9 ? (kaliAlamSemesta / 1e9).toFixed(0) + " miliar" : angka(kaliAlamSemesta)) + " kali umur alam semesta";
  }

  function tabel() {
    const SERANG = 1e9;
    const baris = [
      ["PIN 4 digit", 1e4],
      ["PIN 6 digit", 1e6],
      ["Password 8 huruf kecil", Math.pow(26, 8)],
      ["Password 12 karakter campuran", Math.pow(94, 12)],
      ["Frasa pemulihan 12 kata (acak)", Math.pow(2, 128)],
    ];
    return '<div class="krip-judul" style="margin-top:12px">BERAPA LAMA MENCOBA SEMUA KEMUNGKINAN?</div>' +
      '<div class="dm-sub">Dengan komputer penyerang yang mampu 1 miliar tebakan per detik' + (kecepatan ? " (browsermu tadi: " + angka(kecepatan) + " per detik)" : "") + ":</div>" +
      baris.map((r) => '<div class="dm-line ' + (r[1] / SERANG > 3.15e7 ? "good" : "bad") + '"><span>' + r[0] + '<br><i class="dm-sub">' + (r[1] < 1e15 ? angka(r[1]) : "≈ " + (r[1] / Math.pow(10, Math.floor(Math.log10(r[1])))).toFixed(1).replace(".", ",") + " × 10^" + Math.floor(Math.log10(r[1]))) + " kemungkinan</i></span><b>" + durasi(r[1] / SERANG) + "</b></div>").join("");
  }

  function draw() {
    const p = bersih();
    out.innerHTML =
      '<div class="dm-line"><span>Yang disimpan server <i class="dm-sub">(bukan PIN-nya, hanya sidik jarinya)</i></span></div>' +
      '<div class="krip-hasil sidik">' + (p ? KriptoMini.sha256(p) : "—") + "</div>";
  }

  const serang = h("button", { class: "btn", type: "button", text: "😈 Serang: coba semua kemungkinan" });
  serang.onclick = () => {
    const p = bersih();
    if (berjalan || !p) return;
    berjalan = true;
    const target = KriptoMini.sha256(p);
    const total = Math.pow(10, p.length);
    let i = 0;
    const mulai = performance.now();
    function potong() {
      if (!root.isConnected) return;
      const akhir = Math.min(total, i + 4000);
      for (; i < akhir; i++) {
        const tebak = String(i).padStart(p.length, "0");
        if (KriptoMini.sha256(tebak) === target) {
          const dtk = (performance.now() - mulai) / 1000;
          kecepatan = (i + 1) / Math.max(dtk, 0.001);
          berjalan = false;
          hasil.innerHTML = '<div class="dm-line big bad"><span>🔓 Ketemu! PIN-nya <b>' + tebak + "</b></span><b>" + angka(i + 1) + " tebakan · " + dtk.toFixed(2).replace(".", ",") + " detik</b></div>" +
            '<div class="dm-note">Penyerang <b>tidak membalik</b> hash-nya — itu memang mustahil. Ia hanya mencoba <b>semua kemungkinan</b> satu per satu, meng-hash tiap tebakan, lalu mencocokkan. Untuk PIN yang pendek, jumlah kemungkinannya terlalu sedikit sehingga habis dicoba dalam hitungan detik.</div>' + tabel();
          return;
        }
      }
      hasil.innerHTML = '<div class="dm-line"><span>Mencoba…</span><b>' + angka(i) + " dari " + angka(total) + "</b></div>";
      setTimeout(potong, 0);
    }
    hasil.innerHTML = "";
    potong();
  };
  pin.addEventListener("input", () => { pin.value = bersih(); hasil.innerHTML = ""; draw(); });

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🔓 <b>Demo: hash tidak bisa dibalik — tapi bisa ditebak</b>" }),
    h("p", { class: "demo-hint", text: "Ketik PIN rahasia (maksimal 6 digit). Server hanya menyimpan hash-nya. Lalu jadilah penyerang yang mencuri hash itu dan coba temukan PIN aslinya." }),
    h("label", { class: "dm-row" }, [h("span", { text: "PIN rahasia: " }), pin]),
    out,
    h("div", { class: "demo-controls" }, [serang]),
    hasil,
  ]));
  draw();
};

/* ---------- Demo: membuat dompet (kunci privat → kunci publik → alamat) ---------- */
DEMOS["buat-dompet"] = function (root) {
  const out = h("div", { class: "dm-out" });
  let priv, sebelum = null;

  function draw(ubahSatu) {
    const Q = KriptoMini.kunciPublik(priv);
    const pubHex = KriptoMini.publikHex(Q);
    const alamat = KriptoMini.alamatEthereum(Q);
    const privHex = KriptoMini.hex(priv);
    const biner = priv.toString(2).padStart(256, "0");
    let banding = "";
    if (ubahSatu && sebelum) {
      let bp = 0, ba = 0;
      for (let i = 0; i < pubHex.length; i++) if (pubHex[i] !== sebelum.pub[i]) bp++;
      for (let i = 0; i < alamat.length; i++) if (alamat[i].toLowerCase() !== sebelum.alamat[i].toLowerCase()) ba++;
      banding = '<div class="dm-line bad"><span>Kunci privat hanya diubah 1 digit, tapi…</span><b>' + bp + " karakter kunci publik & " + ba + " karakter alamat berubah</b></div>";
    }
    sebelum = { pub: pubHex, alamat: alamat };
    out.innerHTML =
      '<div class="krip-blok"><div class="krip-judul">🔑 1. KUNCI PRIVAT — rahasia mutlak</div>' +
      '<div class="krip-hasil ttd">' + privHex + "</div>" +
      '<div class="dm-sub">Hanya angka acak raksasa. Dalam bentuk 256 lemparan koin (1 = gambar, 0 = angka): <span class="krip-mono">' + biner.slice(0, 40) + "…</span></div></div>" +
      '<div class="krip-panah">⬇ dikalikan dengan titik G di kurva secp256k1 · <b class="ok">maju: mudah</b> · <b class="bad">mundur: mustahil</b></div>' +
      '<div class="krip-blok"><div class="krip-judul">🔓 2. KUNCI PUBLIK — boleh diketahui orang</div>' +
      '<div class="krip-hasil sidik">' + pubHex + "</div>" +
      '<div class="dm-sub">Sepasang angka (koordinat x dan y), diawali 04.</div></div>' +
      '<div class="krip-panah">⬇ di-hash dengan Keccak-256, diambil 20 byte terakhir · <b class="ok">maju: mudah</b> · <b class="bad">mundur: mustahil</b></div>' +
      '<div class="krip-blok"><div class="krip-judul">📮 3. ALAMAT ETHEREUM — dibagikan untuk menerima dana</div>' +
      '<div class="krip-hasil ok">' + alamat + "</div>" +
      '<div class="dm-sub">Campuran huruf besar-kecilnya adalah <b>checksum</b>: salah ketik satu karakter bisa terdeteksi dompet.</div></div>' +
      banding +
      '<div class="dm-note">⚠️ <b>Ini kunci dan alamat dengan format asli</b>, dibuat acak di browsermu dan tidak disimpan ke mana pun. <b>Jangan pernah mengirim dana ke alamat ini</b> — kunci privatnya sudah tampil di layar, dan akan hilang begitu halaman ditutup.<br><br>Peluang dua orang mendapat kunci privat yang sama sekitar <b>1 banding 10<sup>77</sup></b>. Karena itu tidak ada lembaga yang perlu "menerbitkan" kunci: kamu cukup mengacaknya sendiri.</div>';
  }

  const baru = h("button", { class: "btn", type: "button", text: "🎲 Buat dompet baru" });
  baru.onclick = () => { priv = KriptoMini.acakKunci(); sebelum = null; draw(false); };
  const satu = h("button", { class: "btn ghost", type: "button", text: "✏️ Ubah 1 digit terakhir kunci privat" });
  satu.onclick = () => { priv = priv ^ 1n; if (priv === 0n) priv = 2n; draw(true); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "👛 <b>Demo: begini sebuah dompet crypto lahir</b>" }),
    h("p", { class: "demo-hint", text: "Tidak ada pendaftaran, tidak ada server. Dompet hanya mengacak satu angka, lalu menghitung dua hal lain darinya — selalu satu arah." }),
    h("div", { class: "demo-controls" }, [baru, satu]),
    out,
  ]));
  priv = KriptoMini.acakKunci();
  draw(false);
};

/* ---------- Demo: tanda tangan digital ECDSA sungguhan ---------- */
DEMOS["tanda-tangan"] = function (root) {
  const andi = KriptoMini.acakKunci(), budi = KriptoMini.acakKunci();
  const kunci = { andi: KriptoMini.kunciPublik(andi), budi: KriptoMini.kunciPublik(budi) };
  const ASLI = "Andi mengirim 0,5 koin ke Budi";
  let sig = null, pesanDitandatangani = "";

  const pesan = h("input", { class: "pc-input lebar krip-isi", type: "text", value: ASLI, "aria-label": "Pesan yang ditandatangani" });
  const diterima = h("input", { class: "pc-input lebar krip-isi", type: "text", value: "", "aria-label": "Pesan yang diterima jaringan" });
  const pemeriksa = h("select", { class: "pc-input lebar", "aria-label": "Kunci publik pemeriksa" }, [
    h("option", { value: "andi", text: "Kunci publik Andi" }),
    h("option", { value: "budi", text: "Kunci publik Budi" }),
  ]);
  const hasilTtd = h("div");
  const hasilCek = h("div");

  function tampilTtd() {
    hasilTtd.innerHTML = sig
      ? '<div class="krip-judul">TANDA TANGAN ANDI (dua angka: r dan s)</div>' +
        '<div class="krip-hasil ttd">r = ' + kripPendek(KriptoMini.hex(sig.r), 16) + "<br>s = " + kripPendek(KriptoMini.hex(sig.s), 16) + "</div>" +
        '<div class="dm-sub">Kunci privat Andi <b>tidak ikut dikirim</b>. Yang dikirim ke jaringan hanya: pesan + tanda tangan ini + kunci publik Andi.</div>'
      : '<div class="dm-sub">Belum ditandatangani. Tekan tombol di atas.</div>';
  }

  function periksa() {
    if (!sig) { hasilCek.innerHTML = ""; return; }
    const siapa = pemeriksa.value;
    const sah = KriptoMini.periksa(diterima.value, sig, kunci[siapa]);
    let alasan;
    if (sah) alasan = "Cocok: pesan ini dibuat oleh pemegang kunci privat Andi, dan <b>tidak berubah satu karakter pun</b> sejak ditandatangani.";
    else if (siapa !== "andi") alasan = "Tanda tangan ini tidak dibuat dengan kunci privat pasangan kunci publik Budi. Seseorang tidak bisa mengaku sebagai Budi hanya dengan menempelkan tanda tangan orang lain.";
    else alasan = "Pesan yang diterima <b>berbeda</b> dari yang ditandatangani, sehingga hash-nya berbeda dan tanda tangannya tidak lagi cocok. Mengubah jumlah atau penerima pasti ketahuan.";
    hasilCek.innerHTML =
      '<div class="dm-line big ' + (sah ? "good" : "bad") + '"><span>' + (sah ? "✅ SAH" : "❌ DITOLAK") + "</span><b>" + (sah ? "diterima jaringan" : "transaksi dibuang") + "</b></div>" +
      '<div class="dm-note">' + alasan + "</div>";
  }

  let jeda = null;
  const periksaNanti = () => { clearTimeout(jeda); jeda = setTimeout(periksa, 120); };
  diterima.addEventListener("input", periksaNanti);
  pemeriksa.addEventListener("change", periksa);

  const tandatangani = h("button", { class: "btn", type: "button", text: "✍️ Andi menandatangani" });
  tandatangani.onclick = () => {
    pesanDitandatangani = pesan.value;
    sig = KriptoMini.tandaTangani(pesanDitandatangani, andi);
    diterima.value = pesanDitandatangani;
    pemeriksa.value = "andi";
    tampilTtd();
    periksa();
  };
  const skenario = (teks, aksi) => {
    const t = h("button", { class: "btn ghost", type: "button", text: teks });
    t.onclick = () => { if (!sig) tandatangani.onclick(); aksi(); periksa(); };
    return t;
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "✍️ <b>Demo: tanda tangan digital sungguhan (ECDSA secp256k1)</b>" }),
    h("p", { class: "demo-hint", text: "Andi dan Budi masing-masing sudah punya sepasang kunci. Andi menandatangani sebuah pesan, lalu jaringan memeriksanya. Setelah itu, jadilah penyerang." }),
    h("div", { class: "krip-blok" }, [
      h("div", { class: "krip-judul", text: "1. DI DOMPET ANDI" }),
      h("label", { class: "pc-row" }, [h("span", { text: "Pesan" }), pesan]),
      h("div", { class: "demo-controls" }, [tandatangani]),
      hasilTtd,
    ]),
    h("div", { class: "krip-blok" }, [
      h("div", { class: "krip-judul", text: "2. DIPERIKSA JARINGAN" }),
      h("label", { class: "pc-row" }, [h("span", { text: "Pesan yang tiba" }), diterima]),
      h("label", { class: "pc-row" }, [h("span", { text: "Diperiksa dengan" }), pemeriksa]),
      hasilCek,
    ]),
    h("div", { class: "krip-judul", text: "😈 COBA JADI PENYERANG" }),
    h("div", { class: "demo-controls" }, [
      skenario("Ubah jumlah jadi 50 koin", () => { diterima.value = diterima.value.replace("0,5", "50"); }),
      skenario("Ganti penerima jadi Cici", () => { diterima.value = diterima.value.replace("Budi", "Cici"); }),
      skenario("Mengaku sebagai Budi", () => { pemeriksa.value = "budi"; }),
      skenario("↺ Kembalikan", () => { diterima.value = pesanDitandatangani; pemeriksa.value = "andi"; }),
    ]),
    h("div", { class: "demo-controls" }, [
      (function () {
        const t = h("button", { class: "btn ghost", type: "button", text: "🔁 Tanda tangani ulang pesan yang sama" });
        t.onclick = () => {
          const lama = sig;
          tandatangani.onclick();
          if (lama) hasilTtd.insertAdjacentHTML("beforeend", '<div class="dm-note">Tanda tangan untuk pesan yang <b>sama</b> kini berbeda angkanya — karena setiap penandatanganan memakai angka acak sekali pakai — namun <b>tetap sah</b>. Yang tidak mungkin: membuat tanda tangan sah untuk pesan <b>lain</b> tanpa kunci privat.</div>');
        };
        return t;
      })(),
    ]),
  ]));
  tampilTtd();
};

/* ---------- Demo: perjalanan satu transaksi ---------- */
DEMOS["perjalanan-transaksi"] = function (root) {
  const privA = KriptoMini.acakKunci();
  const QA = KriptoMini.kunciPublik(privA);
  const alamatA = KriptoMini.alamatEthereum(QA);
  const alamatB = KriptoMini.alamatEthereum(KriptoMini.kunciPublik(KriptoMini.acakKunci()));
  const alamatC = KriptoMini.alamatEthereum(KriptoMini.kunciPublik(KriptoMini.acakKunci()));
  const SALDO = 2, URUT = 7, URUT_TERPAKAI = [4, 5, 6];
  const tx = { dari: alamatA, ke: alamatB, jumlah: "0,5", urut: URUT };
  const teksTx = (t) => "dari: " + t.dari + "\nke: " + t.ke + "\njumlah: " + t.jumlah + " koin\nnomor urut: " + t.urut;
  const txAsli = teksTx(tx);
  const txid = KriptoMini.sha256(txAsli);
  const sig = KriptoMini.tandaTangani(txAsli, privA);

  let langkah = 0, serangan = "tidak";
  const isi = h("div");
  const LANGKAH = ["Dompet Andi", "Menyusun transaksi", "ID transaksi", "Menandatangani", "Disiarkan ke jaringan", "Diperiksa node", "Masuk blok"];

  function paketTiba() {
    const t = Object.assign({}, tx);
    if (serangan === "jumlah") t.jumlah = "50";
    if (serangan === "penerima") t.ke = alamatC;
    return t;
  }
  function pemeriksaan() {
    const t = paketTiba();
    const teks = teksTx(t);
    const cek = [
      ["Kunci publik cocok dengan alamat pengirim", KriptoMini.alamatEthereum(QA) === t.dari, "hash kunci publik = " + kripPendek(KriptoMini.alamatEthereum(QA), 6)],
      ["Tanda tangan sah untuk isi paket ini", KriptoMini.periksa(teks, sig, QA), "diperiksa dengan kunci publik Andi"],
      ["Saldo cukup", parseFloat(t.jumlah.replace(",", ".")) <= SALDO, "saldo Andi " + SALDO + " koin, dikirim " + t.jumlah],
      ["Nomor urut belum pernah dipakai", !(serangan === "ulang" || URUT_TERPAKAI.includes(t.urut)), serangan === "ulang" ? "nomor urut 7 sudah tercatat kemarin" : "terakhir dipakai: 6"],
    ];
    return { cek: cek, lolos: cek.every((c) => c[1]), teks: teks };
  }

  function draw() {
    const kotak = (judul, konten) => '<div class="krip-blok"><div class="krip-judul">' + judul + "</div>" + konten + "</div>";
    let html = '<div class="krip-langkah">' + LANGKAH.map((l, i) => '<span class="' + (i === langkah ? "aktif" : i < langkah ? "lewat" : "") + '">' + (i + 1) + "</span>").join("") + "</div>";
    html += '<div class="krip-judul">LANGKAH ' + (langkah + 1) + " DARI " + LANGKAH.length + ": " + LANGKAH[langkah].toUpperCase() + "</div>";
    if (langkah === 0) {
      html += kotak("🔑 KUNCI PRIVAT", '<div class="krip-hasil ttd">•••••••••••••••• (tersimpan di dompet, tidak pernah keluar)</div>') +
        kotak("🔓 KUNCI PUBLIK", '<div class="krip-hasil sidik">' + kripPendek(KriptoMini.publikHex(QA), 20) + "</div>") +
        kotak("📮 ALAMAT ANDI", '<div class="krip-hasil ok">' + alamatA + '</div><div class="dm-sub">Saldo tercatat di blockchain: ' + SALDO + " koin.</div>");
    } else if (langkah === 1) {
      html += kotak("📝 ISI TRANSAKSI", '<div class="krip-hasil biasa krip-pre">' + kripEsc(txAsli) + "</div>") +
        '<div class="dm-note">Isinya <b>terbuka, tidak dirahasiakan</b>. <i>Nomor urut</i> dipakai agar transaksi yang sama tidak bisa dikirim dua kali.</div>';
    } else if (langkah === 2) {
      html += kotak("#️⃣ SHA-256 DARI ISI TRANSAKSI", '<div class="krip-hasil sidik">' + txid + "</div>") +
        '<div class="dm-note">Sidik jari ini menjadi <b>ID transaksi</b> — nomor resi yang bisa kamu cari di <i>block explorer</i>. Ubah satu karakter isi transaksi, ID-nya berubah total.</div>';
    } else if (langkah === 3) {
      html += kotak("✍️ TANDA TANGAN (r, s)", '<div class="krip-hasil ttd">r = ' + kripPendek(KriptoMini.hex(sig.r), 14) + "<br>s = " + kripPendek(KriptoMini.hex(sig.s), 14) + "</div>") +
        '<div class="dm-note">Dibuat dari <b>hash isi transaksi + kunci privat Andi</b>. Tanda tangan ini hanya berlaku untuk isi yang persis ini.</div>';
    } else if (langkah === 4) {
      const pilih = (kode, teks) => '<label class="krip-pilih"><input type="radio" name="serang" value="' + kode + '"' + (serangan === kode ? " checked" : "") + "> " + teks + "</label>";
      html += kotak("📦 PAKET YANG BERJALAN DI JARINGAN", '<div class="dm-sub">isi transaksi + tanda tangan + kunci publik Andi — <b>tanpa kunci privat</b></div>') +
        '<div class="krip-judul">😈 DI TENGAH JALAN, PENYERANG…</div>' +
        pilih("tidak", "tidak berbuat apa-apa") + pilih("jumlah", "mengubah jumlah menjadi 50 koin") + pilih("penerima", "mengganti penerima ke alamatnya sendiri") + pilih("ulang", "mengirim ulang transaksi lama Andi yang sudah pernah diproses");
    } else if (langkah === 5) {
      const p = pemeriksaan();
      html += kotak("📦 ISI YANG TIBA DI NODE", '<div class="krip-hasil biasa krip-pre">' + kripEsc(p.teks) + "</div>") +
        p.cek.map((c) => '<div class="dm-line ' + (c[1] ? "good" : "bad") + '"><span>' + (c[1] ? "✅ " : "❌ ") + c[0] + '<br><i class="dm-sub">' + c[2] + "</i></span></div>").join("") +
        '<div class="dm-line big ' + (p.lolos ? "good" : "bad") + '"><span>' + (p.lolos ? "Diterima — masuk antrean blok" : "Ditolak — tidak akan pernah masuk blok") + "</span></div>";
    } else {
      const p = pemeriksaan();
      if (!p.lolos) {
        html += '<div class="dm-line big bad"><span>Transaksi ini ditolak di langkah sebelumnya, jadi tidak ada yang masuk blok.</span></div><div class="dm-note">Kembali ke langkah 5 dan pilih "tidak berbuat apa-apa" untuk melihat transaksi yang sah tercatat.</div>';
      } else {
        const hashSebelum = "0000" + KriptoMini.sha256("blok 812.344").slice(4);
        const hashBlok = KriptoMini.sha256(hashSebelum + txid);
        html += kotak("🧱 BLOK #812.345", '<div class="dm-line"><span>Hash blok sebelumnya</span><b>' + kripPendek(hashSebelum, 8) + '</b></div><div class="dm-line"><span>ID transaksi di dalamnya</span><b>' + kripPendek(txid, 8) + '</b></div><div class="dm-line"><span>Hash blok ini</span><b>' + kripPendek(hashBlok, 8) + "</b></div>") +
          '<div class="dm-note">Transaksi Andi kini terkunci oleh hash blok, dan blok ini terkunci ke blok sebelumnya. Mengubah transaksinya sekarang berarti merusak hash blok ini dan semua blok sesudahnya. <i>(Disederhanakan: blok sungguhan berisi ribuan transaksi yang diringkas dengan Merkle tree.)</i></div>';
      }
    }
    isi.innerHTML = html;
    isi.querySelectorAll('input[name="serang"]').forEach((r) => r.addEventListener("change", () => { serangan = r.value; }));
    mundur.disabled = langkah === 0;
    maju.disabled = langkah === LANGKAH.length - 1;
  }

  const mundur = h("button", { class: "btn ghost", type: "button", text: "← Sebelumnya" });
  const maju = h("button", { class: "btn", type: "button", text: "Langkah berikutnya →" });
  mundur.onclick = () => { if (langkah > 0) { langkah--; draw(); } };
  maju.onclick = () => { if (langkah < LANGKAH.length - 1) { langkah++; draw(); } };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🚚 <b>Demo: perjalanan 0,5 koin dari Andi ke Budi</b>" }),
    h("p", { class: "demo-hint", text: "Semua perhitungan di demo ini sungguhan: kunci, hash, dan tanda tangan dibuat di browsermu. Di langkah 5, kamu bisa menjadi penyerang." }),
    isi,
    h("div", { class: "demo-controls" }, [mundur, maju]),
  ]));
  draw();
};

/* ---------- Demo: Merkle tree ---------- */
DEMOS["pohon-merkle"] = function (root) {
  const AWAL = ["Andi → Budi: 5", "Budi → Cici: 2", "Cici → Deni: 1", "Deni → Eka: 3"];
  const isian = AWAL.map((t, i) => h("input", { class: "pc-input lebar krip-isi", type: "text", value: t, "aria-label": "Transaksi " + (i + 1) }));
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  let bukti = -1;

  function hitung(txs) {
    const d = txs.map((t) => KriptoMini.sha256(t));
    const a = KriptoMini.sha256(d[0] + d[1]), b = KriptoMini.sha256(d[2] + d[3]);
    return { daun: d, tengah: [a, b], akar: KriptoMini.sha256(a + b) };
  }
  const asli = hitung(AWAL);

  function draw() {
    const kini = hitung(isian.map((i) => i.value));
    const kelas = (x, y, peran) => {
      if (peran) return "vbox " + peran;
      return "vbox " + (x === y ? "ok" : "bad");
    };
    const peranDaun = (i) => (bukti < 0 ? "" : i === bukti ? "accent2 aktif" : i === (bukti ^ 1) ? "accent aktif" : "");
    const peranTengah = (j) => (bukti < 0 ? "" : j === (bukti >> 1) ? "" : "accent aktif");
    const kotak = (x, y, w, teks, cls, label) =>
      '<rect x="' + (x - w / 2) + '" y="' + y + '" width="' + w + '" height="34" rx="8" class="' + cls + '"/>' +
      '<text x="' + x + '" y="' + (y + 14) + '" text-anchor="middle" class="vt-xs" style="font-size:9.5px">' + label + "</text>" +
      '<text x="' + x + '" y="' + (y + 27) + '" text-anchor="middle" class="vt-xs krip-mono" style="font-size:10.5px">' + teks.slice(0, 8) + "…</text>";
    const xd = [65, 195, 325, 455], xt = [130, 390];
    let g = '<svg viewBox="0 0 520 206" class="viz-svg" role="img" aria-label="Pohon Merkle empat transaksi">';
    xt.forEach((x, j) => { g += '<line x1="260" y1="44" x2="' + x + '" y2="86" class="vline"/>'; [0, 1].forEach((k) => { g += '<line x1="' + x + '" y1="120" x2="' + xd[j * 2 + k] + '" y2="160" class="vline"/>'; }); });
    g += kotak(260, 10, 150, kini.akar, kelas(kini.akar, asli.akar), "MERKLE ROOT");
    xt.forEach((x, j) => { g += kotak(x, 86, 120, kini.tengah[j], kelas(kini.tengah[j], asli.tengah[j], peranTengah(j)), j === 0 ? "hash(1+2)" : "hash(3+4)"); });
    xd.forEach((x, i) => { g += kotak(x, 160, 112, kini.daun[i], kelas(kini.daun[i], asli.daun[i], peranDaun(i)), "hash Tx" + (i + 1)); });
    g += "</svg>";
    kanvas.innerHTML = g;

    const berubah = kini.akar !== asli.akar;
    let catatan = berubah
      ? "Satu transaksi diubah → hash-nya berubah (merah) → hash gabungan di atasnya berubah → <b>Merkle root berubah</b>. Karena root tersimpan di header blok, perubahan sekecil apa pun langsung ketahuan."
      : "Keempat transaksi diringkas menjadi satu Merkle root. Coba ubah satu huruf atau angka di salah satu transaksi.";
    if (bukti >= 0) {
      catatan = "<b>Bukti bahwa Tx" + (bukti + 1) + " ada di blok ini</b> hanya butuh 2 hash (biru): hash Tx" + ((bukti ^ 1) + 1) + " dan hash gabungan pasangan lainnya. Dengan keduanya, siapa pun bisa menghitung ulang sampai ke root dan mencocokkannya dengan header blok — tanpa melihat transaksi lain.";
    }
    out.innerHTML =
      '<div class="dm-line ' + (berubah ? "bad" : "good") + '"><span>Merkle root sekarang</span><b class="krip-mono">' + kripPendek(kini.akar, 8) + "</b></div>" +
      '<div class="dm-line"><span>Merkle root di header blok</span><b class="krip-mono">' + kripPendek(asli.akar, 8) + "</b></div>" +
      '<div class="dm-note">' + catatan + "</div>";
  }
  isian.forEach((i) => i.addEventListener("input", () => { bukti = -1; draw(); }));

  const tombolBukti = [0, 1, 2, 3].map((i) => {
    const t = h("button", { class: "btn ghost", type: "button", text: "🔎 Buktikan Tx" + (i + 1) });
    t.onclick = () => { isian.forEach((x, k) => { x.value = AWAL[k]; }); bukti = i; draw(); };
    return t;
  });
  const reset = h("button", { class: "btn ghost", type: "button", text: "↺ Kembalikan" });
  reset.onclick = () => { isian.forEach((x, k) => { x.value = AWAL[k]; }); bukti = -1; draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌳 <b>Demo: empat transaksi, satu Merkle root</b>" }),
    h("p", { class: "demo-hint", text: "Setiap kotak berisi 8 karakter pertama hash SHA-256 sungguhan. Ubah salah satu transaksi, atau minta bukti bahwa sebuah transaksi ada di dalam blok." }),
    h("div", { class: "pc-form" }, isian.map((inp, i) => h("label", { class: "pc-row" }, [h("span", { text: "Tx" + (i + 1) }), inp]))),
    kanvas,
    h("div", { class: "demo-controls" }, tombolBukti.concat([reset])),
    out,
  ]));
  draw();
};


/* ---------- Pembantu grafik permintaan & penawaran ----------
   Permintaan: Qd = a − 2P   ·   Penawaran: Qs = c + 3P   (P = ribu Rp/kg, Q = kg/hari) */
const PASAR = { a: 120, c: -30, PMAKS: 70, QMAKS: 160 };
const pasarX = (q) => 52 + (q / PASAR.QMAKS) * 450;
const pasarY = (p) => 226 - (p / PASAR.PMAKS) * 206;
const pasarQd = (a, p) => a - 2 * p;
const pasarQs = (c, p) => c + 3 * p;
const pasarSeimbang = (a, c) => { const p = (a - c) / 5; return { p: p, q: a - 2 * p }; };
function pasarJalur(fnQ) {
  let d = "", baru = true;
  for (let p = 0; p <= PASAR.PMAKS + 0.001; p += 0.5) {
    const q = fnQ(p);
    if (q < 0 || q > PASAR.QMAKS) { baru = true; continue; }
    d += (baru ? "M" : "L") + pasarX(q).toFixed(1) + " " + pasarY(p).toFixed(1) + " ";
    baru = false;
  }
  return d;
}
function pasarKerangka() {
  let g = '<line x1="52" y1="226" x2="506" y2="226" class="vaxis"/><line x1="52" y1="16" x2="52" y2="226" class="vaxis"/>';
  for (let p = 0; p <= 70; p += 10) g += '<text x="46" y="' + (pasarY(p) + 4).toFixed(1) + '" text-anchor="end" class="vt-xs">' + p + "</text>";
  for (let q = 0; q <= 160; q += 40) g += '<text x="' + pasarX(q).toFixed(1) + '" y="242" text-anchor="middle" class="vt-xs">' + q + "</text>";
  g += '<text x="279" y="258" text-anchor="middle" class="vt-xs">Jumlah (kg per hari)</text>';
  g += '<text x="14" y="121" text-anchor="middle" class="vt-xs" transform="rotate(-90 14 121)">Harga (ribu Rp/kg)</text>';
  return g;
}
const rb = (v) => (Math.round(v * 10) / 10).toString().replace(".", ",");

/* ---------- Demo: keseimbangan pasar ---------- */
DEMOS["pasar-keseimbangan"] = function (root) {
  let harga = 40, pemutar = null;
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const sl = h("input", { type: "range", min: "10", max: "55", step: "1", value: "40", class: "dm-range" });
  const lb = h("b", { text: "Rp40.000" });

  function draw() {
    const qd = pasarQd(PASAR.a, harga), qs = Math.max(0, pasarQs(PASAR.c, harga));
    const e = pasarSeimbang(PASAR.a, PASAR.c);
    let g = '<svg viewBox="0 0 520 266" class="viz-svg" role="img" aria-label="Kurva permintaan dan penawaran cabai">' + pasarKerangka();
    g += '<path d="' + pasarJalur((p) => pasarQd(PASAR.a, p)) + '" class="garis-permintaan"/>';
    g += '<path d="' + pasarJalur((p) => pasarQs(PASAR.c, p)) + '" class="garis-penawaran"/>';
    g += '<text x="' + pasarX(112).toFixed(1) + '" y="' + (pasarY(4) - 8).toFixed(1) + '" class="vt-xs teks-permintaan">Permintaan</text>';
    g += '<text x="' + pasarX(128).toFixed(1) + '" y="' + (pasarY(52) - 6).toFixed(1) + '" class="vt-xs teks-penawaran">Penawaran</text>';
    g += '<line x1="52" y1="' + pasarY(e.p) + '" x2="' + pasarX(e.q) + '" y2="' + pasarY(e.p) + '" class="vline dim"/><line x1="' + pasarX(e.q) + '" y1="' + pasarY(e.p) + '" x2="' + pasarX(e.q) + '" y2="226" class="vline dim"/>';
    g += '<circle cx="' + pasarX(e.q) + '" cy="' + pasarY(e.p) + '" r="6" class="titik-lancar"/>';
    g += '<line x1="52" y1="' + pasarY(harga).toFixed(1) + '" x2="506" y2="' + pasarY(harga).toFixed(1) + '" class="garis-ambang"/>';
    if (qd !== qs) g += '<line x1="' + pasarX(Math.min(qd, qs)).toFixed(1) + '" y1="' + pasarY(harga).toFixed(1) + '" x2="' + pasarX(Math.max(qd, qs)).toFixed(1) + '" y2="' + pasarY(harga).toFixed(1) + '" class="garis-selisih"/>';
    g += '<circle cx="' + pasarX(qd).toFixed(1) + '" cy="' + pasarY(harga).toFixed(1) + '" r="5" class="titik-permintaan"/><circle cx="' + pasarX(qs).toFixed(1) + '" cy="' + pasarY(harga).toFixed(1) + '" r="5" class="titik-penawaran"/>';
    g += "</svg>";
    kanvas.innerHTML = g;

    let status, catatan;
    if (qs > qd) {
      status = '<div class="dm-line big bad"><span>📦 Kelebihan pasokan (surplus)</span><b>' + (qs - qd) + " kg tak laku</b></div>";
      catatan = "Pada harga ini penjual membawa lebih banyak cabai daripada yang mau dibeli. Cabai menumpuk dan bisa busuk, jadi penjual <b>mulai menurunkan harga</b>. Saat harga turun, lebih banyak pembeli tertarik dan sebagian penjual menahan barangnya — selisihnya mengecil.";
    } else if (qd > qs) {
      status = '<div class="dm-line big bad"><span>🏃 Kekurangan (shortage)</span><b>' + (qd - qs) + " kg kurang</b></div>";
      catatan = "Pada harga ini lebih banyak orang ingin membeli daripada cabai yang tersedia. Pembeli berebut dan sebagian rela membayar lebih, jadi <b>harga terdorong naik</b>. Harga yang lebih tinggi menarik penjual membawa lebih banyak cabai — selisihnya mengecil.";
    } else {
      status = '<div class="dm-line big good"><span>⚖️ Seimbang</span><b>' + qd + " kg terjual</b></div>";
      catatan = "Di harga <b>Rp" + (e.p * 1000).toLocaleString("id-ID") + "/kg</b>, jumlah yang ingin dibeli sama persis dengan jumlah yang ingin dijual. Tidak ada yang menumpuk, tidak ada yang berebut. Inilah <b>harga keseimbangan</b> — tidak ditetapkan siapa pun, melainkan terbentuk dari tarik-menarik pembeli dan penjual.";
    }
    out.innerHTML =
      '<div class="dm-line"><span>🛒 Pembeli ingin membeli <i class="dm-sub">(titik biru)</i></span><b>' + qd + " kg</b></div>" +
      '<div class="dm-line"><span>🧺 Penjual ingin menjual <i class="dm-sub">(titik oranye)</i></span><b>' + qs + " kg</b></div>" +
      status + '<div class="dm-note">' + catatan + "</div>";
    lb.textContent = "Rp" + (harga * 1000).toLocaleString("id-ID");
    sl.value = String(harga);
  }
  function berhenti() { if (pemutar) { clearInterval(pemutar); pemutar = null; } }
  sl.oninput = () => { berhenti(); harga = parseInt(sl.value, 10); draw(); };
  const jalan = h("button", { class: "btn", type: "button", text: "▶ Biarkan pasar bekerja" });
  jalan.onclick = () => {
    berhenti();
    pemutar = setInterval(() => {
      if (!root.isConnected) { berhenti(); return; }
      const e = pasarSeimbang(PASAR.a, PASAR.c).p;
      if (harga === e) { berhenti(); return; }
      harga += harga > e ? -1 : 1;
      draw();
    }, 260);
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🌶️ <b>Demo: harga cabai di sebuah pasar</b>" }),
    h("p", { class: "demo-hint", text: "Garis biru = berapa kg yang ingin dibeli pembeli di setiap harga. Garis oranye = berapa kg yang ingin dijual pedagang. Geser harganya, atau biarkan pasar mencari harganya sendiri." }),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Harga per kg: " }), sl, lb]),
    h("div", { class: "demo-controls" }, [jalan]),
    out,
  ]));
  draw();
};

/* ---------- Demo: pergeseran kurva & harga eceran tertinggi ---------- */
DEMOS["geser-kurva"] = function (root) {
  const s = { dD: 0, dS: 0, het: false, nilaiHet: 25, cerita: "" };
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const rentang = (label, attrs, kunci, format) => {
    const inp = h("input", Object.assign({ type: "range", class: "dm-range" }, attrs));
    const b = h("b", { text: format(parseFloat(attrs.value)) });
    inp.oninput = () => { s[kunci] = parseFloat(inp.value); s.cerita = ""; b.textContent = format(s[kunci]); draw(); };
    return { el: h("label", { class: "dm-row" }, [h("span", { text: label }), inp, b]), inp: inp, b: b, format: format };
  };
  const tanda = (v) => (v > 0 ? "+" : "") + v + " kg";
  const rD = rentang("Permintaan bergeser: ", { min: "-40", max: "40", step: "5", value: "0" }, "dD", tanda);
  const rS = rentang("Penawaran bergeser: ", { min: "-40", max: "40", step: "5", value: "0" }, "dS", tanda);
  const rH = rentang("Batas harga (HET): ", { min: "10", max: "50", step: "1", value: "25" }, "nilaiHet", (v) => "Rp" + (v * 1000).toLocaleString("id-ID"));
  const cek = h("input", { type: "checkbox" });
  cek.onchange = () => { s.het = cek.checked; s.cerita = ""; draw(); };

  function setel(dD, dS, het, cerita) {
    s.dD = dD; s.dS = dS; s.het = het; s.cerita = cerita;
    rD.inp.value = dD; rD.b.textContent = rD.format(dD);
    rS.inp.value = dS; rS.b.textContent = rS.format(dS);
    cek.checked = het;
    draw();
  }

  function draw() {
    const a = PASAR.a + s.dD, c = PASAR.c + s.dS;
    const lama = pasarSeimbang(PASAR.a, PASAR.c), baru = pasarSeimbang(a, c);
    let g = '<svg viewBox="0 0 520 266" class="viz-svg" role="img" aria-label="Pergeseran kurva permintaan dan penawaran">' + pasarKerangka();
    g += '<path d="' + pasarJalur((p) => pasarQd(PASAR.a, p)) + '" class="garis-permintaan pudar"/>';
    g += '<path d="' + pasarJalur((p) => pasarQs(PASAR.c, p)) + '" class="garis-penawaran pudar"/>';
    g += '<path d="' + pasarJalur((p) => pasarQd(a, p)) + '" class="garis-permintaan"/>';
    g += '<path d="' + pasarJalur((p) => pasarQs(c, p)) + '" class="garis-penawaran"/>';
    g += '<circle cx="' + pasarX(lama.q).toFixed(1) + '" cy="' + pasarY(lama.p).toFixed(1) + '" r="5" class="titik-pudar"/>';
    const binding = s.het && s.nilaiHet < baru.p;
    if (s.het) {
      g += '<line x1="52" y1="' + pasarY(s.nilaiHet).toFixed(1) + '" x2="506" y2="' + pasarY(s.nilaiHet).toFixed(1) + '" class="garis-ambang"/>';
      g += '<text x="502" y="' + (pasarY(s.nilaiHet) - 6).toFixed(1) + '" text-anchor="end" class="vt-xs">HET</text>';
    }
    if (binding) {
      const qd = pasarQd(a, s.nilaiHet), qs = Math.max(0, pasarQs(c, s.nilaiHet));
      g += '<line x1="' + pasarX(qs).toFixed(1) + '" y1="' + pasarY(s.nilaiHet).toFixed(1) + '" x2="' + pasarX(Math.min(qd, PASAR.QMAKS)).toFixed(1) + '" y2="' + pasarY(s.nilaiHet).toFixed(1) + '" class="garis-selisih"/>';
    } else {
      g += '<circle cx="' + pasarX(baru.q).toFixed(1) + '" cy="' + pasarY(baru.p).toFixed(1) + '" r="6" class="titik-lancar"/>';
    }
    g += "</svg>";
    kanvas.innerHTML = g;

    const persen = (x, y) => ((y / x - 1) * 100).toFixed(0);
    let html =
      '<div class="dm-line"><span>Harga keseimbangan</span><b>Rp' + (lama.p * 1000).toLocaleString("id-ID") + " → Rp" + Math.round(baru.p * 1000).toLocaleString("id-ID") + (baru.p !== lama.p ? " (" + (baru.p > lama.p ? "+" : "") + persen(lama.p, baru.p) + "%)" : "") + "</b></div>" +
      '<div class="dm-line"><span>Jumlah terjual</span><b>' + rb(lama.q) + " kg → " + rb(binding ? Math.max(0, pasarQs(c, s.nilaiHet)) : baru.q) + " kg</b></div>";
    if (binding) {
      const qd = pasarQd(a, s.nilaiHet), qs = Math.max(0, pasarQs(c, s.nilaiHet));
      html += '<div class="dm-line big bad"><span>🚫 Barang langka</span><b>' + rb(qd - qs) + " kg kekurangan</b></div>" +
        '<div class="dm-note">Harga dipaksa tidak boleh lebih dari Rp' + (s.nilaiHet * 1000).toLocaleString("id-ID") + ". Di harga itu pembeli ingin <b>" + rb(qd) + " kg</b>, tapi pedagang hanya mau menjual <b>" + rb(qs) + " kg</b> — sebagian merugi bila menjual semurah itu. Hasilnya bukan cabai murah untuk semua orang, melainkan <b>rak kosong, antrean, penimbunan, dan pasar gelap</b> dengan harga di atas HET.</div>";
    } else {
      let catatan = s.cerita;
      if (!catatan) {
        if (s.dD === 0 && s.dS === 0) catatan = "Kurva pudar adalah keadaan awal. Geser salah satu kurva, atau pilih sebuah kejadian di atas.";
        else if (s.dD !== 0 && s.dS === 0) catatan = s.dD > 0 ? "Permintaan naik: harga <b>dan</b> jumlah terjual sama-sama naik." : "Permintaan turun: harga <b>dan</b> jumlah terjual sama-sama turun.";
        else if (s.dS !== 0 && s.dD === 0) catatan = s.dS > 0 ? "Penawaran naik: harga turun, jumlah terjual naik — keduanya bergerak berlawanan." : "Penawaran turun: harga naik, jumlah terjual turun — keduanya bergerak berlawanan.";
        else catatan = "Dua kurva bergeser bersamaan: arah salah satunya (harga atau jumlah) bergantung pada pergeseran mana yang lebih besar.";
      }
      html += '<div class="dm-note">' + catatan + "</div>";
    }
    out.innerHTML = html;
  }

  const kejadian = (teks, aksi) => { const t = h("button", { class: "btn ghost", type: "button", text: teks }); t.onclick = aksi; return t; };
  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📉 <b>Demo: apa yang terjadi saat kurvanya bergeser?</b>" }),
    h("p", { class: "demo-hint", text: "Pasar cabai yang sama. Pilih sebuah kejadian dan bandingkan harga serta jumlah terjual sebelum dan sesudahnya." }),
    h("div", { class: "demo-controls" }, [
      kejadian("🌧️ Hujan terus, panen gagal", () => setel(0, -30, false, "Panen gagal <b>menggeser penawaran ke kiri</b>: pada harga berapa pun, cabai yang tersedia lebih sedikit. Harga naik, <b>jumlah terjual turun</b>. Pembeli yang tetap membeli adalah yang paling membutuhkan atau paling mampu membayar.")),
      kejadian("🎉 Menjelang Lebaran", () => setel(30, 0, false, "Semua orang memasak <b>menggeser permintaan ke kanan</b>. Harga naik, dan kali ini <b>jumlah terjual juga naik</b> — pedagang terdorong membawa lebih banyak barang. Harga sama-sama naik seperti saat panen gagal, tapi penyebabnya berbeda: lihat arah jumlahnya.")),
      kejadian("🚜 Panen raya", () => setel(0, 35, false, "Panen melimpah <b>menggeser penawaran ke kanan</b>. Harga jatuh dan jumlah terjual naik. Petani bisa rugi walau panennya besar — inilah alasan harga komoditas pertanian sering naik-turun tajam.")),
      kejadian("🏷️ Pemerintah menetapkan HET", () => { setel(0, -30, true, ""); rH.inp.value = 25; s.nilaiHet = 25; rH.b.textContent = rH.format(25); draw(); }),
      kejadian("↺ Awal", () => setel(0, 0, false, "")),
    ]),
    kanvas,
    rD.el, rS.el,
    h("label", { class: "dm-row" }, [cek, h("span", { text: " Pasang harga eceran tertinggi (HET)" })]),
    rH.el,
    out,
  ]));
  draw();
};

/* ---------- Demo: elastisitas harga & pendapatan ---------- */
DEMOS["elastisitas-harga"] = function (root) {
  const PRODUK = {
    beras: { nama: "Beras", e: 0.2, harga: 14000, jumlah: 1000, satuan: "kg" },
    kopi: { nama: "Kopi susu kekinian", e: 2.0, harga: 25000, jumlah: 400, satuan: "gelas" },
    tiket: { nama: "Tiket bioskop", e: 1.0, harga: 50000, jumlah: 300, satuan: "tiket" },
  };
  let pilih = "kopi", e = PRODUK.kopi.e, ubah = 10;
  const out = h("div", { class: "dm-out" });
  const slE = h("input", { type: "range", min: "0", max: "3", step: "0.1", value: String(e), class: "dm-range" });
  const lbE = h("b", { text: rb(e) });
  const slU = h("input", { type: "range", min: "-30", max: "30", step: "5", value: "10", class: "dm-range" });
  const lbU = h("b", { text: "+10%" });
  const rp = (v) => "Rp" + Math.round(v).toLocaleString("id-ID");

  function draw() {
    const p = PRODUK[pilih];
    const hargaBaru = p.harga * (1 + ubah / 100);
    const jumlahBaru = p.jumlah * Math.pow(1 + ubah / 100, -e);
    const pendLama = p.harga * p.jumlah, pendBaru = hargaBaru * jumlahBaru;
    const dPend = (pendBaru / pendLama - 1) * 100;
    const maks = Math.max(pendLama, pendBaru);
    const jenis = e < 0.95 ? "inelastis" : e > 1.05 ? "elastis" : "uniter (elastisitas ≈ 1)";
    let catatan;
    if (ubah === 0) catatan = "Geser perubahan harga untuk melihat reaksi pembeli.";
    else if (jenis === "inelastis") catatan = "Pembeli <b>sulit menghindar</b> — mereka tetap butuh, dan pilihan penggantinya sedikit. Jumlah terjual hanya berubah " + Math.abs((jumlahBaru / p.jumlah - 1) * 100).toFixed(1).replace(".", ",") + "%, sehingga pendapatan bergerak <b>searah dengan harga</b>. Inilah wujud nyata <i>pricing power</i>.";
    else if (jenis === "elastis") catatan = "Pembeli <b>sangat peka harga</b> — banyak pilihan pengganti dan barangnya tidak wajib. Jumlah terjual berubah jauh lebih besar dari perubahan harga, sehingga pendapatan bergerak <b>berlawanan dengan harga</b>. Menaikkan harga justru merugikan.";
    else catatan = "Perubahan jumlah terjual kira-kira setara dengan perubahan harga, sehingga pendapatan <b>hampir tidak berubah</b>.";
    out.innerHTML =
      '<div class="dm-line"><span>Jenis permintaan</span><b>' + jenis + "</b></div>" +
      '<div class="dm-line"><span>Harga</span><b>' + rp(p.harga) + " → " + rp(hargaBaru) + "</b></div>" +
      '<div class="dm-line"><span>Jumlah terjual per hari</span><b>' + rb(p.jumlah) + " → " + rb(jumlahBaru) + " " + p.satuan + "</b></div>" +
      '<div class="dm-bar"><span>Sebelum</span><div class="dm-track"><div class="dm-fill" style="width:' + ((pendLama / maks) * 100).toFixed(1) + '%"></div></div><b>' + rb(pendLama / 1e6) + " jt</b></div>" +
      '<div class="dm-bar"><span>Sesudah</span><div class="dm-track"><div class="dm-fill ' + (dPend >= 0 ? "ok" : "bad") + '" style="width:' + ((pendBaru / maks) * 100).toFixed(1) + '%"></div></div><b>' + rb(pendBaru / 1e6) + " jt</b></div>" +
      '<div class="dm-line big ' + (dPend >= 0 ? "good" : "bad") + '"><span>Pendapatan per hari</span><b>' + (dPend >= 0 ? "+" : "") + dPend.toFixed(1).replace(".", ",") + "%</b></div>" +
      '<div class="dm-note">' + catatan + "<br><br><i>Angka elastisitas tiap produk adalah ilustrasi untuk memahami konsep.</i></div>";
  }
  const tombolProduk = Object.keys(PRODUK).map((k) => {
    const t = h("button", { class: "btn ghost", type: "button", text: PRODUK[k].nama });
    t.onclick = () => { pilih = k; e = PRODUK[k].e; slE.value = String(e); lbE.textContent = rb(e); draw(); };
    return t;
  });
  slE.oninput = () => { e = parseFloat(slE.value); lbE.textContent = rb(e); draw(); };
  slU.oninput = () => { ubah = parseInt(slU.value, 10); lbU.textContent = (ubah > 0 ? "+" : "") + ubah + "%"; draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧮 <b>Demo: naikkan harga — pendapatan naik atau turun?</b>" }),
    h("p", { class: "demo-hint", text: "Pilih produk, lalu ubah harganya. Elastisitas menunjukkan seberapa besar jumlah terjual bereaksi terhadap perubahan harga." }),
    h("div", { class: "demo-controls" }, tombolProduk),
    h("label", { class: "dm-row" }, [h("span", { text: "Perubahan harga: " }), slU, lbU]),
    h("label", { class: "dm-row" }, [h("span", { text: "Elastisitas: " }), slE, lbE]),
    out,
  ]));
  draw();
};

/* ---------- Demo: keranjang IHK & andil inflasi ---------- */
DEMOS["keranjang-ihk"] = function (root) {
  const KEL = [
    { nama: "Makanan & minuman", bobot: 33, awal: 6 },
    { nama: "Perumahan, air, listrik", bobot: 20, awal: 3 },
    { nama: "Transportasi", bobot: 12, awal: 2 },
    { nama: "Pendidikan", bobot: 6, awal: 4 },
    { nama: "Kesehatan", bobot: 4, awal: 3 },
    { nama: "Lainnya", bobot: 25, awal: 2 },
  ];
  const ubah = KEL.map((k) => k.awal);
  const IHK_LALU = 110;
  const out = h("div", { class: "dm-out" });
  const slider = KEL.map((k, i) => {
    const inp = h("input", { type: "range", min: "-10", max: "30", step: "1", value: String(k.awal), class: "dm-range" });
    const b = h("b", { text: (k.awal > 0 ? "+" : "") + k.awal + "%" });
    inp.oninput = () => { ubah[i] = parseInt(inp.value, 10); b.textContent = (ubah[i] > 0 ? "+" : "") + ubah[i] + "%"; draw(); };
    return { el: h("label", { class: "dm-row" }, [h("span", { text: k.nama + " (bobot " + k.bobot + "%)" }), inp, b]), inp: inp, b: b };
  });

  function draw() {
    const andil = KEL.map((k, i) => (k.bobot / 100) * ubah[i]);
    const inflasi = andil.reduce((x, y) => x + y, 0);
    const maks = Math.max(0.01, ...andil.map(Math.abs));
    const urut = KEL.map((k, i) => ({ nama: k.nama, andil: andil[i] })).sort((x, y) => Math.abs(y.andil) - Math.abs(x.andil));
    let catatan;
    if (inflasi > 0.05) catatan = "Inflasi " + inflasi.toFixed(2).replace(".", ",") + "% artinya <b>harga keranjang rata-rata naik</b> sebesar itu dibanding tahun lalu. Perhatikan: kelompok berbobot besar seperti makanan memberi andil jauh lebih besar walau kenaikan harganya sama dengan kelompok lain.";
    else if (inflasi < -0.05) catatan = "Angka negatif berarti <b>deflasi</b>: harga keranjang rata-rata turun.";
    else catatan = "Harga keranjang hampir tidak berubah.";
    out.innerHTML =
      '<div class="dm-line"><span>IHK tahun lalu → tahun ini</span><b>' + IHK_LALU + " → " + (IHK_LALU * (1 + inflasi / 100)).toFixed(2).replace(".", ",") + "</b></div>" +
      '<div class="dm-line big ' + (inflasi > 4 ? "bad" : "good") + '"><span>Inflasi tahunan</span><b>' + inflasi.toFixed(2).replace(".", ",") + "%</b></div>" +
      '<div class="krip-judul" style="margin-top:10px">ANDIL TIAP KELOMPOK (poin persen)</div>' +
      urut.map((u) => '<div class="dm-bar"><span>' + u.nama + '</span><div class="dm-track"><div class="dm-fill ' + (u.andil < 0 ? "ok" : "") + '" style="width:' + Math.max(1, (Math.abs(u.andil) / maks) * 100).toFixed(1) + '%"></div></div><b>' + (u.andil >= 0 ? "+" : "") + u.andil.toFixed(2).replace(".", ",") + "</b></div>").join("") +
      '<div class="dm-note">' + catatan + "<br><br><i>Bobot di demo ini adalah ilustrasi. BPS menentukan bobot sungguhan dari Survei Biaya Hidup — seberapa besar bagian pengeluaran rumah tangga untuk tiap kelompok.</i></div>";
  }
  const skenario = (teks, nilai) => {
    const t = h("button", { class: "btn ghost", type: "button", text: teks });
    t.onclick = () => { nilai.forEach((v, i) => { ubah[i] = v; slider[i].inp.value = v; slider[i].b.textContent = (v > 0 ? "+" : "") + v + "%"; }); draw(); };
    return t;
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🧺 <b>Demo: menghitung inflasi dari sekeranjang belanja</b>" }),
    h("p", { class: "demo-hint", text: "Atur kenaikan harga tiap kelompok dibanding tahun lalu. Inflasi adalah rata-rata kenaikan itu, ditimbang menurut besarnya bagian pengeluaran." }),
    h("div", { class: "demo-controls" }, [
      skenario("🌶️ Harga pangan melonjak", [18, 3, 2, 4, 3, 2]),
      skenario("⛽ Harga BBM dinaikkan", [6, 3, 20, 4, 3, 2]),
      skenario("😌 Tahun yang tenang", [2, 2, 1, 3, 2, 1]),
      skenario("↺ Awal", KEL.map((k) => k.awal)),
    ]),
    h("div", { class: "pc-form" }, slider.map((x) => x.el)),
    out,
  ]));
  draw();
};

/* ---------- Demo: imbal hasil vs inflasi (nilai nominal vs daya beli) ---------- */
DEMOS["inflasi-riil"] = function (root) {
  const AWAL = 10;
  const s = { r: 4.5, i: 3, pajak: true, n: 10 };
  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const kontrol = {};
  const rentang = (label, kunci, attrs, format) => {
    const inp = h("input", Object.assign({ type: "range", class: "dm-range" }, attrs));
    const b = h("b", { text: format(s[kunci]) });
    inp.value = String(s[kunci]);
    inp.oninput = () => { s[kunci] = parseFloat(inp.value); b.textContent = format(s[kunci]); draw(); };
    kontrol[kunci] = { inp: inp, b: b, format: format };
    return h("label", { class: "dm-row" }, [h("span", { text: label }), inp, b]);
  };
  const persen = (v) => rb(v) + "%";
  const cek = h("input", { type: "checkbox" });
  cek.checked = s.pajak;
  cek.onchange = () => { s.pajak = cek.checked; draw(); };

  function draw() {
    const bersih = (s.r / 100) * (s.pajak ? 0.8 : 1);
    const inf = s.i / 100;
    const nominal = [], riil = [];
    for (let t = 0; t <= s.n; t++) {
      nominal.push(AWAL * Math.pow(1 + bersih, t));
      riil.push(nominal[t] / Math.pow(1 + inf, t));
    }
    const riilTahunan = ((1 + bersih) / (1 + inf) - 1) * 100;
    const yMaks = Math.max(AWAL * 1.2, ...nominal) * 1.05;
    const yMin = Math.min(AWAL * 0.5, ...riil) * 0.95;
    const gx = (t) => 52 + (t / s.n) * 450;
    const gy = (v) => 220 - ((v - yMin) / (yMaks - yMin)) * 200;
    const jalur = (arr) => arr.map((v, t) => (t ? "L" : "M") + gx(t).toFixed(1) + " " + gy(v).toFixed(1)).join(" ");
    let g = '<svg viewBox="0 0 520 256" class="viz-svg" role="img" aria-label="Nilai nominal dan daya beli uang">';
    g += '<line x1="52" y1="220" x2="506" y2="220" class="vaxis"/><line x1="52" y1="16" x2="52" y2="220" class="vaxis"/>';
    g += '<line x1="52" y1="' + gy(AWAL).toFixed(1) + '" x2="506" y2="' + gy(AWAL).toFixed(1) + '" class="vline dim"/>';
    g += '<text x="56" y="' + (gy(AWAL) - 5).toFixed(1) + '" class="vt-xs">daya beli awal Rp10 jt</text>';
    g += '<path d="' + jalur(nominal) + '" class="vline aktif"/>';
    g += '<path d="' + jalur(riil) + '" class="garis-riil"/>';
    g += '<text x="502" y="' + (gy(nominal[s.n]) - 6).toFixed(1) + '" text-anchor="end" class="vt-xs">angka di rekening</text>';
    g += '<text x="502" y="' + (gy(riil[s.n]) + 14).toFixed(1) + '" text-anchor="end" class="vt-xs">daya beli sebenarnya</text>';
    g += '<text x="279" y="246" text-anchor="middle" class="vt-xs">Tahun ke-0 sampai ke-' + s.n + "</text></svg>";
    kanvas.innerHTML = g;

    const separuh = inf > 0 ? Math.log(2) / Math.log(1 + inf) : Infinity;
    out.innerHTML =
      '<div class="dm-line"><span>Imbal hasil setelah pajak</span><b>' + rb(bersih * 100) + "% per tahun</b></div>" +
      '<div class="dm-line"><span>Angka di rekening setelah ' + s.n + " tahun</span><b>Rp" + rb(nominal[s.n]) + " jt</b></div>" +
      '<div class="dm-line big ' + (riil[s.n] >= AWAL ? "good" : "bad") + '"><span>Daya belinya, dalam rupiah hari ini</span><b>Rp' + rb(riil[s.n]) + " jt</b></div>" +
      '<div class="dm-line ' + (riilTahunan >= 0 ? "good" : "bad") + '"><span>Imbal hasil riil per tahun<br><i class="dm-sub">(1 + hasil bersih) ÷ (1 + inflasi) − 1</i></span><b>' + (riilTahunan >= 0 ? "+" : "") + riilTahunan.toFixed(2).replace(".", ",") + "%</b></div>" +
      '<div class="dm-line"><span>Uang tunai tanpa bunga kehilangan separuh daya beli dalam</span><b>' + (isFinite(separuh) ? rb(separuh) + " tahun" : "—") + "</b></div>" +
      '<div class="dm-note">' + (riilTahunan < 0
        ? "Angka di rekening bertambah, tapi <b>yang bisa dibeli justru berkurang</b>. Imbal hasil yang kalah dari inflasi adalah kerugian yang tidak terlihat di buku tabungan."
        : "Daya beli bertambah karena imbal hasil bersih mengalahkan inflasi. Perhatikan betapa kecilnya selisih itu dibanding angka nominalnya — dan betapa besar pengaruh pajak.") +
        "<br><br><i>Angka ilustrasi untuk memahami konsep, bukan saran investasi. Imbal hasil aset berisiko tidak pasti dan bisa negatif.</i></div>";
  }
  const preset = (teks, r, pajak) => {
    const t = h("button", { class: "btn ghost", type: "button", text: teks });
    t.onclick = () => { s.r = r; s.pajak = pajak; cek.checked = pajak; kontrol.r.inp.value = String(r); kontrol.r.b.textContent = kontrol.r.format(r); draw(); };
    return t;
  };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📉 <b>Demo: angka di rekening vs daya beli sebenarnya</b>" }),
    h("p", { class: "demo-hint", text: "Rp10 juta disimpan selama beberapa tahun. Garis biru = angka yang tertulis. Garis merah = berapa banyak barang yang sebenarnya bisa dibeli dengan uang itu." }),
    h("div", { class: "demo-controls" }, [preset("💵 Uang tunai di rumah", 0, false), preset("🏦 Deposito 4,5% (kena pajak)", 4.5, true), preset("📈 Aset tumbuh 9% per tahun", 9, false)]),
    kanvas,
    rentang("Imbal hasil nominal: ", "r", { min: "0", max: "15", step: "0.5" }, persen),
    rentang("Inflasi per tahun: ", "i", { min: "0", max: "15", step: "0.5" }, persen),
    rentang("Lama menyimpan: ", "n", { min: "1", max: "30", step: "1" }, (v) => v + " tahun"),
    h("label", { class: "dm-row" }, [cek, h("span", { text: " Potong pajak bunga 20%" })]),
    out,
  ]));
  draw();
};


/* Pengacak berbenih untuk demo reinforcement learning */
function rlPengacak(benih) {
  let a = benih >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rlKoma = (v, d) => v.toFixed(d).replace(".", ",");

/* ---------- Demo: eksplorasi vs eksploitasi (empat warung) ---------- */
DEMOS["rl-bandit"] = function (root) {
  const NAMA = ["Warung A", "Warung B", "Warung C", "Warung D"];
  const RATA = [5, 7.5, 4, 6.5];
  const HARI_MANUAL = 30;
  const normal = (rnd) => { const u = 1 - rnd(), v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const rasa = (a, rnd) => Math.max(1, Math.min(10, RATA[a] + 2 * normal(rnd)));

  // --- bagian 1: kamu yang memilih ---
  let rndManual = rlPengacak(Date.now() % 100000);
  let hari = 0, kunjung = [0, 0, 0, 0], jumlah = [0, 0, 0, 0], total = 0, terakhir = null;
  const papan = h("div", { class: "dm-out" });
  const tombolWarung = NAMA.map((n, i) => {
    const t = h("button", { class: "btn", type: "button", text: "🍜 " + n });
    t.onclick = () => {
      if (hari >= HARI_MANUAL) return;
      const r = rasa(i, rndManual);
      hari++; kunjung[i]++; jumlah[i] += r; total += r; terakhir = { i: i, r: r };
      gambarManual();
    };
    return t;
  });
  const ulangManual = h("button", { class: "btn ghost", type: "button", text: "↺ Mulai lagi" });
  ulangManual.onclick = () => { rndManual = rlPengacak(Date.now() % 100000); hari = 0; kunjung = [0, 0, 0, 0]; jumlah = [0, 0, 0, 0]; total = 0; terakhir = null; gambarManual(); };

  function gambarManual() {
    const selesai = hari >= HARI_MANUAL;
    tombolWarung.forEach((t) => { t.disabled = selesai; });
    let html = '<div class="dm-line"><span>Hari</span><b>' + hari + " dari " + HARI_MANUAL + "</b></div>";
    if (terakhir) html += '<div class="dm-line"><span>Makan di ' + NAMA[terakhir.i] + " hari ini</span><b>skor rasa " + rlKoma(terakhir.r, 1) + "</b></div>";
    html += NAMA.map((n, i) => '<div class="dm-line"><span>' + n + '<br><i class="dm-sub">' + kunjung[i] + " kali dikunjungi" + (selesai ? " · rata-rata sebenarnya " + rlKoma(RATA[i], 1) : "") + "</i></span><b>" + (kunjung[i] ? "perkiraanmu " + rlKoma(jumlah[i] / kunjung[i], 1) : "belum dicoba") + "</b></div>").join("");
    if (selesai) {
      const maks = 7.5 * HARI_MANUAL;
      html += '<div class="dm-line big ' + (total / maks > 0.9 ? "good" : "bad") + '"><span>Total kepuasanmu</span><b>' + rlKoma(total, 0) + " dari sekitar " + maks + " (bila tahu jawabannya sejak awal)</b></div>" +
        '<div class="dm-note">Warung terbaik adalah <b>Warung B</b>. Perhatikan: satu kali makan bisa menipu — rasanya naik-turun setiap hari. Apakah kamu terlalu cepat berhenti mencoba, atau terlalu lama berkeliling?</div>';
    } else {
      html += '<div class="dm-note">Setiap warung punya rata-rata rasa yang dirahasiakan, dan rasanya naik-turun setiap hari. Kamu punya ' + HARI_MANUAL + " kali makan siang. Tujuanmu: total kepuasan sebesar mungkin.</div>";
    }
    papan.innerHTML = html;
  }

  // --- bagian 2: agen dengan epsilon ---
  function simulasi(eps, tahun, benih) {
    const rnd = rlPengacak(benih);
    let skor = 0, terbaik = 0;
    for (let s = 0; s < tahun; s++) {
      const n = [0, 0, 0, 0], est = [0, 0, 0, 0];
      for (let t = 0; t < 365; t++) {
        let a;
        if (rnd() < eps) a = Math.floor(rnd() * 4);
        else { a = 0; for (let i = 1; i < 4; i++) if (est[i] > est[a]) a = i; }
        const r = rasa(a, rnd);
        n[a]++; est[a] += (r - est[a]) / n[a];
        skor += r; if (a === 1) terbaik++;
      }
    }
    return { skor: skor / (tahun * 365), terbaik: terbaik / (tahun * 365) };
  }
  const TITIK = [0, 0.02, 0.05, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.75, 0.9, 1];
  const kurva = TITIK.map((e) => simulasi(e, 120, 11));
  let eps = 0;
  const kanvas = h("div", { class: "dm-viz" });
  const hasil = h("div", { class: "dm-out" });
  const sl = h("input", { type: "range", min: "0", max: "1", step: "0.05", value: "0", class: "dm-range" });
  const lb = h("b", { text: "0%" });

  function gambarAgen() {
    const r = simulasi(eps, 200, 23);
    const gx = (e) => 52 + e * 450;
    const gy = (v) => 200 - ((v - 4.5) / 3) * 180;
    let g = '<svg viewBox="0 0 520 236" class="viz-svg" role="img" aria-label="Skor rata-rata terhadap tingkat eksplorasi">';
    g += '<line x1="52" y1="200" x2="506" y2="200" class="vaxis"/><line x1="52" y1="14" x2="52" y2="200" class="vaxis"/>';
    [5, 6, 7].forEach((v) => { g += '<text x="46" y="' + (gy(v) + 4).toFixed(1) + '" text-anchor="end" class="vt-xs">' + v + "</text>"; });
    [0, 0.25, 0.5, 0.75, 1].forEach((e) => { g += '<text x="' + gx(e).toFixed(1) + '" y="216" text-anchor="middle" class="vt-xs">' + Math.round(e * 100) + "%</text>"; });
    g += '<line x1="52" y1="' + gy(7.5).toFixed(1) + '" x2="506" y2="' + gy(7.5).toFixed(1) + '" class="garis-terbaik"/>';
    g += '<text x="502" y="' + (gy(7.5) - 5).toFixed(1) + '" text-anchor="end" class="vt-xs">skor bila langsung tahu warung terbaik</text>';
    g += '<path d="' + TITIK.map((e, i) => (i ? "L" : "M") + gx(e).toFixed(1) + " " + gy(kurva[i].skor).toFixed(1)).join(" ") + '" class="vline aktif"/>';
    g += '<circle cx="' + gx(eps).toFixed(1) + '" cy="' + gy(r.skor).toFixed(1) + '" r="7" class="titik-lancar"/>';
    g += '<text x="279" y="232" text-anchor="middle" class="vt-xs">Porsi hari untuk mencoba warung acak (ε)</text></svg>';
    kanvas.innerHTML = g;

    let catatan;
    if (eps === 0) catatan = "<b>Tanpa eksplorasi, agen terjebak.</b> Semua perkiraan awalnya nol, jadi agen mencoba Warung A, mendapat skor lumayan, dan tidak pernah lagi mencoba warung lain — padahal Warung B jauh lebih enak. Skor \"lumayan pertama\" menjadi penjara.";
    else if (eps <= 0.2) catatan = "<b>Sedikit eksplorasi sudah cukup.</b> Sesekali mencoba warung acak membuat perkiraan semua warung makin akurat, sehingga agen menemukan Warung B dan menghabiskan sebagian besar harinya di sana.";
    else catatan = "<b>Terlalu banyak eksplorasi juga merugi.</b> Agen sudah tahu Warung B yang terbaik, tapi masih menghabiskan banyak hari di warung acak yang kurang enak. Hasilnya turun lagi.";
    hasil.innerHTML =
      '<div class="dm-line"><span>Skor rasa rata-rata per hari</span><b>' + rlKoma(r.skor, 2) + "</b></div>" +
      '<div class="dm-line"><span>Hari yang dihabiskan di warung terbaik</span><b>' + Math.round(r.terbaik * 100) + "%</b></div>" +
      '<div class="dm-note">' + catatan + "<br><br><i>Setiap titik adalah rata-rata dari ratusan simulasi setahun penuh, supaya tidak bergantung pada keberuntungan.</i></div>";
  }
  sl.oninput = () => { eps = parseFloat(sl.value); lb.textContent = Math.round(eps * 100) + "%"; gambarAgen(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🍜 <b>Demo: dilema warung makan — mencoba yang baru atau setia pada yang dikenal?</b>" }),
    h("p", { class: "demo-hint", text: "Bagian 1: kamu yang memilih. Bagian 2: lihat bagaimana sebuah agen RL memilih, dengan porsi eksplorasi yang bisa kamu atur." }),
    h("div", { class: "krip-judul", text: "1. KAMU YANG MEMILIH" }),
    h("div", { class: "demo-controls" }, tombolWarung.concat([ulangManual])),
    papan,
    h("div", { class: "krip-judul", style: "margin-top:16px", text: "2. AGEN DENGAN ATURAN ε-GREEDY" }),
    h("p", { class: "demo-hint", text: "Setiap hari: dengan peluang ε, agen mencoba warung acak (eksplorasi). Selebihnya ia pergi ke warung dengan perkiraan terbaik (eksploitasi)." }),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Eksplorasi (ε): " }), sl, lb]),
    hasil,
  ]));
  gambarManual();
  gambarAgen();
};

/* ---------- Demo: Q-learning — robot mencari jalan di tepi jurang ---------- */
DEMOS["rl-grid"] = function (root) {
  const PETA = [
    ".......",
    ".#.#.#.",
    ".......",
    "SXXXXXG",
  ];
  const W = 7, HT = 4, UK = 70, X0 = 15, Y0 = 8;
  const AKSI = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  const PANAH = ["↑", "→", "↓", "←"];
  const MULAI = { x: 0, y: 3 };
  const ALPHA = 0.5, GAMMA = 0.9;
  const s = { eps: 0.2, benih: 7 };
  let Q, rnd, riwayat, episode, robot, jejak, pemutar = null, catatanUji = "";

  const sel = (x, y) => PETA[y][x];
  function langkah(x, y, a) {
    let nx = x + AKSI[a][0], ny = y + AKSI[a][1];
    if (nx < 0 || ny < 0 || nx >= W || ny >= HT || sel(nx, ny) === "#") { nx = x; ny = y; }
    const c = sel(nx, ny);
    if (c === "X") return { x: nx, y: ny, r: -10, selesai: true, jatuh: true };
    if (c === "G") return { x: nx, y: ny, r: 10, selesai: true, jatuh: false };
    return { x: nx, y: ny, r: -1, selesai: false, jatuh: false };
  }
  function pilih(x, y, eksplorasi) {
    if (eksplorasi && rnd() < s.eps) return Math.floor(rnd() * 4);
    const q = Q[y * W + x], m = Math.max(...q);
    const calon = [0, 1, 2, 3].filter((i) => q[i] === m);
    return calon[Math.floor(rnd() * calon.length)];
  }
  function perbarui(x, y, a, h2) {
    const q = Q[y * W + x];
    const target = h2.r + (h2.selesai ? 0 : GAMMA * Math.max(...Q[h2.y * W + h2.x]));
    q[a] += ALPHA * (target - q[a]);
  }
  function ulang() {
    Q = Array.from({ length: W * HT }, () => [0, 0, 0, 0]);
    rnd = rlPengacak(s.benih);
    riwayat = []; episode = 0; robot = null; jejak = []; catatanUji = "";
  }
  function satuEpisodeCepat() {
    let x = MULAI.x, y = MULAI.y, total = 0, n = 0, jatuh = false, sampai = false;
    for (; n < 100; n++) {
      const a = pilih(x, y, true);
      const h2 = langkah(x, y, a);
      perbarui(x, y, a, h2);
      total += h2.r; x = h2.x; y = h2.y;
      if (h2.selesai) { jatuh = h2.jatuh; sampai = !h2.jatuh; n++; break; }
    }
    episode++;
    riwayat.push({ total: total, n: n, jatuh: jatuh, sampai: sampai });
  }

  const kanvas = h("div", { class: "dm-viz" });
  const grafik = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });

  function draw() {
    let g = '<svg viewBox="0 0 520 300" class="viz-svg" role="img" aria-label="Dunia kotak robot dan nilai Q">';
    for (let y = 0; y < HT; y++) {
      for (let x = 0; x < W; x++) {
        const px = X0 + x * UK, py = Y0 + y * UK, c = sel(x, y);
        g += '<rect x="' + px + '" y="' + py + '" width="' + UK + '" height="' + UK + '" class="rl-sel"/>';
        if (c === "#") { g += '<rect x="' + (px + 3) + '" y="' + (py + 3) + '" width="' + (UK - 6) + '" height="' + (UK - 6) + '" rx="6" class="rl-dinding"/>'; continue; }
        if (c === "X") { g += '<rect x="' + (px + 3) + '" y="' + (py + 3) + '" width="' + (UK - 6) + '" height="' + (UK - 6) + '" rx="6" class="sel-satu" fill-opacity="0.35"/><text x="' + (px + UK / 2) + '" y="' + (py + UK / 2 + 9) + '" text-anchor="middle" style="font-size:24px">🕳️</text>'; continue; }
        if (c === "G") { g += '<rect x="' + (px + 3) + '" y="' + (py + 3) + '" width="' + (UK - 6) + '" height="' + (UK - 6) + '" rx="6" class="sel-nol" fill-opacity="0.45"/><text x="' + (px + UK / 2) + '" y="' + (py + UK / 2 + 9) + '" text-anchor="middle" style="font-size:24px">🏁</text>'; continue; }
        const q = Q[y * W + x], v = Math.max(...q), dikenal = q.some((n) => n !== 0);
        if (dikenal) {
          const kuat = Math.min(1, Math.abs(v) / 10) * 0.55 + 0.05;
          g += '<rect x="' + (px + 3) + '" y="' + (py + 3) + '" width="' + (UK - 6) + '" height="' + (UK - 6) + '" rx="6" class="' + (v >= 0 ? "sel-nol" : "sel-satu") + '" fill-opacity="' + kuat.toFixed(2) + '"/>';
          g += '<text x="' + (px + UK / 2) + '" y="' + (py + UK / 2 + 4) + '" text-anchor="middle" class="vt-bold" style="font-size:22px">' + PANAH[q.indexOf(v)] + "</text>";
          g += '<text x="' + (px + UK - 6) + '" y="' + (py + UK - 7) + '" text-anchor="end" class="vt-xs" style="font-size:10px">' + rlKoma(v, 1) + "</text>";
        }
        if (c === "S") g += '<text x="' + (px + 6) + '" y="' + (py + 15) + '" class="vt-xs" style="font-size:10px">MULAI</text>';
      }
    }
    if (jejak.length > 1) g += '<polyline points="' + jejak.map((p) => (X0 + p.x * UK + UK / 2) + "," + (Y0 + p.y * UK + UK / 2)).join(" ") + '" class="rl-jejak"/>';
    if (robot) g += '<text x="' + (X0 + robot.x * UK + UK / 2) + '" y="' + (Y0 + robot.y * UK + UK / 2 + 10) + '" text-anchor="middle" style="font-size:28px">🤖</text>';
    g += '<text x="260" y="296" text-anchor="middle" class="vt-xs">Panah = aksi terbaik · angka = nilai Q · hijau baik, merah buruk</text></svg>';
    kanvas.innerHTML = g;

    // grafik total reward per episode
    const data = riwayat.slice(-150);
    const gx = (i) => 40 + (data.length > 1 ? (i / (data.length - 1)) * 470 : 0);
    const gy = (v) => 110 - ((Math.max(-40, Math.min(5, v)) + 40) / 45) * 96;
    let c = '<svg viewBox="0 0 520 132" class="viz-svg" role="img" aria-label="Total reward per episode">';
    c += '<line x1="40" y1="110" x2="512" y2="110" class="vaxis"/><line x1="40" y1="10" x2="40" y2="110" class="vaxis"/>';
    c += '<line x1="40" y1="' + gy(3).toFixed(1) + '" x2="512" y2="' + gy(3).toFixed(1) + '" class="garis-terbaik"/><text x="508" y="' + (gy(3) - 4).toFixed(1) + '" text-anchor="end" class="vt-xs">terbaik mungkin: +3</text>';
    [0, -20, -40].forEach((v) => { c += '<text x="34" y="' + (gy(v) + 4).toFixed(1) + '" text-anchor="end" class="vt-xs">' + v + "</text>"; });
    data.forEach((r, i) => { c += '<circle cx="' + gx(i).toFixed(1) + '" cy="' + gy(r.total).toFixed(1) + '" r="3" class="' + (r.jatuh ? "titik-pencilan" : "titik-lancar") + '"/>'; });
    c += '<text x="276" y="128" text-anchor="middle" class="vt-xs">Total reward tiap episode latihan (merah = jatuh ke lubang)</text></svg>';
    grafik.innerHTML = data.length ? c : "";

    const akhir = riwayat.slice(-10);
    const qm = Q[MULAI.y * W + MULAI.x];
    let catatan = catatanUji;
    if (!catatan) {
      if (episode === 0) catatan = "Robot belum tahu apa-apa: tabel Q masih berisi nol semua. Ia hanya tahu empat aksi (atas, kanan, bawah, kiri). Setiap langkah bernilai −1, jatuh ke lubang −10, sampai di bendera +10.";
      else if (episode < 15) catatan = "Awalnya robot berkeliaran dan sering jatuh. Tapi setiap kejadian tercatat: kotak di tepi lubang mulai berwarna merah, dan kotak di dekat bendera mulai hijau.";
      else catatan = "Perhatikan <b>nilai hijau merambat mundur</b> dari bendera ke titik mulai — setiap kotak belajar dari perkiraan kotak sesudahnya. Robot masih kadang jatuh saat latihan karena ε membuatnya sesekali melangkah acak.";
    }
    out.innerHTML =
      '<div class="dm-line"><span>Episode latihan</span><b>' + episode + "</b></div>" +
      (riwayat.length ? '<div class="dm-line ' + (riwayat[riwayat.length - 1].sampai ? "good" : "bad") + '"><span>Episode terakhir</span><b>' + (riwayat[riwayat.length - 1].sampai ? "sampai 🏁" : riwayat[riwayat.length - 1].jatuh ? "jatuh 🕳️" : "kehabisan langkah") + " · " + riwayat[riwayat.length - 1].n + " langkah · total " + riwayat[riwayat.length - 1].total + "</b></div>" : "") +
      (akhir.length ? '<div class="dm-line"><span>Jatuh dalam 10 episode terakhir</span><b>' + akhir.filter((r) => r.jatuh).length + " kali</b></div>" : "") +
      '<div class="dm-line teks"><span>Isi tabel Q di titik mulai</span><b>↑ ' + rlKoma(qm[0], 1) + " · → " + rlKoma(qm[1], 1) + " · ↓ " + rlKoma(qm[2], 1) + " · ← " + rlKoma(qm[3], 1) + "</b></div>" +
      '<div class="dm-note">' + catatan + "</div>";
  }

  function berhenti() { if (pemutar) { clearInterval(pemutar); pemutar = null; } }
  function animasi(eksplorasi, perbaruiQ, selesai) {
    berhenti();
    let x = MULAI.x, y = MULAI.y, total = 0, n = 0;
    robot = { x: x, y: y }; jejak = [{ x: x, y: y }];
    draw();
    pemutar = setInterval(() => {
      if (!root.isConnected) { berhenti(); return; }
      const a = pilih(x, y, eksplorasi);
      const h2 = langkah(x, y, a);
      if (perbaruiQ) perbarui(x, y, a, h2);
      total += h2.r; n++; x = h2.x; y = h2.y;
      robot = { x: x, y: y }; jejak.push({ x: x, y: y });
      if (h2.selesai || n >= 60) { berhenti(); selesai({ total: total, n: n, jatuh: h2.jatuh, sampai: h2.selesai && !h2.jatuh }); }
      draw();
    }, 140);
  }

  const t1 = h("button", { class: "btn", type: "button", text: "▶ Latih 1 episode (pelan)" });
  t1.onclick = () => { catatanUji = ""; animasi(true, true, (r) => { episode++; riwayat.push(r); }); };
  const t50 = h("button", { class: "btn", type: "button", text: "⏩ Latih 50 episode" });
  t50.onclick = () => { berhenti(); catatanUji = ""; for (let i = 0; i < 50; i++) satuEpisodeCepat(); robot = null; jejak = []; draw(); };
  const tUji = h("button", { class: "btn ghost", type: "button", text: "🚶 Uji robot (tanpa eksplorasi)" });
  tUji.onclick = () => {
    animasi(false, false, (r) => {
      if (r.sampai && r.total === 3) catatanUji = "<b>Robot menemukan jalan terbaik: 8 langkah, total +3.</b> Perhatikan, jalannya tepat di tepi lubang — itulah jalan terpendek. Tidak ada yang mengajarinya; ia menyimpulkan sendiri dari ribuan langkah coba-coba.<br><br>Tapi lihat grafik: <b>selama latihan, jalan ini membuatnya sering jatuh</b>, karena langkah acak di tepi lubang berakibat fatal. Karena itu robot sungguhan dilatih di simulasi, bukan di gudang yang asli.";
      else if (r.sampai) catatanUji = "Robot sampai di bendera dengan total " + r.total + ", tapi belum lewat jalan terpendek. Latih lebih banyak episode agar perkiraannya makin akurat.";
      else catatanUji = "Robot belum bisa sampai tanpa bantuan langkah acak — tabel Q-nya belum cukup terisi. Latih lebih banyak episode, lalu uji lagi.";
    });
  };
  const tUlang = h("button", { class: "btn ghost", type: "button", text: "↺ Ulang dari nol" });
  tUlang.onclick = () => { berhenti(); s.benih = 1 + Math.floor(Math.random() * 100000); ulang(); draw(); };
  const sl = h("input", { type: "range", min: "0", max: "0.5", step: "0.05", value: "0.2", class: "dm-range" });
  const lb = h("b", { text: "20%" });
  sl.oninput = () => { s.eps = parseFloat(sl.value); lb.textContent = Math.round(s.eps * 100) + "%"; };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "🤖 <b>Demo: Q-learning — robot belajar mencapai bendera</b>" }),
    h("p", { class: "demo-hint", text: "Robot mulai di kiri bawah dan harus mencapai bendera tanpa jatuh ke lubang. Tidak ada yang memberi tahu jalannya — ia hanya menerima angka reward setiap melangkah." }),
    kanvas,
    h("div", { class: "demo-controls" }, [t1, t50, tUji, tUlang]),
    h("label", { class: "dm-row" }, [h("span", { text: "Eksplorasi saat latihan (ε): " }), sl, lb]),
    grafik,
    out,
  ]));
  ulang();
  draw();
};


/* ---------- Demo: fungsi aktivasi, turunannya, dan efek bertumpuk ---------- */
DEMOS["aktivasi"] = function (root) {
  const sig = (x) => 1 / (1 + Math.exp(-x));
  const FUNGSI = {
    Sigmoid: { f: sig, rumus: "1 ÷ (1 + e⁻ˣ)", keluaran: "0 … 1", pakai: "lapisan keluaran untuk ya/tidak" },
    Tanh: { f: Math.tanh, rumus: "(eˣ − e⁻ˣ) ÷ (eˣ + e⁻ˣ)", keluaran: "−1 … 1", pakai: "lapisan tersembunyi model lama, gerbang LSTM" },
    ReLU: { f: (x) => Math.max(0, x), rumus: "maks(0, x)", keluaran: "0 … ∞", pakai: "lapisan tersembunyi (pilihan bawaan)" },
    "Leaky ReLU": { f: (x) => (x >= 0 ? x : 0.01 * x), rumus: "x bila positif, 0,01x bila negatif", keluaran: "−∞ … ∞", pakai: "pengganti ReLU saat neuron mati" },
    GELU: { f: (x) => 0.5 * x * (1 + Math.tanh(Math.sqrt(2 / Math.PI) * (x + 0.044715 * x * x * x))), rumus: "0,5x × (1 + tanh(…))", keluaran: "≈ −0,17 … ∞", pakai: "Transformer (GPT, BERT)" },
  };
  let nama = "Sigmoid", x = 1, lapisan = 6;

  const turunan = (f, t) => (f(t + 1e-5) - f(t - 1e-5)) / 2e-5;
  const koma = (v, d) => v.toFixed(d).replace(".", ",");
  function kecil(v) {
    if (v === 0) return "0";
    if (Math.abs(v) >= 0.001) return koma(v, 4);
    const e = v.toExponential(2).split("e");
    return koma(parseFloat(e[0]), 2) + " × 10^" + parseInt(e[1], 10);
  }

  const kanvas = h("div", { class: "dm-viz" });
  const out = h("div", { class: "dm-out" });
  const XMIN = -6, XMAX = 6, YMIN = -1.6, YMAX = 2.6;
  const px = (v) => 44 + ((v - XMIN) / (XMAX - XMIN)) * 460;
  const py = (v) => 214 - ((v - YMIN) / (YMAX - YMIN)) * 196;

  function jalur(fn) {
    let d = "";
    for (let t = XMIN; t <= XMAX + 0.001; t += 0.1) {
      const y = Math.max(YMIN - 1, Math.min(YMAX + 1, fn(t)));
      d += (d ? "L" : "M") + px(t).toFixed(1) + " " + py(y).toFixed(1) + " ";
    }
    return d;
  }

  function draw() {
    const F = FUNGSI[nama];
    const fx = F.f(x), dfx = turunan(F.f, x);
    let g = '<svg viewBox="0 0 520 240" class="viz-svg" role="img" aria-label="Grafik fungsi aktivasi dan turunannya">';
    g += '<line x1="44" y1="' + py(0).toFixed(1) + '" x2="504" y2="' + py(0).toFixed(1) + '" class="vaxis"/>';
    g += '<line x1="' + px(0).toFixed(1) + '" y1="18" x2="' + px(0).toFixed(1) + '" y2="214" class="vaxis"/>';
    [-1, 1, 2].forEach((v) => { g += '<text x="' + (px(0) - 6).toFixed(1) + '" y="' + (py(v) + 4).toFixed(1) + '" text-anchor="end" class="vt-xs">' + v + "</text>"; });
    [-4, -2, 2, 4].forEach((v) => { g += '<text x="' + px(v).toFixed(1) + '" y="' + (py(0) + 14).toFixed(1) + '" text-anchor="middle" class="vt-xs">' + v + "</text>"; });
    g += '<path d="' + jalur((t) => turunan(F.f, t)) + '" class="garis-terbaik"/>';
    g += '<path d="' + jalur(F.f) + '" class="vline aktif"/>';
    g += '<line x1="' + px(x).toFixed(1) + '" y1="18" x2="' + px(x).toFixed(1) + '" y2="214" class="garis-ambang"/>';
    g += '<circle cx="' + px(x).toFixed(1) + '" cy="' + py(Math.max(YMIN, Math.min(YMAX, fx))).toFixed(1) + '" r="6" class="titik-lancar"/>';
    g += '<text x="504" y="30" text-anchor="end" class="vt-xs">— biru: f(x) · - - hijau: turunan f′(x)</text>';
    g += '<text x="274" y="236" text-anchor="middle" class="vt-xs">nilai yang masuk ke neuron (x)</text></svg>';
    kanvas.innerHTML = g;

    const berantai = Math.pow(dfx, lapisan);
    let catatan;
    if (nama === "Sigmoid" || nama === "Tanh") {
      catatan = Math.abs(dfx) < 0.05
        ? "<b>Di sini kurvanya nyaris datar — neuron sedang jenuh.</b> Turunannya hampir nol, jadi sinyal belajar yang dikirim mundur lewat aturan rantai ikut mengecil. Bobot di lapisan awal nyaris tidak berubah, dan jaringan terasa 'berhenti belajar'."
        : "Turunan " + nama + " terbesar hanya <b>" + (nama === "Sigmoid" ? "0,25" : "1,0") + "</b>, tepat di tengah. " + (nama === "Sigmoid" ? "Karena setiap lapisan mengalikan angka di bawah 1, sinyal belajar menyusut cepat saat jaringannya dalam — inilah <i>vanishing gradient</i>." : "Tanh lebih baik dari sigmoid karena berpusat di nol, tapi kedua ujungnya tetap jenuh.");
    } else if (nama === "ReLU") {
      catatan = x >= 0
        ? "<b>Di sisi positif, turunannya tepat 1.</b> Sinyal belajar diteruskan utuh berapa pun dalamnya jaringan — inilah alasan ReLU membuat jaringan dalam bisa dilatih."
        : "<b>Di sisi negatif, keluarannya 0 dan turunannya 0.</b> Neuron yang selalu menerima nilai negatif tidak pernah diperbaiki lagi — disebut <i>neuron mati</i> (dead ReLU). Coba Leaky ReLU untuk melihat perbaikannya.";
    } else if (nama === "Leaky ReLU") {
      catatan = "Sama seperti ReLU di sisi positif, tapi sisi negatifnya <b>tidak benar-benar nol</b> (kemiringan 0,01). Neuron yang terlanjur negatif masih punya jalan untuk kembali hidup.";
    } else {
      catatan = "GELU melengkung halus di sekitar nol dan membiarkan sebagian kecil nilai negatif lewat. Dipakai di hampir semua Transformer modern. Perhatikan turunannya bisa <b>sedikit di atas 1</b> di daerah tertentu.";
    }

    out.innerHTML =
      '<div class="dm-line"><span>Rumus</span><b>' + F.rumus + "</b></div>" +
      '<div class="dm-line"><span>Rentang keluaran</span><b>' + F.keluaran + "</b></div>" +
      '<div class="dm-line"><span>Biasa dipakai di</span><b>' + F.pakai + "</b></div>" +
      '<div class="dm-line big"><span>f(' + koma(x, 1) + ")</span><b>" + koma(fx, 3) + "</b></div>" +
      '<div class="dm-line ' + (Math.abs(dfx) < 0.05 ? "bad" : "good") + '"><span>Turunan f′(' + koma(x, 1) + ') <i class="dm-sub">seberapa besar sinyal belajar diteruskan</i></span><b>' + koma(dfx, 4) + "</b></div>" +
      '<div class="dm-line teks ' + (Math.abs(berantai) < 0.001 ? "bad" : "") + '"><span>Sinyal setelah melewati ' + lapisan + ' lapisan <i class="dm-sub">turunan dikalikan berulang lewat aturan rantai</i></span><b>' + koma(dfx, 3) + "<sup>" + lapisan + "</sup> = " + kecil(berantai) + "</b></div>" +
      '<div class="dm-note">' + catatan + "</div>";
  }

  const tombol = Object.keys(FUNGSI).map((n) => {
    const t = h("button", { class: "btn ghost", type: "button", text: n });
    t.onclick = () => { nama = n; tombol.forEach((b) => b.classList.toggle("aktif", b.textContent === n)); draw(); };
    return t;
  });
  tombol[0].classList.add("aktif");
  const slX = h("input", { type: "range", min: "-6", max: "6", step: "0.1", value: "1", class: "dm-range" });
  const lbX = h("b", { text: "1,0" });
  slX.oninput = () => { x = parseFloat(slX.value); lbX.textContent = koma(x, 1); draw(); };
  const slL = h("input", { type: "range", min: "1", max: "12", step: "1", value: "6", class: "dm-range" });
  const lbL = h("b", { text: "6" });
  slL.oninput = () => { lapisan = parseInt(slL.value, 10); lbL.textContent = slL.value; draw(); };

  root.appendChild(h("div", { class: "demo" }, [
    h("div", { class: "demo-head", html: "📈 <b>Demo: bandingkan fungsi aktivasi dan turunannya</b>" }),
    h("p", { class: "demo-hint", text: "Garis biru = nilai yang keluar dari neuron. Garis hijau putus-putus = turunannya, yaitu seberapa besar sinyal belajar yang bisa lewat. Geser x ke ujung kiri atau kanan dan perhatikan apa yang terjadi." }),
    h("div", { class: "demo-controls" }, tombol),
    kanvas,
    h("label", { class: "dm-row" }, [h("span", { text: "Nilai masuk (x): " }), slX, lbX]),
    h("label", { class: "dm-row" }, [h("span", { text: "Jumlah lapisan bertumpuk: " }), slL, lbL]),
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
