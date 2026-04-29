"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CalendarDays,
  Users,
  CreditCard,
  MessageSquare,
  Briefcase,
  BarChart,
  UserCog,
  Clock,
  FileSpreadsheet,
  Mail,
  Shield,
  Lock,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease },
  }),
};

const modules = [
  {
    icon: CalendarDays,
    title: "Agenda y calendario",
    desc: "Tus pacientes agendan online en cualquier momento. Tú ves tu día, semana o mes en tiempo real.",
  },
  {
    icon: UserCog,
    title: "Agendas por profesional",
    desc: "Cada especialista tiene su propia agenda, horarios y servicios. Ideal para centros con más de un profesional.",
  },
  {
    icon: Users,
    title: "Gestión de pacientes",
    desc: "Historial completo de cada paciente: datos, atenciones, pagos y notas. Todo en un perfil único.",
  },
  {
    icon: Clock,
    title: "Bloqueo de horarios",
    desc: "Bloquea días o franjas por profesional para vacaciones, reuniones o imprevistos.",
  },
  {
    icon: CreditCard,
    title: "Pagos automatizados",
    desc: "Cobra antes de la cita y reduce los no-show. Mercado Pago integrado para pagos sin fricción.",
  },
  {
    icon: FileSpreadsheet,
    title: "Presupuestos dinámicos",
    desc: "Genera presupuestos por tratamiento en segundos. Con detalle de servicios, valores y cuotas.",
  },
  {
    icon: MessageSquare,
    title: "Recordatorios automáticos",
    desc: "Recordatorios por correo antes de cada cita. Menos olvidos, menos ausencias, más puntualidad.",
  },
  {
    icon: Mail,
    title: "Correos de seguimiento",
    desc: "Emails automáticos post-atención para mantener el contacto y fidelizar a tus pacientes.",
  },
  {
    icon: Briefcase,
    title: "Administración de agenda",
    desc: "Reagenda, bloquea días completos o agrega reservas manuales sin perder el orden.",
  },
  {
    icon: Shield,
    title: "Resguardo de datos clínicos",
    desc: "Encriptación avanzada y respaldos diarios para proteger la información médica de tus pacientes.",
  },
  {
    icon: Lock,
    title: "Control de accesos",
    desc: "Define quién puede ver qué. Roles por cargo para que cada persona acceda solo a lo que necesita.",
  },
  {
    icon: BarChart,
    title: "Historial y reportes",
    desc: "Visualiza ingresos, citas y pagos pendientes con reportes claros. Decisiones basadas en datos.",
  },
];

// Primeros 3 módulos = featured (cards grandes)
// Restantes = lista compacta
const featuredModules = modules.slice(0, 3);
const restModules = modules.slice(3);

function FeaturedCard({ mod, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = mod.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.015, y: -4 }}
        transition={{ duration: 0.22, ease }}
        className="h-full bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-900 mb-6">
          <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
        </div>
        <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-snug">{mod.title}</h3>
        <p className="text-[14px] text-slate-500 leading-relaxed">{mod.desc}</p>
      </motion.div>
    </motion.div>
  );
}

function CompactRow({ mod, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = mod.icon;

  return (
    <motion.li
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.05}
      className="flex items-start gap-3 py-3.5 border-b border-slate-100 last:border-0 group"
    >
      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-100 transition-colors">
        <Icon className="w-3.5 h-3.5 text-blue-900" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[14px] font-semibold text-slate-800 leading-snug">{mod.title}</p>
        <p className="text-[12px] text-slate-400 mt-0.5 leading-relaxed">{mod.desc}</p>
      </div>
    </motion.li>
  );
}

export default function ModulesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-40px" });

  return (
    <section className="relative py-28 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — alineado a la izquierda, no centrado */}
        <div ref={headerRef} className="mb-14 max-w-2xl">
          <motion.p
            variants={fadeUp} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0}
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-900 mb-4"
          >
            Funcionalidades
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.1}
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            Todo lo que necesitas,<br />
            <span className="text-blue-900">en un solo lugar.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.2}
            className="mt-4 text-lg text-slate-400 leading-relaxed"
          >
            Cada módulo conectado. Sin apps extras, sin integraciones manuales.
          </motion.p>
        </div>

        {/* Featured: 3 cards grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {featuredModules.map((mod, idx) => (
            <FeaturedCard key={mod.title} mod={mod} index={idx} />
          ))}
        </div>

        {/* Rest: lista compacta en 3 columnas */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm px-6 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {[restModules.slice(0, 3), restModules.slice(3, 6), restModules.slice(6)].map((col, ci) => (
              <ul key={ci} className={ci > 0 ? "sm:pl-6" : ""}>
                {col.map((mod, i) => (
                  <CompactRow key={mod.title} mod={mod} index={ci * 3 + i} />
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          ref={footerRef}
          variants={fadeUp} initial="hidden" animate={footerInView ? "visible" : "hidden"} custom={0}
          className="mt-10 flex items-center gap-2 text-sm text-slate-400"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Sistema en constante evolución · Actualizaciones incluidas sin costo adicional
        </motion.div>
      </div>
    </section>
  );
}
