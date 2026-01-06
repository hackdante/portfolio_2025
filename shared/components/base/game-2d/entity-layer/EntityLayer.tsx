"use client";

import { useEffect, useRef } from "react";
import { useCollisionSensor } from "@/shared/hooks";
import { ContactStateUI } from "@/shared/types";
import { EntityLayerUI } from "./interface";

export function EntityLayer({
  id,
  imageUrl,
  width,
  height,
  playerX,
  playerY,
  entities,
  onTriggerEnter,
  onTriggerLeave,
  zIndex = 20,
}: EntityLayerUI) {
  const { checkSensors } = useCollisionSensor();
  const isPlayerInside = useRef(false);

  useEffect(() => {
    if (!entities || entities.length === 0) return;

    const contacts = checkSensors(playerX, playerY, playerY, entities);
    
    const floorContact = contacts.find(
      (c): c is ContactStateUI & { type: "FLOOR"; entityId: string; surfaceY: number } => 
        c.entityId === id && 
        c.type === "FLOOR" && 
        typeof c.surfaceY === "number"
    );

    if (floorContact) {
      if (!isPlayerInside.current) {
        isPlayerInside.current = true;
        if (onTriggerEnter) {
          onTriggerEnter({
            type: "active", 
            entityId: floorContact.entityId,
            isBlocked: false,
            isFloor: true
          });
        }
      }
    } else {
      if (isPlayerInside.current) {
        isPlayerInside.current = false;
        if (onTriggerLeave) {
          onTriggerLeave();
        }
      }
    }
  }, [playerX, playerY, id, entities, checkSensors, onTriggerEnter, onTriggerLeave]);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: `${width}px`,
        height: `${height}px`,
        left: `${entities[0].x}px`,
        bottom: `${entities[0].y}px`,
        zIndex,
      }}
    />
  );
}