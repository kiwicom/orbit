// @flow
import { useState, useEffect, useRef } from "react";

export default ({ root = null, rootMargin, threshold = 0 }: IntersectionObserverOptions) => {
  if (typeof window === "undefined") {
    return { ref: null, entry: null };
  }

  const [entry, updateEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    if ("IntersectionObserver" in window === false) {
      return () => {};
    }

    observer.current = new window.IntersectionObserver(([ent]) => updateEntry(ent), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObs } = observer;

    if (node) currentObs?.observe(node);

    return () => currentObs?.disconnect();
  }, [node, root, rootMargin, threshold]);

  return { ref: setNode, entry };
};
