import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/hero";
import { ShowcaseSection } from "@/components/showcase";
import { getHomeData } from "@/lib/content/get-home-data";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const homeData = await getHomeData();

  return (
    <main className="bg-background">
      <HeroSection data={homeData.hero} />
      <ShowcaseSection data={homeData.showcase} />
    </main>
  );
}
