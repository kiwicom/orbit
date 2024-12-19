import Theme from "../../../defaultTheme";
import { getBreakpointWidth, QUERIES } from "..";

describe("getBreakpointWidth", () => {
  const theme = Theme;

  it("should return correct value as string for each query", () => {
    expect(getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme)).toBe(
      `(min-width: ${theme.orbit.breakpointMediumMobile}px)`,
    );
    expect(getBreakpointWidth(QUERIES.LARGEMOBILE, theme)).toBe(
      `(min-width: ${theme.orbit.breakpointLargeMobile}px)`,
    );
    expect(getBreakpointWidth(QUERIES.TABLET, theme)).toBe(
      `(min-width: ${theme.orbit.breakpointTablet}px)`,
    );
    expect(getBreakpointWidth(QUERIES.DESKTOP, theme)).toBe(
      `(min-width: ${theme.orbit.breakpointDesktop}px)`,
    );
    expect(getBreakpointWidth(QUERIES.LARGEDESKTOP, theme)).toBe(
      `(min-width: ${theme.orbit.breakpointLargeDesktop}px)`,
    );
  });

  it("should return correct value for each query when pure is true", () => {
    expect(getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme, true)).toBe(
      theme.orbit.breakpointMediumMobile,
    );
    expect(getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)).toBe(
      theme.orbit.breakpointLargeMobile,
    );
    expect(getBreakpointWidth(QUERIES.TABLET, theme, true)).toBe(theme.orbit.breakpointTablet);
    expect(getBreakpointWidth(QUERIES.DESKTOP, theme, true)).toBe(theme.orbit.breakpointDesktop);
    expect(getBreakpointWidth(QUERIES.LARGEDESKTOP, theme, true)).toBe(
      theme.orbit.breakpointLargeDesktop,
    );
  });
});
