"use client";

import { useGLTF, useAnimations } from "@react-three/drei";

import { JSX, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Object3D, Mesh, Group, LoopRepeat } from "three";
import { SkeletonUtils } from "three-stdlib";
import { GLTFResultUI, GLBCharacterLoaderUI } from "./interface";

export function GLBCharacterLoader({
  objPath,
  currentAnimation,
  onAnimationsLoaded,
  position,
  scale,
}: GLBCharacterLoaderUI): JSX.Element {
  const groupRef = useRef<Group>(null);
  const previousAnimationRef = useRef<string | null>(null);

  const { scene, animations } = useGLTF(objPath) as GLTFResultUI;

  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { actions, names } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (names.length && onAnimationsLoaded) {
      onAnimationsLoaded(names);
    }
  }, [names, onAnimationsLoaded]);

  useLayoutEffect(() => {
    clonedScene.traverse((obj: Object3D) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [clonedScene]);

  useEffect(() => {
    if (!actions || !names.length) return;

    const animationName = currentAnimation ?? names[1];

    if (previousAnimationRef.current === animationName) return;

    const nextAction = actions[animationName];
    const prevName = previousAnimationRef.current;
    const prevAction = prevName ? actions[prevName] : null;

    if (!nextAction) return;

    nextAction.reset().setLoop(LoopRepeat, Infinity).play();

    if (prevAction && prevAction !== nextAction) {
      nextAction.crossFadeFrom(prevAction, 0.6, false);
    }

    previousAnimationRef.current = animationName;
  }, [currentAnimation, actions, names]);

  return (
    <group ref={groupRef} dispose={null} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
