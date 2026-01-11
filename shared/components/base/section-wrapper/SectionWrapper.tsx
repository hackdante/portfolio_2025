"use client";

import { SectionWrapperUI } from "./interface";
import { SECTION_BG_STYLES } from "./SectionWrapperToken";

export function SectionWrapper({
  children,
  bgType,
  bgColor,
  id,
  withContainer = false,
}: SectionWrapperUI) {
  const currentType = bgType || "transparent";
  const styles = SECTION_BG_STYLES[currentType];

  const inlineStyles =
    currentType === "default" && bgColor ? { backgroundColor: bgColor } : {};

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
       ease-(--ease-standard)
        ${styles.container}
      `}
    >
      <div
        className={`
          relative 
          z-10 
          flex 
          flex-col 
          items-center
          w-full
          ${withContainer 
            ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
            : "px-0"
          }
        `}
      >
        {children}
      </div>
    </section>
  );
}