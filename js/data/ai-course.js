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
    /* ---------------- LEVEL DASAR (MULAI DARI NOL) ---------------- */
    {
      id: "ai-dasar",
      level: "Dasar",
      title: "Mulai dari Nol",
      summary: "Sebelum AI: pahami data, pola, peluang, dan algoritma dengan bahasa sehari-hari.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu sudah punya fondasi: <b>data</b> (bahan), <b>pola</b> (yang dicari), <b>peluang</b> (cara AI menjawab), dan <b>algoritma</b> (langkah-langkah). Sekarang lanjut ke modul <b>Pemula</b> — semua akan terasa lebih mudah!
</div>
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

    /* ---------------- LEVEL PEMULA ---------------- */
    {
      id: "ai-pemula",
      level: "Pemula",
      title: "Dasar-Dasar AI",
      summary: "Kenalan dengan AI: apa, mengapa, dan di mana ia digunakan.",
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

    /* ---------------- LEVEL MENENGAH ---------------- */
    {
      id: "ai-menengah",
      level: "Menengah",
      title: "Machine Learning & Neural Network",
      summary: "Memahami jenis pembelajaran mesin dan otak buatan.",
      lessons: [
        {
          id: "ai-m-1",
          title: "Tiga Gaya Belajar Mesin",
          duration: "10 menit",
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
`,
          keyPoints: [
            "Supervised: belajar dari data ber-label.",
            "Unsupervised: menemukan pola tanpa label.",
            "Reinforcement: belajar dari reward & punishment.",
            "Klasifikasi menebak kategori; regresi menebak angka.",
          ],
          practice: [
            { type: "choice", q: "Mengelompokkan pelanggan jadi beberapa segmen TANPA label yang sudah ada termasuk?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"], answer: 1, hint: "Adakah jawaban benar/label yang diberikan sejak awal?", solution: "Tanpa label & mencari pola sendiri = unsupervised (clustering)." },
            { type: "choice", q: "Robot belajar berjalan lewat coba-coba dengan hadiah & hukuman termasuk?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning"], answer: 2, hint: "Belajar dari reward & punishment atas aksinya.", solution: "Belajar dari hadiah/hukuman = reinforcement learning." },
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

    /* ---------------- LEVEL MAHIR ---------------- */
    {
      id: "ai-mahir",
      level: "Mahir",
      title: "AI Generatif, LLM & Penerapan",
      summary: "Memahami ChatGPT, prompt engineering, etika, dan membangun aplikasi AI.",
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
      ],
    },

    /* ---------------- LEVEL PROYEK (PRODUKSI) ---------------- */
    {
      id: "ai-proyek",
      level: "Proyek",
      title: "Proyek Produksi AI",
      summary: "Praktik nyata: bangun chatbot, sistem RAG, AI tutor, dan siapkan ke produksi.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini paham alur lengkap membangun produk AI nyata: dari panggilan API dasar, RAG, AI tutor, sampai pertimbangan keamanan, biaya, dan evaluasi. Langkah berikutnya: bangun proyek kecilmu sendiri!
</div>
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
      ],
    },

    /* ---------------- LEVEL FUNDAMENTAL ---------------- */
    {
      id: "ai-fundamental",
      level: "Fundamental",
      title: "Fundamental & Metrik AI",
      summary: "Dari akar: cara mengukur AI, matematika belajar (loss & gradient), sumber daya, dan generalisasi.",
      lessons: [
        {
          id: "ai-fund-1",
          title: "Mengukur Kualitas AI (Akurasi, Precision, Recall)",
          duration: "12 menit",
          content: `
<p>Bagaimana kita tahu sebuah model AI itu "bagus"? Ternyata angka <b>akurasi</b> saja sering <b>menyesatkan</b>.</p>

<div data-diagram="vs" data-left="PRECISION::Dari yang di-alarm positif::berapa % benar?" data-right="RECALL::Dari yang benar positif::berapa % tertangkap?" data-caption="Precision vs Recall"></div>


<div class="callout warn">
<b>Jebakan akurasi:</b> Untuk mendeteksi penyakit langka (1 dari 100 orang), model yang <b>selalu</b> menebak "sehat" mendapat akurasi <b>99%</b> — padahal tak berguna sama sekali (tak pernah menangkap yang sakit).
</div>

<h3>Empat kemungkinan (confusion matrix)</h3>
<ul>
  <li><b>TP</b> (True Positive): diprediksi positif, memang benar.</li>
  <li><b>FP</b> (False Positive): diprediksi positif, ternyata salah (alarm palsu).</li>
  <li><b>FN</b> (False Negative): diprediksi negatif, padahal positif (terlewat).</li>
  <li><b>TN</b> (True Negative): diprediksi negatif, memang benar.</li>
</ul>

<h3>Dua metrik kunci</h3>
<table class="tbl">
  <tr><th>Metrik</th><th>Rumus</th><th>Menjawab</th></tr>
  <tr><td><b>Precision</b></td><td>TP ÷ (TP + FP)</td><td>Dari yang di-alarm positif, berapa % benar? (bisa dipercaya?)</td></tr>
  <tr><td><b>Recall</b></td><td>TP ÷ (TP + FN)</td><td>Dari yang benar-benar positif, berapa % tertangkap? (selengkap apa?)</td></tr>
</table>

<div class="callout">
<b>F1-score</b> = penyeimbang precision & recall dalam satu angka. Ada <b>trade-off</b>: filter spam terlalu galak (recall tinggi) bisa membuang email penting (precision turun).
</div>

<h3>💥 Dampak</h3>
<p>Memilih metrik yang salah menghasilkan produk buruk. Untuk deteksi penipuan, <b>recall</b> penting (jangan sampai lolos). Untuk rekomendasi, <b>precision</b> penting (jangan salah sodor). Metrik menentukan arah pengembangan.</p>
`,
          keyPoints: [
            "Akurasi bisa menyesatkan pada data timpang (imbalanced).",
            "Precision = TP ÷ (TP+FP): seberapa bisa dipercaya alarm positifnya.",
            "Recall = TP ÷ (TP+FN): seberapa lengkap menangkap yang benar-benar positif.",
            "Dampak: metrik yang tepat mengarahkan produk; salah metrik = produk buruk.",
          ],
          practice: [
            { type: "number", q: "Model menandai 100 email sebagai spam; 90 benar spam, 10 ternyata bukan. Berapa precision-nya? (%)", answer: 90, tol: 0.5, hint: "Precision = TP ÷ (TP+FP) = 90 ÷ 100.", solution: "90 ÷ (90+10) × 100% = 90%." },
            { type: "number", q: "Total email spam sebenarnya 120; model menangkap 90. Berapa recall-nya? (%)", answer: 75, tol: 0.5, hint: "Recall = TP ÷ (TP+FN) = 90 ÷ 120.", solution: "90 ÷ 120 × 100% = 75%." },
          ],
          quiz: [
            {
              q: "Mengapa akurasi 99% bisa menyesatkan?",
              options: [
                "Pada data timpang, menebak kelas mayoritas terus pun terlihat akurat",
                "Karena akurasi hanya dihitung dari data latih, bukan dari data uji",
                "Karena akurasi selalu dibulatkan ke atas oleh pustaka penghitungnya",
                "Karena 1% sisanya biasanya berisi data yang rusak atau salah label",
              ],
              answer: 0,
              explain:
                "Pada kasus langka, model yang mengabaikan kelas minoritas tetap terlihat akurat.",
            },
            {
              q: "Precision menjawab pertanyaan?",
              options: [
                "Dari yang ditandai positif oleh model, berapa persen yang benar",
                "Dari seluruh kasus positif yang ada, berapa persen yang tertangkap",
                "Dari seluruh tebakan model, berapa persen yang seluruhnya benar",
                "Seberapa cepat model menghasilkan tebakan untuk satu data baru",
              ],
              answer: 0,
              explain: "Precision = TP ÷ (TP+FP), mengukur keandalan prediksi positif.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini paham fondasi AI dari akarnya: cara mengukurnya, matematika belajarnya, sumber dayanya, dan mengapa generalisasi adalah tujuan sejati.
</div>
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

    /* ---------------- LEVEL LANJUTAN (EKOSISTEM & TREN) ---------------- */
    {
      id: "ai-lanjutan",
      level: "Lanjutan",
      title: "Ekosistem & Tren AI",
      summary: "Alat & pola modern: multi-agent (CrewAI), vector database, fine-tuning vs RAG, dan lanskap tools.",
      lessons: [
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
        {
          id: "ai-adv-2",
          title: "Vector Database — Infrastruktur RAG",
          duration: "11 menit",
          content: `
<p>Di modul fundamental kamu belajar RAG mencari dokumen lewat <b>kemiripan vektor</b>. Untuk jutaan dokumen, pencarian itu butuh mesin khusus: <b>vector database</b>.</p>

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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini mengenal ekosistem AI modern: multi-agent (CrewAI), vector database, kapan fine-tuning/RAG/prompting, dan lanskap tools. Bekal untuk memilih alat yang tepat saat membangun.
</div>
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
      ],
    },

    /* ---------------- LEVEL TERAPAN (GENERATIF & PRODUKSI) ---------------- */
    {
      id: "ai-terapan",
      level: "Terapan",
      title: "AI Generatif & Terapan",
      summary: "Topik penting yang melengkapi: AI gambar (diffusion), RLHF & alignment, sistem rekomendasi, dan MLOps.",
      lessons: [
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
          id: "ai-app-2",
          title: "RLHF & Alignment (Membuat AI Membantu & Aman)",
          duration: "12 menit",
          content: `
<p>Ingat: LLM mentah hanya <b>menebak kata berikutnya</b> dari internet. Itu <b>tidak otomatis</b> membuatnya membantu, sopan, atau aman. Bagaimana ChatGPT/Claude jadi asisten yang baik? Lewat <b>RLHF</b> dan <b>alignment</b>.</p>

<div data-diagram="cycle" data-steps="Model menjawab|Manusia memberi nilai|Model penilai dilatih|Model utama diperbaiki" data-center="RLHF" data-caption="RLHF: manusia tidak menulis jawabannya, hanya menilai mana yang lebih baik"></div>


<h3>RLHF (Reinforcement Learning from Human Feedback)</h3>
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini mengenal AI generatif gambar, cara AI dibuat aman (RLHF & alignment), sistem rekomendasi, dan menjalankan AI di produksi (MLOps) — melengkapi pemahamanmu dari konsep sampai penerapan nyata.
</div>
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
      ],
    },

    /* ---------------- LEVEL PENDALAMAN (ML KLASIK) ---------------- */
    {
      id: "ai-pendalaman",
      level: "Pendalaman",
      title: "Machine Learning Klasik",
      summary: "Selain neural network: Decision Tree, Random Forest, k-NN & clustering — sering lebih pas untuk bisnis.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini mengenal keluarga ML klasik: Decision Tree, Random Forest, k-NN, dan k-Means clustering — pelengkap penting di samping neural network.
</div>
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
      ],
    },

    /* ---------------- LEVEL EKONOMI (BISNIS AI) ---------------- */
    {
      id: "ai-ekonomi",
      level: "Ekonomi",
      title: "Ekonomi & Bisnis AI",
      summary: "Menilai AI sebagai bisnis: unit economics inferensi, ROI & build-vs-buy, moat di era AI, & keusangan model.",
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu baru saja <b>menyatukan dua jalur</b>: kemampuan teknis AI + kerangka bisnis akuntansi. Inilah kombinasi yang membedakan orang yang sekadar bisa membuat AI dengan orang yang bisa membangun <b>bisnis AI yang bertahan</b>.
</div>
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

    /* ---------------- LEVEL PELENGKAP ---------------- */
    {
      id: "ai-pelengkap",
      level: "Pelengkap",
      title: "Suara, Peramalan & Regulasi AI",
      summary: "Melengkapi peta AI: suara & multimodal, peramalan deret waktu, dan regulasi AI.",
      lessons: [
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
      ],
    },

    /* ---------------- LEVEL PERKAKAS ---------------- */
    {
      id: "ai-tools",
      level: "Perkakas",
      title: "Alat & Bahasa Pemrograman AI",
      summary: "Alat yang benar-benar dipakai praktisi: kenapa Python, pustaka wajib (NumPy, pandas, scikit-learn), PyTorch & Hugging Face, dan cara menyiapkan komputermu.",
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
<p>Semua model ML klasik yang kamu pelajari di modul <i>Machine Learning Klasik</i> — Decision Tree, Random Forest, k-NN, clustering — sudah tersedia jadi di <b>scikit-learn</b>, dengan pola pemakaian yang selalu sama:</p>

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
          id: "ai-tl-5",
          title: "scikit-learn Mendalam — Alur Kerja yang Sebenarnya",
          duration: "16 menit",
          content: `
<p>Di pelajaran sebelumnya kamu melihat pola tiga langkah scikit-learn: <b>pilih model → fit → predict</b>. Itu benar, tapi itu baru <b>bagian tengah</b>. Alur kerja sesungguhnya punya langkah-langkah sebelum dan sesudahnya — dan di situlah pemula paling sering tersandung.</p>

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
          id: "ai-tl-8",
          title: "Peta Pustaka Lain — Apa Lagi yang Perlu Diketahui",
          duration: "13 menit",
          content: `
<p>Sampai di sini kamu sudah mengenal pustaka inti. Tapi ekosistem Python untuk AI sangat luas, dan pemula sering bingung <b>apa lagi yang ada di luar sana</b>. Pelajaran ini memberi <b>peta</b> — bukan untuk dihafal, tapi agar kamu tahu ke mana mencari saat membutuhkannya.</p>

<div data-diagram="network" data-center="Python untuk AI" data-nodes="Data &amp; model|Visualisasi|Teks &amp; gambar|Berbagi hasil|Pemantauan" data-caption="Lima kelompok kebutuhan — tiap kelompok punya pustaka andalannya"></div>

<h3>1. Model yang lebih kuat untuk data tabel</h3>
<table class="tbl">
  <tr><th>Pustaka</th><th>Untuk apa</th></tr>
  <tr><td><b>XGBoost</b></td><td>Boosting — sering menjadi <b>juara</b> pada data tabel. Sudah kamu kenal konsepnya di modul Arsitektur</td></tr>
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
<b>Penutup modul Perkakas.</b> Kamu kini tahu bahasa apa yang dipakai, pustaka mana untuk apa, cara kerja scikit-learn yang lengkap, cara melihat data sebelum memodelkannya, kapan memilih Keras atau PyTorch, dan ke mana mencari saat kebutuhanmu di luar itu semua. Langkah berikutnya bukan membaca lagi — melainkan <b>membuka Colab dan mencobanya dengan datamu sendiri</b>.
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

    /* ---------------- LEVEL MATEMATIKA ---------------- */
    {
      id: "ai-matematika",
      level: "Matematika",
      title: "Matematika di Balik AI",
      summary: "Rumus yang benar-benar dipakai: vektor & dot product, turunan & gradient descent, fungsi aktivasi & loss, probabilitas.",
      lessons: [
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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini melihat mesin matematis di balik AI: <b>vektor</b> (mewakili makna), <b>turunan</b> (cara belajar), <b>aktivasi &amp; loss</b> (cara berpikir &amp; menilai diri), serta <b>probabilitas</b> (cara menjawab).
</div>
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

    /* ---------------- LEVEL ARSITEKTUR (ML, DL & GEN AI MENDALAM) ---------------- */
    {
      id: "ai-arsitektur",
      level: "Arsitektur",
      title: "Arsitektur ML, Deep Learning & Gen AI",
      summary: "Menyelam ke mesinnya: persiapan data, melatih model dengan benar, boosting, CNN, Transformer, dan cara kerja AI generatif.",
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
        {
          id: "ai-ars-6",
          title: "Gen AI Mendalam: GAN, Diffusion & LLM",
          duration: "14 menit",
          content: `
<p>Penutup modul: membandingkan <b>tiga keluarga besar</b> AI generatif, dan trik yang membuatnya bisa dijalankan.</p>

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

<div class="callout">
<b>Selamat! 🎓</b> Kamu kini memahami arsitektur di balik AI modern: dari menyiapkan data, melatih dengan benar, boosting, CNN untuk gambar, Transformer untuk teks, sampai cara kerja AI generatif — lengkap dengan trik yang membuatnya bisa dipakai di dunia nyata.
</div>
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
      ],
    },
    /* ---------------- LEVEL ARAH (MASA DEPAN) ---------------- */
    {
      id: "ai-arah",
      level: "Arah",
      title: "Masa Depan AI",
      summary: "Memisahkan yang arahnya sudah terlihat dari yang benar-benar tak diketahui siapa pun — dan cara membaca ramalan tanpa tertipu.",
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
<p>Aturan berbasis tingkat risiko — yang kamu pelajari di modul <b>Regulasi AI</b> — sudah berlaku di beberapa wilayah dan sedang disusun di banyak negara lain, termasuk Indonesia. Arahnya jelas: <b>penggunaan berisiko tinggi akan menuntut dokumentasi, uji bias, dan pengawasan manusia</b>.</p>

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
