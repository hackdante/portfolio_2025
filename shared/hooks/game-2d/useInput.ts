import { useEffect, useRef } from "react";

export function useInput() {
  const inputs = useRef({
    left: false,
    right: false,
    jump: false,
    attack: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === "ArrowLeft" || e.code === "KeyA") inputs.current.left = true;
      if (e.code === "ArrowRight" || e.code === "KeyD") inputs.current.right = true;
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") inputs.current.jump = true;
      if (e.code === "KeyF") inputs.current.attack = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft" || e.code === "KeyA") inputs.current.left = false;
      if (e.code === "ArrowRight" || e.code === "KeyD") inputs.current.right = false;
      if (e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") inputs.current.jump = false;
      if (e.code === "KeyF") inputs.current.attack = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return inputs;

}