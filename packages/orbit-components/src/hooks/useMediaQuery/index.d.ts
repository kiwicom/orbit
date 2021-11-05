export interface QueryMap<T> {
  readonly isMediumMobile: T;
  readonly isLargeMobile: T;
  readonly isTablet: T;
  readonly isDesktop: T;
  readonly isLargeDesktop: T;
  readonly prefersReducedMotion: T;
}

declare function useMediaQuery(): QueryMap<boolean | null>;

export default useMediaQuery;
