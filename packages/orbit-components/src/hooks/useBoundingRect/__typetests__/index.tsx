import React from "react";

import useBoundingRect from "..";

export default function Test() {
  const [, ref] = useBoundingRect<HTMLDivElement>({ height: null });
  return <div ref={ref} />;
}
