"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Mail,
} from "lucide-react";

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
    name: "Plan independiente",
    subtitle: "Para consultas unipersonales",
    price: "$14.990 mensual",
    features: [
      "Agenda online con recordatorios automaticos por WhatsApp y correo",
      "Pagina web de agendamiento para pacientes",
      "Confirmacion y cancelacion de citas desde WhatsApp y correo",
      "Fichas clinicas totalmente personalizables",
      "Historial completo de pacientes",
      "Emision de recetas, ordenes de examen y presupuestos con el logo de su consulta",
      "Gestion organizada de pacientes y citas",
      "Acceso desde computador o celular",
      "Odontogramas (en caso de odontologia)",
    ],
    highlight: false,
  },
  {
    name: "Multiple hasta 10 usuarios",
    subtitle: "Para centros en crecimiento",
    price: "$39.990 mensual",
    annualPrice: "$295.500 anual",
    features: [
      "Pasarela de pago integrada",
      "Ingreso de convenios y medios de pago",
      "Envio activo de recordatorios",
      "Adjuntar imagenes en fichas clinicas",
      "Adjuntar documentos PDF y consentimientos informados",
      "Hasta 3 personalizaciones en la plataforma web",
      "1 sucursal maxima",
      "Hasta 10 usuarios",
      "Atencion y acompañamiento preferente",
    ],
    highlight: true,
  },
  {
    name: "Plan Advantage",
    subtitle: "Dirigido a centros de salud multisucursal",
    price: "$69.990 mensual",
    annualPrice: "$599.990 anual",
    features: [
      "Pagina personalizada",
      "Portal de pacientes",
      "Seguimiento activo",
      "Intranet de pacientes multitask",
      "Solicitud de examenes",
      "Emision de recetas",
      "Recetas de lentes",
      "Odontogramas",
      "Presupuestos",
      "Recordatorios por WhatsApp personalizados",
      "Correos personalizados de recordatorio",
      "Hasta 50 usuarios",
    ],
    highlight: false,
  },
];

const professionalSlides = [
  { title: "Tecnologo medico", subtitle: "Oftalmologia", image: "/profesionales/2.png" },
  { title: "Matrona", subtitle: "Salud integral femenina", image: "/profesionales/3.png" },
  { title: "Odontologos", subtitle: "Clinica dental", image: "/profesionales/4.png" },
  { title: "Kinesiologos", subtitle: "Rehabilitacion y movimiento", image: "/profesionales/5.png" },
  { title: "Terapeuta ocupacional", subtitle: "Intervencion funcional", image: "/profesionales/6.png" },
  { title: "Psicologia", subtitle: "Atencion emocional", image: "/profesionales/7.png" },
  { title: "Nutricionistas", subtitle: "Plan alimentario", image: "/profesionales/8.png" },
  { title: "Podologia clinica", subtitle: "Cuidado especializado", image: "/profesionales/9.png" },
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
      className={`relative h-full ${plan.highlight ? "z-10" : ""}`}
    >
      {plan.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-block rounded-full bg-blue-900 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
            Más popular
          </span>
        </div>
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.25, ease }}
        className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border transition-all duration-300 ${
          plan.highlight
            ? "border-blue-800 bg-linear-to-b from-blue-950 via-blue-900 to-blue-900 shadow-2xl shadow-blue-900/20"
            : "border-slate-200/80 bg-white shadow-sm hover:border-blue-100 hover:shadow-xl hover:shadow-slate-200/50"
        }`}
      >
        <div className={`absolute inset-x-0 top-0 h-32 ${plan.highlight ? "bg-white/5" : "bg-linear-to-b from-blue-50/80 to-transparent"} pointer-events-none`} />

        <div className={`relative border-b px-7 pb-6 pt-7 ${plan.highlight ? "border-white/10" : "border-slate-100"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                  plan.highlight
                    ? "bg-white/10 text-blue-100"
                    : "border border-blue-100 bg-blue-50 text-blue-900"
                }`}
              >
                {plan.highlight ? "Escalable" : "Plan"}
              </span>
              <h3
                className={`mt-4 text-xl font-bold leading-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}
              >
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm leading-6 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                {plan.subtitle}
              </p>
            </div>
          </div>

          {plan.price && (
            <div className="mt-6">
              <p className={`text-3xl font-bold tracking-tight ${plan.highlight ? "text-white" : "text-blue-950"}`}>
                {plan.price}
              </p>
              {plan.annualPrice ? (
                <p className={`mt-1 text-sm font-medium ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.annualPrice}
                </p>
              ) : (
                <p className={`mt-1 text-sm ${plan.highlight ? "text-blue-300" : "text-slate-400"}`}>
                  Facturacion mensual
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
          <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
            Incluye
          </p>

          <ul className="flex-1 space-y-3">
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
            className={`mt-8 w-full rounded-2xl py-3.5 text-center text-sm font-semibold transition-colors duration-200 ${
              plan.highlight
                ? "bg-white text-blue-900 hover:bg-blue-50"
                : "border border-blue-100 bg-blue-50 text-blue-900 hover:bg-blue-100"
            }`}
          >
            Quiero este plan
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProfessionalCarousel() {
  const marqueeSlides = [...professionalSlides, ...professionalSlides];

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <div className="mb-7 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-700">
          Profesionales
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
          Agenda Clinica se adapta a distintas especialidades
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
          Desde atencion individual hasta equipos especializados. La imagen de medico general `1.png` no esta en `public/profesionales`.
        </p>
      </div>

      <div className="rounded-[36px] bg-slate-50/70 p-4 sm:p-5">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {marqueeSlides.map((slide, index) => (
              <div
                key={`${slide.image}-${index}`}
                className="group relative min-h-[540px] w-[85vw] max-w-[380px] shrink-0 overflow-hidden rounded-[28px] bg-slate-200 text-left shadow-[0_20px_50px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h4 className="text-[2rem] font-bold tracking-[-0.03em] text-white sm:text-[2.2rem]">
                    {slide.title}
                  </h4>
                  <p className="mt-2 text-[1.05rem] text-white/90 sm:text-[1.15rem]">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Desplazamiento continuo por especialidades, entrando por un lado y saliendo por el otro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="precios" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>

        <ProfessionalCarousel />

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
