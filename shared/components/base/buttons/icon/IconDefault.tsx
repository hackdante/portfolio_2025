"use client";

import { JSX } from "react";

import { ICON_SIZE_MAP, STATUS_CLASS_MAP, TOOLTIP_POSITION_MAP, TOOLTIP_ARROW_MAP } from "./iconDefaultToken";
import { IconDefaultUI } from "./interface";

export function IconDefault({
  icon: Icon,
  toolTip,
  type,
  size,
  action,
  id,
  tooltipPosition = "top",
}: IconDefaultUI): JSX.Element {
  const { container: containerSize, icon: iconSize } = ICON_SIZE_MAP[size];
  const isInteractive = type !== "disable" && type !== "loading";

  return (
    <div className="group relative flex items-center justify-center">
      <button
        id={id}
        onClick={isInteractive ? action : undefined}
        type="button"
        disabled={!isInteractive}
        aria-label={toolTip}
        aria-describedby={`${id}-tooltip`}
        style={{ width: containerSize, height: containerSize }}
        className={`
          flex items-center justify-center rounded-full
          transition-all duration-300 ease-in-out
          focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ui-primary focus-visible:ring-offset-2
          ${isInteractive ? "cursor-pointer hover:scale-110 active:scale-95" : "cursor-default"}
          ${STATUS_CLASS_MAP[type]}
        `}
      >
        <Icon 
          size={iconSize} 
          className={`drop-shadow-sm pointer-events-none ${type === "loading" ? "animate-spin" : ""}`} 
          aria-hidden="true" 
        />
      </button>

      <span
        id={`${id}-tooltip`}
        role="tooltip"
        className={`
          absolute px-3 py-1.5 whitespace-nowrap
          bg-ui-foreground text-ui-background
          text-[10px] font-bold uppercase tracking-widest
          rounded-md shadow-xl pointer-events-none z-50
          opacity-0 scale-90 transition-all duration-200 ease-out
          group-hover:opacity-100 group-hover:scale-100
          group-focus-within:opacity-100 group-focus-within:scale-100
          ${TOOLTIP_POSITION_MAP[tooltipPosition]}
        `}
      >
        {toolTip}
        <span 
          className={`absolute border-6 border-transparent ${TOOLTIP_ARROW_MAP[tooltipPosition]}`} 
          aria-hidden="true"
        />
      </span>
    </div>
  );
}