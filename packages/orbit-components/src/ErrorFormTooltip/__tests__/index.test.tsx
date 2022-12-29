import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorFormTooltip from "..";

describe("ErrorFormTooltip", () => {
  const user = userEvent.setup();

  it("should have error", async () => {
    const onShown = jest.fn();
    const { container } = render(
      <ErrorFormTooltip dataTest="test" onShown={onShown} shown error="error" />,
    );

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("error")).toBeInTheDocument();
    await act(() => user.click(container));
    expect(onShown).toHaveBeenCalled();
  });

  it("should have help", async () => {
    const onShown = jest.fn();
    render(<ErrorFormTooltip dataTest="test" onShown={onShown} shown help="help" />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("help")).toBeInTheDocument();

    await act(() => user.click(screen.getByLabelText("close")));
    expect(onShown).toHaveBeenCalled();
  });
});
