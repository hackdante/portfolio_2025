"use client";

import { JSX } from "react";
import { Html, useProgress } from "@react-three/drei";
import { LOADER_3D_TOKEN } from "./loader3DToken";
import { Loader3DPropsUI } from "./interface";

export function Loader3D({ title = "Cargando" }: Loader3DPropsUI): JSX.Element {
  const { progress } = useProgress();

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <Html center>
      <div className={LOADER_3D_TOKEN.container}>
        <div className="relative flex items-center justify-center">
          <svg className={LOADER_3D_TOKEN.ring.svg} viewBox="0 0 80 80">
            <circle
              className={LOADER_3D_TOKEN.ring.track}
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="40"
              cy="40"
            />

            <circle
              className={LOADER_3D_TOKEN.ring.fill}
              strokeWidth="4"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: offset }}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="40"
              cy="40"
            />
          </svg>

          <div className={LOADER_3D_TOKEN.content}>
            <span className={LOADER_3D_TOKEN.percentage}>
              {Math.round(progress)}
              <span className="text-[10px] ml-0.5 opacity-50">%</span>
            </span>
          </div>
        </div>

        <p className={LOADER_3D_TOKEN.label}>{title}</p>
      </div>
    </Html>
  );
}
