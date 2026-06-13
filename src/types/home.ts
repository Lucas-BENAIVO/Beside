export type HeroTag = {
  label: string;
};

export type HeroCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type GlassStat = {
  value: string;
  description: string;
};

export type HeroSideBlock = {
  label: string;
  exploreLabel: string;
  exploreHref: string;
  image: {
    src: string;
    alt: string;
  };
  stat: GlassStat;
  tags: HeroTag[];
};

export type HeroData = {
  tags: HeroTag[];
  headline: string;
  highlightedWords: string[];
  description: string;
  ctas: HeroCta[];
  mainImage: {
    src: string;
    alt: string;
  };
  mainStat: GlassStat;
  imageCaption: string;
  side: HeroSideBlock;
  emailAria: string;
  scrollAria: string;
};

export type ShowcaseItem = {
  title: string;
  category: string;
  description: string;
  href: string;
};

export type ShowcaseArticle = {
  tags: HeroTag[];
  title: string;
  href: string;
};

export type ShowcaseData = {
  items: ShowcaseItem[];
  portrait: {
    src: string;
    alt: string;
  };
  article: ShowcaseArticle;
};

export type HomeData = {
  hero: HeroData;
  showcase: ShowcaseData;
};
