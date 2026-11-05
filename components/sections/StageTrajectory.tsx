"use client";

import { useRef } from "react";
import { m, useScroll, useSpring, useTransform } from "framer-motion";
import type { Localized, Stage } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowCarousel } from "@/components/ui/ArrowCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";

interface StageTrajectoryProps {
  stages: Stage[];
  label: Localized;
  doesLabel: Localized;
  deliversLabel: Localized;
}

interface StageCardProps {
  stage: Stage;
  position: number;
  doesLabel: Localized;
  deliversLabel: Localized;
}

function StageCard({ stage, position, doesLabel, deliversLabel }: StageCardProps) {
  const { t } = useLanguage();

  return (
    <li data-slide className="w-[78vw] max-w-[19rem] shrink-0 snap-start">
      <Reveal delay={Math.min(position, 4) * 0.06}>
        <span aria-hidden className="relative z-10 block h-2.5 w-5 skew-x-[-24deg] bg-brand" />
        <article className="mt-5 flex min-h-[22rem] flex-col rounded-xl bg-card p-6 shadow-[0_24px_50px_-30px_rgb(0_0_0/0.35)] ring-1 ring-card-line">
          <span className="font-heading text-6xl font-black italic leading-none text-brand">
            {String(position).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-heading text-[1.75rem] font-black uppercase italic leading-[0.95] text-fg">{t(stage.title)}</h3>
          <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm leading-relaxed">
            <div>
              <dt>
                <BrandLabel>{t(doesLabel)}</BrandLabel>
              </dt>
              <dd className="mt-2 text-fg-muted">{t(stage.does)}</dd>
            </div>
            <div className="mt-auto border-t border-line pt-4">
              <dt>
                <BrandLabel>{t(deliversLabel)}</BrandLabel>
              </dt>
              <dd className="mt-2 font-semibold text-fg">{t(stage.delivers)}</dd>
            </div>
          </dl>
        </article>
      </Reveal>
    </li>
  );
}

export function StageTrajectory({ stages, label, doesLabel, deliversLabel }: StageTrajectoryProps) {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const smoothProgress = useSpring(scrollXProgress, { stiffness: 120, damping: 24 });
  const fill = useTransform(smoothProgress, [0, 1], [0.18, 1]);

  return (
    <ArrowCarousel trackRef={trackRef} label={t(label)} className="mt-12">
      <ol className="relative flex w-max gap-5 pt-2">
        <span aria-hidden className="absolute left-0 right-0 top-[0.8rem] h-px bg-line" />
        <m.span aria-hidden style={{ scaleX: fill }} className="absolute left-0 right-0 top-[0.8rem] h-0.5 origin-left bg-brand" />
        {stages.map((stage, index) => (
          <StageCard
            key={stage.title.es}
            stage={stage}
            position={index + 1}
            doesLabel={doesLabel}
            deliversLabel={deliversLabel}
          />
        ))}
      </ol>
    </ArrowCarousel>
  );
}
