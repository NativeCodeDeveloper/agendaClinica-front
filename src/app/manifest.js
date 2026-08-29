const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.agendaclinicas.cl";

export default function manifest() {
  return {
    name: "AgendaClinica",
    short_name: "AgendaClinica",
    description:
      "Agenda clínica online para reservas de pacientes, fichas clínicas digitales, odontogramas, recordatorios automáticos y gestión clínica.",
    start_url: siteUrl,
    display: "standalone",
    background_color: "#fbfdff",
    theme_color: "#1d2148",
    lang: "es-CL",
    icons: [
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
