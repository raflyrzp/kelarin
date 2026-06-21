"use client";

import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/utils/whatsapp";
import bundlesData from "@/data/web-development/bundles.json";
import othersData from "@/data/web-development/others.json";
import matrixData from "@/data/web-development-matrix.json";
import { ArrowLeft, Cpu, ArrowRight, Check, Flame } from "lucide-react";

interface BundleItem {
  id: string;
  name: string;
  fixedPrice: number;
  badge: string;
  description: string;
  points: string[];
}

interface OtherItem {
  id: string;
  name: string;
  startingPrice: number;
  priceUnit: string;
  description: string;
}

interface TierFeature {
  for_student: string;
  for_public: string;
  tech: string;
  logic: string;
  pages: string;
  online: string;
  revision: string;
  support: string;
}

interface TierItem {
  id: string;
  name: string;
  basePrice: number;
  badge: string;
  highlighted?: boolean;
  features: TierFeature;
}

interface ComparisonRow {
  key: keyof TierFeature;
  label: string;
}

export default function WebDevelopmentPage() {
  const bundles = bundlesData.items as BundleItem[];
  const others = othersData.items as OtherItem[];
  const tiers = matrixData.tiers as TierItem[];
  const rows = matrixData.comparisonRows as ComparisonRow[];

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-foreground mb-8 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-brand-red" />
          KEMBALI KE UTAMA
        </Link>

        {/* HERO TITLE & TEXT */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-red tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#ef4444]"></span>
            Web Development & Custom Support
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground uppercase font-mono">
            Jasa Pembuatan Website & Aplikasi Kustom
          </h1>
          <p className="mt-4 text-text-muted max-w-3xl leading-relaxed text-sm md:text-base font-sans">
            Pilih dari paket bundling siap pakai kami atau tentukan tingkat kerumitan sistem Anda menggunakan matriks perbandingan di bawah.
          </p>
        </div>

        {/* 1. FLEXIBLE TECH STACK NOTICE BANNER */}
        <div className="border border-brand-red/35 bg-brand-red/5 p-6 mb-16 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden">
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-red glow-dot"></div>
          <div className="w-10 h-10 shrink-0 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-mono font-bold text-sm text-foreground uppercase tracking-wider">
              Pemberitahuan Teknologi Fleksibel
            </h3>
            <p className="text-text-muted text-xs md:text-sm mt-1 leading-relaxed font-sans">
              Secara standar, saya menggunakan teknologi modern berkecepatan tinggi (Next.js & Tailwind CSS). Namun, jika tugas kuliah atau sistem bisnis Anda mewajibkan penggunaan teknologi lain (seperti Laravel, PHP Native, React, Vue, Python, atau database tertentu), kita bisa gunakan sesuai kesepakatan saat diskusi.
            </p>
          </div>
        </div>

        {/* 2. BUNDLES GRID SECTION */}
        <div className="mb-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase">
              {bundlesData.sectionTitle}
            </h2>
            <div className="mt-2 p-4 bg-brand-red/5 border border-brand-red/20 border-l-4 border-l-brand-red">
              <p className="text-brand-red text-xs font-mono">{bundlesData.disclaimer}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className="border border-border-color bg-card-bg p-6 md:p-8 flex flex-col justify-between hover:border-brand-red/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-[10px] tracking-widest bg-brand-red/10 border border-brand-red/30 text-brand-red px-2 py-0.5 uppercase">
                      {bundle.badge}
                    </span>
                    <span className="font-mono text-sm font-bold text-brand-red">Harga Pasti</span>
                  </div>
                  <h3 className="font-mono font-bold text-xl text-foreground mb-2">{bundle.name}</h3>
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-6 font-sans">
                    {bundle.description}
                  </p>

                  <div className="h-px bg-border-color my-6"></div>

                  <ul className="space-y-3 mb-8">
                    {bundle.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-foreground">
                        <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="font-sans text-text-muted">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-text-muted text-xs font-mono">Total Biaya:</span>
                    <span className="text-2xl font-black text-foreground font-mono">
                      Rp {bundle.fixedPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <a
                    href={getWhatsAppLink("bundle", bundle.name, bundle.fixedPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-background border border-border-color hover:border-brand-red text-foreground font-mono text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                  >
                    PESAN SEKARANG <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. COMPARISON PRICING MATRIX SECTION */}
        <div className="mb-24">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">
              KOMPARASI SISTEM
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase mt-1">
              {matrixData.tableName}
            </h2>
            <p className="text-text-muted text-xs mt-1">{matrixData.globalDisclaimer}</p>
          </div>

          {/* Desktop Table: grid-cols-4 */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between p-6 border transition-all duration-300 ${
                  tier.highlighted
                    ? "border-brand-red bg-card-bg shadow-[0_0_20px_rgba(239,68,68,0.1)] relative"
                    : "border-border-color bg-card-bg hover:border-brand-red/35"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3 fill-current" /> BEST VALUE
                  </div>
                )}
                <div>
                  <div className="mb-4">
                    <span className="font-mono text-[10px] tracking-widest bg-brand-red/10 border border-brand-red/20 text-brand-red px-2 py-0.5">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="font-mono font-black text-2xl text-foreground tracking-tighter">
                    {tier.name}
                  </h3>
                  <div className="mt-2 mb-6">
                    <span className="text-[10px] text-text-muted font-mono block">Mulai Dari:</span>
                    <span className="text-xl font-bold text-foreground font-mono">
                      Rp {tier.basePrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="h-px bg-border-color my-4"></div>

                  <div className="space-y-4 font-sans text-xs">
                    {rows.map((row) => (
                      <div key={row.key} className="space-y-1">
                        <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">
                          {row.label}
                        </span>
                        <p className="text-foreground leading-relaxed font-sans">
                          {tier.features[row.key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={getWhatsAppLink("tier", tier.name, tier.basePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 text-center font-mono text-[10px] font-bold tracking-wider uppercase block transition-colors ${
                      tier.highlighted
                        ? "bg-brand-red hover:bg-red-700 text-white"
                        : "bg-background hover:bg-card-bg text-text-muted hover:text-foreground border border-border-color"
                    }`}
                  >
                    DISKUSIKAN FITUR
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Accordion/Card List */}
          <div className="md:hidden space-y-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`p-5 border flex flex-col justify-between ${
                  tier.highlighted
                    ? "border-brand-red bg-card-bg shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                    : "border-border-color bg-card-bg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[9px] tracking-widest bg-brand-red/10 border border-brand-red/20 text-brand-red px-2 py-0.5">
                      {tier.badge}
                    </span>
                    {tier.highlighted && (
                      <span className="font-mono text-[9px] font-bold text-brand-red">REKOMENDASI</span>
                    )}
                  </div>
                  <h3 className="font-mono font-bold text-xl text-foreground">{tier.name}</h3>
                  <div className="mt-1 mb-4 flex items-baseline gap-1">
                    <span className="text-xs text-text-muted font-mono">Mulai Dari:</span>
                    <span className="text-base font-bold text-foreground font-mono">
                      Rp {tier.basePrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="h-px bg-border-color my-4"></div>

                  <div className="space-y-4 text-xs font-sans">
                    {rows.map((row) => (
                      <div key={row.key} className="grid grid-cols-3 gap-2">
                        <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider col-span-1">
                          {row.label}:
                        </span>
                        <p className="text-foreground col-span-2 leading-relaxed">
                          {tier.features[row.key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={getWhatsAppLink("tier", tier.name, tier.basePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-background border border-border-color text-center font-mono text-[10px] font-bold tracking-wider uppercase block text-text-muted hover:text-foreground"
                  >
                    DISKUSIKAN FITUR
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. OTHERS SECTION (LOW-PRIORITY WIDE ROWS) */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase">
              {othersData.sectionTitle}
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {others.map((other) => (
              <div
                key={other.id}
                className="border border-border-color bg-card-bg p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-red/35 transition-colors duration-200"
              >
                <div className="flex-1">
                  <h3 className="font-mono font-bold text-lg text-foreground mb-2">{other.name}</h3>
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed font-sans max-w-4xl">
                    {other.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between shrink-0 gap-4 min-w-[240px] border-t md:border-t-0 md:border-l border-border-color pt-4 md:pt-0 md:pl-6 mt-4 md:mt-0">
                  <div>
                    <span className="text-text-muted text-[10px] font-mono block">Biaya Mulai:</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-foreground font-mono">
                        Rp {other.startingPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-text-muted text-xs font-mono">/ {other.priceUnit}</span>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppLink("service", other.name, other.startingPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto md:w-full py-2.5 px-6 bg-background border border-border-color text-foreground text-center font-mono text-xs font-bold tracking-widest uppercase transition-colors block hover:border-brand-red"
                  >
                    DISKUSIKAN KASUS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
