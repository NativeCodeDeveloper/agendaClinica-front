import { Geist, Geist_Mono, Michroma, Montserrat, Lato, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-michroma',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Automatización de Centros de Salud | Agenda, Pagos y Fichas Clínicas",
  description: "Digitaliza y automatiza tu centro de salud o clínica estética con agenda online, pagos automatizados y fichas clínicas digitales. Menos trabajo manual, más control y más pacientes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${montserrat.variable} ${lato.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
