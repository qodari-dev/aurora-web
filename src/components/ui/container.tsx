import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div">;

/**
 * Ancho máximo y padding lateral consistentes para toda la página.
 * Cualquier sección debe envolver su contenido en un `<Container>`.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-page px-6 lg:px-8", className)}
      {...props}
    />
  );
}
