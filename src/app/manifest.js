const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agendaclinica.space";

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
        src: "/ac.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
