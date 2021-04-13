// @flow
import * as React from "react";

import useBoundingRect from "..";

const Test: React.ComponentType<{||}> = () => {
  const [, ref] = useBoundingRect({ height: null });
  return <div ref={ref} />;
};

export default Test;
