"use client";

import { useRef, useState, useCallback, useMemo } from "react";
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

interface PlayerControllerProps extends SpritePlayerRefUI {
  readonly sceneWidth: number;
  readonly sceneHeight: number;
}

export function PlayerController({
  initialX = 100,
  initialY = 100,
  moveSpeed = 3.5,
  jumpForce = 12,
  sceneWidth,
  sceneHeight
}: Readonly<PlayerControllerProps>) {
  
  const inputs = useInput();
  const { checkSensors } = useCollisionSensor();
  const lastDirectionRef = useRef<PlayerDirectionType>("RIGHT");
  const jumpLockFrames = useRef(0);
  
  const [activeInteraction, setActiveInteraction] = useState<ActiveInteractionUI | null>(null);

  const scaleFactor = useMemo(() => {
    return sceneHeight / PLAYER_CONTROLLER_TOKENS.WORLD_HEIGHT;
  }, [sceneHeight]);

  const handleCollisionAction = useCallback((interaction: ActiveInteractionUI | null) => {
    setActiveInteraction(prev => {
      if (!interaction && !prev) return null;
      if (interaction?.data?.uid === prev?.data?.uid) return prev;
      return interaction;
    });
  }, []);

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

      if (jumpLockFrames.current > 0) {
        jumpLockFrames.current -= ratio; 
      }

      let targetVx = 0;
      if (inputs.current.left) targetVx = -moveSpeed;
      if (inputs.current.right) targetVx = moveSpeed;

      if (targetVx !== 0) {
        p.vx = targetVx;
      } else {
        // Fricción exponencial para que se sienta igual en todos los Hz
        p.vx *= Math.pow(1 - T.FRICTION, ratio);
      }
      
      if (Math.abs(p.vx) < 0.1) p.vx = 0;

      // 2. GRAVEDAD LENTA
      if (!p.isGrounded) {
        // Aplicamos la gravedad multiplicada por el ratio
        p.vy -= T.GRAVITY * ratio;
        if (p.vy < T.TERMINAL_VELOCITY) p.vy = T.TERMINAL_VELOCITY;
      }

      // 3. CÁLCULO DE POSICIÓN SIGUIENTE (Siempre multiplicando velocidad por ratio)
      const nextX = p.x + (p.vx * ratio);
      const nextY = p.y + (p.vy * ratio);

      // 4. COLISIONES
      const contacts = checkSensors(nextX, p.y, nextY, STONE_ENTITIES);
      const floor = contacts.find((c) => c.type === "FLOOR");
      const wallR = contacts.find((c) => c.type === "WALL_RIGHT");
      const wallL = contacts.find((c) => c.type === "WALL_LEFT");

      let finalX = nextX;
      let finalY = nextY;

      if (wallR && p.vx > 0) { p.vx = 0; finalX = p.x; }
      if (wallL && p.vx < 0) { p.vx = 0; finalX = p.x; }

      // 5. ATERRIZAJE
      const isFalling = p.vy <= 0.1;
      if (jumpLockFrames.current <= 0 && isFalling) {
        if (floor) {
          finalY = floor.surfaceY ?? finalY;
          p.vy = 0;
          p.isGrounded = true;
        } else if (finalY <= T.WORLD_FLOOR_Y) {
          finalY = T.WORLD_FLOOR_Y;
          p.vy = 0;
          p.isGrounded = true;
        } else {
          p.isGrounded = false;
        }
      } else {
        p.isGrounded = false;
      }

      // 6. SALTO
      if (inputs.current.jump && p.isGrounded) {
        p.vy = jumpForce; 
        p.isGrounded = false;
        jumpLockFrames.current = 10; 
      }

      // Límites del mundo
      p.x = Math.max(0, Math.min(finalX, T.WORLD_WIDTH - 50));
      p.y = finalY;

      // 7. ACTUALIZACIÓN VISUAL
      if (p.vx < -0.1) lastDirectionRef.current = "LEFT";
      else if (p.vx > 0.1) lastDirectionRef.current = "RIGHT";

      const currentAnim: PlayerStateUI = !p.isGrounded ? "JUMP" : Math.abs(p.vx) > 0.1 ? "RUN" : "IDLE";

      const visualViewportWidth = sceneWidth / scaleFactor;
      const targetCameraX = p.x - visualViewportWidth / 2;
      const maxCameraX = T.WORLD_WIDTH - visualViewportWidth;
      const constrainedCameraX = Math.max(0, Math.min(targetCameraX, maxCameraX));

      setVisualState({
        x: p.x,
        y: p.y,
        direction: lastDirectionRef.current,
        state: currentAnim,
        cameraX: constrainedCameraX,
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [moveSpeed, jumpForce, checkSensors, sceneWidth, scaleFactor]);

  return (
    <div 
      className="relative overflow-hidden bg-slate-950"
      style={{ width: `${sceneWidth}px`, height: `${sceneHeight}px` }}
    >
      <div 
        className="absolute bottom-0 left-0" 
        style={{ 
          width: PLAYER_CONTROLLER_TOKENS.WORLD_WIDTH, 
          height: PLAYER_CONTROLLER_TOKENS.WORLD_HEIGHT,
          transformOrigin: "left bottom",
          transform: `translateX(${-visualState.cameraX * scaleFactor}px) scale(${scaleFactor})`, 
          transition: "none",
          willChange: "transform"
        }}
      >
        <LayerController
          cameraX={visualState.cameraX}
          playerVisuals={visualState}
          levelEntities={STONE_ENTITIES}
          onCollisionAction={handleCollisionAction}
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