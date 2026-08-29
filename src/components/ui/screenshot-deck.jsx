"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// Tarjetas en profundidad 3D real (rotateY/rotateX/translateZ), de atrás
// hacia adelante, más un flotado continuo sutil e independiente por carta.
const cards = [
  {
    src: "/deck-finanzas.png",
    alt: "Resumen financiero de AgendaClinica",
    className: "left-0 top-0 h-72 w-80",
    rest: { rotateY: -10, rotateX: 6, translateZ: 0 },
    floatDelay: 0,
    floatDuration: 6,
  },
  {
    src: "/deck-calendario.png",
    alt: "Calendario semanal de AgendaClinica",
    className: "left-56 top-56 h-64 w-72",
    rest: { rotateY: 8, rotateX: -4, translateZ: 60 },
    floatDelay: 0.6,
    floatDuration: 7,
  },
  {
    src: "/deck-paciente.png",
    alt: "Carpeta clínica del paciente en AgendaClinica",
    className: "left-4 top-[26rem] h-60 w-64",
    rest: { rotateY: -6, rotateX: 8, translateZ: 110 },
    floatDelay: 1.1,
    floatDuration: 6.5,
  },
];

export function ScreenshotDeck({ className }) {
  return (
    <div className={className} style={{ perspective: "1400px" }}>
      <div className="relative h-[560px] w-[560px]" style={{ transformStyle: "preserve-3d" }}>
        {cards.map((card, i) => (
          <motion.img
            key={card.src}
            src={card.src}
            alt={card.alt}
            initial={{ opacity: 0, y: 40, scale: 0.9, ...card.rest }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: card.rest.rotateY,
              rotateX: card.rest.rotateX,
              translateZ: card.rest.translateZ,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { delay: 0.2 + i * 0.15, duration: 0.7, ease },
              scale: { delay: 0.2 + i * 0.15, duration: 0.7, ease },
              y: {
                delay: 0.9 + card.floatDelay,
                duration: card.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            whileHover={{ scale: 1.05, translateZ: card.rest.translateZ + 40, transition: { duration: 0.3, ease } }}
            className={`absolute rounded-2xl border border-white/15 bg-white object-contain p-1.5 drop-shadow-[0_20px_45px_rgba(4,8,24,0.55)] ${card.className}`}
            style={{ zIndex: i, transformStyle: "preserve-3d" }}
          />
        ))}
      </div>
    </div>
  );
}

export default ScreenshotDeck;
