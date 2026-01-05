"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInput } from "@/shared/hooks";
import { useCollisionSensor } from "@/shared/hooks/game-2d/useCollisionSensor";
import {
  PlayerPhysicsStateUI,
  VisualStateUI,
  SpritePlayerRefUI,
  PlayerDirectionType,
  PlayerStateUI,
} from "@/shared/types";
import { LayerController } from "../layer-controller";
import { PLAYER_CONTROLLER_TOKENS, STONE_ENTITIES } from "@/shared/constants";

export function PlayerController(props: SpritePlayerRefUI) {
  const { initialX = 100, initialY = 100, moveSpeed, jumpForce } = props;
  const inputs = useInput();
  const { registerEntity, checkSensors } = useCollisionSensor();
  const sceneRef = useRef<HTMLDivElement>(null);
  const lastDirectionRef = useRef<PlayerDirectionType>("RIGHT");

  const physics = useRef<PlayerPhysicsStateUI>({
    x: initialX,
    y: initialY,
    vx: 0,
    vy: 0,
    isGrounded: false,
    state: "IDLE",
    contacts: [],
  });

  const [visualState, setVisualState] = useState<VisualStateUI>({
    x: initialX,
    y: initialY,
    direction: "RIGHT",
    state: "IDLE",
    cameraX: 0,
  });

  useEffect(() => {
    STONE_ENTITIES.forEach((s) => {
      registerEntity(s.id, "/images/game-2d/hit/rock_wall_mask.jpg", 121, 38);
    });
  }, [registerEntity]);

  useGSAP(() => {
    const tick = (_: number, deltaTime: number) => {
      const p = physics.current;
      const ratio = Math.min(deltaTime / 16.66, 2.0);
      const T = PLAYER_CONTROLLER_TOKENS;

      let targetVx = 0;
      if (inputs.current.left) targetVx = -moveSpeed;
      if (inputs.current.right) targetVx = moveSpeed;

      p.vx = targetVx !== 0 ? targetVx : p.vx * (1 - T.FRICTION);
      if (Math.abs(p.vx) < 0.1) p.vx = 0;

      if (!p.isGrounded) {
        p.vy -= T.GRAVITY * ratio;
        if (p.vy < T.TERMINAL_VELOCITY) p.vy = T.TERMINAL_VELOCITY;
      }

      const directionOffset =
        lastDirectionRef.current === "RIGHT"
          ? T.COLLISION_OFFSET
          : -T.COLLISION_OFFSET;
      const samplingX = p.x + p.vx * ratio + directionOffset;
      const nextY = p.y + p.vy * ratio;

      const currentContacts = checkSensors(
        samplingX,
        nextY,
        STONE_ENTITIES,
        121,
        38
      );

      let finalX = p.x + p.vx * ratio;
      let finalY = nextY;

      const floor = currentContacts.find((c) => c.type === "FLOOR");
      const wall = currentContacts.find(
        (c) => c.type === "WALL_LEFT" || c.type === "WALL_RIGHT"
      );

      if (wall) {
        if (
          (wall.type === "WALL_RIGHT" && p.vx > 0) ||
          (wall.type === "WALL_LEFT" && p.vx < 0)
        ) {
          p.vx = 0;
          finalX = p.x;
        }
      }

      if (floor && p.vy <= 0) {
        finalY = floor.surfaceY ?? nextY;
        p.vy = 0;
        p.isGrounded = true;
      } else if (nextY <= T.WORLD_FLOOR_Y) {
        finalY = T.WORLD_FLOOR_Y;
        p.vy = 0;
        p.isGrounded = true;
      } else {
        p.isGrounded = false;
      }

      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce;
        p.isGrounded = false;
      }

      p.x = Math.max(0, Math.min(finalX, T.WORLD_WIDTH - 50));
      p.y = finalY;

      if (p.vx < -0.1) lastDirectionRef.current = "LEFT";
      else if (p.vx > 0.1) lastDirectionRef.current = "RIGHT";

      const anim: PlayerStateUI = !p.isGrounded
        ? "JUMP"
        : Math.abs(p.vx) > 0.1
        ? "RUN"
        : "IDLE";

      const vw = sceneRef.current?.offsetWidth || 1200;
      setVisualState({
        x: p.x,
        y: p.y,
        direction: lastDirectionRef.current,
        state: anim,
        cameraX: Math.max(0, Math.min(p.x - vw / 2, T.WORLD_WIDTH - vw)),
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [moveSpeed, jumpForce, checkSensors]);

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
          transition: "none",
        }}
      >
        <LayerController
          cameraX={visualState.cameraX}
          playerVisuals={visualState}
          levelEntities={STONE_ENTITIES}
          onCollisionAction={() => {}}
        />
      </div>
    </div>
  );
}
