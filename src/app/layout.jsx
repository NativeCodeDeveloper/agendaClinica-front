import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Automatización de Centros de Salud | Agenda, Pagos y Fichas Clínicas",
  description: "Digitaliza y automatiza tu centro de salud o clínica estética con agenda online, pagos automatizados y fichas clínicas digitales. Menos trabajo manual, más control y más pacientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
