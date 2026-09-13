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
  Check,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import katalogData from "@/data/katalog.json";

interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  deliverableItems?: string[];
  calculationBasis: string;
  priceFormatted: string;
  badge?: string;
}

interface PillarItem {
  id: string;
  code: string;
  name: string;
  tagline: string;
  calculationBasis: string;
  services: ServiceItem[];
}

function KatalogContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "document-academic";
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const pillars = katalogData.pillars as PillarItem[];
  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <div className="min-h-screen pt-6 sm:pt-8 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-foreground mb-6 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-brand-red" />
          KEMBALI KE BERANDA
        </Link>

        {/* Header Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Lengkap Layanan Satuan</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground font-mono uppercase">
            DAFTAR HARGA &amp; LAYANAN SATUAN
          </h1>
          <p className="mt-3 text-text-muted max-w-2xl text-xs sm:text-sm font-sans leading-relaxed">
            Daftar harga acuan transparan untuk pengerjaan eceran/satuan tanpa paket bundling. Bebas pilih modul dan konsultasikan kebutuhan Anda.
          </p>
        </div>

        {/* 3 Interactive Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {[
            { id: "document-academic", label: "Dokumen & Akademik", icon: FileText },
            { id: "design-visual", label: "Desain Visual", icon: Palette },
            { id: "website", label: "Website Development", icon: Laptop },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${isActive
                  ? "bg-brand-red text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  : "border border-border-color bg-card-bg text-text-muted hover:text-foreground hover:border-brand-red/50"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Tagline Header */}
        <div className="mb-8 p-4 border border-border-color bg-card-bg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            <span className="font-mono text-xs text-text-muted">{activePillar.tagline}</span>
          </div>
          <span className="text-[11px] font-mono text-brand-red font-semibold uppercase">
            Basis: {activePillar.calculationBasis}
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activePillar.services.map((service) => (
            <div
              key={service.id}
              className="border border-border-color bg-card-bg shadow-sm p-6 flex flex-col justify-between hover:border-brand-red/50 transition-all duration-200 group"
            >
              <div>
                {service.badge && (
                  <div className="mb-2">
                    <span className="font-mono text-[10px] text-brand-red bg-brand-red/10 border border-brand-red/25 px-2 py-0.5">
                      {service.badge}
                    </span>
                  </div>
                )}

                <h2 className="text-lg font-bold font-mono text-foreground group-hover:text-brand-red transition-colors mb-2">
                  {service.name}
                </h2>

                <p className="text-xs text-text-muted font-sans leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {service.deliverableItems && service.deliverableItems.length > 0 && (
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-border-color">
                    {service.deliverableItems.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-foreground font-sans">
                        <Check className="w-3 h-3 text-brand-red shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-border-color">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[11px] font-mono text-text-muted">Mulai Dari:</span>
                  <span className="font-mono text-sm font-bold text-foreground">
                    {service.priceFormatted}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink("service", service.name, service.priceFormatted)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-background border border-border-color hover:border-brand-red text-foreground hover:text-brand-red font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red"
                >
                  <span>Order Layanan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 p-6 border border-border-color bg-card-bg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-brand-red shrink-0" />
            <div>
              <div className="font-mono text-xs font-bold text-foreground uppercase">
                Garansi Revisi Minor &amp; Kerahasiaan 100%
              </div>
              <div className="text-xs text-text-muted font-sans mt-0.5">
                Semua layanan satuan memiliki fasilitas revisi minor gratis dan privasi naskah/kode terlindungi.
              </div>
            </div>
          </div>
          <a
            href={getWhatsAppLink("general", "Konsultasi Katalog Satuan")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-brand-red hover:bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Chat Admin WA
          </a>
        </div>
      </div>
    </div>
  );
}

export default function KatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 text-center font-mono text-xs text-text-muted">Memuat Katalog...</div>}>
      <KatalogContent />
    </Suspense>
  );
}
