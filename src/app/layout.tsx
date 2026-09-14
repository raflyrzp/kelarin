import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kelar-in.vercel.app"),
  title: {
    default: "Kelar.in | Jasa Pembuatan Website & Mentoring Coding Akademik",
    template: "%s | Kelar.in",
  },
  description:
    "Layanan pengerjaan website UMKM dan mahasiswa, bimbingan coding privat tugas akhir, perbaikan bug teknis, serta perapian format laporan dan slide presentasi sidang.",
  keywords: [
    "jasa website",
    "jasa pembuatan website",
    "bimbingan skripsi informatika",
    "tugas akhir informatika",
    "mentoring coding",
    "kursus coding privat",
    "debugging web",
    "perbaikan bug website",
    "cek turnitin",
    "perapian format skripsi",
    "desain slide sidang",
    "kelar.in",
  ],
  authors: [{ name: "Kelar.in", url: "https://kelar-in.vercel.app" }],
  creator: "Kelar.in",
  publisher: "Kelar.in",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kelar.in | Jasa Pembuatan Website & Mentoring Coding Akademik",
    description:
      "Layanan pengerjaan website UMKM dan mahasiswa, bimbingan coding privat tugas akhir, perbaikan bug teknis, serta perapian format laporan dan slide presentasi sidang.",
    url: "https://kelar-in.vercel.app",
    siteName: "Kelar.in",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/preview-kelarin.webp",
        width: 1200,
        height: 630,
        alt: "Kelar.in - Jasa Pembuatan Website & Mentoring Coding",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelar.in | Jasa Pembuatan Website & Mentoring Coding Akademik",
    description:
      "Layanan pengerjaan website UMKM dan mahasiswa, bimbingan coding privat tugas akhir, perbaikan bug teknis, serta perapian format laporan dan slide presentasi sidang.",
    images: ["/preview-kelarin.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://kelar-in.vercel.app/#website",
      "url": "https://kelar-in.vercel.app",
      "name": "Kelar.in",
      "description": "Jasa Pembuatan Website & Mentoring Coding Akademik",
      "inLanguage": "id-ID",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kelar-in.vercel.app/#organization",
      "name": "Kelar.in",
      "url": "https://kelar-in.vercel.app",
      "logo": "https://kelar-in.vercel.app/preview-kelarin.webp",
      "image": "https://kelar-in.vercel.app/preview-kelarin.webp",
      "description":
        "Layanan pengerjaan website UMKM dan mahasiswa, bimbingan coding privat tugas akhir, perbaikan bug teknis, serta perapian format laporan dan slide presentasi sidang.",
      "telephone": "+6281517983828",
      "priceRange": "Rp 25.000 - Rp 1.500.000+",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ID",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  if (stored === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-grow flex flex-col pt-[88px] sm:pt-[92px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
