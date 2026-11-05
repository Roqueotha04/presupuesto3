"use client";

import Image from "next/image";
import type { LocalizedImage } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

interface SharedPostProps {
  image: LocalizedImage;
}

export function SharedPost({ image }: SharedPostProps) {
  const { t } = useLanguage();

  return (
    <div className="img-shimmer w-36 overflow-hidden rounded-2xl rounded-br-md ring-1 ring-card-line md:w-40">
      <Image src={image.src} alt={t(image.alt)} width={318} height={364} className="h-auto w-full" />
    </div>
  );
}
