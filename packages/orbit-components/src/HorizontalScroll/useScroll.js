// @flow
import { useState, useEffect, useCallback } from "react";

import { throttle } from "./helpers";

const timing = (1 / 60) * 1000;
// eslint-disable-next-line no-bitwise
const decay = (v: number) => -0.1 * ((1 / timing) ^ 4) + v;

type UseScroll = (ref: {| current: HTMLElement | null |}) => {|
  isDragging: boolean,
  clickStartX: ?number,
  scrollStartX: ?number,
  direction: number,
  momentum: number,
  speed: number,
  lastScrollX: number,
|};

const useScroll: UseScroll = ref => {
  const [clickStartX, setClickStartX] = useState();
  const [scrollStartX, setScrollStartX] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);
  const [momentum, setMomentum] = useState(0);
  const [lastScrollX, setLastScrollX] = useState(0);
  const [speed, setSpeed] = useState(0);

  const scrollWrapperCurrent = ref.current;

  const handleLastScrollX = useCallback(x => setLastScrollX(x), []);

  const handleMomentum = throttle(nextMomentum => {
    setMomentum(nextMomentum);
    if (scrollWrapperCurrent) {
      scrollWrapperCurrent.scrollLeft += nextMomentum * timing * direction;
    }
  }, timing);

  useEffect(() => {
    if (direction !== 0) {
      if (momentum > 0.1 && !isDragging) {
        handleMomentum(decay(momentum));
      } else if (isDragging) {
        setMomentum(speed);
      } else {
        setDirection(0);
      }
    }
  }, [momentum, isDragging, speed, direction, handleMomentum]);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const handleDragStart = e => {
        setClickStartX(e.screenX);
        setScrollStartX(currentRef.scrollLeft);
        setDirection(0);
      };

      const handleDragMove = e => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined && currentRef) {
          const touchDelta = clickStartX - e.screenX;
          currentRef.scrollLeft = scrollStartX + touchDelta;

          if (Math.abs(touchDelta) > 1) {
            setIsDragging(true);
            setDirection(touchDelta / Math.abs(touchDelta));
            setSpeed(Math.abs((lastScrollX - e.screenX) / timing));
            handleLastScrollX(e.screenX);
          }
        }
      };

      const handleDragEnd = () => {
        if (isDragging && clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
          setIsDragging(false);
        }
      };

      // $FlowFixMe: on mobile browser is null, on desktop is undefined
      if (currentRef && currentRef.ontouchstart === undefined) {
        currentRef.onmousedown = handleDragStart;
        currentRef.onmousemove = handleDragMove;
        currentRef.onmouseup = handleDragEnd;
        currentRef.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX]);

  return {
    clickStartX,
    scrollStartX,
    isDragging,
    direction,
    momentum,
    lastScrollX,
    speed,
  };
};

export default useScroll;
