import Image from "next/image";
import { CalendarDays, Check, ChevronRight, Clock3, Mail, MessageCircle, Play, Settings, ShieldCheck, Stethoscope, UserRound, Wallet } from "lucide-react";
import { IlustracionAgenda } from "./IlustracionesModulos";

export function IlustracionOperacion() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-80">
      <div className="absolute inset-x-0 bottom-1 h-48 -rotate-12 rounded-[45%] bg-linear-to-br from-violet-100/90 to-indigo-50/30" />
      <div className="absolute bottom-3 right-1 origin-bottom-right scale-110">
        <IlustracionAgenda />
        <div className="absolute -top-1 left-6 flex gap-8"><span className="h-5 w-1.5 rounded-full bg-linear-to-r from-slate-600 to-slate-300 shadow-sm" /><span className="h-5 w-1.5 rounded-full bg-linear-to-r from-slate-600 to-slate-300 shadow-sm" /><span className="h-5 w-1.5 rounded-full bg-linear-to-r from-slate-600 to-slate-300 shadow-sm" /></div>
      </div>
      <div className="absolute bottom-7 left-0 flex w-[62%] flex-col gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_12px_30px_#7c3aed15]">
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><Stethoscope className="size-4" /></span><span className="flex-1 text-[10px] font-medium text-indigo-950">Servicios</span><ChevronRight className="size-3 text-indigo-200" /></div>
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><UserRound className="size-4" /></span><span className="flex-1 text-[10px] font-medium text-indigo-950">Profesionales</span><ChevronRight className="size-3 text-indigo-200" /></div>
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><Clock3 className="size-4" /></span><span className="flex-1 text-[10px] font-medium text-indigo-950">Horarios</span><ChevronRight className="size-3 text-indigo-200" /></div>
      </div>
    </div>
  );
}

export function IlustracionConfiguracion() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-80">
      <div className="absolute inset-x-1 bottom-1 h-48 rotate-12 rounded-[45%] bg-linear-to-br from-indigo-50 to-blue-50" />
      <div className="absolute inset-x-1 bottom-2 flex flex-col gap-4 rounded-2xl border border-white bg-white/95 p-5 shadow-[0_12px_30px_#6366f115]">
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><Stethoscope className="size-4" /></span><span className="flex-1 text-[11px] font-medium text-slate-950">Servicios</span><ChevronRight className="size-3 text-indigo-200" /><span className="flex h-5 w-9 justify-end rounded-full bg-linear-to-r from-violet-700 to-violet-500 p-0.5 shadow-inner"><span className="size-4 rounded-full bg-white shadow-sm" /></span></div>
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><Wallet className="size-4" /></span><span className="flex-1 text-[11px] font-medium text-slate-950">Tarifas</span><ChevronRight className="size-3 text-indigo-200" /><span className="flex h-5 w-9 justify-end rounded-full bg-linear-to-r from-violet-700 to-violet-500 p-0.5 shadow-inner"><span className="size-4 rounded-full bg-white shadow-sm" /></span></div>
        <div className="flex items-center gap-2"><span className="rounded-lg bg-violet-50 p-1.5 text-violet-600"><ShieldCheck className="size-4" /></span><span className="flex-1 text-[11px] font-medium text-slate-950">Reglas de agenda</span><ChevronRight className="size-3 text-indigo-200" /><span className="flex h-5 w-9 justify-end rounded-full bg-linear-to-r from-violet-700 to-violet-500 p-0.5 shadow-inner"><span className="size-4 rounded-full bg-white shadow-sm" /></span></div>
      </div>
      <span className="absolute -top-0.5 right-0 flex size-14 items-center justify-center rounded-2xl border border-white/40 bg-linear-to-br from-violet-400 to-violet-600 text-white shadow-lg shadow-violet-500/20"><Settings className="size-8" strokeWidth={2.2} /></span>
    </div>
  );
}

export function IlustracionCapacitacion() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-80">
      <div className="absolute inset-x-0 bottom-2 h-48 -rotate-12 rounded-[45%] bg-linear-to-br from-violet-100/80 to-indigo-50/30" />
      <div className="absolute bottom-7 left-10 right-2 -skew-x-8 rounded-lg border-6 border-slate-800 bg-slate-800 shadow-[0_12px_20px_#0f172a20]">
        <Image src="/deck-calendario.png" alt="" width={2048} height={1205} sizes="280px" className="aspect-[1.4] w-full rounded-xs object-cover object-left" />
      </div>
      <div className="absolute bottom-4 left-0 right-2 h-3 -skew-x-12 rounded-b-[50%] border-b-2 border-slate-400 bg-linear-to-b from-slate-200 via-slate-300 to-slate-400 shadow-lg"><span className="mx-auto block h-1 w-14 rounded-b-lg bg-slate-400" /></div>
      <div className="absolute left-0 top-1 w-39 -rotate-8 rounded-2xl border border-white bg-white p-3.5 shadow-[0_12px_30px_#7c3aed20]">
        <div className="flex items-center gap-2"><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white"><Play className="size-4 fill-white" /></span><span className="text-[11px] font-medium leading-tight text-slate-950">Capacitación<br />guiada</span></div>
        <span className="mt-3 block h-1.5 w-full rounded-full bg-indigo-100/80" /><span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-indigo-100/70" />
      </div>
      <div className="absolute right-0 top-1 flex gap-1.5 text-violet-500"><span className="h-4 w-1 rotate-[-12deg] rounded-full bg-current" /><span className="-mt-1 h-5 w-1 rotate-20 rounded-full bg-current" /><span className="mt-2 h-4 w-1 rotate-60 rounded-full bg-current" /></div>
    </div>
  );
}

export function IlustracionInicio() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-80">
      <div className="absolute inset-x-0 bottom-1 h-44 rotate-12 rounded-[45%] bg-linear-to-br from-sky-50 to-indigo-100/80" />
      <div className="absolute inset-x-5 bottom-2 flex flex-col items-center rounded-[22px] border border-white bg-white/95 p-5 shadow-[0_12px_30px_#6366f115]">
        <span className="mb-2.5 flex size-11 items-center justify-center rounded-full bg-linear-to-br from-green-400 to-emerald-500 text-white shadow-md shadow-emerald-100"><Check className="size-7" strokeWidth={2.5} /></span>
        <span className="whitespace-nowrap text-[14px] font-semibold tracking-tight text-slate-950">¡Reserva confirmada!</span>
        <span className="mt-3 h-1.5 w-4/5 rounded-full bg-indigo-100/80" /><span className="mt-2 h-1.5 w-1/2 rounded-full bg-indigo-100/70" />
        <div className="mt-5 flex w-full items-center justify-around"><span className="rounded-lg bg-emerald-500 p-1.5 text-white shadow-md shadow-emerald-100"><MessageCircle className="size-5" /></span><span className="rounded-lg bg-violet-100/80 p-1.5 text-violet-600"><Mail className="size-5" /></span><span className="rounded-lg bg-violet-100/80 p-1.5 text-violet-600"><CalendarDays className="size-5" /></span></div>
      </div>
      <span className="absolute right-0 top-8 h-1 w-4 -rotate-30 rounded-full bg-violet-600" /><span className="absolute -right-0.5 top-13 h-1 w-4 rotate-30 rounded-full bg-violet-600" />
    </div>
  );
}
