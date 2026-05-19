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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "AgendaClinica",
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
        description:
          "Software de agenda clínica online con fichas clínicas digitales, odontogramas, recordatorios automáticos, recetas, presupuestos y gestión de pacientes.",
        offers: [
          {
            "@type": "Offer",
            price: "14990",
            priceCurrency: "CLP",
            category: "Plan independiente",
          },
          {
            "@type": "Offer",
            price: "39990",
            priceCurrency: "CLP",
            category: "Multiple hasta 10 usuarios",
          },
          {
            "@type": "Offer",
            price: "69990",
            priceCurrency: "CLP",
            category: "Plan Advantage",
          },
        ],
        creator: {
          "@id": `${siteUrl}/#organization`,
        },
        featureList: [
          "Agenda clínica online",
          "Fichas clínicas digitales",
          "Odontogramas",
          "Recordatorios automáticos por WhatsApp y correo",
          "Gestión de pacientes",
          "Presupuestos y recetas",
          "Portal de pacientes",
          "Pagos y convenios",
        ],
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
              text: "Sí. Agenda Clínica está diseñado para médicos, dentistas, kinesiólogos, psicólogos, nutricionistas y centros de estética o salud que trabajan con citas.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cómo cobran mis pacientes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Se pueden integrar pasarelas de pago para cobrar el total o un abono al momento de agendar la cita.",
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
