"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StarlightProps {
  count?: number;
  className?: string;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function Starlight({ count = 40, className }: StarlightProps) {
  const reducedMotion = useReducedMotion();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => {
        const r = (n: number) => seededRandom(i * 11 + n * 17 + 31);
        return {
          id: i,
          left: `${r(0) * 100}%`,
          top: `${r(1) * 100}%`,
          size: 1 + r(2) * 2,
          duration: 2 + r(3) * 4,
          delay: r(4) * -6,
          color: r(5) > 0.85 ? "#fde047" : "#ffffff",
        };
      })
    );
  }, [count]);

  if (stars.length === 0) return null;

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
