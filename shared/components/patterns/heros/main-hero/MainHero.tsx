"use client";

import { useState, useMemo } from "react";
import {
  FaUserPlus,
  FaPersonWalking,
  FaHandshake,
  FaStar,
} from "react-icons/fa6";

import { SpeechBalloon } from "@/shared/components/composite";
import { MainScene3D } from "@/shared/components/patterns";
import { CharacterAnimationType } from "@/shared/types";

import {
  SPEECH_BALLOON_TOKEN_DEFAULT,
  SPEECH_IDLE_MESSAGES_DEFAULT,
} from "@/shared/components/composite";
import { SpeechBalloonActionUI } from "@/shared/components/composite/buttons/speech-balloon/interface";

export function MainHero() {
  const [currentAnimation, setCurrentAnimation] =
    useState<CharacterAnimationType>("000_Awake");
  const [activeConfigIndex, setActiveConfigIndex] = useState<number | null>(
    null
  );

  const SPEECH_ACTIONS = useMemo<SpeechBalloonActionUI[]>(
    () => [
      {
        section: "intro",
        icon: FaUserPlus,
        message: "¡Hola! Soy tu guía en este portafolio.",
        type: "secondary",
        action: () => setCurrentAnimation("000_Awake"),
      },
      {
        section: "greeting",
        icon: FaHandshake,
        message: "¿Quieres ver un saludo?",
        type: "secondary",
        action: () => setCurrentAnimation("Bow"),
      },
      {
        section: "explore",
        icon: FaPersonWalking,
        message: "¡Acompáñame a explorar mis proyectos!",
        type: "secondary",
        action: () => setCurrentAnimation("Walking"),
      },
      {
        section: "skills",
        icon: FaStar,
        message: "¡Mira este movimiento especial!",
        type: "secondary",
        action: () => setCurrentAnimation("Moon_walk"),
      },
    ],
    []
  );

  const currentSpeechConfig = useMemo(
    () =>
      activeConfigIndex !== null
        ? SPEECH_ACTIONS[activeConfigIndex]
        : undefined,
    [activeConfigIndex, SPEECH_ACTIONS]
  );

  const handleBalloonClick = () => {
    const nextIndex =
      activeConfigIndex === null
        ? 0
        : (activeConfigIndex + 1) % SPEECH_ACTIONS.length;
    setActiveConfigIndex(nextIndex);
    SPEECH_ACTIONS[nextIndex].action?.();
  };

  return (
    <>
      <section
        className={`relative 
      w-[100px] h-[300px] md:w-[200px] md:h-[400px] lg:w-[300px] lg:h-[600px]`}
      >
        <div className="absolute inset-0 z-10">
          <MainScene3D animation={currentAnimation} />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full h-full pointer-events-none">
          <div className="absolute -top-18 xs:-top-60 sm:-top-35 md:-top-18 pointer-events-auto">
            <SpeechBalloon
              currentConfig={
                currentSpeechConfig
                  ? {
                      ...currentSpeechConfig,
                      action: handleBalloonClick,
                    }
                  : undefined
              }
              tokens={SPEECH_BALLOON_TOKEN_DEFAULT}
              idleMessages={SPEECH_IDLE_MESSAGES_DEFAULT}
              position="top"
            />
          </div>
        </div>
      </section>
    </>
  );
}
