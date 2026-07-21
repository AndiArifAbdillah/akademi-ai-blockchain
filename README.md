# 🎓 Akademi AI & Blockchain

Platform belajar **Kecerdasan Buatan (AI)** dan **Crypto & Blockchain** dari **dasar hingga mahir**, dalam bahasa Indonesia yang mudah dipahami.

Dibuat sebagai aplikasi web mandiri — **tidak perlu instalasi, internet, atau akun apa pun**. Cukup buka satu file.

---

## 🚀 Cara Menjalankan

**Paling mudah:** klik dua kali file `index.html`, akan terbuka di browser (Chrome, Edge, Firefox).

Selesai. Kemajuan belajarmu otomatis tersimpan di browser.

> 💡 *Opsional* — agar lebih mulus, kamu bisa menjalankannya lewat server lokal:
> ```bash
> # Jika punya Python:
> python -m http.server 8000
> # lalu buka http://localhost:8000
> ```

---

## 📚 Apa yang Dipelajari

### 🤖 Jalur AI
| Level | Topik |
|-------|-------|
| **Pemula** | Apa itu AI • Sejarah & jenis AI • Data • Cara AI belajar |
| **Menengah** | Gaya belajar mesin • Neural network • NLP & Computer Vision • Overfitting |
| **Mahir** | Cara kerja ChatGPT (LLM) • Prompt engineering • Membangun aplikasi AI (API & RAG) • Etika & masa depan |

### ⛓️ Jalur Crypto & Blockchain
| Level | Topik |
|-------|-------|
| **Pemula** | Apa itu blockchain • Bitcoin • Wallet & kunci • Cara transaksi diproses |
| **Menengah** | Ethereum • Smart contract • Token & NFT • DeFi |
| **Mahir** | Konsensus (PoW vs PoS) • Solidity • Web3 & DApp • Keamanan & scam |

### 📊 Jalur Akuntansi untuk Bisnis
| Level | Topik |
|-------|-------|
| **Pemula** | Apa itu akuntansi • Persamaan dasar • Lima jenis akun • Debit & kredit |
| **Menengah** | Jurnal & buku besar • Siklus akuntansi • Laporan laba rugi • Neraca & arus kas |
| **Mahir** | Akrual vs kas • Rasio keuangan • Penyusutan & persediaan • Keputusan bisnis (break-even) |
| **Proyek** | Baca laporan perusahaan • Analisis saham • "Laporan" proyek crypto • Kelola keuangan • Bangun & nilai bisnis |

### 🛠️ Level Proyek (Produksi) di tiap jalur
| Jalur | Topik proyek |
|-------|-------|
| **AI** | Chatbot dengan API Claude • Membangun RAG • AI Tutor • LangChain • Keamanan/biaya/evaluasi produksi |
| **Blockchain** | Setup dompet & testnet • Tulis & deploy smart contract (Remix) • Hubungkan web (ethers.js) • Use-case & keamanan |

### 🧬 Level Fundamental (dari akar) di tiap jalur
| Jalur | Topik fundamental |
|-------|-------|
| **AI** | Mengukur AI (akurasi/precision/recall) • Loss & gradient descent • Parameter/token/compute • Bias-variance |
| **Blockchain** | Fungsi hash • Kriptografi kunci publik • Merkle tree • Ekonomi gas & fee |
| **Akuntansi** | Net Profit • Free Cash Flow • ROI • ROE/ROA/ROIC • RAB • Metrik lain + "ROTI" — **beserta dampaknya ke perusahaan** |

Total **67 pelajaran** (termasuk studi kasus & fundamental metrik) + kuis di setiap pelajaran + **glosarium** 75+ istilah.

---

## ✨ Fitur

- ✅ Materi bertingkat: **Pemula → Menengah → Mahir**
- 🎨 **Diagram visual** & **demo interaktif yang bisa dicoba langsung**, antara lain:
  - 🧠 Jaringan saraf yang menyala saat kamu klik input (kucing/bukan)
  - 📉 Animasi AI belajar mengurangi kesalahan (regresi garis)
  - 🔢 Grid piksel — gambar bentuk, lihat cara komputer "melihat" sebagai angka
  - 💬 Penebak kata berikutnya (cara kerja ChatGPT/LLM)
  - 🔗 Blockchain interaktif — ubah data 1 blok, lihat seluruh rantai rusak & tambang ulang
  - #️⃣ Demo hash, alur transaksi, diagram kunci publik/privat, dan PoW vs PoS
  - ⚖️ Simulator persamaan akuntansi (Aset = Kewajiban + Ekuitas) yang selalu seimbang
  - 🎯 Latihan Debit/Kredit & 🧮 kalkulator laba rugi interaktif
- 🧪 **Playground Kode** — tulis & jalankan JavaScript langsung di browser (offline), dengan contoh siap pakai (RAG, hash blockchain, hitung laba, dll.)
- 🔎 **Pencarian seluruh materi** — cari ke semua pelajaran + glosarium sekaligus, dengan cuplikan & tautan langsung
- 🔊 **Tombol "Dengarkan"** — materi dibacakan dengan suara (offline, via browser)
- ✍️ **Latihan praktik** — soal hitung & penerapan konsep dengan petunjuk + pembahasan
- 🃏 **Mode Flashcard** — ulasan cepat (ratusan kartu dari kuis + glosarium), bisa difilter & diacak
- 📝 **Kuis interaktif** dengan penjelasan jawaban di tiap pelajaran
- 💾 **Sistem simpanan kemajuan**:
  - Otomatis menyimpan pelajaran yang sudah selesai (tanda ✓ & persentase)
  - Tombol **Lanjutkan Belajar** yang langsung membawa ke pelajaran berikutnya yang belum selesai
  - Penanda **pelajaran terakhir dibuka** ("🕘 Terakhir belajar ...")
  - **Cadangkan & Pulihkan** — unduh file simpanan, lalu muat di browser/komputer lain
- 📖 **Glosarium** istilah yang bisa dicari
- 🌗 **Mode terang/gelap** otomatis mengikuti perangkat
- 📱 Tampilan **responsif** (HP & komputer)

---

## 🗂️ Struktur Proyek

```
Platform belajar AI & Blockchain/
├── index.html                 ← buka file ini
├── css/
│   └── style.css              ← tampilan
├── js/
│   ├── app.js                 ← logika aplikasi (navigasi, kuis, progres)
│   ├── visuals.js             ← diagram SVG + demo interaktif
│   └── data/
│       ├── ai-course.js       ← materi kursus AI
│       ├── blockchain-course.js ← materi kursus Blockchain
│       └── accounting-course.js ← materi kursus Akuntansi
└── README.md
```

### Menambah visual/demo ke pelajaran
Cukup taruh penanda di dalam `content` materi, lalu definisikan isinya di `js/visuals.js`:

```html
<div data-diagram="nama-diagram"></div>   <!-- diagram SVG statis -->
<div data-demo="nama-demo"></div>          <!-- demo interaktif -->
```

## ➕ Menambah / Mengubah Materi

Semua materi ada di folder `js/data/`. Untuk menambah pelajaran baru, salin pola objek pelajaran yang sudah ada:

```js
{
  id: "ai-p-5",            // ID unik
  title: "Judul Pelajaran",
  duration: "8 menit",
  content: `<p>Isi materi (HTML sederhana)...</p>`,
  keyPoints: ["Poin 1", "Poin 2"],
  quiz: [
    { q: "Pertanyaan?", options: ["A", "B", "C"], answer: 1, explain: "Penjelasan." }
  ]
}
```

Simpan file, refresh browser — pelajaran baru langsung muncul.

---

> ⚠️ **Catatan:** Materi crypto bersifat **edukasi, bukan saran finansial/investasi**. Aset kripto sangat berisiko.

Selamat belajar! 🚀
