// @flow
import { useState, useEffect } from "react";

import type { UseDimensions } from "./useDimensions.js.flow";

const useDimensions: UseDimensions = ({ containerRef, popover, content }) => {
  const [positions, setPositions] = useState({
    containerTop: 0,
    containerLeft: 0,
    containerHeight: 0,
    containerWidth: 0,
    popoverHeight: 0,
    popoverWidth: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
  });

  useEffect(() => {
    const calculate = () => {
      if (containerRef && popover && content && typeof window !== "undefined") {
        const containerDimensions = containerRef.getBoundingClientRect(); // props.containerRef is passed with .current
        const popoverDimensions = popover.current.getBoundingClientRect();

        const contentHeight = content.current && content.current.getBoundingClientRect().height;

        setPositions({
          containerTop: containerDimensions.top,
          containerLeft: containerDimensions.left,
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          popoverHeight: popoverDimensions.height,
          popoverWidth: popoverDimensions.width,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          contentHeight,
        });
      }
    };

    calculate();

    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, [containerRef, content, popover]);

  return positions;
};

export default useDimensions;
