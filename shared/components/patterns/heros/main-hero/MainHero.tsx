import {
  LogoContainer,
  SpeedDial,
  ThemeSwitcher,
} from "@/shared/components/composite";

import {
  FaUserPlus,
  FaPersonWalking,
  FaPersonRunning,
  FaArrowPointer,
  FaHandFist,
  FaHandshake,
  FaStar,
} from "react-icons/fa6";
import { IconDefaultUI } from "@/shared/components/base";

import { useState } from "react";
import { CharacterAnimationType } from "@/shared/types";
import { MainScene3D } from "@/shared/components/patterns";

export function MainHero() {
  const [currentAnimation, setCurrentAnimation] =
    useState<CharacterAnimationType>("000_Awake");

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
    <div className="flex flex-col items-center justify-center px-6 max-w-7xl mx-auto w-full relative min-h-[500px]">
      <div className="z-10 flex flex-col items-center">
        <div className="mb-6">
          <LogoContainer />
        </div>
        <div className="flex flex-col items-center gap-12 z-12">
          <ThemeSwitcher />
        </div>
        <div className="absolute bottom-0 w-full h-full">
          <MainScene3D animation={currentAnimation} />
        </div>

        <div className="flex flex-col items-center w-full h-[200] z-12">
          <div className="absolute bottom-0">
            <SpeedDial
              menu={CHARACTER_ANIMATION_MENU}
              variant="radial"
              direction="bottom"
              id="menu-dial"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
