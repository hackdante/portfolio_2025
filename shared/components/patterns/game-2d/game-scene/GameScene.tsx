"use client";

import { PlayerController } from "@/shared/components/composite";

export function GameScene() {
  return (
<div className="relative w-full h-[500px] bg-neutral-900 overflow-hidden rounded-xl border-4 border-ui-border">
      <div className="absolute bottom-0 w-full h-[60px] bg-emerald-900 border-t-4 border-emerald-700 z-20" />

      <div className="relative w-full h-full z-30">
        <PlayerController 
          initialX={100} 
          initialY={100} 
          moveSpeed={4} 
          jumpForce={10} 
        />
      </div>
      
      <div className="absolute top-4 left-4 z-50 ...">...</div>
    </div>
  );
}
