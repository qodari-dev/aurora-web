import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LogoProps = {
  locale: Locale;
  /** Texto accesible del enlace (viene del diccionario). */
  label: string;
  className?: string;
};

export function Logo({ locale, label, className }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label={label}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/aurora-logo.png"
        alt="Aurora"
        width={374}
        height={64}
        sizes="164px"
        priority
        className="h-7 w-auto"
      />
    </Link>
  );
}
