"use client";
import { MessageCircle } from 'lucide-react';

export default function ContactSection() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Gracias por tu interés. Te contactaremos pronto.");
    };

    return (
        <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center gap-12">

                    {/* Text & WhatsApp */}
                    <div className="flex flex-col items-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ¿Listo para ordenar tu clínica?
                        </h2>
                        <p className="text-lg text-slate-200/90 mb-8 leading-relaxed">
                            Cuéntanos tu tipo de centro y cuántos profesionales atienden. En menos de 24 horas tendrás una propuesta clara, sin compromiso y sin letra chica.
                        </p>

                        <div className="flex flex-col items-center gap-3">
                          <a
                            href="https://wa.me/56966091038?text=Hola,%20quiero%20automatizar%20mi%20centro.%20Somos%20__%20profesionales%20y%20necesitamos%20agenda,%20pagos%20y%20fichas."
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-extrabold tracking-tight text-white bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-lg shadow-emerald-500/20 ring-1 ring-white/10 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                          >
                            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 ring-1 ring-white/15">
                              <MessageCircle className="w-6 h-6" />
                            </span>
                            <span className="text-lg md:text-xl">Hablar por WhatsApp</span>
                            <span className="hidden sm:inline text-sm font-semibold text-white/80 group-hover:text-white/90">— Quiero ver cómo funciona</span>
                          </a>

                            <br />
                          <div className="flex flex-wrap gap-3 text-sm text-white/75">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                              Sin compromiso
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                              Respuesta en menos de 24 hrs
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                              Diagnóstico gratuito
                            </span>
                          </div>
                        </div>

                        <div className="hidden lg:flex flex-col items-center">
                            <div className="flex gap-4 opacity-50 grayscale">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
