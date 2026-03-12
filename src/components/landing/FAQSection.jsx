"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "¿Funciona para estética y salud?",
            a: "Sí, el sistema es 100% adaptable tanto para centros de estética como para consultas médicas de diversas especialidades."
        },
        {
            q: "¿Se puede pagar con MercadoPago/Stripe?",
            a: "Correcto. Integramos pasarelas de pago locales e internacionales para que recibas abonos o pagos completos de forma automática."
        },
        {
            q: "¿Cuánto demora la implementación?",
            a: "Depende del tamaño de tu clínica. En promedio, tardamos entre 3 a 7 días hábiles en dejar todo configurado y a tu equipo capacitado."
        },
        {
            q: "¿Mis datos quedan seguros?",
            a: "Absolutamente. Usamos servidores encriptados y copias de seguridad diarias para garantizar la confidencialidad y seguridad de tu información."
        },
        {
            q: "¿Se puede migrar desde Excel/Google Calendar?",
            a: "Sí, nuestro equipo te ayuda a importar tu base de datos de pacientes actual para que no pierdas ninguna ficha ni historial."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Preguntas Frecuentes
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(projected => projected === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
                            >
                                <span className="font-semibold text-slate-800">{item.q}</span>
                                {openIndex === idx ? (
                                    <ChevronUp className="w-5 h-5 text-cyan-600" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
