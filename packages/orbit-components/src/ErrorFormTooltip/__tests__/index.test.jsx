// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorFormTooltip from "..";

describe("ErrorFormTooltip", () => {
  it("should have error", () => {
    const onShown = jest.fn();
    const { container } = render(
      <ErrorFormTooltip dataTest="test" onShown={onShown} shown error="error" />,
    );

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("error")).toBeInTheDocument();
    userEvent.click(container);
    expect(onShown).toHaveBeenCalled();
  });

  it("should have help", () => {
    const onShown = jest.fn();
    render(<ErrorFormTooltip dataTest="test" onShown={onShown} shown help="help" />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("help")).toBeInTheDocument();

    userEvent.click(screen.getByLabelText("close"));
    expect(onShown).toHaveBeenCalled();
  });
});
