"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Palette,
  Laptop,
  Database,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Search,
  Info,
  Package,
  ClipboardList,
  Zap,
  Layers
} from "lucide-react";
import rawPriceListData from "@/data/katalog.json";
import { PriceListData } from "@/types/catalog";
import { getWhatsAppLink } from "@/utils/whatsapp";

const priceListData = rawPriceListData as PriceListData;

function KatalogContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") || "semua";
  const [activeTab, setActiveTab] = useState<string>(tabParam);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const icons: Record<string, typeof FileText> = {
    "umum": FileText,
    "it-coding": Laptop,
    "desain-uiux": Palette,
    "data-analisis": Database,
    "mentoring": MessageSquare
  };

  const visibleCategories = priceListData.kategori
    .filter((cat) => activeTab === "semua" || cat.id === activeTab)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          item.layanan.toLowerCase().includes(q) ||
          item.harga.toLowerCase().includes(q) ||
          item.keterangan.toLowerCase().includes(q)
        );
      })
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen pt-6 sm:pt-8 pb-20 relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0 opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-primary" />
            KEMBALI KE BERANDA
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/bundling"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase rounded-md shadow-xs hover:opacity-90 transition-opacity"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Lihat Paket Bundling</span>
            </Link>
            <Link
              href="/cara-order"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-card hover:border-primary text-foreground font-mono text-xs font-bold uppercase rounded-md transition-colors"
            >
              <ClipboardList className="w-3.5 h-3.5 text-primary" />
              <span>Teknis Order</span>
            </Link>
          </div>
        </div>

        <div className="mb-8 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase mb-3 rounded-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Standar Harga Resmi • Per {priceListData.tanggal_acuan}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground font-mono uppercase">
            {priceListData.judul}
          </h1>
          <p className="mt-1 font-mono text-sm sm:text-base font-bold text-primary">
            {priceListData.tagline}
          </p>
          <p className="mt-4 text-muted-foreground max-w-4xl text-xs sm:text-sm font-sans leading-relaxed">
            {priceListData.deskripsi}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab("semua")}
              className={`px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${
                activeTab === "semua"
                  ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Layanan</span>
            </button>
            {priceListData.kategori.map((tab) => {
              const Icon = icons[tab.id] || Sparkles;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.kode}. {tab.nama.replace(/^[A-C]\.\s*/, "")}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan atau keterangan..."
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {visibleCategories.length === 0 ? (
          <div className="border border-border bg-card p-12 text-center rounded-xl my-8">
            <p className="font-mono text-sm text-muted-foreground">
              Tidak ditemukan layanan dengan kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("semua");
              }}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase rounded-lg cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {visibleCategories.map((category) => {
              const Icon = icons[category.id] || Sparkles;
              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="border border-border bg-card rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="p-5 sm:p-6 border-b border-border bg-muted/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider mb-1">
                        <Icon className="w-4 h-4" />
                        <span>{category.grup}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black font-mono text-foreground uppercase">
                        {category.nama}
                      </h2>
                      {category.deskripsi && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {category.deskripsi}
                        </p>
                      )}
                    </div>
                    <span className="self-start sm:self-center px-3 py-1 bg-background border border-border rounded-md font-mono text-xs font-semibold text-muted-foreground shrink-0">
                      {category.items.length} Layanan
                    </span>
                  </div>

                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border bg-background/60 font-mono text-xs uppercase text-muted-foreground">
                          <th className="py-3.5 px-6 w-[28%]">Layanan</th>
                          <th className="py-3.5 px-6 w-[22%]">Harga</th>
                          <th className="py-3.5 px-6 w-[36%]">Keterangan</th>
                          <th className="py-3.5 px-6 w-[14%] text-right">Order</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border text-sm">
                        {category.items.map((item) => (
                          <tr
                            key={item.id}
                            className="hover:bg-muted/30 transition-colors group"
                          >
                            <td className="py-4 px-6 font-mono font-bold text-foreground align-top">
                              <div className="flex flex-col gap-1">
                                <span>{item.layanan}</span>
                                {item.target === "bisnis" && (
                                  <span className="inline-block w-fit text-[10px] font-mono font-semibold px-2 py-0.5 bg-accent/20 text-foreground border border-accent/40 rounded">
                                    UMKM / Bisnis
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-6 font-mono font-bold text-primary align-top whitespace-nowrap">
                              {item.harga}
                            </td>
                            <td className="py-4 px-6 text-muted-foreground text-xs sm:text-sm leading-relaxed align-top">
                              {item.keterangan}
                              {item.id === "dsg-konten-sosmed" && (
                                <Link
                                  href="/bundling"
                                  className="ml-1.5 inline-flex items-center gap-1 font-mono text-xs font-bold text-primary underline hover:opacity-80"
                                >
                                  Lihat Bundling
                                </Link>
                              )}
                            </td>
                            <td className="py-4 px-6 align-top text-right">
                              <a
                                href={getWhatsAppLink("service", item.layanan, item.harga)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-background border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground text-foreground font-mono text-xs font-bold uppercase rounded-lg transition-all"
                              >
                                <span>Pesan</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="md:hidden divide-y divide-border">
                    {category.items.map((item) => (
                      <div key={item.id} className="p-4 flex flex-col gap-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-mono text-sm font-bold text-foreground">
                              {item.layanan}
                            </h3>
                            {item.target === "bisnis" && (
                              <span className="mt-1 inline-block text-[10px] font-mono font-semibold px-2 py-0.5 bg-accent/20 text-foreground border border-accent/40 rounded">
                                UMKM / Bisnis
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md shrink-0">
                            {item.harga}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.keterangan}
                        </p>
                        <div className="pt-1 flex items-center justify-between gap-2">
                          {item.id === "dsg-konten-sosmed" ? (
                            <Link
                              href="/bundling"
                              className="font-mono text-xs font-bold text-primary underline"
                            >
                              Cek Paket Bundling →
                            </Link>
                          ) : (
                            <span />
                          )}
                          <a
                            href={getWhatsAppLink("service", item.layanan, item.harga)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase rounded-lg"
                          >
                            <span>Pesan Layanan</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {category.catatan && (
                    <div className="p-4 sm:px-6 bg-primary/5 border-t border-border flex items-start gap-3">
                      <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong className="font-mono text-foreground uppercase">Catatan: </strong>
                        {category.catatan}
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        <section className="mt-12 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
              KETENTUAN LAYANAN
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {priceListData.ketentuan_layanan.map((point, index) => (
              <li
                key={index}
                className="p-3.5 border border-border bg-background rounded-lg flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded shrink-0">
                  0{index + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-primary bg-card rounded-xl flex flex-col justify-between gap-4 shadow-sm">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-accent text-accent-foreground font-mono text-[10px] font-bold uppercase rounded mb-2">
                LEBIH HEMAT
              </span>
              <h3 className="text-xl font-black font-mono text-foreground uppercase">
                Cek Paket Bundling Kelar.in
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                Butuh paket lengkap makalah + PPT, pendampingan skripsi, atau paket website + logo + konten sosmed UMKM? Hemat hingga Rp401.000.
              </p>
            </div>
            <Link
              href="/bundling"
              className="w-fit inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>Lihat Semua Bundling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-6 border border-border bg-card rounded-xl flex flex-col justify-between gap-4 shadow-sm">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/30 font-mono text-[10px] font-bold uppercase rounded mb-2">
                100% TRANSPARAN
              </span>
              <h3 className="text-xl font-black font-mono text-foreground uppercase">
                Pelajari Teknis & Alur Order
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                Lihat 9 tahapan order dari konsultasi gratis hingga serah terima file, skema DP pembayaran, ketentuan revisi, serta hak & kewajiban.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cara-order"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-background hover:border-primary text-foreground font-mono text-xs font-bold uppercase rounded-lg transition-colors"
              >
                <span>Baca Teknis Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppLink("general", "Konsultasi Price List Kelar.in")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase rounded-lg hover:opacity-90 transition-opacity"
              >
                <Zap className="w-4 h-4" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 text-center font-mono text-xs text-muted-foreground">
          Memuat Price List...
        </div>
      }
    >
      <KatalogContent />
    </Suspense>
  );
}
