"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  SlidersHorizontal,
  FileText,
  Laptop,
  Palette,
} from "lucide-react";

type CategoryType = "document" | "website" | "design";

interface CategoryData {
  id: CategoryType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  beforeTag: string;
  beforeTitle: string;
  beforeDesc: string;
  beforePoints: string[];
  beforeNote: string;
  afterTag: string;
  afterTitle: string;
  afterDesc: string;
  afterPoints: string[];
  afterNote: string;
}

const transformationData: Record<CategoryType, CategoryData> = {
  document: {
    id: "document",
    label: "Dokumen & Skripsi",
    icon: FileText,
    beforeTag: "Margin Belang-Bentong • Format Berantakan",
    beforeTitle: "Naskah Penuh Coretan Dosen (Sebelum)",
    beforeDesc:
      "Margin beda tiap bab, spasi renggang-rapat, font campur aduk, daftar isi dan nomor halaman diketik manual sampai pusing.",
    beforePoints: [
      "✕ Margin acak-acakan & melanggar buku pedoman kampus",
      "✕ Nomor halaman dan daftar isi manual (tiap diedit geser semua)",
      "✕ Sitasi kopas tanpa Mendeley/Zotero, rawan kena cek plagiasi",
    ],
    beforeNote: "Dosen Pembimbing Auto Geleng Kepala",
    afterTag: "Standar Pedoman Kampus • Sitasi Otomatis",
    afterTitle: "Naskah Rapi Siap ACC & Sidang (Sesudah)",
    afterDesc:
      "Format presisi sesuai buku panduan skripsi kampusmu, heading berjenjang rapi, dan sitasi tersinkron otomatis.",
    afterPoints: [
      "✓ Margin pas sesuai panduan (misal 4-4-3-3 cm) per bab",
      "✓ Penomoran halaman otomatis (Romawi di awal, Arab di isi)",
      "✓ Sitasi & daftar pustaka rapi via Mendeley/Zotero (APA/IEEE)",
    ],
    afterNote: "Aman dari Coretan, Siap Maju Sidang",
  },
  website: {
    id: "website",
    label: "Web Development",
    icon: Laptop,
    beforeTag: "Tampilan Berantakan • Error Pas Demo",
    beforeTitle: "Web Tugas Kaku & Rawan Bug (Sebelum)",
    beforeDesc:
      "Tampilan berantakan pas dibuka di HP, alur logika semrawut, dan loading lama sampai bikin keringat dingin di depan dosen.",
    beforePoints: [
      "✕ Rusak di layar HP & tombol nggak bisa diklik",
      "✕ Kodingan berantakan tanpa struktur, bingung pas ditanya dosen",
      "✕ Belum online, cuma jalan di localhost laptop sendiri",
    ],
    beforeNote: "Panik Pas Dosen Minta Buka dari HP",
    afterTag: "Modern Responsive • Siap Dipresentasikan",
    afterTitle: "Web Bersih, Responsif, & Langsung Online (Sesudah)",
    afterDesc:
      "Tampilan enak dilihat di HP maupun laptop, kodingan bersih gampang dipelajari alurnya, dan sudah online siap diuji.",
    afterPoints: [
      "✓ 100% responsif & lancar dibuka di gadget apa pun",
      "✓ Clean code terstruktur, gampang dipahami alur logikanya",
      "✓ Sudah live di link publik (Vercel/Netlify), siap didemokan",
    ],
    afterNote: "Dosen Senang, Presentasi Auto Lancar",
  },
  design: {
    id: "design",
    label: "Desain & Slide PPT",
    icon: Palette,
    beforeTag: "Teks Menumpuk • Bikin Ngantuk",
    beforeTitle: "Slide Penuh Teks Copy-Paste (Sebelum)",
    beforeDesc:
      "Makalah disalin bulat-bulat ke slide, warna tabrakan, font kecil bikin mata perih, dosen dan audiens langsung hilang fokus.",
    beforePoints: [
      "✕ Paragraf panjang ditempel mentah-mentah ke slide",
      "✕ Layout monoton, warna nabrak, dan nggak ada hierarki",
      "✕ Tanpa diagram atau visual data yang menjelaskan poin inti",
    ],
    beforeNote: "Penguji Bosan Sebelum Bab 1 Selesai",
    afterTag: "Visual Tajam • Poin-Poin Matang",
    afterTitle: "Slide Estetik, Padat, & Menjual (Sesudah)",
    afterDesc:
      "Inti pembahasan dirombak jadi infografis dan visual ringkas yang gampang dipahami penguji hanya dalam sekali lirik.",
    afterPoints: [
      "✓ Poin riset tajam, to the point, dan enak dibaca dari jauh",
      "✓ Palet warna profesional dengan visualisasi data rapi",
      "✓ Flow presentasi runtut dari latar belakang sampai kesimpulan",
    ],
    afterNote: "Pede Maksimal Pas Tampil di Ruang Ujian",
  },
};

export function BeforeAfterSlider() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("document");
  const [sliderPos, setSliderPos] = useState<number>(50);

  const current = transformationData[activeCategory];

  return (
    <div className="w-full space-y-6 pt-2">
      {/* Category Switcher Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {(Object.keys(transformationData) as CategoryType[]).map((catKey) => {
          const item = transformationData[catKey];
          const Icon = item.icon;
          const isActive = activeCategory === catKey;

          return (
            <button
              key={catKey}
              onClick={() => {
                setActiveCategory(catKey);
                setSliderPos(50);
              }}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Slider Control Container */}
      <div className="relative border border-border bg-card shadow-md rounded-xl overflow-hidden select-none">
        {/* Top bar indicators (Isolated header - not pierced by slider line) */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-background/90 backdrop-blur-xs border-b border-border text-[11px] font-mono">
          <span className="text-destructive font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-destructive"></span>
            SEBELUM (BIKIN STRES)
          </span>
          <span className="text-muted-foreground hidden sm:inline-flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            Geser Slider Buat Bandingkan
          </span>
          <span className="text-primary font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            SESUDAH (TINGGAL TERIMA BERES)
          </span>
        </div>

        {/* Inner Comparison Viewport (Slider line strictly confined inside) */}
        <div className="relative overflow-hidden min-h-[460px] md:min-h-[400px]">
          {/* AFTER CONTENT (Base Layer - 100% width) */}
          <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between bg-card text-card-foreground">
            <div className="space-y-4 max-w-xl ml-auto text-right">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-bold uppercase">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span>{current.afterTag}</span>
              </div>

              <div className="border border-primary/30 bg-primary/5 p-4 sm:p-5 text-left font-sans space-y-3">
                <div className="text-sm font-bold font-mono text-foreground border-b border-primary/20 pb-2 flex items-center justify-between">
                  <span>{current.afterTitle}</span>
                  <span className="text-[10px] text-primary font-sans font-semibold">
                    ✓ Terstandar
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {current.afterDesc}
                </p>
                <div className="pt-2 border-t border-primary/20 text-[11px] font-mono text-primary space-y-1">
                  {current.afterPoints.map((pt, i) => (
                    <div key={i}>{pt}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-primary font-semibold">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>{current.afterNote}</span>
            </div>
          </div>

          {/* BEFORE CONTENT (Clipped Layer via clip-path) */}
          <div
            className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between bg-muted text-muted-foreground z-10 pointer-events-none"
            style={{
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            }}
          >
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-destructive/10 border border-destructive/20 text-destructive text-[10px] font-mono font-bold uppercase">
                <AlertTriangle className="w-3 h-3 text-destructive" />
                <span>{current.beforeTag}</span>
              </div>

              <div className="border border-destructive/20 bg-destructive/5 p-4 sm:p-5 text-left font-sans space-y-3 relative">
                <div className="text-sm font-bold font-mono text-destructive border-b border-destructive/20 pb-2 flex items-center justify-between">
                  <span className="text-destructive font-bold">{current.beforeTitle}</span>
                  <span className="text-[10px] text-destructive font-sans font-semibold">
                    ✕ Masalah
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {current.beforeDesc}
                </p>
                <div className="pt-2 border-t border-destructive/20 text-[11px] font-mono text-destructive space-y-1">
                  {current.beforePoints.map((pt, i) => (
                    <div key={i} className="text-destructive font-medium">{pt}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-destructive font-semibold">
              <AlertTriangle className="w-3 h-3 text-destructive" />
              <span>{current.beforeNote}</span>
            </div>
          </div>

          {/* DRAGGABLE SLIDER INPUT (Constrained inside comparison container) */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Bandingkan hasil sebelum dan sesudah"
          />

          {/* CUSTOM SLIDER THUMB LINE & BUTTON (Strictly inside comparison container) */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center -ml-[1px]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-0.5 h-full bg-accent shadow-sm"></div>
            <div className="absolute w-8 h-8 rounded-full bg-accent border-2 border-background shadow-md flex items-center justify-center text-accent-foreground text-xs font-mono font-bold">
              ↔
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span>
          Geser garis pembanding buat lihat standar kualitas pengerjaan di
          setiap kategori.
        </span>
        {/* <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold"
        >
          <span>Lihat Sampel Portofolio Lengkap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link> */}
      </div>
    </div>
  );
}
