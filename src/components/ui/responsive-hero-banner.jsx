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
  title = "¿Aún gestionas tu consulta con Word, Excel y papel?",
  description = "Se acabó el cuaderno rayado y el Excel que solo tú entiendes. Ponle piloto automático a tu consulta: agenda, cobra y avisa por ti.",
  primaryButtonText = "Agendar una demo",
  primaryButtonHref = "#",
}) {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070f] max-md:z-[60] max-md:min-h-svh max-md:bg-[#050510]">
      <Image
        src="/hero-glow.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="hidden object-cover md:block"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(5,7,15,0.55)_0%,rgba(5,7,15,0.15)_35%,rgba(5,7,15,0.1)_60%,rgba(5,7,15,0.75)_100%)] md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_0%_0%,#11122f_0%,transparent_55%),radial-gradient(ellipse_at_90%_100%,#24104c_0%,transparent_42%)] md:hidden">
        <div className="absolute -right-[92%] top-[39%] h-[48%] w-[110%] rotate-[24deg] rounded-[50%] border-l border-indigo-400/60 bg-[linear-gradient(100deg,rgba(74,62,175,0.3),rgba(12,12,34,0.1)_40%)] shadow-[-12px_0_32px_-12px_rgba(96,100,255,0.55)]" />
        <div className="absolute -left-[48%] bottom-[-34%] h-[47%] w-[170%] rotate-[30deg] rounded-[50%] border-t border-violet-300/80 bg-[#080619] shadow-[0_-18px_55px_rgba(130,51,246,0.7),0_-2px_7px_rgba(174,117,255,0.8)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-6 pb-16 pt-28 text-center sm:pt-32 max-md:min-h-[max(100svh,177.87vw)] max-md:items-start max-md:justify-start max-md:gap-0 max-md:px-[11.7%] max-md:pb-[48vw] max-md:pt-[16.3vw] max-md:text-left">
        <Image
          src="/logo-full.png"
          alt="AgendaClinica"
          width={938}
          height={240}
          priority
          sizes="52vw"
          className="-ml-[1.4vw] -mt-[2vw] mb-[19.8vw] h-auto w-[52vw] brightness-0 invert md:hidden"
        />
        <motion.img
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.3}
          src="/acBlanco.png"
          alt="AgendaClinica"
          className="mb-2 hidden h-24 w-auto md:block lg:hidden"
        />

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white text-balance sm:text-5xl md:text-6xl max-md:w-full max-md:text-[12.3vw] max-md:leading-[1.01] max-md:tracking-[-0.055em] max-md:text-wrap"
        >
          <span className="hidden md:inline">{title}</span>
          <span className="md:hidden">
            <span className="block whitespace-nowrap">Deja atrás</span>
            <span className="block whitespace-nowrap">Word, Excel</span>
            <span className="block whitespace-nowrap">y el papel.</span>
          </span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="max-w-3xl text-xl font-semibold leading-relaxed text-slate-400 sm:text-2xl max-md:mt-[5.4vw] max-md:text-[5.1vw] max-md:font-normal max-md:leading-[1.34] max-md:tracking-[-0.025em] max-md:text-[#bbbccd]"
        >
          <span className="hidden md:inline">{description}</span>
          <span className="md:hidden">
            <span className="block whitespace-nowrap">Agenda, cobra y automatiza</span>
            <span className="block whitespace-nowrap">tu consulta desde un solo lugar.</span>
          </span>
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-md:mt-[7.2vw] max-md:w-[64vw]"
        >
          <a
            href={primaryButtonHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "hero_primary" })}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-semibold text-indigo-950 shadow-[0_16px_48px_-8px_rgba(99,102,241,0.55)] ring-1 ring-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-[0_22px_64px_-8px_rgba(99,102,241,0.7)] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f] max-md:min-h-[12.6vw] max-md:w-full max-md:gap-[3.5vw] max-md:px-[4vw] max-md:py-[3vw] max-md:text-[4.5vw] max-md:leading-none max-md:tracking-[-0.025em] max-md:shadow-none max-md:ring-0"
          >
            {primaryButtonText}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 max-md:size-[4.5vw]">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <div className="mt-[4.6vw] flex items-center gap-[3vw] whitespace-nowrap text-[3.2vw] leading-none tracking-[-0.02em] text-[#bdbbd3] md:hidden">
          <span className="flex items-center gap-[2vw]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-[4vw] shrink-0">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 11h18M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01" />
            </svg>
            7 días gratis
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-[2vw]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-[4vw] shrink-0">
              <path d="M19 4H4a2 2 0 0 0-2 2v12M6 20h14a2 2 0 0 0 2-2V8M2 9h12M9 14h.01M2 22 22 2" />
            </svg>
            Sin tarjeta
          </span>
        </div>

        <ScreenshotDeck className="mt-2" />
      </div>
    </section>
  );
}

export default ResponsiveHeroBanner;
