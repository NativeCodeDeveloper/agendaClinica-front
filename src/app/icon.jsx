import { ImageResponse } from "next/og";
import { getMarkDataUri } from "./og-image-content";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          borderRadius: 7,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={20} height={18} style={{ objectFit: "contain" }} />
      </div>
    ),
    size
  );
}
