import Theme from "../../../defaultTheme";
import { getBreakpointWidth, QUERIES } from "..";

describe("getBreakpointWidth", () => {
  const theme = Theme;

  it("should return correct value as string for each query", () => {
    expect(getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme)).toBe(
      `(min-width: ${theme.orbit.widthBreakpointMediumMobile}px)`,
    );
    expect(getBreakpointWidth(QUERIES.LARGEMOBILE, theme)).toBe(
      `(min-width: ${theme.orbit.widthBreakpointLargeMobile}px)`,
    );
    expect(getBreakpointWidth(QUERIES.TABLET, theme)).toBe(
      `(min-width: ${theme.orbit.widthBreakpointTablet}px)`,
    );
    expect(getBreakpointWidth(QUERIES.DESKTOP, theme)).toBe(
      `(min-width: ${theme.orbit.widthBreakpointDesktop}px)`,
    );
    expect(getBreakpointWidth(QUERIES.LARGEDESKTOP, theme)).toBe(
      `(min-width: ${theme.orbit.widthBreakpointLargeDesktop}px)`,
    );
  });

  it("should return correct value for each query when pure is true", () => {
    expect(getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme, true)).toBe(
      theme.orbit.widthBreakpointMediumMobile,
    );
    expect(getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true)).toBe(
      theme.orbit.widthBreakpointLargeMobile,
    );
    expect(getBreakpointWidth(QUERIES.TABLET, theme, true)).toBe(theme.orbit.widthBreakpointTablet);
    expect(getBreakpointWidth(QUERIES.DESKTOP, theme, true)).toBe(
      theme.orbit.widthBreakpointDesktop,
    );
    expect(getBreakpointWidth(QUERIES.LARGEDESKTOP, theme, true)).toBe(
      theme.orbit.widthBreakpointLargeDesktop,
    );
  });
});
