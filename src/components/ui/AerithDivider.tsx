import { cn } from "@/lib/cn";

interface AerithDividerProps {
  variant?: "flower" | "vine" | "fade" | "golden";
  className?: string;
}

export function AerithDivider({
  variant = "fade",
  className,
}: AerithDividerProps) {
  if (variant === "flower") {
    return (
      <div className={cn("flex items-center gap-4 py-4", className)}>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-aerith-300" />
        <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0 text-aerith-400">
          {/* Lily flower icon */}
          <path
            d="M12 2C12 2 8 7 8 12C8 14.2 9.8 16 12 16C14.2 16 16 14.2 16 12C16 7 12 2 12 2Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M12 7C12 7 10 9.5 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 9.5 12 7 12 7Z"
            fill="currentColor"
          />
          <path
            d="M12 16V22"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M12 18C10 18 9 17 9 17"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lifestream-300" />
      </div>
    );
  }

  if (variant === "vine") {
    return (
      <div className={cn("py-4", className)}>
        <svg className="mx-auto h-4 w-48 text-lifestream-300" viewBox="0 0 200 16">
          <path
            d="M0 8 Q25 2 50 8 T100 8 T150 8 T200 8"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <circle cx="50" cy="6" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="100" cy="8" r="2.5" fill="#f8a8c0" opacity="0.5" />
          <circle cx="150" cy="6" r="2" fill="currentColor" opacity="0.4" />
        </svg>
      </div>
    );
  }

  if (variant === "golden") {
    return (
      <div className={cn("py-4", className)}>
        <div className="mx-auto h-px max-w-xs bg-gradient-to-r from-transparent via-lily-400/60 to-transparent" />
      </div>
    );
  }

  // fade (default)
  return (
    <div className={cn("py-4", className)}>
      <div className="mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-aerith-300/50 to-transparent" />
    </div>
  );
}
