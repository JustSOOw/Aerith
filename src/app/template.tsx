"use client";

import { motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at calc(100% - 2rem) calc(100% - 2rem))" }}
      animate={{ clipPath: "circle(150% at calc(100% - 2rem) calc(100% - 2rem))" }}
      transition={{ duration: 1.2, ease: [0.22, 0.68, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
