"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  FileText,
  Palette,
  Database,
  MessageSquare,
  Check,
  Sparkles,
  Zap,
  Flame,
  ClipboardCheck
} from "lucide-react";
import { Accordion } from "@/components/Accordion";
import faqData from "@/data/faq.json";
import rawPriceListData from "@/data/katalog.json";
import rawBundlingData from "@/data/bundling.json";
import rawTeknisOrderData from "@/data/teknis-order.json";
import {
  PriceListData,
  BundlingData,
  TeknisOrderData
} from "@/types/catalog";
import { getWhatsAppLink } from "@/utils/whatsapp";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const priceListData = rawPriceListData as PriceListData;
const bundlingData = rawBundlingData as BundlingData;
const teknisOrderData = rawTeknisOrderData as TeknisOrderData;

export default function Home() {
  const [showAllFaq, setShowAllFaq] = useState(false);

  const faqs = faqData as FaqItem[];
  const visibleFaqs = showAllFaq ? faqs : faqs.slice(0, 5);
  const formattedFaqItems = visibleFaqs.map((faq) => ({
    value: faq.id,
    trigger: faq.question,
    content: faq.answer,
  }));

  const defaultWaLink = getWhatsAppLink("general", "Konsultasi Layanan Kelar.in");

  const categoryIcons: Record<string, typeof FileText> = {
    "umum": FileText,
    "it-coding": Laptop,
    "desain-uiux": Palette,
    "data-analisis": Database,
    "mentoring": MessageSquare
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>
      <div className="absolute top-[5%] left-[-15%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] right-[-15%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none z-0"></div>

      <section className="relative z-10 min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 rounded-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse glow-dot"></span>
          <span className="font-mono text-[11px] font-bold tracking-widest text-primary uppercase">
            PELAJAR & MAHASISWA • UMKM, F&B & BISNIS
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-foreground max-w-5xl leading-tight font-mono uppercase">
          Biar tugasmu, kami yang <span className="text-primary inline-block">kelar.in</span>.
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {priceListData.deskripsi}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3.5 w-full justify-center max-w-2xl">
          <Link
            href="/katalog"
            className="px-7 py-4 bg-primary text-primary-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 hover:opacity-90 shadow-md rounded-lg"
          >
            <span>Lihat Price List Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/bundling"
            className="px-7 py-4 bg-accent text-accent-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 hover:brightness-95 shadow-md rounded-lg"
          >
            <Flame className="w-4 h-4" />
            <span>Paket Bundling Hemat</span>
          </Link>
          <a
            href={defaultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 border border-border bg-card hover:border-primary text-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 rounded-lg"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{priceListData.judul}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground font-mono uppercase">
              KATEGORI LAYANAN & HARGA STANDAR
            </h2>
          </div>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary hover:underline uppercase"
          >
            <span>Buka Tabel Price List Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priceListData.kategori.map((cat) => {
            const Icon = categoryIcons[cat.id] || FileText;
            const previewItems = cat.items.slice(0, 4);
            return (
              <div
                key={cat.id}
                className="border border-border bg-card text-card-foreground p-6 rounded-xl shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase rounded">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.grup}</span>
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {cat.items.length} Layanan
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-mono text-foreground uppercase mb-2">
                    {cat.nama}
                  </h3>

                  {cat.deskripsi && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {cat.deskripsi}
                    </p>
                  )}

                  <div className="space-y-2.5 pt-3 border-t border-border">
                    {previewItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between gap-3 text-xs"
                      >
                        <span className="text-foreground font-medium">
                          {item.layanan}
                        </span>
                        <span className="font-mono font-bold text-primary shrink-0">
                          {item.harga}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/katalog?tab=${cat.id}`}
                    className="w-full py-2.5 bg-background border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-lg transition-colors"
                  >
                    <span>Lihat Semua ({cat.items.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="paket-bundling" className="relative z-10 py-20 px-4 sm:px-6 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-primary font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>{bundlingData.judul}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground font-mono uppercase">
                PAKET BUNDLING LEBIH HEMAT
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl">
                {bundlingData.tagline}
              </p>
            </div>
            <Link
              href="/bundling"
              className="px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase rounded-lg inline-flex items-center gap-2 shrink-0 w-fit"
            >
              <span>Lihat Semua 11 Paket Bundling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-10">
            {bundlingData.grup_paket.map((group) => (
              <div key={group.id}>
                <h3 className="font-mono text-base sm:text-lg font-bold text-foreground uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>{group.nama}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.slice(0, 3).map((bundle) => (
                    <div
                      key={bundle.id}
                      className={`border bg-card p-6 rounded-xl flex flex-col justify-between ${
                        bundle.highlighted
                          ? "border-2 border-primary shadow-md"
                          : "border-border shadow-sm"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 bg-accent text-accent-foreground font-mono text-[11px] font-bold uppercase rounded">
                            Hemat {bundle.hemat}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground line-through">
                            {bundle.harga_normal}
                          </span>
                        </div>
                        <h4 className="font-mono text-lg font-black text-foreground uppercase">
                          {bundle.paket}
                        </h4>
                        <div className="font-mono text-2xl font-black text-primary mt-1 mb-3">
                          {bundle.harga_bundling}
                        </div>
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-border">
                          {bundle.poin_isi.map((poin, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{poin}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <a
                        href={getWhatsAppLink("bundle", bundle.paket, bundle.harga_bundling)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 bg-background border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-lg transition-colors"
                      >
                        <span>Order Paket</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-order" className="relative z-10 py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-primary font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>{teknisOrderData.judul}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground font-mono uppercase">
              ALUR ORDER 100% ONLINE & TRANSPARAN
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl">
              {teknisOrderData.tagline}
            </p>
          </div>
          <Link
            href="/cara-order"
            className="px-5 py-2.5 border border-border bg-card hover:border-primary text-foreground font-mono text-xs font-bold uppercase rounded-lg inline-flex items-center gap-2 shrink-0 w-fit transition-colors"
          >
            <span>Detail Teknis Order & Ketentuan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {teknisOrderData.alur_order.map((step) => (
            <div
              key={step.nomor}
              className="border border-border bg-card p-5 rounded-xl relative shadow-xs"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary">
                  {step.nomor}
                </div>
                <span className="font-mono text-[10px] font-semibold px-2 py-0.5 bg-muted border border-border rounded text-muted-foreground">
                  {step.penanggung_jawab}
                </span>
              </div>
              <h3 className="text-base font-bold font-mono text-foreground mb-1.5">
                {step.tahap}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.yang_terjadi}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teknisOrderData.pembayaran.skema.map((item, idx) => (
            <div
              key={idx}
              className="p-5 border border-primary/30 bg-primary/5 rounded-xl"
            >
              <div className="font-mono text-xs font-bold uppercase text-primary mb-1">
                Skema Pembayaran 0{idx + 1}
              </div>
              <div className="font-mono text-sm font-black text-foreground mb-1">
                {item.nilai_pekerjaan}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.skema_pembayaran}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="border-2 border-primary bg-card p-8 md:p-12 text-center rounded-2xl relative overflow-hidden shadow-lg">
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-1 mb-6 rounded-md">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
              SENIN–SABTU • 09.00–21.00 WIB
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-foreground font-mono uppercase mb-4 leading-tight">
            Siap Selesaikan Tugas & Website Anda?
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Konsultasi awal gratis. Ceritakan kebutuhan tugas kuliah, pengolahan data, desain, atau pembuatan website bisnis Anda kepada tim Kelar.in.
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
              <span>CEK PRICE LIST</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-border">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
            <span>FAQ & KETENTUAN</span>
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
