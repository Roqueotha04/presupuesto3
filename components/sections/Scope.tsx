"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { useSequentialReveal } from "@/hooks/useSequentialReveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InstagramDm } from "@/components/sections/InstagramDm";
import { CapabilityList } from "@/components/sections/CapabilityList";

const { scope } = siteConfig;
const MESSAGE_INTERVAL_MS = 1000;

function capabilityProgress(revealedCount: number) {
  const capabilityIndexes = scope.conversation
    .slice(0, revealedCount)
    .map((message) => message.capability)
    .filter((index): index is number => index !== undefined);

  return {
    shownIndexes: new Set(capabilityIndexes),
    activeIndex: capabilityIndexes.at(-1) ?? null,
  };
}

export function Scope() {
  const { t } = useLanguage();
  const { ref, revealedCount } = useSequentialReveal<HTMLDivElement>(scope.conversation.length, MESSAGE_INTERVAL_MS);
  const { shownIndexes, activeIndex } = capabilityProgress(revealedCount);

  return (
    <Section id="scope" tone="light">
      <div ref={ref} className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading heading={scope.heading} kicker={ui.nav.scope} />
          <CapabilityList capabilities={scope.capabilities} shownIndexes={shownIndexes} activeIndex={activeIndex} />
        </div>
        <div className="lg:sticky lg:top-24">
          <InstagramDm
            status={t(scope.chatStatus)}
            conversation={scope.conversation}
            capabilities={scope.capabilities}
            revealedCount={revealedCount}
          />
        </div>
      </div>
    </Section>
  );
}
