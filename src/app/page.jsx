
import HeroSection from '@/components/landing/HeroSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import ProcessSection from '@/components/landing/ProcessSection';
import ModulesSection from '@/components/landing/ModulesSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import LeadFilterSection from '@/components/landing/LeadFilterSection';
import PricingSection from '@/components/landing/PricingSection';
import FAQSection from '@/components/landing/FAQSection';
import ContactSection from '@/components/landing/ContactSection';
import StickyMobileCTA from '@/components/landing/StickyMobileCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <ModulesSection />
      <TestimonialsSection />
      <LeadFilterSection />
      <ContactSection />
      <StickyMobileCTA />

      {/* Footer Simple */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} NativeCode SpA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
