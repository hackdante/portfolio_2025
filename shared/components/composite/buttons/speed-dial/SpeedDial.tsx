"use client";

import { JSX, useState, useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaBars } from "react-icons/fa6";
import { IconDefault } from "@/shared/components/base";
import { SpeedDialUI } from "./interface";
import { SD_ANIMATION_TOKENS, SD_LAYOUT_TOKENS } from "./speedDialToken";

export function SpeedDial({
  menu,
  variant,
  direction,
  radius = SD_LAYOUT_TOKENS.defaultRadius,
  tooltipPosition = "right",
}: SpeedDialUI): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getCoordinates = useCallback(
    (index: number) => {
      if (variant === "radial") {
        const startAngles = { top: 180, bottom: 0, left: 90, right: 270 };
        const angleStep = 180 / (menu.length - 1 || 1);
        const currentAngle =
          (startAngles[direction] + index * angleStep) * (Math.PI / 180);
        return {
          x: Math.cos(currentAngle) * radius,
          y: Math.sin(currentAngle) * -radius,
        };
      }
      const distance = (index + 1) * SD_LAYOUT_TOKENS.linearSpacing;
      const moves = {
        top: { x: 0, y: -distance },
        bottom: { x: 0, y: distance },
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 },
      };
      return moves[direction] || { x: 0, y: 0 };
    },
    [variant, direction, radius, menu.length]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useGSAP(
    () => {
      gsap.killTweensOf(".sd-item-wrapper");
      gsap.killTweensOf(".sd-main-trigger");

      if (isOpen) {
        menu.forEach((item, index) => {
          const { x, y } = getCoordinates(index);
          gsap.to(`#${item.id}-wrapper`, {
            x,
            y,
            autoAlpha: 1,
            scale: 1,
            duration: SD_ANIMATION_TOKENS.durationIn,
            ease: SD_ANIMATION_TOKENS.easeIn,
            delay: index * SD_ANIMATION_TOKENS.stagger,
            overwrite: true,
          });
        });
        gsap.to(".sd-main-trigger", {
          rotate: SD_ANIMATION_TOKENS.mainIconRotate,
          duration: 0.3,
          overwrite: true,
        });
      } else {
        gsap.to(".sd-item-wrapper", {
          x: 0,
          y: 0,
          autoAlpha: 0,
          scale: 0,
          duration: SD_ANIMATION_TOKENS.durationOut,
          ease: SD_ANIMATION_TOKENS.easeOut,
          overwrite: true,
          stagger: 0.02,
        });
        gsap.to(".sd-main-trigger", {
          rotate: 0,
          duration: 0.3,
          overwrite: true,
        });
      }
    },
    { scope: containerRef, dependencies: [isOpen, getCoordinates] }
  );

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${SD_LAYOUT_TOKENS.zIndex}`}
    >
      <div
        className={`absolute flex items-center justify-center ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {menu.map((item) => (
          <div
            id={`${item.id}-wrapper`}
            key={item.id}
            className="sd-item-wrapper absolute opacity-0 invisible scale-0"
            onClick={(e) => {
              e.stopPropagation();
              if (item.action) item.action();
              setIsOpen(false);
            }}
          >
            <div className="rounded-full bg-white dark:bg-neutral-900 shadow-md">
              <IconDefault
                {...item}
                size="md"
                action={() => {}}
                tooltipPosition={tooltipPosition}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="sd-main-trigger relative z-50 shadow-xl rounded-full bg-white dark:bg-neutral-900">
        <IconDefault
          id="sd-main-trigger-icon"
          icon={FaBars}
          type="primary"
          size="lg"
          toolTip={isOpen ? undefined : "Menú"}
          action={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}
