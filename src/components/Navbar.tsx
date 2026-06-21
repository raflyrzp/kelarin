"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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

  const menuItems = [
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Workflow", id: "workflow" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border-color/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-xl font-black tracking-tighter text-foreground">
            KELAR<span className="text-brand-red font-extrabold group-hover:animate-pulse">.IN</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#ef4444] animate-pulse"></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
              pathname === "/" ? "text-brand-red font-semibold" : "text-text-muted hover:text-foreground"
            }`}
          >
            Home
          </Link>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200 focus:outline-none cursor-pointer">
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="w-56 bg-card-bg border border-border-color rounded-none p-2 shadow-2xl animate-in fade-in slide-in-from-top-1 duration-200 z-50"
                align="start"
                sideOffset={8}
              >
                <DropdownMenu.Item className="focus:outline-none">
                  <Link
                    href="/web-development"
                    className="flex items-center justify-between px-3 py-2.5 text-sm text-foreground hover:text-brand-red hover:bg-brand-red/5 transition-colors duration-150 font-mono"
                  >
                    <span>Web Development</span>
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-border-color my-1" />
                <DropdownMenu.Item className="focus:outline-none">
                  <Link
                    href="/academic"
                    className="flex items-center justify-between px-3 py-2.5 text-sm text-foreground hover:text-brand-red hover:bg-brand-red/5 transition-colors duration-150 font-mono"
                  >
                    <span>Academic Mentoring</span>
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-sm font-medium tracking-wide text-text-muted hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-4 py-2 font-mono text-xs font-bold text-foreground transition-all duration-300 bg-transparent border border-brand-red/80 hover:border-brand-red overflow-hidden"
          >
            <span className="absolute inset-0 w-0 h-full bg-brand-red transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
            <span className="group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              Lihat Portofolio <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-muted hover:text-foreground focus:outline-none cursor-pointer z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-80 max-w-full bg-background border-l border-border-color p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 mt-16">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-lg font-medium transition-colors ${
              pathname === "/" ? "text-brand-red font-semibold" : "text-foreground hover:text-brand-red"
            }`}
          >
            Home
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-text-muted tracking-wider uppercase">Services</span>
            <div className="pl-4 flex flex-col gap-3 border-l border-border-color">
              <Link
                href="/web-development"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors font-mono ${
                  pathname === "/web-development" ? "text-brand-red" : "text-foreground hover:text-brand-red"
                }`}
              >
                Web Development
              </Link>
              <Link
                href="/academic"
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors font-mono ${
                  pathname === "/academic" ? "text-brand-red" : "text-foreground hover:text-brand-red"
                }`}
              >
                Academic Mentoring
              </Link>
            </div>
          </div>

          <div className="h-px bg-border-color my-1" />

          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-lg font-medium text-foreground hover:text-brand-red transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-border-color">
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 inline-flex items-center justify-center font-mono text-sm font-bold text-foreground bg-transparent border border-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            Lihat Portofolio <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </header>
  );
}
