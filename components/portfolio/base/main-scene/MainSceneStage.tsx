"use client";

import { sakuraTreeAPI } from "@/apis/local/main-scene";
import { useMemo } from "react";

import { Text, useTexture } from "@react-three/drei";
import { RepeatWrapping } from "three";

import {
  InstancedModel,
  LoadGBLModel,
  Particles3dV1,
  SceneFloor,
} from "@/components/portfolio/base";
import { PillarButton } from "@/components/portfolio/composite";

import { degToRad } from "@/utils";
import { useIsMobile } from "@/hooks";
import { CameraMotionToScenesUI } from "@/types/global";

const URL_KENSAI_MODEL = "/portfolio/models/kensai-icon-3d/model.glb";
const URL_FLOOR_TEXTURE = "/portfolio/models/hero-3d-scene/vector_grid.jpg";
const URL_KENSAI_LOGO = "/portfolio/models/kensai-logo/logo_v1.glb";
const URL_SAKURA_TREE = "/portfolio/models/sakura-tree/sakura_tree.glb";
const URL_PAGODA = "/portfolio/models/pagoda/pagoda.glb";
const URL_GATE_MODEL = "/portfolio/models/gate/gate.glb";

interface MainSceneUI {
  activeActions: boolean;
  onNavigate: (section: CameraMotionToScenesUI) => void;
}

export function MainSceneStage({ activeActions = true, onNavigate }: MainSceneUI) {
  const isMobile = useIsMobile();

  const gridTexture = useTexture(URL_FLOOR_TEXTURE);
  useMemo(() => {
    gridTexture.wrapS = gridTexture.wrapT = RepeatWrapping;
    gridTexture.repeat.set(60, 60);
    gridTexture.anisotropy = 8;
    gridTexture.needsUpdate = true;
  }, [gridTexture]);

  return (
    <>
      <InstancedModel src={URL_SAKURA_TREE} meshes={sakuraTreeAPI} />

      <LoadGBLModel
        scale={1}
        objPath={URL_GATE_MODEL}
        position={[0, -0.96, 20]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        scale={0.9}
        objPath={URL_KENSAI_MODEL}
        position={[-1.53, -0.1, 0.5]}
        castShadow
        receiveShadow
      />

      <Text
        position={isMobile ? [0, 8.8, -2] : [-0.5, 7.2, 0]}
        fontSize={isMobile ? 0.35 : 0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Bienvenidos a
      </Text>

      <LoadGBLModel
        objPath={URL_KENSAI_LOGO}
        scale={isMobile ? 0.005 : 0.0035}
        position={isMobile ? [0.3, 7.5, -2] : [0, 6.2, 0]}
        rotation={[0.3, 0, 0]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        objPath={URL_PAGODA}
        scale={0.3}
        position={[0, -1.4, -14]}
        castShadow
        receiveShadow
      />

      <Particles3dV1
        count={isMobile ? 150 : 350}
        area={isMobile ? 50 : 100}
        fallSpeed={0.004}
      />

      <PillarButton
        label="Biografia"
        isDisable={activeActions}
        positionXYZ={[-0.7, 0, 0]}
        rotationX={degToRad(0)}
        onAction={() => onNavigate("camera-scene/bio")}
      />
      <PillarButton
        label="Portafolio"
        isDisable={activeActions}
        positionXYZ={[0.5, 0, 0]}
        rotationX={degToRad(0)}
        onAction={() => onNavigate("camera-scene/portfolio")}
      />

      <PillarButton
        label="Contacto"
        isDisable={activeActions}
        positionXYZ={[1.7, 0, 0]}
        rotationX={degToRad(0)}
        onAction={() => onNavigate("camera-scene/contact")}
      />

      <SceneFloor size={[110, 110]} position={[0, -0.93, 0]} />
    </>
  );
}
