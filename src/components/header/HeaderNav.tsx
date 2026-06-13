import type { NavItem } from "@/types/navigation";
import { HeaderNavLink } from "./HeaderNavLink";

type HeaderNavProps = {
  items: NavItem[];
};

export function HeaderNav({ items }: HeaderNavProps) {
  return (
    <nav aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center gap-9 xl:gap-11">
        {items.map((item) => (
          <li key={item.href}>
            <HeaderNavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
