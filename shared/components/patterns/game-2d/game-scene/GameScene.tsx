"use client";

import { PlayerController } from "@/shared/components/composite";

export function GameScene() {
  return (
    <div className="relative w-full h-[500px]">
      <PlayerController
        initialX={100}
        initialY={100}
        moveSpeed={3.5}
        jumpForce={16}
      />
    </div>
  );
}
