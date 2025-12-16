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

    window.removeEventListener("click", startPlaybackOnInteraction);
    window.removeEventListener("keydown", startPlaybackOnInteraction);

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setError(undefined);
      })
      .catch((e: DOMException) => {
        console.warn(
          "Reproducción automática bloqueada. Esperando interacción.",
          e
        );
        setError(e);
        setIsPlaying(false);
      });
  }, []);

  const startPlaybackOnInteraction = useCallback(() => {
    startPlayback();
  }, [startPlayback]);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    audio.loop = true;
    audio.volume = volume;

    startPlayback();

    if (audioRef.current && !isPlaying) {
      window.addEventListener("click", startPlaybackOnInteraction, {
        once: true,
      });
      window.addEventListener("keydown", startPlaybackOnInteraction, {
        once: true,
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
      window.removeEventListener("click", startPlaybackOnInteraction);
      window.removeEventListener("keydown", startPlaybackOnInteraction);
    };
  }, [src, volume, startPlaybackOnInteraction, startPlayback]);

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
