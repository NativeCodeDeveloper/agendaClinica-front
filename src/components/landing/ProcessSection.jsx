"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  SlidersHorizontal,
  Presentation,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CortexSection from "./CortexSection";
import FoldText from "@/components/ui/FoldText";
import { IlustracionOperacion, IlustracionConfiguracion, IlustracionCapacitacion, IlustracionInicio } from "./IlustracionesProceso";

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
    title: "Conocemos tu operación",
    desc: "Revisamos tus servicios, profesionales y necesidades.",
    icon: ClipboardList,
    ilustracion: <IlustracionOperacion />,
  },
  {
    number: "02",
    title: "Configuramos por ti",
    desc: "Cargamos servicios, tarifas y reglas de agenda.",
    icon: SlidersHorizontal,
    ilustracion: <IlustracionConfiguracion />,
  },
  {
    number: "03",
    title: "Capacitamos a tu equipo",
    desc: "Te guiamos paso a paso hasta que estén listos.",
    icon: Presentation,
    ilustracion: <IlustracionCapacitacion />,
  },
  {
    number: "04",
    title: "¡Empieza a agendar!",
    desc: "Recibe reservas, pagos y recordatorios desde el primer día.",
    icon: CalendarCheck,
    ilustracion: <IlustracionInicio />,
  },
];

const carouselImages = [
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2023.09.58.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.24.01.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.27.52.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.28.14.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.28.33.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.30.26.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.30.36.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.31.27.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.31.42.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.31.53.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.32.04.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.32.24.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.32.33.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.32.53.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.33.38.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.57.41.png",
  "/nuevasFotosAc/Captura%20de%20pantalla%202026-09-13%20a%20la(s)%2022.57.57.png",
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
    <div className="mb-14 hidden lg:block">
      <div className="mb-6 text-center">
        <h3 className="mt-3 text-3xl sm:text-4xl">
          <FoldText
            text="¿Y cómo se ve la aplicación?"
            splitBy="char"
            hinge="top"
            trigger="scroll"
            duration={0.65}
            stagger={0.045}
            ease="power3.out"
            perspective={700}
            creaseShading={0.55}
            fontSize="clamp(2.25rem, 5vw, 3.5rem)"
            fontWeight={800}
            color="#020617"
          />
        </h3>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white p-3 shadow-[0_22px_60px_rgba(15,23,42,0.1)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-sky-50/70 to-transparent pointer-events-none" />

        <div className="relative aspect-[16/8.8] overflow-hidden rounded-3xl bg-slate-100">
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
                index === currentIndex ? "w-8 bg-indigo-700" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
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
      {index < steps.length - 1 && (
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden w-[calc(100%+1.25rem)] border-t-2 border-dashed border-violet-200/60 xl:block" />
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25, ease }}
        className="relative flex h-full flex-col rounded-3xl border border-indigo-100/70 bg-white/90 px-6 pb-5 pt-11 shadow-[0_3px_6px_#312e8108,0_10px_26px_#312e8104] transition-colors duration-300 hover:border-violet-200 sm:px-7 min-[1440px]:px-8"
      >
        <span className="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-violet-500/30 bg-linear-to-br from-violet-600 to-indigo-600 text-[22px] font-bold text-white ring-5 ring-[#fcfcff]">
          <span className="sr-only">Paso </span>
          {step.number}
        </span>

        <div className="mb-4 flex size-15 items-center justify-center rounded-2xl border border-white/80 bg-linear-to-br from-violet-50 to-violet-100 text-violet-600 shadow-[0_3px_8px_#7c3aed08]">
          <Icon className="size-8" strokeWidth={2} aria-hidden="true" />
        </div>

        <h3 className="relative z-10 mb-2 text-[21px] leading-tight! font-bold tracking-[-0.045em] text-[#09091c] min-[1440px]:text-[23px]">
          {step.title}
        </h3>

        <p className="relative z-10 min-h-14 max-w-70 text-[17px] leading-[1.4] text-[#6b77a0] min-[1440px]:text-[18px]">
          {step.desc}
        </p>
        <div aria-hidden="true" className="pointer-events-none mt-auto pt-5">{step.ilustracion}</div>
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
        <CortexSection />
      </div>

      <div id="implementacion" className="relative isolate bg-[#fcfcff] pb-10 pt-12 sm:pt-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-100 -top-140 h-200 w-240 -rotate-35 rounded-[50%] border-65 border-violet-100/35" />
          <div className="absolute -right-100 -top-135 h-200 w-300 -rotate-35 rounded-[50%] border-60 border-indigo-100/25" />
        </div>
        <div className="mx-auto max-w-420 px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mx-auto mb-14 max-w-6xl text-center sm:mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="text-balance text-[34px] leading-[1.05]! font-bold tracking-[-0.055em] text-[#09091c] sm:text-5xl lg:text-[60px] min-[1440px]:text-[68px]"
          >
            Cero curva de aprendizaje,
            <span className="mt-1 block">agendando desde el día uno</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mx-auto mt-5 max-w-4xl text-pretty text-base leading-[1.4] text-[#6b77a0] sm:text-xl lg:text-[22px]"
          >
            Sin instalaciones ni procesos eternos. Te acompañamos en cada paso para que tu equipo comience a usar la plataforma rápidamente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
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
          className="mx-auto mt-9 max-w-2xl"
        >
          <div className="px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" strokeWidth={2} />
              <span className="text-[14px] font-semibold text-[#64709c]">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
