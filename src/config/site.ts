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

/** ID de medición de GA4. No es un secreto: viaja en el HTML de la página. */
const GA_MEASUREMENT_ID = "G-08NHNHDCCE";

/**
 * Solo se activa en builds de producción, para que el tráfico de `next dev`
 * no entre en las métricas.
 *
 * `NEXT_PUBLIC_GA_ID` lo sobrescribe: con otro ID apunta a otra propiedad, y
 * con la cadena vacía apaga el seguimiento (útil en los despliegues de preview,
 * que también son builds de producción y si no contaminarían los datos reales).
 */
export const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GA_ID ??
  (process.env.NODE_ENV === "production" ? GA_MEASUREMENT_ID : undefined);

/**
 * Token de Search Console. Solo hace falta si se verifica con la etiqueta
 * HTML; si se verifica el dominio por DNS, se puede dejar sin definir.
 */
export const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
