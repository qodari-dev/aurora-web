/**
 * Un bloque de contenido dentro de una sección:
 *
 * - `string` → párrafo
 * - `string[]` → lista de viñetas
 * - `{ subtitle }` → subsección; se numera sola a partir de la sección padre
 *   (`2.1`, `2.2`…), igual que las secciones
 *
 * Se modela como secuencia porque en los documentos las listas y subtítulos
 * aparecen intercalados entre párrafos, y el orden importa.
 */
export type LegalBlock = string | string[] | { subtitle: string };

/** Una sección numerada del documento. */
export type LegalSection = {
  title: string;
  content: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  /** Fecha ISO (`AAAA-MM-DD`) de la última revisión. */
  updatedAt: string;
  /** Bloques de entrada, antes de la primera sección. */
  intro?: LegalBlock[];
  sections: LegalSection[];
};

/** Huecos por rellenar del tipo `[CORREO DE PRIVACIDAD]`. */
const PLACEHOLDER = /\[[A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s]{2,}\]/;

function textOf(block: LegalBlock): string {
  if (typeof block === "string") return block;
  if (Array.isArray(block)) return block.join(" ");
  return block.subtitle;
}

/**
 * Un documento solo está listo para indexarse si ninguna sección está vacía y
 * no queda ningún hueco por rellenar. Mientras devuelva `false`, la página se
 * sirve con `noindex`.
 */
export function isComplete(doc: LegalDocument) {
  const blocks = [
    ...(doc.intro ?? []),
    ...doc.sections.flatMap((s) => s.content),
  ];

  return (
    doc.sections.every((section) => section.content.length > 0) &&
    !blocks.some((block) => PLACEHOLDER.test(textOf(block)))
  );
}
