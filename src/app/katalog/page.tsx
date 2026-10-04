"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Palette,
  Laptop,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Check,
  Zap
} from "lucide-react";
import katalogData from "@/data/katalog.json";

interface LayananItem {
  id_layanan: string;
  nama_layanan: string;
  apa_yang_bisa_kami_bantu: string;
  contoh_kasus: string[];
  value_mentoring: string;
  tech_stack_atau_tools: string[];
}

interface KategoriItem {
  id_kategori: string;
  nama_kategori: string;
  deskripsi_kategori: string;
  cakupan_bantuan: LayananItem[];
}

function KatalogContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "umum";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const categories = katalogData.katalog_layanan as KategoriItem[];
  const activeCategory = categories.find((c) => c.id_kategori === activeTab) || categories[0];

  const baseWaNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "6281517983828";
  const getWhatsAppLink = (text: string) => {
    return `https://wa.me/${baseWaNumber}?text=${encodeURIComponent(text)}`;
  };

  const icons: Record<string, any> = {
    "umum": FileText,
    "it-programming": Laptop,
    "desain-grafis": Palette,
    "mentoring": MessageSquare
  };

  return (
    <div className="min-h-screen pt-6 sm:pt-8 pb-20 relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-primary" />
          KEMBALI KE BERANDA
        </Link>

        {/* Header Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Kapabilitas & Layanan</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground font-mono uppercase">
            APA SAJA YANG BISA KAMI BANTU?
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-xs sm:text-sm font-sans leading-relaxed">
            Pilih kategori di bawah untuk melihat rincian kapabilitas tim kami. Kami tidak sekadar mengeksekusi tugasmu, tapi memastikan kamu paham alur dan hasilnya.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {categories.map((tab) => {
            const Icon = icons[tab.id_kategori] || Sparkles;
            const isActive = activeTab === tab.id_kategori;
            return (
              <button
                key={tab.id_kategori}
                onClick={() => setActiveTab(tab.id_kategori)}
                className={`px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${isActive
                  ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/50"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-muted"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.nama_kategori}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Tagline Header */}
        <div className="mb-8 p-5 border border-border bg-card shadow-sm rounded-xl flex items-start gap-4">
          <div className="mt-1">
            <span className="w-3 h-3 rounded-full bg-primary block animate-pulse"></span>
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-foreground block mb-1">{activeCategory.nama_kategori}</span>
            <span className="text-sm text-muted-foreground leading-relaxed">{activeCategory.deskripsi_kategori}</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {activeCategory.cakupan_bantuan.map((service) => (
            <div
              key={service.id_layanan}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-border bg-card text-card-foreground shadow-md p-6 flex flex-col justify-between hover:border-primary/50 transition-all duration-200 group rounded-xl"
            >
              <div>
                <h2 className="text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors mb-3">
                  {service.nama_layanan}
                </h2>

                <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-4">
                  {service.apa_yang_bisa_kami_bantu}
                </p>

                {/* Contoh Kasus */}
                {service.contoh_kasus && service.contoh_kasus.length > 0 && (
                  <div className="space-y-2 mb-4 pt-4 border-t border-border/50">
                    <span className="text-[10px] font-mono font-bold uppercase text-primary">Sering Dibantu:</span>
                    {service.contoh_kasus.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground font-sans">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Value Mentoring */}
                <div className="mb-6 pt-4 border-t border-border/50">
                  <span className="text-[10px] font-mono font-bold uppercase text-accent">Value Mentoring:</span>
                  <p className="text-[11px] text-muted-foreground font-sans leading-relaxed mt-1 italic">
                    "{service.value_mentoring}"
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Stack */}
                {service.tech_stack_atau_tools && service.tech_stack_atau_tools.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tech_stack_atau_tools.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-muted border border-border text-[9px] font-mono font-semibold text-muted-foreground rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={getWhatsAppLink(`Halo Kelar.in, saya mau konsultasi tentang layanan ${service.nama_layanan}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-background border border-border hover:border-primary text-foreground hover:text-primary font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary rounded-lg"
                >
                  <span>Konsultasikan Tugas Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 border border-border bg-card text-card-foreground flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm rounded-xl">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
            <div>
              <div className="font-mono text-xs font-bold text-foreground uppercase">
                Siap Dibimbing Sampai Tuntas?
              </div>
              <div className="text-xs text-muted-foreground font-sans mt-0.5">
                Jangan sungkan, ceritakan kendalamu via WhatsApp. Konsultasi awal 100% gratis.
              </div>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Halo Kelar.in, saya mau nanya-nanya dulu soal tugas saya nih.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent hover:opacity-90 text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-opacity shadow-sm flex items-center gap-2 rounded-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Chat Admin WA</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center font-mono text-xs text-muted-foreground">Memuat Katalog...</div>}>
      <KatalogContent />
    </Suspense>
  );
}
