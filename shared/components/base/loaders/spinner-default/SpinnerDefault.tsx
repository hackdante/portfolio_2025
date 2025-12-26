"use client";
import { SpinnerDefaultUI } from "./interface";

export function SpinnerDefault({ 
  size = 24, 
  title = "Cargando", 
  description = "Espere un momento...", 
  children 
}: SpinnerDefaultUI) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div 
        className="relative"
        style={{ width: size, height: size }}
        role="status"
        aria-label={title}
      >
        <div className="absolute inset-0 border-2 border-ui-primary/10 rounded-full" />
        <div className="absolute inset-0 border-2 border-t-ui-primary rounded-full animate-spin" />
      </div>
      {children || (
        <p className="text-[10px] font-mono tracking-tighter text-ui-text-primary/40 uppercase">
          {description}
        </p>
      )}
    </div>
  );
}