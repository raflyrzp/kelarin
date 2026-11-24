"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileText,
  Info,
  Package,
  RefreshCw,
  Scale,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Zap
} from "lucide-react";
import rawTeknisOrderData from "@/data/teknis-order.json";
import { TeknisOrderData } from "@/types/catalog";
import { getWhatsAppLink } from "@/utils/whatsapp";

const teknisData = rawTeknisOrderData as TeknisOrderData;

export default function CaraOrderPage() {
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
              <span>Lihat Price List</span>
            </Link>
            <Link
              href="/bundling"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase rounded-md hover:opacity-90 transition-opacity"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Paket Bundling</span>
            </Link>
          </div>
        </div>

        <div className="mb-10 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary font-mono text-xs font-bold uppercase mb-3 rounded-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOP & Ketentuan Resmi</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground font-mono uppercase">
            {teknisData.judul}
          </h1>
          <p className="mt-3 text-muted-foreground max-w-3xl text-xs sm:text-sm font-sans leading-relaxed">
            {teknisData.tagline}
          </p>
        </div>

        <section className="mb-12">
          <div className="flex items-center gap-2.5 mb-5">
            <ClipboardCheck className="w-5 h-5 text-primary" />
            <h2 className="text-xl sm:text-2xl font-black font-mono text-foreground uppercase">
              1. ALUR ORDER (9 TAHAP)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {teknisData.alur_order.map((step) => (
              <div
                key={step.nomor}
                className="border border-border bg-card p-5 rounded-xl flex flex-col justify-between shadow-xs hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs font-bold text-primary">
                      {step.nomor}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-muted border border-border rounded text-[10px] font-mono font-semibold text-foreground">
                      <UserCheck className="w-3 h-3 text-primary" />
                      <span>PIC: {step.penanggung_jawab}</span>
                    </span>
                  </div>
                  <h3 className="font-mono text-base font-bold text-foreground mb-1.5">
                    {step.tahap}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.yang_terjadi}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block border border-border bg-card rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50 font-mono text-xs uppercase text-muted-foreground">
                  <th className="py-3.5 px-6 w-[22%]">Tahap</th>
                  <th className="py-3.5 px-6 w-[56%]">Yang Terjadi</th>
                  <th className="py-3.5 px-6 w-[22%]">Penanggung Jawab</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {teknisData.alur_order.map((step) => (
                  <tr key={step.nomor} className="hover:bg-muted/20">
                    <td className="py-3.5 px-6 font-mono font-bold text-foreground">
                      {step.tahap}
                    </td>
                    <td className="py-3.5 px-6 text-muted-foreground text-xs sm:text-sm">
                      {step.yang_terjadi}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-xs font-semibold text-primary">
                      {step.penanggung_jawab}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <section className="border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
                  2. INFORMASI YANG PERLU DISIAPKAN PEMBELI
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Siapkan informasi berikut saat mengisi brief order agar estimasi harga dan pengerjaan lebih akurat:
              </p>
              <ul className="space-y-3">
                {teknisData.informasi_pembeli.map((info, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 border border-border bg-background rounded-lg flex items-start gap-3 text-xs sm:text-sm text-foreground leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
                  3. SKEMA PEMBAYARAN
                </h2>
              </div>

              <div className="border border-border rounded-lg overflow-hidden mb-5">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50 font-mono text-xs uppercase text-muted-foreground">
                      <th className="py-3 px-4 w-[42%]">Nilai Pekerjaan</th>
                      <th className="py-3 px-4 w-[58%]">Skema Pembayaran</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-xs sm:text-sm">
                    {teknisData.pembayaran.skema.map((item, idx) => (
                      <tr key={idx} className="bg-background">
                        <td className="py-3.5 px-4 font-mono font-bold text-foreground align-top">
                          {item.nilai_pekerjaan}
                        </td>
                        <td className="py-3.5 px-4 text-muted-foreground leading-relaxed align-top">
                          {item.skema_pembayaran}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg flex items-start gap-3">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-foreground leading-relaxed">
                {teknisData.pembayaran.catatan}
              </p>
            </div>
          </section>
        </div>

        <section className="mb-12 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <RefreshCw className="w-5 h-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
              4. REVISI, DEADLINE & PEMBATALAN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {teknisData.revisi_deadline_pembatalan.map((rule, idx) => (
              <div
                key={idx}
                className="p-4 border border-border bg-background rounded-lg flex items-start gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded shrink-0">
                  0{idx + 1}
                </span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border border-border bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <Scale className="w-5 h-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
              5. HAK & KEWAJIBAN
            </h2>
          </div>

          <div className="hidden md:block border border-border rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/50 font-mono text-xs uppercase text-foreground">
                  <th className="py-3.5 px-6 w-1/2 border-r border-border">Pembeli</th>
                  <th className="py-3.5 px-6 w-1/2">Penjual (Kelar.in)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {teknisData.hak_dan_kewajiban.map((pair, idx) => (
                  <tr key={idx} className="bg-background">
                    <td className="py-4 px-6 border-r border-border text-muted-foreground">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{pair.pembeli}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{pair.penjual}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden grid grid-cols-1 gap-4">
            <div className="p-4 border border-border bg-background rounded-lg">
              <h3 className="font-mono text-xs font-bold uppercase text-primary mb-3">
                Pembeli
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {teknisData.hak_dan_kewajiban.map((pair, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{pair.pembeli}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border border-border bg-background rounded-lg">
              <h3 className="font-mono text-xs font-bold uppercase text-primary mb-3">
                Penjual (Kelar.in)
              </h3>
              <ul className="space-y-2.5 text-xs text-muted-foreground">
                {teknisData.hak_dan_kewajiban.map((pair, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{pair.penjual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 border-2 border-primary bg-card p-6 sm:p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <ShieldAlert className="w-5 h-5 text-primary" />
            <h2 className="text-lg sm:text-xl font-black font-mono text-foreground uppercase">
              6. KETENTUAN PENTING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teknisData.ketentuan_penting.map((item, idx) => (
              <div
                key={idx}
                className="p-4 border border-border bg-background rounded-lg flex items-start gap-3 text-xs sm:text-sm text-foreground leading-relaxed"
              >
                <span className="font-mono text-xs font-bold text-accent-foreground bg-accent px-2 py-0.5 rounded shrink-0">
                  !
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="p-6 sm:p-8 border border-border bg-card rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div>
            <h3 className="font-mono text-base sm:text-lg font-black text-foreground uppercase">
              Sudah Siap Mulai Tahap 1 (Konsultasi Gratis)?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Jam layanan Senin–Sabtu, 09.00–21.00 WIB. Ceritakan kebutuhan tugas atau website bisnis Anda sekarang.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink("general", "Konsultasi Order Baru Kelar.in")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent hover:opacity-90 text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider transition-opacity shadow-sm flex items-center gap-2 rounded-lg"
            >
              <Zap className="w-4 h-4" />
              <span>Chat WhatsApp Sekarang</span>
            </a>
            <Link
              href="/katalog"
              className="px-5 py-3 border border-border bg-background hover:border-primary text-foreground font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 rounded-lg"
            >
              <span>Cek Price List</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
