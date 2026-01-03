"use client";

import { ImageAssetLayer, SpritePlayer } from "@/shared/components/base";
import { PLAYER_CONTROLLER_TOKENS } from "../player-controller/playerControllerToken";
import { RONIN_ANIMATIONS, RONIN_SHEET } from "@/shared/constants";
import { LayerControllerUI } from "./interface";

const SPRITES_PATH = "/images/game-2d";

export function LayerController({ cameraX, playerVisuals }: LayerControllerUI) {
  return (
    <>
      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/sky_level_1.jpg`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={340}
        y={150}
        repeat="repeat-x"
        tileSize={1070}
        parallaxFactor={0.1}
        autoScrollSpeed={0.2}
        cameraX={cameraX}
        zIndex={1}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/mountains.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={500}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y - 10}
        repeat="repeat-x"
        tileSize={512}
        parallaxFactor={0.6}
        cameraX={cameraX}
        zIndex={10}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/pagoda_kensai.png`}
        width={280}
        height={350}
        x={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 0.43}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y + 40}
        repeat="no-repeat"
        parallaxFactor={0.6}
        cameraX={cameraX}
        zIndex={10}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/tree_sakura.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 1.2}
        height={380}
        y={65}
        repeat="repeat-x"
        tileSize={800}
        parallaxFactor={0.75}
        cameraX={cameraX}
        zIndex={12}
        opacity={1}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/stone_walkway.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={184}
        y={10}
        parallaxFactor={1}
        cameraX={cameraX}
        zIndex={20}
      />

      <SpritePlayer
        state={playerVisuals.state}
        direction={playerVisuals.direction}
        positionX={playerVisuals.x}
        positionY={playerVisuals.y}
        sheet={RONIN_SHEET}
        animations={RONIN_ANIMATIONS}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/grass.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 2}
        height={160}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y - 110}
        repeat="repeat-x"
        tileSize={674}
        parallaxFactor={1.4}
        cameraX={cameraX}
        zIndex={100}
      />
    </>
  );
}
