// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tile from "../index";
import Airplane from "../../icons/Airplane";

describe("Tile", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const title = "title";
    const description = "description";
    const onClick = jest.fn();
    const htmlTitle = "title";

    render(
      <Tile
        dataTest={dataTest}
        icon={<Airplane />}
        title={title}
        description={description}
        onClick={onClick}
        htmlTitle={htmlTitle}
      >
        kek
      </Tile>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByTitle(htmlTitle)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveAttribute("tabindex", "0");
    expect(screen.getByText("kek")).toHaveStyle({ padding: "16px" });

    userEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should be link", () => {
    render(<Tile href="#" external />);
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("should be expandable", () => {
    render(<Tile expandable initialExpanded />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-expanded");
  });
});
