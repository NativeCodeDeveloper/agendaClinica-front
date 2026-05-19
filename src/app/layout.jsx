import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agendaclinica.space";
const title = "AgendaClinica | Agenda clínica online, fichas clínicas, odontogramas y recordatorios";
const description =
  "AgendaClinica digitaliza consultas y centros de salud con agenda clínica online, fichas clínicas digitales, odontogramas, recordatorios automáticos, presupuestos, recetas y gestión de pacientes.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "AgendaClinica",
  keywords: [
    "agenda clinica",
    "agenda clínica",
    "fichas clinicas",
    "fichas clínicas",
    "odontogramas",
    "recordatorios automáticos",
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
  icons: {
    icon: "/ac.png",
    shortcut: "/ac.png",
    apple: "/ac.png",
  },
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
