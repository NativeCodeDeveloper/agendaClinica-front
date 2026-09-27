import { Bell, CalendarDays, Check, Crown, CreditCard, FileText, Heart, LockKeyhole, Mail, MousePointer2, Phone, Send, Shield, UserRound } from "lucide-react";

export function IlustracionAgenda() {
  return (
    <div className="relative w-36 rounded-2xl bg-white/95 p-3.5 shadow-[0_8px_35px_#8b5cf61a] sm:w-40">
      <div className="mb-3 flex justify-around text-violet-200"><span>•</span><span>•</span><span>•</span><span>•</span></div>
      <div className="grid grid-cols-4 gap-1.5">
        <span className="h-6 rounded-md bg-violet-100/70" /><span className="h-6 rounded-md bg-violet-100" /><span className="h-6 rounded-md bg-violet-100" /><span className="h-6 rounded-md bg-violet-200" />
        <span className="h-6 rounded-md bg-violet-100/70" /><span className="h-6 rounded-md bg-violet-100" /><span className="flex h-6 items-center justify-center rounded-md bg-linear-to-br from-violet-400 to-violet-600 text-white shadow-md"><span className="h-0.5 w-3 rounded-full bg-white/80" /></span><span className="h-6 rounded-md bg-violet-100" />
        <span className="h-6 rounded-md bg-violet-100/70" /><span className="h-6 rounded-md bg-violet-100" /><span className="h-6 rounded-md bg-violet-100" /><span className="h-6 rounded-md bg-violet-100" />
      </div>
      <MousePointer2 className="absolute -bottom-0.5 right-5 size-10 fill-violet-800 text-violet-900 drop-shadow-md" strokeWidth={1.5} />
    </div>
  );
}

export function IlustracionRecordatorios() {
  return (
    <div className="relative w-36 rounded-2xl bg-white/95 px-5 py-7 shadow-[0_10px_35px_#10b98118] sm:w-40">
      <span className="absolute -left-3 top-0 flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-emerald-300 to-emerald-500 text-white shadow-lg shadow-emerald-200/50"><Phone className="size-5" /></span>
      <span className="absolute -right-1 -top-5 flex size-9 items-center justify-center rounded-full bg-linear-to-br from-violet-400 to-violet-600 text-white shadow-lg shadow-violet-200/60"><Bell className="size-5 fill-white/80" /></span>
      <div className="flex flex-col gap-3"><span className="h-2 w-3/5 rounded-full bg-indigo-200/80" /><span className="h-2 w-full rounded-full bg-indigo-200/80" /><span className="h-2 w-4/5 rounded-full bg-indigo-200/70" /></div>
      <span className="absolute -bottom-3 left-5 size-6 -skew-y-12 rounded-bl-lg border-b-4 border-l-4 border-emerald-100/80 bg-white" />
    </div>
  );
}

export function IlustracionPacientes() {
  return (
    <div className="w-40 rounded-2xl bg-white/95 p-4 shadow-[0_8px_35px_#8b5cf61a] sm:w-44">
      <div className="flex items-center gap-3"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-violet-100"><UserRound className="size-8 fill-indigo-500 text-indigo-600" /></span><div className="flex flex-1 flex-col gap-2"><span className="h-2 w-full rounded-full bg-indigo-200/80" /><span className="h-2 w-4/5 rounded-full bg-indigo-100" /></div></div>
      <div className="mt-4 flex justify-between text-violet-600"><span className="rounded-xl bg-violet-50 p-2.5"><FileText className="size-4" /></span><span className="rounded-xl bg-violet-50 p-2.5"><CalendarDays className="size-4" /></span><span className="rounded-xl bg-violet-50 p-2.5"><Heart className="size-4" /></span></div>
    </div>
  );
}

export function IlustracionPagos() {
  return (
    <div className="relative w-36 rounded-2xl bg-white/95 p-5 shadow-[0_8px_35px_#f59e0b14] sm:w-40">
      <span className="flex h-14 w-18 items-center justify-center rounded-xl bg-linear-to-br from-blue-100 to-indigo-100"><CreditCard className="size-11 text-blue-500" strokeWidth={1.6} /></span>
      <span className="absolute right-3 top-14 flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-emerald-300 to-emerald-500 text-white shadow-lg shadow-emerald-200/60"><Check className="size-6" strokeWidth={3} /></span>
      <div className="mt-5 flex flex-col gap-2"><span className="h-2 w-4/5 rounded-full bg-indigo-200/70" /><span className="h-2 w-3/5 rounded-full bg-indigo-100" /></div>
    </div>
  );
}

export function IlustracionPresupuestos() {
  return (
    <div className="w-32 rounded-2xl bg-white/95 p-4 shadow-[0_8px_35px_#8b5cf61a] sm:w-36">
      <div className="mb-3 flex items-center gap-3"><span className="text-2xl font-bold text-violet-600">$</span><span className="h-1.5 w-14 rounded-full bg-violet-100" /></div>
      <div className="flex flex-col gap-2"><span className="h-1.5 w-full rounded-full bg-indigo-100" /><span className="h-1.5 w-2/3 rounded-full bg-indigo-100" /><span className="h-1.5 w-full rounded-full bg-indigo-100" /><span className="h-1.5 w-2/3 rounded-full bg-indigo-100" /></div>
      <div className="mt-4 h-6 rounded-lg bg-linear-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-200/50" />
    </div>
  );
}

export function IlustracionCorreos() {
  return (
    <div className="relative w-36 rounded-2xl bg-white/95 p-5 shadow-[0_8px_35px_#ec489914] sm:w-40">
      <div className="flex items-center gap-3"><span className="rounded-lg bg-indigo-50 p-2"><Mail className="size-5 fill-blue-500 text-white" /></span><div className="flex flex-1 flex-col gap-2"><span className="h-1.5 w-full rounded-full bg-indigo-200/80" /><span className="h-1.5 w-4/5 rounded-full bg-indigo-100" /></div></div>
      <div className="mt-4 flex flex-col gap-2"><span className="h-1.5 w-full rounded-full bg-indigo-100" /><span className="h-1.5 w-3/4 rounded-full bg-indigo-100" /><span className="h-1.5 w-full rounded-full bg-violet-50" /></div>
      <Send className="absolute -bottom-1 right-1 size-11 -rotate-6 fill-violet-600 text-white drop-shadow-lg" strokeWidth={1.5} />
    </div>
  );
}

export function IlustracionSeguridad() {
  return (
    <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white/95 shadow-[0_8px_35px_#3b82f614] sm:w-40">
      <Shield className="size-28 fill-indigo-200 text-indigo-200" strokeWidth={1} />
      <LockKeyhole className="absolute size-10 fill-indigo-500 text-indigo-600 drop-shadow-md" strokeWidth={1.5} />
      <span className="absolute bottom-5 right-1 flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-emerald-300 to-emerald-500 text-white shadow-lg shadow-emerald-200/50"><Check className="size-6" strokeWidth={3} /></span>
    </div>
  );
}

export function IlustracionReportes() {
  return (
    <div className="w-40 rounded-2xl bg-white/95 px-5 pb-4 pt-6 shadow-[0_8px_35px_#8b5cf61a] sm:w-44">
      <div className="flex h-20 items-end justify-between gap-2"><span className="h-6 w-3 rounded-full bg-violet-100" /><span className="h-9 w-3 rounded-full bg-violet-200" /><span className="h-12 w-3 rounded-full bg-violet-300" /><span className="h-8 w-3 rounded-full bg-violet-400" /><span className="h-14 w-3 rounded-full bg-linear-to-t from-violet-400 to-violet-300" /><span className="h-18 w-3 rounded-full bg-linear-to-t from-violet-500 to-violet-700" /></div>
      <svg viewBox="0 0 140 24" className="mt-2 h-6 w-full fill-none stroke-violet-400" strokeWidth="2.5"><path d="M1 16 Q12 4 25 14 T50 12 T75 13 T100 13 T125 12 T139 11" /></svg>
    </div>
  );
}

export function IlustracionAccesos() {
  return (
    <div className="flex w-40 flex-col gap-3 rounded-2xl bg-white/95 p-3.5 shadow-[0_8px_35px_#64748b14] sm:w-44">
      <div className="flex items-center gap-3"><span className="rounded-full bg-violet-50 p-2 text-violet-600"><Crown className="size-4 fill-violet-600" /></span><div className="flex flex-col gap-1"><span className="text-[10px] font-medium text-indigo-950">Administrador</span><span className="h-1.5 w-20 rounded-full bg-indigo-100/80" /></div></div>
      <div className="flex items-center gap-3"><span className="rounded-full bg-blue-50 p-2 text-blue-500"><UserRound className="size-4 fill-blue-500" /></span><div className="flex flex-col gap-1"><span className="text-[10px] font-medium text-indigo-950">Profesional</span><span className="h-1.5 w-18 rounded-full bg-indigo-100/80" /></div></div>
      <div className="flex items-center gap-3"><span className="rounded-full bg-slate-100 p-2 text-slate-400"><UserRound className="size-4 fill-slate-400" /></span><div className="flex flex-col gap-1"><span className="text-[10px] font-medium text-indigo-950">Recepción</span><span className="h-1.5 w-16 rounded-full bg-indigo-100/80" /></div></div>
    </div>
  );
}
