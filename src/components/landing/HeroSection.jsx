"use client";

import { Michroma } from "next/font/google";
import { motion } from "framer-motion";
import OrbBackground from "@/components/OrbBackground";

const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap" });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const features = [
  { icon: "calendar", text: "Agenda online 24/7" },
  { icon: "file", text: "Fichas clínicas digitales" },
  { icon: "credit", text: "Cobros anticipados" },
  { icon: "doc", text: "Recordatorios automáticos" },
];

const stats = [
  { value: "99.9%", label: "Disponibilidad", sub: "Uptime garantizado" },
  { value: "-40%", label: "Menos no-show", sub: "Con recordatorios" },
  { value: "24/7", label: "Agenda abierta", sub: "Tus pacientes agendan solos" },
];

const icons = {
  calendar: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  ),
  file: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  credit: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  doc: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
};

export default function HeroSection() {
  return (
    <OrbBackground orbX={0.78} orbY={0.50}>
      <div className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col">

          {/* ═══════════════════ HEADER ═══════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center">
                <img src="/logacsolo.png" alt="AgendaClinica logo" className="h-16 w-16 object-contain" />
              </div>
              <div>
                <p className={michroma.className + " text-[13px] text-slate-900"}>AgendaClinica</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Product by NativeCode</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3.5 py-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] text-slate-500">Sistema activo · Listo para usar</span>
            </div>
          </motion.div>

          {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className={michroma.className + " max-w-4xl text-[2.4rem] leading-[1.08] text-slate-900 sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem]"}
            >
              <span className="block pb-3 bg-gradient-to-r from-cyan-700 via-cyan-500 to-indigo-600 bg-clip-text text-transparent font-bold">
                AgendaClinica
              </span>
              <span className="block mt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-[12px]" style={{ fontFamily: 'var(--font-inter), var(--font-montserrat), sans-serif' }}>
                Gestión clínica, simplificada.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.5}
              className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 font-semibold sm:text-[19px] sm:leading-9"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.01em' }}
            >
              Tu agenda organizada, tus pacientes avisados y tus cobros al día.<br className="hidden sm:block" /> Todo automático, desde el primer día.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href="#contacto"
                className="group inline-flex h-12 items-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-700 px-8 text-[13px] font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.30)] transition-all hover:from-cyan-500 hover:to-indigo-600 hover:shadow-[0_22px_50px_rgba(14,165,233,0.38)] active:scale-[0.98]"
              >
                Quiero verlo en acción
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.5}
              className="mt-10 flex flex-wrap justify-center gap-2.5"
            >
              {features.map((feat, index) => (
                <motion.div
                  key={feat.text}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2.6 + index * 0.12}
                  className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/75 px-4 py-2.5 text-[11px] font-medium text-slate-600 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all hover:border-cyan-200 hover:bg-white/90 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                >
                  <span className="text-cyan-600">{icons[feat.icon]}</span>
                  {feat.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3.2}
              className="mt-12 grid w-full max-w-xl grid-cols-3 gap-3"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3.3 + index * 0.15}
                  className="rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm"
                >
                  <div className={michroma.className + " text-xl font-bold bg-gradient-to-r from-cyan-700 to-indigo-700 bg-clip-text text-transparent sm:text-2xl"}>{item.value}</div>
                  <div className="mt-1 text-[12px] font-semibold text-slate-700">{item.label}</div>
                  <div className="mt-0.5 text-[10px] text-slate-400">{item.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ═══════════════════ FOOTER ═══════════════════ */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-6 flex flex-col items-center justify-between gap-3 text-[10px] text-slate-400 sm:flex-row"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-1.5">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <span>SSL Secured</span>
              </div>
              <div className="hidden h-3 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-1.5">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                <span>HIPAA Ready</span>
              </div>
              <div className="hidden h-3 w-px bg-slate-200 sm:block" />
              <div className="flex items-center gap-1.5">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                <span>Encrypted</span>
              </div>
            </div>
            <span>Powered by NativeCode</span>
          </motion.div>
        </div>
      </div>
    </OrbBackground>
  );
}
