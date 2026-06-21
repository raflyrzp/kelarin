# Product Requirements Document (PRD) - Kelar.in

## 1. Product Vision & Overview
Kelar.in adalah platform akuisisi klien (lead generation funnel) modern yang menyediakan jasa Web Development komersial/akademik dan Academic Mentoring di bidang teknologi. Website ini bertindak sebagai jembatan bisnis tingkat agensi, sementara pembuktian rekam jejak mendalam, sertifikasi, dan riwayat detail dialihkan langsung ke portofolio utama di https://raflyrzp.vercel.app.

## 2. Target Audience
- **Mahasiswa Lintas Jurusan:** Membutuhkan bantuan kerapihan laporan, desain slide sidang, bimbingan koding praktikum, atau persiapan demo aplikasi Skripsi/Tugas Akhir.
- **Masyarakat Umum / UMKM:** Membutuhkan digitalisasi bisnis berupa landing page promosi, website portofolio personal, maupun sistem toko online mandiri berskala mikro-kecil.

## 3. Core Architecture & Routing (Multi-Page Application)
Website dibangun menggunakan arsitektur MPA (Multi-Page Application) Next.js App Router dengan spesifikasi rute sebagai berikut:

- `/` (Home): Menampilkan value proposition, alur kerja agensi, rangkuman portfolio, FAQ, dan form kontak.
- `/coding` (Detailed Web Development): Halaman produk mendalam berisi paket bundling coding, tabel perbandingan spek sistem, dan layanan minor (debugging/tutor).
- `/academic` (Detailed Academic Support): Halaman modular berisi layanan kerapihan dokumen (formatting), desain visual akademik, dan pendampingan koding privat.

## 4. Technical Stack Constraints
- **Framework:** Next.js 15 (App Router, Server Components by default).
- **Styling:** Tailwind CSS v4 (Menggunakan konfigurasi native terbaru, performa ultra-ringan).
- **UI Components:** shadcn/ui (Radix Primitives) untuk komponen interaktif seperti Dropdown, Accordion, dan Dialog.
- **Icons:** Lucide-React.
- **Data Fetching:** Statis/Dinamis melalui local JSON files (`src/data/*.json`). No database queries on the client funnel.
- **Optimization:** Mobile-first, minimal animations (Framer Motion diatur lightweight), optimal Core Web Vitals (LCP < 2.5s).

## 5. Feature Requirements & Functional Specifications
- **Navigation Dropdown:** Menu 'Services' pada Navbar harus berupa dropdown menu yang memisahkan akses ke `/coding` dan `/academic`. Link menu lainnya bertindak sebagai internal anchor scroll jika pengguna berada di halaman `/`.
- **Dynamic Pricing Matrix:** Halaman `/coding` wajib mengimplementasikan tabel matriks komparasi 4-kolom yang responsif (terinspirasi dari struktur visual image_530264.png) dengan penekanan visual penuh pada tier ke-3 (`Sinergi_`).
- **Flexible Tech Stack Notice:** Menyajikan banner informatif bahwa pengerjaan sistem tidak kaku pada Next.js/Tailwind saja, melainkan terbuka untuk framework apa pun sesuai kesepakatan atau arahan dosen pembimbing.
- **WhatsApp Automated Lead Engine:** Setiap tombol aksi ("Order Now" / "Diskusikan Fitur") wajib mengonstruksikan string URL `wa.me` yang terformat otomatis membawa nama produk, harga dasar, dan intensi kustomisasi fitur.