"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

const faqs = [
  {
    q: "¿Sirve para mi tipo de consulta o centro?",
    a: "Sí. Agenda Clínica está diseñado para médicos, dentistas, kinesiólogos, psicólogos, nutricionistas, centros de estética y otras consultas de salud que trabajan con reservas de pacientes.",
  },
  {
    q: "¿Puedo usar una agenda online para que mis pacientes reserven horas?",
    a: "Sí. La plataforma incluye una página web de agendamiento para pacientes, disponibilidad por profesional, servicios configurables y confirmación automática de citas.",
  },
  {
    q: "¿Incluye fichas clínicas digitales e historial clínico?",
    a: "Sí. Puedes trabajar con fichas clínicas personalizables, historial clínico completo de pacientes y datos relevantes centralizados para cada atención.",
  },
  {
    q: "¿El plan odontológico incluye odontograma?",
    a: "Sí. El Plan Odontológico incluye odontograma, recetas, historial de recetas, generación de presupuestos, solicitudes de órdenes de exámenes y subida de archivos, imágenes, radiografías y documentos.",
  },
  {
    q: "¿Cómo cobran mis pacientes?",
    a: "Puedes activar la vinculación opcional con Mercado Pago para cobrar al momento de agendar, solicitar abonos o confirmar reservas según el flujo de tu consulta.",
  },
  {
    q: "¿Cuánto tiempo tarda en estar operativo?",
    a: "Depende del tamaño de tu operación, pero el proceso es acompañado: configuramos servicios, profesionales, horarios y capacitamos a tu equipo para que partan con claridad.",
  },
  {
    q: "¿Qué pasa con los datos de mis pacientes?",
    a: "La información se resguarda con cifrado, respaldos y control de accesos. Cada usuario puede tener permisos según su rol dentro del centro.",
  },
  {
    q: "¿Puedo migrar mis datos actuales?",
    a: "Sí. Podemos ayudarte a ordenar e importar bases de pacientes o información existente desde planillas u otros sistemas, según el estado de tus datos actuales.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.08}
      className="border border-slate-200/80 rounded-xl overflow-hidden bg-white hover:border-blue-100 transition-colors duration-200"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-[15px] leading-snug group-hover:text-blue-900 transition-colors duration-200">
          {item.q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-blue-900 border-blue-900 text-white" : "bg-slate-50 border-slate-200 text-slate-400"}`}>
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
          ) : (
            <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="px-6 pb-5 text-slate-500 text-[14px] leading-relaxed border-t border-slate-100 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            custom={0.1}
            className="mt-5 text-3xl sm:text-3xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Respuestas claras antes de agendar una demo
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((item, idx) => (
            <FAQItem
              key={idx}
              item={item}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
