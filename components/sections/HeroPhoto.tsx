"use client";

import Image from "next/image";
import { m } from "framer-motion";
import type { LocalizedImage } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

interface HeroPhotoProps {
  image: LocalizedImage;
}

const frameClip =
  "[clip-path:polygon(0_0,100%_0,100%_80%,0_100%)] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]";

const MASK_HIDDEN = "inset(0% 0% 0% 100%)";
const MASK_VISIBLE = "inset(0% 0% 0% 0%)";

export function HeroPhoto({ image }: HeroPhotoProps) {
  const { t } = useLanguage();

  return (
    <m.div
      initial={{ clipPath: MASK_HIDDEN }}
      animate={{ clipPath: MASK_VISIBLE }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[32svh] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[58%]"
    >
      <div aria-hidden className={`absolute inset-0 bg-steel/45 ${frameClip}`} />
      <div aria-hidden className={`absolute inset-0 bottom-[5%] bg-brand lg:bottom-0 lg:left-[5%] ${frameClip}`} />
      <div className={`img-shimmer absolute inset-0 bottom-[10%] overflow-hidden lg:bottom-0 lg:left-[10%] ${frameClip}`}>
        <Image
          src={image.src}
          alt={t(image.alt)}
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[60%_70%]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite/50 via-transparent to-transparent" />
      </div>
    </m.div>
  );
}
