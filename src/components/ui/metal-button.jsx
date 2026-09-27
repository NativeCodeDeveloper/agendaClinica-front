"use client";

/**
 * MetalButton — pill button framed by a real-time liquid-metal ring.
 *
 * The ring is painted by `metal-fx` (Jakub Antalík, MIT,
 * https://metal.jakubantalik.com): one shared WebGL shader drives every
 * instance on the page, pauses offscreen and renders a transparent
 * placeholder on the server. This wrapper adds the button surface, sizes,
 * and class-based dark/light detection so the ring matches a shadcn-style
 * `.dark` theme instead of only the OS preference.
 *
 * Passing `href` renders an anchor instead of a button, so the same pill
 * works for outbound CTAs (WhatsApp, demos, ...).
 *
 * `MetalFx` probes WebGL during render, so its own markup differs between
 * server and client. To keep hydration clean we render a plain styled pill
 * on the server and during the hydration pass, and only mount `MetalFx`
 * afterwards — `useSyncExternalStore` gives us exactly that mounted flag
 * without a hydration mismatch.
 *
 * `MetalFx` hides itself (`opacity: 0`) until its shader paints the first
 * frame. If that frame never arrives — WebGL context creation can still
 * fail after the probe passes — the button would stay invisible, so after
 * a short grace period we drop `MetalFx` and keep the styled pill.
 *
 * Dependencies: metal-fx, @/lib/utils,
 * @/components/ui/metal-button-utils/use-surface-theme
 *
 * @example
 * <MetalButton preset="gold">Upgrade to Pro</MetalButton>
 * @example
 * <MetalButton href="https://wa.me/..." target="_blank">Agendar una demo</MetalButton>
 */

import * as React from "react";
import { MetalFx, isMetalFxSupported } from "metal-fx";

import { cn } from "@/lib/utils";
import { useSurfaceTheme } from "@/components/ui/metal-button-utils/use-surface-theme";

const SIZE = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

/** How long to wait for MetalFx's first painted frame before falling back. */
const FIRST_FRAME_GRACE_MS = 700;

const emptySubscribe = () => () => {};

export function MetalButton({
  preset = "chromatic",
  theme = "auto",
  strength = 1,
  size = "md",
  paused = false,
  href,
  type = "button",
  className,
  wrapperClassName,
  children,
  ...props
}) {
  const resolved = useSurfaceTheme(theme);
  // false on the server and during hydration, true right after
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [metalFailed, setMetalFailed] = React.useState(false);
  const metalRef = React.useRef(null);

  React.useEffect(() => {
    if (!mounted) return;
    const el = metalRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      // MetalFx fades in (0.15s) once the first frame is copied; if the ring
      // never painted, the host is still at opacity 0 and we render the pill.
      if (parseFloat(getComputedStyle(el).opacity) < 0.05) {
        setMetalFailed(true);
      }
    }, FIRST_FRAME_GRACE_MS);
    return () => clearTimeout(timer);
  }, [mounted]);

  // evaluated post-mount only, so it never touches the server render
  const showMetal = mounted && !metalFailed && isMetalFxSupported();

  const inner = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[transform,background-color] duration-200 ease-out",
    "focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-60",
    showMetal
      ? // metal-fx keeps the host fill transparent so the ring frames the page surface; only the label carries the theme
        "text-neutral-900 hover:opacity-80 active:scale-[0.97] dark:text-white"
      : // plain pill (pre-hydration or WebGL fallback): glass surface
        "bg-white/10 ring-1 ring-white/15 text-white hover:bg-white/15 active:scale-[0.97]",
    SIZE[size],
    className,
  );

  const surface = href ? (
    <a href={href} className={inner} {...props}>
      {children}
    </a>
  ) : (
    <button type={type} className={inner} {...props}>
      {children}
    </button>
  );

  if (!showMetal) return surface;

  return (
    <MetalFx
      ref={metalRef}
      variant="button"
      preset={preset}
      theme={resolved}
      strength={strength}
      paused={paused}
      className={cn("inline-flex", wrapperClassName)}
    >
      {surface}
    </MetalFx>
  );
}

export default MetalButton;
