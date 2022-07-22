import * as React from "react";
import { render } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import MatchMediaMock from "jest-matchmedia-mock";

import ThemeProvider from "../../../ThemeProvider";
import theme from "../../../defaultTheme";
import useRandomId from "..";

const Component = () => {
  const id = useRandomId();
  return <>{id}</>;
};

let matchMedia: MatchMediaMock;

describe("useRandomId", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  afterAll(() => {
    matchMedia.destroy();
  });

  it("should have same value on server and client", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    const container = document.createElement("div");

    container.innerHTML = renderToString(
      <ThemeProvider theme={{ ...theme }}>
        <Component />
      </ThemeProvider>,
    );

    document.body?.appendChild(container);

    const { container: clientContainer } = render(
      <ThemeProvider theme={{ ...theme }}>
        <Component />
      </ThemeProvider>,
      { container, hydrate: true },
    );

    expect(consoleSpy).not.toHaveBeenCalled();
    expect(container).toBe(clientContainer);
    consoleSpy.mockRestore();
  });
});
