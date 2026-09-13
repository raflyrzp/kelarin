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
      <div className="absolute top-[5%] left-[-15%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-15%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO SECTION (COMPACT & OVERLAP FIXED) */}
      <section className="relative z-10 pt-8 pb-8 md:pt-12 md:pb-12 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Urgent Live Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-red/30 bg-brand-red/10 px-3 py-1 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping"></span>
          <span className="font-mono text-[11px] font-semibold tracking-widest text-brand-red uppercase">
            ⚡ Deadline Mepet? Tugas &amp; Skripsi Beres Tanpa Panik
          </span>
        </div>

        {/* Synced Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground max-w-4xl leading-tight font-mono uppercase">
          Kodingan Masih Error, Format Skripsi Berantakan?{" "}
          <span className="text-brand-red">Biar Kami yang Beresin!</span>
        </h1>

        {/* Clean Sub-headline with safe margin and z-index */}
        <p className="relative z-20 mt-4 text-xs sm:text-sm md:text-base text-text-muted max-w-2xl leading-relaxed font-sans">
          Bantu perapian naskah skripsi standar pedoman kampus, pembuatan website tugas siap demo, hingga slide presentasi estetik. Pengerjaan cepat, sat-set, dan bergaransi revisi.
        </p>

        {/* 3 Visual Interactive Pills/Chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-lg">
          <Link
            href="/katalog?tab=website"
            className="group px-3.5 py-1.5 border border-border-color bg-card-bg hover:border-brand-red font-mono text-xs font-bold text-foreground hover:text-brand-red transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Laptop className="w-3.5 h-3.5 text-brand-red" />
            <span>💻 Web Dev Siap Demo</span>
            <ChevronRight className="w-3 h-3 text-text-muted group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/katalog?tab=document-academic"
            className="group px-3.5 py-1.5 border border-border-color bg-card-bg hover:border-brand-red font-mono text-xs font-bold text-foreground hover:text-brand-red transition-all flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-brand-red" />
            <span>📄 Dokumen &amp; Skripsi Rapi</span>
            <ChevronRight className="w-3 h-3 text-text-muted group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/katalog?tab=design-visual"
            className="group px-3.5 py-1.5 border border-border-color bg-card-bg hover:border-brand-red font-mono text-xs font-bold text-foreground hover:text-brand-red transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Palette className="w-3.5 h-3.5 text-brand-red" />
            <span>🎨 Slide PPT Estetik</span>
            <ChevronRight className="w-3 h-3 text-text-muted group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Main CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3.5 w-full justify-center px-4 max-w-lg">
          <Link
            href="#paket-hemat"
            className="group px-7 py-3.5 bg-brand-red hover:bg-red-700 text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.25)] sm:flex-1"
          >
            <span>Pilih Paket Hemat</span>
            <Flame className="w-4 h-4 text-white animate-bounce" />
          </Link>
          <a
            href={getWhatsAppLink("general", "Konsultasi Cepat Hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3.5 border border-border-color hover:border-brand-red text-foreground hover:text-brand-red font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors flex items-center justify-center gap-2 sm:flex-1"
          >
            <span>Konsultasi WA Santai</span>
            <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. TEASER SHOWCASE INTERAKTIF (BEFORE / AFTER SLIDER) */}
      <section id="showcase-teaser" className="relative z-10 py-8 md:py-10 px-4 sm:px-6 max-w-5xl mx-auto border-t border-border-color scroll-mt-20">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[10px] font-bold uppercase mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Bukti Nyata Kualitas</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
            BEDANYA SEBELUM VS SESUDAH DISENTUH KELAR.IN
          </h2>
          <p className="mt-2 text-text-muted max-w-xl mx-auto text-xs font-sans">
            Nggak ada lagi drama dicoret dosen gara-gara margin acak-acakan, kodingan nge-bug pas demo, atau slide presentasi bikin ngantuk.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* 3. PAKET BUNDLING HEMAT & LINK KATALOG SATUAN */}
      <section id="paket-hemat" className="relative z-10 py-10 md:py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-border-color scroll-mt-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-red/10 border border-brand-red/30 text-brand-red text-[10px] font-mono font-bold uppercase mb-2">
            <Flame className="w-3 h-3" />
            <span>Lebih Hemat, Sekali Pesan Langsung Beres</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-foreground font-mono uppercase">
            PAKET BUNDLING HEMAT TUGAS &amp; SIDANG
          </h2>
          <p className="mt-2 text-text-muted max-w-xl mx-auto text-xs sm:text-sm font-sans">
            Nggak usah pusing ngurus printilan satu-satu. Ambil paket borongan, biaya jauh lebih murah, dan naskah atau kodemu ditangani sampai tuntas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {bundles.map((bundle) => {
            const isHighlight = bundle.highlighted;
            return (
              <div
                key={bundle.id}
                className={`relative flex flex-col justify-between p-5 transition-all duration-300 ${isHighlight
                  ? "border-2 border-red-500 bg-card-bg shadow-[0_0_25px_rgba(239,68,68,0.2)] ring-1 ring-red-500/50 lg:-translate-y-1"
                  : "border border-border-color bg-card-bg hover:border-brand-red/50 shadow-sm"
                  }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[9px] font-mono font-black uppercase tracking-wider px-3 py-0.5 shadow-md flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>Paling Laris Menjelang Sidang</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-start gap-2 mb-2.5">
                    <span className="px-2 py-0.5 bg-brand-red/10 border border-brand-red/30 text-brand-red text-[10px] font-mono font-semibold">
                      {bundle.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-foreground leading-tight mb-2 min-h-[48px] flex items-center">
                    {bundle.name}
                  </h3>

                  <p className="text-text-muted text-xs leading-relaxed font-sans mb-4 min-h-[60px] line-clamp-3">
                    {bundle.targetAudience}
                  </p>

                  {/* Integrated Pricing Section */}
                  <div className="-mx-5 md:-mx-6 px-5 md:px-6 py-3.5 mb-5 border-y border-border-color/60 bg-foreground/[0.02] flex flex-col justify-center min-h-[80px]">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-2xl sm:text-[26px] font-black font-mono tracking-tight text-foreground tabular-nums">
                        {bundle.specialPriceFormatted}
                      </span>
                      <span className="text-xs text-text-muted/60 line-through font-mono tabular-nums">
                        {bundle.normalPriceFormatted}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/90 leading-tight">
                      <span className="w-1.5 h-1.5 bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] shrink-0" />
                      <span className="truncate">{bundle.savingsFormatted}</span>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2 mb-6">
                    {bundle.packageItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-foreground font-sans">
                        <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppLink("bundle", bundle.name, bundle.specialPrice)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${isHighlight
                    ? "bg-brand-red hover:bg-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                    : "border border-border-color bg-background hover:border-brand-red text-foreground hover:text-brand-red"
                    }`}
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA BANNER: LINK TO DAFTAR HARGA SATUAN LENGKAP */}
        <div className="mt-8 p-4 md:p-5 border border-border-color bg-card-bg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 hidden sm:block"></span>
            <p className="text-xs sm:text-sm font-sans text-foreground">
              Cuma butuh beresin satu hal kecil (misal: cek typo per lembar, benerin slide PPT, atau slicing web)?
            </p>
          </div>
          <Link
            href="/katalog"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-background border border-brand-red/60 hover:border-brand-red hover:bg-brand-red hover:text-white text-brand-red font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0"
          >
            <span>Cek Katalog Harga Eceran Satuan</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 4. CARA KERJA KITA (HORIZONTAL MINI-STEPPER) */}
      <section id="cara-order" className="relative z-10 py-8 md:py-10 px-4 sm:px-6 border-y border-border-color bg-section-muted-bg scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-mono text-[10px] font-bold text-brand-red tracking-wider uppercase">
              02 / Alur Sat-Set Tanpa Ribet
            </span>
            <h2 className="text-xl md:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
              CARA PESAN: 3 LANGKAH TINGGAL TERIMA BERES
            </h2>
          </div>

          {/* Thin Horizontal Stepper */}
          <div className="border border-border-color bg-card-bg shadow-sm p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative">

              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-mono text-xs font-bold text-brand-red shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    1. Chat WA &amp; Kirim Bahan
                  </h3>
                  <p className="text-text-muted text-[11px] font-sans mt-0.5">
                    Kirim draf skripsi, materi slide, atau brief kodinganmu. Nggak perlu registrasi atau formulir rumit.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 md:border-l md:border-border-color md:pl-6">
                <div className="w-7 h-7 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-mono text-xs font-bold text-brand-red shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    2. Langsung Dikerjakan Sat-Set
                  </h3>
                  <p className="text-text-muted text-[11px] font-sans mt-0.5">
                    Dikerjakan teliti sesuai pedoman kampus. Butuh darurat? Ada opsi kilat &lt;24 jam.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 md:border-l md:border-border-color md:pl-6">
                <div className="w-7 h-7 rounded-none bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-mono text-xs font-bold text-brand-red shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h3 className="font-mono font-bold text-xs sm:text-sm text-foreground">
                    3. Cek Preview &amp; Garansi Revisi
                  </h3>
                  <p className="text-text-muted text-[11px] font-sans mt-0.5">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Kolom Kiri: Accordion FAQ */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-brand-red font-mono text-[10px] font-bold uppercase tracking-wider mb-1">
                <span>03 / FAQ</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
                PERTANYAAN YANG SERING DITANYAKAN
              </h2>
              <p className="text-xs text-text-muted font-sans mt-1">
                Hal penting seputar kerahasiaan dokumen, garansi revisi, dan opsi pengerjaan kilat.
              </p>
            </div>

            <Accordion items={formattedFaqItems} />

            {faqs.length > 5 && (
              <button
                type="button"
                onClick={() => setShowAllFaq((prev) => !prev)}
                className="w-full py-2.5 px-4 border border-dashed border-border-color hover:border-brand-red text-text-muted hover:text-foreground font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer bg-card-bg/40 mt-3"
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
          <div id="contact" className="lg:col-span-5 lg:sticky lg:top-28 border-2 border-brand-red bg-card-bg p-6 shadow-sm lg:shadow-[0_0_25px_rgba(239,68,68,0.15)] flex flex-col justify-between scroll-mt-28">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[10px] font-bold uppercase mb-3">
                <Zap className="w-3 h-3" />
                <span>Konsultasi Bebas Biaya</span>
              </div>

              <h3 className="text-xl font-bold font-mono text-foreground uppercase leading-tight">
                DEADLINE SUDAH DEKAT? YUK DIOBROLIN SEKARANG!
              </h3>

              <p className="text-xs text-text-muted font-sans mt-2 leading-relaxed">
                Nggak perlu ragu atau sungkan. Ceritakan saja kendala tugasmu, kami bantu cek estimasi biaya dan waktu pengerjaannya secara gratis.
              </p>

              {/* Primary High-Impact WhatsApp Button */}
              <div className="mt-5">
                <a
                  href={getWhatsAppLink("general", "Konsultasi Instan Fast Response")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Chat WhatsApp Sekarang (Respon Cepat)</span>
                </a>
              </div>

              {/* Fast Quick-Chips */}
              <div className="mt-5 pt-4 border-t border-border-color">
                <span className="block font-mono text-[10px] uppercase text-text-muted font-semibold mb-2">
                  Atau Pilih Topik Cepat:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={getWhatsAppLink("service", "Dokumen Skripsi Kilat", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border-color bg-background hover:border-brand-red hover:text-brand-red font-mono text-xs font-semibold flex items-center justify-between transition-colors"
                  >
                    <span>⚡ Butuh Beresin Skripsi / Naskah Kilat</span>
                    <ArrowRight className="w-3 h-3 text-brand-red" />
                  </a>

                  <a
                    href={getWhatsAppLink("service", "Konsultasi Pembuatan Website", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border-color bg-background hover:border-brand-red hover:text-brand-red font-mono text-xs font-semibold flex items-center justify-between transition-colors"
                  >
                    <span>💻 Mau Tanya Jasa Bikin Web / Koding</span>
                    <ArrowRight className="w-3 h-3 text-brand-red" />
                  </a>

                  <a
                    href={getWhatsAppLink("service", "Bikin PPT Sidang Estetik", undefined)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border-color bg-background hover:border-brand-red hover:text-brand-red font-mono text-xs font-semibold flex items-center justify-between transition-colors"
                  >
                    <span>🎨 Mau Desain Slide PPT Sidang Estetik</span>
                    <ArrowRight className="w-3 h-3 text-brand-red" />
                  </a>
                </div>
              </div>
            </div>

            {/* Micro-copy guarantees */}
            <div className="mt-6 pt-3 border-t border-border-color/80 flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" />
                Privasi 100% Aman
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-red" />
                Garansi 2x Revisi
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" />
                Bisa Kilat &lt;24 Jam
              </span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
