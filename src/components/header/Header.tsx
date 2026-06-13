import type { HeaderData } from "@/types/navigation";
import { HeaderActions } from "./HeaderActions";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

type HeaderProps = {
  data: HeaderData;
};

export function Header({ data }: HeaderProps) {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-6 lg:px-8">
        <HeaderLogo
          name={data.brand.name}
          tagline={data.brand.tagline}
          href={data.brand.href}
        />

        <div className="hidden flex-1 justify-center lg:flex">
          <HeaderNav items={data.navItems} />
        </div>

        <HeaderActions actions={data.authActions} />
      </div>
    </header>
  );
}
