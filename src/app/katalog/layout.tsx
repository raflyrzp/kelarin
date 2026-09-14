import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Layanan & Harga",
  description:
    "Daftar harga dan paket jasa pembuatan website, mentoring coding privat, perbaikan bug program, serta perapian berkas skripsi dan tugas akhir.",
  alternates: {
    canonical: "/katalog",
  },
  openGraph: {
    title: "Katalog Layanan & Harga | Kelar.in",
    description:
      "Daftar harga dan paket jasa pembuatan website, mentoring coding privat, perbaikan bug program, serta perapian berkas skripsi dan tugas akhir.",
    url: "https://kelar-in.vercel.app/katalog",
    images: [
      {
        url: "https://kelar-in.vercel.app/preview-kelarin.png",
        secureUrl: "https://kelar-in.vercel.app/preview-kelarin.png",
        width: 1200,
        height: 630,
        alt: "Katalog Layanan Kelar.in",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog Layanan & Harga | Kelar.in",
    description:
      "Daftar harga dan paket jasa pembuatan website, mentoring coding privat, perbaikan bug program, serta perapian berkas skripsi dan tugas akhir.",
    images: ["https://kelar-in.vercel.app/preview-kelarin.png"],
  },
};

export default function KatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
