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

  const handleMomentum = useCallback(
    throttle(nextMomentum => {
      setMomentum(nextMomentum);
      if (scrollWrapperCurrent) {
        scrollWrapperCurrent.scrollLeft += nextMomentum * timing * direction;
      }
    }, timing),
    [scrollWrapperCurrent, direction],
  );

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
    if (ref.current) {
      const handleDragStart = e => {
        setClickStartX(e.screenX);
        setScrollStartX(ref.current?.scrollLeft);
        setDirection(0);
      };

      const handleDragMove = e => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined && ref.current) {
          const touchDelta = clickStartX - e.screenX;
          // eslint-disable-next-line no-param-reassign
          ref.current.scrollLeft = scrollStartX + touchDelta;

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
      if (ref.current && ref.current.ontouchstart === undefined) {
        // eslint-disable-next-line no-param-reassign
        ref.current.onmousedown = handleDragStart;
        // eslint-disable-next-line no-param-reassign
        ref.current.onmousemove = handleDragMove;
        // eslint-disable-next-line no-param-reassign
        ref.current.onmouseup = handleDragEnd;
        // eslint-disable-next-line no-param-reassign
        ref.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX]);

  return { clickStartX, scrollStartX, isDragging, direction, momentum, lastScrollX, speed };
};

export default useScroll;
