import type { ShowcaseItem } from "@/types/home";
import { ShowcaseListItem } from "./ShowcaseListItem";

type ShowcaseListProps = {
  items: ShowcaseItem[];
};

export function ShowcaseList({ items }: ShowcaseListProps) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <ShowcaseListItem key={item.href} item={item} />
      ))}
    </ul>
  );
}
