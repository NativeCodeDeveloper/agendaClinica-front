import Image from "next/image";
import { CalendarDays, LockKeyhole, Mail } from "lucide-react";

function PasoPaciente({ numero, titulo, descripcion, children, etiqueta, icono: Icono }) {
  return (
    <article className="relative flex min-w-0 flex-col items-center text-center">
      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-violet-900 text-2xl font-bold text-white ring-2 ring-violet-300">{numero}</span>
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">{titulo}</h3>
      <p className="mt-2 max-w-xs text-base leading-6 text-slate-500 lg:min-h-12">{descripcion}</p>
      <div className="mt-8 flex w-full flex-1 items-center justify-center">{children}</div>
      <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-sky-50 py-2 pl-2 pr-5 text-sm font-semibold text-sky-700">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm"><Icono aria-hidden="true" className="h-5 w-5" /></span>{etiqueta}
      </div>
    </article>
  );
}

export default function PasosPacientesSection() {
  return (
    <section aria-labelledby="titulo-pasos-pacientes" className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <h2 id="titulo-pasos-pacientes" className="mt-6 text-balance text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">Automatiza <span className="text-violet-900">agenda y pagos</span><br className="hidden sm:block" /> en pocos pasos para tus pacientes</h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-7 text-slate-500 sm:text-xl sm:leading-8">Tus pacientes pueden agendar, pagar y recibir confirmación al instante.<br className="hidden sm:block" /> Todo de forma simple, segura y sin llamadas.</p>
        </div>

        <div className="relative mt-14 grid gap-14 lg:grid-cols-3 lg:gap-8">
          <div aria-hidden="true" className="absolute left-[16.67%] right-[16.67%] top-7 hidden border-t-2 border-dashed border-sky-200 lg:block" />
          <PasoPaciente numero="1" titulo="Agendan" descripcion="Eligen fecha y hora desde tu página de agendamiento." etiqueta="Rápido y cómodo" icono={CalendarDays}>
            <Image src="/publicPagos/1.png" alt="Ejemplo de agenda de cita con selección de fecha y hora" width={1254} height={1254} sizes="(max-width: 1023px) 384px, 33vw" className="h-auto w-full max-w-sm object-contain" />
          </PasoPaciente>
          <PasoPaciente numero="2" titulo="Pagan" descripcion="Realizan el pago en línea de forma segura." etiqueta="Pago seguro" icono={LockKeyhole}>
            <Image src="/publicPagos/2.png" alt="Ejemplo de pago en línea con tarjeta y comprobante de pago realizado" width={1536} height={1024} sizes="(max-width: 1023px) 384px, 33vw" className="h-auto w-full max-w-sm scale-110 object-contain" />
          </PasoPaciente>
          <PasoPaciente numero="3" titulo="Confirman" descripcion="Reciben la confirmación al instante por correo o WhatsApp." etiqueta="Confirmación inmediata" icono={Mail}>
            <Image src="/publicPagos/3.png" alt="Ejemplo de confirmación de cita con fecha, hora y profesional" width={1223} height={1286} sizes="(max-width: 1023px) 384px, 33vw" className="h-auto w-full max-w-sm object-contain" />
          </PasoPaciente>
        </div>
      </div>
    </section>
  );
}
