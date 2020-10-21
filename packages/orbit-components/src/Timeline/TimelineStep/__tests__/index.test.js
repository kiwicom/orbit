// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import TimelineStep from "..";

jest.mock("../../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("#TimelineStep", () => {
  it("should have props", () => {
    const children = "children";
    const label = "In progress";
    const subLabel = "In time";

    render(
      <TimelineStep label={label} subLabel={subLabel}>
        {children}
      </TimelineStep>,
    );

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(subLabel)).toBeInTheDocument();
  });
});
