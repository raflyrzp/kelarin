"use client";

import React from "react";
import Link from "next/link";
import { Accordion } from "@/components/Accordion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  ArrowRight,
  Laptop,
  FileText,
  Palette,
  Check,
  Flame,
  Sparkles,
  Zap,
  ShieldCheck,
  ChevronRight,
  Lock,
} from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import katalogData from "@/data/katalog.json";
import faqData from "@/data/faq.json";

interface BundleItem {
  id: string;
  sku: string;
  name: string;
  badge: string;
  highlighted?: boolean;
  targetAudience: string;
  packageItems: string[];
  normalPrice: number;
  normalPriceFormatted: string;
  specialPrice: number;
  specialPriceFormatted: string;
  savings: number;
  savingsFormatted: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function Home() {
  const bundles = katalogData.bundles as BundleItem[];
  const faqs = faqData as FaqItem[];
  const [showAllFaq, setShowAllFaq] = React.useState(false);

  const visibleFaqs = showAllFaq ? faqs : faqs.slice(0, 5);
  const formattedFaqItems = visibleFaqs.map((faq) => ({
    value: faq.id,
    trigger: faq.question,
    content: faq.answer,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      {/* Ambient background glows */}
      <div className="absolute top-[5%] left-[-15%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-15%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO SECTION (COMPACT & OVERLAP FIXED) */}
      <section className="relative z-10 pt-8 pb-8 md:pt-12 md:pb-12 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Urgent Live Badge (Status Masalah) */}
        <div className="inline-flex items-center gap-2 border border-destructive/20 bg-destructive/10 px-3 py-1 mb-4 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-ping"></span>
          <span className="font-mono text-[11px] font-semibold tracking-widest text-destructive uppercase">
            ⚡ Deadline Mepet? Tugas &amp; Skripsi Beres Tanpa Panik
          </span>
        </div>

        {/* Synced Headline with New Slogan */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground max-w-4xl leading-tight font-mono uppercase">
          Kodingan Masih Error, Format Skripsi Berantakan?{" "}
          <span className="text-primary font-black tracking-tight">BIAR KAMI YANG KELARIN!</span>
        </h1>

        {/* Clean Sub-headline with safe margin and z-index */}
        <p className="relative z-20 mt-4 text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed font-sans">
          Bantu perapian naskah skripsi standar pedoman kampus, pembuatan website tugas siap demo, hingga slide presentasi estetik. Pengerjaan cepat, sat-set, dan bergaransi revisi.
        </p>

        {/* 3 Visual Interactive Pills/Chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-lg">
          <Link
            href="/katalog?tab=website"
            className="group px-3.5 py-1.5 border border-border bg-card hover:border-primary font-mono text-xs font-bold text-foreground hover:text-primary transition-all flex items-center gap-1.5 shadow-sm rounded-lg"
          >
            <Laptop className="w-3.5 h-3.5 text-primary" />
            <span>💻 Web Dev Siap Demo</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/katalog?tab=document-academic"
            className="group px-3.5 py-1.5 border border-border bg-card hover:border-primary font-mono text-xs font-bold text-foreground hover:text-primary transition-all flex items-center gap-1.5 shadow-sm rounded-lg"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>📄 Dokumen &amp; Skripsi Rapi</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/katalog?tab=design-visual"
            className="group px-3.5 py-1.5 border border-border bg-card hover:border-primary font-mono text-xs font-bold text-foreground hover:text-primary transition-all flex items-center gap-1.5 shadow-sm rounded-lg"
          >
            <Palette className="w-3.5 h-3.5 text-primary" />
            <span>🎨 Slide PPT Estetik</span>
            <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main CTA Buttons with Refined Hierarchy */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full justify-center px-4 max-w-xl">
          <a
            href={getWhatsAppLink("general", "Konsultasi Cepat Hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3.5 bg-accent text-accent-foreground font-mono text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 hover:brightness-95 sm:flex-1 text-center shadow-md rounded-lg"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-current shrink-0"
            >
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-accent-foreground group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/katalog"
            className="group px-7 py-3.5 border border-border bg-card/60 backdrop-blur-sm text-foreground hover:bg-muted font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center justify-center gap-2 sm:flex-1 text-center rounded-lg"
          >
            <span>📋 Lihat Semua Layanan &amp; Harga</span>
            <ArrowRight className="w-4 h-4 text-foreground group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Quick Anchor Link to Paket Bundling */}
        <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground">
          <span>Mau paket hemat borongan?</span>
          <Link
            href="#paket-bundling"
            className="text-primary hover:underline font-bold inline-flex items-center gap-1"
          >
            <Flame className="w-3 h-3 text-accent" />
            <span>Cek Paket Hemat Sidang ↓</span>
          </Link>
        </div>
      </section>

      {/* 2. TEASER SHOWCASE INTERAKTIF (BEFORE / AFTER SLIDER) */}
      <section id="showcase-teaser" className="relative z-10 py-12 md:py-16 px-4 sm:px-6 max-w-5xl mx-auto border-t border-border scroll-mt-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] font-bold uppercase mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Bukti Nyata Kualitas</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
            BEDANYA SEBELUM VS SESUDAH DISENTUH KELAR.IN
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-xs font-sans">
            Nggak ada lagi drama dicoret dosen gara-gara margin acak-acakan, kodingan nge-bug pas demo, atau slide presentasi bikin ngantuk.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* 3. PAKET BUNDLING HEMAT & LINK KATALOG SATUAN */}
      <section id="paket-bundling" className="relative z-10 py-10 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-border scroll-mt-20">
        <div id="paket-hemat" className="scroll-mt-20"></div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-accent/15 border border-accent/40 text-accent-foreground text-[10px] font-mono font-bold uppercase mb-2">
            <Flame className="w-3 h-3 text-accent-foreground" />
            <span>Lebih Hemat, Sekali Pesan Langsung Beres</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-foreground font-mono uppercase">
            PAKET BUNDLING HEMAT TUGAS &amp; SIDANG
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-xs sm:text-sm font-sans">
            Nggak usah pusing ngurus printilan satu-satu. Ambil paket borongan, biaya jauh lebih murah, dan naskah atau kodemu ditangani sampai tuntas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {bundles.map((bundle) => {
            const isHighlight = bundle.highlighted;
            return (
              <div
                key={bundle.id}
                className={`relative flex flex-col justify-between p-6 transition-all duration-300 rounded-xl ${isHighlight
                  ? "border-2 border-primary bg-card text-card-foreground shadow-lg ring-1 ring-primary/20 lg:-translate-y-1"
                  : "border border-border bg-card text-card-foreground shadow-md hover:border-primary/50"
                  }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[9px] font-mono font-bold uppercase tracking-wider px-3.5 py-0.5 shadow-sm flex items-center gap-1 whitespace-nowrap rounded-full">
                    <Sparkles className="w-3 h-3" />
                    <span>Paling Laris Menjelang Sidang</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-start gap-2 mb-2.5">
                    <span className="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-semibold rounded-md">
                      {bundle.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-foreground leading-tight mb-2 min-h-[48px] flex items-center">
                    {bundle.name}
                  </h3>

                  <p className="text-muted-foreground text-xs leading-relaxed font-sans mb-4 min-h-[60px] line-clamp-3">
                    {bundle.targetAudience}
                  </p>

                  {/* Integrated Pricing Section */}
                  <div className="-mx-6 px-6 py-3.5 mb-5 border-y border-border/60 bg-foreground/[0.02] flex flex-col justify-center min-h-[80px]">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-2xl sm:text-[26px] font-black font-mono tracking-tight text-foreground tabular-nums">
                        {bundle.specialPriceFormatted}
                      </span>
                      <span className="text-xs text-muted-foreground/60 line-through font-mono tabular-nums">
                        {bundle.normalPriceFormatted}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-primary leading-tight font-medium">
                      <span className="w-1.5 h-1.5 bg-primary shadow-[0_0_6px_var(--primary)] shrink-0 rounded-full" />
                      <span className="truncate">{bundle.savingsFormatted}</span>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2 mb-6">
                    {bundle.packageItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground font-sans">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppLink("bundle", bundle.name, bundle.specialPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer rounded-lg ${isHighlight
                    ? "bg-accent text-accent-foreground font-bold hover:brightness-95 shadow-sm"
                    : "border border-border bg-transparent hover:bg-muted text-foreground"
                    }`}
                >
                  <span>{isHighlight ? "Pilih Paket Ini (Paling Laris)" : "Pilih Paket Ini"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CALLOUT BANNER: KATALOG SATUAN / ECERAN */}
        <div className="mt-10 p-6 md:p-8 border border-border bg-card text-card-foreground shadow-md rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 border-l border-b border-primary/20 pointer-events-none hidden md:block"></div>
          <div className="absolute top-2.5 right-3 flex items-center gap-1.5 font-mono text-[9px] text-primary/70 uppercase tracking-widest hidden md:flex">
            <span className="w-1.5 h-1.5 bg-primary"></span>
            <span>LAYANAN_SATUAN</span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-bold uppercase mb-2 rounded-md">
                <span>PILIHAN FLEKSIBEL</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-foreground font-mono uppercase">
                Hanya Butuh Layanan Satuan atau Eceran?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                Tersedia pengerjaan per lembar: cek typo naskah, perbaikan margin, desain slide presentasi, hingga slicing web per halaman.
              </p>
            </div>

            <Link
              href="/katalog"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-border bg-card/60 backdrop-blur-sm hover:bg-muted text-foreground font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 w-full sm:w-auto rounded-lg"
            >
              <span>Buka Katalog Harga Lengkap</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CARA KERJA KITA (HORIZONTAL MINI-STEPPER) */}
      <section id="cara-order" className="relative z-10 py-8 md:py-10 px-4 sm:px-6 border-y border-border bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] font-bold text-primary tracking-wider uppercase">
              02 / Alur Sat-Set Tanpa Ribet
            </span>
            <h2 className="text-xl md:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
              CARA PESAN: 3 LANGKAH TINGGAL TERIMA BERES
            </h2>
          </div>

          {/* Thin Horizontal Stepper */}
          <div className="border border-border bg-card shadow-md rounded-xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">

              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-none bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0 mt-0.5 rounded-md">
                  01
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    Chat WA &amp; Kirim Bahan
                  </h3>
                  <p className="text-muted-foreground text-[11px] font-sans mt-0.5">
                    Kirim draf skripsi, materi slide, atau brief kodinganmu. Nggak perlu registrasi atau formulir rumit.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 md:border-l md:border-border md:pl-6">
                <div className="w-7 h-7 rounded-none bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0 mt-0.5 rounded-md">
                  02
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    Langsung Dikerjakan Sat-Set
                  </h3>
                  <p className="text-muted-foreground text-[11px] font-sans mt-0.5">
                    Dikerjakan teliti sesuai pedoman kampus. Butuh darurat? Ada opsi kilat &lt;24 jam.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 md:border-l md:border-border md:pl-6">
                <div className="w-7 h-7 rounded-none bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary shrink-0 mt-0.5 rounded-md">
                  03
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    Cek Preview &amp; Garansi Revisi
                  </h3>
                  <p className="text-muted-foreground text-[11px] font-sans mt-0.5">
                    Periksa pratinjau hasilnya. Masih kurang pas? Nikmati fasilitas garansi 2x revisi minor gratis.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5. GABUNGAN FAQ & KONTAK WHATSAPP (SPLIT GRID 2 KOLOM) */}
      <section id="faq" className="relative z-10 py-10 md:py-14 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">

          {/* Kolom Kiri: Accordion FAQ */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                <span>03 / FAQ</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
                PERTANYAAN YANG SERING DITANYAKAN
              </h2>
              <p className="text-xs text-muted-foreground font-sans mt-1">
                Hal penting seputar kerahasiaan dokumen, garansi revisi, dan opsi pengerjaan kilat.
              </p>
            </div>

            <Accordion items={formattedFaqItems} />

            {faqs.length > 5 && (
              <button
                type="button"
                onClick={() => setShowAllFaq((prev) => !prev)}
                className="w-full py-2.5 px-4 border border-dashed border-border hover:border-primary text-muted-foreground hover:text-foreground font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer bg-card/60 shadow-sm rounded-xl mt-3"
              >
                <span>
                  {showAllFaq
                    ? "[-] Tampilkan Lebih Ringkas (5 Teratas)"
                    : `[+] Tampilkan Semua Pertanyaan (${faqs.length})`}
                </span>
              </button>
            )}
          </div>

          {/* Kolom Kanan: Kotak Konversi Cepat WhatsApp */}
          <div id="contact" className="lg:col-span-5 lg:sticky lg:top-28 border-2 border-primary/40 bg-card text-card-foreground p-6 shadow-md rounded-xl flex flex-col justify-between scroll-mt-28">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] font-bold uppercase mb-3 rounded-md">
                <Zap className="w-3 h-3" />
                <span>Konsultasi Bebas Biaya</span>
              </div>

              <h3 className="text-xl font-bold font-mono text-foreground uppercase leading-tight">
                DEADLINE SUDAH DEKAT? YUK DIOBROLIN SEKARANG!
              </h3>

              <p className="text-xs text-muted-foreground font-sans mt-2 leading-relaxed">
                Nggak perlu ragu atau sungkan. Ceritakan saja kendala tugasmu, kami bantu cek estimasi biaya dan waktu pengerjaannya secara gratis.
              </p>

              {/* Primary High-Impact WhatsApp Button */}
              <div className="mt-5">
                <a
                  href={getWhatsAppLink("general", "Konsultasi Instan Fast Response")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:brightness-95 transition-all cursor-pointer rounded-lg"
                >
                  <Zap className="w-4 h-4" />
                  <span>Chat WhatsApp Sekarang (Respon Cepat)</span>
                </a>
              </div>

              {/* Fast Quick-Chips */}
              <div className="mt-5 pt-4 border-t border-border">
                <span className="block font-mono text-[10px] uppercase text-muted-foreground font-semibold mb-2">
                  Atau Pilih Topik Cepat:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={getWhatsAppLink("service", "Dokumen Skripsi Kilat", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border bg-background hover:border-primary hover:text-primary font-mono text-xs font-semibold flex items-center justify-between transition-colors rounded-lg"
                  >
                    <span>⚡ Butuh Beresin Skripsi / Naskah Kilat</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </a>

                  <a
                    href={getWhatsAppLink("service", "Konsultasi Pembuatan Website", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border bg-background hover:border-primary hover:text-primary font-mono text-xs font-semibold flex items-center justify-between transition-colors rounded-lg"
                  >
                    <span>💻 Mau Tanya Jasa Bikin Web / Koding</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </a>

                  <a
                    href={getWhatsAppLink("service", "Bikin PPT Sidang Estetik", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border bg-background hover:border-primary hover:text-primary font-mono text-xs font-semibold flex items-center justify-between transition-colors rounded-lg"
                  >
                    <span>🎨 Mau Desain Slide PPT Sidang Estetik</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Micro-copy guarantees */}
            <div className="mt-6 pt-3 border-t border-border/80 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-primary" />
                Privasi 100% Aman
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-primary" />
                Garansi 2x Revisi
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-primary" />
                Bisa Kilat &lt;24 Jam
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
