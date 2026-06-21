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
      title: "Udah Berpengalaman Bikin Web",
      desc: "Udah banyak ngerjain project web komersial maupun tugas kuliah koding dengan hasil rapi.",
      icon: Laptop,
    },
    {
      title: "Custom Sesuai Kebutuhan Kamu",
      desc: "Kita dengerin apa yang kamu butuhin, nggak bakal dikasih fitur nggak penting biar hemat budget.",
      icon: Sliders,
    },
    {
      title: "Tech Stack Kekinian",
      desc: "Pakai framework modern yang cepet banget kayak Next.js, React, Tailwind, Laravel, dll.",
      icon: Cpu,
    },
    {
      title: "Komunikasi Santai & Jelas",
      desc: "Nggak bakal bikin pusing pakai istilah IT yang aneh-aneh. Kita jelasin santai gampang dipahami.",
      icon: FileText,
    },
    {
      title: "Support Pasca Project Selesai",
      desc: "Ada garansi bebas bug, dibantu hosting, sampai diajarin cara jelasin kodingan buat sidang.",
      icon: HeartHandshake,
    },
  ];

  const workflowSteps = [
    { number: "01", title: "Ngobrol Santai", desc: "Ceritain ide web kamu atau tugas kuliah koding apa yang lagi bikin pusing." },
    { number: "02", title: "Bedah Konsep", desc: "Kita rinci fitur-fiturnya dan teknologi apa yang paling cocok biar pas." },
    { number: "03", title: "Deal Harga", desc: "Harga transparan dan jujur, pas di kantong mahasiswa maupun bisnis baru." },
    { number: "04", title: "Proses Koding", desc: "Kita mulai bikin web kamu dengan kode yang rapi dan performa ngebut." },
    { number: "05", title: "Uji Coba", desc: "Uji coba semua fitur biar dipastikan aman, lancar, dan bebas error." },
    { number: "06", title: "Rilis Online", desc: "Website kamu resmi online dan siap dikunjungi siapa aja." },
    { number: "07", title: "Pendampingan", desc: "Kita tetep bantu kalau ada pertanyaan atau kendala setelah rilis." },
  ];

  const faqItems = [
    {
      value: "faq-1",
      trigger: "Mesti siapin dokumen/berkas apa aja sebelum konsultasi?",
      content:
        "Nggak wajib kok! Punya ide kasar atau coretan di kertas aja juga boleh. Langsung chat aja, nanti kita bantu susun konsepnya bareng-bareng dari nol.",
    },
    {
      value: "faq-2",
      trigger: "Bisa minta revisi atau perbaikan kalau ada yang kurang?",
      content:
        "Pasti bisa! Kita kasih garansi revisi minor dan perbaikan error/bug gratis setelah web diserahin biar kamu tenang kodingannya jalan mulus.",
    },
    {
      value: "faq-3",
      trigger: "Berapa lama pengerjaannya biasanya?",
      content:
        "Tergantung tingkat kerumitan web atau tugasnya ya. Tapi tenang, kita selalu kasih estimasi waktu yang transparan dan realistis sebelum deal.",
    },
    {
      value: "faq-4",
      trigger: "Semua proses ngobrolnya online atau gimana?",
      content:
        "Yap, 100% online biar sat-set. Kita bisa diskusi via WhatsApp atau share screen lewat Google Meet/Zoom biar gampang dipahami.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>

      {/* Background ambient glowing blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[700px] md:h-[700px] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] md:blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] right-[-15%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] md:blur-[140px] pointer-events-none z-0"></div>

      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-brand-red glow-dot"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-red glow-dot"></div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-36 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 border border-brand-red/25 bg-brand-red/5 px-3.5 py-1.5 rounded-none mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
          <span className="font-mono text-xs font-semibold tracking-widest text-brand-red uppercase">
            Solusi Bikin Web & Tugas Koding Sat-Set
          </span>
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground max-w-5xl leading-tight font-mono uppercase">
          Bikin Website Impian &<br />
          Kelarin Tugas Koding Kamu,<br />
          <span className="text-brand-red">
            Nggak Pake Ribet!
          </span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-text-muted max-w-3xl leading-relaxed">
          Butuh website buat bisnis, portofolio kece, atau pusing sama tugas kuliah koding? Tenang, kita bantu selesaikan semuanya dengan teknologi terbaru, harga bersahabat, dan pastinya anti-ribet.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center px-4 max-w-md">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="group px-8 py-3.5 bg-brand-red hover:bg-red-700 text-white font-mono text-sm font-bold tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Tanya-Tanya Dulu (Gratis!) <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://raflyrzp.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3.5 border border-border-color hover:border-brand-red text-foreground hover:text-brand-red font-mono text-sm font-bold tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Cek Karya Kita <ExternalLink className="w-4 h-4 text-brand-red" />
          </a>
        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="relative z-10 py-20 px-6 max-w-7xl mx-auto border-t border-border-color">
        <div className="mb-16">
          <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">01 / VALUES</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground font-mono">KENAPA HARUS KELAR.IN?</h2>
          <p className="mt-4 text-text-muted max-w-xl text-sm md:text-base">
            Bukan sekadar koding, kita kasih solusi terbaik biar urusan kamu langsung kelar tanpa drama.
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
      <section id="workflow" className="relative z-10 py-20 border-y border-border-color bg-section-muted-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">02 / PROCESS</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground font-mono">CARA KERJA KITA (SAT-SET!)</h2>
            <p className="mt-4 text-text-muted max-w-xl mx-auto text-sm md:text-base">
              Langkah gampang pengerjaan proyek dari tahap ngobrol awal sampai web kamu siap rilis online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {workflowSteps.map((item, idx) => (
              <div key={idx} className="border border-border-color bg-background p-6 flex flex-col justify-between h-48 relative hover:border-brand-red/30 transition-colors">
                <div>
                  <span className="font-mono text-2xl font-black text-brand-red/20">{item.number}</span>
                  <h3 className="font-mono font-bold text-sm text-foreground mt-2 leading-tight">{item.title}</h3>
                </div>
                <p className="text-text-muted text-[11px] leading-relaxed mt-4 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="relative z-10 py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-red mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="font-mono text-xs font-bold tracking-wider uppercase">03 / FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-mono">FAQ (YANG SERING DITANYAIN)</h2>
        </div>

        <Accordion items={faqItems} />
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-20 px-6 max-w-6xl mx-auto border-t border-border-color">
        <div className="text-center mb-16">
          <span className="font-mono text-xs font-bold text-brand-red tracking-wider uppercase">04 / CONTACT</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground font-mono">YUK, KELARIN SEKARANG JUGA!</h2>
          <p className="mt-4 text-text-muted text-sm md:text-base max-w-xl mx-auto">
            Isi form di bawah buat langsung tersambung dan chat konsultasi sama kita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleFormSubmit} className="border border-border-color bg-card-bg p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-mono text-xs font-bold text-text-muted tracking-wide uppercase">
                  Nama Kamu
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
                  Kebutuhan Jasa
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
                  Ceritain Kebutuhan Kamu
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
                Hubungi Lewat WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-border-color bg-card-bg p-6 flex flex-col gap-4">
              <h3 className="font-mono font-bold text-sm text-foreground uppercase tracking-wider">Butuh Respon Cepat?</h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Langsung klik tombol di bawah buat ngobrol langsung lewat sosmed/chat kita ya!
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
