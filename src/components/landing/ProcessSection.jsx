"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Settings, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
    title: "Diagnóstico",
    desc: "Conversamos 15 minutos para entender tu operación y diseñar la configuración ideal para tu centro.",
    icon: Search,
  },
  {
    number: "02",
    title: "Configuración",
    desc: "Cargamos tus servicios, profesionales, horarios y tarifas. Tú no mueves un dedo.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Capacitación",
    desc: "Tu equipo aprende a operar el sistema en una sesión. Recepción y profesionales, listos desde el primer día.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "En marcha",
    desc: "Empiezas a recibir reservas online, cobros automáticos y recordatorios. Sin intervención manual.",
    icon: Rocket,
  },
];

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
    <section className="relative py-28 bg-white/50 overflow-hidden">
      <AuroraBackground showRadialGradient />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
              Operativo en menos tiempo del que imaginas
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
            ¿Cómo{" "}
            <span className="text-blue-900">empezamos?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mt-5 text-lg text-slate-500 leading-relaxed"
          >
            Sin instalaciones, sin complicaciones.{" "}
            <span className="font-semibold text-slate-700">
              Te configuramos todo y te acompañamos hasta que operes sin problemas.
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
                Implementación garantizada
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              No estás solo, te acompañamos desde el primer día hasta que tu clínica
              esté 100% automatizada y funcionando.
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
