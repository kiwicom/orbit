// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";

import ThemeProvider from "../../../ThemeProvider";
import theme from "../../../defaultTheme";
import useMediaQuery from "..";

let matchMedia;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

afterAll(() => {
  matchMedia.destroy();
});

describe("useMediaQuery", () => {
  it("should have expected output", () => {
    let result;

    function MediaQuery() {
      const query = useMediaQuery();
      result = [
        `mediumMobile: ${String(query.isMediumMobile)}`,
        `largeMobile: ${String(query.isLargeMobile)}`,
        `tablet: ${String(query.isTablet)}`,
        `desktop: ${String(query.isDesktop)}`,
        `largeDesktop: ${String(query.isLargeDesktop)}`,
        `preferReducedMotion: ${String(query.prefersReducedMotion)}`,
      ];
      return null;
    }

    function App() {
      return (
        <ThemeProvider theme={{ ...theme }}>
          <MediaQuery />
        </ThemeProvider>
      );
    }

    /**
     * jest-matchmedia-mock's functionality is very agnostic, unlike the browser it only matches
     * queries exactly, so e.g. a larger value than this will not trigger the mediumMobile handler
     * that's why we'll test only initialization here and leave the rest to e2e tests
     */

    matchMedia.useMediaQuery(`(min-width: ${theme.orbit.widthBreakpointMediumMobile}px)`);

    render(<App />);

    expect(result).toMatchInlineSnapshot(`
      Array [
        "mediumMobile: true",
        "largeMobile: false",
        "tablet: false",
        "desktop: false",
        "largeDesktop: false",
        "preferReducedMotion: false",
      ]
    `);
  });
});
