"use client";

import { motion } from "framer-motion";

// Abanico de tarjetas superpuestas inspirado en el patrón "ImageFan" de
// Hero10 (21st.dev), adaptado a framer-motion (ya instalado en el proyecto,
// no se usa "motion/react") y a nuestras 3 capturas de pantalla, que son
// horizontales (dashboards) — por eso el aspecto es 16:10 y no el 4:5
// vertical del ejemplo original, para no recortar el contenido de cada
// captura. Oculto en mobile/tablet, aparece en el mismo breakpoint en que
// el hero pasa a layout de fila (lg).
const ease = [0.22, 1, 0.36, 1];
// Las 3 capturas son ~2880x1695px reales (aspecto ~1.70:1) — se usa ese
// mismo aspecto en la card para que "object-cover" no tenga que recortar
// nada a los costados.
const CARD_ASPECT = "aspect-[17/10]";

const cards = [
  {
    src: "/deck-finanzas.png",
    alt: "Resumen financiero de AgendaClinica",
    width: "w-[34%]",
    overlap: "-mr-6",
    rotate: -8,
    y: 26,
    z: 10,
  },
  {
    src: "/deck-calendario.png",
    alt: "Calendario semanal de AgendaClinica",
    width: "w-[38%]",
    overlap: "",
    rotate: 0,
    y: 0,
    z: 20,
  },
  {
    src: "/deck-paciente.png",
    alt: "Carpeta clínica del paciente en AgendaClinica",
    width: "w-[34%]",
    overlap: "-ml-6",
    rotate: 8,
    y: 26,
    z: 10,
  },
];

const fanContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

function fanCard(rotate, restY) {
  return {
    hidden: { opacity: 0, y: restY + 40, rotate: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: restY,
      rotate,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease },
    },
  };
}

export function ScreenshotDeck({ className = "" }) {
  return (
    <motion.div
      className={`hidden lg:flex w-full lg:max-w-2xl xl:max-w-3xl items-start justify-center ${className}`}
      variants={fanContainer}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card) => (
        <motion.div
          key={card.src}
          variants={fanCard(card.rotate, card.y)}
          whileHover={{ rotate: 0, y: 0, scale: 1.06, zIndex: 30 }}
          transition={{ duration: 0.35, ease }}
          style={{ zIndex: card.z }}
          className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.45)] ${CARD_ASPECT} ${card.width} ${card.overlap}`}
        >
          <img
            src={card.src}
            alt={card.alt}
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ScreenshotDeck;
