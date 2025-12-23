import { HeroContentUI, HOME_DATA, WebMetaDataUI } from "@/core/web-page";

export const HomeController = {
  getMetadata: (): WebMetaDataUI => {
    return HOME_DATA.metadata;
  },

  getHeroData: (): HeroContentUI => {
    return HOME_DATA.hero;
  }
};