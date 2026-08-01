"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Settings,
  GraduationCap,
  Rocket,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

const steps = [
  {
    number: "01",
    title: "Mapeo de tu operación",
    desc: "Entendemos cómo reservas, confirmas, cobras y atiendes hoy para configurar el flujo correcto.",
    icon: Search,
  },
  {
    number: "02",
    title: "Configuración guiada",
    desc: "Cargamos servicios, profesionales, horarios, tarifas y reglas para que partas con una base ordenada.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Capacitación del equipo",
    desc: "Recepción y profesionales aprenden el flujo real: reservar, reagendar, revisar fichas y dar seguimiento.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Operación en vivo",
    desc: "Empiezas a recibir reservas online, pagos y recordatorios con acompañamiento durante la puesta en marcha.",
    icon: Rocket,
  },
];

const carouselImages = [
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.33.09.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.33.31.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.33.55.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.34.12.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.35.27.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.35.46.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.36.40.png",
  "/carrusel/Captura%20de%20pantalla%202026-05-19%20a%20la(s)%2009.38.08.png",
  "/carrusel/IMG_0153.jpg",
  "/carrusel/IMG_0154.jpg",
  "/carrusel/IMG_0150%202.jpg",
  "/carrusel/IMG_0164.jpg",
  "/carrusel/IMG_0167.jpg",
];

function ProcessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="mb-14">
      <div className="mb-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          Plataforma en acción
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
          Mira cómo se ordena una jornada clínica
        </h3>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-3 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-sky-50/70 to-transparent pointer-events-none" />

        <div className="relative aspect-[16/8.8] overflow-hidden rounded-[24px] bg-slate-100">
          {carouselImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Vista Agenda Clinica ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-linear-to-t from-slate-950/18 via-transparent to-white/10 pointer-events-none" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/88 text-slate-700 shadow-sm backdrop-blur transition-colors hover:bg-white"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/88 text-slate-700 shadow-sm backdrop-blur transition-colors hover:bg-white"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {carouselImages.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-blue-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CortexVideoSection() {
  return (
    <div id="cortex" className="relative mb-20 scroll-mt-24 overflow-hidden rounded-[32px] border border-blue-200/70 bg-slate-950 px-4 py-7 shadow-[0_28px_80px_rgba(15,23,42,0.16)] sm:px-7 sm:py-9 lg:-mx-10 lg:px-10 lg:py-12 xl:-mx-16">
      <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.07] via-transparent to-blue-400/[0.06]" />

      <div className="relative">
        <div className="mx-auto max-w-5xl text-center text-white">
          <div className="mx-auto mb-7 h-40 w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/15 bg-white/95 shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:h-44 sm:rounded-3xl">
            <img
              src="/logos/77777777.png"
              alt="Cortex A.I."
              className="h-full w-full scale-110 object-cover object-center"
            />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Inteligencia artificial clínica
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
            Cortex en acción
          </p>
          <h3 id="cortex-video-title" className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Completa fichas clínicas en menos tiempo y fortalece tu análisis diagnóstico
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-slate-300 sm:text-base">
            Cortex organiza la información de la atención, redacta automáticamente la ficha clínica y analiza los antecedentes registrados para entregar sugerencias que apoyen el diagnóstico del profesional.
          </p>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2 sm:gap-4">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200 backdrop-blur-sm sm:p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" strokeWidth={2} />
              <span>Fichas clínicas completas, claras y estructuradas</span>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-200 backdrop-blur-sm sm:p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" strokeWidth={2} />
              <span>Sugerencias diagnósticas basadas en los antecedentes de la atención</span>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base font-medium leading-7 text-blue-100 sm:text-lg">
            Mira cómo Cortex transforma los datos de una atención en una ficha clínica estructurada y entrega apoyo diagnóstico en segundos.
          </p>
        </div>

        <div className="mt-9 overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.07] p-2.5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:mt-10 sm:p-3.5">
          <div className="mb-2.5 flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              <FileText className="h-3.5 w-3.5 text-blue-300" strokeWidth={2} />
              Ficha clínica asistida
            </div>
          </div>

          <div className="overflow-hidden rounded-[17px] bg-black ring-1 ring-white/10">
            <video
              className="aspect-video w-full bg-black object-contain"
              src="/fichaClinicaClip.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Demostración del llenado de fichas clínicas asistido por Cortex"
            >
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl border-t border-white/10 pt-6 text-center text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
          Cortex funciona como asistente clínico. Sus sugerencias no reemplazan el criterio, la evaluación ni la decisión final del profesional.
        </p>
      </div>
    </div>
  );
}

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.12}
      className="group relative"
    >
      {/* Connector line (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-[calc(100%+1px)] w-full h-px bg-linear-to-r from-slate-200 to-transparent z-0 pointer-events-none" />
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25, ease }}
        className="relative h-full bg-white rounded-2xl p-7 border border-slate-200/70 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-100 transition-colors duration-300 overflow-hidden"
      >
        {/* Número decorativo de fondo */}
        <div
          className="absolute -top-4 -right-3 text-8xl font-black text-slate-50 select-none group-hover:text-blue-50 transition-colors duration-300"
          aria-hidden
        >
          {step.number}
        </div>

        {/* Ícono */}
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-900 mb-5 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
        </div>

        {/* Paso badge */}
        <span className="relative z-10 inline-block text-[10px] font-bold uppercase tracking-widest text-blue-800 mb-3">
          Paso {step.number}
        </span>

        <h3 className="relative z-10 text-[17px] font-bold text-slate-900 mb-2.5 leading-snug">
          {step.title}
        </h3>

        <p className="relative z-10 text-slate-500 text-sm leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessCarousel />
        <CortexVideoSection />

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 text-[11px] font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
              Implementación acompañada
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
            De agenda dispersa a operación{" "}
            <span className="text-blue-900">controlada.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mt-5 text-lg text-slate-500 leading-relaxed"
          >
            Sin instalaciones ni procesos eternos.{" "}
            <span className="font-semibold text-slate-700">
              Te ayudamos a dejar listo el sistema para que el cambio se sienta ordenado, no pesado.
            </span>
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <StepCard key={step.number} step={step} index={idx} />
          ))}
        </div>

        {/* CTA guarantee block */}
        <motion.div
          ref={ctaRef}
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          custom={0}
          className="mt-14 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" strokeWidth={2} />
              <span className="font-semibold text-slate-900 text-[15px]">
                Acompañamiento real de implementación
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Te guiamos desde la configuración hasta el primer uso real, con soporte para resolver dudas del equipo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
              {["Soporte continuo", "Sin costos ocultos", "Capacitación incluida"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
