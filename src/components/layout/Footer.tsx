import { cn } from "@/lib/cn";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "relative bg-warm-100 py-12 text-center",
        className
      )}
    >
      {/* Divider */}
      <div className="mx-auto mb-8 flex max-w-xs items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-aerith-300" />
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-aerith-400">
          <path
            d="M10 2C10 2 6 6 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 6 10 2 10 2Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M10 6C10 6 8 8 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 8 10 6 10 6Z"
            fill="currentColor"
          />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lifestream-300" />
      </div>

      <p className="font-[family-name:var(--font-accent)] text-xs tracking-[0.15em] text-warm-500 uppercase">
        Aerith
      </p>
      <p className="mt-2 text-xs text-warm-500">
        灵感源自 Final Fantasy VII Remake
      </p>
    </footer>
  );
}
