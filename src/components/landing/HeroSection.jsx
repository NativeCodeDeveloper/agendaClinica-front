"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Shield, Clock, Star, CheckCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";
const MAIL_LINK =
  "mailto:ingenieria.software@nativecode.cl?subject=Consulta%20Agenda%20Cl%C3%ADnica&body=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%2C%20estoy%20interesado%20en%20una%20reuni%C3%B3n%20con%20ustedes.";

const ease = [0.22, 1, 0.36, 1];

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

const stats = [
  { value: "99.9%", label: "Disponibilidad" },
  { value: "−40%", label: "Menos inasistencias" },
  { value: "24/7", label: "Agenda abierta" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white/50 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-white/60 to-white/40 pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-[700px] h-[700px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Navbar ── */}
        <motion.header
          variants={fade} initial="hidden" animate="visible" custom={0}
          className="flex items-center justify-between py-6"
        >
          <div className="flex items-center gap-3">
            <img src="/logacsolo.png" alt="AgendaClinica" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-[13px] font-semibold text-slate-900 tracking-tight leading-none">AgendaClinica</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">by NativeCode</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium text-slate-500">Sistema activo · AC</span>
          </div>
        </motion.header>

        {/* ── Split layout ── */}
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center pb-16 pt-8 min-h-[calc(100vh-88px)]">

          {/* ─ LEFT: texto ─ */}
          <div className="flex flex-col items-start">


            <motion.h1
              variants={fade} initial="hidden" animate="visible" custom={1}
              className="mt-6 text-[2.8rem] sm:text-[3.6rem] lg:text-[4.4rem] font-bold leading-[1.04] text-slate-900"
              style={{ letterSpacing: "-0.03em" }}
            >
              Agenda clínica,<br />
              la gestión profesional de tu consulta<br />
              <span className="text-blue-900">en tus manos.</span>
            </motion.h1>

            <motion.p
              variants={fade} initial="hidden" animate="visible" custom={1.6}
              className="mt-5 text-[16px] sm:text-[18px] text-slate-500 leading-[1.75] max-w-md"
            >
              Organiza horas, pacientes y atención en una sola plataforma. Rápida, confiable y lista desde el primer día.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fade} initial="hidden" animate="visible" custom={2.1}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={WA_LINK} target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-green-500/20 text-[15px]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                Contacto por WhatsApp
              </motion.a>
              <motion.a
                href={MAIL_LINK}
                whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="inline-flex items-center gap-2.5 bg-white text-slate-800 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 shadow-sm text-[15px]"
              >
                <Mail className="h-5 w-5 text-blue-900" strokeWidth={2} />
                Contacto por Correo
              </motion.a>
            </motion.div>

            {/* Trust */}
            <motion.div
              variants={fade} initial="hidden" animate="visible" custom={2.6}
              className="mt-6 flex flex-wrap gap-5"
            >
              {[
                { icon: Shield, text: "SSL Secured" },
                { icon: Clock, text: "Setup en 72 hrs" },
                { icon: Star, text: "Soporte incluido" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fade} initial="hidden" animate="visible" custom={3}
              className="mt-10 flex items-center gap-8 pt-8 border-t border-slate-100 w-full"
            >
              {stats.map((s, i) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-bold text-blue-900"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─ RIGHT: visual ─ */}
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={1.2}
            className="relative hidden lg:block"
          >
            {/* Mockup principal */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300/80" />
                <div className="mx-auto flex items-center gap-1.5 bg-white border border-slate-200 rounded px-3 py-0.5 text-[10px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  app.agendaclinicas.cl/panel
                </div>
              </div>
              <img src="/pc33.png" alt="Panel AgendaClinica" className="w-full object-cover" />
            </div>

            {/* Floating card — Nueva reserva */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease }}
              className="absolute -left-10 top-16 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3 min-w-[180px]"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-slate-900 leading-none">Nueva reserva</p>
                <p className="text-[10px] text-slate-400 mt-1">María P. · Kinesiología</p>
              </div>
            </motion.div>

            {/* Floating card — Uptime */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.6, ease }}
              className="absolute -right-8 bottom-20 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 min-w-[140px]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Disponibilidad</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-blue-900" style={{ letterSpacing: "-0.03em" }}>99.9%</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] text-emerald-600 font-medium">Sin interrupciones</span>
              </div>
            </motion.div>

            {/* Floating card — Pagos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6, ease }}
              className="absolute left-6 -bottom-5 bg-blue-900 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] text-blue-200 leading-none">Recordatorio enviado</p>
                <p className="text-[12px] font-semibold text-white mt-0.5">3 pacientes · mañana</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
