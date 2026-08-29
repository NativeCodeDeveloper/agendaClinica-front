"use client";

import { ResponsiveHeroBanner } from "@/components/ui/responsive-hero-banner";

const WA_LINK =
  "https://wa.me/56966091038?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20hora%20para%20que%20me%20muestren%20la%20plataforma%20de%20Agenda%20Cl%C3%ADnica.";

export default function HeroSection() {
  return (
    <section id="inicio">
      <ResponsiveHeroBanner
        primaryButtonHref={WA_LINK}
        secondaryButtonHref="https://demo.angendaclinica.space"
      />
    </section>
  );
}
