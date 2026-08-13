import { ClosingCta } from "@/components/sections/closing-cta";
import { CustomerService } from "@/components/sections/customer-service";
import { Data } from "@/components/sections/data";
import { ExploreAurora } from "@/components/sections/explore-aurora";
import { Growth } from "@/components/sections/growth";
import { Insights } from "@/components/sections/insights";
import { Marketing } from "@/components/sections/marketing";
import { Workflows } from "@/components/sections/workflows";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

/**
 * Landing de Aurora. Cada sección del diseño vive en
 * `src/components/sections/` y se compone aquí en orden.
 */
export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <>
      <CustomerService locale={lang} />
      <ExploreAurora />
      <Growth />
      <Workflows />
      <Marketing />
      <Insights />
      <Data />
      <ClosingCta locale={lang} />
      {/* TODO: <Operations /> — destino del enlace `#operaciones` del header */}
    </>
  );
}
