"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SpritePlayer, ImageAssetLayer } from "@/shared/components/base";
import { useInput } from "@/shared/hooks";
import {
  SpritePlayerRefUI,
  PlayerPhysicsStateUI,
  VisualStateUI,
} from "./interface";
import { PLAYER_CONTROLLER_TOKENS } from "./playerControllerToken";
import { RONIN_ANIMATIONS, RONIN_SHEET } from "@/shared/constants";

const GAME_2D_SPRITES_PATH = "/images/game-2d";

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

      let newState: "IDLE" | "RUN" | "JUMP" = "IDLE";

      if (!p.isGrounded) {
        newState = "JUMP";
      } else if (Math.abs(p.vx) > 0.2) {
        newState = "RUN";
      } else {
        newState = "IDLE";
      }

      setVisualState((prev) => {
        const isSamePosition = prev.x === p.x && prev.y === p.y;
        const isSameState =
          prev.state === newState && prev.direction === p.direction;
        const isSameCamera = prev.cameraX === targetCameraX;

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
    <div ref={sceneRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH,
          transform: `translateX(${-visualState.cameraX}px)`,
        }}
      >
        <ImageAssetLayer
          imageUrl={`${GAME_2D_SPRITES_PATH}/sky_level_1.jpg`}
          width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
          height={340}
          y={150}
          repeat="repeat-x"
          tileSize={1070}
          parallaxFactor={0.1}
          autoScrollSpeed={0.2}
          cameraX={visualState.cameraX}
          zIndex={1}
          opacity={1}
        />

        <ImageAssetLayer
          imageUrl={`${GAME_2D_SPRITES_PATH}/mountains.png`}
          width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH}
          height={500}
          y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y - 10}
          repeat="repeat-x"
          tileSize={512}
          parallaxFactor={0.6}
          cameraX={visualState.cameraX}
          zIndex={1}
          opacity={1}
        />

        <ImageAssetLayer
          imageUrl={`${GAME_2D_SPRITES_PATH}/pagoda_kensai.png`}
          width={280}
          height={350}
          x={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 0.43}
          y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y + 34}
          repeat="no-repeat"
          tileSize={280}
          
          parallaxFactor={0.6}
          cameraX={visualState.cameraX}
          zIndex={1}
          opacity={1}
        />

        <ImageAssetLayer
          imageUrl={`${GAME_2D_SPRITES_PATH}/tree_sakura.png`}
          width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 1.5}
          height={400}
          y={30}
          parallaxFactor={0.5}
          zIndex={1}
          opacity={1}
        />

        <SpritePlayer
          state={visualState.state}
          direction={visualState.direction}
          positionX={visualState.x}
          positionY={visualState.y}
          sheet={RONIN_SHEET}
          animations={RONIN_ANIMATIONS}
        />

        <ImageAssetLayer
          imageUrl={`${GAME_2D_SPRITES_PATH}/grass.png`}
          width={PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH * 2}
          height={160}
          y={PLAYER_CONTROLLER_TOKENS.WORLD_FLOOR_Y - 80}
          repeat="repeat-x"
          tileSize={674}
          parallaxFactor={1.4}
          cameraX={visualState.cameraX}
          zIndex={100}
          opacity={1}
        />
      </div>
    </div>
  );
}
