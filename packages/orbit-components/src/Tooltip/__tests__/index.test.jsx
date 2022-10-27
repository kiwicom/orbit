// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tooltip from "..";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: true,
    };
  };
});

describe("Tooltip", () => {
  it("it should render Tooltip", async () => {
    const content = "Write some message to the user";
    const onShow = jest.fn();

    render(
      <Tooltip content={content} onShow={onShow}>
        kek
      </Tooltip>,
    );

    expect(screen.getByText("kek")).toBeInTheDocument();
    userEvent.hover(screen.getByText("kek"));
    expect(onShow).toHaveBeenCalled();
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    // $FlowFixMe
    await act(async () => {});
  });
});
