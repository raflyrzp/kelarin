"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Laptop, FileText, Palette, Check, Sparkles, Zap } from "lucide-react";
import { Accordion } from "@/components/Accordion";
import faqData from "@/data/faq.json";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function Home() {
  const [showAllFaq, setShowAllFaq] = useState(false);

  const faqs = faqData as FaqItem[];
  const visibleFaqs = showAllFaq ? faqs : faqs.slice(0, 5);
  const formattedFaqItems = visibleFaqs.map((faq) => ({
    value: faq.id,
    trigger: faq.question,
    content: faq.answer,
  }));

  const defaultWaLink = getWhatsAppLink("general", "Konsultasi Tugas");

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>
      <div className="absolute top-[5%] left-[-15%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-15%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse glow-dot"></span>
          <span className="font-mono text-[11px] font-bold tracking-widest text-primary uppercase">
            STATUS: MENERIMA TUGAS BARU
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-foreground max-w-5xl leading-tight font-mono uppercase">
          Biar tugasmu, kami yang <span className="text-primary inline-block">kelar.in</span>.
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Asisten akademik dan mentor andalan mahasiswa. Kami <strong className="text-foreground">kelar.in</strong> tugasmu, lalu bimbing kamu sampai benar-benar paham.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <a
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-accent text-accent-foreground font-mono text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 hover:brightness-95 shadow-md rounded-lg"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>KONSULTASI SEKARANG</span>
          </a>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="relative z-10 py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-foreground font-mono uppercase">
            MENGAPA MEMILIH KAMI?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors relative group rounded-xl">
            <h3 className="text-xl font-bold font-mono text-foreground mb-3">TUGAS KELAR, OTAK TETAP JALAN</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dapatkan hasil yang rapi sekaligus pemahaman komprehensif dari mentor kami. Bukan sekadar terima beres.
            </p>
          </div>
          <div className="p-6 border border-border bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors relative group rounded-xl">
            <h3 className="text-xl font-bold font-mono text-foreground mb-3">SPESIALIS IT & UMUM</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dari perapian format skripsi, desain slide presentasi yang memikat, sampai debugging code aplikasi.
            </p>
          </div>
          <div className="p-6 border border-border bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors relative group rounded-xl">
            <h3 className="text-xl font-bold font-mono text-foreground mb-3">SIAP HADAPI DOSEN</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Setiap tugas yang kami <strong className="text-foreground">kelar.in</strong> dilengkapi tips presentasi atau bedah logika coding agar kamu tidak panik saat ditanya dosen.
            </p>
          </div>
        </div>
      </section>

      {/* 3. UNIFIED PRICING & KAPABILITAS */}
      <section className="relative z-10 py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="p-8 md:p-12 border-2 border-primary bg-card text-card-foreground shadow-lg ring-1 ring-primary/20 rounded-xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-mono font-bold uppercase tracking-wider px-4 py-1 flex items-center gap-2 rounded-full shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>KAPABILITAS KAMI</span>
          </div>

          <div className="text-center mb-10 mt-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground font-mono uppercase leading-tight mb-4">
              Semua Kebutuhan Akademik,<br/> Mulai Dari <span className="text-primary">Rp50.000</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Satu harga awal untuk beragam kapabilitas. Biaya akhir disesuaikan dengan tingkat kesulitan dan deadline tugasmu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-3 p-4 border border-border bg-background rounded-lg">
              <Laptop className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-mono font-medium">Pembuatan & Mentoring Project Web/Aplikasi</span>
            </div>
            <div className="flex items-start gap-3 p-4 border border-border bg-background rounded-lg">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-mono font-medium">Bug Fixing & Optimasi Source Code</span>
            </div>
            <div className="flex items-start gap-3 p-4 border border-border bg-background rounded-lg">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-mono font-medium">Perapian Format Makalah, Jurnal & Skripsi</span>
            </div>
            <div className="flex items-start gap-3 p-4 border border-border bg-background rounded-lg">
              <Palette className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm text-foreground font-mono font-medium">Desain Slide Presentasi & Poster Ilmiah</span>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Link href="/katalog" className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-primary/90 transition-all">
              <span>Lihat Rincian Kapabilitas Kami</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ALUR KERJA */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-foreground font-mono uppercase">
              CARA ORDER
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">Alur sat-set tanpa form pendaftaran ribet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-border bg-card p-6 rounded-xl relative shadow-md">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-sm font-bold text-primary mb-4">01</div>
              <h3 className="text-lg font-bold font-mono text-foreground mb-2">CERITAIN KEBUTUHANMU</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kirim detail tugas, dokumen mentah, atau error code saat konsultasi.
              </p>
            </div>
            <div className="border border-border bg-card p-6 rounded-xl relative shadow-md">
              <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-sm font-bold text-primary mb-4">02</div>
              <h3 className="text-lg font-bold font-mono text-foreground mb-2">DUDUK TENANG</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tim mentor kami akan mulai <strong className="text-foreground">kelar.in</strong> tugasmu sesuai deadline yang disepakati.
              </p>
            </div>
            <div className="border-2 border-primary bg-card p-6 rounded-xl relative shadow-md ring-1 ring-primary/20">
              <div className="w-8 h-8 rounded-md bg-accent border border-accent-foreground/20 flex items-center justify-center font-mono text-sm font-bold text-accent-foreground mb-4">03</div>
              <h3 className="text-lg font-bold font-mono text-foreground mb-2">MENTORING & PENYERAHAN</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Terima hasil akhir tugasmu beserta bimbingan materi/logika langsung dari ahlinya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="relative z-10 py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="border border-border bg-card p-8 md:p-12 text-center rounded-2xl relative overflow-hidden shadow-lg">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 rounded-md">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
              KONSULTASI GRATIS AWAL 100%
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-foreground font-mono uppercase mb-4 leading-tight">
            Siap Selesaikan Tugasmu?
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Ceritakan kendala tugas, skripsi, atau proyek web kamu langsung ke tim mentor kami. Estimasi transparan, pengerjaan cepat, dan kerahasiaan terjamin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={defaultWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:opacity-90 text-accent-foreground font-mono text-sm font-bold tracking-wider transition-all uppercase rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>KONSULTASI SEKARANG</span>
            </a>
            <Link
              href="/katalog"
              className="w-full sm:w-auto px-8 py-4 border border-border bg-background hover:border-primary text-foreground font-mono text-sm font-bold tracking-wider transition-all uppercase rounded-lg flex items-center justify-center gap-2"
            >
              <span>LIHAT SEMUA LAYANAN</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="relative z-10 py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-border">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
            <span>FAQ & GARANSI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground font-mono uppercase">
            PERTANYAAN YANG SERING DITANYAKAN
          </h2>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm">
          <Accordion items={formattedFaqItems} />
          
          {faqs.length > 5 && (
            <button
              type="button"
              onClick={() => setShowAllFaq((prev) => !prev)}
              className="w-full py-2.5 px-4 mt-4 border border-dashed border-border hover:border-primary text-muted-foreground hover:text-foreground font-mono text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer rounded-lg bg-background/50"
            >
              <span>
                {showAllFaq
                  ? "Tampilkan Lebih Ringkas"
                  : `Tampilkan Semua Pertanyaan (${faqs.length})`}
              </span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
