import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SkipNavigation from "..";

describe("SkipNavigation", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", () => {
    const actions = [
      {
        link: "https://www.kiwi.com/cz/pages/content/terms",
        name: "Got to terms and condition",
      },
      {
        name: "Add baggage",
      },
      {
        name: "Reguest refund",
      },
    ];
    const feedbackUrl = "https://www.kiwi.com/en/";
    render(<SkipNavigation actions={actions} feedbackUrl={feedbackUrl} />);
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should toggle select on focus/blur", async () => {
    const { container } = render(
      <SkipNavigation
        actions={[
          {
            name: "Add baggage",
          },
        ]}
        feedbackUrl="https://www.kiwi.com/en/"
      />,
    );

    expect(container).toHaveStyle({ clip: "rect(0 0 0 0)" });
    await act(() => user.tab());
    expect(container).toHaveStyle({ clip: "" });
  });
});
