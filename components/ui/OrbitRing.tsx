"use client";

import type { ReactNode } from "react";
import { m, useTransform, type MotionValue } from "framer-motion";
import { useOrbitRotation } from "@/hooks/useOrbitRotation";

interface OrbitRingProps {
  panels: ReactNode[];
  panelWidthRem: number;
  label: string;
  slotCount?: number;
}

const RADIUS_BREATHING_ROOM = 1.12;
const HIDDEN_BEYOND_DEGREES = 75;

function ringRadiusRem(slotCount: number, panelWidthRem: number): number {
  return (panelWidthRem / 2 / Math.tan(Math.PI / slotCount)) * RADIUS_BREATHING_ROOM;
}

function facingAngle(slotAngle: number, ringAngle: number): number {
  const total = (((slotAngle + ringAngle) % 360) + 540) % 360;
  return total - 180;
}

function visibilityFor(facing: number): number {
  const distance = Math.abs(facing);
  return distance > HIDDEN_BEYOND_DEGREES ? 0 : 1 - (distance / HIDDEN_BEYOND_DEGREES) * 0.75;
}

interface RingSlotProps {
  children: ReactNode;
  slotAngle: number;
  radiusRem: number;
  ringAngle: MotionValue<number>;
}

function RingSlot({ children, slotAngle, radiusRem, ringAngle }: RingSlotProps) {
  const opacity = useTransform(ringAngle, (angle) => visibilityFor(facingAngle(slotAngle, angle)));

  return (
    <m.div
      style={{ opacity, transform: `rotateY(${slotAngle}deg) translateZ(${radiusRem}rem)` }}
      className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
    >
      {children}
    </m.div>
  );
}

export function OrbitRing({ panels, panelWidthRem, label, slotCount = 12 }: OrbitRingProps) {
  const { angle, handlers } = useOrbitRotation();
  const stepDegrees = 360 / slotCount;
  const radius = ringRadiusRem(slotCount, panelWidthRem);

  return (
    <div
      role="region"
      aria-label={label}
      {...handlers}
      className="relative flex h-[22rem] cursor-grab touch-pan-y select-none items-center justify-center [perspective:2400px] active:cursor-grabbing"
    >
      <div style={{ transform: `translateZ(${-radius}rem) rotateX(-3deg)` }} className="[transform-style:preserve-3d]">
        <m.div
          style={{ rotateY: angle, width: `${panelWidthRem}rem` }}
          className="relative h-[17rem] [transform-style:preserve-3d]"
        >
          {Array.from({ length: slotCount }, (_, slot) => (
            <RingSlot key={slot} slotAngle={slot * stepDegrees} radiusRem={radius} ringAngle={angle}>
              {panels[slot % panels.length]}
            </RingSlot>
          ))}
        </m.div>
      </div>
    </div>
  );
}
