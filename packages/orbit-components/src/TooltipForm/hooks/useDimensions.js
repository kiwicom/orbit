// @flow
import { useEffect, useState } from "react";

import boundingClientRect from "../../utils/boundingClientRect";
import type { UseDimensions } from "./useDimensions";

const defaultPositions = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  pureTop: 0,
  pureLeft: 0,
  pureRight: 0,
  pureBottom: 0,
};

const useDimensions: UseDimensions = ({ iconBoundingRef, boundingRef }) => {
  const [dimensions, setDimensions] = useState({
    set: false,
    bounding: {
      ...defaultPositions,
    },
    iconBounding: {
      ...defaultPositions,
    },
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const iconBounding = boundingClientRect(iconBoundingRef);
      const bounding = boundingClientRect(boundingRef);

      setDimensions({
        set: true,
        bounding,
        iconBounding,
      });
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [iconBoundingRef, boundingRef]);

  return dimensions;
};

export default useDimensions;
