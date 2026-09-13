# Implementation Plan & Cumulative Prompts: Dual-Theme (Light/Dark) Implementation

This document contains a phase-by-phase implementation plan and cumulative copyable prompts to revert the current flat design back to the original Cyberpunk/Cyber Samurai theme, and then add class-based Dark/Light theme switching capabilities.

---

## Phase 1: Revert & Restore Cyberpunk/Cyber Samurai Dark Base
**Goal**: Get back to the high-contrast, premium, dark-mode cyber aesthetic with pure black background (`#000000`), deep matte grey borders (`#0a0a0a`), stark white titles, and neon crimson red accents (`#ef4444`) that was originally preferred.

### Prompt to Copy:
```text
Please execute Phase 1: Revert the codebase to the high-contrast Cyberpunk/Cyber Samurai dark aesthetic.
1. Revert globals.css:
   - Base background: Pure Black (#000000)
   - Secondary background: Deep Matte Grey (#0a0a0a)
   - Accent: Neon Crimson Red (#ef4444)
   - Scrollbar: Black track, neutral-900 thumb, hover to brand-red (#ef4444)
   - Grid: White grid lines at 0.03 opacity (.cyber-grid)
2. Revert page.tsx, web-development/page.tsx, and academic/page.tsx:
   - Restore all colorful purple/cyan backgrounds, text gradients, and hover transitions back to stark white headings, muted silver text, and sharp neon crimson red accents.
   - Use clean geometric borders (border-neutral-900) instead of glowing colored cards.
   - Ensure the "Portfolio Highlights" section remains deleted, but the "Lihat Portofolio" buttons and links are kept intact.
3. Keep the build compiling cleanly.
```

---

## Phase 2: Configure Class-Based Dark/Light Mode
**Goal**: Set up CSS-first dark mode selectors in Tailwind CSS v4 and define semantic CSS variables for backgrounds, borders, grid colors, and texts in both Light and Dark modes.

### Prompt to Copy:
```text
Please execute Phase 2: Configure class-based theme support in Tailwind CSS v4.
1. Update src/app/globals.css:
   - Define custom variant for class-based theme: `@variant dark (&:where(.dark, .dark *));`
   - Set up CSS variables inside `:root` (Light Mode default values) and `.dark` class (Dark Mode values):
     * --background: Light Mode: #ffffff | Dark Mode: #000000
     * --foreground: Light Mode: #0f172a | Dark Mode: #ffffff
     * --card-bg: Light Mode: #f8fafc | Dark Mode: #0a0a0a
     * --border-color: Light Mode: #e2e8f0 | Dark Mode: #171717
     * --text-muted: Light Mode: #64748b | Dark Mode: #a3a3a3
     * --grid-color: Light Mode: rgba(0, 0, 0, 0.04) | Dark Mode: rgba(255, 255, 255, 0.03)
2. Use these CSS variables in Tailwind's `@theme inline` block so that background, text, border, and grid styles automatically adapt when the `.dark` class is toggled.
```

---

## Phase 3: Implement Theme Switcher & Toggle Switch
**Goal**: Build a React theme provider/state toggler that respects system preference, saves choice to localStorage, and add a toggle button/switch in Navbar.tsx (both desktop and mobile layouts).

### Prompt to Copy:
```text
Please execute Phase 3: Create and integrate Theme Switcher logic.
1. Create a theme utility or hook (e.g. src/hooks/useTheme.ts or inline component context) that:
   - Reads theme from localStorage or defaults to system preference.
   - Adds/removes the 'dark' class from `document.documentElement` accordingly.
   - Keeps track of theme state ('light' | 'dark') reactively.
2. In src/components/Navbar.tsx:
   - Import useTheme.
   - Render a minimalist, high-tech icon button (Sun/Moon) to switch themes.
   - Add it to the desktop navigation items and the mobile drawer menu.
```

---

## Phase 4: Apply Light Mode Styles Across All Pages
**Goal**: Ensure all cards, forms, buttons, tables, and accordions are styled beautifully in Light Mode, keeping the Cyber Samurai crisp layout with neon crimson red accents.

### Prompt to Copy:
```text
Please execute Phase 4: Adapt pages and components to support Light/Dark theme styles.
1. Update components and pages (`src/components/Accordion.tsx`, `src/app/page.tsx`, `src/app/web-development/page.tsx`, `src/app/academic/page.tsx`):
   - Replace flat colors with semantic classes (e.g., bg-background, text-foreground, border-border-color).
   - Style Light Mode highlights: sharp contrast white background, thin slate-200 borders, bright crimson red highlights/badges (`bg-red-500/10 border-red-500/35 text-red-600` in light mode; `bg-red-950/20 border-red-500/20 text-red-400` in dark mode).
   - Ensure the pricing comparison matrix in `/web-development` looks clean and readable on both Light and Dark mode.
2. Run a full project build (`bun run build`) to ensure TypeScript and linting checks are fully successful.
```
