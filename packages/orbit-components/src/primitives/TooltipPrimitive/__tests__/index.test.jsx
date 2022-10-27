// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tooltip from "..";
import Airplane from "../../../icons/Airplane";

describe("Tooltip", () => {
  it("it should match snapshot", async () => {
    const content = "Write some message to the user";
    const { container } = render(
      <Tooltip content={content}>
        <Airplane />
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    // $FlowFixMe
    await act(async () => {});
  });

  it("should call onClick 1 time", async () => {
    const content = "Write some message to the user";
    const onClick = jest.fn();

    render(
      <div onClick={onClick} role="button" tabIndex={0} onKeyDown={() => {}}>
        <Tooltip
          stopPropagation
          content={
            <div onClick={onClick} role="button" tabIndex={0} onKeyDown={() => {}}>
              {content}
            </div>
          }
        >
          <div>kek</div>
        </Tooltip>
      </div>,
    );

    userEvent.hover(screen.getByText("kek"));
    userEvent.click(screen.getByText(content));

    expect(onClick).toHaveBeenCalledTimes(1);
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    // $FlowFixMe
    await act(async () => {});
  });

  it("should call onClick 2 times", async () => {
    const content = "Write some message to the user";
    const onClick = jest.fn();

    render(
      <div onClick={onClick} role="button" tabIndex={0} onKeyDown={() => {}}>
        <Tooltip
          content={
            <div onClick={onClick} role="button" tabIndex={0} onKeyDown={() => {}}>
              {content}
            </div>
          }
        >
          <div>kek</div>
        </Tooltip>
      </div>,
    );

    userEvent.hover(screen.getByText("kek"));
    userEvent.click(screen.getByText(content));

    expect(onClick).toHaveBeenCalledTimes(2);
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    // $FlowFixMe
    await act(async () => {});
  });
});
