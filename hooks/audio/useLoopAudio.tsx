"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type MediaError = DOMException | undefined;

export function useLoopAudio(src: string, volume = 0.4) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<MediaError>(undefined);

  const startPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setError(undefined);
      })
      .catch((e: DOMException) => {
        console.warn("Autoplay bloqueado, esperando interacción.");
        setError(e);
        setIsPlaying(false);
      });
  }, []);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleInteraction = () => {
      startPlayback();
      cleanup(); 
    };

    const cleanup = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };

    startPlayback();

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
      cleanup();
    };
  }, [src, volume, startPlayback]);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      startPlayback();
    }
  }, [isPlaying, startPlayback]);

  return {
    audioRef,
    isPlaying,
    togglePlayback,
    error,
    startPlayback,
  };
}