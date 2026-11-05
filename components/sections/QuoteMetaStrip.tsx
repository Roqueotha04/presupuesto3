"use client";

import type { QuoteMetaItem } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { EspinosaWordmark } from "@/components/ui/brand/EspinosaWordmark";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";

interface QuoteMetaStripProps {
  items: QuoteMetaItem[];
}

export function QuoteMetaStrip({ items }: QuoteMetaStripProps) {
  const { t } = useLanguage();

  return (
    <dl className="grid grid-cols-2 border-t border-line">
      {items.map((item, index) => (
        <div
          key={item.label.es}
          className={`border-b border-line py-4 ${index % 2 === 1 ? "border-l pl-5" : "pr-5"}`}
        >
          <dt>
            <BrandLabel>{t(item.label)}</BrandLabel>
          </dt>
          <dd className="mt-2 text-sm font-semibold leading-snug text-fg">
            {item.showsClientWordmark && (
              <span className="mb-1 block">
                <EspinosaWordmark size="sm" />
              </span>
            )}
            <span className={item.showsClientWordmark ? "text-xs font-medium text-fg-muted" : ""}>{t(item.value)}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
