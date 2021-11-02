// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import MatchMediaMock from "jest-matchmedia-mock";

import ThemeProvider from "../../../ThemeProvider";
import theme from "../../../defaultTheme";
import useMediaQuery from "..";

function MediaQuery({ onChange }) {
  const query = useMediaQuery();
  // enforce ordering by smallest to largest to make snapshots easier to read
  onChange(
    [
      `isMediumMobile`,
      `isLargeMobile`,
      `isTablet`,
      `isDesktop`,
      `isLargeDesktop`,
      `prefersReducedMotion`,
    ].map(key => `${key}: ${String(query[key])}`),
  );
  return null;
}

describe("useMediaQuery", () => {
  it("should have expected output", () => {
    let result;

    function App() {
      return (
        <ThemeProvider theme={{ ...theme }}>
          <MediaQuery
            onChange={query => {
              result = query;
            }}
          />
        </ThemeProvider>
      );
    }

    const container = document.createElement("div");
    document.body?.appendChild(container);
    container.innerHTML = renderToString(<App />);

    expect(result).toMatchInlineSnapshot(`
      Array [
        "isMediumMobile: null",
        "isLargeMobile: null",
        "isTablet: null",
        "isDesktop: null",
        "isLargeDesktop: null",
        "prefersReducedMotion: null",
      ]
    `);

    // mocking after SSR because servers don't have window.matchMedia
    const matchMedia = new MatchMediaMock();

    /**
     * jest-matchmedia-mock's functionality is very agnostic, unlike the browser it only matches
     * queries exactly, so e.g. a larger value than this will not trigger the mediumMobile handler
     * that's why we'll test only initialization here and leave the rest to e2e tests
     */

    const mediumMobileQuery = `(min-width: ${theme.orbit.widthBreakpointMediumMobile}px)`;
    matchMedia.useMediaQuery(mediumMobileQuery);

    const { unmount } = render(<App />, { container, hydrate: true });

    expect(result).toMatchInlineSnapshot(`
      Array [
        "isMediumMobile: true",
        "isLargeMobile: false",
        "isTablet: false",
        "isDesktop: false",
        "isLargeDesktop: false",
        "prefersReducedMotion: false",
      ]
    `);

    expect(matchMedia.getListeners(mediumMobileQuery)).toHaveLength(1);

    unmount();

    expect(matchMedia.getListeners(mediumMobileQuery)).toHaveLength(0);

    // destroying instead of clearing until fix for matchMedia.clear() gets published
    // https://github.com/dyakovk/jest-matchmedia-mock/pull/12
    matchMedia.destroy();
  });
});
