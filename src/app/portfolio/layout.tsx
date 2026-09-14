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
        url: "https://kelar-in.vercel.app/preview-kelarin.png",
        secureUrl: "https://kelar-in.vercel.app/preview-kelarin.png",
        width: 1200,
        height: 630,
        alt: "Portofolio Kelar.in",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Pengerjaan Sistem & Dokumen | Kelar.in",
    description:
      "Dokumentasi hasil pengerjaan website, bimbingan tugas akhir informatika, perbaikan bug teknis, dan perapian dokumen akademik.",
    images: ["https://kelar-in.vercel.app/preview-kelarin.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
