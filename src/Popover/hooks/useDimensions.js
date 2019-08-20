// @flow

import { useState, useEffect } from 'react';

import type { UseDimensions } from './useDimensions.js.flow';
import boundingClientRect from '../../utils/boundingClientRect';

const useDimensions: UseDimensions = ({ containerRef, popover, content }) => {
  const [positions, setPositions] = useState({
    containerTop: 0,
    containerLeft: 0,
    containerHeight: 0,
    containerWidth: 0,
    popoverHeight: 0,
    popoverWidth: 0,
    windowScrollTop: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
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
        typeof window !== 'undefined'
      ) {
        setPositions({
          containerTop: containerDimensions.top,
          containerLeft: containerDimensions.left,
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          popoverHeight: popoverDimensions.height,
          popoverWidth: popoverDimensions.width,
          windowScrollTop: window.scrollY,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          contentHeight: contentDimensions.height,
        });
      }
    };

    calculate();

    window.addEventListener('resize', calculate);
    return () => {
      window.removeEventListener('resize', calculate);
    };
  }, [containerRef, content, popover]);

  return positions;
};

export default useDimensions;
