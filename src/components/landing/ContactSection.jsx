"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Shield, Clock, CheckCircle2 } from "lucide-react";

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
    transition: { delay: i * 0.1, duration: 0.65, ease },
  }),
};

const guarantees = [
  { icon: CheckCircle2, text: "Sin compromiso" },
  { icon: Clock, text: "Respuesta en menos de 24 hrs" },
  { icon: Shield, text: "Diagnóstico gratuito" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contacto"
      className="relative py-28 bg-blue-900 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-900/50 text-blue-200 text-[11px] font-semibold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            Hablemos
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          ¿Listo para ordenar
          <br />
          <span className="text-blue-200">tu clínica?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          className="mt-5 text-lg text-blue-200 leading-relaxed max-w-xl mx-auto"
        >
          Cuéntanos tu tipo de centro y cuántos profesionales atienden. En menos de 24 horas
          tendrás una propuesta clara, sin compromiso y sin letra chica.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.3}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-green-900/30 text-[15px]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            Contacto por WhatsApp
          </motion.a>

          <motion.a
            href={MAIL_LINK}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-2xl border border-white/20 text-[15px] backdrop-blur-sm transition-colors duration-200"
          >
            <Mail className="h-5 w-5 text-blue-200" strokeWidth={2} />
            Contacto por Correo
          </motion.a>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.4}
          className="mt-8 flex flex-wrap items-center justify-center gap-5"
        >
          {guarantees.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5 text-blue-300 text-xs">
              <Icon className="h-3.5 w-3.5 text-blue-300" strokeWidth={2} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
