"use client";

// Tarjetas en abanico con inclinación 3D real (rotate-x/rotate-y/rotate-z)
// y flotado continuo. Tailwind v4 implementa rotate/scale/translate como
// propiedades CSS independientes (no el shorthand `transform`), así que la
// inclinación estática, el hover (que la endereza) y el flotado (que anima
// `translate` vía keyframes) conviven sin pisarse entre sí. La perspectiva
// vive en el contenedor, nunca junto a un `scale` en el mismo elemento —esa
// combinación fue la que antes rompía la proyección 3D.
// Oculto en mobile/tablet a propósito (el pedido fue que desaparezca ahí);
// aparece recién en el mismo breakpoint en que el hero pasa a layout de fila
// (lg), y las posiciones están corridas un poco hacia abajo para que el
// conjunto quede centrado con el bloque de texto en vez de pegado arriba.
const CARD_SIZE = "w-[47%] h-[143px] lg:h-[177px] xl:h-[205px]";
const cards = [
  {
    src: "/deck-finanzas.png",
    alt: "Resumen financiero de AgendaClinica",
    position: "left-0 top-[8%]",
    rotate: "rotate-x-[10deg] rotate-y-[-16deg] -rotate-z-4",
    floatDelay: 0,
    floatDuration: 6,
  },
  {
    src: "/deck-calendario.png",
    alt: "Calendario semanal de AgendaClinica",
    position: "left-[28%] top-[33%]",
    rotate: "rotate-x-[-8deg] rotate-y-[12deg] rotate-z-3",
    floatDelay: 0.6,
    floatDuration: 7,
  },
  {
    src: "/deck-paciente.png",
    alt: "Carpeta clínica del paciente en AgendaClinica",
    position: "left-[53%] top-[58%]",
    rotate: "rotate-x-[12deg] rotate-y-[-10deg] -rotate-z-2",
    floatDelay: 1.1,
    floatDuration: 6.5,
  },
];

export function ScreenshotDeck({ className = "" }) {
  return (
    <div
      className={`relative hidden lg:block lg:w-[620px] lg:h-[465px] xl:w-[720px] xl:h-[540px] perspective-[1400px] ${className}`}
    >
      {cards.map((card, i) => (
        <img
          key={card.src}
          src={card.src}
          alt={card.alt}
          style={{
            zIndex: i,
            animationName: "reveal-up, deck-float",
            animationDuration: `0.7s, ${card.floatDuration}s`,
            animationTimingFunction: "ease-out, ease-in-out",
            animationDelay: `${0.2 + i * 0.15}s, ${0.9 + card.floatDelay}s`,
            animationFillMode: "both, none",
            animationIterationCount: "1, infinite",
          }}
          className={`absolute rounded-xl border border-zinc-200 object-cover shadow-[0_20px_45px_rgba(24,24,27,0.18)] transition-transform duration-500 ease-out hover:z-10 hover:scale-105 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 hover:shadow-[0_28px_58px_rgba(24,24,27,0.28)] ${card.position} ${card.rotate} ${CARD_SIZE}`}
        />
      ))}
    </div>
  );
}

export default ScreenshotDeck;
