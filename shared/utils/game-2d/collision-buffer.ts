"use client";

import { CollisionMapType } from "@/shared/types";

const COLOR_THRESHOLD = 200;

export class CollisionBuffer {
  private static instance: CollisionBuffer;
  private maps: Map<string, CollisionMapType> = new Map();

  private constructor() {}

  public static getInstance(): CollisionBuffer {
    if (!CollisionBuffer.instance) {
      CollisionBuffer.instance = new CollisionBuffer();
    }
    return CollisionBuffer.instance;
  }

  public async loadMask(
    id: string,
    url: string,
    width: number,
    height: number
  ): Promise<void> {
    if (this.maps.has(id)) return;

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        if (!ctx) {
          reject(new Error("Failed to create canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height).data;

        this.maps.set(id, {
          data: imageData,
          width,
          height,
        });
        resolve();
      };

      img.onerror = () => reject(new Error(`Failed to load mask: ${url}`));
    });
  }

  public isPixelSolid(mapId: string, x: number, y: number): boolean {
    const map = this.maps.get(mapId);
    if (!map) return false;

    const canvasY = Math.floor(map.height - y);
    const canvasX = Math.floor(x);

    if (
      canvasX < 0 ||
      canvasX >= map.width ||
      canvasY < 0 ||
      canvasY >= map.height
    ) {
      return false;
    }

    const index = (canvasY * map.width + canvasX) * 4;
    return map.data[index] > COLOR_THRESHOLD;
  }

  public clear(): void {
    this.maps.clear();
  }
}

export const collisionBuffer = CollisionBuffer.getInstance();
