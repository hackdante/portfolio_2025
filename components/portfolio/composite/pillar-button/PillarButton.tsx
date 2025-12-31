"use client";

import { useState, useRef, useMemo } from "react";
import { Color, Group, MeshPhysicalMaterial } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  PillarColumns3D,
  BasePillar3D,
  Font3D,
} from "@/components/portfolio/base";
import { useIsMobile } from "@/hooks";
import { degToRad } from "@/utils";
import { PillarButtonUI } from "./interface";

const RAISE_HEIGHT = 0.2;
const ANIMATION_DURATION = 0.8;
const COLOR_ANIMATION_DURATION = 1.2;

const INACTIVE_COLOR_HEX = "#FFFFFF";
const ACTIVE_COLOR_HEX = "#000000";
const ACTIVE_TEXT_COLOR = "#FFFFFF";
const INACTIVE_TEXT_COLOR = "#000000";
const DISABLED_COLOR_HEX = "#AAAAAA";
const DISABLED_TEXT_COLOR = "#555555";

export function PillarButton({
  label = "Sin definir",
  positionXYZ = [0, 0, 0],
  rotationX = 0,
  isDisable = false,
  onAction,
}: PillarButtonUI) {
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);

  const animatedGroupRef = useRef<Group>(null!);
  const materialRef = useRef<MeshPhysicalMaterial>(null!);
  const textMaterialRef = useRef<MeshPhysicalMaterial>(null!);

  const initialColor = useMemo(
    () => (isDisable ? DISABLED_COLOR_HEX : INACTIVE_COLOR_HEX),
    [isDisable]
  );

  useGSAP(
    () => {
      if (!animatedGroupRef.current) return;

      gsap.to(animatedGroupRef.current.position, {
        y: isActive && !isDisable ? RAISE_HEIGHT : 0,
        duration: ANIMATION_DURATION,
        ease: "bounce.out",
      });

      if (materialRef.current) {
        const targetHex = isDisable
          ? DISABLED_COLOR_HEX
          : isActive
          ? ACTIVE_COLOR_HEX
          : INACTIVE_COLOR_HEX;

        gsap.to(materialRef.current.color, {
          r: new Color(targetHex).r,
          g: new Color(targetHex).g,
          b: new Color(targetHex).b,
          duration: COLOR_ANIMATION_DURATION,
          ease: "power2.out",
        });
      }

      if (textMaterialRef.current) {
        const targetTextHex = isDisable
          ? DISABLED_TEXT_COLOR
          : isActive
          ? ACTIVE_TEXT_COLOR
          : INACTIVE_TEXT_COLOR;

        gsap.to(textMaterialRef.current.color, {
          r: new Color(targetTextHex).r,
          g: new Color(targetTextHex).g,
          b: new Color(targetTextHex).b,
          duration: 0.4,
          ease: "linear",
        });
      }
    },
    { dependencies: [isActive, isDisable], scope: animatedGroupRef }
  );

  const handlePointerOver = (e: { stopPropagation: () => void }) => {
    if (isDisable || isMobile) return;
    e.stopPropagation();
    setIsActive(true);
  };

  const handlePointerOut = () => {
    if (isDisable || isMobile) return;
    setIsActive(false);
  };

  const handleClick = (e: { stopPropagation: () => void }) => {
    if (isDisable) return;
    e.stopPropagation();
    if (onAction) onAction();
  };

  return (
    <group position={positionXYZ} rotation={[0, rotationX, 0]}>
      <group
        ref={animatedGroupRef}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <Font3D
          font="helvetiker_regular.typeface.json"
          position={[0, 0.18, 0.2]}
          rotation={[0, 0, degToRad(90)]}
          size={0.2}
          extrude={0.02}
          text={label}
          pivot="center"
          material={
            <meshPhysicalMaterial
              ref={textMaterialRef}
              color={isDisable ? DISABLED_TEXT_COLOR : INACTIVE_TEXT_COLOR}
              roughness={1}
              metalness={0.7}
              clearcoat={1}
            />
          }
        />

        <PillarColumns3D
          positionXYZ={[0, 0, 0]}
          materialRef={materialRef}
          initialColor={initialColor}
        />
      </group>

      <BasePillar3D positionXYZ={[0, -0.85, 0]} />
    </group>
  );
}
