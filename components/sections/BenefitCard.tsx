"use client";

import type { Benefit, Localized } from "@/config/site.types";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { FlipCard } from "@/components/ui/FlipCard";
import { Glyph } from "@/components/ui/Glyph";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";
import { DiagonalCorner } from "@/components/ui/brand/DiagonalCorner";

interface BenefitCardProps {
  benefit: Benefit;
  exampleLabel: Localized;
  position: number;
  isFlipped: boolean;
  onFlip: () => void;
}

interface FaceProps {
  benefit: Benefit;
  number: string;
}

function BenefitFront({ benefit, number }: FaceProps) {
  const { t } = useLanguage();

  return (
    <div className="relative flex h-full flex-col bg-ink p-6 ring-1 ring-inset ring-card-line">
      <DiagonalCorner size="sm" className="top-auto h-16" />
      <div className="flex items-start justify-between">
        <span className="font-heading text-5xl font-black italic leading-none text-brand">{number}</span>
        <span className="flex h-11 w-11 skew-x-[-10deg] items-center justify-center bg-graphite text-bone ring-1 ring-card-line">
          <Glyph name={benefit.glyph} className="h-5 w-5 skew-x-[10deg]" />
        </span>
      </div>
      <h3 className="mt-auto font-heading text-[1.9rem] font-black uppercase italic leading-[0.95] text-bone">
        {t(benefit.title)}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-bone/70">{t(benefit.description)}</p>
      <span aria-hidden className="mt-5 block">
        <BrandLabel>{t(ui.benefits.flipHint)}</BrandLabel>
      </span>
    </div>
  );
}

function BenefitBack({ benefit, number, exampleLabel }: FaceProps & { exampleLabel: Localized }) {
  const { t } = useLanguage();

  return (
    <div className="relative flex h-full flex-col bg-brand p-6">
      <DiagonalCorner size="sm" tone="graphite" className="bottom-auto h-20" />
      <span className="font-heading text-5xl font-black italic leading-none text-bone/90">{number}</span>
      <div className="mt-auto">
        <BrandLabel tone="onBrand">{t(exampleLabel)}</BrandLabel>
        <p className="mt-4 font-heading text-[1.75rem] font-extrabold italic leading-[1.02] text-bone">{t(benefit.example)}</p>
      </div>
    </div>
  );
}

export function BenefitCard({ benefit, exampleLabel, position, isFlipped, onFlip }: BenefitCardProps) {
  const { t } = useLanguage();
  const number = String(position).padStart(2, "0");

  return (
    <FlipCard
      front={<BenefitFront benefit={benefit} number={number} />}
      back={<BenefitBack benefit={benefit} number={number} exampleLabel={exampleLabel} />}
      isFlipped={isFlipped}
      onFlip={onFlip}
      label={t(benefit.title)}
      className="h-full w-full"
    />
  );
}
