import HeroSection from "@/components/landing/HeroSection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ModulesSection from "@/components/landing/ModulesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agendaclinica.space";
  const pageTitle = "Agenda clínica online para reservas de pacientes, fichas clínicas y odontogramas";
  const pageDescription =
    "AgendaClinica permite gestionar reservas de pacientes, agenda online, fichas clínicas digitales, odontogramas, recordatorios automáticos por WhatsApp y correo, pagos y administración clínica desde computador o celular.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "AgendaClinica",
        alternateName: [
          "Agenda Clínica",
          "Agenda clínica online",
          "Software de agenda clínica",
        ],
        description: pageDescription,
        inLanguage: "es-CL",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#software`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteUrl}/ac.png`,
        },
        inLanguage: "es-CL",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "AgendaClinica",
        legalName: "NativeCode SpA",
        url: siteUrl,
        logo: `${siteUrl}/ac.png`,
        email: "ingenieria.software@nativecode.cl",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: "+56-9-6609-1038",
            areaServed: "CL",
            availableLanguage: ["es"],
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "AgendaClinica",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Healthcare Practice Management Software",
        operatingSystem: "Web",
        url: siteUrl,
        image: `${siteUrl}/ac.png`,
        description: pageDescription,
        offers: [
          {
            "@type": "Offer",
            name: "Plan Profesional Salud",
            url: `${siteUrl}/#precios`,
            price: "14990",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
            category: "Plan Profesional Salud",
          },
          {
            "@type": "Offer",
            name: "Plan Odontológico",
            url: `${siteUrl}/#precios`,
            price: "19990",
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
            category: "Plan Odontológico",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "profesionales de salud, clínicas dentales, consultas médicas, kinesiólogos, psicólogos, nutricionistas y centros de salud",
        },
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        featureList: [
          "Agenda online para reservas de pacientes",
          "Fichas clínicas digitales",
          "Historial clínico completo de pacientes",
          "Odontogramas",
          "Recordatorios automáticos por WhatsApp y correo",
          "Gestión de pacientes",
          "Presupuestos y recetas",
          "Confirmación y cancelación automática de citas",
          "Página web de agendamiento para pacientes",
          "Pagos con Mercado Pago",
          "Acceso desde computador y celular",
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Software de agenda clínica online",
        serviceType:
          "Agenda online, reserva de pacientes, fichas clínicas digitales, odontogramas y recordatorios automáticos",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Chile",
        },
        url: siteUrl,
        description: pageDescription,
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "14990",
          highPrice: "19990",
          priceCurrency: "CLP",
          offerCount: "2",
          url: `${siteUrl}/#precios`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Sirve para mi tipo de consulta o centro?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Agenda Clínica está diseñado para médicos, dentistas, kinesiólogos, psicólogos, nutricionistas, centros de estética y otras consultas de salud que trabajan con reservas de pacientes.",
            },
          },
          {
            "@type": "Question",
            name: "¿Puedo usar una agenda online para que mis pacientes reserven horas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. La plataforma incluye una página web de agendamiento para pacientes, disponibilidad por profesional, servicios configurables y confirmación automática de citas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Incluye fichas clínicas digitales e historial clínico?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. Puedes trabajar con fichas clínicas personalizables, historial clínico completo de pacientes y datos relevantes centralizados para cada atención.",
            },
          },
          {
            "@type": "Question",
            name: "¿El plan odontológico incluye odontograma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. El Plan Odontológico incluye odontograma, recetas, historial de recetas, generación de presupuestos, solicitudes de órdenes de exámenes y subida de archivos, imágenes, radiografías y documentos.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo pagan mis pacientes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se puede activar la vinculación opcional con Mercado Pago para cobrar al momento de agendar, solicitar abonos o confirmar reservas según el flujo de tu consulta.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué pasa con los datos de mis pacientes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La información clínica se resguarda con cifrado y respaldos, priorizando privacidad y seguridad de datos sensibles.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Agenda clínica online",
            item: `${siteUrl}/#inicio`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Planes y precios",
            item: `${siteUrl}/#precios`,
          },
        ],
      },
    ],
  };

  return (
      <main className="relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LandingNavbar />
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <ModulesSection />
        <PricingSection />
        <SeoContentSection />
        <FAQSection />
        <ContactSection />

        <StickyMobileCTA />

        <footer className="bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/logacsolo.png" alt="AgendaClinica logo" className="h-7 w-7 object-contain opacity-70" />
                <div>
                  <p className="text-[12px] font-semibold text-slate-600 leading-none">AgendaClinica</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">by NativeCode SpA</p>
                </div>
              </div>
              <p className="text-[12px] text-slate-400 text-center">
                © {new Date().getFullYear()} NativeCode SpA. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-4 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Datos encriptados</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
  );
}

function SeoContentSection() {
  const useCases = [
    "agenda online para reservas de pacientes",
    "fichas clínicas digitales personalizables",
    "odontogramas para consultas dentales",
    "recordatorios automáticos por WhatsApp y correo",
    "historial clínico completo de pacientes",
    "confirmación y cancelación automática de citas",
    "página web de agendamiento para pacientes",
    "pagos opcionales con Mercado Pago",
  ];

  return (
    <section className="bg-white py-24" aria-labelledby="seo-agenda-clinica-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-900">
              Software para salud
            </p>
            <h2
              id="seo-agenda-clinica-title"
              className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl"
            >
              Agenda online para clínicas, consultas de salud y reservas de pacientes
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              AgendaClinica ayuda a profesionales y centros de salud a centralizar la agenda
              clínica online, las reservas de pacientes, las fichas clínicas digitales y el
              historial clínico en una plataforma web simple de usar desde computador o celular.
            </p>
            <p>
              Para consultas dentales, el plan odontológico suma odontograma, recetas, historial
              de recetas, presupuestos, solicitudes de órdenes de exámenes y subida de archivos,
              imágenes, radiografías y documentos. Para otras especialidades, permite ordenar
              horarios, servicios, pacientes, recordatorios y confirmaciones automáticas sin
              depender de planillas o mensajes dispersos.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
