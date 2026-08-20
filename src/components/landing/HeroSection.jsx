"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Play,
  Shield,
  Users,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";

const ease = [0.22, 1, 0.36, 1];

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

const heroCards = [
  { icon: CalendarCheck2, label: "Reservas sin mensajes perdidos" },
  { icon: Users, label: "Pacientes siempre ordenados" },
  { icon: BarChart3, label: "Control total del día" },
];

const features = [
  {
    icon: CalendarCheck2,
    title: "Agenda sin complicaciones",
    description: "Disponibilidad clara, reservas online y cambios visibles para todo el equipo.",
  },
  {
    icon: Users,
    title: "Pacientes en orden",
    description: "Fichas, historial y datos importantes reunidos antes de cada atención.",
  },
  {
    icon: BarChart3,
    title: "Menos tareas manuales",
    description: "Recordatorios, pagos y seguimiento trabajando mientras atiendes.",
  },
  {
    icon: Shield,
    title: "Confianza clínica",
    description: "Información sensible protegida, respaldada y disponible solo para quien corresponde.",
  },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#fbfdff]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(239,246,255,0.92),rgba(255,255,255,0.65)_48%,rgba(248,250,252,0.96))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(120%_100%_at_50%_100%,rgba(59,130,246,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-[92px] sm:px-6 sm:pt-[104px] lg:px-8 lg:pt-[112px]">
        <div className="grid min-h-[calc(100vh-116px)] items-center gap-10 pb-10 pt-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:pb-0">
          <div className="max-w-xl">
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={0.6}
              className="flex items-center justify-start gap-3 sm:gap-4"
            >
              <img
                src="/logos/acLogoTransparente.png"
                alt="Isotipo de AgendaClinica"
                width={1536}
                height={1024}
                className="h-24 w-24 object-cover object-center sm:h-28 sm:w-28 lg:h-32 lg:w-32"
              />
              <p className="text-2xl font-semibold tracking-[-0.045em] text-[#1a2348] sm:text-3xl lg:text-4xl">
                AgendaClinica
              </p>
            </motion.div>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-5 text-[2.75rem] font-bold leading-[0.95] tracking-[-0.05em] text-[#11255a] sm:text-[4rem] lg:text-[4.8rem]"
            >
              Agenda clínica
              <br />
              Sin desorden
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={1.6}
              className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-[1.75rem]"
              style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)" }}
            >
              Reservas online, recordatorios, pagos, fichas e historial de pacientes en un solo lugar. Menos mensajes perdidos, menos horas vacías y más control antes de atender.
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#102a73] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.22)] transition-transform hover:-translate-y-0.5"
              >
                Agendar una demo
                <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
              </a>
              <a
                href="https://demo.angendaclinica.space"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-[#102a73] shadow-sm transition-colors hover:bg-blue-50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" strokeWidth={2.2} />
                </span>
                Ver plataforma
              </a>
            </motion.div>
            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={2.2}
              className="mt-4 text-sm leading-6 text-slate-500"
            >
              Configuración guiada, capacitación incluida y soporte continuo para partir sin complicaciones.
            </motion.p>
          </div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1.2}
            className="relative mx-auto hidden w-full max-w-[740px] justify-center lg:flex"
          >
            <div className="relative h-[520px] w-[520px] sm:h-[620px] sm:w-[620px]">
              {/* Resplandor de fondo — reemplaza el aro degradado de 3 colores por
                  algo más sobrio: un glow difuso de un solo tono detrás de un aro fino. */}
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(16,42,115,0.14),transparent_68%)] blur-2xl" />

              <div className="absolute inset-0 rounded-full border border-[#102a73]/12 bg-white p-2 shadow-[0_40px_90px_rgba(16,42,115,0.14)]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,42,115,0.08),transparent_40%)]" />
                  <img
                    src="/img1.jpg"
                    alt="Vista agenda semanal Agenda Clinica"
                    className="absolute inset-0 z-10 h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              {heroCards.map((card, index) => {
                const Icon = card.icon;
                const positions = [
                  "right-0 top-[20%]",
                  "right-[-12px] top-[41%]",
                  "right-4 top-[62%]",
                ];

                return (
                  <div
                    key={card.label}
                    className={`absolute ${positions[index]} hidden min-w-[196px] items-center gap-3.5 rounded-2xl border border-slate-100 bg-white/95 py-4 pl-4 pr-5 shadow-[0_16px_32px_rgba(16,42,115,0.10)] backdrop-blur lg:flex`}
                  >
                    <span className="h-8 w-px shrink-0 rounded-full bg-[#102a73]/25" aria-hidden="true" />
                    <Icon className="h-4 w-4 shrink-0 text-[#102a73]" strokeWidth={1.8} />
                    <p className="text-[0.9rem] font-medium leading-snug text-[#163579]">{card.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/70 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:px-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={2.2 + index * 0.12}
                className={`flex items-start gap-4 ${index < features.length - 1 ? "lg:border-r lg:border-slate-200/80 lg:pr-8" : ""} ${index > 0 ? "lg:pl-8" : ""}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-600">
                  <Icon className="h-8 w-8" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#163579]">{feature.title}</p>
                  <p className="mt-1 text-base leading-7 text-slate-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
