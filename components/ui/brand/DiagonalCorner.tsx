type CornerSize = "sm" | "md";
type CornerTone = "brand" | "graphite";

interface DiagonalCornerProps {
  size?: CornerSize;
  tone?: CornerTone;
  className?: string;
}

const sizeClasses: Record<CornerSize, { gray: string; accent: string }> = {
  sm: { gray: "w-14", accent: "w-8" },
  md: { gray: "w-24", accent: "w-14" },
};

const toneClasses: Record<CornerTone, string> = {
  brand: "bg-brand",
  graphite: "bg-graphite",
};

export function DiagonalCorner({ size = "md", tone = "brand", className = "" }: DiagonalCornerProps) {
  const widths = sizeClasses[size];

  return (
    <span aria-hidden className={`pointer-events-none absolute inset-y-0 right-0 ${className}`}>
      <span className={`absolute inset-y-0 right-0 bg-steel/30 [clip-path:polygon(60%_0,100%_0,100%_100%,0_100%)] ${widths.gray}`} />
      <span className={`absolute inset-y-0 right-0 [clip-path:polygon(70%_0,100%_0,100%_100%,15%_100%)] ${widths.accent} ${toneClasses[tone]}`} />
    </span>
  );
}
