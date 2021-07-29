// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorFormTooltip from "..";

describe("ErrorFormTooltip", () => {
  it("should have error", () => {
    const onClose = jest.fn();

    render(
      <div data-test="background">
        <ErrorFormTooltip
          onClose={onClose}
          onShow={() => {}}
          dataTest="test"
          tooltipShown
          error="error"
        />
        ,
      </div>,
    );

    userEvent.click(screen.getByTestId("background"));
    expect(onClose).toHaveBeenCalled();

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  it("should have help", () => {
    const onClose = jest.fn();

    render(
      <ErrorFormTooltip
        onClose={onClose}
        onShow={() => {}}
        dataTest="test"
        tooltipShown
        help="help"
      />,
    );

    userEvent.click(screen.getByLabelText("close"));
    expect(onClose).toHaveBeenCalled();

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("help")).toBeInTheDocument();
  });
});
