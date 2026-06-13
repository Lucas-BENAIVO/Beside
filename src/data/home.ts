import type { HomeData } from "@/types/home";
import { homeImages } from "@/data/images";

export const homeData: HomeData = {
  hero: {
    tags: [
      { label: "Santé" },
      { label: "Organisation" },
      { label: "Bien-être" },
    ],
    headline: "VOUS AIDEZ VOTRE PROCHE. ON VOUS AIDE À TENIR.",
    highlightedWords: ["PROCHE", "TENIR"],
    description:
      "Beside centralise médicaments, rendez-vous et alertes pour les aidants qui jonglent avec le travail, la famille et la santé d'un parent.",
    ctas: [
      { label: "Commencer gratuitement", href: "/inscription", variant: "primary" },
      { label: "Découvrir", href: "/#fonctionnalites", variant: "secondary" },
    ],
    mainImage: homeImages.hero.main,
    mainStat: {
      value: "12k",
      description: "Aidants accompagnés chaque mois",
    },
    imageCaption: "Moins de stress, plus de sérénité",
    side: {
      label: "Parcours aidant",
      exploreLabel: "Explorer les aides",
      exploreHref: "/#aides",
      image: homeImages.hero.side,
      stat: {
        value: "17",
        description: "Rappels médicaments gérés en moyenne par semaine",
      },
      tags: [{ label: "Prévention" }, { label: "Autonomie" }],
    },
  },
  showcase: {
    items: [
      {
        title: "Suivi médicaments",
        category: "Rappels",
        description:
          "Ne manquez plus une prise ni un renouvellement d'ordonnance.",
        href: "/#medicaments",
      },
      {
        title: "Rendez-vous",
        category: "Organisation",
        description:
          "Calendrier partagé avec la famille pour les consultations.",
        href: "/#rendez-vous",
      },
      {
        title: "Réseau familial",
        category: "Partage",
        description:
          "Répartissez les tâches et évitez de tout porter seul.",
        href: "/#famille",
      },
    ],
    portrait: homeImages.showcase.portrait,
    article: {
      tags: [{ label: "Prévention" }, { label: "Aidants" }],
      title: "COMMENT ÉVITER L'ÉPUISEMENT QUAND ON EST AIDANT FAMILIAL",
      href: "/blog/epuisement-aidant",
    },
  },
};
