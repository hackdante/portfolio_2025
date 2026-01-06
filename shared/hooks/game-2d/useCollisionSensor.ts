"use client";

import { useCallback } from "react";
import { collisionBuffer } from "@/shared/utils";
import { ContactStateUI, EntityInstanceUI } from "@/shared/types";
import { PLAYER_CONTROLLER_TOKENS } from "@/shared/constants";

export function useCollisionSensor() {
  const registerEntity = useCallback(async (id: string, maskUrl: string, width: number, height: number) => {
    await collisionBuffer.loadMask(id, maskUrl, width, height);
  }, []);

  const unregisterEntity = useCallback((id: string) => {
    collisionBuffer.clearMask(id);
  }, []);

  const checkSensors = useCallback((
    playerX: number,
    playerY: number,
    nextY: number,
    entities: EntityInstanceUI[]
  ): ContactStateUI[] => {
    const activeContacts: ContactStateUI[] = [];
    const T = PLAYER_CONTROLLER_TOKENS;

    for (const entity of entities) {
      if (!entity.isActive) continue;

      const localX = playerX - entity.x;
      if (localX < -T.GROUND_CHECK_PADDING || localX > entity.collisionWidth + T.GROUND_CHECK_PADDING) continue;

      const startY = Math.floor(playerY);
      const endY = Math.floor(nextY);
    
      const step = startY > endY ? -1 : 1;
      const dist = Math.abs(startY - endY);
      
      for (let i = 0; i <= dist; i++) {
        const testY = startY + (i * step);
        const localY = testY - entity.y;

        if (localY >= 0 && localY <= entity.collisionHeight) {
          if (collisionBuffer.isPixelSolid(entity.id, localX, localY)) {
            activeContacts.push({
              type: "FLOOR",
              entityId: entity.id,
              surfaceY: entity.y + localY,
            });
            return activeContacts; 
          }
        }
      }

      const detectionMidY = nextY + T.BODY_OFFSET_Y;
      const localMidY = detectionMidY - entity.y;
      if (localMidY >= 0 && localMidY <= entity.collisionHeight) {
        if (collisionBuffer.isPixelSolid(entity.id, localX + T.BODY_OFFSET_X, localMidY)) {
          activeContacts.push({ type: "WALL_RIGHT", entityId: entity.id, surfaceX: entity.x + localX });
        }
        if (collisionBuffer.isPixelSolid(entity.id, localX - T.BODY_OFFSET_X, localMidY)) {
          activeContacts.push({ type: "WALL_LEFT", entityId: entity.id, surfaceX: entity.x + localX });
        }
      }
    }

    return activeContacts.length > 0 ? activeContacts : [{ type: "NONE", entityId: null }];
  }, []);

  return { registerEntity, unregisterEntity, checkSensors };
}