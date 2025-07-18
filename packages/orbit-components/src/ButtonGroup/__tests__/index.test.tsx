import * as React from "react";

import { render, screen } from "../../test-utils";
import Button from "../../Button";
import Airplane from "../../icons/Airplane";
import ButtonGroup from "..";

const children = "button";

describe("ButtonGroup", () => {
  it("should have data-test", () => {
    render(
      <ButtonGroup dataTest="test">
        <Button type="secondary">{children}</Button>
        <Button iconLeft={<Airplane ariaHidden />}>{children}</Button>
      </ButtonGroup>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
