"use client";

import { useState, useRef, useEffect } from "react";
import { degToRad } from "@/utils";
import { useIsMobile } from "@/hooks";
import gsap from "gsap";
import { Group, Color } from "three";
import {
  PillarColumns3D,
  BasePillar3D,
  Font3D,
} from "@/components/portfolio/base";
import { Vector3TypeUI } from "@/types/global";

type PillarActionFnUI = () => void;

const RAISE_HEIGHT = 0.2;
const ANIMATION_DURATION = 0.8;
const COLOR_ANIMATION_DURATION = 2;

const INACTIVE_COLOR_HEX = "#FFFFFF";
const ACTIVE_COLOR_HEX = "#000000";

const ACTIVE_TEXT_COLOR = "#FFFFFF";
const INACTIVE_TEXT_COLOR = "#000000";

const DISABLED_COLOR_HEX = "#AAAAAA";
const DISABLED_TEXT_COLOR = "#555555";

interface PillarButtonUI {
  label?: string;
  positionXYZ?: Vector3TypeUI;
  rotationX?: number;
  isDisable: boolean;
  onAction?: PillarActionFnUI | null;
}

export function PillarButton({
  label = "Sin definir",
  positionXYZ = [0, 0, 0],
  rotationX = 0,
  isDisable = true,
  onAction,
}: PillarButtonUI) {
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);

  const [boxColor, setBoxColor] = useState(
    isDisable ? DISABLED_COLOR_HEX : INACTIVE_COLOR_HEX
  );

  const animatedGroupRef = useRef<Group>(null!);

  const handlerAction = () => {
    if (!isDisable) {
      onAction?.();
    }
  };

  const handlePointerOver = () => {
    if (isDisable || isMobile) return;
    setIsActive(true);
  };
  const handlePointerOut = () => {
    if (isDisable || isMobile) return;
    setIsActive(false);
  };
  const handlePointerDown = () => {
    if (isDisable || !isMobile) return;
    setIsActive(true);
  };
  const handlePointerUp = () => {
    if (isDisable || !isMobile) return;
    setIsActive(false);
    handlerAction();
  };
  const handleClick = () => {
    if (isDisable || isMobile) return;
    handlerAction();
  };

  useEffect(() => {
    if (!animatedGroupRef.current) return;

    if (isDisable) {
      gsap.set(animatedGroupRef.current.position, { y: 0 });

      setBoxColor(DISABLED_COLOR_HEX);

      if (isActive) setIsActive(false);

      return;
    }

    gsap.to(animatedGroupRef.current.position, {
      y: isActive ? RAISE_HEIGHT : 0,
      duration: ANIMATION_DURATION,
      ease: "bounce.out",
    });

    const targetColor = isActive ? ACTIVE_COLOR_HEX : INACTIVE_COLOR_HEX;
    const dummyColor = new Color(boxColor);

    gsap.to(dummyColor, {
      duration: COLOR_ANIMATION_DURATION,
      ease: "power2.out",
      r: new Color(targetColor).r,
      g: new Color(targetColor).g,
      b: new Color(targetColor).b,
      onUpdate: () => {
        setBoxColor("#" + dummyColor.getHexString());
      },
    });
  }, [isActive, isDisable]);

  return (
    <group position={positionXYZ} rotation={[0,rotationX,0]}>
      <group
        ref={animatedGroupRef}
        position={[0, 0, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
      >
        <Font3D
          reference="contacto-title"
          font="helvetiker_regular.typeface.json"
          position={[0, 0.18, 0.2]}
          rotation={[0, 0, degToRad(90)]}
          size={0.2}
          extrude={0.02}
          text={label}
          material={
            <meshPhysicalMaterial
              color={
                isDisable
                  ? DISABLED_TEXT_COLOR
                  : isActive
                  ? ACTIVE_TEXT_COLOR
                  : INACTIVE_TEXT_COLOR
              }
              roughness={1}
              metalness={0.7}
              clearcoat={1}
            />
          }
          pivot="center"
        />

        <PillarColumns3D positionXYZ={[0, 0, 0]} colorBox={boxColor} />
      </group>
      <BasePillar3D positionXYZ={[0, -0.85, 0]} />
    </group>
  );
}
