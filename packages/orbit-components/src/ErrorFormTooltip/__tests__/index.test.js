// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorFormTooltip from "..";

describe("ErrorFormTooltip", () => {
  it("should have error", () => {
    const onClose = jest.fn();

    render(
      <ErrorFormTooltip
        onClose={onClose}
        onShow={() => {}}
        dataTest="test"
        tooltipShown
        error={<div data-test="error">error</div>}
      />,
    );

    userEvent.click((document.body: any));
    expect(onClose).toHaveBeenCalled();

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  it("should have help", () => {
    const onClose = jest.fn();

    render(
      <ErrorFormTooltip
        onClose={onClose}
        onShow={() => {}}
        dataTest="test"
        tooltipShown
        help={<div data-test="help">help</div>}
      />,
    );

    userEvent.click(screen.getByLabelText("close"));
    expect(onClose).toHaveBeenCalled();

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("help")).toBeInTheDocument();
  });
});
