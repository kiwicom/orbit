import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SkipLink from "..";

describe("SkipLink", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const onClick = jest.fn();
    const links = [
      {
        href: "https://www.kiwi.com/cz/pages/content/terms",
        name: "Go to terms and conditions",
      },
      {
        name: "Go to something",
        onClick,
      },
    ];

    render(<SkipLink links={links} buttonLabel="https://www.kiwi.com/en/" />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.kiwi.com/cz/pages/content/terms",
    );
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("https://www.kiwi.com/en/"));

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
