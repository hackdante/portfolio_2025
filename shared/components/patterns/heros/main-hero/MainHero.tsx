"use client";

import { useState } from "react";
import { 
  FaUserPlus, 
  FaPersonWalking, 
  FaPersonRunning, 
  FaArrowPointer, 
  FaHandFist, 
  FaHandshake, 
  FaStar 
} from "react-icons/fa6";

import { SpeedDial } from "@/shared/components/composite";
import { IconDefaultUI } from "@/shared/components/base";
import { CharacterAnimationType } from "@/shared/types";
import { MainScene3D } from "@/shared/components/patterns";


export function MainHero() {
  const [currentAnimation, setCurrentAnimation] = useState<CharacterAnimationType>("000_Awake");

  const CHARACTER_ANIMATION_MENU: Omit<IconDefaultUI, "size">[] = [
    {
      id: "Awake",
      icon: FaUserPlus,
      toolTip: "De pie",
      type: "secondary",
      action: () => setCurrentAnimation("000_Awake"),
    },
    {
      id: "Bow",
      icon: FaHandshake,
      toolTip: "Saludar",
      type: "secondary",
      action: () => setCurrentAnimation("Bow"),
    },
    {
      id: "Walking",
      icon: FaPersonWalking,
      toolTip: "Caminar",
      type: "secondary",
      action: () => setCurrentAnimation("Walking"),
    },
    {
      id: "Runner",
      icon: FaPersonRunning,
      toolTip: "Correr",
      type: "secondary",
      action: () => setCurrentAnimation("Runner"),
    },
    {
      id: "Moon_walk",
      icon: FaStar,
      toolTip: "Baile Pop",
      type: "secondary",
      action: () => setCurrentAnimation("Moon_walk"),
    },
    {
      id: "Jog_sign",
      icon: FaArrowPointer,
      toolTip: "Señalar",
      type: "secondary",
      action: () => setCurrentAnimation("Jog_sign"),
    },
    {
      id: "Ouch_punch",
      icon: FaHandFist,
      toolTip: "Golpe",
      type: "secondary",
      action: () => setCurrentAnimation("Ouch_punch"),
    },
  ];

  return (
    <section className="relative w-full h-[300px] overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <MainScene3D animation={currentAnimation} />
      </div>

      <div className="flex flex-col items-center w-full h-full z-10 pointer-events-none">
        <div className="absolute bottom-4 pointer-events-auto">
          <SpeedDial
            menu={CHARACTER_ANIMATION_MENU}
            variant="radial"
            direction="bottom"
            id="menu-dial-hero"
          />
        </div>
      </div>
    </section>
  );
}