"use client";

import {
  ImageAssetLayer,
  SpritePlayer,
  EntityLayer,
} from "@/shared/components/base";
import { RONIN_ANIMATIONS, RONIN_SHEET } from "@/shared/constants";

import { PLAYER_CONTROLLER_TOKENS } from "../player-controller";
import { EntityInstanceUI, LayerControllerUI } from "@/shared/types";

const SPRITES_PATH = "/images/game-2d";

export function LayerController({
  cameraX,
  playerVisuals,
  onCollisionAction,
}: LayerControllerUI) {
  const handleTriggerEnter = (entity: EntityInstanceUI): void => {
    onCollisionAction({
      isBlocked: entity.type === "solid",
      type: entity.type,
      entityId: entity.id,
      isFloor: entity.isFloor,
    });
  };

  const handleTriggerLeave = (entity: EntityInstanceUI): void => {
    onCollisionAction({
      isBlocked: false,
      type: entity.type,
      entityId: entity.id,
      isFloor: false,
    });
  };

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

      <EntityLayer
        id="level-solids"
        imageUrl={`${SPRITES_PATH}/hit/rock_wall.png`}
        maskUrl={`${SPRITES_PATH}/hit/rock_wall_mask.jpg`}
        width={121}
        height={38}
        playerX={
          playerVisuals.x + (playerVisuals.direction === "RIGHT" ? 25 : -25)
        }
        playerY={playerVisuals.y}
        entities={[
          {
            id: "solid-stone-1",
            x: 400,
            y: 80,
            type: "solid",
            isActive: true,
          },
        ]}
        onTriggerEnter={handleTriggerEnter}
        onTriggerLeave={handleTriggerLeave}
        debug={true}
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
