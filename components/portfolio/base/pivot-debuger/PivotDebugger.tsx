"use client";

import { useLayoutEffect, useMemo } from "react";
import { AxesHelper } from "three";
import { PivotDebuggerPropsUI } from "./interface";

export function PivotDebugger({ targetRef, size = 1 }: PivotDebuggerPropsUI) {
  const axes = useMemo(() => new AxesHelper(size * 4), [size]);

  useLayoutEffect(() => {
    const currentTarget = targetRef.current;

    if (currentTarget) {
      currentTarget.add(axes);
    }

    return () => {
      if (currentTarget) {
        currentTarget.remove(axes);
      }
    };
  }, [targetRef, axes]);
  return null;
}