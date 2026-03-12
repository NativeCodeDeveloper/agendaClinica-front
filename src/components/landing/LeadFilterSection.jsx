import { Check, X, Target, AlertCircle } from 'lucide-react';

export default function LeadFilterSection() {
  const yesItems = [
    {
      title: 'Atiendes pacientes a diario',
      desc: 'Tienes un flujo constante de pacientes y necesitas orden para no depender de WhatsApp y planillas.',
    },
    {
      title: 'Hoy llevas registros manuales',
      desc: 'Anotas en cuadernos, Excel o notas sueltas, y eso te hace perder tiempo y cometer errores.',
    },
    {
      title: 'Quieres centralizar todo en un solo lugar',
      desc: 'Agenda, pagos y fichas clínicas conectadas para trabajar más rápido y con menos fricción.',
    },
    {
      title: 'Buscas algo serio y escalable',
      desc: 'Una solución profesional que aguante crecimiento y te dé visibilidad del negocio.',
    },
  ];

  const noItems = [
    {
      title: 'Solo lo necesitas "por si acaso"',
      desc: 'Si aún no tienes agenda activa o pacientes recurrentes, quizá conviene partir con algo más simple.',
    },
    {
      title: 'Prefieres seguir con herramientas separadas',
      desc: 'Si te acomoda manejar agenda y pagos por canales distintos, este sistema no es prioridad todavía.',
    },
    {
      title: 'Buscas una plantilla genérica',
      desc: 'Si lo que quieres es una solución estándar sin ajustes, hay opciones más básicas que pueden servirte.',
    },
    {
      title: 'Tu negocio no trabaja con citas',
      desc: 'Este producto está pensado para servicios con agenda (clínicas, centros y profesionales).',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-200/15 rounded-full blur-3xl" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-100/20 to-transparent rounded-full blur-2xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full mb-6 border border-slate-200">
            <Target className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
              Claridad desde el inicio
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            ¿Este sistema es{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-600">
              para ti?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light">
            Queremos que tengas{' '}
            <span className="font-semibold text-slate-900">claridad desde el inicio</span>.
            Si calzas con estos puntos, vas a sacarle mucho provecho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* YES Column */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full bg-white rounded-3xl
                          shadow-xl shadow-slate-200/50
                          border border-slate-200/50
                          transition-all duration-500 ease-out
                          hover:shadow-2xl hover:shadow-emerald-200/30
                          hover:-translate-y-1
                          hover:border-emerald-300/50
                          overflow-hidden">

              {/* Top Accent Bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500" />

              {/* Floating Orb */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600
                                shadow-lg shadow-emerald-500/25
                                flex items-center justify-center flex-shrink-0
                                transform transition-all duration-500
                                group-hover:scale-110 group-hover:rotate-3">
                    <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2
                                  group-hover:text-transparent group-hover:bg-clip-text
                                  group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-green-600
                                  transition-all duration-300">
                      Ideal si...
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      Quieres ordenar agenda, pagos y fichas sin enredos.
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <ul className="space-y-4">
                  {yesItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="group/item relative overflow-hidden rounded-2xl
                               border border-emerald-100/60
                               bg-gradient-to-br from-emerald-50/40 to-green-50/30
                               p-5
                               transition-all duration-300
                               hover:border-emerald-300/60
                               hover:shadow-lg hover:shadow-emerald-100/50
                               hover:-translate-x-1"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                      <div className="flex gap-4 relative z-10">
                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-white
                                       shadow-sm
                                       flex items-center justify-center flex-shrink-0
                                       transition-all duration-300
                                       group-hover/item:scale-110 group-hover/item:shadow-md">
                          <Check className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                        </span>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 mb-1 text-base">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500
                           transform scale-x-0 group-hover:scale-x-100
                           transition-transform duration-500 origin-left" />
            </div>
          </div>

          {/* NO Column */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-red-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            {/* Card */}
            <div className="relative h-full bg-white rounded-3xl
                          shadow-xl shadow-slate-200/50
                          border border-slate-200/50
                          transition-all duration-500 ease-out
                          hover:shadow-2xl hover:shadow-rose-200/30
                          hover:-translate-y-1
                          hover:border-rose-300/50
                          overflow-hidden">

              {/* Top Accent Bar */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-rose-400 via-rose-500 to-red-500" />

              {/* Floating Orb */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600
                                shadow-lg shadow-rose-500/25
                                flex items-center justify-center flex-shrink-0
                                transform transition-all duration-500
                                group-hover:scale-110 group-hover:rotate-3">
                    <AlertCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2
                                  group-hover:text-transparent group-hover:bg-clip-text
                                  group-hover:bg-gradient-to-r group-hover:from-rose-600 group-hover:to-red-600
                                  transition-all duration-300">
                      Quizá no es necesario aún si...
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      No pasa nada: a veces conviene ir paso a paso.
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <ul className="space-y-4">
                  {noItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="group/item relative overflow-hidden rounded-2xl
                               border border-rose-100/60
                               bg-gradient-to-br from-rose-50/40 to-red-50/30
                               p-5
                               transition-all duration-300
                               hover:border-rose-300/60
                               hover:shadow-lg hover:shadow-rose-100/50
                               hover:-translate-x-1"
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                      <div className="flex gap-4 relative z-10">
                        <span className="mt-0.5 w-9 h-9 rounded-xl bg-white
                                       shadow-sm
                                       flex items-center justify-center flex-shrink-0
                                       transition-all duration-300
                                       group-hover/item:scale-110 group-hover/item:shadow-md">
                          <X className="w-5 h-5 text-rose-600" strokeWidth={2.5} />
                        </span>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900 mb-1 text-base">{item.title}</p>
                          <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-red-500
                           transform scale-x-0 group-hover:scale-x-100
                           transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">¿Tienes dudas?</span>{' '}
              Agenda una reunión de 15 minutos para evaluar si este sistema calza con tu operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
