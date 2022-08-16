import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SkipLink from "..";

describe("SkipLink", () => {
  it("should have expected DOM output", () => {
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
    // @ts-expect-error TODO
    userEvent.click(screen.getByRole("button"), { keyCode: 13 });
    expect(onClick).toHaveBeenCalled();
  });
});
