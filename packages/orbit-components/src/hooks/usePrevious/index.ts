import * as React from "react";

// see https://usehooks.com/usePrevious/
const usePrevious = <T>(value: T): T | void => {
  const ref = React.useRef<T | void>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
