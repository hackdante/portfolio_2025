import gsap from "gsap";
import { HorizontalLoopTimelineUI, HorizontalLoopUI } from "@/shared/utils";

export function horizontalLoop(
  items: HTMLElement[],
  config: HorizontalLoopUI
): HorizontalLoopTimelineUI {
  const itemsArray: HTMLElement[] = gsap.utils.toArray(items);
  
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      tl.totalTime(tl.rawTime() + tl.duration() * 100);
    },
  });

  const { length } = itemsArray;
  const startX = itemsArray[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(Number(config.snap) || 1);
  let curIndex = 0;

  gsap.set(itemsArray, {
    xPercent: (i: number, el: HTMLElement) => {
      const w = (widths[i] = parseFloat(String(gsap.getProperty(el, "width", "px"))));
      xPercents[i] = snap(
        (parseFloat(String(gsap.getProperty(el, "x", "px"))) / w) * 100 +
          Number(gsap.getProperty(el, "xPercent"))
      );
      return xPercents[i];
    },
  });

  gsap.set(itemsArray, { x: 0 });

  const lastIndex = length - 1;
  const totalWidth =
    itemsArray[lastIndex].offsetLeft +
    (xPercents[lastIndex] / 100) * widths[lastIndex] -
    startX +
    itemsArray[lastIndex].offsetWidth * Number(gsap.getProperty(itemsArray[lastIndex], "scaleX")) +
    (parseFloat(String(config.paddingRight)) || 0);

  for (let i = 0; i < length; i++) {
    const item = itemsArray[i];
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - startX;
    const distanceToLoop = distanceToStart + widths[i] * Number(gsap.getProperty(item, "scaleX"));

    tl.to(item, {
      xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
      duration: distanceToLoop / pixelsPerSecond,
    }, 0)
    .fromTo(item, { 
      xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) 
    }, {
      xPercent: xPercents[i],
      duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
      immediateRender: false,
    }, distanceToLoop / pixelsPerSecond)
    .add("label" + i, distanceToStart / pixelsPerSecond);
    
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index: number, vars: gsap.TweenVars = {}) {
    let targetIndex = index;
    if (Math.abs(targetIndex - curIndex) > length / 2) {
      targetIndex += targetIndex > curIndex ? -length : length;
    }
    const newIndex = gsap.utils.wrap(0, length, targetIndex);
    let time = times[newIndex];
    if (time > tl.time() !== targetIndex > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (targetIndex > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  const loop = tl as HorizontalLoopTimelineUI;

  Object.assign(loop, {
    next: (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars),
    prev: (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars),
    current: () => curIndex,
    toIndex: (index: number, vars?: gsap.TweenVars) => toIndex(index, vars),
    times: times
  });

  tl.progress(1, true).progress(0, true);
  
  if (config.reversed) {
    if (tl.vars.onReverseComplete) {
      tl.vars.onReverseComplete();
    }
    tl.reverse();
  }

  return loop;
}