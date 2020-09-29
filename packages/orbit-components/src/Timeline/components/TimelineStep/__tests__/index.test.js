// @flow
import React from "react";
import { render, screen } from "@testing-library/react";

import TimelineStep from "..";

jest.mock("../../../../Hide", () => ({ children }) => children);

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

    expect(screen.getAllByText(children)).toHaveLength(2);
    expect(screen.getAllByText(step)).toHaveLength(2);
    expect(screen.getAllByText(time)).toHaveLength(2);
  });
});
