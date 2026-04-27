import { Bell, CreditCard, FileText, Users } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: <Bell className="w-7 h-7" />,
            title: "Menos no-show, más ingresos",
            description: "El 40% de las ausencias son por olvido. Los recordatorios automáticos los reducen antes de que sean un problema.",
            gradient: "from-cyan-500 to-cyan-600"
        },
        {
            icon: <CreditCard className="w-7 h-7" />,
            title: "Cobra antes de la cita",
            description: "Elimina las citas no pagadas. Tus pacientes abonan al momento de agendar y tú tienes el control de caja en tiempo real.",
            gradient: "from-indigo-500 to-indigo-600"
        },
        {
            icon: <FileText className="w-7 h-7" />,
            title: "Historial siempre a mano",
            description: "Accede al historial completo de cada paciente desde cualquier dispositivo. Sin papeles, sin caos, sin información perdida.",
            gradient: "from-cyan-600 to-indigo-600"
        },
        {
            icon: <Users className="w-7 h-7" />,
            title: "Un sistema para todo tu equipo",
            description: "Cada profesional con su propia agenda, horarios y servicios. Perfecto para centros con múltiples especialistas.",
            gradient: "from-indigo-500 to-cyan-600"
        },
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
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
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-indigo-100 rounded-full mb-6">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-cyan-900 tracking-wide uppercase">
                            Lo que cambia desde el día uno
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                        Deja de apagar incendios.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-600">
                            Empieza a gestionar.
                        </span>
                    </h2>

                    <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light">
                        Tu atención merece más que un cuaderno y un WhatsApp colapsado.{' '}
                        <span className="font-semibold text-slate-900">Agenda Clínica centraliza todo en un sistema claro, elegante y que funciona.</span>
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full bg-white rounded-3xl p-8 sm:p-10
                                          shadow-lg shadow-slate-200/50
                                          border border-slate-200/50
                                          transition-all duration-500 ease-out
                                          hover:shadow-2xl hover:shadow-cyan-200/30
                                          hover:-translate-y-2
                                          hover:border-cyan-300/50
                                          overflow-hidden">

                                {/* Gradient Glow Effect */}
                                <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                                {/* Floating Orbs */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-200/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl
                                                   bg-gradient-to-br ${benefit.gradient}
                                                   shadow-lg shadow-cyan-500/25
                                                   mb-6
                                                   transform transition-transform duration-500
                                                   group-hover:scale-110 group-hover:rotate-3`}>
                                        <div className="text-white">
                                            {benefit.icon}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4
                                                  group-hover:text-transparent group-hover:bg-clip-text
                                                  group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-indigo-600
                                                  transition-all duration-300">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                                        {benefit.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}
                                               transform scale-x-0 group-hover:scale-x-100
                                               transition-transform duration-500 origin-left`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900
                                  rounded-full shadow-2xl shadow-slate-900/20
                                  border border-slate-700/50
                                  group cursor-pointer
                                  hover:shadow-cyan-500/20 hover:border-cyan-500/50
                                  transition-all duration-300">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-slate-900" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-slate-900" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 border-2 border-slate-900" />
                        </div>
                        <span className="text-white font-semibold">
                            Clínicas y consultorios que ya dejaron el caos atrás
                        </span>
                        <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
