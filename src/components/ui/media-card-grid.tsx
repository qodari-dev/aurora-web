import Image from "next/image";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type MediaCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type MediaCardGridProps = {
  cards: MediaCard[];
  /**
   * Dimensiones intrínsecas de las imágenes de la sección (todas comparten
   * tamaño) y el `sizes` que corresponde al ancho en que se muestran.
   */
  image: { width: number; height: number; sizes: string };
  /** Aquí van las columnas del grid, p. ej. `md:grid-cols-2`. */
  className?: string;
};

/**
 * Rejilla de tarjetas «imagen + título + descripción».
 * Las imágenes del diseño ya traen su fondo y esquinas redondeadas, así que
 * van sin envoltorio ni recorte extra.
 */
export function MediaCardGrid({ cards, image, className }: MediaCardGridProps) {
  return (
    <div className={cn("grid gap-6", className)}>
      {cards.map((card) => (
        <article key={card.image}>
          <Image
            src={card.image}
            alt={card.imageAlt}
            width={image.width}
            height={image.height}
            sizes={image.sizes}
            className="h-auto w-full"
          />
          <CardTitle className="mt-8">{card.title}</CardTitle>
          <CardDescription className="mt-3">{card.description}</CardDescription>
        </article>
      ))}
    </div>
  );
}
