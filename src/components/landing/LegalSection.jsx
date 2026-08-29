"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, FileText, Lock, X } from "lucide-react";

const TABS = [
  {
    id: "privacidad",
    label: "Privacidad de datos",
    icon: ShieldCheck,
    title: "Privacidad de datos",
    intro:
      "En AgendaClinica nos tomamos en serio la privacidad de la información. Esta política describe cómo tratamos los datos de quienes usan nuestra plataforma y cómo protegemos los datos clínicos de los pacientes que gestionan nuestros clientes.",
    blocks: [
      {
        heading: "Quiénes somos",
        text: "AgendaClinica es una plataforma de agenda clínica online operada por NativeCode SpA, RUT 78.184.828-K, con domicilio en Santiago, Chile. Correo de contacto: ingenieria.software@nativecode.cl.",
      },
      {
        heading: "Datos que recopilamos",
        subsections: [
          {
            label: "Datos de clientes (profesionales y clínicas)",
            items: [
              "Nombre, RUT y datos de identificación de quien contrata el servicio.",
              "Correo electrónico y teléfono de contacto.",
              "Datos de facturación y pago.",
              "Información de uso de la plataforma (accesos, funcionalidades utilizadas).",
            ],
          },
          {
            label: "Datos de pacientes (gestionados por el cliente)",
            text:
              "Los datos clínicos de pacientes —fichas, diagnósticos, historial, agenda, odontogramas, imágenes y documentos— son ingresados por el profesional o clínica que contrata AgendaClinica. Esos datos pertenecen al cliente y a sus pacientes, no a NativeCode SpA. NativeCode SpA los almacena y protege como custodio técnico, sin utilizarlos para fines propios, sin analizarlos con fines comerciales y sin cederlos a terceros.",
          },
        ],
      },
      {
        heading: "Para qué usamos los datos",
        items: [
          "Prestar el servicio de agendamiento, fichas clínicas y recordatorios.",
          "Facturar y gestionar la suscripción.",
          "Brindar soporte técnico y onboarding.",
          "Comunicar actualizaciones relevantes del servicio.",
          "Mejorar la plataforma mediante análisis agregado y anónimo de uso.",
        ],
      },
      {
        heading: "Cómo protegemos la información",
        items: [
          "Cifrado de datos en tránsito (TLS/HTTPS) y en reposo.",
          "Acceso por roles: cada usuario ve solo lo necesario para su función.",
          "Registro de auditoría de accesos a datos clínicos.",
          "Copias de seguridad periódicas con retención mínima de 30 días.",
          "Personal del equipo sujeto a obligaciones contractuales de confidencialidad.",
        ],
      },
      {
        heading: "Datos de pacientes: confidencialidad reforzada",
        text: "Los datos clínicos de pacientes son información sensible. Ningún integrante del equipo de NativeCode SpA accederá a ellos salvo que sea estrictamente necesario para resolver un incidente técnico o de seguridad, y siempre con registro de la acción. NativeCode SpA no compartirá datos clínicos de pacientes con terceros, salvo que exista una obligación legal expresa que lo exija.",
      },
      {
        heading: "Subprocesadores",
        text: "Para operar la plataforma utilizamos proveedores de infraestructura cloud y servicios de mensajería (recordatorios por WhatsApp y correo). Todos están sujetos a obligaciones de confidencialidad equivalentes. La lista actualizada está disponible a solicitud: ingenieria.software@nativecode.cl.",
      },
      {
        heading: "Retención y eliminación de datos",
        items: [
          "Datos del cliente: se retienen durante la vigencia del contrato y por el plazo exigido por la normativa tributaria chilena.",
          "Datos de pacientes: disponibles para exportar durante 30 días desde la cancelación. Transcurrido ese plazo, se eliminan de forma segura dentro de los 90 días siguientes.",
          "A solicitud del cliente, emitimos constancia escrita de la eliminación.",
        ],
      },
      {
        heading: "Tus derechos",
        text: "Como cliente o como titular de datos, puedes en cualquier momento:",
        items: [
          "Acceder a los datos que almacenamos sobre ti.",
          "Solicitar la corrección de datos inexactos.",
          "Solicitar la eliminación de tus datos (ver proceso de cancelación).",
          "Exportar todos tus datos en formato estándar.",
        ],
        footnote: 'Escríbenos a ingenieria.software@nativecode.cl con el asunto "Solicitud de Privacidad". Respondemos dentro de 15 días hábiles.',
      },
      {
        heading: "Cookies",
        text: "Usamos cookies técnicas estrictamente necesarias para el funcionamiento de la plataforma (autenticación, sesión, preferencias). No utilizamos cookies de publicidad ni compartimos información de uso con redes de marketing.",
      },
      {
        heading: "Actualizaciones a esta política",
        text: "Podemos actualizar esta política para reflejar cambios en el servicio o en la normativa aplicable. Las actualizaciones materiales se comunicarán con al menos 15 días de anticipación. La versión vigente siempre estará disponible en esta página.",
      },
    ],
    updated: "Última actualización: julio de 2026.",
  },
  {
    id: "terminos",
    label: "Términos y condiciones",
    icon: FileText,
    title: "Términos de uso",
    intro:
      "Estos Términos regulan el acceso y uso de la plataforma AgendaClinica, operada por NativeCode SpA. Al crear una cuenta o utilizar la plataforma, aceptas íntegramente estos términos.",
    blocks: [
      {
        heading: "El servicio",
        text: "AgendaClinica es una plataforma de software en modalidad SaaS (Software as a Service) para la gestión de agenda clínica, fichas de pacientes y procesos administrativos de consultas y centros de salud. El servicio se presta mediante suscripción mensual; no incluye desarrollo de software a medida.",
      },
      {
        heading: "Quién puede usar la plataforma",
        text: "La plataforma está destinada a profesionales de la salud y centros de atención clínica con domicilio o actividad en Chile. El uso es estrictamente profesional; no está permitido utilizarla para fines distintos a la gestión clínica y administrativa.",
      },
      {
        heading: "Planes y precios",
        items: [
          "Plan Profesional Salud: desde $14.990 + IVA/mes por el primer profesional. Cada profesional adicional: $4.990 + IVA/mes.",
          "Plan Odontológico: desde $19.990 + IVA/mes por el primer profesional. Cada profesional adicional: $4.990 + IVA/mes.",
        ],
        footnote: "Los precios pueden reajustarse anualmente con aviso previo de 30 días. Los detalles de cada plan están disponibles en la página de precios.",
      },
      {
        heading: "Tus obligaciones",
        items: [
          "Proporcionar información veraz al crear la cuenta.",
          "Mantener la confidencialidad de tus credenciales de acceso.",
          "Usar la plataforma conforme a la normativa vigente y a estos términos.",
          "Obtener, cuando corresponda, el consentimiento de tus pacientes para gestionar sus datos clínicos.",
          "No compartir accesos con personas no autorizadas como usuarios de tu cuenta.",
        ],
      },
      {
        heading: "Lo que no está permitido",
        items: [
          "Intentar acceder a cuentas o datos de otros clientes.",
          "Realizar ingeniería inversa sobre la plataforma.",
          "Usar la plataforma para almacenar información no relacionada con la actividad clínica.",
          "Cargar contenido malicioso o información falsa.",
        ],
      },
      {
        heading: "Propiedad de los datos",
        text: "Los datos clínicos de tus pacientes son tuyos. NativeCode SpA los custodia para que puedas operar el servicio, pero no tiene ningún derecho de uso sobre ellos. La plataforma, su código y diseño son propiedad intelectual de NativeCode SpA. El acceso al servicio no te transfiere derechos sobre la plataforma.",
      },
      {
        heading: "Disponibilidad",
        text: "Nos comprometemos a mantener la plataforma disponible con un objetivo del 99,5% mensual durante el horario habitual de uso clínico. Ante incumplimiento por causas nuestras, aplican los créditos establecidos en el Acuerdo de Nivel de Servicio (SLA).",
      },
      {
        heading: "Cancelación",
        text: "Puedes cancelar tu suscripción en cualquier momento con 10 días corridos de aviso antes del siguiente período de facturación. Los períodos ya pagados no son reembolsables. Al cancelar, tienes 30 días para exportar tus datos.",
      },
      {
        heading: "Responsabilidad",
        text: "NativeCode SpA no será responsable por daños indirectos, pérdida de datos no atribuible a nuestra negligencia, ni daños derivados del uso indebido de la plataforma. Nuestra responsabilidad máxima se limita al monto pagado en los últimos 12 meses.",
      },
      {
        heading: "Modificaciones",
        text: "Podemos actualizar estos Términos con aviso previo de 30 días. La continuación del uso implica aceptación. Si no aceptas los cambios, puedes cancelar sin penalidad por el período no iniciado.",
      },
      {
        heading: "Ley aplicable",
        text: "Estos Términos se rigen por las leyes de la República de Chile. Cualquier controversia se someterá a los tribunales ordinarios con asiento en el domicilio de NativeCode SpA.",
      },
    ],
    updated: "Última actualización: julio de 2026.",
  },
  {
    id: "seguridad",
    label: "Seguridad",
    icon: Lock,
    title: "Seguridad de la información",
    intro:
      "En AgendaClinica operamos con datos clínicos de pacientes: información sensible que exige los más altos estándares de seguridad. Aquí describimos cómo protegemos esa información.",
    blocks: [
      {
        heading: "Principios que guían nuestra seguridad",
        items: [
          "Mínimo privilegio: cada usuario accede solo a la información necesaria para su función.",
          "Defensa en profundidad: múltiples capas de protección, no una sola.",
          "Confidencialidad por diseño: los datos clínicos de pacientes se consideran sensibles en todos los niveles de la plataforma.",
          "Transparencia: comunicamos incidentes de seguridad al cliente dentro de 72 horas de detectarlos.",
        ],
      },
      {
        heading: "Seguridad de los datos",
        items: [
          "Cifrado en tránsito: toda comunicación entre tu dispositivo y nuestros servidores va protegida con TLS (HTTPS).",
          "Cifrado en reposo: los datos almacenados en nuestros servidores están cifrados.",
          "Copias de seguridad periódicas con retención mínima de 30 días y verificación de integridad.",
          "Acceso segmentado por roles (RBAC): recepción, profesionales y administradores ven solo lo que necesitan.",
        ],
      },
      {
        heading: "Seguridad de la infraestructura",
        items: [
          "Infraestructura alojada en proveedores cloud con certificaciones de seguridad internacionales.",
          "Actualizaciones de seguridad aplicadas de forma continua.",
          "Monitoreo de disponibilidad y alertas ante anomalías 24/7.",
          "Entornos de producción separados de entornos de desarrollo y pruebas.",
        ],
      },
      {
        heading: "Control de acceso interno",
        items: [
          "Solo el personal estrictamente necesario tiene acceso a sistemas de producción.",
          "El acceso a datos clínicos de clientes se registra en logs de auditoría.",
          "Todo el personal está sujeto a acuerdos contractuales de confidencialidad.",
          "Las credenciales de acceso interno se gestionan con contraseñas seguras y autenticación de dos factores.",
        ],
      },
      {
        heading: "Respuesta ante incidentes",
        text: "Contamos con un plan documentado de respuesta ante incidentes de seguridad. Si detectamos una brecha que pueda haber afectado tus datos:",
        items: [
          "Te notificamos dentro de las 72 horas de detectar el incidente.",
          "Describimos qué ocurrió, qué datos pudieron verse afectados y qué medidas adoptamos.",
          "Implementamos las correcciones necesarias de inmediato.",
        ],
      },
      {
        heading: "Responsabilidades del cliente",
        text: "La seguridad es compartida. De tu parte, es importante:",
        items: [
          "Usar contraseñas seguras y no compartirlas.",
          "Dar acceso a la plataforma solo al personal autorizado.",
          "Cerrar sesión en dispositivos compartidos.",
          "Notificarnos de inmediato ante sospechas de acceso no autorizado.",
        ],
      },
      {
        heading: "Reportar un problema de seguridad",
        text: 'Si detectas una vulnerabilidad o tienes dudas sobre la seguridad de la plataforma, escríbenos a ingenieria.software@nativecode.cl con el asunto "Reporte de Seguridad". Respondemos dentro de 24 horas hábiles.',
      },
    ],
    updated: "Última actualización: julio de 2026.",
  },
];

function Block({ block }) {
  return (
    <div className="mb-7 last:mb-0">
      <h4 className="mb-2.5 text-base font-bold text-slate-900">{block.heading}</h4>
      {block.text && <p className="text-[15px] leading-7 text-slate-600">{block.text}</p>}
      {block.items && (
        <ul className={`space-y-2 ${block.text ? "mt-3" : ""}`}>
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] leading-7 text-slate-600">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {block.subsections && (
        <div className="mt-4 space-y-5">
          {block.subsections.map((sub) => (
            <div key={sub.label}>
              <p className="mb-2 text-sm font-semibold text-slate-800">{sub.label}</p>
              {sub.text && <p className="text-[15px] leading-7 text-slate-600">{sub.text}</p>}
              {sub.items && (
                <ul className="space-y-2">
                  {sub.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] leading-7 text-slate-600">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
      {block.footnote && <p className="mt-4 text-sm leading-6 text-slate-500">{block.footnote}</p>}
    </div>
  );
}

export default function LegalSection() {
  const [openId, setOpenId] = useState(null);
  const isOpen = openId !== null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-slate-100 pt-5 text-[11px] font-medium text-slate-400">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setOpenId(tab.id)}
            className="hover:text-blue-900 transition-colors"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md"
          onClick={() => setOpenId(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-4 sm:px-8">
              <div className="flex flex-wrap items-center gap-2">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === openId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setOpenId(tab.id)}
                      aria-pressed={isActive}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-950 text-white shadow-sm"
                          : "bg-slate-50 text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="shrink-0 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-7 sm:px-8">
              {TABS.map((tab) => (
                <div key={tab.id} className={tab.id === openId ? "block" : "hidden"}>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-950">{tab.title}</h3>
                  <p className="mb-8 text-[15px] leading-7 text-slate-600">{tab.intro}</p>

                  {tab.blocks.map((block) => (
                    <Block key={block.heading} block={block} />
                  ))}

                  <p className="mt-8 border-t border-slate-100 pt-5 text-xs text-slate-400">{tab.updated}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
