"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Laptop,
  FileText,
  Palette,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
  PhoneCall,
  Search,
  Filter,
} from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface PortfolioItem {
  id: string;
  sku: string;
  category: "website" | "document" | "design";
  categoryLabel: string;
  title: string;
  tagline: string;
  clientContext: string;
  deliverables: string[];
  priceRange: string;
  tat: string;
  previewType: "code" | "doc" | "design";
  previewAccent: string;
  previewSnippet: string;
}

const portfolioProjects: PortfolioItem[] = [
  // 1. WEB DEVELOPMENT (Based on WEB-01 - WEB-05)
  {
    id: "port-web-01",
    sku: "WEB-01",
    category: "website",
    categoryLabel: "Web Development",
    title: "EcoTech Coffee Landing Page",
    tagline: "Landing page 1 halaman interaktif untuk validasi tugas kewirausahaan & promosi produk lokal.",
    clientContext: "Mahasiswa Bisnis & UMKM Minuman Sehat",
    deliverables: ["Next.js & Tailwind CSS", "100% Mobile Responsive", "Integrasi Order WhatsApp", "Fast Loading <1s"],
    priceRange: "Rp 150.000 - Rp 300.000",
    tat: "2 - 4 Hari",
    previewType: "code",
    previewAccent: "#ef4444",
    previewSnippet: "export default function Hero() {\n  return (\n    <div className='flex flex-col items-center'>\n      <h1>EcoCoffee: Organik & Segar</h1>\n      <WhatsAppCheckoutButton />\n    </div>\n  );\n}",
  },
  {
    id: "port-web-02",
    sku: "WEB-04",
    category: "website",
    categoryLabel: "Web Development",
    title: "Sistem Inventaris & Kasir Toko (CRUD)",
    tagline: "Aplikasi web fungsional pencatatan stok barang, transaksi masuk-keluar, dan laporan penjualan.",
    clientContext: "Tugas Besar Pemrograman Web / Sistem Basis Data",
    deliverables: ["Full CRUD & Autentikasi", "Database MySQL Dump (.sql)", "Export Laporan PDF/Excel", "Panduan Demo Localhost"],
    priceRange: "Rp 500.000 - Rp 1.200.000",
    tat: "5 - 10 Hari",
    previewType: "code",
    previewAccent: "#3b82f6",
    previewSnippet: "router.post('/inventory/store', authMiddleware, async (req, res) => {\n  const item = await Inventory.create(req.body);\n  return res.status(201).json({ success: true, item });\n});",
  },
  {
    id: "port-web-03",
    sku: "WEB-05",
    category: "website",
    categoryLabel: "Web Development",
    title: "Slicing Figma Dashboard Finansial ke Next.js",
    tagline: "Konversi visual Figma pixel-perfect ke komponen React/Tailwind clean code dan modular.",
    clientContext: "Klien Startup / Mahasiswa Desain Interaksi",
    deliverables: ["Pixel-Perfect Slicing", "TypeScript Strict Types", "Dark / Light Mode Support", "Komponen Reusable"],
    priceRange: "Rp 150.000 - Rp 350.000 / hal",
    tat: "2 - 4 Hari",
    previewType: "code",
    previewAccent: "#10b981",
    previewSnippet: "const MetricCard: React.FC<MetricProps> = ({ title, value, delta }) => (\n  <div className='p-4 border border-neutral-800 bg-neutral-900/50'>\n    <span>{title}</span>\n    <h3>{value}</h3>\n  </div>\n);",
  },
  {
    id: "port-web-04",
    sku: "WEB-03",
    category: "website",
    categoryLabel: "Web Development",
    title: "Cyber Samurai Personal CV & Portfolio",
    tagline: "Website showcase portofolio personal estetis, interaktif, dengan tombol unduh berkas resume.",
    clientContext: "Fresh Graduate & Tech Professional",
    deliverables: ["Custom Domain Ready", "Interactive Project Cards", "Download CV Button", "SEO Optimized"],
    priceRange: "Rp 150.000 - Rp 300.000",
    tat: "2 - 3 Hari",
    previewType: "code",
    previewAccent: "#8b5cf6",
    previewSnippet: "<section id='projects'>\n  <h2>Portofolio Unggulan</h2>\n  <Grid items={featuredWorks} />\n</section>",
  },

  // 2. DOKUMEN & AKADEMIK (Based on DOC-01 - DOC-05 & BDL-01)
  {
    id: "port-doc-01",
    sku: "DOC-02",
    category: "document",
    categoryLabel: "Dokumen & Akademik",
    title: "Reformat Standar Pedoman Skripsi (Format 4-4-3-3)",
    tagline: "Penataan menyeluruh margin, ukuran kertas, gaya heading bab/subbab, dan font konsisten.",
    clientContext: "Mahasiswa Akhir Menjelang Ujian Kolokium & Skripsi",
    deliverables: ["Margin 4-4-3-3 Sesuai Pedoman", "Hierarki Heading 1/2/3 Otomatis", "Spasi 1.5 & Indentasi Rapi", "Dokumen Bersih Bebas Typo"],
    priceRange: "Rp 35.000 - Rp 50.000 / file",
    tat: "1 - 2 Hari",
    previewType: "doc",
    previewAccent: "#ef4444",
    previewSnippet: "BAB I: PENDAHULUAN\n1.1 Latar Belakang Masalah\n[Margin Kiri: 4cm | Atas: 4cm | Kanan: 3cm | Bawah: 3cm]\nFont: Times New Roman 12pt | Line Spacing: 1.5",
  },
  {
    id: "port-doc-02",
    sku: "DOC-04",
    category: "document",
    categoryLabel: "Dokumen & Akademik",
    title: "Penomoran Halaman Majemuk & Daftar Isi Otomatis",
    tagline: "Konfigurasi penomoran Romawi (i, ii) di halaman awal & nomor Arab (1, 2, 3) di bab utama.",
    clientContext: "Penyusun Laporan Magang & Tesis",
    deliverables: ["Section Break Multi-Format", "Daftar Isi Otomatis Sekali Klik", "Daftar Tabel & Gambar Sinkron", "Bebas Halaman Kosong Rusak"],
    priceRange: "Rp 25.000 - Rp 45.000 / file",
    tat: "1 Hari (Siap Kilat)",
    previewType: "doc",
    previewAccent: "#f59e0b",
    previewSnippet: "Section 1: Halaman Judul s.d Abstrak -> Romawi Bawah Tengah (i, ii, iii)\nSection 2: Bab I s.d Bab V -> Arab Kanan Atas (1, 2, 3...)\nDaftar Isi: Automatic Table of Contents (TOC Level 1-3)",
  },
  {
    id: "port-doc-03",
    sku: "DOC-05",
    category: "document",
    categoryLabel: "Dokumen & Akademik",
    title: "Sinkronisasi Sitasi & Daftar Pustaka Mendeley/Zotero",
    tagline: "Standardisasi sitasi model APA 7th / IEEE / Harvard terhubung otomatis dengan metadata jurnal.",
    clientContext: "Artikel Ilmiah Jurnal Terakreditasi SINTA",
    deliverables: ["Sitasi APA 7th / IEEE Presisi", "Pemberesan Metadata Rusak", "Daftar Pustaka Auto-Generated", "Cross-Check Sitasi vs Sumber"],
    priceRange: "Rp 15.000 - Rp 25.000 / 10 ref",
    tat: "1 - 2 Hari",
    previewType: "doc",
    previewAccent: "#10b981",
    previewSnippet: "Sitasi Teks: (Pratama et al., 2024)\nDaftar Pustaka:\nPratama, R., & Santoso, B. (2024). Cybernetics in Modern UI. Journal of CS, 12(3), 140-155. https://doi.org/10.1016/...",
  },

  // 3. DESAIN GRAFIS (Based on DSG-01 - DSG-06)
  {
    id: "port-dsg-01",
    sku: "DSG-01",
    category: "design",
    categoryLabel: "Desain Grafis & Visual",
    title: "Poster Ilmiah LKTI Nasional (Ukuran A1/A0)",
    tagline: "Visualisasi riset ilmiah padat informasi dengan tata letak geometris, infografis, dan keterbacaan tinggi.",
    clientContext: "Finalis Lomba Karya Tulis Ilmiah & PIMNAS",
    deliverables: ["Ukuran Standar A1/A0 High-Res", "File PDF Siap Cetak (300 DPI)", "Link Canva / Figma Terbuka", "Infografis Metodologi Custom"],
    priceRange: "Rp 75.000 - Rp 150.000",
    tat: "1 - 3 Hari",
    previewType: "design",
    previewAccent: "#ef4444",
    previewSnippet: "LAYOUT POSTER ILMIAH A1:\n[Header: Judul Riset & Logo Kampus]\n[Col 1: Abstrak & Metodologi] | [Col 2: Diagram Hasil Data] | [Col 3: Kesimpulan & Pustaka]",
  },
  {
    id: "port-dsg-02",
    sku: "DSG-03",
    category: "design",
    categoryLabel: "Desain Grafis & Visual",
    title: "Redesain Slide Presentasi Sidang Skripsi (15 Slide)",
    tagline: "Transformasi materi teks panjang menjadi slide modern, minimalis, dan berbobot visual di depan dewan penguji.",
    clientContext: "Peserta Ujian Skripsi & Presentasi Pendadaran",
    deliverables: ["15 Slide Master PPTX Rapi", "Animasi Transisi Halus", "Aset Ikon Vektor & Visual Data", "Format 16:9 Full HD"],
    priceRange: "Rp 5.000 - Rp 12.000 / slide",
    tat: "1 - 2 Hari",
    previewType: "design",
    previewAccent: "#ec4899",
    previewSnippet: "Slide 01: Cover & Identitas Mahasiswa\nSlide 02-04: Problem Statement & Riset Gap\nSlide 05-09: Metodologi & Arsitektur Sistem\nSlide 10-14: Uji Coba & Hasil Metrik",
  },
  {
    id: "port-dsg-03",
    sku: "DSG-04",
    category: "design",
    categoryLabel: "Desain Grafis & Visual",
    title: "UI/UX Interactive Mockup Aplikasi Mobile",
    tagline: "Perancangan prototipe antarmuka aplikasi Android/iOS dengan design system komponen rapi di Figma.",
    clientContext: "Tugas Interaksi Manusia & Komputer (IMK) / Capstone",
    deliverables: ["Komponen Design System", "High-Fidelity Wireframes", "Link Figma Interaktif Demo", "User Flow Lengkap"],
    priceRange: "Rp 35.000 - Rp 70.000 / page",
    tat: "3 - 5 Hari",
    previewType: "design",
    previewAccent: "#8b5cf6",
    previewSnippet: "Figma Components:\n- Primary Buttons (Default, Hover, Disabled)\n- Input Fields with Error States\n- Bottom Navigation Bar with 4 Tabs\n- Micro-Interaction Prototype Links",
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((item) => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchQuery =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-6 sm:pt-8 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      {/* Ambient background glows */}
      <div className="absolute top-[5%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-brand-red" />
          KEMBALI KE BERANDA
        </Link>

        {/* HERO TITLE & HIGHLIGHT */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-xs font-bold uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
            SHOWCASE & STUDI KASUS PROYEK
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase font-mono leading-tight">
            GALERI KARYA & SAMPEL PENGERJAAN
          </h1>
          <p className="mt-4 text-text-muted max-w-3xl text-sm md:text-base font-sans leading-relaxed">
            Eksplorasi portofolio pengerjaan website modern, perapian naskah akademik pedoman kampus, dan aset visual desain grafis. Seluruh proyek dikerjakan dengan standar industri, garansi revisi, dan privasi penuh.
          </p>
        </div>

        {/* CONTROLS: CATEGORY TABS & SEARCH BAR */}
        <div className="border border-border-color bg-card-bg p-4 mb-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Semua Kategori", count: portfolioProjects.length },
              { id: "website", label: "Web Development", count: portfolioProjects.filter((p) => p.category === "website").length },
              { id: "document", label: "Dokumen & Akademik", count: portfolioProjects.filter((p) => p.category === "document").length },
              { id: "design", label: "Desain Grafis", count: portfolioProjects.filter((p) => p.category === "design").length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === tab.id
                    ? "bg-brand-red text-white shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                    : "border border-border-color bg-background text-text-muted hover:text-foreground hover:border-brand-red/40"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1 py-0.2 ${selectedCategory === tab.id ? "bg-black/20 text-white" : "bg-neutral-800 text-neutral-400"}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari SKU / judul tugas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-background border border-border-color text-xs font-sans text-foreground placeholder:text-text-muted focus:outline-none focus:border-brand-red font-mono"
            />
          </div>
        </div>

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="border border-border-color bg-card-bg p-12 text-center my-12">
            <p className="font-mono text-text-muted text-sm">
              Tidak ada sampel proyek yang cocok dengan filter atau kata kunci Anda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-brand-red text-white font-mono text-xs font-bold uppercase cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const waLink = getWhatsAppLink("service", project.title, project.priceRange);

              return (
                <div
                  key={project.id}
                  className="border border-border-color bg-card-bg shadow-sm flex flex-col justify-between group hover:border-brand-red/60 transition-all duration-300"
                >
                  <div>
                    {/* Placeholder Preview Screen (Cyber High-Tech Canvas/Terminal) */}
                    <div className="border-b border-border-color bg-black/90 p-4 font-mono relative overflow-hidden">
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[10px] text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <span className="uppercase text-[9px] tracking-wider text-neutral-500 font-bold">
                          PREVIEW // {project.previewType}
                        </span>
                      </div>

                      {/* Code or Doc Preview Snippet */}
                      <pre className="text-[11px] font-mono text-neutral-300 leading-relaxed py-3 overflow-x-hidden whitespace-pre-wrap select-none opacity-85 group-hover:opacity-100 transition-opacity">
                        <code>{project.previewSnippet}</code>
                      </pre>

                      <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-500">
                        <span>Status: TERVERIFIKASI</span>
                        <span className="text-emerald-400">TAT: {project.tat}</span>
                      </div>
                    </div>

                    {/* Card Body Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 border border-brand-red/25 px-2 py-0.5">
                          {project.categoryLabel}
                        </span>
                        <span className="text-[11px] font-mono text-text-muted">
                          {project.clientContext}
                        </span>
                      </div>

                      <h3 className="font-mono text-lg font-bold text-foreground leading-snug group-hover:text-brand-red transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-text-muted font-sans leading-relaxed mb-6">
                        {project.tagline}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-1.5 mb-6 border-t border-border-color/60 pt-4">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold">
                          Fitur & Output Terlampir:
                        </div>
                        {project.deliverables.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-foreground font-sans">
                            <CheckCircle2 className="w-3 h-3 text-brand-red shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer & Action Button */}
                  <div className="p-6 pt-0 border-t border-border-color/40 mt-auto">
                    <div className="flex items-baseline justify-between py-3">
                      <span className="text-[11px] font-mono text-text-muted">Acuan Tarif:</span>
                      <span className="text-xs font-mono font-bold text-foreground">
                        {project.priceRange}
                      </span>
                    </div>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-background border border-border-color hover:border-brand-red text-foreground hover:text-brand-red font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red cursor-pointer"
                    >
                      <span>Konsultasi Serupa</span>
                      <PhoneCall className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BOTTOM CALL TO ACTION BANNER */}
        <div className="mt-20 border border-brand-red/40 bg-card-bg p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-red tracking-wider uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kustom Proyek Khusus</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-mono text-foreground uppercase tracking-tight">
                PUNYA KEBUTUHAN KHUSUS DI LUAR SAMPEL?
              </h2>
              <p className="mt-2 text-sm text-text-muted max-w-2xl font-sans">
                Diskusikan topik tugas kuliah, format naskah kampus khusus, atau aplikasi web dengan arsitektur custom langsung dengan tim teknis Kelar.in.
              </p>
            </div>

            <a
              href={getWhatsAppLink("general", "Konsultasi Kustom Proyek Baru")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-brand-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.35)] shrink-0 transition-colors cursor-pointer"
            >
              <span>Diskusi Bareng Admin</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
