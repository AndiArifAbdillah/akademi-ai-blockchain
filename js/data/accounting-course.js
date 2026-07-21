/* ============================================================
   MATERI KURSUS: AKUNTANSI UNTUK BISNIS (Accounting for Business)
   Disusun dari dasar hingga mahir, bahasa Indonesia sederhana.
   ============================================================ */

const ACCOUNTING_COURSE = {
  id: "accounting",
  title: "Akuntansi untuk Bisnis",
  emoji: "📊",
  color: "#10b981",
  tagline: "Kuasai 'bahasa bisnis' — mencatat, membaca, dan mengambil keputusan dari angka.",
  description:
    "Jalur ini mengajarkan akuntansi dari nol: dari persamaan dasar dan debit-kredit, cara mencatat di jurnal, sampai membaca laporan keuangan dan rasio untuk mengambil keputusan bisnis.",
  modules: [
    /* ---------------- LEVEL PEMULA ---------------- */
    {
      id: "acc-pemula",
      level: "Pemula",
      title: "Fondasi Akuntansi",
      summary: "Konsep inti: persamaan dasar, jenis akun, dan debit-kredit.",
      lessons: [
        {
          id: "acc-p-1",
          title: "Apa itu Akuntansi? (Bahasa Bisnis)",
          duration: "8 menit",
          content: `
<p><b>Akuntansi</b> adalah sistem untuk <b>mencatat, mengelompokkan, dan melaporkan</b> seluruh kegiatan keuangan sebuah bisnis. Sering disebut <b>"bahasa bisnis"</b> karena lewat angka-angka inilah bisnis "berbicara" tentang kondisinya.</p>

<div class="callout">
<b>Analogi sederhana:</b> Bayangkan akuntansi seperti <b>buku harian keuangan</b> warung. Setiap uang masuk dan keluar dicatat rapi, sehingga di akhir bulan kamu tahu: untung atau rugi? punya utang berapa? uang kas sisa berapa?
</div>

<h3>Untuk apa akuntansi?</h3>
<ul>
  <li>Mengetahui bisnis <b>untung atau rugi</b>.</li>
  <li>Melihat <b>posisi keuangan</b> (punya apa, utang berapa).</li>
  <li>Dasar mengambil <b>keputusan</b> (menaikkan harga, menambah karyawan).</li>
  <li>Memenuhi kewajiban <b>pajak</b> dan menarik <b>investor/pinjaman bank</b>.</li>
</ul>

<h3>Siapa yang memakainya?</h3>
<table class="tbl">
  <tr><th>Pemakai</th><th>Contoh</th></tr>
  <tr><td><b>Internal</b></td><td>Pemilik & manajer (untuk mengelola bisnis)</td></tr>
  <tr><td><b>Eksternal</b></td><td>Investor, bank, kantor pajak, pemasok</td></tr>
</table>

<div class="callout">
<b>Akuntansi vs Pembukuan:</b> <b>Pembukuan (bookkeeping)</b> hanya soal <i>mencatat</i> transaksi. <b>Akuntansi</b> lebih luas: mencatat + <i>menganalisis</i> + <i>melaporkan</i> + membantu <i>keputusan</i>.
</div>
`,
          keyPoints: [
            "Akuntansi = mencatat, mengelompokkan, dan melaporkan kegiatan keuangan.",
            "Disebut 'bahasa bisnis' karena menyampaikan kondisi keuangan lewat angka.",
            "Pembukuan hanya mencatat; akuntansi mencatat + menganalisis + melaporkan.",
          ],
          quiz: [
            {
              q: "Mengapa akuntansi disebut 'bahasa bisnis'?",
              options: [
                "Karena memakai bahasa Inggris",
                "Karena lewat angka-angkanya bisnis menyampaikan kondisi keuangannya",
                "Karena hanya dipakai akuntan",
                "Karena sulit dipelajari",
              ],
              answer: 1,
              explain:
                "Laporan keuangan adalah cara bisnis 'berbicara' tentang kinerjanya kepada pemilik, investor, dan pihak lain.",
            },
            {
              q: "Apa beda pembukuan (bookkeeping) dan akuntansi?",
              options: [
                "Sama persis",
                "Pembukuan hanya mencatat; akuntansi mencatat, menganalisis, dan melaporkan",
                "Akuntansi hanya mencatat, pembukuan menganalisis",
                "Pembukuan untuk pajak saja",
              ],
              answer: 1,
              explain:
                "Pembukuan adalah bagian dari akuntansi yang lebih luas.",
            },
          ],
        },
        {
          id: "acc-p-2",
          title: "Persamaan Dasar Akuntansi",
          duration: "10 menit",
          content: `
<p>Seluruh akuntansi berdiri di atas satu rumus sederhana yang <b>selalu seimbang</b>:</p>

<div class="callout">
<b style="font-size:1.15rem">Aset = Kewajiban + Ekuitas</b><br>
(Harta = Utang + Modal)
</div>

<div data-diagram="accounting-equation"></div>

<h3>Apa artinya?</h3>
<ul>
  <li><b>Aset (Harta)</b> — semua yang <i>dimiliki</i> bisnis: kas, peralatan, persediaan.</li>
  <li><b>Kewajiban (Utang)</b> — yang <i>dipinjam</i> dari pihak lain: utang bank, utang pemasok.</li>
  <li><b>Ekuitas (Modal)</b> — bagian yang <i>benar-benar milik pemilik</i> setelah dikurangi utang.</li>
</ul>

<div class="callout">
<b>Cara mengingat:</b> "Apa yang kamu <b>punya</b> = apa yang kamu <b>pinjam</b> + apa yang <b>benar-benar milikmu</b>." Kalau punya laptop Rp10jt hasil cicilan Rp6jt, maka: Aset 10 = Utang 6 + Modal 4.
</div>

<h3>Selalu seimbang</h3>
<p>Karena setiap transaksi memengaruhi minimal dua sisi, persamaan ini <b>tidak pernah pincang</b>. Coba sendiri simulatornya — perhatikan kedua sisi selalu sama:</p>

<div data-demo="equation-sim"></div>
`,
          keyPoints: [
            "Persamaan dasar: Aset = Kewajiban + Ekuitas (Harta = Utang + Modal).",
            "Aset = yang dimiliki; Kewajiban = yang dipinjam; Ekuitas = milik pemilik.",
            "Persamaan ini selalu seimbang di setiap transaksi.",
          ],
          practice: [
            { type: "number", q: "Sebuah toko punya Aset Rp250jt dan Ekuitas Rp150jt. Berapa Kewajiban (utang)-nya? (dalam juta)", answer: 100, unit: "jt", hint: "Susun ulang rumusnya: Kewajiban = Aset − Ekuitas.", solution: "Kewajiban = 250 − 150 = Rp100jt." },
            { type: "number", q: "Aset Rp80jt, Kewajiban Rp30jt. Berapa Ekuitasnya? (juta)", answer: 50, unit: "jt", hint: "Ekuitas = Aset − Kewajiban.", solution: "80 − 30 = Rp50jt." },
          ],
          quiz: [
            {
              q: "Sebuah toko punya aset Rp100jt dan utang Rp40jt. Berapa ekuitasnya?",
              options: ["Rp140jt", "Rp60jt", "Rp40jt", "Rp100jt"],
              answer: 1,
              explain:
                "Ekuitas = Aset − Kewajiban = 100 − 40 = Rp60jt.",
            },
            {
              q: "Persamaan dasar akuntansi yang benar adalah?",
              options: [
                "Aset = Kewajiban − Ekuitas",
                "Aset = Kewajiban + Ekuitas",
                "Ekuitas = Aset + Kewajiban",
                "Kewajiban = Aset + Ekuitas",
              ],
              answer: 1,
              explain: "Aset = Kewajiban + Ekuitas; selalu seimbang.",
            },
          ],
        },
        {
          id: "acc-p-3",
          title: "Lima Jenis Akun",
          duration: "9 menit",
          content: `
<p>Setiap transaksi dicatat ke dalam <b>akun</b>. Semua akun masuk ke salah satu dari <b>lima jenis</b> berikut:</p>

<table class="tbl">
  <tr><th>Jenis Akun</th><th>Arti</th><th>Contoh</th></tr>
  <tr><td><b>Aset</b></td><td>Yang dimiliki</td><td>Kas, piutang, persediaan, peralatan, gedung</td></tr>
  <tr><td><b>Kewajiban</b></td><td>Yang dipinjam / utang</td><td>Utang bank, utang usaha, gaji terutang</td></tr>
  <tr><td><b>Ekuitas</b></td><td>Modal pemilik</td><td>Modal disetor, laba ditahan</td></tr>
  <tr><td><b>Pendapatan</b></td><td>Pemasukan dari usaha</td><td>Penjualan, pendapatan jasa, bunga</td></tr>
  <tr><td><b>Beban</b></td><td>Pengeluaran untuk operasi</td><td>Gaji, sewa, listrik, iklan</td></tr>
</table>

<div class="callout">
<b>Hubungan penting:</b> <b>Pendapatan</b> menambah ekuitas (bisnis jadi lebih kaya), sedangkan <b>Beban</b> mengurangi ekuitas. Jadi: <b>Laba = Pendapatan − Beban</b>, dan laba inilah yang menambah modal pemilik.
</div>

<h3>Akun permanen vs sementara</h3>
<ul>
  <li><b>Permanen</b> (Aset, Kewajiban, Ekuitas) — saldonya terbawa ke periode berikutnya.</li>
  <li><b>Sementara</b> (Pendapatan, Beban) — "di-nol-kan" tiap akhir periode setelah dihitung labanya.</li>
</ul>
`,
          keyPoints: [
            "Lima jenis akun: Aset, Kewajiban, Ekuitas, Pendapatan, Beban.",
            "Pendapatan menambah ekuitas; Beban mengurangi ekuitas.",
            "Aset/Kewajiban/Ekuitas = permanen; Pendapatan/Beban = sementara.",
          ],
          quiz: [
            {
              q: "Gaji karyawan yang dibayar perusahaan termasuk akun?",
              options: ["Aset", "Pendapatan", "Beban", "Ekuitas"],
              answer: 2,
              explain: "Gaji adalah pengeluaran untuk operasi = Beban.",
            },
            {
              q: "Akun mana yang menambah ekuitas?",
              options: ["Beban", "Pendapatan", "Utang bank", "Piutang"],
              answer: 1,
              explain:
                "Pendapatan menambah ekuitas; beban menguranginya.",
            },
          ],
        },
        {
          id: "acc-p-4",
          title: "Debit & Kredit",
          duration: "11 menit",
          content: `
<p>Akuntansi memakai sistem <b>pencatatan berpasangan (double-entry)</b>: setiap transaksi dicatat di <b>minimal dua akun</b>, dan total <b>Debit</b> harus selalu sama dengan total <b>Kredit</b>.</p>

<div class="callout">
<b>Penting:</b> "Debit" dan "Kredit" di akuntansi <b>bukan</b> berarti bertambah/berkurang. Mereka hanya berarti <b>sisi kiri (Debit)</b> dan <b>sisi kanan (Kredit)</b> sebuah akun. Efeknya tergantung jenis akunnya.
</div>

<h3>Aturan emas debit-kredit</h3>
<table class="tbl">
  <tr><th>Jenis Akun</th><th>Bertambah di sisi...</th><th>Berkurang di sisi...</th></tr>
  <tr><td><b>Aset</b></td><td class="ok-cell">Debit</td><td>Kredit</td></tr>
  <tr><td><b>Beban</b></td><td class="ok-cell">Debit</td><td>Kredit</td></tr>
  <tr><td><b>Kewajiban</b></td><td>Debit</td><td class="ok-cell">Kredit</td></tr>
  <tr><td><b>Ekuitas</b></td><td>Debit</td><td class="ok-cell">Kredit</td></tr>
  <tr><td><b>Pendapatan</b></td><td>Debit</td><td class="ok-cell">Kredit</td></tr>
</table>

<div class="callout">
<b>Cara mengingat (singkatan "BeAs" debit):</b> <b>Be</b>ban dan <b>As</b>et bertambah di <b>Debit</b>. Sisanya (Kewajiban, Ekuitas, Pendapatan) bertambah di <b>Kredit</b>.
</div>

<h3>Contoh</h3>
<p>Pemilik menyetor modal Rp50jt tunai:</p>
<ul>
  <li><b>Debit</b> Kas (Aset bertambah) Rp50jt</li>
  <li><b>Kredit</b> Modal (Ekuitas bertambah) Rp50jt</li>
</ul>
<p>Total debit (50) = total kredit (50). Seimbang!</p>

<p>Latih instingmu dengan kuis cepat berikut:</p>
<div data-demo="debit-credit"></div>
`,
          keyPoints: [
            "Double-entry: tiap transaksi minimal 2 akun, total Debit = total Kredit.",
            "Debit = sisi kiri, Kredit = sisi kanan (bukan tambah/kurang).",
            "Beban & Aset bertambah di Debit; Kewajiban, Ekuitas, Pendapatan bertambah di Kredit.",
          ],
          quiz: [
            {
              q: "Dalam sistem double-entry, total debit harus...",
              options: [
                "Lebih besar dari kredit",
                "Selalu sama dengan total kredit",
                "Lebih kecil dari kredit",
                "Tidak ada hubungannya",
              ],
              answer: 1,
              explain: "Total debit selalu = total kredit; itu menjaga keseimbangan.",
            },
            {
              q: "Untuk menambah akun Kas (Aset), dicatat di sisi?",
              options: ["Kredit", "Debit", "Keduanya", "Tidak dicatat"],
              answer: 1,
              explain: "Aset bertambah di sisi Debit.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL MENENGAH ---------------- */
    {
      id: "acc-menengah",
      level: "Menengah",
      title: "Siklus & Laporan Keuangan",
      summary: "Dari mencatat transaksi sampai menghasilkan laporan keuangan.",
      lessons: [
        {
          id: "acc-m-1",
          title: "Jurnal & Buku Besar",
          duration: "9 menit",
          content: `
<p>Dua catatan utama dalam akuntansi:</p>

<h3>1. Jurnal (Journal)</h3>
<p>Catatan <b>kronologis</b> (urut waktu) setiap transaksi. Tiap catatan disebut <b>jurnal entry</b> dan berisi akun yang didebit & dikredit.</p>
<pre class="code">Tgl 5 Jan  | Beli peralatan tunai Rp8jt
  Debit  : Peralatan (Aset)     8.000.000
  Kredit :   Kas (Aset)            8.000.000</pre>

<h3>2. Buku Besar (Ledger)</h3>
<p>Kumpulan <b>semua akun</b> beserta saldonya. Setelah dicatat di jurnal, angka "dipindahkan" ke buku besar — proses ini disebut <b>posting</b>.</p>

<div class="callout">
<b>Alur:</b> Transaksi → catat di <b>Jurnal</b> (urut waktu) → <b>posting</b> ke <b>Buku Besar</b> (dikelompokkan per akun). Jurnal menjawab "kapan & apa", buku besar menjawab "saldo tiap akun berapa".
</div>

<h3>Akun T</h3>
<p>Buku besar sering digambarkan sebagai huruf <b>T</b>: nama akun di atas, <b>Debit di kiri</b>, <b>Kredit di kanan</b>. Sederhana untuk melihat saldo akun.</p>
`,
          keyPoints: [
            "Jurnal = catatan transaksi urut waktu (debit & kredit tiap transaksi).",
            "Buku besar = kumpulan semua akun beserta saldonya.",
            "Posting = memindahkan angka dari jurnal ke buku besar.",
          ],
          quiz: [
            {
              q: "Apa fungsi jurnal?",
              options: [
                "Menyimpan uang tunai",
                "Mencatat transaksi secara kronologis (urut waktu)",
                "Menghitung pajak otomatis",
                "Menggantikan laporan laba rugi",
              ],
              answer: 1,
              explain: "Jurnal mencatat tiap transaksi urut waktu sebelum diposting.",
            },
            {
              q: "Proses memindahkan angka dari jurnal ke buku besar disebut?",
              options: ["Posting", "Auditing", "Budgeting", "Closing"],
              answer: 0,
              explain: "Posting = memindahkan entri jurnal ke akun di buku besar.",
            },
          ],
        },
        {
          id: "acc-m-2",
          title: "Siklus Akuntansi",
          duration: "9 menit",
          content: `
<p><b>Siklus akuntansi</b> adalah langkah berulang tiap periode (bulan/tahun) dari transaksi sampai laporan keuangan.</p>

<h3>Langkah-langkahnya</h3>
<ol>
  <li><b>Identifikasi transaksi</b> — kumpulkan bukti (nota, faktur).</li>
  <li><b>Jurnal</b> — catat transaksi urut waktu.</li>
  <li><b>Posting ke buku besar</b> — kelompokkan per akun.</li>
  <li><b>Neraca saldo (trial balance)</b> — cek total debit = total kredit.</li>
  <li><b>Jurnal penyesuaian</b> — sesuaikan hal seperti penyusutan & beban dibayar di muka.</li>
  <li><b>Laporan keuangan</b> — susun laba rugi, neraca, arus kas.</li>
  <li><b>Jurnal penutup</b> — nol-kan akun sementara (pendapatan & beban) untuk periode baru.</li>
</ol>

<div class="callout">
<b>Kenapa "siklus"?</b> Karena begitu satu periode selesai dan ditutup, prosesnya dimulai lagi dari awal untuk periode berikutnya — berputar terus.
</div>

<div class="callout warn">
<b>Neraca saldo</b> hanya memastikan debit = kredit, <b>bukan</b> menjamin tak ada salah catat. Salah memasukkan ke akun yang keliru tetap bisa lolos asal angkanya seimbang.
</div>
`,
          keyPoints: [
            "Siklus akuntansi berulang tiap periode: transaksi → jurnal → buku besar → neraca saldo → penyesuaian → laporan → penutup.",
            "Neraca saldo mengecek total debit = total kredit.",
            "Jurnal penutup menol-kan akun pendapatan & beban untuk periode baru.",
          ],
          quiz: [
            {
              q: "Urutan yang benar di awal siklus akuntansi adalah?",
              options: [
                "Laporan keuangan → jurnal → transaksi",
                "Transaksi → jurnal → posting ke buku besar",
                "Buku besar → transaksi → jurnal",
                "Neraca saldo → transaksi → jurnal",
              ],
              answer: 1,
              explain: "Mulai dari transaksi, dijurnal, lalu diposting ke buku besar.",
            },
            {
              q: "Tujuan jurnal penutup adalah?",
              options: [
                "Menutup perusahaan",
                "Menol-kan akun sementara (pendapatan & beban) untuk periode baru",
                "Menghapus semua data",
                "Membayar pajak",
              ],
              answer: 1,
              explain:
                "Akun pendapatan & beban dinolkan agar periode berikutnya mulai dari nol.",
            },
          ],
        },
        {
          id: "acc-m-3",
          title: "Laporan Laba Rugi",
          duration: "10 menit",
          content: `
<p><b>Laporan Laba Rugi (Income Statement)</b> menunjukkan kinerja bisnis selama satu periode: untung atau rugi.</p>

<div class="callout">
<b>Rumus inti:</b> Pendapatan − Beban = <b>Laba (atau Rugi) Bersih</b>.
</div>

<h3>Susunannya (dari atas ke bawah)</h3>
<table class="tbl">
  <tr><td>Pendapatan (Penjualan)</td><td>100</td></tr>
  <tr><td>− Harga Pokok Penjualan (HPP)</td><td>(60)</td></tr>
  <tr><td><b>= Laba Kotor</b></td><td><b>40</b></td></tr>
  <tr><td>− Beban Operasional (gaji, sewa, listrik)</td><td>(25)</td></tr>
  <tr><td><b>= Laba Bersih</b></td><td><b>15</b></td></tr>
</table>

<ul>
  <li><b>HPP</b> = biaya langsung barang yang terjual.</li>
  <li><b>Laba Kotor</b> = Pendapatan − HPP.</li>
  <li><b>Laba Bersih</b> = Laba Kotor − beban operasional (& lain-lain).</li>
  <li><b>Margin laba bersih</b> = Laba Bersih ÷ Pendapatan × 100%.</li>
</ul>

<p>Coba sendiri — ubah angkanya dan lihat laba & marginnya berubah:</p>
<div data-demo="profit-calc"></div>
`,
          keyPoints: [
            "Laba Rugi mengukur kinerja selama satu periode: Pendapatan − Beban = Laba bersih.",
            "Laba Kotor = Pendapatan − HPP; Laba Bersih = Laba Kotor − beban operasional.",
            "Margin laba bersih = Laba Bersih ÷ Pendapatan × 100%.",
          ],
          practice: [
            { type: "number", q: "Pendapatan Rp500jt, HPP Rp300jt, beban operasional Rp120jt. Berapa Laba Bersih? (juta)", answer: 80, unit: "jt", hint: "Laba kotor = Pendapatan − HPP, lalu kurangi beban operasional.", solution: "Laba kotor = 500 − 300 = 200; laba bersih = 200 − 120 = Rp80jt." },
            { type: "number", q: "Laba bersih Rp40jt dari pendapatan Rp160jt. Berapa margin laba bersih? (dalam %)", answer: 25, unit: "%", hint: "Margin = Laba Bersih ÷ Pendapatan × 100%.", solution: "40 ÷ 160 × 100% = 25%." },
          ],
          quiz: [
            {
              q: "Pendapatan Rp200jt, HPP Rp120jt, beban operasional Rp50jt. Laba bersihnya?",
              options: ["Rp80jt", "Rp30jt", "Rp50jt", "Rp200jt"],
              answer: 1,
              explain:
                "Laba kotor = 200 − 120 = 80; laba bersih = 80 − 50 = Rp30jt.",
            },
            {
              q: "Laba Kotor dihitung dari?",
              options: [
                "Pendapatan − semua beban",
                "Pendapatan − HPP",
                "Pendapatan + HPP",
                "Aset − Kewajiban",
              ],
              answer: 1,
              explain: "Laba Kotor = Pendapatan − Harga Pokok Penjualan.",
            },
          ],
        },
        {
          id: "acc-m-4",
          title: "Neraca & Laporan Arus Kas",
          duration: "10 menit",
          content: `
<p>Dua laporan penting lainnya:</p>

<h3>1. Neraca (Balance Sheet)</h3>
<p><b>Foto</b> kondisi keuangan pada <b>satu tanggal tertentu</b>. Isinya persis persamaan dasar:</p>
<div class="callout"><b>Aset = Kewajiban + Ekuitas</b> — dan kedua sisi harus seimbang ("balance").</div>
<p>Beda dengan laba rugi yang mengukur <i>periode</i>, neraca menunjukkan <i>posisi</i> pada <i>satu titik waktu</i> (mis. per 31 Desember).</p>

<h3>2. Laporan Arus Kas (Cash Flow)</h3>
<p>Melacak <b>uang tunai</b> yang benar-benar masuk & keluar, dikelompokkan jadi tiga:</p>
<ul>
  <li><b>Operasi</b> — dari kegiatan utama (jual produk, bayar gaji).</li>
  <li><b>Investasi</b> — beli/jual aset jangka panjang (mesin, gedung).</li>
  <li><b>Pendanaan</b> — dari pemilik/kreditor (setor modal, pinjam/bayar utang).</li>
</ul>

<div class="callout warn">
<b>Laba ≠ Kas!</b> Bisnis bisa "untung" di laporan laba rugi tapi <b>kehabisan uang tunai</b> (mis. banyak penjualan kredit yang belum dibayar). Karena itu laporan arus kas sangat penting — banyak bisnis bangkrut bukan karena rugi, tapi karena kehabisan kas.
</div>
`,
          keyPoints: [
            "Neraca = foto posisi keuangan pada satu tanggal: Aset = Kewajiban + Ekuitas.",
            "Arus kas melacak uang tunai nyata: operasi, investasi, pendanaan.",
            "Laba tidak sama dengan kas — bisnis untung pun bisa kehabisan uang tunai.",
          ],
          quiz: [
            {
              q: "Neraca menggambarkan kondisi keuangan pada?",
              options: [
                "Sepanjang satu tahun",
                "Satu tanggal/titik waktu tertentu",
                "Masa depan",
                "Setiap transaksi",
              ],
              answer: 1,
              explain:
                "Neraca adalah 'foto' posisi keuangan pada satu tanggal tertentu.",
            },
            {
              q: "Mengapa laporan arus kas penting meski bisnis terlihat untung?",
              options: [
                "Karena pajak mengharuskannya",
                "Karena bisnis untung pun bisa kehabisan kas dan bangkrut",
                "Karena menggantikan neraca",
                "Karena lebih mudah dibuat",
              ],
              answer: 1,
              explain:
                "Laba bukan kas; tanpa kas yang cukup bisnis tetap bisa kolaps.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL MAHIR ---------------- */
    {
      id: "acc-mahir",
      level: "Mahir",
      title: "Analisis & Keputusan Bisnis",
      summary: "Akrual, rasio keuangan, dan akuntansi untuk pengambilan keputusan.",
      lessons: [
        {
          id: "acc-a-1",
          title: "Basis Akrual vs Basis Kas",
          duration: "10 menit",
          content: `
<p>Ada dua cara menentukan <b>kapan</b> mencatat pendapatan & beban:</p>

<table class="tbl">
  <tr><th></th><th>Basis Kas (Cash)</th><th>Basis Akrual (Accrual)</th></tr>
  <tr><td>Kapan dicatat</td><td>Saat uang berpindah</td><td>Saat transaksi <i>terjadi</i> (terlepas dari uangnya)</td></tr>
  <tr><td>Contoh penjualan kredit</td><td>Dicatat nanti saat dibayar</td><td>Dicatat sekarang sebagai pendapatan + piutang</td></tr>
  <tr><td>Akurasi</td><td>Sederhana, kurang akurat</td><td>Lebih akurat menggambarkan kinerja</td></tr>
</table>

<div class="callout">
<b>Contoh:</b> Kamu menyelesaikan jasa desain Rp5jt pada Januari, tapi klien baru bayar Februari.
<ul>
  <li><b>Akrual:</b> pendapatan dicatat di <b>Januari</b> (saat jasa selesai).</li>
  <li><b>Kas:</b> pendapatan dicatat di <b>Februari</b> (saat uang masuk).</li>
</ul>
</div>

<h3>Prinsip pencocokan (matching)</h3>
<p>Basis akrual menerapkan <b>matching principle</b>: beban dicocokkan dengan pendapatan pada periode yang sama. Ini membuat laba rugi mencerminkan kinerja sesungguhnya. Karena itu, <b>basis akrual</b> adalah standar akuntansi resmi untuk kebanyakan bisnis.</p>
`,
          keyPoints: [
            "Basis kas: catat saat uang berpindah. Basis akrual: catat saat transaksi terjadi.",
            "Akrual lebih akurat dan merupakan standar untuk kebanyakan bisnis.",
            "Matching principle: cocokkan beban dengan pendapatan pada periode yang sama.",
          ],
          quiz: [
            {
              q: "Jasa selesai Januari, dibayar Februari. Dengan basis akrual, pendapatan dicatat?",
              options: ["Februari", "Januari", "Maret", "Tidak dicatat"],
              answer: 1,
              explain:
                "Akrual mencatat pendapatan saat jasa selesai (Januari), bukan saat dibayar.",
            },
            {
              q: "Apa itu matching principle?",
              options: [
                "Mencocokkan warna laporan",
                "Mencocokkan beban dengan pendapatan pada periode yang sama",
                "Menyamakan aset dan kewajiban",
                "Mencocokkan tanggal gajian",
              ],
              answer: 1,
              explain:
                "Beban diakui pada periode yang sama dengan pendapatan yang dihasilkannya.",
            },
          ],
        },
        {
          id: "acc-a-2",
          title: "Membaca Rasio Keuangan",
          duration: "11 menit",
          content: `
<p><b>Rasio keuangan</b> mengubah angka laporan menjadi indikator yang mudah dibandingkan. Tiga kelompok utama:</p>

<h3>1. Likuiditas — sanggup bayar utang jangka pendek?</h3>
<ul>
  <li><b>Current Ratio</b> = Aset Lancar ÷ Kewajiban Lancar. Nilai > 1 berarti aset lancar cukup menutup utang jangka pendek.</li>
</ul>

<h3>2. Profitabilitas — seberapa untung?</h3>
<ul>
  <li><b>Margin Laba Bersih</b> = Laba Bersih ÷ Pendapatan × 100%.</li>
  <li><b>ROE (Return on Equity)</b> = Laba Bersih ÷ Ekuitas × 100% — imbal hasil bagi modal pemilik.</li>
</ul>

<h3>3. Solvabilitas — seberapa besar bergantung pada utang?</h3>
<ul>
  <li><b>Debt-to-Equity (DER)</b> = Total Utang ÷ Ekuitas. Makin tinggi, makin berisiko.</li>
</ul>

<div class="callout">
<b>Contoh:</b> Laba bersih Rp20jt, pendapatan Rp200jt → margin = 20/200 = <b>10%</b>. Artinya tiap Rp100 penjualan menghasilkan Rp10 laba.
</div>

<div class="callout warn">
<b>Ingat:</b> rasio bermakna saat <b>dibandingkan</b> — dengan periode lalu, pesaing, atau rata-rata industri. Satu angka sendirian tidak banyak bercerita.
</div>
`,
          keyPoints: [
            "Likuiditas (current ratio) menilai kemampuan bayar utang jangka pendek.",
            "Profitabilitas (margin, ROE) menilai seberapa untung bisnis.",
            "Solvabilitas (DER) menilai ketergantungan pada utang; rasio bermakna saat dibandingkan.",
          ],
          practice: [
            { type: "number", q: "Aset lancar Rp90jt, kewajiban lancar Rp60jt. Berapa current ratio? (tulis desimal, mis. 1.5)", answer: 1.5, tol: 0.05, hint: "Current ratio = Aset Lancar ÷ Kewajiban Lancar.", solution: "90 ÷ 60 = 1,5 (aset lancar cukup menutup utang jangka pendek)." },
            { type: "number", q: "Laba bersih Rp24jt, ekuitas Rp120jt. Berapa ROE? (dalam %)", answer: 20, unit: "%", hint: "ROE = Laba Bersih ÷ Ekuitas × 100%.", solution: "24 ÷ 120 × 100% = 20%." },
          ],
          quiz: [
            {
              q: "Laba bersih Rp30jt, pendapatan Rp300jt. Margin laba bersihnya?",
              options: ["30%", "10%", "3%", "100%"],
              answer: 1,
              explain: "Margin = 30 ÷ 300 × 100% = 10%.",
            },
            {
              q: "Current ratio di bawah 1 menandakan?",
              options: [
                "Bisnis sangat sehat",
                "Aset lancar mungkin tak cukup menutup utang jangka pendek",
                "Tidak punya utang",
                "Laba sangat besar",
              ],
              answer: 1,
              explain:
                "Current ratio < 1 berarti kewajiban lancar melebihi aset lancar — sinyal risiko likuiditas.",
            },
          ],
        },
        {
          id: "acc-a-3",
          title: "Penyusutan, Persediaan & Modal Kerja",
          duration: "10 menit",
          content: `
<p>Tiga konsep penting dalam akuntansi sehari-hari bisnis:</p>

<h3>1. Penyusutan (Depresiasi)</h3>
<p>Aset jangka panjang (mesin, kendaraan) kehilangan nilai seiring waktu. Biayanya <b>disebar</b> selama masa manfaatnya, bukan dibebankan sekaligus.</p>
<div class="callout">
<b>Metode garis lurus:</b> Penyusutan/tahun = (Harga − Nilai sisa) ÷ Masa manfaat. Mesin Rp50jt, nilai sisa 0, manfaat 5 tahun → Rp10jt/tahun.
</div>

<h3>2. Persediaan (Inventory)</h3>
<p>Barang yang siap dijual. Saat harga beli berubah-ubah, ada metode menilainya:</p>
<ul>
  <li><b>FIFO</b> (First In, First Out) — barang yang masuk duluan dianggap terjual duluan.</li>
  <li><b>Rata-rata (Average)</b> — pakai harga rata-rata.</li>
</ul>

<h3>3. Modal Kerja (Working Capital)</h3>
<div class="callout">
<b>Modal Kerja = Aset Lancar − Kewajiban Lancar.</b> Menunjukkan "napas" jangka pendek bisnis untuk operasi harian. Positif = sehat; negatif = perlu waspada.
</div>
`,
          keyPoints: [
            "Penyusutan menyebar biaya aset jangka panjang selama masa manfaatnya (mis. garis lurus).",
            "Persediaan bisa dinilai dengan FIFO atau rata-rata saat harga berubah.",
            "Modal Kerja = Aset Lancar − Kewajiban Lancar; mengukur napas operasional.",
          ],
          quiz: [
            {
              q: "Mesin Rp60jt, nilai sisa 0, masa manfaat 6 tahun. Penyusutan garis lurus per tahun?",
              options: ["Rp6jt", "Rp10jt", "Rp60jt", "Rp12jt"],
              answer: 1,
              explain: "(60 − 0) ÷ 6 = Rp10jt per tahun.",
            },
            {
              q: "Modal kerja dihitung dari?",
              options: [
                "Aset Lancar − Kewajiban Lancar",
                "Pendapatan − Beban",
                "Aset − Ekuitas",
                "Laba − Pajak",
              ],
              answer: 0,
              explain: "Modal Kerja = Aset Lancar − Kewajiban Lancar.",
            },
          ],
        },
        {
          id: "acc-a-4",
          title: "Akuntansi untuk Keputusan Bisnis",
          duration: "11 menit",
          content: `
<p>Akuntansi bukan sekadar mencatat masa lalu — ia alat untuk <b>mengambil keputusan</b>.</p>

<h3>Biaya tetap vs variabel</h3>
<ul>
  <li><b>Biaya tetap</b> — tidak berubah ikut produksi (sewa, gaji tetap).</li>
  <li><b>Biaya variabel</b> — naik-turun ikut jumlah produksi (bahan baku).</li>
</ul>

<h3>Margin kontribusi & titik impas (break-even)</h3>
<div class="callout">
<b>Margin Kontribusi</b> = Harga jual − Biaya variabel per unit.<br>
<b>Titik Impas (unit)</b> = Biaya Tetap ÷ Margin Kontribusi per unit.
</div>
<p><b>Contoh:</b> Biaya tetap Rp10jt/bulan. Tiap produk dijual Rp50rb, biaya variabelnya Rp30rb → margin kontribusi Rp20rb. Titik impas = 10.000.000 ÷ 20.000 = <b>500 unit</b>/bulan. Di bawah itu rugi, di atasnya untung.</p>

<h3>Etika & integritas</h3>
<div class="callout warn">
<b>Penting:</b> Laporan keuangan harus jujur. Memanipulasi angka ("creative accounting") bisa berakibat hukum, kehilangan kepercayaan investor, dan kehancuran bisnis. Integritas adalah fondasi akuntansi.
</div>

<div class="callout">
<b>Selamat! 🎓</b> Kamu telah menempuh perjalanan dari persamaan dasar, debit-kredit, laporan keuangan, sampai analisis rasio & keputusan bisnis. Kini kamu bisa "membaca" kesehatan sebuah bisnis lewat angkanya.
</div>
`,
          keyPoints: [
            "Biaya tetap tidak ikut produksi; biaya variabel ikut produksi.",
            "Titik impas (unit) = Biaya Tetap ÷ Margin Kontribusi per unit.",
            "Integritas & kejujuran laporan adalah fondasi akuntansi.",
          ],
          practice: [
            { type: "number", q: "Biaya tetap Rp30jt/bulan, margin kontribusi Rp50.000/unit. Berapa titik impas (unit)?", answer: 600, unit: "unit", hint: "Titik impas = Biaya Tetap ÷ Margin Kontribusi per unit. Ingat Rp30jt = 30.000.000.", solution: "30.000.000 ÷ 50.000 = 600 unit." },
            { type: "number", q: "Harga jual Rp80.000/unit, biaya variabel Rp50.000/unit. Berapa margin kontribusi per unit? (Rupiah)", answer: 30000, tol: 1, hint: "Margin kontribusi = Harga jual − Biaya variabel.", solution: "80.000 − 50.000 = Rp30.000." },
          ],
          quiz: [
            {
              q: "Biaya tetap Rp20jt, margin kontribusi Rp40rb/unit. Titik impasnya?",
              options: ["200 unit", "500 unit", "800 unit", "2.000 unit"],
              answer: 1,
              explain: "20.000.000 ÷ 40.000 = 500 unit.",
            },
            {
              q: "Manakah contoh biaya variabel?",
              options: [
                "Sewa gedung bulanan",
                "Bahan baku yang naik-turun ikut jumlah produksi",
                "Gaji tetap manajer",
                "Asuransi tahunan",
              ],
              answer: 1,
              explain: "Biaya variabel berubah mengikuti volume produksi, seperti bahan baku.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL PROYEK (PRAKTIK BISNIS) ---------------- */
    {
      id: "acc-proyek",
      level: "Proyek",
      title: "Membaca Laporan & Membangun Bisnis",
      summary: "Praktik nyata: baca laporan bisnis/saham/crypto, kelola keuangan, dan bangun bisnis.",
      lessons: [
        {
          id: "acc-pro-1",
          title: "Studi Kasus: Membaca Laporan Perusahaan",
          duration: "12 menit",
          content: `
<p>Mari "membaca" sebuah bisnis lewat angkanya. Contoh: <b>Warung Kopi Sejahtera</b> (dalam juta Rupiah).</p>

<h3>Laporan Laba Rugi (setahun)</h3>
<table class="tbl">
  <tr><td>Pendapatan (penjualan)</td><td>500</td></tr>
  <tr><td>− HPP (biji kopi, susu, gelas)</td><td>(200)</td></tr>
  <tr><td><b>= Laba Kotor</b></td><td><b>300</b> (margin 60%)</td></tr>
  <tr><td>− Beban (sewa, gaji, listrik)</td><td>(240)</td></tr>
  <tr><td><b>= Laba Bersih</b></td><td><b>60</b> (margin 12%)</td></tr>
</table>

<h3>Neraca (per 31 Des)</h3>
<table class="tbl">
  <tr><td>Aset (kas, peralatan, persediaan)</td><td>250</td></tr>
  <tr><td>Kewajiban (utang bank)</td><td>100</td></tr>
  <tr><td><b>Ekuitas (modal pemilik)</b></td><td><b>150</b></td></tr>
</table>

<h3>Yang dilihat seorang analis</h3>
<ul>
  <li><b>Tumbuh atau tidak?</b> Bandingkan pendapatan dengan tahun lalu.</li>
  <li><b>Margin sehat?</b> Laba kotor 60% & laba bersih 12% tergolong sehat untuk warung kopi.</li>
  <li><b>Utang wajar?</b> Utang 100 vs ekuitas 150 → masih terkendali.</li>
  <li><b>Menghasilkan kas?</b> Cek laporan arus kas — laba di kertas harus didukung kas nyata.</li>
</ul>

<div class="callout warn">
<b>Tanda bahaya (red flags):</b> pendapatan naik tapi laba turun terus, utang membengkak, piutang menumpuk (banyak penjualan belum dibayar), atau laba besar tapi kas selalu menipis.
</div>
`,
          keyPoints: [
            "Baca bisnis lewat 3 hal: pertumbuhan pendapatan, margin laba, dan tingkat utang.",
            "Laba kotor & laba bersih menunjukkan seberapa efisien dan menguntungkan bisnis.",
            "Selalu cek arus kas — laba di kertas harus didukung kas nyata.",
            "Red flags: laba turun, utang membengkak, piutang menumpuk, kas menipis.",
          ],
          quiz: [
            {
              q: "Pendapatan Rp500jt, laba bersih Rp60jt. Berapa margin laba bersihnya?",
              options: ["6%", "12%", "60%", "40%"],
              answer: 1,
              explain: "Margin = 60 ÷ 500 × 100% = 12%.",
            },
            {
              q: "Manakah 'red flag' saat membaca laporan keuangan?",
              options: [
                "Margin stabil dan kas bertumbuh",
                "Laba di kertas besar tapi kas terus menipis",
                "Utang kecil dibanding ekuitas",
                "Pendapatan naik dan laba ikut naik",
              ],
              answer: 1,
              explain:
                "Laba tanpa kas (mis. banyak piutang) adalah sinyal bahaya likuiditas.",
            },
          ],
        },
        {
          id: "acc-pro-2",
          title: "Analisis Saham dari Laporan Keuangan",
          duration: "13 menit",
          content: `
<p>Saham = sepotong kepemilikan perusahaan. Investor menilai saham lewat <b>laporan keuangan</b> dan beberapa rasio kunci.</p>

<table class="tbl">
  <tr><th>Rasio</th><th>Rumus</th><th>Arti singkat</th></tr>
  <tr><td><b>EPS</b></td><td>Laba bersih ÷ jumlah saham</td><td>Laba per lembar saham</td></tr>
  <tr><td><b>P/E</b></td><td>Harga saham ÷ EPS</td><td>Berapa kali laba yang dibayar; makin tinggi makin "mahal"</td></tr>
  <tr><td><b>PBV</b></td><td>Harga saham ÷ nilai buku per saham</td><td>Harga vs ekuitas per saham</td></tr>
  <tr><td><b>ROE</b></td><td>Laba bersih ÷ ekuitas × 100%</td><td>Imbal hasil bagi modal pemilik</td></tr>
  <tr><td><b>DER</b></td><td>Total utang ÷ ekuitas</td><td>Ketergantungan pada utang (risiko)</td></tr>
  <tr><td><b>Dividend yield</b></td><td>Dividen per saham ÷ harga</td><td>Imbal hasil tunai per tahun</td></tr>
</table>

<div class="callout">
<b>Contoh:</b> Harga saham Rp1.000, EPS Rp100 → P/E = 10. Artinya kamu membayar 10× laba setahun. Bandingkan dengan pesaing & rata-rata industri sebelum menilai mahal/murah.
</div>

<h3>Di mana datanya?</h3>
<p>Perusahaan publik wajib menerbitkan <b>Laporan Tahunan</b> dan laporan keuangan triwulan (di Indonesia: lewat Bursa Efek Indonesia / situs perusahaan). Di sana ada laba rugi, neraca, arus kas, dan catatan.</p>

<div class="callout warn">
<b>Penting:</b> rasio hanya bermakna saat <b>dibandingkan</b> (antar waktu, pesaing, industri) dan dipadukan dengan kualitas bisnis. Ini edukasi, <b>bukan saran investasi</b>. Saham berisiko.
</div>
`,
          keyPoints: [
            "Saham dinilai lewat rasio: EPS, P/E, PBV, ROE, DER, dividend yield.",
            "P/E = Harga ÷ EPS — menunjukkan seberapa 'mahal' harga relatif terhadap laba.",
            "Data dari Laporan Tahunan & laporan triwulan perusahaan publik.",
            "Rasio bermakna saat dibandingkan; ini edukasi, bukan saran investasi.",
          ],
          practice: [
            { type: "number", q: "Harga saham Rp1.200, EPS Rp150. Berapa P/E rasionya?", answer: 8, tol: 0.1, hint: "P/E = Harga ÷ EPS.", solution: "1.200 ÷ 150 = 8." },
            { type: "number", q: "Laba bersih Rp80jt, jumlah saham 2 juta lembar. Berapa EPS-nya? (Rupiah)", answer: 40, tol: 0.5, hint: "EPS = Laba bersih ÷ jumlah saham.", solution: "80.000.000 ÷ 2.000.000 = Rp40." },
          ],
          quiz: [
            {
              q: "Apa arti P/E rasio yang tinggi?",
              options: [
                "Saham pasti murah",
                "Investor membayar lebih banyak per satuan laba (relatif 'mahal')",
                "Perusahaan pasti rugi",
                "Tidak ada artinya",
              ],
              answer: 1,
              explain:
                "P/E tinggi = harga relatif mahal terhadap laba; perlu dibandingkan dengan industri.",
            },
            {
              q: "ROE mengukur?",
              options: [
                "Jumlah karyawan",
                "Imbal hasil laba terhadap modal pemilik (ekuitas)",
                "Harga saham besok",
                "Jumlah utang saja",
              ],
              answer: 1,
              explain: "ROE = Laba bersih ÷ Ekuitas — efisiensi menghasilkan laba dari modal.",
            },
          ],
        },
        {
          id: "acc-pro-3",
          title: "Membaca 'Laporan' Proyek Crypto",
          duration: "12 menit",
          content: `
<p>Proyek crypto tidak punya laporan keuangan klasik, tapi punya datanya sendiri yang bisa "dibaca" untuk menilai kesehatan & risiko.</p>

<h3>1. Tokenomics (ekonomi token)</h3>
<ul>
  <li><b>Total/Max supply</b> — berapa banyak token akan ada? Pasokan tak terbatas berisiko inflasi.</li>
  <li><b>Distribusi</b> — siapa memegang? Jika tim/investor memegang porsi sangat besar, hati-hati.</li>
  <li><b>Vesting</b> — jadwal pelepasan token tim; pelepasan besar bisa menekan harga.</li>
</ul>

<h3>2. Metrik on-chain (transparan di blockchain)</h3>
<ul>
  <li><b>TVL</b> (Total Value Locked) — total dana yang "dikunci" di protokol DeFi; ukuran adopsi.</li>
  <li><b>Pengguna & transaksi aktif</b> — apakah benar dipakai, bukan sekadar hype?</li>
  <li><b>Pendapatan/fee protokol</b> — apakah menghasilkan pemasukan nyata?</li>
  <li><b>Treasury</b> — kas/aset proyek untuk bertahan & berkembang.</li>
</ul>

<div class="callout">
<b>Analogi:</b> TVL & pengguna aktif ibarat "pendapatan & pelanggan", treasury ibarat "kas", distribusi token ibarat "struktur kepemilikan saham". Polanya mirip menilai bisnis.
</div>

<div class="callout warn">
<b>Tanda bahaya:</b> whitepaper tanpa detail teknis, tim anonim tanpa rekam jejak, janji imbal hasil "pasti & besar", token tim porsi sangat besar, dan tidak ada produk yang benar-benar dipakai. Selalu <b>DYOR</b> — ini edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Proyek crypto dinilai lewat tokenomics (supply, distribusi, vesting) & metrik on-chain.",
            "TVL, pengguna aktif, fee protokol, dan treasury ~ pendapatan/pelanggan/kas pada bisnis.",
            "Red flags: tim anonim, janji untung pasti, token tim berporsi besar, tanpa produk nyata.",
          ],
          quiz: [
            {
              q: "Apa itu TVL pada proyek DeFi?",
              options: [
                "Total Value Locked — dana yang dikunci di protokol, ukuran adopsi",
                "Jumlah developer",
                "Harga token besok",
                "Total iklan",
              ],
              answer: 0,
              explain:
                "TVL mencerminkan seberapa banyak nilai dipercayakan ke protokol.",
            },
            {
              q: "Manakah tanda bahaya proyek crypto?",
              options: [
                "Kode open-source & tim publik",
                "Janji imbal hasil 'pasti & besar' dengan tim anonim",
                "Pengguna aktif banyak",
                "Treasury transparan",
              ],
              answer: 1,
              explain:
                "Janji untung pasti + tim anonim adalah pola klasik penipuan.",
            },
          ],
        },
        {
          id: "acc-pro-4",
          title: "Mengelola Keuangan Bisnis",
          duration: "12 menit",
          content: `
<p>Banyak bisnis untung di atas kertas tapi tetap kolaps karena <b>salah mengelola kas</b>. Berikut praktik pengelolaan keuangan bisnis.</p>

<h3>Kebiasaan wajib</h3>
<ol>
  <li><b>Pisahkan uang pribadi & bisnis</b> — rekening berbeda. Ini fondasi semua pencatatan.</li>
  <li><b>Catat semua transaksi</b> — pemasukan & pengeluaran, sekecil apa pun.</li>
  <li><b>Kelola arus kas</b> — pastikan kas masuk cukup menutup kas keluar tiap periode.</li>
  <li><b>Buat anggaran (budget)</b> — rencanakan pengeluaran agar tidak bocor.</li>
  <li><b>Dana darurat</b> — simpan kas untuk menutup beberapa bulan biaya tetap.</li>
</ol>

<div class="callout">
<b>Modal kerja</b> = Aset Lancar − Kewajiban Lancar. Ini "napas" harian bisnis. Kelola dengan: tagih piutang tepat waktu, atur pembayaran ke pemasok, dan jangan menumpuk persediaan berlebihan.
</div>

<h3>Menetapkan harga (pricing)</h3>
<p>Harga harus menutup <b>biaya + margin</b>. Mulai dari biaya per unit (HPP + porsi biaya tetap), tambahkan margin yang wajar, lalu cek terhadap harga pasar & daya beli pelanggan.</p>

<div class="callout warn">
<b>Ingat:</b> Laba ≠ Kas. Penjualan kredit yang belum dibayar menambah laba tapi <b>bukan</b> kas. Pantau kas seketat memantau laba.
</div>
`,
          keyPoints: [
            "Pisahkan uang pribadi & bisnis, dan catat semua transaksi.",
            "Kelola arus kas, buat anggaran, dan siapkan dana darurat.",
            "Modal Kerja = Aset Lancar − Kewajiban Lancar; jaga 'napas' harian bisnis.",
            "Harga harus menutup biaya + margin; ingat laba tidak sama dengan kas.",
          ],
          quiz: [
            {
              q: "Kebiasaan paling mendasar dalam mengelola keuangan bisnis?",
              options: [
                "Mencampur uang pribadi & bisnis",
                "Memisahkan rekening pribadi & bisnis dan mencatat semua transaksi",
                "Tidak membuat anggaran",
                "Menghabiskan semua kas",
              ],
              answer: 1,
              explain:
                "Pemisahan & pencatatan adalah fondasi pengelolaan keuangan yang sehat.",
            },
            {
              q: "Mengapa memantau kas sama pentingnya dengan laba?",
              options: [
                "Karena kas selalu sama dengan laba",
                "Karena bisnis untung pun bisa kehabisan kas dan kolaps",
                "Karena pajak",
                "Karena kas tidak penting",
              ],
              answer: 1,
              explain:
                "Laba di kertas tanpa kas yang cukup tetap bisa membangkrutkan bisnis.",
            },
          ],
        },
        {
          id: "acc-pro-5",
          title: "Membangun & Menilai Bisnis",
          duration: "13 menit",
          content: `
<p>Akuntansi adalah alat untuk membangun bisnis yang sehat. Beberapa konsep kunci untuk pemilik bisnis:</p>

<h3>Model bisnis & unit economics</h3>
<ul>
  <li><b>Model bisnis</b> — bagaimana persisnya kamu menghasilkan uang?</li>
  <li><b>Unit economics</b> — untung/rugi per satu unit/pelanggan. Jika tiap unit rugi, makin banyak jual makin rugi.</li>
  <li><b>Margin kontribusi</b> = Harga − Biaya variabel per unit. Inilah yang menutup biaya tetap.</li>
</ul>

<h3>Titik impas & runway</h3>
<div class="callout">
<b>Titik Impas (unit)</b> = Biaya Tetap ÷ Margin Kontribusi per unit.<br>
<b>Runway</b> = Kas tersedia ÷ pengeluaran bersih per bulan = berapa bulan bisnis bisa bertahan.
</div>

<h3>Pendanaan</h3>
<ul>
  <li><b>Bootstrapping</b> — tumbuh dari kas sendiri & laba. Kontrol penuh, tumbuh perlahan.</li>
  <li><b>Investor</b> — dapat modal besar, tapi melepas sebagian kepemilikan (ekuitas) & kendali.</li>
</ul>

<p>Pemilik yang paham angkanya bisa mengambil keputusan lebih baik: kapan menaikkan harga, menambah karyawan, atau mencari pendanaan.</p>

<div class="callout">
<b>Selamat! 🎓</b> Kamu telah menempuh akuntansi dari persamaan dasar sampai membaca laporan bisnis/saham/crypto, mengelola keuangan, dan menilai bisnis. Kini kamu bisa "berbicara bahasa bisnis" dengan percaya diri.
</div>

<div class="callout warn">
<b>Pengingat:</b> seluruh materi ini edukasi, bukan saran finansial/investasi.
</div>
`,
          keyPoints: [
            "Unit economics: pastikan tiap unit/pelanggan menguntungkan sebelum menskalakan.",
            "Titik Impas = Biaya Tetap ÷ Margin Kontribusi; Runway = Kas ÷ pengeluaran bulanan.",
            "Pendanaan: bootstrapping (kendali penuh) vs investor (modal besar, lepas sebagian ekuitas).",
            "Memahami angka membuat keputusan bisnis lebih tepat.",
          ],
          practice: [
            { type: "number", q: "Kas Rp120jt, pengeluaran bersih Rp20jt/bulan. Berapa bulan runway bisnisnya?", answer: 6, unit: "bulan", hint: "Runway = Kas ÷ pengeluaran per bulan.", solution: "120 ÷ 20 = 6 bulan." },
            { type: "number", q: "Biaya tetap Rp15jt/bulan, margin kontribusi Rp30.000/unit. Titik impas (unit)?", answer: 500, unit: "unit", hint: "Titik impas = Biaya Tetap ÷ Margin Kontribusi per unit.", solution: "15.000.000 ÷ 30.000 = 500 unit." },
          ],
          quiz: [
            {
              q: "Apa itu 'runway' sebuah bisnis?",
              options: [
                "Landasan pacu pesawat",
                "Berapa bulan bisnis bisa bertahan dengan kas yang ada",
                "Jumlah pelanggan",
                "Total utang",
              ],
              answer: 1,
              explain:
                "Runway = Kas ÷ pengeluaran bulanan — daya tahan finansial bisnis.",
            },
            {
              q: "Konsekuensi memilih pendanaan dari investor?",
              options: [
                "Tidak ada konsekuensi",
                "Dapat modal besar tetapi melepas sebagian kepemilikan & kendali",
                "Bisnis jadi gratis",
                "Tidak perlu laporan keuangan",
              ],
              answer: 1,
              explain:
                "Modal investor ditukar dengan ekuitas (kepemilikan) dan sering sebagian kendali.",
            },
          ],
        },
        {
          id: "acc-pro-studi",
          title: "Studi Kasus Mendalam: Untung Tapi Krisis Kas",
          duration: "12 menit",
          content: `
<p>Pelajaran paling mahal dalam bisnis: <b>untung di kertas tidak menjamin ada uang di kas.</b> Mari hitung sebuah skenario nyata.</p>

<h3>Skenario: Toko Roti "Manis"</h3>
<p>Bulan ini toko mencatat <b>laba Rp15 juta</b> — terdengar bagus! Tapi banyak penjualan dilakukan secara <b>kredit</b> (kafe langganan bayar belakangan), sehingga uang tunai belum masuk. Mari lihat kondisi kasnya:</p>
<ul>
  <li>Kas tersedia: <b>Rp30 juta</b></li>
  <li>Pengeluaran tunai per bulan (gaji, bahan, sewa): <b>Rp25 juta</b></li>
  <li>Piutang (penjualan kredit belum dibayar): <b>Rp40 juta</b></li>
</ul>

<h3>Coba sendiri — hitung "napas" (runway) tokonya 👇</h3>
<div data-demo="js-playground">const kas = 30;                // juta
const pengeluaranBulanan = 25; // juta
const piutang = 40;            // penjualan kredit belum dibayar

console.log("Laba di kertas: Rp15 jt (kelihatan sehat)");
console.log("Tapi runway kas sekarang: " + (kas / pengeluaranBulanan).toFixed(1) + " bulan");

// Jika piutang berhasil ditagih:
const kasBaru = kas + piutang;
console.log("Jika piutang Rp" + piutang + " jt tertagih, kas jadi Rp" + kasBaru + " jt");
console.log("Runway baru: " + (kasBaru / pengeluaranBulanan).toFixed(1) + " bulan");
console.log("Pelajaran: kejar penagihan piutang agar tidak krisis kas!");</div>

<div class="callout warn">
<b>Inti pelajaran:</b> runway hanya <b>1,2 bulan</b> meski laba "bagus". Jika piutang tak tertagih tepat waktu, toko bisa gagal bayar gaji walau untung. Solusinya: <b>kelola piutang</b> (tagih tepat waktu), jaga kas, dan jangan terlalu longgar memberi kredit.
</div>

<h3>Apa yang dilakukan pemilik cerdas</h3>
<ul>
  <li>Memantau <b>kas</b> seketat memantau laba.</li>
  <li>Menetapkan tenggat & menagih <b>piutang</b> secara disiplin.</li>
  <li>Menyiapkan <b>dana darurat</b> beberapa bulan biaya tetap.</li>
</ul>
`,
          keyPoints: [
            "Untung di kertas tidak sama dengan uang tunai di kas — penjualan kredit menambah laba, bukan kas.",
            "Runway = Kas ÷ pengeluaran bulanan; bisa sangat pendek meski laba terlihat sehat.",
            "Kelola piutang (tagih tepat waktu) dan siapkan dana darurat agar tidak krisis kas.",
          ],
          practice: [
            { type: "number", q: "Kas Rp30jt, pengeluaran Rp25jt/bulan. Berapa runway-nya? (bulan, 1 desimal — tulis 1.2)", answer: 1.2, tol: 0.05, hint: "Runway = Kas ÷ pengeluaran bulanan.", solution: "30 ÷ 25 = 1,2 bulan." },
            { type: "number", q: "Setelah piutang Rp40jt tertagih, kas jadi Rp70jt. Berapa runway barunya? (bulan, 1 desimal)", answer: 2.8, tol: 0.05, hint: "Runway = Kas baru ÷ pengeluaran bulanan.", solution: "70 ÷ 25 = 2,8 bulan." },
          ],
          quiz: [
            {
              q: "Mengapa toko bisa untung tapi tetap krisis kas?",
              options: [
                "Karena pajak terlalu tinggi",
                "Karena banyak penjualan kredit — laba tercatat tapi uang tunai belum masuk",
                "Karena harga bahan turun",
                "Karena tidak punya utang",
              ],
              answer: 1,
              explain:
                "Penjualan kredit menambah laba & piutang, tetapi belum menambah kas.",
            },
            {
              q: "Tindakan paling tepat menghindari krisis kas?",
              options: [
                "Memberi kredit sebanyak-banyaknya",
                "Menagih piutang tepat waktu & memantau kas seketat laba",
                "Mengabaikan arus kas",
                "Menambah pengeluaran",
              ],
              answer: 1,
              explain:
                "Disiplin menagih piutang & memantau kas menjaga likuiditas bisnis.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL FUNDAMENTAL (METRIK KEUANGAN) ---------------- */
    {
      id: "acc-fundamental",
      level: "Fundamental",
      title: "Metrik Keuangan & Dampaknya",
      summary: "Kuasai metrik kunci dari nol: Net Profit, Free Cash Flow, ROI, ROE/ROA, RAB — dan dampaknya ke perusahaan.",
      lessons: [
        {
          id: "acc-fund-1",
          title: "Net Profit (Laba Bersih) & Kualitasnya",
          duration: "11 menit",
          content: `
<p><b>Laba Bersih (Net Profit)</b> adalah angka paling akhir di laporan laba rugi — sering disebut <b>"bottom line"</b>. Inilah sisa uang setelah SEMUA dikurangi.</p>

<div class="callout">
<b>Rumus:</b> Laba Bersih = Pendapatan − Semua Beban − Bunga − Pajak.<br>
<b>Net Margin</b> = Laba Bersih ÷ Pendapatan × 100% (berapa % penjualan yang jadi laba).
</div>

<h3>Kualitas laba (penting!)</h3>
<p>Tidak semua laba sama. Laba dari <b>operasi inti</b> yang berulang jauh lebih berharga daripada laba <b>sekali saja</b> (mis. dari menjual aset/tanah). Analis mengecek: apakah labanya <b>berkelanjutan</b>?</p>

<h3>💥 Dampak pada perusahaan</h3>
<table class="tbl">
  <tr><th>Laba bersih SEHAT & tumbuh</th><th>Laba bersih KECIL / negatif</th></tr>
  <tr><td>Menarik investor, harga saham cenderung naik</td><td>Sulit menarik modal; harga saham tertekan</td></tr>
  <tr><td>Bisa membagi dividen ke pemilik</td><td>Tidak ada dividen</td></tr>
  <tr><td>Danai ekspansi dari laba sendiri (tanpa utang)</td><td>Terpaksa berutang / jual saham baru</td></tr>
  <tr><td>Menambah ekuitas (laba ditahan)</td><td>Menggerus modal; berisiko PHK & bangkrut</td></tr>
</table>

<div class="callout warn">
<b>Ingat:</b> laba bersih besar tetapi berasal dari hal sekali-saja bisa <b>menyesatkan</b>. Selalu cek dari mana labanya berasal.
</div>
`,
          keyPoints: [
            "Laba Bersih = Pendapatan − semua beban − bunga − pajak (bottom line).",
            "Net margin = Laba Bersih ÷ Pendapatan; ukuran efisiensi menghasilkan laba.",
            "Kualitas laba penting: laba operasi inti > laba sekali-saja.",
            "Dampak: laba sehat menarik investor, mendanai dividen & ekspansi; laba lemah menggerus modal & memicu PHK.",
          ],
          quiz: [
            {
              q: "Mengapa 'kualitas laba' penting?",
              options: [
                "Karena angka besar selalu bagus",
                "Karena laba dari operasi inti (berulang) lebih berharga daripada laba sekali-saja",
                "Karena pajak",
                "Tidak penting",
              ],
              answer: 1,
              explain:
                "Laba berkelanjutan dari operasi inti lebih bernilai daripada laba sesekali (mis. jual aset).",
            },
            {
              q: "Dampak laba bersih yang sehat & tumbuh bagi perusahaan?",
              options: [
                "Harus PHK karyawan",
                "Menarik investor, bisa bayar dividen, dan mendanai ekspansi tanpa utang",
                "Harga saham pasti turun",
                "Tidak berpengaruh",
              ],
              answer: 1,
              explain:
                "Laba sehat memperkuat modal, menarik investor, dan membuka opsi dividen & ekspansi mandiri.",
            },
          ],
        },
        {
          id: "acc-fund-2",
          title: "Free Cash Flow (Arus Kas Bebas)",
          duration: "12 menit",
          content: `
<p><b>Free Cash Flow (FCF)</b> adalah kas <b>nyata</b> yang tersisa setelah perusahaan membiayai operasi DAN menjaga/menumbuhkan asetnya. Banyak profesional menganggapnya lebih jujur daripada laba bersih.</p>

<div class="callout">
<b>Rumus:</b> FCF = Arus Kas Operasi − Belanja Modal (CapEx).<br>
<i>CapEx = uang untuk membeli/memperbarui aset jangka panjang (mesin, gedung).</i>
</div>

<h3>Kenapa lebih "jujur" dari laba?</h3>
<p>Laba bersih memakai aturan akuntansi (akrual, depresiasi) yang bisa "diatur". FCF berbicara soal <b>uang tunai yang benar-benar bebas dipakai</b> — jauh lebih sulit dimanipulasi. Perusahaan bisa <i>untung</i> tapi FCF-nya negatif (mis. semua kas terpakai untuk mesin baru).</p>

<h3>💥 Dampak pada perusahaan</h3>
<ul>
  <li><b>FCF positif besar</b> → bebas membayar utang, membagi dividen, membeli kembali saham (buyback), atau ekspansi <b>tanpa berutang</b>. Tanda perusahaan sehat & mandiri.</li>
  <li><b>FCF negatif terus-menerus</b> → bergantung pada pinjaman/investor untuk bertahan. Berisiko jika pendanaan mengering.</li>
</ul>

<div class="callout">
<b>Contoh:</b> Arus kas operasi Rp100jt, CapEx Rp30jt → FCF = 70jt. Inilah "uang bebas" yang bisa dipakai untuk apa pun tanpa mengganggu operasi.
</div>
`,
          keyPoints: [
            "FCF = Arus Kas Operasi − Belanja Modal (CapEx) = kas bebas yang benar-benar tersisa.",
            "FCF lebih sulit dimanipulasi daripada laba bersih; perusahaan bisa untung tapi FCF negatif.",
            "Dampak: FCF positif mendanai dividen, buyback, bayar utang, & ekspansi mandiri; FCF negatif = bergantung pendanaan luar.",
          ],
          quiz: [
            {
              q: "Rumus Free Cash Flow adalah?",
              options: [
                "Pendapatan − HPP",
                "Arus Kas Operasi − Belanja Modal (CapEx)",
                "Aset − Kewajiban",
                "Laba bersih ÷ ekuitas",
              ],
              answer: 1,
              explain: "FCF = Arus Kas Operasi − CapEx.",
            },
            {
              q: "Mengapa banyak analis lebih memercayai FCF daripada laba bersih?",
              options: [
                "Karena lebih besar angkanya",
                "Karena FCF berbicara soal kas nyata yang bebas dipakai & lebih sulit dimanipulasi",
                "Karena lebih mudah dihitung",
                "Karena mengabaikan pajak",
              ],
              answer: 1,
              explain:
                "FCF mencerminkan uang tunai riil; laba bersih bisa dipengaruhi aturan akuntansi.",
            },
          ],
        },
        {
          id: "acc-fund-3",
          title: "ROI (Return on Investment)",
          duration: "11 menit",
          content: `
<p><b>ROI (Return on Investment)</b> mengukur seberapa <b>menguntungkan</b> sebuah investasi/keputusan dibanding biayanya. Ini alat keputusan paling universal — dipakai untuk apa saja: iklan, mesin, pelatihan, proyek.</p>

<div class="callout">
<b>Rumus:</b> ROI = (Keuntungan dari investasi − Biaya investasi) ÷ Biaya investasi × 100%.
</div>

<h3>Contoh</h3>
<p>Kamu keluarkan Rp10jt untuk iklan, dan iklan itu menghasilkan tambahan laba Rp15jt. ROI = (15 − 10) ÷ 10 × 100% = <b>50%</b>. Artinya tiap Rp1 menghasilkan Rp0,50 keuntungan bersih.</p>

<h3>💥 Dampak pada perusahaan</h3>
<ul>
  <li>Membantu <b>alokasi modal</b>: dahulukan proyek dengan ROI tertinggi.</li>
  <li>ROI <b>negatif</b> = rugi → hentikan atau perbaiki.</li>
  <li>Membuat keputusan berbasis angka, bukan tebakan.</li>
</ul>

<div class="callout warn">
<b>Keterbatasan:</b> ROI dasar <b>mengabaikan waktu</b> (untung 50% dalam 1 bulan ≠ dalam 5 tahun) dan <b>risiko</b>. Untuk proyek jangka panjang, lengkapi dengan analisis lain.
</div>
`,
          keyPoints: [
            "ROI = (Keuntungan − Biaya) ÷ Biaya × 100%; alat keputusan universal.",
            "Dampak: mengarahkan modal ke proyek paling menguntungkan; ROI negatif = hentikan.",
            "Keterbatasan: ROI dasar mengabaikan faktor waktu dan risiko.",
          ],
          practice: [
            { type: "number", q: "Beli mesin Rp50jt, menghasilkan keuntungan Rp65jt. Berapa ROI-nya? (dalam %)", answer: 30, tol: 0.5, hint: "ROI = (Keuntungan − Biaya) ÷ Biaya × 100%.", solution: "(65 − 50) ÷ 50 × 100% = 30%." },
            { type: "number", q: "Iklan Rp20jt menghasilkan tambahan laba Rp20jt. Berapa ROI-nya? (%)", answer: 0, tol: 0.5, hint: "Keuntungan − Biaya = 20 − 20.", solution: "(20 − 20) ÷ 20 = 0% (impas, tidak untung/rugi)." },
          ],
          quiz: [
            {
              q: "Investasi Rp10jt menghasilkan keuntungan Rp13jt. Berapa ROI-nya?",
              options: ["3%", "30%", "130%", "13%"],
              answer: 1,
              explain: "(13 − 10) ÷ 10 × 100% = 30%.",
            },
            {
              q: "Apa keterbatasan utama ROI dasar?",
              options: [
                "Terlalu rumit",
                "Mengabaikan faktor waktu dan risiko",
                "Hanya untuk saham",
                "Selalu salah",
              ],
              answer: 1,
              explain: "ROI dasar tak memperhitungkan berapa lama & seberisiko apa investasinya.",
            },
          ],
        },
        {
          id: "acc-fund-4",
          title: "ROE, ROA & ROIC — Ukuran Efisiensi Modal",
          duration: "12 menit",
          content: `
<p>Tiga rasio "return" ini menjawab: <b>seberapa efisien perusahaan mengubah modal menjadi laba?</b></p>

<table class="tbl">
  <tr><th>Rasio</th><th>Rumus</th><th>Menjawab</th></tr>
  <tr><td><b>ROE</b> (Return on Equity)</td><td>Laba Bersih ÷ Ekuitas</td><td>Imbal hasil bagi <b>modal pemilik</b></td></tr>
  <tr><td><b>ROA</b> (Return on Assets)</td><td>Laba Bersih ÷ Total Aset</td><td>Efisiensi <b>seluruh aset</b> menghasilkan laba</td></tr>
  <tr><td><b>ROIC</b> (Return on Invested Capital)</td><td>Laba operasi setelah pajak ÷ Modal diinvestasikan</td><td>Efisiensi <b>seluruh modal</b> (utang + ekuitas)</td></tr>
</table>

<h3>💥 Dampak pada perusahaan</h3>
<ul>
  <li><b>ROE tinggi</b> → sangat menarik bagi investor (modal mereka "bekerja keras"). TAPI hati-hati: ROE bisa tinggi <b>karena utang besar</b> (leverage) — itu berisiko.</li>
  <li><b>ROA</b> mengungkap apakah aset dipakai efisien; ROA rendah = banyak aset menganggur.</li>
  <li><b>ROIC</b> dibanding biaya modal menentukan apakah perusahaan benar-benar <b>menciptakan nilai</b>.</li>
</ul>

<div class="callout">
<b>Rahasia DuPont:</b> ROE = Margin laba × Perputaran aset × Leverage. Jadi ROE tinggi bisa datang dari margin bagus, aset efisien, ATAU sekadar banyak utang. Bedakan mana yang sehat!
</div>
`,
          keyPoints: [
            "ROE = Laba ÷ Ekuitas (untuk pemilik); ROA = Laba ÷ Aset (efisiensi aset); ROIC = laba operasi bersih ÷ modal diinvestasikan.",
            "Dampak: ROE tinggi menarik investor, tapi bisa berasal dari utang besar (risiko).",
            "DuPont: ROE = margin × perputaran aset × leverage — bedakan sumber ROE yang sehat vs berisiko.",
          ],
          practice: [
            { type: "number", q: "Laba bersih Rp30jt, ekuitas Rp150jt. Berapa ROE-nya? (%)", answer: 20, tol: 0.5, hint: "ROE = Laba ÷ Ekuitas × 100%.", solution: "30 ÷ 150 × 100% = 20%." },
            { type: "number", q: "Laba bersih Rp30jt, total aset Rp300jt. Berapa ROA-nya? (%)", answer: 10, tol: 0.5, hint: "ROA = Laba ÷ Total Aset × 100%.", solution: "30 ÷ 300 × 100% = 10%." },
          ],
          quiz: [
            {
              q: "ROE yang sangat tinggi HARUS diwaspadai jika...",
              options: [
                "Margin labanya bagus",
                "Berasal dari utang (leverage) yang besar",
                "Asetnya efisien",
                "Perusahaan untung",
              ],
              answer: 1,
              explain:
                "ROE tinggi karena utang besar meningkatkan risiko keuangan, bukan kualitas.",
            },
            {
              q: "ROA mengukur?",
              options: [
                "Imbal hasil modal pemilik saja",
                "Seberapa efisien SELURUH aset menghasilkan laba",
                "Harga saham",
                "Jumlah utang",
              ],
              answer: 1,
              explain: "ROA = Laba ÷ Total Aset — efisiensi aset menghasilkan laba.",
            },
          ],
        },
        {
          id: "acc-fund-5",
          title: "RAB (Rencana Anggaran Biaya)",
          duration: "12 menit",
          content: `
<p><b>RAB (Rencana Anggaran Biaya)</b> adalah perkiraan <b>rinci semua biaya</b> sebuah proyek/kegiatan <b>sebelum</b> dijalankan. Sangat umum di Indonesia untuk konstruksi, acara, hingga membuka usaha baru.</p>

<h3>Contoh RAB sederhana (buka kedai kopi)</h3>
<table class="tbl">
  <tr><th>Item</th><th>Volume</th><th>Harga satuan</th><th>Subtotal (jt)</th></tr>
  <tr><td>Sewa tempat (setahun)</td><td>1</td><td>Rp30jt</td><td>30</td></tr>
  <tr><td>Mesin kopi & peralatan</td><td>1 set</td><td>Rp25jt</td><td>25</td></tr>
  <tr><td>Renovasi & interior</td><td>1</td><td>Rp20jt</td><td>20</td></tr>
  <tr><td>Modal bahan awal</td><td>1</td><td>Rp10jt</td><td>10</td></tr>
  <tr><td><b>TOTAL RAB</b></td><td></td><td></td><td><b>85</b></td></tr>
</table>

<h3>Fungsi RAB</h3>
<ul>
  <li>Dasar mengajukan <b>dana/pinjaman</b> ke bank atau investor.</li>
  <li>Dasar menetapkan <b>harga penawaran</b> (untuk kontraktor/jasa).</li>
  <li>Alat <b>kontrol biaya</b> — bandingkan Rencana vs Realisasi (varians).</li>
</ul>

<h3>💥 Dampak pada perusahaan</h3>
<ul>
  <li><b>RAB rapi & realistis</b> → proyek terkendali, dana cukup, kepercayaan pemberi dana tinggi.</li>
  <li><b>RAB asal-asalan / terlalu optimis</b> → biaya membengkak (over budget), kas habis, proyek bisa mangkrak.</li>
</ul>

<div class="callout">
<b>Varians</b> = Realisasi − Rencana. Positif (realisasi lebih besar) = pembengkakan biaya → sinyal perlu evaluasi & pengendalian.
</div>
`,
          keyPoints: [
            "RAB = perkiraan rinci semua biaya proyek sebelum dijalankan (item, volume, harga satuan, total).",
            "Fungsi: dasar pengajuan dana, penetapan harga, dan kontrol biaya (varians rencana vs realisasi).",
            "Dampak: RAB rapi menjaga proyek terkendali & menarik pendanaan; RAB asal memicu pembengkakan biaya.",
          ],
          practice: [
            { type: "number", q: "RAB terdiri dari: sewa Rp5jt, bahan Rp8jt, upah Rp7jt. Berapa TOTAL RAB-nya? (juta)", answer: 20, unit: "jt", hint: "Jumlahkan semua item.", solution: "5 + 8 + 7 = Rp20jt." },
            { type: "number", q: "RAB Rp20jt, realisasi biaya Rp24jt. Berapa pembengkakan (over budget)-nya? (juta)", answer: 4, unit: "jt", hint: "Varians = Realisasi − Rencana.", solution: "24 − 20 = Rp4jt over budget." },
          ],
          quiz: [
            {
              q: "Apa fungsi utama RAB?",
              options: [
                "Menghitung pajak",
                "Memperkirakan rinci biaya proyek sebelum dijalankan, sebagai dasar dana & kontrol biaya",
                "Menghitung laba tahunan",
                "Menilai harga saham",
              ],
              answer: 1,
              explain:
                "RAB adalah perencanaan biaya yang menjadi dasar pendanaan dan pengendalian.",
            },
            {
              q: "Dampak RAB yang asal-asalan bagi proyek?",
              options: [
                "Proyek pasti sukses",
                "Biaya membengkak, kas habis, proyek berisiko mangkrak",
                "Tidak ada dampak",
                "Pajak turun",
              ],
              answer: 1,
              explain:
                "RAB tidak realistis menyebabkan over budget dan gangguan proyek.",
            },
          ],
        },
        {
          id: "acc-fund-6",
          title: "Metrik Lain & Memahami 'ROTI'",
          duration: "11 menit",
          content: `
<p>Beberapa metrik penting lain yang sering muncul — beserta apa yang mereka ungkap:</p>

<table class="tbl">
  <tr><th>Metrik</th><th>Arti singkat</th></tr>
  <tr><td><b>Gross Margin</b></td><td>Laba kotor ÷ pendapatan — efisiensi produksi</td></tr>
  <tr><td><b>Operating Margin</b></td><td>Laba operasi ÷ pendapatan — efisiensi operasi inti</td></tr>
  <tr><td><b>EBITDA</b></td><td>Laba sebelum bunga, pajak, depresiasi & amortisasi — proksi kas operasional</td></tr>
  <tr><td><b>Burn Rate</b></td><td>Kecepatan bisnis "membakar" kas per bulan</td></tr>
  <tr><td><b>Break-even</b></td><td>Titik saat tidak untung & tidak rugi</td></tr>
</table>

<h3>Soal "ROTI"</h3>
<div class="callout">
<b>ROTI</b> paling umum berarti <b>Return on Time Invested</b> — imbal hasil atas <b>WAKTU/usaha</b> yang kamu curahkan, bukan uang. Gunanya menilai: "apakah kegiatan ini <b>sepadan</b> dengan waktu yang dipakai?" Ini alat produktivitas & prioritas, <b>bukan</b> rasio laporan keuangan standar.
</div>
<p>Jika yang kamu maksud <b>ROTA</b> (Return on Total Assets), itu praktis sama dengan <b>ROA</b> — laba dibagi total aset.</p>

<h3>💥 Dampak menyeluruh</h3>
<p>Metrik adalah <b>"dashboard"</b> bisnis. Memilih metrik yang <b>tepat</b> mengarahkan keputusan yang tepat; fokus pada metrik yang salah bisa menyesatkan seluruh perusahaan (mis. mengejar pendapatan sambil mengabaikan arus kas → bangkrut walau tumbuh).</p>

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini menguasai metrik keuangan inti dari fundamentalnya: laba bersih, arus kas bebas, ROI, ROE/ROA/ROIC, RAB, dan lainnya — beserta dampaknya pada perusahaan. Ini bekal nyata untuk membaca & mengelola bisnis.
</div>
`,
          keyPoints: [
            "Metrik lain: gross/operating margin, EBITDA (proksi kas operasional), burn rate, break-even.",
            "ROTI = Return on Time Invested — imbal hasil atas waktu/usaha; alat produktivitas, bukan rasio laporan keuangan. (ROTA ≈ ROA.)",
            "Dampak: metrik adalah dashboard bisnis; memilih metrik tepat mengarahkan keputusan tepat.",
          ],
          quiz: [
            {
              q: "Apa arti 'ROTI' yang paling umum dalam konteks bisnis?",
              options: [
                "Makanan pokok",
                "Return on Time Invested — imbal hasil atas waktu/usaha yang dicurahkan",
                "Return on Tax Income",
                "Rasio utang",
              ],
              answer: 1,
              explain:
                "ROTI = Return on Time Invested; menilai apakah suatu kegiatan sepadan dengan waktunya.",
            },
            {
              q: "Apa itu EBITDA?",
              options: [
                "Laba bersih setelah semua",
                "Laba sebelum bunga, pajak, depresiasi & amortisasi — proksi kas operasional",
                "Total aset",
                "Harga saham",
              ],
              answer: 1,
              explain:
                "EBITDA mendekati kas yang dihasilkan operasi sebelum beban non-tunai & pendanaan.",
            },
          ],
        },
      ],
    },
  ],
};
