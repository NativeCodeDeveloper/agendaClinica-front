import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agendaclinica.space";
const title = "Agenda Clínica Online | Reservas de pacientes, fichas clínicas y odontogramas";
const description =
  "AgendaClinica es un software de agenda online para clínicas y profesionales de salud: reservas de pacientes, fichas clínicas digitales, odontogramas, recordatorios por WhatsApp y correo, pagos y gestión clínica.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | AgendaClinica",
  },
  description,
  applicationName: "AgendaClinica",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "agenda online",
    "agenda online pacientes",
    "agenda online para clinicas",
    "agenda online para clínicas",
    "agenda clinica",
    "agenda clínica",
    "agenda clinica online",
    "agenda clínica online",
    "reserva de pacientes",
    "reservas de pacientes",
    "sistema de reservas para pacientes",
    "fichas clinicas",
    "fichas clínicas",
    "fichas clinicas digitales",
    "fichas clínicas digitales",
    "ficha clinica digital",
    "ficha clínica digital",
    "historial clinico pacientes",
    "historial clínico pacientes",
    "odontograma",
    "odontogramas",
    "software odontologico",
    "software odontológico",
    "agenda odontologica",
    "agenda odontológica",
    "recordatorios automáticos",
    "recordatorios whatsapp pacientes",
    "recordatorios por whatsapp",
    "agenda medica",
    "agenda médica",
    "software para clinicas",
    "software para clínicas",
    "gestion de pacientes",
    "gestión de pacientes",
    "agenda para odontologos",
    "agenda para odontólogos",
    "agenda para psicologos",
    "agenda para psicólogos",
    "agenda para kinesiologos",
    "agenda para kinesiólogos",
    "sistema de agendamiento medico",
    "sistema de agendamiento médico",
    "software medico chile",
    "software médico Chile",
    "software clinico chile",
    "software clínico Chile",
  ],
  authors: [{ name: "NativeCode SpA" }],
  creator: "NativeCode SpA",
  publisher: "NativeCode SpA",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
      es: "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "AgendaClinica",
    title,
    description,
    images: [
      {
        url: "/ac.png",
        width: 1200,
        height: 1200,
        alt: "AgendaClinica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/ac.png"],
  },
  category: "healthcare",
  classification: "Healthcare software, appointment scheduling, patient management",
  icons: {
    icon: "/ac.png",
    shortcut: "/ac.png",
    apple: "/ac.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1d2148",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
