"use client";

import Image from "next/image";
import type { LocalizedImage } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { DiagonalReveal } from "@/components/ui/DiagonalReveal";

interface DiagonalPhotoProps {
  image: LocalizedImage;
  sizes: string;
  className?: string;
}

const frameClip = "[clip-path:polygon(12%_0,100%_0,88%_100%,0_100%)]";

export function DiagonalPhoto({ image, sizes, className = "" }: DiagonalPhotoProps) {
  const { t } = useLanguage();

  return (
    <DiagonalReveal className={`relative ${className}`}>
      <div aria-hidden className={`absolute inset-0 translate-x-3 bg-brand ${frameClip}`} />
      <div className={`img-shimmer relative h-full overflow-hidden ${frameClip}`}>
        <Image src={image.src} alt={t(image.alt)} fill sizes={sizes} className="object-cover" />
      </div>
    </DiagonalReveal>
  );
}
