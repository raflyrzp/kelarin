import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teknis & Alur Order",
  description:
    "Panduan teknis order Kelar.in 100% online dan transparan: 9 tahapan alur kerja, informasi brief, skema pembayaran DP, aturan revisi, pembatalan, serta hak & kewajiban.",
  alternates: {
    canonical: "/cara-order",
  },
};

export default function CaraOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
