// @flow
import { useState, useEffect, useRef, useCallback } from "react";

import typeof UseIntersect from ".";

const useIntersect: UseIntersect = ({ root = null, rootMargin, threshold = 0 } = {}) => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);

  const ref = useCallback((el: Element | null) => {
    setNode(el);
  }, []);
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

  return { ref, entry };
};

export default useIntersect;
