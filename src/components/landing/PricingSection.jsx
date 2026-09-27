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
  CalendarDays,
  FileText,
  ChartNoAxesColumnIncreasing,
  ShieldCheck,
  ArrowRight,
  Check,
  Eye,
  Baby,
  Activity,
  HandHeart,
  Brain,
  Apple,
  Footprints,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

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
  { title: "Tecnólogo médico", subtitle: "Oftalmología", image: "/profesionales/2.png", icono: <Eye className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Matrona", subtitle: "Salud integral femenina", image: "/profesionales/3.png", icono: <Baby className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Odontólogos", subtitle: "Clínica dental", image: "/profesionales/4.png", icono: <ToothIcon className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Kinesiólogos", subtitle: "Rehabilitación y movimiento", image: "/profesionales/5.png", icono: <Activity className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Terapeuta ocupacional", subtitle: "Intervención funcional", image: "/profesionales/6.png", icono: <HandHeart className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Psicología", subtitle: "Atención emocional", image: "/profesionales/7.png", icono: <Brain className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Nutricionistas", subtitle: "Plan alimentario", image: "/profesionales/8.png", icono: <Apple className="size-7 sm:size-8" strokeWidth={1.6} /> },
  { title: "Podología clínica", subtitle: "Cuidado especializado", image: "/profesionales/9.png", icono: <Footprints className="size-7 sm:size-8" strokeWidth={1.6} /> },
];

// Cada plan alterna un acento sólido distinto (neutro oscuro / marca) en vez
// de un único color, para diferenciarlos visualmente entre sí.
const PLAN_ACCENTS = [
  {
    solid: "bg-slate-900",
    solidHover: "hover:bg-slate-800",
    soft: "bg-slate-100",
    softFaded: "bg-slate-100/70",
    softText: "text-slate-900",
    softRing: "ring-slate-200",
    text: "text-slate-900",
    hoverText: "hover:text-slate-900",
    border: "border-slate-200",
    hoverBorder: "hover:border-slate-300",
  },
  {
    solid: "bg-indigo-700",
    solidHover: "hover:bg-indigo-800",
    soft: "bg-indigo-50",
    softFaded: "bg-indigo-50/70",
    softText: "text-indigo-950",
    softRing: "ring-indigo-100",
    text: "text-indigo-800",
    hoverText: "hover:text-indigo-800",
    border: "border-indigo-100",
    hoverBorder: "hover:border-indigo-300",
  },
];

function PlanCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [additionalUsers, setAdditionalUsers] = useState(0);
  const totalUsers = additionalUsers + 1;
  const totalPrice = plan.basePrice + additionalUsers * ADDITIONAL_USER_PRICE;
  const planLink = buildPlanWhatsAppLink(plan.name, additionalUsers, totalPrice);
  const PlanIcon = plan.icon === "tooth" ? ToothIcon : UsersRound;
  const accent = PLAN_ACCENTS[index % PLAN_ACCENTS.length];

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
        className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.2)] lg:rounded-[36px] lg:border-white lg:shadow-[0_32px_90px_-30px_rgba(64,49,157,0.35)] ${accent.hoverBorder}`}
      >

        <div className="relative px-5 pb-5 pt-7 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row lg:relative">
            <div className="flex items-start gap-3 lg:flex-col lg:gap-5">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl lg:size-12 lg:bg-violet-100 lg:text-violet-600 lg:ring-0 ${accent.soft} ${accent.softText} ring-1 ${accent.softRing}`}>
                <PlanIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="text-xl font-bold leading-tight tracking-[-0.03em] text-slate-950">
                {plan.name}
              </h3>
            </div>
            <span className={`shrink-0 rounded-full ${accent.solid} px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] lg:absolute lg:right-0 lg:top-0 lg:rounded-2xl lg:bg-linear-to-br lg:from-violet-500 lg:to-indigo-600 lg:px-4 lg:py-2 lg:text-sm lg:font-medium`}>
              {plan.badge}
            </span>
          </div>

          <p className="mt-4 max-w-sm min-h-12 text-sm leading-6 text-slate-500 lg:mt-2 lg:min-h-0 lg:text-[#6a75a5]">
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

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-1.5 shadow-inner shadow-slate-200/50 lg:border-violet-100 lg:bg-violet-50/60 lg:shadow-none">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                aria-label="Quitar usuario adicional"
                onClick={() => setAdditionalUsers((current) => Math.max(0, current - 1))}
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-slate-500 transition-colors hover:bg-white ${accent.hoverText}`}
              >
                <Minus className="h-4 w-4" strokeWidth={2} />
              </button>
              <div className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200">
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
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${accent.solid} text-white transition-colors ${accent.solidHover} lg:bg-indigo-600 lg:hover:bg-indigo-700`}
              >
                <Plus className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className={`mt-3 flex items-start gap-2 rounded-2xl ${accent.soft} px-4 py-2.5 text-sm leading-6 ${accent.softText} lg:bg-transparent lg:px-0 lg:py-0 lg:text-xs lg:leading-5 lg:text-[#6a75a5]`}>
            <UsersRound className="mt-1 h-4 w-4 shrink-0" strokeWidth={2} />
            <p>
              {plan.priceNote}. {plan.additionalUsers}.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-slate-100 px-5 pb-6 pt-5 sm:px-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 lg:hidden">
            Incluye
          </p>

          {/* Un solo listado (destacadas + estándar) para que ambas tarjetas
              arranquen "Incluye" y el botón final a la misma altura. */}
          <ul className="flex-1 space-y-3 lg:hidden">
            {(plan.highlightedFeatures ?? []).map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                  strokeWidth={2}
                />
                <span className={`text-sm font-semibold leading-6 ${accent.softText}`}>
                  {feat}
                </span>
              </li>
            ))}
            {plan.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
                  strokeWidth={2}
                />
                <span className="text-sm leading-6 text-slate-600">
                  {feat}
                </span>
              </li>
            ))}
          </ul>

          <ul className="hidden flex-col gap-4 text-sm leading-5 text-[#6472a1] lg:flex">
            <li className="flex items-center gap-3"><Check className="size-6 shrink-0 rounded-full bg-violet-100 p-1 text-indigo-600" />Agenda y reservas online</li>
            <li className="flex items-center gap-3"><Check className="size-6 shrink-0 rounded-full bg-violet-100 p-1 text-indigo-600" />Recordatorios por WhatsApp y correo</li>
            <li className="flex items-center gap-3"><Check className="size-6 shrink-0 rounded-full bg-violet-100 p-1 text-indigo-600" />Fichas clínicas e historial de pacientes</li>
            <li className="flex items-center gap-3"><Check className="size-6 shrink-0 rounded-full bg-violet-100 p-1 text-indigo-600" />Página de agendamiento personalizada</li>
            <li className="flex items-center gap-3"><Check className="size-6 shrink-0 rounded-full bg-violet-100 p-1 text-indigo-600" />Vinculación con Mercado Pago</li>
          </ul>

          <a
            href={planLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("plan_select", { location: "pricing_card", plan_name: plan.name, users: totalUsers, price: totalPrice })}
            className={`mt-6 w-full rounded-full ${accent.solid} py-3 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-colors duration-200 ${accent.solidHover} lg:rounded-2xl lg:bg-linear-to-br lg:from-violet-500 lg:to-indigo-600 lg:py-4 lg:text-base lg:shadow-indigo-200/50`}
          >
            <span className="lg:hidden">Quiero este plan</span>
            <span className="hidden items-center justify-center gap-3 lg:flex">Comenzar ahora <ArrowRight className="size-4" aria-hidden="true" /></span>
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
    <div id="especialidades" className="relative isolate bg-[#fcfcff] py-12 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-105 -top-145 h-200 w-250 -rotate-35 rounded-[50%] border-65 border-violet-100/30" />
        <div className="absolute -bottom-155 -right-110 h-240 w-280 -rotate-45 rounded-[50%] border-70 border-violet-100/30" />
      </div>
      <div className="mx-auto max-w-450 px-5 sm:px-8 lg:px-20">
      <div className="mx-auto mb-8 max-w-360 text-center sm:mb-10">
        <h3 className="text-balance text-[32px] leading-[1.1]! font-bold tracking-[-0.05em] text-[#09091c] sm:text-[40px] xl:text-[48px] min-[1700px]:text-[52px]">
          Una agenda flexible para <span className="text-violet-700">distintas especialidades</span>
        </h3>
        <p className="mx-auto mt-4 max-w-6xl text-pretty text-base leading-[1.45] text-[#6b77a0] sm:text-xl xl:text-[22px]">
          Desde atención individual hasta centros con equipos especializados. Cada flujo puede adaptarse a servicios, duración de citas y necesidades clínicas distintas.
        </p>
      </div>

      <div className="relative">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-violet-50 bg-white text-violet-600 shadow-[0_4px_16px_#312e8110] lg:flex"><ChevronLeft className="size-6" strokeWidth={2} /></span>
        <span aria-hidden="true" className="pointer-events-none absolute -right-16 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-violet-50 bg-white text-violet-600 shadow-[0_4px_16px_#312e8110] lg:flex"><ChevronRight className="size-6" strokeWidth={2} /></span>
        <div className="overflow-hidden rounded-3xl shadow-[0_22px_40px_-22px_#7c3aed35]">
          <motion.div
            className="flex w-full items-start gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {marqueeSlides.map((slide, index) => (
              <div
                key={`${slide.image}-${index}`}
                className="group relative h-[420px] w-[88%] shrink-0 overflow-hidden rounded-3xl bg-slate-200 text-left sm:h-[440px] sm:w-[calc(50%_-_0.5rem)] lg:h-[clamp(360px,30vw,540px)] lg:w-[calc(33.333333%_-_0.666667rem)]"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="block h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#050610]/95 via-[#050610]/10 via-45% to-transparent to-70%" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 xl:p-8">
                  <span aria-hidden="true" className="mb-3 flex size-13 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-violet-500 to-indigo-500 text-white shadow-lg shadow-indigo-950/15 sm:size-15">{slide.icono}</span>
                  <h4 className="text-[26px] leading-tight! font-bold tracking-[-0.04em] text-white xl:text-[32px] min-[1700px]:text-[36px]">
                    {slide.title}
                  </h4>
                  <p className="mt-1.5 text-base leading-snug text-slate-200 xl:text-xl">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
        <div aria-hidden="true" className="mt-6 flex items-center justify-center gap-2.5"><span className="h-2.5 w-5 rounded-full bg-linear-to-r from-violet-600 to-indigo-500" /><span className="size-2.5 rounded-full bg-slate-300" /><span className="size-2.5 rounded-full bg-slate-300" /></div>
        <div className="mt-6 text-center">
          <p className="text-sm leading-relaxed text-[#7883a2] sm:text-base">
            Diseñado para cualquier especialidad, con continuidad y una experiencia simple para tus pacientes.
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
    <section id="precios" className="relative py-28 bg-white overflow-hidden lg:scroll-mt-28 lg:pt-14">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 hidden h-[1100px] overflow-hidden bg-[radial-gradient(ellipse_at_95%_35%,#e2ddff_0%,#f6f5ff_35%,transparent_70%)] lg:block">
        <div className="absolute -right-[380px] -top-[300px] size-[1000px] rounded-full bg-linear-to-br from-violet-100/80 to-indigo-200/40" />
        <div className="absolute -right-40 bottom-20 h-96 w-[75%] -rotate-[24deg] rounded-[50%] bg-linear-to-r from-transparent to-violet-100/70" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:max-w-[1440px] lg:px-12 xl:px-16">

        <div className="mb-16 hidden items-center justify-between gap-8 lg:flex">
          <div className="flex items-center gap-7">
            <p className="border-l border-indigo-100 pl-7 text-sm leading-5 text-[#7783b5]">Tecnología para una salud<br />más cercana</p>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2.5 text-xs font-medium text-indigo-800 ring-1 ring-white/80">
            <ShieldCheck className="size-6 fill-indigo-600 text-white" aria-hidden="true" />
            Para profesionales de la salud
          </span>
        </div>

        <div className="lg:grid lg:grid-cols-[1.08fr_1fr] lg:items-start lg:gap-10 xl:gap-16">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:relative lg:z-10 lg:mx-0 lg:mb-0 lg:pt-4 lg:text-left">


          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="mt-5 text-balance text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-slate-950 leading-tight lg:mt-0 lg:text-[clamp(3rem,4.6vw,4.3rem)] lg:leading-[1.05] lg:tracking-[-0.055em] lg:text-wrap"
          >
            <span className="lg:hidden">Cuesta menos que el paciente que perdiste la semana pasada</span>
            <span className="hidden lg:inline">Cuesta menos que<br />el paciente que<br /><span className="bg-linear-to-br from-indigo-500 via-violet-500 to-purple-400 bg-clip-text text-transparent">perdiste la semana pasada</span></span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.2}
            className="mt-5 text-lg text-slate-500 leading-relaxed lg:mt-7 lg:max-w-lg lg:text-xl lg:leading-relaxed lg:text-[#6675a6]"
          >
            Sin letra chica ni contratos forzosos.{" "}
            <span className="font-semibold text-slate-700 lg:font-normal lg:text-[#6675a6] lg:before:block"><span className="lg:font-semibold lg:text-indigo-600">Pagas por lo que tu consulta necesita</span>, y agregas usuarios cuando crezcas.</span>
          </motion.p>

          <div className="mt-9 hidden grid-cols-2 gap-x-5 gap-y-6 lg:grid">
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-violet-100/80 text-indigo-600"><CalendarDays className="size-7" aria-hidden="true" /></span>
              <p className="text-sm leading-6 text-slate-950"><span className="font-semibold">Agenda online</span><br /><span className="text-[#7582b0]">24/7</span></p>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-violet-100/80 text-indigo-600"><FileText className="size-7" aria-hidden="true" /></span>
              <p className="text-sm leading-6 text-slate-950"><span className="font-semibold">Fichas y documentos</span><br /><span className="text-[#7582b0]">en un solo lugar</span></p>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-violet-100/80 text-indigo-600"><MessageCircle className="size-7" aria-hidden="true" /></span>
              <p className="text-sm leading-6 text-slate-950"><span className="font-semibold">Recordatorios</span><br /><span className="text-[#7582b0]">por WhatsApp y correo</span></p>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-[20px] bg-violet-100/80 text-indigo-600"><ChartNoAxesColumnIncreasing className="size-7" aria-hidden="true" /></span>
              <p className="text-sm leading-6 text-slate-950"><span className="font-semibold">Crece sin</span><br /><span className="text-[#7582b0]">complicaciones</span></p>
            </div>
          </div>

          <div className="mt-12 hidden flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#7a85b1] lg:flex">
            <span className="flex items-center gap-2"><Check className="size-4 text-violet-600" aria-hidden="true" />Sin permanencia</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-violet-600" aria-hidden="true" />Soporte de expertos</span>
            <span className="flex items-center gap-2"><Check className="size-4 text-violet-600" aria-hidden="true" />Implementación rápida</span>
          </div>
        </div>

        {/* Cards */}
        <div className="relative lg:pb-16 lg:pt-4">
          <div aria-hidden="true" className="pointer-events-none absolute -right-[370px] -top-2 hidden h-[650px] w-[640px] -rotate-[6deg] overflow-hidden rounded-[32px] border-[10px] border-white/80 bg-white shadow-[0_30px_80px_-30px_rgba(72,58,155,0.3)] lg:block">
            <img src="/deck-calendario.png" alt="" loading="lazy" className="h-full w-full object-cover object-left opacity-80" />
            <div className="absolute inset-0 bg-linear-to-r from-white/30 to-indigo-50/10" />
          </div>
        <div className="relative mx-auto grid max-w-xl grid-cols-1 gap-6 lg:mx-0 lg:w-[min(100%,400px)] lg:-rotate-[4deg] xl:w-[420px] [&>div:nth-child(2)]:hidden">
          {plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} index={idx} />
          ))}
        </div>
          <p className="absolute -bottom-2 right-4 hidden -rotate-[8deg] border-b-2 border-violet-300 px-3 pb-2 font-serif text-2xl italic text-indigo-600 lg:block">Más foco en tus pacientes</p>
        </div>
        </div>

      </div>
        <div className="relative z-10 mt-16 lg:mt-24">
        <ProfessionalCarousel />
        </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
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
          onClick={() => trackEvent("whatsapp_click", { location: "pricing_section" })}
          className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-colors"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          WhatsApp
        </a>
        <a
          href={MAIL_LINK}
          onClick={() => trackEvent("email_click", { location: "pricing_section" })}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300"
        >
          <Mail className="w-4 h-4 text-indigo-700" strokeWidth={2} />
          Correo
        </a>
      </div>
    </motion.div>
  );
}
