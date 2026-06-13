"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  function switchLocale(nextLocale: Locale) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center rounded-full bg-surface-muted p-1"
    >
      {routing.locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => switchLocale(item)}
          aria-current={locale === item ? "true" : undefined}
          className={
            locale === item
              ? "rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
              : "rounded-full px-3 py-1.5 text-xs font-medium text-muted transition-opacity hover:opacity-70"
          }
        >
          {t(item)}
        </button>
      ))}
    </div>
  );
}
