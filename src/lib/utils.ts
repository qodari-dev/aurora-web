import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge no lee `globals.css`, así que hay que declararle los tokens
 * propios. Sin esto no distingue grupos y descarta clases válidas — p. ej.
 * leería `text-body-sm` (tamaño) como color y anularía `text-ink-inverse`.
 *
 * Al añadir un token nuevo en `@theme`, añadirlo también aquí.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      // Tamaños de fuente (`--text-*`)
      text: ["display", "h1", "h2", "h3", "h4", "body-lg", "body", "body-sm"],
      // Colores (`--color-*`)
      color: [
        "brand",
        "brand-hover",
        "brand-soft",
        "brand-deep",
        "accent",
        "accent-hover",
        "accent-soft",
        "ink",
        "ink-body",
        "ink-muted",
        "ink-subtle",
        "ink-inverse",
        "ink-inverse-muted",
        "surface",
        "surface-muted",
        "surface-tint",
        "surface-alt",
        "surface-neutral",
        "surface-panel",
        "surface-panel-hover",
        "border",
        "border-accent",
        "border-strong",
        "success",
        "warning",
        "danger",
      ],
      radius: ["card", "panel", "pill"],
      shadow: ["card", "elevated"],
      spacing: ["header", "section"],
    },
  },
});

/**
 * Une clases condicionales y resuelve conflictos de Tailwind
 * (la última utilidad del mismo grupo gana).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
