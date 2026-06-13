import type { HeroTag } from "@/types/home";

type HeroTagsProps = {
  tags: HeroTag[];
};

export function HeroTags({ tags }: HeroTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag.label}
          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
        >
          {tag.label}
        </li>
      ))}
    </ul>
  );
}
