import type { ShowcaseData } from "@/types/home";
import { ShowcaseArticleBlock } from "./ShowcaseArticleBlock";
import { ShowcaseList } from "./ShowcaseList";
import { ShowcasePortrait } from "./ShowcasePortrait";

type ShowcaseSectionProps = {
  data: ShowcaseData;
};

export function ShowcaseSection({ data }: ShowcaseSectionProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-end gap-8 px-5 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-20">
        <div className="lg:col-span-5">
          <ShowcaseList items={data.items} />
        </div>

        <div className="flex justify-center lg:col-span-3">
          <ShowcasePortrait src={data.portrait.src} alt={data.portrait.alt} />
        </div>

        <div className="pb-2 lg:col-span-4">
          <ShowcaseArticleBlock article={data.article} />
        </div>
      </div>
    </section>
  );
}
