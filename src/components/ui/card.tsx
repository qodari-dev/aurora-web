import { cn } from "@/lib/utils";

export type CardVariant = "tinted" | "outlined";

const variants: Record<CardVariant, string> = {
  /** Fondo lavanda suave, sin contorno. */
  tinted: "bg-surface-tint",
  /** Fondo blanco con contorno azulado. */
  outlined: "bg-surface border border-border-accent",
};

type CardProps = React.ComponentProps<"div"> & {
  variant?: CardVariant;
};

export function Card({ variant = "tinted", className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-card", variants[variant], className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-h4 text-brand", className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-body text-ink-muted", className)} {...props} />;
}
