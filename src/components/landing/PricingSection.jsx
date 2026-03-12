import { CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
    const plans = [
        {
            name: "Inicio",
            subtitle: "Para profesionales independientes",
            features: [
                "Agenda Online",
                "Recordatorios WhatsApp",
                "1 Usuario",
                "Soporte por Email"
            ],
            highlight: false
        },
        {
            name: "Pro",
            subtitle: "Para centros en crecimiento",
            features: [
                "Todo lo de Inicio",
                "Pagos Online",
                "Ficha Clínica Digital",
                "Hasta 3 Usuarios",
                "Soporte Prioritario"
            ],
            highlight: true
        },
        {
            name: "Clínica",
            subtitle: "Gestión avanzada y control total",
            features: [
                "Todo lo de Pro",
                "Múltiples Sucursales",
                "Reportes Avanzados",
                "Usuarios Ilimitados",
                "Soporte Dedicado"
            ],
            highlight: false
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Planes Orientativos</h2>
                <p className="text-slate-600 mb-16">
                    Cotización final se ajusta según cantidad de profesionales y módulos activos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl p-8 border ${plan.highlight ? 'border-cyan-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-transform flex flex-col`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                                    Más Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-slate-500 text-sm mb-8 h-10">{plan.subtitle}</p>

                            <ul className="space-y-4 mb-8 text-left flex-1">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                                        <CheckCircle2 className={`w-5 h-5 ${plan.highlight ? 'text-cyan-600' : 'text-slate-400'}`} />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.highlight
                                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-cyan-500 hover:to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                }`}>
                                Cotizar este plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
