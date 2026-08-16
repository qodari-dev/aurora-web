import Link from "next/link";

type NavLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
};

/**
 * Enlace de navegación.
 *
 * Los que apuntan a un ancla de la misma página se renderizan como `<a>`
 * nativo a propósito: el router de Next descarta la navegación cuando la URL
 * resultante es idéntica, así que al pulsar dos veces el mismo enlace —o al
 * pulsarlo después de haber hecho scroll a mano— no volvía a saltar. El
 * navegador sí repite el salto en ese caso.
 *
 * Los destinos externos abren en pestaña nueva.
 */
export function NavLink({ href, ...props }: NavLinkProps) {
  if (href.startsWith("#")) {
    return <a href={href} {...props} />;
  }

  const isExternal = /^https?:/.test(href);

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    />
  );
}
