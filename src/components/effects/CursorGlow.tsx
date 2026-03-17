"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CursorGlow() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (reducedMotion) return;

    // Only enable on non-touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select");
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, reducedMotion, visible]);

  if (reducedMotion) return null;

  return (
    <>
      {/* Ambient glow following cursor */}
      <motion.div
        className="pointer-events-none fixed z-[999] rounded-full"
        style={{
          x: springX,
          y: springY,
          width: 300,
          height: 300,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(250,204,21,0.08) 0%, transparent 70%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Small cursor dot */}
      <motion.div
        className="pointer-events-none fixed z-[1000] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 16 : 8,
          height: isHovering ? 16 : 8,
          backgroundColor: isHovering ? "#facc15" : "#f8a8c0",
          boxShadow: isHovering
            ? "0 0 20px rgba(250,204,21,0.5)"
            : "0 0 12px rgba(248,168,192,0.5)",
          opacity: visible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, background-color 0.2s, box-shadow 0.2s, opacity 0.3s",
        }}
      />
    </>
  );
}
