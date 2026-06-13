export type NavItem = {
  label: string;
  href: string;
  count?: number;
  underlined?: boolean;
};

export type AuthAction = {
  label: string;
  href: string;
  variant: "ghost" | "primary";
};

export type HeaderData = {
  brand: {
    name: string;
    tagline: string;
    href: string;
  };
  navItems: NavItem[];
  authActions: AuthAction[];
};
