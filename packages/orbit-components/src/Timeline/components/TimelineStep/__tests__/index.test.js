// @flow
import React from "react";
import { render, screen } from "@testing-library/react";

import TimelineStep from "..";

jest.mock("../../../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("#TimelineStep", () => {
  it("should have props", () => {
    const children = "children";
    const step = "In progress";
    const time = "In time";

    render(
      <TimelineStep step={step} time={time}>
        {children}
      </TimelineStep>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(step)).toBeInTheDocument();
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});
