# Content Structure & Copywriting Specifications - Kelar.in

## 1. Tone of Voice & Copywriting Strategy
Seluruh teks di dalam website wajib menggunakan pendekatan **Solution-First, Jargon-Free**. Asumsikan calon klien tidak mengerti IT (baik mahasiswa non-teknik maupun pelaku usaha awam). Hindari istilah rumit seperti "Middleware", "Serverless ready", atau "State Management". Ganti kata-kata tersebut dengan fungsi nyata yang langsung mereka rasakan manfaatnya (misal: "Tombol ganti tema gelap/terang", "Sistem otomatis kirim nota ke WA", dll.).

## 2. Directory JSON Schema Mapping

Pastikan folder `src/data/` memiliki 6 file JSON dengan format data persis seperti skema berikut:

### 📁 src/data/coding-bundles.json (Paket Web Jadi)
```json
{
  "sectionTitle": "Paket Pembuatan Website Siap Pakai",
  "disclaimer": "*Harga tertera adalah harga pasti untuk fitur standar paket. Biaya akhir bisa berubah tergantung jika Anda meminta request fitur tambahan di luar paket.",
  "items": [
    {
      "id": "pkg-portfolio",
      "name": "Website Profil Pribadi / CV Online",
      "fixedPrice": 450000,
      "badge": "Rekomendasi Mahasiswa",
      "description": "Website personal untuk memamerkan biodata, keahlian, pengalaman organisasi, dan hasil karya. Sangat bagus untuk menaikkan nilai jual di mata HRD atau dosen.",
      "points": [
        "1 Halaman Utama dengan desain premium & elegan",
        "Galeri portofolio proyek yang bisa diklik",
        "Tombol download berkas CV langsung",
        "Tampilan otomatis rapi saat dibuka di HP/Laptop",
        "Dibantu upload ke internet sampai website live"
      ]
    },
    {
      "id": "pkg-ecommerce",
      "name": "Website Toko Online (Katalog WhatsApp)",
      "fixedPrice": 1850000,
      "badge": "Paling Laris",
      "description": "Website toko online tanpa ribet database untuk memajang produk dagangan. Pembeli bisa pilih barang, masuk keranjang, dan saat checkout nota otomatis terkirim rapi ke WhatsApp Anda.",
      "points": [
        "Halaman galeri katalog produk & detail produk",
        "Sistem keranjang belanja (Bisa beli banyak barang sekaligus)",
        "Formulir data pengiriman pembeli (Nama, Alamat, No HP)",
        "Checkout otomatis menyusun nota rapi langsung ke WA Anda"
      ]
    }
  ]
}