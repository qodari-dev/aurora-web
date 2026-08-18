import Link from "next/link";

type NavLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string;
};

/**
 * Enlace de navegación.
 *
 * Cualquier destino con ancla (`#seccion` o `/es#seccion`) se renderiza como
 * `<a>` nativo a propósito: el router de Next descarta la navegación cuando la
 * URL resultante es idéntica, así que al pulsar dos veces el mismo enlace —o
 * al pulsarlo después de hacer scroll a mano— no volvía a saltar. El navegador
 * sí repite el salto.
 *
 * Los destinos externos abren en pestaña nueva.
 */
export function NavLink({ href, ...props }: NavLinkProps) {
  const isExternal = /^https?:/.test(href);

  if (!isExternal && href.includes("#")) {
    return <a href={href} {...props} />;
  }

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
      {...props}
    />
  );
}
