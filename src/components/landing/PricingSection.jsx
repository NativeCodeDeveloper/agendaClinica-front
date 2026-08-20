"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2,
  Minus,
  MessageCircle,
  Mail,
  Plus,
  UsersRound,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];
const BASE_PRICE = 14990;
const ODONTOLOGY_BASE_PRICE = 19990;
const ADDITIONAL_USER_PRICE = 4990;
const WHATSAPP_NUMBER = "56966091038";

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
    name: "Plan Profesional Salud",
    subtitle: "Para profesionales y consultas de salud",
    basePrice: BASE_PRICE,
    badge: "Plan único",
    icon: "users",
    pricePeriod: "/ mes",
    priceNote: "Incluye 1 usuario profesional",
    additionalUsers: "+ $4.990 mensuales por cada usuario adicional",
    ctaNote: "Puedes agregar más usuarios cuando lo necesites.",
    features: [
      "Agenda online profesional",
      "Recordatorios automáticos por WhatsApp y correo ilimitados",
      "Página web de agendamiento para pacientes",
      "Confirmación y cancelación automática de citas desde WhatsApp y correo",
      "Fichas clínicas personalizables",
      "Historial clínico completo de pacientes",
      "Acceso desde computador y celular",
      "Vinculación opcional con Mercado Pago",
    ],
  },
  {
    name: "Plan Odontológico",
    subtitle: "Para consultas dentales que necesitan gestión clínica completa",
    basePrice: ODONTOLOGY_BASE_PRICE,
    badge: "Dental",
    icon: "tooth",
    pricePeriod: "/ mes",
    priceNote: "Incluye 1 usuario profesional",
    additionalUsers: "+ $4.990 mensuales por cada usuario adicional",
    ctaNote: "Puedes agregar más usuarios cuando lo necesites.",
    highlightedFeatures: [
      "Odontograma",
      "Recetas",
      "Historial de recetas",
      "Generación de presupuestos",
      "Solicitud de órdenes de exámenes",
      "Subida de archivos, imágenes, radiografías y documentos",
    ],
    features: [
      "Agenda online profesional",
      "Recordatorios automáticos por WhatsApp y correo sin límite",
      "Página web de agendamiento para pacientes",
      "Confirmación y cancelación automática de citas desde WhatsApp y correo",
      "Fichas clínicas personalizables",
      "Historial clínico completo de pacientes",
      "Acceso desde computador y celular",
      "Vinculación opcional con Mercado Pago",
    ],
  },
];

function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);
}

function buildPlanWhatsAppLink(planName, additionalUsers, totalPrice) {
  const totalUsers = additionalUsers + 1;
  const message = `Hola, quiero contratar el ${planName} de Agenda Clínica con ${totalUsers} usuario${totalUsers === 1 ? "" : "s"} en total (${additionalUsers} adicional${additionalUsers === 1 ? "" : "es"}). Total estimado: ${formatCLP(totalPrice)} + IVA / mes.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ToothIcon({ className, strokeWidth = 2 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 3.5c1.25 0 2.12.72 3.5.72s2.25-.72 3.5-.72c2.25 0 4 1.82 4 4.25 0 1.5-.6 2.8-1.25 4.15-.52 1.1-.86 2.28-1.1 3.5l-.52 2.7c-.24 1.24-1.24 2.15-2.38 2.15-.8 0-1.5-.5-1.78-1.28l-.88-2.45c-.12-.36-.34-.52-.59-.52s-.47.16-.59.52l-.88 2.45c-.28.78-.98 1.28-1.78 1.28-1.14 0-2.14-.91-2.38-2.15l-.52-2.7c-.24-1.22-.58-2.4-1.1-3.5C3.1 10.55 2.5 9.25 2.5 7.75c0-2.43 1.75-4.25 4-4.25Z" />
      <path d="M9.5 6.5c.72.32 1.5.5 2.5.5s1.78-.18 2.5-.5" />
    </svg>
  );
}

const professionalSlides = [
  { title: "Tecnólogo médico", subtitle: "Oftalmología", image: "/profesionales/2.png" },
  { title: "Matrona", subtitle: "Salud integral femenina", image: "/profesionales/3.png" },
  { title: "Odontólogos", subtitle: "Clínica dental", image: "/profesionales/4.png" },
  { title: "Kinesiólogos", subtitle: "Rehabilitación y movimiento", image: "/profesionales/5.png" },
  { title: "Terapeuta ocupacional", subtitle: "Intervención funcional", image: "/profesionales/6.png" },
  { title: "Psicología", subtitle: "Atención emocional", image: "/profesionales/7.png" },
  { title: "Nutricionistas", subtitle: "Plan alimentario", image: "/profesionales/8.png" },
  { title: "Podologia clinica", subtitle: "Cuidado especializado", image: "/profesionales/9.png" },
];

function PlanCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [additionalUsers, setAdditionalUsers] = useState(0);
  const totalUsers = additionalUsers + 1;
  const totalPrice = plan.basePrice + additionalUsers * ADDITIONAL_USER_PRICE;
  const planLink = buildPlanWhatsAppLink(plan.name, additionalUsers, totalPrice);
  const PlanIcon = plan.icon === "tooth" ? ToothIcon : UsersRound;

  const updateAdditionalUsers = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    setAdditionalUsers(Number.isNaN(parsedValue) || parsedValue < 0 ? 0 : parsedValue);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.12}
      className="relative h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease }}
        className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-blue-300 hover:shadow-[0_30px_80px_rgba(30,64,175,0.12)]"
      >

        <div className="relative px-5 pb-5 pt-7 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-950 ring-1 ring-blue-100">
                <PlanIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-xl font-bold leading-tight tracking-[-0.03em] text-slate-950">
                {plan.name}
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-blue-950 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg shadow-blue-950/15">
              {plan.badge}
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            {plan.subtitle}
          </p>

          <div className="mt-5">
            <p className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              {formatCLP(totalPrice)}
            </p>
            <p className="mt-2 text-lg font-medium text-slate-500">
              CLP/mes + IVA
            </p>
          </div>

          <div className="mt-4 rounded-[24px] border border-slate-200 bg-slate-50 p-1.5 shadow-inner shadow-slate-200/50">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                aria-label="Quitar usuario adicional"
                onClick={() => setAdditionalUsers((current) => Math.max(0, current - 1))}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-[18px] text-slate-500 transition-colors hover:bg-white hover:text-blue-950"
              >
                <Minus className="h-4 w-4" strokeWidth={2} />
              </button>
              <div className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-[18px] bg-white px-3 py-2 ring-1 ring-slate-200">
                <input
                  type="number"
                  min="1"
                  value={totalUsers}
                  onChange={(event) => updateAdditionalUsers(Number.parseInt(event.target.value, 10) - 1)}
                  className="h-9 w-12 bg-transparent text-center text-lg font-bold text-slate-950 outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  aria-label="Cantidad total de profesionales"
                />
                <span className="truncate text-sm font-semibold text-slate-600">
                  {totalUsers === 1 ? "profesional" : "profesionales"}
                </span>
              </div>
              <button
                type="button"
                aria-label="Agregar usuario adicional"
                onClick={() => setAdditionalUsers((current) => current + 1)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-[18px] bg-blue-950 text-white transition-colors hover:bg-blue-900"
              >
                <Plus className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-2xl bg-blue-50 px-4 py-2.5 text-sm leading-6 text-blue-950">
            <UsersRound className="mt-1 h-4 w-4 shrink-0" strokeWidth={2} />
            <p>
              {plan.priceNote}. {plan.additionalUsers}.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-slate-100 px-5 pb-6 pt-5 sm:px-8">
          {plan.highlightedFeatures?.length ? (
            <div className="mb-5 rounded-3xl border border-blue-100 bg-blue-50/70 p-4">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-900">
                Especial odontología
              </p>
              <ul className="space-y-3">
                {plan.highlightedFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-900"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-semibold leading-6 text-blue-950">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Incluye
          </p>

          <ul className="flex-1 space-y-3">
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-800"
                  strokeWidth={2}
                />
                <span className="text-sm leading-6 text-slate-600">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={planLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 w-full rounded-[22px] bg-blue-950 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition-colors duration-200 hover:bg-blue-900"
          >
            Quiero este plan
          </a>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            {plan.ctaNote}
          </p>
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
        <h3 className="text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
          Una agenda flexible para distintas especialidades
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">
          Desde atención individual hasta centros con equipos especializados. Cada flujo puede adaptarse a servicios, duración de citas y necesidades clínicas distintas.
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
            Diseñado para consultas que necesitan orden, continuidad y una experiencia simple para sus pacientes.
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


          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="mt-5 text-3xl sm:text-4xl lg:text-4xl font-bold text-blue-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Planes claros para operar con orden
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mt-5 text-lg text-slate-500 leading-relaxed"
          >
            Agenda, automatiza recordatorios y gestiona pacientes desde una plataforma pensada para profesionales de salud.{" "}
            <span className="font-semibold text-slate-700">Puedes crecer agregando usuarios cuando lo necesites.</span>
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
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
        ¿No sabes qué plan calza con tu consulta?{" "}
        <span className="text-slate-700 font-medium">Lo revisamos contigo en una conversación breve.</span>
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
