"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Laptop,
  FileText,
  Palette,
  Sparkles,
  Flame,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
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
    targetId: string
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

  const whatsappDirectUrl = getWhatsAppLink("general", "Konsultasi Layanan Kelar.in");

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT / SOCIAL PROOF TICKER */}
      <div className="w-full bg-black text-neutral-300 border-b border-neutral-800/80 py-1.5 px-4 text-[11px] font-mono tracking-wider overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6 truncate">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              SLOT DIBUKA
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-neutral-400 truncate">
              <Zap className="w-3 h-3 text-brand-red shrink-0" />
              Siaga Pengerjaan Kilat &lt;24 Jam
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-neutral-400 truncate">
              <ShieldCheck className="w-3 h-3 text-brand-red shrink-0" />
              Garansi 2x Revisi Minor & Kerahasiaan 100%
            </span>
          </div>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-red hover:text-white transition-colors ml-auto shrink-0 font-bold"
          >
            <span>Konsultasi Cepat WA</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR BAR */}
      <div
        className={`backdrop-blur-md transition-colors duration-300 border-b border-border-color/70 ${scrolled ? "bg-background/90 shadow-sm" : "bg-background/70"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Brand Logo with Live Status Radar */}
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2">
              <span className="font-mono text-xl font-black tracking-tighter text-foreground">
                KELAR<span className="text-brand-red font-extrabold group-hover:animate-pulse">.IN</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#ef4444] animate-pulse"></span>
            </Link>

            {/* Radar status tag */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[10px] font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Express Siaga</span>
            </div>
          </div>

          {/* Desktop Center Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${pathname === "/" && !isOpen
                  ? "text-brand-red font-semibold"
                  : "text-text-muted hover:text-foreground"
                }`}
            >
              Home
            </Link>

            {/* Core Offer Anchor: Paket Hemat with Flame */}
            <a
              href="/#paket-hemat"
              onClick={(e) => handleNavClick(e, "paket-hemat")}
              className="group relative inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200"
            >
              <Flame className="w-4 h-4 text-brand-red group-hover:animate-bounce" />
              <span>Paket Hemat</span>
              <span className="px-1.5 py-0.2 bg-brand-red text-white text-[9px] font-mono font-bold tracking-tight uppercase">
                HEMAT
              </span>
            </a>

            {/* Rich Services Dropdown (Mega Menu Style) */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="group inline-flex items-center gap-1 text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200 focus:outline-none cursor-pointer">
                <span>Layanan & Katalog</span>
                <ChevronDown className="w-3.5 h-3.5 text-text-muted group-hover:text-foreground transition-transform duration-200" />
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="w-96 bg-card-bg border border-border-color p-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 rounded-none"
                  align="start"
                  sideOffset={10}
                >
                  <div className="px-2 py-1.5 border-b border-border-color mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brand-red font-bold">
                      Katalog Layanan Digital
                    </span>
                  </div>

                  {/* Service 1: Web Dev */}
                  <DropdownMenu.Item asChild>
                    <Link
                      href="/katalog?tab=website"
                      className="group flex items-start gap-3 p-2.5 border border-transparent hover:border-brand-red/30 hover:bg-brand-red/5 transition-all cursor-pointer"
                    >
                      <div className="p-2 bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-foreground group-hover:text-brand-red">
                            Web Development
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                            Mulai Rp 150rb
                          </span>
                        </div>
                        <p className="text-text-muted text-[11px] leading-tight mt-1 line-clamp-1">
                          Landing Page, Company Profile, CRUD System, Slicing Figma
                        </p>
                      </div>
                    </Link>
                  </DropdownMenu.Item>

                  {/* Service 2: Academic Document */}
                  <DropdownMenu.Item asChild>
                    <Link
                      href="/katalog?tab=document-academic"
                      className="group flex items-start gap-3 p-2.5 border border-transparent hover:border-brand-red/30 hover:bg-brand-red/5 transition-all cursor-pointer mt-1"
                    >
                      <div className="p-2 bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-foreground group-hover:text-brand-red">
                            Dokumen & Akademik
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                            Mulai Rp 3rb/hal
                          </span>
                        </div>
                        <p className="text-text-muted text-[11px] leading-tight mt-1 line-clamp-1">
                          Reformat Margin Pedoman, Typo & PUEBI, Sitasi Mendeley
                        </p>
                      </div>
                    </Link>
                  </DropdownMenu.Item>

                  {/* Service 3: Graphic Design */}
                  <DropdownMenu.Item asChild>
                    <Link
                      href="/katalog?tab=design-visual"
                      className="group flex items-start gap-3 p-2.5 border border-transparent hover:border-brand-red/30 hover:bg-brand-red/5 transition-all cursor-pointer mt-1"
                    >
                      <div className="p-2 bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-foreground group-hover:text-brand-red">
                            Desain Grafis & Visual
                          </span>
                          <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                            Mulai Rp 40rb
                          </span>
                        </div>
                        <p className="text-text-muted text-[11px] leading-tight mt-1 line-clamp-1">
                          Poster Ilmiah LKTI, Slide PPT Estetik, UI/UX Mockup Figma
                        </p>
                      </div>
                    </Link>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator className="h-px bg-border-color my-2" />

                  {/* Quick link to catalog overview */}
                  <div className="px-2 py-1 flex items-center justify-between text-[11px] font-mono">
                    <Link
                      href="/katalog"
                      className="text-brand-red hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Lihat Rincian Katalog Satuan</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {/* Portfolio / Showcase link */}
            <Link
              href="/portfolio"
              className={`group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${pathname === "/portfolio"
                  ? "text-brand-red font-semibold"
                  : "text-text-muted hover:text-foreground"
                }`}
            >
              <span>Portfolio</span>
              <span className="px-1.5 py-0.2 bg-neutral-800 text-neutral-200 border border-neutral-700 text-[9px] font-mono uppercase">
                Karya
              </span>
            </Link>

            {/* Cara Order */}
            <a
              href="/#cara-order"
              onClick={(e) => handleNavClick(e, "cara-order")}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200"
            >
              Cara Order
            </a>

            {/* FAQ */}
            <a
              href="/#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Right Section CTA & Theme Controls */}
          <div className="hidden lg:flex items-center gap-3.5">
            <ThemeToggle />

            {/* High-Converting Cyber WhatsApp CTA */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-4 py-2 font-mono text-xs font-bold text-white transition-all duration-300 bg-brand-red border border-brand-red hover:bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.25)] hover:shadow-[0_0_20px_rgba(239,68,68,0.45)] cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Konsultasi WA</span>
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
              className="p-2 bg-brand-red text-white font-mono text-xs font-bold border border-brand-red hover:bg-red-600"
              aria-label="Konsultasi WA"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-border-color text-foreground hover:border-brand-red focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU SLIDE-OVER DRAWER */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-84 max-w-[85vw] bg-card-bg border-l border-border-color p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-5">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between border-b border-border-color pb-4">
            <span className="font-mono text-base font-black tracking-tighter text-foreground">
              KELAR<span className="text-brand-red">.IN</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-muted hover:text-foreground"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Status badge in mobile */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-mono text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Slot Siaga &lt;24 Jam Dibuka</span>
          </div>

          {/* Core Navigation list */}
          <div className="flex flex-col gap-3 font-mono text-sm pt-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 border border-border-color transition-colors ${pathname === "/" ? "border-brand-red text-brand-red bg-brand-red/5 font-bold" : "text-foreground hover:border-brand-red/50"
                }`}
            >
              01. Home
            </Link>

            <a
              href="/#paket-hemat"
              onClick={(e) => handleNavClick(e, "paket-hemat")}
              className="flex items-center justify-between px-3 py-2 border border-brand-red/50 bg-brand-red/5 text-foreground hover:bg-brand-red/10 transition-colors font-bold"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand-red" />
                <span>02. Paket Hemat</span>
              </span>
              <span className="px-1.5 py-0.5 bg-brand-red text-white text-[9px] font-mono">
                VALUE
              </span>
            </a>

            {/* Service Subsections */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted px-1">
                Kategori Layanan
              </span>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <Link
                  href="/katalog?tab=website"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border-color bg-background hover:border-brand-red/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Laptop className="w-3.5 h-3.5 text-brand-red" />
                    Web Development
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono">Rp 150rb+</span>
                </Link>

                <Link
                  href="/katalog?tab=document-academic"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border-color bg-background hover:border-brand-red/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <FileText className="w-3.5 h-3.5 text-brand-red" />
                    Dokumen & Akademik
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono">Rp 3rb/hal</span>
                </Link>

                <Link
                  href="/katalog?tab=design-visual"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-2.5 border border-border-color bg-background hover:border-brand-red/50 text-xs"
                >
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Palette className="w-3.5 h-3.5 text-brand-red" />
                    Desain Grafis & PPT
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono">Rp 40rb+</span>
                </Link>
              </div>
            </div>

            {/* Portfolio Link */}
            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3 py-2 border border-border-color transition-colors ${pathname === "/portfolio" ? "border-brand-red text-brand-red bg-brand-red/5 font-bold" : "text-foreground hover:border-brand-red/50"
                }`}
            >
              <span>03. Portfolio & Sampel</span>
              <span className="text-[10px] font-mono text-brand-red font-bold">KARYA</span>
            </Link>

            <a
              href="/#cara-order"
              onClick={(e) => handleNavClick(e, "cara-order")}
              className="px-3 py-2 border border-border-color text-foreground hover:border-brand-red/50 transition-colors"
            >
              04. Cara Order
            </a>

            <a
              href="/#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="px-3 py-2 border border-border-color text-foreground hover:border-brand-red/50 transition-colors"
            >
              05. FAQ & Garansi
            </a>

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-3 py-2 border border-border-color text-foreground hover:border-brand-red/50 transition-colors"
            >
              06. Hubungi Kami
            </a>
          </div>
        </div>

        {/* Mobile Sticky CTA at Bottom */}
        <div className="pt-6 border-t border-border-color mt-6">
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-brand-red hover:bg-red-600 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Chat Konsultasi WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
