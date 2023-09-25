import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Button from "../../Button";
import Tooltip from "..";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: false,
    };
  };
});

describe("Tooltip mobile", () => {
  const user = userEvent.setup();

  it("it should not propagate onClick event when closing the tooltip using the close button", async () => {
    const content = "Write some message to the user";
    const onClick = jest.fn();
    render(
      <Button onClick={onClick}>
        <Tooltip content={content} stopPropagation>
          kek
        </Tooltip>
      </Button>,
    );

    // Open the tooltip
    await user.click(screen.getByText("kek"));
    // Close the tooltip
    await user.click(screen.getByText("Close"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
