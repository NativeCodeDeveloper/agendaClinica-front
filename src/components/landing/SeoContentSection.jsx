"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

const useCases = [
  "agenda online para reservas de pacientes",
  "fichas clínicas digitales personalizables",
  "odontogramas para consultas dentales",
  "recordatorios automáticos por WhatsApp y correo",
  "historial clínico completo de pacientes",
  "confirmación y cancelación automática de citas",
  "página web de agendamiento para pacientes",
  "pagos opcionales con Mercado Pago",
];

export default function SeoContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-24" aria-labelledby="seo-agenda-clinica-title">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            <h2
              id="seo-agenda-clinica-title"
              className="text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl"
            >
              Agenda online para clínicas, consultas de salud y reservas de pacientes
            </h2>
          </motion.div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              AgendaClinica ayuda a profesionales y centros de salud a centralizar la agenda
              clínica online, las reservas de pacientes, las fichas clínicas digitales y el
              historial clínico en una plataforma web simple de usar desde computador o celular.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.6}
            >
              Para consultas dentales, el plan odontológico suma odontograma, recetas, historial
              de recetas, presupuestos, solicitudes de órdenes de exámenes y subida de archivos,
              imágenes, radiografías y documentos. Para otras especialidades, permite ordenar
              horarios, servicios, pacientes, recordatorios y confirmaciones automáticas sin
              depender de planillas o mensajes dispersos.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2.2}
              className="grid gap-3 pt-2 sm:grid-cols-2"
            >
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
