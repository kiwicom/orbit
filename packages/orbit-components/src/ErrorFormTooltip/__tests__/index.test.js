// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorFormTooltip from "..";

describe("ErrorFormTooltip", () => {
  it("should have error", () => {
    render(<ErrorFormTooltip dataTest="test" shown error="error" />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  it("should have help", () => {
    render(<ErrorFormTooltip dataTest="test" shown help="help" />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("help")).toBeInTheDocument();

    userEvent.click(screen.getByLabelText("close"));
    expect(screen.queryByText("help")).not.toBeInTheDocument();
  });
});
