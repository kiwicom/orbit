declare const useIntersect: (
  intersect?: IntersectionObserverInit,
) => {
  ref: (el: Element | null) => void;
  entry: IntersectionObserverEntry | null;
  observer: IntersectionObserver | null;
};

export { useIntersect, useIntersect as default };
