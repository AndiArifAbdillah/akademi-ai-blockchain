/* ============================================================
   MATERI KURSUS: CRYPTO & BLOCKCHAIN
   Disusun dari dasar hingga mahir, bahasa Indonesia sederhana.
   ============================================================ */

const BLOCKCHAIN_COURSE = {
  id: "blockchain",
  title: "Crypto & Blockchain",
  emoji: "⛓️",
  color: "#f59e0b",
  tagline: "Pahami uang digital, buku besar terdesentralisasi, dan Web3.",
  description:
    "Jalur ini menjelaskan blockchain dari nol: apa itu Bitcoin, bagaimana transaksi aman tanpa bank, smart contract, DeFi, NFT, hingga dasar membuat program di blockchain.",
  modules: [
    /* ---------------- MODUL 1: MULAI DARI NOL ---------------- */
    {
      id: "bc-dasar",
      level: "Dasar",
      title: "Mulai dari Nol",
      summary: "Sebelum blockchain: pahami uang, kepercayaan, masalah salinan digital, dan desentralisasi.",
      lessons: [
        {
          id: "bc-nol-1",
          title: "Apa itu Uang & Kepercayaan?",
          duration: "8 menit",
          content: `
<p>Untuk memahami blockchain, kita harus mulai dari pertanyaan mendasar yang jarang dipikirkan: <b>kenapa uang bisa berfungsi?</b></p>

<div data-diagram="timeline" data-events="Barter::tukar barang langsung|Emas::langka &amp; tahan lama|Uang kertas::dijamin negara|Uang digital::angka di server bank|Bitcoin::dijamin matematika" data-caption="Sejarah uang adalah sejarah siapa yang kita percaya"></div>


<h3>Uang hanyalah kesepakatan</h3>
<p>Selembar uang Rp100.000 sebenarnya cuma kertas. Ia berharga karena <b>semua orang sepakat & percaya</b> bahwa ia berharga. Uang berjalan di atas <b>kepercayaan</b>.</p>

<h3>Siapa yang menjaga catatannya?</h3>
<p>Saat kamu transfer uang lewat bank, tidak ada uang fisik berpindah. Yang terjadi: <b>bank mengubah angka</b> di catatannya (saldomu −, saldo temanmu +). Kita <b>percaya bank</b> mencatat dengan jujur.</p>

<div class="callout">
<b>Analogi buku kas kelas:</b> Bayangkan satu ketua kelas memegang buku catatan utang-piutang semua siswa. Semua percaya ketua kelas mencatat jujur. Bank itu ibarat "ketua kelas" untuk uang kita.
</div>

<div class="callout warn">
<b>Tapi bagaimana kalau...</b> si pencatat curang, membekukan uangmu, atau bukunya hilang? Kita <b>terpaksa memercayai satu pihak</b>. Pertanyaan inilah yang melahirkan blockchain: <i>"Bisakah kita mencatat kepemilikan tanpa harus memercayai satu pihak saja?"</i>
</div>

<div class="callout">
<b>Masih ragu crypto itu sungguhan atau tipu-tipu?</b> Wajar. Ada modul khusus untukmu: <a href="#/lesson/bc-skep-1">Crypto untuk yang Ragu</a> — berisi kritik yang memang benar, mitos yang salah sasaran, dan cara menilai sendiri.
</div>
`,
          keyPoints: [
            "Uang berharga karena kesepakatan & kepercayaan bersama, bukan nilai kertasnya.",
            "Transfer uang = bank mengubah angka di catatannya; kita percaya bank mencatat jujur.",
            "Kelemahan: kita terpaksa memercayai satu pihak (bank) yang bisa curang/gagal.",
            "Blockchain lahir dari pertanyaan: bisakah mencatat kepemilikan tanpa memercayai satu pihak saja?",
          ],
          quiz: [
            {
              q: "Kenapa selembar uang kertas bisa berharga?",
              options: [
                "Karena semua orang sepakat mempercayainya sebagai alat tukar",
                "Karena nilainya dijamin cadangan emas milik negara penerbitnya",
                "Karena bahan kertas dan tintanya memang mahal untuk diproduksi",
                "Karena jumlahnya dibatasi dan tak bisa dicetak lagi oleh siapa pun",
              ],
              answer: 0,
              explain: "Nilai uang berasal dari kesepakatan & kepercayaan bersama.",
            },
            {
              q: "Saat transfer bank, apa yang sebenarnya terjadi?",
              options: [
                "Bank hanya mengubah angka saldo di catatannya, tak ada uang berpindah",
                "Uang fisik dipindahkan dari brankas bank pengirim ke bank penerima",
                "Uang diubah jadi sinyal digital lalu dikirim lewat jaringan telekomunikasi",
                "Bank sentral mencetak uang baru senilai jumlah yang sedang ditransfer",
              ],
              answer: 0,
              explain: "Bank hanya memperbarui catatan saldo; tak ada uang fisik berpindah.",
            },
          ],
        },
        {
          id: "bc-nol-2",
          title: "Masalah 'Salinan Digital' (Double-Spending)",
          duration: "8 menit",
          content: `
<p>Uang digital punya satu masalah besar yang tidak dimiliki uang tunai. Memahaminya adalah kunci mengerti kenapa blockchain jenius.</p>

<div data-diagram="pipeline" data-stages="Berkas digital::mudah disalin|Salin dalam 1 detik::salinan identik|Kirim ke dua orang::keduanya merasa punya|Uang jadi tak berarti::bisa dibuat tanpa batas" data-caption="Kenapa uang digital tanpa catatan bersama pasti gagal"></div>


<h3>File digital mudah disalin</h3>
<p>Foto, lagu, dokumen — semua file digital bisa di-<b>copy-paste</b> tanpa batas, dan salinannya identik. Nah, kalau "uang digital" cuma sebuah file... apa yang mencegahmu <b>menyalinnya</b> dan membelanjakannya berkali-kali?</p>

<div class="callout warn">
<b>Inilah "double-spending":</b> membelanjakan "uang digital" yang sama lebih dari sekali dengan cara menyalinnya. Kalau ini mungkin, uang digital jadi tak berharga (semua orang bisa mencetak sendiri).
</div>

<h3>Solusi lama: satu pencatat pusat</h3>
<p>Selama ini masalah ini dicegah oleh <b>bank/pihak pusat</b> yang menyimpan satu catatan resmi: "saldo Andi = Rp50.000". Kalau Andi membelanjakan Rp50.000, bank langsung menguranginya, jadi tak bisa dipakai dua kali.</p>

<div class="callout">
<b>Terobosan blockchain:</b> ia memecahkan double-spending <b>tanpa</b> pencatat pusat — dengan cara membuat <b>banyak komputer</b> memegang & menyepakati satu catatan bersama. Bagaimana caranya, kamu akan pelajari di modul berikutnya.
</div>

<div data-demo="double-spend"></div>
`,
          keyPoints: [
            "File digital mudah disalin identik — masalah bagi 'uang digital'.",
            "Double-spending = membelanjakan uang digital yang sama berkali-kali dengan menyalinnya.",
            "Solusi lama: satu pencatat pusat (bank) menjaga satu catatan resmi.",
            "Terobosan blockchain: mencegah double-spending tanpa pencatat pusat.",
          ],
          quiz: [
            {
              q: "Apa itu masalah 'double-spending'?",
              options: [
                "Membelanjakan satu unit uang digital lebih dari sekali karena berkasnya bisa disalin",
                "Mengirimkan uang kepada dua penerima berbeda di dalam satu transaksi yang sama",
                "Tertagih dua kali untuk satu pembelian karena sistem mencatat transaksinya berulang",
                "Menyalin aplikasi dompet ke HP lain sehingga saldo di dalamnya ikut tergandakan",
              ],
              answer: 0,
              explain: "Karena file mudah disalin, uang digital bisa dibelanjakan berulang tanpa pencegah.",
            },
            {
              q: "Apa yang membuat blockchain istimewa dalam soal ini?",
              options: [
                "Semua peserta memegang catatan yang sama, sehingga percobaan kedua langsung tertolak",
                "Setiap transaksi diperiksa oleh satu lembaga pusat yang dipercaya semua orang",
                "Berkas uang digitalnya dibuat khusus agar secara teknis tidak mungkin disalin",
                "Setiap koin diberi nomor seri yang dicek bank sebelum transaksinya disetujui",
              ],
              answer: 0,
              explain: "Blockchain menyelesaikan double-spending lewat catatan bersama banyak komputer, tanpa pusat.",
            },
          ],
        },
        {
          id: "bc-nol-3",
          title: "Jaringan & Desentralisasi",
          duration: "7 menit",
          content: `
<p>Satu kata muncul terus di dunia blockchain: <b>desentralisasi</b>. Mari pahami dengan sangat sederhana.</p>

<div data-diagram="vs" data-left="TERPUSAT::Satu pihak pegang data::Satu titik gagal" data-right="TERDESENTRALISASI::Banyak salinan setara::Sulit dicurangi" data-caption="Terpusat vs terdesentralisasi"></div>


<h3>Terpusat vs Tersebar</h3>
<table class="tbl">
  <tr><th>Terpusat (Centralized)</th><th>Tersebar (Terdesentralisasi)</th></tr>
  <tr><td>Satu pihak memegang kendali & data</td><td>Banyak pihak setara memegang salinan</td></tr>
  <tr><td>Contoh: bank, server satu perusahaan</td><td>Contoh: blockchain</td></tr>
  <tr><td>Cepat & sederhana, tapi jadi <b>satu titik gagal</b></td><td>Lebih tahan banting & sulit dicurangi</td></tr>
</table>

<div class="callout">
<b>Analogi:</b> kalau catatan utang kelas cuma dipegang <b>satu</b> orang, hilangnya buku itu = kacau, dan ia bisa curang. Kalau <b>setiap</b> siswa punya salinan identik, mengubah satu salinan langsung ketahuan karena beda dari yang lain. Itulah kekuatan desentralisasi.
</div>

<h3>Apa itu jaringan?</h3>
<p><b>Jaringan</b> = banyak komputer yang saling terhubung & berbagi informasi. Blockchain adalah jaringan komputer (disebut <b>node</b>) yang semuanya menyimpan catatan yang sama.</p>
`,
          keyPoints: [
            "Terpusat = satu pihak memegang kendali (bank); satu titik gagal.",
            "Terdesentralisasi = banyak pihak setara memegang salinan (blockchain); lebih tahan & sulit dicurangi.",
            "Jaringan = banyak komputer (node) yang terhubung & berbagi data.",
            "Blockchain = jaringan node yang semuanya menyimpan catatan yang sama.",
          ],
          quiz: [
            {
              q: "Apa keunggulan sistem terdesentralisasi?",
              options: [
                "Catatannya dipegang banyak pihak, jadi tak ada satu titik yang bisa dimatikan atau dicurangi",
                "Keputusan diambil lebih cepat karena tak perlu menunggu persetujuan banyak pihak",
                "Biaya menjalankannya selalu lebih murah dibanding sistem yang terpusat",
                "Seluruh datanya otomatis terenkripsi sehingga tidak bisa dibaca siapa pun",
              ],
              answer: 0,
              explain: "Salinan tersebar membuatnya tahan banting & perubahan mudah ketahuan.",
            },
            {
              q: "Apa itu 'node' dalam blockchain?",
              options: [
                "Komputer di jaringan yang menyimpan salinan catatan dan ikut memverifikasinya",
                "Satuan terkecil dari sebuah koin, seperti sen pada mata uang biasa",
                "Blok berisi kumpulan transaksi yang sedang menunggu untuk ditambang",
                "Alamat dompet yang dipakai pengguna untuk menerima dan mengirim dana",
              ],
              answer: 0,
              explain: "Node adalah komputer peserta jaringan yang memegang catatan blockchain.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 2: DASAR-DASAR BLOCKCHAIN & BITCOIN ---------------- */
    {
      id: "bc-pemula",
      level: "Pemula",
      title: "Dasar-Dasar Blockchain & Bitcoin",
      summary: "Apa itu blockchain, lahirnya Bitcoin, wallet & kunci, bagaimana transaksi diproses, dan kamus istilah dengan bahasa sehari-hari.",
      lessons: [
        {
          id: "bc-p-1",
          title: "Apa itu Blockchain?",
          duration: "9 menit",
          content: `
<p><b>Blockchain</b> adalah buku besar digital (catatan transaksi) yang:</p>

<div data-diagram="pipeline" data-stages="Transaksi::dikumpulkan dulu|Blok::dibungkus jadi satu|Hash::disegel dengan sidik jari|Dirantai::menunjuk ke blok sebelumnya" data-caption="Kenapa disebut blockchain: blok-blok yang saling mengunci"></div>

<ul>
  <li><b>Tersebar</b> — salinannya dimiliki banyak komputer di seluruh dunia, bukan satu server.</li>
  <li><b>Tak bisa diubah</b> — sekali dicatat, sangat sulit dipalsukan.</li>
  <li><b>Transparan</b> — siapa pun bisa memverifikasi.</li>
</ul>

<div class="callout">
<b>Analogi buku kas bersama:</b> Bayangkan satu kelas punya buku catatan utang-piutang. Alih-alih satu ketua kelas memegang buku (bisa curang), <b>setiap</b> siswa punya salinan identik. Kalau ada yang mengubah bukunya, salinannya beda dari yang lain dan langsung ketahuan. Itulah inti blockchain.
</div>

<h3>Kenapa namanya "blockchain"?</h3>
<p>Transaksi dikelompokkan dalam <b>blok</b>. Tiap blok baru disambung ke blok sebelumnya membentuk <b>rantai</b> (chain) — secara berurutan dan saling mengunci.</p>

<h3>Apa yang "mengunci" rantai? Hash</h3>
<p>Tiap blok punya <b>hash</b> — semacam sidik jari digital unik dari isinya. Tiap blok juga menyimpan hash blok sebelumnya, sehingga semuanya saling terikat. Coba dulu cara kerja hash:</p>
<div data-demo="hash-demo"></div>
<p>Karena tiap blok terikat pada hash blok sebelumnya, mengubah satu blok akan merusak semua blok sesudahnya. Buktikan sendiri di demo berikut:</p>
<div data-demo="blockchain-builder"></div>

<h3>Mengapa penting?</h3>
<p>Blockchain memungkinkan orang yang tidak saling percaya bertransaksi dengan aman <b>tanpa perantara</b> (seperti bank). Kepercayaan digantikan oleh matematika & kode.</p>
`,
          keyPoints: [
            "Blockchain = buku besar digital yang tersebar, tak bisa diubah, dan transparan.",
            "Datanya disimpan dalam blok yang dirantai berurutan.",
            "Memungkinkan transaksi aman tanpa perantara/bank.",
          ],
          quiz: [
            {
              q: "Apa ciri utama blockchain?",
              options: [
                "Catatannya disalin ke banyak komputer dan sangat sulit diubah setelah tercatat",
                "Catatannya disimpan terenkripsi sehingga hanya pemiliknya yang bisa membaca",
                "Catatannya disimpan di server khusus yang dijaga oleh lembaga terpercaya",
                "Catatannya bisa dihapus kapan saja oleh pemilik akun yang bersangkutan",
              ],
              answer: 0,
              explain:
                "Desentralisasi + sifat tak-bisa-diubah adalah inti blockchain.",
            },
            {
              q: "Mengapa data sulit dipalsukan di blockchain?",
              options: [
                "Ribuan salinan identik saling dibandingkan, sehingga satu salinan palsu tertolak",
                "Setiap data dikunci memakai kata sandi yang sangat panjang dan rumit",
                "Hanya pengguna yang sudah terverifikasi yang diizinkan menulis catatan",
                "Data lama otomatis dihapus sehingga tidak ada lagi yang bisa diubah",
              ],
              answer: 0,
              explain:
                "Perubahan di satu salinan langsung berbeda dari mayoritas salinan lain.",
            },
          ],
        },
        {
          id: "bc-p-2",
          title: "Bitcoin & Lahirnya Cryptocurrency",
          duration: "9 menit",
          content: `
<p><b>Bitcoin</b> (2009) adalah aplikasi pertama blockchain dan cryptocurrency pertama. Diciptakan oleh sosok anonim bernama <b>Satoshi Nakamoto</b> setelah krisis keuangan 2008.</p>

<div data-diagram="timeline" data-events="2008::Whitepaper Satoshi terbit|2009::Blok pertama ditambang|2010::10.000 BTC untuk 2 pizza|2017::Dikenal luas dunia|2024::Masuk portofolio institusi" data-caption="Perjalanan Bitcoin dari makalah 9 halaman jadi aset global"></div>


<h3>Apa masalah yang dipecahkan?</h3>
<p>Uang digital sebelumnya punya masalah <b>"double spending"</b> — file digital mudah disalin, jadi apa yang mencegah orang membelanjakan koin yang sama dua kali? Bitcoin memecahkannya lewat blockchain: setiap transaksi dicatat publik & diverifikasi jaringan.</p>

<div class="callout">
<b>Cryptocurrency</b> = mata uang digital yang diamankan dengan kriptografi dan berjalan di atas blockchain, tanpa bank sentral.
</div>

<h3>Sifat khas Bitcoin</h3>
<ul>
  <li><b>Terbatas</b> — hanya akan ada 21 juta BTC selamanya (anti-inflasi).</li>
  <li><b>Terdesentralisasi</b> — tidak ada yang mengontrol sendirian.</li>
  <li><b>Lintas negara</b> — bisa dikirim ke mana saja, kapan saja.</li>
</ul>

<div class="callout warn">
<b>Catatan:</b> Materi ini untuk edukasi, bukan saran investasi. Harga crypto sangat fluktuatif dan berisiko tinggi.
</div>
`,
          keyPoints: [
            "Bitcoin (2009) = cryptocurrency & aplikasi blockchain pertama.",
            "Memecahkan masalah 'double spending' lewat catatan publik terverifikasi.",
            "Bitcoin terbatas 21 juta koin dan terdesentralisasi.",
          ],
          quiz: [
            {
              q: "Masalah utama apa yang dipecahkan Bitcoin?",
              options: [
                "Cara mencegah satu koin digital dibelanjakan dua kali tanpa perlu perantara",
                "Cara mengirim uang ke luar negeri dengan biaya yang jauh lebih murah",
                "Cara menyembunyikan identitas pengirim dan penerima secara sepenuhnya",
                "Cara menyimpan uang agar nilainya tidak tergerus oleh inflasi",
              ],
              answer: 0,
              explain:
                "Blockchain Bitcoin mencegah koin yang sama dipakai dua kali.",
            },
            {
              q: "Berapa batas maksimal jumlah Bitcoin?",
              options: ["Tak terbatas", "1 miliar", "21 juta", "100 juta"],
              answer: 2,
              explain: "Pasokan Bitcoin dibatasi 21 juta koin selamanya.",
            },
          ],
        },
        {
          id: "bc-p-3",
          title: "Wallet, Kunci, & Alamat",
          duration: "10 menit",
          content: `
<p>Untuk menyimpan & mengirim crypto kamu butuh <b>wallet</b> (dompet digital). Tapi wallet tidak benar-benar "menyimpan koin" — koin ada di blockchain. Wallet menyimpan <b>kunci</b> yang membuktikan kepemilikanmu.</p>

<div class="callout">
<b>Analogi kotak surat.</b> Alamat dompetmu seperti <b>alamat kotak surat</b> di depan rumah: semua orang boleh tahu, dan siapa pun boleh memasukkan kiriman ke dalamnya. Kunci privat adalah <b>anak kunci gembok</b> kotak itu: hanya pemegangnya yang bisa membuka dan mengambil isinya. Kalau orang lain memegang anak kuncinya, isinya menjadi milik mereka — tidak peduli nama siapa yang tertulis di kotak.
</div>

<h3>Dua kunci penting</h3>
<table class="tbl">
  <tr><th>Kunci</th><th>Fungsi</th><th>Analogi</th></tr>
  <tr><td><b>Public key / alamat</b></td><td>Untuk menerima dana; boleh dibagikan</td><td>Nomor rekening</td></tr>
  <tr><td><b>Private key</b></td><td>Untuk menandatangani/mengirim; WAJIB rahasia</td><td>PIN + tanda tangan</td></tr>
</table>

<div data-diagram="keys"></div>

<div class="callout warn">
<b>Aturan emas:</b> "Not your keys, not your coins." Siapa pun yang memegang private key, dialah pemilik dana. Jangan pernah bagikan private key atau <b>seed phrase</b> (12-24 kata pemulihan) kepada siapa pun. Tidak ada "lupa password" di crypto.
</div>

<h3>Seed phrase — cadangan kunci dalam bentuk kata</h3>
<p>Kunci privat adalah angka yang sangat panjang dan mudah salah ditulis. Karena itu dompet menampilkannya dalam bentuk <b>12–24 kata</b> bahasa Inggris, misalnya <i>"apple river ..."</i>. Daftar kata inilah <b>seed phrase</b>: siapa pun yang memegangnya bisa membuat ulang dompetmu, lengkap dengan semua kuncinya, di HP mana pun.</p>
<table class="tbl">
  <tr><th>Kejadian</th><th>Akibatnya</th></tr>
  <tr><td>HP hilang, seed phrase tersimpan aman di kertas</td><td class="ok-cell">Aman — pasang aplikasi dompet di HP baru, masukkan seed phrase, dana kembali</td></tr>
  <tr><td>Seed phrase difoto lalu dicuri orang</td><td class="bad-cell">Pencuri bisa menguras dana dari mana saja, kapan saja</td></tr>
  <tr><td>HP rusak <b>dan</b> seed phrase tidak pernah dicatat</td><td class="bad-cell">Dana hilang selamanya — tidak ada bank atau layanan pelanggan yang bisa memulihkannya</td></tr>
</table>
<p>Bagaimana kunci privat bisa menghasilkan alamat, dan kenapa alamat tidak bisa dibalik menjadi kunci privat, dibongkar pelan-pelan di modul Fondasi Kriptografi.</p>

<h3>Jenis wallet</h3>
<ul>
  <li><b>Hot wallet</b> — terhubung internet (aplikasi/HP), praktis tapi lebih rentan.</li>
  <li><b>Cold wallet</b> — offline (perangkat keras khusus), lebih aman untuk jumlah besar.</li>
</ul>
`,
          keyPoints: [
            "Wallet menyimpan kunci, bukan koin (koin ada di blockchain).",
            "Public key/alamat = untuk menerima; private key = rahasia, untuk mengirim.",
            "Seed phrase & private key tidak boleh dibagikan ke siapa pun.",
          ],
          quiz: [
            {
              q: "Kunci mana yang boleh dibagikan untuk menerima dana?",
              options: [
                "Alamat dompet (public key)",
                "Kunci privat (private key)",
                "Frasa pemulihan (seed phrase)",
                "Kata sandi aplikasi dompet",
              ],
              answer: 0,
              explain:
                "Public key/alamat seperti nomor rekening — aman dibagikan.",
            },
            {
              q: "Apa arti 'Not your keys, not your coins'?",
              options: [
                "Yang memegang kunci privat adalah pemilik dana yang sesungguhnya",
                "Koin tanpa kunci privat tidak bisa diperjualbelikan di bursa mana pun",
                "Setiap koin sebaiknya disimpan di dompet berbeda agar tetap aman",
                "Kunci privat perlu diganti berkala supaya koinmu tetap jadi milikmu",
              ],
              answer: 0,
              explain:
                "Kontrol private key = kontrol dana. Jaga kerahasiaannya.",
            },
          ],
        },
        {
          id: "bc-p-4",
          title: "Bagaimana Transaksi Diproses",
          duration: "9 menit",
          content: `
<p>Apa yang terjadi saat kamu mengirim crypto? Berikut alurnya:</p>

<div data-diagram="flow" data-steps="Buat Transaksi|Tanda Tangan|Disebar ke Node|Diverifikasi|Masuk Blok" data-caption="Perjalanan sebuah transaksi"></div>


<ol>
  <li><b>Buat transaksi</b> — kamu tentukan tujuan & jumlah.</li>
  <li><b>Tanda tangan digital</b> — wallet menandatangani dengan private key-mu (membuktikan kamu pemiliknya tanpa membocorkan kunci).</li>
  <li><b>Disebar</b> — transaksi dikirim ke jaringan komputer (node).</li>
  <li><b>Diverifikasi</b> — node mengecek: saldo cukup? tanda tangan sah?</li>
  <li><b>Masuk blok</b> — transaksi sah dikumpulkan jadi blok baru.</li>
  <li><b>Dikonfirmasi</b> — blok ditambahkan ke rantai; transaksi permanen.</li>
</ol>

<div data-demo="tx-flow"></div>

<div class="callout">
<b>Biaya transaksi (gas/fee):</b> Kamu membayar sedikit biaya ke jaringan untuk memproses transaksimu. Saat jaringan ramai, biaya naik (seperti tarif ojek saat jam sibuk).
</div>

<h3>Konfirmasi</h3>
<p>Makin banyak blok ditambahkan <i>setelah</i> blok transaksimu, makin "dalam" dan aman transaksi itu. Itulah kenapa transaksi besar sering menunggu beberapa konfirmasi.</p>
`,
          keyPoints: [
            "Transaksi ditandatangani private key, lalu disebar & diverifikasi node.",
            "Transaksi sah dikumpulkan dalam blok dan ditambahkan ke rantai.",
            "Ada biaya (gas/fee); makin banyak konfirmasi makin aman.",
          ],
          quiz: [
            {
              q: "Untuk apa tanda tangan digital pada transaksi?",
              options: [
                "Membuktikan pemilik dana menyetujuinya, tanpa membocorkan kunci privat",
                "Mengenkripsi isi transaksi agar tidak bisa dibaca oleh pengguna lain",
                "Mempercepat transaksi karena tak perlu diverifikasi oleh banyak node",
                "Menyimpan identitas asli pengirim di dalam catatan blockchain",
              ],
              answer: 0,
              explain:
                "Tanda tangan membuktikan kamu pemilik sah tanpa mengungkap kuncinya.",
            },
            {
              q: "Mengapa biaya transaksi (gas) bisa naik?",
              options: [
                "Karena ruang blok terbatas dan banyak transaksi bersaing masuk",
                "Karena nilai tukar koin terhadap rupiah sedang naik cukup tajam",
                "Karena jumlah penambang di jaringan sedang berkurang drastis",
                "Karena bursa menaikkan biaya layanannya secara berkala",
              ],
              answer: 0,
              explain:
                "Saat banyak yang bertransaksi, biaya naik karena perebutan ruang blok.",
            },
          ],
        },
        {
          id: "bc-p-5",
          title: "Kamus Istilah Crypto — dengan Bahasa Sehari-hari",
          duration: "12 menit",
          content: `
<p>Belajar crypto sering terasa berat bukan karena konsepnya sulit, tapi karena <b>puluhan istilah datang sekaligus</b>: hash, nonce, seed phrase, node, kunci publik… Pelajaran ini adalah peta. Kamu tidak perlu menghafalnya sekarang — cukup tahu setiap istilah itu <b>bagian dari mana</b>.</p>

<div data-diagram="layers" data-items="Kamu &amp; dompetmu|Transaksi &amp; tanda tangan|Blok, hash &amp; rantai|Jaringan node &amp; konsensus" data-caption="Empat lapisan: dari yang kamu pegang sendiri sampai jaringan global"></div>

<h3>1. Kamu &amp; dompetmu</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Analogi</th></tr>
  <tr><td><b>Wallet (dompet)</b></td><td>Aplikasi atau alat yang menyimpan <b>kunci</b>, bukan koin</td><td>Gantungan kunci, bukan brankas</td></tr>
  <tr><td><b>Kunci privat</b></td><td>Angka rahasia raksasa yang membuktikan kamu pemilik dana</td><td>PIN dan tanda tangan basah sekaligus</td></tr>
  <tr><td><b>Kunci publik</b></td><td>Dihitung dari kunci privat, boleh dilihat orang, dipakai memeriksa tanda tangan</td><td>Contoh cap resmi yang bisa dicocokkan siapa pun</td></tr>
  <tr><td><b>Alamat</b></td><td>Versi pendek kunci publik untuk <b>menerima</b> dana</td><td>Nomor rekening</td></tr>
  <tr><td><b>Seed phrase</b></td><td>12 atau 24 kata yang mewakili semua kunci privatmu</td><td>Kunci induk seluruh brankas</td></tr>
</table>

<h3>2. Transaksi &amp; tanda tangan</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Analogi</th></tr>
  <tr><td><b>Transaksi</b></td><td>Pesan "pindahkan sekian dari alamat A ke alamat B"</td><td>Slip transfer</td></tr>
  <tr><td><b>Tanda tangan digital</b></td><td>Bukti matematis bahwa pesan dibuat pemegang kunci privat dan tidak diubah</td><td>Stempel yang bentuknya mengikuti isi surat</td></tr>
  <tr><td><b>ID transaksi (txid)</b></td><td>Hash dari isi transaksi</td><td>Nomor resi pengiriman</td></tr>
  <tr><td><b>Fee / gas</b></td><td>Biaya agar transaksimu diproses</td><td>Ongkos kirim</td></tr>
  <tr><td><b>Konfirmasi</b></td><td>Jumlah blok yang sudah ditumpuk setelah blok berisi transaksimu</td><td>Cap "lunas" yang makin tebal</td></tr>
</table>

<h3>3. Blok, hash &amp; rantai</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Analogi</th></tr>
  <tr><td><b>Hash</b></td><td>Sidik jari data: ukurannya tetap, berubah total bila datanya berubah</td><td>Sidik jari manusia</td></tr>
  <tr><td><b>Blok</b></td><td>Sekumpulan transaksi yang dicatat bersama</td><td>Satu halaman buku kas</td></tr>
  <tr><td><b>Hash blok sebelumnya</b></td><td>Sidik jari halaman lama yang ditulis di halaman baru</td><td>Segel yang menyambung antar-halaman</td></tr>
  <tr><td><b>Merkle root</b></td><td>Satu hash yang mewakili semua transaksi dalam blok</td><td>Daftar isi yang disegel</td></tr>
  <tr><td><b>Nonce</b></td><td>Angka yang diutak-atik penambang; di Ethereum juga nomor urut transaksi akun</td><td>Kombinasi gembok yang dicoba satu per satu</td></tr>
</table>

<h3>4. Jaringan</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Analogi</th></tr>
  <tr><td><b>Node</b></td><td>Komputer yang menyimpan salinan blockchain dan memeriksa aturan</td><td>Siswa yang memegang salinan buku kas kelas</td></tr>
  <tr><td><b>Penambang / validator</b></td><td>Pihak yang menyusun blok baru (lewat PoW atau PoS)</td><td>Juru tulis yang bergiliran</td></tr>
  <tr><td><b>Konsensus</b></td><td>Cara jaringan sepakat blok mana yang sah</td><td>Aturan musyawarah</td></tr>
  <tr><td><b>Smart contract</b></td><td>Program yang berjalan di blockchain</td><td>Mesin penjual otomatis</td></tr>
  <tr><td><b>Token</b></td><td>Aset yang dibuat di atas sebuah blockchain</td><td>Koin permainan di arena</td></tr>
</table>

<h3>Tiga salah paham yang paling sering</h3>
<table class="tbl">
  <tr><th>Salah paham</th><th>Yang benar</th></tr>
  <tr><td class="bad-cell">"Koinku tersimpan di dompet HP"</td><td class="ok-cell">Koin tercatat di blockchain. Dompet hanya menyimpan kunci untuk memindahkannya — HP hilang, dana aman selama seed phrase aman</td></tr>
  <tr><td class="bad-cell">"Data blockchain dienkripsi"</td><td class="ok-cell">Sebagian besar datanya justru terbuka untuk semua orang. Yang dipakai adalah hash dan tanda tangan</td></tr>
  <tr><td class="bad-cell">"Alamat, kunci publik, dan kunci privat itu sama"</td><td class="ok-cell">Tiga hal berbeda yang dihitung satu arah: privat → publik → alamat. Hanya kunci privat yang wajib rahasia</td></tr>
</table>

<div class="callout">
<b>Tidak perlu hafal.</b> Modul berikutnya membongkar lapisan pertama sampai ketiga satu per satu — hash, kunci, tanda tangan, dan Merkle tree — lengkap dengan demo yang menghitung semuanya secara sungguhan di browsermu. Kembalilah ke halaman ini kapan pun kamu lupa sebuah istilah.
</div>
`,
          keyPoints: [
            "Istilah crypto bisa dikelompokkan jadi empat lapisan: dompet, transaksi, blok & hash, dan jaringan.",
            "Dompet menyimpan kunci, bukan koin; koin tercatat di blockchain.",
            "Kunci privat rahasia mutlak; kunci publik dan alamat dihitung darinya secara satu arah dan boleh dibagikan.",
            "Hash adalah sidik jari data; ID transaksi dan penghubung antar-blok sama-sama memakai hash.",
            "Blockchain umumnya tidak dienkripsi — isinya terbuka, keamanannya datang dari hash dan tanda tangan.",
          ],
          quiz: [
            {
              q: "HP berisi aplikasi dompet crypto-mu hilang. Apa yang terjadi pada koinmu?",
              options: [
                "Koin tetap tercatat di blockchain dan bisa dipulihkan selama seed phrase aman",
                "Koin ikut hilang karena tersimpan di dalam memori aplikasi dompet tersebut",
                "Koin otomatis dikembalikan ke bursa tempat kamu pertama kali membelinya",
                "Koin terkunci permanen sampai HP yang sama ditemukan dan dinyalakan kembali",
              ],
              answer: 0,
              explain: "Dompet hanya menyimpan kunci. Seed phrase bisa memulihkan kunci itu di perangkat lain.",
            },
            {
              q: "Mana yang boleh kamu bagikan kepada orang yang ingin mengirimimu dana?",
              options: [
                "Alamat dompet",
                "Kunci privat",
                "Seed phrase",
                "Kode tanda tangan",
              ],
              answer: 0,
              explain: "Alamat dipakai untuk menerima. Kunci privat dan seed phrase memberi kendali penuh atas dana.",
            },
            {
              q: "Apa itu ID transaksi (txid)?",
              options: [
                "Hash dari isi transaksi yang dipakai sebagai nomor resi",
                "Nomor urut yang diberikan bursa kepada setiap pelanggannya",
                "Kunci publik pengirim yang ditulis ulang dalam bentuk pendek",
                "Kode rahasia yang dikirim penerima untuk menyetujui transaksi",
              ],
              answer: 0,
              explain: "Karena memakai hash, mengubah satu karakter isi transaksi akan mengubah ID-nya.",
            },
            {
              q: "Pernyataan \"data blockchain dienkripsi\" — bagaimana yang tepat?",
              options: [
                "Keliru: isinya umumnya terbuka, keamanannya dari hash dan tanda tangan",
                "Benar: semua transaksi dikunci agar hanya pengirim yang bisa membacanya",
                "Benar: setiap blok dienkripsi ulang oleh penambang sebelum disimpan",
                "Keliru: blockchain tidak memakai matematika kriptografi sama sekali",
              ],
              answer: 0,
              explain: "Siapa pun bisa membaca transaksi di block explorer — itulah yang membuatnya bisa diperiksa semua orang.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 3: CRYPTO UNTUK YANG RAGU — KRITIK, MITOS & CARA MENILAI ---------------- */
    {
      id: "bc-skeptis",
      level: "Untuk yang Ragu",
      title: "Crypto untuk yang Ragu — Kritik, Mitos & Cara Menilai",
      summary: "Untuk yang tidak percaya pada crypto: kritik yang terbukti benar, mitos yang salah sasaran, dan alat berpikir untuk menilai sendiri tanpa ikut-ikutan.",
      lessons: [
        {
          id: "bc-skep-1",
          title: "Ragu Itu Sehat — Kritik terhadap Crypto yang Memang Benar",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Bitcoin</b> adalah uang digital tanpa bank pusat: catatannya disimpan bersama oleh ribuan komputer (<a href="#/lesson/bc-p-1">Apa itu Blockchain?</a>). Setelah Bitcoin, lahir ribuan "koin" dan "token" lain — semuanya sering disebut <b>crypto</b> (<a href="#/lesson/bc-p-2">Bitcoin &amp; Lahirnya Cryptocurrency</a>).
</div>

<p>Kalau kamu tidak percaya pada crypto, modul ini untukmu. Tujuannya <b>bukan</b> membujukmu membeli apa pun. Tujuannya membuat keraguanmu berdiri di atas <b>fakta dan angka</b>, bukan kabar burung. Pelajaran ini dimulai dari kritik yang <b>memang terbukti benar</b>.</p>

<h3>1. Harganya bisa jatuh lebih dari separuh — berulang kali</h3>
<div data-diagram="bar" data-bars="2011:-93|2013–2015:-85|2017–2018:-84|2021–2022:-77|2025–2026:-50" data-unit="%" data-caption="Penurunan terdalam harga Bitcoin dari puncaknya, di setiap siklus"></div>
<p>Bitcoin adalah crypto yang paling mapan, dan harganya sudah <b>empat kali</b> jatuh lebih dari 75% dari puncaknya. Siklus terbaru: puncak sekitar <b>US$126 ribu</b> pada 6 Oktober 2025, lalu sekitar <b>US$65 ribu</b> pada Juli 2026 — turun hampir separuh. Koin-koin kecil biasanya jatuh jauh lebih dalam lagi.</p>
<div class="callout warn">
<b>Lebih berbahaya lagi kalau memakai utang.</b> Pada <b>10 Oktober 2025</b>, posisi yang dibeli dengan uang pinjaman (<i>leverage</i>) senilai sekitar <b>US$19 miliar</b> dilikuidasi — ditutup paksa — dalam 24 jam. Itu kejadian terbesar dalam sejarah crypto. Orang yang meminjam bisa kehilangan seluruh modalnya walau harga hanya turun sebentar.
</div>
<div class="callout">
<b>Matematika yang sering dilupakan:</b> kalau harga turun <b>80%</b>, uang Rp1 juta tinggal Rp200 ribu. Untuk kembali ke Rp1 juta, harganya harus naik <b>5 kali lipat</b>, yaitu naik <b>400%</b> — bukan 80%.
</div>

<h3>2. Penipuan berbalut crypto sangat banyak</h3>
<p>Menurut perusahaan analisis blockchain <b>Chainalysis</b>, kerugian akibat penipuan crypto tahun 2025 setidaknya <b>US$14 miliar</b> yang sudah terlacak, dan diperkirakan melewati <b>US$17 miliar</b>. Penipuan yang meniru orang atau lembaga terpercaya naik lebih dari <b>1.400%</b> dibanding tahun sebelumnya, banyak dibantu AI (suara, wajah, dan pesan palsu).</p>
<p>Modus yang paling merugikan disebut <b>pig butchering</b> ("menggemukkan babi sebelum disembelih"):</p>
<div data-diagram="flow" data-steps="Kenalan online|Bangun kepercayaan|Ajak investasi|Untung palsu di layar|Dana tidak bisa ditarik" data-caption="Pola pig butchering: angka untung di layar hanyalah tampilan buatan penipu"></div>
<p>Kenapa penipu suka memakai crypto? Transfernya <b>tidak bisa dibatalkan</b>, bisa lintas negara dalam hitungan menit, dan banyak korbannya belum paham cara kerjanya.</p>
<div class="callout">
<b>Kalau sudah terlanjur:</b> berhenti transfer, segera hubungi bank, lalu lapor ke <b>IASC OJK</b> (iasc.ojk.go.id atau Kontak OJK 157). Langkah lengkapnya ada di <a href="#/lesson/bc-a-4">Keamanan &amp; Penipuan yang Sering Terjadi</a>.
</div>

<h3>3. Bursa dan perantara bisa runtuh atau dibobol</h3>
<table class="tbl">
  <tr><th>Kejadian</th><th>Apa yang terjadi</th></tr>
  <tr><td><b>Terra-LUNA</b><br>Mei 2022</td><td>Stablecoin algoritmik UST lepas dari patokan US$1. Nilai puluhan miliar dolar lenyap dalam beberapa hari.</td></tr>
  <tr><td><b>FTX</b><br>November 2022</td><td>Salah satu bursa terbesar dunia ternyata memakai dana nasabah diam-diam. Bursa bangkrut; pendirinya dihukum 25 tahun penjara (2024).</td></tr>
  <tr><td><b>Bybit</b><br>Februari 2025</td><td>Sekitar <b>US$1,5 miliar</b> dicuri — pencurian crypto terbesar sepanjang sejarah. Menurut FBI pelakunya kelompok peretas Korea Utara, yang masuk lewat komputer pengembang layanan dompet yang dipakai bursa itu.</td></tr>
</table>
<div class="callout warn">
<b>Ironinya:</b> crypto lahir supaya orang tidak perlu bergantung pada perantara. Kenyataannya, kebanyakan orang tetap menitipkan asetnya di bursa — dan di Indonesia, aset crypto di bursa <b>tidak dijamin LPS</b> seperti tabungan bank.
</div>

<h3>4. Sebagian besar koin akhirnya mati</h3>
<div data-diagram="kotak100" data-isi="53" data-label="Dari setiap 100 token yang pernah tercatat, sekitar 53 sudah mati" data-caption="CoinGecko: 53,2% token yang tercatat di GeckoTerminal sudah mati per akhir 2025"></div>
<p>Dari sekitar <b>20,2 juta</b> token yang pernah tercatat sampai akhir 2025, sekitar <b>11,6 juta</b> sudah mati: tidak diperdagangkan lagi, ditinggalkan pembuatnya, atau nilainya habis. Sekitar <b>86%</b> kematian itu terjadi di tahun 2025 saja, karena sekarang siapa pun bisa membuat token dalam hitungan menit tanpa produk apa pun.</p>
<p>Jadi saat orang berkata "crypto", penting ditanya: <b>yang mana?</b> Bitcoin yang berjalan sejak 2009 sangat berbeda dengan koin yang lahir minggu lalu.</p>

<h3>5. Bitcoin memakan listrik yang besar</h3>
<p>Perkiraan Universitas Cambridge: penambangan Bitcoin memakai sekitar <b>140–190 TWh listrik per tahun</b> (rentangnya lebar karena sulit diukur) — setara konsumsi listrik satu negara berukuran menengah.</p>
<div data-diagram="stack" data-parts="Energi terbarukan:42.6|Nuklir:9.8|Gas, batu bara &amp; lainnya:47.6" data-caption="Sumber listrik penambangan Bitcoin menurut studi Cambridge (2025)"></div>
<p>Pendukung berpendapat penambang sering memakai listrik murah atau yang terbuang. Pengkritik menjawab: hampir separuhnya tetap dari bahan bakar fosil. Keduanya fakta. Satu hal yang sering terlewat: kritik energi ini terutama berlaku untuk jaringan <b>Proof of Work</b> seperti Bitcoin. Ethereum pindah ke <b>Proof of Stake</b> pada 2022 dan pemakaian listriknya turun lebih dari 99% (<a href="#/lesson/bc-a-1">Konsensus: PoW vs PoS</a>).</p>

<h3>6. Kebanyakan aktivitas masih spekulasi</h3>
<p>Sebagian besar transaksi crypto adalah <b>jual beli untuk mencari selisih harga</b>, bukan membayar barang atau jasa. Di Indonesia, OJK mencatat <b>22,93 juta akun</b> konsumen crypto per Juli 2026. Nilai transaksinya naik-turun mengikuti harga: Juli 2026 sebesar <b>Rp20,52 triliun</b>, turun 28% dari bulan sebelumnya. Aktivitas yang mengikuti harga, bukan kebutuhan, adalah ciri pasar yang didorong spekulasi.</p>

<h3>Ringkasan: kritik yang memang benar</h3>
<table class="tbl">
  <tr><th>Kritik</th><th>Buktinya</th></tr>
  <tr><td>Harga sangat liar</td><td>Bitcoin empat kali jatuh lebih dari 75%; koin kecil lebih parah</td></tr>
  <tr><td>Banyak penipuan</td><td>Lebih dari US$17 miliar (perkiraan 2025), dibantu AI</td></tr>
  <tr><td>Perantara bisa runtuh</td><td>Terra-LUNA, FTX, Bybit; tidak ada jaminan LPS</td></tr>
  <tr><td>Kebanyakan token mati</td><td>53,2% dari token yang pernah tercatat</td></tr>
  <tr><td>Boros energi (Bitcoin)</td><td>140–190 TWh per tahun, hampir separuhnya fosil</td></tr>
  <tr><td>Dominan spekulasi</td><td>Aktivitas naik-turun mengikuti harga</td></tr>
</table>
<div class="callout">
Kalau semua ini benar, kenapa masih ada orang yang serius membangun di bidang ini? Pelajaran berikutnya membahas <b>kritik yang sering salah sasaran</b> — supaya keraguanmu tepat sasaran dan tidak mudah dipatahkan.
</div>
`,
          keyPoints: [
            "Modul ini bukan ajakan membeli; tujuannya membuat keraguan berdiri di atas fakta.",
            "Harga Bitcoin empat kali jatuh lebih dari 75%; turun 80% butuh naik 400% untuk balik modal; utang (leverage) memperparah.",
            "Penipuan crypto 2025 diperkirakan lebih dari US$17 miliar; pola pig butchering memakai kepercayaan lalu untung palsu di layar.",
            "Perantara bisa runtuh atau dibobol (Terra-LUNA, FTX, Bybit US$1,5 miliar); aset di bursa tidak dijamin LPS.",
            "53,2% token yang pernah tercatat sudah mati; Bitcoin memakai 140–190 TWh per tahun; kebanyakan aktivitas masih spekulasi."
          ],
          practice: [
            { type: "number", q: "Harga sebuah koin turun 80% dari harga belimu. Berapa persen harga itu harus NAIK agar kamu kembali ke modal awal?", answer: 400, tol: 0.5, unit: "%", hint: "Modal Rp100 tinggal Rp20. Dari 20 ke 100 itu naik berapa persen?", solution: "Rp100 turun 80% menjadi Rp20. Dari Rp20 ke Rp100 naik Rp80, dan 80 ÷ 20 = 4 = 400%." },
            { type: "number", q: "Harga turun 50%. Berapa persen harus naik untuk balik modal?", answer: 100, tol: 0.5, unit: "%", hint: "Rp100 tinggal Rp50.", solution: "Dari Rp50 ke Rp100 naik Rp50; 50 ÷ 50 = 100%. Turun separuh butuh naik dua kali lipat." }
          ],
          quiz: [
            {
              q: "Harga turun 80%. Berapa kenaikan yang dibutuhkan untuk balik modal?",
              options: [
                "400%, karena harus naik lima kali lipat",
                "80%, sama dengan besar penurunannya",
                "160%, dua kali besar penurunannya",
                "20%, sisa harga yang belum turun"
              ],
              answer: 0,
              explain: "Rp100 tinggal Rp20; dari 20 ke 100 adalah lima kali lipat, yaitu naik 400%."
            },
            {
              q: "Dalam penipuan pig butchering, apa arti angka untung yang terus naik di aplikasi korban?",
              options: [
                "Hanya tampilan buatan penipu",
                "Keuntungan nyata yang tertahan pajak",
                "Bunga resmi dari bursa terdaftar",
                "Harga Bitcoin yang sedang naik"
              ],
              answer: 0,
              explain: "Aplikasinya palsu; angka di layar dibuat agar korban menyetor lebih banyak, dan dananya tidak bisa ditarik."
            },
            {
              q: "Apa pelajaran dari runtuhnya FTX dan dibobolnya Bybit?",
              options: [
                "Menitip aset di perantara punya risiko sendiri",
                "Bitcoin sebagai jaringan berhasil diretas",
                "Bursa besar selalu dijamin pemerintah",
                "Crypto tidak bisa dicuri sama sekali"
              ],
              answer: 0,
              explain: "Yang runtuh dan dibobol adalah perusahaan perantara, bukan aturan jaringannya; aset di bursa bergantung pada kejujuran dan keamanan bursa itu."
            },
            {
              q: "Kritik soal boros listrik paling tepat ditujukan kepada jaringan seperti apa?",
              options: [
                "Proof of Work seperti Bitcoin",
                "Semua blockchain tanpa kecuali",
                "Proof of Stake seperti Ethereum",
                "Stablecoin yang dipatok rupiah"
              ],
              answer: 0,
              explain: "Proof of Work memakai listrik untuk menambang; Ethereum pindah ke Proof of Stake pada 2022 dan pemakaian listriknya turun lebih dari 99%."
            }
          ]
        },
        {
          id: "bc-skep-2",
          title: "Mitos yang Salah Sasaran — Membedakan Kritik Tepat dari Kabar Burung",
          duration: "14 menit",
          content: `
<p>Kritik yang tepat membuatmu waspada. Mitos justru berbahaya dengan cara yang tidak terduga: kalau kamu menolak crypto dengan alasan yang <b>salah</b>, penjual yang pandai akan mudah mematahkan alasanmu — lalu kamu bisa berbalik percaya sepenuhnya. Lebih aman ragu dengan alasan yang <b>benar</b>.</p>

<div data-diagram="vs" data-left="Kritik yang tepat::Harga sangat liar::Banyak penipuan::Perantara bisa runtuh::Kebanyakan token mati" data-right="Sering salah sasaran::Cuma dipakai penjahat::Bitcoin bisa dipalsukan::Crypto ilegal di Indonesia::Blockchain sama dengan Bitcoin" data-caption="Pelajaran sebelumnya membahas kolom kiri; pelajaran ini membahas kolom kanan"></div>

<h3>Mitos 1: "Crypto cuma dipakai penjahat"</h3>
<p>Kejahatan memakai crypto itu nyata dan bertambah. Laporan Chainalysis 2026 mencatat alamat-alamat ilegal menerima setidaknya <b>US$154 miliar</b> sepanjang 2025 — rekor tertinggi, naik 162% dari tahun sebelumnya. Sekitar dua pertiganya terkait pihak yang terkena sanksi internasional, dan <b>84%</b> berupa stablecoin.</p>
<p>Tapi angka itu tetap <b>kurang dari 1%</b> dari seluruh volume transaksi yang bisa dilacak. Selain itu, transaksi blockchain tercatat permanen dan terbuka, sehingga banyak penjahat justru tertangkap karena jejaknya (<a href="#/lesson/bc-for-1">Mitos Anonimitas</a>).</p>
<div class="callout">
<b>Versi yang lebih tepat:</b> "Kejahatan memakai crypto bernilai sangat besar dan terus naik, walau porsinya kecil dari seluruh transaksi." Yang salah hanya kata <b>"cuma"</b>.
</div>

<h3>Mitos 2: "Bitcoin bisa diretas dan dipalsukan seperti uang palsu"</h3>
<p>Setiap komputer di jaringan Bitcoin memeriksa sendiri setiap transaksi. Koin yang tidak punya tanda tangan sah langsung ditolak, dan untuk menulis ulang riwayat, penyerang butuh lebih dari separuh daya komputasi seluruh dunia (<a href="#/lesson/bc-mat-2">Serangan 51%</a>).</p>
<p>Jujur saja, aturan Bitcoin pernah punya celah. Pada <b>Agustus 2010</b>, sebuah bug membuat satu transaksi menciptakan sekitar <b>184 miliar BTC</b>. Kesalahan itu ketahuan dan diperbaiki dalam hitungan jam, dan riwayatnya dikembalikan ke versi yang benar. Pada 2018 ditemukan celah serupa dan ditambal sebelum sempat dipakai.</p>
<div data-diagram="layers" data-items="Aturan jaringan — paling jarang jebol|Smart contract &amp; bridge|Bursa &amp; layanan penitipan|Pengguna: kata sandi, seed phrase, OTP — paling sering jebol" data-caption="Pencurian besar hampir selalu terjadi di lapisan bawah, bukan di aturan jaringannya"></div>
<div class="callout">
<b>Versi yang lebih tepat:</b> "Yang sering dibobol adalah pintu-pintunya — bursa, dompet, aplikasi, dan penggunanya — bukan buku besarnya." Pencurian Bybit US$1,5 miliar terjadi lewat komputer pengembang, bukan karena matematika Bitcoin atau Ethereum kalah.
</div>

<h3>Mitos 3: "Crypto ilegal di Indonesia"</h3>
<p>Di Indonesia, aset crypto <b>legal dimiliki dan diperdagangkan</b> sebagai <b>aset keuangan digital</b> yang diawasi <b>OJK</b> sejak Januari 2025, lewat platform yang terdaftar. Yang tidak boleh adalah memakainya sebagai <b>alat pembayaran</b>: transaksi pembayaran di Indonesia wajib memakai rupiah. OJK mencatat 22,93 juta akun konsumen crypto per Juli 2026 (<a href="#/lesson/bc-app-4">Regulasi &amp; Pajak Aset Kripto</a>).</p>
<div class="callout warn">
<b>Legal tidak sama dengan aman.</b> Banyak platform dan "investasi crypto" yang ilegal tetap beroperasi lewat media sosial. Selalu cek apakah platformnya terdaftar di OJK.
</div>

<h3>Mitos 4: "Bitcoin itu skema Ponzi"</h3>
<p><b>Skema Ponzi</b> punya ciri yang jelas: ada <b>pengelola</b> yang <b>menjanjikan untung tetap</b>, lalu membayar "untung" itu dari <b>setoran anggota baru</b>. Skema runtuh saat setoran baru berhenti.</p>
<div data-diagram="vs" data-left="Skema Ponzi::Ada pengelola pusat::Menjanjikan untung tetap::Dibayar dari setoran baru::Runtuh saat setoran berhenti" data-right="Bitcoin::Tidak ada pengelola pusat::Tidak menjanjikan apa pun::Tidak membayar imbal hasil::Harga dari pembeli &amp; penjual" data-caption="Bitcoin tidak memenuhi ciri Ponzi — tapi banyak produk berlabel crypto justru memenuhinya"></div>
<p>Kritik yang lebih tajam bentuknya lain: Bitcoin <b>tidak menghasilkan arus kas</b> seperti laba perusahaan atau uang sewa. Harganya sepenuhnya bergantung pada seberapa besar orang lain mau membelinya nanti. Itu membuatnya <b>aset spekulatif</b> — kritik yang sama sering ditujukan pada emas.</p>
<div class="callout warn">
<b>Yang memang Ponzi:</b> "robot trading" dengan untung pasti per hari, "staking" yang menjanjikan 1% per hari, arisan crypto berjenjang, dan skema "ajak teman dapat bonus". Ciri-cirinya persis seperti tabel kiri di atas.
</div>

<h3>Mitos 5: "Blockchain, crypto, dan Bitcoin itu sama saja"</h3>
<div data-diagram="compare3" data-cols="Teknologi::buku besar bersama::bisa dipakai tanpa koin|Aset::Bitcoin, ether, stablecoin::jutaan token lain|Perusahaan &amp; produk::bursa, aplikasi, proyek::bisa jujur, bisa menipu" data-caption="Tiga lapis yang sering dicampur dalam satu kata: crypto"></div>
<p>Teknologinya bisa berguna walaupun sebagian besar tokennya tidak bernilai. Contohnya, Bank Indonesia meneliti Rupiah Digital dengan teknologi buku besar bersama tanpa koin spekulatif apa pun (<a href="#/lesson/bc-pl-1">CBDC &amp; Rupiah Digital</a>). Sebaliknya, perusahaan yang menipu tidak membuktikan bahwa teknologinya bohong.</p>

<h3>Mitos 6: "Tidak ada yang benar-benar memakainya"</h3>
<p>Stablecoin — token yang dipatok ke dolar — beredar sekitar <b>US$305 miliar</b> (data DeFiLlama, September 2026). Stablecoin dipakai untuk mengirim dolar lintas negara 24 jam, dan oleh orang di negara dengan inflasi tinggi untuk menyimpan nilai. Sejak Januari 2024, Bitcoin juga bisa dibeli lewat ETF di bursa saham Amerika.</p>
<p>Tapi ingat juga: sebagian besar volume tetap untuk jual beli, dan stablecoin pula yang paling banyak dipakai penjahat.</p>
<div class="callout">
<b>Versi yang lebih tepat:</b> "Dipakai oleh kelompok tertentu untuk keperluan tertentu — terutama mengirim dolar digital — tapi belum dipakai kebanyakan orang untuk belanja sehari-hari."
</div>

<h3>Ringkasan</h3>
<table class="tbl">
  <tr><th>Pernyataan</th><th>Penilaian</th><th>Versi yang lebih tepat</th></tr>
  <tr><td>Cuma dipakai penjahat</td><td>Berlebihan</td><td>Nilainya besar dan naik, porsinya di bawah 1%</td></tr>
  <tr><td>Bitcoin bisa dipalsukan</td><td>Keliru</td><td>Yang sering jebol adalah bursa, aplikasi, dan pengguna</td></tr>
  <tr><td>Ilegal di Indonesia</td><td>Keliru</td><td>Legal sebagai aset (OJK), dilarang sebagai alat bayar</td></tr>
  <tr><td>Bitcoin itu Ponzi</td><td>Kurang tepat</td><td>Aset spekulatif tanpa arus kas; banyak produk crypto yang Ponzi</td></tr>
  <tr><td>Semua sama saja</td><td>Keliru</td><td>Teknologi, aset, dan perusahaan dinilai terpisah</td></tr>
  <tr><td>Tidak ada yang pakai</td><td>Berlebihan</td><td>Stablecoin dipakai nyata, tapi belum untuk belanja sehari-hari</td></tr>
</table>
`,
          keyPoints: [
            "Menolak dengan alasan yang salah membuatmu mudah dipatahkan penjual; ragulah dengan alasan yang benar.",
            "Kejahatan crypto 2025 mencapai rekor US$154 miliar, tapi kurang dari 1% volume yang bisa dilacak; transaksinya juga bisa dilacak.",
            "Pencurian besar hampir selalu lewat bursa, aplikasi, atau pengguna — bukan karena aturan jaringan Bitcoin jebol (bug 2010 diperbaiki dalam hitungan jam).",
            "Di Indonesia crypto legal sebagai aset keuangan digital (OJK) tapi dilarang sebagai alat pembayaran.",
            "Bitcoin bukan Ponzi menurut definisinya, tapi aset spekulatif tanpa arus kas; produk dengan untung pasti per hari adalah tanda Ponzi.",
            "Pisahkan teknologi, aset, dan perusahaan; stablecoin dipakai nyata (sekitar US$305 miliar) walau belum untuk belanja sehari-hari."
          ],
          practice: [
            {
              type: "choice",
              q: "Seorang kenalan menawarkan \"robot trading crypto\": setor minimal Rp5 juta, untung pasti 1% per hari, bonus 10% kalau mengajak teman. Apa penilaian yang paling tepat?",
              options: [
                "Ciri skema Ponzi: untung pasti dan bonus dari anggota baru",
                "Aman selama robotnya memakai kecerdasan buatan",
                "Wajar, karena harga crypto memang sering naik",
                "Aman kalau kenalan itu sudah menerima untungnya"
              ],
              answer: 0,
              hint: "Ingat ciri Ponzi di tabel perbandingan.",
              solution: "Untung tetap yang dijanjikan ditambah bonus perekrutan adalah ciri Ponzi. Pembayaran awal ke anggota lama justru umpan agar orang baru masuk."
            },
            {
              type: "choice",
              q: "Temanmu berkata: \"Bybit kebobolan US$1,5 miliar, jadi terbukti matematika blockchain bisa dibobol.\" Bagaimana tanggapan yang tepat?",
              options: [
                "Yang dibobol adalah sistem bursa, bukan aturan jaringannya",
                "Benar, sejak itu semua dompet Ethereum tidak aman",
                "Salah, karena pencurian itu tidak pernah terjadi",
                "Benar, karena blockchain bisa diubah siapa saja"
              ],
              answer: 0,
              hint: "Lihat gambar lapisan: di lapisan mana pencurian terjadi?",
              solution: "Penyerang masuk lewat komputer pengembang layanan dompet yang dipakai bursa. Kerugiannya nyata, tapi yang jebol adalah lapisan perantara, bukan aturan jaringannya."
            }
          ],
          quiz: [
            {
              q: "Mengapa menolak crypto dengan alasan yang keliru bisa berbahaya?",
              options: [
                "Alasan keliru mudah dipatahkan penjual",
                "OJK akan memberi sanksi kepada yang menolak",
                "Penolakan membuat harga crypto naik",
                "Bursa tidak mau melayani orang yang ragu"
              ],
              answer: 0,
              explain: "Kalau alasanmu dipatahkan, kamu bisa berbalik percaya sepenuhnya. Ragu dengan alasan yang benar lebih tahan godaan."
            },
            {
              q: "Mana pernyataan tentang kejahatan crypto 2025 yang paling tepat?",
              options: [
                "Nilainya rekor, tapi di bawah 1% volume",
                "Hampir semua transaksi crypto ilegal",
                "Tidak ada kejahatan karena blockchain aman",
                "Kejahatan crypto turun drastis dari 2024"
              ],
              answer: 0,
              explain: "Chainalysis mencatat setidaknya US$154 miliar (rekor), namun porsinya kurang dari 1% volume yang bisa dilacak."
            },
            {
              q: "Mana yang BENAR tentang crypto di Indonesia?",
              options: [
                "Legal sebagai aset, tidak sah untuk membayar",
                "Dilarang dimiliki dan diperdagangkan",
                "Sah sebagai alat pembayaran di toko",
                "Dijamin LPS seperti tabungan di bank"
              ],
              answer: 0,
              explain: "Crypto diawasi OJK sebagai aset keuangan digital; pembayaran wajib memakai rupiah, dan aset crypto tidak dijamin LPS."
            },
            {
              q: "Kritik paling tajam terhadap Bitcoin sebagai \"investasi\" adalah...",
              options: [
                "Tidak punya arus kas, harga dari pembeli berikutnya",
                "Ada pengelola yang membayar untung dari setoran",
                "Jumlah koinnya bisa dicetak tanpa batas",
                "Semua transaksinya tidak tercatat di mana pun"
              ],
              answer: 0,
              explain: "Bitcoin tidak menghasilkan laba atau sewa; harganya bergantung pada permintaan orang lain. Itu aset spekulatif, bukan Ponzi menurut definisinya."
            }
          ]
        },
        {
          id: "bc-skep-3",
          title: "Menilai Sendiri — Alat Berpikir untuk Orang yang Ragu",
          duration: "13 menit",
          content: `
<p>Dua pelajaran sebelumnya memisahkan kritik yang benar dari mitos. Sekarang kita membuat <b>alat berpikir</b> yang bisa kamu pakai sendiri — untuk crypto, dan sebenarnya untuk tawaran investasi apa pun.</p>

<h3>Pisahkan tiga pertanyaan yang sering dicampur</h3>
<div data-diagram="pipeline" data-stages="Teknologinya bekerja?::Bitcoin berjalan sejak 2009|Berguna untuk apa?::tergantung masalah yang mau diselesaikan|Layak dibeli sekarang?::tidak ada yang tahu pasti" data-caption="Tiga pertanyaan berbeda, dengan jawaban yang berbeda pula"></div>
<p>Banyak perdebatan kacau karena tiga pertanyaan ini dicampur:</p>
<ul>
  <li>"Teknologinya hebat, <b>jadi</b> harganya pasti naik." Lompatan yang salah: teknologi bagus tidak menjamin harga.</li>
  <li>"Harganya anjlok, <b>jadi</b> teknologinya bohong." Lompatan yang salah juga: harga turun tidak membuktikan teknologinya tidak bekerja.</li>
  <li>"Ada penipu memakai crypto, <b>jadi</b> semua orang di bidang ini penipu." Perusahaan dan orang dinilai satu per satu.</li>
</ul>
<p>Kamu boleh menjawab "ya, bekerja" untuk pertanyaan pertama sambil tetap menjawab "tidak, saya tidak mau membeli" untuk pertanyaan ketiga. Itu sikap yang konsisten.</p>

<h3>Apakah masalah ini benar-benar butuh blockchain?</h3>
<p>Banyak proyek menempelkan kata "blockchain" pada masalah yang cukup diselesaikan dengan database biasa. Coba jawab lima pertanyaan ini untuk sebuah ide atau proyek:</p>
<div data-demo="perlu-blockchain"></div>

<h3>Lima pertanyaan penyaring untuk setiap tawaran</h3>
<div data-diagram="flow" data-steps="Dari mana untungnya?|Siapa memegang uangku?|Terdaftar di OJK?|Bisa keluar kapan saja?|Kuat kalau turun 80%?" data-caption="Lewati satu per satu; satu jawaban buruk sudah cukup untuk menolak"></div>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Tanda bahaya</th></tr>
  <tr><td><b>Dari mana untungnya?</b></td><td>Tidak bisa dijelaskan, atau dijawab "dari robot", "dari AI", "rahasia"</td></tr>
  <tr><td><b>Siapa memegang uangku?</b></td><td>Kamu diminta transfer ke rekening pribadi atau aplikasi yang tidak dikenal</td></tr>
  <tr><td><b>Terdaftar di OJK?</b></td><td>Tidak terdaftar, atau hanya menunjukkan "akta perusahaan" sebagai bukti</td></tr>
  <tr><td><b>Bisa keluar kapan saja?</b></td><td>Ada biaya penarikan aneh, harus mengajak teman dulu, atau "dana dikunci"</td></tr>
  <tr><td><b>Kuat kalau turun 80%?</b></td><td>Uangnya pinjaman, uang sekolah, atau uang kebutuhan bulan depan</td></tr>
</table>

<h3>Paham tanpa harus membeli</h3>
<p>Kamu bisa memahami crypto sampai tingkat yang dalam <b>tanpa membeli satu koin pun</b>:</p>
<ul>
  <li>Membaca transaksi sungguhan di penjelajah blok (<a href="#/lesson/bc-intip-1">Mengintip Isi Blockchain</a>).</li>
  <li>Membuat dan menjalankan smart contract dengan uang mainan di Remix (<a href="#/lesson/bc-remix-1">Remix IDE dari Nol</a>).</li>
  <li>Memakai jaringan uji (testnet) yang koinnya gratis dan tidak bernilai (<a href="#/lesson/bc-pro-1">Setup Dompet &amp; Testnet</a>).</li>
</ul>
<p>Justru orang yang paham cara kerjanya paling sulit ditipu, entah ia akhirnya membeli atau tidak.</p>

<h3>Kalau suatu hari tetap ingin mencoba</h3>
<div class="callout warn">
<b>Aturan aman:</b>
<ul>
  <li>Pakai <b>uang dingin</b> — uang yang kalau hilang seluruhnya, hidupmu tetap berjalan normal.</li>
  <li>Hanya lewat platform yang <b>terdaftar di OJK</b>.</li>
  <li><b>Jangan</b> memakai utang atau leverage.</li>
  <li>Jangan pernah membagikan <b>seed phrase</b>, kata sandi, atau kode OTP kepada siapa pun, termasuk yang mengaku petugas.</li>
  <li>Abaikan setiap janji <b>untung pasti</b>.</li>
  <li>Mulai dari jumlah yang sangat kecil, dan catat semua transaksi untuk pajak.</li>
</ul>
Ini edukasi, bukan saran investasi.
</div>

<h3>Ragu yang sehat</h3>
<div data-diagram="matrix" data-ylabel="Seberapa yakin" data-xlabel="Seberapa paham" data-cells="Yakin tanpa paham: mudah jadi korban|Yakin dan paham: tetap butuh batas risiko|Ragu tanpa paham: mudah berubah saat harga naik|Ragu tapi paham: tujuan modul ini" data-caption="Yang berbahaya bukan yakin atau ragu, melainkan tidak paham"></div>
<p>Banyak ekonom dan bank sentral skeptis terhadap crypto, dan banyak pengembang yakin padanya. Keduanya punya argumen yang serius. Tujuanmu bukan memilih kubu, tetapi <b>paham</b> — sehingga keputusanmu, apa pun itu, adalah keputusanmu sendiri.</p>
<div class="callout">
<b>"Tidak percaya"</b> dan <b>"paham"</b> bisa berjalan bersama. Orang yang ragu dan paham adalah orang yang paling sulit ditipu.
</div>
`,
          keyPoints: [
            "Pisahkan tiga pertanyaan: teknologinya bekerja? berguna untuk apa? layak dibeli sekarang? — jawabannya bisa berbeda-beda.",
            "Teknologi bagus tidak menjamin harga naik; harga turun tidak membuktikan teknologinya bohong.",
            "Uji dulu apakah sebuah masalah benar-benar butuh blockchain, atau cukup database biasa.",
            "Lima penyaring: dari mana untungnya, siapa memegang uang, terdaftar OJK, bisa keluar kapan saja, kuat kalau turun 80%.",
            "Crypto bisa dipahami tanpa membeli: penjelajah blok, Remix, dan testnet; kalau mencoba, pakai uang dingin tanpa utang."
          ],
          practice: [
            {
              type: "choice",
              q: "Sebuah proyek berkata: \"Kami memakai blockchain agar data nilai rapor sekolah aman.\" Hanya sekolah itu yang menulis nilai, dan nilainya bersifat pribadi. Penilaian yang paling tepat?",
              options: [
                "Kemungkinan besar cukup database biasa",
                "Wajib blockchain agar nilainya tidak hilang",
                "Pasti penipuan karena memakai kata blockchain",
                "Harus memakai Bitcoin agar paling aman"
              ],
              answer: 0,
              hint: "Ada berapa pihak yang menulis? Apakah datanya boleh terbuka untuk umum?",
              solution: "Hanya satu pihak yang menulis dan datanya pribadi, jadi blockchain publik tidak cocok. Tapi itu tidak otomatis penipuan — mungkin hanya salah memilih alat."
            },
            {
              type: "choice",
              q: "Rina berkata: \"Saya tidak mau membeli crypto, tapi saya akui jaringan Bitcoin bekerja.\" Apakah sikap ini bertentangan?",
              options: [
                "Tidak, dua pertanyaan itu memang berbeda",
                "Ya, kalau mengakui harus ikut membeli",
                "Ya, kalau menolak membeli harus menolak teknologinya",
                "Tidak, karena Bitcoin pasti akan dilarang"
              ],
              answer: 0,
              hint: "Ingat tiga pertanyaan yang terpisah.",
              solution: "Apakah teknologinya bekerja dan apakah layak dibeli adalah dua pertanyaan berbeda. Jawabannya boleh berbeda."
            }
          ],
          quiz: [
            {
              q: "\"Teknologi blockchain hebat, jadi harga koin ini pasti naik.\" Apa kesalahannya?",
              options: [
                "Mencampur kualitas teknologi dengan harga",
                "Blockchain sebenarnya tidak pernah bekerja",
                "Harga koin hanya ditentukan pemerintah",
                "Tidak ada kesalahan dalam kalimat itu"
              ],
              answer: 0,
              explain: "Teknologi yang bekerja tidak menjamin harga naik; itu dua pertanyaan berbeda."
            },
            {
              q: "Tawaran mana yang paling jelas gagal di penyaring \"Dari mana untungnya?\"",
              options: [
                "Untung 2% per hari dari robot rahasia",
                "Harga bisa naik atau turun sesuai pasar",
                "Bunga deposito bank yang dijamin LPS",
                "Dividen dari laba perusahaan terbuka"
              ],
              answer: 0,
              explain: "Untung tinggi yang pasti dan sumbernya dirahasiakan adalah tanda bahaya paling umum."
            },
            {
              q: "Cara memahami crypto secara mendalam tanpa membeli koin apa pun adalah...",
              options: [
                "Testnet, Remix, dan penjelajah blok",
                "Meminjam uang untuk membeli sedikit",
                "Ikut grup sinyal trading berbayar",
                "Menitipkan dana ke teman yang paham"
              ],
              answer: 0,
              explain: "Testnet dan Remix memakai koin mainan, dan penjelajah blok bisa dibaca gratis."
            },
            {
              q: "Menurut gambar empat kotak, posisi mana yang paling berbahaya?",
              options: [
                "Yakin tanpa paham",
                "Ragu tapi paham",
                "Yakin dan paham",
                "Semua sama bahayanya"
              ],
              answer: 0,
              explain: "Orang yang yakin tanpa paham paling mudah menjadi korban penipuan dan keputusan buruk."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 4: FONDASI KRIPTOGRAFI: HASH, KUNCI & TANDA TANGAN ---------------- */
    {
      id: "bc-fundamental",
      level: "Fundamental",
      title: "Fondasi Kriptografi: Hash, Kunci & Tanda Tangan",
      summary: "Dari nol dan dengan demo sungguhan: hash sebagai sidik jari data, kenapa hash tak bisa dibalik, kunci privat–publik–alamat, tanda tangan digital, perjalanan satu transaksi, dan Merkle tree.",
      lessons: [
        {
          id: "bc-fund-1",
          title: "Hash dari Nol — Sidik Jari untuk Data",
          duration: "15 menit",
          content: `
<p><b>Hash</b> adalah kata yang paling sering muncul di dunia crypto — dan paling jarang dijelaskan dengan baik. Pelajaran ini mulai benar-benar dari nol: apa itu, cara membuatnya dengan tangan, lalu mencoba yang sungguhan.</p>

<div data-diagram="pipeline" data-stages="Data apa saja::teks, foto, file 1 GB|Fungsi hash::diaduk dengan rumus tetap|Sidik jari::selalu 64 karakter|Dipakai untuk::memeriksa &amp; mengunci" data-caption="Hash mengubah data sebesar apa pun menjadi sidik jari berukuran tetap"></div>

<h3>Fundamental: sidik jari untuk data</h3>
<div class="callout">
<b>Sidik jarimu</b> punya tiga sifat penting:<br>
• <b>Kecil, tapi mewakili yang besar</b> — satu ujung jari cukup mewakili seluruh dirimu.<br>
• <b>Unik</b> — dua orang praktis tidak pernah punya sidik jari yang sama.<br>
• <b>Tidak bisa dibalik</b> — dari sidik jari, polisi bisa mencocokkan pemiliknya, tapi tidak bisa menggambar wajah atau tinggi badanmu.<br><br>
<b>Hash adalah sidik jari untuk data.</b> Sebuah kalimat, foto, atau file satu gigabyte diubah menjadi deretan pendek berukuran tetap. Dari deretan itu data aslinya tidak bisa dibangun kembali, tapi siapa pun bisa memastikan apakah dua data <b>persis sama</b>.
</div>

<div class="callout warn">
<b>Analogi blender.</b> Memasukkan pisang, susu, dan madu lalu memblendernya itu mudah — dan resep yang sama selalu menghasilkan jus yang sama. Tapi mengembalikan jus menjadi pisang utuh? Mustahil. Hash bekerja seperti blender itu: <b>mudah ke depan, mustahil ke belakang</b>.
</div>

<h3>Coba buat hash sendiri — dengan tangan</h3>
<p>Mari buat <b>hash mainan</b>: ganti setiap huruf dengan nomor urutnya (A = 1, B = 2, … Z = 26), jumlahkan, lalu ambil <b>dua digit terakhir</b>.</p>
<table class="tbl">
  <tr><th>Kata</th><th>Hitungan</th><th>Hash mainan</th></tr>
  <tr><td>BUDI</td><td>2 + 21 + 4 + 9 = 36</td><td><b>36</b></td></tr>
  <tr><td>ANDI</td><td>1 + 14 + 4 + 9 = 28</td><td><b>28</b></td></tr>
  <tr><td>DIBU</td><td>4 + 9 + 2 + 21 = 36</td><td class="bad-cell"><b>36</b> — sama dengan BUDI!</td></tr>
  <tr><td>BUDJ</td><td>2 + 21 + 4 + 10 = 37</td><td class="bad-cell"><b>37</b> — hanya beda 1 dari BUDI</td></tr>
</table>

<p>Sekarang nilai hash mainan kita:</p>
<table class="tbl">
  <tr><th>Ujian</th><th>Hash mainan</th></tr>
  <tr><td>Kata yang sama selalu menghasilkan angka yang sama?</td><td class="ok-cell">✅ Lulus</td></tr>
  <tr><td>Ukuran hasilnya selalu tetap?</td><td class="ok-cell">✅ Lulus — selalu 2 digit</td></tr>
  <tr><td>Tidak bisa dibalik?</td><td class="ok-cell">✅ Lulus — angka 36 bisa berasal dari ribuan kata</td></tr>
  <tr><td>Sulit menemukan dua data dengan hash sama?</td><td class="bad-cell">❌ Gagal — cukup tukar urutan huruf</td></tr>
  <tr><td>Perubahan kecil mengubah hasil secara total?</td><td class="bad-cell">❌ Gagal — BUDI → BUDJ hanya naik 1</td></tr>
</table>

<p>Hash mainan gagal dua ujian terakhir, sehingga penipu bisa mengakalinya. Fungsi hash sungguhan seperti <b>SHA-256</b> — yang dipakai Bitcoin — dirancang lulus <b>kelima-limanya</b>. Coba sendiri:</p>

<div data-demo="hash-sungguhan"></div>

<h3>Contoh hasil SHA-256 sungguhan</h3>
<p>Semua sidik jari di bawah ini dihitung dengan SHA-256 asli — sama persis dengan yang akan kamu dapat di demo atau di komputer mana pun. Agar muat di layar, hanya awal dan akhirnya yang ditampilkan; aslinya selalu 64 karakter.</p>
<table class="tbl">
  <tr><th>Data</th><th>Sidik jarinya (hash SHA-256)</th></tr>
  <tr><td>kirim 0,5 koin ke Budi</td><td><code>9920abe318a7984c…9d2d3c0b</code></td></tr>
  <tr><td>kirim <b>50</b> koin ke Budi</td><td class="bad-cell"><code>da2b4cc7ecd34094…bdfdbadd</code> — berubah total</td></tr>
  <tr><td><b>K</b>irim 0,5 koin ke Budi</td><td class="bad-cell"><code>8f175beb0f4fa1cb…d9091dc9</code> — hanya huruf besar, tetap berubah total</td></tr>
  <tr><td>halo</td><td><code>a4e63bcacf6c172a…bf16d777</code></td></tr>
  <tr><td>buku berisi 500.000 huruf</td><td><code>0071c4a7e7200b57…d2ce99f8</code> — tetap 64 karakter</td></tr>
</table>
<p>Tiga hal langsung terlihat: mengubah <b>0,5 menjadi 50</b> mengubah seluruh sidik jari, bukan hanya sebagian; bahkan mengganti <b>satu huruf kecil menjadi huruf besar</b> pun begitu; dan kata "halo" maupun buku setebal 500 ribu huruf sama-sama menghasilkan <b>64 karakter</b>.</p>

<h3>Lima sifat hash — dan kenapa blockchain membutuhkannya</h3>
<table class="tbl">
  <tr><th>Sifat</th><th>Artinya</th><th>Kenapa penting di blockchain</th></tr>
  <tr><td><b>Deterministik</b></td><td>Data sama → hash sama, di komputer mana pun</td><td>Ribuan node bisa memeriksa hal yang sama tanpa saling percaya</td></tr>
  <tr><td><b>Ukuran tetap</b></td><td>Satu huruf atau satu film tetap 64 karakter</td><td>Blok bisa merujuk data sebesar apa pun secara ringkas</td></tr>
  <tr><td><b>Satu arah</b></td><td>Dari hash tidak bisa kembali ke datanya</td><td>Sidik jari boleh dipublikasikan tanpa membocorkan isi aslinya</td></tr>
  <tr><td><b>Efek longsor</b> (avalanche)</td><td>Ubah sedikit saja → sekitar separuh hash berubah</td><td>Perubahan sekecil apa pun pada transaksi lama langsung ketahuan</td></tr>
  <tr><td><b>Tahan tabrakan</b></td><td>Praktis mustahil menemukan dua data berbeda dengan hash sama</td><td>Satu sidik jari benar-benar mewakili satu data saja</td></tr>
</table>

<h3>Apa sebenarnya SHA-256?</h3>
<p><b>SHA</b> singkatan dari <i>Secure Hash Algorithm</i> — "algoritma hash yang aman". SHA-256 adalah anggota keluarga <b>SHA-2</b>, dirancang oleh NSA dan diterbitkan sebagai standar oleh NIST (lembaga standar Amerika Serikat) pada 2001. Angka <b>256</b> adalah panjang hasilnya: 256 bit. Rumusnya terbuka — siapa pun boleh memeriksa dan memakainya, dan justru karena sudah diperiksa para ahli selama puluhan tahun, ia dipercaya.</p>

<h4>Cara kerjanya, tanpa rumus</h4>
<table class="tbl">
  <tr><th>Tahap</th><th>Yang terjadi</th></tr>
  <tr><td>1. Ubah ke bit</td><td>Setiap huruf diubah menjadi 8 angka 0/1. "halo" menjadi 32 bit.</td></tr>
  <tr><td>2. Ganjal & potong</td><td>Ditambah bit pengganjal dan keterangan panjang data, lalu dipotong per <b>512 bit</b> (64 huruf).</td></tr>
  <tr><td>3. Aduk 64 putaran</td><td>Setiap potongan diaduk <b>64 kali</b> dengan operasi sederhana: menggeser bit, memutarnya, membandingkannya (XOR), dan menjumlahkannya.</td></tr>
  <tr><td>4. Sambung-menyambung</td><td>Hasil adukan satu potongan ikut dibawa ke potongan berikutnya — karena itu huruf terakhir pun memengaruhi seluruh hasil.</td></tr>
  <tr><td>5. Hasil akhir</td><td>Tersisa delapan angka, masing-masing 32 bit — totalnya <b>256 bit</b>, ditulis sebagai 64 karakter.</td></tr>
</table>
<div class="callout">
<b>Analogi mengocok kartu.</b> Bayangkan mengocok setumpuk kartu 64 kali dengan aturan yang tetap dan diumumkan ke semua orang. Siapa pun yang memulai dari urutan kartu yang sama akan mendapat hasil akhir yang sama persis. Tapi dari hasil akhirnya, tidak ada yang bisa menebak urutan awalnya — terlalu banyak kemungkinan yang teraduk di tengah jalan.
</div>

<h4>SHA-256 di dunia crypto</h4>
<table class="tbl">
  <tr><th>Di mana</th><th>Bagaimana dipakai</th></tr>
  <tr><td>Bitcoin — blok & ID transaksi</td><td>SHA-256 dijalankan <b>dua kali</b> berturut-turut (<i>double SHA-256</i>)</td></tr>
  <tr><td>Bitcoin — penambangan</td><td>Penambang mengulang SHA-256 triliunan kali per detik, mencari hash blok yang memenuhi syarat</td></tr>
  <tr><td>Bitcoin — alamat</td><td>Kunci publik di-hash dengan SHA-256, lalu dengan hash lain bernama RIPEMD-160</td></tr>
  <tr><td>Ethereum</td><td>Memakai saudaranya, <b>Keccak-256</b> — rumusnya berbeda, tapi hasilnya juga 64 karakter dan sifatnya sama</td></tr>
  <tr><td>Di luar crypto</td><td>Gembok https di browser, pemeriksaan file unduhan, tanda tangan aplikasi</td></tr>
</table>
<div class="callout warn">
<b>Kenapa harus SHA-256, bukan yang lebih lama?</b> Dulu dunia memakai <b>MD5</b> dan <b>SHA-1</b>. Keduanya sudah dibobol: tabrakan MD5 — dua data berbeda dengan hash sama — ditemukan tahun 2004, dan tabrakan SHA-1 dipamerkan peneliti Google dan CWI Amsterdam tahun 2017. Untuk SHA-256, sampai hari ini belum pernah ada yang menemukan satu pun tabrakan. Karena itu sifat "tahan tabrakan" bukan teori: ia menentukan apakah sebuah hash masih layak dipercaya.
</div>

<h3>64 karakter itu apa?</h3>
<p>Hash SHA-256 ditulis dalam <b>heksadesimal</b> — sistem angka yang memakai 16 simbol: 0–9 lalu a–f. Satu karakter heksadesimal mewakili <b>4 bit</b>, jadi 64 karakter = 256 bit. Dari situlah namanya: SHA-<b>256</b>.</p>
<p>Banyaknya kemungkinan hash adalah 2<sup>256</sup> — sekitar 1 diikuti 77 angka nol. Sebagai pembanding, jumlah butir pasir di seluruh pantai Bumi diperkirakan "hanya" sekitar 1 diikuti 19 angka nol.</p>

<div class="callout warn">
<b>Hash bukan enkripsi.</b> Enkripsi punya kunci dan memang dirancang untuk dibuka kembali. Hash tidak punya kunci dan tidak bisa "dibuka" oleh siapa pun, termasuk pembuatnya. Perbedaan keduanya dibahas tuntas di modul Kriptografi Mendalam.
</div>

<h3>Kenapa ini penting untuk pelajaran berikutnya</h3>
<p>Hash adalah fondasi dua hal yang akan segera kamu pelajari:</p>
<table class="tbl">
  <tr><th>Nanti</th><th>Peran sidik jari</th></tr>
  <tr><td><b>Tanda tangan digital</b></td><td>Dompetmu tidak menandatangani pesan lengkapnya, melainkan <b>sidik jarinya</b> (<code>9920abe318a7984c…9d2d3c0b</code>). Kalau ada yang mengubah 0,5 menjadi 50, sidik jarinya berubah dan tanda tangan lama tidak cocok lagi.</td></tr>
  <tr><td><b>Rantai blok</b></td><td>Setiap blok menyimpan sidik jari blok sebelumnya. Mengubah satu blok lama mengubah sidik jarinya, sehingga semua blok sesudahnya ikut "putus" — itulah asal nama <i>blockchain</i>.</td></tr>
</table>
<p>Singkatnya: <b>hash menjaga isinya tidak berubah</b>, dan <b>tanda tangan membuktikan siapa yang menyetujuinya</b>. Keduanya selalu bekerja berpasangan.</p>

<h3>Di mana hash dipakai?</h3>
<table class="tbl">
  <tr><th>Tempat</th><th>Perannya</th></tr>
  <tr><td>Setiap blok</td><td>Sidik jari blok, sekaligus penyambung ke blok sebelumnya</td></tr>
  <tr><td>ID transaksi</td><td>Nomor resi yang bisa dicari di block explorer</td></tr>
  <tr><td>Alamat dompet</td><td>Dibuat dengan meng-hash kunci publik</td></tr>
  <tr><td>Penambangan</td><td>Menebak angka agar hash blok memenuhi syarat tertentu</td></tr>
  <tr><td>Di luar crypto</td><td>Memeriksa file unduhan tidak rusak, menyimpan password, mendeteksi file kembar</td></tr>
</table>
`,
          keyPoints: [
            "Hash adalah sidik jari data: data sebesar apa pun diubah menjadi deretan berukuran tetap.",
            "Seperti blender: mudah ke depan, mustahil ke belakang — data asli tidak bisa dibangun dari hash.",
            "Hash mainan (jumlah nomor huruf) gagal karena mudah bertabrakan dan perubahan kecil hanya mengubah hasil sedikit.",
            "Lima sifat hash sungguhan: deterministik, ukuran tetap, satu arah, efek longsor, dan tahan tabrakan.",
            "SHA-256 menghasilkan 64 karakter heksadesimal = 256 bit.",
            "Hash bukan enkripsi: tidak ada kunci dan tidak bisa dibuka oleh siapa pun.",
            "Hash dipakai untuk mengunci blok, ID transaksi, alamat dompet, dan penambangan.",
            "SHA-256 = Secure Hash Algorithm keluarga SHA-2: data dipotong per 512 bit lalu diaduk 64 putaran; Bitcoin memakainya dua kali, Ethereum memakai Keccak-256.",
            "Yang ditandatangani dompet adalah hash pesan — karena itu mengubah isi transaksi membuat tanda tangannya tidak cocok.",
          ],
          practice: [
            { type: "number", q: "Dengan hash mainan (A=1, B=2, …, Z=26, jumlahkan), berapa hash kata ADA?", answer: 6, tol: 0.5, hint: "A = 1, D = 4.", solution: "1 + 4 + 1 = 6. Kata DAA juga menghasilkan 6 — contoh tabrakan pada hash mainan." },
            { type: "number", q: "Satu karakter heksadesimal mewakili 4 bit. Berapa bit dalam 64 karakter?", answer: 256, tol: 0.5, hint: "64 × 4.", solution: "64 × 4 = 256 bit — asal nama SHA-256." },
          ],
          quiz: [
            {
              q: "Apa itu 'efek avalanche' pada fungsi hash?",
              options: [
                "Perubahan masukan sekecil apa pun mengubah keluarannya secara total",
                "Keluaran hash makin panjang seiring bertambahnya ukuran masukan",
                "Hash dari data besar dihitung bertahap agar tidak membebani komputer",
                "Beberapa masukan berbeda sengaja dibuat menghasilkan hash yang sama",
              ],
              answer: 0,
              explain: "Karena itu perubahan satu karakter pun di sebuah transaksi langsung terdeteksi.",
            },
            {
              q: "Mengapa sifat 'satu arah' penting?",
              options: [
                "Agar data asli tidak bisa direkonstruksi kembali dari hash-nya",
                "Agar hash hanya bisa dihitung oleh komputer milik penambang",
                "Agar data yang sama menghasilkan hash yang berbeda setiap kali",
                "Agar hash bisa dibuka kembali memakai kunci milik pemiliknya",
              ],
              answer: 0,
              explain: "Sidik jari bisa dipublikasikan tanpa membocorkan data aslinya.",
            },
            {
              q: "Hash mainan memberi BUDI = 36 dan DIBU = 36. Ujian apa yang gagal?",
              options: [
                "Tahan tabrakan — dua data berbeda menghasilkan hash yang sama",
                "Deterministik — kata yang sama menghasilkan hash yang berbeda",
                "Ukuran tetap — hasilnya kadang dua digit, kadang tiga digit",
                "Satu arah — dari angka 36 kata aslinya bisa langsung diketahui",
              ],
              answer: 0,
              explain: "Dua data berbeda dengan sidik jari sama membuat hash tidak bisa dipercaya sebagai pembeda.",
            },
            {
              q: "Apa beda hash dengan enkripsi?",
              options: [
                "Hash tidak punya kunci dan tidak bisa dibuka, enkripsi dirancang untuk dibuka dengan kunci",
                "Hash dipakai untuk teks pendek, enkripsi hanya dipakai untuk file berukuran besar",
                "Hash selalu bisa dibalik oleh pembuatnya, enkripsi tidak bisa dibalik oleh siapa pun",
                "Keduanya sama saja, hanya berbeda nama di dunia crypto dan di dunia perbankan",
              ],
              answer: 0,
              explain: "Enkripsi menyembunyikan untuk dibuka lagi; hash menyegel dan tidak pernah dibuka.",
            },
            {
              q: "Apa arti angka 256 pada nama SHA-256?",
              options: [
                "Panjang hasilnya 256 bit, ditulis sebagai 64 karakter",
                "Jumlah putaran pengadukan yang dijalankan rumusnya",
                "Batas panjang data yang boleh dimasukkan, 256 huruf",
                "Tahun pembuatannya menurut penanggalan para perancang",
              ],
              answer: 0,
              explain: "256 bit ÷ 4 bit per karakter heksadesimal = 64 karakter. Jumlah putarannya 64, dan data sepanjang apa pun boleh dimasukkan.",
            },
          ],
        },
        {
          id: "bc-hash-2",
          title: "Kenapa Hash Tidak Bisa Dibalik — tapi Bisa Ditebak",
          duration: "14 menit",
          content: `
<p>"Satu arah" terdengar seperti sulap. Komputer bisa menghitung apa saja — kenapa ia tidak bisa menghitung mundur? Dan kalau benar-benar tidak bisa dibalik, kenapa password yang di-hash masih sering dibobol?</p>

<h3>Fundamental: kenapa tidak ada jalan pulang</h3>
<div class="callout">
<b>Analogi jam dinding.</b> Jarum jam menunjuk angka 3. Sudah berapa jam berlalu sejak tengah malam? Bisa 3 jam, 15 jam, 27 jam, 39 jam… Informasinya <b>sudah hilang</b>, sehingga tidak ada rumus yang bisa menjawab dengan pasti.<br><br>
Hash bekerja dengan cara serupa, tapi jauh lebih ekstrem. SHA-256 mengaduk data dalam <b>64 putaran</b>; setiap putaran mencampur hasil putaran sebelumnya dengan cara yang sengaja dibuat berantakan. Tidak ada yang tahu cara menguraikannya kembali.
</div>

<p>Akibatnya, hanya ada <b>satu</b> cara untuk "membalik" hash: <b>menebak</b>. Coba sebuah data, hitung hash-nya, bandingkan. Tidak cocok? Coba data lain. Ulangi.</p>

<div class="callout warn">
<b>Satu arah bukan berarti tak mungkin ditebak.</b> Artinya: tidak ada jalan pintas selain mencoba satu per satu. Karena itu keamanannya sepenuhnya bergantung pada <b>seberapa banyak kemungkinan</b> yang harus dicoba.
</div>

<div data-demo="tebak-pin"></div>

<h3>Keamanan = banyaknya tebakan yang dibutuhkan</h3>
<p>Andaikan penyerang punya komputer yang mampu 1 miliar tebakan per detik:</p>
<table class="tbl">
  <tr><th>Rahasia</th><th>Banyak kemungkinan</th><th>Waktu mencoba semuanya</th></tr>
  <tr><td>PIN 6 digit</td><td>1 juta</td><td class="bad-cell">Seketika</td></tr>
  <tr><td>Password 8 huruf kecil</td><td>± 209 miliar</td><td class="bad-cell">Sekitar 3,5 menit</td></tr>
  <tr><td>Password 12 karakter campuran</td><td>± 4,8 × 10<sup>23</sup></td><td class="ok-cell">Sekitar 15 juta tahun</td></tr>
  <tr><td>Seed phrase 12 kata acak</td><td>± 3,4 × 10<sup>38</sup></td><td class="ok-cell">Ratusan miliar kali umur alam semesta</td></tr>
</table>
<p>Setiap tambahan satu karakter <b>mengalikan</b> jumlah kemungkinan, bukan menambahnya. Itulah kenapa panjang jauh lebih penting daripada "kerumitan" yang mudah ditebak seperti <i>P@ssw0rd</i>.</p>

<h3>Tiga pelajaran untuk kehidupan sehari-hari</h3>
<ol>
  <li><b>Password pendek tetap tidak aman walau disimpan sebagai hash.</b> Kalau database sebuah situs bocor, hash dari password pendek bisa ditebak dalam hitungan menit.</li>
  <li><b>Situs yang baik menambahkan "garam" (salt).</b> Sebelum di-hash, setiap password dicampur teks acak yang berbeda per pengguna. Dua orang dengan password sama mendapat hash berbeda, dan daftar tebakan yang sudah dihitung sebelumnya jadi tidak berguna.</li>
  <li><b>Seed phrase aman karena dipilih acak oleh dompet — bukan olehmu.</b> Kata-kata yang kamu pilih sendiri, seperti kutipan lagu atau nama keluarga, masuk ke daftar tebakan penyerang. Dompet yang dibuat dari kalimat pilihan sendiri (<i>brain wallet</i>) sudah berkali-kali dikuras habis.</li>
</ol>

<h3>Kembali ke blockchain: hash sebagai rantai pengunci</h3>
<p>Setiap blok menyimpan <b>hash blok sebelumnya</b>. Rantai inilah yang membuat sejarah transaksi sulit dipalsukan:</p>

<div data-diagram="pipeline" data-stages="Blok 1::hash-nya a3f9…|Blok 2::simpan a3f9…, hash 7c21…|Blok 3::simpan 7c21…, hash e804…|Blok 4::simpan e804…" data-caption="Setiap blok memegang sidik jari blok sebelumnya"></div>

<table class="tbl">
  <tr><th>Kalau penipu mengubah satu transaksi di Blok 2…</th><th>Akibatnya</th></tr>
  <tr><td>Isi Blok 2 berubah</td><td>Hash Blok 2 berubah total (efek longsor)</td></tr>
  <tr><td>Blok 3 masih menyimpan hash Blok 2 yang lama</td><td>Sambungan Blok 2 → 3 putus</td></tr>
  <tr><td>Untuk menutupinya, Blok 3 harus dihitung ulang</td><td>Hash Blok 3 ikut berubah → Blok 4 putus, dan seterusnya</td></tr>
  <tr><td>Ribuan node memegang salinan yang asli</td><td>Versi palsu langsung terlihat berbeda dan ditolak</td></tr>
</table>

<div class="callout">
<b>Penambangan juga memakai prinsip "hanya bisa ditebak".</b> Penambang harus menemukan sebuah angka yang membuat hash blok diawali banyak angka nol. Tidak ada rumusnya — satu-satunya cara adalah mencoba jutaan angka. Kerja keras inilah yang membuat menghitung ulang blok-blok lama menjadi sangat mahal. Cara kerjanya dibahas lengkap di modul Konsensus, Penambangan &amp; Dompet.
</div>
`,
          keyPoints: [
            "Hash tidak bisa dibalik karena informasinya hilang dan pengadukannya tidak punya jalan pintas — seperti jarum jam yang tak memberi tahu sudah berapa hari berlalu.",
            "Satu-satunya cara 'membalik' hash adalah menebak satu per satu, jadi keamanannya bergantung pada banyaknya kemungkinan.",
            "PIN dan password pendek tetap bisa ditebak dalam hitungan detik atau menit walau disimpan sebagai hash.",
            "Menambah panjang mengalikan jumlah kemungkinan; salt membuat password sama menghasilkan hash berbeda.",
            "Seed phrase aman karena diacak oleh dompet; kalimat pilihan sendiri mudah ditebak.",
            "Setiap blok menyimpan hash blok sebelumnya, sehingga mengubah satu blok memutus semua sambungan sesudahnya.",
          ],
          practice: [
            { type: "number", q: "PIN 4 digit (0000–9999) punya berapa kemungkinan?", answer: 10000, tol: 0.5, hint: "Setiap digit punya 10 pilihan: 10 × 10 × 10 × 10.", solution: "10⁴ = 10.000 kemungkinan — habis dicoba dalam sepersekian detik." },
            { type: "number", q: "Penyerang mencoba 1 miliar tebakan per detik. Password dengan 200 miliar kemungkinan habis dicoba dalam berapa detik?", answer: 200, tol: 0.5, hint: "200.000.000.000 ÷ 1.000.000.000.", solution: "200 detik — kurang dari 4 menit." },
          ],
          quiz: [
            {
              q: "Kenapa hash SHA-256 tidak bisa dihitung mundur?",
              options: [
                "Informasinya hilang saat diaduk dan tidak ada jalan pintas yang diketahui",
                "Hasil hash langsung dihapus dari memori setelah selesai dihitung",
                "Rumus SHA-256 dirahasiakan sehingga hanya penambang yang mengetahuinya",
                "Komputer biasa belum cukup cepat, tetapi komputer bank bisa melakukannya",
              ],
              answer: 0,
              explain: "Rumus SHA-256 justru terbuka untuk umum; yang tidak ada adalah cara menguraikannya kembali.",
            },
            {
              q: "Database sebuah situs bocor dan berisi hash password. Password mana yang paling cepat ditemukan?",
              options: [
                "Password pendek yang hanya berisi angka",
                "Password panjang dari kata-kata acak",
                "Password 12 karakter campuran acak",
                "Password acak buatan pengelola sandi",
              ],
              answer: 0,
              explain: "Makin sedikit kemungkinan, makin cepat semua tebakan habis dicoba.",
            },
            {
              q: "Apa fungsi 'salt' saat menyimpan password?",
              options: [
                "Membuat password yang sama menghasilkan hash berbeda untuk tiap pengguna",
                "Membuat hash bisa dibuka kembali jika pengguna lupa password-nya",
                "Memperpendek hash agar database situs tidak memakan banyak ruang",
                "Mengenkripsi hash sehingga penyerang tidak dapat melihat isinya",
              ],
              answer: 0,
              explain: "Daftar tebakan yang sudah dihitung sebelumnya jadi tidak berguna.",
            },
            {
              q: "Seseorang mengubah transaksi di Blok 2 dari 10 blok. Kenapa perubahan itu ketahuan?",
              options: [
                "Hash Blok 2 berubah sehingga tidak cocok lagi dengan yang tersimpan di Blok 3",
                "Setiap blok dienkripsi sehingga isinya tidak bisa dibuka tanpa kunci jaringan",
                "Penambang menyimpan cadangan transaksi di server pusat untuk pemeriksaan",
                "Blok lama otomatis terkunci permanen setelah lewat waktu satu hari",
              ],
              answer: 0,
              explain: "Sambungan hash putus, dan ribuan node memegang salinan yang asli.",
            },
          ],
        },
        {
          id: "bc-kunci-1",
          title: "Kunci Privat, Kunci Publik & Alamat dari Nol",
          duration: "14 menit",
          content: `
<p>Di pelajaran <b>Wallet, Kunci &amp; Alamat</b> kamu mengenal aturannya: kunci privat dirahasiakan, alamat dibagikan. Sekarang saatnya menjawab pertanyaan yang lebih mendasar: <b>sebenarnya kunci itu apa?</b> Siapa yang membuatnya? Dan kenapa tidak ada yang bisa menebaknya?</p>

<div data-diagram="pipeline" data-stages="Kunci privat::angka acak rahasia|Kunci publik::dihitung dari privat|Alamat::sidik jari kunci publik|Dibagikan::untuk menerima dana" data-caption="Tiga hal berbeda, selalu dihitung satu arah dari kiri ke kanan"></div>

<h3>1. Kunci privat hanyalah angka acak — tapi sangat besar</h3>
<div class="callout">
<b>Lempar koin 256 kali.</b> Tulis 1 setiap muncul gambar dan 0 setiap muncul angka. Deretan 256 angka 0 dan 1 itu <b>sudah merupakan kunci privat</b> yang sah.<br><br>
Tidak ada bank yang menerbitkannya, tidak ada server yang mencatatnya, tidak ada formulir pendaftaran. Dompetmu cukup mengacak satu angka raksasa.
</div>

<p>Kenapa tidak ada orang lain yang kebetulan mendapat angka yang sama? Karena banyaknya kemungkinan kunci sekitar <b>10<sup>77</sup></b>. Bahkan kalau seluruh komputer di dunia membuat miliaran kunci per detik sejak awal alam semesta, peluang bertabrakan dengan kuncimu tetap praktis nol.</p>

<div class="callout warn">
<b>Syaratnya: benar-benar acak.</b> Kunci yang dibuat dari angka yang "terasa acak" bagi manusia — tanggal lahir, kalimat favorit, atau pola keyboard — masuk ke daftar tebakan penyerang. Biarkan dompet tepercaya yang mengacaknya.
</div>

<h3>2. Dari kunci privat ke kunci publik: mudah maju, mustahil mundur</h3>
<div class="callout">
<b>Analogi mencampur cat.</b> Kuning dicampur biru jadi hijau — mudah. Tapi dari segelas cat hijau, memisahkan kembali kuning dan birunya? Mustahil.<br><br>
Secara matematis, kunci publik didapat dengan "mengalikan" kunci privat dengan sebuah titik tetap <b>G</b> pada kurva bernama <b>secp256k1</b>. Perkalian ini cepat dihitung, tetapi kebalikannya — mencari kunci privat dari kunci publik — tidak punya cara yang diketahui. Mengapa demikian dibahas di modul Kriptografi Mendalam.
</div>

<h3>3. Dari kunci publik ke alamat: satu kali hash lagi</h3>
<p>Kunci publik cukup panjang (130 karakter). Alamat dibuat dengan <b>meng-hash</b> kunci publik lalu mengambil sebagiannya:</p>
<table class="tbl">
  <tr><th></th><th>Bitcoin</th><th>Ethereum</th></tr>
  <tr><td><b>Resep</b></td><td>SHA-256, lalu RIPEMD-160, lalu diberi kode pengecek</td><td>Keccak-256, lalu diambil 20 byte terakhir</td></tr>
  <tr><td><b>Bentuknya</b></td><td>Diawali bc1… atau 1… atau 3…</td><td>Diawali 0x, 40 karakter heksadesimal</td></tr>
  <tr><td><b>Pengecek salah ketik</b></td><td>Ada (checksum)</td><td>Ada, lewat campuran huruf besar-kecil</td></tr>
</table>

<div data-demo="buat-dompet"></div>

<h3>Tiga hal yang sering disamakan</h3>
<table class="tbl">
  <tr><th></th><th>Kunci privat</th><th>Kunci publik</th><th>Alamat</th></tr>
  <tr><td><b>Boleh dibagikan?</b></td><td class="bad-cell">Tidak pernah</td><td>Boleh</td><td class="ok-cell">Ya, untuk menerima dana</td></tr>
  <tr><td><b>Dipakai untuk</b></td><td>Menandatangani transaksi</td><td>Memeriksa tanda tangan</td><td>Menerima dana</td></tr>
  <tr><td><b>Kalau diketahui orang lain</b></td><td class="bad-cell">Seluruh dana bisa diambil</td><td>Tidak apa-apa</td><td>Tidak apa-apa (hanya privasi berkurang)</td></tr>
  <tr><td><b>Analogi</b></td><td>Stempel asli milikmu</td><td>Contoh cap untuk mencocokkan</td><td>Nomor rekening</td></tr>
</table>

<h3>Lalu seed phrase itu apa?</h3>
<p>Menulis 64 karakter heksadesimal dengan tangan rawan salah. Karena itu dompet modern menuliskan angka acak raksasa itu sebagai <b>12 atau 24 kata</b> dari daftar baku berisi <b>2.048 kata</b>. Dari satu seed phrase, dompet bisa menurunkan <b>banyak</b> kunci privat — untuk banyak akun dan banyak jenis koin.</p>

<div class="callout warn">
<b>Karena itulah seed phrase sama dengan seluruh isi brankas.</b> Siapa pun yang mengetahuinya bisa membuat ulang semua kuncimu di perangkatnya sendiri dan mengambil seluruh dana — dari jarak jauh, tanpa perlu HP-mu. Tidak ada tombol "lupa password", dan <b>tidak ada petugas resmi mana pun yang akan meminta seed phrase-mu</b>. Siapa pun yang memintanya adalah penipu.
</div>
`,
          keyPoints: [
            "Kunci privat hanyalah angka acak 256 bit — setara 256 kali lempar koin — yang dibuat sendiri oleh dompet tanpa pendaftaran.",
            "Banyaknya kemungkinan kunci sekitar 10⁷⁷, sehingga peluang dua orang mendapat kunci sama praktis nol, asalkan benar-benar acak.",
            "Kunci publik dihitung dari kunci privat lewat perkalian titik di kurva secp256k1: mudah maju, mustahil mundur.",
            "Alamat dibuat dengan meng-hash kunci publik (Bitcoin: SHA-256 + RIPEMD-160; Ethereum: Keccak-256, 20 byte terakhir).",
            "Kunci privat tak boleh dibagikan; kunci publik dan alamat boleh.",
            "Seed phrase adalah 12/24 kata yang mewakili angka acak induk, dan dari sanalah semua kunci diturunkan.",
            "Siapa pun yang meminta seed phrase adalah penipu.",
          ],
          practice: [
            { type: "number", q: "Kunci privat 256 bit ditulis dalam heksadesimal (4 bit per karakter). Berapa karakternya?", answer: 64, tol: 0.5, hint: "256 ÷ 4.", solution: "256 ÷ 4 = 64 karakter." },
            { type: "number", q: "Alamat Ethereum panjangnya 20 byte. Satu byte = 2 karakter heksadesimal. Berapa karakter setelah awalan 0x?", answer: 40, tol: 0.5, hint: "20 × 2.", solution: "20 × 2 = 40 karakter." },
          ],
          quiz: [
            {
              q: "Siapa yang menerbitkan kunci privat sebuah dompet crypto?",
              options: [
                "Tidak ada — dompet mengacak angkanya sendiri",
                "Bursa tempat kamu membuat akun untuk membeli koin",
                "Penambang yang memproses transaksi pertamamu",
                "Pengembang blockchain yang mencatat semua pengguna",
              ],
              answer: 0,
              explain: "Karena kemungkinannya sekitar 10⁷⁷, mengacak sendiri sudah cukup aman tanpa lembaga pencatat.",
            },
            {
              q: "Kenapa kunci privat tidak bisa dihitung dari kunci publik?",
              options: [
                "Perhitungannya satu arah: mudah maju, tanpa cara yang diketahui untuk mundur",
                "Kunci publik sengaja dibuat lebih pendek sehingga sebagian informasinya hilang",
                "Kunci privat disimpan terenkripsi di server pusat milik jaringan blockchain",
                "Setiap kunci publik diganti otomatis setiap kali sebuah transaksi dikirim",
              ],
              answer: 0,
              explain: "Seperti mencampur cat: hijau mudah dibuat, tapi tak bisa dipisahkan kembali.",
            },
            {
              q: "Bagaimana alamat dompet dibuat?",
              options: [
                "Dengan meng-hash kunci publik lalu mengambil sebagiannya",
                "Dengan memotong kunci privat menjadi beberapa bagian pendek",
                "Dengan mengenkripsi nama pemilik memakai kunci privatnya",
                "Dengan meminta nomor unik kepada node terdekat di jaringan",
              ],
              answer: 0,
              explain: "Karena itu alamat lebih pendek dari kunci publik dan juga tidak bisa dibalik.",
            },
            {
              q: "Seseorang yang mengaku 'tim dukungan resmi' meminta seed phrase untuk membantu memulihkan akunmu. Apa yang benar?",
              options: [
                "Itu penipuan, karena seed phrase memberi kendali penuh atas seluruh dana",
                "Aman diberikan asalkan dikirim lewat pesan pribadi dan bukan grup umum",
                "Aman diberikan sebagian saja, misalnya enam kata pertamanya",
                "Wajib diberikan karena tim dukungan harus memverifikasi kepemilikan",
              ],
              answer: 0,
              explain: "Tidak ada layanan sah yang membutuhkan seed phrase. Sebagian kata pun sudah memangkas tebakan penyerang secara drastis.",
            },
          ],
        },
        {
          id: "bc-fund-2",
          title: "Tanda Tangan Digital dari Nol",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Hash</b> = sidik jari data: berubah total bila isinya diubah sedikit saja, dan tidak bisa dibalik. <b>Kunci privat</b> = angka rahasia di dompetmu; <b>kunci publik</b> = pasangannya yang boleh diketahui semua orang, dan tidak bisa dibalik menjadi kunci privat. Pelajaran ini menyatukan ketiganya.
</div>

<p>Di jaringan blockchain tidak ada bank yang mengenalmu. Lalu bagaimana ribuan komputer yakin bahwa pesan <i>"kirim 0,5 koin dari alamat Andi ke Budi"</i> benar-benar dibuat oleh Andi — bukan oleh orang yang mengaku-ngaku?</p>

<h3>Fundamental: masalah yang harus dipecahkan</h3>
<p>Andi butuh bukti yang memenuhi <b>empat syarat sekaligus</b>:</p>
<table class="tbl">
  <tr><th>Syarat</th><th>Kenapa</th></tr>
  <tr><td>Hanya bisa dibuat oleh Andi</td><td>Agar tidak ada yang bisa mengaku sebagai Andi</td></tr>
  <tr><td>Bisa diperiksa oleh siapa pun</td><td>Karena tidak ada satu pihak pusat yang bertugas memeriksa</td></tr>
  <tr><td>Tidak membocorkan rahasia Andi</td><td>Kunci privat yang terkirim pasti dicuri</td></tr>
  <tr><td>Tidak bisa dipindah ke pesan lain</td><td>Agar bukti untuk "0,5 koin" tidak bisa dipakai untuk "50 koin"</td></tr>
</table>

<h3>Kenapa password dan tanda tangan biasa tidak cukup</h3>
<p>Saat kamu transfer lewat bank, banklah yang memeriksa: "Benar ini Andi? PIN-nya cocok?" Di blockchain tidak ada bank. Dua cara yang paling dulu terpikir ternyata gagal:</p>
<table class="tbl">
  <tr><th>Cara</th><th>Kenapa gagal</th></tr>
  <tr><td>Mengirim password atau PIN bersama pesan</td><td class="bad-cell">Ribuan komputer asing jadi tahu password Andi — siapa pun langsung bisa memakainya</td></tr>
  <tr><td>Tanda tangan biasa (coretan nama)</td><td class="bad-cell">Bentuknya <b>sama persis</b> di setiap dokumen — cukup disalin lalu ditempel ke perintah lain</td></tr>
</table>
<p>Tanda tangan digital memecahkan keduanya dengan cara yang tidak terduga: <b>rahasianya tidak pernah dikirim</b>, dan <b>bentuk tanda tangannya berbeda untuk setiap pesan</b>.</p>

<div class="callout">
<b>Analogi stempel ajaib.</b> Bayangkan Andi punya stempel yang cetakannya <b>berubah bentuk mengikuti isi surat</b>. Setiap orang punya kaca pemeriksa milik Andi (kunci publik) yang hanya cocok bila surat dan capnya sesuai.<br><br>
Ubah satu kata di surat → cap tidak lagi cocok. Pindahkan cap ke surat lain → tidak cocok. Buat cap tanpa stempel asli → mustahil. Stempel aslinya (kunci privat) tidak pernah keluar dari laci Andi.
</div>

<div data-diagram="sign"></div>

<h3>Tiga langkah, tanpa rumus</h3>
<table class="tbl">
  <tr><th>Langkah</th><th>Siapa</th><th>Yang terjadi</th></tr>
  <tr><td>1. Hash pesan</td><td>Dompet Andi</td><td>Pesan diubah jadi sidik jari 64 karakter</td></tr>
  <tr><td>2. Tanda tangani</td><td>Dompet Andi</td><td>Sidik jari + kunci privat → dua angka, <b>r</b> dan <b>s</b></td></tr>
  <tr><td>3. Periksa</td><td>Siapa pun</td><td>Pesan + tanda tangan + kunci publik Andi → <b>sah</b> atau <b>tidak</b></td></tr>
</table>
<p>Karena yang ditandatangani adalah <b>hash</b> pesan, efek longsor ikut bekerja: mengubah satu karakter pesan mengubah hash-nya, dan tanda tangan lama langsung tidak cocok.</p>

<div data-demo="tanda-tangan"></div>

<h3>Kenapa pencuri tidak bisa curang</h3>
<p>Andi menandatangani pesan "kirim 0,5 koin ke Budi", yang sidik jarinya <code>9920abe318a7984c…9d2d3c0b</code>. Seorang pencuri bernama Rudi mencegat pesan itu di jaringan dan mencoba berbagai cara:</p>
<table class="tbl">
  <tr><th>Yang dicoba pencuri</th><th>Yang terjadi</th><th>Hasil</th></tr>
  <tr><td>Mengubah jumlah menjadi "kirim <b>50</b> koin ke Budi"</td><td>Sidik jarinya menjadi <code>da2b4cc7ecd34094…bdfdbadd</code>; tanda tangan Andi dibuat untuk sidik jari yang lain</td><td class="bad-cell">Ditolak</td></tr>
  <tr><td>Mengganti penerima menjadi "… ke <b>Rudi</b>"</td><td>Sidik jarinya menjadi <code>721e30684b163d2a…7a4936ae</code></td><td class="bad-cell">Ditolak</td></tr>
  <tr><td>Menempelkan tanda tangan Andi ke transaksi lain</td><td>Tanda tangan itu hanya cocok dengan sidik jari pesan aslinya</td><td class="bad-cell">Ditolak</td></tr>
  <tr><td>Membuat tanda tangan baru atas nama Andi</td><td>Butuh kunci privat Andi, yang tidak pernah dikirim ke mana pun</td><td class="bad-cell">Mustahil</td></tr>
</table>
<div class="callout">
<b>Kuncinya ada di sini:</b> <b>memeriksa</b> cukup dengan kunci publik, tapi <b>membuat</b> tanda tangan wajib dengan kunci privat. Semua orang bisa menjadi pemeriksa; hanya pemilik yang bisa menandatangani.<br><br>
<i>Catatan:</i> transaksi sungguhan bukan kalimat seperti di atas, melainkan data berformat khusus. Tapi prinsipnya sama persis: data itu di-hash, lalu hash-nya yang ditandatangani.
</div>

<h3>Apa yang dibuktikan — dan apa yang tidak</h3>
<table class="tbl">
  <tr><th>✅ Dibuktikan</th><th>❌ Tidak dibuktikan</th></tr>
  <tr><td>Pesan dibuat pemegang kunci privat pasangan kunci publik tersebut</td><td>Siapa nama orang itu di dunia nyata</td></tr>
  <tr><td>Isi pesan tidak berubah sejak ditandatangani</td><td>Bahwa isinya dirahasiakan — tanda tangan tidak menyembunyikan apa pun</td></tr>
  <tr><td>Penanda tangan menyetujui isi pesan itu</td><td>Bahwa penanda tangan tidak sedang ditipu atau dipaksa</td></tr>
</table>

<div class="callout warn">
<b>Baris terakhir itu penting.</b> Banyak pencurian crypto tidak membobol matematika sama sekali: korban dibujuk <b>menandatangani sendiri</b> transaksi yang merugikan. Tanda tangannya sah — karena korban memang menandatanganinya. Tanda tangan membuktikan kamu <i>menyetujui</i>, bukan bahwa kamu <i>paham</i> apa yang disetujui.
</div>

<h3>Kamu sudah sering menandatangani tanpa sadar</h3>
<p>Setiap kali menekan <b>"Konfirmasi"</b> di dompet crypto seperti MetaMask, dompetmu sedang membuat tanda tangan digital. Tapi tidak semua permintaan tanda tangan sama artinya:</p>
<table class="tbl">
  <tr><th>Yang muncul di dompet</th><th>Yang sebenarnya kamu tandatangani</th><th>Risikonya</th></tr>
  <tr><td><b>Kirim / Confirm</b> transaksi</td><td>Perintah memindahkan aset sekarang juga</td><td>Periksa alamat tujuan dan jumlahnya huruf demi huruf</td></tr>
  <tr><td><b>Sign in / Sign message</b> berisi teks yang bisa dibaca</td><td>Bukti bahwa kamu pemilik alamat itu, misalnya untuk login</td><td>Umumnya aman bila teksnya jelas dan situsnya asli</td></tr>
  <tr><td><b>Approve / Permit</b> (izin memakai token)</td><td>Izin bagi sebuah smart contract untuk memindahkan tokenmu <b>kapan saja nanti</b>, kadang tanpa batas jumlah</td><td class="bad-cell">Paling sering disalahgunakan penipu: setelah izin diberikan, token bisa dikuras tanpa meminta tanda tangan lagi</td></tr>
</table>
<div class="callout warn">
<b>Kebiasaan aman:</b> jangan menyetujui apa pun yang tidak kamu pahami; pastikan alamat situsnya benar sebelum menghubungkan dompet; dan cabut izin token lama yang sudah tidak dipakai — banyak dompet dan block explorer menyediakan fitur cabut izin (<i>revoke</i>).
</div>

<h3>Intip matematikanya (versi mainan)</h3>
<p>Bitcoin dan Ethereum memakai ECDSA dengan angka sepanjang 77 digit. Idenya bisa dirasakan dengan <b>versi mainan berangka kecil</b> (pola RSA). Istilah "sisa bagi" artinya sisa setelah pembagian, misalnya 16 sisa bagi 5 = 1.</p>
<table class="tbl">
  <tr><th>Bagian</th><th>Nilai mainan</th></tr>
  <tr><td>Kunci privat Andi</td><td>d = 7</td></tr>
  <tr><td>Kunci publik Andi</td><td>e = 3 dan n = 33</td></tr>
  <tr><td>Hash pesan (disederhanakan)</td><td>4</td></tr>
  <tr><td><b>Menandatangani:</b> 4<sup>7</sup> sisa bagi 33</td><td>16384 sisa bagi 33 = <b>16</b> → tanda tangan</td></tr>
  <tr><td><b>Memeriksa:</b> 16<sup>3</sup> sisa bagi 33</td><td>4096 sisa bagi 33 = <b>4</b> → sama dengan hash pesan → <span class="ok">sah</span></td></tr>
  <tr><td>Pesan diubah sehingga hash-nya 5</td><td>16<sup>3</sup> sisa bagi 33 tetap 4 ≠ 5 → <span class="bad">ditolak</span></td></tr>
</table>
<p>Siapa pun bisa <b>memeriksa</b> hanya dengan e dan n. Tapi untuk <b>membuat</b> tanda tangan yang cocok dengan hash 5, dibutuhkan d = 7. Dengan angka sekecil ini, penyerang tentu bisa menebak d — itulah kenapa angka sungguhan dibuat sepanjang puluhan digit sehingga tebakan mustahil habis dicoba.</p>
`,
          keyPoints: [
            "Tanda tangan digital harus hanya bisa dibuat pemilik, bisa diperiksa semua orang, tidak membocorkan kunci, dan tidak bisa dipindah ke pesan lain.",
            "Berbeda dengan tanda tangan basah, tanda tangan digital berbeda untuk setiap pesan.",
            "Langkahnya: hash pesan → tanda tangani dengan kunci privat (menghasilkan r dan s) → siapa pun memeriksa dengan kunci publik.",
            "Mengubah satu karakter pesan membuat tanda tangan lama tidak cocok, karena yang ditandatangani adalah hash-nya.",
            "Tanda tangan membuktikan persetujuan dan keutuhan pesan, bukan identitas dunia nyata dan bukan kerahasiaan.",
            "Banyak pencurian terjadi karena korban dibujuk menandatangani sendiri transaksi yang merugikan.",
            "Password tidak bisa dipakai karena akan terbaca seluruh jaringan; tanda tangan biasa tidak bisa dipakai karena bentuknya sama di setiap dokumen.",
            "Menekan 'Konfirmasi' di dompet = membuat tanda tangan; izin Approve/Permit paling berbahaya karena bisa dipakai menguras token belakangan.",
          ],
          practice: [
            { type: "number", q: "Versi mainan: kunci privat d = 7, n = 33. Berapa tanda tangan untuk hash pesan 2? (2⁷ sisa bagi 33)", answer: 29, tol: 0.5, hint: "2⁷ = 128. Berapa sisanya bila dibagi 33?", solution: "128 − 3 × 33 = 128 − 99 = 29. Periksa: 29³ = 24389, sisa bagi 33 = 2 — cocok dengan hash pesan." },
          ],
          quiz: [
            {
              q: "Kunci mana yang dipakai untuk MENANDATANGANI transaksi?",
              options: [
                "Private key",
                "Public key",
                "Alamat dompet",
                "ID transaksi",
              ],
              answer: 0,
              explain: "Kunci privat membuat tanda tangan; kunci publik memeriksanya.",
            },
            {
              q: "Apa yang dibuktikan sebuah tanda tangan digital?",
              options: [
                "Penanda tangan memegang kunci privatnya dan pesannya belum diubah",
                "Identitas asli penanda tangan sudah diverifikasi oleh lembaga resmi",
                "Isi pesan sudah dirahasiakan sehingga hanya penerima yang bisa membaca",
                "Penanda tangan pasti memahami seluruh akibat dari pesan yang disetujuinya",
              ],
              answer: 0,
              explain: "Identitas dunia nyata, kerahasiaan, dan pemahaman bukan hal yang dibuktikan tanda tangan.",
            },
            {
              q: "Penyerang menyalin tanda tangan Andi dari transaksi 0,5 koin dan menempelkannya ke transaksi 50 koin. Apa hasilnya?",
              options: [
                "Ditolak, karena tanda tangan hanya cocok untuk hash pesan yang ditandatangani",
                "Diterima, karena tanda tangan Andi tetap sah untuk semua transaksi miliknya",
                "Diterima sebagian, hanya 0,5 koin yang dikirim sesuai tanda tangan aslinya",
                "Ditunda, sampai Andi mengonfirmasi ulang lewat pesan ke seluruh node",
              ],
              answer: 0,
              explain: "Isi berbeda → hash berbeda → tanda tangan lama tidak cocok.",
            },
            {
              q: "Kenapa kunci privat Andi tidak ikut dikirim bersama transaksinya?",
              options: [
                "Karena pemeriksaan cukup memakai kunci publik, dan kunci privat yang terkirim pasti dicuri",
                "Karena ukuran kunci privat terlalu besar untuk dimasukkan ke dalam sebuah blok",
                "Karena kunci privat sudah tersimpan terlebih dahulu di setiap node jaringan",
                "Karena penambang akan menambahkan kunci privat itu saat menyusun blok baru",
              ],
              answer: 0,
              explain: "Seluruh jaringan bisa membaca paket transaksi; yang dikirim hanya tanda tangan dan kunci publik.",
            },
            {
              q: "Sebuah situs meminta kamu menyetujui 'Approve' token tanpa batas jumlah. Apa artinya?",
              options: [
                "Kontrak itu boleh memindahkan tokenmu kapan saja nanti",
                "Situs itu hanya ingin memastikan alamat dompetmu asli",
                "Tokenmu akan dikunci agar tidak bisa dicuri orang lain",
                "Dompetmu akan membuat kunci privat baru yang lebih aman",
              ],
              answer: 0,
              explain: "Approve memberi izin jangka panjang. Penipu sering memakainya untuk menguras token setelah korban menyetujui sekali saja.",
            },
          ],
        },
        {
          id: "bc-tx-1",
          title: "Perjalanan Satu Transaksi — Hash & Tanda Tangan Bekerja Bersama",
          duration: "14 menit",
          content: `
<p>Kamu sudah mengenal tiga alat secara terpisah: <b>hash</b>, <b>kunci</b>, dan <b>tanda tangan</b>. Pelajaran ini menyatukan ketiganya dengan mengikuti perjalanan <b>0,5 koin dari Andi ke Budi</b> — dari layar HP Andi sampai tercatat permanen di blockchain.</p>

<div data-diagram="pipeline" data-stages="Susun::dari, ke, jumlah|Hash::jadi ID transaksi|Tanda tangani::dengan kunci privat|Diperiksa::oleh ribuan node" data-caption="Empat tahap yang terjadi dalam hitungan detik setiap kali kamu menekan Kirim"></div>

<div data-demo="perjalanan-transaksi"></div>

<h3>Empat pemeriksaan node — masing-masing menangkal satu serangan</h3>
<table class="tbl">
  <tr><th>Pemeriksaan</th><th>Menangkal</th></tr>
  <tr><td>Hash kunci publik cocok dengan alamat pengirim</td><td>Mengaku sebagai pemilik alamat orang lain</td></tr>
  <tr><td>Tanda tangan sah untuk isi paket</td><td>Mengubah jumlah atau penerima di tengah jalan</td></tr>
  <tr><td>Saldo pengirim cukup</td><td>Membelanjakan uang yang tidak ada</td></tr>
  <tr><td>Nomor urut atau koin belum pernah terpakai</td><td>Mengirim ulang transaksi lama dan <i>double spending</i></td></tr>
</table>

<div class="callout">
<b>Perhatikan serangan "kirim ulang".</b> Tanda tangannya <b>sah</b> — karena memang tanda tangan asli Andi. Yang menolaknya adalah pemeriksaan keempat. Inilah alasan setiap transaksi Ethereum membawa <b>nomor urut</b> (nonce), dan setiap koin Bitcoin hanya bisa dibelanjakan satu kali.
</div>

<h3>Yang tidak pernah dikirim</h3>
<p>Seluruh isi paket — transaksi, tanda tangan, kunci publik — bisa dibaca siapa pun di jaringan. Yang <b>tidak pernah</b> meninggalkan dompet adalah <b>kunci privat</b> dan <b>seed phrase</b>. Karena itu node, penambang, bahkan penyerang yang menyadap seluruh jaringan tetap tidak bisa membuat transaksi baru atas nama Andi.</p>

<h3>Lalu bagaimana pencurian crypto terjadi?</h3>
<p>Hampir tidak pernah dengan membobol hash atau tanda tangan. Pencuri mengincar <b>manusianya</b>:</p>
<table class="tbl">
  <tr><th>Cara</th><th>Yang sebenarnya terjadi</th></tr>
  <tr><td>Situs atau aplikasi palsu</td><td>Korban mengetik seed phrase di tempat yang salah</td></tr>
  <tr><td>Malware</td><td>Program jahat membaca kunci dari perangkat korban</td></tr>
  <tr><td>Tanda tangan jebakan</td><td>Korban menandatangani transaksi yang ternyata memberi izin menguras dana</td></tr>
  <tr><td>Rekayasa sosial</td><td>Penipu mengaku petugas, teman, atau investor dan membujuk korban mengirim dana</td></tr>
</table>
<p>Pembahasan lengkapnya ada di pelajaran <b>Keamanan &amp; Penipuan yang Sering Terjadi</b>.</p>

<h3>Bitcoin dan Ethereum — sekilas bedanya</h3>
<table class="tbl">
  <tr><th></th><th>Bitcoin</th><th>Ethereum</th></tr>
  <tr><td><b>Cara mencatat dana</b></td><td>"Koin-koin" terpisah yang dibelanjakan utuh, sisanya jadi kembalian (UTXO)</td><td>Saldo per akun, seperti rekening</td></tr>
  <tr><td><b>Anti kirim ulang</b></td><td>Koin yang sudah dibelanjakan tidak bisa dipakai lagi</td><td>Nomor urut (nonce) per akun</td></tr>
  <tr><td><b>Kesamaannya</b></td><td colspan="2">Keduanya memakai hash sebagai ID dan tanda tangan digital sebagai bukti kepemilikan</td></tr>
</table>
`,
          keyPoints: [
            "Satu transaksi melewati empat tahap: disusun, di-hash menjadi ID, ditandatangani dengan kunci privat, lalu diperiksa ribuan node.",
            "Node memeriksa kecocokan kunci publik dengan alamat, keabsahan tanda tangan, kecukupan saldo, dan nomor urut atau koin yang belum terpakai.",
            "Mengubah jumlah atau penerima di tengah jalan membuat tanda tangan tidak cocok.",
            "Mengirim ulang transaksi lama tetap bertanda tangan sah, tetapi ditolak lewat nomor urut (Ethereum) atau koin yang sudah terpakai (Bitcoin).",
            "Kunci privat dan seed phrase tidak pernah dikirim, sehingga menyadap jaringan tidak memungkinkan pemalsuan transaksi.",
            "Pencurian crypto hampir selalu mengincar manusianya: situs palsu, malware, tanda tangan jebakan, dan rekayasa sosial.",
          ],
          quiz: [
            {
              q: "Penyerang mengganti alamat penerima di tengah jalan. Pemeriksaan mana yang menolaknya?",
              options: [
                "Tanda tangan tidak lagi sah untuk isi paket yang sudah berubah",
                "Saldo pengirim tidak cukup untuk menanggung alamat penerima baru",
                "Nomor urut transaksi berubah otomatis ketika penerimanya diganti",
                "Kunci publik pengirim tidak lagi cocok dengan alamat pengirimnya",
              ],
              answer: 0,
              explain: "Isi berubah → hash berubah → tanda tangan Andi tidak cocok lagi.",
            },
            {
              q: "Transaksi lama Andi dikirim ulang persis sama oleh penyerang. Kenapa tanda tangannya tetap sah?",
              options: [
                "Karena isinya tidak diubah sama sekali, sehingga tanda tangan aslinya masih cocok",
                "Karena penyerang berhasil menebak kunci privat Andi dari transaksi sebelumnya",
                "Karena tanda tangan digital memang berlaku untuk semua transaksi seorang pemilik",
                "Karena node tidak memeriksa tanda tangan untuk transaksi yang pernah diterima",
              ],
              answer: 0,
              explain: "Karena itu dibutuhkan pemeriksaan tambahan: nomor urut atau koin yang sudah terpakai.",
            },
            {
              q: "Apa saja yang benar-benar dikirim ke jaringan?",
              options: [
                "Isi transaksi, tanda tangan, dan kunci publik",
                "Isi transaksi, kunci privat, dan seed phrase",
                "Tanda tangan dan kunci privat yang dienkripsi",
                "Seed phrase dan alamat penerima saja",
              ],
              answer: 0,
              explain: "Kunci privat dan seed phrase tidak pernah meninggalkan dompet.",
            },
            {
              q: "Seorang korban kehilangan dana setelah menandatangani transaksi di situs palsu. Apa yang sebenarnya terjadi?",
              options: [
                "Korban sendiri menandatangani transaksi yang merugikan, jadi tanda tangannya sah",
                "Penipu membobol fungsi hash sehingga tanda tangan palsu dianggap sah",
                "Penambang bekerja sama dengan penipu untuk mengubah isi transaksi korban",
                "Blockchain mengalami gangguan sehingga pemeriksaan tanda tangan terlewat",
              ],
              answer: 0,
              explain: "Matematikanya tetap aman; yang ditipu adalah manusianya.",
            },
          ],
        },
        {
          id: "bc-fund-3",
          title: "Merkle Tree — Satu Hash untuk Ribuan Transaksi",
          duration: "12 menit",
          content: `
<p>Satu blok Bitcoin bisa berisi lebih dari 2.000 transaksi, sementara header bloknya hanya 80 byte. Bagaimana ribuan transaksi itu bisa "disegel" dengan satu sidik jari kecil — dan bagaimana HP bisa memastikan transaksinya ada di dalam blok tanpa mengunduh semuanya?</p>

<h3>Fundamental: bagan turnamen</h3>
<div class="callout">
<b>Bayangkan bagan turnamen sistem gugur.</b> Delapan tim bertanding berpasangan, pemenangnya naik, berpasangan lagi, sampai tersisa satu juara di puncak.<br><br>
<b>Merkle tree</b> bekerja dengan bentuk yang sama, hanya saja yang "naik" adalah hash:<br>
1. Setiap transaksi di-hash<br>
2. Hash-hash itu dipasangkan, lalu setiap pasangan di-hash bersama<br>
3. Diulang naik sampai tersisa satu hash di puncak: <b>Merkle root</b>
</div>

<div data-demo="pohon-merkle"></div>

<h3>Kenapa tidak di-hash sekaligus saja?</h3>
<p>Bisa saja semua transaksi digabung lalu di-hash sekali. Hasilnya juga menyegel semuanya. Masalahnya muncul saat seseorang ingin <b>membuktikan satu transaksi</b> ada di dalam blok: ia harus menunjukkan <b>seluruh</b> transaksi lain agar hash-nya bisa dihitung ulang.</p>
<p>Dengan Merkle tree, cukup menunjukkan hash "tetangga" di sepanjang jalur menuju puncak:</p>
<table class="tbl">
  <tr><th>Transaksi dalam blok</th><th>Hash yang dibutuhkan untuk bukti</th></tr>
  <tr><td>4</td><td>2</td></tr>
  <tr><td>1.000</td><td>10</td></tr>
  <tr><td>1.000.000</td><td>20</td></tr>
  <tr><td>1.000.000.000</td><td>30</td></tr>
</table>
<p>Setiap kali jumlah transaksi menjadi dua kali lipat, bukti hanya bertambah <b>satu</b> hash.</p>

<h3>Isi sebuah blok</h3>
<table class="tbl">
  <tr><th>Bagian</th><th>Isinya</th><th>Fungsinya</th></tr>
  <tr><td rowspan="4"><b>Header</b> (kecil)</td><td>Hash blok sebelumnya</td><td>Menyambung ke rantai</td></tr>
  <tr><td>Merkle root</td><td>Menyegel semua transaksi</td></tr>
  <tr><td>Waktu</td><td>Kapan blok dibuat</td></tr>
  <tr><td>Nonce &amp; target</td><td>Bukti kerja penambang</td></tr>
  <tr><td><b>Badan</b> (besar)</td><td>Daftar transaksi</td><td>Isi yang disegel oleh Merkle root</td></tr>
</table>

<div class="callout">
<b>Dompet ringan (SPV).</b> Menyimpan seluruh blockchain Bitcoin butuh ratusan gigabyte. Dompet di HP cukup menyimpan <b>header</b> semua blok — hanya puluhan megabyte — lalu meminta bukti Merkle untuk transaksi miliknya. Dengan beberapa hash saja, HP bisa memastikan sendiri bahwa transaksinya benar-benar tercatat.
</div>

<div class="callout warn">
<b>Catatan jujur:</b> demo di atas menyederhanakan beberapa hal. Bitcoin menggabungkan hash dalam bentuk byte (bukan teks) dan memakai SHA-256 dua kali; bila jumlah transaksi ganjil, hash terakhir dipasangkan dengan dirinya sendiri. Prinsipnya tetap sama persis.
</div>
`,
          keyPoints: [
            "Merkle tree meng-hash transaksi berpasangan berulang kali seperti bagan turnamen sampai tersisa satu Merkle root.",
            "Merkle root di header blok menyegel semua transaksi; mengubah satu transaksi mengubah jalurnya sampai ke root.",
            "Membuktikan satu transaksi ada di blok hanya butuh hash tetangga di sepanjang jalur: 20 hash untuk sejuta transaksi.",
            "Header blok berisi hash blok sebelumnya, Merkle root, waktu, dan nonce/target; badannya berisi daftar transaksi.",
            "Dompet ringan (SPV) cukup menyimpan header dan meminta bukti Merkle, tanpa mengunduh seluruh blockchain.",
          ],
          practice: [
            { type: "number", q: "Sebuah blok berisi 16 transaksi. Berapa hash yang dibutuhkan untuk membuktikan satu transaksi ada di dalamnya?", answer: 4, tol: 0.5, hint: "Berapa kali 2 dikalikan dirinya sendiri sampai menjadi 16?", solution: "16 = 2⁴, jadi dibutuhkan 4 hash tetangga." },
          ],
          quiz: [
            {
              q: "Apa itu Merkle root?",
              options: [
                "Satu hash puncak yang mewakili seluruh transaksi di dalam blok",
                "Transaksi pertama di setiap blok yang berisi hadiah penambang",
                "Hash blok paling awal yang menjadi fondasi seluruh blockchain",
                "Daftar alamat dompet yang pernah menerima dana di dalam blok",
              ],
              answer: 0,
              explain: "Karena tersimpan di header, satu hash ini menyegel ribuan transaksi sekaligus.",
            },
            {
              q: "Manfaat utama Merkle tree?",
              options: [
                "Memverifikasi satu transaksi tanpa perlu mengunduh seluruh data blok",
                "Mempercepat penambangan dengan membagi transaksi ke beberapa penambang",
                "Menyembunyikan isi transaksi agar hanya pengirim yang bisa membacanya",
                "Mengurangi biaya transaksi dengan menggabungkan beberapa pengiriman",
              ],
              answer: 0,
              explain: "Inilah yang memungkinkan dompet ringan di HP.",
            },
            {
              q: "Satu transaksi di sebuah blok diubah. Apa yang terjadi pada Merkle tree-nya?",
              options: [
                "Hash transaksi itu, hash gabungan di atasnya, dan Merkle root ikut berubah",
                "Hanya hash transaksi itu yang berubah, hash lain tetap sama seperti semula",
                "Seluruh hash di pohon dihitung ulang tetapi Merkle root dijaga tetap sama",
                "Tidak ada yang berubah karena Merkle tree hanya dihitung saat blok dibuat",
              ],
              answer: 0,
              explain: "Perubahan merambat sepanjang jalur sampai ke puncak, sehingga root di header tidak lagi cocok.",
            },
            {
              q: "Jumlah transaksi dalam blok naik dari 1.000 menjadi 2.000. Bagaimana ukuran bukti Merkle-nya?",
              options: [
                "Bertambah hanya satu hash",
                "Menjadi dua kali lebih besar",
                "Bertambah seribu hash",
                "Tidak berubah sama sekali",
              ],
              answer: 0,
              explain: "Setiap penggandaan jumlah transaksi hanya menambah satu tingkat pada pohon.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 5: KONSENSUS, PENAMBANGAN & DOMPET ---------------- */
    {
      id: "bc-pendalaman",
      level: "Pendalaman",
      title: "Konsensus, Penambangan & Dompet",
      summary: "Cara jaringan sepakat (PoW vs PoS), cara kerja penambangan, pasokan 21 juta & halving, dan mengamankan dompet.",
      lessons: [
        {
          id: "bc-a-1",
          title: "Konsensus: PoW vs PoS",
          duration: "11 menit",
          content: `
<p>Bagaimana ribuan komputer yang tak saling kenal sepakat soal transaksi mana yang sah? Lewat <b>mekanisme konsensus</b>. Dua yang utama:</p>

<h3>Proof of Work (PoW)</h3>
<p>Dipakai Bitcoin. Komputer ("penambang"/miner) berlomba memecahkan teka-teki matematika rumit. Yang pertama berhasil boleh menambah blok & dapat hadiah.</p>
<ul>
  <li>👍 Sangat aman & teruji.</li>
  <li>👎 Boros energi listrik.</li>
</ul>

<h3>Proof of Stake (PoS)</h3>
<p>Dipakai Ethereum (sejak 2022). Alih-alih menambang, peserta ("validator") <b>mengunci</b> sejumlah koin sebagai jaminan (stake). Sistem memilih validator untuk memvalidasi blok; yang curang kehilangan jaminannya.</p>
<ul>
  <li>👍 Hemat energi (~99% lebih efisien dari PoW).</li>
  <li>👎 Berpotensi menguntungkan pemilik koin besar.</li>
</ul>

<div data-diagram="pow-vs-pos"></div>

<div class="callout">
<b>Inti keduanya:</b> membuat kecurangan jadi sangat mahal/tak menguntungkan. Di PoW kamu buang listrik; di PoS kamu pertaruhkan koin.
</div>
`,
          keyPoints: [
            "Konsensus = cara jaringan sepakat tanpa otoritas pusat.",
            "PoW: lomba komputasi (Bitcoin), aman tapi boros energi.",
            "PoS: kunci koin sebagai jaminan (Ethereum), hemat energi.",
          ],
          quiz: [
            {
              q: "Apa kelemahan utama Proof of Work?",
              options: [
                "Memerlukan konsumsi energi listrik yang sangat besar",
                "Hanya bisa dijalankan perusahaan yang sudah mendapatkan izin",
                "Membuat transaksi bisa dibatalkan penambang kapan saja",
                "Membatasi jumlah pengguna yang boleh bergabung ke jaringan",
              ],
              answer: 0,
              explain:
                "PoW butuh komputasi besar sehingga sangat boros energi.",
            },
            {
              q: "Pada Proof of Stake, validator dipilih berdasarkan?",
              options: [
                "Jumlah koin yang dikunci sebagai jaminan (stake)",
                "Kecepatan perangkat keras yang dimiliki calon validator",
                "Lamanya seseorang sudah bergabung dengan jaringan itu",
                "Hasil pemungutan suara seluruh pengguna pada tiap blok",
              ],
              answer: 0,
              explain:
                "Stake (koin yang dipertaruhkan) menjadi dasar partisipasi & jaminan kejujuran.",
            },
          ],
        },
        {
          id: "bc-deep-2",
          title: "Cara Kerja Penambangan (Mining)",
          duration: "11 menit",
          content: `
<p>"Menambang Bitcoin" bukan menggali tanah. Mari pahami apa yang sebenarnya dilakukan komputer penambang, dari dasar.</p>

<div data-diagram="cycle" data-steps="Kumpulkan transaksi|Tebak angka nonce|Hitung hash|Periksa jumlah nol" data-center="jutaan kali per detik" data-caption="Menambang bukan memecahkan teka-teki pintar — ini menebak berulang kali"></div>


<h3>Fundamental: menambang = menebak angka</h3>
<p>Ingat <b>fungsi hash</b> (sidik jari digital). Menambang pada dasarnya adalah <b>lomba menebak</b>: komputer mencoba jutaan angka (disebut <b>nonce</b>) sampai menemukan satu yang membuat hash blok memenuhi <b>syarat khusus</b> (mis. diawali sekian angka nol).</p>

<div class="callout">
<b>Kenapa harus menebak?</b> Karena hash tak bisa dibalik, satu-satunya cara menemukan angka yang cocok adalah <b>coba-coba</b> berulang kali. Ini butuh banyak <b>komputasi & listrik</b> — itulah "kerja" dalam <b>Proof of Work</b>.
</div>

<h3>Siapa menang, dapat apa?</h3>
<ul>
  <li>Penambang <b>pertama</b> yang menemukan angka cocok boleh menambahkan blok baru.</li>
  <li>Sebagai imbalan, ia mendapat <b>Bitcoin baru</b> + biaya transaksi.</li>
  <li>Jaringan otomatis menyesuaikan <b>tingkat kesulitan</b> agar rata-rata satu blok tetap ~10 menit, berapa pun jumlah penambang.</li>
</ul>

<div class="callout">
<b>Kenapa ini mengamankan jaringan?</b> Untuk memalsukan riwayat, penyerang harus mengulang "kerja" komputasi lebih cepat dari seluruh jaringan jujur — praktis mustahil & sangat mahal. Biaya inilah yang menjaga Bitcoin aman.
</div>

<div data-demo="mining-sim"></div>
`,
          keyPoints: [
            "Menambang = lomba menebak angka (nonce) sampai hash blok memenuhi syarat sulit.",
            "Karena hash tak bisa dibalik, satu-satunya cara adalah coba-coba (butuh komputasi & listrik) = Proof of Work.",
            "Penambang pertama yang berhasil menambah blok & dapat Bitcoin baru + biaya transaksi.",
            "Kesulitan menyesuaikan otomatis (~10 menit/blok); biaya komputasi inilah yang mengamankan jaringan.",
          ],
          quiz: [
            {
              q: "Pada intinya, apa yang dilakukan komputer penambang?",
              options: [
                "Mencoba jutaan angka nonce sampai hash bloknya memenuhi syarat",
                "Memecahkan soal matematika rumit yang disusun pengembang jaringan",
                "Memeriksa satu per satu saldo seluruh alamat yang ada di jaringan",
                "Mengenkripsi transaksi agar isinya tidak bisa dibaca pihak lain",
              ],
              answer: 0,
              explain: "Menambang = coba-coba menemukan nonce yang membuat hash memenuhi target.",
            },
            {
              q: "Mengapa Proof of Work mengamankan jaringan?",
              options: [
                "Memalsukan riwayat menuntut daya komputasi melebihi seluruh jaringan jujur",
                "Setiap transaksi diperiksa langsung oleh lembaga pengawas independen",
                "Data yang sudah tercatat langsung dienkripsi sehingga tak bisa dibuka",
                "Penambang yang berbuat curang langsung dikeluarkan oleh pengembang",
              ],
              answer: 0,
              explain: "Biaya komputasi yang besar membuat pemalsuan tak menguntungkan.",
            },
          ],
        },
        {
          id: "bc-deep-1",
          title: "Bitcoin Mendalam: 21 Juta & Halving",
          duration: "11 menit",
          content: `
<p>Kenapa Bitcoin sering disebut "emas digital"? Jawabannya ada pada <b>kebijakan moneter</b>-nya yang unik. Mari pahami dari dasar.</p>

<div data-diagram="timeline" data-events="2009::50 BTC per blok|2012::25 BTC|2016::12,5 BTC|2020::6,25 BTC|2024::3,125 BTC" data-caption="Setiap ~4 tahun imbalan penambang dipotong separuh — inilah halving"></div>


<h3>Fundamental: kelangkaan menciptakan nilai</h3>
<p>Uang biasa (rupiah, dolar) bisa <b>dicetak lebih banyak</b> oleh bank sentral. Kalau dicetak berlebihan, nilainya turun (<b>inflasi</b>) — harga-harga naik. Bitcoin dirancang sebaliknya: <b>pasokannya dibatasi</b>.</p>

<div class="callout">
<b>Aturan besi Bitcoin:</b> hanya akan pernah ada <b>21 juta</b> Bitcoin, selamanya. Tidak ada yang bisa mencetak lebih. Kelangkaan ini disengaja agar mirip emas (yang jumlahnya juga terbatas).
</div>

<h3>Halving: rem pasokan tiap ~4 tahun</h3>
<p>Bitcoin baru "lahir" sebagai imbalan bagi penambang. <b>Halving</b> adalah aturan: setiap ~4 tahun, imbalan itu <b>dibagi dua</b>. Jadi laju kelahiran Bitcoin baru terus melambat sampai akhirnya berhenti (mendekati tahun 2140).</p>
<ul>
  <li>Awalnya 50 BTC per blok → 25 → 12,5 → 6,25 → ... terus separuh.</li>
</ul>

<div class="callout">
<b>Dampak:</b> pasokan yang terbatas & bisa <b>diprediksi</b> membuat Bitcoin tahan inflasi buatan — tidak ada otoritas yang bisa "mencetak" seenaknya. Inilah daya tarik utamanya sebagai penyimpan nilai.
</div>

<div class="callout warn">
<b>Catatan:</b> pasokan terbatas ≠ harga selalu naik. Harga tetap sangat fluktuatif & berisiko. Ini edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Uang biasa bisa dicetak berlebih → inflasi; Bitcoin dibatasi 21 juta selamanya (kelangkaan disengaja).",
            "Halving: imbalan penambang dibagi dua tiap ~4 tahun, melambatkan laju pasokan baru.",
            "Dampak: pasokan terbatas & bisa diprediksi → tahan inflasi buatan (mirip emas).",
            "Pasokan terbatas tidak menjamin harga naik; tetap fluktuatif & berisiko.",
          ],
          quiz: [
            {
              q: "Berapa batas maksimal Bitcoin yang akan pernah ada?",
              options: ["Tak terbatas", "21 juta", "100 juta", "1 miliar"],
              answer: 1,
              explain: "Pasokan Bitcoin dibatasi 21 juta koin selamanya.",
            },
            {
              q: "Apa itu 'halving'?",
              options: [
                "Imbalan penambang dipotong setengah setiap sekitar empat tahun",
                "Harga Bitcoin dipotong setengah mengikuti jadwal protokolnya",
                "Jumlah maksimal Bitcoin dikurangi separuh dari rencana awal",
                "Waktu pembuatan satu blok dipercepat menjadi setengahnya",
              ],
              answer: 0,
              explain: "Halving memangkas imbalan blok jadi separuh secara berkala.",
            },
          ],
        },
        {
          id: "bc-deep-3",
          title: "Jenis Dompet & Keamanan Mendalam",
          duration: "11 menit",
          content: `
<p>Di crypto, <b>kamu adalah bankmu sendiri</b> — kebebasan besar sekaligus tanggung jawab besar. Memahami jenis dompet menentukan seberapa aman asetmu.</p>

<div data-diagram="compare3" data-cols="Dompet panas::selalu tersambung internet::untuk belanja harian|Dompet dingin::offline, hardware::untuk simpanan besar|Titip di bursa::kunci dipegang bursa::bukan sepenuhnya milikmu" data-caption="Bukan kuncimu, bukan koinmu"></div>


<h3>Custodial vs Non-Custodial (siapa pegang kunci?)</h3>
<table class="tbl">
  <tr><th>Custodial</th><th>Non-Custodial</th></tr>
  <tr><td>Pihak lain (mis. exchange) memegang private key-mu</td><td>Kamu sendiri memegang private key</td></tr>
  <tr><td>Praktis, tapi "bukan kuncimu, bukan koinmu"</td><td>Kontrol penuh, tapi 100% tanggung jawabmu</td></tr>
</table>

<h3>Hot vs Cold (terhubung internet atau tidak?)</h3>
<ul>
  <li><b>Hot wallet</b> — aplikasi di HP/browser, terhubung internet. Praktis untuk transaksi harian, tapi lebih rentan.</li>
  <li><b>Cold wallet</b> — <b>offline</b>, mis. <b>hardware wallet</b> (perangkat khusus). Paling aman untuk simpanan besar/jangka panjang.</li>
</ul>

<h3>Kebiasaan aman (wajib!)</h3>
<ol>
  <li>Simpan <b>seed phrase</b> (12–24 kata) secara <b>offline</b> — jangan difoto/diketik online.</li>
  <li>Untuk dana besar, pakai <b>cold/hardware wallet</b>.</li>
  <li>Pertimbangkan <b>multisig</b> (butuh beberapa kunci untuk transaksi) untuk keamanan ekstra.</li>
  <li>Waspada phishing: <b>jangan pernah</b> masukkan seed phrase di situs mana pun.</li>
</ol>
`,
          keyPoints: [
            "Custodial = pihak lain pegang kunci (praktis); Non-custodial = kamu pegang kunci (kontrol penuh, tanggung jawab penuh).",
            "Hot wallet online (praktis, rentan); Cold/hardware wallet offline (paling aman untuk simpanan besar).",
            "Simpan seed phrase offline; pakai cold wallet untuk dana besar; pertimbangkan multisig.",
            "Jangan pernah memasukkan seed phrase di situs mana pun (phishing).",
          ],
          quiz: [
            {
              q: "Apa itu dompet 'cold'?",
              options: [
                "Dompet yang kuncinya disimpan offline, paling aman untuk simpanan besar",
                "Dompet yang lama tidak dipakai sehingga dibekukan oleh jaringan",
                "Dompet yang hanya bisa menerima dana tetapi tidak bisa mengirim",
                "Dompet milik bursa yang saldonya dijamin lembaga penjamin",
              ],
              answer: 0,
              explain: "Cold wallet tidak terhubung internet sehingga jauh lebih aman.",
            },
            {
              q: "Arti 'non-custodial'?",
              options: [
                "Kunci privat dipegang sendiri, jadi kendali dan tanggung jawab ada padamu",
                "Dompet tersebut tidak memungut biaya apa pun dari para penggunanya",
                "Dana disimpan bursa tetapi bisa ditarik kapan saja tanpa izin",
                "Dompet itu tidak terhubung internet sehingga aman dari peretas",
              ],
              answer: 0,
              explain: "Non-custodial berarti kunci ada padamu — kendali penuh, risiko penuh.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 6: MATEMATIKA BITCOIN: KUNCI, PENAMBANGAN & PASOKAN ---------------- */
    {
      id: "bc-matematika",
      level: "Matematika",
      title: "Matematika Bitcoin: Kunci, Penambangan & Pasokan",
      summary: "Isi matematika Bitcoin dengan angka kecil yang bisa dihitung sendiri: peta tujuh bagiannya, modulo, kurva eliptik y² = x³ + 7, peluang menambang, penyesuaian kesulitan, deret 21 juta, dan rumus konfirmasi dari whitepaper.",
      lessons: [
        {
          id: "bc-mat-intro",
          title: "Untuk Apa Belajar Matematika di Crypto?",
          duration: "12 menit",
          content: `
<p>Di dunia keuangan biasa, yang menjaga uangmu adalah <b>lembaga</b>: bank, otoritas, dan hukum. Di crypto, penjaganya diganti oleh <b>matematika</b>. Karena itu pertanyaan "buat apa belajar rumusnya?" punya jawaban yang tidak berlaku di bidang lain: <b>rumus itulah pengganti satpam, brankas, dan notarisnya</b>.</p>

<div data-diagram="pipeline" data-stages="Simbol::agar rumus terbaca|Modulo::kenapa kunci aman|Peluang::risiko penambangan|Rumus AMM::untung-rugi di DeFi" data-caption="Empat bekal matematika di jalur ini, dan kegunaannya masing-masing"></div>

<h3>Tiga tingkat, tiga kebutuhan</h3>
<table class="tbl">
  <tr><th>Kamu ingin…</th><th>Yang perlu dipahami</th><th>Tanpa itu kamu berisiko…</th></tr>
  <tr><td><b>Menyimpan &amp; mengirim koin</b></td><td>Urutan besar angka (kenapa kunci tidak bisa ditebak) dan peluang dasar</td><td>Percaya pada janji "pasti untung", atau panik oleh isu teknis yang sebenarnya tidak berdasar</td></tr>
  <tr><td><b>Menilai proyek sebelum ikut</b></td><td>Persen, bunga majemuk, dilusi token, slippage &amp; impermanent loss</td><td>Tertipu angka imbal hasil besar yang sebenarnya dibayar dari emisi token</td></tr>
  <tr><td><b>Membangun atau mengaudit sistem</b></td><td>Aritmetika modulo, fungsi satu arah, kurva eliptik</td><td>Menulis kode yang tampak jalan tapi bocor keamanannya</td></tr>
</table>

<div class="callout">
<b>Modul ini menyasar dua tingkat pertama.</b> Tujuannya bukan membuatmu bisa membuat algoritma kriptografi sendiri — itu pekerjaan yang sangat khusus dan sebaiknya tidak dilakukan sendirian. Tujuannya agar kamu <b>tahu apa yang menjaga uangmu</b>, dan bisa membedakan janji yang masuk akal dari yang mustahil.
</div>

<h3>Lima saat matematika benar-benar menyelamatkanmu</h3>
<table class="tbl">
  <tr><th>Pertanyaan atau kejadian</th><th>Jawabannya ada di matematika</th><th>Bekalnya</th></tr>
  <tr><td>"Kunci publikku dilihat semua orang. Kenapa kunci privatku tetap aman?"</td><td>Menghitungnya hanya mudah satu arah, dan jumlah kemungkinannya sekitar 10⁷⁷</td><td>Fungsi satu arah</td></tr>
  <tr><td>"Platform ini menjanjikan imbal hasil 1% per hari"</td><td>Itu berarti sekitar 38 kali lipat dalam setahun — tanyakan dari mana uangnya</td><td>Bunga majemuk</td></tr>
  <tr><td>"Aku menyediakan likuiditas, harga malah naik, tapi aset saya berkurang"</td><td>Rumus x · y = k memaksa komposisi asetmu berubah saat harga bergerak</td><td>Rumus AMM</td></tr>
  <tr><td>"Seberapa mungkin jaringan ini diserang 51%?"</td><td>Peluang dan biaya menyewa daya komputasi bisa dihitung, tidak perlu ditebak</td><td>Peluang</td></tr>
  <tr><td>"Kenapa harga yang kudapat berbeda dari yang tertulis?"</td><td>Makin besar transaksimu dibanding kolam likuiditas, makin besar selisihnya</td><td>Slippage</td></tr>
</table>

<div class="callout warn">
<b>Penipuan crypto hampir selalu punya cacat matematis.</b> Janji imbal hasil tetap yang tinggi, "bunga harian", atau skema yang membayar peserta lama dari uang peserta baru — semuanya runtuh begitu angkanya dihitung sampai akhir. Kemampuan menghitung sederhana melindungi lebih banyak orang daripada kemampuan membaca kode.
</div>

<h3>Yang TIDAK perlu kamu lakukan</h3>
<table class="tbl">
  <tr><th>Tidak perlu</th><th>Alasannya</th></tr>
  <tr><td>Menghafal rumus ECDSA</td><td>Dompet sudah menjalankannya; yang penting kamu paham sifatnya</td></tr>
  <tr><td>Menghitung modulo bilangan raksasa dengan tangan</td><td>Contoh berangka kecil sudah cukup untuk memahami idenya</td></tr>
  <tr><td>Membuat kurva atau algoritma kriptografi sendiri</td><td>Standar yang dipakai dunia sudah diuji puluhan tahun — membuat sendiri justru berbahaya</td></tr>
</table>

<h3>Peta bekal matematika di jalur ini</h3>
<table class="tbl">
  <tr><th>Pelajaran</th><th>Membuat kamu paham…</th></tr>
  <tr><td><b>Membaca Simbol Matematika Kripto</b></td><td>Arti mod, pangkat, dan simbol lain yang muncul di penjelasan teknis</td></tr>
  <tr><td><b>Aritmetika Modulo &amp; Fungsi Satu Arah</b></td><td>Kenapa kunci publik boleh dibagikan tanpa membahayakan kunci privat</td></tr>
  <tr><td><b>Peluang Penambangan &amp; Serangan 51%</b></td><td>Kenapa menambang itu lotere, dan kapan sebuah jaringan benar-benar rawan</td></tr>
  <tr><td><b>Matematika AMM</b> (di modul DeFi)</td><td>Dari mana slippage dan impermanent loss berasal</td></tr>
</table>

<div class="callout">
<b>Kalau waktumu terbatas, dahulukan dua hal:</b> <b>bunga majemuk</b> (untuk menilai janji imbal hasil) dan <b>urutan besar angka</b> (untuk paham kenapa kunci aman). Dua hal ini saja sudah menutup sebagian besar risiko yang dihadapi pemula di crypto.
</div>
`,
          keyPoints: [
            "Di crypto, matematika menggantikan peran lembaga: ia yang menjaga kepemilikan dan aturan.",
            "Pemakai biasa cukup paham urutan besar angka dan peluang; penilai proyek butuh persen, bunga majemuk, dilusi, dan rumus AMM.",
            "Membuat algoritma kriptografi sendiri berbahaya — standar yang sudah teruji jauh lebih aman.",
            "Janji imbal hasil tetap yang tinggi biasanya runtuh begitu dihitung dengan bunga majemuk.",
            "Slippage dan impermanent loss berasal dari rumus x · y = k, bukan dari kecurangan bursa.",
            "Prioritas bagi pemula: bunga majemuk dan urutan besar angka.",
          ],
          practice: [
            { type: "number", q: "Sebuah platform menjanjikan imbal hasil 1% per hari (berbunga majemuk). Kira-kira menjadi berapa kali lipat dalam 365 hari?", answer: 37.8, tol: 1.5, hint: "1,01 dipangkatkan 365.", solution: "1,01³⁶⁵ ≈ 37,8 kali lipat. Uang Rp1 juta menjadi hampir Rp38 juta dalam setahun — pertanyaan wajibnya: dari mana uang sebanyak itu berasal?" },
            { type: "choice", q: "Sebuah proyek menjanjikan 'imbal hasil tetap 3% per bulan, tanpa risiko'. Apa pertanyaan pertama yang paling tepat?", options: ["Dari mana pendapatan untuk membayarnya?", "Berapa minimal setoran awalnya?", "Apakah situsnya terlihat profesional?"], answer: 0, hint: "Imbal hasil harus datang dari suatu sumber pendapatan.", solution: "3% per bulan berarti sekitar 42% setahun. Kalau uangnya tidak berasal dari pendapatan nyata, ia hanya bisa berasal dari setoran peserta baru." },
          ],
          quiz: [
            {
              q: "Kenapa matematika lebih menentukan di crypto dibanding di perbankan biasa?",
              options: [
                "Karena matematika menggantikan peran lembaga yang biasanya menjaga uang dan aturan",
                "Karena semua pengguna crypto diwajibkan menghitung transaksinya secara manual",
                "Karena harga aset crypto ditentukan oleh rumus resmi yang ditetapkan pemerintah",
                "Karena dompet crypto menolak bekerja bila penggunanya belum belajar matematika",
              ],
              answer: 0,
              explain: "Tidak ada bank atau otoritas yang menjamin; jaminannya adalah sifat matematis kuncinya.",
            },
            {
              q: "Mana yang TIDAK perlu dikuasai pemakai crypto biasa?",
              options: [
                "Merancang algoritma kriptografi sendiri",
                "Memahami bahwa jumlah kemungkinan kunci sangat besar",
                "Menghitung imbal hasil dengan bunga majemuk",
                "Memahami bahwa transaksi besar menimbulkan slippage",
              ],
              answer: 0,
              explain: "Membuat kriptografi sendiri justru berbahaya; standar yang teruji jauh lebih aman.",
            },
            {
              q: "Sebuah platform menjanjikan 1% per hari. Kesimpulan matematis yang tepat?",
              options: [
                "Itu sekitar 38 kali lipat setahun, sehingga sumber dananya wajib dipertanyakan",
                "Itu hanya 365% setahun, angka yang biasa dalam investasi berisiko tinggi",
                "Itu aman selama platformnya membayar tepat waktu selama beberapa bulan",
                "Itu mustahil dihitung karena imbal hasil harian tidak bisa dijumlahkan",
              ],
              answer: 0,
              explain: "Bunga majemuk membuat angka harian kecil menjadi sangat besar dalam setahun.",
            },
            {
              q: "Kamu menyediakan likuiditas di AMM, harga token naik, tapi nilai asetmu tertinggal dibanding sekadar menyimpannya. Konsep apa itu?",
              options: [
                "Impermanent loss, akibat rumus x · y = k yang mengubah komposisi asetmu",
                "Slippage, akibat transaksimu terlalu besar dibanding kolam likuiditas",
                "Dilusi token, akibat proyek menerbitkan token baru terus-menerus",
                "Serangan 51%, akibat penambang menguasai mayoritas daya komputasi",
              ],
              answer: 0,
              explain: "Kolam otomatis menjual token yang naik dan membeli yang turun demi menjaga hasil kali tetap.",
            },
          ],
        },
        {
          id: "bc-btcm-1",
          title: "Peta Matematika Bitcoin — Tujuh Bagian yang Menjaga Semuanya",
          duration: "12 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Hash</b> adalah sidik jari data: data berubah sedikit, sidik jarinya berubah total (<a href="#/lesson/bc-fund-1">Hash dari Nol</a>). <b>Kunci privat</b> adalah angka rahasia; <b>kunci publik</b> dibuat darinya dan boleh dibagikan (<a href="#/lesson/bc-kunci-1">Kunci Privat, Kunci Publik &amp; Alamat</a>).
</div>

<p>Bitcoin tidak dijaga satpam, bank, atau pemerintah. Yang menjaganya adalah <b>matematika</b>. Kedengarannya rumit, tapi isinya bisa dipetakan menjadi <b>tujuh bagian</b>, dan setiap bagian menjawab satu pertanyaan sederhana.</p>

<div data-diagram="network" data-center="Bitcoin" data-nodes="Hash SHA-256|Kurva eliptik|Tanda tangan|Merkle tree|Proof of Work|Deret 21 juta|Peluang konfirmasi" data-caption="Tujuh bagian matematika di dalam Bitcoin"></div>

<h3>Tujuh bagian, tujuh pertanyaan</h3>
<table class="tbl">
  <tr><th>Bagian</th><th>Pertanyaan yang dijawab</th><th>Matematikanya</th></tr>
  <tr><td><b>1. Hash SHA-256</b></td><td>Bagaimana tahu data tidak diubah?</td><td>Fungsi satu arah dengan 2<sup>256</sup> kemungkinan hasil (<a href="#/lesson/bc-fund-1">pelajaran</a>)</td></tr>
  <tr><td><b>2. Kurva eliptik</b></td><td>Bagaimana kunci publik dibuat dari kunci privat tanpa bisa dibalik?</td><td>y² = x³ + 7 (mod p) dan K = k × G (<a href="#/lesson/bc-btcm-2">pelajaran</a>)</td></tr>
  <tr><td><b>3. Tanda tangan</b></td><td>Bagaimana membuktikan pemilik tanpa membuka kunci privat?</td><td>ECDSA dan Schnorr, dihitung di atas kurva yang sama (<a href="#/lesson/bc-kri-2">pelajaran</a>)</td></tr>
  <tr><td><b>4. Merkle tree</b></td><td>Bagaimana membuktikan satu transaksi ada di antara ribuan?</td><td>Hash berpasangan; cukup sekitar log₂(n) hash sebagai bukti (<a href="#/lesson/bc-fund-3">pelajaran</a>)</td></tr>
  <tr><td><b>5. Proof of Work</b></td><td>Siapa yang berhak menulis blok berikutnya?</td><td>Hash blok harus lebih kecil dari angka target; peluangnya bisa dihitung (<a href="#/lesson/bc-mat-2">pelajaran</a>)</td></tr>
  <tr><td><b>6. Jadwal &amp; pasokan</b></td><td>Bagaimana blok tetap ~10 menit dan koin tidak lewat 21 juta?</td><td>Penyesuaian kesulitan dan deret 50 + 25 + 12,5 + … (<a href="#/lesson/bc-btcm-3">pelajaran</a>)</td></tr>
  <tr><td><b>7. Peluang konfirmasi</b></td><td>Berapa lama menunggu sampai transaksi aman?</td><td>Distribusi Poisson dan rumus "mengejar ketertinggalan" (<a href="#/lesson/bc-btcm-4">pelajaran</a>)</td></tr>
</table>

<h3>Bagaimana ketujuhnya bekerja bersama</h3>
<div data-diagram="pipeline" data-stages="Kunci::kurva eliptik membuat kunci publik &amp; alamat|Tanda tangan::membuktikan kamu pemilik koinnya|Blok::transaksi diikat Merkle tree|Menambang::Proof of Work memilih penulis blok|Menunggu::peluang konfirmasi menentukan aman" data-caption="Perjalanan satu transaksi melewati hampir semua bagian matematika Bitcoin"></div>

<h3>Angka raksasa: 2<sup>256</sup></h3>
<p>Hash SHA-256 dan kunci Bitcoin sama-sama hidup di sekitar angka <b>2<sup>256</sup></b>. Kalau ditulis lengkap, angka itu punya <b>78 digit</b>:</p>
<pre class="code">115.792.089.237.316.195.423.570.985.008.687.907.
853.269.984.665.640.564.039.457.584.007.913.129.
639.936</pre>
<div data-diagram="bar" data-bars="Penduduk bumi:10|Butir pasir di bumi:19|Atom di bumi:51|Kemungkinan kunci:78" data-unit=" digit" data-caption="Banyaknya digit: setiap tambahan satu digit berarti sepuluh kali lebih besar"></div>
<div class="callout">
<b>Seberapa mustahil menebak kunci orang lain?</b> Bayangkan sebuah komputer menebak <b>1 triliun kunci per detik</b>, tanpa henti, sejak alam semesta lahir 13,8 miliar tahun lalu. Totalnya sekitar 4,4 × 10<sup>29</sup> tebakan — hanya sekitar <b>4 × 10<sup>−48</sup></b> bagian dari semua kemungkinan. Bukan sekadar sulit: secara praktis mustahil.
</div>
<p>Catatan kecil: banyaknya kunci privat yang sah sebenarnya sedikit di bawah 2<sup>256</sup>, yaitu sekitar 1,158 × 10<sup>77</sup>. Angkanya tetap 78 digit.</p>

<h3>Yang dijamin matematika — dan yang tidak</h3>
<p>Matematika menjamin bahwa setiap orang bisa <b>memeriksa sendiri</b>: tanda tangan asli atau palsu, blok sah atau tidak, imbalan penambang sesuai jadwal atau tidak. Tapi <b>aturannya sendiri</b> — termasuk batas 21 juta — adalah kesepakatan yang ditulis di perangkat lunak. Aturan itu bertahan karena hampir semua pengguna menolak blok yang melanggarnya. Untuk mengubahnya, sebagian besar pengguna harus sepakat berganti perangkat lunak, dan itu sangat sulit terjadi.</p>

<div class="callout">
<b>Tidak perlu jago matematika untuk memahami ini.</b> Pelajaran-pelajaran berikutnya memakai angka kecil yang bisa dihitung dengan tangan: kurva dengan 17 kemungkinan, bukan 78 digit.
</div>
`,
          keyPoints: [
            "Matematika Bitcoin bisa dipetakan menjadi tujuh bagian: hash, kurva eliptik, tanda tangan, Merkle tree, Proof of Work, jadwal & pasokan, dan peluang konfirmasi.",
            "Setiap bagian menjawab satu pertanyaan: data tidak diubah, kunci tidak bisa dibalik, pemilik terbukti, transaksi tercatat, penulis blok terpilih, pasokan terjaga, transaksi aman.",
            "2^256 punya 78 digit; menebak 1 triliun kunci per detik sejak alam semesta lahir hanya mencoba sekitar 4 × 10^-48 bagian kemungkinan.",
            "Matematika menjamin semua orang bisa memeriksa; aturannya (termasuk 21 juta) bertahan karena kesepakatan pengguna."
          ],
          practice: [
            { type: "number", q: "Sebuah blok berisi 1.024 transaksi. Dengan Merkle tree, berapa hash yang dibutuhkan untuk membuktikan satu transaksi ada di blok itu? (log₂ 1.024)", answer: 10, tol: 0.5, unit: "hash", hint: "2 dipangkatkan berapa supaya menjadi 1.024?", solution: "2¹⁰ = 1.024, jadi cukup 10 hash — bukan 1.024." },
            { type: "number", q: "Kalau sebuah kunci diperpanjang 1 bit, banyaknya kemungkinan kunci menjadi berapa kali lipat?", answer: 2, tol: 0.01, unit: "kali", hint: "Setiap bit hanya punya dua pilihan: 0 atau 1.", solution: "Satu bit tambahan menggandakan kemungkinan: 2²⁵⁷ = 2 × 2²⁵⁶." }
          ],
          quiz: [
            {
              q: "Bagian matematika mana yang menjawab \"siapa yang berhak menulis blok berikutnya?\"",
              options: [
                "Proof of Work",
                "Merkle tree",
                "Kurva eliptik",
                "Deret 21 juta"
              ],
              answer: 0,
              explain: "Penambang berlomba mencari hash yang lebih kecil dari target; yang pertama menemukannya berhak menulis blok."
            },
            {
              q: "Mengapa menebak kunci privat orang lain dianggap mustahil?",
              options: [
                "Kemungkinannya 78 digit, terlalu banyak dicoba",
                "Kunci privat disimpan di server yang dijaga",
                "Komputer dilarang mencoba menebak kunci",
                "Kunci privat berubah setiap sepuluh menit"
              ],
              answer: 0,
              explain: "Bahkan triliunan tebakan per detik selama umur alam semesta hanya menyentuh bagian sangat kecil dari semua kemungkinan."
            },
            {
              q: "Merkle tree berguna untuk...",
              options: [
                "Bukti transaksi ada di blok dengan sedikit hash",
                "Membuat kunci publik dari kunci privat",
                "Menentukan imbalan penambang setiap blok",
                "Mengatur agar blok muncul tiap 10 menit"
              ],
              answer: 0,
              explain: "Cukup sekitar log₂(n) hash untuk membuktikan satu transaksi di antara n transaksi."
            },
            {
              q: "Batas 21 juta Bitcoin dijaga oleh...",
              options: [
                "Aturan yang dipatuhi semua pengguna",
                "Rumus kurva eliptik y² = x³ + 7",
                "Bank sentral di setiap negara",
                "Satu perusahaan pemilik Bitcoin"
              ],
              answer: 0,
              explain: "Matematika membuat pelanggaran mudah diperiksa; aturan itu bertahan karena hampir semua pengguna menolak blok yang melanggar."
            }
          ]
        },
        {
          id: "bc-mat-0",
          title: "Membaca Simbol Matematika Kripto",
          duration: "12 menit",
          content: `
<p>Sebelum masuk rumus kriptografi, kita kupas dulu <b>arti simbolnya</b>. Sekali paham, rumus yang tadinya menakutkan berubah jadi kalimat biasa.</p>

<h3>1. Pangkat: aⁿ</h3>
<div class="callout">
<b>aⁿ</b> artinya <b>a dikalikan dirinya sendiri sebanyak n kali</b>.
<ul>
  <li>2³ = 2×2×2 = <b>8</b></li>
  <li>10² = 10×10 = <b>100</b></li>
  <li>2¹⁰ = <b>1.024</b> (kira-kira seribu)</li>
</ul>
Di kriptografi kamu akan sering melihat pangkat <b>sangat besar</b> seperti 2²⁵⁶ — dan itu justru intinya: angkanya luar biasa besar sehingga mustahil dicoba satu per satu.
</div>

<h3>2. Modulo: tanda "mod"</h3>
<div class="callout">
<b>a mod n</b> = <b>sisa</b> pembagian a oleh n. Dibaca "a modulo n".
<ul>
  <li>17 mod 5 = <b>2</b> (karena 17 = 3×5 + <b>2</b>)</li>
  <li>10 mod 3 = <b>1</b></li>
  <li>12 mod 12 = <b>0</b></li>
</ul>
<b>Analogi jam dinding:</b> jam menunjukkan waktu "mod 12". Jam 15.00 tampil sebagai jam <b>3</b>, karena 15 mod 12 = 3. Angka berputar kembali ke awal — itulah inti modulo.
</div>

<h3>3. Simbol matematika lain yang muncul</h3>
<table class="tbl">
  <tr><th>Simbol</th><th>Dibaca</th><th>Artinya</th></tr>
  <tr><td><b>√x</b></td><td>akar x</td><td>Angka yang bila dikuadratkan menghasilkan x. √49 = 7</td></tr>
  <tr><td><b>Δ</b></td><td>delta</td><td><b>Perubahan</b> atau selisih. Δx = perubahan nilai x</td></tr>
  <tr><td><b>×</b> atau <b>·</b></td><td>kali</td><td>Perkalian biasa</td></tr>
  <tr><td><b>≈</b></td><td>kira-kira</td><td>Nilainya mendekati, tidak persis</td></tr>
  <tr><td><b>p</b>, <b>q</b></td><td>—</td><td>Biasanya menandai <b>peluang</b> (p = peluang berhasil, q = peluang gagal)</td></tr>
  <tr><td><b>k</b></td><td>—</td><td>Sering berarti <b>jumlah bit</b> atau banyaknya sesuatu</td></tr>
  <tr><td><b>x, y</b></td><td>—</td><td>Nama untuk jumlah dua aset di kolam (di rumus AMM)</td></tr>
  <tr><td><b>P(A)</b></td><td>peluang A</td><td>Kemungkinan kejadian A terjadi, 0 sampai 1</td></tr>
</table>

<h3>4. Kenapa "satu arah" itu penting</h3>
<div class="callout">
Beberapa operasi matematika <b>mudah dikerjakan maju, tapi hampir mustahil dibalik</b>.
<br><br><b>Analogi:</b> mencampur cat biru &amp; kuning jadi hijau itu <b>mudah</b>. Tapi memisahkan hijau kembali jadi biru &amp; kuning persis semula? Nyaris mustahil.
<br><br>Kriptografi dibangun di atas sifat ini: kunci publik <b>mudah dihitung</b> dari kunci privat, tapi kunci privat <b>mustahil dihitung</b> dari kunci publik.
</div>

<h3>5. Cara membaca rumus panjang</h3>
<p>Jangan baca sekaligus. Pecah dan terjemahkan. Contoh rumus AMM:</p>
<div class="callout">
<b>x × y = k</b><br>
→ <i>"jumlah token A dikali jumlah token B harus selalu sama dengan angka tetap k"</i>.<br>
Ternyata cuma kalimat biasa: kalau satu sisi berkurang, sisi lain <b>harus</b> bertambah agar hasil kalinya tetap.
</div>

<div class="callout warn">
<b>Tidak perlu menghafal.</b> Halaman ini adalah <b>kamus</b> — kembalilah ke sini kapan pun kamu lupa arti sebuah simbol di pelajaran berikutnya.
</div>
`,
          keyPoints: [
            "aⁿ = a dikali dirinya n kali; di kriptografi pangkatnya sangat besar (mis. 2²⁵⁶) sehingga mustahil dicoba satu per satu.",
            "a mod n = sisa pembagian a oleh n; analoginya jam dinding yang berputar kembali ke awal.",
            "Δ = perubahan/selisih, √ = akar, ≈ = kira-kira, p & q biasanya peluang, k jumlah bit.",
            "Fungsi satu arah: mudah dihitung maju, hampir mustahil dibalik (seperti mencampur cat).",
            "Cara membaca rumus: pecah jadi potongan, terjemahkan tiap simbol jadi kalimat sehari-hari.",
          ],
          practice: [
            { type: "number", q: "Berapa hasil 17 mod 5 (sisa pembagian 17 oleh 5)?", answer: 2, tol: 0.1, hint: "17 = 3×5 + sisa.", solution: "17 − 15 = 2." },
            { type: "number", q: "Berapa nilai 2⁵ (2 pangkat 5)?", answer: 32, tol: 0.1, hint: "2×2×2×2×2.", solution: "2⁵ = 32." },
          ],
          quiz: [
            {
              q: "Apa arti '17 mod 5'?",
              options: [
                "Sisa pembagian 17 oleh 5, yaitu 2",
                "Hasil bagi 17 oleh 5, yaitu 3,4",
                "Hasil kali 17 dengan 5, yaitu 85",
                "Pangkat 17 terhadap 5",
              ],
              answer: 0,
              explain: "Modulo mengambil sisanya: 17 = 3×5 + 2, jadi hasilnya 2.",
            },
            {
              q: "Apa maksud 'fungsi satu arah' dalam kriptografi?",
              options: [
                "Mudah dihitung maju, tetapi hampir mustahil dibalik",
                "Hanya bisa dijalankan satu kali untuk tiap masukan",
                "Hasilnya selalu berubah meski masukannya sama persis",
                "Hanya bekerja untuk mengenkripsi, bukan mendekripsi",
              ],
              answer: 0,
              explain:
                "Seperti mencampur cat: maju mudah, membalikkannya praktis mustahil — dasar keamanan kripto.",
            },
          ],
        },
        {
          id: "bc-mat-1",
          title: "Aritmetika Modulo & Fungsi Satu Arah",
          duration: "13 menit",
          content: `
<p>Kamu sudah tahu private key bisa membuat public key, <b>tapi tidak sebaliknya</b>. Sekarang kita lihat <b>matematika</b> yang membuatnya mungkin.</p>

<h3>Fundamental: aritmetika modulo = "matematika jam"</h3>
<div class="callout">
<b>Modulo</b> (ditulis <b>mod</b>) adalah <b>sisa pembagian</b>. Kamu sudah memakainya tiap hari lewat jam:<br>
Sekarang pukul 10, ditambah 5 jam → bukan 15, tapi <b>3</b>. Itulah <b>15 mod 12 = 3</b>.<br><br>
Contoh lain: <b>17 mod 5 = 2</b> (karena 17 = 3×5 + 2).
</div>

<h3>Kenapa modulo penting?</h3>
<p>Modulo membuat angka <b>"melingkar"</b> dalam rentang terbatas. Akibatnya, dari hasilnya <b>sulit menebak</b> angka asalnya — karena banyak angka berbeda bisa menghasilkan sisa yang sama.</p>

<h3>Fungsi satu arah</h3>
<div class="callout">
<b>Rumusnya:</b> hasil = g<sup>x</sup> mod p<br><br>
<ul>
  <li><b>g</b> dan <b>p</b> = angka publik (diketahui semua orang)</li>
  <li><b>x</b> = <b>rahasiamu</b> (ibarat private key)</li>
  <li>hasil = ibarat <b>public key</b></li>
</ul>
Menghitung <b>maju</b> (dari x ke hasil): sangat cepat. Menebak <b>mundur</b> (dari hasil ke x): harus dicoba satu per satu. Ini disebut masalah <b>logaritma diskret</b> — dengan angka sebesar yang dipakai crypto nyata, mencobanya butuh waktu lebih lama dari umur alam semesta.
</div>

<h3>Coba sendiri — buktikan satu arahnya</h3>
<div data-demo="js-playground">// Fungsi satu arah: mudah maju, sangat sulit mundur
const g = 5, p = 23;
const x = 6;   // "kunci privat" (rahasia)

let hasil = 1;
let i = 0;
while (i !== x) { hasil = (hasil * g) % p; i = i + 1; }

console.log("Angka publik: g = " + g + ", p = " + p);
console.log("Rahasia     : x = " + x);
console.log("Kunci publik = g^x mod p = " + hasil);
console.log("-----");
console.log("Menghitung MAJU: instan (baru saja kita lakukan).");
console.log("Menebak x dari hasil: harus coba 1, 2, 3, ... satu per satu.");
console.log("Di sini p cuma 23. Kripto nyata memakai angka ratusan digit.");</div>

<div class="callout warn">
<b>Catatan jujur:</b> Bitcoin &amp; Ethereum sebenarnya memakai <b>kriptografi kurva eliptik (ECC)</b>, bukan rumus sederhana di atas. Tapi <b>prinsipnya sama persis</b>: sebuah operasi yang mudah dihitung maju, namun praktis mustahil dibalik. Contoh di atas adalah versi yang mudah dipahami.
</div>
`,
          keyPoints: [
            "Modulo = sisa pembagian ('matematika jam'), membuat angka melingkar dalam rentang terbatas.",
            "Fungsi satu arah: hasil = g^x mod p — mudah maju, praktis mustahil dibalik (logaritma diskret).",
            "x berperan seperti private key; hasilnya seperti public key.",
            "Bitcoin/Ethereum memakai kurva eliptik (ECC), tapi prinsip satu arahnya sama.",
          ],
          practice: [
            { type: "number", q: "Berapa hasil dari 17 mod 5? (sisa pembagian)", answer: 2, tol: 0.1, hint: "17 = 3×5 + sisa.", solution: "17 − 15 = 2." },
            { type: "number", q: "Pukul 10 ditambah 5 jam, jam berapa (format 12 jam)? Ini contoh 15 mod 12.", answer: 3, tol: 0.1, hint: "15 mod 12.", solution: "15 − 12 = 3." },
          ],
          quiz: [
            {
              q: "Apa arti 'a mod b'?",
              options: [
                "a dikali b",
                "Sisa pembagian a oleh b",
                "a dibagi b",
                "a pangkat b",
              ],
              answer: 1,
              explain: "Modulo menghasilkan sisa pembagian.",
            },
            {
              q: "Kenapa g^x mod p disebut 'fungsi satu arah'?",
              options: [
                "Mudah dihitung maju, tapi mencari x dari hasilnya praktis mustahil",
                "Hasilnya selalu lebih kecil daripada bilangan p yang dipakai",
                "Perhitungannya hanya bisa dilakukan dengan komputer khusus",
                "Nilai x hanya boleh dipakai satu kali lalu harus diganti",
              ],
              answer: 0,
              explain:
                "Membalikkannya (logaritma diskret) memerlukan pencarian yang tak terjangkau.",
            },
          ],
        },
        {
          id: "bc-btcm-2",
          title: "Kurva Eliptik dengan Angka Kecil — Dari Kunci Privat ke Kunci Publik",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Modulo</b> adalah "matematika jam": hanya sisa baginya yang dipakai, misalnya 20 mod 17 = 3 (<a href="#/lesson/bc-mat-1">Aritmetika Modulo</a>). <b>Kunci privat</b> hanyalah sebuah angka rahasia (<a href="#/lesson/bc-kunci-1">Kunci Privat, Kunci Publik &amp; Alamat</a>).
</div>

<p>Kunci publik Bitcoin dibuat dari kunci privat memakai <b>kurva eliptik</b>. Arah majunya cepat, arah mundurnya praktis mustahil. Di pelajaran ini kita menghitungnya sendiri — dengan angka yang cukup kecil untuk dihitung di kertas.</p>

<h3>Kurvanya: y² = x³ + 7</h3>
<p>Bitcoin memakai kurva dengan rumus <b>y² = x³ + 7</b>. Kalau digambar dengan bilangan biasa, bentuknya seperti ini. Pada kurva ini ada aturan aneh tapi konsisten untuk <b>"menambah" dua titik</b>:</p>
<div data-diagram="kurva-riil" data-mode="tambah" data-p="-1.8" data-q="0.5" data-caption="Menambah dua titik: tarik garis, temukan titik ketiga, lalu cerminkan"></div>
<ol>
  <li>Tarik garis lurus melewati titik <b>P</b> dan <b>Q</b>.</li>
  <li>Garis itu pasti memotong kurva di <b>satu titik lagi</b>.</li>
  <li>Cerminkan titik ketiga itu ke seberang sumbu x. Hasilnya disebut <b>P + Q</b>.</li>
</ol>
<p>Bagaimana kalau titiknya ditambah dengan <b>dirinya sendiri</b> (P + P)? Garisnya diganti <b>garis singgung</b> — garis yang hanya menyentuh kurva di P.</p>
<div data-diagram="kurva-riil" data-mode="ganda" data-p="1" data-caption="Menggandakan titik: garis singgung di P, lalu cerminkan"></div>

<h3>Rumusnya, supaya komputer bisa menghitung</h3>
<div class="callout">
<b>Kemiringan garis (m):</b><br>
Lewat P dan Q: <b>m = (y₂ − y₁) ÷ (x₂ − x₁)</b><br>
Garis singgung (P + P): <b>m = 3x₁² ÷ (2y₁)</b><br><br>
<b>Titik hasilnya:</b><br>
<b>x₃ = m² − x₁ − x₂</b><br>
<b>y₃ = m × (x₁ − x₃) − y₁</b>
</div>
<p>Dengan bilangan biasa, hasilnya penuh angka desimal yang harus dibulatkan, dan pembulatan membuat komputer bisa berbeda pendapat. Karena itu Bitcoin menghitung semuanya dalam <b>mod p</b>: setiap hasil diambil sisa baginya, sehingga semua angka selalu bulat.</p>

<h3>Kurva yang sama, di dunia mod 17</h3>
<p>Kita pakai p = 17 supaya kecil. Sekarang yang dicari adalah pasangan bilangan bulat x dan y (0 sampai 16) yang memenuhi <b>y² mod 17 = (x³ + 7) mod 17</b>. Ternyata ada 17 pasangan:</p>
<div data-diagram="kurva-mod" data-p="17" data-caption="Kurva y² = x³ + 7 (mod 17): bukan garis lengkung lagi, melainkan titik-titik yang tersebar"></div>
<p>Ditambah satu titik khusus bernama <b>titik tak hingga</b>, yang berperan seperti angka 0 (P + titik tak hingga = P). Jadi totalnya 18 titik.</p>

<h3>"Membagi" di dunia mod</h3>
<p>Rumus kemiringan memakai pembagian, padahal kita hanya punya bilangan bulat. Caranya: <b>membagi dengan b sama dengan mengalikan dengan kebalikan b</b>, yaitu angka yang kalau dikali b hasilnya 1 (mod 17).</p>
<table class="tbl">
  <tr><th>Bilangan</th><th>Kebalikannya (mod 17)</th><th>Bukti</th></tr>
  <tr><td>9</td><td>2</td><td>9 × 2 = 18, dan 18 mod 17 = 1</td></tr>
  <tr><td>13</td><td>4</td><td>13 × 4 = 52, dan 52 mod 17 = 1</td></tr>
  <tr><td>3</td><td>6</td><td>3 × 6 = 18, dan 18 mod 17 = 1</td></tr>
</table>

<h3>Hitung bersama: dari G ke 2G dan 3G</h3>
<p>Kita pilih satu titik awal yang disepakati semua orang, namanya <b>G</b> (titik pembangkit). Di kurva mini ini, G = (15, 13).</p>
<pre class="code">G = (15, 13)

2G = G + G  (pakai garis singgung)
  m  = 3 × 15² ÷ (2 × 13)
     = 675 ÷ 26           675 mod 17 = 12, 26 mod 17 = 9
     = 12 ÷ 9 = 12 × 2 = 24 → 24 mod 17 = 7
  x₃ = 7² − 15 − 15 = 19   → 19 mod 17 = 2
  y₃ = 7 × (15 − 2) − 13 = 78 → 78 mod 17 = 10
  2G = (2, 10)

Cek: 10² = 100 → 100 mod 17 = 15
     2³ + 7 = 15                      Cocok!

3G = 2G + G  (pakai garis lewat dua titik)
  m  = (13 − 10) ÷ (15 − 2) = 3 ÷ 13 = 3 × 4 = 12
  x₃ = 12² − 2 − 15 = 127  → 127 mod 17 = 8
  y₃ = 12 × (2 − 8) − 10 = −82 → −82 mod 17 = 3
  3G = (8, 3)</pre>
<p>Kalau diteruskan, hasilnya:</p>
<pre class="code"> 1G = (15, 13)     10G = (1, 5)
 2G = (2, 10)      11G = (10, 2)
 3G = (8, 3)       12G = (5, 9)
 4G = (12, 1)      13G = (6, 11)
 5G = (6, 6)       14G = (12, 16)
 6G = (5, 8)       15G = (8, 14)
 7G = (10, 15)     16G = (2, 7)
 8G = (1, 12)      17G = (15, 4)
 9G = (3, 0)       18G = titik tak hingga</pre>
<p>Perhatikan 17G = (15, 4) adalah cermin G = (15, 13), karena 4 = 17 − 13. Setelah 18 langkah, kita kembali ke "nol".</p>

<h3>Kunci privat dan kunci publik</h3>
<div data-diagram="kurva-mod" data-p="17" data-g="15,13" data-k="7" data-caption="Kunci privat 7: melompat dari G sebanyak tujuh kali"></div>
<table class="tbl">
  <tr><th></th><th>Di kurva mini</th><th>Sifatnya</th></tr>
  <tr><td><b>Kunci privat</b> k</td><td>7</td><td>Rahasia; dipilih acak</td></tr>
  <tr><td><b>Kunci publik</b> K = k × G</td><td>7G = (10, 15)</td><td>Boleh dibagikan ke siapa pun</td></tr>
</table>
<p>Lihat gambar di atas: lompatan G, 2G, 3G, … tampak <b>melompat ke sana kemari tanpa pola</b>. Kalau orang hanya tahu kunci publik (10, 15), ia harus menebak berapa kali lompatannya. Di kurva mini cukup mencoba 18 kemungkinan. Di Bitcoin, kemungkinannya sekitar <b>1,16 × 10<sup>77</sup></b>. Teka-teki "berapa k-nya?" ini disebut <b>masalah logaritma diskret</b>.</p>

<h3>Kenapa maju cepat tapi mundur mustahil?</h3>
<p>Untuk maju, komputer tidak perlu menambah G satu per satu. Ia memakai cara <b>gandakan lalu tambah</b>. Contoh: 7 = 4 + 2 + 1, jadi 7G = 4G + 2G + G, dan 4G cukup didapat dengan menggandakan 2G.</p>
<table class="tbl">
  <tr><th>Arah</th><th>Cara terbaik yang diketahui</th><th>Banyak langkah (kunci Bitcoin)</th></tr>
  <tr><td><b>Maju</b>: k → K</td><td>Gandakan lalu tambah</td><td>Sekitar 512 operasi</td></tr>
  <tr><td><b>Mundur</b>: K → k</td><td>Mencoba dengan cara paling cerdas sekalipun</td><td>Sekitar 2<sup>128</sup> ≈ 3,4 × 10<sup>38</sup> operasi</td></tr>
</table>
<p>Inilah "pintu satu arah" yang menjaga setiap dompet Bitcoin.</p>

<h3>Kurva Bitcoin sungguhan</h3>
<p>Kurva Bitcoin bernama <b>secp256k1</b>. Rumusnya persis sama, y² = x³ + 7 (mod p). Bedanya hanya ukuran: p = 2<sup>256</sup> − 2<sup>32</sup> − 977, sebuah bilangan prima 78 digit, dan titik G-nya sudah ditetapkan untuk semua orang. Kunci privatmu adalah angka acak raksasa k, kunci publikmu adalah k × G, dan alamatmu adalah hash dari kunci publik itu.</p>
<div class="callout warn">
<b>Satu ancaman yang diwaspadai:</b> komputer kuantum yang cukup besar secara teori bisa menjalankan cara mundur yang jauh lebih cepat. Komputer seperti itu belum ada, tapi persiapannya sudah dibahas (<a href="#/lesson/bc-kri-3">Ancaman Komputer Kuantum</a>).
</div>

<h3>Coba sendiri</h3>
<p>Kode ini menghitung kunci publik dari kunci privat di kurva mini, lalu "menyerang" balik dengan mencoba satu per satu. Ganti <b>kunciPrivat</b> dengan angka 1 sampai 17.</p>
<div data-demo="js-playground">// Kurva mini Bitcoin: y² = x³ + 7 (mod 17)
const p = 17;
const mod = (a) => ((a % p) + p) % p;

// "Membagi" di dunia mod: cari b sehingga a × b ≡ 1
function kebalikan(a) {
  for (let b = 1; b &lt; p; b++) if (mod(a * b) === 1) return b;
}

// null = titik tak hingga (berperan seperti angka 0)
function tambah(P, Q) {
  if (P === null) return Q;
  if (Q === null) return P;
  if (P[0] === Q[0] &amp;&amp; mod(P[1] + Q[1]) === 0) return null;
  let m;
  if (P[0] === Q[0]) m = mod(3 * P[0] * P[0] * kebalikan(mod(2 * P[1])));  // garis singgung
  else m = mod((Q[1] - P[1]) * kebalikan(mod(Q[0] - P[0])));             // garis lewat P dan Q
  const x = mod(m * m - P[0] - Q[0]);
  return [x, mod(m * (P[0] - x) - P[1])];
}

function kali(k, G) {               // k × G dengan menambah berulang
  let hasil = null;
  for (let i = 0; i &lt; k; i++) hasil = tambah(hasil, G);
  return hasil;
}

const teks = (T) => "(" + T[0] + ", " + T[1] + ")";
const G = [15, 13];
const kunciPrivat = 7;              // coba ganti: 1 sampai 17
const kunciPublik = kali(kunciPrivat, G);
console.log("Kunci publik:", teks(kunciPublik));

// Menyerang: cari kunci privat dari kunci publik dengan mencoba satu per satu
for (let tebak = 1; tebak &lt;= 18; tebak++) {
  const K = kali(tebak, G);
  if (K !== null &amp;&amp; K[0] === kunciPublik[0] &amp;&amp; K[1] === kunciPublik[1]) {
    console.log("Ketemu! Kunci privatnya " + tebak + " — mudah, karena hanya ada 18 kemungkinan.");
    break;
  }
}</div>
`,
          keyPoints: [
            "Kurva Bitcoin: y² = x³ + 7. Dua titik \"ditambah\" dengan menarik garis, mencari titik ketiga, lalu mencerminkannya.",
            "Rumus: m = (y₂ − y₁) ÷ (x₂ − x₁) atau 3x₁² ÷ (2y₁); x₃ = m² − x₁ − x₂; y₃ = m(x₁ − x₃) − y₁ — semuanya dihitung mod p.",
            "Membagi di dunia mod = mengalikan dengan kebalikan (mod 17: kebalikan 9 adalah 2).",
            "Kunci publik K = k × G. Di kurva mini, k = 7 dan G = (15, 13) menghasilkan (10, 15).",
            "Maju cepat (gandakan lalu tambah, sekitar 512 operasi); mundur butuh sekitar 2^128 operasi — itulah masalah logaritma diskret.",
            "Bitcoin memakai kurva secp256k1: rumus yang sama dengan p prima 78 digit."
          ],
          practice: [
            { type: "number", q: "Di dunia mod 17, berapa kebalikan dari 3? (angka b sehingga 3 × b mod 17 = 1)", answer: 6, tol: 0.5, hint: "Coba 3 × 1, 3 × 2, … sampai hasilnya 18, 35, atau 52.", solution: "3 × 6 = 18, dan 18 mod 17 = 1. Jadi kebalikan 3 adalah 6." },
            { type: "number", q: "2G = (2, 10). Hitung 4G = 2G + 2G dengan garis singgung. Berapa koordinat x dari 4G?", answer: 12, tol: 0.5, hint: "m = 3 × 2² ÷ (2 × 10) = 12 ÷ 20; 20 mod 17 = 3, dan kebalikan 3 adalah 6. Lalu x₃ = m² − 2 − 2, ambil mod 17.", solution: "m = 12 × 6 = 72 → 72 mod 17 = 4. x₃ = 4² − 2 − 2 = 12. Cocok dengan tabel: 4G = (12, 1)." },
            { type: "number", q: "Masih dari soal sebelumnya (m = 4, x₃ = 12). Berapa koordinat y dari 4G?", answer: 1, tol: 0.5, hint: "y₃ = m × (x₁ − x₃) − y₁ = 4 × (2 − 12) − 10, lalu ambil mod 17 (tambahkan 17 berulang kalau negatif).", solution: "4 × (−10) − 10 = −50. −50 + 51 = 1, jadi y = 1 dan 4G = (12, 1)." }
          ],
          quiz: [
            {
              q: "Bagaimana dua titik di kurva eliptik \"ditambahkan\"?",
              options: [
                "Garis lewat keduanya, cari titik ketiga, cerminkan",
                "Koordinat x dan y keduanya dijumlahkan langsung",
                "Ambil titik yang letaknya paling tinggi",
                "Kalikan koordinat x keduanya lalu ambil akarnya"
              ],
              answer: 0,
              explain: "Garis lewat P dan Q memotong kurva di titik ketiga; cerminannya terhadap sumbu x adalah P + Q."
            },
            {
              q: "Mengapa Bitcoin menghitung kurva dalam mod p, bukan bilangan biasa?",
              options: [
                "Supaya semua angka bulat dan hasil semua komputer sama",
                "Supaya kurvanya terlihat lebih indah saat digambar",
                "Supaya kunci privat bisa dihitung balik dengan mudah",
                "Supaya ukuran kunci menjadi lebih kecil dari 17"
              ],
              answer: 0,
              explain: "Bilangan desimal perlu dibulatkan; dengan mod p semua hasil bulat dan pasti."
            },
            {
              q: "Di kurva mini, kunci privat 7 menghasilkan kunci publik (10, 15). Mana yang boleh dibagikan?",
              options: [
                "Hanya (10, 15)",
                "Hanya angka 7",
                "Keduanya boleh",
                "Tidak keduanya"
              ],
              answer: 0,
              explain: "Kunci publik boleh dibagikan; kunci privat harus tetap rahasia."
            },
            {
              q: "Mengapa kunci privat Bitcoin tidak bisa dihitung balik dari kunci publik?",
              options: [
                "Cara mundur terbaik butuh sekitar 2^128 operasi",
                "Kunci publik dienkripsi ulang setiap hari",
                "Rumus kurvanya dirahasiakan oleh pembuatnya",
                "Kunci publik tidak pernah disimpan di blockchain"
              ],
              answer: 0,
              explain: "Maju hanya sekitar 512 operasi, tapi mundur butuh sekitar 2^128 operasi: masalah logaritma diskret."
            }
          ]
        },
        {
          id: "bc-mat-2",
          title: "Probabilitas Penambangan & Serangan 51%",
          duration: "13 menit",
          content: `
<p>Keamanan Bitcoin bukan sekadar gagasan — ia bisa <b>dihitung</b>. Mari lihat angkanya.</p>

<div data-diagram="bar" data-bars="Punya 10% daya:10|Punya 30% daya:30|Punya 51% daya:51" data-unit="% blok" data-caption="Porsi blok yang ditemukan sebanding dengan porsi daya komputasi — di 51% penyerang bisa menulis ulang sejarah"></div>


<h3>Fundamental: menambang = lotere berulang</h3>
<div class="callout">
Penambang mencoba angka acak (<b>nonce</b>) sampai hash blok memenuhi syarat. Kalau syaratnya "hash harus dimulai dengan <b>k bit nol</b>", maka:<br><br>
<b>Peluang berhasil sekali coba = 1 ÷ 2<sup>k</sup></b><br>
<b>Rata-rata percobaan yang dibutuhkan = 2<sup>k</sup></b>
</div>

<table class="tbl">
  <tr><th>Syarat (bit nol)</th><th>Peluang per coba</th><th>Rata-rata percobaan</th></tr>
  <tr><td>4 bit</td><td>1/16</td><td>16</td></tr>
  <tr><td>10 bit</td><td>1/1.024</td><td>1.024</td></tr>
  <tr><td>20 bit</td><td>1/1.048.576</td><td>~1 juta</td></tr>
</table>

<div class="callout">
<b>Penyesuaian kesulitan:</b> jaringan Bitcoin otomatis mengubah <b>k</b> agar rata-rata satu blok tetap ~<b>10 menit</b>, berapa pun jumlah penambang. Kalau penambang bertambah, syaratnya dipersulit; kalau berkurang, dipermudah.
</div>

<h3>Serangan 51% — kenapa angkanya penting</h3>
<p>Misalkan penyerang menguasai <b>q</b> bagian dari total daya komputasi, dan jaringan jujur menguasai <b>p = 1 − q</b>. Perkiraan sederhana peluang penyerang bisa mengejar dari <b>z blok</b> tertinggal:</p>

<div class="callout">
<b>Peluang ≈ (q ÷ p)<sup>z</sup></b> &nbsp;(berlaku saat q lebih kecil dari p)
</div>

<pre class="code">Penyerang 30% (q=0,3 ; p=0,7):
  Tertinggal 1 blok : (0,3/0,7)¹ = 0,43   -> 43%
  Tertinggal 3 blok : (0,3/0,7)³ = 0,079  -> ~8%
  Tertinggal 6 blok : (0,3/0,7)⁶ = 0,006  -> ~0,6%</pre>

<div class="callout warn">
<b>Inilah alasan "tunggu 6 konfirmasi".</b> Tiap blok tambahan membuat peluang pembatalan <b>turun secara eksponensial</b>. Tapi perhatikan: jika <b>q lebih besar dari 0,5</b> (mayoritas daya), rasio q/p melebihi 1 dan peluang penyerang <b>mendekati kepastian</b> — itulah makna sesungguhnya "serangan 51%".
<br><br><i>Catatan: rumus di atas adalah perkiraan sederhana yang menganggap penyerang baru mulai saat kamu berhenti menunggu. Perhitungan lengkap di whitepaper Bitcoin juga menghitung blok yang diam-diam sudah ditambang penyerang selama kamu menunggu, sehingga hasilnya <b>lebih besar</b>: untuk penyerang 30% dan 6 konfirmasi, sekitar 13% — bukan 0,6%. Rumus lengkapnya dibahas di <a href="#/lesson/bc-btcm-4">Berapa Konfirmasi yang Aman?</a></i>
</div>

<div class="callout">
<b>Keamanan = ekonomi:</b> menguasai mayoritas daya komputasi butuh biaya perangkat &amp; listrik yang sangat besar. Selama biaya menyerang <b>lebih mahal</b> daripada hasil curiannya, menyerang menjadi tidak masuk akal secara ekonomi.
</div>
`,
          keyPoints: [
            "Menambang = lotere: peluang per percobaan = 1 ÷ 2^k; rata-rata percobaan = 2^k.",
            "Kesulitan disesuaikan otomatis agar rata-rata satu blok tetap ~10 menit.",
            "Peluang penyerang mengejar dari z blok ≈ (q ÷ p)^z — turun eksponensial tiap blok.",
            "Itulah dasar 'tunggu 6 konfirmasi'; bila q di atas 0,5 penyerang hampir pasti menang.",
            "Keamanan bertumpu pada ekonomi: biaya menyerang harus lebih mahal dari hasilnya.",
          ],
          practice: [
            { type: "number", q: "Jika syaratnya 10 bit nol, berapa rata-rata percobaan yang dibutuhkan? (2 pangkat 10)", answer: 1024, tol: 1, hint: "2^10.", solution: "2^10 = 1.024 percobaan." },
            { type: "number", q: "Penyerang q=0,3 dan p=0,7, tertinggal 1 blok. Berapa perkiraan peluangnya? (desimal, mis. 0.43)", answer: 0.43, tol: 0.02, hint: "(0,3 ÷ 0,7) pangkat 1.", solution: "0,3/0,7 ≈ 0,43 atau 43%." },
          ],
          quiz: [
            {
              q: "Kenapa disarankan menunggu beberapa konfirmasi blok?",
              options: [
                "Karena tiap blok tambahan menurunkan peluang pembatalan secara tajam",
                "Karena transaksi baru dianggap sah setelah enam blok berlalu",
                "Karena biaya transaksi baru dipotong setelah blok terkonfirmasi",
                "Karena jaringan perlu waktu menyalin transaksi ke seluruh node",
              ],
              answer: 0,
              explain: "Peluang penyerang mengejar menurun tajam seiring bertambahnya blok.",
            },
            {
              q: "Apa yang terjadi bila penyerang menguasai lebih dari 50% daya komputasi?",
              options: [
                "Peluangnya menulis ulang riwayat mendekati kepastian — serangan 51%",
                "Jaringan otomatis berhenti sampai ada penambang lain bergabung",
                "Penyerang bisa mencetak koin baru di luar batas yang ditentukan",
                "Seluruh saldo pengguna bisa langsung dipindahkan ke alamatnya",
              ],
              answer: 0,
              explain:
                "Dengan mayoritas daya, penyerang secara statistik akan selalu bisa menyusul.",
            },
          ],
        },
        {
          id: "bc-btcm-3",
          title: "Jadwal & Pasokan Bitcoin — Kesulitan, Waktu Blok, dan Deret 21 Juta",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Menambang berarti menebak angka (nonce) berulang-ulang sampai hash blok memenuhi syarat (<a href="#/lesson/bc-deep-2">Cara Kerja Penambangan</a>, <a href="#/lesson/bc-mat-2">Probabilitas Penambangan</a>). Setiap sekitar 4 tahun, imbalan penambang dibagi dua — itulah <b>halving</b> (<a href="#/lesson/bc-deep-1">21 Juta &amp; Halving</a>).
</div>

<h3>Syarat sebenarnya: hash ≤ target</h3>
<p>Sebelumnya syarat menambang disederhanakan menjadi "hash harus diawali sekian bit nol". Aslinya: hash blok dibaca sebagai <b>angka raksasa</b>, dan angka itu harus <b>lebih kecil atau sama dengan</b> sebuah angka bernama <b>target</b>.</p>
<div class="callout">
<b>Peluang berhasil sekali coba ≈ target ÷ 2<sup>256</sup></b><br>
Target makin kecil → peluang makin kecil → menambang makin sulit.<br>
"Diawali k bit nol" hanyalah kasus khusus ketika target = 2<sup>256 − k</sup>.
</div>

<h3>Penyesuaian kesulitan: termostat Bitcoin</h3>
<p>Kalau penambang bertambah, tebakan per detik naik dan blok muncul lebih cepat dari 10 menit. Bitcoin memperbaikinya sendiri <b>setiap 2.016 blok</b> (sekitar 2 minggu = 20.160 menit):</p>
<div class="callout">
<b>Target baru = target lama × (waktu nyata 2.016 blok ÷ 20.160 menit)</b><br>
Perubahannya dibatasi paling banyak 4 kali lipat, naik ataupun turun.
</div>
<div data-diagram="cycle" data-steps="Penambang bertambah|Blok lebih cepat dari 10 menit|Tiap 2.016 blok: target dikecilkan|Blok kembali sekitar 10 menit" data-center="Termostat" data-caption="Seperti termostat AC: terlalu cepat didinginkan, terlalu lambat dihangatkan"></div>
<pre class="code">Contoh: 2.016 blok selesai dalam 12 hari
  waktu nyata  = 12 × 24 × 60 = 17.280 menit
  faktor       = 17.280 ÷ 20.160 = 0,857
  target baru  = target lama × 0,857   (lebih kecil 14,3%)
  kesulitan    = 1 ÷ 0,857 = 1,167      (naik sekitar 16,7%)</pre>

<h3>"10 menit" itu rata-rata, bukan jadwal</h3>
<p>Setiap tebakan adalah undian yang berdiri sendiri, sehingga waktu sampai blok berikutnya sangat bervariasi. Peluang blok muncul dalam t menit adalah <b>1 − e<sup>−t/10</sup></b>:</p>
<div data-diagram="bar" data-bars="Dalam 1 menit:9.5|Dalam 10 menit:63.2|Dalam 20 menit:86.5|Dalam 30 menit:95|Dalam 60 menit:99.8" data-unit="%" data-caption="Peluang blok berikutnya sudah muncul, kalau rata-ratanya 10 menit"></div>
<ul>
  <li>Hanya sekitar <b>63%</b> blok muncul dalam 10 menit.</li>
  <li>Sekitar <b>5%</b> blok butuh lebih dari 30 menit, dan sekitar 1 dari 400 butuh lebih dari satu jam.</li>
  <li>Sifat uniknya: kalau sudah menunggu 15 menit, perkiraan sisa waktunya <b>tetap</b> sekitar 10 menit. Undian tidak "ingat" sudah berapa lama kamu menunggu.</li>
</ul>

<h3>Deret 21 juta</h3>
<p>Imbalan blok berganti setiap <b>210.000 blok</b> (sekitar 4 tahun). Setiap periode itu disebut satu <b>era</b>:</p>
<table class="tbl">
  <tr><th>Era</th><th>Imbalan per blok</th><th>Koin baru di era itu</th><th>Total sampai akhir era</th></tr>
  <tr><td>1 (2009–2012)</td><td>50 BTC</td><td>10.500.000</td><td>10.500.000 (50%)</td></tr>
  <tr><td>2 (2012–2016)</td><td>25 BTC</td><td>5.250.000</td><td>15.750.000 (75%)</td></tr>
  <tr><td>3 (2016–2020)</td><td>12,5 BTC</td><td>2.625.000</td><td>18.375.000 (87,5%)</td></tr>
  <tr><td>4 (2020–2024)</td><td>6,25 BTC</td><td>1.312.500</td><td>19.687.500 (93,75%)</td></tr>
  <tr><td>5 (2024–2028)</td><td>3,125 BTC</td><td>656.250</td><td>20.343.750 (96,875%)</td></tr>
</table>
<div class="callout">
<b>Kenapa totalnya 21 juta?</b><br>
210.000 × 50 × (1 + ½ + ¼ + ⅛ + …)<br>
= 10.500.000 × 2 = <b>21.000.000</b><br><br>
Deret 1 + ½ + ¼ + … tidak pernah melewati 2: seperti makan setengah pizza, lalu setengah sisanya, lalu setengah sisanya lagi — kamu tidak akan pernah makan lebih dari satu pizza utuh.
</div>
<div data-diagram="pasokan-btc" data-caption="Pasokan Bitcoin naik cepat di awal, lalu makin landai menuju 21 juta"></div>
<p>Koin ke-20 juta ditambang pada <b>9 Maret 2026</b> di blok 939.999, artinya 95,24% dari batas sudah beredar. Sisa satu juta terakhir akan keluar sedikit demi sedikit selama lebih dari satu abad. Perlu diingat juga: diperkirakan beberapa juta BTC sudah hilang selamanya karena pemiliknya kehilangan kunci.</p>

<h3>Kenapa tepatnya 20.999.999,9769 BTC?</h3>
<p>Imbalan dihitung dalam <b>satoshi</b> (1 BTC = 100.000.000 satoshi), dan satoshi tidak bisa dipecah. Saat imbalan dibagi dua, sisa pecahannya <b>dibuang</b>. Era terakhir (era ke-33) imbalannya hanya 1 satoshi per blok; setelah itu imbalannya 0, sekitar tahun 2140. Jumlah semuanya sedikit di bawah 21 juta. Buktikan sendiri:</p>
<div data-demo="js-playground">// Menjumlahkan seluruh imbalan blok Bitcoin dalam satoshi (bilangan bulat)
let imbalan = 50 * 100000000;   // 50 BTC dalam satoshi
let total = 0;
let era = 0;
while (imbalan > 0) {
  total += 210000 * imbalan;
  era++;
  imbalan = Math.floor(imbalan / 2);   // halving: pecahan satoshi dibuang
}
console.log("Jumlah era:", era);
console.log("Total satoshi:", total);
console.log("Total BTC:", total / 100000000);</div>
`,
          keyPoints: [
            "Syarat menambang: hash blok (sebagai angka) ≤ target; peluang per coba ≈ target ÷ 2^256.",
            "Setiap 2.016 blok, target baru = target lama × (waktu nyata ÷ 20.160 menit), dibatasi 4 kali lipat.",
            "Waktu blok acak: hanya ~63% blok muncul dalam 10 menit, ~5% butuh lebih dari 30 menit.",
            "Imbalan berganti tiap 210.000 blok: 210.000 × 50 × (1 + ½ + ¼ + …) = 21 juta.",
            "Karena satoshi tidak bisa dipecah, totalnya 20.999.999,9769 BTC; koin ke-20 juta ditambang 9 Maret 2026."
          ],
          practice: [
            { type: "number", q: "2.016 blok terakhir selesai dalam 16 hari. Target lama dikali berapa? (16 × 24 × 60 ÷ 20.160, dua angka di belakang koma)", answer: 1.14, tol: 0.006, unit: "kali", hint: "16 hari = 23.040 menit.", solution: "23.040 ÷ 20.160 = 1,14. Target membesar, jadi menambang dipermudah karena blok terlalu lambat." },
            { type: "number", q: "Berapa BTC yang sudah ditambang ketika era 3 berakhir?", answer: 18375000, tol: 0.5, unit: "BTC", hint: "210.000 × (50 + 25 + 12,5).", solution: "210.000 × 87,5 = 18.375.000 BTC, atau 87,5% dari 21 juta." },
            { type: "number", q: "Dalam satu kali penyesuaian, target paling banyak bisa berubah berapa kali lipat?", answer: 4, tol: 0.01, unit: "kali", hint: "Lihat batas dalam kotak rumus penyesuaian kesulitan.", solution: "Perubahan target dibatasi paling banyak 4 kali lipat dalam satu penyesuaian, naik ataupun turun." }
          ],
          quiz: [
            {
              q: "Kalau target diperkecil, apa yang terjadi?",
              options: [
                "Menambang makin sulit",
                "Menambang makin mudah",
                "Imbalan blok bertambah",
                "Blok jadi lebih besar"
              ],
              answer: 0,
              explain: "Hash harus lebih kecil dari target; target kecil berarti lebih sedikit hash yang memenuhi syarat."
            },
            {
              q: "2.016 blok selesai dalam 12 hari (lebih cepat dari 2 minggu). Apa yang dilakukan jaringan?",
              options: [
                "Target dikecilkan, kesulitan naik sekitar 16,7%",
                "Target dibesarkan supaya blok lebih cepat lagi",
                "Imbalan blok dipotong setengah saat itu juga",
                "Penambang baru dilarang ikut menambang"
              ],
              answer: 0,
              explain: "Faktor 17.280 ÷ 20.160 = 0,857; target mengecil dan kesulitan naik sekitar 1 ÷ 0,857 = 1,167."
            },
            {
              q: "Sudah 15 menit belum ada blok baru. Kira-kira berapa lama lagi?",
              options: [
                "Tetap sekitar 10 menit",
                "Pasti kurang dari 1 menit",
                "Sekitar 25 menit lagi",
                "Blok berikutnya batal"
              ],
              answer: 0,
              explain: "Setiap tebakan berdiri sendiri, jadi perkiraan sisa waktu tidak berkurang meski sudah lama menunggu."
            },
            {
              q: "Mengapa total Bitcoin sedikit di bawah 21 juta (20.999.999,9769)?",
              options: [
                "Pecahan satoshi dibuang setiap halving",
                "Sebagian koin dibakar setiap tahun",
                "Satoshi Nakamoto menyimpan sisanya",
                "Ada kesalahan hitung di whitepaper"
              ],
              answer: 0,
              explain: "Imbalan dihitung dalam satoshi bulat; pembagian dua membuang sisa pecahan sehingga total sedikit kurang dari 21 juta."
            }
          ]
        },
        {
          id: "bc-btcm-4",
          title: "Berapa Konfirmasi yang Aman? — Rumus Peluang dari Whitepaper Bitcoin",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>q</b> adalah porsi daya komputasi penyerang dan <b>p = 1 − q</b> porsi penambang jujur. Perkiraan sederhana peluang penyerang mengejar dari z blok tertinggal adalah <b>(q ÷ p)<sup>z</sup></b> (<a href="#/lesson/bc-mat-2">Probabilitas Penambangan &amp; Serangan 51%</a>). Pelajaran ini membahas rumus lengkapnya, yang ada di bagian 11 whitepaper Bitcoin.
</div>

<h3>Skenarionya</h3>
<p>Seseorang membayarmu dengan Bitcoin. Kamu menunggu <b>z konfirmasi</b> (z blok baru di atas blok transaksimu), lalu menyerahkan barang. Diam-diam, ia sudah menambang <b>rantai tandingan</b> berisi transaksi lain yang mengirim uang yang sama ke dompetnya sendiri. Kalau rantai tandingannya berhasil menjadi lebih panjang, jaringan akan beralih ke rantai itu, dan pembayaranmu hilang.</p>
<div data-diagram="rantai-kejar" data-z="6" data-serang="4" data-caption="Selama kamu menunggu 6 konfirmasi, penyerang tidak diam saja"></div>

<h3>Langkah 1: berapa blok yang sudah dimiliki penyerang?</h3>
<p>Selama penambang jujur membuat z blok, penyerang rata-rata membuat <b>λ = z × q ÷ p</b> blok. Tapi jumlah sebenarnya acak. Peluang penyerang sudah punya tepat k blok mengikuti <b>distribusi Poisson</b>:</p>
<div class="callout">
<b>Peluang punya k blok = λ<sup>k</sup> × e<sup>−λ</sup> ÷ k!</b><br>
(k! dibaca "k faktorial" = 1 × 2 × … × k; 0! = 1)
</div>
<pre class="code">Penyerang 10% (q = 0,1 ; p = 0,9)
Kamu menunggu z = 6 konfirmasi
  λ = 6 × 0,1 ÷ 0,9 = 0,667

  punya 0 blok : 51,3%
  punya 1 blok : 34,2%
  punya 2 blok : 11,4%
  punya 3 blok :  2,5%
  punya 4 blok :  0,4%</pre>

<h3>Langkah 2: dari ketertinggalan, bisakah ia menyusul?</h3>
<p>Setelah itu, setiap blok baru ibarat lemparan koin berat sebelah: penambang jujur menang dengan peluang p, penyerang dengan peluang q. Matematika "penjudi yang bangkrut" (<i>gambler's ruin</i>) menunjukkan peluang penyerang <b>pernah</b> menyusul dari ketertinggalan d blok adalah <b>(q ÷ p)<sup>d</sup></b>, selama q lebih kecil dari p. Tiap tambahan satu blok ketertinggalan mengalikan peluangnya dengan q ÷ p lagi.</p>

<h3>Rumus lengkapnya</h3>
<div class="callout">
<b>P = 1 − Σ<sub>k=0..z</sub> [ λ<sup>k</sup> e<sup>−λ</sup> ÷ k! ] × [ 1 − (q ÷ p)<sup>z−k</sup> ]</b><br><br>
Cara membacanya: untuk setiap kemungkinan k blok yang sudah dimiliki penyerang, kalikan peluang "punya k blok" dengan peluang "gagal menyusul dari ketertinggalan z − k". Jumlahkan semuanya — itulah peluang penyerang <b>gagal</b>. Kurangkan dari 1 untuk mendapat peluang penyerang <b>berhasil</b>.
</div>

<h3>Hasilnya</h3>
<div data-diagram="bar" data-bars="0 konfirmasi:100|1 konfirmasi:62.8|2 konfirmasi:44.6|3 konfirmasi:32.5|4 konfirmasi:23.9|5 konfirmasi:17.7|6 konfirmasi:13.2|8 konfirmasi:7.4|10 konfirmasi:4.2" data-unit="%" data-caption="Peluang penyerang 30% berhasil, menurut rumus lengkap whitepaper"></div>
<table class="tbl">
  <tr><th>Konfirmasi (z)</th><th>Penyerang 10%</th><th>Penyerang 30%</th></tr>
  <tr><td>1</td><td>20,5%</td><td>62,8%</td></tr>
  <tr><td>2</td><td>5,1%</td><td>44,6%</td></tr>
  <tr><td>3</td><td>1,3%</td><td>32,5%</td></tr>
  <tr><td>6</td><td>0,024%</td><td>13,2%</td></tr>
  <tr><td>10</td><td>0,00012%</td><td>4,2%</td></tr>
</table>
<div class="callout warn">
<b>Lebih besar dari perkiraan sederhana!</b> Untuk penyerang 30% dan 6 konfirmasi, perkiraan sederhana (0,3 ÷ 0,7)<sup>6</sup> hanya 0,6%, sedangkan rumus lengkap memberi <b>13,2%</b>. Bedanya: rumus lengkap ikut menghitung blok yang diam-diam sudah ditambang penyerang selama kamu menunggu.
</div>

<h3>Berapa konfirmasi agar peluangnya di bawah 0,1%?</h3>
<div data-diagram="bar" data-bars="Penyerang 10%:5|Penyerang 15%:8|Penyerang 20%:11|Penyerang 25%:15|Penyerang 30%:24|Penyerang 35%:41|Penyerang 40%:89" data-unit=" blok" data-caption="Konfirmasi yang dibutuhkan melonjak saat penyerang mendekati separuh daya jaringan"></div>
<p>Untuk penyerang 45%, dibutuhkan 340 konfirmasi. Untuk penyerang 50% atau lebih, <b>tidak ada</b> jumlah konfirmasi yang cukup: q ÷ p menjadi 1 atau lebih, sehingga penyerang pada akhirnya selalu bisa menyusul.</p>

<h3>Jadi, apa arti "6 konfirmasi"?</h3>
<ul>
  <li>Kalau penyerang menguasai paling banyak 10% daya, 6 konfirmasi membuat peluangnya sekitar <b>0,024%</b> (kira-kira 1 dari 4.100).</li>
  <li>Angka 6 adalah <b>kebiasaan</b>, bukan aturan protokol. Bursa dan toko memilih sendiri sesuai besar nilai transaksinya.</li>
  <li>Rumus ini menganggap daya penambang tetap dan penyerang mulai saat transaksi dikirim. Di dunia nyata, menyerang juga sangat mahal — keamanan Bitcoin adalah gabungan matematika dan ekonomi.</li>
</ul>

<h3>Coba sendiri — kode dari whitepaper</h3>
<p>Whitepaper Bitcoin menuliskan rumus ini dalam bahasa C. Berikut terjemahannya ke JavaScript. Ganti <b>q</b> lalu jalankan.</p>
<div data-demo="js-playground">// Terjemahan JavaScript dari kode C di whitepaper Bitcoin (bagian 11)
function peluangPenyerang(q, z) {
  const p = 1 - q;
  if (q >= p) return 1;               // penyerang mayoritas pasti bisa menyusul
  const lambda = z * (q / p);
  let gagal = 0;
  for (let k = 0; k &lt;= z; k++) {
    let poisson = Math.exp(-lambda);
    for (let i = 1; i &lt;= k; i++) poisson *= lambda / i;
    gagal += poisson * (1 - Math.pow(q / p, z - k));
  }
  return 1 - gagal;
}

const q = 0.1;   // porsi daya penyerang — coba 0.3 atau 0.45
for (let z = 0; z &lt;= 10; z++) {
  console.log("z = " + z + " → " + (peluangPenyerang(q, z) * 100).toFixed(4) + "%");
}</div>
`,
          keyPoints: [
            "Penyerang menambang rantai tandingan diam-diam selama kamu menunggu z konfirmasi.",
            "Banyak blok penyerang mengikuti distribusi Poisson dengan rata-rata λ = z × q ÷ p.",
            "Dari ketertinggalan d blok, peluang pernah menyusul = (q ÷ p)^d (gambler's ruin), selama q < p.",
            "Rumus lengkap menggabungkan keduanya dan hasilnya LEBIH BESAR dari perkiraan sederhana: penyerang 30%, 6 konfirmasi → 13,2%, bukan 0,6%.",
            "Agar di bawah 0,1%: penyerang 10% butuh 5 konfirmasi, 30% butuh 24, 45% butuh 340; penyerang 50% atau lebih tidak bisa dihentikan dengan menunggu.",
            "\"6 konfirmasi\" adalah kebiasaan (sekitar 0,024% untuk penyerang 10%), bukan aturan protokol."
          ],
          practice: [
            { type: "number", q: "Penyerang q = 0,2 dan kamu menunggu z = 4 konfirmasi. Berapa λ (rata-rata blok penyerang)?", answer: 1, tol: 0.01, hint: "λ = z × q ÷ p, dengan p = 1 − q.", solution: "p = 0,8; λ = 4 × 0,2 ÷ 0,8 = 1. Rata-rata penyerang sudah punya 1 blok." },
            { type: "number", q: "Dengan perkiraan sederhana, berapa peluang penyerang q = 0,25 menyusul dari ketertinggalan 2 blok? (dalam %, dua angka di belakang koma)", answer: 11.11, tol: 0.02, unit: "%", hint: "q ÷ p = 0,25 ÷ 0,75 = 1/3; lalu pangkat 2.", solution: "(1/3)² = 1/9 ≈ 11,11%." },
            { type: "number", q: "Menurut tabel whitepaper, berapa konfirmasi yang dibutuhkan agar penyerang 25% punya peluang di bawah 0,1%?", answer: 15, tol: 0.5, unit: "blok", hint: "Lihat grafik konfirmasi yang dibutuhkan.", solution: "15 konfirmasi untuk penyerang 25%." }
          ],
          quiz: [
            {
              q: "Mengapa rumus lengkap whitepaper memberi peluang lebih besar daripada (q ÷ p)^z?",
              options: [
                "Ikut menghitung blok penyerang selama kamu menunggu",
                "Karena rumus lengkap memakai daya penyerang dua kali",
                "Karena whitepaper menganggap semua penambang curang",
                "Karena rumus sederhana sudah memasukkan biaya listrik"
              ],
              answer: 0,
              explain: "Penyerang sudah menambang diam-diam sejak transaksi dikirim, jadi ketertinggalannya lebih kecil dari z."
            },
            {
              q: "Banyaknya blok yang sudah dimiliki penyerang mengikuti distribusi apa?",
              options: [
                "Distribusi Poisson",
                "Distribusi seragam",
                "Selalu tepat z blok",
                "Selalu nol blok"
              ],
              answer: 0,
              explain: "Penemuan blok adalah kejadian acak dengan laju tetap; banyaknya dalam selang waktu tertentu mengikuti distribusi Poisson."
            },
            {
              q: "Penyerang menguasai 55% daya komputasi. Berapa konfirmasi yang cukup aman?",
              options: [
                "Tidak ada yang cukup",
                "Cukup 6 konfirmasi",
                "Cukup 24 konfirmasi",
                "Cukup 340 konfirmasi"
              ],
              answer: 0,
              explain: "Saat q ≥ p, rasio q ÷ p ≥ 1 sehingga penyerang pada akhirnya selalu bisa menyusul."
            },
            {
              q: "Apa status angka \"6 konfirmasi\" di Bitcoin?",
              options: [
                "Kebiasaan, bukan aturan protokol",
                "Aturan wajib di dalam kode Bitcoin",
                "Batas maksimal blok per transaksi",
                "Jumlah penambang yang harus setuju"
              ],
              answer: 0,
              explain: "Protokol tidak mewajibkan angka tertentu; setiap penerima memilih sesuai nilai transaksinya."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 7: KRIPTOGRAFI MENDALAM & ERA KUANTUM ---------------- */
    {
      id: "bc-kriptografi",
      level: "Kriptografi",
      title: "Kriptografi Mendalam & Era Kuantum",
      summary: "Dari yang paling dekat ke yang paling jauh: enkripsi vs hash vs tanda tangan, simetris vs asimetris, pertukaran kunci, di mana enkripsi dipakai, ECDSA, lalu ancaman komputer kuantum, PQC, dan migrasinya.",
      lessons: [
        {
          id: "bc-enk-1",
          title: "Enkripsi, Hash & Tanda Tangan — Tiga Hal yang Sering Tertukar",
          duration: "14 menit",
          content: `
<p>Tiga kata ini terus muncul berbarengan sampai banyak orang mengira artinya sama. Padahal ketiganya <b>menjawab pertanyaan yang berbeda</b> — dan salah satunya hampir tidak dipakai blockchain sama sekali.</p>

<div data-diagram="compare3" data-cols="Enkripsi::Menyembunyikan isi::Bisa dibalik dengan kunci|Hash::Menyegel isi::Tidak bisa dibalik|Tanda tangan::Membuktikan asal::Isinya tetap terbuka" data-caption="Tiga operasi, tiga tujuan yang sama sekali berbeda"></div>

<h3>Fundamental: apa itu enkripsi?</h3>
<div class="callout">
<b>Enkripsi</b> mengubah pesan yang bisa dibaca (<i>plaintext</i>) menjadi deretan tak bermakna (<i>ciphertext</i>), memakai sebuah <b>kunci</b>. Yang memegang kunci yang tepat bisa <b>mengembalikannya</b> menjadi pesan asli — proses itu disebut <b>dekripsi</b>.<br><br>
Kata kuncinya: <b>bisa dibalik</b>. Enkripsi dirancang untuk dibuka lagi — oleh orang yang berhak.
</div>

<p>Bandingkan dengan <b>hash</b>, yang sudah kamu pelajari di modul Fondasi Kriptografi: hash <b>tidak punya kunci</b> dan <b>tidak bisa dibalik</b>. Ia bukan untuk menyembunyikan, melainkan untuk <b>menyegel</b> — membuktikan sesuatu belum berubah.</p>

<h3>Rasakan bedanya sendiri</h3>

<div data-demo="tiga-operasi"></div>

<h3>Tabel pembeda</h3>
<table class="tbl">
  <tr><th></th><th>Enkripsi</th><th>Hash</th><th>Tanda tangan</th></tr>
  <tr><td><b>Tujuannya</b></td><td>Kerahasiaan</td><td>Keutuhan</td><td>Keaslian</td></tr>
  <tr><td><b>Pakai kunci?</b></td><td>Ya</td><td>Tidak</td><td>Ya (kunci privat)</td></tr>
  <tr><td><b>Bisa dibalik?</b></td><td class="ok-cell">Ya, dengan kunci</td><td class="bad-cell">Tidak pernah</td><td>Tidak perlu dibalik</td></tr>
  <tr><td><b>Isi pesan</b></td><td>Tersembunyi</td><td>Tidak ikut disimpan</td><td class="bad-cell">Tetap terbuka</td></tr>
  <tr><td><b>Dipakai blockchain?</b></td><td class="bad-cell">Hampir tidak</td><td class="ok-cell">Ya, inti</td><td class="ok-cell">Ya, inti</td></tr>
</table>

<div class="callout warn">
<b>Salah paham paling luas tentang blockchain.</b><br><br>
Kalimat <i>"data blockchain aman karena dienkripsi"</i> <b>keliru</b>. Blockchain justru <b>tidak mengenkripsi</b> isinya — seluruh transaksinya sengaja dibuat <b>terbuka</b> agar siapa pun bisa memeriksanya sendiri. Itulah sumber kepercayaannya.<br><br>
Yang dipakai blockchain adalah <b>hash</b> (menyegel agar tak bisa diubah diam-diam) dan <b>tanda tangan digital</b> (membuktikan siapa pemiliknya). Keduanya <b>bukan</b> enkripsi.
</div>

<h3>Dua keluarga enkripsi</h3>
<table class="tbl">
  <tr><th></th><th>Simetris</th><th>Asimetris</th></tr>
  <tr><td><b>Kuncinya</b></td><td>Satu kunci untuk mengunci &amp; membuka</td><td>Sepasang: publik untuk mengunci, privat untuk membuka</td></tr>
  <tr><td><b>Kecepatan</b></td><td class="ok-cell">Sangat cepat</td><td>Jauh lebih lambat</td></tr>
  <tr><td><b>Masalahnya</b></td><td class="bad-cell">Bagaimana mengirim kuncinya dengan aman?</td><td>Berat untuk data besar</td></tr>
  <tr><td><b>Contohnya</b></td><td>AES</td><td>RSA, kriptografi kurva eliptik</td></tr>
</table>

<div class="callout">
<b>Perhatikan arah kuncinya pada enkripsi asimetris</b> — ini sering membingungkan:<br><br>
• Untuk <b>merahasiakan</b>: dikunci dengan kunci <b>publik</b> penerima, dibuka dengan kunci <b>privat</b>-nya. Siapa pun bisa mengirimimu pesan rahasia, hanya kamu yang bisa membukanya.<br>
• Untuk <b>menandatangani</b>: dibuat dengan kunci <b>privat</b>, diperiksa dengan kunci <b>publik</b>. Arahnya <b>terbalik</b>.<br><br>
Sepasang kunci yang sama, dua kegunaan yang berlawanan arah.
</div>
`,
          keyPoints: [
            "Enkripsi mengubah plaintext jadi ciphertext dengan kunci, dan BISA dibalik (dekripsi) oleh pemegang kunci.",
            "Hash tidak punya kunci dan tidak bisa dibalik — tujuannya menyegel, bukan menyembunyikan.",
            "Tanda tangan membuktikan asal-usul, tetapi isi pesannya tetap terbuka untuk semua orang.",
            "Blockchain HAMPIR TIDAK memakai enkripsi — isinya sengaja terbuka; yang dipakai adalah hash dan tanda tangan.",
            "Kalimat 'data blockchain aman karena dienkripsi' adalah salah paham yang paling luas.",
            "Simetris: satu kunci, cepat, tapi sulit mengirim kuncinya. Asimetris: sepasang kunci, lambat, tapi kunci publik boleh disebar.",
            "Arah kunci berlawanan: merahasiakan pakai kunci publik penerima; menandatangani pakai kunci privat sendiri.",
          ],
          quiz: [
            {
              q: "Apa pembeda paling mendasar antara enkripsi dan hash?",
              options: [
                "Enkripsi bisa dibalik dengan kunci, sedangkan hash tidak bisa dibalik sama sekali",
                "Enkripsi menghasilkan keluaran panjang tetap, sedangkan hash panjangnya mengikuti masukan",
                "Enkripsi hanya untuk teks, sedangkan hash bisa dipakai untuk segala jenis berkas",
                "Enkripsi memerlukan dua kunci, sedangkan hash hanya memerlukan satu kunci",
              ],
              answer: 0,
              explain: "Enkripsi dirancang untuk dibuka lagi oleh yang berhak; hash memang tidak pernah dimaksudkan untuk dibalik.",
            },
            {
              q: "Kenapa kalimat 'data blockchain aman karena dienkripsi' itu keliru?",
              options: [
                "Karena isi blockchain justru sengaja dibuat terbuka; yang dipakai hash dan tanda tangan",
                "Karena enkripsi di blockchain baru diterapkan pada jaringan generasi terbaru",
                "Karena blockchain memakai enkripsi yang kuncinya dipegang para penambang",
                "Karena data blockchain tidak pernah disimpan, melainkan dihitung ulang tiap saat",
              ],
              answer: 0,
              explain: "Keterbukaan itulah sumber kepercayaannya — siapa pun bisa memeriksa sendiri tanpa izin.",
            },
            {
              q: "Untuk mengirim pesan rahasia kepada seseorang, kunci mana yang dipakai mengunci?",
              options: [
                "Kunci publik milik penerima, sehingga hanya kunci privatnya yang bisa membuka",
                "Kunci privat milik pengirim, sehingga penerima membuka dengan kunci publik pengirim",
                "Kunci publik milik pengirim, karena penerima sudah mengetahuinya lebih dulu",
                "Kunci privat milik penerima, yang lebih dulu dikirimkan lewat jalur terpisah",
              ],
              answer: 0,
              explain: "Untuk merahasiakan arahnya begitu; untuk menandatangani arahnya justru terbalik.",
            },
            {
              q: "Apa kelemahan utama enkripsi simetris yang membuat enkripsi asimetris dibutuhkan?",
              options: [
                "Sulitnya mengirim kunci dengan aman kepada pihak yang belum pernah ditemui",
                "Prosesnya jauh lebih lambat sehingga tidak cocok untuk data berukuran besar",
                "Hasil enkripsinya bisa dibongkar tanpa kunci bila pesannya cukup panjang",
                "Kuncinya harus berbeda untuk setiap pesan yang dikirimkan",
              ],
              answer: 0,
              explain: "Justru soal distribusi kunci inilah yang dipecahkan pertukaran kunci dan kriptografi asimetris.",
            },
          ],
        },
        {
          id: "bc-kri-1",
          title: "Kriptografi Simetris vs Asimetris",
          duration: "13 menit",
          content: `
<p>Kamu sudah tahu ada <b>kunci privat</b> &amp; <b>kunci publik</b>. Sekarang kita lihat gambaran utuhnya: sebenarnya ada <b>dua keluarga besar</b> kriptografi, dan keduanya dipakai bersamaan.</p>

<div data-diagram="vs" data-left="SIMETRIS::Satu kunci, dua arah::Cepat &amp; ringan::Masalah: cara kirim kuncinya?" data-right="ASIMETRIS::Sepasang kunci::Lebih lambat::Kunci publik boleh disebar" data-caption="Dua keluarga besar kriptografi"></div>


<h3>1. Kriptografi Simetris — satu kunci untuk semua</h3>
<div class="callout">
<b>Analogi gembok biasa:</b> satu kunci untuk <b>mengunci</b> dan <b>membuka</b>. Kalau aku mau mengirim kotak terkunci padamu, kamu butuh <b>salinan kunci yang sama</b>.
<br><br><b>Contoh algoritma:</b> <b>AES</b> (Advanced Encryption Standard) — standar dunia, dipakai di WhatsApp, HTTPS, dan enkripsi file. Ukurannya AES-128 atau AES-256.
</div>
<ul>
  <li>👍 <b>Sangat cepat</b> — cocok untuk data besar.</li>
  <li>👎 <b>Masalah pengiriman kunci</b>: bagaimana mengirim kunci ke lawan bicara dengan aman, kalau salurannya belum aman?</li>
</ul>

<h3>2. Kriptografi Asimetris — sepasang kunci</h3>
<div class="callout">
<b>Analogi kotak pos:</b> siapa pun bisa <b>memasukkan surat</b> lewat lubang (kunci publik), tapi hanya pemilik yang bisa <b>membukanya</b> (kunci privat).
<br><br><b>Contoh algoritma:</b> <b>RSA</b> (berbasis sulitnya memfaktorkan bilangan besar) dan <b>ECC</b> (Elliptic Curve Cryptography, berbasis kurva eliptik).
</div>
<ul>
  <li>👍 <b>Memecahkan masalah pengiriman kunci</b> — kunci publik boleh disebar bebas.</li>
  <li>👎 <b>Jauh lebih lambat</b> daripada simetris.</li>
</ul>

<h3>Kenapa crypto memakai ECC, bukan RSA?</h3>
<table class="tbl">
  <tr><th>Tingkat keamanan setara</th><th>Ukuran kunci RSA</th><th>Ukuran kunci ECC</th></tr>
  <tr><td>~112 bit</td><td>2048 bit</td><td>224 bit</td></tr>
  <tr><td>~128 bit</td><td>3072 bit</td><td><b>256 bit</b></td></tr>
  <tr><td>~256 bit</td><td>15360 bit</td><td>512 bit</td></tr>
</table>
<div class="callout">
<b>Inilah alasannya:</b> ECC memberi keamanan setara dengan kunci <b>jauh lebih kecil</b>. Untuk blockchain — di mana setiap byte memakan ruang blok &amp; biaya gas — ini sangat penting. Bitcoin &amp; Ethereum memakai kurva bernama <b>secp256k1</b>.
</div>

<h3>Kenyataannya: keduanya dipakai bersama (hybrid)</h3>
<p>Saat kamu membuka situs <b>https://</b>, yang terjadi adalah:</p>
<ol>
  <li><b>Asimetris</b> dipakai sebentar untuk <b>menyepakati sebuah kunci rahasia bersama</b>.</li>
  <li>Setelah itu, seluruh percakapan diamankan dengan <b>simetris (AES)</b> yang jauh lebih cepat.</li>
</ol>
<p>Jadi keduanya bukan saingan — mereka <b>saling melengkapi</b>: asimetris untuk bertukar kunci, simetris untuk kerja berat.</p>
`,
          keyPoints: [
            "Simetris (mis. AES): satu kunci untuk mengunci & membuka — sangat cepat, tapi sulit mengirim kuncinya dengan aman.",
            "Asimetris (mis. RSA, ECC): sepasang kunci publik-privat — memecahkan masalah pengiriman kunci, tapi lambat.",
            "ECC memberi keamanan setara RSA dengan kunci jauh lebih kecil (ECC 256-bit ≈ RSA 3072-bit).",
            "Blockchain memakai ECC (kurva secp256k1) karena hemat ruang blok & biaya.",
            "Praktiknya hybrid: asimetris untuk bertukar kunci, lalu simetris untuk mengamankan datanya.",
          ],
          practice: [
            { type: "choice", q: "Kenapa blockchain memilih ECC daripada RSA?", options: ["ECC lebih tua", "Keamanan setara dengan ukuran kunci jauh lebih kecil — hemat ruang blok & biaya", "RSA tidak aman", "ECC gratis"], answer: 1, hint: "Setiap byte di blockchain memakan biaya.", solution: "ECC-256 setara RSA-3072; ukuran kecil sangat berharga di blockchain." },
            { type: "choice", q: "Saat membuka situs https, bagaimana kedua jenis kriptografi dipakai?", options: ["Hanya simetris", "Hanya asimetris", "Asimetris untuk menyepakati kunci, lalu simetris untuk mengamankan percakapan", "Tidak memakai kriptografi"], answer: 2, hint: "Yang lambat dipakai sebentar, yang cepat dipakai lama.", solution: "Model hybrid: asimetris menukar kunci, simetris (AES) mengamankan data." },
          ],
          quiz: [
            {
              q: "Apa kelemahan utama kriptografi simetris?",
              options: [
                "Sulitnya mengirim kunci dengan aman kepada lawan bicara",
                "Prosesnya jauh lebih lambat daripada kriptografi asimetris",
                "Kuncinya harus diganti setiap kali mengirimkan satu pesan",
                "Hanya bisa dipakai untuk pesan teks, bukan berkas lain",
              ],
              answer: 0,
              explain:
                "Kedua pihak butuh kunci yang sama — masalahnya bagaimana mengirimkannya dengan aman.",
            },
            {
              q: "ECC-256 kira-kira setara dengan RSA berapa bit?",
              options: ["256 bit", "512 bit", "3072 bit", "128 bit"],
              answer: 2,
              explain: "ECC jauh lebih efisien: 256-bit ECC ≈ 3072-bit RSA.",
            },
          ],
        },
        {
          id: "bc-enk-2",
          title: "Menyepakati Kunci di Jalur Terbuka",
          duration: "13 menit",
          content: `
<p>Enkripsi simetris cepat, tapi punya satu masalah yang tampak mustahil: <b>bagaimana dua orang menyepakati kunci rahasia kalau semua jalur komunikasinya bisa disadap?</b> Pelajaran ini menjawabnya.</p>

<h3>Masalahnya dulu</h3>
<div class="callout">
Kamu ingin mengirim pesan terenkripsi ke seseorang di negara lain yang belum pernah kamu temui. Kalian butuh kunci yang sama. Tapi kalau kunci itu dikirim lewat internet, <b>penyadap ikut mendapatkannya</b> — dan seluruh enkripsinya jadi percuma.<br><br>
Selama berabad-abad, satu-satunya jawaban adalah <b>bertemu langsung</b> atau memakai kurir tepercaya. Itu tidak mungkin untuk internet.
</div>

<h3>Jawabannya: hitung rahasia bersama, jangan kirimkan</h3>
<p>Idenya sangat cerdik: alih-alih mengirim kunci, kedua pihak <b>menghitung sendiri</b> kunci yang sama dari potongan-potongan yang boleh terlihat umum. Angka rahasianya <b>tidak pernah melintas di jalur mana pun</b>.</p>

<div data-demo="tukar-kunci"></div>

<div class="callout warn">
<b>Kenapa penyadap kalah?</b> Ia mendengar semuanya: g, p, dan kedua angka yang dikirim. Untuk menemukan rahasia bersamanya, ia harus memecahkan <b>g^x mod p</b> — mencari x dari hasilnya. Dengan angka kecil di demo itu mudah dicoba satu per satu; dengan bilangan ratusan digit, mencobanya satu per satu <b>memakan waktu lebih lama dari umur alam semesta</b>.<br><br>
Inilah "fungsi satu arah" yang kamu pelajari di modul Matematika, dipakai untuk sesuatu yang sangat praktis.
</div>

<h3>Enkripsi hibrida — kenapa keduanya dipakai bersama</h3>
<p>Setelah kunci bersama disepakati, komunikasi selanjutnya <b>tidak</b> memakai kriptografi asimetris. Terlalu lambat. Yang dilakukan:</p>

<div data-diagram="pipeline" data-stages="Sepakati kunci::cara asimetris, sekali saja|Buat kunci sesi::kunci simetris acak|Kirim data::dienkripsi simetris, cepat|Selesai::kunci sesi dibuang" data-caption="Enkripsi hibrida: yang lambat dipakai sekali, yang cepat dipakai seterusnya"></div>

<div class="callout">
<b>Inilah yang terjadi setiap kali kamu membuka situs berawalan https</b> — termasuk saat membuka bursa kripto atau situs ini sendiri. Prosesnya berlangsung dalam sepersekian detik, berulang tiap kali kamu membuka halaman baru, dan kamu tidak pernah menyadarinya.
</div>

<h3>Satu sifat yang sangat berharga</h3>
<div class="callout warn">
<b>Forward secrecy.</b> Karena kunci sesi dibuat <b>baru setiap kali</b> lalu dibuang, penyerang yang berhasil mencuri kunci privat servermu <b>hari ini</b> tetap tidak bisa membuka rekaman percakapan <b>tahun lalu</b>.<br><br>
Ini penting untuk ancaman "rekam sekarang, buka nanti" — data sandi yang direkam hari ini untuk dibuka kelak dengan komputer kuantum, yang dibahas di pelajaran Ancaman Komputer Kuantum sebentar lagi — meski forward secrecy tidak menolong bila algoritma pertukaran kuncinya sendiri yang jebol.
</div>
`,
          keyPoints: [
            "Masalah lama: dua pihak butuh kunci yang sama, tapi mengirim kunci lewat jalur yang disadap membuatnya percuma.",
            "Solusinya: kedua pihak menghitung sendiri kunci yang sama; angka rahasianya tidak pernah dikirimkan.",
            "Penyadap mendengar g, p, dan kedua angka publik, tapi harus memecahkan g^x mod p untuk mendapatkan rahasianya.",
            "Enkripsi hibrida: asimetris dipakai sekali untuk menyepakati kunci, lalu simetris yang cepat untuk seluruh datanya.",
            "Inilah yang terjadi setiap kali membuka situs https, dalam sepersekian detik tanpa disadari.",
            "Forward secrecy: kunci sesi dibuat baru tiap kali lalu dibuang, sehingga rekaman lama tetap aman meski kunci server dicuri kemudian.",
          ],
          quiz: [
            {
              q: "Apa inti cerdik dari pertukaran kunci Diffie-Hellman?",
              options: [
                "Kedua pihak menghitung sendiri kunci yang sama tanpa pernah mengirimkannya",
                "Kunci dikirim dalam bentuk terenkripsi sehingga penyadap tak bisa membacanya",
                "Kunci dipecah menjadi beberapa bagian yang dikirim lewat jalur berbeda",
                "Kunci diganti begitu cepat sehingga penyadap tak sempat menangkapnya",
              ],
              answer: 0,
              explain: "Rahasianya tidak pernah melintas di jalur mana pun — itulah yang membuatnya aman meski seluruh percakapan disadap.",
            },
            {
              q: "Kenapa komunikasi https memakai enkripsi simetris DAN asimetris sekaligus?",
              options: [
                "Asimetris dipakai sekali menyepakati kunci, simetris yang cepat untuk seluruh datanya",
                "Simetris dipakai untuk data penting, asimetris untuk data yang kurang penting",
                "Keduanya dipakai bergantian agar penyadap kebingungan membedakannya",
                "Asimetris dipakai mengirim data, simetris hanya untuk memeriksa keutuhannya",
              ],
              answer: 0,
              explain: "Asimetris terlalu lambat untuk data besar; simetris tidak bisa menyelesaikan masalah distribusi kunci. Keduanya saling melengkapi.",
            },
            {
              q: "Apa manfaat forward secrecy?",
              options: [
                "Rekaman percakapan lama tetap aman walau kunci privat server dicuri kemudian",
                "Percakapan menjadi lebih cepat karena kuncinya tidak perlu dihitung ulang",
                "Penyadap tidak bisa mengetahui siapa yang sedang berkomunikasi dengan siapa",
                "Pesan yang salah kirim bisa ditarik kembali sebelum dibaca penerimanya",
              ],
              answer: 0,
              explain: "Karena tiap sesi memakai kunci baru yang langsung dibuang, tidak ada satu kunci yang membuka seluruh riwayat.",
            },
          ],
        },
        {
          id: "bc-enk-3",
          title: "Di Mana Enkripsi Sebenarnya Dipakai dalam Crypto",
          duration: "12 menit",
          content: `
<p>Kita sudah tahu blockchain <b>tidak</b> mengenkripsi isinya. Lalu di mana enkripsi benar-benar dipakai dalam dunia kripto? Ternyata di banyak tempat — hanya saja bukan di tempat yang orang kira.</p>

<div data-diagram="layers" data-items="Berkas dompet di perangkatmu|Sambungan ke bursa (https)|Pesan &amp; kunci cadangan|Mempool terenkripsi (baru)" data-caption="Empat tempat enkripsi benar-benar bekerja di sekitar kripto"></div>

<h3>1. Berkas dompet di perangkatmu</h3>
<div class="callout">
Inilah pemakaian yang paling menyentuh kamu langsung. Kunci privat di dompetmu <b>disimpan dalam keadaan terenkripsi</b>, dan kata sandi yang kamu ketik saat membuka dompet adalah kunci yang membukanya.<br><br>
Artinya: pencuri yang mengambil berkas dompetmu <b>masih terhalang kata sandi</b>. Itulah kenapa kata sandi dompet yang lemah sangat berbahaya — ia satu-satunya lapisan antara berkas itu dan dana kamu.
</div>

<h3>2. Sambungan ke bursa dan dompet</h3>
<p>Setiap kali membuka aplikasi bursa, sambunganmu dienkripsi memakai proses yang baru saja kamu pelajari. Tanpa itu, siapa pun yang berbagi jaringan Wi-Fi denganmu bisa membaca kata sandi dan kode OTP-mu.</p>

<h3>3. Mencadangkan frasa pemulihan</h3>
<div class="callout warn">
Banyak orang memotret frasa pemulihannya lalu menyimpannya di layanan awan. Layanan itu memang menyimpan berkas dalam keadaan terenkripsi — <b>tetapi kuncinya dipegang penyedia layanan</b>, bukan kamu.<br><br>
Kalau memang harus disimpan digital, enkripsi sendiri lebih dulu dengan kata sandi yang hanya kamu ketahui. Tapi cara yang paling disarankan tetap: <b>tulis di kertas, simpan di tempat aman, jangan difoto</b>.
</div>

<h3>4. Perbatasan yang sedang dikerjakan</h3>
<table class="tbl">
  <tr><th>Yang sedang dikembangkan</th><th>Masalah yang ingin dipecahkan</th></tr>
  <tr><td><b>Mempool terenkripsi</b></td><td>Transaksi yang menunggu kini terlihat semua orang, sehingga bisa disalip demi keuntungan. Menyembunyikannya sampai masuk blok mencegah hal itu</td></tr>
  <tr><td><b>Enkripsi homomorfik</b></td><td>Menghitung <b>di atas data terenkripsi</b> tanpa membukanya. Masih sangat lambat, tapi akan sangat berguna bila matang</td></tr>
  <tr><td><b>Bukti tanpa pengetahuan</b></td><td>Membuktikan sesuatu benar tanpa mengungkap datanya — dibahas di pelajaran Zero-Knowledge Proof</td></tr>
</table>

<div class="callout">
<b>Pola yang terlihat dari keempatnya:</b> enkripsi dipakai di <b>tepi</b> sistem kripto — pada perangkatmu, pada sambungan, pada cadangan — sementara <b>inti blockchainnya sendiri tetap terbuka</b>.<br><br>
Ini bukan kelalaian, melainkan pilihan rancangan. Blockchain memilih <b>keterbukaan yang bisa diverifikasi</b> daripada kerahasiaan. Privasi lalu dikerjakan dengan cara lain — seperti bukti tanpa pengetahuan — bukan dengan menyembunyikan buku besarnya.
</div>

<div class="callout warn">
<b>Yang praktis bisa kamu lakukan hari ini:</b><br>
• Pakai kata sandi dompet yang <b>panjang dan unik</b> — itu kunci enkripsi berkas dompetmu.<br>
• Pastikan alamat situs bursa berawalan <b>https</b> dan ejaannya benar sebelum memasukkan apa pun.<br>
• <b>Jangan</b> menyimpan frasa pemulihan sebagai foto atau catatan biasa di layanan awan.<br>
• Sadari bahwa enkripsi melindungi <b>berkas dan sambungan</b> — bukan membuat transaksimu di blockchain jadi rahasia.
</div>
`,
          keyPoints: [
            "Berkas dompet disimpan terenkripsi; kata sandi yang kamu ketik adalah kunci pembukanya.",
            "Kata sandi dompet yang lemah berbahaya karena ia satu-satunya lapisan antara berkas curian dan dana kamu.",
            "Sambungan ke bursa dienkripsi lewat https; tanpa itu pengguna Wi-Fi yang sama bisa membaca kata sandi dan OTP.",
            "Menyimpan frasa pemulihan di layanan awan berarti kuncinya dipegang penyedia layanan, bukan kamu.",
            "Perbatasan yang sedang dikerjakan: mempool terenkripsi, enkripsi homomorfik, dan bukti tanpa pengetahuan.",
            "Polanya: enkripsi dipakai di TEPI sistem (perangkat, sambungan, cadangan); inti blockchainnya tetap terbuka.",
            "Itu pilihan rancangan — blockchain memilih keterbukaan yang bisa diverifikasi, lalu mengerjakan privasi dengan cara lain.",
          ],
          quiz: [
            {
              q: "Apa yang sebenarnya dilindungi kata sandi dompet kriptomu?",
              options: [
                "Berkas dompet yang menyimpan kunci privat dalam keadaan terenkripsi",
                "Seluruh transaksi yang pernah kamu kirim agar tak terbaca di blockchain",
                "Saldo koinmu agar tidak bisa dilihat lewat block explorer publik",
                "Sambungan antara aplikasi dompet dan jaringan blockchain",
              ],
              answer: 0,
              explain: "Karena itu kata sandi yang lemah berbahaya: ia satu-satunya lapisan bila berkas dompetmu dicuri.",
            },
            {
              q: "Kenapa menyimpan foto frasa pemulihan di layanan awan berisiko?",
              options: [
                "Karena kunci enkripsi berkas itu dipegang penyedia layanan, bukan olehmu",
                "Karena berkas di layanan awan sama sekali tidak pernah dienkripsi",
                "Karena layanan awan otomatis membagikan berkas kepada pengguna lain",
                "Karena foto akan kehilangan kualitas sehingga frasanya jadi tak terbaca",
              ],
              answer: 0,
              explain: "Terenkripsi bukan berarti aman bagimu — yang menentukan adalah siapa yang memegang kuncinya.",
            },
            {
              q: "Apa pola pemakaian enkripsi dalam ekosistem kripto?",
              options: [
                "Di tepi sistem — perangkat, sambungan, cadangan — blockchainnya tetap terbuka",
                "Pada seluruh transaksi di blockchain sehingga isinya tak terbaca oleh publik",
                "Hanya oleh bursa besar, sedangkan dompet pribadi sama sekali tidak memakainya",
                "Untuk menyembunyikan saldo setiap alamat dari penelusuran block explorer",
              ],
              answer: 0,
              explain: "Blockchain sengaja memilih keterbukaan yang bisa diverifikasi; privasi dikerjakan lewat cara lain seperti bukti tanpa pengetahuan.",
            },
          ],
        },
        {
          id: "bc-kri-2",
          title: "ECDSA — Tanda Tangan di Balik Bitcoin",
          duration: "13 menit",
          content: `
<p>Setiap kali kamu mengirim Bitcoin, yang sesungguhnya terjadi adalah <b>menandatangani</b> transaksi dengan <b>ECDSA</b>. Mari kita bedah.</p>

<div data-diagram="pipeline" data-stages="Kunci privat::angka acak raksasa|Kurva eliptik::titik dasar dikalikan|Kunci publik::hasilnya, boleh disebar|Satu arah::mustahil dihitung balik" data-caption="Mudah dihitung maju, praktis mustahil dibalik — itulah dasar keamanannya"></div>


<div class="callout">
<b>ECDSA</b> = <b>E</b>lliptic <b>C</b>urve <b>D</b>igital <b>S</b>ignature <b>A</b>lgorithm — algoritma tanda tangan digital berbasis kurva eliptik.
</div>

<h3>Dari kunci privat ke alamat</h3>
<ol>
  <li><b>Kunci privat</b> = sebuah <b>angka acak raksasa</b> (256 bit). Itu saja — hanya angka.</li>
  <li><b>Kunci publik</b> = hasil "perkalian" khusus kunci privat dengan titik tetap pada kurva. <b>Mudah dihitung maju</b>, tapi <b>mustahil dibalik</b>.</li>
  <li><b>Alamat</b> = hasil <b>hash</b> dari kunci publik (dipendekkan &amp; ditambah lapisan pengaman).</li>
</ol>
<pre class="code">kunci privat  --(mudah)-->  kunci publik  --(hash)-->  alamat
      ^                            |
      +------ MUSTAHIL dibalik ----+</pre>

<h3>Proses menandatangani</h3>
<ol>
  <li>Transaksi di-<b>hash</b> menjadi sidik jari.</li>
  <li>Sidik jari itu ditandatangani dengan <b>kunci privat</b> + sebuah <b>angka acak sekali pakai</b> (disebut <b>nonce</b>, biasanya ditulis <b>k</b>).</li>
  <li>Hasilnya sepasang angka tanda tangan.</li>
  <li>Siapa pun bisa <b>memverifikasi</b> memakai kunci publik — tanpa pernah melihat kunci privatmu.</li>
</ol>

<div class="callout warn">
<b>Bahaya nomor satu: nonce yang tidak benar-benar acak.</b>
<br><br>Kalau angka acak <b>k</b> dipakai <b>dua kali</b> — atau bisa ditebak — maka <b>kunci privat bisa dihitung</b> dari dua tanda tangan itu. Ini bukan teori: pernah terjadi pada perangkat konsol game terkenal dan pada beberapa dompet crypto yang generator acaknya lemah, mengakibatkan dana hilang.
<br><br><b>Pelajaran praktis:</b> selalu gunakan dompet/pustaka yang bereputasi baik. Jangan pernah membuat sendiri implementasi kriptografi — ini area di mana kesalahan kecil berakibat fatal.
</div>

<h3>Schnorr — penerus yang lebih baik</h3>
<p>Bitcoin kini juga mendukung <b>tanda tangan Schnorr</b> (lewat pembaruan Taproot). Keunggulannya:</p>
<ul>
  <li><b>Bisa digabung (aggregation)</b> — banyak tanda tangan diringkas jadi satu. Hemat ruang &amp; biaya.</li>
  <li><b>Lebih privat</b> — transaksi multi-tanda-tangan terlihat seperti transaksi biasa.</li>
  <li>Landasan matematikanya lebih sederhana &amp; mudah dibuktikan aman.</li>
</ul>

<div class="callout">
<b>Yang perlu diingat:</b> keamanan seluruh crypto-mu bertumpu pada dua sifat matematis — <b>hash tak bisa dibalik</b>, dan <b>kunci publik tak bisa dibalik jadi kunci privat</b>. Di pelajaran berikutnya kita bahas apa yang terjadi bila sifat kedua itu <b>terancam</b>.
</div>
`,
          keyPoints: [
            "ECDSA = algoritma tanda tangan digital berbasis kurva eliptik yang dipakai Bitcoin & Ethereum.",
            "Kunci privat = angka acak 256 bit → kunci publik (mudah maju, mustahil dibalik) → alamat (hasil hash).",
            "Menandatangani memakai kunci privat + nonce acak sekali pakai (k); verifikasi memakai kunci publik.",
            "Nonce yang berulang atau bisa ditebak membocorkan kunci privat — penyebab nyata hilangnya dana.",
            "Schnorr (Taproot) lebih unggul: tanda tangan bisa digabung, lebih hemat & privat.",
          ],
          practice: [
            { type: "choice", q: "Apa akibatnya bila nonce (k) dipakai dua kali saat menandatangani?", options: ["Tidak ada akibat", "Kunci privat bisa dihitung dari kedua tanda tangan tersebut", "Transaksi jadi lebih cepat", "Biaya gas naik"], answer: 1, hint: "Ini penyebab nyata beberapa dana hilang.", solution: "Nonce berulang membocorkan kunci privat — kesalahan fatal." },
            { type: "choice", q: "Apa keunggulan utama tanda tangan Schnorr?", options: ["Lebih lambat", "Banyak tanda tangan bisa digabung jadi satu — hemat ruang & lebih privat", "Tidak perlu kunci privat", "Menghapus biaya gas"], answer: 1, hint: "Aggregation.", solution: "Schnorr memungkinkan penggabungan tanda tangan sehingga hemat & privat." },
          ],
          quiz: [
            {
              q: "Urutan yang benar dalam ECDSA adalah?",
              options: [
                "Kunci privat → kunci publik → alamat",
                "Alamat → kunci publik → kunci privat",
                "Kunci publik → kunci privat → alamat",
                "Kunci publik → alamat → kunci privat",
              ],
              answer: 0,
              explain:
                "Kunci privat menurunkan kunci publik, lalu kunci publik di-hash menjadi alamat.",
            },
            {
              q: "Kenapa kita tidak boleh membuat sendiri implementasi kriptografi?",
              options: [
                "Kesalahan kecil seperti pengacak lemah bisa membocorkan kunci privat",
                "Algoritma kriptografi dilindungi paten sehingga tidak boleh ditiru",
                "Hasilnya tidak akan cocok dengan perangkat lunak dompet lain",
                "Prosesnya membutuhkan perangkat keras khusus yang sangat mahal",
              ],
              answer: 0,
              explain:
                "Kriptografi sangat tidak toleran terhadap kesalahan implementasi.",
            },
          ],
        },
        {
          id: "bc-kri-3",
          title: "Ancaman Komputer Kuantum",
          duration: "14 menit",
          content: `
<p>Seluruh keamanan crypto bertumpu pada satu asumsi: <b>ada soal matematika yang terlalu berat untuk dipecahkan komputer</b>. Komputer kuantum berpotensi mengubah asumsi itu — untuk sebagian soal.</p>

<div data-diagram="timeline" data-events="Sekarang::kuantum masih terlalu kecil|Disadap::data dikumpulkan &amp; disimpan|Nanti::kuantum jadi cukup kuat|Dibongkar::data lama ikut terbuka" data-caption="Bahayanya bukan nanti — data yang disadap hari ini bisa dibuka kemudian"></div>


<h3>Fundamental: apa bedanya komputer kuantum?</h3>
<div class="callout">
Komputer biasa memakai <b>bit</b>: bernilai <b>0 atau 1</b>. Komputer kuantum memakai <b>qubit</b> yang bisa berada dalam <b>gabungan keduanya sekaligus</b> (superposisi).
<br><br><b>Analogi labirin:</b> komputer biasa mencoba jalan <b>satu per satu</b>. Komputer kuantum, untuk jenis soal tertentu, seolah bisa <b>menelusuri banyak jalan sekaligus</b> lalu memperkuat jalur yang benar.
<br><br><b>Penting:</b> ini <b>bukan</b> "komputer super cepat untuk segalanya". Ia hanya jauh lebih baik pada <b>jenis soal tertentu</b> — dan celakanya, dua di antaranya adalah fondasi kriptografi kita.
</div>

<h3>Dua algoritma yang jadi ancaman</h3>
<table class="tbl">
  <tr><th>Algoritma</th><th>Menyerang</th><th>Dampaknya</th></tr>
  <tr><td><b>Shor</b> (1994)</td><td>RSA, ECC, ECDSA</td><td><b>PATAH TOTAL</b> — kunci privat bisa dihitung dari kunci publik</td></tr>
  <tr><td><b>Grover</b> (1996)</td><td>AES, SHA-256 (hash)</td><td><b>Melemahkan separuh</b> — masih bisa diatasi dengan memperbesar ukuran kunci</td></tr>
</table>

<div class="callout warn">
<b>Perbedaan ini krusial:</b>
<ul>
  <li><b>Simetris &amp; hash</b> (AES, SHA-256) → cukup <b>diperbesar</b>. AES-256 tetap aman; SHA-256 masih memadai.</li>
  <li><b>Asimetris</b> (RSA, ECC/ECDSA) → <b>harus diganti algoritmanya</b>. Memperbesar kunci tidak menolong.</li>
</ul>
</div>

<h3>Coba sendiri — lihat dampaknya per algoritma</h3>
<div data-demo="js-playground">// Tingkat keamanan sebelum vs sesudah era komputer kuantum
const algoritma = [
  { nama: "AES-128  (simetris) ", bit: 128, jenis: "simetris" },
  { nama: "AES-256  (simetris) ", bit: 256, jenis: "simetris" },
  { nama: "SHA-256  (hash)     ", bit: 256, jenis: "simetris" },
  { nama: "RSA-2048 (asimetris)", bit: 112, jenis: "asimetris" },
  { nama: "ECC-256  (asimetris)", bit: 128, jenis: "asimetris" }
];

algoritma.forEach(function(a){
  let sesudah;
  if (a.jenis === "simetris") {
    sesudah = (a.bit / 2) + " bit  (Grover memangkas separuh)";
  } else {
    sesudah = "PATAH  (Shor)";
  }
  console.log(a.nama + " | sebelum: " + a.bit + " bit  ->  sesudah: " + sesudah);
});

console.log("-----");
console.log("Simetris & hash : cukup perbesar ukuran kunci.");
console.log("Asimetris       : algoritmanya HARUS diganti.");</div>

<h3>Dampaknya khusus ke Bitcoin</h3>
<ul>
  <li><b>Penambangan (SHA-256)</b> → relatif aman. Grover hanya memberi percepatan terbatas, dan mesin ASIC sudah sangat paralel.</li>
  <li><b>Tanda tangan (ECDSA)</b> → <b>inilah titik lemah sesungguhnya</b>. Bila kunci publik diketahui, kunci privat bisa dihitung.</li>
</ul>
<div class="callout">
<b>Kabar baiknya:</b> alamat Bitcoin modern menyimpan <b>hash</b> dari kunci publik, bukan kunci publiknya. Selama kamu <b>belum pernah membelanjakan</b> dari alamat itu, kunci publikmu belum terungkap — ada lapisan pelindung tambahan.
<br><br><b>Kabar kurang baiknya:</b> begitu kamu bertransaksi, kunci publik <b>terungkap</b>. Alamat yang dipakai berulang &amp; koin-koin era awal (yang formatnya langsung memuat kunci publik) lebih terekspos.
</div>

<div class="callout warn">
<b>Jujur soal waktunya:</b> komputer kuantum yang cukup besar &amp; stabil untuk memecahkan ECC <b>BELUM ADA</b> hari ini, dan perkiraan kapan hadirnya <b>sangat bervariasi</b> di kalangan ahli. Jangan percaya siapa pun yang mengklaim tahu tanggal pastinya.
<br><br>Tapi ada alasan bertindak <b>sekarang</b>: strategi <b>"harvest now, decrypt later"</b> — penyerang bisa <b>merekam data terenkripsi hari ini</b>, menyimpannya, lalu membukanya bertahun-tahun kemudian saat teknologinya matang. Untuk rahasia berumur panjang, itu ancaman nyata hari ini.
</div>
`,
          keyPoints: [
            "Komputer kuantum memakai qubit (superposisi) — jauh lebih baik hanya untuk jenis soal tertentu, bukan segalanya.",
            "Algoritma Shor memecahkan RSA & ECC/ECDSA sepenuhnya — kunci privat bisa dihitung dari kunci publik.",
            "Algoritma Grover memangkas separuh kekuatan simetris & hash — diatasi dengan memperbesar ukuran kunci.",
            "Bitcoin: penambangan relatif aman; tanda tangan ECDSA adalah titik lemah utamanya.",
            "Alamat yang belum pernah dibelanjakan lebih terlindungi (kunci publik masih tersembunyi di balik hash).",
            "Komputer kuantum pemecah ECC belum ada & waktunya tak pasti; namun 'harvest now, decrypt later' membuatnya mendesak sekarang.",
          ],
          practice: [
            { type: "choice", q: "Algoritma kuantum mana yang memecahkan ECDSA secara total?", options: ["Grover", "Shor", "SHA-256", "AES"], answer: 1, hint: "Yang menyerang kriptografi asimetris.", solution: "Shor memecahkan faktorisasi & logaritma diskret — dasar RSA dan ECC." },
            { type: "choice", q: "Apa itu strategi 'harvest now, decrypt later'?", options: ["Menambang koin sekarang", "Merekam data terenkripsi hari ini untuk dibuka nanti saat kuantum matang", "Menjual data", "Mempercepat transaksi"], answer: 1, hint: "Kenapa ancamannya mendesak walau kuantum belum ada?", solution: "Data yang direkam sekarang bisa dibuka bertahun-tahun kemudian." },
          ],
          quiz: [
            {
              q: "Apa dampak algoritma Grover terhadap AES-256?",
              options: [
                "Memangkas kekuatannya jadi setara sekitar 128 bit, yang masih aman",
                "Membuatnya bisa dipecahkan dalam hitungan menit oleh komputer kuantum",
                "Tidak berdampak sama sekali karena AES kebal terhadap serangan kuantum",
                "Memaksa panjang kuncinya dinaikkan jadi 1024 bit agar tetap aman",
              ],
              answer: 0,
              explain:
                "Grover memberi percepatan kuadratik; AES-256 tetap memadai setelahnya.",
            },
            {
              q: "Manakah pernyataan yang jujur tentang waktu datangnya ancaman kuantum?",
              options: [
                "Belum ada komputer kuantum sebesar itu, dan perkiraannya sangat beragam",
                "Sudah ada komputer kuantum yang mampu memecahkan kunci Bitcoin kini",
                "Para ahli sepakat ancamannya akan tiba tepat pada tahun 2030",
                "Ancaman itu dipastikan tidak akan pernah terwujud secara teknis",
              ],
              answer: 0,
              explain:
                "Belum ada mesin yang mampu; jangka waktunya masih menjadi perdebatan ahli.",
            },
          ],
        },
        {
          id: "bc-kri-4",
          title: "Kriptografi Tahan Kuantum (PQC)",
          duration: "14 menit",
          content: `
<p>Kalau RSA &amp; ECC bisa dipatahkan, apa penggantinya? Jawabannya: <b>Post-Quantum Cryptography (PQC)</b> — kriptografi yang dirancang tetap aman <b>bahkan terhadap komputer kuantum</b>.</p>

<div data-diagram="compare3" data-cols="Berbasis kisi::Kyber, Dilithium::paling siap dipakai luas|Berbasis hash::SPHINCS+::paling dipercaya, lebih lambat|Berbasis kode::Classic McEliece::sangat aman, kunci besar" data-caption="Tiga pendekatan kriptografi tahan kuantum yang distandarkan NIST"></div>


<div class="callout">
<b>Idenya sederhana:</b> cari soal matematika yang <b>tetap berat</b> untuk komputer kuantum. Shor sangat hebat pada dua soal spesifik (faktorisasi &amp; logaritma diskret) — tapi tidak pada semua soal. PQC dibangun di atas soal-soal <b>jenis lain</b>.
<br><br><b>Catatan penting:</b> PQC berjalan di komputer <b>biasa</b>. Kamu tidak butuh perangkat kuantum untuk memakainya.
</div>

<h3>Keluarga PQC</h3>
<table class="tbl">
  <tr><th>Keluarga</th><th>Berbasis soal</th><th>Catatan</th></tr>
  <tr><td><b>Lattice</b> (kisi)</td><td>Mencari titik terdekat pada kisi berdimensi tinggi</td><td>Paling banyak dipilih — cepat &amp; ukuran wajar</td></tr>
  <tr><td><b>Hash-based</b></td><td>Hanya bergantung pada keamanan fungsi hash</td><td>Paling konservatif &amp; dipercaya, tapi tanda tangannya besar</td></tr>
  <tr><td><b>Code-based</b></td><td>Kode koreksi galat</td><td>Sudah teruji puluhan tahun, tapi kuncinya sangat besar</td></tr>
  <tr><td><b>Multivariat</b></td><td>Sistem persamaan banyak variabel</td><td>Beberapa kandidat gugur saat diuji</td></tr>
</table>

<h3>Standar resmi NIST (2024)</h3>
<p>Setelah kompetisi terbuka bertahun-tahun, <b>NIST</b> (badan standar Amerika Serikat) menerbitkan standar PQC pertama:</p>
<table class="tbl">
  <tr><th>Standar</th><th>Nama</th><th>Untuk apa</th></tr>
  <tr><td><b>FIPS 203</b></td><td><b>ML-KEM</b> (dari Kyber)</td><td>Bertukar kunci rahasia dengan aman</td></tr>
  <tr><td><b>FIPS 204</b></td><td><b>ML-DSA</b> (dari Dilithium)</td><td>Tanda tangan digital — <b>pengganti ECDSA</b></td></tr>
  <tr><td><b>FIPS 205</b></td><td><b>SLH-DSA</b> (dari SPHINCS+)</td><td>Tanda tangan berbasis hash — cadangan paling konservatif</td></tr>
</table>

<div class="callout warn">
<b>Pelajaran kerendahan hati:</b> salah satu kandidat kuat dalam kompetisi itu (berbasis <i>isogeni</i>, bernama SIKE) ternyata <b>berhasil dipatahkan</b> — dan yang mematahkannya adalah <b>komputer biasa</b>, bukan kuantum. Ini mengingatkan kita: "tahan kuantum" berarti <b>belum ada</b> serangan yang diketahui, bukan jaminan abadi. Karena itu NIST sengaja menstandarkan <b>beberapa</b> algoritma dari keluarga berbeda.
</div>

<h3>Harganya: ukuran</h3>
<p>PQC umumnya butuh <b>kunci &amp; tanda tangan yang jauh lebih besar</b> daripada ECC. Bagi blockchain — di mana setiap byte memakan ruang blok &amp; biaya — ini tantangan nyata, bukan sekadar mengganti pustaka.</p>

<div class="callout">
<b>Strategi transisi yang dipakai industri:</b> <b>hybrid</b> — memakai <b>ECC dan PQC bersamaan</b>. Kalau salah satunya patah, yang lain masih melindungi. Banyak layanan besar sudah mulai menerapkan pendekatan ini pada koneksi mereka.
</div>
`,
          keyPoints: [
            "PQC = kriptografi yang dirancang tetap aman terhadap komputer kuantum, tapi berjalan di komputer biasa.",
            "Keluarga: lattice (paling populer), hash-based (paling konservatif), code-based, multivariat.",
            "NIST 2024 menstandarkan ML-KEM (tukar kunci), ML-DSA (tanda tangan, pengganti ECDSA), SLH-DSA (berbasis hash).",
            "Kandidat SIKE pernah dipatahkan komputer biasa — 'tahan kuantum' bukan jaminan abadi; karena itu distandarkan beberapa keluarga.",
            "Harga PQC: ukuran kunci & tanda tangan jauh lebih besar — tantangan nyata bagi blockchain.",
            "Strategi transisi: hybrid (ECC + PQC bersamaan) agar tetap aman bila salah satu patah.",
          ],
          practice: [
            { type: "choice", q: "Standar NIST mana yang menjadi calon pengganti ECDSA untuk tanda tangan digital?", options: ["ML-KEM (FIPS 203)", "ML-DSA (FIPS 204)", "AES-256", "SHA-256"], answer: 1, hint: "DSA = Digital Signature Algorithm.", solution: "ML-DSA (FIPS 204, dari Dilithium) adalah standar tanda tangan pasca-kuantum." },
            { type: "choice", q: "Apa maksud pendekatan 'hybrid' dalam transisi ke PQC?", options: ["Memakai dua komputer", "Memakai ECC dan PQC bersamaan agar tetap aman bila salah satu patah", "Mengganti semua sekaligus", "Menunggu sampai kuantum ada"], answer: 1, hint: "Dua lapis perlindungan.", solution: "Hybrid memberi jaring pengaman selama PQC masih relatif baru." },
          ],
          quiz: [
            {
              q: "Apakah PQC membutuhkan komputer kuantum untuk dijalankan?",
              options: [
                "Tidak, PQC berjalan di komputer biasa dan hanya dirancang tahan kuantum",
                "Ya, hanya komputer kuantum yang mampu menjalankan algoritmanya",
                "Ya, tetapi cukup memakai komputer kuantum berukuran kecil saja",
                "Tidak, tetapi memerlukan kartu grafis khusus agar cukup cepat",
              ],
              answer: 0,
              explain:
                "PQC adalah algoritma klasik yang soal matematikanya tetap berat bagi komputer kuantum.",
            },
            {
              q: "Apa tantangan utama menerapkan PQC di blockchain?",
              options: [
                "Ukuran kunci dan tanda tangannya jauh lebih besar sehingga boros ruang",
                "Algoritmanya belum distandarkan oleh lembaga mana pun di dunia",
                "Hanya bisa dipakai pada blockchain yang memakai Proof of Stake",
                "Membuat seluruh transaksi lama menjadi tidak sah lagi",
              ],
              answer: 0,
              explain:
                "Ukuran besar berbenturan dengan keterbatasan ruang blok & biaya transaksi.",
            },
          ],
        },
        {
          id: "bc-kri-5",
          title: "Migrasi Blockchain ke Era Pasca-Kuantum",
          duration: "13 menit",
          content: `
<p>Kalau ECDSA harus diganti, bagaimana caranya mengganti sistem yang <b>menyimpan nilai triliunan rupiah</b>, <b>tidak punya bos</b>, dan <b>catatannya tak bisa diubah</b>? Ini tantangan yang benar-benar berat.</p>

<div data-diagram="pipeline" data-stages="Inventaris::kriptografi apa yang dipakai|Hibrida::pasang lama &amp; baru bersamaan|Uji::pastikan semua tetap jalan|Pensiunkan::lepas algoritma lama" data-caption="Migrasi tidak bisa mendadak — inilah urutan yang dipakai di dunia nyata"></div>


<h3>Kenapa jauh lebih sulit daripada di perusahaan biasa</h3>
<table class="tbl">
  <tr><th>Perusahaan biasa</th><th>Blockchain</th></tr>
  <tr><td>Pimpinan memutuskan, lalu diterapkan</td><td>Butuh <b>kesepakatan seluruh jaringan</b> (fork)</td></tr>
  <tr><td>Sistem lama bisa dimatikan</td><td>Catatan lama <b>permanen</b> &amp; harus tetap valid</td></tr>
  <tr><td>Data pengguna bisa dimigrasikan admin</td><td>Hanya <b>pemilik kunci</b> yang bisa memindahkan koinnya</td></tr>
</table>

<div class="callout warn">
<b>Masalah paling pelik: koin yang hilang.</b> Sejumlah besar koin berada di dompet yang <b>pemiliknya sudah tak bisa mengaksesnya</b> (kunci hilang, pemilik meninggal, atau koin era awal yang tak pernah bergerak). Koin-koin itu <b>tidak bisa dimigrasikan oleh siapa pun</b> — karena tidak ada yang memegang kuncinya. Kalau suatu hari ECDSA patah, koin tersebut menjadi <b>terekspos</b>, dan komunitas menghadapi pilihan yang sulit secara etis maupun teknis.
</div>

<h3>Yang bisa dilakukan jaringan</h3>
<ol>
  <li><b>Menambahkan jenis alamat baru</b> berbasis tanda tangan pasca-kuantum (lewat pembaruan protokol).</li>
  <li><b>Mendorong pengguna memindahkan dana</b> ke alamat baru tersebut — butuh waktu bertahun-tahun.</li>
  <li><b>Pendekatan hybrid</b> — menerima kedua jenis tanda tangan selama masa transisi.</li>
  <li><b>Memantau perkembangan</b> komputer kuantum agar bisa bergerak sebelum terlambat.</li>
</ol>

<h3>Yang bisa kamu lakukan sebagai pengguna</h3>
<div class="callout">
<ul>
  <li><b>Jangan memakai ulang alamat.</b> Alamat yang sudah pernah dibelanjakan sudah mengungkap kunci publiknya. Dompet modern otomatis membuat alamat baru tiap transaksi — biarkan fitur itu aktif.</li>
  <li><b>Selalu perbarui dompetmu</b> agar mendapat dukungan standar keamanan terbaru.</li>
  <li><b>Jangan panik &amp; jangan tergesa.</b> Ancamannya nyata tapi <b>belum mendesak hari ini</b>. Waspadai pihak yang menakut-nakuti lalu menawarkan "dompet anti-kuantum" — itu pola penipuan klasik.</li>
</ul>
</div>

<h3>Gambaran besarnya</h3>
<p>Migrasi pasca-kuantum bukan hanya soal crypto. Perbankan, HTTPS, dokumen pemerintah, dan sistem militer <b>semuanya</b> memakai RSA/ECC. Ini akan menjadi <b>salah satu proyek pembaruan teknologi terbesar</b> dalam sejarah komputasi — dan sudah dimulai sekarang.</p>

<div class="callout warn">
<b>Pengingat:</b> materi ini <b>edukasi, bukan saran finansial/keamanan spesifik</b>. Untuk pengamanan aset bernilai besar, konsultasikan dengan ahli keamanan yang kompeten.
</div>
`,
          keyPoints: [
            "Migrasi blockchain lebih sulit: butuh kesepakatan jaringan (fork), catatan lama permanen, & hanya pemilik kunci yang bisa memindahkan koin.",
            "Koin yang kuncinya hilang tak bisa dimigrasikan siapa pun — menjadi terekspos bila ECDSA patah.",
            "Langkah jaringan: tambah jenis alamat pasca-kuantum, dorong migrasi, dukung hybrid, pantau perkembangan.",
            "Langkah pengguna: jangan memakai ulang alamat, perbarui dompet, jangan panik & waspadai penipuan 'anti-kuantum'.",
            "Migrasi ini menyangkut seluruh dunia digital (perbankan, HTTPS, pemerintah), bukan hanya crypto.",
          ],
          practice: [
            { type: "choice", q: "Kenapa memakai ulang alamat crypto meningkatkan risiko di era kuantum?", options: ["Membuat transaksi lambat", "Alamat yang pernah dibelanjakan sudah mengungkap kunci publiknya", "Biaya gas naik", "Tidak ada hubungannya"], answer: 1, hint: "Apa yang terungkap saat kamu bertransaksi?", solution: "Kunci publik terungkap saat membelanjakan; alamat baru menjaganya tetap tersembunyi." },
            { type: "choice", q: "Ada yang menawarkan 'dompet anti-kuantum' dengan menakut-nakuti bahwa crypto akan runtuh besok. Sikap yang tepat?", options: ["Segera beli", "Waspada — ini pola penipuan klasik; ancamannya nyata tapi belum mendesak hari ini", "Jual semua aset", "Abaikan keamanan sepenuhnya"], answer: 1, hint: "Ingat pelajaran red flag penipuan.", solution: "Menakut-nakuti + mendesak membeli adalah pola penipuan; migrasi PQC berjalan bertahap lewat protokol." },
          ],
          quiz: [
            {
              q: "Kenapa koin yang kuncinya hilang jadi masalah khusus dalam migrasi pasca-kuantum?",
              options: [
                "Tidak ada yang bisa memindahkannya ke alamat baru yang lebih aman",
                "Koin itu otomatis terbakar sehingga pasokan total ikut berkurang",
                "Jaringan harus menambang ulang seluruh blok yang memuat koin itu",
                "Koin tersebut menjadi tidak sah dan ditolak oleh semua node",
              ],
              answer: 0,
              explain:
                "Tanpa kunci, tidak ada pihak yang berwenang memindahkan koin tersebut.",
            },
            {
              q: "Langkah praktis terbaik bagi pengguna crypto saat ini?",
              options: [
                "Tidak memakai ulang alamat dan rutin memperbarui perangkat lunak dompet",
                "Memindahkan seluruh aset ke koin yang sudah memakai kriptografi kuantum",
                "Menyimpan kunci privat dalam bentuk terenkripsi di layanan awan",
                "Menunggu sampai ancaman kuantum benar-benar terbukti nyata",
              ],
              answer: 0,
              explain:
                "Alamat sekali pakai menyembunyikan kunci publik; dompet terbaru mengikuti standar keamanan.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 8: ETHEREUM, SMART CONTRACT & TOKEN ---------------- */
    {
      id: "bc-menengah",
      level: "Menengah",
      title: "Ethereum, Smart Contract & Token",
      summary: "Dari uang digital menuju komputer dunia: Ethereum, smart contract, gas, token & NFT, DApp, lalu mengintip semuanya sendiri lewat block explorer — konsepnya dulu, kodenya di modul Proyek.",
      lessons: [
        {
          id: "bc-m-1",
          title: "Ethereum: Komputer Dunia",
          duration: "10 menit",
          content: `
<p>Jika Bitcoin adalah "uang digital", <b>Ethereum</b> (2015) adalah "komputer dunia" — blockchain yang bisa menjalankan <b>program</b>, bukan sekadar mencatat transaksi.</p>

<div data-diagram="vs" data-left="BITCOIN::Mata uang digital::Kode sangat terbatas" data-right="ETHEREUM::Platform aplikasi::Menjalankan smart contract" data-caption="Bitcoin vs Ethereum"></div>


<h3>Apa bedanya?</h3>
<table class="tbl">
  <tr><th></th><th>Bitcoin</th><th>Ethereum</th></tr>
  <tr><td>Tujuan utama</td><td>Mata uang / penyimpan nilai</td><td>Platform aplikasi (program)</td></tr>
  <tr><td>Koin</td><td>BTC</td><td>ETH</td></tr>
  <tr><td>Bisa jalankan kode?</td><td>Sangat terbatas</td><td>Ya (smart contract)</td></tr>
</table>

<div class="callout">
<b>Ether (ETH)</b> adalah koin Ethereum, dipakai sebagai "bahan bakar" (gas) untuk menjalankan program di jaringannya.
</div>

<h3>EVM</h3>
<p>Program di Ethereum dijalankan oleh <b>EVM (Ethereum Virtual Machine)</b> — semacam komputer virtual yang ada di setiap node, memastikan kode berjalan sama persis di mana pun. Banyak blockchain lain meniru EVM agar kompatibel.</p>
`,
          keyPoints: [
            "Ethereum = blockchain yang bisa menjalankan program (smart contract).",
            "ETH adalah koin/bahan bakar (gas) jaringan Ethereum.",
            "EVM menjalankan kode secara identik di semua node.",
          ],
          quiz: [
            {
              q: "Perbedaan utama Ethereum dibanding Bitcoin?",
              options: [
                "Ethereum bisa menjalankan program (smart contract) di jaringannya",
                "Ethereum selalu lebih murah biaya transaksinya daripada Bitcoin",
                "Ethereum tidak memakai blockchain, melainkan basis data terpusat",
                "Ethereum dikendalikan oleh konsorsium bank-bank internasional",
              ],
              answer: 0,
              explain:
                "Kemampuan menjalankan smart contract adalah pembeda utama Ethereum.",
            },
            {
              q: "Apa fungsi ETH di jaringan Ethereum?",
              options: [
                "Bahan bakar (gas) untuk menjalankan transaksi dan program di jaringan",
                "Sertifikat kepemilikan saham atas yayasan pengembang Ethereum",
                "Token tata kelola untuk memilih arah pengembangan protokolnya",
                "Cadangan nilai yang wajib dipegang tiap node agar boleh ikut serta",
              ],
              answer: 0,
              explain: "ETH dipakai membayar gas untuk komputasi di jaringan.",
            },
          ],
        },
        {
          id: "bc-m-2",
          title: "Smart Contract: Kontrak Otomatis",
          duration: "11 menit",
          content: `
<p><b>Smart contract</b> adalah program yang berjalan di blockchain dan otomatis mengeksekusi aturan saat syarat terpenuhi — tanpa perantara.</p>

<div data-diagram="pipeline" data-stages="Syarat ditulis::menjadi kode program|Diunggah::ke blockchain, tak bisa diubah|Syarat dicek::otomatis oleh jaringan|Dana cair::tanpa perantara" data-caption="Smart contract = kesepakatan yang menjalankan dirinya sendiri"></div>


<div class="callout">
<b>Analogi mesin penjual otomatis (vending machine):</b> Masukkan uang yang cukup → pilih produk → mesin otomatis mengeluarkannya. Tidak butuh kasir. Smart contract bekerja seperti itu: "JIKA syarat X terpenuhi, MAKA lakukan Y", dan tak bisa dicurangi.
</div>

<h3>Sifatnya</h3>
<ul>
  <li><b>Otomatis</b> — berjalan sendiri tanpa pihak ketiga.</li>
  <li><b>Transparan</b> — kodenya bisa dilihat publik.</li>
  <li><b>Tak bisa diubah</b> — setelah dipasang, kode tetap (ini kekuatan sekaligus risiko).</li>
</ul>

<h3>Contoh penggunaan</h3>
<ul>
  <li>Escrow otomatis (dana dilepas saat barang diterima).</li>
  <li>Asuransi yang membayar otomatis saat kondisi terpenuhi.</li>
  <li>Fondasi DeFi, NFT, dan game blockchain.</li>
</ul>

<div class="callout warn">
<b>Hati-hati:</b> Karena tak bisa diubah, <i>bug</i> pada smart contract bisa berakibat fatal & dana hilang permanen. Audit keamanan sangat penting.
</div>
`,
          keyPoints: [
            "Smart contract = program 'JIKA-MAKA' otomatis di blockchain.",
            "Otomatis, transparan, dan tak bisa diubah setelah dipasang.",
            "Menjadi fondasi DeFi, NFT, dan aplikasi Web3; bug-nya berisiko fatal.",
          ],
          quiz: [
            {
              q: "Analogi yang tepat untuk smart contract adalah?",
              options: [
                "Mesin penjual otomatis: masukkan syaratnya, hasilnya keluar sendiri",
                "Notaris digital yang memeriksa dan mengesahkan setiap kesepakatan",
                "Buku catatan bersama yang bisa diubah semua pihak yang menyetujuinya",
                "Pengacara otomatis yang menafsirkan maksud kedua belah pihak",
              ],
              answer: 0,
              explain:
                "Keduanya menjalankan aturan otomatis tanpa perantara saat syarat terpenuhi.",
            },
            {
              q: "Mengapa bug di smart contract berbahaya?",
              options: [
                "Karena kodenya tak bisa diubah, sehingga kesalahan menjadi permanen",
                "Karena bug membuat seluruh jaringan blockchain berhenti bekerja",
                "Karena pengembangnya bisa dituntut secara pidana oleh para pengguna",
                "Karena biaya gas melonjak tiap kali kontrak bermasalah itu dipanggil",
              ],
              answer: 0,
              explain:
                "Sifat immutable membuat kesalahan sulit/ tak bisa diperbaiki.",
            },
          ],
        },
        {
          id: "bc-fund-4",
          title: "Ekonomi Gas & Fee",
          duration: "11 menit",
          content: `
<p>Ruang di dalam sebuah blok <b>terbatas</b>. Karena langka, ada mekanisme ekonomi untuk mengaturnya: <b>gas & fee</b>.</p>

<div data-diagram="stack" data-parts="Base fee (dibakar):55|Priority fee (tip penambang):20|Sisa limit yang dikembalikan:25" data-caption="Ke mana perginya biaya gas yang kamu bayar"></div>


<h3>Konsep</h3>
<ul>
  <li><b>Gas</b> = satuan "kerja komputasi". Transaksi rumit (mis. smart contract) butuh lebih banyak gas daripada sekadar kirim koin.</li>
  <li><b>Fee (biaya)</b> = Gas dipakai × harga gas.</li>
</ul>

<h3>Contoh hitungan</h3>
<p>Harga gas biasanya ditulis dalam <b>gwei</b>. 1 gwei = 0,000000001 ETH (sepermiliar ETH) — satuan kecil supaya angkanya enak dibaca, seperti "sen" untuk rupiah.</p>
<table class="tbl">
  <tr><th>Transaksi</th><th>Gas dipakai</th><th>Harga gas</th><th>Biaya</th></tr>
  <tr><td>Kirim ETH biasa</td><td>21.000 (selalu tetap)</td><td>22 gwei</td><td>21.000 × 22 = 462.000 gwei = <b>0,000462 ETH</b></td></tr>
  <tr><td>Tukar token di DEX</td><td>sekitar 150.000</td><td>22 gwei</td><td>3.300.000 gwei = <b>0,0033 ETH</b> — tujuh kali lebih mahal</td></tr>
</table>
<p>Kalau 1 ETH seharga Rp50 juta (angka ilustrasi), kirim ETH biasa itu berbiaya sekitar <b>Rp23.000</b>. Saat jaringan sepi harga gas bisa turun ke beberapa gwei; saat sangat ramai bisa melonjak berkali-kali lipat.</p>

<h3>Lelang ruang blok</h3>
<div class="callout">
<b>Hukum penawaran-permintaan:</b> saat jaringan <b>ramai</b>, banyak orang bersaing memasukkan transaksi ke ruang blok yang terbatas → harga gas <b>naik</b> (seperti tarif ojek saat jam sibuk). Saat sepi, biaya turun.
</div>

<p>Sistem modern (mis. EIP-1559 di Ethereum) memakai <b>base fee</b> (biaya dasar yang otomatis menyesuaikan kepadatan & "dibakar") plus <b>tip</b> untuk validator agar transaksimu diprioritaskan. Pada contoh di atas, 22 gwei bisa berarti base fee 20 + tip 2: sebanyak 21.000 × 20 = 420.000 gwei <b>dimusnahkan</b> (dibakar), dan hanya 42.000 gwei yang diterima validator.</p>

<h3>Dampak</h3>
<ul>
  <li>Pengguna membayar lebih mahal saat jaringan padat → perlu memilih waktu/estimasi gas.</li>
  <li>Developer melakukan <b>optimasi gas</b> agar kontraknya murah dipakai.</li>
  <li>Fee juga <b>mencegah spam</b> — menyerang jaringan jadi mahal, sehingga lebih aman.</li>
</ul>
`,
          keyPoints: [
            "Gas = satuan kerja komputasi; Fee = gas dipakai × harga gas.",
            "Ruang blok terbatas → harga gas naik saat jaringan ramai (lelang ruang blok).",
            "EIP-1559: base fee otomatis (dibakar) + tip untuk validator.",
            "Dampak: biaya naik saat padat, mendorong optimasi gas, dan fee mencegah spam (keamanan).",
          ],
          quiz: [
            {
              q: "Mengapa harga gas naik saat jaringan ramai?",
              options: [
                "Karena ruang blok terbatas sehingga transaksi bersaing memperebutkannya",
                "Karena penambang menaikkan tarifnya secara berkala mengikuti inflasi",
                "Karena nilai tukar koin terhadap mata uang biasa sedang menguat",
                "Karena jaringan menambah jumlah node yang harus ikut dibayar",
              ],
              answer: 0,
              explain:
                "Ruang blok langka; permintaan tinggi menaikkan harga gas (lelang ruang blok).",
            },
            {
              q: "Selain mengatur biaya, fungsi lain dari fee adalah?",
              options: [
                "Mencegah spam karena membanjiri jaringan jadi sangat mahal",
                "Menjamin transaksi selesai dalam waktu yang sudah ditentukan",
                "Membiayai pengembangan protokol oleh tim intinya",
                "Menentukan urutan transaksi berdasarkan abjad di dalam blok",
              ],
              answer: 0,
              explain: "Fee membuat pembanjiran jaringan mahal, meningkatkan keamanan.",
            },
          ],
        },
        {
          id: "bc-m-3",
          title: "Token, NFT, & Standar ERC",
          duration: "10 menit",
          content: `
<p>Di atas Ethereum, siapa pun bisa membuat <b>token</b> sendiri lewat smart contract. Ada dua jenis besar:</p>

<div data-diagram="compare3" data-cols="ERC-20::token biasa::semua unit sama nilainya|ERC-721::NFT::tiap unit unik|ERC-1155::campuran::hemat, cocok untuk game" data-caption="Tiga standar token yang paling sering ditemui"></div>


<h3>Rahasia kecil: token hanyalah buku saldo di dalam smart contract</h3>
<p>Sebuah token ERC-20 <b>bukan</b> sesuatu yang berpindah ke dalam dompetmu. Ia adalah <b>smart contract</b> yang menyimpan satu tabel: alamat siapa punya berapa.</p>
<table class="tbl">
  <tr><th>Alamat</th><th>Saldo token KOPI</th><th>Setelah Andi mengirim 100 ke Budi</th></tr>
  <tr><td>0xA1… (Andi)</td><td>500</td><td>400</td></tr>
  <tr><td>0xB2… (Budi)</td><td>200</td><td>300</td></tr>
</table>
<p>"Mengirim token" artinya meminta kontrak itu mengubah dua baris di tabelnya — dan permintaan itu harus <b>ditandatangani</b> kunci privat Andi. Dompetmu hanya <b>membaca</b> tabel ini lalu menampilkannya. Karena perubahan tabel adalah transaksi di Ethereum, memindahkan token pun tetap butuh <b>ETH untuk gas</b>.</p>

<h3>1. Token "fungible" (ERC-20)</h3>
<p><b>Fungible</b> = setiap unit sama nilainya & bisa ditukar (seperti uang: Rp1.000-mu sama dengan Rp1.000-ku). Contoh: stablecoin USDT, token proyek. Standarnya disebut <b>ERC-20</b>.</p>

<h3>2. Token "non-fungible" (ERC-721 = NFT)</h3>
<p><b>NFT (Non-Fungible Token)</b> = unik dan tak bisa ditukar 1:1. Tiap NFT punya identitas berbeda — seperti tiket konser bernomor kursi atau karya seni. Cocok untuk membuktikan kepemilikan barang digital. Standarnya <b>ERC-721</b>.</p>

<table class="tbl">
  <tr><th></th><th>Fungible (ERC-20)</th><th>NFT (ERC-721)</th></tr>
  <tr><td>Bisa ditukar 1:1?</td><td>Ya</td><td>Tidak, unik</td></tr>
  <tr><td>Contoh</td><td>Uang, poin, stablecoin</td><td>Seni digital, item game, sertifikat</td></tr>
</table>

<div class="callout">
<b>Standar (ERC)</b> adalah aturan main bersama agar token bisa kompatibel dengan wallet & aplikasi mana pun. Ibarat colokan USB yang universal.
</div>
`,
          keyPoints: [
            "Fungible token (ERC-20) bisa ditukar 1:1, seperti uang.",
            "NFT (ERC-721) unik & tak bisa ditukar 1:1, untuk barang/identitas khas.",
            "Standar ERC membuat token kompatibel di seluruh ekosistem.",
          ],
          practice: [
            { type: "choice", q: "Tiket konser dengan nomor kursi unik paling cocok diwakili oleh?", options: ["Token fungible (ERC-20)", "NFT (ERC-721)", "Stablecoin"], answer: 1, hint: "Apakah tiap unit identik, atau unik?", solution: "Nomor kursi membuatnya unik = NFT (ERC-721)." },
            { type: "choice", q: "Poin loyalti yang tiap unitnya bernilai sama dan bisa ditukar 1:1 termasuk?", options: ["NFT (ERC-721)", "Token fungible (ERC-20)", "Smart contract"], answer: 1, hint: "Bisa ditukar 1:1 dan tiap unit setara?", solution: "Setiap unit setara & bisa ditukar = token fungible (ERC-20)." },
          ],
          quiz: [
            {
              q: "Apa yang membuat NFT berbeda dari token biasa?",
              options: [
                "Tiap unit NFT unik sehingga tidak bisa ditukar satu banding satu",
                "NFT hanya bisa disimpan di dompet khusus yang terpisah dari koin",
                "NFT tidak memerlukan biaya gas sama sekali saat dipindahtangankan",
                "NFT selalu berupa gambar, sedangkan token biasa berupa angka",
              ],
              answer: 0,
              explain: "Non-fungible berarti tiap token unik dan tak setara.",
            },
            {
              q: "Standar token fungible di Ethereum adalah?",
              options: ["ERC-721", "ERC-20", "HTTP", "USB-C"],
              answer: 1,
              explain: "ERC-20 adalah standar untuk token fungible.",
            },
          ],
        },
        {
          id: "bc-a-3",
          title: "Web3, DApp & Dompet sebagai Login",
          duration: "11 menit",
          content: `
<p><b>Web3</b> adalah visi internet generasi baru yang terdesentralisasi, di mana pengguna memiliki data & asetnya sendiri.</p>

<div data-diagram="pipeline" data-stages="Buka situs::antarmuka biasa|Hubungkan dompet::dompet jadi identitasmu|Tanda tangani::menyetujui aksi|Blockchain mencatat::tanpa akun &amp; kata sandi" data-caption="Di Web3, dompet menggantikan email dan kata sandi"></div>


<table class="tbl">
  <tr><th></th><th>Web2 (sekarang)</th><th>Web3</th></tr>
  <tr><td>Kepemilikan data</td><td>Perusahaan (Google, dll)</td><td>Pengguna</td></tr>
  <tr><td>Login</td><td>Email & password</td><td>Hubungkan wallet</td></tr>
  <tr><td>Backend</td><td>Server perusahaan</td><td>Smart contract di blockchain</td></tr>
</table>

<h3>DApp (Decentralized Application)</h3>
<p><b>DApp</b> = aplikasi yang backend-nya berjalan di smart contract, bukan server tunggal. Tampilan (frontend) tetap web biasa, tapi logikanya di blockchain.</p>

<h3>Wallet sebagai identitas</h3>
<p>Di Web3, wallet (mis. MetaMask) berfungsi seperti tombol "Login with Google" — kamu menghubungkan wallet untuk membuktikan identitas & menandatangani aksi, tanpa membuat akun baru.</p>

<div class="callout warn">
<b>Tetap kritis:</b> Web3 menjanjikan banyak hal, tapi masih berkembang. Ada proyek serius dan ada pula yang sekadar hype/penipuan. Selalu DYOR (Do Your Own Research).
</div>
`,
          keyPoints: [
            "Web3 = internet terdesentralisasi di mana pengguna memiliki data/aset.",
            "DApp = aplikasi dengan backend di smart contract.",
            "Wallet berperan sebagai login & identitas di Web3.",
          ],
          quiz: [
            {
              q: "Di Web3, bagaimana cara umum 'login' ke aplikasi?",
              options: [
                "Menghubungkan dompet lalu menandatangani permintaan dari situs",
                "Mendaftar memakai email dan kata sandi seperti aplikasi biasa",
                "Memasukkan kunci privat langsung ke kolom isian pada situs",
                "Memindai kode QR yang diterbitkan bursa tempat kita terdaftar",
              ],
              answer: 0,
              explain:
                "Wallet menjadi identitas & alat tanda tangan di Web3.",
            },
            {
              q: "Apa yang menjadi 'backend' sebuah DApp?",
              options: [
                "Server tunggal perusahaan",
                "Smart contract di blockchain",
                "Spreadsheet",
                "Email server",
              ],
              answer: 1,
              explain:
                "Logika DApp berjalan di smart contract, bukan server terpusat.",
            },
          ],
        },
        {
          id: "bc-intip-1",
          title: "Mengintip Isi Blockchain — Membaca Blok, Transaksi & Kontrak Sendiri",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Setiap blok menyimpan <b>hash blok sebelumnya</b> sehingga terbentuk rantai; <b>merkle root</b> adalah satu sidik jari untuk semua transaksi di blok itu; penambang mengganti-ganti <b>nonce</b> sampai hash bloknya cukup kecil; dan <b>token</b> hanyalah buku saldo di dalam sebuah kontrak. Semua itu selama ini kamu pelajari dari penjelasan. Sekarang kita melihatnya langsung.
</div>

<h3>Langkah 1 — Block explorer: mesin pencari untuk blockchain</h3>
<p>Blockchain publik bisa dibaca siapa pun, tanpa akun dan tanpa izin. Alat untuk membacanya disebut <b>block explorer</b>. Kamu bisa mengetik nomor blok, ID transaksi, atau alamat dompet, lalu melihat isinya.</p>
<table class="tbl">
  <tr><th>Jaringan</th><th>Block explorer yang umum</th></tr>
  <tr><td>Bitcoin</td><td>mempool.space</td></tr>
  <tr><td>Ethereum</td><td>etherscan.io</td></tr>
  <tr><td>Layer 2 &amp; rantai lain</td><td>Masing-masing punya, mis. arbiscan.io (Arbitrum), basescan.org (Base), solscan.io (Solana)</td></tr>
</table>
<div class="callout warn">
<b>Block explorer hanya untuk membaca.</b> Ia tidak pernah perlu kamu hubungkan ke dompet dan tidak pernah meminta tanda tangan. Situs "explorer" yang meminta <i>Connect wallet</i> untuk sekadar melihat data patut dicurigai.
</div>

<h3>Langkah 2 — Intip satu blok, lalu periksa hash-nya sendiri</h3>
<div data-demo="intip-blok"></div>
<p>Di demo itu terjadi sesuatu yang tidak mungkin di sistem bank: kamu <b>memeriksa sendiri</b> kebenaran data, tanpa perlu memercayai siapa pun — termasuk situs yang memberi datanya. Kalau satu angka saja di kepala blok diubah, hash yang kamu hitung tidak akan cocok.</p>
<table class="tbl">
  <tr><th>Yang terlihat di halaman blok</th><th>Artinya</th></tr>
  <tr><td>Tinggi (height)</td><td>Nomor urut blok sejak blok pertama tahun 2009</td></tr>
  <tr><td>Hash</td><td>Sidik jari blok ini — diawali banyak angka nol karena bukti kerja</td></tr>
  <tr><td>Hash sebelumnya</td><td>Mata rantai ke blok sebelumnya</td></tr>
  <tr><td>Merkle root</td><td>Satu sidik jari untuk ribuan transaksi di dalamnya</td></tr>
  <tr><td>Nonce &amp; tingkat kesulitan</td><td>Tebakan yang ditemukan penambang dan seberapa sulit targetnya</td></tr>
</table>

<h3>Langkah 3 — Membaca sebuah transaksi Bitcoin</h3>
<p>Transaksi Bitcoin terdiri dari <b>masukan</b> (koin yang dibelanjakan) dan <b>keluaran</b> (ke mana koin dikirim). Biasanya ada satu keluaran kembali ke pengirim — <b>uang kembalian</b>, seperti membayar Rp100.000 untuk belanjaan Rp70.000.</p>
<table class="tbl">
  <tr><th>Bagian</th><th>Contoh</th></tr>
  <tr><td>Masukan</td><td>0,0100 BTC</td></tr>
  <tr><td>Keluaran ke penerima</td><td>0,0060 BTC</td></tr>
  <tr><td>Keluaran kembalian ke pengirim</td><td>0,0039 BTC</td></tr>
  <tr><td><b>Biaya</b> = masukan − semua keluaran</td><td><b>0,0001 BTC</b> — tidak tertulis sebagai keluaran, diambil penambang</td></tr>
</table>
<p>Kolom <b>konfirmasi</b> menunjukkan berapa blok sudah ditumpuk di atas blok yang memuat transaksi itu. Makin banyak, makin mustahil dibatalkan.</p>

<h3>Langkah 4 — Membaca transaksi dan kontrak di Etherscan</h3>
<table class="tbl">
  <tr><th>Kolom</th><th>Artinya</th></tr>
  <tr><td>From / To</td><td>Pengirim dan tujuan — tujuannya bisa dompet biasa atau <b>smart contract</b></td></tr>
  <tr><td>Value</td><td>ETH yang ikut dikirim (sering 0 untuk transaksi token)</td></tr>
  <tr><td>Transaction fee</td><td>Gas terpakai × harga gas</td></tr>
  <tr><td>Input data</td><td>Fungsi kontrak yang dipanggil, mis. <i>transfer</i> atau <i>approve</i></td></tr>
  <tr><td>Logs / events</td><td>Catatan yang dipancarkan kontrak, mis. <i>Transfer</i> dari A ke B sebanyak sekian token</td></tr>
</table>
<p>Halaman sebuah <b>kontrak token</b> paling menarik untuk diintip. Ambil contoh kontrak USDT di Ethereum, alamatnya <code>0xdAC17F958D2ee523a2206206994597C13D831ec7</code>:</p>
<table class="tbl">
  <tr><th>Tab</th><th>Yang bisa kamu lihat</th></tr>
  <tr><td><b>Contract</b></td><td>Kode sumbernya, bila sudah diverifikasi — program yang mengatur token itu</td></tr>
  <tr><td><b>Read Contract</b></td><td>Memanggil fungsi baca, mis. <i>balanceOf</i>: ketik alamat mana pun dan lihat saldonya — gratis, tanpa dompet</td></tr>
  <tr><td><b>Holders</b></td><td>Daftar pemegang dan saldonya — inilah "buku saldo" yang dijelaskan di pelajaran Token</td></tr>
  <tr><td><b>Transfers</b></td><td>Setiap perpindahan token, berurutan</td></tr>
</table>

<h3>Langkah 5 — Latihan: menemukan pesan tersembunyi di blok pertama</h3>
<ol>
  <li>Buka <b>mempool.space</b>, ketik <b>0</b> di kolom pencarian untuk membuka blok pertama.</li>
  <li>Klik satu-satunya transaksi di dalamnya — transaksi <i>coinbase</i>, yang menciptakan 50 BTC pertama.</li>
  <li>Buka detail transaksinya dan lihat bagian masukan (<i>coinbase</i>). Sebagian explorer langsung menampilkannya sebagai teks; sebagian lagi dalam heksadesimal yang bisa diubah menjadi teks.</li>
</ol>
<p>Kamu akan menemukan kalimat: <i>"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"</i> — judul berita surat kabar Inggris hari itu tentang dana talangan bank. Pembuat Bitcoin menanamkannya sebagai bukti tanggal, dan banyak orang membacanya sebagai pesan tentang alasan Bitcoin dibuat.</p>

<div class="callout warn">
<b>Transparan itu dua arah.</b> Kalau kamu bisa melihat isi dompet orang lain, orang lain juga bisa melihat isi dompetmu. Jangan memamerkan alamat dompet utama di media sosial — cara penelusurannya dibahas di modul Forensik.
</div>
`,
          keyPoints: [
            "Block explorer (mempool.space, etherscan.io, dll) membaca blockchain publik tanpa akun; ia tidak pernah perlu dihubungkan ke dompet.",
            "Halaman blok memuat tinggi, hash, hash sebelumnya, merkle root, nonce, dan tingkat kesulitan.",
            "Hash blok bisa diperiksa sendiri: SHA-256 dua kali atas 80 byte kepala blok — tanpa memercayai siapa pun.",
            "Biaya transaksi Bitcoin = masukan − semua keluaran; keluaran kembalian kembali ke pengirim.",
            "Di Etherscan, kontrak token bisa dibaca kodenya, saldo alamat mana pun (balanceOf), dan daftar pemegangnya."
          ],
          practice: [
            { type: "number", q: "Masukan 0,05 BTC; keluaran ke penerima 0,03 BTC dan kembalian 0,0198 BTC. Berapa biaya transaksinya? (BTC)", answer: 0.0002, tol: 0.00001, unit: "BTC", hint: "Masukan − semua keluaran.", solution: "0,05 − 0,03 − 0,0198 = 0,0002 BTC." },
            { type: "choice", q: "Sebuah situs yang mengaku block explorer meminta kamu Connect wallet sebelum menampilkan isi blok. Penilaianmu?", options: ["Wajar, semua explorer begitu", "Patut dicurigai — membaca data tidak butuh dompet", "Wajar bila memakai dompet simpanan", "Wajar bila situsnya berbayar"], answer: 1, hint: "Apa yang dibutuhkan untuk sekadar membaca blockchain publik?", solution: "Blockchain publik bisa dibaca tanpa dompet. Permintaan connect wallet di sini adalah tanda bahaya." }
          ],
          quiz: [
            {
              q: "Bagaimana kamu bisa memastikan hash sebuah blok Bitcoin benar tanpa memercayai situs mana pun?",
              options: [
                "Menghitung SHA-256 dua kali atas 80 byte kepala bloknya sendiri",
                "Membandingkan hash itu di tiga block explorer yang berbeda",
                "Menanyakan langsung kepada penambang yang membuat blok itu",
                "Memeriksa apakah hash itu diawali angka nol yang banyak"
              ],
              answer: 0,
              explain: "Kepala blok berisi semua data penting; hash-nya bisa dihitung ulang siapa pun dan harus cocok persis."
            },
            {
              q: "Di halaman transaksi Bitcoin, di mana biaya transaksinya?",
              options: [
                "Selisih antara total masukan dan total keluaran",
                "Keluaran terakhir yang dikirim ke alamat penambang",
                "Kolom khusus yang ditulis pengirim di dalam keluaran",
                "Jumlah konfirmasi dikali harga Bitcoin hari itu"
              ],
              answer: 0,
              explain: "Biaya tidak tertulis sebagai keluaran; ia adalah sisa masukan yang tidak dibelanjakan, diambil penambang."
            },
            {
              q: "Tab 'Holders' pada halaman kontrak token di Etherscan menunjukkan apa?",
              options: [
                "Daftar alamat pemegang token beserta saldonya",
                "Daftar tim pengembang yang memegang kunci kontrak",
                "Daftar bursa yang memperdagangkan token tersebut",
                "Daftar transaksi yang masih menunggu masuk blok"
              ],
              answer: 0,
              explain: "Itulah buku saldo di dalam kontrak — yang membuat 'memiliki token' berarti tercatat di tabel itu."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 9: DEFI, STABLECOIN & KEAMANAN ---------------- */
    {
      id: "bc-terapan",
      level: "Terapan",
      title: "DeFi, Stablecoin & Keamanan",
      summary: "Keuangan tanpa bank: DEX vs CEX, AMM & liquidity pool beserta matematikanya, stablecoin, oracle, pinjaman berjaminan & likuidasi, staking & yield farming, bridge, dan penipuan yang wajib dikenali.",
      lessons: [
        {
          id: "bc-m-4",
          title: "DeFi: Keuangan Tanpa Bank",
          duration: "10 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Smart contract</b> = program yang berjalan sendiri di blockchain; <b>token</b> = buku saldo di dalam sebuah kontrak; <b>gas</b> = biaya menjalankan program itu (modul Ethereum). DeFi menyusun layanan keuangan dari ketiganya.
</div>

<p><b>DeFi (Decentralized Finance)</b> adalah layanan keuangan — pinjam, simpan, tukar, bunga — yang berjalan lewat smart contract, tanpa bank atau perantara.</p>

<div data-diagram="compare3" data-cols="Menabung::Bank: bunga ditentukan bank::DeFi: bunga ikut pasar|Meminjam::Bank: cek skor kredit::DeFi: wajib ada jaminan|Menukar::Bank: jam kerja::DeFi: 24 jam nonstop" data-caption="Tiga layanan bank yang ditiru DeFi — tanpa kantor dan tanpa petugas"></div>


<h3>Layanan DeFi populer</h3>
<ul>
  <li><b>DEX</b> (Decentralized Exchange) — tukar token langsung antar pengguna (mis. Uniswap).</li>
  <li><b>Lending</b> — pinjamkan asetmu untuk dapat bunga, atau pinjam dengan jaminan.</li>
  <li><b>Stablecoin</b> — token yang nilainya dipatok ke aset stabil (mis. 1 USDT ≈ 1 USD) agar tak fluktuatif.</li>
  <li><b>Staking/Yield</b> — mengunci aset untuk membantu jaringan & mendapat imbalan.</li>
</ul>

<h3>Peta modul ini</h3>
<table class="tbl">
  <tr><th>Pelajaran</th><th>Pertanyaan yang dijawab</th></tr>
  <tr><td>DEX vs CEX</td><td>Apa bedanya bursa terpusat dan bursa di blockchain?</td></tr>
  <tr><td>AMM &amp; matematikanya</td><td>Bagaimana harga ditentukan tanpa penjual dan pembeli?</td></tr>
  <tr><td>Stablecoin &amp; oracle</td><td>Bagaimana menjaga harga tetap dan membawa data harga ke blockchain?</td></tr>
  <tr><td>Pinjaman DeFi</td><td>Bagaimana meminjam tanpa KTP, dan kapan jaminan diambil?</td></tr>
  <tr><td>Staking &amp; yield</td><td>Dari mana sebenarnya imbal hasil itu datang?</td></tr>
  <tr><td>Bridge &amp; keamanan</td><td>Di mana uang paling sering hilang?</td></tr>
</table>
<p>Satu istilah yang sering muncul di berita: <b>TVL</b> (<i>total value locked</i>) — nilai seluruh aset yang sedang disimpan di sebuah protokol. TVL besar menandakan banyak yang memercayai protokol itu, tapi nilainya ikut naik-turun bersama harga crypto, jadi bukan ukuran pendapatan.</p>

<div class="callout">
<b>Keunggulan:</b> terbuka untuk siapa saja (cukup wallet), beroperasi 24/7, dan transparan.
</div>

<div class="callout warn">
<b>Risiko DeFi:</b> bug smart contract, penipuan (scam/rug pull), fluktuasi harga ekstrem, dan tidak ada bantuan customer service jika salah kirim. Pahami risikonya sebelum mencoba.
</div>
`,
          keyPoints: [
            "DeFi = layanan keuangan via smart contract tanpa bank.",
            "Contoh: DEX (tukar), lending (pinjam), stablecoin, staking.",
            "Terbuka & 24/7, tapi berisiko (bug, scam, volatilitas).",
          ],
          quiz: [
            {
              q: "Apa fungsi stablecoin?",
              options: [
                "Token yang nilainya dipatok stabil ke aset lain seperti dolar",
                "Token yang harganya dijamin naik perlahan setiap tahunnya",
                "Token yang hanya bisa dipakai di dalam satu bursa tertentu saja",
                "Token yang tak bisa dipindahkan sampai masa kuncinya berakhir",
              ],
              answer: 0,
              explain:
                "Stablecoin mengurangi volatilitas dengan mematok nilai ke aset stabil.",
            },
            {
              q: "DEX (Decentralized Exchange) berfungsi untuk?",
              options: [
                "Menukar token langsung dari dompet tanpa perantara terpusat",
                "Menyimpan aset pengguna dengan keamanan berlapis milik bursa",
                "Menerbitkan token baru yang langsung tercatat di banyak bursa",
                "Menghubungkan rekening bank pengguna dengan dompet kriptonya",
              ],
              answer: 0,
              explain:
                "DEX memungkinkan pertukaran token peer-to-peer lewat smart contract.",
            },
          ],
        },
        {
          id: "bc-dex-1",
          title: "DEX vs CEX — Cara Kerja Bursa Terdesentralisasi",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Smart contract</b> = program yang berjalan di blockchain; <b>token ERC-20</b> = buku saldo di dalam sebuah kontrak; menekan <b>Konfirmasi</b> di dompet = membuat tanda tangan digital. DeFi menyediakan layanan keuangan tanpa bank (pelajaran sebelumnya). Pelajaran ini membedah layanan DeFi yang paling banyak dipakai: tempat menukar token.
</div>

<h3>Langkah 1 — Dua jenis bursa crypto</h3>
<table class="tbl">
  <tr><th></th><th>CEX (bursa terpusat)</th><th>DEX (bursa terdesentralisasi)</th></tr>
  <tr><td>Contoh</td><td>Bursa berizin di Indonesia, Binance, Coinbase</td><td>Uniswap, PancakeSwap, Curve, Jupiter</td></tr>
  <tr><td>Siapa memegang asetmu</td><td>Bursa — kamu memegang <b>saldo di akun</b></td><td><b>Kamu sendiri</b> — aset tetap di dompetmu sampai detik penukaran</td></tr>
  <tr><td>Cara masuk</td><td>Daftar akun, verifikasi KTP (KYC)</td><td>Hubungkan dompet — tanpa akun</td></tr>
  <tr><td>Rupiah</td><td>Bisa setor dan tarik rupiah</td><td>Tidak — hanya token ditukar token</td></tr>
  <tr><td>Kalau lupa kata sandi</td><td>Bisa dipulihkan lewat layanan pelanggan</td><td>Tidak ada yang bisa memulihkan seed phrase-mu</td></tr>
  <tr><td>Risiko utama</td><td>Bursanya bangkrut, dibobol, atau membekukan akun</td><td>Salah tekan, token palsu, bug kontrak, izin token yang disalahgunakan</td></tr>
</table>
<div class="callout warn">
<b>"Not your keys, not your coins" berlaku di sini.</b> Saldo di CEX adalah janji bursa untuk membayarmu. Ketika bursa FTX bangkrut pada November 2022, jutaan penggunanya tidak bisa menarik dana. Sebaliknya, di DEX tidak ada yang bisa membekukan asetmu — tapi juga tidak ada yang bisa menolongmu bila salah.
</div>

<h3>Langkah 2 — Order book vs kolam likuiditas</h3>
<p>CEX mempertemukan pembeli dan penjual lewat <b>order book</b>: daftar penawaran beli dan jual di berbagai harga, seperti pasar lelang. Sebagian besar DEX memakai cara lain: <b>kolam likuiditas</b> (<i>liquidity pool</i>) — kamu tidak berdagang dengan orang lain, melainkan dengan <b>sebuah smart contract</b> yang menyimpan dua jenis token dan menentukan harga dengan rumus. Rumus itu (AMM) dibedah di pelajaran berikutnya.</p>

<h3>Langkah 3 — Apa yang terjadi saat kamu menukar di DEX</h3>
<table class="tbl">
  <tr><th>Langkah</th><th>Yang kamu lihat</th><th>Yang sebenarnya terjadi</th></tr>
  <tr><td>1</td><td>Tombol <b>Connect wallet</b></td><td>Situs hanya membaca alamatmu — belum ada izin apa pun</td></tr>
  <tr><td>2</td><td>Pilih token dan jumlah, mis. 100 USDC → ETH</td><td>Situs menghitung perkiraan hasil dari isi kolam</td></tr>
  <tr><td>3</td><td>Tombol <b>Approve</b> (sekali per token)</td><td>Kamu memberi izin kontrak DEX memindahkan USDC-mu — tanda tangan pertama</td></tr>
  <tr><td>4</td><td>Tombol <b>Swap</b></td><td>Tanda tangan kedua: perintah menukar, dengan batas <b>minimal ETH yang mau kamu terima</b></td></tr>
  <tr><td>5</td><td>Status "berhasil"</td><td>Dalam satu transaksi, kontrak menarik USDC-mu, menyerahkan ETH dari kolam, dan memperbarui harga</td></tr>
</table>
<p>Biayanya dua: <b>fee kolam</b> (umumnya 0,05%–1% dari nilai tukar, dibagikan ke penyedia likuiditas) dan <b>gas</b> jaringan. Di Layer 2 atau rantai murah, gasnya bisa hanya beberapa ratus rupiah; di Ethereum saat ramai bisa ratusan ribu.</p>

<h3>Langkah 4 — Slippage tolerance: batas rugi yang kamu izinkan</h3>
<p>Harga di DEX bisa bergeser antara saat kamu menekan Swap dan saat transaksinya masuk blok. Pengaturan <b>slippage tolerance</b> menentukan seberapa jauh pergeseran yang masih kamu terima.</p>
<table class="tbl">
  <tr><th>Slippage tolerance</th><th>Perkiraan hasil 0,0300 ETH</th><th>Akibatnya</th></tr>
  <tr><td>0,5%</td><td>Minimal 0,02985 ETH</td><td>Transaksi dibatalkan bila hasilnya lebih buruk — aman, tapi kadang gagal saat pasar bergejolak</td></tr>
  <tr><td class="bad-cell">10%</td><td>Minimal 0,0270 ETH</td><td>Hampir selalu berhasil — tapi kamu mengizinkan diri dirugikan sampai 10%</td></tr>
</table>

<h3>Langkah 5 — Bahaya khas DEX</h3>
<table class="tbl">
  <tr><th>Bahaya</th><th>Cara kerjanya</th><th>Cara menghindari</th></tr>
  <tr><td><b>Token palsu</b></td><td>Siapa pun bisa membuat token bernama "USDT" atau meniru proyek populer</td><td>Cocokkan <b>alamat kontrak</b> dengan situs resmi proyeknya, bukan hanya namanya</td></tr>
  <tr><td><b>Sandwich attack</b></td><td>Bot melihat transaksimu sebelum masuk blok, membeli lebih dulu (harga naik), membiarkanmu membeli di harga lebih mahal, lalu langsung menjual</td><td>Slippage tolerance kecil; jangan menukar jumlah besar di kolam kecil</td></tr>
  <tr><td><b>Rug pull</b></td><td>Pembuat token menarik seluruh isi kolam, harga token jatuh mendekati nol</td><td>Hindari token baru tanpa rekam jejak; periksa apakah likuiditasnya dikunci</td></tr>
  <tr><td><b>Izin tanpa batas</b></td><td>Approve "unlimited" ke kontrak jahat membuat tokenmu bisa dikuras kapan saja</td><td>Hanya approve situs resmi; cabut izin lama (revoke)</td></tr>
</table>
<div class="callout">
<b>Agregator DEX</b> (misalnya 1inch atau Jupiter) mencari rute terbaik di banyak DEX sekaligus — kadang memecah satu penukaran ke beberapa kolam agar harga rata-ratanya lebih baik. Ada juga DEX khusus kontrak berjangka (<i>perpetual</i>) yang memakai order book di rantainya sendiri; leverage di sana bisa menghapus seluruh modal dalam hitungan menit.
</div>
<div class="callout warn">Materi ini edukasi, bukan ajakan atau saran membeli aset crypto apa pun. Di Indonesia, pastikan memakai bursa yang terdaftar dan diawasi regulator.</div>
`,
          keyPoints: [
            "CEX memegang asetmu (saldo = janji bursa); DEX membiarkan aset tetap di dompetmu sampai penukaran terjadi.",
            "Kebanyakan DEX tidak memakai order book, melainkan kolam likuiditas yang harganya ditentukan rumus.",
            "Menukar di DEX = Approve (izin token) lalu Swap (perintah tukar) — dua tanda tangan.",
            "Slippage tolerance adalah batas rugi yang kamu izinkan; makin besar, makin rawan dirugikan.",
            "Bahaya khas DEX: token palsu, sandwich attack, rug pull, dan izin tanpa batas."
          ],
          practice: [
            { type: "number", q: "Perkiraan hasil swap 2 ETH, slippage tolerance 1%. Berapa ETH minimal yang diterima sebelum transaksi dibatalkan? (2 desimal)", answer: 1.98, tol: 0.005, unit: "ETH", hint: "2 × (1 − 0,01).", solution: "2 × 0,99 = 1,98 ETH." },
            { type: "number", q: "Menukar senilai Rp10.000.000 di kolam ber-fee 0,3%. Berapa rupiah fee kolamnya?", answer: 30000, tol: 1, unit: "Rp", hint: "10.000.000 × 0,003.", solution: "Rp30.000 — dibagikan ke penyedia likuiditas kolam itu." }
          ],
          quiz: [
            {
              q: "Apa perbedaan paling mendasar antara CEX dan DEX?",
              options: [
                "Di DEX aset tetap di dompetmu, di CEX bursa yang memegangnya",
                "Di DEX harga selalu lebih murah daripada harga di CEX",
                "Di DEX transaksi gratis, di CEX selalu ada biaya gas",
                "Di DEX hanya token besar yang boleh ditukarkan"
              ],
              answer: 0,
              explain: "Saldo di CEX adalah janji bursa. Di DEX kamu memegang kunci, tapi tidak ada yang bisa memulihkan kesalahanmu."
            },
            {
              q: "Kenapa slippage tolerance 10% berbahaya?",
              options: [
                "Kamu mengizinkan diri menerima hasil sampai 10% lebih buruk",
                "Fee kolamnya otomatis naik menjadi 10% dari nilai tukar",
                "Transaksinya pasti gagal saat harga sedang bergejolak",
                "Bursa memotong 10% sebagai denda karena terlalu besar"
              ],
              answer: 0,
              explain: "Batas besar membuat transaksimu mudah dimanfaatkan bot sandwich atau dieksekusi di harga buruk."
            },
            {
              q: "Cara paling tepat memastikan token yang dibeli di DEX bukan token palsu?",
              options: [
                "Mencocokkan alamat kontraknya dengan situs resmi proyek",
                "Memastikan nama dan logonya sama dengan proyek aslinya",
                "Memilih token yang harganya paling murah di daftar",
                "Membeli token yang paling banyak dibicarakan hari ini"
              ],
              answer: 0,
              explain: "Nama dan logo bisa ditiru siapa pun. Alamat kontrak adalah identitas yang tidak bisa dipalsukan."
            }
          ]
        },
        {
          id: "bc-app-1",
          title: "DeFi Mendalam: AMM & Liquidity Pool",
          duration: "13 menit",
          content: `
<p>Bursa saham memakai <b>order book</b> (mencocokkan pembeli & penjual). Bursa terdesentralisasi (DEX) seperti Uniswap memakai cara berbeda: <b>Automated Market Maker (AMM)</b>.</p>

<div data-diagram="cycle" data-steps="Penyedia setor 2 aset|Rumus x*y=k tentukan harga|Penukar bertransaksi|Fee dibagi ke penyedia" data-center="AMM" data-caption="Tidak ada buku pesanan — harga ditentukan rumus, bukan tawar-menawar"></div>


<h3>Liquidity Pool</h3>
<p>Alih-alih pembeli & penjual, ada <b>kolam likuiditas</b> berisi pasangan token (mis. ETH & USDC) yang disetor <b>Liquidity Provider (LP)</b>. Kamu menukar langsung dengan kolam ini.</p>

<h3>Rumus produk konstan</h3>
<div class="callout">
<b>x × y = k.</b> Jumlah dua token (x dan y) dikalikan harus tetap konstan (k). Saat kamu membeli ETH (x berkurang), USDC di kolam (y) harus bertambah agar hasil kali tetap k — <b>itulah yang menentukan harga & slippage</b>.
</div>

<h3>Dengan angka: kenapa membeli banyak jadi mahal</h3>
<p>Kolam berisi <b>10 ETH</b> dan <b>20.000 USDC</b>, jadi k = 10 × 20.000 = <b>200.000</b>, dan harga awalnya 20.000 ÷ 10 = <b>2.000 USDC per ETH</b>.</p>
<table class="tbl">
  <tr><th>Membeli</th><th>ETH tersisa di kolam</th><th>USDC harus menjadi (200.000 ÷ ETH)</th><th>Yang dibayar</th><th>Harga rata-rata per ETH</th></tr>
  <tr><td>1 ETH</td><td>9</td><td>22.222</td><td>2.222</td><td>2.222 (lebih mahal 11%)</td></tr>
  <tr><td>5 ETH</td><td>5</td><td>40.000</td><td>20.000</td><td class="bad-cell">4.000 (dua kali lipat)</td></tr>
  <tr><td>9 ETH</td><td>1</td><td>200.000</td><td>180.000</td><td class="bad-cell">20.000 (sepuluh kali lipat)</td></tr>
</table>
<p>Makin besar pembelian dibanding isi kolam, makin mahal harga rata-ratanya. Selisih dari harga awal ini disebut <b>slippage</b>. Dan kolam tidak akan pernah benar-benar kehabisan ETH: untuk mengambil ETH terakhir, USDC yang dibayar harus tak terhingga. Karena itu kolam yang <b>besar</b> (likuiditasnya dalam) lebih nyaman dipakai — pembelian yang sama menggeser harga jauh lebih sedikit.</p>

<h3>Coba sendiri — lihat harga bergerak</h3>
<div data-demo="js-playground">// Kolam: x = ETH, y = USDC, aturan x * y = k
let x = 10;        // 10 ETH
let y = 20000;     // 20.000 USDC
const k = x * y;
console.log("k (produk konstan) = " + k);
console.log("Harga ETH awal = " + (y / x) + " USDC");

// Seseorang membeli 1 ETH dari kolam
const xBaru = x - 1;          // ETH di kolam berkurang
const yBaru = k / xBaru;      // USDC harus naik agar x*y tetap k
console.log("Bayar ~ " + Math.round(yBaru - y) + " USDC untuk 1 ETH");
console.log("Harga naik jadi ~ " + Math.round(yBaru / xBaru) + " USDC (slippage)");</div>

<h3>Dampak & risiko</h3>
<ul>
  <li>LP mendapat <b>biaya (fee)</b> dari tiap transaksi di kolamnya.</li>
  <li>Perdagangan <b>tanpa izin, 24/7, tanpa perantara</b>.</li>
  <li>Risiko: <b>impermanent loss</b> (kerugian LP saat harga bergerak jauh) & bug smart contract.</li>
</ul>
`,
          keyPoints: [
            "AMM menggantikan order book: kamu menukar langsung dengan liquidity pool.",
            "Rumus produk konstan x × y = k menentukan harga & slippage saat menukar.",
            "Liquidity Provider menyetor pasangan token & mendapat fee; risiko impermanent loss.",
            "Dampak: perdagangan tanpa izin 24/7, tapi ada risiko impermanent loss & bug kontrak.",
          ],
          practice: [
            { type: "number", q: "Kolam berisi 10 ETH dan 20.000 USDC. Berapa nilai k (produk konstan)?", answer: 200000, tol: 1, hint: "k = x × y.", solution: "10 × 20.000 = 200.000." },
            { type: "number", q: "Harga ETH di kolam = USDC ÷ ETH. Jika 20.000 USDC dan 10 ETH, berapa harga 1 ETH? (USDC)", answer: 2000, tol: 1, hint: "Harga = y ÷ x.", solution: "20.000 ÷ 10 = 2.000 USDC." },
          ],
          quiz: [
            {
              q: "Apa yang dipakai AMM untuk menentukan harga?",
              options: [
                "Rumus matematis pada kolam likuiditas, misalnya x dikali y sama dengan k",
                "Buku pesanan berisi penawaran beli dan jual dari para penggunanya",
                "Harga rata-rata beberapa bursa terpusat yang diambil lewat oracle",
                "Kesepakatan langsung penjual dan pembeli lewat tawar-menawar",
              ],
              answer: 0,
              explain: "AMM memakai rumus matematis atas kolam likuiditas, bukan order book.",
            },
            {
              q: "Apa risiko menjadi Liquidity Provider?",
              options: [
                "Impermanent loss saat harga bergerak jauh, ditambah risiko bug kontrak",
                "Dana terkunci dan tak bisa ditarik sampai jangka waktunya berakhir",
                "Kewajiban pajak yang dipotong otomatis dari setiap transaksi masuk",
                "Keharusan menyediakan likuiditas minimal setiap bulannya",
              ],
              answer: 0,
              explain: "Pergerakan harga besar dapat merugikan LP dibanding sekadar memegang aset.",
            },
          ],
        },
        {
          id: "bc-mat-3",
          title: "Matematika AMM: Slippage & Impermanent Loss",
          duration: "14 menit",
          content: `
<p>Di pelajaran sebelumnya kamu memakai rumus <b>x · y = k</b>. Sekarang kita turunkan rumus <b>slippage</b> dan <b>impermanent loss</b> — dua hal yang paling sering merugikan pengguna DeFi karena tidak dipahami.</p>

<h3>1. Berapa token yang kamu terima?</h3>
<div class="callout">
Kolam berisi <b>x</b> token A dan <b>y</b> token B, dengan <b>x · y = k</b> (tetap).<br>
Kalau kamu menyetor <b>Δx</b> token A, jumlah token B yang kamu terima:<br><br>
<b>Δy = y − k ÷ (x + Δx)</b>
</div>

<pre class="code">Kolam: x = 100 ETH, y = 200.000 USDC  ->  k = 20.000.000
Kamu menukar 10 ETH:
  x baru = 110
  y baru = 20.000.000 ÷ 110 = 181.818
  Kamu terima = 200.000 − 181.818 = 18.182 USDC

Harga awal    = 200.000 ÷ 100 = 2.000 USDC per ETH
Harga efektif = 18.182 ÷ 10   = 1.818 USDC per ETH
Slippage      = (2.000 − 1.818) ÷ 2.000 = 9,1%</pre>

<div class="callout warn">
<b>Pelajaran penting:</b> makin <b>besar</b> transaksimu dibanding ukuran kolam, makin <b>buruk</b> harga yang kamu dapat. Ini alasan transaksi besar sebaiknya dipecah atau dilakukan di kolam yang likuiditasnya dalam.
</div>

<h3>2. Impermanent Loss — kerugian tersembunyi penyedia likuiditas</h3>
<p>Saat harga bergerak, penyedia likuiditas (LP) berakhir dengan komposisi token yang berbeda — dan nilainya <b>lebih rendah</b> dibanding kalau ia hanya <b>memegang</b> kedua token itu.</p>

<div class="callout">
<b>Rumus:</b> IL = [ 2 × akar(r) ÷ (1 + r) ] − 1<br><br>
Keterangan: <b>r</b> = rasio perubahan harga (r = 2 berarti harga menjadi 2 kali lipat).
</div>

<h3>Coba sendiri — hitung impermanent loss</h3>
<div data-demo="js-playground">// Impermanent loss pada berbagai perubahan harga
[1.25, 1.5, 2, 3, 4, 5].forEach(function(r){
  const il = (2 * Math.sqrt(r) / (1 + r) - 1) * 100;
  console.log("Harga berubah " + r + "x  ->  impermanent loss = " + il.toFixed(2) + "%");
});
console.log("-----");
console.log("Angka minus = kerugian dibanding sekadar MEMEGANG kedua token.");
console.log("Makin jauh harga bergerak, makin besar kerugiannya.");
console.log("Catatan: fee yang diterima LP bisa menutupi sebagian kerugian ini.");</div>

<div class="callout warn">
<b>Kenapa disebut "impermanent" (sementara)?</b> Karena kalau harga <b>kembali</b> ke titik semula, kerugian itu <b>hilang</b>. Tapi begitu kamu <b>menarik dana</b> saat harga sedang jauh berbeda, kerugiannya menjadi <b>permanen &amp; nyata</b>. Namanya menyesatkan — banyak orang meremehkannya karena kata "impermanent".
</div>
`,
          keyPoints: [
            "Keluaran AMM: Δy = y − k ÷ (x + Δx); makin besar transaksi relatif terhadap kolam, makin buruk harganya (slippage).",
            "Slippage = selisih harga awal dengan harga efektif yang kamu dapat.",
            "Impermanent loss: IL = [2·akar(r) ÷ (1+r)] − 1, dengan r = rasio perubahan harga.",
            "Disebut 'impermanent' karena hilang bila harga kembali — tapi menjadi permanen begitu dana ditarik.",
          ],
          practice: [
            { type: "number", q: "Kolam 100 ETH & 200.000 USDC. Berapa nilai k (produk konstan)?", answer: 20000000, tol: 1000, hint: "k = x × y.", solution: "100 × 200.000 = 20.000.000." },
            { type: "number", q: "Harga token berubah 4x. Berapa impermanent loss-nya? (dalam %, tanpa tanda minus)", answer: 20, tol: 0.5, unit: "%", hint: "IL = [2×akar(4) ÷ (1+4)] − 1 = (4/5) − 1.", solution: "2×2÷5 = 0,8 → 0,8 − 1 = −0,2 = kerugian 20%." },
          ],
          quiz: [
            {
              q: "Kenapa transaksi besar di kolam kecil mendapat harga buruk?",
              options: [
                "Rumus x·y=k menggeser harga makin jauh saat porsi transaksinya besar",
                "Kolam kecil memungut biaya persentase yang jauh lebih tinggi",
                "Transaksi besar harus antre lebih lama sehingga harganya berubah",
                "Penyedia likuiditas berhak menolak transaksi yang terlalu besar",
              ],
              answer: 0,
              explain: "Perubahan besar pada x memaksa y bergeser jauh agar hasil kali tetap k.",
            },
            {
              q: "Kapan impermanent loss menjadi PERMANEN?",
              options: [
                "Saat dana ditarik ketika harga sedang jauh berbeda dari saat menyetor",
                "Saat kolam likuiditasnya ditutup oleh pengembang protokol",
                "Saat biaya yang terkumpul lebih kecil daripada kerugiannya",
                "Saat harga kedua aset turun bersamaan dalam jumlah yang sama",
              ],
              answer: 0,
              explain:
                "Menarik dana mengunci selisih nilainya sehingga kerugian menjadi nyata.",
            },
          ],
        },
        {
          id: "bc-app-2",
          title: "Stablecoin: Jenis & Risikonya",
          duration: "12 menit",
          content: `
<p><b>Stablecoin</b> menjaga nilainya stabil (mis. 1 koin ≈ 1 USD) agar berguna untuk transaksi & tabungan. Tapi cara menjaga kestabilannya berbeda-beda — dan itu menentukan risikonya.</p>

<div data-diagram="compare3" data-cols="Dijamin fiat::USDT, USDC::risiko: percaya penerbit|Dijamin kripto::DAI::risiko: jaminan ikut anjlok|Algoritmik::UST (sudah gagal)::risiko: spiral maut" data-caption="Tiga cara menjaga nilai tetap — dengan tiga jenis risiko berbeda"></div>


<table class="tbl">
  <tr><th>Jenis</th><th>Cara dijamin</th><th>Contoh</th><th>Risiko utama</th></tr>
  <tr><td><b>Fiat-backed</b></td><td>Cadangan dolar sungguhan di bank</td><td>USDT, USDC</td><td>Transparansi & kepercayaan penerbit</td></tr>
  <tr><td><b>Crypto-backed</b></td><td>Dijamin crypto berlebih (over-collateral)</td><td>DAI</td><td>Volatilitas jaminan</td></tr>
  <tr><td><b>Algoritmik</b></td><td>Dijaga algoritma/mekanisme, jaminan minim</td><td>UST (Terra)</td><td>Sangat rapuh — bisa runtuh</td></tr>
</table>

<div class="callout warn">
<b>Pelajaran mahal (2022):</b> stablecoin algoritmik <b>UST/Terra</b> kehilangan patokannya (<b>depeg</b>) dan runtuh, menghapus puluhan miliar dolar dalam hitungan hari. Bukti bahwa "stabil" tidak selalu berarti aman.
</div>

<h3>Dampak</h3>
<ul>
  <li>Stablecoin adalah <b>tulang punggung DeFi</b> & pembayaran crypto (jembatan ke dunia nyata).</li>
  <li>Pilih jenis dengan hati-hati: fiat/crypto-backed yang transparan jauh lebih aman daripada algoritmik.</li>
  <li>Ada juga stablecoin yang dipatok ke <b>rupiah</b>, seperti IDRT dan IDRP — dibahas di <a href="#/lesson/bc-idr-1">Stablecoin Rupiah</a>.</li>
</ul>
`,
          keyPoints: [
            "Tiga jenis stablecoin: fiat-backed (USDT/USDC), crypto-backed (DAI), algoritmik (UST).",
            "Fiat/crypto-backed lebih aman; algoritmik paling rapuh (bisa depeg & runtuh).",
            "Kasus UST/Terra 2022: stablecoin algoritmik runtuh, menghapus puluhan miliar dolar.",
            "Dampak: stablecoin = tulang punggung DeFi & pembayaran, tapi pilih jenisnya dengan hati-hati.",
          ],
          quiz: [
            {
              q: "Stablecoin jenis mana yang paling berisiko?",
              options: [
                "Algoritmik, karena patokannya hanya dijaga oleh mekanisme pasar",
                "Yang dijamin dolar di rekening bank dan diaudit secara berkala",
                "Yang dijamin kripto berlebih sehingga bisa dilikuidasi bila turun",
                "Yang dijamin emas batangan tersimpan di kustodian resmi",
              ],
              answer: 0,
              explain:
                "Stablecoin algoritmik menjaga patokan tanpa jaminan penuh, sehingga rapuh.",
            },
            {
              q: "Apa arti 'depeg' pada stablecoin?",
              options: [
                "Nilainya lepas dari patokan, misalnya tak lagi sekitar satu dolar",
                "Stablecoin itu dihentikan peredarannya oleh pihak penerbitnya",
                "Jaminan di belakangnya diganti dengan jenis aset yang berbeda",
                "Token dipindahkan ke blockchain lain sehingga alamatnya berubah",
              ],
              answer: 0,
              explain: "Depeg = stablecoin gagal mempertahankan nilai patokannya.",
            },
          ],
        },
        {
          id: "bc-adv-2",
          title: "Oracle — Menghubungkan ke Dunia Nyata",
          duration: "11 menit",
          content: `
<p>Ada kelemahan mendasar smart contract: ia <b>tidak bisa mengakses data di luar blockchain</b> (harga, cuaca, hasil pertandingan). Blockchain sengaja "tertutup" demi konsistensi.</p>

<div data-diagram="pipeline" data-stages="Dunia nyata::harga, cuaca, skor|Oracle::beberapa sumber independen|Konsensus::ambil nilai tengah|Smart contract::baru bisa bertindak" data-caption="Blockchain buta terhadap dunia luar — oracle menjadi matanya"></div>


<div class="callout warn">
<b>Masalahnya:</b> banyak aplikasi butuh data dunia nyata. Asuransi panen butuh data cuaca; DeFi butuh harga aset terkini. Bagaimana smart contract mendapatkannya?
</div>

<h3>Solusi: Oracle</h3>
<p><b>Oracle</b> adalah jembatan yang membawa data dunia luar ke dalam smart contract secara tepercaya. Contoh paling terkenal: <b>Chainlink</b>.</p>
<ul>
  <li>Smart contract meminta data (mis. "harga ETH sekarang").</li>
  <li>Jaringan oracle mengambil data dari banyak sumber, menyepakatinya, lalu mengirim ke kontrak.</li>
</ul>

<div class="callout">
<b>"Oracle problem":</b> jika data dari oracle salah/dimanipulasi, smart contract akan bertindak salah — dan itu permanen. Karena itu oracle yang baik memakai <b>banyak sumber & node</b> agar tidak bergantung pada satu titik.
</div>

<h3>Dampak</h3>
<p>Oracle membuka pintu bagi aplikasi Web3 yang berinteraksi dengan dunia nyata: DeFi (harga), asuransi otomatis, prediksi, dan banyak lagi. Tanpa oracle, smart contract hanya bisa "melihat" data di dalam blockchain saja.</p>
`,
          keyPoints: [
            "Smart contract tak bisa mengakses data di luar blockchain (harga, cuaca, dll).",
            "Oracle (mis. Chainlink) menjembatani data dunia nyata ke smart contract secara tepercaya.",
            "'Oracle problem': data salah membuat kontrak salah; oracle baik memakai banyak sumber & node.",
            "Dampak: membuka aplikasi Web3 yang berinteraksi dengan dunia nyata (DeFi, asuransi, dll).",
          ],
          quiz: [
            {
              q: "Mengapa smart contract butuh oracle?",
              options: [
                "Karena kontrak tidak bisa mengakses data dari luar blockchain sendiri",
                "Karena kontrak perlu diperiksa kebenarannya sebelum boleh dijalankan",
                "Karena kontrak tidak mampu menyimpan data dalam jumlah besar",
                "Karena kontrak memerlukan izin validator untuk setiap eksekusinya",
              ],
              answer: 0,
              explain:
                "Blockchain tertutup; oracle membawa data eksternal ke dalam kontrak.",
            },
            {
              q: "Bagaimana oracle yang baik mengurangi risiko data salah?",
              options: [
                "Memakai banyak sumber independen yang hasilnya harus saling sepakat",
                "Memilih satu sumber paling tepercaya lalu memakainya terus-menerus",
                "Menyimpan seluruh data mentahnya di blockchain sebagai cadangan",
                "Memperbarui datanya sesering mungkin agar selalu yang paling baru",
              ],
              answer: 0,
              explain:
                "Desentralisasi sumber/node mengurangi ketergantungan pada satu titik gagal.",
            },
          ],
        },
        {
          id: "bc-defi-1",
          title: "Meminjam di DeFi — Jaminan, Health Factor & Likuidasi",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Stablecoin</b> = token yang nilainya dipatok ke aset stabil, mis. dolar. <b>Oracle</b> = penyedia data harga dari luar blockchain untuk smart contract (pelajaran sebelumnya). Pinjam-meminjam di DeFi bergantung pada keduanya.
</div>

<h3>Langkah 1 — Masalahnya: tidak ada yang mengenalmu</h3>
<p>Bank meminjamkan uang setelah memeriksa KTP, slip gaji, dan riwayat kreditmu. Smart contract tidak bisa melakukan semua itu. Kalau peminjam kabur, tidak ada yang bisa ditagih.</p>
<p>Solusinya sederhana dan keras: <b>jaminan lebih besar daripada pinjaman</b> (<i>overcollateralized</i>). Mirip menggadaikan emas — hanya saja penggadaiannya dijalankan program, 24 jam, tanpa petugas.</p>

<h3>Langkah 2 — Contoh dengan angka</h3>
<p>Andi punya <b>1 ETH</b>. Harganya Rp50 juta (angka ilustrasi). Ia butuh uang tapi tidak mau menjual ETH-nya. Ia menyetor 1 ETH ke protokol pinjaman (misalnya Aave), lalu meminjam stablecoin senilai <b>Rp30 juta</b>.</p>
<table class="tbl">
  <tr><th>Ukuran</th><th>Hitungan</th><th>Hasil</th></tr>
  <tr><td>Nilai jaminan</td><td>1 ETH × Rp50 juta</td><td>Rp50 juta</td></tr>
  <tr><td><b>LTV</b> (rasio pinjaman)</td><td>30 ÷ 50</td><td>60%</td></tr>
  <tr><td><b>Batas likuidasi</b> untuk ETH (ilustrasi)</td><td>ditetapkan protokol</td><td>80%</td></tr>
  <tr><td><b>Health factor</b></td><td>(50 × 0,8) ÷ 30</td><td><b>1,33</b></td></tr>
</table>
<div class="callout">
<b>Health factor = nilai jaminan × batas likuidasi ÷ utang</b><br><br>
Di atas 1 = aman. <b>Di bawah 1 = jaminanmu boleh dilikuidasi</b> oleh siapa pun. Untuk Andi, health factor jatuh ke 1 ketika 0,8 × harga = 30, yaitu saat harga ETH turun ke <b>Rp37,5 juta</b> — cukup turun 25%.
</div>

<h3>Coba sendiri</h3>
<div data-demo="defi-likuidasi"></div>

<h3>Langkah 3 — Likuidasi: siapa mengambil apa</h3>
<p>Saat health factor di bawah 1, pihak lain — disebut <b>likuidator</b>, biasanya bot — boleh melunasi sebagian utang Andi dan sebagai gantinya mengambil jaminan Andi <b>dengan diskon</b> (bonus likuidasi, misalnya 5%). Utang Andi berkurang, tapi ia kehilangan sebagian ETH plus denda itu. Tidak ada yang menelepon untuk mengingatkan; program berjalan begitu syaratnya terpenuhi.</p>
<div class="callout warn">
<b>Likuidasi beruntun.</b> Saat harga jatuh tajam, banyak posisi dilikuidasi bersamaan. Jaminan yang dilepas likuidator dijual ke pasar, harga turun lagi, posisi berikutnya ikut dilikuidasi. Inilah sebabnya crypto bisa anjlok sangat dalam dalam hitungan jam.
</div>

<h3>Langkah 4 — Dari mana bunganya, dan untuk siapa?</h3>
<p>Penyimpan menaruh stablecoin di kolam pinjaman dan menerima bunga; peminjam membayar bunga. Besarnya diatur rumus berdasarkan <b>utilisasi</b> — berapa persen isi kolam yang sedang dipinjam:</p>
<table class="tbl">
  <tr><th>Utilisasi kolam</th><th>Bunga</th><th>Tujuannya</th></tr>
  <tr><td>Rendah (banyak dana menganggur)</td><td>Turun</td><td>Menarik peminjam</td></tr>
  <tr><td>Tinggi (hampir habis dipinjam)</td><td>Naik tajam</td><td>Menarik penyimpan baru dan mendorong peminjam melunasi, supaya penyimpan tetap bisa menarik dananya</td></tr>
</table>

<h3>Langkah 5 — Kenapa orang mau meminjam dengan jaminan sebesar itu?</h3>
<table class="tbl">
  <tr><th>Alasan</th><th>Penjelasan</th><th>Risikonya</th></tr>
  <tr><td>Tidak mau menjual aset</td><td>Butuh dana sekarang tapi yakin asetnya naik</td><td>Kalau justru turun, dilikuidasi</td></tr>
  <tr><td>Leverage</td><td>Pinjam stablecoin, beli ETH lagi, jaminkan lagi</td><td class="bad-cell">Kerugian berlipat; likuidasi datang jauh lebih cepat</td></tr>
  <tr><td>Bertaruh harga turun</td><td>Pinjam token, jual sekarang, beli kembali nanti</td><td>Rugi tanpa batas bila harganya justru naik</td></tr>
</table>
<div class="callout">
<b>Flash loan</b> adalah keanehan khas DeFi: meminjam tanpa jaminan, dengan syarat dilunasi <b>dalam transaksi yang sama</b>. Kalau tidak lunas, seluruh transaksi dibatalkan seolah tidak pernah terjadi. Alat ini berguna untuk arbitrase, tapi juga sering dipakai menyerang protokol yang oracle harganya mudah dimanipulasi.
</div>
<div class="callout warn">Edukasi, bukan saran investasi. Meminjam dengan jaminan aset yang harganya bergejolak bisa menghapus jaminanmu dalam satu malam.</div>
`,
          keyPoints: [
            "Tanpa KTP dan skor kredit, DeFi meminjamkan dengan jaminan lebih besar daripada pinjaman.",
            "LTV = utang ÷ jaminan; health factor = jaminan × batas likuidasi ÷ utang; di bawah 1 berarti boleh dilikuidasi.",
            "Likuidator melunasi sebagian utang dan mengambil jaminan dengan diskon; likuidasi bisa beruntun saat pasar jatuh.",
            "Bunga diatur rumus berdasarkan utilisasi kolam: makin habis dipinjam, makin tinggi bunganya.",
            "Leverage mempercepat likuidasi; flash loan harus dilunasi dalam transaksi yang sama."
          ],
          practice: [
            { type: "number", q: "Jaminan Rp40 juta, batas likuidasi 80%, utang Rp20 juta. Berapa health factor-nya?", answer: 1.6, tol: 0.01, hint: "40 × 0,8 ÷ 20.", solution: "32 ÷ 20 = 1,6 — masih aman." },
            { type: "number", q: "Jaminan 1 ETH, batas likuidasi 80%, utang Rp24 juta. Di harga ETH berapa (juta rupiah) health factor tepat 1?", answer: 30, tol: 0.1, unit: "jt", hint: "0,8 × harga = 24.", solution: "Harga = 24 ÷ 0,8 = Rp30 juta." }
          ],
          quiz: [
            {
              q: "Kenapa pinjaman di DeFi mewajibkan jaminan lebih besar daripada pinjamannya?",
              options: [
                "Karena tidak ada identitas yang bisa ditagih bila peminjam kabur",
                "Karena bunga DeFi selalu lebih tinggi daripada bunga bank",
                "Karena stablecoin tidak boleh dipinjamkan tanpa izin bank",
                "Karena smart contract tidak bisa menghitung pecahan kecil"
              ],
              answer: 0,
              explain: "Program tidak bisa memeriksa KTP atau menagih. Jaminan berlebih menggantikan kepercayaan."
            },
            {
              q: "Health factor sebuah posisi turun ke 0,9. Apa artinya?",
              options: [
                "Jaminannya kini boleh dilikuidasi oleh siapa pun",
                "Pinjamannya otomatis dihapus oleh protokol",
                "Bunga pinjamannya turun menjadi 90%",
                "Peminjam masih punya 90% ruang aman"
              ],
              answer: 0,
              explain: "Di bawah 1, likuidator boleh melunasi sebagian utang dan mengambil jaminan dengan diskon."
            },
            {
              q: "Apa yang terjadi pada bunga ketika hampir seluruh isi kolam pinjaman sedang dipinjam?",
              options: [
                "Naik tajam untuk menarik penyimpan dan mendorong pelunasan",
                "Turun agar peminjam baru tetap mau datang ke kolam itu",
                "Tetap sama karena bunga ditetapkan saat kolam dibuat",
                "Dihentikan sementara sampai ada penyimpan yang baru"
              ],
              answer: 0,
              explain: "Bunga mengikuti utilisasi. Kolam yang hampir habis menaikkan bunga agar penyimpan tetap bisa menarik dananya."
            }
          ]
        },
        {
          id: "bc-defi-2",
          title: "Staking, Liquid Staking & Yield Farming — Dari Mana Imbal Hasilnya?",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Pada <b>Proof of Stake</b>, validator mengunci koin sebagai jaminan dan ikut membuat blok (pelajaran Konsensus). <b>Kolam likuiditas</b> DEX dan <b>impermanent loss</b> sudah kamu pelajari di pelajaran AMM. Pelajaran ini mengumpulkan semua cara "menghasilkan imbal hasil" di crypto — dan satu pertanyaan yang selalu harus diajukan: <i>uangnya dari mana?</i>
</div>

<h3>Langkah 1 — Staking: menjadi penjamin jaringan</h3>
<p>Di jaringan Proof of Stake, siapa pun yang mengunci koin untuk ikut memvalidasi transaksi mendapat imbalan. Sumbernya dua: <b>koin baru</b> yang dicetak jaringan dan <b>biaya transaksi</b> yang dibayar pengguna.</p>
<table class="tbl">
  <tr><th>Cara</th><th>Penjelasan</th><th>Catatan</th></tr>
  <tr><td>Menjalankan validator sendiri</td><td>Di Ethereum butuh 32 ETH dan komputer yang menyala terus</td><td>Kalau curang atau sangat sering mati, sebagian jaminan dipotong (<i>slashing</i>)</td></tr>
  <tr><td>Lewat bursa atau penyedia</td><td>Titip koin, mereka yang menjalankan validator</td><td>Praktis, tapi kamu kembali memercayai pihak ketiga</td></tr>
  <tr><td><b>Liquid staking</b></td><td>Setor ETH ke protokol (mis. Lido), terima token tanda bukti (stETH) yang nilainya ikut bertambah</td><td>Token bukti bisa dipakai lagi di DeFi — tapi menambah lapisan risiko</td></tr>
</table>
<div class="callout warn">
<b>Token bukti tidak selalu sama nilainya dengan aslinya.</b> Saat pasar panik pada Juni 2022, stETH sempat diperdagangkan beberapa persen di bawah ETH. Orang yang memakai stETH sebagai jaminan pinjaman dengan leverage terkena likuidasi. Lapisan di atas lapisan — termasuk <i>restaking</i>, memakai ulang jaminan staking untuk mengamankan layanan lain — melipatgandakan imbal hasil sekaligus risikonya.
</div>

<h3>Langkah 2 — Yield farming: menyewakan likuiditas</h3>
<p><b>Yield farming</b> berarti menaruh token di kolam DEX atau kolam pinjaman untuk mendapat <b>fee</b> — dan sering kali tambahan <b>token insentif</b> dari protokolnya. Angka imbal hasilnya bisa tampak luar biasa, karena sebagian besar berasal dari token insentif yang baru dicetak.</p>

<h3>Langkah 3 — APR vs APY: jangan tertipu cara menulis</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Contoh 12% per tahun</th></tr>
  <tr><td><b>APR</b></td><td>Bunga sederhana per tahun, tanpa bunga berbunga</td><td>12%</td></tr>
  <tr><td><b>APY</b></td><td>Termasuk efek majemuk bila hasilnya ditanam ulang</td><td>Ditanam ulang tiap bulan: (1 + 0,12 ÷ 12)¹² − 1 = <b>12,68%</b></td></tr>
</table>
<p>APY selalu tampak lebih besar daripada APR untuk bunga yang sama — karena itu situs yang ingin terlihat menarik lebih suka menampilkan APY.</p>

<h3>Langkah 4 — Pertanyaan yang menentukan: imbal hasil riil</h3>
<p>Misalkan staking memberi <b>4% per tahun</b> dalam bentuk koin baru, sementara jumlah koin yang beredar juga bertambah <b>3% per tahun</b>. Porsi kepemilikanmu atas jaringan hanya bertambah sekitar <b>1%</b>. Selebihnya hanyalah kue yang dipotong lebih kecil — persis konsep dilusi di modul Ekonomi.</p>
<table class="tbl">
  <tr><th>Sumber imbal hasil</th><th>Penilaian</th></tr>
  <tr><td class="ok-cell">Biaya yang dibayar pengguna sungguhan (gas, fee swap, bunga pinjaman)</td><td>Bisa berkelanjutan selama penggunanya ada</td></tr>
  <tr><td>Koin atau token yang baru dicetak</td><td>Hanya menarik bila pemakaian jaringan tumbuh lebih cepat dari pencetakan</td></tr>
  <tr><td class="bad-cell">Uang dari penyetor baru</td><td>Skema Ponzi — runtuh begitu penyetor baru berhenti datang</td></tr>
</table>

<h3>Langkah 5 — Daftar periksa sebelum mengunci aset</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Kenapa penting</th></tr>
  <tr><td>Dari mana imbal hasilnya?</td><td>Fee nyata vs cetak token vs uang penyetor baru</td></tr>
  <tr><td>Berapa lama asetku terkunci?</td><td>Penarikan staking bisa butuh beberapa hari sampai berminggu-minggu antre</td></tr>
  <tr><td>Siapa yang memegang kunci?</td><td>Bursa, protokol, atau dirimu sendiri</td></tr>
  <tr><td>Apa yang bisa salah?</td><td>Slashing, bug kontrak, token bukti lepas dari nilainya, impermanent loss</td></tr>
  <tr><td>Imbal hasil di atas 20–30% per tahun?</td><td>Hampir pasti ada risiko besar yang belum kamu lihat</td></tr>
</table>
<div class="callout warn">Edukasi, bukan saran investasi. Imbal hasil tinggi di crypto hampir selalu dibayar dengan risiko yang sama tingginya.</div>
`,
          keyPoints: [
            "Staking = mengunci koin untuk ikut mengamankan jaringan PoS; imbalannya dari koin baru dan biaya transaksi; risiko slashing.",
            "Liquid staking memberi token bukti (mis. stETH) yang bisa dipakai lagi, tapi bisa lepas dari nilai aslinya saat panik.",
            "Yield farming = menyewakan token ke kolam DEX/pinjaman; imbal hasil besar biasanya dari token insentif yang baru dicetak.",
            "APY memasukkan efek majemuk: APR 12% ditanam ulang tiap bulan = APY 12,68%.",
            "Imbal hasil riil = imbal hasil dikurangi pertambahan jumlah token; tanyakan selalu dari mana uangnya."
          ],
          practice: [
            { type: "number", q: "APR 24%, hasil ditanam ulang setiap bulan. Berapa APY-nya? (%, 1 desimal)", answer: 26.8, tol: 0.1, unit: "%", hint: "(1 + 0,24 ÷ 12)¹² − 1 = 1,02¹² − 1.", solution: "1,02¹² = 1,268 → APY ≈ 26,8%." },
            { type: "number", q: "Staking memberi 6% per tahun, jumlah koin beredar bertambah 4% per tahun. Kira-kira berapa persen imbal hasil riilnya?", answer: 2, tol: 0.1, unit: "%", hint: "6 − 4.", solution: "Sekitar 2% — sisanya hanya mengimbangi pengenceran." }
          ],
          quiz: [
            {
              q: "Dari mana imbalan staking di jaringan Proof of Stake berasal?",
              options: [
                "Dari koin baru yang dicetak dan biaya transaksi pengguna",
                "Dari bunga yang dibayar bank kepada pemegang koin",
                "Dari selisih harga koin di berbagai bursa berbeda",
                "Dari iklan yang ditampilkan di dompet para validator"
              ],
              answer: 0,
              explain: "Validator dibayar dengan koin baru dan biaya transaksi. Bagian koin baru juga mengencerkan semua pemegang."
            },
            {
              q: "Apa risiko khusus liquid staking seperti stETH?",
              options: [
                "Token buktinya bisa diperdagangkan di bawah nilai aslinya",
                "Koin yang di-stake otomatis hilang setelah setahun berjalan",
                "Validatornya wajib dijalankan sendiri di komputer pemilik",
                "Imbal hasilnya dikenai pajak dua kali lipat dari staking"
              ],
              answer: 0,
              explain: "Saat pasar panik, stETH pernah turun beberapa persen di bawah ETH, memicu likuidasi bagi yang memakainya dengan leverage."
            },
            {
              q: "Situs menampilkan 'APY 2.000%'. Pertanyaan pertama yang paling tepat?",
              options: [
                "Dari mana imbal hasil sebesar itu dibayarkan?",
                "Berapa lama lagi penawaran ini akan berakhir?",
                "Apakah bisa langsung menyetor dengan rupiah?",
                "Berapa banyak orang yang sudah ikut menyetor?"
              ],
              answer: 0,
              explain: "Angka setinggi itu hampir selalu dari token insentif yang baru dicetak — atau dari uang penyetor baru."
            }
          ]
        },
        {
          id: "bc-app-3",
          title: "Bridge & Interoperabilitas",
          duration: "11 menit",
          content: `
<p>Ada banyak blockchain (Ethereum, Solana, BNB Chain, dll) yang <b>tidak saling bicara</b> secara alami. Bagaimana memindahkan aset dari satu chain ke chain lain? Lewat <b>bridge</b>.</p>

<div data-diagram="pipeline" data-stages="Kunci aset::di rantai asal|Kirim bukti::ke rantai tujuan|Cetak versi terbungkus::misal wBTC|Tukar balik::bakar lalu buka kunci" data-caption="Aset tidak benar-benar berpindah — dikunci di sini, dicetak tiruannya di sana"></div>


<h3>Cara kerja (umum)</h3>
<ol>
  <li>Aset kamu <b>dikunci</b> di blockchain asal (chain A).</li>
  <li>Representasi setara-nya <b>dicetak (mint)</b> di blockchain tujuan (chain B).</li>
  <li>Untuk kembali, representasi di B "dibakar" dan aset asli di A dibuka.</li>
</ol>

<div class="callout">
<b>Interoperabilitas</b> = visi banyak blockchain bisa saling bekerja & bertukar nilai/data, membentuk ekosistem <b>multi-chain</b> yang terhubung.
</div>

<div class="callout warn">
<b>Risiko besar:</b> bridge sering menjadi <b>target peretasan terbesar</b> di crypto — karena menyimpan banyak aset di satu tempat dan kompleks secara teknis. Beberapa peretasan bridge mencuri <b>ratusan juta hingga miliaran dolar</b>. Pilih bridge yang teruji & hati-hati.
</div>

<h3>Dampak</h3>
<p>Bridge memungkinkan dunia <b>multi-chain</b> (pindah ke chain yang lebih murah/cepat), tapi menjadi salah satu <b>titik lemah keamanan</b> paling serius di Web3.</p>
`,
          keyPoints: [
            "Bridge memindahkan aset antar-blockchain: kunci di chain asal, cetak representasi di chain tujuan.",
            "Interoperabilitas = visi banyak blockchain saling bekerja (ekosistem multi-chain).",
            "Bridge sering jadi target peretasan terbesar (ratusan juta–miliaran dolar) karena menyimpan banyak aset & kompleks.",
            "Dampak: membuka dunia multi-chain, tapi titik lemah keamanan serius.",
          ],
          quiz: [
            {
              q: "Apa fungsi sebuah bridge?",
              options: [
                "Memindahkan aset atau data antar-blockchain yang berbeda",
                "Menghubungkan dompet pengguna dengan rekening banknya",
                "Mempercepat transaksi dengan melewati antrean jaringan utama",
                "Menukar token dengan mata uang biasa tanpa melalui bursa",
              ],
              answer: 0,
              explain: "Bridge menghubungkan blockchain yang berbeda untuk memindahkan aset.",
            },
            {
              q: "Mengapa bridge berisiko tinggi?",
              options: [
                "Karena menyimpan banyak aset di satu titik dan kodenya rumit",
                "Karena transaksinya tidak tercatat di blockchain mana pun",
                "Karena hanya bisa dipakai satu arah dan tidak bisa dibatalkan",
                "Karena biayanya jauh lebih mahal daripada transaksi biasa",
              ],
              answer: 0,
              explain:
                "Konsentrasi aset & kerumitan teknis menjadikan bridge sasaran empuk peretas.",
            },
          ],
        },
        {
          id: "bc-a-4",
          title: "Keamanan & Penipuan yang Sering Terjadi",
          duration: "14 menit",
          content: `
<p>Dunia crypto penuh peluang sekaligus jebakan. Keamanan adalah tanggung jawabmu sendiri — tidak ada bank yang membatalkan transaksi.</p>

<div data-diagram="layers" data-items="Jangan bagikan seed phrase|Pakai dompet hardware|Cek alamat kontrak resmi|Curigai imbal hasil pasti|Mulai dari nominal kecil" data-caption="Lima lapis pertahanan — yang paling atas tidak bisa ditawar"></div>


<h3>Penipuan yang sering terjadi</h3>
<ul>
  <li><b>Phishing</b> — situs/email palsu meminta seed phrase. JANGAN pernah masukkan seed phrase di situs mana pun.</li>
  <li><b>Rug pull</b> — pembuat proyek kabur membawa dana setelah mengumpulkan investor.</li>
  <li><b>Giveaway palsu</b> — "kirim 1 ETH, dapat 2 ETH kembali". Selalu hoaks.</li>
  <li><b>Token palsu</b> — meniru proyek terkenal.</li>
  <li><b>Pig butchering</b> — penipu membangun kepercayaan berminggu-minggu (kenalan online, "pacar", "mentor"), lalu mengajak investasi di aplikasi palsu yang menampilkan untung buatan. Uangnya tidak pernah bisa ditarik (<a href="#/lesson/bc-skep-1">lihat polanya</a>).</li>
</ul>

<h3>Kebiasaan aman</h3>
<ol>
  <li>Simpan seed phrase secara offline; jangan difoto/diketik online.</li>
  <li>Gunakan cold wallet untuk dana besar.</li>
  <li>Verifikasi alamat situs & kontrak sebelum berinteraksi.</li>
  <li>Skeptis pada janji "untung pasti & cepat".</li>
  <li>DYOR — Do Your Own Research.</li>
</ol>

<h3>Kalau sudah terlanjur tertipu: lapor ke IASC</h3>
<p><b>IASC (Indonesia Anti-Scam Centre)</b> adalah pusat penanganan laporan penipuan keuangan yang dibentuk <b>OJK</b> bersama Satgas PASTI dan industri jasa keuangan, dan beroperasi sejak <b>22 November 2024</b>. IASC menghubungkan bank, dompet digital, dan lembaga keuangan lain sekaligus untuk:</p>
<ol>
  <li><b>Menelusuri</b> ke rekening mana saja uangmu mengalir, termasuk bila sudah dipecah ke banyak rekening.</li>
  <li><b>Memblokir</b> rekening penipu sebelum uangnya habis ditarik.</li>
  <li><b>Mengembalikan</b> dana yang berhasil diselamatkan kepada korban.</li>
</ol>
<p>Sebelum ada IASC, korban harus melapor ke tiap bank satu per satu, padahal penipu memindahkan uangnya dalam hitungan menit. Sampai 31 Juli 2026, IASC menerima <b>636.014 laporan</b>, memblokir <b>604.923 rekening</b>, menahan dana korban <b>Rp723,7 miliar</b>, dan sudah mengembalikan <b>Rp204,3 miliar</b>.</p>

<div data-diagram="stack" data-parts="Berhasil diblokir:437|Keburu dipindahkan penipu:8663" data-caption="Per 14 Januari 2026: dari Rp9,1 triliun kerugian yang dilaporkan ke IASC, baru sekitar Rp437 miliar yang berhasil diblokir"></div>
<div class="callout warn">
<b>Kecepatan menentukan.</b> Sebagian besar kerugian tidak bisa diselamatkan karena uangnya sudah dipindahkan sebelum korban melapor. Makin cepat kamu lapor, makin besar peluang uangmu masih tertahan di rekening penipu.
</div>

<div data-diagram="pipeline" data-stages="Berhenti::jangan transfer lagi, termasuk biaya penarikan|Hubungi bank::minta rekening tujuan diblokir|Lapor IASC::iasc.ojk.go.id atau Kontak OJK 157|Lapor polisi::untuk proses hukumnya|Waspada::penipu yang menawarkan jasa pemulihan dana" data-caption="Urutan langkah begitu sadar tertipu"></div>
<p><b>Siapkan sebelum melapor:</b> identitas diri, kronologi singkat, bukti transfer, nomor rekening atau akun tujuan, dan tangkapan layar percakapan dengan penipu.</p>
<div class="callout">
<b>Dua hal yang perlu diingat:</b>
<ul>
  <li>Melapor ke IASC <b>gratis</b>. Orang yang menawarkan "jasa mengembalikan dana" dengan bayaran di depan hampir pasti penipu lanjutan.</li>
  <li>IASC bekerja lewat lembaga keuangan di Indonesia. Kalau uangmu sudah dibelikan crypto lalu dikirim ke dompet di luar negeri, pemblokirannya jauh lebih sulit — itulah sebabnya penipu sering meminta korban membeli crypto dulu.</li>
</ul>
</div>

<div class="callout warn">
<b>Pengingat:</b> Seluruh materi ini bersifat edukasi, bukan saran finansial/investasi. Crypto sangat berisiko.
</div>
`,
          keyPoints: [
            "Keamanan crypto adalah tanggung jawab pribadi; transaksi tak bisa dibatalkan.",
            "Waspadai phishing, rug pull, giveaway palsu, token tiruan, dan pig butchering (kepercayaan dibangun dulu, lalu untung palsu di aplikasi).",
            "Simpan seed phrase offline, pakai cold wallet, dan selalu DYOR.",
            "Kalau tertipu: berhenti transfer, hubungi bank, lalu lapor ke IASC OJK (iasc.ojk.go.id atau 157) secepatnya — per Januari 2026 baru sekitar 5% kerugian yang dilaporkan berhasil diblokir.",
            "Melapor ke IASC gratis; tawaran \"jasa pemulihan dana\" berbayar hampir pasti penipuan lanjutan.",
          ],
          practice: [
            { type: "choice", q: "Kamu sadar 20 menit lalu mentransfer Rp5 juta ke \"mentor investasi\" yang ternyata penipu. Ia kini meminta Rp1 juta lagi sebagai \"biaya penarikan\". Apa langkah yang paling tepat?", options: ["Berhenti transfer, hubungi bank, lalu lapor ke IASC sekarang", "Bayar Rp1 juta itu supaya Rp5 juta bisa ditarik kembali", "Tunggu beberapa hari, siapa tahu dananya cair sendiri", "Bayar jasa pemulihan dana yang menghubungimu di media sosial"], answer: 0, hint: "Ingat: kecepatan menentukan, dan biaya penarikan adalah tanda penipuan.", solution: "Biaya penarikan hanyalah cara memeras lebih banyak uang. Selama uangmu belum dipindahkan penipu, bank dan IASC masih bisa memblokirnya — jadi lapor secepatnya." },
          ],
          quiz: [
            {
              q: "Apa tindakan paling penting menjaga keamanan wallet?",
              options: [
                "Membagikan seed phrase ke teman terpercaya",
                "Tidak pernah memasukkan seed phrase di situs mana pun",
                "Menyimpan seed phrase di email",
                "Memfoto seed phrase di HP",
              ],
              answer: 1,
              explain:
                "Seed phrase tidak boleh dimasukkan ke situs/aplikasi apa pun — itu ciri phishing.",
            },
            {
              q: "Janji 'kirim 1 ETH dapat 2 ETH' adalah?",
              options: [
                "Penipuan klasik — tak ada mekanisme yang bisa melipatgandakan koin",
                "Program hadiah resmi yang biasa diadakan saat jaringan diperbarui",
                "Cara kerja staking di mana koin bertambah karena bunga majemuk",
                "Mekanisme airdrop bagi pengguna yang aktif bertransaksi",
              ],
              answer: 0,
              explain:
                "Itu pola giveaway palsu klasik — selalu penipuan.",
            },
            {
              q: "Apa yang dilakukan IASC OJK untuk korban penipuan?",
              options: [
                "Menelusuri dan memblokir rekening penipu",
                "Menjamin semua kerugian diganti penuh",
                "Menjual jasa pemulihan dana crypto",
                "Memberi izin platform investasi baru",
              ],
              answer: 0,
              explain:
                "IASC menghubungkan bank dan lembaga keuangan untuk menelusuri aliran dana, memblokir rekening penipu, dan mengembalikan dana yang berhasil diselamatkan — tapi tidak ada jaminan uang kembali penuh.",
            },
            {
              q: "Kenapa korban penipuan harus melapor secepat mungkin?",
              options: [
                "Penipu cepat memindahkan uang ke rekening lain",
                "Laporan setelah satu hari dikenai biaya",
                "Bank hanya menerima laporan di jam kerja",
                "IASC hanya menerima laporan di hari pertama",
              ],
              answer: 0,
              explain:
                "Dana yang masih tertahan di rekening penipu bisa diblokir; begitu dipindahkan, peluangnya mengecil. Per Januari 2026 baru sekitar 5% kerugian yang dilaporkan berhasil diblokir.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 10: LAYER 1, LAYER 2, PRIVASI & DAO ---------------- */
    {
      id: "bc-lanjutan",
      level: "Lanjutan",
      title: "Layer 1, Layer 2, Privasi & DAO",
      summary: "Kenapa blockchain dasar (Layer 1) lambat dan trilema yang harus dipilih, Layer 2 (rollup & Lightning) untuk skalabilitas, zero-knowledge proof untuk privasi, dan DAO sebagai organisasi terdesentralisasi.",
      lessons: [
        {
          id: "bc-l1-1",
          title: "Layer 1 — Blockchain Dasar & Trilema Skalabilitas",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Setiap <b>node</b> menyimpan salinan buku besar dan memeriksa setiap transaksi; <b>konsensus</b> (PoW atau PoS) menentukan siapa yang boleh menambah blok; <b>ruang blok terbatas</b> sehingga biaya gas naik saat ramai (pelajaran Gas &amp; Fee). Ketiganya menjelaskan kenapa blockchain bisa lambat.
</div>

<h3>Langkah 1 — Apa itu Layer 1?</h3>
<p><b>Layer 1 (L1)</b> adalah blockchain dasarnya sendiri: ia punya jaringan validator atau penambang sendiri, koin sendiri untuk membayar biaya dan mengamankan jaringan, serta aturan kapan sebuah transaksi dianggap <b>final</b>. Bitcoin, Ethereum, Solana, BNB Chain, Avalanche, Cardano, dan TRON adalah contoh L1.</p>
<div class="callout">
<b>Analogi:</b> L1 adalah <b>jalan raya utama sekaligus pengadilan terakhir</b> sebuah kota. Semua urusan pada akhirnya dicatat dan diputuskan di sini. Layer 2 — pelajaran berikutnya — adalah jalan tol layang yang dibangun di atasnya.
</div>

<h3>Langkah 2 — Kenapa L1 lambat?</h3>
<p>Di bank, satu server memproses transaksi. Di blockchain, <b>ribuan komputer mengerjakan pekerjaan yang sama</b> — setiap node memeriksa setiap transaksi — supaya tidak ada satu pihak pun yang perlu dipercaya. Keamanan itu dibayar dengan kecepatan.</p>
<table class="tbl">
  <tr><th>Jaringan</th><th>Blok baru setiap…</th><th>Kapasitas kasar</th></tr>
  <tr><td>Bitcoin</td><td>sekitar 10 menit</td><td>beberapa transaksi per detik (sekitar 3–7)</td></tr>
  <tr><td>Ethereum</td><td>12 detik</td><td>belasan sampai puluhan transaksi per detik</td></tr>
  <tr><td>Solana</td><td>sekitar 0,4 detik</td><td>ribuan transaksi per detik</td></tr>
  <tr><td>Jaringan kartu pembayaran besar</td><td>—</td><td>rata-rata ribuan transaksi per detik</td></tr>
</table>
<p><i>Angka kapasitas sangat bergantung pada jenis transaksinya; anggap sebagai urutan besaran, bukan angka pasti.</i></p>

<h3>Langkah 3 — Trilema: pilih dua, korbankan satu</h3>
<p>Istilah yang dipopulerkan Vitalik Buterin ini menyebut tiga sifat yang sulit dicapai sekaligus:</p>
<table class="tbl">
  <tr><th>Sifat</th><th>Artinya</th></tr>
  <tr><td><b>Desentralisasi</b></td><td>Banyak pihak biasa bisa ikut menjalankan node dengan komputer sederhana</td></tr>
  <tr><td><b>Keamanan</b></td><td>Sangat mahal untuk menyerang atau menulis ulang riwayat</td></tr>
  <tr><td><b>Skalabilitas</b></td><td>Banyak transaksi per detik dengan biaya murah</td></tr>
</table>
<p>Setiap L1 mengambil pilihan berbeda:</p>
<table class="tbl">
  <tr><th>L1</th><th>Yang diutamakan</th><th>Yang dikorbankan</th></tr>
  <tr><td>Bitcoin</td><td>Keamanan &amp; desentralisasi — node bisa jalan di komputer biasa</td><td>Kecepatan; pembayaran cepat diserahkan ke lapisan di atasnya</td></tr>
  <tr><td>Ethereum</td><td>Desentralisasi &amp; keamanan, dengan smart contract</td><td>Kapasitas L1; peningkatan diserahkan ke Layer 2</td></tr>
  <tr><td>Solana</td><td>Kecepatan &amp; biaya murah</td><td>Validator butuh komputer jauh lebih kuat, jadi lebih sedikit orang yang mampu ikut; jaringannya pernah beberapa kali berhenti berjam-jam pada 2021–2022</td></tr>
  <tr><td>Rantai dengan sedikit validator</td><td>Cepat dan murah</td><td>Kendali terpusat di sedikit pihak</td></tr>
</table>

<h3>Langkah 4 — Dua jalan untuk membesar</h3>
<table class="tbl">
  <tr><th>Jalan</th><th>Caranya</th><th>Contoh</th></tr>
  <tr><td>Memperbesar L1 itu sendiri</td><td>Blok lebih cepat atau lebih besar, validator lebih kuat</td><td>Solana</td></tr>
  <tr><td>L1 tetap ramping, kapasitas ditambah di atasnya</td><td>Transaksi dikerjakan di lapisan kedua, L1 menjadi hakim terakhir</td><td>Ethereum dengan rollup; Bitcoin dengan Lightning</td></tr>
</table>

<h3>Langkah 5 — Cara menilai sebuah L1</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Yang dilihat</th></tr>
  <tr><td>Siapa yang menjalankannya?</td><td>Jumlah validator dan seberapa tersebar kepemilikannya</td></tr>
  <tr><td>Seberapa cepat final?</td><td>Berapa lama sampai transaksi tidak bisa dibatalkan</td></tr>
  <tr><td>Berapa biaya rata-rata?</td><td>Dan bagaimana biaya itu melonjak saat ramai</td></tr>
  <tr><td>Pernah berhenti?</td><td>Riwayat gangguan jaringan</td></tr>
  <tr><td>Untuk apa koinnya?</td><td>Membayar gas dan staking — permintaannya datang dari pemakaian nyata atau hanya spekulasi?</td></tr>
</table>
<div class="callout warn">Edukasi, bukan saran investasi. "Lebih cepat" tidak otomatis berarti "lebih baik" — selalu tanyakan apa yang dikorbankan.</div>
`,
          keyPoints: [
            "Layer 1 adalah blockchain dasar dengan validator, koin, dan aturan finalitas sendiri (Bitcoin, Ethereum, Solana, dll).",
            "L1 lambat karena setiap node memeriksa setiap transaksi — keamanan tanpa pihak tepercaya dibayar dengan kecepatan.",
            "Trilema: desentralisasi, keamanan, dan skalabilitas sulit dicapai sekaligus; tiap L1 memilih pengorbanan berbeda.",
            "Dua jalan membesar: memperbesar L1 sendiri, atau menjaga L1 ramping dan menambah kapasitas di Layer 2.",
            "Nilai L1 dari sebaran validator, waktu final, biaya, riwayat gangguan, dan sumber permintaan koinnya."
          ],
          practice: [
            { type: "number", q: "Satu blok muat 4.000 transaksi dan blok muncul setiap 600 detik. Berapa transaksi per detik kapasitasnya? (1 desimal)", answer: 6.7, tol: 0.1, unit: "tx/detik", hint: "4.000 ÷ 600.", solution: "4.000 ÷ 600 ≈ 6,7 transaksi per detik." },
            { type: "choice", q: "Sebuah L1 sangat cepat dan murah, tapi validatornya hanya puluhan dan semuanya dekat satu perusahaan. Sifat trilema mana yang dikorbankan?", options: ["Skalabilitas", "Desentralisasi", "Kecepatan", "Biaya"], answer: 1, hint: "Siapa yang mengendalikan jaringannya?", solution: "Sedikit validator yang berdekatan = desentralisasi dikorbankan demi kecepatan." }
          ],
          quiz: [
            {
              q: "Apa yang membuat sebuah jaringan disebut Layer 1?",
              options: [
                "Punya validator, koin, dan aturan finalitas sendiri",
                "Selalu lebih cepat daripada semua jaringan lain",
                "Dibangun di atas jaringan lain dan menumpang keamanannya",
                "Hanya bisa dipakai untuk transaksi kecil sehari-hari"
              ],
              answer: 0,
              explain: "L1 adalah blockchain dasarnya sendiri. Yang menumpang keamanan jaringan lain adalah Layer 2."
            },
            {
              q: "Kenapa blockchain Layer 1 umumnya jauh lebih lambat daripada server bank?",
              options: [
                "Ribuan node memeriksa setiap transaksi yang sama",
                "Data transaksinya harus diterjemahkan ke banyak bahasa",
                "Penambang sengaja memperlambat agar harga koin naik",
                "Setiap transaksi wajib disetujui oleh bank sentral"
              ],
              answer: 0,
              explain: "Tidak ada server pusat yang dipercaya, jadi banyak komputer mengerjakan pemeriksaan yang sama."
            },
            {
              q: "Trilema blockchain menyebut tiga sifat yang sulit dicapai sekaligus. Apa saja?",
              options: [
                "Desentralisasi, keamanan, dan skalabilitas",
                "Privasi, kecepatan, dan biaya yang murah",
                "Mining, staking, dan kontrak pintar",
                "Bitcoin, Ethereum, dan jaringan Solana"
              ],
              answer: 0,
              explain: "Biasanya satu dari tiga sifat itu harus dikorbankan untuk mendapat dua lainnya."
            }
          ]
        },
        {
          id: "bc-adv-1",
          title: "Layer 2 — Rollup, Channel & Cara Kerjanya",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Layer 1</b> lambat karena ribuan node memeriksa setiap transaksi, dan <b>trilema</b> membuat setiap L1 harus mengorbankan sesuatu (pelajaran sebelumnya). <b>Hash</b> merangkum data sebesar apa pun menjadi sidik jari pendek. Layer 2 memakai keduanya.
</div>

<h3>Langkah 1 — Idenya: kerjakan di luar, setor ringkasannya</h3>
<p><b>Layer 2 (L2)</b> adalah jaringan yang memproses transaksi <b>di luar</b> L1, lalu menyetor <b>ringkasan</b> dan <b>buktinya</b> ke L1. L1 tidak perlu mengerjakan ulang setiap transaksi; ia cukup menjadi hakim terakhir yang menyimpan ringkasan itu.</p>
<div class="callout">
<b>Analogi bus wisata.</b> Seratus orang yang menyetir mobil masing-masing membayar tol seratus kali. Seratus orang dalam satu bus membayar tol <b>sekali</b>, lalu biayanya dibagi rata. L2 adalah busnya; biaya menyetor ke L1 adalah tolnya.
</div>
<div data-demo="l2-batch"></div>

<h3>Langkah 2 — Tiga cara utama</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Cara memastikan L2 tidak curang</th><th>Contoh</th></tr>
  <tr><td><b>Optimistic rollup</b></td><td>Ringkasan <b>dianggap benar</b>, tapi siapa pun boleh menyanggah dengan bukti kecurangan selama masa sanggah — biasanya sekitar <b>7 hari</b></td><td>Arbitrum, Optimism, Base</td></tr>
  <tr><td><b>ZK rollup</b></td><td>Setiap ringkasan disertai <b>bukti matematis</b> bahwa semua transaksinya sah (zero-knowledge proof — dibahas di pelajaran berikutnya)</td><td>zkSync, Starknet, Scroll, Linea</td></tr>
  <tr><td><b>Payment channel</b></td><td>Dua pihak membuka "rekening bersama" di L1, bertransaksi berkali-kali di luar rantai, lalu hanya saldo akhirnya yang dicatat saat ditutup</td><td>Lightning Network di Bitcoin</td></tr>
</table>
<table class="tbl">
  <tr><th></th><th>Optimistic</th><th>ZK</th></tr>
  <tr><td>Menarik aset langsung ke L1</td><td class="bad-cell">Menunggu masa sanggah, ±7 hari</td><td class="ok-cell">Setelah bukti diverifikasi — jauh lebih cepat</td></tr>
  <tr><td>Kerumitan</td><td>Lebih sederhana dibangun</td><td>Membuat bukti mahal secara komputasi dan rumit</td></tr>
  <tr><td>Asumsi keamanan</td><td>Minimal ada satu pihak jujur yang mengawasi dan menyanggah</td><td>Matematika buktinya benar</td></tr>
</table>
<div class="callout warn">
<b>Sidechain bukan Layer 2 sejati.</b> Sidechain adalah blockchain terpisah dengan validatornya sendiri yang dihubungkan jembatan. Keamanannya bergantung pada validator sidechain itu, <b>bukan</b> pada L1. Kalau validatornya curang, L1 tidak bisa menolong.
</div>

<h3>Langkah 3 — Kenapa biaya L2 turun drastis sejak 2024</h3>
<p>Biaya terbesar sebuah rollup adalah menyimpan data ringkasannya di Ethereum. Upgrade Ethereum pada Maret 2024 (dikenal sebagai Dencun, membawa EIP-4844) menambahkan ruang data khusus yang murah untuk rollup, disebut <b>blob</b>. Biaya transaksi di banyak L2 langsung turun berkali-kali lipat — persis seperti yang terlihat di demo: begitu biaya data per transaksi turun, biaya total ikut turun.</p>

<h3>Langkah 4 — Sisi yang jarang dibahas: sequencer</h3>
<p>Di kebanyakan rollup saat ini, urutan transaksi ditentukan oleh <b>satu operator</b> yang disebut <b>sequencer</b> — biasanya dijalankan tim pembuat L2 itu sendiri.</p>
<table class="tbl">
  <tr><th>Risiko</th><th>Artinya</th></tr>
  <tr><td>Sequencer mati</td><td>L2 berhenti sementara memproses transaksi baru</td></tr>
  <tr><td>Sensor</td><td>Operator bisa menunda transaksi tertentu</td></tr>
  <tr><td>Kunci upgrade</td><td>Tim bisa mengubah kontrak L2; pengguna harus memercayai mereka</td></tr>
</table>
<p>Karena itu L2 sering disebut masih memakai "roda bantu". Situs pemantau seperti L2BEAT menilai setiap L2 berdasarkan seberapa jauh roda bantu itu sudah dilepas.</p>

<h3>Langkah 5 — Yang perlu diperhatikan sebagai pengguna</h3>
<table class="tbl">
  <tr><th>Hal</th><th>Kenapa penting</th></tr>
  <tr><td><b>Pilih jaringan yang benar</b> saat mengirim</td><td>Alamat dompet sama di Ethereum, Arbitrum, Base — tapi mengirim lewat jaringan yang salah bisa membuat aset tersangkut</td></tr>
  <tr><td><b>Jembatan</b> antara L1 dan L2</td><td>Memindahkan aset butuh bridge; pakai jembatan resmi, ingat risiko bridge di modul Terapan</td></tr>
  <tr><td><b>Likuiditas terpecah</b></td><td>Token yang sama bisa punya harga sedikit berbeda di tiap L2</td></tr>
  <tr><td><b>Gas tetap dibayar</b></td><td>Banyak L2 memakai ETH untuk gas — siapkan sedikit ETH di jaringan L2 tersebut</td></tr>
</table>
`,
          keyPoints: [
            "Layer 2 memproses transaksi di luar L1, lalu menyetor ringkasan dan buktinya ke L1 — biaya setor dibagi banyak transaksi.",
            "Optimistic rollup menganggap benar dengan masa sanggah ±7 hari; ZK rollup menyertakan bukti matematis; payment channel (Lightning) mencatat saldo akhir saja.",
            "Sidechain bukan L2 sejati: keamanannya dari validator sendiri, bukan dari L1.",
            "Upgrade Ethereum Maret 2024 menambah ruang data murah (blob) sehingga biaya L2 turun drastis.",
            "Banyak L2 masih bergantung pada satu sequencer; sebagai pengguna, pilih jaringan yang benar dan pakai jembatan resmi."
          ],
          practice: [
            { type: "number", q: "Biaya setor ke L1 Rp60.000 dibagi 300 transaksi, ditambah biaya data Rp50 per transaksi. Berapa rupiah biaya per transaksi?", answer: 250, tol: 1, unit: "Rp", hint: "60.000 ÷ 300 + 50.", solution: "200 + 50 = Rp250 per transaksi." }
          ],
          quiz: [
            {
              q: "Apa fungsi Layer 2?",
              options: [
                "Memproses transaksi murah di luar L1 lalu menyetor ringkasannya ke L1",
                "Menggantikan L1 sepenuhnya dengan jaringan yang jauh lebih cepat",
                "Menyimpan cadangan seluruh data L1 di server terpisah milik tim",
                "Menghubungkan dua blockchain berbeda agar asetnya bisa bertukar"
              ],
              answer: 0,
              explain: "L2 mengerjakan transaksi di luar, L1 tetap menjadi hakim terakhir yang menyimpan ringkasannya."
            },
            {
              q: "Apa itu 'trilemma blockchain'?",
              options: [
                "Sulitnya mencapai keamanan, desentralisasi, dan skalabilitas sekaligus",
                "Perdebatan antara Proof of Work, Proof of Stake, dan Proof of Authority",
                "Pilihan antara privasi, kecepatan, dan biaya transaksi yang rendah",
                "Ketegangan antara penambang, pengembang, dan pemegang token"
              ],
              answer: 0,
              explain: "Layer 2 adalah salah satu cara mengurangi tekanan trilema tanpa membebani L1."
            },
            {
              q: "Kenapa menarik aset dari optimistic rollup langsung ke Ethereum bisa butuh sekitar seminggu?",
              options: [
                "Ada masa sanggah agar kecurangan sempat dibuktikan",
                "Ethereum hanya memproses penarikan sekali seminggu",
                "Tim L2 harus menyetujui setiap penarikan secara manual",
                "Bukti matematisnya butuh seminggu untuk dihitung ulang"
              ],
              answer: 0,
              explain: "Optimistic rollup menganggap ringkasan benar, jadi perlu waktu bagi siapa pun untuk menyanggah."
            }
          ]
        },
        {
          id: "bc-adv-4",
          title: "Zero-Knowledge Proof & Privasi",
          duration: "12 menit",
          content: `
<p><b>Zero-Knowledge Proof (ZKP)</b> adalah salah satu terobosan kriptografi paling menakjubkan: <b>membuktikan sesuatu itu benar TANPA mengungkap datanya</b>.</p>

<div data-diagram="pipeline" data-stages="Pembukti::memegang rahasia|Tantangan acak::diberikan pemeriksa|Jawaban benar::tanpa membuka rahasia|Diulang berkali-kali::peluang menipu menyusut" data-caption="Membuktikan tahu sesuatu, tanpa memberi tahu apa isinya"></div>


<div class="callout">
<b>Analogi "gua Ali Baba":</b> Kamu bisa membuktikan bahwa kamu tahu kata sandi sebuah pintu rahasia — dengan cara masuk lalu keluar dari sisi yang diminta — <b>tanpa pernah menyebutkan kata sandinya</b>. Verifikator yakin kamu tahu, tapi tak belajar apa sandinya.
</div>

<h3>Contoh nyata</h3>
<ul>
  <li>Membuktikan usiamu di atas 18 <b>tanpa</b> menunjukkan tanggal lahir.</li>
  <li>Membuktikan saldo cukup untuk transaksi <b>tanpa</b> mengungkap jumlah saldomu.</li>
</ul>

<h3>Kegunaan di blockchain</h3>
<ul>
  <li><b>Privasi</b> — transaksi terverifikasi tanpa membocorkan detail (mis. Zcash).</li>
  <li><b>Skalabilitas</b> — <b>ZK-Rollup</b> (dari pelajaran Layer 2) memakai ZKP untuk membuktikan ribuan transaksi valid secara ringkas.</li>
</ul>

<div class="callout">
<b>Dampak:</b> ZKP menggabungkan dua hal yang tadinya bertentangan — <b>transparansi verifikasi</b> dan <b>privasi data</b>. Ini teknologi kunci masa depan Web3, dari identitas digital sampai skalabilitas.
</div>

<div data-demo="zkp-cave"></div>
`,
          keyPoints: [
            "Zero-Knowledge Proof membuktikan sesuatu benar tanpa mengungkap datanya.",
            "Contoh: buktikan usia > 18 tanpa menunjukkan tanggal lahir; buktikan saldo cukup tanpa mengungkap jumlahnya.",
            "Di blockchain dipakai untuk privasi (mis. Zcash) & skalabilitas (ZK-Rollup).",
            "Dampak: menyatukan verifikasi transparan dengan privasi data.",
          ],
          quiz: [
            {
              q: "Apa inti Zero-Knowledge Proof?",
              options: [
                "Membuktikan suatu pernyataan benar tanpa mengungkap datanya sendiri",
                "Mengenkripsi data sehingga hanya penerima sah yang bisa membukanya",
                "Menghapus jejak transaksi dari catatan blockchain setelah selesai",
                "Menyimpan data rahasia di luar rantai lalu merujuknya lewat tautan",
              ],
              answer: 0,
              explain:
                "ZKP meyakinkan verifikator tanpa mengungkap informasi rahasianya.",
            },
            {
              q: "Salah satu kegunaan ZKP di blockchain?",
              options: [
                "Privasi transaksi sekaligus peningkatan skala lewat ZK-Rollup",
                "Mempercepat penambangan dengan mengurangi tingkat kesulitannya",
                "Menghubungkan blockchain berbeda tanpa memerlukan jembatan",
                "Menyimpan berkas berukuran besar langsung di dalam blok",
              ],
              answer: 0,
              explain:
                "ZKP memungkinkan transaksi privat & bukti ringkas untuk banyak transaksi (ZK-Rollup).",
            },
          ],
        },
        {
          id: "bc-adv-3",
          title: "DAO — Organisasi Terdesentralisasi",
          duration: "11 menit",
          content: `
<p><b>DAO (Decentralized Autonomous Organization)</b> adalah organisasi yang dikelola oleh <b>komunitas lewat aturan di smart contract</b> — bukan oleh bos atau dewan direksi tunggal.</p>

<div data-diagram="network" data-center="Kas DAO" data-nodes="Anggota A|Anggota B|Anggota C|Anggota D|Anggota E|Anggota F" data-caption="Tidak ada direktur — setiap pemegang token ikut memutuskan penggunaan kas"></div>


<h3>Cara kerja</h3>
<ul>
  <li>Anggota memegang <b>token governance</b> yang memberi <b>hak suara</b>.</li>
  <li>Usulan (mis. "danai proyek X", "ubah biaya") diajukan lalu <b>divoting</b>.</li>
  <li>Jika lolos, smart contract <b>mengeksekusinya otomatis</b> (mis. mencairkan dana dari <b>treasury</b> bersama).</li>
</ul>

<div class="callout">
<b>Analogi:</b> seperti koperasi digital yang aturannya dijalankan kode, transparan, dan lintas negara — semua keputusan & keuangannya tercatat di blockchain untuk dilihat siapa saja.
</div>

<h3>Dampak & risiko</h3>
<ul>
  <li>👍 Transparan, tanpa perantara, keputusan bersama, lintas batas.</li>
  <li>👎 Bisa lambat (voting), rentan bila token terpusat pada sedikit orang (whale), dan <b>bug smart contract bisa fatal</b> (kasus "The DAO" 2016 kehilangan dana besar).</li>
</ul>

<div class="callout warn">
<b>Ingat:</b> keputusan & dana DAO diatur kode yang tak bisa diubah. Audit & tata kelola yang baik sangat penting. Ini edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "DAO = organisasi yang dikelola komunitas lewat aturan di smart contract, bukan bos tunggal.",
            "Anggota bervoting dengan token governance; usulan yang lolos dieksekusi otomatis (mis. dari treasury).",
            "Kelebihan: transparan, tanpa perantara, lintas batas; risiko: lambat, whale, & bug fatal.",
          ],
          quiz: [
            {
              q: "Bagaimana keputusan diambil dalam DAO?",
              options: [
                "Lewat pemungutan suara pemegang token, hasilnya dieksekusi smart contract",
                "Oleh dewan pengurus terpilih yang menjalankan keputusan hariannya",
                "Secara otomatis oleh algoritma tanpa keterlibatan manusia sama sekali",
                "Melalui musyawarah di forum yang hasilnya dicatat pengembang inti",
              ],
              answer: 0,
              explain:
                "DAO memakai tata kelola berbasis token & eksekusi otomatis oleh kontrak.",
            },
            {
              q: "Risiko utama DAO?",
              options: [
                "Bug pada smart contract dan token yang menumpuk di segelintir pihak",
                "Keputusan jadi terlalu lambat karena semua anggota harus hadir",
                "Anggota tidak bisa keluar setelah membeli token tata kelolanya",
                "Biaya operasional yang jauh lebih besar daripada perusahaan biasa",
              ],
              answer: 0,
              explain:
                "Kode yang immutable membuat bug berbahaya; whale bisa mendominasi voting.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 11: SMART CONTRACT PERTAMAMU: SOLIDITY & REMIX ---------------- */
    {
      id: "bc-proyek",
      level: "Proyek",
      title: "Smart Contract Pertamamu: Solidity & Remix",
      summary: "Dari membaca kode Solidity sampai kontrakmu hidup di testnet: Remix IDE, Remix VM, pemilik, uang masuk, require & event, lalu deploy ke Sepolia dan verifikasi di Etherscan.",
      lessons: [
        {
          id: "bc-a-2",
          title: "Mengenal Solidity (Bahasa Smart Contract)",
          duration: "12 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Smart contract</b> = program yang disimpan dan dijalankan di blockchain (modul Ethereum). <b>Mengubah</b> data di blockchain butuh transaksi dan <b>gas</b>; <b>membaca</b> saja gratis. Sekarang saatnya melihat isi sebuah kontrak.
</div>

<p><b>Solidity</b> adalah bahasa pemrograman paling populer untuk menulis smart contract di Ethereum. Sintaksnya mirip JavaScript/C++.</p>

<h3>Contoh smart contract sederhana</h3>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Penyimpanan {
    uint256 private angka;          // variabel disimpan di blockchain

    // Menyimpan nilai baru
    function simpan(uint256 _angka) public {
        angka = _angka;
    }

    // Membaca nilai (gratis, tidak ubah data)
    function baca() public view returns (uint256) {
        return angka;
    }
}</pre>

<h3>Dibaca baris demi baris</h3>
<table class="tbl">
  <tr><th>Baris</th><th>Artinya</th></tr>
  <tr><td><b>// SPDX-License-Identifier: MIT</b></td><td>Keterangan lisensi kode (izin orang lain memakainya)</td></tr>
  <tr><td><b>pragma solidity ^0.8.0;</b></td><td>"Kode ini untuk Solidity versi 0.8 ke atas"</td></tr>
  <tr><td><b>contract Penyimpanan { … }</b></td><td>Satu kontrak bernama Penyimpanan; semua isinya di antara kurung kurawal</td></tr>
  <tr><td><b>uint256 private angka;</b></td><td>Satu "laci" data bernama <i>angka</i>, berisi bilangan bulat tak negatif. Disimpan permanen di blockchain</td></tr>
  <tr><td><b>function simpan(uint256 _angka) public</b></td><td>Tombol yang bisa ditekan siapa pun untuk mengisi laci dengan angka baru → mengubah data → butuh gas</td></tr>
  <tr><td><b>function baca() public view returns (uint256)</b></td><td>Tombol untuk melihat isi laci; <i>view</i> berarti hanya melihat → gratis</td></tr>
</table>
<p><i>Catatan:</i> "private" hanya berarti kontrak lain tidak bisa membaca laci itu lewat kode. Semua data di blockchain publik tetap <b>bisa dilihat siapa pun</b> lewat block explorer — jangan pernah menyimpan rahasia di smart contract.</p>

<h3>Yang perlu dipahami</h3>
<ul>
  <li><b>contract</b> — mirip "class", wadah kode & data.</li>
  <li><b>function ... public</b> — fungsi yang bisa dipanggil dari luar.</li>
  <li><b>view</b> — fungsi yang hanya membaca (tidak mengubah data, jadi gratis/tanpa gas).</li>
  <li>Mengubah data (mis. <code>simpan</code>) butuh transaksi & <b>biaya gas</b>.</li>
</ul>

<div class="callout">
<b>Coba sendiri:</b> di pelajaran berikutnya kamu menjalankan kontrak ini di <b>Remix IDE</b> (remix.ethereum.org) — langsung di browser, tanpa dompet dan tanpa uang.
</div>
`,
          keyPoints: [
            "Solidity = bahasa utama smart contract Ethereum (mirip JS/C++).",
            "'contract' adalah wadah kode; fungsi 'view' hanya membaca (gratis).",
            "Mengubah data di blockchain memerlukan transaksi & biaya gas.",
          ],
          quiz: [
            {
              q: "Fungsi dengan keyword 'view' di Solidity berarti?",
              options: [
                "Hanya membaca data tanpa mengubahnya, sehingga tidak perlu gas",
                "Hanya boleh dipanggil oleh pemilik kontrak yang bersangkutan",
                "Menampilkan antarmuka kontrak kepada pengguna lewat browser",
                "Menyembunyikan isi fungsi dari siapa pun yang membaca kontrak",
              ],
              answer: 0,
              explain:
                "'view' menandai fungsi baca-saja yang tidak mengubah state.",
            },
            {
              q: "Kapan kamu perlu membayar gas?",
              options: [
                "Saat menulis atau mengubah data yang tersimpan di blockchain",
                "Setiap kali membuka aplikasi dompet dan memeriksa saldo",
                "Saat membaca isi sebuah kontrak lewat block explorer",
                "Ketika menerima kiriman token dari pengguna yang lain",
              ],
              answer: 0,
              explain:
                "Operasi tulis mengubah state blockchain sehingga butuh gas.",
            },
          ],
        },
        {
          id: "bc-remix-1",
          title: "Remix IDE dari Nol — Menulis & Menjalankan Kontrak Tanpa Dompet",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Kontrak <b>Penyimpanan</b> di pelajaran sebelumnya punya fungsi <b>simpan</b> (mengubah data → butuh transaksi dan gas) dan <b>baca</b> (<i>view</i> → hanya membaca, gratis). Sekarang kita menjalankannya sungguhan.
</div>

<h3>Apa itu Remix?</h3>
<p><b>Remix IDE</b> adalah tempat menulis, meng-<i>compile</i>, dan menjalankan smart contract langsung di browser, di alamat <b>remix.ethereum.org</b>. IDE (<i>Integrated Development Environment</i>) artinya semua alat ada dalam satu layar: editor kode, penerjemah (compiler), dan tombol untuk men-<i>deploy</i>. Gratis, tanpa instalasi, dan itulah sebabnya hampir semua kelas Solidity dimulai di sini.</p>
<div class="callout">
<b>Paling nyaman di laptop.</b> Remix bisa dibuka di HP, tapi layarnya terlalu sempit untuk bekerja. Kalau sedang memakai HP, pelajari dulu konsepnya lewat simulasi di pelajaran berikutnya.
</div>

<h3>Tur layar Remix</h3>
<table class="tbl">
  <tr><th>Bagian</th><th>Letak</th><th>Gunanya</th></tr>
  <tr><td><b>Icon Panel</b></td><td>Deretan ikon di tepi kiri</td><td>Memilih alat (plugin): File Explorer, Solidity Compiler, Deploy &amp; Run, dan lainnya</td></tr>
  <tr><td><b>Side Panel</b></td><td>Kolom di samping ikon</td><td>Isi alat yang sedang dipilih</td></tr>
  <tr><td><b>Main Panel</b></td><td>Tengah</td><td>Editor kode, satu tab per berkas</td></tr>
  <tr><td><b>Terminal</b></td><td>Bawah</td><td>Catatan setiap transaksi dan hasilnya — tempat pertama yang dilihat saat ada masalah</td></tr>
  <tr><td><b>Top Bar</b> &amp; panel kanan</td><td>Atas &amp; kanan</td><td>Memilih <i>workspace</i>, tema, pengaturan, dan asisten RemixAI</td></tr>
</table>
<div class="callout warn">
<b>Berkasmu tersimpan di browser, bukan di internet.</b> Remix menyimpan berkas di penyimpanan browser (IndexedDB). Menghapus data browser atau memakai mode penyamaran bisa membuat semuanya hilang. Simpan salinan kode penting di tempat lain — misalnya GitHub — atau pakai Remix Desktop.
</div>

<h3>Empat langkah pertama</h3>
<div data-diagram="pipeline" data-stages="Tulis::berkas .sol di File Explorer|Compile::Solidity Compiler, Ctrl+S|Deploy::Deploy &amp; Run di Remix VM|Coba::tekan tombol fungsi, baca terminal" data-caption="Siklus kerja di Remix — diulang setiap kali kode diubah"></div>

<h4>1. Tulis</h4>
<p>Buka <b>File Explorer</b>, klik kanan folder <i>contracts</i> → <b>New File</b>, beri nama <b>Penyimpanan.sol</b>, lalu tempel kode kontrak Penyimpanan dari pelajaran sebelumnya.</p>

<h4>2. Compile</h4>
<p><b>Compile</b> menerjemahkan kode Solidity yang bisa dibaca manusia menjadi <b>bytecode</b> yang dijalankan blockchain, sekaligus menghasilkan <b>ABI</b> — daftar fungsi kontrak beserta bentuknya. Buka <b>Solidity Compiler</b>, pastikan versi di kolom <b>COMPILER</b> cocok dengan baris <i>pragma</i>, lalu tekan tombol Compile atau <b>Ctrl+S</b>. Centang <b>Auto Compile</b> supaya Remix meng-compile sendiri setiap kali kamu mengetik.</p>
<table class="tbl">
  <tr><th>Pesan yang muncul</th><th>Biasanya karena</th></tr>
  <tr><td>ParserError: Expected ';'</td><td>Lupa titik koma di akhir baris</td></tr>
  <tr><td>Source file requires different compiler version</td><td>Versi COMPILER tidak sesuai baris <i>pragma</i></td></tr>
  <tr><td>DeclarationError: Undeclared identifier</td><td>Salah ketik nama variabel atau fungsi</td></tr>
  <tr><td>TypeError</td><td>Jenis data tidak cocok, mis. memasukkan teks ke angka</td></tr>
</table>
<p>Kotak <b>merah</b> berarti error — kontrak belum bisa di-deploy sebelum diperbaiki. Kotak <b>kuning</b> berarti peringatan — kontrak tetap jalan, tapi baca isinya.</p>

<h4>3. Deploy di Remix VM</h4>
<p>Buka <b>Deploy &amp; Run Transactions</b>. Di bagian <b>ENVIRONMENT</b>, pilih <b>Remix VM</b> — blockchain tiruan yang berjalan di dalam browsermu. Remix VM menyediakan <b>10 akun</b> yang masing-masing berisi <b>100 ETH</b> mainan, dan setiap transaksi langsung jalan tanpa perlu persetujuan dompet. Pilih kontrak <i>Penyimpanan</i>, lalu tekan <b>Deploy</b>.</p>

<h4>4. Coba</h4>
<p>Kontrak yang baru dibuat muncul di bagian <b>Deployed Contracts</b>. Klik untuk membuka daftar fungsinya. Warna tombolnya punya arti:</p>
<table class="tbl">
  <tr><th>Warna tombol</th><th>Jenis fungsi</th><th>Yang terjadi saat ditekan</th></tr>
  <tr><td><b>Biru</b></td><td><i>view</i> atau <i>pure</i></td><td>Hanya membaca — tanpa transaksi, tanpa gas</td></tr>
  <tr><td><b>Oranye</b></td><td>Mengubah data</td><td>Membuat transaksi — memakai gas</td></tr>
  <tr><td><b>Merah</b></td><td><i>payable</i></td><td>Membuat transaksi yang bisa ikut mengirim ETH lewat kolom <b>VALUE</b></td></tr>
</table>
<p>Ketik 42 di samping <b>simpan</b>, tekan tombolnya, lalu tekan <b>baca</b>. Di terminal, transaksi yang berhasil ditandai centang hijau, beserta pengirim (<i>from</i>), tujuan (<i>to</i>), dan gas yang terpakai. Klik barisnya untuk melihat detail lengkap.</p>

<h3>Remix VM, testnet, atau mainnet?</h3>
<table class="tbl">
  <tr><th></th><th>Remix VM</th><th>Testnet (mis. Sepolia)</th><th>Mainnet</th></tr>
  <tr><td>Uangnya</td><td>Mainan, di browsermu saja</td><td>Mainan, dari faucet</td><td class="bad-cell">Sungguhan</td></tr>
  <tr><td>Butuh dompet?</td><td class="ok-cell">Tidak</td><td>Ya (MetaMask)</td><td>Ya</td></tr>
  <tr><td>Siapa yang bisa melihat</td><td>Hanya kamu</td><td>Semua orang</td><td>Semua orang</td></tr>
  <tr><td>Dipakai untuk</td><td>Mencoba cepat, bolak-balik</td><td>Uji coba terbuka, demo</td><td>Produk sungguhan</td></tr>
</table>
<p>Kebiasaan yang baik: kontrak baru <b>selalu</b> dicoba dulu di Remix VM sampai semua fungsinya benar, baru dibawa ke testnet.</p>
`,
          keyPoints: [
            "Remix IDE (remix.ethereum.org) = editor, compiler, dan alat deploy smart contract di browser, tanpa instalasi.",
            "Berkas Remix tersimpan di penyimpanan browser; simpan salinan kode penting di tempat lain.",
            "Compile menghasilkan bytecode dan ABI; versi COMPILER harus cocok dengan baris pragma.",
            "Remix VM = blockchain tiruan di browser dengan 10 akun × 100 ETH, transaksi tanpa persetujuan dompet.",
            "Tombol biru = view/pure (gratis), oranye = transaksi, merah = payable (bisa mengirim ETH)."
          ],
          practice: [
            { type: "choice", q: "Remix menampilkan: 'Source file requires different compiler version'. Apa yang perlu kamu lakukan?", options: ["Menambahkan titik koma di akhir baris", "Mengganti versi di kolom COMPILER agar sesuai baris pragma", "Memilih ENVIRONMENT Remix VM", "Menghapus data browser lalu memulai ulang"], answer: 1, hint: "Pesannya menyebut versi compiler.", solution: "Versi compiler harus memenuhi baris pragma, mis. pragma ^0.8.24 butuh compiler 0.8.24 ke atas." },
            { type: "choice", q: "Di Deployed Contracts, tombol 'baca' berwarna biru. Apa artinya?", options: ["Fungsi itu mengirim ETH", "Fungsi itu hanya membaca, tanpa transaksi dan gas", "Fungsi itu hanya untuk pemilik", "Fungsi itu gagal di-compile"], answer: 1, hint: "Ingat arti view.", solution: "Biru = view atau pure: dijalankan sebagai panggilan baca, bukan transaksi." }
          ],
          quiz: [
            {
              q: "Apa keuntungan utama mencoba kontrak di Remix VM sebelum testnet?",
              options: [
                "Cepat dan gratis dicoba berulang tanpa dompet",
                "Kontraknya langsung bisa dipakai orang lain",
                "Kontrak di Remix VM otomatis diaudit Remix",
                "Hasilnya otomatis tercatat di blockchain asli"
              ],
              answer: 0,
              explain: "Remix VM berjalan di browsermu dengan ETH mainan, jadi kesalahan bisa diulang tanpa biaya dan tanpa dompet."
            },
            {
              q: "Di mana Remix menyimpan berkas kodemu secara bawaan?",
              options: [
                "Di penyimpanan browser pada perangkatmu",
                "Di server Ethereum Foundation secara permanen",
                "Di blockchain, bersama kontrak yang di-deploy",
                "Di akun MetaMask yang sedang terhubung"
              ],
              answer: 0,
              explain: "Berkas ada di IndexedDB browser; menghapus data browser bisa menghapusnya, jadi buat salinan."
            },
            {
              q: "Tombol fungsi berwarna merah di Remix menandakan fungsi apa?",
              options: [
                "Fungsi payable yang bisa menerima ETH",
                "Fungsi yang gagal saat terakhir dipanggil",
                "Fungsi yang hanya boleh dipanggil pemilik",
                "Fungsi view yang membaca data tanpa gas"
              ],
              answer: 0,
              explain: "Merah = payable: transaksinya bisa membawa ETH dari kolom VALUE."
            }
          ]
        },
        {
          id: "bc-remix-2",
          title: "Solidity Praktis di Remix — Pemilik, Uang Masuk, Syarat & Event",
          duration: "17 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Di Remix VM ada <b>10 akun</b> berisi 100 ETH mainan, dipilih lewat kolom <b>ACCOUNT</b>. Tombol <b>biru</b> hanya membaca, <b>oranye</b> membuat transaksi, <b>merah</b> membuat transaksi yang bisa membawa ETH lewat kolom <b>VALUE</b>.
</div>

<p>Kontrak Penyimpanan bisa diubah siapa saja dan tidak pernah memegang uang. Kontrak sungguhan hampir selalu perlu tiga hal lagi: <b>siapa pemiliknya</b>, <b>bisa menerima uang</b>, dan <b>syarat</b> yang menolak permintaan yang tidak sah. Kita buat celengan bersama: siapa pun boleh menyetor, hanya pemilik yang boleh menarik.</p>

<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Celengan {
    address public pemilik;                       // yang boleh menarik
    mapping(address => uint256) public setoran;   // catatan: alamat → total setoran

    event Setor(address dari, uint256 jumlah);    // pengumuman yang tercatat di log
    event Tarik(uint256 jumlah);

    constructor() {
        pemilik = msg.sender;                     // yang men-deploy menjadi pemilik
    }

    function setor() public payable {
        require(msg.value > 0, "Setoran harus lebih dari 0");
        setoran[msg.sender] += msg.value;
        emit Setor(msg.sender, msg.value);
    }

    function tarik(uint256 jumlah) public {
        require(msg.sender == pemilik, "Hanya pemilik yang boleh menarik");
        require(jumlah &lt;= address(this).balance, "Saldo celengan kurang");
        (bool berhasil, ) = payable(pemilik).call{value: jumlah}("");
        require(berhasil, "Gagal mengirim ETH");
        emit Tarik(jumlah);
    }

    function saldoKas() public view returns (uint256) {
        return address(this).balance;
    }
}</pre>

<h3>Kosakata baru, satu per satu</h3>
<table class="tbl">
  <tr><th>Kode</th><th>Artinya</th></tr>
  <tr><td><b>address</b></td><td>Jenis data untuk alamat dompet atau kontrak</td></tr>
  <tr><td><b>constructor</b></td><td>Fungsi yang dijalankan <b>sekali saja</b>, saat kontrak di-deploy</td></tr>
  <tr><td><b>msg.sender</b></td><td>Alamat yang mengirim transaksi atau panggilan saat ini</td></tr>
  <tr><td><b>mapping(address => uint256)</b></td><td>Tabel pencarian: masukkan alamat, keluar angka. Alamat yang belum pernah menyetor bernilai 0</td></tr>
  <tr><td><b>payable</b></td><td>Fungsi ini boleh menerima ETH. Tanpa kata ini, transaksi yang membawa ETH akan ditolak</td></tr>
  <tr><td><b>msg.value</b></td><td>Jumlah ETH yang ikut dikirim, dalam satuan <b>wei</b></td></tr>
  <tr><td><b>require(syarat, "pesan")</b></td><td>Kalau syaratnya tidak terpenuhi, transaksi <b>dibatalkan</b> (<i>revert</i>) dengan pesan itu</td></tr>
  <tr><td><b>event</b> &amp; <b>emit</b></td><td>Pengumuman yang tercatat di <i>log</i> transaksi — murah, dan mudah dipantau aplikasi</td></tr>
  <tr><td><b>address(this).balance</b></td><td>Saldo ETH milik kontrak ini sendiri</td></tr>
  <tr><td><b>.call{value: jumlah}("")</b></td><td>Cara yang dianjurkan untuk mengirim ETH. Hasilnya (<i>berhasil</i>) wajib diperiksa</td></tr>
</table>

<h3>Satuan: wei, gwei, ether</h3>
<p>Blockchain tidak mengenal pecahan, jadi ETH dihitung dalam satuan terkecil:</p>
<table class="tbl">
  <tr><th>Satuan</th><th>Nilai</th><th>Biasa dipakai untuk</th></tr>
  <tr><td><b>wei</b></td><td>Satuan terkecil</td><td>Semua angka di dalam kontrak (msg.value, balance)</td></tr>
  <tr><td><b>gwei</b></td><td>1.000.000.000 wei (10<sup>9</sup>)</td><td>Harga gas</td></tr>
  <tr><td><b>ether</b></td><td>1.000.000.000.000.000.000 wei (10<sup>18</sup>)</td><td>Jumlah yang dibaca manusia</td></tr>
</table>
<p>Kolom VALUE di Remix punya pilihan satuan. Mengetik <b>1</b> dengan satuan Ether sama dengan mengetik <b>1000000000000000000</b> dengan satuan Wei. Salah memilih satuan adalah kesalahan pemula yang paling sering.</p>

<h3>Coba sendiri</h3>
<div data-demo="remix-sim"></div>
<p>Lakukan berurutan, dan perhatikan terminal setiap kali:</p>
<ol>
  <li>Dengan <b>Akun 1</b>, setor 1 ETH. Lalu tekan <b>saldoKas</b>.</li>
  <li>Ganti ke <b>Akun 2</b>, setor 2 ETH. Tekan <b>setoran</b> untuk Akun 2.</li>
  <li>Masih dengan Akun 2, coba <b>tarik</b> 0,5. Transaksinya gagal — kenapa?</li>
  <li>Kembali ke Akun 1, tarik 0,5. Kali ini berhasil.</li>
  <li>Setor dengan VALUE <b>0</b>. Baca pesan revert-nya.</li>
</ol>

<h3>Revert: dibatalkan, tapi tetap bayar</h3>
<p>Saat <i>require</i> gagal, <b>semua</b> perubahan dalam transaksi itu dibatalkan — seolah tidak pernah terjadi. Tapi gas yang sudah terpakai sampai titik gagal <b>tetap dibayar</b>, karena para validator sudah bekerja menjalankannya. Di mainnet, kesalahan ini memakan uang sungguhan. Itulah satu lagi alasan mencoba semua kemungkinan gagal di Remix VM lebih dulu.</p>
<div class="callout warn">
<b>Kenapa tidak memakai .transfer()?</b> Banyak tutorial lama memakai <i>payable(x).transfer(jumlah)</i>. Cara itu hanya meneruskan sedikit sekali gas, sehingga bisa gagal saat penerimanya dompet berbentuk smart contract. Cara yang dianjurkan sekarang adalah <i>.call</i> lalu memeriksa hasilnya — seperti di kontrak di atas. Mengirim uang ke luar juga sebaiknya dilakukan <b>setelah</b> semua pemeriksaan dan pencatatan selesai; urutan yang salah membuka celah serangan <i>reentrancy</i> (dibahas di pelajaran keamanan).
</div>
`,
          keyPoints: [
            "constructor berjalan sekali saat deploy; pemilik = msg.sender saat itu.",
            "payable membuat fungsi bisa menerima ETH; jumlahnya ada di msg.value dalam satuan wei.",
            "require membatalkan seluruh transaksi bila syaratnya gagal — tapi gas yang terpakai tetap dibayar.",
            "1 ether = 10¹⁸ wei; 1 gwei = 10⁹ wei. Salah satuan di kolom VALUE adalah kesalahan pemula paling umum.",
            "event/emit mencatat pengumuman di log; kirim ETH dengan .call lalu periksa hasilnya."
          ],
          practice: [
            { type: "number", q: "Berapa gwei dalam 0,25 ETH?", answer: 250000000, tol: 1, unit: "gwei", hint: "1 ETH = 1.000.000.000 gwei.", solution: "0,25 × 1.000.000.000 = 250.000.000 gwei." },
            { type: "number", q: "Sebuah transaksi memakai 45.900 gas dengan harga gas 2 gwei. Berapa gwei biayanya?", answer: 91800, tol: 1, unit: "gwei", hint: "Gas terpakai × harga gas.", solution: "45.900 × 2 = 91.800 gwei = 0,0000918 ETH." },
            { type: "choice", q: "Akun 2 memanggil tarik(1) pada Celengan milik Akun 1. Apa yang terjadi?", options: ["Berhasil, karena Akun 2 pernah menyetor", "Revert dengan pesan 'Hanya pemilik yang boleh menarik'", "Berhasil, tapi ETH dikirim ke Akun 1", "Tidak terjadi apa pun dan tidak ada gas terpakai"], answer: 1, hint: "Lihat require pertama di fungsi tarik.", solution: "msg.sender (Akun 2) ≠ pemilik (Akun 1), jadi require gagal dan transaksi dibatalkan. Gas yang terpakai tetap dibayar." }
          ],
          quiz: [
            {
              q: "Siapa yang menjadi pemilik Celengan?",
              options: [
                "Alamat yang mengirim transaksi deploy",
                "Alamat yang menyetor paling banyak",
                "Alamat pertama yang memanggil tarik",
                "Pembuat Remix yang meng-compile kode"
              ],
              answer: 0,
              explain: "constructor berjalan sekali saat deploy dan menyimpan msg.sender saat itu sebagai pemilik."
            },
            {
              q: "Apa yang terjadi bila require di tengah fungsi gagal?",
              options: [
                "Semua perubahan dibatalkan, tapi gas terpakai tetap dibayar",
                "Perubahan sebelum require tetap tersimpan di blockchain",
                "Transaksi dibatalkan dan seluruh gasnya dikembalikan",
                "Kontrak berhenti total dan tidak bisa dipakai lagi"
              ],
              answer: 0,
              explain: "Revert membatalkan seluruh transaksi, tapi pekerjaan yang sudah dijalankan tetap harus dibayar."
            },
            {
              q: "Kamu ingin menyetor 1 ETH, tapi mengetik 1 dengan satuan Wei. Apa yang terjadi?",
              options: [
                "Yang terkirim hanya 1 wei, nyaris nol",
                "Remix otomatis mengubahnya menjadi 1 ETH",
                "Transaksi pasti gagal karena salah satuan",
                "Yang terkirim 1 gwei, seharga 1 ETH"
              ],
              answer: 0,
              explain: "1 ETH = 10¹⁸ wei. Kolom VALUE mengikuti satuan yang dipilih, tanpa menebak maksudmu."
            },
            {
              q: "Kenapa fungsi setor diberi kata payable?",
              options: [
                "Agar transaksinya boleh membawa ETH",
                "Agar fungsinya hanya bisa dipanggil pemilik",
                "Agar fungsinya gratis tanpa biaya gas",
                "Agar setoran tercatat di dalam event"
              ],
              answer: 0,
              explain: "Tanpa payable, transaksi yang membawa ETH ke fungsi itu akan ditolak."
            }
          ]
        },
        {
          id: "bc-pro-1",
          title: "Setup Dompet & Jaringan Uji (Testnet)",
          duration: "11 menit",
          content: `
<p>Sebelum menyentuh uang sungguhan, semua developer Web3 berlatih di <b>testnet</b> — jaringan uji coba yang gratis dan tanpa risiko.</p>

<div data-diagram="pipeline" data-stages="Pasang MetaMask::ekstensi di browser|Simpan seed phrase::tulis di kertas, offline|Pilih jaringan uji::Sepolia testnet|Minta ETH uji::gratis dari faucet" data-caption="Empat langkah sebelum menyentuh uang sungguhan"></div>


<h3>Langkah-langkah</h3>
<ol>
  <li><b>Pasang MetaMask</b> — ekstensi dompet di browser (metamask.io). Ini "dompet + tombol login" Web3-mu.</li>
  <li><b>Buat dompet baru</b> — MetaMask memberi <b>seed phrase</b> (12 kata).</li>
  <li><b>Pindah ke testnet</b> — di MetaMask pilih jaringan uji seperti <b>Sepolia</b> (Ethereum testnet).</li>
  <li><b>Ambil ETH gratis</b> — buka sebuah <b>faucet</b> testnet, tempel alamatmu, dapat ETH uji untuk membayar gas.</li>
  <li><b>Hubungkan ke dApp</b> — klik "Connect Wallet" di aplikasi Web3; setujui di MetaMask.</li>
</ol>

<div class="callout warn">
<b>Ingat pelajaran keamanan:</b> simpan <b>seed phrase</b> secara offline, JANGAN difoto/diketik di situs mana pun. Walau ini testnet, biasakan kebiasaan aman sejak awal. Lihat juga pelajaran "Wallet, Kunci, & Alamat".
</div>

<div class="callout">
<b>Kenapa testnet?</b> Koinnya tidak bernilai, jadi kamu bebas bereksperimen, gagal, dan mengulang tanpa kehilangan uang sungguhan — persis seperti mode latihan.
</div>
`,
          keyPoints: [
            "Testnet = jaringan uji gratis untuk berlatih tanpa risiko uang sungguhan.",
            "MetaMask berperan sebagai dompet sekaligus tombol login Web3.",
            "Faucet memberi ETH uji gratis untuk membayar gas di testnet.",
            "Tetap jaga seed phrase offline meski sedang di testnet.",
          ],
          quiz: [
            {
              q: "Apa fungsi 'faucet' di testnet?",
              options: [
                "Membagikan koin uji gratis agar bisa membayar gas saat berlatih",
                "Menyalurkan koin asli dari mainnet ke jaringan uji coba",
                "Menguji kecepatan jaringan sebelum kontrak benar-benar dipakai",
                "Menghapus transaksi gagal agar tidak memenuhi jaringan uji",
              ],
              answer: 0,
              explain:
                "Faucet membagikan koin testnet gratis agar developer bisa menguji transaksi.",
            },
            {
              q: "Mengapa berlatih di testnet sebelum mainnet?",
              options: [
                "Karena koinnya tak bernilai, jadi kesalahan tidak merugikan uang nyata",
                "Karena kontrak di testnet otomatis dipindahkan ke mainnet bila berhasil",
                "Karena testnet berjalan lebih lambat sehingga kesalahan mudah terlihat",
                "Karena hanya di mainnet kontrak bisa diperbaiki setelah dipasang",
              ],
              answer: 0,
              explain:
                "Testnet memungkinkan uji coba aman tanpa risiko finansial.",
            },
          ],
        },
        {
          id: "bc-pro-2",
          title: "Deploy ke Testnet Sepolia dari Remix & Verifikasi Kontrak",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Kontrak <b>Celengan</b> sudah kamu coba di Remix VM — hanya kamu yang bisa melihatnya, dan ia hilang bila data browser dihapus. Di pelajaran sebelumnya kamu juga sudah menyiapkan <b>MetaMask</b> di jaringan uji <b>Sepolia</b> dan mengambil ETH uji dari <b>faucet</b>.
</div>

<p>Sekarang Celengan dipindahkan ke blockchain sungguhan yang terbuka: <b>testnet Sepolia</b>. Setelah ini, siapa pun di dunia bisa melihat dan memanggil kontrakmu — tetap tanpa uang sungguhan.</p>

<h3>Langkah deploy</h3>
<ol>
  <li><b>Siapkan MetaMask.</b> Buka, buka kuncinya, pastikan jaringan yang aktif adalah <b>Sepolia</b> dan ada sedikit ETH uji.</li>
  <li><b>Hubungkan Remix ke dompet.</b> Di <b>Deploy &amp; Run</b>, ubah <b>ENVIRONMENT</b> dari Remix VM menjadi <b>Browser Extension</b>, lalu pilih MetaMask. Di Remix versi lama pilihan ini bernama <i>Injected Provider - MetaMask</i>. Setujui permintaan sambungan di MetaMask.</li>
  <li><b>Periksa kolom ACCOUNT.</b> Kini yang tampil alamat dompetmu sendiri beserta saldo Sepolia-nya, bukan akun mainan Remix VM.</li>
  <li><b>Deploy.</b> Pilih kontrak Celengan, tekan <b>Deploy</b>. MetaMask muncul menampilkan perkiraan biaya gas. Periksa jaringannya sekali lagi, lalu <b>Confirm</b>.</li>
  <li><b>Tunggu satu blok.</b> Sekitar belasan detik kemudian, terminal Remix menampilkan transaksi yang berhasil beserta tautan ke block explorer. Kontrakmu muncul di <b>Deployed Contracts</b>.</li>
</ol>
<div class="callout warn">
<b>Remix men-deploy ke jaringan apa pun yang sedang aktif di MetaMask.</b> Kalau dompetmu sedang di mainnet, kontrak ter-deploy ke mainnet dengan ETH sungguhan. Biasakan memakai <b>dompet khusus developer</b> yang terpisah dari dompet simpanan, dan selalu baca nama jaringan di jendela konfirmasi.
</div>

<h3>Melihat kontrakmu di block explorer</h3>
<p>Buka <b>sepolia.etherscan.io</b> dan tempel alamat kontrakmu. Kamu akan melihat transaksi <i>Contract Creation</i>, saldo kontrak, dan setiap transaksi setor atau tarik berikutnya — persis yang kamu pelajari di pelajaran Mengintip Isi Blockchain.</p>
<p>Tapi tab <b>Contract</b> masih menampilkan deretan bytecode yang tidak bisa dibaca. Orang lain tidak tahu apa isi kontrakmu — dan tidak punya alasan untuk memercayainya.</p>

<h3>Verifikasi: membuka kode sumber ke publik</h3>
<p><b>Verifikasi</b> artinya mengunggah kode sumber Solidity ke block explorer, yang kemudian meng-compile ulang kode itu dan memeriksa bahwa hasilnya <b>persis sama</b> dengan bytecode di blockchain. Setelah terverifikasi, kode bisa dibaca siapa pun, dan tab <b>Read Contract</b> serta <b>Write Contract</b> muncul untuk memanggil fungsi langsung dari Etherscan.</p>
<table class="tbl">
  <tr><th>Cara</th><th>Yang dibutuhkan</th></tr>
  <tr><td>Saklar verifikasi saat deploy di Remix</td><td>API key Etherscan yang diisi di Settings Remix</td></tr>
  <tr><td>Plugin <b>Contract Verification</b> di Remix</td><td>Alamat kontrak dan API key</td></tr>
  <tr><td>Manual di Etherscan (<i>Verify &amp; Publish</i>)</td><td>Kode sumber, versi compiler yang <b>sama persis</b>, pengaturan optimasi yang sama, dan jenis lisensi</td></tr>
</table>

<h3>Memakai kontrak yang sudah ada</h3>
<p>Besok kamu membuka Remix lagi, dan daftar Deployed Contracts kosong. Kontraknya tidak hilang — ia ada di blockchain. Buka berkas Celengan.sol, compile, lalu tempel alamat kontraknya dan tekan <b>Add Contract</b> (di Remix lama: <i>At Address</i>). Tidak ada deploy ulang dan tidak ada biaya.</p>

<h3>Masalah yang sering muncul</h3>
<table class="tbl">
  <tr><th>Gejala</th><th>Penyebab umum</th></tr>
  <tr><td>Pilihan MetaMask tidak muncul</td><td>Ekstensi belum terpasang, terkunci, atau diblokir di browser itu</td></tr>
  <tr><td>"insufficient funds"</td><td>ETH uji habis — ambil lagi di faucet</td></tr>
  <tr><td>Transaksi lama tertahan</td><td>Jaringan uji sedang ramai; tunggu atau naikkan biaya gas di MetaMask</td></tr>
  <tr><td>Verifikasi gagal</td><td>Versi compiler atau pengaturan optimasi berbeda dari saat deploy</td></tr>
  <tr><td>Kontrak ter-deploy di jaringan yang salah</td><td>MetaMask sedang di jaringan lain saat menekan Deploy</td></tr>
</table>

<h3>Sebelum mainnet</h3>
<p>Di mainnet, langkahnya sama persis — itulah yang membuatnya berbahaya. Kontrak tidak bisa diubah setelah di-deploy, dan kunci pemilik memegang kendali penuh. Kontrak yang akan memegang uang orang lain perlu tes otomatis yang lengkap, pemeriksaan keamanan, dan idealnya audit — alat untuk itu dibahas di pelajaran-pelajaran berikutnya.</p>
`,
          keyPoints: [
            "ENVIRONMENT 'Browser Extension' (dulu 'Injected Provider - MetaMask') menghubungkan Remix ke dompet dan jaringan yang aktif.",
            "Remix men-deploy ke jaringan yang sedang aktif di MetaMask — selalu periksa nama jaringan sebelum Confirm.",
            "Verifikasi mengunggah kode sumber ke explorer dan memastikan hasil compile-nya sama persis dengan bytecode di blockchain.",
            "Verifikasi gagal biasanya karena versi compiler atau pengaturan optimasi berbeda.",
            "Kontrak yang sudah ada dimuat ulang lewat Add Contract (dulu At Address) tanpa deploy ulang."
          ],
          practice: [
            { type: "number", q: "Deploy memakai 480.000 gas dengan harga gas 2 gwei. Berapa ETH biayanya?", answer: 0.00096, tol: 0.000001, unit: "ETH", hint: "Gas × harga gas = gwei; 1 ETH = 1.000.000.000 gwei.", solution: "480.000 × 2 = 960.000 gwei = 0,00096 ETH." },
            { type: "choice", q: "Kontrak sudah ter-deploy kemarin. Hari ini Deployed Contracts di Remix kosong. Apa yang dilakukan?", options: ["Deploy ulang kontraknya", "Compile, tempel alamat kontrak, lalu Add Contract", "Hapus data browser lalu muat ulang", "Kontraknya hilang, tidak bisa dipakai lagi"], answer: 1, hint: "Kontraknya ada di blockchain, bukan di Remix.", solution: "Add Contract memuat kontrak yang sudah ada dari alamatnya, tanpa biaya." }
          ],
          quiz: [
            {
              q: "Kenapa verifikasi kontrak di Etherscan penting?",
              options: [
                "Orang lain bisa membaca dan memeriksa kode yang benar-benar berjalan",
                "Kontrak yang terverifikasi otomatis bebas dari celah keamanan",
                "Kontrak yang belum diverifikasi tidak bisa menerima transaksi",
                "Verifikasi membuat biaya gas kontrak menjadi lebih murah"
              ],
              answer: 0,
              explain: "Verifikasi membuktikan kode sumber cocok dengan bytecode, tapi tidak menjamin kodenya aman."
            },
            {
              q: "MetaMask sedang aktif di mainnet saat kamu menekan Deploy di Remix. Apa yang terjadi bila kamu menekan Confirm?",
              options: [
                "Kontrak ter-deploy ke mainnet dengan ETH sungguhan",
                "Remix otomatis mengalihkannya ke testnet Sepolia",
                "Transaksi pasti ditolak karena salah jaringan",
                "Kontrak ter-deploy ke Remix VM sebagai cadangan"
              ],
              answer: 0,
              explain: "Remix memakai jaringan apa pun yang aktif di dompet. Selalu baca nama jaringan di jendela konfirmasi."
            },
            {
              q: "Verifikasi manual di Etherscan gagal. Penyebab paling umum?",
              options: [
                "Versi compiler atau pengaturan optimasi berbeda",
                "Kontrak belum menerima setoran ETH sama sekali",
                "Nama berkas .sol berbeda dengan nama kontrak",
                "Alamat dompet pemilik belum diverifikasi KYC"
              ],
              answer: 0,
              explain: "Explorer meng-compile ulang kodenya; hasilnya harus identik dengan bytecode, jadi pengaturannya harus sama."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 12: MEMBANGUN DAPP: FOUNDRY, FRONTEND & KEAMANAN ---------------- */
    {
      id: "bc-dapp",
      level: "DApp",
      title: "Membangun DApp: Foundry, Frontend & Keamanan",
      summary: "Alur kerja developer profesional: tes otomatis & fuzzing dengan Foundry, jaringan lokal Anvil, deploy dengan skrip, OpenZeppelin & pola kontrak, menghubungkan web lewat ethers.js, DApp fullstack + AI, lalu keamanan smart contract & deteksi penipuan.",
      lessons: [
        {
          id: "bc-fdy-1",
          title: "Foundry — Perkakas Developer & Tes Otomatis",
          duration: "17 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Di Remix kamu menguji Celengan dengan menekan tombol satu per satu: setor, ganti akun, coba tarik, lihat revert. Itu cukup untuk lima kemungkinan. Kontrak sungguhan punya ratusan kemungkinan — dan setiap kali kode diubah, semuanya harus diuji ulang.
</div>

<h3>Kenapa perlu alat selain Remix?</h3>
<p>Developer profesional menulis <b>tes otomatis</b>: kode kecil yang memeriksa kontrak dan bisa dijalankan ulang dalam hitungan detik. <b>Foundry</b> adalah salah satu kotak perkakas paling populer untuk itu. Ia berjalan di terminal, dan tesnya ditulis dalam <b>Solidity</b> juga — jadi tidak perlu belajar bahasa lain.</p>
<table class="tbl">
  <tr><th>Alat Foundry</th><th>Kegunaannya</th></tr>
  <tr><td><b>forge</b></td><td>Compile, tes, deploy, dan verifikasi kontrak</td></tr>
  <tr><td><b>cast</b></td><td>Memanggil kontrak, mengirim transaksi, dan membaca data blockchain dari terminal</td></tr>
  <tr><td><b>anvil</b></td><td>Menjalankan blockchain lokal di laptopmu</td></tr>
  <tr><td><b>chisel</b></td><td>Mencoba potongan Solidity secara interaktif</td></tr>
</table>
<table class="tbl">
  <tr><th></th><th>Remix</th><th>Foundry</th><th>Hardhat</th></tr>
  <tr><td>Tempat</td><td>Browser</td><td>Terminal</td><td>Terminal</td></tr>
  <tr><td>Bahasa tes</td><td>Klik manual</td><td>Solidity</td><td>JavaScript/TypeScript</td></tr>
  <tr><td>Cocok untuk</td><td>Belajar, coba cepat</td><td>Tes cepat, fuzzing, proyek serius</td><td>Tim yang sudah memakai JavaScript</td></tr>
</table>

<h3>Memasang Foundry</h3>
<p>Di Windows, Foundry dipasang lewat <b>Git Bash</b> atau <b>WSL</b> — PowerShell dan Command Prompt tidak didukung. Di macOS/Linux cukup terminal biasa.</p>
<pre class="code">curl -L https://getfoundry.sh/install | bash
# tutup lalu buka lagi terminalnya, kemudian:
foundryup
forge --version</pre>

<h3>Proyek pertama</h3>
<pre class="code">forge init celengan
cd celengan
forge build</pre>
<table class="tbl">
  <tr><th>Folder/berkas</th><th>Isinya</th></tr>
  <tr><td><b>src/</b></td><td>Kontrak (contoh bawaan: Counter.sol). Pindahkan Celengan.sol ke sini</td></tr>
  <tr><td><b>test/</b></td><td>Tes, berakhiran <b>.t.sol</b></td></tr>
  <tr><td><b>script/</b></td><td>Skrip deploy, berakhiran <b>.s.sol</b></td></tr>
  <tr><td><b>lib/</b></td><td>Pustaka, termasuk <b>forge-std</b> untuk menulis tes</td></tr>
  <tr><td><b>foundry.toml</b></td><td>Pengaturan proyek</td></tr>
</table>

<h3>Menulis tes untuk Celengan</h3>
<p>Buat berkas <b>test/Celengan.t.sol</b>:</p>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {Celengan} from "../src/Celengan.sol";

contract CelenganTest is Test {
    Celengan celengan;
    address budi = makeAddr("budi");          // alamat palsu untuk tes

    function setUp() public {                 // dijalankan sebelum SETIAP tes
        celengan = new Celengan();            // pemiliknya: kontrak tes ini
        vm.deal(budi, 10 ether);              // beri Budi 10 ETH mainan
    }

    function test_SetorMenambahSaldo() public {
        vm.prank(budi);                       // panggilan berikutnya dikirim oleh Budi
        celengan.setor{value: 1 ether}();
        assertEq(celengan.saldoKas(), 1 ether);
        assertEq(celengan.setoran(budi), 1 ether);
    }

    function test_BukanPemilikTidakBisaTarik() public {
        vm.prank(budi);
        vm.expectRevert("Hanya pemilik yang boleh menarik");
        celengan.tarik(1);
    }

    function testFuzz_Setor(uint96 jumlah) public {
        vm.assume(jumlah > 0);                // abaikan tebakan 0
        vm.deal(budi, jumlah);
        vm.prank(budi);
        celengan.setor{value: jumlah}();
        assertEq(celengan.saldoKas(), jumlah);
    }
}</pre>
<table class="tbl">
  <tr><th>Kode</th><th>Artinya</th></tr>
  <tr><td><b>setUp()</b></td><td>Persiapan yang diulang sebelum setiap tes, supaya tiap tes mulai dari keadaan bersih</td></tr>
  <tr><td><b>test_…</b></td><td>Setiap fungsi berawalan <i>test</i> adalah satu tes</td></tr>
  <tr><td><b>assertEq(a, b)</b></td><td>"Pastikan a sama dengan b" — kalau tidak, tes gagal</td></tr>
  <tr><td><b>vm.prank(x)</b></td><td>Panggilan berikutnya seolah dikirim oleh alamat x</td></tr>
  <tr><td><b>vm.deal(x, n)</b></td><td>Isi saldo alamat x sebanyak n</td></tr>
  <tr><td><b>vm.expectRevert("…")</b></td><td>"Panggilan berikutnya HARUS gagal dengan pesan ini"</td></tr>
  <tr><td><b>vm.assume(syarat)</b></td><td>Lewati tebakan acak yang tidak memenuhi syarat</td></tr>
</table>
<p>Perintah <b>vm.…</b> disebut <i>cheatcode</i>: kemampuan khusus yang hanya ada saat tes, seperti menyamar menjadi alamat lain atau mencetak ETH mainan.</p>

<h3>Menjalankan tes</h3>
<pre class="code">forge test</pre>
<p>Keluarannya kira-kira seperti ini (angka gas di komputermu akan berbeda):</p>
<pre class="code">Ran 3 tests for test/Celengan.t.sol:CelenganTest
[PASS] testFuzz_Setor(uint96) (runs: 256, μ: 54210, ~: 54321)
[PASS] test_BukanPemilikTidakBisaTarik() (gas: 13466)
[PASS] test_SetorMenambahSaldo() (gas: 54120)
Suite result: ok. 3 passed; 0 failed; 0 skipped</pre>
<p>Tambahkan <b>-vvvv</b> (<i>forge test -vvvv</i>) untuk melihat jejak lengkap setiap panggilan — sangat membantu saat tes gagal.</p>

<h3>Fuzzing: biarkan komputer mencari kasus aneh</h3>
<p>Tes <b>testFuzz_Setor</b> punya parameter. Foundry mengisinya dengan angka acak dan menjalankannya <b>256 kali</b> secara bawaan — termasuk angka ekstrem yang tidak terpikir olehmu. Kalau satu saja gagal, Foundry menunjukkan angka penyebabnya (<i>counterexample</i>), sehingga bug-nya bisa diulang dan diperbaiki.</p>
<div class="callout">
<b>Tes yang menangkap bug.</b> Coba hapus baris <i>require(msg.sender == pemilik, …)</i> dari Celengan, lalu jalankan <i>forge test</i> lagi. Tes <b>test_BukanPemilikTidakBisaTarik</b> langsung gagal, karena tarikan oleh Budi kini berhasil padahal seharusnya ditolak. Bayangkan bug itu lolos ke mainnet — siapa pun bisa menguras celengan.
</div>
`,
          keyPoints: [
            "Foundry = forge (build, tes, deploy), cast (bicara dengan blockchain), anvil (blockchain lokal), chisel (mencoba Solidity).",
            "Di Windows, pasang lewat Git Bash atau WSL: curl -L https://getfoundry.sh/install | bash, lalu foundryup.",
            "forge init membuat folder src/, test/, script/, lib/; tes berakhiran .t.sol dan ditulis dalam Solidity.",
            "Cheatcode seperti vm.prank, vm.deal, dan vm.expectRevert membantu menguji siapa yang boleh melakukan apa.",
            "Tes berparameter adalah fuzz test: dijalankan 256 kali dengan nilai acak dan menunjukkan counterexample bila gagal."
          ],
          practice: [
            { type: "number", q: "Kamu punya 4 fuzz test dan 6 tes biasa. Dengan pengaturan bawaan, berapa kali total fungsi tes dijalankan oleh forge test?", answer: 1030, tol: 0.5, hint: "Setiap fuzz test dijalankan 256 kali; tes biasa sekali.", solution: "4 × 256 + 6 = 1.024 + 6 = 1.030 kali." },
            { type: "choice", q: "Cheatcode mana yang dipakai untuk memeriksa bahwa panggilan berikutnya HARUS gagal?", options: ["vm.prank", "vm.deal", "vm.expectRevert", "vm.assume"], answer: 2, hint: "Revert = gagal.", solution: "vm.expectRevert membuat tes gagal bila panggilan berikutnya ternyata berhasil." }
          ],
          quiz: [
            {
              q: "Apa keunggulan tes otomatis dibanding menguji dengan klik di Remix?",
              options: [
                "Bisa dijalankan ulang dalam detik setiap kode diubah",
                "Membuat kontrak otomatis lolos audit keamanan",
                "Menghapus kebutuhan untuk mencoba di testnet",
                "Membuat biaya gas di mainnet menjadi gratis"
              ],
              answer: 0,
              explain: "Tes otomatis mengulang ratusan pemeriksaan dalam detik, sehingga perubahan kecil yang merusak langsung ketahuan."
            },
            {
              q: "Apa fungsi vm.prank(budi) di dalam tes Foundry?",
              options: [
                "Membuat panggilan berikutnya seolah dikirim Budi",
                "Memberi Budi saldo ETH mainan untuk tes",
                "Memastikan panggilan Budi berikutnya gagal",
                "Membuat alamat baru bernama Budi di testnet"
              ],
              answer: 0,
              explain: "prank mengganti msg.sender untuk satu panggilan berikutnya; saldo diberi lewat vm.deal."
            },
            {
              q: "Apa yang dilakukan fuzz test?",
              options: [
                "Menjalankan tes berkali-kali dengan nilai masukan acak",
                "Menjalankan tes di mainnet dengan uang sungguhan",
                "Memeriksa ejaan nama fungsi dan variabel kontrak",
                "Mengukur kecepatan internet saat deploy kontrak"
              ],
              answer: 0,
              explain: "Foundry mengisi parameter tes dengan nilai acak (256 kali secara bawaan) untuk mencari kasus yang terlewat."
            }
          ]
        },
        {
          id: "bc-fdy-2",
          title: "Anvil, Cast & Script — Alur Kerja DApp dari Laptop ke Testnet",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>forge build</b> meng-compile, <b>forge test</b> menjalankan tes. Di Remix kamu men-deploy dengan menekan tombol; di Foundry, deploy ditulis sebagai <b>skrip</b> supaya bisa diulang persis sama di jaringan mana pun.
</div>

<h3>Peta alur kerja sebuah DApp</h3>
<div data-diagram="pipeline" data-stages="Kontrak &amp; tes::forge test, fuzz|Jaringan lokal::anvil + cast|Testnet::Sepolia, verifikasi|Frontend::web + dompet pengguna|Audit &amp; mainnet::sebelum uang sungguhan" data-caption="Setiap tahap menyaring kesalahan sebelum menjadi mahal"></div>
<p>Makin ke kanan, kesalahan makin mahal: di tes cuma butuh beberapa detik, di testnet butuh ETH mainan dan waktu, di mainnet bisa berarti uang pengguna hilang permanen.</p>

<h3>1. Anvil: blockchain pribadi di laptop</h3>
<pre class="code">anvil</pre>
<p>Anvil langsung menjalankan blockchain di <b>http://127.0.0.1:8545</b> (chain ID <b>31337</b>), lengkap dengan <b>10 akun</b> berisi <b>10.000 ETH</b> mainan beserta kunci privatnya. Blok dibuat seketika, jadi kamu bisa mencoba seperti di Remix VM — tapi dari terminal dan skrip.</p>
<div class="callout warn">
<b>Kunci privat Anvil diketahui seluruh dunia.</b> Kunci yang dicetak Anvil sama di semua komputer. Jangan pernah memakainya — atau mengirim uang sungguhan ke alamatnya — di jaringan mana pun selain Anvil.
</div>

<h3>2. Skrip deploy</h3>
<p>Buat <b>script/Celengan.s.sol</b>:</p>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Script} from "forge-std/Script.sol";
import {Celengan} from "../src/Celengan.sol";

contract DeployCelengan is Script {
    function run() public {
        vm.startBroadcast();      // transaksi sesudah ini benar-benar dikirim
        new Celengan();
        vm.stopBroadcast();
    }
}</pre>
<p>Jalankan ke Anvil, dengan kunci akun pertama Anvil (buka terminal kedua; Anvil tetap berjalan di terminal pertama):</p>
<pre class="code">forge script script/Celengan.s.sol \\
  --rpc-url http://127.0.0.1:8545 \\
  --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \\
  --broadcast</pre>
<p>Tanpa <b>--broadcast</b>, skrip hanya disimulasikan — berguna untuk memeriksa dulu sebelum mengirim sungguhan. Alamat kontrak yang baru dibuat tercetak di keluaran.</p>

<h3>3. Cast: bicara dengan kontrak dari terminal</h3>
<pre class="code"># membaca (gratis) — ganti ALAMAT dengan alamat kontrakmu
cast call ALAMAT "saldoKas()(uint256)" --rpc-url http://127.0.0.1:8545

# menulis (transaksi) — setor 1 ETH
cast send ALAMAT "setor()" --value 1ether \\
  --rpc-url http://127.0.0.1:8545 --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

# alat bantu satuan
cast to-wei 0.5          # 500000000000000000
cast from-wei 1000000000000000000</pre>
<p>Ini persis tombol biru dan merah di Remix, hanya saja dalam bentuk perintah yang bisa disimpan dan diulang.</p>

<h3>4. Ke testnet dengan aman</h3>
<p>Untuk Sepolia, kunci privat <b>jangan</b> diketik di perintah — perintah tersimpan di riwayat terminal. Simpan kunci dompet khusus developer di <b>keystore</b> terenkripsi:</p>
<pre class="code">cast wallet import dev --interactive   # tempel kunci, lalu buat kata sandi</pre>
<p>Alamat RPC (pintu masuk ke jaringan, dari penyedia seperti Alchemy, Infura, atau RPC publik) dan API key Etherscan disimpan di berkas <b>.env</b>:</p>
<pre class="code">SEPOLIA_RPC_URL=https://...
ETHERSCAN_API_KEY=...</pre>
<pre class="code">source .env
forge script script/Celengan.s.sol \\
  --rpc-url $SEPOLIA_RPC_URL --account dev --broadcast \\
  --verify --etherscan-api-key $ETHERSCAN_API_KEY</pre>
<p><b>--verify</b> sekaligus mengunggah kode sumber ke Etherscan, sehingga orang lain bisa membaca dan memeriksa kontrakmu.</p>
<div class="callout warn">
<b>Masukkan .env ke .gitignore.</b> Berkas .env yang ikut terunggah ke GitHub adalah salah satu cara paling umum kunci dan API key bocor. Ada robot yang memindai GitHub terus-menerus untuk mencarinya.
</div>

<h3>5. Lalu frontend</h3>
<p>Setelah kontrak hidup di testnet, langkah berikutnya adalah halaman web yang memanggilnya lewat dompet pengguna — dibahas di pelajaran berikutnya dengan <b>ethers.js</b>. ABI yang dibutuhkan frontend ada di folder <b>out/</b> hasil <i>forge build</i>.</p>
`,
          keyPoints: [
            "Alur DApp: kontrak & tes → jaringan lokal (Anvil) → testnet → frontend → audit & mainnet; makin ke kanan makin mahal kesalahannya.",
            "anvil menjalankan blockchain lokal di 127.0.0.1:8545 dengan 10 akun × 10.000 ETH; kuncinya diketahui umum.",
            "forge script dengan --broadcast benar-benar mengirim transaksi deploy; tanpa itu hanya simulasi.",
            "cast call membaca, cast send mengirim transaksi; cast to-wei/from-wei mengubah satuan.",
            "Untuk testnet: kunci di keystore (cast wallet import), RPC & API key di .env yang dimasukkan ke .gitignore."
          ],
          practice: [
            { type: "number", q: "Berapa chain ID bawaan jaringan lokal Anvil?", answer: 31337, tol: 0.5, hint: "Angkanya dicetak saat anvil dijalankan.", solution: "Chain ID Anvil adalah 31337." },
            { type: "choice", q: "Kamu menjalankan forge script ke Sepolia tanpa --broadcast. Apa yang terjadi?", options: ["Kontrak langsung ter-deploy ke Sepolia", "Skrip hanya disimulasikan, tidak ada transaksi terkirim", "Kontrak ter-deploy ke Anvil", "Skrip gagal karena flag itu wajib"], answer: 1, hint: "broadcast = menyiarkan transaksi.", solution: "Tanpa --broadcast, forge script hanya menjalankan simulasi." }
          ],
          quiz: [
            {
              q: "Kenapa kunci privat yang dicetak Anvil tidak boleh dipakai di jaringan sungguhan?",
              options: [
                "Kunci itu sama di semua komputer dan diketahui umum",
                "Kunci itu otomatis kedaluwarsa setelah satu jam",
                "Kunci itu hanya bisa menandatangani transaksi kecil",
                "Kunci itu terlalu pendek untuk jaringan Ethereum"
              ],
              answer: 0,
              explain: "Siapa pun yang pernah menjalankan Anvil punya kunci yang sama, jadi dana di alamat itu bisa diambil siapa saja."
            },
            {
              q: "Apa beda cast call dan cast send?",
              options: [
                "call hanya membaca; send mengirim transaksi",
                "call untuk testnet; send khusus mainnet",
                "call mengirim ETH; send mengirim token",
                "call butuh kata sandi; send tidak perlu"
              ],
              answer: 0,
              explain: "Sama seperti tombol biru (baca) dan oranye/merah (transaksi) di Remix."
            },
            {
              q: "Cara paling aman menyimpan kunci dompet developer untuk deploy ke testnet dengan Foundry?",
              options: [
                "Keystore terenkripsi lewat cast wallet import",
                "Diketik langsung di setiap perintah deploy",
                "Ditulis di README proyek agar tidak lupa",
                "Disimpan di .env lalu diunggah ke GitHub"
              ],
              answer: 0,
              explain: "Perintah tersimpan di riwayat terminal dan berkas yang terunggah bisa dipindai robot; keystore terenkripsi dengan kata sandi."
            }
          ]
        },
        {
          id: "bc-dev-1",
          title: "OpenZeppelin & Pola Kontrak Profesional — Token, Izin & Upgrade",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Celengan memakai <b>require(msg.sender == pemilik)</b> untuk membatasi siapa yang boleh menarik, dan diuji dengan <b>forge test</b>. Token (pelajaran Token, NFT &amp; Standar ERC) hanyalah buku saldo di dalam kontrak yang mengikuti standar <b>ERC-20</b>.
</div>

<h3>Jangan menulis ulang yang sudah teruji</h3>
<p>Kode yang memegang uang adalah sasaran serangan paling menarik di dunia. Karena itu developer profesional <b>tidak</b> menulis token, kontrol akses, atau pengaman dari nol. Mereka memakai <b>OpenZeppelin Contracts</b>: pustaka sumber terbuka yang sudah diaudit berkali-kali dan dipakai oleh ribuan proyek. Kode yang sudah diserang banyak orang lalu diperbaiki jauh lebih aman daripada kode baru buatan sendiri.</p>

<h3>Token ERC-20 dalam belasan baris</h3>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract PoinKelas is ERC20, Ownable {
    constructor() ERC20("Poin Kelas", "POIN") Ownable(msg.sender) {
        _mint(msg.sender, 1000 * 10 ** decimals());   // 1.000 POIN untuk pembuat
    }

    function cetak(address ke, uint256 jumlah) public onlyOwner {
        _mint(ke, jumlah);
    }
}</pre>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>is ERC20, Ownable</b></td><td>Mewarisi semua fungsi ERC-20 (transfer, approve, balanceOf, …) dan fitur pemilik</td></tr>
  <tr><td><b>ERC20("Poin Kelas", "POIN")</b></td><td>Nama dan simbol token</td></tr>
  <tr><td><b>Ownable(msg.sender)</b></td><td>Yang men-deploy menjadi pemilik — seperti Celengan, tapi sudah teruji</td></tr>
  <tr><td><b>10 ** decimals()</b></td><td>Token ERC-20 bawaannya punya 18 desimal, persis seperti ETH dan wei</td></tr>
  <tr><td><b>onlyOwner</b></td><td>Pengganti require(msg.sender == pemilik) yang bisa dipakai ulang di banyak fungsi</td></tr>
</table>
<p>Di Remix, baris <i>import</i> itu langsung berfungsi — Remix mengunduh pustakanya otomatis. Di Foundry, pasang dulu dengan <b>forge install OpenZeppelin/openzeppelin-contracts</b>. Kalau ingin titik awal yang lebih cepat lagi, <b>OpenZeppelin Contracts Wizard</b> di situs OpenZeppelin membuatkan kode token lewat centang-centang pilihan.</p>

<h3>approve dan transferFrom: izin yang sering disalahgunakan</h3>
<p>ERC-20 punya dua cara memindahkan token. <b>transfer</b>: pemilik mengirim sendiri. <b>approve</b> lalu <b>transferFrom</b>: pemilik memberi <i>izin</i> (allowance) kepada pihak lain — misalnya kontrak DEX — untuk mengambil token sampai jumlah tertentu. Banyak aplikasi meminta izin <b>tak terbatas</b> supaya pengguna tidak perlu menyetujui lagi. Bila kontrak itu kelak dibobol, atau ternyata situs penipu, semua token jenis itu bisa diambil. Dari sisi pengembang: minta izin secukupnya. Dari sisi pengguna: cabut izin lama yang tidak dipakai.</p>

<h3>Kontrak tidak bisa diubah — kecuali lewat proxy</h3>
<p>Kode kontrak permanen. Untuk memungkinkan perbaikan, sebagian proyek memakai pola <b>proxy</b>: pengguna selalu berinteraksi dengan alamat proxy yang menyimpan data, sedangkan logikanya ada di kontrak lain yang bisa diganti.</p>
<div data-diagram="flow" data-steps="Pengguna|Proxy (alamat tetap, menyimpan data)|Logika v1 → bisa diganti v2" data-caption="Pola proxy: alamat dan data tetap, logika bisa diganti"></div>
<table class="tbl">
  <tr><th>Keuntungan</th><th>Harga yang dibayar</th></tr>
  <tr><td>Bug bisa diperbaiki tanpa memindahkan pengguna</td><td>Pemegang kunci upgrade bisa mengganti logika menjadi apa saja — termasuk yang mencuri dana</td></tr>
  <tr><td>Fitur bisa ditambah</td><td>Lebih rumit: urutan penyimpanan data tidak boleh berubah, dan constructor diganti fungsi <i>initialize</i></td></tr>
</table>
<p>Pola yang umum adalah <b>UUPS</b> dan <b>Transparent Proxy</b>, keduanya tersedia di OpenZeppelin. Saat menilai sebuah proyek, selalu tanyakan: <b>siapa yang memegang kunci upgrade?</b> Kunci itu sebaiknya dipegang dompet multi-tanda-tangan dan dibatasi jeda waktu, bukan satu orang.</p>

<h3>Menghemat gas</h3>
<table class="tbl">
  <tr><th>Kebiasaan</th><th>Kenapa lebih murah</th></tr>
  <tr><td>Simpan sesedikit mungkin di <i>storage</i></td><td>Menulis slot penyimpanan baru adalah salah satu operasi termahal di Ethereum</td></tr>
  <tr><td>Pakai <b>event</b> untuk riwayat</td><td>Log jauh lebih murah daripada menyimpan riwayat di dalam kontrak</td></tr>
  <tr><td><b>constant</b> dan <b>immutable</b></td><td>Nilai yang tidak pernah berubah tidak perlu dibaca dari storage</td></tr>
  <tr><td><b>Custom error</b> menggantikan pesan teks panjang</td><td>Pesan teks ikut disimpan di bytecode; error berbentuk kode lebih ringkas</td></tr>
</table>
<pre class="code">error BukanPemilik();

function tarik(uint256 jumlah) public {
    if (msg.sender != pemilik) revert BukanPemilik();
    // ...
}</pre>
<p>Hemat gas penting, tapi <b>keamanan dan kejelasan selalu didahulukan</b>. Trik penghematan yang membuat kode sulit dibaca justru menyembunyikan bug.</p>
`,
          keyPoints: [
            "Pakai pustaka teruji seperti OpenZeppelin Contracts untuk token, kontrol akses, dan pengaman — jangan menulis dari nol.",
            "Token ERC-20 cukup mewarisi ERC20 dan Ownable; onlyOwner membatasi fungsi untuk pemilik.",
            "approve memberi izin pihak lain mengambil token; izin tak terbatas berbahaya bila kontraknya dibobol atau palsu.",
            "Pola proxy (UUPS, Transparent) memungkinkan upgrade, tapi pemegang kunci upgrade bisa mengganti logika menjadi apa saja.",
            "Hemat gas: storage sesedikit mungkin, event untuk riwayat, constant/immutable, custom error — keamanan tetap nomor satu."
          ],
          practice: [
            { type: "number", q: "Token ERC-20 dengan 18 desimal. Berapa nilai mentah (satuan terkecil) untuk 5 token? Tulis dalam pangkat: 5 × 10 pangkat berapa?", answer: 18, tol: 0.5, hint: "Sama seperti ETH dan wei.", solution: "5 token = 5 × 10¹⁸ satuan terkecil, jadi pangkatnya 18." },
            { type: "choice", q: "Sebuah proyek DeFi memakai proxy yang kunci upgrade-nya dipegang satu dompet biasa milik pendiri. Apa risikonya?", options: ["Tidak ada, proxy membuat kontrak lebih aman", "Pendiri (atau pencuri kuncinya) bisa mengganti logika untuk mengambil dana", "Biaya gas pengguna menjadi dua kali lipat", "Token tidak bisa diperdagangkan di DEX"], answer: 1, hint: "Siapa yang bisa mengganti logikanya?", solution: "Pemegang kunci upgrade bisa mengganti logika menjadi apa saja. Idealnya kunci dipegang multi-tanda-tangan dengan jeda waktu." }
          ],
          quiz: [
            {
              q: "Kenapa developer profesional memakai OpenZeppelin alih-alih menulis token sendiri?",
              options: [
                "Kodenya sudah diaudit dan diuji oleh banyak proyek",
                "Token OpenZeppelin tidak membutuhkan biaya gas",
                "Hanya token OpenZeppelin yang diterima bursa",
                "OpenZeppelin menjamin harga tokennya naik"
              ],
              answer: 0,
              explain: "Kode yang memegang uang paling sering diserang; pustaka yang sudah teruji jauh lebih aman."
            },
            {
              q: "Apa bahaya memberi izin approve tak terbatas ke sebuah kontrak?",
              options: [
                "Semua token jenis itu bisa diambil bila kontraknya jahat",
                "Token akan otomatis terbakar setelah satu bulan",
                "Dompet tidak bisa menerima token baru lagi",
                "Biaya gas setiap transfer menjadi berlipat"
              ],
              answer: 0,
              explain: "transferFrom bisa mengambil sampai batas izin; izin tak terbatas berarti seluruh saldo token itu."
            },
            {
              q: "Apa yang diganti saat kontrak berpola proxy di-upgrade?",
              options: [
                "Kontrak logikanya; alamat dan data tetap",
                "Alamat proxy beserta seluruh datanya",
                "Seluruh blockchain tempat kontrak berada",
                "Kunci privat semua penggunanya"
              ],
              answer: 0,
              explain: "Pengguna tetap memakai alamat proxy yang sama; proxy diarahkan ke kontrak logika baru."
            }
          ]
        },
        {
          id: "bc-pro-3",
          title: "Hubungkan Web ke Smart Contract (ethers.js)",
          duration: "13 menit",
          content: `
<p>Agar pengguna biasa bisa memakai kontrakmu lewat website, kita pakai library <b>ethers.js</b> untuk menjembatani halaman web dengan blockchain.</p>

<div class="callout ingat">
<b>Ingat dulu</b><br>
Kontrak <b>Celengan</b> yang sudah kamu deploy ke Sepolia punya fungsi <b>setor()</b> (payable → transaksi bertanda tangan yang membawa ETH dan memakai gas) dan <b>saldoKas()</b> (view → gratis). Tanda tangan dibuat oleh kunci privat di dompet — kode website tidak pernah boleh melihat kunci itu.
</div>

<h3>Kamus kecil sebelum membaca kode</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th></tr>
  <tr><td><b>npm install ethers</b></td><td>Mengunduh pustaka ethers.js ke proyekmu</td></tr>
  <tr><td><b>Provider</b></td><td>"Jendela baca" ke blockchain — untuk melihat data, tidak bisa menandatangani</td></tr>
  <tr><td><b>Signer</b></td><td>Pihak yang bisa menandatangani transaksi — di sini dompet MetaMask milik pengguna</td></tr>
  <tr><td><b>ABI</b></td><td>Daftar fungsi yang dimiliki kontrak beserta bentuknya, agar kode tahu cara memanggilnya</td></tr>
  <tr><td><b>await</b></td><td>"Tunggu dulu sampai jawabannya datang dari jaringan"</td></tr>
</table>

<pre class="code">npm install ethers</pre>

<h3>1. Hubungkan dompet pengguna</h3>
<pre class="code">import { ethers } from "ethers";

// window.ethereum disuntikkan oleh MetaMask di browser
const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);   // minta izin connect
const signer = await provider.getSigner();          // yang menandatangani transaksi</pre>

<h3>2. Sambungkan ke kontrak</h3>
<pre class="code">// ABI = "daftar menu" fungsi kontrak (dihasilkan saat compile di Remix atau forge build)
const abi = [
  "function setor() payable",
  "function saldoKas() view returns (uint256)"
];
const alamatKontrak = "0x...";   // alamat hasil deploy

const kontrak = new ethers.Contract(alamatKontrak, abi, signer);</pre>

<h3>3. Baca & tulis</h3>
<pre class="code">// Membaca (gratis, instan) — hasilnya dalam wei
const saldo = await kontrak.saldoKas();
console.log("Saldo celengan:", ethers.formatEther(saldo), "ETH");

// Menulis (butuh gas, perlu konfirmasi di MetaMask) — ikut mengirim 0,01 ETH
const tx = await kontrak.setor({ value: ethers.parseEther("0.01") });
await tx.wait();                 // tunggu transaksi dikonfirmasi
console.log("Setoran masuk!");</pre>

<p>Alurnya dalam bahasa sehari-hari: website meminta izin tersambung ke dompet → mengambil <i>signer</i> (dompet pengguna) → membuat "remote" kontrak dari alamat dan ABI-nya → menekan tombol <i>saldoKas</i> (langsung dijawab) atau <i>setor</i> (MetaMask muncul meminta persetujuan untuk ETH yang disetor dan gasnya, lalu kode menunggu sampai transaksi masuk blok).</p>

<div class="callout">
<b>Itulah sebuah DApp!</b> Frontend web biasa + <b>ethers.js</b> + <b>smart contract</b> sebagai backend. <b>ABI</b> memberi tahu kode cara memanggil fungsi; <b>signer</b> menandatangani transaksi tulis.
</div>
`,
          keyPoints: [
            "ethers.js menjembatani website dengan smart contract di blockchain.",
            "window.ethereum (MetaMask) memberi provider & signer untuk koneksi dompet.",
            "ABI adalah 'daftar menu' fungsi kontrak; signer menandatangani transaksi tulis.",
            "Membaca gratis & instan; menulis butuh gas dan konfirmasi pengguna.",
          ],
          quiz: [
            {
              q: "Apa fungsi ABI saat menghubungkan web ke smart contract?",
              options: [
                "Memberi tahu kode daftar fungsi kontrak beserta cara memanggilnya",
                "Menyimpan alamat kontrak agar tak perlu ditulis ulang tiap kali",
                "Mengenkripsi komunikasi antara halaman web dan jaringan blockchain",
                "Menerjemahkan kode Solidity menjadi JavaScript yang bisa dijalankan",
              ],
              answer: 0,
              explain:
                "ABI mendeskripsikan antarmuka fungsi kontrak agar bisa dipanggil dari kode.",
            },
            {
              q: "Operasi mana yang memerlukan gas & konfirmasi pengguna?",
              options: [
                "Menulis atau mengubah data yang tersimpan di dalam kontrak",
                "Membaca nilai variabel publik dari dalam kontrak tersebut",
                "Menghubungkan dompet ke halaman web untuk pertama kalinya",
                "Memeriksa saldo token sebuah alamat lewat block explorer",
              ],
              answer: 0,
              explain:
                "Operasi tulis mengubah state blockchain sehingga butuh transaksi bergas.",
            },
          ],
        },
        {
          id: "bc-dev-3",
          title: "DApp Fullstack + AI — Menyatukan Kontrak, Web, Dompet & Model",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>ethers.js</b> menghubungkan halaman web ke kontrak: <i>provider</i> untuk membaca, <i>signer</i> (dompet pengguna) untuk menandatangani, dan <b>ABI</b> sebagai daftar fungsinya. Dari jalur AI: agen memanggil <b>alat</b>, dan kunci yang memegang uang harus dijaga dengan batas yang ketat.
</div>

<h3>Bagian-bagian sebuah DApp sungguhan</h3>
<table class="tbl">
  <tr><th>Lapisan</th><th>Isinya</th><th>Contoh alat</th></tr>
  <tr><td><b>Smart contract</b></td><td>Aturan dan uang — bagian yang harus dipercaya</td><td>Solidity + Foundry</td></tr>
  <tr><td><b>Frontend</b></td><td>Halaman yang dilihat pengguna</td><td>React / Next.js</td></tr>
  <tr><td><b>Penghubung dompet</b></td><td>Tombol Connect, ganti jaringan, menandatangani</td><td>ethers.js, atau viem + wagmi</td></tr>
  <tr><td><b>Pembacaan &amp; indeks</b></td><td>Mengumpulkan event menjadi data yang mudah dicari, mis. riwayat setoran</td><td>Node RPC, The Graph, Ponder</td></tr>
  <tr><td><b>Backend</b> (bila perlu)</td><td>Data yang tidak perlu di blockchain, kunci API, pemanggilan AI</td><td>Server atau fungsi serverless</td></tr>
</table>
<p>Prinsip yang menentukan pembagian: <b>simpan di blockchain hanya yang perlu dipercaya bersama</b> — uang, kepemilikan, aturan. Sisanya lebih murah dan cepat di server biasa.</p>

<h3>Di mana AI masuk?</h3>
<table class="tbl">
  <tr><th>Pola</th><th>Contoh</th><th>Siapa yang menandatangani</th></tr>
  <tr><td><b>AI menjelaskan</b></td><td>Sebelum pengguna menandatangani, AI menerjemahkan isi transaksi: "Kamu akan memberi izin kontrak X mengambil semua USDC-mu"</td><td>Pengguna</td></tr>
  <tr><td><b>AI menyusun</b></td><td>Pengguna mengetik "setor 0,01 ETH ke celengan kelas"; AI menyusun transaksinya, pengguna memeriksa lalu menyetujui</td><td>Pengguna</td></tr>
  <tr><td><b>AI menganalisis</b></td><td>Ringkasan riwayat, peringatan transaksi janggal, jawaban atas pertanyaan tentang data on-chain</td><td>Tidak ada — hanya membaca</td></tr>
  <tr><td><b>Agen bertindak</b></td><td>Agen dengan dompet sendiri membayar layanan lewat x402</td><td>Agen, dengan batas ketat</td></tr>
</table>
<div data-diagram="pipeline" data-stages="Pengguna mengetik niat::bahasa sehari-hari|Backend + AI::menyusun transaksi|Frontend menampilkan::isi yang mudah dibaca|Dompet pengguna::memeriksa &amp; menandatangani|Kontrak::menjalankan aturan" data-caption="AI menyusun dan menjelaskan; keputusan dan tanda tangan tetap di tangan pengguna"></div>

<h3>Contoh: tombol "Jelaskan transaksi ini"</h3>
<pre class="code">// Di BACKEND — kunci API AI tidak pernah dikirim ke browser
async function jelaskan(tx) {
  const isi = decodeFunctionData({ abi, data: tx.data });   // terjemahkan calldata dengan ABI
  const prompt = "Jelaskan dalam satu kalimat sederhana apa yang terjadi bila " +
    "pengguna menandatangani: fungsi " + isi.functionName +
    ", argumen " + JSON.stringify(isi.args) + ", nilai " + tx.value + " wei. " +
    "Sebutkan risikonya bila ada.";
  return await tanyaModel(prompt);
}</pre>
<p>Perhatikan: data transaksi diterjemahkan dulu dengan <b>ABI</b> oleh kode (pasti benar), baru AI diminta menjelaskannya dalam bahasa manusia. AI tidak diminta menebak isi transaksi dari deretan heksadesimal.</p>

<h3>Aturan keamanan fullstack</h3>
<table class="tbl">
  <tr><th>Jangan</th><th>Lakukan</th></tr>
  <tr><td>Menaruh kunci API AI atau RPC berbayar di kode frontend</td><td>Simpan di backend; frontend memanggil backend-mu</td></tr>
  <tr><td>Memberi AI akses ke kunci privat pengguna</td><td>AI hanya menyusun; pengguna menandatangani di dompetnya</td></tr>
  <tr><td>Menampilkan angka mentah (wei, 6 desimal) apa adanya</td><td>Ubah ke satuan yang dibaca manusia, tampilkan jaringan dan alamat tujuan</td></tr>
  <tr><td>Memercayai teks dari pengguna atau situs lain sebagai perintah</td><td>Waspadai prompt injection: AI tidak boleh bisa memicu transaksi sendiri</td></tr>
</table>

<h3>Latihan: dari Celengan ke DApp</h3>
<ol>
  <li>Kontrak Celengan sudah teruji dengan Foundry dan hidup di Sepolia.</li>
  <li>Buat halaman dengan tombol Connect, kolom setor, dan tampilan saldoKas (pelajaran ethers.js).</li>
  <li>Tampilkan riwayat dari event <b>Setor</b>.</li>
  <li>Tambahkan tombol "Jelaskan" yang memanggil backend untuk menerjemahkan transaksi sebelum ditandatangani.</li>
  <li>Minta tiga temanmu mencobanya tanpa dibantu, dan catat di mana mereka bingung.</li>
</ol>
`,
          keyPoints: [
            "DApp terdiri dari kontrak, frontend, penghubung dompet, pembacaan/indeks data, dan backend bila perlu.",
            "Simpan di blockchain hanya yang perlu dipercaya bersama: uang, kepemilikan, aturan.",
            "Pola AI di DApp: menjelaskan, menyusun, menganalisis, dan agen bertindak dengan batas ketat.",
            "Terjemahkan calldata dengan ABI lewat kode, baru minta AI menjelaskannya dalam bahasa manusia.",
            "Kunci API di backend, kunci privat tetap di dompet pengguna, dan AI tidak boleh memicu transaksi sendiri."
          ],
          practice: [
            { type: "choice", q: "Data mana yang paling tepat disimpan di smart contract?", options: ["Foto profil pengguna", "Riwayat obrolan dengan asisten AI", "Saldo setoran setiap anggota celengan", "Teks deskripsi halaman beranda"], answer: 2, hint: "Mana yang perlu dipercaya bersama dan menyangkut uang?", solution: "Saldo setoran menyangkut uang dan harus bisa diperiksa semua anggota; sisanya cukup di server biasa." },
            { type: "choice", q: "Developer menaruh kunci API model AI di kode JavaScript frontend. Apa masalahnya?", options: ["Tidak ada masalah, kodenya diperkecil", "Siapa pun bisa membuka kode itu dan memakai kuncinya", "Model AI menolak panggilan dari browser", "Transaksi blockchain menjadi lebih lambat"], answer: 1, hint: "Kode frontend dikirim utuh ke browser setiap pengunjung.", solution: "Semua kode frontend bisa dibaca pengunjung; kunci itu akan dicuri dan tagihannya membengkak." }
          ],
          quiz: [
            {
              q: "Dalam pola 'AI menyusun transaksi', siapa yang seharusnya menandatangani?",
              options: [
                "Pengguna, setelah memeriksa isinya",
                "Model AI dengan kunci pengguna",
                "Server backend secara otomatis",
                "Kontrak pintar itu sendiri"
              ],
              answer: 0,
              explain: "AI hanya membantu menyusun dan menjelaskan; keputusan dan tanda tangan tetap milik pengguna."
            },
            {
              q: "Kenapa calldata diterjemahkan dengan ABI lebih dulu sebelum dijelaskan AI?",
              options: [
                "Agar isinya pasti benar, AI hanya menjelaskan",
                "Agar model AI tidak perlu dipanggil sama sekali",
                "Agar biaya gas transaksinya menjadi lebih murah",
                "Agar transaksi bisa dikirim tanpa tanda tangan"
              ],
              answer: 0,
              explain: "Kode menerjemahkan data secara pasti; menebak dari heksadesimal membuka peluang AI mengarang."
            },
            {
              q: "Di mana kunci API layanan AI sebaiknya disimpan dalam DApp?",
              options: [
                "Di backend, tidak pernah dikirim ke browser",
                "Di kode frontend agar respons lebih cepat",
                "Di dalam smart contract agar tidak bisa diubah",
                "Di dompet MetaMask milik setiap pengguna"
              ],
              answer: 0,
              explain: "Kode frontend dan isi kontrak sama-sama bisa dibaca publik."
            }
          ]
        },
        {
          id: "bc-pro-4",
          title: "Use-case Nyata & Keamanan Produksi",
          duration: "11 menit",
          content: `
<p>Di luar harga koin, blockchain dipakai untuk hal-hal nyata:</p>

<div data-diagram="cycle" data-steps="Tulis kontrak|Uji di testnet|Audit keamanan|Rilis ke mainnet|Pantau &amp; tanggapi" data-center="tiap rilis" data-caption="Kontrak yang sudah rilis tidak bisa ditambal — urutan ini tidak boleh dilompati"></div>


<h3>Penggunaan nyata</h3>
<ul>
  <li><b>Pembayaran lintas negara</b> — kirim nilai cepat & murah tanpa bank perantara.</li>
  <li><b>Tokenisasi aset</b> — properti, emas, atau saham direpresentasikan sebagai token.</li>
  <li><b>Rantai pasok</b> — melacak asal barang secara transparan & tak bisa dipalsukan.</li>
  <li><b>DeFi</b> — pinjam, tukar, dan bunga otomatis lewat smart contract.</li>
  <li><b>Tiket & sertifikat (NFT)</b> — bukti kepemilikan/keaslian yang sulit dipalsukan.</li>
  <li><b>Identitas digital</b> — pengguna mengontrol datanya sendiri.</li>
</ul>

<h3>Keamanan produksi</h3>
<ul>
  <li><b>Pakai library teruji</b> — gunakan <b>OpenZeppelin</b> untuk token & pola standar, jangan tulis dari nol.</li>
  <li><b>Audit keamanan</b> — kontrak yang memegang dana wajib diaudit pihak ketiga.</li>
  <li><b>Waspada bug klasik</b> — mis. <i>reentrancy</i> (serangan panggil-ulang) yang menguras dana.</li>
  <li><b>Optimasi gas</b> — kode efisien menekan biaya pengguna.</li>
  <li><b>Uji di testnet dulu</b> — selalu, sebelum mainnet.</li>
  <li><b>Jangan hardcode private key</b> di kode — pakai environment variable & dompet aman.</li>
</ul>

<div class="callout warn">
<b>Pengingat:</b> materi ini edukasi, bukan saran finansial. Bangun & uji di testnet, dan dahulukan keamanan.
</div>
`,
          keyPoints: [
            "Blockchain dipakai untuk pembayaran, tokenisasi aset, rantai pasok, DeFi, NFT, dan identitas.",
            "Pakai library teruji (OpenZeppelin) dan audit kontrak yang memegang dana.",
            "Waspadai bug klasik seperti reentrancy; optimasi gas; selalu uji di testnet dulu.",
            "Jangan pernah hardcode private key di kode.",
          ],
          quiz: [
            {
              q: "Praktik aman saat membangun smart contract produksi?",
              options: [
                "Memakai pustaka teruji seperti OpenZeppelin lalu mengaudit kontraknya",
                "Menulis seluruh kode sendiri agar tidak bergantung pada pihak lain",
                "Menyimpan kunci privat di dalam kontrak agar mudah diakses saat perlu",
                "Menunda audit sampai kontrak dipakai cukup banyak pengguna nyata",
              ],
              answer: 0,
              explain:
                "Library teruji + audit + uji testnet adalah fondasi keamanan produksi.",
            },
            {
              q: "Manakah contoh penggunaan blockchain di luar spekulasi harga?",
              options: [
                "Melacak asal barang di rantai pasok secara terbuka dan bisa diperiksa",
                "Mempercepat koneksi internet dengan membagi beban ke banyak komputer",
                "Menyimpan berkas video berukuran besar dengan biaya yang lebih murah",
                "Menjalankan model kecerdasan buatan langsung di dalam jaringan",
              ],
              answer: 0,
              explain:
                "Pelacakan rantai pasok yang transparan & anti-palsu adalah use-case nyata blockchain.",
            },
          ],
        },
        {
          id: "bc-dev-2",
          title: "Keamanan Smart Contract & Deteksi Penipuan — Reentrancy, Audit & Pola Jahat",
          duration: "17 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Di Celengan, uang dikirim dengan <b>.call</b> setelah semua pemeriksaan selesai, dan pelajaran Remix sempat menyebut serangan bernama <i>reentrancy</i>. Pelajaran Foundry menunjukkan bagaimana tes dan fuzzing menangkap bug sebelum sampai ke mainnet.
</div>

<h3>Reentrancy: masuk lagi sebelum pintu dikunci</h3>
<p>Saat kontrak mengirim ETH ke kontrak lain, penerima boleh menjalankan kodenya sendiri (fungsi <i>receive</i>). Kalau pengirim belum mencatat bahwa uangnya sudah dikirim, penerima bisa memanggil fungsi penarikan <b>lagi</b> — berulang-ulang — sebelum saldonya dinolkan. Itulah yang terjadi pada <b>The DAO</b> tahun 2016: sekitar 3,6 juta ETH terkuras, dan komunitas Ethereum akhirnya memutuskan <i>hard fork</i> untuk mengembalikannya — asal mula pemisahan Ethereum dan Ethereum Classic.</p>
<div data-demo="reentrancy-sim"></div>
<p>Perbaikannya disebut pola <b>Checks–Effects–Interactions</b>: periksa syarat dulu, <b>catat perubahan</b>, baru <b>berinteraksi</b> dengan pihak luar. Sebagai lapisan tambahan, OpenZeppelin menyediakan pengaman <b>ReentrancyGuard</b> (modifier <i>nonReentrant</i>) yang menolak pemanggilan ulang di tengah jalan.</p>

<h3>Celah lain yang sering muncul</h3>
<table class="tbl">
  <tr><th>Celah</th><th>Contoh</th><th>Pencegahan</th></tr>
  <tr><td><b>Kontrol akses</b></td><td>Fungsi cetak token atau tarik dana lupa diberi onlyOwner</td><td>Tes "bukan pemilik tidak boleh…" untuk setiap fungsi penting</td></tr>
  <tr><td><b>Manipulasi oracle</b></td><td>Harga diambil dari satu kolam DEX kecil yang mudah digerakkan dengan pinjaman kilat</td><td>Oracle terdesentralisasi, harga rata-rata waktu</td></tr>
  <tr><td><b>Kunci bocor</b></td><td>Kunci pemilik atau bridge dicuri — mis. Ronin Bridge 2022, sekitar US$625 juta</td><td>Multi-tanda-tangan, perangkat terpisah, batas penarikan</td></tr>
  <tr><td><b>Tanda tangan buta</b></td><td>Bybit 2025, sekitar US$1,5 miliar: penanda tangan menyetujui transaksi yang tampilannya sudah dimanipulasi</td><td>Periksa isi transaksi di perangkat terpisah sebelum menandatangani</td></tr>
</table>
<p>Perhatikan: dua kerugian terbesar di tabel itu bukan karena bug di kode Solidity, melainkan karena <b>kunci dan proses manusia</b>. Keamanan bukan hanya soal kode.</p>

<h3>Alat pemeriksa</h3>
<table class="tbl">
  <tr><th>Alat</th><th>Caranya</th><th>Menangkap</th></tr>
  <tr><td><b>Tes unit &amp; fuzz</b> (Foundry)</td><td>Menjalankan kontrak dengan masukan pilihan dan acak</td><td>Perilaku yang tidak sesuai harapan</td></tr>
  <tr><td><b>Tes invarian</b> (Foundry, fungsi <i>invariant_…</i>)</td><td>Memastikan sesuatu selalu benar setelah urutan panggilan acak, mis. "kas = jumlah semua setoran"</td><td>Bug yang muncul dari kombinasi langkah</td></tr>
  <tr><td><b>Analisis statis</b> (Slither, Aderyn)</td><td>Membaca kode tanpa menjalankannya: <i>slither .</i></td><td>Pola berbahaya yang sudah dikenal, termasuk reentrancy</td></tr>
  <tr><td><b>Audit &amp; bug bounty</b></td><td>Ahli manusia membaca kode; peretas etis dibayar bila menemukan celah</td><td>Kesalahan logika bisnis yang tidak terlihat alat</td></tr>
</table>
<p>Audit bukan jaminan. Banyak protokol yang sudah diaudit tetap dibobol, karena kode berubah setelah audit atau celahnya ada di luar cakupan audit.</p>

<h3>Mendeteksi penipuan dari data on-chain</h3>
<table class="tbl">
  <tr><th>Pola penipuan</th><th>Tandanya</th></tr>
  <tr><td><b>Phishing izin</b> (approval / permit)</td><td>Situs palsu meminta approve tak terbatas atau tanda tangan permit; setelah disetujui, token dikuras</td></tr>
  <tr><td><b>Address poisoning</b></td><td>Transfer bernilai 0 dari alamat yang awal dan akhirnya mirip alamat langgananmu, berharap kamu menyalin alamat palsu dari riwayat</td></tr>
  <tr><td><b>Token honeypot</b></td><td>Bisa dibeli tapi tidak bisa dijual — kodenya memblokir penjualan selain oleh pembuat</td></tr>
  <tr><td><b>Rug pull</b></td><td>Pembuat menarik seluruh likuiditas atau mencetak token baru dalam jumlah besar lalu menjualnya</td></tr>
</table>
<p>AI membantu mendeteksi pola ini dalam skala besar: model <b>deteksi anomali</b> seperti Isolation Forest (<a href="#/lesson/ai-alg-5">Isolation Forest</a>) menandai alamat yang perilakunya janggal, dan analisis jaringan menemukan kumpulan alamat yang dikendalikan pihak yang sama. Hasilnya tetap berupa <b>dugaan</b> yang harus diperiksa manusia — label yang salah bisa merugikan orang yang tidak bersalah.</p>
`,
          keyPoints: [
            "Reentrancy: penerima memanggil ulang fungsi penarikan sebelum saldo dicatat; The DAO 2016 kehilangan sekitar 3,6 juta ETH.",
            "Pola Checks–Effects–Interactions (periksa, catat, baru kirim) dan ReentrancyGuard mencegahnya.",
            "Kerugian terbesar sering datang dari kunci yang bocor dan tanda tangan buta, bukan hanya bug kode.",
            "Lapisan pemeriksaan: tes unit & fuzz, tes invarian, analisis statis (Slither, Aderyn), audit, dan bug bounty — tak satu pun menjamin aman.",
            "Pola penipuan on-chain: phishing izin, address poisoning, token honeypot, rug pull; AI membantu menandai dugaan, manusia memeriksa."
          ],
          practice: [
            { type: "choice", q: "Urutan mana yang mengikuti pola Checks–Effects–Interactions?", options: ["Kirim ETH → catat saldo → periksa syarat", "Periksa syarat → kirim ETH → catat saldo", "Periksa syarat → catat saldo → kirim ETH", "Catat saldo → kirim ETH → periksa syarat"], answer: 2, hint: "Interaksi dengan pihak luar paling akhir.", solution: "Periksa, catat perubahan, baru kirim — sehingga pemanggilan ulang melihat saldo yang sudah dinolkan." },
            { type: "number", q: "Bank berisi 9 ETH; penyerang menyetor 1 ETH (total 10 ETH) ke kontrak yang rentan reentrancy dan menarik 1 ETH per lapisan. Berapa ETH paling banyak yang bisa ia ambil?", answer: 10, tol: 0.5, unit: "ETH", hint: "Serangan berulang sampai kas bank habis.", solution: "Setiap lapisan mengirim 1 ETH sampai kas habis: 10 ETH, padahal ia hanya menyetor 1 ETH." }
          ],
          quiz: [
            {
              q: "Kenapa kode yang mengirim ETH sebelum menolkan saldo rentan reentrancy?",
              options: [
                "Penerima bisa memanggil penarikan lagi saat saldonya belum nol",
                "ETH yang dikirim lewat call selalu hilang di tengah jalan",
                "Kontrak penerima tidak bisa menerima ETH sama sekali",
                "Biaya gas pengiriman menjadi terlalu mahal untuk dibayar"
              ],
              answer: 0,
              explain: "Fungsi receive penerima berjalan di tengah pengiriman dan bisa masuk lagi ke fungsi yang sama."
            },
            {
              q: "Apa pelajaran dari kasus Bybit 2025?",
              options: [
                "Kerugian besar bisa datang dari tanda tangan buta, bukan bug kode",
                "Smart contract yang sudah diaudit tidak mungkin dibobol",
                "Bursa terpusat selalu lebih aman daripada DeFi",
                "Reentrancy adalah satu-satunya celah yang berbahaya"
              ],
              answer: 0,
              explain: "Penanda tangan menyetujui transaksi yang tampilannya dimanipulasi. Keamanan mencakup proses dan manusia."
            },
            {
              q: "Sebuah token bisa dibeli tapi transaksi jualnya selalu gagal untuk semua orang kecuali pembuatnya. Ini disebut?",
              options: [
                "Token honeypot",
                "Address poisoning",
                "Liquid staking",
                "Impermanent loss"
              ],
              answer: 0,
              explain: "Kodenya sengaja memblokir penjualan; pembeli terjebak memegang token yang tidak bisa dijual."
            }
          ]
        },
        {
          id: "bc-pro-studi",
          title: "Studi Kasus Mendalam: Kenapa Rantai Anti-Curang",
          duration: "12 menit",
          content: `
<p>Kamu sudah melihat demo blockchain interaktif. Sekarang kita bedah <b>kode</b> di baliknya agar paham betul kenapa pemalsuan ketahuan.</p>

<h3>Idenya</h3>
<p>Tiap blok menyimpan <b>hash</b> (sidik jari) dari isinya, plus hash blok sebelumnya. Validasi mengecek dua hal untuk setiap blok: (1) apakah <i>prev</i>-nya cocok dengan hash blok sebelumnya, dan (2) apakah hash-nya masih cocok dengan datanya. Ubah satu data → hash berubah → validasi gagal.</p>

<h3>Coba sendiri — jalankan, lalu lihat rantai rusak</h3>
<div data-demo="js-playground">// Hash sederhana (untuk demo, bukan kriptografi nyata)
function hash(s){
  let h = 0;
  s.split("").forEach(function(ch){ h = (h*31 + ch.charCodeAt(0)) >>> 0; });
  return h.toString(16);
}

const blocks = [];
function tambah(data){
  const prev = blocks.length ? blocks[blocks.length-1].hash : "0";
  const bl = { data: data, prev: prev };
  bl.hash = hash(prev + data);
  blocks.push(bl);
}

tambah("Andi -> Budi: 5");
tambah("Budi -> Cici: 2");
tambah("Cici -> Deni: 1");

function sah(){
  return blocks.every(function(bl, i){
    const prev = i ? blocks[i-1].hash : "0";
    return bl.prev === prev && bl.hash === hash(prev + bl.data);
  });
}

console.log("Rantai sah?", sah());

// Coba curang: ubah data blok pertama
blocks[0].data = "CURANG: Andi -> Andi: 1000";
console.log("Setelah blok 0 diubah, sah?", sah());</div>

<div class="callout">
<b>Hasilnya:</b> "sah? true" lalu setelah dicurangi "sah? false". Karena setiap blok terikat ke hash blok sebelumnya, mengubah satu blok merusak validasi seluruh rantai sesudahnya — persis seperti demo interaktif. Itulah fondasi keamanan blockchain.
</div>
`,
          keyPoints: [
            "Validasi blockchain mengecek: prev cocok dengan hash blok sebelumnya, dan hash cocok dengan data.",
            "Mengubah satu data mengubah hash → validasi seluruh rantai sesudahnya gagal.",
            "Keterikatan antar-hash inilah yang membuat pemalsuan mudah terdeteksi.",
          ],
          quiz: [
            {
              q: "Mengapa mengubah data satu blok merusak rantai?",
              options: [
                "Hash blok itu ikut berubah dan tak lagi cocok dengan rujukan blok berikutnya",
                "Jaringan langsung menghapus blok yang isinya pernah disunting siapa pun",
                "Setiap blok menyimpan salinan lengkap seluruh blok yang ada sebelumnya",
                "Penambang harus menambang ulang seluruh blok mulai dari yang pertama",
              ],
              answer: 0,
              explain:
                "Tiap blok terikat ke hash sebelumnya; perubahan data memutus kecocokan itu.",
            },
            {
              q: "Apa dua hal yang dicek fungsi validasi 'sah()'?",
              options: [
                "prev cocok dengan hash blok sebelumnya, dan hash cocok dengan isi bloknya",
                "Waktu pembuatan blok dan jumlah transaksi yang ada di dalamnya",
                "Tanda tangan penambang dan besarnya imbalan yang akan ia terima",
                "Panjang rantai dan jumlah node yang sudah menyalin blok tersebut",
              ],
              answer: 0,
              explain:
                "Validasi memastikan keterkaitan antar-blok dan integritas data tiap blok.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 13: FORENSIK BLOCKCHAIN — MELACAK ALIRAN DANA ---------------- */
    {
      id: "bc-forensik",
      level: "Forensik",
      title: "Forensik Blockchain — Melacak Aliran Dana",
      summary: "Kripto itu pseudonim, bukan anonim. Pelajari cara analis melacak dana curian, bagaimana alamat dikaitkan ke identitas lewat jalur hukum, memakai AI sebagai analis on-chain, dan batas etikanya.",
      lessons: [
        {
          id: "bc-for-1",
          title: "Mitos Anonimitas — Pseudonim ≠ Anonim",
          duration: "13 menit",
          content: `
<p>Ini salah satu kesalahpahaman paling berbahaya tentang kripto: banyak orang mengira transaksi blockchain itu <b>anonim</b>. Kenyataannya justru sebaliknya — untuk kebanyakan orang, <b>membayar dengan Bitcoin jauh lebih mudah dilacak daripada membayar tunai</b>.</p>

<div data-diagram="compare3" data-cols="Uang tunai::Anonim::Tak ada catatan|Transfer bank::Teridentifikasi::Catatan dipegang bank|Bitcoin::Pseudonim::Catatan terbuka, permanen" data-caption="Kripto bukan berada di antara tunai dan bank — ia punya sifat tersendiri yang unik"></div>

<h3>Fundamental: apa beda anonim dan pseudonim?</h3>
<div class="callout">
<b>Anonim</b> = tidak ada identitas sama sekali yang melekat. Seperti membayar tunai di warung: tak ada catatan siapa membeli apa.<br><br>
<b>Pseudonim</b> = identitasmu diganti <b>nama samaran</b> yang tetap. Seperti menulis di forum dengan nama pena: selama tak ada yang tahu nama penanya milik siapa, kamu aman. Tapi begitu <b>satu tulisan saja</b> terhubung ke namamu, <b>seluruh tulisanmu</b> ikut terbongkar — termasuk yang bertahun-tahun lalu.
</div>

<p>Alamat Bitcoin adalah nama samaran itu. Blockchain tidak menyimpan namamu — tapi ia menyimpan <b>setiap transaksi yang pernah dilakukan alamat itu</b>, secara terbuka, permanen, dan bisa dibaca siapa saja tanpa izin.</p>

<h3>Tiga sifat yang membuat pelacakan mungkin</h3>
<table class="tbl">
  <tr><th>Sifat</th><th>Akibatnya bagi privasi</th></tr>
  <tr><td><b>Terbuka</b></td><td>Siapa pun bisa membaca seluruh riwayat transaksi, tanpa izin dan tanpa biaya</td></tr>
  <tr><td><b>Permanen</b></td><td>Tidak bisa dihapus. Transaksi tahun 2013 masih bisa dianalisis hari ini dengan alat yang jauh lebih canggih</td></tr>
  <tr><td><b>Terhubung</b></td><td>Tiap transaksi menunjuk ke transaksi sebelumnya — membentuk rantai yang bisa diikuti mundur</td></tr>
</table>

<div class="callout warn">
<b>Yang paling sering tidak disadari: privasi kripto bersifat <i>surut</i>.</b><br><br>
Kalau kamu bocor hari ini, yang terbongkar bukan hanya transaksi hari ini — melainkan <b>seluruh riwayatmu sejak awal</b>. Dan kamu tidak bisa menariknya kembali, karena datanya sudah tersalin ke ribuan komputer di seluruh dunia.<br><br>
Bandingkan dengan kebocoran data bank: setidaknya masih ada satu pihak yang bisa diminta menutup akses. Di blockchain, <b>tidak ada siapa pun yang bisa diminta menghapus</b>.
</div>

<h3>Kenapa ini justru kabar baik</h3>
<p>Sifat terbuka ini sering dianggap kelemahan. Padahal ia adalah alasan kripto curian <b>sering berhasil dilacak dan dikembalikan</b> — sesuatu yang hampir mustahil dilakukan pada uang tunai hasil kejahatan.</p>

<ul>
  <li><b>Korban penipuan</b> bisa menunjukkan jejak dananya ke penegak hukum.</li>
  <li><b>Bursa</b> bisa membekukan dana yang diketahui berasal dari peretasan.</li>
  <li><b>Jurnalis &amp; peneliti</b> bisa menyelidiki aliran dana tanpa perlu akses istimewa.</li>
</ul>

<div class="callout">
<b>Yang perlu kamu bawa dari pelajaran ini:</b><br><br>
1. Jangan pernah menganggap transaksi kriptomu rahasia.<br>
2. Kalau kamu jadi korban penipuan kripto, <b>jangan langsung menyerah</b> — dananya bisa ditelusuri. Catat alamat tujuannya dan laporkan.<br>
3. Alamat yang pernah kamu pakai di tempat umum (donasi, jual-beli, media sosial) <b>selamanya terhubung</b> ke identitasmu.
</div>
`,
          keyPoints: [
            "Kripto itu pseudonim (bernama samaran tetap), bukan anonim (tanpa identitas sama sekali).",
            "Blockchain tidak menyimpan namamu, tapi menyimpan seluruh transaksi alamatmu secara terbuka dan permanen.",
            "Tiga sifat yang memungkinkan pelacakan: terbuka, permanen, dan saling terhubung.",
            "Privasi kripto bersifat SURUT — satu kebocoran hari ini membongkar seluruh riwayat sejak awal.",
            "Tidak ada pihak yang bisa diminta menghapus data blockchain, karena sudah tersalin ke ribuan komputer.",
            "Sisi baiknya: dana curian sering bisa dilacak dan dikembalikan — hampir mustahil dilakukan pada uang tunai.",
            "Kalau jadi korban penipuan, catat alamat tujuan dananya dan laporkan — jejaknya masih ada.",
          ],
          quiz: [
            {
              q: "Apa beda 'pseudonim' dan 'anonim' dalam konteks blockchain?",
              options: [
                "Pseudonim memakai nama samaran tetap yang bisa terhubung ke identitas asli",
                "Pseudonim berarti transaksinya dienkripsi sehingga tak ada yang bisa membaca",
                "Pseudonim berarti identitas disimpan bursa, tetapi tidak dicatat di blockchain",
                "Pseudonim dan anonim sebenarnya dua istilah berbeda untuk hal yang sama",
              ],
              answer: 0,
              explain:
                "Nama samaran yang tetap justru berbahaya: sekali terhubung ke identitas, seluruh riwayatnya ikut terbuka.",
            },
            {
              q: "Kenapa kebocoran privasi di blockchain disebut bersifat 'surut'?",
              options: [
                "Yang terbongkar bukan hanya transaksi baru, tapi seluruh riwayat sejak awal",
                "Data lama di blockchain otomatis dihapus setelah beberapa tahun berlalu",
                "Hanya transaksi setelah kebocoran terjadi yang bisa dilihat oleh publik",
                "Pengguna bisa meminta bursa menutup akses publik ke seluruh riwayatnya",
              ],
              answer: 0,
              explain:
                "Seluruh riwayat sudah tersimpan permanen dan terbuka; menghubungkannya ke identitas membuka semuanya sekaligus.",
            },
            {
              q: "Dibanding uang tunai, melacak hasil kejahatan dalam Bitcoin umumnya?",
              options: [
                "Lebih mudah, karena seluruh jejak transaksinya tercatat terbuka dan permanen",
                "Lebih sulit, karena tidak ada catatan apa pun yang bisa diperiksa",
                "Sama saja, karena keduanya tidak meninggalkan jejak apa pun",
                "Mustahil, karena alamat kripto tidak pernah bisa dihubungkan ke siapa pun",
              ],
              answer: 0,
              explain:
                "Uang tunai berpindah tanpa catatan; Bitcoin meninggalkan jejak permanen yang bisa dianalisis siapa saja.",
            },
          ],
        },
        {
          id: "bc-for-2",
          title: "Dasar Penelusuran On-Chain",
          duration: "14 menit",
          content: `
<p>Sekarang kita masuk ke caranya. Penelusuran on-chain pada dasarnya adalah <b>mengikuti uang</b> — keahlian tertua dalam investigasi keuangan, hanya saja di sini seluruh buku besarnya terbuka untuk umum.</p>

<div data-diagram="pipeline" data-stages="Alamat awal::titik mula, mis. alamat penipu|Ikuti keluarannya::ke mana dana berpindah|Petakan pola::lihat percabangan &amp; penggabungan|Cari titik cair::bursa, pedagang, layanan" data-caption="Empat langkah dasar penelusuran"></div>

<h3>Alat kerjanya: block explorer</h3>
<div class="callout">
<b>Block explorer</b> adalah situs yang menampilkan isi blockchain dalam bentuk yang bisa dibaca manusia — seperti "mesin pencari" untuk blockchain. Gratis, terbuka, tanpa perlu mendaftar.<br><br>
Untuk Bitcoin ada <i>mempool.space</i> dan <i>blockstream.info</i>; untuk Ethereum ada <i>Etherscan</i>. Cukup tempel sebuah alamat, dan seluruh riwayatnya muncul.
</div>

<p>Yang bisa kamu lihat dari sebuah alamat, tanpa izin siapa pun:</p>
<ul>
  <li>Saldo saat ini dan <b>seluruh</b> transaksi yang pernah terjadi</li>
  <li>Waktu tiap transaksi, sampai ke detik</li>
  <li>Alamat lawan transaksinya — pengirim maupun penerima</li>
  <li>Jumlah persisnya, tanpa pembulatan</li>
</ul>

<h3>Dua model yang perlu dibedakan</h3>
<table class="tbl">
  <tr><th></th><th>Model UTXO (Bitcoin)</th><th>Model Akun (Ethereum)</th></tr>
  <tr><td><b>Cara kerja</b></td><td>Seperti uang fisik: tiap "lembar" dibelanjakan utuh, sisanya kembali sebagai <b>kembalian</b></td><td>Seperti rekening bank: saldo bertambah dan berkurang</td></tr>
  <tr><td><b>Ciri saat ditelusuri</b></td><td>Satu transaksi bisa punya <b>banyak masukan &amp; keluaran</b></td><td>Umumnya satu pengirim ke satu penerima</td></tr>
  <tr><td><b>Celah privasinya</b></td><td>Alamat kembalian sering bisa ditebak</td><td>Alamat dipakai berulang, jadi riwayatnya menumpuk di satu tempat</td></tr>
</table>

<div class="callout warn">
<b>Kenapa "kembalian" penting bagi penyidik.</b> Di Bitcoin, kalau kamu punya 1 BTC dan mengirim 0,3 BTC, maka 0,7 BTC sisanya dikirim balik ke <b>alamat baru milikmu sendiri</b>. Penyidik yang bisa menebak mana keluaran "kembalian" dan mana yang "pembayaran" bisa terus mengikuti dompetmu melewati puluhan transaksi.
</div>

<h3>Coba sendiri: ikuti aliran dana</h3>

<div data-demo="lacak-dana"></div>

<h3>Pola yang dicari analis</h3>
<table class="tbl">
  <tr><th>Pola</th><th>Artinya</th></tr>
  <tr><td><b>Peeling chain</b></td><td>Dana besar terus berpindah sambil sedikit demi sedikit dikupas — ciri khas upaya pencucian</td></tr>
  <tr><td><b>Pemecahan (fan-out)</b></td><td>Satu alamat menyebar ke puluhan alamat sekaligus untuk mengaburkan jejak</td></tr>
  <tr><td><b>Penggabungan (fan-in)</b></td><td>Banyak alamat menyatu ke satu tujuan — sering justru <b>membuka</b> kepemilikan bersama</td></tr>
  <tr><td><b>Angka bulat &amp; waktu teratur</b></td><td>Perilaku manusia, bukan mesin — sering membocorkan zona waktu dan kebiasaan pelaku</td></tr>
</table>

<div class="callout">
<b>Yang membuat penelusuran berhasil bukan kecanggihan alat, melainkan kesabaran.</b> Pelaku hanya perlu salah <b>sekali</b>: satu kali memakai ulang alamat, satu kali menggabungkan dana lama dengan dana baru, satu kali mencairkan di bursa yang meminta KTP. Penyidik punya waktu bertahun-tahun untuk menunggu kesalahan itu — dan datanya tidak akan pernah hilang.
</div>
`,
          keyPoints: [
            "Block explorer (mempool.space, Etherscan) menampilkan seluruh isi blockchain secara gratis dan terbuka.",
            "Dari satu alamat bisa terlihat: saldo, seluruh riwayat transaksi, waktu, lawan transaksi, dan jumlah persisnya.",
            "Model UTXO (Bitcoin) memakai 'kembalian' ke alamat baru; model akun (Ethereum) memakai saldo seperti rekening.",
            "Menebak mana keluaran 'kembalian' memungkinkan penyidik mengikuti satu dompet melewati puluhan transaksi.",
            "Pola yang dicari: peeling chain, fan-out (memecah), fan-in (menggabung), serta angka bulat & waktu teratur.",
            "Fan-in justru sering membuka kepemilikan bersama, bukan menyembunyikannya.",
            "Kunci keberhasilan penelusuran adalah kesabaran — pelaku hanya perlu salah sekali, dan datanya tak pernah hilang.",
          ],
          quiz: [
            {
              q: "Apa yang bisa dilihat siapa pun dari sebuah alamat Bitcoin lewat block explorer?",
              options: [
                "Seluruh riwayat transaksi, waktu, jumlah, dan alamat lawan transaksinya",
                "Nama lengkap dan alamat rumah pemilik alamat tersebut beserta KTP-nya",
                "Hanya saldo saat ini, tanpa riwayat transaksi apa pun sebelumnya",
                "Tidak ada apa pun, kecuali punya izin khusus dari pemilik alamat itu",
              ],
              answer: 0,
              explain:
                "Seluruh data itu terbuka tanpa izin dan tanpa biaya. Yang TIDAK ada di blockchain adalah nama pemiliknya.",
            },
            {
              q: "Kenapa 'alamat kembalian' penting dalam penelusuran Bitcoin?",
              options: [
                "Bila kembalian bisa ditebak, penyidik bisa terus mengikuti dompet yang sama",
                "Alamat kembalian selalu dicatat atas nama pemiliknya di dalam blockchain",
                "Kembalian selalu dikirim ke bursa tempat pengguna itu terdaftar sebelumnya",
                "Transaksi yang punya kembalian sama sekali tidak bisa ditelusuri penyidik",
              ],
              answer: 0,
              explain:
                "Memisahkan 'pembayaran' dari 'kembalian' memungkinkan penyidik mengikuti dompet melewati banyak transaksi.",
            },
            {
              q: "Pola 'peeling chain' menandakan apa?",
              options: [
                "Dana besar terus berpindah sambil sedikit-sedikit dikupas — ciri pencucian",
                "Banyak alamat berbeda menggabungkan dananya ke dalam satu alamat tujuan",
                "Transaksi gagal yang dikembalikan lagi ke alamat pengirim semulanya",
                "Pembayaran rutin bulanan dengan jumlah yang selalu sama persis setiap kali",
              ],
              answer: 0,
              explain:
                "Pelaku memecah sedikit demi sedikit agar sulit diikuti, tapi polanya sendiri justru mudah dikenali.",
            },
            {
              q: "Menurut pelajaran ini, apa yang paling menentukan keberhasilan penelusuran?",
              options: [
                "Kesabaran, karena pelaku hanya perlu salah sekali dan datanya tidak pernah hilang",
                "Kemampuan memecahkan enkripsi yang melindungi transaksi blockchain",
                "Akses istimewa ke basis data internal jaringan Bitcoin",
                "Kecepatan bertindak, karena jejak transaksi hilang setelah beberapa bulan",
              ],
              answer: 0,
              explain:
                "Tidak ada enkripsi yang dipecahkan — datanya memang terbuka. Yang dibutuhkan adalah ketekunan menunggu kesalahan.",
            },
          ],
        },
        {
          id: "bc-for-3",
          title: "Heuristik Klasterisasi — Menyatukan Alamat",
          duration: "14 menit",
          content: `
<p>Satu orang bisa memakai ratusan alamat. Kalau penyidik harus memeriksanya satu per satu, pekerjaannya mustahil. Di sinilah <b>klasterisasi</b> bekerja: menyatukan alamat-alamat yang ternyata dimiliki orang yang sama.</p>

<h3>Aturan paling ampuh: kepemilikan masukan bersama</h3>
<div class="callout">
<b>Common Input Ownership Heuristic.</b> Kalau satu transaksi membelanjakan dana dari <b>beberapa alamat sekaligus</b>, maka pengirimnya harus memegang <b>kunci privat semua alamat itu</b>.<br><br>
Alasannya sederhana: setiap masukan harus ditandatangani secara terpisah. Tak mungkin kamu menandatangani milik orang lain. Jadi alamat-alamat itu pasti <b>satu pemilik</b>.
</div>

<p>Ini bukan tebakan — ini konsekuensi langsung dari cara kerja tanda tangan digital yang sudah kamu pelajari. Dan efeknya besar sekali:</p>

<div data-demo="klaster-alamat"></div>

<h3>Kenapa ini disebut "heuristik", bukan "bukti"</h3>
<div class="callout warn">
Aturan ini <b>hampir selalu</b> benar, tapi ada pengecualiannya — misalnya <b>CoinJoin</b>, di mana banyak orang sengaja bergabung dalam satu transaksi untuk mematahkan aturan ini.<br><br>
Karena itu analis menyebutnya <b>heuristik</b>: aturan praktis yang sangat berguna tapi <b>bukan bukti mutlak</b>. Dalam konteks hukum, perbedaan ini penting — hasil klasterisasi adalah <b>petunjuk untuk diselidiki</b>, bukan vonis.
</div>

<h3>Heuristik lain yang dipakai</h3>
<table class="tbl">
  <tr><th>Heuristik</th><th>Cara kerjanya</th><th>Keandalannya</th></tr>
  <tr><td><b>Deteksi kembalian</b></td><td>Keluaran dengan banyak angka di belakang koma biasanya kembalian; yang bulat biasanya pembayaran</td><td>Sedang</td></tr>
  <tr><td><b>Pemakaian ulang alamat</b></td><td>Alamat yang dipakai berkali-kali mengumpulkan riwayat di satu tempat</td><td class="ok-cell">Tinggi</td></tr>
  <tr><td><b>Pola waktu</b></td><td>Transaksi selalu pada jam tertentu membocorkan zona waktu pelaku</td><td>Rendah, tapi mempersempit</td></tr>
  <tr><td><b>Alamat yang sudah berlabel</b></td><td>Alamat bursa &amp; layanan besar sudah dikenal luas dan didokumentasikan publik</td><td class="ok-cell">Tinggi</td></tr>
</table>

<h3>Efek bola salju</h3>
<div class="callout">
Kekuatan sesungguhnya muncul saat heuristik-heuristik ini <b>digabungkan</b>. Satu alamat yang teridentifikasi akan menarik seluruh klasternya; klaster itu lalu terhubung ke klaster lain lewat transaksi; dan seterusnya.<br><br>
Inilah cara perusahaan analitik blockchain membangun basis data berisi <b>miliaran alamat berlabel</b> — bukan dengan meretas apa pun, melainkan dengan menerapkan aturan-aturan sederhana ini pada data yang memang terbuka.
</div>

<div class="callout warn">
<b>Pelajaran praktis untuk melindungi diri:</b><br><br>
• <b>Jangan memakai ulang alamat.</b> Buat alamat baru untuk tiap transaksi — dompet modern melakukannya otomatis.<br>
• <b>Jangan menggabungkan</b> dana dari sumber yang ingin kamu pisahkan dalam satu transaksi. Itu langsung mengikat keduanya selamanya.<br>
• <b>Pisahkan dompet</b> untuk keperluan berbeda, dan jangan pernah menghubungkannya.<br>
• Sadari bahwa alamat yang pernah kamu bagikan di media sosial <b>sudah permanen</b> terhubung ke identitasmu.
</div>
`,
          keyPoints: [
            "Klasterisasi menyatukan banyak alamat yang ternyata dimiliki orang yang sama.",
            "Common Input Ownership Heuristic: satu transaksi yang membelanjakan dari beberapa alamat berarti pengirimnya memegang kunci privat semuanya.",
            "Aturan ini konsekuensi langsung dari tanda tangan digital — tiap masukan harus ditandatangani terpisah.",
            "Disebut heuristik, bukan bukti, karena ada pengecualian seperti CoinJoin; hasilnya petunjuk untuk diselidiki, bukan vonis.",
            "Heuristik lain: deteksi kembalian, pemakaian ulang alamat, pola waktu, dan alamat berlabel yang sudah dikenal publik.",
            "Efek bola salju: satu alamat teridentifikasi menarik seluruh klaster, lalu terhubung ke klaster lain.",
            "Melindungi diri: jangan pakai ulang alamat, jangan gabungkan dana dari sumber berbeda, pisahkan dompet per keperluan.",
          ],
          quiz: [
            {
              q: "Kenapa alamat-alamat yang dipakai bersama dalam satu transaksi dianggap satu pemilik?",
              options: [
                "Tiap masukan ditandatangani terpisah, jadi pengirim memegang semua kuncinya",
                "Blockchain mencatat nama pemilik di setiap masukan transaksi yang dikirim",
                "Bursa mewajibkan semua alamat milik seseorang didaftarkan atas satu nama",
                "Alamat yang nomornya berdekatan selalu dibuat oleh dompet yang sama",
              ],
              answer: 0,
              explain:
                "Mustahil menandatangani masukan milik orang lain, sehingga kepemilikan bersama bisa disimpulkan langsung.",
            },
            {
              q: "Kenapa klasterisasi disebut 'heuristik' dan bukan 'bukti'?",
              options: [
                "Hampir selalu benar, tapi ada pengecualian seperti CoinJoin — jadi petunjuk",
                "Hasilnya hanya benar bila jumlah alamat yang dianalisis kurang dari sepuluh",
                "Metodenya belum pernah sekali pun diuji dalam kasus nyata mana pun",
                "Hasilnya selalu berubah-ubah setiap kali perhitungannya diulang kembali",
              ],
              answer: 0,
              explain:
                "CoinJoin sengaja menggabungkan banyak pemilik dalam satu transaksi untuk mematahkan aturan ini.",
            },
            {
              q: "Manakah kebiasaan yang paling merusak privasi kriptomu sendiri?",
              options: [
                "Memakai ulang satu alamat yang sama untuk banyak transaksi berbeda",
                "Membuat alamat baru setiap kali menerima pembayaran dari orang lain",
                "Menyimpan frasa pemulihan dompet secara offline di atas kertas",
                "Memeriksa saldo dompet lewat block explorer secara berkala",
              ],
              answer: 0,
              explain:
                "Pemakaian ulang alamat menumpuk seluruh riwayat di satu tempat sehingga sangat mudah dianalisis.",
            },
          ],
        },
        {
          id: "bc-for-4",
          title: "Dari Alamat ke Identitas — Titik Temu Dunia Nyata",
          duration: "15 menit",
          content: `
<p>Sampai di sini kita punya klaster alamat. Tapi klaster tetap hanya deretan angka. <b>Bagaimana ia berubah menjadi sebuah nama?</b> Jawabannya mungkin mengejutkan: <b>hampir tidak pernah lewat teknologi</b>.</p>

<div data-diagram="pipeline" data-stages="Analisis on-chain::menghasilkan klaster alamat|Titik cair::klaster menyentuh bursa|Permintaan resmi::penegak hukum ke bursa|Identitas::dari data KYC bursa" data-caption="Langkah terakhir terjadi di luar blockchain, lewat jalur hukum"></div>

<h3>Fundamental: blockchain tidak menyimpan identitas</h3>
<div class="callout warn">
Ini penting dan sering disalahpahami: <b>tidak ada cara teknis mengubah alamat menjadi nama</b>. Blockchain memang tidak pernah menyimpan data itu.<br><br>
Identitas selalu datang dari <b>luar</b> blockchain — dari tempat dunia kripto bersentuhan dengan dunia yang diatur hukum. Titik sentuh itulah yang disebut <b>off-ramp</b>.
</div>

<h3>Di mana titik sentuhnya</h3>
<table class="tbl">
  <tr><th>Titik sentuh</th><th>Data identitas yang ada di sana</th></tr>
  <tr><td><b>Bursa kripto</b></td><td>KTP, swafoto, rekening bank, nomor HP — wajib secara hukum</td></tr>
  <tr><td><b>Penyedia dompet terpusat</b></td><td>Email, nomor HP, alamat IP</td></tr>
  <tr><td><b>Pedagang yang menerima kripto</b></td><td>Alamat pengiriman barang, data pembayaran</td></tr>
  <tr><td><b>Jaringan ATM kripto</b></td><td>Rekaman kamera, nomor HP</td></tr>
  <tr><td><b>Postingan publik</b></td><td>Alamat yang pernah dibagikan sendiri di media sosial atau forum</td></tr>
</table>

<h3>Kenapa pelaku hampir selalu harus lewat sana</h3>
<div class="callout">
Kripto hasil kejahatan <b>tidak ada gunanya selama masih berupa kripto</b>. Pelaku tidak bisa membayar sewa, membeli mobil, atau menyekolahkan anak dengan Bitcoin di rekening yang tak bisa dicairkan.<br><br>
Cepat atau lambat ia <b>harus mencairkannya</b> — dan hampir semua jalur pencairan yang bernilai besar melewati lembaga yang wajib memverifikasi identitas. Inilah <b>leher botol</b> yang membuat penelusuran berhasil.
</div>

<h3>Bagaimana identitas itu sebenarnya diperoleh</h3>
<div class="callout warn">
<b>Lewat proses hukum, bukan lewat peretasan.</b><br><br>
Penyidik menyusun laporan analisis on-chain, lalu mengajukan <b>permintaan resmi</b> kepada bursa terkait. Bursa — yang tunduk pada hukum negaranya — menyerahkan data KYC pemilik akun penerima.<br><br>
Analisis blockchain-nya sendiri bisa dilakukan siapa saja. Tapi <b>langkah terakhirnya butuh kewenangan hukum</b>, dan hanya penegak hukum atau pihak yang diberi wewenang yang bisa menempuhnya.
</div>

<p>Di Indonesia, jalur ini melibatkan <b>PPATK</b> (Pusat Pelaporan dan Analisis Transaksi Keuangan) yang menerima laporan transaksi mencurigakan, bersama <b>OJK</b> sebagai pengawas aset kripto dan kepolisian sebagai penyidik.</p>

<h3>Travel Rule — aturan yang memperluas jangkauan</h3>
<div class="callout">
<b>Travel Rule</b> mewajibkan penyedia jasa aset kripto saling mengirimkan <b>data identitas pengirim dan penerima</b> saat mentransfer dana di atas ambang tertentu — mirip aturan yang sudah lama berlaku pada transfer bank antarnegara.<br><br>
Akibatnya, identitas tidak lagi berhenti di satu bursa; ia <b>ikut berpindah</b> mengikuti dananya antar-lembaga.
</div>

<h3>Batas yang harus kamu pahami</h3>
<div class="callout warn">
Materi ini mengajarkan <b>cara kerjanya</b>, bukan ajakan melakukannya sendiri. Beberapa batas yang tegas:<br><br>
• <b>Analisis on-chain itu legal</b> — datanya publik, siapa pun boleh membacanya.<br>
• <b>Meminta data identitas ke bursa butuh kewenangan hukum.</b> Orang biasa tidak bisa dan tidak boleh.<br>
• <b>Membongkar identitas seseorang lalu menyebarkannya</b> berpotensi melanggar UU Perlindungan Data Pribadi dan UU ITE — terlepas dari benar tidaknya dugaanmu.<br>
• Kalau kamu menjadi korban, jalurnya adalah <b>melapor</b>, bukan menyelidiki sendiri lalu menghakimi. Salah tuduh bisa berbalik menjadi masalah hukum bagimu.
</div>

<div class="callout">
<b>Kalau kamu jadi korban penipuan kripto — yang berguna dilakukan:</b><br>
1. <b>Catat alamat tujuan</b> dana beserta ID transaksinya. Ini bukti yang paling penting.<br>
2. <b>Laporkan ke bursa</b> tempat kamu mengirim — banyak bursa punya kanal khusus dan bisa membekukan dana bila cepat.<br>
3. <b>Laporkan ke kepolisian</b> dengan menyertakan data di atas.<br>
4. <b>Jangan</b> memakai jasa "pemulihan dana" yang menjanjikan hasil pasti — itu biasanya penipuan tahap kedua terhadap korban yang sama.
</div>
`,
          keyPoints: [
            "Tidak ada cara teknis mengubah alamat menjadi nama — blockchain memang tidak menyimpan identitas.",
            "Identitas selalu datang dari luar blockchain, di titik sentuh dengan dunia yang diatur hukum (off-ramp).",
            "Titik sentuh utama: bursa kripto (KTP, rekening), dompet terpusat, pedagang, ATM kripto, dan alamat yang pernah dibagikan sendiri.",
            "Pelaku hampir selalu harus mencairkan dananya, dan jalur pencairan besar melewati lembaga ber-KYC — inilah leher botolnya.",
            "Identitas diperoleh lewat permintaan resmi berdasar proses hukum, bukan lewat peretasan.",
            "Di Indonesia jalurnya melibatkan PPATK, OJK, dan kepolisian.",
            "Travel Rule mewajibkan penyedia jasa kripto saling mengirim data identitas, sehingga identitas ikut berpindah mengikuti dana.",
            "Analisis on-chain legal; meminta data identitas butuh kewenangan hukum; menyebarkan identitas orang bisa melanggar UU PDP & UU ITE.",
            "Jadi korban: catat alamat & ID transaksi, lapor ke bursa dan polisi, dan waspadai jasa 'pemulihan dana' yang menjanjikan hasil pasti.",
          ],
          quiz: [
            {
              q: "Bagaimana sebuah alamat kripto akhirnya terhubung ke nama seseorang?",
              options: [
                "Lewat data KYC di titik sentuh seperti bursa, yang diminta melalui proses hukum resmi",
                "Lewat pemecahan enkripsi yang melindungi alamat tersebut di blockchain",
                "Lewat data identitas yang memang tersimpan di dalam blockchain itu sendiri",
                "Lewat penelusuran alamat IP yang otomatis tercatat pada setiap transaksi",
              ],
              answer: 0,
              explain:
                "Blockchain tidak menyimpan identitas sama sekali. Identitas datang dari lembaga ber-KYC di luar blockchain.",
            },
            {
              q: "Kenapa pelaku kejahatan hampir selalu akhirnya tersentuh lembaga ber-KYC?",
              options: [
                "Kripto baru berguna setelah dicairkan, dan jalur pencairannya wajib KYC",
                "Setiap transaksi blockchain otomatis dilaporkan ke bursa yang terdekat",
                "Dompet kripto mewajibkan pendaftaran identitas sebelum bisa dipakai",
                "Jaringan Bitcoin memblokir transaksi yang datang dari alamat tak dikenal",
              ],
              answer: 0,
              explain:
                "Inilah leher botolnya: pelaku bisa memindahkan dana berkali-kali, tapi mencairkannya sulit dilakukan diam-diam.",
            },
            {
              q: "Kamu berhasil menelusuri alamat penipu dan menduga kuat siapa pemiliknya. Langkah yang tepat?",
              options: [
                "Laporkan temuan itu ke bursa dan kepolisian, jangan menyebarkan identitasnya sendiri",
                "Sebarkan identitas dan bukti temuanmu di media sosial agar orang lain waspada",
                "Hubungi orang itu langsung dan minta dana dikembalikan dengan ancaman",
                "Minta data KYC-nya langsung ke bursa sebagai pihak yang dirugikan",
              ],
              answer: 0,
              explain:
                "Menyebarkan identitas berpotensi melanggar UU PDP & UU ITE, dan salah tuduh bisa berbalik menjadi masalah hukum bagimu.",
            },
            {
              q: "Apa yang diwajibkan oleh Travel Rule?",
              options: [
                "Penyedia jasa kripto saling mengirim identitas pengirim & penerima transfer besar",
                "Semua pengguna kripto wajib melaporkan perjalanan ke luar negeri pada pajak",
                "Setiap transaksi kripto mencatat identitas pengirim langsung di blockchain",
                "Bursa membekukan seluruh dana dari negara lain selama masa pemeriksaan",
              ],
              answer: 0,
              explain:
                "Aturannya mirip yang sudah lama berlaku pada transfer bank antarnegara, sehingga identitas ikut berpindah bersama dana.",
            },
          ],
        },
        {
          id: "bc-for-5",
          title: "Alat Pengaburan & Batasnya",
          duration: "14 menit",
          content: `
<p>Kalau blockchain begitu mudah ditelusuri, tentu ada upaya melawannya. Pelajaran ini membahas alat-alat pengaburan jejak, seberapa jauh mereka bekerja, dan kenapa sebagian besar akhirnya <b>gagal</b>.</p>

<div data-diagram="compare3" data-cols="Mixer terpusat::Dana dititipkan::Pengelola tahu segalanya|CoinJoin::Bergabung sukarela::Bisa dianalisis statistik|Koin privasi::Privasi di protokol::Sulit dicairkan" data-caption="Tiga pendekatan menyamarkan jejak — masing-masing dengan kelemahannya"></div>

<h3>1. Mixer / tumbler</h3>
<p>Layanan yang menerima kripto dari banyak orang, mengaduknya, lalu mengembalikan sejumlah yang sama dari kumpulan yang bercampur — sehingga jejak masuk dan keluar terputus.</p>

<div class="callout warn">
<b>Kenapa sering gagal:</b><br>
• <b>Pengelolanya tahu segalanya.</b> Kamu menyerahkan kerahasiaanmu kepada pihak yang tak kamu kenal — dan catatan mereka bisa disita.<br>
• <b>Jumlah dan waktu membocorkan.</b> Kalau 10,3 BTC masuk lalu 10,28 BTC keluar beberapa jam kemudian, kaitannya mudah diduga.<br>
• <b>Memakainya sendiri menimbulkan kecurigaan.</b> Banyak bursa menolak atau menahan dana yang datang langsung dari mixer.<br>
• Beberapa mixer besar telah <b>dikenai sanksi</b> di berbagai negara, sehingga menyentuhnya justru menandai dana tersebut.
</div>

<h3>2. CoinJoin</h3>
<p>Berbeda dari mixer, di sini tidak ada penitipan. Banyak pengguna <b>bersama-sama membuat satu transaksi</b> dengan banyak masukan dan keluaran berjumlah seragam, sehingga tak jelas keluaran mana milik siapa. Inilah yang secara langsung mematahkan heuristik masukan bersama.</p>

<div class="callout">
Lebih aman karena <b>tidak ada yang memegang danamu</b>. Tapi tetap punya batas: jumlah peserta menentukan kekuatannya, dan analisis statistik jangka panjang bisa mempersempit kemungkinan — apalagi kalau pengguna kemudian menggabungkan kembali hasilnya secara ceroboh.
</div>

<h3>3. Koin privasi</h3>
<table class="tbl">
  <tr><th>Koin</th><th>Cara kerjanya</th><th>Catatan</th></tr>
  <tr><td><b>Monero</b></td><td>Privasi wajib untuk semua transaksi: pengirim, penerima, dan jumlah disamarkan</td><td>Paling kuat, tapi banyak bursa besar tidak melayaninya</td></tr>
  <tr><td><b>Zcash</b></td><td>Privasi opsional memakai zero-knowledge proof</td><td>Karena opsional, mayoritas transaksinya justru transparan</td></tr>
</table>

<div class="callout warn">
<b>Pelajaran dari Zcash:</b> privasi yang bersifat <b>pilihan</b> jauh lebih lemah daripada privasi yang <b>wajib</b>. Kalau hanya sedikit orang yang memakainya, memakai fitur itu sendiri sudah menjadi penanda yang mencurigakan — dan kumpulan orang yang bisa disamai jadi kecil.
</div>

<h3>4. Jembatan lintas rantai</h3>
<p>Memindahkan aset antar-blockchain dulu cukup ampuh memutus jejak, karena penyidik harus mengikuti dua buku besar yang berbeda. Kini alat analisis <b>sudah mampu melacak lintas rantai</b>, sehingga keunggulannya banyak berkurang.</p>

<h3>Kenapa pengaburan sering gagal pada akhirnya</h3>
<table class="tbl">
  <tr><th>Penyebab</th><th>Penjelasan</th></tr>
  <tr><td><b>Kesalahan manusia</b></td><td>Cukup sekali menggabungkan dana "bersih" dengan dana "kotor", dan keduanya terikat selamanya</td></tr>
  <tr><td><b>Masalah masuk &amp; keluar</b></td><td>Dana harus datang dari suatu tempat dan pergi ke suatu tempat — kedua ujungnya sering teridentifikasi</td></tr>
  <tr><td><b>Waktu berpihak pada penyidik</b></td><td>Data tersimpan selamanya, sementara alat analisis terus membaik. Transaksi 2016 kini lebih mudah dianalisis daripada saat itu</td></tr>
  <tr><td><b>Memakai alat itu sendiri mencolok</b></td><td>Di lautan transaksi biasa, yang berusaha bersembunyi justru menonjol</td></tr>
</table>

<div class="callout">
<b>Catatan penting soal niat.</b> Alat privasi <b>bukan otomatis berarti kejahatan</b>. Ada alasan yang sangat sah untuk memakainya: pengusaha yang tak ingin pesaing melihat arus kasnya, jurnalis di negara represif, atau orang biasa yang sekadar tak ingin gajinya terbaca siapa pun karena pernah sekali membagikan alamat dompet.<br><br>
Yang penting dipahami: <b>privasi finansial adalah kebutuhan wajar</b>, tapi di blockchain ia jauh lebih sulit dicapai daripada yang dibayangkan kebanyakan orang.
</div>
`,
          keyPoints: [
            "Mixer menitipkan dana ke pihak ketiga — pengelolanya tahu segalanya dan catatannya bisa disita.",
            "Jumlah dan waktu yang berdekatan membocorkan kaitan masuk-keluar mixer.",
            "CoinJoin tidak menitipkan dana; banyak pengguna membuat satu transaksi bersama dengan keluaran seragam.",
            "Monero mewajibkan privasi untuk semua transaksi; Zcash membuatnya opsional sehingga mayoritas transaksinya tetap transparan.",
            "Privasi yang bersifat pilihan jauh lebih lemah — memakainya sendiri menjadi penanda mencurigakan.",
            "Jembatan lintas rantai dulu ampuh memutus jejak, kini banyak alat sudah bisa melacak lintas rantai.",
            "Pengaburan gagal karena: kesalahan manusia, masalah ujung masuk & keluar, waktu berpihak pada penyidik, dan memakai alatnya sendiri mencolok.",
            "Alat privasi bukan otomatis berarti kejahatan — privasi finansial adalah kebutuhan yang wajar.",
          ],
          quiz: [
            {
              q: "Apa kelemahan mendasar mixer terpusat?",
              options: [
                "Pengelolanya mengetahui seluruh kaitan masuk-keluar, dan catatannya bisa disita",
                "Mixer hanya bisa memproses jumlah yang sangat kecil setiap harinya",
                "Dana yang masuk ke mixer tidak pernah bisa dikeluarkan kembali",
                "Mixer mengubah jenis koin sehingga nilainya selalu berkurang drastis",
              ],
              answer: 0,
              explain:
                "Kamu menyerahkan kerahasiaanmu kepada pihak yang tidak kamu kenal dan tidak bisa kamu kontrol.",
            },
            {
              q: "Apa beda mendasar CoinJoin dari mixer terpusat?",
              options: [
                "CoinJoin tidak menitipkan dana — peserta membuat satu transaksi bersama",
                "CoinJoin hanya bisa dipakai pada blockchain lain, bukan pada Bitcoin",
                "CoinJoin menghapus seluruh riwayat transaksi peserta dari blockchain",
                "CoinJoin mewajibkan verifikasi identitas sebelum peserta boleh bergabung",
              ],
              answer: 0,
              explain:
                "Tidak adanya penitipan menghilangkan risiko pengelola yang tahu segalanya.",
            },
            {
              q: "Kenapa privasi opsional (seperti pada Zcash) lebih lemah daripada privasi wajib?",
              options: [
                "Bila hanya sedikit yang memakainya, memakai fitur itu sudah jadi penanda",
                "Fitur opsional selalu mengandung celah keamanan yang belum diperbaiki",
                "Privasi opsional membuat setiap transaksinya jauh lebih lambat diproses",
                "Bursa di seluruh dunia melarang koin yang punya fitur privasi opsional",
              ],
              answer: 0,
              explain:
                "Kumpulan orang yang bisa kamu samai menjadi kecil, sehingga justru mempersempit pencarian.",
            },
            {
              q: "Menurut pelajaran ini, kenapa waktu berpihak pada penyidik?",
              options: [
                "Data tersimpan selamanya, sementara alat analisis terus membaik tiap tahun",
                "Pelaku biasanya menyerahkan diri setelah beberapa tahun lamanya berlalu",
                "Transaksi lama otomatis dibuka penyamarannya setelah sepuluh tahun",
                "Bursa hanya wajib menyimpan data pengguna selama lima tahun terakhir",
              ],
              answer: 0,
              explain:
                "Transaksi 2016 justru lebih mudah dianalisis hari ini daripada saat transaksi itu terjadi.",
            },
          ],
        },
        {
          id: "bc-ai-1",
          title: "AI sebagai Analis On-Chain — Bertanya pada Data Blockchain",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Data blockchain publik bisa dibaca siapa pun lewat block explorer (pelajaran Mengintip Isi Blockchain), dan analis melacak aliran dana dengan membaca transaksi demi transaksi (Dasar Penelusuran On-Chain). Dari jalur AI: <b>agen</b> adalah model yang memutuskan langkah, lalu memanggil <b>alat</b> — misalnya API — untuk mengambil data (<a href="#/lesson/ai-agen-1">Agen AI dari Nol</a>).
</div>

<h3>Kenapa butuh AI?</h3>
<p>Blockchain besar mencatat ratusan ribu sampai jutaan transaksi setiap hari. Datanya terbuka, tapi terlalu banyak untuk dibaca manusia satu per satu. AI membantu di dua tempat: <b>menerjemahkan pertanyaan</b> dalam bahasa sehari-hari menjadi kueri atau panggilan API, dan <b>merangkum hasilnya</b> menjadi penjelasan yang bisa dipahami.</p>

<h3>Dari mana datanya</h3>
<table class="tbl">
  <tr><th>Sumber</th><th>Contoh</th><th>Cocok untuk</th></tr>
  <tr><td><b>API block explorer</b></td><td>mempool.space (Bitcoin), Etherscan (Ethereum)</td><td>Blok, transaksi, saldo, dan biaya terbaru</td></tr>
  <tr><td><b>Node RPC</b></td><td>Penyedia RPC atau node sendiri</td><td>Membaca langsung dari jaringan, termasuk memanggil fungsi kontrak</td></tr>
  <tr><td><b>Data terindeks + SQL</b></td><td>Dune, The Graph</td><td>Pertanyaan besar: "berapa total transfer USDC bulan ini?"</td></tr>
  <tr><td><b>Platform berlabel</b></td><td>Nansen, Arkham (sebagian berbayar)</td><td>Alamat yang sudah diberi label, mis. "dompet bursa X"</td></tr>
</table>

<h3>Pembagian kerja yang benar</h3>
<div data-diagram="pipeline" data-stages="Pertanyaan::bahasa sehari-hari|AI menerjemahkan::jadi kueri atau panggilan API|Alat mengambil &amp; menghitung::angka pasti dari data|AI menjelaskan::dengan menyebut sumbernya|Manusia memeriksa::2–3 angka dicek ulang" data-caption="Angka berasal dari data dan kode; AI menerjemahkan dan menjelaskan"></div>
<div class="callout warn">
<b>Aturan emas: jangan pernah meminta AI "mengingat" data on-chain.</b> Model bisa mengarang alamat dompet, hash transaksi, dan angka yang terdengar meyakinkan. Berikan datanya, minta ia menunjukkan hitungan atau kodenya, lalu periksa.
</div>

<h3>Coba sendiri — data Bitcoin sungguhan</h3>
<div data-demo="analis-onchain"></div>

<h3>Contoh: pertanyaan menjadi SQL</h3>
<p>Platform seperti Dune menyimpan data blockchain dalam tabel yang bisa ditanya dengan SQL. AI cukup pandai menulis SQL, misalnya untuk pertanyaan "Berapa transfer USDC di atas 1 juta dolar di Ethereum kemarin?":</p>
<pre class="code">SELECT COUNT(*) AS jumlah, SUM(amount) AS total
FROM transfer_token                      -- nama tabel contoh
WHERE blockchain = 'ethereum'
  AND symbol = 'USDC'
  AND amount > 1000000
  AND block_time >= CURRENT_DATE - INTERVAL '1' DAY
  AND block_time &lt; CURRENT_DATE</pre>
<p>Sebelum memercayai hasilnya, periksa kuerinya seperti memeriksa pekerjaan orang lain: Apakah jaringannya benar? Apakah rentang waktunya benar — dan dalam zona waktu apa (biasanya UTC)? Apakah kolom <i>amount</i> sudah dalam USDC, atau masih dalam satuan terkecil?</p>

<h3>Kesalahan AI yang paling sering dalam analisis on-chain</h3>
<table class="tbl">
  <tr><th>Kesalahan</th><th>Contoh</th></tr>
  <tr><td><b>Satuan &amp; desimal</b></td><td>USDC punya 6 desimal: angka mentah 2.500.000.000 berarti 2.500 USDC, bukan 2,5 miliar. ETH punya 18 desimal (wei)</td></tr>
  <tr><td><b>Mengarang data</b></td><td>Menyebut hash transaksi atau alamat yang tidak pernah ada</td></tr>
  <tr><td><b>Salah label</b></td><td>Menganggap dompet bursa sebagai satu orang "paus" — padahal isinya dana ribuan pengguna</td></tr>
  <tr><td><b>Korelasi dianggap kepemilikan</b></td><td>Dua alamat sering bertransaksi belum tentu milik orang yang sama</td></tr>
  <tr><td><b>Data basi &amp; zona waktu</b></td><td>"Kemarin" menurut UTC berbeda dengan WIB</td></tr>
</table>

<h3>Latihan langsung: eksplorasi data dengan AI</h3>
<ol>
  <li><b>Pilih satu pertanyaan yang sempit</b>, misalnya "Berapa biaya rata-rata transaksi Bitcoin minggu ini?"</li>
  <li><b>Ambil datanya sendiri</b> — dari API atau ekspor CSV block explorer.</li>
  <li><b>Berikan data itu ke AI</b>, minta ia menulis kode atau langkah hitungannya, bukan langsung jawabannya.</li>
  <li><b>Cek ulang dua atau tiga angka</b> secara manual di block explorer.</li>
  <li><b>Tulis kesimpulan beserta sumbernya</b>, termasuk keterbatasannya.</li>
</ol>
<p>Data on-chain memang terbuka, tapi bukan berarti boleh dipakai untuk membongkar identitas orang. Batas etikanya dibahas di pelajaran berikutnya.</p>
`,
          keyPoints: [
            "AI membantu menerjemahkan pertanyaan menjadi kueri atau panggilan API, lalu menjelaskan hasilnya.",
            "Sumber data: API block explorer, node RPC, data terindeks + SQL (Dune, The Graph), dan platform berlabel.",
            "Aturan emas: angka diambil dan dihitung oleh alat; jangan meminta AI mengingat data on-chain.",
            "Periksa kueri buatan AI: jaringan, rentang waktu dan zona waktunya, serta satuan dan desimal.",
            "USDC punya 6 desimal dan ETH 18 desimal — salah desimal adalah kesalahan paling umum."
          ],
          practice: [
            { type: "number", q: "Kolom amount mentah sebuah transfer USDC berisi 2500000000. Berapa USDC sebenarnya? (USDC punya 6 desimal)", answer: 2500, tol: 0.01, unit: "USDC", hint: "Bagi dengan 10 pangkat 6.", solution: "2.500.000.000 ÷ 1.000.000 = 2.500 USDC." },
            { type: "number", q: "Dari 15 blok, total imbalan penambang 47,05 BTC dan total biaya transaksi 0,175 BTC. Berapa persen imbalan yang berasal dari biaya? (2 desimal)", answer: 0.37, tol: 0.01, unit: "%", hint: "Biaya ÷ imbalan × 100%.", solution: "0,175 ÷ 47,05 × 100% ≈ 0,37%." }
          ],
          quiz: [
            {
              q: "Kenapa AI tidak boleh diminta 'mengingat' data on-chain seperti saldo atau hash transaksi?",
              options: [
                "Model bisa mengarang angka dan alamat yang meyakinkan",
                "Data on-chain dilarang dibaca oleh model AI mana pun",
                "Model AI hanya bisa membaca data milik Bitcoin",
                "Jawaban AI selalu lebih lambat dari block explorer"
              ],
              answer: 0,
              explain: "Model menebak dari pola; data yang benar harus diambil langsung dari sumbernya."
            },
            {
              q: "AI menulis kueri yang menghasilkan 'transfer USDC senilai 2,5 miliar'. Apa yang perlu diperiksa dulu?",
              options: [
                "Apakah angkanya masih dalam satuan terkecil (6 desimal)",
                "Apakah kuerinya ditulis dengan huruf kapital semua",
                "Apakah AI yang dipakai adalah model paling baru",
                "Apakah transfer itu terjadi pada hari kerja"
              ],
              answer: 0,
              explain: "Angka mentah USDC harus dibagi 1.000.000; tanpa itu hasilnya sejuta kali terlalu besar."
            },
            {
              q: "Pembagian kerja yang tepat antara AI dan alat dalam analisis on-chain?",
              options: [
                "Alat mengambil dan menghitung data; AI menerjemahkan dan menjelaskan",
                "AI mengingat semua data; alat hanya menampilkan grafiknya",
                "AI mengirim transaksi; alat menebak siapa pemilik alamatnya",
                "Alat menulis kesimpulan; AI mengambil data dari ingatannya"
              ],
              answer: 0,
              explain: "Angka harus berasal dari data dan kode yang bisa diperiksa; AI kuat di bahasa dan penjelasan."
            }
          ]
        },
        {
          id: "bc-for-6",
          title: "Hukum, Etika & Karier di Bidang Ini",
          duration: "13 menit",
          content: `
<p>Penutup modul ini bukan tentang teknik, melainkan tentang <b>batas</b> — apa yang boleh, apa yang tidak, dan bagaimana keahlian ini menjadi pekerjaan yang sah.</p>

<div data-diagram="matrix" data-cells="Melacak dana curian milik sendiri|Analis kepatuhan di bursa|Membongkar identitas orang lalu menyebarkannya|Riset akademik &amp; jurnalisme" data-xlabel="Makin jelas kewenangannya" data-ylabel="Makin besar dampaknya ke orang lain" data-caption="Dua sumbu yang menentukan: seberapa besar dampaknya, dan apakah kamu punya kewenangan"></div>

<h3>Yang legal dan yang tidak</h3>
<table class="tbl">
  <tr><th>Kegiatan</th><th>Status</th></tr>
  <tr><td>Membaca blockchain &amp; menganalisis pola</td><td class="ok-cell">Legal — datanya memang publik</td></tr>
  <tr><td>Melacak ke mana dana yang kamu kirim berpindah</td><td class="ok-cell">Legal</td></tr>
  <tr><td>Menerbitkan riset pola pencucian tanpa menyebut orang</td><td class="ok-cell">Legal &amp; bermanfaat</td></tr>
  <tr><td>Meminta data KYC ke bursa tanpa kewenangan</td><td class="bad-cell">Tidak bisa &amp; tidak boleh</td></tr>
  <tr><td>Menyebarkan identitas seseorang dari hasil analisismu</td><td class="bad-cell">Berpotensi melanggar UU PDP &amp; UU ITE</td></tr>
  <tr><td>Mengancam atau memeras berdasarkan temuanmu</td><td class="bad-cell">Pidana</td></tr>
</table>

<div class="callout warn">
<b>Bahaya salah tuduh.</b> Klasterisasi adalah <b>heuristik</b>, bukan bukti. Alamat bisa dikendalikan bursa, bisa milik korban lain, bisa hasil CoinJoin, bisa dipakai bersama.<br><br>
Menuduh orang berdasarkan analisis yang keliru bukan hanya merusak hidup orang tak bersalah — ia juga bisa berbalik menjadi perkara hukum bagi penuduhnya. Inilah kenapa langkah terakhir sengaja diserahkan kepada lembaga yang punya kewenangan dan prosedur pembuktian.
</div>

<h3>Kerangka di Indonesia</h3>
<table class="tbl">
  <tr><th>Lembaga / aturan</th><th>Perannya</th></tr>
  <tr><td><b>PPATK</b></td><td>Menerima &amp; menganalisis laporan transaksi keuangan mencurigakan</td></tr>
  <tr><td><b>OJK</b></td><td>Mengawasi perdagangan aset kripto dan penyelenggaranya</td></tr>
  <tr><td><b>Kepolisian</b></td><td>Menyidik dugaan tindak pidana</td></tr>
  <tr><td><b>UU PDP</b></td><td>Melindungi data pribadi — termasuk dari pembongkaran sepihak</td></tr>
  <tr><td><b>UU ITE</b></td><td>Mengatur pencemaran nama baik &amp; penyebaran informasi elektronik</td></tr>
</table>

<div class="callout">
<b>Catatan:</b> pembagian kewenangan dan aturan di sektor aset kripto Indonesia <b>berubah dari waktu ke waktu</b>. Selalu rujuk ketentuan terbaru dari OJK, PPATK, dan Kementerian Keuangan. Materi ini untuk edukasi, bukan nasihat hukum.
</div>

<h3>Ini keahlian yang dibayar</h3>
<p>Forensik blockchain adalah bidang kerja nyata yang sedang tumbuh. Beberapa jalur yang terbuka:</p>

<table class="tbl">
  <tr><th>Peran</th><th>Pekerjaannya</th></tr>
  <tr><td><b>Analis kepatuhan bursa</b></td><td>Menyaring transaksi mencurigakan, menjalankan kewajiban AML/KYC dan Travel Rule</td></tr>
  <tr><td><b>Analis forensik</b></td><td>Menelusuri dana untuk penegak hukum, korban peretasan, atau perusahaan asuransi</td></tr>
  <tr><td><b>Peneliti keamanan</b></td><td>Menganalisis peretasan protokol &amp; mengungkap pola penipuan</td></tr>
  <tr><td><b>Jurnalis data</b></td><td>Menyelidiki aliran dana untuk kepentingan publik</td></tr>
</table>

<div class="callout">
<b>Bekal yang sebenarnya dibutuhkan</b> ternyata sangat cocok dengan yang sudah kamu pelajari di platform ini:<br><br>
• Paham cara kerja blockchain &amp; dompet <i>(modul Fundamental &amp; Pendalaman)</i><br>
• Bisa mengolah data dalam jumlah besar — <b>pandas</b> <i>(modul Perkakas AI)</i><br>
• Paham pencucian uang &amp; pengendalian internal <i>(modul Audit Akuntansi)</i><br>
• Teliti, sabar, dan <b>berhati-hati dalam menyimpulkan</b><br><br>
Justru kombinasi tiga jalur inilah yang langka di pasar kerja — kebanyakan orang hanya menguasai satu.
</div>

<div class="callout warn">
<b>Penutup modul.</b> Pesan terpentingnya bukan "kripto bisa dilacak", melainkan: <b>privasi finansial itu rapuh, dan sebagian besar orang salah menilai seberapa rapuhnya</b>. Pahami itu untuk melindungi dirimu sendiri, dan hormati batasnya saat berhadapan dengan data orang lain.
</div>
`,
          keyPoints: [
            "Membaca & menganalisis blockchain itu legal karena datanya publik; meminta data KYC butuh kewenangan hukum.",
            "Menyebarkan identitas seseorang dari hasil analisis berpotensi melanggar UU PDP & UU ITE.",
            "Klasterisasi adalah heuristik, bukan bukti — alamat bisa milik bursa, korban lain, atau hasil CoinJoin.",
            "Salah tuduh merusak hidup orang tak bersalah dan bisa berbalik jadi perkara hukum bagi penuduhnya.",
            "Di Indonesia: PPATK (analisis transaksi mencurigakan), OJK (pengawas aset kripto), kepolisian (penyidikan).",
            "Jalur karier: analis kepatuhan bursa, analis forensik, peneliti keamanan, jurnalis data.",
            "Bekalnya memadukan tiga jalur di platform ini: blockchain, pengolahan data (pandas), dan audit/AML.",
            "Pesan inti: privasi finansial itu rapuh dan sering dinilai terlalu tinggi — lindungi dirimu, hormati batas orang lain.",
          ],
          quiz: [
            {
              q: "Manakah kegiatan yang TIDAK boleh dilakukan orang biasa?",
              options: [
                "Meminta data KYC seseorang kepada bursa berdasarkan hasil analisis pribadi",
                "Membaca riwayat transaksi sebuah alamat lewat block explorer publik",
                "Menelusuri ke mana dana yang dikirimnya sendiri berpindah tangan",
                "Menerbitkan riset pola pencucian dana tanpa menyebut nama siapa pun",
              ],
              answer: 0,
              explain:
                "Data KYC dilindungi dan hanya bisa diminta melalui proses hukum oleh pihak berwenang.",
            },
            {
              q: "Kenapa hasil klasterisasi tidak boleh dipakai untuk menuduh seseorang secara terbuka?",
              options: [
                "Klasterisasi hanya heuristik — alamatnya bisa milik bursa atau korban lain",
                "Hasil klasterisasi selalu terbukti keliru dalam setiap kasus yang nyata",
                "Data blockchain tidak boleh dibaca tanpa izin tertulis dari pemilik alamat",
                "Klasterisasi hanya boleh dilakukan perusahaan yang punya lisensi khusus",
              ],
              answer: 0,
              explain:
                "Heuristik memberi petunjuk kuat, tapi pembuktian membutuhkan prosedur dan kewenangan tersendiri.",
            },
            {
              q: "Lembaga mana di Indonesia yang menerima dan menganalisis laporan transaksi keuangan mencurigakan?",
              options: [
                "PPATK",
                "Bank Indonesia",
                "Kementerian Perdagangan",
                "Badan Pusat Statistik",
              ],
              answer: 0,
              explain:
                "PPATK adalah unit intelijen keuangan Indonesia; OJK mengawasi perdagangan aset kriptonya.",
            },
            {
              q: "Menurut pelajaran ini, apa pesan terpenting dari seluruh modul forensik?",
              options: [
                "Privasi finansial itu rapuh — pahami untuk melindungi diri, hormati batasnya",
                "Semua pengguna alat privasi kripto patut dicurigai sedang berbuat kejahatan",
                "Kripto sepenuhnya anonim sehingga aman dipakai untuk keperluan apa pun",
                "Siapa pun boleh menyelidiki lalu mengumumkan identitas pemilik alamat kripto",
              ],
              answer: 0,
              explain:
                "Modul ini mengajarkan cara kerjanya agar kamu bisa melindungi diri, bukan agar membongkar orang lain.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 14: REGULASI, PRIVASI, CBDC & PETA EKOSISTEM ---------------- */
    {
      id: "bc-pelengkap",
      level: "Pelengkap",
      title: "Regulasi, Privasi, CBDC & Peta Ekosistem",
      summary: "Crypto bertemu dunia nyata: regulasi & pajak, blockchain privat & koin privasi, uang digital bank sentral, stablecoin rupiah, tokenisasi aset nyata, dan peta seluruh kategori crypto.",
      lessons: [
        {
          id: "bc-app-4",
          title: "Regulasi & Pajak Aset Kripto",
          duration: "11 menit",
          content: `
<p>Crypto makin diatur pemerintah di seluruh dunia. Memahami regulasi & pajak penting agar tidak bermasalah secara hukum.</p>

<div data-diagram="pipeline" data-stages="Transaksi di bursa::pajak dipotong otomatis|Catat semuanya::tanggal, jumlah, harga|Laporkan di SPT::sebagai harta &amp; penghasilan|Simpan bukti::minimal 5 tahun" data-caption="Tarif pajak kripto berubah-ubah; kewajiban mencatat tidak pernah berubah"></div>


<h3>Di Indonesia (gambaran umum)</h3>
<ul>
  <li>Aset kripto <b>legal diperdagangkan</b> sebagai <b>aset keuangan digital</b> yang diawasi <b>OJK</b> sejak Januari 2025 (sebelumnya sebagai komoditas di bawah Bappebti), <b>bukan</b> alat pembayaran yang sah.</li>
  <li>Ada <b>pajak</b> atas transaksi kripto (mis. PPN & PPh final) yang biasanya dipotong lewat exchange terdaftar.</li>
  <li>Exchange wajib menerapkan <b>KYC</b> (verifikasi identitas) & <b>AML</b> (anti pencucian uang).</li>
</ul>

<div class="callout warn">
<b>Dampak:</b> mengabaikan pajak/regulasi bisa berujung <b>denda atau masalah hukum</b>. Perubahan regulasi juga bisa memengaruhi harga & legalitas suatu aset. Selalu pakai <b>exchange terdaftar/berizin</b> dan simpan catatan transaksimu.
</div>

<div class="callout">
<b>Catatan penting:</b> aturan & tarif berbeda antarnegara dan sering berubah. Untuk keputusan nyata, cek regulasi terbaru & konsultasikan dengan ahli pajak. Materi ini <b>edukasi, bukan saran finansial/hukum</b>.
</div>
`,
          keyPoints: [
            "Di Indonesia, kripto legal diperdagangkan sebagai aset keuangan digital (diawasi OJK sejak 2025), bukan alat pembayaran sah.",
            "Ada pajak transaksi kripto (PPN & PPh final), biasanya dipotong lewat exchange terdaftar.",
            "Exchange wajib menerapkan KYC & AML; gunakan exchange berizin & simpan catatan transaksi.",
            "Dampak: abaikan pajak/regulasi berisiko denda/hukum; aturan berbeda & berubah — konsultasikan ahli.",
          ],
          quiz: [
            {
              q: "Status aset kripto di Indonesia (gambaran umum)?",
              options: [
                "Legal diperdagangkan sebagai aset, tapi bukan alat pembayaran sah",
                "Legal sepenuhnya termasuk untuk pembayaran di toko dan restoran",
                "Dilarang diperdagangkan maupun dimiliki oleh perorangan",
                "Hanya boleh dimiliki lembaga keuangan yang sudah berizin",
              ],
              answer: 0,
              explain:
                "Kripto diperlakukan sebagai aset yang boleh diperdagangkan di bursa berizin, bukan mata uang resmi.",
            },
            {
              q: "Mengapa memakai exchange terdaftar/berizin itu penting?",
              options: [
                "Demi kepatuhan pajak, prosedur KYC/AML, dan perlindungan hukum",
                "Karena hanya bursa berizin yang menjamin harga selalu lebih murah",
                "Karena bursa berizin membebaskan penggunanya dari kewajiban pajak",
                "Karena dana di bursa berizin dijamin penuh negara bila hilang",
              ],
              answer: 0,
              explain:
                "Exchange berizin membantu kepatuhan & memberi perlindungan lebih dibanding yang ilegal.",
            },
          ],
        },
        {
          id: "bc-priv-1",
          title: "Publik, Privat & Privasi — Tiga Arti 'Private' di Crypto",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Bitcoin bersifat <b>pseudonim</b>, bukan anonim: nama tidak tercatat, tapi semua transaksi bisa ditelusuri siapa pun (modul Forensik). <b>Zero-knowledge proof</b> membuktikan sesuatu benar tanpa membuka datanya (modul Lanjutan).
</div>

<p>Kata "private" dipakai untuk beberapa hal yang sangat berbeda di dunia crypto. Mencampuradukkannya adalah sumber salah paham yang umum:</p>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Dibahas di</th></tr>
  <tr><td><b>Private key</b></td><td>Kunci rahasia dompetmu</td><td>Modul Fondasi Kriptografi</td></tr>
  <tr><td><b>Private blockchain</b></td><td>Blockchain yang hanya boleh diikuti pihak tertentu</td><td>Pelajaran ini</td></tr>
  <tr><td><b>Privacy coin</b></td><td>Koin yang menyembunyikan pengirim, penerima, atau jumlah</td><td>Pelajaran ini</td></tr>
  <tr><td><b>Private sale</b></td><td>Penjualan token ke investor tertentu sebelum dijual ke publik</td><td>Modul Ekonomi — Siklus Hidup Token</td></tr>
</table>

<h3>Bagian 1 — Blockchain publik vs privat</h3>
<table class="tbl">
  <tr><th></th><th>Publik (permissionless)</th><th>Privat / konsorsium (permissioned)</th></tr>
  <tr><td>Siapa boleh membaca</td><td>Siapa saja</td><td>Hanya anggota</td></tr>
  <tr><td>Siapa boleh ikut memvalidasi</td><td>Siapa saja yang memenuhi syarat (stake atau tambang)</td><td>Hanya peserta yang diundang, mis. beberapa bank</td></tr>
  <tr><td>Contoh</td><td>Bitcoin, Ethereum</td><td>Hyperledger Fabric, R3 Corda; banyak uji coba mata uang digital bank sentral</td></tr>
  <tr><td>Kelebihan</td><td>Tidak perlu memercayai siapa pun</td><td>Cepat, data bisnis tetap rahasia, ada pihak yang bertanggung jawab</td></tr>
  <tr><td>Kekurangan</td><td>Lambat, semua data terbuka</td><td>Kepercayaan kembali ke segelintir operator</td></tr>
</table>
<div class="callout">
<b>Pertanyaan jujur untuk blockchain privat:</b> kalau semua pesertanya sudah saling kenal dan saling percaya, apakah blockchain benar-benar diperlukan? Sering kali basis data bersama dengan catatan bertanda tangan digital sudah cukup. Blockchain privat masuk akal ketika beberapa organisasi yang <b>tidak sepenuhnya saling percaya</b> perlu memegang catatan bersama yang tidak bisa diubah diam-diam oleh salah satu pihak.
</div>

<h3>Bagian 2 — Koin privasi</h3>
<p>Di Bitcoin, siapa pun bisa melihat bahwa alamat A mengirim 0,5 BTC ke alamat B. Koin privasi dirancang agar hal itu tidak terlihat:</p>
<table class="tbl">
  <tr><th>Koin</th><th>Cara menyembunyikan</th></tr>
  <tr><td><b>Monero</b></td><td><i>Ring signature</i> mencampur tanda tangan pengirim asli dengan beberapa "umpan", sehingga pengirimnya tidak bisa dipastikan; <i>stealth address</i> membuat alamat sekali pakai untuk penerima; jumlahnya juga disembunyikan. Privasi aktif untuk semua transaksi.</td></tr>
  <tr><td><b>Zcash</b></td><td>Memakai zero-knowledge proof: jaringan bisa memastikan transaksi sah tanpa melihat pengirim, penerima, dan jumlahnya. Privasinya <b>pilihan</b> — ada alamat terbuka dan alamat terlindung.</td></tr>
</table>
<div class="callout warn">
<b>Privasi dan aturan.</b> Privasi keuangan adalah kebutuhan wajar — kamu pun tidak ingin gaji dan belanjamu terlihat semua orang. Tapi aturan anti pencucian uang mewajibkan bursa mengenali penggunanya, sehingga di sejumlah negara bursa menghapus koin privasi dari daftar perdagangannya. Di Indonesia, pengawasan perdagangan aset kripto berpindah dari Bappebti ke OJK pada Januari 2025, dan hanya aset dalam daftar resmi yang boleh diperdagangkan di bursa berizin — periksa daftar terbarunya sebelum bertransaksi.
</div>
`,
          keyPoints: [
            "\"Private\" punya beberapa arti: private key, private blockchain, privacy coin, dan private sale.",
            "Blockchain publik terbuka untuk siapa saja; blockchain privat hanya untuk peserta yang diundang dan lebih cepat, tapi kepercayaan kembali ke operator.",
            "Blockchain privat masuk akal bila beberapa organisasi yang tidak sepenuhnya saling percaya perlu catatan bersama.",
            "Monero menyembunyikan pengirim, penerima, dan jumlah untuk semua transaksi; Zcash memakai zero-knowledge proof dengan privasi pilihan.",
            "Aturan anti pencucian uang membuat koin privasi dihapus dari banyak bursa; di Indonesia pengawasan aset kripto kini di OJK."
          ],
          practice: [
            { type: "choice", q: "Lima bank ingin mencatat transfer antarbank bersama tanpa membuka datanya ke publik. Jenis blockchain yang paling cocok?", options: ["Blockchain publik seperti Bitcoin", "Blockchain privat / konsorsium", "Koin privasi", "Tidak bisa memakai blockchain"], answer: 1, hint: "Pesertanya terbatas dan saling dikenal.", solution: "Blockchain konsorsium: hanya bank peserta yang membaca dan memvalidasi." }
          ],
          quiz: [
            {
              q: "Apa ciri utama blockchain privat (permissioned)?",
              options: [
                "Hanya peserta yang diundang yang boleh membaca dan memvalidasi",
                "Seluruh transaksinya otomatis disembunyikan dari semua peserta",
                "Pemiliknya tidak perlu memakai private key untuk bertransaksi",
                "Siapa pun boleh memvalidasi asal memakai koin privasi"
              ],
              answer: 0,
              explain: "Blockchain privat membatasi peserta. Menyembunyikan transaksi dari publik adalah urusan koin privasi."
            },
            {
              q: "Bagaimana Monero menyembunyikan pengirim sebuah transaksi?",
              options: [
                "Mencampur tanda tangan asli dengan beberapa umpan",
                "Mengirim transaksi lewat bank agar tidak tercatat",
                "Menghapus transaksi dari blok setelah sehari berlalu",
                "Memakai satu alamat yang sama untuk semua pengguna"
              ],
              answer: 0,
              explain: "Ring signature membuat pengirim asli tidak bisa dibedakan dari beberapa calon lain."
            },
            {
              q: "Kapan blockchain privat lebih masuk akal daripada basis data biasa?",
              options: [
                "Saat beberapa organisasi yang tidak saling percaya berbagi catatan",
                "Saat satu perusahaan ingin menyimpan data pelanggannya sendiri",
                "Saat datanya sangat besar seperti video dan foto resolusi tinggi",
                "Saat semua peserta sudah saling percaya sepenuhnya satu sama lain"
              ],
              answer: 0,
              explain: "Kalau semua pihak sudah saling percaya, basis data bersama biasanya cukup dan lebih sederhana."
            }
          ]
        },
        {
          id: "bc-pl-1",
          title: "CBDC & Rupiah Digital — Uang Bank Sentral di Era Digital",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Saldo rekening bankmu adalah <b>utang bank umum kepadamu</b>. Saat kamu transfer ke bank lain, utang antarbank itu diselesaikan di rekening giro masing-masing bank di <b>Bank Indonesia</b> (<a href="#/lesson/acc-bayar-1">Bagaimana Uang Berpindah Antarbank</a>, jalur Akuntansi). <b>Stablecoin</b> seperti USDC adalah token yang diterbitkan perusahaan swasta dan dijaga setara 1 dolar (<a href="#/lesson/bc-app-2">Stablecoin</a>).
</div>

<h3>Pertanyaan kuncinya: siapa yang berutang kepadamu?</h3>
<p>Semua "uang digital" tampak sama di layar ponsel. Bedanya baru terlihat saat ditanya: kalau terjadi masalah, siapa yang wajib membayar?</p>
<table class="tbl">
  <tr><th>Bentuk uang</th><th>Yang berutang kepadamu</th><th>Kalau penerbitnya bangkrut</th></tr>
  <tr><td>Uang kertas &amp; logam</td><td><b>Bank Indonesia</b></td><td>Praktis tidak mungkin</td></tr>
  <tr><td>Saldo rekening bank</td><td>Bank umum</td><td>Dijamin LPS sampai batas tertentu</td></tr>
  <tr><td>Saldo dompet digital</td><td>Perusahaan penerbitnya</td><td>Bergantung pada dana yang dipisahkan penerbit</td></tr>
  <tr><td>Stablecoin</td><td>Perusahaan swasta penerbitnya</td><td>Bergantung pada cadangannya</td></tr>
  <tr><td>Bitcoin</td><td>Tidak ada siapa pun</td><td>Tidak berlaku — tapi harganya naik-turun bebas</td></tr>
  <tr><td class="ok-cell"><b>Rupiah Digital</b></td><td class="ok-cell"><b>Bank Indonesia</b></td><td class="ok-cell">Sama amannya dengan uang kertas</td></tr>
</table>
<p>Di antara semua uang digital yang kamu pakai sehari-hari, belum ada satu pun yang merupakan utang langsung bank sentral. Hanya uang tunai yang begitu. <b>CBDC</b> mengisi kekosongan itu.</p>

<h3>Apa itu CBDC?</h3>
<div class="callout">
<b>CBDC</b> (<i>Central Bank Digital Currency</i>) = <b>uang resmi negara dalam bentuk digital, yang diterbitkan langsung oleh bank sentral</b>. Nilainya selalu sama dengan uang kertasnya: Rp1 digital = Rp1 tunai.
</div>
<p>Di Indonesia, dasar hukumnya sudah ada. <b>UU P2SK (2023)</b> menetapkan bahwa rupiah terdiri atas <b>rupiah kertas, rupiah logam, dan rupiah digital</b>. Rupiah Digital adalah <b>kewajiban moneter Bank Indonesia</b>, berlaku sebagai alat pembayaran yang sah, dan hanya BI yang berwenang menerbitkan serta mengelolanya.</p>
<div data-diagram="vs" data-left="CBDC::Diterbitkan bank sentral::Terpusat, nilai tetap" data-right="CRYPTO::Tanpa penerbit pusat::Terdesentralisasi, harga bebas" data-caption="CBDC bukan crypto milik pemerintah"></div>
<p>CBDC boleh saja memakai teknologi yang mirip blockchain, tapi <b>buku catatannya dipegang bank sentral</b>. Siapa yang boleh ikut mencatat, dan aturan apa yang berlaku, ditentukan BI — kebalikan dari semangat Bitcoin.</p>

<h3>Dua jenis: wholesale dan retail</h3>
<table class="tbl">
  <tr><th></th><th>Wholesale</th><th>Retail</th></tr>
  <tr><td>Dipakai oleh</td><td>Bank dan lembaga keuangan</td><td>Masyarakat umum</td></tr>
  <tr><td>Gunanya</td><td>Penyelesaian antarbank, jual-beli surat berharga</td><td>Belanja dan menyimpan uang, seperti uang tunai di ponsel</td></tr>
  <tr><td>Di Indonesia disebut</td><td>w-Rupiah Digital</td><td>r-Rupiah Digital</td></tr>
</table>
<p>Rupiah Digital dirancang <b>dua tingkat</b>: BI menerbitkannya ke bank dan lembaga tertentu, lalu merekalah yang menyalurkannya ke masyarakat. Dengan cara ini bank umum tetap berperan, dan BI tidak perlu melayani ratusan juta nasabah sendiri.</p>
<div data-diagram="flow" data-steps="Bank Indonesia menerbitkan|Bank &amp; lembaga peserta (wholesale)|Masyarakat (retail, tahap akhir)" data-caption="Model dua tingkat Rupiah Digital"></div>

<h3>Proyek Garuda: dari kertas putih sampai uji coba</h3>
<p><b>Proyek Garuda</b> adalah payung pengembangan Rupiah Digital oleh Bank Indonesia. Desainnya dibagi tiga tahap, dimulai dari yang paling sempit:</p>
<table class="tbl">
  <tr><th>Tahap</th><th>Isinya</th></tr>
  <tr><td><b>Immediate state</b></td><td>w-Rupiah Digital dasar: penerbitan, pemusnahan, dan transfer antarpeserta</td></tr>
  <tr><td><b>Intermediate state</b></td><td>Wholesale diperluas ke operasi moneter dan transaksi pasar keuangan</td></tr>
  <tr><td><b>End state</b></td><td>Wholesale dan retail diuji terpadu dari ujung ke ujung</td></tr>
</table>
<table class="tbl">
  <tr><th>Waktu</th><th>Perkembangan</th></tr>
  <tr><td>November 2022</td><td>BI menerbitkan <i>white paper</i> Proyek Garuda</td></tr>
  <tr><td>2023</td><td>Dokumen konsultasi dan masukan publik; UU P2SK mengakui rupiah digital</td></tr>
  <tr><td>2024</td><td>Uji konsep tahap pertama selesai: teknologi buku catatan terdistribusi dinilai memenuhi kebutuhan bisnis dan teknis untuk wholesale</td></tr>
  <tr><td>2026</td><td>Uji coba berlanjut, termasuk rencana <b>surat berharga negara (SBN) dalam bentuk token</b> yang diselesaikan dengan Rupiah Digital, serta kerja sama lintas negara</td></tr>
  <tr><td>Retail untuk masyarakat</td><td><b>Belum ada tanggal peluncuran</b></td></tr>
</table>

<h3>Kalau BI-FAST sudah cepat, untuk apa Rupiah Digital?</h3>
<p>Pertanyaan yang adil: transfer rupiah sudah seketika dan murah. Alasan utamanya justru bukan untuk belanja sehari-hari:</p>
<ul>
  <li><b>Tukar-menukar serentak.</b> Saat bank membeli SBN bertoken, token SBN dan Rupiah Digital bisa berpindah dalam <b>satu transaksi yang sama</b> — keduanya terjadi atau keduanya batal. Tidak ada lagi risiko satu pihak sudah menyerahkan barang tapi pihak lain belum membayar.</li>
  <li><b>Kedaulatan.</b> Kalau suatu hari masyarakat dan bisnis lebih banyak memakai stablecoin dolar buatan perusahaan asing, kemampuan BI menjaga nilai rupiah dan mengatur suku bunga melemah. Rupiah Digital adalah jawaban versi negara.</li>
  <li><b>Uang yang bisa diprogram.</b> Aturan bisa ditanam pada uangnya, misalnya bantuan yang hanya bisa dipakai untuk keperluan tertentu. Ini kekuatan sekaligus sumber kekhawatiran.</li>
  <li><b>Lintas negara.</b> Bank sentral di berbagai negara sedang menguji cara menghubungkan CBDC mereka agar transfer antarnegara tidak perlu rantai bank koresponden yang panjang.</li>
</ul>

<h3>Manfaat dan kekhawatiran</h3>
<table class="tbl">
  <tr><th>Potensi manfaat</th><th>Kekhawatiran</th></tr>
  <tr><td>Penyelesaian antarbank dan surat berharga lebih efisien</td><td><b>Privasi</b>: transaksi berpotensi lebih mudah dipantau</td></tr>
  <tr><td>Uang bank sentral yang aman, tanpa risiko penerbit bangkrut</td><td><b>Kendali</b>: uang yang bisa diprogram juga bisa dibatasi</td></tr>
  <tr><td>Bantuan sosial bisa lebih tepat sasaran</td><td><b>Pelarian dana dari bank</b>: saat krisis, orang bisa memindahkan simpanan besar-besaran ke CBDC — karena itu banyak bank sentral mempertimbangkan batas saldo</td></tr>
  <tr><td>Alternatif resmi bagi stablecoin swasta</td><td>Biaya dan risiko keamanan sistem baru berskala nasional</td></tr>
</table>

<h3>Bagaimana dengan negara lain?</h3>
<table class="tbl">
  <tr><th>Negara</th><th>Keadaan</th></tr>
  <tr><td>Bahama, Nigeria, Jamaika</td><td>Sudah meluncurkan CBDC retail (2020–2022) — tapi pemakaiannya masih rendah</td></tr>
  <tr><td>Tiongkok</td><td>Uji coba e-CNY berskala sangat besar</td></tr>
  <tr><td>Uni Eropa</td><td>Sedang menyiapkan euro digital</td></tr>
  <tr><td>Amerika Serikat</td><td>Justru melarang lembaga federalnya mengembangkan CBDC lewat perintah eksekutif Januari 2025, terutama karena alasan privasi</td></tr>
</table>
<p>Lebih dari 130 negara sedang menjajaki CBDC, tapi hanya segelintir yang benar-benar meluncurkannya ke masyarakat. Pelajarannya: membuat teknologinya relatif mudah; meyakinkan orang untuk memakainya — ketika uang tunai, rekening bank, dan dompet digital sudah nyaman — jauh lebih sulit.</p>
<div class="callout warn">
<b>Status per Oktober 2026.</b> Perkembangan CBDC bergerak cepat. Untuk keadaan terbaru Rupiah Digital, periksa halaman resmi Bank Indonesia di bi.go.id.
</div>
`,
          keyPoints: [
            "CBDC = uang resmi negara dalam bentuk digital yang menjadi utang langsung bank sentral; Rp1 digital = Rp1 tunai.",
            "UU P2SK 2023: rupiah terdiri atas rupiah kertas, logam, dan digital; hanya BI yang menerbitkan dan mengelolanya.",
            "CBDC bukan crypto: teknologinya bisa mirip blockchain, tapi buku catatannya dikendalikan bank sentral.",
            "Wholesale untuk antarbank, retail untuk masyarakat; Rupiah Digital memakai model dua tingkat lewat bank.",
            "Proyek Garuda: immediate, intermediate, end state; per 2026 masih uji coba wholesale (termasuk SBN bertoken), retail belum dijadwalkan."
          ],
          practice: [
            { type: "choice", q: "Kamu menyimpan Rp100.000 dalam bentuk Rupiah Digital. Siapa yang berutang atas uang itu kepadamu?", options: ["Bank tempat kamu membuka rekening", "Bank Indonesia", "Perusahaan dompet digital", "Tidak ada siapa pun"], answer: 1, hint: "Rupiah Digital adalah kewajiban moneter siapa?", solution: "Bank Indonesia — sama seperti uang kertas, Rupiah Digital adalah kewajiban moneter BI." },
            { type: "choice", q: "Bank membeli SBN bertoken dan membayar dengan Rupiah Digital dalam satu transaksi yang sama. Apa manfaat utamanya?", options: ["Bunga SBN menjadi lebih tinggi", "Token dan pembayaran berpindah bersamaan — keduanya terjadi atau keduanya batal", "Transaksi tidak tercatat di mana pun", "Bank tidak perlu memiliki rekening di BI"], answer: 1, hint: "Risiko apa yang hilang bila serah-terima terjadi serentak?", solution: "Tidak ada lagi risiko satu pihak sudah menyerahkan SBN tapi pembayarannya belum diterima." }
          ],
          quiz: [
            {
              q: "Apa beda mendasar Rupiah Digital dengan saldo rekening bank?",
              options: [
                "Rupiah Digital utang Bank Indonesia; saldo rekening utang bank umum",
                "Rupiah Digital nilainya naik-turun seperti aset kripto pada umumnya",
                "Saldo rekening bank dijamin langsung oleh Bank Indonesia tanpa batas",
                "Rupiah Digital hanya boleh dipakai untuk transaksi ke luar negeri"
              ],
              answer: 0,
              explain: "Rupiah Digital adalah kewajiban moneter BI, sama seperti uang kertas; saldo rekening adalah utang bank umum."
            },
            {
              q: "Kenapa CBDC tidak bisa disebut crypto milik pemerintah?",
              options: [
                "Buku catatannya dikendalikan bank sentral, bukan dipegang bersama",
                "CBDC sama sekali tidak memakai teknologi komputer apa pun",
                "CBDC jumlahnya dibatasi permanen seperti jumlah Bitcoin",
                "CBDC hanya bisa ditambang oleh bank-bank milik negara"
              ],
              answer: 0,
              explain: "Teknologinya bisa mirip, tapi siapa yang mencatat dan aturan apa yang berlaku ditentukan bank sentral."
            },
            {
              q: "Rupiah Digital tahap pertama (immediate state) berfokus pada apa?",
              options: [
                "Wholesale: penerbitan, pemusnahan, dan transfer antarpeserta",
                "Retail: pembayaran belanja masyarakat di warung dan toko",
                "Pengganti seluruh uang kertas dan logam secepatnya",
                "Penambangan rupiah oleh masyarakat dengan komputer"
              ],
              answer: 0,
              explain: "Proyek Garuda dimulai dari sisi wholesale yang paling sempit, baru kemudian diperluas."
            },
            {
              q: "Kenapa banyak bank sentral mempertimbangkan batas saldo CBDC retail?",
              options: [
                "Agar simpanan tidak pindah besar-besaran dari bank saat krisis",
                "Agar biaya pembuatan uang digitalnya bisa ditekan serendah mungkin",
                "Karena jumlah CBDC yang bisa diterbitkan dibatasi teknologinya",
                "Karena CBDC berbunga lebih tinggi daripada tabungan biasa"
              ],
              answer: 0,
              explain: "Bila semua orang memindahkan simpanan ke uang bank sentral, bank kehilangan dana untuk disalurkan sebagai kredit."
            }
          ]
        },
        {
          id: "bc-idr-1",
          title: "Stablecoin Rupiah — Token Swasta yang Dipatok Rp1",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Stablecoin</b> seperti USDC dijamin cadangan uang sungguhan, sehingga nilainya bergantung pada kepercayaan kepada penerbitnya (<a href="#/lesson/bc-app-2">Stablecoin</a>). <b>Rupiah Digital</b> adalah utang langsung Bank Indonesia dan alat pembayaran yang sah (pelajaran sebelumnya). Aset kripto di Indonesia diawasi OJK, tapi <b>bukan alat pembayaran</b> (<a href="#/lesson/bc-app-4">Regulasi &amp; Pajak</a>).
</div>

<h3>Apa itu stablecoin rupiah?</h3>
<p><b>Stablecoin rupiah</b> adalah token di blockchain yang nilainya dipatok <b>1 token = Rp1</b>, diterbitkan oleh <b>perusahaan swasta</b>, dan dijamin cadangan rupiah sungguhan di rekening bank. Ini versi rupiah dari USDC.</p>

<h3>Siklus hidup sebuah token</h3>
<div data-diagram="pipeline" data-stages="Setor::Rp1 juta ke rekening penerbit|Cetak::1 juta token dikirim ke dompetmu|Beredar::dikirim, diperdagangkan, dipakai di DeFi|Tebus::token diserahkan kembali|Musnahkan::token dibakar, rupiah ditransfer ke rekeningmu" data-caption="Setiap token yang beredar seharusnya punya pasangan rupiah di rekening cadangan"></div>
<p>Patokan Rp1 bertahan selama dua janji ditepati: <b>cadangan selalu sebesar token yang beredar</b>, dan <b>penerbit selalu mau menukar kembali</b>. Kalau orang yakin keduanya benar, harga token di bursa akan selalu kembali ke sekitar Rp1 — siapa pun yang melihat harga Rp0,98 bisa membeli lalu menukarnya ke penerbit seharga Rp1.</p>

<h3>Yang sudah beredar</h3>
<table class="tbl">
  <tr><th>Token</th><th>Catatan</th></tr>
  <tr><td><b>IDRT</b></td><td>Salah satu yang tertua, beredar sejak 2019</td></tr>
  <tr><td><b>XIDR</b></td><td>Diterbitkan StraitsX dari Singapura</td></tr>
  <tr><td><b>IDRX</b></td><td>Dirancang untuk transaksi 24 jam dan bursa terdesentralisasi</td></tr>
  <tr><td><b>IDRP</b></td><td>Lulus <i>regulatory sandbox</i> OJK pada 11 Juni 2026. Awal Oktober 2026 beredar sekitar Rp46,7 miliar, sebagian besar di jaringan Kaia, dengan cadangan di rekening escrow BNI dan Bank Nobu</td></tr>
</table>
<p>Angka peredaran berubah setiap hari. Lulus sandbox juga <b>bukan izin penuh</b>: penerbit hanya boleh beroperasi terbatas sambil mengurus izin lengkapnya.</p>

<h3>Jangan tertukar dengan Rupiah Digital</h3>
<table class="tbl">
  <tr><th></th><th>Stablecoin rupiah</th><th>Rupiah Digital</th><th>Saldo dompet digital</th></tr>
  <tr><td>Penerbit</td><td>Perusahaan swasta</td><td><b>Bank Indonesia</b></td><td>Perusahaan penerbit</td></tr>
  <tr><td>Yang berutang kepadamu</td><td>Perusahaan itu</td><td>Bank Indonesia</td><td>Perusahaan itu</td></tr>
  <tr><td>Boleh dipakai membayar di Indonesia?</td><td class="bad-cell">Tidak</td><td class="ok-cell">Ya — alat pembayaran sah</td><td>Ya — uang elektronik berizin BI, isinya rupiah</td></tr>
  <tr><td>Berjalan di</td><td>Blockchain publik</td><td>Buku catatan yang dikendalikan BI</td><td>Server perusahaan</td></tr>
  <tr><td>Keadaan sekarang</td><td>Sudah beredar</td><td>Uji coba wholesale</td><td>Dipakai sehari-hari</td></tr>
</table>

<h3>Gunanya</h3>
<ul>
  <li><b>Jembatan</b> antara rupiah dan aset kripto, tanpa menunggu jam kerja bank.</li>
  <li><b>Kirim nilai 24 jam</b>, termasuk hari libur, ke alamat mana pun.</li>
  <li><b>DeFi dalam rupiah</b>: meminjam, meminjamkan, atau menukar tanpa harus melewati dolar.</li>
  <li><b>Lintas negara</b>: pasangan rupiah–dolar langsung di blockchain.</li>
</ul>

<h3>Status hukum (Oktober 2026)</h3>
<ul>
  <li>Sejak Januari 2025, aset kripto — termasuk stablecoin — diawasi <b>OJK</b> sebagai aset keuangan digital, dan inovasi barunya diuji lewat <i>regulatory sandbox</i>.</li>
  <li><b>Bank Indonesia</b> memegang sistem pembayaran. Pembayaran di Indonesia tetap wajib memakai rupiah resmi, jadi stablecoin rupiah bukan pengganti uang tunai atau transfer bank untuk membayar.</li>
  <li>Gubernur BI menyebut stablecoin swasta yang belum diatur jelas sebagai risiko bagi kedaulatan moneter — salah satu alasan BI mempercepat Rupiah Digital.</li>
  <li>OJK menjadwalkan forum khusus stablecoin pada 8 Oktober 2026. Aturan khusus stablecoin rupiah masih disusun, jadi keadaannya bisa cepat berubah.</li>
</ul>

<h3>Coba sendiri: apakah cadangannya cukup?</h3>
<div data-demo="cek-cadangan"></div>
<p>Perhatikan dua ukuran yang berbeda: <b>rasio cadangan</b> (cukupkah total cadangan?) dan <b>likuiditas</b> (cukupkah kas yang bisa langsung dibayarkan?). Stablecoin bisa lepas patokan walau cadangannya cukup di atas kertas, bila terlalu banyak orang menukar sekaligus. Ini mirip penarikan massal di bank — bedanya, tidak ada LPS yang menjamin.</p>

<h3>Daftar periksa sebelum memakai</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Kenapa penting</th></tr>
  <tr><td>Siapa penerbitnya, dan apa status izinnya di OJK?</td><td>Penerbit tanpa pengawasan bisa menghilang bersama cadangannya</td></tr>
  <tr><td>Apakah ada laporan cadangan berkala yang diperiksa pihak independen?</td><td>Tanpa bukti, "dijamin 1:1" hanya janji</td></tr>
  <tr><td>Bagaimana cara menukar kembali, berapa biaya dan batas minimumnya?</td><td>Kalau sulit ditebus, patokannya rapuh</td></tr>
  <tr><td>Bisakah penerbit membekukan token di alamat tertentu?</td><td>Hampir semua bisa — demi kepatuhan hukum, tapi itu juga kendali atas asetmu</td></tr>
  <tr><td>Di jaringan apa token itu beredar?</td><td>Mengirim ke jaringan yang salah bisa membuat token hilang</td></tr>
</table>
`,
          keyPoints: [
            "Stablecoin rupiah = token swasta yang dipatok 1 token = Rp1 dan dijamin cadangan rupiah di bank.",
            "Siklusnya: setor → cetak → beredar → tebus → musnahkan; token beredar seharusnya tidak melebihi cadangan.",
            "Contoh: IDRT, XIDR, IDRX, dan IDRP (lulus sandbox OJK Juni 2026); lulus sandbox bukan izin penuh.",
            "Bedanya dengan Rupiah Digital: penerbit swasta, bukan alat pembayaran sah, berjalan di blockchain publik.",
            "Periksa penerbit & izinnya, laporan cadangan, cara penebusan, kemampuan pembekuan, dan jaringannya — rasio cadangan saja tidak cukup tanpa kas yang likuid."
          ],
          practice: [
            { type: "number", q: "Token beredar Rp50 miliar, cadangan Rp48 miliar. Berapa persen rasio cadangannya?", answer: 96, tol: 0.05, unit: "%", hint: "Cadangan ÷ token beredar × 100%.", solution: "48 ÷ 50 = 96% — cadangan kurang Rp2 miliar, tidak semua pemegang bisa ditebus penuh." },
            { type: "number", q: "Token beredar Rp40 miliar; cadangan berupa kas Rp10 miliar dan obligasi Rp31 miliar. Bila 30% pemegang menukar sekaligus, berapa miliar kekurangan kas yang harus dicari dengan menjual obligasi?", answer: 2, tol: 0.05, unit: "miliar Rp", hint: "30% × 40, lalu kurangi kas yang ada.", solution: "30% × 40 = Rp12 miliar; kas hanya Rp10 miliar, jadi kurang Rp2 miliar walau total cadangan Rp41 miliar (102%)." }
          ],
          quiz: [
            {
              q: "Apa perbedaan terpenting stablecoin rupiah dengan Rupiah Digital?",
              options: [
                "Stablecoin rupiah diterbitkan swasta; Rupiah Digital oleh BI",
                "Stablecoin rupiah nilainya naik-turun bebas seperti Bitcoin",
                "Rupiah Digital berjalan di blockchain publik mana pun",
                "Keduanya sama-sama alat pembayaran sah di Indonesia"
              ],
              answer: 0,
              explain: "Rupiah Digital adalah utang BI dan alat pembayaran sah; stablecoin rupiah adalah utang perusahaan penerbitnya."
            },
            {
              q: "Harga stablecoin rupiah di bursa turun ke Rp0,98. Apa yang biasanya mengembalikannya ke sekitar Rp1?",
              options: [
                "Orang membelinya murah lalu menukarnya ke penerbit seharga Rp1",
                "Bank Indonesia otomatis membeli semua token yang dijual murah",
                "Penerbit menaikkan harga token secara manual setiap pagi",
                "Blockchain menolak transaksi di bawah harga patokan"
              ],
              answer: 0,
              explain: "Selama penerbit mau menebus seharga Rp1, selisih harga menjadi peluang yang menutup sendiri."
            },
            {
              q: "Cadangan sebuah stablecoin 102% dari token beredar, tapi hampir semuanya obligasi. Apa risikonya?",
              options: [
                "Bisa lepas patokan bila banyak yang menukar sekaligus",
                "Tidak ada risiko karena rasio cadangannya di atas 100%",
                "Token otomatis berubah menjadi Rupiah Digital",
                "Penerbit wajib membagikan bunga obligasi ke pemegang"
              ],
              answer: 0,
              explain: "Obligasi harus dijual dulu sebelum bisa dibayarkan; saat panik, kas yang kurang bisa memicu depeg."
            },
            {
              q: "IDRP lulus regulatory sandbox OJK. Apa artinya?",
              options: [
                "Boleh beroperasi terbatas sambil mengurus izin lengkap",
                "Sudah resmi menjadi alat pembayaran sah di Indonesia",
                "Cadangannya dijamin penuh oleh negara dan LPS",
                "Sudah diubah menjadi Rupiah Digital milik BI"
              ],
              answer: 0,
              explain: "Sandbox adalah uji coba di bawah pengawasan, bukan izin penuh dan bukan jaminan negara."
            }
          ]
        },
        {
          id: "bc-pl-2",
          title: "Tokenisasi Aset Nyata (RWA)",
          duration: "12 menit",
          content: `
<p>Salah satu tren paling menjanjikan — dan yang paling menyambung ke jalur <b>Akuntansi</b>: membawa <b>aset dunia nyata</b> ke blockchain.</p>

<div data-diagram="flow" data-steps="Aset Nyata|Kustodian &amp; Verifikasi|Terbitkan Token|Diperjualbelikan" data-caption="Alur tokenisasi aset nyata"></div>


<div class="callout">
<b>Tokenisasi RWA</b> (Real World Assets) = mengubah <b>kepemilikan aset nyata</b> (properti, obligasi, emas, tagihan) menjadi <b>token</b> di blockchain. Token itu mewakili hak atas aset tersebut.
</div>

<h3>Fundamental: kenapa ini berguna?</h3>
<table class="tbl">
  <tr><th>Masalah aset nyata</th><th>Yang ditawarkan tokenisasi</th></tr>
  <tr><td>Ruko Rp5 miliar — hanya orang kaya bisa beli</td><td><b>Kepemilikan pecahan</b>: dipecah jadi 5.000 token @Rp1 juta</td></tr>
  <tr><td>Menjual properti butuh berbulan-bulan</td><td><b>Likuiditas</b>: token bisa diperjualbelikan lebih cepat</td></tr>
  <tr><td>Penyelesaian transaksi lambat &amp; banyak perantara</td><td><b>Settlement cepat</b> &amp; biaya administrasi lebih rendah</td></tr>
  <tr><td>Pencatatan kepemilikan tersebar &amp; manual</td><td><b>Catatan tunggal</b> yang transparan &amp; dapat diaudit</td></tr>
</table>

<h3>Contoh yang sudah berjalan</h3>
<ul>
  <li><b>Obligasi &amp; surat utang</b> — banyak diminati institusi karena penyelesaiannya cepat.</li>
  <li><b>Emas</b> — token yang dijamin emas fisik di brankas.</li>
  <li><b>Properti</b> — kepemilikan pecahan atas bangunan.</li>
  <li><b>Tagihan/invoice</b> — pembiayaan usaha berbasis piutang.</li>
</ul>

<div class="callout warn">
<b>Tantangan terbesar — dan ini jujur:</b> blockchain bisa menjamin <b>tokennya</b>, tapi <b>tidak bisa menjamin aset fisiknya</b>. Pertanyaan kuncinya:
<ul>
  <li><b>Siapa yang menyimpan aset nyatanya</b> (kustodian), dan bisakah dipercaya?</li>
  <li>Kalau tokenmu hilang/dicuri, <b>apakah hukum mengakui</b> kepemilikanmu?</li>
  <li>Siapa yang <b>memverifikasi</b> bahwa emas/properti itu benar ada? (peran <b>oracle</b> &amp; auditor)</li>
</ul>
Artinya RWA <b>tetap membutuhkan kepercayaan pada pihak di dunia nyata</b> — tidak bisa sepenuhnya "trustless".
</div>

<div class="callout">
<b>Kaitan ke akuntansi:</b> tokenisasi pada dasarnya adalah <b>pencatatan kepemilikan</b> — inti akuntansi sejak awal. Bedanya, buku besarnya kini bersama, real-time, dan bisa diaudit siapa saja.
</div>
`,
          keyPoints: [
            "Tokenisasi RWA = mengubah kepemilikan aset nyata (properti, obligasi, emas, tagihan) jadi token di blockchain.",
            "Manfaat: kepemilikan pecahan, likuiditas, settlement cepat, & catatan kepemilikan transparan.",
            "Tantangan: blockchain menjamin token, bukan aset fisiknya — butuh kustodian tepercaya, kepastian hukum, & verifikasi (oracle/auditor).",
            "RWA tetap membutuhkan kepercayaan pada pihak dunia nyata; tidak sepenuhnya trustless.",
          ],
          practice: [
            { type: "number", q: "Ruko senilai Rp5 miliar ditokenisasi menjadi token @Rp1 juta. Berapa jumlah tokennya?", answer: 5000, tol: 1, unit: "token", hint: "Nilai aset ÷ nilai per token.", solution: "5.000.000.000 ÷ 1.000.000 = 5.000 token." },
            { type: "choice", q: "Apa tantangan terbesar tokenisasi aset nyata?", options: ["Blockchain terlalu cepat", "Blockchain tak bisa menjamin aset fisiknya — butuh kustodian & kepastian hukum", "Token terlalu murah", "Tidak ada tantangan"], answer: 1, hint: "Apa yang terjadi di luar blockchain?", solution: "Jaminan atas aset fisik berada di dunia nyata, bukan di kode." },
          ],
          quiz: [
            {
              q: "Apa manfaat utama 'kepemilikan pecahan' lewat tokenisasi?",
              options: [
                "Aset mahal bisa dimiliki bersama dalam pecahan kecil yang terjangkau",
                "Nilai asetnya dijamin naik karena jumlah pemiliknya bertambah banyak",
                "Pemilik pecahan dibebaskan dari kewajiban pajak atas aset tersebut",
                "Aset menjadi bisa dipindahkan secara fisik dengan lebih mudah",
              ],
              answer: 0,
              explain:
                "Memecah aset besar menjadi bagian kecil membuka akses bagi lebih banyak orang.",
            },
            {
              q: "Kenapa RWA tidak bisa sepenuhnya 'trustless'?",
              options: [
                "Aset fisiknya tetap butuh kustodian, kepastian hukum, dan verifikasi nyata",
                "Karena blockchain yang dipakai belum cukup cepat memprosesnya",
                "Karena nilai aset dunia nyata selalu berubah setiap harinya",
                "Karena regulator melarang aset fisik dicatat di blockchain publik",
              ],
              answer: 0,
              explain:
                "Kode tak bisa menjamin keberadaan & keamanan barang fisik di dunia nyata.",
            },
          ],
        },
        {
          id: "bc-peta-1",
          title: "Peta Kategori Crypto — Membaca Label L1, DeFi, GameFi, Meme & Lainnya",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Sampai di sini kamu sudah bertemu Layer 1 dan Layer 2, DEX, pinjaman DeFi, staking, stablecoin, oracle, bridge, NFT, koin privasi, CBDC, dan tokenisasi aset nyata. Situs data crypto mengelompokkan ribuan token ke dalam <b>kategori</b>. Pelajaran ini menyusun peta itu — dan cara membacanya dengan kritis.
</div>

<h3>Peta besarnya</h3>
<table class="tbl">
  <tr><th>Kategori</th><th>Isinya</th><th>Contoh</th><th>Dari mana nilainya diharapkan datang</th></tr>
  <tr><td><b>Layer 1</b></td><td>Blockchain dasar</td><td>BTC, ETH, SOL</td><td>Permintaan untuk membayar gas, staking, menyimpan nilai</td></tr>
  <tr><td><b>Layer 2</b></td><td>Jaringan di atas L1</td><td>Arbitrum, Optimism</td><td>Token tata kelola; sering <i>tidak</i> mendapat bagian dari biaya jaringan</td></tr>
  <tr><td><b>DeFi</b></td><td>DEX, pinjaman, derivatif</td><td>Uniswap, Aave</td><td>Fee protokol — bila memang dibagikan ke pemegang token</td></tr>
  <tr><td><b>Stablecoin</b></td><td>Token berpatokan dolar</td><td>USDT, USDC</td><td>Bukan untuk naik harga; penerbit untung dari bunga cadangan</td></tr>
  <tr><td><b>Liquid staking</b></td><td>Token bukti staking</td><td>stETH</td><td>Imbal hasil staking</td></tr>
  <tr><td><b>Oracle &amp; infrastruktur</b></td><td>Data harga, jembatan, interoperabilitas</td><td>Chainlink, Cosmos</td><td>Biaya layanan dari aplikasi lain</td></tr>
  <tr><td><b>GameFi &amp; NFT</b></td><td>Game berekonomi token, aset unik</td><td>Axie Infinity</td><td>Pemain yang membeli item — atau pemain baru</td></tr>
  <tr><td><b>Meme coin</b></td><td>Token berbasis lelucon dan komunitas</td><td>DOGE, SHIB, PEPE</td><td>Hampir murni perhatian dan spekulasi; tanpa arus kas</td></tr>
  <tr><td><b>Privacy</b></td><td>Koin privasi</td><td>Monero, Zcash</td><td>Permintaan akan transaksi rahasia</td></tr>
  <tr><td><b>RWA</b></td><td>Aset nyata yang ditokenisasi</td><td>Obligasi pemerintah AS dalam bentuk token</td><td>Imbal hasil aset aslinya</td></tr>
  <tr><td><b>DePIN</b></td><td>Jaringan fisik yang dibayar token: penyimpanan, nirkabel, sensor</td><td>Filecoin, Helium</td><td>Pembayaran pengguna layanan — bila penggunanya nyata</td></tr>
  <tr><td><b>Token AI</b></td><td>Proyek yang mengaitkan diri dengan AI</td><td>beragam</td><td>Sangat beragam; banyak yang hanya menumpang tren</td></tr>
  <tr><td><b>Token bursa</b></td><td>Token milik bursa terpusat</td><td>BNB</td><td>Diskon biaya, pembakaran token dari laba bursa</td></tr>
</table>

<h3>Tiga cara membaca peta ini dengan kritis</h3>
<table class="tbl">
  <tr><th>Kebiasaan</th><th>Kenapa</th></tr>
  <tr><td><b>Label bukan jaminan mutu</b></td><td>Kategori dibuat situs data untuk memudahkan pencarian. Proyek bagus dan proyek kosong bisa berada di label yang sama.</td></tr>
  <tr><td><b>Kategori bergiliran naik-turun</b></td><td>Pasar crypto bergerak dalam "narasi": DeFi, lalu NFT, lalu GameFi, lalu meme, lalu AI. Kategori yang sedang naik paling banyak dibicarakan — sering tepat sebelum turun.</td></tr>
  <tr><td><b>Tanyakan arus kasnya</b></td><td>Untuk setiap token: siapa yang membayar, untuk apa, dan apakah pemegang token ikut menerima? Kalau jawabannya "tidak ada", nilainya hanya bergantung pada pembeli berikutnya.</td></tr>
</table>

<div class="callout warn">
<b>Meme coin apa adanya.</b> Sebagian kecil meme coin bertahan bertahun-tahun karena komunitasnya besar. Tapi sebagian besar diluncurkan, dipompa, lalu ditinggal dalam hitungan hari — dan pembeli terakhirlah yang menanggung kerugiannya. Tidak ada laporan keuangan yang bisa dianalisis; harganya murni hasil perhatian. Edukasi, bukan saran investasi.
</div>
<p>Modul berikutnya, Ekonomi, memberimu alat untuk menjawab pertanyaan "dari mana nilainya" dengan angka: pendapatan protokol, dilusi, siklus hidup token, dan red flag.</p>
`,
          keyPoints: [
            "Kategori utama: L1, L2, DeFi, stablecoin, liquid staking, oracle/infrastruktur, GameFi/NFT, meme, privacy, RWA, DePIN, token AI, token bursa.",
            "Setiap kategori punya sumber nilai yang diharapkan berbeda — dari biaya gas, fee protokol, sampai murni perhatian.",
            "Label kategori bukan jaminan mutu; proyek bagus dan kosong bisa berlabel sama.",
            "Kategori bergiliran naik-turun mengikuti narasi; yang paling ramai dibicarakan sering sedang di puncak.",
            "Untuk setiap token tanyakan: siapa membayar, untuk apa, dan apakah pemegang token ikut menerima."
          ],
          practice: [
            { type: "choice", q: "Sebuah token tidak punya produk, tidak ada yang membayar biaya apa pun, dan harganya naik karena ramai di media sosial. Kategori mana yang paling menggambarkannya?", options: ["DeFi", "Meme coin", "Stablecoin", "RWA"], answer: 1, hint: "Dari mana nilainya datang?", solution: "Nilai murni dari perhatian dan spekulasi adalah ciri meme coin." }
          ],
          quiz: [
            {
              q: "Apa sumber nilai yang diharapkan dari token DePIN?",
              options: [
                "Pembayaran pengguna yang memakai layanan jaringan fisiknya",
                "Bunga dari cadangan dolar yang disimpan oleh penerbitnya",
                "Lelucon dan komunitas yang ramai di media sosial",
                "Biaya gas yang dibayar untuk memakai blockchain dasar"
              ],
              answer: 0,
              explain: "DePIN membayar penyedia infrastruktur fisik dengan token; nilainya sehat bila penggunanya nyata."
            },
            {
              q: "Kenapa label kategori di situs data crypto tidak bisa dijadikan penilaian mutu?",
              options: [
                "Label hanya pengelompokan; proyek bagus dan kosong bisa sama",
                "Label hanya diberikan kepada proyek yang sudah terbukti untung",
                "Label ditentukan oleh regulator setelah audit menyeluruh",
                "Label menunjukkan urutan harga dari yang tertinggi"
              ],
              answer: 0,
              explain: "Kategori memudahkan pencarian, bukan memberi peringkat kualitas."
            },
            {
              q: "Pertanyaan paling penting untuk menilai token dari kategori apa pun?",
              options: [
                "Siapa yang membayar, untuk apa, dan apakah pemegang token menerima",
                "Seberapa sering token itu dibicarakan di media sosial minggu ini",
                "Berapa banyak bursa yang sudah mendaftarkan token tersebut",
                "Seberapa jauh harganya sudah naik dalam satu bulan terakhir"
              ],
              answer: 0,
              explain: "Arus kas dan siapa yang menikmatinya membedakan nilai nyata dari spekulasi."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 15: EKONOMI PROTOKOL & MENILAI PROYEK ---------------- */
    {
      id: "bc-ekonomi",
      level: "Ekonomi",
      title: "Ekonomi Protokol & Menilai Proyek",
      summary: "Memakai kacamata akuntansi untuk crypto: pendapatan protokol, treasury DAO, dilusi token & real yield, siklus hidup token (private sale, vesting, unlock), airdrop & cara aman berburunya, NFT & GameFi beserta angkanya, serta moat & red flag.",
      lessons: [
        {
          id: "bc-ek-1",
          title: "Apakah Protokol Punya 'Laporan Keuangan'?",
          duration: "12 menit",
          content: `
<div class="callout ingat">
<b>Bekal dari jalur Akuntansi</b> — kalau belum mempelajarinya, cukup pahami ini dulu:<br>
<b>Laporan laba rugi</b>: pendapatan − beban = laba. Warung yang menjual kopi 300 juta dengan beban 260 juta berlaba 40 juta (<a href="#/lesson/acc-m-3">Laporan Laba Rugi</a>).<br>
<b>Free Cash Flow (FCF)</b> = kas dari kegiatan inti − belanja untuk aset jangka panjang; uang yang benar-benar bebas dipakai pemilik (<a href="#/lesson/acc-fund-2">Free Cash Flow</a>).
</div>

<p>Selama ini crypto sering dianggap "tak bisa dianalisis seperti bisnis". Sebagian benar — tapi <b>lebih banyak yang bisa</b> daripada yang orang kira. Mari pakai kacamata akuntansi.</p>

<div data-diagram="compare3" data-cols="Pendapatan::fee dari pengguna::seperti omzet|Beban::insentif token::seperti biaya pemasaran|Laba protokol::fee − insentif::sering ternyata negatif" data-caption="Protokol punya 'laporan keuangan' — hanya namanya berbeda"></div>


<h3>Fundamental: protokol juga menghasilkan uang</h3>
<p>Banyak protokol memungut <b>biaya (fee)</b> dari penggunanya — persis seperti perusahaan memungut harga dari pelanggan:</p>
<ul>
  <li><b>Blockchain L1/L2</b> → biaya transaksi (gas) dari pengguna.</li>
  <li><b>DEX</b> → biaya swap dari tiap pertukaran token.</li>
  <li><b>Protokol pinjaman</b> → selisih bunga peminjam &amp; pemberi pinjaman.</li>
</ul>

<div class="callout">
<b>Padanan istilahnya:</b>
<table class="tbl">
  <tr><th>Bisnis</th><th>Protokol crypto</th></tr>
  <tr><td>Pendapatan</td><td><b>Fee protokol</b> yang dibayar pengguna</td></tr>
  <tr><td>Beban</td><td>Insentif token, biaya keamanan/validator, hibah pengembang</td></tr>
  <tr><td>Kas perusahaan</td><td><b>Treasury</b> protokol/DAO</td></tr>
  <tr><td>Jumlah pelanggan</td><td>Alamat aktif, jumlah transaksi</td></tr>
  <tr><td>Ukuran bisnis</td><td>TVL (dana yang dikunci), volume transaksi</td></tr>
</table>
</div>

<h3>Keunggulan tak terduga: transparansi</h3>
<div class="callout">
<b>Justru lebih terbuka dari perusahaan biasa:</b> laporan keuangan perusahaan terbit 3 bulan sekali, sudah diolah, dan harus dipercaya. Data protokol tercatat <b>on-chain</b> — pendapatan fee, jumlah pengguna, dan pergerakan treasury bisa dilihat <b>siapa saja, real-time, terverifikasi</b>.
</div>

<div class="callout warn">
<b>Tapi hati-hati:</b> transparan bukan berarti mudah. Angka on-chain bisa <b>dipoles</b> — misalnya volume transaksi digelembungkan (<i>wash trading</i>) atau TVL naik karena insentif token sementara, bukan pemakaian tulus. Selalu tanya: <b>"apakah aktivitas ini akan tetap ada kalau insentifnya dihentikan?"</b>
</div>

<h3>Free Cash Flow versi protokol</h3>
<p>Ingat rumus <b>FCF</b> di jalur Akuntansi: arus kas operasi dikurangi belanja modal. Protokol punya padanannya, hanya beda nama:</p>

<table class="tbl">
  <tr><th>Istilah akuntansi</th><th>Padanannya di protokol</th></tr>
  <tr><td>Pendapatan</td><td><b>Fee</b> yang dibayar pengguna</td></tr>
  <tr><td>Beban operasi</td><td>Bagian fee untuk penyedia likuiditas / validator</td></tr>
  <tr><td><b>CapEx pemeliharaan</b></td><td><b>Emisi token</b> — insentif yang wajib terus dibayar agar likuiditas &amp; pengguna tidak kabur</td></tr>
  <tr><td>= FCF protokol</td><td><b>Fee bersih − emisi token</b></td></tr>
</table>

<div class="callout warn">
<b>Di sinilah banyak protokol terbongkar.</b> Sebuah protokol bisa membanggakan "pendapatan fee $50 juta setahun" — terdengar hebat. Tapi kalau pada tahun yang sama ia membagikan <b>token senilai $120 juta</b> sebagai insentif, maka <b>FCF-nya minus $70 juta</b>.<br><br>
Uangnya tidak keluar dari rekening bank, jadi tidak terasa. Tapi biayanya nyata: <b>ditanggung pemegang token lama</b> lewat pengenceran (dilusi). Ini persis seperti perusahaan yang terus menerbitkan saham baru untuk membiayai operasi — tanda bahaya yang kamu pelajari di materi <b>alokasi modal</b>.
</div>

<div class="callout">
<b>Uji paling jujur untuk sebuah protokol:</b><br><br>
<i>"Kalau emisi token dihentikan besok, apakah penggunanya bertahan?"</i><br><br>
Kalau <b>ya</b> → fee-nya nyata, protokol ini benar-benar menghasilkan kas bebas.<br>
Kalau <b>tidak</b> → yang selama ini dijual bukan layanan, melainkan <b>insentif</b>. Aktivitasnya akan menguap begitu subsidinya berhenti.
</div>
`,
          keyPoints: [
            "Banyak protokol menghasilkan pendapatan nyata berupa fee (gas L1/L2, biaya swap DEX, selisih bunga).",
            "Padanan: fee = pendapatan, insentif/hibah = beban, treasury = kas, alamat aktif = pelanggan, TVL = ukuran bisnis.",
            "Data on-chain justru lebih transparan & real-time daripada laporan keuangan perusahaan.",
            "Waspadai angka yang dipoles (wash trading, TVL karena insentif): tanya apakah aktivitas bertahan tanpa insentif.",
          ],
          quiz: [
            {
              q: "Apa padanan 'pendapatan' pada sebuah protokol crypto?",
              options: [
                "Fee yang dibayar pengguna, seperti biaya gas atau biaya penukaran",
                "Kenaikan harga token yang diterbitkan oleh protokol tersebut",
                "Jumlah total dana yang dikunci pengguna di dalam protokolnya",
                "Nilai token yang masih tersimpan di dalam kas protokol",
              ],
              answer: 0,
              explain: "Fee yang dipungut dari pengguna adalah pendapatan nyata protokol.",
            },
            {
              q: "Kenapa data on-chain punya keunggulan dibanding laporan keuangan perusahaan?",
              options: [
                "Terbuka, seketika, dan bisa diperiksa ulang oleh siapa saja",
                "Sudah diperiksa auditor independen sebelum ditayangkan ke publik",
                "Disusun mengikuti standar akuntansi yang berlaku internasional",
                "Hanya bisa diakses pemegang token sehingga lebih terjaga",
              ],
              answer: 0,
              explain:
                "On-chain memungkinkan verifikasi langsung tanpa menunggu laporan triwulanan.",
            },
          ],
        },
        {
          id: "bc-ek-2",
          title: "Alokasi Modal: Treasury DAO",
          duration: "12 menit",
          content: `
<div class="callout ingat">
<b>Bekal dari jalur Akuntansi</b> — kalau belum mempelajarinya, cukup pahami ini dulu:<br>
<b>Alokasi modal</b> = keputusan ke mana kas perusahaan dipakai. Pilihannya hanya lima: diinvestasikan lagi ke bisnis, membeli perusahaan lain, melunasi utang, membeli kembali saham sendiri (<i>buyback</i>, sehingga kepemilikan tiap lembar sisanya membesar), atau dibagikan sebagai dividen (<a href="#/lesson/acc-kual-1">Alokasi Modal</a>).<br>
<b>Treasury</b> = kas simpanan sebuah organisasi; di DAO, isinya biasanya token dan stablecoin.
</div>

<p>Protokol crypto menghadapi <b>pilihan yang sama persis</b> dengan perusahaan, hanya beda nama.</p>

<table class="tbl">
  <tr><th>Pilihan perusahaan</th><th>Padanannya di protokol</th></tr>
  <tr><td>Ekspansi (CapEx)</td><td><b>Danai pengembangan</b> protokol, fitur baru, keamanan</td></tr>
  <tr><td>R&amp;D &amp; iklan</td><td><b>Grants</b> ke developer &amp; insentif menarik pengguna</td></tr>
  <tr><td>Akuisisi (M&amp;A)</td><td>Akuisisi/merger protokol lain (jarang, berisiko)</td></tr>
  <tr><td><b>Share buyback</b></td><td><b>Buyback &amp; burn token</b> — beli token dengan pendapatan lalu bakar (pasokan berkurang)</td></tr>
  <tr><td><b>Dividen</b></td><td><b>Bagi fee ke staker/pemegang token</b> (real yield)</td></tr>
</table>

<div class="callout">
<b>Perbedaan penting:</b> di perusahaan, keputusan ini diambil <b>CEO &amp; direksi</b>. Di DAO, diputuskan lewat <b>voting pemegang token</b>. Lebih demokratis — tapi bisa lebih <b>lambat</b> dan rawan didominasi pemegang besar (<i>whale</i>).
</div>

<h3>Yang perlu dinilai dari sebuah treasury</h3>
<ul>
  <li><b>Berapa besar &amp; isinya apa?</b> Treasury yang isinya <b>token sendiri</b> jauh lebih rapuh daripada yang berisi stablecoin — kalau harga token jatuh, treasury ikut menguap.</li>
  <li><b>Runway</b> — berapa lama treasury bisa membiayai operasi? (Rumusnya sama dengan yang kamu pelajari: Kas ÷ pengeluaran bulanan.)</li>
  <li><b>Disiplin</b> — apakah dana dipakai untuk hal produktif, atau dibakar untuk insentif jangka pendek yang tak berbekas?</li>
</ul>

<div class="callout warn">
<b>Jebakan yang sama dengan buyback saham:</b> <i>buyback &amp; burn</i> hanya menambah nilai kalau didanai <b>pendapatan nyata</b>. Kalau dilakukan dengan menjual aset treasury atau saat token kemahalan, efeknya sama seperti buyback saham yang kemahalan — <b>menghancurkan nilai</b>.
</div>
`,
          keyPoints: [
            "Treasury DAO menghadapi 4 pilihan alokasi modal yang sama: pengembangan, grants/insentif, akuisisi, buyback-burn/bagi hasil.",
            "Buyback & burn token ≈ share buyback; bagi fee ke staker ≈ dividen.",
            "Keputusan lewat voting token: lebih demokratis tapi lebih lambat & rawan didominasi whale.",
            "Nilai treasury dari isinya (stablecoin lebih kokoh daripada token sendiri), runway, & disiplin penggunaannya.",
          ],
          practice: [
            { type: "choice", q: "Treasury sebuah DAO 90% berisi token miliknya sendiri. Apa risiko utamanya?", options: ["Tidak ada risiko", "Kalau harga token jatuh, nilai treasury ikut menguap saat paling dibutuhkan", "Pajaknya besar", "Terlalu aman"], answer: 1, hint: "Apa yang terjadi kalau harga token turun tajam?", solution: "Treasury berisi token sendiri sangat rapuh — nilainya jatuh bersamaan dengan krisis." },
            { type: "number", q: "Treasury berisi stablecoin senilai Rp120 miliar, pengeluaran Rp10 miliar/bulan. Berapa bulan runway-nya?", answer: 12, unit: "bulan", hint: "Runway = Kas ÷ pengeluaran bulanan.", solution: "120 ÷ 10 = 12 bulan." },
          ],
          quiz: [
            {
              q: "Apa padanan 'share buyback' di dunia protokol crypto?",
              options: [
                "Membeli kembali token dari pasar lalu membakarnya",
                "Membagikan token baru ke seluruh pemegang lama secara merata",
                "Mengunci token milik tim pendiri selama jangka waktu tertentu",
                "Menukar token lama dengan versi baru yang lebih efisien",
              ],
              answer: 0,
              explain: "Membeli & membakar token mengurangi pasokan, mirip buyback saham.",
            },
            {
              q: "Kenapa treasury yang berisi stablecoin lebih kokoh daripada yang berisi token sendiri?",
              options: [
                "Nilainya stabil, sedangkan token sendiri ikut anjlok saat harganya jatuh",
                "Stablecoin memberi bunga tetap sehingga kas otomatis bertambah",
                "Token sendiri tidak bisa dijual karena terkunci di dalam protokol",
                "Stablecoin dijamin pemerintah sehingga mustahil kehilangan nilai",
              ],
              answer: 0,
              explain:
                "Treasury token sendiri berkorelasi dengan krisisnya sendiri — rapuh saat paling dibutuhkan.",
            },
          ],
        },
        {
          id: "bc-ek-3",
          title: "Dilusi Token & 'Real Yield'",
          duration: "13 menit",
          content: `
<div class="callout ingat">
<b>Bekal dari jalur Akuntansi</b> — kalau belum mempelajarinya, cukup pahami ini dulu:<br>
<b>Dilusi</b> (pengenceran) terjadi saat saham baru dicetak. Misalkan perusahaan punya 100 lembar dan kamu memegang 10 — kamu memiliki <b>10%</b>. Kalau perusahaan mencetak 100 lembar baru untuk orang lain, kamu tetap memegang 10 lembar, tapi kini dari 200: kepemilikanmu tinggal <b>5%</b>. Laba yang sama dibagi ke lebih banyak lembar, sehingga bagian tiap lembar mengecil (<a href="#/lesson/acc-adv-0">Saham, EPS &amp; PER</a>).
</div>

<p>Ini salah satu analisis paling berguna — dan langsung memakai konsep akuntansi: <b>dilusi</b>.</p>

<div data-diagram="vs" data-left="REAL YIELD::Didanai fee pengguna::Berkelanjutan" data-right="EMISI TOKEN::Didanai cetak token baru::Mengencerkan (dilusi)" data-caption="Dari mana imbal hasil berasal?"></div>


<h3>Fundamental: emisi token = penerbitan saham baru</h3>
<div class="callout">
Ingat kriteria Piotroski <i>"tidak menerbitkan saham baru"</i>? Alasannya: saham baru <b>mengencerkan</b> kepemilikanmu. Di crypto, <b>emisi token</b> (mencetak token baru untuk hadiah/insentif) melakukan hal yang <b>persis sama</b> — porsi kepemilikanmu mengecil.
</div>

<h3>Imbal hasil 20%… dari mana uangnya?</h3>
<p>Banyak protokol menawarkan imbal hasil besar. Pertanyaan kuncinya: <b>dibayar dari mana?</b></p>
<table class="tbl">
  <tr><th>Sumber</th><th>Sebutan</th><th>Berkelanjutan?</th></tr>
  <tr><td>Dari <b>fee pengguna</b> yang nyata</td><td class="ok-cell"><b>Real yield</b></td><td>Ya — seperti dividen dari laba</td></tr>
  <tr><td>Dari <b>mencetak token baru</b></td><td>Emisi / inflasi</td><td>Tidak — kamu dibayar dengan pengenceran milikmu sendiri</td></tr>
</table>

<div class="callout warn">
<b>Analoginya:</b> perusahaan membagi "dividen" dengan cara <b>mencetak saham baru</b> lalu memberikannya padamu. Kelihatan dapat sesuatu, padahal porsi kepemilikanmu tergerus. Itulah yang terjadi pada imbal hasil berbasis emisi.
</div>

<h3>Coba sendiri — bedakan real yield vs emisi</h3>
<div data-demo="js-playground">// Apakah protokol ini benar-benar menghasilkan, atau hanya mencetak token?
const feeProtokolPerTahun = 40000000000;     // Rp40 miliar dari biaya pengguna
const nilaiEmisiTokenPerTahun = 65000000000; // Rp65 miliar token baru yang dibagikan

const bersih = feeProtokolPerTahun - nilaiEmisiTokenPerTahun;

console.log("Fee protokol : Rp" + feeProtokolPerTahun.toLocaleString("id-ID"));
console.log("Emisi token  : Rp" + nilaiEmisiTokenPerTahun.toLocaleString("id-ID"));
console.log("Hasil bersih : Rp" + bersih.toLocaleString("id-ID"));

if (bersih > 0) {
  console.log("REAL YIELD - imbal hasil didanai pendapatan nyata.");
} else {
  console.log("BUKAN real yield - imbal hasil didanai pencetakan token (dilusi).");
}
console.log("Coba ubah emisi jadi 20000000000, lalu jalankan lagi.");</div>

<div class="callout">
<b>Yang perlu diperiksa:</b> jadwal <b>vesting</b> (kapan token tim &amp; investor awal dibuka) dan <b>FDV</b> (nilai bila SEMUA token sudah beredar). Kalau baru 10% token yang beredar, pasokan besar menunggu di depan — tekanan jual di masa depan.
</div>
`,
          keyPoints: [
            "Emisi token = penerbitan saham baru: mengencerkan (dilusi) kepemilikanmu.",
            "Real yield = imbal hasil dari fee pengguna nyata (berkelanjutan); imbal hasil dari emisi = dibayar dengan dilusi.",
            "Uji: fee protokol vs nilai emisi token — kalau emisi lebih besar, itu bukan real yield.",
            "Periksa jadwal vesting & FDV: sedikit token beredar berarti ada tekanan pasokan di masa depan.",
          ],
          practice: [
            { type: "number", q: "Fee protokol Rp40 miliar/tahun, nilai emisi token Rp65 miliar/tahun. Berapa hasil bersihnya? (miliar, boleh negatif)", answer: -25, tol: 0.5, unit: "miliar", hint: "Fee − emisi.", solution: "40 − 65 = −25 miliar → bukan real yield." },
            { type: "choice", q: "Sebuah protokol membayar imbal hasil 30% dengan cara mencetak token baru. Ini disebut?", options: ["Real yield", "Imbal hasil berbasis emisi (dilusi) — tidak berkelanjutan", "Dividen", "Buyback"], answer: 1, hint: "Uangnya dari pendapatan nyata atau dari mencetak?", solution: "Dibayar dari pencetakan token = dilusi, bukan real yield." },
          ],
          quiz: [
            {
              q: "Emisi token baru dalam istilah akuntansi setara dengan?",
              options: [
                "Menerbitkan saham baru sehingga kepemilikan lama ikut terencerkan",
                "Mengambil pinjaman berbunga dari para pemegang token yang ada",
                "Membagikan dividen kepada seluruh pemegang token secara berkala",
                "Mencatat pendapatan baru yang masuk ke dalam kas protokol",
              ],
              answer: 0,
              explain: "Token baru menambah pasokan & mengencerkan porsi pemegang lama.",
            },
            {
              q: "Apa itu 'real yield'?",
              options: [
                "Imbal hasil yang dibiayai fee nyata pengguna, bukan cetakan token baru",
                "Imbal hasil yang sudah dikurangi pajak serta biaya penarikan dana",
                "Imbal hasil tertinggi yang pernah dicapai protokol itu sepanjang sejarah",
                "Imbal hasil yang dijamin tetap besarnya selama masa penguncian",
              ],
              answer: 0,
              explain:
                "Real yield berasal dari pendapatan nyata protokol, bukan dari inflasi token.",
            },
          ],
        },
        {
          id: "bc-tok-1",
          title: "Siklus Hidup Token — Seed, Private Sale, Vesting & Unlock",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>Dilusi</b> = token baru membuat porsi kepemilikan tiap token mengecil (pelajaran sebelumnya). <b>Kapitalisasi pasar</b> = harga × jumlah yang beredar (<a href="#/lesson/acc-adv-0">Saham, EPS &amp; PER</a>). Pelajaran ini menjawab: siapa yang memegang token sebuah proyek sebelum kamu, dan kapan mereka boleh menjualnya?
</div>

<h3>Langkah 1 — Dari ide sampai diperdagangkan</h3>
<table class="tbl">
  <tr><th>Tahap</th><th>Pembeli</th><th>Harga ilustrasi per token</th></tr>
  <tr><td><b>Seed</b></td><td>Investor paling awal, saat proyek baru ide</td><td>$0,01</td></tr>
  <tr><td><b>Private sale</b></td><td>Dana ventura dan investor besar, sebelum dijual umum</td><td>$0,03</td></tr>
  <tr><td><b>Public sale</b> (ICO / IEO / IDO / launchpad)</td><td>Masyarakat umum</td><td>$0,08</td></tr>
  <tr><td><b>Listing</b> di bursa</td><td>Siapa saja</td><td>$0,40</td></tr>
</table>
<p>Di harga listing, investor seed sudah <b>untung 40 kali lipat</b> dan investor private sale <b>13 kali lipat</b>. Mereka punya alasan kuat untuk menjual begitu diizinkan — dan pembeli di bursa adalah orang yang membeli dari mereka.</p>

<h3>Langkah 2 — Pembagian token (alokasi)</h3>
<table class="tbl">
  <tr><th>Kelompok</th><th>Porsi (ilustrasi)</th></tr>
  <tr><td>Tim &amp; penasihat</td><td>20%</td></tr>
  <tr><td>Investor seed &amp; private</td><td>18%</td></tr>
  <tr><td>Public sale</td><td>5%</td></tr>
  <tr><td>Ekosistem &amp; komunitas (insentif, hibah, airdrop)</td><td>40%</td></tr>
  <tr><td>Treasury yayasan</td><td>17%</td></tr>
</table>

<h3>Langkah 3 — Market cap vs FDV</h3>
<p>Misalkan pasokan maksimal <b>1 miliar token</b>, tapi saat listing baru <b>120 juta</b> yang beredar. Harga $0,40.</p>
<table class="tbl">
  <tr><th>Ukuran</th><th>Hitungan</th><th>Hasil</th></tr>
  <tr><td><b>Market cap</b> (yang beredar)</td><td>120 juta × $0,40</td><td>$48 juta</td></tr>
  <tr><td><b>FDV</b> (fully diluted value — seandainya semua token sudah beredar)</td><td>1 miliar × $0,40</td><td class="bad-cell">$400 juta</td></tr>
</table>
<p>Hanya 12% token yang beredar. Sisanya — 880 juta token — akan masuk ke pasar perlahan. Kalau permintaan tidak tumbuh secepat pasokan, harga harus turun. Token dengan sedikit beredar tapi FDV raksasa disebut <b>low float, high FDV</b>.</p>

<h3>Langkah 4 — Vesting &amp; unlock</h3>
<p><b>Vesting</b> = jadwal pelepasan token secara bertahap. Pola umum: <b>cliff 12 bulan</b> (terkunci sama sekali), lalu dilepas <b>rata selama 24 bulan</b>. Saat jatah sebuah kelompok mulai terbuka disebut <b>unlock</b>.</p>
<div data-demo="js-playground">// Jadwal unlock token tim & investor (38% dari 1 miliar = 380 juta token)
const jatah = 380000000;
const cliffBulan = 12;     // terkunci penuh 12 bulan
const lamaRata = 24;       // lalu dilepas rata selama 24 bulan
const beredarAwal = 120000000;

[0, 6, 12, 13, 18, 24, 36].forEach(function (bulan) {
  let terbuka = 0;
  if (bulan >= cliffBulan) {
    const lewat = Math.min(bulan - cliffBulan + 1, lamaRata);
    terbuka = jatah * lewat / lamaRata;
  }
  const beredar = beredarAwal + terbuka;
  console.log("Bulan " + bulan + ": token tim & investor terbuka " +
    Math.round(terbuka / 1e6) + " juta -> total beredar " + Math.round(beredar / 1e6) + " juta");
});
console.log("Setiap bulan setelah cliff, sekitar 15,8 juta token baru boleh dijual.");</div>
<div class="callout warn">
<b>Hari-hari unlock sering menekan harga.</b> Pemegang yang membeli jauh lebih murah boleh menjual mulai hari itu. Jadwal unlock biasanya terbuka untuk umum — periksa sebelum membeli.
</div>

<h3>Langkah 5 — Airdrop dan bendera merah</h3>
<p><b>Airdrop</b> = token dibagikan gratis, biasanya kepada pengguna awal sebuah protokol. Banyak orang "berburu airdrop" dengan memakai protokol baru — sah, tapi waspadai situs palsu yang meminta tanda tangan dompet atas nama "klaim airdrop". Airdrop dan cara aman berburunya dibahas tuntas di dua pelajaran berikutnya.</p>
<table class="tbl">
  <tr><th>Bendera merah</th><th>Kenapa</th></tr>
  <tr><td>Tim + investor memegang lebih dari ~40–50%</td><td>Komunitas hanya mendapat sisa; tekanan jual besar menunggu</td></tr>
  <tr><td>Cliff sangat singkat atau tidak ada</td><td>Orang dalam bisa menjual segera setelah listing</td></tr>
  <tr><td>FDV jauh di atas market cap</td><td>Sebagian besar pasokan belum masuk pasar</td></tr>
  <tr><td>Unlock besar dalam beberapa bulan ke depan</td><td>Tekanan jual terjadwal</td></tr>
  <tr><td>"Private sale" ditawarkan lewat Telegram atau DM</td><td>Hampir selalu penipuan — proyek sungguhan tidak menjual ke orang asing lewat pesan pribadi</td></tr>
</table>
<div class="callout warn">Edukasi, bukan saran investasi.</div>
`,
          keyPoints: [
            "Token biasanya dijual bertahap: seed, private sale, public sale, lalu listing — tiap tahap makin mahal.",
            "Investor awal sering sudah untung berlipat saat listing, sehingga punya alasan kuat untuk menjual.",
            "Market cap = harga × token beredar; FDV = harga × pasokan maksimal. FDV jauh di atas market cap = banyak pasokan belum masuk pasar.",
            "Vesting melepas token bertahap (mis. cliff 12 bulan lalu rata 24 bulan); hari unlock sering menekan harga.",
            "Bendera merah: porsi orang dalam besar, cliff singkat, low float–high FDV, unlock besar dekat, private sale lewat pesan pribadi."
          ],
          practice: [
            { type: "number", q: "Pasokan maksimal 2 miliar token, beredar 300 juta, harga $0,50. Berapa juta dolar FDV-nya?", answer: 1000, tol: 0.5, unit: "juta $", hint: "2.000 juta × 0,50.", solution: "FDV = $1.000 juta (= $1 miliar). Market cap-nya hanya 300 juta × 0,50 = $150 juta." },
            { type: "number", q: "Investor private sale membeli di $0,05; harga listing $0,60. Berapa kali lipat keuntungannya?", answer: 12, tol: 0.1, unit: "×", hint: "0,60 ÷ 0,05.", solution: "12 kali lipat." }
          ],
          quiz: [
            {
              q: "Apa beda market cap dan FDV?",
              options: [
                "Market cap memakai token beredar, FDV memakai pasokan maksimal",
                "Market cap dalam rupiah, FDV dalam dolar Amerika Serikat",
                "Market cap untuk koin L1, FDV hanya untuk token di L2",
                "Market cap dihitung harian, FDV dihitung setiap tahun"
              ],
              answer: 0,
              explain: "FDV membayangkan semua token sudah beredar. Jarak besar antara keduanya berarti banyak pasokan masih akan datang."
            },
            {
              q: "Kenapa hari unlock token tim dan investor sering menekan harga?",
              options: [
                "Mereka membeli jauh lebih murah dan baru boleh menjual hari itu",
                "Bursa wajib menurunkan harga token pada setiap hari unlock",
                "Token yang di-unlock otomatis dibakar sehingga harga jatuh",
                "Proyek wajib membagikan dividen yang mengurangi kasnya"
              ],
              answer: 0,
              explain: "Pasokan baru dari pemegang yang sudah untung besar masuk ke pasar sekaligus."
            },
            {
              q: "Seseorang di Telegram menawarkan 'private sale' token baru dengan diskon besar. Penilaian yang tepat?",
              options: [
                "Hampir pasti penipuan; proyek asli tidak menjual lewat pesan pribadi",
                "Kesempatan langka karena hanya orang terpilih yang ditawari",
                "Aman asalkan pembayarannya memakai stablecoin seperti USDT",
                "Aman bila penjualnya menunjukkan bukti transfer dari orang lain"
              ],
              answer: 0,
              explain: "Private sale sungguhan melibatkan investor yang dikenal dan perjanjian resmi, bukan ajakan lewat DM."
            }
          ]
        },
        {
          id: "bc-air-1",
          title: "Airdrop dari Nol — Kenapa Proyek Membagikan Token Gratis",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Token sebuah proyek dibagi ke tim, investor, publik, dan <b>komunitas</b>; jatah komunitas sering dibagikan lewat airdrop (pelajaran Siklus Hidup Token). Untuk menerima token, cukup <b>alamat dompet</b> — sama seperti alamat kotak surat yang boleh diketahui siapa pun.
</div>

<h3>Langkah 1 — Apa itu airdrop?</h3>
<p><b>Airdrop</b> = token yang dibagikan gratis ke banyak alamat dompet. Kata ini berasal dari bantuan yang "dijatuhkan dari udara". Penerimanya biasanya orang yang <b>sudah memakai</b> sebuah protokol sebelum tokennya ada.</p>
<div class="callout">
<b>Contoh paling terkenal:</b> pada September 2020, bursa terdesentralisasi Uniswap membagikan <b>400 token UNI</b> ke setiap alamat yang pernah memakainya sebelum tanggal tertentu. Saat dibagikan, nilainya sekitar US$1.200 — dan beberapa bulan kemudian sempat bernilai berkali-kali lipat. Sejak itu, "memakai protokol baru sebelum punya token" menjadi kebiasaan banyak orang.
</div>

<h3>Langkah 2 — Kenapa proyek mau membagikan token gratis?</h3>
<table class="tbl">
  <tr><th>Alasan</th><th>Penjelasan</th></tr>
  <tr><td>Menyebarkan kepemilikan</td><td>Token tata kelola yang hanya dipegang tim dan investor terlihat terpusat; airdrop menyebarnya ke ribuan pengguna</td></tr>
  <tr><td>Membalas pengguna awal</td><td>Orang yang memakai produk saat masih sepi dan berisiko diberi bagian</td></tr>
  <tr><td>Pemasaran</td><td>Kabar airdrop menarik perhatian dan pengguna baru</td></tr>
  <tr><td>Menarik pengguna dari pesaing</td><td>Kadang dibagikan juga ke pengguna protokol lain yang mirip</td></tr>
</table>

<h3>Langkah 3 — Jenis-jenis airdrop</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Cara dapat</th></tr>
  <tr><td><b>Retroaktif</b></td><td>Dihitung dari pemakaian di masa lalu — kamu tidak tahu sebelumnya bahwa akan dapat</td></tr>
  <tr><td><b>Program poin</b></td><td>Proyek mengumumkan poin untuk setiap aktivitas, lalu kelak poin ditukar token — kriteria dan nilainya sering tidak jelas sampai akhir</td></tr>
  <tr><td><b>Tugas / quest</b></td><td>Menyelesaikan tugas: mengikuti akun, mencoba fitur, mengisi formulir</td></tr>
  <tr><td><b>Pemegang token</b></td><td>Diberikan kepada pemegang token tertentu pada saat pencatatan (<i>snapshot</i>)</td></tr>
  <tr><td class="bad-cell"><b>Token tak diminta</b></td><td>Token asing yang tiba-tiba muncul di dompet — sering umpan penipuan (dibahas di pelajaran berikutnya)</td></tr>
</table>

<h3>Langkah 4 — Perjalanan sebuah airdrop</h3>
<div data-diagram="flow" data-steps="Pemakaian awal|Snapshot|Kriteria & filter|Diumumkan|Klaim|Dijual" data-caption="Dari memakai protokol sampai token bisa dijual"></div>
<table class="tbl">
  <tr><th>Tahap</th><th>Yang terjadi</th></tr>
  <tr><td><b>Snapshot</b></td><td>Proyek mencatat keadaan semua alamat pada satu blok tertentu — aktivitas sesudahnya tidak dihitung</td></tr>
  <tr><td><b>Kriteria</b></td><td>Misalnya: berapa kali bertransaksi, berapa bulan aktif, berapa nilai yang dipakai, apakah memakai beberapa fitur</td></tr>
  <tr><td><b>Filter sybil</b></td><td>Satu orang yang memakai ratusan dompet untuk berpura-pura menjadi banyak pengguna disebut <i>sybil</i>. Proyek menyaringnya dengan teknik klasterisasi alamat — persis yang kamu pelajari di modul Forensik — lalu mencoret dompet-dompet itu.</td></tr>
  <tr><td><b>Klaim</b></td><td>Penerima mengklaim di situs resmi dalam jangka waktu tertentu; sebagian token kadang terkunci (vesting)</td></tr>
</table>

<h3>Langkah 5 — Hitung dulu: apakah berburu airdrop menguntungkan?</h3>
<p>Berburu airdrop bukan uang gratis: ada biaya gas, waktu, dan risiko. Pakai <b>nilai harapan</b> (dari jalur Akuntansi):</p>
<table class="tbl">
  <tr><th>Komponen</th><th>Contoh ilustrasi</th></tr>
  <tr><td>Biaya gas: 40 transaksi × Rp25 ribu</td><td>Rp1 juta</td></tr>
  <tr><td>Peluang proyek benar-benar membagikan token kepadamu</td><td>30%</td></tr>
  <tr><td>Nilai airdrop bila dapat</td><td>Rp2 juta</td></tr>
  <tr><td><b>Nilai harapan</b></td><td><b>0,3 × 2 juta − 1 juta = −Rp400 ribu</b></td></tr>
</table>
<p>Dengan angka seperti ini, rata-ratanya justru rugi — belum menghitung waktu yang habis. Airdrop terkenal yang bernilai besar menarik perhatian, tapi banyak proyek tidak pernah membagikan token, atau membagikan dalam jumlah kecil.</p>
<div class="callout warn">
<b>Airdrop dump.</b> Token yang didapat gratis sering langsung dijual penerimanya, sehingga harganya kerap turun tajam pada hari-hari pertama perdagangan. Edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Airdrop = token yang dibagikan gratis ke banyak alamat, biasanya kepada pengguna awal sebuah protokol.",
            "Proyek melakukannya untuk menyebarkan kepemilikan, membalas pengguna awal, dan pemasaran.",
            "Jenisnya: retroaktif, program poin, tugas/quest, pemegang token, dan token tak diminta (sering umpan penipuan).",
            "Alurnya: pemakaian → snapshot → kriteria & filter sybil → klaim → diperdagangkan.",
            "Hitung nilai harapannya: biaya gas dan waktu sering lebih besar daripada peluang × nilai airdrop."
          ],
          practice: [
            { type: "number", q: "Biaya gas berburu Rp600 ribu, peluang dapat 25%, nilai airdrop bila dapat Rp4 juta. Berapa ribu rupiah nilai harapannya?", answer: 400, tol: 1, unit: "ribu", hint: "0,25 × 4.000 ribu − 600 ribu.", solution: "1.000 − 600 = +Rp400 ribu — positif, tapi waktu yang terpakai belum dihitung." },
            { type: "choice", q: "Kamu aktif memakai sebuah protokol setelah tanggal snapshot diumumkan. Apa akibatnya?", options: ["Aktivitas itu dihitung dua kali lipat", "Aktivitas itu tidak ikut dihitung", "Kamu otomatis didiskualifikasi", "Snapshot diulang setiap hari"], answer: 1, hint: "Snapshot = foto keadaan pada satu blok.", solution: "Yang dihitung hanya keadaan sampai blok snapshot." }
          ],
          quiz: [
            {
              q: "Apa yang dimaksud dengan 'snapshot' dalam airdrop?",
              options: [
                "Pencatatan keadaan semua alamat pada satu blok tertentu",
                "Foto layar bukti bahwa kamu sudah mengikuti akun proyek",
                "Daftar harga token pada hari pertama mulai diperdagangkan",
                "Salinan seed phrase yang disimpan sebagai cadangan klaim"
              ],
              answer: 0,
              explain: "Aktivitas setelah snapshot tidak dihitung untuk airdrop tersebut."
            },
            {
              q: "Kenapa proyek mencoret dompet-dompet 'sybil' dari daftar penerima?",
              options: [
                "Satu orang berpura-pura menjadi banyak pengguna lewat banyak dompet",
                "Dompet itu terlalu baru sehingga belum boleh menerima token",
                "Pemiliknya belum melakukan verifikasi KTP di situs proyek",
                "Dompet itu menyimpan terlalu banyak token dari proyek lain"
              ],
              answer: 0,
              explain: "Airdrop ditujukan untuk menyebar kepemilikan ke banyak orang, bukan ke satu orang dengan ratusan dompet."
            },
            {
              q: "Kenapa harga token sering turun tajam tak lama setelah airdrop?",
              options: [
                "Banyak penerima yang mendapatkannya gratis langsung menjualnya",
                "Proyek wajib membakar setengah pasokan setelah airdrop",
                "Bursa menurunkan harga sebagai biaya pendaftaran token",
                "Token airdrop baru boleh dijual dengan harga separuh"
              ],
              answer: 0,
              explain: "Pasokan besar dari penerima yang tidak membayar apa pun masuk ke pasar sekaligus."
            }
          ]
        },
        {
          id: "bc-air-2",
          title: "Cara Aman Berburu Airdrop",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Menekan <b>Konfirmasi</b> di dompet = membuat tanda tangan; izin <b>Approve</b> atau <b>Permit</b> bisa dipakai menguras token belakangan (pelajaran Tanda Tangan Digital). <b>Seed phrase</b> = kunci induk seluruh dompetmu. Hampir semua kerugian pemburu airdrop terjadi karena salah satu dari dua hal ini — bukan karena blockchain-nya dibobol.
</div>

<h3>Langkah 1 — Siapkan dua dompet</h3>
<table class="tbl">
  <tr><th></th><th>Dompet simpanan</th><th>Dompet berburu</th></tr>
  <tr><td>Isinya</td><td>Aset yang benar-benar kamu simpan</td><td>Dana kecil secukupnya untuk gas dan tugas</td></tr>
  <tr><td>Dihubungkan ke situs baru?</td><td class="ok-cell">Tidak pernah</td><td>Ya, situs untuk berburu</td></tr>
  <tr><td>Sebaiknya</td><td>Dompet perangkat keras (hardware wallet) bila nilainya besar</td><td>Dompet aplikasi biasa, seed phrase berbeda</td></tr>
  <tr><td>Kalau bocor</td><td>—</td><td>Kerugian terbatas pada isi dompet berburu</td></tr>
</table>
<p>Prinsipnya seperti membawa dompet berisi uang secukupnya ke pasar malam, sementara tabungan tetap di rumah.</p>

<h3>Langkah 2 — Masuk hanya lewat pintu resmi</h3>
<ul>
  <li>Ambil alamat situs dari <b>sumber resmi</b> proyek — dokumentasi atau akun resminya — lalu simpan sebagai <b>bookmark</b>. Buka selalu dari bookmark itu.</li>
  <li><b>Jangan klik iklan</b> di hasil pencarian dan jangan klik tautan di balasan komentar; penipu sering memasang iklan dengan nama proyek populer.</li>
  <li>Admin asli <b>tidak pernah mengirim DM lebih dulu</b>. "Support" yang menghubungimu duluan hampir pasti penipu.</li>
</ul>

<h3>Langkah 3 — Baca setiap permintaan tanda tangan</h3>
<table class="tbl">
  <tr><th>Yang muncul di dompet</th><th>Penilaian</th></tr>
  <tr><td>Sign message berisi teks yang bisa dibaca untuk login</td><td class="ok-cell">Umumnya wajar</td></tr>
  <tr><td>Transaksi klaim yang <b>menambah</b> token ke dompetmu, membayar gas kecil</td><td class="ok-cell">Wajar bila sumbernya resmi</td></tr>
  <tr><td>Approve atau Permit token yang tidak ada hubungannya dengan tugasmu</td><td class="bad-cell">Tolak</td></tr>
  <tr><td><b>setApprovalForAll</b> untuk koleksi NFT</td><td class="bad-cell">Tolak, kecuali kamu sengaja menjual NFT di pasar resmi</td></tr>
  <tr><td>Pesan berisi kode acak yang tidak bisa dibaca</td><td class="bad-cell">Tolak — kamu tidak tahu apa yang kamu setujui</td></tr>
</table>

<h3>Latihan: wajar atau bahaya?</h3>
<div data-demo="airdrop-cek"></div>

<h3>Langkah 4 — Penipuan yang paling sering memakan korban</h3>
<table class="tbl">
  <tr><th>Modus</th><th>Cara kerjanya</th></tr>
  <tr><td><b>Situs klaim palsu</b></td><td>Tampilan meniru situs asli; tombol "Claim" sebenarnya meminta izin menguras token</td></tr>
  <tr><td><b>Token umpan</b></td><td>Token asing muncul di dompet dengan nama berisi alamat situs; situs itu adalah penguras dompet</td></tr>
  <tr><td><b>"Verifikasi" seed phrase</b></td><td>Diminta lewat DM, formulir, atau situs palsu — tujuannya mengambil alih seluruh dompet</td></tr>
  <tr><td><b>Bayar dulu untuk klaim</b></td><td>"Kirim 0,05 ETH untuk biaya pencairan" — airdrop asli hanya meminta gas yang dibayar dari dompetmu sendiri saat transaksi</td></tr>
  <tr><td><b>Kursus atau grup "airdrop pasti cuan"</b></td><td>Menjual janji, atau menyuruh membeli token tertentu yang sedang dipompa</td></tr>
</table>

<h3>Langkah 5 — Kebiasaan rutin</h3>
<table class="tbl">
  <tr><th>Kebiasaan</th><th>Kenapa</th></tr>
  <tr><td>Cabut izin token lama secara berkala</td><td>Pemeriksa izin token seperti di Etherscan atau revoke.cash menunjukkan kontrak mana yang masih boleh memindahkan tokenmu</td></tr>
  <tr><td>Catat biaya gas yang sudah keluar</td><td>Supaya tahu apakah perburuanmu untung atau rugi</td></tr>
  <tr><td>Jangan menyetor dana besar demi "poin"</td><td>Kriteria bisa berubah, dan dana yang disetor ikut menanggung risiko kontrak</td></tr>
  <tr><td>Hindari membuat banyak dompet untuk satu orang</td><td>Melanggar aturan sebagian besar proyek, mudah terdeteksi, dan semua dompet bisa dicoret</td></tr>
  <tr><td>Perbarui aplikasi dompet &amp; browser</td><td>Celah keamanan lama sering dipakai penguras dompet</td></tr>
</table>

<div class="callout warn">
<b>Setelah benar-benar menerima airdrop:</b> klaim hanya dari tautan resmi, pindahkan hasilnya ke dompet simpanan bila nilainya berarti, dan ingat bahwa penghasilan dari aset kripto bisa terkena pajak — aturan di Indonesia berubah beberapa kali, jadi periksa ketentuan terbaru dari Direktorat Jenderal Pajak atau konsultan pajak. Edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Pisahkan dompet simpanan (tidak pernah dihubungkan ke situs baru) dan dompet berburu berisi dana kecil.",
            "Masuk hanya lewat alamat resmi yang disimpan sebagai bookmark; jangan klik iklan pencarian atau DM 'support'.",
            "Klaim yang wajar menambah token ke dompetmu dan hanya meminta gas; tolak Approve, Permit, dan setApprovalForAll yang tidak terkait.",
            "Tidak ada airdrop asli yang meminta seed phrase atau 'biaya pencairan'; token asing di dompet sering umpan penguras.",
            "Cabut izin token lama berkala, catat biaya gas, jangan setor dana besar demi poin, dan hindari banyak dompet untuk satu orang."
          ],
          practice: [
            { type: "choice", q: "Kamu menemukan situs klaim airdrop lewat iklan di hasil pencarian. Langkah yang paling aman?", options: ["Langsung klaim sebelum kuota habis", "Tutup, lalu buka alamat dari dokumentasi atau akun resmi proyek", "Klaim memakai dompet simpanan agar cepat", "Tanyakan ke 'support' yang menghubungimu lewat DM"], answer: 1, hint: "Dari mana alamat situs seharusnya diambil?", solution: "Iklan pencarian sering dipakai penipu. Ambil alamat dari sumber resmi, simpan sebagai bookmark." }
          ],
          quiz: [
            {
              q: "Kenapa pemburu airdrop disarankan memakai dompet terpisah?",
              options: [
                "Agar kerugian bila tertipu hanya sebatas isi dompet berburu",
                "Agar peluang mendapat airdrop menjadi dua kali lebih besar",
                "Agar biaya gas di dompet berburu menjadi gratis",
                "Agar proyek tidak bisa melihat aktivitas di dompet itu"
              ],
              answer: 0,
              explain: "Dompet simpanan tidak pernah dihubungkan ke situs baru, sehingga tetap aman walau dompet berburu bermasalah."
            },
            {
              q: "Sebuah situs 'klaim airdrop' meminta Approve USDT tanpa batas. Apa yang sebaiknya dilakukan?",
              options: [
                "Tolak, karena klaim tidak butuh izin memindahkan USDT-mu",
                "Setujui saja, karena izin itu bisa dicabut kapan pun",
                "Setujui, asalkan USDT di dompet sedang sedikit",
                "Tolak sekali, lalu setujui bila diminta lagi"
              ],
              answer: 0,
              explain: "Izin tanpa batas cukup untuk menguras USDT. Klaim yang wajar justru menambah token ke dompetmu."
            },
            {
              q: "Token asing bernama 'Klaim-Bonus.com' muncul di dompetmu. Apa langkah yang tepat?",
              options: [
                "Abaikan; jangan dibuka, dijual, atau diklaim",
                "Kunjungi situsnya untuk memastikan nilainya",
                "Segera jual sebelum harganya sempat turun",
                "Kirim balik ke pengirimnya agar tidak tercatat"
              ],
              answer: 0,
              explain: "Ini token umpan yang mengarahkan korban ke situs penguras dompet."
            }
          ]
        },
        {
          id: "bc-pl-3",
          title: "NFT & GameFi — Apa Adanya",
          duration: "13 menit",
          content: `
<p>Kamu sudah tahu NFT itu token unik. Sekarang kita bahas <b>lebih dalam &amp; lebih jujur</b> — termasuk pelajaran mahal dari GameFi.</p>

<div data-diagram="compare3" data-cols="Janjinya::kepemilikan digital sejati::game yang menghasilkan|Kenyataannya::sebagian besar nilainya nol::pemain berhenti, ekonomi runtuh|Yang bertahan::punya guna nyata::bukan sekadar spekulasi" data-caption="Menilai NFT &amp; GameFi apa adanya"></div>


<h3>Sebenarnya kamu memiliki apa?</h3>
<div class="callout warn">
<b>Fakta yang sering disalahpahami:</b> gambar NFT biasanya <b>tidak disimpan di blockchain</b> (terlalu besar &amp; mahal). Yang tercatat di blockchain umumnya hanya <b>bukti kepemilikan + tautan</b> ke gambar yang disimpan di tempat lain. Kalau penyimpanannya mati, gambarnya bisa <b>hilang</b> — meski tokenmu tetap ada.
<br><br>Selain itu, memiliki NFT <b>tidak otomatis</b> berarti memiliki <b>hak cipta</b> karyanya — itu bergantung pada perjanjian penerbitnya.
</div>

<h3>NFT di luar gambar profil</h3>
<p>Terlepas dari gelembung spekulasi 2021–2022, kegunaan NFT yang <b>masuk akal</b> ada pada hal yang memang butuh <b>bukti keunikan &amp; keaslian</b>:</p>
<ul>
  <li><b>Tiket acara</b> — anti-palsu &amp; bisa mengatur penjualan ulang.</li>
  <li><b>Sertifikat &amp; ijazah</b> — keasliannya bisa diverifikasi siapa saja.</li>
  <li><b>Item game</b> — kepemilikan benar-benar di tangan pemain.</li>
  <li><b>Royalti karya</b> — pembayaran otomatis ke kreator saat karya berpindah tangan.</li>
</ul>

<h3>GameFi &amp; pelajaran mahalnya</h3>
<p><b>GameFi</b> menggabungkan game dengan ekonomi token: pemain bisa <b>menghasilkan</b> token (<i>play-to-earn</i>).</p>

<div class="callout warn">
<b>Cacat ekonominya:</b> banyak GameFi membayar pemain lama dari <b>uang pemain baru</b> — bukan dari nilai yang diciptakan game itu sendiri. Selama pemain baru terus berdatangan, semuanya tampak baik. Begitu pertumbuhan berhenti, harga token jatuh dan pemain terakhir menanggung kerugian. Polanya <b>menyerupai skema piramida</b>, meski tidak selalu disengaja. Beberapa GameFi besar runtuh persis dengan cara ini.
</div>

<h3>Cara menilainya (pakai kerangka yang sudah kamu punya)</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Kenapa penting</th></tr>
  <tr><td>Apakah <b>gamenya seru</b> tanpa iming-iming uang?</td><td>Kalau tidak, pemain datang hanya untuk penghasilan → <i>mercenary capital</i></td></tr>
  <tr><td>Dari mana <b>uang hadiah</b> berasal?</td><td>Dari pendapatan nyata (pembelian item) atau dari <b>emisi token</b>? (ingat pelajaran <i>real yield</i>)</td></tr>
  <tr><td>Apakah ada <b>penyerap</b> token (sink)?</td><td>Tanpa mekanisme membakar/menghabiskan token, pasokan membanjir &amp; harga jatuh</td></tr>
</table>

<div class="callout warn">
<b>Pengingat:</b> materi ini <b>edukasi, bukan saran finansial/investasi</b>.
</div>
`,
          keyPoints: [
            "Gambar NFT biasanya tak disimpan di blockchain — hanya bukti kepemilikan + tautan; gambar bisa hilang bila penyimpanannya mati.",
            "Memiliki NFT tidak otomatis berarti memiliki hak cipta karyanya.",
            "Kegunaan NFT yang masuk akal: tiket, sertifikat, item game, royalti kreator.",
            "Cacat GameFi: membayar pemain lama dari uang pemain baru — mirip skema piramida & runtuh saat pertumbuhan berhenti.",
            "Nilai GameFi dengan: apakah seru tanpa iming-iming uang, dari mana hadiah didanai, & adakah penyerap (sink) token.",
          ],
          practice: [
            { type: "choice", q: "Sebuah GameFi membayar hadiah pemain dari emisi token baru, dan pemain datang hanya untuk penghasilan. Apa penilaianmu?", options: ["Model berkelanjutan", "Rapuh — bergantung pemain baru, mirip skema piramida", "Pasti untung", "Real yield"], answer: 1, hint: "Dari mana uang hadiahnya berasal?", solution: "Hadiah dari emisi + pemain mercenary = tidak berkelanjutan." },
            { type: "choice", q: "Kamu membeli sebuah NFT gambar. Apa yang PASTI kamu miliki?", options: ["Hak cipta penuh atas karyanya", "Bukti kepemilikan token di blockchain (hak cipta tergantung perjanjian penerbit)", "File gambar tersimpan di blockchain", "Jaminan harga naik"], answer: 1, hint: "Apa yang benar-benar tercatat on-chain?", solution: "Yang tercatat adalah kepemilikan token; hak cipta & lokasi file adalah hal terpisah." },
          ],
          quiz: [
            {
              q: "Di mana gambar sebuah NFT biasanya disimpan?",
              options: [
                "Di luar blockchain; yang tercatat umumnya bukti kepemilikan dan tautannya",
                "Langsung di dalam blok bersama seluruh data transaksinya",
                "Di dompet pemiliknya sehingga hilang bila dompet itu terhapus",
                "Di server bursa tempat NFT itu pertama kali diperjualbelikan",
              ],
              answer: 0,
              explain:
                "Menyimpan gambar on-chain terlalu mahal; karena itu umumnya hanya tautan yang dicatat.",
            },
            {
              q: "Apa cacat ekonomi utama banyak proyek GameFi?",
              options: [
                "Pemain lama dibayar dari uang pemain baru, runtuh saat pertumbuhan berhenti",
                "Biaya gas terlalu mahal sehingga pemain enggan bertransaksi di dalamnya",
                "Grafis permainannya kalah bagus dibanding permainan biasa",
                "Aset dalam permainan tidak benar-benar dimiliki oleh pemainnya",
              ],
              answer: 0,
              explain:
                "Model yang bergantung pada arus pemain baru menyerupai skema piramida.",
            },
          ],
        },
        {
          id: "bc-game-1",
          title: "GameFi Mendalam — Angka di Balik Runtuhnya Play-to-Earn",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Pelajaran sebelumnya menyebut cacat utama banyak GameFi: <b>pemain lama dibayar dari uang pemain baru</b>. Kamu juga sudah kenal <b>dilusi</b> dan <b>siklus hidup token</b>. Pelajaran ini membuktikan cacat itu dengan angka.
</div>

<h3>Langkah 1 — Anatomi game play-to-earn</h3>
<table class="tbl">
  <tr><th>Bagian</th><th>Fungsinya</th><th>Pada Axie Infinity</th></tr>
  <tr><td><b>NFT karakter</b></td><td>Tiket masuk — harus dibeli sebelum bisa bermain</td><td>Tiga karakter "Axie"</td></tr>
  <tr><td><b>Token hadiah</b></td><td>Dibayarkan kepada pemain yang bermain — inilah "penghasilan"</td><td>SLP</td></tr>
  <tr><td><b>Token tata kelola</b></td><td>Hak suara dan bagian dari pendapatan</td><td>AXS</td></tr>
  <tr><td><b>Keran</b> (<i>faucet</i>)</td><td>Jalan keluarnya token baru ke pemain</td><td>Hadiah harian, kemenangan</td></tr>
  <tr><td><b>Penyerap</b> (<i>sink</i>)</td><td>Jalan token dimusnahkan</td><td>Membiakkan karakter baru</td></tr>
</table>
<p>Ada satu lingkaran tertutup: pemain baru membeli karakter, karakter baru dibuat dengan membakar token, token hadiah dijual oleh pemain lama untuk mendapat uang. <b>Uang yang dicairkan pemain lama hanya bisa datang dari pembeli</b> — dan pembeli terbesarnya adalah pemain baru.</p>

<h3>Langkah 2 — Hitung sendiri</h3>
<p>Setiap pemain baru membayar biaya masuk untuk membeli karakter, dan setiap pemain mencairkan hadiah tiap minggu. Lihat apa yang terjadi saat arus pemain baru melambat:</p>
<div data-demo="js-playground">// Uang masuk = pemain baru x biaya masuk; uang keluar = semua pemain x hadiah yang dicairkan
const biayaMasuk = 3000000;      // Rp, membeli tiga karakter
const hadiahPerMinggu = 250000;  // Rp, nilai token yang dicairkan tiap pemain per minggu
let pemain = 1000;
const pemainBaru = [500, 800, 1200, 1500, 1500, 1200, 800, 400, 200, 100];

pemainBaru.forEach(function (baru, i) {
  pemain = pemain + baru;
  const masuk = baru * biayaMasuk;
  const keluar = pemain * hadiahPerMinggu;
  const selisih = masuk - keluar;
  console.log("Minggu " + (i + 1) + ": pemain " + pemain +
    " | masuk Rp" + (masuk / 1e6).toFixed(0) + " jt | dicairkan Rp" + (keluar / 1e6).toFixed(0) +
    " jt | " + (selisih >= 0 ? "aman" : "KURANG Rp" + (-selisih / 1e6).toFixed(0) + " jt"));
});
console.log("Saat pemain baru melambat, kekurangannya ditanggung lewat harga token yang jatuh.");</div>
<p>Pada minggu-minggu awal, uang pemain baru jauh melebihi hadiah yang dicairkan — semua tampak untung. Begitu pemain baru berkurang, uang keluar melampaui uang masuk. Tidak ada yang menutup selisihnya, jadi <b>harga token hadiah turun</b>. Hadiah dalam rupiah mengecil, pemain berhenti, pemain baru makin sedikit — spiral ke bawah.</p>

<h3>Langkah 3 — Kisah nyata: Axie Infinity</h3>
<table class="tbl">
  <tr><th>Periode</th><th>Yang terjadi</th></tr>
  <tr><td>2021</td><td>Meledak saat pandemi. Banyak pemain di Filipina dan Asia Tenggara menjadikannya sumber nafkah. Muncul sistem <i>scholarship</i>: pemilik karakter meminjamkan karakter kepada pemain yang tidak mampu membeli, lalu bagi hasil.</td></tr>
  <tr><td>2021–2022</td><td>Pertumbuhan pemain melambat; token hadiah SLP jatuh lebih dari 99% dari puncaknya; penghasilan pemain menguap.</td></tr>
  <tr><td>Maret 2022</td><td>Jembatan Ronin — rantai milik Axie — dibobol sekitar US$600 juta lebih. Biro penyelidik AS (FBI) menyebut kelompok peretas Lazarus.</td></tr>
</table>
<p>Pola serupa terjadi pada banyak game "x-to-earn" lain, termasuk move-to-earn STEPN pada 2022.</p>

<h3>Langkah 4 — Seperti apa GameFi yang bisa bertahan?</h3>
<table class="tbl">
  <tr><th>Rapuh (play-to-earn)</th><th>Lebih sehat (play-and-own)</th></tr>
  <tr><td>Orang datang untuk mencari uang</td><td>Orang datang karena gamenya seru</td></tr>
  <tr><td>Hadiah dari cetak token</td><td>Pendapatan dari pemain yang membeli item untuk bersenang-senang, tanpa mengharap untung</td></tr>
  <tr><td>Keran besar, penyerap kecil</td><td>Penyerap token sepadan dengan keran</td></tr>
  <tr><td>Harus terus tumbuh agar tidak runtuh</td><td>Tetap jalan walau jumlah pemain stabil</td></tr>
</table>
<div class="callout warn">Edukasi, bukan saran investasi. "Penghasilan" dari game yang hidup dari pemain baru adalah pemindahan uang dari pemain terakhir ke pemain pertama.</div>
`,
          keyPoints: [
            "Game play-to-earn biasanya punya NFT karakter (tiket masuk), token hadiah, token tata kelola, keran, dan penyerap token.",
            "Uang yang dicairkan pemain lama hanya bisa datang dari pembeli — terutama pemain baru.",
            "Saat pemain baru melambat, uang keluar melampaui uang masuk; selisihnya ditanggung lewat harga token yang jatuh, memicu spiral ke bawah.",
            "Axie Infinity: booming 2021, token hadiah SLP jatuh >99%, jembatan Ronin dibobol ~US$600 juta lebih pada Maret 2022.",
            "GameFi yang lebih sehat: gamenya seru, pendapatan dari pemain yang belanja untuk bersenang-senang, penyerap sepadan dengan keran."
          ],
          practice: [
            { type: "number", q: "Minggu ini 300 pemain baru masuk dengan biaya Rp2 juta, sementara 5.000 pemain masing-masing mencairkan Rp150 ribu. Berapa juta rupiah selisihnya? (negatif = kekurangan)", answer: -150, tol: 0.5, unit: "jt", hint: "Masuk 300 × 2 jt; keluar 5.000 × 0,15 jt.", solution: "Masuk Rp600 jt, keluar Rp750 jt → kurang Rp150 jt yang ditanggung lewat harga token turun." }
          ],
          quiz: [
            {
              q: "Dari mana uang yang dicairkan pemain lama sebuah game play-to-earn sebagian besar berasal?",
              options: [
                "Dari pemain baru yang membeli karakter dan token",
                "Dari iklan yang ditayangkan di dalam permainan",
                "Dari bunga bank atas dana milik pengembang game",
                "Dari pemerintah yang mendukung industri game"
              ],
              answer: 0,
              explain: "Tanpa pendapatan dari luar, hadiah yang dicairkan dibayar oleh pembeli baru."
            },
            {
              q: "Apa fungsi 'sink' (penyerap) dalam ekonomi token game?",
              options: [
                "Memusnahkan token agar pasokan tidak membanjir",
                "Mencetak token baru untuk hadiah pemain harian",
                "Menyimpan token pemain agar tidak bisa dijual",
                "Mengubah token menjadi rupiah secara otomatis"
              ],
              answer: 0,
              explain: "Keran mengeluarkan token; penyerap membakarnya. Tanpa penyerap sepadan, harga token terus tertekan."
            },
            {
              q: "Ciri GameFi yang lebih mungkin bertahan adalah?",
              options: [
                "Orang bermain karena seru dan belanja tanpa mengharap untung",
                "Hadiah token sangat besar agar pemain baru terus berdatangan",
                "Harga karakter awal dibuat tinggi agar pemain lama untung",
                "Token hadiah hanya bisa dicairkan setahun sekali saja"
              ],
              answer: 0,
              explain: "Ekonomi yang sehat ditopang belanja pemain yang mencari hiburan, bukan uang pemain baru."
            }
          ]
        },
        {
          id: "bc-ek-4",
          title: "Moat, Red Flag & Batas Analisis di Crypto",
          duration: "13 menit",
          content: `
<div class="callout ingat">
<b>Bekal dari jalur Akuntansi</b> — kalau belum mempelajarinya, cukup pahami ini dulu:<br>
<b>Economic moat</b> (parit ekonomi) = keunggulan yang membuat bisnis sulit ditiru, seperti parit yang melindungi benteng: merek, network effect, switching cost, keunggulan biaya &amp; skala, serta teknologi atau izin (<a href="#/lesson/acc-kual-4">Economic Moat</a>).<br>
<b>Red flag</b> = tanda bahaya yang membuat angka-angka laporan patut dicurigai, misalnya laba naik terus tapi kasnya tidak pernah ikut naik (<a href="#/lesson/acc-aud-4">Mendeteksi Manipulasi</a>).
</div>

<p>Pelajaran penutup: menerapkan <b>moat</b> &amp; <b>red flag</b> ke crypto — dan bersikap jujur soal <b>apa yang tidak bisa dianalisis</b>.</p>

<h3>Parit (moat) versi crypto</h3>
<table class="tbl">
  <tr><th>Jenis parit</th><th>Wujudnya di crypto</th></tr>
  <tr><td><b>Network effect</b></td><td>Likuiditas menarik trader → trader menarik likuiditas; ekosistem developer &amp; aplikasi</td></tr>
  <tr><td><b>Switching cost</b></td><td>Memindahkan likuiditas, menulis ulang kontrak, & mengintegrasikan ulang itu mahal</td></tr>
  <tr><td><b>Merek &amp; kepercayaan</b></td><td>Rekam jejak keamanan bertahun-tahun tanpa diretas</td></tr>
  <tr><td><b>Keunggulan biaya/skala</b></td><td>Biaya transaksi lebih murah karena skala &amp; efisiensi teknis</td></tr>
</table>

<div class="callout warn">
<b>Bedakan dengan hati-hati:</b> pengguna yang datang karena <b>insentif token</b> (<i>mercenary capital</i>) akan <b>pergi</b> begitu insentif berhenti — itu <b>bukan</b> parit. Parit sejati bertahan tanpa disubsidi.
</div>

<h3>Red flag khas crypto</h3>
<ul>
  <li><b>Risiko konsentrasi</b> — sedikit dompet memegang porsi token sangat besar (whale) → bisa mendominasi voting &amp; menjual besar-besaran.</li>
  <li><b>Aktivitas yang disubsidi</b> — TVL/volume melonjak hanya karena hadiah token.</li>
  <li>Tim <b>anonim</b> tanpa rekam jejak &amp; kode <b>tanpa audit</b>.</li>
  <li><b>Vesting</b> tim/investor akan terbuka besar-besaran dalam waktu dekat.</li>
  <li>Janji imbal hasil "pasti &amp; besar" — pola klasik penipuan.</li>
</ul>

<h3>Jujur: apa yang TIDAK bisa dipakai</h3>
<table class="tbl">
  <tr><th>Alat akuntansi</th><th>Kenapa tidak berlaku</th></tr>
  <tr><td><b>Altman Z-Score</b></td><td>Butuh pos neraca (modal kerja, laba ditahan) yang tidak ada</td></tr>
  <tr><td><b>DCF</b></td><td>Mayoritas token tak menyalurkan arus kas ke pemegangnya</td></tr>
  <tr><td><b>Neraca &amp; FIFO/LIFO</b></td><td>Tak ada laporan keuangan standar maupun persediaan</td></tr>
</table>

<div class="callout warn">
<b>Kesimpulan yang jujur:</b> untuk protokol yang <b>benar-benar menghasilkan fee</b>, analisis ala bisnis sangat berguna (pendapatan, treasury, dilusi, moat). Tapi untuk token <b>tanpa pendapatan &amp; tanpa kegunaan nyata</b>, tidak ada kerangka fundamental yang bisa dipakai — harganya murni digerakkan spekulasi. Kenali bedanya, dan <b>jangan pura-pura menganalisis</b> sesuatu yang memang tak punya dasar.
</div>

<div class="callout warn">
<b>Pengingat:</b> materi ini <b>edukasi, bukan saran finansial/investasi</b>. Aset kripto sangat berisiko.
</div>
`,
          keyPoints: [
            "Moat crypto: network effect (likuiditas & ekosistem), switching cost, merek/rekam jejak keamanan, skala.",
            "Pengguna yang datang karena insentif token (mercenary capital) bukan parit — parit sejati bertahan tanpa subsidi.",
            "Red flag: konsentrasi whale, aktivitas disubsidi, tim anonim & kode tanpa audit, vesting besar, janji imbal hasil pasti.",
            "Tidak berlaku di crypto: Altman Z-Score, DCF (umumnya), neraca & FIFO/LIFO.",
            "Untuk token tanpa pendapatan & kegunaan nyata, tak ada kerangka fundamental — harganya murni spekulasi.",
          ],
          practice: [
            { type: "choice", q: "TVL sebuah protokol melonjak drastis setelah membagikan hadiah token besar-besaran. Apa penilaian yang tepat?", options: ["Ini bukti moat yang kuat", "Kemungkinan mercenary capital — akan pergi saat insentif berhenti", "Pasti akan bertahan selamanya", "Tandanya real yield"], answer: 1, hint: "Apakah pengguna bertahan tanpa subsidi?", solution: "Aktivitas yang disubsidi insentif bukan parit; uji dengan pertanyaan 'bertahan tanpa insentif?'." },
            { type: "choice", q: "Manakah alat akuntansi yang TIDAK bisa dipakai menilai mayoritas token crypto?", options: ["Analisis fee protokol", "Altman Z-Score & DCF", "Menghitung dilusi", "Menilai treasury"], answer: 1, hint: "Mana yang butuh neraca & arus kas ke pemegang?", solution: "Z-Score butuh pos neraca; DCF butuh arus kas — keduanya umumnya tak ada di crypto." },
          ],
          quiz: [
            {
              q: "Apa itu 'mercenary capital' dalam crypto?",
              options: [
                "Dana yang datang hanya karena insentif dan pergi saat insentif berhenti",
                "Dana milik investor besar yang sengaja menggerakkan harga pasar",
                "Dana yang dipakai protokol untuk membeli kembali tokennya sendiri",
                "Dana pinjaman yang dipakai berdagang dengan pengungkit tinggi",
              ],
              answer: 0,
              explain:
                "Aktivitas yang disubsidi tidak mencerminkan parit atau pemakaian tulus.",
            },
            {
              q: "Kapan analisis ala bisnis TETAP berguna untuk crypto?",
              options: [
                "Untuk protokol yang benar-benar memungut fee nyata dari penggunanya",
                "Untuk menebak arah harga token dalam beberapa minggu ke depan",
                "Untuk semua aset kripto tanpa kecuali, termasuk koin bercanda",
                "Untuk menilai koin yang bahkan belum diluncurkan ke publik",
              ],
              answer: 0,
              explain:
                "Protokol berpendapatan bisa dianalisis layaknya bisnis; token tanpa pendapatan tidak.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 16: MASA DEPAN CRYPTO & BLOCKCHAIN ---------------- */
    {
      id: "bc-arah",
      level: "Arah",
      title: "Masa Depan Crypto & Blockchain",
      summary: "Apa yang sudah jelas arahnya, apa yang sudah terbukti mati, dan apa yang masih benar-benar terbuka.",
      lessons: [
        {
          id: "bc-arah-1",
          title: "Yang Sudah Terlihat — dan Yang Sudah Mati",
          duration: "14 menit",
          content: `
<p>Bidang ini penuh ramalan berlebihan. Cara paling jujur membacanya adalah memisahkan tiga hal: apa yang <b>sudah berjalan</b>, apa yang <b>sudah terbukti gagal</b>, dan apa yang <b>masih terbuka</b>. Pelajaran ini membahas dua yang pertama.</p>

<div data-diagram="compare3" data-cols="Sudah berjalan::Stablecoin::Regulasi &amp; kustodi|Sudah mati::Mania ICO::Mayoritas NFT|Masih terbuka::Peran Bitcoin::Nasib DeFi" data-caption="Membaca lanskap kripto dengan jujur"></div>

<h3>Yang arahnya sudah jelas</h3>
<table class="tbl">
  <tr><th>Perkembangan</th><th>Kenapa ini nyata</th></tr>
  <tr><td><b>Regulasi tiba</b></td><td>Kerangka aturan aset kripto sudah berlaku di beberapa wilayah dan terus disusun di banyak negara. Di Indonesia pengawasannya berpindah ke OJK</td></tr>
  <tr><td><b>Stablecoin jadi rel pembayaran</b></td><td>Volume pemakaiannya untuk pengiriman uang lintas negara sudah besar dan tumbuh — ini kegunaan yang <b>benar-benar dipakai orang</b></td></tr>
  <tr><td><b>Kustodi institusional</b></td><td>Lembaga keuangan besar kini menyediakan penyimpanan dan produk investasi aset kripto</td></tr>
  <tr><td><b>Biaya transaksi turun</b></td><td>Layer 2 membuat biaya yang dulu berdolar-dolar menjadi sen</td></tr>
  <tr><td><b>Tokenisasi aset nyata</b></td><td>Surat utang negara dan reksa dana pasar uang mulai diterbitkan dalam bentuk token oleh lembaga mapan</td></tr>
</table>

<div class="callout">
<b>Perhatikan pola dari daftar di atas:</b> yang bertahan adalah hal-hal yang <b>menyelesaikan masalah nyata</b> — mengirim uang lintas negara dengan murah, menyimpan aset dengan aman, menurunkan biaya. Bukan yang paling menarik diberitakan.
</div>

<h3>Yang sudah terbukti mati</h3>
<p>Ini bagian yang jarang dibahas, padahal paling banyak pelajarannya:</p>

<table class="tbl">
  <tr><th>Gelombang</th><th>Apa yang terjadi</th></tr>
  <tr><td><b>Mania ICO (2017)</b></td><td>Ribuan proyek menggalang dana dengan proposal saja. Sebagian besar tidak menghasilkan produk apa pun</td></tr>
  <tr><td><b>Mayoritas NFT (2021)</b></td><td>Harga koleksi gambar runtuh setelah pembeli baru berhenti berdatangan</td></tr>
  <tr><td><b>Sebagian besar GameFi</b></td><td>Ekonominya membayar pemain lama dari uang pemain baru — runtuh saat pertumbuhan berhenti</td></tr>
  <tr><td><b>Stablecoin algoritmik</b></td><td>Beberapa runtuh total dalam hitungan hari ketika kepercayaan hilang</td></tr>
</table>

<div class="callout warn">
<b>Satu pola menyatukan keempatnya:</b> nilainya bergantung pada <b>datangnya pembeli baru</b>, bukan pada orang yang membayar untuk sebuah kegunaan. Itu pertanyaan penyaring paling ampuh yang bisa kamu pakai:<br><br>
<b>"Siapa yang membayar, untuk manfaat apa, dan apakah ia tetap membayar bila harga tokennya turun?"</b>
</div>

<h3>Kenapa ini penting bagi kamu</h3>
<p>Gelombang berikutnya akan datang dengan nama baru dan istilah baru. Yang tidak berubah adalah cara mengujinya. Kalau sebuah proyek tidak bisa menjawab pertanyaan penyaring di atas, sejarah menyarankan kehati-hatian — sehebat apa pun teknologinya terdengar.</p>

<div class="callout warn">
<b>Catatan:</b> aturan dan lanskap di bidang ini berubah cepat. Rujuk ketentuan terbaru dari OJK dan Bank Indonesia. Materi ini untuk edukasi, bukan saran investasi.
</div>
`,
          keyPoints: [
            "Yang arahnya jelas: regulasi tiba, stablecoin jadi rel pembayaran, kustodi institusional, biaya turun lewat L2, tokenisasi aset nyata.",
            "Pola yang bertahan: hal yang menyelesaikan masalah nyata, bukan yang paling menarik diberitakan.",
            "Yang sudah terbukti mati: mania ICO 2017, mayoritas NFT 2021, sebagian besar GameFi, dan stablecoin algoritmik.",
            "Keempatnya punya satu kesamaan: nilainya bergantung pada datangnya pembeli baru, bukan pengguna yang membayar untuk kegunaan.",
            "Pertanyaan penyaring: siapa yang membayar, untuk manfaat apa, dan apakah tetap membayar bila harga token turun?",
            "Gelombang berikutnya akan berganti nama, tapi cara mengujinya tetap sama.",
          ],
          quiz: [
            {
              q: "Apa kesamaan mania ICO, mayoritas NFT, dan GameFi yang runtuh?",
              options: [
                "Nilainya bergantung pada datangnya pembeli baru, bukan pengguna yang membayar",
                "Semuanya dilarang oleh regulator sehingga terpaksa dihentikan",
                "Semuanya memakai blockchain yang ternyata mengandung celah keamanan",
                "Semuanya gagal karena biaya transaksinya terlalu mahal bagi pengguna",
              ],
              answer: 0,
              explain: "Begitu aliran pembeli baru berhenti, tidak ada pendapatan nyata yang menopangnya.",
            },
            {
              q: "Manakah kegunaan kripto yang sudah terbukti dipakai luas?",
              options: [
                "Stablecoin sebagai rel pengiriman uang lintas negara yang murah",
                "Koleksi gambar digital sebagai penyimpan nilai jangka panjang",
                "Permainan berbasis token sebagai sumber penghasilan utama pemainnya",
                "Stablecoin algoritmik sebagai pengganti mata uang negara",
              ],
              answer: 0,
              explain: "Volumenya besar dan tumbuh karena menyelesaikan masalah nyata: biaya dan kecepatan kiriman uang.",
            },
            {
              q: "Pertanyaan penyaring paling ampuh untuk menilai proyek kripto baru?",
              options: [
                "Siapa yang membayar, untuk manfaat apa, dan apakah tetap bayar bila harga turun",
                "Berapa banyak pengikut proyek itu di media sosial dalam sebulan terakhir",
                "Seberapa terkenal investor besar yang sudah menaruh dana di dalamnya",
                "Seberapa canggih teknologi blockchain yang dipakai proyek tersebut",
              ],
              answer: 0,
              explain: "Pertanyaan ini memisahkan kegunaan nyata dari aliran dana yang hanya bergantung pembeli baru.",
            },
          ],
        },
        {
          id: "bc-arah-2",
          title: "Yang Masih Benar-Benar Terbuka",
          duration: "12 menit",
          content: `
<p>Setelah memisahkan yang sudah jelas dan yang sudah mati, tersisa pertanyaan-pertanyaan yang <b>jujurnya belum terjawab</b>. Siapa pun yang menyatakan sudah tahu jawabannya sedang menebak.</p>

<h3>Empat pertanyaan terbuka</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Kenapa belum terjawab</th></tr>
  <tr><td><b>Apakah Bitcoin jadi penyimpan nilai mapan?</b></td><td>Sejarahnya masih terlalu pendek untuk menyimpulkan perilakunya lintas siklus ekonomi</td></tr>
  <tr><td><b>CBDC atau stablecoin swasta?</b></td><td>Bergantung keputusan politik tiap negara, bukan pada keunggulan teknis</td></tr>
  <tr><td><b>Bisakah DeFi hidup di bawah regulasi?</b></td><td>Ketegangan mendasar: aturan menuntut pihak yang bertanggung jawab, DeFi dirancang tanpa itu</td></tr>
  <tr><td><b>Kapan kuantum jadi ancaman nyata?</b></td><td>Perkiraannya sangat beragam — seperti kamu pelajari di modul Kriptografi</td></tr>
</table>

<div class="callout warn">
<b>Perhatikan:</b> tiga dari empat pertanyaan itu <b>bukan pertanyaan teknis</b>. Jawabannya ditentukan regulasi, politik, dan kebiasaan manusia. Ini pelajaran penting: nasib sebuah teknologi sering ditentukan di luar teknologinya.
</div>

<h3>Dua skenario yang sama masuk akalnya</h3>
<table class="tbl">
  <tr><th>Skenario "menyatu"</th><th>Skenario "menyempit"</th></tr>
  <tr><td>Blockchain jadi infrastruktur di balik layar — dipakai bank dan perusahaan tanpa penggunanya sadar, seperti protokol internet</td><td>Pemakaiannya mengerucut ke beberapa hal saja: stablecoin, tokenisasi aset, dan penyimpan nilai — sisanya menyusut</td></tr>
  <tr><td>Ditandai oleh: makin banyak lembaga mapan memakainya diam-diam</td><td>Ditandai oleh: jumlah proyek berkurang, tapi yang bertahan makin dalam pemakaiannya</td></tr>
</table>
<p>Keduanya bisa terjadi bersamaan. Yang <b>tidak</b> didukung bukti adalah skenario "semua akan berjalan di blockchain" — yang sudah lebih dari satu dekade dijanjikan tanpa terwujud.</p>

<h3>Cara menyikapinya</h3>
<div class="callout">
• <b>Pisahkan teknologi dari asetnya.</b> Blockchain bisa berguna tanpa membuat token tertentu jadi investasi yang baik.<br>
• <b>Perhatikan pemakaian, bukan harga.</b> Jumlah pengguna yang membayar fee lebih memberi tahu daripada grafik harga.<br>
• <b>Ikuti regulasinya.</b> Karena tiga dari empat pertanyaan terbuka ditentukan di sana.<br>
• <b>Curigai kepastian.</b> Di bidang yang belum berumur dua puluh tahun, keyakinan mutlak adalah tanda bahaya.
</div>

<div class="callout warn">
<b>Penutup jalur Blockchain.</b> Kamu sudah belajar dari cara kerja hash sampai forensik, dari DeFi sampai ekonomi protokol. Yang paling berharga dari semuanya bukan hafalan istilah, melainkan kemampuan bertanya: <b>"masalah apa yang sebenarnya diselesaikan, dan siapa yang mau membayar untuk itu?"</b><br><br>
<i>Materi ini untuk edukasi, bukan saran investasi.</i>
</div>
`,
          keyPoints: [
            "Empat pertanyaan yang belum terjawab: peran Bitcoin, CBDC vs stablecoin, DeFi di bawah regulasi, dan waktu datangnya ancaman kuantum.",
            "Tiga dari empat pertanyaan itu bukan pertanyaan teknis — jawabannya ditentukan regulasi, politik, dan kebiasaan manusia.",
            "Dua skenario sama masuk akalnya: blockchain jadi infrastruktur di balik layar, atau pemakaiannya mengerucut ke beberapa hal saja.",
            "Skenario 'semua akan berjalan di blockchain' sudah lebih dari satu dekade dijanjikan tanpa terwujud.",
            "Pisahkan teknologi dari asetnya: blockchain bisa berguna tanpa membuat token tertentu jadi investasi yang baik.",
            "Perhatikan jumlah pengguna yang membayar fee, bukan grafik harga.",
          ],
          quiz: [
            {
              q: "Kenapa nasib CBDC dan DeFi disebut bukan pertanyaan teknis?",
              options: [
                "Karena jawabannya ditentukan regulasi, politik, dan kebiasaan manusia",
                "Karena teknologinya sudah selesai sehingga tidak ada lagi yang dikembangkan",
                "Karena keduanya tidak memakai blockchain dalam pengertian sesungguhnya",
                "Karena tidak ada ahli teknis yang bersedia membahasnya secara terbuka",
              ],
              answer: 0,
              explain: "Nasib sebuah teknologi sering ditentukan di luar teknologinya sendiri.",
            },
            {
              q: "Skenario mana yang TIDAK didukung bukti sejauh ini?",
              options: [
                "Bahwa hampir semua sistem akan berpindah berjalan di atas blockchain",
                "Bahwa blockchain jadi infrastruktur di balik layar tanpa disadari pengguna",
                "Bahwa pemakaiannya mengerucut ke stablecoin dan tokenisasi aset",
                "Bahwa kedua skenario tersebut berlangsung secara bersamaan",
              ],
              answer: 0,
              explain: "Janji itu sudah lebih dari satu dekade disampaikan tanpa terwujud.",
            },
            {
              q: "Ukuran mana yang lebih memberi tahu tentang kesehatan sebuah protokol?",
              options: [
                "Jumlah pengguna yang benar-benar membayar fee untuk memakainya",
                "Pergerakan harga tokennya dalam tiga bulan terakhir",
                "Banyaknya pemberitaan media tentang proyek tersebut",
                "Jumlah pengikut akun resminya di media sosial",
              ],
              answer: 0,
              explain: "Harga bisa digerakkan spekulasi; fee yang dibayar menunjukkan kegunaan nyata.",
            },
          ],
        },
      ],
    },
  ],
};
