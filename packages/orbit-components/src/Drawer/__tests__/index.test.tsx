import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, act } from "../../test-utils";
import Drawer from "..";

jest.useFakeTimers();

describe("Drawer", () => {
  const user = userEvent.setup({ delay: null });

  it("should have expected DOM output", () => {
    render(
      <Drawer dataTest="test" shown>
        content
      </Drawer>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("content"));
  });
  it("should be able to toggle visibility", () => {
    jest.useFakeTimers();
    const { rerender } = render(<Drawer shown={false}>content</Drawer>);
    expect(screen.getByText("content")).not.toBeVisible();
    rerender(<Drawer shown>content</Drawer>);
    expect(screen.getByText("content")).toBeVisible();
    rerender(<Drawer shown={false}>content</Drawer>);
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(screen.getByText("content")).not.toBeVisible();
    jest.useRealTimers();
  });
  it("should trigger close handler when clicked on close button", async () => {
    const onClose = jest.fn();
    render(
      <Drawer onClose={onClose} shown>
        content
      </Drawer>,
    );
    await user.click(screen.getByRole("button", { name: "Hide" }));
    expect(onClose).toHaveBeenCalled();
  });
  it("should trigger close handler when clicked on backdrop", async () => {
    const onClose = jest.fn();
    render(
      <Drawer dataTest="container" onClose={onClose} shown>
        <div data-test="content" />
      </Drawer>,
    );
    await user.click(screen.getByTestId("content"));
    expect(onClose).not.toHaveBeenCalled();
    await user.click(screen.getByTestId("container"));
    expect(onClose).toHaveBeenCalled();
  });
});
