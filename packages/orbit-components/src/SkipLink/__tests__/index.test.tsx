import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
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
    const dataTest = "test";
    const id = "ID";

    render(
      <SkipLink links={links} buttonLabel="https://www.kiwi.com/en/" dataTest={dataTest} id={id} />,
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.kiwi.com/cz/pages/content/terms",
    );
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("https://www.kiwi.com/en/"));
    const el = screen.getByTestId(dataTest);
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("id", id);

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
