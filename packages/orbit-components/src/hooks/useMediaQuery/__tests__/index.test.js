// @flow
import React from "react";
import { render, cleanup } from "@testing-library/react";

import useMediaQuery from "..";

describe("useMediaQuery", () => {
  it("should clean up when the component is unmounted", () => {
    const originalMatchMedia = window.matchMedia;
    const addListener = jest.fn();
    const removeListener = jest.fn();
    window.matchMedia = () => ({
      addListener,
      removeListener,
    });
    function App() {
      useMediaQuery();
      return null;
    }
    render(<App />);
    expect(addListener).toHaveBeenCalled();
    cleanup();
    expect(removeListener).toHaveBeenCalled();
    window.matchMedia = originalMatchMedia;
  });
});
