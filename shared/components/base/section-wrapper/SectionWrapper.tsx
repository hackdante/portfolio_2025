import { SectionWrapperUI } from "./interface";

export function SectionWrapper({
  children,
  fullHeight = false,
  id,
}: SectionWrapperUI) {
  return (
    <section
      id={id}
      className={`
        w-full 
        mx-auto 
        relative
        overflow-hidden
        ${fullHeight ? "min-h-dvh" : "min-h-fit"}
      `}
    >
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
}
