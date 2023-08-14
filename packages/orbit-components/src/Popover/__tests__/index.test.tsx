import * as React from "react";
import { screen, render, act, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tooltip from "../../Tooltip";
import Popover from "..";
import Button from "../../Button";
import Stack from "../../Stack";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: true,
    };
  };
});

describe("Popover", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const content = "Message for a user";
    const position = "bottom";
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const dataTest = "test";

    render(
      <Popover
        placement={position}
        dataTest={dataTest}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Button>Open</Button>
      </Popover>,
    );

    const openButton = screen.getByRole("button", { name: "Open" });
    await act(() => user.click(openButton));
    expect(onOpen).toHaveBeenCalled();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "Close" });
    await act(() => user.click(closeButton));
    expect(onClose).toHaveBeenCalled();
  });

  it("should have actions", async () => {
    const actions = (
      <Stack direction="row" justify="between">
        <Button type="secondary" size="small">
          Cancel
        </Button>
      </Stack>
    );

    render(
      <Popover actions={actions} content="kek" opened>
        bur
      </Popover>,
    );
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    await act(async () => {});
  });

  it("should have no padding", async () => {
    render(
      <Popover noPadding opened dataTest="test" content="kek">
        bur
      </Popover>,
    );
    expect(screen.getByText("kek").closest("div")).toHaveStyle({ padding: "0" });
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    await act(async () => {});
  });

  it("should have offset", async () => {
    render(
      <Popover opened offset={{ top: 10, left: 20 }} content="kek">
        <Button type="secondary" size="small">
          Cancel
        </Button>
      </Popover>,
    );

    // default is 4px
    expect(screen.getByRole("tooltip")).toHaveStyle({ top: "10" });
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    await act(async () => {});
  });

  it("with tooltip", async () => {
    render(
      <Popover dataTest="popover" content={<Tooltip content="Content">Tooltip</Tooltip>}>
        <Button>Open popover</Button>
      </Popover>,
    );
    await act(() => user.click(screen.getByRole("button")));
    const overlay = (await screen.findByTestId("popover")).previousElementSibling;
    expect(overlay).toBeInTheDocument();
    if (overlay) await act(() => user.click(overlay));
    expect(screen.queryByTestId("popover")).not.toBeInTheDocument();
  });
});
