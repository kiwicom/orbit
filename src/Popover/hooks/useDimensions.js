// @flow
import { useState, useEffect } from "react";

import type { UseDimensions } from "./useDimensions.js.flow";
import boundingClientRect from "../../utils/boundingClientRect";

const useDimensions: UseDimensions = ({
  containerRef,
  popover,
  content,
  fixed,
  scrollableParent,
}) => {
  const [positions, setPositions] = useState({
    containerTop: 0,
    containerPureTop: 0,
    containerLeft: 0,
    containerHeight: 0,
    containerWidth: 0,
    popoverHeight: 0,
    popoverWidth: 0,
    windowScrollTop: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
    documentHeight: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const containerDimensions = boundingClientRect(containerRef);
      const popoverDimensions = boundingClientRect(popover);
      const contentDimensions = boundingClientRect(content);

      if (
        containerDimensions &&
        popoverDimensions &&
        contentDimensions &&
        typeof window !== "undefined"
      ) {
        const documentDimensions = window.document.body.getBoundingClientRect();

        setPositions({
          containerTop: containerDimensions.top,
          containerLeft: containerDimensions.left,
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          containerPureTop: containerDimensions.pureTop,
          popoverHeight: popoverDimensions.height,
          popoverWidth: popoverDimensions.width,
          windowScrollTop: window.scrollY || window.pageYOffset,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          contentHeight: contentDimensions.height,
          documentHeight: documentDimensions.height,
        });
      }
    };

    calculate();

    window.addEventListener("resize", calculate);
    if (fixed) window.addEventListener("scroll", calculate);
    if (scrollableParent !== document.body && scrollableParent)
      scrollableParent.addEventListener("scroll", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      if (fixed) window.removeEventListener("scroll", calculate);
      if (scrollableParent !== document.body && scrollableParent)
        scrollableParent.removeEventListener("scroll", calculate);
    };
  }, [containerRef, content, popover, fixed, scrollableParent]);

  return positions;
};

export default useDimensions;
