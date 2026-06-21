"use client";

import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/utils/whatsapp";
import designData from "@/data/academic/design.json";
import formattingData from "@/data/academic/formatting.json";
import tutorData from "@/data/academic/tutor.json";
import { ArrowLeft, ArrowRight, Check, BookOpen, Layers, MonitorPlay } from "lucide-react";

interface ServiceItem {
  id: string;
  name: string;
  startingPrice: number;
  priceUnit: string;
  description: string;
  points: string[];
}

export default function AcademicPage() {
  const designServices = designData.services as ServiceItem[];
  const formattingServices = formattingData.services as ServiceItem[];
  const tutorServices = tutorData.services as ServiceItem[];

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
            Support Akademik & Mentoring
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground uppercase font-mono">
            LAYANAN AKADEMIK & PENDAMPINGAN KODING
          </h1>
          <p className="mt-4 text-text-muted max-w-3xl leading-relaxed text-sm md:text-base font-sans">
            Kami memahami kepenatan Anda menyusun tugas akhir, skripsi, dan laporan. Hadir dengan solusi terstruktur, ramah mahasiswa, dan bebas dari bahasa teknis yang rumit demi melancarkan kelulusan Anda.
          </p>
        </div>

        {/* THREE DISTINCT MODULAR SECTIONS */}
        <div className="space-y-24">
          
          {/* 1. Academic Formatting Module */}
          <div className="border-t border-border-color pt-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase">
                    {formattingData.sectionTitle}
                  </h2>
                  <p className="text-text-muted text-xs mt-1">{formattingData.disclaimer}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {formattingServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-border-color bg-card-bg p-6 flex flex-col justify-between hover:border-brand-red/50 transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-mono font-bold text-base text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    <div className="h-px bg-border-color my-4"></div>

                    <ul className="space-y-2.5 mb-6">
                      {service.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans text-text-muted">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-text-muted text-[10px] font-mono uppercase">Biaya:</span>
                      <span className="text-lg font-bold text-foreground font-mono">
                        Rp {service.startingPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-text-muted text-xs font-mono">/ {service.priceUnit}</span>
                    </div>
                    <a
                      href={getWhatsAppLink("service", service.name, service.startingPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-background border border-border-color hover:border-brand-red text-foreground font-mono text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      AJUKAN SEKARANG <ArrowRight className="w-3 h-3 text-brand-red" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Academic Design Module */}
          <div className="border-t border-border-color pt-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase">
                    {designData.sectionTitle}
                  </h2>
                  <p className="text-text-muted text-xs mt-1">{designData.disclaimer}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {designServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-border-color bg-card-bg p-6 flex flex-col justify-between hover:border-brand-red/50 transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-mono font-bold text-base text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    <div className="h-px bg-border-color my-4"></div>

                    <ul className="space-y-2.5 mb-6">
                      {service.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans text-text-muted">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-text-muted text-[10px] font-mono uppercase">Biaya:</span>
                      <span className="text-lg font-bold text-foreground font-mono">
                        Rp {service.startingPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-text-muted text-xs font-mono">/ {service.priceUnit}</span>
                    </div>
                    <a
                      href={getWhatsAppLink("service", service.name, service.startingPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-background border border-border-color hover:border-brand-red text-foreground font-mono text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      AJUKAN SEKARANG <ArrowRight className="w-3 h-3 text-brand-red" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Academic Programming Tutor Module (Strictly Isolated) */}
          <div className="border-t border-border-color pt-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                  <MonitorPlay className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono uppercase">
                    {tutorData.sectionTitle}
                  </h2>
                  <p className="text-text-muted text-xs mt-1">{tutorData.disclaimer}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {tutorServices.map((service) => (
                <div
                  key={service.id}
                  className="border border-border-color bg-card-bg p-6 flex flex-col justify-between hover:border-brand-red/50 transition-colors duration-300"
                >
                  <div>
                    <h3 className="font-mono font-bold text-base text-foreground mb-3">
                      {service.name}
                    </h3>
                    <p className="text-text-muted text-xs leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>

                    <div className="h-px bg-border-color my-4"></div>

                    <ul className="space-y-2.5 mb-6">
                      {service.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-sans text-text-muted">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-text-muted text-[10px] font-mono uppercase">Biaya Bimbingan:</span>
                      <span className="text-lg font-bold text-foreground font-mono">
                        Rp {service.startingPrice.toLocaleString("id-ID")}
                      </span>
                      <span className="text-text-muted text-xs font-mono">/ {service.priceUnit}</span>
                    </div>
                    <a
                      href={getWhatsAppLink("service", service.name, service.startingPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-background border border-border-color hover:border-brand-red text-foreground font-mono text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      AJUKAN SEKARANG <ArrowRight className="w-3 h-3 text-brand-red" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
