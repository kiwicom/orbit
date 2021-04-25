// @flow
import * as React from "react";

import useIntersect from "..";

export default function App(): React.Element<"div"> {
  const { ref, entry } = useIntersect();
  React.useEffect(() => {
    if (entry && entry.intersectionRatio > 0) {
      // do somthing
    }
  });
  return <div ref={ref} />;
}
