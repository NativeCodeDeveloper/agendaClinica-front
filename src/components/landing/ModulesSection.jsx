import {
  CalendarDays,
  Users,
  CreditCard,
  MessageSquare,
  Briefcase,
  BarChart,
  UserCog,
  Clock,
  FileSpreadsheet,
  Mail,
  Shield,
  Lock,
} from 'lucide-react';

export default function ModulesSection() {
  const modules = [
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: 'Agenda y calendario',
      desc: 'Tus pacientes agendan online en segundos y tú ves todo en tiempo real. Define horarios, duración por servicio y disponibilidad sin caos.',
      gradient: 'from-cyan-500 via-cyan-600 to-indigo-600',
      glowColor: 'group-hover:shadow-cyan-500/25'
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      title: 'Agendas por Profesionales',
      desc: 'Cada profesional tiene sus propias agendas independientes con horarios, servicios y disponibilidad personalizados según su especialidad.',
      gradient: 'from-indigo-500 via-indigo-600 to-cyan-600',
      glowColor: 'group-hover:shadow-indigo-500/25'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Gestión de pacientes',
      desc: 'Cada paciente queda registrado automáticamente con su historial de datos y atención. Centraliza contactos, notas y preferencias en un solo lugar.',
      gradient: 'from-cyan-500 via-teal-500 to-indigo-600',
      glowColor: 'group-hover:shadow-cyan-500/25'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Bloqueo de Horarios',
      desc: 'Bloquea horarios específicos según profesional para vacaciones, reuniones o tiempo personal sin afectar otras agendas del centro.',
      gradient: 'from-slate-500 via-slate-600 to-indigo-600',
      glowColor: 'group-hover:shadow-slate-500/25'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Pagos automatizados',
      desc: 'Cobra por adelantado o en cuotas y reduce las ausencias. Integra pagos online (por ejemplo, Mercado Pago) y mantén el control de cada transacción.',
      gradient: 'from-indigo-500 via-indigo-600 to-cyan-600',
      glowColor: 'group-hover:shadow-indigo-500/25'
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: 'Presupuestos Dinámicos',
      desc: 'Genera presupuestos por tratamiento de forma automática con desglose de servicios, valores y planes de pago personalizados.',
      gradient: 'from-cyan-600 via-teal-600 to-cyan-500',
      glowColor: 'group-hover:shadow-cyan-600/25'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Recordatorios automáticos',
      desc: 'Envía recordatorios por correo para disminuir citas canceladas por olvidos. Horas antes se enviarán recordatorios automáticos a tus pacientes.',
      gradient: 'from-indigo-500 via-indigo-600 to-cyan-600',
      glowColor: 'group-hover:shadow-indigo-500/25'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Correos de Seguimiento',
      desc: 'Sistema automatizado de correos de seguimiento post-atención para mejorar la experiencia del paciente y fidelización.',
      gradient: 'from-cyan-500 via-cyan-600 to-indigo-600',
      glowColor: 'group-hover:shadow-cyan-500/25'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Administración de agenda',
      desc: 'Bloquea días completos, crea pausas, reprograma citas y agrega reservas manuales cuando sea necesario, sin perder el orden.',
      gradient: 'from-indigo-500 via-cyan-600 to-cyan-500',
      glowColor: 'group-hover:shadow-indigo-500/25'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Resguardo de Datos Clínicos',
      desc: 'Protección avanzada de datos sensibles con encriptación y cumplimiento de normativas de privacidad para información médica.',
      gradient: 'from-slate-500 via-indigo-600 to-cyan-600',
      glowColor: 'group-hover:shadow-slate-500/25'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Control de Accesos',
      desc: 'Define roles y permisos por usuario. Controla quién puede ver, editar o eliminar información según su cargo en la clínica.',
      gradient: 'from-slate-500 via-slate-600 to-indigo-600',
      glowColor: 'group-hover:shadow-slate-500/25'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Historial y reportes',
      desc: 'Visualiza compras y agendamientos online con trazabilidad completa de pagos, servicios y fechas para tomar mejores decisiones.',
      gradient: 'from-cyan-500 via-indigo-500 to-indigo-600',
      glowColor: 'group-hover:shadow-cyan-500/25'
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 tracking-wide uppercase">
              Funcionalidades Completas
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Módulos del </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-indigo-400">
              sistema
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto">
            Una suite completa de herramientas diseñada para{' '}
            <span className="text-slate-200 font-medium">ordenar tu operación</span>,
            mejorar la experiencia del paciente y{' '}
            <span className="text-slate-200 font-medium">escalar tu clínica</span>.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${mod.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8
                            border border-slate-700/50
                            shadow-xl shadow-black/20
                            transition-all duration-500 ease-out
                            hover:border-slate-600/50
                            hover:-translate-y-2
                            overflow-hidden">

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Orb */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.gradient}
                                shadow-lg ${mod.glowColor}
                                mb-6
                                transform transition-all duration-500
                                group-hover:scale-110 group-hover:rotate-3`}>
                    <div className="text-white">
                      {mod.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4
                                group-hover:text-transparent group-hover:bg-clip-text
                                group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-indigo-300
                                transition-all duration-300">
                    {mod.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {mod.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${mod.gradient}
                               transform scale-x-0 group-hover:scale-x-100
                               transition-transform duration-500 origin-left rounded-b-3xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                        bg-gradient-to-r from-slate-800/50 to-slate-900/50
                        border border-slate-700/50
                        backdrop-blur-sm
                        group cursor-pointer
                        hover:border-cyan-500/50
                        transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm font-medium">
                Sistema en constante evolución
              </span>
            </div>
            <span className="text-slate-500 text-xs">
              • Actualizaciones incluidas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
