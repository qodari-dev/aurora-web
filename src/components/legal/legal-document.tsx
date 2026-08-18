import { Prose } from "@/components/ui/prose";
import { Section } from "@/components/ui/section";
import type {
  LegalBlock,
  LegalDocument as LegalDocumentData,
} from "@/content/legal/types";
import type { Locale } from "@/i18n/config";

type LegalDocumentProps = {
  doc: LegalDocumentData;
  locale: Locale;
};

/**
 * Renderiza un documento legal. Las secciones y subsecciones se numeran solas
 * (`1.`, `2.`, `2.1.`), así que el contenido no arrastra numeración: reordenar
 * o insertar una sección no obliga a renumerar el resto a mano.
 */
export function LegalDocument({ doc, locale }: LegalDocumentProps) {
  /* `updatedAt` es una fecha de calendario, no un instante. `new Date("…")`
     la interpreta como medianoche UTC, así que sin fijar `timeZone` se
     mostraría el día anterior en cualquier huso al oeste de Greenwich. */
  const updated = new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(doc.updatedAt));

  return (
    <Section containerClassName="max-w-[80ch]">
      <h1 className="text-h2 text-brand lg:text-h1">{doc.title}</h1>
      <p className="mt-3 text-body-sm text-ink-subtle">{updated}</p>

      <Prose className="mt-10">
        {doc.intro?.map((block, index) => (
          <Block key={index} block={block} />
        ))}

        {doc.sections.map((section, index) => {
          /* Contador propio por sección: solo avanza con los subtítulos. */
          let subsection = 0;

          return (
            <section key={section.title}>
              <h2>
                {index + 1}. {section.title}
              </h2>
              {section.content.map((block, blockIndex) => {
                const number =
                  typeof block === "object" && !Array.isArray(block)
                    ? `${index + 1}.${++subsection}`
                    : undefined;

                return <Block key={blockIndex} block={block} number={number} />;
              })}
            </section>
          );
        })}
      </Prose>
    </Section>
  );
}

function Block({ block, number }: { block: LegalBlock; number?: string }) {
  if (Array.isArray(block)) {
    return (
      <ul>
        {block.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (typeof block === "object") {
    return (
      <h3>
        {number}. {block.subtitle}
      </h3>
    );
  }

  return <p>{block}</p>;
}
