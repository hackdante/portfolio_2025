"use client";

import { useEffect, useRef } from "react";

export function useLoopAudio(src: string, volume = 0.4) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    audio.loop = true;
    audio.volume = volume;

    const playAudio = () => {
      audio
        .play()
        .catch(() => {
          console.log("El navegador requiere interacción del usuario para reproducir audio.");
        });
    };

    playAudio();

    window.addEventListener("click", playAudio, { once: true });

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src, volume]);

  return audioRef;
}