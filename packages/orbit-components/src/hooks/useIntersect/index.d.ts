declare const useIntersect: (
  intersect?: IntersectionObserverInit,
) => {
  ref: (el: Element | null) => void;
  entry: IntersectionObserverEntry | null;
};

export { useIntersect, useIntersect as default };
