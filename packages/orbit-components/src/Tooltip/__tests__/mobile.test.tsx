import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    await act(() => user.click(screen.getByText("kek")));
    // Close the tooltip
    await act(() => user.click(screen.getByText("Close")));

    expect(onClick).not.toHaveBeenCalled();
  });
});
