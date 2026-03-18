"use client";

import { cn } from "@/lib/cn";

interface MessageBubbleProps {
  text: string;
  from: "aerith" | "user";
}

export function MessageBubble({ text, from }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[280px] rounded-xl px-4 py-3 text-sm leading-relaxed",
        from === "aerith"
          ? "self-start bg-aerith-400/10 border border-aerith-300/15 text-warm-200"
          : "self-end bg-warm-100/5 border border-warm-300/10 text-warm-300"
      )}
    >
      {from === "aerith" && (
        <p className="mb-1 font-[family-name:var(--font-accent)] text-[0.6rem] text-aerith-300/50">
          AERITH
        </p>
      )}
      <p className="font-[family-name:var(--font-body)]">{text}</p>
    </div>
  );
}
