"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AerithDivider } from "@/components/ui/AerithDivider";

export function AboutSection() {
  return (
    <section className="relative bg-warm-50 py-[clamp(4rem,10vh,8rem)]">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[var(--radius-soft)] shadow-[0_0_40px_rgba(242,125,160,0.15)]">
              <Image
                src="/output/aerith_action_holding_flowers_v1.png"
                alt="Aerith 手持鲜花"
                width={400}
                height={500}
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="mb-2 font-[family-name:var(--font-accent)] text-[0.7rem] tracking-[0.15em] uppercase text-aerith-400">
              关于
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-deep-900">
              花之守护者
            </h2>
            <AerithDivider variant="fade" className="max-w-[200px]" />
            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-[1.7] text-warm-700">
              这里是 Aerith 的花园——一个以 Final Fantasy VII Remake
              中的爱丽丝为灵感，用花瓣、星光与生命之流编织的数字空间。
            </p>
            <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-[1.7] text-warm-700">
              每一处细节都承载着温柔与希望，如同她在教堂花田中的微笑。
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
