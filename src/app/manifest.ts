import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kelar.in - Jasa Pembuatan Website & Mentoring Coding",
    short_name: "Kelar.in",
    description:
      "Layanan pengerjaan website UMKM dan mahasiswa, bimbingan coding privat tugas akhir, dan perbaikan bug teknis.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#000000",
    icons: [
      {
        src: "/mark-kelarin.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/logo-kelarin.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
