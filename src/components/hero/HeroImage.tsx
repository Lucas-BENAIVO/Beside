import Image from "next/image";
import type { HeroData } from "@/types/home";
import { GlassCard } from "./GlassCard";

type HeroImageProps = {
  data: Pick<HeroData, "mainImage" | "mainStat" | "imageCaption">;
};

export function HeroImage({ data }: HeroImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-surface-muted">
        <Image
          src={data.mainImage.src}
          alt={data.mainImage.alt}
          fill
          className="object-cover object-[center_20%]"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
      </div>

      <GlassCard
        stat={data.mainStat}
        className="absolute right-4 top-6 sm:right-6 sm:top-8"
      />

      <p className="absolute bottom-6 left-6 text-sm text-white/95 drop-shadow-sm">
        # {data.imageCaption}
      </p>
    </div>
  );
}
