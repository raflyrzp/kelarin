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
        url: "/preview-kelarin.webp",
        width: 1200,
        height: 630,
        alt: "Katalog Layanan Kelar.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katalog Layanan & Harga | Kelar.in",
    description:
      "Daftar harga dan paket jasa pembuatan website, mentoring coding privat, perbaikan bug program, serta perapian berkas skripsi dan tugas akhir.",
    images: ["/preview-kelarin.webp"],
  },
};

export default function KatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
