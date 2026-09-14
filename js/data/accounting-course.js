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
    /* ---------------- MODUL 1: MULAI DARI NOL ---------------- */
    {
      id: "acc-dasar",
      level: "Dasar",
      title: "Mulai dari Nol",
      summary: "Sebelum akuntansi: uang masuk & keluar, aset/utang/kekayaan, dan kenapa mencatat itu penting.",
      lessons: [
        {
          id: "acc-nol-1",
          title: "Uang Masuk & Uang Keluar",
          duration: "7 menit",
          content: `
<p>Akuntansi terdengar rumit, tapi fondasinya sesederhana yang kamu lakukan dengan uang jajan: <b>ada uang masuk, ada uang keluar</b>.</p>

<div data-diagram="pipeline" data-stages="Uang masuk::penjualan, modal|Uang keluar::belanja, gaji, sewa|Selisih::masuk − keluar|Sisa kas::yang benar-benar ada" data-caption="Sesederhana ini dasarnya — semua akuntansi tumbuh dari sini"></div>


<h3>Dua arah uang</h3>
<ul>
  <li><b>Uang masuk (pemasukan)</b> — uang yang kamu terima: gaji, hasil jualan, uang saku.</li>
  <li><b>Uang keluar (pengeluaran)</b> — uang yang kamu belanjakan: makan, bensin, beli bahan.</li>
</ul>

<div class="callout">
<b>Saldo</b> = uang yang tersisa = total masuk − total keluar. Kalau masuk Rp100rb dan keluar Rp60rb, saldomu Rp40rb.
</div>

<h3>Contoh sehari-hari</h3>
<table class="tbl">
  <tr><th>Kegiatan</th><th>Masuk</th><th>Keluar</th></tr>
  <tr><td>Dapat uang saku</td><td>Rp50rb</td><td>—</td></tr>
  <tr><td>Beli makan</td><td>—</td><td>Rp20rb</td></tr>
  <tr><td>Jual pulsa (untung)</td><td>Rp15rb</td><td>—</td></tr>
  <tr><td><b>Saldo akhir</b></td><td colspan="2"><b>50 − 20 + 15 = Rp45rb</b></td></tr>
</table>

<div class="callout">
<b>Inti akuntansi:</b> mencatat semua "masuk" dan "keluar" secara rapi, agar kamu selalu tahu <b>berapa yang kamu punya</b> dan <b>ke mana uang pergi</b>. Sesederhana itu titik awalnya.
</div>
`,
          keyPoints: [
            "Fondasi akuntansi: uang masuk (pemasukan) & uang keluar (pengeluaran).",
            "Saldo = total masuk − total keluar = uang yang tersisa.",
            "Inti akuntansi: mencatat masuk & keluar dengan rapi agar tahu posisi uang.",
          ],
          quiz: [
            {
              q: "Bagaimana menghitung saldo (sisa uang)?",
              options: [
                "Total masuk + total keluar",
                "Total masuk − total keluar",
                "Total keluar − total masuk",
                "Hanya total masuk",
              ],
              answer: 1,
              explain: "Saldo = uang masuk dikurangi uang keluar.",
            },
            {
              q: "Masuk Rp80rb, keluar Rp30rb. Berapa saldonya?",
              options: ["Rp110rb", "Rp50rb", "Rp30rb", "Rp80rb"],
              answer: 1,
              explain: "80 − 30 = Rp50rb.",
            },
          ],
        },
        {
          id: "acc-nol-2",
          title: "Aset, Utang & Kekayaan Bersih",
          duration: "8 menit",
          content: `
<p>Tiga kata ini adalah jantung akuntansi. Kabar baiknya: kamu bisa memahaminya lewat kehidupan pribadi dulu, sebelum ke bisnis.</p>

<div data-diagram="flow" data-steps="Aset (yang dimiliki)|− Utang (yang dipinjam)|= Kekayaan Bersih" data-caption="Kekayaan bersih = Aset dikurangi Utang"></div>


<h3>Tiga hal sederhana</h3>
<ul>
  <li><b>Aset (Harta)</b> — apa yang kamu <b>miliki</b>: uang tunai, HP, sepeda, tabungan.</li>
  <li><b>Utang (Kewajiban)</b> — apa yang kamu <b>pinjam</b> & harus dikembalikan: cicilan, pinjaman teman.</li>
  <li><b>Kekayaan Bersih (Ekuitas)</b> — apa yang <b>benar-benar milikmu</b> = Aset − Utang.</li>
</ul>

<div class="callout">
<b>Contoh:</b> Kamu punya HP & tabungan senilai <b>Rp10 juta</b> (aset), tapi masih ada cicilan <b>Rp3 juta</b> (utang). Kekayaan bersihmu = 10 − 3 = <b>Rp7 juta</b>. Itulah bagian yang sungguh-sungguh milikmu.
</div>

<div class="callout">
<b>Ini persamaan dasar akuntansi!</b> Ditulis ulang: <b>Aset = Utang + Kekayaan Bersih</b>. Di dunia bisnis, "kekayaan bersih" disebut <b>Ekuitas/Modal</b>. Kamu baru saja memahami rumus terpenting akuntansi lewat contoh sehari-hari.
</div>
`,
          keyPoints: [
            "Aset = yang kamu miliki; Utang = yang kamu pinjam; Kekayaan Bersih = Aset − Utang.",
            "Kekayaan bersih adalah bagian yang benar-benar milikmu.",
            "Ini persamaan dasar akuntansi: Aset = Utang + Kekayaan Bersih (Ekuitas).",
          ],
          practice: [
            { type: "number", q: "Aset (punya) Rp15jt, utang (pinjam) Rp5jt. Berapa kekayaan bersihmu? (juta)", answer: 10, unit: "jt", hint: "Kekayaan Bersih = Aset − Utang.", solution: "15 − 5 = Rp10jt." },
          ],
          quiz: [
            {
              q: "Kekayaan bersih dihitung dari?",
              options: [
                "Aset + Utang",
                "Aset − Utang",
                "Utang − Aset",
                "Aset saja",
              ],
              answer: 1,
              explain: "Kekayaan bersih (ekuitas) = Aset − Utang.",
            },
            {
              q: "Di dunia bisnis, 'kekayaan bersih' disebut?",
              options: ["Pendapatan", "Ekuitas / Modal", "Beban", "Piutang"],
              answer: 1,
              explain: "Kekayaan bersih pemilik dalam bisnis disebut ekuitas atau modal.",
            },
          ],
        },
        {
          id: "acc-nol-3",
          title: "Kenapa Bisnis Wajib Mencatat?",
          duration: "7 menit",
          content: `
<p>Banyak usaha kecil gagal bukan karena produknya jelek, tapi karena <b>tidak pernah mencatat keuangan</b>. Mari lihat kenapa mencatat itu wajib.</p>

<h3>Tanpa catatan, kamu "buta"</h3>
<ul>
  <li>Tidak tahu bisnis benar-benar <b>untung atau rugi</b> (uang di dompet ≠ untung).</li>
  <li>Uang pribadi & bisnis <b>tercampur</b>, jadi kacau.</li>
  <li>Tidak tahu produk mana yang menguntungkan.</li>
</ul>

<h3>Manfaat mencatat</h3>
<table class="tbl">
  <tr><th>Untuk apa</th><th>Manfaat</th></tr>
  <tr><td>Tahu kondisi</td><td>Untung/rugi, punya apa, utang berapa</td></tr>
  <tr><td>Keputusan</td><td>Kapan menaikkan harga, menambah karyawan</td></tr>
  <tr><td>Pihak luar</td><td>Dasar mengajukan pinjaman bank & lapor pajak</td></tr>
</table>

<div class="callout warn">
<b>Kesalahan paling umum:</b> mencampur uang pribadi & bisnis. Aturan pertama: <b>pisahkan!</b> Ini fondasi semua pencatatan yang sehat.
</div>
`,
          keyPoints: [
            "Tanpa catatan, pemilik 'buta': tak tahu untung/rugi & uang tercampur.",
            "Manfaat mencatat: tahu kondisi, dasar keputusan, & syarat pinjaman/pajak.",
            "Aturan pertama: pisahkan uang pribadi & bisnis.",
          ],
          quiz: [
            {
              q: "Kenapa banyak usaha kecil gagal secara keuangan?",
              options: [
                "Tidak pernah mencatat, sehingga pemiliknya tak tahu uangnya mengalir ke mana",
                "Harga jualnya dipasang terlalu rendah sehingga margin tiap produk sangat tipis",
                "Jumlah karyawannya terlalu banyak dibandingkan ukuran usahanya sendiri",
                "Lokasi usahanya kurang strategis sehingga jumlah pembelinya sedikit",
              ],
              answer: 0,
              explain: "Tanpa pencatatan, pemilik tak tahu kondisi sebenarnya & salah mengambil keputusan.",
            },
            {
              q: "Aturan pertama pencatatan bisnis yang sehat?",
              options: [
                "Memisahkan rekening uang pribadi dari rekening uang usaha",
                "Mencatat pemasukan tiap hari, sedangkan pengeluaran cukup bulanan",
                "Menyimpan seluruh bukti transaksi dalam bentuk digital saja",
                "Menghitung laba setiap kali ada satu penjualan yang masuk",
              ],
              answer: 0,
              explain: "Memisahkan uang pribadi & bisnis adalah fondasi pencatatan yang benar.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 2: FONDASI AKUNTANSI ---------------- */
    {
      id: "acc-pemula",
      level: "Pemula",
      title: "Fondasi Akuntansi",
      summary: "Konsep inti: persamaan dasar, lima jenis akun, dan debit-kredit.",
      lessons: [
        {
          id: "acc-p-1",
          title: "Apa itu Akuntansi? (Bahasa Bisnis)",
          duration: "8 menit",
          content: `
<p><b>Akuntansi</b> adalah sistem untuk <b>mencatat, mengelompokkan, dan melaporkan</b> seluruh kegiatan keuangan sebuah bisnis. Sering disebut <b>"bahasa bisnis"</b> karena lewat angka-angka inilah bisnis "berbicara" tentang kondisinya.</p>

<div data-diagram="pipeline" data-stages="Kejadian::jual, beli, bayar|Dicatat::dengan aturan baku|Diringkas::menjadi laporan|Dibaca::untuk mengambil keputusan" data-caption="Akuntansi adalah bahasa — ini alur menerjemahkannya"></div>


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
                "Karena lewat angka-angkanya bisnis menyampaikan kondisi keuangannya",
                "Karena setiap negara mewajibkan laporan ditulis dalam bahasa resmi",
                "Karena akuntan harus menguasai istilah asing dari dunia perdagangan",
                "Karena laporan keuangan disusun memakai kode yang dirahasiakan",
              ],
              answer: 0,
              explain:
                "Laporan keuangan adalah cara bisnis 'berbicara' tentang kinerjanya kepada pemilik, investor, dan pihak lain.",
            },
            {
              q: "Apa beda pembukuan (bookkeeping) dan akuntansi?",
              options: [
                "Pembukuan hanya mencatat; akuntansi juga menganalisis dan melaporkan",
                "Pembukuan untuk usaha kecil; akuntansi hanya untuk perusahaan terbuka",
                "Pembukuan memakai kertas; akuntansi memakai perangkat lunak khusus",
                "Pembukuan mencatat pendapatan; akuntansi mencatat pengeluaran",
              ],
              answer: 0,
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

<div data-diagram="layers" data-items="Aset — yang dimiliki|Kewajiban — yang dipinjam|Ekuitas — bagian pemilik|Pendapatan — uang masuk dari usaha|Beban — biaya menjalankan usaha" data-caption="Lima jenis akun — semua transaksi pasti masuk salah satunya"></div>


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

<div data-diagram="vs" data-left="DEBIT (kiri)::Aset naik::Beban naik" data-right="KREDIT (kanan)::Kewajiban naik::Ekuitas naik::Pendapatan naik" data-caption="Aturan emas debit-kredit"></div>


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
    /* ---------------- MODUL 3: SIKLUS & LAPORAN KEUANGAN ---------------- */
    {
      id: "acc-menengah",
      level: "Menengah",
      title: "Siklus & Laporan Keuangan",
      summary: "Dari jurnal & buku besar sampai laporan laba rugi, neraca, arus kas — ditutup satu contoh kasus lengkap.",
      lessons: [
        {
          id: "acc-m-1",
          title: "Jurnal & Buku Besar",
          duration: "9 menit",
          content: `
<p>Dua catatan utama dalam akuntansi:</p>

<div data-diagram="flow" data-steps="Transaksi|Jurnal (urut waktu)|Posting|Buku Besar (per akun)" data-caption="Dari transaksi ke buku besar"></div>


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
                "Mencatat setiap transaksi secara berurutan menurut waktunya",
                "Merangkum saldo akhir setiap akun pada akhir periode",
                "Mengelompokkan transaksi berdasarkan jenis akunnya masing-masing",
                "Menyajikan posisi keuangan kepada investor dan pemberi pinjaman",
              ],
              answer: 0,
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

<div data-diagram="flow" data-steps="Transaksi|Jurnal|Buku Besar|Neraca Saldo|Laporan Keuangan" data-caption="Siklus akuntansi tiap periode"></div>


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
                "Menolkan akun sementara (pendapatan & beban) agar siap untuk periode baru",
                "Mengoreksi kesalahan pencatatan yang ditemukan selama periode berjalan",
                "Mencatat transaksi yang belum sempat dibukukan pada akhir bulan",
                "Menghapus akun yang sudah tidak dipakai lagi oleh perusahaan",
              ],
              answer: 0,
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

<div data-diagram="layers" data-items="Laba Bersih|Laba Kotor|Pendapatan" data-caption="Dari pendapatan menyusut jadi laba bersih"></div>


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

<div data-diagram="vs" data-left="NERACA::Foto satu tanggal::Aset = Kewajiban + Ekuitas" data-right="LABA RUGI::Rekaman satu periode::Pendapatan − Beban" data-caption="Neraca vs Laba Rugi"></div>


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
                "Satu tanggal tertentu, seperti potret sesaat",
                "Satu periode penuh, misalnya selama setahun berjalan",
                "Rata-rata seluruh bulan dalam satu tahun buku",
                "Perkiraan kondisi keuangan pada tahun berikutnya",
              ],
              answer: 0,
              explain:
                "Neraca adalah 'foto' posisi keuangan pada satu tanggal tertentu.",
            },
            {
              q: "Mengapa laporan arus kas penting meski bisnis terlihat untung?",
              options: [
                "Karena bisnis yang untung pun bisa kehabisan kas lalu bangkrut",
                "Karena laporan laba rugi tidak mencantumkan pendapatan penjualan",
                "Karena laba selalu dilaporkan lebih kecil daripada yang sebenarnya",
                "Karena pajak dihitung dari arus kas, bukan dari laba bersih",
              ],
              answer: 0,
              explain:
                "Laba bukan kas; tanpa kas yang cukup bisnis tetap bisa kolaps.",
            },
          ],
        },
        {
          id: "acc-deep-1",
          title: "Siklus Akuntansi Lengkap (Contoh Kasus)",
          duration: "13 menit",
          content: `
<p>Sekarang kita satukan semua yang sudah dipelajari dalam <b>satu contoh nyata</b> — dari transaksi mentah sampai laporan keuangan. Contoh: jasa desain <b>"Kreatif"</b> (angka dalam juta Rupiah).</p>

<div data-diagram="cycle" data-steps="Transaksi|Jurnal|Buku besar|Neraca saldo|Laporan keuangan" data-center="tiap periode" data-caption="Siklus yang berulang setiap bulan, kuartal, dan tahun"></div>


<h3>Langkah 1 — Transaksi</h3>
<ol>
  <li>Pemilik setor modal Rp50 tunai.</li>
  <li>Beli komputer (peralatan) Rp20 tunai.</li>
  <li>Selesaikan jasa, terima Rp15 tunai.</li>
  <li>Bayar gaji Rp3 tunai.</li>
</ol>

<h3>Langkah 2 — Jurnal (Debit = Kredit)</h3>
<table class="tbl">
  <tr><th>Transaksi</th><th>Debit</th><th>Kredit</th></tr>
  <tr><td>1</td><td>Kas 50</td><td>Modal 50</td></tr>
  <tr><td>2</td><td>Peralatan 20</td><td>Kas 20</td></tr>
  <tr><td>3</td><td>Kas 15</td><td>Pendapatan 15</td></tr>
  <tr><td>4</td><td>Beban Gaji 3</td><td>Kas 3</td></tr>
</table>

<h3>Langkah 3 — Saldo buku besar</h3>
<p>Kas = 50 − 20 + 15 − 3 = <b>42</b>; Peralatan = 20; Modal = 50; Pendapatan = 15; Beban Gaji = 3.</p>

<h3>Langkah 4 — Neraca Saldo (cek seimbang)</h3>
<p>Total Debit (Kas 42 + Peralatan 20 + Beban 3 = <b>65</b>) = Total Kredit (Modal 50 + Pendapatan 15 = <b>65</b>) ✓</p>

<h3>Langkah 5 — Laporan Keuangan</h3>
<table class="tbl">
  <tr><th>Laba Rugi</th><th>Neraca</th></tr>
  <tr><td>Pendapatan 15 − Beban 3 = <b>Laba Bersih 12</b></td><td>Aset (Kas 42 + Peralatan 20 = <b>62</b>) = Kewajiban 0 + Ekuitas (Modal 50 + Laba 12 = <b>62</b>) ✓</td></tr>
</table>

<div class="callout">
<b>Perhatikan keajaibannya:</b> laba Rp12 dari laba rugi <b>otomatis masuk ke ekuitas</b> di neraca, dan neraca tetap <b>seimbang</b>. Inilah siklus akuntansi yang utuh — semua saling terhubung rapi.
</div>
`,
          keyPoints: [
            "Siklus: transaksi → jurnal (debit=kredit) → buku besar → neraca saldo → laporan keuangan.",
            "Neraca saldo memastikan total debit = total kredit sebelum menyusun laporan.",
            "Laba bersih dari laba rugi mengalir masuk ke ekuitas di neraca.",
            "Neraca selalu seimbang: Aset = Kewajiban + Ekuitas.",
          ],
          practice: [
            { type: "number", q: "Dari contoh, Kas = 50 − 20 + 15 − 3. Berapa saldo kas akhirnya? (juta)", answer: 42, unit: "jt", hint: "Hitung berurutan.", solution: "50 − 20 + 15 − 3 = Rp42jt." },
            { type: "number", q: "Pendapatan 15, beban 3. Berapa laba bersihnya? (juta)", answer: 12, unit: "jt", hint: "Laba = Pendapatan − Beban.", solution: "15 − 3 = Rp12jt." },
          ],
          quiz: [
            {
              q: "Apa fungsi neraca saldo dalam siklus?",
              options: [
                "Memastikan total debit sama dengan total kredit sebelum menyusun laporan",
                "Menghitung laba bersih perusahaan untuk satu periode buku",
                "Mencatat transaksi secara berurutan menurut tanggal terjadinya",
                "Menyajikan posisi keuangan kepada investor di akhir tahun",
              ],
              answer: 0,
              explain: "Neraca saldo mengecek keseimbangan debit-kredit sebelum laporan dibuat.",
            },
            {
              q: "Laba bersih dari laporan laba rugi akan...",
              options: [
                "Masuk menambah ekuitas di neraca",
                "Masuk menambah kas di laporan arus kas",
                "Masuk mengurangi kewajiban di neraca",
                "Dihapus pada awal periode berikutnya",
              ],
              answer: 0,
              explain: "Laba menambah ekuitas (laba ditahan), menjaga neraca tetap seimbang.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 4: AKRUAL, ASET & PERSEDIAAN ---------------- */
    {
      id: "acc-pendalaman",
      level: "Pendalaman",
      title: "Akrual, Aset & Persediaan",
      summary: "Basis akrual vs kas, penyusutan & modal kerja, serta metode persediaan FIFO, LIFO & rata-rata.",
      lessons: [
        {
          id: "acc-a-1",
          title: "Basis Akrual vs Basis Kas",
          duration: "10 menit",
          content: `
<p>Ada dua cara menentukan <b>kapan</b> mencatat pendapatan & beban:</p>

<div data-diagram="vs" data-left="BASIS KAS::Catat saat uang berpindah::Sederhana" data-right="BASIS AKRUAL::Catat saat transaksi terjadi::Lebih akurat (standar)" data-caption="Dua basis pencatatan"></div>


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
                "Mencatat beban pada periode yang sama dengan pendapatan yang dihasilkannya",
                "Mencocokkan saldo kas di buku dengan saldo pada rekening koran bank",
                "Menyamakan total debit dan total kredit pada setiap transaksi",
                "Membandingkan laporan tahun ini dengan laporan tahun sebelumnya",
              ],
              answer: 0,
              explain:
                "Beban diakui pada periode yang sama dengan pendapatan yang dihasilkannya.",
            },
          ],
        },
        {
          id: "acc-a-3",
          title: "Penyusutan, Persediaan & Modal Kerja",
          duration: "10 menit",
          content: `
<p>Tiga konsep penting dalam akuntansi sehari-hari bisnis:</p>

<div data-diagram="cycle" data-steps="Beli persediaan (kas keluar)|Jual (jadi piutang)|Tagih piutang|Kas masuk lagi" data-center="siklus kas" data-caption="Modal kerja adalah uang yang terus berputar — makin cepat berputar, makin sedikit modal dibutuhkan"></div>


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
                "Total Aset − Total Kewajiban",
                "Kas + Piutang − Persediaan",
                "Pendapatan − Beban Operasional",
              ],
              answer: 0,
              explain: "Modal Kerja = Aset Lancar − Kewajiban Lancar.",
            },
          ],
        },
        {
          id: "acc-deep-2",
          title: "Metode Persediaan: FIFO, LIFO & Average",
          duration: "11 menit",
          content: `
<p>Bayangkan kamu membeli stok pada harga yang <b>berbeda-beda</b>. Saat menjual, harga beli yang mana yang dipakai untuk menghitung HPP? Di sinilah metode persediaan berperan.</p>

<div data-diagram="vs" data-left="FIFO::Masuk duluan terjual duluan::Umum dipakai di Indonesia" data-right="LIFO::Masuk terakhir terjual duluan::Dilarang di PSAK/IFRS" data-caption="Metode penilaian persediaan"></div>


<h3>Fundamental: masalahnya</h3>
<p>Kamu beli 10 unit @Rp1.000, lalu 10 unit lagi @Rp1.200. Saat menjual 10 unit, apakah HPP-nya Rp1.000 atau Rp1.200 per unit? Ada tiga cara menjawab:</p>

<table class="tbl">
  <tr><th>Metode</th><th>Aturan</th><th>HPP 10 unit terjual</th></tr>
  <tr><td><b>FIFO</b> (First In First Out)</td><td>Yang masuk duluan dijual duluan</td><td>10 × 1.000 = Rp10.000</td></tr>
  <tr><td><b>LIFO</b> (Last In First Out)</td><td>Yang masuk terakhir dijual duluan</td><td>10 × 1.200 = Rp12.000</td></tr>
  <tr><td><b>Average</b> (Rata-rata)</td><td>Pakai harga rata-rata</td><td>10 × 1.100 = Rp11.000</td></tr>
</table>

<h3>💥 Dampak</h3>
<ul>
  <li>Saat harga <b>naik</b>: FIFO → HPP lebih rendah → <b>laba tampak lebih besar</b> (dan pajak lebih besar). LIFO sebaliknya.</li>
  <li>Pilihan metode memengaruhi laba, pajak, dan nilai persediaan di neraca.</li>
</ul>

<div class="callout warn">
<b>Penting:</b> <b>LIFO TIDAK diperbolehkan</b> di standar internasional (IFRS) maupun Indonesia (PSAK). Di sini yang umum dipakai: <b>FIFO</b> dan <b>Average</b>. LIFO dijelaskan agar kamu memahami konsepnya.
</div>
`,
          keyPoints: [
            "Saat harga beli bervariasi, metode persediaan menentukan HPP: FIFO, LIFO, atau Average.",
            "FIFO = masuk duluan terjual duluan; LIFO = masuk terakhir terjual duluan; Average = harga rata-rata.",
            "Saat harga naik, FIFO membuat laba (& pajak) tampak lebih besar daripada LIFO.",
            "LIFO tidak diperbolehkan di IFRS/PSAK; yang umum di Indonesia: FIFO & Average.",
          ],
          practice: [
            { type: "number", q: "Beli 10 unit @Rp1.000 lalu 10 unit @Rp1.200. Jual 10 unit dengan FIFO. Berapa HPP-nya? (Rupiah)", answer: 10000, tol: 1, hint: "FIFO: yang masuk duluan (Rp1.000) terjual duluan.", solution: "10 × 1.000 = Rp10.000." },
            { type: "number", q: "Dengan metode Average dari soal di atas (rata-rata Rp1.100/unit), berapa HPP 10 unit? (Rupiah)", answer: 11000, tol: 1, hint: "10 × harga rata-rata.", solution: "10 × 1.100 = Rp11.000." },
          ],
          quiz: [
            {
              q: "Apa arti FIFO?",
              options: [
                "Yang masuk terakhir dijual duluan",
                "Yang masuk duluan dijual duluan",
                "Harga rata-rata",
                "Tidak menjual apa pun",
              ],
              answer: 1,
              explain: "FIFO = First In First Out: stok lama terjual lebih dulu.",
            },
            {
              q: "Metode persediaan mana yang TIDAK diperbolehkan di Indonesia (PSAK)?",
              options: ["FIFO", "Average", "LIFO", "Semua dilarang"],
              answer: 2,
              explain: "LIFO tidak diperbolehkan di PSAK/IFRS.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 5: MEMBACA RASIO & METRIK KINERJA ---------------- */
    {
      id: "acc-fundamental",
      level: "Fundamental",
      title: "Membaca Rasio & Metrik Kinerja",
      summary: "Persen & CAGR, lalu rasio keuangan, likuiditas & efisiensi, laba bersih, Free Cash Flow, ROI, dan ROE/ROA/ROIC.",
      lessons: [
        {
          id: "acc-mat-1",
          title: "Persen, Rasio & CAGR",
          duration: "12 menit",
          content: `
<p>Kita mulai dari yang paling dasar, lalu naik ke rumus pertumbuhan yang sering disalahhitung orang.</p>

<div data-diagram="bar" data-bars="Kenaikan tahun 1:10|Kenaikan tahun 2:11|Kenaikan tahun 3:12.1" data-unit=" juta" data-caption="Modal Rp100 juta tumbuh 10% per tahun — persentasenya sama, tapi kenaikannya membesar. Itulah bunga berbunga."></div>


<h3>Persen &amp; perubahan persen</h3>
<div class="callout">
<b>Persen</b> = per seratus. <b>Perubahan persen</b> = (Baru − Lama) ÷ Lama × 100%.<br>
Contoh: dari 200 jadi 250 → (250 − 200) ÷ 200 × 100% = <b>25%</b>.
</div>

<div class="callout warn">
<b>Jebakan persen (penting!):</b> turun <b>50%</b> lalu naik <b>50%</b> <b>TIDAK</b> kembali ke awal.<br>
100 → turun 50% → 50 → naik 50% → <b>75</b>, bukan 100. Untuk kembali ke 100 dari 50, butuh kenaikan <b>100%</b>. Inilah kenapa kerugian besar sangat sulit dipulihkan.
</div>

<h3>CAGR — pertumbuhan rata-rata per tahun</h3>
<p>Kalau nilai tumbuh dari Rp100 juta jadi Rp200 juta dalam 5 tahun, banyak orang menghitung 100% ÷ 5 = 20% per tahun. <b>Itu keliru</b>, karena pertumbuhan bersifat <b>majemuk</b>.</p>

<div class="callout">
<b>Rumus CAGR:</b> CAGR = (Nilai Akhir ÷ Nilai Awal)<sup>(1 ÷ jumlah tahun)</sup> − 1
</div>

<h3>Coba sendiri — hitung CAGR 👇</h3>
<div data-demo="js-playground">// CAGR: pertumbuhan majemuk rata-rata per tahun
const awal = 100000000;   // Rp100 juta
const akhir = 200000000;  // Rp200 juta
const tahun = 5;

const cagr = (Math.pow(akhir / awal, 1 / tahun) - 1) * 100;

console.log("Dari Rp" + awal.toLocaleString("id-ID") + " menjadi Rp" + akhir.toLocaleString("id-ID"));
console.log("Dalam " + tahun + " tahun");
console.log("CAGR = " + cagr.toFixed(2) + "% per tahun");
console.log("-----");
console.log("Perhatikan: BUKAN 100% / 5 = 20%. Pertumbuhan itu majemuk.");
console.log("Bukti: 100jt dikali 1,1487 sebanyak 5 kali = 200jt.");</div>

<div class="callout">
<b>Kenapa CAGR berguna:</b> ia meratakan naik-turun menjadi satu angka, sehingga kamu bisa <b>membandingkan</b> pertumbuhan dua bisnis/investasi dengan adil, walaupun jalurnya berbeda-beda.
</div>
`,
          keyPoints: [
            "Perubahan persen = (Baru − Lama) ÷ Lama × 100%.",
            "Jebakan: turun 50% lalu naik 50% tidak kembali ke awal (100 → 50 → 75).",
            "CAGR = (Akhir ÷ Awal)^(1/tahun) − 1 — pertumbuhan majemuk, bukan pembagian sederhana.",
            "CAGR meratakan naik-turun sehingga pertumbuhan bisa dibandingkan adil.",
          ],
          practice: [
            { type: "number", q: "Penjualan naik dari 200 ke 250. Berapa persen kenaikannya?", answer: 25, tol: 0.5, hint: "(250 − 200) ÷ 200 × 100%.", solution: "50 ÷ 200 × 100% = 25%." },
            { type: "number", q: "Nilai turun 50% dari 100, lalu naik 50%. Berapa nilai akhirnya?", answer: 75, tol: 0.5, hint: "100 → 50, lalu 50 + 50% dari 50.", solution: "50 × 1,5 = 75 — tidak kembali ke 100." },
          ],
          quiz: [
            {
              q: "Nilai turun 50% lalu naik 50%. Hasilnya?",
              options: [
                "Kembali ke nilai awal",
                "Masih 25% di bawah nilai awal",
                "Lebih tinggi dari awal",
                "Menjadi nol",
              ],
              answer: 1,
              explain: "100 → 50 → 75; kenaikan dihitung dari basis yang lebih kecil.",
            },
            {
              q: "Rumus CAGR yang benar?",
              options: [
                "(Akhir ÷ Awal) pangkat (1 ÷ tahun), lalu dikurangi 1",
                "(Akhir − Awal) ÷ Awal, lalu dibagi jumlah tahun",
                "(Akhir ÷ Awal) dikali jumlah tahun, lalu dikurangi 1",
                "(Akhir + Awal) ÷ 2, lalu dibagi jumlah tahun",
              ],
              answer: 0,
              explain: "CAGR memperhitungkan efek majemuk, bukan rata-rata sederhana.",
            },
          ],
        },
        {
          id: "acc-a-2",
          title: "Membaca Rasio Keuangan",
          duration: "11 menit",
          content: `
<p><b>Rasio keuangan</b> mengubah angka laporan menjadi indikator yang mudah dibandingkan. Tiga kelompok utama:</p>

<div data-diagram="layers" data-items="Profitabilitas — apakah untung?|Likuiditas — sanggup bayar utang pendek?|Solvabilitas — sanggup bayar utang panjang?|Efisiensi — secepat apa aset berputar?" data-caption="Empat keluarga rasio — bacalah berurutan dari atas"></div>


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

<div data-demo="ratio-explorer"></div>
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
                "Aset lancar mungkin tidak cukup menutup utang jangka pendek",
                "Perusahaan sedang merugi dan labanya bernilai negatif",
                "Perusahaan menyimpan terlalu banyak kas yang menganggur",
                "Utang jangka panjang lebih besar daripada seluruh ekuitasnya",
              ],
              answer: 0,
              explain:
                "Current ratio < 1 berarti kewajiban lancar melebihi aset lancar — sinyal risiko likuiditas.",
            },
          ],
        },
        {
          id: "acc-adv-4",
          title: "Rasio Likuiditas & Efisiensi",
          duration: "12 menit",
          content: `
<p>Pelajaran sebelumnya memperkenalkan tiga keluarga rasio. Sekarang kita perdalam dua yang paling sering menentukan hidup-mati operasional: rasio <b>likuiditas</b> (kemampuan bayar jangka pendek) dan <b>efisiensi</b> (seberapa cepat aset berputar jadi uang).</p>

<div data-diagram="layers" data-items="Rasio Kas — paling ketat|Quick Ratio — tanpa persediaan|Current Ratio — semua aset lancar" data-caption="Tiga tingkat ketatnya mengukur kemampuan bayar jangka pendek"></div>


<h3>Likuiditas</h3>
<table class="tbl">
  <tr><th>Rasio</th><th>Rumus</th><th>Arti</th></tr>
  <tr><td><b>Current Ratio</b></td><td>Aset Lancar ÷ Kewajiban Lancar</td><td>Sanggup bayar utang jangka pendek?</td></tr>
  <tr><td><b>Quick Ratio</b> (acid test)</td><td>(Aset Lancar − Persediaan) ÷ Kewajiban Lancar</td><td>Versi lebih ketat (persediaan sulit cepat jadi uang)</td></tr>
</table>

<h3>Efisiensi (perputaran)</h3>
<ul>
  <li><b>Inventory Turnover</b> = HPP ÷ rata-rata persediaan → seberapa cepat stok terjual. Rendah = stok menumpuk.</li>
  <li><b>Receivables Turnover</b> → seberapa cepat piutang tertagih. Rendah = uang tersangkut di pelanggan.</li>
  <li><b>Cash Conversion Cycle</b> → berapa lama uang "terkunci" dari beli bahan sampai kembali jadi kas.</li>
</ul>

<h3>💥 Dampak</h3>
<ul>
  <li>Likuiditas rendah (current ratio &lt; 1) → risiko gagal bayar meski untung.</li>
  <li>Perputaran lambat → kas terjebak di stok/piutang → butuh modal kerja lebih besar.</li>
</ul>
`,
          keyPoints: [
            "Current Ratio = Aset Lancar ÷ Kewajiban Lancar; Quick Ratio mengecualikan persediaan (lebih ketat).",
            "Inventory & receivables turnover mengukur seberapa cepat stok terjual & piutang tertagih.",
            "Dampak: likuiditas rendah = risiko gagal bayar; perputaran lambat = kas terjebak & butuh modal kerja besar.",
          ],
          practice: [
            { type: "number", q: "Aset lancar Rp120jt, persediaan Rp40jt, kewajiban lancar Rp50jt. Berapa quick ratio-nya? (desimal, mis. 1.6)", answer: 1.6, tol: 0.05, hint: "Quick Ratio = (Aset Lancar − Persediaan) ÷ Kewajiban Lancar.", solution: "(120 − 40) ÷ 50 = 1,6." },
            { type: "number", q: "HPP setahun Rp240jt, rata-rata persediaan Rp40jt. Berapa inventory turnover-nya? (kali per tahun)", answer: 6, tol: 0.1, hint: "Inventory Turnover = HPP ÷ rata-rata persediaan.", solution: "240 ÷ 40 = 6 kali per tahun." },
          ],
          quiz: [
            {
              q: "Apa beda Quick Ratio dari Current Ratio?",
              options: [
                "Quick Ratio mengecualikan persediaan, sehingga lebih ketat",
                "Quick Ratio hanya menghitung kas, tanpa piutang sama sekali",
                "Quick Ratio memasukkan utang jangka panjang ke dalam hitungan",
                "Quick Ratio dihitung bulanan, sedangkan Current Ratio tahunan",
              ],
              answer: 0,
              explain:
                "Quick ratio mengeluarkan persediaan yang sulit cepat dicairkan.",
            },
            {
              q: "Dampak perputaran persediaan yang lambat?",
              options: [
                "Kas terjebak di stok, sehingga butuh modal kerja lebih besar",
                "Harga pokok penjualan turun sehingga laba otomatis naik",
                "Perusahaan mendapat potongan pajak atas persediaan tersimpan",
                "Piutang pelanggan tertagih lebih cepat dari biasanya",
              ],
              answer: 0,
              explain:
                "Stok yang lambat terjual mengunci kas dan menekan likuiditas.",
            },
          ],
        },
        {
          id: "acc-fund-1",
          title: "Net Profit (Laba Bersih) & Kualitasnya",
          duration: "11 menit",
          content: `
<p><b>Laba Bersih (Net Profit)</b> adalah angka paling akhir di laporan laba rugi — sering disebut <b>"bottom line"</b>. Inilah sisa uang setelah SEMUA dikurangi.</p>

<div data-diagram="pipeline" data-stages="Pendapatan::seluruh penjualan|− HPP::jadi laba kotor|− Beban operasi::jadi laba operasi|− Bunga &amp; pajak::jadi laba bersih" data-caption="Empat lapis pengurangan dari penjualan sampai laba bersih"></div>


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
                "Laba dari operasi inti yang berulang lebih berharga daripada laba sekali saja",
                "Laba yang besar selalu menandakan perusahaan dikelola dengan baik",
                "Laba yang dilaporkan otomatis sama dengan kas yang diterima perusahaan",
                "Laba cukup dinilai dari besarnya, bukan dari mana asalnya",
              ],
              answer: 0,
              explain:
                "Laba berkelanjutan dari operasi inti lebih bernilai daripada laba sesekali (mis. jual aset).",
            },
            {
              q: "Dampak laba bersih yang sehat & tumbuh bagi perusahaan?",
              options: [
                "Menarik investor, bisa bayar dividen, dan mendanai ekspansi tanpa utang",
                "Membebaskan perusahaan dari kewajiban membayar pajak penghasilan",
                "Menjamin harga saham perusahaan terus naik setiap tahunnya",
                "Membuat perusahaan tak perlu lagi menyusun laporan arus kas",
              ],
              answer: 0,
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

<div data-diagram="flow" data-steps="Arus Kas Operasi|− Belanja Modal (CapEx)|= Free Cash Flow" data-caption="Menghitung kas bebas"></div>


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

<h3>Yang sering terlewat: dua jenis CapEx</h3>
<p>Rumus di atas memperlakukan seluruh CapEx sama. Padahal ada <b>dua jenis yang sangat berbeda</b>:</p>

<table class="tbl">
  <tr><th>Jenis CapEx</th><th>Untuk apa</th><th>Sifatnya</th></tr>
  <tr><td><b>Pemeliharaan</b><br><i>(maintenance)</i></td><td>Mengganti mesin aus, memperbarui sistem — sekadar agar bisnis tetap berjalan seperti sekarang</td><td class="bad-cell"><b>Wajib.</b> Tidak bisa dihentikan tanpa merusak bisnis</td></tr>
  <tr><td><b>Pertumbuhan</b><br><i>(growth)</i></td><td>Membuka cabang baru, menambah kapasitas pabrik</td><td class="ok-cell"><b>Pilihan.</b> Bisa dihentikan kapan saja</td></tr>
</table>

<div class="callout warn">
<b>Kenapa ini penting sekali.</b> Perusahaan yang sedang berekspansi besar-besaran akan terlihat punya FCF <b>tipis atau negatif</b> — padahal itu karena ia <b>memilih</b> menanam uang untuk tumbuh, bukan karena bisnisnya lemah.<br><br>
Bandingkan dua perusahaan dengan arus kas operasi sama-sama Rp500 M:<br>
• Perusahaan A: CapEx Rp450 M, semuanya <b>pemeliharaan</b> → bisnis rakus modal, hasilnya benar-benar tipis.<br>
• Perusahaan B: CapEx Rp450 M, tapi Rp100 M pemeliharaan dan Rp350 M <b>pertumbuhan</b> → sebenarnya menghasilkan Rp400 M kas bebas, yang <b>sengaja</b> diinvestasikan kembali.<br><br>
FCF keduanya sama-sama Rp50 M. Tapi kualitas bisnisnya <b>jauh berbeda</b>.
</div>

<h3>Owner earnings — versi Warren Buffett</h3>
<div class="callout">
<b>Owner earnings</b> = Arus Kas Operasi − CapEx <b>pemeliharaan saja</b><br><br>
<i>Yaitu: berapa kas yang bisa diambil pemilik seandainya perusahaan berhenti tumbuh dan hanya mempertahankan keadaan sekarang.</i>
</div>

<div class="callout warn">
🚩 <b>Tapi hati-hati.</b> Laporan keuangan biasanya <b>tidak memisahkan</b> keduanya — manajemen bisa menyebut CapEx pemeliharaan sebagai "pertumbuhan" agar angkanya terlihat bagus.<br><br>
<b>Cara memeriksanya:</b> bandingkan CapEx dengan <b>beban penyusutan</b>. Penyusutan kira-kira mencerminkan aus-nya aset per tahun. Kalau CapEx bertahun-tahun jauh <b>di bawah</b> penyusutan, kemungkinan besar asetnya sedang dibiarkan menua — FCF-nya bagus hari ini, tapi tagihannya datang belakangan.
</div>

<h3>Dua rasio turunan yang sering dipakai</h3>
<table class="tbl">
  <tr><th>Rasio</th><th>Rumus</th><th>Menjawab</th></tr>
  <tr><td><b>Margin FCF</b></td><td>FCF ÷ Pendapatan</td><td>Dari tiap Rp100 penjualan, berapa yang jadi kas bebas? Di atas <b>10%</b> umumnya sangat baik.</td></tr>
  <tr><td><b>FCF Yield</b></td><td>FCF ÷ Kapitalisasi pasar</td><td>Kalau kamu membeli seluruh perusahaan hari ini, berapa persen kas bebas yang kamu terima per tahun?</td></tr>
</table>

<div class="callout">
<b>FCF yield adalah kembarannya PER.</b> PER — yang dibahas lengkap di modul <b>Valuasi Relatif &amp; Multiples</b> — melihat harga terhadap <b>laba</b>; FCF yield melihat kas bebas terhadap <b>harga</b> — dan karena memakai kas, ia lebih sulit dipoles. FCF yield 8% kira-kira setara "PER kas" sebesar 12,5×.
</div>

<h3>Coba sendiri</h3>
<p>Kalkulator ini memisahkan kedua jenis CapEx sekaligus menghitung margin dan yield-nya. Ubah angkanya dan perhatikan selisih FCF standar vs owner earnings:</p>

<div data-demo="fcf-calc"></div>

<div class="callout warn">
<b>Kapan FCF negatif itu wajar?</b> Perusahaan muda yang sedang membangun kapasitas hampir selalu ber-FCF negatif — dan itu <b>normal</b>. Yang harus ditanyakan bukan "positif atau negatif", tapi: <b>apakah uang yang ditanam itu menghasilkan return di atas biaya modalnya?</b> Kalau ya, FCF negatif hari ini adalah investasi. Kalau tidak, itu pembakaran uang.
</div>
`,
          keyPoints: [
            "FCF = Arus Kas Operasi − Belanja Modal (CapEx) = kas bebas yang benar-benar tersisa.",
            "FCF lebih sulit dimanipulasi daripada laba bersih; perusahaan bisa untung tapi FCF negatif.",
            "Dampak: FCF positif mendanai dividen, buyback, bayar utang, & ekspansi mandiri; FCF negatif = bergantung pendanaan luar.",
            "CapEx pemeliharaan itu WAJIB (menjaga bisnis tetap jalan); CapEx pertumbuhan itu PILIHAN (memperbesar bisnis).",
            "Owner earnings = Arus Kas Operasi − CapEx pemeliharaan saja; menunjukkan kas yang bisa diambil pemilik bila perusahaan berhenti tumbuh.",
            "Laporan tidak memisahkan keduanya — periksa dengan membandingkan CapEx terhadap beban penyusutan.",
            "Margin FCF = FCF ÷ Pendapatan (di atas 10% umumnya sangat baik); FCF Yield = FCF ÷ Kapitalisasi pasar.",
            "FCF negatif wajar bagi perusahaan yang sedang tumbuh — yang penting apakah return-nya di atas biaya modal.",
          ],
          practice: [
            { type: "number", q: "Arus kas operasi Rp500 M. CapEx pemeliharaan Rp150 M, CapEx pertumbuhan Rp200 M. Berapa FCF standarnya (dalam miliar)?", answer: 150, tol: 1, hint: "FCF standar mengurangi SELURUH CapEx.", solution: "500 − (150 + 200) = Rp150 M." },
            { type: "number", q: "Dari angka yang sama, berapa owner earnings-nya (dalam miliar)?", answer: 350, tol: 1, hint: "Owner earnings hanya mengurangi CapEx pemeliharaan.", solution: "500 − 150 = Rp350 M. Selisih Rp200 M itu adalah investasi pertumbuhan yang sifatnya pilihan." },
            { type: "number", q: "FCF Rp150 M, pendapatan Rp2.000 M. Berapa margin FCF-nya (dalam %)?", answer: 7.5, tol: 0.2, hint: "FCF ÷ Pendapatan × 100%.", solution: "150 ÷ 2.000 = 7,5%." },
          ],
          quiz: [
            {
              q: "Rumus Free Cash Flow adalah?",
              options: [
                "Arus Kas Operasi − Belanja Modal (CapEx)",
                "Laba Bersih − Pembayaran Dividen",
                "Pendapatan − Harga Pokok Penjualan",
                "Arus Kas Operasi + Arus Kas Pendanaan",
              ],
              answer: 0,
              explain: "FCF = Arus Kas Operasi − CapEx.",
            },
            {
              q: "Mengapa banyak analis lebih memercayai FCF daripada laba bersih?",
              options: [
                "Karena FCF mengukur kas nyata yang tersisa dan lebih sulit dipoles",
                "Karena FCF selalu bernilai lebih besar daripada laba bersih",
                "Karena FCF sudah diaudit, sedangkan laba bersih tidak pernah diaudit",
                "Karena FCF tidak terpengaruh belanja modal perusahaan sama sekali",
              ],
              answer: 0,
              explain:
                "FCF mencerminkan uang tunai riil; laba bersih bisa dipengaruhi aturan akuntansi.",
            },
            {
              q: "Apa beda CapEx pemeliharaan dan CapEx pertumbuhan?",
              options: [
                "Pemeliharaan menjaga bisnis tetap jalan; pertumbuhan pilihan untuk membesar",
                "Pemeliharaan dicatat sebagai beban; pertumbuhan dicatat sebagai aset tetap",
                "Pemeliharaan khusus untuk mesin; pertumbuhan hanya untuk gedung dan tanah",
                "Pemeliharaan dibiayai dengan utang; pertumbuhan dibiayai dari laba ditahan",
              ],
              answer: 0,
              explain:
                "Karena CapEx pertumbuhan bisa dihentikan kapan saja, ia tidak mengurangi kas yang sesungguhnya tersedia bagi pemilik.",
            },
            {
              q: "Bagaimana cara memeriksa apakah CapEx pemeliharaan yang dilaporkan manajemen masuk akal?",
              options: [
                "Bandingkan dengan penyusutan — jauh di bawahnya berarti aset dibiarkan menua",
                "Bandingkan dengan pendapatan — idealnya selalu tepat sepuluh persen darinya",
                "Bandingkan dengan dividen — keduanya seharusnya selalu bernilai sama besar",
                "Bandingkan dengan laba bersih — CapEx tidak boleh melebihi separuh laba",
              ],
              answer: 0,
              explain:
                "Penyusutan kira-kira mencerminkan aus-nya aset per tahun, jadi bisa dipakai sebagai pembanding kasar.",
            },
            {
              q: "Sebuah perusahaan muda punya FCF negatif karena membangun pabrik baru. Kesimpulan paling tepat?",
              options: [
                "Belum tentu buruk — tergantung apakah return-nya melampaui biaya modal",
                "Pasti buruk, karena FCF negatif selalu tanda perusahaan hampir bangkrut",
                "Pasti baik, karena setiap pembangunan pabrik menandakan pertumbuhan",
                "Tidak bisa dinilai sama sekali sampai pabriknya selesai dibangun",
              ],
              answer: 0,
              explain:
                "FCF negatif karena ekspansi adalah investasi bila return-nya memadai, dan pembakaran uang bila tidak.",
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

<div data-demo="roi-calc"></div>
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
                "Mengabaikan lamanya waktu investasi dan besarnya risiko",
                "Hanya bisa dihitung untuk investasi dalam bentuk saham",
                "Selalu memberi hasil negatif pada tahun pertama investasi",
                "Membutuhkan data arus kas harian yang sulit didapatkan",
              ],
              answer: 0,
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

<div data-diagram="compare3" data-cols="ROA::laba ÷ seluruh aset::seberapa produktif asetnya|ROE::laba ÷ modal sendiri::hasil untuk pemilik|ROIC::laba ÷ modal terpakai::paling jujur, abaikan utang" data-caption="Tiga ukuran efisiensi modal — penyebutnya yang membedakan"></div>


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
                "Berasal dari utang besar (leverage), bukan dari operasi yang unggul",
                "Perusahaan membagikan sebagian labanya sebagai dividen",
                "Perusahaan bergerak di industri teknologi yang tumbuh cepat",
                "Labanya naik bersamaan dengan kenaikan penjualan",
              ],
              answer: 0,
              explain:
                "ROE tinggi karena utang besar meningkatkan risiko keuangan, bukan kualitas.",
            },
            {
              q: "ROA mengukur?",
              options: [
                "Seberapa efisien seluruh aset perusahaan menghasilkan laba",
                "Seberapa besar laba yang dihasilkan dari modal milik pemilik",
                "Seberapa cepat perusahaan menjual habis persediaannya",
                "Seberapa besar porsi aset yang dibiayai oleh utang",
              ],
              answer: 0,
              explain: "ROA = Laba ÷ Total Aset — efisiensi aset menghasilkan laba.",
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
                "Return on Time Invested — imbal hasil atas waktu dan usaha yang dicurahkan",
                "Return on Total Investment — imbal hasil atas seluruh modal perusahaan",
                "Rate of Tax Income — tarif pajak atas penghasilan usaha",
                "Return on Tangible Inventory — imbal hasil atas persediaan fisik",
              ],
              answer: 0,
              explain:
                "ROTI = Return on Time Invested; menilai apakah suatu kegiatan sepadan dengan waktunya.",
            },
            {
              q: "Apa itu EBITDA?",
              options: [
                "Laba sebelum bunga, pajak, penyusutan & amortisasi — proksi kas operasi",
                "Laba setelah dikurangi seluruh beban termasuk bunga dan pajak",
                "Pendapatan kotor sebelum dikurangi harga pokok penjualan",
                "Arus kas bebas setelah dikurangi belanja modal perusahaan",
              ],
              answer: 0,
              explain:
                "EBITDA mendekati kas yang dihasilkan operasi sebelum beban non-tunai & pendanaan.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 6: EKONOMI MIKRO: PERMINTAAN, PENAWARAN & HARGA ---------------- */
    {
      id: "acc-mikro",
      level: "Mikro",
      title: "Ekonomi Mikro: Permintaan, Penawaran & Harga",
      summary: "Bagaimana harga terbentuk: hukum permintaan & penawaran, harga keseimbangan, pergeseran kurva, harga yang diatur, dan elastisitas — bekal untuk menentukan harga jual dan memahami inflasi.",
      lessons: [
        {
          id: "acc-mik-1",
          title: "Permintaan & Penawaran dari Nol",
          duration: "15 menit",
          content: `
<p>Siapa yang menentukan harga cabai di pasar? Bukan pemerintah, bukan pedagang terbesar, bukan juga pembeli. Harga itu <b>terbentuk sendiri</b> dari tarik-menarik ribuan pembeli dan penjual. Memahami tarik-menarik ini adalah dasar untuk memahami harga jual bisnismu, inflasi, suku bunga, sampai harga saham dan crypto.</p>

<div data-diagram="vs" data-left="Hukum Permintaan::Harga naik::→ ingin membeli lebih sedikit" data-right="Hukum Penawaran::Harga naik::→ ingin menjual lebih banyak" data-caption="Dua kekuatan yang bergerak berlawanan arah"></div>

<h3>1. Hukum permintaan: makin mahal, makin sedikit yang dibeli</h3>
<p><b>Permintaan</b> adalah berapa banyak barang yang <b>ingin dan mampu</b> dibeli pembeli pada setiap tingkat harga. Contoh permintaan cabai di sebuah pasar dalam sehari:</p>
<table class="tbl">
  <tr><th>Harga per kg</th><th>Jumlah yang ingin dibeli</th></tr>
  <tr><td>Rp20.000</td><td>80 kg</td></tr>
  <tr><td>Rp30.000</td><td>60 kg</td></tr>
  <tr><td>Rp40.000</td><td>40 kg</td></tr>
</table>
<p>Kenapa jumlahnya turun saat harga naik? Karena <b>uang pembeli terbatas</b>, ada <b>pilihan pengganti</b> (cabai keriting, saus sambal botolan), dan sebagian pembeli memilih <b>mengurangi</b> pemakaian.</p>

<h3>2. Hukum penawaran: makin mahal, makin banyak yang dijual</h3>
<p><b>Penawaran</b> adalah berapa banyak barang yang <b>ingin dijual</b> penjual pada setiap tingkat harga.</p>
<table class="tbl">
  <tr><th>Harga per kg</th><th>Jumlah yang ingin dijual</th></tr>
  <tr><td>Rp20.000</td><td>30 kg</td></tr>
  <tr><td>Rp30.000</td><td>60 kg</td></tr>
  <tr><td>Rp40.000</td><td>90 kg</td></tr>
</table>
<p>Kenapa jumlahnya naik saat harga naik? Karena menjual <b>lebih menguntungkan</b>, petani yang biaya tanamnya tinggi kini <b>ikut untung</b> sehingga mau menjual, dan pedagang <b>mengeluarkan stok</b> yang tadinya disimpan.</p>

<div class="callout">
<b>Satu syarat penting: "hal lain dianggap tetap".</b> Kedua hukum ini hanya berlaku bila yang berubah <b>hanya harga barang itu sendiri</b>. Kalau musim ikut berubah atau penghasilan pembeli naik, ceritanya berbeda — itu dibahas di pelajaran berikutnya. Para ekonom menyebut syarat ini <i>ceteris paribus</i>.
</div>

<h3>3. Titik temu: harga keseimbangan</h3>
<p>Lihat kedua tabel di atas. Di harga <b>Rp30.000</b>, pembeli ingin 60 kg dan penjual ingin menjual 60 kg — <b>sama persis</b>. Di situlah harga pasar cenderung berhenti.</p>

<div data-demo="pasar-keseimbangan"></div>

<table class="tbl">
  <tr><th>Keadaan</th><th>Yang terjadi di pasar</th><th>Arah harga</th></tr>
  <tr><td><b>Harga terlalu tinggi</b></td><td>Barang menumpuk tak laku (surplus)</td><td>Penjual menurunkan harga ⬇</td></tr>
  <tr><td><b>Harga terlalu rendah</b></td><td>Pembeli berebut, barang habis (kekurangan)</td><td>Harga terdorong naik ⬆</td></tr>
  <tr><td><b>Harga keseimbangan</b></td><td>Semua yang ingin membeli di harga itu mendapat barang</td><td>Cenderung stabil</td></tr>
</table>

<div class="callout warn">
<b>💡 Harga adalah sinyal.</b> Harga yang tinggi berkata kepada penjual "bawa lebih banyak barang" dan kepada pembeli "berhemat". Harga yang rendah berkata sebaliknya. Tanpa satu pun rapat atau perintah, jutaan orang menyesuaikan keputusannya — itulah kekuatan (dan juga keterbatasan) sebuah pasar.
</div>

<h3>Di mana kamu melihatnya setiap hari</h3>
<table class="tbl">
  <tr><th>Contoh</th><th>Tarik-menariknya</th></tr>
  <tr><td>Tarif ojek online naik saat hujan</td><td>Permintaan melonjak, pengemudi yang mau jalan berkurang</td></tr>
  <tr><td>Harga tiket pesawat saat libur panjang</td><td>Kursi terbatas, yang ingin terbang jauh lebih banyak</td></tr>
  <tr><td>Harga saham dan crypto</td><td>Setiap detik, harga adalah titik temu antara yang ingin membeli dan yang ingin menjual</td></tr>
  <tr><td>Gaji ahli AI yang tinggi</td><td>Banyak perusahaan membutuhkan, orang yang menguasainya masih sedikit</td></tr>
</table>
`,
          keyPoints: [
            "Harga pasar terbentuk dari tarik-menarik pembeli dan penjual, bukan ditetapkan satu pihak.",
            "Hukum permintaan: harga naik → jumlah yang ingin dibeli turun, karena uang terbatas dan ada pengganti.",
            "Hukum penawaran: harga naik → jumlah yang ingin dijual naik, karena menjual lebih menguntungkan.",
            "Kedua hukum berlaku bila hal lain dianggap tetap (ceteris paribus).",
            "Harga keseimbangan adalah harga ketika jumlah diminta sama dengan jumlah ditawarkan.",
            "Harga di atas keseimbangan menimbulkan surplus dan tekanan turun; di bawahnya menimbulkan kekurangan dan tekanan naik.",
            "Harga adalah sinyal yang mengatur keputusan jutaan orang tanpa perintah terpusat.",
          ],
          practice: [
            { type: "number", q: "Permintaan: Qd = 120 − 2P. Penawaran: Qs = −30 + 3P (P dalam ribu rupiah). Berapa harga keseimbangannya (ribu rupiah)?", answer: 30, tol: 0.5, hint: "Samakan: 120 − 2P = −30 + 3P.", solution: "150 = 5P → P = 30, yaitu Rp30.000/kg, dengan jumlah 60 kg." },
            { type: "number", q: "Dengan rumus yang sama, berapa kg kelebihan pasokan bila harga ditahan di Rp40.000?", answer: 50, tol: 0.5, hint: "Hitung Qd dan Qs pada P = 40, lalu kurangkan.", solution: "Qd = 120 − 80 = 40 kg; Qs = −30 + 120 = 90 kg. Surplus = 90 − 40 = 50 kg." },
          ],
          quiz: [
            {
              q: "Harga cabai sedang di atas harga keseimbangan. Apa yang cenderung terjadi?",
              options: [
                "Cabai menumpuk tak laku sehingga penjual menurunkan harga",
                "Pembeli berebut cabai sehingga harganya terdorong makin naik",
                "Jumlah yang ingin dibeli bertambah karena harganya lebih tinggi",
                "Pemerintah otomatis menetapkan harga baru untuk menyamakannya",
              ],
              answer: 0,
              explain: "Di atas keseimbangan, jumlah ditawarkan melebihi jumlah diminta — surplus menekan harga turun.",
            },
            {
              q: "Kenapa jumlah yang ingin dijual naik ketika harga naik?",
              options: [
                "Menjual jadi lebih menguntungkan, termasuk bagi penjual yang biayanya tinggi",
                "Pembeli otomatis membeli lebih banyak setiap kali harga barang naik",
                "Biaya produksi setiap penjual ikut turun ketika harga di pasar naik",
                "Penjual wajib menjual semua stoknya bila harga melewati batas tertentu",
              ],
              answer: 0,
              explain: "Harga yang lebih tinggi menutup biaya lebih banyak penjual, sehingga pasokan bertambah.",
            },
            {
              q: "Apa arti 'ceteris paribus' dalam hukum permintaan?",
              options: [
                "Hanya harga barang itu yang berubah, hal lain dianggap tetap",
                "Harga barang selalu kembali ke keseimbangan dalam satu hari",
                "Pembeli dan penjual memiliki informasi yang sama persis",
                "Semua penjual menjual barang dengan kualitas yang sama",
              ],
              answer: 0,
              explain: "Bila faktor lain ikut berubah — musim, penghasilan, tren — kurvanya sendiri yang bergeser.",
            },
            {
              q: "Tarif ojek online naik saat hujan deras. Penjelasan yang paling tepat?",
              options: [
                "Permintaan melonjak sementara pengemudi yang mau jalan berkurang",
                "Biaya bensin naik mendadak setiap kali hujan turun di kota",
                "Aplikasi menaikkan tarif karena pemerintah mewajibkannya",
                "Pengemudi sepakat bersama-sama menaikkan tarif saat hujan",
              ],
              answer: 0,
              explain: "Kedua sisi pasar bergeser sekaligus, sehingga harga keseimbangan naik.",
            },
          ],
        },
        {
          id: "acc-mik-2",
          title: "Kenapa Harga Naik atau Turun? Pergeseran Kurva & Harga yang Diatur",
          duration: "15 menit",
          content: `
<p>Harga cabai bisa naik dua kali lipat dalam sebulan, lalu jatuh lagi. Tiket pesawat mahal menjelang Lebaran. Minyak goreng pernah langka justru setelah harganya dibatasi. Semua itu bisa dijelaskan dengan satu alat: <b>kurva yang bergeser</b>.</p>

<h3>Fundamental: bergerak di kurva vs kurvanya bergeser</h3>
<p>Ini sumber kebingungan paling umum dalam ekonomi:</p>
<table class="tbl">
  <tr><th></th><th>Bergerak di sepanjang kurva</th><th>Kurvanya bergeser</th></tr>
  <tr><td><b>Penyebab</b></td><td>Harga barang itu sendiri berubah</td><td>Hal lain berubah: musim, penghasilan, tren, biaya</td></tr>
  <tr><td><b>Contoh</b></td><td>Cabai lebih mahal → orang membeli lebih sedikit</td><td>Menjelang Lebaran → di <b>setiap</b> harga, orang ingin membeli lebih banyak</td></tr>
  <tr><td><b>Istilah</b></td><td>"Jumlah yang diminta" berubah</td><td>"Permintaan" berubah</td></tr>
</table>

<h3>Apa yang menggeser permintaan?</h3>
<table class="tbl">
  <tr><th>Penggeser</th><th>Contoh</th></tr>
  <tr><td>Penghasilan pembeli</td><td>Gajian dan THR → belanja naik</td></tr>
  <tr><td>Selera & tren</td><td>Minuman viral di media sosial</td></tr>
  <tr><td>Harga barang pengganti</td><td>Daging sapi mahal → permintaan ayam naik</td></tr>
  <tr><td>Harga barang pelengkap</td><td>Harga mobil listrik turun → permintaan pengisian daya naik</td></tr>
  <tr><td>Ekspektasi</td><td>"Besok pasti naik" → orang memborong hari ini</td></tr>
  <tr><td>Jumlah pembeli</td><td>Musim wisata, perumahan baru di sekitar toko</td></tr>
</table>

<h3>Apa yang menggeser penawaran?</h3>
<table class="tbl">
  <tr><th>Penggeser</th><th>Contoh</th></tr>
  <tr><td>Biaya bahan, BBM & upah</td><td>Harga pupuk naik → petani menanam lebih sedikit</td></tr>
  <tr><td>Teknologi</td><td>Mesin baru menekan biaya per unit</td></tr>
  <tr><td>Cuaca & musim</td><td>Hujan berkepanjangan → panen cabai gagal</td></tr>
  <tr><td>Jumlah penjual</td><td>Banyak pesaing baru masuk pasar</td></tr>
  <tr><td>Pajak & subsidi</td><td>Subsidi pupuk menurunkan biaya tanam</td></tr>
</table>

<div data-demo="geser-kurva"></div>

<h3>Membaca penyebab dari arah harga dan jumlah</h3>
<table class="tbl">
  <tr><th>Yang terjadi</th><th>Harga</th><th>Jumlah terjual</th></tr>
  <tr><td>Permintaan naik</td><td>⬆ naik</td><td>⬆ naik</td></tr>
  <tr><td>Permintaan turun</td><td>⬇ turun</td><td>⬇ turun</td></tr>
  <tr><td>Penawaran naik</td><td>⬇ turun</td><td>⬆ naik</td></tr>
  <tr><td>Penawaran turun</td><td>⬆ naik</td><td>⬇ turun</td></tr>
</table>
<p>Kalau kamu mendengar "harga naik", jangan langsung menyimpulkan penyebabnya. <b>Lihat juga jumlah yang terjual</b>: naik bersama berarti permintaan yang menarik; bergerak berlawanan berarti pasokan yang tersendat.</p>

<h3>Saat harga diatur: batas atas dan batas bawah</h3>
<table class="tbl">
  <tr><th></th><th>Harga maksimum (mis. HET)</th><th>Harga minimum (mis. harga dasar)</th></tr>
  <tr><td><b>Tujuan</b></td><td>Melindungi pembeli dari harga tinggi</td><td>Melindungi penjual dari harga terlalu rendah</td></tr>
  <tr><td><b>Berpengaruh bila</b></td><td>Dipasang di bawah harga keseimbangan</td><td>Dipasang di atas harga keseimbangan</td></tr>
  <tr><td><b>Efek samping</b></td><td class="bad-cell">Kekurangan: rak kosong, antrean, penimbunan, pasar gelap</td><td class="bad-cell">Kelebihan: barang tak terserap, perlu dibeli pemerintah</td></tr>
</table>

<div class="callout warn">
<b>📰 Kisah minyak goreng 2022.</b> Saat harga minyak sawit dunia melonjak di awal 2022, pemerintah menetapkan harga eceran tertinggi minyak goreng. Di banyak daerah, minyak goreng justru sulit ditemukan dan antrean panjang muncul. Setelah HET minyak goreng kemasan dicabut pada Maret 2022, barangnya kembali ada di rak — dengan harga yang jauh lebih tinggi.<br><br>
<b>Bukan berarti mengatur harga selalu salah.</b> Pemerintah menimbang keterjangkauan bagi warga berpenghasilan rendah. Pilihan lain — seperti bantuan langsung kepada yang membutuhkan atau menambah pasokan — punya kelebihan dan kekurangannya sendiri. Yang perlu diingat: <b>menahan harga tanpa menambah pasokan hampir selalu menimbulkan kelangkaan</b>.
</div>

<h3>Kacamata yang sama untuk crypto dan saham</h3>
<ul>
  <li><b>Pasokan Bitcoin tetap dan terjadwal</b>, sehingga hampir semua gerakan harganya berasal dari <b>pergeseran permintaan</b> — sentimen, likuiditas global, berita. Itu salah satu alasan harganya sangat bergejolak.</li>
  <li><b>Token yang dibuka jadwal kuncinya</b> (<i>token unlock</i>) menambah penawaran di pasar — dibahas di pelajaran dilusi token pada jalur Crypto.</li>
  <li><b>Harga saham hari ini</b> adalah titik temu pembeli dan penjual hari itu — bukan otomatis "nilai wajar" bisnisnya.</li>
</ul>
`,
          keyPoints: [
            "Perubahan harga barang itu sendiri = bergerak di sepanjang kurva; perubahan hal lain = kurvanya bergeser.",
            "Permintaan digeser penghasilan, tren, harga barang pengganti & pelengkap, ekspektasi, dan jumlah pembeli.",
            "Penawaran digeser biaya bahan & upah, teknologi, cuaca, jumlah penjual, serta pajak & subsidi.",
            "Permintaan naik: harga dan jumlah naik bersama; penawaran turun: harga naik tapi jumlah turun.",
            "Harga maksimum di bawah keseimbangan menimbulkan kekurangan; harga minimum di atasnya menimbulkan kelebihan.",
            "Menahan harga tanpa menambah pasokan hampir selalu menimbulkan kelangkaan.",
            "Pasokan Bitcoin tetap, sehingga gejolak harganya terutama berasal dari pergeseran permintaan.",
          ],
          practice: [
            { type: "number", q: "Penawaran turun menjadi Qs = −60 + 3P, permintaan tetap Qd = 120 − 2P. Berapa harga keseimbangan baru (ribu rupiah)?", answer: 36, tol: 0.5, hint: "Samakan: 120 − 2P = −60 + 3P.", solution: "180 = 5P → P = 36. Harga naik dari 30 ke 36, jumlah turun dari 60 ke 48 kg." },
            { type: "choice", q: "Harga daging sapi melonjak. Apa yang terjadi pada kurva permintaan daging ayam?", options: ["Bergeser ke kanan (permintaan naik)", "Bergeser ke kiri (permintaan turun)", "Tidak bergeser, hanya bergerak di sepanjang kurva"], answer: 0, hint: "Ayam adalah pengganti daging sapi.", solution: "Harga barang pengganti naik → orang beralih → permintaan ayam bergeser ke kanan." },
          ],
          quiz: [
            {
              q: "Harga cabai naik dan jumlah cabai yang terjual turun. Penyebab yang paling mungkin?",
              options: [
                "Penawaran turun, misalnya karena panen gagal",
                "Permintaan naik, misalnya karena menjelang Lebaran",
                "Permintaan turun, misalnya karena tren memasak berubah",
                "Penawaran naik, misalnya karena panen sangat melimpah",
              ],
              answer: 0,
              explain: "Harga dan jumlah bergerak berlawanan menandakan pergeseran penawaran ke kiri.",
            },
            {
              q: "Mana yang merupakan pergerakan di sepanjang kurva permintaan, bukan pergeseran kurva?",
              options: [
                "Harga kopi naik sehingga orang membeli kopi lebih sedikit",
                "Penghasilan warga naik sehingga pembelian kopi bertambah",
                "Kopi menjadi tren di media sosial sehingga peminatnya naik",
                "Harga teh turun drastis sehingga peminum kopi beralih ke teh",
              ],
              answer: 0,
              explain: "Hanya perubahan harga barang itu sendiri yang menggerakkan titik di sepanjang kurvanya.",
            },
            {
              q: "Harga maksimum ditetapkan di bawah harga keseimbangan. Apa efek samping yang paling mungkin?",
              options: [
                "Barang menjadi langka karena jumlah diminta melebihi jumlah ditawarkan",
                "Barang menumpuk karena penjual terdorong membawa lebih banyak barang",
                "Harga keseimbangan baru langsung terbentuk tepat di angka harga maksimum",
                "Tidak ada efek karena harga maksimum hanya berlaku bagi pedagang besar",
              ],
              answer: 0,
              explain: "Di harga yang ditahan rendah, pembeli ingin lebih banyak sementara penjual menawarkan lebih sedikit.",
            },
            {
              q: "Kenapa gerakan harga Bitcoin terutama berasal dari sisi permintaan?",
              options: [
                "Karena pasokannya tetap dan terjadwal sehingga hampir tak bereaksi terhadap harga",
                "Karena penambang wajib menjual semua koin baru pada harga yang ditetapkan",
                "Karena permintaan Bitcoin selalu stabil dan tidak dipengaruhi sentimen",
                "Karena bursa crypto menentukan sendiri harga Bitcoin setiap harinya",
              ],
              answer: 0,
              explain: "Bila penawaran nyaris kaku, setiap pergeseran permintaan langsung terlihat sebagai gerakan harga.",
            },
          ],
        },
        {
          id: "acc-mik-3",
          title: "Elastisitas — Seberapa Peka Pembeli terhadap Harga",
          duration: "14 menit",
          content: `
<p>Sebuah warung kopi menaikkan harga 10%. Apakah pendapatannya naik 10%? Hampir pasti tidak — sebagian pelanggan akan pergi. Pertanyaannya: <b>berapa banyak</b>? Jawaban atas pertanyaan itu menentukan apakah menaikkan harga membuat bisnis lebih kaya atau justru lebih miskin.</p>

<h3>Fundamental: seberapa "melar" reaksi pembeli</h3>
<div class="callout">
🎈 <b>Bayangkan karet gelang.</b> Karet yang elastis melar jauh saat ditarik sedikit; tali yang kaku hampir tidak berubah.<br><br>
<b>Elastisitas harga</b> mengukur seberapa jauh jumlah yang dibeli "melar" saat harga ditarik:<br>
<b>Elastisitas = % perubahan jumlah ÷ % perubahan harga</b> (dibaca tanpa tanda minus)
</div>

<table class="tbl">
  <tr><th>Harga naik</th><th>Jumlah terjual turun</th><th>Elastisitas</th><th>Sebutan</th></tr>
  <tr><td>10%</td><td>20%</td><td>2</td><td><b>Elastis</b> — pembeli sangat peka</td></tr>
  <tr><td>10%</td><td>10%</td><td>1</td><td><b>Uniter</b></td></tr>
  <tr><td>10%</td><td>2%</td><td>0,2</td><td><b>Inelastis</b> — pembeli sulit menghindar</td></tr>
</table>

<div data-demo="elastisitas-harga"></div>

<h3>Aturan emas pendapatan</h3>
<table class="tbl">
  <tr><th>Jika permintaan…</th><th>Menaikkan harga</th><th>Menurunkan harga</th></tr>
  <tr><td><b>Inelastis</b> (&lt; 1)</td><td class="ok-cell">Pendapatan naik</td><td class="bad-cell">Pendapatan turun</td></tr>
  <tr><td><b>Elastis</b> (&gt; 1)</td><td class="bad-cell">Pendapatan turun</td><td class="ok-cell">Pendapatan naik</td></tr>
</table>
<p>Inilah alasan diskon besar-besaran masuk akal untuk barang yang elastis — lonjakan pembeli menutup potongan harga — tetapi tidak masuk akal untuk garam.</p>

<h3>Apa yang membuat permintaan elastis atau inelastis?</h3>
<table class="tbl">
  <tr><th>Faktor</th><th>Cenderung inelastis</th><th>Cenderung elastis</th></tr>
  <tr><td>Ada pengganti?</td><td>Sulit dicari (obat tertentu)</td><td>Banyak pilihan (merek kopi)</td></tr>
  <tr><td>Kebutuhan atau keinginan?</td><td>Kebutuhan pokok (beras)</td><td>Keinginan (liburan)</td></tr>
  <tr><td>Porsi dari pengeluaran</td><td>Kecil (garam, korek api)</td><td>Besar (mobil, rumah)</td></tr>
  <tr><td>Waktu</td><td>Jangka pendek (bensin besok pagi)</td><td>Jangka panjang (pindah ke kendaraan listrik)</td></tr>
  <tr><td>Kebiasaan & biaya berpindah</td><td>Tinggi (aplikasi yang semua datamu ada di sana)</td><td>Rendah (pindah warung sebelah)</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Elastisitas kategori ≠ elastisitas merekmu.</b> Beras sebagai kategori sangat inelastis, tapi satu merek beras bisa sangat elastis — pembeli mudah pindah ke merek lain di rak yang sama. Yang menentukan nasib bisnismu adalah elastisitas <b>produkmu sendiri</b>.
</div>

<h3>Jembatan ke analisis bisnis</h3>
<p>Istilah <b>pricing power</b> yang akan kamu temui di modul Kualitas Bisnis sebenarnya adalah <b>permintaan yang inelastis terhadap produk sebuah perusahaan</b>. Perusahaan seperti itu bisa meneruskan kenaikan biaya ke pelanggan tanpa kehilangan banyak penjualan — sangat berharga saat inflasi. Sumbernya biasanya merek yang dipercaya, tidak adanya pengganti, atau biaya berpindah yang tinggi.</p>

<h3>Siapa yang sebenarnya menanggung pajak?</h3>
<p>Ketika pemerintah mengenakan cukai, siapa yang membayar lebih banyak — penjual atau pembeli? Jawabannya bergantung pada elastisitas. Untuk barang yang permintaannya <b>inelastis</b> seperti rokok, pembeli tetap membeli walau harganya naik, sehingga sebagian besar beban cukai berpindah ke pembeli dan penerimaan negara tetap besar. Karena itu cukai biasanya dikenakan pada barang yang permintaannya kaku.</p>
`,
          keyPoints: [
            "Elastisitas harga = % perubahan jumlah ÷ % perubahan harga; di atas 1 elastis, di bawah 1 inelastis.",
            "Permintaan inelastis: menaikkan harga menaikkan pendapatan; permintaan elastis: menaikkan harga menurunkan pendapatan.",
            "Permintaan cenderung inelastis bila pengganti sulit dicari, barangnya kebutuhan pokok, porsinya kecil, jangka pendek, dan biaya berpindah tinggi.",
            "Elastisitas satu merek bisa jauh lebih tinggi daripada elastisitas kategori barangnya.",
            "Pricing power adalah permintaan yang inelastis terhadap produk perusahaan itu sendiri.",
            "Beban pajak atau cukai lebih banyak jatuh ke pembeli bila permintaannya inelastis.",
          ],
          practice: [
            { type: "number", q: "Harga naik 5% dan jumlah terjual turun 10%. Berapa elastisitasnya?", answer: 2, tol: 0.05, hint: "10 ÷ 5.", solution: "10 ÷ 5 = 2 → elastis. Kenaikan harga ini menurunkan pendapatan." },
            { type: "number", q: "Harga beras naik 10%, jumlah terjual turun 2%. Kira-kira berapa persen perubahan pendapatannya? (gunakan % harga + % jumlah)", answer: 8, tol: 0.5, hint: "+10% dan −2%.", solution: "Sekitar +10% − 2% = +8%. Hitungan tepatnya 1,10 × 0,98 − 1 = 7,8%." },
          ],
          quiz: [
            {
              q: "Sebuah produk punya elastisitas 0,3. Apa yang terjadi pada pendapatan jika harganya dinaikkan?",
              options: [
                "Naik, karena jumlah terjual turun jauh lebih sedikit dari kenaikan harga",
                "Turun, karena setiap kenaikan harga selalu mengurangi pendapatan",
                "Tetap, karena kenaikan harga dan penurunan jumlah selalu seimbang",
                "Tidak bisa diperkirakan tanpa mengetahui biaya produksinya",
              ],
              answer: 0,
              explain: "Elastisitas di bawah 1 berarti permintaan inelastis.",
            },
            {
              q: "Kenapa satu merek beras bisa elastis padahal beras sebagai kategori inelastis?",
              options: [
                "Pembeli tetap butuh beras, tapi mudah pindah ke merek lain di rak yang sama",
                "Merek beras yang lebih mahal selalu memiliki kualitas yang lebih buruk",
                "Elastisitas kategori dan elastisitas merek selalu bernilai persis sama",
                "Pemerintah mengatur harga semua merek beras dengan cara berbeda-beda",
              ],
              answer: 0,
              explain: "Kebutuhan akan beras kaku, tapi pilihan antar-merek sangat terbuka.",
            },
            {
              q: "Mana yang paling menggambarkan pricing power sebuah perusahaan?",
              options: [
                "Bisa menaikkan harga tanpa kehilangan banyak pelanggan",
                "Bisa menurunkan harga lebih rendah dari semua pesaingnya",
                "Menjual produk dengan harga tertinggi di seluruh industrinya",
                "Mendapat izin pemerintah untuk menetapkan harga sendiri",
              ],
              answer: 0,
              explain: "Pricing power adalah permintaan yang inelastis terhadap produk perusahaan itu.",
            },
            {
              q: "Kenapa cukai biasanya dikenakan pada barang seperti rokok?",
              options: [
                "Permintaannya inelastis sehingga penerimaan tetap besar walau harga naik",
                "Permintaannya elastis sehingga konsumsi langsung hilang setelah dikenai cukai",
                "Penjualnya menanggung seluruh cukai sehingga harga di pasar tidak berubah",
                "Barang tersebut tidak memiliki biaya produksi sehingga mudah dikenai pajak",
              ],
              answer: 0,
              explain: "Pembeli tetap membeli meski harga naik, jadi dasar penerimaan cukai tidak cepat menyusut.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 7: BIAYA, ANGGARAN & PAJAK ---------------- */
    {
      id: "acc-terapan",
      level: "Terapan",
      title: "Biaya, Anggaran & Pajak",
      summary: "Sisi operasional: CapEx vs OpEx, struktur biaya, titik impas, akuntansi biaya & ABC, RAB, anggaran & varians, pajak, dan penggajian.",
      lessons: [
        {
          id: "acc-op-1",
          title: "CapEx vs OpEx",
          duration: "11 menit",
          content: `
<p>Dua jenis pengeluaran yang harus dibedakan setiap pebisnis: <b>CapEx</b> dan <b>OpEx</b>. Keliru membedakannya bisa mengacaukan laporan & keputusan.</p>

<div data-diagram="vs" data-left="CapEx::Aset jangka panjang::Jadi aset lalu disusutkan::Neraca" data-right="OpEx::Biaya harian::Langsung jadi beban::Laba Rugi" data-caption="CapEx vs OpEx"></div>


<table class="tbl">
  <tr><th></th><th>CapEx (Belanja Modal)</th><th>OpEx (Belanja Operasional)</th></tr>
  <tr><td>Untuk apa</td><td>Membeli/memperbarui <b>aset jangka panjang</b> (mesin, gedung, kendaraan)</td><td>Biaya <b>menjalankan bisnis sehari-hari</b> (gaji, sewa, listrik, bahan)</td></tr>
  <tr><td>Manfaat</td><td>Jangka panjang (bertahun-tahun)</td><td>Habis pada periode itu</td></tr>
  <tr><td>Pencatatan</td><td>Jadi <b>aset</b>, lalu <b>disusutkan</b> bertahap</td><td>Langsung jadi <b>beban</b> di laba rugi</td></tr>
  <tr><td>Muncul di</td><td>Neraca + Arus Kas Investasi</td><td>Laporan Laba Rugi</td></tr>
</table>

<h3>💥 Dampak & keputusan</h3>
<ul>
  <li><b>CapEx besar</b> menekan kas <b>sekarang</b> tapi membangun kapasitas masa depan → dampaknya tersebar lewat penyusutan bertahun-tahun.</li>
  <li><b>OpEx tinggi</b> menekan laba <b>tiap periode</b> secara langsung.</li>
  <li>Keputusan klasik: <b>beli (CapEx)</b> vs <b>sewa/langganan (OpEx)</b>? Sewa menjaga kas & fleksibel; beli lebih murah jangka panjang jika dipakai lama.</li>
</ul>

<div class="callout">
<b>Ingat rumus FCF:</b> Free Cash Flow = Arus Kas Operasi − <b>CapEx</b>. CapEx yang besar langsung memangkas kas bebas perusahaan.
</div>
`,
          keyPoints: [
            "CapEx = belanja aset jangka panjang (dicatat sebagai aset & disusutkan); OpEx = biaya operasi harian (langsung jadi beban).",
            "CapEx muncul di neraca & arus kas investasi; OpEx di laporan laba rugi.",
            "Keputusan beli (CapEx) vs sewa (OpEx) memengaruhi kas & fleksibilitas.",
            "CapEx besar langsung memangkas Free Cash Flow.",
          ],
          practice: [
            { type: "choice", q: "Membeli mesin produksi seharga Rp200jt untuk dipakai 8 tahun termasuk?", options: ["OpEx (beban operasional)", "CapEx (belanja modal)"], answer: 1, hint: "Aset jangka panjang atau biaya harian?", solution: "Aset jangka panjang yang disusutkan = CapEx." },
            { type: "choice", q: "Membayar tagihan listrik & gaji bulanan termasuk?", options: ["CapEx (belanja modal)", "OpEx (belanja operasional)"], answer: 1, hint: "Habis pada periode itu?", solution: "Biaya menjalankan bisnis sehari-hari = OpEx." },
          ],
          quiz: [
            {
              q: "Perbedaan utama CapEx dan OpEx?",
              options: [
                "CapEx untuk aset jangka panjang yang disusutkan; OpEx biaya operasi harian",
                "CapEx dibayar tunai; OpEx selalu dibayar dengan cara mencicil",
                "CapEx untuk perusahaan besar; OpEx untuk usaha kecil dan menengah",
                "CapEx dicatat sebagai beban; OpEx dicatat sebagai aset di neraca",
              ],
              answer: 0,
              explain:
                "CapEx = investasi aset jangka panjang; OpEx = biaya operasi yang habis pakai.",
            },
            {
              q: "Bagaimana CapEx memengaruhi Free Cash Flow?",
              options: [
                "Mengurangi FCF, karena FCF = Arus Kas Operasi − CapEx",
                "Menambah FCF, karena aset baru meningkatkan nilai perusahaan",
                "Tidak berpengaruh, karena CapEx hanya tercatat di neraca",
                "Menambah FCF pada tahun berikutnya secara otomatis",
              ],
              answer: 0,
              explain: "CapEx dikurangkan langsung dari arus kas operasi untuk mendapat FCF.",
            },
          ],
        },
        {
          id: "acc-op-2",
          title: "Struktur Biaya: Langsung, Tidak Langsung & Overhead",
          duration: "11 menit",
          content: `
<p>Memahami dari mana biaya berasal membantumu menetapkan harga yang tepat & tahu produk mana yang benar-benar untung.</p>

<div data-diagram="stack" data-parts="Bahan baku (variabel):40|Gaji tetap:25|Sewa &amp; listrik:15|Pemasaran:12|Lain-lain:8" data-caption="Contoh struktur biaya sebuah usaha — perhatikan mana yang ikut naik saat penjualan naik"></div>


<h3>Berdasarkan keterlacakan ke produk</h3>
<ul>
  <li><b>Biaya Langsung (Direct)</b> — bisa dilacak langsung ke satu produk: bahan baku, upah pekerja produksi.</li>
  <li><b>Biaya Tidak Langsung / Overhead</b> — tidak bisa ditempel ke satu produk: listrik pabrik, gaji supervisor, sewa, penyusutan mesin.</li>
</ul>

<h3>Berdasarkan perilaku terhadap produksi (recap)</h3>
<ul>
  <li><b>Biaya Tetap</b> — tidak berubah ikut jumlah (sewa).</li>
  <li><b>Biaya Variabel</b> — naik-turun ikut jumlah (bahan baku).</li>
</ul>

<div class="callout">
<b>Overhead</b> sering "tersembunyi" tapi bisa besar. Kesalahan umum UMKM: menetapkan harga hanya dari biaya bahan (langsung) sambil <b>lupa membebankan overhead</b> → merasa untung padahal rugi.
</div>

<h3>💥 Dampak</h3>
<ul>
  <li><b>Penetapan harga</b>: harga harus menutup biaya langsung + porsi overhead + margin.</li>
  <li><b>Profitabilitas produk</b>: setelah membagi overhead, mungkin ketahuan ada produk yang sebenarnya merugi.</li>
  <li><b>Kontrol biaya</b>: overhead adalah target utama efisiensi.</li>
</ul>

<div data-demo="cost-structure"></div>
`,
          keyPoints: [
            "Biaya langsung bisa dilacak ke produk (bahan, upah produksi); overhead/tidak langsung tidak (listrik, sewa, supervisor).",
            "Biaya tetap tidak ikut produksi; biaya variabel ikut produksi.",
            "Kesalahan umum: menetapkan harga tanpa membebankan overhead → merasa untung padahal rugi.",
            "Dampak: struktur biaya menentukan harga tepat, profitabilitas produk, & target efisiensi.",
          ],
          quiz: [
            {
              q: "Listrik pabrik & gaji supervisor termasuk biaya?",
              options: [
                "Overhead (biaya tidak langsung)",
                "Bahan baku langsung",
                "Tenaga kerja langsung",
                "Beban pemasaran",
              ],
              answer: 0,
              explain:
                "Tidak bisa dilacak ke satu produk tertentu = overhead / biaya tidak langsung.",
            },
            {
              q: "Kesalahan umum penetapan harga pada UMKM?",
              options: [
                "Menghitung harga dari biaya bahan saja, lupa membebankan overhead",
                "Menetapkan harga sedikit di atas pesaing agar terlihat berkualitas",
                "Menaikkan harga bertahap mengikuti kenaikan biaya bahan baku",
                "Menghitung harga dari seluruh biaya lalu menambahkan margin laba",
              ],
              answer: 0,
              explain:
                "Lupa overhead membuat harga terlalu rendah dan bisnis merugi diam-diam.",
            },
          ],
        },
        {
          id: "acc-a-4",
          title: "Akuntansi untuk Keputusan Bisnis",
          duration: "11 menit",
          content: `
<p>Akuntansi bukan sekadar mencatat masa lalu — ia alat untuk <b>mengambil keputusan</b>.</p>

<div data-diagram="compare3" data-cols="Biaya relevan::berubah karena keputusan::WAJIB dihitung|Sunk cost::terlanjur keluar::ABAIKAN sepenuhnya|Biaya peluang::hilang karena memilih A::paling sering dilupakan" data-caption="Tiga jenis biaya saat mengambil keputusan"></div>


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
                "Bahan baku yang naik-turun mengikuti jumlah produksi",
                "Sewa gedung yang dibayar tetap setiap bulannya",
                "Gaji pokok staf administrasi yang sudah disepakati",
                "Premi asuransi bangunan yang dibayar tiap tahun",
              ],
              answer: 0,
              explain: "Biaya variabel berubah mengikuti volume produksi, seperti bahan baku.",
            },
          ],
        },
        {
          id: "acc-aud-1",
          title: "Akuntansi Biaya & Activity-Based Costing",
          duration: "13 menit",
          content: `
<p>Pertanyaan yang terdengar sederhana tapi sering dijawab salah: <b>"berapa sebenarnya biaya membuat satu produk ini?"</b> Jawaban yang keliru membuat perusahaan menjual produk yang sebenarnya merugi.</p>

<h3>Fundamental: dua jenis biaya (pengingat)</h3>
<ul>
  <li><b>Biaya langsung</b> — jelas milik satu produk: bahan baku, upah pekerja produksi.</li>
  <li><b>Overhead</b> — dipakai bersama: listrik pabrik, sewa, gaji supervisor. <b>Inilah yang sulit dibagi.</b></li>
</ul>

<h3>Tiga cara menghitung biaya produk</h3>
<table class="tbl">
  <tr><th>Metode</th><th>Cocok untuk</th><th>Cara kerja</th></tr>
  <tr><td><b>Job Order Costing</b></td><td>Produk unik per pesanan: kontraktor, percetakan custom, biro jasa</td><td>Biaya dikumpulkan <b>per pesanan</b></td></tr>
  <tr><td><b>Process Costing</b></td><td>Produksi massal &amp; seragam: semen, minuman kemasan</td><td>Total biaya ÷ jumlah unit</td></tr>
  <tr><td><b>Activity-Based Costing (ABC)</b></td><td>Produk beragam dengan pemakaian sumber daya berbeda</td><td>Overhead dibagi berdasarkan <b>aktivitas</b> yang benar-benar dipakai</td></tr>
</table>

<h3>Kenapa ABC ada? Masalah pembagian yang malas</h3>
<div class="callout warn">
<b>Cara lama:</b> semua overhead dibagi rata berdasarkan <b>satu pemicu</b> saja, biasanya jam kerja.
<br><br><b>Masalahnya:</b> misal Produk A dibuat massal &amp; sederhana, Produk B dibuat sedikit tapi butuh <b>banyak penyetelan mesin, inspeksi, &amp; penanganan khusus</b>. Kalau overhead dibagi hanya berdasarkan jam kerja, <b>Produk A ikut menanggung kerepotan yang disebabkan Produk B</b>.
<br><br><b>Akibatnya fatal:</b> Produk A terlihat <b>kurang untung</b> (padahal untung), Produk B terlihat <b>untung</b> (padahal merugi). Perusahaan lalu mendorong penjualan produk yang salah.
</div>

<h3>Cara kerja ABC</h3>
<ol>
  <li>Identifikasi <b>aktivitas</b> yang memakan biaya: penyetelan mesin, inspeksi mutu, penanganan bahan, pengiriman.</li>
  <li>Tentukan <b>pemicu biaya (cost driver)</b> tiap aktivitas: jumlah penyetelan, jumlah inspeksi, jumlah pengiriman.</li>
  <li>Bebankan biaya ke produk <b>sesuai pemakaian nyatanya</b>.</li>
</ol>

<div class="callout">
<b>Contoh:</b> biaya penyetelan mesin Rp100 juta/tahun untuk 200 kali penyetelan → <b>Rp500.000 per penyetelan</b>. Produk yang butuh 150 penyetelan menanggung Rp75 juta; produk yang butuh 50 penyetelan menanggung Rp25 juta. <b>Adil sesuai pemakaian.</b>
</div>

<div class="callout warn">
<b>Harganya:</b> ABC lebih <b>akurat</b> tapi lebih <b>rumit &amp; mahal</b> diterapkan. Untuk usaha kecil dengan produk sejenis, metode sederhana sudah memadai. Pakai ABC saat produkmu beragam &amp; overhead-nya besar.
</div>
`,
          keyPoints: [
            "Biaya langsung mudah dilacak; overhead (dipakai bersama) sulit dibagi — di situlah letak masalahnya.",
            "Job order costing untuk produk unik per pesanan; process costing untuk produksi massal seragam.",
            "ABC membagi overhead berdasarkan aktivitas & pemicu biaya (cost driver) yang benar-benar dipakai.",
            "Pembagian overhead yang malas membuat produk sederhana menanggung kerepotan produk rumit — laba per produk jadi menyesatkan.",
            "ABC lebih akurat tapi lebih rumit; pakai saat produk beragam & overhead besar.",
          ],
          practice: [
            { type: "number", q: "Biaya penyetelan mesin Rp100jt/tahun untuk 200 kali penyetelan. Berapa biaya per penyetelan? (Rupiah)", answer: 500000, tol: 1000, hint: "Total biaya ÷ jumlah pemicu.", solution: "100.000.000 ÷ 200 = Rp500.000." },
            { type: "number", q: "Dengan tarif Rp500.000/penyetelan, berapa overhead yang dibebankan ke produk yang butuh 150 penyetelan? (juta)", answer: 75, tol: 0.5, unit: "jt", hint: "150 × Rp500.000.", solution: "150 × 500.000 = Rp75 juta." },
          ],
          quiz: [
            {
              q: "Apa masalah membagi seluruh overhead hanya berdasarkan jam kerja?",
              options: [
                "Produk sederhana ikut menanggung kerepotan produk rumit — labanya menyesatkan",
                "Jam kerja tidak bisa dicatat secara akurat oleh perusahaan manufaktur mana pun",
                "Aturan akuntansi melarang overhead dibagi berdasarkan jumlah jam kerja",
                "Pembagian itu membuat total overhead perusahaan menjadi berlipat ganda",
              ],
              answer: 0,
              explain:
                "Pemicu tunggal mengabaikan perbedaan pemakaian sumber daya antar-produk.",
            },
            {
              q: "Metode costing mana yang cocok untuk kontraktor bangunan (tiap proyek berbeda)?",
              options: ["Process costing", "Job order costing", "FIFO", "Tidak perlu costing"],
              answer: 1,
              explain: "Job order costing mengumpulkan biaya per pesanan/proyek unik.",
            },
          ],
        },
        {
          id: "acc-fund-5",
          title: "RAB (Rencana Anggaran Biaya)",
          duration: "12 menit",
          content: `
<p><b>RAB (Rencana Anggaran Biaya)</b> adalah perkiraan <b>rinci semua biaya</b> sebuah proyek/kegiatan <b>sebelum</b> dijalankan. Sangat umum di Indonesia untuk konstruksi, acara, hingga membuka usaha baru.</p>

<div data-diagram="flow" data-steps="Rincian Item|Volume × Harga Satuan|Total RAB|Kontrol Varians" data-caption="Alur menyusun & memakai RAB"></div>


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
                "Merinci perkiraan biaya proyek sebelum dimulai, sebagai dasar dana & kontrol",
                "Mencatat realisasi pengeluaran proyek setelah pekerjaannya selesai",
                "Menghitung laba bersih proyek untuk dilaporkan kepada pemegang saham",
                "Menentukan harga jual produk berdasarkan harga pesaing di pasar",
              ],
              answer: 0,
              explain:
                "RAB adalah perencanaan biaya yang menjadi dasar pendanaan dan pengendalian.",
            },
            {
              q: "Dampak RAB yang asal-asalan bagi proyek?",
              options: [
                "Biaya membengkak, kas habis di tengah jalan, proyek berisiko mangkrak",
                "Proyek selesai lebih cepat karena perencanaannya tidak terlalu rinci",
                "Pajak proyek menjadi lebih rendah karena biayanya tidak tercatat",
                "Tidak berdampak apa pun selama proyeknya dikerjakan dengan baik",
              ],
              answer: 0,
              explain:
                "RAB tidak realistis menyebabkan over budget dan gangguan proyek.",
            },
          ],
        },
        {
          id: "acc-aud-2",
          title: "Anggaran & Analisis Varians",
          duration: "12 menit",
          content: `
<p>Anggaran bukan sekadar ramalan — ia <b>alat kendali</b>. Kekuatannya baru muncul saat kamu <b>membandingkan rencana dengan kenyataan</b>.</p>

<h3>Fundamental: apa itu varians?</h3>
<div class="callout">
<b>Varians = Realisasi − Anggaran.</b> Sederhananya: <b>selisih antara yang terjadi dan yang direncanakan.</b>
<br><br>Tapi hati-hati membacanya — tandanya <b>tidak selalu</b> berarti baik atau buruk:
<ul>
  <li><b>Menguntungkan (favorable)</b> — pendapatan <b>lebih tinggi</b> dari rencana, ATAU biaya <b>lebih rendah</b> dari rencana.</li>
  <li><b>Merugikan (unfavorable)</b> — pendapatan <b>lebih rendah</b>, ATAU biaya <b>lebih tinggi</b>.</li>
</ul>
</div>

<h3>Contoh</h3>
<table class="tbl">
  <tr><th>Pos</th><th>Anggaran</th><th>Realisasi</th><th>Varians</th><th>Penilaian</th></tr>
  <tr><td>Penjualan</td><td>500</td><td>540</td><td>+40</td><td class="ok-cell">Menguntungkan</td></tr>
  <tr><td>Biaya bahan</td><td>200</td><td>230</td><td>+30</td><td>Merugikan</td></tr>
  <tr><td>Biaya listrik</td><td>50</td><td>45</td><td>−5</td><td class="ok-cell">Menguntungkan</td></tr>
</table>
<p>Perhatikan: varians <b>+30</b> pada biaya justru <b>merugikan</b>, sedangkan <b>+40</b> pada penjualan menguntungkan. Selalu lihat <b>jenis posnya</b> dulu.</p>

<h3>Membongkar penyebab: harga vs jumlah</h3>
<p>Varians biaya bahan naik Rp30 juta — tapi <b>kenapa</b>? Ada dua kemungkinan yang harus dipisahkan:</p>
<ul>
  <li><b>Varians harga</b> — harga bahan per unit naik (mungkin di luar kendali kita: pasar, kurs).</li>
  <li><b>Varians efisiensi/jumlah</b> — pemakaian bahan lebih boros dari rencana (biasanya <b>bisa</b> dikendalikan: mesin rusak, banyak produk gagal, pemborosan).</li>
</ul>
<div class="callout">
<b>Kenapa pemisahan ini penting?</b> Karena menentukan <b>tindakan</b>. Kalau penyebabnya harga pasar, solusinya negosiasi pemasok atau sesuaikan harga jual. Kalau penyebabnya pemborosan, solusinya perbaiki proses produksi. Menyalahkan bagian produksi atas kenaikan harga pasar adalah kesalahan manajemen klasik.
</div>

<h3>Anggaran statis vs fleksibel</h3>
<div class="callout warn">
<b>Jebakan anggaran statis:</b> anggaran dibuat untuk 1.000 unit, ternyata terjual 1.300 unit. Biaya bahan <b>pasti</b> lebih besar dari anggaran — tapi itu <b>wajar</b>, bukan pemborosan!
<br><br><b>Anggaran fleksibel</b> menyesuaikan dulu ke tingkat aktivitas nyata (1.300 unit), <b>baru</b> dibandingkan. Tanpa ini, penilaianmu keliru.
</div>

<h3>Management by exception</h3>
<p>Jangan menyelidiki semua selisih. Fokuskan waktu pada varians yang <b>besar &amp; tidak biasa</b> — itulah yang paling mungkin menyimpan masalah nyata.</p>
`,
          keyPoints: [
            "Varians = Realisasi − Anggaran; maknanya (menguntungkan/merugikan) tergantung jenis pos.",
            "Biaya lebih tinggi dari anggaran = merugikan; pendapatan lebih tinggi = menguntungkan.",
            "Pisahkan varians harga (sering di luar kendali) dari varians efisiensi (biasanya bisa dikendalikan) — menentukan tindakan.",
            "Anggaran fleksibel menyesuaikan ke tingkat aktivitas nyata dulu, agar perbandingannya adil.",
            "Management by exception: selidiki varians yang besar & tidak biasa saja.",
          ],
          practice: [
            { type: "number", q: "Anggaran biaya bahan Rp200jt, realisasi Rp230jt. Berapa variansnya? (juta)", answer: 30, tol: 0.5, unit: "jt", hint: "Realisasi − Anggaran.", solution: "230 − 200 = Rp30jt (merugikan, karena biaya naik)." },
            { type: "choice", q: "Anggaran dibuat untuk 1.000 unit, ternyata terjual 1.300 unit sehingga biaya bahan melebihi anggaran. Penilaian yang tepat?", options: ["Pasti ada pemborosan", "Wajar — bandingkan dengan anggaran FLEKSIBEL pada 1.300 unit dulu", "Produksi harus dihentikan", "Anggaran tidak berguna"], answer: 1, hint: "Volume berubah, apakah adil membandingkan dengan anggaran lama?", solution: "Anggaran fleksibel menyesuaikan ke aktivitas nyata sebelum dibandingkan." },
          ],
          quiz: [
            {
              q: "Biaya realisasi LEBIH TINGGI dari anggaran. Ini varians?",
              options: [
                "Menguntungkan",
                "Merugikan (unfavorable)",
                "Netral",
                "Tidak bisa dinilai",
              ],
              answer: 1,
              explain: "Untuk pos biaya, realisasi lebih tinggi berarti merugikan.",
            },
            {
              q: "Kenapa varians harga dan varians efisiensi perlu dipisahkan?",
              options: [
                "Penyebabnya berbeda, sehingga tindakan perbaikannya pun berbeda",
                "Keduanya dilaporkan kepada pihak berbeda sesuai aturan pajak",
                "Varians harga selalu positif sedangkan varians efisiensi negatif",
                "Menggabungkannya membuat anggaran tahun depan tak bisa disusun",
              ],
              answer: 0,
              explain:
                "Harga pasar & pemborosan proses menuntut solusi yang sama sekali berbeda.",
            },
          ],
        },
        {
          id: "acc-op-3",
          title: "Pajak Bisnis (PPN & PPh)",
          duration: "12 menit",
          content: `
<p>Pajak adalah kewajiban yang wajib dikelola dengan benar. Dua yang paling penting bagi bisnis di Indonesia: <b>PPN</b> dan <b>PPh</b>.</p>

<div data-diagram="pipeline" data-stages="Pungut PPN::dari pembeli|Setor PPN::ke negara|Hitung laba::pendapatan − beban|Bayar PPh::atas laba" data-caption="PPN hanya numpang lewat; PPh diambil dari labamu sendiri"></div>


<h3>PPN (Pajak Pertambahan Nilai)</h3>
<ul>
  <li>Pajak atas <b>konsumsi</b>, tarif umum <b>11%</b>, ditambahkan ke harga jual.</li>
  <li>Bisnis (PKP) <b>memungut</b> PPN dari pelanggan lalu <b>menyetorkannya</b> ke negara — jadi bisnis hanya "penampung", PPN <b>bukan beban</b> bisnis itu sendiri.</li>
</ul>

<h3>PPh (Pajak Penghasilan)</h3>
<ul>
  <li>Pajak atas <b>penghasilan/laba</b>.</li>
  <li><b>PPh Final UMKM</b> — untuk usaha kecil tertentu, sederhana: dihitung dari <b>omzet</b> (mis. 0,5%).</li>
  <li><b>PPh Badan</b> — untuk perusahaan, dihitung dari <b>laba</b>.</li>
  <li><b>PPh 21</b> — dipotong dari gaji karyawan.</li>
</ul>

<div class="callout warn">
<b>💥 Dampak:</b> Salah kelola pajak → <b>denda, bunga, bahkan masalah hukum</b>. Pajak juga memengaruhi laba bersih & kas. Karena itu banyak bisnis melakukan <b>perencanaan pajak</b> (legal) dan pembukuan rapi agar patuh & efisien.
</div>

<div class="callout">
<b>Catatan:</b> tarif & aturan pajak bisa berubah dan berbeda antarnegara. Untuk keputusan nyata, konsultasikan dengan konsultan/otoritas pajak. Materi ini edukasi.
</div>
`,
          keyPoints: [
            "PPN = pajak konsumsi (umumnya 11%) yang dipungut dari pelanggan & disetor ke negara — bisnis hanya penampung.",
            "PPh = pajak penghasilan: PPh Final UMKM (dari omzet), PPh Badan (dari laba), PPh 21 (gaji karyawan).",
            "Dampak: salah kelola pajak berisiko denda & masalah hukum; pajak memengaruhi laba bersih & kas.",
            "Tarif & aturan bisa berubah/berbeda antarnegara — konsultasikan untuk keputusan nyata.",
          ],
          practice: [
            { type: "number", q: "Harga barang (belum termasuk pajak) Rp1.000.000, PPN 11%. Berapa PPN-nya? (Rupiah)", answer: 110000, tol: 1, hint: "PPN = 11% × harga.", solution: "11% × 1.000.000 = Rp110.000." },
            { type: "number", q: "Omzet UMKM sebulan Rp50.000.000, PPh Final 0,5%. Berapa PPh-nya? (Rupiah)", answer: 250000, tol: 1, hint: "PPh Final = 0,5% × omzet.", solution: "0,5% × 50.000.000 = Rp250.000." },
          ],
          quiz: [
            {
              q: "Mengapa PPN disebut bukan beban bagi bisnis?",
              options: [
                "Karena bisnis hanya memungutnya dari pelanggan lalu menyetorkannya ke negara",
                "Karena PPN sudah termasuk dalam pajak penghasilan yang dibayar tahunan",
                "Karena PPN hanya dikenakan pada perusahaan asing yang beroperasi di sini",
                "Karena PPN dikembalikan penuh oleh negara di akhir tahun buku",
              ],
              answer: 0,
              explain:
                "PPN bersifat pass-through: dipungut dari konsumen, disetor ke negara.",
            },
            {
              q: "PPh Final UMKM umumnya dihitung dari?",
              options: ["Laba bersih", "Omzet (peredaran bruto)", "Aset", "Utang"],
              answer: 1,
              explain: "PPh Final UMKM dihitung sederhana dari omzet, bukan laba.",
            },
          ],
        },
        {
          id: "acc-op-4",
          title: "Penggajian & Biaya Karyawan",
          duration: "11 menit",
          content: `
<p>Bagi banyak bisnis, <b>biaya karyawan adalah pengeluaran terbesar</b>. Dan biaya sesungguhnya <b>lebih dari sekadar gaji pokok</b>.</p>

<div data-diagram="stack" data-parts="Gaji pokok:70|Tunjangan:15|BPJS &amp; jaminan:9|THR (dicicil bulanan):6" data-caption="Biaya karyawan bukan hanya gaji pokok — siapkan sekitar 1,3x dari angka yang dijanjikan"></div>


<h3>Komponen biaya karyawan</h3>
<ul>
  <li><b>Gaji pokok</b> & <b>tunjangan</b> (transport, makan, jabatan).</li>
  <li><b>Lembur</b> dan <b>THR</b> (Tunjangan Hari Raya — wajib di Indonesia).</li>
  <li><b>BPJS</b> (Kesehatan & Ketenagakerjaan) — sebagian ditanggung <b>perusahaan</b>, sebagian karyawan.</li>
  <li><b>PPh 21</b> — pajak penghasilan karyawan yang dipotong perusahaan.</li>
</ul>

<div class="callout">
<b>Poin penting:</b> "biaya membawa" seorang karyawan bagi perusahaan <b>lebih tinggi</b> dari gaji yang ia terima, karena ada iuran BPJS bagian perusahaan, THR, dan tunjangan. Rencanakan berdasarkan <b>biaya total</b>, bukan gaji pokok saja.
</div>

<h3>💥 Dampak</h3>
<ul>
  <li>Salah menghitung biaya karyawan → <b>arus kas</b> kacau (mis. lupa menyiapkan THR).</li>
  <li>Kepatuhan (BPJS, PPh 21, upah minimum) menghindari <b>masalah hukum ketenagakerjaan</b>.</li>
  <li>Ukur <b>produktivitas per biaya karyawan</b> untuk menilai efisiensi tim.</li>
</ul>
`,
          keyPoints: [
            "Biaya karyawan mencakup gaji pokok, tunjangan, lembur, THR, BPJS (bagian perusahaan), & PPh 21.",
            "Biaya total karyawan bagi perusahaan lebih tinggi dari gaji yang diterima — rencanakan dari biaya total.",
            "Dampak: salah hitung mengacaukan arus kas (mis. THR); kepatuhan menghindari masalah hukum.",
          ],
          quiz: [
            {
              q: "Mengapa biaya total karyawan lebih tinggi dari gaji pokoknya?",
              options: [
                "Karena ada BPJS bagian perusahaan, THR, tunjangan, dan lainnya",
                "Karena gaji pokok selalu dikenakan pajak tambahan oleh perusahaan",
                "Karena karyawan wajib membayar sebagian biaya kantor setiap bulan",
                "Karena gaji pokok dicatat dua kali dalam laporan laba rugi",
              ],
              answer: 0,
              explain:
                "Perusahaan menanggung iuran & komponen tambahan di luar gaji pokok.",
            },
            {
              q: "Dampak lupa menyiapkan THR bagi bisnis?",
              options: [
                "Mengacaukan arus kas dan berisiko melanggar aturan ketenagakerjaan",
                "Mengurangi pajak penghasilan perusahaan pada tahun berjalan",
                "Menaikkan laba bersih karena bebannya tidak jadi dicatat",
                "Tidak berdampak apa pun karena THR bersifat sukarela",
              ],
              answer: 0,
              explain: "THR adalah kewajiban besar sekaligus; lupa merencanakannya menekan kas.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 8: PENGENDALIAN, KECURANGAN & AUDIT ---------------- */
    {
      id: "acc-audit",
      level: "Audit",
      title: "Pengendalian, Kecurangan & Audit",
      summary: "Segitiga kecurangan & pengendalian internal, mendeteksi manipulasi laporan, dan apa yang sebenarnya dilakukan auditor.",
      lessons: [
        {
          id: "acc-aud-3",
          title: "Pengendalian Internal & Segitiga Kecurangan",
          duration: "13 menit",
          content: `
<p>Pencatatan yang rapi tak ada artinya kalau <b>angkanya bisa dimanipulasi</b>. Di sinilah <b>pengendalian internal</b> berperan — dan ini relevan bahkan untuk usaha kecil.</p>

<div data-diagram="compare3" data-cols="Tekanan::target mustahil, utang pribadi::motifnya|Kesempatan::pengawasan lemah::celahnya|Rasionalisasi::'nanti saya kembalikan'::pembenarannya" data-caption="Kecurangan butuh ketiganya sekaligus — hilangkan satu, kecurangan jauh lebih sulit"></div>


<h3>Segitiga Kecurangan (Fraud Triangle)</h3>
<p>Penelitian klasik menemukan kecurangan hampir selalu terjadi saat <b>tiga hal muncul bersamaan</b>:</p>
<table class="tbl">
  <tr><th>Unsur</th><th>Wujudnya</th><th>Contoh pikiran pelaku</th></tr>
  <tr><td><b>Tekanan</b></td><td>Kebutuhan/desakan pribadi atau target</td><td><i>"Aku butuh uang untuk berobat."</i></td></tr>
  <tr><td><b>Kesempatan</b></td><td>Kontrol lemah, tak ada yang mengawasi</td><td><i>"Tidak akan ada yang tahu."</i></td></tr>
  <tr><td><b>Pembenaran</b></td><td>Alasan agar merasa tidak bersalah</td><td><i>"Cuma pinjam, nanti dikembalikan."</i></td></tr>
</table>

<div class="callout">
<b>Inti yang harus dipahami:</b> perusahaan <b>tidak bisa</b> mengendalikan tekanan hidup karyawan, dan <b>sulit</b> mengubah cara orang membenarkan diri. Yang <b>paling bisa dikendalikan</b> adalah <b>KESEMPATAN</b> — dan itulah persis tugas pengendalian internal.
</div>

<h3>Pengendalian internal yang paling penting</h3>
<table class="tbl">
  <tr><th>Kontrol</th><th>Cara kerjanya</th></tr>
  <tr><td><b>Pemisahan tugas</b></td><td>Orang yang <b>menyetujui</b>, yang <b>mencatat</b>, dan yang <b>memegang uang/barang</b> harus <b>berbeda</b></td></tr>
  <tr><td><b>Otorisasi</b></td><td>Pengeluaran di atas nilai tertentu wajib disetujui atasan</td></tr>
  <tr><td><b>Dokumentasi</b></td><td>Semua transaksi ada bukti bernomor urut (nota, faktur)</td></tr>
  <tr><td><b>Pengamanan fisik</b></td><td>Kas di brankas, gudang terkunci, akses sistem berkata sandi</td></tr>
  <tr><td><b>Rekonsiliasi</b></td><td>Catatan internal dicocokkan pihak lain dengan rekening koran bank</td></tr>
  <tr><td><b>Cuti wajib &amp; rotasi</b></td><td>Kecurangan berkelanjutan sering terbongkar saat pelakunya digantikan orang lain</td></tr>
</table>

<div class="callout warn">
<b>Pemisahan tugas adalah kontrol nomor satu.</b> Kalau satu orang bisa <b>membuat tagihan palsu, menyetujuinya, mencatatnya, DAN mengambil uangnya</b> — kecurangan hanya soal waktu. Ini kelemahan paling umum di UMKM, karena "kan cuma dia yang bisa".
</div>

<h3>Untuk usaha kecil yang orangnya terbatas</h3>
<p>Kamu mungkin tak punya cukup karyawan untuk memisahkan semua tugas. Yang bisa dilakukan:</p>
<ul>
  <li><b>Pemilik ikut memeriksa</b> rekening koran bank setiap bulan — jangan didelegasikan sepenuhnya.</li>
  <li>Gunakan <b>transfer bank</b> (jejaknya tercatat) daripada tunai sebisa mungkin.</li>
  <li>Wajibkan <b>bukti fisik</b> untuk tiap pengeluaran.</li>
  <li>Lakukan <b>hitung stok mendadak</b> secara berkala.</li>
</ul>

<div class="callout">
<b>Prinsip penting:</b> kontrol yang baik <b>bukan tanda tidak percaya</b> — justru <b>melindungi karyawan yang jujur</b> dari tuduhan, sekaligus menutup godaan. Sampaikan dengan cara itu agar tidak dianggap curiga berlebihan.
</div>
`,
          keyPoints: [
            "Segitiga kecurangan: tekanan + kesempatan + pembenaran muncul bersamaan.",
            "Yang paling bisa dikendalikan perusahaan adalah KESEMPATAN — tugas pengendalian internal.",
            "Kontrol terpenting: pemisahan tugas (menyetujui ≠ mencatat ≠ memegang aset).",
            "Kontrol lain: otorisasi, dokumentasi bernomor, pengamanan fisik, rekonsiliasi bank, cuti wajib & rotasi.",
            "UMKM: pemilik ikut cek rekening koran, utamakan transfer, wajibkan bukti, hitung stok mendadak.",
            "Kontrol melindungi karyawan jujur dari tuduhan — bukan tanda tidak percaya.",
          ],
          practice: [
            { type: "choice", q: "Satu orang membuat tagihan, menyetujuinya, mencatatnya, sekaligus memegang uangnya. Kontrol apa yang dilanggar?", options: ["Dokumentasi", "Pemisahan tugas", "Pengamanan fisik", "Rotasi jabatan"], answer: 1, hint: "Menyetujui ≠ mencatat ≠ memegang aset.", solution: "Ini pelanggaran pemisahan tugas — kelemahan kontrol paling berbahaya." },
            { type: "choice", q: "Dari tiga unsur segitiga kecurangan, mana yang paling bisa dikendalikan perusahaan?", options: ["Tekanan hidup karyawan", "Kesempatan", "Pembenaran diri pelaku", "Semua tidak bisa dikendalikan"], answer: 1, hint: "Mana yang bisa ditutup lewat sistem?", solution: "Kesempatan ditutup dengan pengendalian internal yang baik." },
          ],
          quiz: [
            {
              q: "Apa tiga unsur Segitiga Kecurangan?",
              options: [
                "Uang, waktu, tempat",
                "Tekanan, kesempatan, pembenaran",
                "Aset, utang, modal",
                "Debit, kredit, saldo",
              ],
              answer: 1,
              explain:
                "Kecurangan umumnya butuh ketiganya hadir bersamaan.",
            },
            {
              q: "Kenapa cuti wajib bisa menjadi alat pengendalian?",
              options: [
                "Kecurangan berkelanjutan sering terbongkar saat tugasnya digantikan orang lain",
                "Karyawan yang sedang cuti tidak bisa mengakses sistem perusahaan dari rumah",
                "Cuti wajib mengurangi beban gaji bulanan sehingga laba perusahaan ikut naik",
                "Aturan ketenagakerjaan mewajibkan audit setiap kali ada karyawan yang cuti",
              ],
              answer: 0,
              explain:
                "Skema yang butuh perawatan terus-menerus akan terlihat saat pelakunya absen.",
            },
          ],
        },
        {
          id: "acc-aud-4",
          title: "Mendeteksi Manipulasi Laporan Keuangan",
          duration: "14 menit",
          content: `
<p>Ini keterampilan yang membuatmu <b>jauh lebih tajam</b> membaca laporan — dan langsung berguna saat menilai saham (modul Prospek).</p>

<h3>Fundamental: kenapa laporan dimanipulasi?</h3>
<p>Karena ada <b>tekanan</b>: target laba, syarat pinjaman bank, harga saham, bonus manajemen. Manipulasinya berjenjang:</p>
<table class="tbl">
  <tr><th>Tingkat</th><th>Wujudnya</th><th>Status</th></tr>
  <tr><td><b>Earnings management</b></td><td>Memanfaatkan celah aturan agar laba terlihat mulus</td><td>Legal tapi <b>menyesatkan</b></td></tr>
  <tr><td><b>Agresif</b></td><td>Asumsi ekstrem, mengakui pendapatan terlalu dini</td><td>Zona abu-abu</td></tr>
  <tr><td><b>Fraud</b></td><td>Angka fiktif, transaksi palsu</td><td><b>Ilegal</b></td></tr>
</table>

<h3>🚩 Tanda bahaya utama</h3>
<div class="callout warn">
<b>#1 — Laba naik tapi arus kas operasi tidak.</b> Ini <b>sinyal paling kuat</b>. Laba bisa "diatur" lewat pencatatan; <b>kas jauh lebih sulit dipalsukan</b>. Bila keduanya berpisah jalan bertahun-tahun, selidiki.
</div>
<ul>
  <li><b>Piutang tumbuh jauh lebih cepat dari penjualan</b> → mungkin penjualan dipaksakan ke pelanggan yang belum tentu bayar.</li>
  <li><b>Persediaan menumpuk</b> lebih cepat dari penjualan → barang tak laku, atau nilainya digelembungkan.</li>
  <li><b>Perubahan kebijakan akuntansi</b> yang kebetulan menaikkan laba (mis. masa manfaat aset tiba-tiba diperpanjang).</li>
  <li><b>Lonjakan transaksi di akhir periode</b> → mengejar target (<i>channel stuffing</i>).</li>
  <li><b>Pos "lain-lain" besar</b> tanpa penjelasan memadai.</li>
  <li><b>Sering berganti auditor</b> — terutama setelah perbedaan pendapat.</li>
  <li><b>Laba terlalu mulus</b> — bisnis nyata naik-turun; laba yang selalu "pas" mencurigakan.</li>
</ul>

<h3>Hukum Benford — alat penyaring forensik</h3>
<div class="callout">
Pada banyak kumpulan angka alami (nilai transaksi, populasi, tagihan), <b>angka pertama tidak muncul merata</b>. Angka <b>1</b> muncul jauh lebih sering daripada <b>9</b>.
<br><br>Angka <b>buatan manusia</b> cenderung tersebar terlalu rata — sehingga <b>penyimpangan dari pola Benford</b> bisa menjadi tanda untuk diperiksa lebih dalam.
</div>

<h3>Coba sendiri — lihat pola Benford 👇</h3>
<div data-demo="js-playground">// Hukum Benford: seberapa sering tiap angka muncul sebagai DIGIT PERTAMA
// Rumus: P(d) = log10(1 + 1/d)

console.log("Digit | Harapan Benford | Kalau merata");
console.log("------|-----------------|-------------");

let total = 0;
[1,2,3,4,5,6,7,8,9].forEach(function(d){
  const p = Math.log10(1 + 1 / d) * 100;
  total = total + p;
  console.log("  " + d + "   |     " + p.toFixed(1) + "%       |    11.1%");
});

console.log("------|-----------------|-------------");
console.log("Total |     " + total.toFixed(1) + "%      |   100.0%");
console.log("");
console.log("Angka 1 muncul ~30%, angka 9 hanya ~4,6%.");
console.log("Data yang DIKARANG biasanya tersebar terlalu merata.");</div>

<div class="callout warn">
<b>Penting — jangan salah pakai:</b> Benford adalah <b>alat penyaring</b>, <b>BUKAN bukti kecurangan</b>. Ia juga <b>tidak berlaku</b> untuk semua data (mis. angka dengan batas tetap seperti tinggi badan, atau nomor urut yang ditetapkan). Penyimpangan hanya berarti: <b>"perlu diperiksa lebih lanjut"</b>.
</div>

<div class="callout">
<b>Cara pakai yang benar:</b> gabungkan beberapa sinyal. Satu tanda bahaya bisa punya penjelasan wajar. <b>Beberapa tanda sekaligus</b> — laba naik tanpa kas, piutang membengkak, auditor berganti — barulah pola yang serius.
</div>
`,
          keyPoints: [
            "Manipulasi berjenjang: earnings management (legal tapi menyesatkan) → agresif → fraud (ilegal).",
            "Sinyal terkuat: laba naik tapi arus kas operasi tidak — kas jauh lebih sulit dipalsukan.",
            "Red flag lain: piutang/persediaan tumbuh melebihi penjualan, kebijakan akuntansi berubah menguntungkan, lonjakan akhir periode, pos 'lain-lain' besar, sering ganti auditor, laba terlalu mulus.",
            "Hukum Benford: digit pertama '1' muncul ~30%, '9' hanya ~4,6% pada data alami.",
            "Benford adalah alat penyaring, BUKAN bukti; tidak berlaku untuk semua jenis data.",
            "Gabungkan beberapa sinyal — satu tanda saja bisa punya penjelasan wajar.",
          ],
          practice: [
            { type: "number", q: "Menurut hukum Benford, berapa persen angka '1' muncul sebagai digit pertama? (1 desimal)", answer: 30.1, tol: 0.5, unit: "%", hint: "log10(1 + 1/1) × 100.", solution: "log10(2) = 0,301 → 30,1%." },
            { type: "choice", q: "Laba perusahaan naik 5 tahun berturut-turut, tapi arus kas operasinya stagnan. Kesimpulan yang tepat?", options: ["Perusahaan sangat sehat", "Sinyal kuat untuk diselidiki — laba bisa diatur, kas lebih sulit dipalsukan", "Pasti fraud", "Tidak berarti apa-apa"], answer: 1, hint: "Ini red flag, tapi apakah langsung bukti?", solution: "Ini sinyal kuat yang wajib diselidiki, bukan vonis otomatis." },
          ],
          quiz: [
            {
              q: "Apa red flag paling kuat dalam laporan keuangan?",
              options: [
                "Laba terus naik tapi arus kas operasi tidak ikut naik",
                "Laba naik bersamaan dengan kenaikan arus kas operasi",
                "Perusahaan membagikan dividen secara rutin setiap tahun",
                "Perusahaan mengganti logo dan nama merek dagangnya",
              ],
              answer: 0,
              explain:
                "Laba dapat direkayasa lewat pencatatan; arus kas jauh lebih sulit dimanipulasi.",
            },
            {
              q: "Bagaimana cara benar memakai hukum Benford?",
              options: [
                "Sebagai penyaring awal — penyimpangan berarti perlu diperiksa lebih lanjut",
                "Sebagai bukti hukum yang cukup untuk menyatakan telah terjadi kecurangan",
                "Sebagai pengganti audit menyeluruh pada seluruh transaksi perusahaan",
                "Sebagai rumus untuk menghitung besarnya kerugian akibat kecurangan",
              ],
              answer: 0,
              explain:
                "Benford menandai anomali untuk ditelusuri, bukan membuktikan kecurangan.",
            },
          ],
        },
        {
          id: "acc-aud-5",
          title: "Audit — Apa yang Sebenarnya Dilakukan Auditor",
          duration: "13 menit",
          content: `
<p>Banyak orang salah paham soal audit — termasuk investor. Memahami <b>apa yang audit janjikan dan tidak janjikan</b> akan membuatmu membaca laporan dengan lebih bijak.</p>

<h3>Fundamental: kenapa audit ada?</h3>
<div class="callout">
Laporan keuangan dibuat oleh <b>manajemen</b> — pihak yang justru <b>berkepentingan</b> agar angkanya terlihat bagus. Investor &amp; bank butuh pihak <b>independen</b> untuk memeriksanya. Itulah <b>auditor eksternal</b>.
</div>

<h3>⚠️ Yang paling sering disalahpahami</h3>
<div class="callout warn">
<b>Auditor TIDAK menjamin laporan bebas dari kecurangan, dan TIDAK memeriksa semua transaksi.</b>
<br><br>Yang auditor berikan adalah <b>opini</b>: apakah laporan <b>disajikan secara wajar</b> dalam <b>semua hal yang material</b>, sesuai standar akuntansi. Itu saja — dan itu tetap berharga, asal kamu tahu batasnya.
</div>

<h3>Dua konsep kunci</h3>
<ul>
  <li><b>Materialitas</b> — auditor fokus pada salah saji yang <b>cukup besar</b> untuk memengaruhi keputusan pembaca. Selisih Rp1 juta di perusahaan triliunan tidak akan dikejar.</li>
  <li><b>Sampling</b> — auditor memeriksa <b>contoh</b> transaksi, bukan semuanya. Memeriksa jutaan transaksi satu per satu tidak mungkin &amp; tidak ekonomis.</li>
</ul>

<h3>Empat jenis opini auditor</h3>
<table class="tbl">
  <tr><th>Opini</th><th>Artinya</th><th>Sikapmu</th></tr>
  <tr><td><b>Wajar Tanpa Pengecualian</b></td><td>Bersih — laporan wajar dalam semua hal material</td><td class="ok-cell">Normal &amp; diharapkan</td></tr>
  <tr><td><b>Wajar Dengan Pengecualian</b></td><td>Wajar, <b>kecuali</b> pada hal tertentu</td><td>Baca bagian pengecualiannya!</td></tr>
  <tr><td><b>Tidak Wajar</b></td><td>Laporan <b>menyesatkan</b></td><td>Tanda bahaya besar</td></tr>
  <tr><td><b>Tidak Menyatakan Pendapat</b></td><td>Auditor <b>tak bisa menyimpulkan</b> (bukti tak cukup / dibatasi)</td><td>Sangat mencurigakan</td></tr>
</table>

<div class="callout warn">
<b>Kebiasaan yang berharga:</b> saat membaca laporan tahunan, <b>cari halaman opini auditor</b> — biasanya di depan laporan keuangan. Kalau opininya <b>bukan</b> "wajar tanpa pengecualian", baca alasannya dengan teliti. Banyak investor melewatkan halaman ini padahal isinya krusial.
</div>

<h3>Audit internal vs eksternal</h3>
<table class="tbl">
  <tr><th></th><th>Audit Internal</th><th>Audit Eksternal</th></tr>
  <tr><td>Siapa</td><td>Karyawan perusahaan sendiri</td><td>Kantor akuntan publik independen</td></tr>
  <tr><td>Untuk siapa</td><td>Manajemen &amp; dewan komisaris</td><td>Investor, bank, publik</td></tr>
  <tr><td>Fokus</td><td>Memperbaiki proses &amp; kontrol</td><td>Kewajaran laporan keuangan</td></tr>
</table>

<h3>Kenapa audit kadang gagal?</h3>
<ul>
  <li><b>Kolusi</b> — bila beberapa pihak bersekongkol memalsukan bukti, sampling sangat sulit menangkapnya.</li>
  <li><b>Ketergantungan biaya</b> — auditor dibayar oleh perusahaan yang diauditnya (konflik kepentingan klasik — prinsip <i>ikuti alur uangnya</i> dibahas lagi di modul Investasi).</li>
  <li><b>Keterbatasan waktu &amp; ruang lingkup</b>.</li>
</ul>

<div class="callout warn">
<b>Pengingat:</b> materi ini <b>edukasi</b>. Untuk kebutuhan audit atau dugaan kecurangan yang nyata, libatkan akuntan/auditor berlisensi.
</div>
`,
          keyPoints: [
            "Audit ada karena laporan dibuat manajemen yang berkepentingan — dibutuhkan pihak independen.",
            "Auditor memberi OPINI atas kewajaran laporan; tidak menjamin bebas kecurangan & tidak memeriksa semua transaksi.",
            "Dua konsep kunci: materialitas (fokus salah saji besar) & sampling (memeriksa contoh).",
            "Empat opini: wajar tanpa pengecualian, dengan pengecualian, tidak wajar, tidak menyatakan pendapat.",
            "Biasakan mencari halaman opini auditor di laporan tahunan — bila bukan 'tanpa pengecualian', baca alasannya.",
            "Audit bisa gagal karena kolusi, konflik kepentingan (auditor dibayar kliennya), & keterbatasan ruang lingkup.",
          ],
          practice: [
            { type: "choice", q: "Auditor memberi opini 'Tidak Menyatakan Pendapat'. Apa artinya?", options: ["Laporan sangat baik", "Auditor tidak bisa menyimpulkan karena bukti tak cukup atau dibatasi — sangat mencurigakan", "Perusahaan bangkrut", "Audit belum selesai dijadwalkan"], answer: 1, hint: "Auditor tidak bisa memberi kesimpulan.", solution: "Disclaimer of opinion menandakan hambatan serius dalam audit — patut diwaspadai." },
            { type: "choice", q: "Apakah opini 'wajar tanpa pengecualian' menjamin tidak ada kecurangan sama sekali?", options: ["Ya, dijamin bersih", "Tidak — audit memakai sampling & fokus pada salah saji material", "Ya, karena semua transaksi diperiksa", "Tidak ada hubungannya"], answer: 1, hint: "Ingat konsep materialitas & sampling.", solution: "Audit memberi keyakinan memadai atas kewajaran, bukan jaminan mutlak bebas fraud." },
          ],
          quiz: [
            {
              q: "Apa yang sebenarnya diberikan auditor eksternal?",
              options: [
                "Opini apakah laporan disajikan wajar dalam semua hal yang material",
                "Jaminan bahwa perusahaan bebas dari seluruh kecurangan",
                "Kepastian bahwa perusahaan akan tetap untung tahun depan",
                "Rekomendasi apakah saham perusahaan layak dibeli",
              ],
              answer: 0,
              explain:
                "Auditor menyatakan opini atas kewajaran, bukan jaminan absolut.",
            },
            {
              q: "Apa konflik kepentingan klasik dalam audit eksternal?",
              options: [
                "Auditor dibayar oleh perusahaan yang diauditnya sendiri",
                "Auditor dilarang bertemu langsung dengan manajemen perusahaan",
                "Auditor wajib memiliki saham perusahaan yang sedang diaudit",
                "Auditor ditunjuk dan digaji langsung oleh regulator",
              ],
              answer: 0,
              explain:
                "Ketergantungan biaya pada klien dapat menekan independensi — ikuti alur uangnya.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 9: NILAI WAKTU UANG & DCF ---------------- */
    {
      id: "acc-matematika",
      level: "Matematika",
      title: "Nilai Waktu Uang & DCF",
      summary: "Membaca simbol rumus keuangan, FV & PV, NPV & IRR, anuitas & perpetuitas — lalu memakai semuanya untuk menilai bisnis dengan DCF.",
      lessons: [
        {
          id: "acc-mat-0",
          title: "Membaca Simbol Matematika Keuangan",
          duration: "13 menit",
          content: `
<p>Rumus keuangan penuh singkatan: PV, FV, r, n, CF, PMT. Kelihatannya rumit — padahal itu cuma <b>singkatan kata biasa</b>. Mari kita bongkar satu per satu.</p>

<h3>1. Singkatan yang paling sering muncul</h3>
<table class="tbl">
  <tr><th>Simbol</th><th>Kepanjangan</th><th>Artinya dalam bahasa sehari-hari</th></tr>
  <tr><td><b>PV</b></td><td>Present Value</td><td><b>Nilai sekarang</b> — berapa nilainya hari ini</td></tr>
  <tr><td><b>FV</b></td><td>Future Value</td><td><b>Nilai nanti</b> — berapa nilainya di masa depan</td></tr>
  <tr><td><b>r</b></td><td>rate</td><td><b>Tingkat bunga/return</b> per periode. Ditulis desimal: 10% = <b>0,10</b></td></tr>
  <tr><td><b>n</b></td><td>number</td><td><b>Jumlah periode</b> (biasanya tahun)</td></tr>
  <tr><td><b>CF</b></td><td>Cash Flow</td><td><b>Arus kas</b> — uang masuk/keluar</td></tr>
  <tr><td><b>CFₜ</b></td><td>Cash Flow at t</td><td>Arus kas <b>pada tahun ke-t</b> (angka kecil = penunjuk waktu)</td></tr>
  <tr><td><b>PMT</b></td><td>Payment</td><td><b>Cicilan/setoran tetap</b> tiap periode</td></tr>
  <tr><td><b>g</b></td><td>growth</td><td><b>Tingkat pertumbuhan</b> per periode</td></tr>
</table>

<div class="callout">
<b>Kunci utamanya:</b> huruf-huruf itu <b>bukan sihir</b> — cuma <b>singkatan</b> supaya rumus tidak kepanjangan. "PV" lebih ringkas daripada menulis "nilai sekarang" berulang kali.
</div>

<h3>2. Angka kecil di bawah: CFₜ, a₁, a₂</h3>
<div class="callout">
Angka atau huruf kecil di bawah (disebut <b>subskrip</b>) hanyalah <b>penunjuk urutan</b>.
<ul>
  <li><b>CF₁</b> = arus kas tahun <b>ke-1</b></li>
  <li><b>CF₂</b> = arus kas tahun <b>ke-2</b></li>
  <li><b>CFₜ</b> = arus kas tahun <b>ke-t</b> (t = tahun keberapa pun)</li>
</ul>
Jadi kalau melihat CFₜ, bacalah: <i>"arus kas pada tahun ke-berapa pun yang sedang kita bicarakan"</i>.
</div>

<h3>3. Pangkat: (1+r)ⁿ</h3>
<div class="callout">
<b>(1+r)ⁿ</b> artinya "(1+r) dikalikan dirinya sendiri sebanyak n kali". Inilah <b>rumus bunga majemuk</b>.
<br><br>Contoh dengan r = 10% (0,10) selama 3 tahun:<br>
(1 + 0,10)³ = 1,1 × 1,1 × 1,1 = <b>1,331</b><br>
Artinya uangmu menjadi <b>1,331 kali lipat</b> setelah 3 tahun.
</div>

<h3>Coba sendiri — lihat arti tiap simbol 👇</h3>
<div data-demo="js-playground">// Membongkar rumus FV = PV x (1 + r)^n
const PV = 1000000;  // Present Value  = nilai SEKARANG (Rp1 juta)
const r  = 0.10;     // rate           = bunga 10% per tahun (ditulis 0,10)
const n  = 3;        // number         = jumlah tahun

const faktor = Math.pow(1 + r, n);   // (1 + r) pangkat n
const FV = PV * faktor;              // Future Value = nilai NANTI

console.log("PV (nilai sekarang) = Rp" + PV.toLocaleString("id-ID"));
console.log("r  (bunga)          = " + (r * 100) + "% per tahun");
console.log("n  (jumlah tahun)   = " + n);
console.log("-----");
console.log("Faktor (1+r)^n      = " + faktor.toFixed(3));
console.log("FV (nilai nanti)    = Rp" + Math.round(FV).toLocaleString("id-ID"));
console.log("-----");
console.log("Rumusnya cuma berkata: uang sekarang dikali faktor pertumbuhan.");</div>

<h3>4. Simbol umum lainnya</h3>
<table class="tbl">
  <tr><th>Simbol</th><th>Artinya</th></tr>
  <tr><td><b>Σ</b></td><td>"Jumlahkan semuanya" (sigma). Σ CFₜ = jumlahkan seluruh arus kas</td></tr>
  <tr><td><b>÷</b> atau <b>/</b></td><td>Bagi</td></tr>
  <tr><td><b>%</b></td><td>Per seratus. 25% = 25/100 = 0,25</td></tr>
  <tr><td><b>≈</b></td><td>Kira-kira (tidak persis)</td></tr>
  <tr><td><b>Δ</b></td><td>Perubahan/selisih (delta)</td></tr>
</table>

<div class="callout warn">
<b>Jebakan paling umum:</b> lupa mengubah persen jadi desimal. Dalam rumus, <b>10% harus ditulis 0,10</b> — bukan 10. Kalau hasilnya terasa aneh (kelewat besar), biasanya ini penyebabnya.
</div>

<h3>5. Membaca rumus panjang</h3>
<div class="callout">
<b>PV = CFₜ ÷ (1+r)ᵗ</b><br>
→ <i>"Nilai sekarang = arus kas tahun ke-t, dibagi faktor pertumbuhan selama t tahun"</i><br>
→ Sederhananya: <b>"uang masa depan dikecilkan agar setara nilainya hari ini"</b>.
<br><br>Selalu terjemahkan simbol ke kata dulu — rumusnya akan terasa masuk akal.
</div>
`,
          keyPoints: [
            "PV = nilai sekarang, FV = nilai nanti, r = tingkat bunga (desimal), n = jumlah periode.",
            "CF = arus kas; subskrip (CFₜ) hanyalah penunjuk 'tahun ke-berapa'.",
            "(1+r)ⁿ = faktor bunga majemuk: (1+r) dikali dirinya n kali.",
            "Persen wajib diubah jadi desimal dalam rumus: 10% ditulis 0,10 — kesalahan paling umum.",
            "Σ berarti jumlahkan semuanya; terjemahkan tiap simbol jadi kata sebelum membaca rumus.",
          ],
          practice: [
            { type: "number", q: "Bunga 8% harus ditulis sebagai berapa dalam rumus? (bentuk desimal)", answer: 0.08, tol: 0.005, hint: "Bagi dengan 100.", solution: "8 ÷ 100 = 0,08." },
            { type: "number", q: "Berapa nilai (1 + 0,10)³? (3 desimal)", answer: 1.331, tol: 0.005, hint: "1,1 × 1,1 × 1,1.", solution: "1,1³ = 1,331." },
          ],
          quiz: [
            {
              q: "Apa arti 'PV' dan 'FV'?",
              options: [
                "Present Value (nilai sekarang) & Future Value (nilai nanti)",
                "Profit Value (nilai laba) & Fixed Value (nilai tetap)",
                "Price Value (nilai harga) & Face Value (nilai nominal)",
                "Past Value (nilai lalu) & Final Value (nilai akhir)",
              ],
              answer: 0,
              explain: "PV = nilai hari ini, FV = nilai di masa depan.",
            },
            {
              q: "Bunga 12% ditulis bagaimana di dalam rumus?",
              options: ["12", "0,12", "1,2", "120"],
              answer: 1,
              explain: "Persen harus diubah ke desimal: 12 ÷ 100 = 0,12.",
            },
            {
              q: "Apa arti subskrip pada CFₜ?",
              options: [
                "Penunjuk waktu: arus kas pada tahun ke-t",
                "Pangkat: arus kas dipangkatkan dengan t",
                "Pengali: arus kas dikali tarif pajak t",
                "Satuan: arus kas dalam ribuan rupiah",
              ],
              answer: 0,
              explain: "Angka/huruf kecil di bawah adalah penunjuk urutan periode.",
            },
          ],
        },
        {
          id: "acc-mat-2",
          title: "Nilai Waktu Uang: FV & PV",
          duration: "13 menit",
          content: `
<p>Ini rumus paling fundamental dalam keuangan — dasar dari DCF, kredit, tabungan, dan hampir semua keputusan investasi.</p>

<div data-diagram="timeline" data-events="Sekarang::Rp100 juta|1 tahun::setara Rp110 jt|2 tahun::setara Rp121 jt|3 tahun::setara Rp133 jt" data-caption="Uang hari ini lebih berharga daripada nominal sama di masa depan (asumsi bunga 10%/tahun)"></div>


<h3>Fundamental: uang punya "harga waktu"</h3>
<div class="callout">
Rp100 hari ini <b>lebih berharga</b> daripada Rp100 tahun depan, karena uang hari ini bisa <b>bekerja</b> (ditabung/diinvestasikan) dan bertumbuh. Karena itu setiap perbandingan uang antarwaktu harus disesuaikan.
</div>

<h3>Dua rumus kembar</h3>
<table class="tbl">
  <tr><th>Arah</th><th>Rumus</th><th>Menjawab</th></tr>
  <tr><td><b>Future Value</b> (ke depan)</td><td>FV = PV × (1 + r)<sup>n</sup></td><td>"Uangku sekarang jadi berapa nanti?"</td></tr>
  <tr><td><b>Present Value</b> (ke belakang)</td><td>PV = FV ÷ (1 + r)<sup>n</sup></td><td>"Uang nanti setara berapa sekarang?"</td></tr>
</table>
<p>Keterangan: <b>r</b> = tingkat bunga/diskon per periode, <b>n</b> = jumlah periode.</p>

<h3>Contoh dua arah</h3>
<pre class="code">FV: Rp10 juta, bunga 10%, 3 tahun
    FV = 10.000.000 × (1,1)³ = 10.000.000 × 1,331 = Rp13.310.000

PV: Rp13.310.000 tiga tahun lagi, diskon 10%
    PV = 13.310.000 ÷ 1,331 = Rp10.000.000  (kembali ke asal)</pre>

<h3>Bunga sederhana vs majemuk</h3>
<table class="tbl">
  <tr><th></th><th>Sederhana</th><th>Majemuk</th></tr>
  <tr><td>Rumus</td><td>PV × (1 + r×n)</td><td>PV × (1 + r)<sup>n</sup></td></tr>
  <tr><td>Bunga dihitung dari</td><td>Pokok saja</td><td>Pokok + bunga sebelumnya</td></tr>
  <tr><td>Rp10jt, 10%, 10 thn</td><td>Rp20 juta</td><td><b>Rp25,9 juta</b></td></tr>
</table>

<div class="callout">
<b>Aturan 72 (trik cepat):</b> untuk memperkirakan berapa lama uang menjadi <b>dua kali lipat</b>, bagi <b>72</b> dengan persen bunganya.<br>
Bunga 9% → 72 ÷ 9 = <b>8 tahun</b>. Bunga 6% → 12 tahun.
</div>

<div class="callout warn">
<b>Sisi gelapnya:</b> rumus yang sama bekerja pada <b>utang</b>. Bunga pinjaman 24%/tahun berarti utangmu berlipat ganda dalam sekitar <b>3 tahun</b> (72 ÷ 24) bila tak dibayar. Bunga majemuk adalah teman terbaik penabung — dan musuh terberat pengutang.
</div>
`,
          keyPoints: [
            "FV = PV × (1 + r)^n; PV = FV ÷ (1 + r)^n — dua arah dari konsep yang sama.",
            "Bunga majemuk jauh melampaui bunga sederhana karena bunga ikut berbunga.",
            "Aturan 72: waktu berlipat ganda ≈ 72 ÷ persen bunga.",
            "Rumus yang sama berlaku untuk utang — bunga tinggi melipatgandakan utang dengan cepat.",
          ],
          practice: [
            { type: "number", q: "Rp10.000.000 dibungakan 10% selama 3 tahun (majemuk). Berapa nilainya nanti? (Rupiah)", answer: 13310000, tol: 10000, hint: "FV = 10.000.000 × (1,1)³.", solution: "10.000.000 × 1,331 = Rp13.310.000." },
            { type: "number", q: "Dengan aturan 72, berapa tahun uang berlipat ganda pada bunga 9%?", answer: 8, tol: 0.3, unit: "tahun", hint: "72 ÷ 9.", solution: "72 ÷ 9 = 8 tahun." },
          ],
          quiz: [
            {
              q: "Rumus Present Value (nilai sekarang)?",
              options: [
                "PV = FV × (1 + r)^n",
                "PV = FV ÷ (1 + r)^n",
                "PV = FV − r",
                "PV = FV × n",
              ],
              answer: 1,
              explain: "Untuk membawa uang masa depan ke nilai kini, kita membaginya (mendiskon).",
            },
            {
              q: "Kenapa bunga majemuk jauh melampaui bunga sederhana dalam jangka panjang?",
              options: [
                "Bunga ikut berbunga, karena dihitung dari pokok ditambah bunga sebelumnya",
                "Bunga majemuk selalu memakai tarif lebih tinggi dari bunga sederhana",
                "Bunga majemuk dibayarkan di muka sehingga bisa langsung diinvestasikan",
                "Bunga majemuk tidak dikenai pajak sehingga hasil bersihnya lebih besar",
              ],
              answer: 0,
              explain: "Efek majemuk membuat pertumbuhan makin cepat seiring waktu.",
            },
          ],
        },
        {
          id: "acc-mat-3",
          title: "NPV & IRR — Matematika Keputusan Investasi",
          duration: "13 menit",
          content: `
<p>Bagaimana memutuskan sebuah proyek layak dijalankan? Ini rumus yang dipakai profesional keuangan.</p>

<h3>NPV (Net Present Value)</h3>
<div class="callout">
<b>NPV</b> = jumlah dari semua arus kas masa depan yang sudah <b>didiskon</b>, dikurangi <b>investasi awal</b>.<br><br>
<b>NPV = Σ [ CF<sub>t</sub> ÷ (1 + r)<sup>t</sup> ] − Investasi Awal</b><br><br>
Keterangan: <b>CF<sub>t</sub></b> = arus kas pada tahun ke-t, <b>r</b> = tingkat diskon, <b>t</b> = tahun.
</div>

<table class="tbl">
  <tr><th>Hasil</th><th>Artinya</th><th>Keputusan</th></tr>
  <tr><td><b>NPV positif</b></td><td>Proyek menghasilkan lebih dari biaya modalnya</td><td class="ok-cell">Layak</td></tr>
  <tr><td><b>NPV nol</b></td><td>Impas terhadap biaya modal</td><td>Netral</td></tr>
  <tr><td><b>NPV negatif</b></td><td>Menghancurkan nilai</td><td>Tolak</td></tr>
</table>

<h3>Coba sendiri — hitung NPV 👇</h3>
<div data-demo="js-playground">// NPV: apakah proyek ini layak?
const investasiAwal = 100000000;   // Rp100 juta keluar sekarang
const arusKas = [30000000, 40000000, 50000000, 30000000];  // tahun 1-4
const diskon = 0.10;               // 10% per tahun

let npv = 0 - investasiAwal;
arusKas.forEach(function(cf, i){
  const tahun = i + 1;
  const nilaiKini = cf / Math.pow(1 + diskon, tahun);
  npv = npv + nilaiKini;
  console.log("Tahun " + tahun + ": Rp" + cf.toLocaleString("id-ID") + " -> nilai kini Rp" + Math.round(nilaiKini).toLocaleString("id-ID"));
});

console.log("-----");
console.log("NPV = Rp" + Math.round(npv).toLocaleString("id-ID"));
if (npv > 0) {
  console.log("NPV POSITIF -> proyek menambah nilai.");
} else {
  console.log("NPV NEGATIF -> proyek menghancurkan nilai.");
}
console.log("Coba naikkan diskon jadi 0.25 lalu jalankan lagi.");</div>

<h3>IRR (Internal Rate of Return)</h3>
<div class="callout">
<b>IRR</b> = tingkat diskon <b>r</b> yang membuat <b>NPV = 0</b>. Ia menjawab: <i>"proyek ini sebenarnya memberi imbal hasil berapa persen per tahun?"</i><br><br>
Aturannya: <b>IRR lebih tinggi dari biaya modal → layak.</b>
</div>
<p>IRR tidak bisa dihitung langsung dengan satu rumus — biasanya dicari lewat <b>coba-coba</b> (atau otomatis oleh spreadsheet).</p>

<div class="callout warn">
<b>Kelemahan IRR:</b> bisa menyesatkan saat membandingkan proyek berukuran sangat berbeda. Proyek kecil ber-IRR 50% (untung Rp5 juta) kalah bermanfaat dibanding proyek besar ber-IRR 20% (untung Rp500 juta). <b>Untuk memilih, NPV lebih dapat diandalkan.</b>
</div>
`,
          keyPoints: [
            "NPV = Σ [CFt ÷ (1+r)^t] − investasi awal; NPV positif = layak.",
            "IRR = tingkat diskon yang membuat NPV = 0; layak bila IRR di atas biaya modal.",
            "IRR dicari lewat coba-coba, tidak dengan satu rumus langsung.",
            "IRR bisa menyesatkan pada proyek berbeda ukuran — NPV lebih andal untuk memilih.",
          ],
          practice: [
            { type: "number", q: "Arus kas Rp110 juta diterima 1 tahun lagi, diskon 10%. Berapa nilai kininya? (Rupiah)", answer: 100000000, tol: 100000, hint: "PV = 110.000.000 ÷ 1,1.", solution: "110.000.000 ÷ 1,1 = Rp100.000.000." },
            { type: "choice", q: "Sebuah proyek punya NPV = −Rp20 juta. Keputusan yang tepat?", options: ["Jalankan, karena IRR pasti tinggi", "Tolak — proyek menghancurkan nilai", "Jalankan setengahnya", "Tunggu tanpa alasan"], answer: 1, hint: "Apa arti NPV negatif?", solution: "NPV negatif berarti hasilnya tak menutupi biaya modal → tolak." },
          ],
          quiz: [
            {
              q: "Apa arti NPV positif?",
              options: [
                "Proyek menghasilkan lebih dari biaya modalnya, sehingga layak dijalankan",
                "Proyek pasti balik modal dalam waktu kurang dari satu tahun",
                "Proyek menghasilkan laba akuntansi pada tahun pertamanya",
                "Arus kas proyek tidak pernah bernilai negatif pada tahun mana pun",
              ],
              answer: 0,
              explain: "NPV positif berarti nilai kini arus kas melebihi investasi awal.",
            },
            {
              q: "Apa definisi IRR?",
              options: [
                "Tingkat diskon yang membuat NPV sama dengan nol",
                "Tingkat bunga pinjaman yang dipakai membiayai proyek",
                "Rata-rata imbal hasil tahunan tanpa memperhitungkan waktu",
                "Tingkat inflasi yang diperkirakan selama umur proyek",
              ],
              answer: 0,
              explain: "IRR adalah imbal hasil implisit sebuah proyek.",
            },
          ],
        },
        {
          id: "acc-mat-4",
          title: "Anuitas, Perpetuitas & Terminal Value",
          duration: "13 menit",
          content: `
<p>Rumus penutup: cara menghitung nilai dari <b>arus kas berulang</b> — dipakai untuk cicilan, pensiun, obligasi, dan bagian terpenting DCF.</p>

<h3>Anuitas — pembayaran tetap selama n periode</h3>
<div class="callout">
<b>PV Anuitas = PMT × [ 1 − (1 + r)<sup>−n</sup> ] ÷ r</b><br><br>
Keterangan: <b>PMT</b> = pembayaran tiap periode, <b>r</b> = bunga per periode, <b>n</b> = jumlah periode.
</div>
<p><b>Kegunaan sehari-hari:</b> rumus inilah yang dipakai bank untuk menghitung <b>cicilan KPR</b> atau kredit kendaraan — dan yang bisa kamu pakai untuk mengecek apakah cicilan yang ditawarkan masuk akal.</p>

<h3>Perpetuitas — pembayaran tetap SELAMANYA</h3>
<div class="callout">
<b>PV Perpetuitas = PMT ÷ r</b><br><br>
Terlihat mengejutkan: arus kas <b>tak terbatas</b> ternyata punya nilai <b>terbatas</b>! Sebabnya, uang yang sangat jauh di masa depan didiskon sampai nilainya mendekati nol.
</div>
<pre class="code">Contoh: Rp10 juta per tahun selamanya, diskon 10%
        PV = 10.000.000 ÷ 0,10 = Rp100.000.000</pre>

<h3>Gordon Growth — perpetuitas yang bertumbuh</h3>
<div class="callout">
Kalau arus kasnya <b>tumbuh</b> sebesar <b>g</b> per tahun:<br><br>
<b>PV = CF × (1 + g) ÷ (r − g)</b><br><br>
Inilah rumus <b>Terminal Value</b> pada DCF — cara menghitung nilai bisnis <b>setelah</b> periode ramalan rinci berakhir.
</div>

<div class="callout warn">
<b>Bahaya terbesar dalam valuasi:</b> perhatikan penyebut <b>(r − g)</b>. Kalau <b>g</b> mendekati <b>r</b>, penyebutnya mendekati nol dan nilainya <b>meledak jadi tak masuk akal</b>. Dan kalau g lebih besar dari r, rumusnya rusak total.
<br><br><b>Aturan disiplin:</b> pertumbuhan abadi (<b>g</b>) tidak boleh melebihi pertumbuhan ekonomi jangka panjang — tak ada perusahaan yang bisa tumbuh lebih cepat dari dunia <b>selamanya</b>. Banyak valuasi terlalu optimistis lahir dari kesalahan di titik ini.
</div>
`,
          keyPoints: [
            "PV Anuitas = PMT × [1 − (1+r)^−n] ÷ r — dipakai menghitung cicilan KPR/kredit.",
            "PV Perpetuitas = PMT ÷ r — arus kas tak terbatas punya nilai terbatas karena didiskon.",
            "Gordon Growth: PV = CF × (1+g) ÷ (r−g) — dasar Terminal Value pada DCF.",
            "Bahaya: bila g mendekati r, nilainya meledak; g tak boleh melebihi pertumbuhan ekonomi jangka panjang.",
          ],
          practice: [
            { type: "number", q: "Arus kas Rp10 juta per tahun selamanya, diskon 10%. Berapa nilai sekarangnya? (Rupiah)", answer: 100000000, tol: 100000, hint: "PV = PMT ÷ r = 10.000.000 ÷ 0,10.", solution: "10.000.000 ÷ 0,1 = Rp100.000.000." },
            { type: "number", q: "Arus kas Rp10 juta, tumbuh 5%/tahun, diskon 10%. Berapa nilainya? (rumus Gordon, Rupiah)", answer: 210000000, tol: 2000000, hint: "PV = CF × (1+g) ÷ (r−g) = 10jt × 1,05 ÷ 0,05.", solution: "10.500.000 ÷ 0,05 = Rp210.000.000." },
          ],
          quiz: [
            {
              q: "Kenapa arus kas 'selamanya' bisa punya nilai terbatas?",
              options: [
                "Uang yang sangat jauh di masa depan didiskon hingga nilainya mendekati nol",
                "Arus kas selamanya dibatasi hukum hingga maksimal lima puluh tahun",
                "Arus kas selalu berhenti tumbuh setelah beberapa tahun pertama",
                "Rumus keuangan tidak mampu menghitung jumlah yang tak terhingga",
              ],
              answer: 0,
              explain: "Diskonto membuat kontribusi arus kas jauh menjadi sangat kecil.",
            },
            {
              q: "Apa bahaya terbesar rumus Gordon Growth PV = CF(1+g) ÷ (r−g)?",
              options: [
                "Bila g mendekati r, penyebutnya mendekati nol & nilainya meledak",
                "Bila g negatif, rumusnya tidak bisa dipakai sama sekali",
                "Bila r terlalu besar, hasilnya selalu bernilai negatif",
                "Bila CF kecil, hasilnya selalu lebih besar dari harga pasar",
              ],
              answer: 0,
              explain:
                "Asumsi pertumbuhan abadi yang terlalu tinggi menghasilkan valuasi menyesatkan.",
            },
          ],
        },
        {
          id: "acc-deep-3",
          title: "DCF — Menilai Bisnis dari Arus Kas Masa Depan",
          duration: "12 menit",
          content: `
<p>Bagaimana menentukan "harga wajar" sebuah bisnis? Salah satu metode paling dihormati: <b>Discounted Cash Flow (DCF)</b>. Kita bangun dari nol.</p>

<div data-diagram="flow" data-steps="Ramalan Arus Kas|Diskon ke Nilai Kini|Jumlahkan|Nilai Wajar" data-caption="Empat langkah DCF"></div>


<h3>Fundamental 1: bisnis bernilai sebesar kas masa depannya</h3>
<p>Sebuah bisnis pada dasarnya adalah <b>mesin penghasil kas</b>. Nilainya = semua uang yang akan ia hasilkan di masa depan. Masuk akal, kan?</p>

<h3>Fundamental 2: uang sekarang lebih berharga dari uang nanti</h3>
<div class="callout">
<b>Nilai waktu uang:</b> Rp100 hari ini lebih berharga daripada Rp100 tahun depan — karena Rp100 hari ini bisa kamu tabung/investasikan dan bertumbuh. Jadi uang masa depan harus "<b>didiskon</b>" (dikurangi) untuk mendapat nilainya <b>hari ini</b>.
</div>
<p>Contoh: jika bunga 10%, Rp110 tahun depan setara dengan <b>Rp100</b> hari ini (karena Rp100 × 1,1 = Rp110). Rp100 itu disebut <b>Present Value</b> (nilai sekarang).</p>

<h3>Cara kerja DCF (intuisi)</h3>
<ol>
  <li>Perkirakan arus kas bisnis untuk beberapa tahun ke depan.</li>
  <li><b>Diskon</b> tiap arus kas ke nilai sekarang (uang makin jauh, makin didiskon).</li>
  <li>Jumlahkan semuanya → itulah <b>nilai wajar</b> bisnis menurut DCF.</li>
</ol>

<h3>"Arus kas" yang mana? Jawabannya: FCF</h3>
<div class="callout">
Selama ini kita menyebut "arus kas" secara umum. Sekarang kita sebut tepatnya: yang didiskon dalam DCF adalah <b>Free Cash Flow</b> — yang sudah kamu pelajari di pelajaran <b>Free Cash Flow</b>.<br><br>
<b>Kenapa FCF, bukan laba bersih?</b> Karena laba bersih mengandung pos non-tunai (penyusutan) dan <b>belum</b> memperhitungkan uang yang harus dikeluarkan untuk menjaga aset (CapEx). Yang benar-benar bisa dinikmati pemilik adalah <b>kas yang tersisa setelah semua itu</b> — dan itulah FCF.
</div>

<div class="callout warn">
<b>Inilah mengapa dua pelajaran itu saling mengunci:</b><br>
• <b>FCF</b> menjawab: <i>berapa kas yang benar-benar dihasilkan bisnis tiap tahun?</i><br>
• <b>DCF</b> menjawab: <i>berapa nilai seluruh FCF masa depan itu, dinyatakan dalam rupiah hari ini?</i><br><br>
Tanpa FCF, DCF tidak punya bahan. Tanpa DCF, FCF hanya angka tahunan tanpa kesimpulan nilai.
</div>

<h3>Tiga bahan yang menentukan hasilnya</h3>
<table class="tbl">
  <tr><th>Bahan</th><th>Dari mana</th><th>Kalau meleset</th></tr>
  <tr><td><b>FCF tahun-tahun ke depan</b></td><td>Ramalan pertumbuhan</td><td>Salah sedikit di awal, salah jauh di akhir</td></tr>
  <tr><td><b>Tingkat diskon</b></td><td><b>Biaya modal (WACC)</b> — dipelajari di modul Kualitas Bisnis</td><td>Beda 1% bisa mengubah nilai puluhan persen</td></tr>
  <tr><td><b>Terminal value</b></td><td>Nilai bisnis setelah periode ramalan</td><td>Sering menyumbang <b>lebih dari separuh</b> hasil akhir</td></tr>
</table>

<div class="callout warn">
<b>Hati-hati:</b> DCF hanya sebaik <b>asumsinya</b> ("sampah masuk, sampah keluar"). Ramalan arus kas & tingkat diskon yang meleset menghasilkan nilai yang salah. Ini alat, bukan ramalan pasti. Edukasi, bukan saran investasi.<br><br>
<b>Cara memakainya yang jujur:</b> jangan mencari satu angka "nilai wajar". Hitung <b>tiga skenario</b> (buruk / dasar / baik), lalu lihat rentangnya. Kalau harga pasar berada jauh di bawah <b>skenario buruk</b> sekalipun, barulah itu temuan yang menarik.
</div>
`,
          keyPoints: [
            "DCF menilai bisnis sebagai total kas yang akan dihasilkannya di masa depan.",
            "Nilai waktu uang: uang sekarang lebih berharga dari uang nanti; uang masa depan harus didiskon.",
            "Langkah DCF: perkirakan arus kas masa depan → diskon ke nilai sekarang → jumlahkan.",
            "DCF hanya sebaik asumsinya (ramalan & tingkat diskon); bukan ramalan pasti.",
          ],
          practice: [
            { type: "number", q: "Jika bunga/tingkat diskon 10%, berapa nilai sekarang (present value) dari Rp110 yang diterima 1 tahun lagi? (Rupiah)", answer: 100, tol: 0.5, hint: "Nilai sekarang × 1,1 = 110.", solution: "110 ÷ 1,1 = Rp100." },
          ],
          quiz: [
            {
              q: "Apa prinsip 'nilai waktu uang'?",
              options: [
                "Uang hari ini lebih berharga daripada jumlah yang sama di masa depan",
                "Uang di masa depan lebih berharga karena nilainya terus bertambah",
                "Nilai uang selalu tetap selama jumlah nominalnya tidak berubah",
                "Uang hanya punya nilai waktu bila disimpan di bank",
              ],
              answer: 0,
              explain: "Uang hari ini bisa diinvestasikan & bertumbuh, jadi lebih berharga.",
            },
            {
              q: "Apa dasar penilaian DCF?",
              options: [
                "Arus kas masa depan yang didiskon ke nilai sekarang lalu dijumlahkan",
                "Harga saham rata-rata perusahaan sejenis dalam satu industri",
                "Nilai buku seluruh aset dikurangi seluruh kewajiban perusahaan",
                "Laba bersih tahun terakhir dikalikan rata-rata P/E industri",
              ],
              answer: 0,
              explain: "DCF menjumlahkan arus kas masa depan yang telah didiskon menjadi nilai kini.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 10: VALUASI RELATIF & MULTIPLES ---------------- */
    {
      id: "acc-lanjutan",
      level: "Lanjutan",
      title: "Valuasi Relatif & Multiples",
      summary: "Menilai harga lewat perbandingan: PBV & nilai buku, PER & PEG, EV/EBITDA, dan jebakan valuasi relatif.",
      lessons: [
        {
          id: "acc-adv-1",
          title: "PBV & Nilai Buku (Book Value)",
          duration: "11 menit",
          content: `
<p><b>PBV (Price to Book Value)</b> membandingkan harga saham dengan <b>nilai buku</b> perusahaan — salah satu rasio favorit para <i>value investor</i>.</p>

<div data-diagram="flow" data-steps="Harga Saham|÷ Nilai Buku per Saham|= PBV" data-caption="Menghitung PBV"></div>


<div class="callout">
<b>Nilai Buku (Book Value)</b> = Total Ekuitas (Aset − Kewajiban). "Nilai bersih" perusahaan menurut catatan.<br>
<b>Nilai Buku per Saham</b> = Ekuitas ÷ Jumlah saham.<br>
<b>PBV</b> = Harga Saham ÷ Nilai Buku per Saham.
</div>

<h3>Cara membacanya</h3>
<table class="tbl">
  <tr><th>PBV</th><th>Arti</th></tr>
  <tr><td><b>= 1</b></td><td>Harga persis sama dengan nilai buku</td></tr>
  <tr><td><b>&lt; 1</b></td><td>Dihargai di bawah nilai buku — bisa "murah" (peluang) ATAU ada masalah</td></tr>
  <tr><td><b>&gt; 1</b></td><td>Premium — pasar yakin perusahaan akan tumbuh / punya aset tak berwujud (merek)</td></tr>
</table>

<h3>💥 Dampak & kegunaan</h3>
<ul>
  <li>Paling berguna untuk perusahaan <b>padat aset</b> (bank, properti, keuangan).</li>
  <li>PBV rendah menarik value investor — <b>tapi selidiki dulu</b> kenapa murah (aset bermasalah?).</li>
  <li>Kurang cocok untuk perusahaan teknologi yang nilainya banyak di aset tak berwujud.</li>
</ul>
`,
          keyPoints: [
            "Nilai Buku = Total Ekuitas; Nilai Buku per Saham = Ekuitas ÷ jumlah saham.",
            "PBV = Harga Saham ÷ Nilai Buku per Saham.",
            "PBV < 1 bisa berarti murah atau bermasalah; PBV > 1 mencerminkan ekspektasi/aset tak berwujud.",
            "Paling relevan untuk perusahaan padat aset (bank, properti); kurang cocok untuk teknologi.",
          ],
          practice: [
            { type: "number", q: "Harga saham Rp1.500, nilai buku per saham Rp1.000. Berapa PBV-nya?", answer: 1.5, tol: 0.05, hint: "PBV = Harga ÷ Nilai Buku per Saham.", solution: "1.500 ÷ 1.000 = 1,5." },
            { type: "number", q: "Ekuitas Rp200 miliar, jumlah saham 100 juta lembar. Berapa nilai buku per saham? (Rupiah)", answer: 2000, tol: 1, hint: "Nilai Buku per Saham = Ekuitas ÷ jumlah saham.", solution: "200.000.000.000 ÷ 100.000.000 = Rp2.000." },
          ],
          quiz: [
            {
              q: "PBV di bawah 1 berarti?",
              options: [
                "Saham dihargai di bawah nilai bukunya — bisa murah, bisa bermasalah",
                "Saham dipastikan murah dan layak segera dibeli oleh investor",
                "Perusahaan sudah pasti merugi pada tahun buku terakhirnya",
                "Utang perusahaan lebih besar daripada seluruh asetnya",
              ],
              answer: 0,
              explain:
                "PBV < 1 = harga di bawah nilai buku; perlu diselidiki apakah peluang atau masalah.",
            },
            {
              q: "PBV paling berguna untuk jenis perusahaan?",
              options: [
                "Perusahaan padat aset seperti bank dan properti",
                "Perusahaan teknologi yang asetnya berupa perangkat lunak",
                "Perusahaan rintisan yang belum menghasilkan laba",
                "Perusahaan jasa konsultan yang asetnya sangat sedikit",
              ],
              answer: 0,
              explain:
                "PBV relevan saat nilai banyak terletak pada aset nyata di neraca.",
            },
          ],
        },
        {
          id: "acc-adv-2",
          title: "PER, PEG & Valuasi Pertumbuhan",
          duration: "11 menit",
          content: `
<p><b>PER (Price to Earnings Ratio)</b> = Harga ÷ EPS — sudah kita kenal. Masalahnya: PER <b>tidak memperhitungkan pertumbuhan</b>. Saham tumbuh cepat "pantas" lebih mahal daripada yang stagnan.</p>

<div data-diagram="bar" data-bars="PER 10 / tumbuh 5%:2|PER 20 / tumbuh 20%:1|PER 30 / tumbuh 45%:0.67" data-unit=" PEG" data-caption="PER tinggi belum tentu mahal — PEG memperhitungkan pertumbuhannya. Makin kecil PEG, makin menarik."></div>


<div class="callout">
<b>PEG (Price/Earnings to Growth)</b> = PER ÷ Pertumbuhan laba tahunan (%). Ini menyeimbangkan harga dengan kecepatan pertumbuhan.
</div>

<h3>Membaca PEG</h3>
<table class="tbl">
  <tr><th>PEG</th><th>Arti kasar</th></tr>
  <tr><td><b>≈ 1</b></td><td>Wajar — harga sepadan dengan pertumbuhan</td></tr>
  <tr><td><b>&lt; 1</b></td><td>Relatif murah dibanding pertumbuhannya (menarik)</td></tr>
  <tr><td><b>&gt; 1</b></td><td>Relatif mahal dibanding pertumbuhannya</td></tr>
</table>

<h3>Contoh</h3>
<p>Saham A: PER 20, tumbuh 20%/tahun → PEG = 20 ÷ 20 = <b>1,0</b> (wajar). Saham B: PER 30, tumbuh 15% → PEG = 2,0 (relatif mahal). Meski PER B lebih tinggi, PEG mengungkap A lebih menarik untuk pertumbuhannya.</p>

<div class="callout warn">
<b>Hati-hati:</b> PEG bergantung pada <b>ramalan pertumbuhan</b> yang bisa meleset. Gunakan sebagai satu alat, bukan penentu tunggal. Ini edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "PER mengabaikan pertumbuhan; PEG memperbaikinya.",
            "PEG = PER ÷ pertumbuhan laba tahunan (%).",
            "PEG ≈ 1 wajar; < 1 relatif murah; > 1 relatif mahal terhadap pertumbuhan.",
            "PEG bergantung pada ramalan pertumbuhan yang bisa meleset — bukan penentu tunggal.",
          ],
          practice: [
            { type: "number", q: "PER 20, pertumbuhan laba 20%/tahun. Berapa PEG-nya?", answer: 1, tol: 0.05, hint: "PEG = PER ÷ pertumbuhan (%).", solution: "20 ÷ 20 = 1,0 (wajar)." },
            { type: "number", q: "PER 30, pertumbuhan laba 15%/tahun. Berapa PEG-nya?", answer: 2, tol: 0.05, hint: "PEG = PER ÷ pertumbuhan (%).", solution: "30 ÷ 15 = 2,0 (relatif mahal)." },
          ],
          quiz: [
            {
              q: "Apa keunggulan PEG dibanding PER?",
              options: [
                "Ikut memperhitungkan laju pertumbuhan laba, bukan hanya harga vs laba",
                "Ikut memperhitungkan besarnya utang perusahaan terhadap ekuitas",
                "Bisa dipakai untuk perusahaan yang labanya sedang negatif",
                "Tidak memerlukan data laba sehingga lebih mudah dihitung",
              ],
              answer: 0,
              explain:
                "PEG menyesuaikan PER dengan tingkat pertumbuhan, menilai lebih adil.",
            },
            {
              q: "PEG = 0,7 secara kasar menandakan?",
              options: [
                "Relatif murah dibanding laju pertumbuhan labanya",
                "Relatif mahal dibanding laju pertumbuhan labanya",
                "Pertumbuhan laba perusahaan hanya 0,7% per tahun",
                "Perusahaan sedang merugi sehingga PEG-nya di bawah satu",
              ],
              answer: 0,
              explain: "PEG < 1 mengindikasikan harga murah relatif terhadap pertumbuhan.",
            },
          ],
        },
        {
          id: "acc-adv-3",
          title: "Enterprise Value & EV/EBITDA",
          duration: "11 menit",
          content: `
<p>Berapa "harga sesungguhnya" untuk mengambil alih seluruh perusahaan? Bukan sekadar harga sahamnya — melainkan <b>Enterprise Value</b>.</p>

<div data-diagram="pipeline" data-stages="Kapitalisasi pasar::harga seluruh saham|+ Total utang::kamu ikut mewarisinya|− Kas::kamu ikut mendapatkannya|= Enterprise Value::harga ambil alih utuh" data-caption="Kenapa utang ditambah dan kas dikurangi"></div>


<div class="callout">
<b>Enterprise Value (EV)</b> = Kapitalisasi Pasar + Total Utang − Kas.<br>
<i>Kenapa + utang & − kas? Kalau kamu membeli perusahaan, kamu mewarisi utangnya (menambah biaya) tapi juga mendapat kasnya (mengurangi biaya).</i>
</div>

<h3>EV/EBITDA</h3>
<p><b>EV/EBITDA</b> membandingkan nilai perusahaan dengan kas operasionalnya (EBITDA). Keunggulannya: <b>netral terhadap struktur modal & pajak</b>, sehingga adil membandingkan perusahaan dengan tingkat utang atau negara berbeda.</p>

<h3>Kapan lebih baik dari PER?</h3>
<ul>
  <li>Saat perusahaan punya <b>utang besar</b> (PER hanya melihat ekuitas).</li>
  <li>Saat membandingkan lintas negara (pajak berbeda) atau perusahaan padat aset.</li>
  <li>Banyak dipakai dalam <b>akuisisi & merger (M&A)</b>.</li>
</ul>

<div class="callout">
<b>Intinya:</b> harga saham hanya cerita ekuitas; EV menceritakan <b>seluruh</b> nilai perusahaan (ekuitas + utang − kas). Untuk menilai bisnis secara utuh, EV lebih lengkap.
</div>
`,
          keyPoints: [
            "Enterprise Value = Kapitalisasi Pasar + Total Utang − Kas (harga mengambil alih perusahaan utuh).",
            "EV/EBITDA menilai perusahaan relatif terhadap kas operasionalnya, netral struktur modal & pajak.",
            "Lebih baik dari PER saat ada utang besar atau membandingkan lintas negara; umum di M&A.",
          ],
          quiz: [
            {
              q: "Rumus Enterprise Value?",
              options: [
                "Kapitalisasi Pasar + Total Utang − Kas",
                "Kapitalisasi Pasar − Total Utang + Kas",
                "Total Aset − Total Kewajiban",
                "Kapitalisasi Pasar + Kas − Piutang",
              ],
              answer: 0,
              explain:
                "EV memasukkan utang (yang diwarisi) dan mengurangi kas (yang didapat).",
            },
            {
              q: "Kelebihan EV/EBITDA dibanding PER?",
              options: [
                "Netral terhadap struktur modal dan pajak, adil untuk perusahaan beda utang",
                "Selalu menghasilkan angka yang lebih kecil sehingga lebih mudah dibaca",
                "Hanya memerlukan harga saham tanpa data laporan keuangan apa pun",
                "Memperhitungkan pertumbuhan laba masa depan secara otomatis",
              ],
              answer: 0,
              explain:
                "EV/EBITDA memperhitungkan utang & mengabaikan efek pajak/pendanaan.",
            },
          ],
        },
        {
          id: "acc-adv-5",
          title: "Valuasi Relatif & Multiples",
          duration: "14 menit",
          content: `
<p>Kamu sudah belajar PER, PBV, PEG, dan EV/EBITDA satu per satu. Sekarang kita satukan: semuanya adalah <b>multiples</b>, dan cara memakainya punya aturan main sendiri yang disebut <b>valuasi relatif</b>.</p>

<div data-diagram="bar" data-bars="Pesaing A:15|Pesaing B:16|Pesaing C:16|Rata-rata industri:15.7|Perusahaan target:12" data-unit="×" data-caption="Angka P/E baru bermakna setelah disandingkan dengan pembandingnya"></div>


<h3>1. Apa itu "multiple"?</h3>
<p><b>Multiple = kelipatan.</b> Ini rasio antara <b>harga</b> dengan suatu <b>ukuran kinerja</b> perusahaan.</p>

<div class="callout">
🏪 <b>Analogi warung.</b> Ada warung yang labanya <b>Rp100 juta/tahun</b>. Penjualnya minta <b>Rp1,5 miliar</b>.<br><br>
Multiple-nya = 1.500 ÷ 100 = <b>15×</b><br><br>
Artinya kamu membayar <b>15 kali lipat laba setahun</b>. Cara cepat membacanya: <i>"kalau labanya tetap segitu, butuh ±15 tahun untuk balik modal."</i>
</div>

<p>Itulah <b>P/E multiple</b> (Price-to-Earnings) — yang di Indonesia biasa disebut <b>PER</b>. Rumusnya: Harga saham ÷ Laba per saham (EPS).</p>

<h3>2. Kenapa disebut "multiples" (jamak)?</h3>
<p>Karena P/E hanya salah satu. Ada banyak jenis, dan masing-masing punya situasi terbaiknya:</p>

<table>
<tr><th>Multiple</th><th>Rumus</th><th>Paling cocok saat</th></tr>
<tr><td><b>P/E</b> (PER)</td><td>Harga ÷ Laba per saham</td><td>Perusahaan sudah <b>untung stabil</b></td></tr>
<tr><td><b>PBV</b> (P/B)</td><td>Harga ÷ Nilai buku per saham</td><td>Perusahaan <b>padat aset</b> (bank, properti)</td></tr>
<tr><td><b>P/S</b></td><td>Harga ÷ Pendapatan per saham</td><td>Perusahaan <b>belum untung</b> (startup)</td></tr>
<tr><td><b>EV/EBITDA</b></td><td>Enterprise Value ÷ EBITDA</td><td>Ada <b>utang besar</b> / bandingkan lintas negara</td></tr>
<tr><td><b>PEG</b></td><td>PER ÷ pertumbuhan laba (%)</td><td>Perusahaan <b>tumbuh cepat</b></td></tr>
</table>

<div class="callout warn">
<b>Aturan penting:</b> pilih multiple yang <b>penyebutnya masuk akal</b> untuk perusahaan itu. Menghitung P/E untuk perusahaan yang sedang rugi itu sia-sia — labanya negatif, rasionya tak bisa dibaca.
</div>

<h3>3. Inti metodenya: membandingkan</h3>
<p>Multiple <b>tidak berarti apa-apa kalau berdiri sendiri</b>. "P/E-nya 15" itu belum informasi — 15 itu mahal atau murah? Jawabannya baru muncul setelah dibandingkan dengan tiga hal:</p>
<ol>
  <li><b>Pesaing sejenis</b> (peer comparison) — perusahaan lain di industri yang sama.</li>
  <li><b>Rata-rata industri</b> — norma di sektor itu.</li>
  <li><b>Sejarahnya sendiri</b> — biasanya perusahaan ini diperdagangkan di P/E berapa?</li>
</ol>

<p>Inilah yang disebut <b>valuasi relatif</b>: menilai sesuatu dengan membandingkannya ke pembanding, bukan menghitung nilainya dari nol.</p>

<table>
<tr><th></th><th>Multiples (relatif)</th><th>DCF (absolut)</th></tr>
<tr><td><b>Cara kerja</b></td><td>Bandingkan dengan pasar</td><td>Hitung nilai dari arus kas, dari nol</td></tr>
<tr><td><b>Kecepatan</b></td><td>Cepat & mudah</td><td>Rumit, butuh banyak asumsi</td></tr>
<tr><td><b>Kelemahan</b></td><td>Kalau <b>seluruh pasar</b> sedang mahal, semuanya terlihat "wajar"</td><td>Hasilnya sangat bergantung asumsi</td></tr>
</table>

<div class="callout">
<b>Analogi rumah.</b> Valuasi relatif = "rumah sebelah yang seukuran laku Rp800 juta, jadi rumah ini kira-kira segitu." DCF = "rumah ini bisa disewakan Rp5 juta/bulan selama 20 tahun, mari hitung nilainya." Keduanya berguna — <b>pakai berdua</b> agar saling mengoreksi.
</div>

<h3>4. Coba sendiri: bandingkan dengan pesaing</h3>
<p>Ini cara analis sungguhan memakai multiple. Ubah angkanya lalu jalankan lagi:</p>

<div data-demo="js-playground">// Langkah 1: hitung P/E tiap pesaing sejenis
const pesaing = [
  { nama: "Pesaing A", harga: 4500, eps: 300 },
  { nama: "Pesaing B", harga: 6000, eps: 375 },
  { nama: "Pesaing C", harga: 3200, eps: 200 }
];

let totalPE = 0;
pesaing.forEach(function (p) {
  const pe = p.harga / p.eps;
  totalPE = totalPE + pe;
  console.log(p.nama + ": harga " + p.harga + ", EPS " + p.eps + "  ->  P/E " + pe.toFixed(1));
});

const rataPE = totalPE / pesaing.length;
console.log("--------------------------------------");
console.log("Rata-rata P/E industri = " + rataPE.toFixed(1));

// Langkah 2: nilai perusahaan yang kita incar
const targetHarga = 3000;
const targetEPS = 250;
const targetPE = targetHarga / targetEPS;
const hargaSetaraIndustri = rataPE * targetEPS;

console.log("");
console.log("Perusahaan target: harga " + targetHarga + ", EPS " + targetEPS);
console.log("  P/E-nya                        = " + targetPE.toFixed(1));
console.log("  Harga jika dihargai spt industri = " + Math.round(hargaSetaraIndustri));

if (targetPE > rataPE) {
  console.log("  -> Lebih MAHAL dari rata-rata industri");
} else {
  console.log("  -> Lebih MURAH dari rata-rata industri");
  console.log("     TAPI: cari tahu KENAPA sebelum membeli!");
}</div>

<div class="callout warn">
<b>Perhatikan baris terakhir.</b> Program tidak berkata "murah, beli!" — ia berkata "cari tahu kenapa". Itu sikap yang benar. Pasar jarang salah tanpa alasan.
</div>

<h3>5. Trailing vs Forward P/E</h3>
<p>Angka "laba" yang dipakai bisa dua macam, dan hasilnya bisa jauh berbeda:</p>
<ul>
  <li><b>Trailing P/E</b> → memakai laba <b>12 bulan terakhir</b>. Ini <b>fakta</b>, sudah terjadi.</li>
  <li><b>Forward P/E</b> → memakai <b>perkiraan</b> laba tahun depan. Ini <b>ramalan</b>, bisa meleset.</li>
</ul>

<div class="callout">
⚠️ Kalau ada yang berkata <i>"P/E-nya cuma 8, murah banget!"</i>, tanyakan dulu: <b>trailing atau forward?</b> Forward P/E yang rendah sering datang dari ramalan laba yang optimistis. Kalau ramalannya meleset, "murah"-nya ikut hilang.
</div>

<h3>6. Kenapa multiple berbeda-beda antar perusahaan?</h3>
<p>Perbedaan multiple bukan selalu berarti salah harga. Multiple yang lebih tinggi <b>pantas</b> diberikan jika perusahaan punya:</p>
<ul>
  <li><b>Pertumbuhan lebih cepat</b> — laba tahun depan akan jauh lebih besar.</li>
  <li><b>Risiko lebih rendah</b> — labanya stabil, tidak naik-turun tajam.</li>
  <li><b>Moat (keunggulan kompetitif)</b> yang kuat — labanya bisa bertahan lama.</li>
  <li><b>Kebutuhan modal rendah</b> — tumbuh tanpa terus-menerus menyuntik uang.</li>
</ul>
<p>Itu sebabnya industri berbeda punya norma berbeda: perusahaan teknologi biasanya ber-P/E lebih tinggi dari perbankan, dan itu <b>wajar</b>, bukan tanda kemahalan.</p>

<h3>7. Lima jebakan yang wajib diwaspadai 🚩</h3>
<ol>
  <li><b>P/E rendah ≠ murah.</b> Bisa jadi <i>value trap</i> — pasar sudah tahu bisnisnya sedang menurun, dan labanya akan menyusut. Yang murah hari ini jadi mahal tahun depan.</li>
  <li><b>P/E tinggi ≠ mahal.</b> Kalau tumbuh sangat cepat, itu bisa wajar. Di situlah <b>PEG</b> berguna.</li>
  <li><b>Laba bisa "dipoles".</b> Ingat <i>earnings management</i> — kalau labanya tidak jujur, multiple-nya ikut menyesatkan. Selalu cek arus kas operasi.</li>
  <li><b>Jangan bandingkan lintas industri.</b> P/E bank vs P/E perusahaan teknologi itu apel vs jeruk.</li>
  <li><b>Laba satu kali (one-off) merusak rasio.</b> Kalau perusahaan menjual gedung tahun lalu, labanya melonjak sementara dan P/E terlihat sangat rendah — padahal bisnis intinya biasa saja.</li>
</ol>

<div class="callout">
<b>💡 Cara pakai yang benar.</b> Multiple menjawab <i>"berapa harga yang dibayar pasar"</i>, <b>bukan</b> <i>"berapa nilai sebenarnya"</i>. Gunakan sebagai <b>penyaring cepat</b> untuk mempersempit pilihan — lalu dalami dengan kualitas bisnis (moat, manajemen, alokasi modal) dan arus kasnya sebelum memutuskan.
</div>
`,
          keyPoints: [
            "Multiple = kelipatan: rasio harga terhadap ukuran kinerja (laba, nilai buku, pendapatan, EBITDA).",
            "P/E 15 berarti membayar 15 kali lipat laba setahun (kasarnya, ±15 tahun balik modal).",
            "Valuasi relatif = menilai dengan membandingkan ke pesaing sejenis, rata-rata industri, dan sejarahnya sendiri.",
            "Multiple sendirian tak berarti apa-apa — angkanya baru bermakna setelah ada pembanding.",
            "Trailing P/E memakai laba yang sudah terjadi; forward P/E memakai ramalan yang bisa meleset.",
            "Multiple tinggi bisa pantas jika pertumbuhan cepat, risiko rendah, atau moat kuat.",
            "Jebakan utama: value trap (P/E rendah karena bisnis memburuk), laba yang dipoles, laba one-off, dan membandingkan lintas industri.",
            "Multiple menjawab 'berapa harga pasar', bukan 'berapa nilai sebenarnya' — pakai bersama DCF & analisis kualitas bisnis.",
          ],
          practice: [
            { type: "number", q: "Harga saham Rp1.500, laba per saham (EPS) Rp100. Berapa P/E multiple-nya?", answer: 15, tol: 0.1, hint: "P/E = Harga ÷ EPS.", solution: "1.500 ÷ 100 = 15× — artinya membayar 15 kali lipat laba setahun." },
            { type: "number", q: "Rata-rata P/E industri adalah 20. Perusahaan X punya EPS Rp250. Berapa harga sahamnya jika dihargai setara industri?", answer: 5000, tol: 1, hint: "Harga = P/E industri × EPS.", solution: "20 × 250 = Rp5.000 per saham." },
            { type: "number", q: "Perusahaan punya EV Rp600 miliar dan EBITDA Rp75 miliar. Berapa multiple EV/EBITDA-nya?", answer: 8, tol: 0.1, hint: "Bagi EV dengan EBITDA.", solution: "600 ÷ 75 = 8× " },
          ],
          quiz: [
            {
              q: "P/E multiple sebuah saham adalah 12. Apa artinya?",
              options: [
                "Kamu membayar 12 kali lipat laba setahun perusahaan itu",
                "Harga sahamnya akan naik 12% dalam setahun ke depan",
                "Laba perusahaan tumbuh 12% per tahun secara rata-rata",
                "Perusahaan membagikan dividen 12% dari harga sahamnya",
              ],
              answer: 0,
              explain:
                "Multiple = kelipatan. P/E 12 berarti harga yang dibayar setara 12 tahun laba (jika labanya tetap).",
            },
            {
              q: "Sebuah saham punya P/E 5, jauh di bawah rata-rata industri 18. Sikap paling tepat?",
              options: [
                "Selidiki dulu kenapa — bisa jadi value trap karena bisnisnya menurun",
                "Langsung beli, karena jelas jauh lebih murah daripada pesaingnya",
                "Abaikan, karena P/E di bawah 10 selalu tanda perusahaan bangkrut",
                "Tunggu P/E-nya naik menyamai industri, baru kemudian membeli",
              ],
              answer: 0,
              explain:
                "P/E rendah sering punya alasan: laba akan menyusut, ada masalah bisnis, atau laba lalu terdongkrak untung one-off. Murah di kertas belum tentu murah sesungguhnya.",
            },
            {
              q: "Apa beda trailing P/E dan forward P/E?",
              options: [
                "Trailing pakai laba 12 bulan terakhir; forward pakai ramalan laba ke depan",
                "Trailing pakai harga penutupan; forward pakai harga pembukaan esok hari",
                "Trailing untuk saham kecil; forward khusus saham berkapitalisasi besar",
                "Trailing dihitung tahunan; forward dihitung per kuartal",
              ],
              answer: 0,
              explain:
                "Forward P/E bergantung pada ramalan yang bisa meleset — selalu tanyakan versi mana yang sedang dibicarakan.",
            },
            {
              q: "Perusahaan sedang merugi (laba negatif). Multiple mana yang paling masuk akal dipakai?",
              options: [
                "P/S (Harga ÷ Pendapatan), karena pendapatannya tetap positif",
                "P/E (Harga ÷ Laba), karena paling sering dipakai para analis",
                "PEG (P/E ÷ Pertumbuhan), karena memperhitungkan laju laba",
                "Dividend yield, karena perusahaan rugi tetap membagi dividen",
              ],
              answer: 0,
              explain:
                "P/E tak bisa dibaca saat laba negatif. P/S memakai pendapatan yang tetap positif, sehingga masih bisa dibandingkan antar perusahaan.",
            },
            {
              q: "Kelemahan mendasar valuasi relatif (multiples) dibanding DCF?",
              options: [
                "Bila seluruh pasar sedang mahal, saham mahal pun terlihat 'wajar'",
                "Perhitungannya jauh lebih rumit dan butuh banyak asumsi masa depan",
                "Tidak bisa dipakai membandingkan perusahaan dalam satu industri",
                "Hasilnya selalu lebih rendah daripada harga pasar sebenarnya",
              ],
              answer: 0,
              explain:
                "Multiples menilai relatif terhadap pasar. Jika seluruh pasar sedang overvalued, perbandingannya ikut bergeser — DCF tidak terpengaruh sentimen karena menghitung dari arus kas.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 11: KUALITAS BISNIS & KEUNGGULAN KOMPETITIF ---------------- */
    {
      id: "acc-kualitas",
      level: "Kualitas",
      title: "Kualitas Bisnis & Keunggulan Kompetitif",
      summary: "Sisi kualitatif: alokasi modal, biaya modal & hurdle rate, return on capital, sumber pertumbuhan, economic moat, manajemen, dan pola pemenang.",
      lessons: [
        {
          id: "acc-kual-1",
          title: "Alokasi Modal — Tugas Terpenting Seorang CEO",
          duration: "13 menit",
          content: `
<p>Angka memberitahu kita <b>seberapa sehat bisnis sekarang</b>. Tapi apakah bisnis ini akan tetap bagus <b>10 tahun lagi</b>? Itu pertanyaan <b>kualitatif</b> — dan modul ini menjawabnya. Kita mulai dari keputusan paling menentukan: <b>alokasi modal</b>.</p>

<div data-diagram="flow" data-steps="Reinvestasi|Akuisisi|Lunasi utang|Buyback|Dividen" data-caption="Lima pilihan alokasi modal — hanya ada ini"></div>


<h3>Fundamental: uang sudah ada, mau diapakan?</h3>
<p>Bayangkan bisnismu menghasilkan laba Rp1 miliar. Uang itu <b>harus</b> dipakai untuk sesuatu. Keputusan inilah yang, diulang bertahun-tahun, menentukan nasib perusahaan. Banyak CEO hebat memimpin operasi tapi <b>buruk</b> mengalokasikan modal.</p>

<div class="callout">
<b>Istilahnya: <i>capital allocator</i>.</b> Di dunia investasi, seorang CEO dinilai bukan terutama sebagai <b>operator</b> (yang mengurus penjualan &amp; produksi), melainkan sebagai <b>pengalokasi modal</b> — orang yang memutuskan ke mana uang perusahaan mengalir.<br><br>
Alasannya masuk akal: operasi harian bisa didelegasikan ke manajer yang cakap. Tapi keputusan menaruh Rp1 triliun ke pabrik baru, akuisisi, atau buyback <b>tidak bisa didelegasikan</b> — dan akibatnya bertahan puluhan tahun.
</div>

<h3>Dari mana modalnya datang?</h3>
<p>Sebelum bicara ke mana uang pergi, perlu tahu dari mana ia datang. Hanya ada <b>tiga sumber</b>:</p>
<table class="tbl">
  <tr><th>Sumber</th><th>Biayanya</th><th>Catatan</th></tr>
  <tr><td><b>1. Kas dari operasi</b></td><td class="ok-cell">Paling murah</td><td>Uang hasil bisnis sendiri — tak menambah utang, tak mengencerkan kepemilikan</td></tr>
  <tr><td><b>2. Berutang</b></td><td>Bunga (bisa mengurangi pajak)</td><td>Relatif murah, tapi wajib dibayar apa pun keadaannya. Menambah risiko</td></tr>
  <tr><td><b>3. Menerbitkan saham baru</b></td><td>Paling mahal</td><td><b>Mengencerkan</b> kepemilikan pemegang saham lama</td></tr>
</table>

<div class="callout warn">
<b>🚩 Tanda bahaya:</b> perusahaan yang <b>terus-menerus menerbitkan saham baru</b> untuk membiayai operasi sehari-hari. Artinya bisnisnya belum sanggup menghidupi dirinya sendiri, dan bagian kepemilikanmu menyusut tiap tahun. Periksa <b>jumlah saham beredar</b> selama 5 tahun terakhir — kalau naik terus tanpa akuisisi yang berarti, itu pertanda.
</div>

<h3>Lima pilihan memakai uang (hanya ada ini)</h3>
<table class="tbl">
  <tr><th>Pilihan</th><th>Untuk apa</th><th>Catatan</th></tr>
  <tr><td><b>1. Reinvestasi</b><br><i>CapEx, R&amp;D, iklan</i></td><td>Buka cabang, tambah kapasitas, produk baru, bangun merek</td><td class="ok-cell">Terbaik <b>jika</b> return-nya di atas biaya modal</td></tr>
  <tr><td><b>2. Akuisisi (M&amp;A)</b></td><td>Membeli perusahaan lain</td><td>Paling <b>berisiko</b> — lihat catatan di bawah</td></tr>
  <tr><td><b>3. Melunasi utang</b></td><td>Mengurangi beban bunga &amp; risiko</td><td>Sering terlupakan. Sangat berharga saat bunga tinggi atau utang menumpuk</td></tr>
  <tr><td><b>4. Buyback</b></td><td>Membeli kembali saham sendiri</td><td>Menguntungkan <b>hanya</b> jika saham di bawah nilai wajar</td></tr>
  <tr><td><b>5. Dividen</b></td><td>Membagikan kas ke pemilik</td><td>Jujur &amp; sederhana. Tapi sekali dinaikkan, sulit diturunkan</td></tr>
</table>

<div class="callout">
<b>Kenapa "melunasi utang" sering dilupakan?</b> Karena tidak terlihat heroik — tak ada pengumuman pabrik baru, tak ada berita akuisisi. Padahal saat suku bunga naik, mengurangi utang bisa mengangkat laba bersih <b>lebih pasti</b> daripada ekspansi mana pun, sekaligus memperkecil risiko kebangkrutan. Pilihan yang membosankan, tapi sering paling cerdas.
</div>

<h3>Ambang yang menentukan segalanya: biaya modal</h3>
<div class="callout warn">
Kelima pilihan di atas berputar pada <b>satu pertanyaan</b>:<br><br>
<b>Apakah return-nya melebihi biaya modal perusahaan?</b><br><br>
Kalau <b>ya</b> → reinvestasi menciptakan nilai.<br>
Kalau <b>tidak</b> → uang itu lebih baik dikembalikan ke pemilik (buyback/dividen) atau dipakai melunasi utang.
</div>
<p>Inilah kesalahan paling mahal seorang CEO: <b>tumbuh demi tumbuh</b>. Membangun pabrik yang menghasilkan 7% padahal biaya modalnya 11% <b>terlihat</b> seperti kemajuan — pendapatan naik, perusahaan makin besar, beritanya bagus — tapi sesungguhnya <b>menghancurkan nilai pemilik</b> setiap tahun. Cara menghitung ambang ini dibahas di pelajaran berikutnya.</p>

<h3>Urutan prioritas yang masuk akal</h3>
<ol>
  <li><b>Reinvestasi ke bisnis sendiri</b> — <i>jika</i> return atas modalnya di atas biaya modal & masih ada ruang tumbuh. Ini penggunaan terbaik.</li>
  <li><b>Melunasi utang</b> — jika utangnya memberatkan atau bunganya sedang tinggi.</li>
  <li><b>Buyback</b> — jika tak ada peluang bagus <b>dan</b> harga saham sedang di bawah nilai wajar.</li>
  <li><b>Dividen</b> — jika tak ada peluang bagus dan saham tidak murah.</li>
  <li><b>M&amp;A</b> — paling akhir & paling hati-hati.</li>
</ol>

<div class="callout warn">
<b>Soal M&amp;A — jangan anti, tapi curigai:</b> banyak studi menunjukkan mayoritas akuisisi <b>besar & transformatif</b> gagal menciptakan nilai (kemahalan, budaya bentrok, integrasi kacau). Tapi akuisisi <b>kecil (bolt-on)</b> yang dilakukan operator disiplin justru bisa sangat berhasil. Bedakan keduanya.
</div>

<div class="callout warn">
<b>Jebakan buyback:</b> membeli kembali saham hanya menguntungkan <b>jika harganya di bawah nilai wajar</b>. Buyback saat saham mahal justru <b>menghancurkan nilai</b> — tapi sering dilakukan karena mempercantik EPS jangka pendek.
</div>
`,
          keyPoints: [
            "Alokasi modal = keputusan memakai uang perusahaan; tugas terpenting CEO yang sering diabaikan.",
            "CEO dinilai sebagai 'capital allocator', bukan sekadar operator — operasi bisa didelegasikan, alokasi modal tidak.",
            "Tiga sumber modal: kas operasi (termurah), utang (wajib dibayar), menerbitkan saham (termahal, mengencerkan kepemilikan).",
            "Lima pilihan memakai uang: reinvestasi, akuisisi, melunasi utang, buyback, dividen.",
            "'Melunasi utang' paling sering dilupakan padahal sangat berharga saat bunga tinggi.",
            "Ambang penentu semua keputusan: apakah return-nya di atas biaya modal? Kalau tidak, kembalikan uangnya ke pemilik.",
            "Kesalahan termahal: tumbuh demi tumbuh — perusahaan membesar tapi nilai pemilik berkurang.",
            "Prioritas: reinvestasi bila return di atas biaya modal → lunasi utang → buyback bila saham murah → dividen → M&A paling hati-hati.",
            "M&A besar sering gagal; bolt-on oleh operator disiplin bisa berhasil. Buyback hanya bernilai bila saham di bawah nilai wajar.",
          ],
          practice: [
            { type: "choice", q: "Perusahaan punya kas menganggur, return atas modal bisnisnya TINGGI, dan pasar masih luas. Alokasi terbaik?", options: ["Bagi dividen sebesar-besarnya", "Reinvestasi ke bisnis (ekspansi)", "Akuisisi perusahaan besar", "Simpan saja di bank"], answer: 1, hint: "Kalau modal bisa menghasilkan return tinggi di bisnis sendiri, kenapa dikeluarkan?", solution: "Reinvestasi memberi hasil terbaik saat return atas modal tinggi & masih ada ruang tumbuh." },
            { type: "choice", q: "Kapan share buyback JUSTRU merusak nilai pemegang saham?", options: ["Saat harga saham di bawah nilai wajar", "Saat harga saham jauh di atas nilai wajar", "Saat perusahaan untung", "Selalu menguntungkan"], answer: 1, hint: "Membeli sesuatu yang kemahalan itu untung atau rugi?", solution: "Membeli kembali saham yang kemahalan = membuang uang; nilai per saham justru tergerus." },
          ],
          quiz: [
            {
              q: "Apa saja lima pilihan alokasi modal?",
              options: [
                "Reinvestasi, akuisisi, melunasi utang, buyback, dividen",
                "Gaji, sewa, listrik, pajak penghasilan, bonus tahunan",
                "Aset lancar, aset tetap, utang, ekuitas, laba ditahan",
                "Debit, kredit, jurnal, buku besar, laporan keuangan",
              ],
              answer: 0,
              explain: "Hanya ada lima cara utama memakai kas perusahaan — dan 'melunasi utang' adalah yang paling sering dilupakan.",
            },
            {
              q: "Kenapa CEO disebut 'capital allocator', bukan sekadar operator?",
              options: [
                "Operasi bisa didelegasikan, tapi keputusan ke mana modal besar mengalir tidak",
                "Karena CEO wajib memegang sendiri seluruh rekening bank perusahaan",
                "Karena CEO dilarang ikut campur dalam operasi harian perusahaan",
                "Karena istilah itu diwajibkan dalam laporan tahunan perusahaan terbuka",
              ],
              answer: 0,
              explain:
                "Manajer yang cakap bisa menjalankan operasi. Keputusan alokasi modal melekat pada CEO dan menentukan nasib jangka panjang.",
            },
            {
              q: "Perusahaan terus menerbitkan saham baru tiap tahun untuk membiayai operasi. Artinya?",
              options: [
                "Bisnis belum sanggup menghidupi diri, dan kepemilikan lama terus terencerkan",
                "Bisnis sangat sehat karena banyak investor baru yang tertarik masuk",
                "Bisnis sedang mengurangi utang sehingga risikonya makin rendah",
                "Bisnis bersiap membagi dividen besar kepada pemegang saham lama",
              ],
              answer: 0,
              explain:
                "Menerbitkan saham adalah sumber modal termahal. Ketergantungan padanya untuk operasi harian adalah tanda bahaya.",
            },
            {
              q: "Perusahaan membangun pabrik dengan return 7%, sementara biaya modalnya 11%. Apa yang sebenarnya terjadi?",
              options: [
                "Menghancurkan nilai pemilik, meski perusahaan terlihat bertumbuh",
                "Menciptakan nilai, karena pabrik baru tetap menghasilkan laba",
                "Netral, karena selisih empat persen masih dalam batas wajar",
                "Menciptakan nilai, asalkan pendapatan perusahaan ikut naik",
              ],
              answer: 0,
              explain:
                "Inilah jebakan 'tumbuh demi tumbuh': ukuran bertambah, nilai bagi pemilik justru berkurang.",
            },
            {
              q: "Mengapa akuisisi besar (M&A) harus dicurigai?",
              options: [
                "Mayoritas gagal menciptakan nilai: kemahalan, budaya bentrok, integrasi sulit",
                "Akuisisi selalu dilarang regulator bila nilainya di atas batas tertentu",
                "Akuisisi besar selalu dibiayai utang sehingga pasti merugikan",
                "Perusahaan yang diakuisisi selalu menyembunyikan kerugian besar",
              ],
              answer: 0,
              explain:
                "Akuisisi besar-transformatif berisiko tinggi; bolt-on yang disiplin lebih sering berhasil.",
            },
          ],
        },
        {
          id: "acc-kual-7",
          title: "Biaya Modal & Ambang Kelayakan (Hurdle Rate)",
          duration: "14 menit",
          content: `
<p>Pelajaran sebelumnya berakhir pada satu pertanyaan: <b>berapa hasil minimal agar sebuah keputusan layak?</b> Jawabannya bukan nol. Jawabannya adalah <b>biaya modal</b> — dan pelajaran ini menghitungnya dari nol.</p>

<div data-diagram="pipeline" data-stages="Biaya utang::bunga setelah pajak|Biaya ekuitas::bebas risiko + premi|Ditimbang::sesuai porsinya|= WACC::ambang minimal" data-caption="Dari dua sumber modal menjadi satu angka ambang"></div>

<h3>Fundamental: uang tidak pernah gratis</h3>
<div class="callout">
Banyak orang mengira kas yang sudah ada di perusahaan itu "gratis" — toh uangnya sudah di tangan. <b>Salah.</b><br><br>
Uang itu milik <b>pemberi pinjaman</b> dan <b>pemegang saham</b>. Keduanya menyerahkan uangnya karena mengharapkan imbalan. Harapan itulah <b>biaya modal</b>: harga yang harus "dibayar" perusahaan atas uang yang dipakainya.
</div>

<p>Kalau perusahaan memakai uang itu untuk sesuatu yang menghasilkan <b>kurang</b> dari yang diharapkan pemiliknya, maka perusahaan <b>merugikan mereka</b> — meski laporan labanya tetap positif.</p>

<h3>1. Biaya utang — yang paling mudah dilihat</h3>
<div class="callout">
<b>Biaya utang setelah pajak</b> = Bunga pinjaman × (1 − tarif pajak)
</div>
<p>Kenapa dikalikan (1 − pajak)? Karena <b>bunga mengurangi laba kena pajak</b>. Kalau bunga pinjaman 9% dan tarif pajak 22%, beban sesungguhnya bagi perusahaan hanya <b>9% × 0,78 = 7,02%</b>. Negara ikut menanggung sebagian — inilah yang disebut <i>tax shield</i>.</p>

<h3>2. Biaya ekuitas — yang tak terlihat tapi lebih mahal</h3>
<div class="callout warn">
<b>Inilah yang paling sering diabaikan.</b> Utang punya tagihan yang jelas tiap bulan. Ekuitas <b>tidak mengirim tagihan</b> — tapi bukan berarti gratis.<br><br>
Pemegang saham menanggung risiko <b>paling besar</b> (mereka dibayar paling akhir bila perusahaan bangkrut). Karena itu mereka menuntut imbalan <b>lebih tinggi</b> daripada pemberi pinjaman.
</div>

<div class="callout">
<b>Versi sederhana:</b> Biaya ekuitas = Bunga bebas risiko + Premi risiko<br><br>
<i>Bunga bebas risiko</i> = imbal hasil Surat Berharga Negara 10 tahun (dianggap paling aman).<br>
<i>Premi risiko</i> = tambahan yang dituntut karena memegang saham, bukan obligasi negara.
</div>

<p>Contoh: SBN 10 tahun memberi 6,5% dan premi risiko ekuitas 5,5% → biaya ekuitas = <b>12%</b>. Artinya: jika perusahaan tidak sanggup menghasilkan 12% atas modal pemegang saham, mereka <b>lebih baik menaruh uangnya di tempat lain</b>.</p>

<h3>3. WACC — menggabungkan keduanya</h3>
<div class="callout">
<b>WACC</b> (Weighted Average Cost of Capital) = rata-rata biaya modal, <b>ditimbang</b> sesuai porsi utang dan ekuitas.<br><br>
WACC = (porsi utang × biaya utang setelah pajak) + (porsi ekuitas × biaya ekuitas)
</div>

<p>Inilah <b>hurdle rate</b> — ambang kelayakan. Setiap rupiah yang dialokasikan CEO harus melompati pagar ini.</p>

<h3>Hitung sendiri</h3>
<div data-demo="hurdle-rate"></div>

<h3>Ukuran penciptaan nilai: spread ROIC − WACC</h3>
<div class="callout">
<b>ROIC − WACC = spread.</b><br><br>
Spread <b>positif</b> → tiap rupiah yang ditanam menciptakan nilai. Makin besar spread dan makin lama bertahan, makin berharga perusahaannya.<br>
Spread <b>negatif</b> → tiap rupiah yang ditanam menghancurkan nilai. Pertumbuhan justru memperburuk keadaan.
</div>

<div class="callout warn">
<b>Ini pembalik cara pandang.</b> Kita terbiasa menganggap pertumbuhan selalu baik. Padahal:<br><br>
• Perusahaan dengan spread <b>positif</b> → <b>tumbuh secepat mungkin</b> adalah strategi terbaik.<br>
• Perusahaan dengan spread <b>negatif</b> → <b>berhenti tumbuh</b> dan kembalikan uang ke pemilik adalah strategi terbaik.<br><br>
Perusahaan berspread negatif yang terus berekspansi sedang <b>menggali lubangnya sendiri lebih dalam</b> — dan biasanya dipuji media karena "agresif".
</div>

<h3>Kesalahan yang sering terjadi</h3>
<table class="tbl">
  <tr><th>Kesalahan</th><th>Kenapa keliru</th></tr>
  <tr><td>"Kas menganggur itu gratis, pakai saja"</td><td>Kas milik pemegang saham; memakainya untuk proyek berhasil rendah tetap merugikan mereka</td></tr>
  <tr><td>"Utang lebih murah, perbanyak saja"</td><td>Benar sampai titik tertentu. Utang berlebihan menaikkan risiko kebangkrutan, dan pemberi pinjaman akan menuntut bunga lebih tinggi</td></tr>
  <tr><td>"Proyeknya untung, berarti layak"</td><td>Untung saja tidak cukup — harus untung <b>di atas biaya modal</b></td></tr>
  <tr><td>Memakai satu WACC untuk semua proyek</td><td>Proyek berisiko tinggi seharusnya diberi ambang lebih tinggi</td></tr>
</table>

<div class="callout">
<b>Hubungannya dengan DCF:</b> tingkat diskon yang dipakai dalam <b>DCF</b> pada dasarnya adalah WACC ini. Jadi angka yang baru kamu hitung punya dua kegunaan sekaligus: <b>menyaring keputusan alokasi modal</b>, dan <b>menilai harga wajar sebuah bisnis</b>.
</div>

<div class="callout warn">
<b>Jujur soal ketepatannya:</b> biaya ekuitas <b>tidak bisa diukur pasti</b> — ia adalah harapan orang, bukan angka di laporan. Praktisi sungguhan memakai CAPM dengan <i>beta</i>, dan hasilnya pun tetap perkiraan. Karena itu jangan terpaku pada satu angka; pakai <b>rentang</b> (misalnya WACC 10–12%) dan lihat apakah kesimpulannya berubah.
</div>
`,
          keyPoints: [
            "Uang tidak pernah gratis — kas perusahaan milik pemberi pinjaman & pemegang saham yang mengharapkan imbalan.",
            "Biaya utang setelah pajak = bunga × (1 − tarif pajak); bunga mengurangi pajak sehingga negara menanggung sebagian (tax shield).",
            "Biaya ekuitas = bunga bebas risiko + premi risiko; lebih mahal dari utang karena pemegang saham dibayar paling akhir.",
            "Biaya ekuitas tidak mengirim tagihan — itulah sebabnya paling sering diabaikan.",
            "WACC = rata-rata tertimbang biaya utang & ekuitas = hurdle rate, ambang kelayakan setiap keputusan.",
            "Spread = ROIC − WACC. Positif berarti menciptakan nilai; negatif berarti menghancurkan nilai.",
            "Spread positif → tumbuh secepat mungkin. Spread negatif → berhenti tumbuh, kembalikan uang ke pemilik.",
            "Tingkat diskon dalam DCF pada dasarnya adalah WACC ini.",
            "Biaya ekuitas tak bisa diukur pasti — pakai rentang, jangan satu angka tunggal.",
          ],
          practice: [
            { type: "number", q: "Bunga pinjaman 10%, tarif pajak 22%. Berapa biaya utang setelah pajak (dalam %)?", answer: 7.8, tol: 0.1, hint: "Bunga × (1 − tarif pajak).", solution: "10 × 0,78 = 7,8%." },
            { type: "number", q: "Bunga bebas risiko 6%, premi risiko ekuitas 6%. Berapa biaya ekuitasnya (dalam %)?", answer: 12, tol: 0.1, hint: "Jumlahkan keduanya.", solution: "6 + 6 = 12%." },
            { type: "number", q: "Porsi utang 40% dengan biaya 7,5%; porsi ekuitas 60% dengan biaya 12,5%. Berapa WACC-nya (dalam %)?", answer: 10.5, tol: 0.1, hint: "(0,4 × 7,5) + (0,6 × 12,5).", solution: "3 + 7,5 = 10,5%." },
          ],
          quiz: [
            {
              q: "Kenapa biaya utang dikalikan (1 − tarif pajak)?",
              options: [
                "Bunga mengurangi laba kena pajak, jadi beban sebenarnya lebih ringan",
                "Pajak dibayar oleh pemberi pinjaman, bukan oleh perusahaan peminjam",
                "Utang tidak dikenai pajak sehingga biayanya perlu dikurangi",
                "Rumus itu hanya berlaku untuk perusahaan yang sedang merugi",
              ],
              answer: 0,
              explain:
                "Negara ikut menanggung sebagian beban bunga lewat pengurangan pajak.",
            },
            {
              q: "Kenapa biaya ekuitas lebih tinggi daripada biaya utang?",
              options: [
                "Pemegang saham menanggung risiko terbesar — dibayar paling akhir saat bangkrut",
                "Ekuitas dikenai pajak lebih tinggi daripada utang oleh negara",
                "Bank menetapkan bunga ekuitas lebih tinggi daripada bunga pinjaman",
                "Ekuitas harus dikembalikan penuh dalam jangka waktu lebih singkat",
              ],
              answer: 0,
              explain:
                "Risiko lebih besar menuntut imbalan lebih besar. Itulah premi risiko ekuitas.",
            },
            {
              q: "Perusahaan dengan spread ROIC − WACC yang NEGATIF sebaiknya?",
              options: [
                "Berhenti ekspansi; kembalikan uang lewat dividen, buyback, atau lunasi utang",
                "Berekspansi secepat mungkin agar skala usahanya segera membesar berlipat",
                "Menerbitkan saham baru untuk membiayai lebih banyak proyek-proyek tambahan",
                "Menambah utang sebanyak mungkin agar biaya modalnya turun di bawah return",
              ],
              answer: 0,
              explain:
                "Setiap rupiah tambahan yang ditanam justru menghancurkan nilai. Tumbuh malah memperburuk keadaan.",
            },
            {
              q: "Sebuah proyek diperkirakan menghasilkan return 9%, WACC perusahaan 11%. Kesimpulan?",
              options: [
                "Tidak layak — meski untung, hasilnya di bawah biaya modal",
                "Layak, karena proyeknya tetap menghasilkan laba positif",
                "Layak, asalkan proyeknya berukuran cukup besar",
                "Belum bisa dinilai tanpa mengetahui harga saham perusahaan",
              ],
              answer: 0,
              explain:
                "Untung saja tidak cukup. Ambangnya adalah biaya modal, bukan nol.",
            },
          ],
        },
        {
          id: "acc-kual-2",
          title: "Return on Capital & Intensitas Aset",
          duration: "12 menit",
          content: `
<p>Setelah tahu <b>ke mana</b> modal dialokasikan, pertanyaan berikutnya: <b>seberapa produktif modal itu bekerja?</b></p>

<div data-diagram="pipeline" data-stages="Modal ditanam::pabrik, stok, sistem|Menghasilkan laba::dari modal itu|ROIC::laba ÷ modal terpakai|Di atas biaya modal?::barulah nilai tercipta" data-caption="Tumbuh saja tidak cukup — hasilnya harus melebihi biaya modalnya"></div>


<div class="callout">
<b>Fundamental:</b> bisnis pada dasarnya adalah <b>mesin yang mengubah modal menjadi laba</b>. Pertanyaan intinya sederhana: <b>tiap Rp1 modal menghasilkan berapa rupiah laba?</b> Itulah <b>return on capital</b> (lihat pelajaran ROE/ROA/ROIC).
</div>

<h3>Intensitas aset: ringan vs berat</h3>
<table class="tbl">
  <tr><th></th><th>Asset Light (ringan)</th><th>Asset Heavy (berat)</th></tr>
  <tr><td>Butuh aset</td><td>Sedikit</td><td>Sangat banyak</td></tr>
  <tr><td>Contoh</td><td>Software, konsultan, merek/lisensi</td><td>Pabrik baja, hotel, maskapai, tambang</td></tr>
  <tr><td>Untuk tumbuh</td><td>Butuh <b>sedikit</b> modal tambahan</td><td>Butuh <b>banyak</b> modal tambahan</td></tr>
  <tr><td>Return on capital</td><td class="ok-cell">Cenderung tinggi</td><td>Cenderung lebih rendah</td></tr>
</table>

<p>Bisnis <b>asset light</b> umumnya lebih menarik: bisa tumbuh tanpa terus-menerus menelan modal, sehingga menghasilkan banyak <b>kas bebas</b>.</p>

<div class="callout">
<b>Tapi jangan hitam-putih:</b> aset berat kadang <b>justru menjadi parit pelindung</b>. Pabrik chip, jaringan rel, atau jaringan listrik butuh modal raksasa untuk dibangun — dan itulah yang membuat pesaing baru <b>sulit masuk</b>. Jadi: aset berat + return tinggi = kombinasi sangat kuat.
</div>

<h3>Margin tinggi</h3>
<p>Margin laba tinggi berarti tiap penjualan menyisakan lebih banyak. Ini biasanya tanda ada <b>sesuatu yang istimewa</b> (merek, teknologi, efisiensi) — dan memberi <b>bantalan</b> saat biaya naik atau harga harus turun.</p>

<div class="callout warn">
<b>Pertanyaan kunci saat menilai:</b> "Untuk menaikkan pendapatan Rp1, berapa modal tambahan yang dibutuhkan?" Makin kecil jawabannya, makin baik bisnisnya.
</div>
`,
          keyPoints: [
            "Bisnis = mesin pengubah modal jadi laba; ukur dengan return on capital (ROIC/ROE/ROA).",
            "Asset light butuh sedikit modal untuk tumbuh → return tinggi & kas bebas besar.",
            "Asset heavy bisa menjadi barrier to entry (pabrik chip, rel, jaringan) — kombinasi aset berat + return tinggi sangat kuat.",
            "Margin tinggi menandakan keistimewaan & memberi bantalan; pertanyaan kunci: berapa modal tambahan untuk menaikkan pendapatan Rp1?",
          ],
          quiz: [
            {
              q: "Kenapa bisnis 'asset light' umumnya menarik?",
              options: [
                "Bisa tumbuh tanpa terus menelan modal besar, jadi return & kas bebasnya tinggi",
                "Selalu punya pendapatan jauh lebih besar daripada bisnis yang padat aset",
                "Tidak memerlukan karyawan sama sekali sehingga biaya operasionalnya nol",
                "Dibebaskan dari pajak penghasilan karena tidak memiliki aset tetap apa pun",
              ],
              answer: 0,
              explain:
                "Pertumbuhan yang tak butuh banyak modal menghasilkan return & kas bebas lebih tinggi.",
            },
            {
              q: "Kapan aset berat justru menguntungkan?",
              options: [
                "Saat aset itu jadi penghalang masuk yang sulit ditiru pesaing",
                "Saat nilai aset itu naik mengikuti inflasi setiap tahunnya",
                "Saat aset itu dibeli seluruhnya dengan uang pinjaman bank",
                "Saat penyusutannya bisa mengurangi pajak perusahaan",
              ],
              answer: 0,
              explain: "Modal raksasa untuk membangunnya menghalangi pesaing baru masuk.",
            },
          ],
        },
        {
          id: "acc-kual-3",
          title: "Sumber Pertumbuhan & Dua Strategi Menang",
          duration: "13 menit",
          content: `
<p>Pertumbuhan itu bagus — tapi <b>dari mana</b> datangnya, dan apakah <b>berkualitas</b>?</p>

<h3>Fundamental: pendapatan hanya punya dua tuas</h3>
<div class="callout">
<b>Pendapatan = Harga × Volume.</b> Titik. Semua pertumbuhan pada akhirnya datang dari menaikkan harga, menaikkan volume, atau keduanya.
</div>

<h3>Sumber pertumbuhan yang sehat</h3>
<ul>
  <li><b>Ekspansi geografis</b> — mereplikasi model yang <b>sudah terbukti</b> ke wilayah baru. Risikonya lebih rendah karena resepnya sudah teruji.</li>
  <li><b>Volume</b> — lebih banyak pelanggan/transaksi.</li>
  <li><b>Harga (pricing power)</b> — bisa menaikkan harga <b>tanpa</b> kehilangan pelanggan. Ini tanda kekuatan luar biasa.</li>
</ul>

<h3>Dua strategi yang sama-sama menang</h3>
<table class="tbl">
  <tr><th>Premium / Diferensiasi</th><th>Kepemimpinan Biaya</th></tr>
  <tr><td>Harga tinggi, margin tebal, volume lebih kecil</td><td>Harga rendah, margin tipis, volume raksasa</td></tr>
  <tr><td>Menang lewat merek & keunikan</td><td>Menang lewat efisiensi & skala</td></tr>
  <tr><td>Contoh: produk premium bermerek kuat</td><td>Contoh: ritel grosir, maskapai berbiaya rendah</td></tr>
</table>

<div class="callout warn">
<b>Yang berbahaya: terjebak di tengah.</b> Tidak cukup istimewa untuk memasang harga premium, tapi juga tidak cukup efisien untuk bersaing harga. Posisi ini paling sering kalah.
</div>

<h3>Coba sendiri — bandingkan dua strategi 👇</h3>
<div data-demo="js-playground">// Pendapatan = Harga x Volume. Ubah angkanya & jalankan lagi.
const strategi = [
  { nama: "Premium (harga tinggi)", harga: 500000, volume: 1000, biayaVariabel: 200000 },
  { nama: "Massal (harga rendah) ", harga: 100000, volume: 8000, biayaVariabel: 70000 }
];

strategi.forEach(function(s){
  const pendapatan = s.harga * s.volume;
  const marginKontribusi = (s.harga - s.biayaVariabel) * s.volume;
  console.log(s.nama);
  console.log("   Pendapatan        : Rp" + pendapatan.toLocaleString("id-ID"));
  console.log("   Margin kontribusi : Rp" + marginKontribusi.toLocaleString("id-ID"));
});
console.log("-----");
console.log("Keduanya bisa menang. Yang berbahaya adalah terjebak di tengah.");</div>

<div class="callout warn">
<b>Pertumbuhan tidak selalu baik!</b> Jika perusahaan tumbuh dengan modal yang <b>return-nya lebih rendah</b> daripada biaya modalnya, pertumbuhan itu justru <b>menghancurkan nilai</b>. Tumbuh besar ≠ tumbuh menguntungkan.
</div>
`,
          keyPoints: [
            "Pendapatan = Harga × Volume; semua pertumbuhan berasal dari dua tuas ini.",
            "Sumber sehat: ekspansi geografis (replikasi model terbukti), volume, dan pricing power.",
            "Dua strategi sama-sama menang: premium/diferensiasi ATAU kepemimpinan biaya; terjebak di tengah paling berbahaya.",
            "Pertumbuhan dengan return di bawah biaya modal justru menghancurkan nilai.",
          ],
          practice: [
            { type: "number", q: "Harga jual Rp500.000, volume 1.000 unit. Berapa pendapatannya? (Rupiah)", answer: 500000000, tol: 1000, hint: "Pendapatan = Harga × Volume.", solution: "500.000 × 1.000 = Rp500.000.000." },
            { type: "choice", q: "Perusahaan tidak cukup istimewa untuk harga premium, tapi juga tidak cukup efisien untuk perang harga. Posisi ini disebut?", options: ["Pemimpin biaya", "Terjebak di tengah (paling berisiko kalah)", "Diferensiasi", "Monopoli"], answer: 1, hint: "Tidak menang di kedua strategi.", solution: "Ini 'stuck in the middle' — posisi paling rawan kalah bersaing." },
          ],
          quiz: [
            {
              q: "Apa dua tuas pendapatan?",
              options: ["Aset & utang", "Harga & Volume", "Debit & kredit", "Pajak & laba"],
              answer: 1,
              explain: "Pendapatan = Harga × Volume.",
            },
            {
              q: "Kapan pertumbuhan justru menghancurkan nilai?",
              options: [
                "Saat dibiayai modal yang return-nya lebih rendah dari biaya modalnya",
                "Saat pendapatan tumbuh lebih cepat daripada jumlah karyawannya",
                "Saat perusahaan tumbuh di pasar yang belum banyak pesaingnya",
                "Saat pertumbuhannya dibiayai sepenuhnya dari laba ditahan",
              ],
              answer: 0,
              explain:
                "Menanam modal pada return di bawah biaya modal merusak nilai walau ukuran membesar.",
            },
          ],
        },
        {
          id: "acc-kual-4",
          title: "Economic Moat (Parit Ekonomi)",
          duration: "13 menit",
          content: `
<p>Ini konsep paling penting dalam menilai kualitas bisnis jangka panjang.</p>

<div data-diagram="layers" data-items="Merek|Network Effect|Switching Cost|Skala &amp; Biaya|Teknologi / Paten" data-caption="Lima jenis parit ekonomi"></div>


<div class="callout">
<b>Analogi kastil:</b> bisnis yang menguntungkan itu seperti <b>kastil berisi harta</b>. Laba tinggi pasti <b>menarik penyerang</b> (pesaing). Yang melindunginya adalah <b>parit</b> (moat) — keunggulan yang membuat pesaing sulit merebut. Tanpa parit, laba tinggi hanya bertahan sebentar.
</div>

<h3>Lima jenis parit</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Cara melindungi</th><th>Contoh</th></tr>
  <tr><td><b>1. Merek (brand)</b></td><td>Pelanggan rela bayar lebih & memilih tanpa berpikir</td><td>Merek konsumen kuat, barang mewah</td></tr>
  <tr><td><b>2. Network effect</b></td><td>Makin banyak pengguna → makin bernilai bagi tiap pengguna</td><td>Marketplace, media sosial, bursa</td></tr>
  <tr><td><b>3. Switching cost</b></td><td>Pindah ke pesaing itu mahal/merepotkan</td><td>Sistem ERP perusahaan, ekosistem perangkat</td></tr>
  <tr><td><b>4. Keunggulan biaya & skala</b></td><td>Bisa menjual lebih murah & tetap untung</td><td>Ritel raksasa, produsen berskala besar</td></tr>
  <tr><td><b>5. Teknologi / paten / izin</b></td><td>Dilindungi hukum atau sulit ditiru secara teknis</td><td>Obat berpaten, lisensi terbatas</td></tr>
</table>

<div class="callout">
<b>Uji sederhana:</b> tanyakan — <i>"Kalau pesaing punya uang Rp10 triliun, bisakah mereka meniru bisnis ini dalam 2 tahun?"</i> Kalau <b>bisa</b> → paritnya lemah. Kalau <b>tidak</b> → ada parit nyata.
</div>

<h3>Parit menjelaskan angka</h3>
<p>Inilah penghubung ke materi kuantitatifmu: perusahaan yang bisa mempertahankan <b>ROIC tinggi bertahun-tahun</b> hampir selalu punya parit. Tanpa parit, persaingan akan menggerus return-nya menuju rata-rata.</p>

<div class="callout warn">
<b>Parit bisa terkikis!</b> Teknologi baru, perubahan selera, atau regulasi bisa menghancurkan parit yang dulu kokoh. Parit harus <b>terus dipantau</b>, bukan diasumsikan abadi.
</div>
`,
          keyPoints: [
            "Economic moat = keunggulan yang melindungi laba dari serbuan pesaing (analogi kastil & parit).",
            "Lima jenis: merek, network effect, switching cost, keunggulan biaya/skala, teknologi/paten/izin.",
            "Uji: bisakah pesaing bermodal raksasa menirunya dalam ~2 tahun? Bisa = parit lemah.",
            "Parit menjelaskan kenapa ROIC bisa tetap tinggi bertahun-tahun — tapi parit bisa terkikis & harus dipantau.",
          ],
          practice: [
            { type: "choice", q: "Sebuah marketplace makin bernilai bagi pembeli karena penjualnya makin banyak, dan sebaliknya. Ini jenis parit apa?", options: ["Switching cost", "Network effect", "Paten", "Keunggulan biaya"], answer: 1, hint: "Nilainya tumbuh seiring jumlah pengguna.", solution: "Makin banyak pengguna → makin bernilai = network effect." },
            { type: "choice", q: "Perusahaan enggan berganti sistem ERP karena migrasinya mahal, lama, & berisiko. Ini parit jenis?", options: ["Switching cost", "Merek", "Network effect", "Skala"], answer: 0, hint: "Hambatannya adalah biaya & kerepotan untuk pindah.", solution: "Biaya & kerepotan berpindah = switching cost." },
          ],
          quiz: [
            {
              q: "Apa fungsi 'economic moat'?",
              options: [
                "Melindungi laba dari serbuan pesaing sehingga bertahan lama",
                "Menjamin perusahaan bebas dari regulasi pemerintah",
                "Menaikkan harga saham dalam jangka pendek secara pasti",
                "Mengurangi pajak yang harus dibayar perusahaan",
              ],
              answer: 0,
              explain: "Parit menjaga keunggulan & profitabilitas agar tidak cepat digerus pesaing.",
            },
            {
              q: "Manakah pernyataan yang benar tentang moat?",
              options: [
                "Moat bisa terkikis oleh teknologi baru, perubahan selera, atau regulasi",
                "Moat yang sudah terbentuk bertahan selamanya tanpa perlu dijaga",
                "Moat hanya bisa dimiliki perusahaan dengan pangsa pasar terbesar",
                "Moat terbentuk otomatis begitu perusahaan punya merek terkenal",
              ],
              answer: 0,
              explain: "Parit harus dipantau terus karena bisa hancur oleh perubahan.",
            },
          ],
        },
        {
          id: "acc-kual-5",
          title: "Kualitas Manajemen",
          duration: "12 menit",
          content: `
<p>Bisnis bagus bisa dirusak manajemen buruk; bisnis biasa bisa diselamatkan manajemen hebat. Tapi bagaimana menilai manusia dengan "angka"? Ini yang dicari investor berpengalaman.</p>

<div data-diagram="matrix" data-cells="Pintar tapi tak jujur — BAHAYA|Ideal — cari yang ini|Hindari sepenuhnya|Jujur tapi boros modal" data-xlabel="Makin jujur &amp; transparan" data-ylabel="Makin pandai alokasi modal" data-caption="Manajemen dinilai dari dua sumbu — pintar saja tidak cukup"></div>


<h3>Ciri manajemen yang baik</h3>
<ul>
  <li><b>Fokus &amp; disiplin</b> — tahu bisnis intinya, tidak tergoda melompat ke segala peluang.</li>
  <li><b>Konsisten</b> — strateginya tidak berubah-ubah tiap tahun.</li>
  <li><b>Berorientasi jangka panjang</b> — mau mengorbankan laba jangka pendek demi posisi jangka panjang.</li>
  <li><b>Menghargai talenta</b> — merekrut & mempertahankan orang-orang terbaik; tim kuat melipatgandakan hasil.</li>
  <li><b>Skin in the game</b> — manajemen ikut memiliki saham, sehingga <b>untung-ruginya sejalan</b> dengan pemilik lain.</li>
</ul>

<div class="callout">
<b>Cara menilainya (praktis):</b> baca <b>laporan tahunan beberapa tahun ke belakang</b>. Apakah janji tahun lalu <b>ditepati</b>? Apakah mereka <b>mengakui kegagalan</b> dengan jujur, atau selalu menyalahkan keadaan? Rekam jejak berbicara lebih keras daripada visi di slide presentasi.
</div>

<h3>🚩 Tanda bahaya manajemen</h3>
<ul>
  <li>Strategi berganti-ganti; ikut tren tanpa arah.</li>
  <li>Terlalu banyak berjanji, jarang menepati.</li>
  <li>Akuisisi jor-joran untuk terlihat "besar".</li>
  <li>Kompensasi diri sendiri sangat besar meski kinerja buruk.</li>
  <li>Laporan tidak transparan / sulit dipahami.</li>
</ul>

<div class="callout warn">
<b>Hubungkan dengan pelajaran Alokasi Modal:</b> manajemen yang baik terlihat dari <b>keputusan alokasi modalnya</b>. Itu bukti nyata, bukan sekadar retorika.
</div>
`,
          keyPoints: [
            "Ciri manajemen baik: fokus, disiplin, konsisten, berorientasi jangka panjang, menghargai talenta, & skin in the game.",
            "Cara menilai: baca laporan tahunan beberapa tahun — apakah janji ditepati & kegagalan diakui jujur.",
            "Red flag: strategi berubah-ubah, over-promise, akuisisi jor-joran, kompensasi berlebihan, laporan tidak transparan.",
            "Bukti terbaik kualitas manajemen adalah rekam jejak keputusan alokasi modalnya.",
          ],
          quiz: [
            {
              q: "Apa arti 'skin in the game' pada manajemen?",
              options: [
                "Manajemen ikut memiliki saham, sehingga kepentingannya sejalan dengan pemilik",
                "Manajemen dibayar gaji tinggi agar tidak pindah ke perusahaan pesaing",
                "Manajemen menanggung seluruh kerugian perusahaan secara pribadi",
                "Manajemen wajib bekerja langsung di lapangan bersama karyawan",
              ],
              answer: 0,
              explain:
                "Kepemilikan saham menyelaraskan untung-rugi manajemen dengan pemegang saham.",
            },
            {
              q: "Cara paling praktis menilai kualitas manajemen?",
              options: [
                "Membaca laporan tahunan beberapa tahun: janji ditepati, gagal diakui jujur",
                "Melihat seberapa sering CEO tampil di media massa dan acara-acara publik",
                "Membandingkan besarnya gaji CEO dengan CEO pesaing di industri yang sama",
                "Melihat gelar pendidikan dan nama universitas asal para direkturnya",
              ],
              answer: 0,
              explain: "Rekam jejak & kejujuran laporan lebih bermakna daripada retorika.",
            },
          ],
        },
        {
          id: "acc-kual-6",
          title: "Pola Pemenang & Jurang Kehancuran",
          duration: "13 menit",
          content: `
<p>Kita tutup dengan rangkuman praktis: ciri bisnis yang cenderung menang, dan jebakan yang sering menjatuhkan.</p>

<div data-diagram="matrix" data-cells="Tumbuh tapi bakar uang — rapuh|Pemenang — tumbuh &amp; hasilkan kas|Menyusut &amp; merugi — jurang|Stabil tapi stagnan" data-xlabel="Makin besar arus kas bebas" data-ylabel="Makin cepat tumbuh" data-caption="Pertumbuhan tanpa kas adalah jebakan — perhatikan kuadran kiri atas"></div>


<h3>✅ Pola bisnis pemenang</h3>
<table class="tbl">
  <tr><th>Pola</th><th>Kenapa penting</th></tr>
  <tr><td><b>Pendapatan mudah ditebak</b></td><td>Berulang/langganan → perencanaan mudah, risiko rendah</td></tr>
  <tr><td><b>Pricing power</b></td><td>Bisa menaikkan harga tanpa kehilangan pelanggan (tanda parit &amp; merek kuat)</td></tr>
  <tr><td><b>Scale advantage</b></td><td>Makin besar → makin efisien → makin sulit dikejar</td></tr>
  <tr><td><b>Utang rendah</b></td><td>Tahan menghadapi krisis; tidak dipaksa menjual aset saat sulit</td></tr>
</table>

<h3>⚠️ Lima jurang kehancuran</h3>
<ol>
  <li><b>Sindrom katak rebus</b> — perusahaan menurun <b>perlahan</b> sehingga tak terasa, sampai terlambat. Dalam bisnis, <b>diam = mundur</b>: pesaing bergerak, biaya naik, selera berubah.</li>
  <li><b>Red flag akuntansi</b> — laba naik tapi <b>arus kas</b> tidak; piutang & persediaan menumpuk lebih cepat dari penjualan; utang membengkak. (Contoh nyatanya ada di pelajaran <i>Studi Kasus: Membaca Laporan Perusahaan</i>.)</li>
  <li><b>Risiko konsentrasi</b> — bergantung pada <b>satu</b> hal: satu pelanggan besar, satu pemasok, satu produk, atau proyek/regulasi pemerintah. Jika sumber itu berubah, bisnis goyah.</li>
  <li><b>Gagal berinovasi teknologi</b> — pemimpin pasar yang mengabaikan teknologi baru bisa runtuh sangat cepat (banyak contoh historis).</li>
  <li><b>Selera konsumen berubah</b> — pilihannya cuma dua: <b>beradaptasi atau mati</b>.</li>
</ol>

<div class="callout">
<b>Cara memakai kerangka ini:</b> gabungkan dengan sisi kuantitatif. Angka (rasio, Z-Score, DCF) memberitahu <b>"seberapa sehat sekarang"</b>; kualitas bisnis (moat, manajemen, alokasi modal) memberitahu <b>"apakah kesehatan itu bisa bertahan"</b>. Investor & pemilik bisnis terbaik memakai <b>keduanya</b>.
</div>

<div class="callout warn">
<b>Pengingat:</b> seluruh materi ini <b>edukasi, bukan saran finansial/investasi</b>. Kerangka kualitatif membantu berpikir lebih tajam, tapi tidak menjamin hasil.
</div>
`,
          keyPoints: [
            "Pola pemenang: pendapatan mudah ditebak, pricing power, scale advantage, & utang rendah.",
            "Jurang: sindrom katak rebus (diam = mundur), red flag akuntansi, risiko konsentrasi, gagal berinovasi, & selera konsumen berubah.",
            "Red flag akuntansi utama: laba naik tapi arus kas tidak; piutang/persediaan menumpuk; utang membengkak.",
            "Gabungkan kuantitatif ('seberapa sehat sekarang') dengan kualitatif ('apakah bisa bertahan').",
          ],
          practice: [
            { type: "choice", q: "Perusahaan memperoleh 70% pendapatannya dari satu pelanggan besar. Ini termasuk?", options: ["Scale advantage", "Risiko konsentrasi", "Pricing power", "Economic moat"], answer: 1, hint: "Bergantung pada satu sumber saja.", solution: "Ketergantungan pada satu pelanggan/pemasok/regulasi = risiko konsentrasi." },
            { type: "choice", q: "Laba perusahaan naik terus, tapi arus kas operasinya stagnan dan piutang menumpuk. Ini pertanda?", options: ["Bisnis sangat sehat", "Red flag akuntansi yang perlu diselidiki", "Pricing power kuat", "Moat melebar"], answer: 1, hint: "Laba tanpa kas nyata itu sinyal apa?", solution: "Laba naik tanpa dukungan kas & piutang menumpuk adalah red flag klasik." },
          ],
          quiz: [
            {
              q: "Apa maksud 'sindrom katak rebus' dalam bisnis?",
              options: [
                "Perusahaan menurun perlahan sehingga tak terasa sampai terlambat",
                "Perusahaan tumbuh terlalu cepat hingga kewalahan melayani pelanggan",
                "Perusahaan bangkrut mendadak akibat satu keputusan besar yang keliru",
                "Perusahaan memindahkan pabrik ke lokasi dengan biaya lebih murah",
              ],
              answer: 0,
              explain:
                "Penurunan bertahap sulit disadari; tanpa terus berkembang, perusahaan tertinggal.",
            },
            {
              q: "Kenapa utang rendah termasuk pola bisnis pemenang?",
              options: [
                "Membuat perusahaan tahan krisis dan tak terpaksa menjual aset saat sulit",
                "Membuat laba perusahaan selalu lebih besar daripada pesaingnya",
                "Membebaskan perusahaan dari kewajiban membayar pajak penghasilan",
                "Membuat harga saham perusahaan tidak pernah turun",
              ],
              answer: 0,
              explain: "Utang rendah memberi daya tahan & fleksibilitas saat kondisi memburuk.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 12: MENGANALISIS BANK & LEMBAGA KEUANGAN ---------------- */
    {
      id: "acc-bank",
      level: "Perbankan",
      title: "Menganalisis Bank & Lembaga Keuangan",
      summary: "Bank tidak bisa dinilai dengan alat biasa. Pelajari CASA & biaya dana, NIM, LDR, NPL & CKPN, CAR, lalu menilai sahamnya lewat PBV & ROE.",
      lessons: [
        {
          id: "acc-bank-1",
          title: "Kenapa Bank Tidak Bisa Dinilai seperti Perusahaan Biasa",
          duration: "13 menit",
          content: `
<p>Semua alat yang sudah kamu kuasai — Free Cash Flow, DER, EV/EBITDA — <b>gagal total</b> saat dipakai menilai bank. Bukan karena alatnya salah, tapi karena bisnis bank memang berbeda secara mendasar. Pelajaran ini menjelaskan kenapa.</p>

<div data-diagram="compare3" data-cols="Perusahaan biasa::Bahan baku: barang::Utang = beban|Bank::Bahan baku: UANG TITIPAN::Utang = bahan baku|Akibatnya::Rasio utang tak berarti::Butuh alat sendiri" data-caption="Satu perbedaan ini mengubah seluruh cara menilainya"></div>

<h3>Fundamental: apa yang sebenarnya dijual bank?</h3>
<div class="callout">
Bank tidak menjual barang. Ia <b>meminjam uang dari banyak orang dengan bunga rendah</b>, lalu <b>meminjamkannya kembali dengan bunga lebih tinggi</b>. Selisihnya adalah keuntungannya.<br><br>
Jadi bagi bank, <b>uang adalah bahan baku sekaligus barang dagangan</b>.
</div>

<p>Uang titipan nasabah itu punya nama resmi: <b>DPK — Dana Pihak Ketiga</b>. Dalam neraca bank, DPK dicatat sebagai <b>kewajiban</b> (utang bank kepada nasabah), karena memang suatu saat harus dikembalikan.</p>

<h3>Di sinilah alat lama patah</h3>
<table class="tbl">
  <tr><th>Alat</th><th>Kenapa gagal untuk bank</th></tr>
  <tr><td><b>DER</b> (utang ÷ modal)</td><td>DER bank bisa <b>8–12×</b> dan itu <b>normal</b>. Di perusahaan biasa angka segitu berarti nyaris bangkrut. Bagi bank, "utang" itu justru bahan bakunya.</td></tr>
  <tr><td><b>Free Cash Flow</b></td><td>Bank tidak punya CapEx pabrik. Arus kasnya naik-turun mengikuti penyaluran kredit &amp; penarikan dana — bukan cerminan kesehatan.</td></tr>
  <tr><td><b>EV/EBITDA</b></td><td>Enterprise Value = kapitalisasi + utang − kas. Untuk bank, "utang" dan "kas" adalah <b>operasi intinya</b>, jadi rumusnya kehilangan makna.</td></tr>
  <tr><td><b>Perputaran persediaan</b></td><td>Tidak ada persediaan.</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Kesalahan paling umum pemula:</b> melihat DER bank 9× lalu menyimpulkan "bank ini sangat berisiko, hindari". Padahal itu justru struktur normal perbankan. Yang benar-benar mengukur risiko bank adalah <b>CAR</b> dan <b>NPL</b> — dua hal yang akan kita pelajari nanti.
</div>

<h3>Lalu alat apa yang dipakai?</h3>
<table class="tbl">
  <tr><th>Ukuran</th><th>Menjawab pertanyaan</th></tr>
  <tr><td><b>CASA</b></td><td>Seberapa <b>murah</b> bahan bakunya?</td></tr>
  <tr><td><b>NIM</b></td><td>Seberapa lebar <b>margin</b>-nya?</td></tr>
  <tr><td><b>LDR</b></td><td>Seberapa agresif dananya <b>disalurkan</b>?</td></tr>
  <tr><td><b>NPL &amp; CKPN</b></td><td>Seberapa banyak kredit yang <b>macet</b>?</td></tr>
  <tr><td><b>CAR</b></td><td>Seberapa tebal <b>bantalan modal</b>-nya?</td></tr>
  <tr><td><b>PBV &amp; ROE</b></td><td>Sahamnya <b>mahal atau murah</b>?</td></tr>
</table>

<h3>Kenapa bank diatur sangat ketat</h3>
<p>Kalau sebuah pabrik bangkrut, yang rugi pemilik dan karyawannya. Kalau sebuah <b>bank</b> bangkrut, <b>uang tabungan ribuan orang ikut hilang</b> — dan kepanikan bisa menular ke bank lain (<i>bank run</i>). Itu sebabnya bank diawasi ketat oleh <b>OJK</b>, dan simpanan nasabah dijamin <b>LPS</b> sampai batas tertentu.</p>

<div class="callout">
<b>Konsekuensinya bagi kita sebagai penganalisis:</b> bank tidak bebas menentukan seberapa besar risiko yang diambil. Ada batas modal minimum, batas pemberian kredit, dan kewajiban mencadangkan kerugian. Aturan ini <b>membatasi keuntungan</b>, tapi juga membuat bank yang sehat jadi <b>sangat sulit disaingi pendatang baru</b>.
</div>
`,
          keyPoints: [
            "Bank meminjam murah lalu meminjamkan lebih mahal; uang adalah bahan baku sekaligus barang dagangannya.",
            "DPK (Dana Pihak Ketiga) = uang titipan nasabah, dicatat sebagai kewajiban di neraca bank.",
            "DER bank 8–12× itu normal, bukan tanda bahaya — 'utang' bagi bank adalah bahan baku.",
            "FCF, EV/EBITDA, dan perputaran persediaan tidak berlaku untuk bank.",
            "Alat yang benar: CASA (biaya bahan baku), NIM (margin), LDR (penyaluran), NPL & CKPN (kredit macet), CAR (bantalan modal), PBV & ROE (valuasi).",
            "Bank diatur ketat karena kegagalannya menular; aturan itu membatasi laba tapi juga menghambat pendatang baru.",
          ],
          quiz: [
            {
              q: "Kenapa DER sebuah bank bisa 9× dan tetap dianggap normal?",
              options: [
                "'Utang' bank adalah dana nasabah — bahan baku bisnisnya, bukan beban biasa",
                "Bank dikecualikan dari aturan batas utang yang berlaku umum",
                "Utang bank seluruhnya dijamin pemerintah sehingga tanpa risiko",
                "DER bank dihitung memakai rumus yang berbeda dari perusahaan lain",
              ],
              answer: 0,
              explain:
                "Bank hidup dari menghimpun dana. Dana itu tercatat sebagai kewajiban, sehingga rasio utangnya secara alami sangat tinggi.",
            },
            {
              q: "Kenapa Free Cash Flow tidak cocok untuk menilai bank?",
              options: [
                "Bank tak punya CapEx pabrik; arus kasnya mengikuti kredit & penarikan dana",
                "Bank tidak diwajibkan menyusun laporan arus kas sama sekali oleh regulator",
                "FCF bank selalu bernilai nol karena seluruh kasnya disalurkan sebagai kredit",
                "FCF hanya bisa dihitung untuk perusahaan yang rutin membayar dividen tunai",
              ],
              answer: 0,
              explain:
                "FCF dirancang untuk bisnis yang membeli aset tetap. Arus kas bank naik-turun karena aktivitas intinya sendiri.",
            },
            {
              q: "Kenapa bank diawasi jauh lebih ketat daripada perusahaan biasa?",
              options: [
                "Kegagalan bank menghilangkan tabungan masyarakat dan bisa menular",
                "Bank memperoleh laba jauh lebih besar daripada perusahaan lain",
                "Bank tidak membayar pajak sehingga harus diawasi lebih ketat",
                "Seluruh bank di Indonesia dimiliki langsung oleh pemerintah",
              ],
              answer: 0,
              explain:
                "Risiko sistemik inilah alasan adanya OJK, batas modal minimum, dan penjaminan LPS.",
            },
          ],
        },
        {
          id: "acc-bank-2",
          title: "CASA & Biaya Dana — Jantung Keunggulan Bank",
          duration: "15 menit",
          content: `
<p>Kalau hanya boleh melihat <b>satu angka</b> untuk menilai kualitas sebuah bank, banyak analis akan memilih <b>CASA</b>. Pelajaran ini menjelaskan kenapa.</p>

<div data-diagram="stack" data-parts="Giro (bunga ~0-2%):25|Tabungan (bunga ~1-2%):40|Deposito (bunga ~4-7%):35" data-caption="Contoh komposisi DPK. Dua kotak pertama adalah CASA — dana murah."></div>

<h3>Fundamental: tidak semua titipan sama harganya</h3>
<p><b>CASA</b> singkatan dari <b>Current Account Saving Account</b> — dalam bahasa Indonesia: <b>Giro + Tabungan</b>.</p>

<table class="tbl">
  <tr><th>Jenis</th><th>Bunga yang dibayar bank</th><th>Sifatnya</th></tr>
  <tr><td><b>Giro</b> <i>(current account)</i></td><td class="ok-cell">Hampir nol</td><td>Rekening transaksi bisnis, uang keluar-masuk terus</td></tr>
  <tr><td><b>Tabungan</b> <i>(saving account)</i></td><td class="ok-cell">Rendah</td><td>Rekening harian orang biasa</td></tr>
  <tr><td><b>Deposito</b> <i>(time deposit)</i></td><td><b>Tinggi</b></td><td>Uang dikunci beberapa bulan, nasabah mengejar bunga</td></tr>
</table>

<div class="callout">
🏪 <b>Analogi warung.</b> Giro &amp; tabungan itu <b>bahan baku murah</b>; deposito itu <b>bahan baku mahal</b>. Dua warung menjual dengan harga jual sama — yang bahan bakunya lebih murah, untungnya lebih besar. Sesederhana itu.
</div>

<h3>Rumusnya</h3>
<div class="callout">
<b>Rasio CASA</b> = (Giro + Tabungan) ÷ Total DPK × 100%<br><br>
<i>Contoh:</i> DPK Rp100 T = giro Rp25 T + tabungan Rp40 T + deposito Rp35 T<br>
<b>CASA = 65 ÷ 100 = 65%</b>
</div>

<p>Angka pasangannya adalah <b>biaya dana</b> (<i>cost of funds</i>): rata-rata bunga yang dibayar bank atas seluruh DPK-nya. Makin tinggi CASA, makin rendah biaya dana.</p>

<h3>Coba sendiri</h3>
<p>Kalkulator ini menghubungkan komposisi dana → biaya dana → NIM. Ubah angkanya dan rasakan hubungannya:</p>

<div data-demo="casa-nim"></div>

<h3>🏰 CASA sebenarnya adalah moat</h3>
<p>Ingat pelajaran <b>Economic Moat</b>? CASA tinggi adalah salah satu parit paling nyata di dunia bisnis, karena <b>sangat sulit ditiru</b>. Sumbernya:</p>
<ul>
  <li><b>Jaringan cabang &amp; ATM</b> yang luas — butuh puluhan tahun dan modal besar.</li>
  <li><b>Rekening payroll</b> — gaji karyawan otomatis masuk tiap bulan. Nasabah malas pindah.</li>
  <li><b>Ekosistem transaksi</b> — orang menaruh uang di situ karena <b>bertransaksi</b> di situ, bukan karena mengejar bunga.</li>
  <li><b>Kepercayaan</b> yang dibangun puluhan tahun.</li>
</ul>

<div class="callout warn">
<b>Kenapa pesaing sulit mengejar:</b> bank lain bisa saja menaikkan bunga deposito untuk menarik dana besar-besaran. Tapi itu <b>dana mahal</b> — biaya dananya naik, NIM-nya tergerus. Menarik <b>dana murah</b> butuh ekosistem &amp; kebiasaan nasabah, bukan sekadar promo. Inilah <i>switching cost</i> dalam wujud paling nyata.
</div>

<h3>🚩 Tiga hal yang wajib diwaspadai</h3>
<ol>
  <li><b>CASA turun saat suku bunga naik.</b> Ketika bunga deposito jadi menarik, nasabah memindahkan uangnya ke sana. Perhatikan <b>trennya beberapa kuartal</b>, jangan satu titik.</li>
  <li><b>Kualitas CASA berbeda-beda.</b> Giro dari segelintir korporasi besar mudah kabur sekaligus. Tabungan dari jutaan nasabah ritel jauh lebih <b>lengket</b> — walau nominal CASA-nya sama.</li>
  <li><b>CASA tinggi tapi saldo per rekening kecil.</b> Sering terjadi pada bank digital yang bakar promo: jumlah rekening banyak, dananya tipis, dan nasabah pergi begitu promonya berhenti.</li>
</ol>

<div class="callout">
<b>Hubungannya dengan valuasi:</b> CASA tinggi → biaya dana rendah → NIM lebar → <b>ROE tinggi</b>. Dan seperti akan kita lihat di pelajaran terakhir modul ini, ROE tinggi itulah yang membuat sebuah bank pantas dihargai <b>PBV mahal</b>. Rantainya lurus dari CASA sampai harga saham.
</div>
`,
          keyPoints: [
            "CASA = Current Account Saving Account = Giro + Tabungan = dana murah bank.",
            "Rasio CASA = (Giro + Tabungan) ÷ Total DPK × 100%.",
            "Deposito adalah dana mahal; makin besar porsinya, makin tinggi biaya dana bank.",
            "CASA tinggi → biaya dana rendah → NIM lebar → ROE tinggi → PBV dihargai mahal.",
            "CASA adalah moat: bersumber dari jaringan, rekening payroll, ekosistem transaksi, dan kepercayaan — sulit ditiru dengan promo.",
            "Waspadai: CASA turun saat bunga naik, giro korporasi lebih mudah kabur daripada tabungan ritel, dan CASA bank digital sering bersaldo tipis.",
          ],
          practice: [
            { type: "number", q: "DPK sebuah bank Rp200 T: giro Rp40 T, tabungan Rp90 T, deposito Rp70 T. Berapa rasio CASA-nya (dalam %)?", answer: 65, tol: 0.5, hint: "(Giro + Tabungan) ÷ DPK × 100%.", solution: "(40 + 90) ÷ 200 = 130 ÷ 200 = 65%." },
            { type: "number", q: "Bank membayar bunga total Rp5 T atas DPK Rp150 T. Berapa biaya dananya (dalam %)?", answer: 3.33, tol: 0.1, hint: "Beban bunga ÷ DPK × 100%.", solution: "5 ÷ 150 = 3,33%." },
          ],
          quiz: [
            {
              q: "CASA adalah singkatan dari?",
              options: [
                "Current Account Saving Account — Giro + Tabungan",
                "Cash And Saving Assets — Kas + Aset Simpanan",
                "Capital Adequacy Saving Account — Modal + Tabungan",
                "Credit And Security Analysis — Kredit + Agunan",
              ],
              answer: 0,
              explain: "CASA menggabungkan dua jenis simpanan berbunga rendah: giro dan tabungan.",
            },
            {
              q: "Kenapa bank berebut CASA, bukan sekadar mengejar DPK sebesar-besarnya?",
              options: [
                "CASA adalah dana murah — biaya dananya rendah sehingga NIM lebih lebar",
                "CASA dijamin penuh oleh LPS sedangkan deposito tidak dijamin",
                "CASA bisa langsung dihitung sebagai modal inti bank",
                "Deposito dilarang disalurkan sebagai kredit oleh regulator",
              ],
              answer: 0,
              explain:
                "Menghimpun dana lewat deposito itu mudah (tinggal naikkan bunga), tapi mahal. Dana murah yang sulit didapat.",
            },
            {
              q: "Sebuah bank digital melaporkan CASA 90%. Apa yang perlu diperiksa lebih dulu?",
              options: [
                "Saldo rata-rata tiap rekening & apakah nasabah bertahan setelah promo usai",
                "Jumlah karyawan dan banyaknya cabang fisik yang dimiliki bank tersebut",
                "Besarnya bunga deposito yang ditawarkan bank itu kepada nasabah barunya",
                "Jumlah pengunduh aplikasi mobile bank tersebut di toko aplikasi resmi",
              ],
              answer: 0,
              explain:
                "CASA tinggi dengan saldo tipis dan nasabah yang datang karena promo tidak memberi keunggulan biaya yang tahan lama.",
            },
            {
              q: "Saat Bank Indonesia menaikkan suku bunga secara agresif, apa yang biasanya terjadi pada CASA?",
              options: [
                "Cenderung turun, karena nasabah memindahkan dana ke deposito",
                "Cenderung naik, karena nasabah menabung lebih banyak saat bunga tinggi",
                "Tidak berubah, karena CASA tak dipengaruhi suku bunga acuan",
                "Otomatis berubah menjadi modal inti bank",
              ],
              answer: 0,
              explain:
                "Inilah sebabnya tren CASA perlu dibaca bersama siklus suku bunga, bukan dinilai dari satu kuartal.",
            },
          ],
        },
        {
          id: "acc-bank-3",
          title: "NIM, LDR & Efisiensi Bank",
          duration: "13 menit",
          content: `
<p>CASA memberi tahu seberapa murah bahan bakunya. Sekarang tiga ukuran berikutnya: seberapa <b>lebar</b> marginnya, seberapa <b>agresif</b> penyalurannya, dan seberapa <b>hemat</b> operasinya.</p>

<div data-diagram="pipeline" data-stages="Himpun dana::bayar bunga rendah|Salurkan kredit::tagih bunga tinggi|Selisihnya::laba bunga bersih|Dibagi aset produktif::= NIM" data-caption="Dari menghimpun dana sampai jadi NIM"></div>

<h3>1. NIM — Net Interest Margin</h3>
<div class="callout">
<b>NIM</b> = (Pendapatan bunga − Beban bunga) ÷ Aset produktif × 100%<br>
<i>Ini adalah "margin kotor"-nya sebuah bank.</i>
</div>
<p>Bank di Indonesia umumnya ber-NIM sekitar <b>4–6%</b> — relatif tinggi dibanding banyak negara lain. NIM dipengaruhi dua sisi: <b>biaya dana</b> (turun kalau CASA tinggi) dan <b>imbal hasil kredit</b> (naik kalau menyalurkan ke segmen berisiko lebih tinggi seperti mikro dan konsumer).</p>

<div class="callout warn">
<b>⚠️ NIM tinggi belum tentu kabar baik.</b> Bank yang menyalurkan kredit mikro bisa ber-NIM 8%, tapi kredit macetnya juga jauh lebih besar. <b>NIM tinggi + NPL tinggi</b> artinya bank itu dibayar mahal karena menanggung risiko besar — bukan karena unggul. Selalu baca NIM bersama NPL.
</div>

<h3>2. LDR — Loan to Deposit Ratio</h3>
<div class="callout">
<b>LDR</b> = Total Kredit ÷ Total DPK × 100%<br>
<i>Seberapa besar dana titipan yang sudah disalurkan menjadi kredit.</i>
</div>

<table class="tbl">
  <tr><th>LDR</th><th>Artinya</th></tr>
  <tr><td><b>Terlalu rendah</b> (&lt; 70%)</td><td>Banyak dana menganggur — bank membayar bunga tapi tidak menghasilkan. Boros.</td></tr>
  <tr><td class="ok-cell"><b>Sehat</b> (± 80–92%)</td><td>Dana bekerja optimal, likuiditas masih aman.</td></tr>
  <tr><td><b>Terlalu tinggi</b> (&gt; 95%)</td><td>Rawan. Kalau banyak nasabah menarik dana bersamaan, bank kesulitan membayar.</td></tr>
</table>

<p>Regulator memantau rasio ini justru karena bank punya godaan alami untuk menyalurkan sebanyak mungkin demi laba — sampai lupa menyisakan bantalan likuiditas.</p>

<h3>3. BOPO / CIR — ukuran efisiensi</h3>
<div class="callout">
<b>BOPO</b> = Beban Operasional ÷ Pendapatan Operasional × 100%<br>
Versi internasionalnya disebut <b>CIR</b> (Cost to Income Ratio).<br><br>
<b>Makin kecil makin baik</b> — kebalikan dari kebanyakan rasio yang sudah kamu pelajari.
</div>
<p>BOPO di bawah <b>±70%</b> umumnya dianggap efisien. Angka ini mengukur berapa banyak biaya (gaji, cabang, teknologi) yang dihabiskan untuk menghasilkan setiap rupiah pendapatan.</p>

<div class="callout">
<b>Kenapa bank berlomba ke digital:</b> satu cabang fisik butuh gedung, sewa, dan belasan karyawan. Aplikasi mobile melayani jutaan nasabah dengan biaya tambahan mendekati nol. Itulah mengapa BOPO bank yang berhasil bertransformasi digital turun tajam — dan kenapa transformasi ini jadi pertaruhan besar industri.
</div>

<h3>Membaca ketiganya bersamaan</h3>
<table class="tbl">
  <tr><th>Pola</th><th>Kemungkinan artinya</th></tr>
  <tr><td class="ok-cell">NIM lebar + BOPO rendah + NPL rendah</td><td>Bank berkualitas tinggi. Inilah yang dihargai mahal pasar.</td></tr>
  <tr><td>NIM lebar + NPL tinggi</td><td>Dibayar mahal karena menanggung risiko besar, bukan karena unggul.</td></tr>
  <tr><td>NIM tipis + BOPO tinggi</td><td>Terjepit dari dua sisi. Sulit menghasilkan ROE yang layak.</td></tr>
  <tr><td>LDR sangat tinggi + CASA rendah</td><td>Rawan: pendanaan mahal <b>dan</b> likuiditas tipis.</td></tr>
</table>
`,
          keyPoints: [
            "NIM = (Pendapatan bunga − Beban bunga) ÷ Aset produktif — 'margin kotor' sebuah bank; di Indonesia umumnya 4–6%.",
            "NIM tinggi bisa berarti menanggung risiko lebih besar (kredit mikro) — selalu baca bersama NPL.",
            "LDR = Kredit ÷ DPK; terlalu rendah berarti dana menganggur, terlalu tinggi berarti likuiditas rawan. Sehat sekitar 80–92%.",
            "BOPO (atau CIR) = Beban operasional ÷ Pendapatan operasional; makin KECIL makin efisien, di bawah ~70% dianggap baik.",
            "Digitalisasi menurunkan BOPO karena melayani nasabah tambahan hampir tanpa biaya tambahan.",
            "Kombinasi terbaik: NIM lebar + BOPO rendah + NPL rendah.",
          ],
          practice: [
            { type: "number", q: "Kredit Rp170 T, DPK Rp200 T. Berapa LDR-nya (dalam %)?", answer: 85, tol: 0.5, hint: "Kredit ÷ DPK × 100%.", solution: "170 ÷ 200 = 85%." },
            { type: "number", q: "Beban operasional Rp42 M, pendapatan operasional Rp60 M. Berapa BOPO-nya (dalam %)?", answer: 70, tol: 0.5, hint: "Beban ÷ Pendapatan × 100%.", solution: "42 ÷ 60 = 70%." },
          ],
          quiz: [
            {
              q: "Bank A ber-NIM 8%, jauh di atas rata-rata industri 5%. Apa yang harus dicek pertama?",
              options: [
                "Cek NPL-nya — NIM tinggi sering datang dari kredit berisiko tinggi",
                "Cek jumlah cabangnya — NIM tinggi berasal dari jaringan yang luas",
                "Langsung simpulkan bank itu paling efisien di seluruh industri",
                "Cek harga sahamnya — NIM tinggi selalu diikuti harga yang naik",
              ],
              answer: 0,
              explain:
                "Imbal hasil tinggi hampir selalu berpasangan dengan risiko tinggi. NIM tanpa NPL adalah setengah cerita.",
            },
            {
              q: "LDR sebuah bank hanya 62%. Apa masalahnya?",
              options: [
                "Banyak dana menganggur — bank membayar bunga tapi dananya kurang menghasilkan",
                "Bank terlalu agresif menyalurkan kredit sehingga likuiditasnya rawan",
                "Bank pasti mengalami kredit macet dalam jumlah yang besar",
                "CASA bank tersebut otomatis tinggi karena LDR-nya rendah",
              ],
              answer: 0,
              explain:
                "Dana menganggur menekan profitabilitas. Aman berlebihan juga ada biayanya.",
            },
            {
              q: "BOPO turun dari 80% menjadi 68%. Artinya?",
              options: [
                "Bank makin efisien — biaya per rupiah pendapatan berkurang",
                "Bank makin boros — beban operasionalnya naik tajam",
                "Kredit macet bank itu meningkat cukup signifikan",
                "Pendapatan bunga bank itu turun sebesar dua belas persen",
              ],
              answer: 0,
              explain:
                "BOPO adalah rasio biaya: makin kecil makin baik. Turunnya BOPO biasanya langsung mengangkat laba.",
            },
          ],
        },
        {
          id: "acc-bank-4",
          title: "NPL & CKPN — Kualitas Kredit",
          duration: "14 menit",
          content: `
<p>Bank bisa punya CASA bagus, NIM lebar, dan BOPO rendah — lalu tetap <b>hancur</b> karena satu hal: kreditnya tidak kembali. Inilah risiko terbesar perbankan.</p>

<div data-diagram="scale" data-zones="Lancar|Dalam perhatian|Macet (NPL)" data-marks="1 hari telat|90 hari telat" data-caption="Perjalanan sebuah kredit dari lancar sampai dianggap macet"></div>

<h3>Fundamental: kapan kredit disebut "macet"?</h3>
<div class="callout">
<b>NPL — Non Performing Loan</b> adalah kredit yang menunggak pembayaran <b>lebih dari 90 hari</b>.<br><br>
<b>Rasio NPL</b> = Kredit bermasalah ÷ Total kredit × 100%
</div>

<p>Bank menggolongkan kredit dalam lima tingkat: <b>Lancar</b> → <b>Dalam Perhatian Khusus</b> → <b>Kurang Lancar</b> → <b>Diragukan</b> → <b>Macet</b>. Tiga yang terakhir dihitung sebagai NPL.</p>

<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th></tr>
  <tr><td><b>NPL Gross</b></td><td>Kredit bermasalah sebelum dikurangi cadangan. Angka apa adanya.</td></tr>
  <tr><td><b>NPL Net</b></td><td>Setelah dikurangi cadangan. Lebih kecil — dan lebih sering dipamerkan bank.</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Selalu lihat NPL Gross.</b> Ini pola yang perlu kamu kenali: ketika sebuah bank hanya menonjolkan "NPL net 0,8%" tanpa menyebut gross-nya, periksa sendiri di laporannya. Batas yang diawasi regulator adalah <b>NPL gross 5%</b>.
</div>

<h3>CKPN — bantalan kerugian</h3>
<div class="callout">
<b>CKPN</b> (Cadangan Kerugian Penurunan Nilai) adalah <b>uang yang disisihkan bank</b> untuk menutup kredit yang diperkirakan tidak kembali.<br><br>
CKPN dicatat sebagai <b>beban</b> — jadi menambah cadangan berarti <b>langsung menekan laba</b>.
</div>

<p>Ukuran kecukupannya disebut <b>coverage ratio</b>:</p>
<div class="callout">
<b>Coverage ratio</b> = CKPN ÷ Kredit bermasalah × 100%<br>
Di atas <b>100%</b> berarti seluruh kredit bermasalah sudah dicadangkan penuh — posisi konservatif dan aman.
</div>

<h3>💥 Di sinilah kecurangan sering bersembunyi</h3>
<p>Ingat pelajaran <b>Mendeteksi Manipulasi Laporan Keuangan</b>? CKPN adalah salah satu pos paling mudah dimainkan di seluruh laporan keuangan, karena besarnya <b>bergantung pada penilaian manajemen</b>.</p>

<table class="tbl">
  <tr><th>Trik</th><th>Efek jangka pendek</th><th>Akibatnya nanti</th></tr>
  <tr><td>Mencadangkan terlalu sedikit</td><td>Laba terlihat besar</td><td>Saat kredit benar-benar macet, kerugian meledak sekaligus</td></tr>
  <tr><td><b>Restrukturisasi</b> kredit bermasalah</td><td>NPL turun di atas kertas</td><td>Masalahnya hanya ditunda, bukan hilang</td></tr>
  <tr><td>Menghapusbukukan (<i>write-off</i>) besar-besaran</td><td>Rasio NPL langsung cantik</td><td>Modal tergerus diam-diam</td></tr>
</table>

<div class="callout warn">
<b>🚩 Tanda bahaya yang paling sering terlewat:</b> NPL <b>turun</b> sementara <b>kredit direstrukturisasi melonjak</b>. Artinya kredit bermasalah tidak sembuh — hanya dipindahkan ke kategori lain dengan mengubah syarat pembayarannya. Angka NPL-nya membaik, kenyataannya tidak.
</div>

<h3>Cara membacanya yang benar</h3>
<ol>
  <li>Lihat <b>NPL gross</b>, bukan net.</li>
  <li>Bandingkan dengan <b>rata-rata industri</b> dan dengan <b>sejarah bank itu sendiri</b>.</li>
  <li>Cek <b>coverage ratio</b> — apakah cadangannya memadai?</li>
  <li>Cek <b>kredit restrukturisasi</b> — apakah NPL turun karena sembuh atau karena dipindahkan?</li>
  <li>Perhatikan <b>di sektor mana</b> kreditnya menumpuk. Konsentrasi pada satu industri yang sedang lesu adalah risiko besar.</li>
</ol>

<div class="callout">
<b>Kenapa ini menentukan hidup-mati bank:</b> dengan DER sekitar 9×, modal bank hanya sekitar <b>10%</b> dari asetnya. Artinya, kalau <b>10% kreditnya</b> benar-benar hilang, <b>seluruh modalnya habis</b>. Itu sebabnya NPL yang naik dari 2% ke 5% terdengar kecil, tapi sebenarnya sangat serius.
</div>
`,
          keyPoints: [
            "NPL = kredit menunggak lebih dari 90 hari; rasio NPL = kredit bermasalah ÷ total kredit.",
            "Selalu pakai NPL Gross (sebelum cadangan), bukan NPL Net yang lebih enak dipandang. Batas pengawasan regulator 5%.",
            "CKPN = cadangan kerugian kredit; dicatat sebagai beban sehingga menambahnya langsung menekan laba.",
            "Coverage ratio = CKPN ÷ kredit bermasalah; di atas 100% berarti tercadangkan penuh.",
            "Trik yang sering dipakai: mencadangkan terlalu sedikit, merestrukturisasi kredit bermasalah, dan write-off besar-besaran.",
            "Tanda bahaya utama: NPL turun tapi kredit restrukturisasi melonjak — masalah ditunda, bukan selesai.",
            "Karena modal bank hanya ~10% dari aset, kehilangan 10% kredit bisa menghabiskan seluruh modalnya.",
          ],
          practice: [
            { type: "number", q: "Total kredit Rp500 T, kredit bermasalah Rp15 T. Berapa NPL gross-nya (dalam %)?", answer: 3, tol: 0.1, hint: "Kredit bermasalah ÷ Total kredit × 100%.", solution: "15 ÷ 500 = 3%." },
            { type: "number", q: "Kredit bermasalah Rp15 T, CKPN Rp18 T. Berapa coverage ratio-nya (dalam %)?", answer: 120, tol: 1, hint: "CKPN ÷ Kredit bermasalah × 100%.", solution: "18 ÷ 15 = 120% — tercadangkan penuh, posisi konservatif." },
          ],
          quiz: [
            {
              q: "Sebuah kredit disebut NPL bila menunggak lebih dari?",
              options: ["7 hari", "30 hari", "90 hari", "1 tahun"],
              answer: 2,
              explain: "Ambang 90 hari adalah standar yang dipakai secara umum di perbankan.",
            },
            {
              q: "Kenapa menambah CKPN langsung menekan laba bank?",
              options: [
                "Karena CKPN dicatat sebagai beban pada laporan laba rugi",
                "Karena CKPN dibagikan sebagai dividen kepada pemegang saham",
                "Karena CKPN langsung mengurangi jumlah dana pihak ketiga",
                "Karena CKPN wajib disetorkan tunai kepada regulator perbankan",
              ],
              answer: 0,
              explain:
                "Mencadangkan berarti mengakui kerugian lebih awal — jujur, tapi menyakitkan bagi laba tahun berjalan.",
            },
            {
              q: "NPL sebuah bank turun dari 4% ke 2%, tapi kredit restrukturisasi melonjak tajam. Kesimpulan yang paling tepat?",
              options: [
                "Kredit bermasalah kemungkinan hanya dipindah kategorinya, bukan sembuh",
                "Bank berhasil memulihkan sebagian besar kredit bermasalahnya",
                "Bank sedang menyalurkan kredit baru dalam jumlah yang besar",
                "Coverage ratio bank itu pasti ikut naik mengikuti penurunan NPL",
              ],
              answer: 0,
              explain:
                "Restrukturisasi mengubah syarat pembayaran sehingga kredit keluar dari hitungan NPL, padahal risikonya masih ada.",
            },
            {
              q: "Kenapa kenaikan NPL dari 2% ke 5% dianggap sangat serius, padahal angkanya terlihat kecil?",
              options: [
                "Modal bank hanya sekitar 10% asetnya, jadi kerugian kredit cepat menggerus modal",
                "Regulator langsung mencabut izin bank yang NPL-nya di atas empat persen",
                "NPL yang naik otomatis menurunkan CASA bank tersebut",
                "Nasabah berhak menarik seluruh tabungannya saat NPL naik",
              ],
              answer: 0,
              explain:
                "Dengan leverage sekitar 9×, kerugian kecil pada aset menjadi kerugian besar pada modal.",
            },
          ],
        },
        {
          id: "acc-bank-5",
          title: "CAR & Permodalan Bank",
          duration: "12 menit",
          content: `
<p>Kalau NPL adalah ukuran <b>seberapa besar lukanya</b>, maka <b>CAR</b> adalah ukuran <b>seberapa kuat bank menahan luka itu</b>.</p>

<div data-diagram="layers" data-items="Modal inti (CET1) — penyerap kerugian pertama|Modal pelengkap — lapisan berikutnya|Aset tertimbang risiko (ATMR) — yang harus ditopang" data-caption="Struktur permodalan bank"></div>

<h3>Fundamental: kenapa bank wajib punya modal minimum?</h3>
<div class="callout">
Bank beroperasi dengan uang orang lain. <b>Modal sendiri</b> adalah bantalan yang menyerap kerugian <b>lebih dulu</b>, sebelum uang nasabah tersentuh.<br><br>
Tanpa aturan modal minimum, bank punya godaan untuk beroperasi dengan modal setipis mungkin — untung besar saat lancar, tapi nasabah yang menanggung saat gagal.
</div>

<h3>Rumusnya</h3>
<div class="callout">
<b>CAR</b> (Capital Adequacy Ratio) = Modal ÷ <b>ATMR</b> × 100%
</div>

<p><b>ATMR</b> = Aset Tertimbang Menurut Risiko. Ini bagian yang menarik: <b>tidak semua aset dihitung sama</b>.</p>

<table class="tbl">
  <tr><th>Jenis aset</th><th>Bobot risiko (ilustrasi)</th><th>Alasannya</th></tr>
  <tr><td>Surat berharga negara</td><td class="ok-cell">0%</td><td>Dianggap hampir tanpa risiko gagal bayar</td></tr>
  <tr><td>Kredit pemilikan rumah</td><td>±35%</td><td>Ada agunan berupa rumah</td></tr>
  <tr><td>Kredit korporasi</td><td>±100%</td><td>Risiko penuh</td></tr>
  <tr><td>Kredit tanpa agunan</td><td>Lebih tinggi lagi</td><td>Tidak ada yang bisa disita</td></tr>
</table>

<div class="callout">
<b>Konsekuensi penting:</b> dua bank dengan total aset sama bisa punya ATMR sangat berbeda. Bank yang banyak memegang surat berharga negara butuh modal jauh lebih sedikit daripada bank yang agresif menyalurkan kredit tanpa agunan. Inilah cara regulator memaksa bank menakar risikonya sendiri.
</div>

<h3>Berapa yang wajib?</h3>
<p>Ketentuan <b>Basel III</b> — kerangka internasional yang juga diadopsi Indonesia — mensyaratkan CAR minimum sekitar <b>8%</b>, ditambah beberapa lapisan penyangga tambahan sehingga dalam praktiknya menjadi lebih tinggi. Bank-bank besar Indonesia umumnya menjaga CAR jauh di atas ketentuan, sering di kisaran <b>20%-an</b>.</p>

<div class="callout warn">
<b>⚠️ CAR terlalu tinggi juga bukan pujian.</b> Modal menganggur tidak menghasilkan. CAR 30% berarti bank menyimpan bantalan yang jauh melebihi kebutuhan — aman, tapi <b>ROE-nya tertekan</b> karena modal besar dibagi laba yang sama. Ini contoh nyata pelajaran <b>alokasi modal</b>: kalau modal berlebih tak bisa dipakai produktif, sebaiknya dikembalikan ke pemegang saham lewat dividen.
</div>

<h3>Tiga rasio, tiga pertanyaan berbeda</h3>
<table class="tbl">
  <tr><th>Rasio</th><th>Menjawab</th></tr>
  <tr><td><b>NPL</b></td><td>Berapa besar kredit yang bermasalah?</td></tr>
  <tr><td><b>Coverage ratio</b></td><td>Sudah dicadangkan berapa banyak?</td></tr>
  <tr><td><b>CAR</b></td><td>Kalau cadangan itu <b>tidak cukup</b>, sanggupkah modalnya menahan sisanya?</td></tr>
</table>

<div class="callout">
<b>Cara memakai bertingkat:</b> mulai dari NPL (ada masalah tidak?), lalu coverage (sudah disiapkan?), lalu CAR (kalau meleset, kuat bertahan?). Ketiganya bersama-sama menjawab pertanyaan sederhana: <b>apakah bank ini sanggup melewati krisis?</b>
</div>
`,
          keyPoints: [
            "CAR = Modal ÷ ATMR × 100%; mengukur ketebalan bantalan modal bank.",
            "ATMR = Aset Tertimbang Menurut Risiko — aset berisiko rendah (SBN) berbobot kecil, kredit tanpa agunan berbobot besar.",
            "Modal menyerap kerugian lebih dulu sebelum dana nasabah tersentuh; itulah alasan adanya modal minimum.",
            "Basel III mensyaratkan CAR minimum sekitar 8% plus penyangga; bank besar Indonesia umumnya jauh di atas itu.",
            "CAR terlalu tinggi menekan ROE karena modal menganggur — hubungkan dengan pelajaran alokasi modal.",
            "Urutan membaca: NPL (ada masalah?) → coverage (sudah dicadangkan?) → CAR (kuat menahan sisanya?).",
          ],
          practice: [
            { type: "number", q: "Modal bank Rp40 T, ATMR Rp200 T. Berapa CAR-nya (dalam %)?", answer: 20, tol: 0.5, hint: "Modal ÷ ATMR × 100%.", solution: "40 ÷ 200 = 20% — jauh di atas ketentuan minimum." },
          ],
          quiz: [
            {
              q: "Apa yang dimaksud ATMR dalam rumus CAR?",
              options: [
                "Aset Tertimbang Menurut Risiko — tiap aset diberi bobot sesuai risikonya",
                "Aset Tetap Milik Rekanan — aset yang dititipkan pihak lain",
                "Aset Tunai Minimum Regulator — kas minimal yang wajib disimpan",
                "Angsuran Total Modal Rata-rata — cicilan modal per tahun",
              ],
              answer: 0,
              explain:
                "Surat berharga negara berbobot mendekati nol, sedangkan kredit tanpa agunan berbobot tinggi.",
            },
            {
              q: "Kenapa CAR yang terlalu tinggi bukan selalu pujian?",
              options: [
                "Modal menganggur tak menghasilkan, sehingga ROE bank tertekan",
                "CAR tinggi melanggar batas maksimal yang ditetapkan regulator",
                "CAR tinggi membuat NPL bank naik secara otomatis",
                "CAR tinggi mengurangi jumlah dana nasabah yang dijamin LPS",
              ],
              answer: 0,
              explain:
                "Ini persoalan alokasi modal: modal berlebih yang tak bisa dipakai produktif sebaiknya dikembalikan ke pemegang saham.",
            },
            {
              q: "Urutan yang paling masuk akal saat menilai ketahanan sebuah bank?",
              options: [
                "NPL (ada masalah?) → coverage (sudah dicadangkan?) → CAR (kuat menahan?)",
                "CAR (kuat menahan?) → NPL (ada masalah?) → coverage (dicadangkan?)",
                "Coverage (dicadangkan?) → CAR (kuat menahan?) → CASA (dana murah?)",
                "CASA (dana murah?) → NIM (margin lebar?) → BOPO (efisien?)",
              ],
              answer: 0,
              explain:
                "Mulai dari besarnya masalah, lalu kesiapan cadangan, baru ketahanan modal sebagai benteng terakhir.",
            },
          ],
        },
        {
          id: "acc-bank-6",
          title: "Menilai Saham Bank: PBV & ROE",
          duration: "13 menit",
          content: `
<p>Pelajaran penutup: setelah tahu cara membaca kesehatan bank, bagaimana menilai <b>sahamnya mahal atau murah</b>? Jawabannya bukan PER atau EV/EBITDA — melainkan pasangan <b>PBV dan ROE</b>.</p>

<div data-diagram="pipeline" data-stages="CASA tinggi::dana murah|Biaya dana rendah::NIM lebar|BOPO rendah::laba besar|ROE tinggi::PBV pantas mahal" data-caption="Rantai dari bahan baku murah sampai harga saham"></div>

<h3>Kenapa PBV, bukan PER?</h3>
<p>Ingat pelajaran <b>PBV &amp; Nilai Buku</b>: PBV cocok untuk perusahaan yang <b>nilainya melekat pada asetnya</b>. Bagi bank, hampir seluruh asetnya berupa <b>uang dan tagihan</b> — bukan mesin yang sulit ditaksir. Nilai bukunya karena itu relatif <b>bermakna dan bisa dipercaya</b>.</p>

<p>Sebaliknya, laba bank bisa berayun tajam hanya karena keputusan <b>pencadangan (CKPN)</b>. Satu tahun mencadangkan besar, PER melonjak; tahun berikutnya mencadangkan sedikit, PER terlihat murah — padahal bisnisnya sama saja. Nilai buku jauh lebih stabil.</p>

<h3>Aturan yang menghubungkan keduanya</h3>
<div class="callout">
<b>PBV yang pantas ditentukan terutama oleh ROE.</b><br><br>
Kalau <b>ROE = biaya ekuitas</b> → PBV wajar ≈ <b>1×</b><br>
Kalau <b>ROE &gt; biaya ekuitas</b> → PBV pantas <b>di atas 1×</b><br>
Kalau <b>ROE &lt; biaya ekuitas</b> → PBV pantas <b>di bawah 1×</b>
</div>

<p>Logikanya sederhana: bank yang bisa menghasilkan 20% dari setiap rupiah modal pantas dihargai lebih mahal daripada modalnya, karena modal itu <b>menghasilkan lebih banyak</b> di tangan bank tersebut. Bank yang hanya menghasilkan 5% — di bawah biaya ekuitasnya — sebenarnya <b>menghancurkan nilai</b>, dan pasar wajar menghargainya di bawah nilai buku.</p>

<table class="tbl">
  <tr><th>Profil bank</th><th>ROE</th><th>PBV yang lazim</th></tr>
  <tr><td class="ok-cell">CASA sangat tinggi, NPL rendah, BOPO efisien</td><td>±20%+</td><td>Premium, bisa jauh di atas 2×</td></tr>
  <tr><td>Bank besar yang solid</td><td>±13–18%</td><td>Sekitar 1–2×</td></tr>
  <tr><td>Bank kecil, biaya dana mahal</td><td>±5–8%</td><td>Sering di bawah 1×</td></tr>
</table>

<div class="callout warn">
<b>🚩 Jebakan "bank murah".</b> Ini penerapan langsung dari <i>value trap</i> yang kamu pelajari di <b>Valuasi Relatif &amp; Multiples</b>. Bank dengan PBV 0,5× terlihat sangat murah — tapi tanyakan dulu: <b>kenapa</b>?<br><br>
Biasanya jawabannya: ROE-nya rendah karena biaya dananya mahal (CASA rendah), atau NPL-nya bermasalah. Murahnya <b>pantas</b>. Dan celakanya, kalau kredit macetnya terus bertambah, nilai bukunya sendiri akan menyusut — sehingga PBV yang tadinya 0,5× ternyata tidak semurah kelihatannya.
</div>

<h3>Daftar periksa sebelum menilai saham bank</h3>
<ol>
  <li><b>CASA</b> — trennya naik atau turun beberapa kuartal terakhir?</li>
  <li><b>NIM</b> — stabil? Kalau tinggi, apakah karena efisien atau karena berisiko?</li>
  <li><b>BOPO</b> — membaik seiring digitalisasi?</li>
  <li><b>NPL gross</b> — di bawah rata-rata industri? Kredit restrukturisasinya bagaimana?</li>
  <li><b>Coverage ratio</b> — memadai?</li>
  <li><b>CAR</b> — kuat, tapi tidak berlebihan sampai menekan ROE?</li>
  <li><b>ROE</b> — konsisten di atas biaya ekuitas?</li>
  <li><b>PBV</b> — dibandingkan bank sejenis <b>dan</b> sejarahnya sendiri.</li>
</ol>

<div class="callout">
<b>Menutup modul ini:</b> perhatikan bahwa hampir semua alat di daftar itu <b>tidak ada di modul-modul sebelumnya</b>. Itulah inti pelajarannya — menilai perusahaan bukan soal menghafal satu set rasio, tapi memahami <b>bagaimana bisnisnya menghasilkan uang</b>, lalu memilih alat yang sesuai. Asuransi, properti, dan pertambangan juga punya kebiasaan ukurannya sendiri.
</div>

<div class="callout warn">
<b>Catatan penting:</b> semua angka di modul ini adalah <b>kisaran ilustrasi</b> untuk memahami konsep, bukan patokan baku. Ketentuan regulator dan kondisi industri berubah dari waktu ke waktu — selalu rujuk laporan keuangan terbaru bank yang bersangkutan serta publikasi <b>OJK</b> dan <b>Bank Indonesia</b>. Materi ini untuk edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Saham bank dinilai dengan PBV & ROE, bukan PER atau EV/EBITDA.",
            "PBV cocok karena aset bank berupa uang & tagihan sehingga nilai bukunya bermakna; laba bank berayun karena keputusan pencadangan.",
            "ROE = biaya ekuitas → PBV wajar ≈ 1×; ROE lebih tinggi → PBV pantas di atas 1×; ROE lebih rendah → pantas di bawah 1×.",
            "Bank ber-ROE di bawah biaya ekuitasnya sebenarnya menghancurkan nilai.",
            "Jebakan bank 'murah': PBV rendah biasanya karena ROE rendah atau NPL bermasalah — dan nilai bukunya sendiri bisa menyusut.",
            "Rantainya: CASA tinggi → biaya dana rendah → NIM lebar → ROE tinggi → PBV pantas mahal.",
            "Pelajaran besarnya: pilih alat sesuai cara bisnis menghasilkan uang, jangan hafal satu set rasio untuk semua industri.",
          ],
          practice: [
            { type: "number", q: "Sebuah bank punya ekuitas Rp50 T dan laba bersih Rp9 T. Berapa ROE-nya (dalam %)?", answer: 18, tol: 0.5, hint: "Laba bersih ÷ Ekuitas × 100%.", solution: "9 ÷ 50 = 18% — tergolong bank yang solid." },
            { type: "number", q: "Kapitalisasi pasar bank Rp120 T, nilai buku ekuitasnya Rp60 T. Berapa PBV-nya (dalam kali)?", answer: 2, tol: 0.05, hint: "Kapitalisasi pasar ÷ Nilai buku ekuitas.", solution: "120 ÷ 60 = 2,0× — dihargai dua kali nilai bukunya." },
          ],
          quiz: [
            {
              q: "Kenapa PBV lebih dipakai daripada PER untuk menilai bank?",
              options: [
                "Aset bank berupa uang & tagihan jadi nilai bukunya bermakna, labanya berayun",
                "PER dilarang dipakai untuk menilai saham bank oleh aturan pasar modal",
                "Bank tidak pernah menghasilkan laba sehingga PER-nya tak bisa dihitung",
                "PBV bank selalu lebih kecil dari satu kali sehingga lebih mudah dibaca",
              ],
              answer: 0,
              explain:
                "Nilai buku bank relatif stabil dan bisa dipercaya; labanya jauh lebih mudah berayun karena CKPN.",
            },
            {
              q: "Bank dengan ROE 6% sementara biaya ekuitasnya 11%. PBV yang pantas?",
              options: [
                "Di bawah 1× — modalnya menghasilkan kurang dari biayanya",
                "Di atas 2× — bank dengan ROE positif pantas dihargai premium",
                "Tepat 1× — PBV bank selalu sama dengan nilai bukunya",
                "Sekitar 1,5× — rata-rata yang wajar untuk semua bank",
              ],
              answer: 0,
              explain:
                "Kalau modal menghasilkan di bawah biayanya, pasar wajar menghargainya di bawah nilai buku.",
            },
            {
              q: "Sebuah bank diperdagangkan di PBV 0,45×. Langkah paling tepat?",
              options: [
                "Selidiki ROE, CASA, dan NPL dulu — murahnya bisa jadi pantas",
                "Langsung beli, karena bank itu dihargai kurang dari separuh nilainya",
                "Hindari, karena PBV di bawah satu pasti tanda bank akan bangkrut",
                "Tunggu PBV-nya kembali ke satu kali, baru kemudian membeli",
              ],
              answer: 0,
              explain:
                "Ini value trap versi perbankan. PBV rendah hampir selalu punya alasan yang perlu ditemukan lebih dulu.",
            },
            {
              q: "Pelajaran paling besar dari modul perbankan ini adalah?",
              options: [
                "Pilih alat ukur sesuai cara bisnis menghasilkan uang, bukan satu set rasio",
                "Bank selalu merupakan investasi yang lebih aman daripada perusahaan biasa",
                "PBV adalah satu-satunya rasio yang benar-benar berguna di semua industri",
                "Rasio keuangan tidak berguna sama sekali untuk menilai lembaga keuangan",
              ],
              answer: 0,
              explain:
                "Asuransi, properti, dan pertambangan pun punya ukuran khasnya sendiri.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 13: MENILAI PROSPEK & RISIKO MASA DEPAN ---------------- */
    {
      id: "acc-prospek",
      level: "Prospek",
      title: "Menilai Prospek & Risiko Masa Depan",
      summary: "Alat terukur menilai masa depan: Z-Score (risiko bangkrut), F-Score, skenario & expected value, dan margin of safety.",
      lessons: [
        {
          id: "acc-prosp-1",
          title: "Berpikir dalam Kemungkinan, Bukan Kepastian",
          duration: "10 menit",
          content: `
<p>Sebelum belajar rumusnya, ada satu hal yang <b>wajib</b> dipahami — dan ini justru pelajaran terpenting di modul ini.</p>

<div data-diagram="bar" data-bars="Buruk (peluang 20%):-30|Dasar (peluang 60%):15|Baik (peluang 20%):60" data-unit="%" data-caption="Bukan satu ramalan tunggal, tapi rentang kemungkinan beserta peluangnya"></div>


<div class="callout warn">
<b>Tidak ada rumus yang bisa menghitung "berapa % saham ini akan naik".</b> Masa depan dipengaruhi hal-hal tak terhitung: kondisi ekonomi, teknologi baru, keputusan manusia, keberuntungan. Siapa pun yang mengklaim punya rumus pasti — <b>patut dicurigai</b>.
</div>

<h3>Lalu apa yang BISA dihitung?</h3>
<p>Analis profesional tidak bertanya <i>"berapa persen harga akan naik?"</i>. Mereka bertanya:</p>
<ul>
  <li>Seberapa <b>sehat</b> perusahaan ini sekarang? (rasio)</li>
  <li>Seberapa besar <b>risiko gagal</b>-nya? (Z-Score)</li>
  <li>Seberapa <b>kuat fundamental</b>-nya & membaik atau memburuk? (F-Score)</li>
  <li>Apa <b>rentang kemungkinan</b> hasilnya? (skenario)</li>
  <li>Berapa <b>ruang aman</b> kalau perkiraanku meleset? (margin of safety)</li>
</ul>

<div class="callout">
<b>Pergeseran cara pikir:</b> dari <i>"apa yang PASTI terjadi"</i> → menjadi <i>"apa saja yang MUNGKIN terjadi, seberapa besar peluangnya, dan apakah aku tetap aman kalau salah."</i> Inilah inti berpikir probabilistik.
</div>

<h3>Analogi ramalan cuaca</h3>
<p>Ahli meteorologi tidak berkata "besok pasti hujan". Mereka berkata <b>"peluang hujan 70%"</b> — dan kamu tetap membawa payung. Mereka juga bisa salah. Beginilah cara menilai bisnis: bekerja dengan kemungkinan, dan <b>siapkan payung</b> (margin of safety).</p>

<div class="callout warn">
<b>Ingat:</b> seluruh modul ini adalah <b>alat analisis edukatif</b>, bukan saran investasi. Tiap model punya keterbatasan yang akan saya jelaskan jujur di tiap pelajaran.
</div>
`,
          keyPoints: [
            "Tidak ada rumus yang bisa menghitung probabilitas saham akan naik — masa depan mengandung ketidakpastian mendasar.",
            "Yang bisa dihitung: kesehatan, risiko gagal, kekuatan fundamental, rentang kemungkinan, dan ruang aman.",
            "Pergeseran pikir: dari 'apa yang pasti terjadi' ke 'apa yang mungkin terjadi & apakah aku aman kalau salah'.",
            "Semua model punya keterbatasan; ini alat analisis, bukan ramalan.",
          ],
          quiz: [
            {
              q: "Manakah pernyataan yang benar tentang memprediksi masa depan saham?",
              options: [
                "Tak ada rumus pasti; yang bisa dinilai kesehatan, risiko & rentang kemungkinan",
                "Z-Score dan DCF bisa memastikan harga saham tahun depan dengan sangat tepat",
                "Pola harga saham masa lalu cukup untuk memastikan arah harganya ke depan",
                "Saham dengan laba terbesar tahun ini pasti naik paling tinggi tahun depan",
              ],
              answer: 0,
              explain:
                "Masa depan tak bisa dipastikan; analisis fokus pada kesehatan, risiko, & kemungkinan.",
            },
            {
              q: "Apa inti 'berpikir probabilistik' dalam menilai bisnis?",
              options: [
                "Menimbang berbagai kemungkinan dan menyiapkan ruang aman bila meleset",
                "Memilih satu skenario paling mungkin lalu bertaruh penuh padanya",
                "Menghindari keputusan sampai seluruh ketidakpastian benar-benar hilang",
                "Mengikuti pendapat mayoritas analis agar peluang benarnya lebih besar",
              ],
              answer: 0,
              explain:
                "Berpikir dalam kemungkinan + margin of safety, bukan mengejar kepastian.",
            },
          ],
        },
        {
          id: "acc-prosp-2",
          title: "Altman Z-Score — Mengukur Risiko Kebangkrutan",
          duration: "13 menit",
          content: `
<p>Ini model yang paling mendekati "menghitung probabilitas" secara sah. Dibuat <b>Edward Altman (1968)</b>, <b>Z-Score</b> memperkirakan seberapa besar risiko sebuah perusahaan <b>bangkrut</b> dalam ~2 tahun ke depan.</p>

<div data-diagram="scale" data-zones="Rawan|Abu-abu|Aman" data-marks="1,81|2,99" data-caption="Zona Altman Z-Score"></div>


<div class="callout">
<b>Perhatikan baik-baik:</b> Z-Score memprediksi <b>risiko KEBANGKRUTAN</b>, <b>bukan</b> kenaikan harga saham. Perusahaan sehat (Z tinggi) belum tentu sahamnya naik — tapi perusahaan Z rendah memang <b>berisiko tinggi</b>.
</div>

<h3>Lima rasio yang dipakai</h3>
<table class="tbl">
  <tr><th>Kode</th><th>Rasio</th><th>Mengukur</th></tr>
  <tr><td><b>X1</b></td><td>Modal Kerja ÷ Total Aset</td><td>Likuiditas (napas jangka pendek)</td></tr>
  <tr><td><b>X2</b></td><td>Laba Ditahan ÷ Total Aset</td><td>Akumulasi laba selama ini</td></tr>
  <tr><td><b>X3</b></td><td>EBIT ÷ Total Aset</td><td>Produktivitas aset menghasilkan laba</td></tr>
  <tr><td><b>X4</b></td><td>Nilai Pasar Ekuitas ÷ Total Utang</td><td>Bantalan modal terhadap utang</td></tr>
  <tr><td><b>X5</b></td><td>Penjualan ÷ Total Aset</td><td>Perputaran aset</td></tr>
</table>

<div class="callout">
<b>Rumus:</b> Z = 1,2·X1 + 1,4·X2 + 3,3·X3 + 0,6·X4 + 1,0·X5
</div>

<h3>Membaca hasilnya</h3>
<table class="tbl">
  <tr><th>Nilai Z</th><th>Zona</th><th>Arti</th></tr>
  <tr><td><b>di atas 2,99</b></td><td class="ok-cell">Aman</td><td>Risiko kebangkrutan rendah</td></tr>
  <tr><td><b>1,81 – 2,99</b></td><td>Abu-abu</td><td>Perlu diwaspadai</td></tr>
  <tr><td><b>di bawah 1,81</b></td><td>Rawan</td><td>Risiko kebangkrutan tinggi</td></tr>
</table>

<h3>Coba sendiri — hitung Z-Score 👇</h3>
<div data-demo="js-playground">// Altman Z-Score (ubah angkanya & jalankan lagi)
const X1 = 0.20;  // Modal Kerja / Total Aset
const X2 = 0.15;  // Laba Ditahan / Total Aset
const X3 = 0.12;  // EBIT / Total Aset
const X4 = 1.50;  // Nilai Pasar Ekuitas / Total Utang
const X5 = 1.10;  // Penjualan / Total Aset

const Z = 1.2*X1 + 1.4*X2 + 3.3*X3 + 0.6*X4 + 1.0*X5;
console.log("Z-Score = " + Z.toFixed(2));

if (Z > 2.99) {
  console.log("Zona AMAN - risiko kebangkrutan rendah");
} else if (Z > 1.81) {
  console.log("Zona ABU-ABU - perlu diwaspadai");
} else {
  console.log("Zona RAWAN - risiko kebangkrutan tinggi");
}
console.log("Catatan: ini indikator risiko, BUKAN ramalan harga saham.");</div>

<div class="callout warn">
<b>Keterbatasan (penting!):</b> rumus di atas dirancang untuk <b>perusahaan manufaktur yang sudah go public</b>. Ada varian lain untuk perusahaan tertutup & non-manufaktur. Model ini <b>tidak cocok</b> untuk bank/lembaga keuangan, startup yang belum untung, dan <b>tidak berlaku sama sekali</b> untuk proyek crypto.
</div>
`,
          keyPoints: [
            "Altman Z-Score (1968) memperkirakan risiko KEBANGKRUTAN dalam ~2 tahun, bukan kenaikan harga saham.",
            "Z = 1,2·X1 + 1,4·X2 + 3,3·X3 + 0,6·X4 + 1,0·X5 (likuiditas, laba ditahan, EBIT, ekuitas/utang, perputaran).",
            "Zona: di atas 2,99 aman; 1,81–2,99 abu-abu; di bawah 1,81 rawan.",
            "Keterbatasan: untuk manufaktur publik; ada varian lain; tidak cocok untuk bank, startup, & crypto.",
          ],
          practice: [
            { type: "number", q: "Modal kerja Rp40jt, total aset Rp200jt. Berapa nilai X1 (Modal Kerja ÷ Total Aset)? (desimal, mis. 0.2)", answer: 0.2, tol: 0.01, hint: "X1 = Modal Kerja ÷ Total Aset.", solution: "40 ÷ 200 = 0,2." },
            { type: "number", q: "Jika X1=0.2, X2=0.1, X3=0.1, X4=1.0, X5=1.0 — berapa Z-Score-nya? (2 desimal)", answer: 2.31, tol: 0.05, hint: "Z = 1,2(0,2) + 1,4(0,1) + 3,3(0,1) + 0,6(1,0) + 1,0(1,0).", solution: "0,24 + 0,14 + 0,33 + 0,6 + 1,0 = 2,31 → zona abu-abu." },
          ],
          quiz: [
            {
              q: "Apa yang sebenarnya diprediksi Altman Z-Score?",
              options: [
                "Risiko perusahaan bangkrut dalam sekitar dua tahun ke depan",
                "Arah pergerakan harga saham dalam beberapa bulan ke depan",
                "Besarnya laba bersih perusahaan pada tahun buku berikutnya",
                "Nilai wajar saham berdasarkan arus kas masa depannya",
              ],
              answer: 0,
              explain:
                "Z-Score adalah model risiko kebangkrutan (financial distress), bukan prediksi harga.",
            },
            {
              q: "Z-Score = 1,5 berarti perusahaan berada di zona?",
              options: [
                "Rawan — risiko kebangkrutan tinggi",
                "Abu-abu — perlu diwaspadai",
                "Aman — risiko kebangkrutan rendah",
                "Sangat aman — hampir mustahil bangkrut",
              ],
              answer: 0,
              explain: "Di bawah 1,81 termasuk zona rawan.",
            },
          ],
        },
        {
          id: "acc-prosp-3",
          title: "Piotroski F-Score — Skor Kekuatan Fundamental",
          duration: "12 menit",
          content: `
<p>Kalau Z-Score menilai <b>risiko gagal</b>, <b>Piotroski F-Score</b> menilai <b>kekuatan & arah perbaikan</b> fundamental sebuah perusahaan. Dibuat Joseph Piotroski (2000), bentuknya sangat sederhana: <b>checklist 9 poin</b>.</p>

<div data-diagram="scale" data-zones="Lemah (0-3)|Menengah (4-7)|Kuat (8-9)" data-caption="Membaca Piotroski F-Score"></div>


<div class="callout">
<b>Caranya:</b> tiap kriteria yang <b>terpenuhi</b> = <b>1 poin</b>, tidak terpenuhi = 0. Total maksimal <b>9</b>.
</div>

<h3>A. Profitabilitas (4 poin)</h3>
<ol>
  <li>Laba bersih <b>positif</b></li>
  <li>Arus kas operasi <b>positif</b></li>
  <li>ROA <b>meningkat</b> dibanding tahun lalu</li>
  <li>Arus kas operasi <b>lebih besar</b> dari laba bersih (kualitas laba baik — labanya didukung kas nyata)</li>
</ol>

<h3>B. Utang & Likuiditas (3 poin)</h3>
<ol start="5">
  <li>Utang jangka panjang <b>menurun</b></li>
  <li>Current ratio <b>meningkat</b></li>
  <li><b>Tidak</b> menerbitkan saham baru (kepemilikanmu tidak terdilusi)</li>
</ol>

<h3>C. Efisiensi Operasi (2 poin)</h3>
<ol start="8">
  <li>Gross margin <b>meningkat</b></li>
  <li>Perputaran aset <b>meningkat</b></li>
</ol>

<h3>Membaca skornya</h3>
<table class="tbl">
  <tr><th>Skor</th><th>Arti</th></tr>
  <tr><td><b>8 – 9</b></td><td class="ok-cell">Fundamental kuat & membaik</td></tr>
  <tr><td><b>4 – 7</b></td><td>Menengah</td></tr>
  <tr><td><b>0 – 3</b></td><td>Fundamental lemah</td></tr>
</table>

<div class="callout">
<b>Kenapa cerdas?</b> F-Score tidak hanya melihat kondisi <b>sekarang</b>, tapi <b>arah perubahannya</b> (membaik atau memburuk). Perusahaan biasa yang terus membaik sering lebih menarik daripada perusahaan bagus yang menurun.
</div>

<div class="callout warn">
<b>Keterbatasan:</b> F-Score menilai <b>masa lalu & tren terakhir</b>, bukan masa depan. Ia juga mengabaikan harga saham (perusahaan kuat bisa saja terlalu mahal) dan kualitas bisnis (merek, keunggulan bersaing).
</div>
`,
          keyPoints: [
            "Piotroski F-Score = checklist 9 poin kekuatan fundamental (profitabilitas 4, utang/likuiditas 3, efisiensi 2).",
            "Tiap kriteria terpenuhi = 1 poin; skor 8–9 kuat, 0–3 lemah.",
            "Keunggulan: menilai arah perubahan (membaik/memburuk), bukan hanya kondisi saat ini.",
            "Keterbatasan: berbasis data masa lalu, mengabaikan harga & kualitas bisnis.",
          ],
          practice: [
            { type: "number", q: "Sebuah perusahaan: laba bersih positif ✓, arus kas operasi positif ✓, ROA meningkat ✓, tapi arus kas operasi LEBIH KECIL dari laba bersih ✗. Berapa poin dari kelompok Profitabilitas (maks 4)?", answer: 3, unit: "poin", hint: "Hitung centang saja dari 4 kriteria profitabilitas.", solution: "3 kriteria terpenuhi = 3 poin." },
            { type: "choice", q: "Total F-Score sebuah perusahaan = 9. Termasuk kategori apa?", options: ["Fundamental lemah", "Menengah", "Fundamental kuat & membaik"], answer: 2, hint: "Skor 8–9 masuk kategori apa?", solution: "Skor 8–9 = fundamental kuat & membaik." },
          ],
          quiz: [
            {
              q: "Berapa poin maksimal Piotroski F-Score?",
              options: ["5", "9", "10", "100"],
              answer: 1,
              explain: "F-Score terdiri dari 9 kriteria, masing-masing bernilai 1 poin.",
            },
            {
              q: "Kenapa kriteria 'arus kas operasi lebih besar dari laba bersih' itu penting?",
              options: [
                "Menandakan laba didukung kas nyata, bukan sekadar angka catatan",
                "Menandakan perusahaan membayar pajak lebih kecil dari seharusnya",
                "Menandakan perusahaan sedang menimbun kas terlalu banyak",
                "Menandakan laba bersihnya dilaporkan terlalu rendah oleh auditor",
              ],
              answer: 0,
              explain:
                "Laba yang didukung kas nyata lebih berkualitas daripada laba akrual semata.",
            },
          ],
        },
        {
          id: "acc-prosp-4",
          title: "Analisis Skenario, Expected Value & Sensitivitas",
          duration: "13 menit",
          content: `
<p>Karena masa depan tak pasti, cara paling jujur menilainya bukan satu angka, melainkan <b>beberapa kemungkinan</b>.</p>

<div data-diagram="bar" data-bars="Skenario buruk (20%):-30|Skenario dasar (60%):15|Skenario baik (20%):60|Nilai harapan:15" data-unit="%" data-caption="Nilai harapan = rata-rata semua skenario, ditimbang peluangnya masing-masing"></div>


<h3>1. Analisis Skenario</h3>
<p>Buat <b>tiga versi</b> masa depan, bukan satu:</p>
<table class="tbl">
  <tr><th>Skenario</th><th>Asumsi</th><th>Hasil (mis. laba)</th><th>Peluang</th></tr>
  <tr><td><b>Terbaik</b></td><td>Penjualan tumbuh pesat</td><td>+100</td><td>30%</td></tr>
  <tr><td><b>Tengah</b></td><td>Tumbuh normal</td><td>+60</td><td>50%</td></tr>
  <tr><td><b>Terburuk</b></td><td>Ekonomi lesu</td><td>−20</td><td>20%</td></tr>
</table>

<h3>2. Expected Value (Nilai Harapan)</h3>
<div class="callout">
<b>Rumus:</b> Nilai Harapan = jumlah dari (peluang × hasil) tiap skenario.<br>
Ini <b>rata-rata tertimbang</b> semua kemungkinan — bukan ramalan pasti, tapi cara membandingkan pilihan secara adil.
</div>

<h3>Coba sendiri — hitung nilai harapan 👇</h3>
<div data-demo="js-playground">// Analisis skenario: berapa "nilai harapan" (expected value)?
const skenario = [
  { nama: "Terbaik ", peluang: 0.30, hasil: 100 },
  { nama: "Tengah  ", peluang: 0.50, hasil: 60 },
  { nama: "Terburuk", peluang: 0.20, hasil: -20 }
];

let nilaiHarapan = 0;
skenario.forEach(function(s){
  const kontribusi = s.peluang * s.hasil;
  nilaiHarapan = nilaiHarapan + kontribusi;
  console.log(s.nama + " | peluang " + (s.peluang*100) + "% x hasil " + s.hasil + " = " + kontribusi.toFixed(1));
});
console.log("-----");
console.log("Nilai harapan = " + nilaiHarapan.toFixed(1));
console.log("Ini rata-rata tertimbang semua kemungkinan, bukan ramalan pasti.");</div>

<h3>3. Analisis Sensitivitas</h3>
<p>Pertanyaannya: <b>"Kalau asumsiku meleset, seberapa besar hasilnya berubah?"</b> Ubah satu asumsi (mis. pertumbuhan dari 10% jadi 5%) dan lihat dampaknya.</p>
<div class="callout warn">
<b>Temuan penting:</b> kalau nilai perusahaan <b>berubah drastis</b> hanya karena asumsi digeser sedikit, berarti penilaianmu <b>rapuh</b> — sebaiknya lebih berhati-hati. Ini yang membedakan analisis matang dari asal hitung.
</div>
`,
          keyPoints: [
            "Analisis skenario: buat versi terbaik/tengah/terburuk, masing-masing dengan peluangnya.",
            "Expected Value = jumlah (peluang × hasil); rata-rata tertimbang semua kemungkinan, bukan ramalan pasti.",
            "Analisis sensitivitas menguji seberapa besar hasil berubah bila asumsi meleset.",
            "Hasil yang berubah drastis karena asumsi bergeser sedikit = penilaian rapuh, perlu hati-hati.",
          ],
          practice: [
            { type: "number", q: "Skenario: 30% hasil 100, 50% hasil 60, 20% hasil −20. Berapa nilai harapannya?", answer: 56, tol: 0.5, hint: "Jumlahkan (peluang × hasil) tiap skenario.", solution: "(0,3×100) + (0,5×60) + (0,2×−20) = 30 + 30 − 4 = 56." },
            { type: "number", q: "Peluang 60% untung 50, peluang 40% rugi 25. Berapa nilai harapannya?", answer: 20, tol: 0.5, hint: "(0,6 × 50) + (0,4 × −25).", solution: "30 − 10 = 20." },
          ],
          quiz: [
            {
              q: "Apa itu 'expected value' (nilai harapan)?",
              options: [
                "Jumlah dari (peluang × hasil) untuk semua kemungkinan yang ada",
                "Hasil dari skenario yang peluangnya paling besar untuk terjadi",
                "Rata-rata sederhana dari hasil terbaik dan hasil terburuk",
                "Hasil yang paling diharapkan oleh manajemen perusahaan",
              ],
              answer: 0,
              explain:
                "Expected value menimbang tiap kemungkinan dengan peluangnya — bukan kepastian.",
            },
            {
              q: "Jika nilai perusahaan berubah drastis hanya karena asumsi digeser sedikit, artinya?",
              options: [
                "Penilaiannya rapuh — kesimpulannya perlu disikapi lebih hati-hati",
                "Penilaiannya sangat akurat karena peka terhadap perubahan kecil",
                "Perusahaannya pasti bagus karena nilainya bisa naik dengan mudah",
                "Tidak berarti apa-apa, karena semua penilaian memang bisa berubah",
              ],
              answer: 0,
              explain:
                "Sensitivitas tinggi menandakan hasil sangat bergantung asumsi yang belum tentu benar.",
            },
          ],
        },
        {
          id: "acc-prosp-5",
          title: "Margin of Safety & Prospek Crypto Secara Realistis",
          duration: "12 menit",
          content: `
<p>Setelah semua analisis, tetap ada kemungkinan kamu <b>salah</b>. Karena itu ada konsep pamungkas dari Benjamin Graham (guru Warren Buffett): <b>Margin of Safety</b>.</p>

<div data-diagram="flow" data-steps="Taksir Nilai Wajar|Bandingkan Harga|= Margin of Safety" data-caption="Menghitung ruang aman"></div>


<h3>Fundamental: sisakan ruang untuk salah</h3>
<div class="callout">
<b>Analogi jembatan:</b> insinyur merancang jembatan untuk menahan beban <b>jauh di atas</b> perkiraan maksimum — karena perhitungan bisa meleset. Investor melakukan hal yang sama: membeli <b>jauh di bawah</b> nilai wajar, agar tetap aman kalau perkiraannya keliru.
</div>

<div class="callout">
<b>Rumus:</b> Margin of Safety = (Nilai Wajar − Harga) ÷ Nilai Wajar × 100%.<br>
Contoh: nilai wajar Rp1.000, harga Rp700 → margin of safety = <b>30%</b>. Kalau perkiraanmu meleset 20%, kamu masih aman.
</div>

<h3>💥 Kenapa ini pelindung terbaik</h3>
<ul>
  <li>Melindungi dari <b>kesalahan analisis</b>-mu sendiri.</li>
  <li>Melindungi dari <b>kejadian tak terduga</b>.</li>
  <li>Membuatmu <b>sabar</b> — menunggu harga yang masuk akal, bukan mengejar.</li>
</ul>

<h3>Bagaimana dengan crypto?</h3>
<div class="callout warn">
<b>Saya harus jujur:</b> sebagian besar proyek crypto <b>tidak punya laba & arus kas</b>. Artinya <b>Z-Score, F-Score, dan DCF TIDAK BISA dipakai</b> — tidak ada angka fundamental untuk dihitung. Menilai crypto jauh <b>lebih spekulatif</b> daripada saham.
</div>

<p>Yang <b>bisa</b> dinilai untuk crypto (bersifat kualitatif, bukan probabilitas):</p>
<table class="tbl">
  <tr><th>Aspek</th><th>Pertanyaan</th></tr>
  <tr><td>Kegunaan nyata</td><td>Apakah benar-benar dipakai orang, atau hanya spekulasi?</td></tr>
  <tr><td>Adopsi</td><td>Pengguna aktif & transaksi bertumbuh? (TVL untuk DeFi)</td></tr>
  <tr><td>Pendapatan protokol</td><td>Menghasilkan fee nyata?</td></tr>
  <tr><td>Tokenomics</td><td>Pasokan, distribusi, jadwal vesting sehat?</td></tr>
  <tr><td>Tim & keamanan</td><td>Tim terbuka? Kode diaudit?</td></tr>
</table>

<div class="callout warn">
<b>Penutup yang jujur:</b> tidak ada alat di modul ini — atau di mana pun — yang bisa memberitahumu bahwa suatu aset "pasti bagus di masa depan". Yang bisa dilakukan: <b>menilai kesehatan</b>, <b>mengukur risiko</b>, <b>menimbang kemungkinan</b>, dan <b>menyisakan ruang aman</b>. Seluruh materi ini <b>edukasi, bukan saran finansial/investasi</b>. Untuk keputusan nyata, pertimbangkan konsultasi dengan penasihat berizin.
</div>
`,
          keyPoints: [
            "Margin of Safety = (Nilai Wajar − Harga) ÷ Nilai Wajar × 100%; membeli jauh di bawah nilai wajar sebagai bantalan kesalahan.",
            "Melindungi dari kesalahan analisis & kejadian tak terduga; mendorong kesabaran.",
            "Untuk crypto: Z-Score/F-Score/DCF tidak bisa dipakai (tak ada laba & arus kas) — penilaiannya jauh lebih spekulatif.",
            "Yang bisa dinilai di crypto: kegunaan nyata, adopsi, pendapatan protokol, tokenomics, tim & audit.",
            "Tidak ada alat yang bisa memastikan aset 'pasti bagus'; ini edukasi, bukan saran investasi.",
          ],
          practice: [
            { type: "number", q: "Nilai wajar Rp1.000, harga sekarang Rp700. Berapa margin of safety-nya? (dalam %)", answer: 30, tol: 0.5, hint: "(Nilai Wajar − Harga) ÷ Nilai Wajar × 100%.", solution: "(1.000 − 700) ÷ 1.000 × 100% = 30%." },
            { type: "number", q: "Nilai wajar Rp2.000 dan kamu ingin margin of safety 25%. Berapa harga maksimal untuk membeli? (Rupiah)", answer: 1500, tol: 5, hint: "Harga = Nilai Wajar × (100% − 25%).", solution: "2.000 × 0,75 = Rp1.500." },
          ],
          quiz: [
            {
              q: "Apa fungsi utama 'margin of safety'?",
              options: [
                "Memberi ruang aman bila analisis atau perkiraanmu ternyata meleset",
                "Menjamin investasi tidak akan pernah mengalami kerugian",
                "Menentukan batas laba minimal yang harus dicapai perusahaan",
                "Mengukur seberapa jauh harga saham di atas nilai wajarnya",
              ],
              answer: 0,
              explain:
                "Margin of safety adalah bantalan terhadap kesalahan & kejadian tak terduga, bukan jaminan untung.",
            },
            {
              q: "Kenapa Z-Score & DCF umumnya tidak bisa dipakai untuk proyek crypto?",
              options: [
                "Karena sebagian besar proyek crypto tak punya laba dan arus kas untuk dihitung",
                "Karena harga crypto berubah terlalu cepat untuk dimasukkan ke rumus",
                "Karena regulator melarang memakai rumus keuangan untuk aset kripto",
                "Karena proyek crypto tidak pernah menerbitkan laporan dalam rupiah",
              ],
              answer: 0,
              explain:
                "Model itu bergantung pada angka laba/arus kas yang umumnya tidak ada pada proyek crypto.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 14: MEMBACA LAPORAN & MEMBANGUN BISNIS ---------------- */
    {
      id: "acc-proyek",
      level: "Proyek",
      title: "Membaca Laporan & Membangun Bisnis",
      summary: "Praktik nyata: baca laporan bisnis/saham/crypto, kelola keuangan, bangun bisnis, dan studi kasus untung tapi krisis kas.",
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
                "Investor membayar lebih mahal untuk setiap rupiah laba perusahaan",
                "Perusahaan mencetak laba yang jauh lebih besar dari pesaingnya",
                "Perusahaan membagikan dividen dalam jumlah yang sangat besar",
                "Harga saham dipastikan akan turun dalam waktu dekat",
              ],
              answer: 0,
              explain:
                "P/E tinggi = harga relatif mahal terhadap laba; perlu dibandingkan dengan industri.",
            },
            {
              q: "ROE mengukur?",
              options: [
                "Laba yang dihasilkan dari setiap rupiah modal milik pemilik",
                "Laba yang dihasilkan dari seluruh aset milik perusahaan",
                "Kemampuan perusahaan melunasi utang jangka pendeknya",
                "Kecepatan perusahaan menagih piutang dari pelanggan",
              ],
              answer: 0,
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

<div data-diagram="compare3" data-cols="Perusahaan::Laporan diaudit::Laba &amp; arus kas|Proyek kripto::Data on-chain terbuka::Fee protokol &amp; TVL|Pertanyaannya sama::Uang masuk dari mana?::Bisa bertahan tidak?" data-caption="Bahasanya berbeda, pertanyaan intinya sama persis"></div>


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
                "Total Value Locked — dana yang dikunci pengguna di dalam protokol",
                "Total Volume Lelang — nilai transaksi harian di bursa protokol",
                "Token Value Limit — batas jumlah token yang boleh diterbitkan",
                "Total Value Listed — nilai seluruh token yang tercatat di bursa",
              ],
              answer: 0,
              explain:
                "TVL mencerminkan seberapa banyak nilai dipercayakan ke protokol.",
            },
            {
              q: "Manakah tanda bahaya proyek crypto?",
              options: [
                "Janji imbal hasil pasti dan besar, dengan tim yang anonim",
                "Kode kontraknya terbuka dan sudah diaudit pihak independen",
                "Pendapatan protokolnya bisa diperiksa langsung secara on-chain",
                "Token milik tim dikunci bertahap selama beberapa tahun",
              ],
              answer: 0,
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

<div data-diagram="cycle" data-steps="Catat semua transaksi|Susun laporan bulanan|Bandingkan dengan anggaran|Perbaiki keputusan" data-center="tiap bulan" data-caption="Keuangan bisnis dikelola dalam putaran bulanan, bukan sekali setahun"></div>


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
                "Memisahkan rekening pribadi dan bisnis serta mencatat semua transaksi",
                "Menyimpan seluruh uang usaha dalam bentuk tunai agar mudah dipakai",
                "Mencatat transaksi besar saja agar pembukuan tidak terlalu rumit",
                "Menunggu akhir tahun untuk merekap seluruh transaksi sekaligus",
              ],
              answer: 0,
              explain:
                "Pemisahan & pencatatan adalah fondasi pengelolaan keuangan yang sehat.",
            },
            {
              q: "Mengapa memantau kas sama pentingnya dengan laba?",
              options: [
                "Karena bisnis yang untung pun bisa kehabisan kas lalu kolaps",
                "Karena kas selalu sama besarnya dengan laba bersih perusahaan",
                "Karena investor hanya melihat saldo kas saat menilai perusahaan",
                "Karena laba tidak perlu dilaporkan kepada kantor pajak",
              ],
              answer: 0,
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

<div data-diagram="pipeline" data-stages="Ide::masalah nyata milik siapa?|Uji pasar::adakah yang mau membayar?|Model bisnis::untung per transaksi|Skala::tumbuh tanpa biaya ikut meledak" data-caption="Empat saringan sebelum sebuah bisnis layak dibesarkan"></div>


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
                "Berapa bulan bisnis bisa bertahan dengan kas yang tersedia",
                "Berapa lama waktu yang dibutuhkan hingga bisnis balik modal",
                "Jumlah pelanggan yang dibutuhkan untuk mencapai titik impas",
                "Batas waktu pelunasan utang yang disepakati dengan bank",
              ],
              answer: 0,
              explain:
                "Runway = Kas ÷ pengeluaran bulanan — daya tahan finansial bisnis.",
            },
            {
              q: "Konsekuensi memilih pendanaan dari investor?",
              options: [
                "Mendapat modal besar, tapi melepas sebagian kepemilikan dan kendali",
                "Mendapat modal besar, tapi wajib membayar bunga tetap setiap bulan",
                "Mendapat modal kecil, tapi kepemilikan tetap utuh sepenuhnya",
                "Mendapat modal tanpa syarat apa pun karena investor menanggung risiko",
              ],
              answer: 0,
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
                "Banyak penjualan kredit: labanya tercatat, tapi uang tunainya belum masuk",
                "Harga jual yang terlalu murah membuat labanya sebenarnya negatif",
                "Pajak penghasilan dipotong langsung dari kas toko setiap hari",
                "Pemilik menarik laba lebih besar daripada yang tercatat di buku",
              ],
              answer: 0,
              explain:
                "Penjualan kredit menambah laba & piutang, tetapi belum menambah kas.",
            },
            {
              q: "Tindakan paling tepat menghindari krisis kas?",
              options: [
                "Menagih piutang tepat waktu dan memantau kas seketat memantau laba",
                "Menaikkan harga jual setinggi mungkin agar laba makin besar",
                "Memperbanyak penjualan kredit agar pelanggan makin banyak",
                "Menambah persediaan barang agar tidak pernah kehabisan stok",
              ],
              answer: 0,
              explain:
                "Disiplin menagih piutang & memantau kas menjaga likuiditas bisnis.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 15: DUNIA INVESTASI & PENGELOLAAN DANA ---------------- */
    {
      id: "acc-investasi",
      level: "Investasi",
      title: "Dunia Investasi & Pengelolaan Dana",
      summary: "Mengenal pelaku industri: public equity, reksa dana/ETF, hedge fund, private equity — beserta biaya, bias, konflik kepentingan, dan capital allocator institusional.",
      lessons: [
        {
          id: "acc-inv-1",
          title: "Peta Pelaku Dunia Investasi",
          duration: "11 menit",
          content: `
<p>Kamu sudah bisa <b>menilai</b> sebuah bisnis. Pertanyaan berikutnya: <b>siapa saja yang melakukan ini secara profesional</b>, dan bagaimana industrinya bekerja?</p>

<div data-diagram="network" data-center="Uang investor" data-nodes="Reksa dana|Hedge fund|Private equity|Venture capital|Dana pensiun" data-caption="Semuanya mengelola uang orang lain — bedanya pada aturan main dan siapa yang boleh masuk"></div>


<div class="callout">
<b>Fundamental:</b> di dunia ini ada orang yang <b>punya uang</b> tapi tak punya waktu/keahlian mengelolanya, dan ada orang yang <b>punya keahlian</b> tapi tak punya cukup uang. Seluruh industri pengelolaan dana lahir dari pertemuan keduanya.
</div>

<h3>Dua sisi</h3>
<table class="tbl">
  <tr><th>Pemilik dana</th><th>Pengelola dana</th></tr>
  <tr><td><b>Ritel</b> — orang biasa seperti kita</td><td><b>Manajer Investasi</b> — mengelola reksa dana</td></tr>
  <tr><td><b>Institusi</b> — dana pensiun, asuransi, yayasan</td><td><b>Hedge fund</b> — strategi bebas, untuk investor besar</td></tr>
  <tr><td><b>Sovereign wealth fund</b> — dana milik negara</td><td><b>Private equity &amp; VC</b> — membeli perusahaan tertutup/startup</td></tr>
</table>

<h3>Pasar publik vs privat</h3>
<ul>
  <li><b>Public equity</b> — saham perusahaan yang <b>tercatat di bursa</b>. Siapa saja bisa beli, harganya terlihat setiap detik, laporannya wajib terbuka.</li>
  <li><b>Private equity</b> — perusahaan <b>tidak tercatat di bursa</b>. Sulit diakses, tidak likuid, informasinya terbatas.</li>
</ul>

<div class="callout warn">
<b>Kenapa ini penting bagimu?</b> Karena sebagian besar produk yang ditawarkan ke orang biasa (reksa dana, ETF) <b>memungut biaya</b>, dan biaya itu berdampak besar dalam jangka panjang. Memahami industrinya = <b>melindungi dirimu sendiri</b> — itulah tujuan modul ini, bukan mengajarimu masuk ke industri tersebut.
</div>
`,
          keyPoints: [
            "Industri pengelolaan dana mempertemukan pemilik dana (ritel, institusi) dengan pengelola berkeahlian.",
            "Pengelola: manajer investasi (reksa dana), hedge fund, private equity & VC.",
            "Public equity = saham di bursa (terbuka, likuid); private equity = perusahaan tertutup (sulit diakses, tidak likuid).",
            "Tujuan mempelajarinya: melindungi diri dari biaya & praktik yang merugikan, bukan untuk masuk industri.",
          ],
          quiz: [
            {
              q: "Apa beda utama public equity & private equity?",
              options: [
                "Public tercatat di bursa & likuid; private perusahaan tertutup & sulit dijual",
                "Public dimiliki pemerintah; private dimiliki perorangan atau keluarga",
                "Public hanya untuk investor asing; private untuk investor dalam negeri",
                "Public bebas pajak; private dikenai pajak yang lebih tinggi",
              ],
              answer: 0,
              explain:
                "Perbedaan intinya pada keterbukaan informasi & kemudahan diperjualbelikan.",
            },
            {
              q: "Kenapa orang biasa perlu memahami industri pengelolaan dana?",
              options: [
                "Agar paham biaya & praktik industrinya sehingga tidak dirugikan",
                "Agar bisa langsung bekerja sebagai manajer investasi profesional",
                "Agar bisa memilih saham yang pasti naik tanpa bantuan siapa pun",
                "Agar terhindar dari kewajiban membayar pajak atas hasil investasi",
              ],
              answer: 0,
              explain:
                "Literasi ini bersifat melindungi — terutama soal biaya & konflik kepentingan.",
            },
          ],
        },
        {
          id: "acc-inv-2",
          title: "Public Equity, Reksa Dana & ETF",
          duration: "12 menit",
          content: `
<p>Ini bagian industri yang <b>paling relevan</b> untuk orang biasa — karena benar-benar bisa diakses siapa saja.</p>

<div data-diagram="vs" data-left="AKTIF::Berusaha mengalahkan indeks::Biaya lebih tinggi" data-right="PASIF::Menyamai indeks::Biaya lebih rendah" data-caption="Pengelolaan aktif vs pasif"></div>


<h3>Indeks: mengukur pasar</h3>
<p><b>Indeks</b> adalah sekumpulan saham yang dipakai sebagai <b>tolok ukur</b> (mis. IHSG di Indonesia, S&amp;P 500 di AS). Indeks menjawab: "pasar secara keseluruhan naik atau turun?"</p>

<h3>Dua cara berinvestasi di saham</h3>
<table class="tbl">
  <tr><th></th><th>Pengelolaan Aktif</th><th>Pengelolaan Pasif (Indeks)</th></tr>
  <tr><td>Tujuan</td><td><b>Mengalahkan</b> indeks</td><td><b>Menyamai</b> indeks</td></tr>
  <tr><td>Caranya</td><td>Manajer memilih saham</td><td>Membeli semua saham dalam indeks</td></tr>
  <tr><td>Biaya</td><td>Lebih <b>tinggi</b> (riset, tim, transaksi)</td><td>Lebih <b>rendah</b></td></tr>
</table>

<h3>Reksa dana vs ETF</h3>
<ul>
  <li><b>Reksa dana</b> — dana patungan yang dikelola manajer investasi. Dibeli/dijual pada <b>harga akhir hari</b> (NAB).</li>
  <li><b>ETF</b> (Exchange Traded Fund) — mirip reksa dana, tapi <b>diperdagangkan di bursa</b> seperti saham, bisa dibeli kapan saja saat bursa buka. ETF indeks umumnya berbiaya rendah.</li>
</ul>

<div class="callout">
<b>Diversifikasi:</b> keunggulan utama produk ini. Dengan satu produk, uangmu tersebar ke puluhan/ratusan saham — sehingga kegagalan satu perusahaan tidak menghancurkan seluruh portofolio. Ini penerapan prinsip <b>jangan menaruh semua telur dalam satu keranjang</b>.
</div>

<div class="callout warn">
<b>Yang wajib dicek sebelum membeli:</b> <b>expense ratio</b> (biaya tahunan), apa <b>tolok ukur</b>-nya, dan apakah produknya aktif atau pasif. Biaya kecil di kertas berdampak sangat besar dalam jangka panjang — kita hitung di pelajaran ke-5.
</div>
`,
          keyPoints: [
            "Indeks (mis. IHSG) = tolok ukur kinerja pasar secara keseluruhan.",
            "Aktif berusaha mengalahkan indeks (biaya lebih tinggi); pasif menyamai indeks (biaya lebih rendah).",
            "Reksa dana dibeli pada harga akhir hari (NAB); ETF diperdagangkan di bursa seperti saham.",
            "Keunggulan utama: diversifikasi. Wajib cek: expense ratio, tolok ukur, & aktif/pasif.",
          ],
          quiz: [
            {
              q: "Apa tujuan pengelolaan pasif (indeks)?",
              options: [
                "Menyamai kinerja indeks dengan biaya serendah mungkin",
                "Mengalahkan kinerja indeks dengan memilih saham terbaik",
                "Menghindari seluruh risiko pasar dengan menyimpan kas",
                "Mencari saham murah yang belum ditemukan investor lain",
              ],
              answer: 0,
              explain: "Strategi pasif meniru indeks, menekan biaya seminimal mungkin.",
            },
            {
              q: "Apa beda utama ETF dari reksa dana biasa?",
              options: [
                "ETF diperdagangkan di bursa seperti saham, bisa dibeli saat bursa buka",
                "ETF dijamin tidak pernah rugi karena selalu mengikuti indeks",
                "ETF hanya bisa dibeli satu kali sebulan pada tanggal tertentu",
                "ETF dikelola aktif, sedangkan reksa dana selalu pasif",
              ],
              answer: 0,
              explain:
                "ETF diperjualbelikan di bursa, sedangkan reksa dana memakai NAB akhir hari.",
            },
          ],
        },
        {
          id: "acc-inv-3",
          title: "Hedge Fund — Struktur & Realitanya",
          duration: "12 menit",
          content: `
<p><b>Hedge fund</b> sering terdengar mewah & misterius. Mari lihat apa adanya.</p>

<div class="callout">
<b>Fundamental:</b> hedge fund adalah dana kelolaan dengan <b>kebebasan strategi jauh lebih besar</b> daripada reksa dana biasa — boleh memakai utang (leverage), bertaruh harga turun (short selling), derivatif, dan aset tak biasa. Sebagai gantinya, ia <b>hanya boleh menerima investor besar/terkualifikasi</b>, bukan masyarakat umum.
</div>

<h3>Nama "hedge" itu dari mana?</h3>
<p><i>Hedge</i> = <b>lindung nilai</b>. Ide awalnya: memegang posisi beli DAN posisi jual sekaligus, agar untung tak terlalu bergantung pada arah pasar. Namun kini banyak hedge fund justru <b>tidak</b> melakukan lindung nilai — namanya tinggal warisan sejarah.</p>

<h3>Struktur biaya "2 dan 20"</h3>
<table class="tbl">
  <tr><th>Komponen</th><th>Besaran umum</th><th>Artinya</th></tr>
  <tr><td><b>Management fee</b></td><td>~2% per tahun</td><td>Dari <b>total dana kelolaan</b> — dibayar <b>untung maupun rugi</b></td></tr>
  <tr><td><b>Performance fee</b></td><td>~20% dari keuntungan</td><td>Manajer mengambil seperlima dari laba</td></tr>
</table>

<p>Beberapa istilah pelindung investor:</p>
<ul>
  <li><b>High-water mark</b> — manajer baru boleh memungut performance fee lagi setelah menutup kerugian sebelumnya.</li>
  <li><b>Hurdle rate</b> — performance fee hanya berlaku di atas ambang return tertentu.</li>
</ul>

<div class="callout warn">
<b>Ketimpangan yang harus disadari:</b> <b>management fee tetap dibayar meski dana merugi</b>. Artinya manajer tetap dapat penghasilan dari <b>besarnya dana</b>, bukan semata dari hasilmu. Ini akar konflik kepentingan yang kita bahas di pelajaran Konflik Kepentingan.
</div>

<div class="callout">
<b>Realitas akses:</b> hedge fund umumnya <b>tertutup</b> bagi masyarakat umum karena ada syarat minimum investasi & kualifikasi investor. Jadi bagi kebanyakan orang, ini pengetahuan untuk <b>memahami</b> — bukan produk yang bisa dibeli.
</div>
`,
          keyPoints: [
            "Hedge fund = dana kelolaan dengan kebebasan strategi luas (leverage, short selling, derivatif), hanya untuk investor terkualifikasi.",
            "Nama 'hedge' berasal dari lindung nilai, tapi banyak hedge fund modern tak melakukannya.",
            "Struktur '2 dan 20': ~2% dari dana kelolaan per tahun + ~20% dari keuntungan.",
            "Management fee dibayar untung maupun rugi — akar konflik kepentingan; high-water mark & hurdle rate adalah pelindung investor.",
          ],
          practice: [
            { type: "number", q: "Dana kelolaan Rp100 miliar dengan management fee 2%. Berapa fee setahun, walau dananya merugi? (miliar)", answer: 2, unit: "miliar", hint: "2% × dana kelolaan.", solution: "2% × 100 miliar = Rp2 miliar — tetap dibayar meski rugi." },
            { type: "number", q: "Keuntungan tahun ini Rp50 miliar, performance fee 20%. Berapa bagian manajer? (miliar)", answer: 10, unit: "miliar", hint: "20% × keuntungan.", solution: "20% × 50 = Rp10 miliar." },
          ],
          quiz: [
            {
              q: "Apa arti struktur '2 dan 20'?",
              options: [
                "~2% biaya tahunan dari dana kelolaan + ~20% dari keuntungan",
                "~2% dari keuntungan + ~20% biaya tahunan dari dana kelolaan",
                "Minimal investasi 2 miliar dengan jangka waktu 20 tahun",
                "Maksimal 2 manajer untuk mengelola 20 portofolio sekaligus",
              ],
              answer: 0,
              explain: "Management fee ~2% dari AUM dan performance fee ~20% dari laba.",
            },
            {
              q: "Apa fungsi 'high-water mark'?",
              options: [
                "Performance fee baru boleh dipungut setelah kerugian sebelumnya tertutup",
                "Batas maksimal dana yang boleh dikelola oleh satu hedge fund",
                "Imbal hasil tertinggi yang dijanjikan manajer kepada investornya",
                "Batas kerugian yang memaksa dana ditutup secara otomatis",
              ],
              answer: 0,
              explain:
                "High-water mark mencegah manajer dibayar dua kali atas kenaikan yang sama setelah rugi.",
            },
          ],
        },
        {
          id: "acc-inv-4",
          title: "Private Equity & Venture Capital",
          duration: "12 menit",
          content: `
<p>Kalau public equity membeli <b>sebagian kecil</b> perusahaan lewat bursa, private equity membeli perusahaan <b>secara utuh atau mayoritas</b> — lalu berusaha memperbaikinya.</p>

<h3>Private Equity (PE)</h3>
<ol>
  <li><b>Beli</b> perusahaan yang sudah mapan (sering dengan bantuan <b>utang besar</b> — disebut <i>leveraged buyout</i>/LBO).</li>
  <li><b>Perbaiki</b> selama beberapa tahun: efisiensi, pertumbuhan, manajemen baru.</li>
  <li><b>Jual</b> kembali dengan harga lebih tinggi (ke perusahaan lain atau lewat IPO).</li>
</ol>

<div class="callout warn">
<b>Sisi gelap LBO:</b> karena pembelian dibiayai utang, <b>utangnya ditanggung perusahaan yang dibeli</b>. Kalau perbaikannya gagal, perusahaan bisa terjerat beban utang berat. Ini alasan LBO sering menjadi kontroversi.
</div>

<h3>Venture Capital (VC)</h3>
<p>VC mendanai <b>startup tahap awal</b> yang berisiko sangat tinggi. Model bisnisnya unik:</p>
<div class="callout">
<b>Power law:</b> dari 10 startup yang didanai, mungkin <b>7 gagal total</b>, 2 sekadar balik modal, dan <b>1 tumbuh raksasa</b> — dan yang satu itu menutupi semua kerugian lainnya. Jadi VC tidak mencari "aman", tapi mencari <b>kemungkinan besar sekali</b>.
</div>

<h3>Ciri khas PE & VC</h3>
<table class="tbl">
  <tr><th>Ciri</th><th>Penjelasan</th></tr>
  <tr><td><b>Tidak likuid</b></td><td>Dana terkunci bertahun-tahun (sering 7–10 tahun) — tidak bisa ditarik sewaktu-waktu</td></tr>
  <tr><td><b>J-curve</b></td><td>Tahun-tahun awal sering terlihat <b>rugi</b> (biaya sudah keluar, hasil belum terwujud), baru membaik belakangan</td></tr>
  <tr><td><b>Penilaian subjektif</b></td><td>Karena tak ada harga pasar harian, nilainya <b>ditaksir</b> — bisa terlalu optimistis</td></tr>
  <tr><td><b>Akses terbatas</b></td><td>Umumnya hanya untuk institusi & investor besar</td></tr>
</table>

<div class="callout">
<b>Kaitannya dengan yang sudah kamu pelajari:</b> PE memakai <b>DCF</b> & analisis <b>arus kas</b> untuk menilai target, lalu memperbaiki <b>ROIC</b> dan <b>alokasi modal</b>-nya. Persis kerangka yang kamu kuasai di modul-modul sebelumnya.
</div>
`,
          keyPoints: [
            "Private equity membeli perusahaan mapan (sering lewat LBO/utang), memperbaikinya, lalu menjual kembali.",
            "Risiko LBO: utang pembelian ditanggung perusahaan target — berbahaya bila perbaikan gagal.",
            "VC mendanai startup awal dengan model power law: mayoritas gagal, satu pemenang menutup semuanya.",
            "Ciri PE/VC: tidak likuid (terkunci bertahun-tahun), J-curve, penilaian subjektif, akses terbatas.",
          ],
          practice: [
            { type: "choice", q: "Dari 10 startup yang didanai VC, 7 gagal, 2 balik modal, 1 tumbuh sangat besar. Pola ini disebut?", options: ["Diversifikasi", "Power law", "Arbitrase", "Hedging"], answer: 1, hint: "Satu pemenang besar menentukan hasil keseluruhan.", solution: "Power law: sebagian kecil pemenang mendominasi seluruh imbal hasil." },
            { type: "choice", q: "Apa risiko utama leveraged buyout (LBO) bagi perusahaan yang dibeli?", options: ["Tidak ada risiko", "Utang pembelian ditanggung perusahaan target — bisa terjerat beban berat bila gagal", "Pajaknya naik", "Karyawan bertambah"], answer: 1, hint: "Siapa yang menanggung utang pembeliannya?", solution: "Beban utang berpindah ke perusahaan target, meningkatkan risiko kebangkrutan." },
          ],
          quiz: [
            {
              q: "Apa itu 'J-curve' pada private equity?",
              options: [
                "Tahun-tahun awal sering terlihat rugi sebelum hasilnya membaik",
                "Imbal hasil tertinggi selalu dicapai pada tahun pertama investasi",
                "Nilai dana turun terus setelah tahun kelima hingga dilikuidasi",
                "Biaya pengelolaan naik tajam menjelang akhir masa investasi",
              ],
              answer: 0,
              explain:
                "Biaya keluar lebih dulu sementara hasil investasi baru terwujud kemudian.",
            },
            {
              q: "Kenapa penilaian (valuasi) di PE/VC lebih subjektif?",
              options: [
                "Tak ada harga pasar harian — nilainya ditaksir dan bisa terlalu optimistis",
                "Aturan akuntansi melarang PE/VC memakai harga pasar apa pun",
                "Perusahaan yang dibeli selalu menolak menyerahkan laporan keuangan",
                "Valuasinya ditentukan langsung oleh regulator pasar modal",
              ],
              answer: 0,
              explain: "Tanpa pasar publik, nilai bergantung pada estimasi internal.",
            },
          ],
        },
        {
          id: "acc-inv-5",
          title: "Biaya, Kinerja & Bias — Pelajaran Terpenting",
          duration: "14 menit",
          content: `
<p>Kalau kamu hanya mengingat <b>satu</b> pelajaran dari modul ini, jadikan yang ini.</p>

<div data-diagram="flow" data-steps="Return Kotor|− Biaya Tahunan|= Hasil Bersihmu" data-caption="Biaya memotong hasil setiap tahun"></div>


<h3>1. Biaya kecil, dampak raksasa</h3>
<div class="callout">
Biaya 2% per tahun terdengar sepele. Tapi biaya dipungut <b>setiap tahun</b>, dari <b>seluruh</b> danamu, dan menggerus <b>efek bunga majemuk</b>. Dalam puluhan tahun, dampaknya bisa memangkas <b>sepertiga hasil akhir</b> atau lebih.
</div>

<h3>Coba sendiri — lihat dampak biaya 👇</h3>
<div data-demo="js-playground">// Dampak biaya tahunan terhadap hasil 20 tahun
const modalAwal = 100000000;   // Rp100 juta
const returnKotor = 0.10;      // 10% per tahun sebelum biaya
const tahun = 20;

[0, 0.01, 0.02].forEach(function(biaya){
  let nilai = modalAwal;
  let t = 0;
  while (t !== tahun) {
    nilai = nilai * (1 + returnKotor - biaya);
    t = t + 1;
  }
  console.log("Biaya " + (biaya*100).toFixed(0) + "%/thn -> Rp" + Math.round(nilai).toLocaleString("id-ID"));
});
console.log("-----");
console.log("Bandingkan hasilnya. Biaya 2% memangkas hasil akhir sangat besar.");</div>

<h3>2. Aktif vs pasif: apa kata data</h3>
<div class="callout warn">
Riset jangka panjang (mis. laporan <b>SPIVA</b> dari S&amp;P) secara konsisten menemukan bahwa <b>mayoritas manajer aktif kalah dari indeks pembandingnya</b> setelah dihitung biaya, terutama dalam periode 10–15 tahun. Bukan karena mereka tak pandai — tapi karena <b>biaya</b> dan sulitnya mengalahkan pasar secara konsisten.
</div>

<h3>3. Survivorship bias</h3>
<p>Reksa dana yang <b>berkinerja buruk sering ditutup</b> dan hilang dari daftar. Akibatnya, statistik industri hanya menampilkan yang <b>selamat</b> — sehingga kinerja rata-rata terlihat <b>lebih baik dari kenyataan</b>. Selalu ingat: kamu melihat para penyintas, bukan seluruh peserta.</p>

<h3>4. Keberuntungan vs keahlian</h3>
<p>Jika ribuan manajer berinvestasi, <b>secara statistik</b> pasti ada yang menang beberapa tahun berturut-turut — sama seperti dari ribuan pelempar koin pasti ada yang dapat "gambar" 5 kali beruntun. Karena itu kinerja masa lalu jangka pendek <b>bukan bukti keahlian</b>, dan sering terjadi <b>kembali ke rata-rata</b> setelahnya.</p>

<div class="callout">
<b>Kesimpulan praktis:</b> perhatikan hal yang <b>bisa kamu kendalikan</b> — <b>biaya</b>, <b>diversifikasi</b>, dan <b>jangka waktu</b>. Kamu tidak bisa mengendalikan imbal hasil pasar.
</div>
`,
          keyPoints: [
            "Biaya tahunan menggerus efek bunga majemuk — 2%/tahun bisa memangkas sepertiga hasil akhir dalam 20 tahun.",
            "Riset jangka panjang (mis. SPIVA) konsisten menemukan mayoritas manajer aktif kalah dari indeks setelah biaya.",
            "Survivorship bias: dana berkinerja buruk ditutup & hilang dari statistik, membuat kinerja industri tampak lebih baik.",
            "Menang beberapa tahun beruntun bisa sekadar keberuntungan statistik; sering terjadi kembali ke rata-rata.",
            "Yang bisa dikendalikan: biaya, diversifikasi, & jangka waktu — bukan imbal hasil pasar.",
          ],
          practice: [
            { type: "number", q: "Modal Rp100jt, return kotor 10%/tahun, biaya 2%/tahun. Berapa return bersih per tahunnya? (%)", answer: 8, tol: 0.1, hint: "Return kotor − biaya.", solution: "10% − 2% = 8% per tahun." },
            { type: "choice", q: "Statistik kinerja reksa dana terlihat bagus karena dana yang gagal sudah ditutup & hilang dari data. Ini disebut?", options: ["Survivorship bias", "Diversifikasi", "Hedging", "Power law"], answer: 0, hint: "Hanya yang selamat yang terlihat.", solution: "Survivorship bias — data hanya memuat penyintas." },
          ],
          quiz: [
            {
              q: "Kenapa biaya 2% per tahun berdampak sangat besar dalam jangka panjang?",
              options: [
                "Dipungut tiap tahun dari seluruh dana, menggerus efek bunga majemuk",
                "Biaya itu hanya dipungut saat investasi sedang untung",
                "Biaya 2% setara kehilangan 2% dana di akhir masa investasi saja",
                "Biaya itu dikenai pajak tambahan sebesar dua kali lipat",
              ],
              answer: 0,
              explain: "Pemotongan berulang menghambat pertumbuhan majemuk secara kumulatif.",
            },
            {
              q: "Apa kesimpulan riset jangka panjang tentang manajer aktif?",
              options: [
                "Mayoritas kalah dari indeks pembandingnya setelah dihitung biaya",
                "Mayoritas mengalahkan indeks secara konsisten setiap tahun",
                "Hampir semua manajer aktif menyamai indeks secara persis",
                "Manajer aktif selalu unggul saat pasar sedang naik",
              ],
              answer: 0,
              explain:
                "Biaya & sulitnya konsisten mengalahkan pasar membuat mayoritas tertinggal dari indeks.",
            },
          ],
        },
        {
          id: "acc-inv-6",
          title: "Konflik Kepentingan & Realitas untuk Orang Biasa",
          duration: "12 menit",
          content: `
<p>Pelajaran ini: memahami <b>insentif</b> pihak yang menawarkan produk keuangan kepadamu.</p>

<h3>Aturan emas: ikuti alur uangnya</h3>
<div class="callout">
<b>Pertanyaan yang harus selalu kamu ajukan:</b> <i>"Orang ini dibayar dari mana?"</i> Jawabannya menjelaskan hampir semua perilakunya.
</div>

<table class="tbl">
  <tr><th>Situasi</th><th>Konflik yang muncul</th></tr>
  <tr><td>Manajer dibayar <b>% dari dana kelolaan</b></td><td>Dorongan utamanya <b>memperbesar dana</b>, belum tentu memperbaiki hasilmu</td></tr>
  <tr><td>Tenaga penjual dapat <b>komisi</b></td><td>Cenderung menawarkan produk berkomisi tinggi, bukan yang terbaik untukmu</td></tr>
  <tr><td>Performance fee tanpa <b>high-water mark</b></td><td>Manajer bisa dibayar dua kali atas pemulihan kerugian yang sama</td></tr>
  <tr><td>Kinerja ditampilkan sejak <b>tanggal pilihan</b></td><td>Periode dipilih agar terlihat paling bagus (<i>cherry picking</i>)</td></tr>
</table>

<h3>🚩 Tanda bahaya saat ditawari produk keuangan</h3>
<ul>
  <li>Menjanjikan imbal hasil <b>pasti</b> atau "bebas risiko" dengan hasil tinggi.</li>
  <li>Mendesakmu memutuskan <b>cepat-cepat</b> ("promo terbatas").</li>
  <li>Struktur biaya <b>tidak dijelaskan</b> dengan gamblang.</li>
  <li>Produk/lembaganya <b>tidak terdaftar &amp; berizin</b> di otoritas (di Indonesia: OJK).</li>
  <li>Skema yang membayar investor lama dari uang investor baru (<b>Ponzi</b>).</li>
</ul>

<h3>Realitas jujur untuk orang biasa</h3>
<div class="callout">
Hedge fund &amp; private equity <b>umumnya tidak bisa diakses</b> masyarakat umum. Yang realistis bagi kebanyakan orang justru sederhana: <b>biaya rendah</b>, <b>diversifikasi luas</b>, <b>waktu yang panjang</b>, dan <b>disiplin</b> — plus dana darurat sebelum berinvestasi.
</div>

<div class="callout warn">
<b>Penutup yang jujur:</b> modul ini <b>tidak</b> mengajarimu memilih produk investasi tertentu, dan bukan saran finansial. Tujuannya membuatmu <b>paham cara industri ini bekerja</b> — supaya kamu bisa bertanya dengan tepat, membaca biaya dengan teliti, dan tidak mudah dibujuk janji manis. Untuk keputusan nyata, pertimbangkan penasihat keuangan <b>berizin</b>.
</div>
`,
          keyPoints: [
            "Aturan emas: tanyakan 'orang ini dibayar dari mana?' — insentif menjelaskan perilaku.",
            "Konflik umum: fee dari besarnya dana kelolaan, komisi penjualan, performance fee tanpa high-water mark, cherry picking periode kinerja.",
            "Red flag: janji imbal hasil pasti, desakan cepat memutuskan, biaya tak transparan, tidak berizin, skema Ponzi.",
            "Realistis bagi orang biasa: biaya rendah, diversifikasi, jangka panjang, disiplin, & dana darurat lebih dulu.",
          ],
          quiz: [
            {
              q: "Apa 'aturan emas' memahami konflik kepentingan?",
              options: [
                "Tanyakan: orang ini dibayar dari mana? Insentifnya menjelaskan perilakunya",
                "Percayai penasihat yang memiliki sertifikasi resmi paling banyak",
                "Pilih produk yang paling sering direkomendasikan di media sosial",
                "Ikuti saran penasihat yang paling lama berkarier di industri",
              ],
              answer: 0,
              explain: "Mengetahui sumber pendapatan seseorang mengungkap dorongan perilakunya.",
            },
            {
              q: "Manakah red flag paling jelas saat ditawari produk investasi?",
              options: [
                "Menjanjikan hasil pasti bebas risiko dan mendesak memutuskan cepat",
                "Mencantumkan riwayat kinerja masa lalu beserta risikonya",
                "Terdaftar dan diawasi oleh otoritas jasa keuangan",
                "Memungut biaya pengelolaan yang disebutkan secara jelas",
              ],
              answer: 0,
              explain:
                "Janji hasil pasti + tekanan waktu adalah pola klasik penipuan investasi.",
            },
          ],
        },
        {
          id: "acc-inv-7",
          title: "Capital Allocator Institusional — Siapa yang Mendanai Para Manajer",
          duration: "14 menit",
          content: `
<p>Sepanjang modul ini kita melihat industri dari sisi <b>manajer</b>: hedge fund, private equity, venture capital. Sekarang kita balik kameranya. <b>Dari mana uang mereka datang?</b> Jawabannya: dari sekelompok pihak yang disebut <b>capital allocator</b>.</p>

<div data-diagram="network" data-center="Capital allocator" data-nodes="Dana pensiun|Dana abadi kampus|Perusahaan asuransi|Family office|Dana kekayaan negara" data-caption="Pemilik uang sesungguhnya — mereka tidak mengelola sendiri, tapi memilih siapa yang mengelola"></div>

<div class="callout warn">
<b>Satu istilah, dua arti — jangan tertukar.</b><br><br>
1. <b>CEO sebagai capital allocator</b> — memutuskan ke mana kas <i>perusahaannya</i> mengalir (dibahas di modul <b>Kualitas Bisnis</b>).<br>
2. <b>Allocator institusional</b> — lembaga yang memutuskan <i>manajer mana</i> yang dipercaya mengelola dananya. Inilah yang dibahas di pelajaran ini.<br><br>
Keduanya mengerjakan hal yang sama secara prinsip — <b>menaruh modal di tempat terbaiknya</b> — hanya pada lapisan yang berbeda.
</div>

<h3>Fundamental: rantai uang yang jarang terlihat</h3>
<p>Ketika membaca berita "private equity X mengakuisisi perusahaan Y", uang itu <b>bukan milik</b> private equity tersebut. Rantainya begini:</p>

<div data-diagram="pipeline" data-stages="Orang biasa::iuran pensiun, premi asuransi|Allocator::dana pensiun, asuransi|Manajer::PE, hedge fund, reksa dana|Perusahaan::yang akhirnya dibeli" data-caption="Uangmu mungkin ada di ujung rantai ini tanpa kamu sadari"></div>

<div class="callout">
<b>Ini menyangkut kamu langsung.</b> Kalau kamu bekerja dan iuran <b>BPJS Ketenagakerjaan</b> atau dana pensiun dipotong dari gajimu, maka <b>kamu adalah bagian dari rantai ini</b>. Uangmu dikelola oleh sebuah allocator, yang memilihkan ke mana ia diinvestasikan.
</div>

<h3>Siapa saja mereka</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Sumber uangnya</th><th>Ciri khas</th></tr>
  <tr><td><b>Dana pensiun</b></td><td>Iuran pekerja &amp; pemberi kerja</td><td>Kewajiban sangat panjang (puluhan tahun); paling konservatif</td></tr>
  <tr><td><b>Dana abadi</b> <i>(endowment)</i></td><td>Sumbangan alumni ke universitas</td><td>Jangka waktu <b>tak terbatas</b> — paling berani mengambil aset tak likuid</td></tr>
  <tr><td><b>Asuransi</b></td><td>Premi nasabah</td><td>Harus siap membayar klaim kapan saja; diatur sangat ketat</td></tr>
  <tr><td><b>Family office</b></td><td>Kekayaan satu keluarga kaya</td><td>Paling bebas aturan; sangat beragam gayanya</td></tr>
  <tr><td><b>Dana kekayaan negara</b><br><i>(sovereign wealth fund)</i></td><td>Surplus negara / hasil sumber daya alam</td><td>Sangat besar; sering punya tujuan strategis, bukan hanya untung</td></tr>
</table>

<h3>Istilah yang wajib dikenal: LP dan GP</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Siapa</th><th>Perannya</th></tr>
  <tr><td><b>LP</b> — Limited Partner</td><td>Allocator (dana pensiun, endowment, dll.)</td><td><b>Menyetor uang.</b> Tidak ikut mengelola, tanggung jawabnya terbatas pada uang yang disetor</td></tr>
  <tr><td><b>GP</b> — General Partner</td><td>Manajer (PE, VC, hedge fund)</td><td><b>Mengelola uang</b> &amp; mengambil keputusan investasi. Menerima management fee + bagi hasil</td></tr>
</table>

<div class="callout">
<b>Kenapa struktur ini ada?</b> LP punya <b>uang</b> tapi tidak punya waktu dan keahlian untuk menilai ratusan perusahaan. GP punya <b>keahlian</b> tapi tidak punya uang sebanyak itu. Keduanya saling melengkapi — dengan harga: fee.
</div>

<h3>Pekerjaan seorang allocator sebenarnya apa?</h3>
<p>Mereka <b>tidak</b> memilih saham. Pekerjaan mereka satu tingkat di atas itu:</p>
<ol>
  <li><b>Menentukan alokasi aset</b> — berapa persen ke saham, obligasi, properti, aset alternatif. Riset menunjukkan <b>keputusan inilah</b>, bukan pemilihan saham, yang menentukan sebagian besar hasil jangka panjang.</li>
  <li><b>Memilih manajer</b> — dari ribuan GP, siapa yang benar-benar punya keahlian dan bukan sekadar beruntung?</li>
  <li><b>Menegosiasikan syarat</b> — fee, kunci waktu, transparansi.</li>
  <li><b>Memantau &amp; memutuskan berhenti</b> — kapan menarik dana dari manajer yang memburuk.</li>
</ol>

<div class="callout warn">
<b>Tantangan terberatnya: membedakan keahlian dari keberuntungan.</b><br><br>
Manajer dengan hasil bagus 3 tahun berturut-turut mungkin memang hebat — atau mungkin hanya kebetulan gaya investasinya sedang cocok dengan pasar. Membedakannya butuh data <b>puluhan tahun</b>, sementara keputusannya harus diambil <b>sekarang</b>. Ini masalah yang secara mendasar <b>tidak bisa diselesaikan dengan pasti</b>.
</div>

<h3>Pola yang mereka hadapi</h3>
<table class="tbl">
  <tr><th>Masalah</th><th>Penjelasan</th></tr>
  <tr><td><b>Mengejar performa</b></td><td>Allocator cenderung masuk ke manajer <b>setelah</b> hasilnya bagus — yaitu tepat saat gayanya mulai kehilangan momentum. Membeli mahal, menjual murah, pada tingkat institusi</td></tr>
  <tr><td><b>Risiko karier</b></td><td>Memilih manajer terkenal yang lalu rugi bisa dimaafkan. Memilih manajer tak dikenal yang lalu rugi bisa menghilangkan pekerjaan. Akibatnya banyak allocator memilih yang <b>aman secara politis</b>, bukan yang terbaik</td></tr>
  <tr><td><b>Beban fee bertingkat</b></td><td>Kamu bayar fee ke dana pensiun, dana pensiun bayar fee ke GP, GP kadang menaruh di fund lain. Tiap lapis memotong hasilmu</td></tr>
</table>

<h3>💡 Kenapa ini berguna bagi kamu</h3>
<div class="callout">
Kamu mungkin tidak akan pernah menjadi LP sebuah private equity. Tapi kamu <b>sudah</b> menjadi capital allocator untuk uangmu sendiri — dan menghadapi persoalan yang <b>persis sama</b>:<br><br>
• Berapa porsi ke tabungan, emas, saham, properti? <b>(alokasi aset)</b><br>
• Reksa dana mana yang dipilih? <b>(memilih manajer)</b><br>
• Berapa biaya yang dipotong tiap tahun? <b>(fee)</b><br>
• Apakah hasil bagus manajer itu keahlian atau keberuntungan? <b>(pertanyaan abadi)</b><br><br>
Bedanya hanya nol di belakang angkanya.
</div>

<div class="callout warn">
<b>Pelajaran paling praktis dari dunia allocator:</b> karena membedakan keahlian dari keberuntungan itu sangat sulit dan fee terus menggerus hasil, banyak allocator besar — termasuk sejumlah dana pensiun terbesar dunia — akhirnya memindahkan sebagian besar dananya ke <b>indeks berbiaya rendah</b>. Bukan karena menyerah, tapi karena setelah puluhan tahun data terkumpul, itulah kesimpulan yang paling jujur untuk sebagian besar kasus.<br><br>
<i>Materi ini untuk edukasi, bukan saran investasi.</i>
</div>
`,
          keyPoints: [
            "Capital allocator institusional = lembaga pemilik uang yang memilih manajer, bukan memilih saham sendiri.",
            "Jangan tertukar: CEO sebagai capital allocator mengatur kas perusahaannya; allocator institusional memilih manajer dana.",
            "Jenisnya: dana pensiun, dana abadi (endowment), asuransi, family office, dana kekayaan negara.",
            "LP (Limited Partner) menyetor uang; GP (General Partner) mengelolanya dan menerima fee + bagi hasil.",
            "Pekerjaan allocator: menentukan alokasi aset, memilih manajer, menegosiasikan syarat, memantau & memutuskan berhenti.",
            "Alokasi aset menentukan sebagian besar hasil jangka panjang — lebih besar pengaruhnya daripada pemilihan saham.",
            "Tantangan terberat: membedakan keahlian dari keberuntungan, yang butuh data puluhan tahun.",
            "Pola bermasalah: mengejar performa masa lalu, risiko karier, dan fee bertingkat.",
            "Kamu sudah menjadi capital allocator untuk uangmu sendiri — persoalannya sama, hanya beda nol di belakang angkanya.",
          ],
          quiz: [
            {
              q: "Dalam struktur dana investasi, siapa itu LP (Limited Partner)?",
              options: [
                "Pihak yang menyetor dana (dana pensiun, endowment) tanpa ikut mengelola",
                "Manajer yang mengelola dana dan memilih perusahaan untuk dibeli",
                "Regulator yang mengawasi seluruh kegiatan dana investasi",
                "Perusahaan yang dibeli dan dikembangkan oleh dana tersebut",
              ],
              answer: 0,
              explain:
                "LP menyediakan modal; GP (General Partner) yang mengelola dan mengambil keputusan investasi.",
            },
            {
              q: "Apa yang membedakan dana abadi (endowment) dari dana pensiun?",
              options: [
                "Endowment berjangka tak terbatas, jadi lebih berani memegang aset tak likuid",
                "Endowment dilarang berinvestasi pada saham maupun obligasi dalam bentuk apa pun",
                "Endowment hanya boleh dikelola langsung oleh pemerintah pusat dan daerah",
                "Endowment wajib membayar manfaat bulanan kepada seluruh anggota pensiunnya",
              ],
              answer: 0,
              explain:
                "Dana pensiun punya kewajiban membayar pada waktu tertentu; endowment secara prinsip berlangsung selamanya.",
            },
            {
              q: "Kenapa allocator sering 'mengejar performa' dan itu merugikan?",
              options: [
                "Mereka masuk setelah hasil bagus, tepat saat gayanya mulai kehilangan momentum",
                "Mereka memilih manajer yang biayanya terlalu murah untuk dipercaya",
                "Mereka menarik dana terlalu cepat sebelum hasil manajer terlihat",
                "Mereka dilarang regulator memilih manajer yang kinerjanya buruk",
              ],
              answer: 0,
              explain:
                "Ini versi institusional dari 'beli mahal, jual murah'.",
            },
            {
              q: "Apa keputusan yang paling menentukan hasil jangka panjang seorang allocator?",
              options: [
                "Alokasi aset — porsi ke saham, obligasi, properti, dan aset alternatif",
                "Memilih satu saham terbaik untuk dipegang dalam jangka panjang",
                "Menentukan jam perdagangan yang paling menguntungkan setiap hari",
                "Memilih manajer yang kantornya paling dekat dengan kantor sendiri",
              ],
              answer: 0,
              explain:
                "Riset menunjukkan alokasi aset berpengaruh jauh lebih besar daripada pemilihan surat berharga individual.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 16: EKONOMI MAKRO UNTUK BISNIS ---------------- */
    {
      id: "acc-makro",
      level: "Makro",
      title: "Ekonomi Makro untuk Bisnis",
      summary: "Zoom out ke seluruh negara: PDB, inflasi beserta penyebab & cara mengukurnya, suku bunga, kebijakan fiskal, hiperinflasi, kurs, melindungi uang & bisnis dari inflasi, dan siklus ekonomi.",
      lessons: [
        {
          id: "acc-mak-1",
          title: "Apa itu Ekonomi Makro & PDB?",
          duration: "12 menit",
          content: `
<p>Sejauh ini kita melihat <b>satu perusahaan</b>. Sekarang kita zoom out ke <b>seluruh negara</b> — karena sehebat apa pun bisnismu, ia hidup di dalam ekonomi yang lebih besar.</p>

<h3>Fundamental: mikro vs makro</h3>
<table class="tbl">
  <tr><th>Ekonomi Mikro</th><th>Ekonomi Makro</th></tr>
  <tr><td>Melihat <b>bagian kecil</b>: satu perusahaan, satu pasar, satu pembeli</td><td>Melihat <b>keseluruhan</b>: satu negara, bahkan dunia</td></tr>
  <tr><td>"Kenapa harga kopi di warung ini naik?"</td><td>"Kenapa harga <b>semua barang</b> di negara ini naik?"</td></tr>
</table>

<h3>PDB — ukuran "besar" sebuah ekonomi</h3>
<div class="callout">
<b>PDB (Produk Domestik Bruto)</b> = total nilai <b>semua barang &amp; jasa</b> yang dihasilkan sebuah negara dalam satu periode (biasanya setahun).
<br><br><b>Analogi:</b> kalau perusahaan punya <b>pendapatan</b>, maka negara punya <b>PDB</b>. Keduanya menjawab pertanyaan yang sama: <i>"seberapa besar kegiatan ekonominya?"</i>
</div>

<h3>Tiga istilah turunannya</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Kenapa penting</th></tr>
  <tr><td><b>PDB nominal</b></td><td>Dihitung dengan harga saat itu</td><td>Bisa naik hanya karena <b>harga</b> naik, bukan produksi naik</td></tr>
  <tr><td><b>PDB riil</b></td><td>Sudah <b>dibersihkan dari efek inflasi</b></td><td>Menunjukkan pertumbuhan <b>sesungguhnya</b></td></tr>
  <tr><td><b>PDB per kapita</b></td><td>PDB ÷ jumlah penduduk</td><td>Gambaran kasar <b>kesejahteraan</b> rata-rata</td></tr>
</table>

<div class="callout warn">
<b>Ini penting:</b> kalau ada berita "ekonomi tumbuh 8%", tanyakan dulu: <b>nominal atau riil?</b> Kalau inflasinya 6% dan PDB nominal naik 8%, pertumbuhan <b>sesungguhnya hanya sekitar 2%</b>. Persis seperti pelajaran laba vs kas — angka mentah bisa menipu.
</div>

<h3>Kaitannya langsung ke bisnismu</h3>
<ul>
  <li>PDB tumbuh → daya beli masyarakat naik → <b>penjualan cenderung naik</b>.</li>
  <li>PDB melambat → orang menahan belanja → bisnis <b>barang mewah</b> paling cepat terpukul.</li>
  <li>Investor memakai proyeksi PDB untuk memperkirakan pertumbuhan sebuah industri.</li>
</ul>

<div class="callout">
<b>Ingat kerangka bertingkat ini:</b> saat menilai sebuah bisnis, lihat <b>tiga lapis</b> — kondisi <b>ekonomi</b> (makro) → kondisi <b>industri</b> → kondisi <b>perusahaan</b>. Perusahaan bagus di industri yang sedang tenggelam tetap sulit bertumbuh.
</div>
`,
          keyPoints: [
            "Ekonomi mikro melihat bagian kecil (satu perusahaan/pasar); makro melihat keseluruhan negara.",
            "PDB = total nilai semua barang & jasa yang dihasilkan negara dalam setahun — 'pendapatan'-nya sebuah negara.",
            "PDB nominal memakai harga saat itu; PDB riil sudah dibersihkan dari inflasi (menunjukkan pertumbuhan sesungguhnya).",
            "PDB per kapita = PDB ÷ jumlah penduduk, gambaran kasar kesejahteraan.",
            "Analisis bisnis punya tiga lapis: kondisi ekonomi → industri → perusahaan.",
          ],
          practice: [
            { type: "number", q: "PDB Rp20.000 triliun, jumlah penduduk 250 juta jiwa. Berapa PDB per kapita? (juta Rupiah)", answer: 80, tol: 1, unit: "jt", hint: "PDB ÷ jumlah penduduk. 20.000 triliun = 20.000.000.000 juta.", solution: "20.000.000.000 jt ÷ 250 jt jiwa = Rp80 juta per orang." },
            { type: "number", q: "PDB nominal naik 8%, inflasi 6%. Kira-kira berapa pertumbuhan riilnya? (%)", answer: 2, tol: 0.3, unit: "%", hint: "Pertumbuhan riil ≈ nominal − inflasi.", solution: "8% − 6% ≈ 2% pertumbuhan sesungguhnya." },
          ],
          quiz: [
            {
              q: "Apa itu PDB?",
              options: [
                "Total nilai barang & jasa yang dihasilkan di dalam negara pada satu periode",
                "Total pendapatan pemerintah dari pajak dan bukan pajak dalam setahun",
                "Total kekayaan seluruh penduduk yang tinggal di dalam negara itu",
                "Total nilai ekspor dikurangi nilai impor selama satu tahun",
              ],
              answer: 0,
              explain: "PDB mengukur besarnya kegiatan ekonomi sebuah negara.",
            },
            {
              q: "Kenapa PDB riil lebih bermakna daripada PDB nominal?",
              options: [
                "Sudah dibersihkan dari inflasi, sehingga menunjukkan pertumbuhan sesungguhnya",
                "Sudah termasuk nilai ekonomi bawah tanah yang tidak tercatat resmi",
                "Dihitung dalam dolar, sehingga bisa dibandingkan antarnegara",
                "Hanya menghitung sektor riil, tanpa sektor jasa keuangan",
              ],
              answer: 0,
              explain:
                "PDB nominal bisa naik hanya karena harga naik, bukan karena produksi bertambah.",
            },
          ],
        },
        {
          id: "acc-mak-2",
          title: "Inflasi & Daya Beli",
          duration: "13 menit",
          content: `
<p>Inflasi adalah kekuatan ekonomi yang paling langsung kamu rasakan — dan paling sering disalahpahami.</p>

<div class="callout">
<b>Inflasi</b> = <b>kenaikan harga barang &amp; jasa secara umum</b> dalam periode tertentu.
<br><br><b>Perhatikan kata "secara umum".</b> Kalau harga cabai naik tapi harga lain stabil, itu <b>bukan</b> inflasi — itu cuma gejolak satu komoditas. Inflasi berarti hampir semua harga bergerak naik bersama.
</div>

<h3>Sisi lain yang sering terlewat: uangmu melemah</h3>
<p>Inflasi bukan hanya "harga naik" — artinya juga <b>nilai uangmu turun</b>. Dua kalimat ini adalah hal yang sama dilihat dari sisi berbeda:</p>
<ul>
  <li>"Harga bakso naik dari Rp10.000 jadi Rp12.000"</li>
  <li>"Rp10.000-mu <b>tak lagi cukup</b> membeli satu bakso"</li>
</ul>

<h3>Coba sendiri — lihat uangmu menyusut 👇</h3>
<div data-demo="js-playground">// Bagaimana inflasi menggerus daya beli uang yang menganggur
const uang = 10000000;   // Rp10 juta hari ini
const inflasi = 0.04;    // 4% per tahun

console.log("Uang Rp" + uang.toLocaleString("id-ID") + " disimpan tanpa bunga:");
console.log("");

[5, 10, 20].forEach(function(tahun){
  const dayaBeli = uang / Math.pow(1 + inflasi, tahun);
  console.log("  Setelah " + tahun + " tahun -> daya belinya tinggal Rp" + Math.round(dayaBeli).toLocaleString("id-ID"));
});

console.log("");
console.log("Angkanya tetap Rp10 juta, tapi yang bisa DIBELI makin sedikit.");
console.log("Ubah angka inflasi jadi 0.08 lalu jalankan lagi - lihat bedanya.");</div>

<h3>Bagaimana diukur?</h3>
<p>Di Indonesia, inflasi diukur lewat <b>IHK (Indeks Harga Konsumen)</b> yang dihitung <b>BPS</b>. Caranya: memantau harga sekeranjang barang &amp; jasa yang biasa dibeli masyarakat (makanan, transportasi, sewa, pendidikan), lalu membandingkannya antar-periode.</p>

<h3>Bukan semua inflasi buruk</h3>
<table class="tbl">
  <tr><th>Kondisi</th><th>Dampak</th></tr>
  <tr><td><b>Inflasi rendah &amp; stabil</b> (target BI belakangan ini berkisar sekitar 2,5% ± 1%)</td><td class="ok-cell">Sehat — mendorong orang berbelanja &amp; berinvestasi</td></tr>
  <tr><td><b>Inflasi tinggi</b></td><td>Daya beli anjlok, biaya usaha melonjak, perencanaan sulit</td></tr>
  <tr><td><b>Deflasi</b> (harga turun terus)</td><td>Justru <b>berbahaya</b> — orang menunda belanja karena menunggu lebih murah, ekonomi mandek</td></tr>
</table>

<div class="callout warn">
<b>Dampak nyata ke bisnismu:</b>
<ul>
  <li>Biaya bahan baku &amp; gaji <b>naik</b> — margin tertekan bila harga jual tak ikut disesuaikan.</li>
  <li>Bisnis dengan <b>pricing power</b> (ingat pelajaran moat) jauh lebih tahan inflasi — mereka bisa menaikkan harga tanpa kehilangan pelanggan.</li>
  <li>Uang kas menganggur <b>kehilangan nilai</b> diam-diam.</li>
</ul>
</div>

<div class="callout">
<b>Bunga riil</b> = bunga nominal − inflasi. Kalau tabunganmu berbunga 4% tapi inflasi 5%, bunga riilmu <b>−1%</b>: secara angka uangmu bertambah, tapi <b>daya belinya berkurang</b>. Ini konsep yang wajib dipahami sebelum menabung/berinvestasi.
</div>
`,
          keyPoints: [
            "Inflasi = kenaikan harga barang & jasa secara umum, bukan gejolak satu komoditas.",
            "Sisi lainnya: nilai uangmu turun — uang menganggur kehilangan daya beli diam-diam.",
            "Di Indonesia diukur lewat IHK oleh BPS (memantau sekeranjang barang & jasa).",
            "Inflasi rendah & stabil itu sehat; inflasi tinggi merusak, deflasi juga berbahaya (orang menunda belanja).",
            "Bisnis dengan pricing power lebih tahan inflasi.",
            "Bunga riil = bunga nominal − inflasi; bisa negatif walau angkanya bertambah.",
          ],
          practice: [
            { type: "number", q: "Tabungan berbunga 4%/tahun, inflasi 6%. Berapa bunga riilnya? (%, boleh negatif)", answer: -2, tol: 0.3, unit: "%", hint: "Bunga riil = nominal − inflasi.", solution: "4% − 6% = −2% → daya beli tabunganmu justru berkurang." },
            { type: "number", q: "Harga bakso naik dari Rp10.000 menjadi Rp11.000 dalam setahun. Berapa persen inflasinya? (%)", answer: 10, tol: 0.3, unit: "%", hint: "(kenaikan ÷ harga awal) × 100.", solution: "(1.000 ÷ 10.000) × 100% = 10%." },
          ],
          quiz: [
            {
              q: "Kenapa deflasi (harga turun terus) justru berbahaya?",
              options: [
                "Orang menunda belanja menunggu harga lebih murah, ekonomi jadi mandek",
                "Harga yang turun membuat semua orang langsung membelanjakan uangnya",
                "Deflasi membuat nilai tukar rupiah melemah terhadap dolar",
                "Deflasi membuat pemerintah wajib mencetak uang baru",
              ],
              answer: 0,
              explain:
                "Penundaan belanja massal membuat permintaan & produksi ikut turun.",
            },
            {
              q: "Bunga tabungan 3%, inflasi 5%. Apa artinya?",
              options: [
                "Bunga riil −2%: angkanya bertambah, tapi daya belinya berkurang",
                "Bunga riil +8%: tabungan tumbuh jauh di atas inflasi",
                "Bunga riil +2%: tabungan masih mengalahkan kenaikan harga",
                "Bunga riil 0%: tabungan dan harga naik dengan kecepatan sama",
              ],
              answer: 0,
              explain: "Bunga riil = 3% − 5% = −2%.",
            },
          ],
        },
        {
          id: "acc-inf-1",
          title: "Kenapa Harga Naik? Penyebab & Cara Mengukur Inflasi",
          duration: "15 menit",
          content: `
<p>Di pelajaran sebelumnya kamu mengenal inflasi sebagai kenaikan harga secara umum yang menggerus daya beli. Sekarang dua pertanyaan yang lebih dalam: <b>kenapa</b> harga-harga bisa naik bersamaan, dan <b>bagaimana</b> angka inflasi yang diumumkan setiap bulan itu dihitung?</p>

<h3>Tiga penyebab inflasi</h3>
<div data-diagram="compare3" data-cols="Tarikan permintaan::uang &amp; belanja melonjak::permintaan bergeser kanan|Dorongan biaya::BBM, panen, kurs::penawaran bergeser kiri|Ekspektasi::semua mengira harga naik::lalu benar-benar terjadi" data-caption="Tiga jalan menuju harga yang naik bersamaan"></div>

<table class="tbl">
  <tr><th>Penyebab</th><th>Yang terjadi</th><th>Contoh</th></tr>
  <tr><td><b>Tarikan permintaan</b> (demand-pull)</td><td>Terlalu banyak uang mengejar barang yang jumlahnya tidak cukup bertambah. Di kacamata permintaan-penawaran: permintaan seluruh ekonomi bergeser ke kanan</td><td>Kredit sangat murah dan belanja besar-besaran saat pabrik sudah bekerja penuh</td></tr>
  <tr><td><b>Dorongan biaya</b> (cost-push)</td><td>Biaya produksi naik sehingga penawaran bergeser ke kiri</td><td>Harga BBM dinaikkan, gagal panen, rupiah melemah sehingga bahan impor mahal</td></tr>
  <tr><td><b>Ekspektasi</b></td><td>Orang yakin harga akan naik: pekerja meminta gaji lebih tinggi, pedagang menaikkan harga lebih dulu — dan keyakinan itu mewujudkan dirinya sendiri</td><td>Spiral upah-harga</td></tr>
</table>

<div class="callout">
<b>💡 Kenapa ekspektasi begitu penting?</b> Dua penyebab pertama bisa mereda sendiri: panen membaik, harga BBM dunia turun. Ekspektasi yang sudah terbentuk jauh lebih sulit dihentikan. Karena itu bank sentral bekerja keras menjaga <b>kepercayaan</b> bahwa inflasi akan tetap rendah — sesuatu yang dibahas di pelajaran berikutnya tentang kebijakan moneter.
</div>

<h3>Cara mengukurnya: sekeranjang belanja</h3>
<p>BPS memantau harga ratusan barang dan jasa yang biasa dibeli rumah tangga, lalu menggabungkannya menjadi <b>Indeks Harga Konsumen (IHK)</b>. Setiap kelompok diberi <b>bobot</b> sesuai besarnya bagian pengeluaran rumah tangga untuk kelompok itu.</p>
<p style="text-align:center"><b>Inflasi tahunan = (IHK tahun ini ÷ IHK tahun lalu − 1) × 100%</b><br>Contoh: IHK naik dari 110 menjadi 115,5 → (115,5 ÷ 110 − 1) × 100% = <b>5%</b></p>

<div data-demo="keranjang-ihk"></div>

<h3>Tiga komponen yang dipantau di Indonesia</h3>
<table class="tbl">
  <tr><th>Komponen</th><th>Isinya</th><th>Kenapa dipisahkan</th></tr>
  <tr><td><b>Inti</b></td><td>Barang & jasa yang harganya bergerak mengikuti kondisi ekonomi secara umum</td><td>Paling mencerminkan tekanan permintaan dan ekspektasi — inilah yang paling diperhatikan bank sentral</td></tr>
  <tr><td><b>Harga yang diatur pemerintah</b></td><td>BBM, tarif listrik, tarif angkutan, rokok</td><td>Berubah karena keputusan kebijakan, bukan tarik-menarik pasar sehari-hari</td></tr>
  <tr><td><b>Harga bergejolak</b></td><td>Pangan seperti cabai, bawang, beras</td><td>Naik-turun tajam karena cuaca dan musim, sering berbalik sendiri</td></tr>
</table>

<h3>Tiga angka yang sering tertukar</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Dibandingkan dengan</th><th>Contoh berita</th></tr>
  <tr><td><b>Bulanan</b> (month-to-month)</td><td>Bulan sebelumnya</td><td>"Inflasi Mei 0,3%"</td></tr>
  <tr><td><b>Tahun kalender</b> (year-to-date)</td><td>Desember tahun lalu</td><td>"Inflasi Januari–Mei 1,2%"</td></tr>
  <tr><td><b>Tahunan</b> (year-on-year)</td><td>Bulan yang sama tahun lalu</td><td>"Inflasi tahunan 2,8%"</td></tr>
</table>

<div class="callout warn">
<b>⚠️ "Inflasi turun" bukan berarti harga turun.</b> Kalau inflasi turun dari 5% menjadi 3%, harga <b>tetap naik</b> — hanya lebih lambat. Harga baru benar-benar turun bila terjadi <b>deflasi</b> (inflasi negatif).
</div>

<h3>Kenapa angka resmi terasa beda dengan dompetmu?</h3>
<ul>
  <li><b>Keranjangmu berbeda.</b> Mahasiswa yang banyak mengeluarkan uang untuk kos dan transportasi merasakan inflasi yang berbeda dari keluarga dengan anak kecil.</li>
  <li><b>Barang yang sering dibeli paling terasa.</b> Cabai naik 50% lebih mudah diingat daripada harga televisi yang pelan-pelan turun.</li>
  <li><b>Shrinkflation.</b> Harga bungkus tetap, tapi isinya dikurangi. Secara harga per gram, itu tetap kenaikan harga yang tersembunyi.</li>
</ul>
`,
          keyPoints: [
            "Tiga penyebab inflasi: tarikan permintaan (permintaan bergeser kanan), dorongan biaya (penawaran bergeser kiri), dan ekspektasi.",
            "Ekspektasi paling sulit dihentikan, sehingga bank sentral sangat menjaga kepercayaan terhadap inflasi yang rendah.",
            "Inflasi diukur dari IHK: harga sekeranjang barang & jasa yang diberi bobot sesuai porsi pengeluaran rumah tangga.",
            "Inflasi tahunan = (IHK tahun ini ÷ IHK tahun lalu − 1) × 100%.",
            "Di Indonesia dipantau tiga komponen: inti, harga yang diatur pemerintah, dan harga bergejolak.",
            "Bedakan inflasi bulanan, tahun kalender, dan tahunan.",
            "Inflasi turun bukan berarti harga turun — harga tetap naik, hanya lebih lambat.",
          ],
          practice: [
            { type: "number", q: "IHK tahun lalu 110 dan tahun ini 115,5. Berapa inflasi tahunannya (%)?", answer: 5, tol: 0.05, hint: "115,5 ÷ 110 − 1.", solution: "115,5 ÷ 110 = 1,05 → inflasi 5%." },
            { type: "number", q: "Kelompok makanan berbobot 33% dan harganya naik 6%. Berapa andilnya terhadap inflasi (poin persen)?", answer: 1.98, tol: 0.01, hint: "0,33 × 6.", solution: "0,33 × 6 = 1,98 poin persen." },
          ],
          quiz: [
            {
              q: "Harga BBM dinaikkan sehingga ongkos angkut semua barang ikut naik. Termasuk penyebab inflasi apa?",
              options: [
                "Dorongan biaya, karena biaya produksi naik dan penawaran bergeser ke kiri",
                "Tarikan permintaan, karena masyarakat tiba-tiba ingin membeli lebih banyak",
                "Ekspektasi, karena pedagang menaikkan harga sebelum biayanya naik",
                "Deflasi, karena daya beli masyarakat berkurang setelah BBM naik",
              ],
              answer: 0,
              explain: "Kenaikan biaya yang diteruskan ke harga adalah inflasi dorongan biaya.",
            },
            {
              q: "Inflasi tahunan turun dari 5% menjadi 3%. Apa artinya bagi harga-harga?",
              options: [
                "Harga masih naik, hanya kecepatannya lebih lambat",
                "Harga turun rata-rata 2% dibanding tahun lalu",
                "Harga kembali ke tingkat yang sama dengan tahun lalu",
                "Harga barang pokok turun, barang lainnya tetap naik",
              ],
              answer: 0,
              explain: "Hanya deflasi yang membuat harga benar-benar turun.",
            },
            {
              q: "Kenapa bank sentral paling memperhatikan inflasi inti?",
              options: [
                "Karena paling mencerminkan tekanan permintaan dan ekspektasi, bukan guncangan musiman",
                "Karena inflasi inti mencakup harga BBM dan tarif listrik yang ditetapkan pemerintah",
                "Karena inflasi inti selalu lebih tinggi daripada harga pangan yang bergejolak",
                "Karena inflasi inti adalah satu-satunya komponen yang dihitung oleh BPS",
              ],
              answer: 0,
              explain: "Harga pangan dan harga yang diatur sering berubah karena cuaca atau keputusan kebijakan.",
            },
            {
              q: "Harga sebungkus keripik tetap Rp10.000, tapi isinya turun dari 100 gram menjadi 80 gram. Apa yang terjadi?",
              options: [
                "Kenaikan harga tersembunyi, karena harga per gram naik 25%",
                "Tidak ada inflasi, karena harga di label tidak berubah",
                "Deflasi, karena jumlah barang yang diterima pembeli turun",
                "Penurunan permintaan, karena pembeli membeli lebih sedikit",
              ],
              answer: 0,
              explain: "Rp10.000 untuk 80 gram = Rp125/gram, naik dari Rp100/gram — shrinkflation.",
            },
          ],
        },
        {
          id: "acc-mak-3",
          title: "Kebijakan Moneter & Suku Bunga",
          duration: "13 menit",
          content: `
<p>Siapa yang mengendalikan inflasi? <b>Bank sentral</b> — di Indonesia, <b>Bank Indonesia (BI)</b> — lewat <b>kebijakan moneter</b>.</p>

<div data-diagram="cycle" data-steps="Inflasi naik|Bank sentral naikkan bunga|Pinjaman jadi mahal|Belanja &amp; harga melambat" data-center="moneter" data-caption="Suku bunga adalah rem dan gas perekonomian"></div>


<div class="callout">
<b>Kebijakan moneter</b> = kebijakan mengatur <b>jumlah uang beredar</b> dan <b>suku bunga</b> dalam perekonomian.
<br><br><b>Tugas utama BI:</b> menjaga <b>stabilitas nilai rupiah</b> — artinya menjaga inflasi tetap terkendali dan nilai tukar relatif stabil.
</div>

<h3>Alat utamanya: suku bunga acuan</h3>
<p>BI menetapkan <b>suku bunga acuan</b> (dikenal sebagai <b>BI-Rate</b>). Angka ini menjadi patokan bunga di seluruh sistem keuangan — bunga deposito, KPR, kredit usaha, semuanya mengikuti arahnya.</p>

<h3>Dua arah kebijakan</h3>
<table class="tbl">
  <tr><th></th><th>Moneter <b>Longgar</b> (ekspansif)</th><th>Moneter <b>Ketat</b> (kontraktif)</th></tr>
  <tr><td>Tindakan</td><td>Suku bunga <b>diturunkan</b></td><td>Suku bunga <b>dinaikkan</b></td></tr>
  <tr><td>Efek berantai</td><td>Pinjaman murah → orang &amp; usaha meminjam → belanja &amp; investasi naik</td><td>Pinjaman mahal → belanja &amp; investasi direm</td></tr>
  <tr><td>Dipakai saat</td><td>Ekonomi <b>lesu</b></td><td>Inflasi <b>terlalu tinggi</b></td></tr>
  <tr><td>Risikonya</td><td>Inflasi bisa memanas</td><td>Pertumbuhan ekonomi melambat</td></tr>
</table>

<div class="callout">
<b>Analogi termostat:</b> suku bunga itu seperti pengatur suhu ruangan. Ekonomi terlalu "panas" (inflasi tinggi) → bunga dinaikkan untuk mendinginkan. Ekonomi terlalu "dingin" (lesu) → bunga diturunkan untuk menghangatkan. Selalu ada <b>trade-off</b> — tidak ada pilihan yang enak di kedua sisi.
</div>

<h3>Alat lainnya</h3>
<ul>
  <li><b>Operasi pasar terbuka</b> — BI membeli/menjual surat berharga untuk menambah/menyerap uang beredar.</li>
  <li><b>Giro Wajib Minimum (GWM)</b> — berapa persen dana bank yang wajib disimpan di BI. Dinaikkan = bank punya lebih sedikit uang untuk dipinjamkan.</li>
</ul>

<h3>💥 Dampak langsung ke bisnis &amp; investasimu</h3>
<table class="tbl">
  <tr><th>Saat suku bunga NAIK</th><th>Akibatnya</th></tr>
  <tr><td>Biaya pinjaman usaha</td><td>Naik → ekspansi jadi mahal, laba tertekan</td></tr>
  <tr><td>Daya beli konsumen</td><td>Turun (cicilan naik) → penjualan melambat</td></tr>
  <tr><td>Harga saham</td><td>Cenderung <b>turun</b></td></tr>
  <tr><td>Deposito &amp; obligasi</td><td>Jadi lebih menarik</td></tr>
</table>

<div class="callout warn">
<b>Hubungannya dengan DCF (ingat pelajaran valuasi):</b> suku bunga naik → <b>tingkat diskonto naik</b> → arus kas masa depan didiskon lebih besar → <b>nilai wajar perusahaan turun</b>. Inilah penjelasan matematis kenapa harga saham sering jatuh saat bank sentral menaikkan bunga — bukan sekadar sentimen.
</div>
`,
          keyPoints: [
            "Kebijakan moneter = mengatur jumlah uang beredar & suku bunga; dipegang bank sentral (BI).",
            "Tugas utama BI: menjaga stabilitas nilai rupiah (inflasi terkendali & kurs stabil).",
            "Moneter longgar: bunga turun → pinjaman murah → ekonomi terdorong (risiko inflasi).",
            "Moneter ketat: bunga naik → pinjaman mahal → inflasi ditekan (risiko pertumbuhan melambat).",
            "Alat lain: operasi pasar terbuka & Giro Wajib Minimum.",
            "Bunga naik → tingkat diskonto DCF naik → nilai wajar perusahaan turun → harga saham cenderung turun.",
          ],
          practice: [
            { type: "choice", q: "Inflasi sedang sangat tinggi. Apa yang biasanya dilakukan bank sentral?", options: ["Menurunkan suku bunga", "Menaikkan suku bunga untuk mendinginkan ekonomi", "Mencetak lebih banyak uang", "Tidak melakukan apa-apa"], answer: 1, hint: "Analogi termostat: ekonomi terlalu panas.", solution: "Bunga dinaikkan agar pinjaman mahal, belanja direm, dan inflasi turun." },
            { type: "choice", q: "Suku bunga acuan naik tajam. Apa dampaknya pada valuasi DCF sebuah perusahaan?", options: ["Nilai wajarnya naik", "Nilai wajarnya turun karena tingkat diskonto naik", "Tidak berpengaruh", "Arus kasnya bertambah"], answer: 1, hint: "Tingkat diskonto ada di penyebut rumus DCF.", solution: "Diskonto lebih besar → nilai sekarang arus kas masa depan mengecil." },
          ],
          quiz: [
            {
              q: "Siapa yang menjalankan kebijakan moneter di Indonesia?",
              options: [
                "Kementerian Keuangan",
                "Bank Indonesia",
                "DPR",
                "Bursa Efek Indonesia",
              ],
              answer: 1,
              explain: "Kebijakan moneter adalah kewenangan bank sentral, yaitu Bank Indonesia.",
            },
            {
              q: "Apa efek berantai saat suku bunga diturunkan?",
              options: [
                "Pinjaman murah → belanja & investasi naik → ekonomi terdorong",
                "Pinjaman mahal → belanja turun → inflasi ikut turun",
                "Tabungan naik → belanja turun → ekonomi melambat",
                "Rupiah menguat → impor turun → harga barang naik",
              ],
              answer: 0,
              explain:
                "Bunga rendah membuat kredit murah sehingga konsumsi & investasi meningkat.",
            },
          ],
        },
        {
          id: "acc-mak-4",
          title: "Kebijakan Fiskal, APBN & Tax Ratio",
          duration: "14 menit",
          content: `
<p>Kalau bank sentral memegang "harga uang", maka <b>pemerintah</b> memegang <b>uang negara</b> — lewat <b>kebijakan fiskal</b>.</p>

<div class="callout">
<b>Kebijakan fiskal</b> = kebijakan pemerintah soal <b>penerimaan</b> (terutama pajak) dan <b>belanja</b> negara.
<br><br>Di Indonesia dijalankan <b>Kementerian Keuangan</b>, dituangkan dalam <b>APBN</b> (Anggaran Pendapatan dan Belanja Negara) — pada dasarnya <b>"RAB"-nya sebuah negara</b>, konsep yang sudah kamu pelajari.
</div>

<h3>Isi APBN secara sederhana</h3>
<table class="tbl">
  <tr><th>Penerimaan (uang masuk)</th><th>Belanja (uang keluar)</th></tr>
  <tr><td><b>Pajak</b> (PPh, PPN, bea cukai) — porsi terbesar</td><td>Infrastruktur, pendidikan, kesehatan</td></tr>
  <tr><td><b>PNBP</b> (bukan pajak: SDA, dividen BUMN, layanan)</td><td>Gaji pegawai, subsidi, bantuan sosial</td></tr>
  <tr><td>Hibah</td><td><b>Bunga utang</b> &amp; transfer ke daerah</td></tr>
</table>
<p>Kalau belanja <b>lebih besar</b> dari penerimaan → terjadi <b>defisit</b>, dan selisihnya ditutup dengan <b>utang</b>. Di Indonesia, undang-undang membatasi defisit maksimal <b>3% dari PDB</b> (batas ini sempat dilonggarkan sementara saat pandemi, lalu diberlakukan kembali).</p>

<h3>Dua arah kebijakan fiskal</h3>
<table class="tbl">
  <tr><th>Fiskal <b>Ekspansif</b></th><th>Fiskal <b>Kontraktif</b></th></tr>
  <tr><td>Pajak <b>diturunkan</b>, belanja <b>dinaikkan</b></td><td>Pajak <b>dinaikkan</b>, belanja <b>dikurangi</b></td></tr>
  <tr><td>Untuk mendorong ekonomi yang lesu</td><td>Untuk mendinginkan ekonomi / menekan defisit</td></tr>
  <tr><td>Contoh: bantuan tunai &amp; insentif pajak saat pandemi</td><td>Contoh: pengetatan belanja saat utang membengkak</td></tr>
</table>

<h3>Tax Ratio — "kemampuan memungut" sebuah negara</h3>
<div class="callout">
<b>Tax Ratio = (Penerimaan Pajak ÷ PDB) × 100%</b>
<br><br>Artinya: <b>berapa persen dari seluruh kegiatan ekonomi yang berhasil dipungut menjadi pajak.</b>
</div>

<h3>Coba sendiri — hitung tax ratio 👇</h3>
<div data-demo="js-playground">// Tax ratio = seberapa besar porsi ekonomi yang terpungut jadi pajak
const negara = [
  { nama: "Negara A", pdb: 20000, pajak: 2000 },   // dalam triliun Rupiah
  { nama: "Negara B", pdb: 20000, pajak: 5000 },
  { nama: "Negara C", pdb: 8000,  pajak: 1600 }
];

negara.forEach(function(n){
  const ratio = (n.pajak / n.pdb) * 100;
  console.log(n.nama + " | PDB Rp" + n.pdb + " T, pajak Rp" + n.pajak + " T  ->  tax ratio " + ratio.toFixed(1) + "%");
});

console.log("-----");
console.log("Perhatikan Negara A dan B: PDB-nya SAMA,");
console.log("tapi B memungut 2,5x lipat lebih banyak pajak.");
console.log("Itu artinya B punya jauh lebih banyak dana untuk membangun.");</div>

<h3>Gambaran umum</h3>
<table class="tbl">
  <tr><th>Kelompok</th><th>Kisaran tax ratio</th></tr>
  <tr><td><b>Indonesia</b></td><td>sekitar <b>10–12%</b></td></tr>
  <tr><td>Rata-rata negara maju (OECD)</td><td>sekitar <b>34%</b></td></tr>
</table>
<div class="callout warn">
<b>Catatan kejujuran:</b> angka pastinya <b>berubah tiap tahun</b> dan berbeda tergantung definisi (hanya pajak pusat, atau termasuk PNBP &amp; pajak daerah). Untuk data resmi, rujuk <b>Kementerian Keuangan</b> atau <b>BPS</b>.
</div>

<h3>Kenapa tax ratio rendah jadi masalah?</h3>
<ul>
  <li>Dana pembangunan (infrastruktur, pendidikan, kesehatan) <b>terbatas</b>.</li>
  <li>Pemerintah lebih banyak <b>berutang</b> → beban bunga membesar.</li>
  <li><b>Ruang fiskal sempit</b> — sulit merespons saat krisis datang.</li>
</ul>
<p><b>Penyebab umumnya:</b> ekonomi informal yang besar (banyak usaha tak tercatat), tingkat kepatuhan pajak rendah, dan basis pajak yang sempit.</p>

<div class="callout">
<b>Fiskal &amp; moneter harus seiring.</b> Kalau pemerintah belanja besar-besaran (fiskal longgar) <b>sementara</b> bank sentral juga menahan bunga rendah (moneter longgar), uang beredar bisa membanjir → <b>inflasi melonjak</b>. Karena itu keduanya dikoordinasikan.
</div>
`,
          keyPoints: [
            "Kebijakan fiskal = kebijakan pemerintah soal pajak (penerimaan) & belanja negara; dituangkan dalam APBN.",
            "APBN pada dasarnya 'RAB'-nya negara; belanja melebihi penerimaan = defisit, ditutup utang (dibatasi 3% PDB).",
            "Fiskal ekspansif: pajak turun & belanja naik (dorong ekonomi). Kontraktif: sebaliknya.",
            "Tax Ratio = (Penerimaan Pajak ÷ PDB) × 100% — kemampuan negara memungut pajak.",
            "Indonesia sekitar 10–12%; negara maju (OECD) sekitar 34%. Angka berubah tiap tahun & tergantung definisi.",
            "Tax ratio rendah = dana pembangunan terbatas, utang bertambah, ruang fiskal sempit.",
          ],
          practice: [
            { type: "number", q: "PDB Rp20.000 triliun, penerimaan pajak Rp2.400 triliun. Berapa tax ratio-nya? (%)", answer: 12, tol: 0.3, unit: "%", hint: "(Pajak ÷ PDB) × 100%.", solution: "(2.400 ÷ 20.000) × 100% = 12%." },
            { type: "choice", q: "Ekonomi sedang lesu dan pengangguran naik. Kebijakan fiskal yang biasanya dipakai?", options: ["Kontraktif: pajak dinaikkan, belanja dipotong", "Ekspansif: pajak diturunkan, belanja negara dinaikkan", "Menaikkan suku bunga", "Menjual surat berharga"], answer: 1, hint: "Ekonomi perlu didorong, bukan direm.", solution: "Fiskal ekspansif menyuntikkan uang ke ekonomi lewat belanja & keringanan pajak." },
          ],
          quiz: [
            {
              q: "Apa rumus tax ratio?",
              options: [
                "(Penerimaan Pajak ÷ PDB) × 100%",
                "(Penerimaan Pajak ÷ Belanja Negara) × 100%",
                "(Utang Negara ÷ PDB) × 100%",
                "(Penerimaan Pajak ÷ Jumlah Penduduk) × 100%",
              ],
              answer: 0,
              explain:
                "Tax ratio membandingkan penerimaan pajak dengan ukuran ekonomi (PDB).",
            },
            {
              q: "Siapa yang menjalankan kebijakan fiskal?",
              options: [
                "Pemerintah (Kementerian Keuangan), lewat APBN",
                "Bank Indonesia, lewat suku bunga acuan",
                "OJK, lewat pengawasan lembaga keuangan",
                "Bursa Efek Indonesia, lewat aturan pencatatan saham",
              ],
              answer: 0,
              explain:
                "Fiskal = urusan pemerintah (pajak & belanja); moneter = urusan bank sentral.",
            },
            {
              q: "Kenapa tax ratio yang rendah menjadi masalah?",
              options: [
                "Dana pembangunan terbatas, negara lebih banyak berutang, ruang fiskal sempit",
                "Masyarakat terbebani pajak terlalu tinggi sehingga daya beli turun",
                "Perusahaan asing enggan masuk karena pajaknya terlalu rendah",
                "Bank Indonesia terpaksa menaikkan suku bunga acuannya",
              ],
              answer: 0,
              explain:
                "Penerimaan kecil membatasi kemampuan negara membiayai pembangunan tanpa utang.",
            },
          ],
        },
        {
          id: "acc-inf-2",
          title: "Hiperinflasi — Saat Uang Kehilangan Makna",
          duration: "14 menit",
          content: `
<p>Inflasi yang sehat hanya beberapa persen setahun. Tapi sejarah mencatat masa ketika harga naik puluhan persen <b>setiap bulan</b> — bahkan setiap hari. Keadaan ini disebut <b>hiperinflasi</b>, dan Indonesia pernah mengalaminya. Memahami bagaimana ia terjadi menjelaskan kenapa aturan tentang anggaran negara dan bank sentral dibuat begitu ketat.</p>

<div data-diagram="timeline" data-events="1923::Jerman: harga berlipat tiap beberapa hari|1966::Indonesia: inflasi sekitar 600%|1998::Indonesia: inflasi 77,6%|2008::Zimbabwe: 231 juta persen setahun|2018::Venezuela: ratusan ribu persen" data-caption="Beberapa episode inflasi ekstrem"></div>

<h3>Fundamental: spiral yang memakan dirinya sendiri</h3>
<p>Hiperinflasi sering didefinisikan sebagai kenaikan harga <b>lebih dari 50% per bulan</b>. Polanya hampir selalu sama:</p>

<div data-diagram="cycle" data-steps="Pemerintah defisit besar|Bank sentral mencetak uang|Harga melonjak|Orang cepat-cepat belanja" data-center="kepercayaan runtuh" data-caption="Setiap putaran membuat putaran berikutnya lebih cepat"></div>

<ol>
  <li><b>Pemerintah membelanjakan jauh lebih banyak dari penerimaannya</b> — karena perang, krisis, atau salah kelola — dan tidak bisa lagi meminjam.</li>
  <li><b>Kekurangannya ditutup dengan mencetak uang.</b> Jumlah uang bertambah cepat, sementara barang tidak bertambah.</li>
  <li><b>Harga naik</b>, sehingga pemerintah butuh uang lebih banyak lagi untuk membayar hal yang sama.</li>
  <li><b>Orang berhenti memercayai uang.</b> Gaji langsung dibelanjakan hari itu juga sebelum nilainya turun. Uang berpindah tangan makin cepat, dan harga naik makin cepat lagi.</li>
</ol>

<div class="callout warn">
<b>Pasokan barang yang runtuh memperparah segalanya.</b> Perang yang merusak pabrik, lahan pertanian yang tak lagi berproduksi, atau kontrol harga yang membuat produsen berhenti menjual — ingat pelajaran tentang harga yang diatur — membuat barang makin langka tepat saat uang makin banyak.
</div>

<h3>Kisah-kisah yang tercatat</h3>
<table class="tbl">
  <tr><th>Episode</th><th>Apa yang terjadi</th></tr>
  <tr><td><b>Jerman 1923</b></td><td>Beban biaya perang dan pampasan ditutup dengan mencetak uang. Pada puncaknya harga berlipat ganda setiap beberapa hari; pada November 1923 satu dolar AS setara sekitar 4,2 triliun mark</td></tr>
  <tr><td><b>Indonesia 1960-an</b></td><td>Defisit anggaran yang besar dibiayai pencetakan uang. Pada Desember 1965, uang Rp1.000 lama ditetapkan setara Rp1 uang baru. Inflasi 1966 mencapai sekitar 600%, lalu baru terkendali beberapa tahun kemudian lewat disiplin anggaran</td></tr>
  <tr><td><b>Indonesia 1998</b></td><td>Krisis moneter: rupiah anjlok dari sekitar Rp2.500 hingga pernah hampir Rp17.000 per dolar, dan inflasi 1998 mencapai 77,6%. Sangat tinggi dan menyakitkan — meski belum tergolong hiperinflasi menurut definisi 50% per bulan</td></tr>
  <tr><td><b>Zimbabwe 2008</b></td><td>Produksi pertanian runtuh dan uang terus dicetak. Angka resmi terakhir mencatat inflasi tahunan 231 juta persen; uang kertas 100 triliun dolar Zimbabwe sempat diterbitkan, sebelum negara itu beralih memakai mata uang asing</td></tr>
  <tr><td><b>Venezuela 2010-an</b></td><td>Anjloknya harga minyak, defisit besar, dan pencetakan uang. Bank sentralnya mencatat inflasi 2018 sekitar 130.000%; jutaan warga meninggalkan negaranya</td></tr>
</table>

<h3>Kenapa aturannya dibuat ketat</h3>
<table class="tbl">
  <tr><th>Pengaman</th><th>Maksudnya</th></tr>
  <tr><td>Batas defisit anggaran</td><td>Undang-undang keuangan negara di Indonesia membatasi defisit APBN sekitar 3% dari PDB (sempat dilonggarkan sementara saat pandemi)</td></tr>
  <tr><td>Bank sentral yang independen</td><td>Bank Indonesia pada dasarnya tidak boleh membiayai defisit pemerintah secara langsung — agar "mencetak uang untuk menutup anggaran" tidak menjadi jalan pintas</td></tr>
  <tr><td>Target inflasi yang diumumkan</td><td>Menjaga ekspektasi masyarakat tetap tenang</td></tr>
</table>

<h3>Bagaimana hiperinflasi berakhir</h3>
<p>Hampir selalu lewat kombinasi yang menyakitkan: <b>anggaran diseimbangkan</b>, pencetakan uang dihentikan, <b>mata uang baru</b> atau mata uang asing dipakai, dan <b>kepercayaan dibangun ulang</b> — yang butuh bertahun-tahun. Yang paling dirugikan biasanya penabung dan pekerja bergaji tetap, karena tabungan dan gaji mereka menguap lebih cepat daripada harga barang.</p>

<h3>Hubungannya dengan crypto</h3>
<p>Blok pertama Bitcoin (2009) menyimpan judul berita koran tentang dana talangan bank — penanda bahwa Bitcoin lahir dari ketidakpercayaan pada uang yang bisa dicetak tanpa batas. Di negara dengan inflasi sangat tinggi, sebagian warga memang beralih ke <b>stablecoin berbasis dolar</b> untuk menyimpan nilai.</p>
<div class="callout">
<b>Tapi pisahkan narasi dari kenyataan.</b> Pasokan Bitcoin yang terbatas tidak otomatis membuat daya belinya stabil — harganya bisa turun lebih dari separuh dalam setahun. Stablecoin mewarisi inflasi dolar dan bergantung pada kepercayaan kepada penerbitnya. Keduanya bisa menjadi alat, bukan jaminan.
</div>
`,
          keyPoints: [
            "Hiperinflasi sering didefinisikan sebagai kenaikan harga lebih dari 50% per bulan.",
            "Polanya: defisit besar yang ditutup dengan mencetak uang, harga melonjak, lalu kepercayaan terhadap uang runtuh sehingga spiral makin cepat.",
            "Pasokan barang yang runtuh dan kontrol harga memperparah hiperinflasi.",
            "Indonesia mengalami inflasi sekitar 600% pada 1966 (dengan penggantian Rp1.000 lama menjadi Rp1 baru pada 1965) dan 77,6% saat krisis 1998.",
            "Pengamannya: batas defisit anggaran, bank sentral yang tidak membiayai defisit secara langsung, dan target inflasi.",
            "Hiperinflasi berakhir lewat disiplin anggaran, mata uang baru atau asing, dan kepercayaan yang dibangun ulang bertahun-tahun.",
            "Pasokan Bitcoin yang terbatas tidak menjamin daya beli stabil; stablecoin bergantung pada dolar dan penerbitnya.",
          ],
          practice: [
            { type: "number", q: "Harga naik 50% setiap bulan. Setelah 12 bulan, harga menjadi kira-kira berapa kali lipat? (bulatkan)", answer: 130, tol: 1, hint: "1,5 dipangkatkan 12.", solution: "1,5¹² ≈ 129,7 — sekitar 130 kali lipat dalam setahun." },
            { type: "number", q: "Pada 1965 uang Rp1.000 lama ditetapkan setara Rp1 baru. Tabungan Rp250.000 uang lama menjadi berapa rupiah baru?", answer: 250, tol: 0.5, hint: "Bagi dengan 1.000.", solution: "Rp250.000 ÷ 1.000 = Rp250 uang baru." },
          ],
          quiz: [
            {
              q: "Apa pemicu yang paling sering muncul dalam kisah hiperinflasi?",
              options: [
                "Defisit anggaran besar yang ditutup dengan mencetak uang",
                "Pertumbuhan ekonomi yang terlalu cepat selama beberapa tahun",
                "Suku bunga bank sentral yang dinaikkan terlalu tinggi",
                "Harga barang impor yang turun terlalu drastis dalam setahun",
              ],
              answer: 0,
              explain: "Uang bertambah jauh lebih cepat daripada barang, lalu kepercayaan runtuh.",
            },
            {
              q: "Kenapa orang cepat-cepat membelanjakan gajinya saat hiperinflasi — dan apa akibatnya?",
              options: [
                "Nilai uang cepat turun, dan belanja yang serentak mempercepat kenaikan harga",
                "Toko memberi diskon besar, sehingga harga-harga perlahan kembali turun",
                "Bank menutup semua rekening, sehingga uang tunai wajib dibelanjakan",
                "Pemerintah mewajibkannya, sehingga pencetakan uang bisa dihentikan",
              ],
              answer: 0,
              explain: "Uang yang berpindah tangan makin cepat memperkuat spiral kenaikan harga.",
            },
            {
              q: "Kenapa Bank Indonesia pada dasarnya dilarang membiayai defisit pemerintah secara langsung?",
              options: [
                "Agar mencetak uang untuk menutup anggaran tidak menjadi jalan pintas",
                "Agar pemerintah wajib meminjam seluruh kebutuhannya dari luar negeri",
                "Agar Bank Indonesia bisa memperoleh keuntungan dari bunga pinjaman",
                "Agar APBN tidak boleh mengalami defisit sama sekali setiap tahunnya",
              ],
              answer: 0,
              explain: "Pengaman ini lahir dari pelajaran pahit episode inflasi ekstrem.",
            },
            {
              q: "Seseorang berkata \"pasokan Bitcoin terbatas, jadi pasti aman dari inflasi\". Tanggapan yang paling tepat?",
              options: [
                "Pasokan terbatas tidak menjamin daya beli stabil karena harganya bisa jatuh tajam",
                "Benar, karena aset berpasokan terbatas selalu naik lebih cepat dari inflasi",
                "Benar, karena harga Bitcoin dikaitkan secara resmi dengan indeks harga konsumen",
                "Keliru, karena pasokan Bitcoin sebenarnya bisa ditambah kapan saja oleh penambang",
              ],
              answer: 0,
              explain: "Pasokannya memang terjadwal, tetapi harganya ditentukan permintaan yang sangat bergejolak.",
            },
          ],
        },
        {
          id: "acc-mak-5",
          title: "Kurs & Risiko Nilai Tukar",
          duration: "12 menit",
          content: `
<p>Kalau bisnismu membeli bahan impor atau menjual ke luar negeri, <b>kurs</b> bisa menentukan untung-rugimu — bahkan tanpa kamu mengubah apa pun.</p>

<div class="callout">
<b>Kurs (nilai tukar)</b> = harga mata uang suatu negara terhadap mata uang lain.
<br><br>Contoh: <b>USD/IDR = 16.000</b> artinya 1 dolar AS setara Rp16.000.
</div>

<h3>Dua istilah yang sering tertukar</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>Melemah</b> (depresiasi)</td><td>Butuh <b>lebih banyak</b> rupiah untuk 1 dolar</td><td>15.000 → <b>16.000</b></td></tr>
  <tr><td><b>Menguat</b> (apresiasi)</td><td>Butuh <b>lebih sedikit</b> rupiah untuk 1 dolar</td><td>16.000 → <b>15.000</b></td></tr>
</table>
<div class="callout warn">
<b>Jangan tertukar:</b> angka kurs <b>naik</b> (15.000 → 16.000) justru berarti rupiah <b>MELEMAH</b>. Banyak orang salah membacanya karena angkanya membesar.
</div>

<h3>Siapa untung, siapa rugi saat rupiah melemah?</h3>
<table class="tbl">
  <tr><th>👍 Diuntungkan</th><th>👎 Dirugikan</th></tr>
  <tr><td><b>Eksportir</b> — barangnya jadi lebih murah bagi pembeli luar negeri</td><td><b>Importir</b> — bahan baku impor jadi lebih mahal</td></tr>
  <tr><td>Penerima pemasukan dalam dolar</td><td>Perusahaan dengan <b>utang dalam dolar</b> — cicilannya membengkak dalam rupiah</td></tr>
  <tr><td>Pariwisata (turis asing merasa murah)</td><td>Konsumen — harga barang impor naik</td></tr>
</table>

<div class="callout warn">
<b>Bahaya terbesar: utang dolar dengan pendapatan rupiah.</b> Bayangkan perusahaan berutang <b>US$1 juta</b> saat kurs Rp15.000 → nilainya Rp15 miliar. Bila rupiah melemah ke Rp16.000, utang yang sama tiba-tiba bernilai <b>Rp16 miliar</b> — bertambah Rp1 miliar <b>tanpa meminjam sepeser pun</b>. Ini disebut <b>currency mismatch</b>, dan sudah menjatuhkan banyak perusahaan.
</div>

<h3>Cara mengelola risikonya</h3>
<ul>
  <li><b>Natural hedging</b> — usahakan pemasukan &amp; utang dalam <b>mata uang yang sama</b>. Kalau berpendapatan rupiah, berutanglah dalam rupiah.</li>
  <li><b>Hedging</b> (lindung nilai) — memakai instrumen keuangan (mis. kontrak forward) untuk mengunci kurs di masa depan.</li>
  <li><b>Diversifikasi pemasok</b> — jangan bergantung sepenuhnya pada bahan impor.</li>
  <li><b>Klausul penyesuaian harga</b> dalam kontrak jangka panjang.</li>
</ul>

<div class="callout">
<b>Apa yang menggerakkan kurs?</b> Selisih suku bunga antar-negara, neraca perdagangan (ekspor vs impor), aliran modal asing, inflasi, dan sentimen global. Karena itu kurs <b>sangat sulit diramal</b> — jangan percaya yang mengaku bisa memastikannya.
</div>
`,
          keyPoints: [
            "Kurs = harga mata uang terhadap mata uang lain (mis. USD/IDR 16.000).",
            "Angka kurs NAIK berarti rupiah MELEMAH (butuh lebih banyak rupiah per dolar) — sering disalahbaca.",
            "Rupiah melemah: eksportir diuntungkan, importir & pemilik utang dolar dirugikan.",
            "Currency mismatch (utang dolar, pendapatan rupiah) sangat berbahaya — utang membengkak tanpa meminjam lagi.",
            "Pengelolaan: natural hedging, hedging kontrak, diversifikasi pemasok, klausul penyesuaian harga.",
            "Kurs digerakkan banyak faktor & sangat sulit diramal.",
          ],
          practice: [
            { type: "number", q: "Perusahaan berutang US$1 juta. Kurs berubah dari Rp15.000 menjadi Rp16.000. Berapa nilai utangnya sekarang? (miliar Rupiah)", answer: 16, tol: 0.2, unit: "miliar", hint: "1.000.000 × 16.000.", solution: "US$1jt × Rp16.000 = Rp16 miliar (naik Rp1 miliar tanpa meminjam lagi)." },
            { type: "choice", q: "Kurs USD/IDR bergerak dari 15.000 ke 16.000. Apa yang terjadi pada rupiah?", options: ["Rupiah menguat", "Rupiah melemah (depresiasi)", "Tidak berubah", "Dolar melemah"], answer: 1, hint: "Butuh lebih banyak rupiah untuk 1 dolar.", solution: "Angka naik = rupiah melemah terhadap dolar." },
          ],
          quiz: [
            {
              q: "Siapa yang paling diuntungkan saat rupiah melemah?",
              options: [
                "Importir bahan baku",
                "Eksportir",
                "Perusahaan berutang dolar",
                "Konsumen barang impor",
              ],
              answer: 1,
              explain:
                "Barang eksportir jadi lebih murah bagi pembeli asing & pemasukan dolarnya bernilai lebih besar dalam rupiah.",
            },
            {
              q: "Apa itu 'currency mismatch'?",
              options: [
                "Utang dalam mata uang berbeda dari mata uang pemasukannya",
                "Kurs yang dipakai bank berbeda dengan kurs resmi Bank Indonesia",
                "Transaksi ekspor dicatat dalam mata uang negara tujuan",
                "Harga barang impor berbeda antara satu kota dan kota lainnya",
              ],
              answer: 0,
              explain:
                "Ketidaksesuaian mata uang membuat beban utang melonjak saat kurs bergerak.",
            },
          ],
        },
        {
          id: "acc-inf-3",
          title: "Melindungi Uang & Bisnis dari Inflasi",
          duration: "15 menit",
          content: `
<p>Inflasi bekerja diam-diam: angka di rekening tidak berkurang, laporan keuangan terlihat tumbuh — padahal yang bisa dibeli justru menyusut. Pelajaran ini membahas cara berpikir yang melindungi keuangan pribadi dan bisnis, lengkap dengan cara inflasi mengelabui laporan keuangan.</p>

<h3>Fundamental: selalu pikirkan angka riil</h3>
<div class="callout">
<b>Imbal hasil riil = (1 + imbal hasil bersih) ÷ (1 + inflasi) − 1</b><br><br>
Cara cepatnya: imbal hasil bersih − inflasi. Untuk angka kecil hasilnya hampir sama; untuk angka besar gunakan rumus lengkap.<br><br>
Contoh deposito berbunga 4,5% yang dipotong pajak bunga 20% → bersih 3,6%. Dengan inflasi 3%: (1,036 ÷ 1,03) − 1 = <b>0,58% per tahun</b>. Angkanya bertambah 3,6%, tapi daya belinya hanya naik sedikit sekali.
</div>

<div data-demo="inflasi-riil"></div>

<h3>Aturan 72: kapan daya beli tinggal separuh?</h3>
<p style="text-align:center"><b>Tahun sampai daya beli uang tunai tinggal separuh ≈ 72 ÷ inflasi</b></p>
<table class="tbl">
  <tr><th>Inflasi per tahun</th><th>Daya beli tinggal separuh setelah</th></tr>
  <tr><td>3%</td><td>sekitar 24 tahun</td></tr>
  <tr><td>6%</td><td>sekitar 12 tahun</td></tr>
  <tr><td>12%</td><td>sekitar 6 tahun</td></tr>
</table>

<h3>Aset dan inflasi — tanpa janji manis</h3>
<table class="tbl">
  <tr><th>Tempat menyimpan</th><th>Saat inflasi</th><th>Catatan jujur</th></tr>
  <tr><td>Uang tunai</td><td class="bad-cell">Pasti kalah</td><td>Tetap perlu sebagai dana darurat dan kebutuhan harian</td></tr>
  <tr><td>Tabungan & deposito</td><td>Sering hanya sedikit di atas atau di bawah inflasi setelah pajak</td><td>Aman nilai nominalnya dan mudah dicairkan</td></tr>
  <tr><td>Obligasi berbunga tetap</td><td>Dirugikan bila inflasi naik melebihi perkiraan</td><td>Bunganya tidak ikut naik</td></tr>
  <tr><td>Saham</td><td>Bisnis dengan pricing power bisa meneruskan kenaikan biaya</td><td>Jangka pendek bisa turun tajam, terutama saat suku bunga dinaikkan</td></tr>
  <tr><td>Properti & emas</td><td>Sering bertahan dalam jangka panjang</td><td>Bisa stagnan bertahun-tahun; ada biaya dan tidak selalu mudah dijual</td></tr>
  <tr><td>Crypto</td><td>Belum terbukti</td><td>Pada 2022, saat inflasi AS mencapai sekitar 9%, harga Bitcoin justru turun lebih dari separuh</td></tr>
  <tr><td>Kemampuan dirimu</td><td class="ok-cell">Penghasilan yang tumbuh lebih cepat dari inflasi</td><td>Sering menjadi "aset" dengan imbal hasil terbaik di usia muda</td></tr>
</table>
<p><i>Tabel ini alat berpikir, bukan saran investasi. Setiap aset punya risikonya sendiri.</i></p>

<h3>Bagaimana inflasi mengelabui laporan keuangan</h3>
<p>Laporan keuangan dicatat dalam rupiah nominal. Saat inflasi tinggi, empat hal ini sering menyesatkan:</p>
<table class="tbl">
  <tr><th>Jebakan</th><th>Contoh</th><th>Yang sebenarnya terjadi</th></tr>
  <tr><td><b>Pertumbuhan semu</b></td><td>Pendapatan naik 8% saat inflasi 6%</td><td>Pertumbuhan riilnya hanya sekitar 1,9% — sebagian besar hanya harga yang naik</td></tr>
  <tr><td><b>Laba persediaan</b></td><td>Stok dibeli Rp10.000/unit, harga penggantinya kini Rp11.000, dijual Rp15.000. Dengan FIFO laba tercatat Rp5.000</td><td>Laba "operasional" sebenarnya Rp4.000; Rp1.000 sisanya habis untuk membeli stok pengganti yang lebih mahal</td></tr>
  <tr><td><b>Penyusutan terlalu kecil</b></td><td>Mesin Rp1 miliar dibeli 10 tahun lalu disusutkan Rp100 juta per tahun</td><td>Dengan inflasi 4% per tahun, mesin penggantinya kini sekitar Rp1,48 miliar. Laba terlihat lebih besar dari kemampuan bisnis mengganti asetnya</td></tr>
  <tr><td><b>Utang bunga tetap</b></td><td>Pinjaman Rp1 miliar dengan bunga tetap</td><td>Nilai riil utangnya menyusut — menguntungkan peminjam dan merugikan pemberi pinjaman</td></tr>
</table>
<div class="callout warn">
<b>Cara membaca yang aman:</b> bandingkan pertumbuhan dengan inflasi, periksa apakah Free Cash Flow ikut naik (bukan hanya laba), dan waspadai bisnis padat aset yang laporannya tampak sehat tapi kasnya selalu habis untuk mengganti mesin.
</div>

<h3>Strategi bisnis menghadapi inflasi</h3>
<ul>
  <li><b>Bangun pricing power</b> — merek, kualitas, dan layanan yang membuat pelanggan tidak mudah pindah saat harga disesuaikan.</li>
  <li><b>Tulis klausul penyesuaian harga</b> di kontrak jangka panjang, misalnya dikaitkan dengan inflasi.</li>
  <li><b>Kelola persediaan dan modal kerja</b> — stok yang terlalu tipis rawan kehabisan, yang terlalu tebal mengikat kas.</li>
  <li><b>Pertimbangkan jenis utang</b> — bunga tetap melindungi dari kenaikan suku bunga, bunga mengambang lebih murah di awal tapi berisiko.</li>
  <li><b>Pantau inflasi negara pemasok dan kurs</b> — bahan impor bisa naik walau inflasi dalam negeri rendah.</li>
</ul>
`,
          keyPoints: [
            "Imbal hasil riil = (1 + imbal hasil bersih) ÷ (1 + inflasi) − 1; pajak bisa menghabiskan sebagian besar selisihnya.",
            "Aturan 72: daya beli uang tunai tinggal separuh setelah sekitar 72 ÷ inflasi tahun.",
            "Tidak ada aset yang pasti menang melawan inflasi; uang tunai pasti kalah, crypto belum terbukti, dan kemampuan diri sering menjadi aset terbaik.",
            "Inflasi membuat pertumbuhan pendapatan tampak lebih besar dari pertumbuhan riil.",
            "Dengan FIFO saat inflasi, sebagian laba hanyalah laba persediaan yang habis untuk membeli stok pengganti.",
            "Penyusutan berbasis harga perolehan lama membuat laba tampak lebih besar dari kemampuan mengganti aset.",
            "Inflasi menguntungkan peminjam berbunga tetap dan merugikan pemberi pinjaman.",
          ],
          practice: [
            { type: "number", q: "Imbal hasil bersih 6% per tahun dan inflasi 4%. Berapa imbal hasil riilnya (%)? (2 desimal)", answer: 1.92, tol: 0.02, hint: "1,06 ÷ 1,04 − 1.", solution: "1,06 ÷ 1,04 = 1,0192 → 1,92% per tahun (cara cepat memberi 2%)." },
            { type: "number", q: "Dengan aturan 72, jika inflasi 8% per tahun, daya beli uang tunai tinggal separuh setelah berapa tahun?", answer: 9, tol: 0.1, hint: "72 ÷ 8.", solution: "72 ÷ 8 = 9 tahun." },
          ],
          quiz: [
            {
              q: "Deposito berbunga 5%, dipotong pajak 20%, dan inflasi 4%. Bagaimana daya beli uangmu?",
              options: [
                "Hampir tidak bertambah, karena hasil bersihnya hanya 4% dan setara inflasi",
                "Bertambah sekitar 5% per tahun, sesuai bunga yang tertulis di bilyet",
                "Bertambah sekitar 1% per tahun, karena pajak tidak memengaruhi daya beli",
                "Berkurang sekitar 4% per tahun, karena seluruh bunga habis untuk pajak",
              ],
              answer: 0,
              explain: "5% × 0,8 = 4% bersih; dikurangi inflasi 4% → imbal hasil riil sekitar nol.",
            },
            {
              q: "Pendapatan sebuah perusahaan naik 8% saat inflasi 6%. Kesimpulan yang paling tepat?",
              options: [
                "Pertumbuhan riilnya hanya sekitar 2%, sebagian besar hanya kenaikan harga",
                "Perusahaan tumbuh pesat karena pendapatan naik lebih dari 5% setahun",
                "Perusahaan menyusut karena pendapatannya tumbuh lebih lambat dari inflasi",
                "Pertumbuhan riilnya 14% karena inflasi ikut menambah pendapatan",
              ],
              answer: 0,
              explain: "(1,08 ÷ 1,06) − 1 ≈ 1,9% — itulah pertumbuhan volume dan nilai yang sebenarnya.",
            },
            {
              q: "Kenapa laba perusahaan yang memakai FIFO bisa terlihat lebih tinggi saat inflasi?",
              options: [
                "Karena HPP memakai harga stok lama yang lebih murah, padahal stok pengganti lebih mahal",
                "Karena FIFO membolehkan perusahaan menaikkan harga jual lebih cepat dari pesaing",
                "Karena FIFO menghapus biaya persediaan dari laporan laba rugi saat inflasi",
                "Karena FIFO membuat pajak penghasilan perusahaan menjadi nol selama inflasi",
              ],
              answer: 0,
              explain: "Selisih itu adalah laba persediaan yang habis untuk membeli stok baru.",
            },
            {
              q: "Siapa yang diuntungkan bila inflasi ternyata jauh lebih tinggi dari perkiraan saat pinjaman berbunga tetap disepakati?",
              options: [
                "Peminjam, karena nilai riil utangnya menyusut",
                "Pemberi pinjaman, karena bunganya ikut naik",
                "Keduanya, karena nilai nominal pinjaman tetap",
                "Tidak ada, karena bunga tetap selalu disesuaikan",
              ],
              answer: 0,
              explain: "Cicilan tetap dibayar dengan uang yang daya belinya makin kecil.",
            },
          ],
        },
        {
          id: "acc-mak-6",
          title: "Siklus Ekonomi & Strategi Bisnis",
          duration: "13 menit",
          content: `
<p>Penutup modul: ekonomi <b>tidak pernah bergerak lurus</b>. Ia bergerak dalam <b>siklus</b> — dan memahami posisimu dalam siklus itu sangat menentukan keputusan bisnis.</p>

<div data-diagram="cycle" data-steps="Ekspansi|Puncak|Kontraksi|Dasar (trough)" data-center="berulang" data-caption="Ekonomi bergerak dalam siklus — strategi bisnis menyesuaikan posisi saat ini"></div>


<h3>Empat fase siklus ekonomi</h3>
<table class="tbl">
  <tr><th>Fase</th><th>Cirinya</th><th>Biasanya terjadi</th></tr>
  <tr><td><b>1. Ekspansi</b></td><td>PDB tumbuh, lapangan kerja bertambah, optimisme tinggi</td><td>Bisnis ekspansi, kredit lancar</td></tr>
  <tr><td><b>2. Puncak</b></td><td>Ekonomi "panas", inflasi naik</td><td>Bank sentral mulai menaikkan bunga</td></tr>
  <tr><td><b>3. Kontraksi/Resesi</b></td><td>PDB menyusut, PHK meningkat, permintaan turun</td><td>Bisnis lemah berguguran</td></tr>
  <tr><td><b>4. Palung &amp; Pemulihan</b></td><td>Titik terendah, lalu mulai membaik</td><td>Bunga diturunkan, ekonomi bangkit</td></tr>
</table>

<div class="callout">
<b>Definisi resesi yang umum dipakai:</b> PDB riil <b>menyusut</b> selama <b>dua kuartal berturut-turut</b>. Ini definisi teknis yang sering dikutip media, meski lembaga resmi menilai dengan indikator yang lebih luas.
</div>

<h3>Bisnis siklikal vs defensif</h3>
<table class="tbl">
  <tr><th></th><th><b>Siklikal</b></th><th><b>Defensif</b> (non-siklikal)</th></tr>
  <tr><td>Sifatnya</td><td>Ikut naik-turun ekonomi dengan tajam</td><td>Relatif stabil di segala kondisi</td></tr>
  <tr><td>Contoh</td><td>Properti, otomotif, barang mewah, konstruksi, pariwisata</td><td>Makanan pokok, obat-obatan, listrik, air, kebutuhan harian</td></tr>
  <tr><td>Alasannya</td><td>Pembelian bisa <b>ditunda</b> saat ekonomi sulit</td><td>Tetap dibutuhkan <b>apa pun</b> kondisinya</td></tr>
</table>

<div class="callout">
<b>Uji sederhana:</b> tanyakan — <i>"kalau penghasilan orang turun 30%, apakah mereka berhenti membeli produk ini?"</i> Kalau <b>ya</b> → bisnis siklikal. Kalau <b>tidak</b> (mis. beras, obat) → bisnis defensif.
</div>

<h3>Strategi menghadapi siklus</h3>
<table class="tbl">
  <tr><th>Saat ekonomi kuat</th><th>Saat ekonomi lemah</th></tr>
  <tr><td>Jangan terlena — <b>kurangi utang</b> &amp; kumpulkan kas</td><td>Kas &amp; utang rendah menjadi <b>penyelamat</b></td></tr>
  <tr><td>Bangun cadangan untuk masa sulit</td><td>Fokus pada pelanggan inti &amp; efisiensi</td></tr>
  <tr><td>Waspada ekspansi berlebihan berbasis utang</td><td>Peluang: pesaing lemah berguguran, kamu bisa merebut pangsa pasar</td></tr>
</table>

<div class="callout warn">
<b>Kesalahan klasik:</b> berekspansi besar-besaran <b>dengan utang</b> saat ekonomi sedang bagus — lalu terjebak ketika siklus berbalik. Ingat pelajaran <i>Pola Pemenang</i>: <b>utang rendah</b> adalah yang membuat bisnis bertahan melewati badai.
</div>

<h3>Rangkuman: tiga lapis analisis</h3>
<ol>
  <li><b>Makro</b> — bagaimana kondisi ekonomi? (modul ini)</li>
  <li><b>Industri</b> — apakah sektornya tumbuh atau tenggelam?</li>
  <li><b>Perusahaan</b> — laporan keuangan, moat, manajemen (modul-modul sebelumnya)</li>
</ol>

<div class="callout warn">
<b>Pengingat:</b> materi ini <b>edukasi, bukan saran finansial/investasi</b>. Data ekonomi berubah terus — selalu rujuk sumber resmi (BPS, Bank Indonesia, Kementerian Keuangan) untuk angka terbaru.
</div>
`,
          keyPoints: [
            "Ekonomi bergerak dalam siklus: ekspansi → puncak → kontraksi/resesi → palung & pemulihan.",
            "Resesi sering didefinisikan sebagai PDB riil menyusut dua kuartal berturut-turut.",
            "Bisnis siklikal (properti, otomotif, mewah) ikut naik-turun tajam; defensif (makanan pokok, obat, listrik) relatif stabil.",
            "Uji: kalau penghasilan orang turun 30%, apakah mereka berhenti membeli produk ini?",
            "Saat ekonomi kuat: kurangi utang & kumpulkan kas. Saat lemah: kas & utang rendah jadi penyelamat.",
            "Analisis lengkap = tiga lapis: makro → industri → perusahaan.",
          ],
          practice: [
            { type: "choice", q: "Bisnis penjual beras & obat-obatan termasuk kategori apa?", options: ["Siklikal", "Defensif (non-siklikal)", "Musiman", "Spekulatif"], answer: 1, hint: "Apakah orang berhenti membelinya saat ekonomi sulit?", solution: "Kebutuhan pokok tetap dibeli apa pun kondisinya = defensif." },
            { type: "choice", q: "Ekonomi sedang sangat kuat. Menurut pelajaran ini, apa yang sebaiknya dilakukan bisnis?", options: ["Berutang sebanyak-banyaknya untuk ekspansi besar", "Kurangi utang & kumpulkan kas sebagai persiapan siklus berbalik", "Menghentikan produksi", "Menjual semua aset"], answer: 1, hint: "Kesalahan klasik adalah ekspansi berbasis utang saat masa jaya.", solution: "Masa kuat adalah waktu terbaik memperkuat neraca, bukan menumpuk risiko." },
          ],
          quiz: [
            {
              q: "Apa ciri bisnis 'siklikal'?",
              options: [
                "Naik-turun tajam mengikuti ekonomi karena pembeliannya bisa ditunda",
                "Pendapatannya stabil karena produknya kebutuhan pokok sehari-hari",
                "Bergerak berlawanan arah dengan kondisi ekonomi secara umum",
                "Hanya beroperasi pada musim-musim tertentu dalam setahun",
              ],
              answer: 0,
              explain:
                "Produk yang pembeliannya bisa ditunda (properti, otomotif, mewah) sangat sensitif terhadap siklus.",
            },
            {
              q: "Apa tiga lapis analisis yang lengkap untuk menilai sebuah bisnis?",
              options: [
                "Makro (ekonomi) → industri → perusahaan",
                "Perusahaan → saham → dividen",
                "Laba → arus kas → neraca",
                "Harga → volume → sentimen",
              ],
              answer: 0,
              explain:
                "Perusahaan bagus di industri yang tenggelam, atau di ekonomi yang lesu, tetap sulit bertumbuh.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 17: MASA DEPAN AKUNTANSI & PEKERJAAN KEUANGAN ---------------- */
    {
      id: "acc-arah",
      level: "Arah",
      title: "Masa Depan Akuntansi & Pekerjaan Keuangan",
      summary: "Pekerjaan apa yang menyusut, apa yang tumbuh, dan keterampilan mana yang justru makin bernilai.",
      lessons: [
        {
          id: "acc-arah-1",
          title: "Pekerjaan yang Menyusut, Pekerjaan yang Tumbuh",
          duration: "14 menit",
          content: `
<p>Akuntansi sering disebut bidang yang paling terancam otomatisasi. Itu <b>separuh benar</b> — dan separuh yang keliru justru bagian terpentingnya.</p>

<div data-diagram="matrix" data-cells="Mencatat &amp; mencocokkan|Menyusun estimasi|Memasukkan data manual|Menjelaskan &amp; memutuskan" data-xlabel="Makin butuh pertimbangan" data-ylabel="Makin bernilai bagi perusahaan" data-caption="Yang di kiri cepat diotomatiskan; yang di kanan justru makin dicari"></div>

<h3>Yang memang menyusut</h3>
<table class="tbl">
  <tr><th>Pekerjaan</th><th>Yang menggantikannya</th></tr>
  <tr><td><b>Memasukkan data dari struk &amp; faktur</b></td><td>Pemindaian otomatis dan sambungan langsung ke rekening bank</td></tr>
  <tr><td><b>Mencocokkan rekening (rekonsiliasi)</b></td><td>Pencocokan otomatis; manusia hanya menangani yang tidak cocok</td></tr>
  <tr><td><b>Menyusun laporan rutin</b></td><td>Laporan yang tersusun sendiri dari data yang masuk</td></tr>
  <tr><td><b>Mengambil sampel untuk audit</b></td><td>Pemeriksaan seluruh populasi data, bukan lagi contoh acak</td></tr>
</table>

<div class="callout warn">
Perhatikan kesamaannya: semuanya <b>berulang, punya aturan jelas, dan benar-salahnya bisa dipastikan</b>. Itulah ciri pekerjaan yang paling cepat diotomatiskan — di bidang apa pun, bukan hanya akuntansi.
</div>

<h3>Yang justru sulit digantikan</h3>
<table class="tbl">
  <tr><th>Pekerjaan</th><th>Kenapa sulit</th></tr>
  <tr><td><b>Menyusun estimasi</b></td><td>Berapa cadangan piutang tak tertagih? Umur ekonomis mesin? Ini <b>pertimbangan</b>, bukan perhitungan — dan justru di sinilah kecurangan bersembunyi</td></tr>
  <tr><td><b>Membaca niat</b></td><td>Mesin melihat angka ganjil; manusia memahami <b>kenapa</b> seseorang melakukannya</td></tr>
  <tr><td><b>Menjelaskan ke pengambil keputusan</b></td><td>Menerjemahkan angka jadi keputusan bisnis, lengkap dengan asumsi dan batasnya</td></tr>
  <tr><td><b>Memikul tanggung jawab</b></td><td>Saat laporan salah, harus ada <b>orang</b> yang bertanggung jawab. Mesin tidak bisa memikulnya</td></tr>
</table>

<div class="callout">
<b>Poin yang sering terlewat:</b> otomatisasi menghapus pekerjaan <b>menyiapkan</b> angka, tapi justru <b>menambah</b> kebutuhan orang yang bisa <b>menilai</b> angka. Ketika laporan tersusun sendiri dalam hitungan detik, pertanyaannya bergeser dari "berapa angkanya?" menjadi "<b>apakah angka ini bisa dipercaya, dan apa artinya?</b>"
</div>

<h3>Peran yang tumbuh</h3>
<ul>
  <li><b>Analis keuangan &amp; penasihat bisnis</b> — menerjemahkan angka menjadi keputusan.</li>
  <li><b>Pengendalian internal &amp; audit berkelanjutan</b> — merancang sistem yang mencegah kesalahan, bukan mencarinya setelah terjadi.</li>
  <li><b>Akuntansi forensik</b> — memburu kecurangan yang makin canggih.</li>
  <li><b>Pelaporan keberlanjutan</b> — bidang baru dengan standar yang sedang terbentuk.</li>
  <li><b>Akuntan yang menguasai data</b> — paling langka, karena menggabungkan dua bidang yang jarang dikuasai satu orang.</li>
</ul>

<div class="callout warn">
<b>Arah lain yang sudah berjalan:</b> pelaporan pajak dan faktur elektronik membuat sebagian data perusahaan mengalir <b>langsung ke otoritas</b>, nyaris seketika. Akibatnya, ruang untuk "merapikan angka belakangan" makin sempit — dan kerapian pencatatan sejak awal makin menentukan.
</div>
`,
          keyPoints: [
            "Yang menyusut: memasukkan data, rekonsiliasi, menyusun laporan rutin, dan pengambilan sampel audit.",
            "Cirinya sama: berulang, beraturan jelas, dan benar-salahnya bisa dipastikan.",
            "Yang sulit digantikan: menyusun estimasi, membaca niat, menjelaskan ke pengambil keputusan, dan memikul tanggung jawab.",
            "Estimasi adalah pertimbangan, bukan perhitungan — dan di situlah kecurangan bersembunyi.",
            "Otomatisasi menghapus pekerjaan menyiapkan angka, tapi menambah kebutuhan orang yang bisa menilai angka.",
            "Peran yang tumbuh: analis & penasihat, pengendalian internal, forensik, pelaporan keberlanjutan, dan akuntan yang menguasai data.",
            "Pelaporan elektronik membuat data mengalir hampir seketika ke otoritas, sehingga kerapian sejak awal makin menentukan.",
          ],
          quiz: [
            {
              q: "Apa ciri pekerjaan akuntansi yang paling cepat diotomatiskan?",
              options: [
                "Berulang, beraturan jelas, dan benar-salahnya bisa dipastikan",
                "Membutuhkan pertimbangan atas asumsi yang tidak bisa dipastikan",
                "Melibatkan tanggung jawab hukum bila hasilnya ternyata keliru",
                "Memerlukan penjelasan lisan kepada pemangku kepentingan",
              ],
              answer: 0,
              explain: "Ciri ini berlaku di bidang apa pun, bukan hanya akuntansi.",
            },
            {
              q: "Kenapa menyusun estimasi sulit digantikan mesin?",
              options: [
                "Karena estimasi adalah pertimbangan atas ketidakpastian, bukan perhitungan",
                "Karena perhitungan estimasi terlalu rumit untuk dijalankan komputer",
                "Karena standar akuntansi melarang estimasi dihitung oleh perangkat lunak",
                "Karena data yang dibutuhkan estimasi tidak pernah tersedia digital",
              ],
              answer: 0,
              explain: "Justru karena bersandar pada pertimbangan, di sinilah kecurangan paling sering bersembunyi.",
            },
            {
              q: "Bagaimana otomatisasi mengubah pertanyaan utama pekerjaan akuntansi?",
              options: [
                "Dari 'berapa angkanya' menjadi 'apakah angka ini bisa dipercaya dan apa artinya'",
                "Dari 'apa artinya angka ini' menjadi 'bagaimana cara menghitungnya'",
                "Dari 'siapa yang bertanggung jawab' menjadi 'perangkat lunak apa yang dipakai'",
                "Pertanyaannya tidak berubah, hanya alatnya yang berganti",
              ],
              answer: 0,
              explain: "Ketika laporan tersusun sendiri, nilai bergeser ke kemampuan menilai dan menjelaskan.",
            },
          ],
        },
        {
          id: "acc-arah-2",
          title: "Keterampilan yang Bertahan",
          duration: "12 menit",
          content: `
<p>Pelajaran penutup seluruh platform ini. Pertanyaannya sederhana: dari semua yang sudah kamu pelajari, <b>mana yang masih berguna sepuluh tahun lagi?</b></p>

<div data-diagram="compare3" data-cols="Cepat usang::Cara pakai aplikasi::Aturan yang berubah|Bertahan lama::Cara berpikir angka::Menilai kualitas bisnis|Makin langka::Gabungan bidang::Kemampuan menjelaskan" data-caption="Tiga lapisan keterampilan dengan umur simpan yang jauh berbeda"></div>

<h3>Yang cepat usang</h3>
<p>Cara memakai satu aplikasi tertentu, tarif pajak tahun ini, format laporan yang berlaku sekarang. Semua ini <b>perlu diketahui</b>, tapi jangan dijadikan inti keahlianmu — semuanya berganti.</p>

<h3>Yang bertahan puluhan tahun</h3>
<table class="tbl">
  <tr><th>Keterampilan</th><th>Kenapa bertahan</th></tr>
  <tr><td><b>Membaca laporan keuangan</b></td><td>Bentuknya berubah, logikanya tidak. Aset tetap sama dengan kewajiban tambah ekuitas</td></tr>
  <tr><td><b>Membedakan laba dari kas</b></td><td>Perusahaan masih akan bangkrut karena kehabisan kas meski laporannya untung</td></tr>
  <tr><td><b>Menilai kualitas bisnis</b></td><td>Moat, alokasi modal, dan return on capital sudah bertahan puluhan tahun</td></tr>
  <tr><td><b>Berpikir dalam kemungkinan</b></td><td>Ketidakpastian tidak akan hilang; yang berubah hanya bentuknya</td></tr>
  <tr><td><b>Mencium yang janggal</b></td><td>Cara mencurangi laporan berganti wajah, polanya berulang</td></tr>
</table>

<h3>💎 Yang makin langka: gabungannya</h3>
<div class="callout">
Banyak orang menguasai <b>satu</b> dari tiga hal ini. Sangat sedikit yang menguasai <b>ketiganya</b>:<br><br>
<b>1. Paham angka</b> — bisa membaca laporan dan tahu mana yang mencurigakan.<br>
<b>2. Bisa mengolah data</b> — pandas, SQL, dan cukup paham AI untuk tahu kapan ia bisa dipercaya.<br>
<b>3. Bisa menjelaskan</b> — menerjemahkan temuan jadi keputusan yang bisa diambil orang lain.<br><br>
Itulah yang sebenarnya kamu bangun sepanjang platform ini, tanpa disebut secara terang-terangan.
</div>

<p>Perhatikan betapa seringnya ketiga jalur saling bertemu di materi yang sudah kamu lewati: <b>pandas</b> untuk laporan keuangan, <b>FCF</b> untuk menilai produk AI dan protokol kripto, <b>alokasi modal</b> untuk treasury DAO, <b>audit</b> untuk forensik blockchain. Persimpangan itu bukan kebetulan — di situlah keahlian yang sulit ditiru terbentuk.</p>

<h3>🧭 Cara tetap relevan</h3>
<div class="callout">
• <b>Pelajari yang mendasar lebih dalam, yang berubah secukupnya.</b> Satu jam memahami arus kas lebih bernilai daripada satu jam menghafal menu aplikasi.<br>
• <b>Jadilah orang yang memverifikasi.</b> Saat mesin menghasilkan laporan dalam detik, yang langka adalah orang yang tahu kapan laporan itu salah.<br>
• <b>Pakai alat barunya, jangan dihindari.</b> Yang tergantikan bukan orang yang memakai AI, melainkan yang menolak memakainya sementara pesaingnya memakai.<br>
• <b>Bangun rekam jejak.</b> Kepercayaan menumpuk seiring waktu dan tidak bisa disalin siapa pun.
</div>

<div class="callout warn">
<b>Penutup.</b> Tidak ada yang tahu persis seperti apa bidang ini sepuluh tahun lagi — dan siapa pun yang mengaku tahu sedang menebak. Tapi ada yang bisa dipastikan: <b>orang yang paham angka, bisa mengolah data, dan mampu menjelaskan temuannya akan tetap dibutuhkan</b> dalam skenario mana pun.<br><br>
Itu bukan ramalan. Itu hanya konsekuensi dari kenyataan bahwa keputusan tetap harus diambil manusia, dan keputusan yang baik butuh orang yang mengerti.
</div>
`,
          keyPoints: [
            "Cepat usang: cara memakai satu aplikasi, tarif pajak tahun berjalan, format laporan yang berlaku sekarang.",
            "Bertahan lama: membaca laporan keuangan, membedakan laba dari kas, menilai kualitas bisnis, berpikir probabilistik, mencium yang janggal.",
            "Yang makin langka adalah GABUNGAN: paham angka + bisa mengolah data + bisa menjelaskan.",
            "Ketiga jalur platform ini sengaja bertemu: pandas untuk laporan keuangan, FCF untuk produk AI & protokol, alokasi modal untuk treasury DAO, audit untuk forensik blockchain.",
            "Pelajari yang mendasar lebih dalam dan yang berubah secukupnya.",
            "Yang tergantikan bukan orang yang memakai AI, melainkan yang menolak memakainya sementara pesaingnya memakai.",
            "Kepercayaan dan rekam jejak menumpuk seiring waktu dan tidak bisa disalin siapa pun.",
          ],
          quiz: [
            {
              q: "Manakah keterampilan yang paling cepat usang?",
              options: [
                "Menguasai menu dan tombol satu aplikasi akuntansi tertentu",
                "Membedakan laba di laporan dari kas yang benar-benar ada",
                "Menilai kualitas sebuah bisnis lewat moat dan alokasi modalnya",
                "Mengenali pola yang janggal pada laporan keuangan",
              ],
              answer: 0,
              explain: "Aplikasi berganti; logika arus kas dan kualitas bisnis bertahan puluhan tahun.",
            },
            {
              q: "Apa kombinasi yang disebut paling langka di pasar kerja?",
              options: [
                "Paham angka, bisa mengolah data, dan mampu menjelaskan temuannya",
                "Menguasai banyak aplikasi akuntansi dari berbagai penyedia sekaligus",
                "Hafal seluruh standar akuntansi beserta nomor pasalnya",
                "Mampu bekerja sangat cepat dalam memasukkan data transaksi",
              ],
              answer: 0,
              explain: "Banyak orang menguasai satu dari ketiganya; sangat sedikit yang menguasai ketiganya sekaligus.",
            },
            {
              q: "Menurut pelajaran ini, siapa yang paling berisiko tergantikan?",
              options: [
                "Orang yang menolak memakai alat baru sementara pesaingnya memakainya",
                "Orang yang memakai AI untuk mempercepat pekerjaannya sehari-hari",
                "Orang yang mendalami konsep dasar alih-alih menghafal aplikasi",
                "Orang yang membangun rekam jejak dan kepercayaan bertahun-tahun",
              ],
              answer: 0,
              explain: "Yang menggantikan bukan mesinnya, melainkan orang lain yang memakai mesin itu.",
            },
          ],
        },
      ],
    },
  ],
};
