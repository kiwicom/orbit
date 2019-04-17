// @flow
import { useEffect, useState } from "react";

import type { UseParentsWidth } from "./useParentsWidth";

const useParentsWidth: UseParentsWidth = (initialWidth, parentRef) => {
  const [width, setWidth] = useState(initialWidth);
  const calculateWidth = () => {
    if (parentRef?.current) {
      const parentWidth = parentRef.current.getBoundingClientRect().width;
      setWidth(parentWidth);
    }
  };
  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);
  return width;
};

export default useParentsWidth;
