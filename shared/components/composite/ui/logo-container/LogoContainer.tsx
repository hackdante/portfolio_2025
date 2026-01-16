"use client";

import { Suspense } from "react";
import { SpinnerDefault } from "@/shared/components/base";


export function LogoContainer() {
  return (
    <div className="flex items-center justify-center min-h-[162px] w-full">
      <Suspense 
        fallback={
          <SpinnerDefault 
            size={48}
            title="Cargando KENSAI" 
            description="Cargando logotipo..." 
          >
             <span className="opacity-0">Cargando...</span>
          </SpinnerDefault>
        }
      >
      </Suspense>
    </div>
  );
}