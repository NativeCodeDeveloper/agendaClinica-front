import { ImageResponse } from "next/og";
import { getMarkDataUri } from "./og-image-content";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const markSrc = await getMarkDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d2148",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={104} height={94} style={{ objectFit: "contain" }} />
      </div>
    ),
    size
  );
}
