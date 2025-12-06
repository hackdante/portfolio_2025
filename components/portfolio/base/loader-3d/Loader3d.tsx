"use client";

export function Loader3d({ progress }: { progress: number }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/90">
      <div className="flex flex-col items-center gap-4 text-white">
        <span className="text-xl">Cargando...</span>

        <div className="w-48 h-3 bg-white/20 rounded-full">
          <div
            className="h-full bg-white transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-sm opacity-80">{Math.floor(progress)}%</span>
      </div>
    </div>
  );
}