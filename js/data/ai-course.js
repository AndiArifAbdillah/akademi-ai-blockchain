/* ============================================================
   MATERI KURSUS: KECERDASAN BUATAN (AI)
   Disusun dari dasar hingga mahir, bahasa Indonesia sederhana.
   ============================================================ */

const AI_COURSE = {
  id: "ai",
  title: "Kecerdasan Buatan (AI)",
  emoji: "🤖",
  color: "#6366f1",
  tagline: "Pahami cara mesin belajar, berpikir, dan membantu manusia.",
  description:
    "Jalur ini membawamu dari pertanyaan paling dasar 'Apa itu AI?' sampai mampu memahami cara kerja ChatGPT, membuat prompt yang baik, dan merancang aplikasi AI sederhana.",
  modules: [
    /* ---------------- MODUL 1: MULAI DARI NOL ---------------- */
    {
      id: "ai-dasar",
      level: "Dasar",
      title: "Mulai dari Nol",
      summary: "Sebelum AI: pahami data, pola, peluang sederhana, dan apa itu algoritma.",
      lessons: [
        {
          id: "ai-nol-1",
          title: "Apa itu Data & Pola?",
          duration: "7 menit",
          content: `
<p>Sebelum belajar AI, kita mulai dari dua kata paling dasar: <b>data</b> dan <b>pola</b>. Kalau paham ini, semua materi AI akan terasa jauh lebih mudah.</p>

<div data-diagram="flow" data-steps="Data (fakta)|Temukan Pola|Menebak hal baru" data-caption="Inti cara kerja AI"></div>


<h3>Data = kumpulan fakta</h3>
<p><b>Data</b> hanyalah kumpulan fakta atau angka. Kamu sudah bertemu data setiap hari:</p>
<ul>
  <li>Daftar nilai ulanganmu: 80, 75, 90, 85</li>
  <li>Suhu tiap hari minggu ini</li>
  <li>Daftar belanja & harganya</li>
</ul>

<h3>Pola = keteraturan yang berulang</h3>
<p><b>Pola</b> adalah sesuatu yang <b>berulang</b> atau bisa ditebak. Contoh:</p>
<ul>
  <li>Setiap pagi jam 7 jalanan macet.</li>
  <li>Harga tiket naik menjelang Lebaran.</li>
  <li>Kucing biasanya punya kumis & telinga runcing.</li>
</ul>

<div class="callout">
<b>Inilah inti AI:</b> AI <b>menemukan pola dari data</b>, lalu memakai pola itu untuk <b>menebak</b>. Persis seperti kamu: setelah melihat 100 foto kucing, otakmu menangkap "pola kucing", sehingga bisa mengenali kucing baru yang belum pernah kamu lihat.
</div>

<div class="callout warn">
<b>Ingat:</b> tanpa data, tidak ada yang bisa dipelajari. Data adalah "bahan mentah" — makin banyak & bagus datanya, makin pandai AI menemukan pola.
</div>
`,
          keyPoints: [
            "Data = kumpulan fakta atau angka (nilai, suhu, harga).",
            "Pola = keteraturan yang berulang & bisa ditebak.",
            "Inti AI: menemukan pola dari data lalu memakainya untuk menebak.",
            "Tanpa data, tidak ada yang bisa dipelajari.",
          ],
          quiz: [
            {
              q: "Apa itu 'pola' dalam konteks ini?",
              options: [
                "Sesuatu yang berulang sehingga bisa ditebak kelanjutannya",
                "Sesuatu yang muncul acak tanpa aturan yang bisa dikenali",
                "Sesuatu yang hanya terjadi satu kali lalu tidak pernah lagi",
                "Sesuatu yang hanya bisa dilihat dengan bantuan komputer",
              ],
              answer: 0,
              explain: "Pola adalah keteraturan berulang — inilah yang dicari AI dari data.",
            },
            {
              q: "Apa yang menjadi 'bahan mentah' bagi AI untuk belajar?",
              options: ["Listrik", "Data", "Internet cepat", "Layar besar"],
              answer: 1,
              explain: "AI belajar dari data; tanpa data tak ada yang bisa dipelajari.",
            },
          ],
        },
        {
          id: "ai-nol-2",
          title: "Peluang & Statistik Sederhana",
          duration: "8 menit",
          content: `
<p>Rahasia kecil tentang AI: ia jarang benar-benar "yakin 100%". AI bekerja dengan <b>peluang</b> (kemungkinan). Mari pahami dengan angka sederhana.</p>

<h3>Peluang = seberapa mungkin</h3>
<p><b>Peluang</b> mengukur seberapa besar kemungkinan sesuatu terjadi, dari <b>0%</b> (mustahil) sampai <b>100%</b> (pasti).</p>

<h4>Contoh paling sederhana: melempar koin</h4>
<p>Sebuah koin punya <b>2 sisi</b>: sisi <b>angka</b> dan sisi <b>gambar</b>. Kalau dilempar, hasilnya hanya bisa salah satu dari <b>2 kemungkinan</b> itu. Karena kedua sisi <b>sama-sama mungkin</b> (tidak ada yang lebih berat atau lebih "disukai"), peluangnya terbagi rata.</p>

<div class="callout">
<b>Rumus peluang:</b><br>
Peluang = <b>hasil yang diinginkan ÷ semua hasil yang mungkin</b>
<br><br>Untuk "gambar":
<ul>
  <li>Hasil yang diinginkan = <b>1</b> (ada 1 sisi gambar)</li>
  <li>Semua hasil yang mungkin = <b>2</b> (angka &amp; gambar)</li>
</ul>
Peluang = <b>1 ÷ 2 = 0,5 = 50%</b>. Dari situlah angka 50% berasal.
</div>

<h4>Contoh lain dengan rumus yang sama</h4>
<table class="tbl">
  <tr><th>Kasus</th><th>Hitungan</th><th>Peluang</th></tr>
  <tr><td>Dadu muncul angka 3</td><td>1 ÷ 6</td><td>≈ 17%</td></tr>
  <tr><td>Dadu muncul angka genap (2, 4, 6)</td><td>3 ÷ 6</td><td>50%</td></tr>
  <tr><td>Namamu terpilih dari 20 siswa</td><td>1 ÷ 20</td><td>5%</td></tr>
  <tr><td>Hujan saat langit mendung tebal</td><td>(perkiraan ahli)</td><td>≈ 80%</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Kesalahpahaman paling umum:</b> 50% <b>BUKAN</b> berarti pasti bergantian atau pasti separuh-separuh.
<br><br>Kalau kamu melempar koin <b>10 kali</b>, hasilnya belum tentu tepat 5 gambar + 5 angka. Bisa 7-3, bisa 3-7 — dan itu <b>normal</b>. 50% artinya: kalau dilempar <b>sangat banyak</b> kali, perbandingannya akan <b>mendekati</b> setengah-setengah.
</div>

<h3>Coba sendiri — buktikan dengan simulasi 👇</h3>
<div data-demo="js-playground">// Simulasi lempar koin - lihat sendiri apa arti "50%"
function lempar(berapaKali) {
  let gambar = 0;
  let i = 0;
  while (i !== berapaKali) {
    if (Math.random() > 0.5) { gambar = gambar + 1; }
    i = i + 1;
  }
  const persen = (gambar / berapaKali) * 100;
  console.log(berapaKali + " lemparan  ->  gambar " + gambar + " kali (" + persen.toFixed(1) + "%)");
}

console.log("Peluang gambar = 50%. Tapi lihat hasil nyatanya:");
lempar(10);
lempar(100);
lempar(1000);
lempar(10000);

console.log("-----");
console.log("Makin banyak lemparan, makin mendekati 50%.");
console.log("Lemparan sedikit bisa meleset jauh - itu WAJAR.");
console.log("Jalankan berulang kali - hasilnya berbeda-beda tiap kali.");</div>

<div class="callout warn">
<b>Koin tidak punya ingatan.</b> Kalau sudah muncul gambar 5 kali berturut-turut, peluang lemparan ke-6 <b>tetap 50%</b> — bukan "sudah waktunya angka". Keliru berpikir begini punya nama: <b>gambler's fallacy</b>. Ingat baik-baik, karena ini akan sangat berguna saat kamu menilai saham atau crypto nanti.
</div>

<div class="callout">
<b>Kaitannya ke AI:</b> saat AI berkata <i>"90% ini foto kucing"</i>, artinya ia <b>cukup yakin</b> tapi tidak mutlak. Angka itu disebut skor kepercayaan. Memahami ini membuatmu tidak menelan mentah-mentah jawaban AI.
</div>

<h3>Rata-rata (mean)</h3>
<p>Rata-rata = <b>jumlahkan semua, lalu bagi jumlah datanya</b>. Contoh nilai 80, 90, 100:<br>
(80 + 90 + 100) ÷ 3 = <b>90</b>. Rata-rata membantu meringkas banyak angka jadi satu.</p>

<h3>Persentase (%)</h3>
<p><b>Persen artinya "dari seratus".</b> Simbolnya <b>%</b>.</p>

<div class="callout">
<b>Cara membayangkannya:</b> apa pun yang kamu bicarakan, anggap <b>dipotong jadi 100 bagian sama besar</b>. Persen memberitahu <b>berapa bagian</b> yang sedang dibicarakan.
<br><br>🍕 <b>Analogi pizza:</b> satu pizza dipotong jadi <b>100</b> potong kecil. Kalau kamu makan <b>25</b> potong, berarti kamu makan <b>25%</b> pizza itu.
</div>

<h4>Bagaimana kalau totalnya bukan 100?</h4>
<p>Ini yang paling sering membingungkan. Jawabannya: kita <b>ubah dulu</b> seolah-olah totalnya 100.</p>

<div class="callout">
<b>Rumusnya:</b> (bagian ÷ total) × 100
</div>

<p><b>Contoh:</b> di kelas ada <b>20</b> siswa, <b>5</b> di antaranya laki-laki. Berapa persen laki-laki?</p>
<pre class="code">Langkah 1 : bagian ÷ total   →  5 ÷ 20 = 0,25
Langkah 2 : dikali 100       →  0,25 × 100 = 25
Jawaban   : 25%</pre>
<p>Artinya: <i>"seandainya kelas itu berisi 100 anak, kira-kira 25 anak akan laki-laki."</i></p>

<h4>Angka persen yang sering dipakai</h4>
<table class="tbl">
  <tr><th>Persen</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>100%</b></td><td>Semuanya / utuh</td><td>Semua jawaban benar</td></tr>
  <tr><td><b>75%</b></td><td>Tiga perempat</td><td>3 dari 4 bagian</td></tr>
  <tr><td><b>50%</b></td><td>Setengah</td><td>Peluang koin muncul gambar</td></tr>
  <tr><td><b>25%</b></td><td>Seperempat</td><td>1 dari 4 bagian</td></tr>
  <tr><td><b>10%</b></td><td>Sepersepuluh</td><td>1 dari 10 bagian</td></tr>
  <tr><td><b>0%</b></td><td>Tidak ada sama sekali</td><td>Tidak pernah terjadi</td></tr>
</table>

<h3>Coba sendiri — ubah angka jadi persen 👇</h3>
<div data-demo="js-playground">// Persen = "dari seratus".  Rumus: (bagian / total) x 100
const contoh = [
  { bagian: 5,  total: 20, keterangan: "5 siswa laki-laki dari 20 siswa" },
  { bagian: 45, total: 50, keterangan: "45 jawaban benar dari 50 soal" },
  { bagian: 3,  total: 4,  keterangan: "3 potong kue dari 4 potong" }
];

contoh.forEach(function(c){
  const persen = (c.bagian / c.total) * 100;
  console.log(c.keterangan);
  console.log("   (" + c.bagian + " / " + c.total + ") x 100 = " + persen + "%");
});

console.log("-----");
console.log("Artinya: seandainya totalnya 100, sebanyak itulah bagiannya.");
console.log("Ubah angkanya sesukamu, lalu jalankan lagi.");</div>

<h4>Persen &amp; peluang itu sama saja</h4>
<div class="callout">
Keduanya cuma <b>cara menulis yang berbeda</b> untuk hal yang sama:
<ul>
  <li>Peluang <b>0,5</b> = <b>50%</b> (setengah)</li>
  <li>Peluang <b>0,9</b> = <b>90%</b></li>
  <li>Peluang <b>0,25</b> = <b>25%</b></li>
</ul>
Caranya: <b>desimal × 100 = persen</b>, dan sebaliknya <b>persen ÷ 100 = desimal</b>.
</div>

<h4>Kenapa AI banyak memakai persen?</h4>
<p>Karena persen membuat angka <b>mudah dibandingkan</b>, berapa pun jumlah datanya:</p>
<ul>
  <li><b>"Akurasi 90%"</b> → dari 100 tebakan, sekitar <b>90 benar</b> (dan 10 salah).</li>
  <li><b>"90% ini foto kucing"</b> → AI cukup yakin, tapi masih ada <b>10% kemungkinan keliru</b>.</li>
</ul>

<div class="callout warn">
<b>Ingat baik-baik:</b> nanti saat masuk rumus (di modul Matematika), persen <b>harus diubah jadi desimal</b> dulu — <b>10% ditulis 0,10</b>, bukan 10. Ini kesalahan paling sering terjadi.
</div>
`,
          keyPoints: [
            "AI bekerja dengan peluang (0% mustahil sampai 100% pasti), jarang yakin mutlak.",
            "Rumus peluang = hasil yang diinginkan ÷ semua hasil yang mungkin. Koin: 1 ÷ 2 = 50%.",
            "50% bukan berarti pasti separuh-separuh; baru mendekati bila dicoba sangat banyak kali.",
            "Koin tidak punya ingatan — setelah 5 kali gambar, lemparan berikutnya tetap 50% (gambler's fallacy).",
            "Skor kepercayaan AI (mis. '90% kucing') artinya cukup yakin, bukan pasti.",
            "Rata-rata = jumlahkan semua lalu bagi banyaknya data.",
            "Persen artinya 'dari seratus' — bayangkan sesuatu dipotong jadi 100 bagian.",
            "Kalau total bukan 100, pakai rumus: (bagian ÷ total) × 100.",
            "Persen & peluang itu sama: desimal × 100 = persen (0,5 = 50%).",
            "Akurasi 90% berarti dari 100 tebakan, sekitar 90 benar.",
            "Di dalam rumus nanti, persen harus ditulis desimal: 10% = 0,10.",
          ],
          practice: [
            { type: "number", q: "Berapa rata-rata dari nilai 70, 80, dan 90?", answer: 80, tol: 0.5, hint: "Jumlahkan lalu bagi 3.", solution: "(70 + 80 + 90) ÷ 3 = 80." },
            { type: "number", q: "Peluang muncul 'gambar' saat melempar satu koin adil? (dalam %)", answer: 50, tol: 0.5, hint: "Koin punya 2 sisi, gambar ada 1 → 1 ÷ 2.", solution: "1 ÷ 2 = 0,5 = 50%." },
            { type: "number", q: "Dadu punya 6 sisi. Berapa peluang muncul angka 3? (dalam %, 1 desimal)", answer: 16.7, tol: 0.4, unit: "%", hint: "Ada 1 sisi bertuliskan 3, dari total 6 sisi → 1 ÷ 6.", solution: "1 ÷ 6 = 0,167 → 16,7%." },
            { type: "number", q: "Berapa peluang dadu muncul angka GENAP (2, 4, atau 6)? (dalam %)", answer: 50, tol: 0.5, unit: "%", hint: "Ada 3 sisi genap dari total 6 sisi → 3 ÷ 6.", solution: "3 ÷ 6 = 0,5 = 50%." },
            { type: "number", q: "Dari 20 siswa, 5 orang laki-laki. Berapa persen siswa laki-laki?", answer: 25, tol: 0.5, unit: "%", hint: "(bagian ÷ total) × 100 → (5 ÷ 20) × 100.", solution: "5 ÷ 20 = 0,25; 0,25 × 100 = 25%." },
            { type: "number", q: "AI menjawab benar 45 dari 50 soal. Berapa persen akurasinya?", answer: 90, tol: 0.5, unit: "%", hint: "(45 ÷ 50) × 100.", solution: "45 ÷ 50 = 0,9; 0,9 × 100 = 90%." },
            { type: "number", q: "Peluang 0,25 sama dengan berapa persen?", answer: 25, tol: 0.5, unit: "%", hint: "Desimal × 100 = persen.", solution: "0,25 × 100 = 25%." },
          ],
          quiz: [
            {
              q: "AI berkata '80% ini anjing'. Apa artinya?",
              options: [
                "Cukup yakin ini anjing, tetapi masih ada kemungkinan keliru",
                "Pasti anjing, karena angkanya sudah di atas setengah",
                "Ada 80 anjing di dalam gambar yang sedang diperiksa",
                "Model sudah benar 80 kali dari seluruh percobaannya",
              ],
              answer: 0,
              explain: "Skor 80% = tingkat keyakinan, bukan kepastian mutlak.",
            },
            {
              q: "Rata-rata dari 10 dan 20 adalah?",
              options: ["10", "15", "20", "30"],
              answer: 1,
              explain: "(10 + 20) ÷ 2 = 15.",
            },
            {
              q: "Dari mana angka 50% pada lemparan koin berasal?",
              options: [
                "1 sisi gambar dibagi 2 sisi total, yaitu 1 ÷ 2 = 0,5",
                "Rata-rata hasil 100 lemparan koin yang pernah dicatat",
                "Setengah dari berat koin yang dipakai saat melempar",
                "Hasil pengukuran para ahli statistik di laboratorium",
              ],
              answer: 0,
              explain:
                "Peluang = hasil yang diinginkan ÷ semua hasil yang mungkin = 1 ÷ 2 = 50%.",
            },
            {
              q: "Sebuah koin sudah muncul 'gambar' 5 kali berturut-turut. Berapa peluang lemparan ke-6 muncul gambar?",
              options: [
                "Tetap 50%, karena koin tidak menyimpan ingatan apa pun",
                "Lebih kecil dari 50%, karena giliran angka sudah terlalu lama",
                "Lebih besar dari 50%, karena polanya sedang berpihak pada gambar",
                "Tidak bisa dihitung sebelum tahu hasil lemparan sebelumnya",
              ],
              answer: 0,
              explain:
                "Setiap lemparan berdiri sendiri. Menyangka hasil lalu memengaruhi hasil berikutnya disebut gambler's fallacy.",
            },
            {
              q: "Apa arti kata 'persen'?",
              options: [
                "Dari seratus — bayangkan sesuatu dipotong menjadi 100 bagian",
                "Dari sepuluh — bayangkan sesuatu dipotong menjadi 10 bagian",
                "Dari seribu — bayangkan sesuatu dipotong menjadi 1.000 bagian",
                "Sebutan lain untuk bilangan pecahan yang memakai koma",
              ],
              answer: 0,
              explain:
                "Persen berarti 'dari seratus'; 25% = 25 bagian dari 100 bagian.",
            },
            {
              q: "Dari 50 soal, AI menjawab benar 45. Berapa persen akurasinya?",
              options: ["45%", "90%", "50%", "95%"],
              answer: 1,
              explain: "(45 ÷ 50) × 100 = 90%.",
            },
          ],
        },
        {
          id: "ai-nol-3",
          title: "Apa itu Algoritma?",
          duration: "7 menit",
          content: `
<p>Kata "algoritma" terdengar rumit, padahal kamu memakainya setiap hari.</p>

<div data-diagram="pipeline" data-stages="Masukan::bahan yang tersedia|Langkah berurutan::dikerjakan satu per satu|Percabangan::jika begini, maka begitu|Keluaran::hasil yang sama tiap kali" data-caption="Algoritma itu resep — masukan yang sama selalu memberi hasil yang sama"></div>


<div class="callout">
<b>Algoritma</b> = <b>urutan langkah</b> untuk menyelesaikan suatu tugas. Titik.
</div>

<h3>Algoritma di sekitarmu</h3>
<ul>
  <li><b>Resep masak</b> — langkah 1: rebus air, langkah 2: masukkan mi, langkah 3: tunggu 3 menit.</li>
  <li><b>Petunjuk arah</b> — belok kiri, lurus 100m, belok kanan.</li>
  <li><b>Membuat teh</b> — didihkan air → celup teh → tuang → aduk.</li>
</ul>
<p>Komputer bekerja dengan mengikuti algoritma — urutan langkah yang sangat jelas.</p>

<h3>Hubungannya dengan AI</h3>
<table class="tbl">
  <tr><th>Program biasa</th><th>AI</th></tr>
  <tr><td>Algoritma & aturannya <b>ditulis manusia</b></td><td>Algoritma yang <b>menemukan aturannya sendiri</b> dari data</td></tr>
</table>
`,
          keyPoints: [
            "Algoritma = urutan langkah untuk menyelesaikan tugas (resep, petunjuk arah).",
            "Komputer bekerja dengan mengikuti algoritma yang jelas.",
            "Program biasa: aturan ditulis manusia. AI: menemukan aturannya sendiri dari data.",
          ],
          quiz: [
            {
              q: "Apa itu algoritma?",
              options: [
                "Urutan langkah yang pasti untuk menyelesaikan sebuah tugas",
                "Program komputer yang mampu memperbaiki dirinya sendiri",
                "Rumus matematika yang hanya dipahami ahli pemrograman",
                "Perangkat keras khusus untuk menjalankan perhitungan berat",
              ],
              answer: 0,
              explain: "Algoritma adalah langkah-langkah jelas untuk menyelesaikan sesuatu.",
            },
            {
              q: "Beda utama AI dari program biasa?",
              options: [
                "AI menemukan aturannya sendiri dari data, bukan ditulis manusia",
                "AI menjalankan aturan yang sama persis, hanya jauh lebih cepat",
                "AI bisa bekerja tanpa perlu diberi contoh data sama sekali",
                "AI menulis ulang kode programnya setiap kali dijalankan",
              ],
              answer: 0,
              explain: "AI belajar aturan dari data; program biasa mengikuti aturan tetap buatan manusia.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 2: DASAR-DASAR AI ---------------- */
    {
      id: "ai-pemula",
      level: "Pemula",
      title: "Dasar-Dasar AI",
      summary: "Apa itu AI, sejarah & jenisnya, peran data, dan bagaimana mesin bisa 'belajar'.",
      lessons: [
        {
          id: "ai-p-1",
          title: "Apa itu Kecerdasan Buatan?",
          duration: "8 menit",
          content: `
<p><b>Kecerdasan Buatan</b> (Artificial Intelligence / AI) adalah kemampuan komputer untuk melakukan hal-hal yang biasanya membutuhkan kecerdasan manusia, seperti mengenali wajah, memahami bahasa, atau mengambil keputusan.</p>

<div class="callout">
<b>Analogi sederhana:</b> Bayangkan kamu mengajari adik kecil membedakan kucing dan anjing dengan menunjukkan banyak foto. Lama-lama ia bisa menebak sendiri. AI belajar dengan cara mirip — diberi banyak contoh, lalu menemukan polanya.
</div>

<h3>AI vs program biasa</h3>
<p>Program biasa (kalkulator, misalnya) hanya mengikuti aturan yang sudah ditulis manusia secara pasti: "jika tombol +, jumlahkan dua angka". AI berbeda: ia <b>belajar pola dari data</b>, bukan hanya mengikuti aturan kaku. Karena itu AI bisa menangani hal yang sulit dituliskan dalam aturan, seperti "apakah ini foto kucing?".</p>

<div data-diagram="ai-vs-program"></div>

<h3>Contoh AI di sekitar kita</h3>
<ul>
  <li>Rekomendasi video di YouTube / TikTok</li>
  <li>Asisten suara (Google Assistant, Siri)</li>
  <li>Filter spam di email</li>
  <li>Penerjemah bahasa otomatis</li>
  <li>ChatGPT dan chatbot lain</li>
</ul>
`,
          keyPoints: [
            "AI = kemampuan komputer meniru kecerdasan manusia.",
            "AI belajar pola dari data, bukan hanya mengikuti aturan kaku.",
            "AI sudah ada di banyak aplikasi sehari-hari.",
          ],
          quiz: [
            {
              q: "Apa perbedaan utama AI dengan program biasa?",
              options: [
                "AI menyimpulkan sendiri aturannya dari contoh-contoh data yang diberikan",
                "AI menjalankan aturan yang sama persis, hanya saja jauh lebih cepat",
                "AI mampu bekerja tanpa perlu diberi data contoh sama sekali",
                "AI menulis ulang kode programnya sendiri setiap kali dijalankan",
              ],
              answer: 0,
              explain:
                "Inti AI adalah belajar dari data untuk menemukan pola, sehingga bisa menangani masalah yang sulit dibuat aturannya.",
            },
            {
              q: "Manakah contoh penggunaan AI sehari-hari?",
              options: [
                "Rekomendasi video yang berubah mengikuti apa yang sering kamu tonton",
                "Alarm HP yang berbunyi tepat pada jam yang sudah kamu tetapkan",
                "Kalkulator yang menjumlahkan angka mengikuti rumus yang baku",
                "Lampu yang menyala otomatis saat sensor mendeteksi ada gerakan",
              ],
              answer: 0,
              explain:
                "Sistem rekomendasi mempelajari kebiasaanmu lalu menebak video yang kamu suka — itu pekerjaan AI.",
            },
          ],
        },
        {
          id: "ai-p-2",
          title: "Sejarah Singkat & Jenis AI",
          duration: "9 menit",
          content: `
<h3>Perjalanan singkat AI</h3>
<ul>
  <li><b>1950</b> — Alan Turing mengajukan "Turing Test": bisakah mesin meniru percakapan manusia?</li>
  <li><b>1956</b> — Istilah "Artificial Intelligence" lahir di konferensi Dartmouth.</li>
  <li><b>1997</b> — Komputer Deep Blue mengalahkan juara catur dunia, Garry Kasparov.</li>
  <li><b>2012</b> — "Deep learning" meledak, AI jadi sangat pandai mengenali gambar.</li>
  <li><b>2022–sekarang</b> — Era AI generatif: ChatGPT, gambar dari teks, dll.</li>
</ul>

<div data-diagram="timeline" data-events="1950::Uji Turing diusulkan|1956::Istilah 'AI' lahir|1997::Deep Blue kalahkan juara catur|2012::Deep learning meledak|2022::ChatGPT dibuka ke publik" data-caption="Tujuh dekade AI — perhatikan jeda panjang di antara lompatannya"></div>

<h3>Tiga tingkatan AI</h3>
<table class="tbl">
  <tr><th>Jenis</th><th>Penjelasan</th><th>Status</th></tr>
  <tr><td><b>Narrow AI</b></td><td>Pintar di satu tugas saja (mis. main catur, filter spam)</td><td>Sudah ada</td></tr>
  <tr><td><b>General AI (AGI)</b></td><td>Secerdas manusia di banyak hal sekaligus</td><td>Belum ada</td></tr>
  <tr><td><b>Super AI</b></td><td>Melebihi kecerdasan manusia</td><td>Masih teori</td></tr>
</table>

<div class="callout">
<b>Penting:</b> Semua AI yang kamu pakai hari ini (termasuk ChatGPT) adalah <b>Narrow AI</b> — hebat di bidangnya, tapi tidak benar-benar "sadar" atau berpikir seperti manusia.
</div>
`,
          keyPoints: [
            "AI bukan hal baru — sudah diteliti sejak 1950-an.",
            "Narrow AI = pintar di satu tugas (yang ada sekarang).",
            "AGI dan Super AI masih menjadi cita-cita / teori.",
          ],
          quiz: [
            {
              q: "AI seperti ChatGPT termasuk jenis apa?",
              options: ["Super AI", "General AI (AGI)", "Narrow AI", "Robot AI"],
              answer: 2,
              explain:
                "Sehebat apa pun, AI saat ini masih Narrow AI — fokus pada jenis tugas tertentu.",
            },
            {
              q: "Apa itu Turing Test?",
              options: [
                "Uji apakah manusia masih bisa membedakan jawaban mesin dari jawaban manusia",
                "Uji seberapa cepat sebuah mesin menyelesaikan perhitungan yang rumit",
                "Uji apakah mesin mampu menjawab seluruh pertanyaan dengan benar",
                "Uji apakah sebuah mesin sudah sadar akan keberadaan dirinya sendiri",
              ],
              answer: 0,
              explain:
                "Turing Test menguji apakah respons mesin tak bisa dibedakan dari manusia.",
            },
          ],
        },
        {
          id: "ai-p-3",
          title: "Data: Bahan Bakar AI",
          duration: "8 menit",
          content: `
<p>AI tidak bisa belajar tanpa <b>data</b>. Data adalah contoh-contoh yang dipelajari AI agar bisa menemukan pola.</p>

<div data-diagram="pipeline" data-stages="Data mentah::berantakan, banyak kosong|Dibersihkan::isi yang kosong, buang ganda|Dibagi::latih 80% / uji 20%|Melatih model::belajar polanya" data-caption="Perjalanan data sebelum jadi model — 80% pekerjaan AI ada di dua kotak pertama"></div>


<h3>Jenis data</h3>
<ul>
  <li><b>Teks</b> — artikel, chat, buku (dipakai oleh ChatGPT)</li>
  <li><b>Gambar</b> — foto kucing, rontgen, wajah</li>
  <li><b>Suara</b> — rekaman ucapan, musik</li>
  <li><b>Angka/tabel</b> — harga rumah, data penjualan</li>
</ul>

<div class="callout warn">
<b>Prinsip emas:</b> "Garbage in, garbage out." Kalau datanya jelek atau bias, hasil AI juga jelek atau bias. Kualitas data sama pentingnya dengan jumlahnya.
</div>

<h3>Label: kunci belajar</h3>
<p>Sering kali data perlu diberi <b>label</b> (jawaban benar). Contoh: 10.000 foto yang sudah ditandai "kucing" atau "anjing". Dari label inilah AI tahu mana yang benar saat berlatih. Proses memberi label sering dilakukan manusia dan memakan waktu.</p>
`,
          keyPoints: [
            "Data adalah bahan bakar utama AI.",
            "Kualitas data menentukan kualitas hasil (garbage in, garbage out).",
            "Label = jawaban benar yang dipakai AI untuk belajar.",
          ],
          quiz: [
            {
              q: "Apa arti 'garbage in, garbage out'?",
              options: [
                "Model yang dilatih dengan data buruk akan menghasilkan keluaran yang buruk pula",
                "Model perlu dibersihkan berkala agar data lama tidak menumpuk di dalamnya",
                "Data yang sudah dipakai melatih sebaiknya langsung dihapus setelah selesai",
                "Model yang besar menghasilkan lebih banyak keluaran yang tidak terpakai",
              ],
              answer: 0,
              explain:
                "Jika data latih buruk/bias, prediksi AI ikut buruk/bias.",
            },
            {
              q: "Apa fungsi 'label' pada data?",
              options: [
                "Memberi jawaban yang benar sehingga model tahu pola apa yang harus ditiru",
                "Menandai baris data yang rusak supaya bisa dibuang lebih dulu",
                "Mengelompokkan data ke berkas-berkas terpisah sesuai jenisnya",
                "Menyimpan catatan tentang siapa yang mengumpulkan data tersebut",
              ],
              answer: 0,
              explain:
                "Label memberitahu AI hasil yang benar selama proses latihan.",
            },
          ],
        },
        {
          id: "ai-p-4",
          title: "Bagaimana AI 'Belajar'?",
          duration: "10 menit",
          content: `
<p>Belajar pada AI disebut <b>training</b> (pelatihan). Ibarat siswa mengerjakan ribuan soal latihan sampai mahir.</p>

<div data-diagram="flow" data-steps="Tebak|Bandingkan jawaban|Hitung kesalahan|Perbaiki bobot" data-caption="Siklus belajar AI (diulang jutaan kali)"></div>


<h3>Siklus belajar AI (sederhana)</h3>
<ol>
  <li><b>Tebak</b> — AI menebak jawaban dari sebuah contoh.</li>
  <li><b>Bandingkan</b> — Tebakan dibandingkan dengan jawaban benar (label).</li>
  <li><b>Hitung kesalahan</b> — Seberapa jauh meleset? Ini disebut <i>error/loss</i>.</li>
  <li><b>Perbaiki</b> — AI sedikit mengubah "pengaturannya" agar lain kali lebih tepat.</li>
  <li>Ulangi jutaan kali sampai kesalahannya kecil.</li>
</ol>

<div class="callout">
<b>Analogi:</b> Seperti memanah. Tembakan pertama meleset ke kiri, kamu geser sedikit ke kanan. Meleset lagi, koreksi lagi. Lama-lama tepat sasaran. AI "menggeser" angka-angka di dalamnya (disebut <b>parameter/bobot</b>).
</div>

<div data-demo="learning-loop"></div>

<h3>Training vs Inference</h3>
<ul>
  <li><b>Training</b> — proses belajar (lambat, mahal, sekali di awal).</li>
  <li><b>Inference</b> — memakai model yang sudah jadi untuk menjawab (cepat). Saat kamu bertanya ke ChatGPT, itu inference.</li>
</ul>
`,
          keyPoints: [
            "Training = AI berlatih dari banyak contoh secara berulang.",
            "AI memperbaiki diri dengan mengurangi kesalahan (loss) sedikit demi sedikit.",
            "Inference = memakai model yang sudah dilatih untuk menjawab.",
          ],
          quiz: [
            {
              q: "Apa yang dimaksud 'loss' / error dalam training AI?",
              options: [
                "Ukuran seberapa jauh tebakan model meleset dari jawaban yang sebenarnya",
                "Jumlah data latih yang gagal terbaca selama proses pelatihan berlangsung",
                "Bagian data yang sengaja disisihkan untuk menguji model di tahap akhir",
                "Penurunan kecepatan model setiap kali ukuran datanya bertambah besar",
              ],
              answer: 0,
              explain:
                "Loss mengukur besar kesalahan; AI berusaha menguranginya tiap iterasi.",
            },
            {
              q: "Saat kamu bertanya ke chatbot yang sudah jadi, itu disebut?",
              options: ["Training", "Inference", "Labeling", "Debugging"],
              answer: 1,
              explain:
                "Inference = menggunakan model terlatih untuk menghasilkan jawaban.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 3: MACHINE LEARNING & NEURAL NETWORK ---------------- */
    {
      id: "ai-menengah",
      level: "Menengah",
      title: "Machine Learning & Neural Network",
      summary: "Tiga gaya belajar mesin, gambaran neural network, NLP & computer vision, serta overfitting.",
      lessons: [
        {
          id: "ai-m-1",
          title: "Tiga Gaya Belajar Mesin",
          duration: "15 menit",
          content: `
<p><b>Machine Learning (ML)</b> adalah cabang AI yang fokus membuat mesin belajar dari data. Ada tiga gaya utama:</p>

<div data-diagram="layers" data-items="Reinforcement (hadiah &amp; hukuman)|Unsupervised (tanpa label)|Supervised (dengan label)" data-caption="Tiga gaya belajar mesin"></div>


<table class="tbl">
  <tr><th>Gaya</th><th>Cara belajar</th><th>Contoh</th></tr>
  <tr><td><b>Supervised</b></td><td>Belajar dari data ber-label (ada jawaban benar)</td><td>Deteksi spam, prediksi harga rumah</td></tr>
  <tr><td><b>Unsupervised</b></td><td>Mencari pola sendiri tanpa label</td><td>Mengelompokkan pelanggan (clustering)</td></tr>
  <tr><td><b>Reinforcement</b></td><td>Belajar dari hadiah & hukuman lewat coba-coba</td><td>AI main game, robot berjalan</td></tr>
</table>

<div class="callout">
<b>Analogi Reinforcement Learning:</b> Seperti melatih anjing. Perilaku benar diberi camilan (reward), perilaku salah tidak. Lama-lama anjing tahu mana yang menguntungkan.
</div>

<h3>Klasifikasi vs Regresi (di supervised)</h3>
<ul>
  <li><b>Klasifikasi</b> — menebak <i>kategori</i> (spam / bukan spam).</li>
  <li><b>Regresi</b> — menebak <i>angka</i> (harga rumah Rp ...).</li>
</ul>

<h3>Clustering, Reduksi Dimensi, Anomali &amp; Asosiasi (di unsupervised)</h3>
<p>Tanpa label, model tidak menebak "jawaban benar" — ia <b>mencari struktur</b> yang tersembunyi di dalam data. Empat tugas yang paling sering:</p>
<ul>
  <li><b>Clustering</b> — mengelompokkan data yang mirip (pelanggan "hemat", "royal", "musiman").</li>
  <li><b>Reduksi dimensi</b> — meringkas banyak kolom menjadi sedikit (50 kolom data pelanggan → 2 sumbu yang bisa digambar).</li>
  <li><b>Deteksi anomali</b> — menemukan yang janggal dibanding kebanyakan (transaksi kartu pukul 3 pagi bernominal besar).</li>
  <li><b>Aturan asosiasi</b> — menemukan hal yang sering muncul bersama (yang membeli roti biasanya juga membeli selai).</li>
</ul>
<div class="callout warn">
<b>Tanpa label, tidak ada nilai "benar".</b> Model bisa menemukan 4 kelompok pelanggan, tapi manusialah yang harus menilai: apakah kelompok ke-3 benar-benar "pelanggan musiman", atau hanya kebetulan pola angka? Hasil unsupervised selalu perlu ditafsirkan.
</div>

<h3>Agen, Aksi &amp; Reward (di reinforcement)</h3>
<p>Reinforcement learning tidak diberi data jawaban sama sekali. Ia belajar dengan <b>mencoba sendiri</b>, lalu melihat akibatnya:</p>

<div data-diagram="cycle" data-steps="Agen melihat keadaan|Agen memilih aksi|Lingkungan berubah|Agen menerima reward" data-center="ulangi ribuan kali" data-caption="Siklus reinforcement learning: coba, lihat akibat, perbaiki"></div>

<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Pada analogi anjing</th><th>Pada AI main game</th></tr>
  <tr><td><b>Agen</b></td><td>Yang belajar dan bertindak</td><td>Anjing</td><td>Program pemain</td></tr>
  <tr><td><b>Lingkungan</b></td><td>Dunia tempat agen bertindak</td><td>Rumah &amp; pemiliknya</td><td>Game-nya</td></tr>
  <tr><td><b>Keadaan</b> (state)</td><td>Situasi saat ini</td><td>Pemilik memegang bola</td><td>Posisi di layar</td></tr>
  <tr><td><b>Aksi</b></td><td>Pilihan yang diambil agen</td><td>Duduk, lari, menggonggong</td><td>Lompat, belok, tembak</td></tr>
  <tr><td><b>Reward</b></td><td>Angka hadiah atau hukuman</td><td>Camilan</td><td>Skor naik atau nyawa berkurang</td></tr>
  <tr><td><b>Kebijakan</b> (policy)</td><td>Aturan "di keadaan ini, lakukan itu" yang terus diperbaiki</td><td>Kebiasaan yang terbentuk</td><td>Strategi bermain</td></tr>
</table>

<p>Dua tantangan khas yang tidak ada di supervised maupun unsupervised:</p>
<ul>
  <li><b>Eksplorasi vs eksploitasi</b> — terus memakai cara yang sudah terbukti, atau mencoba cara baru yang mungkin lebih baik? Seperti memilih makan di warung langganan atau mencoba warung baru.</li>
  <li><b>Reward yang tertunda</b> — langkah yang bagus kadang baru terbayar jauh kemudian. Di catur, mengorbankan bidak bisa berujung menang 30 langkah lagi, sehingga agen harus belajar menghubungkan aksi awal dengan hasil akhir.</li>
</ul>

<div class="callout warn">
<b>⚠️ Agen mengejar reward, bukan niatmu.</b> Dalam sebuah percobaan terkenal, agen balap perahu diberi poin untuk menabrak target di lintasan. Ia menemukan cara berputar-putar di satu tempat mengumpulkan poin tanpa pernah menyelesaikan lomba. Reward yang dirancang keliru akan "dicurangi" — masalah ini disebut <i>reward hacking</i>.
</div>

<p>Contoh penerapan: AI pemain Go dan catur, robot yang belajar berjalan, pengaturan pendingin pusat data, dan — yang paling kamu kenal — <b>chatbot seperti ChatGPT dan Claude</b>, yang diperhalus dengan umpan balik manusia (RLHF). Cara kerja RL — dari dilema eksplorasi sampai robot yang belajar mencari jalan — dibahas mendalam di modul <b>Reinforcement Learning</b>, lalu RLHF di modul AI Generatif &amp; LLM.</p>

<h3>Ringkasan: tiga gaya, tiga pertanyaan</h3>
<table class="tbl">
  <tr><th>Gaya</th><th>Pertanyaan yang dijawab</th><th>Jenis tugas</th></tr>
  <tr><td><b>Supervised</b></td><td>"Apa jawabannya untuk data baru ini?"</td><td>Klasifikasi, regresi</td></tr>
  <tr><td><b>Unsupervised</b></td><td>"Struktur apa yang tersembunyi di data ini?"</td><td>Clustering, reduksi dimensi, anomali, asosiasi</td></tr>
  <tr><td><b>Reinforcement</b></td><td>"Aksi apa yang menghasilkan reward terbesar dalam jangka panjang?"</td><td>Belajar kebijakan lewat coba-coba</td></tr>
</table>
`,
          keyPoints: [
            "Supervised: belajar dari data ber-label.",
            "Unsupervised: menemukan pola tanpa label.",
            "Reinforcement: belajar dari reward & punishment.",
            "Klasifikasi menebak kategori; regresi menebak angka.",
            "Unsupervised mencari struktur: clustering, reduksi dimensi, deteksi anomali, dan aturan asosiasi — hasilnya perlu ditafsirkan manusia.",
            "Reinforcement: agen melihat keadaan, memilih aksi, menerima reward, lalu memperbaiki kebijakannya.",
            "Tantangan khas RL: eksplorasi vs eksploitasi, reward yang tertunda, dan reward hacking.",
          ],
          practice: [
            { type: "choice", q: "Mengelompokkan pelanggan jadi beberapa segmen TANPA label yang sudah ada termasuk?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"], answer: 1, hint: "Adakah jawaban benar/label yang diberikan sejak awal?", solution: "Tanpa label & mencari pola sendiri = unsupervised (clustering)." },
            { type: "choice", q: "Robot belajar berjalan lewat coba-coba dengan hadiah & hukuman termasuk?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"], answer: 2, hint: "Belajar dari reward & punishment atas aksinya.", solution: "Belajar dari hadiah/hukuman = reinforcement learning." },
            { type: "choice", q: "Bank ingin menemukan transaksi kartu yang janggal, tapi tidak punya data berlabel penipuan. Tugas apa yang cocok?", options: ["Klasifikasi", "Deteksi anomali", "Regresi"], answer: 1, hint: "Tidak ada label, yang dicari adalah yang berbeda dari kebanyakan.", solution: "Tanpa label & mencari yang janggal = deteksi anomali (unsupervised)." },
          ],
          quiz: [
            {
              q: "Memprediksi harga rumah (angka) termasuk?",
              options: ["Klasifikasi", "Regresi", "Clustering", "Reinforcement"],
              answer: 1,
              explain: "Menebak nilai angka kontinu = regresi.",
            },
            {
              q: "AI yang belajar main game lewat coba-coba & skor disebut?",
              options: [
                "Supervised learning",
                "Unsupervised learning",
                "Reinforcement learning",
                "Transfer learning",
              ],
              answer: 2,
              explain:
                "Belajar dari reward/punishment hasil aksi = reinforcement learning.",
            },
            {
              q: "Toko online ingin tahu produk apa yang sering dibeli bersamaan, tanpa data berlabel. Tugas apa yang cocok?",
              options: ["Aturan asosiasi", "Reduksi dimensi", "Regresi", "Klasifikasi"],
              answer: 0,
              explain: "Menemukan hal yang sering muncul bersama = aturan asosiasi, salah satu tugas unsupervised.",
            },
            {
              q: "Agen balap perahu terus berputar mengumpulkan poin tanpa pernah menyelesaikan lomba. Apa masalahnya?",
              options: [
                "Reward dirancang keliru sehingga agen mencurangi tujuannya",
                "Agen kekurangan data berlabel sehingga salah menebak arah",
                "Agen terlalu banyak bereksplorasi sehingga lupa strateginya",
                "Lingkungannya terlalu sederhana sehingga agen cepat bosan",
              ],
              answer: 0,
              explain: "Agen mengejar reward, bukan niat perancangnya — masalah ini disebut reward hacking.",
            },
          ],
        },
        {
          id: "ai-m-2",
          title: "Neural Network: Otak Buatan",
          duration: "11 menit",
          content: `
<p><b>Neural network</b> (jaringan saraf tiruan) terinspirasi cara kerja otak. Ia tersusun dari banyak "neuron" buatan yang terhubung berlapis-lapis.</p>

<div data-diagram="pipeline" data-stages="Lapisan input::angka mentah masuk|Lapisan tersembunyi::mencari pola bertingkat|Fungsi aktivasi::menentukan sinyal diteruskan|Lapisan output::jawaban akhir" data-caption="Isyarat mengalir dari kiri ke kanan, satu lapisan pada satu waktu"></div>


<h3>Strukturnya</h3>
<ul>
  <li><b>Input layer</b> — menerima data (mis. piksel gambar).</li>
  <li><b>Hidden layers</b> — lapisan tengah yang mengolah & menemukan pola.</li>
  <li><b>Output layer</b> — memberi hasil (mis. "ini kucing 92%").</li>
</ul>

<div class="callout">
<b>Bagaimana neuron bekerja?</b> Tiap koneksi punya <b>bobot</b> (weight) — seberapa penting sinyal itu. Neuron menjumlahkan sinyal masuk × bobot, lalu memutuskan apakah "menyala" dan meneruskannya. Saat training, bobot inilah yang terus disesuaikan.
</div>

<div data-demo="neural-net"></div>

<h3>Mengapa "Deep" Learning?</h3>
<p><b>Deep learning</b> = neural network dengan <i>banyak</i> hidden layer (dalam). Makin dalam, makin mampu menangkap pola rumit: lapisan awal mengenali garis, lapisan tengah mengenali mata/hidung, lapisan akhir mengenali wajah utuh.</p>
`,
          keyPoints: [
            "Neural network terdiri dari input, hidden, dan output layer.",
            "Bobot (weight) menentukan pentingnya tiap koneksi dan disesuaikan saat training.",
            "Deep learning = neural network dengan banyak lapisan tersembunyi.",
          ],
          quiz: [
            {
              q: "Apa yang disesuaikan neural network selama training?",
              options: ["Warna layar", "Bobot (weights) koneksi", "Nama file", "Ukuran monitor"],
              answer: 1,
              explain:
                "Belajar = menyesuaikan bobot agar prediksi makin akurat.",
            },
            {
              q: "Apa arti 'deep' pada deep learning?",
              options: [
                "Jaringannya punya banyak lapisan tersembunyi yang bertumpuk",
                "Modelnya dilatih memakai data yang jumlahnya sangat besar",
                "Perhitungannya dijalankan jauh di dalam pusat data raksasa",
                "Hasilnya jauh lebih akurat dibanding metode lainnya",
              ],
              answer: 0,
              explain: "'Deep' merujuk pada banyaknya hidden layer.",
            },
          ],
        },
        {
          id: "ai-m-3",
          title: "NLP & Computer Vision",
          duration: "9 menit",
          content: `
<p>Dua bidang AI paling populer:</p>

<div data-diagram="compare3" data-cols="NLP::mengolah bahasa::teks diubah jadi angka|Computer Vision::mengolah gambar::piksel diubah jadi angka|Intinya sama::mencari pola::dari deretan angka" data-caption="Dua bidang berbeda, satu prinsip yang sama"></div>


<h3>NLP (Natural Language Processing)</h3>
<p>Membuat komputer memahami & menghasilkan <b>bahasa manusia</b>. Tantangannya: bahasa penuh ambiguitas dan konteks.</p>
<ul>
  <li>Penerjemah (Google Translate)</li>
  <li>Analisis sentimen (apakah ulasan positif/negatif)</li>
  <li>Chatbot & ChatGPT</li>
</ul>

<h3>Computer Vision</h3>
<p>Membuat komputer "melihat" & memahami <b>gambar/video</b>.</p>
<ul>
  <li>Pengenalan wajah (face unlock HP)</li>
  <li>Mobil otonom mengenali jalan & pejalan kaki</li>
  <li>Diagnosis medis dari foto rontgen</li>
</ul>

<div class="callout">
<b>Tahukah kamu?</b> Komputer tidak melihat "kucing". Ia melihat deretan angka (nilai piksel) lalu menemukan pola angka yang biasanya muncul pada kucing. Semua input AI pada akhirnya menjadi angka.
</div>

<div data-demo="pixel-grid"></div>
`,
          keyPoints: [
            "NLP = AI untuk bahasa (terjemah, chatbot, analisis sentimen).",
            "Computer Vision = AI untuk gambar/video.",
            "Semua data (teks, gambar, suara) diubah jadi angka untuk diproses.",
          ],
          quiz: [
            {
              q: "Menganalisis apakah ulasan produk positif/negatif termasuk?",
              options: ["Computer Vision", "NLP", "Robotika", "Clustering"],
              answer: 1,
              explain: "Memahami makna teks = tugas NLP.",
            },
            {
              q: "Bagaimana komputer 'melihat' gambar?",
              options: [
                "Sebagai deretan angka yang mewakili nilai tiap pikselnya",
                "Sebagai bentuk dan garis seperti yang dilihat mata manusia",
                "Sebagai berkas gambar utuh yang dibaca sekaligus apa adanya",
                "Sebagai kumpulan kata yang menjelaskan isi gambar itu",
              ],
              answer: 0,
              explain: "Gambar direpresentasikan sebagai angka piksel.",
            },
          ],
        },
        {
          id: "ai-m-4",
          title: "Overfitting & Cara Menguji Model",
          duration: "9 menit",
          content: `
<p>Model AI yang bagus harus pandai pada data <b>baru</b>, bukan hanya menghafal data latihan.</p>

<div data-diagram="vs" data-left="UNDERFITTING::Model terlalu sederhana::Salah di data latih &amp; baru" data-right="OVERFITTING::Model menghafal::Bagus di latih, buruk di baru" data-caption="Dua penyakit model"></div>


<h3>Overfitting (terlalu hafal)</h3>
<p><b>Overfitting</b> terjadi saat model "menghafal" data latih sampai ke detail dan keributannya, tapi gagal pada data baru.</p>
<div class="callout warn">
<b>Analogi:</b> Siswa yang menghafal kunci jawaban soal latihan, tapi bingung saat soal ujian sedikit berubah. Ia hafal, bukan paham.
</div>

<h3>Solusinya: pisahkan data</h3>
<ul>
  <li><b>Training set</b> (±70-80%) — untuk belajar.</li>
  <li><b>Test set</b> (±20-30%) — soal "ujian" yang belum pernah dilihat, untuk mengukur kemampuan asli.</li>
</ul>

<h3>Underfitting (terlalu sederhana)</h3>
<p>Kebalikannya: model terlalu sederhana sehingga tidak menangkap pola, salah di data latih maupun data baru. Tujuannya menemukan keseimbangan: cukup pintar tapi tidak menghafal.</p>
`,
          keyPoints: [
            "Overfitting = model menghafal data latih, gagal di data baru.",
            "Underfitting = model terlalu sederhana, gagal menangkap pola.",
            "Pisahkan data jadi training set & test set untuk menguji jujur.",
          ],
          quiz: [
            {
              q: "Model bagus di data latih tapi buruk di data baru disebut?",
              options: ["Underfitting", "Overfitting", "Inference", "Clustering"],
              answer: 1,
              explain:
                "Itu overfitting — model menghafal, bukan memahami pola umum.",
            },
            {
              q: "Untuk apa 'test set'?",
              options: [
                "Menguji model memakai data yang belum pernah ia lihat sebelumnya",
                "Melatih model sekali lagi agar hasilnya menjadi lebih baik",
                "Menyimpan cadangan data bila data latih hilang atau rusak",
                "Mempercepat pelatihan dengan mengurangi jumlah data",
              ],
              answer: 0,
              explain:
                "Test set mengukur kemampuan asli model pada data baru.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 4: FUNDAMENTAL & METRIK AI ---------------- */
    {
      id: "ai-fundamental",
      level: "Fundamental",
      title: "Fundamental & Metrik AI",
      summary: "Cara mengukur kualitas model (akurasi, precision, recall, ROC & AUC), loss & gradient descent, parameter & token, serta bias-variance.",
      lessons: [
        {
          id: "ai-fund-1",
          title: "Mengukur Kualitas AI dari Nol — Confusion Matrix, Precision & Recall",
          duration: "18 menit",
          content: `
<p>Sebuah model AI pendeteksi penyakit dilaporkan punya <b>akurasi 90%</b>. Bagus? Ternyata model yang <b>selalu</b> menjawab "sehat" untuk siapa pun — tanpa berpikir sama sekali — juga bisa mendapat akurasi 90%. Pelajaran ini membongkar kenapa hal itu bisa terjadi, dan angka apa yang sebenarnya perlu dilihat. Semua istilahnya dimulai dari nol.</p>

<h3>Langkah 1 — Kenyataan dan tebakan</h3>
<p>Bayangkan <b>100 orang</b> diperiksa. Kenyataannya: <b>10 orang sakit</b> dan <b>90 orang sehat</b>. Sebuah model AI menebak, lalu menandai <b>17 orang</b> sebagai sakit.</p>
<p>Setiap orang kini punya dua label: <b>kenyataannya</b> (sakit atau sehat) dan <b>tebakan model</b> (sakit atau sehat). Dua kali dua, jadi hanya ada <b>empat kemungkinan</b>:</p>

<table class="tbl">
  <tr><th></th><th>Model bilang <b>sakit</b></th><th>Model bilang <b>sehat</b></th></tr>
  <tr><td><b>Kenyataannya sakit</b> (10)</td><td class="ok-cell"><b>8</b> — tertangkap ✅<br><i>True Positive (TP)</i></td><td class="bad-cell"><b>2</b> — lolos ❌<br><i>False Negative (FN)</i></td></tr>
  <tr><td><b>Kenyataannya sehat</b> (90)</td><td class="bad-cell"><b>9</b> — dituduh sakit ❌<br><i>False Positive (FP)</i></td><td class="ok-cell"><b>81</b> — benar sehat ✅<br><i>True Negative (TN)</i></td></tr>
</table>
<p>Tabel empat kotak inilah yang disebut <b>confusion matrix</b> ("matriks kebingungan") — karena ia menunjukkan di mana saja model "bingung". <b>Semua metrik di pelajaran ini dihitung dari empat angka tersebut.</b></p>

<h3>Langkah 2 — Membaca namanya tanpa menghafal</h3>
<div class="callout">
Nama seperti "False Positive" terdengar membingungkan, padahal ada satu kunci sederhana. Baca <b>dari belakang</b>:<br><br>
<b>Kata kedua</b> (Positive / Negative) = <b>apa yang DITEBAK model</b>. Positive berarti model bilang "ya, sakit".<br>
<b>Kata pertama</b> (True / False) = <b>tebakan itu benar atau salah</b>.<br><br>
Jadi <b>False Positive</b> = tebakan "sakit" yang ternyata <b>salah</b> → orang sehat yang dituduh sakit (alarm palsu).<br>
<b>False Negative</b> = tebakan "sehat" yang ternyata <b>salah</b> → orang sakit yang lolos.
</div>

<table class="tbl">
  <tr><th>Istilah</th><th>Model menebak</th><th>Tebakannya</th><th>Bahasa sehari-hari</th></tr>
  <tr><td><b>TP</b></td><td>sakit</td><td class="ok-cell">benar</td><td>Tertangkap</td></tr>
  <tr><td><b>FN</b></td><td>sehat</td><td class="bad-cell">salah</td><td>Lolos / terlewat</td></tr>
  <tr><td><b>FP</b></td><td>sakit</td><td class="bad-cell">salah</td><td>Alarm palsu / dituduh</td></tr>
  <tr><td><b>TN</b></td><td>sehat</td><td class="ok-cell">benar</td><td>Aman, benar</td></tr>
</table>

<h3>Langkah 3 — Akurasi, dan jebakannya</h3>
<p><b>Akurasi</b> = berapa tebakan yang benar dari semua orang = (TP + TN) ÷ semua = (8 + 81) ÷ 100 = <b>89%</b>.</p>
<div class="callout warn">
<b>⚠️ Jebakan akurasi.</b> "Model malas" yang selalu bilang "sehat" mendapat TP = 0 dan TN = 90, jadi akurasinya (0 + 90) ÷ 100 = <b>90%</b> — <b>lebih tinggi</b> dari model yang benar-benar bekerja, padahal tidak menangkap satu pun orang sakit.<br><br>
Ini selalu terjadi ketika satu kelompok jauh lebih besar dari yang lain: penyakit langka, penipuan kartu kredit, cacat produksi, email berbahaya. Di semua kasus itu, akurasi hampir tidak berarti apa-apa.
</div>

<h3>Langkah 4 — Recall: berapa yang berhasil ditangkap?</h3>
<div class="callout">
🎣 <b>Analogi jaring ikan.</b> Di sebuah kolam ada 10 ikan. Kamu menebar jaring. <b>Recall</b> menjawab: <b>dari 10 ikan di kolam, berapa yang masuk jaring?</b><br><br>
<b>Recall = TP ÷ (TP + FN)</b> = 8 ÷ (8 + 2) = <b>80%</b><br><br>
Penyebutnya (TP + FN) adalah <b>semua orang yang benar-benar sakit</b>. Recall hanya peduli pada mereka — sama sekali tidak melihat orang sehat.
</div>
<p><b>Recall penting ketika melewatkan kasus berakibat mahal:</b> penyakit berbahaya, penipuan, barang berbahaya di bandara, tanda-tanda kebakaran. Nama lainnya: <b>TPR</b> (<i>true positive rate</i>), <b>sensitivitas</b> (di dunia medis), atau <i>hit rate</i>. Semuanya <b>angka yang sama</b>.</p>

<h3>Langkah 5 — Precision: berapa tuduhan yang benar?</h3>
<div class="callout">
🎣 Sekarang lihat <b>isi jaringmu</b>. Selain ikan, ikut terangkat sandal, plastik, dan ranting. <b>Precision</b> menjawab: <b>dari semua yang terangkat jaring, berapa yang benar-benar ikan?</b><br><br>
<b>Precision = TP ÷ (TP + FP)</b> = 8 ÷ (8 + 9) = <b>47%</b><br><br>
Penyebutnya (TP + FP) adalah <b>semua orang yang dituduh sakit</b> oleh model. Artinya: dari 17 orang yang dikabari "kamu sakit", lebih dari separuhnya sebenarnya sehat.
</div>
<p><b>Precision penting ketika tuduhan yang salah berakibat mahal:</b> filter spam (email penting jangan terbuang), rekomendasi produk, memblokir akun pengguna, menuduh karyawan curang.</p>

<div class="callout warn">
<b>Recall dan precision sering tertukar.</b> Ingat saja dari sisi mana melihatnya:<br>
<b>Recall</b> berdiri di sisi <b>orang yang sakit</b>: "berapa dari kami yang ketahuan?"<br>
<b>Precision</b> berdiri di sisi <b>model</b>: "berapa dari tuduhanku yang benar?"
</div>

<h3>Coba sendiri dengan 100 orang</h3>

<div data-demo="matriks-kebingungan"></div>

<h3>Langkah 6 — Tarik-menarik yang tidak bisa dihindari</h3>
<p>Model sebenarnya tidak langsung bilang "sakit". Ia memberi <b>skor risiko</b>, lalu skor itu dibandingkan dengan sebuah <b>ambang</b>. Menggeser ambang sama seperti mengganti ukuran jaring:</p>
<table class="tbl">
  <tr><th>Ambang</th><th>Jaring</th><th>Recall</th><th>Precision</th></tr>
  <tr><td>Rendah (galak)</td><td>Lebar — banyak yang terangkat</td><td class="ok-cell">Naik</td><td class="bad-cell">Turun</td></tr>
  <tr><td>Tinggi (hati-hati)</td><td>Sempit — hanya yang pasti</td><td class="bad-cell">Turun</td><td class="ok-cell">Naik</td></tr>
</table>
<p>Tidak ada ambang yang membuat keduanya sempurna, kecuali modelnya memang sempurna. Memilih ambang adalah <b>keputusan manusia</b> tentang kesalahan mana yang lebih mahal — bukan keputusan matematika.</p>

<h3>Langkah 7 — Sisi orang sehat: spesifisitas dan FPR</h3>
<p>Recall dan precision sama-sama berfokus pada kasus "sakit". Untuk melihat nasib orang <b>sehat</b>, ada dua angka lain:</p>
<table class="tbl">
  <tr><th>Metrik</th><th>Rumus</th><th>Contoh</th><th>Pertanyaannya</th></tr>
  <tr><td><b>Spesifisitas</b> (TNR)</td><td>TN ÷ (TN + FP)</td><td>81 ÷ 90 = 90%</td><td>Dari semua yang sehat, berapa yang benar dinyatakan sehat?</td></tr>
  <tr><td><b>FPR</b></td><td>FP ÷ (FP + TN)</td><td>9 ÷ 90 = 10%</td><td>Dari semua yang sehat, berapa yang salah dituduh?</td></tr>
</table>
<p>Perhatikan: <b>FPR = 1 − spesifisitas</b>. Keduanya akan dipakai di pelajaran berikutnya untuk menggambar kurva ROC.</p>

<h3>Langkah 8 — F1: satu angka untuk keduanya</h3>
<div class="callout">
<b>F1 = 2 × TP ÷ (2 × TP + FP + FN)</b> = 16 ÷ (16 + 9 + 2) = <b>59%</b><br><br>
Kenapa tidak rata-rata biasa saja? Bayangkan model dengan precision 100% tapi recall hanya 1% — ia hanya berani menuduh satu orang dan kebetulan benar. Rata-rata biasanya 50,5%, terdengar lumayan. F1-nya hanya sekitar <b>2%</b>. F1 memakai <b>rata-rata harmonik</b>, yang menghukum keras bila salah satu dari keduanya jelek. <b>Ia hanya tinggi bila precision dan recall sama-sama tinggi.</b>
</div>

<h3>Apa itu rata-rata harmonik?</h3>
<p>Cara termudah memahaminya lewat <b>kecepatan</b>. Kamu pergi ke kampus sejauh 10 km dengan kecepatan <b>60 km/jam</b>, lalu pulang lewat jalan macet dengan kecepatan <b>20 km/jam</b>. Berapa kecepatan rata-ratamu? Jawaban spontan (60 + 20) ÷ 2 = 40 km/jam — dan itu <b>salah</b>:</p>
<table class="tbl">
  <tr><th>Perjalanan</th><th>Jarak</th><th>Kecepatan</th><th>Waktu</th></tr>
  <tr><td>Pergi</td><td>10 km</td><td>60 km/jam</td><td>10 menit</td></tr>
  <tr><td>Pulang</td><td>10 km</td><td>20 km/jam</td><td>30 menit</td></tr>
  <tr><td><b>Total</b></td><td><b>20 km</b></td><td></td><td><b>40 menit</b></td></tr>
</table>
<p>20 km dalam 40 menit = <b>30 km/jam</b>. Angka 30 inilah <b>rata-rata harmonik</b> dari 60 dan 20. Hasilnya lebih kecil dari 40 karena bagian yang lambat <b>memakan waktu lebih lama</b>, sehingga pengaruhnya lebih besar — angka yang kecil "menarik" hasilnya ke bawah.</p>
<div class="callout">
<b>Cara menghitungnya dalam 3 langkah:</b><br>
1. <b>Balik</b> setiap angka: 1/60 dan 1/20<br>
2. <b>Rata-ratakan</b> kebalikannya: (1/60 + 3/60) ÷ 2 = 1/30<br>
3. <b>Balik lagi</b>: 30<br><br>
Untuk dua angka ada jalan pintas: <b>2 × a × b ÷ (a + b)</b>. Karena itu F1 = 2 × precision × recall ÷ (precision + recall) — rumus yang setara dengan 2×TP ÷ (2×TP + FP + FN) di atas.
</div>
<table class="tbl">
  <tr><th>Precision</th><th>Recall</th><th>Rata-rata biasa</th><th>Rata-rata harmonik (F1)</th></tr>
  <tr><td>80%</td><td>80%</td><td>80%</td><td class="ok-cell">80% — sama, karena seimbang</td></tr>
  <tr><td>47,1%</td><td>80%</td><td>63,5%</td><td>59,3% — contoh 100 orang</td></tr>
  <tr><td>100%</td><td>1%</td><td class="bad-cell">50,5% — tampak lumayan</td><td class="ok-cell">2% — langsung ketahuan jelek</td></tr>
</table>
<p>Tiga sifatnya: selalu <b>sama atau lebih kecil</b> daripada rata-rata biasa, <b>sama persis</b> bila kedua angkanya sama, dan <b>hanya tinggi bila semua angkanya tinggi</b>. Satu sisi yang ambruk tidak bisa ditutupi oleh sisi yang sempurna.</p>

<h3>🔍 Rahasia yang jarang dibahas: precision bergantung pada seberapa umum kasusnya</h3>
<p>Di demo tadi, coba ganti jumlah orang sakit dari 10 menjadi 30, lalu 50 dari 100 orang — dengan <b>model dan ambang yang sama persis</b>:</p>
<table class="tbl">
  <tr><th>Orang sakit per 100</th><th>Recall</th><th>Spesifisitas</th><th>Precision</th></tr>
  <tr><td>10</td><td>80%</td><td>90%</td><td class="bad-cell">47%</td></tr>
  <tr><td>30</td><td>80%</td><td>90%</td><td>77%</td></tr>
  <tr><td>50</td><td>80%</td><td>90%</td><td class="ok-cell">89%</td></tr>
</table>
<p>Recall dan spesifisitas <b>tidak berubah sama sekali</b> — keduanya adalah sifat <b>model</b>. Tapi precision melonjak, karena ketika penyakitnya jarang, jumlah orang sehat yang bisa salah dituduh jauh lebih banyak daripada orang sakit yang bisa ditangkap.</p>
<div class="callout warn">
<b>Akibatnya dalam kehidupan nyata:</b> tes yang sangat bagus pun menghasilkan banyak alarm palsu bila dipakai untuk penyakit langka. Dan jangan pernah membandingkan precision dua model yang diuji pada data dengan proporsi berbeda — perbandingannya tidak adil. Penjelasan matematisnya (Teorema Bayes) ada di modul Matematika.
</div>

<h3>Kamus: satu angka, banyak nama</h3>
<table class="tbl">
  <tr><th>Rumus</th><th>Nama-namanya</th></tr>
  <tr><td>TP ÷ (TP + FN)</td><td><b>Recall</b> = TPR = sensitivitas = hit rate</td></tr>
  <tr><td>TP ÷ (TP + FP)</td><td><b>Precision</b> = PPV (<i>positive predictive value</i>)</td></tr>
  <tr><td>TN ÷ (TN + FP)</td><td><b>Spesifisitas</b> = TNR</td></tr>
  <tr><td>FP ÷ (FP + TN)</td><td><b>FPR</b> = 1 − spesifisitas = <i>fall-out</i></td></tr>
  <tr><td>FN ÷ (FN + TP)</td><td><b>FNR</b> = 1 − recall = <i>miss rate</i></td></tr>
</table>

<h3>Memilih metrik yang tepat</h3>
<table class="tbl">
  <tr><th>Situasi</th><th>Utamakan</th><th>Alasan</th></tr>
  <tr><td>Deteksi penyakit berbahaya, penipuan</td><td><b>Recall</b></td><td>Kasus yang lolos jauh lebih mahal daripada alarm palsu</td></tr>
  <tr><td>Filter spam, rekomendasi, memblokir akun</td><td><b>Precision</b></td><td>Tuduhan yang salah merugikan orang yang tidak bersalah</td></tr>
  <tr><td>Keduanya sama penting</td><td><b>F1</b></td><td>Satu angka yang hanya tinggi bila keduanya baik</td></tr>
  <tr><td>Membandingkan model sebelum memilih ambang</td><td><b>AUC</b></td><td>Dibahas di pelajaran berikutnya</td></tr>
  <tr><td>Kelompoknya seimbang dan kedua kesalahan sama mahal</td><td><b>Akurasi</b></td><td>Satu-satunya situasi akurasi layak dijadikan patokan</td></tr>
</table>

<pre class="code">from sklearn.metrics import confusion_matrix, classification_report

tebakan = model.predict(X_uji)
print(confusion_matrix(y_uji, tebakan))       # [[TN, FP], [FN, TP]]
print(classification_report(y_uji, tebakan))  # precision, recall, F1 per kelas</pre>
<p><i>Catatan: scikit-learn menyusun matriksnya dengan urutan [[TN, FP], [FN, TP]] — baris adalah kenyataan, kolom adalah tebakan. Posisinya berbeda dari tabel di atas, jadi selalu periksa label barisnya.</i></p>
`,
          keyPoints: [
            "Confusion matrix memuat empat angka: TP (tertangkap), FN (lolos), FP (alarm palsu), TN (benar sehat); semua metrik dihitung dari keempatnya.",
            "Kunci membaca nama: kata kedua = apa yang ditebak model (Positive = bilang sakit); kata pertama = tebakan itu benar atau salah.",
            "Akurasi menipu pada data timpang: model yang selalu bilang 'sehat' bisa mendapat 90% tanpa menangkap satu pun kasus.",
            "Recall = TP ÷ (TP + FN): dari yang benar-benar sakit, berapa yang tertangkap. Nama lain: TPR, sensitivitas.",
            "Precision = TP ÷ (TP + FP): dari yang dituduh sakit, berapa yang benar sakit.",
            "Menurunkan ambang menaikkan recall tetapi menurunkan precision; memilih ambang adalah keputusan tentang kesalahan mana yang lebih mahal.",
            "Spesifisitas = TN ÷ (TN + FP) dan FPR = 1 − spesifisitas melihat nasib orang sehat.",
            "F1 memakai rata-rata harmonik sehingga hanya tinggi bila precision dan recall sama-sama tinggi.",
            "Precision bergantung pada seberapa umum kasusnya; recall dan spesifisitas adalah sifat model.",
          ],
          practice: [
            { type: "number", q: "Dari 50 orang yang benar-benar sakit, model menangkap 40. Berapa recall-nya (%)?", answer: 80, tol: 0.5, hint: "Recall = tertangkap ÷ semua yang benar-benar sakit.", solution: "40 ÷ 50 = 80%." },
            { type: "number", q: "Model menuduh 25 orang sakit; ternyata hanya 20 yang benar sakit. Berapa precision-nya (%)?", answer: 80, tol: 0.5, hint: "Precision = tuduhan yang benar ÷ semua tuduhan.", solution: "20 ÷ 25 = 80%." },
            { type: "number", q: "TP = 30, FP = 10, FN = 20. Berapa F1-nya (%)? (bulatkan 1 desimal)", answer: 66.7, tol: 0.2, hint: "F1 = 2×TP ÷ (2×TP + FP + FN).", solution: "60 ÷ (60 + 10 + 20) = 60 ÷ 90 = 66,7%." },
          ],
          quiz: [
            {
              q: "Dalam istilah 'False Positive', apa arti kata 'Positive'?",
              options: [
                "Model menebak 'ya, sakit' — terlepas dari benar atau salahnya",
                "Orang tersebut benar-benar sakit menurut hasil pemeriksaan",
                "Tebakan model terbukti benar setelah dicocokkan kenyataan",
                "Skor risiko orang tersebut berada di atas angka nol",
              ],
              answer: 0,
              explain: "Kata kedua selalu menunjukkan apa yang ditebak model; kata pertama menunjukkan tebakannya benar atau salah.",
            },
            {
              q: "Model deteksi penipuan selalu menjawab 'bukan penipuan' dan mendapat akurasi 99%. Apa masalahnya?",
              options: [
                "Recall-nya 0% — tidak satu pun penipuan yang tertangkap",
                "Precision-nya terlalu tinggi sehingga banyak alarm palsu",
                "Akurasi 99% terlalu rendah untuk model deteksi penipuan",
                "Spesifisitasnya 0% karena semua transaksi dicurigai",
              ],
              answer: 0,
              explain: "Pada data timpang, menebak kelompok mayoritas terus pun terlihat sangat akurat.",
            },
            {
              q: "Rumah sakit ingin sesedikit mungkin pasien kanker yang lolos dari skrining. Metrik apa yang diutamakan?",
              options: [
                "Recall, karena mengukur berapa banyak pasien sakit yang tertangkap",
                "Precision, karena mengukur berapa tuduhan sakit yang terbukti benar",
                "Spesifisitas, karena mengukur berapa pasien sehat yang dinyatakan sehat",
                "Akurasi, karena mencakup semua pasien yang diperiksa dalam satu angka",
              ],
              answer: 0,
              explain: "Pasien sakit yang lolos adalah kesalahan termahal di sini, dan recall mengukur persis hal itu.",
            },
            {
              q: "Model yang sama dipakai di dua kota. Di kota A penyakitnya jarang, di kota B umum. Apa yang paling mungkin terjadi?",
              options: [
                "Precision di kota A jauh lebih rendah, walau recall-nya mirip",
                "Recall di kota A jauh lebih rendah, walau precision-nya mirip",
                "Semua metrik sama persis karena modelnya tidak berubah",
                "Akurasi di kota B pasti lebih tinggi daripada di kota A",
              ],
              answer: 0,
              explain: "Saat kasusnya jarang, orang sehat yang bisa salah dituduh jauh lebih banyak, sehingga precision turun.",
            },
            {
              q: "Kenapa F1 memakai rata-rata harmonik, bukan rata-rata biasa?",
              options: [
                "Agar hasilnya hanya tinggi bila precision dan recall sama-sama tinggi",
                "Agar hasilnya selalu lebih tinggi daripada precision maupun recall",
                "Agar perhitungannya tidak memerlukan angka TP sama sekali",
                "Agar hasilnya sama dengan akurasi pada data yang seimbang",
              ],
              answer: 0,
              explain: "Precision 100% dengan recall 1% menghasilkan rata-rata biasa 50,5%, tetapi F1 hanya sekitar 2%.",
            },
          ],
        },
        {
          id: "ai-fund-5",
          title: "Kurva ROC & AUC — Menilai Model Tanpa Terpaku Satu Ambang",
          duration: "15 menit",
          content: `
<p>Precision dan recall di pelajaran sebelumnya punya satu kelemahan: keduanya <b>berubah begitu kamu menggeser ambang keputusan</b>. Lalu bagaimana membandingkan dua model secara adil, kalau angkanya bergantung pada ambang yang belum kamu tentukan? Di situlah <b>ROC</b> dan <b>AUC</b> masuk — dua istilah yang muncul di hampir semua laporan model, termasuk di pelajaran XGBoost nanti.</p>

<h3>Fundamental: model sebenarnya memberi skor, bukan keputusan</h3>
<div class="callout">
Model klasifikasi tidak langsung berkata "ini penipuan". Ia memberi <b>skor</b> atau peluang, misalnya 0,82. Keputusan baru muncul setelah skor itu dibandingkan dengan sebuah <b>ambang</b>.<br><br>
Artinya, satu model yang sama bisa berperilaku galak atau longgar hanya dengan menggeser ambang. Maka pertanyaan "seberapa bagus model ini?" sebaiknya dijawab <b>tanpa mengunci satu ambang</b>.
</div>

<h3>Dua angka yang dipakai kurva ROC</h3>
<table class="tbl">
  <tr><th>Angka</th><th>Rumus</th><th>Artinya dalam kalimat</th></tr>
  <tr><td><b>TPR</b> (recall)</td><td>TP ÷ (TP + FN)</td><td>Dari semua kasus yang benar-benar positif, berapa persen tertangkap?</td></tr>
  <tr><td><b>FPR</b></td><td>FP ÷ (FP + TN)</td><td>Dari semua kasus yang sebenarnya negatif, berapa persen salah ditandai?</td></tr>
</table>
<p><b>Kurva ROC</b> adalah jejak yang terbentuk bila kita mencoba <b>semua ambang dari yang paling longgar sampai paling galak</b>, lalu menandai pasangan (FPR, TPR) di setiap ambang.</p>

<div class="callout">
<b>Ingat dari pelajaran sebelumnya:</b> TPR adalah nama lain dari <b>recall</b> — dari semua yang benar-benar sakit, berapa yang tertangkap. FPR adalah kebalikan dari spesifisitas — dari semua yang sehat, berapa yang salah dituduh. Kurva ROC hanya memakai dua angka itu.
</div>

<h3>Menggambar kurva ROC dengan tangan</h3>
<p>Sebelum melihat versi otomatisnya, mari buat satu kurva ROC sendiri dari <b>enam pasien</b>. Tiga benar-benar sakit (A, B, D) dan tiga sehat (C, E, F). Model sudah memberi skor, dan pasien diurutkan dari skor tertinggi:</p>
<table class="tbl">
  <tr><th>Langkah</th><th>Ambang turun ke…</th><th>Yang ditandai sakit</th><th>TPR</th><th>FPR</th><th>Titik</th></tr>
  <tr><td>0</td><td>di atas 0,9</td><td>tidak ada</td><td>0/3</td><td>0/3</td><td>(0, 0)</td></tr>
  <tr><td>1</td><td>0,9</td><td>A (sakit ✅)</td><td>1/3</td><td>0/3</td><td>naik ↑</td></tr>
  <tr><td>2</td><td>0,8</td><td>+ B (sakit ✅)</td><td>2/3</td><td>0/3</td><td>naik ↑</td></tr>
  <tr><td>3</td><td>0,7</td><td>+ C (sehat ❌)</td><td>2/3</td><td>1/3</td><td>kanan →</td></tr>
  <tr><td>4</td><td>0,6</td><td>+ D (sakit ✅)</td><td>3/3</td><td>1/3</td><td>naik ↑</td></tr>
  <tr><td>5</td><td>0,4</td><td>+ E (sehat ❌)</td><td>3/3</td><td>2/3</td><td>kanan →</td></tr>
  <tr><td>6</td><td>0,2</td><td>+ F (sehat ❌)</td><td>3/3</td><td>3/3</td><td>(1, 1)</td></tr>
</table>
<div class="callout warn">
<b>Aturan menggambarnya sangat sederhana:</b> setiap kali ambang turun dan menangkap orang <b>sakit</b>, titik <b>naik</b>. Setiap kali menangkap orang <b>sehat</b>, titik bergeser ke <b>kanan</b>. Model yang bagus menaruh orang sakit di skor teratas, sehingga kurvanya naik dulu sebelum bergerak ke kanan — itulah sebabnya kurva yang bagus menempel ke pojok kiri atas.
</div>

<div data-demo="roc-langkah"></div>

<p>Sekarang versi yang lebih besar: <b>60 kasus</b>, dengan ambang dan kualitas model yang bisa kamu geser sendiri.</p>

<div data-demo="roc-auc"></div>

<h3>Membaca kurvanya</h3>
<table class="tbl">
  <tr><th>Yang terlihat</th><th>Artinya</th></tr>
  <tr><td>Kurva menempel garis diagonal</td><td>Model tidak lebih baik daripada menebak acak</td></tr>
  <tr><td>Kurva melengkung ke pojok kiri atas</td><td>Banyak yang tertangkap dengan sedikit alarm palsu — inilah yang diinginkan</td></tr>
  <tr><td>Pojok kiri bawah</td><td>Ambang sangat galak: nyaris tidak ada alarm, tapi banyak yang terlewat</td></tr>
  <tr><td>Pojok kanan atas</td><td>Ambang sangat longgar: semua tertangkap, tapi semuanya ikut ditandai</td></tr>
</table>

<h3>AUC — meringkas seluruh kurva jadi satu angka</h3>
<div class="callout">
<b>AUC</b> (<i>Area Under the Curve</i>) adalah <b>luas daerah di bawah kurva ROC</b>. Karena kotaknya berukuran 1 × 1, nilainya selalu antara 0 dan 1.<br><br>
Ada satu cara membacanya yang jauh lebih mudah diingat:<br>
<b>AUC = peluang model memberi skor lebih tinggi pada satu kasus positif acak dibanding satu kasus negatif acak.</b><br><br>
AUC 0,92 berarti: ambil satu penipuan dan satu transaksi normal secara acak, maka 92% dari waktu model memberi skor lebih tinggi untuk yang penipuan. Di contoh enam pasien tadi, kedua cara menghasilkan 8/9 — dan di demo 60 kasus pun keduanya selalu sama persis.
</div>

<table class="tbl">
  <tr><th>AUC</th><th>Tafsiran kasar</th></tr>
  <tr><td class="bad-cell">0,5</td><td>Setara menebak acak</td></tr>
  <tr><td>0,6 – 0,7</td><td>Lemah, tapi kadang masih berguna untuk menyaring</td></tr>
  <tr><td>0,7 – 0,8</td><td>Lumayan; umum pada masalah sosial dan kredit</td></tr>
  <tr><td class="ok-cell">0,8 – 0,9</td><td>Baik</td></tr>
  <tr><td>Di atas 0,95</td><td>Sangat baik — <b>atau</b> ada kebocoran data. Periksa dulu sebelum senang</td></tr>
</table>

<h3>Kenapa AUC disukai</h3>
<ul>
  <li><b>Tidak bergantung pada ambang</b>, sehingga cocok untuk membandingkan dua model.</li>
  <li><b>Tidak terpengaruh perbandingan jumlah kelas</b> — tidak seperti akurasi, yang bisa 99% hanya karena kasus positifnya langka.</li>
  <li><b>Satu angka</b>, mudah dilaporkan dan dipantau dari waktu ke waktu.</li>
</ul>

<div class="callout warn">
<b>⚠️ Tiga hal yang TIDAK diberitahukan AUC</b><br><br>
<b>1. Ambang mana yang harus kamu pakai.</b> AUC menilai seluruh kurva; keputusan operasionalnya tetap harus kamu pilih berdasarkan biaya kesalahan.<br><br>
<b>2. Apakah peluangnya masuk akal (terkalibrasi).</b> Model bisa ber-AUC 0,9 tapi selalu menyebut peluang 0,9 untuk kasus yang sebenarnya hanya 30% berisiko. AUC hanya peduli <b>urutan</b>, bukan besaran angkanya.<br><br>
<b>3. Seberapa berguna model pada kasus yang sangat langka.</b> Bila penipuan hanya 0,1% dari data, FPR 1% terdengar kecil — padahal itu bisa berarti ribuan alarm palsu untuk setiap penipuan yang tertangkap. Untuk kasus timpang seperti ini, praktisi memakai <b>PR curve</b> (precision–recall) dan <b>average precision</b>.
</div>

<h3>Memilih metrik: panduan singkat</h3>
<table class="tbl">
  <tr><th>Situasi</th><th>Pakai</th></tr>
  <tr><td>Membandingkan beberapa model sebelum menentukan ambang</td><td>AUC (ROC)</td></tr>
  <tr><td>Kasus positif sangat langka (penipuan, penyakit langka)</td><td>PR curve &amp; average precision</td></tr>
  <tr><td>Sudah menentukan ambang, ingin laporan operasional</td><td>Precision, recall, F1</td></tr>
  <tr><td>Butuh angka peluang yang bisa dipercaya besarannya</td><td>Ukuran kalibrasi, misalnya Brier score</td></tr>
</table>

<pre class="code">from sklearn.metrics import roc_auc_score, roc_curve, average_precision_score

peluang = model.predict_proba(X_uji)[:, 1]     # skor, bukan keputusan
print(roc_auc_score(y_uji, peluang))           # satu angka AUC
print(average_precision_score(y_uji, peluang)) # lebih cocok untuk kelas langka

fpr, tpr, ambang = roc_curve(y_uji, peluang)   # bahan untuk menggambar kurva</pre>

<div class="callout">
<b>💡 Ingat ini saja bila lupa yang lain:</b> AUC menjawab "seberapa baik model <b>mengurutkan</b> kasus berisiko di atas kasus aman", sedangkan precision dan recall menjawab "apa yang terjadi <b>bila</b> aku memotong di ambang tertentu". Keduanya dipakai bersama, bukan saling menggantikan.
</div>
`,
          keyPoints: [
            "Model klasifikasi memberi skor, bukan keputusan; keputusan muncul setelah skor dibandingkan dengan ambang.",
            "TPR = dari semua positif, berapa yang tertangkap. FPR = dari semua negatif, berapa yang salah ditandai.",
            "Kurva ROC adalah jejak pasangan (FPR, TPR) saat semua ambang dicoba dari longgar sampai galak.",
            "AUC = luas di bawah kurva ROC, dan sama dengan peluang skor kasus positif acak lebih tinggi dari kasus negatif acak.",
            "AUC 0,5 setara menebak acak; di atas 0,95 pada masalah nyata patut dicurigai sebagai kebocoran data.",
            "AUC tidak memberi tahu ambang yang harus dipakai, tidak menilai kalibrasi peluang, dan menyesatkan pada kelas yang sangat langka.",
            "Untuk kasus sangat timpang, pakai PR curve dan average precision.",
          ],
          practice: [
            { type: "number", q: "Dari 50 kasus positif, 40 tertangkap model. Berapa TPR-nya dalam persen?", answer: 80, tol: 0.5, hint: "TPR = tertangkap ÷ seluruh kasus positif.", solution: "40 ÷ 50 = 0,8 = 80%." },
            { type: "number", q: "Dari 200 kasus negatif, 30 salah ditandai positif. Berapa FPR-nya dalam persen?", answer: 15, tol: 0.5, hint: "FPR = salah ditandai ÷ seluruh kasus negatif.", solution: "30 ÷ 200 = 0,15 = 15%." },
          ],
          quiz: [
            {
              q: "Apa arti AUC 0,85 dengan bahasa paling mudah?",
              options: [
                "Ambil satu kasus positif dan satu negatif acak, 85% skor positifnya lebih tinggi",
                "Model menebak dengan benar pada 85% dari seluruh kasus yang diujikan",
                "Model menangkap 85% kasus positif pada ambang yang dipakai saat ini",
                "Sebanyak 85% peluang yang dikeluarkan model sudah terkalibrasi dengan benar",
              ],
              answer: 0,
              explain: "AUC menilai urutan skor, bukan akurasi pada satu ambang tertentu.",
            },
            {
              q: "Kenapa AUC dipakai untuk membandingkan dua model?",
              options: [
                "Karena nilainya tidak bergantung pada ambang yang dipilih",
                "Karena nilainya selalu lebih tinggi daripada angka akurasi",
                "Karena nilainya memberi tahu ambang terbaik yang harus dipakai",
                "Karena nilainya menjamin peluang yang dihasilkan sudah akurat",
              ],
              answer: 0,
              explain: "Precision dan recall berubah begitu ambang digeser, sedangkan AUC menilai seluruh kurva.",
            },
            {
              q: "Deteksi penipuan dengan hanya 0,1% kasus positif menunjukkan AUC 0,93, tetapi tim penyelidik kebanjiran alarm palsu. Apa yang sebaiknya dilihat?",
              options: [
                "PR curve dan average precision, yang lebih jujur untuk kelas sangat langka",
                "Akurasi keseluruhan, karena angkanya paling mudah dipahami manajemen",
                "Nilai loss saat pelatihan, karena itu menentukan kualitas sebenarnya",
                "Jumlah lapisan model, karena model terlalu kecil untuk data sebesar itu",
              ],
              answer: 0,
              explain: "Pada kelas langka, FPR kecil pun tetap berarti sangat banyak alarm palsu per kasus asli.",
            },
            {
              q: "Sebuah model deteksi penyakit dilaporkan ber-AUC 0,995 pada data nyata. Sikap pertama yang tepat?",
              options: [
                "Curiga ada kebocoran data dan periksa kolom yang dipakai model",
                "Langsung pakai di rumah sakit karena hasilnya hampir sempurna",
                "Menurunkan ambang agar lebih banyak pasien tertangkap",
                "Mengganti metrik ke akurasi agar angkanya lebih meyakinkan",
              ],
              answer: 0,
              explain: "Hasil nyaris sempurna pada masalah sulit biasanya berarti ada informasi masa depan yang ikut terpakai.",
            },
          ],
        },
        {
          id: "ai-fund-6",
          title: "TPR, FPR, Precision & ROC AUC — Semuanya dalam Satu Halaman",
          duration: "12 menit",
          content: `
<p>Empat istilah ini paling sering tertukar, bahkan oleh orang yang sudah lama bekerja dengan AI. Dua pelajaran sebelumnya membahasnya satu per satu secara mendalam. Pelajaran ini merangkumnya dengan satu kunci yang membuat semuanya tidak tertukar lagi:</p>

<div class="callout">
<b>🔑 Semua metrik ini dihitung dari tabel empat kotak yang SAMA. Bedanya hanya satu: kotak mana yang dilihat.</b>
</div>

<h3>Tabelnya, sekali lagi</h3>
<p>Contoh yang sama seperti sebelumnya: 100 orang diperiksa, 10 benar-benar sakit, dan model menuduh 17 orang sakit.</p>
<table class="tbl">
  <tr><th></th><th>Model bilang <b>sakit</b></th><th>Model bilang <b>sehat</b></th><th>Jumlah</th></tr>
  <tr><td><b>Benar-benar sakit</b></td><td class="ok-cell">TP = 8</td><td class="bad-cell">FN = 2</td><td>10</td></tr>
  <tr><td><b>Benar-benar sehat</b></td><td class="bad-cell">FP = 9</td><td class="ok-cell">TN = 81</td><td>90</td></tr>
  <tr><td><b>Jumlah</b></td><td>17</td><td>83</td><td>100</td></tr>
</table>

<h3>Empat istilah, empat cara melihat tabel</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Melihat bagian…</th><th>Rumus</th><th>Pertanyaannya</th><th>Contoh</th></tr>
  <tr><td><b>TPR</b><br><i>= recall = sensitivitas</i></td><td>Baris <b>sakit</b></td><td>TP ÷ (TP + FN)</td><td>Dari yang benar-benar sakit, berapa yang <b>tertangkap</b>?</td><td>8 ÷ 10 = <b>80%</b></td></tr>
  <tr><td><b>FPR</b></td><td>Baris <b>sehat</b></td><td>FP ÷ (FP + TN)</td><td>Dari yang benar-benar sehat, berapa yang <b>salah dituduh</b>?</td><td>9 ÷ 90 = <b>10%</b></td></tr>
  <tr><td><b>Precision</b></td><td>Kolom <b>"dituduh sakit"</b></td><td>TP ÷ (TP + FP)</td><td>Dari yang dituduh sakit, berapa yang <b>benar sakit</b>?</td><td>8 ÷ 17 = <b>47%</b></td></tr>
  <tr><td><b>ROC AUC</b></td><td>TPR &amp; FPR di <b>semua ambang</b></td><td>Luas di bawah kurva</td><td>Seberapa baik model <b>mengurutkan</b> orang sakit di atas orang sehat?</td><td>0 sampai 1</td></tr>
</table>

<div data-demo="peta-metrik"></div>

<h3>Cara supaya tidak tertukar lagi</h3>
<div class="callout warn">
<b>Lihat penyebutnya — bagian yang menjadi pembagi.</b><br><br>
<b>TPR dan FPR</b> dibagi dengan <b>kenyataan</b>: jumlah orang yang benar-benar sakit, atau jumlah orang yang benar-benar sehat. Kata <i>rate</i> di namanya berarti "tingkat, per kelompok kenyataan".<br><br>
<b>Precision</b> dibagi dengan <b>tuduhan model</b>: jumlah orang yang dituduh sakit.<br><br>
Jadi: TPR bertanya kepada <b>orang sakit</b>, FPR bertanya kepada <b>orang sehat</b>, precision bertanya kepada <b>model</b>.
</div>

<h3>Kenapa ROC memakai TPR dan FPR, bukan precision?</h3>
<p>Ini bagian yang jarang dijelaskan, padahal menjawab banyak kebingungan:</p>
<table class="tbl">
  <tr><th>Metrik</th><th>Membaca</th><th>Kalau penyakitnya makin jarang…</th></tr>
  <tr><td>TPR</td><td>Hanya baris sakit</td><td class="ok-cell">Tidak berubah</td></tr>
  <tr><td>FPR</td><td>Hanya baris sehat</td><td class="ok-cell">Tidak berubah</td></tr>
  <tr><td>Precision</td><td>Satu kolom berisi orang sakit <b>dan</b> sehat</td><td class="bad-cell">Ikut turun</td></tr>
</table>
<p>Karena TPR dan FPR masing-masing hanya membaca <b>satu kelompok kenyataan</b>, keduanya adalah sifat <b>model itu sendiri</b>. Kurva ROC yang dibangun dari keduanya pun sama, di mana pun model dipakai. Itulah alasan AUC cocok untuk <b>membandingkan model</b>.</p>
<p>Sisi gelapnya: justru karena ROC tidak peduli seberapa langka kasusnya, ia bisa terlihat bagus padahal di lapangan alarm palsunya menumpuk. Untuk kasus yang sangat langka, lihat juga <b>precision</b> — atau kurva precision–recall.</p>

<h3>Apa yang terjadi bila ambang diturunkan (model makin galak)?</h3>
<table class="tbl">
  <tr><th>Metrik</th><th>Arah</th><th>Alasannya</th></tr>
  <tr><td>TPR</td><td class="ok-cell">Naik ⬆</td><td>Makin banyak orang sakit ikut tertangkap</td></tr>
  <tr><td>FPR</td><td class="bad-cell">Naik ⬆</td><td>Makin banyak orang sehat ikut dituduh</td></tr>
  <tr><td>Precision</td><td class="bad-cell">Biasanya turun ⬇</td><td>Tuduhan bertambah, tapi kebanyakan tambahannya orang sehat</td></tr>
  <tr><td>ROC AUC</td><td>Tetap</td><td>AUC menilai seluruh kurva, bukan satu ambang</td></tr>
</table>

<h3>Kartu ringkas untuk disimpan</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Dalam satu kalimat</th><th>Pakai saat…</th></tr>
  <tr><td><b>TPR / recall</b></td><td>Seberapa sedikit yang lolos</td><td>Melewatkan kasus itu mahal (penyakit, penipuan)</td></tr>
  <tr><td><b>FPR</b></td><td>Seberapa sering orang tak bersalah dituduh</td><td>Menggambar kurva ROC; menilai beban alarm palsu</td></tr>
  <tr><td><b>Precision</b></td><td>Seberapa bisa dipercaya sebuah tuduhan</td><td>Tuduhan yang salah itu mahal (spam, blokir akun)</td></tr>
  <tr><td><b>ROC AUC</b></td><td>Seberapa baik model mengurutkan</td><td>Membandingkan model sebelum memilih ambang</td></tr>
</table>

<div class="callout">
<b>💡 Ingin lebih dalam?</b> Pelajaran <b>Mengukur Kualitas AI dari Nol</b> membahas asal-usul nama TP/FP/FN/TN, jebakan akurasi, dan F1. Pelajaran <b>Kurva ROC &amp; AUC</b> menunjukkan cara menggambar kurvanya dengan tangan dari enam pasien sampai AUC = 8/9.
</div>
`,
          keyPoints: [
            "TPR, FPR, precision, dan ROC AUC semuanya dihitung dari confusion matrix yang sama; bedanya hanya kotak mana yang dilihat.",
            "TPR (= recall) = TP ÷ (TP + FN): dari yang benar-benar sakit, berapa yang tertangkap.",
            "FPR = FP ÷ (FP + TN): dari yang benar-benar sehat, berapa yang salah dituduh.",
            "Precision = TP ÷ (TP + FP): dari yang dituduh sakit, berapa yang benar sakit.",
            "Kunci tidak tertukar: TPR dan FPR dibagi dengan kenyataan, precision dibagi dengan tuduhan model.",
            "ROC memakai TPR dan FPR karena keduanya tidak terpengaruh seberapa langka kasusnya; precision ikut berubah.",
            "Menurunkan ambang menaikkan TPR dan FPR, biasanya menurunkan precision, sedangkan AUC tetap.",
          ],
          practice: [
            { type: "number", q: "TP = 30, FN = 10, FP = 20, TN = 140. Berapa TPR-nya (%)?", answer: 75, tol: 0.5, hint: "TPR = TP ÷ (TP + FN).", solution: "30 ÷ 40 = 75%." },
            { type: "number", q: "Dengan tabel yang sama (TP 30, FN 10, FP 20, TN 140), berapa FPR-nya (%)? (1 desimal)", answer: 12.5, tol: 0.1, hint: "FPR = FP ÷ (FP + TN).", solution: "20 ÷ 160 = 12,5%." },
            { type: "number", q: "Dengan tabel yang sama, berapa precision-nya (%)?", answer: 60, tol: 0.5, hint: "Precision = TP ÷ (TP + FP).", solution: "30 ÷ 50 = 60%." },
          ],
          quiz: [
            {
              q: "Apa perbedaan mendasar antara TPR dan precision?",
              options: [
                "TPR dibagi jumlah yang benar-benar sakit, precision dibagi jumlah yang dituduh sakit",
                "TPR dipakai untuk data kecil, sedangkan precision dipakai untuk data yang sangat besar",
                "TPR menghitung kesalahan model, sedangkan precision menghitung jawaban yang benar",
                "TPR dan precision sama saja, hanya namanya berbeda di buku yang berbeda",
              ],
              answer: 0,
              explain: "Pembilangnya sama (TP), tetapi penyebutnya berbeda: kenyataan lawan tuduhan.",
            },
            {
              q: "FPR sebuah model 10%. Apa artinya?",
              options: [
                "Dari semua orang yang benar-benar sehat, 10% salah dituduh sakit",
                "Dari semua orang yang dituduh sakit, 10% ternyata sehat",
                "Dari semua orang yang benar-benar sakit, 10% berhasil lolos",
                "Dari semua orang yang diperiksa, 10% ditebak dengan salah",
              ],
              answer: 0,
              explain: "FPR hanya membaca baris orang yang benar-benar sehat.",
            },
            {
              q: "Kenapa kurva ROC dibangun dari TPR dan FPR, bukan dari precision?",
              options: [
                "Karena keduanya tidak berubah saat kasusnya makin langka, jadi mencerminkan model itu sendiri",
                "Karena precision tidak bisa dihitung pada ambang mana pun untuk data yang seimbang",
                "Karena TPR dan FPR selalu bernilai lebih tinggi sehingga kurvanya terlihat lebih baik",
                "Karena precision hanya dipakai untuk regresi, bukan untuk klasifikasi",
              ],
              answer: 0,
              explain: "Masing-masing hanya membaca satu kelompok kenyataan, sedangkan precision mencampur keduanya.",
            },
            {
              q: "Ambang keputusan diturunkan sehingga model makin galak. Apa yang biasanya terjadi?",
              options: [
                "TPR naik, FPR naik, precision cenderung turun, dan AUC tetap",
                "TPR turun, FPR turun, precision naik, dan AUC ikut naik",
                "TPR naik, FPR turun, precision naik, dan AUC ikut naik",
                "Semua metrik tetap karena modelnya tidak dilatih ulang",
              ],
              answer: 0,
              explain: "Lebih banyak orang ditandai sakit — yang sakit maupun yang sehat — sementara AUC menilai seluruh kurva.",
            },
          ],
        },
        {
          id: "ai-fund-2",
          title: "Loss & Gradient Descent (Matematika Belajar)",
          duration: "12 menit",
          content: `
<p>Bagaimana persisnya model "belajar"? Inti matematikanya cuma dua: <b>loss</b> dan <b>gradient descent</b>.</p>

<div data-diagram="cycle" data-steps="Model menebak|Hitung selisih (loss)|Cari arah menurun (gradient)|Geser bobot sedikit" data-center="ribuan kali" data-caption="Belajar = mengulang empat langkah ini sampai selisihnya cukup kecil"></div>


<h3>Loss = ukuran kesalahan</h3>
<p><b>Loss</b> (fungsi kerugian) mengubah "seberapa salah" model menjadi satu angka. Tujuan training: <b>membuat loss sekecil mungkin</b>.</p>

<h3>Gradient descent = menuruni bukit dalam kabut</h3>
<div class="callout">
<b>Analogi:</b> Bayangkan kamu di bukit berkabut dan ingin turun ke lembah (loss terendah). Kamu raba kemiringan tanah (<b>gradien</b> = arah paling menanjak), lalu melangkah ke arah <b>berlawanan</b>. Ulangi → sampai ke dasar.
</div>
<ul>
  <li><b>Gradien</b> = arah & kecuraman kenaikan loss.</li>
  <li><b>Learning rate</b> = besar langkah. Terlalu besar → melompati lembah; terlalu kecil → sangat lambat.</li>
</ul>

<h3>Kapan berhenti? Saat sudah "konvergen"</h3>
<div class="callout">
<b>Konvergen</b> artinya langkah-langkahnya <b>mengerucut ke satu titik</b>. Awalnya setiap langkah menurunkan loss cukup banyak; makin dekat ke dasar lembah, perubahannya makin kecil — sampai hampir diam. Saat itu model disebut <b>sudah konvergen</b>: melanjutkan latihan nyaris tidak menurunkan loss lagi.<br><br>
Contoh deret loss yang konvergen: 0,73 → 0,24 → 0,06 → 0,02 → 0,006 → 0,005 → 0,005 …
</div>
<table class="tbl">
  <tr><th>Keadaan</th><th>Yang terlihat</th><th>Penyebab umum</th></tr>
  <tr><td class="ok-cell"><b>Konvergen</b></td><td>Loss turun lalu mendatar</td><td>Learning rate pas</td></tr>
  <tr><td class="bad-cell"><b>Gagal konvergen</b></td><td>Loss naik-turun makin liar, bahkan meledak</td><td>Learning rate terlalu besar — langkahnya melompati lembah bolak-balik</td></tr>
  <tr><td><b>Belum konvergen</b></td><td>Loss masih terus turun saat latihan dihentikan</td><td>Latihan terlalu singkat atau learning rate terlalu kecil</td></tr>
</table>
<div class="callout warn">
<b>⚠️ Konvergen belum tentu bagus.</b> Model bisa berhenti di lembah yang dangkal (bukan yang terdalam), atau konvergen sambil <b>menghafal</b> data latih. Karena itu hasil akhirnya tetap harus diuji dengan data yang belum pernah dilihat model.
</div>

<h3>Coba sendiri — jalankan gradient descent 👇</h3>
<p>Kita cari nilai x yang meminimalkan fungsi f(x) = (x − 3)². Jawabannya jelas x = 3; lihat AI "menemukannya" sendiri:</p>
<div data-demo="js-playground">// f(x) = (x - 3)^2, turunannya f'(x) = 2*(x - 3)
let x = 0;          // tebakan awal
const lr = 0.1;     // learning rate (besar langkah)

[1,2,3,4,5,6,7,8,9,10].forEach(function(langkah){
  const gradien = 2 * (x - 3);   // arah menanjak
  x = x - lr * gradien;          // melangkah berlawanan gradien
  console.log("Langkah " + langkah + ": x = " + x.toFixed(3));
});
console.log("=> Konvergen menuju x = 3 (titik minimum). Itulah 'belajar'.");</div>

<div class="callout">
<b>💥 Dampak:</b> Proses inilah yang menjalankan pelatihan SEMUA neural network — dari pengenal gambar sampai LLM raksasa seperti Claude. Bedanya hanya skala: bukan 1 angka x, tapi <b>miliaran parameter</b> sekaligus.
</div>
`,
          keyPoints: [
            "Loss = satu angka yang mengukur seberapa salah model; training berusaha meminimalkannya.",
            "Gradient descent = melangkah berlawanan arah gradien untuk menuruni 'bukit' loss.",
            "Learning rate mengatur besar langkah: terlalu besar melompati, terlalu kecil lambat.",
            "Prinsip ini menjalankan pelatihan semua neural network & LLM, hanya beda skala.",
          ],
          quiz: [
            {
              q: "Apa tujuan gradient descent?",
              options: [
                "Memperkecil loss dengan melangkah berlawanan arah gradiennya",
                "Memperbesar loss agar model belajar dari kesalahan yang lebih banyak",
                "Mencari nilai tertinggi dari fungsi loss di seluruh ruang parameter",
                "Menghitung seberapa cepat model memproses satu batch data",
              ],
              answer: 0,
              explain: "Ia menuruni permukaan loss menuju nilai terkecil.",
            },
            {
              q: "Apa efek learning rate yang terlalu besar?",
              options: [
                "Langkahnya melompati titik terendah sehingga bisa gagal konvergen",
                "Pelatihan berjalan sangat lambat karena langkahnya terlalu kecil",
                "Model menghafal data latih sehingga gagal pada data yang baru",
                "Gradiennya menjadi nol sehingga model berhenti belajar sama sekali",
              ],
              answer: 0,
              explain: "Langkah terlalu besar bisa melewati/menjauhi minimum.",
            },
          ],
        },
        {
          id: "ai-fund-3",
          title: "Parameter, Token, Context & Compute",
          duration: "11 menit",
          content: `
<p>Empat "sumber daya" fundamental yang menentukan kemampuan & biaya sebuah model AI:</p>

<table class="tbl">
  <tr><th>Istilah</th><th>Arti fundamental</th></tr>
  <tr><td><b>Parameter</b></td><td>"Kenop" angka yang dipelajari model. Makin banyak → kapasitas belajar makin besar (LLM modern: ratusan miliar).</td></tr>
  <tr><td><b>Token</b></td><td>Potongan kata. Model berpikir & <b>ditagih per token</b> (input + output).</td></tr>
  <tr><td><b>Context window</b></td><td>Berapa token bisa "diingat" sekaligus dalam satu percakapan/dokumen.</td></tr>
  <tr><td><b>Compute</b></td><td>Daya komputasi (dihitung dalam FLOPs) untuk melatih & menjalankan model. Menentukan biaya & waktu.</td></tr>
</table>

<div class="callout">
<b>Scaling laws:</b> secara umum, <b>lebih banyak parameter + lebih banyak data + lebih banyak compute → model lebih pintar</b> — tapi juga <b>lebih mahal</b>. Inilah mengapa model tercanggih butuh biaya latih yang sangat besar.
</div>

<h3>💥 Dampak pada aplikasi</h3>
<ul>
  <li><b>Token</b> menentukan biaya API-mu → prompt ringkas & caching menghemat uang.</li>
  <li><b>Context window</b> membatasi berapa banyak dokumen bisa dimasukkan sekaligus (relevan untuk RAG).</li>
  <li><b>Parameter/compute</b> menjelaskan kenapa model besar lebih pintar tapi lebih lambat/mahal → pilih model sesuai kebutuhan.</li>
</ul>
`,
          keyPoints: [
            "Parameter = kenop yang dipelajari; makin banyak makin berkapasitas (dan mahal).",
            "Token = potongan kata; dasar biaya API. Context window = batas token yang 'diingat' sekaligus.",
            "Compute (FLOPs) = daya komputasi; menentukan biaya & waktu latih/pakai.",
            "Scaling laws: parameter+data+compute lebih besar → lebih pintar tapi lebih mahal.",
          ],
          quiz: [
            {
              q: "Apa yang dimaksud 'token' pada LLM?",
              options: [
                "Potongan kata yang jadi satuan berpikir sekaligus dasar penagihan",
                "Satu kata utuh dalam kalimat, apa pun panjang dan bahasanya",
                "Satu huruf tunggal yang diproses model satu per satu",
                "Kode rahasia yang dipakai mengakses layanan model bahasa",
              ],
              answer: 0,
              explain: "Model memproses & ditagih per token (input + output).",
            },
            {
              q: "Apa itu 'context window'?",
              options: [
                "Berapa banyak token yang bisa dipegang model dalam satu percakapan",
                "Berapa lama model menyimpan riwayat percakapan di servernya",
                "Berapa banyak permintaan yang boleh dikirim dalam satu menit",
                "Seberapa besar ukuran model diukur dari jumlah parameternya",
              ],
              answer: 0,
              explain: "Context window membatasi banyaknya token yang diproses dalam satu waktu.",
            },
          ],
        },
        {
          id: "ai-fund-4",
          title: "Bias, Variance & Generalisasi",
          duration: "11 menit",
          content: `
<p>Tujuan sejati AI bukan pintar di data latihan, melainkan <b>generalisasi</b> — bekerja baik pada data <b>baru</b> yang belum pernah dilihat.</p>

<div data-diagram="compare3" data-cols="Underfitting::model terlalu sederhana::salah di data latih DAN data baru|Pas (ideal)::kerumitan seimbang::baik di keduanya|Overfitting::model terlalu rumit::hafal data latih, gagal di data baru" data-caption="Tiga keadaan model — yang dikejar adalah yang tengah"></div>


<h3>Dua penyakit model</h3>
<table class="tbl">
  <tr><th></th><th>Bias tinggi (Underfitting)</th><th>Variance tinggi (Overfitting)</th></tr>
  <tr><td>Penyebab</td><td>Model terlalu sederhana</td><td>Model terlalu rumit / menghafal</td></tr>
  <tr><td>Gejala</td><td>Salah di data latih & data baru</td><td>Sempurna di data latih, buruk di data baru</td></tr>
  <tr><td>Analogi</td><td>Siswa yang tak paham materi</td><td>Siswa yang menghafal kunci jawaban</td></tr>
</table>

<div class="callout">
<b>Trade-off bias-variance:</b> menurunkan yang satu sering menaikkan yang lain. Tujuan: menemukan <b>keseimbangan</b> — cukup fleksibel untuk menangkap pola, tapi tidak menghafal keributan data.
</div>

<h3>Peran data</h3>
<p>Data latih yang <b>banyak & berkualitas</b> adalah senjata utama melawan overfitting — makin beragam contohnya, makin sulit model sekadar menghafal.</p>

<h3>💥 Dampak</h3>
<p>Model yang tidak menggeneralisasi akan <b>gagal di dunia nyata</b> meski terlihat hebat saat pengujian internal. Karena itu evaluasi harus memakai data yang benar-benar terpisah (lihat pelajaran "Overfitting & Cara Menguji Model").</p>
`,
          keyPoints: [
            "Generalisasi = kinerja pada data baru; itulah tujuan sejati AI.",
            "Bias tinggi (underfitting) = terlalu sederhana; variance tinggi (overfitting) = menghafal.",
            "Trade-off bias-variance: cari keseimbangan; data banyak & berkualitas melawan overfitting.",
            "Dampak: model yang tak menggeneralisasi gagal di dunia nyata meski bagus saat uji.",
          ],
          quiz: [
            {
              q: "Model sempurna di data latih tetapi buruk di data baru mengalami?",
              options: [
                "Overfitting — model menghafal data latih dan gagal menyamaratakan",
                "Underfitting — model terlalu sederhana untuk menangkap polanya",
                "Kebocoran data — data uji ikut terpakai saat proses pelatihan",
                "Model drift — pola dunia berubah setelah model selesai dilatih",
              ],
              answer: 0,
              explain: "Itu overfitting — model menghafal, gagal menggeneralisasi.",
            },
            {
              q: "Senjata utama melawan overfitting?",
              options: [
                "Data latih yang lebih banyak, berkualitas, dan beragam",
                "Menambah jumlah lapisan agar model bisa belajar lebih dalam",
                "Melatih model jauh lebih lama sampai loss-nya mendekati nol",
                "Memakai seluruh data untuk melatih tanpa menyisakan data uji",
              ],
              answer: 0,
              explain: "Data beragam menyulitkan model sekadar menghafal, mendorong generalisasi.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 5: MATEMATIKA DI BALIK AI ---------------- */
    {
      id: "ai-matematika",
      level: "Matematika",
      title: "Matematika di Balik AI",
      summary: "Untuk apa matematika AI dipelajari, membaca simbol, vektor & dot product, turunan, fungsi aktivasi & loss, sigmoid vs ReLU, dan probabilitas.",
      lessons: [
        {
          id: "ai-mat-intro",
          title: "Untuk Apa Sebenarnya Belajar Matematika AI?",
          duration: "13 menit",
          content: `
<p>Pertanyaan yang wajar sebelum masuk modul ini: <b>apa gunanya?</b> Toh kamu bisa memakai ChatGPT tanpa tahu satu rumus pun, dan bisa melatih model dengan tiga baris scikit-learn. Jawabannya jujur: <b>tergantung sejauh mana kamu ingin melangkah</b> — dan pelajaran ini memetakannya, termasuk bagian yang boleh kamu lewati.</p>

<div data-diagram="pipeline" data-stages="Simbol::agar rumus terbaca|Vektor::makna jadi angka|Turunan::cara model belajar|Loss::apa yang dikejar|Peluang::cara membaca hasil" data-caption="Lima bekal di modul ini, dan satu kalimat kegunaan masing-masing"></div>

<h3>Tiga tingkat pemakai AI</h3>
<table class="tbl">
  <tr><th>Kamu ingin…</th><th>Matematika yang dibutuhkan</th><th>Tanpa itu kamu akan…</th></tr>
  <tr><td><b>Memakai alat AI</b> (ChatGPT, Claude, alat gambar)</td><td class="ok-cell">Hampir tidak ada</td><td>Baik-baik saja. Cukup paham batasnya: AI bisa salah dengan percaya diri</td></tr>
  <tr><td><b>Melatih model sendiri</b> untuk data tempat kerjamu</td><td>Arti turunan, loss, peluang, dan vektor — <b>bukan</b> cara menghitungnya manual</td><td>Bisa menjalankan kode, tapi buntu saat hasilnya aneh dan tidak tahu kenop mana yang harus diputar</td></tr>
  <tr><td><b>Merancang model baru</b> atau membaca makalah penelitian</td><td>Aljabar linear, kalkulus, statistik secara serius</td><td>Hanya bisa menyalin karya orang lain, tidak bisa memperbaikinya</td></tr>
</table>

<div class="callout">
<b>Modul ini menyasar tingkat kedua.</b> Tujuannya bukan membuatmu jago menghitung — komputer jauh lebih cepat. Tujuannya membuatmu <b>bisa membaca rumus dan tahu kenop mana yang berpengaruh</b> saat modelmu berperilaku aneh.
</div>

<h3>Lima saat matematika benar-benar menyelamatkanmu</h3>
<p>Semua ini kejadian sehari-hari yang dialami orang yang melatih model:</p>
<table class="tbl">
  <tr><th>Yang kamu lihat di layar</th><th>Apa yang sebenarnya terjadi</th><th>Bekalnya</th></tr>
  <tr><td>"Loss tidak turun sama sekali, model seperti tidak belajar"</td><td>Langkah belajar terlalu kecil, atau gradien tersumbat di fungsi aktivasi</td><td>Turunan &amp; aktivasi</td></tr>
  <tr><td>"Loss malah meledak jadi NaN"</td><td>Langkah belajar terlalu besar, atau input belum diskalakan</td><td>Turunan &amp; vektor</td></tr>
  <tr><td>"Akurasi 99%, tapi atasanku bilang modelnya tidak berguna"</td><td>Kasus yang dicari hanya 1% — menebak 'tidak ada' saja sudah 99%</td><td>Peluang &amp; metrik</td></tr>
  <tr><td>"Chatbot RAG-ku mengambil dokumen yang tidak nyambung"</td><td>Kemiripan diukur dengan cara yang keliru, atau teks dipotong terlalu panjang</td><td>Vektor &amp; dot product</td></tr>
  <tr><td>"Model regresi malah dilatih dengan loss klasifikasi"</td><td>Fungsi loss tidak cocok dengan jenis tugasnya</td><td>Fungsi loss</td></tr>
</table>
<p>Perhatikan pola pentingnya: <b>tidak satu pun dari masalah ini yang bisa diselesaikan dengan menambah data atau mengganti pustaka.</b> Semuanya butuh tahu apa yang sedang dihitung di balik layar.</p>

<h3>Yang TIDAK perlu kamu lakukan</h3>
<table class="tbl">
  <tr><th>Tidak perlu</th><th>Alasannya</th></tr>
  <tr><td>Menghafal tabel turunan</td><td>Pustaka menghitung turunan sendiri secara otomatis</td></tr>
  <tr><td>Membuktikan teorema</td><td>Itu pekerjaan peneliti, bukan praktisi</td></tr>
  <tr><td>Mengalikan matriks besar dengan tangan</td><td>Satu baris kode selesai dalam mikrodetik</td></tr>
  <tr><td>Menguasai semuanya sebelum mulai coding</td><td>Justru sebaliknya: kode dulu, lalu balik ke rumus saat menemui masalah</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Jebakan yang umum:</b> menunda praktik sampai "matematikanya beres dulu". Banyak orang berhenti di situ. Cara yang lebih berhasil: pelajari secukupnya agar rumus <b>terbaca</b>, lalu kembali ke modul ini setiap kali menemui istilah yang tidak kamu pahami di lapangan.
</div>

<h3>Peta modul ini — apa yang dibuka tiap pelajaran</h3>
<table class="tbl">
  <tr><th>Pelajaran</th><th>Membuat kamu paham…</th></tr>
  <tr><td><b>Membaca Simbol</b></td><td>Arti f(x), Σ, α, σ, ŷ — supaya rumus di mana pun berhenti terasa menakutkan</td></tr>
  <tr><td><b>Vektor &amp; Dot Product</b></td><td>Bagaimana kata dan dokumen menjadi angka, dan bagaimana pencarian RAG menilai "mirip"</td></tr>
  <tr><td><b>Turunan &amp; Gradient Descent</b></td><td>Bagaimana model belajar, dan kenapa learning rate adalah kenop terpenting</td></tr>
  <tr><td><b>Fungsi Aktivasi &amp; Loss</b></td><td>Apa yang sebenarnya dikejar model saat dilatih, dan cara memilih lapisan keluaran</td></tr>
  <tr><td><b>Sigmoid, ReLU &amp; Kawan-Kawan</b></td><td>Kenapa jaringan dalam dulu gagal dilatih, dan kenapa satu fungsi sederhana mengubah segalanya</td></tr>
  <tr><td><b>Probabilitas untuk AI</b></td><td>Kenapa akurasi menipu, dan apa arti angka <i>temperature</i> pada chatbot</td></tr>
</table>

<h3>Kalau waktumu sangat terbatas</h3>
<p>Ini urutan minimum yang memberi manfaat paling besar per menit belajar:</p>
<ol>
  <li><b>Arti simbol</b> — tanpa ini, semua bacaan lain jadi lambat</li>
  <li><b>Arti turunan</b> (kemiringan, arah menurun) — bukan cara menghitungnya</li>
  <li><b>Peluang dasar &amp; metrik</b> — agar tidak tertipu akurasi</li>
  <li><b>Dot product</b> — begitu kamu menyentuh embedding atau RAG</li>
</ol>

<div class="callout">
<b>💡 Cara membaca modul ini.</b> Setiap pelajaran dimulai dari analogi sehari-hari, lalu satu contoh hitung kecil, lalu demo yang bisa kamu geser sendiri. Kalau ada bagian yang terasa berat, lewati dulu bagian rumusnya dan mainkan demonya — sering kali pemahamannya justru datang dari situ.
</div>
`,
          keyPoints: [
            "Untuk sekadar memakai alat AI, matematika hampir tidak dibutuhkan; yang penting tahu batasnya.",
            "Untuk melatih model sendiri, yang dibutuhkan adalah ARTI turunan, loss, peluang, dan vektor — bukan kemampuan menghitung manual.",
            "Untuk merancang model baru atau membaca makalah, dibutuhkan aljabar linear, kalkulus, dan statistik secara serius.",
            "Masalah umum seperti loss tidak turun, loss NaN, akurasi menipu, dan RAG salah ambil dokumen tidak bisa diselesaikan dengan menambah data — semuanya butuh paham yang dihitung di balik layar.",
            "Tidak perlu menghafal tabel turunan, membuktikan teorema, atau menghitung matriks manual.",
            "Jangan menunda praktik sampai matematikanya beres; kode dulu, lalu kembali ke rumus saat menemui masalah.",
          ],
          practice: [
            { type: "choice", q: "Model deteksi penipuan punya akurasi 99%, padahal penipuan hanya 1% dari transaksi. Apa yang pertama kamu periksa?", options: ["Precision & recall untuk kelas penipuan", "Menambah jumlah lapisan model", "Mengganti pustaka ke yang lebih baru"], answer: 0, hint: "Menebak 'bukan penipuan' terus-menerus sudah menghasilkan 99%.", solution: "Pada data timpang, akurasi menipu. Yang bermakna adalah seberapa banyak penipuan yang tertangkap (recall) dan seberapa tepat penandaannya (precision)." },
            { type: "choice", q: "Loss model berubah menjadi NaN di langkah-langkah pertama. Bekal matematika mana yang paling membantu?", options: ["Memahami learning rate & skala input", "Memahami pembuktian teorema limit", "Memahami cara mengalikan matriks manual"], answer: 0, hint: "Apa yang membuat angka meledak saat melangkah?", solution: "Langkah yang terlalu besar atau input bernilai sangat besar membuat perhitungan meledak. Ini soal turunan & penskalaan, bukan soal teorema." },
          ],
          quiz: [
            {
              q: "Apa tujuan utama belajar matematika di modul ini?",
              options: [
                "Bisa membaca rumus dan tahu kenop mana yang berpengaruh saat model bermasalah",
                "Bisa menghitung turunan dan perkalian matriks lebih cepat daripada komputer",
                "Bisa membuktikan teorema agar hasil model dijamin selalu benar",
                "Bisa menghafal semua rumus sebelum boleh menulis baris kode pertama",
              ],
              answer: 0,
              explain: "Perhitungannya dikerjakan pustaka; yang tidak bisa digantikan adalah penilaianmu saat hasilnya aneh.",
            },
            {
              q: "Seseorang hanya ingin memakai ChatGPT untuk pekerjaan sehari-hari. Apa yang paling perlu ia pahami?",
              options: [
                "Batas alatnya — bahwa AI bisa salah dengan sangat percaya diri",
                "Turunan parsial dan aturan rantai pada jaringan dalam",
                "Cara menurunkan rumus backpropagation dari awal",
                "Aljabar linear untuk perkalian matriks berukuran besar",
              ],
              answer: 0,
              explain: "Untuk tingkat pemakai, matematika hampir tidak dibutuhkan; kesadaran akan batas alat jauh lebih berharga.",
            },
            {
              q: "Kenapa menunda praktik sampai 'matematikanya beres dulu' tidak dianjurkan?",
              options: [
                "Karena banyak orang berhenti di situ; rumus lebih mudah saat bertemu masalah nyata",
                "Karena matematika sama sekali tidak dipakai dalam pekerjaan machine learning",
                "Karena pustaka modern akan menolak berjalan bila penggunanya paham matematika",
                "Karena rumus AI berubah setiap tahun sehingga tidak ada gunanya dipelajari",
              ],
              answer: 0,
              explain: "Urutan yang berhasil: kode dulu, lalu kembali ke rumus saat menemui istilah yang membingungkan.",
            },
            {
              q: "Chatbot RAG mengambil dokumen yang tidak nyambung dengan pertanyaan. Bekal mana yang paling relevan?",
              options: [
                "Vektor & dot product, karena kemiripan dokumen diukur dari situ",
                "Fungsi loss, karena dokumen dipilih dengan meminimalkan loss",
                "Faktor diskon, karena dokumen lama bernilai lebih rendah",
                "Turunan, karena pencarian dokumen memakai gradient descent",
              ],
              answer: 0,
              explain: "Pencarian RAG menilai kemiripan arah vektor antara pertanyaan dan potongan dokumen.",
            },
          ],
        },
        {
          id: "ai-mat-0",
          title: "Membaca Simbol Matematika",
          duration: "14 menit",
          content: `
<p>Sebelum menyentuh rumus apa pun, kita bereskan dulu hal yang sering bikin orang menyerah: <b>simbolnya</b>. Kalau kamu tahu artinya, rumus berubah dari "sihir menakutkan" jadi <b>kalimat biasa</b>.</p>

<h3>1. Apa itu fungsi? Arti f dan f(x)</h3>
<div class="callout">
<b>Fungsi = mesin.</b> Kamu masukkan sesuatu, keluar sesuatu.
<ul>
  <li><b>f</b> = <b>nama</b> mesinnya. Cuma nama! Bisa juga dinamai g, h, atau apa saja.</li>
  <li><b>x</b> = <b>bahan</b> yang dimasukkan (input).</li>
  <li><b>f(x)</b> = <b>hasil</b> yang keluar (output). Dibaca <b>"f dari x"</b>.</li>
</ul>
<b>Penting:</b> f(x) <b>BUKAN</b> "f dikali x". Kurung di sini artinya "diberi masukan", bukan perkalian.
</div>

<p>Contoh: <b>f(x) = 2x + 1</b> artinya "mesin f: kalikan bahannya dengan 2, lalu tambah 1".</p>
<pre class="code">f(3) = 2×3 + 1 = 7
f(10) = 2×10 + 1 = 21</pre>

<h3>Coba sendiri — lihat "mesin" bekerja 👇</h3>
<div data-demo="js-playground">// Fungsi itu mesin: masukkan x, keluar f(x)
function f(x) {
  return 2 * x + 1;   // aturannya: kalikan 2, lalu tambah 1
}

[0, 1, 3, 5, 10].forEach(function(x){
  console.log("f(" + x + ")  =  2 x " + x + " + 1  =  " + f(x));
});

console.log("-----");
console.log("Huruf f cuma NAMA mesinnya, x adalah bahan yang dimasukkan.");
console.log("Ubah aturannya jadi x * x lalu jalankan lagi - itu jadi mesin kuadrat.");</div>

<h3>2. Tanda petik: f'(x) artinya turunan</h3>
<div class="callout">
<b>f'(x)</b> (dibaca "f aksen x") = <b>turunan</b> dari f. Ini <b>mesin lain</b> yang memberitahu <b>seberapa cepat</b> hasil f berubah. Tanda petik itu bukan perkalian atau pangkat — cuma penanda "ini turunannya".
</div>

<h3>3. Simbol penjumlahan: Σ</h3>
<div class="callout">
<b>Σ</b> (huruf Yunani "sigma" besar) artinya sederhana: <b>"jumlahkan semuanya"</b>.<br><br>
Σ aᵢ artinya: jumlahkan seluruh anggota a. Kalau a = [2, 5, 7], maka Σ aᵢ = 2+5+7 = <b>14</b>.<br>
Huruf kecil <b>i</b> di bawah cuma penanda urutan: a₁, a₂, a₃ = anggota ke-1, ke-2, ke-3.
</div>

<h3>4. Huruf Yunani yang sering muncul</h3>
<table class="tbl">
  <tr><th>Simbol</th><th>Dibaca</th><th>Biasanya berarti</th></tr>
  <tr><td><b>Σ</b></td><td>sigma besar</td><td>Jumlahkan semua</td></tr>
  <tr><td><b>σ</b></td><td>sigma kecil</td><td>Nama fungsi sigmoid (di AI)</td></tr>
  <tr><td><b>α</b></td><td>alpha</td><td>Learning rate (besar langkah belajar)</td></tr>
  <tr><td><b>θ</b></td><td>theta</td><td>Sudut, atau kumpulan parameter model</td></tr>
  <tr><td><b>Δ</b></td><td>delta</td><td>Perubahan / selisih</td></tr>
</table>
<div class="callout warn">
<b>Kenapa pakai huruf Yunani?</b> Bukan untuk menyulitkan — hanya karena huruf biasa (a, b, c, x, y) sudah terpakai untuk hal lain. Anggap saja seperti nama orang: σ hanyalah "nama panggilan" sebuah fungsi.
</div>

<h3>5. Simbol lain yang akan kamu temui</h3>
<table class="tbl">
  <tr><th>Simbol</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>xⁿ</b></td><td>x dipangkatkan n (dikali dirinya n kali)</td><td>2³ = 2×2×2 = 8</td></tr>
  <tr><td><b>√x</b></td><td>akar: angka yang bila dikuadratkan jadi x</td><td>√25 = 5</td></tr>
  <tr><td><b>e</b></td><td>bilangan tetap ≈ 2,718 (muncul di pertumbuhan alami)</td><td>e⁰ = 1</td></tr>
  <tr><td><b>log</b></td><td>kebalikan pangkat: "berapa kali dikalikan?"</td><td>log₁₀(100) = 2</td></tr>
  <tr><td><b>|a|</b></td><td>panjang (besar) dari a</td><td>|[3,4]| = 5</td></tr>
  <tr><td><b>ŷ</b></td><td>"y topi" = <b>tebakan</b> model</td><td>y = jawaban benar, ŷ = tebakan</td></tr>
  <tr><td><b>P(A)</b></td><td>peluang kejadian A</td><td>P(gambar) = 0,5</td></tr>
  <tr><td><b>P(A|B)</b></td><td>peluang A <b>bila diketahui</b> B (garis tegak = "bila diketahui")</td><td>P(sakit | tes positif)</td></tr>
  <tr><td><b>a · b</b></td><td>dot product (dijelaskan di pelajaran berikutnya)</td><td>—</td></tr>
</table>

<div class="callout">
<b>Cara membaca rumus yang benar:</b> jangan baca sekaligus. Pecah jadi potongan, terjemahkan tiap simbol ke bahasa sehari-hari, lalu susun ulang jadi kalimat. Contoh:<br><br>
<b>bobot_baru = bobot_lama − α × gradien</b><br>
→ <i>"nilai baru = nilai lama, dikurangi (besar langkah × arah kesalahan)"</i>. Ternyata cuma kalimat biasa.
</div>

<div class="callout warn">
<b>Bekal untuk pelajaran berikutnya:</b> kembalilah ke halaman ini kapan saja kalau bertemu simbol yang lupa artinya. Tidak ada yang perlu dihafal — cukup tahu di mana mencarinya.
</div>
`,
          keyPoints: [
            "Fungsi = mesin: f adalah namanya, x bahan masuk, f(x) hasil keluar. f(x) BUKAN f dikali x.",
            "f'(x) (f aksen) = turunan, yaitu seberapa cepat hasil f berubah.",
            "Σ (sigma besar) artinya 'jumlahkan semua'; huruf i cuma penanda urutan anggota.",
            "Huruf Yunani hanyalah nama: α = learning rate, σ = fungsi sigmoid, Δ = perubahan.",
            "ŷ = tebakan model, y = jawaban benar; P(A|B) = peluang A bila diketahui B.",
            "Cara membaca rumus: pecah, terjemahkan tiap simbol, susun jadi kalimat biasa.",
          ],
          practice: [
            { type: "number", q: "Jika f(x) = 2x + 1, berapa nilai f(4)?", answer: 9, tol: 0.1, hint: "Ganti x dengan 4: 2×4 + 1.", solution: "2×4 + 1 = 9." },
            { type: "number", q: "Jika a = [2, 5, 7], berapa hasil Σ aᵢ (jumlahkan semua)?", answer: 14, tol: 0.1, hint: "Σ artinya jumlahkan semuanya.", solution: "2 + 5 + 7 = 14." },
          ],
          quiz: [
            {
              q: "Apa arti f(x)?",
              options: [
                "Hasil dari mesin bernama f ketika diberi masukan x",
                "Hasil perkalian antara bilangan f dengan bilangan x",
                "Nama sebuah variabel baru yang terdiri dari f dan x",
                "Fungsi f yang dipangkatkan dengan bilangan x",
              ],
              answer: 0,
              explain:
                "Kurung di sini berarti 'diberi masukan', bukan perkalian. f adalah nama fungsinya.",
            },
            {
              q: "Simbol Σ (sigma besar) artinya?",
              options: [
                "Kalikan semuanya",
                "Jumlahkan semuanya",
                "Bagi semuanya",
                "Akar kuadrat",
              ],
              answer: 1,
              explain: "Σ adalah perintah menjumlahkan seluruh anggota.",
            },
            {
              q: "Apa arti tanda petik pada f'(x)?",
              options: [
                "Penanda bahwa itu adalah turunan dari fungsi f",
                "Penanda bahwa fungsi f sudah diubah nilainya",
                "Penanda bahwa f adalah fungsi kebalikan dari yang asli",
                "Penanda bahwa hasilnya harus dibaca dalam satuan menit",
              ],
              answer: 0,
              explain: "Tanda aksen menandakan turunan — seberapa cepat f berubah.",
            },
          ],
        },
        {
          id: "ai-mat-1",
          title: "Vektor & Dot Product",
          duration: "13 menit",
          content: `
<p>Semua yang dilakukan AI — mengenali gambar, memahami teks, mencari dokumen — pada akhirnya adalah <b>operasi pada vektor</b>. Mari pahami dari nol.</p>

<h3>Fundamental: vektor itu cuma daftar angka</h3>
<div class="callout">
<b>Vektor</b> = deretan angka yang mewakili sesuatu. Contoh, sebuah rumah bisa diwakili vektor <b>[120, 3, 2]</b> = (luas 120 m², 3 kamar, 2 lantai). Di AI, sebuah kata atau kalimat diwakili vektor berisi ratusan angka — itulah <b>embedding</b>.
</div>

<h3>Dot product (hasil kali titik)</h3>
<p>Cara mengalikan dua vektor: <b>kalikan pasangan angka di posisi yang sama, lalu jumlahkan</b>.</p>
<pre class="code">a = [3, 4, 0]
b = [4, 3, 0]

a · b = (3×4) + (4×3) + (0×0)
      = 12 + 12 + 0
      = 24</pre>

<h3>Panjang vektor (norm)</h3>
<p>Memakai <b>Teorema Pythagoras</b> yang diperluas:</p>
<pre class="code">|a| = akar( 3² + 4² + 0² ) = akar(25) = 5</pre>

<h3>Cosine similarity — inti pencarian RAG</h3>
<div class="callout">
<b>Rumus:</b> cos(θ) = (a · b) ÷ (|a| × |b|)<br><br>
Hasilnya antara <b>−1</b> (berlawanan) sampai <b>1</b> (searah/sangat mirip). Pembagian dengan panjang membuat <b>ukuran vektor tidak berpengaruh</b> — yang dinilai hanya <b>arah</b>, yaitu maknanya.
</div>

<h3>Coba sendiri — hitung langkah demi langkah 👇</h3>
<div data-demo="js-playground">// Dot product & cosine similarity, langkah demi langkah
const a = [3, 4, 0];
const b = [4, 3, 0];

let dot = 0;
a.forEach(function(v, i){ dot = dot + v * b[i]; });

let sumA = 0, sumB = 0;
a.forEach(function(v){ sumA = sumA + v*v; });
b.forEach(function(v){ sumB = sumB + v*v; });
const panjangA = Math.sqrt(sumA);
const panjangB = Math.sqrt(sumB);

console.log("a . b (dot product) = " + dot);
console.log("panjang a = " + panjangA.toFixed(3));
console.log("panjang b = " + panjangB.toFixed(3));
console.log("cosine = dot / (|a| x |b|) = " + (dot/(panjangA*panjangB)).toFixed(4));
console.log("Mendekati 1 = sangat mirip maknanya.");</div>

<div class="callout">
<b>Kenapa penting:</b> satu <b>neuron</b> pada dasarnya menghitung dot product antara input dan bobotnya. Jadi rumus sederhana ini dijalankan <b>miliaran kali</b> di dalam sebuah LLM.
</div>
`,
          keyPoints: [
            "Vektor = deretan angka yang mewakili sesuatu; embedding adalah vektor makna.",
            "Dot product: kalikan pasangan angka seposisi lalu jumlahkan.",
            "Panjang vektor (norm) = akar dari jumlah kuadrat komponennya (Pythagoras).",
            "Cosine similarity = dot product ÷ (panjang a × panjang b); menilai arah/makna, bukan ukuran.",
            "Satu neuron pada dasarnya menghitung dot product input × bobot.",
          ],
          practice: [
            { type: "number", q: "Hitung dot product dari a = [2, 3] dan b = [4, 5].", answer: 23, tol: 0.5, hint: "(2×4) + (3×5).", solution: "8 + 15 = 23." },
            { type: "number", q: "Berapa panjang (norm) vektor [3, 4]?", answer: 5, tol: 0.1, hint: "Akar dari (3² + 4²).", solution: "akar(9+16) = akar(25) = 5." },
          ],
          quiz: [
            {
              q: "Bagaimana cara menghitung dot product dua vektor?",
              options: [
                "Kalikan pasangan angka pada posisi yang sama, lalu jumlahkan",
                "Jumlahkan seluruh angka kedua vektor lalu kalikan hasilnya",
                "Kurangkan tiap pasangan angka lalu ambil nilai mutlaknya",
                "Bagi tiap angka vektor pertama dengan vektor kedua",
              ],
              answer: 0,
              explain: "Dot product = jumlah dari perkalian komponen seposisi.",
            },
            {
              q: "Kenapa cosine similarity dibagi dengan panjang kedua vektor?",
              options: [
                "Agar ukuran vektor tidak berpengaruh, yang dinilai hanya arahnya",
                "Agar hasilnya selalu berupa bilangan bulat yang mudah dibaca",
                "Agar perhitungannya berjalan lebih cepat pada data besar",
                "Agar vektor dengan panjang berbeda tetap bisa dijumlahkan",
              ],
              answer: 0,
              explain:
                "Normalisasi membuat perbandingan murni soal arah, bukan besar vektornya.",
            },
          ],
        },
        {
          id: "ai-mat-2",
          title: "Turunan & Gradient Descent",
          duration: "13 menit",
          content: `
<p>Di modul Fundamental kamu sudah menjalankan gradient descent. Sekarang kita bedah <b>matematikanya</b>.</p>

<h3>Fundamental: turunan = kemiringan</h3>
<div class="callout">
<b>Turunan</b> menjawab: <i>"kalau x digeser sedikit, f(x) berubah seberapa cepat?"</i> Secara visual, itu <b>kemiringan garis singgung</b> di suatu titik. Kemiringan <b>positif</b> = naik ke kanan; <b>negatif</b> = turun; <b>nol</b> = datar (puncak atau lembah).
</div>

<h3>Aturan turunan yang dipakai AI</h3>
<table class="tbl">
  <tr><th>Fungsi</th><th>Turunannya</th></tr>
  <tr><td>f(x) = x²</td><td>f'(x) = 2x</td></tr>
  <tr><td>f(x) = xⁿ</td><td>f'(x) = n·xⁿ⁻¹</td></tr>
  <tr><td>f(x) = c (konstanta)</td><td>f'(x) = 0</td></tr>
</table>

<h3>Aturan rantai (chain rule) — jantung backpropagation</h3>
<div class="callout">
Kalau sebuah nilai melewati <b>beberapa lapisan</b> fungsi, turunannya dikalikan berantai:<br>
<b>(f(g(x)))' = f'(g(x)) × g'(x)</b><br><br>
Inilah cara jaringan saraf mengetahui <b>berapa besar andil tiap bobot</b> terhadap kesalahan akhir, walau bobot itu berada jauh di lapisan awal. Proses itu disebut <b>backpropagation</b>.
</div>

<h3>Rumus gradient descent</h3>
<div class="callout">
<b>bobot_baru = bobot_lama − α × gradien</b><br><br>
<ul>
  <li><b>gradien</b> = arah yang membuat kesalahan <b>naik</b> → karena itu kita <b>kurangi</b> (tanda minus) agar turun.</li>
  <li><b>α</b> (alpha) = <b>learning rate</b>, besar langkah.</li>
</ul>
</div>

<h3>Contoh hitung tangan</h3>
<pre class="code">f(x) = (x − 3)²         -> turunannya f'(x) = 2(x − 3)
Mulai dari x = 0, α = 0,1

Langkah 1: gradien = 2(0 − 3) = −6
           x = 0 − 0,1 × (−6) = 0,6
Langkah 2: gradien = 2(0,6 − 3) = −4,8
           x = 0,6 − 0,1 × (−4,8) = 1,08
... terus mendekati x = 3 (titik minimum)</pre>

<div class="callout warn">
<b>Peran learning rate (α):</b> terlalu <b>besar</b> → langkah melompati lembah, bisa gagal konvergen. Terlalu <b>kecil</b> → sangat lambat. Inilah salah satu "kenop" terpenting saat melatih model.
</div>
`,
          keyPoints: [
            "Turunan = kemiringan; menjawab seberapa cepat f(x) berubah saat x digeser sedikit.",
            "Aturan dasar: (x²)' = 2x, (xⁿ)' = n·xⁿ⁻¹, (konstanta)' = 0.",
            "Aturan rantai (f(g(x)))' = f'(g(x)) × g'(x) adalah jantung backpropagation.",
            "Gradient descent: bobot_baru = bobot_lama − α × gradien; α = learning rate.",
          ],
          practice: [
            { type: "number", q: "Jika f(x) = (x − 3)², berapa nilai turunannya saat x = 0? (rumus: 2(x−3))", answer: -6, tol: 0.1, hint: "Masukkan x = 0 ke 2(x − 3).", solution: "2(0 − 3) = −6." },
            { type: "number", q: "Dengan gradien −6 dan learning rate 0,1, berapa x baru bila x lama = 0? (rumus: x − α×gradien)", answer: 0.6, tol: 0.05, hint: "0 − 0,1 × (−6).", solution: "0 + 0,6 = 0,6." },
          ],
          quiz: [
            {
              q: "Kenapa rumus gradient descent memakai tanda MINUS?",
              options: [
                "Karena gradien menunjuk arah kesalahan NAIK, jadi kita berlawanan",
                "Karena bobot model harus selalu bernilai negatif agar stabil",
                "Karena tanda minus membuat langkahnya menjadi lebih kecil",
                "Karena loss selalu bernilai negatif sehingga perlu dibalik",
              ],
              answer: 0,
              explain: "Bergerak berlawanan gradien menurunkan nilai loss.",
            },
            {
              q: "Aturan rantai (chain rule) dipakai untuk apa di neural network?",
              options: [
                "Menghitung andil tiap bobot terhadap kesalahan akhir",
                "Menggabungkan beberapa lapisan menjadi satu lapisan tunggal",
                "Menentukan jumlah lapisan yang sebaiknya dipakai model",
                "Mengurutkan data latih agar polanya lebih mudah dipelajari",
              ],
              answer: 0,
              explain:
                "Chain rule menyebarkan turunan mundur melewati lapisan-lapisan jaringan.",
            },
          ],
        },
        {
          id: "ai-mat-3",
          title: "Fungsi Aktivasi & Fungsi Loss",
          duration: "13 menit",
          content: `
<p>Dua keluarga rumus yang muncul di hampir semua model: <b>aktivasi</b> (mengolah sinyal neuron) dan <b>loss</b> (mengukur kesalahan).</p>

<h3>Kenapa perlu fungsi aktivasi?</h3>
<div class="callout warn">
Tanpa aktivasi, menumpuk banyak lapisan itu <b>sia-sia</b> — gabungan operasi linear tetaplah linear, sehingga 100 lapisan sama saja dengan 1 lapisan. Fungsi aktivasi menambahkan <b>ketaklinieran</b>, sehingga jaringan bisa menangkap pola rumit.
</div>

<table class="tbl">
  <tr><th>Fungsi</th><th>Rumus</th><th>Keluaran</th><th>Dipakai untuk</th></tr>
  <tr><td><b>Sigmoid</b></td><td>σ(x) = 1 ÷ (1 + e⁻ˣ)</td><td>0 sampai 1</td><td>Peluang (ya/tidak)</td></tr>
  <tr><td><b>ReLU</b></td><td>max(0, x)</td><td>0 atau x</td><td>Lapisan tersembunyi (paling umum)</td></tr>
  <tr><td><b>Softmax</b></td><td>eᶻⁱ ÷ Σeᶻʲ</td><td>Peluang total 100%</td><td>Memilih 1 dari banyak kelas</td></tr>
</table>

<h3>Coba sendiri — hitung softmax 👇</h3>
<div data-demo="js-playground">// Softmax: mengubah skor mentah menjadi peluang
const skor = [2.0, 1.0, 0.1];

let jumlah = 0;
const eksp = skor.map(function(s){ const e = Math.exp(s); jumlah = jumlah + e; return e; });

eksp.forEach(function(e, i){
  console.log("skor " + skor[i] + " -> peluang " + (e/jumlah*100).toFixed(1) + "%");
});
console.log("-----");
console.log("Totalnya selalu 100% - itulah gunanya softmax.");
console.log("Perhatikan: selisih skor kecil bisa jadi selisih peluang besar (efek eksponensial).");</div>

<p>Perbandingan lengkapnya — termasuk tanh, Leaky ReLU, GELU, dan alasan ReLU mengubah sejarah deep learning — ada di <b>pelajaran berikutnya</b>.</p>

<h3>Fungsi loss — mengukur kesalahan</h3>
<table class="tbl">
  <tr><th>Loss</th><th>Rumus</th><th>Untuk</th></tr>
  <tr><td><b>MSE</b> (Mean Squared Error)</td><td>(1/n) × Σ(y − ŷ)²</td><td>Regresi (menebak angka)</td></tr>
  <tr><td><b>Cross-Entropy</b></td><td>− Σ y × log(ŷ)</td><td>Klasifikasi (menebak kategori) &amp; LLM</td></tr>
</table>
<p>Keterangan: <b>y</b> = jawaban benar, <b>ŷ</b> = tebakan model, <b>n</b> = jumlah data.</p>

<div class="callout">
<b>Kenapa MSE dikuadratkan?</b> Dua alasan: (1) agar kesalahan positif &amp; negatif tidak saling menghapus, dan (2) agar kesalahan <b>besar dihukum lebih berat</b> — meleset 10 dianggap 100× lebih buruk daripada meleset 1.
</div>

<div class="callout warn">
<b>Kaitan ke LLM:</b> saat model bahasa "menebak kata berikutnya", ia menghasilkan skor untuk tiap kemungkinan token, mengubahnya jadi peluang lewat <b>softmax</b>, lalu dilatih dengan <b>cross-entropy</b> agar peluang token yang benar makin tinggi.
</div>
`,
          keyPoints: [
            "Tanpa fungsi aktivasi, menumpuk lapisan sia-sia karena gabungan linear tetap linear.",
            "Sigmoid (0–1) untuk peluang; ReLU = max(0,x) paling umum di lapisan tersembunyi; softmax membuat total peluang 100%.",
            "MSE = rata-rata kuadrat selisih (regresi); cross-entropy = −Σ y·log(ŷ) (klasifikasi & LLM).",
            "MSE dikuadratkan agar error tak saling menghapus & kesalahan besar dihukum lebih berat.",
          ],
          practice: [
            { type: "number", q: "Berapa hasil ReLU dari −5? (rumus: max(0, x))", answer: 0, tol: 0.01, hint: "max(0, −5).", solution: "ReLU membuang nilai negatif → 0." },
            { type: "number", q: "Jawaban benar y = 10, tebakan model ŷ = 7. Berapa kesalahan kuadratnya (y − ŷ)²?", answer: 9, tol: 0.1, hint: "(10 − 7)².", solution: "3² = 9." },
          ],
          quiz: [
            {
              q: "Kenapa neural network butuh fungsi aktivasi?",
              options: [
                "Menambahkan ketaklinieran; tanpanya banyak lapisan sama saja satu",
                "Mempercepat perhitungan dengan menyederhanakan angka besar",
                "Mencegah bobot model bernilai negatif saat proses pelatihan",
                "Menyamakan skala keluaran agar jumlahnya selalu tepat satu",
              ],
              answer: 0,
              explain:
                "Gabungan operasi linear tetap linear; aktivasi memungkinkan pola rumit dipelajari.",
            },
            {
              q: "Fungsi apa yang mengubah skor mentah menjadi peluang bertotal 100%?",
              options: ["ReLU", "Softmax", "MSE", "Turunan"],
              answer: 1,
              explain: "Softmax menormalkan skor menjadi distribusi peluang.",
            },
          ],
        },
        {
          id: "ai-mat-5",
          title: "Sigmoid, ReLU & Kawan-Kawan — Memilih Fungsi Aktivasi",
          duration: "15 menit",
          content: `
<p>Di pelajaran sebelumnya kamu melihat bahwa tanpa fungsi aktivasi, menumpuk seratus lapisan sama saja dengan satu lapisan. Sekarang kita bandingkan fungsi-fungsinya satu per satu — karena pilihan ini pernah menjadi <b>penghalang terbesar</b> perkembangan deep learning, dan sampai sekarang masih menentukan apakah modelmu bisa dilatih atau macet.</p>

<h3>Fundamental: aktivasi adalah "keran" di setiap neuron</h3>
<div class="callout">
🚰 Setiap neuron menjumlahkan sinyal masuk, lalu melewatkannya ke sebuah <b>keran</b>. Keran itulah fungsi aktivasi. Ia menentukan dua hal:<br><br>
1. <b>Berapa nilai yang diteruskan ke depan</b> saat model menebak<br>
2. <b>Berapa besar sinyal perbaikan yang bisa lewat mundur</b> saat model belajar — dan ini ditentukan oleh <b>turunannya</b><br><br>
Kalau turunannya nyaris nol, keran itu tertutup: sinyal belajar tidak bisa lewat, dan lapisan-lapisan di belakangnya berhenti memperbaiki diri.
</div>

<h3>1. Sigmoid — si kurva S</h3>
<p style="text-align:center"><b>σ(x) = 1 ÷ (1 + e⁻ˣ)</b></p>
<table class="tbl">
  <tr><th>x</th><th>σ(x)</th><th>Turunan σ′(x)</th></tr>
  <tr><td>−6</td><td>0,0025</td><td class="bad-cell">0,0025</td></tr>
  <tr><td>0</td><td>0,5</td><td class="ok-cell">0,25 (paling besar)</td></tr>
  <tr><td>2</td><td>0,881</td><td>0,105</td></tr>
  <tr><td>6</td><td>0,9975</td><td class="bad-cell">0,0025</td></tr>
</table>
<p>Kelebihannya jelas: keluarannya selalu di antara 0 dan 1, sehingga bisa dibaca sebagai <b>peluang</b>. Itulah kenapa sigmoid masih menjadi pilihan di <b>lapisan keluaran</b> untuk pertanyaan ya/tidak.</p>

<div data-demo="aktivasi"></div>

<h3>Masalah besar sigmoid: sinyal belajar yang menguap</h3>
<div class="callout warn">
Perhatikan angka tadi: turunan sigmoid <b>paling besar pun hanya 0,25</b>. Saat sinyal belajar dikirim mundur lewat aturan rantai, setiap lapisan mengalikannya dengan angka itu:<br><br>
2 lapisan: 0,25² = 0,0625<br>
4 lapisan: 0,25⁴ ≈ 0,0039<br>
10 lapisan: 0,25¹⁰ ≈ <b>0,00000095</b><br><br>
Sinyal yang sampai ke lapisan pertama tinggal <b>sepersejuta</b>. Lapisan awal praktis berhenti belajar. Inilah <b>vanishing gradient</b> — alasan jaringan dalam sangat sulit dilatih sampai awal 2010-an.
</div>

<h3>2. Tanh — sigmoid yang digeser</h3>
<p>Bentuknya sama-sama S, tapi keluarannya <b>−1 sampai 1</b> dan berpusat di nol, sehingga pelatihan biasanya lebih stabil. Turunan terbesarnya 1, lebih baik daripada 0,25. Tapi kedua ujungnya <b>tetap jenuh</b>, sehingga masalah dasarnya belum hilang. Tanh masih dipakai di dalam gerbang LSTM.</p>

<h3>3. ReLU — solusi sederhana yang mengubah segalanya</h3>
<p style="text-align:center"><b>ReLU(x) = maks(0, x)</b> — "kalau negatif jadikan nol, kalau positif biarkan apa adanya"</p>
<table class="tbl">
  <tr><th>Kelebihan</th><th>Penjelasan</th></tr>
  <tr><td><b>Turunannya tepat 1</b> di sisi positif</td><td>Sinyal belajar diteruskan utuh, berapa pun dalamnya jaringan — masalah menguap teratasi</td></tr>
  <tr><td><b>Sangat murah dihitung</b></td><td>Hanya membandingkan dengan nol; tidak ada eksponensial seperti sigmoid</td></tr>
  <tr><td><b>Menghasilkan kejarangan</b></td><td>Sebagian neuron bernilai nol, membuat jaringan lebih efisien</td></tr>
</table>
<p>Perubahan sesederhana ini adalah salah satu kunci lompatan deep learning pada 2012, ketika model pengenal gambar AlexNet memakainya dan mengalahkan pendekatan lama secara telak.</p>

<div class="callout warn">
<b>⚠️ Harga yang dibayar: neuron mati (dead ReLU).</b> Di sisi negatif, keluarannya nol <b>dan</b> turunannya nol. Neuron yang terlanjur selalu menerima nilai negatif tidak akan pernah diperbaiki lagi — ia mati permanen. Penyebab paling sering: <b>learning rate terlalu besar</b> yang mendorong bobot terlalu jauh ke negatif sekaligus.
</div>

<h3>4. Leaky ReLU &amp; GELU — penyempurnaan</h3>
<table class="tbl">
  <tr><th>Fungsi</th><th>Idenya</th><th>Dipakai di</th></tr>
  <tr><td><b>Leaky ReLU</b></td><td>Sisi negatif tidak benar-benar nol, tapi dikalikan 0,01 — sehingga neuron mati bisa hidup kembali</td><td>Pengganti ReLU saat banyak neuron mati</td></tr>
  <tr><td><b>GELU</b> / SiLU</td><td>Melengkung halus di sekitar nol; sebagian kecil nilai negatif dibiarkan lewat</td><td>Hampir semua Transformer modern (GPT, BERT)</td></tr>
</table>

<h3>Cara memilih — tabel yang bisa kamu pakai langsung</h3>
<table class="tbl">
  <tr><th>Posisi di jaringan</th><th>Pilihan</th><th>Alasan</th></tr>
  <tr><td>Lapisan tersembunyi (umum)</td><td class="ok-cell"><b>ReLU</b></td><td>Cepat, sederhana, dan hampir selalu bekerja</td></tr>
  <tr><td>Lapisan tersembunyi Transformer</td><td><b>GELU</b></td><td>Sedikit lebih baik pada model bahasa besar</td></tr>
  <tr><td>Gerbang di dalam LSTM</td><td><b>Sigmoid &amp; tanh</b></td><td>Gerbang memang butuh nilai 0–1 sebagai "seberapa terbuka"</td></tr>
  <tr><td>Keluaran: ya/tidak</td><td><b>Sigmoid</b> (1 neuron)</td><td>Hasilnya langsung terbaca sebagai peluang</td></tr>
  <tr><td>Keluaran: pilih 1 dari banyak kelas</td><td><b>Softmax</b></td><td>Semua peluang berjumlah 100%</td></tr>
  <tr><td>Keluaran: menebak angka</td><td><b>Tanpa aktivasi</b></td><td>Harga rumah tidak boleh dipaksa masuk rentang 0–1</td></tr>
</table>

<pre class="code">from tensorflow import keras

model = keras.Sequential([
    keras.layers.Input(shape=(20,)),
    keras.layers.Dense(64, activation="relu"),      # tersembunyi: ReLU
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid"),    # keluaran: peluang ya/tidak
])</pre>

<div class="callout">
<b>💡 Jangan tertukar:</b> <b>fungsi aktivasi</b> menentukan bentuk sinyal <i>di dalam</i> jaringan, sedangkan <b>fungsi loss</b> mengukur seberapa salah hasil akhirnya. Keduanya sering disebut bersamaan, tapi perannya berbeda — dan salah memilih salah satunya membuat model gagal belajar dengan gejala yang mirip.
</div>
`,
          keyPoints: [
            "Fungsi aktivasi menentukan nilai yang diteruskan ke depan sekaligus besar sinyal belajar yang bisa lewat mundur (lewat turunannya).",
            "Sigmoid menghasilkan 0–1 sehingga cocok sebagai peluang, tetapi jenuh di kedua ujung dan turunan terbesarnya hanya 0,25.",
            "Karena 0,25 dikalikan berulang tiap lapisan, sinyal belajar menguap pada jaringan dalam — vanishing gradient (0,25¹⁰ ≈ 0,00000095).",
            "Tanh berpusat di nol dan turunan maksimumnya 1, tetapi kedua ujungnya tetap jenuh.",
            "ReLU = maks(0, x): turunannya 1 di sisi positif, murah dihitung, dan menjadi kunci lompatan deep learning 2012.",
            "Kelemahan ReLU adalah neuron mati di sisi negatif, sering dipicu learning rate yang terlalu besar; Leaky ReLU dan GELU memperbaikinya.",
            "Pilihan praktis: ReLU untuk lapisan tersembunyi, GELU untuk Transformer, sigmoid/softmax/tanpa aktivasi untuk keluaran sesuai tugas.",
          ],
          practice: [
            { type: "number", q: "Berapa nilai sigmoid(0)?", answer: 0.5, tol: 0.01, hint: "1 ÷ (1 + e⁰), dan e⁰ = 1.", solution: "1 ÷ (1 + 1) = 0,5 — itulah kenapa 0 berarti 'ragu-ragu' pada keluaran sigmoid." },
            { type: "number", q: "Turunan sigmoid paling besar 0,25. Berapa hasilnya setelah dikalikan berantai 4 lapisan? (4 desimal)", answer: 0.0039, tol: 0.0002, hint: "0,25 × 0,25 × 0,25 × 0,25.", solution: "0,25⁴ = 0,00390625 ≈ 0,0039. Sinyal belajarnya tinggal sekitar 0,4%." },
          ],
          quiz: [
            {
              q: "Kenapa sigmoid menyulitkan pelatihan jaringan yang dalam?",
              options: [
                "Turunannya paling besar 0,25, sehingga sinyal belajar menyusut tiap lapisan",
                "Keluarannya bisa bernilai negatif sehingga bobot menjadi tidak stabil",
                "Perhitungannya memerlukan pembagian dengan nol pada titik tertentu",
                "Bentuknya lurus sehingga tidak menambahkan ketaklinieran apa pun",
              ],
              answer: 0,
              explain: "Sepuluh lapisan membuat sinyal tinggal sekitar sepersejuta — vanishing gradient.",
            },
            {
              q: "Apa keunggulan utama ReLU dibanding sigmoid di lapisan tersembunyi?",
              options: [
                "Turunannya 1 di sisi positif sehingga sinyal belajar diteruskan utuh",
                "Keluarannya selalu di antara 0 dan 1 sehingga bisa dibaca sebagai peluang",
                "Ia melengkung halus sehingga tidak pernah menghasilkan nilai nol",
                "Ia menjamin model tidak akan pernah mengalami overfitting",
              ],
              answer: 0,
              explain: "Selain itu ReLU sangat murah dihitung karena hanya membandingkan dengan nol.",
            },
            {
              q: "Apa itu 'neuron mati' pada ReLU?",
              options: [
                "Neuron yang selalu menerima nilai negatif sehingga keluaran dan turunannya nol terus",
                "Neuron yang bobotnya menjadi tak terhingga karena learning rate terlalu kecil",
                "Neuron yang dihapus otomatis oleh pustaka saat pelatihan berlangsung",
                "Neuron yang keluarannya selalu satu sehingga tidak membedakan masukan",
              ],
              answer: 0,
              explain: "Karena turunannya nol, neuron itu tidak pernah diperbaiki lagi. Leaky ReLU memberinya kemiringan kecil.",
            },
            {
              q: "Model menebak harga rumah (angka bebas). Aktivasi apa yang tepat di lapisan keluaran?",
              options: [
                "Tanpa aktivasi",
                "Sigmoid",
                "Softmax",
                "ReLU pada semua keluaran",
              ],
              answer: 0,
              explain: "Sigmoid akan memaksa hasilnya ke rentang 0–1, dan softmax dipakai untuk memilih satu dari banyak kelas.",
            },
          ],
        },
        {
          id: "ai-mat-4",
          title: "Probabilitas untuk AI",
          duration: "13 menit",
          content: `
<p>AI berpikir dalam <b>peluang</b>. Ini rumus-rumus yang membuatnya bekerja — dan yang menjelaskan kesalahan penalaran paling umum tentang AI.</p>

<h3>Dua aturan dasar</h3>
<table class="tbl">
  <tr><th>Aturan</th><th>Rumus</th><th>Contoh</th></tr>
  <tr><td><b>Perkalian</b> (kejadian bebas)</td><td>P(A dan B) = P(A) × P(B)</td><td>Dua koin sama-sama gambar: ½ × ½ = ¼</td></tr>
  <tr><td><b>Penjumlahan</b> (saling lepas)</td><td>P(A atau B) = P(A) + P(B)</td><td>Dadu keluar 1 atau 2: ⅙ + ⅙ = ⅓</td></tr>
</table>

<h3>Teorema Bayes — memperbarui keyakinan</h3>
<div class="callout">
<b>P(A|B) = P(B|A) × P(A) ÷ P(B)</b><br><br>
Dibaca: "peluang A <b>bila diketahui</b> B". Ini rumus untuk <b>memperbarui keyakinan</b> setelah melihat bukti baru.
</div>

<h3>Contoh penting: kenapa akurasi menipu</h3>
<p>Sebuah tes penyakit punya akurasi <b>99%</b>. Penyakitnya langka: hanya <b>1 dari 1.000</b> orang. Kamu dites <b>positif</b>. Berapa peluang kamu benar-benar sakit?</p>
<pre class="code">Bayangkan 1.000 orang dites:
  Benar-benar sakit  : 1 orang    -> hasil positif (benar)      = 1
  Sehat              : 999 orang  -> 1% salah positif           = ~10

Total hasil positif = 1 + 10 = 11
Peluang benar sakit = 1 / 11 = sekitar 9%</pre>

<div class="callout warn">
<b>Hanya ~9%</b> — padahal tesnya "99% akurat"! Ini disebut <b>base rate fallacy</b>: saat kejadiannya <b>langka</b>, hasil positif lebih sering berasal dari salah-alarm. Inilah alasan matematis mengapa <b>precision</b> &amp; <b>recall</b> lebih berguna daripada akurasi (lihat modul Fundamental).
</div>

<h3>Temperature pada LLM</h3>
<p>Saat LLM memilih kata berikutnya, skor tiap token dibagi dulu dengan <b>temperature (T)</b> sebelum masuk softmax:</p>
<ul>
  <li><b>T rendah</b> (mis. 0,2) → perbedaan peluang menajam → jawaban <b>konsisten &amp; aman</b>.</li>
  <li><b>T tinggi</b> (mis. 1,2) → peluang lebih merata → jawaban <b>lebih bervariasi &amp; kreatif</b> (juga lebih berisiko keliru).</li>
</ul>
`,
          keyPoints: [
            "Aturan perkalian: P(A dan B) = P(A)×P(B); aturan penjumlahan: P(A atau B) = P(A)+P(B).",
            "Teorema Bayes: P(A|B) = P(B|A)×P(A) ÷ P(B) — memperbarui keyakinan setelah melihat bukti.",
            "Base rate fallacy: pada kejadian langka, hasil positif dari tes 99% akurat bisa hanya ~9% benar.",
            "Temperature pada LLM: rendah = konsisten, tinggi = bervariasi/kreatif.",
          ],
          practice: [
            { type: "number", q: "Peluang dua koin adil sama-sama muncul 'gambar'? (dalam %)", answer: 25, tol: 0.5, hint: "P(A) × P(B) = 0,5 × 0,5.", solution: "0,5 × 0,5 = 0,25 = 25%." },
            { type: "choice", q: "Tes 99% akurat untuk penyakit yang menimpa 1 dari 1.000 orang. Kamu positif. Peluang benar-benar sakit paling mendekati?", options: ["99%", "Sekitar 9%", "50%", "1%"], answer: 1, hint: "Bandingkan 1 positif benar dengan ~10 salah-alarm.", solution: "1 ÷ 11 ≈ 9% — inilah base rate fallacy." },
          ],
          quiz: [
            {
              q: "Apa gunanya Teorema Bayes?",
              options: [
                "Memperbarui keyakinan setelah melihat bukti yang baru",
                "Menghitung rata-rata dari sekumpulan peluang yang berbeda",
                "Menentukan peluang dua kejadian terjadi secara bersamaan",
                "Mengubah data kategori menjadi angka agar bisa dihitung",
              ],
              answer: 0,
              explain: "Bayes menggabungkan keyakinan awal dengan bukti baru.",
            },
            {
              q: "Apa efek menaikkan 'temperature' pada LLM?",
              options: [
                "Jawabannya makin bervariasi dan kreatif, tapi lebih berisiko keliru",
                "Jawabannya menjadi lebih panjang dan rinci dari sebelumnya",
                "Model menjawab lebih cepat karena pencariannya dipersempit",
                "Model menjadi lebih hemat token sehingga biayanya turun",
              ],
              answer: 0,
              explain:
                "Temperature tinggi meratakan peluang sehingga pilihan kata lebih beragam.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 6: PERKAKAS: MULAI MENULIS KODE AI ---------------- */
    {
      id: "ai-tools",
      level: "Perkakas",
      title: "Perkakas: Mulai Menulis Kode AI",
      summary: "Bahasa yang dipakai (Python), pustaka wajib NumPy, pandas & scikit-learn, menyiapkan Colab, dan menggambar data sebelum memodelkannya.",
      lessons: [
        {
          id: "ai-tl-1",
          title: "Bahasa Pemrograman untuk AI",
          duration: "13 menit",
          content: `
<p>Sampai di sini kamu sudah paham <b>cara berpikir</b> AI. Sekarang pertanyaan praktisnya: kalau mau benar-benar membuatnya, <b>bahasa apa yang diketik</b>?</p>

<div data-diagram="compare3" data-cols="Bahasa::cara bicara ke komputer::Python|Pustaka::bumbu siap pakai::NumPy, pandas|Kerangka kerja::dapur beserta alurnya::PyTorch" data-caption="Tiga istilah yang sering tertukar"></div>


<h3>Fundamental: bahasa pemrograman itu apa?</h3>
<div class="callout">
Komputer hanya mengerti angka 0 dan 1. <b>Bahasa pemrograman</b> adalah bahasa perantara — kamu menulis perintah yang bisa dibaca manusia, lalu ada penerjemah yang mengubahnya jadi 0 dan 1.<br><br>
Seperti bahasa manusia, ada banyak bahasa pemrograman, dan masing-masing punya "kepribadian": ada yang cepat tapi ribet, ada yang mudah tapi lambat.
</div>

<h3>Jawabannya: Python</h3>
<p>Untuk AI, satu bahasa mendominasi hampir mutlak: <b>Python</b>. Riset, startup, perusahaan besar — hampir semua memakainya.</p>

<div class="callout warn">
<b>Yang mengejutkan:</b> Python justru termasuk bahasa yang <b>lambat</b>. Jadi kenapa menang?<br><br>
Karena kecepatan bukan penentunya. Bagian berat (perkalian matriks, pelatihan model) sudah ditulis ulang dalam <b>C++ &amp; CUDA</b> di balik layar. Python hanya bertugas <b>memberi perintah</b>. Ibarat kamu bicara bahasa Indonesia kepada koki, tapi kokinya memasak dengan alat profesional — bahasamu tidak memperlambat masakannya.
</div>

<p>Yang membuat Python menang:</p>
<ul>
  <li><b>Pustaka terlengkap.</b> Hampir semua alat AI dibuat untuk Python lebih dulu.</li>
  <li><b>Sintaks dekat dengan matematika.</b> Rumus di jurnal bisa diketik hampir apa adanya.</li>
  <li><b>Komunitas terbesar.</b> Kalau error, hampir pasti sudah ada yang bertanya dan dijawab.</li>
</ul>

<h3>Lihat bedanya sendiri</h3>
<p>Tugas yang sama — menjumlahkan hasil kali dua deret angka (<i>dot product</i>, operasi paling sering di AI):</p>

<p><b>Python + NumPy:</b></p>
<pre class="code">import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))     # hasil: 32</pre>

<p><b>JavaScript (tanpa pustaka khusus):</b></p>
<pre class="code">const a = [1, 2, 3];
const b = [4, 5, 6];
let hasil = 0;
for (let i = 0; i !== a.length; i++) {
  hasil = hasil + a[i] * b[i];
}
console.log(hasil);     // hasil: 32</pre>

<p>Keduanya benar. Tapi versi Python <b>membaca seperti rumus matematikanya</b> — dan bedanya makin terasa saat datanya jutaan angka, bukan tiga.</p>

<h3>Peta lengkap: siapa mengerjakan apa</h3>
<table class="tbl">
  <tr><th>Bahasa</th><th>Perannya di AI</th><th>Perlu kamu pelajari?</th></tr>
  <tr><td><b>Python</b></td><td>Bahasa utama: melatih model, olah data, semua pustaka AI</td><td>⭐ <b>Wajib</b></td></tr>
  <tr><td><b>SQL</b></td><td>Mengambil data dari database — dan AI selalu butuh data</td><td>⭐ <b>Wajib</b></td></tr>
  <tr><td><b>JavaScript / TypeScript</b></td><td>Membangun <i>produk</i>-nya: chatbot, aplikasi web yang memanggil API AI</td><td>⭐ Sangat berguna</td></tr>
  <tr><td><b>C++ / CUDA</b></td><td>Mesin di balik layar — PyTorch sendiri ditulis dengan ini</td><td>Nanti saja</td></tr>
  <tr><td><b>Rust</b></td><td>Alat inferensi cepat generasi baru</td><td>Opsional</td></tr>
  <tr><td><b>R</b></td><td>Statistik &amp; riset akademik</td><td>Opsional</td></tr>
</table>

<h3>Bahasa vs pustaka vs kerangka kerja</h3>
<p>Tiga istilah ini sering tertukar. Pakai analogi dapur:</p>
<table class="tbl">
  <tr><th>Istilah</th><th>Analogi</th><th>Contoh</th></tr>
  <tr><td><b>Bahasa</b></td><td>Bahasa yang kamu pakai bicara ke koki</td><td>Python</td></tr>
  <tr><td><b>Pustaka</b> (library)</td><td>Bumbu jadi — tinggal pakai, kamu yang atur resep</td><td>NumPy, pandas</td></tr>
  <tr><td><b>Kerangka kerja</b> (framework)</td><td>Dapur lengkap dengan alurnya — kamu ikut aturannya</td><td>PyTorch, TensorFlow</td></tr>
</table>

<h3>Urutan belajar yang saya sarankan</h3>
<ol>
  <li><b>Python dasar</b> — variabel, list, perulangan, fungsi. Cukup 2-3 minggu.</li>
  <li><b>pandas</b> — mengolah data tabel. <i>Bonus: ini juga alat terbaik untuk menganalisis laporan keuangan.</i></li>
  <li><b>scikit-learn</b> — model machine learning pertamamu.</li>
  <li><b>PyTorch</b> — barulah masuk deep learning.</li>
</ol>

<div class="callout">
<b>💡 Kabar baik:</b> playground di platform ini memakai <b>JavaScript</b>, jadi kamu sudah berlatih logika pemrograman sejak pelajaran pertama — perulangan, kondisi, fungsi. Konsepnya <b>sama persis</b> di Python, hanya cara menulisnya sedikit berbeda. Kamu tidak mulai dari nol.
</div>
`,
          keyPoints: [
            "Bahasa pemrograman = bahasa perantara antara manusia dan komputer.",
            "Python adalah bahasa utama AI — bukan karena cepat, tapi karena pustakanya terlengkap dan sintaksnya dekat dengan matematika.",
            "Python lambat, tapi bagian beratnya dijalankan C++/CUDA di balik layar, jadi tidak memperlambat.",
            "SQL wajib juga: AI selalu butuh data, dan data ada di database.",
            "JavaScript/TypeScript untuk membangun produknya (aplikasi web, chatbot).",
            "Bahasa = cara bicara; pustaka = bumbu jadi; kerangka kerja = dapur lengkap beserta aturannya.",
            "Urutan belajar: Python dasar → pandas → scikit-learn → PyTorch.",
          ],
          quiz: [
            {
              q: "Kenapa Python mendominasi AI padahal termasuk bahasa yang lambat?",
              options: [
                "Karena pustakanya terlengkap dan bagian beratnya dijalankan C++",
                "Karena Python sebenarnya bahasa tercepat untuk perhitungan angka",
                "Karena hanya Python yang bisa mengakses kartu grafis secara langsung",
                "Karena bahasa lain tidak menyediakan tipe data untuk matriks",
              ],
              answer: 0,
              explain:
                "Python hanya memberi perintah; perhitungan beratnya dieksekusi kode C++/CUDA yang sangat cepat.",
            },
            {
              q: "Apa beda pustaka (library) dan kerangka kerja (framework)?",
              options: [
                "Pustaka: kamu yang atur alurnya; kerangka kerja: alurnya sudah ditentukan",
                "Pustaka selalu gratis dipakai, sedangkan kerangka kerja selalu berbayar",
                "Pustaka khusus mengolah data, kerangka kerja khusus membuat tampilan",
                "Pustaka ditulis dengan Python, kerangka kerja ditulis dengan bahasa C++",
              ],
              answer: 0,
              explain:
                "Pustaka seperti bumbu jadi (kamu yang meracik); kerangka kerja seperti dapur lengkap dengan alur kerjanya.",
            },
            {
              q: "Selain Python, bahasa mana yang paling wajib dikuasai praktisi AI?",
              options: [
                "SQL, karena data untuk melatih AI hampir selalu ada di database",
                "R, karena paling lengkap untuk keperluan analisis statistik",
                "C++, karena dibutuhkan untuk menulis operasi matriks sendiri",
                "Java, karena paling banyak dipakai di perusahaan besar",
              ],
              answer: 0,
              explain:
                "Tanpa kemampuan mengambil data, model secanggih apa pun tidak punya bahan.",
            },
          ],
        },
        {
          id: "ai-tl-2",
          title: "Pustaka Wajib: NumPy, pandas & scikit-learn",
          duration: "14 menit",
          content: `
<p>Python sendirian tidak bisa apa-apa untuk AI. Kekuatannya datang dari <b>pustaka</b>. Ini tiga yang paling wajib — dan urutannya bukan kebetulan.</p>

<h3>1. NumPy — fondasi semua perhitungan</h3>
<p><b>NumPy</b> memberi Python kemampuan menghitung <b>banyak angka sekaligus</b>. Ini disebut <i>vectorization</i>.</p>

<pre class="code">import numpy as np

harga = np.array([25000, 30000, 27000])
unit  = np.array([120, 150, 95])

omzet = harga * unit          # dikali semua sekaligus, tanpa perulangan
print(omzet)                  # [3000000 4500000 2565000]
print(omzet.sum())            # 10065000</pre>

<div class="callout">
<b>Perhatikan baris <code>harga * unit</code>.</b> Tidak ada perulangan sama sekali. NumPy mengerjakan ketiganya serentak — dan bisa <b>puluhan kali lebih cepat</b> daripada perulangan biasa saat datanya besar. Semua model AI berdiri di atas kemampuan ini.
</div>

<h3>2. pandas — mengolah data tabel</h3>
<p><b>pandas</b> membuat Python bisa bekerja dengan <b>tabel</b> (seperti Excel, tapi bisa jutaan baris dan bisa diotomatiskan). Objek utamanya bernama <b>DataFrame</b>.</p>

<pre class="code">import pandas as pd

df = pd.read_csv("penjualan.csv")     # baca file
df["omzet"] = df["unit"] * df["harga"] # bikin kolom baru
print(df["omzet"].sum())               # jumlahkan
print(df.groupby("cabang").sum())      # ringkas per cabang</pre>

<div class="callout warn">
<b>📊 Penting untukmu.</b> pandas bukan hanya alat AI — ini juga <b>alat terbaik untuk menganalisis laporan keuangan</b>. Menghitung rasio ratusan perusahaan, membandingkan P/E antar-pesaing, melacak arus kas bertahun-tahun — semua yang kamu pelajari di jalur Akuntansi bisa diotomatiskan di sini. Satu pustaka, dua jalur belajar sekaligus.
</div>

<h3>Coba rasakan cara berpikirnya</h3>
<p>Playground ini memakai JavaScript, tapi <b>pola pikirnya sama persis</b> dengan pandas: ada tabel, kamu bikin kolom baru, lalu meringkasnya. Ubah angkanya lalu jalankan lagi:</p>

<div data-demo="js-playground">// Cara berpikir pandas: tabel -> kolom baru -> ringkasan
const penjualan = [
  { bulan: "Jan", unit: 120, harga: 25000 },
  { bulan: "Feb", unit: 150, harga: 25000 },
  { bulan: "Mar", unit: 95,  harga: 27000 },
  { bulan: "Apr", unit: 210, harga: 27000 }
];

// Di pandas cukup satu baris:  df["omzet"] = df["unit"] * df["harga"]
penjualan.forEach(function (r) {
  r.omzet = r.unit * r.harga;
});

penjualan.forEach(function (r) {
  console.log(r.bulan + "  unit " + r.unit + "   omzet Rp" + r.omzet.toLocaleString("id-ID"));
});

// Di pandas:  df["omzet"].sum()  dan  df["omzet"].mean()
const total = penjualan.reduce(function (a, r) { return a + r.omzet; }, 0);
const rata = total / penjualan.length;

console.log("--------------------------------------");
console.log("Total omzet     : Rp" + total.toLocaleString("id-ID"));
console.log("Rata-rata /bulan: Rp" + Math.round(rata).toLocaleString("id-ID"));</div>

<h3>3. scikit-learn — machine learning siap pakai</h3>
<p>Semua model ML klasik yang akan kamu pelajari sesudah modul ini — regresi, Decision Tree, Random Forest, k-NN, clustering — sudah tersedia jadi di <b>scikit-learn</b>, dengan pola pemakaian yang selalu sama:</p>

<pre class="code">from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()   # 1. pilih model
model.fit(X_train, y_train)        # 2. latih dengan data
hasil = model.predict(X_test)      # 3. ramalkan data baru</pre>

<div class="callout">
<b>Pola tiga langkah ini berlaku untuk hampir semua model di scikit-learn.</b> Ganti <code>RandomForestClassifier</code> dengan model lain, sisanya tetap sama. Sekali paham polanya, kamu bisa mencoba puluhan model tanpa belajar ulang.
</div>

<h3>Pustaka pendukung lain</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Gunanya</th></tr>
  <tr><td><b>matplotlib</b> / <b>seaborn</b></td><td>Membuat grafik — melihat data sebelum memodelkannya</td></tr>
  <tr><td><b>SciPy</b></td><td>Statistik &amp; matematika lanjutan</td></tr>
  <tr><td><b>OpenCV</b></td><td>Mengolah gambar &amp; video</td></tr>
  <tr><td><b>NLTK</b> / <b>spaCy</b></td><td>Mengolah teks bahasa manusia</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Jangan terjebak "belajar semua pustaka".</b> Kuasai <b>pandas</b> dulu sampai lancar — itu 80% pekerjaan nyata seorang praktisi AI. Melatih model sering hanya 20% sisanya. Pemula sering terbalik: buru-buru ke model, padahal datanya belum rapi.
</div>
`,
          keyPoints: [
            "NumPy = menghitung banyak angka sekaligus (vectorization), fondasi semua perhitungan AI.",
            "pandas = mengolah tabel data (DataFrame); seperti Excel tapi jutaan baris dan bisa diotomatiskan.",
            "pandas juga alat terbaik menganalisis laporan keuangan — menyambung jalur AI dan Akuntansi.",
            "scikit-learn = model ML klasik siap pakai dengan pola tetap: pilih model → fit → predict.",
            "Pendukung: matplotlib (grafik), SciPy (statistik), OpenCV (gambar), spaCy/NLTK (teks).",
            "Prioritas belajar: kuasai pandas dulu — mengolah data adalah 80% pekerjaan nyata, melatih model hanya 20%.",
          ],
          practice: [
            { type: "number", q: "Dengan NumPy: harga = [10, 20, 30] dikali unit = [2, 3, 4], lalu dijumlahkan (.sum()). Berapa hasilnya?", answer: 200, tol: 0.1, hint: "Kalikan berpasangan dulu: 10×2, 20×3, 30×4 — baru dijumlahkan.", solution: "20 + 60 + 120 = 200." },
          ],
          quiz: [
            {
              q: "Apa keunggulan utama NumPy dibanding perulangan Python biasa?",
              options: [
                "Menghitung banyak angka sekaligus, jauh lebih cepat untuk data besar",
                "Menuliskan perulangan dengan sintaks yang jauh lebih ringkas",
                "Menyimpan angka memakai memori yang jauh lebih sedikit",
                "Menjalankan perhitungan langsung di kartu grafis tanpa pengaturan",
              ],
              answer: 0,
              explain:
                "Operasi seperti harga * unit dikerjakan serentak oleh kode C di balik layar, tanpa perulangan Python yang lambat.",
            },
            {
              q: "Objek utama di pandas untuk menyimpan tabel data disebut?",
              options: ["Array", "DataFrame", "Tensor", "Matrix"],
              answer: 1,
              explain:
                "DataFrame adalah tabel berbaris dan berkolom — inti dari pandas.",
            },
            {
              q: "Pola pemakaian model di scikit-learn adalah?",
              options: [
                "Pilih model, panggil .fit pada data latih, lalu .predict pada data baru",
                "Muat data, panggil .train, lalu simpan hasilnya ke dalam berkas",
                "Panggil .predict lebih dulu, baru .fit untuk memperbaiki hasilnya",
                "Tiap model punya urutan pemanggilan yang berbeda-beda",
              ],
              answer: 0,
              explain:
                "Pola tiga langkah ini konsisten untuk hampir semua model, sehingga mudah mencoba banyak model.",
            },
            {
              q: "Menurut praktik nyata, porsi terbesar pekerjaan praktisi AI adalah?",
              options: [
                "Melatih model",
                "Mengolah & merapikan data",
                "Membuat grafik",
                "Memilih bahasa pemrograman",
              ],
              answer: 1,
              explain:
                "Sekitar 80% waktu habis untuk menyiapkan data. Model secanggih apa pun gagal jika datanya berantakan.",
            },
          ],
        },
        {
          id: "ai-tl-4",
          title: "Menyiapkan Komputermu untuk Mulai",
          duration: "12 menit",
          content: `
<p>Teori tanpa praktik cepat menguap. Pelajaran ini murni praktis: <b>bagaimana benar-benar mulai mengetik kode AI hari ini</b>.</p>

<h3>Jalan tercepat: Google Colab (tanpa instal apa pun)</h3>
<div class="callout">
<b>Google Colab</b> adalah Python yang berjalan <b>di browser</b>, gratis, lengkap dengan <b>GPU gratis</b>. Semua pustaka utama (NumPy, pandas, PyTorch) sudah terpasang. Kamu hanya butuh akun Google.<br><br>
Buka <b>colab.research.google.com</b> → "Notebook baru" → ketik kode → tekan <b>Shift+Enter</b>. Selesai.
</div>

<p>Untuk belajar, ini pilihan terbaik. Kamu melewati bagian tersulit bagi pemula: proses pemasangan yang sering gagal dan bikin menyerah sebelum mulai.</p>

<h3>Kode pertamamu di Colab</h3>
<pre class="code">import pandas as pd

df = pd.DataFrame({
    "produk": ["Kopi", "Teh", "Roti"],
    "unit":   [120, 80, 45],
    "harga":  [25000, 15000, 12000],
})

df["omzet"] = df["unit"] * df["harga"]
print(df)
print("Total omzet:", df["omzet"].sum())</pre>

<p>Tiga produk, satu kolom baru, satu ringkasan — persis pola yang kamu coba di playground pelajaran sebelumnya. Kalau ini jalan, lingkunganmu sudah siap.</p>

<h3>Kalau ingin memasang di komputer sendiri</h3>
<table class="tbl">
  <tr><th>Langkah</th><th>Yang dilakukan</th></tr>
  <tr><td>1. Pasang Python</td><td>Unduh dari <b>python.org</b>. Di Windows, <b>centang "Add Python to PATH"</b> saat memasang — ini penyebab error paling umum kalau terlewat.</td></tr>
  <tr><td>2. Pasang editor</td><td><b>VS Code</b> — gratis, dan ekstensi Python-nya sangat membantu.</td></tr>
  <tr><td>3. Buat virtual environment</td><td>Ruang terpisah untuk tiap proyek (penjelasan di bawah).</td></tr>
  <tr><td>4. Pasang pustaka</td><td>Lewat <b>pip</b>, alat pengunduh pustaka bawaan Python.</td></tr>
</table>

<pre class="code"># membuat & mengaktifkan virtual environment
python -m venv env

# Windows:
env\\Scripts\\activate
# Mac / Linux:
source env/bin/activate

# memasang pustaka
pip install numpy pandas scikit-learn matplotlib jupyter</pre>

<h3>Kenapa virtual environment itu penting?</h3>
<div class="callout warn">
Proyek A butuh pustaka versi 1.0, proyek B butuh versi 2.0. Kalau semua dipasang di satu tempat, keduanya <b>bertabrakan</b> dan salah satu rusak.<br><br>
<b>Virtual environment</b> memberi tiap proyek lemari sendiri. Analogi: seperti memisahkan uang usaha dari uang pribadi — begitu tercampur, semuanya jadi kacau. Pemula sering melewatkan langkah ini, lalu bingung kenapa proyek lamanya tiba-tiba rusak.
</div>

<h3>Notebook vs skrip: pakai yang mana?</h3>
<table class="tbl">
  <tr><th></th><th>Notebook (.ipynb)</th><th>Skrip (.py)</th></tr>
  <tr><td><b>Cara jalan</b></td><td>Per potongan, hasilnya langsung terlihat</td><td>Seluruh berkas sekaligus</td></tr>
  <tr><td><b>Terbaik untuk</b></td><td>Menjelajah data, bereksperimen, belajar</td><td>Aplikasi yang dipakai sungguhan</td></tr>
  <tr><td><b>Kelemahan</b></td><td>Berantakan jika sudah besar; sulit dilacak Git</td><td>Kurang enak untuk coba-coba</td></tr>
</table>
<p>Praktik lazimnya: <b>bereksperimen di notebook</b>, lalu setelah berhasil, <b>rapikan jadi skrip .py</b>.</p>

<h3>Butuh GPU?</h3>
<ul>
  <li><b>Belajar &amp; ML klasik</b> — tidak perlu. Laptop biasa cukup.</li>
  <li><b>Deep learning ringan</b> — GPU gratis Colab sudah memadai.</li>
  <li><b>Melatih model besar</b> — sewa GPU di cloud. <b>Jangan beli GPU mahal di awal</b>; sewa dulu sampai yakin benar-benar butuh.</li>
</ul>

<h3>Rencana 30 hari pertama</h3>
<table class="tbl">
  <tr><th>Minggu</th><th>Fokus</th><th>Bukti berhasil</th></tr>
  <tr><td>1</td><td>Python dasar di Colab</td><td>Bisa menulis fungsi &amp; perulangan sendiri</td></tr>
  <tr><td>2</td><td>pandas</td><td>Bisa membaca CSV dan meringkasnya per kategori</td></tr>
  <tr><td>3</td><td>matplotlib + statistik dasar</td><td>Bisa membuat grafik dari data sendiri</td></tr>
  <tr><td>4</td><td>scikit-learn</td><td>Satu model prediksi sederhana yang jalan</td></tr>
</table>

<div class="callout">
<b>💡 Kunci yang sering diabaikan:</b> pakai <b>datamu sendiri</b> — catatan keuangan, data penjualan, apa pun yang kamu pedulikan. Belajar dengan data yang kamu mengerti membuat hasilnya bermakna, dan kamu langsung tahu kalau hasilnya keliru. Itu jauh lebih cepat daripada mengikuti tutorial dengan data asing.
</div>
`,
          keyPoints: [
            "Google Colab = Python di browser, gratis + GPU gratis, semua pustaka sudah terpasang — jalan tercepat untuk pemula.",
            "Pasang lokal: Python (centang 'Add to PATH' di Windows) → VS Code → virtual environment → pip install.",
            "Virtual environment memberi tiap proyek lemari sendiri agar versi pustaka tidak bertabrakan.",
            "Notebook untuk menjelajah & belajar; skrip .py untuk aplikasi sungguhan.",
            "GPU tidak perlu untuk belajar dan ML klasik; sewa dulu, jangan beli mahal di awal.",
            "Rencana 30 hari: Python dasar → pandas → grafik → scikit-learn.",
            "Belajar memakai data yang kamu pedulikan sendiri jauh lebih cepat melekat daripada data tutorial.",
          ],
          quiz: [
            {
              q: "Cara tercepat mulai menulis kode AI tanpa memasang apa pun?",
              options: [
                "Google Colab — Python di browser, gratis, pustakanya sudah lengkap",
                "Memasang Python dan seluruh pustakanya langsung di komputer",
                "Menyewa server di layanan awan lalu memasang semuanya di sana",
                "Memakai penyunting kode daring yang tidak memerlukan pendaftaran",
              ],
              answer: 0,
              explain:
                "Colab melewati proses pemasangan yang sering menggagalkan pemula sebelum sempat mulai.",
            },
            {
              q: "Kenapa perlu virtual environment?",
              options: [
                "Agar tiap proyek punya versi pustakanya sendiri dan tak bertabrakan",
                "Agar kode berjalan lebih cepat karena pustakanya lebih ringkas",
                "Agar pustaka yang sudah dipasang bisa dipakai semua proyek sekaligus",
                "Agar Python otomatis diperbarui ke versi terbaru setiap saat",
              ],
              answer: 0,
              explain:
                "Proyek berbeda sering butuh versi pustaka berbeda; venv memisahkannya seperti memisahkan uang usaha dan pribadi.",
            },
            {
              q: "Saat memasang Python di Windows, kesalahan paling umum pemula adalah?",
              options: [
                "Lupa mencentang 'Add Python to PATH' saat proses pemasangan",
                "Memasang versi Python terbaru padahal pustaka belum mendukungnya",
                "Memasang Python di drive selain C sehingga jalurnya tidak terbaca",
                "Memakai penyunting kode selain VS Code untuk menulis programnya",
              ],
              answer: 0,
              explain:
                "Tanpa PATH, perintah python tidak dikenali di terminal — sumber error paling sering bagi pemula Windows.",
            },
            {
              q: "Praktik lazim penggunaan notebook dan skrip .py?",
              options: [
                "Bereksperimen di notebook, lalu dirapikan jadi skrip untuk dipakai",
                "Selalu memakai notebook karena hasilnya langsung terlihat",
                "Selalu memakai skrip karena lebih rapi dan mudah dilacak Git",
                "Menulis di skrip lalu menyalinnya ke notebook saat akan dibagikan",
              ],
              answer: 0,
              explain:
                "Notebook unggul untuk menjelajah; skrip lebih rapi, mudah diuji, dan mudah dilacak Git untuk produksi.",
            },
          ],
        },
        {
          id: "ai-tl-6",
          title: "Visualisasi Data: matplotlib & seaborn",
          duration: "15 menit",
          content: `
<p>Sebelum melatih model apa pun, ada satu langkah yang tidak boleh dilewati: <b>lihat datanya</b>. Pelajaran ini menunjukkan kenapa — dengan bukti yang sulit dibantah.</p>

<h3>Bukti: statistik bisa berbohong</h3>

<div data-demo="anscombe"></div>

<div class="callout warn">
<b>Inilah <i>Kuartet Anscombe</i></b>, dibuat tahun 1973 justru untuk membuktikan satu hal: <b>angka ringkasan tidak cukup</b>. Kalau kamu langsung melatih model tanpa melihat gambarnya, kamu tidak akan tahu bahwa data ke-4 sebenarnya hanya berupa garis tegak dengan satu pencilan — dan model regresimu akan menyesatkan.
</div>

<h3>Dua pustaka, dua tingkat</h3>
<div data-diagram="compare3" data-cols="matplotlib::mesin dasarnya::atur tiap detail sendiri|seaborn::dibangun DI ATAS matplotlib::satu baris untuk grafik umum|Plotly::grafik interaktif::bisa di-zoom &amp; hover" data-caption="Ketiganya saling melengkapi, bukan bersaing"></div>

<div class="callout">
<b>Poin yang sering salah dipahami:</b> seaborn <b>bukan pengganti</b> matplotlib — ia dibangun <b>di atasnya</b>. Kamu memakai seaborn untuk membuat grafiknya cepat, lalu memakai matplotlib untuk merapikan judul, ukuran, dan warnanya. Keduanya dipakai <b>bersamaan</b>.
</div>

<h3>Bandingkan sendiri</h3>
<p>Membuat grafik sebaran dengan warna per kategori — <b>matplotlib murni</b>:</p>
<pre class="code">import matplotlib.pyplot as plt

for divisi in df["divisi"].unique():
    bagian = df[df["divisi"] == divisi]
    plt.scatter(bagian["pengalaman"], bagian["gaji"], label=divisi)
plt.xlabel("Pengalaman")
plt.ylabel("Gaji")
plt.legend()
plt.show()</pre>

<p>Hal yang sama dengan <b>seaborn</b>:</p>
<pre class="code">import seaborn as sns

sns.scatterplot(data=df, x="pengalaman", y="gaji", hue="divisi")</pre>

<p>Satu baris, dan sudah otomatis punya warna, legenda, serta label sumbu. Itulah alasan seaborn ada.</p>

<h3>Grafik mana untuk pertanyaan apa</h3>
<table class="tbl">
  <tr><th>Pertanyaanmu</th><th>Grafiknya</th><th>Perintah seaborn</th></tr>
  <tr><td>Bagaimana sebaran satu kolom?</td><td>Histogram</td><td><b>sns.histplot</b></td></tr>
  <tr><td>Adakah pencilan? Bandingkan antar-kelompok</td><td>Box plot</td><td><b>sns.boxplot</b></td></tr>
  <tr><td>Adakah hubungan antara dua kolom?</td><td>Scatter plot</td><td><b>sns.scatterplot</b></td></tr>
  <tr><td>Kolom mana saling berkaitan?</td><td>Heatmap korelasi</td><td><b>sns.heatmap(df.corr())</b></td></tr>
  <tr><td>Ingin melihat semua pasangan sekaligus</td><td>Pair plot</td><td><b>sns.pairplot</b></td></tr>
  <tr><td>Berapa banyak tiap kategori?</td><td>Count plot</td><td><b>sns.countplot</b></td></tr>
  <tr><td>Bagaimana perubahan sepanjang waktu?</td><td>Line plot</td><td><b>sns.lineplot</b></td></tr>
</table>

<div class="callout">
<b>Tiga grafik pertama yang selalu saya sarankan</b> saat menerima data baru:<br><br>
1. <b>histplot</b> tiap kolom angka — melihat sebaran &amp; kemencengan.<br>
2. <b>boxplot</b> — memburu pencilan yang bisa merusak model.<br>
3. <b>heatmap korelasi</b> — menemukan kolom yang saling mengulang informasi.<br><br>
Tiga grafik ini sering menemukan masalah data lebih cepat daripada berjam-jam mengutak-atik model.
</div>

<h3>🚩 Kesalahan visualisasi yang sering terjadi</h3>
<table class="tbl">
  <tr><th>Kesalahan</th><th>Kenapa menyesatkan</th></tr>
  <tr><td>Sumbu Y tidak mulai dari nol pada diagram batang</td><td>Selisih kecil terlihat dramatis. Untuk batang, mulailah dari nol</td></tr>
  <tr><td>Diagram lingkaran (pie) dengan banyak potongan</td><td>Mata manusia buruk membandingkan sudut. Pakai diagram batang</td></tr>
  <tr><td>Terlalu banyak warna</td><td>Di atas ±7 kategori, warna berhenti membantu</td></tr>
  <tr><td>Scatter dengan ribuan titik bertumpuk</td><td>Pakai transparansi (<i>alpha</i>) atau hexbin agar kepadatannya terlihat</td></tr>
  <tr><td>Grafik tanpa label sumbu &amp; satuan</td><td>Pembaca tak tahu yang dilihatnya. Selalu beri label</td></tr>
</table>

<div class="callout warn">
<b>Ingat tujuannya.</b> Visualisasi saat menganalisis dan visualisasi saat menyajikan itu <b>berbeda</b>. Grafik untuk dirimu sendiri boleh jelek asal cepat — buat banyak, buang kebanyakan. Grafik untuk orang lain harus bersih, berlabel, dan hanya menyampaikan <b>satu pesan</b>.
</div>
`,
          keyPoints: [
            "Selalu gambar datanya sebelum memodelkan — Kuartet Anscombe membuktikan statistik ringkasan bisa menyembunyikan bentuk yang sangat berbeda.",
            "seaborn dibangun DI ATAS matplotlib, bukan penggantinya; keduanya dipakai bersamaan.",
            "seaborn memberi grafik umum dalam satu baris lengkap dengan warna, legenda, dan label.",
            "Plotly untuk grafik interaktif yang bisa di-zoom dan di-hover.",
            "Tiga grafik pertama untuk data baru: histplot (sebaran), boxplot (pencilan), heatmap korelasi (kolom yang saling mengulang).",
            "Kesalahan umum: sumbu batang tidak dari nol, pie chart banyak potongan, terlalu banyak warna, titik bertumpuk tanpa transparansi.",
            "Grafik untuk analisis boleh cepat & jelek; grafik untuk orang lain harus bersih dan menyampaikan satu pesan.",
          ],
          quiz: [
            {
              q: "Apa pelajaran utama dari Kuartet Anscombe?",
              options: [
                "Data berstatistik sama persis bisa berbentuk sangat berbeda",
                "Statistik ringkasan selalu cukup untuk memahami sebuah data",
                "Regresi linear tidak pernah cocok dipakai pada data nyata",
                "Korelasi yang tinggi selalu berarti ada hubungan sebab-akibat",
              ],
              answer: 0,
              explain:
                "Rata-rata, korelasi, dan garis regresi keempatnya identik, tapi bentuknya jauh berbeda.",
            },
            {
              q: "Hubungan seaborn dan matplotlib adalah?",
              options: [
                "seaborn dibangun di atas matplotlib, keduanya dipakai bersamaan",
                "matplotlib dibangun di atas seaborn untuk keperluan lanjutan",
                "Keduanya bersaing sehingga sebaiknya dipilih salah satu saja",
                "Keduanya tidak berhubungan dan memakai format data berbeda",
              ],
              answer: 0,
              explain:
                "Objek yang dihasilkan seaborn tetap objek matplotlib, sehingga bisa disunting dengan perintah matplotlib.",
            },
            {
              q: "Grafik apa yang paling tepat untuk memburu pencilan (outlier)?",
              options: ["Pie chart", "Box plot", "Count plot", "Line plot"],
              answer: 1,
              explain:
                "Box plot menampilkan median, kuartil, dan titik-titik di luar batas wajar sekaligus.",
            },
            {
              q: "Kenapa diagram batang sebaiknya dimulai dari nol?",
              options: [
                "Karena panjang batang dibaca sebagai besaran, memotongnya menyesatkan",
                "Karena pustaka penggambar mensyaratkan sumbu dimulai dari nol",
                "Karena grafik jadi lebih indah bila seluruh batangnya terlihat",
                "Karena nilai negatif tidak bisa digambarkan bila sumbunya dipotong",
              ],
              answer: 0,
              explain:
                "Ini salah satu cara paling umum grafik dipakai untuk menyesatkan pembaca.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 7: MENYIAPKAN DATA & MELATIH MODEL ---------------- */
    {
      id: "ai-pendalaman",
      level: "Pendalaman",
      title: "Menyiapkan Data & Melatih Model",
      summary: "Feature engineering, cara melatih & menguji model dengan jujur, dan alur kerja scikit-learn yang sebenarnya.",
      lessons: [
        {
          id: "ai-ars-1",
          title: "Feature Engineering & Persiapan Data",
          duration: "13 menit",
          content: `
<p>Ada pepatah di kalangan praktisi: <b>"80% pekerjaan machine learning adalah menyiapkan data."</b> Bagian inilah yang paling menentukan hasil — tapi paling jarang dibahas.</p>

<h3>Fundamental: apa itu "fitur"?</h3>
<div class="callout">
<b>Fitur (feature)</b> = <b>satu kolom informasi</b> yang dipakai model untuk menebak. Kalau data adalah tabel, tiap <b>kolom</b> adalah satu fitur.
<br><br><b>Contoh — memprediksi harga rumah:</b>
<ul>
  <li>Fitur: luas tanah, jumlah kamar, jarak ke pusat kota, umur bangunan</li>
  <li>Target (yang ditebak): harga</li>
</ul>
</div>

<h3>Feature engineering = membuat fitur yang lebih berguna</h3>
<p><b>Feature engineering</b> adalah mengolah data mentah menjadi fitur yang lebih mudah "dimengerti" model. Ini sering <b>lebih berpengaruh daripada mengganti algoritma</b>.</p>

<table class="tbl">
  <tr><th>Data mentah</th><th>Fitur hasil olahan</th><th>Kenapa lebih berguna</th></tr>
  <tr><td>Tanggal lahir: 2000-05-14</td><td><b>Umur</b>: 26</td><td>Model butuh angka bermakna, bukan tanggal</td></tr>
  <tr><td>Tanggal transaksi</td><td><b>Hari apa</b> (Senin–Minggu)</td><td>Menangkap pola akhir pekan</td></tr>
  <tr><td>Panjang &amp; lebar tanah</td><td><b>Luas</b> = panjang × lebar</td><td>Satu angka yang lebih langsung berhubungan dengan harga</td></tr>
  <tr><td>Alamat lengkap</td><td><b>Jarak ke pusat kota</b> (km)</td><td>Teks alamat tak bisa dihitung; jarak bisa</td></tr>
</table>

<h3>Membersihkan data (data cleaning)</h3>
<ul>
  <li><b>Data kosong (missing)</b> — isi dengan rata-rata/median, atau buang barisnya.</li>
  <li><b>Pencilan (outlier)</b> — nilai ekstrem yang aneh (mis. umur 999). Periksa: salah input atau memang nyata?</li>
  <li><b>Duplikat</b> — baris yang sama berulang bisa membuat model bias.</li>
  <li><b>Data kategori</b> — teks seperti "merah/biru/hijau" harus diubah jadi angka (disebut <b>encoding</b>).</li>
</ul>

<h3>Penskalaan (scaling) — sering terlupakan</h3>
<div class="callout warn">
<b>Masalahnya:</b> misal ada fitur "umur" (0–100) dan "penghasilan" (0–100.000.000). Banyak algoritma akan menganggap penghasilan <b>jauh lebih penting</b> semata karena <b>angkanya besar</b> — padahal belum tentu.
<br><br><b>Solusinya:</b> <b>penskalaan</b> — semua fitur disamakan rentangnya (mis. dijadikan 0–1) agar dibandingkan dengan adil.
</div>

<h3>Coba sendiri — lihat efek penskalaan 👇</h3>
<div data-demo="js-playground">// Penskalaan Min-Max: ubah semua nilai ke rentang 0 sampai 1
// Rumus: (nilai - terkecil) / (terbesar - terkecil)

function skala(daftar, nama) {
  let min = daftar[0];
  let max = daftar[0];
  daftar.forEach(function(v){
    if (v > max) { max = v; }
    if (min > v) { min = v; }
  });
  const hasil = daftar.map(function(v){
    return ((v - min) / (max - min)).toFixed(2);
  });
  console.log(nama);
  console.log("   asli   : " + daftar.join(", "));
  console.log("   diskala: " + hasil.join(", "));
}

skala([25, 40, 35, 60], "Umur (tahun)");
skala([5000000, 12000000, 8000000, 30000000], "Penghasilan (Rp)");

console.log("-----");
console.log("Setelah diskala, keduanya sama-sama 0 sampai 1.");
console.log("Model jadi menilai keduanya adil, bukan karena angkanya besar.");</div>

<div class="callout">
<b>Prinsip emas:</b> <i>"Garbage in, garbage out."</i> Model tercanggih pun akan gagal kalau datanya buruk. Sebaliknya, data &amp; fitur yang baik bisa membuat algoritma sederhana bekerja sangat bagus.
</div>
`,
          keyPoints: [
            "Fitur (feature) = satu kolom informasi yang dipakai model untuk menebak.",
            "Feature engineering = mengolah data mentah jadi fitur bermakna; sering lebih berpengaruh daripada mengganti algoritma.",
            "Data cleaning: tangani data kosong, pencilan, duplikat, dan ubah kategori jadi angka (encoding).",
            "Penskalaan menyamakan rentang antar-fitur agar tidak ada fitur yang 'menang' hanya karena angkanya besar.",
            "Garbage in, garbage out — data buruk mengalahkan algoritma canggih.",
          ],
          practice: [
            { type: "number", q: "Penskalaan Min-Max: nilai 35, terkecil 25, terbesar 60. Berapa hasilnya? (2 desimal)", answer: 0.29, tol: 0.02, hint: "(nilai − min) ÷ (max − min) = (35 − 25) ÷ (60 − 25).", solution: "10 ÷ 35 = 0,29." },
            { type: "choice", q: "Data punya fitur 'umur' (0–100) dan 'penghasilan' (0–100 juta). Apa masalahnya bila tanpa penskalaan?", options: ["Tidak ada masalah", "Model bisa menganggap penghasilan jauh lebih penting hanya karena angkanya besar", "Model jadi lebih cepat", "Data jadi hilang"], answer: 1, hint: "Algoritma melihat besaran angka.", solution: "Skala yang timpang membuat fitur berangka besar mendominasi secara tidak adil." },
          ],
          quiz: [
            {
              q: "Apa itu 'fitur' (feature) dalam machine learning?",
              options: [
                "Satu kolom informasi yang dipakai model sebagai bahan menebak",
                "Satu baris data yang berisi contoh lengkap untuk dipelajari",
                "Nilai yang ingin ditebak oleh model dari data yang diberikan",
                "Kemampuan khusus yang dimiliki sebuah algoritma tertentu",
              ],
              answer: 0,
              explain: "Fitur adalah variabel/kolom masukan yang dipakai model.",
            },
            {
              q: "Kenapa feature engineering penting?",
              options: [
                "Fitur yang baik sering lebih berpengaruh daripada ganti algoritma",
                "Fitur yang banyak selalu membuat model menjadi lebih akurat",
                "Fitur menentukan seberapa cepat model bisa dilatih",
                "Fitur harus selalu berjumlah sama dengan jumlah barisnya",
              ],
              answer: 0,
              explain:
                "Kualitas representasi data sangat menentukan performa model.",
            },
          ],
        },
        {
          id: "ai-ars-2",
          title: "Melatih Model dengan Benar",
          duration: "13 menit",
          content: `
<p>Kamu sudah tahu soal <b>overfitting</b> (model menghafal). Sekarang kita bahas <b>cara kerja yang benar</b> agar hasilnya bisa dipercaya.</p>

<h3>Tiga bagian data (bukan dua!)</h3>
<table class="tbl">
  <tr><th>Bagian</th><th>Porsi umum</th><th>Fungsinya</th></tr>
  <tr><td><b>Training</b></td><td>~60–70%</td><td>Model <b>belajar</b> dari sini</td></tr>
  <tr><td><b>Validation</b></td><td>~15–20%</td><td>Untuk <b>menyetel</b> model &amp; memilih pengaturan terbaik</td></tr>
  <tr><td><b>Test</b></td><td>~15–20%</td><td>Ujian <b>terakhir</b> — hanya dipakai SEKALI di akhir</td></tr>
</table>

<div class="callout warn">
<b>Kenapa perlu validation terpisah?</b> Kalau kamu menyetel model berulang kali sambil melihat nilai <b>test</b>, kamu <b>diam-diam "membocorkan"</b> jawaban ujian ke dalam model. Nilainya jadi terlihat bagus padahal menipu. Karena itu: setel pakai <b>validation</b>, dan sentuh <b>test</b> hanya di akhir.
</div>

<h3>Cross-validation: memakai data secara hemat</h3>
<p>Kalau datamu sedikit, membaginya tiga bagian terasa boros. Solusinya <b>k-fold cross-validation</b>:</p>
<ol>
  <li>Data dibagi jadi <b>k bagian</b> sama besar (misal k = 5).</li>
  <li>Latih dengan 4 bagian, uji dengan 1 bagian.</li>
  <li>Ulangi 5 kali, <b>bergantian</b> bagian mana yang jadi penguji.</li>
  <li>Ambil <b>rata-rata</b> hasilnya.</li>
</ol>
<div class="callout">
<b>Keuntungannya:</b> semua data pernah dipakai untuk melatih <b>dan</b> menguji, sehingga penilaiannya lebih stabil &amp; tidak bergantung pada kebetulan pembagian.
</div>

<h3>Hyperparameter — "pengaturan" model</h3>
<div class="callout">
<b>Bedakan dua hal ini:</b>
<ul>
  <li><b>Parameter</b> — angka yang <b>dipelajari model sendiri</b> saat training (bobot).</li>
  <li><b>Hyperparameter</b> — pengaturan yang <b>kamu tentukan sebelum</b> training: learning rate, jumlah lapisan, kedalaman pohon, jumlah tetangga di k-NN.</li>
</ul>
Mencari kombinasi terbaiknya disebut <b>hyperparameter tuning</b> (dicoba satu per satu, atau dicari otomatis).
</div>

<h3>Regularisasi — mengerem hafalan</h3>
<p><b>Regularisasi</b> adalah cara <b>menghukum model yang terlalu rumit</b>, agar tidak menghafal:</p>
<ul>
  <li><b>L1 &amp; L2</b> — menambah "denda" bila bobot model terlalu besar, sehingga model dipaksa lebih sederhana.</li>
  <li><b>Dropout</b> (khusus neural network) — saat training, sebagian neuron <b>dimatikan acak</b>. Model jadi tidak bergantung pada satu jalur saja.</li>
  <li><b>Early stopping</b> — hentikan training saat nilai validation mulai memburuk.</li>
</ul>

<div class="callout warn">
<b>Data timpang (imbalanced):</b> kalau 99% data adalah "normal" dan 1% "penipuan", model bisa menebak "normal" terus dan terlihat 99% akurat — padahal tak berguna. Solusinya: pakai metrik <b>precision/recall</b> (bukan akurasi), perbanyak contoh kelas minoritas, atau beri bobot lebih besar pada kelas langka.
</div>
`,
          keyPoints: [
            "Data dibagi tiga: training (belajar), validation (menyetel), test (ujian akhir sekali pakai).",
            "Menyetel model sambil melihat nilai test = membocorkan jawaban; nilainya jadi menipu.",
            "k-fold cross-validation: data dibagi k bagian, bergantian jadi penguji, hasilnya dirata-rata — lebih hemat & stabil.",
            "Parameter dipelajari model; hyperparameter ditentukan manusia sebelum training (learning rate, jumlah lapisan).",
            "Regularisasi (L1/L2, dropout, early stopping) mencegah model menghafal.",
            "Data timpang: pakai precision/recall, bukan akurasi.",
          ],
          practice: [
            { type: "choice", q: "Kamu menyetel model berkali-kali sambil melihat nilai pada data TEST. Apa masalahnya?", options: ["Tidak ada masalah", "Jawaban ujian 'bocor' ke model — nilainya jadi menipu", "Model jadi lambat", "Data jadi rusak"], answer: 1, hint: "Test seharusnya dipakai berapa kali?", solution: "Test hanya boleh dipakai sekali di akhir; penyetelan memakai validation." },
            { type: "number", q: "Pada 5-fold cross-validation, berapa kali proses latih-uji dilakukan?", answer: 5, tol: 0.1, unit: "kali", hint: "Sebanyak jumlah fold-nya.", solution: "k = 5 → dilakukan 5 kali, bergantian bagian penguji." },
          ],
          quiz: [
            {
              q: "Apa beda parameter dan hyperparameter?",
              options: [
                "Parameter dipelajari model sendiri; hyperparameter ditentukan manusia",
                "Parameter ditentukan manusia; hyperparameter dipelajari model sendiri",
                "Parameter untuk data latih; hyperparameter untuk data uji",
                "Keduanya sama, hanya berbeda penyebutan antar-pustaka",
              ],
              answer: 0,
              explain:
                "Bobot = parameter (dipelajari); learning rate & jumlah lapisan = hyperparameter (disetel manusia).",
            },
            {
              q: "Apa fungsi 'dropout' pada neural network?",
              options: [
                "Mematikan sebagian neuron secara acak agar model tidak menghafal",
                "Membuang data latih yang dianggap mengandung banyak kesalahan",
                "Menghentikan pelatihan begitu loss berhenti membaik",
                "Mengurangi jumlah lapisan agar modelnya menjadi lebih ringan",
              ],
              answer: 0,
              explain:
                "Dropout mencegah ketergantungan pada jalur tertentu, mengurangi overfitting.",
            },
          ],
        },
        {
          id: "ai-tl-5",
          title: "scikit-learn Mendalam — Alur Kerja yang Sebenarnya",
          duration: "16 menit",
          content: `
<p>Di pelajaran <b>NumPy, pandas &amp; scikit-learn</b> kamu melihat pola tiga langkah scikit-learn: <b>pilih model → fit → predict</b>. Itu benar, tapi itu baru <b>bagian tengah</b>. Alur kerja sesungguhnya punya langkah-langkah sebelum dan sesudahnya — dan di situlah pemula paling sering tersandung.</p>

<div data-diagram="pipeline" data-stages="Pisahkan data::latih vs uji|Siapkan fitur::skala &amp; encoding|Latih model::fit|Ukur::pada data uji" data-caption="Alur kerja scikit-learn yang lengkap — tiga langkah terkenal itu hanya kotak ketiga"></div>

<h3>Kenapa satu pustaka bisa memuat puluhan model?</h3>
<div class="callout">
Kekuatan terbesar scikit-learn bukan modelnya, melainkan <b>keseragaman antarmukanya</b>. Semua benda di dalamnya hanya punya tiga kata kerja:<br><br>
<b>.fit()</b> — belajar dari data<br>
<b>.predict()</b> — meramalkan data baru<br>
<b>.transform()</b> — mengubah data (misalnya menskalakan)<br><br>
Sekali paham tiga kata kerja ini, kamu bisa memakai <b>seluruh</b> pustakanya — model, penskala, pemilih fitur — tanpa belajar ulang.
</div>

<h3>Langkah 1: pisahkan data lebih dulu</h3>
<p>Ini langkah yang paling sering dilewati pemula, dan akibatnya paling fatal.</p>

<pre class="code">from sklearn.model_selection import train_test_split

X_latih, X_uji, y_latih, y_uji = train_test_split(
    X, y, test_size=0.2, random_state=42)</pre>

<div class="callout warn">
<b>⚠️ Kenapa wajib dipisah?</b> Menguji model dengan data yang dipakai melatihnya sama seperti <b>memberi ujian dengan soal yang bocor</b>. Nilainya pasti bagus, tapi tidak berarti apa-apa.<br><br>
<b>Data uji harus disentuh sekali saja</b> — di paling akhir. Kalau kamu berkali-kali mengubah model sampai nilainya di data uji bagus, kamu sedang menyontek secara tidak sadar: data uji itu pelan-pelan berubah menjadi data latih.
</div>

<p><i>random_state=42</i> membuat pembagiannya selalu sama tiap kali dijalankan — agar hasilmu bisa diulang orang lain. Angkanya bebas, 42 hanya kebiasaan.</p>

<h3>Langkah 2: siapkan fiturnya</h3>
<p>Model tidak bisa langsung memakan data mentah. Dua penyiapan paling umum:</p>

<table class="tbl">
  <tr><th>Masalah</th><th>Alat di scikit-learn</th><th>Fungsinya</th></tr>
  <tr><td>Skala antar-kolom sangat berbeda</td><td><b>StandardScaler</b> / <b>MinMaxScaler</b></td><td>Menyamakan rentang agar tak ada kolom yang mendominasi</td></tr>
  <tr><td>Kolom berisi teks kategori</td><td><b>OneHotEncoder</b></td><td>Mengubah "Jakarta/Bandung" jadi angka</td></tr>
  <tr><td>Ada nilai kosong</td><td><b>SimpleImputer</b></td><td>Mengisi yang kosong dengan rata-rata/median</td></tr>
</table>

<h3>Rasakan sendiri kenapa penskalaan penting</h3>

<div data-demo="skala-fitur"></div>

<h3>Langkah 3: Pipeline — dan kenapa ini wajib</h3>
<div class="callout">
<b>Pipeline</b> merangkai penyiapan data dan model menjadi <b>satu kesatuan</b>:
</div>

<pre class="code">from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipa = Pipeline([
    ("skala", StandardScaler()),
    ("model", RandomForestClassifier()),
])

pipa.fit(X_latih, y_latih)
print(pipa.score(X_uji, y_uji))</pre>

<div class="callout warn">
<b>🚩 Pipeline bukan sekadar kerapian — ia mencegah kebocoran data.</b><br><br>
Kalau kamu menskalakan <b>seluruh</b> data sebelum memisahkannya, maka rata-rata yang dipakai penskala <b>sudah mengandung informasi dari data uji</b>. Modelmu jadi terlihat lebih pintar dari kenyataannya, lalu mengecewakan saat dipakai sungguhan.<br><br>
Pipeline menghitung ulang penskalaan <b>hanya dari data latih</b> di setiap lipatan. Inilah alasan sesungguhnya ia dipakai praktisi.
</div>

<h3>Langkah 4: ukur dengan jujur</h3>
<p>Sekali membagi data bisa membuatmu beruntung atau sial. <b>Cross-validation</b> membagi berkali-kali lalu merata-ratakan:</p>

<pre class="code">from sklearn.model_selection import cross_val_score

skor = cross_val_score(pipa, X, y, cv=5)
print(skor.mean(), skor.std())</pre>

<p>Yang penting bukan hanya rata-ratanya, tapi juga <b>simpangannya</b>. Rata-rata 85% dengan simpangan 2% jauh lebih dipercaya daripada rata-rata 85% dengan simpangan 15%.</p>

<div class="callout warn">
<b>⚠️ Jebakan akurasi.</b> Bayangkan mendeteksi penipuan kartu kredit di mana hanya <b>1 dari 1.000</b> transaksi yang menipu. Model yang selalu menjawab "tidak menipu" mendapat akurasi <b>99,9%</b> — dan sama sekali tidak berguna.<br><br>
Karena itu pakai <b>precision</b> (dari yang ditandai menipu, berapa yang benar?) dan <b>recall</b> (dari semua penipuan, berapa yang tertangkap?). Di scikit-learn keduanya langsung tersedia:
</div>

<pre class="code">from sklearn.metrics import confusion_matrix, classification_report

y_tebak = pipa.predict(X_uji)
print(confusion_matrix(y_uji, y_tebak))
print(classification_report(y_uji, y_tebak))</pre>

<h3>Model mana yang dipilih?</h3>
<table class="tbl">
  <tr><th>Situasi</th><th>Mulai dari</th></tr>
  <tr><td>Data tabel, ingin cepat &amp; kuat</td><td class="ok-cell"><b>RandomForestClassifier</b> — hampir selalu titik awal yang baik</td></tr>
  <tr><td>Butuh hasil terbaik pada data tabel</td><td><b>GradientBoosting</b> / XGBoost</td></tr>
  <tr><td>Ingin model yang bisa dijelaskan</td><td><b>LogisticRegression</b> atau <b>DecisionTree</b></td></tr>
  <tr><td>Meramalkan angka, bukan kategori</td><td>Versi <b>Regressor</b>-nya (RandomForestRegressor, dll.)</td></tr>
  <tr><td>Data tanpa label</td><td><b>KMeans</b> untuk pengelompokan</td></tr>
</table>

<div class="callout">
<b>💡 Urutan kerja yang disarankan:</b> mulai dari model paling sederhana sebagai <b>pembanding dasar</b> (baseline). Kalau LogisticRegression sudah memberi 88%, dan model rumit hanya memberi 89%, pilih yang sederhana — lebih cepat, lebih mudah dijelaskan, lebih sedikit yang bisa rusak.
</div>
`,
          keyPoints: [
            "Seluruh scikit-learn hanya punya tiga kata kerja: .fit() belajar, .predict() meramal, .transform() mengubah data.",
            "Selalu pisahkan data latih & uji lebih dulu dengan train_test_split; data uji hanya disentuh sekali di akhir.",
            "Penyiapan fitur: StandardScaler/MinMaxScaler (skala), OneHotEncoder (kategori), SimpleImputer (nilai kosong).",
            "Pipeline merangkai penyiapan + model jadi satu — fungsinya mencegah kebocoran data, bukan sekadar kerapian.",
            "Menskalakan seluruh data sebelum memisahkannya membuat model terlihat lebih pintar dari kenyataannya.",
            "cross_val_score membagi berkali-kali; perhatikan simpangannya, bukan hanya rata-ratanya.",
            "Jebakan akurasi: pada data timpang, akurasi 99,9% bisa berarti model tak berguna — pakai precision & recall.",
            "Mulai dari model sederhana sebagai pembanding dasar; pilih yang rumit hanya bila selisihnya berarti.",
          ],
          practice: [
            { type: "choice", q: "Kamu menskalakan SELURUH data (latih + uji) lalu memisahkannya. Apa yang terjadi?", options: ["Tidak apa-apa, malah lebih rapi", "Terjadi kebocoran data — model terlihat lebih baik dari kenyataannya", "Model jadi lebih lambat", "Data uji jadi rusak"], answer: 1, hint: "Rata-rata yang dipakai penskala berasal dari data mana?", solution: "Rata-rata penskala ikut mengandung informasi data uji. Pakai Pipeline agar penskalaan hanya dihitung dari data latih." },
            { type: "choice", q: "Deteksi penyakit langka: 1 dari 1.000 orang sakit. Model selalu menjawab 'sehat'. Berapa akurasinya, dan apakah berguna?", options: ["50%, tidak berguna", "99,9%, tapi sama sekali tidak berguna", "0%, tidak berguna", "99,9%, sangat berguna"], answer: 1, hint: "Hitung berapa persen tebakan yang kebetulan benar.", solution: "999 dari 1.000 tebakan benar = 99,9%, tapi recall-nya nol — tidak satu pun pasien terdeteksi." },
          ],
          quiz: [
            {
              q: "Apa fungsi sesungguhnya dari Pipeline di scikit-learn?",
              options: [
                "Mencegah kebocoran data karena penyiapan hanya dihitung dari data latih",
                "Mempercepat pelatihan karena langkahnya dijalankan bersamaan",
                "Mengurangi jumlah kode yang perlu ditulis sehingga lebih rapi",
                "Menyimpan model terlatih agar bisa dipakai lagi di lain waktu",
              ],
              answer: 0,
              explain:
                "Kerapian hanya bonus. Manfaat utamanya adalah kejujuran pengukuran.",
            },
            {
              q: "Kenapa data uji hanya boleh disentuh sekali di akhir?",
              options: [
                "Karena dipakai berulang menyetel model membuatnya jadi data latih",
                "Karena data uji akan rusak bila dibaca lebih dari satu kali",
                "Karena pustaka scikit-learn membatasi pemakaiannya hanya sekali",
                "Karena hasilnya akan selalu sama sehingga tak ada gunanya diulang",
              ],
              answer: 0,
              explain:
                "Menyetel model berulang kali berdasarkan nilai data uji adalah bentuk menyontek yang tidak disadari.",
            },
            {
              q: "cross_val_score memberi rata-rata 85% dengan simpangan 15%. Apa artinya?",
              options: [
                "Hasilnya sangat bergantung cara data dibagi, jadi belum bisa dipercaya",
                "Model sudah sangat andal karena rata-rata akurasinya cukup tinggi",
                "Model itu pasti mengalami overfitting berat pada data latihnya",
                "Jumlah datanya terlalu banyak sehingga sebaiknya dikurangi dulu",
              ],
              answer: 0,
              explain:
                "Simpangan besar berarti hasilnya tidak stabil; rata-rata saja menyesatkan.",
            },
            {
              q: "Tiga kata kerja utama di seluruh scikit-learn adalah?",
              options: [
                "load, save, run",
                "fit, predict, transform",
                "train, test, deploy",
                "import, export, compile",
              ],
              answer: 1,
              explain:
                "Keseragaman inilah yang membuat puluhan model bisa dipakai tanpa belajar ulang.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 8: MODEL KLASIK: REGRESI, PELUANG & KEMIRIPAN ---------------- */
    {
      id: "ai-algoritma",
      level: "Algoritma",
      title: "Model Klasik: Regresi, Peluang & Kemiripan",
      summary: "Regresi linear & logistik, SVM & Naive Bayes, k-NN & k-Means, sistem rekomendasi, dan peramalan deret waktu.",
      lessons: [
        {
          id: "ai-alg-1",
          title: "Regresi Linear — Menebak Angka dengan Garis",
          duration: "15 menit",
          content: `
<p>Algoritma machine learning paling tua, paling sederhana, dan — mengejutkannya — masih dipakai setiap hari di bank, pabrik, dan kantor pajak. Kalau kamu hanya boleh memahami satu model, mulailah dari sini, karena hampir semua model lain adalah pengembangannya.</p>

<div data-diagram="pipeline" data-stages="Pasangan data::luas &amp; harga rumah|Tarik garis::harga = a × luas + b|Ukur meleset::selisih dikuadratkan|Garis terbaik::meleset paling kecil" data-caption="Seluruh cara kerja regresi linear dalam empat langkah"></div>

<h3>Fundamental: apa yang ditebak?</h3>
<div class="callout">
Regresi linear menebak <b>angka</b> — harga rumah, omzet bulan depan, lama pengiriman. Caranya: mencari <b>garis lurus</b> yang paling dekat dengan semua titik data, lalu memakai garis itu untuk menebak data baru.<br><br>
<b>ŷ = a · x + b</b><br>
<i>ŷ</i> (dibaca "y topi") = tebakan · <i>x</i> = data yang diketahui · <b>a</b> = kemiringan · <b>b</b> = titik awal
</div>

<p>Ingat pelajaran <b>Membaca Simbol</b>: tanda topi pada ŷ menandakan <i>hasil tebakan</i>, bukan nilai sebenarnya.</p>

<h3>Apa arti "garis terbaik"?</h3>
<p>Setiap garis pasti meleset dari sebagian titik. Garis terbaik adalah yang <b>jumlah kuadrat selisihnya paling kecil</b> — disebut metode <b>kuadrat terkecil</b> (<i>least squares</i>).</p>

<div class="callout warn">
<b>Kenapa selisihnya dikuadratkan, bukan dijumlahkan biasa?</b> Karena selisih positif dan negatif akan saling meniadakan — garis yang ngawur pun bisa terlihat "selisih nol". Mengkuadratkan membuat semua selisih positif, dan sekaligus <b>menghukum kesalahan besar jauh lebih berat</b> daripada kesalahan kecil. Sifat kedua ini penting — dan juga sumber kelemahan terbesarnya, seperti akan kamu lihat.
</div>

<h3>Coba kalahkan garis terbaik</h3>

<div data-demo="regresi-linear"></div>

<h3>Membaca koefisien — bagian paling berguna untuk bisnis</h3>
<p>Kemiringan <b>a</b> bukan sekadar angka matematika. Kalau a = 7,8, artinya: <b>tiap tambahan 1 m², harga naik sekitar Rp7,8 juta</b>. Inilah alasan regresi linear disukai analis — hasilnya bisa diceritakan.</p>

<div class="callout warn">
<b>⚠️ Tapi hati-hati: hubungan bukan sebab-akibat.</b> Regresi hanya menemukan bahwa dua hal bergerak bersama. Penjualan es krim dan kasus tenggelam naik bersamaan — bukan karena es krim menyebabkan tenggelam, melainkan karena keduanya naik saat musim panas. Koefisien yang besar tidak membuktikan x <i>menyebabkan</i> y.
</div>

<h3>Lebih dari satu faktor: regresi berganda</h3>
<p>Harga rumah tidak hanya soal luas. <b>Regresi berganda</b> memakai banyak faktor sekaligus:</p>
<p style="text-align:center"><b>harga = a₁·luas + a₂·jumlah kamar + a₃·jarak ke kota + b</b></p>
<p>Tiap koefisien kini dibaca <b>"dengan faktor lain dianggap tetap"</b> — misalnya a₃ negatif berarti makin jauh dari kota makin murah, untuk luas dan jumlah kamar yang sama.</p>

<h3>Empat kelemahan yang wajib diingat</h3>
<table class="tbl">
  <tr><th>Kelemahan</th><th>Artinya</th></tr>
  <tr><td><b>Peka pencilan</b></td><td>Satu titik ekstrem bisa menarik seluruh garis — seperti di demo</td></tr>
  <tr><td><b>Hanya bisa garis lurus</b></td><td>Hubungan yang melengkung dipaksa lurus. Ingat Kuartet Anscombe: gambar datanya dulu</td></tr>
  <tr><td><b>Faktor yang saling mirip</b></td><td>Luas bangunan &amp; luas tanah yang sangat berkaitan membuat koefisien masing-masing tidak stabil</td></tr>
  <tr><td><b>Menebak di luar jangkauan</b></td><td>Data 30–150 m² tidak bisa dipercaya untuk menebak rumah 2.000 m²</td></tr>
</table>

<h3>Ridge &amp; Lasso — regresi yang direm</h3>
<p>Ingat <b>regularisasi</b> di pelajaran Melatih Model dengan Benar? Dua versi regresi linear memakainya:</p>
<table class="tbl">
  <tr><th></th><th>Ridge</th><th>Lasso</th></tr>
  <tr><td><b>Cara merem</b></td><td>Mengecilkan semua koefisien</td><td>Bisa membuat koefisien tepat <b>nol</b></td></tr>
  <tr><td><b>Akibatnya</b></td><td>Lebih stabil saat banyak faktor saling mirip</td><td>Sekaligus <b>memilih faktor</b> — yang tak berguna dibuang</td></tr>
  <tr><td><b>Kapan dipakai</b></td><td>Semua faktor mungkin berpengaruh sedikit-sedikit</td><td>Curiga banyak faktor tidak berguna</td></tr>
</table>

<pre class="code">from sklearn.linear_model import LinearRegression, Ridge, Lasso

model = LinearRegression()
model.fit(X_latih, y_latih)
print(model.coef_)        # kemiringan tiap faktor
print(model.intercept_)   # titik awal b

ridge = Ridge(alpha=1.0).fit(X_latih, y_latih)
lasso = Lasso(alpha=0.1).fit(X_latih, y_latih)
print(lasso.coef_)        # sebagian bisa bernilai 0 = faktor dibuang</pre>

<div class="callout">
<b>💡 Kenapa masih penting di era deep learning?</b> Karena ia <b>cepat, bisa dijelaskan, dan jadi pembanding dasar</b>. Kalau model rumitmu tidak jauh lebih baik daripada regresi linear, gunakan regresi linear. Banyak keputusan kredit dan penetapan harga resmi justru mensyaratkan model yang bisa dijelaskan seperti ini.
</div>
`,
          keyPoints: [
            "Regresi linear menebak ANGKA dengan mencari garis lurus ŷ = a·x + b yang paling dekat dengan semua titik.",
            "Garis terbaik = jumlah kuadrat selisihnya paling kecil (least squares); dikuadratkan agar selisih tak saling meniadakan dan kesalahan besar dihukum berat.",
            "Kemiringan bisa dibaca untuk bisnis: a = 7,8 berarti tiap tambah 1 m² harga naik sekitar Rp7,8 juta.",
            "Hubungan bukan sebab-akibat: koefisien besar tidak membuktikan x menyebabkan y.",
            "Regresi berganda memakai banyak faktor; tiap koefisien dibaca dengan faktor lain dianggap tetap.",
            "Kelemahan: peka pencilan, hanya garis lurus, faktor yang saling mirip membuat koefisien tak stabil, dan tak bisa dipercaya di luar jangkauan data.",
            "Ridge mengecilkan semua koefisien; Lasso bisa membuat koefisien nol sehingga sekaligus memilih faktor.",
          ],
          practice: [
            { type: "number", q: "Model: harga = 7 × luas + 250 (juta). Berapa tebakan harga rumah 80 m²?", answer: 810, tol: 0.5, hint: "Masukkan luas = 80 ke rumusnya.", solution: "7 × 80 + 250 = 560 + 250 = Rp810 juta." },
            { type: "number", q: "Selisih tebakan tiga rumah adalah −10, 20, dan −10 juta. Berapa jumlah kuadrat selisihnya?", answer: 600, tol: 0.5, hint: "Kuadratkan tiap selisih, lalu jumlahkan.", solution: "100 + 400 + 100 = 600. Perhatikan: kalau dijumlahkan biasa hasilnya 0 — itulah alasan dikuadratkan." },
          ],
          quiz: [
            {
              q: "Kenapa regresi linear memakai kuadrat selisih, bukan jumlah selisih biasa?",
              options: [
                "Agar selisih plus dan minus tak saling hapus, dan meleset besar dihukum berat",
                "Agar hasil perhitungannya selalu berupa bilangan bulat yang mudah dibaca",
                "Agar garisnya otomatis melewati titik tengah dari seluruh data",
                "Agar perhitungannya berjalan lebih cepat pada data berukuran besar",
              ],
              answer: 0,
              explain: "Tanpa dikuadratkan, garis yang sangat meleset pun bisa terlihat berselisih nol.",
            },
            {
              q: "Model harga rumah punya kemiringan luas = 7,8. Pernyataan mana yang paling tepat?",
              options: [
                "Rumah yang lebih luas 1 m² cenderung lebih mahal sekitar Rp7,8 juta",
                "Menambah luas rumah 1 m² pasti menyebabkan harganya naik Rp7,8 juta",
                "Rumah seluas 7,8 m² adalah ukuran yang paling banyak terjual",
                "Harga rumah rata-rata naik 7,8% setiap kali luasnya bertambah",
              ],
              answer: 0,
              explain: "Regresi menemukan kecenderungan bersama, bukan sebab-akibat yang pasti.",
            },
            {
              q: "Apa keunggulan khas Lasso dibanding regresi linear biasa?",
              options: [
                "Bisa membuat koefisien nol sehingga faktor tak berguna terbuang",
                "Bisa menangkap hubungan melengkung tanpa perlu mengubah bentuk datanya",
                "Tidak terpengaruh pencilan sama sekali karena tidak memakai kuadrat",
                "Tidak memerlukan data latih karena koefisiennya ditentukan manusia",
              ],
              answer: 0,
              explain: "Karena itu Lasso sering dipakai saat dicurigai banyak faktor yang sebenarnya tidak berpengaruh.",
            },
            {
              q: "Model dilatih dengan rumah 30–150 m². Kenapa tebakannya untuk rumah 2.000 m² tak bisa dipercaya?",
              options: [
                "Karena hubungan di luar jangkauan data tidak pernah dilihat model dan bisa berbeda",
                "Karena regresi linear hanya bisa menebak angka yang lebih kecil dari seribu",
                "Karena rumah besar selalu dianggap pencilan dan otomatis dibuang model",
                "Karena koefisiennya harus dihitung ulang setiap kali luasnya berubah",
              ],
              answer: 0,
              explain: "Menebak di luar jangkauan (ekstrapolasi) mengandaikan pola yang sama berlanjut — anggapan yang sering keliru.",
            },
          ],
        },
        {
          id: "ai-alg-2",
          title: "Regresi Logistik — Menebak Ya atau Tidak",
          duration: "15 menit",
          content: `
<p>Namanya membingungkan: disebut <b>regresi</b>, padahal dipakai untuk <b>klasifikasi</b> — menebak ya/tidak, lancar/gagal bayar, spam/bukan spam. Ia salah satu model yang paling banyak dipakai di dunia keuangan, dan kamu akan segera tahu kenapa.</p>

<div data-diagram="pipeline" data-stages="Hitung skor::a·x + b seperti regresi|Tekan ke 0–1::lewat fungsi sigmoid|Jadi peluang::mis. 72% gagal bayar|Putuskan::bandingkan dengan ambang" data-caption="Regresi logistik = regresi linear + fungsi sigmoid + ambang keputusan"></div>

<h3>Fundamental: kenapa garis lurus tidak cukup?</h3>
<div class="callout">
Misalnya kita ingin menebak <b>peluang</b> seseorang gagal bayar. Peluang harus di antara 0 dan 1. Tapi garis lurus bisa menghasilkan 1,4 atau −0,3 — angka yang tidak masuk akal sebagai peluang.<br><br>
Solusinya: hitung skor seperti regresi linear, lalu <b>tekan hasilnya ke rentang 0 sampai 1</b> memakai fungsi <b>sigmoid</b> — fungsi berbentuk huruf S yang sudah kamu kenal dari pelajaran fungsi aktivasi.
</div>

<table class="tbl">
  <tr><th>Skor dari model</th><th>Setelah sigmoid</th><th>Artinya</th></tr>
  <tr><td>−4</td><td>0,02</td><td>Hampir pasti lancar</td></tr>
  <tr><td>0</td><td>0,50</td><td>Tidak bisa dibedakan</td></tr>
  <tr><td>+4</td><td>0,98</td><td>Hampir pasti gagal bayar</td></tr>
</table>

<h3>Model memberi peluang — manusia yang memutuskan</h3>
<p>Ini bagian yang paling sering dilupakan: regresi logistik <b>tidak</b> berkata "tolak". Ia berkata "peluangnya 62%". Keputusan menolak atau menerima ditentukan oleh <b>ambang</b> yang kamu pilih.</p>

<div data-demo="ambang-logistik"></div>

<h3>Memilih ambang = memilih kesalahan mana yang lebih mahal</h3>
<table class="tbl">
  <tr><th>Kasus</th><th>Kesalahan yang lebih mahal</th><th>Ambang cenderung</th></tr>
  <tr><td>Kredit</td><td>Meloloskan penunggak (uang hilang)</td><td>Lebih rendah</td></tr>
  <tr><td>Filter spam</td><td>Email penting masuk folder spam</td><td>Lebih tinggi</td></tr>
  <tr><td>Skrining penyakit</td><td>Orang sakit dinyatakan sehat</td><td>Lebih rendah</td></tr>
  <tr><td>Penandaan penipuan</td><td>Terlalu banyak pelanggan jujur diblokir</td><td>Tergantung biaya penanganan</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Ambang 0,5 bukan aturan.</b> Itu hanya nilai bawaan. Memakai 0,5 begitu saja pada kasus kredit atau medis adalah keputusan bisnis yang diambil tanpa sadar. Hubungkan dengan pelajaran <b>precision &amp; recall</b>: ambang adalah tuas yang menggeser keseimbangan keduanya.
</div>

<h3>Kenapa bank menyukainya</h3>
<ul>
  <li><b>Bisa dijelaskan.</b> Tiap faktor punya koefisien yang bisa dibaca: "tunggakan sebelumnya menaikkan risiko sekian". Regulator sering mensyaratkan ini.</li>
  <li><b>Menghasilkan peluang yang cukup terkalibrasi</b> — angka 70% memang cenderung terjadi sekitar 70% kasus.</li>
  <li><b>Cepat dan stabil</b>, bahkan dengan data yang tidak terlalu besar.</li>
  <li><b>Pembanding dasar</b> yang wajib dikalahkan model yang lebih rumit.</li>
</ul>

<pre class="code">from sklearn.linear_model import LogisticRegression

model = LogisticRegression(max_iter=1000)
model.fit(X_latih, y_latih)

peluang = model.predict_proba(X_uji)[:, 1]   # peluang kelas "gagal bayar"
keputusan = (peluang >= 0.3).astype(int)      # ambang dipilih sendiri, bukan 0,5</pre>

<div class="callout">
<b>Batasnya:</b> seperti regresi linear, ia menganggap pengaruh tiap faktor <b>lurus</b> terhadap skor. Pola yang rumit — misalnya risiko tinggi pada usia sangat muda <i>dan</i> sangat tua — tidak tertangkap kecuali kamu menyiapkan fiturnya secara khusus. Di situlah model pohon seperti XGBoost sering unggul.
</div>
`,
          keyPoints: [
            "Meski bernama regresi, regresi logistik dipakai untuk KLASIFIKASI (ya/tidak).",
            "Caranya: hitung skor seperti regresi linear, lalu tekan ke rentang 0–1 dengan fungsi sigmoid sehingga menjadi peluang.",
            "Model hanya memberi peluang; keputusan ditentukan ambang yang dipilih manusia.",
            "Ambang 0,5 hanya bawaan — memilih ambang berarti memilih kesalahan mana yang lebih mahal.",
            "Menurunkan ambang menaikkan recall tapi menambah penolakan keliru; menaikkannya kebalikannya.",
            "Disukai bank karena bisa dijelaskan, peluangnya cukup terkalibrasi, cepat, dan jadi pembanding dasar.",
            "Batasnya: menganggap pengaruh faktor lurus, sehingga pola rumit butuh fitur khusus atau model lain.",
          ],
          practice: [
            { type: "number", q: "Pada ambang tertentu, model menolak 10 orang: 7 memang gagal bayar, 3 sebenarnya lancar. Berapa presisinya (dalam %)?", answer: 70, tol: 0.5, hint: "Presisi = benar ditolak ÷ semua yang ditolak.", solution: "7 ÷ 10 = 70%." },
          ],
          quiz: [
            {
              q: "Kenapa regresi logistik memakai fungsi sigmoid?",
              options: [
                "Untuk menekan skor ke rentang 0 sampai 1 sehingga bisa dibaca sebagai peluang",
                "Untuk mengubah data kategori menjadi angka sebelum model dilatih",
                "Untuk mempercepat pelatihan dengan membuang data yang tidak penting",
                "Untuk membuat garis keputusannya melengkung mengikuti bentuk data",
              ],
              answer: 0,
              explain: "Garis lurus bisa menghasilkan angka di luar 0–1; sigmoid menjaga hasilnya tetap bermakna sebagai peluang.",
            },
            {
              q: "Sebuah bank ingin menangkap sebanyak mungkin calon penunggak. Apa yang sebaiknya dilakukan pada ambang?",
              options: [
                "Menurunkan ambang, dengan konsekuensi lebih banyak nasabah baik ikut ditolak",
                "Menaikkan ambang, agar model menjadi lebih yakin sebelum menolak siapa pun",
                "Mempertahankan ambang 0,5 karena itu nilai yang paling seimbang",
                "Menghapus ambang dan memakai peluang mentahnya sebagai keputusan",
              ],
              answer: 0,
              explain: "Ambang lebih rendah menaikkan recall, tapi presisi turun karena penolakan keliru bertambah.",
            },
            {
              q: "Apa yang sebenarnya dihasilkan regresi logistik?",
              options: [
                "Peluang suatu kejadian; keputusannya bergantung ambang yang dipilih",
                "Keputusan ya atau tidak yang sudah pasti tanpa perlu pengaturan lagi",
                "Angka kontinu seperti harga atau omzet, sama seperti regresi linear",
                "Kelompok-kelompok data tanpa memerlukan label sama sekali",
              ],
              answer: 0,
              explain: "Memisahkan peluang dari keputusan membuat model yang sama bisa dipakai untuk kebutuhan bisnis berbeda.",
            },
            {
              q: "Kenapa regresi logistik tetap populer di dunia kredit meski ada model yang lebih canggih?",
              options: [
                "Karena koefisiennya bisa dijelaskan, yang sering disyaratkan regulator",
                "Karena ia selalu lebih akurat daripada XGBoost pada data kredit",
                "Karena ia satu-satunya model yang bisa menghasilkan peluang",
                "Karena ia tidak memerlukan data historis nasabah sama sekali",
              ],
              answer: 0,
              explain: "Keputusan yang memengaruhi hidup orang sering wajib bisa dijelaskan alasannya.",
            },
          ],
        },
        {
          id: "ai-alg-3",
          title: "SVM & Naive Bayes — Dua Klasifikator Klasik",
          duration: "13 menit",
          content: `
<p>Sebelum era deep learning, dua algoritma ini menguasai banyak tugas klasifikasi — terutama teks. Keduanya masih sering dipakai karena cepat dan kuat pada kondisi tertentu.</p>

<div data-diagram="compare3" data-cols="Regresi logistik::Peluang lewat sigmoid::Mudah dijelaskan|SVM::Pemisah berjarak terlebar::Kuat di dimensi tinggi|Naive Bayes::Hitung peluang per kata::Sangat cepat untuk teks" data-caption="Tiga klasifikator klasik dengan cara berpikir yang berbeda"></div>

<h3>1. SVM — garis pemisah dengan jarak terlebar</h3>
<div class="callout">
Bayangkan titik merah dan biru di atas meja. Banyak garis bisa memisahkan keduanya. <b>SVM</b> (Support Vector Machine) memilih garis yang <b>jaraknya ke titik terdekat dari kedua sisi paling lebar</b> — seperti membuat jalan selebar mungkin di antara dua kampung.<br><br>
Titik-titik yang paling dekat dengan "jalan" itu disebut <b>support vector</b>. Hanya merekalah yang menentukan letak garis; titik lain yang jauh tidak berpengaruh.
</div>

<p>Kenapa jarak terlebar? Garis yang terlalu mepet ke satu kelompok mudah salah saat datang data baru yang sedikit bergeser. Jalan yang lebar memberi <b>ruang aman</b>.</p>

<h3>Trik kernel — kalau datanya tidak bisa dipisah garis lurus</h3>
<div class="callout warn">
Misalkan titik biru berkumpul di tengah dan titik merah melingkarinya. Tidak ada garis lurus yang bisa memisahkan.<br><br>
<b>Trik kernel</b> "mengangkat" data ke dimensi lebih tinggi — bayangkan titik biru di tengah diangkat ke atas meja. Sekarang sebuah bidang datar bisa memisahkan yang terangkat dari yang di bawah. Kembali ke tampilan dua dimensi, pemisah itu terlihat sebagai <b>lingkaran</b>.
</div>

<table class="tbl">
  <tr><th>SVM cocok untuk</th><th>SVM kurang cocok untuk</th></tr>
  <tr><td>Data berukuran kecil sampai menengah</td><td>Data sangat besar (latihannya melambat drastis)</td></tr>
  <tr><td>Banyak kolom, misalnya teks yang diubah jadi ribuan kata</td><td>Saat butuh peluang yang terkalibrasi baik</td></tr>
  <tr><td>Batas kelas yang tegas</td><td>Data yang wajib diskalakan tapi tidak dilakukan</td></tr>
</table>

<h3>2. Naive Bayes — menghitung peluang kata demi kata</h3>
<p>Ingat <b>Teorema Bayes</b> dari modul Matematika: memperbarui keyakinan setelah melihat bukti. Naive Bayes memakainya untuk klasifikasi.</p>

<div class="callout">
<b>Contoh filter spam.</b> Dari data lama diketahui: kata "gratis" muncul di 40% email spam tapi hanya 2% email biasa. Kata "rapat" muncul di 1% spam tapi 15% email biasa.<br><br>
Email baru berisi "gratis" → keyakinan bahwa ini spam <b>naik</b>. Juga berisi "rapat" → keyakinan <b>turun</b>. Naive Bayes menggabungkan bukti dari setiap kata untuk mendapatkan peluang akhirnya.
</div>

<div class="callout warn">
<b>Kenapa disebut "naive" (naif)?</b> Karena ia menganggap setiap kata <b>tidak saling berhubungan</b> — seolah "kartu" dan "kredit" muncul bersama hanya kebetulan. Anggapan ini jelas keliru. Anehnya, hasilnya tetap sering bagus, karena untuk memilih kelas yang benar, peluangnya tidak perlu tepat — cukup urutannya benar.
</div>

<table class="tbl">
  <tr><th>Kelebihan</th><th>Kekurangan</th></tr>
  <tr><td>Sangat cepat, bahkan untuk jutaan dokumen</td><td>Anggapan "kata saling bebas" membuat nilai peluangnya kurang bisa dipercaya</td></tr>
  <tr><td>Butuh sedikit data untuk mulai bekerja</td><td>Tidak paham urutan &amp; konteks: "tidak bagus" dibaca seperti "bagus" + "tidak"</td></tr>
  <tr><td>Pembanding dasar yang sangat baik untuk teks</td><td>Kalah dari model modern pada teks yang bernuansa</td></tr>
</table>

<pre class="code">from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

spam = make_pipeline(CountVectorizer(), MultinomialNB())
spam.fit(teks_latih, label_latih)

svm = make_pipeline(StandardScaler(), SVC(kernel="rbf"))   # SVM wajib diskalakan
svm.fit(X_latih, y_latih)</pre>

<div class="callout">
<b>Posisinya hari ini:</b> untuk data tabel, XGBoost umumnya lebih unggul. Untuk teks bernuansa, model bahasa modern jauh lebih baik. Tapi saat datamu sedikit, butuh hasil dalam hitungan detik, atau perlu pembanding cepat, keduanya masih pilihan yang masuk akal.
</div>
`,
          keyPoints: [
            "SVM mencari garis pemisah dengan jarak terlebar ke titik terdekat kedua kelas; titik terdekat itu disebut support vector.",
            "Jarak terlebar memberi ruang aman sehingga lebih tahan terhadap data baru yang sedikit bergeser.",
            "Trik kernel mengangkat data ke dimensi lebih tinggi agar data yang tak bisa dipisah garis lurus tetap bisa dipisahkan.",
            "SVM cocok untuk data kecil–menengah dengan banyak kolom; lambat pada data sangat besar dan wajib diskalakan.",
            "Naive Bayes memakai Teorema Bayes untuk menggabungkan bukti dari setiap fitur, misalnya kata pada email.",
            "Disebut naive karena menganggap fitur saling bebas — keliru, tapi hasil klasifikasinya tetap sering bagus.",
            "Naive Bayes sangat cepat dan butuh sedikit data, tapi tak paham urutan kata dan nilai peluangnya kurang bisa dipercaya.",
          ],
          quiz: [
            {
              q: "Garis pemisah seperti apa yang dipilih SVM?",
              options: [
                "Garis yang jaraknya ke titik terdekat dari kedua kelas paling lebar",
                "Garis yang melewati titik tengah dari seluruh data yang ada",
                "Garis yang membagi data menjadi dua kelompok dengan jumlah sama",
                "Garis yang memiliki kemiringan paling kecil di antara semua pilihan",
              ],
              answer: 0,
              explain: "Jarak terlebar memberi ruang aman bagi data baru yang sedikit bergeser.",
            },
            {
              q: "Apa fungsi trik kernel pada SVM?",
              options: [
                "Mengangkat data ke dimensi lebih tinggi agar tetap bisa dipisahkan",
                "Mempercepat pelatihan dengan hanya memakai sebagian kecil data secara acak",
                "Mengubah hasil klasifikasi menjadi peluang yang terkalibrasi dengan baik",
                "Membuang titik-titik yang dianggap pencilan sebelum model dilatih",
              ],
              answer: 0,
              explain: "Pemisah datar di dimensi tinggi bisa tampak melengkung saat dilihat kembali di dimensi aslinya.",
            },
            {
              q: "Kenapa Naive Bayes disebut 'naif'?",
              options: [
                "Karena menganggap tiap fitur saling bebas, padahal sering berhubungan",
                "Karena hanya bisa dipakai oleh pemula yang baru belajar machine learning",
                "Karena tidak memakai data latih sama sekali untuk membuat keputusan",
                "Karena hasilnya selalu lebih buruk daripada menebak secara acak",
              ],
              answer: 0,
              explain: "Anggapan itu keliru, tapi urutan peluang antar-kelas sering tetap benar sehingga klasifikasinya bagus.",
            },
          ],
        },
        {
          id: "ai-deep-3",
          title: "k-NN & Clustering (k-Means)",
          duration: "10 menit",
          content: `
<p>Dua algoritma klasik lagi yang intuitif — dan menutup gambaran "ML selain neural network".</p>

<div data-diagram="compare3" data-cols="k-NN::data sudah berlabel::tanya tetangga terdekat|k-Means::data tanpa label::kelompokkan yang mirip|Bedanya::terbimbing vs tidak::ada label atau tidak" data-caption="Sama-sama soal 'kedekatan', beda pada ada tidaknya label"></div>


<h3>k-NN: "Kamu mirip siapa?"</h3>
<p><b>k-Nearest Neighbors</b> mengklasifikasikan sesuatu berdasarkan <b>tetangga terdekatnya</b>. Untuk menebak selera film seseorang, lihat beberapa orang yang paling mirip dengannya — kemungkinan seleranya serupa.</p>
<div class="callout">
<b>Prinsipnya:</b> "hal yang mirip cenderung berdekatan." Ambil <b>k</b> data paling mirip, lalu ikuti mayoritas mereka.
</div>

<h3>k-Means: mengelompokkan tanpa label</h3>
<p><b>k-Means</b> adalah <b>clustering</b> (pengelompokan) — ini <b>unsupervised</b> (tanpa jawaban benar). Ia membagi data menjadi <b>k kelompok</b> yang anggotanya saling mirip.</p>
<div class="callout">
<b>Contoh nyata:</b> toko membagi pelanggan jadi 3 kelompok otomatis (mis. "hemat", "royal", "musiman") tanpa diberi tahu sebelumnya — lalu strategi pemasaran disesuaikan tiap kelompok.
</div>

<h3>Kapan pakai ML klasik vs neural network?</h3>
<table class="tbl">
  <tr><th>Pakai ML Klasik</th><th>Pakai Neural Network / Deep Learning</th></tr>
  <tr><td>Data tabel (spreadsheet), data terbatas, butuh penjelasan</td><td>Data rumit: gambar, suara, teks panjang; data sangat besar</td></tr>
</table>
`,
          keyPoints: [
            "k-NN mengklasifikasi berdasarkan tetangga terdekat ('hal mirip berdekatan').",
            "k-Means = clustering (unsupervised): membagi data jadi k kelompok yang saling mirip, tanpa label.",
            "Contoh clustering: segmentasi pelanggan otomatis.",
            "ML klasik cocok untuk data tabel/terbatas & butuh penjelasan; neural network untuk data rumit & besar.",
          ],
          quiz: [
            {
              q: "Prinsip dasar k-NN?",
              options: [
                "Hal yang mirip cenderung berdekatan — ikuti mayoritas tetangganya",
                "Data dikelompokkan lebih dulu sebelum labelnya ditentukan manusia",
                "Setiap data diberi bobot sesuai seberapa sering ia muncul",
                "Model membangun aturan bercabang dari ciri yang paling membedakan",
              ],
              answer: 0,
              explain: "k-NN mengklasifikasi berdasarkan kemiripan dengan tetangga terdekat.",
            },
            {
              q: "k-Means clustering termasuk jenis pembelajaran?",
              options: [
                "Unsupervised — mengelompokkan sendiri tanpa memerlukan label",
                "Supervised — memerlukan label yang sudah disiapkan manusia",
                "Reinforcement — belajar dari hadiah dan hukuman berulang",
                "Semi-supervised — memakai sebagian kecil data yang berlabel",
              ],
              answer: 0,
              explain: "Clustering mengelompokkan data tanpa jawaban benar (unsupervised).",
            },
          ],
        },
        {
          id: "ai-app-3",
          title: "Sistem Rekomendasi",
          duration: "11 menit",
          content: `
<p>Kenapa YouTube, TikTok, & Shopee seolah tahu apa yang kamu suka? Itu kerja <b>sistem rekomendasi</b> — salah satu penerapan AI paling bernilai secara bisnis.</p>

<div data-diagram="compare3" data-cols="Berbasis konten::mirip yang kamu suka::aman tapi membosankan|Kolaboratif::orang mirip kamu suka ini::bisa memberi kejutan|Gabungan::dipakai layanan besar::ambil kelebihan keduanya" data-caption="Tiga cara sistem rekomendasi menebak seleramu"></div>


<h3>Dua pendekatan utama</h3>
<table class="tbl">
  <tr><th>Pendekatan</th><th>Ide</th><th>Contoh</th></tr>
  <tr><td><b>Collaborative Filtering</b></td><td>"Orang yang mirip denganmu menyukai ini"</td><td>Pengguna berselera mirip → saling merekomendasikan</td></tr>
  <tr><td><b>Content-Based</b></td><td>"Barang mirip dengan yang kamu suka"</td><td>Suka film aksi → rekomendasikan film aksi lain</td></tr>
</table>
<p>Sistem nyata biasanya <b>hibrida</b> (gabungan keduanya) plus sinyal lain (waktu tonton, klik).</p>

<div class="callout">
<b>Umpan balik:</b> setiap klik & durasi tontonanmu jadi <b>data latih</b> yang terus menyempurnakan rekomendasi. Makin kamu pakai, makin ia "mengenalmu".
</div>

<h3>💥 Dampak</h3>
<ul>
  <li>👍 Sangat kuat untuk <b>keterlibatan (engagement)</b> & penjualan.</li>
  <li>👎 Risiko: <b>filter bubble</b> (hanya melihat yang serupa), kecanduan, dan penguatan bias.</li>
</ul>
`,
          keyPoints: [
            "Sistem rekomendasi memprediksi yang kamu suka; penerapan AI bernilai bisnis tinggi.",
            "Collaborative filtering = 'orang mirip suka ini'; content-based = 'barang mirip yang kamu suka'.",
            "Sistem nyata hibrida + sinyal perilaku (klik, durasi) sebagai data latih.",
            "Dampak: mendongkrak engagement/penjualan, tapi berisiko filter bubble, kecanduan, & bias.",
          ],
          practice: [
            { type: "choice", q: "'Pengguna dengan selera mirip denganmu juga menyukai lagu ini' — ini pendekatan?", options: ["Content-based", "Collaborative filtering"], answer: 1, hint: "Berdasarkan kemiripan antar-pengguna atau antar-barang?", solution: "Berdasarkan pengguna serupa = collaborative filtering." },
            { type: "choice", q: "'Kamu suka film horor, ini film horor lain yang mirip' — pendekatan?", options: ["Content-based", "Collaborative filtering"], answer: 0, hint: "Berdasarkan atribut barang yang mirip?", solution: "Berdasarkan kemiripan konten/atribut barang = content-based." },
          ],
          quiz: [
            {
              q: "Apa itu collaborative filtering?",
              options: [
                "Merekomendasikan berdasar selera pengguna lain yang mirip denganmu",
                "Merekomendasikan barang yang ciri-cirinya mirip dengan yang kamu suka",
                "Merekomendasikan barang yang paling laris di seluruh platform",
                "Merekomendasikan barang yang marginnya paling besar bagi penjual",
              ],
              answer: 0,
              explain:
                "Collaborative filtering memakai kemiripan antar-pengguna untuk merekomendasikan.",
            },
            {
              q: "Risiko sistem rekomendasi?",
              options: [
                "Filter bubble, kecanduan, dan penguatan bias yang sudah ada",
                "Biaya komputasi yang membengkak seiring bertambahnya pengguna",
                "Rekomendasi menjadi terlalu beragam sehingga membingungkan",
                "Data pengguna menjadi terlalu sedikit untuk dianalisis",
              ],
              answer: 0,
              explain: "Rekomendasi bisa mempersempit paparan & memperkuat kebiasaan/bias.",
            },
          ],
        },
        {
          id: "ai-pl-2",
          title: "Peramalan Deret Waktu (Time Series)",
          duration: "12 menit",
          content: `
<p>Ini penerapan AI yang paling sering dipakai bisnis: <b>meramal angka masa depan</b> — penjualan bulan depan, permintaan barang, kebutuhan stok.</p>

<div data-diagram="layers" data-items="Noise (acak)|Musiman (berulang)|Tren (arah panjang)" data-caption="Tiga unsur deret waktu"></div>


<h3>Fundamental: data yang berurut waktu</h3>
<p><b>Deret waktu (time series)</b> adalah data yang <b>terikat urutan waktu</b>: penjualan harian, suhu tiap jam, jumlah pengunjung tiap bulan. Bedanya dengan data biasa: <b>urutannya bermakna</b> — data kemarin memengaruhi data hari ini.</p>

<h3>Tiga unsur dalam deret waktu</h3>
<table class="tbl">
  <tr><th>Unsur</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>Tren</b></td><td>Arah jangka panjang</td><td>Penjualan naik terus tiap tahun</td></tr>
  <tr><td><b>Musiman</b> (seasonality)</td><td>Pola berulang</td><td>Ramai tiap akhir pekan / Lebaran</td></tr>
  <tr><td><b>Noise</b></td><td>Naik-turun acak</td><td>Kejadian tak terduga sehari-hari</td></tr>
</table>

<div class="callout">
<b>Inti peramalan:</b> pisahkan <b>pola</b> (tren + musiman) dari <b>keributan</b> (noise), lalu proyeksikan polanya ke depan.
</div>

<h3>Coba sendiri — ramalan sederhana 👇</h3>
<div data-demo="js-playground">// Peramalan sederhana: rata-rata bergerak (moving average)
const penjualan = [100, 120, 115, 130, 125, 140, 135, 150];
const periode = 3;

console.log("Data penjualan: " + penjualan.join(", "));

const terakhir = penjualan.slice(penjualan.length - periode);
let jumlah = 0;
terakhir.forEach(function(v){ jumlah = jumlah + v; });
const ramalan = jumlah / periode;

console.log("Tiga data terakhir: " + terakhir.join(", "));
console.log("Ramalan periode berikutnya = " + ramalan.toFixed(1));
console.log("-----");
console.log("Rata-rata bergerak meredam naik-turun acak & menyoroti arah tren.");
console.log("Catatan: metode ini TIDAK bisa meramal kejutan mendadak.");</div>

<h3>Metode dari sederhana ke canggih</h3>
<ul>
  <li><b>Rata-rata bergerak</b> — sederhana, bagus untuk melihat tren.</li>
  <li><b>ARIMA / model statistik</b> — memodelkan tren &amp; musiman secara formal.</li>
  <li><b>Model ML/deep learning</b> — menangkap pola rumit, butuh lebih banyak data.</li>
</ul>

<div class="callout warn">
<b>Batas kejujuran:</b> peramalan hanya bisa memperpanjang <b>pola yang sudah ada</b>. Ia <b>tidak bisa</b> meramal kejutan (pandemi, krisis, teknologi baru). Karena itu ramalan sebaiknya disajikan sebagai <b>rentang kemungkinan</b> — persis prinsip di modul <i>Prospek</i> jalur Akuntansi.
</div>
`,
          keyPoints: [
            "Deret waktu = data yang terikat urutan waktu; urutannya bermakna.",
            "Tiga unsur: tren (arah panjang), musiman (pola berulang), noise (acak).",
            "Inti peramalan: pisahkan pola dari noise lalu proyeksikan ke depan.",
            "Metode: rata-rata bergerak → ARIMA → model ML. Batas: tak bisa meramal kejutan; sajikan sebagai rentang.",
          ],
          practice: [
            { type: "number", q: "Tiga data penjualan terakhir: 140, 135, 150. Berapa ramalan rata-rata bergerak untuk periode berikutnya? (1 desimal)", answer: 141.7, tol: 0.2, hint: "Jumlahkan lalu bagi 3.", solution: "(140 + 135 + 150) ÷ 3 = 141,67 ≈ 141,7." },
            { type: "choice", q: "Penjualan toko selalu melonjak tiap menjelang Lebaran. Ini unsur apa dalam deret waktu?", options: ["Tren", "Musiman (seasonality)", "Noise", "Outlier"], answer: 1, hint: "Pola yang berulang pada waktu tertentu.", solution: "Pola berulang periodik = musiman (seasonality)." },
          ],
          quiz: [
            {
              q: "Apa yang membedakan data deret waktu dari data biasa?",
              options: [
                "Urutan waktunya bermakna — data sebelumnya memengaruhi berikutnya",
                "Jumlah barisnya selalu jauh lebih banyak daripada data biasa",
                "Nilainya selalu berupa angka, tidak pernah berupa kategori",
                "Datanya tidak pernah memiliki nilai yang kosong atau hilang",
              ],
              answer: 0,
              explain: "Ketergantungan pada urutan waktu adalah ciri khas time series.",
            },
            {
              q: "Apa batas utama peramalan deret waktu?",
              options: [
                "Hanya bisa memperpanjang pola yang ada, bukan meramal kejutan",
                "Membutuhkan data yang jumlahnya jauh lebih besar dari metode lain",
                "Hanya bisa dipakai untuk data keuangan, bukan bidang lainnya",
                "Hasilnya baru bisa dilihat setelah periode ramalannya berlalu",
              ],
              answer: 0,
              explain:
                "Kejadian tak terduga di luar pola historis tidak bisa diramalkan model.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 9: POHON KEPUTUSAN, ENSEMBLE & POLA TERSEMBUNYI ---------------- */
    {
      id: "ai-ensemble",
      level: "Ensemble",
      title: "Pohon Keputusan, Ensemble & Pola Tersembunyi",
      summary: "Dari satu pohon keputusan ke Random Forest, XGBoost, LightGBM & CatBoost — lalu Isolation Forest, PCA, DBSCAN, dan peta memilih algoritma.",
      lessons: [
        {
          id: "ai-deep-1",
          title: "Decision Tree (Pohon Keputusan)",
          duration: "10 menit",
          content: `
<p>Selama ini kita banyak membahas neural network. Padahal untuk banyak masalah bisnis, algoritma <b>klasik</b> yang lebih sederhana justru lebih pas. Yang paling mudah dipahami: <b>Decision Tree</b>.</p>

<div data-diagram="tree" data-nodes="Berbulu?::Menggonggong?::Bisa terbang?" data-leaves="Anjing|Kucing|Burung|Ikan" data-caption="Pohon keputusan: rangkaian pertanyaan ya/tidak sampai tiba di jawaban"></div>


<h3>Fundamental: ini cuma "20 pertanyaan"</h3>
<p>Kamu pasti pernah main tebak-tebakan "20 pertanyaan": lewat serangkaian pertanyaan <b>ya/tidak</b>, kamu menyempit ke satu jawaban. <b>Decision Tree</b> bekerja persis begitu.</p>

<div class="callout">
<b>Contoh — menebak apakah pelanggan akan membeli:</b>
<ul>
  <li>Umur di atas 25? → <b>Ya</b></li>
  <li>Penghasilan tinggi? → <b>Ya</b> → prediksi: <b>Beli</b> ✅</li>
  <li>(kalau tidak) Pernah beli sebelumnya? → <b>Tidak</b> → prediksi: <b>Tidak beli</b></li>
</ul>
Model menyusun pertanyaan-pertanyaan ini <b>otomatis dari data</b>, memilih pertanyaan yang paling memisahkan hasil.
</div>

<h3>Kenapa disukai?</h3>
<ul>
  <li><b>Mudah dijelaskan</b> (bisa digambar sebagai pohon) — penting untuk bisnis & regulasi.</li>
  <li>Cepat, tak butuh data raksasa.</li>
  <li>Bekerja untuk klasifikasi (kategori) maupun angka.</li>
</ul>

<div class="callout warn">
<b>Kelemahan:</b> satu pohon mudah <b>overfitting</b> (menghafal data latih). Solusinya ada di pelajaran berikutnya: gabungkan banyak pohon (Random Forest).
</div>

<div data-demo="decision-tree"></div>
`,
          keyPoints: [
            "Decision Tree = serangkaian pertanyaan ya/tidak yang menuntun ke keputusan (seperti '20 pertanyaan').",
            "Model menyusun pertanyaan otomatis dari data, memilih yang paling memisahkan hasil.",
            "Kelebihan: mudah dijelaskan (interpretable), cepat, tak butuh data raksasa.",
            "Kelemahan: satu pohon mudah overfitting.",
          ],
          quiz: [
            {
              q: "Bagaimana cara kerja Decision Tree?",
              options: [
                "Serangkaian pertanyaan ya/tidak yang menuntun sampai ke keputusan",
                "Menghitung jarak ke seluruh data lain lalu mengambil yang terdekat",
                "Menggabungkan banyak model kecil menjadi satu keputusan bersama",
                "Menyesuaikan bobot secara bertahap sampai kesalahannya kecil",
              ],
              answer: 0,
              explain: "Decision tree memecah data lewat pertanyaan bertingkat menuju prediksi.",
            },
            {
              q: "Kelebihan utama Decision Tree untuk bisnis?",
              options: [
                "Alurnya mudah digambar dan dijelaskan kepada orang non-teknis",
                "Selalu memberi akurasi tertinggi dibanding metode lainnya",
                "Tidak memerlukan data berlabel sehingga lebih hemat biaya",
                "Berjalan paling cepat di antara seluruh algoritma yang ada",
              ],
              answer: 0,
              explain: "Keputusannya transparan & mudah dipahami manusia.",
            },
          ],
        },
        {
          id: "ai-deep-2",
          title: "Random Forest & Kekuatan 'Kerumunan'",
          duration: "10 menit",
          content: `
<p>Satu Decision Tree mudah keliru. Solusinya memakai prinsip yang sudah kamu kenal: <b>kebijaksanaan orang banyak</b>.</p>

<div data-diagram="network" data-center="Suara terbanyak: Kucing" data-nodes="Pohon 1: Kucing|Pohon 2: Anjing|Pohon 3: Kucing|Pohon 4: Kucing|Pohon 5: Kucing" data-caption="Random Forest: tiap pohon memutuskan sendiri, jawaban akhir diambil dari suara terbanyak"></div>


<h3>Fundamental: tebakan gabungan lebih pintar</h3>
<p>Kalau kamu bertanya "berapa jumlah permen di toples?" ke <b>satu</b> orang, tebakannya bisa jauh meleset. Tapi <b>rata-rata tebakan 100 orang</b> sering sangat dekat dengan jawaban benar. Itulah <b>ensemble</b> (penggabungan).</p>

<div class="callout">
<b>Random Forest</b> = "hutan" berisi <b>banyak Decision Tree</b>. Tiap pohon dilatih pada bagian data yang sedikit berbeda, lalu hasil semua pohon <b>digabung</b> (voting untuk kategori, atau dirata-rata untuk angka).
</div>

<h3>Kenapa jauh lebih baik?</h3>
<ul>
  <li>Kesalahan tiap pohon <b>saling meniadakan</b> saat digabung → lebih akurat.</li>
  <li>Jauh lebih tahan <b>overfitting</b> daripada satu pohon.</li>
  <li>Salah satu algoritma paling <b>andal & populer</b> untuk data tabel (spreadsheet) di dunia nyata.</li>
</ul>

<div class="callout">
<b>Intinya:</b> banyak model "biasa" yang digabung sering mengalahkan satu model "canggih". Prinsip ensemble ini dipakai di mana-mana, dari deteksi penipuan sampai rekomendasi.
</div>
`,
          keyPoints: [
            "Random Forest = gabungan banyak Decision Tree (ensemble).",
            "Prinsip 'kebijaksanaan orang banyak': tebakan gabungan lebih akurat & stabil.",
            "Tiap pohon dilatih pada data sedikit berbeda; hasil digabung (voting/rata-rata).",
            "Jauh lebih tahan overfitting; sangat andal untuk data tabel dunia nyata.",
          ],
          quiz: [
            {
              q: "Apa itu Random Forest?",
              options: [
                "Gabungan banyak pohon keputusan yang hasilnya dirata-ratakan",
                "Satu pohon keputusan yang dibuat sangat dalam dan bercabang banyak",
                "Pohon keputusan yang cabangnya dipangkas agar tidak terlalu rumit",
                "Jaringan saraf yang strukturnya menyerupai percabangan pohon",
              ],
              answer: 0,
              explain: "Random Forest menggabungkan banyak pohon agar lebih akurat & stabil.",
            },
            {
              q: "Kenapa menggabungkan banyak pohon lebih baik?",
              options: [
                "Kesalahan tiap pohon saling meniadakan sehingga hasilnya lebih stabil",
                "Waktu pelatihannya jadi jauh lebih singkat dibanding satu pohon",
                "Hasilnya jadi lebih mudah dijelaskan kepada orang non-teknis",
                "Kebutuhan datanya berkurang karena tiap pohon memakai data berbeda",
              ],
              answer: 0,
              explain: "Penggabungan meredam kesalahan individual (prinsip ensemble).",
            },
          ],
        },
        {
          id: "ai-alg-7",
          title: "Random Forest dalam Praktik",
          duration: "15 menit",
          content: `
<p>Di pelajaran sebelumnya kamu melihat idenya: banyak pohon memberi suara, jawaban terbanyak menang. Tapi ada syarat tersembunyi yang membuat ide itu bekerja — dan syarat inilah yang menentukan cara memakai Random Forest dengan benar.</p>

<div data-diagram="pipeline" data-stages="Ambil baris::acak, boleh terulang|Pilih kolom::sebagian, di tiap cabang|Tumbuhkan pohon::dalam, tanpa dipangkas|Gabungkan::suara terbanyak / rata-rata" data-caption="Dua sumber keacakan (baris &amp; kolom) membuat setiap pohon berbeda"></div>

<h3>Fundamental: kerumunan hanya pintar kalau isinya beragam</h3>
<div class="callout">
Bayangkan meminta 100 orang menebak harga sebuah rumah. Kalau mereka menebak <b>sendiri-sendiri</b>, kesalahan yang terlalu tinggi dan terlalu rendah saling menutupi — rata-ratanya jitu.<br><br>
Tapi kalau ke-100 orang itu <b>membaca satu iklan yang sama</b> sebelum menebak, kesalahan mereka searah. Rata-rata 100 tebakan yang keliru ke arah yang sama tetap keliru.<br><br>
<b>Hutan juga begitu.</b> Kalau semua pohon dilatih dengan data yang sama persis, mereka tumbuh identik dan membuat kesalahan yang sama. Menambah pohon tidak menolong sedikit pun.
</div>

<div data-demo="hutan-korelasi"></div>

<p>Rumus di demo itu adalah inti teori Random Forest. Keraguan yang tersisa terdiri dari dua bagian:</p>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th><th>Cara menurunkannya</th></tr>
  <tr><td><b>(1 − ρ) ÷ n</b></td><td>Kesalahan yang berbeda-beda antar-pohon</td><td>Tambah jumlah pohon</td></tr>
  <tr><td><b>ρ</b></td><td>Kesalahan yang dibuat bersama oleh semua pohon</td><td>Buat pohon lebih berbeda — <b>tidak bisa</b> dengan menambah pohon</td></tr>
</table>

<h3>Dua sumber keacakan</h3>
<table class="tbl">
  <tr><th>Keacakan</th><th>Caranya</th><th>Efeknya</th></tr>
  <tr><td><b>Bootstrap</b> (baris)</td><td>Tiap pohon mengambil baris secara acak <b>dengan pengembalian</b> — satu baris bisa terambil dua kali, baris lain tidak sama sekali</td><td>Tiap pohon melihat versi data yang sedikit berbeda</td></tr>
  <tr><td><b>Kolom acak</b> (fitur)</td><td>Di setiap cabang, pohon hanya boleh memilih dari sebagian kolom</td><td>Satu kolom yang sangat kuat tidak mendominasi semua pohon</td></tr>
</table>

<div class="callout warn">
<b>Kenapa kolom acak begitu penting?</b> Misalkan kolom "riwayat tunggakan" sangat kuat. Dengan bootstrap saja, hampir semua pohon tetap memilihnya sebagai cabang pertama — pohon-pohonnya jadi mirip. Dengan kolom acak, sebagian pohon <b>terpaksa</b> belajar dari kolom lain, sehingga ditemukan pola yang tadinya tertutupi. Inilah yang membedakan Random Forest dari sekadar "banyak pohon".
</div>

<h3>Bonus gratis: nilai out-of-bag</h3>
<p>Karena bootstrap mengambil dengan pengembalian, setiap pohon <b>tidak pernah melihat sekitar 37%</b> baris data. Baris-baris itu bisa dipakai menguji pohon tersebut — seperti data validasi gratis, tanpa perlu menyisihkan data. Hasil gabungannya disebut <b>OOB score</b>.</p>
<p style="text-align:center">Peluang satu baris tidak terambil = (1 − 1/n)ⁿ ≈ <b>36,8%</b> untuk n yang besar</p>

<h3>Empat pengaturan yang perlu dipahami</h3>
<table class="tbl">
  <tr><th>Pengaturan</th><th>Artinya</th><th>Pegangan praktis</th></tr>
  <tr><td><b>n_estimators</b></td><td>Jumlah pohon</td><td>Lebih banyak hampir tidak pernah merusak — hanya makin lambat. Mulai 300–500</td></tr>
  <tr><td><b>max_features</b></td><td>Porsi kolom di tiap cabang</td><td><b>Pengaturan terpenting</b> — ia mengatur kemiripan antar-pohon. Klasifikasi biasanya "sqrt"</td></tr>
  <tr><td><b>min_samples_leaf</b></td><td>Baris minimum di satu daun</td><td>Naikkan (mis. 5) bila data berisik agar pohon tidak menghafal</td></tr>
  <tr><td><b>class_weight</b></td><td>Bobot tiap kelas</td><td>"balanced" saat kelas timpang, misalnya penipuan hanya 1%</td></tr>
</table>

<div class="callout">
<b>💡 Perbedaan penting dengan boosting:</b> di Random Forest, pohon tambahan dilatih <b>terpisah</b> lalu dirata-rata, jadi menambah pohon tidak membuat model menghafal. Di boosting (pelajaran berikutnya), pohon dilatih <b>berurutan</b> untuk mengejar kesalahan — di sana terlalu banyak pohon justru berbahaya.
</div>

<pre class="code">from sklearn.ensemble import RandomForestClassifier
from sklearn.inspection import permutation_importance

model = RandomForestClassifier(
    n_estimators=500,
    max_features="sqrt",
    min_samples_leaf=2,
    class_weight="balanced",
    oob_score=True,      # nilai out-of-bag gratis
    n_jobs=-1,           # pakai semua inti CPU (pohon dilatih paralel)
    random_state=42,
)
model.fit(X_latih, y_latih)
print(model.oob_score_)

hasil = permutation_importance(model, X_validasi, y_validasi, n_repeats=10, random_state=42)
print(hasil.importances_mean)</pre>

<h3>🚩 Dua jebakan yang sering terjadi</h3>
<ol>
  <li><b>Feature importance bawaan bias.</b> <i>feature_importances_</i> cenderung melebih-lebihkan kolom dengan banyak nilai unik (misalnya nomor ID atau angka kontinu). Pakai <b>permutation importance</b> pada data validasi: acak satu kolom, lihat seberapa besar skornya turun.</li>
  <li><b>Tidak bisa menebak di luar jangkauan data.</b> Tebakan pohon adalah rata-rata isi daunnya. Kalau harga tertinggi di data latih Rp2 miliar, Random Forest tidak akan pernah menebak Rp3 miliar — walau trennya jelas naik. Untuk data yang terus tumbuh seperti omzet, ini kelemahan serius.</li>
</ol>

<div class="callout">
<b>Kapan memilih Random Forest?</b> Saat butuh model tabel yang <b>kuat tanpa banyak penyetelan</b>. Dengan pengaturan bawaan pun hasilnya biasanya sudah layak, sehingga ia sangat baik sebagai pembanding pertama. XGBoost dan LightGBM sering sedikit lebih akurat, tapi menuntut penyetelan lebih teliti.
</div>
`,
          keyPoints: [
            "Random Forest hanya pintar bila pohonnya beragam: pohon yang identik membuat kesalahan yang sama dan tidak saling menutupi.",
            "Keraguan tersisa = ρ + (1 − ρ) ÷ n; menambah pohon hanya menghapus bagian kedua, bagian ρ butuh pohon yang lebih berbeda.",
            "Dua sumber keacakan: bootstrap (baris diambil acak dengan pengembalian) dan kolom acak di setiap cabang.",
            "Tiap pohon tidak melihat sekitar 37% baris, sehingga tersedia nilai out-of-bag sebagai validasi gratis.",
            "max_features adalah pengaturan terpenting karena mengatur kemiripan antar-pohon; menambah pohon hampir tidak pernah merusak.",
            "Feature importance bawaan bias ke kolom bernilai unik banyak — pakai permutation importance pada data validasi.",
            "Random Forest tidak bisa menebak di luar jangkauan nilai data latih.",
          ],
          practice: [
            { type: "number", q: "Data latih punya 1.000 baris. Kira-kira berapa baris yang TIDAK terambil oleh satu pohon (bootstrap)?", answer: 368, tol: 3, hint: "Sekitar 36,8% baris tidak terambil.", solution: "36,8% × 1.000 ≈ 368 baris — itulah data out-of-bag untuk pohon tersebut." },
            { type: "number", q: "ρ = 0,2 dan jumlah pohon 100. Berapa keraguan yang tersisa menurut rumus ρ + (1 − ρ) ÷ n? (3 desimal)", answer: 0.208, tol: 0.001, hint: "0,2 + 0,8 ÷ 100.", solution: "0,2 + 0,008 = 0,208. Perhatikan: hampir seluruhnya berasal dari ρ, jadi menambah pohon lagi nyaris tak berguna." },
          ],
          quiz: [
            {
              q: "Kenapa menambah pohon di Random Forest tidak lagi meningkatkan akurasi setelah titik tertentu?",
              options: [
                "Karena kesalahan yang dibuat bersama oleh semua pohon tidak berkurang dengan menambah pohon",
                "Karena pohon tambahan mulai menghafal data latih sehingga model menjadi overfitting",
                "Karena scikit-learn membatasi jumlah pohon yang benar-benar dipakai saat menebak",
                "Karena pohon-pohon baru selalu dilatih ulang dengan data yang lebih sedikit",
              ],
              answer: 0,
              explain: "Bagian ρ dari rumus hanya turun bila pohon dibuat lebih berbeda, bukan lebih banyak.",
            },
            {
              q: "Apa fungsi utama pemilihan kolom acak di setiap cabang?",
              options: [
                "Mencegah satu kolom yang sangat kuat mendominasi semua pohon sehingga pohonnya beragam",
                "Mempercepat pelatihan dengan membuang kolom yang dianggap tidak penting secara permanen",
                "Menggantikan kebutuhan data validasi karena setiap kolom diuji secara bergantian",
                "Membuat setiap pohon lebih dangkal sehingga lebih mudah dijelaskan kepada manusia",
              ],
              answer: 0,
              explain: "Pohon yang terpaksa belajar dari kolom lain membuat kesalahan yang berbeda — dan itulah yang saling menutupi.",
            },
            {
              q: "Apa itu nilai out-of-bag (OOB)?",
              options: [
                "Skor dari menguji tiap pohon pada baris yang tidak terambil saat bootstrap-nya",
                "Skor dari data uji yang disisihkan manual sebelum hutan mulai dilatih",
                "Jumlah pohon yang dibuang karena akurasinya berada di bawah rata-rata",
                "Persentase kolom yang tidak pernah dipilih oleh pohon mana pun di hutan",
              ],
              answer: 0,
              explain: "Sekitar 37% baris tidak dilihat tiap pohon, sehingga bisa dipakai menguji pohon itu tanpa menyisihkan data.",
            },
            {
              q: "Random Forest dilatih dengan omzet bulanan tertinggi Rp500 juta, lalu tren naik ke Rp700 juta. Apa yang terjadi?",
              options: [
                "Tebakannya tertahan di sekitar nilai tertinggi yang pernah dilihat karena daun hanya merata-rata",
                "Tebakannya ikut naik mengikuti tren karena setiap pohon menarik garis lurus di daunnya",
                "Model menolak menebak dan mengembalikan nilai kosong untuk data di luar jangkauan",
                "Model otomatis menambah pohon baru sampai tebakannya menyamai tren yang sedang terjadi",
              ],
              answer: 0,
              explain: "Isi daun adalah rata-rata data latih, jadi pohon tidak bisa menebak di luar jangkauan yang pernah dilihat.",
            },
          ],
        },
        {
          id: "ai-ars-3",
          title: "Boosting & XGBoost",
          duration: "12 menit",
          content: `
<p>Kamu sudah kenal <b>Random Forest</b> (banyak pohon bekerja bersama). Sekarang saudara dekatnya yang sering <b>lebih kuat</b> untuk data tabel: <b>boosting</b>.</p>

<h3>Dua cara menggabungkan model</h3>
<table class="tbl">
  <tr><th></th><th>Bagging (Random Forest)</th><th>Boosting (XGBoost dkk)</th></tr>
  <tr><td>Cara kerja</td><td>Banyak pohon dilatih <b>bersamaan &amp; mandiri</b></td><td>Pohon dilatih <b>berurutan</b>, saling memperbaiki</td></tr>
  <tr><td>Fokus tiap model</td><td>Bagian data acak</td><td><b>Kesalahan</b> model sebelumnya</td></tr>
  <tr><td>Penggabungan</td><td>Voting / rata-rata</td><td>Dijumlahkan bertahap</td></tr>
  <tr><td>Sifat</td><td>Stabil, sulit overfit</td><td>Sering <b>lebih akurat</b>, tapi perlu disetel hati-hati</td></tr>
</table>

<div class="callout">
<b>Analogi boosting:</b> bayangkan sekelompok siswa mengerjakan soal bergiliran. Siswa ke-2 <b>fokus pada soal yang salah</b> dijawab siswa ke-1. Siswa ke-3 fokus pada yang masih salah setelah keduanya. Begitu seterusnya — tiap orang <b>menambal kelemahan</b> sebelumnya.
</div>

<h3>Cara kerja gradient boosting</h3>
<ol>
  <li>Buat pohon pertama yang sederhana → hasilnya masih banyak salah.</li>
  <li>Hitung <b>sisa kesalahan</b>-nya (residual).</li>
  <li>Latih pohon berikutnya untuk <b>menebak kesalahan itu</b>.</li>
  <li>Tambahkan hasilnya (dengan porsi kecil, diatur <b>learning rate</b>).</li>
  <li>Ulangi puluhan hingga ratusan kali → kesalahan makin mengecil.</li>
</ol>

<h3>Kenapa XGBoost begitu populer?</h3>
<ul>
  <li>Sangat <b>akurat</b> untuk data tabel/spreadsheet — sering jadi juara di kompetisi data.</li>
  <li>Cepat &amp; efisien; punya <b>regularisasi bawaan</b> agar tak mudah overfit.</li>
  <li>Bisa menangani data kosong secara otomatis.</li>
</ul>
<p>Saudaranya: <b>LightGBM</b> &amp; <b>CatBoost</b> — ide sama, dengan optimasi berbeda.</p>

<div class="callout warn">
<b>Penting untuk diingat:</b> untuk data <b>tabel</b> (angka &amp; kategori di spreadsheet), <b>boosting sering mengalahkan deep learning</b>. Deep learning unggul untuk data <b>tak terstruktur</b>: gambar, suara, teks panjang. Pilih alat sesuai jenis datanya, bukan sesuai yang sedang tren.
</div>
`,
          keyPoints: [
            "Bagging (Random Forest): pohon dilatih bersamaan & mandiri, lalu di-voting.",
            "Boosting: pohon dilatih berurutan, tiap pohon memperbaiki kesalahan pohon sebelumnya.",
            "Gradient boosting menebak sisa kesalahan (residual) berulang kali dengan porsi kecil (learning rate).",
            "XGBoost/LightGBM/CatBoost sangat akurat untuk data tabel & punya regularisasi bawaan.",
            "Untuk data tabel, boosting sering mengalahkan deep learning; deep learning unggul di gambar/suara/teks.",
          ],
          quiz: [
            {
              q: "Apa perbedaan inti boosting dibanding bagging?",
              options: [
                "Pada boosting tiap model dilatih berurutan memperbaiki yang sebelumnya",
                "Pada boosting semua model dilatih bersamaan lalu hasilnya dirata-rata",
                "Pada boosting hanya dipakai satu model tetapi dilatih berulang kali",
                "Pada boosting data dibagi acak sedangkan bagging memakai data penuh",
              ],
              answer: 0,
              explain:
                "Bagging paralel & mandiri; boosting berurutan & saling menambal kesalahan.",
            },
            {
              q: "Untuk data tabel (spreadsheet), pendekatan mana yang sering paling unggul?",
              options: [
                "Deep learning selalu",
                "Boosting (mis. XGBoost)",
                "Tidak ada yang cocok",
                "Hanya k-NN",
              ],
              answer: 1,
              explain:
                "Boosting sangat kuat pada data terstruktur; deep learning unggul di data tak terstruktur.",
            },
          ],
        },
        {
          id: "ai-alg-4",
          title: "XGBoost dalam Praktik",
          duration: "15 menit",
          content: `
<p>Di pelajaran <b>Boosting &amp; XGBoost</b> kamu sudah paham konsepnya: banyak pohon kecil dilatih berurutan, masing-masing memperbaiki kesalahan pohon sebelumnya. Pelajaran ini membahas bagian yang tidak diajarkan konsep: <b>cara memakainya dengan benar</b>.</p>

<div data-diagram="pipeline" data-stages="Data latih::membangun pohon|Data validasi::dipantau tiap putaran|Berhenti dini::saat tak membaik lagi|Data uji::diukur sekali di akhir" data-caption="Alur kerja XGBoost yang benar — data validasi berbeda dari data uji"></div>

<h3>Kenapa ia juara data tabel</h3>
<ul>
  <li><b>Menangkap pola rumit</b> dan interaksi antar-kolom tanpa perlu kamu siapkan manual — kelemahan regresi logistik.</li>
  <li><b>Tidak perlu penskalaan</b> fitur, karena pohon hanya membandingkan "lebih besar atau lebih kecil".</li>
  <li><b>Menangani nilai kosong</b> sendiri: ia belajar ke cabang mana nilai kosong sebaiknya diarahkan.</li>
  <li><b>Punya rem bawaan</b> (regularisasi) sehingga tidak mudah menghafal.</li>
</ul>

<h3>Lima pengaturan yang paling berpengaruh</h3>
<table class="tbl">
  <tr><th>Pengaturan</th><th>Artinya</th><th>Terlalu besar</th><th>Terlalu kecil</th></tr>
  <tr><td><b>n_estimators</b></td><td>Jumlah pohon</td><td>Menghafal, lambat</td><td>Belum belajar cukup</td></tr>
  <tr><td><b>learning_rate</b></td><td>Seberapa besar tiap pohon boleh mengoreksi</td><td>Kasar, mudah menghafal</td><td>Butuh sangat banyak pohon</td></tr>
  <tr><td><b>max_depth</b></td><td>Kedalaman tiap pohon</td><td>Pola kebetulan ikut dipelajari</td><td>Terlalu sederhana</td></tr>
  <tr><td><b>subsample</b></td><td>Porsi baris yang dipakai tiap pohon</td><td>—</td><td>Terlalu acak</td></tr>
  <tr><td><b>colsample_bytree</b></td><td>Porsi kolom yang dipakai tiap pohon</td><td>—</td><td>Informasi penting terlewat</td></tr>
</table>

<div class="callout warn">
<b>Pasangan yang saling mengunci: learning_rate dan n_estimators.</b> Langkah kecil (learning_rate 0,05) butuh banyak pohon; langkah besar (0,3) butuh sedikit. Cara paling andal: pasang learning_rate kecil, jumlah pohon besar, lalu biarkan <b>early stopping</b> yang memutuskan kapan berhenti.
</div>

<h3>Early stopping — pengaturan terpenting yang sering dilewati</h3>
<pre class="code">from xgboost import XGBClassifier

model = XGBClassifier(
    n_estimators=2000,          # batas atas, bukan jumlah akhir
    learning_rate=0.05,
    max_depth=4,
    subsample=0.8,
    colsample_bytree=0.8,
    early_stopping_rounds=50,   # berhenti bila 50 putaran tak membaik
    eval_metric="auc",
)
model.fit(X_latih, y_latih, eval_set=[(X_validasi, y_validasi)], verbose=False)
print(model.best_iteration)     # jumlah pohon yang benar-benar dipakai</pre>

<div class="callout warn">
<b>⚠️ Jebakan halus:</b> data yang dipakai untuk early stopping <b>sudah memengaruhi model</b>. Karena itu jangan memakai data uji sebagai <i>eval_set</i> — hasil akhirnya akan terlihat lebih bagus dari kenyataan. Siapkan <b>tiga</b> bagian data: latih, validasi, uji — persis seperti di pelajaran Melatih Model dengan Benar.
</div>

<h3>Membaca "feature importance" dengan hati-hati</h3>
<p>XGBoost bisa menunjukkan kolom mana yang paling sering dipakai. Ini berguna, tapi sering disalahartikan:</p>
<table class="tbl">
  <tr><th>Yang sering disimpulkan</th><th>Yang sebenarnya benar</th></tr>
  <tr><td>"Kolom ini menyebabkan hasilnya"</td><td>Kolom ini <b>berguna bagi model</b> untuk menebak — belum tentu penyebab</td></tr>
  <tr><td>"Kolom yang tak penting boleh diabaikan"</td><td>Bisa jadi informasinya sudah tertangkap kolom lain yang mirip</td></tr>
  <tr><td>"Urutannya pasti"</td><td>Tiap cara menghitung (gain, weight, cover) bisa memberi urutan berbeda</td></tr>
</table>
<p>Untuk penjelasan yang lebih dapat dipertanggungjawabkan per keputusan, praktisi memakai <b>SHAP</b> — pendekatan yang menunjukkan sumbangan tiap kolom untuk <i>satu</i> tebakan tertentu.</p>

<h3>Tiga jebakan yang paling sering</h3>
<ol>
  <li><b>Kebocoran data.</b> Kolom yang sebenarnya baru diketahui <i>setelah</i> kejadian — misalnya "tanggal pelunasan" untuk menebak gagal bayar. Model tampak nyaris sempurna di latihan, lalu gagal total di dunia nyata.</li>
  <li><b>Kelas timpang.</b> Kalau penipuan hanya 1%, pakai <b>scale_pos_weight</b> dan ukur dengan AUC atau recall, bukan akurasi.</li>
  <li><b>Menyetel berlebihan.</b> Mencoba ratusan kombinasi pengaturan sampai skor validasi naik 0,1% sering hanya menemukan kebetulan.</li>
</ol>

<div class="callout">
<b>💡 Urutan kerja yang disarankan:</b> mulai dari regresi logistik sebagai pembanding → XGBoost dengan pengaturan bawaan + early stopping → baru setel beberapa pengaturan utama. Kalau XGBoost hanya menang tipis dari regresi logistik, pertimbangkan model yang lebih sederhana dan lebih mudah dijelaskan. LightGBM dan CatBoost bekerja dengan cara serupa — dibahas setelah pelajaran ini.
</div>
`,
          keyPoints: [
            "XGBoost unggul pada data tabel: menangkap interaksi rumit, tak perlu penskalaan, menangani nilai kosong, dan punya regularisasi bawaan.",
            "Lima pengaturan utama: n_estimators, learning_rate, max_depth, subsample, colsample_bytree.",
            "learning_rate dan n_estimators saling mengunci; cara andal: learning_rate kecil, pohon banyak, biarkan early stopping memutuskan.",
            "Data untuk early stopping ikut memengaruhi model — jangan pakai data uji; siapkan latih, validasi, dan uji.",
            "Feature importance berarti berguna bagi model, bukan penyebab; untuk penjelasan per keputusan dipakai SHAP.",
            "Jebakan utama: kebocoran data, kelas timpang (pakai scale_pos_weight & ukur AUC/recall), dan menyetel berlebihan.",
            "Mulai dari regresi logistik sebagai pembanding; bila XGBoost hanya menang tipis, pilih yang lebih sederhana.",
          ],
          quiz: [
            {
              q: "Kenapa data uji tidak boleh dipakai sebagai eval_set untuk early stopping?",
              options: [
                "Karena data itu ikut menentukan kapan model berhenti, jadi skornya terlalu bagus",
                "Karena XGBoost menolak menerima data yang ukurannya lebih kecil dari data latih",
                "Karena early stopping hanya bekerja bila data evaluasinya belum pernah diacak",
                "Karena data uji otomatis dihapus setelah dipakai satu kali oleh pustaka",
              ],
              answer: 0,
              explain: "Data yang memengaruhi keputusan pelatihan tidak lagi netral untuk mengukur hasil akhir.",
            },
            {
              q: "Cara paling andal menentukan jumlah pohon di XGBoost?",
              options: [
                "Learning_rate kecil, batas pohon besar, lalu biarkan early stopping memutuskan",
                "Selalu memakai tepat 100 pohon karena itu nilai bawaan yang sudah teruji",
                "Memakai pohon sebanyak jumlah baris data agar semua pola terpelajari",
                "Menambah pohon terus sampai skor pada data latih mencapai seratus persen",
              ],
              answer: 0,
              explain: "Early stopping berhenti tepat saat model berhenti membaik pada data validasi.",
            },
            {
              q: "Kolom 'jumlah transaksi' punya feature importance tertinggi. Kesimpulan yang tepat?",
              options: [
                "Kolom itu paling berguna bagi model untuk menebak, belum tentu penyebab hasilnya",
                "Kolom itu terbukti menjadi penyebab utama dari hasil yang ditebak model",
                "Kolom lain yang nilainya rendah pasti tidak berguna dan aman dibuang",
                "Urutan pentingnya kolom akan sama persis dengan cara perhitungan apa pun",
              ],
              answer: 0,
              explain: "Kegunaan untuk menebak berbeda dengan hubungan sebab-akibat; untuk penjelasan per keputusan dipakai SHAP.",
            },
            {
              q: "Model XGBoost menebak gagal bayar dengan akurasi 99,8% di data latih dan validasi. Apa yang harus dicurigai lebih dulu?",
              options: [
                "Kebocoran data — ada kolom yang sebenarnya baru diketahui setelah kejadian",
                "Jumlah pohon terlalu sedikit sehingga model belum belajar dengan cukup",
                "Learning rate terlalu kecil sehingga model berhenti terlalu dini",
                "Data validasinya terlalu besar dibanding data latih yang tersedia",
              ],
              answer: 0,
              explain: "Hasil yang nyaris sempurna pada masalah yang sulit hampir selalu tanda ada informasi masa depan yang bocor.",
            },
          ],
        },
        {
          id: "ai-alg-8",
          title: "LightGBM & CatBoost — Saudara XGBoost",
          duration: "14 menit",
          content: `
<p>LightGBM dan CatBoost memakai ide yang sama persis dengan XGBoost: <b>pohon kecil dilatih berurutan untuk mengejar kesalahan</b>. Bedanya ada pada <b>cara</b> mereka membuat proses itu lebih cepat atau lebih nyaman. Memahami perbedaan itu membantumu memilih — dan menghindari jebakan khas masing-masing.</p>

<div data-diagram="compare3" data-cols="XGBoost::Pohon rata per tingkat::Paling luas dipakai|LightGBM::Pecah daun terbaik::Tercepat di data besar|CatBoost::Kolom kategori langsung::Bawaannya sudah kuat" data-caption="Satu keluarga boosting, tiga cara menumbuhkan pohon"></div>

<h3>1. Histogram — tidak mencoba setiap angka</h3>
<div class="callout">
Untuk memecah kolom "pendapatan", cara lama mencoba <b>setiap nilai unik</b> sebagai titik potong. Kalau ada satu juta nilai berbeda, ada satu juta calon potongan — di setiap cabang, di setiap pohon.<br><br>
LightGBM mengelompokkan nilai ke dalam sekitar <b>255 ember</b> (histogram) lebih dulu. Calon potongannya tinggal 255. Hasilnya nyaris sama akuratnya, tapi jauh lebih cepat dan hemat memori.
</div>
<p><i>Catatan jujur:</i> XGBoost kemudian mengadopsi cara yang sama (pengaturan <b>tree_method="hist"</b>, kini bawaan). Jadi jarak kecepatan keduanya sudah jauh lebih dekat daripada beberapa tahun lalu.</p>

<h3>2. Leaf-wise — perbedaan yang benar-benar penting</h3>
<p>Ini ciri LightGBM yang paling berpengaruh, sekaligus sumber kesalahan paling umum pemakainya.</p>

<div data-demo="tumbuh-daun"></div>

<table class="tbl">
  <tr><th></th><th>Level-wise (XGBoost)</th><th>Leaf-wise (LightGBM)</th></tr>
  <tr><td><b>Cara tumbuh</b></td><td>Habiskan satu tingkat dulu</td><td>Selalu pecah daun paling menguntungkan</td></tr>
  <tr><td><b>Dibatasi oleh</b></td><td>max_depth</td><td><b>num_leaves</b></td></tr>
  <tr><td><b>Kelebihan</b></td><td class="ok-cell">Bentuk pohon stabil</td><td class="ok-cell">Kesalahan turun lebih cepat</td></tr>
  <tr><td><b>Risiko</b></td><td>Jatah terbuang untuk cabang tak berguna</td><td class="bad-cell">Cabang dalam dengan daun kecil → menghafal pada data kecil</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Aturan praktis LightGBM:</b> jaga <b>num_leaves lebih kecil dari 2 pangkat max_depth</b>. Pohon sedalam 7 bisa punya 128 daun; memasang num_leaves = 128 membuat pohon leaf-wise bebas menjorok sangat dalam. Mulailah dari 31 (bawaannya), dan naikkan <b>min_child_samples</b> bila datamu hanya ribuan baris.
</div>

<h3>3. Dua trik kecepatan lain di LightGBM</h3>
<ul>
  <li><b>GOSS</b> — baris yang tebakannya sudah hampir benar tidak banyak mengajari model. Sebagian dari mereka dilewati, sedangkan baris yang kesalahannya besar selalu dipakai.</li>
  <li><b>EFB</b> — kolom-kolom yang jarang terisi bersamaan (misalnya hasil one-hot) digabung menjadi satu kolom, sehingga jumlah kolom yang diperiksa berkurang.</li>
</ul>

<h3>4. CatBoost — rajanya kolom kategori</h3>
<p>Kolom seperti "kota" atau "jenis produk" harus diubah menjadi angka. Cara yang menggoda adalah <b>target encoding</b>: ganti "Bandung" dengan rata-rata tingkat gagal bayar semua nasabah Bandung.</p>

<div class="callout warn">
<b>Jebakannya: kebocoran data.</b> Kalau nilai itu dihitung dari seluruh data latih — termasuk baris yang sedang dipelajari — model ikut "mengintip" jawabannya sendiri. Kota yang hanya punya tiga nasabah akan tampak sangat meyakinkan padahal hanya kebetulan.<br><br>
CatBoost menghitungnya secara <b>berurutan</b>: tiap baris hanya boleh memakai rata-rata dari baris <i>sebelum</i> dirinya. Jawaban baris itu sendiri tidak pernah ikut dihitung. Karena itu kamu cukup menyebutkan kolom mana yang berupa kategori.
</div>

<h3>Memilih di antara ketiganya</h3>
<table class="tbl">
  <tr><th>Situasimu</th><th>Pilihan yang masuk akal</th></tr>
  <tr><td>Data sangat besar (jutaan baris), butuh cepat</td><td>LightGBM</td></tr>
  <tr><td>Banyak kolom kategori, tak ingin repot encoding</td><td>CatBoost</td></tr>
  <tr><td>Data kecil (ribuan baris)</td><td>CatBoost atau XGBoost; LightGBM dengan rem ketat</td></tr>
  <tr><td>Butuh dokumentasi &amp; contoh paling banyak</td><td>XGBoost</td></tr>
  <tr><td>Belum tahu</td><td>Pilih satu, kuasai betul — bedanya biasanya kecil</td></tr>
</table>

<pre class="code">import lightgbm as lgb

model = lgb.LGBMClassifier(
    n_estimators=2000,
    learning_rate=0.05,
    num_leaves=31,             # rem utama leaf-wise
    min_child_samples=20,      # daun minimal berisi 20 baris
    subsample=0.8, subsample_freq=1,
    colsample_bytree=0.8,
)
model.fit(X_latih, y_latih, eval_set=[(X_validasi, y_validasi)],
          callbacks=[lgb.early_stopping(50)])

from catboost import CatBoostClassifier

model = CatBoostClassifier(
    iterations=2000, learning_rate=0.05, depth=6,
    cat_features=["kota", "jenis_produk"],   # cukup sebutkan kolomnya
    early_stopping_rounds=50, verbose=False,
)
model.fit(X_latih, y_latih, eval_set=(X_validasi, y_validasi))</pre>

<div class="callout">
<b>💡 Yang jarang dikatakan:</b> pada kebanyakan data nyata, selisih akurasi ketiganya <b>kecil</b>. Kualitas kolom yang kamu siapkan, pembagian data yang jujur, dan early stopping jauh lebih menentukan daripada memilih pustaka yang "paling juara".
</div>
`,
          keyPoints: [
            "LightGBM dan CatBoost memakai ide boosting yang sama dengan XGBoost; bedanya pada cara membuatnya cepat atau nyaman.",
            "Histogram mengelompokkan nilai ke sekitar 255 ember sehingga calon potongan jauh lebih sedikit; XGBoost kini juga memakainya.",
            "LightGBM tumbuh leaf-wise: selalu memecah daun paling menguntungkan, sehingga cepat menurunkan kesalahan tapi berisiko menghafal pada data kecil.",
            "Rem utama LightGBM adalah num_leaves (jaga lebih kecil dari 2 pangkat max_depth) dan min_child_samples.",
            "Target encoding biasa membocorkan jawaban; CatBoost menghitungnya berurutan sehingga kolom kategori aman dipakai langsung.",
            "Pada kebanyakan data, selisih ketiganya kecil — kualitas fitur, pembagian data, dan early stopping lebih menentukan.",
          ],
          practice: [
            { type: "number", q: "Pohon dengan kedalaman maksimum 6 paling banyak memiliki berapa daun?", answer: 64, tol: 0.5, hint: "Setiap tingkat menggandakan jumlah simpul: 2 pangkat kedalaman.", solution: "2⁶ = 64 daun. Karena itu num_leaves sebaiknya di bawah 64 bila setara dengan kedalaman 6." },
          ],
          quiz: [
            {
              q: "Apa risiko utama pertumbuhan leaf-wise pada data yang kecil?",
              options: [
                "Cabang menjorok dalam dengan daun berisi sedikit baris sehingga model mudah menghafal",
                "Pohon tumbuh terlalu rata sehingga jatah pemecahan terbuang untuk cabang tak berguna",
                "Model tidak dapat memakai early stopping karena jumlah daunnya selalu berubah",
                "Kolom kategori harus diubah manual karena leaf-wise hanya bisa membaca angka",
              ],
              answer: 0,
              explain: "Leaf-wise terus mengejar keuntungan terbesar, sehingga bisa membuat keputusan dari segelintir baris.",
            },
            {
              q: "Kenapa target encoding biasa bisa menyesatkan model?",
              options: [
                "Karena nilai rata-ratanya ikut memakai jawaban baris yang sedang dipelajari",
                "Karena mengubah kategori menjadi angka selalu menghapus informasi urutan data",
                "Karena rata-rata per kategori tidak dapat dihitung untuk data yang sangat besar",
                "Karena model pohon tidak bisa memecah kolom yang berisi bilangan pecahan",
              ],
              answer: 0,
              explain: "Itu kebocoran data halus; CatBoost menghindarinya dengan hanya memakai baris sebelumnya.",
            },
            {
              q: "Apa yang dilakukan teknik histogram pada LightGBM?",
              options: [
                "Mengelompokkan nilai kolom ke ember sehingga calon titik potong jauh lebih sedikit",
                "Menggambar sebaran data agar pemakai bisa memilih titik potong secara manual",
                "Membuang baris yang nilainya jarang muncul supaya pohon tidak menghafal",
                "Mengurutkan ulang kolom berdasarkan pentingnya sebelum setiap pohon dibuat",
              ],
              answer: 0,
              explain: "Dari jutaan nilai unik menjadi sekitar 255 calon potongan — hampir sama akurat, jauh lebih cepat.",
            },
            {
              q: "Timmu berdebat panjang soal XGBoost, LightGBM, atau CatBoost. Sikap yang paling masuk akal?",
              options: [
                "Pilih satu dan kuasai, karena kualitas fitur dan validasi biasanya lebih menentukan",
                "Selalu pakai LightGBM karena ia paling cepat dan otomatis paling akurat",
                "Latih ketiganya tanpa data validasi lalu pakai yang skor latihnya tertinggi",
                "Hindari ketiganya dan beralih ke deep learning agar hasilnya lebih pasti",
              ],
              answer: 0,
              explain: "Selisih ketiganya umumnya kecil; skor latih tertinggi justru sering tanda menghafal.",
            },
          ],
        },
        {
          id: "ai-alg-5",
          title: "Isolation Forest — Menemukan yang Janggal",
          duration: "15 menit",
          content: `
<p>Kebanyakan model belajar dari contoh berlabel: "ini penipuan, ini bukan". Masalahnya, di dunia nyata penipuan <b>jarang</b>, <b>jarang diberi label</b>, dan <b>terus berganti bentuk</b>. Isolation Forest mendekati masalah ini dari arah yang terbalik.</p>

<div data-diagram="cycle" data-steps="Pilih kolom acak|Pilih titik potong acak|Buang sisi lain|Ulangi sampai tinggal sendiri" data-center="hitung potongan" data-caption="Satu pohon isolasi: berapa potongan acak sampai sebuah titik terpisah sendirian?"></div>

<h3>Fundamental: ide yang dibalik</h3>
<div class="callout">
Model deteksi anomali biasa mencoba <b>mempelajari seperti apa data normal</b>, lalu menandai yang berbeda. Isolation Forest tidak peduli seperti apa data normal. Ia hanya bertanya:<br><br>
<b>"Seberapa mudah titik ini dipisahkan dari yang lain?"</b><br><br>
Titik yang janggal letaknya jauh dari kerumunan, sehingga <b>sedikit potongan acak</b> sudah cukup mengisolasinya. Titik yang normal tersembunyi di tengah kerumunan dan butuh <b>banyak potongan</b>.
</div>

<div class="callout warn">
🎯 <b>Analogi tebak-tebakan.</b> Di sebuah kelas, kamu menebak siapa yang dimaksud dengan pertanyaan acak: "tingginya di atas 170 cm?", "rambutnya panjang?". Orang yang sangat unik — tingginya 195 cm — ketahuan hanya dalam satu atau dua pertanyaan. Orang dengan ciri rata-rata butuh banyak pertanyaan. Jumlah pertanyaan itulah skor kejanggalannya.
</div>

<h3>Lihat hutannya bekerja</h3>

<div data-demo="isolasi-anomali"></div>

<h3>Kenapa disebut "hutan"?</h3>
<p>Satu pohon memakai potongan acak, jadi hasilnya bisa kebetulan. Karena itu dibuat <b>ratusan pohon</b>, dan yang dipakai adalah <b>rata-rata</b> jumlah potongannya. Titik yang secara konsisten cepat terisolasi di banyak pohon hampir pasti janggal.</p>

<h3>Satu pengaturan yang menentukan: contamination</h3>
<div class="callout warn">
<b>contamination</b> adalah perkiraanmu tentang <b>porsi data yang janggal</b> — misalnya 0,01 berarti sekitar 1%. Model memakai angka ini untuk menentukan batas skor.<br><br>
Kalau kamu menebak 5% padahal kenyataannya 0,5%, model akan menandai sepuluh kali lebih banyak transaksi — dan tim yang memeriksanya akan kewalahan lalu mulai mengabaikan peringatan. <b>Angka ini keputusan bisnis, bukan detail teknis.</b>
</div>

<pre class="code">from sklearn.ensemble import IsolationForest

model = IsolationForest(n_estimators=200, contamination=0.01, random_state=42)
model.fit(X_transaksi)

tanda = model.predict(X_transaksi)          # -1 = janggal, 1 = normal
skor = model.decision_function(X_transaksi) # makin kecil makin janggal</pre>

<h3>Di mana dipakai</h3>
<table class="tbl">
  <tr><th>Bidang</th><th>Yang dicari</th></tr>
  <tr><td><b>Kartu &amp; pembayaran</b></td><td>Transaksi di jam, lokasi, atau nominal yang tidak biasa</td></tr>
  <tr><td><b>Audit</b></td><td>Jurnal akuntansi yang janggal — pasangan alami <b>hukum Benford</b> yang sudah kamu pelajari</td></tr>
  <tr><td><b>Forensik blockchain</b></td><td>Alamat dengan pola pergerakan dana yang menyimpang</td></tr>
  <tr><td><b>Mesin &amp; sensor</b></td><td>Getaran atau suhu yang menandakan kerusakan sebelum terjadi</td></tr>
  <tr><td><b>Keamanan jaringan</b></td><td>Pola akses yang tidak biasa</td></tr>
</table>

<h3>🚩 Batas yang wajib dipahami</h3>
<ol>
  <li><b>Janggal bukan berarti curang.</b> Pembelian besar saat liburan itu janggal, tapi sah. Hasilnya adalah <b>daftar untuk diperiksa manusia</b>, bukan vonis — persis prinsip heuristik di modul Forensik jalur Crypto.</li>
  <li><b>Penipu yang meniru pola normal tidak tertangkap.</b> Penipuan kecil-kecil yang berulang dengan pola wajar justru lolos.</li>
  <li><b>Anomali berkelompok</b> saling menutupi: sepuluh transaksi palsu yang mirip satu sama lain membentuk kerumunan kecil dan tak lagi mudah diisolasi.</li>
  <li><b>Pemilihan kolom menentukan segalanya.</b> Anomali hanya terlihat pada kolom yang kamu masukkan.</li>
</ol>

<div class="callout">
<b>Alternatif yang perlu dikenal:</b> <b>z-score</b> (sederhana, untuk satu kolom), <b>Local Outlier Factor</b> (membandingkan kepadatan dengan tetangga), dan <b>autoencoder</b> (jaringan saraf yang kesulitan merekonstruksi data janggal). Isolation Forest sering jadi pilihan pertama karena cepat, tidak butuh label, dan bekerja cukup baik tanpa banyak penyetelan.
</div>
`,
          keyPoints: [
            "Isolation Forest mendeteksi anomali tanpa label dengan bertanya: seberapa mudah titik ini dipisahkan dari yang lain?",
            "Titik janggal terisolasi dalam sedikit potongan acak; titik normal di tengah kerumunan butuh banyak potongan.",
            "Disebut hutan karena memakai ratusan pohon acak dan merata-ratakan jumlah potongannya.",
            "Anomali tidak harus ekstrem di semua kolom — jam yang janggal dengan nominal wajar tetap bisa tertangkap.",
            "contamination adalah perkiraan porsi data janggal; menentukannya adalah keputusan bisnis karena memengaruhi beban pemeriksaan.",
            "Dipakai pada pembayaran, audit, forensik blockchain, sensor mesin, dan keamanan jaringan.",
            "Batasnya: janggal bukan berarti curang, penipu yang meniru pola normal lolos, anomali berkelompok saling menutupi, dan hasil bergantung kolom yang dipilih.",
          ],
          quiz: [
            {
              q: "Apa ide inti Isolation Forest?",
              options: [
                "Titik janggal lebih mudah dipisahkan dari data lain dengan sedikit potongan acak",
                "Mempelajari seperti apa data normal dari contoh berlabel, lalu mencari yang berbeda",
                "Mengelompokkan data lalu menganggap kelompok terkecil sebagai anomali",
                "Menghitung jarak tiap titik ke rata-rata data lalu mengambil yang terjauh",
              ],
              answer: 0,
              explain: "Ia tidak mempelajari data normal — ia mengukur seberapa cepat tiap titik terisolasi.",
            },
            {
              q: "Kenapa pengaturan contamination disebut keputusan bisnis?",
              options: [
                "Karena menentukan banyaknya data yang ditandai dan beban tim pemeriksa",
                "Karena nilainya harus disetujui regulator sebelum model boleh dijalankan",
                "Karena menentukan jumlah pohon yang dibuat dan biaya komputasinya",
                "Karena nilainya harus sama dengan porsi keuntungan perusahaan",
              ],
              answer: 0,
              explain: "Perkiraan yang terlalu tinggi membanjiri pemeriksa dengan peringatan palsu hingga mulai diabaikan.",
            },
            {
              q: "Isolation Forest menandai sebuah transaksi sebagai janggal. Langkah yang tepat?",
              options: [
                "Menjadikannya daftar untuk diperiksa manusia, karena janggal belum tentu curang",
                "Langsung memblokir kartu pemiliknya karena model sudah membuktikan kecurangan",
                "Mengabaikannya karena Isolation Forest tidak dilatih dengan label penipuan",
                "Menghapus transaksi itu dari data agar model berikutnya lebih akurat",
              ],
              answer: 0,
              explain: "Pembelian besar saat liburan pun janggal tetapi sah — hasilnya petunjuk, bukan vonis.",
            },
            {
              q: "Kenapa sepuluh transaksi palsu yang mirip satu sama lain bisa lolos dari Isolation Forest?",
              options: [
                "Karena mereka membentuk kerumunan kecil sendiri sehingga tidak lagi mudah diisolasi",
                "Karena Isolation Forest hanya bisa menandai satu anomali dalam setiap data",
                "Karena transaksi palsu selalu memiliki nominal yang lebih kecil dari biasanya",
                "Karena model otomatis menganggap transaksi berulang sebagai transaksi normal",
              ],
              answer: 0,
              explain: "Anomali yang berkelompok saling menutupi — kelemahan yang disebut masking.",
            },
          ],
        },
        {
          id: "ai-alg-6",
          title: "PCA, DBSCAN & Peta Memilih Algoritma",
          duration: "15 menit",
          content: `
<p>Pelajaran penutup modul ini: dua algoritma tanpa label yang sangat sering dipakai, lalu <b>peta</b> untuk memilih algoritma yang tepat dari semua yang sudah kamu pelajari.</p>

<h3>1. PCA — meringkas banyak kolom menjadi sedikit</h3>
<div class="callout">
Bayangkan data pelanggan dengan 50 kolom. Mustahil digambar, dan banyak kolomnya saling mengulang — "total belanja" dan "jumlah transaksi" misalnya bergerak hampir bersamaan.<br><br>
<b>PCA</b> (Principal Component Analysis) mencari <b>arah baru</b> yang menangkap variasi terbesar dalam data, lalu meringkas 50 kolom menjadi beberapa <b>komponen</b> saja — sambil menyimpan sebagian besar informasinya.
</div>

<div class="callout warn">
🔦 <b>Analogi bayangan.</b> Benda tiga dimensi bisa diwakili bayangan dua dimensi. Kalau senter diarahkan dari sudut yang tepat, bayangan sebuah sepeda masih jelas terlihat sebagai sepeda. Dari sudut yang salah, ia hanya garis. PCA mencari <b>sudut senter terbaik</b> — arah yang membuat bayangan paling informatif.
</div>

<table class="tbl">
  <tr><th>PCA berguna untuk</th><th>Yang perlu diwaspadai</th></tr>
  <tr><td>Menggambar data berkolom banyak dalam 2 dimensi</td><td><b>Wajib diskalakan dulu</b> — kolom bersatuan besar akan mendominasi (ingat demo penskalaan fitur)</td></tr>
  <tr><td>Mengurangi kolom yang saling mengulang</td><td>Komponennya <b>sulit ditafsirkan</b> — "komponen 1" bukan kolom yang punya nama</td></tr>
  <tr><td>Mempercepat model berikutnya</td><td>Hanya menangkap hubungan lurus</td></tr>
</table>

<h3>2. DBSCAN — mengelompokkan berdasarkan kepadatan</h3>
<p>Ingat <b>k-Means</b>: kamu harus menentukan jumlah kelompok di awal, dan kelompoknya selalu berbentuk bulat. DBSCAN bekerja berbeda — ia mencari <b>daerah yang padat</b>.</p>

<div class="callout">
Cara kerjanya: titik yang punya cukup banyak tetangga dalam jarak tertentu dianggap <b>inti kelompok</b>. Kelompok tumbuh dengan menyambung titik-titik inti yang berdekatan. Titik yang tidak masuk kelompok mana pun ditandai sebagai <b>noise</b> — sekaligus menjadi deteksi anomali gratis.
</div>

<table class="tbl">
  <tr><th></th><th>k-Means</th><th>DBSCAN</th></tr>
  <tr><td><b>Jumlah kelompok</b></td><td>Harus ditentukan di awal</td><td class="ok-cell">Ditemukan sendiri</td></tr>
  <tr><td><b>Bentuk kelompok</b></td><td>Cenderung bulat</td><td class="ok-cell">Bentuk apa pun, termasuk memanjang</td></tr>
  <tr><td><b>Titik yang menyimpang</b></td><td class="bad-cell">Dipaksa masuk kelompok terdekat</td><td class="ok-cell">Ditandai sebagai noise</td></tr>
  <tr><td><b>Pengaturan utama</b></td><td>Jumlah kelompok (k)</td><td>Jarak (eps) &amp; jumlah tetangga minimum</td></tr>
  <tr><td><b>Kelemahan</b></td><td>Salah bila k keliru</td><td class="bad-cell">Kesulitan bila kepadatan tiap kelompok sangat berbeda</td></tr>
</table>

<h3>3. Peta memilih algoritma</h3>

<div data-diagram="tree" data-nodes="Datamu punya label?::Menebak angka?::Mencari kelompok?" data-leaves="Regresi linear / XGBoost|Logistik / XGBoost|k-Means / DBSCAN|Isolation Forest / PCA" data-yes="Ya" data-no="Tidak" data-caption="Pertanyaan pertama selalu sama: apakah ada jawaban benar yang bisa dicontoh model?"></div>

<table class="tbl">
  <tr><th>Tujuanmu</th><th>Mulai dari</th><th>Naik ke</th></tr>
  <tr><td>Menebak angka (harga, omzet)</td><td>Regresi linear</td><td>Random Forest → XGBoost / LightGBM</td></tr>
  <tr><td>Menebak ya/tidak &amp; perlu dijelaskan</td><td>Regresi logistik</td><td>XGBoost + SHAP</td></tr>
  <tr><td>Klasifikasi teks sederhana</td><td>Naive Bayes</td><td>SVM → model bahasa</td></tr>
  <tr><td>Mengelompokkan pelanggan</td><td>k-Means</td><td>DBSCAN</td></tr>
  <tr><td>Data tabel sangat besar, butuh cepat</td><td>Random Forest</td><td>LightGBM</td></tr>
  <tr><td>Banyak kolom kategori</td><td>Random Forest</td><td>CatBoost</td></tr>
  <tr><td>Menemukan yang janggal</td><td>z-score per kolom</td><td>Isolation Forest</td></tr>
  <tr><td>Terlalu banyak kolom</td><td>Buang kolom yang jelas tak relevan</td><td>PCA</td></tr>
  <tr><td>Gambar, suara, teks bernuansa</td><td colspan="2">Deep learning — modul berikutnya</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Aturan yang paling sering dilanggar:</b> selalu mulai dari kolom <b>"Mulai dari"</b>. Model sederhana memberi <b>pembanding</b>. Tanpa pembanding, kamu tidak pernah tahu apakah model rumitmu benar-benar lebih baik — atau hanya lebih rumit.
</div>

<div class="callout">
<b>Penutup modul.</b> Kamu kini mengenal algoritma yang dipakai di sebagian besar pekerjaan machine learning sehari-hari di bank, e-commerce, pabrik, dan kantor audit. Yang membedakan praktisi yang baik bukan jumlah algoritma yang dihafal, melainkan kebiasaan bertanya: <b>apa yang sebenarnya ingin ditebak, kesalahan mana yang lebih mahal, dan apakah model yang lebih sederhana sudah cukup?</b>
</div>
`,
          keyPoints: [
            "PCA meringkas banyak kolom menjadi sedikit komponen yang menangkap variasi terbesar, seperti mencari sudut senter terbaik untuk bayangan benda.",
            "PCA wajib diskalakan lebih dulu, dan komponennya sulit ditafsirkan karena bukan kolom asli.",
            "DBSCAN mengelompokkan berdasarkan kepadatan: tak perlu menentukan jumlah kelompok, bisa berbentuk apa pun, dan menandai titik menyimpang sebagai noise.",
            "k-Means memaksa setiap titik masuk kelompok; DBSCAN kesulitan bila kepadatan antar-kelompok sangat berbeda.",
            "Pertanyaan pertama memilih algoritma: apakah datamu punya label?",
            "Selalu mulai dari model sederhana sebagai pembanding sebelum naik ke model yang lebih rumit.",
          ],
          quiz: [
            {
              q: "Kenapa data wajib diskalakan sebelum PCA?",
              options: [
                "Karena kolom bersatuan besar akan mendominasi arah komponen yang ditemukan",
                "Karena PCA hanya bisa membaca angka di antara nol dan satu",
                "Karena tanpa penskalaan PCA tidak bisa menghitung jumlah komponennya",
                "Karena penskalaan membuat komponen PCA menjadi mudah ditafsirkan",
              ],
              answer: 0,
              explain: "PCA mencari variasi terbesar; kolom bernilai jutaan otomatis tampak paling bervariasi.",
            },
            {
              q: "Apa keunggulan DBSCAN dibanding k-Means?",
              options: [
                "Tak perlu menentukan jumlah kelompok dan bisa menandai noise",
                "Selalu menghasilkan kelompok yang berbentuk bulat dan berukuran sama",
                "Bekerja paling baik saat kepadatan setiap kelompok sangat berbeda",
                "Tidak memerlukan pengaturan apa pun sehingga hasilnya selalu pasti",
              ],
              answer: 0,
              explain: "k-Means memaksa setiap titik masuk kelompok terdekat, termasuk titik yang sebenarnya menyimpang.",
            },
            {
              q: "Tugasmu menebak apakah nasabah akan gagal bayar, dan keputusannya harus bisa dijelaskan. Mulai dari?",
              options: [
                "Regresi logistik sebagai pembanding, lalu XGBoost dengan penjelasan SHAP bila perlu",
                "DBSCAN untuk mengelompokkan nasabah sebelum menentukan siapa yang ditolak",
                "PCA untuk meringkas kolom lalu langsung memakai komponennya sebagai keputusan",
                "Isolation Forest karena nasabah gagal bayar selalu merupakan anomali",
              ],
              answer: 0,
              explain: "Ada label (gagal bayar/tidak) dan butuh penjelasan — regresi logistik adalah titik mulai yang tepat.",
            },
            {
              q: "Kenapa selalu disarankan memulai dari model sederhana?",
              options: [
                "Agar ada pembanding untuk menilai apakah model rumit benar-benar lebih baik",
                "Karena model sederhana selalu lebih akurat daripada model yang rumit",
                "Karena model rumit dilarang dipakai sebelum model sederhana dicoba",
                "Karena model sederhana tidak memerlukan data latih sama sekali",
              ],
              answer: 0,
              explain: "Tanpa pembanding, kerumitan tambahan tidak bisa dibuktikan manfaatnya.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 10: DEEP LEARNING: DARI NEURON SAMPAI TRANSFORMER ---------------- */
    {
      id: "ai-arsitektur",
      level: "Arsitektur",
      title: "Deep Learning: dari Neuron sampai Transformer",
      summary: "Neural network dari nol (maju, mundur, belajar), PyTorch & Keras, cara melatihnya dengan benar, CNN untuk gambar, dan Transformer untuk teks.",
      lessons: [
        {
          id: "ai-alg-9",
          title: "Neural Network dari Nol — Maju, Mundur, Belajar",
          duration: "16 menit",
          content: `
<p>Di modul <b>Machine Learning &amp; Neural Network</b> kamu melihat gambaran neural network: lapisan-lapisan neuron yang saling terhubung. Sekarang kamu sudah punya bekal matematikanya — dot product, turunan, aturan rantai, sigmoid, loss. Saatnya membongkar mesinnya dan melihat bagaimana ia <b>benar-benar</b> belajar.</p>

<div data-diagram="pipeline" data-stages="Maju::tebak dari bobot|Hitung loss::seberapa salah|Mundur::andil tiap bobot|Perbarui::geser sedikit" data-caption="Satu langkah latihan. Diulang ribuan kali, tebakan asal-asalan menjadi model yang pintar"></div>

<h3>1. Satu neuron — tidak lebih dari regresi logistik</h3>
<div class="callout">
Sebuah neuron melakukan tiga hal:<br>
1. Kalikan tiap input dengan <b>bobot</b>-nya lalu jumlahkan (dot product)<br>
2. Tambahkan <b>bias</b><br>
3. Lewatkan hasilnya ke <b>fungsi aktivasi</b><br><br>
<b>z = w₁x₁ + w₂x₂ + b</b> &nbsp;→&nbsp; <b>ŷ = aktivasi(z)</b><br><br>
Kalau aktivasinya sigmoid, satu neuron ini <b>persis sama</b> dengan regresi logistik yang sudah kamu pelajari. Neural network hanyalah banyak "regresi logistik kecil" yang disusun berlapis.
</div>

<p><b>Contoh hitung.</b> Input x = (1, 2), bobot w = (0,5; −0,25), bias b = 0,1.</p>
<table class="tbl">
  <tr><th>Langkah</th><th>Hitungan</th><th>Hasil</th></tr>
  <tr><td>Jumlah berbobot</td><td>0,5 × 1 + (−0,25) × 2 + 0,1</td><td>z = 0,1</td></tr>
  <tr><td>Sigmoid</td><td>1 ÷ (1 + e<sup>−0,1</sup>)</td><td>ŷ = 0,525</td></tr>
  <tr><td>Loss (jawaban benar = 1)</td><td>−ln(0,525)</td><td>0,644</td></tr>
</table>

<h3>2. Kenapa harus berlapis — dan kenapa harus ada aktivasi</h3>
<p>Soal XOR: jawab 1 hanya bila kedua input berbeda. Titik-titiknya bersilangan, sehingga <b>tidak ada satu garis lurus</b> pun yang bisa memisahkannya. Satu neuron gagal. Beberapa neuron tersembunyi bisa masing-masing membuat satu garis, lalu neuron keluaran menggabungkannya.</p>

<div class="callout warn">
<b>Tapi ada syaratnya.</b> Tanpa fungsi aktivasi, lapisan demi lapisan hanyalah perkalian dan penjumlahan. Perkalian dari perkalian tetap perkalian — sepuluh lapisan tanpa aktivasi <b>setara dengan satu lapisan</b>, dan hanya mampu membuat garis lurus. Coba buktikan sendiri di demo di bawah dengan mencentang kotaknya.
</div>

<div data-demo="latih-xor"></div>

<h3>3. Mundur (backpropagation) — mencari siapa yang salah</h3>
<div class="callout">
🍜 <b>Analogi warung.</b> Pelanggan mengeluh kuahnya terlalu asin. Pemilik tidak memecat semua orang — ia menelusuri mundur: pelayan hanya mengantar (andil kecil), juru masak menambah garam (andil besar), pemasok kaldu mengirim kaldu yang sudah asin (andil sedang). Tiap orang mendapat <b>porsi kesalahan sesuai pengaruhnya</b>, lalu masing-masing memperbaiki diri sedikit.<br><br>
Backpropagation melakukan hal yang sama pada ribuan bobot sekaligus, memakai <b>aturan rantai</b> dari modul Matematika: andil sebuah bobot = pengaruhnya ke lapisan berikutnya × andil lapisan berikutnya terhadap loss.
</div>

<p><b>Lanjutan contoh hitung.</b> Untuk sigmoid dengan loss log, kesalahan di titik z ternyata sangat sederhana:</p>
<table class="tbl">
  <tr><th>Yang dicari</th><th>Rumus</th><th>Hasil</th></tr>
  <tr><td>Kesalahan di z</td><td>ŷ − y = 0,525 − 1</td><td>−0,475</td></tr>
  <tr><td>Andil w₁</td><td>−0,475 × x₁ (= 1)</td><td>−0,475</td></tr>
  <tr><td>Andil w₂</td><td>−0,475 × x₂ (= 2)</td><td>−0,95</td></tr>
  <tr><td>Andil b</td><td>−0,475 × 1</td><td>−0,475</td></tr>
</table>

<p>Perbarui dengan learning rate 0,1 (bobot baru = bobot lama − 0,1 × andil):</p>
<table class="tbl">
  <tr><th></th><th>Sebelum</th><th>Sesudah</th></tr>
  <tr><td>w₁</td><td>0,5</td><td>0,5475</td></tr>
  <tr><td>w₂</td><td>−0,25</td><td>−0,155</td></tr>
  <tr><td>b</td><td>0,1</td><td>0,1475</td></tr>
  <tr><td><b>Tebakan ŷ</b></td><td>0,525</td><td class="ok-cell"><b>0,595</b></td></tr>
  <tr><td><b>Loss</b></td><td>0,644</td><td class="ok-cell"><b>0,519</b></td></tr>
</table>
<p>Perhatikan: w₂ berubah dua kali lebih besar daripada w₁ — karena input x₂ dua kali lebih besar, pengaruhnya terhadap kesalahan juga dua kali lebih besar. <b>Itulah seluruh inti belajar</b>: satu langkah kecil ke arah yang menurunkan loss, diulang terus.</p>

<h3>4. Menghitung jumlah parameter</h3>
<p>Setiap lapisan penuh dari <i>m</i> input ke <i>k</i> neuron punya <b>m × k bobot + k bias</b>.</p>
<table class="tbl">
  <tr><th>Jaringan</th><th>Hitungan</th><th>Parameter</th></tr>
  <tr><td>Demo XOR: 2 → 4 → 1</td><td>(2×4 + 4) + (4×1 + 1)</td><td>17</td></tr>
  <tr><td>Data tabel: 20 → 64 → 1</td><td>(20×64 + 64) + (64×1 + 1)</td><td>1.409</td></tr>
  <tr><td>Model bahasa besar</td><td>ratusan lapisan raksasa</td><td>miliaran</td></tr>
</table>
<p>Dari 17 sampai miliaran, cara belajarnya <b>sama persis</b>: maju, hitung loss, mundur, perbarui. Bedanya hanya ukuran dan jumlah data.</p>

<pre class="code">import numpy as np

x = np.array([1.0, 2.0])
w = np.array([0.5, -0.25])
b = 0.1
y = 1.0

z = w @ x + b                       # maju: jumlah berbobot
y_topi = 1 / (1 + np.exp(-z))       # sigmoid
loss = -np.log(y_topi)

galat = y_topi - y                  # mundur: kesalahan di z
w = w - 0.1 * galat * x             # perbarui bobot
b = b - 0.1 * galat
print(round(loss, 3), w, round(b, 4))</pre>
`,
          keyPoints: [
            "Satu neuron = jumlah berbobot + bias + fungsi aktivasi; dengan sigmoid, ia sama dengan regresi logistik.",
            "Satu langkah latihan: maju (tebak), hitung loss, mundur (cari andil tiap bobot), perbarui bobot sedikit.",
            "Tanpa fungsi aktivasi, berapa pun lapisannya, jaringan setara satu lapisan dan hanya bisa membuat garis lurus — XOR tak terpecahkan.",
            "Backpropagation membagi kesalahan ke setiap bobot sesuai pengaruhnya, memakai aturan rantai.",
            "Untuk sigmoid dengan loss log, kesalahan di titik z sesederhana ŷ − y; andil bobot = kesalahan × inputnya.",
            "Lapisan penuh dari m input ke k neuron punya m × k bobot + k bias.",
            "Model kecil maupun raksasa belajar dengan cara yang sama; bedanya hanya ukuran dan jumlah data.",
          ],
          practice: [
            { type: "number", q: "Input x = (2, 3), bobot w = (0,4; −0,2), bias b = 0,5. Berapa z = w₁x₁ + w₂x₂ + b?", answer: 0.7, tol: 0.01, hint: "0,4 × 2 + (−0,2) × 3 + 0,5.", solution: "0,8 − 0,6 + 0,5 = 0,7." },
            { type: "number", q: "Berapa jumlah parameter jaringan 10 input → 16 neuron tersembunyi → 1 output?", answer: 193, tol: 0.5, hint: "(10×16 + 16) + (16×1 + 1).", solution: "176 + 17 = 193 parameter." },
          ],
          quiz: [
            {
              q: "Kenapa jaringan tanpa fungsi aktivasi gagal memecahkan XOR, walau lapisannya banyak?",
              options: [
                "Karena tumpukan lapisan tanpa aktivasi tetap setara satu lapisan yang hanya membuat garis lurus",
                "Karena tanpa aktivasi, backpropagation tidak dapat menghitung andil setiap bobot sama sekali",
                "Karena jumlah parameter jaringan menjadi terlalu sedikit untuk menghafal keempat titik",
                "Karena fungsi aktivasi diperlukan untuk menormalkan input sebelum masuk ke lapisan pertama",
              ],
              answer: 0,
              explain: "Perkalian dari perkalian tetap perkalian — tanpa lengkungan, pemisahnya tetap satu garis lurus.",
            },
            {
              q: "Dalam contoh hitung, kenapa w₂ berubah dua kali lebih besar daripada w₁?",
              options: [
                "Karena input x₂ dua kali lebih besar, sehingga andilnya terhadap kesalahan juga dua kali",
                "Karena w₂ bernilai negatif sehingga learning rate-nya otomatis digandakan",
                "Karena bobot yang berada lebih akhir selalu diperbarui lebih kuat dari bobot awal",
                "Karena bias ikut ditambahkan ke w₂ tetapi tidak ditambahkan ke w₁",
              ],
              answer: 0,
              explain: "Andil bobot = kesalahan di z × input yang dikalikan bobot tersebut.",
            },
            {
              q: "Apa yang sebenarnya dilakukan backpropagation?",
              options: [
                "Menghitung andil tiap bobot terhadap loss dengan aturan rantai, dari keluaran ke belakang",
                "Mengulang tebakan dari lapisan terakhir ke lapisan pertama untuk memeriksa hasilnya",
                "Menghapus neuron yang paling sering salah agar jaringan menjadi lebih kecil",
                "Mengacak ulang semua bobot setiap kali loss naik agar tidak terjebak",
              ],
              answer: 0,
              explain: "Setelah andil diketahui, gradient descent menggeser tiap bobot sedikit ke arah yang menurunkan loss.",
            },
            {
              q: "Sebuah neuron memakai sigmoid di keluarannya. Model apa yang setara dengannya?",
              options: [
                "Regresi logistik, karena sama-sama jumlah berbobot yang ditekan ke rentang 0 sampai 1",
                "Regresi linear, karena sama-sama menjumlahkan input yang sudah dikalikan bobot",
                "Decision tree, karena sama-sama memutuskan ya atau tidak berdasarkan ambang",
                "k-Means, karena sama-sama mengelompokkan data menjadi dua kelompok terpisah",
              ],
              answer: 0,
              explain: "Neural network pada dasarnya banyak regresi logistik kecil yang disusun berlapis.",
            },
          ],
        },
        {
          id: "ai-tl-3",
          title: "PyTorch, Hugging Face & Memakai API",
          duration: "13 menit",
          content: `
<p>scikit-learn cukup untuk ML klasik. Tapi untuk <b>deep learning</b> dan <b>AI generatif</b>, alatnya berbeda. Ada tiga jalur, dan memilih yang tepat menghemat berbulan-bulan.</p>

<h3>1. PyTorch — membangun model dari nol</h3>
<p><b>PyTorch</b> adalah kerangka kerja deep learning paling populer (dipakai Meta, OpenAI, dan mayoritas riset). Tiga kemampuan intinya:</p>
<table class="tbl">
  <tr><th>Kemampuan</th><th>Artinya</th></tr>
  <tr><td><b>Tensor</b></td><td>Seperti array NumPy, tapi bisa dipindah ke <b>GPU</b> agar ratusan kali lebih cepat</td></tr>
  <tr><td><b>Autograd</b></td><td>Menghitung <b>gradient</b> otomatis — kamu tak perlu menurunkan rumus sendiri</td></tr>
  <tr><td><b>nn.Module</b></td><td>Menyusun lapisan neural network seperti menumpuk balok</td></tr>
</table>

<div class="callout">
<b>Ingat gradient descent</b> dari modul Matematika? Menurunkan rumusnya secara manual itu melelahkan dan rawan salah. <b>Autograd</b> mengerjakannya otomatis — inilah alasan utama deep learning modern bisa berkembang secepat ini.
</div>

<p><b>TensorFlow</b> adalah pesaingnya (dari Google). Keduanya sanggup melakukan hal yang sama; PyTorch kini lebih dominan di riset dan lebih mudah dipelajari.</p>

<h3>2. Hugging Face — memakai model yang sudah jadi</h3>
<p>Melatih model bahasa dari nol butuh biaya miliaran rupiah. Untungnya hampir tidak pernah perlu. <b>Hugging Face</b> adalah gudang berisi <b>ratusan ribu model siap pakai</b> yang bisa diunduh gratis.</p>

<pre class="code">from transformers import pipeline

analis = pipeline("sentiment-analysis")
print(analis("Pelayanannya ramah dan cepat"))
# [{'label': 'POSITIVE', 'score': 0.99}]</pre>

<p>Tiga baris, dan kamu sudah punya AI analisis sentimen. Apa yang sebenarnya terjadi di balik layar? Playground berikut memperagakan versi mini-nya:</p>

<div data-demo="js-playground">// Versi mini dari pipeline("sentiment-analysis")
// Model asli belajar dari jutaan kalimat. Ini pakai kamus kecil saja.
const positif = ["bagus", "puas", "cepat", "ramah", "murah", "mantap"];
const negatif = ["buruk", "lambat", "kecewa", "rusak", "mahal", "jelek"];

function analisa(kalimat) {
  const kata = kalimat.toLowerCase().split(" ");
  let skor = 0;
  kata.forEach(function (k) {
    if (positif.indexOf(k) !== -1) { skor = skor + 1; }
    if (negatif.indexOf(k) !== -1) { skor = skor - 1; }
  });
  let label = "NETRAL ";
  if (skor > 0) { label = "POSITIF"; }
  else if (skor !== 0) { label = "NEGATIF"; }
  return label + " (skor " + skor + ")";
}

const ulasan = [
  "pelayanan ramah dan cepat",
  "barang rusak dan pengiriman lambat",
  "harganya murah tapi kualitasnya jelek",
  "paket sudah sampai"
];

ulasan.forEach(function (u) {
  console.log(analisa(u) + "   ==  " + u);
});</div>

<div class="callout warn">
<b>Perhatikan dua baris terakhir hasilnya.</b><br>
"harganya murah tapi kualitasnya jelek" dinilai <b>NETRAL</b> — padahal jelas keluhan. Kamus kecil kita tidak paham kata <b>"tapi"</b> membalikkan makna.<br><br>
Di sinilah model sungguhan menang: ia belajar <b>konteks</b>, bukan sekadar menghitung kata. Itu perbedaan antara aturan buatan tangan dan machine learning.
</div>

<h3>3. Memakai API — tanpa model sendiri sama sekali</h3>
<p>Untuk model terbesar (Claude, GPT), kamu tidak mengunduhnya. Kamu <b>mengirim pertanyaan lewat internet</b> dan menerima jawaban. Ini yang dipakai mayoritas aplikasi AI hari ini.</p>

<h3>Memilih di antara tiga jalur</h3>
<table class="tbl">
  <tr><th></th><th>Panggil API</th><th>Hugging Face</th><th>Latih sendiri (PyTorch)</th></tr>
  <tr><td><b>Biaya awal</b></td><td>Nyaris nol</td><td>Rendah</td><td>Sangat tinggi</td></tr>
  <tr><td><b>Waktu</b></td><td>Menit</td><td>Jam</td><td>Minggu-bulan</td></tr>
  <tr><td><b>Butuh GPU?</b></td><td>Tidak</td><td>Sebaiknya</td><td>Wajib</td></tr>
  <tr><td><b>Data rahasia aman?</b></td><td>Keluar ke pihak lain</td><td>Tetap di servermu</td><td>Tetap di servermu</td></tr>
  <tr><td><b>Cocok untuk</b></td><td>Hampir semua aplikasi</td><td>Tugas khusus / data sensitif</td><td>Riset &amp; kebutuhan unik</td></tr>
</table>

<div class="callout">
<b>💡 Saran jujur:</b> mulailah dari <b>memanggil API</b>. Sebagian besar produk AI yang sukses tidak melatih model sendiri — nilainya ada pada <b>masalah yang dipecahkan</b>, bukan pada modelnya. Melatih model dari nol adalah pilihan terakhir, bukan pertama.
</div>
`,
          keyPoints: [
            "PyTorch = kerangka deep learning utama: tensor (bisa ke GPU), autograd (gradient otomatis), nn.Module (menyusun lapisan).",
            "Autograd menghapus keharusan menurunkan rumus gradient secara manual.",
            "TensorFlow adalah pesaing setara; PyTorch lebih dominan di riset dan lebih mudah dipelajari.",
            "Hugging Face = gudang ratusan ribu model siap pakai; pipeline() memberi hasil dalam 3 baris.",
            "Memanggil API (Claude, GPT) = jalur tercepat, tanpa GPU, tapi data keluar ke pihak lain.",
            "Model sungguhan menang atas aturan buatan tangan karena memahami konteks, bukan menghitung kata.",
            "Mulailah dari API; melatih model sendiri adalah pilihan terakhir, bukan pertama.",
          ],
          quiz: [
            {
              q: "Apa fungsi autograd di PyTorch?",
              options: [
                "Menghitung gradient otomatis sehingga rumusnya tak perlu diturunkan",
                "Mengunduh dan menyiapkan model terlatih dari internet secara otomatis",
                "Memindahkan perhitungan ke kartu grafis tanpa mengubah kode",
                "Menyimpan riwayat pelatihan agar bisa diteruskan di lain waktu",
              ],
              answer: 0,
              explain:
                "Autograd otomatis melacak semua operasi dan menghitung turunannya — inti dari pelatihan neural network.",
            },
            {
              q: "Kapan memakai Hugging Face lebih tepat daripada memanggil API?",
              options: [
                "Saat datanya sensitif dan tidak boleh keluar dari servermu sendiri",
                "Saat ingin hasil paling cepat tanpa persiapan apa pun",
                "Saat kamu tidak punya komputer dengan kartu grafis sama sekali",
                "Saat modelnya harus selalu versi terbaru yang paling pintar",
              ],
              answer: 0,
              explain:
                "Model Hugging Face berjalan di infrastrukturmu sendiri, sehingga data tidak dikirim ke pihak ketiga.",
            },
            {
              q: "Di playground, kalimat 'harganya murah tapi kualitasnya jelek' dinilai NETRAL. Kenapa?",
              options: [
                "Karena kamus kata tak paham konteks — kata 'tapi' membalikkan makna",
                "Karena jumlah kata positif dan negatifnya kebetulan sama banyak",
                "Karena kalimatnya terlalu panjang untuk diproses kamus sederhana",
                "Karena kata 'murah' tidak terdaftar di dalam kamus yang dipakai",
              ],
              answer: 0,
              explain:
                "Menghitung kata positif dikurangi negatif menghasilkan nol. Model sungguhan memahami struktur kalimat, bukan sekadar jumlah kata.",
            },
            {
              q: "Untuk membangun produk AI pertamamu, jalur yang paling disarankan?",
              options: [
                "Panggil API model besar — tercepat, termurah, dan tanpa perlu GPU",
                "Latih model sendiri dari nol agar sepenuhnya sesuai kebutuhanmu",
                "Unduh model dari Hugging Face lalu jalankan di komputermu",
                "Beli kartu grafis lebih dulu sebelum menulis baris kode pertama",
              ],
              answer: 0,
              explain:
                "Nilai produk ada pada masalah yang dipecahkan. Melatih model sendiri mahal dan jarang diperlukan di awal.",
            },
          ],
        },
        {
          id: "ai-tl-7",
          title: "TensorFlow & Keras — dan Kapan Memilihnya",
          duration: "14 menit",
          content: `
<p>Di pelajaran PyTorch kita menyebut TensorFlow sekilas sebagai "pesaingnya". Sekarang kita bahas serius: apa itu TensorFlow, apa itu Keras, dan <b>kapan sebaiknya memilih yang mana</b>.</p>

<div data-diagram="layers" data-items="Keras — antarmuka ramah manusia|TensorFlow — mesin perhitungan|CPU / GPU / TPU — perangkat kerasnya" data-caption="Keras adalah wajah ramah di atas mesin TensorFlow"></div>

<h3>Fundamental: Keras itu apa?</h3>
<div class="callout">
<b>TensorFlow</b> adalah mesin perhitungannya — kuat, tapi kalau ditulis langsung, kodenya panjang dan berliku.<br><br>
<b>Keras</b> adalah <b>antarmuka ramah</b> di atasnya. Sejak 2019 Keras menjadi cara resmi memakai TensorFlow, sehingga dalam praktik sehari-hari <b>"memakai TensorFlow" berarti "menulis Keras"</b>.
</div>

<h3>Membuat neural network dalam 6 baris</h3>
<pre class="code">from tensorflow import keras

model = keras.Sequential([
    keras.layers.Dense(64, activation="relu"),
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid"),
])

model.compile(optimizer="adam",
              loss="binary_crossentropy",
              metrics=["accuracy"])

model.fit(X_latih, y_latih, epochs=10, validation_split=0.2)</pre>

<p>Perhatikan betapa dekatnya kode ini dengan cara kita <b>menggambarkan</b> jaringannya: tiga lapisan bertumpuk, lalu latih. Inilah kekuatan Keras — dan alasan ia sangat baik untuk belajar.</p>

<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>Sequential</b></td><td>Lapisan disusun berurutan, satu demi satu</td></tr>
  <tr><td><b>Dense(64)</b></td><td>Lapisan penuh berisi 64 neuron</td></tr>
  <tr><td><b>activation</b></td><td>Fungsi aktivasi — sudah kamu pelajari di modul Matematika</td></tr>
  <tr><td><b>compile</b></td><td>Menentukan cara belajar: pengoptimal, fungsi loss, ukuran keberhasilan</td></tr>
  <tr><td><b>epochs=10</b></td><td>Seluruh data dilewati 10 kali</td></tr>
  <tr><td><b>validation_split</b></td><td>20% data latih disisihkan untuk memantau overfitting</td></tr>
</table>

<h3>TensorFlow vs PyTorch — jujur</h3>
<table class="tbl">
  <tr><th></th><th>PyTorch</th><th>TensorFlow / Keras</th></tr>
  <tr><td><b>Riset &amp; makalah baru</b></td><td class="ok-cell">Mendominasi</td><td>Makin jarang</td></tr>
  <tr><td><b>Mudah dipelajari</b></td><td>Sedang</td><td class="ok-cell">Keras paling ramah pemula</td></tr>
  <tr><td><b>Menyusun model tak lazim</b></td><td class="ok-cell">Lebih leluasa</td><td>Lebih kaku</td></tr>
  <tr><td><b>Jalan di HP</b></td><td>Bisa (ExecuTorch)</td><td class="ok-cell"><b>TF Lite</b> — sangat matang</td></tr>
  <tr><td><b>Jalan di browser</b></td><td>Terbatas</td><td class="ok-cell"><b>TensorFlow.js</b></td></tr>
  <tr><td><b>Melayani di server</b></td><td>TorchServe</td><td class="ok-cell"><b>TF Serving</b> — sangat mapan</td></tr>
</table>

<div class="callout">
<b>Ini inti perbedaannya:</b> PyTorch unggul di tahap <b>membuat</b>, TensorFlow unggul di tahap <b>menyebarkan</b>. Kalau modelmu harus berjalan di dalam aplikasi HP atau langsung di browser pengguna, ekosistem TensorFlow masih paling matang.
</div>

<h3>Kabar terbaru: Keras kini tidak terikat TensorFlow</h3>
<div class="callout warn">
Sejak <b>Keras 3</b>, Keras bisa berjalan di atas <b>TensorFlow, JAX, maupun PyTorch</b>. Artinya kamu bisa menulis dengan gaya Keras yang ramah, tapi mesin di baliknya bebas dipilih.<br><br>
Konsekuensinya: pertanyaan "TensorFlow atau PyTorch?" kini <b>tidak sepenting dulu</b>. Yang benar-benar penting adalah memahami <b>konsepnya</b> — lapisan, loss, pengoptimal, epoch — karena konsep itu sama di semua kerangka kerja.
</div>

<h3>Jadi pilih yang mana?</h3>
<table class="tbl">
  <tr><th>Kalau kamu...</th><th>Pilih</th></tr>
  <tr><td>Baru belajar deep learning</td><td class="ok-cell"><b>Keras</b> — paling cepat sampai ke model pertama yang jalan</td></tr>
  <tr><td>Ingin mengikuti riset &amp; kode terbaru</td><td><b>PyTorch</b> — mayoritas makalah memakainya</td></tr>
  <tr><td>Modelnya harus jalan di HP atau browser</td><td><b>TensorFlow</b> (TF Lite / TF.js)</td></tr>
  <tr><td>Datanya berupa tabel biasa</td><td class="ok-cell"><b>Tidak perlu keduanya</b> — pakai scikit-learn atau XGBoost</td></tr>
</table>

<div class="callout warn">
<b>Peringatan yang paling sering diabaikan:</b> untuk data tabel — yang paling sering ditemui di dunia kerja — <b>deep learning biasanya kalah</b> dari Random Forest atau XGBoost. Lebih lambat, butuh lebih banyak data, lebih sulit dijelaskan, dan hasilnya sering lebih buruk. Pakai deep learning untuk <b>gambar, teks, dan suara</b>; untuk tabel, mulailah dari yang sederhana.
</div>
`,
          keyPoints: [
            "TensorFlow adalah mesin perhitungan; Keras adalah antarmuka ramah di atasnya — dalam praktik, memakai TensorFlow berarti menulis Keras.",
            "Keras Sequential menyusun lapisan berurutan; compile menentukan pengoptimal, loss, dan ukuran keberhasilan; fit melatih.",
            "epochs = berapa kali seluruh data dilewati; validation_split menyisihkan sebagian data latih untuk memantau overfitting.",
            "PyTorch unggul di tahap membuat (riset, model tak lazim); TensorFlow unggul di tahap menyebarkan (TF Lite di HP, TF.js di browser, TF Serving).",
            "Keras 3 bisa berjalan di atas TensorFlow, JAX, atau PyTorch — sehingga pilihan kerangka kerja tidak lagi sepenting dulu.",
            "Yang penting dikuasai adalah konsepnya (lapisan, loss, pengoptimal, epoch) karena sama di semua kerangka kerja.",
            "Untuk data tabel, deep learning biasanya KALAH dari Random Forest/XGBoost — pakai deep learning untuk gambar, teks, dan suara.",
          ],
          quiz: [
            {
              q: "Hubungan Keras dan TensorFlow adalah?",
              options: [
                "Keras antarmuka ramah di atas TensorFlow; memakai TF berarti menulis Keras",
                "TensorFlow dibangun di atas Keras sebagai lapisan tambahan",
                "Keras dan TensorFlow bersaing sehingga tak bisa dipakai bersama",
                "Keras khusus untuk membuat grafik, TensorFlow untuk melatih model",
              ],
              answer: 0,
              explain:
                "Sejak 2019 Keras menjadi cara resmi memakai TensorFlow.",
            },
            {
              q: "Di bagian mana ekosistem TensorFlow masih unggul dibanding PyTorch?",
              options: [
                "Menyebarkan model ke HP lewat TF Lite dan ke browser lewat TF.js",
                "Menyusun model dengan bentuk yang tidak lazim dan bercabang",
                "Mengikuti kode dan makalah riset terbaru yang baru terbit",
                "Kecepatan pelatihan pada kartu grafis kelas konsumen",
              ],
              answer: 0,
              explain:
                "PyTorch unggul di tahap membuat; TensorFlow unggul di tahap menyebarkan.",
            },
            {
              q: "Datamu berupa tabel penjualan biasa dengan 20 kolom. Sebaiknya mulai dari?",
              options: [
                "Random Forest atau XGBoost — untuk data tabel biasanya lebih unggul",
                "Jaringan saraf dalam dengan Keras agar polanya tertangkap semua",
                "Model bahasa besar yang diberi tabelnya lewat prompt",
                "Clustering k-Means untuk mengelompokkan barisnya lebih dulu",
              ],
              answer: 0,
              explain:
                "Deep learning menang untuk gambar, teks, dan suara — bukan untuk tabel.",
            },
            {
              q: "Apa arti epochs=10 pada model.fit()?",
              options: [
                "Seluruh data latih dilewati sebanyak sepuluh kali",
                "Model dilatih memakai sepuluh potongan data yang berbeda",
                "Jaringannya disusun dari sepuluh lapisan yang bertumpuk",
                "Pelatihan dihentikan setelah sepuluh menit berjalan",
              ],
              answer: 0,
              explain:
                "Satu epoch berarti satu kali putaran penuh melewati seluruh data latih.",
            },
          ],
        },
        {
          id: "ai-alg-10",
          title: "Melatih Neural Network dengan Benar",
          duration: "15 menit",
          content: `
<p>Kamu sudah tahu cara neural network belajar, dan sudah melihat cara menulisnya dengan PyTorch atau Keras. Masalahnya, jaringan yang ditulis dengan benar pun sering <b>gagal belajar</b> atau <b>belajar hal yang salah</b>. Pelajaran ini adalah daftar periksa praktisnya.</p>

<div data-diagram="tree" data-nodes="Loss latih rendah?::Validasi juga rendah?::Loss masih turun?" data-leaves="Sehat, lanjut uji|Overfit: tambah rem|Latih lebih lama|Underfit: perbesar" data-yes="Ya" data-no="Tidak" data-caption="Membaca grafik loss: dua pertanyaan menentukan langkah berikutnya"></div>

<h3>1. Epoch, batch &amp; langkah</h3>
<table class="tbl">
  <tr><th>Istilah</th><th>Artinya</th><th>Contoh</th></tr>
  <tr><td><b>Batch</b></td><td>Sekelompok baris yang dipakai untuk satu kali memperbarui bobot</td><td>32 baris</td></tr>
  <tr><td><b>Langkah</b></td><td>Satu kali maju-mundur-perbarui pada satu batch</td><td>—</td></tr>
  <tr><td><b>Epoch</b></td><td>Seluruh data sudah dilihat satu kali</td><td>10.000 baris ÷ 32 ≈ 313 langkah</td></tr>
</table>
<div class="callout">
<b>Kenapa tidak memakai semua data sekaligus?</b> Pertama, data besar tidak muat di memori. Kedua — dan ini mengejutkan — sedikit "keributan" dari batch kecil justru membantu: arah perbaruannya bergoyang sehingga model tidak mudah terjebak di lembah yang sempit.
</div>

<h3>2. Persiapan yang wajib — sering jadi penyebab gagal</h3>
<table class="tbl">
  <tr><th>Persiapan</th><th>Kalau dilewati</th></tr>
  <tr><td><b>Skalakan input</b> (ingat demo penskalaan fitur)</td><td>Kolom bernilai jutaan membuat perbaruan bobot kacau; loss naik-turun atau tidak bergerak</td></tr>
  <tr><td><b>Bobot awal acak</b>, bukan nol semua</td><td>Semua neuron menghitung hal yang sama dan diperbarui sama persis — 64 neuron bekerja seperti 1</td></tr>
  <tr><td><b>ReLU</b> di lapisan tersembunyi</td><td>Sigmoid bertumpuk membuat andil yang dikirim mundur makin kecil sampai hilang (<i>vanishing gradient</i>)</td></tr>
  <tr><td><b>Aktivasi keluaran sesuai tugas</b></td><td>Keluarannya tak bermakna</td></tr>
</table>

<table class="tbl">
  <tr><th>Tugas</th><th>Aktivasi keluaran</th><th>Loss</th></tr>
  <tr><td>Ya / tidak</td><td>sigmoid (1 neuron)</td><td>binary crossentropy</td></tr>
  <tr><td>Pilih satu dari banyak kelas</td><td>softmax (1 neuron per kelas)</td><td>categorical crossentropy</td></tr>
  <tr><td>Menebak angka</td><td>tanpa aktivasi</td><td>MSE</td></tr>
</table>

<h3>3. Learning rate — pengaturan nomor satu</h3>
<p>Ingat menuruni bukit dari pelajaran gradient descent: langkah terlalu besar melompati lembah dan loss meledak; langkah terlalu kecil membuat latihan berjalan berhari-hari. Kebanyakan praktisi memakai pengoptimal <b>Adam</b> yang menyesuaikan besar langkah tiap bobot, dimulai dari learning rate sekitar <b>0,001</b>.</p>
<div class="callout warn">
<b>Gejala yang mudah dikenali:</b> loss naik atau muncul <i>NaN</i> → learning rate terlalu besar (atau input belum diskalakan). Loss turun sangat pelan dan lurus → terlalu kecil.
</div>

<h3>4. Rem untuk mencegah menghafal</h3>
<table class="tbl">
  <tr><th>Rem</th><th>Cara kerjanya</th></tr>
  <tr><td><b>Early stopping</b></td><td>Pantau loss validasi; berhenti saat tidak membaik lagi, lalu kembalikan bobot terbaiknya. Rem paling murah dan paling penting</td></tr>
  <tr><td><b>Dropout</b></td><td>Setiap langkah, sebagian neuron dimatikan secara acak</td></tr>
  <tr><td><b>Weight decay</b></td><td>Menghukum bobot yang terlalu besar — regularisasi yang sudah kamu kenal</td></tr>
  <tr><td><b>Tambah data / augmentasi</b></td><td>Untuk gambar: putar, geser, ubah terang. Obat paling ampuh bila memungkinkan</td></tr>
</table>

<div class="callout">
⚽ <b>Analogi dropout.</b> Pelatih sepak bola mengistirahatkan pemain secara acak setiap sesi latihan. Tim tidak bisa terus bergantung pada satu bintang, sehingga semua pemain terpaksa ikut mampu. Saat pertandingan sungguhan, semua pemain turun — dan tim menjadi lebih tangguh. Karena itu dropout <b>hanya aktif saat latihan</b>.
</div>

<pre class="code">from tensorflow import keras

model = keras.Sequential([
    keras.layers.Input(shape=(20,)),
    keras.layers.Dense(64, activation="relu"),
    keras.layers.Dropout(0.3),
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid"),
])
model.compile(optimizer=keras.optimizers.Adam(learning_rate=0.001),
              loss="binary_crossentropy", metrics=["AUC"])

henti = keras.callbacks.EarlyStopping(monitor="val_loss", patience=10,
                                      restore_best_weights=True)
riwayat = model.fit(X_latih_skala, y_latih,
                    validation_data=(X_validasi_skala, y_validasi),
                    epochs=200, batch_size=32, callbacks=[henti])</pre>

<h3>5. Jujur: neural network bukan selalu jawabannya</h3>
<table class="tbl">
  <tr><th>Jenis data</th><th>Biasanya unggul</th></tr>
  <tr><td>Tabel (spreadsheet) ribuan–jutaan baris</td><td>XGBoost / LightGBM / CatBoost</td></tr>
  <tr><td>Gambar, suara, video</td><td class="ok-cell">Neural network (CNN, Transformer)</td></tr>
  <tr><td>Teks bernuansa</td><td class="ok-cell">Neural network (Transformer)</td></tr>
  <tr><td>Tabel yang sangat besar &amp; punya teks/gambar</td><td>Gabungan keduanya</td></tr>
</table>
<p>Pada data tabel biasa, model pohon umumnya menang sambil jauh lebih mudah dilatih. Kekuatan neural network sesungguhnya muncul pada data yang <b>tak berstruktur</b> — dan itulah yang dibahas di dua pelajaran berikutnya: CNN untuk gambar dan Transformer untuk teks.</p>
`,
          keyPoints: [
            "Batch = baris untuk satu kali perbarui bobot; epoch = seluruh data dilihat sekali (10.000 ÷ 32 ≈ 313 langkah).",
            "Persiapan wajib: skalakan input, bobot awal acak (bukan nol), ReLU di lapisan tersembunyi, dan aktivasi keluaran sesuai tugas.",
            "Learning rate adalah pengaturan nomor satu; loss meledak atau NaN berarti terlalu besar, loss turun sangat pelan berarti terlalu kecil.",
            "Baca grafik loss: latih tinggi = underfit; latih rendah tapi validasi tinggi = overfit.",
            "Rem utama: early stopping dengan bobot terbaik, dropout, weight decay, dan menambah data.",
            "Dropout mematikan neuron acak hanya saat latihan agar jaringan tidak bergantung pada segelintir neuron.",
            "Pada data tabel biasa model pohon umumnya unggul; neural network bersinar pada gambar, suara, dan teks.",
          ],
          practice: [
            { type: "number", q: "Data latih 10.000 baris dengan batch 32. Berapa langkah dalam satu epoch? (bulatkan ke atas)", answer: 313, tol: 0.5, hint: "10.000 ÷ 32 = 312,5 — sisa baris tetap membentuk satu batch terakhir.", solution: "312 batch penuh + 1 batch sisa = 313 langkah." },
          ],
          quiz: [
            {
              q: "Loss latih terus turun, tetapi loss validasi mulai naik. Apa diagnosis dan langkahnya?",
              options: [
                "Overfitting — tambah rem seperti early stopping, dropout, atau data yang lebih banyak",
                "Underfitting — perbesar jaringan dan latih lebih lama agar polanya tertangkap",
                "Learning rate terlalu kecil — naikkan sepuluh kali lipat agar validasi ikut turun",
                "Data validasi rusak — gabungkan saja dengan data latih agar grafiknya konsisten",
              ],
              answer: 0,
              explain: "Model makin hafal data latih sambil makin buruk pada data yang belum dilihat.",
            },
            {
              q: "Kenapa bobot awal tidak boleh diisi nol semua?",
              options: [
                "Karena semua neuron akan menghitung dan diperbarui sama persis, sehingga bekerja seperti satu",
                "Karena perkalian dengan nol membuat loss awal tidak terdefinisi dan latihan langsung berhenti",
                "Karena bobot nol membuat input harus diskalakan ulang di setiap epoch berikutnya",
                "Karena pengoptimal Adam hanya dapat menerima bobot awal yang bernilai positif",
              ],
              answer: 0,
              explain: "Keacakan awal membuat tiap neuron mulai dari tempat berbeda sehingga mempelajari hal berbeda.",
            },
            {
              q: "Kenapa dropout hanya aktif saat latihan, bukan saat menebak?",
              options: [
                "Karena dropout melatih agar tak bergantung pada segelintir neuron, bukan untuk melemahkan tebakan",
                "Karena saat menebak semua neuron sudah dipangkas permanen sehingga dropout tak diperlukan",
                "Karena dropout membutuhkan label jawaban yang tidak tersedia saat model dipakai",
                "Karena mematikan neuron saat menebak membuat hasilnya lebih akurat tetapi terlalu lambat",
              ],
              answer: 0,
              explain: "Seperti tim yang berlatih dengan pemain diistirahatkan acak, lalu bertanding dengan formasi penuh.",
            },
            {
              q: "Loss langsung berubah menjadi NaN di beberapa langkah pertama. Apa yang paling dulu diperiksa?",
              options: [
                "Learning rate yang terlalu besar atau input yang belum diskalakan",
                "Jumlah epoch yang terlalu sedikit untuk jaringan sebesar itu",
                "Dropout yang terlalu kecil sehingga jaringan mulai menghafal",
                "Data validasi yang ukurannya lebih besar dari data latih",
              ],
              answer: 0,
              explain: "Langkah yang terlalu besar atau angka input yang sangat besar membuat nilai meledak.",
            },
          ],
        },
        {
          id: "ai-ars-4",
          title: "CNN — Cara AI Melihat Gambar",
          duration: "14 menit",
          content: `
<p>Kamu sudah tahu komputer melihat gambar sebagai <b>angka piksel</b>. Tapi bagaimana ia mengenali "ini kucing"? Jawabannya: <b>CNN</b> (Convolutional Neural Network).</p>

<div data-diagram="pipeline" data-stages="Gambar::grid angka piksel|Filter konvolusi::mencari garis &amp; tepi|Pooling::diperkecil, diambil intinya|Klasifikasi::ini kucing" data-caption="CNN membangun pemahaman bertingkat: tepi jadi bentuk, bentuk jadi objek"></div>


<h3>Masalahnya dulu</h3>
<div class="callout warn">
Foto 1000×1000 piksel = <b>1 juta angka</b>. Kalau semuanya disambungkan ke neural network biasa, jumlah koneksinya meledak — terlalu berat, dan model gagal mengenali objek yang <b>bergeser posisi</b>.
</div>

<h3>Ide cerdas CNN: geser "kaca pembesar"</h3>
<div class="callout">
Alih-alih melihat seluruh gambar sekaligus, CNN memakai <b>filter</b> (jendela kecil, mis. 3×3 piksel) yang <b>digeser ke seluruh permukaan gambar</b> — seperti memindai dengan kaca pembesar. Tiap filter mencari <b>satu pola sederhana</b>: garis tegak, garis miring, tepi, atau perubahan warna.
</div>

<h3>Tiga lapisan utama</h3>
<table class="tbl">
  <tr><th>Lapisan</th><th>Tugasnya</th><th>Analogi</th></tr>
  <tr><td><b>Convolution</b></td><td>Menggeser filter untuk mendeteksi pola</td><td>Memindai dengan kaca pembesar</td></tr>
  <tr><td><b>Activation (ReLU)</b></td><td>Membuang nilai negatif (jadikan 0)</td><td>Menyaring: "yang lemah diabaikan"</td></tr>
  <tr><td><b>Pooling</b></td><td>Merangkum &amp; mengecilkan ukuran</td><td>Meringkas: ambil yang paling menonjol</td></tr>
</table>

<h3>Hierarki: dari garis jadi wajah</h3>
<p>Inilah bagian paling elegan. Lapisan CNN bertumpuk, dan tiap tingkat mengenali hal yang <b>makin rumit</b>:</p>
<ol>
  <li><b>Lapisan awal</b> → garis, tepi, sudut</li>
  <li><b>Lapisan tengah</b> → bentuk: lingkaran, mata, hidung, telinga</li>
  <li><b>Lapisan akhir</b> → objek utuh: wajah kucing</li>
</ol>
<div class="callout">
<b>Yang menakjubkan:</b> tidak ada manusia yang mengajari "ini mata, ini hidung". CNN <b>menemukan sendiri</b> hierarki itu dari ribuan contoh gambar.
</div>

<h3>Transfer learning — jalan pintas yang sangat berguna</h3>
<div class="callout">
Melatih CNN dari nol butuh jutaan gambar &amp; komputer mahal. <b>Transfer learning</b> memakai model yang <b>sudah dilatih</b> orang lain (mis. dilatih atas jutaan foto umum), lalu <b>disetel ulang sedikit</b> untuk tugasmu.
<br><br><b>Analogi:</b> daripada mengajari orang melihat dari bayi, kamu ambil orang yang <b>sudah bisa melihat</b>, lalu cukup ajari <b>"ini namanya penyakit daun A, ini B"</b>. Jauh lebih cepat &amp; butuh sedikit contoh.
</div>
<p>Karena itu kamu bisa membuat pengenal gambar khusus (mis. penyakit tanaman) hanya dengan <b>ratusan foto</b>, bukan jutaan.</p>
`,
          keyPoints: [
            "CNN memakai filter (jendela kecil) yang digeser ke seluruh gambar untuk mendeteksi pola.",
            "Tiga lapisan: convolution (deteksi pola), ReLU (buang nilai negatif), pooling (merangkum & mengecilkan).",
            "Lapisan bertumpuk membentuk hierarki: garis → bentuk (mata/hidung) → objek utuh — ditemukan sendiri oleh model.",
            "Transfer learning memakai model terlatih lalu menyetelnya untuk tugas baru — cukup ratusan contoh, bukan jutaan.",
          ],
          practice: [
            { type: "choice", q: "Apa fungsi lapisan 'pooling' pada CNN?", options: ["Menambah ukuran gambar", "Merangkum & mengecilkan ukuran, mengambil yang paling menonjol", "Mengubah warna", "Menyimpan data"], answer: 1, hint: "Meringkas informasi.", solution: "Pooling merangkum area menjadi nilai ringkas sehingga ukuran mengecil." },
            { type: "choice", q: "Kamu ingin membuat pengenal penyakit daun tapi hanya punya 500 foto. Pendekatan terbaik?", options: ["Latih CNN dari nol", "Transfer learning dari model yang sudah terlatih", "Menyerah", "Pakai k-NN saja"], answer: 1, hint: "Data sedikit, tapi ada model terlatih yang bisa dipinjam.", solution: "Transfer learning memungkinkan hasil bagus dengan data terbatas." },
          ],
          quiz: [
            {
              q: "Apa ide inti CNN?",
              options: [
                "Menggeser filter kecil ke seluruh gambar untuk mendeteksi pola",
                "Menghubungkan setiap piksel ke setiap neuron pada lapisan berikutnya",
                "Memperkecil gambar lebih dulu agar perhitungannya menjadi ringan",
                "Mengubah gambar menjadi teks lalu memprosesnya seperti kalimat",
              ],
              answer: 0,
              explain:
                "Filter yang digeser membuat CNN efisien & tetap mengenali objek yang bergeser posisi.",
            },
            {
              q: "Apa keuntungan transfer learning?",
              options: [
                "Bisa mencapai hasil baik dengan data dan komputasi jauh lebih sedikit",
                "Model yang dihasilkan berukuran jauh lebih kecil dan ringan",
                "Modelnya tidak perlu diuji lagi karena sudah terbukti akurat",
                "Hasilnya selalu lebih baik daripada melatih model dari nol",
              ],
              answer: 0,
              explain:
                "Memanfaatkan pengetahuan model terlatih menghemat data, waktu, & biaya.",
            },
          ],
        },
        {
          id: "ai-ars-5",
          title: "RNN, LSTM & Transformer (Attention)",
          duration: "14 menit",
          content: `
<p>CNN hebat untuk gambar. Tapi bagaimana dengan <b>urutan</b> — kalimat, musik, harga harian? Di sinilah arsitektur berbeda dibutuhkan.</p>

<div data-diagram="pipeline" data-stages="Token masuk::semua sekaligus|Attention::tiap kata melihat kata lain|Pembobotan::mana yang paling penting|Keluaran::makna yang kaya konteks" data-caption="Kunci Transformer: memproses seluruh kalimat serentak, bukan satu per satu"></div>


<h3>Masalah data berurutan</h3>
<p>Dalam kalimat <i>"Saya lahir di Bandung, jadi bahasa ibu saya adalah ___"</i>, untuk menebak kata terakhir model harus <b>mengingat</b> kata "Bandung" yang jauh di depan. Model biasa tidak punya ingatan.</p>

<h3>RNN — punya ingatan, tapi pelupa</h3>
<div class="callout">
<b>RNN</b> (Recurrent Neural Network) memproses kata <b>satu per satu</b> sambil membawa "catatan ingatan" ke kata berikutnya.
<br><br><b>Masalahnya:</b> ingatannya <b>memudar</b> untuk jarak jauh — disebut <b>vanishing gradient</b>. Ibarat main "bisik berantai": pesan makin kabur setelah melewati banyak orang.
</div>

<h3>LSTM — ingatan dengan gerbang</h3>
<p><b>LSTM</b> (Long Short-Term Memory) memperbaiki RNN dengan menambahkan <b>gerbang (gate)</b> yang mengatur:</p>
<ul>
  <li>Apa yang <b>diingat</b></li>
  <li>Apa yang <b>dilupakan</b></li>
  <li>Apa yang <b>dikeluarkan</b></li>
</ul>
<p>Hasilnya ingatan bertahan jauh lebih lama. Tapi tetap ada kelemahan besar: <b>harus diproses berurutan</b>, jadi lambat dan sulit dipercepat.</p>

<h3>Transformer — terobosannya (2017)</h3>
<div class="callout">
<b>Ide revolusionernya:</b> buang pemrosesan berurutan. <b>Lihat SEMUA kata sekaligus</b>, lalu biarkan model menentukan sendiri <b>kata mana yang penting diperhatikan</b>. Mekanisme ini disebut <b>attention</b> (perhatian).
</div>

<h3>Attention — dijelaskan sederhana</h3>
<p>Untuk tiap kata, model bertanya: <b>"kata lain mana yang paling membantu memahami kata ini?"</b> lalu memberi <b>bobot perhatian</b>.</p>
<pre class="code">Kalimat : "Kucing itu tidak mau makan karena dia sakit"
Saat memproses kata "dia":
   perhatian ke "Kucing"  ->  tinggi   (0,7)
   perhatian ke "makan"   ->  sedang   (0,2)
   perhatian ke "tidak"   ->  rendah   (0,1)
Kesimpulan model: "dia" merujuk pada "Kucing".</pre>

<table class="tbl">
  <tr><th></th><th>RNN / LSTM</th><th>Transformer</th></tr>
  <tr><td>Cara memproses</td><td>Satu per satu (berurutan)</td><td><b>Semua sekaligus</b> (paralel)</td></tr>
  <tr><td>Ingatan jarak jauh</td><td>Terbatas</td><td>Sangat baik</td></tr>
  <tr><td>Kecepatan latih</td><td>Lambat</td><td><b>Jauh lebih cepat</b> (bisa dibagi ke banyak GPU)</td></tr>
</table>

<div class="callout">
<b>Inilah kenapa LLM bisa ada.</b> Karena Transformer bisa dilatih secara paralel dalam skala raksasa, barulah mungkin membuat model dengan ratusan miliar parameter seperti Claude &amp; GPT. Semua LLM modern memakai arsitektur ini.
</div>

<div class="callout warn">
<b>Harganya:</b> attention membandingkan <b>setiap kata dengan setiap kata lain</b>. Kalau teks 2× lebih panjang, perhitungannya sekitar <b>4× lebih berat</b>. Inilah alasan context window panjang itu mahal.
</div>
`,
          keyPoints: [
            "RNN memproses berurutan sambil membawa ingatan, tapi ingatannya memudar (vanishing gradient).",
            "LSTM menambahkan gerbang untuk mengatur apa yang diingat/dilupakan — ingatan bertahan lebih lama.",
            "Transformer (2017) melihat semua kata sekaligus & memakai attention untuk menentukan kata mana yang penting.",
            "Attention memberi bobot perhatian antar-kata (mis. 'dia' → 'Kucing').",
            "Transformer bisa dilatih paralel → memungkinkan LLM raksasa; tapi biayanya naik ~kuadrat terhadap panjang teks.",
          ],
          practice: [
            { type: "choice", q: "Apa kelemahan utama RNN untuk kalimat panjang?", options: ["Terlalu cepat", "Ingatannya memudar untuk jarak jauh (vanishing gradient)", "Tidak bisa membaca teks", "Butuh gambar"], answer: 1, hint: "Seperti permainan bisik berantai.", solution: "Informasi jauh di depan makin kabur saat melewati banyak langkah." },
            { type: "choice", q: "Apa keunggulan utama Transformer dibanding LSTM?", options: ["Lebih kecil ukurannya", "Memproses semua kata sekaligus (paralel) sehingga jauh lebih cepat dilatih", "Tidak butuh data", "Tidak memakai attention"], answer: 1, hint: "Kenapa LLM raksasa jadi mungkin?", solution: "Pemrosesan paralel memungkinkan pelatihan skala sangat besar." },
          ],
          quiz: [
            {
              q: "Apa yang dilakukan mekanisme 'attention'?",
              options: [
                "Memberi bobot: kata lain mana yang paling membantu memahami kata ini",
                "Mengurutkan kata berdasar seberapa sering muncul di data latih",
                "Menghapus kata yang dianggap tidak penting agar hemat token",
                "Menerjemahkan tiap kata ke bentuk dasarnya sebelum diproses",
              ],
              answer: 0,
              explain:
                "Attention menimbang keterkaitan antar-kata sehingga konteks tertangkap.",
            },
            {
              q: "Kenapa context window yang panjang itu mahal?",
              options: [
                "Attention membandingkan tiap kata dengan semua kata, biayanya kuadrat",
                "Model harus dilatih ulang setiap kali jendelanya diperpanjang",
                "Teks yang panjang harus disimpan di basis data terpisah",
                "Jendela panjang memerlukan kartu grafis dengan merek tertentu",
              ],
              answer: 0,
              explain:
                "Jumlah perbandingan tumbuh kuadratik terhadap panjang teks.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 11: REINFORCEMENT LEARNING: BELAJAR DARI COBA-COBA ---------------- */
    {
      id: "ai-rl",
      level: "Reinforcement",
      title: "Reinforcement Learning: Belajar dari Coba-Coba",
      summary: "Dilema eksplorasi & reward jangka panjang, Q-learning dengan robot yang belajar mencari jalan, lalu Deep RL: AlphaGo, robot, dan RL di balik cara chatbot dilatih.",
      lessons: [
        {
          id: "ai-rl-1",
          title: "Reinforcement Learning dari Nol — Dilema Warung & Reward Jangka Panjang",
          duration: "15 menit",
          content: `
<p>Di pelajaran <b>Tiga Gaya Belajar Mesin</b> kamu sudah mengenal kosakatanya: agen, keadaan, aksi, reward, dan kebijakan. Modul ini membongkar <b>cara kerjanya</b> — dimulai dari dua pertanyaan yang juga kamu hadapi setiap hari: <i>coba yang baru atau setia pada yang dikenal?</i> dan <i>untung sekarang atau untung nanti?</i></p>

<div data-diagram="cycle" data-steps="Lihat keadaan|Pilih aksi|Terima reward|Perbarui perkiraan" data-center="agen RL" data-caption="Setiap putaran, agen memperbaiki perkiraannya tentang aksi mana yang paling menguntungkan"></div>

<h3>Fundamental: belajar tanpa kunci jawaban</h3>
<div class="callout">
Di <b>supervised learning</b>, model diberi tahu jawaban yang benar: "foto ini kucing". Di <b>reinforcement learning</b>, tidak ada yang memberi tahu aksi mana yang benar. Agen hanya menerima <b>angka reward</b> setelah bertindak — dan harus menyimpulkan sendiri aksi apa yang membuat angka itu besar.<br><br>
Bayangkan belajar memasak tanpa resep. Kamu hanya diberi nilai 1–10 oleh orang yang mencicipi. Tidak ada yang bilang "garamnya kebanyakan". Kamu harus mencoba, mengingat nilainya, lalu menyimpulkan sendiri.
</div>

<h3>Tantangan 1: dilema warung makan</h3>
<p>Ada empat warung di dekat kampus. Setiap warung punya rata-rata rasa yang tidak kamu ketahui, dan rasanya naik-turun setiap hari. Kamu punya jatah makan siang terbatas. Coba sendiri:</p>

<div data-demo="rl-bandit"></div>

<p>Masalah ini begitu mendasar sampai punya nama sendiri: <b>multi-armed bandit</b>, diambil dari istilah mesin judi berlengan banyak. Ada dua hal yang dikerjakan agen:</p>

<table class="tbl">
  <tr><th>Tugas</th><th>Caranya</th></tr>
  <tr><td><b>Memperkirakan nilai tiap pilihan</b></td><td>Menghitung rata-rata reward yang pernah diterima dari pilihan itu</td></tr>
  <tr><td><b>Memilih</b></td><td>Menyeimbangkan <b>eksploitasi</b> (pilih yang perkiraannya terbaik) dan <b>eksplorasi</b> (sesekali mencoba yang lain)</td></tr>
</table>

<h3>Memperbarui perkiraan tanpa menyimpan semua riwayat</h3>
<p>Agen tidak perlu mencatat semua nilai makan siang. Cukup satu rumus kecil:</p>
<div class="callout">
<b>perkiraan baru = perkiraan lama + (reward hari ini − perkiraan lama) ÷ jumlah kunjungan</b><br><br>
Contoh: perkiraanmu untuk Warung B adalah 6 setelah 3 kunjungan. Kunjungan ke-4 kamu memberi nilai 8.<br>
Perkiraan baru = 6 + (8 − 6) ÷ 4 = <b>6,5</b>
</div>
<p>Perhatikan bagian <b>(reward − perkiraan lama)</b>. Itu adalah <b>kejutan</b>: seberapa jauh kenyataan berbeda dari dugaan. Kejutan positif menaikkan perkiraan, kejutan negatif menurunkannya. Hampir semua algoritma RL — termasuk Q-learning di pelajaran berikutnya — dibangun di atas ide "geser perkiraan sedikit ke arah kejutan" ini.</p>

<h3>Aturan ε-greedy — sederhana tapi ampuh</h3>
<table class="tbl">
  <tr><th>Nilai ε</th><th>Perilaku</th><th>Hasil</th></tr>
  <tr><td>0%</td><td>Selalu pilih yang perkiraannya terbaik</td><td class="bad-cell">Terjebak pada pilihan "lumayan" pertama</td></tr>
  <tr><td>5–20%</td><td>Kadang-kadang mencoba acak</td><td class="ok-cell">Menemukan pilihan terbaik lalu memanfaatkannya</td></tr>
  <tr><td>100%</td><td>Selalu acak</td><td class="bad-cell">Tidak pernah memanfaatkan yang sudah dipelajari</td></tr>
</table>

<div class="callout warn">
<b>💡 Kamu bertemu masalah bandit setiap hari tanpa sadar.</b> Aplikasi berita memilih judul mana yang ditampilkan, toko daring memilih promo mana yang diuji, dan iklan memilih gambar mana yang dipasang — semuanya menyeimbangkan "yang sudah terbukti laku" dengan "yang belum dicoba". Banyak perusahaan menjalankan algoritma bandit, bukan sekadar uji A/B biasa.
</div>

<h3>Tantangan 2: untung sekarang atau untung nanti?</h3>
<p>Warung makan hanya punya satu langkah: pilih, makan, dapat nilai. Tapi kebanyakan masalah nyata punya <b>urutan langkah</b>, dan reward besar sering baru datang di akhir. Robot yang berjalan menuju pintu baru mendapat hadiah saat sampai. Pemain catur baru tahu menang atau kalah setelah puluhan langkah.</p>

<p>Karena itu agen tidak mengejar reward hari ini saja, melainkan <b>jumlah reward dari sekarang sampai akhir</b> — disebut <b>return</b>. Reward yang lebih jauh di masa depan diberi bobot lebih kecil memakai <b>faktor diskon γ</b> (gamma), angka antara 0 dan 1:</p>

<div class="callout">
<b>return = r₁ + γ·r₂ + γ²·r₃ + …</b><br><br>
Contoh dengan γ = 0,9 dan tiga langkah berreward −1, −1, lalu +10:<br>
return = −1 + 0,9 × (−1) + 0,81 × 10 = −1 − 0,9 + 8,1 = <b>6,2</b>
</div>

<table class="tbl">
  <tr><th>γ</th><th>Sifat agen</th><th>Mirip manusia yang…</th></tr>
  <tr><td>Mendekati 0</td><td>Rabun jauh: hanya peduli reward langkah berikutnya</td><td>Menghabiskan gaji hari ini juga</td></tr>
  <tr><td>0,9–0,99</td><td>Seimbang: mau berkorban sedikit sekarang demi hasil besar nanti</td><td>Menabung dan belajar</td></tr>
  <tr><td>Tepat 1</td><td>Semua masa depan sama penting — bisa bermasalah bila tugasnya tak pernah berakhir</td><td>Menunda kesenangan tanpa batas</td></tr>
</table>

<div class="callout">
<b>Kaitkan dengan jalur Akuntansi:</b> ini persis ide <b>nilai waktu uang</b>. Uang Rp100 ribu tahun depan bernilai lebih kecil dari Rp100 ribu hari ini, sehingga arus kas masa depan didiskon. Reward masa depan di RL didiskon dengan logika yang sama.
</div>
`,
          keyPoints: [
            "Reinforcement learning belajar tanpa kunci jawaban: agen hanya menerima angka reward dan harus menyimpulkan sendiri aksi yang baik.",
            "Masalah multi-armed bandit: memperkirakan nilai tiap pilihan sambil menyeimbangkan eksplorasi dan eksploitasi.",
            "Perkiraan baru = perkiraan lama + (reward − perkiraan lama) ÷ jumlah kunjungan; bagian dalam kurung adalah 'kejutan'.",
            "ε-greedy: dengan peluang ε mencoba acak, selebihnya memilih yang terbaik. Tanpa eksplorasi agen terjebak, terlalu banyak eksplorasi juga merugi.",
            "Pada masalah berurutan, agen mengejar return: jumlah reward dari sekarang sampai akhir, didiskon dengan faktor γ.",
            "γ kecil membuat agen rabun jauh; γ besar membuatnya mau berkorban sekarang demi hasil nanti — mirip nilai waktu uang.",
          ],
          practice: [
            { type: "number", q: "Perkiraan nilai sebuah warung 6 setelah 3 kunjungan. Kunjungan ke-4 bernilai 8. Berapa perkiraan barunya?", answer: 6.5, tol: 0.05, hint: "6 + (8 − 6) ÷ 4.", solution: "6 + 2 ÷ 4 = 6 + 0,5 = 6,5." },
            { type: "number", q: "Tiga langkah pertama bernilai 0, lalu langkah keempat memberi +10. Dengan γ = 0,9, berapa return-nya? (2 desimal)", answer: 7.29, tol: 0.01, hint: "Reward langkah keempat dikalikan γ³ = 0,9 × 0,9 × 0,9.", solution: "0 + 0 + 0 + 0,9³ × 10 = 0,729 × 10 = 7,29." },
          ],
          quiz: [
            {
              q: "Apa beda utama reinforcement learning dengan supervised learning?",
              options: [
                "RL tidak diberi aksi yang benar, hanya angka reward setelah bertindak",
                "RL selalu memakai data berlabel yang jauh lebih banyak dari supervised",
                "RL hanya bisa dipakai untuk game, sedangkan supervised untuk bisnis",
                "RL tidak memerlukan komputer karena belajar langsung dari manusia",
              ],
              answer: 0,
              explain: "Agen harus menyimpulkan sendiri aksi mana yang membuat reward besar.",
            },
            {
              q: "Agen dengan ε = 0% mencoba Warung A dan mendapat nilai lumayan. Apa yang terjadi selanjutnya?",
              options: [
                "Ia terus kembali ke Warung A dan tidak pernah menemukan warung yang lebih enak",
                "Ia mencoba semua warung secara bergiliran sampai menemukan yang terbaik",
                "Ia berpindah ke warung acak setiap hari karena belum yakin dengan pilihannya",
                "Ia berhenti makan siang karena tidak punya cukup data untuk memutuskan",
              ],
              answer: 0,
              explain: "Tanpa eksplorasi, pilihan 'lumayan' pertama menjadi penjara.",
            },
            {
              q: "Dalam rumus perkiraan baru, apa arti bagian (reward − perkiraan lama)?",
              options: [
                "Kejutan: seberapa jauh kenyataan berbeda dari dugaan agen",
                "Keuntungan bersih setelah dikurangi biaya melakukan aksi",
                "Jumlah kunjungan yang masih dibutuhkan agar perkiraan akurat",
                "Selisih antara reward terbesar dan terkecil yang pernah diterima",
              ],
              answer: 0,
              explain: "Perkiraan digeser sedikit ke arah kejutan — ide dasar hampir semua algoritma RL.",
            },
            {
              q: "Agen memakai γ yang sangat kecil, mendekati 0. Bagaimana perilakunya?",
              options: [
                "Rabun jauh: hanya mengejar reward langkah berikutnya dan mengabaikan hasil akhir",
                "Sangat sabar: rela menunggu lama demi reward terbesar di akhir permainan",
                "Selalu memilih aksi acak karena semua reward dianggap sama nilainya",
                "Berhenti belajar karena reward masa depan tidak lagi dapat dihitung",
              ],
              answer: 0,
              explain: "Reward masa depan dikalikan γ berulang kali, sehingga nyaris tak berarti bila γ kecil.",
            },
          ],
        },
        {
          id: "ai-rl-2",
          title: "Q-Learning — Robot yang Belajar Mencari Jalan Sendiri",
          duration: "16 menit",
          content: `
<p>Di pelajaran sebelumnya, agen hanya memperkirakan nilai empat warung. Sekarang dunianya lebih rumit: seekor robot harus berjalan melewati banyak kotak menuju bendera, dan setiap langkahnya memengaruhi langkah berikutnya. Algoritma yang akan kita pakai adalah salah satu yang paling terkenal dalam sejarah RL: <b>Q-learning</b>.</p>

<div data-diagram="pipeline" data-stages="Di kotak ini::lihat tabel Q|Pilih aksi::terbaik atau acak (ε)|Terima reward::−1, −10, atau +10|Perbarui Q::geser ke arah kejutan" data-caption="Satu langkah Q-learning — diulang ribuan kali"></div>

<h3>Fundamental: tabel Q = buku catatan nilai aksi</h3>
<div class="callout">
Bayangkan robot membawa <b>buku catatan</b>. Setiap halaman mewakili satu kotak, dan setiap halaman punya empat baris: atas, kanan, bawah, kiri. Di setiap baris tertulis satu angka: <b>"seberapa bagus kalau aku mengambil aksi ini dari kotak ini, sampai permainan selesai?"</b><br><br>
Angka itu disebut <b>nilai Q</b> (Q dari <i>quality</i>). Awalnya semua angka nol karena robot belum tahu apa-apa. Setelah buku terisi dengan benar, cara bermain terbaik sangat mudah: di setiap kotak, pilih baris dengan angka tertinggi.
</div>

<h3>Rumus pembaruan — dengan bahasa sehari-hari</h3>
<p>Setiap kali robot melangkah, ia memperbarui satu angka di bukunya:</p>
<div class="callout">
<b>Q baru = Q lama + α × (target − Q lama)</b><br>
<b>target = reward langkah ini + γ × nilai Q terbaik di kotak berikutnya</b>
</div>
<table class="tbl">
  <tr><th>Bagian</th><th>Artinya</th></tr>
  <tr><td><b>reward langkah ini</b></td><td>Apa yang langsung didapat: −1 per langkah, −10 jatuh ke lubang, +10 sampai bendera</td></tr>
  <tr><td><b>γ × Q terbaik berikutnya</b></td><td>"Dari tempatku sekarang, seberapa bagus masa depanku?" — diambil dari catatannya sendiri</td></tr>
  <tr><td><b>target − Q lama</b></td><td>Kejutan — ide yang sama dengan dilema warung</td></tr>
  <tr><td><b>α</b> (alpha)</td><td>Seberapa besar catatan digeser setiap kali. Di demo: 0,5</td></tr>
</table>

<p><b>Contoh hitung</b> dengan α = 0,5 dan γ = 0,9, saat tabel masih nol semua:</p>
<table class="tbl">
  <tr><th>Kejadian</th><th>Hitungan</th><th>Q baru</th></tr>
  <tr><td>Robot di kotak tepat di atas bendera, melangkah ↓ dan sampai (+10, permainan selesai)</td><td>0 + 0,5 × (10 − 0)</td><td><b>5</b></td></tr>
  <tr><td>Di episode lain, robot di kotak sebelah kirinya melangkah → (−1), tiba di kotak yang Q terbaiknya 5</td><td>0 + 0,5 × (−1 + 0,9 × 5 − 0)</td><td><b>1,75</b></td></tr>
</table>
<p>Perhatikan: kotak kedua belum pernah melihat bendera, tapi ia sudah "tahu" arah kanan itu bagus — karena <b>meminjam perkiraan</b> dari kotak sesudahnya. Beginilah kabar baik tentang bendera <b>merambat mundur</b>, kotak demi kotak, sampai ke titik mulai.</p>

<div data-demo="rl-grid"></div>

<h3>Apa yang terjadi di demo tadi</h3>
<table class="tbl">
  <tr><th>Tahap</th><th>Yang terlihat</th></tr>
  <tr><td>Episode awal</td><td>Robot berkeliaran dan sering jatuh. Kotak di tepi lubang cepat berwarna merah</td></tr>
  <tr><td>Puluhan episode</td><td>Nilai hijau merambat mundur dari bendera; panah mulai menunjuk arah yang masuk akal</td></tr>
  <tr><td>Setelah konvergen</td><td>Nilai di jalur terbaik mendekati 10 → 8 → 6,2 → 4,6 → … dan robot menemukan jalan 8 langkah dengan total +3</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Pelajaran penting dari tepi jurang.</b> Jalan terbaik yang ditemukan robot berada <b>tepat di sebelah lubang</b> — karena itulah jalan terpendek. Tapi selama latihan, ε membuat robot sesekali melangkah acak, dan langkah acak di tepi lubang berakibat fatal. Q-learning mempelajari jalan terbaik <i>seandainya robot tidak pernah salah langkah</i>, bukan jalan teraman untuk robot yang masih belajar.<br><br>
Varian lain bernama <b>SARSA</b> ikut memperhitungkan langkah acaknya sendiri, sehingga cenderung memilih jalan yang menjauhi lubang. Di dunia nyata, inilah alasan robot dan mobil otonom dilatih di <b>simulasi</b> dulu: jatuh ribuan kali di dunia maya itu murah.
</div>

<h3>Mencoba sendiri di Python</h3>
<p>Pustaka <b>gymnasium</b> menyediakan dunia latihan siap pakai, termasuk soal tepi jurang yang sama (di sana lubangnya bernilai −100 dan robot dikembalikan ke awal):</p>
<pre class="code">import gymnasium as gym
import numpy as np

env = gym.make("CliffWalking-v0")    # nomor versi bisa berbeda di pustaka terbaru
Q = np.zeros((env.observation_space.n, env.action_space.n))
alpha, gamma, eps = 0.5, 0.9, 0.1
rng = np.random.default_rng(0)

for episode in range(500):
    s, _ = env.reset()
    selesai = False
    while not selesai:
        if eps > rng.random():
            a = env.action_space.sample()      # eksplorasi
        else:
            a = int(np.argmax(Q[s]))           # eksploitasi
        s2, r, terminated, truncated, _ = env.step(a)
        target = r + (0 if terminated else gamma * np.max(Q[s2]))
        Q[s, a] += alpha * (target - Q[s, a])  # geser ke arah kejutan
        s, selesai = s2, terminated or truncated</pre>

<h3>Batas tabel Q</h3>
<p>Dunia demo punya 28 kotak × 4 aksi = <b>112 angka</b>. Mudah. Tapi bagaimana dengan dunia sungguhan?</p>
<table class="tbl">
  <tr><th>Masalah</th><th>Banyak keadaan</th><th>Tabel Q?</th></tr>
  <tr><td>Robot di demo</td><td>28</td><td class="ok-cell">Muat</td></tr>
  <tr><td>Catur</td><td>Sekitar 10<sup>44</sup> posisi</td><td class="bad-cell">Mustahil</td></tr>
  <tr><td>Go</td><td>Sekitar 10<sup>170</sup> posisi</td><td class="bad-cell">Mustahil</td></tr>
  <tr><td>Game dari gambar layar</td><td>Setiap susunan piksel berbeda</td><td class="bad-cell">Mustahil</td></tr>
</table>
<p>Selain tidak muat, tabel juga tidak bisa <b>menyamaratakan</b>: dua posisi catur yang hampir sama dianggap dua halaman yang sama sekali asing. Jalan keluarnya adalah mengganti tabel dengan <b>neural network</b> — topik pelajaran berikutnya.</p>
`,
          keyPoints: [
            "Tabel Q menyimpan perkiraan 'seberapa bagus aksi ini dari keadaan ini sampai akhir'; kebijakan terbaik = pilih aksi dengan nilai Q tertinggi.",
            "Q baru = Q lama + α × (target − Q lama), dengan target = reward + γ × Q terbaik di keadaan berikutnya.",
            "Keadaan yang belum pernah melihat hadiah tetap belajar dengan meminjam perkiraan keadaan sesudahnya, sehingga nilai merambat mundur.",
            "Q-learning mempelajari jalan terbaik seolah agen tak pernah salah langkah; karena itu saat latihan dengan ε ia bisa sering jatuh di tepi jurang.",
            "SARSA ikut memperhitungkan langkah acaknya sendiri sehingga cenderung memilih jalan yang lebih aman.",
            "Tabel Q tidak muat untuk catur, Go, atau gambar layar, dan tidak bisa menyamaratakan keadaan yang mirip.",
          ],
          practice: [
            { type: "number", q: "Q lama = 2, reward = −1, Q terbaik di keadaan berikutnya = 6, α = 0,5, γ = 0,9. Berapa Q baru?", answer: 3.2, tol: 0.01, hint: "Target = −1 + 0,9 × 6. Lalu Q baru = 2 + 0,5 × (target − 2).", solution: "Target = −1 + 5,4 = 4,4. Q baru = 2 + 0,5 × 2,4 = 3,2." },
            { type: "number", q: "Sebuah dunia kotak berukuran 10 × 10 dengan 4 aksi. Berapa banyak angka dalam tabel Q-nya?", answer: 400, tol: 0.5, hint: "Jumlah keadaan × jumlah aksi.", solution: "100 × 4 = 400 angka." },
          ],
          quiz: [
            {
              q: "Apa yang disimpan dalam satu sel tabel Q?",
              options: [
                "Perkiraan seberapa bagus sebuah aksi dari keadaan tertentu sampai akhir",
                "Jumlah berapa kali robot pernah mengunjungi sebuah kotak selama latihan",
                "Reward yang langsung didapat saat robot melangkah ke kotak tersebut",
                "Peluang robot jatuh ke lubang apabila berada di kotak tersebut",
              ],
              answer: 0,
              explain: "Nilai Q memperhitungkan reward sekarang sekaligus masa depan yang didiskon.",
            },
            {
              q: "Kotak yang belum pernah dilewati robot menuju bendera tetap mendapat nilai positif. Kenapa?",
              options: [
                "Karena targetnya meminjam nilai Q terbaik dari kotak sesudahnya",
                "Karena semua kotak kosong otomatis diberi nilai awal yang positif",
                "Karena robot diberi peta lengkap sebelum latihan dimulai",
                "Karena nilai bendera disalin ke semua kotak pada akhir episode",
              ],
              answer: 0,
              explain: "Kabar baik tentang bendera merambat mundur, kotak demi kotak.",
            },
            {
              q: "Robot yang dilatih Q-learning dengan ε = 20% sering jatuh di tepi jurang saat latihan. Apa penjelasan yang tepat?",
              options: [
                "Jalan terbaiknya memang di tepi jurang, dan langkah acak dari ε di situ berakibat fatal",
                "Q-learning gagal belajar karena reward −10 terlalu kecil dibanding reward +10",
                "Robot sengaja mencari lubang karena nilai Q di tepi jurang selalu paling tinggi",
                "Tabel Q terhapus di setiap episode sehingga robot harus belajar dari awal lagi",
              ],
              answer: 0,
              explain: "Q-learning menilai jalan seolah tak pernah salah langkah; SARSA memperhitungkan eksplorasinya sendiri.",
            },
            {
              q: "Kenapa tabel Q tidak dipakai untuk mengajari AI bermain Go?",
              options: [
                "Banyak posisinya sekitar 10¹⁷⁰, tidak muat, dan tabel tak bisa menyamaratakan posisi yang mirip",
                "Go hanya punya empat aksi sehingga tabel Q terlalu sederhana untuk menangkap strateginya",
                "Go tidak memberikan reward apa pun sehingga nilai Q tidak dapat diperbarui",
                "Tabel Q hanya bisa dipakai untuk robot fisik, bukan untuk permainan papan",
              ],
              answer: 0,
              explain: "Karena itu tabel diganti neural network yang bisa memperkirakan nilai posisi yang belum pernah dilihat.",
            },
          ],
        },
        {
          id: "ai-rl-3",
          title: "Dari Tabel ke Deep RL — AlphaGo, Robot & Cara Chatbot Dilatih",
          duration: "15 menit",
          content: `
<p>Tabel Q bekerja untuk 28 kotak, tapi tidak untuk catur, Go, atau game yang dilihat dari piksel layar. Pelajaran ini menunjukkan bagaimana <b>neural network</b> menggantikan tabel — dan bagaimana ide itu melahirkan AlphaGo, robot yang berjalan, sampai cara ChatGPT dan Claude diajari menjawab dengan baik.</p>

<div data-diagram="timeline" data-events="1992::TD-Gammon main backgammon|2015::DQN belajar 49 game Atari|2016::AlphaGo kalahkan Lee Sedol|2017::AlphaZero belajar tanpa manusia|2019::Menang di Dota 2 &amp; StarCraft|2022::RLHF di balik ChatGPT" data-caption="Tonggak reinforcement learning — dari papan permainan ke asisten AI"></div>

<h3>Fundamental: ganti buku catatan dengan "penaksir"</h3>
<div class="callout">
Tabel Q ibarat buku yang harus punya satu halaman untuk <b>setiap</b> keadaan. Neural network ibarat <b>penaksir berpengalaman</b>: diberi keadaan apa pun — bahkan yang belum pernah dilihat — ia bisa memperkirakan nilai setiap aksi, karena belajar mengenali pola dari keadaan-keadaan yang mirip.<br><br>
Cara belajarnya tetap sama persis dengan pelajaran sebelumnya: hitung target, ukur kejutan, geser sedikit. Bedanya, yang digeser bukan satu sel tabel, melainkan <b>bobot jaringan</b> — memakai gradient descent yang sudah kamu kenal.
</div>

<h3>Dua keluarga besar Deep RL</h3>
<div data-diagram="compare3" data-cols="Berbasis nilai::Menaksir nilai tiap aksi::Contoh: DQN|Berbasis kebijakan::Langsung belajar bertindak::Contoh: REINFORCE|Aktor-kritik::Gabungan nilai &amp; kebijakan::Contoh: PPO, SAC" data-caption="Tiga cara menggabungkan neural network dengan reinforcement learning"></div>

<table class="tbl">
  <tr><th></th><th>Berbasis nilai (mis. DQN)</th><th>Berbasis kebijakan &amp; aktor-kritik (mis. PPO)</th></tr>
  <tr><td><b>Yang dipelajari</b></td><td>"Seberapa bagus aksi ini?"</td><td>"Aksi mana yang sebaiknya dipilih, dan seberapa yakin?"</td></tr>
  <tr><td><b>Cocok untuk</b></td><td>Pilihan aksi sedikit dan terpisah (tombol game)</td><td>Aksi yang banyak atau bernilai kontinu (sudut sendi robot, kata berikutnya)</td></tr>
  <tr><td><b>Kelemahan</b></td><td>Sulit untuk aksi kontinu</td><td>Butuh sangat banyak percobaan</td></tr>
</table>

<h3>AlphaGo dan AlphaZero — belajar dengan melawan diri sendiri</h3>
<table class="tbl">
  <tr><th></th><th>AlphaGo (2016)</th><th>AlphaZero (2017)</th></tr>
  <tr><td><b>Bekal awal</b></td><td>Mempelajari jutaan langkah dari pertandingan pemain manusia</td><td>Hanya aturan permainan</td></tr>
  <tr><td><b>Cara berlatih</b></td><td>Lalu bertanding melawan dirinya sendiri</td><td>Sepenuhnya melawan dirinya sendiri (<i>self-play</i>)</td></tr>
  <tr><td><b>Hasil</b></td><td>Mengalahkan juara dunia Lee Sedol 4–1</td><td>Menguasai Go, catur, dan shogi dengan satu algoritma yang sama</td></tr>
</table>

<div class="callout">
<b>♟️ Kenapa self-play begitu ampuh?</b> Lawan selalu setara: setiap kali agen membaik, lawannya — dirinya sendiri — ikut membaik. Agen tidak dibatasi oleh kebiasaan manusia, sehingga AlphaGo sempat memainkan langkah ke-37 yang awalnya dianggap aneh oleh para ahli, lalu terbukti jenius.
</div>

<h3>Menghubungkan ke chatbot: RLHF</h3>
<p>Di modul berikutnya, pelajaran <b>RLHF &amp; Alignment</b> menjelaskan bagaimana chatbot dilatih agar membantu dan aman. Dengan bekal modul ini, kamu kini bisa melihat bahwa itu <b>masalah RL biasa</b> dengan beberapa bagian yang diganti:</p>
<table class="tbl">
  <tr><th>Istilah RL</th><th>Di robot demo</th><th>Di chatbot</th></tr>
  <tr><td><b>Agen</b></td><td>Robot</td><td>Model bahasa</td></tr>
  <tr><td><b>Keadaan</b></td><td>Posisi kotak</td><td>Pertanyaan dan kata-kata yang sudah ditulis</td></tr>
  <tr><td><b>Aksi</b></td><td>Atas, kanan, bawah, kiri</td><td>Memilih kata berikutnya</td></tr>
  <tr><td><b>Reward</b></td><td>−1, −10, +10 dari aturan dunia</td><td>Skor dari <b>model penilai</b> yang dilatih dari peringkat buatan manusia</td></tr>
  <tr><td><b>Algoritma</b></td><td>Q-learning</td><td>Umumnya keluarga berbasis kebijakan, misalnya PPO</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Reward hacking muncul lagi di sini.</b> Model penilai hanyalah tiruan selera manusia, bukan selera manusia itu sendiri. Chatbot bisa belajar "mengakali" penilainya — misalnya menjawab terlalu panjang atau terlalu memuji — karena itu yang disukai penilai. Karena itu pelatihannya diberi rem agar model tidak menjauh terlalu jauh dari perilaku awalnya.
</div>

<p>Tren terbaru memperluas ide ini: model penalaran dilatih dengan RL pada soal yang jawabannya <b>bisa diperiksa otomatis</b> — soal matematika yang hasilnya bisa dicocokkan, atau kode yang bisa dijalankan dan diuji. Reward-nya bukan lagi selera manusia, melainkan "jawabannya benar atau tidak".</p>

<h3>Kenapa RL tidak dipakai di mana-mana?</h3>
<table class="tbl">
  <tr><th>Tantangan</th><th>Artinya</th></tr>
  <tr><td><b>Rakus percobaan</b></td><td>AlphaZero bermain jutaan pertandingan melawan dirinya sendiri. Dunia nyata jarang memberi kesempatan sebanyak itu</td></tr>
  <tr><td><b>Merancang reward itu sulit</b></td><td>Reward yang sedikit keliru akan dicurangi (reward hacking)</td></tr>
  <tr><td><b>Eksplorasi berbahaya</b></td><td>Robot atau mobil tidak boleh "mencoba acak" di jalan raya → dilatih di simulasi</td></tr>
  <tr><td><b>Simulasi ≠ kenyataan</b></td><td>Robot yang lincah di simulasi bisa canggung di dunia nyata karena gesekan dan cahaya berbeda</td></tr>
  <tr><td><b>Pelatihan tidak stabil</b></td><td>Hasil bisa sangat berbeda hanya karena pengacak awal yang berbeda</td></tr>
</table>

<div class="callout">
<b>💡 Pegangan praktis:</b> kalau kamu punya data berisi jawaban yang benar, pakai <b>supervised learning</b> — jauh lebih murah dan stabil. Pakai RL bila keputusan <b>berurutan</b>, akibatnya <b>tertunda</b>, dan tidak ada yang bisa memberi kunci jawaban. Untuk keputusan satu langkah seperti memilih promo atau judul berita, algoritma <b>bandit</b> dari pelajaran pertama modul ini sering sudah cukup.
</div>
`,
          keyPoints: [
            "Deep RL mengganti tabel Q dengan neural network yang bisa menaksir nilai keadaan yang belum pernah dilihat; cara belajarnya tetap: target, kejutan, geser sedikit.",
            "Berbasis nilai (DQN) menaksir nilai tiap aksi; berbasis kebijakan (PPO) langsung belajar cara bertindak; aktor-kritik menggabungkan keduanya.",
            "AlphaGo belajar dari permainan manusia lalu self-play; AlphaZero hanya diberi aturan dan belajar sepenuhnya lewat self-play.",
            "RLHF adalah masalah RL: agennya model bahasa, aksinya memilih kata, reward-nya dari model penilai hasil peringkat manusia.",
            "Reward hacking juga terjadi pada chatbot, karena model penilai hanya tiruan selera manusia.",
            "RL rakus percobaan, sulit dirancang reward-nya, berbahaya bila bereksplorasi di dunia nyata, dan tidak stabil.",
            "Punya kunci jawaban → supervised; keputusan berurutan dengan akibat tertunda → RL; keputusan satu langkah → bandit.",
          ],
          quiz: [
            {
              q: "Apa keunggulan utama neural network dibanding tabel Q?",
              options: [
                "Bisa menaksir nilai keadaan yang belum pernah dilihat dengan mengenali pola yang mirip",
                "Tidak lagi memerlukan reward sehingga agen bisa belajar tanpa umpan balik apa pun",
                "Selalu menemukan kebijakan terbaik dalam satu episode latihan saja",
                "Tidak memerlukan eksplorasi karena semua aksi sudah dinilai sejak awal",
              ],
              answer: 0,
              explain: "Tabel memperlakukan setiap keadaan sebagai halaman asing; jaringan bisa menyamaratakan.",
            },
            {
              q: "Apa perbedaan AlphaZero dengan AlphaGo versi pertama?",
              options: [
                "AlphaZero hanya diberi aturan dan belajar sepenuhnya dengan melawan dirinya sendiri",
                "AlphaZero mempelajari lebih banyak pertandingan manusia sebelum mulai berlatih",
                "AlphaZero memakai tabel Q raksasa sebagai pengganti neural network",
                "AlphaZero hanya bisa bermain Go, sedangkan AlphaGo menguasai catur dan shogi",
              ],
              answer: 0,
              explain: "Tanpa bekal permainan manusia, ia menguasai Go, catur, dan shogi dengan satu algoritma.",
            },
            {
              q: "Dalam RLHF untuk chatbot, dari mana reward berasal?",
              options: [
                "Dari model penilai yang dilatih memakai peringkat jawaban buatan manusia",
                "Dari jumlah kata dalam jawaban, makin panjang makin tinggi reward-nya",
                "Dari aturan permainan yang ditulis tetap oleh pengembang sejak awal",
                "Dari pengguna yang menilai setiap jawaban secara langsung saat mengobrol",
              ],
              answer: 0,
              explain: "Karena penilainya tiruan selera manusia, reward hacking tetap bisa terjadi.",
            },
            {
              q: "Sebuah toko punya data ribuan transaksi berlabel 'penipuan' atau 'bukan'. Pendekatan mana yang paling masuk akal?",
              options: [
                "Supervised learning, karena kunci jawabannya sudah tersedia",
                "Reinforcement learning, karena penipuan adalah masalah berurutan",
                "Algoritma bandit, karena setiap transaksi adalah pilihan promo",
                "Self-play, agar model melawan dirinya sendiri sebagai penipu",
              ],
              answer: 0,
              explain: "Bila jawaban benar sudah ada, supervised jauh lebih murah dan stabil daripada RL.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 12: AI GENERATIF & LLM ---------------- */
    {
      id: "ai-mahir",
      level: "Mahir",
      title: "AI Generatif & LLM",
      summary: "Cara kerja ChatGPT, AI pembuat gambar, GAN & diffusion lebih dalam, RLHF & alignment, serta AI suara & multimodal.",
      lessons: [
        {
          id: "ai-a-1",
          title: "Bagaimana ChatGPT (LLM) Bekerja",
          duration: "12 menit",
          content: `
<p><b>LLM (Large Language Model)</b> seperti ChatGPT adalah neural network raksasa yang dilatih membaca sebagian besar teks di internet. Inti kerjanya mengejutkan sederhana:</p>

<div data-diagram="pipeline" data-stages="Teks masuk::kalimat darimu|Tokenisasi::dipotong jadi kepingan|Embedding::tiap kepingan jadi angka|Prediksi::tebak kepingan berikutnya" data-caption="LLM tidak 'memahami' — ia menebak kelanjutan paling mungkin, berulang kali"></div>


<div class="callout">
<b>Tugas utamanya:</b> menebak <b>kata berikutnya</b> yang paling masuk akal. "Langit berwarna ___" → "biru". Dengan melakukan ini berulang, ia menyusun kalimat, paragraf, bahkan kode program.
</div>

<div data-demo="next-word"></div>

<h3>Tiga konsep kunci</h3>
<ul>
  <li><b>Token</b> — potongan kata. "belajar" bisa jadi 1-2 token. LLM berpikir per token, bukan per huruf.</li>
  <li><b>Transformer</b> — arsitektur (ditemukan 2017) yang membuat LLM bisa fokus pada kata-kata penting dalam kalimat lewat mekanisme <b>attention</b>.</li>
  <li><b>Parameter</b> — "bobot" yang dipelajari. GPT modern punya ratusan miliar parameter.</li>
</ul>

<div class="callout warn">
<b>Halusinasi:</b> Karena LLM menebak teks yang "terdengar benar", ia kadang mengarang fakta dengan percaya diri. Selalu verifikasi info penting. LLM bukan database fakta, melainkan mesin pola bahasa.
</div>
`,
          keyPoints: [
            "LLM pada dasarnya menebak token (kata) berikutnya.",
            "Arsitektur Transformer + attention adalah kunci kehebatannya.",
            "LLM bisa berhalusinasi — selalu verifikasi fakta penting.",
          ],
          quiz: [
            {
              q: "Apa tugas inti sebuah LLM seperti ChatGPT?",
              options: [
                "Menebak token berikutnya yang paling masuk akal, berulang kali",
                "Mencari jawaban di internet lalu merangkumnya untuk pengguna",
                "Mencocokkan pertanyaan dengan basis data jawaban yang tersimpan",
                "Memahami maksud pengguna lalu menalar seperti manusia",
              ],
              answer: 0,
              explain:
                "LLM dilatih memprediksi token berikutnya; dari sinilah kemampuannya muncul.",
            },
            {
              q: "Apa itu 'halusinasi' pada LLM?",
              options: [
                "Model mengarang informasi yang terdengar meyakinkan padahal keliru",
                "Model menolak menjawab karena pertanyaannya dianggap berbahaya",
                "Model mengulang jawaban yang sama persis berkali-kali",
                "Model berhenti di tengah kalimat karena kehabisan token",
              ],
              answer: 0,
              explain:
                "LLM bisa menghasilkan informasi salah dengan meyakinkan; perlu verifikasi.",
            },
          ],
        },
        {
          id: "ai-app-1",
          title: "AI Generatif Gambar (Diffusion Models)",
          duration: "12 menit",
          content: `
<p>AI generatif tidak hanya untuk teks. Alat seperti <b>DALL·E, Midjourney, & Stable Diffusion</b> membuat gambar dari deskripsi teks. Rahasianya: <b>diffusion model</b>.</p>

<div data-diagram="pipeline" data-stages="Noise murni::acak total|Tebak noise::model menandai bagian acak|Hapus sedikit::gambar mulai terlihat|Ulangi 20-50x::sampai jernih" data-caption="Diffusion tidak melukis dari nol — ia menghapus keacakan sedikit demi sedikit"></div>


<h3>Cara kerja (intuisi)</h3>
<p>Bayangkan sebuah foto yang perlahan ditutupi "bintik-bintik" (noise) sampai jadi acak total. Diffusion model belajar melakukan <b>kebalikannya</b>:</p>
<ol>
  <li>Mulai dari <b>noise acak</b> (seperti layar TV rusak).</li>
  <li>Model <b>menghapus noise sedikit demi sedikit</b> lewat banyak langkah.</li>
  <li>Tiap langkah <b>diarahkan oleh teks prompt</b>-mu (mis. "kucing memakai topi").</li>
  <li>Setelah puluhan langkah, muncul gambar yang jelas & sesuai deskripsi.</li>
</ol>

<div class="callout">
<b>Analogi:</b> seperti pematung yang "menghapus" bagian tak perlu sampai patung muncul — tapi di sini yang dihapus adalah <b>noise</b>, dan panduannya adalah <b>kata-katamu</b>.
</div>

<h3>💥 Dampak</h3>
<ul>
  <li>👍 Alat kreatif dahsyat: desain, ilustrasi, prototipe cepat.</li>
  <li>👎 Kekhawatiran nyata: <b>deepfake</b>, hak cipta (dilatih dari karya orang), dan dampak pada pekerjaan kreatif.</li>
</ul>

<div data-demo="diffusion"></div>
`,
          keyPoints: [
            "Diffusion model membuat gambar dengan menghapus noise acak sedikit demi sedikit, diarahkan oleh teks prompt.",
            "Mulai dari noise → denoise bertahap → gambar jelas sesuai deskripsi.",
            "Contoh: DALL·E, Midjourney, Stable Diffusion.",
            "Dampak: alat kreatif kuat, tapi memunculkan isu deepfake, hak cipta, & pekerjaan.",
          ],
          quiz: [
            {
              q: "Bagaimana diffusion model membuat gambar?",
              options: [
                "Mulai dari noise acak lalu menghapusnya bertahap, diarahkan teks",
                "Menggabungkan potongan gambar yang sudah ada di data latihnya",
                "Menggambar garis demi garis meniru cara manusia melukis",
                "Mencari gambar termirip di internet lalu menyuntingnya sedikit",
              ],
              answer: 0,
              explain:
                "Diffusion mengubah noise menjadi gambar lewat proses denoising bertahap terpandu.",
            },
            {
              q: "Kekhawatiran utama AI generatif gambar?",
              options: [
                "Deepfake, sengketa hak cipta, dan dampak pada pekerja kreatif",
                "Ukuran berkas gambar yang dihasilkan terlalu besar untuk disimpan",
                "Proses pembuatannya terlalu lambat untuk dipakai sehari-hari",
                "Hasilnya selalu bisa dikenali sebagai buatan mesin oleh siapa pun",
              ],
              answer: 0,
              explain: "Kemampuannya menimbulkan isu etika: deepfake, hak cipta, & lapangan kerja.",
            },
          ],
        },
        {
          id: "ai-ars-6",
          title: "Gen AI Mendalam: GAN, Diffusion & LLM",
          duration: "14 menit",
          content: `
<p>Kamu sudah mengenal LLM dan AI pembuat gambar satu per satu. Sekarang saatnya membandingkan <b>tiga keluarga besar</b> AI generatif, dan trik yang membuatnya bisa dijalankan.</p>

<h3>Tiga cara AI "mencipta"</h3>
<table class="tbl">
  <tr><th>Keluarga</th><th>Cara kerja</th><th>Dipakai untuk</th></tr>
  <tr><td><b>Autoregressive</b> (LLM)</td><td>Menebak <b>token berikutnya</b>, berulang</td><td>Teks, kode</td></tr>
  <tr><td><b>Diffusion</b></td><td>Menghapus <b>noise</b> bertahap sampai muncul gambar</td><td>Gambar, video, audio</td></tr>
  <tr><td><b>GAN</b></td><td><b>Dua model beradu</b>: pemalsu vs pendeteksi</td><td>Gambar (lebih tua, kini banyak digantikan diffusion)</td></tr>
</table>

<h3>GAN — kucing-kucingan pemalsu &amp; polisi</h3>
<div class="callout">
<b>GAN</b> (Generative Adversarial Network) melatih <b>dua model sekaligus</b> yang saling bermusuhan:
<ul>
  <li><b>Generator</b> = <b>pemalsu uang</b> — berusaha membuat gambar palsu yang meyakinkan.</li>
  <li><b>Discriminator</b> = <b>polisi</b> — berusaha membedakan mana asli, mana palsu.</li>
</ul>
Keduanya berlatih bersamaan: pemalsu makin pintar memalsukan, polisi makin jeli mendeteksi. Setelah ribuan putaran, <b>hasil pemalsu jadi sangat meyakinkan</b>.
</div>
<p><b>Kelemahannya:</b> pelatihannya <b>tidak stabil</b> (sering gagal menyatu), sehingga untuk gambar kini banyak digantikan <b>diffusion</b> yang lebih stabil &amp; berkualitas.</p>

<h3>Mengendalikan keluaran LLM</h3>
<table class="tbl">
  <tr><th>Pengaturan</th><th>Fungsinya</th></tr>
  <tr><td><b>Temperature</b></td><td>Rendah = aman &amp; konsisten; tinggi = kreatif &amp; berisiko ngawur</td></tr>
  <tr><td><b>Top-p</b> (nucleus)</td><td>Hanya memilih dari kandidat kata teratas yang jumlah peluangnya mencapai p</td></tr>
  <tr><td><b>Max tokens</b></td><td>Batas panjang jawaban</td></tr>
</table>

<h3>Trik agar model raksasa bisa dijalankan</h3>
<ul>
  <li><b>Quantization</b> — menyimpan angka model dengan <b>presisi lebih rendah</b> (mis. dari 16-bit jadi 4-bit). Ukuran menyusut drastis, kualitas turun sedikit. Inilah yang membuat model besar bisa jalan di laptop.</li>
  <li><b>Distillation</b> — model besar (<i>guru</i>) "mengajari" model kecil (<i>murid</i>). Murid jadi jauh lebih ringan dengan kemampuan mendekati gurunya.</li>
  <li><b>Mixture of Experts (MoE)</b> — model dibagi jadi banyak "ahli"; tiap permintaan <b>hanya mengaktifkan sebagian</b>. Total parameter besar, tapi biaya per permintaan tetap wajar.</li>
</ul>
`,
          keyPoints: [
            "Tiga keluarga gen AI: autoregressive (LLM, tebak token berikutnya), diffusion (hapus noise), GAN (dua model beradu).",
            "GAN = generator (pemalsu) vs discriminator (polisi) yang saling melatih; pelatihannya tidak stabil.",
            "Keluaran LLM diatur temperature (kreativitas), top-p (pilihan kandidat), max tokens (panjang).",
            "Quantization menurunkan presisi angka agar model muat di perangkat kecil.",
            "Distillation: model besar mengajari model kecil. MoE: hanya sebagian 'ahli' aktif tiap permintaan.",
          ],
          practice: [
            { type: "choice", q: "Pada GAN, apa peran 'discriminator'?", options: ["Membuat gambar palsu", "Membedakan mana gambar asli & mana palsu", "Menyimpan data", "Mempercepat training"], answer: 1, hint: "Perannya seperti polisi.", solution: "Discriminator menilai keaslian, memaksa generator terus membaik." },
            { type: "choice", q: "Kamu ingin menjalankan model besar di laptop biasa. Teknik yang paling membantu?", options: ["Menambah parameter", "Quantization (menurunkan presisi angka)", "Menaikkan temperature", "Memperpanjang prompt"], answer: 1, hint: "Bagaimana mengecilkan ukuran model?", solution: "Quantization memangkas ukuran memori dengan penurunan kualitas kecil." },
          ],
          quiz: [
            {
              q: "Apa inti cara kerja GAN?",
              options: [
                "Dua model beradu: generator memalsukan, discriminator mendeteksi",
                "Satu model besar dilatih dua kali dengan data yang berbeda",
                "Model menghapus noise secara bertahap sampai gambar muncul",
                "Model menyalin gaya satu gambar ke isi gambar lainnya",
              ],
              answer: 0,
              explain:
                "Persaingan generator vs discriminator membuat hasil palsu makin meyakinkan.",
            },
            {
              q: "Apa itu Mixture of Experts (MoE)?",
              options: [
                "Model dibagi jadi banyak ahli; tiap permintaan hanya mengaktifkan sebagian",
                "Beberapa model berbeda dijalankan lalu jawabannya dipilih yang terbaik",
                "Model besar dimampatkan menjadi model kecil yang lebih cepat",
                "Model dilatih oleh beberapa tim ahli dari bidang yang berbeda",
              ],
              answer: 0,
              explain:
                "MoE memberi kapasitas besar tanpa mengaktifkan seluruh parameter tiap permintaan.",
            },
          ],
        },
        {
          id: "ai-app-2",
          title: "RLHF & Alignment (Membuat AI Membantu & Aman)",
          duration: "12 menit",
          content: `
<p>Ingat: LLM mentah hanya <b>menebak kata berikutnya</b> dari internet. Itu <b>tidak otomatis</b> membuatnya membantu, sopan, atau aman. Bagaimana ChatGPT/Claude jadi asisten yang baik? Lewat <b>RLHF</b> dan <b>alignment</b>.</p>

<div data-diagram="cycle" data-steps="Model menjawab|Manusia memberi nilai|Model penilai dilatih|Model utama diperbaiki" data-center="RLHF" data-caption="RLHF: manusia tidak menulis jawabannya, hanya menilai mana yang lebih baik"></div>


<h3>RLHF (Reinforcement Learning from Human Feedback)</h3>
<p>Ingat modul <b>Reinforcement Learning</b>: agen memilih aksi dan mengejar reward. Di RLHF, agennya adalah model bahasa, aksinya memilih kata, dan reward-nya berasal dari penilaian manusia:</p>
<ol>
  <li>Model menghasilkan beberapa jawaban.</li>
  <li><b>Manusia memberi peringkat</b>: mana jawaban yang lebih baik/aman.</li>
  <li>Peringkat itu melatih sebuah <b>"model penilai" (reward model)</b>.</li>
  <li>LLM lalu <b>dilatih ulang</b> untuk memaksimalkan skor penilai → makin membantu & selaras.</li>
</ol>

<div class="callout">
<b>Alignment</b> = menyelaraskan perilaku AI dengan <b>nilai & niat manusia</b>. Ini bukan soal "pintar", tapi soal "berperilaku benar & aman".
</div>

<p><b>Constitutional AI</b> (pendekatan Anthropic) menambahkan seperangkat prinsip/"konstitusi" agar AI bisa mengoreksi diri menuju jawaban yang lebih aman.</p>

<h3>💥 Dampak</h3>
<ul>
  <li>Alignment adalah inti <b>keamanan AI</b> — makin kuat AI, makin penting.</li>
  <li>Belum sempurna: masih ada <b>jailbreak</b> (mengakali aturan) & kadang <b>terlalu menolak</b> hal wajar.</li>
</ul>
`,
          keyPoints: [
            "LLM mentah tidak otomatis membantu/aman; RLHF & alignment memperbaikinya.",
            "RLHF: manusia memberi peringkat jawaban → melatih reward model → LLM dilatih memaksimalkannya.",
            "Alignment = menyelaraskan perilaku AI dengan nilai & niat manusia (aman & benar).",
            "Dampak: inti keamanan AI; belum sempurna (jailbreak, penolakan berlebihan).",
          ],
          quiz: [
            {
              q: "Apa inti dari RLHF?",
              options: [
                "Memakai peringkat jawaban dari manusia untuk melatih model",
                "Melatih model memakai data yang seluruhnya dibuat oleh manusia",
                "Membiarkan model memperbaiki dirinya sendiri tanpa campur tangan",
                "Menyaring jawaban model dengan daftar kata terlarang",
              ],
              answer: 0,
              explain:
                "RLHF memakai umpan balik manusia untuk menyelaraskan perilaku model.",
            },
            {
              q: "Apa yang dimaksud 'alignment' pada AI?",
              options: [
                "Menyelaraskan perilaku AI dengan nilai dan niat manusia",
                "Menyamakan hasil beberapa model agar jawabannya konsisten",
                "Menyesuaikan ukuran model agar muat di perangkat pengguna",
                "Menyelaraskan waktu pelatihan dengan anggaran yang tersedia",
              ],
              answer: 0,
              explain:
                "Alignment memastikan AI berperilaku sesuai maksud & nilai manusia.",
            },
          ],
        },
        {
          id: "ai-pl-1",
          title: "AI Suara & Multimodal",
          duration: "12 menit",
          content: `
<p>Kita sudah membahas AI untuk <b>teks</b> (NLP), <b>gambar</b> (vision &amp; diffusion). Satu indra lagi yang belum: <b>suara</b>.</p>

<h3>Fundamental: suara juga jadi angka</h3>
<div class="callout">
Suara adalah <b>getaran udara</b>. Mikrofon mengubahnya jadi gelombang, lalu komputer mencatatnya sebagai <b>deretan angka</b> (ribuan sampel per detik). Sering diubah lagi jadi <b>spektrogram</b> — semacam "foto" suara yang menunjukkan frekuensi dari waktu ke waktu. Setelah jadi gambar, AI bisa memprosesnya seperti memproses gambar biasa.
</div>

<h3>Tiga kemampuan utama</h3>
<table class="tbl">
  <tr><th>Kemampuan</th><th>Fungsi</th><th>Contoh pemakaian</th></tr>
  <tr><td><b>ASR</b> (Speech-to-Text)</td><td>Suara → teks</td><td>Transkrip rapat, subtitle otomatis, perintah suara</td></tr>
  <tr><td><b>TTS</b> (Text-to-Speech)</td><td>Teks → suara</td><td>Pembaca artikel, asisten suara, audiobook</td></tr>
  <tr><td><b>Voice cloning</b></td><td>Meniru suara seseorang</td><td>Dubbing, pemulihan suara penyandang disabilitas</td></tr>
</table>

<h3>Multimodal: satu model, banyak indra</h3>
<p>Model <b>multimodal</b> memahami teks, gambar, <b>dan</b> suara sekaligus. Kamu bisa memperlihatkan foto sambil bertanya lewat suara, dan ia menjawab dengan teks — mendekati cara manusia memakai banyak indra bersamaan.</p>

<div class="callout warn">
<b>⚠️ Bahaya nyata: penipuan suara.</b> Voice cloning kini butuh sampel suara sangat singkat. Modus yang marak: penipu meniru suara <b>anggota keluarga</b> lalu menelepon meminta uang darurat.
<br><br><b>Cara melindungi diri:</b>
<ul>
  <li>Sepakati <b>kata sandi keluarga</b> untuk situasi darurat.</li>
  <li><b>Tutup telepon, lalu telepon balik</b> ke nomor yang kamu simpan sendiri.</li>
  <li>Curigai permintaan uang yang <b>mendesak &amp; rahasia</b> — itu pola khas penipuan.</li>
</ul>
</div>
`,
          keyPoints: [
            "Suara diubah jadi deretan angka, lalu sering jadi spektrogram sehingga bisa diproses seperti gambar.",
            "Tiga kemampuan: ASR (suara→teks), TTS (teks→suara), voice cloning (meniru suara).",
            "Model multimodal memahami teks, gambar, & suara sekaligus.",
            "Bahaya: penipuan suara tiruan; lindungi diri dengan kata sandi keluarga & menelepon balik ke nomor tersimpan.",
          ],
          quiz: [
            {
              q: "Apa itu ASR dalam AI suara?",
              options: [
                "Mengubah suara menjadi teks yang bisa dibaca dan dicari",
                "Mengubah teks menjadi suara yang terdengar seperti manusia",
                "Meniru suara seseorang dari contoh rekaman yang pendek",
                "Menyaring suara latar agar rekaman terdengar lebih jernih",
              ],
              answer: 0,
              explain: "ASR = Automatic Speech Recognition: suara → teks.",
            },
            {
              q: "Cara paling aman menghadapi telepon 'keluarga' yang meminta uang mendesak?",
              options: [
                "Tutup teleponnya, lalu telepon balik ke nomor yang kamu simpan",
                "Minta penelepon menyebutkan data pribadi untuk membuktikan diri",
                "Rekam percakapannya lalu bandingkan dengan suara aslinya",
                "Kirim uang lebih dulu, baru dipastikan setelah keadaan aman",
              ],
              answer: 0,
              explain:
                "Suara bisa ditiru AI; verifikasi lewat kanal yang kamu kendalikan sendiri.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 13: MEMBANGUN APLIKASI AI ---------------- */
    {
      id: "ai-lanjutan",
      level: "Lanjutan",
      title: "Membangun Aplikasi AI",
      summary: "Prompt engineering, API & RAG, vector database, memilih prompting/RAG/fine-tuning, dan multi-agent.",
      lessons: [
        {
          id: "ai-a-2",
          title: "Prompt Engineering: Seni Bertanya",
          duration: "11 menit",
          content: `
<p><b>Prompt</b> adalah instruksi/pertanyaan yang kamu berikan ke AI. Kualitas jawaban sangat bergantung pada kualitas prompt — ini keterampilan yang bisa dilatih.</p>

<div data-diagram="flow" data-steps="Beri Peran|Konteks|Tugas Jelas|Format Keluaran" data-caption="Resep prompt yang baik"></div>


<h3>Resep prompt yang baik</h3>
<ol>
  <li><b>Beri peran</b> — "Kamu adalah guru fisika SMA..."</li>
  <li><b>Konteks</b> — jelaskan latar & untuk siapa.</li>
  <li><b>Tugas jelas</b> — spesifik apa yang diminta.</li>
  <li><b>Format keluaran</b> — "buat dalam 5 poin", "tabel", "bahasa sederhana".</li>
  <li><b>Contoh</b> (opsional) — beri 1-2 contoh hasil yang diinginkan.</li>
</ol>

<div class="callout">
<b>Buruk:</b> "Jelaskan tentang ekonomi."<br>
<b>Baik:</b> "Kamu guru ekonomi. Jelaskan inflasi untuk siswa SMP dalam 4 poin sederhana dengan satu analogi sehari-hari."
</div>

<h3>Teknik lanjutan</h3>
<ul>
  <li><b>Zero-shot</b> — langsung minta tanpa contoh.</li>
  <li><b>Few-shot</b> — beri beberapa contoh dulu agar AI meniru polanya.</li>
  <li><b>Chain-of-thought</b> — minta AI "berpikir langkah demi langkah" untuk soal logika/matematika.</li>
</ul>
`,
          keyPoints: [
            "Prompt jelas + spesifik = jawaban jauh lebih baik.",
            "Beri peran, konteks, tugas, dan format keluaran.",
            "Few-shot (beri contoh) & chain-of-thought (minta berpikir bertahap) meningkatkan hasil.",
          ],
          quiz: [
            {
              q: "Manakah prompt yang lebih baik?",
              options: [
                "'Kamu editor. Ringkas teks ini jadi 3 poin untuk pembaca pemula'",
                "'Tolong ringkas teks berikut ini dengan sebaik-baiknya ya, terima kasih'",
                "'Ringkas teks di bawah ini secara singkat, padat, dan jelas sekali'",
                "'Buatkan ringkasan yang bagus, menarik, dan enak dibaca semua orang'",
              ],
              answer: 0,
              explain:
                "Prompt baik punya peran, tugas jelas, dan format keluaran.",
            },
            {
              q: "Teknik meminta AI 'berpikir langkah demi langkah' disebut?",
              options: ["Zero-shot", "Few-shot", "Chain-of-thought", "Fine-tuning"],
              answer: 2,
              explain:
                "Chain-of-thought membantu AI memecah masalah logis bertahap.",
            },
          ],
        },
        {
          id: "ai-a-3",
          title: "Membangun Aplikasi AI (API & RAG)",
          duration: "12 menit",
          content: `
<p>Kamu tidak perlu melatih model sendiri untuk membuat aplikasi AI. Cukup pakai model yang sudah ada lewat <b>API</b>.</p>

<div data-diagram="pipeline" data-stages="Pertanyaan::dari pengguna|Cari dokumen::yang paling relevan|Sisipkan ke prompt::sebagai bahan bacaan|Model menjawab::berdasar dokumen itu" data-caption="Alur RAG: model diberi bahan bacaan dulu, baru diminta menjawab"></div>


<h3>API = jembatan ke AI</h3>
<p><b>API</b> (Application Programming Interface) memungkinkan aplikasimu mengirim prompt ke model AI (mis. Claude/GPT) dan menerima jawaban, lewat kode. Kamu fokus membangun produk, penyedia mengurus modelnya.</p>

<pre class="code">// Contoh alur sederhana (pseudo-code)
jawaban = panggilAI({
  model: "claude-opus-4-8",
  prompt: "Ringkas artikel ini: " + teksArtikel
});
tampilkan(jawaban);</pre>

<h3>RAG: memberi AI "buku catatan"</h3>
<p><b>RAG (Retrieval-Augmented Generation)</b> menggabungkan LLM dengan sumber data milikmu sendiri. Alurnya:</p>
<ol>
  <li>Pertanyaan user masuk.</li>
  <li>Sistem mencari dokumen relevan dari database-mu.</li>
  <li>Dokumen itu diselipkan ke prompt sebagai konteks.</li>
  <li>LLM menjawab berdasarkan dokumen tersebut — lebih akurat & mengurangi halusinasi.</li>
</ol>

<div class="callout">
<b>Contoh nyata:</b> Chatbot layanan pelanggan yang menjawab berdasarkan buku panduan perusahaan, bukan tebakan umum.
</div>
`,
          keyPoints: [
            "API memungkinkan aplikasimu memakai model AI tanpa melatihnya sendiri.",
            "RAG = mencari dokumen relevan lalu menyelipkannya ke prompt.",
            "RAG membuat jawaban lebih akurat & sesuai data milikmu.",
          ],
          quiz: [
            {
              q: "Apa fungsi API dalam aplikasi AI?",
              options: [
                "Jembatan agar aplikasimu bisa memakai model AI lewat kode",
                "Tempat menyimpan model AI di dalam komputer penggunanya",
                "Program yang melatih model AI memakai data milikmu sendiri",
                "Antarmuka grafis untuk mengobrol dengan model bahasa",
              ],
              answer: 0,
              explain:
                "API menghubungkan aplikasimu dengan model AI yang sudah ada.",
            },
            {
              q: "Tujuan utama RAG adalah?",
              options: [
                "Menjawab berdasarkan dokumen milikmu agar lebih akurat",
                "Melatih ulang model memakai seluruh dokumen perusahaan",
                "Mempercepat jawaban dengan menyimpan hasil yang sering diminta",
                "Menerjemahkan dokumen ke bahasa yang dipahami model",
              ],
              answer: 0,
              explain:
                "RAG menyuntikkan konteks relevan sehingga jawaban akurat & mengurangi halusinasi.",
            },
          ],
        },
        {
          id: "ai-adv-2",
          title: "Vector Database — Infrastruktur RAG",
          duration: "11 menit",
          content: `
<p>Di pelajaran <b>Membangun Aplikasi AI</b> kamu belajar RAG mencari dokumen lewat <b>kemiripan vektor</b>. Untuk jutaan dokumen, pencarian itu butuh mesin khusus: <b>vector database</b>.</p>

<div data-diagram="pipeline" data-stages="Dokumen::dipotong kecil-kecil|Embedding::tiap potongan jadi vektor|Disimpan::di vector database|Dicari::yang paling mirip pertanyaan" data-caption="Vector database mencari berdasar kemiripan makna, bukan kecocokan kata"></div>


<h3>Apa yang dilakukannya?</h3>
<ul>
  <li>Menyimpan <b>embedding</b> (vektor) dari ribuan/jutaan potongan teks.</li>
  <li>Mencari vektor <b>paling mirip</b> dengan pertanyaan secara <b>sangat cepat</b> (pencarian tetangga terdekat / ANN).</li>
</ul>

<div class="callout">
<b>Analogi:</b> vector database ibarat "perpustakaan yang menata buku berdasarkan MAKNA, bukan abjad" — sehingga saat kamu bertanya, ia langsung menuju rak yang paling relevan.
</div>

<h3>Pilihan populer</h3>
<table class="tbl">
  <tr><th>Nama</th><th>Catatan</th></tr>
  <tr><td><b>Pinecone</b></td><td>Layanan cloud terkelola, mudah dipakai</td></tr>
  <tr><td><b>Chroma</b></td><td>Ringan, cocok untuk mulai / lokal</td></tr>
  <tr><td><b>Weaviate / Qdrant / Milvus</b></td><td>Open-source, skala besar</td></tr>
  <tr><td><b>FAISS</b></td><td>Pustaka pencarian vektor dari Meta (bukan DB penuh)</td></tr>
</table>

<div class="callout">
<b>💥 Dampak:</b> Vector database adalah <b>tulang punggung RAG produksi</b>. Tanpanya, pencarian semantik pada data besar akan sangat lambat. Ia mengubah demo RAG kecil menjadi sistem nyata berskala jutaan dokumen.
</div>
`,
          keyPoints: [
            "Vector database menyimpan embedding & mencari vektor paling mirip dengan sangat cepat (ANN).",
            "Ia menata data berdasarkan makna, bukan abjad — inti pencarian semantik.",
            "Pilihan: Pinecone, Chroma, Weaviate, Qdrant, Milvus, FAISS.",
            "Dampak: tulang punggung RAG produksi berskala besar.",
          ],
          quiz: [
            {
              q: "Fungsi utama vector database?",
              options: [
                "Menyimpan embedding dan mencari vektor termirip dengan cepat",
                "Menyimpan dokumen asli dalam bentuk teks agar mudah dibaca ulang",
                "Mempercepat pelatihan model dengan menyimpan hasil antaranya",
                "Mengurutkan dokumen berdasarkan tanggal pembuatannya",
              ],
              answer: 0,
              explain:
                "Vector DB menyimpan & mencari vektor kemiripan makna secara efisien.",
            },
            {
              q: "Mengapa vector database penting untuk RAG produksi?",
              options: [
                "Memungkinkan pencarian berdasar makna pada data berskala besar",
                "Mengurangi biaya pemanggilan API karena jawaban ikut disimpan",
                "Menjamin jawaban model selalu benar karena sumbernya terverifikasi",
                "Menghapus dokumen lama secara otomatis agar tidak menumpuk",
              ],
              answer: 0,
              explain:
                "Ia menjaga pencarian tetap cepat saat dokumen berjumlah jutaan.",
            },
          ],
        },
        {
          id: "ai-adv-3",
          title: "Fine-tuning vs RAG vs Prompting",
          duration: "12 menit",
          content: `
<p>Ada tiga cara "menyesuaikan" LLM agar cocok dengan kebutuhanmu. Memilih yang tepat menghemat banyak biaya & usaha.</p>

<div data-diagram="compare3" data-cols="Prompting::ubah cara bertanya::termurah, coba ini dulu|RAG::beri bahan bacaan::untuk data yang berubah|Fine-tuning::latih ulang model::untuk gaya &amp; format tetap" data-caption="Naik tingkat hanya kalau tingkat sebelumnya benar-benar tidak cukup"></div>


<table class="tbl">
  <tr><th>Cara</th><th>Apa itu</th><th>Paling cocok untuk</th></tr>
  <tr><td><b>Prompting</b></td><td>Merancang instruksi yang baik (termasuk few-shot)</td><td>Kebanyakan kasus; mulai dari sini — termurah & tercepat</td></tr>
  <tr><td><b>RAG</b></td><td>Menyelipkan dokumen relevan ke prompt</td><td>Menjawab dari <b>pengetahuan/dokumen</b> milikmu yang sering berubah</td></tr>
  <tr><td><b>Fine-tuning</b></td><td>Melatih ulang model dengan datamu agar mengubah "gaya/perilaku"</td><td>Mengubah <b>gaya/format</b> keluaran secara konsisten, atau tugas sangat khusus</td></tr>
</table>

<div class="callout">
<b>Kunci memilih:</b>
<ul>
  <li>Butuh AI tahu <b>fakta/dokumen spesifik</b>? → <b>RAG</b> (bukan fine-tuning).</li>
  <li>Butuh AI selalu menjawab dengan <b>format/gaya khusus</b>? → <b>Fine-tuning</b>.</li>
  <li>Ragu? → <b>Mulai dari prompting</b>. Sering itu sudah cukup.</li>
</ul>
</div>

<div class="callout warn">
<b>Salah kaprah umum:</b> banyak orang buru-buru fine-tuning untuk "mengajari fakta baru". Itu <b>mahal & rapuh</b> (fakta berubah, model harus dilatih ulang). Untuk pengetahuan yang berubah, <b>RAG</b> hampir selalu pilihan lebih tepat.
</div>
`,
          keyPoints: [
            "Tiga cara menyesuaikan LLM: prompting (termurah), RAG (pengetahuan/dokumen), fine-tuning (gaya/perilaku).",
            "Untuk fakta/dokumen yang berubah → RAG, bukan fine-tuning.",
            "Untuk format/gaya konsisten atau tugas sangat khusus → fine-tuning.",
            "Mulai selalu dari prompting; sering sudah cukup.",
          ],
          quiz: [
            {
              q: "Butuh AI menjawab berdasarkan dokumen internal yang sering berubah. Pilihan terbaik?",
              options: ["Fine-tuning", "RAG", "Mengganti bahasa", "Menambah parameter"],
              answer: 1,
              explain:
                "RAG menyodorkan dokumen terbaru saat dibutuhkan — cocok untuk pengetahuan yang berubah.",
            },
            {
              q: "Kesalahan umum dalam menyesuaikan LLM?",
              options: [
                "Buru-buru fine-tuning untuk mengajarkan fakta yang sering berubah",
                "Memakai prompt yang terlalu panjang sehingga boros biaya token",
                "Memilih model open-source padahal model berbayar lebih akurat",
                "Menyimpan dokumen dalam vector database alih-alih berkas biasa",
              ],
              answer: 0,
              explain:
                "Fine-tuning untuk fakta berubah tidak efisien; RAG lebih tepat.",
            },
          ],
        },
        {
          id: "ai-adv-1",
          title: "Multi-Agent & CrewAI",
          duration: "12 menit",
          content: `
<p>Sejauh ini kita memakai <b>satu</b> AI. Tapi tugas rumit sering lebih baik ditangani <b>beberapa agen AI yang bekerja sama</b> — seperti sebuah tim.</p>

<div data-diagram="network" data-center="Satu tugas besar" data-nodes="Agen Peneliti|Agen Penulis|Agen Pemeriksa|Agen Perangkum" data-caption="Multi-agent: satu tugas besar dipecah ke beberapa agen dengan peran berbeda"></div>


<h3>Ide multi-agent</h3>
<p>Alih-alih satu AI melakukan semuanya, kamu beri <b>peran</b> berbeda ke beberapa agen, lalu mereka berkolaborasi. Contoh membuat artikel:</p>
<ul>
  <li><b>Agen Peneliti</b> — mengumpulkan fakta & sumber.</li>
  <li><b>Agen Penulis</b> — menyusun draf dari hasil riset.</li>
  <li><b>Agen Editor</b> — memeriksa & memperbaiki.</li>
</ul>

<h3>CrewAI</h3>
<div class="callout">
<b>CrewAI</b> adalah framework populer untuk merakit "kru" agen: kamu definisikan tiap agen (peran, tujuan, alat), lalu tugas-tugas dan alurnya. CrewAI mengorkestrasi mereka bekerja bersama secara otomatis. Alternatif: <b>AutoGen</b>, <b>LangGraph</b>, <b>Anthropic Agent SDK</b>.
</div>

<pre class="code">// Gambaran konsep (pseudo-code gaya CrewAI)
peneliti = Agent(peran="Peneliti", tujuan="Cari fakta akurat", alat=[pencarian]);
penulis  = Agent(peran="Penulis",  tujuan="Tulis artikel jelas");
editor   = Agent(peran="Editor",   tujuan="Perbaiki & rapikan");

crew = Crew(agen=[peneliti, penulis, editor], tugas=[riset, tulis, sunting]);
hasil = crew.jalankan("Buat artikel tentang RAG");</pre>

<div class="callout warn">
<b>Kapan dipakai?</b> Multi-agent kuat untuk tugas multi-langkah yang bisa dibagi peran. Tapi ia menambah biaya (banyak panggilan AI) & kompleksitas — untuk tugas sederhana, satu agen sudah cukup.
</div>
`,
          keyPoints: [
            "Sistem multi-agent memberi peran berbeda ke beberapa AI yang berkolaborasi (mis. Peneliti, Penulis, Editor).",
            "CrewAI adalah framework untuk merakit & mengorkestrasi 'kru' agen (alternatif: AutoGen, LangGraph, Agent SDK).",
            "Cocok untuk tugas multi-langkah yang bisa dibagi peran; menambah biaya & kompleksitas untuk hal sederhana.",
          ],
          quiz: [
            {
              q: "Apa inti dari sistem multi-agent?",
              options: [
                "Beberapa agen berperan berbeda saling bekerja sama menuntaskan tugas",
                "Satu model besar dijalankan bersamaan di banyak komputer sekaligus",
                "Beberapa model dibandingkan lalu dipilih yang jawabannya terbaik",
                "Satu agen menjalankan tugas berulang sampai hasilnya memuaskan",
              ],
              answer: 0,
              explain:
                "Multi-agent membagi tugas ke beberapa agen berperan khusus yang bekerja sama.",
            },
            {
              q: "Apa fungsi CrewAI?",
              options: [
                "Kerangka kerja untuk merakit dan mengatur kerja sama tim agen AI",
                "Model bahasa sumber terbuka yang bisa dijalankan di komputer sendiri",
                "Layanan awan untuk melatih model AI tanpa perlu membeli GPU",
                "Basis data khusus untuk menyimpan hasil percakapan agen AI",
              ],
              answer: 0,
              explain:
                "CrewAI membantu mendefinisikan agen berperan + tugas, lalu menjalankannya bersama.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 14: PROYEK PRODUKSI AI ---------------- */
    {
      id: "ai-proyek",
      level: "Proyek",
      title: "Proyek Produksi AI",
      summary: "Praktik nyata: chatbot dengan API Claude, RAG dari nol, LangChain, AI tutor, sampai keamanan, biaya & evaluasi.",
      lessons: [
        {
          id: "ai-pro-1",
          title: "Membangun Chatbot dengan API Claude",
          duration: "13 menit",
          content: `
<p>Saatnya membangun! Kita akan membuat chatbot nyata memakai <b>API Claude</b> dari Anthropic. Kamu tidak perlu melatih model — cukup memanggilnya lewat kode.</p>

<div class="callout warn">
<b>Aturan keamanan #1:</b> JANGAN pernah menaruh <b>API key</b> di kode frontend (browser). Siapa pun bisa melihatnya. API key harus berada di <b>backend</b> (server) milikmu. Alurnya: <b>Browser → Backend-mu → API Claude → kembali</b>.
</div>

<h3>1. Pasang SDK resmi</h3>
<pre class="code">npm install @anthropic-ai/sdk</pre>

<h3>2. Panggilan paling dasar</h3>
<pre class="code">import Anthropic from "@anthropic-ai/sdk";

// Membaca API key dari environment variable ANTHROPIC_API_KEY
const client = new Anthropic();

const response = await client.messages.create({
  model: "claude-opus-4-8",          // model terbaru & paling cerdas
  max_tokens: 1024,                  // batas panjang jawaban
  system: "Kamu asisten yang ramah dan menjawab dalam Bahasa Indonesia.",
  messages: [
    { role: "user", content: "Jelaskan blockchain dalam 2 kalimat." }
  ]
});

console.log(response.content[0].text);</pre>

<h3>3. Membuat percakapan (multi-turn)</h3>
<p>API bersifat <b>stateless</b> — ia tidak mengingat percakapan. Supaya chatbot "ingat", kamu kirim <b>seluruh riwayat</b> tiap kali:</p>
<pre class="code">const messages = [
  { role: "user",      content: "Namaku Andi." },
  { role: "assistant", content: "Halo Andi! Ada yang bisa kubantu?" },
  { role: "user",      content: "Siapa namaku tadi?" }   // Claude akan ingat: Andi
];

const res = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  messages: messages
});</pre>

<div class="callout">
<b>Tiga bagian penting:</b> <b>system</b> = kepribadian/aturan bot, <b>messages</b> = riwayat percakapan (role "user" & "assistant" bergantian), <b>max_tokens</b> = batas panjang jawaban.
</div>
`,
          keyPoints: [
            "Bangun chatbot dengan memanggil API Claude — tidak perlu melatih model.",
            "API key WAJIB di backend, tidak boleh di frontend/browser.",
            "API stateless: kirim seluruh riwayat (messages) agar bot 'mengingat' percakapan.",
            "Gunakan model terbaru claude-opus-4-8; atur kepribadian lewat 'system'.",
          ],
          quiz: [
            {
              q: "Di mana API key seharusnya disimpan?",
              options: [
                "Di server milikmu sendiri, tidak pernah di dalam kode browser",
                "Di dalam kode JavaScript halaman agar pemanggilannya lebih cepat",
                "Di dalam berkas konfigurasi yang ikut diunggah ke repositori",
                "Di dalam penyimpanan lokal browser milik masing-masing pengguna",
              ],
              answer: 0,
              explain:
                "API key di frontend bisa dicuri siapa saja. Selalu simpan & panggil dari backend.",
            },
            {
              q: "Mengapa kita mengirim seluruh riwayat percakapan tiap panggilan?",
              options: [
                "Karena API tidak menyimpan ingatan percakapan sebelumnya",
                "Karena riwayat percakapan dipakai untuk menagih biaya bulanan",
                "Karena model perlu dilatih ulang pada setiap permintaan baru",
                "Karena riwayat panjang membuat jawaban model lebih cepat",
              ],
              answer: 0,
              explain:
                "API tidak menyimpan state; riwayat dikirim ulang agar konteks percakapan terjaga.",
            },
          ],
        },
        {
          id: "ai-pro-2",
          title: "Membangun Sistem RAG dari Nol",
          duration: "14 menit",
          content: `
<p>LLM tidak tahu data <b>pribadi/internal</b>-mu (dokumen perusahaan, materi kursus) dan bisa <b>berhalusinasi</b>. <b>RAG</b> (Retrieval-Augmented Generation) memecahkan ini: AI menjawab berdasarkan dokumenmu sendiri.</p>

<div data-diagram="flow" data-steps="Pecah Dokumen|Embedding|Simpan di Vector DB|Cari yang Relevan|Jawab" data-caption="Pipeline RAG"></div>


<h3>Pipeline RAG (5 langkah)</h3>
<ol>
  <li><b>Pecah (chunk)</b> — dokumen dipotong jadi bagian kecil (mis. per paragraf).</li>
  <li><b>Embedding</b> — tiap potongan diubah jadi <b>vektor angka</b> yang mewakili maknanya.</li>
  <li><b>Simpan</b> — vektor disimpan di <b>vector database</b> (mis. Pinecone, Chroma).</li>
  <li><b>Cari (retrieve)</b> — pertanyaan user juga di-embed, lalu dicari potongan paling <b>mirip maknanya</b> (top-k).</li>
  <li><b>Jawab</b> — potongan relevan diselipkan ke prompt sebagai konteks; LLM menjawab berdasarkan itu.</li>
</ol>

<div class="callout">
<b>Inti idenya:</b> daripada AI menebak dari ingatannya, kita "menyodorkan buku catatan yang benar" tepat sebelum ia menjawab. Hasilnya jauh lebih akurat & bisa dirujuk sumbernya.
</div>

<h3>Contoh inti kode (disederhanakan)</h3>
<pre class="code">// 1) Saat user bertanya, cari potongan dokumen relevan
const potongan = await vectorDB.cari(pertanyaanUser, { topK: 3 });

// 2) Gabungkan jadi konteks
const konteks = potongan.map(p => p.teks).join("\\n\\n");

// 3) Selipkan ke prompt, lalu minta Claude menjawab
const res = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 1024,
  system: "Jawab HANYA berdasarkan konteks. Jika tidak ada di konteks, katakan tidak tahu.",
  messages: [
    { role: "user", content: "Konteks:\\n" + konteks + "\\n\\nPertanyaan: " + pertanyaanUser }
  ]
});</pre>

<div class="callout warn">
<b>Kunci akurasi:</b> instruksi "jawab hanya berdasarkan konteks" + menyodorkan sumber = halusinasi turun drastis. Ini fondasi chatbot dokumen, customer service AI, dan asisten internal.
</div>
`,
          keyPoints: [
            "RAG = mencari dokumen relevan lalu menyelipkannya ke prompt sebelum AI menjawab.",
            "Pipeline: chunk → embedding → simpan di vector DB → retrieve top-k → jawab.",
            "Embedding mengubah teks jadi vektor agar 'kemiripan makna' bisa dihitung.",
            "Instruksi 'jawab hanya dari konteks' menekan halusinasi secara drastis.",
          ],
          quiz: [
            {
              q: "Apa fungsi 'embedding' dalam RAG?",
              options: [
                "Mengubah teks jadi vektor angka agar kemiripan makna bisa dicari",
                "Memampatkan dokumen agar muat ke dalam jendela konteks model",
                "Menerjemahkan dokumen ke bahasa Inggris sebelum diproses model",
                "Mengenkripsi dokumen agar isinya aman saat dikirim ke model",
              ],
              answer: 0,
              explain:
                "Embedding memetakan makna teks ke vektor sehingga potongan mirip bisa ditemukan.",
            },
            {
              q: "Mengapa RAG mengurangi halusinasi?",
              options: [
                "Karena model menjawab berdasar dokumen yang disodorkan, bukan ingatan",
                "Karena model dilatih ulang memakai dokumen tiap kali ada pertanyaan",
                "Karena jawaban model diperiksa manusia sebelum sampai ke pengguna",
                "Karena model dibatasi hanya boleh menjawab dengan kalimat pendek",
              ],
              answer: 0,
              explain:
                "Dengan konteks yang benar di prompt, jawaban menjadi ter-grounding pada sumber nyata.",
            },
          ],
        },
        {
          id: "ai-pro-studi",
          title: "Studi Kasus Mendalam: Cara RAG Memilih Dokumen",
          duration: "12 menit",
          content: `
<p>Sudah paham RAG secara konsep. Sekarang kita bedah "jantung"-nya: bagaimana komputer tahu dokumen mana yang <b>paling relevan</b> dengan pertanyaan?</p>

<h3>Skenario</h3>
<p>Kamu punya 2 dokumen — satu tentang kucing, satu tentang mobil. User bertanya soal kucing. RAG harus memilih dokumen kucing secara otomatis. Caranya: tiap teks diubah jadi <b>vektor angka (embedding)</b>, lalu dihitung <b>kemiripan</b>-nya dengan vektor pertanyaan.</p>

<div class="callout">
<b>Cosine similarity</b> mengukur "seberapa searah" dua vektor: nilai mendekati <b>1</b> = sangat mirip maknanya, mendekati <b>0</b> = beda. RAG memilih dokumen dengan skor tertinggi untuk diselipkan ke prompt.
</div>

<h3>Coba sendiri — jalankan kodenya 👇</h3>
<p>Ubah angka vektor <code>q</code> (pertanyaan) dan lihat dokumen mana yang menang skornya:</p>

<div data-demo="js-playground">function cosine(a, b) {
  let dot = 0, na = 0, nb = 0;
  a.forEach(function(v, i){ dot += v*b[i]; na += v*v; nb += b[i]*b[i]; });
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// q = vektor pertanyaan user (coba ubah angkanya!)
const q = [0.9, 0.1, 0.0];

const docs = {
  "Dokumen kucing": [0.8, 0.2, 0.1],
  "Dokumen mobil":  [0.0, 0.1, 0.9]
};

Object.keys(docs).forEach(function(nama){
  console.log(nama + "  ->  skor " + cosine(q, docs[nama]).toFixed(3));
});
console.log("RAG memilih dokumen dengan skor tertinggi sebagai konteks.");</div>

<div class="callout">
<b>Itulah inti pencarian semantik!</b> Embedding sungguhan punya ratusan dimensi (bukan 3), tapi prinsipnya sama persis. Inilah yang membuat chatbot dokumen bisa menemukan jawaban relevan walau kata-katanya berbeda.
</div>
`,
          keyPoints: [
            "RAG memilih dokumen relevan dengan menghitung kemiripan vektor (cosine similarity).",
            "Skor mendekati 1 = sangat mirip maknanya; mendekati 0 = berbeda.",
            "Embedding nyata punya ratusan dimensi, tapi prinsip pemilihannya sama.",
          ],
          quiz: [
            {
              q: "Apa yang diukur cosine similarity dalam RAG?",
              options: [
                "Seberapa mirip arah makna dua vektor, dengan skor antara 0 dan 1",
                "Seberapa jauh jarak fisik dua dokumen di dalam basis data",
                "Berapa banyak kata yang sama persis muncul di kedua dokumen",
                "Seberapa panjang dokumen dibanding pertanyaan penggunanya",
              ],
              answer: 0,
              explain:
                "Cosine similarity menilai kesamaan arah vektor = kemiripan makna teks.",
            },
            {
              q: "Dokumen mana yang dipilih RAG sebagai konteks?",
              options: [
                "Yang skor kemiripan maknanya paling tinggi dengan pertanyaan",
                "Yang paling baru ditambahkan ke dalam kumpulan dokumen",
                "Yang paling pendek sehingga hemat pemakaian token",
                "Yang paling sering dibuka oleh pengguna sebelumnya",
              ],
              answer: 0,
              explain:
                "RAG menyelipkan dokumen ber-skor tertinggi agar jawaban ter-grounding.",
            },
          ],
        },
        {
          id: "ai-pro-langchain",
          title: "Framework: LangChain & Orkestrasi",
          duration: "12 menit",
          content: `
<p>Setelah merangkai semuanya manual, kamu akan sadar banyak bagian berulang: prompt template, memori, RAG, pemanggilan tool. <b>LangChain</b> adalah framework populer yang menyediakan "blok bangunan" siap pakai agar membangun aplikasi LLM jauh lebih cepat.</p>

<div data-diagram="cycle" data-steps="Terima permintaan|Pilih alat yang cocok|Jalankan alat|Rangkai jawaban" data-center="orkestrasi" data-caption="Kerangka kerja seperti LangChain mengurus perpindahan antar-langkah ini"></div>


<h3>Apa yang ditawarkan LangChain?</h3>
<ul>
  <li><b>Model wrappers</b> — antarmuka seragam ke berbagai LLM (termasuk Claude).</li>
  <li><b>Prompt Templates</b> — prompt dengan placeholder yang rapi & dapat dipakai ulang.</li>
  <li><b>Chains</b> — merangkai langkah: prompt → model → olah keluaran, jadi satu alur.</li>
  <li><b>Memory</b> — menyimpan riwayat percakapan otomatis.</li>
  <li><b>Retrievers</b> — komponen RAG siap pakai (cari dokumen relevan).</li>
  <li><b>Agents & Tools</b> — biarkan LLM memutuskan & memanggil alat (kalkulator, pencarian, API).</li>
</ul>

<h3>Contoh sederhana (LangChain JS)</h3>
<pre class="code">import { ChatAnthropic } from "@langchain/anthropic";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatAnthropic({ model: "claude-opus-4-8" });

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Kamu tutor yang ramah, jawab dalam Bahasa Indonesia."],
  ["human", "{pertanyaan}"]
]);

// "Chain": prompt dialirkan ke model
const chain = prompt.pipe(model);

const hasil = await chain.invoke({ pertanyaan: "Apa itu RAG?" });
console.log(hasil.content);</pre>

<div class="callout">
<b>Untuk RAG:</b> LangChain menyediakan <b>retriever</b> + <b>chain</b> bawaan, sehingga pipeline "cari dokumen → selipkan ke prompt → jawab" yang tadi kita buat manual bisa dirakit dalam beberapa baris.
</div>

<div class="callout warn">
<b>Kapan TIDAK perlu LangChain?</b> Untuk aplikasi sederhana, memanggil SDK langsung sering lebih jelas & ringan. Framework menambah lapisan abstraksi — pakai saat kerumitannya (banyak langkah, banyak tool, RAG kompleks) benar-benar terbantu. Alternatif lain: <b>LlamaIndex</b> (fokus RAG), <b>Anthropic Agent SDK</b>.
</div>
`,
          keyPoints: [
            "LangChain = framework dengan blok siap pakai (prompt, chain, memory, retriever, agent) untuk aplikasi LLM.",
            "'Chain' merangkai langkah prompt → model → olah keluaran jadi satu alur.",
            "LangChain mempercepat membangun RAG & agen lewat retriever dan tool bawaan.",
            "Untuk app sederhana, SDK langsung sering lebih jelas; pakai framework saat kerumitan terbantu.",
          ],
          quiz: [
            {
              q: "Apa kegunaan utama LangChain?",
              options: [
                "Menyediakan blok bangunan siap pakai untuk merakit aplikasi LLM",
                "Melatih model bahasa sendiri memakai data milik perusahaan",
                "Menjalankan model bahasa secara lokal tanpa memerlukan GPU",
                "Menghubungkan aplikasi ke basis data tanpa perlu menulis kueri",
              ],
              answer: 0,
              explain:
                "LangChain memberi komponen (chain, memory, retriever, agent) agar pengembangan lebih cepat.",
            },
            {
              q: "Kapan memakai SDK langsung mungkin lebih baik daripada LangChain?",
              options: [
                "Untuk aplikasi sederhana yang tidak butuh banyak orkestrasi",
                "Untuk aplikasi besar dengan banyak agen dan alur bercabang",
                "Untuk aplikasi yang harus berjalan sepenuhnya tanpa internet",
                "Untuk aplikasi yang memerlukan pencarian dokumen berskala besar",
              ],
              answer: 0,
              explain:
                "Framework menambah abstraksi; untuk kebutuhan sederhana, SDK langsung lebih ringan & jelas.",
            },
          ],
        },
        {
          id: "ai-pro-3",
          title: "Studi Kasus: Membuat AI Tutor",
          duration: "12 menit",
          content: `
<p>Mari gabungkan semuanya menjadi <b>AI Tutor</b> — persis seperti yang bisa ditambahkan ke platform ini. Tiga bahan utamanya:</p>

<h3>1. Kepribadian & aturan (system prompt)</h3>
<pre class="code">const SYSTEM_TUTOR = [
  "Kamu adalah tutor yang sabar untuk pemula.",
  "Selalu jawab dalam Bahasa Indonesia yang sederhana, pakai analogi.",
  "Jangan langsung beri jawaban kuis; beri petunjuk dulu agar siswa berpikir.",
  "Jika pertanyaan di luar topik AI/Blockchain/Akuntansi, arahkan kembali dengan sopan."
].join(" ");</pre>

<h3>2. Pengetahuan materi (RAG)</h3>
<p>Tutor mencari materi pelajaran yang relevan (lewat RAG dari pelajaran ini) lalu menjawab berdasarkan materi tersebut — jadi jawabannya konsisten dengan kurikulum, bukan karangan.</p>

<h3>3. Memori percakapan</h3>
<p>Riwayat dialog disimpan dan dikirim ulang, sehingga tutor mengingat di mana siswa kesulitan.</p>

<pre class="code">async function tanyaTutor(riwayat, pertanyaan, materiRelevan) {
  return client.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 800,
    system: SYSTEM_TUTOR + "\\n\\nMateri rujukan:\\n" + materiRelevan,
    messages: [...riwayat, { role: "user", content: pertanyaan }]
  });
}</pre>

<div class="callout">
<b>Pelajaran arsitektur:</b> aplikasi AI yang baik = <b>persona</b> (system prompt) + <b>pengetahuan</b> (RAG) + <b>memori</b> (riwayat) + <b>batasan</b> (guardrails). Empat pilar ini berlaku untuk hampir semua produk AI.
</div>
`,
          keyPoints: [
            "AI Tutor = persona (system prompt) + pengetahuan (RAG) + memori (riwayat) + batasan (guardrails).",
            "System prompt menetapkan gaya mengajar, bahasa, dan aturan (mis. beri petunjuk dulu).",
            "RAG membuat jawaban tutor konsisten dengan materi kurikulum, bukan karangan.",
          ],
          quiz: [
            {
              q: "Empat pilar aplikasi AI yang baik adalah?",
              options: [
                "Persona, pengetahuan (RAG), memori, dan batasan perilaku",
                "Kecepatan, ketepatan, kemurahan, dan kemudahan pemakaian",
                "Basis data, server, antarmuka, dan sistem pembayaran",
                "Pelatihan, pengujian, penerapan, dan pemantauan",
              ],
              answer: 0,
              explain:
                "Persona + pengetahuan + memori + guardrails adalah kerangka umum produk AI.",
            },
            {
              q: "Apa fungsi 'guardrails' pada AI Tutor?",
              options: [
                "Membatasi perilaku AI, misalnya tetap di topik & tak membocorkan jawaban",
                "Mempercepat jawaban dengan membatasi panjang keluaran dari model",
                "Menyaring kata kasar dari pertanyaan yang diketik oleh pengguna",
                "Mencegah pengguna memakai aplikasi melebihi batas pemakaian harian",
              ],
              answer: 0,
              explain:
                "Guardrails menjaga AI berperilaku sesuai tujuan & aman.",
            },
          ],
        },
        {
          id: "ai-pro-4",
          title: "Menuju Produksi: Keamanan, Biaya & Evaluasi",
          duration: "12 menit",
          content: `
<p>Membuat demo itu mudah; membuatnya <b>siap produksi</b> butuh perhatian pada tiga hal: keamanan, biaya, dan kualitas.</p>

<div data-diagram="cycle" data-steps="Pantau biaya &amp; mutu|Kumpulkan keluhan|Perbaiki prompt/model|Rilis versi baru" data-center="terus" data-caption="Aplikasi AI tidak pernah benar-benar selesai — ia dirawat dalam siklus"></div>


<h3>🔒 Keamanan</h3>
<ul>
  <li><b>API key di backend saja</b> — tidak pernah di browser.</li>
  <li><b>Validasi input</b> & batasi panjangnya.</li>
  <li><b>Waspada prompt injection</b> — pengguna jahat menyisipkan instruksi ("abaikan aturan di atas..."). Jangan percaya mentah-mentah teks dari user; jaga instruksi sistem tetap terpisah.</li>
  <li><b>Rate limiting</b> — batasi jumlah permintaan agar tidak disalahgunakan.</li>
</ul>

<h3>💰 Biaya (token)</h3>
<p>Kamu dibayar per <b>token</b> (potongan kata) — input maupun output. Cara hemat:</p>
<ul>
  <li><b>Prompt caching</b> — bagian prompt yang sama (mis. system prompt panjang) bisa di-cache → jauh lebih murah saat diulang.</li>
  <li><b>Pilih model sesuai kebutuhan</b> — tugas sederhana cukup model lebih kecil/murah; tugas sulit pakai Opus.</li>
  <li><b>Batasi max_tokens</b> dan rancang prompt yang ringkas.</li>
</ul>

<h3>✅ Evaluasi (kualitas)</h3>
<ul>
  <li><b>Buat set uji</b> — kumpulan pertanyaan + jawaban ideal untuk mengukur kualitas saat prompt diubah.</li>
  <li><b>Tangani error & refusal</b> — periksa <code>stop_reason</code>; siapkan pesan cadangan jika AI menolak/gagal.</li>
  <li><b>Streaming</b> — untuk jawaban panjang, tampilkan teks bertahap agar terasa cepat.</li>
  <li><b>Pantau</b> — log penggunaan token, latensi, dan keluhan pengguna.</li>
</ul>
`,
          keyPoints: [
            "Keamanan: API key di backend, validasi input, waspada prompt injection, rate limiting.",
            "Biaya: hemat dengan prompt caching, pilih model sesuai kebutuhan, batasi token.",
            "Kualitas: buat set uji, tangani error/refusal, pakai streaming, dan pantau penggunaan.",
          ],
          quiz: [
            {
              q: "Apa itu 'prompt injection'?",
              options: [
                "Pengguna menyisipkan perintah jahat untuk membajak perilaku AI",
                "Penyerang membanjiri API dengan permintaan sampai layanan tumbang",
                "Penyerang mencuri kunci API yang tertinggal di dalam kode halaman",
                "Model menyisipkan data pelatihannya ke dalam jawaban pengguna",
              ],
              answer: 0,
              explain:
                "Prompt injection mencoba mengganti/mengabaikan instruksi sistem lewat input pengguna.",
            },
            {
              q: "Cara menekan biaya saat memanggil API berulang dengan prompt yang sama?",
              options: [
                "Memperbesar max_tokens",
                "Memakai prompt caching",
                "Mengirim lebih banyak teks",
                "Memakai model terbesar untuk semua tugas",
              ],
              answer: 1,
              explain:
                "Prompt caching menyimpan bagian prompt yang berulang sehingga jauh lebih murah.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 15: PRODUKSI, ETIKA & EKOSISTEM AI ---------------- */
    {
      id: "ai-terapan",
      level: "Terapan",
      title: "Produksi, Etika & Ekosistem AI",
      summary: "Menjalankan AI di produksi (MLOps), etika & regulasi, lanskap tools, dan peta pustaka yang perlu diketahui.",
      lessons: [
        {
          id: "ai-app-4",
          title: "MLOps — Menjalankan AI di Produksi",
          duration: "12 menit",
          content: `
<p>Membuat model yang bagus di laptop itu satu hal; menjalankannya <b>andal untuk jutaan pengguna</b> adalah hal lain. Di sinilah <b>MLOps</b> berperan.</p>

<div data-diagram="flow" data-steps="Deploy|Monitor|Deteksi Drift|Latih Ulang" data-caption="Siklus MLOps"></div>


<div class="callout">
<b>MLOps</b> = praktik untuk <b>men-deploy, memantau, & memelihara</b> model AI di produksi (seperti DevOps, tapi untuk machine learning).
</div>

<h3>Perhatian utama</h3>
<ul>
  <li><b>Deployment</b> — menyajikan model agar bisa dipanggil aplikasi (API), cepat & stabil.</li>
  <li><b>Monitoring</b> — pantau akurasi, latensi, & error secara terus-menerus.</li>
  <li><b>Data/Model Drift</b> — dunia berubah, pola bergeser, sehingga model lama jadi <b>makin tidak akurat</b>. Harus terdeteksi.</li>
  <li><b>Retraining</b> — melatih ulang model secara berkala dengan data baru.</li>
  <li><b>Versioning & A/B testing</b> — kelola versi model & uji mana yang lebih baik.</li>
</ul>

<div class="callout warn">
<b>Bahaya "drift":</b> Model deteksi penipuan yang hebat tahun lalu bisa gagal tahun ini karena pola penipuan berubah. Tanpa monitoring, kualitas <b>menurun diam-diam</b> tanpa ada yang sadar.
</div>

<h3>💥 Dampak</h3>
<p>Tanpa MLOps, model AI <b>membusuk perlahan</b> di produksi. Dengan MLOps, kualitas terjaga, masalah cepat terdeteksi, dan model tetap relevan seiring waktu.</p>
`,
          keyPoints: [
            "MLOps = praktik men-deploy, memantau, & memelihara model AI di produksi.",
            "Perhatian: deployment, monitoring, data/model drift, retraining, versioning & A/B testing.",
            "Data drift: dunia berubah → model lama makin tidak akurat; harus dipantau & dilatih ulang.",
            "Dampak: tanpa MLOps model membusuk diam-diam; dengan MLOps kualitas & relevansi terjaga.",
          ],
          quiz: [
            {
              q: "Apa itu 'data/model drift'?",
              options: [
                "Pola dunia berubah sehingga model lama makin melenceng seiring waktu",
                "Data latih rusak karena kesalahan saat proses penyimpanan",
                "Model kehilangan sebagian bobotnya setelah dipakai sangat lama",
                "Pengguna memberi masukan yang sengaja menyesatkan model",
              ],
              answer: 0,
              explain:
                "Perubahan distribusi data membuat performa model menurun; perlu dipantau & dilatih ulang.",
            },
            {
              q: "Kenapa MLOps penting?",
              options: [
                "Agar model tidak membusuk diam-diam setelah dipakai di produksi",
                "Agar biaya pelatihan model bisa ditekan serendah mungkin",
                "Agar model bisa dijalankan di perangkat dengan spesifikasi rendah",
                "Agar data pengguna otomatis terhapus setelah jangka waktu tertentu",
              ],
              answer: 0,
              explain:
                "MLOps menjaga kualitas, mendeteksi masalah, & memelihara relevansi model.",
            },
          ],
        },
        {
          id: "ai-a-4",
          title: "Etika AI & Masa Depan",
          duration: "10 menit",
          content: `
<p>AI berkuasa, maka tanggung jawab penggunaannya penting. Beberapa isu utama:</p>

<div data-diagram="matrix" data-cells="Bias &amp; diskriminasi|Deepfake &amp; penipuan|Halusinasi jawaban|Hilangnya pekerjaan" data-xlabel="Makin sulit dicegah" data-ylabel="Makin besar dampaknya" data-caption="Empat risiko utama AI — yang di kanan tidak bisa diselesaikan oleh aturan teknis saja"></div>


<h3>Tantangan etika</h3>
<ul>
  <li><b>Bias</b> — AI bisa mewarisi prasangka dari data (mis. diskriminasi dalam seleksi kerja).</li>
  <li><b>Privasi</b> — data pribadi bisa disalahgunakan untuk melatih model.</li>
  <li><b>Misinformasi</b> — deepfake & teks palsu makin meyakinkan.</li>
  <li><b>Dampak pekerjaan</b> — sebagian pekerjaan berubah/hilang, sebagian baru muncul.</li>
  <li><b>Akuntabilitas</b> — siapa bertanggung jawab jika AI salah?</li>
</ul>

<div class="callout">
<b>Prinsip AI yang bertanggung jawab:</b> adil (fair), transparan, menghormati privasi, ada pengawasan manusia (human-in-the-loop), dan aman.
</div>

<h3>Ke mana arahnya?</h3>
<ul>
  <li><b>Multimodal</b> — satu AI memahami teks, gambar, suara, video sekaligus.</li>
  <li><b>AI Agents</b> — AI yang tak cuma menjawab tapi <i>melakukan tugas</i> bertahap (memesan, mencari, mengeksekusi).</li>
  <li><b>AI di perangkat</b> — model kecil berjalan langsung di HP, lebih privat.</li>
</ul>

<p><b>Pesan penutup:</b> AI adalah alat. Sehebat apa pun, ia paling bermanfaat saat dipakai manusia yang paham cara kerjanya — seperti yang baru saja kamu pelajari. 🎓</p>
`,
          keyPoints: [
            "Isu etika utama: bias, privasi, misinformasi, dampak kerja, akuntabilitas.",
            "AI bertanggung jawab harus adil, transparan, dan ada pengawasan manusia.",
            "Tren masa depan: multimodal, AI agents, dan AI on-device.",
          ],
          quiz: [
            {
              q: "Mengapa AI bisa menjadi bias?",
              options: [
                "Karena mewarisi prasangka yang sudah ada di dalam data latihnya",
                "Karena algoritmanya sengaja dirancang memihak kelompok tertentu",
                "Karena model rusak setelah dipakai terlalu lama tanpa perawatan",
                "Karena pengguna memberi pertanyaan yang menjebak model",
              ],
              answer: 0,
              explain:
                "Bias dalam data akan dipelajari & diperkuat oleh model.",
            },
            {
              q: "Apa itu 'AI Agent'?",
              options: [
                "AI yang tak sekadar menjawab, tetapi menjalankan tugas bertahap",
                "AI yang sudah mencapai kecerdasan setara manusia dewasa",
                "AI yang berjalan di perangkat pengguna tanpa perlu internet",
                "AI yang khusus dilatih untuk satu bidang pekerjaan saja",
              ],
              answer: 0,
              explain:
                "AI agent dapat merencanakan & mengeksekusi langkah-langkah untuk menyelesaikan tugas.",
            },
          ],
        },
        {
          id: "ai-pl-3",
          title: "Regulasi AI",
          duration: "12 menit",
          content: `
<p>Jalur blockchain sudah punya pelajaran regulasi. AI juga makin diatur — dan ini penting bagi siapa pun yang membangun produk AI.</p>

<h3>Fundamental: kenapa AI perlu diatur?</h3>
<p>Karena AI kini ikut mengambil keputusan yang <b>berdampak pada hidup orang</b>: seleksi kerja, persetujuan pinjaman, diagnosis medis, penegakan hukum. Kalau salah atau bias, kerugiannya nyata — dan korbannya sering tak tahu bahwa keputusannya dibuat mesin.</p>

<h3>Pendekatan berbasis risiko</h3>
<p>Regulasi modern (contoh paling dikenal: <b>EU AI Act</b>) tidak mengatur semua AI dengan cara sama, melainkan <b>menurut tingkat risikonya</b>:</p>
<table class="tbl">
  <tr><th>Tingkat</th><th>Contoh</th><th>Perlakuan</th></tr>
  <tr><td><b>Dilarang</b></td><td>Manipulasi berbahaya, penilaian sosial warga (social scoring)</td><td>Tidak boleh sama sekali</td></tr>
  <tr><td><b>Risiko tinggi</b></td><td>Seleksi kerja, kredit, medis, penegakan hukum</td><td>Wajib ketat: dokumentasi, uji bias, pengawasan manusia</td></tr>
  <tr><td><b>Risiko terbatas</b></td><td>Chatbot</td><td>Wajib <b>transparan</b> (beri tahu pengguna bahwa ini AI)</td></tr>
  <tr><td><b>Risiko minimal</b></td><td>Filter spam, AI di game</td><td>Bebas</td></tr>
</table>

<h3>Isu utama yang diatur</h3>
<ul>
  <li><b>Transparansi</b> — pengguna berhak tahu sedang berinteraksi dengan AI; konten buatan AI sebaiknya ditandai.</li>
  <li><b>Data pribadi</b> — di Indonesia ada <b>UU Perlindungan Data Pribadi (PDP)</b> yang mengatur pemakaian data orang.</li>
  <li><b>Bias &amp; keadilan</b> — AI berisiko tinggi wajib diuji agar tidak diskriminatif.</li>
  <li><b>Hak cipta</b> — masih diperdebatkan di banyak negara: bolehkah melatih model dari karya berhak cipta?</li>
  <li><b>Akuntabilitas</b> — harus jelas <b>siapa bertanggung jawab</b> bila AI merugikan.</li>
</ul>

<div class="callout">
<b>Bagi kamu yang membangun aplikasi AI:</b> kabar baiknya, praktik yang baik &amp; kepatuhan biasanya sejalan — <b>beri tahu pengguna</b> bahwa ini AI, <b>lindungi data</b> mereka, <b>uji bias</b>, sediakan <b>pengawasan manusia</b> untuk keputusan penting, dan <b>simpan catatan</b>. Ini juga membuat produkmu lebih dipercaya.
</div>

<div class="callout warn">
<b>Catatan:</b> regulasi AI <b>berkembang cepat</b> &amp; berbeda antarnegara. Materi ini gambaran umum untuk edukasi — untuk kepatuhan nyata, periksa aturan terbaru yang berlaku di wilayahmu.
</div>
`,
          keyPoints: [
            "AI diatur karena ikut mengambil keputusan berdampak nyata (kerja, kredit, medis, hukum).",
            "Pendekatan berbasis risiko (mis. EU AI Act): dilarang / risiko tinggi / terbatas / minimal.",
            "Isu utama: transparansi, data pribadi (UU PDP di Indonesia), bias, hak cipta, akuntabilitas.",
            "Praktik baik = kepatuhan: beri tahu pengguna, lindungi data, uji bias, pengawasan manusia, simpan catatan.",
          ],
          quiz: [
            {
              q: "Apa inti pendekatan 'berbasis risiko' dalam regulasi AI?",
              options: [
                "Aturannya disesuaikan tingkat risikonya, dari dilarang sampai minimal",
                "Semua sistem AI diperlakukan sama tanpa memandang penggunaannya",
                "Hanya perusahaan besar yang wajib mengikuti aturan yang berlaku",
                "Aturan hanya berlaku setelah sistem AI terbukti merugikan seseorang",
              ],
              answer: 0,
              explain:
                "Makin besar potensi dampaknya pada manusia, makin ketat kewajibannya.",
            },
            {
              q: "AI untuk seleksi kerja & persetujuan kredit umumnya masuk kategori?",
              options: [
                "Risiko tinggi — wajib dokumentasi, uji bias, dan pengawasan manusia",
                "Risiko minimal — cukup memberi tahu pengguna bahwa itu buatan AI",
                "Dilarang sepenuhnya karena menyangkut hak dasar seseorang",
                "Tidak diatur karena keputusan akhirnya tetap di tangan manusia",
              ],
              answer: 0,
              explain:
                "Keputusan yang memengaruhi hidup seseorang tergolong risiko tinggi.",
            },
          ],
        },
        {
          id: "ai-adv-4",
          title: "Lanskap Tools & Tren AI",
          duration: "11 menit",
          content: `
<p>Ekosistem AI berkembang cepat. Berikut peta singkat alat & tren penting agar kamu tidak tersesat.</p>

<h3>Alat & platform</h3>
<table class="tbl">
  <tr><th>Kategori</th><th>Contoh</th></tr>
  <tr><td>Framework aplikasi LLM</td><td>LangChain, LlamaIndex (fokus RAG), CrewAI (multi-agent)</td></tr>
  <tr><td>Model & komunitas</td><td>Hugging Face (ribuan model open-source & dataset)</td></tr>
  <tr><td>Vector database</td><td>Pinecone, Chroma, Weaviate, Qdrant</td></tr>
  <tr><td>Penyedia model</td><td>Anthropic (Claude), OpenAI, Google, model open (Llama, Mistral)</td></tr>
</table>

<h3>Tren yang perlu diketahui</h3>
<ul>
  <li><b>Model vs open model</b> — model tertutup (API) sangat kuat & mudah; model open bisa dijalankan sendiri (privasi, kontrol).</li>
  <li><b>Multimodal</b> — satu model memahami teks, gambar, suara, video sekaligus.</li>
  <li><b>AI Agents</b> — AI yang merencanakan & memakai alat untuk menyelesaikan tugas, bukan sekadar menjawab.</li>
  <li><b>MCP (Model Context Protocol)</b> — standar untuk menghubungkan AI ke alat & data secara aman & seragam.</li>
</ul>
`,
          keyPoints: [
            "Framework: LangChain (umum), LlamaIndex (RAG), CrewAI (multi-agent).",
            "Hugging Face = pusat model open-source & dataset; vector DB (Pinecone/Chroma/dll) untuk RAG.",
            "Tren: model tertutup vs open, multimodal, AI agents, dan MCP untuk menghubungkan AI ke alat/data.",
          ],
          quiz: [
            {
              q: "Apa itu Hugging Face?",
              options: [
                "Pusat komunitas berisi ribuan model dan dataset sumber terbuka",
                "Penyedia layanan awan untuk menjalankan model berbayar milik sendiri",
                "Kerangka kerja untuk melatih model bahasa dari awal sampai jadi",
                "Basis data vektor yang dipakai menyimpan embedding dokumen",
              ],
              answer: 0,
              explain: "Hugging Face adalah hub model & dataset open-source.",
            },
            {
              q: "Apa yang dimaksud MCP (Model Context Protocol)?",
              options: [
                "Standar untuk menghubungkan AI ke alat dan data secara seragam",
                "Protokol untuk memampatkan jendela konteks agar muat lebih banyak",
                "Metrik untuk mengukur seberapa panjang ingatan sebuah model",
                "Format berkas untuk menyimpan bobot model agar mudah dibagikan",
              ],
              answer: 0,
              explain:
                "MCP menstandarkan cara AI mengakses alat/data eksternal.",
            },
          ],
        },
        {
          id: "ai-tl-8",
          title: "Peta Pustaka Lain — Apa Lagi yang Perlu Diketahui",
          duration: "13 menit",
          content: `
<p>Sampai di sini kamu sudah mengenal pustaka inti. Tapi ekosistem Python untuk AI sangat luas, dan pemula sering bingung <b>apa lagi yang ada di luar sana</b>. Pelajaran ini memberi <b>peta</b> — bukan untuk dihafal, tapi agar kamu tahu ke mana mencari saat membutuhkannya.</p>

<div data-diagram="network" data-center="Python untuk AI" data-nodes="Data &amp; model|Visualisasi|Teks &amp; gambar|Berbagi hasil|Pemantauan" data-caption="Lima kelompok kebutuhan — tiap kelompok punya pustaka andalannya"></div>

<h3>1. Model yang lebih kuat untuk data tabel</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th></tr>
  <tr><td><b>XGBoost</b></td><td>Boosting — sering menjadi <b>juara</b> pada data tabel. Konsep &amp; praktiknya sudah kamu pelajari di modul Pohon Keputusan &amp; Ensemble</td></tr>
  <tr><td><b>LightGBM</b></td><td>Mirip XGBoost tapi jauh lebih cepat pada data besar</td></tr>
  <tr><td><b>CatBoost</b></td><td>Paling nyaman bila banyak kolom kategori (tak perlu encoding manual)</td></tr>
</table>

<div class="callout">
<b>Kabar baiknya:</b> ketiganya memakai pola <b>fit / predict</b> yang sama persis dengan scikit-learn, dan bisa dipasang langsung ke dalam <b>Pipeline</b>. Jadi kamu tidak belajar dari nol.
</div>

<h3>2. Statistik yang menjelaskan, bukan sekadar meramal</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th></tr>
  <tr><td><b>SciPy</b></td><td>Uji statistik (uji-t, chi-square), optimasi, pengolahan sinyal</td></tr>
  <tr><td><b>statsmodels</b></td><td>Regresi dengan <b>nilai-p</b> dan selang kepercayaan — untuk menjawab "apakah pengaruh ini nyata?"</td></tr>
</table>

<div class="callout warn">
<b>Bedanya penting.</b> scikit-learn menjawab <i>"berapa ramalannya?"</i>; statsmodels menjawab <i>"apakah hubungan ini bermakna secara statistik, dan seberapa yakin kita?"</i>.<br><br>
Untuk skripsi, penelitian, atau keputusan bisnis yang perlu dipertanggungjawabkan, <b>statsmodels</b> sering justru yang kamu butuhkan — bukan model prediksi tercanggih.
</div>

<h3>3. Gambar, teks, dan suara</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th></tr>
  <tr><td><b>OpenCV</b></td><td>Mengolah gambar &amp; video: memotong, mengubah ukuran, mendeteksi tepi, membaca kamera</td></tr>
  <tr><td><b>Pillow</b></td><td>Operasi gambar sederhana — lebih ringan dari OpenCV</td></tr>
  <tr><td><b>spaCy</b></td><td>Pengolahan teks untuk <b>produksi</b>: cepat, siap pakai, mendukung banyak bahasa</td></tr>
  <tr><td><b>NLTK</b></td><td>Pengolahan teks untuk <b>belajar &amp; riset</b>: lengkap secara akademis, lebih lambat</td></tr>
  <tr><td><b>librosa</b></td><td>Menganalisis suara &amp; musik</td></tr>
</table>

<h3>4. Membagikan hasil kerjamu</h3>
<p>Ini bagian yang paling sering dilewatkan pemula. Model yang hanya hidup di notebook <b>tidak berguna bagi siapa pun</b>.</p>

<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th><th>Cocok untuk</th></tr>
  <tr><td><b>Streamlit</b></td><td>Menyulap skrip Python jadi aplikasi web</td><td class="ok-cell">Paling mudah — beberapa baris jadi antarmuka</td></tr>
  <tr><td><b>Gradio</b></td><td>Antarmuka cepat untuk mencoba model</td><td>Demo model AI, terhubung ke Hugging Face</td></tr>
  <tr><td><b>FastAPI</b></td><td>Membuat <b>API</b> agar model bisa dipanggil aplikasi lain</td><td>Saat model dipakai oleh sistem lain, bukan manusia</td></tr>
  <tr><td><b>Plotly / Dash</b></td><td>Grafik interaktif &amp; dasbor</td><td>Laporan yang bisa diklik &amp; disaring</td></tr>
</table>

<div class="callout">
<b>💡 Saran praktis:</b> setelah model pertamamu jalan, luangkan satu jam membungkusnya dengan <b>Streamlit</b>. Perbedaan antara "saya bisa melatih model" dan "saya bisa menunjukkan aplikasi yang berjalan" sangat besar — baik untuk portofolio maupun untuk memahami apa yang sesungguhnya kamu buat.
</div>

<h3>5. Merapikan pekerjaan</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th></tr>
  <tr><td><b>MLflow</b></td><td>Mencatat tiap percobaan: parameter, hasil, dan versi modelnya</td></tr>
  <tr><td><b>Weights &amp; Biases</b></td><td>Serupa, dengan tampilan pemantauan yang lebih kaya</td></tr>
  <tr><td><b>joblib</b> / <b>pickle</b></td><td>Menyimpan model terlatih ke berkas agar bisa dipakai lagi</td></tr>
</table>

<div class="callout warn">
<b>Kenapa pencatatan percobaan penting:</b> setelah mencoba 30 kombinasi, kamu <b>pasti</b> lupa mana yang menghasilkan 89% dan dengan pengaturan apa. Awalnya cukup satu berkas spreadsheet; MLflow diperlukan ketika percobaanmu sudah puluhan.
</div>

<h3>⚠️ Jangan belajar semuanya</h3>
<div class="callout warn">
Daftar di atas mudah membuat kewalahan. Jangan terjebak <b>"belajar pustaka"</b> tanpa henti — itu terasa produktif padahal tidak.<br><br>
<b>Urutan yang benar:</b> kuasai <b>pandas</b> dan <b>scikit-learn</b> sampai betul-betul lancar. Lalu ambil pustaka lain <b>hanya saat ada masalah nyata</b> yang membutuhkannya. Pustaka yang dipelajari karena kebutuhan akan melekat; yang dipelajari "untuk jaga-jaga" akan lupa dalam sebulan.
</div>

<div class="callout">
<b>Rangkuman peta alat.</b> Kamu kini tahu bahasa apa yang dipakai, pustaka mana untuk apa, cara kerja scikit-learn yang lengkap, cara melihat data sebelum memodelkannya, kapan memilih Keras atau PyTorch, dan ke mana mencari saat kebutuhanmu di luar itu semua. Langkah berikutnya bukan membaca lagi — melainkan <b>membuka Colab dan mencobanya dengan datamu sendiri</b>.
</div>
`,
          keyPoints: [
            "Data tabel: XGBoost (sering juara), LightGBM (cepat untuk data besar), CatBoost (nyaman untuk kolom kategori) — semuanya memakai pola fit/predict yang sama dengan scikit-learn.",
            "SciPy untuk uji statistik; statsmodels untuk regresi dengan nilai-p & selang kepercayaan.",
            "scikit-learn menjawab 'berapa ramalannya'; statsmodels menjawab 'apakah hubungan ini bermakna' — untuk skripsi & keputusan bisnis, sering statsmodels yang dibutuhkan.",
            "Gambar: OpenCV (lengkap) & Pillow (ringan). Teks: spaCy (produksi) & NLTK (belajar/riset). Suara: librosa.",
            "Membagikan hasil: Streamlit (paling mudah), Gradio (demo model), FastAPI (dipanggil sistem lain), Plotly/Dash (dasbor interaktif).",
            "Merapikan: MLflow & Weights and Biases untuk mencatat percobaan; joblib/pickle untuk menyimpan model terlatih.",
            "Jangan belajar semua pustaka — kuasai pandas & scikit-learn dulu, lalu ambil yang lain hanya saat ada masalah nyata.",
          ],
          quiz: [
            {
              q: "Kamu perlu tahu apakah pengaruh sebuah variabel bermakna secara statistik (dengan nilai-p) untuk skripsimu. Pustaka apa?",
              options: [
                "scikit-learn",
                "statsmodels",
                "Streamlit",
                "OpenCV",
              ],
              answer: 1,
              explain:
                "scikit-learn dirancang untuk meramal, bukan untuk menjelaskan kebermaknaan statistik.",
            },
            {
              q: "Apa beda spaCy dan NLTK?",
              options: [
                "spaCy cepat dan siap produksi; NLTK lebih lengkap untuk riset",
                "spaCy hanya mendukung bahasa Inggris, NLTK mendukung semua bahasa",
                "NLTK jauh lebih baru dan menggantikan spaCy yang sudah usang",
                "Keduanya sama saja, hanya berbeda nama pembuatnya",
              ],
              answer: 0,
              explain:
                "Keduanya untuk teks, tapi ditujukan untuk kebutuhan yang berbeda.",
            },
            {
              q: "Model sudah jadi dan ingin ditunjukkan ke orang lain lewat halaman web sederhana. Pilihan tercepat?",
              options: [
                "FastAPI",
                "Streamlit",
                "MLflow",
                "SciPy",
              ],
              answer: 1,
              explain:
                "Streamlit mengubah skrip Python jadi aplikasi web dalam beberapa baris. FastAPI dipakai bila yang memanggil adalah sistem lain, bukan manusia.",
            },
            {
              q: "Saran paling penting dalam mempelajari pustaka Python?",
              options: [
                "Kuasai pandas dan scikit-learn dulu, lainnya diambil saat dibutuhkan",
                "Pelajari sebanyak mungkin pustaka sekaligus agar siap menghadapi apa pun",
                "Cukup hafalkan nama dan kegunaan tiap pustaka tanpa perlu mencobanya",
                "Hindari memakai pustaka dan tulis sendiri agar benar-benar paham",
              ],
              answer: 0,
              explain:
                "Pustaka yang dipelajari karena kebutuhan akan melekat; yang dipelajari 'untuk jaga-jaga' cepat terlupa.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 16: EKONOMI & BISNIS AI ---------------- */
    {
      id: "ai-ekonomi",
      level: "Ekonomi",
      title: "Ekonomi & Bisnis AI",
      summary: "Unit economics produk AI, ROI & build vs buy, moat di era AI, dan alokasi modal saat segalanya cepat usang.",
      lessons: [
        {
          id: "ai-ek-1",
          title: "Unit Economics Produk AI",
          duration: "13 menit",
          content: `
<p>Kamu sudah bisa <b>membangun</b> aplikasi AI. Pertanyaan berikutnya yang menentukan hidup-matinya: <b>apakah tiap pengguna menghasilkan untung?</b> Ini pertemuan antara jalur AI dan jalur Akuntansi.</p>

<div data-diagram="stack" data-parts="Biaya token model:55|Vector DB &amp; penyimpanan:15|Server &amp; jaringan:15|Dukungan pengguna:15" data-caption="Contoh rincian biaya melayani satu pengguna produk AI — biaya token biasanya yang terbesar"></div>


<h3>Fundamental: kenapa AI beda dari software biasa</h3>
<table class="tbl">
  <tr><th></th><th>Software biasa (SaaS)</th><th>Produk AI</th></tr>
  <tr><td>Biaya melayani 1 pengguna tambahan</td><td>Hampir <b>nol</b></td><td><b>Ada &amp; nyata</b> — tiap permintaan memakai token/komputasi</td></tr>
  <tr><td>Margin kotor</td><td>Sangat tebal</td><td>Lebih <b>tipis</b></td></tr>
  <tr><td>Makin banyak dipakai</td><td>Makin untung</td><td>Biaya <b>ikut naik</b></td></tr>
</table>

<div class="callout warn">
<b>Ini perbedaan paling penting:</b> di software biasa, pengguna ke-1.000 hampir gratis dilayani. Di produk AI, tiap pemakaian <b>membakar biaya inferensi</b>. Kalau harga langgananmu terlalu murah untuk pemakaian berat, <b>makin banyak pengguna justru makin rugi</b>.
</div>

<h3>Coba sendiri — hitung untung-rugi per pengguna 👇</h3>
<div data-demo="js-playground">// Unit economics produk AI: apakah tiap pengguna menguntungkan?
const hargaLangganan = 150000;   // Rp per pengguna per bulan
const permintaanPerBulan = 300;  // rata-rata panggilan AI per pengguna
const biayaPerPermintaan = 300;  // Rp biaya inferensi per panggilan

const biayaAI = permintaanPerBulan * biayaPerPermintaan;
const marginKotor = hargaLangganan - biayaAI;
const persenMargin = marginKotor / hargaLangganan * 100;

console.log("Pendapatan/pengguna : Rp" + hargaLangganan.toLocaleString("id-ID"));
console.log("Biaya AI/pengguna   : Rp" + biayaAI.toLocaleString("id-ID"));
console.log("Margin kotor        : Rp" + marginKotor.toLocaleString("id-ID") + " (" + persenMargin.toFixed(1) + "%)");

if (marginKotor > 0) {
  console.log("Menguntungkan per pengguna - menambah volume menambah laba.");
} else {
  console.log("RUGI per pengguna - makin banyak pengguna makin rugi!");
}
console.log("Coba ubah biayaPerPermintaan jadi 600, lalu jalankan lagi.");</div>

<h3>Cara memperbaiki margin</h3>
<ul>
  <li><b>Prompt caching</b> — bagian prompt yang berulang jauh lebih murah.</li>
  <li><b>Pilih model sesuai tugas</b> — tugas sederhana tak perlu model termahal.</li>
  <li><b>Batasi pemakaian</b> — kuota/fair-use, atau harga bertingkat sesuai pemakaian.</li>
  <li><b>Perpendek prompt &amp; keluaran</b> — token lebih sedikit, biaya turun.</li>
</ul>

<div class="callout">
<b>Kaitkan ke akuntansi:</b> biaya inferensi ini adalah <b>biaya variabel</b>, dan (Harga − Biaya variabel) adalah <b>margin kontribusi</b> — konsep yang sudah kamu pelajari di jalur Akuntansi. Titik impas produk AI dihitung dengan rumus yang sama persis.
</div>

<h3>Free Cash Flow versi produk AI</h3>
<p>Margin kontribusi menjawab "untung per pengguna". Pertanyaan berikutnya lebih besar: <b>apakah bisnis ini menghasilkan kas bebas?</b> Ingat rumus <b>FCF</b> dari jalur Akuntansi — begini terjemahannya ke produk AI:</p>

<table class="tbl">
  <tr><th>Istilah akuntansi</th><th>Padanannya di produk AI</th></tr>
  <tr><td>Arus kas operasi</td><td>Langganan yang dibayar − biaya token, server, dukungan pengguna</td></tr>
  <tr><td><b>CapEx pemeliharaan</b></td><td>Biaya <b>wajib</b> agar produk tetap layak: memperbarui model saat versi lama usang, menjaga kualitas jawaban, mengganti API yang dihentikan</td></tr>
  <tr><td><b>CapEx pertumbuhan</b></td><td>Membangun fitur baru, fine-tuning model khusus, memperluas ke bahasa/pasar baru</td></tr>
</table>

<div class="callout warn">
<b>⚠️ Perangkap khas AI:</b> di bisnis biasa, mesin yang dibeli bertahan 10 tahun. Di AI, <b>model bisa usang dalam 12–18 bulan</b>. Artinya sebagian besar yang terlihat seperti "CapEx pertumbuhan" sebenarnya <b>CapEx pemeliharaan</b> — kamu tidak sedang maju, kamu sedang <b>berlari agar tidak tertinggal</b>.<br><br>
Ini membuat banyak produk AI terlihat punya margin bagus tapi <b>FCF tipis bertahun-tahun</b>: kasnya habis terus-menerus hanya untuk tetap relevan.
</div>

<div class="callout">
<b>Pertanyaan penyaring yang tajam:</b> <i>"Kalau kami berhenti mengembangkan produk ini hari ini, berapa lama ia masih laku?"</i><br><br>
Bisnis biasa: bertahun-tahun. Produk AI tipis: <b>beberapa bulan</b>. Makin pendek jawabannya, makin besar bagian belanja yang sesungguhnya adalah pemeliharaan — dan makin kecil kas bebas yang benar-benar dimiliki pemilik.
</div>
`,
          keyPoints: [
            "Beda utama produk AI vs software biasa: melayani pengguna tambahan memakan biaya inferensi nyata.",
            "Margin kotor produk AI lebih tipis; harga terlalu murah untuk pemakaian berat = makin banyak pengguna makin rugi.",
            "Perbaiki margin: prompt caching, pilih model sesuai tugas, batasi/tiering pemakaian, perpendek prompt & keluaran.",
            "Biaya inferensi = biaya variabel; (Harga − biaya variabel) = margin kontribusi — sama seperti di akuntansi.",
          ],
          practice: [
            { type: "number", q: "Harga langganan Rp150.000/bulan. Pengguna memakai 300 permintaan @Rp300. Berapa margin kotor per pengguna? (Rupiah)", answer: 60000, tol: 100, hint: "Biaya AI = 300 × 300, lalu Harga − Biaya.", solution: "Biaya = Rp90.000; 150.000 − 90.000 = Rp60.000." },
            { type: "choice", q: "Biaya inferensi naik jadi Rp600/permintaan (300 permintaan) dengan harga tetap Rp150.000. Apa yang terjadi?", options: ["Margin tetap sama", "Rugi Rp30.000 per pengguna — makin banyak pengguna makin rugi", "Untung dua kali lipat", "Tidak berpengaruh"], answer: 1, hint: "300 × 600 = 180.000, bandingkan dengan harga 150.000.", solution: "Biaya Rp180.000 > harga Rp150.000 → rugi Rp30.000 tiap pengguna." },
          ],
          quiz: [
            {
              q: "Kenapa margin kotor produk AI umumnya lebih tipis dari SaaS biasa?",
              options: [
                "Karena tiap pemakaian menimbulkan biaya inferensi yang nyata",
                "Karena harga langganan produk AI ditekan sangat rendah oleh persaingan",
                "Karena biaya pemasaran produk AI jauh lebih besar daripada SaaS biasa",
                "Karena produk AI wajib membayar lisensi kepada pemilik model",
              ],
              answer: 0,
              explain:
                "Biaya per pemakaian membuat biaya naik seiring volume, menipiskan margin.",
            },
            {
              q: "Biaya inferensi dalam istilah akuntansi termasuk?",
              options: ["Biaya tetap", "Biaya variabel", "Aset", "Ekuitas"],
              answer: 1,
              explain: "Biaya inferensi naik-turun mengikuti volume pemakaian = biaya variabel.",
            },
          ],
        },
        {
          id: "ai-ek-2",
          title: "ROI Proyek AI & Build vs Buy",
          duration: "12 menit",
          content: `
<p>Banyak perusahaan membangun AI karena <b>ikut tren</b>, bukan karena menghasilkan nilai. Cara menghindarinya: pakai <b>ROI</b> — alat yang sudah kamu pelajari di jalur Akuntansi.</p>

<div data-diagram="vs" data-left="BUY - pakai API::Biaya awal kecil (OpEx)::Cepat mulai" data-right="BUILD - latih sendiri::Biaya besar di muka (CapEx)::Butuh volume besar" data-caption="Build vs Buy"></div>


<div class="callout">
<b>ROI proyek AI</b> = (Nilai yang dihasilkan − Biaya total) ÷ Biaya total × 100%.<br>
"Nilai" bisa berupa: jam kerja yang dihemat, biaya layanan pelanggan yang turun, penjualan yang naik, atau kesalahan yang berkurang.
</div>

<h3>Biaya total sering diremehkan</h3>
<p>Jangan hanya menghitung biaya API. Total biaya nyata meliputi:</p>
<ul>
  <li>Biaya API/inferensi (berjalan terus)</li>
  <li>Waktu developer membangun &amp; mengintegrasikan</li>
  <li><b>Pemeliharaan &amp; pemantauan</b> (MLOps) — sering terlupakan</li>
  <li>Penyiapan data &amp; evaluasi kualitas</li>
</ul>

<h3>Build vs Buy — ini keputusan CapEx vs OpEx</h3>
<table class="tbl">
  <tr><th></th><th>Buy — pakai API (OpEx)</th><th>Build — latih/host sendiri (CapEx)</th></tr>
  <tr><td>Biaya awal</td><td>Kecil</td><td>Besar (GPU, data, tim)</td></tr>
  <tr><td>Biaya jalan</td><td>Bayar per pemakaian</td><td>Relatif tetap</td></tr>
  <tr><td>Kecepatan mulai</td><td class="ok-cell">Cepat</td><td>Lambat</td></tr>
  <tr><td>Cocok saat</td><td>Volume belum pasti, ingin cepat</td><td>Volume sangat besar &amp; stabil, atau data sensitif</td></tr>
</table>

<div class="callout warn">
<b>Aturan praktis:</b> <b>mulai dengan API (OpEx)</b>. Baru pertimbangkan membangun sendiri kalau volumenya sudah sangat besar &amp; stabil sehingga biaya per pemakaian melebihi biaya membangun — atau kalau data tak boleh keluar dari perusahaan. Membangun terlalu dini adalah pemborosan modal klasik.
</div>
`,
          keyPoints: [
            "ROI proyek AI = (Nilai dihasilkan − Biaya total) ÷ Biaya total × 100%; nilai bisa berupa jam hemat, biaya turun, penjualan naik.",
            "Biaya total bukan hanya API: termasuk waktu developer, pemeliharaan/MLOps, dan penyiapan data.",
            "Build vs Buy = keputusan CapEx vs OpEx: API (cepat, bayar per pakai) vs latih/host sendiri (mahal di muka).",
            "Aturan praktis: mulai dari API; bangun sendiri hanya bila volume sangat besar & stabil atau data sensitif.",
          ],
          practice: [
            { type: "number", q: "Proyek AI menghemat biaya Rp260jt setahun, total biayanya Rp200jt. Berapa ROI-nya? (%)", answer: 30, tol: 0.5, hint: "ROI = (Nilai − Biaya) ÷ Biaya × 100%.", solution: "(260 − 200) ÷ 200 × 100% = 30%." },
            { type: "choice", q: "Startup baru ingin mencoba fitur AI, volumenya belum pasti. Pilihan paling bijak?", options: ["Latih model sendiri dari nol (CapEx besar)", "Pakai API dulu (OpEx), evaluasi, baru pertimbangkan bangun sendiri", "Beli GPU sebanyak-banyaknya", "Tidak usah pakai AI"], answer: 1, hint: "Mana yang risikonya kecil saat volume belum pasti?", solution: "Mulai dari API menjaga modal & fleksibilitas sampai volume terbukti." },
          ],
          quiz: [
            {
              q: "Komponen biaya proyek AI yang paling sering dilupakan?",
              options: [
                "Pemeliharaan, pemantauan, dan waktu kerja pengembangnya",
                "Biaya berlangganan API model yang dipakai setiap bulan",
                "Harga perangkat keras GPU yang dibeli di awal proyek",
                "Biaya menyimpan data pelatihan di layanan penyimpanan awan",
              ],
              answer: 0,
              explain:
                "Biaya berjalan (MLOps, integrasi, evaluasi) sering luput dari perhitungan ROI.",
            },
            {
              q: "Memakai API AI dibanding melatih model sendiri, dalam istilah akuntansi adalah?",
              options: [
                "CapEx vs OpEx — melatih sendiri CapEx, memanggil API OpEx",
                "Aset lancar vs aset tetap dalam penyusunan neraca perusahaan",
                "Biaya tetap vs biaya variabel dalam menghitung titik impas",
                "Beban pokok penjualan vs beban operasional pada laba rugi",
              ],
              answer: 0,
              explain:
                "API = biaya operasional per pemakaian; melatih/host sendiri = belanja modal di muka.",
            },
          ],
        },
        {
          id: "ai-ek-3",
          title: "Moat di Era AI — Apakah Model Itu Parit?",
          duration: "12 menit",
          content: `
<p>Pertanyaan paling diperdebatkan di industri AI: <b>apa yang membuat sebuah perusahaan AI sulit ditiru?</b> Kita pakai kerangka <b>economic moat</b> dari jalur Akuntansi.</p>

<div class="callout warn">
<b>Kabar kurang enak:</b> <b>model itu sendiri jarang menjadi parit yang kuat.</b> Model terbaik hari ini bisa disusul beberapa bulan kemudian, dan model open-source terus mengejar. Keunggulan yang hanya berupa "model kami lebih pintar" biasanya <b>berumur pendek</b>.
</div>

<h3>Jebakan "thin wrapper"</h3>
<p><b>Thin wrapper</b> = aplikasi yang hanya menempelkan antarmuka tipis di atas API model milik orang lain, tanpa keunggulan lain. Masalahnya: <b>siapa pun bisa membuat hal yang sama dalam hitungan minggu</b> — bahkan penyedia modelnya sendiri bisa menambahkan fitur itu.</p>

<h3>Parit yang benar-benar bertahan di era AI</h3>
<table class="tbl">
  <tr><th>Parit</th><th>Kenapa kuat</th></tr>
  <tr><td><b>Data eksklusif</b></td><td>Data milikmu sendiri yang tak dimiliki pesaing; makin dipakai makin kaya</td></tr>
  <tr><td><b>Integrasi ke alur kerja</b></td><td>AI tertanam dalam proses harian pelanggan → susah dicabut</td></tr>
  <tr><td><b>Switching cost</b></td><td>Riwayat, konfigurasi, & integrasi pelanggan sudah menumpuk di produkmu</td></tr>
  <tr><td><b>Distribusi</b></td><td>Sudah punya jutaan pengguna/kanal penjualan — teknologi bagus tanpa distribusi sering kalah</td></tr>
  <tr><td><b>Network effect</b></td><td>Makin banyak pengguna → produk makin baik bagi semua</td></tr>
</table>

<div class="callout">
<b>Uji sederhana (dari pelajaran Moat):</b> <i>"Kalau pesaing bermodal raksasa meniru produkku bulan depan, apa yang tetap tidak bisa mereka salin?"</i> Kalau jawabannya <b>tidak ada</b> — kamu tidak punya parit, hanya fitur.
</div>
`,
          keyPoints: [
            "Model itu sendiri jarang menjadi moat kuat — keunggulan model cepat disusul.",
            "'Thin wrapper' (antarmuka tipis di atas API orang lain) mudah ditiru siapa pun.",
            "Parit yang bertahan: data eksklusif, integrasi alur kerja, switching cost, distribusi, & network effect.",
            "Uji: apa yang tetap tak bisa disalin pesaing bermodal besar bulan depan?",
          ],
          practice: [
            { type: "choice", q: "Aplikasi hanya menambahkan tampilan sederhana di atas API model pihak lain, tanpa data atau integrasi khusus. Ini disebut?", options: ["Network effect", "Thin wrapper (tanpa moat)", "Switching cost", "Data eksklusif"], answer: 1, hint: "Bisakah pesaing meniru dalam hitungan minggu?", solution: "Tanpa keunggulan lain, ini thin wrapper yang mudah ditiru." },
            { type: "choice", q: "Manakah yang paling mungkin menjadi moat bertahan bagi perusahaan AI?", options: ["Memakai model terbaru bulan ini", "Data eksklusif + AI yang tertanam dalam alur kerja pelanggan", "Tampilan yang bagus", "Harga termurah sesaat"], answer: 1, hint: "Mana yang tidak bisa dibeli/disalin cepat oleh pesaing?", solution: "Data eksklusif & integrasi workflow menciptakan switching cost yang nyata." },
          ],
          quiz: [
            {
              q: "Kenapa keunggulan 'model kami paling pintar' biasanya bukan moat kuat?",
              options: [
                "Karena pesaing dan model sumber terbuka cepat menyusul",
                "Karena pengguna tidak pernah memedulikan kualitas jawaban model",
                "Karena model paling pintar selalu jauh lebih mahal dijalankan",
                "Karena regulator melarang mengklaim keunggulan atas model lain",
              ],
              answer: 0,
              explain: "Kemajuan model bergerak sangat cepat sehingga keunggulan sulit dipertahankan.",
            },
            {
              q: "Apa itu 'thin wrapper'?",
              options: [
                "Lapisan tipis di atas API orang lain tanpa keunggulan lain",
                "Aplikasi yang sengaja dibuat ringan agar cepat dibuka di HP",
                "Model kecil hasil pemampatan dari model yang jauh lebih besar",
                "Layanan yang hanya meneruskan permintaan tanpa memungut biaya",
              ],
              answer: 0,
              explain: "Thin wrapper tak punya parit karena bisa direplikasi dengan cepat.",
            },
          ],
        },
        {
          id: "ai-ek-4",
          title: "Keusangan Model & Alokasi Modal di AI",
          duration: "12 menit",
          content: `
<p>Pelajaran penutup: bagaimana perusahaan AI sebaiknya <b>mengalokasikan modal</b>, mengingat satu sifat khas industri ini — <b>segalanya cepat usang</b>.</p>

<h3>Fundamental: "aset" AI menyusut sangat cepat</h3>
<div class="callout">
<b>Ingat konsep penyusutan:</b> mesin pabrik disusutkan 5–10 tahun. Tapi model AI yang dilatih mahal-mahal bisa <b>tertinggal dalam hitungan bulan</b>. Artinya "masa manfaat"-nya sangat pendek — investasi besar di model bisa cepat kehilangan nilai.
</div>

<h3>Dampaknya pada keputusan modal</h3>
<ul>
  <li><b>Hati-hati investasi besar-di-muka</b> pada model yang cepat usang; utamakan fleksibilitas.</li>
  <li><b>Investasi pada aset yang MENUA DENGAN BAIK</b>: data eksklusif, hubungan pelanggan, integrasi alur kerja, merek. Ini justru <b>makin bernilai</b> seiring waktu — kebalikan dari model.</li>
  <li><b>Jaga agar bisa berpindah</b> penyedia model (hindari ketergantungan total pada satu vendor — ini <b>risiko konsentrasi</b>).</li>
</ul>

<h3>Rangkuman: menilai perusahaan AI sebagai bisnis</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Alat dari jalur Akuntansi</th></tr>
  <tr><td>Apakah tiap pengguna untung?</td><td>Unit economics &amp; margin kontribusi</td></tr>
  <tr><td>Apakah proyeknya layak?</td><td>ROI &amp; titik impas</td></tr>
  <tr><td>Bangun atau beli?</td><td>CapEx vs OpEx</td></tr>
  <tr><td>Bisakah bertahan dari pesaing?</td><td>Economic moat</td></tr>
  <tr><td>Apakah modalnya dipakai bijak?</td><td>Alokasi modal</td></tr>
</table>
`,
          keyPoints: [
            "Model AI cepat usang — 'masa manfaat'-nya sangat pendek dibanding aset biasa.",
            "Hindari investasi besar-di-muka pada hal yang cepat usang; jaga fleksibilitas.",
            "Investasikan pada aset yang menua dengan baik: data eksklusif, hubungan pelanggan, integrasi, merek.",
            "Hindari ketergantungan total pada satu vendor model (risiko konsentrasi).",
          ],
          quiz: [
            {
              q: "Kenapa investasi besar pada model AI berisiko dari sisi alokasi modal?",
              options: [
                "Karena model cepat usang sehingga masa manfaatnya sangat pendek",
                "Karena biaya melatih model tidak boleh dicatat sebagai aset",
                "Karena hasil model sulit diukur sehingga ROI-nya tak bisa dihitung",
                "Karena regulator melarang mencatat model sebagai aset tak berwujud",
              ],
              answer: 0,
              explain:
                "Kemajuan cepat membuat model mahal kehilangan keunggulan dalam hitungan bulan.",
            },
            {
              q: "Manakah 'aset' AI yang justru menua dengan baik (makin bernilai)?",
              options: [
                "Data eksklusif, hubungan pelanggan, dan integrasi ke alur kerja",
                "Bobot model terbaru yang baru saja selesai dilatih ulang",
                "Perangkat keras GPU yang dibeli untuk melatih model sendiri",
                "Jumlah pengguna yang mencoba produk pada bulan pertama",
              ],
              answer: 0,
              explain:
                "Data & posisi dalam alur kerja pelanggan menumpuk nilainya seiring waktu.",
            },
          ],
        },
      ],
    },
    /* ---------------- MODUL 17: MASA DEPAN AI ---------------- */
    {
      id: "ai-arah",
      level: "Arah",
      title: "Masa Depan AI",
      summary: "Apa yang arahnya sudah terukur, apa yang benar-benar belum diketahui, dan cara membaca ramalan tentang AI.",
      lessons: [
        {
          id: "ai-arah-1",
          title: "Arah yang Sudah Terlihat",
          duration: "14 menit",
          content: `
<p>Bab ini bukan ramalan. Ini tentang hal-hal yang <b>arahnya sudah jelas dari data yang ada sekarang</b> — tren yang sudah berjalan bertahun-tahun dan tidak masuk akal berbalik mendadak.</p>

<div data-diagram="pipeline" data-stages="Biaya turun::model makin murah|Model jadi komoditas::selisihnya menyempit|Nilai pindah::ke data &amp; alur kerja|Agen bekerja::bukan sekadar menjawab" data-caption="Empat pergeseran yang sudah berlangsung, bukan ramalan"></div>

<h3>1. Biaya per pemakaian terus turun</h3>
<div class="callout">
Harga menjalankan model dengan kemampuan setara <b>turun sangat tajam</b> dari tahun ke tahun. Akibatnya bukan sekadar "lebih murah" — melainkan <b>sekelompok aplikasi yang dulu mustahil jadi masuk akal</b>.<br><br>
Hal yang dua tahun lalu terlalu mahal untuk diproses satu per satu, kini bisa dijalankan pada jutaan dokumen.
</div>
<p>Bagi kamu: jangan buru-buru menyimpulkan sebuah ide "terlalu mahal". Hitung ulang setiap beberapa bulan — angkanya berubah.</p>

<h3>2. Model menjadi komoditas</h3>
<p>Selisih kemampuan antara model terbaik dan model peringkat kedua, ketiga, dan model sumber terbuka <b>makin menyempit</b>. Yang dulu jadi keunggulan besar, kini jadi pilihan biasa.</p>

<div class="callout warn">
<b>Akibatnya bagi bisnis:</b> "model kami paling pintar" hampir tidak pernah menjadi <b>parit yang tahan lama</b> — persis yang kamu pelajari di modul <b>Ekonomi &amp; Bisnis AI</b>. Nilai bergeser ke tempat lain: <b>data yang tidak dimiliki orang lain</b>, <b>integrasi ke alur kerja</b>, dan <b>kepercayaan pengguna</b>.
</div>

<h3>3. Dari menjawab menjadi mengerjakan</h3>
<p>Pergeseran dari model yang <i>menjawab pertanyaan</i> ke <b>agen</b> yang <i>menjalankan tugas bertahap</i> sudah nyata: memakai alat, membaca berkas, memanggil layanan lain.</p>
<p>Yang belum selesai adalah <b>keandalannya</b>. Agen yang benar 95% per langkah akan gagal lebih sering dari yang dibayangkan pada tugas 10 langkah — karena kesalahannya menumpuk. Inilah masalah teknis terbesar yang sedang dikerjakan banyak orang.</p>

<h3>4. Model kecil di perangkat sendiri</h3>
<p>Model yang cukup pintar tapi cukup kecil untuk berjalan di HP atau laptop makin banyak. Ini penting karena tiga alasan: <b>privasi</b> (data tak keluar perangkat), <b>biaya</b> (tak ada tagihan per pemakaian), dan <b>bisa jalan tanpa internet</b>.</p>

<h3>5. Batas yang nyata</h3>
<table class="tbl">
  <tr><th>Batas</th><th>Kenapa penting</th></tr>
  <tr><td><b>Energi &amp; chip</b></td><td>Melatih dan menjalankan model butuh listrik dan perangkat keras yang pasokannya terbatas</td></tr>
  <tr><td><b>Data berkualitas</b></td><td>Teks berkualitas di internet tidak bertambah secepat kebutuhan model</td></tr>
  <tr><td><b>Biaya salah</b></td><td>Di bidang seperti kesehatan dan hukum, kesalahan 1% pun bisa tidak dapat diterima</td></tr>
</table>

<h3>6. Regulasi sudah tiba</h3>
<p>Aturan berbasis tingkat risiko — yang kamu pelajari di pelajaran <b>Regulasi AI</b> — sudah berlaku di beberapa wilayah dan sedang disusun di banyak negara lain, termasuk Indonesia. Arahnya jelas: <b>penggunaan berisiko tinggi akan menuntut dokumentasi, uji bias, dan pengawasan manusia</b>.</p>

<div class="callout">
<b>Benang merah keenam poin di atas:</b> semuanya adalah tren yang <b>sudah bisa diukur hari ini</b>, bukan tebakan. Itulah yang membedakannya dari pelajaran berikutnya.
</div>
`,
          keyPoints: [
            "Biaya menjalankan model terus turun tajam, sehingga ide yang dulu terlalu mahal jadi masuk akal — hitung ulang berkala.",
            "Model makin menjadi komoditas; selisih antara yang terbaik dan sisanya menyempit.",
            "Nilai bergeser ke data eksklusif, integrasi alur kerja, dan kepercayaan pengguna — bukan ke modelnya.",
            "Pergeseran dari menjawab ke mengerjakan (agen) sudah nyata; masalah terbesarnya keandalan karena kesalahan menumpuk antar-langkah.",
            "Model kecil di perangkat sendiri tumbuh karena privasi, biaya, dan bisa jalan tanpa internet.",
            "Batas nyata: pasokan energi & chip, ketersediaan data berkualitas, dan biaya kesalahan di bidang berisiko tinggi.",
            "Regulasi berbasis tingkat risiko sudah berlaku di beberapa wilayah dan sedang disusun di banyak negara lain.",
          ],
          quiz: [
            {
              q: "Kenapa 'model kami paling pintar' jarang menjadi keunggulan yang tahan lama?",
              options: [
                "Karena selisih kemampuan antar-model terus menyempit sehingga cepat disusul",
                "Karena pengguna tidak pernah bisa membedakan kualitas jawaban antar-model",
                "Karena model terpintar selalu jauh lebih mahal sehingga tidak laku dijual",
                "Karena regulator melarang perusahaan membandingkan modelnya dengan pesaing",
              ],
              answer: 0,
              explain: "Nilai bergeser ke data eksklusif, integrasi alur kerja, dan kepercayaan — bukan ke modelnya sendiri.",
            },
            {
              q: "Kenapa agen yang benar 95% per langkah tetap sering gagal pada tugas panjang?",
              options: [
                "Karena kesalahan menumpuk di sepanjang langkah sehingga peluang sukses menyusut",
                "Karena agen melupakan langkah awal begitu jendela konteksnya penuh",
                "Karena tiap langkah memerlukan izin pengguna yang sering tidak diberikan",
                "Karena biaya tiap langkah bertambah sehingga agen berhenti di tengah jalan",
              ],
              answer: 0,
              explain: "Keandalan per langkah yang tinggi belum cukup bila langkahnya banyak; inilah masalah teknis terbesar agen saat ini.",
            },
            {
              q: "Apa keuntungan utama model kecil yang berjalan di perangkat sendiri?",
              options: [
                "Data tidak keluar perangkat, tanpa biaya per pemakaian, dan bisa jalan offline",
                "Kemampuannya selalu melampaui model besar yang berjalan di pusat data",
                "Tidak memerlukan pembaruan karena modelnya sudah lengkap sejak awal",
                "Hasilnya dijamin bebas dari halusinasi karena ukurannya lebih kecil",
              ],
              answer: 0,
              explain: "Privasi, biaya, dan ketersediaan tanpa internet — bukan soal mengalahkan model besar.",
            },
          ],
        },
        {
          id: "ai-arah-2",
          title: "Yang Tidak Ada yang Tahu — dan Cara Membaca Ramalan",
          duration: "14 menit",
          content: `
<p>Pelajaran sebelumnya membahas yang arahnya terukur. Sekarang bagian yang lebih jujur: <b>hal-hal yang benar-benar tidak diketahui siapa pun</b> — termasuk oleh orang yang paling percaya diri menyatakannya.</p>

<div data-diagram="matrix" data-cells="Ramalan berani, bukti tipis|Tren terukur, arah jelas|Tebakan liar|Fakta hari ini" data-xlabel="Makin kuat buktinya" data-ylabel="Makin jauh ke depan" data-caption="Kebanyakan pernyataan tentang masa depan AI berada di kuadran kiri atas"></div>

<h3>Tiga hal yang tidak diketahui</h3>
<table class="tbl">
  <tr><th>Pertanyaan</th><th>Keadaan sebenarnya</th></tr>
  <tr><td><b>Kapan AI setara manusia?</b></td><td>Perkiraan para ahli tersebar dari beberapa tahun sampai tidak pernah. Sebaran seluas itu artinya: <b>tidak ada yang tahu</b></td></tr>
  <tr><td><b>Berapa pekerjaan yang hilang?</b></td><td>Setiap angka yang beredar adalah pemodelan dengan asumsi, bukan pengukuran</td></tr>
  <tr><td><b>Apakah tren biaya berlanjut?</b></td><td>Turunnya biaya selama ini nyata, tapi tidak ada hukum alam yang menjamin kelanjutannya</td></tr>
</table>

<h3>Pelajaran dari ramalan yang meleset</h3>
<div class="callout warn">
Dua contoh yang layak diingat:<br><br>
• <b>Mobil swakemudi.</b> Sekitar 2015–2016 banyak pihak menyatakan kendaraan tanpa sopir akan umum dalam beberapa tahun. Satu dekade kemudian, pemakaiannya masih terbatas pada wilayah tertentu.<br><br>
• <b>Radiolog.</b> Pada 2016 muncul pernyataan terkenal bahwa sebaiknya berhenti melatih radiolog karena akan digantikan AI. Nyatanya AI menjadi <b>alat bantu</b>, dan kebutuhan radiolog tidak lenyap.<br><br>
Keduanya dinyatakan oleh orang yang sangat kompeten. <b>Kompetensi tidak membuat seseorang bisa melihat masa depan.</b>
</div>

<h3>Polanya berulang: kemampuan ≠ penerapan</h3>
<p>Jarak terbesar biasanya bukan pada <b>apakah teknologinya bisa</b>, melainkan pada hal-hal yang membosankan: keandalan pada kasus langka, tanggung jawab hukum bila salah, integrasi ke sistem lama, kebiasaan kerja, dan siapa yang mau membayar.</p>
<p>Demo yang mengesankan berjarak sangat jauh dari pemakaian sehari-hari. Itulah yang berulang kali membuat ramalan meleset.</p>

<h3>🧭 Cara membaca sebuah ramalan</h3>
<table class="tbl">
  <tr><th>Tanyakan</th><th>Kenapa</th></tr>
  <tr><td><b>Siapa yang diuntungkan bila dipercaya?</b></td><td>Ramalan sering berfungsi sebagai penggalangan dana atau pemasaran</td></tr>
  <tr><td><b>Ada tenggat waktunya?</b></td><td>Ramalan tanpa tanggal tidak bisa dinilai benar atau salah</td></tr>
  <tr><td><b>Apa yang akan membuktikannya keliru?</b></td><td>Pernyataan yang tak bisa dibantah apa pun kenyataannya bukan ramalan, melainkan keyakinan</td></tr>
  <tr><td><b>Rekam jejaknya bagaimana?</b></td><td>Periksa ramalannya lima tahun lalu — apakah terjadi?</td></tr>
</table>

<div class="callout">
<b>💡 Yang berguna dilakukan apa pun yang terjadi.</b> Karena arahnya tidak pasti, pilihan paling masuk akal adalah keterampilan yang berguna di <b>semua</b> skenario:<br><br>
• <b>Pahami dasarnya</b>, bukan alatnya. Alat berganti tiap tahun; konsep loss, generalisasi, dan bias bertahan.<br>
• <b>Jadilah orang yang bisa memverifikasi.</b> Saat mesin menghasilkan banyak, yang langka adalah orang yang bisa menilai mana yang benar.<br>
• <b>Kuasai bidang nyata.</b> AI mempercepat orang yang tahu apa yang sedang ia kerjakan, dan menyesatkan yang tidak.<br>
• <b>Bangun hal yang menumpuk</b>: data, hubungan, reputasi. Ini tidak usang saat modelnya berganti.
</div>

<div class="callout warn">
<b>Penutup yang jujur:</b> siapa pun yang mengatakan ia tahu keadaan AI sepuluh tahun lagi — termasuk yang nadanya sangat yakin — sedang menebak. Yang bisa kamu kendalikan bukan arah teknologinya, melainkan <b>seberapa siap kamu menghadapi beberapa kemungkinan sekaligus</b>.
</div>
`,
          keyPoints: [
            "Sebaran perkiraan ahli yang sangat lebar tentang AI setara manusia menandakan tidak ada yang benar-benar tahu.",
            "Angka jumlah pekerjaan yang hilang adalah hasil pemodelan berasumsi, bukan pengukuran.",
            "Ramalan mobil swakemudi dan penggantian radiolog meleset meski dinyatakan orang yang kompeten.",
            "Jarak terbesar biasanya bukan pada kemampuan teknologi, melainkan keandalan, tanggung jawab hukum, integrasi, dan kebiasaan kerja.",
            "Cara menilai ramalan: siapa yang diuntungkan, adakah tenggatnya, apa yang bisa membuktikannya keliru, dan bagaimana rekam jejaknya.",
            "Strategi yang berguna di semua skenario: kuasai dasar, jadi orang yang bisa memverifikasi, kuasai bidang nyata, bangun aset yang menumpuk.",
          ],
          quiz: [
            {
              q: "Apa arti sebaran perkiraan ahli yang sangat lebar soal kapan AI setara manusia?",
              options: [
                "Bahwa sesungguhnya tidak ada yang benar-benar tahu jawabannya",
                "Bahwa rata-rata dari seluruh perkiraan itu pasti mendekati kebenaran",
                "Bahwa ahli yang perkiraannya paling cepat adalah yang paling paham",
                "Bahwa pertanyaan itu sudah terjawab tetapi hasilnya dirahasiakan",
              ],
              answer: 0,
              explain: "Sebaran yang sangat lebar justru menandakan ketiadaan dasar yang kuat untuk menjawabnya.",
            },
            {
              q: "Pelajaran utama dari ramalan 'radiolog akan digantikan AI' pada 2016?",
              options: [
                "Kompetensi seseorang tidak membuatnya mampu melihat masa depan",
                "AI ternyata tidak berguna sama sekali di bidang pencitraan medis",
                "Ramalan itu terbukti tepat, hanya saja terjadi lebih lambat",
                "Radiolog memang berkurang drastis sesuai yang diperkirakan",
              ],
              answer: 0,
              explain: "AI menjadi alat bantu, bukan pengganti. Yang dinyatakan pun orang yang sangat kompeten di bidangnya.",
            },
            {
              q: "Pertanyaan mana yang paling tajam untuk menguji sebuah ramalan?",
              options: [
                "Apa yang akan membuktikan ramalan ini keliru, dan kapan batas waktunya",
                "Berapa banyak orang terkenal yang ikut menyatakan hal serupa",
                "Seberapa yakin nada bicara orang yang menyampaikannya",
                "Seberapa besar perusahaan tempat orang itu bekerja saat ini",
              ],
              answer: 0,
              explain: "Pernyataan yang tak bisa dibantah oleh kenyataan apa pun bukan ramalan, melainkan keyakinan.",
            },
            {
              q: "Strategi mana yang berguna apa pun arah perkembangan AI nantinya?",
              options: [
                "Menguasai dasar konsepnya dan menjadi orang yang mampu memverifikasi hasil",
                "Menghafal nama dan spesifikasi seluruh model terbaru yang dirilis",
                "Menunggu sampai arahnya jelas baru mulai mempelajari bidang ini",
                "Memilih satu alat tertentu lalu menguasainya sedalam mungkin",
              ],
              answer: 0,
              explain: "Alat berganti tiap tahun; konsep dan kemampuan menilai kebenaran bertahan jauh lebih lama.",
            },
          ],
        },
      ],
    },
  ],
};
