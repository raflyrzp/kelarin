import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/mark-kelarin.png"
              alt="Kelar.in Mark"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              unoptimized
            />
            <span className="font-mono text-xl font-black tracking-tighter text-foreground">
              KELAR<span className="text-primary font-extrabold">.IN</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"></span>
          </Link>
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Kelar.in • Senin–Sabtu 09.00–21.00 WIB
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 font-mono text-xs">
          <Link
            href="/katalog?tab=umum"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            01. Umum
          </Link>
          <Link
            href="/katalog?tab=it-coding"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            02A. IT & Web
          </Link>
          <Link
            href="/katalog?tab=desain-uiux"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            02B. Desain & UI/UX
          </Link>
          <Link
            href="/katalog?tab=data-analisis"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            02C. Data & Analisis
          </Link>
          <Link
            href="/katalog?tab=mentoring"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            03. Mentoring
          </Link>
          <Link
            href="/bundling"
            className="text-primary font-bold hover:underline transition-colors"
          >
            Paket Bundling
          </Link>
          <Link
            href="/cara-order"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Teknis Order
          </Link>
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline transition-colors ml-1"
          >
            Owner Portfolio <ArrowUpRight className="w-3 h-3 text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
