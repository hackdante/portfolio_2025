"use client";

import { useMemo } from "react";
import { DummysSceneUI } from "./interface";

export function DummysScene(props: DummysSceneUI) {
  const { size, items, sceneSize, positionY } = props;
  const [worldWidth] = sceneSize;

  const dummys = useMemo(() => {
    const temp = [];
    const spacing = worldWidth / items;

    for (let i = 0; i < items; i++) {
      const deterministicHue = (i * 137.5) % 360;

      temp.push({
        id: i,
        x: i * spacing + spacing / 2,
        color: `hsl(${deterministicHue}, 70%, 60%)`,
      });
    }
    return temp;
  }, [items, worldWidth]);

  return (
    <>
      {dummys.map((dummy) => (
        <div
          key={dummy.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: `${dummy.x}px`,
            bottom: `${positionY}px`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: dummy.color,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          }}
        />
      ))}
    </>
  );
}