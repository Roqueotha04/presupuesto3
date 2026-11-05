import type { GlyphName } from "@/config/site.types";
import { Glyph } from "@/components/ui/Glyph";

interface CapabilityAnnotationProps {
  glyph: GlyphName;
  text: string;
}

export function CapabilityAnnotation({ glyph, text }: CapabilityAnnotationProps) {
  return (
    <span className="mt-1.5 inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-fg-muted">
      <Glyph name={glyph} className="h-3 w-3 text-brand" />
      {text}
    </span>
  );
}
