import * as React from "react";
import { render, act } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import MatchMediaMock from "jest-matchmedia-mock";

import OrbitProvider from "../../../OrbitProvider";
import defaultTheme from "../../../defaultTheme";
import useMediaQuery from "..";

/**
 * With jest-matchmedia-mock it wasn't possible to fully test changing viewport sizes,
 * only initialization, because it triggers MediaQueryList listeners only query matches,
 * not when it stops matching, so we're testing this aspect with Cypresss.
 */

const theme = { ...defaultTheme };

const mediumMobileQuery = `(min-width: ${theme.orbit.widthBreakpointMediumMobile}px)`;

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
        <OrbitProvider theme={theme}>
          <MediaQuery
            onChange={query => {
              result = query;
            }}
          />
        </OrbitProvider>
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

  it("should support custom breakpoint", () => {
    let result;

    const widthBreakpointMediumMobile = theme.orbit.widthBreakpointMediumMobile - 100;

    const matchMedia = new MatchMediaMock();

    matchMedia.useMediaQuery(`(min-width: ${widthBreakpointMediumMobile}px)`);

    render(
      <OrbitProvider
        theme={{
          ...theme,
          orbit: {
            ...theme.orbit,
            widthBreakpointMediumMobile,
          },
        }}
      >
        <MediaQuery
          onChange={query => {
            result = query;
          }}
        />
      </OrbitProvider>,
    );

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
  });

  it("should work without context", () => {
    let result;
    const matchMedia = new MatchMediaMock();
    matchMedia.useMediaQuery(mediumMobileQuery);
    render(
      <MediaQuery
        onChange={query => {
          result = query;
        }}
      />,
    );
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
  });

  describe("should update query object expected number of times", () => {
    it("with context", () => {
      let updateCount = 0;

      function UpdateCounter() {
        const query = useMediaQuery();
        React.useEffect(() => {
          updateCount += 1;
        }, [query]);
        return null;
      }

      const matchMedia = new MatchMediaMock();

      const { rerender } = render(
        <OrbitProvider theme={theme}>
          <UpdateCounter />
        </OrbitProvider>,
      );

      expect(updateCount).toBe(2);

      rerender(
        // change theme object reference to trigger re-render
        <OrbitProvider theme={{ ...theme }}>
          <UpdateCounter />
        </OrbitProvider>,
      );

      // nothing changed, so query object shouldn't either
      expect(updateCount).toBe(2);

      act(() => {
        matchMedia.useMediaQuery(mediumMobileQuery);
      });

      rerender(
        <OrbitProvider theme={{ ...theme }}>
          <UpdateCounter />
        </OrbitProvider>,
      );

      // viewport changed, query object should have updated
      expect(updateCount).toBe(3);

      rerender(
        <OrbitProvider
          theme={{
            ...theme,
            orbit: {
              ...theme.orbit,
              widthBreakpointMediumMobile: theme.orbit.widthBreakpointMediumMobile + 1,
            },
          }}
        >
          <UpdateCounter />
        </OrbitProvider>,
      );

      // breakpoint no longer matches the viewport, query object should have updated
      expect(updateCount).toBe(4);

      matchMedia.destroy();
    });

    it("without context", () => {
      let updateCount = 0;

      function UpdateCounter() {
        const query = useMediaQuery();
        React.useEffect(() => {
          updateCount += 1;
        }, [query]);
        return null;
      }

      const matchMedia = new MatchMediaMock();

      render(<UpdateCounter />);

      expect(updateCount).toBe(2);

      act(() => {
        matchMedia.useMediaQuery(mediumMobileQuery);
      });

      expect(updateCount).toBe(3);

      matchMedia.destroy();
    });
  });
});
