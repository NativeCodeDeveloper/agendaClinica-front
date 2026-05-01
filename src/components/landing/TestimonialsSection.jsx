"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const testimonials = [
  {
    quote:
      "Bajamos los no-show a la mitad en el primer mes. Los recordatorios automáticos cambiaron completamente la dinámica de la clínica.",
    author: "Dra. Camila Vargas",
    role: "Médico Estético · Santiago",
    initial: "C",
  },
  {
    quote:
      "Mi recepcionista ya no pasa el día respondiendo WhatsApp. Los pacientes agendan solos, pagan solos y llegan recordados.",
    author: "Felipe M.",
    role: "Administrador · Centro de Salud Integral",
    initial: "F",
  },
  {
    quote:
      "Tardaba mucho ingresando mis citas a un cuaderno, luego a un excel y del excel al calendario, ahora tengo todo en un solo lugar. Es maravilloso",
    author: "María Paz R.",
    role: "Kinesióloga · Valparaíso",
    initial: "M",
  },
];

// ─── LOGOS DE CLIENTES ────────────────────────────────────────────────────────
// Para agregar más logos: { src: "/nombre-archivo.png", alt: "Nombre cliente" }
// Los archivos deben estar en /public/
const clientLogos = [
  { src: "/logos/avalielogo1.png", alt: "Centro avelié" },
  { src: "/logos/catarsis.png", alt: "Catarsis" },
  { src: "/logos/somedlogo.png", alt: "Somed" },
  { src: "/logos/saludb.png", alt: "Salud Bartelsmann" },
  { src: "/logos/metabo.png", alt: "MetaboCare" },
  { src: "/logos/logors.png", alt: "Rsystem" },
  { src: "/logos/drrenzo.png", alt: "Dr. Renzo tais" },
  { src: "/logos/logoortega.png", alt: "Ortega&Shmuck" },
  { src: "/logos/logoinnovadent.png", alt: "Innovadent" },
  { src: "/logos/logofullcolor.png", alt: "Salud Hoi" },
  { src: "/logos/logoespacio.png", alt: "Espacio Descubrirte" },
  { src: "/logos/essenza.png", alt: "Centro Essenza" },
  { src: "/logos/logomedify1.png", alt: "Medify" },
  { src: "/logos/cruzroja.png", alt: "Cruz Roja - San Miguel" },
];

function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.12}
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25, ease }}
        className="h-full bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-100 transition-colors duration-300 flex flex-col"
      >
        <div className="text-4xl leading-none text-blue-200 font-serif mb-3 select-none">
          &ldquo;
        </div>

        <p className="text-slate-600 text-[15px] leading-relaxed flex-1 italic">
          {t.quote}
        </p>

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {t.initial}
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-sm">{t.author}</p>
            <p className="text-slate-400 text-xs">{t.role}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ClientLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={0}
      className="mt-20"
    >
      {/* Bloque de confianza */}
      <div className="text-center mb-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700 mb-3">
          Confían en nosotros
        </p>

        <h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Profesionales y clínicas que ya{" "}
          <span className="text-blue-900">trabajan con nosotros</span>
        </h3>

        <p className="mt-3 text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
          Desde consultas independientes hasta centros con múltiples especialistas.
          Todos eligieron ordenar su operación con Agenda Clínica.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-200" />
          <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
          <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-200" />
        </div>
      </div>

      {/* Slider de logos */}
      <LogoCloud logos={clientLogos} />
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-white/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 text-[11px] font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              Testimonios
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Lo que dicen quienes{" "}
            <span className="text-blue-900">ya lo usan</span>
          </motion.h2>
        </div>

        {/* Cards de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} t={t} index={idx} />
          ))}
        </div>

        {/* Logos de clientes */}
        <ClientLogos />
      </div>
    </section>
  );
}
