import { Link } from "@/i18n/navigation";
import type { NavItem } from "@/types/navigation";

type HeaderNavLinkProps = {
  item: NavItem;
};

export function HeaderNavLink({ item }: HeaderNavLinkProps) {
  return (
    <Link
      href={item.href}
      className="inline-flex items-baseline gap-1 text-[0.9375rem] font-medium text-foreground transition-opacity hover:opacity-70"
    >
      <span className={item.underlined ? "underline decoration-foreground/80 underline-offset-4" : ""}>
        {item.label}
      </span>
      {item.count !== undefined && (
        <span className="text-[0.8125rem] font-normal text-foreground/70">
          [{String(item.count).padStart(2, "0")}]
        </span>
      )}
    </Link>
  );
}
