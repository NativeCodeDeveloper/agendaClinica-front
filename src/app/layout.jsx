import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, SEO_METADATA } from "./constants/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-P1GGMQ9KM5";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_METADATA.title,
    template: "%s | AgendaClinica",
  },
  description: SEO_METADATA.description,
  applicationName: "AgendaClinica",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: SEO_METADATA.keywords,
  authors: SEO_METADATA.authors,
  creator: SEO_METADATA.creator,
  publisher: SEO_METADATA.publisher,
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
    url: SITE_URL,
    siteName: "AgendaClinica",
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
  },
  category: "healthcare",
  classification: "Healthcare software, appointment scheduling, patient management",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1d2148",
  colorScheme: "light dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
