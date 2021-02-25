import React from "react";

import useIntersect from "..";

export default function App() {
  const { ref, entry } = useIntersect();
  React.useEffect(() => {
    if (entry && entry.intersectionRatio > 0) {
      // do somthing
    }
  });
  return <div ref={ref} />;
}
