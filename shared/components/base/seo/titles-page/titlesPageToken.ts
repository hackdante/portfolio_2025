import { TitlesPageStylesUI } from "./interface";

export const TITLES_PAGE_STYLES = (isDark: boolean): TitlesPageStylesUI => {
  const textColorA = isDark ? "text-[#F5F5F7]" : "text-ui-foreground";

  const textColorDesc = isDark ? "text-white/60" : "text-ui-surface-60";

  const titleBColor = isDark
    ? "from-[#00F0FF] via-[#66F6FF] to-[#00F0FF]"
    : "from-ui-primary via-ui-primary/80 to-ui-primary";

  return {
    container:
      "flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4",
    headIconContainer: `p-2 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
      isDark
        ? "bg-white/10 border-white/10"
        : "bg-ui-primary/5 border-ui-primary/15"
    }`,
    headText: `${
      isDark ? "text-white/87" : "text-ui-foreground/80"
    } font-bold tracking-[0.4em] text-[10px] md:text-[12px] uppercase`,
    titleA: `${textColorA} text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1] md:leading-[0.9]`,
    titleB: `text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1] md:leading-[0.9] text-transparent bg-clip-text bg-linear-to-r ${titleBColor}`,
    description: `mt-6 md:text-lg lg:text-xl max-w-3xl leading-relaxed ${textColorDesc}`,
    divider: `w-24 h-[4px] ${
      isDark ? "bg-[#00F0FF]/60" : "bg-ui-primary/40"
    } mt-8 mb-4 rounded-full`,
  };
};
