import { HomeController } from "@/core/web-page";
import { MainHero } from "@/shared/componets/patterns";

export default function WebHomePage() {
  const heroData = HomeController.getHeroData();

  return (
    <main>
      <MainHero data={heroData} />
    </main>
  );
}
