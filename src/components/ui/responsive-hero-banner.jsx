"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScreenshotDeck } from "@/components/ui/screenshot-deck";
import { trackEvent } from "@/lib/analytics";

const ease = [0.22, 1, 0.36, 1];

const fade = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

export function ResponsiveHeroBanner({
  badgeLabel = "Nuevo",
  badgeText = "Sin curva de aprendizaje",
  title = "Tu consulta,",
  titleLine2 = "sin desorden",
  description = "Se acabó el cuaderno rayado y el Excel que solo tú entiendes. Ponle piloto automático a tu consulta: agenda, cobra y avisa por ti.",
  primaryButtonText = "Agendar una demo",
  primaryButtonHref = "#",
  secondaryButtonText = "Ver plataforma",
  secondaryButtonHref = "#",
}) {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070f]">
      <Image
        src="/hero-glow.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,15,0.55)_0%,rgba(5,7,15,0.15)_35%,rgba(5,7,15,0.1)_60%,rgba(5,7,15,0.75)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 pb-16 pt-28 sm:pt-32 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:pt-0">
        <div className="max-w-xl">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/[0.06] px-2.5 py-2 ring-1 ring-white/10 backdrop-blur"
          >
            <span className="inline-flex items-center rounded-full bg-white/12 px-2 py-0.5 text-xs font-semibold text-white/90">
              {badgeLabel}
            </span>
            <span className="text-sm font-medium text-white/70">{badgeText}</span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
            <br />
            {titleLine2}
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1.1}
            className="mt-6 max-w-md text-base text-white/75 sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1.5}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href={primaryButtonHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "hero_primary" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1d2148] shadow-[0_18px_45px_rgba(4,8,24,0.35)] transition-transform hover:-translate-y-0.5"
            >
              {primaryButtonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href={secondaryButtonHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("view_platform_click", { location: "hero_secondary" })}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15"
            >
              {secondaryButtonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <ScreenshotDeck className="shrink-0" />
      </div>
    </section>
  );
}

export default ResponsiveHeroBanner;
