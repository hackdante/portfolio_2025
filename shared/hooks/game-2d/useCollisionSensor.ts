"use client";

import { useCallback } from "react";
import { collisionBuffer } from "@/shared/utils/game-2d/collision-buffer";
import { ContactStateUI, EntityInstanceUI } from "@/shared/types";

export function useCollisionSensor() {
  const registerEntity = useCallback(
    async (id: string, maskUrl: string, width: number, height: number) => {
      await collisionBuffer.loadMask(id, maskUrl, width, height);
    },
    []
  );

  const checkSensors = useCallback(
    (
      playerX: number,
      playerY: number,
      entities: EntityInstanceUI[],
      maskWidth: number,
      maskHeight: number
    ): ContactStateUI[] => {
      const activeContacts: ContactStateUI[] = [];

      for (const entity of entities) {
        if (!entity.isActive) continue;

        const localX = playerX - entity.x;
        const localY = playerY - entity.y;

        if (
          localX < -20 ||
          localX > maskWidth + 20 ||
          localY < -20 ||
          localY > maskHeight + 20
        ) {
          continue;
        }

        const isFootTouching = collisionBuffer.isPixelSolid(
          entity.id,
          localX,
          localY
        );

        if (isFootTouching) {
          activeContacts.push({
            type: "FLOOR",
            entityId: entity.id,
            surfaceY: entity.y + localY,
          });
        }

        const isHitRight = collisionBuffer.isPixelSolid(
          entity.id,
          localX + 15,
          localY + 25
        );
        const isHitLeft = collisionBuffer.isPixelSolid(
          entity.id,
          localX - 15,
          localY + 25
        );

        if (isHitRight) {
          activeContacts.push({
            type: "WALL_RIGHT",
            entityId: entity.id,
            surfaceX: entity.x + localX,
          });
        }

        if (isHitLeft) {
          activeContacts.push({
            type: "WALL_LEFT",
            entityId: entity.id,
            surfaceX: entity.x + localX,
          });
        }
      }

      return activeContacts.length > 0
        ? activeContacts
        : [{ type: "NONE", entityId: null }];
    },
    []
  );

  return { registerEntity, checkSensors };
}
