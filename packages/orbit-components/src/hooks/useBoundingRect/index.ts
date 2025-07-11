import * as React from "react";

type inexactNumber = number | null;

export interface Dimensions {
  x: inexactNumber;
  y: inexactNumber;
  width: inexactNumber;
  height: inexactNumber;
  top: inexactNumber;
  right: inexactNumber;
  bottom: inexactNumber;
  left: inexactNumber;
}

const useBoundingRect = <T extends HTMLElement>(
  initialValue: Partial<Dimensions> | undefined | null,
): [Dimensions, React.RefObject<T | null>] => {
  const [state, setState] = React.useState<Dimensions>(() => ({
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

  const ref = React.useRef<T>(null) as React.RefObject<T | null>;

  React.useEffect(() => {
    const calculate = () => {
      if (ref && ref.current) {
        const dimensions = ref.current.getBoundingClientRect();
        setState(dimensions);
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return [state, ref];
};

export default useBoundingRect;
