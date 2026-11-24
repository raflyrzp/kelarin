"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Flame,
  GraduationCap,
  Store,
  ShieldCheck,
  Zap,
  FileText,
  ClipboardList
} from "lucide-react";
import rawBundlingData from "@/data/bundling.json";
import { BundlingData } from "@/types/catalog";
import { getWhatsAppLink } from "@/utils/whatsapp";

const bundlingData = rawBundlingData as BundlingData;

export default function BundlingPage() {
  const [activeGroup, setActiveGroup] = useState<string>("semua");

  const visibleGroups = bundlingData.grup_paket.filter(
    (g) => activeGroup === "semua" || g.id === activeGroup
  );

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
              href="/katalog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-card hover:border-primary text-foreground font-mono text-xs font-bold uppercase rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Lihat Price List Satuan</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/40 text-foreground font-mono text-xs font-bold uppercase mb-3 rounded-md">
            <Flame className="w-3.5 h-3.5 text-primary" />
            <span>Paket Hemat Resmi • Bonus Konsultasi 15 Menit</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground font-mono uppercase">
            {bundlingData.judul}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-3xl text-xs sm:text-sm font-sans leading-relaxed">
            {bundlingData.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-10">
          <button
            onClick={() => setActiveGroup("semua")}
            className={`px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${
              activeGroup === "semua"
                ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40"
                : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Semua Paket (11)</span>
          </button>
          <button
            onClick={() => setActiveGroup("pelajar-mahasiswa")}
            className={`px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${
              activeGroup === "pelajar-mahasiswa"
                ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40"
                : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Paket Pelajar & Mahasiswa (6)</span>
          </button>
          <button
            onClick={() => setActiveGroup("umkm-bisnis")}
            className={`px-5 py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer rounded-lg ${
              activeGroup === "umkm-bisnis"
                ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/40"
                : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Paket UMKM, F&B & Bisnis (5)</span>
          </button>
        </div>

        <div className="space-y-14">
          {visibleGroups.map((group) => {
            const GroupIcon = group.id === "pelajar-mahasiswa" ? GraduationCap : Store;
            return (
              <section key={group.id} className="space-y-6">
                <div className="border-b border-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase mb-1">
                      <GroupIcon className="w-4 h-4" />
                      <span>KATEGORI BUNDLING</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black font-mono text-foreground uppercase">
                      {group.nama}
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {group.target}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className={`border bg-card text-card-foreground p-6 rounded-xl flex flex-col justify-between transition-all duration-200 relative ${
                        item.highlighted
                          ? "border-2 border-primary shadow-md ring-1 ring-primary/20"
                          : "border-border shadow-sm hover:border-primary/50"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-1 bg-accent text-accent-foreground font-mono text-[11px] font-bold uppercase rounded-md">
                            Hemat {item.hemat}
                          </span>
                          {item.highlighted && (
                            <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] font-bold uppercase rounded-md">
                              Populer
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-black font-mono text-foreground uppercase mb-2">
                          {item.paket}
                        </h3>

                        <div className="mb-4 pb-4 border-b border-border">
                          <div className="text-xs font-mono text-muted-foreground line-through">
                            Harga Normal: {item.harga_normal}
                          </div>
                          <div className="text-2xl sm:text-3xl font-black font-mono text-primary mt-0.5">
                            {item.harga_bundling}
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                          {item.isi_paket}
                        </p>

                        <div className="space-y-2 mb-6">
                          <span className="text-[10px] font-mono font-bold uppercase text-foreground block">
                            Rincian Isi Paket:
                          </span>
                          {item.poin_isi.map((poin, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-foreground"
                            >
                              <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{poin}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a
                        href={getWhatsAppLink("bundle", item.paket, item.harga_bundling)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-lg transition-all ${
                          item.highlighted
                            ? "bg-primary text-primary-foreground hover:opacity-90 shadow-sm"
                            : "bg-background border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground"
                        }`}
                      >
                        <span>Ambil Paket {item.paket}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block border border-border bg-card rounded-xl overflow-hidden shadow-xs mt-6">
                  <div className="px-6 py-3 bg-muted/50 border-b border-border font-mono text-xs font-bold uppercase text-foreground">
                    Tabel Perbandingan {group.nama}
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-background/60 font-mono text-xs uppercase text-muted-foreground">
                        <th className="py-3 px-5 w-[18%]">Paket</th>
                        <th className="py-3 px-5 w-[42%]">Isi Paket</th>
                        <th className="py-3 px-5 w-[13%]">Harga Normal</th>
                        <th className="py-3 px-5 w-[14%]">Harga Bundling</th>
                        <th className="py-3 px-5 w-[13%]">Hemat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-xs sm:text-sm">
                      {group.items.map((item) => (
                        <tr key={item.id} className="hover:bg-muted/30">
                          <td className="py-3.5 px-5 font-mono font-bold text-foreground">
                            {item.paket}
                          </td>
                          <td className="py-3.5 px-5 text-muted-foreground">
                            {item.isi_paket}
                          </td>
                          <td className="py-3.5 px-5 font-mono text-muted-foreground line-through">
                            {item.harga_normal}
                          </td>
                          <td className="py-3.5 px-5 font-mono font-bold text-primary">
                            {item.harga_bundling}
                          </td>
                          <td className="py-3.5 px-5 font-mono font-bold text-foreground">
                            <span className="px-2 py-0.5 bg-accent/25 border border-accent/50 rounded text-xs">
                              {item.hemat}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-14 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
              KETENTUAN BUNDLING
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {bundlingData.ketentuan_bundling.map((point, index) => (
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

        <div className="mt-10 p-6 border border-border bg-card rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h3 className="font-mono text-sm sm:text-base font-bold text-foreground uppercase">
              Ingin Kustomisasi Isi Paket Bundling?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Semua paket sudah termasuk bonus konsultasi awal gratis 15 menit. Tambahan halaman, aset, atau fitur dapat didiskusikan lebih dulu.
            </p>
          </div>
          <a
            href={getWhatsAppLink("general", "Konsultasi Paket Bundling Kelar.in")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-accent hover:opacity-90 text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider shrink-0 transition-opacity shadow-sm flex items-center gap-2 rounded-lg"
          >
            <Zap className="w-4 h-4" />
            <span>Konsultasi Paket Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
