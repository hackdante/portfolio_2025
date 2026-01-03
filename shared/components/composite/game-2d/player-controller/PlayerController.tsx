"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInput } from "@/shared/hooks";
import { LayerController } from "../layer-controller";
import {
  SpritePlayerRefUI,
  PlayerPhysicsStateUI,
  VisualStateUI,
} from "./interface";
import { PLAYER_CONTROLLER_TOKENS } from "./playerControllerToken";

export function PlayerController(props: SpritePlayerRefUI) {
  const { initialX = 0, initialY = 0, moveSpeed, jumpForce } = props;
  const inputs = useInput();
  const sceneRef = useRef<HTMLDivElement>(null);

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

  useGSAP(() => {
    const tick = (time: number, deltaTime: number) => {
      const p = physics.current;
      const { WORLD_WIDTH, WORLD_FLOOR_Y, GRAVITY, FRICTION } =
        PLAYER_CONTROLLER_TOKENS;
      const viewportWidth = sceneRef.current?.offsetWidth || 1200;

      const ratio = deltaTime / (1000 / 60);

      if (inputs.current.left) {
        p.vx = -moveSpeed * ratio;
        p.direction = "LEFT";
      } else if (inputs.current.right) {
        p.vx = moveSpeed * ratio;
        p.direction = "RIGHT";
      } else {
        p.vx *= Math.pow(FRICTION, ratio);
      }

      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce;
        p.isGrounded = false;
      }

      if (!p.isGrounded) {
        p.vy -= GRAVITY * ratio;
      }

      p.x += p.vx * ratio;
      p.y += p.vy * ratio;

      if (p.x < 0) p.x = 0;
      if (p.x > WORLD_WIDTH - 50) p.x = WORLD_WIDTH - 50;

      if (p.y <= WORLD_FLOOR_Y) {
        p.y = WORLD_FLOOR_Y;
        p.vy = 0;
        p.isGrounded = true;
      }

      let targetCameraX = p.x - viewportWidth / 2;
      const maxCameraX = WORLD_WIDTH - viewportWidth;

      if (targetCameraX < 0) targetCameraX = 0;
      if (targetCameraX > maxCameraX) targetCameraX = maxCameraX;
      let newState: "IDLE" | "RUN" | "JUMP" = "IDLE";
      if (!p.isGrounded) {
        newState = "JUMP";
      } else if (Math.abs(p.vx) > 0.1) {
        newState = "RUN";
      }

      setVisualState((prev) => {
        const isSamePosition =
          Math.abs(prev.x - p.x) < 0.01 && Math.abs(prev.y - p.y) < 0.01;
        const isSameState =
          prev.state === newState && prev.direction === p.direction;
        const isSameCamera = Math.abs(prev.cameraX - targetCameraX) < 0.1;

        if (isSamePosition && isSameState && isSameCamera) return prev;

        return {
          x: p.x,
          y: p.y,
          direction: p.direction,
          state: newState,
          cameraX: targetCameraX,
        };
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
        className="absolute inset-0 will-change-transform"
        style={{
          width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH,
          transform: `translateX(${-visualState.cameraX}px)`,
        }}
      >
        <LayerController
          cameraX={visualState.cameraX}
          playerVisuals={visualState}
        />
      </div>
    </div>
  );
}
