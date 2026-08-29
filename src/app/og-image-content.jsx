import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

let cachedMarkDataUri;

export async function getMarkDataUri() {
  if (!cachedMarkDataUri) {
    const data = await readFile(join(process.cwd(), "public/logo-mark.png"));
    cachedMarkDataUri = `data:image/png;base64,${data.toString("base64")}`;
  }
  return cachedMarkDataUri;
}

export function OgCard({ markSrc }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 90px",
        backgroundColor: "#05070f",
        backgroundImage:
          "radial-gradient(circle at 82% 18%, rgba(88,101,242,0.38), transparent 55%), radial-gradient(circle at 12% 88%, rgba(37,99,235,0.3), transparent 50%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={44} height={40} style={{ objectFit: "contain" }} />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ffffff", letterSpacing: "-1px" }}>
          AgendaClinica
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-2px",
          lineHeight: 1.05,
        }}
      >
        <span>Tu consulta,</span>
        <span>sin desorden</span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 34,
          fontSize: 30,
          color: "rgba(255,255,255,0.72)",
          maxWidth: 860,
        }}
      >
        Ponle piloto automático a tu consulta: agenda, cobra y avisa por ti.
      </div>
    </div>
  );
}
