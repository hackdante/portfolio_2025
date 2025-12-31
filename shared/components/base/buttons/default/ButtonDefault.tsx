"use client";

import { useRef, useState, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ButtonDefaultUI } from "./interface";
import { 
  BTN_SIZE_MAP, 
  BTN_VARIANT_MAP, 
  TOOLTIP_BASE_CLASSES, 
  TOOLTIP_POSITION_MAP 
} from "./buttonDefaultToken";

export function ButtonDefault({
  children,
  variant = "default",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  type = "button",
  id,
  toolTip,
  tipPosition = "bottom",
}: ButtonDefaultUI) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const internalId = useId();
  const tooltipId = `tooltip-${id || internalId}`;

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleToggle = contextSafe((show: boolean) => {
    if (!toolTip) return;

    setIsVisible(show);

    gsap.to(`#${tooltipId}`, {
      opacity: show ? 1 : 0,
      y: show ? 0 : (tipPosition === "top" ? 5 : -5),
      scale: show ? 1 : 0.9,
      duration: 0.25,
      ease: "back.out(1.7)",
      overwrite: "auto",
    });
  });

  const isDisable = variant === "disable" || isLoading;

  const buttonClasses = `
    relative flex items-center justify-center gap-2 transition-all duration-300 font-medium outline-none
    ${BTN_SIZE_MAP[size]}
    ${BTN_VARIANT_MAP[variant]}
    ${BTN_VARIANT_MAP.hover}
    ${BTN_VARIANT_MAP.active}
    ${BTN_VARIANT_MAP.focus}
    ${fullWidth ? "w-full" : "w-max"}
    ${isDisable ? `${BTN_VARIANT_MAP.disable} cursor-not-allowed` : "cursor-pointer"}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div 
      ref={containerRef} 
      className={`relative inline-block ${fullWidth ? "w-full" : ""}`}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <button
        id={id}
        type={type}
        onClick={onClick}
        disabled={isDisable}
        className={buttonClasses}
        onFocus={() => handleToggle(true)}
        onBlur={() => handleToggle(false)}
        aria-describedby={toolTip ? tooltipId : undefined}
      >
        {isLoading ? (
          <span className="animate-spin border-2 border-current border-t-transparent rounded-full w-4 h-4" aria-hidden="true" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>}
            <span className="truncate">{children}</span>
            {rightIcon && <span className="shrink-0" aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>

      {toolTip && (
        <span
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          aria-hidden={!isVisible}
          className={`
            ${TOOLTIP_BASE_CLASSES} 
            ${TOOLTIP_POSITION_MAP[tipPosition]} 
            opacity-0 scale-90 pointer-events-none
          `.replace(/\s+/g, ' ').trim()}
        >
          {toolTip}
        </span>
      )}
    </div>
  );
}