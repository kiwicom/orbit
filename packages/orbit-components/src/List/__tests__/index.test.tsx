import React from "react";

import { render, screen } from "../../test-utils";
import List from "..";
import ListItem from "../ListItem";
import Check from "../../icons/Check";
import { SPACINGS_AFTER } from "../../common/consts";

describe("List", () => {
  it("should have expected DOM output", () => {
    const size = "small";
    const type = "secondary";
    const dataTest = "test";
    const content = "This contains a nice sentence";

    render(
      <List size={size} type={type} dataTest={dataTest} spaceAfter={SPACINGS_AFTER.NORMAL}>
        <ListItem icon={<Check color="success" ariaHidden />}>{content}</ListItem>
      </List>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  it("should render with ariaLabelledby attribute", () => {
    const ariaLabelledby = "heading-id";
    const dataTest = "list-with-aria-labelledby";

    render(
      <List dataTest={dataTest} ariaLabelledby={ariaLabelledby}>
        <ListItem>Test item</ListItem>
      </List>,
    );

    const listElement = screen.getByTestId(dataTest);
    expect(listElement).toHaveAttribute("aria-labelledby", ariaLabelledby);
  });
});
