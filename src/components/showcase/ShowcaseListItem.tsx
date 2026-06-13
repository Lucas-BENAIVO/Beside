import Link from "next/link";
import type { ShowcaseItem } from "@/types/home";
import { ArrowUpRightIcon } from "@/components/icons";

type ShowcaseListItemProps = {
  item: ShowcaseItem;
};

export function ShowcaseListItem({ item }: ShowcaseListItemProps) {
  return (
    <li>
      <Link
        href={item.href}
        className="group flex items-start gap-4 py-6 transition-opacity hover:opacity-80"
      >
        <span className="mt-2 flex flex-col gap-1">
          <span className="size-1 rounded-full bg-foreground/30" />
          <span className="size-1 rounded-full bg-foreground/30" />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <span className="text-sm text-muted">({item.category})</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </div>

        <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </li>
  );
}
