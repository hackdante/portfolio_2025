"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SpritePlayer, DummysScene } from "@/shared/components/base";
import { useInput } from "@/shared/hooks/game-2d/useInput";
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
    const tick = () => {
      const p = physics.current;
      const worldWidth = PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH;

      const viewportWidth = sceneRef.current?.offsetWidth || 1200;

      if (inputs.current.left) {
        p.vx = -moveSpeed;
        p.direction = "LEFT";
      } else if (inputs.current.right) {
        p.vx = moveSpeed;
        p.direction = "RIGHT";
      } else {
        p.vx *= PLAYER_CONTROLLER_TOKENS.FRICTION;
      }

      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce;
        p.isGrounded = false;
      }

      if (!p.isGrounded) {
        p.vy -= PLAYER_CONTROLLER_TOKENS.GRAVITY;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = 0;
      if (p.x > worldWidth - 50) p.x = worldWidth - 50;

      if (p.y <= PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y) {
        p.y = PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y;
        p.vy = 0;
        p.isGrounded = true;
      }

      let targetCameraX = p.x - viewportWidth / 2;

      const maxCameraX = worldWidth - viewportWidth;
      if (targetCameraX < 0) targetCameraX = 0;
      if (targetCameraX > maxCameraX) targetCameraX = maxCameraX;

      setVisualState({
        x: p.x,
        y: p.y,
        direction: p.direction,
        state: !p.isGrounded ? "JUMP" : Math.abs(p.vx) > 0.5 ? "RUN" : "IDLE",
        cameraX: targetCameraX,
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [moveSpeed, jumpForce]);

  return (
    <div ref={sceneRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH,
          transform: `translateX(${-visualState.cameraX}px)`,
        }}
      >
        <DummysScene
          size={10}
          items={30}
          sceneSize={[PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH, 500]}
          positionY={120}
        />

        <SpritePlayer
          state={visualState.state}
          direction={visualState.direction}
          positionX={visualState.x}
          positionY={visualState.y}
        />
      </div>
    </div>
  );
}
