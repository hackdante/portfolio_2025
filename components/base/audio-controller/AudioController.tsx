"use client";

import { useLoopAudio } from "@/hooks/audio/useLoopAudio";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface AudioControllerUI {
  src: string;
  volume: number;
}

export function AudioController({ src, volume }: AudioControllerUI) {
  const { isPlaying, togglePlayback, error, startPlayback } = useLoopAudio(
    src,
    volume
  );

  const showInitialPlayButton = !isPlaying && !!error;

  const Icon = isPlaying ? FaVolumeUp : FaVolumeMute;

  return (
    <div className="fixed top-6 right-6 z-50">
      {showInitialPlayButton && (
        <button
          onClick={startPlayback}
          className="p-3 bg-black/50 text-white rounded-full transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Iniciar Audio de la Escena"
        >
          <FaVolumeMute size={20} />
        </button>
      )}

      {!showInitialPlayButton && (
        <button
          onClick={togglePlayback}
          className="p-3 bg-black/50 text-white rounded-full transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label={isPlaying ? "Silenciar Audio" : "Activar Audio"}
        >
          <Icon size={20} />
        </button>
      )}
    </div>
  );
}
