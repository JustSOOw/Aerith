"use client";

import Link from "next/link";
import Image from "next/image";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { Starlight } from "@/components/effects/Starlight";
import { ShimmerText } from "@/components/effects/ShimmerText";
import type { PageInfo } from "@/lib/discover-pages";

/* ── SVG Icons for simple pages ── */

function SeedlingIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="5" r="2" fill="currentColor" opacity="0.6" />
      <path d="M10 7v8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M10 11c-3-1-4-3-4-3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M10 9c2-1 3-3 3-3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
    </svg>
  );
}

/* ── CSS ── */
const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .scroll-area {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .scroll-area::-webkit-scrollbar { display: none; }
`;

/* ── Built-in module cards ── */
const builtinModules = [
  {
    name: "画廊",
    href: "/gallery",
    desc: "光影与花海的瞬间",
    image: "/output/backimage/aerith_mood_flower_whisper_v1.png",
  },
  {
    name: "关于",
    href: "/about",
    desc: "花之守护者的故事",
    image: "/output/aerith_action_holding_flowers_v1.png",
  },
];

/* ── Main ── */

interface GardenHomeProps {
  extensionPages: PageInfo[];
}

export function GardenHome({ extensionPages }: GardenHomeProps) {
  const modules = extensionPages.filter((p) => p.isModule);
  const simplePages = extensionPages.filter((p) => !p.isModule);

  const allModules = [
    ...builtinModules,
    ...modules.map((m) => ({
      name: m.name,
      href: m.href,
      desc: "",
      image: "",
    })),
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-deep-950">
      <style>{styles}</style>

      {/* Atmosphere */}
      <Starlight count={25} />
      <FloatingPetals density={12} speed={0.6} />
      <GlowOrb color="pink" size={400} intensity={0.35} className="-top-[10%] -right-[8%]" />
      <GlowOrb color="green" size={350} intensity={0.25} className="-bottom-[5%] -left-[8%]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">

        {/* Title */}
        <div className="text-center" style={{ animation: "fadeUp 1s ease-out both" }}>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,9vw,6.5rem)] font-semibold leading-[0.9]">
            <ShimmerText>Aerith</ShimmerText>
          </h1>
          <p
            className="mt-5 font-[family-name:var(--font-display)] text-sm italic tracking-wider text-warm-400/50"
            style={{ animation: "fadeUp 0.8s ease-out 0.4s both" }}
          >
            在星光与花海之间，寻找属于你的故事
          </p>
        </div>

        {/* ── Module cards — horizontal scroll ── */}
        <div
          className="scroll-area mt-16 flex w-full max-w-4xl gap-5 overflow-x-auto px-2 pb-4"
          style={{ animation: "fadeUp 0.7s ease-out 0.7s both" }}
        >
          {allModules.map((mod) => (
            <Link key={mod.href} href={mod.href} className="group shrink-0">
              <div className="relative flex h-44 w-72 overflow-hidden rounded-xl border border-warm-200/8 bg-warm-100/[0.03] transition-all duration-500 group-hover:border-aerith-300/20 group-hover:bg-warm-100/[0.06]">
                {/* Hover glow */}
                <div className="absolute -inset-4 rounded-2xl bg-aerith-400/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                {/* Text side */}
                <div className="relative flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-warm-200 transition-colors duration-300 group-hover:text-aerith-300">
                      {mod.name}
                    </h3>
                    {mod.desc && (
                      <p className="mt-1.5 font-[family-name:var(--font-body)] text-[0.7rem] leading-relaxed text-warm-500/50 transition-colors duration-300 group-hover:text-warm-400/70">
                        {mod.desc}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-warm-500/30 transition-all duration-300 group-hover:gap-2 group-hover:text-aerith-400/60">
                    <span className="font-[family-name:var(--font-body)] text-[0.6rem]">进入</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M2 6h8M7 3l3 3-3 3" />
                    </svg>
                  </div>
                </div>

                {/* Image side */}
                {mod.image && (
                  <div className="relative w-28 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.name}
                      fill
                      className="object-cover opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
                      sizes="112px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deep-950/80 to-transparent" />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* ── Simple pages — garden path ── */}
        {simplePages.length > 0 && (
          <div
            className="mt-10 flex flex-col items-center"
            style={{ animation: "fadeUp 0.6s ease-out 1.1s both" }}
          >
            {/* Vine connector */}
            <svg width="120" height="24" viewBox="0 0 120 24" className="mb-3 text-warm-500/15">
              <path d="M0 12 Q30 4 60 12 T120 12" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="60" cy="12" r="2" fill="currentColor" opacity="0.4" />
            </svg>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {simplePages.map((page, i) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center gap-2.5 rounded-full border border-warm-200/6 bg-warm-100/[0.02] px-4 py-2 transition-all duration-400 hover:border-lily-400/20 hover:bg-lily-400/[0.04]"
                  style={{ animation: `fadeUp 0.4s ease-out ${1.3 + i * 0.08}s both` }}
                >
                  <SeedlingIcon className="text-lily-300/40 transition-colors duration-300 group-hover:text-lily-300/80" />
                  <span className="font-[family-name:var(--font-body)] text-[0.7rem] text-warm-400/50 transition-colors duration-300 group-hover:text-warm-300/80">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom quote */}
      <div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        style={{ animation: "fadeUp 1s ease-out 1.8s both" }}
      >
        <p className="font-[family-name:var(--font-display)] text-[0.7rem] italic text-warm-600/25">
          &ldquo;即使在最黑暗的夜晚，花朵依然会绽放&rdquo;
        </p>
      </div>
    </div>
  );
}
