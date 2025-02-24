import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, fireEvent } from "../../test-utils";
import Tile from "..";
import Airplane from "../../icons/Airplane";

describe("Tile", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const dataTest = "test";
    const title = "title";
    const description = "description";
    const onClick = jest.fn();

    render(
      <Tile
        dataTest={dataTest}
        icon={<Airplane />}
        title={title}
        description={description}
        onClick={onClick}
      >
        kek
      </Tile>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
    expect(screen.getByText("kek")).toHaveStyle({ padding: "16px" });

    await user.click(screen.getByRole("button"));
    fireEvent.keyDown(screen.getByRole("button"), { code: "Enter" });
    fireEvent.keyDown(screen.getByRole("button"), { code: "Space" });

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("should be link", () => {
    const htmlTitle = "title";
    render(<Tile href="#" external htmlTitle={htmlTitle} />);

    expect(screen.getByTitle(htmlTitle)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("should be a list", () => {
    render(<Tile href="#" external as="li" />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should be expandable", () => {
    render(<Tile expandable initialExpanded />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded");
  });

  it("should be expanded", () => {
    render(<Tile expandable expanded />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded");
  });
});
