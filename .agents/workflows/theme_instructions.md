# Implementation Plan & Workflow: OKLCH Dual-Theme (Light/Dark) System

This document outlines the design system specifications, color tokens, and implementation guidelines for Kelar.in's OKLCH-based light and dark theme.

---

## 1. Color Palette & Token Architecture

The theme utilizes perceptual OKLCH color spaces for high visual fidelity, uniform contrast, and smooth transitions between light and dark modes.

### Color Tokens

#### Light Mode (`:root`)
- `--background`: `oklch(0.9779 0.0042 56.3756)` (Warm, soft base)
- `--foreground`: `oklch(0.2178 0 0)` (High contrast dark typography)
- `--card`: `oklch(0.9779 0.0042 56.3756)`
- `--card-foreground`: `oklch(0.2178 0 0)`
- `--popover`: `oklch(0.9779 0.0042 56.3756)`
- `--popover-foreground`: `oklch(0.2178 0 0)`
- `--primary`: `oklch(0.4650 0.1470 24.9381)` (Signature Crimson Accent)
- `--primary-foreground`: `oklch(1.0000 0 0)` (Pure white on primary)
- `--secondary`: `oklch(0.9625 0.0385 89.0943)`
- `--secondary-foreground`: `oklch(0.4847 0.1022 75.1153)`
- `--muted`: `oklch(0.9431 0.0068 53.4442)`
- `--muted-foreground`: `oklch(0.4444 0.0096 73.6390)`
- `--accent`: `oklch(0.9619 0.0580 95.6174)`
- `--accent-foreground`: `oklch(0.3958 0.1331 25.7230)`
- `--destructive`: `oklch(0.4437 0.1613 26.8994)`
- `--destructive-foreground`: `oklch(1.0000 0 0)`
- `--border`: `oklch(0.9355 0.0324 80.9937)`
- `--input`: `oklch(0.9355 0.0324 80.9937)`
- `--ring`: `oklch(0.4650 0.1470 24.9381)`
- `--chart-1`: `oklch(0.5054 0.1905 27.5181)`
- `--chart-2`: `oklch(0.4650 0.1470 24.9381)`
- `--chart-3`: `oklch(0.3958 0.1331 25.7230)`
- `--chart-4`: `oklch(0.5553 0.1455 48.9975)`
- `--chart-5`: `oklch(0.4732 0.1247 46.2007)`
- `--sidebar`: `oklch(0.9431 0.0068 53.4442)`
- `--sidebar-foreground`: `oklch(0.2178 0 0)`
- `--sidebar-primary`: `oklch(0.4650 0.1470 24.9381)`
- `--sidebar-primary-foreground`: `oklch(1.0000 0 0)`
- `--sidebar-accent`: `oklch(0.9619 0.0580 95.6174)`
- `--sidebar-accent-foreground`: `oklch(0.3958 0.1331 25.7230)`
- `--sidebar-border`: `oklch(0.9355 0.0324 80.9937)`
- `--sidebar-ring`: `oklch(0.4650 0.1470 24.9381)`

#### Dark Mode (`.dark`)
- `--background`: `oklch(0.2161 0.0061 56.0434)` (Deep rich dark background)
- `--foreground`: `oklch(0.9699 0.0013 106.4238)` (Stark bright foreground)
- `--card`: `oklch(0.2685 0.0063 34.2976)` (Elevated surface)
- `--card-foreground`: `oklch(0.9699 0.0013 106.4238)`
- `--popover`: `oklch(0.2685 0.0063 34.2976)`
- `--popover-foreground`: `oklch(0.9699 0.0013 106.4238)`
- `--primary`: `oklch(0.5054 0.1905 27.5181)` (Vibrant Neon Crimson)
- `--primary-foreground`: `oklch(0.9779 0.0042 56.3756)`
- `--secondary`: `oklch(0.4732 0.1247 46.2007)`
- `--secondary-foreground`: `oklch(0.9619 0.0580 95.6174)`
- `--muted`: `oklch(0.2291 0.0060 56.0708)`
- `--muted-foreground`: `oklch(0.8687 0.0043 56.3660)`
- `--accent`: `oklch(0.5553 0.1455 48.9975)`
- `--accent-foreground`: `oklch(0.9619 0.0580 95.6174)`
- `--destructive`: `oklch(0.6368 0.2078 25.3313)`
- `--destructive-foreground`: `oklch(1.0000 0 0)`
- `--border`: `oklch(0.3741 0.0087 67.5582)`
- `--input`: `oklch(0.3741 0.0087 67.5582)`
- `--ring`: `oklch(0.5054 0.1905 27.5181)`
- `--chart-1`: `oklch(0.7106 0.1661 22.2162)`
- `--chart-2`: `oklch(0.6368 0.2078 25.3313)`
- `--chart-3`: `oklch(0.5771 0.2152 27.3250)`
- `--chart-4`: `oklch(0.8369 0.1644 84.4286)`
- `--chart-5`: `oklch(0.7686 0.1647 70.0804)`
- `--sidebar`: `oklch(0.2161 0.0061 56.0434)`
- `--sidebar-foreground`: `oklch(0.9699 0.0013 106.4238)`
- `--sidebar-primary`: `oklch(0.5054 0.1905 27.5181)`
- `--sidebar-primary-foreground`: `oklch(0.9779 0.0042 56.3756)`
- `--sidebar-accent`: `oklch(0.5553 0.1455 48.9975)`
- `--sidebar-accent-foreground`: `oklch(0.9619 0.0580 95.6174)`
- `--sidebar-border`: `oklch(0.3741 0.0087 67.5582)`
- `--sidebar-ring`: `oklch(0.5054 0.1905 27.5181)`

---

## 2. Backward-Compatible Variable Mappings

To maintain full compatibility with existing components using legacy utility classes:
- `--color-brand-red` -> `var(--primary)`
- `--card-bg` -> `var(--card)`
- `--border-color` -> `var(--border)`
- `--text-muted` -> `var(--muted-foreground)`
- `--section-muted-bg` -> `var(--muted)`
- `--grid-color` -> `oklch(0.2178 0 0 / 0.04)` (light) / `oklch(0.9699 0.0013 106.4238 / 0.05)` (dark)

---

## 3. Typography & Sizing
- **Fonts**: Keep standard project fonts (`var(--font-geist-sans)` and `var(--font-geist-mono)`).
- **Radius**: `0.375rem` (with Tailwind tokens `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`).
- **Shadows**: Tailored multi-elevation shadows with `hsl(0 63% 18% / ...)` tinting.
