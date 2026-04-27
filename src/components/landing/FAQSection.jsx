"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "¿Sirve para mi tipo de consulta o centro?",
            a: "Sí. Agenda Clínica está diseñado para médicos, dentistas, kinesiólogos, psicólogos, nutricionistas y centros de estética o salud. Si atiendes con citas, esto es para ti."
        },
        {
            q: "¿Cómo cobran mis pacientes?",
            a: "Integramos Mercado Pago y otras pasarelas para que tus pacientes paguen al momento de agendar. Tú decides si cobras el total o un abono para asegurar la cita."
        },
        {
            q: "¿Cuánto tiempo tarda en estar operativo?",
            a: "Entre 3 y 7 días hábiles. Nuestro equipo configura todo por ti y capacita a tu equipo. Solo tienes que aparecer el primer día."
        },
        {
            q: "¿Qué pasa con los datos de mis pacientes?",
            a: "Toda la información está encriptada y respaldada diariamente en servidores seguros. Cumplimos los estándares de privacidad para datos clínicos sensibles."
        },
        {
            q: "¿Puedo migrar mis datos actuales?",
            a: "Sí. Te ayudamos a importar tu base de pacientes, fichas e historial de atención desde Excel, Google Calendar o cualquier sistema que estés usando hoy. No pierdes nada."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Todo lo que necesitas saber
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
