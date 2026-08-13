"use client";

import Image from "next/image";
import { useState } from "react";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type WorkflowPanel = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

/** Paneles expandidos a la vez. Los demás quedan como tiras verticales. */
const VISIBLE = 2;
const COLLAPSED_WIDTH = "4.5rem";

type WorkflowPanelsProps = {
  panels: WorkflowPanel[];
  /** Plantilla del aria-label del botón; `{name}` se sustituye por el título. */
  expandLabel: string;
  className?: string;
};

/**
 * Acordeón horizontal: una ventana deslizante de `VISIBLE` paneles abiertos.
 * Al pulsar una tira colapsada, la ventana se ancla en ella.
 *
 * La animación va sobre `flex` (grow/shrink/basis) y no sobre
 * `grid-template-columns`: en grid habría que interpolar de `1fr` a un valor
 * fijo, que no son tipos interpolables, y el navegador se queda en el valor
 * anterior. Con flex se interpolan un número y una longitud, que sí funciona.
 *
 * Cada columna contiene su panel y su texto, así que por debajo de `md` basta
 * con apilar en columna para que cada imagen quede junto a su descripción.
 */
export function WorkflowPanels({
  panels,
  expandLabel,
  className,
}: WorkflowPanelsProps) {
  const lastStart = Math.max(0, panels.length - VISIBLE);
  const [start, setStart] = useState(0);

  const isOpen = (index: number) => index >= start && index < start + VISIBLE;

  return (
    <div className={cn("flex flex-col gap-10 md:flex-row md:gap-6", className)}>
      {panels.map((panel, index) => {
        const open = isOpen(index);

        return (
          <div
            key={panel.image}
            className="flex min-w-0 flex-col md:transition-[flex] md:duration-500 md:ease-out"
            /* Ambos `flex-basis` son longitudes (`0px` y `4.5rem`): si uno
               fuese porcentaje no interpolarían y no habría animación. */
            style={{ flex: open ? "1 1 0px" : `0 0 ${COLLAPSED_WIDTH}` }}
          >
            <div
              /* El color de fondo va en el contenedor —no en la capa que se
                 desvanece— para que no haya parpadeo durante la transición. */
              className="relative aspect-1368/1671 overflow-hidden rounded-panel bg-surface-panel md:aspect-auto md:h-[520px] lg:h-[560px]"
            >
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                sizes="(min-width: 768px) 480px, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-500",
                  open ? "opacity-100" : "opacity-100 md:opacity-0",
                )}
              />

              {/* `hidden` en vez de opacidad: así el botón no queda enfocable
                  cuando el panel está abierto, ni en móvil donde no se usa. */}
              <button
                type="button"
                onClick={() => setStart(Math.min(index, lastStart))}
                aria-label={expandLabel.replace("{name}", panel.title)}
                className={cn(
                  "absolute inset-0 items-center justify-center rounded-panel transition-colors",
                  open
                    ? "hidden"
                    : "hidden md:flex md:hover:bg-surface-panel-hover",
                )}
              >
                <span className="rotate-180 text-body font-medium whitespace-nowrap text-brand [writing-mode:vertical-rl]">
                  {panel.title}
                </span>
              </button>
            </div>

            <div
              className={cn(
                "animate-fade-in mt-6 md:mt-8 md:px-6",
                !open && "md:hidden",
              )}
            >
              <CardTitle>{panel.title}</CardTitle>
              <CardDescription className="mt-3">
                {panel.description}
              </CardDescription>
            </div>
          </div>
        );
      })}
    </div>
  );
}
