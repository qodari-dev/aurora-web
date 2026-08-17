"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { localeNames, locales, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageMenuProps = {
  locale: Locale;
  /** Etiqueta accesible del control ("Idioma" / "Language"). */
  label: string;
  className?: string;
};

export function LanguageMenu({ locale, label, className }: LanguageMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra al pulsar fuera o con Escape.
  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-pill py-1 text-body text-ink-inverse transition-opacity hover:opacity-80"
      >
        {localeNames[locale]}
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <ul
          role="menu"
          className="absolute top-full left-0 z-10 mt-2 min-w-40 overflow-hidden rounded-panel border border-white/10 bg-brand-deep py-1 shadow-elevated"
        >
          {locales.map((code) => (
            <li key={code} role="none">
              <Link
                role="menuitem"
                href={switchLocalePath(pathname, code)}
                hrefLang={code}
                aria-current={code === locale ? "true" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 text-body transition-colors hover:bg-white/10",
                  code === locale
                    ? "text-ink-inverse"
                    : "text-ink-inverse-muted",
                )}
              >
                {localeNames[code]}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
