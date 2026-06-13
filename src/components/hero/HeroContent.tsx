import Link from "next/link";
import type { HeroData } from "@/types/home";
import { HeroTags } from "./HeroTags";

type HeroContentProps = {
  data: Pick<
    HeroData,
    "tags" | "headline" | "highlightedWords" | "description" | "ctas"
  >;
};

function renderHeadline(headline: string, highlightedWords: string[]) {
  const words = headline.split(" ");

  return words.map((word, index) => {
    const cleanWord = word.replace(/[.,!?]/g, "");
    const isHighlighted = highlightedWords.includes(cleanWord);

    return (
      <span key={`${word}-${index}`}>
        <span
          className={
            isHighlighted
              ? "rounded-lg bg-surface-muted px-1.5 py-0.5"
              : undefined
          }
        >
          {word}
        </span>
        {index < words.length - 1 ? " " : ""}
      </span>
    );
  });
}

export function HeroContent({ data }: HeroContentProps) {
  return (
    <div className="flex flex-col justify-center">
      <HeroTags tags={data.tags} />

      <h1 className="mt-6 max-w-md text-[clamp(2rem,4vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-foreground">
        {renderHeadline(data.headline, data.highlightedWords)}
      </h1>

      <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
        {data.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {data.ctas.map((cta) => (
          <Link
            key={cta.href}
            href={cta.href}
            className={
              cta.variant === "primary"
                ? "rounded-full bg-accent px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                : "rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
            }
          >
            {cta.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          aria-label="Recevoir des conseils par e-mail"
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/20 hover:text-foreground"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
            <path
              d="M3 6.5L10 11.5L17 6.5M4 15H16C16.5523 15 17 14.5523 17 14V6C17 5.44772 16.5523 5 16 5H4C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Défiler vers le bas"
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/20 hover:text-foreground"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
            <path
              d="M10 4V16M10 16L6 12M10 16L14 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
