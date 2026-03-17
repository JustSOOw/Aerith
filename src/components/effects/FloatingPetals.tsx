"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FloatingPetalsProps {
  density?: number;
  speed?: number;
  className?: string;
}

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
  color: string;
  swayAmount: number;
}

const PETAL_COLORS = [
  "#f8a8c0", // pink
  "#f8a8c0",
  "#fef5f7", // white
  "#fef5f7",
  "#fde047", // gold (lily)
  "#b3e5c9", // green (rare)
];

// Simple seeded random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generatePetals(density: number, speed: number): Petal[] {
  return Array.from({ length: density }, (_, i) => {
    const r = (n: number) => seededRandom(i * 7 + n * 13 + 42);
    return {
      id: i,
      left: `${r(0) * 100}%`,
      size: 8 + r(1) * 12,
      duration: (15 + r(2) * 15) / speed,
      delay: r(3) * -20,
      rotation: r(4) * 360,
      opacity: 0.3 + r(5) * 0.4,
      color: PETAL_COLORS[Math.floor(r(6) * PETAL_COLORS.length)],
      swayAmount: 30 + r(7) * 60,
    };
  });
}

export function FloatingPetals({
  density = 20,
  speed = 1,
  className,
}: FloatingPetalsProps) {
  const reducedMotion = useReducedMotion();
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setPetals(generatePetals(density, speed));
  }, [density, speed]);

  if (petals.length === 0) return null;

  if (reducedMotion) {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
        {petals.slice(0, 8).map((petal) => (
          <div
            key={petal.id}
            className="absolute rounded-[50%_50%_50%_0%]"
            style={{
              left: petal.left,
              top: `${20 + seededRandom(petal.id * 3 + 99) * 60}%`,
              width: petal.size,
              height: petal.size * 1.3,
              backgroundColor: petal.color,
              opacity: petal.opacity,
              transform: `rotate(${petal.rotation}deg)`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <style>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-10%) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(22%) translateX(var(--sway)) rotate(90deg);
          }
          50% {
            transform: translateY(55%) translateX(calc(var(--sway) * -0.5)) rotate(180deg);
          }
          75% {
            transform: translateY(77%) translateX(var(--sway)) rotate(270deg);
          }
          100% {
            transform: translateY(110vh) translateX(0px) rotate(360deg);
          }
        }
      `}</style>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute rounded-[50%_50%_50%_0%]"
          style={{
            left: petal.left,
            top: "-5%",
            width: petal.size,
            height: petal.size * 1.3,
            backgroundColor: petal.color,
            opacity: petal.opacity,
            "--sway": `${petal.swayAmount}px`,
            animation: `petalFall ${petal.duration}s ${petal.delay}s linear infinite`,
            willChange: "transform",
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
