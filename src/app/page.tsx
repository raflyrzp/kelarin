"use client";

import React, { useState } from "react";
import { Accordion } from "@/components/Accordion";
import {
  ArrowRight,
  Laptop,
  Sliders,
  Cpu,
  FileText,
  HeartHandshake,
  ExternalLink,
  HelpCircle,
  Send,
  Phone,
  Mail,
} from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "Web Development",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "62895337227111";
    const text = `Halo Kelar.in, saya *${formData.name}* ingin berkonsultasi mengenai layanan *${formData.serviceType}*.\n\nDetail kebutuhan:\n${formData.message}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whyChooseUsData = [
    {
      title: "Berpengalaman dalam Pengembangan Website",
      desc: "Menyelesaikan berbagai proyek web komersial dan sistem akademik dengan standar tinggi.",
      icon: Laptop,
    },
    {
      title: "Pendekatan Sesuai Kebutuhan",
      desc: "Menganalisis kebutuhan bisnis atau modul akademik Anda secara personal tanpa fitur berlebih.",
      icon: Sliders,
    },
    {
      title: "Teknologi Modern",
      desc: "Menggunakan tech stack termutakhir seperti Next.js, Tailwind v4, Laravel, dan Django.",
      icon: Cpu,
    },
    {
      title: "Dokumentasi dan Komunikasi yang Jelas",
      desc: "Penjelasan alur program tanpa jargon IT rumit, transparan, dan terarah sejak awal.",
      icon: FileText,
    },
    {
      title: "Dukungan Setelah Proyek Selesai",
      desc: "Jaminan perbaikan bug, panduan hosting, hingga mentoring persiapan sidang tugas akhir.",
      icon: HeartHandshake,
    },
  ];

  const workflowSteps = [
    { number: "01", title: "Konsultasi", desc: "Diskusi kebutuhan sistem, draf soal kuliah, atau fitur bisnis." },
    { number: "02", title: "Analisis Kebutuhan", desc: "Menganalisis spesifikasi teknis dan estimasi kompleksitas proyek." },
    { number: "03", title: "Penawaran & Kesepakatan", desc: "Penetapan biaya standar transparan dan durasi pengerjaan." },
    { number: "04", title: "Pengembangan", desc: "Proses pembuatan program menggunakan arsitektur bersih dan teratur." },
    { number: "05", title: "Testing", desc: "Pengujian fungsionalitas fitur untuk memastikan bebas dari bug." },
    { number: "06", title: "Deployment", desc: "Instalasi dan peluncuran produk secara online agar bisa langsung diakses." },
    { number: "07", title: "Maintenance", desc: "Dukungan berkelanjutan pasca proyek selesai secara penuh." },
  ];

  const faqItems = [
    {
      value: "faq-1",
      trigger: "Apakah saya harus menyiapkan dokumen/berkas tertentu sebelum berkonsultasi?",
      content:
        "Tidak wajib. Anda bisa berkonsultasi mulai dari tahap ide dasar, draf tugas kuliah, outline modul, atau kebutuhan awal bisnis Anda. Tim kami akan membantu memformulasikan spesifikasi teknisnya secara bertahap.",
    },
    {
      value: "faq-2",
      trigger: "Bagaimana dengan kebijakan revisi dan perbaikan program?",
      content:
        "Kami menyediakan jaminan revisi minor dan perbaikan bug/error secara gratis pasca serah terima file untuk memastikan program berjalan lancar sesuai dengan kesepakatan awal.",
    },
    {
      value: "faq-3",
      trigger: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek?",
      content:
        "Durasi pengerjaan bervariasi bergantung pada kompleksitas sistem. Kami menggunakan formula estimasi transparan berdasarkan total modul dan fitur yang disepakati bersama sebelum pengerjaan dimulai.",
    },
    {
      value: "faq-4",
      trigger: "Apakah seluruh proses komunikasi dan pengerjaan dilakukan secara online?",
      content:
        "Ya, Kelar.in beroperasi penuh secara online (100% remote). Diskusi, demo aplikasi, hingga mentoring program dilakukan melalui WhatsApp dan video conference (Google Meet / Zoom) demi efisiensi waktu Anda.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-red glow-dot"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-red glow-dot"></div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-36 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 border border-brand-red/25 bg-brand-red/5 px-3.5 py-1.5 rounded-none mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-red uppercase">
            Jasa Web Development & Support Akademik
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground max-w-5xl leading-tight font-mono uppercase">
          Solusi Web Development &<br />
          Academic Mentoring untuk<br />
          <span className="text-brand-red">
            Mahasiswa, Organisasi, & UMKM
          </span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          Membantu pengembangan website, sistem informasi, API, serta pendampingan akademik di bidang teknologi dengan pendekatan profesional dan berorientasi pada kebutuhan pengguna.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center px-4 max-w-md">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="group px-8 py-3.5 bg-brand-red hover:bg-red-700 text-white font-mono text-sm font-bold tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Konsultasi Gratis <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-border-color hover:border-brand-red text-foreground hover:text-brand-red font-mono text-sm font-bold tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Lihat Portofolio <ExternalLink className="w-4 h-4 text-brand-red" />
          </a>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-border-color">
        <div className="mb-16">
          <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">01 / VALUES</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground font-mono">WHY CHOOSE US</h2>
          <p className="mt-4 text-text-muted max-w-xl text-sm md:text-base">
            Kami menghadirkan nilai kolaborasi terbaik dengan memadukan keahlian teknis tingkat tinggi serta pelayanan yang berorientasi pada hasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUsData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="border border-border-color bg-card-bg p-6 flex flex-col gap-4 group hover:border-brand-red/50 transition-colors duration-300">
                <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-bold text-sm text-foreground group-hover:text-brand-red transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed mt-auto font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WORKFLOW SECTION */}
      <section id="workflow" className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-border-color">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">02 / PROCESS</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground font-mono">WORKFLOW STAGES</h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto text-sm md:text-base">
            Langkah sistematis pengerjaan proyek dari tahap perencanaan awal hingga dukungan peluncuran sistem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {workflowSteps.map((item, idx) => (
            <div key={idx} className="border border-border-color bg-card-bg p-6 flex flex-col justify-between h-48 relative hover:border-brand-red/30 transition-colors">
              <div>
                <span className="font-mono text-2xl font-black text-brand-red/20">{item.number}</span>
                <h3 className="font-mono font-bold text-sm text-foreground mt-2 leading-tight">{item.title}</h3>
              </div>
              <p className="text-text-muted text-[11px] leading-relaxed mt-4 font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="relative z-10 py-20 px-6 max-w-4xl mx-auto border-t border-border-color">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-red mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="font-mono text-xs font-bold tracking-wider uppercase">03 / FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-mono">PERTANYAAN UMUM</h2>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-20 px-6 max-w-6xl mx-auto border-t border-border-color">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">04 / CONTACT</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground font-mono">KONSULTASIKAN KEBUTUHAN ANDA</h2>
          <p className="mt-4 text-text-muted text-sm md:text-base max-w-xl mx-auto">
            Kirim pesan secara langsung melalui form di bawah untuk merancang konsultasi terstruktur instan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="border border-border-color bg-card-bg p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-mono text-xs font-bold text-text-muted tracking-wide uppercase">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full bg-background border border-border-color rounded-none px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand-red font-sans transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="serviceType" className="block font-mono text-xs font-bold text-text-muted tracking-wide uppercase">
                  Kategori Layanan
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-border-color rounded-none px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand-red font-sans cursor-pointer transition-colors duration-200"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Academic Mentoring">Academic Mentoring</option>
                  <option value="Debugging & Support">Debugging & Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs font-bold text-text-muted tracking-wide uppercase">
                  Detail Kebutuhan / Request
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Jelaskan kebutuhan website, detail pengerjaan, atau materi mentoring pemrograman yang Anda harapkan..."
                  className="w-full bg-background border border-border-color rounded-none px-4 py-3 text-sm text-foreground focus:outline-none focus:border-brand-red font-sans transition-colors duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-red hover:bg-red-700 text-white font-mono text-sm font-bold tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Konsultasi Gratis Sekarang <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-border-color bg-card-bg p-6 flex flex-col gap-4">
              <h3 className="font-mono font-bold text-sm text-foreground uppercase tracking-wider">Fast Response Support</h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Butuh tanggapan cepat? Hubungi atau kunjungi profil kami secara langsung melalui tautan komunikasi terpadu di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/62895337227111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border-color bg-card-bg hover:border-[#25D366] hover:bg-[#25D366]/5 hover:text-[#25D366] transition-all font-mono text-xs font-semibold text-foreground"
              >
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:raflyrzp@gmail.com"
                className="flex items-center gap-3 p-4 border border-border-color bg-card-bg hover:border-brand-red hover:bg-brand-red/5 hover:text-brand-red transition-all font-mono text-xs font-semibold text-foreground"
              >
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <span>Email</span>
              </a>

              <a
                href="https://linkedin.com/in/raflyrzp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border-color bg-card-bg hover:border-[#0077B5] hover:bg-[#0077B5]/5 hover:text-[#0077B5] transition-all font-mono text-xs font-semibold text-foreground"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077B5] shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/raflyrzp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-border-color bg-card-bg hover:border-foreground hover:bg-foreground/5 hover:text-foreground transition-all font-mono text-xs font-semibold text-foreground"
              >
                <GithubIcon className="w-4 h-4 text-foreground shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
