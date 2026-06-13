import { homeData } from "@/data/home";
import { HeroSection } from "@/components/hero";
import { ShowcaseSection } from "@/components/showcase";

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection data={homeData.hero} />
      <ShowcaseSection data={homeData.showcase} />
    </main>
  );
}
