/**
 * Datos del sitio que dependen del despliegue.
 *
 * La URL se puede sobrescribir con `NEXT_PUBLIC_SITE_URL` para entornos de
 * preview (Vercel y similares), donde el dominio no es el de producción y las
 * URLs absolutas de Open Graph apuntarían al sitio equivocado.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://linkaurora.com",
);

/** Imagen que se muestra al compartir el enlace. Sin texto, sirve para ES y EN. */
export const openGraphImage = {
  url: "/meta-image.png",
  width: 1200,
  height: 630,
} as const;
