"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

const EDGE_TOLERANCE_PX = 4;

function slideStep(track: HTMLElement): number {
  const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
  if (slides.length < 2) return track.clientWidth * 0.8;
  return slides[1].offsetLeft - slides[0].offsetLeft;
}

export function useScrollArrows(trackRef: RefObject<HTMLElement | null>) {
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollBack(track.scrollLeft > EDGE_TOLERANCE_PX);
    setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - EDGE_TOLERANCE_PX);
  }, [trackRef]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges();
    const resizeObserver = new ResizeObserver(updateEdges);
    resizeObserver.observe(track);
    track.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", updateEdges);
    };
  }, [trackRef, updateEdges]);

  const scrollOneSlide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: slideStep(track) * direction, behavior: "smooth" });
  };

  return { canScrollBack, canScrollForward, scrollOneSlide };
}
