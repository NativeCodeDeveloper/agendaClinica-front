import { CheckCircle2, ArrowRight, Search, Settings, GraduationCap, Rocket } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Diagnóstico",
            desc: "Conversamos 15 minutos para entender tu operación y diseñar la configuración ideal para tu centro.",
            gradient: "from-cyan-500 to-cyan-600",
            icon: <Search className="w-8 h-8 text-white" />
        },
        {
            number: "02",
            title: "Configuración",
            desc: "Cargamos tus servicios, profesionales, horarios y tarifas. Tú no mueves un dedo.",
            gradient: "from-indigo-500 to-indigo-600",
            icon: <Settings className="w-8 h-8 text-white" />
        },
        {
            number: "03",
            title: "Capacitación",
            desc: "Tu equipo aprende a operar el sistema en una sesión. Recepción y profesionales, listos desde el primer día.",
            gradient: "from-cyan-600 to-indigo-600",
            icon: <GraduationCap className="w-8 h-8 text-white" />
        },
        {
            number: "04",
            title: "En marcha",
            desc: "Empiezas a recibir reservas online, cobros automáticos y recordatorios. Sin intervención manual.",
            gradient: "from-indigo-500 to-cyan-600",
            icon: <Rocket className="w-8 h-8 text-white" />
        }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-2xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-full mb-6">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm font-semibold text-cyan-900 tracking-wide uppercase">
                            Operativo en menos de una semana
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        ¿Cómo{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-600">
                            empezamos?
                        </span>
                    </h2>

                    <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light">
                        Sin instalaciones, sin complicaciones.{' '}
                        <span className="font-semibold text-slate-900">Te configuramos todo y te acompañamos hasta que operes sin fricción.</span>
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative"
                        >
                            {/* Connecting Line (Desktop Only) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-300 to-indigo-300 z-0">
                                    <div className="absolute -right-1 top-1/2 -translate-y-1/2">
                                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div className="relative h-full bg-white rounded-3xl p-8
                                          shadow-lg shadow-slate-200/50
                                          border border-slate-200/50
                                          transition-all duration-500 ease-out
                                          hover:shadow-2xl hover:shadow-cyan-200/30
                                          hover:-translate-y-2
                                          hover:border-cyan-300/50
                                          overflow-hidden">

                                {/* Background Number */}
                                <div className="absolute -top-8 -right-8 text-9xl font-black text-slate-50 select-none group-hover:text-cyan-50 transition-colors duration-300">
                                    {step.number}
                                </div>

                                {/* Gradient Glow Effect */}
                                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                {/* Floating Orb */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Icon Circle */}
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient}
                                                   shadow-lg shadow-cyan-500/25
                                                   flex items-center justify-center mb-6
                                                   transform transition-all duration-500
                                                   group-hover:scale-110 group-hover:rotate-3`}>
                                        {step.icon}
                                    </div>

                                    {/* Number Badge */}
                                    <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full
                                                   bg-gradient-to-r ${step.gradient}
                                                   mb-4`}>
                                        <span className="text-sm font-bold text-white">
                                            Paso {step.number}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4
                                                  group-hover:text-transparent group-hover:bg-clip-text
                                                  group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600
                                                  transition-all duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base text-slate-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}
                                               transform scale-x-0 group-hover:scale-x-100
                                               transition-transform duration-500 origin-left rounded-b-3xl`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10
                                  shadow-2xl shadow-slate-900/20
                                  border border-slate-700/50
                                  relative overflow-hidden group">

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating Orbs */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                <span className="text-lg font-semibold text-white">
                                    Implementación garantizada
                                </span>
                            </div>

                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                                No estás solo. Te acompañamos desde el primer día hasta que tu clínica esté 100% automatizada y funcionando.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    <span>Soporte continuo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                                    <span>Sin costos ocultos</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    <span>Capacitación incluida</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
