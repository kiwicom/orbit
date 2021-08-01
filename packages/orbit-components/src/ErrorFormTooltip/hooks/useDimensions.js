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

const useDimensions: UseDimensions = ({ labelRef, contentRef, iconRef, children, inlineLabel }) => {
  const [dimensions, setDimensions] = useState({
    set: false,
    label: defaultPositions,
    content: defaultPositions,
    icon: defaultPositions,
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const label = boundingClientRect(labelRef);
      const content = boundingClientRect(contentRef);
      const icon = boundingClientRect(iconRef);

      if (label && content) {
        setDimensions({
          set: true,
          label,
          content,
          icon,
        });
      }
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [labelRef, contentRef, iconRef, children, inlineLabel]);

  return dimensions;
};

export default useDimensions;
