"use client";

import { useEffect, useRef, useCallback } from "react";
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
  const { registerEntity, unregisterEntity } = useCollisionSensor();
  const currentActiveId = useRef<string | null>(null);

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
    return () => {
      levelEntities.forEach((entity) => {
        unregisterEntity(entity.id);
      });
    };
  }, [levelEntities, registerEntity, unregisterEntity]);

  const handleTriggerEnter = useCallback(
    (
      physicEvent: CollisionEventUI,
      entity: EntityInstanceUI,
      index: number
    ) => {
      if (physicEvent.isFloor && currentActiveId.current !== entity.id) {
        const projectData = PROJECTS_PORTFOLIO[index];
        if (projectData) {
          currentActiveId.current = entity.id;
          onCollisionAction({
            data: projectData,
            physicEvent,
            position: {
              x: entity.x + entity.collisionWidth / 2,
              y: entity.y,
            },
          });
        }
      }
    },
    [onCollisionAction]
  );

  const handleTriggerLeave = useCallback(
    (entityId: string) => {
      if (currentActiveId.current === entityId) {
        currentActiveId.current = null;
        onCollisionAction(null);
      }
    },
    [onCollisionAction]
  );

  return (
    <>
      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/stars.jpg`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={300}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y + 150}
        repeat="repeat-x"
        tileSize={600}
        parallaxFactor={0.08}
        cameraX={cameraX}
        zIndex={1}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/kensai_logo.png`}
        width={400}
        height={103}
        x={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 0}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y + 200}
        repeat="no-repeat"
        parallaxFactor={-0.03}
        cameraX={cameraX}
        zIndex={1}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/moon.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={400}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y}
        x={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 0.17}
        repeat="no-repeat"
        tileSize={400}
        parallaxFactor={0.05}
        cameraX={cameraX}
        zIndex={2}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/sky_level_dark.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={457}
        y={50}
        repeat="repeat-x"
        tileSize={1248}
        parallaxFactor={0}
        autoScrollSpeed={0.15}
        cameraX={cameraX}
        opacity={0.7}
        zIndex={3}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/mountains.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={241}
        y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y - 10}
        repeat="repeat-x"
        tileSize={800}
        parallaxFactor={0.6}
        cameraX={cameraX}
        zIndex={5}
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
        zIndex={6}
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
        zIndex={6}
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
        zIndex={7}
      />
      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/fog.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 3}
        height={228}
        y={80}
        repeat="repeat-x"
        tileSize={1248}
        parallaxFactor={1}
        autoScrollSpeed={-0.1}
        cameraX={cameraX}
        opacity={0.8}
        zIndex={7}
      />
      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/stone_walkway.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
        height={184}
        y={10}
        parallaxFactor={1}
        cameraX={cameraX}
        zIndex={8}
      />

      {levelEntities.map((entity, index) => (
        <EntityLayer
          key={entity.id}
          id={entity.id}
          imageUrl={`${SPRITES_PATH}/hit/rock_wall.png`}
          maskUrl={entity.maskUrl}
          width={entity.collisionWidth}
          height={entity.collisionHeight}
          playerX={playerVisuals.x}
          playerY={playerVisuals.y}
          entities={[entity]}
          onTriggerEnter={(e) => handleTriggerEnter(e, entity, index)}
          onTriggerLeave={() => handleTriggerLeave(entity.id)}
          zIndex={8}
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
        zIndex={10}
      />

      <ImageAssetLayer
        imageUrl={`${SPRITES_PATH}/fog.png`}
        width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 3}
        height={228}
        y={-30}
        repeat="repeat-x"
        tileSize={1248}
        parallaxFactor={1}
        autoScrollSpeed={0.05}
        cameraX={cameraX}
        opacity={0.6}
        zIndex={12}
      />
    </>
  );
}
