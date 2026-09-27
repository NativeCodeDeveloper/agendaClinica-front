"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart,
  CalendarDays,
  CreditCard,
  FileText,
  Mail,
  MessageCircle,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import {
  IlustracionAccesos,
  IlustracionAgenda,
  IlustracionCorreos,
  IlustracionPacientes,
  IlustracionPagos,
  IlustracionPresupuestos,
  IlustracionRecordatorios,
  IlustracionReportes,
  IlustracionSeguridad,
} from "./IlustracionesModulos";

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
    title: "Agenda y reservas",
    desc: "Organiza tu tiempo sin complicaciones",
    detalle: "Reservas online, agendas por profesional, bloqueos y cambios de horario en un solo calendario.",
    color: "from-violet-500 to-violet-600 shadow-violet-500/20",
    fondo: "from-white via-white to-violet-50/70",
    ilustracion: <IlustracionAgenda />,
  },
  {
    icon: MessageCircle,
    title: "Recordatorios automáticos",
    desc: "Confirma y reduce inasistencias",
    detalle: "Mensajes antes de cada cita para recordar la atención y facilitar las confirmaciones.",
    color: "from-emerald-400 to-emerald-500 shadow-emerald-500/20",
    fondo: "from-white via-white to-emerald-50/40",
    ilustracion: <IlustracionRecordatorios />,
  },
  {
    icon: Users,
    title: "Gestión de pacientes",
    desc: "Toda la información en un solo lugar",
    detalle: "Datos, atenciones, pagos, notas y documentos reunidos en el perfil del paciente.",
    color: "from-blue-400 to-blue-500 shadow-blue-500/20",
    fondo: "from-white via-white to-violet-50/60",
    ilustracion: <IlustracionPacientes />,
  },
  {
    icon: CreditCard,
    title: "Pagos y cobros",
    desc: "Cobra online y lleva el control fácilmente",
    detalle: "Cobros antes de la atención y abonos para reducir ausencias y ordenar caja.",
    color: "from-amber-400 to-orange-400 shadow-orange-500/20",
    fondo: "from-white via-white to-orange-50/70",
    ilustracion: <IlustracionPagos />,
  },
  {
    icon: FileText,
    title: "Presupuestos",
    desc: "Crea y comparte presupuestos en segundos",
    detalle: "Presupuestos por tratamiento con servicios, valores y cuotas listos para compartir.",
    color: "from-violet-500 to-violet-600 shadow-violet-500/20",
    fondo: "from-white via-white to-violet-50/70",
    ilustracion: <IlustracionPresupuestos />,
  },
  {
    icon: Mail,
    title: "Correos de seguimiento",
    desc: "Mantén el contacto después de la atención",
    detalle: "Seguimiento post-atención para mantener la continuidad sin depender de tareas manuales.",
    color: "from-pink-300 to-pink-500 shadow-pink-500/20",
    fondo: "from-white via-white to-pink-50/70",
    ilustracion: <IlustracionCorreos />,
  },
  {
    icon: Shield,
    title: "Seguridad de datos",
    desc: "Tu información clínica siempre protegida",
    detalle: "Cifrado, respaldos y buenas prácticas para proteger la información sensible de los pacientes.",
    color: "from-blue-400 to-blue-500 shadow-blue-500/20",
    fondo: "from-white via-white to-blue-50/70",
    ilustracion: <IlustracionSeguridad />,
  },
  {
    icon: BarChart,
    title: "Reportes e historial",
    desc: "Conoce el rendimiento de tu consulta",
    detalle: "Ingresos, citas y pagos pendientes en reportes simples para decidir con más claridad.",
    color: "from-violet-400 to-violet-500 shadow-violet-500/20",
    fondo: "from-white via-white to-violet-50/70",
    ilustracion: <IlustracionReportes />,
  },
  {
    icon: Settings,
    title: "Control de accesos",
    desc: "Roles y permisos para tu equipo",
    detalle: "Accesos por cargo para que cada persona vea solo lo necesario para su trabajo.",
    color: "from-slate-400 to-slate-500 shadow-slate-500/20",
    fondo: "from-white via-white to-slate-50/80",
    ilustracion: <IlustracionAccesos />,
  },
];

const featuredModules = modules.slice(0, 3);
const restModules = modules.slice(3);

function ContenidoTarjeta({ modulo }) {
  const Icono = modulo.icon;

  return (
    <div className={`relative isolate flex h-full min-h-52 overflow-hidden rounded-3xl border border-indigo-100/70 bg-linear-to-br p-5 shadow-[0_2px_5px_#312e8110,0_8px_24px_#312e8104] transition-shadow duration-300 group-hover:shadow-[0_8px_30px_#6d28d912] sm:min-h-56 sm:p-6 ${modulo.fondo}`}>
      <div className="relative z-10 flex w-[62%] flex-col items-start">
        <span className={`mb-3 flex size-14 items-center justify-center rounded-2xl border border-white/40 bg-linear-to-br text-white shadow-lg ring-4 ring-white/80 sm:size-15 ${modulo.color}`}>
          <Icono className="size-7 sm:size-8" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h3 className="mb-1.5 text-[17px] leading-tight! font-bold tracking-[-0.045em] text-slate-950 sm:text-[19px]">{modulo.title}</h3>
        <p className="max-w-52 text-[14px] leading-[1.35] text-[#64709c] sm:text-[16px]">{modulo.desc}</p>
        <p className="sr-only">{modulo.detalle}</p>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex w-[36%] items-center justify-center sm:right-5">
        <div className="shrink-0 origin-right scale-[0.78] min-[400px]:scale-90 sm:scale-[0.85] lg:scale-100 xl:scale-[0.85] min-[1440px]:scale-100">{modulo.ilustracion}</div>
      </div>
    </div>
  );
}

function FeaturedCard({ mod, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.1}
      className="group h-full"
    >
      <motion.div
        whileHover={{ scale: 1.015, y: -4 }}
        transition={{ duration: 0.22, ease }}
        className="h-full"
      >
        <ContenidoTarjeta modulo={mod} />
      </motion.div>
    </motion.div>
  );
}

function CompactRow({ mod, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.li
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * 0.05}
      className="group h-full list-none motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1"
    >
      <ContenidoTarjeta modulo={mod} />
    </motion.li>
  );
}

export default function ModulesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-40px" });

  return (
    <section id="funciones" aria-labelledby="titulo-funciones" className="relative isolate overflow-hidden bg-[#fcfcff] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-80 -top-96 -z-10 h-160 w-200 -rotate-35 rounded-[50%] border-70 border-violet-100/25" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-100 -top-100 -z-10 h-200 w-300 -rotate-35 rounded-[50%] border-65 border-indigo-100/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-120 -left-90 -z-10 h-200 w-300 -rotate-35 rounded-[50%] border-60 border-indigo-100/20" />

      <div className="mx-auto max-w-380 px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mx-auto mb-9 max-w-6xl text-center sm:mb-11">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-xs font-medium text-violet-700 sm:px-5 sm:text-base">
            <Zap className="size-4 fill-violet-600 sm:size-5" aria-hidden="true" />
            Todo lo que necesitas en un solo lugar
          </span>
          <motion.h2
            id="titulo-funciones"
            variants={fadeUp} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.1}
            className="text-balance text-[34px] leading-[1.04]! font-bold tracking-[-0.055em] text-[#09091c] sm:text-5xl lg:text-[64px] min-[1440px]:text-[72px]"
          >
            Gestiona tu consulta
            <span className="mt-1 block text-violet-700">de forma simple y eficiente</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={headerInView ? "visible" : "hidden"} custom={0.2}
            className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-[1.4] text-[#6b77a0] sm:text-xl lg:text-[23px]"
          >
            Agenda, pacientes, pagos, fichas y más. Todo conectado para que te concentres en lo más importante: tus pacientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredModules.map((mod, idx) => (
            <FeaturedCard key={mod.title} mod={mod} index={idx} />
          ))}
          <ul className="contents">
            {restModules.map((mod, i) => (
              <CompactRow key={mod.title} mod={mod} index={i} />
            ))}
          </ul>
        </div>

        <motion.div
          ref={footerRef}
          variants={fadeUp} initial="hidden" animate={footerInView ? "visible" : "hidden"} custom={0}
          className="mx-auto mt-8 flex max-w-2xl items-center justify-center gap-2.5 text-center text-xs leading-relaxed text-[#6b77a0] sm:text-sm"
        >
          <span className="size-1.5 shrink-0 rounded-full bg-emerald-400" />
          Actualizaciones incluidas y mejoras continuas para acompañar el crecimiento de tu consulta.
        </motion.div>
      </div>
    </section>
  );
}
