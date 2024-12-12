import * as React from "react";
import { render } from "@testing-library/react";

import { defaultTheme, OrbitProvider } from "../../..";
import { useColorScheme } from "..";

const mockMatchMedia = jest.fn();
window.matchMedia = mockMatchMedia;

const TestComponent = () => {
  const isDark = useColorScheme();
  return <div data-test="dark-mode">{isDark ? "dark" : "light"}</div>;
};

describe("useColorScheme", () => {
  beforeEach(() => {
    mockMatchMedia.mockReset();
  });

  it("should return false for light theme", () => {
    mockMatchMedia.mockReturnValue({ matches: false });
    const { getByTestId } = render(
      <OrbitProvider theme={defaultTheme} useId={React.useId}>
        <TestComponent />
      </OrbitProvider>,
    );
    expect(getByTestId("dark-mode")).toHaveTextContent("light");
  });

  it("should return true for dark theme", () => {
    mockMatchMedia.mockReturnValue({ matches: false });
    const { getByTestId } = render(
      <OrbitProvider theme={{ ...defaultTheme, colorScheme: "dark" }} useId={React.useId}>
        <TestComponent />
      </OrbitProvider>,
    );
    expect(getByTestId("dark-mode")).toHaveTextContent("dark");
  });

  it("should follow system preference when set to system", () => {
    mockMatchMedia.mockReturnValue({ matches: true });
    const { getByTestId } = render(
      <OrbitProvider theme={{ ...defaultTheme, colorScheme: "system" }} useId={React.useId}>
        <TestComponent />
      </OrbitProvider>,
    );
    expect(getByTestId("dark-mode")).toHaveTextContent("dark");
  });
});
