import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Alert from "..";
import defaultTheme from "../../defaultTheme";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

const message = "Alert message";

describe("Alert", () => {
  const user = userEvent.setup();

  it("should contain children", () => {
    render(<Alert>{message}</Alert>);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
  it("should have data-test", () => {
    const dataTest = "test";
    render(<Alert dataTest={dataTest}>{message}</Alert>);
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
  it("should have margin-bottom", () => {
    const { container } = render(<Alert spaceAfter={SPACINGS_AFTER.NORMAL}>{message}</Alert>);
    // @ts-expect-error TODO
    expect(getComputedStyle(container.childNodes[1])).toHaveProperty(
      "margin-bottom",
      defaultTheme.orbit.spaceSmall,
    );
  });
  it("should be closable", async () => {
    const onClose = jest.fn();
    render(
      <Alert onClose={onClose} closable>
        {message}
      </Alert>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalled();
  });
});
