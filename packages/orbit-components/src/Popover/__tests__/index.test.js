// @flow
import * as React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Popover from "../index";
import Button from "../../Button";
import Stack from "../../Stack";
import { getBreakpointWidth } from "../../utils/mediaQuery/index";
import { QUERIES } from "../../utils/mediaQuery/consts";
import theme from "../../defaultTheme";

describe("Popover", () => {
  it("should have expected DOM output", () => {
    const content = "Message for a user";
    const position = "bottom";
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const dataTest = "test";

    render(
      <Popover
        preferredPosition={position}
        dataTest={dataTest}
        content={content}
        onOpen={onOpen}
        onClose={onClose}
      >
        <Button>Open</Button>
      </Popover>,
    );

    const openButton = screen.getByRole("button", { name: "Open" });
    userEvent.click(openButton);
    expect(onOpen).toHaveBeenCalled();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const closeButton = screen.getByRole("button", { name: "Close" });
    userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("should have actions", () => {
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
  });

  it("should have no padding", () => {
    render(
      <Popover noPadding opened dataTest="test" content="kek">
        bur
      </Popover>,
    );
    expect(screen.getByText("kek").closest("div")).toHaveStyle({ padding: "0" });
  });

  it("should have offset", () => {
    render(
      <Popover opened offset={{ top: 10, left: 20 }} content="kek">
        <Button type="secondary" size="small">
          Cancel
        </Button>
      </Popover>,
    );

    // default is 4px
    expect(screen.getByRole("tooltip")).toHaveStyleRule("top", "14px", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });

    // default is 0px
    expect(screen.getByRole("tooltip")).toHaveStyleRule("left", "20px", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
    });
  });
});
