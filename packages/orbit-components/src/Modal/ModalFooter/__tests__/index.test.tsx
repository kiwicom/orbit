import React from "react";

import { render, screen } from "../../../test-utils";
import ModalFooter from "..";
import Button from "../../../Button";

describe("ModalFooter", () => {
  it("should not have StyledChild wrapper on single children", () => {
    render(
      <ModalFooter dataTest="footer">
        <Button type="secondary">Cancel</Button>
      </ModalFooter>,
    );

    expect(screen.queryByTestId("footer-el-wrapper")).not.toBeInTheDocument();
  });

  it("should render buttons with space-between", () => {
    render(
      <ModalFooter dataTest="footer">
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Save</Button>
      </ModalFooter>,
    );

    expect(screen.getAllByTestId("footer-el-wrapper")).toHaveLength(2);
  });
});
