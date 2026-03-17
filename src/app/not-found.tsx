import Image from "next/image";
import Link from "next/link";
import { AerithButton } from "@/components/ui/AerithButton";
import { FloatingPetals } from "@/components/effects/FloatingPetals";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-deep-950 px-6 text-center">
      <FloatingPetals density={8} />

      <div className="relative z-10">
        <Image
          src="/output/aerith_emotion_dizzy_v1.png"
          alt="Aerith 迷路了"
          width={180}
          height={180}
          className="mx-auto mb-8 h-auto w-40"
        />

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-warm-100">
          迷路了？
        </h1>
        <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-warm-400">
          这里什么都没有...让我带你回去吧
        </p>

        <div className="mt-8">
          <Link href="/">
            <AerithButton variant="primary">回到首页</AerithButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
