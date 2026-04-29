"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const ease = [0.22, 1, 0.36, 1];

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";
const MAIL_LINK =
  "mailto:ingenieria.software@nativecode.cl?subject=Consulta%20Agenda%20Cl%C3%ADnica&body=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%2C%20estoy%20interesado%20en%20una%20reuni%C3%B3n%20con%20ustedes.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const plans = [
  {
    name: "Inicio",
    subtitle: "Para consultas unipersonales",
    features: [
      "Agenda online 24/7",
      "Recordatorios automáticos",
      "1 profesional",
      "Soporte por email",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    subtitle: "Para centros en crecimiento",
    features: [
      "Todo lo de Inicio",
      "Pagos online integrados",
      "Ficha clínica digital",
      "Hasta 3 profesionales",
      "Soporte prioritario",
    ],
    highlight: true,
  },
  {
    name: "Clínica",
    subtitle: "Control total, sin límites",
    features: [
      "Todo lo de Pro",
      "Múltiples sucursales",
      "Reportes de gestión",
      "Profesionales ilimitados",
      "Soporte dedicado",
    ],
    highlight: false,
  },
];

function PlanCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.12}
      className={`relative ${plan.highlight ? "z-10" : ""}`}
    >
      {plan.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-block bg-blue-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
            Más popular
          </span>
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25, ease }}
        className={`h-full rounded-2xl p-7 flex flex-col transition-shadow duration-300 ${
          plan.highlight
            ? "bg-blue-900 border border-blue-800 shadow-2xl shadow-blue-900/20"
            : "bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
        }`}
      >
        <div className="mb-6">
          <h3
            className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}
          >
            {plan.name}
          </h3>
          <p className={`text-sm ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
            {plan.subtitle}
          </p>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <CheckCircle2
                className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-800"}`}
                strokeWidth={2}
              />
              <span
                className={`text-sm ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-colors duration-200 ${
            plan.highlight
              ? "bg-white text-blue-900 hover:bg-blue-50"
              : "bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-100"
          }`}
        >
          Quiero este plan
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function PricingSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-28 bg-white/50 overflow-hidden">
      <AuroraBackground showRadialGradient />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-900 text-[11px] font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              Planes
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
            Planes que{" "}
            <span className="text-blue-900">escalan contigo</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mt-5 text-lg text-slate-500 leading-relaxed"
          >
            El precio final se ajusta según tu equipo y módulos activos.{" "}
            <span className="font-semibold text-slate-700">Sin sorpresas ni letra chica.</span>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>

        {/* Contact note */}
        <PricingContact />
      </div>
    </section>
  );
}

function PricingContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
      className="mt-12 text-center"
    >
      <p className="text-slate-500 text-sm mb-5">
        ¿Tienes dudas sobre qué plan es para ti?{" "}
        <span className="text-slate-700 font-medium">Conversemos sin compromiso.</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm hover:shadow-md transition-shadow"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          WhatsApp
        </a>
        <a
          href={MAIL_LINK}
          className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-slate-300 transition-colors"
        >
          <Mail className="w-4 h-4 text-blue-800" strokeWidth={2} />
          Correo
        </a>
      </div>
    </motion.div>
  );
}
