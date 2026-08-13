import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export type SectionSpacing = "default" | "none";

const spacings: Record<SectionSpacing, string> = {
  default: "py-20 lg:py-section",
  /** Para secciones que aportan su propio espaciado (p. ej. bandas de color). */
  none: "",
};

type SectionProps = React.ComponentProps<"section"> & {
  spacing?: SectionSpacing;
  /**
   * Capa decorativa que se renderiza *fuera* del `<Container>`, para que los
   * fondos sangren hasta el borde del viewport mientras el contenido respeta
   * el ancho de página.
   */
  background?: React.ReactNode;
  /**
   * Contenido que va *después* del `<Container>` y fuera de él, para piezas
   * que sangran más anchas que el texto.
   */
  bleed?: React.ReactNode;
  /** Clases para el `<Container>` interno (ancho máximo, padding). */
  containerClassName?: string;
};

/**
 * Ritmo vertical + ancho de página consistentes para cada sección de la landing.
 *
 * El espaciado se controla con `spacing`, no con `className`: al usar variantes
 * responsive (`lg:py-*`) una clase suelta no siempre gana el conflicto.
 */
export function Section({
  spacing = "default",
  background,
  bleed,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacings[spacing],
        background && "relative isolate overflow-hidden",
        className,
      )}
      {...props}
    >
      {background}
      <Container className={containerClassName}>{children}</Container>
      {bleed}
    </section>
  );
}
