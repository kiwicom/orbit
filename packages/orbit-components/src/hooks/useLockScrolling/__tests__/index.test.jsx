// @flow
import * as React from "react";
import { render } from "@testing-library/react";
import MatchMediaMock from "jest-matchmedia-mock";

import ThemeProvider from "../../../ThemeProvider";
import defaultTheme from "../../../defaultTheme";
import useLockScrolling from "..";

// $FlowFixMe
let matchMedia: MatchMediaMock;

beforeAll(() => {
  matchMedia = new MatchMediaMock();
});

afterEach(() => {
  matchMedia.clear();
});

afterAll(() => {
  matchMedia.destroy();
});

describe("useLockScrolling", () => {
  it("should maintain locked scrolling when nested component closes", () => {
    function Lock({ children }: {| children?: React.Node |}) {
      const ref = React.useRef(null);
      useLockScrolling(ref);
      return <div ref={ref}>{children}</div>;
    }

    const { rerender, unmount } = render(<Lock />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(
      <Lock>
        <Lock />
      </Lock>,
    );
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(<Lock />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    unmount();
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });

  it("should survive stress testing 😈", () => {
    function LockFoo({ children }: {| children?: React.Node |}) {
      const ref = React.useRef(null);
      useLockScrolling(ref);
      return <div ref={ref}>{children}</div>;
    }

    function LockBar({ children, lock = true }: {| children?: React.Node, lock?: boolean |}) {
      const ref = React.useRef(null);
      useLockScrolling(ref, lock);
      return <div ref={ref}>{children}</div>;
    }

    function LockBaz({ switchRefs = false }: {| switchRefs?: boolean |}) {
      const refA = React.useRef(null);
      const refB = React.useRef(null);
      useLockScrolling(switchRefs ? refB : refA, true, [switchRefs]);
      return (
        <>
          <div ref={refA} />
          <div ref={refB} />
        </>
      );
    }

    const { rerender, unmount } = render(<LockBaz />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(
      <>
        <LockFoo />
        <LockBaz />
      </>,
    );
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(
      <>
        <LockFoo>
          <LockBar lock={false} />
        </LockFoo>
      </>,
    );
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(<LockBar lock />);
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    rerender(
      <ThemeProvider theme={{ ...defaultTheme, lockScrolling: false }}>
        <>
          <LockFoo>
            <LockBar lock={false} />
          </LockFoo>
          <LockBaz />
        </>
      </ThemeProvider>,
    );
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });

    rerender(
      <ThemeProvider theme={{ ...defaultTheme, lockScrolling: true }}>
        <LockBaz switchRefs />
      </ThemeProvider>,
    );
    expect(document.body).toHaveStyle({ overflow: "hidden" });

    unmount();
    expect(document.body).not.toHaveStyle({ overflow: "hidden" });
  });
});
