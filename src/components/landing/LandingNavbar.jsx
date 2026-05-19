"use client";

import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";

const navItems = [
  ["Inicio", "#inicio"],
  ["Beneficios", "#beneficios"],
  ["Funciones", "#funciones"],
  ["Precios", "#precios"],
  ["Contacto", "#contacto"],
];

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-1/2 top-2 z-[300] w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 px-1.5 transition-all duration-300 sm:top-3 sm:w-[calc(100%-1.5rem)] sm:px-2 lg:top-5">
      <div
        className={`rounded-[1.4rem] border px-3 py-2.5 transition-all duration-300 sm:rounded-[2rem] sm:px-4 sm:py-3 ${
          isScrolled
            ? "border-white/30 bg-white/58 shadow-[0_18px_40px_rgba(15,23,42,0.14)] backdrop-blur-xl"
            : "border-slate-200/80 bg-white/92 shadow-[0_16px_34px_rgba(15,23,42,0.10)] backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center">
            <img
              src="/logacsolo.png"
              alt="Agenda Clínica"
              className="h-9 w-9 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12"
            />
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-[#24315f] transition-colors hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-[#1d2148] px-3.5 py-2 text-[10px] font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-[11px] lg:px-7 lg:py-3 lg:text-sm"
          >
            Agendar demo
          </a>
        </div>

        <nav className="mt-3 overflow-x-auto pb-0.5 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-2">
            {navItems.map(([label, href], index) => (
              <a
                key={label}
                href={href}
                className={`rounded-full px-3 py-1.5 text-[10px] font-medium ${
                  index === 0
                    ? "bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                    : "bg-white/70 text-[#24315f] ring-1 ring-slate-200/80"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
