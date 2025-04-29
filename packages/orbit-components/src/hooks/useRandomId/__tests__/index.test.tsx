import * as React from "react";
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

    render(
      <OrbitProvider theme={{ ...theme }}>
        <Component />
      </OrbitProvider>,
    );

    document.body?.appendChild(container);

    const { container: clientContainer } = render(
      <OrbitProvider theme={{ ...theme }}>
        <Component />
      </OrbitProvider>,
      { container, hydrate: false },
    );

    expect(consoleSpy).not.toHaveBeenCalled();
    expect(container).toBe(clientContainer);
    consoleSpy.mockRestore();
  });
});
