"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, CreditCard, FileText, Users } from "lucide-react";

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
    title: "Menos pacientes ausentes",
    description:
      "Recordatorios automáticos antes de cada cita para proteger tus horas y evitar espacios perdidos.",
    style: "bg-blue-50 text-blue-900 border-blue-100",
  },
  {
    icon: CreditCard,
    title: "Pagos con más control",
    description:
      "Solicita abonos o pagos al reservar y llega a cada atención con el compromiso confirmado.",
    style: "bg-blue-50 text-blue-900 border-blue-100",
  },
  {
    icon: FileText,
    title: "Contexto clínico a mano",
    description:
      "Revisa datos, notas y antecedentes sin buscar entre papeles, chats o planillas sueltas.",
    style: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    icon: Users,
    title: "Equipos coordinados",
    description:
      "Cada profesional trabaja con su agenda, servicios y disponibilidad sin cruces internos.",
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
    "Libera tiempo administrativo",
    "Mejora la experiencia del paciente",
    "Centraliza la operación diaria",
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
    <section id="beneficios" className="relative bg-slate-50 py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-linear-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-900"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
            Orden visible desde el primer día
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            custom={1}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Menos coordinación manual,{" "}
            <span className="text-blue-950">
              más foco en atender.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            custom={2}
            className="mt-5 text-lg leading-8 text-slate-600"
          >
            Agenda Clínica reemplaza el ida y vuelta de mensajes, planillas y
            recordatorios manuales por un flujo claro para pacientes,
            recepción y profesionales.
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
