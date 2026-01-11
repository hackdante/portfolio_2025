"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ImageTransitionUI } from "./interface";

export function ImageTransition({
  width,
  height,
  activate,
  time,
  firstImgPath,
  secondImgPath,
  threeImgPath,
  reset,
  callToAction,
}: ImageTransitionUI) {
  const divRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const activeRef = callToAction ? btnRef : divRef;

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "none" },
      });

      tl.current
        .to(".layer-2", { opacity: 1, duration: time / 2 }, 0)
        .to(".layer-1", { opacity: 0, duration: time / 2 }, 0)
        .to(".layer-3", { opacity: 1, duration: time / 2 }, time / 2)
        .to(".layer-2", { opacity: 0, duration: time / 2 }, time / 2);
    },
    { scope: activeRef }
  );

  useEffect(() => {
    if (activate && !reset) {
      tl.current?.play();
    }
  }, [activate, reset]);

  useEffect(() => {
    if (reset) {
      tl.current?.reverse();
    }
  }, [reset]);

  const Content = (
    <>
      <div className="layer-1 absolute inset-0 z-30 opacity-100">
        <Image
          src={firstImgPath}
          alt="Layer 1"
          width={width}
          height={height}
          priority
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="layer-2 absolute inset-0 z-20 opacity-0">
        <Image
          src={secondImgPath}
          alt="Layer 2"
          width={width}
          height={height}
          className="object-cover"
          draggable={false}
        />
      </div>
      <div className="layer-3 absolute inset-0 z-10 opacity-0">
        <Image
          src={threeImgPath}
          alt="Layer 3"
          width={width}
          height={height}
          className="object-cover"
          draggable={false}
        />
      </div>
    </>
  );

  const commonClassName = `relative overflow-hidden border-0 bg-transparent p-0 block outline-none ${
    callToAction ? "cursor-pointer" : "cursor-default"
  }`;

  if (callToAction) {
    return (
      <button
        ref={btnRef}
        onClick={callToAction}
        style={{ width, height }}
        className={commonClassName}
        type="button"
      >
        {Content}
      </button>
    );
  }

  return (
    <div ref={divRef} style={{ width, height }} className={commonClassName}>
      {Content}
    </div>
  );
}
