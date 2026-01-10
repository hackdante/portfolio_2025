"use client";

import { useId, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IconAnimateUI } from "./interface";
import { iconAnimateToken } from "./iconAnimateToken";

export function IconAnimate({
  icon: Icon,
  size,
  primaryColor = iconAnimateToken.colors.primary,
  secondaryColor = iconAnimateToken.colors.secondary,
  strokeWidth = 3,
}: IconAnimateUI) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientId = useId();

  const center = size / 2;
  const radius = size * 0.23;
  const circumference = 2 * Math.PI * radius;

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".ring-element", {
        rotate: 360,
        transformOrigin: "center",
        duration: iconAnimateToken.animations.loopDuration,
        repeat: -1,
        ease: iconAnimateToken.animations.ease,
      });
    },
    { scope: containerRef }
  );

  const onMouseEnter = contextSafe(() => {
    gsap.to(".icon-content", {
      color: secondaryColor,
      filter: `drop-shadow(0px 0px 15px ${secondaryColor})`,
      scale: 1.1,
      duration: iconAnimateToken.animations.hoverDuration,
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(".icon-content", {
      color: "#ffffff",
      filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
      scale: 1,
      duration: iconAnimateToken.animations.hoverDuration,
    });
  });

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center"
    >
      <svg
        className="absolute inset-0 -rotate-90 pointer-events-none"
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>

        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={iconAnimateToken.colors.track}
          strokeWidth={strokeWidth - 1}
          fill="transparent"
        />

        <circle
          className="ring-element"
          cx={center}
          cy={center}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.75}
          strokeLinecap="round"
        />
      </svg>

      <div className="icon-content text-white relative z-10 flex items-center justify-center">
        <Icon size={size * 0.3} />
      </div>
    </div>
  );
}