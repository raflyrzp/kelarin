"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ExternalLink,
  Laptop,
  FileText,
  Palette,
  Sparkles,
  Flame,
  ArrowRight,
  Zap,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const whatsappDirectUrl = getWhatsAppLink(
    "general",
    "Konsultasi Layanan Kelar.in",
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* MAIN NAVBAR BAR */}
      <div
        className={`backdrop-blur-md transition-colors duration-300 border-b border-border ${
          scrolled ? "bg-background/95 shadow-sm" : "bg-background/85"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo with Live Status Radar */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2.5">
              <Image
                src="/mark-kelarin.png"
                alt="Kelar.in Mark"
                width={28}
                height={28}
                className="h-7 w-7 object-contain group-hover:scale-105 transition-transform"
                priority
                unoptimized
              />
              <span className="font-mono text-xl font-black tracking-tighter text-foreground">
                KELAR
                <span className="text-primary font-extrabold group-hover:animate-pulse">
                  .IN
                </span>
              </span>
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)] animate-pulse"></span>
            </Link>

            {/* Radar status tag */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span>Express Siaga</span>
            </div>
          </div>

          {/* Desktop Center Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                pathname === "/" && !isOpen
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Standout Primary Nav Link: Layanan & Katalog (Direct Link to /katalog) */}
            <Link
              href="/katalog"
              className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 border transition-all duration-200 font-mono text-xs font-bold ${
                pathname === "/katalog"
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-primary/40 bg-primary/10 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-xs"
              }`}
            >
              <span>Yang Bisa Kami Bantu</span>
              <span className="px-1.5 py-0.2 bg-primary text-primary-foreground text-[9px] font-mono font-black tracking-tight uppercase group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
                CEK SINI
              </span>
            </Link>

            {/* Core Offer Anchor: Paket Hemat with Flame (Disabled)
            <Link
              href="/#paket-bundling"
              onClick={(e) => handleNavClick(e, "paket-bundling")}
              className="group relative inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Flame className="w-4 h-4 text-accent group-hover:animate-bounce" />
              <span>Paket Hemat</span>
              <span className="px-1.5 py-0.2 bg-accent/20 text-accent-foreground border border-accent/40 text-[9px] font-mono font-bold tracking-tight uppercase">
                HEMAT
              </span>
            </Link>
            */}

            {/* Cara Order */}
            <Link
              href="/#cara-order"
              onClick={(e) => handleNavClick(e, "cara-order")}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Cara Order
            </Link>

            {/* FAQ */}
            <Link
              href="/#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Section CTA & Theme Controls */}
          <div className="hidden lg:flex items-center gap-3.5">
            <ThemeToggle />

            {/* High-Converting Cyber WhatsApp CTA */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-4 py-2 font-mono text-xs font-semibold text-accent-foreground transition-all duration-300 bg-accent border border-accent hover:opacity-90 shadow-sm cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile View Toggle & Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <ThemeToggle />

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent text-accent-foreground font-mono text-xs font-semibold border border-accent hover:opacity-90"
              aria-label="Konsultasi Sekarang"
            >
              <Zap className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-border text-foreground hover:border-primary focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU SLIDE-OVER DRAWER */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-84 max-w-[85vw] bg-card border-l border-border p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="font-mono text-base font-black tracking-tighter text-foreground flex items-center gap-1.5">
              <span>KELAR<span className="text-primary">.IN</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"></span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Status badge in mobile */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span>Slot Siaga &lt;24 Jam Dibuka</span>
          </div>

          {/* Core Navigation list */}
          <div className="flex flex-col gap-3 font-mono text-sm pt-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 border border-border transition-colors ${
                pathname === "/"
                  ? "border-primary text-primary bg-primary/5 font-bold"
                  : "text-foreground hover:border-primary/50"
              }`}
            >
              01. Home
            </Link>

            {/* Standout Mobile Link: Layanan & Katalog */}
            <Link
              href="/katalog"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 border transition-all font-mono text-xs font-bold ${
                pathname === "/katalog"
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-primary/50 bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>02. Yang Bisa Kami Bantu</span>
              </span>
              <span className="px-1.5 py-0.5 bg-primary text-primary-foreground text-[9px] font-mono uppercase">
                CEK SINI
              </span>
            </Link>

            {/* 
            <Link
              href="/#paket-bundling"
              onClick={(e) => handleNavClick(e, "paket-bundling")}
              className="flex items-center justify-between px-3 py-2 border border-border text-foreground hover:border-primary/50 transition-colors font-bold"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-accent" />
                <span>03. Paket Hemat</span>
              </span>
              <span className="px-1.5 py-0.5 bg-accent text-accent-foreground text-[9px] font-mono font-bold">
                HEMAT
              </span>
            </Link>
            */}

            {/* Service Subsections */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground px-1">
                Kategori Layanan
              </span>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <Link
                  href="/katalog?tab=website"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border bg-background hover:border-primary/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Laptop className="w-3.5 h-3.5 text-primary" />
                    Web Development
                  </span>
                  <span className="text-[10px] text-primary font-mono font-semibold">
                    Rp 150rb+
                  </span>
                </Link>

                <Link
                  href="/katalog?tab=document-academic"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border bg-background hover:border-primary/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    Dokumen & Akademik
                  </span>
                  <span className="text-[10px] text-primary font-mono font-semibold">
                    Rp 3rb/hal
                  </span>
                </Link>

                <Link
                  href="/katalog?tab=design-visual"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border bg-background hover:border-primary/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Palette className="w-3.5 h-3.5 text-primary" />
                    Desain Grafis & PPT
                  </span>
                  <span className="text-[10px] text-primary font-mono font-semibold">
                    Rp 40rb+
                  </span>
                </Link>
              </div>
            </div>

            <Link
              href="/#cara-order"
              onClick={(e) => handleNavClick(e, "cara-order")}
              className="px-3 py-2 border border-border text-foreground hover:border-primary/50 transition-colors"
            >
              04. Cara Order
            </Link>

            <Link
              href="/#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="px-3 py-2 border border-border text-foreground hover:border-primary/50 transition-colors"
            >
              05. FAQ & Garansi
            </Link>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 border border-border text-foreground hover:border-primary/50 transition-colors block"
            >
              06. Hubungi Kami
            </a>
          </div>
        </div>

        {/* Mobile Sticky CTA at Bottom */}
        <div className="pt-6 border-t border-border mt-6">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-accent hover:opacity-90 text-accent-foreground font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-opacity"
          >
            <Zap className="w-4 h-4" />
            <span>Konsultasi Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  );
}
