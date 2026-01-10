"use client";

import { useRef } from "react";

import { GameScene } from "@/shared/components/patterns";

export default function MainGamificationSlot() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="mx-auto w-full">
      <GameScene />
    </section>
  );
}
