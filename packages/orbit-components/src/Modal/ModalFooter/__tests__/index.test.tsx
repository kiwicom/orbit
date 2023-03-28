import { render, screen } from "@testing-library/react";
import React from "react";

import ModalFooter from "..";
import Button from "../../../Button";
import { getBreakpointWidth } from "../../../utils/mediaQuery";
import theme from "../../../defaultTheme";

describe("ModalFooter", () => {
  it("should render save button with flex-end", () => {
    render(
      <ModalFooter dataTest="footer">
        {null}
        <Button type="primary">Save</Button>
      </ModalFooter>,
    );

    expect(screen.getByTestId("footer")).toHaveStyleRule("justify-content", "flex-end", {
      media: getBreakpointWidth("largeMobile", theme),
    });
  });

  it("should render buttons with space-between", () => {
    render(
      <ModalFooter dataTest="footer">
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Save</Button>
      </ModalFooter>,
    );

    expect(screen.getByTestId("footer")).toHaveStyleRule("justify-content", "space-between", {
      media: getBreakpointWidth("largeMobile", theme),
    });
  });
});
