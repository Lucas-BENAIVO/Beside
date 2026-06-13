import Image from "next/image";
import Link from "next/link";
import type { HeroSideBlock } from "@/types/home";
import { ArrowUpRightIcon } from "@/components/icons";
import { GlassCard } from "./GlassCard";
import { HeroTags } from "./HeroTags";

type HeroSideProps = {
  data: HeroSideBlock;
};

export function HeroSide({ data }: HeroSideProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-5">
      <div className="flex items-start justify-between gap-4">
        <p className="max-w-[9rem] text-sm leading-snug text-muted">
          {data.label}
        </p>
        <Link
          href={data.exploreHref}
          className="group flex shrink-0 flex-col items-center gap-2 text-center"
        >
          <span className="flex size-16 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground/20">
            <span className="flex size-10 items-center justify-center rounded-full bg-surface-muted">
              <ArrowUpRightIcon className="size-4 text-foreground" />
            </span>
          </span>
          <span className="max-w-[7rem] text-xs leading-snug text-muted">
            {data.exploreLabel}
          </span>
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-[15rem] pb-8">
        <HeroTags tags={data.tags} />

        <div className="relative mt-4 aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface-muted">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 80vw, 15rem"
          />
        </div>

        <GlassCard
          stat={data.stat}
          className="absolute bottom-0 left-0 right-0"
        />
      </div>
    </div>
  );
}
