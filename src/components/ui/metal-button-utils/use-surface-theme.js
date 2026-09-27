"use client";

import * as React from "react";

/**
 * Resolves the surface theme a metal effect should paint with.
 *
 * `"auto"` follows an explicit `.dark` / `.light` class on <html> first
 * (shadcn-style theming), and falls back to the OS `prefers-color-scheme`.
 * Watching both sources keeps the ring in sync when the app toggles the
 * class or the user flips their OS theme mid-session.
 *
 * @param {"auto" | "dark" | "light"} theme
 * @returns {"dark" | "light"}
 */
export function useSurfaceTheme(theme = "auto") {
  const [resolved, setResolved] = React.useState(() => resolve(theme));

  React.useEffect(() => {
    if (theme !== "auto") {
      setResolved(theme);
      return;
    }

    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => setResolved(resolve("auto"));
    update();

    const observer = new MutationObserver(update);
    observer.observe(root, { attributeFilter: ["class"] });
    media.addEventListener("change", update);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [theme]);

  return resolved;
}

function resolve(theme) {
  if (theme === "dark" || theme === "light") return theme;
  if (typeof document === "undefined") return "dark";

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.classList.contains("light")) return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default useSurfaceTheme;
