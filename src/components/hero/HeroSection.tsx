import type { HeroData } from "@/types/home";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { HeroSide } from "./HeroSide";

type HeroSectionProps = {
  data: HeroData;
};

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-8 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-10">
        <div className="lg:col-span-4 lg:pt-2">
          <HeroContent data={data} />
        </div>

        <div className="lg:col-span-5">
          <HeroImage data={data} />
        </div>

        <div className="lg:col-span-3">
          <HeroSide data={data.side} />
        </div>
      </div>
    </section>
  );
}
