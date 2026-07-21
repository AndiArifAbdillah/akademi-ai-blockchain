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
                "AI lebih cepat menghitung angka",
                "AI belajar pola dari data, bukan hanya mengikuti aturan tetap",
                "AI tidak butuh komputer",
                "AI selalu benar 100%",
              ],
              answer: 1,
              explain:
                "Inti AI adalah belajar dari data untuk menemukan pola, sehingga bisa menangani masalah yang sulit dibuat aturannya.",
            },
            {
              q: "Manakah contoh penggunaan AI sehari-hari?",
              options: [
                "Rekomendasi video di YouTube",
                "Menyalakan lampu dengan saklar",
                "Menghitung 2 + 2 di kalkulator",
                "Membuka pintu dengan kunci",
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
                "Ujian kecepatan komputer",
                "Uji apakah mesin bisa meniru percakapan manusia",
                "Tes baterai robot",
                "Lomba catur antar komputer",
              ],
              answer: 1,
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
                "Komputer cepat panas",
                "Data buruk menghasilkan AI yang buruk",
                "AI butuh banyak listrik",
                "Sampah harus didaur ulang",
              ],
              answer: 1,
              explain:
                "Jika data latih buruk/bias, prediksi AI ikut buruk/bias.",
            },
            {
              q: "Apa fungsi 'label' pada data?",
              options: [
                "Mempercantik data",
                "Memberi nama file",
                "Memberi jawaban benar agar AI bisa belajar",
                "Mengurangi ukuran data",
              ],
              answer: 2,
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
                "Kecepatan internet",
                "Seberapa jauh tebakan AI meleset dari jawaban benar",
                "Jumlah data yang hilang",
                "Biaya listrik",
              ],
              answer: 1,
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
                "Datanya rahasia",
                "Jaringan punya banyak lapisan tersembunyi",
                "Komputernya mahal",
                "Belajarnya lama",
              ],
              answer: 1,
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
                "Seperti mata manusia",
                "Sebagai deretan angka (nilai piksel)",
                "Sebagai suara",
                "Tidak bisa sama sekali",
              ],
              answer: 1,
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
                "Untuk melatih model",
                "Untuk menguji model pada data yang belum pernah dilihat",
                "Untuk menyimpan cadangan",
                "Untuk mempercepat training",
              ],
              answer: 1,
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
                "Mencari di Google",
                "Menebak token/kata berikutnya yang paling masuk akal",
                "Menyimpan semua fakta dunia",
                "Menghitung angka",
              ],
              answer: 1,
              explain:
                "LLM dilatih memprediksi token berikutnya; dari sinilah kemampuannya muncul.",
            },
            {
              q: "Apa itu 'halusinasi' pada LLM?",
              options: [
                "Komputer rusak",
                "LLM mengarang informasi yang terdengar benar padahal salah",
                "Layar berkedip",
                "Model terlalu lambat",
              ],
              answer: 1,
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
                "'Tulis sesuatu'",
                "'Kamu editor. Ringkas teks ini jadi 3 poin untuk pemula'",
                "'Bantu'",
                "'Ekonomi'",
              ],
              answer: 1,
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
                "Melatih model dari nol",
                "Jembatan agar aplikasi bisa memakai model AI lewat kode",
                "Menyimpan gambar",
                "Mempercepat internet",
              ],
              answer: 1,
              explain:
                "API menghubungkan aplikasimu dengan model AI yang sudah ada.",
            },
            {
              q: "Tujuan utama RAG adalah?",
              options: [
                "Membuat AI lebih lambat",
                "Menjawab berdasarkan data/dokumen milikmu agar lebih akurat",
                "Mengganti internet",
                "Menghapus database",
              ],
              answer: 1,
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
                "Karena komputer jahat",
                "Karena mewarisi prasangka dari data latihnya",
                "Karena internet lambat",
                "Karena kekurangan listrik",
              ],
              answer: 1,
              explain:
                "Bias dalam data akan dipelajari & diperkuat oleh model.",
            },
            {
              q: "Apa itu 'AI Agent'?",
              options: [
                "Penjual robot",
                "AI yang tak hanya menjawab tapi melakukan tugas secara bertahap",
                "Antivirus",
                "Nama perusahaan",
              ],
              answer: 1,
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
                "Di kode frontend agar cepat",
                "Di backend (server) milikmu, tidak pernah di browser",
                "Di dalam URL",
                "Di komentar kode",
              ],
              answer: 1,
              explain:
                "API key di frontend bisa dicuri siapa saja. Selalu simpan & panggil dari backend.",
            },
            {
              q: "Mengapa kita mengirim seluruh riwayat percakapan tiap panggilan?",
              options: [
                "Agar lebih mahal",
                "Karena API bersifat stateless (tidak mengingat percakapan sebelumnya)",
                "Agar lebih lambat",
                "Tidak perlu, API ingat sendiri",
              ],
              answer: 1,
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
                "Mengecilkan ukuran file",
                "Mengubah teks jadi vektor angka agar kemiripan makna bisa dicari",
                "Mengenkripsi dokumen",
                "Menerjemahkan bahasa",
              ],
              answer: 1,
              explain:
                "Embedding memetakan makna teks ke vektor sehingga potongan mirip bisa ditemukan.",
            },
            {
              q: "Mengapa RAG mengurangi halusinasi?",
              options: [
                "Karena AI jadi lebih lambat",
                "Karena AI menjawab berdasarkan dokumen relevan yang disodorkan, bukan tebakan ingatan",
                "Karena memakai model lebih kecil",
                "Karena mematikan internet",
              ],
              answer: 1,
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
                "Warna, font, gambar, suara",
                "Persona, pengetahuan (RAG), memori, dan batasan (guardrails)",
                "CPU, RAM, disk, jaringan",
                "Harga, diskon, promo, iklan",
              ],
              answer: 1,
              explain:
                "Persona + pengetahuan + memori + guardrails adalah kerangka umum produk AI.",
            },
            {
              q: "Apa fungsi 'guardrails' pada AI Tutor?",
              options: [
                "Mempercepat jawaban",
                "Membatasi perilaku (mis. tetap pada topik, tidak langsung beri jawaban kuis)",
                "Menyimpan password",
                "Menambah warna",
              ],
              answer: 1,
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
                "Melatih model dari nol",
                "Menyediakan blok bangunan siap pakai untuk membangun aplikasi LLM lebih cepat",
                "Menambang Bitcoin",
                "Mengedit gambar",
              ],
              answer: 1,
              explain:
                "LangChain memberi komponen (chain, memory, retriever, agent) agar pengembangan lebih cepat.",
            },
            {
              q: "Kapan memakai SDK langsung mungkin lebih baik daripada LangChain?",
              options: [
                "Untuk aplikasi sederhana yang tak butuh banyak orkestrasi",
                "Selalu untuk semua kasus",
                "Hanya untuk blockchain",
                "Tidak pernah",
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
                "Menyuntik vitamin ke komputer",
                "Pengguna menyisipkan instruksi jahat untuk membajak perilaku AI",
                "Mempercepat prompt",
                "Menyimpan prompt di database",
              ],
              answer: 1,
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
                "Panjang dokumen",
                "Seberapa mirip makna dua vektor (skor 0–1)",
                "Jumlah kata",
                "Harga API",
              ],
              answer: 1,
              explain:
                "Cosine similarity menilai kesamaan arah vektor = kemiripan makna teks.",
            },
            {
              q: "Dokumen mana yang dipilih RAG sebagai konteks?",
              options: [
                "Yang paling panjang",
                "Yang skor kemiripannya paling tinggi dengan pertanyaan",
                "Yang paling baru",
                "Yang dipilih acak",
              ],
              answer: 1,
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
                "Karena terlalu rendah",
                "Pada data timpang, menebak kelas mayoritas terus bisa 'akurat' tapi tak berguna",
                "Karena akurasi selalu salah",
                "Karena butuh internet",
              ],
              answer: 1,
              explain:
                "Pada kasus langka, model yang mengabaikan kelas minoritas tetap terlihat akurat.",
            },
            {
              q: "Precision menjawab pertanyaan?",
              options: [
                "Berapa lama training",
                "Dari yang diprediksi positif, berapa % yang benar",
                "Berapa parameter model",
                "Harga API",
              ],
              answer: 1,
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
                "Memperbesar loss",
                "Meminimalkan loss dengan melangkah berlawanan arah gradien",
                "Menambah parameter",
                "Mempercepat internet",
              ],
              answer: 1,
              explain: "Ia menuruni permukaan loss menuju nilai terkecil.",
            },
            {
              q: "Apa efek learning rate yang terlalu besar?",
              options: [
                "Training lebih akurat",
                "Langkah melompati titik minimum (bisa gagal konvergen)",
                "Tidak ada efek",
                "Loss selalu nol",
              ],
              answer: 1,
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
                "Koin crypto",
                "Potongan kata yang menjadi dasar cara berpikir & penagihan biaya model",
                "Parameter model",
                "Kabel jaringan",
              ],
              answer: 1,
              explain: "Model memproses & ditagih per token (input + output).",
            },
            {
              q: "Apa itu 'context window'?",
              options: [
                "Jendela aplikasi",
                "Berapa banyak token yang bisa 'diingat' model sekaligus",
                "Kecepatan internet",
                "Jumlah parameter",
              ],
              answer: 1,
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
              options: ["Underfitting", "Overfitting (variance tinggi)", "Generalisasi", "Bias tinggi"],
              answer: 1,
              explain: "Itu overfitting — model menghafal, gagal menggeneralisasi.",
            },
            {
              q: "Senjata utama melawan overfitting?",
              options: [
                "Mengurangi data",
                "Data latih yang banyak & berkualitas/beragam",
                "Memperbesar learning rate",
                "Menghapus evaluasi",
              ],
              answer: 1,
              explain: "Data beragam menyulitkan model sekadar menghafal, mendorong generalisasi.",
            },
          ],
        },
      ],
    },
  ],
};
