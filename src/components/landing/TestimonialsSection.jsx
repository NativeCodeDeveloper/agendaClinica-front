
export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Bajamos los no-show a la mitad en el primer mes. Los recordatorios automáticos cambiaron completamente la dinámica de la clínica.",
            author: "Dra. Camila Vargas",
            role: "Médico Estético · Santiago",
            initial: "C"
        },
        {
            quote: "Mi recepcionista ya no pasa el día respondiendo WhatsApp. Los pacientes agendan solos, pagan solos y llegan recordados. Es otro mundo.",
            author: "Felipe M.",
            role: "Administrador · Centro de Salud Integral",
            initial: "F"
        },
        {
            quote: "Antes no sabía cuánto ingresaba al día. Ahora veo todo en tiempo real: pagos, deuda y caja. Imposible volver atrás.",
            author: "María Paz R.",
            role: "Kinesióloga Independiente · Valparaíso",
            initial: "M"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-16">
                    Lo que dicen quienes ya lo usan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur border border-white/5 p-8 rounded-2xl relative">
                            <span className="text-4xl text-cyan-500 font-serif absolute top-6 left-6">"</span>
                            <p className="text-slate-300 italic mb-6 relative z-10 pt-4 leading-relaxed">
                                {t.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                                    {t.initial}
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">{t.author}</p>
                                    <p className="text-slate-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Placeholder Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 opacity-30 grayscale">
                    <div className="text-xl font-bold text-white">CLÍNICA <span className="font-light">ESTÉTICA</span></div>
                    <div className="text-xl font-bold text-white">DERMA<span className="font-light">CENTER</span></div>
                    <div className="text-xl font-bold text-white">KINE<span className="font-light">SPORE</span></div>
                    <div className="text-xl font-bold text-white">SALUD<span className="font-light">INTEGRAL</span></div>
                </div>
            </div>
        </section>
    );
}
