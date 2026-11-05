"use client";

import type { GlyphItem } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { Glyph } from "@/components/ui/Glyph";

type CapabilityState = "pending" | "shown" | "active";

interface CapabilityListProps {
  capabilities: GlyphItem[];
  shownIndexes: Set<number>;
  activeIndex: number | null;
}

const stateClasses: Record<CapabilityState, { row: string; icon: string }> = {
  pending: { row: "border-l-line opacity-45", icon: "bg-transparent text-fg-muted ring-1 ring-line" },
  shown: { row: "border-l-fg/40", icon: "bg-graphite text-bone" },
  active: { row: "border-l-brand bg-card shadow-[0_18px_40px_-24px_rgb(0_0_0/0.35)]", icon: "bg-brand text-bone" },
};

function stateFor(index: number, shownIndexes: Set<number>, activeIndex: number | null): CapabilityState {
  if (index === activeIndex) return "active";
  return shownIndexes.has(index) ? "shown" : "pending";
}

export function CapabilityList({ capabilities, shownIndexes, activeIndex }: CapabilityListProps) {
  const { t } = useLanguage();

  return (
    <ul className="mt-10 flex flex-col gap-1.5">
      {capabilities.map((capability, index) => {
        const styles = stateClasses[stateFor(index, shownIndexes, activeIndex)];
        return (
          <li key={capability.title.es} className={`flex gap-4 border-l-[3px] py-3.5 pl-4 pr-3 transition-all duration-500 ${styles.row}`}>
            <span className={`flex h-9 w-9 shrink-0 skew-x-[-10deg] items-center justify-center transition-colors duration-500 ${styles.icon}`}>
              <Glyph name={capability.glyph} className="h-4 w-4 skew-x-[10deg]" />
            </span>
            <p className="text-sm leading-relaxed">
              <strong className="block font-heading text-lg font-extrabold uppercase italic leading-tight text-fg">
                {t(capability.title)}
              </strong>
              <span className="text-fg-muted">{t(capability.description)}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
