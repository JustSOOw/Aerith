"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { AerithCard } from "@/components/ui/AerithCard";
import { AerithDivider } from "@/components/ui/AerithDivider";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-deep-950">
          <FloatingPetals density={10} />
          <GlowOrb color="green" size={250} intensity={0.3} className="bottom-0 left-[10%]" />
          <div className="relative z-10 text-center">
            <p className="mb-2 font-[family-name:var(--font-accent)] text-[0.7rem] tracking-[0.15em] uppercase text-lifestream-300/80">
              About
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-warm-100">
              关于 Aerith
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-warm-50 py-[clamp(3rem,8vh,6rem)]">
          <Container className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10 flex justify-center">
                <Image
                  src="/output/aerith_action_holding_lily_v1.png"
                  alt="Aerith 手持百合"
                  width={200}
                  height={200}
                  className="h-auto w-40"
                />
              </div>

              <AerithCard className="mb-8">
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-deep-900">
                  这是什么
                </h2>
                <p className="font-[family-name:var(--font-body)] text-sm leading-[1.8] text-warm-700">
                  这是一个以 Final Fantasy VII Remake 中的 Aerith Gainsborough 为灵感的个人网站。
                  网站的每一个视觉元素——从飘落的花瓣到柔和的光晕，从粉色的按钮到金色的星光——都承载着对这位花之守护者的致敬。
                </p>
              </AerithCard>

              <AerithDivider variant="flower" />

              <AerithCard className="mt-8">
                <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl font-semibold text-deep-900">
                  设计理念
                </h2>
                <ul className="space-y-3 font-[family-name:var(--font-body)] text-sm leading-[1.8] text-warm-700">
                  <li className="flex gap-3">
                    <span className="shrink-0 text-aerith-400">✦</span>
                    <span><strong className="text-deep-900">优雅温柔</strong> — 如同 Aerith 的气质，用柔和的曲线与温暖的色调传达亲切</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-lifestream-400">✦</span>
                    <span><strong className="text-deep-900">自然生机</strong> — 花卉、绿叶、星光贯穿始终，呼应五番街教堂的花田</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 text-lily-400">✦</span>
                    <span><strong className="text-deep-900">光辉璀璨</strong> — 生命之流的发光特质是核心视觉语言，光效无处不在</span>
                  </li>
                </ul>
              </AerithCard>
            </motion.div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
