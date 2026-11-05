"use client";

import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { CountUp } from "@/components/ui/CountUp";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";
import { DiagonalCorner } from "@/components/ui/brand/DiagonalCorner";

const { currency, implementation, monthly } = siteConfig.investment;

type PriceSize = "hero" | "split";

const amountClasses: Record<PriceSize, string> = {
  hero: "text-[clamp(4.5rem,12vw,7.5rem)] leading-[0.82]",
  split: "text-4xl leading-none",
};

const currencyClasses: Record<PriceSize, string> = {
  hero: "text-3xl",
  split: "text-lg",
};

function PriceTag({ amount, size, currencyTone }: { amount: number; size: PriceSize; currencyTone: string }) {
  return (
    <p className="flex items-baseline gap-2 font-heading font-black italic">
      <span className={`${currencyClasses[size]} ${currencyTone}`}>{currency}</span>
      <CountUp value={amount} className={`${amountClasses[size]} text-bone`} />
    </p>
  );
}

export function ImplementationPanel() {
  const { t } = useLanguage();

  return (
    <article className="relative h-full overflow-hidden rounded-xl bg-ink p-6 pr-14 ring-1 ring-card-line md:p-9 md:pr-24">
      <DiagonalCorner />
      <BrandLabel>{t(implementation.label)}</BrandLabel>
      <div className="mt-6">
        <PriceTag amount={implementation.amount} size="hero" currencyTone="text-brand" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {implementation.splits.map((split) => (
          <div key={split.label.es} className="border-l-[3px] border-l-brand bg-graphite p-4">
            <p className="text-xs font-semibold text-fg-muted">{t(split.label)}</p>
            <div className="mt-2">
              <PriceTag amount={split.amount} size="split" currencyTone="text-brand" />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export function MonthlyPanel() {
  const { t } = useLanguage();

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-xl bg-brand p-6 pr-14 md:p-9 md:pr-24">
      <DiagonalCorner tone="graphite" />
      <BrandLabel tone="onBrand">{t(monthly.label)}</BrandLabel>
      <div className="mt-6 flex flex-wrap items-baseline gap-x-3">
        <PriceTag amount={monthly.amount} size="hero" currencyTone="text-graphite" />
        <span className="font-heading text-3xl font-black italic text-graphite">{t(monthly.period)}</span>
      </div>
      <p className="mt-auto flex items-center gap-2.5 pt-8 font-heading text-xl font-extrabold uppercase italic text-bone">
        <span aria-hidden className="h-1.5 w-3 skew-x-[-24deg] bg-graphite" />
        {t(monthly.note)}
      </p>
    </article>
  );
}
