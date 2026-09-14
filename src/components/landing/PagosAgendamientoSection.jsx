import Image from "next/image";

export default function PagosAgendamientoSection() {
  return (
    <section
      aria-labelledby="titulo-pagos-agendamiento"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Pagos al reservar
          </div>

          <h2
            id="titulo-pagos-agendamiento"
            className="text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Automatiza el agendamiento con pagos de por medio
          </h2>

          <p className="mt-6 max-w-lg text-pretty text-lg leading-8 text-slate-600">
            Asegura la visita de tu paciente con una pasarela de pago simple,
            rápida y segura.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-slate-700">
                Reserva confirmada
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="5" y="10" width="14" height="10" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-slate-700">
                Pago protegido
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute inset-x-10 bottom-0 h-20 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-2 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] sm:p-3">
            <Image
              src="/profesionales/asas.png"
              alt="Profesional de salud utilizando una pasarela de pago para confirmar una reserva"
              width={1310}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
