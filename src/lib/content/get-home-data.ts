import { getTranslations } from "next-intl/server";
import { homeImages } from "@/data/images";
import type { HomeData } from "@/types/home";

export async function getHomeData(): Promise<HomeData> {
  const t = await getTranslations("home");

  return {
    hero: {
      tags: [
        { label: t("hero.tags.health") },
        { label: t("hero.tags.organization") },
        { label: t("hero.tags.wellbeing") },
      ],
      headline: t("hero.headline"),
      highlightedWords: t.raw("hero.highlightedWords") as string[],
      description: t("hero.description"),
      ctas: [
        {
          label: t("hero.ctaPrimary"),
          href: "/inscription",
          variant: "primary",
        },
        {
          label: t("hero.ctaSecondary"),
          href: "/#fonctionnalites",
          variant: "secondary",
        },
      ],
      mainImage: {
        ...homeImages.hero.main,
        alt: t("images.mainAlt"),
      },
      mainStat: {
        value: "12k",
        description: t("hero.mainStat"),
      },
      imageCaption: t("hero.imageCaption"),
      side: {
        label: t("hero.sideLabel"),
        exploreLabel: t("hero.exploreLabel"),
        exploreHref: "/#aides",
        image: {
          ...homeImages.hero.side,
          alt: t("images.sideAlt"),
        },
        stat: {
          value: "17",
          description: t("hero.sideStat"),
        },
        tags: [
          { label: t("hero.sideTags.prevention") },
          { label: t("hero.sideTags.autonomy") },
        ],
      },
      emailAria: t("hero.emailAria"),
      scrollAria: t("hero.scrollAria"),
    },
    showcase: {
      items: [
        {
          title: t("showcase.items.medications.title"),
          category: t("showcase.items.medications.category"),
          description: t("showcase.items.medications.description"),
          href: "/#medicaments",
        },
        {
          title: t("showcase.items.appointments.title"),
          category: t("showcase.items.appointments.category"),
          description: t("showcase.items.appointments.description"),
          href: "/#rendez-vous",
        },
        {
          title: t("showcase.items.family.title"),
          category: t("showcase.items.family.category"),
          description: t("showcase.items.family.description"),
          href: "/#famille",
        },
      ],
      portrait: {
        ...homeImages.showcase.portrait,
        alt: t("images.portraitAlt"),
      },
      article: {
        tags: [
          { label: t("showcase.article.tags.prevention") },
          { label: t("showcase.article.tags.caregivers") },
        ],
        title: t("showcase.article.title"),
        href: "/blog/epuisement-aidant",
      },
    },
  };
}
