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
            />
            <span className="font-mono text-xl font-black tracking-tighter text-foreground">
              KELAR<span className="text-primary font-extrabold">.IN</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"></span>
          </Link>
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Kelar.in. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 font-mono text-xs">
          <Link
            href="/katalog?tab=umum"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dokumen & Akademik
          </Link>
          <Link
            href="/katalog?tab=it-programming"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            IT & Koding
          </Link>
          <Link
            href="/katalog?tab=desain-grafis"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Desain Visual
          </Link>
          <Link
            href="/katalog?tab=mentoring"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Mentoring
          </Link>
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline transition-colors ml-2"
          >
            Owner Portfolio <ArrowUpRight className="w-3 h-3 text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
