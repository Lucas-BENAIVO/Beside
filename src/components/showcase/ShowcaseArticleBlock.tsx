import Link from "next/link";
import type { ShowcaseArticle } from "@/types/home";
import { HeroTags } from "@/components/hero/HeroTags";

type ShowcaseArticleBlockProps = {
  article: ShowcaseArticle;
};

export function ShowcaseArticleBlock({ article }: ShowcaseArticleBlockProps) {
  return (
    <Link
      href={article.href}
      className="group flex h-full flex-col justify-between transition-opacity hover:opacity-80"
    >
      <HeroTags tags={article.tags} />

      <div className="mt-8 flex items-start justify-between gap-6">
        <h2 className="max-w-sm text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em] text-foreground">
          {article.title}
        </h2>

        <div className="mt-2 flex flex-col gap-1.5">
          <span className="size-1.5 rounded-full bg-foreground/25" />
          <span className="size-1.5 rounded-full bg-foreground/25" />
          <span className="size-1.5 rounded-full bg-foreground/25" />
        </div>
      </div>
    </Link>
  );
}
