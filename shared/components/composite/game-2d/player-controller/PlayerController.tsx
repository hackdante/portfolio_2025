"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInput } from "@/shared/hooks";
import {
  
  CollisionEventUI,
  PlayerControllerTokensUI,
} from "./interface";

import { PlayerPhysicsStateUI, SpritePlayerRefUI, VisualStateUI } from "@/shared/types";
import { LayerController } from "../layer-controller";

export const PLAYER_CONTROLLER_TOKENS: PlayerControllerTokensUI = {
  GRAVITY: 0.8,
  FRICTION: 0.9,
  WORLD_FLOOR_Y: 62,
  WORLD_WIDTH: 3000,
  WORLD_HEIGHT: 500,
};


export function PlayerController(props: SpritePlayerRefUI) {
  const { initialX = 0, initialY = 0, moveSpeed, jumpForce } = props;
  const inputs = useInput();
  const sceneRef = useRef<HTMLDivElement>(null);

  const isBlocked = useRef(false);
  const blockDirection = useRef<"LEFT" | "RIGHT" | null>(null);
  const platformY = useRef<number | null>(null);

  const physics = useRef<PlayerPhysicsStateUI>({
    x: initialX,
    y: initialY,
    vx: 0,
    vy: 0,
    isGrounded: false,
    state: "IDLE",
    direction: "RIGHT",
  });

  const [visualState, setVisualState] = useState<VisualStateUI>({
    x: initialX,
    y: initialY,
    direction: "RIGHT",
    state: "IDLE",
    cameraX: 0,
  });

  const handleCollision = useCallback((event: CollisionEventUI) => {
    if (event.isFloor && physics.current.vy <= 0) {
      platformY.current = 118; // Ajuste según altura de piedra (80y + 38h)
      isBlocked.current = false;
    } else {
      isBlocked.current = event.isBlocked;
      if (event.isBlocked) blockDirection.current = physics.current.direction;
    }
  }, []);

  useGSAP(() => {
    const tick = (_: number, deltaTime: number) => {
      const p = physics.current;
      const { WORLD_WIDTH, WORLD_FLOOR_Y, GRAVITY, FRICTION } =
        PLAYER_CONTROLLER_TOKENS;
      const viewportWidth = sceneRef.current?.offsetWidth || 1200;
      const ratio = deltaTime / (1000 / 60);
      const preMoveX = p.x;

      if (inputs.current.left) {
        p.vx = -moveSpeed * ratio;
        p.direction = "LEFT";
      } else if (inputs.current.right) {
        p.vx = moveSpeed * ratio;
        p.direction = "RIGHT";
      } else {
        p.vx *= Math.pow(FRICTION, ratio);
      }

      if (isBlocked.current && blockDirection.current === p.direction) {
        p.x = preMoveX;
        p.vx = 0;
      }

      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce;
        p.isGrounded = false;
        platformY.current = null;
      }

      if (!p.isGrounded) p.vy -= GRAVITY * ratio;

      p.x += p.vx * ratio;
      p.y += p.vy * ratio;

      const currentFloor = platformY.current ?? WORLD_FLOOR_Y;
      if (p.y <= currentFloor) {
        p.y = currentFloor;
        p.vy = 0;
        p.isGrounded = true;
      } else {
        p.isGrounded = false;
      }

      if (p.x < 0) p.x = 0;
      if (p.x > WORLD_WIDTH - 50) p.x = WORLD_WIDTH - 50;

      const targetCameraX = Math.max(
        0,
        Math.min(p.x - viewportWidth / 2, WORLD_WIDTH - viewportWidth)
      );

      setVisualState({
        x: p.x,
        y: p.y,
        direction: p.direction,
        state: !p.isGrounded ? "JUMP" : Math.abs(p.vx) > 0.1 ? "RUN" : "IDLE",
        cameraX: targetCameraX,
      });
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [moveSpeed, jumpForce]);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 overflow-hidden bg-slate-950"
    >
      <div
        className="absolute inset-0"
        style={{
          width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH,
          transform: `translateX(${-visualState.cameraX}px)`,
        }}
      >
        <LayerController
          cameraX={visualState.cameraX}
          playerVisuals={visualState}
          onCollisionAction={handleCollision}
        />
      </div>
    </div>
  );
}
