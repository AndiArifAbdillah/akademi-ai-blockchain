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
  ],
};
