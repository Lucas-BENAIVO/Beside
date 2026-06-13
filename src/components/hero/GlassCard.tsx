import { Link } from "@/i18n/navigation";
import type { GlassStat } from "@/types/home";
import { ArrowUpRightIcon } from "@/components/icons";

type GlassCardProps = {
  stat: GlassStat;
  href?: string;
  className?: string;
};

export function GlassCard({ stat, href = "#", className }: GlassCardProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-start gap-3 rounded-[1.25rem] border border-white/70 bg-white/55 px-4 py-3 backdrop-blur-md transition-opacity hover:opacity-90 ${className ?? ""}`}
    >
      <div>
        <p className="text-2xl font-semibold leading-none text-foreground">
          {stat.value}
        </p>
        <p className="mt-2 max-w-[11rem] text-sm leading-snug text-foreground/75">
          {stat.description}
        </p>
      </div>
      <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-foreground/70" />
    </Link>
  );
}
