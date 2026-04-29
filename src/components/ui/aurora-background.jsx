"use client";

import { cn } from "@/lib/utils";

export function AuroraBackground({ className, showRadialGradient = true }) {
  return (
    <div
      aria-hidden
      className={cn("aurora-bg", !showRadialGradient && "[&::before]:mask-none!", className)}
    />
  );
}
