"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerText({ children, className }: ShimmerTextProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <span className={cn("text-warm-100", className)}>{children}</span>
    );
  }

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <span
        className={cn("inline-block bg-clip-text text-transparent", className)}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fdf6ee 0%, #fdf6ee 35%, #facc15 50%, #fdf6ee 65%, #fdf6ee 100%)",
          backgroundSize: "200% auto",
          animation: "shimmer 4s linear infinite",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </span>
    </>
  );
}
