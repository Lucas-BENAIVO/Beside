import Image from "next/image";

type ShowcasePortraitProps = {
  src: string;
  alt: string;
};

export function ShowcasePortrait({ src, alt }: ShowcasePortraitProps) {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] overflow-hidden rounded-[2rem] bg-surface-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 60vw, 17rem"
      />

      <div className="absolute right-4 top-4 flex flex-col gap-1.5">
        <span className="size-1.5 rounded-full bg-white/90" />
        <span className="size-1.5 rounded-full bg-white/90" />
        <span className="size-1.5 rounded-full bg-white/90" />
      </div>
    </div>
  );
}
