"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DiagonalReveal } from "@/components/ui/DiagonalReveal";
import { ImplementationPanel, MonthlyPanel } from "@/components/sections/PricePanels";
import { InvestmentTable } from "@/components/sections/InvestmentTable";

const { investment } = siteConfig;

export function Investment() {
  const { t } = useLanguage();

  return (
    <Section id="investment" tone="dark">
      <SectionHeading heading={investment.heading} kicker={ui.nav.investment} />
      <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <DiagonalReveal className="h-full">
          <ImplementationPanel />
        </DiagonalReveal>
        <DiagonalReveal delay={0.12} className="h-full">
          <MonthlyPanel />
        </DiagonalReveal>
      </div>
      <Reveal className="mt-12">
        <InvestmentTable table={investment.table} />
        <p className="mt-5 max-w-3xl text-xs leading-relaxed text-fg-muted">{t(investment.footnote)}</p>
      </Reveal>
    </Section>
  );
}
