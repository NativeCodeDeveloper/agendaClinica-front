"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, CreditCard, FileText, Users } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease,
    },
  }),
};

const benefits = [
  {
    icon: Bell,
    title: "Reduce inasistencias",
    description:
      "Los recordatorios automáticos ayudan a disminuir ausencias y mantienen tu agenda funcionando.",
    style: "bg-blue-50 text-blue-900 border-blue-100",
  },
  {
    icon: CreditCard,
    title: "Pagos más ordenados",
    description:
      "Recibe abonos o pagos al reservar y mejora el control financiero desde el inicio.",
    style: "bg-blue-50 text-blue-900 border-blue-100",
  },
  {
    icon: FileText,
    title: "Historial disponible",
    description:
      "Accede a la información de cada paciente desde cualquier lugar, sin papeles ni desorden.",
    style: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    icon: Users,
    title: "Ideal para equipos",
    description:
      "Cada profesional administra horarios, servicios y disponibilidad sin cruces.",
    style: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
];

function BenefitCard({ benefit, index }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-60px" });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      custom={index}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.25 }}
        className="h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
      >
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${benefit.style}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-950">
          {benefit.title}
        </h3>

        <p className="text-[15px] leading-7 text-slate-600">
          {benefit.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

function BenefitsBottom() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true });

  const items = [
    "Ahorra tiempo administrativo",
    "Mejora tu imagen profesional",
    "Centraliza tus pacientes",
  ];

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="mt-14 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8"
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-900" />
          <span className="font-medium text-slate-600">{item}</span>
        </div>
      ))}
    </motion.div>
  );
}

export default function BenefitsSection() {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-slate-50 py-28 overflow-hidden">
      <AuroraBackground showRadialGradient />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-900"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
            Lo que cambia desde el día uno
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            custom={1}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Deja el desorden atrás y{" "}
            <span className="text-blue-950">
              gestiona tu consulta con claridad.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            custom={2}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            Tu atención merece más que WhatsApp y planillas. Agenda Clínica
            centraliza reservas, pacientes y operación diaria en una sola
            plataforma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        <BenefitsBottom />
      </div>
    </section>
  );
}