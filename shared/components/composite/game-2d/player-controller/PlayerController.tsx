"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCollisionSensor, useInput } from "@/shared/hooks";
import {
  PlayerPhysicsStateUI,
  VisualStateUI,
  SpritePlayerRefUI,
  PlayerDirectionType,
  PlayerStateUI,
  ActiveInteractionUI,
} from "@/shared/types";
import { LayerController } from "../layer-controller";
import { InteractionPopup } from "@/shared/components/base/interaction-popup"; 
import { PLAYER_CONTROLLER_TOKENS, STONE_ENTITIES } from "@/shared/constants";

export function PlayerController(props: Readonly<SpritePlayerRefUI>) {
  const { initialX = 100, initialY = 100, moveSpeed, jumpForce } = props;
  const inputs = useInput();
  const { checkSensors } = useCollisionSensor();
  const sceneRef = useRef<HTMLDivElement>(null);
  const lastDirectionRef = useRef<PlayerDirectionType>("RIGHT");
  const jumpLockFrames = useRef(0);
  
  const [activeInteraction, setActiveInteraction] = useState<ActiveInteractionUI | null>(null);

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

  useGSAP(() => {
    const tick = (_: number, deltaTime: number) => {
      const p = physics.current;
      const T = PLAYER_CONTROLLER_TOKENS;
      const ratio = Math.min(deltaTime / 16.66, 2.0);

      if (jumpLockFrames.current > 0) jumpLockFrames.current--;

      let targetVx = 0;
      if (inputs.current.left) targetVx = -moveSpeed;
      if (inputs.current.right) targetVx = moveSpeed;

      p.vx = targetVx !== 0 ? targetVx : p.vx * (1 - T.FRICTION);
      if (Math.abs(p.vx) < 0.1) p.vx = 0;

      if (!p.isGrounded) {
        p.vy -= T.GRAVITY * ratio;
        if (p.vy < T.TERMINAL_VELOCITY) p.vy = T.TERMINAL_VELOCITY;
      }

      const nextX = p.x + p.vx * ratio;
      const nextY = p.y + p.vy * ratio - (p.isGrounded ? 4 : 0);

      const contacts = checkSensors(nextX, p.y, nextY, STONE_ENTITIES);
      const floor = contacts.find((c) => c.type === "FLOOR");
      const wallR = contacts.find((c) => c.type === "WALL_RIGHT");
      const wallL = contacts.find((c) => c.type === "WALL_LEFT");

      let finalX = nextX;
      let finalY = p.y + p.vy * ratio;

      if (wallR && p.vx > 0) {
        p.vx = 0;
        finalX = p.x;
      }
      if (wallL && p.vx < 0) {
        p.vx = 0;
        finalX = p.x;
      }

      const GROUND_TOLERANCE = 2.0;
      const isFalling = p.vy <= 0.1;

      if (jumpLockFrames.current === 0 && isFalling) {
        if (floor) {
          finalY = floor.surfaceY ?? finalY;
          p.vy = 0;
          p.isGrounded = true;
        } else if (finalY <= T.WORLD_FLOOR_Y + GROUND_TOLERANCE) {
          finalY = T.WORLD_FLOOR_Y;
          p.vy = 0;
          p.isGrounded = true;
        } else {
          p.isGrounded = false;
        }
      } else {
        p.isGrounded = false;
      }

      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce;
        p.isGrounded = false;
        jumpLockFrames.current = 8;
        finalY += 2;
      }

      p.x = Math.max(0, Math.min(finalX, T.WORLD_WIDTH - 50));
      p.y = finalY;

      if (p.vx < -0.1) lastDirectionRef.current = "LEFT";
      else if (p.vx > 0.1) lastDirectionRef.current = "RIGHT";

      const currentAnim: PlayerStateUI = !p.isGrounded
        ? "JUMP"
        : Math.abs(p.vx) > 0.1
        ? "RUN"
        : "IDLE";
      const viewW = sceneRef.current?.offsetWidth || 1200;

      setVisualState({
        x: p.x,
        y: p.y,
        direction: lastDirectionRef.current,
        state: currentAnim,
        cameraX: Math.max(0, Math.min(p.x - viewW / 2, T.WORLD_WIDTH - viewW)),
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [moveSpeed, jumpForce, checkSensors]);

  const containerStyle = {
    width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH,
    transform: `translateX(${-visualState.cameraX}px)`,
    transition: "none",
  };

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0" style={containerStyle}>
        <LayerController
          cameraX={visualState.cameraX}
          playerVisuals={visualState}
          levelEntities={STONE_ENTITIES}
          onCollisionAction={(interaction) => setActiveInteraction(interaction)}
        />

        <InteractionPopup 
          data={activeInteraction?.data ?? null}
          isVisible={!!activeInteraction}
          position={activeInteraction?.position ?? { x: 0, y: 0 }}
        />
      </div>
    </div>
  );
}