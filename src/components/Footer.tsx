import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-color py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="group flex items-center gap-1.5">
            <span className="font-mono text-xl font-black tracking-tighter text-foreground">
              KELAR<span className="text-brand-red font-extrabold">.IN</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#ef4444]"></span>
          </Link>
          <p className="text-xs text-text-muted font-mono">
            © {new Date().getFullYear()} Kelar.in. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8 font-mono text-xs">
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-text-muted hover:text-foreground hover:underline transition-colors"
          >
            Owner Portfolio <ArrowUpRight className="w-3 h-3 text-brand-red" />
          </a>
          <Link href="/web-development" className="text-text-muted hover:text-foreground transition-colors">
            Jasa Web Development
          </Link>
          <Link href="/academic" className="text-text-muted hover:text-foreground transition-colors">
            Jasa Akademik
          </Link>
        </div>
      </div>
    </footer>
  );
}

