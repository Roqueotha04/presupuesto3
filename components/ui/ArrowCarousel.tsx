"use client";

import type { ReactNode, RefObject } from "react";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollArrows } from "@/hooks/useScrollArrows";
import { ArrowButton } from "@/components/ui/ArrowButton";

interface ArrowCarouselProps {
  trackRef: RefObject<HTMLDivElement | null>;
  label: string;
  children: ReactNode;
  className?: string;
}

const arrowPosition = "absolute top-1/2 z-20 hidden -translate-y-1/2 md:flex";

export function ArrowCarousel({ trackRef, label, children, className = "" }: ArrowCarouselProps) {
  const { t } = useLanguage();
  const { canScrollBack, canScrollForward, scrollOneSlide } = useScrollArrows(trackRef);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        className="-mx-6 snap-x snap-mandatory scroll-px-6 overflow-x-auto overscroll-x-contain px-6 pb-6 md:-mx-8 md:scroll-px-8 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <ArrowButton
        direction="left"
        onClick={() => scrollOneSlide(-1)}
        disabled={!canScrollBack}
        label={t(ui.carousel.previous)}
        className={`${arrowPosition} -left-3 xl:-left-14`}
      />
      <ArrowButton
        direction="right"
        onClick={() => scrollOneSlide(1)}
        disabled={!canScrollForward}
        label={t(ui.carousel.next)}
        className={`${arrowPosition} -right-3 xl:-right-14`}
      />
    </div>
  );
}
