import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, act } from "../../../test-utils";
import Tooltip from "..";

describe("Tooltip", () => {
  const user = userEvent.setup();

  it("it should match snapshot", async () => {
    const content = "Write some message to the user";
    const { container } = render(
      <Tooltip content={content}>
        <p>Some text</p>
      </Tooltip>,
    );

    expect(container.firstChild).toMatchSnapshot();
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

    await act(() => user.hover(screen.getByText("kek")));
    await act(() => user.click(screen.getByText(content)));

    expect(onClick).toHaveBeenCalledTimes(1);
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

    await act(() => user.hover(screen.getByText("kek")));
    await act(() => user.click(screen.getByText(content)));

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
