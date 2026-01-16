"use client";

import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SpeechBalloonUI } from "./interface";

gsap.registerPlugin(TextPlugin);

export function SpeechBalloon({
  currentConfig,
  tokens,
  idleMessages,
  position = "top",
}: SpeechBalloonUI) {

  const [idleText, setIdleText] = useState<string>("");
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayText = currentConfig?.message ?? idleText;
  const Icon = currentConfig?.icon;

  useEffect(() => {
    if (currentConfig?.message) return;

    const rotate = () => {
      const randomMsg =
        idleMessages[Math.floor(Math.random() * idleMessages.length)] || "...";
      setIdleText(randomMsg);
    };

    rotate(); 
    const interval = setInterval(rotate, tokens.animation.idleDelay);

    return () => clearInterval(interval);
  }, [currentConfig, idleMessages, tokens.animation.idleDelay]);


  useGSAP(() => {
    if (!displayText) return;

    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0, y: position === "top" ? 10 : -10 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: tokens.animation.duration,
        ease: "back.out(2)",
      }
    );

    tl.fromTo(
      textRef.current,
      { text: "" },
      {
        text: displayText,
        duration: Math.min(displayText.length * tokens.animation.stagger, 0.8),
        ease: "none",
      },
      "-=0.2"
    );
  }, [displayText]); 

  return (
    <div
      ref={containerRef}
      onClick={() => currentConfig?.action?.()}
      className="relative flex items-center gap-3 transition-all duration-300 pointer-events-auto"
      style={{
        backgroundColor: tokens.colors.background,
        color: tokens.colors.text,
        borderRadius: tokens.geometry.borderRadius,
        padding: tokens.geometry.padding,
        maxWidth: tokens.geometry.maxWidth,
        border: `1px solid ${
          currentConfig ? tokens.colors.accent : tokens.colors.border
        }`,
        cursor: currentConfig?.action ? "pointer" : "default",
      }}
      role="status"
      aria-live="polite"
    >
      {Icon && (
        <div
          className="shrink-0"
          style={{
            color: currentConfig ? tokens.colors.accent : tokens.colors.text,
          }}
        >
          <Icon size={18} />
        </div>
      )}

      <p
        ref={textRef}
        className="text-[14] font-stretch-normal text-center leading-tight select-none"
      />

      <span
        className="absolute w-0 h-0 border-8 border-transparent"
        style={{
          bottom: position === "top" ? "-1rem" : "auto",
          top: position === "bottom" ? "-1rem" : "auto",
          left: "50%",
          transform: "translateX(-50%)",
          borderTopColor:
            position === "top"
              ? currentConfig
                ? tokens.colors.accent
                : tokens.colors.border
              : "transparent",
          borderBottomColor:
            position === "bottom"
              ? currentConfig
                ? tokens.colors.accent
                : tokens.colors.border
              : "transparent",
        }}
      />
    </div>
  );
}
