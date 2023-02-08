import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChoiceTile from "..";

describe("ChoiceTile", () => {
  it("renders with correct properties", () => {
    const onClick = jest.fn();

    render(
      <ChoiceTile
        dataTest="choice-tile"
        title="title"
        description="description"
        label="label"
        icon="icon"
        type="radio"
        onClick={onClick}
      >
        Custom content
      </ChoiceTile>,
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("label")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
    expect(screen.getByText("Custom content")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
    userEvent.click(screen.getByTestId("choice-tile"));

    expect(onClick).toHaveBeenCalled();
  });

  it("can be checkbox", () => {
    render(<ChoiceTile type="checkbox" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("can be selected", () => {
    render(<ChoiceTile type="radio" selected />);
    expect(screen.getByRole("radio")).toBeChecked();
  });
});
