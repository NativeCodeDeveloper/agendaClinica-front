import { ImageResponse } from "next/og";
import { OgCard, ogSize, getMarkDataUri } from "./og-image-content";

export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  const markSrc = await getMarkDataUri();
  return new ImageResponse(<OgCard markSrc={markSrc} />, size);
}
