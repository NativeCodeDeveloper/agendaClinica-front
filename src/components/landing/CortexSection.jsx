"use client";

import { FileText } from "lucide-react";
import { InteractiveNebulaOrb } from "../InteractiveNebulaOrb";
import { StarsBackground } from "../ui/stars-background";

const cortexBenefits = [
  {
    title: "Redacción clínica automática",
    description: "Organiza la información de la atención y redacta la ficha clínica por ti.",
  },
  {
    title: "Apoyo diagnóstico",
    description: "Analiza los antecedentes registrados y sugiere pistas para el diagnóstico.",
  },
  {
    title: "Criterio del profesional, siempre primero",
    description: "Sus sugerencias apoyan, no reemplazan el criterio ni la decisión final.",
  },
];

export default function CortexSection() {
  return (
    <div
      id="cortex"
      className="relative mb-20 scroll-mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-[0_28px_80px_rgba(0,0,0,0.45)] lg:-mx-10 xl:-mx-16"
    >
      <StarsBackground
        className="absolute inset-0"
        starColor="#a78bfa"
        speed={90}
        factor={0.01}
        pointerEvents={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black to-transparent" />

      <div className="relative px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="flex items-center justify-center gap-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cortex A.I.
            <InteractiveNebulaOrb className="size-12 shrink-0 sm:size-14 lg:size-16" />
          </h3>

          <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
            Inteligencia clínica que entiende tu trabajo.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-zinc-500">
            Cortex organiza la información de la atención, redacta automáticamente la ficha clínica
            y analiza los antecedentes registrados para entregar sugerencias que apoyen el
            diagnóstico del profesional.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-10 border-t border-white/10 pt-12 sm:grid-cols-3">
          {cortexBenefits.map(({ title, description }) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-white">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              </span>
              Demostración en vivo
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
              <FileText className="h-3 w-3" strokeWidth={2} />
              Ficha clínica asistida
            </div>
          </div>

          <div className="bg-black">
            <video
              className="aspect-video w-full bg-black object-contain"
              src="/fichaClinicaClip.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Demostración del llenado de fichas clínicas asistido por Cortex"
            >
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl border-t border-white/10 pt-6 text-center text-xs leading-5 text-zinc-600 sm:text-sm">
          Cortex funciona como asistente clínico. Sus sugerencias no reemplazan el criterio, la
          evaluación ni la decisión final del profesional.
        </p>
      </div>
    </div>
  );
}
