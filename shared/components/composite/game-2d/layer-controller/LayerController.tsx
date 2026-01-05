"use client";

import { useEffect, useRef } from "react";
import {
  ImageAssetLayer,
  SpritePlayer,
  EntityLayer,
} from "@/shared/components/base";
import {
  RONIN_ANIMATIONS,
  RONIN_SHEET,
  PLAYER_CONTROLLER_TOKENS,
  STONE_ENTITIES,
  PROJECTS_PORTFOLIO,
} from "@/shared/constants";
import { useCollisionSensor } from "@/shared/hooks";
import {
  EntityInstanceUI,
  LayerControllerUI,
  CollisionEventUI,
} from "@/shared/types";

const SPRITES_PATH = "/images/game-2d";

export function LayerController({
  cameraX,
  playerVisuals,
  onCollisionAction,
  levelEntities = STONE_ENTITIES,
}: LayerControllerUI & { levelEntities?: EntityInstanceUI[] }) {
  const { registerEntity } = useCollisionSensor();

  const activeEntityIdRef = useRef<string | null>(null);

  useEffect(() => {
    levelEntities.forEach((entity) => {
      if (entity.maskUrl) {
        registerEntity(
          entity.id,
          entity.maskUrl,
          entity.collisionWidth,
          entity.collisionHeight
        );
      }
    });
  }, [levelEntities, registerEntity]);

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

      {levelEntities.map((entity, index) => (
        <EntityLayer
          key={entity.id}
          id={entity.id}
          imageUrl={`${SPRITES_PATH}/hit/rock_wall.png`}
          maskUrl={entity.maskUrl}
          width={entity.collisionWidth}
          height={entity.collisionHeight}
          playerX={
            playerVisuals.x +
            (playerVisuals.direction === "RIGHT"
              ? PLAYER_CONTROLLER_TOKENS.BODY_OFFSET_X
              : -PLAYER_CONTROLLER_TOKENS.BODY_OFFSET_X)
          }
          playerY={playerVisuals.y}
          entities={[entity]}
          onTriggerEnter={(physicEvent: CollisionEventUI) => {
            if (
              physicEvent.isFloor &&
              activeEntityIdRef.current !== entity.id
            ) {
              const projectData = PROJECTS_PORTFOLIO[index];
              if (projectData) {
                activeEntityIdRef.current = entity.id;

                onCollisionAction({
                  data: projectData,
                  physicEvent: physicEvent,
                  position: {
                    x: entity.x + entity.collisionWidth / 2,
                    y: entity.y + entity.collisionHeight,
                  },
                });
              }
            }
          }}
          onTriggerLeave={() => {
            if (activeEntityIdRef.current === entity.id) {
              activeEntityIdRef.current = null;
              onCollisionAction(null);
            }
          }}
          zIndex={20}
        />
      ))}
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
