"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = React.useRef(false);

  useEffect(() => {
    // Sync React state directly with the documentElement already initialized by the head script
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsTransitioning(true);

    const nextTheme = theme === "dark" ? "light" : "dark";

    const updateDOM = () => {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";
      }
      try {
        localStorage.setItem("theme", nextTheme);
      } catch { }
      setTheme(nextTheme);
    };

    // Graceful fallback if View Transitions API is not supported or reduced motion is preferred
    const hasViewTransition =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasViewTransition) {
      updateDOM();
      isTransitioningRef.current = false;
      setIsTransitioning(false);
      return;
    }

    // Directional transition:
    // Light -> Dark: originates from bottom-left (0, window.innerHeight)
    // Dark -> Light: originates from top-right (window.innerWidth, 0)
    const isNextDark = nextTheme === "dark";
    const x = isNextDark ? 0 : window.innerWidth;
    const y = isNextDark ? window.innerHeight : 0;
    const endRadius = Math.ceil(Math.hypot(window.innerWidth, window.innerHeight)) + 25;

    // Set CSS custom properties on documentElement BEFORE starting the transition
    // so ::view-transition-new(root) has the exact coordinates from frame 0!
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-r", `${endRadius}px`);

    const doc = document as Document & {
      startViewTransition: (callback: () => void) => {
        finished: Promise<void>;
      };
    };

    try {
      const transition = doc.startViewTransition(() => {
        updateDOM();
      });

      transition.finished.finally(() => {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      });
    } catch {
      updateDOM();
      isTransitioningRef.current = false;
      setIsTransitioning(false);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={`p-2 border border-border-color hover:border-brand-red bg-card-bg text-foreground hover:text-brand-red shadow-sm transition-colors duration-200 cursor-pointer focus:outline-none flex items-center justify-center ${isTransitioning ? "pointer-events-none opacity-80" : ""
        }`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
