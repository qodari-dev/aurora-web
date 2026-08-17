import { BadgeCheck, CircleDollarSign, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Assets en `public/section6/`. A diferencia de otras secciones, aquí el Figma
 * no exporta tarjetas completas: hay fondos oscuros (`bg-*`, sin texto y por
 * tanto compartidos entre idiomas) y widgets sueltos que sí llevan texto y
 * existen en `-es`/`-en`. La composición se arma aquí.
 *
 * Las posiciones de los widgets están medidas sobre el diseño y van en
 * porcentaje del alto/ancho de su tarjeta, para que escalen con el contenedor.
 */
export async function Insights() {
  const { insights: t } = await getDictionary();

  return (
    <Section id="analiticas" className="bg-surface-alt">
      <h2 className="max-w-[15em] text-h2 text-brand lg:text-h1">{t.title}</h2>
      <p className="mt-5 max-w-xl text-body-lg text-ink-body">
        {t.description}
      </p>

      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
        {/* Columna izquierda: tarjeta ancha + dos pequeñas */}
        <div className="flex flex-col gap-6">
          <DarkCard
            background="/section6/bg-large.png"
            sizes="(min-width: 1024px) 556px, 100vw"
            className="lg:aspect-1104/500"
          >
            <WidgetArea className="aspect-1104/500">
              {/* El widget va a ras del borde derecho: el PNG lleva el contenido
                  pegado a la derecha de su lienzo, con el resto transparente. */}
              <Image
                src={t.testing.image}
                alt={t.testing.imageAlt}
                width={1608}
                height={516}
                sizes="(min-width: 1024px) 536px, 96vw"
                className="absolute top-[6%] right-0 w-[96.4%]"
              />
            </WidgetArea>
            <CardCopy
              title={t.testing.title}
              description={t.testing.description}
              className="relative lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-10"
            />
          </DarkCard>

          <div className="grid gap-6 sm:grid-cols-2">
            <DarkCard
              background="/section6/bg-small.png"
              sizes="(min-width: 1024px) 266px, (min-width: 640px) 50vw, 100vw"
              className="aspect-528/500"
            >
              <CardIcon icon={CircleDollarSign} />
              <CardCopy
                title={t.costs.title}
                description={t.costs.description}
                className="absolute inset-x-0 bottom-0"
              />
            </DarkCard>

            <DarkCard
              background="/section6/bg-small.png"
              sizes="(min-width: 1024px) 266px, (min-width: 640px) 50vw, 100vw"
              className="aspect-528/500"
            >
              <CardIcon icon={BadgeCheck} />
              <CardCopy
                title={t.quality.title}
                description={t.quality.description}
                className="absolute inset-x-0 bottom-0"
              />
            </DarkCard>
          </div>
        </div>

        {/* Columna derecha: una sola tarjeta que iguala el alto de la izquierda */}
        <DarkCard
          background="/section6/bg-card.png"
          sizes="(min-width: 1024px) 556px, 100vw"
          className="lg:h-full"
        >
          <WidgetArea className="aspect-1104/1046">
            <Image
              src={t.analytics.activityImage}
              alt={t.analytics.activityAlt}
              width={1023}
              height={552}
              sizes="(min-width: 1024px) 334px, 60vw"
              className="absolute top-[5%] left-[6%] w-[60%]"
            />
            <Image
              src={t.analytics.interestsImage}
              alt={t.analytics.interestsAlt}
              width={1107}
              height={429}
              sizes="(min-width: 1024px) 359px, 65vw"
              className="absolute top-[47%] left-[27%] w-[64.5%]"
            />
          </WidgetArea>
          <CardCopy
            title={t.analytics.title}
            description={t.analytics.description}
            className="relative lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-10"
          />
        </DarkCard>
      </div>
    </Section>
  );
}

type DarkCardProps = {
  /** Fondo oscuro del Figma; ya trae las esquinas redondeadas incrustadas. */
  background: string;
  sizes: string;
  className?: string;
  children: React.ReactNode;
};

function DarkCard({ background, sizes, className, children }: DarkCardProps) {
  return (
    <div
      /* `overflow-hidden` recorta los widgets que llegan al borde. El radio
         coincide con el que traen incrustado los PNG de fondo (15px). */
      className={cn(
        "relative isolate overflow-hidden rounded-panel bg-brand-deep",
        className,
      )}
    >
      <Image
        src={background}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="-z-10 object-cover"
      />
      {children}
    </div>
  );
}

/**
 * Zona de los widgets. En desktop cubre toda la tarjeta y el texto se
 * superpone encima; en móvil la tarjeta no tiene alto fijo, así que esta zona
 * reserva su proporción y el texto fluye debajo en vez de solaparse.
 */
function WidgetArea({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("relative lg:absolute lg:inset-0", className)}>
      {children}
    </div>
  );
}

/**
 * Título y descripción de la tarjeta. El diseño usa ~40px de margen en las
 * tarjetas grandes y ~24px en las pequeñas; el posicionado lo pone quien la usa.
 */
function CardCopy({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("p-6", className)}>
      <h3 className="text-h4 text-ink-inverse">{title}</h3>
      <p className="mt-2 text-body text-ink-inverse-muted">{description}</p>
    </div>
  );
}

/** Contenedor del icono de las tarjetas pequeñas. */
function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="absolute top-6 left-6 flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
      <Icon aria-hidden strokeWidth={1.5} className="size-6 text-ink-inverse" />
    </div>
  );
}
