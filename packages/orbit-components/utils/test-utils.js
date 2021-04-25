// @flow
import { getBreakpointWidth } from "../src/utils/mediaQuery";
import defaultTheme from "../src/defaultTheme";

type Breakpoint =
  | "prefersReduceMotion"
  | "isMediumMobile"
  | "isLargeMobile"
  | "isTablet"
  | "isLargeDesktop"
  | "isDesktop";

class BreakpointChangeEvent extends CustomEvent {
  constructor(detail) {
    super("BreakpointChange", { detail });
  }
}

export function mockBreakpoint(breakpoint: Breakpoint, initialMatches: boolean = false): any {
  const mediaQuery = getBreakpointWidth(breakpoint, defaultTheme);
  const matchMediaSpy = jest.spyOn(window, "matchMedia");
  let matches = initialMatches;
  matchMediaSpy.mockImplementation(mq => {
    function getMatches() {
      return parseInt(mq, 10) >= parseInt(mediaQuery, 10) ? matches : !matches;
    }
    const mqList = {
      matches: getMatches(),
      addListener: handler => {
        window.addEventListener("BreakpointChange", () => {
          mqList.matches = getMatches();
          handler();
        });
      },
    };
    return mqList;
  });
  return {
    mockRestore: matchMediaSpy.mockRestore,
    toggle: () => {
      window.dispachEvent(new BreakpointChangeEvent());
      matches = !matches;
    },
  };
}
