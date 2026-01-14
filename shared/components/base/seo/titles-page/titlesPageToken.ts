import { TitlesPageStylesUI } from "./interface";

export const TITLES_PAGE_STYLES = (isDark: boolean): TitlesPageStylesUI => {
  const titleBColor = "from-primary via-primary to-primary";

  return {
    container:
      "flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4",
    headIconContainer: `p-3 rounded-button border-[3px] backdrop-blur-sm transition-all duration-500 ${
      isDark ? "bg-primary border-white" :  "border-ui-border bg-dark/10"
    }`,
    headIcon: `transition-colors duration-300 ${
      isDark ? "text-white" : "text-primary"
    }`,
    headText: `${isDark  ? "text-white": "text-foreground"}
    font-semibold tracking-[0.2em] text-[16px] md:text-[14px] uppercase`,
    titleA: `${
      isDark ? "text-white" : "text-foreground"
    } text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1] md:leading-[0.9]`,
    titleB: `${
      isDark ? "text-primary" : "text-foreground"
    } text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1] md:leading-[0.9] text-transparent bg-clip-text bg-linear-to-r ${titleBColor}`,
    description: `mt-6 md:text-lg lg:text-xl max-w-4xl  ${
      isDark ? "text-white" : "text-foreground"
    }`,
    divider: `w-24 h-[4px] ${
      isDark ? "bg-accent" : "bg-primary"
    } mt-8 mb-4 rounded-full`,
  };
};
