---
description: 
---

# Product Requirement Document (PRD) & Blueprint Website Jasa Multi-Kategori

## 1. Project Overview & Objective
Membangun web landing page interaktif multi-kategori (Dokumen/Akademik, Desain Grafis, Web Development) dengan orientasi *sales-driven conversion*. Website bertujuan menyederhanakan katalog jasa yang padat menjadi alur psikologis yang menarik, transparan, dan minim friksi bagi calon klien (mahasiswa dan pelaku usaha/UMKM).

---

## 2. Information Architecture & Sitemap
*   **Root / Single Page:** `index.html` (Alur konversi komplit)
*   **Sub-page:** `/showcase` (Galeri portofolio & sampel karya interaktif)
*   **Sticky Navbar:** Tetap melayang (*backdrop-blur*) saat pengguna melakukan *scroll*.

---

## 3. Navbar Specifications
*   **Left Section:** Logo/Brand name + Status Indicator Badge (`🟢 Slot Pengerjaan Dibuka / Express Siaga`).
*   **Center Section (Anchor Links):**
    *   `#paket-hemat` (Paket Bundling)
    *   `#katalog-jasa` (Layanan Satuan)
    *   `#showcase-teaser` (Pratinjau Hasil Kerja)
    *   `#cara-order` (3 Langkah Pemesanan)
    *   `#faq` (FAQ & Keamanan)
*   **Right Section:** Direct CTA Button: `Konsultasi Gratis via WA` (Link dinamis ke WhatsApp).
*   **Mobile View:** Responsive hamburger menu, CTA WA tetap disematkan (*floating bottom action bar*).

---

## 4. Section-by-Section Wireframe & Content Strategy

### Section 1: Hero Section (The Hook & Pain Points)
*   **Headline:** "Bereskan Tugas Akhir, Desain, dan Website Anda Tepat Waktu Tanpa Stres Revisi."
*   **Sub-headline:** "Layanan terpadu untuk mahasiswa dan pelaku usaha: pengerjaan cepat, rapi sesuai standar pedoman, privasi terlindungi, dan bergaransi."
*   **CTA Group:**
    *   Primary: `[Lihat Paket Hemat]` (Smooth scroll ke `#paket-hemat`).
    *   Secondary: `[Konsultasi Kustom via WA]` (Arahkan langsung ke chat).
*   **Trust Badges (Micro-copy):** "⚡ Tersedia Opsi Kilat <24 Jam" | "🔒 Jaminan File Rahasia & Dihapus Pasca Project" | "🛡️ Garansi Revisi Minor".

---

### Section 2: Core Offers (Paket Bundling Hemat)
*Menampilkan 4 paket bundling utama di atas sebelum layanan satuan untuk mendorong nilai transaksi rata-rata (AOV).*

| Nama Paket | Value Proposition & Deskripsi | Estimasi Normal | Harga Spesial | Margin Hemat | Label Badge | CTA Link Parameter |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Dokumen Tuntas**[cite: 1] | Reformat margin, penomoran Romawi/Arab, cek typo, & sinkronisasi sitasi (max 40 hal)[cite: 1] | ~ Rp 150.000[cite: 1] | **Rp 110.000**[cite: 1] | Hemat Rp 40.000[cite: 1] | Paling Populer Skripsi | `?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Dokumen%20Tuntas%20(Rp110.000)` |
| **Siap Sidang**[cite: 1] | Dokumen Tuntas + 12 Slide PPT Presentasi + 1 Lembar Poster Ilmiah[cite: 1] | ~ Rp 340.000[cite: 1] | **Rp 249.000**[cite: 1] | Hemat Rp 91.000[cite: 1] | Best Value / All-in-One | `?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Siap%20Sidang%20(Rp249.000)` |
| **Tugas Kewirausahaan**[cite: 1] | 1 Landing Page + Desain Logo Simpel + 3 Template Feed IG[cite: 1] | ~ Rp 420.000[cite: 1] | **Rp 319.000**[cite: 1] | Hemat Rp 101.000[cite: 1] | Favorit Mahasiswa Bisnis | `?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Kewirausahaan%20(Rp319.000)` |
| **Proyek IT Lengkap**[cite: 1] | UI/UX Figma 6 Halaman + Web CRUD/Slicing + Bantuan Deploy[cite: 1] | ~ Rp 1.100.000[cite: 1] | **Rp 849.000**[cite: 1] | Hemat Rp 251.000[cite: 1] | Rekomendasi Tugas IT | `?text=Halo%20Admin,%20saya%20tertarik%20Paket%20Proyek%20IT%20(Rp849.000)` |

---

### Section 3: Katalog Jasa Satuan & Interactive Pricing
*Komponen antarmuka berbasis tab (Tab 1: Dokumen & Akademik, Tab 2: Desain Grafis, Tab 3: Website) + Interactive Cost Calculator.*

#### A. Dokumen & Akademik
*   **Cek Typo & PUEBI:** Rp 3.000 – 5.000 / hal (Track Changes docx) | Kilat <24 jam: +Rp 2.000/hal[cite: 1]
*   **Reformat Margin & Font (s.d. 30 hal):** Rp 35.000 – 50.000 / file | Kilat: +Rp 20.000[cite: 1]
*   **Reformat Lanjutan (>30 hal):** Rp 1.500 / hal berikutnya | Kilat: +Rp 1.000/hal[cite: 1]
*   **Penomoran Halaman & Daftar Isi Otomatis:** Rp 25.000 – 45.000 / file | Kilat: +Rp 15.000[cite: 1]
*   **Sinkronisasi Daftar Pustaka (Mendeley/Zotero):** Rp 15.000 – 25.000 / 10 referensi | Kilat: +Rp 10.000[cite: 1]
*   *Aturan Bisnis:* Minimal order Rp 25.000[cite: 1]. Naskah >80 halaman otomatis disarankan ambil Paket Dokumen Tuntas[cite: 1].

#### B. Desain Grafis
*   **Poster Ilmiah / LKTI (A1/A0/A3):** Rp 75.000 – 150.000 | Kilat: +Rp 35.000[cite: 1]
*   **Poster Event / Pamflet:** Rp 40.000 – 80.000 | Kilat: +Rp 25.000[cite: 1]
*   **Redesain Slide PPT:** Rp 5.000 – 12.000 / slide | Kilat: +Rp 3.000/slide[cite: 1]
*   **UI/UX Mockup Figma:** Rp 35.000 – 70.000 / page | Kilat: +Rp 20.000/page[cite: 1]
*   **Branding Kit Simpel (Logo + Palette + 5 Slide PPT):** Rp 150.000 – 250.000 | Kilat: +Rp 50.000[cite: 1]
*   **Infografis Data Rumit:** Rp 60.000 – 120.000 | Kilat: +Rp 30.000[cite: 1]
*   *Add-on:* Interactive Prototype Figma (+Rp 20.000/page)[cite: 1].

#### C. Website Development
*   **Landing Page Responsif:** Rp 150.000 – 300.000 (Durasi: 2–4 hari)[cite: 1] | Kilat: +Rp 50.000 – 100.000[cite: 1]
*   **Company Profile (3–5 Hal):** Rp 350.000 – 650.000 (Durasi: 4–7 hari)[cite: 1] | Kilat: +Rp 150.000[cite: 1]
*   **Portfolio / CV Online:** Rp 150.000 – 300.000 (Durasi: 2–3 hari)[cite: 1] | Kilat: +Rp 50.000[cite: 1]
*   **Sistem CRUD Sederhana (PHP/Laravel/MySQL):** Rp 500.000 – 1.200.000 (Durasi: 5–10 hari)[cite: 1] | Kilat: +Rp 250.000[cite: 1]
*   **Slicing Figma ke Kode:** Rp 150.000 – 350.000 / halaman[cite: 1] | Kilat: +Rp 75.000[cite: 1]
*   *Add-ons:* Deploy ke Vercel/Netlify (+Rp 25.000)[cite: 1] | Sesi Bedah Alur Kode Zoom/Meet 30 menit (+Rp 50.000)[cite: 1].

#### D. Interactive Price Calculator Widget
*   Input tipe layanan via radio button / dropdown.
*   Slider jumlah lembar / halaman / slide.
*   Checkbox add-on: `[✓] Opsi Kilat Express (<24 Jam)`, `[✓] Deploy / Setup Server`.
*   Dynamic output: Menghitung total estimasi harga seketika + Tombol: `Order Rincian Ini via WA`.

---

### Section 4: Interactive Teaser Showcase (No Real Client Proof Needed)
*Menampilkan kompetensi teknis tanpa perlu mencantumkan identitas klien asli.*

1.  **Before/After Slider (Interactive UI):**
    *   *Kiri:* Bab skripsi berantakan (font tidak seragam, spasi rusak, daftar pustaka manual).
    *   *Kanan:* Format standar naskah skripsi rapi, otomatisasi *heading*, dan sitasi Mendeley terstruktur.
2.  **Isometric Device Mockup (Web & Desain):**
    *   Mockup laptop & smartphone 3D minimalis dengan efek *auto-scroll preview* saat kursor diarahkan (*hover*).
    *   Aksi: Tombol `Live Preview ↗` untuk melihat demo web fiktif secara langsung.
3.  **Call to Exploration:**
    *   Banner kecil di bawah showcase: `Lihat Lebih Banyak Sampel & Studi Kasus di Galeri Portofolio ➔` (Link menuju `/showcase`).

---

### Section 5: How It Works (3 Simple Steps)
1.  **Kirim Bahan & Brief:** Kirim dokumen mentah, materi PPT, atau wireframe aplikasi via WhatsApp.
2.  **Pengerjaan & Progres:** Tugas dikerjakan sesuai estimasi waktu yang disepakati dengan pembaruan berkala.
3.  **Review & Garansi:** Cek hasil pekerjaan; manfaatkan fasilitas hingga 2x revisi minor secara gratis[cite: 1].

---

### Section 6: FAQ & Risk Reversal
*   **Apakah kerahasiaan dokumen saya terjamin?** Ya, semua dokumen tugas akhir dan riset dihapus dari sistem kami secara berkala setelah proyek selesai dan tidak pernah dipublikasikan.
*   **Bagaimana jika hasil belum sesuai?** Seluruh layanan memiliki garansi maksimal 2x revisi minor gratis[cite: 1].
*   **Apakah bisa selesai kurang dari 24 jam?** Bisa, gunakan layanan Kilat/Express untuk pengerjaan prioritas[cite: 1].

---

## 5. Technical Stack & Implementation Guidelines
*   **Framework Preference:** Responsive static web framework (Tailwind CSS + HTML/Vanilla JS atau React/Next.js).
*   **State Management:** Ringan, hanya untuk logika Tab filter katalog dan rumus kalkulator biaya instan.
*   **Smooth Scroll:** Wajib aktif untuk seluruh anchor navigasi (`scroll-behavior: smooth`).
*   **URL Encoder Engine:** Helper function otomatis untuk mengonversi form pilihan pengguna menjadi teks chat WhatsApp yang rapi dan terisi otomatis.