import Link from "next/link";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-ink-inverse hover:bg-brand-hover",
  secondary:
    "bg-surface text-ink border border-border-strong hover:bg-surface-muted",
  ghost: "text-ink hover:bg-surface-muted",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-body-sm",
  md: "h-11 px-5 text-body-sm",
  lg: "h-12 px-7 text-body",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  React.ComponentProps<"button"> & { href?: never };

type ButtonAsLink = BaseProps &
  React.ComponentProps<typeof Link> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Botón único de la app. Renderiza `<Link>` cuando recibe `href`
 * y `<button>` en caso contrario, para que estilos y estados vivan en un solo sitio.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const linkProps = props as ButtonAsLink;
    /* Los destinos externos abren en pestaña nueva para no sacar al visitante
       de la landing. Va aquí y no en cada uso para que sea consistente.
       `linkProps` se expande después, así que un `target` explícito gana. */
    const isExternal = /^https?:/.test(linkProps.href);

    return (
      <Link
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        {...linkProps}
      />
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return <button type={type} className={classes} {...buttonProps} />;
}
