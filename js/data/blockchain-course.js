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
    /* ---------------- LEVEL DASAR (MULAI DARI NOL) ---------------- */
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
                "Karena kertasnya mahal",
                "Karena semua orang sepakat & percaya ia berharga",
                "Karena berat",
                "Karena berwarna",
              ],
              answer: 1,
              explain: "Nilai uang berasal dari kesepakatan & kepercayaan bersama.",
            },
            {
              q: "Saat transfer bank, apa yang sebenarnya terjadi?",
              options: [
                "Uang fisik dikirim lewat kabel",
                "Bank mengubah angka saldo di catatannya",
                "Emas berpindah",
                "Tidak terjadi apa-apa",
              ],
              answer: 1,
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
                "Membayar dua kali lipat harga",
                "Membelanjakan uang digital yang sama lebih dari sekali dengan menyalinnya",
                "Belanja terlalu banyak",
                "Lupa password",
              ],
              answer: 1,
              explain: "Karena file mudah disalin, uang digital bisa dibelanjakan berulang tanpa pencegah.",
            },
            {
              q: "Apa yang membuat blockchain istimewa dalam soal ini?",
              options: [
                "Ia memakai satu bank besar",
                "Ia mencegah double-spending tanpa pencatat pusat",
                "Ia melarang uang digital",
                "Ia menyalin uang lebih cepat",
              ],
              answer: 1,
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini paham fondasinya: uang butuh <b>kepercayaan</b>, uang digital menghadapi <b>double-spending</b>, dan <b>desentralisasi</b> menyelesaikannya tanpa satu pihak berkuasa. Lanjut ke modul <b>Pemula</b> untuk melihat cara kerjanya!
</div>
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
                "Lebih murah listrik",
                "Banyak pihak memegang salinan, jadi lebih tahan gangguan & sulit dicurangi",
                "Hanya satu orang yang mengatur",
                "Lebih lambat",
              ],
              answer: 1,
              explain: "Salinan tersebar membuatnya tahan banting & perubahan mudah ketahuan.",
            },
            {
              q: "Apa itu 'node' dalam blockchain?",
              options: [
                "Sejenis koin",
                "Komputer di jaringan yang menyimpan salinan catatan",
                "Dompet fisik",
                "Nama perusahaan",
              ],
              answer: 1,
              explain: "Node adalah komputer peserta jaringan yang memegang catatan blockchain.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL PEMULA ---------------- */
    {
      id: "bc-pemula",
      level: "Pemula",
      title: "Dasar-Dasar Blockchain",
      summary: "Apa itu blockchain, Bitcoin, dan mengapa ini penting.",
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

<h3>Apa yang "mengunci" rantai? Hash 🔒</h3>
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
                "Disimpan di satu server pusat",
                "Tersebar di banyak komputer & sulit diubah",
                "Hanya bisa diakses bank",
                "Gratis tanpa batas",
              ],
              answer: 1,
              explain:
                "Desentralisasi + sifat tak-bisa-diubah adalah inti blockchain.",
            },
            {
              q: "Mengapa data sulit dipalsukan di blockchain?",
              options: [
                "Karena dijaga satpam",
                "Karena banyak komputer punya salinan identik untuk dibandingkan",
                "Karena pakai password panjang",
                "Karena disimpan di flashdisk",
              ],
              answer: 1,
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
                "Internet lambat",
                "Double spending (membelanjakan koin yang sama dua kali)",
                "Baterai HP boros",
                "Email spam",
              ],
              answer: 1,
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
              options: ["Private key", "Seed phrase", "Public key / alamat", "Password email"],
              answer: 2,
              explain:
                "Public key/alamat seperti nomor rekening — aman dibagikan.",
            },
            {
              q: "Apa arti 'Not your keys, not your coins'?",
              options: [
                "Koin gratis untuk semua",
                "Pemegang private key adalah pemilik dana sesungguhnya",
                "Kunci bisa dipakai bergantian",
                "Bank menyimpan kuncimu",
              ],
              answer: 1,
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
                "Mempercantik transaksi",
                "Membuktikan kepemilikan tanpa membocorkan private key",
                "Mempercepat internet",
                "Menyimpan koin",
              ],
              answer: 1,
              explain:
                "Tanda tangan membuktikan kamu pemilik sah tanpa mengungkap kuncinya.",
            },
            {
              q: "Mengapa biaya transaksi (gas) bisa naik?",
              options: [
                "Karena cuaca",
                "Karena jaringan sedang ramai/padat",
                "Karena harga listrik tetap",
                "Karena wallet penuh",
              ],
              answer: 1,
              explain:
                "Saat banyak yang bertransaksi, biaya naik karena perebutan ruang blok.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL MENENGAH ---------------- */
    {
      id: "bc-menengah",
      level: "Menengah",
      title: "Ethereum, Smart Contract & Token",
      summary: "Dari uang digital menuju komputer dunia & aplikasi terdesentralisasi.",
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
                "Ethereum lebih murah selalu",
                "Ethereum bisa menjalankan program/smart contract",
                "Ethereum tidak pakai blockchain",
                "Ethereum dikontrol bank",
              ],
              answer: 1,
              explain:
                "Kemampuan menjalankan smart contract adalah pembeda utama Ethereum.",
            },
            {
              q: "Apa fungsi ETH di jaringan Ethereum?",
              options: [
                "Hanya hiasan",
                "Bahan bakar (gas) untuk menjalankan transaksi & program",
                "Mengganti listrik",
                "Menyimpan gambar",
              ],
              answer: 1,
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
                "Mesin penjual otomatis (vending machine)",
                "Buku catatan",
                "Kalkulator",
                "Mesin cuci",
              ],
              answer: 0,
              explain:
                "Keduanya menjalankan aturan otomatis tanpa perantara saat syarat terpenuhi.",
            },
            {
              q: "Mengapa bug di smart contract berbahaya?",
              options: [
                "Bisa dihapus kapan saja",
                "Karena kode tak bisa diubah, kesalahan jadi permanen & dana bisa hilang",
                "Tidak berbahaya sama sekali",
                "Hanya memperlambat jaringan",
              ],
              answer: 1,
              explain:
                "Sifat immutable membuat kesalahan sulit/ tak bisa diperbaiki.",
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
                "NFT lebih murah",
                "NFT bersifat unik & tidak bisa ditukar 1:1",
                "NFT tidak di blockchain",
                "NFT hanya berupa uang",
              ],
              answer: 1,
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
          id: "bc-m-4",
          title: "DeFi: Keuangan Tanpa Bank",
          duration: "10 menit",
          content: `
<p><b>DeFi (Decentralized Finance)</b> adalah layanan keuangan — pinjam, simpan, tukar, bunga — yang berjalan lewat smart contract, tanpa bank atau perantara.</p>

<div data-diagram="compare3" data-cols="Menabung::Bank: bunga ditentukan bank::DeFi: bunga ikut pasar|Meminjam::Bank: cek skor kredit::DeFi: wajib ada jaminan|Menukar::Bank: jam kerja::DeFi: 24 jam nonstop" data-caption="Tiga layanan bank yang ditiru DeFi — tanpa kantor dan tanpa petugas"></div>


<h3>Layanan DeFi populer</h3>
<ul>
  <li><b>DEX</b> (Decentralized Exchange) — tukar token langsung antar pengguna (mis. Uniswap).</li>
  <li><b>Lending</b> — pinjamkan asetmu untuk dapat bunga, atau pinjam dengan jaminan.</li>
  <li><b>Stablecoin</b> — token yang nilainya dipatok ke aset stabil (mis. 1 USDT ≈ 1 USD) agar tak fluktuatif.</li>
  <li><b>Staking/Yield</b> — mengunci aset untuk membantu jaringan & mendapat imbalan.</li>
</ul>

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
                "Menggandakan uang otomatis",
                "Token yang nilainya dipatok stabil ke aset seperti dolar",
                "Token tercepat",
                "Token rahasia",
              ],
              answer: 1,
              explain:
                "Stablecoin mengurangi volatilitas dengan mematok nilai ke aset stabil.",
            },
            {
              q: "DEX (Decentralized Exchange) berfungsi untuk?",
              options: [
                "Menyimpan foto",
                "Menukar token langsung tanpa perantara terpusat",
                "Mengirim email",
                "Menambang Bitcoin",
              ],
              answer: 1,
              explain:
                "DEX memungkinkan pertukaran token peer-to-peer lewat smart contract.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL MAHIR ---------------- */
    {
      id: "bc-mahir",
      level: "Mahir",
      title: "Konsensus, Solidity & Web3",
      summary: "Cara jaringan sepakat, menulis smart contract, dan membangun Web3.",
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
                "Tidak aman",
                "Boros konsumsi energi listrik",
                "Tidak bisa dipakai",
                "Terlalu cepat",
              ],
              answer: 1,
              explain:
                "PoW butuh komputasi besar sehingga sangat boros energi.",
            },
            {
              q: "Pada Proof of Stake, validator dipilih berdasarkan?",
              options: [
                "Kecepatan internet",
                "Jumlah koin yang dikunci sebagai jaminan (stake)",
                "Usia akun",
                "Lokasi geografis",
              ],
              answer: 1,
              explain:
                "Stake (koin yang dipertaruhkan) menjadi dasar partisipasi & jaminan kejujuran.",
            },
          ],
        },
        {
          id: "bc-a-2",
          title: "Mengenal Solidity (Bahasa Smart Contract)",
          duration: "12 menit",
          content: `
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

<h3>Yang perlu dipahami</h3>
<ul>
  <li><b>contract</b> — mirip "class", wadah kode & data.</li>
  <li><b>function ... public</b> — fungsi yang bisa dipanggil dari luar.</li>
  <li><b>view</b> — fungsi yang hanya membaca (tidak mengubah data, jadi gratis/tanpa gas).</li>
  <li>Mengubah data (mis. <code>simpan</code>) butuh transaksi & <b>biaya gas</b>.</li>
</ul>

<div class="callout">
<b>Coba sendiri:</b> Buka <b>Remix IDE</b> (remix.ethereum.org) di browser — editor Solidity gratis tanpa instalasi, lengkap dengan jaringan uji coba.
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
                "Menghapus data",
                "Hanya membaca data, tidak mengubahnya (tanpa gas)",
                "Mengirim koin",
                "Membuat contract baru",
              ],
              answer: 1,
              explain:
                "'view' menandai fungsi baca-saja yang tidak mengubah state.",
            },
            {
              q: "Kapan kamu perlu membayar gas?",
              options: [
                "Saat membaca data",
                "Saat mengubah/menulis data ke blockchain",
                "Tidak pernah",
                "Saat membuka Remix",
              ],
              answer: 1,
              explain:
                "Operasi tulis mengubah state blockchain sehingga butuh gas.",
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
                "Email & password",
                "Menghubungkan wallet (mis. MetaMask)",
                "Nomor KTP",
                "Sidik jari saja",
              ],
              answer: 1,
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
          id: "bc-a-4",
          title: "Keamanan, Scam & Penutup",
          duration: "10 menit",
          content: `
<p>Dunia crypto penuh peluang sekaligus jebakan. Keamanan adalah tanggung jawabmu sendiri — tidak ada bank yang membatalkan transaksi.</p>

<div data-diagram="layers" data-items="Jangan bagikan seed phrase|Pakai dompet hardware|Cek alamat kontrak resmi|Curigai imbal hasil pasti|Mulai dari nominal kecil" data-caption="Lima lapis pertahanan — yang paling atas tidak bisa ditawar"></div>


<h3>Penipuan yang sering terjadi</h3>
<ul>
  <li><b>Phishing</b> — situs/email palsu meminta seed phrase. JANGAN pernah masukkan seed phrase di situs mana pun.</li>
  <li><b>Rug pull</b> — pembuat proyek kabur membawa dana setelah mengumpulkan investor.</li>
  <li><b>Giveaway palsu</b> — "kirim 1 ETH, dapat 2 ETH kembali". Selalu hoaks.</li>
  <li><b>Token palsu</b> — meniru proyek terkenal.</li>
</ul>

<h3>Kebiasaan aman</h3>
<ol>
  <li>Simpan seed phrase secara offline; jangan difoto/diketik online.</li>
  <li>Gunakan cold wallet untuk dana besar.</li>
  <li>Verifikasi alamat situs & kontrak sebelum berinteraksi.</li>
  <li>Skeptis pada janji "untung pasti & cepat".</li>
  <li>DYOR — Do Your Own Research.</li>
</ol>

<div class="callout">
<b>Selamat! 🎓</b> Kamu telah menempuh perjalanan dari "apa itu blockchain" sampai konsensus, Solidity, dan Web3. Lanjutkan dengan praktik di jaringan uji coba (testnet) yang gratis & tanpa risiko sebelum menyentuh dana sungguhan.
</div>

<div class="callout warn">
<b>Pengingat:</b> Seluruh materi ini bersifat edukasi, bukan saran finansial/investasi. Crypto sangat berisiko.
</div>
`,
          keyPoints: [
            "Keamanan crypto adalah tanggung jawab pribadi; transaksi tak bisa dibatalkan.",
            "Waspadai phishing, rug pull, giveaway palsu, dan token tiruan.",
            "Simpan seed phrase offline, pakai cold wallet, dan selalu DYOR.",
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
                "Promo resmi",
                "Penipuan (scam) yang harus dihindari",
                "Fitur staking",
                "Bonus bank",
              ],
              answer: 1,
              explain:
                "Itu pola giveaway palsu klasik — selalu penipuan.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL PROYEK (PRODUKSI) ---------------- */
    {
      id: "bc-proyek",
      level: "Proyek",
      title: "Proyek Produksi Web3",
      summary: "Praktik nyata: siapkan dompet & testnet, deploy smart contract, hubungkan ke web.",
      lessons: [
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
                "Menjual koin asli",
                "Memberi koin uji gratis untuk membayar gas saat berlatih",
                "Menyimpan seed phrase",
                "Mempercepat transaksi mainnet",
              ],
              answer: 1,
              explain:
                "Faucet membagikan koin testnet gratis agar developer bisa menguji transaksi.",
            },
            {
              q: "Mengapa berlatih di testnet sebelum mainnet?",
              options: [
                "Karena lebih lambat",
                "Karena koinnya tak bernilai, jadi bebas bereksperimen tanpa kehilangan uang",
                "Karena wajib oleh hukum",
                "Karena tidak butuh dompet",
              ],
              answer: 1,
              explain:
                "Testnet memungkinkan uji coba aman tanpa risiko finansial.",
            },
          ],
        },
        {
          id: "bc-pro-2",
          title: "Tulis & Deploy Smart Contract (Remix)",
          duration: "13 menit",
          content: `
<p>Kita akan menulis smart contract dan men-<b>deploy</b>-nya ke testnet — tanpa instalasi apa pun, lewat <b>Remix IDE</b> di browser.</p>

<h3>Contoh kontrak penghitung</h3>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Penghitung {
    uint256 public jumlah;          // tersimpan di blockchain, bisa dibaca publik

    function tambah() public {      // menulis -> butuh transaksi & gas
        jumlah = jumlah + 1;
    }

    function baca() public view returns (uint256) {  // membaca -> gratis
        return jumlah;
    }
}</pre>

<h3>Langkah deploy</h3>
<ol>
  <li>Buka <b>remix.ethereum.org</b>, buat file <code>Penghitung.sol</code>, tempel kode di atas.</li>
  <li>Tab <b>Solidity Compiler</b> → klik <b>Compile</b>.</li>
  <li>Tab <b>Deploy & Run</b> → Environment pilih <b>"Injected Provider - MetaMask"</b> (memakai dompet & testnet-mu).</li>
  <li>Klik <b>Deploy</b> → setujui transaksi di MetaMask (membayar gas dengan ETH testnet).</li>
  <li>Setelah jadi, panggil <b>tambah()</b> (butuh transaksi) lalu <b>baca()</b> (gratis) untuk melihat nilainya naik.</li>
</ol>

<div class="callout">
<b>Selamat — kontrakmu kini hidup di blockchain!</b> Siapa pun bisa melihat dan memanggilnya. Karena <b>immutable</b>, kode tak bisa diubah setelah deploy — uji matang dulu di testnet.
</div>
`,
          keyPoints: [
            "Remix IDE memungkinkan menulis, compile, dan deploy smart contract dari browser.",
            "'Injected Provider - MetaMask' menghubungkan Remix ke dompet & testnet-mu.",
            "Fungsi tulis (tambah) butuh transaksi & gas; fungsi view (baca) gratis.",
            "Kontrak bersifat immutable setelah deploy — uji matang di testnet dulu.",
          ],
          quiz: [
            {
              q: "Saat deploy lewat Remix, Environment apa yang dipilih agar memakai dompet & testnet?",
              options: [
                "Remix VM",
                "Injected Provider - MetaMask",
                "Localhost",
                "Hardhat",
              ],
              answer: 1,
              explain:
                "'Injected Provider - MetaMask' menyuntikkan koneksi dompet & jaringan yang aktif.",
            },
            {
              q: "Mengapa kontrak harus diuji matang sebelum deploy ke mainnet?",
              options: [
                "Karena gas mahal",
                "Karena kode immutable — tak bisa diubah setelah deploy, bug jadi permanen",
                "Karena Remix lambat",
                "Karena wajib audit pemerintah",
              ],
              answer: 1,
              explain:
                "Sifat immutable membuat kesalahan permanen; testnet adalah tempat menguji.",
            },
          ],
        },
        {
          id: "bc-pro-3",
          title: "Hubungkan Web ke Smart Contract (ethers.js)",
          duration: "13 menit",
          content: `
<p>Agar pengguna biasa bisa memakai kontrakmu lewat website, kita pakai library <b>ethers.js</b> untuk menjembatani halaman web dengan blockchain.</p>

<pre class="code">npm install ethers</pre>

<h3>1. Hubungkan dompet pengguna</h3>
<pre class="code">import { ethers } from "ethers";

// window.ethereum disuntikkan oleh MetaMask di browser
const provider = new ethers.BrowserProvider(window.ethereum);
await provider.send("eth_requestAccounts", []);   // minta izin connect
const signer = await provider.getSigner();          // yang menandatangani transaksi</pre>

<h3>2. Sambungkan ke kontrak</h3>
<pre class="code">// ABI = "daftar menu" fungsi kontrak (dihasilkan saat compile di Remix)
const abi = [
  "function tambah() public",
  "function baca() view returns (uint256)"
];
const alamatKontrak = "0x...";   // alamat hasil deploy

const kontrak = new ethers.Contract(alamatKontrak, abi, signer);</pre>

<h3>3. Baca & tulis</h3>
<pre class="code">// Membaca (gratis, instan)
const nilai = await kontrak.baca();
console.log("Jumlah sekarang:", nilai.toString());

// Menulis (butuh gas, perlu konfirmasi di MetaMask)
const tx = await kontrak.tambah();
await tx.wait();                 // tunggu transaksi dikonfirmasi
console.log("Berhasil ditambah!");</pre>

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
                "Menyimpan private key",
                "Memberi tahu kode daftar fungsi kontrak & cara memanggilnya",
                "Mempercepat internet",
                "Membayar gas",
              ],
              answer: 1,
              explain:
                "ABI mendeskripsikan antarmuka fungsi kontrak agar bisa dipanggil dari kode.",
            },
            {
              q: "Operasi mana yang memerlukan gas & konfirmasi pengguna?",
              options: [
                "Membaca data (view)",
                "Menulis/mengubah data (mis. tambah)",
                "Memuat halaman web",
                "Menampilkan ABI",
              ],
              answer: 1,
              explain:
                "Operasi tulis mengubah state blockchain sehingga butuh transaksi bergas.",
            },
          ],
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

<h3>🔒 Keamanan produksi</h3>
<ul>
  <li><b>Pakai library teruji</b> — gunakan <b>OpenZeppelin</b> untuk token & pola standar, jangan tulis dari nol.</li>
  <li><b>Audit keamanan</b> — kontrak yang memegang dana wajib diaudit pihak ketiga.</li>
  <li><b>Waspada bug klasik</b> — mis. <i>reentrancy</i> (serangan panggil-ulang) yang menguras dana.</li>
  <li><b>Optimasi gas</b> — kode efisien menekan biaya pengguna.</li>
  <li><b>Uji di testnet dulu</b> — selalu, sebelum mainnet.</li>
  <li><b>Jangan hardcode private key</b> di kode — pakai environment variable & dompet aman.</li>
</ul>

<div class="callout">
<b>Selamat! 🎓</b> Kamu telah menempuh jalur Web3 lengkap: dari setup dompet & testnet, menulis & deploy smart contract, menghubungkannya ke web, hingga use-case nyata dan keamanan produksi. Kamu siap membangun DApp pertamamu!
</div>

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
                "Menulis semua pola dari nol untuk belajar",
                "Memakai library teruji (OpenZeppelin) dan mengaudit kontrak yang memegang dana",
                "Langsung deploy ke mainnet tanpa uji",
                "Menaruh private key di dalam kode",
              ],
              answer: 1,
              explain:
                "Library teruji + audit + uji testnet adalah fondasi keamanan produksi.",
            },
            {
              q: "Manakah contoh penggunaan blockchain di luar spekulasi harga?",
              options: [
                "Melacak asal barang di rantai pasok secara transparan",
                "Mempercepat WiFi",
                "Mengedit foto",
                "Menyimpan film",
              ],
              answer: 0,
              explain:
                "Pelacakan rantai pasok yang transparan & anti-palsu adalah use-case nyata blockchain.",
            },
          ],
        },
        {
          id: "bc-pro-studi",
          title: "Studi Kasus Mendalam: Kenapa Rantai Anti-Curang",
          duration: "12 menit",
          content: `
<p>Kamu sudah melihat demo blockchain interaktif. Sekarang kita bedah <b>kode</b> di baliknya agar paham betul kenapa pemalsuan ketahuan.</p>

<h3>Idenya</h3>
<p>Tiap blok menyimpan <b>hash</b> (sidik jari) dari isinya, plus hash blok sebelumnya. Validasi mengecek dua hal untuk setiap blok: (1) apakah <i>prev</i>-nya cocok dengan hash blok sebelumnya, dan (2) apakah hash-nya masih cocok dengan datanya. Ubah satu data → hash berubah → validasi gagal.</p>

<h3>Coba sendiri — jalankan, lalu lihat rantai rusak 👇</h3>
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
                "Karena internet putus",
                "Karena hash blok itu berubah & tak lagi cocok dengan yang dirujuk blok berikutnya",
                "Karena gas naik",
                "Karena wallet terkunci",
              ],
              answer: 1,
              explain:
                "Tiap blok terikat ke hash sebelumnya; perubahan data memutus kecocokan itu.",
            },
            {
              q: "Apa dua hal yang dicek fungsi validasi 'sah()'?",
              options: [
                "Warna & ukuran blok",
                "prev cocok dengan hash sebelumnya, dan hash cocok dengan data blok",
                "Saldo & nama",
                "Tanggal & waktu",
              ],
              answer: 1,
              explain:
                "Validasi memastikan keterkaitan antar-blok dan integritas data tiap blok.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL FUNDAMENTAL (KRIPTOGRAFI) ---------------- */
    {
      id: "bc-fundamental",
      level: "Fundamental",
      title: "Fundamental Kriptografi Blockchain",
      summary: "Dari akar: fungsi hash, kunci publik-privat, Merkle tree, dan ekonomi gas.",
      lessons: [
        {
          id: "bc-fund-1",
          title: "Fungsi Hash — Fondasi Blockchain",
          duration: "11 menit",
          content: `
<p>Blockchain berdiri di atas satu alat matematika: <b>fungsi hash kriptografis</b>. Ia mengubah data apa pun menjadi "sidik jari" digital berukuran tetap.</p>

<div data-diagram="pipeline" data-stages="Masukan apa pun::1 huruf atau 1 buku|Fungsi hash::diaduk searah|Keluaran::panjangnya selalu sama|Ubah 1 huruf::hasil berubah total" data-caption="Empat sifat hash yang membuat blockchain mungkin"></div>


<h3>Empat sifat kunci</h3>
<ul>
  <li><b>Deterministik</b> — input sama selalu menghasilkan output sama.</li>
  <li><b>Satu arah</b> — dari output tak mungkin balik ke input asli.</li>
  <li><b>Efek avalanche</b> — ubah 1 huruf saja, output berubah <b>total</b>.</li>
  <li><b>Tahan tabrakan</b> — sangat sulit menemukan dua input berbeda dengan hash sama.</li>
</ul>
<p>Bitcoin memakai <b>SHA-256</b> (menghasilkan 256 bit / 64 karakter heksadesimal).</p>

<h3>Coba sendiri — buktikan efek avalanche 👇</h3>
<div data-demo="js-playground">// hash sederhana untuk demo (bukan SHA-256 asli, tapi sifatnya mirip)
function hash(s){ let h=0; s.split("").forEach(function(ch){ h=(h*31+ch.charCodeAt(0))>>>0; }); return h.toString(16); }

console.log("hash('Halo')  = " + hash("Halo"));
console.log("hash('Halo!') = " + hash("Halo!"));
console.log("hash('halo')  = " + hash("halo"));
console.log("Ubah 1 huruf -> hash berubah total (efek avalanche).");</div>

<div class="callout">
<b>💥 Peran & dampak:</b> Hash <b>mengunci</b> tiap blok ke blok sebelumnya, membuat perubahan sekecil apa pun langsung ketahuan. Hash juga menjadi dasar <b>Proof of Work</b> (menambang = mencari input agar hash memenuhi syarat). Tanpa fungsi hash, tidak ada blockchain.
</div>
`,
          keyPoints: [
            "Fungsi hash mengubah data apa pun jadi sidik jari berukuran tetap.",
            "Sifat: deterministik, satu arah, efek avalanche, tahan tabrakan.",
            "Peran: mengunci blok, mendeteksi perubahan, dan fondasi Proof of Work.",
          ],
          quiz: [
            {
              q: "Apa itu 'efek avalanche' pada fungsi hash?",
              options: [
                "Hash menjadi lebih pendek",
                "Perubahan input sekecil apa pun mengubah output secara total",
                "Hash bisa dibalik",
                "Hash selalu sama",
              ],
              answer: 1,
              explain:
                "Perubahan 1 bit input mengubah hash total — inti pendeteksian perubahan.",
            },
            {
              q: "Mengapa sifat 'satu arah' penting?",
              options: [
                "Agar hash cepat",
                "Agar dari hash tak bisa direkonstruksi data aslinya",
                "Agar hash pendek",
                "Agar gratis",
              ],
              answer: 1,
              explain: "Sifat satu arah menjaga keamanan; hash tak bisa dibalik ke input.",
            },
          ],
        },
        {
          id: "bc-fund-2",
          title: "Kriptografi Kunci Publik & Tanda Tangan Digital",
          duration: "12 menit",
          content: `
<p>Bagaimana kamu membuktikan "ini transaksiku" tanpa membocorkan rahasia? Jawabannya: <b>kriptografi kunci publik (asimetris)</b>.</p>

<div data-diagram="sign" ></div>


<h3>Sepasang kunci yang terhubung</h3>
<ul>
  <li><b>Private key</b> — rahasia, untuk <b>menandatangani</b>.</li>
  <li><b>Public key</b> — boleh dibagikan, untuk <b>memverifikasi</b>.</li>
</ul>
<p>Keduanya terhubung secara matematis, tapi bersifat <b>satu arah</b>: dari public key mustahil menghitung private key. (Alamat dompet adalah turunan dari public key.)</p>

<h3>Tanda tangan digital</h3>
<div class="callout">
<b>Cara kerja:</b> Kamu "menandatangani" transaksi dengan <b>private key</b>. Siapa pun bisa memverifikasi tanda tangan itu dengan <b>public key</b>-mu. Ini membuktikan dua hal sekaligus: (1) kamu pemilik sahnya, dan (2) pesan tidak diubah sedikit pun setelah ditandatangani.
</div>

<h3>💥 Dampak</h3>
<ul>
  <li>Transaksi <b>tidak bisa dipalsukan</b> tanpa private key — inilah keamanan inti crypto.</li>
  <li>Kamu membuktikan kepemilikan <b>tanpa</b> pernah mengungkap kuncimu.</li>
  <li>Menjelaskan kenapa "not your keys, not your coins" — siapa yang pegang private key, dialah pemilik.</li>
</ul>
<p>Kaitkan dengan pelajaran <b>"Wallet, Kunci, &amp; Alamat"</b> untuk gambaran praktisnya.</p>
`,
          keyPoints: [
            "Kriptografi asimetris memakai sepasang kunci: private (tanda tangan) & public (verifikasi).",
            "Dari public key mustahil menurunkan private key (satu arah); alamat = turunan public key.",
            "Tanda tangan digital membuktikan kepemilikan sah & keutuhan pesan tanpa membocorkan kunci.",
            "Dampak: transaksi tak bisa dipalsukan tanpa private key — keamanan inti crypto.",
          ],
          quiz: [
            {
              q: "Kunci mana yang dipakai untuk MENANDATANGANI transaksi?",
              options: ["Public key", "Private key", "Alamat", "Seed publik"],
              answer: 1,
              explain: "Private key menandatangani; public key memverifikasi.",
            },
            {
              q: "Apa yang dibuktikan sebuah tanda tangan digital?",
              options: [
                "Harga koin",
                "Kepemilikan sah + pesan tidak diubah, tanpa membocorkan private key",
                "Kecepatan jaringan",
                "Jumlah gas",
              ],
              answer: 1,
              explain:
                "Tanda tangan membuktikan pemilik sah & integritas pesan tanpa mengungkap kunci.",
            },
          ],
        },
        {
          id: "bc-fund-3",
          title: "Merkle Tree & Struktur Blok",
          duration: "12 menit",
          content: `
<p>Satu blok bisa berisi ribuan transaksi. Bagaimana meringkasnya menjadi satu sidik jari & memverifikasinya secara efisien? Jawabannya: <b>Merkle Tree</b>.</p>

<div data-diagram="layers" data-items="Merkle Root (1 hash)|Hash Pasangan|Hash Tiap Transaksi" data-caption="Merkle tree meringkas semua transaksi"></div>


<h3>Cara kerja (pohon hash)</h3>
<ol>
  <li>Tiap transaksi di-hash.</li>
  <li>Hash-hash itu dipasangkan lalu di-hash lagi bersama.</li>
  <li>Diulang naik terus sampai tersisa <b>satu hash puncak</b> = <b>Merkle Root</b>.</li>
</ol>
<p>Merkle root ini disimpan di <b>header blok</b> dan mewakili SELURUH transaksi. Ubah satu transaksi saja → seluruh jalur hash berubah → Merkle root berubah → ketahuan.</p>

<div class="callout">
<b>Manfaat besar:</b> Kita bisa membuktikan sebuah transaksi ada di dalam blok <b>tanpa mengunduh semua transaksi</b> — cukup jalur hash pendek menuju root. Ini yang memungkinkan dompet ringan (SPV) di HP.
</div>

<h3>Isi sebuah blok</h3>
<ul>
  <li><b>Header</b>: hash blok sebelumnya, Merkle root, timestamp, nonce.</li>
  <li><b>Badan</b>: daftar transaksi.</li>
</ul>

<h3>💥 Dampak</h3>
<p>Merkle tree membuat blockchain <b>efisien & terverifikasi</b> pada skala besar — ringkas untuk disimpan, cepat untuk diperiksa, dan tetap anti-manipulasi.</p>
`,
          keyPoints: [
            "Merkle tree mem-hash transaksi berpasangan berulang hingga satu Merkle root.",
            "Merkle root di header blok mewakili semua transaksi; satu perubahan mengubah root.",
            "Manfaat: verifikasi ringkas (dompet ringan/SPV) tanpa mengunduh semua transaksi.",
            "Blok terdiri dari header (prev hash, Merkle root, timestamp, nonce) + daftar transaksi.",
          ],
          quiz: [
            {
              q: "Apa itu Merkle root?",
              options: [
                "Kunci privat blok",
                "Satu hash puncak yang mewakili seluruh transaksi dalam blok",
                "Alamat dompet",
                "Harga gas",
              ],
              answer: 1,
              explain: "Merkle root meringkas semua transaksi menjadi satu hash di header blok.",
            },
            {
              q: "Manfaat utama Merkle tree?",
              options: [
                "Membuat blok lebih besar",
                "Verifikasi transaksi efisien tanpa mengunduh semua data",
                "Menaikkan harga koin",
                "Menghapus transaksi",
              ],
              answer: 1,
              explain:
                "Merkle tree memungkinkan bukti keanggotaan ringkas — dasar dompet ringan.",
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

<h3>Lelang ruang blok</h3>
<div class="callout">
<b>Hukum penawaran-permintaan:</b> saat jaringan <b>ramai</b>, banyak orang bersaing memasukkan transaksi ke ruang blok yang terbatas → harga gas <b>naik</b> (seperti tarif ojek saat jam sibuk). Saat sepi, biaya turun.
</div>

<p>Sistem modern (mis. EIP-1559 di Ethereum) memakai <b>base fee</b> (biaya dasar yang otomatis menyesuaikan kepadatan & "dibakar") plus <b>tip</b> untuk validator agar transaksimu diprioritaskan.</p>

<h3>💥 Dampak</h3>
<ul>
  <li>Pengguna membayar lebih mahal saat jaringan padat → perlu memilih waktu/estimasi gas.</li>
  <li>Developer melakukan <b>optimasi gas</b> agar kontraknya murah dipakai.</li>
  <li>Fee juga <b>mencegah spam</b> — menyerang jaringan jadi mahal, sehingga lebih aman.</li>
</ul>

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini memahami blockchain dari fundamental kriptografinya: hash, kunci publik, Merkle tree, dan ekonomi gas. Inilah "mesin" di balik semua yang sudah kamu pelajari.
</div>
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
                "Karena listrik mahal",
                "Karena ruang blok terbatas & banyak transaksi bersaing memperebutkannya",
                "Karena harga koin naik",
                "Karena hash lebih panjang",
              ],
              answer: 1,
              explain:
                "Ruang blok langka; permintaan tinggi menaikkan harga gas (lelang ruang blok).",
            },
            {
              q: "Selain mengatur biaya, fungsi lain dari fee adalah?",
              options: [
                "Mempercepat internet",
                "Mencegah spam/serangan karena membuatnya mahal",
                "Menghapus blok lama",
                "Menambah supply koin",
              ],
              answer: 1,
              explain: "Fee membuat pembanjiran jaringan mahal, meningkatkan keamanan.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL LANJUTAN (TOPIK WEB3) ---------------- */
    {
      id: "bc-lanjutan",
      level: "Lanjutan",
      title: "Topik Lanjutan Web3",
      summary: "Skalabilitas (Layer 2), Oracle, DAO, dan Zero-Knowledge Proof.",
      lessons: [
        {
          id: "bc-adv-1",
          title: "Layer 2 & Skalabilitas",
          duration: "12 menit",
          content: `
<p>Blockchain seperti Ethereum aman & terdesentralisasi, tapi <b>lambat & mahal</b> saat ramai. Ini bagian dari <b>"trilemma blockchain"</b>.</p>

<div data-diagram="layers" data-items="Layer 2 (murah &amp; cepat)|Layer 1 (aman &amp; terdesentralisasi)" data-caption="L2 menumpang keamanan L1"></div>


<div class="callout">
<b>Trilemma:</b> sulit mencapai <b>Keamanan</b>, <b>Desentralisasi</b>, dan <b>Skalabilitas</b> (kecepatan) sekaligus — biasanya harus mengorbankan salah satu.
</div>

<h3>Solusi: Layer 2</h3>
<p><b>Layer 2 (L2)</b> adalah jaringan di "atas" blockchain utama (Layer 1) yang memproses transaksi secara <b>terpisah & murah</b>, lalu hanya menaruh ringkasannya ke L1 yang aman.</p>
<ul>
  <li><b>Rollup</b> — mengumpulkan (roll up) banyak transaksi jadi satu, lalu setor buktinya ke L1.
    <ul>
      <li><b>Optimistic Rollup</b> (mis. Arbitrum, Optimism) — menganggap transaksi valid kecuali ada yang menantang.</li>
      <li><b>ZK-Rollup</b> (mis. zkSync) — memakai bukti matematis (zero-knowledge) untuk memastikan validitas.</li>
    </ul>
  </li>
  <li><b>Sidechain</b> — blockchain terpisah yang terhubung, dengan aturannya sendiri.</li>
</ul>

<div class="callout">
<b>💥 Dampak:</b> L2 membuat transaksi <b>jauh lebih murah & cepat</b> (dari dolar jadi sen) sambil tetap "mewarisi" keamanan L1. Inilah cara Web3 melayani jutaan pengguna tanpa biaya gas yang mencekik.
</div>
`,
          keyPoints: [
            "Trilemma blockchain: sulit mencapai keamanan, desentralisasi, & skalabilitas sekaligus.",
            "Layer 2 memproses transaksi murah/cepat di atas L1, lalu menyetor ringkasan ke L1 yang aman.",
            "Rollup (Optimistic & ZK) dan sidechain adalah pendekatan L2 utama.",
            "Dampak: transaksi jauh lebih murah & cepat sambil mewarisi keamanan L1.",
          ],
          quiz: [
            {
              q: "Apa fungsi Layer 2?",
              options: [
                "Menggantikan blockchain utama",
                "Memproses transaksi murah & cepat di atas L1, lalu menyetor ringkasan ke L1",
                "Menambang koin baru",
                "Menyimpan private key",
              ],
              answer: 1,
              explain:
                "L2 mengurangi beban & biaya L1 sambil tetap mengandalkan keamanannya.",
            },
            {
              q: "Apa itu 'trilemma blockchain'?",
              options: [
                "Tiga jenis koin",
                "Sulitnya mencapai keamanan, desentralisasi, & skalabilitas sekaligus",
                "Tiga dompet",
                "Tiga bahasa program",
              ],
              answer: 1,
              explain:
                "Ketiga sifat itu saling tarik-menarik; L2 membantu meringankan trade-off.",
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

<h3>💥 Dampak</h3>
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
                "Agar lebih cepat",
                "Karena smart contract tak bisa mengakses data di luar blockchain sendiri",
                "Untuk menyimpan koin",
                "Untuk menambang",
              ],
              answer: 1,
              explain:
                "Blockchain tertutup; oracle membawa data eksternal ke dalam kontrak.",
            },
            {
              q: "Bagaimana oracle yang baik mengurangi risiko data salah?",
              options: [
                "Memakai satu sumber saja",
                "Memakai banyak sumber & node yang saling menyepakati data",
                "Mengabaikan data",
                "Menaikkan gas",
              ],
              answer: 1,
              explain:
                "Desentralisasi sumber/node mengurangi ketergantungan pada satu titik gagal.",
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

<h3>💥 Dampak & risiko</h3>
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
                "Oleh satu CEO",
                "Lewat voting pemegang token governance; yang lolos dieksekusi smart contract",
                "Secara acak",
                "Oleh pemerintah",
              ],
              answer: 1,
              explain:
                "DAO memakai tata kelola berbasis token & eksekusi otomatis oleh kontrak.",
            },
            {
              q: "Risiko utama DAO?",
              options: [
                "Terlalu transparan",
                "Bug smart contract yang fatal & konsentrasi token pada sedikit pihak (whale)",
                "Tidak punya token",
                "Tidak bisa dilihat siapa pun",
              ],
              answer: 1,
              explain:
                "Kode yang immutable membuat bug berbahaya; whale bisa mendominasi voting.",
            },
          ],
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
<b>💥 Dampak:</b> ZKP menggabungkan dua hal yang tadinya bertentangan — <b>transparansi verifikasi</b> dan <b>privasi data</b>. Ini teknologi kunci masa depan Web3, dari identitas digital sampai skalabilitas.
</div>

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini menguasai topik Web3 lanjutan: Layer 2, oracle, DAO, dan zero-knowledge proof — fondasi tren blockchain modern.
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
                "Membocorkan semua data",
                "Membuktikan sesuatu benar tanpa mengungkap datanya",
                "Menghapus data",
                "Menambang lebih cepat",
              ],
              answer: 1,
              explain:
                "ZKP meyakinkan verifikator tanpa mengungkap informasi rahasianya.",
            },
            {
              q: "Salah satu kegunaan ZKP di blockchain?",
              options: [
                "Membuat gas lebih mahal",
                "Privasi transaksi & skalabilitas (ZK-Rollup)",
                "Menghapus blok",
                "Menaikkan harga koin",
              ],
              answer: 1,
              explain:
                "ZKP memungkinkan transaksi privat & bukti ringkas untuk banyak transaksi (ZK-Rollup).",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL TERAPAN (DeFi & ASET KRIPTO) ---------------- */
    {
      id: "bc-terapan",
      level: "Terapan",
      title: "DeFi & Aset Kripto Terapan",
      summary: "Mekanisme nyata: AMM & liquidity pool, jenis stablecoin, bridge antar-chain, dan regulasi & pajak.",
      lessons: [
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

<h3>Coba sendiri — lihat harga bergerak 👇</h3>
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

<h3>💥 Dampak & risiko</h3>
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
                "Order book pembeli-penjual",
                "Rumus pada liquidity pool (mis. x × y = k)",
                "Keputusan bank",
                "Harga emas",
              ],
              answer: 1,
              explain: "AMM memakai rumus matematis atas kolam likuiditas, bukan order book.",
            },
            {
              q: "Apa risiko menjadi Liquidity Provider?",
              options: [
                "Tidak ada risiko",
                "Impermanent loss (rugi saat harga bergerak jauh) & bug smart contract",
                "Harus menambang",
                "Kehilangan internet",
              ],
              answer: 1,
              explain: "Pergerakan harga besar dapat merugikan LP dibanding sekadar memegang aset.",
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

<h3>💥 Dampak</h3>
<ul>
  <li>Stablecoin adalah <b>tulang punggung DeFi</b> & pembayaran crypto (jembatan ke dunia nyata).</li>
  <li>Pilih jenis dengan hati-hati: fiat/crypto-backed yang transparan jauh lebih aman daripada algoritmik.</li>
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
                "Fiat-backed (USDC)",
                "Crypto-backed (DAI)",
                "Algoritmik (mis. UST) — bisa runtuh/depeg",
                "Semua sama amannya",
              ],
              answer: 2,
              explain:
                "Stablecoin algoritmik menjaga patokan tanpa jaminan penuh, sehingga rapuh.",
            },
            {
              q: "Apa arti 'depeg' pada stablecoin?",
              options: [
                "Harga naik dua kali lipat",
                "Kehilangan patokan nilainya (mis. tak lagi ≈ 1 USD)",
                "Menambah cadangan",
                "Menjadi lebih aman",
              ],
              answer: 1,
              explain: "Depeg = stablecoin gagal mempertahankan nilai patokannya.",
            },
          ],
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
<b>💥 Risiko besar:</b> bridge sering menjadi <b>target peretasan terbesar</b> di crypto — karena menyimpan banyak aset di satu tempat dan kompleks secara teknis. Beberapa peretasan bridge mencuri <b>ratusan juta hingga miliaran dolar</b>. Pilih bridge yang teruji & hati-hati.
</div>

<h3>💥 Dampak</h3>
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
                "Menambang koin",
                "Memindahkan aset/data antar-blockchain yang berbeda",
                "Menyimpan private key",
                "Menaikkan harga gas",
              ],
              answer: 1,
              explain: "Bridge menghubungkan blockchain yang berbeda untuk memindahkan aset.",
            },
            {
              q: "Mengapa bridge berisiko tinggi?",
              options: [
                "Karena lambat",
                "Karena menyimpan banyak aset di satu tempat & kompleks → target peretasan besar",
                "Karena gratis",
                "Karena tidak dipakai",
              ],
              answer: 1,
              explain:
                "Konsentrasi aset & kerumitan teknis menjadikan bridge sasaran empuk peretas.",
            },
          ],
        },
        {
          id: "bc-app-4",
          title: "Regulasi & Pajak Aset Kripto",
          duration: "11 menit",
          content: `
<p>Crypto makin diatur pemerintah di seluruh dunia. Memahami regulasi & pajak penting agar tidak bermasalah secara hukum.</p>

<div data-diagram="pipeline" data-stages="Transaksi di bursa::pajak dipotong otomatis|Catat semuanya::tanggal, jumlah, harga|Laporkan di SPT::sebagai harta &amp; penghasilan|Simpan bukti::minimal 5 tahun" data-caption="Tarif pajak kripto berubah-ubah; kewajiban mencatat tidak pernah berubah"></div>


<h3>Di Indonesia (gambaran umum)</h3>
<ul>
  <li>Aset kripto <b>legal diperdagangkan</b> sebagai <b>komoditas</b> (pengawasan berpindah dari Bappebti ke OJK), <b>bukan</b> alat pembayaran yang sah.</li>
  <li>Ada <b>pajak</b> atas transaksi kripto (mis. PPN & PPh final) yang biasanya dipotong lewat exchange terdaftar.</li>
  <li>Exchange wajib menerapkan <b>KYC</b> (verifikasi identitas) & <b>AML</b> (anti pencucian uang).</li>
</ul>

<div class="callout warn">
<b>💥 Dampak:</b> mengabaikan pajak/regulasi bisa berujung <b>denda atau masalah hukum</b>. Perubahan regulasi juga bisa memengaruhi harga & legalitas suatu aset. Selalu pakai <b>exchange terdaftar/berizin</b> dan simpan catatan transaksimu.
</div>

<div class="callout">
<b>Catatan penting:</b> aturan & tarif berbeda antarnegara dan sering berubah. Untuk keputusan nyata, cek regulasi terbaru & konsultasikan dengan ahli pajak. Materi ini <b>edukasi, bukan saran finansial/hukum</b>.
</div>

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini memahami sisi terapan crypto: mekanisme DeFi (AMM), jenis & risiko stablecoin, bridge antar-chain, serta regulasi & pajak — pengetahuan yang membuatmu lebih aman & cerdas di dunia Web3.
</div>
`,
          keyPoints: [
            "Di Indonesia, kripto legal diperdagangkan sebagai komoditas (diawasi OJK), bukan alat pembayaran sah.",
            "Ada pajak transaksi kripto (PPN & PPh final), biasanya dipotong lewat exchange terdaftar.",
            "Exchange wajib menerapkan KYC & AML; gunakan exchange berizin & simpan catatan transaksi.",
            "Dampak: abaikan pajak/regulasi berisiko denda/hukum; aturan berbeda & berubah — konsultasikan ahli.",
          ],
          quiz: [
            {
              q: "Status aset kripto di Indonesia (gambaran umum)?",
              options: [
                "Alat pembayaran resmi",
                "Legal diperdagangkan sebagai komoditas, tapi bukan alat pembayaran sah",
                "Dilarang total",
                "Bebas pajak",
              ],
              answer: 1,
              explain:
                "Kripto diperlakukan sebagai komoditas yang boleh diperdagangkan, bukan mata uang resmi.",
            },
            {
              q: "Mengapa memakai exchange terdaftar/berizin itu penting?",
              options: [
                "Agar gratis",
                "Untuk kepatuhan pajak, KYC/AML, dan perlindungan hukum yang lebih baik",
                "Agar harga naik",
                "Tidak penting",
              ],
              answer: 1,
              explain:
                "Exchange berizin membantu kepatuhan & memberi perlindungan lebih dibanding yang ilegal.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL PENDALAMAN (BITCOIN & DOMPET) ---------------- */
    {
      id: "bc-pendalaman",
      level: "Pendalaman",
      title: "Bitcoin & Keamanan Dompet",
      summary: "Mendalami akar: pasokan terbatas & halving, cara kerja penambangan, dan mengamankan dompet.",
      lessons: [
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
<b>💥 Dampak:</b> pasokan yang terbatas & bisa <b>diprediksi</b> membuat Bitcoin tahan inflasi buatan — tidak ada otoritas yang bisa "mencetak" seenaknya. Inilah daya tarik utamanya sebagai penyimpan nilai.
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
                "Harga Bitcoin turun setengah",
                "Imbalan penambang dibagi dua setiap ~4 tahun, memperlambat pasokan baru",
                "Blok dibagi dua",
                "Jaringan berhenti",
              ],
              answer: 1,
              explain: "Halving memangkas imbalan blok jadi separuh secara berkala.",
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
<b>💥 Kenapa ini mengamankan jaringan?</b> Untuk memalsukan riwayat, penyerang harus mengulang "kerja" komputasi lebih cepat dari seluruh jaringan jujur — praktis mustahil & sangat mahal. Biaya inilah yang menjaga Bitcoin aman.
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
                "Menggali data lama",
                "Mencoba jutaan angka (nonce) sampai hash blok memenuhi syarat sulit",
                "Menyalin blok",
                "Menghapus transaksi",
              ],
              answer: 1,
              explain: "Menambang = coba-coba menemukan nonce yang membuat hash memenuhi target.",
            },
            {
              q: "Mengapa Proof of Work mengamankan jaringan?",
              options: [
                "Karena gratis",
                "Karena memalsukan riwayat butuh komputasi lebih besar dari seluruh jaringan jujur — sangat mahal",
                "Karena cepat",
                "Karena ada bank",
              ],
              answer: 1,
              explain: "Biaya komputasi yang besar membuat pemalsuan tak menguntungkan.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini mendalami akar Bitcoin (21 juta & halving), cara kerja penambangan, dan mengamankan dompet — pengetahuan yang membuatmu jauh lebih aman & paham di dunia crypto.
</div>
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
                "Dompet yang terhubung internet terus",
                "Dompet offline (mis. hardware wallet), paling aman untuk simpanan besar",
                "Dompet milik bank",
                "Dompet gratis",
              ],
              answer: 1,
              explain: "Cold wallet tidak terhubung internet sehingga jauh lebih aman.",
            },
            {
              q: "Arti 'non-custodial'?",
              options: [
                "Exchange memegang kuncimu",
                "Kamu sendiri yang memegang private key-mu (kontrol & tanggung jawab penuh)",
                "Tidak punya dompet",
                "Dompet bersama pemerintah",
              ],
              answer: 1,
              explain: "Non-custodial berarti kunci ada padamu — kendali penuh, risiko penuh.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL EKONOMI (MENILAI PROTOKOL) ---------------- */
    {
      id: "bc-ekonomi",
      level: "Ekonomi",
      title: "Ekonomi Protokol & Menilai Proyek",
      summary: "Memakai kacamata akuntansi untuk crypto: pendapatan protokol, treasury DAO, dilusi token, moat & batasnya.",
      lessons: [
        {
          id: "bc-ek-1",
          title: "Apakah Protokol Punya 'Laporan Keuangan'?",
          duration: "12 menit",
          content: `
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
                "Harga tokennya",
                "Fee protokol yang dibayar pengguna (gas, biaya swap, dll)",
                "Jumlah token yang beredar",
                "Nama proyeknya",
              ],
              answer: 1,
              explain: "Fee yang dipungut dari pengguna adalah pendapatan nyata protokol.",
            },
            {
              q: "Kenapa data on-chain punya keunggulan dibanding laporan keuangan perusahaan?",
              options: [
                "Karena selalu positif",
                "Karena terbuka, real-time, & bisa diverifikasi siapa saja",
                "Karena diaudit pemerintah",
                "Karena lebih sedikit datanya",
              ],
              answer: 1,
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
<p>Ingat pelajaran <b>Alokasi Modal</b> di jalur Akuntansi — empat pilihan memakai kas perusahaan? Protokol crypto menghadapi <b>pilihan yang sama persis</b>, hanya beda nama.</p>

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
                "Menambang koin",
                "Buyback & burn token (membeli token lalu membakarnya)",
                "Menaikkan gas fee",
                "Membuat blockchain baru",
              ],
              answer: 1,
              explain: "Membeli & membakar token mengurangi pasokan, mirip buyback saham.",
            },
            {
              q: "Kenapa treasury yang berisi stablecoin lebih kokoh daripada yang berisi token sendiri?",
              options: [
                "Karena stablecoin bebas pajak",
                "Karena nilainya stabil; treasury token sendiri ikut anjlok saat harga token jatuh",
                "Karena lebih mudah ditambang",
                "Tidak ada bedanya",
              ],
              answer: 1,
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

<h3>Coba sendiri — bedakan real yield vs emisi 👇</h3>
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
                "Membayar dividen dari laba",
                "Menerbitkan saham baru (mengencerkan kepemilikan)",
                "Membeli aset",
                "Melunasi utang",
              ],
              answer: 1,
              explain: "Token baru menambah pasokan & mengencerkan porsi pemegang lama.",
            },
            {
              q: "Apa itu 'real yield'?",
              options: [
                "Imbal hasil dari mencetak token baru",
                "Imbal hasil yang didanai pendapatan/fee nyata dari pengguna",
                "Kenaikan harga token",
                "Bonus dari exchange",
              ],
              answer: 1,
              explain:
                "Real yield berasal dari pendapatan nyata protokol, bukan dari inflasi token.",
            },
          ],
        },
        {
          id: "bc-ek-4",
          title: "Moat, Red Flag & Batas Analisis di Crypto",
          duration: "13 menit",
          content: `
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

<h3>🚩 Red flag khas crypto</h3>
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu telah <b>menyatukan tiga jalur</b>: akuntansi kini menjadi <b>lensa</b> untuk menilai proyek AI maupun crypto — bukan bidang yang terpisah.
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
                "Modal dari militer",
                "Pengguna/dana yang datang hanya karena insentif token & pergi saat insentif berhenti",
                "Investor jangka panjang",
                "Treasury DAO",
              ],
              answer: 1,
              explain:
                "Aktivitas yang disubsidi tidak mencerminkan parit atau pemakaian tulus.",
            },
            {
              q: "Kapan analisis ala bisnis TETAP berguna untuk crypto?",
              options: [
                "Untuk semua token tanpa kecuali",
                "Untuk protokol yang benar-benar menghasilkan fee nyata (pendapatan, treasury, dilusi, moat)",
                "Tidak pernah berguna",
                "Hanya untuk NFT",
              ],
              answer: 1,
              explain:
                "Protokol berpendapatan bisa dianalisis layaknya bisnis; token tanpa pendapatan tidak.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL PELENGKAP ---------------- */
    {
      id: "bc-pelengkap",
      level: "Pelengkap",
      title: "CBDC, Tokenisasi Aset & NFT/GameFi",
      summary: "Melengkapi peta Web3: uang digital bank sentral, tokenisasi aset nyata, serta NFT & GameFi apa adanya.",
      lessons: [
        {
          id: "bc-pl-1",
          title: "CBDC & Rupiah Digital",
          duration: "12 menit",
          content: `
<p>Sementara crypto berkembang, <b>bank sentral</b> di banyak negara membuat versi digital mata uang mereka sendiri: <b>CBDC</b>.</p>

<div data-diagram="vs" data-left="CBDC::Diterbitkan bank sentral::Terpusat, nilai stabil" data-right="CRYPTO::Tanpa penerbit pusat::Terdesentralisasi, fluktuatif" data-caption="CBDC bukan crypto"></div>


<div class="callout">
<b>CBDC</b> (Central Bank Digital Currency) = <b>uang resmi negara dalam bentuk digital</b>, diterbitkan &amp; dijamin <b>bank sentral</b>. Nilainya sama persis dengan uang kertasnya — Rp1 digital = Rp1 tunai.
</div>

<h3>Fundamental: bedanya dengan yang sudah ada</h3>
<table class="tbl">
  <tr><th></th><th>CBDC</th><th>Uang di rekening bank</th><th>Crypto (mis. Bitcoin)</th></tr>
  <tr><td>Penerbit</td><td><b>Bank sentral</b></td><td>Bank umum</td><td>Tidak ada (terdesentralisasi)</td></tr>
  <tr><td>Risiko bank bangkrut</td><td>Tidak ada</td><td>Ada (dijamin sampai batas tertentu)</td><td>Tidak berlaku</td></tr>
  <tr><td>Nilai</td><td>Stabil (= mata uang negara)</td><td>Stabil</td><td>Sangat fluktuatif</td></tr>
  <tr><td>Kendali</td><td>Terpusat pada negara</td><td>Bank</td><td>Pemilik kunci</td></tr>
</table>

<div class="callout warn">
<b>Perbedaan paling penting:</b> CBDC bersifat <b>terpusat</b> — kebalikan dari semangat desentralisasi crypto. Ia memakai teknologi digital (kadang blockchain), tapi <b>kendalinya tetap di negara</b>. Jadi CBDC bukan "crypto milik pemerintah".
</div>

<h3>Dua jenis</h3>
<ul>
  <li><b>Wholesale</b> — untuk transaksi antarbank &amp; lembaga keuangan (penyelesaian lebih cepat &amp; murah).</li>
  <li><b>Retail</b> — untuk masyarakat umum, seperti uang tunai digital.</li>
</ul>

<h3>Di Indonesia: Rupiah Digital</h3>
<p>Bank Indonesia mengembangkan <b>Rupiah Digital</b> melalui inisiatif yang dikenal sebagai <b>Proyek Garuda</b>, dengan tahapan yang dimulai dari sisi <b>wholesale</b>. Tujuannya antara lain memperkuat efisiensi sistem pembayaran &amp; kedaulatan mata uang di era digital.</p>

<table class="tbl">
  <tr><th>👍 Potensi manfaat</th><th>👎 Kekhawatiran</th></tr>
  <tr><td>Pembayaran lebih cepat &amp; murah</td><td><b>Privasi</b> — transaksi berpotensi lebih mudah dipantau</td></tr>
  <tr><td>Menjangkau masyarakat tanpa rekening bank</td><td>Kendali terpusat (mis. kemungkinan pembatasan tertentu)</td></tr>
  <tr><td>Penyaluran bantuan sosial lebih tepat sasaran</td><td>Dampak pada peran bank umum</td></tr>
</table>

<div class="callout warn">
<b>Catatan:</b> perkembangan CBDC bergerak cepat &amp; berbeda tiap negara. Materi ini gambaran umum untuk edukasi — cek sumber resmi (mis. Bank Indonesia) untuk status terbaru.
</div>
`,
          keyPoints: [
            "CBDC = uang resmi negara dalam bentuk digital, diterbitkan & dijamin bank sentral; nilainya stabil.",
            "Berbeda dari crypto: CBDC terpusat & dikendalikan negara, bukan terdesentralisasi.",
            "Dua jenis: wholesale (antarbank) dan retail (masyarakat umum).",
            "Indonesia mengembangkan Rupiah Digital (Proyek Garuda), dimulai dari sisi wholesale.",
            "Manfaat: pembayaran efisien & inklusi; kekhawatiran: privasi & kendali terpusat.",
          ],
          quiz: [
            {
              q: "Apa perbedaan mendasar CBDC dengan Bitcoin?",
              options: [
                "CBDC lebih cepat naik harganya",
                "CBDC diterbitkan & dikendalikan bank sentral (terpusat), nilainya stabil",
                "CBDC tidak bisa dipakai",
                "Tidak ada bedanya",
              ],
              answer: 1,
              explain:
                "CBDC adalah uang negara versi digital — terpusat & stabil, bukan terdesentralisasi.",
            },
            {
              q: "Apa kekhawatiran utama terhadap CBDC retail?",
              options: [
                "Terlalu murah",
                "Privasi — transaksi berpotensi lebih mudah dipantau, serta kendali terpusat",
                "Tidak ada penerbitnya",
                "Harganya fluktuatif",
              ],
              answer: 1,
              explain: "Sentralisasi memunculkan isu privasi & potensi kontrol atas transaksi.",
            },
          ],
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
                "Aset jadi lebih mahal",
                "Aset besar bisa dimiliki bersama dalam pecahan kecil sehingga lebih terjangkau",
                "Menghapus pajak",
                "Menghilangkan risiko",
              ],
              answer: 1,
              explain:
                "Memecah aset besar menjadi bagian kecil membuka akses bagi lebih banyak orang.",
            },
            {
              q: "Kenapa RWA tidak bisa sepenuhnya 'trustless'?",
              options: [
                "Karena blockchainnya lemah",
                "Karena aset fisiknya tetap perlu kustodian, kepastian hukum, & verifikasi di dunia nyata",
                "Karena tokennya palsu",
                "Karena tidak ada oracle",
              ],
              answer: 1,
              explain:
                "Kode tak bisa menjamin keberadaan & keamanan barang fisik di dunia nyata.",
            },
          ],
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini melengkapi peta Web3: CBDC (uang digital negara), tokenisasi aset nyata, serta NFT &amp; GameFi dengan pemahaman yang jernih — termasuk batas &amp; risikonya.
</div>

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
                "Seluruhnya di dalam blockchain",
                "Di luar blockchain — blockchain umumnya hanya menyimpan bukti kepemilikan & tautan",
                "Di dompet pengguna",
                "Di kantor penerbit",
              ],
              answer: 1,
              explain:
                "Menyimpan gambar on-chain terlalu mahal; karena itu umumnya hanya tautan yang dicatat.",
            },
            {
              q: "Apa cacat ekonomi utama banyak proyek GameFi?",
              options: [
                "Grafiknya jelek",
                "Membayar pemain lama dari uang pemain baru — runtuh saat pertumbuhan berhenti",
                "Terlalu murah",
                "Tidak memakai blockchain",
              ],
              answer: 1,
              explain:
                "Model yang bergantung pada arus pemain baru menyerupai skema piramida.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL MATEMATIKA ---------------- */
    {
      id: "bc-matematika",
      level: "Matematika",
      title: "Matematika Kriptografi & DeFi",
      summary: "Rumus di balik blockchain: aritmetika modulo & fungsi satu arah, probabilitas penambangan, dan matematika AMM.",
      lessons: [
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
                "17 dikali 5",
                "Sisa pembagian 17 oleh 5, yaitu 2",
                "17 dibagi 5 sama dengan 3,4",
                "17 ditambah 5",
              ],
              answer: 1,
              explain: "Modulo mengambil sisanya: 17 = 3×5 + 2, jadi hasilnya 2.",
            },
            {
              q: "Apa maksud 'fungsi satu arah' dalam kriptografi?",
              options: [
                "Hanya bisa dipakai sekali",
                "Mudah dihitung maju, tetapi hampir mustahil dibalik",
                "Hanya untuk satu orang",
                "Selalu menghasilkan angka sama",
              ],
              answer: 1,
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

<h3>Coba sendiri — buktikan satu arahnya 👇</h3>
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
                "Karena hanya bisa dipakai sekali",
                "Mudah dihitung maju, tapi praktis mustahil dibalik untuk menemukan x",
                "Karena hasilnya selalu sama",
                "Karena butuh internet",
              ],
              answer: 1,
              explain:
                "Membalikkannya (logaritma diskret) memerlukan pencarian yang tak terjangkau.",
            },
          ],
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
<br><br><i>Catatan: rumus di atas adalah perkiraan sederhana; perhitungan aslinya (di whitepaper Bitcoin) sedikit lebih rumit dan menghasilkan angka lebih kecil lagi.</i>
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
                "Agar biaya lebih murah",
                "Karena tiap blok tambahan menurunkan peluang pembatalan secara eksponensial",
                "Karena jaringan lambat",
                "Tanpa alasan teknis",
              ],
              answer: 1,
              explain: "Peluang penyerang mengejar menurun tajam seiring bertambahnya blok.",
            },
            {
              q: "Apa yang terjadi bila penyerang menguasai lebih dari 50% daya komputasi?",
              options: [
                "Tidak berpengaruh",
                "Peluangnya mengejar mendekati kepastian — inilah 'serangan 51%'",
                "Jaringan otomatis berhenti",
                "Hash menjadi lebih mudah",
              ],
              answer: 1,
              explain:
                "Dengan mayoritas daya, penyerang secara statistik akan selalu bisa menyusul.",
            },
          ],
        },
        {
          id: "bc-mat-3",
          title: "Matematika AMM: Slippage & Impermanent Loss",
          duration: "14 menit",
          content: `
<p>Di modul Terapan kamu memakai rumus <b>x · y = k</b>. Sekarang kita turunkan rumus <b>slippage</b> dan <b>impermanent loss</b> — dua hal yang paling sering merugikan pengguna DeFi karena tidak dipahami.</p>

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

<h3>Coba sendiri — hitung impermanent loss 👇</h3>
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini memahami matematika inti blockchain: <b>modulo &amp; fungsi satu arah</b> (keamanan kunci), <b>probabilitas</b> (penambangan &amp; serangan), serta <b>rumus AMM</b> (slippage &amp; impermanent loss).
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
                "Karena biayanya mahal",
                "Karena rumus x·y=k membuat harga bergeser makin jauh saat porsi transaksi makin besar (slippage)",
                "Karena jaringan lambat",
                "Karena pajak",
              ],
              answer: 1,
              explain: "Perubahan besar pada x memaksa y bergeser jauh agar hasil kali tetap k.",
            },
            {
              q: "Kapan impermanent loss menjadi PERMANEN?",
              options: [
                "Saat harga kembali ke titik awal",
                "Saat kamu menarik dana ketika harga sedang jauh berbeda dari saat menyetor",
                "Tidak pernah",
                "Saat fee dibayarkan",
              ],
              answer: 1,
              explain:
                "Menarik dana mengunci selisih nilainya sehingga kerugian menjadi nyata.",
            },
          ],
        },
      ],
    },

    /* ---------------- LEVEL KRIPTOGRAFI (MENDALAM & ERA KUANTUM) ---------------- */
    {
      id: "bc-kriptografi",
      level: "Kriptografi",
      title: "Kriptografi Mendalam & Era Kuantum",
      summary: "Mesin keamanan crypto: simetris vs asimetris, ECDSA, ancaman komputer kuantum, dan kriptografi tahan kuantum.",
      lessons: [
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
                "Terlalu lambat",
                "Sulit mengirim kunci dengan aman ke lawan bicara",
                "Tidak bisa mengenkripsi",
                "Kuncinya terlalu kecil",
              ],
              answer: 1,
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
<b>⚠️ Bahaya nomor satu: nonce yang tidak benar-benar acak.</b>
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
                "Alamat → kunci publik → kunci privat",
                "Kunci privat → kunci publik → alamat (hasil hash)",
                "Kunci publik → kunci privat → alamat",
                "Semua dibuat bersamaan secara acak",
              ],
              answer: 1,
              explain:
                "Kunci privat menurunkan kunci publik, lalu kunci publik di-hash menjadi alamat.",
            },
            {
              q: "Kenapa kita tidak boleh membuat sendiri implementasi kriptografi?",
              options: [
                "Karena dilarang hukum",
                "Karena kesalahan kecil (mis. generator acak lemah) bisa membocorkan kunci privat",
                "Karena terlalu mahal",
                "Karena tidak menarik",
              ],
              answer: 1,
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

<h3>Coba sendiri — lihat dampaknya per algoritma 👇</h3>
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
                "Memecahkannya total",
                "Memangkas kekuatannya jadi setara ~128 bit — masih aman",
                "Tidak berdampak sama sekali",
                "Membuatnya lebih kuat",
              ],
              answer: 1,
              explain:
                "Grover memberi percepatan kuadratik; AES-256 tetap memadai setelahnya.",
            },
            {
              q: "Manakah pernyataan yang jujur tentang waktu datangnya ancaman kuantum?",
              options: [
                "Sudah terjadi tahun lalu",
                "Belum ada komputer kuantum sebesar itu; perkiraan waktunya sangat bervariasi",
                "Dipastikan tahun depan",
                "Tidak akan pernah terjadi",
              ],
              answer: 1,
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
                "Ya, wajib",
                "Tidak — PQC berjalan di komputer biasa, hanya dirancang tahan serangan kuantum",
                "Hanya untuk menandatangani",
                "Hanya di blockchain",
              ],
              answer: 1,
              explain:
                "PQC adalah algoritma klasik yang soal matematikanya tetap berat bagi komputer kuantum.",
            },
            {
              q: "Apa tantangan utama menerapkan PQC di blockchain?",
              options: [
                "Terlalu cepat",
                "Ukuran kunci & tanda tangannya jauh lebih besar — memakan ruang blok & biaya",
                "Tidak ada standarnya",
                "Harus memakai komputer kuantum",
              ],
              answer: 1,
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini memahami kriptografi dari mesinnya: simetris vs asimetris, cara kerja ECDSA, ancaman komputer kuantum, standar PQC, sampai tantangan migrasinya. Ini pengetahuan yang bahkan banyak pengguna crypto berpengalaman belum punya.
</div>

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
                "Karena nilainya kecil",
                "Karena tidak ada yang bisa memindahkannya ke alamat aman — tak ada pemegang kuncinya",
                "Karena koinnya rusak",
                "Karena sudah dibakar",
              ],
              answer: 1,
              explain:
                "Tanpa kunci, tidak ada pihak yang berwenang memindahkan koin tersebut.",
            },
            {
              q: "Langkah praktis terbaik bagi pengguna crypto saat ini?",
              options: [
                "Menjual semua aset karena kuantum",
                "Tidak memakai ulang alamat & rutin memperbarui dompet",
                "Membuat kriptografi sendiri",
                "Menyimpan kunci di email",
              ],
              answer: 1,
              explain:
                "Alamat sekali pakai menyembunyikan kunci publik; dompet terbaru mengikuti standar keamanan.",
            },
          ],
        },
      ],
    },
  ],
};
