declare const useIntersect: (
  intersect?: IntersectionObserverInit,
) => {
  ref: React.Dispatch<React.SetStateAction<null | Element>> | null;
  entry: IntersectionObserverEntry | null;
};

export { useIntersect, useIntersect as default };
