import { MediaCardGrid } from "@/components/ui/media-card-grid";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n/dictionaries";

/** Assets en `public/section3/`. */
export async function Growth() {
  const { growth: t } = await getDictionary();

  return (
    <Section id="crecimiento" className="bg-surface-alt">
      <h2 className="max-w-[15em] text-h2 text-brand lg:text-h1">{t.title}</h2>
      <p className="mt-5 max-w-xl text-body-lg text-ink-body">
        {t.description}
      </p>

      <MediaCardGrid
        className="mt-12 md:grid-cols-2 lg:mt-16"
        cards={[t.customerCare, t.pqrs]}
        image={{
          width: 1656,
          height: 1569,
          sizes: "(min-width: 768px) 590px, 100vw",
        }}
      />
    </Section>
  );
}
