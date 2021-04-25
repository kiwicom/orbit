// @flow
import * as React from "react";

// see https://usehooks.com/usePrevious/
const usePrevious = (value: any): any | void => {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
