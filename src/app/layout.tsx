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
  title: "Kelar.in | Jasa Pembuatan Website & Mentoring Coding Akademik",
  description:
    "Kelar.in menyediakan jasa pembuatan website kustom untuk UMKM & mahasiswa, mentoring koding 1-on-1, perbaikan bug (debugging), serta kerapihan laporan & slide presentasi sidang.",
  keywords: [
    "jasa website",
    "bimbingan skripsi",
    "tugas akhir",
    "coding privat",
    "debugging",
    "turnitin",
    "pembuatan web",
    "mahasiswa",
    "mentor coding",
  ],
  authors: [{ name: "Kelar.in" }],
  openGraph: {
    title: "Kelar.in | Solusi Koding & Akademik Tepat Sasaran",
    description:
      "Website pengerjaan sistem, tugas besar, mentoring koding praktikum, serta jasa kerapihan laporan & desain presentasi sidang.",
    url: "https://kelar.in",
    type: "website",
  },
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
