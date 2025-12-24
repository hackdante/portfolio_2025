"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export const useIsMounted = (): boolean => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
};
