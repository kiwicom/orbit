import * as React from "react";
import { renderToString } from "react-dom/server";
import MatchMediaMock from "jest-matchmedia-mock";

import { render } from "../../../test-utils";
import OrbitProvider from "../../../OrbitProvider";
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
      <OrbitProvider theme={{ ...theme }} useId={React.useId}>
        <Component />
      </OrbitProvider>,
    );

    document.body?.appendChild(container);

    const { container: clientContainer } = render(
      <OrbitProvider theme={{ ...theme }} useId={React.useId}>
        <Component />
      </OrbitProvider>,
      { container, hydrate: true },
    );

    expect(consoleSpy).not.toHaveBeenCalled();
    expect(container).toBe(clientContainer);
    consoleSpy.mockRestore();
  });
});
