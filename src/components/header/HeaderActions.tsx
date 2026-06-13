import Link from "next/link";
import type { AuthAction } from "@/types/navigation";

type HeaderActionsProps = {
  actions: AuthAction[];
};

export function HeaderActions({ actions }: HeaderActionsProps) {
  const ghost = actions.find((action) => action.variant === "ghost");
  const primary = actions.find((action) => action.variant === "primary");

  if (!ghost || !primary) {
    return null;
  }

  return (
    <div className="flex shrink-0 items-center rounded-full bg-surface-muted p-1">
      <Link
        href={ghost.href}
        className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70 sm:px-5"
      >
        {ghost.label}
      </Link>
      <Link
        href={primary.href}
        className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)] sm:px-5"
      >
        {primary.label}
      </Link>
    </div>
  );
}
