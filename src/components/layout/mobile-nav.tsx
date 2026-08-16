"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";

type MobileNavProps = {
  items: { label: string; href: string }[];
  cta: { label: string; href: string };
  labels: { open: string; close: string };
};

export function MobileNav({ items, cta, labels }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquea el scroll de fondo y permite cerrar con Escape.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? labels.close : labels.open}
        onClick={() => setIsOpen((open) => !open)}
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-pill text-ink transition-colors hover:bg-surface-muted"
      >
        <span aria-hidden className="relative block h-4 w-5">
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "top-1/2 rotate-45" : "top-0.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
              isOpen ? "top-1/2 -rotate-45" : "bottom-0.5"
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-header bottom-0 z-40 overflow-y-auto border-t border-border bg-surface px-6 py-8"
        >
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-pill px-2 py-3 text-h3 text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Button
            href={cta.href}
            size="lg"
            className="mt-8 w-full"
            onClick={() => setIsOpen(false)}
          >
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );
}
