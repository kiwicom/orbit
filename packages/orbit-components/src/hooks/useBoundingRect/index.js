// @flow
import * as React from "react";

import type { UseBoundingRect } from ".";

const useBoundingRect: UseBoundingRect = initialValue => {
  const [state, setState] = React.useState(() => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...initialValue,
  }));

  const ref = React.useRef<?HTMLElement>(null);
  React.useEffect(() => {
    const calculate = () => {
      if (ref && ref.current) {
        const dimensions = ref.current.getBoundingClientRect();
        /* $FlowFixMe
        Somehow the Flow is confused and returns type ClientRect instead of DOMRect and therefore it expects that it's a function.
        */
        setState(dimensions);
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  // $FlowFixMe
  return [state, ref];
};

export default useBoundingRect;
