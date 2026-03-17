"use client";

import { useMemo } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StarlightProps {
  count?: number;
  className?: string;
}

export function Starlight({ count = 40, className }: StarlightProps) {
  const reducedMotion = useReducedMotion();

  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * -6,
      color: Math.random() > 0.85 ? "#fde047" : "#ffffff",
    }));
  }, [count]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: reducedMotion ? 0.5 : undefined,
            animation: reducedMotion
              ? undefined
              : `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
