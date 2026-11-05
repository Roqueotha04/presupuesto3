import { siteConfig } from "@/config/site.config";

type WordmarkSize = "sm" | "md" | "lg";

interface EspinosaWordmarkProps {
  size?: WordmarkSize;
  className?: string;
}

const sizeClasses: Record<WordmarkSize, string> = {
  sm: "text-[1.45rem]",
  md: "text-[2.25rem]",
  lg: "text-[clamp(3.5rem,13vw,9.5rem)]",
};

const { client } = siteConfig;

export function EspinosaWordmark({ size = "md", className = "" }: EspinosaWordmarkProps) {
  return (
    <span
      role="img"
      aria-label={client.name}
      className={`inline-flex items-baseline gap-[0.1em] whitespace-nowrap font-heading font-black italic leading-none tracking-[-0.01em] ${sizeClasses[size]} ${className}`}
    >
      <span aria-hidden className="text-brand">{client.wordmark.lead}</span>
      <span aria-hidden className="text-fg">{client.wordmark.tail}</span>
    </span>
  );
}
