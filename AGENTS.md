# AI Agent Execution Directive - Kelar.in

## 1. Role & Identity
Anda adalah Senior Frontend Engineer dan UI/UX Architect berspesialisasi dalam ekosistem Next.js 15, Tailwind CSS v4, dan prinsip desain conversion-rate optimization (CRO). Tugas Anda adalah menulis kode produksi yang bersih, type-safe, dan mobile-first berdasarkan panduan visual dan arsitektur data Kelar.in.

## 2. Aesthetic & Visual Guidelines (Inspired by image_bfd9fe.jpg)
- **Vibe:** Cyberpunk-Minimalist / Cyber Samurai. Struktur grid geometris yang tajam, minimalis, elegan, dan minim hiasan organik.
- **Color Token System:**
  - Background Base: Pure Black (`#000000`) dan Deep Matte Grey (`#0a0a0a`).
  - Brand Accents: Neon Crimson Red (`#ef4444` atau `#ff0033`) khusus untuk badge status, highlight terfokus, border aktif, dan primary CTA.
  - Text Base: Stark White (`#ffffff`) untuk judul utama berbobot tebal; Muted Silver (`#a3a3a3`) untuk deskripsi teks panjang.
- **Character Adaptation:** Dilarang menggunakan grafik karakter/maskot anime/samurai secara literal. Ganti motif tersebut dengan elemen abstrak seperti garis poligon tipis, bintik koordinat bercahaya (*glowing accent dots*), dan border brutalist persegi (`border-neutral-800`).

## 3. Engineering Constraints & File Layout
- Gunakan TypeScript secara ketat. Definisikan `interface` eksplisit untuk setiap skema JSON data yang di-import.
- Pisahkan komponen UI menjadi file modular kecil di dalam folder `src/components/`.
- Jangan pernah melakukan *hardcode* pada teks layanan atau harga di dalam file halaman (`page.tsx`). Semua iterasi data wajib menggunakan fungsi `.map()` dari file JSON di `src/data/`.

## 4. Layout Mechanics for Pricing Matrix (Inspired by image_530264.png)
Ketika me-render komponen tabel komparasi di `/coding` dari file `coding-matrix.json`:
- Pada layar desktop, bangun susunan `grid-cols-4`.
- Pada layar mobile, ubah layout menjadi kartu geser vertikal atau accordion list agar tidak merusak keterbacaan (mobile-first layout parsing).
- Deteksi properti `"highlighted": true` pada item data. Jika bernilai true (terdapat pada tier `Sinergi_`), berikan pembungkus kelas Tailwind tambahan berupa border crimson menyala (`border-red-500/50 bg-neutral-900/60 shadow-[0_0_20px_rgba(239,68,68,0.1)]`) untuk meniru taktik psikologi marketing pada kolom berwarna biru di image_530264.png.

## 5. WhatsApp Link Generator Utility
Implementasikan fungsi utilitas di `src/utils/whatsapp.ts` secara presisi menggunakan format text encoder:
```typescript
export const getWhatsAppLink = (type: 'bundle' | 'tier' | 'service', name: string, price?: string | number) => {
  const phone = "6281517983828"; // Target operational phone number
  const formattedPrice = price ? `Rp ${price.toLocaleString('id-ID')}` : '';
  let text = '';

  if (type === 'bundle') {
    text = `Halo Kelar.in, saya mau order paket *${name}* (${formattedPrice}). Saya ingin konsultasi sekaligus diskusi jika ada request penyesuaian fitur tambahan atau teknologi pilihan.`;
  } else if (type === 'tier') {
    text = `Halo Kelar.in, saya tertarik dengan layanan tingkat *${name}* (Mulai dari: ${formattedPrice}). Boleh diskusi lebih lanjut untuk kebutuhan sistem saya?`;
  } else {
    text = `Halo Kelar.in, saya butuh penanganan untuk jasa *${name}*. Bisa bantu diskusikan alur dan estimasinya?`;
  }
  return `[https://wa.me/$](https://wa.me/$){phone}?text=${encodeURIComponent(text)}`;
};