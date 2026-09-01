"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, Shield, Clock, CheckCircle2 } from "lucide-react";
import VelarisBackground from "@/components/ui/velaris-background";
import { trackEvent } from "@/lib/analytics";

// Mismos tonos índigo/violeta del fondo del hero.
const CTA_BG_COLORS = ["#1e1b4b", "#312e81", "#4338ca", "#4f46e5"];

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
  { icon: CheckCircle2, text: "Demo sin compromiso" },
  { icon: Clock, text: "Respuesta en menos de 24 hrs" },
  { icon: Shield, text: "Orientación según tu operación" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="relative bg-[#05070f]">
      <VelarisBackground
        bg="#05070f"
        colors={CTA_BG_COLORS}
        speed={0.35}
        grain={0.2}
        height="100%"
        className="py-28"
      >
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          className="mt-6 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Tu próxima cita puede agendarse sola, empecemos hoy
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl mx-auto"
        >
          Cuéntanos cómo atiendes hoy: cantidad de profesionales, tipo de agenda y tus principales dolores. Te mostramos si Agenda Clínica calza contigo.
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
            onClick={() => trackEvent("whatsapp_click", { location: "contact_section" })}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-green-900/30 text-[15px]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
            Agendar por WhatsApp
          </motion.a>

          <motion.a
            href={MAIL_LINK}
            onClick={() => trackEvent("email_click", { location: "contact_section" })}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-full border border-white/20 text-[15px] backdrop-blur-sm transition-colors duration-200"
          >
            <Mail className="h-5 w-5 text-white/80" strokeWidth={2} />
            Escribir por correo
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
            <div key={text} className="flex items-center gap-1.5 text-white/60 text-xs">
              <Icon className="h-3.5 w-3.5 text-white/60" strokeWidth={2} />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
      </VelarisBackground>
    </section>
  );
}
