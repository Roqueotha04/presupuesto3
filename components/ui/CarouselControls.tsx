"use client";

import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowButton } from "@/components/ui/ArrowButton";

interface CarouselControlsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function CarouselControls({ count, activeIndex, onSelect }: CarouselControlsProps) {
  const { t } = useLanguage();

  return (
    <div className="mt-8 flex items-center justify-center gap-5">
      <ArrowButton
        direction="left"
        onClick={() => onSelect(activeIndex - 1)}
        disabled={activeIndex === 0}
        label={t(ui.carousel.previous)}
      />
      <div className="flex items-center gap-2">
        {Array.from({ length: count }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`${t(ui.carousel.goTo)} ${index + 1}`}
            aria-current={index === activeIndex}
            className={`h-1.5 skew-x-[-24deg] transition-all duration-300 ${
              index === activeIndex ? "w-8 bg-brand" : "w-3 bg-fg/25 hover:bg-fg/50"
            }`}
          />
        ))}
      </div>
      <ArrowButton
        direction="right"
        onClick={() => onSelect(activeIndex + 1)}
        disabled={activeIndex === count - 1}
        label={t(ui.carousel.next)}
      />
    </div>
  );
}
