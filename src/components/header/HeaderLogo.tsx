import Image from "next/image";
import Link from "next/link";

type HeaderLogoProps = {
  name: string;
  tagline: string;
  href: string;
};

export function HeaderLogo({ name, tagline, href }: HeaderLogoProps) {
  return (
    <Link href={href} className="group flex shrink-0 items-start gap-2">
      <Image
        src="/logo.png"
        alt=""
        width={36}
        height={24}
        className="mt-0.5 h-6 w-auto object-contain"
        priority
      />
      <div className="flex flex-col leading-none">
        <span className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground">
          {name}
        </span>
        <span className="mt-1.5 text-[0.7rem] font-normal text-muted">
          {tagline}
        </span>
      </div>
    </Link>
  );
}
