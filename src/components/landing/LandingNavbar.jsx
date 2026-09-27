"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";

const navItems = [
  ["Inicio", "#inicio"],
  ["Funciones", "#funciones"],
  ["Precios", "#precios"],
  ["Contacto", "#contacto"],
];

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // El hero ocupa la pantalla completa (fondo oscuro) — el nav se mantiene
    // oscuro/transparente mientras sigas ahí, y recién pasa a claro cuando
    // avanzas hacia el resto de la página (fondo claro).
    const onScroll = () => setIsScrolled(window.scrollY > window.innerHeight - 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[300] hidden px-4 pt-4 lg:block lg:pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Logo suelto, sin caja */}
        <a
          href="#inicio"
          className={`flex min-w-0 shrink-0 items-center transition-opacity duration-300 ${
            isScrolled ? "invisible pointer-events-none opacity-0" : "visible opacity-100"
          }`}
        >
          <img
            src="/logo-full.png"
            alt="AgendaClinica"
            className={`h-10 cw-auto object-contain transition-all duration-300 sm:h-16 lg:h-18 ${
              isScrolled ? "brightness-0" : ""
            }`}
          />
        </a>

        {/* Links + CTA — dos piezas separadas */}
        <div className="hidden items-center gap-2 lg:flex">
          <nav
            className={`flex items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur-xl transition-all duration-300 ${
              isScrolled ? "border-zinc-200 bg-white/70" : "border-white/10 bg-black/30"
            }`}
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-zinc-600 hover:bg-zinc-100 hover:text-indigo-700"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "navbar_desktop" })}
            className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 ${
              isScrolled ? "bg-indigo-700 text-white hover:bg-indigo-800" : "bg-white text-indigo-950"
            }`}
          >
            Agendar demo
          </a>
        </div>
      </div>
    </header>
  );
}
