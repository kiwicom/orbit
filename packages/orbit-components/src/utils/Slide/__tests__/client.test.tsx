import * as React from "react";

import { render, screen, act } from "../../../test-utils";
import Slide from "..";

describe(`slide util`, () => {
  it("should have a11y", () => {
    render(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );

    expect(screen.getByText("Expanded content")).toHaveAttribute("aria-hidden", "false");
  });

  it("should: expand, collapse, expand", () => {
    jest.useFakeTimers();

    const { rerender } = render(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );
    expect(screen.getByText("Expanded content")).toHaveStyle("max-height: 20px");

    rerender(
      <Slide maxHeight={20} expanded={false}>
        Collapsed content
      </Slide>,
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText("Collapsed content")).toHaveStyle("max-height: 0");

    rerender(
      <Slide maxHeight={20} expanded>
        Expanded content
      </Slide>,
    );
    expect(screen.getByText("Expanded content")).toHaveStyle("max-height: 20px");

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText("Expanded content")).toHaveStyle({ maxHeight: undefined });
  });
});
