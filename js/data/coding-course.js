/* ============================================================
   MATERI KURSUS: CODING DARI NOL
   Belajar menulis program dari nol dengan JavaScript — langsung
   dicoba di browser, tanpa instalasi. Bahasa Indonesia sederhana.
   ============================================================ */

const CODING_COURSE = {
  id: "coding",
  title: "Coding dari Nol",
  emoji: "💻",
  color: "#2e7d86",
  tagline: "Belajar menulis program dari nol — langsung dicoba di browser, tanpa instal apa pun.",
  description:
    "Jalur ini mengajarkan pemrograman dari nol dengan JavaScript: cara komputer mengikuti perintah, variabel, fungsi, keputusan, perulangan, dan data — setiap konsep langsung dicoba di browser dan diuji dengan soal kode otomatis.",
  modules: [
    /* ---------------- MODUL 1: MULAI DARI NOL: CARA KOMPUTER MENGIKUTI PERINTAH ---------------- */
    {
      id: "cd-dasar",
      level: "Dasar",
      title: "Mulai dari Nol: Cara Komputer Mengikuti Perintah",
      summary: "Apa itu program, peta bahasa pemrograman dan kenapa mulai dari JavaScript, lalu cara membaca pesan error tanpa panik.",
      lessons: [
        {
          id: "cd-nol-1",
          title: "Apa itu Program? Komputer Sangat Patuh, tapi Tidak Pintar",
          duration: "10 menit",
          content: `
<p>Setiap aplikasi di ponselmu — WhatsApp, kalkulator, game — adalah <b>program</b>: daftar perintah yang ditulis manusia dan dijalankan komputer. Menulis program disebut <b>coding</b> atau <b>pemrograman</b>.</p>

<h3>Program itu seperti resep</h3>
<table class="tbl">
  <tr><th>Resep kopi susu</th><th>Program</th></tr>
  <tr><td>1. Tuang 20 gram kopi bubuk</td><td>Perintah pertama</td></tr>
  <tr><td>2. Tuang 150 ml air panas</td><td>Perintah kedua</td></tr>
  <tr><td>3. Tambah 2 sendok susu kental manis</td><td>Perintah ketiga</td></tr>
  <tr><td>4. Aduk</td><td>Perintah keempat</td></tr>
</table>
<p>Bedanya: koki manusia bisa menebak maksudmu kalau resepnya kurang jelas. Komputer <b>tidak pernah menebak</b>. Ia mengerjakan <b>persis</b> apa yang tertulis, sesuai urutannya — tidak lebih, tidak kurang. Kalau ada satu huruf salah, ia berhenti dan mengeluh.</p>
<div class="callout">
<b>Komputer itu sangat patuh, tapi tidak pintar.</b> Ia bisa mengerjakan miliaran perintah per detik tanpa lelah, tapi tidak bisa menebak apa yang <i>kamu maksud</i>. Tugas programmer adalah menulis perintah yang jelas dan lengkap.
</div>

<div data-diagram="vs" data-left="Koki manusia::bisa menebak maksudmu::memaafkan resep yang kurang jelas" data-right="Komputer::tidak pernah menebak::mengerjakan persis yang tertulis" data-caption="Komputer sangat patuh, tapi tidak pintar menebak"></div>

<h3>Perintah pertamamu</h3>
<p>Kita memakai bahasa <b>JavaScript</b>, karena bisa langsung dijalankan di browser — termasuk di ponsel — tanpa memasang apa pun. Perintah paling sederhana adalah menampilkan tulisan:</p>
<pre class="code">console.log("Halo, dunia!");</pre>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>console</b></td><td>"Layar catatan" tempat program menampilkan hasil</td></tr>
  <tr><td><b>.log</b></td><td>"Tuliskan" ke layar catatan itu</td></tr>
  <tr><td><b>( )</b></td><td>Di dalam kurung: apa yang ingin ditulis</td></tr>
  <tr><td><b>"Halo, dunia!"</b></td><td>Teks harus diapit tanda kutip</td></tr>
  <tr><td><b>;</b></td><td>Titik koma menandai akhir satu perintah</td></tr>
</table>

<h3>Coba sendiri</h3>
<div data-demo="js-playground">
console.log("Halo, dunia!");
console.log("Ini program pertamaku.");
console.log(2 + 3);
console.log("2 + 3");
</div>
<p>Tekan <b>Jalankan</b>. Perhatikan dua baris terakhir: <b>2 + 3</b> tanpa tanda kutip dihitung menjadi <b>5</b>, sedangkan <b>"2 + 3"</b> dengan tanda kutip dianggap teks biasa dan ditampilkan apa adanya. Ubah tulisannya dengan namamu sendiri, lalu jalankan lagi.</p>

<h3>Urutan itu penting</h3>
<p>Perintah dijalankan dari <b>atas ke bawah</b>, satu per satu. Tukar urutan dua baris di atas, lalu jalankan: urutan hasilnya ikut berubah. Program yang benar bukan hanya berisi perintah yang benar, tapi juga urutan yang benar — seperti resep: mengaduk sebelum menuang air tidak menghasilkan kopi.</p>

<h3>Komputer tidak memaafkan salah ketik</h3>
<p>Coba ubah <b>console</b> menjadi <b>Console</b> (huruf C besar), lalu jalankan. Program berhenti dengan pesan error. Bagi komputer, <i>console</i> dan <i>Console</i> adalah dua nama yang berbeda. Membaca pesan error seperti ini adalah keterampilan penting — dibahas dua pelajaran lagi.</p>
`,
          keyPoints: [
            "Program = daftar perintah yang dijalankan komputer persis seperti tertulis, dari atas ke bawah.",
            "Komputer sangat patuh tapi tidak pintar: ia tidak menebak maksud, satu salah ketik membuatnya berhenti.",
            "console.log(...) menampilkan sesuatu ke layar catatan; teks harus diapit tanda kutip.",
            "Tanpa tanda kutip, 2 + 3 dihitung menjadi 5; dengan tanda kutip, \"2 + 3\" hanyalah teks.",
            "Huruf besar dan kecil dibedakan: console dan Console adalah dua nama berbeda."
          ],
          practice: [
            { type: "code", q: "Tulis program yang menampilkan dua baris: Halo, lalu Kopi Sari.", starter: "", tests: [["@log", "Halo\nKopi Sari"]], hint: "Pakai console.log dua kali, satu baris untuk tiap tulisan. Teks diapit tanda kutip.", solution: "console.log(\"Halo\");\nconsole.log(\"Kopi Sari\");" },
            { type: "choice", q: "Apa yang ditampilkan console.log(4 * 5)?", options: ["4 * 5", "20", "45", "Error"], answer: 1, hint: "Tanpa tanda kutip, komputer menghitungnya. Tanda * berarti kali.", solution: "4 × 5 = 20. Tanpa tanda kutip, ekspresinya dihitung dulu." }
          ],
          quiz: [
            {
              q: "Kenapa komputer disebut 'sangat patuh tapi tidak pintar'?",
              options: [
                "Ia mengerjakan persis yang tertulis tanpa menebak maksud",
                "Ia hanya bisa mengerjakan satu perintah setiap harinya",
                "Ia selalu memperbaiki sendiri perintah yang salah tulis",
                "Ia menolak perintah yang menurutnya kurang penting"
              ],
              answer: 0,
              explain: "Komputer cepat dan tak kenal lelah, tapi hanya mengikuti perintah apa adanya."
            },
            {
              q: "Apa hasil console.log(\"7 + 1\")?",
              options: [
                "7 + 1",
                "8",
                "71",
                "Error"
              ],
              answer: 0,
              explain: "Karena diapit tanda kutip, \"7 + 1\" diperlakukan sebagai teks dan ditampilkan apa adanya."
            },
            {
              q: "Dalam urutan apa perintah-perintah dalam program dijalankan?",
              options: [
                "Dari atas ke bawah, satu per satu",
                "Dari bawah ke atas, mulai baris terakhir",
                "Acak, sesuai keinginan komputer",
                "Semua baris dijalankan bersamaan"
              ],
              answer: 0,
              explain: "Seperti resep: urutan langkah menentukan hasilnya."
            }
          ]
        },
        {
          id: "cd-nol-2",
          title: "Peta Bahasa Pemrograman — dan Kenapa Mulai dari JavaScript",
          duration: "11 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Program adalah daftar perintah yang dijalankan komputer persis seperti tertulis, dari atas ke bawah. Perintah itu ditulis dalam sebuah <b>bahasa pemrograman</b> — di pelajaran sebelumnya, JavaScript.
</div>

<h3>Banyak bahasa, banyak kegunaan</h3>

<div data-diagram="network" data-center="Bahasa pemrograman" data-nodes="JavaScript: web dan aplikasi|Python: AI dan data|Solidity: smart contract|SQL: bertanya ke database|Kotlin, Swift: aplikasi HP|Rust, Go, C++: sistem cepat" data-caption="Setiap bahasa populer di bidangnya masing-masing"></div>
<p>Seperti bahasa manusia, ada ratusan bahasa pemrograman. Masing-masing populer di bidang tertentu:</p>
<table class="tbl">
  <tr><th>Bahasa</th><th>Paling sering dipakai untuk</th><th>Di platform ini</th></tr>
  <tr><td><b>JavaScript</b></td><td>Website, aplikasi web, server (Node.js)</td><td>Jalur ini; frontend DApp di jalur Crypto</td></tr>
  <tr><td><b>Python</b></td><td>AI, analisis data, otomasi</td><td>Modul Python di jalur ini; contoh kode di jalur AI</td></tr>
  <tr><td><b>Solidity</b></td><td>Smart contract di Ethereum</td><td>Modul Remix &amp; Foundry di jalur Crypto</td></tr>
  <tr><td><b>SQL</b></td><td>Bertanya pada database</td><td>Analisis on-chain di jalur Crypto</td></tr>
  <tr><td>Java, Kotlin, Swift</td><td>Aplikasi Android dan iPhone</td><td>—</td></tr>
  <tr><td>Go, Rust, C++</td><td>Sistem yang harus sangat cepat (Foundry ditulis dengan Rust)</td><td>—</td></tr>
</table>
<p><b>HTML</b> dan <b>CSS</b> sering disebut bersama JavaScript, tapi keduanya bukan bahasa pemrograman: HTML menyusun <i>isi</i> halaman web, CSS mengatur <i>tampilannya</i>, dan JavaScript membuatnya <i>bertindak</i>.</p>

<h3>Kabar baik: konsepnya sama</h3>
<p>Ini fungsi yang menjumlahkan dua angka, ditulis dalam tiga bahasa:</p>
<pre class="code">// JavaScript
function tambah(a, b) {
  return a + b;
}

# Python
def tambah(a, b):
    return a + b

// Solidity
function tambah(uint a, uint b) public pure returns (uint) {
    return a + b;
}</pre>
<p>Ejaannya berbeda, tapi idenya sama persis. Hampir semua bahasa punya bahan yang sama: <b>variabel</b> untuk menyimpan data, <b>keputusan</b> (jika… maka…), <b>perulangan</b>, <b>fungsi</b>, dan <b>struktur data</b>. Kalau kamu benar-benar paham bahan-bahan ini di satu bahasa, belajar bahasa kedua jauh lebih cepat.</p>

<h3>Kenapa mulai dari JavaScript?</h3>
<ul>
  <li><b>Tanpa instalasi</b> — setiap browser sudah bisa menjalankannya, termasuk di ponsel.</li>
  <li><b>Hasilnya langsung terlihat</b> — dari tulisan di layar sampai halaman web yang bisa diklik.</li>
  <li><b>Sangat banyak dipakai</b> — situs web, aplikasi, sampai halaman yang menghubungkan dompet crypto ke smart contract.</li>
</ul>
<div class="callout warn">
<b>Jangan terjebak memilih bahasa "terbaik".</b> Banyak pemula menghabiskan berminggu-minggu membandingkan bahasa. Lebih baik pilih satu dan mulai menulis program. Bahasa kedua dan ketiga akan datang dengan sendirinya sesuai kebutuhan.
</div>

<h3>Di mana JavaScript berjalan?</h3>
<table class="tbl">
  <tr><th>Tempat</th><th>Contoh</th></tr>
  <tr><td>Browser</td><td>Kotak "Coba sendiri" di pelajaran ini; tombol dan menu di situs web</td></tr>
  <tr><td>Server (Node.js)</td><td>Program yang melayani permintaan banyak pengguna</td></tr>
  <tr><td>Konsol browser</td><td>Di laptop, tekan F12 lalu buka tab <i>Console</i> — kamu bisa mengetik JavaScript langsung di sana</td></tr>
</table>
`,
          keyPoints: [
            "Setiap bahasa populer di bidangnya: JavaScript (web), Python (AI & data), Solidity (smart contract), SQL (database).",
            "HTML menyusun isi halaman, CSS mengatur tampilan, JavaScript membuatnya bertindak.",
            "Hampir semua bahasa punya bahan yang sama: variabel, keputusan, perulangan, fungsi, dan struktur data.",
            "JavaScript dipilih karena berjalan di browser tanpa instalasi dan hasilnya langsung terlihat.",
            "Jangan terlalu lama memilih bahasa; paham satu bahasa membuat bahasa berikutnya jauh lebih mudah."
          ],
          practice: [
            { type: "choice", q: "Kamu ingin membuat smart contract di Ethereum. Bahasa apa yang paling tepat?", options: ["SQL", "Solidity", "CSS", "HTML"], answer: 1, hint: "Pernah dibahas di jalur Crypto.", solution: "Solidity adalah bahasa utama smart contract Ethereum." },
            { type: "choice", q: "Mana yang BUKAN bahasa pemrograman, melainkan pengatur tampilan halaman web?", options: ["JavaScript", "Python", "CSS", "Solidity"], answer: 2, hint: "Isi, tampilan, perilaku.", solution: "CSS mengatur tampilan; HTML menyusun isi; JavaScript membuat halaman bertindak." }
          ],
          quiz: [
            {
              q: "Kenapa belajar bahasa pemrograman kedua biasanya lebih cepat?",
              options: [
                "Konsep dasarnya sama, hanya ejaannya yang berbeda",
                "Bahasa kedua selalu lebih pendek daripada yang pertama",
                "Komputer otomatis menerjemahkan dari bahasa pertama",
                "Bahasa kedua tidak memerlukan variabel atau fungsi"
              ],
              answer: 0,
              explain: "Variabel, keputusan, perulangan, dan fungsi ada di hampir semua bahasa."
            },
            {
              q: "Bahasa mana yang paling banyak dipakai untuk AI dan analisis data?",
              options: [
                "Python",
                "CSS",
                "HTML",
                "Solidity"
              ],
              answer: 0,
              explain: "Python punya pustaka AI dan data yang sangat lengkap, seperti yang dipakai di jalur AI."
            },
            {
              q: "Apa alasan utama jalur ini memakai JavaScript sebagai bahasa pertama?",
              options: [
                "Berjalan langsung di browser tanpa instalasi apa pun",
                "Satu-satunya bahasa yang bisa dipakai membuat program",
                "Tidak punya aturan penulisan sehingga tak mungkin salah",
                "Program JavaScript tidak pernah menampilkan pesan error"
              ],
              answer: 0,
              explain: "Setiap browser, termasuk di ponsel, sudah bisa menjalankan JavaScript."
            }
          ]
        },
        {
          id: "cd-nol-3",
          title: "Membaca Pesan Error Tanpa Panik",
          duration: "12 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Komputer mengerjakan perintah persis seperti tertulis, dan huruf besar-kecil dibedakan. Saat kamu menulis <b>Console.log</b>, program berhenti dengan pesan error.
</div>

<h3>Error bukan tanda kamu gagal</h3>
<p>Programmer berpengalaman pun melihat pesan error puluhan kali sehari. Pesan error adalah cara komputer berkata: <i>"Di sini aku bingung."</i> Ia bahkan memberi tahu <b>jenis</b> kebingungannya. Programmer yang baik bukan yang tidak pernah melihat error, melainkan yang bisa <b>membacanya</b> dengan tenang.</p>

<h3>Empat jenis kesalahan</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>SyntaxError</b></td><td>Salah tulis — komputer tidak bisa membaca kodenya</td><td>Tanda kutip atau kurung tidak ditutup</td></tr>
  <tr><td><b>ReferenceError</b></td><td>Nama yang dipakai belum dikenal</td><td>Salah ketik: <i>consol.log</i></td></tr>
  <tr><td><b>TypeError</b></td><td>Melakukan sesuatu pada jenis data yang tidak cocok</td><td>Memanggil sesuatu yang bukan fungsi</td></tr>
  <tr><td><b>Kesalahan logika</b></td><td>Tidak ada pesan error, tapi hasilnya salah</td><td>Rumus rata-rata yang keliru</td></tr>
</table>
<p>Yang paling berbahaya justru yang terakhir: program tetap berjalan, tampak baik-baik saja, tapi diam-diam memberi jawaban yang salah.</p>

<h3>Coba sendiri: perbaiki tiga error</h3>
<div data-demo="js-playground">
console.log("Halo);
consol.log("Kopi Sari");
console.log("Total: " + 28000 * 2;
</div>
<p>Jalankan dan baca pesannya. Program berhenti di kesalahan <b>pertama</b> yang ditemuinya, jadi perbaiki satu per satu: tutup tanda kutip di baris 1, perbaiki ejaan di baris 2, tambahkan kurung tutup di baris 3. Setelah tiap perbaikan, jalankan lagi.</p>

<h3>Lima langkah saat bertemu error</h3>
<ol>
  <li><b>Baca kalimat utamanya pelan-pelan.</b> "consol is not defined" artinya persis itu: nama <i>consol</i> tidak dikenal.</li>
  <li><b>Cari nama atau tanda yang disebut</b> dalam pesan, lalu temukan di kodemu.</li>
  <li><b>Periksa baris itu dan baris sebelumnya.</b> Kurung yang lupa ditutup sering baru ketahuan di baris berikutnya.</li>
  <li><b>Ubah satu hal, lalu jalankan lagi.</b> Mengubah lima hal sekaligus membuatmu tidak tahu mana yang memperbaiki.</li>
  <li><b>Masih buntu?</b> Salin pesan errornya ke mesin pencari atau tanyakan ke asisten AI — bersama potongan kodenya. Lalu pastikan kamu <b>paham</b> kenapa perbaikannya benar, bukan sekadar menyalin.</li>
</ol>

<div data-diagram="flow" data-steps="Baca kalimat utamanya|Cari nama yang disebut|Periksa baris itu dan sebelumnya|Ubah satu hal, jalankan lagi|Masih buntu? cari atau tanya AI" data-caption="Lima langkah tenang saat bertemu pesan error"></div>

<h3>Kesalahan logika: yang tidak berteriak</h3>
<p>Rata-rata dari nilai 80 dan 90 seharusnya 85. Tapi coba jalankan ini:</p>
<div data-demo="js-playground">
console.log(80 + 90 / 2);
console.log((80 + 90) / 2);
</div>
<p>Baris pertama menghasilkan 125 tanpa satu pun pesan error. Seperti di matematika sekolah, pembagian dikerjakan lebih dulu daripada penjumlahan: 90 ÷ 2 = 45, lalu 80 + 45 = 125. Tanda kurung di baris kedua memaksa penjumlahan dikerjakan lebih dulu. Satu-satunya cara menangkap kesalahan seperti ini adalah <b>memeriksa hasilnya</b> dengan contoh yang jawabannya sudah kamu ketahui.</p>
`,
          keyPoints: [
            "Pesan error adalah petunjuk, bukan tanda gagal: komputer memberi tahu di mana dan kenapa ia bingung.",
            "SyntaxError = salah tulis; ReferenceError = nama belum dikenal; TypeError = jenis data tidak cocok.",
            "Kesalahan logika paling berbahaya: tidak ada pesan error, tapi hasilnya salah.",
            "Langkahnya: baca kalimat utama, temukan nama yang disebut, periksa baris itu dan sebelumnya, ubah satu hal, jalankan lagi.",
            "Uji program dengan contoh yang jawabannya sudah diketahui untuk menangkap kesalahan logika."
          ],
          practice: [
            { type: "code", q: "Perbaiki kode ini supaya menampilkan tulisan Kopi Sari.", starter: "consol.log(\"Kopi Sari\")", tests: [["@log", "Kopi Sari"]], hint: "Baca pesan errornya: nama apa yang tidak dikenal?", solution: "console.log(\"Kopi Sari\");" },
            { type: "code", q: "Kode ini seharusnya menampilkan rata-rata 70 dan 80, yaitu 75, tapi hasilnya salah. Perbaiki.", starter: "console.log(70 + 80 / 2);", tests: [["@log", "75"]], hint: "Pembagian dikerjakan sebelum penjumlahan. Bagaimana memaksa penjumlahan dikerjakan lebih dulu?", solution: "console.log((70 + 80) / 2);" }
          ],
          quiz: [
            {
              q: "Program menampilkan 'ReferenceError: harga is not defined'. Apa artinya?",
              options: [
                "Nama harga belum dikenal: salah ketik atau belum dibuat",
                "Nilai harga terlalu besar untuk disimpan komputer",
                "Harga harus ditulis dengan huruf kapital semua",
                "Komputer sedang rusak dan perlu dinyalakan ulang"
              ],
              answer: 0,
              explain: "ReferenceError berarti nama yang dipakai tidak ditemukan."
            },
            {
              q: "Jenis kesalahan mana yang paling sulit ditemukan?",
              options: [
                "Kesalahan logika, karena tidak ada pesan error",
                "SyntaxError, karena programnya tidak berjalan",
                "ReferenceError, karena namanya disebutkan",
                "TypeError, karena jenis datanya disebutkan"
              ],
              answer: 0,
              explain: "Program tetap berjalan dengan hasil salah; hanya pengujian yang bisa menangkapnya."
            },
            {
              q: "Kenapa sebaiknya mengubah satu hal saja sebelum menjalankan ulang?",
              options: [
                "Agar tahu persis perubahan mana yang memperbaiki error",
                "Karena komputer hanya menerima satu perubahan per hari",
                "Karena mengubah banyak hal pasti merusak programnya",
                "Agar pesan error berikutnya tidak muncul sama sekali"
              ],
              answer: 0,
              explain: "Perubahan satu per satu membuatmu memahami penyebabnya."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 2: DASAR JAVASCRIPT: VARIABEL, FUNGSI, KEPUTUSAN & PERULANGAN ---------------- */
    {
      id: "cd-js",
      level: "Pemula",
      title: "Dasar JavaScript: Variabel, Fungsi, Keputusan & Perulangan",
      summary: "Bahan dasar semua program: variabel dan jenis data, operator, fungsi, percabangan if, perulangan for dan while, serta array dan objek — setiap konsep langsung diuji dengan soal kode otomatis.",
      lessons: [
        {
          id: "cd-js-1",
          title: "Variabel — Kotak Berlabel untuk Menyimpan Data",
          duration: "13 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>console.log(...)</b> menampilkan sesuatu; teks diapit tanda kutip, angka tidak. Perintah dijalankan dari atas ke bawah.
</div>

<h3>Variabel = kotak berlabel</h3>
<p>Program butuh tempat untuk mengingat sesuatu: harga kopi, nama pembeli, jumlah stok. Tempat itu disebut <b>variabel</b> — bayangkan kotak yang diberi label.</p>

<div data-diagram="compare3" data-cols="harga::isi: 28000::jenis: number|nama::isi: &quot;Sari&quot;::jenis: string|buka::isi: true::jenis: boolean" data-caption="Tiga kotak berlabel: nama kotaknya, isinya, dan jenis isinya"></div>
<pre class="code">let harga = 28000;
console.log(harga);      // 28000</pre>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>let</b></td><td>"Buat kotak baru"</td></tr>
  <tr><td><b>harga</b></td><td>Label kotaknya</td></tr>
  <tr><td><b>=</b></td><td>"Isi dengan" — <b>bukan</b> "sama dengan" seperti di matematika</td></tr>
  <tr><td><b>28000</b></td><td>Isinya</td></tr>
</table>
<p>Teks setelah <b>//</b> adalah <b>komentar</b>: catatan untuk manusia yang diabaikan komputer.</p>

<h3>Isi kotak bisa diganti</h3>
<div data-demo="js-playground">
let stok = 20;
console.log("Stok awal: " + stok);

stok = stok - 3;   // terjual 3
console.log("Stok sekarang: " + stok);
</div>
<p>Baris <b>stok = stok - 3</b> tampak aneh kalau dibaca sebagai matematika. Bacalah dari kanan: "ambil isi stok sekarang (20), kurangi 3, lalu masukkan hasilnya (17) kembali ke kotak stok".</p>

<h3>let atau const?</h3>
<table class="tbl">
  <tr><th></th><th>let</th><th>const</th></tr>
  <tr><td>Isinya boleh diganti?</td><td>Boleh</td><td>Tidak</td></tr>
  <tr><td>Contoh</td><td>stok, saldo, skor</td><td>nama toko, tarif pajak</td></tr>
</table>
<p>Kebiasaan yang baik: pakai <b>const</b> dulu. Ganti ke <b>let</b> hanya bila nilainya memang perlu berubah. Kalau kamu mencoba mengganti isi const, program berhenti dengan error — dan itu bagus, karena mencegah perubahan yang tidak disengaja.</p>

<h3>Jenis-jenis data</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Contoh</th><th>Untuk</th></tr>
  <tr><td><b>number</b></td><td>28000, 3.5, -10</td><td>Angka — desimal memakai <b>titik</b>, bukan koma</td></tr>
  <tr><td><b>string</b></td><td>"Kopi Susu"</td><td>Teks, selalu diapit tanda kutip</td></tr>
  <tr><td><b>boolean</b></td><td>true, false</td><td>Ya atau tidak</td></tr>
  <tr><td><b>undefined</b></td><td>—</td><td>Kotak sudah dibuat tapi belum diisi</td></tr>
  <tr><td><b>null</b></td><td>null</td><td>Sengaja dikosongkan</td></tr>
</table>
<div data-demo="js-playground">
const namaMenu = "Kopi Susu";
const harga = 28000;
const tersedia = true;
let catatan;

console.log(typeof namaMenu);
console.log(typeof harga);
console.log(typeof tersedia);
console.log(catatan);
</div>
<p><b>typeof</b> memberi tahu jenis data di dalam kotak. Perhatikan juga: angka di JavaScript ditulis <b>28000</b>, bukan 28.000 — titik dipakai untuk desimal.</p>

<h3>Aturan memberi nama</h3>
<ul>
  <li>Tidak boleh ada spasi dan tidak boleh diawali angka: <i>harga kopi</i> dan <i>2harga</i> tidak sah.</li>
  <li>Huruf besar-kecil dibedakan: <i>harga</i> dan <i>Harga</i> adalah dua kotak berbeda.</li>
  <li>Kebiasaan JavaScript: <b>camelCase</b> — kata kedua dan seterusnya diawali huruf besar, misalnya <i>hargaKopiSusu</i>.</li>
  <li>Pilih nama yang menjelaskan isinya: <i>totalBelanja</i> jauh lebih jelas daripada <i>x</i>.</li>
</ul>
`,
          keyPoints: [
            "Variabel adalah kotak berlabel untuk menyimpan data; = artinya 'isi dengan', bukan 'sama dengan'.",
            "let untuk nilai yang akan berubah, const untuk nilai tetap — mulailah dengan const.",
            "Jenis data dasar: number, string (teks dalam tanda kutip), boolean (true/false), undefined, null.",
            "Angka ditulis tanpa pemisah ribuan dan memakai titik untuk desimal: 28000, 3.5.",
            "Nama variabel tanpa spasi, tidak diawali angka, peka huruf besar-kecil, biasanya camelCase."
          ],
          practice: [
            { type: "code", q: "Buat variabel harga berisi 28000 dan variabel jumlah berisi 3.", starter: "// tulis kodemu di sini\n", tests: [["harga", 28000], ["jumlah", 3]], hint: "Contoh: const nama = isinya;", solution: "const harga = 28000;\nconst jumlah = 3;" },
            { type: "code", q: "Stok awal 50. Terjual 12, lalu datang kiriman baru 30. Ubah isi variabel stok mengikuti kejadian itu (jangan langsung menulis angka akhirnya).", starter: "let stok = 50;\n// terjual 12\n\n// datang kiriman 30\n", tests: [["stok", 68]], hint: "stok = stok - ...; lalu stok = stok + ...;", solution: "let stok = 50;\nstok = stok - 12;\nstok = stok + 30;" },
            { type: "choice", q: "Nama variabel mana yang sah di JavaScript?", options: ["total belanja", "2total", "totalBelanja", "total-belanja"], answer: 2, hint: "Tanpa spasi, tidak diawali angka, tanpa tanda minus.", solution: "totalBelanja sah dan mengikuti gaya camelCase. Tanda - dibaca sebagai pengurangan." }
          ],
          quiz: [
            {
              q: "Apa arti tanda = dalam let stok = 20?",
              options: [
                "Isi kotak stok dengan nilai 20",
                "Periksa apakah stok sama dengan 20",
                "Stok dan 20 selalu sama selamanya",
                "Bandingkan stok dengan angka 20"
              ],
              answer: 0,
              explain: "Dalam pemrograman, = adalah perintah mengisi (assignment), bukan perbandingan."
            },
            {
              q: "Kapan sebaiknya memakai const?",
              options: [
                "Untuk nilai yang tidak akan diganti",
                "Untuk nilai yang terus berubah",
                "Hanya untuk teks, bukan angka",
                "Hanya untuk nilai true atau false"
              ],
              answer: 0,
              explain: "const mencegah penggantian yang tidak disengaja; pakai let bila nilainya memang berubah."
            },
            {
              q: "Apa hasil typeof \"28000\"?",
              options: [
                "string",
                "number",
                "boolean",
                "undefined"
              ],
              answer: 0,
              explain: "Karena diapit tanda kutip, \"28000\" adalah teks (string), bukan angka."
            }
          ]
        },
        {
          id: "cd-js-2",
          title: "Operator — Berhitung, Menggabung Teks & Membandingkan",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Variabel menyimpan data. Jenis data utama: <b>number</b> (angka), <b>string</b> (teks dalam tanda kutip), dan <b>boolean</b> (true/false). Pembagian dikerjakan sebelum penjumlahan, kecuali diberi tanda kurung.
</div>

<h3>Berhitung</h3>
<table class="tbl">
  <tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
  <tr><td><b>+</b></td><td>Tambah</td><td>28000 + 15000</td><td>43000</td></tr>
  <tr><td><b>-</b></td><td>Kurang</td><td>100000 - 84000</td><td>16000</td></tr>
  <tr><td><b>*</b></td><td>Kali</td><td>28000 * 3</td><td>84000</td></tr>
  <tr><td><b>/</b></td><td>Bagi</td><td>84000 / 3</td><td>28000</td></tr>
  <tr><td><b>%</b></td><td>Sisa bagi</td><td>17 % 5</td><td>2</td></tr>
  <tr><td><b>**</b></td><td>Pangkat</td><td>2 ** 3</td><td>8</td></tr>
</table>
<p>Operator <b>%</b> sering dipakai: angka genap punya sisa 0 saat dibagi 2 (<i>8 % 2 = 0</i>), dan <i>125 menit % 60 = 5</i> berarti 2 jam lebih 5 menit.</p>
<div data-demo="js-playground">
const harga = 28000;
const jumlah = 3;
const total = harga * jumlah;
const bayar = 100000;

console.log("Total: " + total);
console.log("Kembalian: " + (bayar - total));
console.log("Sisa 17 dibagi 5: " + (17 % 5));
</div>

<h3>Menggabung teks</h3>
<p>Tanda <b>+</b> pada teks berarti <b>menyambung</b>: <i>"Kopi" + " Susu"</i> menjadi <i>"Kopi Susu"</i>. Di sinilah jebakan pemula yang paling terkenal:</p>
<div data-demo="js-playground">
console.log(5 + 3);
console.log("5" + 3);
console.log("5" * 3);
console.log(Number("5") + 3);
</div>
<p>Kalau salah satu sisi <b>+</b> adalah teks, JavaScript menyambungnya sebagai teks: <i>"5" + 3</i> menjadi <i>"53"</i>, bukan 8. Data dari kolom isian di halaman web selalu berupa teks, jadi ubah dulu dengan <b>Number(...)</b> sebelum dihitung.</p>
<p>Cara lain menyusun teks adalah <b>template literal</b>: diapit tanda <b>&#96;</b> (backtick, biasanya di kiri angka 1 pada keyboard), dan nilai disisipkan dengan <b>$&#123; &#125;</b>:</p>
<pre class="code">const total = 84000;
console.log(&#96;Total belanja: Rp$&#123;total&#125;&#96;);   // Total belanja: Rp84000</pre>

<div data-diagram="vs" data-left="Angka + angka::5 + 3::hasilnya 8" data-right="Teks + angka::&quot;5&quot; + 3::hasilnya &quot;53&quot;" data-caption="Jebakan pemula: kalau salah satu sisi berupa teks, tanda + menyambung, bukan menjumlah"></div>

<h3>Membandingkan</h3>
<p>Perbandingan menghasilkan <b>true</b> atau <b>false</b>:</p>
<table class="tbl">
  <tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
  <tr><td><b>===</b></td><td>Sama dengan</td><td>3 === 3</td><td>true</td></tr>
  <tr><td><b>!==</b></td><td>Tidak sama dengan</td><td>3 !== 4</td><td>true</td></tr>
  <tr><td><b>&gt;</b> / <b>&lt;</b></td><td>Lebih besar / lebih kecil</td><td>84000 &gt; 50000</td><td>true</td></tr>
  <tr><td><b>&gt;=</b> / <b>&lt;=</b></td><td>Lebih besar / kecil atau sama</td><td>5 &lt;= 4</td><td>false</td></tr>
</table>
<div class="callout warn">
<b>Pakai tiga tanda sama dengan (===).</b> JavaScript juga punya <i>==</i> (dua tanda) yang diam-diam mengubah jenis data, sehingga <i>"5" == 5</i> dianggap true. Hasil seperti itu sering menjadi sumber bug. Biasakan selalu memakai <b>===</b> dan <b>!==</b>.
</div>

<h3>Menggabungkan syarat</h3>
<table class="tbl">
  <tr><th>Operator</th><th>Arti</th><th>Contoh</th></tr>
  <tr><td><b>&amp;&amp;</b></td><td>DAN — benar jika keduanya benar</td><td>umur &gt;= 17 &amp;&amp; punyaKTP</td></tr>
  <tr><td><b>||</b></td><td>ATAU — benar jika salah satu benar</td><td>hariSabtu || hariMinggu</td></tr>
  <tr><td><b>!</b></td><td>BUKAN — membalik true/false</td><td>!habis</td></tr>
</table>
<div data-demo="js-playground">
const total = 84000;
const member = true;

console.log(total >= 100000);
console.log(total >= 50000 &amp;&amp; member);
console.log(total >= 100000 || member);
console.log(!member);
</div>
`,
          keyPoints: [
            "Operator hitung: + - * / % (sisa bagi) ** (pangkat); pakai kurung untuk mengatur urutan.",
            "+ pada teks berarti menyambung: \"5\" + 3 menjadi \"53\"; ubah teks ke angka dengan Number(...).",
            "Template literal memakai backtick dan $ { } untuk menyisipkan nilai ke dalam teks.",
            "Perbandingan (===, !==, >, <, >=, <=) menghasilkan true atau false; selalu pakai ===, bukan ==.",
            "Gabungkan syarat dengan && (dan), || (atau), dan ! (bukan)."
          ],
          practice: [
            { type: "number", q: "Berapa hasil 47 % 10?", answer: 7, tol: 0.1, hint: "Sisa setelah 47 dibagi 10.", solution: "47 = 4 × 10 + 7, jadi sisanya 7." },
            { type: "code", q: "Harga kopi 28000, dibeli 3 cangkir, dibayar dengan uang 100000. Buat variabel total dan kembalian yang dihitung dengan operator (bukan ditulis langsung).", starter: "const harga = 28000;\nconst jumlah = 3;\nconst bayar = 100000;\n// buat variabel total dan kembalian di bawah ini\n", tests: [["total", 84000], ["kembalian", 16000]], hint: "total = harga * jumlah; kembalian = bayar - total.", solution: "const harga = 28000;\nconst jumlah = 3;\nconst bayar = 100000;\nconst total = harga * jumlah;\nconst kembalian = bayar - total;" },
            { type: "code", q: "Isian dari pembeli berupa teks: \"2\" dan \"3\". Buat variabel jumlah yang berisi hasil penjumlahan keduanya sebagai ANGKA (hasilnya 5, bukan \"23\").", starter: "const isianA = \"2\";\nconst isianB = \"3\";\n", tests: [["jumlah", 5]], hint: "Ubah tiap isian dengan Number(...) sebelum dijumlahkan.", solution: "const isianA = \"2\";\nconst isianB = \"3\";\nconst jumlah = Number(isianA) + Number(isianB);" }
          ],
          quiz: [
            {
              q: "Apa hasil \"10\" + 5 di JavaScript?",
              options: [
                "\"105\"",
                "15",
                "\"15\"",
                "Error"
              ],
              answer: 0,
              explain: "Salah satu sisinya teks, jadi + menyambung keduanya sebagai teks."
            },
            {
              q: "Kenapa sebaiknya memakai === daripada ==?",
              options: [
                "== diam-diam mengubah jenis data sehingga hasilnya mengejutkan",
                "== hanya bisa dipakai untuk membandingkan teks saja",
                "=== membuat program berjalan sepuluh kali lebih cepat",
                "== sudah dihapus dari semua browser yang modern"
              ],
              answer: 0,
              explain: "Dengan ==, \"5\" == 5 dianggap true; === memeriksa nilai dan jenisnya sekaligus."
            },
            {
              q: "Nilai total 84000 dan member true. Apa hasil total >= 100000 || member?",
              options: [
                "true",
                "false",
                "84000",
                "undefined"
              ],
              answer: 0,
              explain: "|| bernilai true bila salah satu benar; member bernilai true."
            },
            {
              q: "Untuk apa operator % paling sering dipakai?",
              options: [
                "Mencari sisa pembagian, mis. memeriksa bilangan genap",
                "Menghitung persentase seperti diskon 10% dari harga",
                "Mengubah teks menjadi angka sebelum dijumlahkan",
                "Membagi dua angka lalu membulatkan hasilnya ke atas"
              ],
              answer: 0,
              explain: "% memberi sisa bagi: angka genap punya sisa 0 bila dibagi 2. Untuk persen, kalikan dengan pecahannya."
            }
          ]
        },
        {
          id: "cd-js-3",
          title: "Fungsi — Membungkus Langkah agar Bisa Dipakai Ulang",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Variabel menyimpan nilai, dan operator menghitungnya: <i>const total = harga * jumlah;</i>. Selama ini, setiap kali harga atau jumlah berubah, kita harus menulis ulang hitungannya.
</div>

<h3>Fungsi = mesin kecil</h3>
<p>Bayangkan mesin kopi: kamu memasukkan bahan (<b>masukan</b>), mesin mengolahnya, lalu keluar segelas kopi (<b>keluaran</b>). Fungsi bekerja persis seperti itu — langkah-langkah yang dibungkus dan diberi nama, supaya bisa dipakai berulang kali dengan masukan berbeda.</p>

<div data-diagram="flow" data-steps="Masukan: harga 28000, jumlah 3|Fungsi totalHarga: harga × jumlah|Keluaran (return): 84000" data-caption="Fungsi = mesin kecil: masukan berbeda, langkah sama, keluaran berbeda"></div>
<pre class="code">function totalHarga(harga, jumlah) {
  return harga * jumlah;
}

console.log(totalHarga(28000, 3));   // 84000
console.log(totalHarga(15000, 2));   // 30000</pre>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>function totalHarga</b></td><td>Membuat fungsi bernama totalHarga</td></tr>
  <tr><td><b>(harga, jumlah)</b></td><td><b>Parameter</b>: kotak masukan, diisi saat fungsi dipanggil</td></tr>
  <tr><td><b>{ ... }</b></td><td>Langkah-langkah di dalam fungsi</td></tr>
  <tr><td><b>return</b></td><td>Mengembalikan hasil kepada yang memanggil, lalu fungsi selesai</td></tr>
  <tr><td><b>totalHarga(28000, 3)</b></td><td><b>Memanggil</b> fungsi; 28000 dan 3 disebut <b>argumen</b></td></tr>
</table>

<h3>Coba sendiri</h3>
<div data-demo="js-playground">
function totalHarga(harga, jumlah) {
  return harga * jumlah;
}

function kembalian(bayar, total) {
  return bayar - total;
}

const total = totalHarga(28000, 3);
console.log("Total: " + total);
console.log("Kembalian: " + kembalian(100000, total));
</div>

<h3>return bukan console.log</h3>
<p>Ini kebingungan pemula yang paling umum. <b>console.log</b> hanya <i>menampilkan</i> ke layar — hasilnya tidak bisa dipakai lagi. <b>return</b> <i>mengembalikan</i> nilai sehingga bisa disimpan, dihitung, atau dikirim ke fungsi lain.</p>
<div data-demo="js-playground">
function kaliDuaTampil(x) {
  console.log(x * 2);
}
function kaliDuaKembali(x) {
  return x * 2;
}

const a = kaliDuaTampil(5);
const b = kaliDuaKembali(5);
console.log("a = " + a);
console.log("b = " + b);
</div>
<p>Fungsi pertama menampilkan 10, tapi tidak mengembalikan apa pun, sehingga <b>a</b> berisi <i>undefined</i>. Fungsi kedua mengembalikan 10, sehingga <b>b</b> bisa dipakai. Semua soal latihan di jalur ini memeriksa nilai yang di-<b>return</b>.</p>

<h3>Parameter hanya hidup di dalam fungsinya</h3>
<p>Kotak <i>harga</i> dan <i>jumlah</i> di dalam totalHarga hanya ada selama fungsi itu berjalan. Di luar fungsi, nama itu tidak dikenal. Inilah yang membuat fungsi aman dipakai berulang kali: setiap panggilan mendapat kotak barunya sendiri.</p>

<h3>Cara menulis yang lebih singkat</h3>
<p>Kamu akan sering melihat <b>fungsi panah</b> (<i>arrow function</i>) di kode modern. Artinya sama:</p>
<pre class="code">const totalHarga = (harga, jumlah) =&gt; harga * jumlah;</pre>
<p>Untuk sekarang, cukup kenali bentuknya. Kita akan lebih sering memakai bentuk <b>function</b> yang lebih mudah dibaca.</p>
`,
          keyPoints: [
            "Fungsi membungkus langkah-langkah dan memberinya nama agar bisa dipakai ulang dengan masukan berbeda.",
            "Parameter adalah kotak masukan; argumen adalah nilai yang diberikan saat fungsi dipanggil.",
            "return mengembalikan hasil kepada pemanggil dan mengakhiri fungsi; console.log hanya menampilkan.",
            "Fungsi tanpa return menghasilkan undefined.",
            "Parameter hanya hidup di dalam fungsinya; fungsi panah (=>) adalah cara singkat menulis fungsi."
          ],
          practice: [
            { type: "code", q: "Lengkapi fungsi luas(panjang, lebar) supaya MENGEMBALIKAN luas persegi panjang.", starter: "function luas(panjang, lebar) {\n  // tulis kodemu di sini\n}", tests: [["luas(3, 4)", 12], ["luas(10, 2)", 20], ["luas(7, 7)", 49]], hint: "Gunakan return, bukan console.log.", solution: "function luas(panjang, lebar) {\n  return panjang * lebar;\n}" },
            { type: "code", q: "Buat fungsi rataRata(a, b, c) yang mengembalikan rata-rata tiga angka.", starter: "function rataRata(a, b, c) {\n\n}", tests: [["rataRata(80, 90, 100)", 90], ["rataRata(70, 75, 80)", 75], ["rataRata(0, 0, 30)", 10]], hint: "Jumlahkan dulu di dalam kurung, baru dibagi 3.", solution: "function rataRata(a, b, c) {\n  return (a + b + c) / 3;\n}" },
            { type: "code", q: "Buat fungsi kembalian(bayar, total) yang mengembalikan uang kembalian.", starter: "", tests: [["kembalian(100000, 84000)", 16000], ["kembalian(50000, 50000)", 0]], hint: "function kembalian(bayar, total) { return ...; }", solution: "function kembalian(bayar, total) {\n  return bayar - total;\n}" }
          ],
          quiz: [
            {
              q: "Apa beda return dan console.log di dalam fungsi?",
              options: [
                "return mengembalikan nilai yang bisa dipakai; console.log hanya menampilkan",
                "Keduanya sama persis, hanya cara penulisannya yang berbeda",
                "console.log mengembalikan nilai; return hanya menampilkan ke layar",
                "return hanya boleh dipakai untuk teks, console.log untuk angka"
              ],
              answer: 0,
              explain: "Nilai yang di-return bisa disimpan di variabel atau dihitung lagi."
            },
            {
              q: "Dalam totalHarga(28000, 3), apa sebutan untuk 28000 dan 3?",
              options: [
                "Argumen",
                "Parameter",
                "Operator",
                "Komentar"
              ],
              answer: 0,
              explain: "Nilai yang diberikan saat memanggil disebut argumen; kotak di definisi fungsi disebut parameter."
            },
            {
              q: "Fungsi tanpa return dipanggil dan hasilnya disimpan ke variabel. Apa isi variabel itu?",
              options: [
                "undefined",
                "0",
                "null",
                "Teks kosong"
              ],
              answer: 0,
              explain: "Tanpa return, fungsi tidak mengembalikan apa pun, sehingga hasilnya undefined."
            },
            {
              q: "Kenapa fungsi membuat program lebih mudah dirawat?",
              options: [
                "Rumus cukup ditulis sekali dan diperbaiki di satu tempat",
                "Fungsi membuat komputer tidak bisa menampilkan error",
                "Fungsi otomatis menyimpan semua variabel selamanya",
                "Program dengan fungsi tidak perlu diuji sama sekali"
              ],
              answer: 0,
              explain: "Kalau rumusnya berubah, cukup ubah isi fungsinya; semua yang memanggilnya ikut benar."
            }
          ]
        },
        {
          id: "cd-js-4",
          title: "Percabangan — Program yang Bisa Mengambil Keputusan",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Perbandingan seperti <i>total &gt;= 100000</i> menghasilkan <b>true</b> atau <b>false</b>, dan syarat bisa digabung dengan <b>&amp;&amp;</b> (dan) serta <b>||</b> (atau). Fungsi mengembalikan hasil dengan <b>return</b>.
</div>

<h3>if: "jika… maka…"</h3>
<p>Program yang hanya berjalan lurus tidak bisa menyesuaikan diri. Dengan <b>if</b>, program memilih jalan sesuai keadaan.</p>
<pre class="code">function diskon(total) {
  if (total &gt;= 100000) {
    return total / 10;     // diskon 10%
  }
  return 0;                // tidak ada diskon
}</pre>
<p>Bagian di dalam kurung <b>( )</b> adalah <b>syarat</b>. Kalau syaratnya true, langkah di dalam kurung kurawal <b>{ }</b> dijalankan. Kalau false, langkah itu dilewati.</p>
<div data-diagram="flow" data-steps="Periksa: total ≥ 100.000?|Ya → diskon 10%|Tidak → diskon 0" data-caption="Satu syarat, dua jalan"></div>

<h3>else dan else if: lebih dari dua jalan</h3>
<div data-demo="js-playground">
function predikat(nilai) {
  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 55) {
    return "C";
  } else {
    return "D";
  }
}

console.log(predikat(92));
console.log(predikat(70));
console.log(predikat(61));
console.log(predikat(40));
</div>
<p>Syarat diperiksa <b>dari atas ke bawah</b>, dan yang pertama bernilai true yang dijalankan — sisanya dilewati. Karena itu <b>urutan syarat penting</b>. Coba pindahkan baris <i>nilai &gt;= 55</i> ke paling atas: nilai 92 pun akan mendapat C, karena 92 juga lebih besar dari 55.</p>

<h3>Menggabungkan syarat</h3>
<div data-demo="js-playground">
function bolehPinjam(umur, punyaKTP) {
  if (umur >= 17 &amp;&amp; punyaKTP) {
    return "boleh";
  }
  return "belum boleh";
}

console.log(bolehPinjam(20, true));
console.log(bolehPinjam(20, false));
console.log(bolehPinjam(15, true));
</div>

<h3>Tiga kesalahan yang sering terjadi</h3>
<table class="tbl">
  <tr><th>Kesalahan</th><th>Contoh</th><th>Seharusnya</th></tr>
  <tr><td>Memakai = (mengisi) di dalam syarat</td><td>if (nilai = 100)</td><td>if (nilai === 100)</td></tr>
  <tr><td>Urutan syarat terbalik</td><td>Memeriksa ≥ 55 sebelum ≥ 85</td><td>Periksa syarat paling ketat lebih dulu</td></tr>
  <tr><td>Batas yang terlewat</td><td>Memakai &gt; 100000 padahal "100.000 ke atas" dapat diskon</td><td>Pakai &gt;= dan uji tepat di angka batasnya</td></tr>
</table>
<p>Kebiasaan penting: selalu uji fungsi percabangan <b>tepat di angka batasnya</b> — misalnya total 99.999, 100.000, dan 100.001.</p>
`,
          keyPoints: [
            "if menjalankan langkah hanya bila syaratnya true; else menangkap semua keadaan lainnya.",
            "else if menambah jalan pilihan; syarat diperiksa dari atas, dan yang pertama true yang dijalankan.",
            "Urutan syarat penting: periksa syarat paling ketat lebih dulu.",
            "Gunakan === untuk membandingkan di dalam syarat, bukan = yang berarti mengisi.",
            "Selalu uji percabangan tepat di angka batasnya."
          ],
          practice: [
            { type: "code", q: "Buat fungsi diskon(total): bila total 100.000 atau lebih, kembalikan diskon 10% dari total; selain itu kembalikan 0.", starter: "function diskon(total) {\n\n}", tests: [["diskon(120000)", 12000], ["diskon(99000)", 0], ["diskon(100000)", 10000]], hint: "Perhatikan batasnya: 100.000 tepat juga dapat diskon. 10% sama dengan dibagi 10.", solution: "function diskon(total) {\n  if (total >= 100000) {\n    return total / 10;\n  }\n  return 0;\n}" },
            { type: "code", q: "Buat fungsi jenisBilangan(n) yang mengembalikan teks \"genap\" atau \"ganjil\".", starter: "function jenisBilangan(n) {\n\n}", tests: [["jenisBilangan(4)", "genap"], ["jenisBilangan(7)", "ganjil"], ["jenisBilangan(0)", "genap"]], hint: "Bilangan genap bersisa 0 bila dibagi 2: n % 2 === 0.", solution: "function jenisBilangan(n) {\n  if (n % 2 === 0) {\n    return \"genap\";\n  }\n  return \"ganjil\";\n}" },
            { type: "code", q: "Buat fungsi ongkir(jarak): sampai 5 km gratis (0), lebih dari 5 sampai 10 km Rp10000, lebih dari 10 km Rp20000.", starter: "function ongkir(jarak) {\n\n}", tests: [["ongkir(3)", 0], ["ongkir(5)", 0], ["ongkir(8)", 10000], ["ongkir(10)", 10000], ["ongkir(15)", 20000]], hint: "Pakai if, else if, else. Perhatikan kata 'sampai' berarti batasnya ikut.", solution: "function ongkir(jarak) {\n  if (jarak <= 5) {\n    return 0;\n  } else if (jarak <= 10) {\n    return 10000;\n  } else {\n    return 20000;\n  }\n}" }
          ],
          quiz: [
            {
              q: "Dalam rangkaian if / else if, syarat mana yang dijalankan?",
              options: [
                "Syarat pertama dari atas yang bernilai true",
                "Semua syarat yang bernilai true sekaligus",
                "Syarat terakhir yang bernilai true",
                "Syarat yang paling panjang tulisannya"
              ],
              answer: 0,
              explain: "Setelah satu syarat terpenuhi, sisanya dilewati."
            },
            {
              q: "Apa yang salah dengan if (nilai = 100)?",
              options: [
                "Memakai = yang mengisi, bukan === yang membandingkan",
                "Angka 100 harus ditulis dengan tanda kutip",
                "Kata if harus ditulis dengan huruf kapital",
                "Syarat tidak boleh berisi angka sama sekali"
              ],
              answer: 0,
              explain: "= mengubah isi variabel; untuk membandingkan pakai ===."
            },
            {
              q: "Fungsi predikat memeriksa nilai >= 55 sebelum nilai >= 85. Apa akibatnya untuk nilai 92?",
              options: [
                "Mendapat predikat C karena syarat 55 terpenuhi lebih dulu",
                "Mendapat predikat A karena komputer memilih yang terbaik",
                "Program berhenti dengan error karena urutannya salah",
                "Mendapat dua predikat sekaligus, A dan C"
              ],
              answer: 0,
              explain: "Syarat diperiksa dari atas; 92 ≥ 55 sudah true sehingga syarat berikutnya tak pernah diperiksa."
            }
          ]
        },
        {
          id: "cd-js-5",
          title: "Perulangan — Menyuruh Komputer Mengulang",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Variabel <b>let</b> boleh diganti isinya, misalnya <i>stok = stok - 3</i>. Syarat seperti <i>i &lt;= 5</i> menghasilkan true atau false.
</div>

<h3>Kenapa perlu perulangan?</h3>
<p>Menampilkan angka 1 sampai 5 bisa dengan lima baris console.log. Tapi bagaimana kalau 1 sampai 1.000? Komputer unggul justru dalam pekerjaan yang <b>berulang</b> — asal kita memberi tahu <i>berapa kali</i> dan <i>kapan berhenti</i>.</p>

<h3>for: mengulang dengan hitungan</h3>
<pre class="code">for (let i = 1; i &lt;= 5; i++) {
  console.log("Putaran ke-" + i);
}</pre>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>let i = 1</b></td><td>Mulai: buat penghitung i berisi 1</td></tr>
  <tr><td><b>i &lt;= 5</b></td><td>Syarat lanjut: ulangi selama i ≤ 5</td></tr>
  <tr><td><b>i++</b></td><td>Setelah setiap putaran, tambah i dengan 1 (singkatan dari i = i + 1)</td></tr>
</table>
<div data-demo="js-playground">
for (let i = 1; i &lt;= 5; i++) {
  console.log("Putaran ke-" + i);
}
</div>

<h3>Pola penting: penampung</h3>
<p>Konon, saat masih SD, matematikawan Gauss diminta menjumlahkan 1 sampai 100. Kita suruh komputer melakukannya:</p>
<div data-demo="js-playground">
let jumlah = 0;            // penampung, mulai dari nol
for (let i = 1; i &lt;= 100; i++) {
  jumlah = jumlah + i;     // tambahkan i ke penampung
}
console.log(jumlah);
</div>
<p>Polanya selalu sama: siapkan <b>penampung</b> sebelum perulangan, ubah isinya di setiap putaran, lalu pakai hasilnya setelah perulangan selesai. Pola ini dipakai untuk menjumlah belanjaan, menghitung rata-rata, mencari harga termahal, dan banyak lagi.</p>

<div data-diagram="cycle" data-steps="Siapkan total = 0|Ambil angka berikutnya|Tambahkan ke total|Ulangi sampai 100" data-center="hasil: 5.050" data-caption="Pola penampung: siapkan sebelum perulangan, ubah di setiap putaran, pakai sesudahnya"></div>

<h3>while: mengulang selama syaratnya benar</h3>
<p>Kadang kita tidak tahu berapa kali harus mengulang, hanya tahu kapan berhenti. Misalnya: tabungan Rp1.000.000 berbunga 10% per tahun — berapa tahun sampai menjadi Rp2.000.000?</p>
<div data-demo="js-playground">
let saldo = 1000000;
let tahun = 0;
while (saldo &lt; 2000000) {
  saldo = saldo * 1.1;
  tahun++;
}
console.log("Butuh " + tahun + " tahun");
</div>

<div class="callout warn">
<b>Awas perulangan tanpa akhir.</b> Kalau syaratnya tidak pernah menjadi false — misalnya lupa menulis <i>i++</i> — perulangan berjalan selamanya dan program macet. Di platform ini, kode yang berjalan lebih dari 3 detik dihentikan otomatis. Coba hapus <i>tahun++</i> dan <i>saldo = saldo * 1.1</i> dari contoh di atas, lalu jalankan.
</div>

<h3>Berhenti lebih awal dengan break</h3>
<pre class="code">for (let i = 1; i &lt;= 100; i++) {
  if (i * i &gt; 50) {
    console.log("Kuadrat pertama di atas 50: " + i * i);
    break;   // keluar dari perulangan
  }
}</pre>
`,
          keyPoints: [
            "for (mulai; syarat lanjut; langkah) mengulang dengan penghitung; i++ berarti i = i + 1.",
            "Pola penampung: siapkan variabel sebelum perulangan, ubah di setiap putaran, pakai hasilnya sesudahnya.",
            "while mengulang selama syaratnya true — cocok bila jumlah putaran belum diketahui.",
            "Perulangan tanpa akhir terjadi bila syaratnya tak pernah false, misalnya lupa menambah penghitung.",
            "break menghentikan perulangan lebih awal."
          ],
          practice: [
            { type: "code", q: "Buat fungsi jumlahSampai(n) yang mengembalikan 1 + 2 + ... + n.", starter: "function jumlahSampai(n) {\n  let jumlah = 0;\n  // tulis perulangannya di sini\n\n  return jumlah;\n}", tests: [["jumlahSampai(5)", 15], ["jumlahSampai(100)", 5050], ["jumlahSampai(1)", 1]], hint: "for (let i = 1; i <= n; i++) { jumlah = jumlah + i; }", solution: "function jumlahSampai(n) {\n  let jumlah = 0;\n  for (let i = 1; i <= n; i++) {\n    jumlah = jumlah + i;\n  }\n  return jumlah;\n}" },
            { type: "code", q: "Buat fungsi faktorial(n) yang mengembalikan 1 × 2 × ... × n. Faktorial 0 adalah 1.", starter: "function faktorial(n) {\n\n}", tests: [["faktorial(5)", 120], ["faktorial(3)", 6], ["faktorial(1)", 1], ["faktorial(0)", 1]], hint: "Penampungnya dimulai dari 1 (bukan 0), lalu dikalikan setiap putaran.", solution: "function faktorial(n) {\n  let hasil = 1;\n  for (let i = 2; i <= n; i++) {\n    hasil = hasil * i;\n  }\n  return hasil;\n}" },
            { type: "code", q: "Buat fungsi tahunMenjadiDua(saldo) yang mengembalikan berapa tahun sampai saldo menjadi 2 kali lipat atau lebih, bila tumbuh 10% per tahun.", starter: "function tahunMenjadiDua(saldo) {\n\n}", tests: [["tahunMenjadiDua(1000000)", 8], ["tahunMenjadiDua(500)", 8]], hint: "Simpan target = saldo * 2, lalu ulangi selama saldo < target.", solution: "function tahunMenjadiDua(saldo) {\n  const target = saldo * 2;\n  let tahun = 0;\n  while (saldo < target) {\n    saldo = saldo * 1.1;\n    tahun++;\n  }\n  return tahun;\n}" }
          ],
          quiz: [
            {
              q: "Dalam for (let i = 1; i <= 3; i++), berapa kali isi perulangan dijalankan?",
              options: [
                "3 kali",
                "2 kali",
                "4 kali",
                "Tanpa henti"
              ],
              answer: 0,
              explain: "i bernilai 1, 2, lalu 3; saat i menjadi 4, syarat i <= 3 false dan perulangan berhenti."
            },
            {
              q: "Apa penyebab paling umum perulangan tanpa akhir?",
              options: [
                "Syaratnya tidak pernah menjadi false, misalnya lupa i++",
                "Isi perulangan memakai console.log terlalu banyak",
                "Penghitungnya dimulai dari angka 1, bukan dari 0",
                "Perulangan ditulis di dalam sebuah fungsi"
              ],
              answer: 0,
              explain: "Kalau penghitung tak pernah berubah, syaratnya tetap true selamanya."
            },
            {
              q: "Kapan while lebih cocok daripada for?",
              options: [
                "Saat jumlah putaran belum diketahui, hanya kapan berhenti",
                "Saat ingin mengulang tepat 10 kali dari angka 1",
                "Saat perulangan harus berjalan tanpa syarat sama sekali",
                "Saat program tidak memakai variabel apa pun"
              ],
              answer: 0,
              explain: "Contohnya: mengulang sampai saldo mencapai target."
            }
          ]
        },
        {
          id: "cd-js-6",
          title: "Array & Objek — Menyimpan Banyak Data Sekaligus",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Satu variabel menyimpan satu nilai. <b>for</b> mengulang dengan penghitung, dan pola <b>penampung</b> mengumpulkan hasil di setiap putaran.
</div>

<h3>Array: daftar berurutan</h3>
<p>Warung punya puluhan menu. Membuat satu variabel per menu tidak masuk akal. <b>Array</b> menyimpan banyak nilai dalam satu daftar:</p>
<div data-demo="js-playground">
const menu = ["Kopi Susu", "Teh Manis", "Roti Bakar"];

console.log(menu[0]);        // nomor urut dimulai dari 0
console.log(menu[2]);
console.log(menu.length);    // banyaknya isi

menu.push("Es Jeruk");       // tambah di akhir
console.log(menu);
</div>
<div class="callout">
<b>Nomor urut dimulai dari 0.</b> Isi pertama ada di <i>menu[0]</i>, dan isi terakhir di <i>menu[menu.length - 1]</i>. Ini sumber kesalahan "meleset satu" yang sangat umum.
</div>

<div data-diagram="deret" data-nama="menu" data-isi="Kopi Susu|Teh Manis|Roti Bakar" data-caption="Array menyimpan banyak nilai dalam satu daftar — nomor urutnya mulai dari 0"></div>

<h3>Menjelajahi isi array</h3>
<p><b>for...of</b> mengambil isi array satu per satu, tanpa perlu mengurus nomor urut:</p>
<div data-demo="js-playground">
const harga = [28000, 15000, 22000];
let total = 0;
for (const h of harga) {
  total = total + h;
}
console.log("Total: " + total);
</div>

<h3>Objek: satu benda, banyak keterangan</h3>
<p>Satu pesanan punya nama menu, harga, dan jumlah. <b>Objek</b> mengelompokkan keterangan itu dengan label (disebut <b>properti</b>):</p>
<div data-demo="js-playground">
const pesanan = {
  menu: "Kopi Susu",
  harga: 28000,
  jumlah: 2
};

console.log(pesanan.menu);
console.log(pesanan.harga * pesanan.jumlah);

pesanan.jumlah = 3;          // ubah satu properti
console.log(pesanan);
</div>
<table class="tbl">
  <tr><th></th><th>Array</th><th>Objek</th></tr>
  <tr><td>Bentuk</td><td>[ isi1, isi2, ... ]</td><td>{ label: isi, ... }</td></tr>
  <tr><td>Diakses dengan</td><td>Nomor urut: menu[0]</td><td>Nama label: pesanan.harga</td></tr>
  <tr><td>Cocok untuk</td><td>Daftar benda sejenis</td><td>Keterangan tentang satu benda</td></tr>
</table>

<div data-diagram="network" data-center="pesanan" data-nodes="menu: &quot;Kopi Susu&quot;|harga: 28000|jumlah: 2" data-caption="Objek: satu benda dengan beberapa keterangan berlabel (properti)"></div>

<h3>Gabungan: daftar objek</h3>
<p>Data sungguhan hampir selalu berbentuk <b>array berisi objek</b> — satu nota belanja, daftar transaksi, daftar pengguna:</p>
<div data-demo="js-playground">
const nota = [
  { menu: "Kopi Susu", harga: 28000, jumlah: 2 },
  { menu: "Roti Bakar", harga: 22000, jumlah: 1 },
  { menu: "Teh Manis", harga: 8000, jumlah: 3 }
];

let total = 0;
for (const p of nota) {
  console.log(p.menu + " x" + p.jumlah);
  total = total + p.harga * p.jumlah;
}
console.log("Total: " + total);
</div>
<p>Bentuk ini juga yang dipakai saat aplikasi mengambil data dari internet — misalnya daftar blok Bitcoin di pelajaran Analis On-Chain adalah array berisi objek.</p>
`,
          keyPoints: [
            "Array menyimpan daftar berurutan; nomor urut dimulai dari 0 dan banyaknya isi ada di .length.",
            "push menambah isi di akhir array; for...of menjelajahi isi array satu per satu.",
            "Objek mengelompokkan keterangan satu benda dengan label (properti), diakses dengan titik: pesanan.harga.",
            "Array untuk daftar benda sejenis, objek untuk keterangan tentang satu benda.",
            "Data nyata sering berbentuk array berisi objek, seperti nota belanja atau daftar transaksi."
          ],
          practice: [
            { type: "code", q: "Buat fungsi totalBelanja(nota) yang menerima array berisi objek { harga, jumlah } dan mengembalikan total belanja.", starter: "function totalBelanja(nota) {\n\n}", tests: [["totalBelanja([{ harga: 28000, jumlah: 2 }, { harga: 15000, jumlah: 1 }])", 71000], ["totalBelanja([{ harga: 8000, jumlah: 3 }])", 24000], ["totalBelanja([])", 0]], hint: "Penampung total = 0, lalu for (const p of nota) tambahkan p.harga * p.jumlah.", solution: "function totalBelanja(nota) {\n  let total = 0;\n  for (const p of nota) {\n    total = total + p.harga * p.jumlah;\n  }\n  return total;\n}" },
            { type: "code", q: "Buat fungsi termahal(daftarHarga) yang mengembalikan harga tertinggi dalam array angka.", starter: "function termahal(daftarHarga) {\n\n}", tests: [["termahal([28000, 15000, 32000])", 32000], ["termahal([5000])", 5000], ["termahal([12000, 40000, 9000, 40000])", 40000]], hint: "Simpan isi pertama sebagai calon termahal, lalu bandingkan dengan setiap isi berikutnya.", solution: "function termahal(daftarHarga) {\n  let maks = daftarHarga[0];\n  for (const h of daftarHarga) {\n    if (h > maks) {\n      maks = h;\n    }\n  }\n  return maks;\n}" },
            { type: "code", q: "Buat fungsi menuTerakhir(menu) yang mengembalikan isi TERAKHIR sebuah array teks.", starter: "function menuTerakhir(menu) {\n\n}", tests: [["menuTerakhir([\"Kopi\", \"Teh\", \"Roti\"])", "Roti"], ["menuTerakhir([\"Es Jeruk\"])", "Es Jeruk"]], hint: "Nomor urut terakhir adalah panjang array dikurangi 1.", solution: "function menuTerakhir(menu) {\n  return menu[menu.length - 1];\n}" }
          ],
          quiz: [
            {
              q: "Array menu berisi [\"Kopi\", \"Teh\", \"Roti\"]. Apa isi menu[1]?",
              options: [
                "\"Teh\"",
                "\"Kopi\"",
                "\"Roti\"",
                "undefined"
              ],
              answer: 0,
              explain: "Nomor urut dimulai dari 0: menu[0] = \"Kopi\", menu[1] = \"Teh\"."
            },
            {
              q: "Kapan objek lebih cocok daripada array?",
              options: [
                "Untuk menyimpan berbagai keterangan tentang satu benda",
                "Untuk menyimpan daftar panjang benda yang sejenis",
                "Untuk menyimpan satu angka saja tanpa keterangan",
                "Untuk menjalankan perulangan lebih cepat"
              ],
              answer: 0,
              explain: "Objek memberi label pada setiap keterangan: menu, harga, jumlah."
            },
            {
              q: "Array punya 5 isi. Nomor urut isi terakhirnya berapa?",
              options: [
                "4",
                "5",
                "6",
                "0"
              ],
              answer: 0,
              explain: "Nomor urut dimulai dari 0, jadi isi terakhir ada di length - 1 = 4."
            },
            {
              q: "Bagaimana mengambil harga dari objek pesanan = { menu: \"Kopi\", harga: 28000 }?",
              options: [
                "pesanan.harga",
                "pesanan[harga]",
                "harga.pesanan",
                "pesanan(harga)"
              ],
              answer: 0,
              explain: "Properti objek diakses dengan titik diikuti nama labelnya."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 3: PYTHON: BAHASA AI & DATA ---------------- */
    {
      id: "cd-py",
      level: "Python",
      title: "Python: Bahasa AI & Data",
      summary: "Konsep yang sama dalam ejaan Python — print, f-string, indentasi, if/elif, for dengan range, def, list, dictionary, list comprehension, dan pustaka — dijalankan dengan Python sungguhan di browser.",
      lessons: [
        {
          id: "cd-py-1",
          title: "Python dari Nol — Bahasa yang Sama, Ejaan Berbeda",
          duration: "14 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Di JavaScript kamu sudah memakai <b>variabel</b>, <b>operator</b>, <b>fungsi</b>, <b>if</b>, <b>perulangan</b>, serta <b>array</b> dan <b>objek</b>. Hampir semua bahasa punya bahan yang sama — hanya ejaannya yang berbeda (pelajaran Peta Bahasa Pemrograman).
</div>

<h3>Kenapa Python?</h3>
<p><b>Python</b> adalah bahasa paling populer untuk AI, analisis data, dan otomasi. Kodenya ringkas dan mudah dibaca, dan pustakanya untuk data sangat lengkap — itulah bahasa yang dipakai contoh-contoh kode di jalur AI. Di platform ini, Python sungguhan berjalan langsung di browser: mesinnya diunduh sekali saat pertama kali kamu menekan Jalankan.</p>

<h3>Perintah pertama</h3>
<div data-demo="py-playground">
print("Halo dari Python!")
harga = 28000
jumlah = 3
total = harga * jumlah
print("Total:", total)
print(f"Total belanja: Rp{total}")
</div>
<ul>
  <li><b>print(...)</b> setara dengan console.log(...).</li>
  <li><b>Tidak ada let atau const</b> dan <b>tidak ada titik koma</b>: cukup tulis <i>nama = isi</i>.</li>
  <li><b>f-string</b>: huruf <b>f</b> sebelum tanda kutip, lalu nilai disisipkan dengan kurung kurawal <b>{ }</b>.</li>
  <li>Komentar diawali tanda <b>#</b>, bukan //.</li>
</ul>

<h3>JavaScript vs Python</h3>

<div data-diagram="vs" data-left="JavaScript::console.log(...)::let atau const::blok pakai { }" data-right="Python::print(...)::cukup nama = isi::blok pakai indentasi" data-caption="Bahasa berbeda, idenya sama — hanya ejaannya yang berubah"></div>
<table class="tbl">
  <tr><th></th><th>JavaScript</th><th>Python</th></tr>
  <tr><td>Menampilkan</td><td>console.log("Hai")</td><td>print("Hai")</td></tr>
  <tr><td>Variabel</td><td>let stok = 20;</td><td>stok = 20</td></tr>
  <tr><td>Benar / salah</td><td>true / false</td><td><b>True / False</b> (huruf besar)</td></tr>
  <tr><td>Kosong</td><td>null</td><td>None</td></tr>
  <tr><td>Komentar</td><td>// catatan</td><td># catatan</td></tr>
  <tr><td>Penanda blok</td><td>Kurung kurawal { }</td><td><b>Indentasi</b> (spasi di awal baris)</td></tr>
  <tr><td>Gaya nama</td><td>totalBelanja</td><td>total_belanja</td></tr>
</table>

<h3>Jenis data dan pembagian</h3>
<div data-demo="py-playground">
print(type(28000))      # int: bilangan bulat
print(type(3.5))        # float: bilangan desimal
print(type("Kopi"))     # str: teks
print(type(True))       # bool: True atau False

print(7 / 2)            # pembagian biasa selalu menghasilkan float
print(7 // 2)           # pembagian bulat (dibulatkan ke bawah)
print(7 % 2)            # sisa bagi
print(2 ** 10)          # pangkat
</div>
<p>Perhatikan: di Python, <b>/</b> selalu menghasilkan bilangan desimal, bahkan <i>6 / 2</i> menjadi <i>3.0</i>. Kalau butuh hasil bulat, pakai <b>//</b>.</p>

<h3>Teks dan angka tidak bisa langsung dijumlah</h3>
<div data-demo="py-playground">
umur = 20
print("Umur: " + str(umur))   # ubah angka menjadi teks dengan str()
print(int("5") + 3)           # ubah teks menjadi angka dengan int()
print("Umur: " + umur)        # baris ini error — coba baca pesannya
</div>
<p>Python lebih tegas daripada JavaScript: <i>"5" + 3</i> tidak diam-diam menjadi "53", melainkan langsung error. Ini justru membantu, karena kesalahan ketahuan lebih awal.</p>
`,
          keyPoints: [
            "Python populer untuk AI, data, dan otomasi; di platform ini Python sungguhan berjalan di browser.",
            "print(...) untuk menampilkan; variabel cukup nama = isi, tanpa let/const dan tanpa titik koma.",
            "f-string menyisipkan nilai ke teks: f\"Total: Rp{total}\"; komentar memakai #.",
            "True/False berhuruf besar, None untuk kosong; nama memakai gaya snake_case.",
            "/ selalu menghasilkan float, // pembagian bulat; teks dan angka harus diubah dulu dengan str() atau int()."
          ],
          practice: [
            { type: "code", lang: "python", q: "Buat variabel harga berisi 28000, jumlah berisi 3, dan total yang dihitung dari keduanya.", starter: "# tulis kodemu di sini\n", tests: [["harga", 28000], ["jumlah", 3], ["total", 84000]], hint: "Di Python cukup: nama = isi. Total = harga * jumlah.", solution: "harga = 28000\njumlah = 3\ntotal = harga * jumlah" },
            { type: "code", lang: "python", q: "Tampilkan tulisan Total: Rp84000 memakai f-string dan variabel total.", starter: "total = 84000\n", tests: [["@log", "Total: Rp84000"]], hint: "print(f\"... {total}\")", solution: "total = 84000\nprint(f\"Total: Rp{total}\")" },
            { type: "code", lang: "python", q: "Isian pembeli berupa teks \"2\" dan \"3\". Buat variabel jumlah berisi penjumlahan keduanya sebagai angka (5).", starter: "isian_a = \"2\"\nisian_b = \"3\"\n", tests: [["jumlah", 5]], hint: "Ubah dengan int(...) sebelum dijumlahkan.", solution: "isian_a = \"2\"\nisian_b = \"3\"\njumlah = int(isian_a) + int(isian_b)" }
          ],
          quiz: [
            {
              q: "Mana penulisan nilai benar yang tepat di Python?",
              options: [
                "True",
                "true",
                "TRUE",
                "\"true\""
              ],
              answer: 0,
              explain: "Python memakai True dan False dengan huruf awal kapital."
            },
            {
              q: "Apa hasil 7 // 2 di Python?",
              options: [
                "3",
                "3.5",
                "1",
                "4"
              ],
              answer: 0,
              explain: "// adalah pembagian bulat yang dibulatkan ke bawah; 7 / 2 menghasilkan 3.5."
            },
            {
              q: "Apa yang terjadi bila menjalankan \"Umur: \" + 20 di Python?",
              options: [
                "Error, karena teks dan angka tidak bisa langsung disambung",
                "Menghasilkan \"Umur: 20\" seperti di JavaScript",
                "Menghasilkan angka 20 tanpa teks di depannya",
                "Python mengabaikan baris itu tanpa pesan apa pun"
              ],
              answer: 0,
              explain: "Ubah angkanya dulu dengan str(20). Python tidak diam-diam mengubah jenis data."
            }
          ]
        },
        {
          id: "cd-py-2",
          title: "Indentasi, if & Perulangan di Python",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Di JavaScript, langkah-langkah di dalam if atau for dibungkus kurung kurawal <b>{ }</b>. Python tidak memakai kurung kurawal untuk itu — sebagai gantinya, ia membaca <b>indentasi</b>: spasi di awal baris.
</div>

<h3>Indentasi bukan hiasan</h3>
<pre class="code">total = 120000
if total &gt;= 100000:
    print("Dapat diskon")      # menjorok: bagian dari if
    print("Selamat!")          # masih bagian dari if
print("Terima kasih")          # tidak menjorok: selalu dijalankan</pre>
<ul>
  <li>Baris yang membuka blok diakhiri <b>titik dua (:)</b>.</li>
  <li>Isi blok <b>menjorok</b> ke dalam — kebiasaannya <b>4 spasi</b>.</li>
  <li>Blok berakhir saat baris kembali ke posisi semula.</li>
</ul>
<p>Kalau indentasinya tidak rata, Python berhenti dengan <b>IndentationError</b>. Di kolom kode platform ini, tombol <b>Tab</b> menyisipkan 4 spasi.</p>

<h3>if, elif, else</h3>
<div data-demo="py-playground">
def predikat(nilai):
    if nilai >= 85:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 55:
        return "C"
    else:
        return "D"

print(predikat(92))
print(predikat(70))
print(predikat(40))
</div>
<table class="tbl">
  <tr><th></th><th>JavaScript</th><th>Python</th></tr>
  <tr><td>Selain itu, jika</td><td>else if</td><td><b>elif</b></td></tr>
  <tr><td>Dan / atau / bukan</td><td>&amp;&amp; / || / !</td><td><b>and / or / not</b></td></tr>
  <tr><td>Sama dengan</td><td>===</td><td><b>==</b> (Python tidak diam-diam mengubah jenis data, jadi "5" == 5 bernilai False)</td></tr>
</table>

<h3>for dengan range</h3>
<div data-demo="py-playground">
for i in range(1, 6):
    print("Putaran ke-", i)

jumlah = 0
for i in range(1, 101):
    jumlah = jumlah + i
print("1 + 2 + ... + 100 =", jumlah)
</div>
<div class="callout warn">
<b>range(1, 6) berhenti sebelum 6.</b> Angka akhir <i>tidak</i> ikut: hasilnya 1, 2, 3, 4, 5. Untuk menjumlah 1 sampai 100, tulis <i>range(1, 101)</i>. Ini jebakan "meleset satu" yang paling sering di Python.
</div>

<div data-diagram="deret" data-nama="range(1, 6)" data-isi="1|2|3|4|5" data-indeks="tidak" data-lewat="6" data-caption="range(1, 6) berhenti SEBELUM 6 — jebakan &quot;meleset satu&quot; yang paling sering"></div>

<h3>while</h3>
<div data-demo="py-playground">
saldo = 1000000
tahun = 0
while saldo &lt; 2000000:
    saldo = saldo * 1.1
    tahun += 1          # singkatan dari tahun = tahun + 1
print("Butuh", tahun, "tahun")
</div>
`,
          keyPoints: [
            "Python menandai blok dengan indentasi (biasanya 4 spasi) setelah baris yang diakhiri titik dua.",
            "if / elif / else; gabungkan syarat dengan and, or, not.",
            "Python memakai == untuk membandingkan dan tidak mengubah jenis data diam-diam: \"5\" == 5 bernilai False.",
            "range(a, b) berhenti sebelum b: range(1, 101) menghasilkan 1 sampai 100.",
            "while mengulang selama syarat True; x += 1 adalah singkatan dari x = x + 1."
          ],
          practice: [
            { type: "code", lang: "python", q: "Buat fungsi diskon(total): 10% dari total bila total 100000 atau lebih, selain itu 0.", starter: "def diskon(total):\n    # tulis kodemu di sini\n    pass\n", tests: [["diskon(120000)", 12000], ["diskon(99000)", 0], ["diskon(100000)", 10000]], hint: "if total >= 100000: return total // 10 — lalu return 0 di luar if.", solution: "def diskon(total):\n    if total >= 100000:\n        return total // 10\n    return 0" },
            { type: "code", lang: "python", q: "Buat fungsi jumlah_sampai(n) yang mengembalikan 1 + 2 + ... + n memakai for dan range.", starter: "def jumlah_sampai(n):\n    jumlah = 0\n    # tulis perulangannya di sini\n\n    return jumlah\n", tests: [["jumlah_sampai(5)", 15], ["jumlah_sampai(100)", 5050], ["jumlah_sampai(1)", 1]], hint: "range(1, n + 1) — ingat angka akhirnya tidak ikut.", solution: "def jumlah_sampai(n):\n    jumlah = 0\n    for i in range(1, n + 1):\n        jumlah = jumlah + i\n    return jumlah" },
            { type: "code", lang: "python", q: "Buat fungsi ongkir(jarak): sampai 5 km gratis (0), lebih dari 5 sampai 10 km 10000, lebih dari 10 km 20000.", starter: "def ongkir(jarak):\n    pass\n", tests: [["ongkir(3)", 0], ["ongkir(5)", 0], ["ongkir(8)", 10000], ["ongkir(10)", 10000], ["ongkir(15)", 20000]], hint: "if ... elif ... else, dengan <= untuk 'sampai'.", solution: "def ongkir(jarak):\n    if jarak <= 5:\n        return 0\n    elif jarak <= 10:\n        return 10000\n    else:\n        return 20000" }
          ],
          quiz: [
            {
              q: "Bagaimana Python mengetahui baris mana yang termasuk di dalam sebuah if?",
              options: [
                "Dari indentasinya: baris yang menjorok ke dalam",
                "Dari kurung kurawal yang membungkus barisnya",
                "Dari titik koma di akhir setiap baris",
                "Dari kata end yang menutup blok if"
              ],
              answer: 0,
              explain: "Indentasi adalah bagian dari tata bahasa Python, bukan hiasan."
            },
            {
              q: "Angka apa saja yang dihasilkan range(1, 4)?",
              options: [
                "1, 2, 3",
                "1, 2, 3, 4",
                "0, 1, 2, 3",
                "2, 3, 4"
              ],
              answer: 0,
              explain: "Angka akhir tidak ikut: range berhenti sebelum 4."
            },
            {
              q: "Apa padanan else if dan && dari JavaScript di Python?",
              options: [
                "elif dan and",
                "elseif dan &&",
                "else if dan &",
                "elif dan &&"
              ],
              answer: 0,
              explain: "Python memakai kata: elif, and, or, not."
            }
          ]
        },
        {
          id: "cd-py-3",
          title: "Fungsi, List & Dictionary di Python",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Fungsi membungkus langkah dan mengembalikan hasil dengan <b>return</b>. Array menyimpan daftar berurutan (nomor urut mulai 0), dan objek menyimpan keterangan dengan label. Python punya padanan untuk ketiganya.
</div>

<h3>Fungsi: def</h3>
<pre class="code">def total_harga(harga, jumlah):
    return harga * jumlah

print(total_harga(28000, 3))   # 84000</pre>
<p><b>def</b> menggantikan <i>function</i>, diikuti titik dua dan isi yang menjorok. Nama fungsi dan variabel di Python biasanya memakai <b>snake_case</b>: kata dipisah garis bawah.</p>

<h3>List (padanan array)</h3>
<div data-demo="py-playground">
menu = ["Kopi Susu", "Teh Manis", "Roti Bakar"]
print(menu[0])          # nomor urut mulai dari 0
print(menu[-1])         # -1 = isi terakhir
print(len(menu))        # banyaknya isi

menu.append("Es Jeruk") # tambah di akhir
for m in menu:
    print("-", m)
</div>
<p>Python punya kemudahan: nomor urut <b>negatif</b> menghitung dari belakang, jadi <i>menu[-1]</i> adalah isi terakhir.</p>

<div data-diagram="deret" data-nama="menu" data-isi="Kopi Susu|Teh Manis|Roti Bakar" data-negatif="ya" data-caption="Nomor urut biasa (atas) dan nomor urut dari belakang (bawah): menu[-1] adalah isi terakhir"></div>

<h3>Dictionary (padanan objek)</h3>
<div data-demo="py-playground">
pesanan = {"menu": "Kopi Susu", "harga": 28000, "jumlah": 2}
print(pesanan["menu"])
print(pesanan["harga"] * pesanan["jumlah"])

pesanan["jumlah"] = 3
for kunci, nilai in pesanan.items():
    print(kunci, "=", nilai)
</div>
<p>Isi dictionary diambil dengan kurung siku dan nama kuncinya dalam tanda kutip: <i>pesanan["harga"]</i>.</p>

<h3>Daftar berisi dictionary</h3>
<div data-demo="py-playground">
nota = [
    {"menu": "Kopi Susu", "harga": 28000, "jumlah": 2},
    {"menu": "Roti Bakar", "harga": 22000, "jumlah": 1},
    {"menu": "Teh Manis", "harga": 8000, "jumlah": 3},
]

total = 0
for p in nota:
    total += p["harga"] * p["jumlah"]
print("Total:", total)
</div>

<h3>Fungsi bawaan yang sangat berguna</h3>
<table class="tbl">
  <tr><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
  <tr><td><b>len</b></td><td>len([5, 8, 2])</td><td>3</td></tr>
  <tr><td><b>sum</b></td><td>sum([5, 8, 2])</td><td>15</td></tr>
  <tr><td><b>max / min</b></td><td>max([5, 8, 2])</td><td>8</td></tr>
  <tr><td><b>sorted</b></td><td>sorted([5, 8, 2])</td><td>[2, 5, 8]</td></tr>
  <tr><td><b>round</b></td><td>round(2.567, 1)</td><td>2.6</td></tr>
</table>
<p>Hal yang di JavaScript butuh perulangan dan penampung, di Python sering cukup satu fungsi bawaan. Tapi memahami cara menulisnya sendiri tetap penting — fungsi bawaan pun bekerja dengan perulangan di dalamnya.</p>
`,
          keyPoints: [
            "Fungsi dibuat dengan def nama(parameter): lalu isi yang menjorok; hasil dikembalikan dengan return.",
            "List = padanan array: nomor urut mulai 0, menu[-1] adalah isi terakhir, append menambah di akhir.",
            "Dictionary = padanan objek: diakses dengan d[\"kunci\"], dijelajahi dengan for k, v in d.items().",
            "Data nyata sering berupa list berisi dictionary, seperti nota belanja.",
            "Fungsi bawaan len, sum, max, min, sorted, dan round mempersingkat banyak pekerjaan."
          ],
          practice: [
            { type: "code", lang: "python", q: "Buat fungsi total_belanja(nota) untuk list berisi dictionary dengan kunci \"harga\" dan \"jumlah\".", starter: "def total_belanja(nota):\n    pass\n", tests: [["total_belanja([{\"harga\": 28000, \"jumlah\": 2}, {\"harga\": 15000, \"jumlah\": 1}])", 71000], ["total_belanja([{\"harga\": 8000, \"jumlah\": 3}])", 24000], ["total_belanja([])", 0]], hint: "total = 0, lalu for p in nota: total += p[\"harga\"] * p[\"jumlah\"].", solution: "def total_belanja(nota):\n    total = 0\n    for p in nota:\n        total += p[\"harga\"] * p[\"jumlah\"]\n    return total" },
            { type: "code", lang: "python", q: "Buat fungsi menu_terakhir(menu) yang mengembalikan isi terakhir sebuah list.", starter: "def menu_terakhir(menu):\n    pass\n", tests: [["menu_terakhir([\"Kopi\", \"Teh\", \"Roti\"])", "Roti"], ["menu_terakhir([\"Es Jeruk\"])", "Es Jeruk"]], hint: "Nomor urut negatif menghitung dari belakang.", solution: "def menu_terakhir(menu):\n    return menu[-1]" },
            { type: "code", lang: "python", q: "Buat fungsi rata_rata(nilai) yang mengembalikan rata-rata isi list angka, dibulatkan 1 angka di belakang koma.", starter: "def rata_rata(nilai):\n    pass\n", tests: [["rata_rata([80, 90, 100])", 90], ["rata_rata([70, 75])", 72.5], ["rata_rata([1, 2, 2])", 1.7]], hint: "sum(...) / len(...), lalu round(..., 1).", solution: "def rata_rata(nilai):\n    return round(sum(nilai) / len(nilai), 1)" }
          ],
          quiz: [
            {
              q: "Apa isi menu[-1] bila menu = [\"Kopi\", \"Teh\", \"Roti\"]?",
              options: [
                "\"Roti\"",
                "\"Kopi\"",
                "\"Teh\"",
                "Error"
              ],
              answer: 0,
              explain: "Nomor urut negatif menghitung dari belakang; -1 adalah isi terakhir."
            },
            {
              q: "Bagaimana mengambil harga dari pesanan = {\"menu\": \"Kopi\", \"harga\": 28000}?",
              options: [
                "pesanan[\"harga\"]",
                "pesanan.harga",
                "pesanan(harga)",
                "harga[pesanan]"
              ],
              answer: 0,
              explain: "Isi dictionary diambil dengan kurung siku dan nama kunci dalam tanda kutip."
            },
            {
              q: "Kata apa yang dipakai Python untuk membuat fungsi?",
              options: [
                "def",
                "function",
                "func",
                "fn"
              ],
              answer: 0,
              explain: "def nama(parameter): lalu isi fungsi yang menjorok."
            },
            {
              q: "Apa hasil sum([5, 8, 2])?",
              options: [
                "15",
                "8",
                "3",
                "582"
              ],
              answer: 0,
              explain: "sum menjumlahkan semua isi list."
            }
          ]
        },
        {
          id: "cd-py-4",
          title: "Kenapa Python Disukai untuk Data — List Comprehension & Pustaka",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
List menyimpan daftar data, <b>for</b> menjelajahinya, dan fungsi bawaan seperti <b>sum</b>, <b>len</b>, dan <b>max</b> merangkumnya. Di jalur AI, contoh kode memakai pustaka Python seperti NumPy, pandas, dan scikit-learn.
</div>

<h3>List comprehension: membuat list dalam satu baris</h3>
<p>Misalnya semua harga naik 10%. Cara biasa:</p>
<pre class="code">harga = [28000, 15000, 22000]
baru = []
for h in harga:
    baru.append(h * 110 // 100)</pre>
<p>Dengan <b>list comprehension</b>, cukup satu baris — dan dibaca hampir seperti kalimat: "h × 1,1 untuk setiap h di harga".</p>
<div data-demo="py-playground">
harga = [28000, 15000, 22000, 9000]

naik = [h * 110 // 100 for h in harga]
print(naik)

mahal = [h for h in harga if h >= 20000]   # pakai if untuk menyaring
print(mahal)
</div>

<div data-diagram="flow" data-steps="harga = [28000, 15000, 22000]|[h * 110 // 100 for h in harga]|[30800, 16500, 24200]" data-caption="List comprehension: &quot;h × 1,1 untuk setiap h di harga&quot; dalam satu baris"></div>

<h3>Contoh analisis kecil</h3>
<p>Penjualan Warung Kopi Sari selama seminggu (cangkir per hari). Hari apa saja yang di atas rata-rata?</p>
<div data-demo="py-playground">
import statistics

hari = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]
penjualan = [42, 38, 45, 40, 61, 78, 70]

rata = statistics.mean(penjualan)
print("Rata-rata:", round(rata, 1))
print("Median   :", statistics.median(penjualan))
print("Tertinggi:", max(penjualan), "pada hari", hari[penjualan.index(max(penjualan))])

ramai = [hari[i] for i in range(len(hari)) if penjualan[i] > rata]
print("Di atas rata-rata:", ramai)
</div>
<p>Baris <b>import statistics</b> memuat <b>pustaka</b> — kumpulan fungsi siap pakai yang ditulis orang lain. Python sudah membawa banyak pustaka bawaan seperti <i>math</i>, <i>statistics</i>, <i>random</i>, dan <i>json</i>.</p>

<h3>Ekosistem yang membuat Python unggul di data dan AI</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Gunanya</th><th>Dibahas di</th></tr>
  <tr><td><b>NumPy</b></td><td>Hitungan angka dalam jumlah sangat besar</td><td><a href="#/lesson/ai-tl-2">Pustaka Wajib</a> (jalur AI)</td></tr>
  <tr><td><b>pandas</b></td><td>Tabel data seperti spreadsheet, tapi diprogram</td><td>Jalur AI</td></tr>
  <tr><td><b>matplotlib</b></td><td>Membuat grafik</td><td>Jalur AI</td></tr>
  <tr><td><b>scikit-learn</b></td><td>Machine learning klasik</td><td>Jalur AI</td></tr>
  <tr><td><b>PyTorch</b></td><td>Deep learning dan model AI besar</td><td>Jalur AI</td></tr>
</table>
<p>Kolom Python di platform ini hanya memuat pustaka bawaan. Untuk memakai pustaka data di atas, gunakan Python di komputermu sendiri atau layanan notebook gratis di browser seperti <b>Google Colab</b>, yang sudah menyediakan semuanya.</p>

<h3>Langkah berikutnya</h3>
<ol>
  <li>Pasang Python dari <b>python.org</b> dan editor <b>VS Code</b> — atau mulai langsung di Google Colab.</li>
  <li>Kerjakan ulang soal-soal jalur ini di sana, lalu coba contoh kode di jalur AI.</li>
  <li>Pilih satu data yang kamu kenal — pengeluaran bulanan, nilai kuliah, penjualan usaha keluarga — dan analisis dengan Python.</li>
</ol>
`,
          keyPoints: [
            "List comprehension membuat list dalam satu baris: [ekspresi for x in data if syarat].",
            "import memuat pustaka; Python membawa pustaka bawaan seperti math, statistics, random, dan json.",
            "statistics.mean dan median merangkum data; list.index mencari posisi sebuah nilai.",
            "NumPy, pandas, matplotlib, scikit-learn, dan PyTorch membuat Python unggul untuk data dan AI.",
            "Kolom Python di sini hanya berisi pustaka bawaan; untuk pustaka data pakai Python di komputer atau Google Colab."
          ],
          practice: [
            { type: "code", lang: "python", q: "Buat fungsi harga_diskon(daftar) yang mengembalikan list baru: setiap harga dikurangi 10% (pakai // agar hasilnya bulat).", starter: "def harga_diskon(daftar):\n    pass\n", tests: [["harga_diskon([28000, 15000])", [25200, 13500]], ["harga_diskon([])", []]], hint: "[h - h // 10 for h in daftar]", solution: "def harga_diskon(daftar):\n    return [h - h // 10 for h in daftar]" },
            { type: "code", lang: "python", q: "Buat fungsi hari_ramai(penjualan) yang mengembalikan BANYAKNYA hari dengan penjualan di atas rata-rata.", starter: "def hari_ramai(penjualan):\n    pass\n", tests: [["hari_ramai([42, 38, 45, 40, 61, 78, 70])", 3], ["hari_ramai([10, 10, 10])", 0], ["hari_ramai([1, 9])", 1]], hint: "Hitung rata = sum / len, lalu len([p for p in penjualan if p > rata]).", solution: "def hari_ramai(penjualan):\n    rata = sum(penjualan) / len(penjualan)\n    return len([p for p in penjualan if p > rata])" },
            { type: "code", lang: "python", q: "Buat fungsi kuadrat_genap(n) yang mengembalikan list kuadrat dari bilangan genap 1 sampai n.", starter: "def kuadrat_genap(n):\n    pass\n", tests: [["kuadrat_genap(6)", [4, 16, 36]], ["kuadrat_genap(1)", []], ["kuadrat_genap(4)", [4, 16]]], hint: "[i ** 2 for i in range(1, n + 1) if i % 2 == 0]", solution: "def kuadrat_genap(n):\n    return [i ** 2 for i in range(1, n + 1) if i % 2 == 0]" }
          ],
          quiz: [
            {
              q: "Apa hasil [h * 2 for h in [1, 2, 3]]?",
              options: [
                "[2, 4, 6]",
                "[1, 2, 3, 1, 2, 3]",
                "12",
                "[1, 4, 9]"
              ],
              answer: 0,
              explain: "Setiap h dikalikan 2, hasilnya dikumpulkan menjadi list baru."
            },
            {
              q: "Untuk apa baris import statistics?",
              options: [
                "Memuat pustaka berisi fungsi statistik siap pakai",
                "Mengunduh data statistik terbaru dari internet",
                "Membuat variabel baru bernama statistics",
                "Menampilkan statistik kode yang sedang berjalan"
              ],
              answer: 0,
              explain: "import memuat pustaka; statistics menyediakan mean, median, dan lainnya."
            },
            {
              q: "Di mana sebaiknya memakai pandas dan scikit-learn?",
              options: [
                "Python di komputer sendiri atau notebook seperti Google Colab",
                "Kolom Python di platform ini, karena semua pustaka tersedia",
                "Konsol browser lewat tombol F12 dan tab Console",
                "Remix IDE, karena Remix mendukung semua bahasa"
              ],
              answer: 0,
              explain: "Kolom Python di sini hanya berisi pustaka bawaan; Colab sudah menyediakan pustaka data."
            }
          ]
        },
      ],
    },
    /* ---------------- MODUL 4: SOLIDITY: BAHASA SMART CONTRACT ---------------- */
    {
      id: "cd-sol",
      level: "Solidity",
      title: "Solidity: Bahasa Smart Contract",
      summary: "Program yang hidup di blockchain: jenis data, msg.sender & require, mapping/struct/event, uang dengan payable, sampai token sendiri — di-compile dan dijalankan di EVM sungguhan lewat Lab Solidity di browser.",
      lessons: [
        {
          id: "cd-sol-1",
          title: "Solidity dari Nol — Program yang Hidup di Blockchain",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Kamu sudah memakai variabel, fungsi, dan return di JavaScript dan Python. Dari jalur Crypto: <b>smart contract</b> adalah program yang disimpan dan dijalankan di blockchain; <b>membaca</b> datanya gratis, sedangkan <b>mengubah</b> data butuh transaksi dan biaya <b>gas</b> (<a href="#/lesson/bc-m-2">Smart Contract</a>).
</div>

<h3>Apa yang berbeda dari program biasa?</h3>

<div data-diagram="vs" data-left="Program JavaScript/Python::tinggal di komputer pemiliknya::gratis dijalankan::bug diperbaiki lalu jalan ulang" data-right="Smart contract Solidity::disalin di ribuan komputer::mengubah data bayar gas::kode tak bisa diubah" data-caption="Kenapa programmer Solidity sangat berhati-hati"></div>
<table class="tbl">
  <tr><th></th><th>Program JavaScript/Python</th><th>Smart contract Solidity</th></tr>
  <tr><td>Tinggal di</td><td>Komputer atau server pemiliknya</td><td>Sebuah <b>alamat</b> di blockchain, disalin di ribuan komputer</td></tr>
  <tr><td>Data</td><td>Hilang saat program ditutup, kecuali disimpan</td><td><b>Variabel kontrak tersimpan permanen</b></td></tr>
  <tr><td>Biaya menjalankan</td><td>Gratis</td><td>Mengubah data dibayar dengan <b>gas</b></td></tr>
  <tr><td>Siapa yang bisa memanggil</td><td>Yang diizinkan pemilik</td><td>Siapa pun, kalau fungsinya <b>public</b></td></tr>
  <tr><td>Memperbaiki bug</td><td>Ubah kode, jalankan ulang</td><td><b>Tidak bisa</b> — kode tidak bisa diubah setelah di-deploy</td></tr>
</table>
<p>Poin terakhir itulah yang membuat programmer Solidity sangat berhati-hati: bug di smart contract yang memegang uang bisa berarti uang hilang permanen.</p>

<h3>Kerangka sebuah kontrak</h3>
<pre class="code">// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Penyimpanan {
    uint256 public angka;          // variabel kontrak: tersimpan permanen

    function simpan(uint256 _angka) public {
        angka = _angka;
    }
}</pre>
<table class="tbl">
  <tr><th>Baris</th><th>Artinya</th></tr>
  <tr><td><b>SPDX-License-Identifier</b></td><td>Keterangan lisensi kode</td></tr>
  <tr><td><b>pragma solidity ^0.8.24;</b></td><td>Versi compiler yang dipakai: 0.8.24 ke atas</td></tr>
  <tr><td><b>contract Penyimpanan { }</b></td><td>Satu kontrak — mirip satu objek yang hidup di blockchain</td></tr>
  <tr><td><b>uint256 public angka;</b></td><td>Variabel kontrak. <i>public</i> otomatis membuat fungsi baca bernama angka()</td></tr>
</table>

<h3>Jenis data harus ditulis</h3>
<p>Berbeda dengan JavaScript dan Python, Solidity mewajibkan setiap variabel dan parameter menyebut <b>jenis datanya</b>:</p>
<table class="tbl">
  <tr><th>Jenis</th><th>Isi</th><th>Catatan</th></tr>
  <tr><td><b>uint256</b> (atau uint)</td><td>Bilangan bulat 0 ke atas</td><td>Paling sering dipakai — tidak bisa negatif</td></tr>
  <tr><td><b>int256</b></td><td>Bilangan bulat, boleh negatif</td><td>Jarang dipakai</td></tr>
  <tr><td><b>bool</b></td><td>true / false</td><td></td></tr>
  <tr><td><b>string</b></td><td>Teks</td><td>Mahal disimpan; di parameter ditulis <i>string memory</i></td></tr>
  <tr><td><b>address</b></td><td>Alamat dompet atau kontrak</td><td>Contoh: 0x5B38…eddC4</td></tr>
</table>
<div class="callout">
<b>Tidak ada bilangan desimal.</b> Solidity tidak punya angka seperti 3,5. Uang dihitung dalam satuan terkecil — 1 ETH = 1.000.000.000.000.000.000 wei — persis karena itulah satuan wei ada.
</div>

<h3>Coba sendiri di Lab</h3>
<div data-demo="sol-lab">
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Penyimpanan {
    uint256 public angka;

    function simpan(uint256 _angka) public {
        angka = _angka;
    }

    function tambahSatu() public {
        angka = angka + 1;
    }

    function kurangiSatu() public {
        angka = angka - 1;
    }
}
</div>
<ol>
  <li>Tekan <b>Compile &amp; Deploy</b>. Pertama kali, compiler Solidity dan EVM diunduh dulu.</li>
  <li>Tekan <b>angka</b> (biru): hasilnya 0. Membaca tidak membuat transaksi.</li>
  <li>Isi 41 lalu tekan <b>simpan</b> (oranye), kemudian <b>tambahSatu</b>, lalu baca lagi.</li>
  <li>Simpan 0, lalu tekan <b>kurangiSatu</b>. Transaksinya gagal: uint tidak boleh di bawah nol, dan Solidity 0.8 otomatis membatalkannya.</li>
</ol>

<h3>JavaScript vs Solidity</h3>
<table class="tbl">
  <tr><th>JavaScript</th><th>Solidity</th></tr>
  <tr><td>let angka = 5;</td><td>uint256 angka = 5;</td></tr>
  <tr><td>function tambah(a, b) { return a + b; }</td><td>function tambah(uint a, uint b) public pure returns (uint) { return a + b; }</td></tr>
  <tr><td>console.log("...")</td><td>Tidak ada di kontrak yang berjalan — pakai <b>event</b> (dibahas dua pelajaran lagi)</td></tr>
</table>
<p>Kata <b>pure</b> berarti fungsi itu tidak membaca maupun mengubah data kontrak — hanya menghitung dari masukannya.</p>
`,
          keyPoints: [
            "Smart contract tinggal di sebuah alamat blockchain, datanya tersimpan permanen, dan kodenya tidak bisa diubah setelah deploy.",
            "Kerangka kontrak: SPDX, pragma solidity, lalu contract Nama { ... }.",
            "Setiap variabel dan parameter wajib menyebut jenisnya: uint256, int256, bool, string, address.",
            "Tidak ada bilangan desimal; uang dihitung dalam wei. uint di bawah nol otomatis membatalkan transaksi (Solidity 0.8).",
            "Variabel public otomatis punya fungsi baca; fungsi pure hanya menghitung dari masukannya."
          ],
          practice: [
            { type: "code", lang: "solidity", contract: "Kalkulator", q: "Lengkapi fungsi tambah agar mengembalikan a + b.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Kalkulator {\n    function tambah(uint256 a, uint256 b) public pure returns (uint256) {\n        // tulis kodemu di sini\n    }\n}\n", tests: [["tambah(2, 3)", 5], ["tambah(100, 0)", 100], ["tambah(7, 8)", 15]], hint: "Sama seperti JavaScript: return a + b; — jangan lupa titik koma.", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Kalkulator {\n    function tambah(uint256 a, uint256 b) public pure returns (uint256) {\n        return a + b;\n    }\n}" },
            { type: "code", lang: "solidity", contract: "Penghitung", q: "Lengkapi fungsi tambah() agar menaikkan jumlah sebesar 1 setiap dipanggil.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Penghitung {\n    uint256 public jumlah;\n\n    function tambah() public {\n        // tulis kodemu di sini\n    }\n}\n", tests: [["jumlah()", 0], ["tambah()", null], ["tambah()", null], ["jumlah()", 2]], hint: "jumlah = jumlah + 1; (atau jumlah += 1;)", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Penghitung {\n    uint256 public jumlah;\n\n    function tambah() public {\n        jumlah = jumlah + 1;\n    }\n}" }
          ],
          quiz: [
            {
              q: "Apa yang terjadi pada variabel kontrak setelah transaksi selesai?",
              options: [
                "Nilainya tersimpan permanen di blockchain",
                "Nilainya hilang saat browser ditutup",
                "Nilainya dikembalikan ke nol setiap hari",
                "Nilainya hanya tersimpan di dompet pemanggil"
              ],
              answer: 0,
              explain: "Variabel kontrak adalah bagian dari keadaan blockchain dan disalin di setiap node."
            },
            {
              q: "Kenapa uint256 angka = 0; lalu angka = angka - 1; membuat transaksi gagal?",
              options: [
                "uint tidak boleh negatif, dan Solidity 0.8 membatalkannya",
                "Angka nol tidak boleh disimpan di dalam kontrak",
                "Pengurangan hanya boleh dilakukan oleh pemilik",
                "Solidity tidak punya operator pengurangan sama sekali"
              ],
              answer: 0,
              explain: "Sejak versi 0.8, hitungan yang melewati batas (overflow/underflow) otomatis di-revert."
            },
            {
              q: "Kenapa Solidity tidak punya bilangan desimal untuk uang?",
              options: [
                "Uang dihitung dalam satuan terkecil, yaitu wei",
                "Semua harga di blockchain selalu bulat dalam ETH",
                "Desimal hanya boleh dipakai oleh bank sentral",
                "Komputer tidak bisa menyimpan angka desimal sama sekali"
              ],
              answer: 0,
              explain: "Hitungan desimal rawan pembulatan; dengan wei, semua jumlah menjadi bilangan bulat yang pasti."
            }
          ]
        },
        {
          id: "cd-sol-2",
          title: "Siapa yang Memanggil? msg.sender, require & Pemilik",
          duration: "15 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
Fungsi <b>public</b> bisa dipanggil siapa pun di dunia. Percabangan <b>if</b> memeriksa syarat, dan variabel kontrak tersimpan permanen.
</div>

<h3>msg.sender: siapa yang sedang memanggil</h3>
<p>Setiap panggilan ke kontrak membawa alamat pengirimnya, tersedia sebagai <b>msg.sender</b>. Dengan itu kontrak bisa membedakan siapa boleh melakukan apa — tanpa akun, tanpa kata sandi, karena setiap transaksi sudah ditandatangani dengan kunci privat pengirimnya.</p>

<h3>constructor: dijalankan sekali saat deploy</h3>
<pre class="code">address public pemilik;

constructor() {
    pemilik = msg.sender;      // yang men-deploy menjadi pemilik
}</pre>

<h3>require: syarat yang membatalkan transaksi</h3>
<pre class="code">function ubah(string memory pesanBaru) public {
    require(msg.sender == pemilik, "Hanya pemilik");
    pesan = pesanBaru;
}</pre>
<p>Kalau syarat <b>require</b> tidak terpenuhi, seluruh transaksi <b>dibatalkan</b> (<i>revert</i>) dengan pesan itu — semua perubahan di dalamnya batal, seolah tidak pernah terjadi. Bedanya dengan if: require tidak memilih jalan lain, ia menolak.</p>

<div data-diagram="flow" data-steps="Akun 2 memanggil ubah()|require: pengirim harus pemilik|Syarat tidak terpenuhi|Transaksi dibatalkan (revert)|Pesan lama tetap" data-caption="require menolak seluruh transaksi bila syaratnya tidak terpenuhi"></div>

<h3>Coba sendiri</h3>
<div data-demo="sol-lab">
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Pengumuman {
    address public pemilik;
    string public pesan = "Belum ada pengumuman";

    constructor() {
        pemilik = msg.sender;
    }

    function ubah(string memory pesanBaru) public {
        require(msg.sender == pemilik, "Hanya pemilik");
        pesan = pesanBaru;
    }
}
</div>
<ol>
  <li>Deploy, lalu tekan <b>pemilik</b>: alamat Akun 1, yang men-deploy.</li>
  <li>Dengan Akun 1, isi <i>Rapat jam 9</i> lalu tekan <b>ubah</b>. Baca <b>pesan</b>.</li>
  <li>Ganti ke <b>Akun 2</b> dan coba ubah. Transaksinya ditolak dengan pesan "Hanya pemilik", dan pesan lama tetap utuh.</li>
</ol>

<h3>modifier: syarat yang bisa dipakai ulang</h3>
<p>Kalau banyak fungsi butuh syarat yang sama, tulis sekali sebagai <b>modifier</b>:</p>
<pre class="code">modifier hanyaPemilik() {
    require(msg.sender == pemilik, "Hanya pemilik");
    _;                         // di sinilah isi fungsi dijalankan
}

function ubah(string memory pesanBaru) public hanyaPemilik {
    pesan = pesanBaru;
}</pre>
<p>Pustaka OpenZeppelin menyediakan modifier serupa yang sudah teruji, bernama <i>onlyOwner</i>.</p>

<h3>Siapa yang boleh memanggil fungsi?</h3>
<table class="tbl">
  <tr><th>Kata</th><th>Bisa dipanggil dari</th></tr>
  <tr><td><b>public</b></td><td>Siapa pun, dari luar maupun dari dalam kontrak</td></tr>
  <tr><td><b>external</b></td><td>Hanya dari luar kontrak</td></tr>
  <tr><td><b>internal</b></td><td>Kontrak ini dan kontrak turunannya</td></tr>
  <tr><td><b>private</b></td><td>Hanya kontrak ini</td></tr>
</table>
<div class="callout warn">
<b>private bukan rahasia.</b> private hanya mencegah kontrak <i>lain</i> memanggil atau membaca lewat kode. Semua data di blockchain publik tetap bisa dilihat siapa pun lewat block explorer. Jangan menyimpan kata sandi atau rahasia di smart contract.
</div>
`,
          keyPoints: [
            "msg.sender adalah alamat yang sedang memanggil; tanda tangan transaksi membuktikannya, tanpa akun dan kata sandi.",
            "constructor dijalankan sekali saat deploy — tempat menyimpan pemilik = msg.sender.",
            "require(syarat, \"pesan\") membatalkan seluruh transaksi bila syaratnya gagal; semua perubahan ikut batal.",
            "modifier membungkus syarat agar bisa dipakai ulang; _; menandai tempat isi fungsi dijalankan.",
            "public, external, internal, private mengatur siapa yang boleh memanggil — private tidak berarti rahasia."
          ],
          practice: [
            { type: "code", lang: "solidity", contract: "Pengumuman", q: "Tambahkan pemeriksaan agar hanya pemilik yang boleh mengubah pesan. Bila bukan pemilik, transaksi harus gagal dengan pesan \"Hanya pemilik\".", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Pengumuman {\n    address public pemilik;\n    string public pesan;\n\n    constructor() {\n        pemilik = msg.sender;\n    }\n\n    function ubah(string memory pesanBaru) public {\n        pesan = pesanBaru;\n    }\n}\n", tests: [["akun2 ubah(\"Iseng\")", "REVERT:Hanya pemilik"], ["ubah(\"Rapat jam 9\")", null], ["pesan()", "Rapat jam 9"], ["pemilik()", "akun1"]], hint: "Tambahkan require(msg.sender == pemilik, \"Hanya pemilik\"); di baris pertama fungsi ubah.", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Pengumuman {\n    address public pemilik;\n    string public pesan;\n\n    constructor() {\n        pemilik = msg.sender;\n    }\n\n    function ubah(string memory pesanBaru) public {\n        require(msg.sender == pemilik, \"Hanya pemilik\");\n        pesan = pesanBaru;\n    }\n}" },
            { type: "code", lang: "solidity", contract: "Batas", q: "Fungsi setBatas hanya boleh menerima angka sampai 100. Bila lebih, gagalkan dengan pesan \"Maksimal 100\".", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Batas {\n    uint256 public batas;\n\n    function setBatas(uint256 baru) public {\n        batas = baru;\n    }\n}\n", tests: [["setBatas(50)", null], ["batas()", 50], ["setBatas(150)", "REVERT:Maksimal 100"], ["batas()", 50], ["setBatas(100)", null], ["batas()", 100]], hint: "require(baru <= 100, \"Maksimal 100\"); — perhatikan 100 sendiri masih boleh.", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Batas {\n    uint256 public batas;\n\n    function setBatas(uint256 baru) public {\n        require(baru <= 100, \"Maksimal 100\");\n        batas = baru;\n    }\n}" }
          ],
          quiz: [
            {
              q: "Apa isi msg.sender saat Akun 2 memanggil sebuah fungsi?",
              options: [
                "Alamat Akun 2",
                "Alamat pemilik kontrak",
                "Alamat kontrak itu sendiri",
                "Alamat Akun 1 yang men-deploy"
              ],
              answer: 0,
              explain: "msg.sender selalu alamat yang mengirim panggilan saat itu."
            },
            {
              q: "require gagal di baris ketiga sebuah fungsi yang sudah mengubah dua variabel. Apa yang terjadi pada kedua variabel itu?",
              options: [
                "Ikut dibatalkan, kembali ke nilai sebelumnya",
                "Tetap berubah karena sudah dijalankan lebih dulu",
                "Hanya variabel pertama yang tetap berubah",
                "Keduanya berubah menjadi nol"
              ],
              answer: 0,
              explain: "Revert membatalkan seluruh transaksi, termasuk perubahan yang terjadi sebelum require."
            },
            {
              q: "Variabel ditandai private. Apakah isinya rahasia?",
              options: [
                "Tidak — tetap bisa dibaca lewat block explorer",
                "Ya — hanya pemilik kontrak yang bisa membacanya",
                "Ya — isinya dienkripsi otomatis oleh compiler",
                "Ya — isinya tidak disimpan di blockchain"
              ],
              answer: 0,
              explain: "private hanya membatasi akses dari kontrak lain; data blockchain publik terbuka untuk semua."
            }
          ]
        },
        {
          id: "cd-sol-3",
          title: "mapping, struct, event & Uang (payable)",
          duration: "17 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>msg.sender</b> adalah alamat pemanggil, dan <b>require</b> membatalkan transaksi yang tidak sah. Di JavaScript, objek menyimpan pasangan label-isi, dan array menyimpan daftar berurutan.
</div>

<h3>mapping: tabel pencarian</h3>
<pre class="code">mapping(address =&gt; uint256) public setoran;</pre>
<p>Masukkan alamat, keluar angka. Alamat yang belum pernah dicatat otomatis bernilai <b>0</b> — tidak ada error "tidak ditemukan". mapping adalah cara paling umum menyimpan saldo per alamat; token ERC-20 pun pada dasarnya sebuah mapping.</p>

<div data-diagram="pipeline" data-stages="Alamat Akun 1::saldo 1 ether|Alamat Akun 2::saldo 2 ether|Alamat lain::otomatis 0" data-caption="mapping(address =&gt; uint): masukkan alamat, keluar angka — tidak ada error &quot;tidak ditemukan&quot;"></div>

<h3>struct dan array: data yang bersusun</h3>
<pre class="code">struct Tamu {
    address dari;
    string pesan;
}
Tamu[] public daftar;

function tulis(string memory p) public {
    daftar.push(Tamu(msg.sender, p));
}</pre>
<p><b>struct</b> mirip objek di JavaScript: satu benda dengan beberapa keterangan. <b>Tamu[]</b> adalah array berisi struct.</p>

<h3>event: pengumuman yang tercatat di log</h3>
<pre class="code">event Setor(address dari, uint256 jumlah);
...
emit Setor(msg.sender, msg.value);</pre>
<p>Kontrak tidak punya console.log. Untuk memberi tahu dunia bahwa sesuatu terjadi, kontrak memancarkan <b>event</b>. Event jauh lebih murah daripada menyimpan riwayat di variabel, dan aplikasi web bisa memantaunya — misalnya untuk menampilkan riwayat setoran.</p>

<h3>Uang masuk: payable dan msg.value</h3>
<table class="tbl">
  <tr><th>Kode</th><th>Artinya</th></tr>
  <tr><td><b>payable</b></td><td>Fungsi boleh menerima ETH. Tanpa kata ini, transaksi yang membawa ETH ditolak</td></tr>
  <tr><td><b>msg.value</b></td><td>Jumlah ETH yang dikirim, dalam wei</td></tr>
  <tr><td><b>address(this).balance</b></td><td>Saldo ETH milik kontrak</td></tr>
</table>

<h3>Coba sendiri: celengan bersama</h3>
<div data-demo="sol-lab">
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Celengan {
    address public pemilik;
    mapping(address => uint256) public setoran;
    event Setor(address dari, uint256 jumlah);

    constructor() {
        pemilik = msg.sender;
    }

    function setor() public payable {
        require(msg.value > 0, "Setoran harus lebih dari 0");
        setoran[msg.sender] += msg.value;
        emit Setor(msg.sender, msg.value);
    }

    function tarik(uint256 jumlah) public {
        require(msg.sender == pemilik, "Hanya pemilik");
        require(jumlah &lt;= address(this).balance, "Saldo kurang");
        (bool berhasil, ) = payable(pemilik).call{value: jumlah}("");
        require(berhasil, "Gagal mengirim");
    }

    function saldoKas() public view returns (uint256) {
        return address(this).balance;
    }
}
</div>
<ol>
  <li>Deploy. Dengan Akun 1, isi VALUE <b>1</b>, pilih satuan <b>ether</b>, lalu tekan <b>setor</b> (merah). Perhatikan event Setor di terminal dan saldo Akun 1 yang berkurang.</li>
  <li>Ganti ke Akun 2, setor 2 ether. Baca <b>setoran</b> dengan alamat <i>akun2</i>.</li>
  <li>Dengan Akun 2, coba <b>tarik</b>. Ditolak. Ganti ke Akun 1, tarik <i>500000000000000000</i> (0,5 ETH dalam wei).</li>
  <li>Coba kirim VALUE ke <b>saldoKas</b> atau <b>tarik</b>, yang tidak payable: transaksinya ditolak tanpa pesan.</li>
</ol>
<p>Di kolom alamat Lab, kamu boleh menulis <i>akun1</i>, <i>akun2</i>, atau <i>akun3</i> sebagai ganti alamat panjangnya.</p>
`,
          keyPoints: [
            "mapping(address => uint256) adalah tabel pencarian; alamat yang belum dicatat bernilai 0.",
            "struct mengelompokkan beberapa keterangan; Tipe[] adalah array; push menambah isi.",
            "event + emit mencatat pengumuman di log — murah dan bisa dipantau aplikasi; pengganti console.log.",
            "payable membuat fungsi bisa menerima ETH; jumlahnya di msg.value dalam wei; saldo kontrak di address(this).balance.",
            "Mengirim ETH ke fungsi yang tidak payable membuat transaksi ditolak."
          ],
          practice: [
            { type: "code", lang: "solidity", contract: "Celengan", q: "Lengkapi setor(): tolak setoran 0 dengan pesan \"Setoran harus lebih dari 0\", lalu catat setoran tiap pengirim.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Celengan {\n    mapping(address => uint256) public setoran;\n\n    function setor() public payable {\n        // tulis kodemu di sini\n    }\n\n    function saldoKas() public view returns (uint256) {\n        return address(this).balance;\n    }\n}\n", tests: [["+1000 setor()", null], ["akun2 +500 setor()", null], ["akun2 +250 setor()", null], ["setoran(akun1)", 1000], ["setoran(akun2)", 750], ["saldoKas()", 1750], ["setor()", "REVERT:Setoran harus lebih dari 0"]], hint: "require(msg.value > 0, \"...\"); lalu setoran[msg.sender] += msg.value;", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract Celengan {\n    mapping(address => uint256) public setoran;\n\n    function setor() public payable {\n        require(msg.value > 0, \"Setoran harus lebih dari 0\");\n        setoran[msg.sender] += msg.value;\n    }\n\n    function saldoKas() public view returns (uint256) {\n        return address(this).balance;\n    }\n}" },
            { type: "code", lang: "solidity", contract: "BukuTamu", q: "Lengkapi tulis() agar menyimpan Tamu baru (alamat pengirim dan pesannya) ke daftar, dan jumlahTamu() agar mengembalikan banyaknya tamu.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract BukuTamu {\n    struct Tamu {\n        address dari;\n        string pesan;\n    }\n    Tamu[] public daftar;\n\n    function tulis(string memory p) public {\n        // tulis kodemu di sini\n    }\n\n    function jumlahTamu() public view returns (uint256) {\n        // tulis kodemu di sini\n    }\n}\n", tests: [["tulis(\"Halo\")", null], ["akun2 tulis(\"Salam kenal\")", null], ["jumlahTamu()", 2], ["daftar(1)", ["akun2", "Salam kenal"]], ["daftar(0)", ["akun1", "Halo"]]], hint: "daftar.push(Tamu(msg.sender, p)); dan return daftar.length;", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract BukuTamu {\n    struct Tamu {\n        address dari;\n        string pesan;\n    }\n    Tamu[] public daftar;\n\n    function tulis(string memory p) public {\n        daftar.push(Tamu(msg.sender, p));\n    }\n\n    function jumlahTamu() public view returns (uint256) {\n        return daftar.length;\n    }\n}" }
          ],
          quiz: [
            {
              q: "Berapa nilai setoran[alamatBaru] untuk alamat yang belum pernah menyetor?",
              options: [
                "0",
                "Error: alamat tidak ditemukan",
                "undefined",
                "null"
              ],
              answer: 0,
              explain: "Setiap kunci mapping yang belum diisi bernilai bawaan, untuk uint yaitu 0."
            },
            {
              q: "Kenapa kontrak memakai event, bukan console.log?",
              options: [
                "Event tercatat di log blockchain dan bisa dipantau aplikasi",
                "console.log membuat kontrak tidak bisa di-deploy sama sekali",
                "Event membuat transaksi menjadi gratis tanpa gas",
                "Event menyimpan data yang bisa dibaca kontrak lain"
              ],
              answer: 0,
              explain: "Kontrak yang berjalan tidak punya layar; event adalah catatan permanen yang murah."
            },
            {
              q: "Apa yang terjadi bila ETH dikirim ke fungsi yang tidak bertanda payable?",
              options: [
                "Transaksinya ditolak",
                "ETH-nya hilang selamanya",
                "ETH-nya otomatis dikembalikan sebagian",
                "Fungsi berjalan dan ETH menjadi milik pemilik"
              ],
              answer: 0,
              explain: "Tanpa payable, kontrak menolak transaksi yang membawa ETH."
            },
            {
              q: "Dalam satuan apa msg.value dihitung?",
              options: [
                "wei",
                "ether",
                "gwei",
                "rupiah"
              ],
              answer: 0,
              explain: "Semua angka di dalam kontrak memakai satuan terkecil, wei."
            }
          ]
        },
        {
          id: "cd-sol-4",
          title: "Membuat Token Sendiri — Mini ERC-20 & Kebiasaan Aman",
          duration: "16 menit",
          content: `
<div class="callout ingat">
<b>Ingat dulu</b><br>
<b>mapping</b> menyimpan angka per alamat, <b>require</b> menolak transaksi tidak sah, dan <b>event</b> mencatat kejadian. Dari jalur Crypto: token hanyalah buku saldo di dalam sebuah kontrak (<a href="#/lesson/bc-m-3">Token, NFT &amp; Standar ERC</a>).
</div>

<h3>Token = mapping + aturan</h3>
<p>Setelah tiga pelajaran ini, kamu sudah punya semua bahan untuk membuat token sendiri:</p>
<div data-demo="sol-lab">
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract PoinKelas {
    string public nama = "Poin Kelas";
    address public pemilik;
    uint256 public totalPasokan;
    mapping(address => uint256) public saldo;

    event Transfer(address dari, address ke, uint256 jumlah);

    constructor() {
        pemilik = msg.sender;
        saldo[msg.sender] = 1000;
        totalPasokan = 1000;
    }

    function transfer(address ke, uint256 jumlah) public {
        require(saldo[msg.sender] >= jumlah, "Saldo tidak cukup");
        saldo[msg.sender] -= jumlah;
        saldo[ke] += jumlah;
        emit Transfer(msg.sender, ke, jumlah);
    }

    function cetak(address ke, uint256 jumlah) public {
        require(msg.sender == pemilik, "Hanya pemilik");
        saldo[ke] += jumlah;
        totalPasokan += jumlah;
        emit Transfer(address(0), ke, jumlah);
    }
}
</div>
<ol>
  <li>Deploy. Baca <b>saldo</b> untuk <i>akun1</i>: 1000.</li>
  <li>Transfer 300 ke <i>akun2</i>. Baca saldo kedua akun — total tetap 1000.</li>
  <li>Ganti ke Akun 2, coba transfer 500 ke <i>akun3</i>: ditolak, karena saldonya hanya 300.</li>
  <li>Dengan Akun 2, coba <b>cetak</b>: ditolak. Hanya pemilik yang bisa menambah pasokan.</li>
</ol>
<p>Token ERC-20 sungguhan memakai bahan yang sama, ditambah fungsi standar seperti <i>approve</i> dan <i>transferFrom</i>, supaya dompet dan bursa bisa mengenalinya.</p>

<div data-diagram="flow" data-steps="Awal: akun1 = 1000|transfer(akun2, 300)|akun1 = 700, akun2 = 300|Total tetap 1000" data-caption="Token hanyalah buku saldo: transfer memindahkan angka, jumlah totalnya tidak berubah"></div>

<h3>Kebiasaan aman sejak awal</h3>
<table class="tbl">
  <tr><th>Kebiasaan</th><th>Kenapa</th></tr>
  <tr><td><b>Periksa dulu, catat, baru kirim</b></td><td>Urutan require → ubah saldo → kirim ETH mencegah serangan reentrancy (<a href="#/lesson/bc-dev-2">Keamanan Smart Contract</a>)</td></tr>
  <tr><td><b>Setiap fungsi penting punya pemeriksaan izin</b></td><td>Fungsi cetak tanpa require pemilik = siapa pun bisa mencetak uang</td></tr>
  <tr><td><b>Pakai pustaka teruji untuk produk sungguhan</b></td><td>OpenZeppelin menyediakan ERC-20 dan Ownable yang sudah diaudit (<a href="#/lesson/bc-dev-1">OpenZeppelin</a>)</td></tr>
  <tr><td><b>Uji setiap kemungkinan gagal</b></td><td>Soal di jalur ini memeriksa urutan transaksi dan revert — persis seperti tes otomatis Foundry (<a href="#/lesson/bc-fdy-1">Foundry</a>)</td></tr>
</table>

<h3>Dari Lab ke dunia nyata</h3>
<table class="tbl">
  <tr><th>Tahap</th><th>Alat</th><th>Pelajarannya</th></tr>
  <tr><td>Belajar &amp; mencoba</td><td>Lab di jalur ini</td><td>Modul ini</td></tr>
  <tr><td>Menulis &amp; deploy dengan dompet</td><td>Remix IDE</td><td><a href="#/lesson/bc-remix-1">Remix IDE dari Nol</a></td></tr>
  <tr><td>Tes otomatis &amp; proyek serius</td><td>Foundry</td><td><a href="#/lesson/bc-fdy-1">Foundry</a></td></tr>
  <tr><td>Uang sungguhan</td><td>Audit, testnet, mainnet</td><td><a href="#/lesson/bc-pro-2">Deploy ke Sepolia</a></td></tr>
</table>
<div class="callout warn">
<b>Batas Lab.</b> Lab ini menjalankan EVM sungguhan di browser, tapi hanya untuk satu kontrak, tanpa parameter constructor, dengan 3 akun mainan. Untuk kontrak yang saling memanggil, mengimpor OpenZeppelin, atau terhubung ke dompet, pindahlah ke Remix atau Foundry.
</div>
`,
          keyPoints: [
            "Token sederhana = mapping saldo + transfer yang memeriksa saldo + event Transfer.",
            "transfer harus memeriksa saldo cukup sebelum mengurangi pengirim dan menambah penerima; total pasokan tidak berubah.",
            "Fungsi yang menambah pasokan (cetak) wajib dibatasi untuk pemilik.",
            "Kebiasaan aman: periksa, catat, baru kirim; izin di setiap fungsi penting; pustaka teruji; uji setiap kemungkinan gagal.",
            "Lab untuk belajar; Remix untuk deploy dengan dompet; Foundry untuk tes otomatis; audit sebelum uang sungguhan."
          ],
          practice: [
            { type: "code", lang: "solidity", contract: "PoinKelas", q: "Perbaiki transfer: tolak bila saldo pengirim kurang (pesan \"Saldo tidak cukup\"), dan kurangi saldo pengirim — sekarang fungsi ini malah menciptakan poin baru.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract PoinKelas {\n    mapping(address => uint256) public saldo;\n\n    constructor() {\n        saldo[msg.sender] = 1000;\n    }\n\n    function transfer(address ke, uint256 jumlah) public {\n        saldo[ke] += jumlah;\n    }\n}\n", tests: [["saldo(akun1)", 1000], ["transfer(akun2, 300)", null], ["saldo(akun1)", 700], ["saldo(akun2)", 300], ["akun2 transfer(akun3, 500)", "REVERT:Saldo tidak cukup"], ["akun2 transfer(akun3, 100)", null], ["saldo(akun3)", 100], ["saldo(akun2)", 200]], hint: "require(saldo[msg.sender] >= jumlah, \"Saldo tidak cukup\"); lalu saldo[msg.sender] -= jumlah; sebelum saldo[ke] += jumlah;", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract PoinKelas {\n    mapping(address => uint256) public saldo;\n\n    constructor() {\n        saldo[msg.sender] = 1000;\n    }\n\n    function transfer(address ke, uint256 jumlah) public {\n        require(saldo[msg.sender] >= jumlah, \"Saldo tidak cukup\");\n        saldo[msg.sender] -= jumlah;\n        saldo[ke] += jumlah;\n    }\n}" },
            { type: "code", lang: "solidity", contract: "PoinKelas", q: "Lengkapi cetak(): hanya pemilik (pesan \"Hanya pemilik\"), tambah saldo penerima, dan naikkan totalPasokan.", starter: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract PoinKelas {\n    address public pemilik;\n    uint256 public totalPasokan;\n    mapping(address => uint256) public saldo;\n\n    constructor() {\n        pemilik = msg.sender;\n        saldo[msg.sender] = 1000;\n        totalPasokan = 1000;\n    }\n\n    function cetak(address ke, uint256 jumlah) public {\n        // tulis kodemu di sini\n    }\n}\n", tests: [["akun2 cetak(akun2, 50)", "REVERT:Hanya pemilik"], ["cetak(akun2, 50)", null], ["saldo(akun2)", 50], ["totalPasokan()", 1050], ["saldo(akun1)", 1000]], hint: "Tiga baris: require pemilik, saldo[ke] += jumlah, totalPasokan += jumlah.", solution: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\ncontract PoinKelas {\n    address public pemilik;\n    uint256 public totalPasokan;\n    mapping(address => uint256) public saldo;\n\n    constructor() {\n        pemilik = msg.sender;\n        saldo[msg.sender] = 1000;\n        totalPasokan = 1000;\n    }\n\n    function cetak(address ke, uint256 jumlah) public {\n        require(msg.sender == pemilik, \"Hanya pemilik\");\n        saldo[ke] += jumlah;\n        totalPasokan += jumlah;\n    }\n}" }
          ],
          quiz: [
            {
              q: "Setelah transfer berhasil, apa yang terjadi pada total saldo semua akun?",
              options: [
                "Tetap sama, hanya berpindah tangan",
                "Bertambah sebesar jumlah transfer",
                "Berkurang sebesar biaya gasnya",
                "Menjadi dua kali lipat"
              ],
              answer: 0,
              explain: "Transfer memindahkan, bukan menciptakan. Hanya cetak yang menambah pasokan."
            },
            {
              q: "Fungsi cetak tidak memeriksa msg.sender. Apa akibatnya?",
              options: [
                "Siapa pun bisa mencetak token sebanyak yang ia mau",
                "Tidak ada akibat karena token hanya angka",
                "Hanya pemilik yang tetap bisa memanggilnya",
                "Kontraknya tidak bisa di-deploy sama sekali"
              ],
              answer: 0,
              explain: "Fungsi public bisa dipanggil siapa pun; tanpa pemeriksaan izin, pasokan bisa digelembungkan."
            },
            {
              q: "Kenapa untuk token sungguhan sebaiknya memakai OpenZeppelin?",
              options: [
                "Kodenya sudah diaudit dan dipakai ribuan proyek",
                "Token OpenZeppelin tidak membutuhkan gas",
                "Hanya token OpenZeppelin yang bisa di-deploy",
                "OpenZeppelin menjamin harga tokennya naik"
              ],
              answer: 0,
              explain: "Kode yang memegang uang adalah sasaran serangan; pustaka teruji jauh lebih aman."
            }
          ]
        },
      ],
    },
  ],
};
