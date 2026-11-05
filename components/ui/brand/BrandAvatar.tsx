import { siteConfig } from "@/config/site.config";

interface BrandAvatarProps {
  className?: string;
}

export function BrandAvatar({ className = "h-9 w-9 text-base" }: BrandAvatarProps) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand font-heading font-black italic text-bone ${className}`}
    >
      {siteConfig.client.initials}
    </span>
  );
}
