import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MobileDialog from "..";

let dialogs: HTMLElement;

beforeAll(() => {
  dialogs = document.createElement("div");
  dialogs.setAttribute("id", "dialogs");
  document.body?.appendChild(dialogs);
});

afterAll(() => {
  document.body?.removeChild(dialogs);
});
describe("MobileDialogPrimitive", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const onShown = jest.fn();
    render(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <MobileDialog tabIndex="1" dataTest="test" onShow={onShown} content="My text link">
        children
      </MobileDialog>,
    );
    const children = screen.getByText("children");
    expect(children).toHaveAttribute("tabindex", "1");
    await act(() => user.click(children));
    expect(onShown).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("My text link")).toBeInTheDocument();
  });
});
