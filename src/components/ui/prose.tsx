import { cn } from "@/lib/utils";

type ProseProps = React.ComponentProps<"div">;

/**
 * Tipografía para texto largo (páginas legales, artículos).
 *
 * Estiliza los elementos HTML descendientes en vez de exigir clases en cada
 * uno, para que el contenido pueda venir de un archivo de texto o de MDX sin
 * saber nada del diseño. El ancho se limita en `ch` porque lo que manda para
 * la legibilidad es el número de caracteres por línea, no los píxeles.
 */
export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "max-w-[72ch] text-body text-ink-body",
        "[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-h3 [&_h2]:text-brand",
        "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-h4 [&_h3]:text-brand",
        "[&_p]:mt-4 [&_p]:leading-relaxed",
        "[&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:mt-2 [&_li]:leading-relaxed",
        "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2",
        "[&_strong]:font-semibold [&_strong]:text-brand",
        className,
      )}
      {...props}
    />
  );
}
