"use client";

import Link from "next/link";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { Starlight } from "@/components/effects/Starlight";
import { ShimmerText } from "@/components/effects/ShimmerText";
import { AerithDivider } from "@/components/ui/AerithDivider";
import type { PageInfo } from "@/lib/discover-pages";

/* ── SVG Icons ── */

function GalleryIcon({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M20 12c0 0-4 4-4 8a4 4 0 0 0 8 0c0-4-4-8-4-8z" fill="currentColor" opacity="0.3" />
      <path d="M20 16c0 0-2 2-2 4a2 2 0 0 0 4 0c0-2-2-4-2-4z" fill="currentColor" opacity="0.6" />
      <line x1="20" y1="24" x2="20" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="30" cy="10" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="10" cy="30" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

function AboutIcon({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="currentColor" opacity="0.2" transform="rotate(0 20 20)" />
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="currentColor" opacity="0.2" transform="rotate(72 20 20)" />
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="currentColor" opacity="0.2" transform="rotate(144 20 20)" />
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="currentColor" opacity="0.2" transform="rotate(216 20 20)" />
      <ellipse cx="20" cy="14" rx="4" ry="8" fill="currentColor" opacity="0.2" transform="rotate(288 20 20)" />
      <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.5" />
      <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path d="M20 32c-3-1-4-3-4-3" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.2" />
    </svg>
  );
}

function ExtensionIcon({ className }: { className?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="24" rx="5" ry="3" fill="currentColor" opacity="0.15" />
      <path d="M16 24c0-6 4-10 4-10" stroke="currentColor" strokeWidth="1" opacity="0.35" fill="none" />
      <path d="M16 24c0-6-4-10-4-10" stroke="currentColor" strokeWidth="1" opacity="0.35" fill="none" />
      <path d="M20 14c0 0-2 1-4 1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" fill="none" />
      <path d="M12 14c0 0 2 1 4 1" stroke="currentColor" strokeWidth="0.8" opacity="0.3" fill="none" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" opacity="0.5" />
      <line x1="16" y1="5" x2="16" y2="11" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="13" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

/* ── CSS fadeIn keyframes ── */
const fadeStyle = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

/* ── Main Component ── */

interface GardenHomeProps {
  extensionPages: PageInfo[];
}

const gardenPaths = [
  { name: "画廊", href: "/gallery", desc: "光影与花海的瞬间", icon: GalleryIcon, glow: "pink" as const },
  { name: "关于", href: "/about", desc: "花之守护者的故事", icon: AboutIcon, glow: "green" as const },
];

export function GardenHome({ extensionPages }: GardenHomeProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-deep-950">
      <style>{fadeStyle}</style>

      {/* Atmosphere — lightweight */}
      <Starlight count={25} />
      <FloatingPetals density={12} speed={0.6} />
      <GlowOrb color="pink" size={400} intensity={0.4} className="-top-[10%] -right-[8%]" />
      <GlowOrb color="green" size={350} intensity={0.3} className="-bottom-[5%] -left-[8%]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        {/* Title */}
        <div
          className="text-center"
          style={{ animation: "fadeUp 1s ease-out both" }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4rem,10vw,7rem)] font-semibold leading-[0.9]">
            <ShimmerText>Aerith</ShimmerText>
          </h1>
          <p
            className="mt-5 font-[family-name:var(--font-display)] text-sm italic tracking-wider text-warm-400/50"
            style={{ animation: "fadeUp 0.8s ease-out 0.5s both" }}
          >
            在星光与花海之间，寻找属于你的故事
          </p>
        </div>

        {/* Built-in pages */}
        <div className="mt-20 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          {gardenPaths.map((path, i) => (
            <div
              key={path.href}
              style={{ animation: `fadeUp 0.6s ease-out ${0.8 + i * 0.15}s both` }}
            >
              <Link href={path.href} className="group block">
                <div className="relative w-60 overflow-hidden rounded-xl border border-warm-200/8 bg-warm-100/[0.03] p-6 backdrop-blur-sm transition-all duration-500 group-hover:border-aerith-300/20 group-hover:bg-warm-100/[0.06]">
                  <div className={`absolute -inset-4 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 ${
                    path.glow === "pink" ? "bg-aerith-400/15" : "bg-lifestream-400/15"
                  }`} />
                  <div className="relative">
                    <path.icon className={`mb-4 transition-colors duration-300 ${
                      path.glow === "pink" ? "text-aerith-300/50 group-hover:text-aerith-300" : "text-lifestream-300/50 group-hover:text-lifestream-300"
                    }`} />
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-warm-200 transition-colors duration-300 group-hover:text-aerith-300">
                      {path.name}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-body)] text-xs leading-relaxed text-warm-500/50 transition-colors duration-300 group-hover:text-warm-400/70">
                      {path.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Extension pages */}
        {extensionPages.length > 0 && (
          <div style={{ animation: "fadeUp 0.6s ease-out 1.3s both" }} className="mt-16 flex flex-col items-center">
            <AerithDivider variant="golden" className="w-24" />
            <p className="mt-4 font-[family-name:var(--font-accent)] text-[0.6rem] tracking-[0.15em] uppercase text-warm-500/30">
              花园小径
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              {extensionPages.map((page, i) => (
                <div
                  key={page.href}
                  style={{ animation: `fadeUp 0.4s ease-out ${1.5 + i * 0.1}s both` }}
                >
                  <Link href={page.href} className="group flex flex-col items-center gap-3">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-lily-400/12 bg-lily-400/[0.03] transition-all duration-500 group-hover:border-lily-400/30 group-hover:bg-lily-400/[0.08] group-hover:shadow-[0_0_25px_rgba(250,204,21,0.12)]">
                      <ExtensionIcon className="text-lily-300/50 transition-colors duration-300 group-hover:text-lily-300" />
                    </div>
                    <p className="font-[family-name:var(--font-body)] text-[0.65rem] text-warm-500/40 transition-colors duration-300 group-hover:text-warm-400/70">
                      {page.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom whisper */}
      <div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        style={{ animation: "fadeUp 1s ease-out 2s both" }}
      >
        <p className="font-[family-name:var(--font-display)] text-[0.7rem] italic text-warm-600/25">
          &ldquo;即使在最黑暗的夜晚，花朵依然会绽放&rdquo;
        </p>
      </div>
    </div>
  );
}
