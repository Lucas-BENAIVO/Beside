import { getTranslations } from "next-intl/server";
import type { HeaderData } from "@/types/navigation";

export async function getHeaderData(): Promise<HeaderData> {
  const t = await getTranslations("header");

  return {
    brand: {
      name: "Beside",
      tagline: t("brandTagline"),
      href: "/",
    },
    navItems: [
      { label: t("nav.features"), href: "/#fonctionnalites" },
      { label: t("nav.mutualInsurance"), href: "/#mutuelles", count: 12 },
      { label: t("nav.companies"), href: "/#entreprises", count: 8 },
      { label: t("nav.contact"), href: "/contact", underlined: true },
    ],
    authActions: [
      { label: t("auth.login"), href: "/connexion", variant: "ghost" },
      { label: t("auth.signup"), href: "/inscription", variant: "primary" },
    ],
  };
}
