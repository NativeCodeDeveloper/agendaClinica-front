import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ModulesSection from "@/components/landing/ModulesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LeadFilterSection from "@/components/landing/LeadFilterSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import { ParticleWave } from "@/components/ui/particle-wave";

export default function Home() {
  return (
    <>
      {/* Canvas fijo de fondo — visible en secciones transparentes */}
      <ParticleWave />

      <main className="relative min-h-screen" style={{ zIndex: 1 }}>
        {/* HERO — transparente, partículas visibles al 100% */}
        <HeroSection />

        {/* BENEFITS — sólido, cubre partículas */}
        <BenefitsSection />

        {/* PROCESS — transparente, partículas visibles */}
        <ProcessSection />

        {/* MODULES — sólido, cubre partículas */}
        <ModulesSection />

        {/* TESTIMONIALS — transparente, partículas visibles */}
        <TestimonialsSection />

        {/* LEAD FILTER — sólido, cubre partículas */}
        <LeadFilterSection />

        {/* PRICING — transparente, partículas visibles */}
        <PricingSection />

        {/* FAQ — sólido, cubre partículas */}
        <FAQSection />

        {/* CONTACT — navy sólido, cubre partículas */}
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
    </>
  );
}
