"use client";

import { SectionWrapperUI } from "./interface";
import { SECTION_BG_STYLES } from "./SectionWrapperToken";

export function SectionWrapper({
  children,
  bgType = "transparent",
  bgColor, 
  id,
  withContainer = false,
  containerRight = true,
}: SectionWrapperUI) {
  
  const styles = SECTION_BG_STYLES[bgType] || SECTION_BG_STYLES.transparent;
  const isTailwindClass = bgColor?.startsWith("bg-");
  const inlineStyles = !isTailwindClass && bgType === "default" && bgColor 
    ? { backgroundColor: bgColor } 
    : {};

  return (
    <section
      id={id}
      style={inlineStyles}
      className={`
        relative 
        w-full 
        overflow-hidden
        transition-colors 
        duration-500 
        ${styles.container}
        ${isTailwindClass ? bgColor : ""} 
      `}
    >
      <div
        className={`
          relative z-10 flex flex-col w-full transition-all duration-500 items-center
          ${withContainer ? "max-w-6xl px-4 sm:px-6 lg:px-8" : "xs:px-6 sm:px-5"}
          ${containerRight ? "ml-auto xxs:w-[83%] xs:w-[88%] sm:w-[90%] md:w-[80%] md:w-[84%] lg:w-[85%] xl:w-[88%] 2xl:w-[90%]"  : "mx-auto w-full"}
        `}
      >
        {children}
      </div>
    </section>
  );
}