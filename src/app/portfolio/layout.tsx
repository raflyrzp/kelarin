import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Pengerjaan Sistem & Dokumen",
  description:
    "Dokumentasi hasil pengerjaan website, bimbingan tugas akhir informatika, perbaikan bug teknis, dan perapian dokumen akademik.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portofolio Pengerjaan Sistem & Dokumen | Kelar.in",
    description:
      "Dokumentasi hasil pengerjaan website, bimbingan tugas akhir informatika, perbaikan bug teknis, dan perapian dokumen akademik.",
    url: "https://kelar-in.vercel.app/portfolio",
    images: [
      {
        url: "/preview-kelarin.webp",
        width: 1200,
        height: 630,
        alt: "Portofolio Kelar.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Pengerjaan Sistem & Dokumen | Kelar.in",
    description:
      "Dokumentasi hasil pengerjaan website, bimbingan tugas akhir informatika, perbaikan bug teknis, dan perapian dokumen akademik.",
    images: ["/preview-kelarin.webp"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
