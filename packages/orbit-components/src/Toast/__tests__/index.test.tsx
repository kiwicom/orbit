import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent, act } from "../../test-utils";
import { ToastRoot, createToast } from "..";
import { Airplane } from "../../icons";
import Toast from "../ToastMessage";
import Button from "../../Button";
import { EXPIRE_DISMISS_DELAY, SWIPE_DISMISS_DELAY } from "../consts";

describe("Toast", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(done => {
    act(() => {
      jest.useRealTimers();
      done();
    });
  });

  it("should have expected DOM output", async () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    const onDismiss = jest.fn();
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });

    render(
      <Toast
        id="1"
        icon={<Airplane dataTest="airplane" />}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ariaLive="polite"
        role="status"
        visible
        onDismiss={onDismiss}
        placement="bottom-center"
      >
        kek
      </Toast>,
    );

    const toast = screen.getByText("kek");

    await user.hover(toast);
    expect(onMouseEnter).toHaveBeenCalled();

    await user.unhover(toast);
    expect(onMouseLeave).toHaveBeenCalled();

    // test dismiss on swipe
    fireEvent.mouseDown(toast, { screenX: 10 });
    fireEvent.mouseMove(toast, { screenX: 300 });
    fireEvent.mouseUp(toast);
    act(() => jest.advanceTimersByTime(SWIPE_DISMISS_DELAY));
    expect(onDismiss).toHaveBeenCalled();

    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByRole("status")).toHaveStyle({ bottom: 0, justifyContent: "center" });
  });

  it(`should be in the dom with ToastRoot`, async () => {
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });

    render(
      <>
        <ToastRoot
          dataTest="test"
          leftOffset={10}
          rightOffset={20}
          topOffset={30}
          bottomOffset={40}
        />
        <Button
          onClick={() => {
            createToast("kek", { icon: <Airplane /> });
          }}
        >
          Add toast
        </Button>
      </>,
    );

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should be removed from DOM on dismiss", () => {
    const dismissTimeout = 300;
    render(<ToastRoot dismissTimeout={dismissTimeout} />);
    act(() => createToast("kek", { icon: <Airplane /> }));
    // TODO: find out why it needs an additional millisecond
    act(() => jest.advanceTimersByTime(dismissTimeout + EXPIRE_DISMISS_DELAY + 1));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
