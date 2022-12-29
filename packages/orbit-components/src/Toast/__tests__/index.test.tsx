import * as React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToastRoot, createToast } from "..";
import { Airplane } from "../../icons";
import Toast from "../ToastMessage";
import Button from "../../Button";
import { EXPIRE_DISMISS_DELAY, SWIPE_DISMISS_DELAY } from "../consts";

describe("Toast", () => {
  const user = userEvent.setup();

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

    render(
      <Toast
        id="1"
        icon={<Airplane dataTest="airplane" />}
        onUpdateHeight={() => {}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ariaLive="polite"
        visible
        onDismiss={onDismiss}
        placement="bottom-center"
      >
        kek
      </Toast>,
    );

    const toast = screen.getByText("kek");

    await act(() => user.hover(toast));
    expect(onMouseEnter).toHaveBeenCalled();

    await act(() => user.unhover(toast));
    expect(onMouseLeave).toHaveBeenCalled();

    jest.useFakeTimers();

    // test dismiss on swipe
    fireEvent.mouseDown(toast, { screenX: 10 });
    fireEvent.mouseMove(toast, { screenX: 300 });
    fireEvent.mouseUp(toast);
    act(() => {
      jest.advanceTimersByTime(SWIPE_DISMISS_DELAY);
    });
    expect(onDismiss).toHaveBeenCalled();

    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByRole("status")).toHaveStyle({ bottom: 0, justifyContent: "center" });
  });

  it(`should have expected DOM output with ToastRoot`, async () => {
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

    await act(() => user.click(screen.getByRole("button")));

    expect(screen.getByTestId("test")).toHaveStyle({
      top: "30px",
      left: "10px",
      right: "20px",
      bottom: "40px",
      position: "fixed",
    });

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should be removed from DOM on dismiss", () => {
    const dismissTimeout = 300;
    render(<ToastRoot dismissTimeout={dismissTimeout} />);
    jest.useFakeTimers();
    act(() => createToast("kek", { icon: <Airplane /> }));
    act(() => {
      jest.advanceTimersByTime(dismissTimeout + EXPIRE_DISMISS_DELAY);
    });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
