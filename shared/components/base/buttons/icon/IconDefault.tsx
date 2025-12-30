"use client";

import { JSX, useState } from "react";
import {
  ICON_SIZE_MAP,
  STATUS_CLASS_MAP,
  TOOLTIP_POSITION_MAP,
  TOOLTIP_ARROW_MAP,
} from "./iconDefaultToken";
import { IconDefaultUI } from "./interface";

export function IconDefault({
  icon: Icon,
  toolTip,
  type,
  size = "md",
  action,
  id,
  tooltipPosition = "bottom",
}: IconDefaultUI): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const { container: containerSize, icon: iconSize } = ICON_SIZE_MAP[size];

  const hasAction = !!action;
  const isInteractive = hasAction && type !== "disable" && type !== "loading";

  const handleAction = () => {
    if (!isInteractive || !action) return;
    setIsHovered(false);
    action();
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => isInteractive && toolTip && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        id={id}
        onClick={handleAction}
        type="button"
        disabled={!isInteractive}
        aria-label={toolTip || "icon-button"}
        aria-describedby={toolTip && id ? `${id}-tooltip` : undefined}
        style={{ width: containerSize, height: containerSize }}
        className={`
          flex items-center justify-center rounded-full
          transition-all duration-300 ease-in-out
          focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ui-primary focus-visible:ring-offset-2
          ${
            isInteractive
              ? "cursor-pointer hover:scale-110 active:scale-95 shadow-sm"
              : "cursor-default pointer-events-none opacity-80"
          }
          ${STATUS_CLASS_MAP[type]}
        `}
      >
        <Icon
          size={iconSize}
          className={`drop-shadow-sm ${
            type === "loading" ? "animate-spin" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {toolTip && isHovered && isInteractive && (
        <span
          id={id ? `${id}-tooltip` : undefined}
          role="tooltip"
          className={`
            absolute px-3 py-1.5 whitespace-nowrap
            bg-ui-foreground text-ui-background
            text-[10px] font-bold uppercase tracking-widest
            rounded-md shadow-xl pointer-events-none z-100
            opacity-0 scale-90 animate-in fade-in zoom-in duration-200 fill-mode-forwards
            ${TOOLTIP_POSITION_MAP[tooltipPosition]}
          `}
          style={{ opacity: 1, transform: "scale(1)" }}
        >
          {toolTip}
          <span
            className={`absolute border-[6px] border-transparent ${TOOLTIP_ARROW_MAP[tooltipPosition]}`}
            aria-hidden="true"
          />
        </span>
      )}
    </div>
  );
}
