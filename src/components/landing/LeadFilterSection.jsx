"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease },
  }),
};

const yesItems = [
  {
    title: "Atiendes pacientes con citas regulares",
    desc: "Tienes flujo constante y necesitas orden para dejar el caos del WhatsApp y los cuadernos.",
  },
  {
    title: "Hoy llevas registros manuales",
    desc: "Usas Excel o notas sueltas. Eso consume tiempo y genera errores que se acumulan.",
  },
  {
    title: "Quieres todo en un solo lugar",
    desc: "Agenda, pagos y fichas clínicas conectadas. Sin ir de una app a otra.",
  },
  {
    title: "Buscas escalar tu consulta o centro",
    desc: "Una herramienta profesional que aguante el crecimiento y te dé visibilidad real.",
  },
];

const noItems = [
  {
    title: "Recién empiezas, sin agenda activa",
    desc: "Si aún no tienes pacientes recurrentes, quizás conviene empezar con algo más básico.",
  },
  {
    title: "Prefieres herramientas separadas",
    desc: "Si te acomoda manejar agenda y pagos por canales distintos, este sistema es más de lo que necesitas ahora.",
  },
  {
    title: "Buscas algo genérico sin ajustes",
    desc: "Agenda Clínica se configura a tu operación. Si quieres algo estándar, hay opciones más simples.",
  },
  {
    title: "Tu negocio no trabaja con citas",
    desc: "Este sistema está pensado para clínicas, consultorios y centros de salud con agendamiento.",
  },
];

function Item({ title, desc, variant, index }) {
  const isYes = variant === "yes";
  return (
    <motion.li
      variants={fade}
      initial="hidden"
      animate="visible"
      custom={index * 0.07}
      className="flex gap-4 py-5 border-b border-slate-100 last:border-0"
    >
      <span className={`mt-0.5 text-[13px] font-bold shrink-0 w-4 ${isYes ? "text-blue-900" : "text-slate-300"}`}>
        {isYes ? "✓" : "—"}
      </span>
      <div>
        <p className={`text-[15px] font-semibold leading-snug ${isYes ? "text-slate-900" : "text-slate-400"}`}>
          {title}
        </p>
        <p className="mt-1 text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.li>
  );
}

export default function LeadFilterSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const bodyRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.p
            variants={fade} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-900 mb-4"
          >
            Claridad desde el inicio
          </motion.p>
          <motion.h2
            variants={fade} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.04] max-w-xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Honestidad<br />
            <span className="text-blue-900">primero.</span>
          </motion.h2>
          <motion.p
            variants={fade} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.2}
            className="mt-5 text-lg text-slate-400 max-w-lg leading-relaxed"
          >
            No vendemos para todos. Queremos que tomes la mejor decisión para tu centro.
          </motion.p>
        </div>

        {/* Dos columnas */}
        <div ref={bodyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">

          {/* Columna SÍ */}
          <div>
            <motion.div
              variants={fade} initial="hidden" animate={bodyInView ? "visible" : "hidden"} custom={0}
              className="flex items-center gap-3 mb-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Es para ti si
              </p>
            </motion.div>
            <motion.div
              variants={fade} initial="hidden" animate={bodyInView ? "visible" : "hidden"} custom={0.05}
              className="h-px bg-slate-900 mb-0"
            />
            <ul>
              {yesItems.map((item, i) => (
                <Item key={item.title} title={item.title} desc={item.desc} variant="yes" index={i + 1} />
              ))}
            </ul>
          </div>

          {/* Divisor móvil */}
          <div className="lg:hidden h-px bg-slate-100 my-10" />

          {/* Columna NO */}
          <div>
            <motion.div
              variants={fade} initial="hidden" animate={bodyInView ? "visible" : "hidden"} custom={0.3}
              className="flex items-center gap-3 mb-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                No es para ti si
              </p>
            </motion.div>
            <motion.div
              variants={fade} initial="hidden" animate={bodyInView ? "visible" : "hidden"} custom={0.35}
              className="h-px bg-slate-200 mb-0"
            />
            <ul>
              {noItems.map((item, i) => (
                <Item key={item.title} title={item.title} desc={item.desc} variant="no" index={i + 1} />
              ))}
            </ul>
          </div>
        </div>

        {/* Nota final */}
        <motion.div
          ref={ctaRef}
          variants={fade} initial="hidden" animate={ctaInView ? "visible" : "hidden"} custom={0}
          className="mt-14 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            <span className="font-semibold text-slate-700">¿No estás seguro?</span>{" "}
            Conversemos 15 minutos sin compromiso. Solo para ver si calza con tu operación.
          </p>
          <a
            href="https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm border-b border-blue-900/30 hover:border-blue-900 transition-colors pb-0.5 shrink-0"
          >
            Hablar con nosotros →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
