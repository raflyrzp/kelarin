import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paket Bundling Hemat Mahasiswa & UMKM",
  description:
    "Paket bundling hemat Kelar.in untuk pelajar, mahasiswa (makalah, sidang, skripsi, data, karier, coding) serta paket digital UMKM, F&B, dan bisnis.",
  alternates: {
    canonical: "/bundling",
  },
};

export default function BundlingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
