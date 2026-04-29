"use client";

import { MessageCircle, Mail } from "lucide-react";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";
const MAIL_LINK =
  "mailto:ingenieria.software@nativecode.cl?subject=Consulta%20Agenda%20Cl%C3%ADnica&body=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%2C%20estoy%20interesado%20en%20una%20reuni%C3%B3n%20con%20ustedes.";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-white/95 backdrop-blur-lg border-t border-slate-200/60" />

      <div className="relative px-3 py-3 pb-safe">
        <div className="flex gap-2.5">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-green-500/20 active:scale-[0.98] transition-transform duration-150"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            <span>WhatsApp</span>
          </a>

          <a
            href={MAIL_LINK}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-900 text-white py-3.5 rounded-2xl font-semibold text-sm shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-transform duration-150"
          >
            <Mail className="w-5 h-5" strokeWidth={2} />
            <span>Correo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
